import { PropsWithChildren, FC, useContext } from 'react';
import { IdContext } from './contexts';

interface HeaderProps {
	id?: string
	extraClasses?: string
	sub?: boolean
	full?: boolean
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
	const {id, extraClasses, sub, full, children} = props;
	const cId = useContext(IdContext);
	const base = sub ? "statblockSubHeader" : (full ? "statblockHeaderFull" : "statblockHeader");
	const className = base + (extraClasses ? " " + extraClasses : "");
	const etc = id ? {id: cId + id, "data-hash-target": true} : {};
	return (
		<div className={className} {...etc}>{children}</div>
	);
};

export default Header;
