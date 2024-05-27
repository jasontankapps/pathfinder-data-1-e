import { FC, useMemo, ClassAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import Markdown, { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm'
import DisplayTable, { Table } from './DisplayTable';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDcodeProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;


interface ContainerProps {
	markdown: string | string[]
	tables?: Table[]
}

const plugins = [remarkGfm];

const doLink = (props: MDaProps) => {
	const { href = "", children } = props;
	return <Link to={"/" + href}>{children}</Link>
};

const code = (props: MDcodeProps, tables: Table[]) => {
	const { children, ...etc } = props;
	if(typeof(children) === "string") {
		const m = children.match(/^table([0-9]+)$/);
		const i = m ? (Number(m[1]) || -1) : -1;
		return i >= 0 && i < tables.length ? <DisplayTable table={tables[i]} /> : <div><strong>ERROR fetching [{children}]</strong></div>;
	}
	return <code {...etc}>ERROR [invalid syntax]</code>;
};

const makeComponents = (tables: Table[]) => {
	return {
		a: doLink,
		code: (props: MDcodeProps) => code(props, tables)
	};
};

const DisplayItem: FC<ContainerProps> = ({ markdown, tables = [] }) => {
	const contents = Array.isArray(markdown) ? markdown.join("\n") : markdown;
	const components = useMemo(() => makeComponents(tables), [tables]);
	return (
		<Markdown
			remarkPlugins={plugins}
			components={components}
		>{contents}</Markdown>
	);
};

export default DisplayItem;
