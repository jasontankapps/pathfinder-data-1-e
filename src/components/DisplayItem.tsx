import { FC, useMemo, ClassAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import Markdown, { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm'
import DisplayTable from './DisplayTable';
import { DisplayItemProps, Table } from '../types';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDpProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;

const plugins = [remarkGfm];

const doLink = (props: MDaProps) => {
	const { href = "", children } = props;
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

const makeComponents = (tables: Table[]) => {
	return {
		a: doLink,
		p: (props: MDpProps) => p(props, tables)
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
