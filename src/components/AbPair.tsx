import { PropsWithChildren, FC } from 'react';
import parseHtmlArrayKludge, { StringOrHtmlKludge } from './parseHtmlArrayKludge';

interface BaseProps {
	id?: string
	flavor?: StringOrHtmlKludge
}

interface TitleProps extends BaseProps {
	single: true
	title?: never
	hl?: never
	plain?: never
}

interface AbilityProps extends BaseProps {
	title: StringOrHtmlKludge
	hl?: boolean
	plain?: boolean
	single?: never
}

type PairProps = TitleProps | AbilityProps;

const Pair: FC<PropsWithChildren<PairProps>> = (props) => {
	const {id, single, flavor, title, hl, plain, children} = props;
	if(single) {
		return (
			<div className={"title abSingle"} id={id} data-hash-target>
				<div className="box">{children}</div>
				{ flavor
					? <div className="flavor">{parseHtmlArrayKludge(flavor)}</div>
					: <></>
				}
			</div>
		);
	}
	const className = "box" + (hl ? " hl" : "");
	return (
		<div className="abPair">
			<div className={"abStart" + (plain ? " plain" : "")}>
				<div className={className}>{parseHtmlArrayKludge(title)}</div>
			</div>
			<div className={"abEnd" + (plain ? " simple" : "")}>
				<div className="box">{children}</div>
			</div>
		</div>
	);
};

export default Pair;
