import {FC, ReactNode, Fragment as F} from 'react';
import Link from '../Link';
import { convertTextToLink } from '../convertLinks';
import mapNodes from '../mapNodes';

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];
interface Base {
	id: string
}
interface SourceProps extends Base {
	source?: ([string] | [string, number])[]
}
	interface DescBase1 {
		al: string
		lg: boolean
		ln: boolean
		le: boolean
		ng: boolean
		n: boolean
		ne: boolean
		cg: boolean
		cn: boolean
		ce: boolean
	}
	interface DescBase2 {
		fine: boolean
		diminutive: boolean
		tiny: boolean
		small: boolean
		medium: boolean
		large: boolean
		huge: boolean
		gargantuan: boolean
		colossal: boolean
	}
	interface DescBase3 {
		aberration: boolean
		animal: boolean
		construct: boolean
		dragon: boolean
		fey: boolean
		humanoid: boolean
		magicalBeast: boolean
		monstrousHumanoid: boolean
		ooze: boolean
		outsider: boolean
		plant: boolean
		undead: boolean
		vermin: boolean
	}
type DescBase = AtLeastOne<DescBase1> & AtLeastOne<DescBase2> & AtLeastOne<DescBase3>;
	interface Subtypes1 extends Base {
		subtypes?: ReactNode
		augment?: never
		subs?: never
		othersubs?: never
	}
	interface Subtypes2 extends Base {
		augment?: string
		subs?: string[]
		othersubs?: string[]
		subtypes?: never
	}
type Subtypes = Subtypes1 | Subtypes2;
interface Senses extends Base {
	sen?: string[]
	senSpell?: string[]
	dv?: number
	llv?: boolean
	keenScent?: boolean | number
	scent?: boolean
	thoughtsense?: number
	greensight?: boolean | number
	lifesense?: boolean | number
	blindsight?: number
	blindsightParens?: ReactNode
	blindsense?: number
	tremorsense?: number
	tremorParens? : ReactNode
	mistsight?: boolean
	sid?: boolean
	aav?: boolean
	xray?: boolean
}
interface InfoBase extends Base {
	xp: string
	text?: ReactNode
	init: ReactNode
	pcp: number | string
	aura?: ReactNode
}
const Source: FC<SourceProps> = ({id, source}) => {
	if(!source) {
		return <></>;
	}
	return (
		<p><strong>Sources</strong> {
			mapNodes(source.map(([title, page]) => <Link to={"/source/" + convertTextToLink(title)}>{title}{page ? " " + page : ""}</Link>), `${id}-source`)
		}</p>
	);
};
type InfoProps = SourceProps & DescBase & Subtypes & Senses & InfoBase;

const getSubtypes = (props: Subtypes2): ReactNode | false => {
	const { augment, subs, othersubs, id } = props;
	const found: [string, ReactNode][] = [];
	if(augment) {
		found.push([
			`augmented ${augment}`,
			<F key={`${id}-augment`}><Link to="/subtype/augmented">augmented</Link> <Link to={`/type/${augment.toLowerCase().replace(/ /g, "_")}`}>{augment}</Link></F>
		]);
	}
	if (subs) {
		subs.forEach((sub, i) => {
			found.push([
				sub,
				<Link key={`${id}-sub-${i}`} to={`/subtype/${sub.toLowerCase().replace(/ /g, "_")}`}>{sub}</Link>
			]);
		});
	}
	if(othersubs) {
		othersubs.forEach(sub => {
			found.push([sub, sub]);
		});
	}
	if(found.length) {
		found.sort((a,b) => a[0].localeCompare(b[0]));
		return <F>{
			mapNodes(found.map(m => m[1]), `${id}-subtyping`)
		}</F>;
	}
	return false;
};

