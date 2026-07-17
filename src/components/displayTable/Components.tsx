import {
	AnchorHTMLAttributes,
	ClassAttributes,
	HTMLAttributes
} from 'react';
import { ExtraProps } from 'react-markdown';
import Link from '../Link';
import InnerLink from '../InnerLink';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type MDspanProps = ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & ExtraProps;

// Convert links into React components
const a = (props: MDaProps) => {
	const { href = "", children, id, "aria-label": ariaLabel } = props;
	if (href.match(/^http/)) {
		return <a href={href} id={id} data-hash-target={id ? true : undefined} aria-label={ariaLabel}>{children}</a>
	} else if (href.match(/^#/)) {
		// Hash indicates internal link
		return <InnerLink data-hash-target={id ? true : undefined} aria-label={ariaLabel} id={id} to={href}>{children}</InnerLink>
	}
	return <Link to={"/" + href} id={id} data-hash-target={id ? true : undefined} aria-label={ariaLabel}>{children}</Link>
};

// Convert the specific phrase "&wbr&" into a <wbr /> element
const span = (props: MDspanProps, tag = "span") => {
	const { children, ...etc } = props;
	if(children === "wbr") {
		return <wbr />;
	}
	switch (tag) {
		case "i":
			return <i {...etc}>{children}</i>;
		case "em":
			return <em {...etc}>{children}</em>;
		case "strong":
			return <strong {...etc}>{children}</strong>;
		case "b":
			return <b {...etc}>{children}</b>;
	}
	return <span {...etc}>{children}</span>;
}
const i = (props: MDspanProps) => span(props, "i");
const em = (props: MDspanProps) => span(props, "em");
const strong = (props: MDspanProps) => span(props, "strong");
const b = (props: MDspanProps) => span(props, "b");

const components = { a, i, em, strong, b };

export default components;
