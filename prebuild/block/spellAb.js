import ordinal from "../ordinal.js";
import writtenNumber from "written-number";

const abPairOpen = 	'<div className="abPair">';
const abPairStartOpen = '<div className="abStart"><div className="box">';
const abPairEndOpen = '<div className="abEnd"><div className="box">';
const abPairPartClose = "</div></div>";
const abPairClose = "</div>";

/*
	stat = spellcasting stat
	m? = prefer male over female
	learn?, prepare? = "To ... or cast a spell..."
	zeroMsg? = the class has spell lines that are 0
	type = arcane/divine/psychic
	caster = class name
	alignLimit? = class has spellcasting alignment restrictions
	spontaneous? = spontaneous caster (omitted = prepared caster)
	occultist?, bard?, druid?, shaman? witch? oracle? skald? medium? = use special text for that class
	ritualDivine? = prepared divine caster
		choice? = mentions choosing a specific time to prepare
		meditate? = mentions quiet meditation to prepare
	ritualArcane? = prepared Arcane caster
	limited? = "selection of spells is extremely limited"
	limitedFull? = "selection of spells is limited"
	cureInflict? = gains cure/inflict spells automatically
	summonNature? = gains summon nature's ally spells automatically
	trade? "StartLevel~LevelsBetween"
		= at StartLevel and every LevelsBetween levels afterward,
			you can trade out a spell
		tradeLimit? = the traded spell cannot be your highest level
*/
export const makeSpellAbilityBlock = ({
	prefix,
	jlid,
	maybeClear,
	attrs,
	logError
}) => {
	const {
		stat, m,
		learn, prepare,
		zeroMsg,
		type, caster,
		alignLimit,
		spontaneous,
		occultist, bard, skald,
		ritualDivine, choice, druid, meditate, shaman, medium, oracle,
		ritualArcane, witch,
		limited, limitedFull, cureInflict, summonNature,
		trade53, trade42, tradeLimit
	} = attrs;
	const [ her, she, She ] =
		m ? [ "his", "he", "He" ]
		: [ "her", "she", "She" ];
	const [ an, An ]
		= "aeiou".indexOf(caster.slice(0,1)) > -1
		? ["an", "An"]
		: ["a", "A"];

	//
	// TEXT AFTER THE BLOCK
	//
	const block = [];
	(limited || limitedFull) && block.push(
		`<p>${An} ${caster}'s selection of spells is ${
			limited ? "extremely " : ""
		}limited. `
		+ (medium
			? `${She} begins play knowing two 0-level spells of ${her} choice. `
			: `${She} begins play knowing four 0-level spells `
				+ `and two 1st-level spells of ${her} choice. `
		)
		+ `At each new ${caster} level ${she} gains one or more `
		+ `new spells as indicated on the table above. `
		+ `Unlike spells per day, the number of spells ${an} ${caster} `
		+ `knows is not affected by ${her} ${stat} score.</p>`
	);

	occultist && block.push("<p>The occultist's selection of spells is limited. For each implement school he learns to use, he can add one spell of each level he can cast to his list of spells known, chosen from that school's spell list. If he selects the same implement school multiple times, he adds one spell of each level from that school's list for each time he has selected that school. When the occultist learns to cast a new level of spells, he immediately adds one spell of that level to his list of spells known from each implement school he knows (plus any extra spells from schools he has selected multiple times).</p>")

	cureInflict && block.push(
		`<p>In addition to the spells gained by ${caster}s as they `
		+ `gain levels, each ${caster} also adds all of either the `
		+ `<Link to="/main/spell_groupings">cure spells or the inflict spells</Link>`
		+ ` to ${her} list of spells known. This choice is made when `
		+ `the ${caster} gains ${her} first level and cannot be changed. `
		+ `These spells are added as soon as the ${caster} is `
		+ `capable of casting them.</p>`
	);
	summonNature && block.push(
		`<p>In addition to the spells gained by ${caster}s as they `
		+ `gain levels, each ${caster} also adds all `
		+ `<Link to="/spell/summon_natures_ally">summon nature's ally</Link>`
		+ ` spells to ${her} list of spells known. These spells are `
		+ `added as soon as the ${caster} is capable of casting them.</p>`
	);
	const forbidden = (() => {
		if(cureInflict) {
			return "<em>cure</em> or <em>inflict</em> spells"
				+ (
					oracle
					? `, nor can ${she} swap any spells gained from ${her} mystery`
					: ""
				);
		} else if (summonNature) {
			return "<em>summon nature's ally</em> spells";
		};
		return false;
	})();
	if(trade53 || trade42) {
		const [ begin, jump ] = trade53 ? [5, 3] : [4, 2];
		block.push(
			`<p>At ${ordinal(begin)} level, and every ${
				writtenNumber(jump)
			} levels thereafter (${
				ordinal(begin + jump)
			}, ${
				ordinal(begin + jump + jump)
			}, and so on), ${an} ${caster} can choose to learn a `
			+ `new spell in place of one ${she} already knows. In `
			+ `effect, the ${caster} \"loses\" the old spell in `
			+ `exchange for the new one. The new spell's level must `
			+ `be the same as that of the spell being exchanged`
			+ (tradeLimit
				? ", and it must be at least one level lower than the "
					+ `highest-level ${caster} spell ${she} can cast.`
				: "."
			)
			+ (occultist
				? " The spell learned must come from the same list of "
					+ "spells provided by the implement school of the "
					+ "spell lost."
				: ""
			)
			+ ` ${An} ${caster} may swap out only a single spell at any `
			+ "given level and must choose whether or not to swap the "
			+ `spell at the same time that ${she} gains new spells `
			+ "known for the level."
			+ (forbidden
				? ` ${She} cannot swap any ${forbidden}.`
				: ""
			)
			+ "</p>"
		);
	}


	//
	// ABILITY BOX
	//
	const output = [];
	//
	// TITLE
	//
	output.push(`<div className="title abSingle" id="${
		jlid || prefix + id
	}" data-hash-target><div className="box">Spells${
		block.length > 0 ? " (Basics)" : ""
	}</div></div>`);
	output.push(
		abPairOpen
			+ abPairStartOpen
			+ "Gained"
			+ abPairPartClose
			+ abPairEndOpen
			+ `At 1st Level`
			+ abPairPartClose
			+ abPairClose
	);
	//
	// USAGE
	//
	const learnPrepareCast = ((prepare && learn) ? 
		"learn, prepare, or cast" : (
			learn ? "learn or cast" : (
				prepare ? "prepare or cast" : "cast"
			)
		)
	);
	!stat && logError("Missing `stat` attribute.");
	!type && logError("Missing `type` attribute.");
	!caster && logError("Missing `caster` attribute.");
	output.push(
		abPairOpen
			+ abPairStartOpen
			+ "Usage"
			+ abPairPartClose
			+ abPairEndOpen
			+ `To ${learnPrepareCast} a spell, you must have a ${stat} score `
			+ "equal to at least 10 + the spell level. You can cast only "
			+ "a certain number of spells of each spell level per day, as shown "
			+ "on the table above. In addition, you receive "
			+ `<Link to="/rule/determine_bonuses">bonus spells per day</Link> `
			+ `if you have a high ${stat} score`
			+ (zeroMsg
				? "; if the table shows that you get 0 spells per day "
					+ "of a given spell level, you gain only these bonus "
					+ "spells for that spell level."
				: ".")
			+ abPairPartClose
			+ abPairClose
	)
	//
	// SPELL ABILITY DESCRIPTION
	//
	output.push(
		abPairOpen
			+ abPairStartOpen
			+ "Ability"
			+ abPairPartClose
			+ abPairEndOpen
			+ `You gain the ability to cast ${type} spells which are drawn from the `
			+ `<Link to="/main/spells_${caster}">${caster} spell list</Link>`
			+ `${
				occultist
					? ", limited by the implement groups you know"
					: ""
			}. The DC for a saving throw against spells you cast is`
			+ ` 10 + the spell level + your ${stat} modifier.${
				alignLimit
					? " Your alignment may restrict you from casting "
						+ "certain spells opposed to your moral or ethical beliefs; "
						+ "see <em>Chaotic, Evil, Good, and Lawful Spells.</em>"
					: ""
			} `
			+ (spontaneous
				? "You do not need to prepare these spells in advance; "
					+ "you can cast any spell you know at any time, "
					+ "assuming you haven't yet used up your allotment "
					+ "of spells per day for the spell's level."
				: "You must choose and prepare your spells in advance.")
			+ abPairPartClose
			+ abPairClose
	);
	const special = [];
	occultist && special.push(
		"Every occultist spell has an implement component (described below)."
	);
	bard && special.push(
		"Every bard spell has a verbal component (song, recitation, or music)."
	);
	skald && special.push(
		"Every skald spell has a verbal component - these verbal components can take the form of song, recitation, or even non-verbal music like percussion."
	);
	ritualDivine && special.push(
		`You must ${
			choice ? "choose a time when you must " : ""
		}spend 1 hour each day in ${
			druid
				? "a trance-like meditation on the mysteries of nature"
				: ("quiet "
					+ (meditate
						? "meditation "
						: "contemplation "
					)
					+(shaman
						? "with your spirit animal"
						: "or supplication"
					)
				)
		} to regain your daily allotment of spells. `
		+ `You may prepare and cast any spell on your spell list, `
		+ `provided that you can cast spells of that level, `
		+ `but you must choose which spells to prepare.`
	);
	ritualArcane && special.push(
		`You may know any number of spells. `
		+ `You must choose and prepare your spells ahead of time `
		+ `by getting 8 hours of sleep and spending 1 hour ${
			witch
				? "communing with your familiar"
				: "studying your spellbook"
		} and deciding which spells to prepare.`
	);
	oracle && special.push(
		"Oracles do not need to provide a divine focus to cast "
		+ "spells that list divine focus (DF) as part of the components."
	);
	if(special.length > 0) {
		output.push(
				abPairOpen
				+ abPairStartOpen
				+ "Special"
				+ abPairPartClose
				+ abPairEndOpen
				+ special.join(" ")
				+ abPairPartClose
				+ abPairClose
			);
	}


	return [
		`${maybeClear}<div className="ability">`
			+ `<div className="abIcon"><Link to="/icons">`
			+ `<IonIcon icon="/icons/magic-swirl.svg" color="secondary" />`
			+ "</Link></div>\n"
			+ output.join("\n")
			+ "</div>",
		...block
	].join("\n");

};

export default makeSpellAbilityBlock;
