import { createElement, Fragment, ReactNode } from 'react';
import Link from './Link';

interface HtmlObject {
	tag: string
	content: string
	props: { [key: string]: string }
}

type HtmlKludge = (string | HtmlObject)[];

export type StringOrHtmlKludge = (string | HtmlKludge);

const parseHtmlArrayKludge = (incoming: StringOrHtmlKludge) => {
	if (typeof incoming === "string") {
		return incoming;
	}
	const input = [...incoming];
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

export default parseHtmlArrayKludge;
