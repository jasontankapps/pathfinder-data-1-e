import {FC, ReactNode, Fragment as F} from 'react';
import Header from '../Header';
import Link from '../Link';
import { convertTextToLink } from '../convertLinks';
import mapNodes from '../mapNodes';


type NeverExcept<Type, K extends keyof Type> = Omit<Partial<{ [Property in keyof Type]: never }>, K> & Pick<Type, K>;
type TreasureKeys = "S" | "D" | "T" | "X" | "I" | "N";
type Treasure1 = { [key in TreasureKeys]?: string[][] | false} & { other: never };
type Treasure2 = { other?: ReactNode } & { [Property in TreasureKeys]?: never };
type Treasure = (
	Treasure2 | NeverExcept<Treasure1, "S"> | NeverExcept<Treasure1, "D">
	| NeverExcept<Treasure1, "T"> | NeverExcept<Treasure1, "X">
	| NeverExcept<Treasure1, "I"> | NeverExcept<Treasure1, "N">
) & { final?: ReactNode };
interface TreasureProps {
	t: Treasure
	id: string
}

interface EcoProps {
	id: string
	env: ReactNode
	org?: ReactNode
	treasure?: Treasure
}

const getArmor = (input: string) => {
	switch(input) {
		case "l":
			return "leather armor";
		case "sl":
			return "studden leather armor";
		case "bp":
			return "breastplate";
		case "fp":
			return "full plate";
		case "hp":
			return "half-plate";
		case "h":
			return "hide";
		case "hss":
			return "heavy steel shield";
		case "hws":
			return "heavy wooden shield";
		case "lws":
			return "light wooden shield";
		case "lss":
			return "light steel shield";
		case "cs":
			return "chain shirt";
		case "sm":
			return "scale mail";
		case "b":
			return "buckler";
		case "bd":
			return "barding";
		case "p":
			return "padded";
		case "cm":
			return "chainmail";
		case "w":
			return "wooden";
		case "bm":
			return "banded mail";
		case "ak":
			return "armored kilt";
	}
	return input;
};