const getSenses = (props: Senses) => {
	const {sen, senSpell, dv, llv, keenScent, scent, thoughtsense, greensight, lifesense,
			xray, aav, mistsight, sid, blindsight, blindsightParens, blindsense,
			tremorsense, tremorParens, id} = props;
	const senses: [string, ReactNode][] = sen ? sen.map(x => [x, x] as [string, string]) : [];
	if(senSpell) {
		senses.push(...senSpell.map(
			(x, i) => [x, <em key={`${id}-spellsense-${i}`}>{x}</em>] as [string, ReactNode])
		);
	}
	if(dv) { senses.push(["darkvision", `darkvision ${dv} ft.`]); }
	if(llv) { senses.push(["low-light vision", "low-light vision"]); }
	if(keenScent) {
		if(keenScent === true) {
			senses.push(["keen scent", <Link key={`${id}-keenscent`} to="/umr/keen_scent">keen scent</Link>]);
		}
		else {
			senses.push([
				"keen scent",
				<F key={`${id}-keenscent-n`}><Link to="/umr/keen_scent">keen scent</Link> {keenScent} ft.</F>
			]);
		}
	}
	if(scent) { senses.push(["scent", <Link key={`${id}-scent`} to="/umr/scent">scent</Link>]); }
	if(thoughtsense) {
		senses.push([
			"thoughtsense",
			<F key={`${id}-thoughtsense-n`}><Link to="/umr/thoughtsense">thoughtsense</Link> {thoughtsense} ft.</F>
		]);
	}
	if(greensight) {
		if(greensight === true) {
			senses.push(["greensight", <Link key={`${id}-greensight`} to="/umr/greensight">greensight</Link>]);
		}
		else {
			senses.push([
				"greensight",
				<F key={`${id}-greensight-n`}><Link to="/umr/greensight">greensight</Link> {greensight} ft.</F>
			]);
		}
	}
	if(lifesense) {
		if(lifesense === true) {
			senses.push(["lifesense", <Link key={`${id}-lifesense`} to="/umr/lifesense">lifesense</Link>]);
		}
		else {
			senses.push([
				"lifesense",
				<F key={`${id}-lifesense-n`}><Link to="/umr/lifesense">lifesense</Link> {lifesense} ft.</F>
			]);
		}
	}
	if(blindsight) { senses.push([
		"blindsight",
		<F key={`${id}-blindsight`}><Link to="/umr/blindsight">blindsight</Link> {blindsight} ft.{
			blindsightParens ? <> ({blindsightParens})</> : ""
		}</F>
	]); }
	if(blindsense) {
		senses.push([
			"blindsense",
			<F key={`${id}-blindsense-n`}><Link to="/umr/blindsense">blindsense</Link> {blindsense} ft.</F>
		]);
	}
	if(tremorsense) {
		senses.push([
			"tremorsense",
			<F key={`${id}-tremorsense`}><Link to="/umr/tremorsense">tremorsense</Link> {tremorsense} ft.{
				tremorParens ? <> ({tremorParens})</> : ""
			}</F>
		]);
	}
	if(mistsight) {
		senses.push(["mistsight", <Link key={`${id}-mistsight`} to="/umr/mistsight">mistsight</Link>]);
	}
	if(xray) {
		senses.push(["x-ray vision", <Link key={`${id}-x-ray vision`} to="/umr/x_ray_vision">x-ray vision</Link>]);
	}
	if(aav) {
		senses.push([
			"all-around vision",
			<Link key={`${id}-all-around vision`} to="/umr/all_around_vision">all-around vision</Link>
		]);
	}
	if(sid) {
		senses.push([
			"see in darkness",
			<Link key={`${id}-see in darkness`} to="/umr/see_in_darkness">see in darkness</Link>
		]);
	}
	if(senses.length) {
		senses.sort((a, b) => a[0].localeCompare(b[0]));
		return (
			<F key={`${id}-senses-line`}><strong>Senses</strong> {
				mapNodes(senses.map(m => m[1]), `${id}-senseline`)
			}</F>
		);
	}
	return false;
};

const parseInitPcp = (input: ReactNode) => {
	if(typeof input === "number") {
		return (input < 0 ? "" : "+") + String(input);
	}
	return input;
}

const Info: FC<InfoProps> = (attrs) => {
	const {
		source, xp, al, lg, ln, le, ng, n, ne, cg, cn, ce,
		fine, diminutive, tiny, small, medium, large, huge, gargantuan, colossal,
		aberration, animal, construct, dragon, fey, humanoid, magicalBeast,
			monstrousHumanoid, ooze, outsider, plant, undead, vermin,
		subs, othersubs, augment, subtypes, init,
		sen, senSpell, dv, llv, keenScent, scent, thoughtsense, greensight, lifesense,
			xray, aav, mistsight, sid, blindsight, blindsightParens,
			blindsense, tremorsense, tremorParens, pcp,
		aura, id, text
	} = attrs;
	const alignment = al || (
		lg ? "LG" : (ln ? "LN" : (le ? "LE" : (
			ng ? "NG" : (n ? "N" : (ne ? "NE" : (
				cg ? "CG" : (cn ? "CN" : ce ? "CE" : "[missing alignment]")
			)))
		)))
	);
	const size = fine ? "Fine" : ( diminutive ? "Diminutive" : (tiny ? "Tiny" : (
			small ? "Small" : (medium ? "Medium" : (large  ? "Large" : (
				huge ? "Huge" : (gargantuan ? "Gargantuan" : (colossal ? "Colossal" : "[missing size]")
			)))
		)))
	);
	const type = (aberration ? "aberration" : (animal ? "animal" : (construct ? "construct" : (
		dragon ? "dragon" : (fey ? "fey" : (humanoid ? "humanoid" : magicalBeast ? "magical beast" : (
			monstrousHumanoid ? "monstrous humanoid" : (ooze ? "ooze" : (outsider ? "outsider" : (
				plant ? "plant" : (undead ? "undead" : (vermin ? "vermin" : false))
			)))
		))))))
	);
	const parens = subtypes !== undefined ? subtypes : getSubtypes({subs, augment, othersubs, id});
	const sensing = getSenses({sen, senSpell, dv, llv, keenScent, scent, thoughtsense, greensight, lifesense,
			xray, aav, mistsight, sid, blindsight, blindsightParens, blindsense,
			tremorsense, tremorParens, id});
	return (
		<div className="reduce">
			<Source id={id} source={source} />
			<p><strong>XP</strong> {xp}</p>
			{text ? <p>{text}</p> : <></>}
			<p>{alignment} {size} {
				type ? <Link to={"/type/" + type.toLowerCase().replace(/ /g, "_")}>{type}</Link> : "[missing type]"
			}{parens ? <> ({parens})</> : ""}</p>
			<p><strong>Init</strong> {parseInitPcp(init)}{
				sensing ? <>; {sensing}</> : <></>
			}; <strong>Perception</strong> {parseInitPcp(pcp)}</p>
			{aura ? <p><strong>Aura</strong> {aura}</p> : <></>}
		</div>
	);
};

export default Info;
