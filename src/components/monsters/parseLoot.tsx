import {ReactNode, Fragment as F} from 'react';
import Link from '../Link';
import { convertTextToLink } from '../convertLinks';
import mapNodes from '../mapNodes';


const getArmor = (input: string) => {
	switch(input) {
		case "l":
			return "leather armor";
		case "sl":
			return "studded leather armor";
		case "bp":
			return "breastplate";
		case "fp":
			return "full plate";
		case "hp":
			return "half-plate";
		case "h":
			return "hide armor";
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

const getWeapon = (input: string, b1: string, b2: string) => {
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
		case "sis":
			return ["sickle", "sickles"];
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
			return ["light_flail", "light flail"];
		case "lfs":
			return ["light_flail", "light flails"];
		case "lfx":
			return ["light_flail", "flail"];
		case "lfxs":
			return ["light_flail", "flails"];
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
		case "rs":
			return ["rapier", "rapiers"];
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
		case "hf":
			return ["heavy_flail", "heavy flail"];
		case "lm":
			return ["light_mace", "light mace"];
		case "lsp":
			return ["longspear"];
		case "l":
			return ["lance"];
		case "w":
			return ["whip"];//
		case "af":
			return ["alchemists_fire", "alchemist's fire"];
		case "ts":
			return ["thunderstone", "thunderstone"];
		case "tss":
			return ["thunderstone", "thunderstones"];
		case "tb":
			return ["tanglefoot_bag", "tanglefoot bag"];
		case "tbs":
			return ["tanglefoot_bag", "tanglefoot bags"];
		case "sh":
			return ["shuriken"];
		case "a":
			return ["acid"];
		case "ta":
			return ["throwing_axe", "throwing axe"];
		case "tas":
			return ["throwing_axe", "throwing axes"];
		case "h":
			return ["horsechopper"];
		case "dg":
			return ["dogslicer"];
		case "dgs":
			return ["dogslicer", "dogslicers"];
		case "rlc":
			return ["repeating_light_crossbow", "repeating light crossbow"];
		case "rhc":
			return ["repeating_heavy_crossbow", "repeating heavy crossbow"];
		case "ars":
			return ["arrow", "arrows"];
		case "bolts":
			return ["bolt", "bolts"];
	}
	let m = input.match(/^hc([0-9]+)$/);
	if(m) {
		return ["heavy_crossbow", "heavy crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^rhc([0-9]+)$/)) {
		return ["repeating_heavy_crossbow", "repeating heavy crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^rlc([0-9]+)$/)) {
		return ["repeating_light_crossbow", "repeating light crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^lc([0-9]+)$/)) {
		return ["light_crossbow", "light crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^uhc([0-9]+)$/)) {
		return ["underwater_heavy_crossbow", "underwater heavy crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^m([0-9]+)$/)) {
		return ["musket", "musket", ` with ${m[1]} bullets`];
	}
	if(m = input.match(/^hand([0-9]+)$/)) {
		return ["hand_crossbow", "hand crossbow", ` with ${m[1]} bolts`];
	}
	if(m = input.match(/^csb([0-9]+)?(?:\+([0-9]+))?$/)) {
		const [, arr, bonus] = m;
		if(arr && bonus) {
			return ["composite_shortbow", "composite shortbow", ` ${b1}+${bonus} Str${b2} with ${arr} arrows`]
		} else if (arr) {
			return ["composite_shortbow", "composite shortbow", ` with ${arr} arrows`];
		} else if (bonus) {
			return ["composite_shortbow", "composite shortbows", ` ${b1}+${bonus} Str${b2}`];
		}
		return ["composite_shortbow", "composite shortbow"];
	}
	if(m = input.match(/^cls([0-9]+)$/)) {
		return ["composite_longbow", "composite longbows", ` with ${m[1]} arrows`];
	}
	if(m = input.match(/^cl([0-9]+)?(?:\+([0-9]+))?$/)) {
		const [, arr, bonus] = m;
		if(arr && bonus) {
			return ["composite_longbow", "composite longbow", ` ${b1}+${bonus} Str${b2} with ${arr} arrows`]
		} else if (arr) {
			return ["composite_longbow", "composite longbow", ` with ${arr} arrows`];
		} else if (bonus) {
			return ["composite_longbow", "composite longbow", ` ${b1}+${bonus} Str${b2}`];
		}
		return ["composite_longbow", "composite longbow"];
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
	if(m = input.match(/^sng([0-9]+)s$/)) {
		return ["sling", "sling", ` with ${m[1]} stones`];
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
			return ["shock"];
		case "I":
			return ["icy_burst", "icy burst"];
		case "FF":
			return ["frost"];
		case "G":
			return ["ghost_touch", "ghost touch"];
		case "GA":
			return ["ghost_touch_a", "ghost touch"];
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
		case "GL":
			return ["glamered"];
		case "SK":
			return ["seeking"];
		case "BE":
			return ["brilliant_energy", "brilliant energy"];
		case "SSa":
			return ["spell_storing<_a", "spell storing"];
		case "HF":
			return ["heavy_fortification", "heavy"];
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

const makeLink = (protocol: string, text: string, to: string = text) => {
	return <Link to={"/" + protocol + "/" + to}>{text}</Link>;
};

const parseLoot = (input: (string[]|ReactNode)[], id: string, treasure: boolean = false) => {
	const output: ReactNode[] = [];
	const b1 = treasure ? "[" : "(";
	const b2 = treasure ? "]" : ")";
	input.forEach((item, i) => {
		if(!Array.isArray(item)) {
			output.push(item);
			return;
		}
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
				case "AS":
					return makeLink("eq-armorenh", "spiked", "armor_spikes");
				case "MWsleep":
					return makeLink("magic-weapon", "sleep arrows", "sleep_arrow");
				case "MWgr":
					return makeLink("magic-weapon", "gauntlets of rending", "gauntlets_of_rending");
				case "Rev":
					return makeLink("magic-ring", "ring of evasion", "ring_of_evasion");
				case "Rst":
					return makeLink("magic-ring", "ring of spell turning", "ring_of_spell_turning");
				case "SOP":
					return makeLink("magic-staff", "staff of power", "staff_of_power");
				case "MA":
					m = "adamantine";
				case "MS":
					m = m || "silver";
				case "MN":
					m = m || "bone";
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
				case "WIhbw2":
					m = m || "headband of inspired wisdom +2";
					l = l || "headband_of_inspired_wisdom_2";
				case "WIhbw2":
					m = m || "headband of inspired wisdom +4";
					l = l || "headband_of_inspired_wisdom_4";
				case "WIhbms2":
					m = m || "headband of mental superiority +2";
					l = l || "headband_of_mental_superiority_2";
				case "WIhbms6":
					m = m || "headband of mental superiority +6";
					l = l || "headband_of_mental_superiority_6";
				case "WIhbvi2":
					m = m || "headband of vast intelligence +2";
					l = l || "headband_of_vast_intelligence_2";
				case "WIhbvi4":
					m = m || "headband of vast intelligence +4";
					l = l || "headband_of_vast_intelligence_4";
				case "WIhbac2":
					m = m || "headband of alluring charisma +2";
					l = l || "headband_of_alluring_charisma_2";
				case "WIhbac4":
					m = m || "headband of alluring charisma +4";
					l = l || "headband_of_alluring_charisma_4";
				case "WIhbac6":
					m = m || "headband of alluring charisma +6";
					l = l || "headband_of_alluring_charisma_6";
					return makeLink("magic-wondrous", m as string, l);
				case "PXmsv":
					m = "medium spider venom";
					l = "medium_spider_venom";
				case "PXdrow":
					m = m || "drow poison";
					l = l || "drow_poison";
					return makeLink("eq-poison", m as string, l);
				case "Qat":
					m = "antitoxin";
					l = m;
				case "Qtts":
					m = m || "tindertwigs";
					l = l || "tindertwig";
				case "Qsss":
					m = m || "smokesticks";
					l = l || "smokestick";
				case "Qsks":
					m = m || "sacks";
					l = l || "sack";
				case "Qsrs":
					m = m || "sunrods";
					l = l || "sunrod";
				case "Qbp":
					m = m || "backpack";
					l = l || m;
				case "Qhk":
					m = m || "healer's kit";
					l = l || "healers_kit";
				case "Qmtt":
					m = m || "mwk thieves' tools";
					l = l || "thieves_tools_mwk";
				case "Qscp":
					m = m || "spell component pouch";
					l = l || "spell_component_pouch";
					return makeLink("eq-misc", m as string, l);
			}
			const test = (m = bit.match(/^(.+)[/](.+)$/)) ? m[1] : bit;
			const end = m ? ` ${b1}${m[2]}${b2}` : "";
			if(m = test.match(/^WD(.+)$/)) {
				return <>wand of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^AF(.+)$/)) {
				return <>{makeLink("magic-artifact", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^P(.+)$/)) {
				return <>potion of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^S(.+)$/)) {
				return <>scroll of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^O(.+)$/)) {
				return <>oil of {makeLink("spell", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^M-(.+)$/)) {
				return <>{makeLink("eq-material", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^PX-(.+)$/)) {
				return <>{makeLink("eq-poison", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^WI-(.+)$/)) {
				return <>{makeLink("magic-wondrous", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^STF(.+)$/)) {
				return <>{makeLink("magic-staff", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^ROD(.+)$/)) {
				return <>{makeLink("magic-rod", m[1], convertTextToLink(m[1]))}{end}</>;
			} else if (m = test.match(/^BANE-(.+)$/)) {
				return <>{m[1]}-{makeLink("magic-enh", "bane")}{end}</>;
			} else if (m = test.match(/^MWslay-(.+)$/)) {
				return <>{m[1]}-{makeLink("magic-weapon", "slaying arrow", "slaying_arrow")}{end}</>;
			} else if (m = test.match(/^MWgslay-(.+)$/)) {
				return <>{m[1]}-{makeLink("magic-weapon", "greater slaying arrow", "greater_slaying_arrow")}{end}</>;
			} else if (m = test.match(/^Rfom([0-9]+)$/)) {
				return <>{makeLink("magic-ring", "ring of freedom of movement", "ring_of_freedom_of_movement")}{end}</>;
			} else if (m = test.match(/^IO(.+)$/)) {
				l = `${m[1]}`;
				return <>{makeLink("magic-ioun", l, convertTextToLink(l))} ioun stone</>;
			} else if (m = test.match(/^Rprot([0-9]+)$/)) {
				l = `ring of protection +${m[1]}`;
				return makeLink("magic-ring", l, convertTextToLink(l));
			} else if (m = test.match(/^WIfist([0-9]+)$/)) {
				l = `amulet of mighty fists +${m[1]}`;
				return makeLink("magic-wondrous", l, convertTextToLink(l));
			} else if (m = test.match(/^WIamu([0-9]+)$/)) {
				l = `amulet of natural armor +${m[1]}`;
				return makeLink("magic-wondrous", l, convertTextToLink(l));
			} else if (m = test.match(/^WIboa([0-9]+)$/)) {
				l = `bracers of armor +${m[1]}`;
				return makeLink("magic-wondrous", l, convertTextToLink(l));
			} else if (m = test.match(/^WIclk([0-9]+)$/)) {
				l = `cloak of resistance +${m[1]}`;
				return makeLink("magic-wondrous", l, convertTextToLink(l));
			} else if (m = test.match(/^WIhbmp([0-9]+)([iwc])([iwc])$/)) {
				const [, plus, s1, s2] = m;
				const o: {[key: string]: string} = {i: "Int", w: "Wis", c: "Cha"};
				l = `headband of mental prowess +${plus}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))} {b1}{o[s1]}, {o[s2]}{b2}{end}</>;
			} else if (m = test.match(/^WIbopm([0-9]+)([sdc])([sdc])$/)) {
				const [, plus, s1, s2] = m;
				const o: {[key: string]: string} = {s: "Str", d: "Dex", c: "Con"};
				l = `belt of physical might +${plus}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))} {b1}{o[s1]}, {o[s2]}{b2}</>;
			} else if (m = test.match(/^WIboid([0-9]+)$/)) {
				l = `belt of incredible dexterity +${m[1]}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))}</>;
			} else if (m = test.match(/^WIbomc([0-9]+)$/)) {
				l = `belt of mighty constitution +${m[1]}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))}</>;
			} else if (m = test.match(/^WIbogs([0-9]+)$/)) {
				l = `belt of giant strength +${m[1]}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))}</>;
			} else if (m = test.match(/^WIbopp([0-9]+)$/)) {
				l = `belt of physical perfection +${m[1]}`;
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))}</>;
			} else if (test.startsWith("WI-")) {
				l = test.slice(3);
				return <>{makeLink("magic-wondrous", l, convertTextToLink(l))}{end}</>;
			} else if (test.startsWith("MW")) {
				l = test.slice(2);
				return makeLink("magic-weapon", l, convertTextToLink(l));
			} else if (test.startsWith("A")) {
				l = getArmor(test.slice(1));
				return makeLink("eq-armor", l, convertTextToLink(l));
			} else if (test.startsWith("R")) {
				l = test.slice(1);
				return <>{makeLink("magic-ring", l, convertTextToLink(l))}{end}</>;
			} else if (test.startsWith("W")) {
				const [link, text = link, etc = ""] = getWeapon(test.slice(1), b1, b2);
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

export default parseLoot;
