import { FC, useContext, ReactNode, Fragment as F } from 'react';
import { IdContext } from './contexts';
import Link from './Link';

type SubSchools = "call" | "charm" | "comp" | "creat" | "fig" | "glamer" | "heal" | "pat" | "phan" | "poly" | "scry" | "shadow" | "sum" | "tele";

type Descriptors = "acid" | "air" | "chaotic" | "cold" | "curse" | "dark" | "death" | "dis" | "drac" | "earth" | "elec" | "emo" | "evil" | "fear" | "fire" | "force" | "good" | "haunt" | "lang" | "lawful" | "light" | "medi" | "mind" | "pain" | "poi" | "ruse" | "shadow" | "sonic" | "water";

type Schools = "abjur" | "conj" | "div" | "ench" | "evo" | "ill" | "necro" | "trans" | "uni";

interface BaseProps {
	id: string
	source?: string
	school: ReactNode | Schools
	subschools?: SubSchools[]
	descriptors?: Descriptors[]
	ct?: ReactNode
	comp?: ReactNode
	dur?: ReactNode
}

interface SavingBlock {
	save?: ReactNode
	resist?: ReactNode
}
interface UnSavingBlock {
	save?: never
	resist: never
}
type SavingThrows = SavingBlock | UnSavingBlock;

interface Levels {
	adp?: number
	alc?: number
	ant?: number
	arc?: number
	bld?: number
	brd?: number
	clr?: number
	drd?: number
	hnt?: number
	inq?: number
	inv?: number
	mag?: number
	med?: number
	mes?: number
	occ?: number
	orc?: number
	pal?: number
	psy?: number
	rgr?: number
	rma?: number
	sha?: number
	skd?: number
	sor?: number
	spr?: number
	sum?: number
	usm?: number
	war?: number
	wit?: number
	wiz?: number
	faith?: string
}
interface Ranges {
	r?: ReactNode
	rTouch?: boolean
	rPers?: boolean
	rClose?: boolean
	rFt?: number
	rLong?: boolean
	rMed?: boolean
	rText?: boolean
}
interface Targets {
	target?: ReactNode
	targets?: ReactNode
	targetOrTargets?: ReactNode
	area?: ReactNode
	areaOrTarget?: ReactNode
	targetOrArea?: ReactNode
	effect?: ReactNode
}

type SpellInfoProps = BaseProps & Levels & Ranges & Targets & SavingThrows;

const parseSchools = (input: string): ReactNode => {
	switch(input) {
		case "abjur":
			return <Link to="/spelldef/abjuration">abjuration</Link>;
		case "conj":
			return <Link to="/spelldef/conjuration">conjuration</Link>;
		case "div":
			return <Link to="/spelldef/divination">divination</Link>;
		case "ench":
			return <Link to="/spelldef/enchantment">enchantment</Link>;
		case "evo":
			return <Link to="/spelldef/evocation">evocation</Link>;
		case "ill":
			return <Link to="/spelldef/illusion">illusion</Link>;
		case "necro":
			return <Link to="/spelldef/necromancy">necromancy</Link>;
		case "trans":
			return <Link to="/spelldef/transmutation">transmutation</Link>;
		case "uni":
			return <Link to="/spelldef/universal">universal</Link>;
	}
	return "MISSING";
};

