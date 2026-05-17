import {FC, ReactNode, Fragment as F, useMemo} from 'react';
import { convertTextToLink } from '../convertLinks';
import mapNodes from '../mapNodes';
import Header from '../Header';
import Link from '../Link';

type Langs = "Ab" | "ALL" | "AO" | "An" | "Cy" | "Gl" | "Gm" | "H" | "N" | "Po" | "Sh";
type LangsX =
	"A" | "Ak" | "Aq" | "Au" | "Az" | "B"
	| "Ce" | "C" | "D" | "DF" | "Dr" | "Dw"
	| "E" | "G" | "Gb" | "Ht" | "I" | "Ig"
	| "O" | "P" | "S" | "Sx" | "T" | "Th" | "U";
type Lang = Langs | LangsX | `${LangsX}X`;
type LangProps = (Lang | [ReactNode] | ";")[];

type Feat1 = ["M", string];
type Feat2 = ["M", string, ReactNode];
type Feat3 = [string, ReactNode];
type Feat = string | Feat1 | Feat2 | Feat3;

type KnowSkills = "a" | "d" | "e" | "g" | "h" | "l" | "n" | "o" | "p" | "r";
type SubSkills = "craft" | "perf" | "prof";
interface SubSkill {
	of?: string
	b: number
	x?: string
}
type BaseSkill = Omit<SubSkill, "of">;
type KnowSkill = Partial<SubSkill> & { [key in KnowSkills]?: number };
type Skills = "acro" | "app" | "bluff" | "climb" | "diplo" | "dis" | "dd" | "ea" | "fly" | "ha" | "heal" | "intm" | "ling" | "per" | "ride" | "sm" | "soh" | "spc" | "stl" | "sur" | "swim" | "umd";
//"ka" | "kd" | "ke" | "kg" | "kh" | "kl" | "kna" | "kno" | "kp" | "kr"
type Skill1 = { [key in Skills]?: BaseSkill };
type Skill2 = { [key in SubSkills]?: SubSkill };
type Skill3 = { k?: KnowSkill };
type Skill = Skill1 & Skill2 & Skill3;

interface StatsProps {
	id: string
	atts: [number, number, number, number, number, number]
	bab: number // +## / -##
	cmb: number | null // +## / -## / null = "-"
	cmbP?: string // parenthetical
	cmd: number | null
	cmdP?: string // parenthetical
	feats?: Feat[]
	skills?: Skill
	racial?: string
	lang?: LangProps | null // null = "none"
	combat?: ReactNode
	gear?: ReactNode
	othergear?: ReactNode
	sq?: ReactNode
	faith?: string
	hasNeighbor?: boolean
}

const getLang = (input: Lang, x: boolean = false): ReactNode => {
	if(!x && input.slice(-1) === "X") {
		return getLang(input.slice(0, -1) as LangsX, false) + " (can't speak)";
	}
	switch(input) {
		case "A":
			return "Abyssal";
		case "Ab":
			return "Aboleth";
		case "ALL":
			return <>all (<em>language mastery</em>)</>;
		case "Ak":
			return "Aklo";
		case "AO":
			return "Ancient Osiriani";
		case "An":
			return "Androffan";
		case "Aq":
			return "Aquan";
		case "Au":
			return "Auran";
		case "Az":
			return "Azlanti";
		case "B":
			return "Boggard";
		case "C":
			return "Common";
		case "Ce":
			return "Celestial";
		case "Cy":
			return "Cyclops";
		case "D":
			return "Draconic";
		case "DF":
			return "Dark Folk";
		case "Dr":
			return "Druidic";
		case "Dw":
			return "Dwarven";
		case "E":
			return "Elven";
		case "G":
			return "Giant";
		case "Gl":
			return "Gnoll";
		case "Gb":
			return "Goblin";
		case "H":
			return "Halfling";
		case "Ht":
			return "Hallit";
		case "I":
			return "Infernal";
		case "Ig":
			return "Ignan";
		case "N":
			return "Necril";
		case "O":
			return "Orc";
		case "P":
			return "Protean";
		case "Po":
			return "Polyglot";
		case "S":
			return "Sylvan";
		case "Sh":
			return "Shadowtongue";
		case "Sx":
			return "Sphinx";
		case "T":
			return "Terran";
		case "Th":
			return "Thassilonian";
		case "U":
			return "Undercommon";
	}
	return "(Error)";
}
const parseLangs = (lang : LangProps | null, id: string) => {
	if(!lang) {
		return <p><strong>Languages</strong> none</p>;
	}
	const pre: ReactNode[] = [];
	const post: ReactNode[] = [];
	const all: ReactNode[] = [];
	let flag = false;
	lang.forEach(l => {
		if(l === ";") {
			flag = true;
		} else if (typeof l === "string") {
			(flag ? post : pre).push(getLang(l));
		} else {
			(flag ? post : pre).push(l[0]);
		}
	});
	if(flag) {
		if(pre) {
			all.push(...mapNodes(pre, `${id}-lang-pre`, true));
			all.push(<F key={`${id}-lang-semi`}>; </F>);
		}
		all.push(...mapNodes(post, `${id}-lang-post`, true));
	} else {
		all.push(...mapNodes(pre, `${id}-lang-pre`, true));
	}
	return all.length ? <p><strong>Languages</strong> {...all}</p> : "";
};

