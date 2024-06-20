import { FC, useMemo, ClassAttributes, AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Markdown, { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm'
import DisplayTable from './DisplayTable';
import { CodePlugin, DisplayItemProps, Table } from '../types';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDcodeProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;

const plugins = [remarkGfm];

const doLink = (props: MDaProps) => {
	const { href = "", children } = props;
	return <Link to={"/" + href}>{children}</Link>
};

const code = (props: MDcodeProps, tables: Table[], otherCodes: CodePlugin[]) => {
	const { children, ...etc } = props;
	if(typeof(children) === "string") {
		let m = children.match(/^table([0-9]+)$/);
		let potentialOutput: false | ReactNode = false;
		if(m) {
			const index = parseInt((m as RegExpMatchArray)[1]);
			if(index >= 0 && index < tables.length) {
				return <DisplayTable table={tables[index]} />;
			}
		} else if (otherCodes.some(func => {
			// This handles things like children.match(/^CAPSTONE (.+)$/)
			const result = func(children);
			if(result) {
				potentialOutput = result;
				return true;
			}
			return false;
		})) {
			if(potentialOutput) {
				// This stupid `if` is for the sake of TypeScript
				return potentialOutput;
			}
		}
		return <div><strong>ERROR fetching [{children}]</strong></div>;
	}
	return <code {...etc}>ERROR [invalid syntax]</code>;
};

const makeComponents = (tables: Table[], otherCodes: CodePlugin[]) => {
	return {
		a: doLink,
		code: (props: MDcodeProps) => code(props, tables, otherCodes)
	};
};

const DisplayItem: FC<DisplayItemProps> = ({ markdown, tables = [], otherCodes = [], className }) => {
	const contents = Array.isArray(markdown) ? markdown.join("\n") : markdown;
	const components = useMemo(() => makeComponents(tables, otherCodes), [tables]);
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
