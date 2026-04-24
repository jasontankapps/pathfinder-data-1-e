import { createElement, PropsWithChildren, Fragment, ReactNode } from 'react';
import Link from './Link';

interface HtmlObject {
	tag: string
	content: string
	props: { [key: string]: string }
}

type ComplexTitle = (string | HtmlObject)[];

interface BaseProps {
	id?: string
	flavor?: string | ComplexTitle
}

interface TitleProps extends BaseProps {
	single: true
	title?: never
	hl?: never
	plain?: never
}

interface AbilityProps extends BaseProps {
	title: string | ComplexTitle
	hl?: boolean
	plain?: boolean
	single?: never
}

type PairProps = TitleProps | AbilityProps;

const parseHtmlArrayKludge = (title: ComplexTitle) => {
	const input = [...title];
	const output: ReactNode[] = [];
	while(input.length > 0) {
		const bit = input.shift()!;
		if(typeof bit === "string") {
			output.push(bit);
			continue;
		}
		const {tag, content, props} = bit;
		if(tag === "Link") {
			const {to} = props;
			output.push(<Link to={to}>{content}</Link>);
			continue;
		}
		const node = createElement(tag, {}, content);
		output.push(node);
	}
	return createElement(Fragment, {}, ...output);
};

const Pair: React.FC<PropsWithChildren<PairProps>> = (props) => {
	const {id, single, flavor, title, hl, plain, children} = props;
	if(single) {
		return (
			<div className={"title abSingle"} id={id} data-hash-target>
				<div className="box">{children}</div>
				{ flavor
					? <div className="flavor">{typeof flavor === "string" ? flavor : parseHtmlArrayKludge(flavor)}</div>
					: <></>
				}
			</div>
		);
	}
	const className = "box" + (hl ? " hl" : "");
	return (
		<div className="abPair">
			<div className={"abStart" + (plain ? " plain" : "")}>
				<div className={className}>{typeof title === "string" ? title : parseHtmlArrayKludge(title)}</div>
			</div>
			<div className={"abEnd" + (plain ? " simple" : "")}>
				<div className="box">{children}</div>
			</div>
		</div>
	);
};

export default Pair;