const parseSubschools = (input: SubSchools[], id: string) => {
	const all = input.map((sub, i) => {
		switch(sub) {
			case "call":
				return (i ?
					<F key={`${id}-subschool-calling-${i}`}>, <Link to="/spelldef/calling">calling</Link></F>
					: <Link key={`${id}-subschool-calling-${i}`} to="/spelldef/calling">calling</Link>
				);
			case "charm":
				return (i ?
					<F key={`${id}-subschool-charm-${i}`}>, <Link to="/spelldef/charm">charm</Link></F>
					: <Link key={`${id}-subschool-charm-${i}`} to="/spelldef/charm">charm</Link>
				);
			case "comp":
				return (i ?
					<F key={`${id}-subschool-compulsion-${i}`}>, <Link to="/spelldef/compulsion">compulsion</Link></F>
					: <Link key={`${id}-subschool-compulsion-${i}`} to="/spelldef/compulsion">compulsion</Link>
				);
			case "creat":
				return (i ?
					<F key={`${id}-subschool-creation-${i}`}>, <Link to="/spelldef/creation">creation</Link></F>
					: <Link key={`${id}-subschool-creation-${i}`} to="/spelldef/creation">creation</Link>
				);
			case "fig":
				return (i ?
					<F key={`${id}-subschool-figment-${i}`}>, <Link to="/spelldef/figment">figment</Link></F>
					: <Link key={`${id}-subschool-figment-${i}`} to="/spelldef/figment">figment</Link>
				);
			case "glamer":
				return (i ?
					<F key={`${id}-subschool-glamer-${i}`}>, <Link to="/spelldef/glamer">glamer</Link></F>
					: <Link key={`${id}-subschool-glamer-${i}`} to="/spelldef/glamer">glamer</Link>
				);
			case "heal":
				return (i ?
					<F key={`${id}-subschool-healing-${i}`}>, <Link to="/spelldef/healing">healing</Link></F>
					: <Link key={`${id}-subschool-healing-${i}`} to="/spelldef/healing">healing</Link>
				);
			case "pat":
				return (i ?
					<F key={`${id}-subschool-pattern-${i}`}>, <Link to="/spelldef/pattern">pattern</Link></F>
					: <Link key={`${id}-subschool-pattern-${i}`} to="/spelldef/pattern">pattern</Link>
				);
			case "phan":
				return (i ?
					<F key={`${id}-subschool-phantasm-${i}`}>, <Link to="/spelldef/phantasm">phantasm</Link></F>
					: <Link key={`${id}-subschool-phantasm-${i}`} to="/spelldef/phantasm">phantasm</Link>
				);
			case "poly":
				return (i ?
					<F key={`${id}-subschool-polymorph-${i}`}>, <Link to="/spelldef/polymorph">polymorph</Link></F>
					: <Link key={`${id}-subschool-polymorph-${i}`} to="/spelldef/polymorph">polymorph</Link>
				);
			case "scry":
				return (i ?
					<F key={`${id}-subschool-scrying-${i}`}>, <Link to="/spelldef/scrying">scrying</Link></F>
					: <Link key={`${id}-subschool-scrying-${i}`} to="/spelldef/scrying">scrying</Link>
				);
			case "shadow":
				return (i ?
					<F key={`${id}-subschool-shadow-${i}`}>, <Link to="/spelldef/shadow_subschool">shadow</Link></F>
					: <Link key={`${id}-subschool-shadow-${i}`} to="/spelldef/shadow_subschool">shadow</Link>
				);
			case "sum":
				return (i ?
					<F key={`${id}-subschool-summoning-${i}`}>, <Link to="/spelldef/summoning">summoning</Link></F>
					: <Link key={`${id}-subschool-summoning-${i}`} to="/spelldef/summoning">summoning</Link>
				);
			case "tele":
				return (i ?
					<F key={`${id}-subschool-teleportation-${i}`}>, <Link to="/spelldef/teleportation">teleportation</Link></F>
					: <Link key={`${id}-subschool-teleportation-${i}`} to="/spelldef/teleportation">teleportation</Link>
				);
		}
	});
	return <>{" "}({all})</>;
};

