import { FC, useMemo, ClassAttributes, AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import Markdown, { ExtraProps } from 'react-markdown';
import { HashLink } from 'react-router-hash-link';
import remarkGfm from 'remark-gfm'
import { IonItem, IonItemDivider, IonLabel, IonRippleEffect } from '@ionic/react';
import { Table } from '../types';
import { goTo } from '../store/historySlice';
import { useAppDispatch } from '../store/hooks';
import Link from './Link';
import DisplayTable from './DisplayTable';

export interface DisplayMainItemProps {
	description: (string | string[])[]
	tables?: Table[]
	singleTable?: boolean
	prefixId: string
}

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDpProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;
type MDtProps = ClassAttributes<HTMLTableElement> & HTMLAttributes<HTMLTableElement> & ExtraProps;

/*

# (Header)
ItemHeader

---
ItemDivider

## (Link) (Text to Display) // (optional) || (extra info)
Plain, emphasized; optional aligned to end; extra info put on separate line underneath, deemphasized

### (Link) (Text to Display) // (optional) || (extra info)
Plain, less emphasis, padding left; optional aligned to end; extra info put on separate line underneath, deemphasized

###### (Link) (Text to Display) // (optional) || (extra info)
Plain, emphasized, aligned to end; optional aligned to start; extra info put on separate line underneath, deemphasized

[ lines... ]
Treat as a singular plain Markdown (with {table#} support)

h1, h2, h3, h6, hr

*/

const plugins = [remarkGfm];

const doLink = (props: MDaProps, prefix: string) => {
	const { href = "", children, id, "aria-label": ariaLabel } = props;
	if (href.match(/^http/)) {
		return <a href={href} id={id} aria-label={ariaLabel}>{children}</a>
	} else if(href.match(/^\//)) {
		// Initial slash indicates this needs a ripple.
		return <Link to={href} id={id} aria-label={ariaLabel}>{children}<IonRippleEffect /></Link>
	} else if (href.match(/^#/)) {
		// Hash indicates internal link
		const scrollWithOffset = (el: HTMLElement) => {
			// `el` is the element being scrolled TO
			let w = el.parentElement;
			while(w && w.tagName.toUpperCase() !== "ION-CONTENT") {
				w = w.parentElement;
			}
			const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
			const yOffset = id ? 0 : -80;
			w && (w as HTMLIonContentElement).scrollByPoint(0, yCoordinate + yOffset, 500);
		}
		return <HashLink aria-label={ariaLabel} id={id && (prefix + id)} scroll={scrollWithOffset} to={"#" + prefix + href.slice(1)}>{children}</HashLink>
	}
	return <Link to={"/" + href} id={id} aria-label={ariaLabel}>{children}</Link>
};

const table = (props: MDtProps) => {
	const { children } = props;
	return <div className="tableWrap"><table>{children}</table></div>;
};

const td = (props: MDpProps) => {
	// for IonRippleEffect
	return <td className="ion-activatable">{props.children}</td>;
};

const li = (props: MDpProps, prefix: string) => {
	// for Footnotes
	const { id, children } = props;
	return <li id={id && (prefix + id)}>{children}</li>;
};

const makeId = (input: string) => input.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, "");

const scrollWithOffset = (el: HTMLElement) => {
	// `el` is the element being scrolled TO
	let w = el.parentElement;
	while(w && w.tagName.toUpperCase() !== "ION-CONTENT") {
		w = w.parentElement;
	}
	const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
	w && (w as HTMLIonContentElement).scrollByPoint(0, Math.max(0, yCoordinate - 80), 500);
}
const p = (props: MDpProps, tables: Table[], prefix: string) => {
	const { children } = props;
	if(typeof(children) === "string") {
		const m = children.match(/^\{table([0-9]+)\}$/);
		if(m) {
			// Display the requested table
			const index = parseInt(m[1]);
			if(index >= 0 && index < tables.length) {
				return <DisplayTable table={tables[index]} />;
			}
		}
		const m2 = children.match(/^\{jumplist (.+)\}$/);
		if(m2) {
			// Create the requested "Jump to:" list
			return (
				<div className="jumpList">
					<h2>Jump to:</h2>
					<ul>
						{m2[1].split(/ +\/ +/).map(input => {
							const hash = prefix + makeId(input);
							return (
								<li key={`jumpLink-${hash}`}>
									<HashLink scroll={scrollWithOffset} to={`#${hash}`}>{input}</HashLink>
								</li>
							);
						})}
					</ul>
				</div>
			);
		}
	}
	return <p>{children}</p>;
};

const h1 = (props: MDpProps, prefix: string) => {
	const { children } = props;
	let id;
	let text = children;
	if(typeof children == "string") {
		const point = children.match(/(^.+?) ! (.+$)/);
		if(point) {
			id = point[2];
			text = point[1];
		}
	}
	return <IonItemDivider className="mainItem" id={prefix + id}><IonLabel>{text}</IonLabel></IonItemDivider>
};

const getElementAndUrl = (input: string): [ReactNode, string] => {
	const m = input.match(/^\/?([^ ]+) (.+$)/);
	if(!m) {
		return [<h1 className="error">{input}</h1>, ""];
	}
	const url = "/" + m[1];
	const text = m[2];
	const slash = text.match(/(^.+?) \/\/ (.+$)/);
	if(slash) {
		return ([
			<IonLabel className="endcap">
				<div>{slash[1]}</div>
				<div>{slash[2]}</div>
			</IonLabel>,
			url
		]);
	}
	const bars = text.match(/(^.+?) \|\| (.+$)/);
	if(bars) {
		return ([
			<IonLabel className="bottomcap">
				<div>{bars[1]}</div>
				<div>{bars[2]}</div>
			</IonLabel>,
			url
		]);
	}
	return [<IonLabel>{text}</IonLabel>, url]
};

const h2 = (props: MDpProps) => {
	const input = props.children;
	const dispatch = useAppDispatch();
	const [element, url] = getElementAndUrl(typeof input === "string" ? input : String(input));
	return <IonItem className="mainItem linked" routerLink={url} onClick={() => dispatch(goTo(url))} routerDirection="forward">{element}</IonItem>
};

const h2Basic = (props: MDpProps) => {
	if (props.children === "Footnotes") {
		return <h3>{props.children}</h3>;
	}
	return <h2>{props.children}</h2>;
};

const h3 = (props: MDpProps) => {
	const input = props.children;
	const dispatch = useAppDispatch();
	const [element, url] = getElementAndUrl(typeof input === "string" ? input : String(input));
	return <IonItem className="mainItem linked indented" routerLink={url} onClick={() => dispatch(goTo(url))} routerDirection="forward">{element}</IonItem>
};

const h3Basic = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h3>{children}</h3>;
	}
	return <h3 id={prefix + makeId(children)}>{children}</h3>;
};

