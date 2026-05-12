import {FC, ReactNode, Fragment as F} from 'react';
import Header from '../Header';
import Link from '../Link';
import parseHtmlArrayKludge, { StringOrHtmlKludge } from '../parseHtmlArrayKludge';
import { convertTextToLink } from '../convertLinks';
import mapNodes from '../mapNodes';

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];
type NeverExcept<Type, K extends keyof Type> = Omit<Partial<{ [Property in keyof Type]: never }>, K> & Pick<Type, K>;

interface SlaSpellListBase {
	constant?: boolean
	will?: boolean
	per?: "hour" | "week" | "month" | "year"
	day?: number
	other?: string
}
type SlaSpellList = AtLeastOne<SlaSpellListBase> & { content: StringOrHtmlKludge }

interface BaseSpellInfoProps {
	con?: string
	cl: number
}
interface SlaProps extends BaseSpellInfoProps {
	sla?: string
	content: SlaSpellList[]
}

	interface PrepBase extends BaseSpellInfoProps {
		l9?: StringOrHtmlKludge
		l8?: StringOrHtmlKludge
		l7?: StringOrHtmlKludge
		l6?: StringOrHtmlKludge
		l5?: StringOrHtmlKludge
		l4?: StringOrHtmlKludge
		l3?: StringOrHtmlKludge
		l2?: StringOrHtmlKludge
		l1?: StringOrHtmlKludge
		l0?: StringOrHtmlKludge
	}
	interface Prep1 extends PrepBase {
		prep?: string
		ex?: never
	}
	interface Prep2 extends PrepBase {
		ex?: string
		prep?: never
	}
type PreparedProps = Prep1 | Prep2

	type KnownLevel = [boolean | number, StringOrHtmlKludge];
interface KnownProps extends BaseSpellInfoProps {
	known?: string
	l9?: KnownLevel
	l8?: KnownLevel
	l7?: KnownLevel
	l6?: KnownLevel
	l5?: KnownLevel
	l4?: KnownLevel
	l3?: KnownLevel
	l2?: KnownLevel
	l1?: KnownLevel
	l0?: KnownLevel
}

interface PsyProps extends BaseSpellInfoProps {
	pe: number
	peP?: StringOrHtmlKludge
	content: StringOrHtmlKludge
}

interface BaseProps {
	id: string
	hasNeighbor?: boolean
}

interface Root {
	sla: SlaProps
	prep: PreparedProps
	ex: PreparedProps
	known: KnownProps
	psy: PsyProps
	other: StringOrHtmlKludge[]
}

type SpellBlockProps =
	(
		NeverExcept<Root, "sla">
		| NeverExcept<Root, "prep">
		| NeverExcept<Root, "ex">
		| NeverExcept<Root, "known">
		| NeverExcept<Root, "psy">
		| NeverExcept<Root, "other">
	) & BaseProps;


const SpellBlock: FC<SpellBlockProps> = (props) => {
	const {id, sla, prep, ex, known, psy, other} = props;
	return <></>;
};

export default SpellBlock