const parseDescriptors = (input: Descriptors[], id: string) => {
	const all = input.map((desc, i) => {
		switch(desc) {
			case "acid":
				return (i ?
					<F key={`${id}-descriptor-acid-${i}`}>, <Link to="/spelldef/acid">acid</Link></F>
					: <Link key={`${id}-descriptor-acid-${i}`} to="/spelldef/acid">acid</Link>
				);
			case "air":
				return (i ?
					<F key={`${id}-descriptor-air-${i}`}>, <Link to="/spelldef/air">air</Link></F>
					: <Link key={`${id}-descriptor-air-${i}`} to="/spelldef/air">air</Link>
				);
			case "chaotic":
				return (i ?
					<F key={`${id}-descriptor-chaotic-${i}`}>, <Link to="/spelldef/chaotic">chaotic</Link></F>
					: <Link key={`${id}-descriptor-chaotic-${i}`} to="/spelldef/chaotic">chaotic</Link>
				);
			case "cold":
				return (i ?
					<F key={`${id}-descriptor-cold-${i}`}>, <Link to="/spelldef/cold">cold</Link></F>
					: <Link key={`${id}-descriptor-cold-${i}`} to="/spelldef/cold">cold</Link>
				);
			case "curse":
				return (i ?
					<F key={`${id}-descriptor-curse-${i}`}>, <Link to="/spelldef/curse">curse</Link></F>
					: <Link key={`${id}-descriptor-curse-${i}`} to="/spelldef/curse">curse</Link>
				);
			case "dark":
				return (i ?
					<F key={`${id}-descriptor-dark-${i}`}>, <Link to="/spelldef/darkness">darkness</Link></F>
					: <Link key={`${id}-descriptor-dark-${i}`} to="/spelldef/darkness">darkness</Link>
				);
			case "death":
				return (i ?
					<F key={`${id}-descriptor-death-${i}`}>, <Link to="/spelldef/death">death</Link></F>
					: <Link key={`${id}-descriptor-death-${i}`} to="/spelldef/death">death</Link>
				);
			case "dis":
				return (i ?
					<F key={`${id}-descriptor-dis-${i}`}>, <Link to="/spelldef/disease">disease</Link></F>
					: <Link key={`${id}-descriptor-dis-${i}`} to="/spelldef/disease">disease</Link>
				);
			case "drac":
				return (i ?
					<F key={`${id}-descriptor-drac-${i}`}>, <Link to="/spelldef/draconic">draconic</Link></F>
					: <Link key={`${id}-descriptor-drac-${i}`} to="/spelldef/draconic">draconic</Link>
				);
			case "earth":
				return (i ?
					<F key={`${id}-descriptor-earth-${i}`}>, <Link to="/spelldef/earth">earth</Link></F>
					: <Link key={`${id}-descriptor-earth-${i}`} to="/spelldef/earth">earth</Link>
				);
			case "elec":
				return (i ?
					<F key={`${id}-descriptor-elec-${i}`}>, <Link to="/spelldef/electricity">electricity</Link></F>
					: <Link key={`${id}-descriptor-elec-${i}`} to="/spelldef/electricity">electricity</Link>
				);
			case "emo":
				return (i ?
					<F key={`${id}-descriptor-emo-${i}`}>, <Link to="/spelldef/emotion">emotion</Link></F>
					: <Link key={`${id}-descriptor-emo-${i}`} to="/spelldef/emotion">emotion</Link>
				);
			case "evil":
				return (i ?
					<F key={`${id}-descriptor-evil-${i}`}>, <Link to="/spelldef/evil">evil</Link></F>
					: <Link key={`${id}-descriptor-evil-${i}`} to="/spelldef/evil">evil</Link>
				);
			case "fear":
				return (i ?
					<F key={`${id}-descriptor-fear-${i}`}>, <Link to="/spelldef/fear">fear</Link></F>
					: <Link key={`${id}-descriptor-fear-${i}`} to="/spelldef/fear">fear</Link>
				);
			case "fire":
				return (i ?
					<F key={`${id}-descriptor-fire-${i}`}>, <Link to="/spelldef/fire">fire</Link></F>
					: <Link key={`${id}-descriptor-fire-${i}`} to="/spelldef/fire">fire</Link>
				);
			case "force":
				return (i ?
					<F key={`${id}-descriptor-force-${i}`}>, <Link to="/spelldef/force">force</Link></F>
					: <Link key={`${id}-descriptor-force-${i}`} to="/spelldef/force">force</Link>
				);
			case "good":
				return (i ?
					<F key={`${id}-descriptor-good-${i}`}>, <Link to="/spelldef/good">good</Link></F>
					: <Link key={`${id}-descriptor-good-${i}`} to="/spelldef/good">good</Link>
				);
			case "haunt":
				return (i ?
					<F key={`${id}-descriptor-haunt-${i}`}>, <Link to="/spelldef/haunted">haunted</Link></F>
					: <Link key={`${id}-descriptor-haunt-${i}`} to="/spelldef/haunted">haunted</Link>
				);
			case "lang":
				return (i ?
					<F key={`${id}-descriptor-lang-${i}`}>, <Link to="/spelldef/language_dependant">language-dependant</Link></F>
					: <Link key={`${id}-descriptor-lang-${i}`} to="/spelldef/language_dependant">language-dependant</Link>
				);
			case "lawful":
				return (i ?
					<F key={`${id}-descriptor-lawful-${i}`}>, <Link to="/spelldef/lawful">lawful</Link></F>
					: <Link key={`${id}-descriptor-lawful-${i}`} to="/spelldef/lawful">lawful</Link>
				);
			case "light":
				return (i ?
					<F key={`${id}-descriptor-light-${i}`}>, <Link to="/spelldef/light">light</Link></F>
					: <Link key={`${id}-descriptor-light-${i}`} to="/spelldef/light">light</Link>
				);
			case "medi":
				return (i ?
					<F key={`${id}-descriptor-medi-${i}`}>, <Link to="/spelldef/meditative">meditative</Link></F>
					: <Link key={`${id}-descriptor-medi-${i}`} to="/spelldef/meditative">meditative</Link>
				);
			case "mind":
				return (i ?
					<F key={`${id}-descriptor-mind-${i}`}>, <Link to="/spelldef/mind_affecting">mind-affecting</Link></F>
					: <Link key={`${id}-descriptor-mind-${i}`} to="/spelldef/mind_affecting">mind-affecting</Link>
				);
			case "pain":
				return (i ?
					<F key={`${id}-descriptor-pain-${i}`}>, <Link to="/spelldef/pain">pain</Link></F>
					: <Link key={`${id}-descriptor-pain-${i}`} to="/spelldef/pain">pain</Link>
				);
			case "poi":
				return (i ?
					<F key={`${id}-descriptor-poi-${i}`}>, <Link to="/spelldef/poison">poison</Link></F>
					: <Link key={`${id}-descriptor-poi-${i}`} to="/spelldef/poison">poison</Link>
				);
			case "ruse":
				return (i ?
					<F key={`${id}-descriptor-ruse-${i}`}>, <Link to="/spelldef/ruse">ruse</Link></F>
					: <Link key={`${id}-descriptor-ruse-${i}`} to="/spelldef/ruse">ruse</Link>
				);
			case "shadow":
				return (i ?
					<F key={`${id}-descriptor-shadow-${i}`}>, <Link to="/spelldef/shadow_descriptor">shadow</Link></F>
					: <Link key={`${id}-descriptor-shadow-${i}`} to="/spelldef/shadow_descriptor">shadow</Link>
				);
			case "sonic":
				return (i ?
					<F key={`${id}-descriptor-sonic-${i}`}>, <Link to="/spelldef/sonic">sonic</Link></F>
					: <Link key={`${id}-descriptor-sonic-${i}`} to="/spelldef/sonic">sonic</Link>
				);
			case "water":
				return (i ?
					<F key={`${id}-descriptor-water-${i}`}>, <Link to="/spelldef/water">water</Link></F>
					: <Link key={`${id}-descriptor-water-${i}`} to="/spelldef/water">water</Link>
				);
		}
	});
	return <>{" "}[{all}]</>
};

