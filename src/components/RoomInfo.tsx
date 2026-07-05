import { PropsWithChildren, FC, useContext, ReactNode, Fragment as F } from 'react';
import { IdContext } from './contexts';
import Link from './Link';
import ScrollContainer from './ScrollContainer';

interface BaseProps {
	id: string
	benefit?: ReactNode
	from?: string
	to?: string
}

interface Costs1 {
	c: number
	cGoods?: number
	cInf?: number
	cLabor?: number
	cMagic?: number
	create?: never
}
interface Costs2 {
	create: string
	c?: never
	cGoods?: never
	cInf?: never
	cLabor?: never
	cMagic?: never
}
type Costs = Costs1 | Costs2;

interface Earn1 {
	e: number
	eGoods?: boolean
	eInf?: boolean
	eLabor?: boolean
	eMagic?: boolean
	eGp?: boolean
	earnings?: never
}
interface Earn2 {
	earnings?: string
	e?: never
	eGoods?: never
	eInf?: never
	eLabor?: never
	eMagic?: never
	eGp?: never
}
type Earn = Earn1 | Earn2;

interface Time1 {
	t: number
	time?: never
}
interface Time2 {
	time: string
	t?: never
}
type Time = Time1 | Time2;

interface Sizes1 {
	size: string
	s1?: never
	s2?: never
	s?: never
}
interface Sizes2 {
	s1: number
	s2: number
	size?: never
	s?: never
}
interface Sizes3 {
	s: number
	s1?: never
	s2?: never
	size?: never
}
type Size = Sizes1 | Sizes2 | Sizes3;

type RoomInfoProps = BaseProps & Earn & Costs & Time & Size;

const parseEarnings = (input: Earn1) => {
	const {e, eGoods, eInf, eLabor, eMagic, eGp} = input;
	const earn = [];
	eGoods && earn.push("Goods");
	eInf && earn.push("Influence");
	eLabor && earn.push("Labor");
	eMagic && earn.push("Magic");
	eGp && earn.push("gp");
	const pop = earn.pop()!;
	earn.push(`${earn.length ? "or " : ""}${pop} +${e}`);
	return earn.join(earn.length === 2 ? " " :", ");
};
const parseCreation = (input: Costs1) => {
	const {c, cGoods, cInf, cLabor, cMagic} = input;
	const costs: string[] = [];
	cGoods && costs.push(`${cGoods} Goods`);
	cInf && costs.push(`${cInf} Influence`);
	cLabor && costs.push(`${cLabor} Labor`);
	cMagic && costs.push(`${cMagic} Magic`);
	return costs.join(", ") + ` (${
		Intl.NumberFormat("en-US").format(c)
	} gp)`
};

export const RoomInfo: FC<PropsWithChildren<RoomInfoProps>> = (props) => {
	const {
		children, id, benefit, from, to,
		earnings, e, eGoods, eInf, eLabor, eMagic, eGp,
		c, cGoods, cInf, cLabor, cMagic, create,
		t, time,
		size, s1, s2, s
	} = props;
	const cId = useContext(IdContext) + id;
	const earn = earnings || parseEarnings({e: e!, eGoods, eInf, eLabor, eMagic, eGp});
	const costs = create || parseCreation({c: c!, cGoods, cInf, cLabor, cMagic});
	const sizing = size || s ? (s === 1 ? "1 person" : `${s} people`) : (`${s1}-${s2} squares`);
	return (
		<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id={cId + "-room-scrollwrap"}>
			<table><tbody>
				{children ? <tr><th colSpan={4} scope="col" className="title">{children}</th></tr> : ""}
				<tr><th scope="row">Earnings</th><td colSpan={3}>{earn}</td></tr>
				{ benefit ? <tr><th scope="row">Benefit</th><td colSpan={3}>{benefit}</td></tr> : ""}
				<tr><th scope="row">Create</th><td colSpan={3}>{costs}</td></tr>
				<tr>
					<th id={cId + "-time"}>Time</th><td headers={cId + "-time"}>{time || `${t} days`}</td>
					<th id={cId + "-size"}>Size</th><td headers={cId + "-size"}>{sizing}</td>
				</tr>
				{from ? <tr><th scope="row">Upgrades From</th><td colSpan={3}>{
					from.split("~").map((bit, i) => {
						const to = "/misc/" + bit.toLowerCase().replace(/[- /]/g, "_").replace(/[^a-z0-9_]/g, "");
						const id = `${cId}-from-${bit}-${i}`;
						return i ? (
							<F key={id}>, <Link key={id} to={to}>{bit}</Link></F>
						) : (
							<Link key={id} to={to}>{bit}</Link>
						);
					})
				}</td></tr> : ""}
				{to ? <tr><th scope="row">Upgrades To</th><td colSpan={3}>{
					to.split("~").map((bit, i) => {
						const to = "/misc/" + bit.toLowerCase().replace(/[- /]/g, "_").replace(/[^a-z0-9_]/g, "");
						const id = `${cId}-from-${bit}-${i}`;
						return i ? (
							<F key={id}>, <Link key={id} to={to}>{bit}</Link></F>
						) : (
							<Link key={id} to={to}>{bit}</Link>
						);
					})
				}</td></tr> : ""}
			</tbody></table>
		</ScrollContainer></div>
	);
};

export default RoomInfo
