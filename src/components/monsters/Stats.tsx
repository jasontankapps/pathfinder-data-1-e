import {FC, ReactNode, Fragment as F} from 'react';
import Header from '../Header';
import Link from '../Link';
import parseHtmlArrayKludge, { StringOrHtmlKludge } from '../parseHtmlArrayKludge';
import { convertTextToLink } from '../convertLinks';
import mapNodes from '../mapNodes';

type Langs = "Ab" | "ALL" | "AO" | "An" | "Cy" | "Gl" | "Gm" | "H" | "N" | "Po" | "Sh";
type LangsX =
	"A" | "Ak" | "Aq" | "Au" | "Az" | "B"
	| "Ce" | "C" | "D" | "DF" | "Dr" | "Dw"
	| "E" | "G" | "Gb" | "Ht" | "I" | "Ig"
	| "O" | "P" | "S" | "Sx" | "T" | "Th" | "U";
type Lang = Langs | LangsX | `${LangsX}X`;

type Feat = string | ["M", string] | ["M", string, StringOrHtmlKludge] | [string, StringOrHtmlKludge];

type SubSkills = "craft" | "perf" | "prof" | "k";
interface SubSkill {
	of?: string
	b: number
	p?: string
}
type Skills = "acro" | "app" | "bluff" | "climb" | "diplo" | "dis" | "ddev" | "ea" | "fly" | "ha" | "heal" | "intm" | "ling" | "per" | "ride" | "sm" | "soh" | "spc" | "stl" | "sur" | "swim" | "umd";
//"ka" | "kd" | "ke" | "kg" | "kh" | "kl" | "kna" | "kno" | "kp" | "kr"
type Skill1 = { [key in Skills]?: Omit<SubSkill, "of"> };
type Skill2 = { [key in SubSkills]?: SubSkill };
type Skill = Skill1 & Skill2;

interface StatsProps {
		// >0 = ##
		// 0 = "-"
		// <0 = "- (## while corporeal)"
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
	lang?: (Lang | [StringOrHtmlKludge] | ";")[] | null // null = "none"
	combat?: StringOrHtmlKludge
	gear?: StringOrHtmlKludge
	othergear?: StringOrHtmlKludge
	sq?: StringOrHtmlKludge
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

const Stats: FC<StatsProps> = (props) => {
	return <></>;
};

export default Stats;