const parseSkill = (skill: BaseSkill) => {
	const {b, x} = skill;
	const bonus = (b < 0 ? "" : "+") + b;
	return x ? `${bonus} (${x})` : bonus;
};
const parseSubSkill = (skill: SubSkill) => {
	const {of, b, x} = skill;
	const bonus = `(${of}) ${(b < 0 ? "" : "+")}${b}`;
	return x ? `${bonus} (${x})` : bonus;
};
const parseKnowSkill = (skill: KnowSkill) => {
	const {of, b, x, a, d, e, g, h, l, n, o, p, r} = skill;
	const output: number[] = [];
	const points: {[key: number]: Set<string>} = {};
	const addToSet = (x: string, n: number) => {
		const s = points[n] || new Set();
		s.add(x);
		s.size === 1 && output.push(n);
		points[n] = s;
	};
	(a !== undefined) && addToSet("arcana", a);
	(d !== undefined) && addToSet("dungeoneering", d);
	(e !== undefined) && addToSet("engineering", e);
	(g !== undefined) && addToSet("geography", g);
	(h !== undefined) && addToSet("history", h);
	(l !== undefined) && addToSet("local", l);
	(n !== undefined) && addToSet("nature", n);
	(o !== undefined) && addToSet("nobility", o);
	(p !== undefined) && addToSet("planes", p);
	(r !== undefined) && addToSet("religion", r);
	(of && b !== undefined) && addToSet(of, b);
	const end = x ? ` (${x})` : "";
	return output.map(nn => {
		const n = Number(nn);
		const all = [...points[n]].join(", ");
		return `Knowledge (${all}) ${n < 0 ? n : "+" + n}`;
	}).join(", ") + end;
};
const getSkills = (input: Skill) => {
	const {acro, app, bluff, climb, craft, diplo, dis, dd, ea, fly, ha, heal, intm, k, ling, per, perf, prof, ride, sm, soh, spc, stl, sur, swim, umd} = input;
	const output = [];
	acro && output.push("Acrobatics " + parseSkill(acro));
	app && output.push("Appraise " + parseSkill(app));
	bluff && output.push("Bluff " + parseSkill(bluff));
	climb && output.push("Climb " + parseSkill(climb));
	craft && output.push("Craft " + parseSubSkill(craft));
	diplo && output.push("Diplomacy " + parseSkill(diplo));
	dis && output.push("Disguise " + parseSkill(dis));
	dd && output.push("Disable Device " + parseSkill(dd));
	ea && output.push("Escape Artist " + parseSkill(ea));
	fly && output.push("Fly " + parseSkill(fly));
	ha && output.push("Handle Animal " + parseSkill(ha));
	heal && output.push("Heal " + parseSkill(heal));
	intm && output.push("Intimidate " + parseSkill(intm));
	k && output.push(parseKnowSkill(k));
	ling && output.push("Linguistics " + parseSkill(ling));
	per && output.push("Perception " + parseSkill(per));
	perf && output.push("Perform " + parseSubSkill(perf));
	prof && output.push("Profession " + parseSubSkill(prof));
	ride && output.push("Ride " + parseSkill(ride));
	sm && output.push("Sense Motive " + parseSkill(sm));
	soh && output.push("Sleight of Hand " + parseSkill(soh));
	spc && output.push("Spellcraft " + parseSkill(spc));
	stl && output.push("Stealth " + parseSkill(stl));
	sur && output.push("Survival" + parseSkill(sur));
	swim && output.push("Swim " + parseSkill(swim));
	umd && output.push("Use Magic Device " + parseSkill(umd));
	return output.join(", ");
};

