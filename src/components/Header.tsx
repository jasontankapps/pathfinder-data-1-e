import { PropsWithChildren, FC } from 'react';

interface HeaderProps {
	id?: string
	extraClasses?: string
	sub?: boolean
	full?: boolean
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
	const {id, extraClasses, sub, full, children} = props;
	const base = sub ? "statblockSubHeader" : (full ? "statblockHeaderFull" : "statblockHeader");
	const className = base + (extraClasses ? " " + extraClasses : "");
	const etc = id ? {id, dataHashTarget: true} : {};
	return (
		<div className={className} {...etc}>{children}</div>
	);
};

export default Header;