const parseLevels = (input: Levels) => {
	const {
		adp, alc, ant, arc, bld, brd, clr, drd, hnt, inq,
		inv, mag, med, mes, occ, orc, pal, psy, rgr, rma,
		sha, skd, sor, spr, sum, usm, war, wit, wiz, faith
	} = input;
	const levels: string[] = [];
	if(adp !== undefined) { levels.push("adept " + adp); }
	if(alc !== undefined) { levels.push("alchemist " + alc); }
	if(ant !== undefined) { levels.push("antipaladin " + ant); }
	if(arc !== undefined) { levels.push("arcanist " + arc); }
	if(bld !== undefined) { levels.push("bloodrager " + bld); }
	if(brd !== undefined) { levels.push("bard " + brd); }
	if(clr !== undefined) { levels.push("cleric " + clr); }
	if(drd !== undefined) { levels.push("druid " + drd); }
	if(hnt !== undefined) { levels.push("hunter " + hnt); }
	if(inq !== undefined) { levels.push("inquisitor " + inq); }
	if(inv !== undefined) { levels.push("investigator " + inv); }
	if(mag !== undefined) { levels.push("magus " + mag); }
	if(med !== undefined) { levels.push("medium " + med); }
	if(mes !== undefined) { levels.push("mesmerist " + mes); }
	if(occ !== undefined) { levels.push("occultist " + occ); }
	if(orc !== undefined) { levels.push("oracle " + orc); }
	if(pal !== undefined) { levels.push("paladin " + pal); }
	if(psy !== undefined) { levels.push("psychic " + psy); }
	if(rgr !== undefined) { levels.push("ranger " + rgr); }
	if(rma !== undefined) { levels.push("red mantis assassin " + rma); }
	if(sha !== undefined) { levels.push("shaman " + sha); }
	if(skd !== undefined) { levels.push("skald " + skd); }
	if(sor !== undefined) { levels.push("sorcerer " + sor); }
	if(spr !== undefined) { levels.push("spiritualist " + spr); }
	if(sum !== undefined) { levels.push("summoner " + sum); }
	if(usm !== undefined) { levels.push("unchained summoner " + usm); }
	if(war !== undefined) { levels.push("warpriest " + war); }
	if(wit !== undefined) { levels.push("witch " + wit); }
	if(wiz !== undefined) { levels.push("wizard " + wiz); }
	const levs = levels.join(" ");
	if(faith) {
		return <>{levs} (<Link to={
			"/faith/" + faith.replace(" ", "_").toLowerCase()
		}>{faith}</Link>; see below)</>;
	}
	return levs;
};