const h4Basic = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h4>{children}</h4>;
	}
	return <h4 id={prefix + makeId(children)}>{children}</h4>;
};

const h5Basic = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h5>{children}</h5>;
	}
	return <h5 id={prefix + makeId(children)}>{children}</h5>;
};

const h6 = (props: MDpProps) => {
	const input = props.children;
	const dispatch = useAppDispatch();
	const [element, url] = getElementAndUrl(typeof input === "string" ? input : String(input));
	return <IonItem className="mainItem linked reversed" routerLink={url} onClick={() => dispatch(goTo(url))} routerDirection="forward">{element}</IonItem>
};

const h6Basic = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h6>{children}</h6>;
	}
	return <h6 id={prefix + makeId(children)}>{children}</h6>;
};

const hr = () => {
	return <IonItemDivider className="mainItem divider"></IonItemDivider>
};

const makeComponents = (tables: Table[], id: string) => {
	return {
		a: (props: MDaProps) => doLink(props, id),
		li: (props: MDpProps) => li(props, id),
		p: (props: MDpProps) => p(props, tables, id),
		h1: (props: MDpProps) => h1(props, id),
		h2,
		h3,
		h6,
		hr,
		td
	};
};
const makeBasicComponents = (tables: Table[], id: string) => {
	return {
		a: (props: MDaProps) => doLink(props, id),
		li: (props: MDpProps) => li(props, id),
		p: (props: MDpProps) => p(props, tables, id),
		td,
		table,
		h2: h2Basic,
		h3: (props: MDpProps) => h3Basic(props, id),
		h4: (props: MDpProps) => h4Basic(props, id),
		h5: (props: MDpProps) => h5Basic(props, id),
		h6: (props: MDpProps) => h6Basic(props, id)
	};
};

const DisplayMainItem: FC<DisplayMainItemProps> = ({ description, tables = [], singleTable, prefixId }) => {
	const components = useMemo(() => makeComponents(tables, prefixId), [tables, prefixId]);
	const basicComponents = useMemo(() => makeBasicComponents(tables, prefixId), [tables, prefixId]);
	const baseClass = "mainItem" + (singleTable ? " singleTable" : "");
	return description.map((line, i) => {
		if(typeof line === "string") {
			// This section covers things like "## main/link Linktext"
			return (
				<Markdown
					key={`mainItem-${i}`}
					remarkPlugins={plugins}
					components={components}
				>{line}</Markdown>
			);
		}
		// This section covers the "normal" markdown text sections
		return (
			<IonItem className={`${baseClass} basic`} key={`mainItemBasic-${i}`}><IonLabel>
				<Markdown
					remarkPlugins={plugins}
					components={basicComponents}
				>{line.join("\n")}</Markdown>
			</IonLabel></IonItem>
		);
	});
};

export default DisplayMainItem;
