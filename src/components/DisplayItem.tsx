import { FC, useMemo, ClassAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import Markdown, { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { HashLink } from 'react-router-hash-link';
import { IonRippleEffect } from '@ionic/react';
import Link from './Link';
import DisplayTable from './DisplayTable';
import { DisplayItemProps, Table } from '../types';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDpProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;
type MDtProps = ClassAttributes<HTMLTableElement> & HTMLAttributes<HTMLTableElement> & ExtraProps;

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
//		console.log(id, href);
		return <HashLink aria-label={ariaLabel} id={id && (prefix + id)} scroll={scrollWithOffset} to={"#" + prefix + href.slice(1)}>{children}</HashLink>
	}
	return <Link to={"/" + href} id={id} aria-label={ariaLabel}>{children}</Link>
};

const li = (props: MDpProps, prefix: string) => {
	// for Footnotes
	const { id, children } = props;
	return <li id={id && (prefix + id)}>{children}</li>;
};

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
		// Display the requested table
		let m = children.match(/^\{table([0-9]+)\}$/);
		if(m) {
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
							const hash = input.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, "");
							return (
								<li key={`jumpLink-${prefix}${hash}`}>
									<HashLink scroll={scrollWithOffset} to={`#${prefix}${hash}`}>{input} &#8269;</HashLink>
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

const table = (props: MDtProps) => {
	const { children } = props;
	return <div className="tableWrap"><table>{children}</table></div>;
};

const td = (props: MDpProps) => {
	// for IonRippleEffect
	return <td className="ion-activatable">{props.children}</td>;
};

const h2 = (props: MDpProps) => {
	if (props.children === "Footnotes") {
		return <h3>{props.children}</h3>;
	}
	return <h2>{props.children}</h2>;
};

const makeId = (input: string) => input.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, "");

const h3 = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h3>{children}</h3>;
	}
	return <h3 id={prefix + makeId(children)}>{children}</h3>;
};

const h4 = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h4>{children}</h4>;
	}
	return <h4 id={prefix + makeId(children)}>{children}</h4>;
};

const h5 = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h5>{children}</h5>;
	}
	return <h5 id={prefix + makeId(children)}>{children}</h5>;
};

const h6 = (props: MDpProps, prefix: string) => {
	const { children } = props;
	if(typeof(children) !== "string") {
		return <h6>{children}</h6>;
	}
	return <h6 id={prefix + makeId(children)}>{children}</h6>;
};

const makeComponents = (tables: Table[], id: string) => {
	return {
		a: (props: MDaProps) => doLink(props, id),
		li: (props: MDpProps) => li(props, id),
		p: (props: MDpProps) => p(props, tables, id),
		td,
		table,
		h2,
		h3: (props: MDpProps) => h3(props, id),
		h4: (props: MDpProps) => h4(props, id),
		h5: (props: MDpProps) => h5(props, id),
		h6: (props: MDpProps) => h6(props, id)
	};
};

const DisplayItem: FC<DisplayItemProps> = ({ markdown, tables = [], className, prefix }) => {
	const id = (prefix || "p" + String(Math.floor(Math.random() * 100000))) + "-";
	const contents = Array.isArray(markdown) ? markdown.join("\n") : markdown;
	const components = useMemo(() => makeComponents(tables, id), [tables]);
	return (
		<div className={className}>
			<Markdown
				remarkPlugins={plugins}
				components={components}
			>{contents}</Markdown>
		</div>
	);
};

export default DisplayItem;
