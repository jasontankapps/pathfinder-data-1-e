import { FC, useMemo, ClassAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import Markdown, { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { IonRippleEffect } from '@ionic/react';
import { HashLink } from 'react-router-hash-link';
import DisplayTable from './DisplayTable';
import { DisplayItemProps, Table } from '../types';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDpProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;
type MDtProps = ClassAttributes<HTMLTableElement> & HTMLAttributes<HTMLTableElement> & ExtraProps;

const plugins = [remarkGfm];

const doLink = (props: MDaProps) => {
	const { href = "", children } = props;
	if(href.match(/^\//)) {
		// Initial slash indicates this needs a ripple.
		return <Link to={href}>{children}<IonRippleEffect /></Link>
	} else if (href.match(/^#/)) {
		// Hash indicates internal link
		const m = href.match(/user-content-fn-(.+)/);
		const id = m ? "user-content-fnref-" + m[1] : undefined;
		const scrollWithOffset = (el: HTMLElement) => {
			const w = document.getElementsByTagName("ion-content");
			const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
			const yOffset = id ? 0 : -80;
			//window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
			[...w].pop()!.scrollByPoint(0, yCoordinate + yOffset, 500);
		}
		return <HashLink id={id} scroll={scrollWithOffset} to={href}>{children}</HashLink>
	}
	return <Link to={"/" + href}>{children}</Link>
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
	return <div className="tableWrap">{children}</div>;
};

const td = (props: MDpProps) => {
	// for IonRippleEffect
	return <td className="ion-activatable">{props.children}</td>;
};

const makeComponents = (tables: Table[]) => {
	return {
		a: doLink,
		p: (props: MDpProps) => p(props, tables),
		td,
		table
	};
};

const DisplayItem: FC<DisplayItemProps> = ({ markdown, tables = [], className }) => {
	const contents = Array.isArray(markdown) ? markdown.join("\n") : markdown;
	const components = useMemo(() => makeComponents(tables), [tables]);
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