const getWeapon = (input: string) => {
	switch (input) {
		case "sp":
			return ["spear"];
		case "sps":
			return ["spear", "spears"];
		case "sc":
			return ["scimitar"];
		case "scs":
			return ["scimitar", "scimitars"];
		case "si":
			return ["sickle"];
		case "k":
			return ["katana"];
		case "d":
			return ["dagger"];
		case "ds":
			return ["dagger", "daggers"];
		case "ls":
			return ["longsword"];
		case "lss":
			return ["longsword", "longswords"];
		case "spkc":
			return ["spiked_chain", "spiked chain"];
		case "ss":
			return ["short_sword", "short sword"];
		case "sss":
			return ["short_sword", "short swords"];
		case "c":
			return ["club"];
		case "q":
			return ["quarterstaff"];
		case "n":
			return ["net"];
		case "j":
			return ["javelin"];
		case "js":
			return ["javelin", "javelins"];
		case "ms":
			return ["morningstar"];
		case "drt":
			return ["dart", "darts"];
		case "sb":
			return ["shortbow"];
		case "lb":
			return ["longbow"];
		case "sng":
			return ["sling"];
		case "t":
			return ["trident"];
		case "ba":
			return ["battleaxe"];
		case "bas":
			return ["battleaxe", "battleaxes"];
		case "ga":
			return ["greataxe"];
		case "gs":
			return ["greatsword"];
		case "bs":
			return ["bastard_sword", "bastard sword"];
		case "gc":
			return ["greatclub"];
		case "f":
			return ["falchion"];
		case "sy":
			return ["scythe"];
		case "lf":
			return ["light_flail"];
		case "lfs":
			return ["light_flail", "light flails"];
		case "sk":
			return ["starknife"];
		case "hc":
			return ["heavy_crossbow", "heavy crossbow"];
		case "lc":
			return ["light_crossbow", "light crossbow"];
		case "wh":
			return ["warhammer"];
		case "ssp":
			return ["shortspear"];
		case "ssps":
			return ["shortspear", "shortspears"];
		case "lh":
			return ["lucerne_hammer", "lucerne hammer"];
		case "r":
			return ["rapier"];
		case "g":
			return ["glaive"];
		case "ku":
			return ["kukri"];
		case "kus":
			return ["kukri", "kukris"];
		case "hp":
			return ["heavy_pick", "heavy pick"];
		case "hm":
			return ["heavy_mace", "heavy mace"];
		case "rn":
			return ["ranseur"];
		case "hl":
			return ["halberd"];
		case "ha":
			return ["handaxe"];
		case "has":
			return ["handaxe", "handaxes"];
		case "tt":
			return ["tetsubo"];
		case "cl":
			return ["composite_longbow", "composite longbow"];
		case "hf":
			return ["heavy_flail", "heavy flail"];
		case "lm":
			return ["light_mace", "light mace"];
		case "lsp":
			return ["longspear"];
		case "l":
			return ["lance"];
		case "ars":
			return ["arrow", "arrows"];
	}
	let m = input.match(/^hc([0-9]+)$/);
	if(m) {
		return ["heavy_crossbow", "heavy crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^lc([0-9]+)$/)) {
		return ["light crossbow", "light crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^css\+([0-9]+)$/)) {
		return ["composite_shortbow", "composite shortbows", ` [+${m[1]} Str]`];
	}
	if(m = input.match(/^cls([0-9]+)$/)) {
		return ["composite_longbow", "composite longbows", ` with ${m[1]} arrows`];
	}
	if(m = input.match(/^cl([0-9]+)\+([0-9]+)$/)) {
		return ["composite_longbow", "composite longbow", ` [+${m[2]} Str] with ${m[1]} arrows`];
	}
	if(m = input.match(/^cl([0-9]+)$/)) {
		return ["composite_longbow", "composite longbow", ` with ${m[1]} arrows`];
	}
	if(m = input.match(/^cl\+([0-9]+)$/)) {
		return ["composite_longbow", "composite longbow", ` [+${m[1]} Str]`];
	}
	if(m = input.match(/^sb([0-9]+)$/)) {
		return ["shortbow", "shortbow", ` with ${m[1]} arrows`];
	}
	if(m = input.match(/^lb([0-9]+)$/)) {
		return ["longbow", "longbow", ` with ${m[1]} arrows`];
	}
	if(m = input.match(/^sng([0-9]+)$/)) {
		return ["sling", "sling", ` with ${m[1]} bullets`];
	}
	if(m = input.match(/^-(.+)$/)) {
		return [convertTextToLink(m[1]), m[1]];
	}
	return [input + " [error]"];
};

const getEnhancement = (input: string) => {
	switch(input) {
		case "U":
			return ["unholy"];
		case "H":
			return ["holy"];
		case "X":
			return ["axiomatic"];
		case "F":
			return ["flaming"];
		case "FB":
			return ["flaming_burst", "flaming burst"];
		case "K":
			return ["keen"];
		case "R":
			return ["returning"];
		case "S":
			return ["speed"];
		case "MF":
			return ["moderate_fortification", "moderate fortification"];
		case "SB":
			return ["shocking_burst", "shocking burst"];
		case "S":
			return ["shocking"];
		case "I":
			return ["icy_burst", "icy burst"];
		case "FF":
			return ["frost"];
		case "G":
			return ["ghost_touch", "ghost touch"];
		case "D":
			return ["dancing"];
		case "W":
			return ["wounding"];
		case "M":
			return ["merciful"];
		case "V":
			return ["vicious"];
		case "DB":
			return ["dispelling_burst", "dispelling burst"];
		case "AD":
			return ["arrow_deflection", "arrow deflection"];
		case "DR":
			return ["disruption"];
	}
	return [convertTextToLink(input), input];
};

const Sizes = {
	F: "Fine",
	D: "Diminutive",
	T: "Tiny",
	S: "Small",
	M: "Medium",
	L: "Large",
	H: "Huge",
	G: "Gargantuan",
	C: "Colossal"
};
type SIZE = keyof typeof Sizes;
const SIZES = Object.keys(Sizes) as SIZE[];
const getSize = (i: keyof typeof Sizes) => Sizes[i];

const findTreasure = (t: Treasure): [string, string, false | string[][]] => {
	const {S, D, T, X, I, N} = t;
	let type = "";
	let link = "";
	let what: false | string[][] = false;
	if(S) {
		type = "standard";
		what = S;
	} else if (D) {
		type = "double";
		what = D;
	} else if (T) {
		type = "triple";
		what = T;
	} else if (X) {
		type = "none";
		what = X;
	} else if (I) {
		type = "incidental";
		what = I;
	} else {
		type = "NPC gear";
		link = "npc_gear";
		what = N!;
	}
	link = link || type;
	return [type, link, what];
};

const makeLink = (protocol: string, text: string, to: string = text) => {
	return <Link to={"/" + protocol + "/" + to}>{text}</Link>;
};

const parseTreasure = (input: string[][], id: string) => {
	const output: ReactNode[] = [];
	input.forEach((item, i) => {
		const components: ReactNode[] = item.map(bit => {
 			let m: RegExpMatchArray | null | string = "";
			if(SIZES.includes(bit as SIZE)) {
				return getSize(bit as SIZE);
			} else if (m = bit.match(/^[-+]?[0-9]+$/)) {
				return bit;
			}
			let l = "";
			switch(bit) {
				case "Mw":
					return "mwk";
				case "Iw":
					return makeLink("spell", "ironwood");
				case "SS":
					return makeLink("eq-armorenh", "spiked", "shield_spikes");
				case "MA":
					m = "adamantine";
				case "MB":
					m = m || "bronze";
				case "MD":
					m = m || "darkwood";
				case "MM":
					m = m || "mithral";
				case "MO":
					m = m || "obsidian";
				case "MG":
					m = m || "gold";
				case "MC":
					m = m || "cold iron";
					l = (m as string) || "cold_iron";
					return makeLink("eq-material", m as string, l);
				case "WIhh":
					m = "handy haversack";
					l = "handy_haversack";
				case "WImaul":
					m = m || "maul of the titans";
					l = l || "maul_of_the_titans";
				case "hbw2":
					m = m || "headband of inspired wisdom +2";
					l = l || "headband_of_inspired_wisdom_2";
				case "beltd2":
					m = m || "belt of incredible dexterity +2";
					l = l || "belt_of_incredible_dexterity_2";
					return makeLink("magic-wondrous", m as string, l);
			}
			const test = (m = bit.match(/^(.+)[/](.+)$/)) ? m[1] : bit;
			const end = m ? ` [${m[2]}]` : "";
			if(m = test.match(/^WD(.+)$/)) {
				return <>wand of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^AF(.+)$/)) {
				return <>{makeLink("magic-artifact", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^P(.+)$/)) {
				return <>potion of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^S(.+)$/)) {
				return <>scroll of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^BANE-(.+)$/)) {
				return <>{m[1]}-{makeLink("magic-enh", "bane")}{end}</>;
			} else if (m = test.match(/^Rprot([0-9]+)$/)) {
				l = `ring of protection +${m[1]}`;
				return makeLink("magic-ring", l, convertTextToLink(l));
			} else if (m = test.match(/^WIamu([0-9]+)$/)) {
				l = `amulet of naural armor +${m[1]}`;
				return makeLink("magic-wondrous", l, convertTextToLink(l));
			} else if (m = test.match(/^WIclk([0-9]+)$/)) {
				l = `cloak of protection +${m[1]}`;
				return makeLink("magic-wondrous", l, convertTextToLink(l));
			} else if (m = test.match(/^WIhbmp([0-9]+)wc$/)) {
				l = `headband of mental prowess +${m[1]}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))} [Wis, Cha]</>;
			} else if (test.startsWith("A")) {
				l = getArmor(test.slice(1));
				return makeLink("eq-armor", l, convertTextToLink(l));
			} else if (test.startsWith("W")) {
				const [link, text = link, etc = ""] = getWeapon(test.slice(1));
				return <>{makeLink("eq-weapon", text, link)}{etc}</>;
			} else if (test.startsWith("E")) {
				const [link, text = link] = getEnhancement(test.slice(1));
				return makeLink("magic-enh", text, link);
			}
			console.log(`Error: [${bit}]`);
			return `${bit} [error]`;
		}).map((bit, j) => <F key={`${id}-loot-${i}-${j}`}>{j ? " " : ""}{bit}</F>);
		output.push(<>{components}</>);
	});
	return mapNodes(output, `${id}-loot-list`, true);
};

const Treasure: FC<TreasureProps> = (props) => {
	const {t, id} = props;
	const {other, final} = t;
	if(other) {
		return <p><strong>Treasure</strong> {other}</p>;
	}
	const [text, link, content] = findTreasure(t);
	if(!content) {
		return <p><strong>Treasure</strong> <Link to={"/rule/" + link}>{text}</Link></p>;
	}
	const found = parseTreasure(content, id);
	return <p><strong>Treasure</strong> <Link to={
		"/rule/" + link
	}>{text}</Link> ({found}{
		final ? <>, {final}</> : ""
	})</p>;
};

const Ecology: FC<EcoProps> = (props) => {
	const {
		env, org, treasure, id
	} = props;
	return (
		<div className="reduce">
			<Header sub>Ecology</Header>
			<p><strong>Environment</strong> {env}</p>
			{org ? <p><strong>Organization</strong> {org}</p> : ""}
			{treasure ? <Treasure t={treasure} id={id} /> : ""}
		</div>
	);
};

export default Ecology;
