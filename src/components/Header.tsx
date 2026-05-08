import { PropsWithChildren, FC, createElement, Fragment } from 'react';
import parseHtmlArrayKludge, { StringOrHtmlKludge } from './parseHtmlArrayKludge';

interface ContentsProps {
	contents?: StringOrHtmlKludge[]
}

interface HeaderProps extends ContentsProps {
	id?: string
	extraClasses?: string
	sub?: boolean
}

const Contents: FC<ContentsProps> = ({contents}) => {
	if(!contents) {
		return <></>;
	}
	return createElement(Fragment, {}, ...contents.map(c => parseHtmlArrayKludge(c)));
};

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
	const {id, extraClasses, contents, sub, children} = props;
	const base = sub ? "statblockSubHeader" : (contents ? "statblockHeaderFull" : "statblockHeader");
	const className = base + (extraClasses ? " " + extraClasses : "");
	const etc = id ? {id, dataHashTarget: true} : {};
	return (
		<div className={className} {...etc}>{children}<Contents contents={contents} /></div>
	);
};

export default Header;
