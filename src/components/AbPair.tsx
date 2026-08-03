import { PropsWithChildren, FC, ReactNode, useContext } from 'react';
import { IdContext } from './contexts';

interface BaseProps {
	id?: string
	flavor?: ReactNode
	extraClasses?: string
}

interface TitleProps extends BaseProps {
	single?: string | boolean
	title?: never
	hl?: never
	plain?: never
}

interface AbilityProps extends BaseProps {
	title: ReactNode
	hl?: boolean
	plain?: boolean
	single?: never
}

type PairProps = TitleProps | AbilityProps;

const Pair: FC<PropsWithChildren<PairProps>> = (props) => {
	const {id, single, flavor, title, hl, plain, extraClasses, children} = props;
	const cId = useContext(IdContext) + id;
	if(single) {
		return (
			<div className={
				(single === true || single === "single" ? "title" : single) + " abSingle" + extraClasses ? " " + extraClasses : ""
			} id={cId} data-hash-target>
				<div className="box">{children}</div>
				{ flavor
					? <div className="flavor">{flavor}</div>
					: <></>
				}
			</div>
		);
	}
	const className = "box" + (hl ? " hl" : "");
	return (
		<div className={"abPair" + (plain ? " plain" : "") + (extraClasses ? " " + extraClasses : "")}>
			<div className="abStart">
				<div className={className}>{title}</div>
			</div>
			<div className="abEnd">
				<div className="box">{children}</div>
			</div>
		</div>
	);
};

export default Pair;
