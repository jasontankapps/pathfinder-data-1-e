import {
	AnchorHTMLAttributes,
	ClassAttributes
} from 'react';
import { ExtraProps } from 'react-markdown';
import Link from '../Link';
import InnerLink from '../InnerLink';

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;

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
const components = { a };

export default components;