const getFeats = (input: Feat[]) => {
	const final: ReactNode[] = [];
	input.forEach(feat => {
		let name = "";
		let link = "";
		let post: ReactNode | undefined = "";
		if(typeof feat === "string") {
			const m = feat.match(/^#(.)$/);
			if(m) {
				final.push(<sup>${m[1]}</sup>);
				return;
			}
			name = feat;
			link = convertTextToLink(feat);
		} else if(feat[0] === "M") {
			const [, txt, etc] = feat as (Feat1 | Feat2);
			name = "Mythic " + txt;
			link = convertTextToLink(txt);
			post = etc;
		} else {
			const [txt, etc] = feat;
			name = txt;
			link = convertTextToLink(txt);
			post = etc;
		}
		final.push(
			post ?
				<><Link to={"/feat/" + link}>{name}</Link>{post}</>
			:
				<Link to={"/feat/" + link}>{name}</Link>
		);
	});
	return final;
};

const Stats: FC<StatsProps> = (props) => {
	const {
		id, atts, bab, cmb, cmbP, cmd, cmdP,
		feats: f, skills: s, racial, lang,
		combat, gear, othergear, sq,
		faith, hasNeighbor
	} = props;
	const [str, dex, con, int, wis, cha] = atts;
	const feats = useMemo(
		() => f ? <p><strong>Feats</strong> {mapNodes(getFeats(f), id + "-feat", true)}</p> : <></>,
		[f, id]
	);
	const skills = useMemo(() => {
		const main = s ? getSkills(s) : "";
		return s ?
			<p><strong>Skills</strong> {main}{
				racial ? <>; <strong>Racial Modifiers</strong> {racial}</> : ""
			}</p>
		: "";
	}, [s, racial]);
	const sqline = useMemo(() => sq ? <p><strong>SQ</strong> {sq}</p> : "", [sq]);
	const langs = useMemo(() => lang ? parseLangs(lang, id) : "", [lang]);
	const gears = useMemo(() => {
		if(combat) {
			return <p><strong>Combat Gear</strong> {combat}{
				othergear ? <>; <strong>Other Gear</strong> {othergear}</> : ""
			}</p>;
		} else if (gear) {
			return <p><strong>Gear</strong> {gear}</p>
		}
		return "";
	}, [gear, combat, othergear]);
	return (
		<div className={"reduce" + hasNeighbor ? " no-bottom-margin" : ""}>
			<Header sub>Stats</Header>
			<p><strong>Str</strong> {
				str ? (str < 0 ? `- (${0 - str} while corporeal)` : str) : "-"
			}, <strong>Dex</strong> {dex}, <strong>Con</strong> {
				con || "-"
			}, <strong>Int</strong> {
				int || "-"
			}, <strong>Wis</strong> {wis}, <strong>Cha</strong> {cha}</p>
			<p><strong>Base Atk</strong> {bab}; <strong>CMB</strong> {cmb}{
				cmbP ? ` (${cmbP})` : ""
			}; <strong>CMD</strong> {cmd}{
				cmdP ? ` (${cmdP})` : ""
			}</p>
			{feats}
			{skills}
			{langs}
			{sqline}
			{gears}
			{faith ?
				<p><strong>Faith Link</strong> <Link to={
					"/faith/" + convertTextToLink(faith)
				}>{faith}</Link></p>
			: ""}
		</div>
	);
};

export default Stats;