const parseSource = (input: string, id: string) => {
	return input.split(";").map((bit, i) => {
		const [title, pg] = bit.split("/");
		return (
			<F key={`${id}-${bit}-${i}`}>{i ? ", " : ""}<Link to={
				"/source/" + title.toLowerCase().replace(/[- /]/g, "_").replace(/[^a-z0-9_]/g, "")
			}>{title}{pg ? ` pg. ${pg}` : ""}</Link></F>
		);
	});
};

const parseRange = (input: Ranges) => {
	const {r, rTouch, rPers, rClose, rFt, rLong, rMed, rText} = input;
	if(r) {
		return <><strong>Range</strong> {r}</>;
	}
	let range = "";
	if(rTouch) { range = "touch"; }
	if(rPers) { range = "personal"; }
	if(rClose) { range = "close (25 ft. + 5 ft./2 levels)"; }
	if(rFt !== undefined) { range = `${rFt} ft.`; }
	if(rLong) { range = "long (400 ft. + 40 ft./level)"; }
	if(rMed) { range = "medium (100 ft. + 10 ft./level)"; }
	if(rText) { range = "see text"; }
	if(range) {
		return <p><strong>Range</strong> {range}</p>;
	}
	return "";
}

const parseTargets = (input: Targets) => {
	const {
		target, targets, targetOrTargets,
		area, areaOrTarget, targetOrArea,
		effect
	} = input;
	return (<>
		{ target ? <p><strong>Target</strong> {target}</p> : (
			targets ? <p><strong>Targets</strong> {targets}</p> : (
				targetOrTargets ? <p><strong>Target or Targets</strong> {targetOrTargets}</p> : ""
			)
		)}
		{area ? <p><strong>Area</strong> {area}</p> : (
			areaOrTarget ? <p><strong>Area or Target</strong> {areaOrTarget}</p> : (
				targetOrArea ? <p><strong>Target or Area</strong> {targetOrArea}</p> : ""
			)
		)}
		{ effect ? <p><strong>Effect</strong> {effect}</p> : "" }	
	</>);
};

const SpellInfo: FC<SpellInfoProps> = (props) => {
	const {
		source, id, school, subschools, descriptors,
		adp, alc, ant, arc, bld, brd, clr, drd, hnt, inq,
		inv, mag, med, mes, occ, orc, pal, psy, rgr, rma,
		sha, skd, sor, spr, sum, usm, war, wit, wiz, faith,
		r, rTouch, rPers, rClose, rFt, rLong, rMed, rText,
		ct, comp, target, targets, targetOrTargets,
		area, areaOrTarget, targetOrArea, effect, dur,
		save, resist
	} = props;
	const cId = useContext(IdContext) + id;
	const etc = id ? {id: cId + id, "data-hash-target": true} : {};
	return (<>
		{source ? <p><strong>Source</strong> {...parseSource(source, id)}</p> : ""}
		<div {...etc} className="simpleStatblock hlBlock striped constrained">
			<p><strong>School</strong> {
				typeof school === "string" ? parseSchools(school) : school
			}{
				subschools ? parseSubschools(subschools, id) : ""
			}{
				descriptors ? parseDescriptors(descriptors, cId) : ""
			}; <strong>Level</strong> {parseLevels({
				adp, alc, ant, arc, bld, brd, clr, drd, hnt, inq,
				inv, mag, med, mes, occ, orc, pal, psy, rgr, rma,
				sha, skd, sor, spr, sum, usm, war, wit, wiz, faith
			})}</p>
			{ ct ? <p><strong>Casting Time</strong> {ct}</p> : "" }
			{ comp ? <p><strong>Components</strong> {comp}</p> : "" }
			{parseRange({r, rTouch, rPers, rClose, rFt, rLong, rMed, rText})}
			{parseTargets({target, targets, targetOrTargets, area, areaOrTarget, targetOrArea, effect})}
			{ dur ? <p><strong>Duration</strong> {dur}</p> : "" }
			{ save ? <p><strong>Saving Throw</strong> {save}; <strong>Spell Resistance</strong> {resist}</p> : "" }
		</div>
	</>);
};

export default SpellInfo;
