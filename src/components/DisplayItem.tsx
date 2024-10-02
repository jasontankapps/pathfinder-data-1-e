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
	if(href.match(/^\//)) {
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
			//window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
			//[...w].pop()!.scrollByPoint(0, yCoordinate + yOffset, 500);
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

const p = (props: MDpProps, tables: Table[]) => {
	const { children } = props;
	if(typeof(children) === "string") {
		let m = children.match(/^\{table([0-9]+)\}$/);
		if(m) {
			const index = parseInt(m[1]);
			if(index >= 0 && index < tables.length) {
				return <DisplayTable table={tables[index]} />;
			}
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

const makeComponents = (tables: Table[], id: string) => {
	return {
		a: (props: MDaProps) => doLink(props, id),
		li: (props: MDpProps) => li(props, id),
		p: (props: MDpProps) => p(props, tables),
		td,
		table,
		h2
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
