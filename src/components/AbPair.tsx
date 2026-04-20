import { PropsWithChildren } from 'react';

interface BaseProps {
	id?: string
	flavor?: string
}

interface TitleProps extends BaseProps {
	single: boolean
	title?: never
	hl?: never
}

interface AbilityProps extends BaseProps {
	title: string
	hl?: boolean
	single?: never
}

type PairProps = TitleProps | AbilityProps;

const Pair: React.FC<PropsWithChildren<PairProps>> = (props) => {
	const {id, single, flavor, title, hl, children} = props;
	if(single) {
		return (
			<div className="title abSingle" id={id} data-hash-target>
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
		<div className="abPair">
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
