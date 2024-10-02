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
	if(href.match(/^\//)) {
		// Initial slash indicates this needs a ripple.
		return <Link to={href} id={id} aria-label={ariaLabel}>{children}<IonRippleEffect /></Link>
	} else if (href.match(/^#/)) {
		// Hash indicates internal link
		//const m = href.match(/user-content-fn-(.+)/);
		// Trying to make create the ID property that the footnote link will be pointing at,
		//   since the plugin apparently doesn't do that automatically...
		const scrollWithOffset = (el: HTMLElement) => {
			// `el` is the element being scrolled TO
			let w = el.parentElement;
			while(w && w.tagName.toUpperCase() !== "ION-CONTENT") {
				w = w.parentElement;
			}
			const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
			const yOffset = id ? 0 : -80;
			//window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
			//[...w].pop()!.scrollByPoint(0, yCoordinate + yOffset, 500);
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

const p = (props: MDpProps, tables: Table[]) => {
	const { children } = props;
	if(typeof(children) === "string") {
		const m = children.match(/^\{table([0-9]+)\}$/);
		if(m) {
			const index = parseInt(m[1]);
			if(index >= 0 && index < tables.length) {
				return <DisplayTable table={tables[index]} />;
			}
		}
	}
	return <p>{children}</p>;
};

const h1 = (props: MDpProps) => {
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
	return <IonItemDivider className="mainItem" id={id}><IonLabel>{text}</IonLabel></IonItemDivider>
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

const h22 = (props: MDpProps) => {
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

const h6 = (props: MDpProps) => {
	const input = props.children;
	const dispatch = useAppDispatch();
	const [element, url] = getElementAndUrl(typeof input === "string" ? input : String(input));
	return <IonItem className="mainItem linked reversed" routerLink={url} onClick={() => dispatch(goTo(url))} routerDirection="forward">{element}</IonItem>
};

const hr = () => {
	return <IonItemDivider className="mainItem divider"></IonItemDivider>
};

const makeComponents = (tables: Table[], id: string) => {
	return {
		a: (props: MDaProps) => doLink(props, id),
		li: (props: MDpProps) => li(props, id),
		p: (props: MDpProps) => p(props, tables),
		h1,
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
		p: (props: MDpProps) => p(props, tables),
		td,
		table,
		h2: h22
	};
};

const DisplayMainItem: FC<DisplayMainItemProps> = ({ description, tables = [], singleTable, prefixId }) => {
	const components = useMemo(() => makeComponents(tables, prefixId), [tables, prefixId]);
	const basicComponents = useMemo(() => makeBasicComponents(tables, prefixId), [tables, prefixId]);
	const baseClass = "mainItem" + (singleTable ? " singleTable" : "");
	return description.map((line, i) => {
		if(typeof line === "string") {
			return (
				<Markdown
					key={`mainItem-${i}`}
					remarkPlugins={plugins}
					components={components}
				>{line}</Markdown>
			);
		}
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
