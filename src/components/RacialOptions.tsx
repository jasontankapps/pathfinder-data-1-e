import { IonIcon } from "@ionic/react";
import { ReactNode, FC, Fragment as F, useMemo, ClassAttributes, AnchorHTMLAttributes } from "react";
import Markdown, { ExtraProps } from 'react-markdown';
import Link from "./Link";
import InnerLink from "./InnerLink";
import Duo from "./Duo";
import {Block, Row, Cell} from "./Block";
import comp from "./displayTable/Components";

type Subrace = [string, [number, number][], ReactNode];
type Alt = [string, ...number[]];

interface BaseProps {
	prefix: string
}
interface Race extends BaseProps {
	race: string
	subraces?: Subrace[]
	alternates?: Alt[]
	cls?: never
};
interface Cls extends BaseProps {
	cls: string
	race?: never
	subraces?: never
	alternates?: never
};
type Props = Race | Cls;

type Data = { [key: string]: string };

interface Alternate {
	title: string
	sources: Source[]
	content: ReactNode
	copies?: never
	add?: never
}
interface AlternateCopy {
	copies: number
	add: ReactNode
	title?: never
	sources?: never
	content?: never
}
type Alternates = Alternate | AlternateCopy;
//race, title, replaces, [bonus], [[sources]]
const $alternates: Alternates[] = [
	{ // 0
		"title": "Deathless Spirit",
		"sources": [[0,84]],
		"content": (
			<p>Particularly strong-willed aasimars possess celestial spirits capable of resisting the powers of death. They gain resistance 5 against negative energy damage. They do not lose hit points when they gain a negative level, and they gain a +2 racial bonus on saving throws against death effects, energy drain, negative energy, and spells or spell-like abilities of the necromancy school.</p>
		)
	},
	{ // 1
		"title": "Exalted Resistance",
		"sources": [[0,85]],
		"content": (
			<p>An aasimar with this racial trait gains spell resistance equal to 5 + her level against spells and spell-like abilities with the evil descriptor, as well as any spells and spell-like abilities cast by evil outsiders.</p>
		)
	},
	{ // 2
		"title": "Celestial Crusader",
		"sources": [[0,84]],
		"content": (
			<p>Some aasimars follow their destiny to war against the powers of ultimate evil. These individuals gain a +1 insight bonus on attack rolls and to AC against evil outsiders and a +2 racial bonus on Knowledge (planes) and Spellcraft checks to identify evil outsiders or items or effects created by evil outsiders; they may use these skills untrained for this purpose.</p>
		)
	},
	{ // 3
		"title": "Halo",
		"sources": [[0,85]],
		"content": (
			<p>Some aasimars possess the ability to manifest halos. An aasimar with this racial trait can create <Link to="/spell/light">light</Link> centered on her head at will as a spell-like ability. When using her halo, she gains a +2 circumstance bonus on Intimidate checks against evil creatures and on saving throws against becoming blinded or dazzled.</p>
		)
	},
	{ // 4
		"title": "Scion of Humanity",
		"sources": [[0,85]],
		"content": (
			<p>Some aasimars' heavenly ancestry is extremely distant. An aasimar with this racial trait counts as an outsider (native) and a humanoid (human) for any effect related to race, including feat prerequisites and spells that affect humanoids. She can pass for human without using the Disguise skill.</p>
		)
	},
	{ // 5
		"title": "Truespeaker",
		"sources": [[0,85]],
		"content": (
			<p>There are some aasimars whose language transcends all boundaries. They gain a +2 bonus on Linguistics and Sense Motive checks, and they learn two <Link to="/misc/languages">languages</Link> each time they gain a rank in Linguistics.</p>
		)
	},
	{ // 6
		"title": "Crusading Magic",
		"sources": [[21,214]],
		"content": (
			<p>Many aasimars feel obligated to train to defend the world against fiends such as the invaders from the Worldwound. These aasimars gain a +2 racial bonus on caster level checks to overcome spell resistance and on Knowledge (planes) checks.</p>
		)
	},
	{ // 7
		"title": "Heavenborn",
		"sources": [[0,85]],
		"content": (
			<p>Born in the celestial realms, aasimars with this racial trait gain a +2 bonus on Knowledge (planes) checks and they cast spells with the good or light descriptor at +1 caster level.</p>
		)
	},
	{ // 8
		"title": "Immortal Spark",
		"sources": [[0,85]],
		"content": (
			<p>Aasimars with this racial trait defy the powers of death. They gain a +2 bonus on Knowledge (history) checks and saving throws against death effects and can use <Link to="/spell/lesser_age_resistance">lesser age resistance</Link> once per day as a spell-like ability.</p>
		)
	},
	{ // 9
		"title": "Incorruptible",
		"sources": [[0,85]],
		"content": (
			<p>Occasionally, aasimars arise with the ability to further ward away evil. Aasimars with this racial trait can cast <Link to="/spell/corruption_resistance">corruption resistance</Link> against evil once per day as a spell-like ability. If an aasimar uses this ability on herself, the duration increases to 1 hour per level.</p>
		)
	},
	{ // 10
		"title": "Lost Promise",
		"sources": [[21,214]],
		"content": (
			<p>While many view aasimars' beauty and celestial powers as a gift, in some communities an aasimar might be persecuted for being different and fall into darkness. The forces of evil delight in such a perversion of their celestial counterparts' gifts. As long as the aasimar retains an evil alignment, she gains the maw or claw tiefling alternate racial trait.</p>
		)
	},
	{ // 
		"title": "Variant Aasimar Abilities",
		"sources": [[22,18]],
		"content": (<>
			<p>Some aasimars are blessed or cursed with unusual abilities. GMs may customize their aasimar NPCs using the following chart, or allow their players to do so by rolling a d%. Players with a particular character concept in mind may consult their GM if they want to select a specific variant ability. Any abilities that grant spells or spell-like abilities are treated as having a caster level equal to the aasimar's character level.</p>
			<p>The table can be found <Link to="/misc/variant_aasimar_abilities">on its own page</Link>.</p>
		</>)
	},
	{ // 
		"title": "Share Knowledge",
		"sources": [[3,14]],
		"content": (
			<p>Certain aphorites have a sliver of their creators' ability to combine their collective intellect and solve problems they could not solve on their own. When an aphorite with this racial trait successfully uses the aid another action to aid a character on a Knowledge check the aphorite is trained in, the character receives a +4 bonus instead of the normal +2 bonus. As a result of this increased openness, aphorites with this racial trait don't receive a +2 bonus on saves against mind-affecting effects.</p>
		)
	},
	{ // 
		"title": "Planar Envoy",
		"sources": [[3,14]],
		"content": (
			<p>Reflecting their original role as translators and intermediaries, some aphorites are especially skilled at communication. Aphorites with this racial trait begin play speaking Common and either Abyssal, Aquan, Auran, Celestial, Ignan, Infernal, or Terran. Aphorites with this racial trait and a high Intelligence score can choose any <Link to="/misc/languages">languages</Link> at character creation (except for secret languages, such as Druidic). They learn two languages rather than one each time they gain a rank in Linguistics.</p>
		)
	},
	{ // 
		"title": "Eternal Smith",
		"sources": [[3,14]],
		"content": (
			<p>Some aphorites retain knowledge of the techniques axiomites used to create arms to defend Axis. Aphorites with this racial trait choose either Craft (armor), Craft (bows), or Craft (weapons). When crafting items with the chosen skill, aphorites with this racial trait use the item's gp value as its sp value when determining crafting progress (they do not multiply the item's gp cost by 10 to determine its sp cost).</p>
		)
	},
	{ // 15
		"title": "Urban Memories",
		"sources": [[3,14]],
		"content": (
			<p>With vague memories of the Perfect City resting somewhere deep in their minds, aphorites with this racial trait gain a +2 racial bonus on Knowledge (local) checks and can cast <Link to="/spell/urban_grace">urban grace</Link> once per day as a spell-like ability (caster level equal to the aphorite's character level).</p>
		)
	},
	{ // 
		"title": "Jungle Stalker",
		"sources": [[21,214]],
		"content": (
			<p>Catfolk often live in deeply forested terrain, such as the Valashmai Jungle, and they have become naturally sure-footed to maintain their hunting prowess in these dangerous environments. Such catfolk gain a +2 racial bonus on Acrobatics checks and can ignore the first square of difficult terrain caused by foliage each round.</p>
		)
	},
	{ // 
		"title": "Scent",
		"sources": [[0,91]],
		"content": (
			<p>Some catfolk favor a keen sense of smell over sensitive sight. Catfolk with this racial trait gain the <Link to="/umr/scent">scent</Link> ability.</p>
		)
	},
	{ // 
		"title": "Cat's Claws",
		"sources": [[0,91]],
		"content": (
			<p>Some catfolk have stronger and more developed claws than other members of their race, and can use them to make attacks. Catfolk with this racial trait have a pair of claws they can use as natural weapons. These claws are primary attacks that deal 1d4 points of damage.</p>
		)
	},
	{ // 
		"title": "Clever Cat",
		"sources": [[0,91]],
		"content": (
			<p>Catfolk's generally friendly disposition doesn't preclude craftiness. Some of them see social obstacles as games to be played and won. These catfolk receive a +2 racial bonus on Bluff, Diplomacy, and Sense Motive checks.</p>
		)
	},
	{ // 20
		"title": "Curiosity",
		"sources": [[0,91]],
		"content": (
			<p>Catfolk are naturally inquisitive about the world around them, though some are more curious than others. Such catfolk gain a +4 bonus on Diplomacy checks to gather information, and Knowledge (history) and Knowledge (local) are always class skills for them. If they choose a class that has either of these Knowledge skills as class skills, they gain a +2 racial bonus on those skills instead.</p>
		)
	},
	{ // 
		"title": "Climber",
		"sources": [[0,91]],
		"content": (
			<p>Catfolk hunters excel at hunting prey from trees and other high vantage points. Catfolk with this racial trait possess a climb speed of 20 feet (along with the +8 racial bonus on Climb checks a climb speed affords).</p>
		)
	},
	{ // 
		"title": "Nimble Faller",
		"sources": [[0,91]],
		"content": (
			<p>Some catfolk have an amazing sense of balance and keen knowledge of their own center of gravity. Catfolk with this trait land on their feet even when they take lethal damage from a fall. Furthermore, catfolk with this trait gain a +1 bonus to their CMD against trip maneuvers.</p>
		)
	},
	{ // 
		"title": "Witchborn",
		"sources": [[21,215]],
		"content": (
			<p>Most changelings are talented witches. They gain a +2 bonus to Intelligence and Charisma instead of a +2 bonus to Wisdom and Charisma.</p>
		)
	},
	{ // 
		"title": "Hag Magic",
		"sources": [[23,24],[21,214]],
		"content": (
			<p>Some changelings develop a gift for spellcasting instead of their mothers' overtly fearsome traits. A changeling with this trait displays one or more stark white streaks in her hair as a child. The DCs of any saving throws against enchantment spells she casts increase by 1, and if her Charisma score is 11 or higher, she also gains the following spell-like abilities, usable once per day each: <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/disguise_self">disguise self</Link>, and <Link to="/spell/pass_without_trace">pass without trace</Link>. The caster level of these spell-like abilities is equal to the changeling's character level. The DC for these spell-like abilities is equal to 10 + the spell's level + the changeling's Charisma modifier.</p>
		)
	},
	{ // 25
		"title": "Vampire Hunter",
		"sources": [[21,215]],
		"content": (
			<p>Some dhampirs bear a deep hatred for their undead progenitors and their kin that can never be fully quenched. They gain a +1 bonus on attack rolls against vampires.</p>
		)
	},
	{ // 
		"title": "Vampiric Empathy",
		"sources": [[0,97]],
		"content": (
			<p>Though dhampirs often relate poorly to humanoids, some share an affinity with baser creatures. These dhampirs gain the ability to communicate with bats, rats, and wolves as if under the effects of a <Link to="/spell/speak_with_animals">speak with animals</Link> spell (caster level equal to 1/2 the dhampir's Hit Dice). In addition, they gain a +2 racial bonus on Diplomacy checks when dealing with these animals. Whenever these dhampirs initiate an exchange, animals begin with a starting attitude of indifferent. This is a supernatural ability.</p>
		)
	},
	{ // 
		"title": "Dayborn",
		"sources": [[0,97]],
		"content": (
			<p>A few fortunate dhampirs were born during the day under the blessings of priests, and their blood has weaker ties to their undead bloodline than others of their kind. Such dhampirs are unhindered by daylight and lose the light sensitivity racial trait.</p>
		)
	},
	{ // 
		"title": "Fangs",
		"sources": [[0,97]],
		"content": (
			<p>On occasion, a dhampir may inherit his father's lengthy canines. Whenever the dhampir makes a grapple combat maneuver check to damage an opponent, he can choose to bite his opponent, dealing 1d3 points of damage as if using a natural bite attack. As a standard action, the dhampir can bite a creature that is bound, helpless, paralyzed, or similarly unable to defend itself.</p>
		)
	},
	{ // 
		"title": "Heir to Undying Nobility",
		"sources": [[21,215]],
		"content": (
			<p>Descended from undead nobility, perhaps from Geb, Nidal, or Ustalav, some dhampirs inherit a bit of their ancestors' ability to control living beings. They can use command and <Link to="/spell/charm_person">charm person</Link> each once per day.</p>
		)
	},
	{ // 30
		"title": "Surface Infiltrator",
		"sources": [[0,103]],
		"content": (
			<p>Some drow dwell close to the surface lands, either because they serve drow causes or they were exiled. Drow with this racial trait gain low-light vision, allowing them to see twice as far as humans in conditions of dim light.</p>
		)
	},
	{ // 
		"title": "Seducer",
		"sources": [[0,103]],
		"content": (
			<p>Certain drow possess an innate understanding of the darkest desires that lurk in every heart. Drow with this racial trait add +1 to the saving throw DCs for spells and spell-like abilities of the enchantment school. In addition, drow with a Wisdom score of 15 or higher may use <Link to="/spell/charm_person">charm person</Link> once per day as a spell-like ability (caster level equal to the drow's character level).</p>
		)
	},
	{ // 
		"title": "Psychic Sensitivity",
		"sources": [[4,15]],
		"content": (
			<p>The Darklands is full of strange energies, and the drow or half-drow who live there practice bloody rituals in exchange for favor and power. Drow or half-elves with this trait gain the <Link to="/feat/Psychic_Sensitivity">Psychic Sensitivity</Link> feat, gaining access to occult skill unlocks normally only available to psychic spellcasters.</p>
		)
	},
	{ // 
		"title": "Defensive Training",
		"sources": [[21,215]],
		"content": (
			<p>Many drow cities are frequently beset by attacks from aberrations, prompting the residents train themselves to defend against them. Drow gain a +4 dodge bonus to AC against aberrations.</p>
		)
	},
	{ // 
		"title": "Poison Minion",
		"sources": [[4,5]],
		"content": (<>
			<p>Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison (see below). The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison.</p>
			<Block titled>
			<Row><Cell className="has-icon"><Link to="/rules/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></Link><span>Mawbane Poison</span></Cell></Row>
			<Row><Cell>Type</Cell><Cell>Ingested</Cell></Row>
			<Row><Cell>Save DC</Cell><Cell>Fort 10 + 1/2 the character's HD + their Con modifier</Cell></Row>
			<Row><Cell>Onset</Cell><Cell>immediate</Cell></Row>
			<Row><Cell>Frequency</Cell><Cell>1/round for 4 rounds</Cell></Row>
			<Row><Cell>Effect</Cell><Cell>1d2 <Link to="/rule/con_damage">Con damage</Link></Cell></Row>
			<Row><Cell>Cure</Cell><Cell>1 save</Cell></Row>
			</Block>
		</>)
	},
	{ // 35
		"title": "Darklands Guide",
		"sources": [[4,5]],
		"content": (
			<p>Those who brave the lightless tunnels below Golarion's surface learn to identify the dangerous phenomena that characterize the Darklands. Characters with this trait gain a +2 bonus on initiative checks, and on saves against traps and hazards when underground (from a lifetime of dodging accursed pools, cave-ins, and green slime).</p>
		)
	},
	{ // 
		"title": "Sure Step",
		"sources": [[4,5]],
		"content": (
			<p>Adventurers can spend their whole careers in the alleys and sewers of large cities or the tunnels of the Darklands. Characters with this trait suffer no movement penalties when blinded or moving in darkness.</p>
		)
	},
	{ // 
		"title": "Blasphemous Covenant",
		"sources": [[0,102]],
		"content": (
			<p>Since their twisted beginnings, the drow have consorted with <Link to="/family/demon">demons</Link>. Some drow have strong ties with these creatures and may call upon ancient and obscene associations to sway demonic cooperation. Drow with this racial trait gain a +2 bonus on Diplomacy checks made against unbound creatures with the demon subtype. Furthermore, demons conjured with any summon spell gain +2 hit points per Hit Die. Lastly, the cost of bribes or offerings for any <Link to="/spell/planar_ally">planar ally</Link> spell cast by these drow to summon a demon is reduced by 20%.</p>
		)
	},
	{ // 
		"title": "Ambitious Schemer",
		"sources": [[0,102]],
		"content": (
			<p>Seduction and treachery are tools for advancement in drow society, even for the martially inclined. Drow with this racial trait may choose either Bluff or Diplomacy as a class skill, and gain a +2 bonus on such skill checks.</p>
		)
	},
	{ // 
		"title": "Ancestral Grudge",
		"sources": [[0,102]],
		"content": (
			<p>The enmity between the drow and elves and dwarves is long-standing and deeply entrenched. Drow with this racial trait gain a +1 bonus on attack rolls against humanoids with the dwarf or elf subtypes (with the exception of drow) because of their special training against these reviled foes.</p>
		)
	},
	{ // 40
		"title": "Shadow Sorcery",
		"sources": [[4,15]],
		"content": (
			<p>Drow with this trait have a supernatural affinity for shadow. A drow sorcerer with the shadow bloodline treats her Charisma score as 2 points higher for all sorcerer class abilities and for spells with the shadow descriptor she casts.</p>
		)
	},
	{ // 
		"title": "Champion of Dark Powers",
		"sources": [[23,24]],
		"content": (
			<p>Some drow offer themselves to dark patrons, particularly demon lords. Drow with this racial trait apply their spell resistance only against spells with the good or healing descriptor or against spells cast by a divine spellcaster who worships a good-aligned deity. Anytime a drow with this racial trait casts a spell with the evil descriptor, the DC to resist the spell's effects increases by 2.</p>
		)
	},
	{ // 
		"title": "Daylight Adaptation",
		"sources": [[4,14]],
		"content": (
			<p>Some drow with a hint of other racial heritages spend significant time on the surface and maintain their darkvision, but no longer have the light blindness trait.</p>
		)
	},
	{ // 
		"title": "Darklands Stalker",
		"sources": [[0,103]],
		"content": (
			<p>The lands outside of drow cities, from rough-hewn tunnels to rocky caverns, are treacherous to navigate. Drow with this racial trait may move through difficult terrain without penalty while underground. In addition, drow with a Dexterity of 13 or higher gain <Link to="/feat/Nimble_Moves">Nimble Moves</Link> as a bonus feat.</p>
		)
	},
	{ // 
		"title": "Shade Magic",
		"sources": [[4,15]],
		"content": (
			<p>Drow with this trait can cast <Link to="/spell/cloak_of_shade">cloak of shade</Link>, <Link to="/spell/dust_of_twilight">dust of twilight</Link>, and <Link to="/spell/ghost_sound">ghost sound</Link> as spell-like abilities each once per day.</p>
		)
	},
	{ // 45
		"title": "Voice in the Darkness",
		"sources": [[4,5]],
		"content": (
			<p>Prerequisite: Charisma 13+. Characters who practice coercion and intimidation in the Darklands or on the Shadow Plane learn to do so in dim light or no light at all. As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks.</p>
		)
	},
	{ // 
		"title": "Ironskinned",
		"sources": [[15,44]],
		"content": (
			<p>The soul of the earth infuses some duergar, giving them the ability to harden their skin. Duergar with this racial trait can use <Link to="/spell/ironskin">ironskin</Link> once per day as a spell-like ability, using their character level as their caster level.</p>
		)
	},
	{ // 
		"title": "Blood Enmity",
		"sources": [[0,186]],
		"content": (
			<p>Duergar have long warred against their dwarven cousins and the hated drow. Duergar with this racial trait receive a +1 racial bonus on attack rolls against humanoid creatures of the dwarf or elf subtypes.</p>
		)
	},
	{ // 
		"title": "Magical Taskmaster",
		"sources": [[21,215]],
		"content": (
			<p>Some duergar demonstrate magic of a more insidious kind than the rest of their kin, a difference that is often taken to be a sign of Droskar's blessing. They can use <Link to="/spell/charm_person">charm person</Link> once per day as a spell-like ability. The save DC is equal to 10 + 1/2 duergar's Hit Dice + duergar's Wisdom modifier.</p>
		)
	},
	{ // 
		"title": "Twilight-Touched",
		"sources": [[15,44]],
		"content": (
			<p>While most duergar have the power to become invisible, a few are instead able to extinguish the light around them. Duergar with this racial trait can use <Link to="/spell/dust_of_twilight">dust of twilight</Link> once per day as a spell-like ability, using their character level as their caster level.</p>
		)
	},
	{ // 50
		"title": "Deep Magic",
		"sources": [[0,186]],
		"content": (
			<p>Duergar spellcasters labor long to overcome the inborn spell resistance held by so many of their underground foes. Duergar with this racial trait receive a +2 racial bonus on caster level checks made to overcome spell resistance and a +2 racial bonus on dispel checks.</p>
		)
	},
	{ // 
		"title": "Dwarf Traits",
		"sources": [[0,186]],
		"content": (
			<p>Duergar can select any dwarf racial trait that replaces stability. They can select dwarf racial traits that replace the hardy dwarf racial trait by giving up duergar immunities instead.</p>
		)
	},
	{ // 
		"title": "Daysighted",
		"sources": [[0,186]],
		"content": (
			<p>The cruel light of the sun harms some duergar less than others. Such duergar lack the light sensitivity racial trait, but have darkvision of only 60 feet.</p>
		)
	},
	{ // 
		"title": "Abandoned",
		"sources": [[3,16]],
		"content": (
			<p>Some duskwalker children are shunned and feared by their communities, forced to steal and scavenge to survive. Duskwalkers with this racial trait gain a +2 racial bonus on Stealth and Survival checks.</p>
		)
	},
	{ // 
		"title": "Fosterling",
		"sources": [[3,16]],
		"content": (
			<p>Those duskwalker children fortunate enough to be taken in by warm-hearted families grow up surrounded by parents, siblings, and pets. Duskwalkers with this racial trait gain a +2 racial bonus on Diplomacy and Handle Animal checks.</p>
		)
	},
	{ // 55
		"title": "Olethros's Agent",
		"sources": [[3,16]],
		"content": (
			<p>A few duskwalkers take on more of their patrons' aspects than others. A duskwalker blessed by an olethros is an agent of fate beyond compare. Once per day as a free action, upon making a successful attack, a duskwalker with this racial trait can ignore an amount of DR equal to 10 + his Charisma modifier for that attack.</p>
		)
	},
	{ // 
		"title": "Yamaraj's Baliff",
		"sources": [[3,16]],
		"content": (
			<p>Duskwalkers tied to the mighty yamarajes can draw upon a fraction of the final judges' sagacity. Duskwalkers with this racial trait can use their Wisdom modifier when attempting Bluff and Diplomacy checks instead of their Charisma modifier.</p>
		)
	},
	{ // 
		"title": "Low-Light Vision",
		"sources": [[28,5]],
		"content": (
			<p>Many feyborn have low-light vision. Races that normally have darkvision (such as dwarves and half-orcs) can take low-light vision in place of darkvision.</p>
		)
	},
	{ // 
		"title": "Minesight",
		"sources": [[0,12]],
		"content": (
			<p>Dwarves with this racial trait increase the range of their darkvision to 90 feet; however, they are automatically dazzled in bright light and take a -2 penalty on saving throws against effects with the light descriptor.</p>
		)
	},
	{ // 
		"title": "Surface Survivalist",
		"sources": [[0,12]],
		"content": (
			<p>Some dwarves have dwelt so long aboveground they have lost their ability to see at night. However, their adaptation to extreme environments allows them to treat wind conditions (when determining whether or not they are checked or blown away) and either hot or cold climates (choose one) as one step less severe.</p>
		)
	},
	{ // 60
		"title": "Dusksight",
		"sources": [[4,4]],
		"content": (
			<p>Characters who operate below canopies or fight in dimly lit caves and shadowy planes of existence learn to use their low-light vision to deduce a foe's position from the flickers of shadows around a target. When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total <Link to="/rule/concealment">concealment</Link> applies normally.</p>
		)
	},
	{ // 
		"title": "Deep Warrior",
		"sources": [[0,11],[2,11]],
		"content": (
			<p>Dwarves with this racial trait grew up facing the abominations that live deep beneath the surface. They receive a +2 dodge bonus to AC against monsters of the aberration type and a +2 racial bonus on combat maneuver checks made to grapple such creatures (or to continue a grapple).</p>
		)
	},
	{ // 
		"title": "Desert Delver",
		"sources": [[27,4]],
		"content": (
			<p>Desert dwarves have adapted to the extremes of cold and heat that can suddenly occur in both the harsh deserts and the mountain tunnels around their caravan routes. Dwarves with this racial trait gain cold and fire resistance 1 and treat the temperature as 20 degrees cooler or warmer when determining the effects of extreme heat or extreme cold environments.</p>
		)
	},
	{ // 
		"title": "Barrow Warden",
		"sources": [[8,38]],
		"content": (
			<p>Dwarves with this racial trait gain a +1 bonus on attack rolls and a +1 dodge bonus to their AC against undead.</p>
		)
	},
	{ // 
		"title": "Death's End",
		"sources": [[27,5]],
		"content": (
			<p>Some Pahmet come from long lines of guardians who train to defeat any undead that enter the tombs they protect. Dwarves with this racial trait gain a +2 bonus to AC against undead and a +2 bonus on saving throws against spells and spell-like abilities cast by undead.</p>
		)
	},
	{ // 65
		"title": "Deep Tradition",
		"sources": [[27,5]],
		"content": (
			<p>While some dwarves focus their early years on training against one specific foe of the dwarven kingdoms, others know that there are many enemies who would destroy dwarvenkind if given the opportunity. A dwarf with this racial trait gains a +1 bonus on melee attack rolls and a +1 bonus to AC against attacks of opportunity made by drow, duergar, creatures of the aberration type, or creatures of the giant or orc subtype.</p>
		)
	},
	{ // 
		"title": "Iron Within",
		"sources": [[27,4]],
		"content": (
			<p>Dwarves with this racial trait gain 1 ki point. If the dwarf gains ki points from a different source, this ki point is added to that pool. In addition to any other ways in which the dwarf can use ki, the dwarf can expend the ki point as a swift action to either gain a +2 dodge bonus to AC for 1 round or increase her base speed by 20 feet for 1 round. The bonus ki point does not allow the dwarf to make a ki strike unless she has another ability that allows her to do so, such as the ki pool from the monk class. Like other ki points, this ki point is replenished each morning after 8 hours of rest or meditation.</p>
		)
	},
	{ // 
		"title": "Lasting Grudge",
		"sources": [[21,210]],
		"content": (
			<p>Dwarves are notorious for their long-lasting grudges. Those who live up to this racial reputation gain a +1 racial bonus on attack rolls against any individual creature that has attacked them 1 day ago or longer.</p>
		)
	},
	{ // 
		"title": "Slag Child",
		"sources": [[21,210]],
		"content": (
			<p>Dwarves from dishonored families must append -slag, -slagsun, or -slagdam to their surnames to indicate their shameful status. These dwarves are commonly banished or ostracized; they are forced to eke out a living at the fringes of dwarven settlements or in bleak wilderness areas such as the Kodar Mountains. They gain a +2 racial bonus on Stealth and Survival checks.</p>
		)
	},
	{ // 
		"title": "Spell Smasher",
		"sources": [[21,210]],
		"content": (
			<p>Dwarven families who are threatened by hostile magic-users, especially those who face duergar foes, train intently to thwart spellcasting. They gain a +1 racial bonus on attack rolls against creatures in the process of casting spells or spell-like abilities.</p>
		)
	},
	{ // 70
		"title": "Saltbeard",
		"sources": [[0,12]],
		"content": (
			<p>Dwarves occasionally found iron cities along rugged seacoasts, and natives of such cities gain a +2 bonus on Profession (sailor) and Survival checks while at sea. They gain a +1 racial bonus on attack rolls and a +2 dodge bonus to AC against creatures with the aquatic or water subtype. Their greed racial trait applies only to treasure found in or under the water, but applies to all such treasure regardless of whether or not it contains metal or gemstones.</p>
		)
	},
	{ // 
		"title": "Sky Sentinel",
		"sources": [[0,12]],
		"content": (
			<p>As creatures with a deep affinity for the ground, dwarves are wary of attacks from above. Enemies on higher ground gain no attack roll bonus against dwarves with this racial trait, and they gain a +1 racial bonus on attack rolls, a +2 dodge bonus to AC, and a +2 bonus on Perception checks against flying creatures.</p>
		)
	},
	{ // 
		"title": "Stoic Negotiator",
		"sources": [[21,210]],
		"content": (
			<p>Some dwarves, especially those who hail from the town of Peddlegate in Druma, use their unwavering stubbornness to get what they want in negotiations and other business matters. They gain a +2 racial bonus on Bluff, Diplomacy, and Profession (merchant) checks.</p>
		)
	},
	{ // 
		"title": "Wyrmscourged",
		"sources": [[0,12]],
		"content": (
			<p>Dwarves with this racial trait gain a +1 bonus on attack rolls and a +2 dodge bonus to AC and on saving throws against the exceptional, supernatural, and spell-like abilities of dragons. They also gain a +2 racial bonus on Knowledge (arcana) checks to identify dragons and can make such checks untrained.</p>
		)
	},
	{ // 
		"title": "Craftsman",
		"sources": [[0,11],[2,11]],
		"content": (
			<p>Dwarves are known for their superior craftsmanship when it comes to metallurgy and stonework. Dwarves with this racial trait receive a +2 racial bonus on all Craft or Profession checks related to metal or stone.</p>
		)
	},
	{ // 75
		"title": "Lorekeeper",
		"sources": [[2,11]],
		"content": (
			<p>Dwarves keep extensive records about their history and the world around them. Dwarves with this racial trait receive a +2 racial bonus on Knowledge (history) checks that pertain to dwarves or their enemies. They can make such skill checks untrained.</p>
		)
	},
	{ // 
		"title": "Shadowplay",
		"sources": [[4,5]],
		"content": (
			<p>Some illusionists are experts in manipulating light and darkness. Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level.</p>
		)
	},
	{ // 
		"title": "Spiritual Support",
		"sources": [[21,210]],
		"content": (
			<p>Dwarves greatly value loyalty in faith, and their gods readily reward them for it. They gain a +1 racial bonus to their caster levels when casting conjuration (healing) spells upon allies.</p>
		)
	},
	{ // 
		"title": "Siege Survivor",
		"sources": [[21,210]],
		"content": (
			<p>Dwarves who make their homes in the Sky Citadels are trained to outlast sieges and serve as vigilant guards. They gain <Link to="/feat/Endurance">Endurance</Link> as a bonus feat. In addition, during rounds in which they have not moved, they gain a +1 racial bonus on attack rolls against foes who also did not move since their last turn.</p>
		)
	},
	{ // 
		"title": "Breath Weapon",
		"sources": [[27,4]],
		"content": (
			<p>Dwarves with this racial trait can call upon the spirit of a sacred dragon to channel a fraction of that dragon's power. Upon taking this trait, the dwarf must select cold, electricity, or fire as the breath weapon's damage type and either a 15-foot cone or a 20-foot line as the breath weapon's shape. Once these selections are made, they cannot be changed. Once per day, the dwarf can make a supernatural breath attack in the selected shape, dealing 1d4 points of damage of the chosen damage type, plus 1d4 points of damage of that type for every 2 levels above 1st the dwarf has (to a maximum of 5d4 at 9th level). Targets in the area can attempt a Reflex save (DC = 10 + half the dwarf's level + the dwarf's Constitution bonus) for half damage.</p>
		)
	},
	{ // 80
		"title": "Dimdweller",
		"sources": [[4,4]],
		"content": (
			<p>Characters with this trait are at home in gloomy conditions. Whenever these characters benefit from <Link to="/rule/concealment">concealment</Link> or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks.</p>
		)
	},
	{ // 
		"title": "Fey Magic",
		"sources": [[28,5]],
		"content": (
			<p>The character has a mystic connection to one terrain type, selected from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities.</p>
		)
	},
	{ // 
		"title": "Healthy",
		"sources": [[8,38]],
		"content": (
			<p>Dwarves with this racial trait gain a +2 racial bonus on saves against disease and poison, and they need one fewer consecutive successful save (minimum 1) to be cured of diseases and poisons.</p>
		)
	},
	{ // 
		"title": "Magic Resistant",
		"sources": [[2,11]],
		"content": (
			<p>Some of the older dwarven clans are particularly resistant to magic. Dwarves with this racial trait gain spell resistance equal to 5 + their character level. This resistance can be lowered for 1 round as a standard action. Dwarves with this racial trait take a -2 penalty on all <Link to="/rule/concentration">concentration</Link> checks made in relation to arcane spells.</p>
		)
	},
	{ // 
		"title": "Stubborn",
		"sources": [[2,11]],
		"content": (
			<p>Dwarves are renowned for their stubbornness. Dwarves with this racial trait receive a +2 racial bonus on Will saves to resist spells and spell-like abilities of the enchantment (charm) and enchantment (compulsion) schools. In addition, if they fail such a save, they receive another save 1 round later to prematurely end the effect (assuming it has a duration greater than 1 round). This second save is made at the same DC as the first. If the dwarf has a similar ability from another source (such as a rogue's slippery mind), he can only use one of these abilities per round, but he can try the other on the second round if the first reroll ability fails.</p>
		)
	},
	{ // 85
		"title": "Unstoppable",
		"sources": [[21,210]],
		"content": (
			<p>Some dwarves train from a young age to outlast orcs on the battlefield. They gain <Link to="/feat/Toughness">Toughness</Link> as a bonus feat and a +1 racial bonus on Fortitude saves.</p>
		)
	},
	{ // 
		"title": "Viscous Blood",
		"sources": [[8,38]],
		"content": (
			<p>Dwarves with this trait takes 1 less point of hit point damage, ability damage, or ability drain (minimum 1) from bleed and blood drain. They can attempt Heal checks to staunch their own bleeding as a swift action each round.</p>
		)
	},
	{ // 
		"title": "Wanderer",
		"sources": [[12,4]],
		"content": (
			<p>Freed from the confines of duty, certain fey-touched dwarves are stricken with wanderlust. These dwarves are often considered untrustworthy vagabonds by other dwarves but excel at the rigors of traveling. They gain <Link to="/feat/Endurance">Endurance</Link> as a bonus feat, and Climb and Swim are class skills for them.</p>
		)
	},
	{ // 
		"title": "Ancient Enmity",
		"sources": [[0,11],[2,11]],
		"content": (
			<p>Dwarves have long been in conflict with elves, especially the hated drow. Dwarves with this racial trait receive a +1 racial bonus on attack rolls against humanoid creatures of the elf subtype.</p>
		)
	},
	{ // 
		"title": "Fey Thoughts",
		"sources": [[28,5]],
		"content": (
			<p>The character sees the world more like a native of the First World. Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character.</p>
		)
	},
	{ // 90
		"title": "Giant Hunter",
		"sources": [[0,12]],
		"content": (
			<p>Dwarves with this racial trait gain a +1 bonus on attack rolls against humanoids with the giant subtype. Furthermore, they gain a +2 bonus on Survival checks to find and follow tracks made by humanoids with the giant subtype.</p>
		)
	},
	{ // 
		"title": "Giant Hunter (Kneecapper Training)",
		"sources": [[29,35]],
		"content": (
			<p>Kneecapper dwarves gain a +1 bonus on attack rolls against humanoids with the giant subtype. Furthermore, they gain a +2 bonus on Survival checks to find and follow tracks made by humanoids with the giant subtype.</p>
		)
	},
	{ // 
		"title": "Industrious Urbanite",
		"sources": [[30,8]],
		"content": (
			<p>Dwarves who have adapted to the expectations of their host cities make double the normal progress on Craft checks to create nonmagical items and gain a +4 bonus on Profession checks to earn money.</p>
		)
	},
	{ // 
		"title": "Xenophobic",
		"sources": [[0,12]],
		"content": (
			<p>Isolationist dwarves despise non-dwarven humanoids. They speak only Dwarven and do not gain any bonus languages from possessing a high Intelligence score. In addition, they learn only one language per 2 ranks of Linguistics they possess. However, their untrusting nature gives them a +1 bonus against mind-affecting effects, except for fear affects.</p>
		)
	},
	{ // 
		"title": "Mountaineer",
		"sources": [[0,12]],
		"content": (
			<p>Mountain dwarves are skilled at climbing and navigating narrow ledges. Dwarves with this racial trait are immune to <Link to="/rule/altitude_sickness">altitude sickness</Link> and do not lose their Dexterity bonus to AC when making Climb or Acrobatics checks to cross narrow or slippery surfaces.</p>
		)
	},
	{ // 95
		"title": "Relentless",
		"sources": [[0,12],[2,11]],
		"content": (
			<p>Dwarves are skilled at pushing their way through a battlefield, tossing aside lesser foes with ease. Dwarves with this racial trait receive a +2 bonus on combat maneuver checks made to bull rush or overrun an opponent. This bonus only applies while both the dwarf and his opponent are standing on the ground.</p>
		)
	},
	{ // 
		"title": "Tightfisted",
		"sources": [[8,38]],
		"content": (
			<p>Dwarves with this racial trait gain a +4 racial bonus to their CMD against disarm and steal combat maneuvers and a +2 racial bonus on Perception checks to notice Sleight of Hand attempts. If a dwarf with this trait notices a Sleight of Hand attempt to steal from him and the dwarf is not flat-footed or has <Link to="/feat/Combat_Reflexes">Combat Reflexes</Link>, the attempt triggers an attack of opportunity from that dwarf.</p>
		)
	},
	{ // 
		"title": "Treasure Sense",
		"sources": [[14,10]],
		"content": (
			<p>Some dwarves have learned to sense the presence of material wealth with dragon-like precision. This ability functions as scent, except it can detect only precious metals (copper, silver, and gold) and creatures primarily made of such materials.</p>
		)
	},
	{ // 
		"title": "Barrow Scholar",
		"sources": [[8,38]],
		"content": (
			<p>Dwarves with this racial trait gain a +2 racial bonus on Knowledge (religion) checks to identify undead and can attempt them untrained.</p>
		)
	},
	{ // 
		"title": "Behind the Veil",
		"sources": [[4,4]],
		"content": (
			<p>Characters with this trait slyly cover their body language and movements by acting in a shadowed or partitioned areas. These characters gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover.</p>
		)
	},
	{ // 100
		"title": "Conservative Diplomacy",
		"sources": [[31,14]],
		"content": (
			<p>A dwarf can embrace predictable traditions to avoid social missteps. A dwarf with this racial trait can rely upon conservative tactics when attempting a Diplomacy check; this choice must be made before the Diplomacy check is attempted. The dwarf treats any roll of less than 5 on such a Diplomacy check as though she had rolled a 5, but she treats any roll higher than 15 on such a check as though she rolled a 15.</p>
		)
	},
	{ // 
		"title": "Rock Stepper",
		"sources": [[0,12]],
		"content": (
			<p>Dwarves with this racial trait can skillfully negotiate rocky terrain. They can ignore difficult terrain created by rubble, broken ground, or steep stairs when they take a 5-foot step.</p>
		)
	},
	{ // 
		"title": "Rock Stepper (Kneecapper Training)",
		"sources": [[29,35]],
		"content": (
			<p>Kneecapper dwarves can skillfully negotiate rocky terrain. They can ignore difficult terrain created by rubble, broken ground, or steep stairs when they take a 5-foot step.</p>
		)
	},
	{ // 
		"title": "Sense Aberration",
		"sources": [[8,38]],
		"content": (
			<p>Dwarves with this trait gain a +2 racial bonus on Knowledge (dungeoneering) checks and on Perception checks to notice disguised or hidden aberrations.</p>
		)
	},
	{ // 
		"title": "Stonesinger",
		"sources": [[0,12],[2,11]],
		"content": (
			<p>Some dwarves' affinity for the earth grants them greater powers. Dwarves with this racial trait are treated as one level higher when casting spells with the earth descriptor or using granted powers of the Earth domain, the bloodline powers of the deep earth bloodline or earth elemental bloodline, and revelations of the oracle's stone mystery. This ability does not give them early access to level-based powers; it only affects the powers they could use without this ability.</p>
		)
	},
	{ // 105
		"title": "Shadowhunter",
		"sources": [[4,5]],
		"content": (
			<p>Those who understand the connection between shadows and the Negative Energy Plane know how to fight the spirits of darkness. Characters with this trait deal 50% weapon damage to incorporeal creatures when using nonmagical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day).</p>
		)
	},
	{ // 
		"title": "Blightborn",
		"sources": [[8,38]],
		"content": (
			<p>Elves from cursed lands and domains of evil develop resistance to foul influences. They gain a +2 racial bonus on saving throws against necromancy spells and spell-like abilities and spells and spell-like abilities with the curse descriptor, as well as on saving throws to remove temporary negative levels.</p>
		)
	},
	{ // 
		"title": "Dreamspeaker",
		"sources": [[0,22],[2,13]],
		"content": (
			<p>A few elves have the ability to tap into the power of sleep, dreams, and prescient reverie. Elves with this racial trait add +1 to the saving throw DCs of spells of the divination school and sleep effects they cast. In addition, elves with Charisma scores of 15 or higher may use <Link to="/spell/dream">dream</Link> once per day as a spell-like ability (caster level is equal to the elf's character level).</p>
		)
	},
	{ // 
		"title": "Elemental Resistance",
		"sources": [[0,22]],
		"content": (
			<p>Elves who dwell in the most extreme environments, from arctic wastelands to volcanic plains, develop natural resistance to the dangers of their homelands over the course of a few generations. Elves with this racial trait gain elemental resistance 5 to acid, cold, electricity, or fire. This choice is made at character creation, and once made it cannot be changed.</p>
		)
	},
	{ // 
		"title": "Perfect",
		"sources": [[8,38]],
		"content": (
			<p>The eerie beauty of some elves cannot be denied. Elves with this racial trait receive a +1 racial bonus on Bluff and Diplomacy checks against humanoids and a +2 racial bonus on saving throws against transmutation spells and spell-like effects.</p>
		)
	},
	{ // 110
		"title": "Slender",
		"sources": [[8,39]],
		"content": (
			<p>Elves often appear unnaturally thin by other races' standards. Elves with this trait gain a +2 racial bonus on Escape Artist checks, on combat maneuver checks to escape a grapple, and to CMD against grapples.</p>
		)
	},
	{ // 
		"title": "Lightbringer",
		"sources": [[0,22],[2,13]],
		"content": (
			<p>Many elves revere the sun, moon, and stars, but some are literally infused with the radiant power of the heavens. Elves with this racial trait are immune to light-based blindness and dazzle effects, and are treated as one level higher when determining the effects of any light-based spell or effect they cast (including spell-like and supernatural abilities). Elves with Intelligence scores of 10 or higher may use <Link to="/spell/light">light</Link> at will as a spell-like ability.</p>
		)
	},
	{ // 
		"title": "Memories Beyond Death",
		"sources": [[21,211]],
		"content": (
			<p>Some elves are born with sensitive souls that absorb insight from others and from the spirits of the deceased. These elves gain a +2 racial bonus on saving throws against fear effects. They also choose two Knowledge skills and always treat those skills as class skills. If they take a class that grants either or both of those skills as class skills, they gain a +1 racial bonus on the overlapping skill or skills.</p>
		)
	},
	{ // 
		"title": "Moonkissed",
		"sources": [[27,11]],
		"content": (
			<p>Some Spiresworn, especially those born within the Spire itself, are mystically warded from birth against dangers both mental and physical. Elves with this alternate racial trait gain a +1 racial bonus on saving throws.</p>
		)
	},
	{ // 
		"title": "Sense Thoughts",
		"sources": [[27,11]],
		"content": (
			<p>Ekujae are so closely attuned to each other and their environment that they seem able to read each other's minds and their foes' thoughts. Elves with this alternate racial trait can use <Link to="/spell/detect_thoughts">detect thoughts</Link> as a spell-like ability once per day, with a caster level equal to their character level.</p>
		)
	},
	{ // 115
		"title": "Creepy",
		"sources": [[8,38]],
		"content": (
			<p>For some elves, their long, slender limbs and large pupils evoke not attraction, but unease in other humanoids. Non-elf humanoids take a -1 penalty on saving throws against spells these elves cast that cause confusion or fear. In addition, elves with this trait gain a +2 racial bonus on Intimidate checks to demoralize.</p>
		)
	},
	{ // 
		"title": "Desert Runner",
		"sources": [[0,22],[2,12]],
		"content": (
			<p>Some elves thrive in the deepest deserts, forever roaming across burned and parched lands. Elves with this racial trait receive a +4 racial bonus on Constitution checks and Fortitude saves to avoid fatigue, exhaustion, or ill effects from running, forced marches, starvation, thirst, or hot or cold environments.</p>
		)
	},
	{ // 
		"title": "Envoy",
		"sources": [[0,22]],
		"content": (
			<p>Elves often have trouble relating to neighbors of other races, especially those with much shorter lifespans. As a result, some are trained in minor magics that are particularly useful when dealing with non-elves. Elves with this racial trait and an Intelligence score of 11 or higher gain the following spell-like abilities once per day: <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/detect_poison">detect poison</Link>, and <Link to="/spell/read_magic">read magic</Link>. The caster level for these effects is equal to the elf's level.</p>
		)
	},
	{ // 
		"title": "Eternal Grudge",
		"sources": [[0,22],[2,13]],
		"content": (
			<p>Some elves grow up in secluded, isolationist communities where generations-old slights and quarrels linger as eternal blood feuds. Elves with this racial trait receive a +1 bonus on attack rolls against humanoids of the dwarf and orc subtypes because of special training against these hated foes.</p>
		)
	},
	{ // 
		"title": "Fey-Sighted",
		"sources": [[12,4]],
		"content": (
			<p>To some elves with fey heritage, magic is a visible presence they have known all their lives. These elves have <Link to="/spell/detect_magic">detect magic</Link> as a constant spell-like ability, with a caster level equal to their character level.</p>
		)
	},
	{ // 120
		"title": "Frostmelding",
		"sources": [[27,12]],
		"content": (
			<p>A few rare Snowcaster elves are able to supernaturally blend with their surroundings to avoid the eyes of outsiders. Elves with this alternate racial trait can use <Link to="/spell/meld_into_stone">meld into stone</Link> as a spell-like ability once per day, with a caster level equal to their character level, except that they instead meld with snow and ice and the spell duration is 1 round per level.</p>
		)
	},
	{ // 
		"title": "Keeper of Secrets",
		"sources": [[8,38]],
		"content": (
			<p>Some elves seek to protect younger races from dangerous lore. The save DCs of enchantment spells they cast against humanoids increase by 1 and they receive a +2 racial bonus on Bluff and Linguistics checks to omit or cover up facts.</p>
		)
	},
	{ // 
		"title": "Light against Darkness",
		"sources": [[8,38]],
		"content": (
			<p>Elves have fought against the corruption of demons since time immemorial. Elves with this trait receive a +1 bonus on attack rolls against outsiders with the demon subtype.</p>
		)
	},
	{ // 
		"title": "Retreat Magic",
		"sources": [[21,211]],
		"content": (
			<p>Elves raised in the traditions of those who protected elven holdings before, during, and shortly after Earthfall specialize in magic that fools foes into misjudging elven numbers and locations. These elves gain a +1 racial bonus to their caster levels for the purpose of determining the range and duration of all conjuration and illusion spells that they cast.</p>
		)
	},
	{ // 
		"copies": 76,
		"add": (
			<p>An elf with shadowplay can use <Link to="/spell/disguise_self">disguise self</Link> once per day as a spell-like ability. He can assume the form of any humanoid creature using this spell-like ability. When he reaches character 9th level in any combination of classes, he gains <Link to="/spell/shadow_walk">shadow walk</Link> (self only) as a spell-like ability usable once per day, and at 13th level, he gains <Link to="/spell/plane_shift">plane shift</Link> (self only, to the Shadow Plane or the Material Plane only) usable once per day. An elf's caster level for these abilities is equal to his character level.</p>
		)
	},
	{ // 125
		"title": "Silent Hunter",
		"sources": [[0,22],[2,13]],
		"content": (
			<p>Elves are renowned for their subtlety and skill. Elves with this racial trait reduce the penalty for using Stealth while moving by 5 and can make Stealth checks while running at a -20 penalty (this number includes the penalty reduction from this racial trait).</p>
		)
	},
	{ // 
		"title": "Vigilance",
		"sources": [[12,12]],
		"content": (
			<p>Some elves train to fight against demons and evil fey with a zeal that leaves them little time to hone their magic traditions. Elves with this racial trait gain a +2 dodge bonus to AC against attacks by chaotic creatures.</p>
		)
	},
	{ // 
		"title": "Woodcraft",
		"sources": [[0,23],[2,13]],
		"content": (
			<p>Elves know the deep secrets of the wild like no others, especially secrets of the forests. Elves with this racial trait gain a +1 racial bonus on Knowledge (nature) and Survival checks. In forest terrain, these bonuses improve to +2.</p>
		)
	},
	{ // 
		"title": "Ageless Patience",
		"sources": [[21,210]],
		"content": (
			<p>Some families of elves have been strongly influenced by rigidly honorable non-elven cultures, such as Forlorn elves raised in nations such as Taldor and the elves of Jinin influenced by Tian-Min travelers. This attitude, combined with elven longevity, produces elves of extraordinary patience, who can produce better results when taking their time than they could under time constraints. These elves gain a +2 racial bonus when taking 20 on skill checks.</p>
		)
	},
	{ // 
		"title": "Natural Swimmer",
		"sources": [[32,79]],
		"content": (
			<p>Mordant Spire elves learn to dive and swim at an early age. Elves with this trait gain a +2 racial bonus on Swim checks and can always take 10 on a Swim check, even if distracted or endangered when swimming.</p>
		)
	},
	{ // 130
		"title": "Sovyrian-Born",
		"sources": [[21,211]],
		"content": (
			<p>Elves who come from the ancient elven civilization of Sovyrian are steeped in lore older than most civilizations. They gain a +2 racial bonus on Knowledge (history), Knowledge (local), and Spellcraft checks.</p>
		)
	},
	{ // 
		"title": "Devoted Companion",
		"sources": [[27,11]],
		"content": (
			<p>While some Forlorn quickly become inured to the loss and tragedy all too common in their lives, some refuse to let go, fighting passionately when companions are endangered. Elves with this alternate racial trait gain a +1 racial bonus on attack rolls and caster level checks while adjacent to an ally who has been reduced to fewer than half her maximum hit points.</p>
		)
	},
	{ // 
		"title": "Disinterested Observer",
		"sources": [[21,210]],
		"content": (
			<p>Elves who frequently interact with shorter-lived species, especially members who hail from Varisia, often come to rely on their ability to wait out such impatient races. These elves gain a +1 racial bonus on attack rolls and skill checks made as part of readied actions in combat.</p>
		)
	},
	{ // 
		"title": "Human-Raised",
		"sources": [[21,211]],
		"content": (
			<p>Forlorn - elves raised outside of elven communities - are accustomed to other races' brevity of life. Although they lose the opportunity to train in traditional elven arts, these elves pick up a bit of their adoptive parents' skills. They gain <Link to="/feat/Skill_Focus">Skill Focus</Link> as a bonus feat.</p>
		)
	},
	{ // 
		"title": "Overwhelming Magic",
		"sources": [[21,211]],
		"content": (
			<p>Some elves obsess over the fundamentals of magic, training for decades to add layers of potent spellwork before they ever begin practicing true spells. This builds a foundation that makes their magic increasingly difficult to resist. These elves gain <Link to="/feat/Spell_Focus">Spell Focus</Link> as a bonus feat.</p>
		)
	},
	{ // 135
		"title": "Spirit of the Waters",
		"sources": [[2,13]],
		"content": (
			<p>Some elves have adapted to life in tune with the sea or along the reedy depths of wild rivers and lakes. They gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language. They are proficient with longspear, trident, and net.</p>
		)
	},
	{ // 
		"title": "Blended View",
		"sources": [[4,5]],
		"content": (
			<p>Prerequisite: low-light vision. Half-drow whose non-drow parent had low-light vision might be blessed with a legacy of versatile senses. Characters with this trait keep their low-light vision but also gain darkvision to a distance of 60 feet.</p>
		)
	},
	{ // 
		"title": "Draconic Consular",
		"sources": [[14,10]],
		"content": (
			<p>Elves serving in the company of dragons are trained to assist and represent their draconic allies. Elves with this racial trait gain a +1 bonus on Diplomacy and Knowledge (arcana) checks.</p>
		)
	},
	{ // 
		"title": "Fey Wisdom",
		"sources": [[31,14]],
		"content": (
			<p>Elves tend to be too aloof and capricious to make reliable diplomats, but some elves specially train to serve as ambassadors to fey courts. Elves with this racial trait gain a +1 racial bonus on Diplomacy and Knowledge (nature) checks, and Knowledge (nature) is a class skill for them.</p>
		)
	},
	{ // 
		"title": "Illustrious Urbanite",
		"sources": [[30,8]],
		"content": (
			<p>City elves have a remarkable ability to combine magic harmoniously with their surroundings. They gain <Link to="/feat/Spell_Focus">Spell Focus</Link> with conjuration, illusion, or transmutation spells as a bonus feat. When casting spells of this school, the elves can choose to have the spell leave undamaged any building or structure that would normally be affected.</p>
		)
	},
	{ // 140
		"title": "Urbanite",
		"sources": [[0,22]],
		"content": (
			<p>Elves who live in cities for more than a century can grow to know the ebb and flow of social situations just as their forest-dwelling cousins know the rules of the wild. Elves with this racial trait gain a +2 racial bonus on Diplomacy checks made to gather information and Sense Motive checks made to get a hunch about a social situation.</p>
		)
	},
	{ // 
		"title": "Fleet-Footed",
		"sources": [[0,22]],
		"content": (
			<p>While all elves are naturally lithe and agile, some also are naturally speedy and have a strong desire to rush into situations rather than worrying about looking ahead. Elves with this racial trait receive <Link to="/feat/Run">Run</Link> as a bonus feat and a +2 racial bonus on initiative checks.</p>
		)
	},
	{ // 
		"title": "Elven Arrogance",
		"sources": [[21,211]],
		"content": (
			<p>Some elves are so convinced of elven superiority, or else otherwise so xenophobic, that they have difficulty seeing the point in communicating with \"lesser\" races. Their racial bonus on saving throws against enchantments increases by 1 (to +3) against such effects from non-elf humanoids, but they begin play speaking only Elven, and if they have high Intelligence scores, they can select bonus languages from only Azlanti, Celestial, Draconic, and Sylvan (or Senzar instead of Sylvan if they hail from Tian Xia).</p>
		)
	},
	{ // 
		"title": "Tongue of the Sea",
		"sources": [[32,80]],
		"content": (
			<p>Mordant Spire elves speak the ancient languages of their ancestors, enemies, and other creatures native to the Steaming Sea. Elves with this racial trait begin play speaking Azlanti and Elven. Elves with high Intelligence scores can choose from the following languages: Aboleth, Abyssal, Aklo, Aquan, Common, and Undercommon.</p>
		)
	},
	{ // 
		"title": "Darkvision",
		"sources": [[0,22]],
		"content": (
			<p>Though uncommon, some groups of elves are born with darkvision, rather than low-light vision. In many cases this is taken as a sign of a drow in the elf's ancestry, and can lead to persecution within the elf's home community. Elves with this racial trait gain darkvision with a range of 60 feet, but also gain sensitivity to light and are dazzled in areas of bright light or within the radius of a daylight spell.</p>
		)
	},
	{ // 145
		"title": "Aquatic Mastery",
		"sources": [[27,10]],
		"content": (
			<p>Some aquatic elves are able to wield the power of the sea with great prowess. Elves with this racial trait increase the DC of any spell with the water descriptor they cast by 1.</p>
		)
	},
	{ // 
		"title": "Arcane Focus",
		"sources": [[0,22]],
		"content": (
			<p>Some elven families have such long traditions of producing wizards (and other arcane spellcasters) that they raise their children with the assumption each is destined to be a powerful magic-user, with little need for mundane concerns such as skill with weapons. Elves with this racial trait gain a +2 racial bonus on <Link to="/rule/concentration">concentration</Link> checks made to cast arcane spells defensively.</p>
		)
	},
	{ // 
		"title": "Crossbow Training",
		"sources": [[32,79]],
		"content": (
			<p>Mordant Spire elves train with weapons that can be used underwater. An elf with this trait can reload a light crossbow as a free action and a heavy crossbow as a move action, provided that she is proficient with the weapon. If she selects the <Link to="/feat/Rapid_Reload">Rapid Reload</Link> feat for a heavy crossbow, she can reload the weapon as a free action.</p>
		)
	},
	{ // 
		"title": "Jininese Weapon Mastery",
		"sources": [[27,11]],
		"content": (
			<p>The elves of Jinin are proficient with many of the weapons of the Dragon Empires. Elves with this racial trait are proficient with fighting fans and tonfa, and they treat katanas, kusarigamas, and wakizashis as martial weapons.</p>
		)
	},
	{ // 
		"title": "Long-Limbed",
		"sources": [[8,38]],
		"content": (
			<p>Elves with this racial trait have a base move speed of 35 feet.</p>
		)
	},
	{ // 150
		"title": "Orc Atavism",
		"sources": [[21,212]],
		"content": (
			<p>Some half-orcs have much stronger orc blood than human blood. Such half-orcs count as only half-orcs and orcs (not also humans) for any effect related to race. They gain a +2 bonus to Strength and a -2 penalty to one mental ability score of their choice. Finally, they gain the <Link to="/umr/ferocity">ferocity</Link> universal monster ability.</p>
		)
	},
	{ // 
		"title": "Forest Walker",
		"sources": [[0,52]],
		"content": (
			<p>More at home in the forests and jungles of the world, these half-orcs are well adapted to their surroundings. Half-orcs with this trait have low-light vision and gain a +2 racial bonus on Climb checks.</p>
		)
	},
	{ // 
		"title": "Sea Raider",
		"sources": [[21,212]],
		"content": (
			<p>In the Lands of the Linnorm Kings and the Shackles, half-orcs frequently take up sailing as pirates, raiders, and fishers, where they are known as tenacious fighters. They gain a +2 racial bonus on Profession (sailor) checks and Craft checks to repair ships, and a +1 racial bonus on damage rolls against foes and objects in or on top of the water.</p>
		)
	},
	{ // 
		"title": "Skilled",
		"sources": [[0,52]],
		"content": (
			<p>Second- and third-generation half-orcs often favor their human heritage more than their orc heritage. Half-orcs with this trait gain 1 additional skill rank per level.</p>
		)
	},
	{ // 
		"title": "Smog Sight",
		"sources": [[8,40]],
		"content": (
			<p>Half-orcs with this racial trait can see double the normal range in dense fog and smoke (including magic effects like obscuring mist) and ignore concealment from smoke or fog for targets within 5 feet.</p>
		)
	},
	{ // 155
		"title": "Vigilant Gaze",
		"sources": [[31,15]],
		"content": (
			<p>Half-orcs trained as bodyguards in foreign courts develop a keen eye for trouble, but their night vision, unnecessary in well-lit courts, dwindles. Half-orcs with this racial trait gain low-light vision and have a +1 racial bonus on Perception and Sense Motive checks.</p>
		)
	},
	{ // 
		"title": "Dragon Sight",
		"sources": [[14,11]],
		"content": (
			<p>Half-orcs with this trait gain some of the keen senses of dragonkind. They have darkvision with a range of 120 feet.</p>
		)
	},
	{ // 
		"title": "War-Leader",
		"sources": [[21,212]],
		"content": (
			<p>Some orcs seek out human mates in hopes of birthing intelligent leaders for their interminable war efforts. When nature and luck smile upon this endeavor and a half-orc child shows cunning, that child is raised with many harrowing opportunities to learn how to best lead on the battlefield. Such half-orcs gain a +2 bonus on Diplomacy and Profession (soldier) checks as well as to their Leadership score (for the purpose of the <Link to="/feat/Leadership">Leadership</Link> feat). Armies they control in mass combat gain a +1 bonus to Morale.</p>
		)
	},
	{ // 
		"copies": 99,
		"add": (
			<p>Half-orcs who take this trait also gain this: Attacks against them in dim light have a 50% miss chance instead of the normal 20% miss chance. This ability does not grant total concealment; it just increases the miss chance.</p>
		)
	},
	{ // 
		"title": "Burning Assurance",
		"sources": [[27,25],[33,12]],
		"content": (
			<p>Sandkin lack the chip on their shoulder that many half-orcs acquire as a result of prejudice, and their self-confidence puts others at ease. Desert half-orcs with this racial trait gain a +2 racial bonus on Diplomacy checks.</p>
		)
	},
	{ // 160
		"title": "Cavewight",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Some half-orcs live far below the surface, seeking freedom in winding cave complexes. Half-orcs with this racial trait gain a +1 racial bonus on Knowledge (dungeoneering) and Survival checks made underground.</p>
		)
	},
	{ // 
		"title": "Evader",
		"sources": [[27,24],[33,11]],
		"content": (
			<p>Having lived all their lives at the mercy of savage underworld creatures, some gloomkin develop an uncanny knack for finding their way around silently in the dark. While underground, Darklands half-orcs with this racial trait gain a +5 racial bonus on Survival checks to avoid becoming lost and a +1 racial bonus on Stealth checks.</p>
		)
	},
	{ // 
		"title": "Rock Climber",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Half-orcs from mountainous regions are excellent climbers, and sometimes ambush prey by leaping down from above. Half-orcs with this racial trait gain a +1 racial bonus on Acrobatics and Climb checks.</p>
		)
	},
	{ // 
		"title": "Scavenger",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Some half-orcs eke out a leaving picking over the garbage heaps of society, and must learn to separate rare finds from the inevitable dross. Half-orcs with this racial trait receive a +2 racial bonus on Appraise checks and on Perception checks to find hidden objects (including traps and secret doors), determine whether food is spoiled, or identify a potion by taste.</p>
		)
	},
	{ // 
		"copies": 76,
		"add": (
			<p>In addition, half-orcs get a +2 racial bonus on saving throws against illusion spells or effects.</p>
		)
	},
	{ // 165
		"title": "Shaman's Apprentice",
		"sources": [[0,52]],
		"content": (
			<p>Only the most stalwart survive the years of harsh treatment that an apprenticeship to an orc shaman entails. Half-orcs with this trait gain <Link to="/feat/Endurance">Endurance</Link> as a bonus feat.</p>
		)
	},
	{ // 
		"title": "Unflinching Valor",
		"sources": [[27,26],[33,13]],
		"content": (
			<p>Many fearsome arctic predators consider young frostkin easy prey, but some frostkin manage to overcome their fear and fight off these beasts while they wait for help to arrive. Winter half-orcs with this racial trait gain a +2 racial bonus on saving throws against fear effects, and a +1 racial bonus to CMD to avoid being grappled.</p>
		)
	},
	{ // 
		"title": "Divided Attention",
		"sources": [[21,212]],
		"content": (
			<p>Half-orcs must learn to divide their attention among multiple threats to stay alive, since both humans and orcs often attempt to put them in their place. Half-orcs gain a +1 dodge bonus to AC against foes who flank them.</p>
		)
	},
	{ // 
		"title": "Hatred",
		"sources": [[23,25]],
		"content": (
			<p>Half-orcs raised among orcs must prove themselves against their people's enemies. Half-orcs with this racial trait gain a +1 racial bonus on attack rolls against humanoids of the dwarf, elf, and human subtypes because of their special training against these hated foes.</p>
		)
	},
	{ // 
		"title": "Monstrous Sympathy",
		"sources": [[8,40]],
		"content": (
			<p>Some half-orcs know how monsters think. They receive a +2 racial bonus on Bluff, Diplomacy, and Sense Motive checks against evil creatures.</p>
		)
	},
	{ // 170
		"title": "Pain Tolerance",
		"sources": [[8,40]],
		"content": (
			<p>Some half-orcs have an increased tolerance for pain. They gain DR 1/- against nonlethal damage and receive a +2 racial bonus on saving throws against spells and spell-like effects with the pain descriptor.</p>
		)
	},
	{ // 
		"title": "Plagueborn",
		"sources": [[2,19]],
		"content": (
			<p>Half-orcs are sometimes forced to live on the rancid and unsanitary margins of society, becoming inured to all manner of sickness. Half-orcs with this racial trait gain a +2 racial bonus on saving throws against disease, ingested poisons, and becoming nauseated or sickened.</p>
		)
	},
	{ // 
		"title": "Stoic",
		"sources": [[8,40]],
		"content": (
			<p>Some half-orcs learn to suppress their strong emotions. They don't usually gain morale bonuses, but instead gain a +2 racial bonus on saving throws against emotion and fear effects, and the DC to intimidate them increases by 2. They can choose to gain morale bonuses when they would normally be able to do so, but if they do, they lose the benefits from this racial trait for 24 hours.</p>
		)
	},
	{ // 
		"title": "Overlooked Mastermind",
		"sources": [[21,212]],
		"content": (
			<p>Some half-orcs use half-orcs' brutish stereotypes to their advantage, causing others to underestimate their intelligence and scheming. Such half-orcs gain a +2 racial bonus on Bluff, Diplomacy, and Sense Motive checks. This bonus increases to +4 against other humanoids. They also receive a +2 racial bonus on Bluff checks to feign ignorance and Sense Motive checks to intercept secret messages, and this stacks with the above bonus.</p>
		)
	},
	{ // 
		"title": "Shaman Enhancement",
		"sources": [[12,5]],
		"content": (
			<p>Certain half-orcs know rituals to enhance the strength and brutality of their allies. These half-orcs gain a +2 racial bonus on Spellcraft checks. In addition, when such a half-orc acquires an animal companion, bonded mount, cohort, familiar, or spirit animal, that creature gains a +2 bonus to Strength, Dexterity, or Constitution, as selected by the half-orc.</p>
		)
	},
	{ // 175
		"title": "Acute Darkvision",
		"sources": [[0,52]],
		"content": (
			<p>Some half-orcs have exceptionally sharp darkvision, gaining darkvision 90 feet.</p>
		)
	},
	{ // 
		"title": "Beastmaster",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Some half-orcs have a spiritual kinship with fantastical beasts, capturing them for sport or living and hunting with them. A half-orc with this trait treats whips and nets as martial weapons and gains a +2 racial bonus on Handle Animal checks.</p>
		)
	},
	{ // 
		"title": "Bestial",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>The orc blood of some half-orcs manifests in the form of particularly prominent orc features, exacerbating their bestial appearances but improving their already keen senses. They gain a +2 racial bonus on Perception checks.</p>
		)
	},
	{ // 
		"title": "Dragon Slayer",
		"sources": [[14,11]],
		"content": (
			<p>Some half-orcs train to defend their kind against dragons that would take advantage of or enslave them. Half-orcs with this trait gain a +2 dodge bonus to their AC against dragons and a +1 racial bonus on attack rolls against dragons.</p>
		)
	},
	{ // 
		"title": "Gatecrasher",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Many half-orcs revel in acts of wanton destruction. Half-orcs with this racial trait gain a +2 racial bonus on Strength checks to break objects and on sunder combat maneuver checks.</p>
		)
	},
	{ // 180
		"title": "Innured",
		"sources": [[8,40]],
		"content": (
			<p>Half-orcs raised by orcs often become desensitized to the violence around them. Half-orcs with this trait gain a +4 bonus on Will saving throws to avoid <Link to="/rule/sanity">sanity damage</Link> caused by encountering monsters, extreme violence, or death.</p>
		)
	},
	{ // 
		"title": "Sacred Tattoo",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Many half-orcs decorate themselves with tattoos, piercings, and ritual scarification, which they consider sacred markings. Half-orcs with this racial trait gain a +1 luck bonus on all saving throws.</p>
		)
	},
	{ // 
		"title": "Tenacious",
		"sources": [[30,8]],
		"content": (
			<p>City-dwelling half-orcs must often be tenacious to get by. Once per day if a half-orc fails a Fortitude save, Will save, or Constitution check, he can reroll the save or check. The half-orc must take the second result, even if it is worse.</p>
		)
	},
	{ // 
		"title": "Toothy",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Some half-orcs' tusks are large and sharp, granting a bite attack. This is a primary natural attack that deals 1d4 points of piercing damage.</p>
		)
	},
	{ // 
		"title": "Warded Skin",
		"sources": [[27,25],[33,12]],
		"content": (
			<p>Many rainkin are protected from the power of Angazhan's worshipers by elaborate tattoos that redirect demonic magic. Jungle half-orcs with this racial trait gain spell resistance against divine magic equal to 6 + their level. Additionally, divine spells cast on them by demon worshipers have a 10% chance of failure.</p>
		)
	},
	{ // 185
		"title": "Cliffside Charger",
		"sources": [[27,26],[33,13]],
		"content": (
			<p>Cragkin are accustomed to traveling in the steep terrain of their mountain homes. When in mountain terrain, mountain half-orcs with this racial trait can move through natural difficult terrain at their normal speed; magically altered terrain affects them normally. In addition, cragkin gain a +10-foot racial bonus to their speed while charging.</p>
		)
	},
	{ // 
		"title": "Human-Raised",
		"sources": [[21,212]],
		"content": (
			<p>Some half-orcs raised as humans lack their cousins' ferocity and training in orc weapons, but pick up a bit of their human parents' skills. They gain the human's skilled racial trait.</p>
		)
	},
	{ // 
		"title": "Projection",
		"sources": [[8,40]],
		"content": (
			<p>Some half-orcs channel negative emotions through magic. The DCs of any saving throws against spells with the fear or pain descriptor they cast increase by 1.</p>
		)
	},
	{ // 
		"title": "Chain Fighter",
		"sources": [[0,52],[2,19]],
		"content": (
			<p>Some half-orcs have escaped from slavery and reforged the chains of their imprisonment into deadly weapons. Half-orcs with this racial trait are proficient with flails and heavy flails, and treat dire flails and spiked chains as martial weapons.</p>
		)
	},
	{ // 
		"title": "City-Raised",
		"sources": [[0,52]],
		"content": (
			<p>Half-orcs with this trait know little of their orc ancestry and were raised among humans and other half-orcs in a large city. City-raised half-orcs are proficient with whips and longswords, and receive a +2 racial bonus on Knowledge (local) checks.</p>
		)
	},
	{ // 190
		"copies": 60,
		"add": (
			<p>Half-orcs with this trait also gain low-light vision.</p>
		)
	},
	{ // 
		"title": "Pariah",
		"sources": [[21,212]],
		"content": (
			<p>While many cultures discriminate against half-orcs, in some, particularly dwarven communities, half-orcs are complete social pariahs. It goes without saying that such a culture does not provide outlets for a half-orc to practice with traditional orc weapons. The few half-orcs who survive to adulthood in such harsh social climates are deeply scarred by their abusive treatment and find it hard to express and understand normal emotions. Such half-orcs gain a +2 racial bonus on saving throws against emotion and fear effects and a -2 penalty on Bluff, Diplomacy, and Sense Motive checks.</p>
		)
	},
	{ // 
		"title": "Blessed",
		"sources": [[8,40]],
		"content": (
			<p>Halflings with this trait receive a +2 racial bonus on saving throws against curse effects and hexes. This bonus stacks with the bonus granted by halfling luck.</p>
		)
	},
	{ // 
		"title": "Evasive Nomad",
		"sources": [[27,28]],
		"content": (
			<p>Song-o halflings rarely grow up in one place, as they are quick to move to a new home whenever they are discovered. Halflings with this racial trait gain a +2 racial bonus on Reflex saves, but they take a -2 penalty on saving throws against fear effects.</p>
		)
	},
	{ // 
		"title": "Irrepressible",
		"sources": [[8,40]],
		"content": (
			<p>Halflings with this trait receive a +2 racial bonus on saving throws against dominate and possession effects. This bonus stacks with the bonus granted by halfling luck.</p>
		)
	},
	{ // 195
		"title": "Small Quarter Ally",
		"sources": [[27,28]],
		"content": (
			<p>Segadan halflings most often live in the Small Quarter alongside other people of similar stature, such as gnomes. A halfling with this racial trait grants herself and all allies of the same size category within 60 feet a +1 luck bonus on saving throws against fear effects.</p>
		)
	},
	{ // 
		"title": "Craven",
		"sources": [[0,62],[2,21]],
		"content": (
			<p>While most halflings are fearless, some are skittish, making them particularly alert. Halflings with this racial trait gain a +1 bonus on initiative checks and a +1 bonus on attack rolls when flanking. They take a -2 penalty on saves against fear effects and gain no benefit from morale bonuses on such saves. When affected by a fear effect, their base speed increases by 10 feet and they gain a +1 dodge bonus to Armor Class.</p>
		)
	},
	{ // 
		"title": "Wanderlust",
		"sources": [[0,62],[2,21]],
		"content": (
			<p>Halflings love travel and maps. Halflings with this racial trait receive a +2 bonus on Knowledge (geography) and Survival checks. When casting spells or using abilities that provide or enhance movement, halflings treat their caster level as +1 higher than normal.</p>
		)
	},
	{ // 
		"title": "Fey-Quickened",
		"sources": [[12,5]],
		"content": (
			<p>Some fey-blooded halflings are faster than their kin, yet retain a sharp eye for danger. These halflings gain <Link to="/feat/Run">Run</Link> as a bonus feat and a +2 racial bonus on initiative checks.</p>
		)
	},
	{ // 
		"title": "Practicality",
		"sources": [[0,62],[2,21]],
		"content": (
			<p>Halflings value hard work and common sense. Halflings with this racial trait gain a +2 bonus on any one Craft or Profession skill, as well as on Sense Motive checks and saves against illusions.</p>
		)
	},
	{ // 200
		"title": "Joyous Companion",
		"sources": [[14,11]],
		"content": (
			<p>Halflings enjoy the companionship of copper dragons and other lighthearted representatives of dragonkind and learn to share the joyousness of that bond with others. When halflings with this trait cast spells or use spell-like abilities of the abjuration school or with the emotion descriptor, they can confer a +1 morale bonus on saves versus fear on all adjacent allies for a number of rounds equal to the spell's level.</p>
		)
	},
	{ // 
		"title": "Skulker",
		"sources": [[21,213]],
		"content": (
			<p>Oppressed halflings train from a young age to take advantage of times when their oppressors ignore them. Such halflings gain a +1 racial bonus on attacks against foes who are denied their Dexterity bonus to AC.</p>
		)
	},
	{ // 
		"title": "Underfoot Dodger",
		"sources": [[30,9]],
		"content": (
			<p>City-dwelling halflings do not treat crowd squares as difficult terrain and they gain a +5 bonus on Acrobatics checks to move through the spaces of larger foes.</p>
		)
	},
	{ // 
		"title": "Adaptable Luck",
		"sources": [[0,62]],
		"content": (
			<p>Some halflings have greater control over their innate luck. This ability gives them more options for how they can apply their good fortune from day to day, but also narrows its scope. Three times per day, a halfling can gain a +2 luck bonus on an ability check, attack roll, saving throw, or skill check. If halflings choose to use the ability before they make the roll or check, they gain the full +2 bonus; if they choose to do so afterward, they only gain a +1 bonus. Using adaptive luck in this way is not an action.</p>
		)
	},
	{ // 
		"title": "Halfling Jinx",
		"sources": [[34,27]],
		"content": (<>
			<p>You lose the halfling luck racial trait (and its +1 racial bonus on saving throws) and instead gain the ability to curse another creature with bad luck at will as a standard action. This curse has a range of 30 feet, and you must be able to see the target and have line of effect to it. The target gets a Will saving throw to resist this jinx (DC = 10 + 1/2 your level + your Charisma modifier). If your target makes this saving throw, it is immune to your jinx ability for 24 hours. A jinxed creature takes a -1 penalty on all saving throws. This jinx lasts for 24 hours or until you attempt to use your jinx again. A jinx is a supernatural ability, is not mind-affecting, does not allow spell resistance, and can affect any kind of creature not immune to luck effects. A halfling can select the <Link to="/feat/Ability_Focus">Ability Focus</Link> monster feat to increase the DC of his jinx.</p>
			<p>Many feats require the Halfling Jinx trait. A halfling jinx wizard can select these feats using his class bonus feats as long as he meets all the prerequisites. Many of these feats add to the effect of a halfling's jinx; unless otherwise stated, the feat's effect is in addition to the basic jinx's penalty on saving throws. For example, a halfling with the <Link to="/feat/Alchemical_Obstruction">Alchemical Obstruction</Link> feat creates jinxes that penalize saving throws and interfere with alchemical items.</p>
			<ul>
				<li><Link to="/feat/Arcane_Jinxer">Arcane Jinxer</Link></li>
				<li><Link to="/feat/Area_Jinx">Area Jinx</Link></li>
				<li><Link to="/feat/Bolster_Jinx">Bolster Jinx</Link></li>
				<li><Link to="/feat/Distant_Jinx">Distant Jinx</Link></li>
				<li><Link to="/feat/Fascination_Jinx">Fascination Jinx</Link></li>
				<li><Link to="/feat/Jinx_Alchemy">Jinx Alchemy</Link></li>
				<li><Link to="/feat/Jinxed_Spell">Jinxed Spell</Link></li>
				<li><Link to="/feat/Malicious_Eye">Malicious Eye</Link></li>
				<li><Link to="/feat/Sluggish_Jinx">Sluggish Jinx</Link></li>
				<li><Link to="/feat/Versatile_Jinx">Versatile Jinx</Link></li>
				<li><Link to="/feat/Worst_Case_Jinx">Worst Case Jinx</Link></li>
			</ul>
		</>)
	},
	{ // 205
		"title": "Luckbringer",
		"sources": [[14,11]],
		"content": (
			<p>Halflings with this trait learn to share their luck with others much in the way a gold dragon can imbue objects with good fortune. Once per day as a standard action, a halfling with this trait can confer good luck on a single nonmagical token (such as a button or a ring). Any creature carrying this token gains a +1 luck bonus on Will saves. This effect lasts for 1 hour.</p>
		)
	},
	{ // 
		"title": "Underfoot",
		"sources": [[0,62],[30,9]],
		"content": (
			<p>Halflings must train hard to effectively fight bigger opponents. Halflings with this racial trait gain a +1 dodge bonus to AC against foes larger than themselves and a +1 bonus on Reflex saving throws to avoid trample attacks.</p>
		)
	},
	{ // 
		"title": "Unlucky Halfling",
		"sources": [[21,213]],
		"content": (
			<p>These halflings take a -1 penalty on saving throws but also gain a +1 racial bonus to the caster level and save DC of all curse spells and spell-like abilities. In addition, such halflings can use <Link to="/spell/ill_omen">ill omen</Link> as a spell-like ability once per day.</p>
		)
	},
	{ // 
		"title": "Unfettered",
		"sources": [[21,213]],
		"content": (
			<p>Former slips liberated from slavery train to ensure they will never be slaves again. They gain a +4 racial bonus on Escape Artist checks and a +2 racial bonus on saving throws against effects that cause the entangled condition, to CMD against grapples, and on combat maneuver checks to escape a grapple.</p>
		)
	},
	{ // 
		"title": "Caretaker",
		"sources": [[21,212]],
		"content": (
			<p>Humans often entrust halfling families with the care of children and animals, a task that has helped them develop keen insight. Such halflings gain a +2 racial bonus on Sense Motive checks. In addition, when they acquire an animal companion, bonded mount, cohort, or familiar, that creature gains a +2 bonus to one ability score of the character's choice.</p>
		)
	},
	{ // 210
		"title": "Acquisitive",
		"sources": [[8,40]],
		"content": (
			<p>Halflings with this trait receive a +2 racial bonus on Appraise checks. This bonus increases to +4 when used to determine the most valuable item visible in a treasure hoard.</p>
		)
	},
	{ // 
		"title": "Attentive",
		"sources": [[8,40]],
		"content": (
			<p>Halflings with this trait receive a +2 racial bonus on Sense Motive checks. This bonus increases to +4 to notice when someone is enchanted or possessed.</p>
		)
	},
	{ // 
		"title": "Danger Detection",
		"sources": [[27,28]],
		"content": (
			<p>Song-o halflings have learned to hone in on any indication of danger. Halflings with this racial trait gain a +4 racial bonus on Perception checks to notice a creature using Stealth, as well as Perception checks to notice a weapon being drawn or a hidden trap (or similar signs of danger, subject to the GM's discretion).</p>
		)
	},
	{ // 
		"title": "Low Blow",
		"sources": [[0,62],[2,21]],
		"content": (
			<p>Some halflings train extensively in the art of attacking larger creatures. Halflings with this racial trait gain a +1 bonus on critical confirmation rolls against opponents larger than themselves.</p>
		)
	},
	{ // 
		"title": "Polyglot",
		"sources": [[0,62]],
		"content": (
			<p>Some halflings, especially those who spend a lot of time traveling, develop a talent for learning new <Link to="/misc/languages">languages</Link>. These halflings gain a +2 racial bonus on Linguistics checks, and it is always a class skill for them. Halflings with this racial trait also begin play with the ability to speak Common, Halfling, and any one other language of their choice (except for secret languages, such as Druidic) in addition to bonus languages due to high Intelligence. They still gain the normal list of halfling bonus languages.</p>
		)
	},
	{ // 215
		"title": "Creepy Doll",
		"sources": [[8,40]],
		"content": (
			<p>Glassy eyes and porcelain skin make some halflings look more like dolls than living creatures. If they cease moving and pretend to be a doll while they aren't being observed, they can use the Stealth skill without cover or concealment. A successful Stealth check still allows other creatures to notice the halfling; they just believe the halfling is a doll, similar to the <Link to="/umr/freeze">freeze</Link> universal monster ability (without being able to take 20). In addition, they take no size penalty on Intimidate checks against larger humanoids.</p>
		)
	},
	{ // 
		"title": "Human Shadow",
		"sources": [[21,213]],
		"content": (
			<p>Halflings seem to pop up wherever humans are found, in part because they actively support and move with human explorers, settlers, and travelers without drawing attention to themselves. These halflings can use Stealth to hide behind creatures at least one size category larger than themselves, without any other source of concealment or cover. As long as the halflings are within 30 feet of a human, they gain a +2 racial bonus on Sleight of Hand checks and Stealth checks.</p>
		)
	},
	{ // 
		"title": "Ingratiating",
		"sources": [[0,62]],
		"content": (
			<p>Halflings often survive at the whims of larger, more aggressive races. Because of this, they go out of their way to make themselves more useful, or at least entertaining, to larger folk. Halflings with this racial trait gain a +2 bonus on skill checks for a single Perform skill of their choice, and Perform is always a class skill for them. They also gain a +2 bonus on Craft and Profession checks.</p>
		)
	},
	{ // 
		"title": "Fleet of Foot",
		"sources": [[0,62]],
		"content": (
			<p>Some halflings are quicker than their kin but less cautious. Halflings with this racial trait move at normal speed and have a base speed of 30 feet.</p>
		)
	},
	{ // 
		"title": "Driven Worker",
		"sources": [[21,213]],
		"content": (
			<p>Many halfling families have developed techniques to accomplish work faster and more efficiently, whether to contribute to the community or to please overbearing masters. These halflings gain a +4 racial bonus on checks with one Craft, Perform, or Profession skill.</p>
		)
	},
	{ // 220
		"title": "Festive",
		"sources": [[27,28]],
		"content": (
			<p>Halflings who hail from Segada partake in the City of Keys' many festivals to foster a strong sense of community and bring fortune to their peers. Once per day, a halfling with this racial trait can grant an ally within 60 feet a +2 luck bonus on one skill check as a free action; this bonus can be applied after the ally's check result is determined.</p>
		)
	},
	{ // 
		"title": "Outrider",
		"sources": [[0,62],[2,19]],
		"content": (
			<p>Some halflings specialize in mounted combat. Halflings with this racial trait gain a +2 bonus on Handle Animal and Ride checks.</p>
		)
	},
	{ // 
		"title": "Secretive Survivor",
		"sources": [[21,213]],
		"content": (
			<p>Halflings from poor and desperate communities, most often in big cities, must take what they need without getting caught in order to survive. They gain a +2 racial bonus on Bluff and Stealth checks.</p>
		)
	},
	{ // 
		"title": "Shiftless",
		"sources": [[0,62]],
		"content": (
			<p>Halflings have a reputation for larceny and guile - and sometimes it's well deserved. Halflings with this racial trait gain a +2 racial bonus on Bluff and Sleight of Hand checks, and Sleight of Hand is always a class skill for them.</p>
		)
	},
	{ // 
		"title": "Surreptitious",
		"sources": [[31,15]],
		"content": (
			<p>Halflings skilled in eavesdropping on suspicious visitors are highly prized in human courts. These halflings are skilled at maintaining innocuous disguises and vanishing before being confronted. Halflings with this trait gain a +2 racial bonus on Disguise and Stealth checks.</p>
		)
	},
	{ // 225
		"title": "Swift as Shadows",
		"sources": [[0,62],[2,21]],
		"content": (
			<p>Halflings possess incredible stealth even while moving through obstructed areas. Halflings with this racial trait reduce the penalty for using Stealth while moving by 5, and reduce the Stealth check penalty for sniping by 10.</p>
		)
	},
	{ // 
		"title": "Warslinger",
		"sources": [[0,62],[2,21]],
		"content": (
			<p>Halflings are experts at the use of the sling. Halflings with this racial trait can reload a sling as a free action. Reloading a sling still requires two hands and provokes attacks of opportunity.</p>
		)
	},
	{ // 
		"title": "Deep Jungle",
		"sources": [[8,40]],
		"content": (
			<p>Some reclusive halfling tribes flourish in tropical locales. These halflings begin play speaking only Halfling (in addition to any additional languages gained from having a high Intelligence score), rather than Common and Halfling. They gain a +2 racial bonus on Survival checks and are proficient with blowguns. In addition, they have the <Link to="/ability/poison_use">poison use</Link> ability (they never risk poisoning themselves accidentally).</p>
		)
	},
	{ // 
		"title": "Resourceful",
		"sources": [[8,41]],
		"content": (
			<p>Halflings with this trait do not take any penalties for using improvised weapons. This trait counts as the <Link to="/feat/Catch_Off_Guard">Catch Off-Guard</Link> or <Link to="/feat/Throw_Anything">Throw Anything</Link> feats for the purpose of qualifying for feats.</p>
		)
	},
	{ // 
		"title": "Scarred",
		"sources": [[0,121]],
		"content": (
			<p>A hobgoblin can scar himself with both blade and fire to toughen his hide into a mass of horny scars. Hobgoblins with this racial trait gain a +1 natural armor bonus to Armor Class. However, the repeated exposure to fire permanently damages their eyes.</p>
		)
	},
	{ // 230
		"title": "Bandy-Legged",
		"sources": [[0,120]],
		"content": (
			<p>Bandy-legged hobgoblins have an even more exaggerated stature than other hobgoblins, with bowed legs and massive shoulders. Hobgoblins with this racial trait gain a +2 racial bonus on Climb and Ride checks, and a +2 racial bonus to their CMD against bull rush or trip attempts while on solid ground. The base speed of bandy-legged hobgoblins is reduced to 20 feet.</p>
		)
	},
	{ // 
		"title": "Authoritative",
		"sources": [[21,215]],
		"content": (
			<p>Hobgoblins raised in the unusually open and stable nation of Kaoling or among the slave-drivers of Isger's Chitterwood often develop a knack for controlling others. They gain a +2 racial bonus on Diplomacy and Intimidate checks. Both skills are always class skills for them.</p>
		)
	},
	{ // 
		"title": "Battle-Hardened",
		"sources": [[0,120]],
		"content": (
			<p>Incessant drills make defense second nature to some hobgoblins. Hobgoblins with this racial trait gain a +1 bonus to CMD.</p>
		)
	},
	{ // 
		"title": "Engineer",
		"sources": [[0,121]],
		"content": (
			<p>Hobgoblin engineers tinker endlessly with fire, explosives, and the engines of war. Hobgoblins with this racial trait gain a +2 racial bonus on Craft (alchemy) and Knowledge (engineering) checks.</p>
		)
	},
	{ // 
		"title": "Fearsome",
		"sources": [[0,121]],
		"content": (
			<p>Some hobgoblins scorn caution and subtlety for swagger and bluster. Hobgoblins with this racial trait gain a +4 racial bonus on Intimidate checks.</p>
		)
	},
	{ // 235
		"title": "Magehunter",
		"sources": [[0,121]],
		"content": (
			<p>Hobgoblins hate and fear arcane casters. A magehunter gains a +2 racial bonus on Spellcraft checks made to identify a spell being cast and a +1 racial bonus on attack rolls against arcane spellcasters. He only gains this bonus against creatures that use spells, and not against those that only use spell-like abilities.</p>
		)
	},
	{ // 
		"title": "Pit Boss",
		"sources": [[0,121]],
		"content": (
			<p>Slave blood fuels the hobgoblin war machine. Pit bosses extract the last breath of labor from their charges with a liberal touch of the lash. Hobgoblins with this racial trait gain proficiency with whips and a +1 racial bonus on combat maneuver checks made to disarm or trip with a whip.</p>
		)
	},
	{ // 
		"title": "Slave Hunter",
		"sources": [[0,121]],
		"content": (
			<p>Hobgoblin slavers excel at tracking down runaway slaves and surviving in filthy conditions. Hobgoblins with this racial trait gain a +2 racial bonus on Survival checks and a +2 racial bonus on Fortitude saves against disease.</p>
		)
	},
	{ // 
		"title": "Unfit",
		"sources": [[0,121]],
		"content": (
			<p>Hobgoblins who failed to secure a position in the military hold the lowest status in hobgoblin society, and quickly learn the value of currying favor with their betters. Hobgoblins with this racial trait gain proficiency in a single martial weapon and +1 racial bonus on Bluff and Diplomacy checks.</p>
		)
	},
	{ // 
		"title": "Dual Talent",
		"sources": [[0,72]],
		"content": (
			<p>Some humans are uniquely skilled at maximizing their natural gifts. These humans pick two ability scores and gain a +2 racial bonus in each of those scores.</p>
		)
	},
	{ // 240
		"title": "Adoptive Parentage",
		"sources": [[0,72]],
		"content": (
			<p>Humans are sometimes orphaned and adopted by other races. Choose one humanoid race without the human subtype. You start play with that race's languages and gain that race's weapon familiarity racial trait (if any). If the race does not have weapon familiarity, you gain either <Link to="/feat/Skill_Focus">Skill Focus</Link> or <Link to="/feat/Weapon_Focus">Weapon Focus</Link> as a bonus feat that is appropriate for that race instead.</p>
		)
	},
	{ // 
		"title": "Awareness",
		"sources": [[21,213]],
		"content": (
			<p>Humans raised within monastic traditions or communities that encourage mindfulness seem to shrug off many dangers more easily than other humans. They gain a +1 racial bonus on all saving throws and concentration checks.</p>
		)
	},
	{ // 
		"title": "Dragon Scholar",
		"sources": [[14,11]],
		"content": (
			<p>Dragons have a long history of individual interactions with specific humans, and some humans seek to better understand this relationship. Humans with this trait receive a +2 racial bonus on caster level checks to overcome a dragon's spell resistance. In addition, they receive a +3 racial bonus on Knowledge (arcana) checks related to creatures of the dragon type.</p>
		)
	},
	{ // 
		"title": "Eye for Talent",
		"sources": [[0,72],[2,23]],
		"content": (
			<p>Humans have great intuition for hidden potential. They gain a +2 racial bonus on Sense Motive checks. In addition, when they acquire an animal companion, bonded mount, cohort, or familiar, that creature gains a +2 bonus to one ability score of the character's choice.</p>
		)
	},
	{ // 
		"title": "Focused Study",
		"sources": [[0,72]],
		"content": (
			<p>All humans are skillful, but some, rather than being generalists, tend to specialize in a handful of skills. At 1st, 8th, and 16th level, such humans gain <Link to="/feat/Skill_Focus">Skill Focus</Link> in a skill of their choice as a bonus feat.</p>
		)
	},
	{ // 245
		"title": "Heroic",
		"sources": [[0,72]],
		"content": (
			<p>Some humans are born heroes. In campaigns that use the optional hero point system, each time these humans gain a level, they gain 2 hero points instead of 1. If they take the Blood of Heroes feat, they gain 3 hero points each level instead of 2.</p>
		)
	},
	{ // 
		"title": "Military Tradition",
		"sources": [[21,214]],
		"content": (
			<p>Several human cultures raise all children (or all children of a certain social class) to serve in the military or defend themselves with force of arms. They gain proficiency with up to two martial or exotic weapons appropriate to their culture.</p>
		)
	},
	{ // 
		"title": "Mixed Heritage",
		"sources": [[0,72]],
		"content": (
			<p>Often human civilization is defined by more than one characteristic. A human with this trait may select a second \"Heart of the\" racial trait.</p>
		)
	},
	{ // 
		"title": "Piety",
		"sources": [[8,41]],
		"content": (
			<p>Humans place great trust in the gods to protect them. Humans with this trait receive a +2 racial bonus on Knowledge (religion) checks and Knowledge (religion) is always a class skill for them. In addition, once per day before attempting an attack roll, saving throw, ability check, or skill check, such a human can call out to his deity in order to receive a +2 racial bonus on that roll; he can use this ability only if he is able to speak.</p>
		)
	},
	{ // 
		"title": "Powerful Presence",
		"sources": [[31,15]],
		"content": (
			<p>Humans with a regal bearing and strong personal magnetism can apply their presence more forcefully than others. A human with this trait treats her Charisma score as 2 points higher for the purpose of meeting feat prerequisites. In addition, humans with this racial trait gain <Link to="/feat/Persuasive">Persuasive</Link> as a bonus feat.</p>
		)
	},
	{ // 250
		"title": "Psychic Defense",
		"sources": [[8,41]],
		"content": (
			<p>Humans from cultures steeped in the occult sometimes train their minds to resist outside influence. They gain a +2 racial bonus on saving throws against psychic spells and spell-like abilities, including those that originate from the <Link to="/umr/psychic_magic">psychic magic</Link> ability.</p>
		)
	},
	{ // 
		"title": "Rationalize",
		"sources": [[8,41]],
		"content": (
			<p>Humans have the ability to assuage their own fears by convincing themselves that what they saw or read is not real. Humans with this trait gain a +3 bonus on saving throws against effects that cause <Link to="/rule/sanity">sanity damage</Link>.</p>
		)
	},
	{ // 
		"title": "Reptilian Ancestory",
		"sources": [[8,41]],
		"content": (
			<p>Humans with reptoid or serpentfolk ancestry sometimes have nictitating membranes or patches of scaly skin. They gain a +2 racial bonus on saving throws against mind-affecting effects and poisons.</p>
		)
	},
	{ // 
		"title": "Self-Made Fate",
		"sources": [[21,214]],
		"content": (
			<p>Some humans build nations that deny the importance of gods and divine magic, and those raised to avoid divine influence (mostly people of Bachuan, Druma, Rahadoum, or Touvette) develop a knack for defying divine magic. They gain a +2 racial bonus on saving throws against divine spells and spell-like abilities, as well as the spells and spell-like abilities of aeons, psychopomps, and outsiders with an alignment subtype.</p>
		)
	},
	{ // 
		"copies": 105,
		"add": (
			<p>Humans with this trait also gain <Link to="/feat/Iron_Will">Iron Will</Link> as a bonus feat.</p>
		)
	},
	{ // 255
		"title": "Unstoppable Magic",
		"sources": [[21,214]],
		"content": (
			<p>Humans from civilizations built upon advanced magic, such as Geb or Nex, are educated in a variety of ways to accomplish their magical goals. They gain a +2 racial bonus on caster level checks against spell resistance.</p>
		)
	},
	{ // 
		"title": "Tribalistic",
		"sources": [[21,214]],
		"content": (
			<p>Many humans naturally form into cliques or tribes, and these humans work exceptionally well with those they view as fellow tribe members. Such humans gain a +2 racial bonus on attack rolls and skill checks to use the aid another action to aid humans of the same ethnicity. Humans with this racial trait must hail from an ethnicity that has its own language other than Common, and they only start with that language; if they have high Intelligence scores, they can select their bonus languages from among Common, Giant, Goblin, and Halfling.</p>
		)
	},
	{ // 
		"title": "Aquatic Ancestery",
		"sources": [[8,41]],
		"content": (
			<p>Humans with deep one or skum ancestry may exhibit prominent round eyes or webbed fingers and toes. They gain a racial bonus equal to half their character level on Swim checks and Swim is always a class skill for them. In addition, they can <Link to="/misc/hold_their_breath">hold their breath</Link> for twice as long as normal. When the racial bonus on Swim checks from this ability becomes +8 or higher, they can always take 10 on Swim checks, even when threatened or distracted.</p>
		)
	},
	{ // 
		"title": "Comprehensive Education",
		"sources": [[21,213]],
		"content": (
			<p>Humans raised with skilled teachers draw upon vast swathes of knowledge gained over centuries of civilization. They gain all Knowledge skills as class skills, and they gain a +1 racial bonus on skill checks for each Knowledge skill that they gain as a class skill from their class levels.</p>
		)
	},
	{ // 
		"copies": 80,
		"add": (
			<p>Humans with this trait also gain darkvision to 60 feet.</p>
		)
	},
	{ // 260
		"title": "Draconic Heritage",
		"sources": [[14,11]],
		"content": (
			<p>At times, a human's family history can have a dragon's power bound to the bloodline. Humans with this trait gain darkvision with a range of 10 feet and low-light vision. They can also ignore the Charisma prerequisite for Eldritch Heritage and any feat that has Eldritch Heritage as a prerequisite, but can select only the draconic bloodline with these feats.</p>
		)
	},
	{ // 
		"title": "Fey Magic and Fey Thoughts",
		"sources": [[28,5]],
		"content": (<>
			<p>The character has a mystic connection to one terrain type, selected from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities.</p>
			<p>The character sees the world more like a native of the First World. Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character.</p>
			<p>A human who takes this trait also gains low-light vision.</p>
		</>)
	},
	{ // 
		"title": "Giant Ancestery",
		"sources": [[8,41]],
		"content": (
			<p>Humans with ogre or troll ancestry end up having hulking builds and asymmetrical features. Such humans gain a +1 bonus on combat maneuver checks and to CMD, but a -2 penalty on Stealth checks.</p>
		)
	},
	{ // 
		"title": "Heart of the Fey",
		"sources": [[12,5]],
		"content": (
			<p>Fey-touched humans enjoy senses and reactions superior to those of their kin. These humans receive low-light vision, gain a +1 racial bonus on Reflex and Will saves, and treat Knowledge (nature) and Perception as class skills.</p>
		)
	},
	{ // 
		"title": "Heart of the Fields",
		"sources": [[0,72],[2,23]],
		"content": (
			<p>Humans born in rural areas are used to hard labor. They gain a racial bonus equal to half their character level to any one Craft or Profession skill, and once per day they may ignore an effect that would cause them to become fatigued or exhausted.</p>
		)
	},
	{ // 265
		"title": "Heart of the Mountains",
		"sources": [[0,72]],
		"content": (
			<p>Humans born in the mountains are skilled at negotiating heights and precipices. They gain a +2 racial bonus on Climb checks and Acrobatics checks to move on narrow surfaces and uneven ground. Furthermore, they are considered acclimated to the effects of high altitude.</p>
		)
	},
	{ // 
		"title": "Heart of the Sea",
		"sources": [[0,72]],
		"content": (
			<p>Humans born near the sea are always drawn to it. They gain a +2 racial bonus on Profession (sailor) and Swim checks, and these are always class skills for them. They can <Link to="/misc/hold_their_breath">hold their breath</Link> twice as long as normal, and spellcasters gain a +4 racial bonus on <Link to="/rule/concentration">concentration</Link> checks when attempting to cast spells underwater.</p>
		)
	},
	{ // 
		"title": "Heart of the Slums",
		"sources": [[0,72]],
		"content": (
			<p>Humans who eke out a life in a city's teeming slums must be quick and clever. They gain a +2 racial bonus on Sleight of Hand and Stealth checks, and a +4 racial bonus on Survival checks in urban and underground settings. In addition, they may roll twice when saving against disease, taking the better roll.</p>
		)
	},
	{ // 
		"title": "Heart of the Snows",
		"sources": [[0,72]],
		"content": (
			<p>Humans born in chilly climes treat cold climates as one category less severe. They gain a +2 racial bonus on Fortitude saving throws against the effects of cold climates, on any check or saving throw to avoid slipping and falling, and to CMD against trip combat maneuvers. This bonus applies on Acrobatics and Climb checks made in slippery conditions.</p>
		)
	},
	{ // 
		"title": "Heart of the Streets",
		"sources": [[0,72],[2,23]],
		"content": (
			<p>Humans from bustling cities are skilled with crowds. They gain a +1 racial bonus on Reflex saves and a +1 dodge bonus to Armor Class when adjacent to at least two other allies. Crowds do not count as difficult terrain for them.</p>
		)
	},
	{ // 270
		"title": "Heart of the Sun",
		"sources": [[0,72]],
		"content": (
			<p>Humans born in tropical climates treat hot climates as one category less severe. They also gain a +2 racial bonus on Fortitude saving throws against the effects of a hot climate, as well as against the poison and distraction ability of swarms and vermin.</p>
		)
	},
	{ // 
		"title": "Heart of the Wilderness",
		"sources": [[0,72],[2,23]],
		"content": (
			<p>Humans raised in the wild learn the hard way that only the strong survive. They gain a racial bonus equal to half their character level on Survival checks. They also gain a +5 racial bonus on Constitution checks to stabilize when dying and add half their character level to their Constitution score when determining the negative hit point total necessary to kill them.</p>
		)
	},
	{ // 
		"title": "Imposter-Wary",
		"sources": [[12,12]],
		"content": (
			<p>Humans trained to spot fey masquerading as their kin gain a +2 racial bonus on saving throws against illusion spells and effects, 1 free rank in Sense Motive at 1st level, and 1 additional rank in Sense Motive whenever they gain a level.</p>
		)
	},
	{ // 
		"title": "Industrious",
		"sources": [[21,213]],
		"content": (
			<p>Humans are known in the Inner Sea for their drive and work ethic. Humans with this racial trait gain a +2 racial bonus on concentration checks and checks with their choice of one Craft or Profession skill.</p>
		)
	},
	{ // 
		"title": "Innovative",
		"sources": [[21,213]],
		"content": (
			<p>Humans have come to shape the face of Golarion because they are inveterate innovators. Humans with this racial trait gain a +2 racial bonus on Knowledge (arcana) and Spellcraft checks to independently research spells, create magic items they have never encountered before, and identify unique magical effects. They also gain a +2 racial bonus on Charisma-based skill checks to persuade others to adopt a new ideology or further the cause of discovery and progress.</p>
		)
	},
	{ // 275
		"title": "Institutional Memory",
		"sources": [[21,214]],
		"content": (
			<p>Humans rely on their institutions to remember the distant past and to preserve their own memories for the distant future. They gain a +4 racial bonus on Knowledge checks to answer questions about any organizations, guilds, or religions to which they belong, and they can attempt such skill checks untrained.</p>
		)
	},
	{ // 
		"title": "One of the Multitude",
		"sources": [[30,9]],
		"content": (
			<p>City-dwelling humans are skilled at blending in with the busy multitudes of the city. They gain a +1 racial bonus on Bluff, Diplomacy, Disguise, Sleight of Hand, and Stealth checks when within 10 feet of at least two other humanoids. They gain a +1 racial bonus on attacks of opportunity made while flanking.</p>
		)
	},
	{ // 
		"title": "Practiced Hunter",
		"sources": [[21,214]],
		"content": (
			<p>Members of some human cultures train from youth to find and follow the trails of vital game and at the same time hide the evidence of their own passage. These humans gain a +2 racial bonus on Stealth and Survival checks, and Stealth and Survival are always class skills for them.</p>
		)
	},
	{ // 
		"title": "Silver Tongued",
		"sources": [[0,72]],
		"content": (
			<p>Human are often adept at subtle manipulation and putting even sworn foes at ease. Humans with this trait gain a +2 bonus on Diplomacy and Bluff checks. In addition, when they use Diplomacy to shift a creature's attitude, they can shift up to three steps up rather than just two.</p>
		)
	},
	{ // 
		"title": "Social Ties",
		"sources": [[21,214]],
		"content": (
			<p>Some human societies run on complex webs of favors and loyalties that canny members can intuitively exploit with relative ease. These humans gain a +2 racial bonus on Diplomacy checks, and on any skill checks to recruit members and teams for an organization. They also add a +1 racial bonus to their Leadership scores (if they gain the <Link to="/feat/Leadership">Leadership</Link> feat).</p>
		)
	},
	{ // 280
		"title": "Wayfarer",
		"sources": [[21,214]],
		"content": (
			<p>Humans maintain the largest trade networks on Golarion and the farthest-reaching civilizations, putting them in contact with a huge number of cultures. Humans with this racial trait gain a +2 racial bonus on Survival checks to avoid becoming lost, Knowledge (geography) checks, and Knowledge (local) checks. Whenever these humans gain a rank in Linguistics, they learn two languages rather than one.</p>
		)
	},
	{ // 
		"title": "Wildfire Heart",
		"sources": [[0,127]],
		"content": (
			<p>Ifrits with this trait are as swift and dangerous as a blazing wildfire. They gain a +4 racial bonus on initiative checks.</p>
		)
	},
	{ // 
		"title": "Brazen Flame",
		"sources": [[21,215]],
		"content": (
			<p>An unusual number of ifrits hail from the Brazen Peaks area, home to the remains of Xotani the Firebleeder, and their flames infuse their weapons in mortal combat, rather than protect them or grant spells. An ifrit with this racial trait deals 1 point of fire damage with its melee attacks.</p>
		)
	},
	{ // 
		"title": "Desert Mirage",
		"sources": [[0,126]],
		"content": (
			<p>Ifrits thrive in the deserts of the world, where their keen instincts and resistance to heat give them a huge edge over their competitors. Those with this trait gain a +2 racial bonus on Stealth checks in desert environments and on saves to resist starvation and thirst.</p>
		)
	},
	{ // 
		"title": "Fire in the Blood",
		"sources": [[0,126]],
		"content": (
			<p>Ifrits with this racial trait mimic the healing abilities of the mephits, gaining <Link to="/umr/fast_healing">fast healing</Link> 2 for 1 round anytime they take fire damage (whether or not this fire damage gets through their fire resistance). The ifrits can heal up to 2 hit points per level per day with this ability, after which it ceases to function.</p>
		)
	},
	{ // 285
		"title": "Fire Insight",
		"sources": [[0,126]],
		"content": (
			<p>Ifrit spellcasters sometimes find that their elemental heritage makes creatures of fire more willing to serve them. Summon monster and summon nature's ally spells that the ifrit casts last 2 rounds longer than normal when used to summon creatures with the fire subtype.</p>
		)
	},
	{ // 
		"title": "Fire-Starter",
		"sources": [[0,126]],
		"content": (
			<p>Ifrits with this racial trait derive sadistic satisfaction from watching others burn. Anytime the ifrit causes a creature to catch fire, he gains a +1 morale bonus on the next single attack roll, saving throw, skill check, or ability check that he makes in the next round. The ifrit only gains this bonus the first time he causes a particular creature to catch fire; subsequent times the creature catches fire provide no bonus.</p>
		)
	},
	{ // 
		"title": "Hypnotic",
		"sources": [[0,127]],
		"content": (
			<p>Ifrits with this racial trait evoke the entrancing nature of flame, adding +1 to the DC for all saving throws against spells or effects they cast that inflict the fascinated condition. Once per day, when a creature rolls a saving throw against such an effect from the ifrit, the ifrit can spend an immediate action to force that creature to reroll the saving throw and use the second result, even if it is worse. The ifrit must announce he is using this ability before the results of the first roll are revealed.</p>
		)
	},
	{ // 
		"title": "Mostly Human",
		"sources": [[21,215]],
		"content": (
			<p>A few ifrits, oreads, sulis, sylphs, and undines have appearances much closer to those of their human ancestors; in fact, they may not even realize their true race. Such geniekin appear to be human, save perhaps minor features like unusual eye color, and they count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells such as <Link to="/spell/charm_person">charm person</Link> or <Link to="/spell/enlarge_person">enlarge person</Link>). These geniekin do not automatically gain their associated elemental language (but may select it as a bonus language if their Intelligence is high enough).</p>
		)
	},
	{ // 
		"title": "Efreeti Magic",
		"sources": [[0,126]],
		"content": (
			<p>Some ifrits inherit an efreeti ancestor's ability to magically change a creature's size. They can cast either <Link to="/spell/enlarge_person">enlarge person</Link> or <Link to="/spell/reduce_person">reduce person</Link> (the ifrit chooses when using this ability) once per day as a spell-like ability (caster level equals the ifrit's level). The ifrit can use this ability to affect other ifrits as though they were humanoid creatures.</p>
		)
	},
	{ // 290
		"title": "Forge-Hardened",
		"sources": [[0,126]],
		"content": (
			<p>Not all ifrits are descended from efreet - some instead descend from azers or even salamanders. Such ifrits gain a +2 racial bonus on Craft (armor and weapons) checks and saves to resist fatigue and exhaustion.</p>
		)
	},
	{ // 
		"title": "Keen Kitsune",
		"sources": [[1,12]],
		"content": (
			<p>Although amiable, kitsune are notoriously clever and cunning, often far more than they seem. Such characters gain a +2 bonus to Dexterity and Intelligence instead of Dexterity and Charisma.</p>
		)
	},
	{ // 
		"title": "Gregarious (Ex)",
		"sources": [[0,192]],
		"content": (
			<p>Even among your own kind, your gift for making friends stands out. Whenever you successfully use Diplomacy to win over an individual, that creature takes a -2 penalty to resist any of your Charisma-based skill checks for the next 24 hours.</p>
		)
	},
	{ // 
		"title": "Skilled",
		"sources": [[1,12]],
		"content": (
			<p>Some kitsune focus on diversifying their skill set in order to better blend in with their human peers. They gain an additional skill rank at 1st level and one additional skill rank whenever they gain a level.</p>
		)
	},
	{ // 
		"title": "Multilingual",
		"sources": [[1,12]],
		"content": (
			<p>Although most kitsune speak only Common, some quickly learn other human languages in order to give themselves an edge when dealing with humanity. They speak Common, Senzar, and the racial language of their human form's ethnicity, and they can learn any language they want (except Druidic and other secret languages) if they have high Intelligence scores.</p>
		)
	},
	{ // 295
		"title": "Duplicitous",
		"sources": [[21,215]],
		"content": (
			<p>Many kitsune prefer to avoid the attention they often attract from human neighbors and attempt to convince all around them that they are human. They gain a +2 racial bonus on Bluff and Disguise checks.</p>
		)
	},
	{ // 
		"title": "Fast Shifter (Su)",
		"sources": [[0,192]],
		"content": (
			<p>You were born with an innate talent for switching between your natural forms. Using your racial change shape ability is a move action instead of a standard action.</p>
		)
	},
	{ // 
		"title": "Superior Shapeshifter",
		"sources": [[1,12]],
		"content": (
			<p>Some talented kitsune take more naturally to shapeshifting than magic, and develop that gift. They gain <Link to="/feat/Fox_Shape">Fox Shape</Link> as a bonus feat at 1st level, ignoring its prerequisites.</p>
		)
	},
	{ // 
		"title": "Dragon Affinity",
		"sources": [[21,216]],
		"content": (
			<p>Kobold sorcerers with the draconic bloodline or kobold bloodline treat their Charisma scores as 2 points higher for all sorcerer spells and class abilities.</p>
		)
	},
	{ // 
		"title": "Dragonmaw",
		"sources": [[16,7]],
		"content": (
			<p>Your draconic heritage makes you smile-not just because it makes you happy, but also because your powerful jaws and teeth are proof of your kinship to a chromatic dragon. You gain a bite attack that deals 1d4 points of damage. Once per day, you can deal 1d6 points of additional energy damage with your bite attack. The damage type depends on your scale color: acid damage for black or green, electricity for blue, fire for red, or cold for white. If you have a different scale color, you still gain the bite attack, but can't do the additional energy damage.</p>
		)
	},
	{ // 300
		"title": "Dragon-Scaled",
		"sources": [[0,132]],
		"content": (
			<p>Some kobolds are hatched with scales of such vivid color that their connection to a particular sort of chromatic dragon seems undeniable. Whether this coloration is just a quirk of a stray egg or a trait shared by all the members of a tribe, these kobolds gain a resistance that makes them especially suited to work alongside dragons matching the color of the kobold's scales. Black-scaled and green-scaled kobolds with this racial trait gain acid resistance 5. Blue-scaled kobolds with this racial trait gain electricity resistance 5. Red-scaled kobolds with this racial trait gain fire resistance 5. White-scaled kobolds with this racial trait gain cold resistance 5.</p>
		)
	},
	{ // 
		"title": "Frightener",
		"sources": [[16,7]],
		"content": (
			<p>Like the great dragons, you can strike fear in the hearts of your foes with your majestic presence. Few enemies suspect that you make yourself look more dangerous with simple tricks you learned back when you were newly hatched. You gain a +1 racial bonus to the DC of saving throws against spells you cast with the fear descriptor.</p>
		)
	},
	{ // 
		"title": "Prehensile Tail",
		"sources": [[16,7]],
		"content": (
			<p>Your tail is especially flexible and strong, so you've learned to use it for both movement and simple tricks. You gain a +2 racial bonus on Acrobatics and Climb checks, and you can use your tail to draw a hidden weapon as a move action instead of as a standard action.</p>
		)
	},
	{ // 
		"title": "Beast Bond",
		"sources": [[0,132]],
		"content": (
			<p>Some kobolds have a talent for training animals and beasts to help them both on and off the battlefield. Kobolds with this racial trait gain a +2 racial bonus on Handle Animal and Ride checks. Handle Animal and Ride are always class skills for them.</p>
		)
	},
	{ // 
		"title": "Echo Whistler",
		"sources": [[16,7]],
		"content": (
			<p>By observing the noises in underground tunnels, you learned to uncannily mimic any voice or sound you heard. Three times per day, you can attempt to trick someone in this way by making a Bluff check against the listener's Sense Motive check. You get a +2 circumstance bonus on this check if you're in tunnels or other structures where your voice can echo.</p>
		)
	},
	{ // 305
		"title": "Gliding Wings",
		"sources": [[0,133]],
		"content": (
			<p>Some kobolds are born with wings that, while too weak for actual flying, do allow them to fall at a very slow and safe pace. A kobold with wings can use them to glide. It can make a DC 15 Fly check to fall safely from any height without taking falling damage, as if using <Link to="/spell/feather_fall">feather fall</Link>. When falling safely, it may make an additional DC 15 Fly check to glide, moving 5 feet laterally for every 20 feet it falls.</p>
		)
	},
	{ // 
		"title": "Jester",
		"sources": [[0,133]],
		"content": (
			<p>Some kobolds swallow their pride and survive by groveling, placating, and amusing the powerful. Kobolds with this racial trait gain a +2 racial bonus on Diplomacy and Perform checks. Diplomacy and Perform are always class skills for them.</p>
		)
	},
	{ // 
		"title": "Secret Strider",
		"sources": [[16,7]],
		"content": (
			<p>You have the ability to traverse the wilderness without a trace. Twice per day, you can move through natural surroundings without leaving a trail for 1 minute, increasing the DC of any attempts to track you by 10.</p>
		)
	},
	{ // 
		"title": "Shoulder to Shoulder",
		"sources": [[16,7]],
		"content": (
			<p>Having lived and worked in close quarters with your tribe-mates, you've learned how to maneuver within their personal space without disturbing them. You can occupy the same space as one other Small ally without penalty. If you share a space with another kobold who has this trait, you each gain a +1 circumstance bonus to AC, as you help jostle one another out of the way of incoming attacks. You also gain a +1 racial bonus on aid another rolls.</p>
		)
	},
	{ // 
		"title": "Spellcaster Sneak",
		"sources": [[16,7]],
		"content": (
			<p>Traversing the tunnels near big, nasty, hungry creatures, you learned to keep quiet - and to keep your spells quiet too. You gain a +2 racial bonus on Stealth checks, and once per day you can gain the benefit of the <Link to="/feat/Silent_Spell">Silent Spell</Link> feat on a spell you cast.</p>
		)
	},
	{ // 310
		"title": "Wild Forest Kobold",
		"sources": [[16,7]],
		"content": (
			<p>You're one of the barbaric kobolds dwelling in the forests of the surface world. Your culture shuns artifice, but teaches how to endure and hunt. You gain a +2 racial bonus on Perception and Survival checks. Stealth and Survival are always class skills for you.</p>
		)
	},
	{ // 
		"title": "Wyrmcrowned",
		"sources": [[16,7]],
		"content": (
			<p>Your horns have grown to the extent that they appear similar to those of a dragon who shares your scale color, lending a draconic power or menace to your dealings with others. Choose either Diplomacy or Intimidate. You gain a +2 racial bonus on checks with that skill, and it is always a class skill for you.</p>
		)
	},
	{ // 
		"title": "Day Raider",
		"sources": [[16,7]],
		"content": (
			<p>You're one of the few kobolds born with a greater tolerance for sunlight. You don't have light sensitivity, and you have low-light vision instead of darkvision.</p>
		)
	},
	{ // 
		"title": "Blunt Head",
		"sources": [[7,11]],
		"content": (
			<p>Some locathahs develop blunt, flat heads with sharp, needle-like teeth and well-muscled jaws. This head shape reduces their swim speed to 40 feet but provides the locathah with a bite attack. This is a primary natural attack that deals 1d4 points of piercing damage.</p>
		)
	},
	{ // 
		"title": "Strong Limbs",
		"sources": [[7,11]],
		"content": (
			<p>Some locathahs have powerful legs that are very useful on land but limit their mobility underwater. These locathahs have a base land speed of 20 feet and a swim speed of 40 feet.</p>
		)
	},
	{ // 315
		"title": "Coastal Emissary",
		"sources": [[7,11]],
		"content": (
			<p>Locathahs who dwell in sunlit coastal waters develop close ties with surface dwellers and become skilled negotiators. Once per day when attempting a Diplomacy or Sense Motive check, a locathah with this racial trait can roll twice and use the better result.</p>
		)
	},
	{ // 
		"title": "Deep Dweller",
		"sources": [[7,11]],
		"content": (
			<p>Locathahs living in deeper waters than coastal shallows have adapted to operating in darkness. Locathahs who have this racial trait gain darkvision with a range of 60 feet and light sensitivity.</p>
		)
	},
	{ // 
		"title": "Powerful Smell",
		"sources": [[7,11]],
		"content": (
			<p>Although all locathahs have a distinctly fishy odor out of the water, some locathahs have slimier skin that exudes a strong scent both above and below the waves. Locathahs who have this racial trait emit a terrible scent as a 15-foot aura that nearly every other creature finds offensive. This is a poison effect. All living creatures (except other locathahs and creatures with the <Link to="/umr/stench">stench</Link> ability) within the aura must succeed at a Fortitude saving throw (DC 10 + half the locathah's character level + the locathah's Constitution modifier) or be sickened for 5 rounds. Creatures that succeed at the saving throw cannot be sickened by the same locathah's powerful smell for 24 hours. A delay poison or neutralize poison spell or similar effect removes the effect from the sickened creature. Due to their smell, locathahs with this racial trait have a -4 penalty on Stealth checks.</p>
		)
	},
	{ // 
		"title": "Secret Magic",
		"sources": [[21,216]],
		"content": (
			<p>Merfolk sometimes manifest magical powers they are unwilling to explain to non-merfolk, leading scholars to speculate that the magic originates from the merfolk's rumored eldritch patrons. Such merfolk have only a 40-foot swim speed, but they add +1 to the DC of any enchantment spells they cast, and if they have a Charisma score of 13 or higher, they gain the ability to cast the following spell-like abilities: At will-<Link to="/spell/speak_with_animals">speak with animals</Link> (aquatic animals only); 1/day-<Link to="/spell/fins_to_feet">fins to feet</Link> (self only), <Link to="/spell/hydraulic_push">hydraulic push</Link>.</p>
		)
	},
	{ // 
		"title": "Darkvision",
		"sources": [[0,194]],
		"content": (
			<p>Some merfolk favor the lightless depths over shallower waters. Merfolk with this racial trait gain darkvision with a range of 60 feet and light sensitivity.</p>
		)
	},
	{ // 320
		"title": "Seasinger",
		"sources": [[0,194]],
		"content": (
			<p>The beautiful voices of the merfolk are legendary. A seasinger gains a +2 racial bonus on Perform (sing) checks and a +1 racial bonus to the save DC of language-dependent spells.</p>
		)
	},
	{ // 
		"title": "Unexpected Ally",
		"sources": [[27,31]],
		"content": (
			<p>Outsear merfolk have grown to live and cooperate with an ancestral enemy. Merfolk with this racial trait gain a +2 bonus on Diplomacy checks to influence a creature's attitude. In addition, merfolk with this racial trait gain a +1 racial bonus on checks to perform the aid another action.</p>
		)
	},
	{ // 
		"title": "Strongtail",
		"sources": [[0,194]],
		"content": (
			<p>A few merfolk have broad, strong tails that are more suited for land travel than the typical merfolk tail. Merfolk with this racial trait have a land speed of 15 feet and a swim speed of 30 feet.</p>
		)
	},
	{ // 
		"title": "Serpent Affinity",
		"sources": [[21,216]],
		"content": (
			<p>Nagaji clerics with this racial trait and the Scalykind domain use their domain powers and spells at +1 caster level. This increase is a racial bonus.</p>
		)
	},
	{ // 
		"title": "Hypnotic Gaze (Sp)",
		"sources": [[0,196]],
		"content": (
			<p>The nagaji's gaze is so intense it stops others in their tracks. Once per day, it can attempt to hypnotize a single target, as per the spell hypnotism (caster level equal to the nagaji's Hit Dice). The DC of this effect is equal to 11 + the nagaji's Charisma modifier. The effects of the hypnotic gaze only last a single round.</p>
		)
	},
	{ // 325
		"title": "Reckless Climber",
		"sources": [[21,216]],
		"content": (
			<p>Mountain-dwelling orcs thrive on taking insane risks to defeat foes and show up rivals. They gain a +4 racial bonus on Climb checks without rope and on Acrobatics checks to maintain balance.</p>
		)
	},
	{ // 
		"title": "Squalid",
		"sources": [[0,139]],
		"content": (
			<p>Some orcs exist in surroundings so filthy and pestilent that even other orcs would have difficulty living in them. Orcs with this racial trait gain a +2 racial bonus on saving throws made to resist nausea, the sickened condition, and disease.</p>
		)
	},
	{ // 
		"title": "Smeller",
		"sources": [[0,319]],
		"content": (
			<p>Orcs with this racial trait gain a limited scent ability with half the normal range.</p>
		)
	},
	{ // 
		"title": "Dayrunner",
		"sources": [[0,138]],
		"content": (
			<p>Orcs refuse to yield to any foe, including the sun. Some spend hour upon hour glaring at the sun until their ruined eyes acclimatize to bright light. Orcs with this racial trait take a -2 penalty on all ranged attack rolls.</p>
		)
	},
	{ // 
		"title": "Feral",
		"sources": [[0,138]],
		"content": (
			<p>Orcs have the ability to fend for themselves long before they master the rudiments of their language and culture. Having needed to hunt bugs and tiny animals for food to survive while still infants, feral orcs fight all the harder to survive when at the brink of death. Orcs with this racial trait gain Survival as a class skill and gain a +1 racial bonus on melee weapon attack and damage rolls when at negative hit points. Feral orcs without additional languages due to high Intelligence scores or ranks in Linguistics can only communicate with grunts and gestures.</p>
		)
	},
	{ // 330
		"title": "Deep Sea Dweller",
		"sources": [[7,5]],
		"content": (
			<p>Aquatic elves who live far beneath the surface have adapted to the inhospitable conditions of the ocean depths. Aquatic elves with this racial trait gain darkvision with a range of 60 feet and cold resistance 5.</p>
		)
	},
	{ // 
		"title": "Surfacer Antagonist",
		"sources": [[7,5]],
		"content": (
			<p>Aquatic elves generally distrust humans, but for some, the suspicion has become festering hatred. Those who have lost loved ones to human aggression or have watched humans loot artifacts from venerated undersea ruins view all humans as enemies. Aquatic elves with this racial trait receive a +1 bonus on attack rolls against humans.</p>
		)
	},
	{ // 
		"title": "Surface Features",
		"sources": [[7,5]],
		"content": (
			<p>Some aquatic elves appear almost indistinguishable from surface elves. Their coloring, height, and weight all suggest those of a surface elf, and the webbing between their digits is almost transparent. Aquatic elves with this racial trait gain a +4 bonus on Bluff and Disguise checks when attempting to pass themselves off as surface elves.</p>
		)
	},
	{ // 
		"title": "Umbral Escort",
		"sources": [[4,6]],
		"content": (
			<p>Some fetchlings descend from talented planar travelers who dwelled in the dark places between worlds and could conduct others across the planes. A fetchling with this racial trait loses the <em>disguise self</em> spell-like ability, but his shadow walk and plane shift spell-like abilities need not affect himself only.</p>
		)
	},
	{ // 
		"title": "Emissary",
		"sources": [[0,108]],
		"content": (
			<p>Rare fetchlings excel in the role of emissary between the Shadow Plane and the Material Plane. Once per day, such a fetchling can roll twice when making a Bluff or Diplomacy check and take the better roll.</p>
		)
	},
	{ // 335
		"title": "Boundary Walker",
		"sources": [[4,6]],
		"content": (
			<p>Fetchlings of Absalom and Shadow Absalom deftly navigate between the worlds of shadow and light. A fetchling with this racial trait gains spell resistance equal to 5 + his character level against spells and spell-like abilities with the light or shadow descriptors, as well as spells and spell-like abilities of the illusion (shadow) subschool.</p>
		)
	},
	{ // 
		"title": "Bound to Golarion",
		"sources": [[4,6]],
		"content": (
			<p>Some Nidalese fetchlings are from families that have fearfully avoided the Shadow Plane, living on Golarion for generations. As a result, these fetchlings are closely tied to the Material Plane. Fetchlings with this racial trait count as <Link to="/type/outsider">outsiders</Link> with the <Link to="/subtype/native">native</Link> subtype and humanoids with the human subtype for any effect related to race, including feat prerequisites and spells that affect humanoids. They can pass for human without using the Disguise skill.</p>
		)
	},
	{ // 
		"title": "Deep Shadow Explorer",
		"sources": [[4,6]],
		"content": (
			<p>Fetchlings who widely explore the Shadow Plane learn to confront fearsome things best left undescribed. Fetchlings with this racial trait gain a +2 racial bonus on all saves against fear effects.</p>
		)
	},
	{ // 
		"title": "Shadow Agent",
		"sources": [[21,215]],
		"content": (
			<p>Families of fetchlings in Shadow Absalom and Nidal make their livings serving as agents, diplomats, and spies mediating between humans and the powers of the Plane of Shadow. They gain a +2 racial bonus on Bluff and Diplomacy checks.</p>
		)
	},
	{ // 
		"title": "Shadow Magic",
		"sources": [[0,109]],
		"content": (
			<p>Fetchlings who spend their time studying the subtle magic of their adopted plane gain arcane insights on the use of shadow spells. These fetchlings gain a +1 racial bonus to the DC of any illusion (shadow) spells they cast.</p>
		)
	},
	{ // 340
		"title": "Whispers from Shadow",
		"sources": [[4,6]],
		"content": (
			<p>Fetchlings from Absalom are known for wheeling and dealing from the city's shadows. A fetchling with this racial trait gains a +4 racial bonus on Bluff checks when he tells a lie and wants to convince an opponent that what he is saying is true.</p>
		)
	},
	{ // 
		"title": "World Walker",
		"sources": [[0,109]],
		"content": (
			<p>Fetchlings who have spent most of their lives on the Material Plane can become more acclimated to their new environments. Instead of gaining a +2 racial bonus on Knowledge (planes) checks, these fetchlings gain a +1 racial bonus on Knowledge (nature) and Knowledge (local) checks.</p>
		)
	},
	{ // 
		"title": "Gloom Shimmer",
		"sources": [[0,108]],
		"content": (
			<p>Some fetchlings can manipulate shadowy energy in order to displace their location instead of transporting between shadows. Upon reaching 9th level, instead of gaining shadow walk as a spell-like ability, these fetchlings gain <Link to="/spell/displacement">displacement</Link> as a spell-like ability usable twice per day. For this ability, a fetchling's caster level is equal to his total Hit Dice.</p>
		)
	},
	{ // 
		"title": "Nidalese Recluse",
		"sources": [[4,6]],
		"content": (
			<p>Some fetchlings learn how to deflect unwanted attention. Fetchlings with this racial trait can use <Link to="/spell/sanctuary">sanctuary</Link> once per day as a spell-like ability. When such a fetchling reaches 9th level in any combination of classes, he gains <Link to="/spell/nondetection">nondetection</Link> (self only) as a spell-like ability usable once per day, and at 13th level, he gains <Link to="/spell/veil">veil</Link> (self only) usable once per day. A fetchling's caster level is equal to his total Hit Dice.</p>
		)
	},
	{ // 
		"title": "Subtle Manipulator",
		"sources": [[0,109]],
		"content": (
			<p>Rather than taking on the forms of others, some fetchling are adept at destroying the memories of other creatures. Instead of gaining disguise self as a spell-like ability, such fetchlings can use <Link to="/spell/memory_lapse">memory lapse</Link> once per day as a spell-like ability. For this ability, a fetchling's caster level is equal to his total Hit Dice.</p>
		)
	},
	{ // 345
		"title": "Unnerving Gaze",
		"sources": [[23,24]],
		"content": (
			<p>Some fetchlings gain an upsetting gaze attack that they can activate three times per day as a standard action, affecting all creatures within a 30-foot cone that can see. All creatures that meet the fetchling's unnerving gaze are shaken for 1 round (DC = 10 + 1/2 the fetchling's character level + her Charisma modifier; Will negates). When the fetchling reaches 9th level, her gaze instead causes creatures to be staggered. When the fetchling reaches 13th level, her gaze instead causes creatures to be stunned. Unnerving gaze is a mind-affecting fear effect.</p>
		)
	},
	{ // 
		"title": "Titled",
		"sources": [[5,10]],
		"content": (
			<p>Certain gathlains play at the games of courtly intrigue that dominate much of First World culture, assuming titles that other fey may or may not recognize. These gathlains treat Bluff, Diplomacy, and Knowledge (nobility) as class skills.</p>
		)
	},
	{ // 
		"title": "Symbiotic Imbalance",
		"sources": [[12,8]],
		"content": (
			<p>Occasionally the conditions for a gathlain seed's growth heavily favor the plant portion of its body, causing more nutrients to go to the building of its vine wings and fewer to developing the gathlain's legs. These gathlains have larger wings than normal. They have a base speed of 20 feet and a fly speed of 40 feet (average).</p>
		)
	},
	{ // 
		"title": "Tree-Born",
		"sources": [[5,10]],
		"content": (
			<p>Some gathlains take after their tree ancestors, standing more firmly but moving more slowly. They have no Constitution penalty but have a base speed of 20 feet and a fly speed of 30 feet (clumsy maneuverability).</p>
		)
	},
	{ // 
		"title": "Photosynthetic Vision",
		"sources": [[12,8]],
		"content": (
			<p>Occasionally the tendrils of a gathlain's symbiotic vines wrap around the gathlain's face like a leafy mask. The vines supplement the gathlain's vision with photosynthetic receptors. Gathlains with this racial trait gain a +2 racial bonus on Perception checks.</p>
		)
	},
	{ // 350
		"title": "Bower Born",
		"sources": [[12,8]],
		"content": (
			<p>Some gathlain seeds find their way to the Hanging Bower, the realm of the alluring Eldest known as the Green Mother. Gathlains grown in the Hanging Bower sprout beautiful but delicate hibiscus flowers on their vines and emit a seductive pheromone. Gathlains with this trait gain a +2 racial bonus on Diplomacy and Handle Animal checks.</p>
		)
	},
	{ // 
		"title": "Flighty",
		"sources": [[5,10]],
		"content": (
			<p>Some gathlains are too easily distracted to miss anything going on around them. They gain Perception as a class skill and gain a +2 racial bonus on saving throws against patterns and effects that cause the fascinated condition.</p>
		)
	},
	{ // 
		"title": "Honey Whisperer",
		"sources": [[5,10]],
		"content": (
			<p>Some gathlains keep bees of all sizes, collecting their honey and sometimes even riding the largest of them. They can use Handle Animal and wild empathy to influence vermin as if they were animals with an Intelligence score of 1.</p>
		)
	},
	{ // 
		"title": "Soaring Agility",
		"sources": [[19,10]],
		"content": (
			<p>A gathlain whose seed spends a long time drifting through the air before coming to rest grows with a natural aerial agility. Gathlains with this racial trait gain a +1 dodge bonus to AC against attacks originating from at least 20 feet below the gathlain.</p>
		)
	},
	{ // 
		"title": "Natural Bounty",
		"sources": [[19,10]],
		"content": (
			<p>Some gathlains command natural plants in a different way, with their control increasing as they grow more powerful. Once per day, a gathlain with this racial trait can cast <Link to="/spell/goodberry">goodberry</Link> as a spell-like ability. When the gathlain's character level reaches 9th, he can cast <Link to="/spell/plant_growth">plant growth</Link> (overgrowth only) as a spell-like ability once per day, and at 13th level, he can cast <Link to="/spell/heroes_feast">heroes' feast</Link> as a spell-like ability once per day. The gathlain's caster level for these abilities is equal to his character level.</p>
		)
	},
	{ // 355
		"title": "Arboreal Vitality",
		"sources": [[19,10]],
		"content": (
			<p>Some gathlains draw exceptional nourishment from any kind of tree through their wings, although their wings are much more delicate. A gathlain with this racial trait has a fly speed of only 20 feet (poor maneuverability) but gains <Link to="/umr/fast_healing">fast healing</Link> 2 for 1 round whenever he is adjacent to a living tree larger than he is. The gathlain can heal up to 2 hit points per level per day with this ability, after which it ceases to function.</p>
		)
	},
	{ // 
		"title": "Sticky Tendrils",
		"sources": [[12,8]],
		"content": (
			<p>When a gathlain seed finds itself taking root in an environment that warps and changes erratically, the resulting gathlain learns to cling tenaciously with its vines. The gathlain can cling to walls and even ceilings as long as the surface has handholds, and it is treated as being constantly under the effects of a nonmagical <Link to="/spell/spider_climb">spider climb</Link> spell (except that the gathlain may not cling to smooth surfaces). The gathlain's vines provide only the ability to glide rather than true flight; the gathlain takes no damage from falling, as if subject to a constant nonmagical <Link to="/spell/feather_fall">feather fall</Link> spell. While in midair, a gathlain can move up to 5 feet horizontally for every 1 foot it falls, at a speed of 60 feet per round. The gathlain cannot gain height with its wings, but instead coasts in other directions as it falls. If subjected to strong winds or any other effect that causes it to rise, the gathlain can take advantage of this updraft to increase the distance it can glide.</p>
		)
	},
	{ // 
		"title": "Body Thorns",
		"sources": [[12,8]],
		"content": (
			<p>Gathlains that mature in particularly hostile environments develop thorns on their vines to protect them from overeager herbivores. A gathlain with this racial trait is considered to be wearing masterwork armor spikes when not wearing armor or bulky clothing, and it is proficient with armor spikes. These thorns can be sundered or destroyed as if they were a worn object (hardness 1, 5 hp), but grow back 1 week later.</p>
		)
	},
	{ // 
		"title": "Fey Resilience",
		"sources": [[19,10]],
		"content": (
			<p>Even gathlains who leave the First World can retain a bit of the supernatural resilience shared by many fey. A gathlain with this racial trait gains DR 1/cold iron. This DR increases by 1 for every 5 HD the gathlain has.</p>
		)
	},
	{ // 
		"title": "Intense Curiosity",
		"sources": [[5,10]],
		"content": (
			<p>Some gathlains habitually fixate on someone or something nearby and examine its every detail. When taking 20 on the check, they gain a +4 racial bonus on Perception and Survival checks to find and follow tracks and to predict the weather.</p>
		)
	},
	{ // 360
		"title": "Nimbus of Vitality",
		"sources": [[21,215]],
		"content": (
			<p>Gathlains sometimes retain a powerful connection to the First World, which allows them to channel life-giving energy. As a standard action once per day, they can surround themselves in an aura that affects them as <Link to="/spell/faerie_fire">faerie fire</Link> and grants <Link to="/umr/fast_healing">fast healing</Link> 2. The nimbus lasts for 3 rounds plus 1 additional round per 2 character levels the gathlain possesses.</p>
		)
	},
	{ // 
		"title": "Otherworldly Gossip",
		"sources": [[5,10]],
		"content": (
			<p>Many gathlains excitedly share every last bit of gossip they can find. These gathlains gain a +2 racial bonus on Diplomacy checks to gather information and on checks with one Knowledge skill of the gathlain's choice. Once the choice of Knowledge skill is made, it can't be changed.</p>
		)
	},
	{ // 
		"title": "Tree Dialect",
		"sources": [[5,10]],
		"content": (
			<p>A rare few gathlains are born with the knowledge of an ancient way of speech that allows them to communicate with trees. Once per day, they can cast <Link to="/spell/speak_with_plants">speak with plants</Link> (trees only) as a spell-like ability with a caster level equal to the gathlain's character level.</p>
		)
	},
	{ // 
		"title": "Whimsical Outlook",
		"sources": [[19,10]],
		"content": (
			<p>Some gathlains can use their unusual mentality as a defense against efforts to control their minds. Once per day when a gathlain with this trait attempts a Will saving throw, he can roll the saving throw twice and use the better result. He must decide to use this ability before attempting the saving throw.</p>
		)
	},
	{ // 
		"title": "Disgusting",
		"sources": [[21,215]],
		"content": (
			<p>Some ghorans' link to their past lives becomes corrupted, causing their taste to become particularly disgusting. Such ghorans gain a +2 racial bonus on Escape Artist and combat maneuver checks to escape a grapple against any creature that has a bite attack with the <Link to="/umr/grab">grab</Link> ability.</p>
		)
	},
	{ // 365
		"title": "Natural Camouflage",
		"sources": [[19,12]],
		"content": (
			<p>Some ghorans evolve by reseeding themselves in different locations. With each new seed, these ghorans take on some of the traits of the areas surrounding their new growth. Ghorans with this racial trait choose one terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list other than planes, urban, or water. These ghorans gain a +4 racial bonus on Stealth checks when in their chosen terrain.</p>
		)
	},
	{ // 
		"title": "Intoxicating Aroma",
		"sources": [[19,12]],
		"content": (
			<p>Some ghorans have an incredibly distracting scent. Once per day, as a spell-like ability, a ghoran with this racial trait can emit an intoxicating aroma that causes creatures within 30 feet to be fascinated for 1d4 rounds. Each target creature within range can attempt a Will save (DC = 10 + half the ghoran's character level + the ghoran's Charisma modifier) to negate the effect.</p>
		)
	},
	{ // 
		"title": "Creator's Legacy",
		"sources": [[5,16]],
		"content": (
			<p>Infused with the druidic magic of their creator, ghorans quickly take to nature-based spells and spellcasting. Ghoran bloodragers and sorcerers with the verdant bloodline treat their Charisma score as 2 points higher for sorcerer spells and class abilities. Ghoran clerics and druids with the Plant domain use their domain powers and spells at +1 caster level. This doesn't give the ghoran early access to level-based powers; it affects only powers that could already be used without this trait.</p>
		)
	},
	{ // 
		"title": "Occult Scion",
		"sources": [[5,16]],
		"content": (
			<p>Created in part from an esoteric ritual, many ghorans are innately sensitive to psychic powers and influences. The ghoran gains <Link to="/feat/Psychic_Sensitivity">Psychic Sensitivity</Link> as a bonus feat and treats Knowledge (arcana) and Knowledge (planes) as class skills.</p>
		)
	},
	{ // 
		"title": "Fecund Earth",
		"sources": [[19,12]],
		"content": (
			<p>Ghorans were created to provide nourishment to creatures, but Ghorus also intended for the ghorans to help the land around them to grow and thrive. Once per day, a ghoran with this racial trait can cast <Link to="/spell/plant_growth">plant growth</Link> as a spell-like ability with a caster level equal to the ghoran's character level.</p>
		)
	},
	{ // 370
		"title": "Magical Absorption",
		"sources": [[19,12]],
		"content": (
			<p>Many ghorans are resistant to magic or able to dispel it. Some ghorans even gain nourishment from absorbing magic. Whenever such a ghoran succeeds at a saving throw against a spell or spell-like ability, she regains 1 hit point per level of the spell, though this affects the ghoran only if she is above 0 hit points. A ghoran can use this ability a number of times per day equal to her level.</p>
		)
	},
	{ // 
		"title": "Spelleater",
		"sources": [[5,16]],
		"content": (
			<p>Ghorans were originally created to survive and thrive in a magic-blasted wasteland, and over the centuries some ghorans have adapted greater abilities to overcome magic in general. Once per day, the ghoran can cast <Link to="/spell/dispel_magic">dispel magic</Link> as a spell-like ability, with a caster level equal to the ghoran's character level. If the ghoran's favored class is a spellcasting class, the ghoran gains a +2 racial bonus on dispel checks.</p>
		)
	},
	{ // 
		"title": "Martial Recollection (Ex)",
		"sources": [[5,16]],
		"content": (
			<p>The personal history of many ghorans is scarred with desperate struggles for survival, and memories of that conflict are deeply ingrained within their seeds. Whenever ghorans with this racial trait grow new bodies from their seeds, they reselect all combat feats known instead of reallocating skill ranks.</p>
		)
	},
	{ // 
		"title": "Deep Gillman",
		"sources": [[21,215]],
		"content": (
			<p>Some gillmen live in the deeper ocean and almost never visit the land above the sea. Such gillmen gain darkvision to a range of 60 feet and resist cold 5, in order to survive the lightless depths.</p>
		)
	},
	{ // 
		"title": "Slimehunter",
		"sources": [[0,188]],
		"content": (
			<p>Gillmen with this trait are from lineages that have fought against aboleths since the aberrations rescued their human ancestors. They receive a +2 racial bonus on saving throws against aboleth spells, spell-like abilities, and supernatural abilities.</p>
		)
	},
	{ // 375
		"title": "Taskmaster",
		"sources": [[7,9]],
		"content": (
			<p>The aboleth fleshcrafters created some gillmen as overseers among their kin, allowing them to exude pheromones into the air or water. Generations later, the descendants of these taskmaster gillmen retain the ability to influence others. Gillmen with this trait gain a +2 racial bonus on Diplomacy checks.</p>
		)
	},
	{ // 
		"title": "Truthseer",
		"sources": [[7,9]],
		"content": (
			<p>Gillmen with this racial trait gain a +2 racial bonus on saving throws against non-aboleth illusion spells or effects, but they take a -2 penalty on such saving throws against aboleth sources.</p>
		)
	},
	{ // 
		"title": "Venomkissed",
		"sources": [[7,9]],
		"content": (
			<p>Some gillmen display an innate resistance to the toxic creatures of the deep. In gillman communities, venomkissed gillmen take on the dangerous task of domesticating jellyfish, octopuses, sea snakes, and other venomous creatures. Solitary venomkissed gillmen make their homes near beds of poisonous coral and anemones, using the creatures as natural defense. Gillmen with this racial trait gain a +2 racial saving throw bonus against poison.</p>
		)
	},
	{ // 
		"title": "Riverfolk",
		"sources": [[0,188]],
		"content": (
			<p>Some gillmen groups live in colonies along vast riverways, and have adapted to living on land for much longer periods. Gillmen with this trait have a thin coating of natural oil that keeps their skin from cracking even without water. However, this natural oil also makes such gillmen particularly susceptible to flames, and they gain vulnerability to fire.</p>
		)
	},
	{ // 
		"title": "Submerged",
		"sources": [[7,9]],
		"content": (
			<p>Gillmen who live in deep water are accustomed to the gloom of the depths. Though these gillmen can venture onto land, they are uncomfortable doing so and must return to the ocean sooner than other gillmen. Gillmen with this racial trait gain low-light vision but must submerge themselves in water every 12 hours or die within 2d4 hours.</p>
		)
	},
	{ // 380
		"title": "Throwback",
		"sources": [[0,188]],
		"content": (
			<p>Some gillmen are throwbacks to their land-dwelling human ancestors. Gillmen with this racial trait do not have the amphibious trait, have the human subtype instead of the aquatic subtype, have no swim speed or bonuses to the Swim skill, cannot breathe water, and do not have the water dependent racial trait.</p>
		)
	},
	{ // 
		"title": "Bond to the Land",
		"sources": [[0,32]],
		"content": (
			<p>Some gnomes have strong ties to specific kinds of terrain, as a holdover from their fey origins. These gnomes gain a +2 dodge bonus to AC when in a specific terrain type selected from the ranger list of <Link to="/ability/favored_terrain">favored terrains</Link>. This choice is made at character creation, and cannot be changed.</p>
		)
	},
	{ // 
		"title": "Eternal Hope",
		"sources": [[0,32],[2,14]],
		"content": (
			<p>Gnomes rarely lose hope and are always confident that even hopeless situations will work out. Gnomes with this racial trait receive a +2 racial bonus on saving throws against fear and despair effects. Once per day, after rolling a 1 on a d20, the gnome may reroll and use the second result.</p>
		)
	},
	{ // 
		"title": "Gift of Tongues",
		"sources": [[0,32],[2,15]],
		"content": (
			<p>Gnomes love <Link to="/misc/languages">languages</Link> and learning about those they meet. Gnomes with this racial trait gain a +1 bonus on Bluff and Diplomacy checks, and they learn one additional language every time they put a rank in the Linguistics skill.</p>
		)
	},
	{ // 
		"title": "Master Tinker",
		"sources": [[0,32],[2,15]],
		"content": (
			<p>Gnomes experiment with all manner of mechanical devices. Gnomes with this racial trait gain a +1 bonus on Disable Device and Knowledge (engineering) checks. They are treated as proficient with any weapon they have personally crafted.</p>
		)
	},
	{ // 385
		"title": "Shadow Foe",
		"sources": [[8,39]],
		"content": (
			<p>Gnomes with this trait receive a +1 bonus on attack rolls and to their AC against humanoids of the dark folk and wayang subtypes, and outsiders native to the Shadow Plane.</p>
		)
	},
	{ // 
		"title": "Warden of Nature",
		"sources": [[0,33],[2,15]],
		"content": (
			<p>Gnomes must often protect their homes against unnatural or pestilential infestations. Gnomes with this racial trait gain a +2 dodge bonus to AC against aberrations, oozes, and vermin, and a +1 bonus on attack rolls against them because of their special training.</p>
		)
	},
	{ // 
		"title": "Dirty Trickster",
		"sources": [[21,211]],
		"content": (
			<p>All gnomes love pranks, but some specialize in those improvised during battle. These gnomes gain a +2 racial bonus on dirty trick combat maneuvers. They need not meet the Intelligence requirement to select <Link to="/feat/Combat_Expertise">Combat Expertise</Link>, <Link to="/feat/Improved_Dirty_Trick">Improved Dirty Trick</Link>, and any feat with Improved Dirty Trick as a prerequisite.</p>
		)
	},
	{ // 
		"title": "Fairy Catcher",
		"sources": [[8,39]],
		"content": (
			<p>Some gnomes are especially sensitive to the presence of fey and receive a +2 racial bonus on Perception, Sense Motive, and Survival checks against fey, a +2 racial bonus on saving throws against the spells, spell-like abilities, and supernatural abilities of fey (this bonus stacks with the bonus granted by illusion resistance), and a +2 bonus on caster level checks to overcome the spell resistance of fey.</p>
		)
	},
	{ // 
		"title": "Stalker",
		"sources": [[8,39]],
		"content": (
			<p>Some gnomes become obsessed with specific individuals. Once per day, such a gnome can observe a creature for 10 minutes. After that, she gains a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that creature. She also gains a +1 bonus on weapon attack and damage rolls against that creature. These bonuses last for 1 day.</p>
		)
	},
	{ // 390
		"title": "Shadow Dodger",
		"sources": [[8,39]],
		"content": (
			<p>Gnomes with this trait gain a +4 dodge bonus to their AC against incorporeal creatures and partially real creatures and objects, such as those created by shadow conjuration, but only if successfully disbelieved.</p>
		)
	},
	{ // 
		"title": "Bleachling Magic",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes with this racial trait treat their caster level as 1 higher for the purposes of divination spells they cast. Additionally, if the gnome has a Wisdom or Charisma score of 11 or higher, she also gains the ability to cast <Link to="/spell/charm_animal">charm animal</Link> as a spell-like ability three times per day. The caster level for this effect is equal to the gnome's level, and the DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.</p>
		)
	},
	{ // 
		"title": "Faerie Dragon Magic",
		"sources": [[14,10]],
		"content": (
			<p>Some gnomes ally with capricious faerie dragons or share a supernatural kinship with these enigmatic creatures. Gnomes with this trait add 1 to the DCs of saves against the illusion spells they cast. Additionally, a gnome with a Charisma score of 11 or higher can use each of the following spell-like abilities once per day: <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/grease">grease</Link>, and <Link to="/spell/silent_image">silent image</Link>. The caster level for these effects is equal to the gnome's character level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.</p>
		)
	},
	{ // 
		"title": "Fell Magic",
		"sources": [[0,32]],
		"content": (
			<p>Gnomes add +1 to the DC of any saving throws against necromancy spells that they cast. Gnomes with Wisdom scores of 11 or higher also gain the following spell-like abilities: 1/day-<Link to="/spell/bleed">bleed</Link>, <Link to="/spell/chill_touch">chill touch</Link>, <Link to="/spell/detect_poison">detect poison</Link>, and <Link to="/spell/touch_of_fatigue">touch of fatigue</Link>. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Wisdom modifier.</p>
		)
	},
	{ // 
		"title": "Fey-Tongued",
		"sources": [[12,4]],
		"content": (
			<p>Gnomes with this trait gain <Link to="/spell/haunted_fey_aspect">haunted fey aspect</Link> and <Link to="/spell/speak_with_plants">speak with plants</Link> instead of <Link to="/spell/dancing_lights">dancing lights</Link> and <Link to="/spell/speak_with_animals">speak with animals</Link> as spell-like abilities from the gnome magic racial trait.</p>
		)
	},
	{ // 395
		"title": "Genial Magic",
		"sources": [[31,14]],
		"content": (
			<p>Gnomes with this racial trait add 1 to the DC of saving throws against enchantment spells that they cast. Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day-<Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/guidance">guidance</Link>, <Link to="/spell/message">message</Link>, and <Link to="/spell/prestidigitation">prestidigitation</Link>. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.</p>
		)
	},
	{ // 
		"title": "Utilitarian Magic",
		"sources": [[21,211]],
		"content": (
			<p>Some gnomes develop practical magic to assist them with their obsessive projects. These gnomes add 1 to the DC of any saving throws against transmutation spells they cast. If their Intelligence score is 11 or higher, they also gain the following spell-like abilities: 1/day-<Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/open/close">open/close</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>, and <Link to="/spell/unseen_servant">unseen servant</Link>. The DC for these spells is equal to 10 + the spell's level + the gnome's Intelligence modifier.</p>
		)
	},
	{ // 
		"title": "Magical Linguist",
		"sources": [[0,32],[2,15]],
		"content": (
			<p>Gnomes study languages in both their mundane and supernatural manifestations. Gnomes with this racial trait add +1 to the DC of spells they cast with the language-dependent descriptor or those that create glyphs, symbols, or other magical writings. They gain a +2 racial bonus on saving throws against such spells. Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day-<Link to="/spell/arcane_mark">arcane mark</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/message">message</Link>, <Link to="/spell/read_magic">read magic</Link>. The caster level for these effects is equal to the gnome's level.</p>
		)
	},
	{ // 
		"title": "Pyromaniac",
		"sources": [[0,33],[2,15]],
		"content": (
			<p>Gnomes with this racial trait are treated as one level higher when casting spells with the fire descriptor, using granted powers of the Fire domain, using the bloodline powers of the fire elemental bloodline or the revelations of the oracle's flame mystery, and determining the damage of alchemist bombs that deal fire damage (this ability does not give gnomes early access to level-based powers; it only affects the powers they could use without this ability). Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day-<Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/flare">flare</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>, <Link to="/spell/produce_flame">produce flame</Link>. The caster level for these effects is equal to the gnome's level; the DCs are Charisma-based.</p>
		)
	},
	{ // 
		"title": "Fey Magic (HftF)",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes with this racial trait increase the DC of spells of the compulsion subschool they cast by 1. Additionally, if the gnome has a Charisma score of 11 or higher, she also gains the following spell-like abilities: 1/ day-<Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/entangle">entangle</Link>, and <Link to="/spell/prestidigitation">prestidigitation</Link>. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.</p>
		)
	},
	{ // 400
		"title": "Vivacious",
		"sources": [[21,211]],
		"content": (
			<p>Some gnomes retain a trace of the vitality of the First World. These gnomes recover 50% more hit points (minimum 1) whenever they recover hit points from rest. Whenever they are healed of hit point damage by a spell, they heal an additional amount equal to 1/2 the spell's caster level (minimum 0). The extra healing does not apply to spells that grant <Link to="/umr/fast_healing">fast healing</Link> or similar effects.</p>
		)
	},
	{ // 
		"title": "Bleachling",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes who have survived the Bleaching are immune to effects of the Bleaching thereafter. These gnomes gain two favored classes: druid, and their choice of any other class. They lose all spell-like abilities granted by the gnome magic racial trait except <Link to="/spell/speak_with_animals">speak with animals</Link>, but they can use their <Link to="/spell/speak_with_animals">speak with animals</Link> spell-like ability three times per day.</p>
		)
	},
	{ // 
		"title": "Explorer",
		"sources": [[0,32]],
		"content": (
			<p>Many gnomes are obsessed with seeing as much of the world as possible, rather than perfecting some specific talent or vocation. These gnomes gain a +2 racial bonus on Climb checks and checks for one Knowledge skill of their choice.</p>
		)
	},
	{ // 
		"title": "Wright",
		"sources": [[21,211]],
		"content": (
			<p>Some gnomes prefer to use their natural talents with mechanisms to drive machines. These gnomes gain a +2 racial bonus on driving checks and on Craft checks to build or repair vehicles.</p>
		)
	},
	{ // 
		"title": "Intrepid Settler",
		"sources": [[21,211]],
		"content": (
			<p>Some gnomes add to the thrill of living by settling in precarious places such as the flotsam of Gogpodda or the treehouses of Omesta. These intrepid gnomes gain a +2 racial bonus on saving throws against fear effects and on Acrobatics, Climb, and Swim checks.</p>
		)
	},
	{ // 405
		"title": "Knack with Poison",
		"sources": [[0,32]],
		"content": (
			<p>Some gnomes have an instinctive understanding of poisons and their uses. Gnomes gain a +2 racial bonus on Fortitude saves against poison and a +2 bonus on Craft (alchemy) checks to make poison. The bonus on Fortitude saving throws against poisons increases to +4 if the gnome accidentally poisons himself when applying or readying the substance.</p>
		)
	},
	{ // 
		"title": "Nature Affinity",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes with this racial trait gain a +2 racial bonus on Fortitude saves against diseases and poisons inflicted by fey, plants, and forest-related hazards.</p>
		)
	},
	{ // 
		"title": "Architectural Ingenuity",
		"sources": [[21,211]],
		"content": (
			<p>Some gnomes demonstrate incredible talent for building and adjusting structures. These gnomes gain a +2 racial bonus on Knowledge (engineering) checks and on Craft and Perception checks related to structures (including structural traps).</p>
		)
	},
	{ // 
		"title": "Inquisitive",
		"sources": [[8,39]],
		"content": (
			<p>Gnomes have a knack for being in places they shouldn't be. Gnomes with this trait gain a +2 racial bonus on Disable Device and Escape Artist checks.</p>
		)
	},
	{ // 
		"title": "Darkvision",
		"sources": [[0,32]],
		"content": (
			<p>Some gnome strains have lived in the underground depths for so long they have given up on light entirely and gained darkvision with a range of 60 feet.</p>
		)
	},
	{ // 410
		"title": "Academician",
		"sources": [[0,32],[2,14]],
		"content": (
			<p>Some gnomes are more academically inclined than their kin. Gnomes with this racial trait gain a +2 bonus on any single Knowledge skill.</p>
		)
	},
	{ // 
		"title": "Artistic",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes with this racial trait gain a +2 racial bonus on a Perform skill of their choice.</p>
		)
	},
	{ // 
		"title": "Fey Magic (HotW)",
		"sources": [[28,5]],
		"content": (
			<p>The character has a mystic connection to one terrain type, selected from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities.</p>
		)
	},
	{ // 
		"title": "Nosophobia",
		"sources": [[12,12]],
		"content": (
			<p>Gnomes are humanoid, rather than fey, and are therefore not particularly susceptible to the Darkblight contagion afflicting the fey of the Fangwood. Nevertheless, many gnomes grow up fearing its taint and are obsessive about training their bodies to stave off illness of all kinds. These gnomes gain a +4 bonus on Fortitude saves against disease and poison, including magical diseases.</p>
		)
	},
	{ // 
		"title": "Student of the City",
		"sources": [[30,8]],
		"content": (
			<p>Gnomes of the city learn all they can from newcomers and tend to make contacts in all quarters. They gain a +2 racial bonus on Knowledge (local) checks, and can use that skill to gather information in place of Diplomacy.</p>
		)
	},
	{ // 415
		"title": "Fey Fortitude",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes with this racial trait are infused with a connection to life. They gain a +2 racial bonus on saves to resist death effects.</p>
		)
	},
	{ // 
		"title": "Sound Mimicry",
		"sources": [[27,16]],
		"content": (
			<p>Gnomes with this racial trait are skilled at imitating sounds and voices. Doing so requires a Bluff check opposed by the listener's Sense Motive check, and the gnome gains a +4 racial bonus on Bluff checks to mimic sounds (including accents and speech patterns) she has listened to for at least 10 minutes. Listeners unfamiliar with a particular sound take a -4 penalty on the Sense Motive check.</p>
		)
	},
	{ // 
		"title": "Cave Crawler",
		"sources": [[0,114]],
		"content": (
			<p>Some goblins are born and raised in caves and rarely see the light of day. Goblins with this trait gain a climb speed of 10 feet and the +8 racial bonus on Climb checks associated with having a climb speed. Goblins with this racial trait have a base speed of 20 feet.</p>
		)
	},
	{ // 
		"title": "City Scavenger",
		"sources": [[0,114]],
		"content": (
			<p>Goblins who live within the boundaries of human cities survive by scavenging for refuse and hunting stray animals. Goblins with this trait gain a +2 racial bonus on Perception and Survival checks, and can use Survival to forage for food while in a city.</p>
		)
	},
	{ // 
		"title": "Eat Anything",
		"sources": [[0,115]],
		"content": (
			<p>Raised with little or no proper food, many goblins have learned to survive by eating whatever they happen across and can digest nearly anything without getting sick. Goblins with this trait gain a +4 on Survival checks to forage for food and a +4 racial bonus on saves versus effects that cause the nauseated or sickened conditions.</p>
		)
	},
	{ // 420
		"title": "Hard Head, Big Teeth",
		"sources": [[0,115]],
		"content": (
			<p>Goblins are known for their balloon-like heads and enormous maws, but some have even more exaggeratedly large heads filled with razor-sharp teeth. Goblins with this trait gain a bite attack as a primary natural attack that deals 1d4 points of damage.</p>
		)
	},
	{ // 
		"title": "Junk Tinker",
		"sources": [[21,215]],
		"content": (
			<p>Goblins use ramshackle equipment and vehicles that seem like they should never function. Goblins gain a +2 racial bonus on driving checks and on Craft checks to build or repair weapons or vehicles without the proper tools. They can make the attempt with any material that can hold the right shape for a few uses, but normally unfit materials produce items with the <Link to="/misc/fragile">fragile</Link> quality. They also have a +4 racial bonus to Ride checks.</p>
		)
	},
	{ // 
		"title": "Over-Sized Ears",
		"sources": [[0,115]],
		"content": (
			<p>While goblins' ears are never dainty, these goblins have freakishly large ears capable of picking up even the smallest sounds. Goblins with this racial trait gain a +4 bonus on Perception checks.</p>
		)
	},
	{ // 
		"title": "Tree Runner",
		"sources": [[0,115]],
		"content": (
			<p>In trackless rain forests and marshes, it can be difficult to find dry ground to build on. Goblin tribes living in such areas have learned to live in the treetops. These goblins gain a +4 racial bonus on Acrobatics and Climb checks.</p>
		)
	},
	{ // 
		"title": "Weapon Familiarity",
		"sources": [[0,115]],
		"content": (
			<p>Goblins' traditional weapons are the <Link to="/eq_weapon/dogslicer">dogslicer</Link> and the <Link to="/eq_weapon/horsechopper">horsechopper</Link>, weapons designed specifically to bring down their most hated foes. Goblins with this trait are proficient with the dogslicer and the horsechopper, and treat any weapon with the word \"goblin\" in it as martial weapons.</p>
		)
	},
	{ // 425
		"title": "Jumper",
		"sources": [[0,190]],
		"content": (
			<p>Gripplis with this trait are always considered to have a running start when making Acrobatics checks to jump.</p>
		)
	},
	{ // 
		"title": "Glider",
		"sources": [[0,190]],
		"content": (
			<p>Gripplis' aerodynamic bodies and thick webbing between the toes enable a falling grippli to treat the distance fallen as half the actual distance. The grippli can steer himself while falling, moving horizontally up to a number of feet equal to half the vertical distance fallen. The grippli cannot use this trait if it is wearing heavy armor, is carrying a heavy load, or is unable to react to the fall (such as being helpless).</p>
		)
	},
	{ // 
		"title": "Toxic Skin (Ex)",
		"sources": [[0,190]],
		"content": (<>
			<p>Once per day as a swift action, a grippli can create a poison that can be applied to a weapon or delivered as a touch attack. Alternatively, the grippli can smear the poison on its own body as a standard action, affecting the first creature to hit it with an unarmed strike or natural weapon. The poison loses its potency after 1 hour. The grippli is immune to its own poison.</p>
			<Block titled>
			<Row><Cell className="has-icon"><Link to="/rules/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></Link><span>Grippli Poison</span></Cell></Row>
			<Row><Cell>Type</Cell><Cell>Skin or weapon-contact or injury</Cell></Row>
			<Row><Cell>Save DC</Cell><Cell>Fort 10 + 1/2 the grippli's HD + their Con modifier</Cell></Row>
			<Row><Cell>Onset</Cell><Cell>immediate</Cell></Row>
			<Row><Cell>Frequency</Cell><Cell>1/round for 6 rounds</Cell></Row>
			<Row><Cell>Effect</Cell><Cell>1d2 <Link to="/rule/dex_damage">Dex damage</Link></Cell></Row>
			<Row><Cell>Cure</Cell><Cell>1 save</Cell></Row></Block>
		</>)
	},
	{ // 
		"title": "Defensive Training",
		"sources": [[21,215]],
		"content": (
			<p>Gripplis of Golarion, common in the Valashmai Jungle, often live in close proximity to very large animals and dangerous creatures they must learn to avoid in order to survive. They gain a +2 dodge bonus to AC against Large or larger animals and magical beasts.</p>
		)
	},
	{ // 
		"title": "Princely",
		"sources": [[0,190]],
		"content": (
			<p>The grippli gains proficiency with rapiers and a +2 racial bonus on Diplomacy and Intimidate checks.</p>
		)
	},
	{ // 430
		"title": "Kindred-Raised",
		"sources": [[21,212]],
		"content": (
			<p>While most think of people with one human and one elven parent when they think of half-elves, some half-elves are raised by two half-elven parents. Such half-elves feel less like outsiders, making them more confident, but less adaptable without the exposure to a human parent. They gain a +2 bonus to Charisma and one other ability score of their choice.</p>
		)
	},
	{ // 
		"title": "Alert for Betrayal",
		"sources": [[12,12]],
		"content": (
			<p>Some half-elves' skepticism of apparent allies makes them cynical and stubborn. These half-elves gain a +2 racial bonus on saves against illusion spells and effects. Perception and Sense Motive are class skills for them.</p>
		)
	},
	{ // 
		"title": "Ancestral Arms",
		"sources": [[0,42],[2,17]],
		"content": (
			<p>Some half-elves receive training in an unusual weapon. Half-elves with this racial trait receive <Link to="/feat/Exotic_Weapon_Proficiency">Exotic Weapon Proficiency</Link> or <Link to="/feat/Martial_Weapon_Proficiency">Martial Weapon Proficiency</Link> with one weapon as a bonus feat at 1st level.</p>
		)
	},
	{ // 
		"title": "Drow-Trained",
		"sources": [[17,7]],
		"content": (
			<p>Darkborn (half-elves descended from drow) are proficient with the hand crossbow, rapier, and shortsword.</p>
		)
	},
	{ // 
		"title": "Dual Minded",
		"sources": [[0,42],[2,17]],
		"content": (
			<p>The mixed ancestry of some half-elves makes them resistant to mental attacks. Half-elves with this racial trait gain a +2 bonus on all Will saving throws.</p>
		)
	},
	{ // 435
		"title": "Integrated",
		"sources": [[0,42],[2,17]],
		"content": (
			<p>Many half-elves are skilled in the art of ingratiating themselves into a community as if they were natives. Half-elves with this racial trait gain a +1 bonus on Bluff, Disguise, and Knowledge (local) checks.</p>
		)
	},
	{ // 
		"title": "Mordant Envoy",
		"sources": [[27,21],[33,7]],
		"content": (
			<p>Spireborn add +1 to the caster level of any transmutation spells they cast. Spireborn with a Charisma score of 11 or higher also gain the following spell-like abilities: 1/day-<Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/erase">erase</Link>, and <Link to="/spell/read_magic">read magic</Link>. The caster level for these effects is equal to the Spireborn's character level.</p>
		)
	},
	{ // 
		"title": "Sea Legs",
		"sources": [[21,212]],
		"content": (
			<p>Many half-elves find their way onto the water early in their youth, whether they live with trader families in or near Kyonin, work as smugglers around Lake Encarthan or the Inner Sea, or plunder alongside pirates. These half-elves receive a +2 racial bonus on Swim checks, as well as a +4 racial bonus on Acrobatics checks to move on narrow or slippery surfaces, and on Climb checks on docks and ships.</p>
		)
	},
	{ // 
		"title": "Sociable",
		"sources": [[0,42],[2,17]],
		"content": (
			<p>Half-elves are skilled at charming others and recovering from faux pas. If half-elves with this racial trait attempt to change a creature's attitude with a Diplomacy check and fail by 5 or more, they can try to influence the creature a second time even if 24 hours have not passed.</p>
		)
	},
	{ // 
		"title": "Starchild",
		"sources": [[8,39]],
		"content": (
			<p>Some half-elves descend from elves who are not from this world, but rather visitors from another world, plane, or dimension. Half-elves with this trait gain <Link to="/feat/Psychic_Sensitivity">Psychic Sensitivity</Link> as a bonus feat at 1st level.</p>
		)
	},
	{ // 440
		"title": "Weapon Familiarity",
		"sources": [[21,212]],
		"content": (
			<p>Half-elves raised among elves often feel pitied and mistrusted by their longer-lived kin, and yet they receive training in elf weapons. They gain the elf's weapon familiarity trait.</p>
		)
	},
	{ // 
		"title": "Dragon Soul",
		"sources": [[14,11]],
		"content": (
			<p>Some half-elves have forsaken a part of their lineage by embracing a more distant connection to dragons. Half-elves with this trait choose to count as either elves or humans for any effect regarding race. Additionally, half-elves with this trait also count as dragons for the purposes of effects targeting creatures by type (such as a ranger's <Link to="/ability/favored_enemy">favored enemy</Link> and <Link to="/magic_enh/bane">bane</Link> weapons, but not for prerequisites), and gain a +2 racial bonus on all saving throws against fear, sleep and paralysis effects.</p>
		)
	},
	{ // 
		"title": "Eye for Opportunity",
		"sources": [[21,211]],
		"content": (
			<p>Constantly facing the rough edges of two societies, some half-elves develop a knack for finding overlooked opportunities. They gain a +1 racial bonus on attacks of opportunity.</p>
		)
	},
	{ // 
		"title": "Spell Resistance",
		"sources": [[4,15]],
		"content": (
			<p>Some drow-blooded half-elves share the drow resistance to magic. A half-elf with this racial trait gains spell resistance equal to 6 + her character level.</p>
		)
	},
	{ // 
		"title": "Round Ears",
		"sources": [[8,39]],
		"content": (
			<p>Sometimes half-elves are born with no obvious elven features. Their parents may even be humans with only faint traces of elven blood. They gain the human's skilled racial trait. In addition, they receive a +4 racial bonus on Disguise checks to appear human.</p>
		)
	},
	{ // 445
		"title": "Drow Magic",
		"sources": [[0,42]],
		"content": (
			<p>A few half-elves with drow ancestry exhibit the innate magic of that race. Half-elves with this trait have drow blood somewhere in their background, and can cast <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/darkness">darkness</Link>, and <Link to="/spell/faerie_fire">faerie fire</Link> each once per day, using the half-elf's character level as the caster level for these spell-like abilities.</p>
		)
	},
	{ // 
		"title": "Lesser Spell-Like Abilities",
		"sources": [[4,14]],
		"content": (
			<p>Half-elves with this trait can cast <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/darkness">darkness</Link> and <Link to="/spell/faerie_fire">faerie fire</Link> once each per day. The caster level for these effects is equal to the user's character level.</p>
		)
	},
	{ // 
		"title": "Reflexive Improvisation",
		"sources": [[21,212]],
		"content": (
			<p>Half-elves raised among elves often stumble unprepared into each new stage of life because their elven relatives are unaccustomed to the speed of their maturation. They gain a +2 racial bonus on untrained skill checks.</p>
		)
	},
	{ // 
		"title": "Water Child",
		"sources": [[0,42],[2,17]],
		"content": (
			<p>Some half-elves are born of elves adapted to life on or near the water. These half-elves gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language.</p>
		)
	},
	{ // 
		"title": "Drow Heritage",
		"sources": [[4,14]],
		"content": (
			<p>Half-elves with this trait count as drow for the purposes of any effect related to race, including prerequisites.</p>
		)
	},
	{ // 450
		"title": "Hidden Half-Breed",
		"sources": [[4,14]],
		"content": (
			<p>In benign communities, half-elves endure assumptions and bigotry based on ignorance and suspicion. In drow society, public knowledge of one's mixed ancestry can mean a cruel death. Half-elves with this trait gain a +2 bonus on Bluff and Disguise checks to pass as fullblooded drow, elves, or humans.</p>
		)
	},
	{ // 
		"title": "Cold-Honed",
		"sources": [[27,22],[33,7]],
		"content": (
			<p>Snowborn can move through natural snow and ice at their normal speed and gain a +4 racial bonus on Fortitude saves to avoid nonlethal damage from cold environments.</p>
		)
	},
	{ // 
		"title": "Dreamer",
		"sources": [[8,39]],
		"content": (
			<p>Half-elves with this trait gain a +2 racial saving throw bonus against illusion spells and effects. In addition, when entering a dreamscape in a lucid body, a half-elf with this racial trait treats her Charisma score as 2 points higher for the purpose of effects related to the Dimension of Dreams.</p>
		)
	},
	{ // 
		"title": "Sophisticate",
		"sources": [[21,212]],
		"content": (
			<p>Half-elves who strive to embody the culture in which they live develop a keen instinct for the ebb and flow of fashions, fads, and political trends. They gain a +2 racial bonus on Knowledge (history) and Knowledge (local) checks and can use those skills untrained even for checks with a DC of 10 or more.</p>
		)
	},
	{ // 
		"title": "Thinblood Resistance",
		"sources": [[27,20],[33,6]],
		"content": (
			<p>Darkborn are accustomed to torture at the hands of their drow forebears and gain a +2 racial bonus on Fortitude saves against poison and disease, including magical diseases. Darkborn also gain the <Link to="/ability/poison_use">poison use</Link> ability and never risk poisoning themselves when applying poison to a weapon.</p>
		)
	},
	{ // 455
		"title": "Elf-Scorned",
		"sources": [[21,211]],
		"content": (
			<p>Many half-elves, especially half-drow and half-Ekujae, are rejected by their elven parents and feel nothing but hatred and fear toward their inhuman ancestors. They gain a +1 racial bonus on attack rolls and a +2 dodge bonus to AC against elves.</p>
		)
	},
	{ // 
		"title": "Disregarded",
		"sources": [[12,5]],
		"content": (
			<p>Half-elves with this trait practice magical techniques to conceal their fey features from casual scrutiny. These half-elves treat their caster level as 1 higher when casting illusion spells. Half-elves with a Charisma score of 11 or higher also gain the following spell-like abilities 1/day-<Link to="/spell/guidance">guidance</Link>, <Link to="/spell/innocence">innocence</Link>, <Link to="/spell/lullaby">lullaby</Link>, and <Link to="/spell/mage_hand">mage hand</Link>. The caster level for these effects is equal to the half-elf's level. The DC for these spells is equal to 10 + the spell's level + the half-elf's Charisma modifier.</p>
		)
	},
	{ // 
		"title": "Fraudulent",
		"sources": [[31,15]],
		"content": (
			<p>To obtain and keep a position at court, some half-elves aren't shy about exaggerating or fabricating claims to nobility. Half-elves with this racial trait gain a +1 racial bonus on Bluff checks, Knowledge (nobility) checks, and Linguistics checks to create forgeries. They need to spend only half as much on accessories (such as the jewelry required to accessorize a courtier's or noble's outfit) to appear suitable in a courtly setting.</p>
		)
	},
	{ // 
		"title": "Wary",
		"sources": [[0,42]],
		"content": (
			<p>Many half-elves have spent their long lives moving from place to place, often driven out by the hostility of others. Such experiences have made them wary of others' motivations. Half-elves with this trait gain a +1 racial bonus on Sense Motive and Bluff checks.</p>
		)
	},
	{ // 
		"title": "Mismatched",
		"sources": [[8,39]],
		"content": (
			<p>Rather than having bodily and facial features that are a blend of elven and human, or tending towards one parent or the other, a rare few half-elves have a strange combination of features. They have noticeable mismatched eyes and ears, as well as uneven limbs. Half-elves with this trait take a -2 penalty on Reflex saves but receive a +4 racial bonus on initiative checks.</p>
		)
	},
	{ // 460
		"title": "Drow-Blooded",
		"sources": [[0,42]],
		"content": (
			<p>Some half-elves born of drow parents exhibit more drow traits than others - particularly many of the physical features of the drow - and have darkvision 60 feet and light blindness.</p>
		)
	},
	{ // 
		"title": "Child of the Sea",
		"sources": [[27,20],[33,5]],
		"content": (
			<p>Shoreborn gain a +4 racial bonus on Swim checks as well as on Profession (sailor) checks and Wisdom checks to pilot a sea vessel. They also have an innate sense of direction and can never get lost at sea.</p>
		)
	},
	{ // 
		"title": "Arcane Training",
		"sources": [[0,42],[2,17]],
		"content": (
			<p>Half-elves occasionally seek tutoring to help them master the magic in their blood. Half-elves with this racial trait have only one favored class, and it must be an arcane spellcasting class. They can use spell trigger and spell completion items for their favored class as if one level higher (or as a 1st-level character if they have no levels in that class).</p>
		)
	},
	{ // 
		"title": "Flexible Half-Breed",
		"sources": [[4,14]],
		"content": (
			<p>Once per day, half-elves with this trait can use <Link to="/spell/alter_self">alter self</Link> as a spell-like ability to appear as humans, drow, or elves. The half-elf can change the race of this form each time she uses this ability, but the specific form for each race is static. She gains a +10 bonus to Disguise checks to appear as a member of the chosen race. The caster level for this ability is equal to the character's Hit Dice.</p>
		)
	},
	{ // 
		"title": "Jungle Affinity",
		"sources": [[27,21],[33,6]],
		"content": (
			<p>Wildborn gain a +4 racial bonus on Stealth checks while within jungle terrain and can move through natural difficult terrain in a jungle at their normal speed.</p>
		)
	},
	{ // 465
		"title": "Multidisciplined",
		"sources": [[8,39]],
		"content": (
			<p>Born to two races, half-elves have a knack for combining different magical traditions. If a half-elf with this racial trait has spellcasting abilities from at least two different classes, the effects of spells she casts from all her classes are calculated as though her caster level were 1 level higher, to a maximum of her character level.</p>
		)
	},
	{ // 
		"title": "Inspire Imitation",
		"sources": [[30,8]],
		"content": (
			<p>Whenever a half-elf succeeds at a skill check, she can inspire imitators as a swift action. Any ally within 30 feet who witnesses the successful check and attempts the same check within the next minute gains a +2 bonus on the check as if from the aid another action.</p>
		)
	},
	{ // 
		"title": "Crystalline Form",
		"sources": [[0,144]],
		"content": (
			<p>Oreads with this trait gain a +2 racial bonus to AC against rays thanks to their reflective crystalline skin. In addition, once per day, they can deflect a single ray attack targeted at them as if they were using the <Link to="/feat/Deflect_Arrows">Deflect Arrows</Link> feat.</p>
		)
	},
	{ // 
		"title": "Earth Insight",
		"sources": [[0,144]],
		"content": (
			<p>Oread spellcasters sometimes find that their elemental heritage makes creatures of earth more willing to serve them. Summon monster and summon nature's ally spells that such oreads cast last 2 rounds longer than normal when used to summon creatures with the earth subtype.</p>
		)
	},
	{ // 
		"title": "Fertile Soil",
		"sources": [[0,144]],
		"content": (
			<p>Oread sorcerers with the verdant bloodline treat their Charisma score as 2 points higher for all sorcerer spells and class abilities. Oread clerics with the Plant domain use their domain powers and spells at +1 caster level.</p>
		)
	},
	{ // 470
		"title": "Oread Gem Magic",
		"sources": [[35,8]],
		"content": (<>
			<p>Oreads' proclivity for long spans of study and concentration makes them natural wizards, witches, and oracles. Oreads with this racial trait can augment their earth-related spells and spell-like abilities through the use of precious and semiprecious gemstones as additional material components. The gems are destroyed in the process, granting the spell the listed effects in addition to its normal effects unless otherwise noted. Only one instance of oread gem magic can be applied to a spell at a time; excess expended gems do not stack.</p>
			<blockquote>
				<p><strong className="hl"><Link to="/spell/binding_earth">Binding Earth:</Link></strong> +1 damage; +1 to DC of Strength checks. <strong>Cost:</strong> Garnet worth 50 gp.</p>
				<p><strong className="hl"><Link to="/spell/binding_earth_mass">Binding Earth, Mass:</Link></strong> As binding earth augmentation, affecting all targets of the augmented spell. <strong>Cost:</strong> Garnets worth 250 gp.</p>
				<p><strong className="hl"><Link to="/spell/calcific_touch">Calcific Touch:</Link></strong> +1 Dexterity damage. <strong>Cost:</strong> Aquamarine worth 250 gp.</p>
				<p><strong className="hl"><Link to="/spell/clashing_rocks">Clashing Rocks:</Link></strong> +1 damage per damage die. <strong>Cost:</strong> Emeralds worth 1,500 gp.</p>
				<p><strong className="hl"><Link to="/spell/earthquake">Earthquake:</Link></strong> +2 Reflex save DC in whatever application the spell is used; area increases to 100-foot-radius shapeable spread. <strong>Cost:</strong> Jet worth 500 gp.</p>
				<p><strong className="hl"><Link to="/spell/elemental_body_i">Elemental Body:</Link></strong> Duration increases to 10 minutes/level. <strong>Cost:</strong> Amber worth 250 gp for elemental body I, +100 gp per spell level for greater versions.</p>
				<p><strong className="hl"><Link to="/spell/elemental_swarm">Elemental Swarm:</Link></strong> Earth elementals summoned gain the advanced simple template (this does not stack with the <Link to="/feat/Augment_Summoning">Augment Summoning</Link> feat). <strong>Cost:</strong> Rubies worth 1,200 gp.</p>
				<p><strong className="hl"><Link to="/spell/magic_stone">Magic Stone:</Link></strong> Range increment increases by 10 feet. <strong>Cost:</strong> Moonstone worth 25 gp.</p>
				<p><strong className="hl"><Link to="/spell/meld_into_stone">Meld into Stone:</Link></strong> Can bring up to 200 pounds of equipment with you; you can see as normal out of the stone. <strong>Cost:</strong> Peridots worth 150 gp.</p>
				<p><strong className="hl"><Link to="/spell/mighty_fist_of_the_earth">Mighty Fist of the Earth:</Link></strong> Increase unarmed strike damage by one step (to 1d4 in most instances). <strong>Cost:</strong> Sard or sardonyx worth 25 gp.</p>
				<p><strong className="hl"><Link to="/spell/raging_rubble">Raging Rubble:</Link></strong> Rubble deals +1 damage; distraction DC increases by 1. <strong>Cost:</strong> Tourmaline worth 80 gp.</p>
				<p><strong className="hl"><Link to="/spell/shifting_sand">Shifting Sand:</Link></strong> Move area of sands up to 15 feet as a move action. <strong>Cost:</strong> Turquoise worth 125 gp.</p>
				<p><strong className="hl"><Link to="/spell/soften_earth_and_stone">Soften Earth and Stone:</Link></strong> Creatures can move only at a quarter their normal speed (minimum 5 feet) in areas of mud and loose dirt. <strong>Cost:</strong> Fluorite worth 100 gp.</p>
				<p><strong className="hl"><Link to="/spell/spike_stones">Spike Stones:</Link></strong> +1 piercing damage; spikes deal 1 point of bleed damage. <strong>Cost:</strong> Topaz worth 300 gp.</p>
				<p><strong className="hl"><Link to="/spell/stone_shape">Stone Shape:</Link></strong> Shapes that include moving parts have only 5% chance of not working. <strong>Cost:</strong> Opal worth 250 gp.</p>
				<p><strong className="hl"><Link to="/spell/stone_shield">Stone Shield:</Link></strong> If your opponent's attack strikes the stone shield, its full damage roll is also applied to its weapon. Unarmed strikes and natural attacks are not affected. <strong>Cost:</strong> Jade worth 75 gp.</p>
				<p><strong className="hl"><Link to="/spell/stoneskin">Stoneskin:</Link></strong> The cost of this spell's expensive material component can be reduced or increased to affect the spell's power accordingly. With reduced components, the spell grants DR 10/silver (instead of adamantine); with increased components, the spell absorbs 15 points of damage per caster level before it's discharged. <strong>Cost:</strong> Diamonds worth 150 gp (reduced); diamonds worth 500 gp (increased).</p>
			</blockquote>
		</>)
	},
	{ // 
		"title": "Stone in the Blood",
		"sources": [[0,145]],
		"content": (
			<p>Oreads with this racial trait mimic the healing abilities of the mephits, gaining <Link to="/umr/fast_healing">fast healing</Link> 2 for 1 round anytime they are subject to acid damage (the acid damage does not need to overcome the oread's resistances or immunities to activate this ability). The oread can heal up to 2 hit points per level per day with this ability, after which it ceases to function.</p>
		)
	},
	{ // 
		"title": "Granite Skin",
		"sources": [[0,144]],
		"content": (
			<p>Rocky growths cover the skin of oreads with this racial trait. They gain a +1 racial bonus to natural armor.</p>
		)
	},
	{ // 
		"title": "Isolated",
		"sources": [[21,216]],
		"content": (
			<p>Many oreads are loners and raise their families in isolated groups, either in deep caverns or high mountains. They gain a +2 racial bonus on Perception checks and Knowledge (dungeoneering) checks, and they can use Knowledge (dungeoneering) untrained. They begin play speaking only Terran, rather than Common and Terran.</p>
		)
	},
	{ // 
		"title": "Ferrous Growth",
		"sources": [[0,144]],
		"content": (
			<p>Oreads with this racial trait learn how to mimic the magic of their shaitan ancestors. Once per day, such an oread can cause a touched piece of nonmagical iron or steel to grow into an object up to 10 pounds in weight, such as a sword, crowbar, or light steel shield. This object remains in this form for 10 minutes or until broken or destroyed, at which point it shrinks back to its original size and shape.</p>
		)
	},
	{ // 475
		"title": "Mountain-Born",
		"sources": [[0,144]],
		"content": (
			<p>Oreads are drawn to mountains and other high places, and after many generations they've grown well suited to their environment. Oreads with this racial trait gain a +2 racial bonus on Acrobatics checks made to cross narrow ledges and on saves against altitude fatigue and sickness.</p>
		)
	},
	{ // 
		"title": "Treacherous Earth",
		"sources": [[0,145]],
		"content": (
			<p>Once per day, an oread with this racial trait can will the earth to rumble and shift, transforming a 10-foot-radius patch of earth, unworked stone, or sand into an area of difficult terrain, centered on an area the oread touches. This lasts for a number of minutes equal to the oread's level, after which the ground returns to normal.</p>
		)
	},
	{ // 
		"title": "Surface Sprinter",
		"sources": [[15,176]],
		"content": (
			<p>Some ratfolk spend as much time as they can aboveground and become very fast runners. This comes at the cost of their night vision, which becomes less acute after years of sunlight. These ratfolk gain low-light vision and have a base speed of 30 feet.</p>
		)
	},
	{ // 
		"title": "Cleanliness",
		"sources": [[15,176]],
		"content": (
			<p>Ratfolk strive to keep themselves and each other immaculately clean, to make it difficult for disease to spread. A ratfolk with this racial trait gains a +2 bonus on saving throws against disease, and whenever she exceeds the save DC to recover from a disease effect by 5 or more, she is treated as though she had succeeded at two consecutive saving throws.</p>
		)
	},
	{ // 
		"title": "Unnatural",
		"sources": [[0,151]],
		"content": (
			<p>Some ratfolk unnerve normal animals, and train to defend themselves against the inevitable attacks from such creatures. These ratfolk take a -4 penalty on all Charisma-based skill checks to affect creatures of the animal type, and receive a +2 dodge bonus to AC against animals. An animal's starting attitude toward ratfolk is one step worse than normal.</p>
		)
	},
	{ // 480
		"title": "Cheek Pouches",
		"sources": [[15,176]],
		"content": (
			<p>Some ratfolk have developed stretchy cheek pouches that they can use to hold and carry small loads up to 1 cubic foot in volume and 10 pounds in weight, such as light weapons, potions, scrolls, and similar objects. Such a ratfolk can transfer a held object to his cheek pouches or extract an object from his cheek pouches as a swift action. As a move action that provokes an attack of opportunity, the ratfolk can instead massage all of the items held in the cheek pouches onto the ground in the square it occupies. As long as the ratfolk has at least one object in its cheek pouches, its speech is difficult to understand, and it has a 20% spell failure chance when casting spells with verbal components.</p>
		)
	},
	{ // 
		"title": "Cornered Fury",
		"sources": [[0,150]],
		"content": (
			<p>Ratfolk can fight viciously when cut off from friends and allies. Whenever a ratfolk with this racial trait is reduced to half or fewer of his hit points, and has no conscious ally within 30 feet, he gains a +2 racial bonus on melee attack rolls and to Armor Class.</p>
		)
	},
	{ // 
		"title": "Lab Rat",
		"sources": [[15,176]],
		"content": (
			<p>For every ingenious ratfolk inventor, there is another who must inevitably test the invention. Those who survive enough experiments sometimes develop strange metabolic quirks that grant them heightened resilience and, on occasion, fortunate side effects when consuming alchemical or magical draughts. As a result, they gain a +1 racial bonus on saving throws against poison, alchemical weapons, and harmful effects from drinking potions or elixirs. In addition, once per day such a ratfolk can either increase the caster level of a potion he consumes by 1 or double the duration of an alchemical remedy he consumes or applies to himself (to a maximum of 4 hours).</p>
		)
	},
	{ // 
		"title": "Market Dweller",
		"sources": [[21,216]],
		"content": (
			<p>Some ratfolk, especially those of Deepmarket, are practiced at taking advantage of foes. They gain a +2 racial bonus on Bluff, Sense Motive, and Sleight of Hand checks.</p>
		)
	},
	{ // 
		"title": "Scent",
		"sources": [[0,150]],
		"content": (
			<p>Some ratfolk have much more strongly developed senses of smell, instead of keen eyes and ears. These ratfolk have the <Link to="/umr/scent">scent</Link> ability, but take a -2 penalty on all Perception checks based primarily on sight or hearing.</p>
		)
	},
	{ // 485
		"title": "Skulk",
		"sources": [[0,150]],
		"content": (
			<p>Some ratfolk can blend easily into their environments, and move with surprising grace. Ratfolk gain a +2 racial bonus on Stealth checks, and take only a -5 penalty on Stealth checks made to hide from creatures they have distracted with a Bluff check (rather than the normal -10 penalty).</p>
		)
	},
	{ // 
		"title": "Mountaineer",
		"sources": [[21,216]],
		"content": (
			<p>Samsarans, often from Zi Ha, who live their lives in the mountains are immune to <Link to="/rule/altitude_sickness">altitude sickness</Link> and do not lose their Dexterity bonus to AC when making Climb checks or Acrobatics checks to cross narrow or slippery surfaces.</p>
		)
	},
	{ // 
		"title": "Mystic Past Life (Su)",
		"sources": [[0,198]],
		"content": (
			<p>You can add spells from another spellcasting class to the spell list of your current spellcasting class. You add a number of spells equal to 1 + your spellcasting class's key ability score bonus (Wisdom for clerics, and so on). The spells must be the same type (arcane or divine) as the spellcasting class you're adding them to. For example, you could add divine power to your druid class spell list, but not to your wizard class spell list because divine power is a divine spell. These spells do not have to be spells you can cast as a 1st-level character. The number of spells granted by this ability is set at 1st level. Changes to your ability score do not change the number of spells gained.</p>
		)
	},
	{ // 
		"title": "Facsimile",
		"sources": [[3,23]],
		"content": (
			<p>A few shabti are made with such skill they are nearly perfect copies of a mortal. Shabti with this racial trait appear to be human, save perhaps for minor features like unusual skin color. They count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells like <Link to="/spell/charm_person">charm person</Link>).</p>
		)
	},
	{ // 
		"title": "Blank Slate",
		"sources": [[3,23]],
		"content": (
			<p>Some shabti are bereft of memories of their past lives but can accomplish great improvisations. Shabti with this racial trait can, once per day as a free action, treat any skill as though they had a number of ranks equal to half of their character levels for one skill check (minimum 1 rank).</p>
		)
	},
	{ // 490
		"title": "Soul Sympathy",
		"sources": [[3,23]],
		"content": (
			<p>Crafted to suffer punishments intended for their masters, some shabti can use this mortal connection to serve as reciprocal conduits. As an immediate action after being afflicted by temporary negative levels, a shabti with this racial trait can force the creature that inflicted the negative levels to suffer the same cumulative penalties, hit point loss, and caster level reduction. The shabti can use this ability only on an enemy within 60 feet and can share penalties with only one creature at a time. The shabti can sever this link as a free action.</p>
		)
	},
	{ // 
		"title": "Pharaonic Will",
		"sources": [[3,23]],
		"content": (
			<p>Rather than working to influence others, some shabti focus inward. Once per day as an immediate action after failing a save against a charm, compulsion, or fear effect, a shabti with this racial trait can reroll the save with a +2 racial bonus.</p>
		)
	},
	{ // 
		"title": "Cautious Brawler",
		"sources": [[21,216]],
		"content": (
			<p>Because strix are careful to avoid injuring other strix even when they fight with each other, they develop a talent for fighting without causing lasting harm. They gain a +1 racial bonus on damage rolls when dealing nonlethal damage and take no attack penalty when dealing nonlethal damage with a lethal weapon.</p>
		)
	},
	{ // 
		"title": "Dayguard",
		"sources": [[0,200]],
		"content": (
			<p>Familiar with watching over its tribe during the day, the strix gains a +2 racial bonus on Perception checks and treats Perception as a class skill.</p>
		)
	},
	{ // 
		"title": "Frightening",
		"sources": [[0,200]],
		"content": (
			<p>The strix looks particularly menacing and use this to its advantage, gaining a +2 racial bonus on Intimidate checks.</p>
		)
	},
	{ // 495
		"title": "Wing-Clipped",
		"sources": [[0,200]],
		"content": (
			<p>The flight of wing-clipped strix is weaker than normal, whether from deformity or injury. Their fly speed is 20 feet (poor) instead of the normal fly speed, and they must make a DC 30 Fly check to fly upward. Ostracized by their tribes and forced to deal with other races, these strix compensate for their weakness by gaining a +2 racial bonus on Bluff, Climb, and Diplomacy checks.</p>
		)
	},
	{ // 
		"title": "Nimble",
		"sources": [[0,200]],
		"content": (
			<p>The strix receives a +1 racial bonus on Reflex saves.</p>
		)
	},
	{ // 
		"title": "Tough",
		"sources": [[0,200]],
		"content": (
			<p>The strix receives a +1 racial bonus on Fortitude saves.</p>
		)
	},
	{ // 
		"title": "Energy Strike (Su)",
		"sources": [[0,202]],
		"content": (<>
			<p>A suli with this racial trait has a stronger connection to one energy type than to the other three used by sulis. Choose one energy type: acid, cold, electricity, or fire. The suli's elemental assault ability can only deal energy damage of this type. The suli has resistance 5 to this energy type and no racial resistance to the other three types. While her elemental assault is active, the suli gains an additional ability based on the chosen energy type.</p>
			<blockquote>
				<p><strong>Earthfoot (acid):</strong> Whenever the suli moves through difficult terrain related to earth and stone (rubble, mud, sand, and so on), she may move through 5 feet of that difficult terrain each round as if it were normal terrain. This allows the suli to take a 5-foot step into that difficult terrain. Other kinds of difficult terrain (ice, caltrops, foliage, and so on) affect the suli normally.</p>
				<p><strong>Firehand (fire):</strong> Instead of adding damage to a melee attack, the suli may hurl a piece of her arm-flames as if it were a thrown weapon. The suli makes a ranged touch attack; if the attack hits, the target takes 1d6 points of fire damage. The flames have a range increment of 10 feet.</p>
				<p><strong>Icewalk (cold):</strong> The suli can walk on water-based liquids as if using <Link to="/spell/water_walk">water walk</Link>, except instead of hovering above the surface, she creates a temporary layer of ice that supports her and immediately melts once she moves away from it. This ice is not slippery to the suli and does not affect her balance or speed, though other ice affects her normally. Other creatures cannot travel on this ice, but the suli may carry a creature while moving.</p>
				<p><strong>Shockshield (electricity):</strong> Once per round as an immediate action, the suli can shock a creature that touches or attacks her with a natural attack, unarmed strike, or metal melee weapon, dealing 1d6 points of electricity damage to the creature.</p>
			</blockquote>
			<p>This racial trait otherwise works like and replaces elemental assault.</p>
		</>)
	},
	{ // 
		"title": "Trusted Mediator",
		"sources": [[21,216]],
		"content": (
			<p>Sulis are renowned in Thuvia and beyond as impartial mediators, and they learn to shroud their minds to prevent magic from tampering with their judgments. They gain a +2 racial bonus on saving throws against mind-affecting effects.</p>
		)
	},
	{ // 500
		"title": "Healthy",
		"sources": [[0,204]],
		"content": (
			<p>Svirfneblin gain a +4 bonus on Fortitude saves against disease and poison, including magical diseases.</p>
		)
	},
	{ // 
		"title": "Stalwart Watcher",
		"sources": [[21,216]],
		"content": (
			<p>Svirfneblin first came to Golarion to thwart the schemes of evil fey. Those who still keep to this mission, primarily dwelling in settlements far beneath Andoran, gain a +1 racial bonus on attack rolls against fey creatures and a +2 racial bonus on saving throws against mind-affecting effects.</p>
		)
	},
	{ // 
		"title": "Stoneseer",
		"sources": [[0,204]],
		"content": (
			<p>Svirfneblin add +1 to the caster level of any spells with the earth descriptor they cast. Svirfneblin also gain the following spell-like abilities: Constant-<Link to="/spell/nondetection">nondetection</Link>; 1/day-<Link to="/spell/magic_stone">magic stone</Link>, <Link to="/spell/stone_shape">stone shape</Link>, <Link to="/spell/stone_tell">stone tell</Link>; caster level equals the svirfneblin's class levels.</p>
		)
	},
	{ // 
		"title": "Air Insight",
		"sources": [[0,156]],
		"content": (
			<p>Sylph spellcasters sometimes find that their elemental heritage makes creatures of air more willing to serve them. Summon monster and summon nature's ally spells that the sylph casts last 2 rounds longer than normal when used to summon creatures with the air subtype.</p>
		)
	},
	{ // 
		"title": "Breeze-Kissed",
		"sources": [[0,156]],
		"content": (
			<p>Breezes seem to follow most sylphs wherever they go, but some sylphs are better able to control these winds than others. A sylph with this racial trait surrounds herself with swirling winds, gaining a +2 racial bonus to AC against nonmagical ranged attacks. The sylph can calm or renew these winds as a swift action. Once per day, the sylph can channel this wind into a single gust, making a bull rush or trip combat maneuver attempt against one creature within 30 feet. Whether or not the attempt succeeds, the winds are exhausted and no longer provide a bonus to the sylph's AC for 24 hours. This is a supernatural ability.</p>
		)
	},
	{ // 505
		"title": "Storm in the Blood",
		"sources": [[0,157]],
		"content": (
			<p>A sylph with this racial trait gains <Link to="/umr/fast_healing">fast healing</Link> 2 for 1 round anytime she takes electricity damage (whether or not this electricity damage gets through her electricity resistance). The sylph can heal up to 2 hit points per level per day with this ability, after which it ceases to function.</p>
		)
	},
	{ // 
		"title": "Like the Wind",
		"sources": [[0,156]],
		"content": (
			<p>A sylph with this racial trait gains a +5 foot bonus to her base speed.</p>
		)
	},
	{ // 
		"title": "Thunderous Resilience",
		"sources": [[0,157]],
		"content": (
			<p>Sylphs with this racial trait gain sonic resistance 5.</p>
		)
	},
	{ // 
		"title": "Secretive",
		"sources": [[21,216]],
		"content": (
			<p>Sylphs gain a +2 racial bonus on saving throws against enchantment and divination spells and effects.</p>
		)
	},
	{ // 
		"title": "Sky Speaker",
		"sources": [[0,156]],
		"content": (
			<p>Sylphs with this racial trait feel kinship toward the creatures of the air, and can use <Link to="/spell/speak_with_animals">speak with animals</Link> once per day to speak to birds or other flying animals. Her caster level for these effects is equal to her level.</p>
		)
	},
	{ // 510
		"title": "Weather Savvy",
		"sources": [[0,157]],
		"content": (
			<p>Some sylphs are so in tune with the air and sky that they can sense the slightest change in atmospheric conditions. Sylphs with this trait can spend a full-round action to predict the weather in an area for the next 24 hours. The sylph's prediction is always accurate, but cannot account for spells or supernatural effects that might alter the forecast.</p>
		)
	},
	{ // 
		"title": "Whispering Wind",
		"sources": [[0,157]],
		"content": (
			<p>Some sylphs are especially thin and wispy, as though they were made more of air than flesh. Sylphs with this racial trait gain a +4 racial bonus on Stealth checks.</p>
		)
	},
	{ // 
		"title": "Carrion Sense",
		"sources": [[0,163]],
		"content": (
			<p>Many tengus have a natural ability to sniff out carrion. While their sense of smell isn't as keen as that of other species, it is particularly attuned to the scent of injuries or death. Tengus with this racial trait have a limited scent ability, which only functions for corpses and badly wounded creatures (50% or fewer hit points).</p>
		)
	},
	{ // 
		"title": "Glide",
		"sources": [[0,163]],
		"content": (
			<p>Some tengus can use their feathered arms and legs to glide. Tengus with this racial trait can make a DC 15 Fly check to fall safely from any height without taking falling damage, as if using <Link to="/spell/feather_fall">feather fall</Link>. When falling safely, a tengu may make an additional DC 15 Fly check to glide, moving 5 feet laterally for every 20 feet he falls.</p>
		)
	},
	{ // 
		"title": "Deft Swords",
		"sources": [[21,216]],
		"content": (
			<p>Some tengu learn dazzling blade techniques that allow them to use their weapons to protect against combat maneuvers. They gain a +2 dodge bonus to CMD while wielding a sword-like weapon.</p>
		)
	},
	{ // 515
		"title": "Claw Attack",
		"sources": [[0,163]],
		"content": (
			<p>Tengus with this racial trait have learned to use their claws as natural weapons. They gain two claw attacks as primary natural attacks that deal 1d3 points of damage, and are treated as having the <Link to="/feat/Improved_Unarmed_Strike">Improved Unarmed Strike</Link> feat for the purpose of qualifying for other feats.</p>
		)
	},
	{ // 
		"title": "Exotic Weapon Training",
		"sources": [[0,163]],
		"content": (
			<p>Instead of swords, some tengus are trained in exotic weaponry. Such tengus choose a number of eastern weapons equal to 3 + their Intelligence bonus, and gain proficiency with these weapons.</p>
		)
	},
	{ // 
		"title": "Scaled Skin",
		"sources": [[0,169]],
		"content": (
			<p>The skin of these tieflings provides some energy resistance, but is also as hard as armor. Choose one of the following energy types: cold, electricity, or fire. A tiefling with this trait gains resistance 5 in the chosen energy type and also gains a +1 natural armor bonus to AC.</p>
		)
	},
	{ // 
		"title": "Prehensile Tail",
		"sources": [[0,169]],
		"content": (
			<p>Many tieflings have tails, but some have long, flexible tails that can be used to carry items. While they cannot wield weapons with their tails, they can use them to retrieve small, stowed objects carried on their persons as a swift action.</p>
		)
	},
	{ // 
		"title": "Smite Good",
		"sources": [[23,25]],
		"content": (
			<p>Once per day, a tiefling with this racial trait can smite a good-aligned creature. As a swift action, the tiefling chooses one target within sight to smite. If this target is good, the tiefling adds her Charisma bonus (if any) to attack rolls against the target and gains a bonus on damage rolls against the target equal to her number of Hit Dice. This effect lasts until the first time the tiefling successfully hits her designated target.</p>
		)
	},
	{ // 520
		"title": "Pass for Human",
		"sources": [[21,217]],
		"content": (
			<p>Discrimination against tieflings with horrifically fiendish features is so intense that even tieflings look up to those precious few of their kind who can pass as human. These tieflings have otherworldly features that are so subtle, they aren't often noticed unless the tiefling points them out (for example, eyes that flash red in the throes of passion, or fingernails that are naturally hard and pointed). Such a tiefling doesn't need to succeed at a Disguise check to appear to be human and count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells like <Link to="/spell/charm_person">charm person</Link> or <Link to="/spell/enlarge_person">enlarge person</Link>). The tiefling does not automatically gain his associated outsider language (but may select it as a bonus language if his Intelligence score is high enough), and he may not select other racial traits that would grant him obviously fiendish features (such as the fiendish sprinter, maw or claw, prehensile tail, scaled skin, or vestigial wings alternate racial traits).</p>
		)
	},
	{ // 
		"title": "Beguiling Liar",
		"sources": [[0,168]],
		"content": (
			<p>Many tieflings find that the best way to get along in the world is to tell others what they want to hear. These tieflings' practice of telling habitual falsehoods grants them a +4 racial bonus on Bluff checks to convince an opponent that what they are saying is true when they tell a lie.</p>
		)
	},
	{ // 
		"title": "Bullying",
		"sources": [[21,216]],
		"content": (
			<p>Tieflings are often disparaged and kept low in the social order, where they commonly resort to robbing those weaker than themselves. Tieflings with this racial trait gain a +1 racial bonus on combat maneuver checks to disarm or steal.</p>
		)
	},
	{ // 
		"title": "Fiendish Sprinter",
		"sources": [[0,169]],
		"content": (
			<p>Some tieflings have feet that are more bestial than human. Whether their feet resemble those of a clawed predator or are the cloven hooves common to many of their kind, tieflings with this trait gain a 10-foot racial bonus to their speed when using the charge, run, or withdraw actions.</p>
		)
	},
	{ // 
		"title": "Vestigial Wings",
		"sources": [[0,169]],
		"content": (
			<p>Some tieflings possess a pair of undersized, withered, or stunted wings like a mockery of those of their fiendish forbearer. Sometimes these wings are leathery, like those of a bat. Other times they are covered with a scattering of black, red, or violet feathers. Rare manifestations can take even more bizarre forms. These wings do not provide the lift required for actual flight, but do have enough power to aid flight attained by some other method, and grant a +4 racial bonus on Fly skill checks.</p>
		)
	},
	{ // 525
		"title": "Light from the Darkness",
		"sources": [[21,217]],
		"content": (
			<p>Tieflings who deny the evil of their heritage to go on to become heroes refuse to use the dark magic of their blood, but their struggle grants them uncanny resilience against evil's touch. As long as they retain a good alignment, they gain the aasimar's <em>incorruptible</em> alternate racial trait: They can cast <Link to="/spell/corruption_resistance">corruption resistance</Link> against evil once per day as a spell-like ability. If the tiefling uses this ability on themselves, the duration increases to 1 hour per level.</p>
		)
	},
	{ // 
		"title": "Maw or Claw",
		"sources": [[0,169]],
		"content": (
			<p>Some tieflings take on the more bestial aspects of their fiendish ancestors. These tieflings exhibit either powerful, toothy maws or dangerous claws. The tiefling can choose a bite attack that deals 1d6 points of damage or two claws that each deal 1d4 points of damage. These attacks are primary natural attacks.</p>
		)
	},
	{ // 
		"title": "Variant Tiefling Abilities",
		"sources": [[36,16]],
		"content": (<>
			<p>Some tieflings are blessed or cursed with unusual abilities. GMs may customize their tiefling NPCs using the following chart, or allow their players to do so by rolling a d%. Players with a particular character concept in mind may consult their GM if they want to select a specific variant ability. Any abilities that grant spells or spell-like abilities are treated as having a caster level equal to the tiefling's character level.</p>
			<p>The table can be found <Link to="/misc/variant_tiefling_abilities">on its own page</Link>.</p>
		</>)
	},
	{ // 
		"title": "Soul Seer",
		"sources": [[0,169]],
		"content": (
			<p>Rare tieflings have a peculiar sight that allows them to see the state of a creature's soul. They can use <Link to="/spell/deathwatch">deathwatch</Link> at will as spell-like ability.</p>
		)
	},
	{ // 
		"title": "Deepsight",
		"sources": [[0,175]],
		"content": (
			<p>The eyes of some undines are especially adapted to the lightless depths of the oceans, but not to air-filled environments. An undine with this racial trait has darkvision 120 feet when underwater, but otherwise has no darkvision at all.</p>
		)
	},
	{ // 530
		"title": "Flesh Chameleon",
		"sources": [[0,175]],
		"content": (
			<p>Some undines can change their coloration to match human skin tones. As a standard action, an undine with this racial trait can change her natural blue hue to match any normal human skin tone, and can revert to normal as a free action. This grants a +4 racial bonus on Disguise checks to appear human.</p>
		)
	},
	{ // 
		"title": "Terrain Chameleon",
		"sources": [[0,175]],
		"content": (
			<p>Some undines can change their coloration to blend in with underwater terrain, mixing browns, grays, and greens to resemble kelp or other natural water plants. As a standard action, an undine with this racial trait can change her coloration, gaining a +4 bonus on Stealth checks in underwater environments. She can return to normal as a free action.</p>
		)
	},
	{ // 
		"title": "Water Sense",
		"sources": [[0,176]],
		"content": (
			<p>Undines with this racial trait can sense vibrations in water, granting them blindsense 30 feet against creatures in contact with the same body of water.</p>
		)
	},
	{ // 
		"title": "Acid Breath",
		"sources": [[0,174]],
		"content": (
			<p>Undines whose outsider heritage can be traced to a water mephit can wield acid as a weapon. Such an undine has a breath weapon that is a 5-foot cone of acidic water usable once per day. The breath deals 1d8 points of acid damage per two character levels (maximum 5d8). A Reflex saving throw (DC 10 + 1/2 the undine's level + the undine's Constitution modifier) halves the damage.</p>
		)
	},
	{ // 
		"title": "Amphibious",
		"sources": [[0,175]],
		"content": (
			<p>Some undines are born with a permanent bond to water. Undines with this racial trait gain the aquatic subtype and amphibious special quality.</p>
		)
	},
	{ // 535
		"title": "Nereid Fascination",
		"sources": [[0,175]],
		"content": (
			<p>Some undines can trace their ancestry to nereids as well as to outsiders. Once per day as a standard action, such an undine can create a 20-foot-radius aura that causes humanoids within the aura's range to become fascinated with her for a number of rounds equal to 1/2 the undine's character level (minimum 1). Targets may resist with a Will save (DC 10 + 1/2 the undine's level + the undine's Charisma modifier). This is a supernatural ability.</p>
		)
	},
	{ // 
		"title": "Ooze Breath",
		"sources": [[0,175]],
		"content": (
			<p>Some undines' outsider heritage can be traced to ooze mephits. These undines have a breath weapon that is a 5-foot cone of slime usable once per day. The slime deals 1d4 points of acid damage per two character levels (maximum 5d4) and sickens creatures in the area for 3 rounds. A successful Reflex saving throw (DC 10 + 1/2 the undine's level + the undine's Constitution modifier) halves the damage and negates the sickened effect.</p>
		)
	},
	{ // 
		"title": "Triton Magic",
		"sources": [[21,217]],
		"content": (
			<p>Some undines - often from Outsea - descend from tritons, rather than genies. Undines with this racial trait can use <Link to="/spell/summon_natures_ally_I">summon nature's ally I</Link> as a spell-like ability, but only to summon a dolphin.</p>
		)
	},
	{ // 
		"title": "Hydrated Vitality",
		"sources": [[0,175]],
		"content": (
			<p>An undine with this racial trait gains <Link to="/umr/fast_healing">fast healing</Link> 2 for 1 round anytime she submerges completely within a body of natural salt water, fresh water, or brackish water. Stagnant, poisoned, or trapped water (such as an artificial pit or a bag of holding) does not activate this ability. The undine can heal up to 2 hit points per level per day with this ability, after which it ceases to function.</p>
		)
	},
	{ // 
		"title": "Acrobatic",
		"sources": [[1,28]],
		"content": (
			<p>Vanaras are often extraordinarily agile, capable of dancing around slower-moving humans with playful grace. They gain a +2 racial bonus on Acrobatics and Escape Artist checks.</p>
		)
	},
	{ // 540
		"title": "Change Size (Su)",
		"sources": [[1,28]],
		"content": (
			<p>One vanara in every 500 is gifted with limited shapeshifting ability. Such a creature can adjust her size at will. She gains the <Link to="/umr/change_shape">change shape</Link> ability and the shapeshifter subtype. Instead of changing appearance, she can use change shape to reduce her size category to Small. Her ability scores don't change, only her size (and thus her weapon damage); normal size penalties and bonuses to AC and CMD and on attack and skill rolls apply. Changing size or returning to her true size is a full-round action.</p>
		)
	},
	{ // 
		"title": "Tree Stranger",
		"sources": [[0,206]],
		"content": (
			<p>Some vanaras have spent their lives among humans in centers of learning instead of traditional treetop homes. These vanaras treat all Knowledge skills as class skills.</p>
		)
	},
	{ // 
		"title": "Risky Troublemaker",
		"sources": [[21,217]],
		"content": (
			<p>Vanara families who seek to emulate the Monkey King teach their members that unexpected opportunities are worth taking great risks. These vanaras can choose to roll twice on Use Magic Device checks. If they do, they take the higher result unless either die roll is a natural 1, in which case the check automatically fails.</p>
		)
	},
	{ // 
		"title": "Whitecape",
		"sources": [[0,206]],
		"content": (
			<p>The rare whitecape vanara clans have more in common with savanna-dwelling baboons than the jungle-dwelling monkeys that most vanaras resemble. Their stooping build grants them a +4 racial bonus to CMD when resisting a bull rush or trip. These vanaras usually have a thick mane of hair on the head and shoulders (called a \"cape\") and shorter tails.</p>
		)
	},
	{ // 
		"title": "Grapevine",
		"sources": [[5,21]],
		"content": (
			<p>A vine leshy made from a grapevine can produce magically infused fruit that can heal her allies. She can cast <Link to="/spell/goodberry">goodberry</Link> once per day as a spell-like ability, with a caster level equal to her character level.</p>
		)
	},
	{ // 545
		"title": "Agile",
		"sources": [[5,21]],
		"content": (
			<p>Agile vine leshys are quicker but less tough than a typical vine leshy. Replace the leshy's +2 racial bonus to Constitution with a +2 racial bonus to Dexterity.</p>
		)
	},
	{ // 
		"title": "Lashvine",
		"sources": [[19,14]],
		"content": (
			<p>Some vine leshys can sprout whip-like appendages. These individuals gain proficiency with whips and scorpion whips. As a free action, the vine leshy can turn one hand into a lashvine. A lashvine is a primary natural attack that deals 1d3 points of bludgeoning damage. A lashvine cannot hold items, wield weapons, or perform fine manipulation.</p>
		)
	},
	{ // 
		"title": "Seasoned Spirit",
		"sources": [[19,14]],
		"content": (
			<p>Long-lived vine leshys are less flexible, but they have established stronger bonds with the natural world. These leshys can spend an hour in concentration to cast <Link to="/spell/speak_with_plants">speak with plants</Link> as a spell-like ability with a caster level equal to their character level.</p>
		)
	},
	{ // 
		"title": "Swamp Leshy",
		"sources": [[5,21]],
		"content": (
			<p>Some vine leshys are made from plants that naturally grow in swamps. These leshys gain a +2 racial bonus on Swim checks and a +4 racial bonus on Stealth checks in swamps.</p>
		)
	},
	{ // 
		"title": "Writing Eye",
		"sources": [[19,14]],
		"content": (
			<p>Some vine leshys can grow thin vines that serve as sensory organs. Growing or controlling the vine is a full-round action that provokes attacks of opportunity. The vine can extend up to 15 feet and is small enough to pass through a keyhole. A leshy can perceive, using all of her senses, within 20 feet of the vine's tip.</p>
		)
	},
	{ // 550
		"title": "Curosity",
		"sources": [[19,14]],
		"content": (
			<p>Vine leshys bearing gregarious spirits are more suited to learn about other cultures. They always treat Diplomacy and Linguistics as class skills, and they gain a +2 racial bonus on Diplomacy and Linguistics checks.</p>
		)
	},
	{ // 
		"title": "Poisonous",
		"sources": [[5,21]],
		"content": (<>
			<p>Vine leshys made from poison ivy vines carry natural poison in their bodies. As a swift action, the leshy can imbue its vines with this irritating substance. The next time the leshy hits a creature with an unarmed strike, the creature is affected by the following poison.</p>
			<Block titled>
			<Row><Cell className="has-icon"><Link to="/rules/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></Link><span>Vine Leshy Toxin</span></Cell></Row>
			<Row><Cell>Type</Cell><Cell>Unarmed strike-injury</Cell></Row>
			<Row><Cell>Save DC</Cell><Cell>Fort 10 + 1/2 the vine leshy's HD + the vine leshy's Con modifier</Cell></Row>
			<Row><Cell>Onset</Cell><Cell>immediate</Cell></Row>
			<Row><Cell>Frequency</Cell><Cell>1/round for 6 rounds</Cell></Row>
			<Row><Cell>Effect</Cell><Cell><Link to="/misc/sickened">sickened</Link> for 1 round</Cell></Row>
			<Row><Cell>Cure</Cell><Cell>1 save</Cell></Row></Block>
			<p>The leshy can use this ability a number of times per day equal to its Constitution modifier (minimum 1). A vine leshy is immune to its own poison, but not to those of other vine leshys. This replaces plantspeech and change shape.</p>		
		</>)
	},
	{ // 
		"title": "Deceptive",
		"sources": [[21,217]],
		"content": (
			<p>Vishkanya clans that make their livings robbing or killing humans train to distract targets at critical moments. They gain a +2 racial bonus on Bluff checks.</p>
		)
	},
	{ // 
		"title": "Sensual",
		"sources": [[0,208]],
		"content": (
			<p>You are trained in drawing attention to yourself. You gain a +2 bonus on any one Perform skill.</p>
		)
	},
	{ // 
		"title": "Subtle Appearance",
		"sources": [[0,208]],
		"content": (
			<p>You have normal (human-like) eyes, and your beauty is more conventional. You gain a +4 bonus on Disguise checks to look fully human.</p>
		)
	},
	{ // 555
		"title": "Scion of Shadows",
		"sources": [[4,10]],
		"content": (
			<p>Some wayangs retain an uncommonly powerful connection to the Plane of Shadow. A wayang with this racial trait counts as an outsider (native) and a humanoid (wayang) for any effect related to race, including feat prerequisites and spells that affect humanoids. In addition, attacks made against such a wayang in dim light have a 50% miss chance instead of the normal 20% miss chance. This ability doesn't grant total concealment; it only increases the miss chance.</p>
		)
	},
	{ // 
		"title": "In the Shadows",
		"sources": [[21,217]],
		"content": (
			<p>Many wayangs perform a variety of unusual roles and tasks in wayang society. They gain a +2 racial bonus on their choice of two of the following skills: Appraise, Bluff, Craft, Profession, and Sleight of Hand.</p>
		)
	},
	{ // 
		"title": "Dissolution's Child",
		"sources": [[0,210]],
		"content": (
			<p>Once per day, you may change your appearance to look as if you were little more than a 4-foot-tall area of shadow. Your physical form still exists and you are not incorporeal-only your appearance changes. This works like invisibility, except it only lasts 1 round per level (maximum 5 rounds). This is a supernatural ability.</p>
		)
	},
	{ // 
		"title": "Shadow Inheritor (Su)",
		"sources": [[4,10]],
		"content": (
			<p>Wayangs with exceptional ties to their shadowy heritage have great skill at manipulating shadows. A wayang with this trait treats his caster level as being 1 higher for all level-based calculations of illusion spells he casts with the darkness or shadow descriptor, powers of the Darkness domain, bloodline powers of the shadow bloodline, and revelations of the oracle's <Link to="/mystery/shadow">shadow mystery</Link>. This trait doesn't give wayangs early access to level-based powers; it affects their effective level only for powers they could already use without this trait.</p>
		)
	},
	{ // 
		"title": "Shadow Speaker (Su)",
		"sources": [[4,10]],
		"content": (
			<p>Countless whispers of powerful beings from the Shadow Plane-long since dead or deeply dreaming-echo in the minds of wayangs with strong spiritual connections to the darkness. These faint voices hint at revelations of things to come and suggest actions for receptive listeners to undertake. Three times per day as a free action, but no more than once per turn, a wayang with this racial trait can heed these uncanny whispers to gain a +2 insight bonus on an ability check, attack roll, caster level check, <Link to="/rule/concentration">concentration</Link> check, saving throw, or skill check. The wayang must choose to use this ability before making the appropriate die roll.</p>
		)
	},
	{ // 560
		"title": "Repair Magic",
		"sources": [[21,217]],
		"content": (
			<p>Some wyrwoods have developed magic to keep them more self-sufficient. They can use <Link to="/spell/make_whole">make whole</Link> as a spell-like ability once per day.</p>
		)
	},
	{ // 
		"title": "Experimental Body",
		"sources": [[11,6]],
		"content": (<>
			<p>Some wyrwoods have been built from rare materials in an effort to imbue them with special properties. Choose one of the following abilities.</p>
			<blockquote>
				<p><strong>Blessed:</strong> These wyrwoods contain divine relics. Wyrwoods with this trait can use <Link to="/spell/divine_favor">divine favor</Link> once per day as a spell-like ability with a caster level equal to their Hit Dice.</p>
				<p><strong>Enchanted:</strong> Crafted from the remnants of broken staves, wands and other items, these wyrwoods have a natural attunement to the arcane. Wyrwoods with this trait treat their Intelligence score as 2 higher for the purpose of determining bonus spells or extracts per day.</p>
				<p><strong>Fey-Touched:</strong> These wyrwoods have components that create a powerful link to the First World. Wyrwoods with this trait can use <Link to="/spell/charm_animal">charm animal</Link> once per day as a spell-like ability with a caster level equal to their Hit Dice.</p>
				<p><strong>Scorched:</strong> These wyrwoods are built from the ruins of cities and structures destroyed by conflict. Once per day, after a successful melee attack against an enemy, wyrwoods with this trait can deal an additional number of points of damage equal to their Wisdom modifier as a free action.</p>
			</blockquote>
		</>)
	},
	{ // 
		"title": "Living Machine",
		"sources": [[11,6]],
		"content": (
			<p>Through generations of refining the techniques of creation, many young wyrwoods have become closer to organic beings than constructs. These wyrwoods are constructs with the living machine subtype. They gain a Constitution score and can be targeted by spells and effects that target living creatures or constructs, as well as those that require a Fortitude save. They are no longer immune to ability damage, ability drain, energy drain, exhaustion, or fatigue. Wyrwoods with this trait require sleep, but they do not need to breathe or eat. They are not destroyed when reduced to 0 hit points, instead becoming unconscious and stable. They are destroyed when reduced to a negative number of hit points equal to their Constitution score. They can be raised or resurrected when destroyed.</p>
		)
	},
	{ // 
		"title": "Evasive Maneuvers",
		"sources": [[21,217]],
		"content": (
			<p>Coastal wyvarans often take to the air to defend their territory from intruding ships, and are forced to learn aerial maneuvers to avoid siege fire. They fly with an average maneuverability instead of clumsy, and they gain a +2 dodge bonus to AC and on Reflex saving throws against siege weapons.</p>
		)
	},
	{ // 
		"title": "Memories of the Forgotten",
		"sources": [[14,18]],
		"content": (
			<p>Generations of wyvaran elders pass down tales that predate written history. While many ignore these or dismiss them as simple stories, others revere the lore of their elders. These wyvarans consider it their sacred duty to study the lost histories and pass them down to others. They gain a +2 racial bonus on two Knowledge skills of their choice. Those Knowledge skills are class skills for them.</p>
		)
	},
	{ // 565
		"title": "Vestigal Wings",
		"sources": [[14,18]],
		"content": (
			<p>When resources are particularly scarce, some young wyvarans develop smaller-than-average wings incapable of flight. However, these wings are perfectly suited for other acrobatic maneuvers. These wyvarans gain a +2 racial bonus on Acrobatics and Climb checks, and one of these is a class skill for them. In addition, they can ignore the first 20 feet of falling damage when they make a successful Acrobatics check.</p>
		)
	},
	{ // 566
		"title": "Neglected Heritage",
		"sources": [[14,18]],
		"content": (
			<p>Because of their dwindling population and cultural stagnation, some wyvarans have given up on their people, favoring a life among other races instead. These wyvarans lose Draconic as a starting language, but gain a +1 racial bonus on Diplomacy checks when making requests and gathering information. They can't take Draconic as a bonus language, but can learn it normally with Linguistics.</p>
		)
	},
	{ // 567
		"title": "Greed",
		"sources": [[14,18]],
		"content": (
			<p>Most wyvarans crave treasure, but for some, amassing wealth is a compulsion. Wyvarans with this trait gain a +2 on racial bonus on Appraise checks, and Appraise is a class skill for them. They gain a +2 racial bonus on Sleight of Hand checks when attempting to take items from other creatures. They can also use their tails to attempt these Sleight of Hand checks.</p>
		)
	},
	{ // 568
		"copies": 60,
		"add": (
			<p>Dwarves with this trait also gain low-light vision.</p>
		)
	},
	{ // 569
		"title": "Sahuagin Song",
		"sources": [[27,31]],
		"content": (
			<p>While Outsear sahuagin typically don’t have a history of music, over the years the merfolk of the city have shared their love of song with them. Sahuagin with this racial trait gain a +2 racial bonus on Perform (sing) checks and a +1 racial bonus on saves against language-dependent effects.</p>
		)
	},
	{ // 570
		"title": "Stoic Defender",
		"sources": [[27,31]],
		"content": (
			<p>Outsear sahuagin have learned to control their aggression, standing as reliable guards of the city they are proud to call home. Once per day when a sahuagin with this racial trait takes damage, he can focus on remaining steadfast for the good of Outsea. For 1 minute, the sahuagin gains a +2 racial bonus to AC and a +2 racial bonus on Will saves.</p>
		)
	}
];

const races: Data[] = [
	{ race: "kitsune", properName: "Kitsune" }, { race: "halfling", properName: "Halfling" }, { race: "dwarf", properName: "Dwarf" }, { race: "elf", properName: "Elf" }, { race: "gnome", properName: "Gnome" }, { race: "half_elf", properName: "Half-elf" }, { race: "half_orc", properName: "Half-orc" }, { race: "human", properName: "Human" }, { race: "kobold", properName: "Kobold" }, { race: "ratfolk", properName: "Ratfolk" }, { race: "fetchling", properName: "Fetchling" }, { race: "gathlain", properName: "Gathlain" }, { race: "vanara", properName: "Vanara" }, { race: "wayang", properName: "Wayang" }, { race: "catfolk", properName: "Catfolk" }, { race: "drow", properName: "Drow" }, { race: "tengu", properName: "Tengu" }, { race: "duskwalker", properName: "Duskwalker" }, { race: "grippli", properName: "Grippli" }, { race: "goblin", properName: "Goblin" }, { race: "nagaji", properName: "Nagaji" }, { race: "tiefling", properName: "Tiefling" }, { race: "strix", properName: "Strix" }, { race: "aphorite", properName: "Aphorite" }, { race: "hobgoblin", properName: "Hobgoblin" }, { race: "wyrwood", properName: "Wyrwood" }, { race: "aquatic_elf", properName: "Aquatic elf" }, { race: "shabti", properName: "Shabti" }, { race: "orc", properName: "Orc" }, { race: "vine_leshy", properName: "Vine leshy" }, { race: "ganzi", properName: "Ganzi" }, { race: "aasimar", properName: "Aasimar" }, { race: "merfolk", properName: "Merfolk" }, { race: "ghoran", properName: "Ghoran" }, { race: "dhampir", properName: "Dhampir" }, { race: "ifrit", properName: "Ifrit" }, { race: "gillman", properName: "Gillman" }, { race: "oread", properName: "Oread" }, { race: "undine", properName: "Undine" }, { race: "sylph", properName: "Sylph" }, { race: "locathah", properName: "Locathah" }, { race: "wyvaran", properName: "Wyvaran" }, { race: "duergar", properName: "Duergar" }, { race: "boggard", properName: "Boggard" }, { race: "samsaran", properName: "Samsaran" }, { race: "svirfneblin", properName: "Svirfneblin" }, { race: "vishkanya", properName: "Vishkanya" }, { race: "changeling", properName: "Changeling" }, { race: "suli", properName: "Suli" }, { race: "sahuagin", properName: "Sahuagin" }
];

const substitutions: [string, string][] = [
	[ "SKHP", "skhp" ],
	[ "RANK", "rank" ],
	[ "HP", "hp" ],
	[ "DRR", "drr" ],
	[ "WHEN", "when" ],
	[ "WHAT", "what" ],
	[ "BOOK", "book" ],
	[ "BUDDY", "buddy" ],
	[ "BUD", "bud" ],
	[ "SKILL", "skill" ],
	[ "CAST", "cast" ],
	[ "LIST", "list" ],
	[ "SPELL", "spell" ],
	[ "THING", "thing" ],
	[ "FROM", "from" ],
	[ "CLASS", "class" ],
	[ "TITLE", "title" ],
	[ "HISHER", "hisher" ],
	[ "WEAPONS", "weapons" ],
	[ "GRANTED", "granted" ],
	[ "KNOWN", "known" ],
	[ "POWER", "power" ],
	[ "MOD", "mod" ],
	[ "MANEUVER", "maneuver" ],
	[ "SCHOOL", "school" ],
	[ "RESIST", "resist" ],
	[ "BONUS", "bonus" ],
	[ "DOMAINS", "domains" ],
	[ "DO", "do" ],
	[ "KEEPS", "keeps" ],
	[ "ELEMENT", "element" ],
	[ "EL", "el" ],
	[ "DESCRIPTOR", "descriptor" ],
	[ "LIMIT", "limit" ],
	[ "EITHER", "either" ],
	[ "PLANE", "plane" ],
	[ "MAX", "max" ]
];

const basics: Data = {
	rank:"+1 skill rank",
	hp:"+1 hit point",
	drr:"DR 1/magic",
	cast:"cast",
	list:"spell",
	spell:"spell",
	thing:"spell",
	from:"CLASS",
	granted:"",
	known:"",
	school:"",
	descriptor:"",
	limit:""
};

const classes: Data[] = [
	{ // 0
		class:"rogue",
		title:"Rogue",
		hisher:"her"
	},
	{
		class:"ranger",
		title:"Ranger",
		hisher:"his",
		bud:"animal companion",
		buddy:"CLASS's BUD"
	},
	{
		class:"druid",
		title:"Druid",
		hisher:"her",
		bud:"animal companion",
		buddy:"CLASS's BUD",
		granted:" granted",
		power:"domain",
		mod:"Wisdom"
	},
	{
		class:"bard",
		title:"Bard",
		hisher:"his",
		book:" to the bard's spell list and known spells",
		known:" known"
	},
	{
		class:"oracle",
		title:"Oracle",
		hisher:"her",
		known:" known",
		book:""
	},
	{ // 5
		class:"sorcerer",
		title:"Sorcerer",
		hisher:"her",
		power:"bloodline",
		mod:"Charisma",
		known:" known",
		book:""
	},
	{
		class:"fighter",
		title:"Fighter",
		hisher:"his"
	},
	{
		class:"alchemist",
		title:"Alchemist",
		hisher:"his",
		cast:"create",
		list:"extract",
		spell:"extract formula",
		thing:"formula",
		book:" to the alchemist's formula book"
	},
	{
		class:"monk",
		title:"Monk",
		hisher:"his"
	},
	{
		class:"witch",
		title:"Witch",
		hisher:"her",
		bud:"familiar",
		buddy:"CLASS's BUD",
		book:" to the BUDDY"
	},
	{ // 10
		class:"cleric",
		title:"Cleric",
		hisher:"her",
		granted:" granted",
		power:"domain",
		mod:"Wisdom"
	},
	{
		class:"wizard",
		title:"Wizard",
		hisher:"his",
		book:" to the wizard's spellbook",
		power:"arcane school",
		mod:"Intelligence",
		when:"casting spells of the necromancy school",
		bud:"familiar",
		buddy:"CLASS's BUD"
	},
	{
		class:"inquisitor",
		title:"Inquisitor",
		hisher:"her",
		known:" known",
		book:""
	},
	{
		class:"shifter",
		title:"Shifter",
		hisher:"her"
	},
	{
		class:"summoner",
		title:"Summoner",
		hisher:"his",
		bud:"eidolon",
		buddy:"CLASS's BUD",
		drr:"DR 1/evil"
	},
	{ // 15
		class:"paladin",
		title:"Paladin",
		hisher:"her"
	},
	{
		class:"cavalier",
		title:"Cavalier",
		hisher:"his",
		bud:"mount",
		buddy:"CLASS's BUD"
	},
	{
		class:"samurai",
		title:"Samurai",
		hisher:"his",
		bud:"mount",
		buddy:"CLASS's BUD"
	},
	{
		class:"barbarian",
		title:"Barbarian",
		hisher:"her"
	},
	{
		class:"shaman",
		title:"Shaman",
		hisher:"her",
		book:" to the list of spells the shaman knows",
		bud:"spirit animal",
		buddy:"CLASS's BUD"
	},
	{ // 20
		class:"hunter",
		title:"Hunter",
		hisher:"her",
		bud:"animal companion",
		buddy:"CLASS's BUD"
	},
	{
		class:"investigator",
		title:"Investigator",
		hisher:"his",
		cast:"create",
		list:"extract",
		spell:"extract formula",
		thing:"formula",
		book:" to the investigator's formula book"
	},
	{
		class:"slayer",
		title:"Slayer",
		hisher:"his"
	},
	{
		class:"mesmerist",
		title:"Mesmerist",
		hisher:"his"
	},
	{
		class:"arcanist",
		title:"Arcanist",
		hisher:"her"
	},
	{ // 25
		class:"magus",
		title:"Magus",
		hisher:"his",
		book:" to the magus's spellbook"
	},
	{
		class:"kineticist",
		title:"Kineticist",
		hisher:"her"
	},
	{
		class:"gunslinger",
		title:"Gunslinger",
		hisher:"his",
		weapons:"firearms"
	},
	{
		class:"bloodrager",
		title:"Bloodrager",
		hisher:"her"
	},
	{
		class:"psychic",
		title:"Psychic",
		hisher:"her",
		book:""
	},
	{ // 30
		class:"spiritualist",
		title:"Spiritualist",
		hisher:"her",
		bud:"phantom",
		buddy:"CLASS's BUD"
	},
	{
		class:"medium",
		title:"Medium",
		hisher:"his"
	},
	{
		class:"skald",
		title:"Skald",
		hisher:"his",
		known:" known",
		book:""
	},
	{
		class:"swashbuckler",
		title:"Swashbuckler",
		hisher:"her"
	},
	{
		class:"brawler",
		title:"Brawler",
		hisher:"her"
	},
	{ // 35
		class:"occultist",
		title:"Occultist",
		hisher:"his"
	},
	{
		class:"warpriest",
		title:"Warpriest",
		hisher:"his"
	},
	{
		class:"vigilante",
		title:"Vigilante",
		hisher:"his"
	},
	{
		class:"antipaladin",
		title:"Antipaladin",
		hisher:"his"
	},
	{
		class:"unchained_monk",
		title:"Unchained_monk",
		hisher:"his"
	},
	{ // 40
		class:"ninja",
		title:"Ninja",
		hisher:"her"
	},
	{
		class:"unchained_barbarian",
		title:"Unchained_barbarian",
		hisher:"her"
	},
	{
		class:"unchained_summoner",
		title:"Unchained_summoner",
		hisher:"his"
	},
	{ // 43
		class:"unchained_rogue",
		title:"Unchained_rogue",
		hisher:"her"
	}
];

type Source = [number, number];
type Option = [ number, number, number[], Source[], Data ] | [ number, number, number[], Source[] ];
type Found = [ number[], Source[], Data, Data ] | [ number[], Source[], Data ];
export interface FoundObject {
	data: Data,
	found: Found[]
}

//class, race, [bonus], [[sources]], {obj}?
const all: Option[] = [
	[ 7,23, [62,10], [[3,15]] ],
	[ 7,14, [63], [[1,4]] ],
	[ 7,34, [29], [[0,98]] ],
	[ 7,15, [29], [[0,103]] ],
	[ 7,2, [64], [[0,13]] ],
	[ 7,3, [0], [[0,23]] ],
	[ 7,10, [107], [[4,7]] ],
	[ 7,11, [29], [[12,8]] ],
	[ 7,4, [40], [[0,33],[2,15]] ],
	[ 7,19, [41,108], [[0,115],[10,31]], {resist:"fire"} ],
	[ 7,18, [109], [[0,190]] ],
	[ 7,5, [62,10], [[0,42]] ],
	[ 7,1, [0], [[0,63]] ],
	[ 7,6, [30], [[0,53],[2,19]] ],
	[ 7,6, [110], [[8,40]] ],
	[ 7,24, [40], [[0,121]] ],
	[ 7,7, [0], [[0,73],[2,23]] ],
	[ 7,35, [30], [[0,127]] ],
	[ 7,0, [2], [[1,12]] ],
	[ 7,8, [40], [[0,133]] ],
	[ 7,20, [111], [[0,196]] ],
	[ 7,28, [29], [[0,139]] ],
	[ 7,9, [63], [[0,151]] ],
	[ 7,45, [0], [[0,204]] ],
	[ 7,21, [30], [[0,170]] ],
	[ 7,12, [30], [[0,206]] ],
	[ 7,29, [64], [[5,21]] ],
	[ 7,25, [112], [[11,6]] ],
	[ 38,15, [113], [[0,103]] ],
	[ 38,17, [114], [[3,17]] ],
	[ 38,0, [2], [[1,12]] ],
	[ 24,26, [9], [[7,5]], {when:"casting spells with the water descriptor"} ],
	[ 24,17, [9], [[3,17]], {when:"casting spells of the necromancy school"} ],
	[ 24,2, [115], [[6,69]] ],
	[ 24,3, [116], [[6,69]] ],
	[ 24,10, [117], [[4,7]] ],
	[ 24,30, [118], [[3,19]] ],
	[ 24,4, [119], [[6,70]] ],
	[ 24,5, [13], [[6,70]], {what:"CLASS enchantment spells"} ],
	[ 24,1, [120], [[6,70]] ],
	[ 24,6, [14], [[6,71]], {when:"due to taking damage while casting CLASS spells"} ],
	[ 24,7, [0], [[6,71]], {book:" to the arcanist's spellbook"} ],
	[ 24,0, [2], [[1,12]] ],
	[ 24,0, [13], [[1,12]], {what:"CLASS enchantment spells"} ],
	[ 24,9, [121], [[1,20]] ],
	[ 24,12, [122], [[1,28]] ],
	[ 24,25, [123], [[11,6]] ],
	[ 3,31, [124], [[0,85]] ],
	[ 3,43, [125], [[15,8]] ],
	[ 3,14, [15], [[0,92]] ],
	[ 3,15, [126], [[4,15]] ],
	[ 3,17, [15], [[3,17]] ],
	[ 3,2, [127], [[0,13]] ],
	[ 3,3, [4], [[0,23],[2,13]], {maneuver:"a disarm or sunder attempt"} ],
	[ 3,10, [128], [[4,7]] ],
	[ 3,30, [15], [[3,19]] ],
	[ 3,11, [0], [[5,10],[12,8]], {from:"druid"} ],
	[ 3,36, [129], [[7,9]] ],
	[ 3,4, [22], [[0,33],[2,15]] ],
	[ 3,19, [22], [[0,115],[10,31]] ],
	[ 3,18, [130], [[1,8]] ],
	[ 3,5, [22], [[0,42],[2,17]] ],
	[ 3,1, [131], [[0,63],[2,21]] ],
	[ 3,6, [22], [[0,53]] ],
	[ 3,6, [132], [[8,40]] ],
	[ 3,7, [0], [[0,73],[2,23]] ],
	[ 3,35, [133], [[0,127]] ],
	[ 3,0, [2], [[1,12]] ],
	[ 3,0, [134], [[0,192]] ],
	[ 3,8, [135], [[0,133]] ],
	[ 3,32, [136], [[7,13]] ],
	[ 3,37, [137], [[0,145]] ],
	[ 3,9, [138], [[1,20]] ],
	[ 3,27, [15], [[3,23]] ],
	[ 3,16, [139], [[1,24]] ],
	[ 3,38, [140], [[0,176]] ],
	[ 3,12, [15], [[1,28]] ],
	[ 3,29, [141], [[5,21]] ],
	[ 3,46, [22], [[0,208]] ],
	[ 3,13, [0,65], [[0,210]], {school:"illusion ",from:"wizard"} ],
	[ 28,14, [23,7,31], [[1,4]] ],
	[ 28,15, [142], [[4,15]] ],
	[ 28,2, [16], [[6,69]] ],
	[ 28,3, [23,7,31], [[6,69]] ],
	[ 28,11, [16], [[5,10]] ],
	[ 28,4, [66], [[6,70]] ],
	[ 28,5, [143], [[6,70]] ],
	[ 28,1, [144], [[6,70]] ],
	[ 28,6, [16], [[6,71]] ],
	[ 28,7, [16], [[6,71]] ],
	[ 28,0, [2], [[1,12]] ],
	[ 28,27, [66], [[3,23]] ],
	[ 28,22, [16], [[13,73]] ],
	[ 28,41, [16], [[14,18]] ],
	[ 6,23, [4], [[3,15]], {maneuver:"disarm or trip attempts"} ],
	[ 6,26, [11,17], [[7,5]], {weapons:"rapier, short sword, trident, or any weapon with \"elven\" in its name"} ],
	[ 6,43, [145], [[15,8]] ],
	[ 6,34, [42], [[0,98]] ],
	[ 6,15, [146], [[0,104]] ],
	[ 6,42, [4], [[0,186]], {maneuver:"a bull rush or trip attempt"} ],
	[ 6,17, [67], [[3,17]] ],
	[ 6,2, [4], [[0,13],[2,11]], {maneuver:"a bull rush or trip attempt"} ],
	[ 6,3, [4], [[0,23],[2,13]], {maneuver:"a disarm or sunder attempt"} ],
	[ 6,10, [11,6], [[4,7]], {weapons:"any slashing weapon"} ],
	[ 6,36, [4], [[0,188]], {maneuver:"two combat maneuvers of the character's choice"} ],
	[ 6,4, [4], [[0,33]], {maneuver:"a dirty trick or steal attempt"} ],
	[ 6,5, [4], [[0,43],[2,17]], {maneuver:"a disarm or overrun combat maneuver"} ],
	[ 6,1, [4], [[0,63],[2,21]], {maneuver:"a trip or grapple attempt"} ],
	[ 6,6, [42], [[0,53],[2,19]] ],
	[ 6,6, [147], [[8,40]] ],
	[ 6,24, [148,6], [[0,121]] ],
	[ 6,7, [4], [[0,73],[2,23]], {maneuver:"two combat maneuvers of the character's choice"} ],
	[ 6,0, [2], [[1,12]] ],
	[ 6,0, [149], [[1,12]] ],
	[ 6,8, [150], [[0,133]] ],
	[ 6,20, [4], [[0,196]], {maneuver:"a grapple or trip attempt"} ],
	[ 6,28, [67], [[0,139]] ],
	[ 6,37, [4], [[0,145]], {maneuver:"a bull rush or drag attempt"} ],
	[ 6,9, [4], [[0,151]], {maneuver:"a bull rush or grapple attempt"} ],
	[ 6,22, [151], [[0,200]] ],
	[ 6,16, [4], [[0,163]], {maneuver:"a grapple or trip attempt"} ],
	[ 6,12, [4], [[0,206]], {maneuver:"a reposition or trip attempt"} ],
	[ 6,13, [152], [[4,11]] ],
	[ 20,14, [153], [[1,4]] ],
	[ 20,2, [8], [[6,69]], {bonus:"½",do:"influence",what:"animals and magical beasts that live underground"} ],
	[ 20,3, [11,17], [[6,69]], {weapons:"longbow, longsword, rapier, short sword, shortbow, or any weapon with \"elven\" in its name"} ],
	[ 20,10, [18,154,1], [[4,7]], {keeps:"gains this DR"} ],
	[ 20,30, [155], [[3,19]] ],
	[ 20,11, [18,156,157], [[5,10]], {drr:"DR 1/cold iron"} ],
	[ 20,33, [3,1], [[5,16]], {skhp:"RANK",bud:"plant companion",keeps:"gains these bonus skill ranks"} ],
	[ 20,4, [18,158,1], [[6,70]], {keeps:"gains this damage reduction"} ],
	[ 20,5, [19,7], [[6,70]] ],
	[ 20,1, [159,1], [[6,70]], {keeps:"gains this bonus"} ],
	[ 20,6, [3,1], [[6,71]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 20,7, [3,1], [[6,71]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 20,0, [2], [[1,12]] ],
	[ 20,9, [3], [[1,20]], {skhp:"RANK",bud:"badger, dire rat, or riding rat animal companion"} ],
	[ 20,22, [3,1], [[13,73]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 20,16, [3,1], [[1,24]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 20,12, [160], [[1,28]] ],
	[ 12,31, [161], [[0,85]] ],
	[ 12,23, [43], [[3,15]] ],
	[ 12,14, [162], [[1,4]] ],
	[ 12,34, [163], [[0,98]] ],
	[ 12,15, [164], [[4,15]] ],
	[ 12,42, [165], [[0,186]] ],
	[ 12,2, [166], [[0,13]] ],
	[ 12,3, [0], [[0,23]] ],
	[ 12,10, [167], [[4,7]] ],
	[ 12,4, [14], [[0,33]], {when:"when casting CLASS spells"} ],
	[ 12,5, [43], [[0,43]] ],
	[ 12,1, [43], [[0,63]] ],
	[ 12,6, [68], [[0,53],[2,19]] ],
	[ 12,24, [14], [[0,121]], {when:"when casting CLASS spells"} ],
	[ 12,7, [0], [[0,73],[2,23]] ],
	[ 12,7, [168], [[8,41]] ],
	[ 12,35, [169], [[0,127]] ],
	[ 12,0, [2], [[1,12]] ],
	[ 12,8, [170], [[16,15]] ],
	[ 12,9, [171], [[1,20]] ],
	[ 12,39, [172], [[0,157]] ],
	[ 12,21, [68], [[0,170]] ],
	[ 21,23, [173], [[3,15]] ],
	[ 21,14, [69], [[1,4]] ],
	[ 21,17, [174], [[3,17]] ],
	[ 21,2, [175], [[6,69]] ],
	[ 21,3, [44], [[6,69]] ],
	[ 21,30, [44], [[3,19]] ],
	[ 21,11, [176], [[12,9]] ],
	[ 21,36, [44], [[7,9]] ],
	[ 21,4, [0], [[6,70]] ],
	[ 21,5, [177], [[6,70]] ],
	[ 21,1, [0], [[6,70]] ],
	[ 21,6, [178,17], [[6,71]] ],
	[ 21,7, [0], [[6,71]] ],
	[ 21,0, [2], [[1,12]] ],
	[ 21,40, [45], [[7,11]] ],
	[ 21,9, [69], [[1,20]] ],
	[ 21,27, [179], [[3,23]] ],
	[ 26,42, [70], [[17,13]], {element:"earth"} ],
	[ 26,17, [71], [[3,17]] ],
	[ 26,2, [180], [[9,84]] ],
	[ 26,3, [72], [[9,84]] ],
	[ 26,11, [181], [[12,9]] ],
	[ 26,4, [182], [[9,84]] ],
	[ 26,5, [72], [[9,85]] ],
	[ 26,1, [71], [[9,85]] ],
	[ 26,6, [183], [[9,85]] ],
	[ 26,7, [73], [[9,85]] ],
	[ 26,0, [2], [[1,12]] ],
	[ 26,16, [73], [[1,24]] ],
	[ 26,12, [184], [[1,28]] ],
	[ 26,29, [70], [[5,21]], {element:"wood"} ],
	[ 26,13, [185], [[4,11]] ],
	[ 39,0, [2], [[1,12]] ],
	[ 40,0, [2], [[1,12]] ],
	[ 35,2, [186], [[9,84]] ],
	[ 35,3, [74], [[9,84]] ],
	[ 35,4, [187], [[9,85]] ],
	[ 35,5, [188], [[9,85]] ],
	[ 35,1, [74], [[9,85]] ],
	[ 35,6, [189], [[9,85]] ],
	[ 35,7, [46], [[9,85]] ],
	[ 35,7, [190], [[8,41]] ],
	[ 35,0, [2], [[1,12]] ],
	[ 35,9, [46], [[1,20]] ],
	[ 35,12, [46], [[1,28]] ],
	[ 4,31, [24], [[0,85]] ],
	[ 4,14, [0], [[0,92]] ],
	[ 4,47, [47], [[0,184]] ],
	[ 4,34, [191], [[0,98]] ],
	[ 4,2, [48], [[0,13],[2,11]] ],
	[ 4,3, [24], [[0,23]] ],
	[ 4,10, [192], [[0,109]] ],
	[ 4,30, [0], [[3,19]], {school:"enchantment ",from:"cleric or wizard"} ],
	[ 4,11, [0,75], [[12,9]], {school:"enchantment ",from:"sorcerer/wizard"} ],
	[ 4,4, [193], [[0,33],[2,15]] ],
	[ 4,19, [14], [[0,115],[10,31]], {when:"when casting spells with the fire descriptor."} ],
	[ 4,18, [0,65], [[1,8]], {descriptor:" with the poison or water descriptor",from:"druid"} ],
	[ 4,5, [0], [[0,43]] ],
	[ 4,5, [194], [[8,40]] ],
	[ 4,1, [47], [[0,63]] ],
	[ 4,6, [0], [[0,53]] ],
	[ 4,7, [0], [[0,73],[2,23]] ],
	[ 4,35, [24], [[0,127]] ],
	[ 4,0, [2], [[1,12]] ],
	[ 4,0, [48], [[0,192]] ],
	[ 4,8, [195], [[0,133]] ],
	[ 4,32, [0], [[7,13]] ],
	[ 4,20, [24], [[1,16]] ],
	[ 4,44, [0], [[0,198]] ],
	[ 4,27, [0], [[3,23]], {from:"psychic",limit:" that isn't on the cleric spell list"} ],
	[ 4,22, [0], [[13,73]] ],
	[ 4,45, [0], [[0,204]] ],
	[ 4,39, [24], [[0,157]] ],
	[ 4,16, [47], [[0,163]] ],
	[ 4,29, [196], [[5,21]] ],
	[ 4,13, [0,75], [[0,210]], {school:"illusion ",from:"wizard"} ],
	[ 4,25, [0,197], [[11,6]], {school:"evocation ",from:"wizard"} ],
	[ 4,41, [198], [[14,18]] ],
	[ 15,31, [199], [[0,85]] ],
	[ 15,15, [200], [[4,15]] ],
	[ 15,17, [32], [[3,17]] ],
	[ 15,2, [14], [[0,13],[2,11]], {when:"when casting paladin spells."} ],
	[ 15,2, [201], [[8,38]] ],
	[ 15,3, [32], [[0,23]] ],
	[ 15,10, [202], [[4,7]] ],
	[ 15,4, [32], [[0,33]] ],
	[ 15,5, [203,10], [[0,43]] ],
	[ 15,1, [32], [[0,63],[2,21]] ],
	[ 15,6, [204,6], [[0,53]] ],
	[ 15,7, [205], [[0,73],[2,23]] ],
	[ 15,0, [2], [[1,12]] ],
	[ 15,8, [206], [[16,15]] ],
	[ 15,20, [207], [[1,16]] ],
	[ 15,37, [208], [[0,145]] ],
	[ 15,27, [209], [[3,23]] ],
	[ 15,21, [210], [[0,170]] ],
	[ 15,13, [211], [[4,11]] ],
	[ 15,25, [212], [[11,6]] ],
	[ 15,41, [213], [[14,18]] ],
	[ 29,15, [214], [[4,15]] ],
	[ 29,42, [76], [[17,13]], {mod:"Wisdom"} ],
	[ 29,2, [215], [[9,84]] ],
	[ 29,3, [77], [[9,84]] ],
	[ 29,4, [77], [[9,85]] ],
	[ 29,5, [49], [[9,85]] ],
	[ 29,1, [76], [[9,85]], {mod:"Charisma"} ],
	[ 29,6, [14], [[9,85]], {when:"due to taking damage while casting CLASS spells."} ],
	[ 29,7, [0], [[9,85]], {known:" known"} ],
	[ 29,7, [216], [[8,41]] ],
	[ 29,0, [2], [[1,12]] ],
	[ 29,9, [49], [[1,20]] ],
	[ 29,12, [217], [[1,28]] ],
	[ 29,25, [49], [[11,6]] ],
	[ 32,17, [15], [[3,17]] ],
	[ 32,2, [218], [[6,69]] ],
	[ 32,3, [219], [[6,70]] ],
	[ 32,11, [220], [[5,10]] ],
	[ 32,4, [14], [[6,70]], {when:"when casting skald spells."} ],
	[ 32,18, [50], [[1,8]] ],
	[ 32,5, [50], [[6,70]] ],
	[ 32,1, [11,17], [[6,70]], {weapons:"dagger, sling, or any weapon with the word \"halfling\" in its name"} ],
	[ 32,6, [50], [[6,71]] ],
	[ 32,7, [0], [[6,71]] ],
	[ 32,0, [2], [[1,12]] ],
	[ 32,32, [0], [[7,13]] ],
	[ 32,27, [15], [[3,23]] ],
	[ 22,14, [221], [[1,4]] ],
	[ 22,2, [222,223], [[6,69]] ],
	[ 22,3, [51], [[6,70]], {skill:"Survival"} ],
	[ 22,10, [78], [[4,7]] ],
	[ 22,4, [25], [[6,70]] ],
	[ 22,18, [224], [[1,8]] ],
	[ 22,5, [45], [[6,70]] ],
	[ 22,1, [78], [[6,70]] ],
	[ 22,6, [225,17], [[6,71]] ],
	[ 22,7, [25], [[6,71]] ],
	[ 22,0, [2], [[1,12]] ],
	[ 22,40, [25], [[7,11]] ],
	[ 22,20, [25], [[1,16]] ],
	[ 22,22, [51], [[13,73]], {skill:"Survival"} ],
	[ 22,16, [226], [[1,24]] ],
	[ 22,13, [51], [[4,11]], {skill:"Bluff"} ],
	[ 22,25, [25], [[11,6]] ],
	[ 5,31, [9], [[0,85]], {when:"casting spells with the good descriptor"} ],
	[ 5,14, [5], [[0,92]] ],
	[ 5,15, [0], [[0,104]], {descriptor:" with curse, evil, or pain descriptor"} ],
	[ 5,2, [227], [[0,13]] ],
	[ 5,3, [5], [[0,23],[2,13]] ],
	[ 5,3, [228,13], [[8,39]], {what:"CLASS spells in the chosen terrain"} ],
	[ 5,10, [229], [[0,109]] ],
	[ 5,30, [79], [[3,19]], {either:"[abyssal](sorcbloodline/abyssal) or [protean](sorcbloodline/protean)"} ],
	[ 5,11, [79], [[12,9]], {either:"[fey](sorcbloodline/fey) or [verdant](sorcbloodline/verdant)"} ],
	[ 5,33, [13], [[5,17]], {what:"sorcerer/wizard spells that are also on the druid spell list"} ],
	[ 5,36, [0], [[0,188]] ],
	[ 5,4, [5], [[0,33]] ],
	[ 5,19, [0], [[0,116],[10,31]], {descriptor:" with the fire descriptor"} ],
	[ 5,5, [5], [[0,43]] ],
	[ 5,1, [5], [[0,63]] ],
	[ 5,6, [80], [[0,53],[2,19]] ],
	[ 5,7, [0], [[0,73],[2,23]] ],
	[ 5,35, [81], [[0,127]], {either:"[elemental](sorcbloodline/elemental) (fire) or [efreeti](sorcbloodline/efreeti)"} ],
	[ 5,0, [2], [[1,12]] ],
	[ 5,0, [230], [[0,192]] ],
	[ 5,8, [231], [[0,133]] ],
	[ 5,32, [232], [[0,194]] ],
	[ 5,20, [233], [[1,16]] ],
	[ 5,39, [81], [[0,157]], {either:"[elemental](sorcbloodline/elemental) (air) or [djinni](sorcbloodline/djinni)"} ],
	[ 5,16, [5], [[0,163]] ],
	[ 5,21, [234], [[0,170]] ],
	[ 5,38, [235], [[0,176]] ],
	[ 5,46, [5], [[0,208]] ],
	[ 5,13, [236], [[0,210]] ],
	[ 5,41, [237], [[14,18]] ],
	[ 30,17, [19,7], [[3,17]] ],
	[ 30,2, [82], [[9,84]] ],
	[ 30,2, [238], [[8,38]] ],
	[ 30,3, [82], [[9,84]] ],
	[ 30,4, [239], [[9,85]] ],
	[ 30,5, [3], [[9,85]], {skhp:"RANK"} ],
	[ 30,1, [83], [[9,85]] ],
	[ 30,6, [3], [[9,85]], {skhp:"HP"} ],
	[ 30,7, [26], [[9,85]] ],
	[ 30,0, [2], [[1,12]] ],
	[ 30,9, [240], [[1,20]] ],
	[ 30,27, [241], [[3,23]] ],
	[ 30,16, [242,243], [[1,24]] ],
	[ 30,13, [83], [[4,11]] ],
	[ 33,2, [244], [[6,69]] ],
	[ 33,3, [52], [[6,70]] ],
	[ 33,4, [53], [[6,70]] ],
	[ 33,18, [84], [[1,8]] ],
	[ 33,5, [53], [[6,70]] ],
	[ 33,1, [53], [[6,70]] ],
	[ 33,6, [245,17], [[6,71]] ],
	[ 33,7, [52], [[6,71]] ],
	[ 33,0, [2], [[1,12]] ],
	[ 33,0, [52], [[1,12]] ],
	[ 33,9, [246], [[1,20]] ],
	[ 33,16, [84], [[1,24]] ],
	[ 37,17, [247], [[3,17]] ],
	[ 37,2, [248], [[18,17]] ],
	[ 37,3, [249], [[18,17]] ],
	[ 37,4, [250], [[18,17]] ],
	[ 37,5, [54], [[18,17]] ],
	[ 37,1, [251], [[18,17]] ],
	[ 37,6, [252], [[18,17]] ],
	[ 37,7, [54], [[18,17]] ],
	[ 37,0, [2], [[1,12]] ],
	[ 37,0, [54], [[1,12]] ],
	[ 16,31, [33], [[0,85]] ],
	[ 16,26, [3,1], [[7,5]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 16,14, [20], [[0,92]] ],
	[ 16,2, [33], [[0,13]] ],
	[ 16,3, [3,1], [[0,23],[2,13]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 16,11, [85], [[5,10]] ],
	[ 16,4, [86,7,1], [[0,33]], {keeps:"gains this bonus to its speed"} ],
	[ 16,19, [3,1], [[0,115],[10,31]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 16,5, [19,10,1], [[0,42]], {keeps:"gains this base speed bonus"} ],
	[ 16,1, [87], [[0,63]] ],
	[ 16,1, [88,1], [[8,41]], {keeps:"gains this bonus"} ],
	[ 16,6, [3,1], [[0,53]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 16,24, [89], [[0,121]] ],
	[ 16,7, [20], [[0,73],[2,23]] ],
	[ 16,0, [2], [[1,12]] ],
	[ 16,0, [20], [[1,12]] ],
	[ 16,8, [90], [[0,133]] ],
	[ 16,40, [3,1], [[7,11]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 16,20, [19,7,1], [[1,16]], {keeps:"gains this bonus"} ],
	[ 16,28, [91], [[0,139]] ],
	[ 16,12, [253], [[1,28]] ],
	[ 10,31, [254], [[0,85]] ],
	[ 10,23, [255], [[3,15]] ],
	[ 10,34, [256], [[0,98]] ],
	[ 10,15, [5], [[0,103]] ],
	[ 10,42, [257], [[0,186]] ],
	[ 10,17, [258], [[3,17]] ],
	[ 10,2, [5], [[0,13],[2,11]] ],
	[ 10,3, [5], [[0,23]] ],
	[ 10,10, [259], [[4,7]] ],
	[ 10,4, [92], [[0,33]] ],
	[ 10,5, [93], [[0,42]] ],
	[ 10,5, [260], [[8,40]] ],
	[ 10,1, [5], [[0,63],[2,21]] ],
	[ 10,6, [5], [[0,53]] ],
	[ 10,24, [261], [[0,121]] ],
	[ 10,7, [94], [[0,73],[2,23]] ],
	[ 10,35, [55], [[0,127]], {plane:"Fire",element:"fire"} ],
	[ 10,0, [2], [[1,12]] ],
	[ 10,8, [262], [[0,133]] ],
	[ 10,37, [55], [[0,145]], {plane:"Earth",element:"earth"} ],
	[ 10,39, [55], [[0,157]], {plane:"Air",element:"air"} ],
	[ 10,16, [263], [[1,24]] ],
	[ 10,21, [94], [[0,170]] ],
	[ 10,38, [264], [[0,176]] ],
	[ 10,13, [265], [[4,10]] ],
	[ 10,25, [9], [[11,6]], {when:"casting spells or using abilities from the Law domain or one of its subdomains, or when casting spells with the lawful descriptor"} ],
	[ 2,26, [3,1], [[7,5]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 2,26, [5], [[7,5]] ],
	[ 2,14, [3,1], [[0,92]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 2,15, [8], [[4,15]], {bonus:"1",do:"influence",what:"animals and magical beasts that live underground"} ],
	[ 2,2, [5], [[0,13]] ],
	[ 2,3, [95], [[0,23]] ],
	[ 2,10, [56,57,1], [[4,7]], {keeps:"gains these resistances",max:"10",resist:"either cold or electricity"} ],
	[ 2,30, [266], [[3,19]] ],
	[ 2,11, [96], [[5,10]] ],
	[ 2,33, [13], [[5,16]], {what:"spells that target plants or plant creatures"} ],
	[ 2,4, [41,267], [[0,33],[2,15]], {resist:"acid, cold, electricity, or fire"} ],
	[ 2,4, [268,1], [[8,39]], {keeps:"gains this DR"} ],
	[ 2,19, [3,1], [[0,115],[10,31]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 2,18, [269], [[0,190]] ],
	[ 2,5, [5], [[0,42],[2,17]] ],
	[ 2,5, [3,1], [[0,42],[2,17]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 2,1, [270], [[0,63]] ],
	[ 2,6, [95], [[0,53]] ],
	[ 2,7, [97], [[0,73],[2,23]] ],
	[ 2,0, [2], [[1,12]] ],
	[ 2,0, [97], [[0,162]] ],
	[ 2,8, [96], [[0,133]] ],
	[ 2,40, [3,1], [[7,11]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 2,32, [3,1], [[0,194]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 2,28, [271], [[0,139]] ],
	[ 2,37, [34], [[0,145]], {when:"related to plants and burrowing animals"} ],
	[ 2,9, [8], [[0,151]], {bonus:"1",do:"influence",what:"animals and magical beasts that live underground"} ],
	[ 2,22, [34], [[13,73]], {when:"related to weather and flying animals"} ],
	[ 2,39, [34], [[0,157]], {when:"related to weather and flying animals"} ],
	[ 2,21, [8], [[0,170]], {bonus:"1",do:"improve",what:"the attitude of fiendish animals"} ],
	[ 2,38, [8], [[0,176]], {bonus:"1",do:"influence",what:"animals and magical beasts with the aquatic subtype"} ],
	[ 2,12, [272], [[0,206]] ],
	[ 2,29, [273], [[5,21]] ],
	[ 2,13, [5,274], [[4,11]] ],
	[ 8,14, [275,276,277], [[1,4]] ],
	[ 8,17, [21], [[3,17]] ],
	[ 8,2, [278], [[0,13]] ],
	[ 8,3, [23,7,31], [[0,23]] ],
	[ 8,10, [279], [[4,7]] ],
	[ 8,36, [280,7], [[7,9]] ],
	[ 8,4, [281], [[0,33]] ],
	[ 8,5, [282], [[0,43]] ],
	[ 8,1, [4], [[0,63],[2,21]], {maneuver:"a grapple and +½ to the number of stunning attacks he can attempt per day"} ],
	[ 8,1, [283], [[8,41]] ],
	[ 8,6, [4], [[0,53]], {maneuver:"a grapple and +½ to the number of stunning attacks he can attempt per day"} ],
	[ 8,24, [284], [[0,121]] ],
	[ 8,7, [21], [[0,73],[2,23]] ],
	[ 8,0, [2], [[1,12]] ],
	[ 8,8, [285], [[0,133]] ],
	[ 8,40, [21], [[7,11]] ],
	[ 8,32, [286], [[7,13]] ],
	[ 8,20, [21], [[0,196]] ],
	[ 8,37, [35,6], [[0,145]], {weapons:"unarmed strikes"} ],
	[ 8,9, [287,10,288], [[0,151]] ],
	[ 8,44, [289], [[0,198]] ],
	[ 8,22, [21], [[0,200]] ],
	[ 8,48, [290], [[0,203]] ],
	[ 8,16, [21], [[0,163]] ],
	[ 8,38, [4], [[0,176]], {maneuver:"a grapple and +⅓ to the number of stunning attacks he can attempt per day"} ],
	[ 8,12, [98], [[0,206]] ],
	[ 8,13, [291], [[4,11]] ],
	[ 31,14, [292], [[1,4]] ],
	[ 31,2, [293], [[9,84]] ],
	[ 31,3, [99], [[9,84]] ],
	[ 31,36, [294], [[7,9]] ],
	[ 31,4, [295], [[9,85]] ],
	[ 31,18, [100], [[1,8]] ],
	[ 31,5, [99], [[9,85]] ],
	[ 31,1, [296], [[9,85]] ],
	[ 31,6, [58], [[9,85]] ],
	[ 31,7, [58], [[9,85]] ],
	[ 31,0, [2], [[1,12]] ],
	[ 31,27, [297], [[3,23]] ],
	[ 31,16, [100], [[1,24]] ],
	[ 31,13, [58], [[4,11]] ],
	[ 17,31, [33], [[0,85]] ],
	[ 17,26, [3,1], [[7,5]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 17,14, [20], [[0,92]] ],
	[ 17,2, [33], [[0,13]] ],
	[ 17,3, [3,1], [[0,23],[2,13]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 17,11, [85], [[5,10]] ],
	[ 17,4, [86,7,1], [[0,33]], {keeps:"gains this bonus to its speed"} ],
	[ 17,19, [3,1], [[0,115],[10,31]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 17,5, [19,10,1], [[0,42]], {keeps:"gains this base speed bonus"} ],
	[ 17,1, [87], [[0,63]] ],
	[ 17,1, [88,1], [[8,41]], {keeps:"gains this bonus"} ],
	[ 17,6, [3,1], [[0,53]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 17,24, [89], [[0,121]] ],
	[ 17,7, [20], [[0,73],[2,23]] ],
	[ 17,0, [2], [[1,12]] ],
	[ 17,0, [20], [[1,12]] ],
	[ 17,8, [90], [[0,133]] ],
	[ 17,40, [3,1], [[7,11]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 17,20, [19,7,1], [[1,16]], {keeps:"gains this bonus"} ],
	[ 17,28, [91], [[0,139]] ],
	[ 19,14, [298], [[1,4]] ],
	[ 19,2, [27], [[6,69]] ],
	[ 19,3, [299,300], [[6,69]] ],
	[ 19,11, [0], [[5,10]], {from:"druid",limit:" that isn't on the shaman spell list"} ],
	[ 19,33, [0], [[5,17]], {from:"druid",limit:" that isn't on the shaman spell list"} ],
	[ 19,4, [59], [[6,70]] ],
	[ 19,18, [0], [[1,8]], {from:"druid",limit:" that isn't on the shaman spell list"} ],
	[ 19,5, [0], [[6,70]], {from:"cleric",limit:" that isn't on the shaman spell list"} ],
	[ 19,1, [60], [[6,70]] ],
	[ 19,6, [0], [[6,71]], {from:"cleric",limit:" that isn't on the shaman spell list"} ],
	[ 19,7, [0], [[6,71]], {from:"cleric",limit:" that isn't on the shaman spell list"} ],
	[ 19,0, [2], [[1,12]] ],
	[ 19,0, [0], [[1,12]], {school:"enchantment ",from:"sorcerer/wizard",limit:" that isn't on the shaman spell list"} ],
	[ 19,27, [0], [[3,23]], {from:"psychic",limit:" that isn't on the shaman spell list"} ],
	[ 19,22, [60], [[13,73]] ],
	[ 19,12, [0], [[1,28]], {from:"cleric",limit:" that isn't on the shaman spell list"} ],
	[ 19,29, [301,302], [[5,22]] ],
	[ 19,13, [303], [[4,11]] ],
	[ 36,23, [61], [[3,15]], {domains:"Artifice, Community, Knowledge, Law, Magic, or Rune"} ],
	[ 36,15, [304], [[4,15]] ],
	[ 36,2, [305], [[6,69]] ],
	[ 36,3, [61], [[6,70]], {domains:"Air, Animal, Charm, Magic, Plant, or Sun"} ],
	[ 36,4, [92], [[6,70]] ],
	[ 36,5, [93], [[6,70]] ],
	[ 36,1, [306], [[6,70]] ],
	[ 36,6, [42], [[6,71]] ],
	[ 36,7, [307], [[6,71]] ],
	[ 36,0, [2], [[1,12]] ],
	[ 36,20, [61], [[1,16]], {domains:"Charm, Magic, Nobility, Rune, or Scalykind"} ],
	[ 9,23, [59], [[3,15]] ],
	[ 9,26, [13], [[7,5]], {what:"CLASS spells underwater"} ],
	[ 9,47, [0,1], [[0,184]], {keeps:"knows these bonus spells"} ],
	[ 9,17, [9], [[3,17]], {when:"casting spells of the necromancy school"} ],
	[ 9,2, [27], [[0,13]] ],
	[ 9,3, [0,1], [[0,23]], {keeps:"knows these bonus spells"} ],
	[ 9,3, [308], [[8,39]] ],
	[ 9,11, [0,309], [[5,10]], {from:"druid"} ],
	[ 9,33, [9], [[5,17]], {when:"attempting dispel checks using [dispel magic](spell/dispel_magic), [break enchantment](spell/break_enchantment), and similar effects"} ],
	[ 9,4, [59], [[0,34]] ],
	[ 9,19, [0,1], [[0,116],[10,31]], {keeps:"knows these bonus spells"} ],
	[ 9,18, [310], [[1,8]] ],
	[ 9,5, [0,1], [[0,43],[2,17]], {keeps:"knows these bonus spells"} ],
	[ 9,1, [9], [[0,63]], {when:"determining the effects of the spells granted to her by her patron"} ],
	[ 9,6, [3,1], [[0,53],[2,19]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 9,7, [0,1], [[0,73],[2,23]], {keeps:"knows these bonus spells"} ],
	[ 9,0, [2], [[1,12]] ],
	[ 9,8, [311], [[0,134]] ],
	[ 9,32, [312], [[7,13]] ],
	[ 9,28, [0,1], [[0,139]], {keeps:"knows these bonus spells"} ],
	[ 9,9, [313], [[0,151]] ],
	[ 9,22, [0,1], [[13,73]], {keeps:"knows these bonus spells"} ],
	[ 9,39, [314,1], [[0,157]], {keeps:"gains these bonus skill ranks"} ],
	[ 9,16, [0,1], [[0,167]], {keeps:"knows these bonus spells"} ],
	[ 9,21, [56,57,1], [[0,170]], {keeps:"gains these resistances",max:"5",resist:"cold, electricity, or fire"} ],
	[ 9,12, [9], [[1,28]], {when:"determining the effects of spells granted to her by her patron (to a maximum of +2)"} ],
	[ 9,13, [315,1], [[4,11]], {keeps:"knows these bonus spells"} ],
	[ 11,23, [316], [[3,15]] ],
	[ 11,26, [317], [[7,5]] ],
	[ 11,34, [9], [[0,98]] ],
	[ 11,15, [5], [[0,104]] ],
	[ 11,17, [9], [[3,17]] ],
	[ 11,2, [318,319,320], [[0,13]] ],
	[ 11,2, [13], [[8,38]], {what:"CLASS abjuration spells"} ],
	[ 11,3, [5], [[0,23],[2,13]] ],
	[ 11,10, [0], [[0,109]], {descriptor:", either of the illusion (shadow) subschool or with the darkness descriptor,"} ],
	[ 11,30, [321], [[3,19]] ],
	[ 11,36, [0], [[0,188]] ],
	[ 11,4, [5], [[0,34],[2,15]] ],
	[ 11,5, [13], [[0,43]], {what:"CLASS enchantment spells"} ],
	[ 11,1, [60], [[0,63]] ],
	[ 11,6, [14], [[0,53]], {when:"due to taking damage while casting CLASS spells"} ],
	[ 11,7, [0], [[0,73],[2,23]] ],
	[ 11,0, [2], [[1,12]] ],
	[ 11,8, [322], [[16,15]] ],
	[ 11,44, [0], [[0,198]] ],
	[ 11,39, [323,324], [[0,157]] ],
	[ 11,21, [5], [[0,170]] ],
	[ 11,38, [0,325], [[0,176]], {descriptor:" with the water descriptor",from:"cleric, druid, or wizard"} ],
	[ 11,12, [101], [[1,28]] ],
	[ 11,13, [326,327], [[4,11]] ],
	[ 11,25, [101], [[11,6]] ],
	[ 1,23, [328,10], [[3,15]] ],
	[ 1,26, [329], [[7,5]] ],
	[ 1,43, [330], [[15,8]] ],
	[ 1,14, [11,6], [[0,92]], {weapons:"claws, kukri, longbow, longsword, short spear, or shortbow"} ],
	[ 1,15, [331], [[4,15]] ],
	[ 1,17, [332], [[3,17]] ],
	[ 1,2, [8], [[0,13],[2,11]], {bonus:"½",do:"influence",what:"animals and magical beasts that live underground"} ],
	[ 1,3, [11,6], [[0,23],[2,13]], {weapons:"longbow, longsword, rapier, shortbow, short sword, or any weapon with \"elven\" in its name"} ],
	[ 1,10, [333], [[0,109]] ],
	[ 1,11, [334], [[5,10]] ],
	[ 1,33, [335], [[5,17]] ],
	[ 1,4, [18,102,1], [[0,33],[2,15]], {keeps:"gains this DR"} ],
	[ 1,19, [336], [[0,115],[10,31]] ],
	[ 1,18, [337], [[0,190]] ],
	[ 1,5, [3,1], [[0,43],[2,17]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 1,5, [338], [[8,40]] ],
	[ 1,1, [339], [[0,63],[2,21]] ],
	[ 1,6, [3,1], [[0,53],[2,19]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 1,24, [340], [[0,122]] ],
	[ 1,7, [26,1], [[0,73],[2,23]], {keeps:"gains these bonus hit points or skill ranks"} ],
	[ 1,0, [2], [[1,12]] ],
	[ 1,8, [341], [[0,133]] ],
	[ 1,40, [3,1], [[7,11]], {skhp:"RANK",keeps:"gains these bonus skill ranks"} ],
	[ 1,32, [3,1], [[0,194]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 1,20, [3], [[1,16]], {skhp:"RANK",bud:"constrictor snake or viper snake animal companion"} ],
	[ 1,28, [3,1], [[0,139]], {skhp:"HP",keeps:"gains these bonus hit points"} ],
	[ 1,37, [27,1], [[0,145]], {keeps:"gains this bonus"} ],
	[ 1,9, [342,1], [[0,151]], {keeps:"gains this bonus"} ],
	[ 1,27, [343], [[3,23]] ],
	[ 1,22, [344], [[0,200]] ],
	[ 1,48, [345], [[0,203]] ],
	[ 1,45, [18,102,1], [[0,204]], {keeps:"gains this DR"} ],
	[ 1,12, [346], [[0,206]] ],
	[ 1,29, [34], [[5,22]], {when:"in the ranger's favored terrain"} ],
	[ 1,13, [347], [[4,11]] ],
	[ 13,14, [103], [[19,8]] ],
	[ 13,34, [8], [[19,8]], {bonus:"1",do:"improve",what:"the attitude of bats, rats, and wolves"} ],
	[ 13,15, [348], [[19,8]] ],
	[ 13,2, [8], [[5,31]], {bonus:"½",do:"influence",what:"animals and magical beasts that live underground"} ],
	[ 13,3, [349,10,350], [[5,31]] ],
	[ 13,11, [351], [[19,8]] ],
	[ 13,33, [352], [[5,17]] ],
	[ 13,4, [41,353], [[5,31]], {resist:"acid, cold, electricity, or fire"} ],
	[ 13,18, [354], [[19,8]] ],
	[ 13,5, [355], [[5,31]] ],
	[ 13,1, [356], [[5,31]] ],
	[ 13,6, [357,6], [[5,31]] ],
	[ 13,7, [358], [[5,31]] ],
	[ 13,0, [2], [[1,12]] ],
	[ 13,0, [359], [[19,8]] ],
	[ 13,8, [360], [[19,8]] ],
	[ 13,28, [103], [[19,8]] ],
	[ 13,9, [8], [[19,8]], {bonus:"1",do:"influence",what:"animals and magical beasts that live underground"} ],
	[ 13,21, [8], [[19,8]], {bonus:"1",do:"improve",what:"the attitude of fiendish creatures"} ],
	[ 13,38, [8], [[19,8]], {bonus:"1",do:"influence",what:"animals and magical beasts with the aquatic subtype"} ],
	[ 13,12, [361], [[19,8]] ],
	[ 13,29, [362], [[19,8]] ],
	[ 25,23, [0], [[3,15]] ],
	[ 25,26, [0,363], [[7,5]], {descriptor:" with the water descriptor",from:"cleric, druid, or wizard"} ],
	[ 25,2, [364], [[0,13]] ],
	[ 25,3, [104], [[0,23]] ],
	[ 25,10, [28], [[4,7]] ],
	[ 25,4, [365,366], [[0,33]] ],
	[ 25,4, [367], [[8,39]] ],
	[ 25,5, [28], [[0,43]] ],
	[ 25,1, [104], [[0,63]] ],
	[ 25,6, [80], [[0,53]] ],
	[ 25,7, [28], [[0,73]] ],
	[ 25,0, [2], [[1,12]] ],
	[ 25,8, [368], [[0,133]] ],
	[ 25,48, [28], [[0,203]] ],
	[ 25,21, [28], [[0,170]] ],
	[ 25,25, [369], [[11,6]] ],
	[ 27,2, [370], [[0,13]] ],
	[ 27,3, [35,6], [[0,23]] ],
	[ 27,10, [36], [[4,7]] ],
	[ 27,4, [371], [[0,33]] ],
	[ 27,19, [35,6], [[0,115],[10,31]] ],
	[ 27,18, [372], [[0,190]] ],
	[ 27,5, [36], [[0,43]] ],
	[ 27,1, [373], [[0,63]] ],
	[ 27,6, [374], [[0,53]] ],
	[ 27,24, [36], [[0,121]] ],
	[ 27,7, [36], [[0,73]] ],
	[ 27,35, [375], [[0,127]] ],
	[ 27,0, [2], [[1,12]] ],
	[ 27,8, [376], [[0,133]] ],
	[ 27,9, [377], [[0,151]] ],
	[ 18,43, [98], [[15,8]] ],
	[ 18,2, [37], [[0,13],[2,11]] ],
	[ 18,3, [23,7,31], [[0,23],[2,13]] ],
	[ 18,10, [378], [[4,7]] ],
	[ 18,11, [379], [[5,10]] ],
	[ 18,4, [380], [[0,33]] ],
	[ 18,19, [381,6], [[0,115]] ],
	[ 18,18, [382], [[1,8]] ],
	[ 18,5, [383], [[0,42]] ],
	[ 18,1, [384], [[0,63]] ],
	[ 18,1, [385,10], [[8,41]] ],
	[ 18,6, [37], [[0,53],[2,19]] ],
	[ 18,7, [386], [[0,73],[2,23]] ],
	[ 18,0, [2], [[1,12]] ],
	[ 18,8, [387], [[16,15]] ],
	[ 18,28, [37], [[0,139]] ],
	[ 18,9, [388], [[0,151]] ],
	[ 18,22, [37], [[0,200]] ],
	[ 18,16, [389], [[0,163]] ],
	[ 18,13, [390], [[4,10]] ],
	[ 41,0, [2], [[1,12]] ],
	[ 34,2, [391], [[6,69]] ],
	[ 34,3, [23,7], [[6,69]] ],
	[ 34,4, [105], [[6,70]] ],
	[ 34,5, [4], [[6,70]], {maneuver:"a trip or overrun combat maneuver"} ],
	[ 34,1, [392], [[6,70]] ],
	[ 34,6, [106], [[6,71]] ],
	[ 34,7, [393], [[6,71]] ],
	[ 34,0, [2], [[1,12]] ],
	[ 34,0, [105], [[1,12]] ],
	[ 34,22, [106], [[13,73]] ],
	[ 34,16, [394], [[1,24]] ],
	[ 34,12, [395], [[1,28]] ],
	[ 14,31, [18,396], [[0,86]] ],
	[ 14,26, [397], [[7,5]] ],
	[ 14,15, [26], [[4,15]] ],
	[ 14,2, [27], [[0,13]] ],
	[ 14,3, [398], [[0,23]] ],
	[ 14,10, [56,57], [[0,109]], {max:"10",resist:"either cold or electricity"} ],
	[ 14,11, [38,399], [[5,10]] ],
	[ 14,4, [3], [[0,34],[2,15]], {skhp:"HP"} ],
	[ 14,19, [38,400], [[0,116]] ],
	[ 14,5, [38], [[0,43],[2,17]] ],
	[ 14,1, [3], [[0,63],[2,21]], {skhp:"RANK"} ],
	[ 14,6, [3], [[0,53]], {skhp:"HP"} ],
	[ 14,7, [26], [[0,73],[2,23]] ],
	[ 14,0, [2], [[1,12]] ],
	[ 14,8, [401], [[0,134]] ],
	[ 14,20, [3], [[0,196]], {skhp:"HP"} ],
	[ 14,37, [27], [[0,145]] ],
	[ 14,9, [402], [[0,151]] ],
	[ 14,21, [26], [[0,170]] ],
	[ 14,38, [403], [[0,176]] ],
	[ 14,12, [38], [[1,28]] ],
	[ 14,13, [3], [[0,210]], {skhp:"RANK"} ],
	[ 42,0, [2], [[1,12]] ],
	[ 23,2, [404], [[9,84]] ],
	[ 23,3, [405], [[9,84]] ],
	[ 23,3, [406], [[8,39]] ],
	[ 23,11, [39], [[12,9]] ],
	[ 23,33, [407], [[5,17]] ],
	[ 23,4, [39], [[9,85]] ],
	[ 23,5, [408], [[9,85]] ],
	[ 23,1, [39], [[9,85]] ],
	[ 23,6, [409], [[9,85]] ],
	[ 23,7, [410], [[9,85]] ],
	[ 23,0, [2], [[1,12]] ],
	[ 23,0, [39], [[1,12]] ],
	[ 23,32, [411], [[7,13]] ],
	[ 23,20, [412], [[1,16]] ],
	[ 23,9, [413], [[1,20]] ],
	[ 23,16, [414], [[1,24]] ],
	[ 23,41, [415], [[14,18]] ],
	[ 0,23, [416], [[3,15]] ],
	[ 0,14, [417], [[0,92]] ],
	[ 0,47, [12], [[0,184]] ],
	[ 0,34, [418], [[0,98]] ],
	[ 0,15, [419], [[0,104]] ],
	[ 0,17, [12], [[3,17]] ],
	[ 0,2, [420], [[0,13],[2,11]] ],
	[ 0,3, [421], [[0,23]] ],
	[ 0,10, [422], [[0,109]] ],
	[ 0,30, [423], [[3,19]] ],
	[ 0,11, [424], [[5,10],[12,9]] ],
	[ 0,33, [425,426], [[5,17]] ],
	[ 0,36, [12], [[0,188]] ],
	[ 0,4, [427], [[0,33],[2,15]] ],
	[ 0,4, [428], [[8,39]] ],
	[ 0,19, [429], [[0,115],[10,31]] ],
	[ 0,18, [430], [[0,190]] ],
	[ 0,5, [45], [[0,43],[2,17]] ],
	[ 0,1, [11,6], [[0,63],[2,21]], {weapons:"sling, dagger, or any weapon with \"halfling\" in its name"} ],
	[ 0,6, [35,6], [[0,53]], {weapons:"sneak attacks"} ],
	[ 0,24, [48], [[0,122]] ],
	[ 0,7, [12], [[0,73],[2,23]] ],
	[ 0,35, [431], [[0,127]] ],
	[ 0,0, [2], [[1,12]] ],
	[ 0,0, [12], [[0,192]] ],
	[ 0,8, [432], [[0,133]] ],
	[ 0,40, [11,6], [[7,11]], {weapons:"all piercing weapons"} ],
	[ 0,9, [433], [[0,151]] ],
	[ 0,44, [12], [[0,198]] ],
	[ 0,39, [434], [[0,157]] ],
	[ 0,16, [11,6], [[0,163]], {weapons:"those listed under the tengu's *swordtrained* ability"} ],
	[ 0,21, [435], [[0,170]] ],
	[ 0,12, [12], [[0,206]] ],
	[ 0,29, [436], [[5,22]] ],
	[ 0,46, [4], [[0,208]], {maneuver:"a grapple or reposition attempt"} ],
	[ 0,13, [12], [[4,11]] ],
	[ 0,25, [12], [[11,6]] ],
	[ 0,41, [437], [[14,18]] ],
	[ 43,0, [2], [[1,12]] ]
];
const $bonuses: string[] = [
	"Add one SCHOOLSPELLKNOWNDESCRIPTOR from the FROM LIST list LIMITBOOK. This THING must be at least one level below the highest THING level the CLASS can CAST.",
	"If the CLASS ever replaces HISHER BUD, the new BUD KEEPS.",
	"Gain ⅙ of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in their favored class.",
	"Add SKHP to the BUDDY.",
	"Add +1 to the CLASS's CMD when resisting MANEUVER.",
	"Select one POWER powerGRANTED at 1st level that is normally usable a number of times per day equal to 3 + the CLASS's MOD modifier. The CLASS adds +½ to the number of uses per day of that POWER power.",
	"This bonus does not stack with [Critical Focus](feat/critical_focus).",
	"This has no effect in combat unless the CLASS has selected this reward 5 times (or another increment of 5).",
	"Add a +BONUS bonus on *wild empathy* checks to DO WHAT.",
	"Add +¼ to the CLASS's caster level when WHEN.",
	"This option has no effect unless the CLASS has selected it 5 times (or another increment of 5).",
	"Choose a weapon from the following list: WEAPONS. Add a +½ bonus on critical hit confirmation rolls with that weapon (maximum bonus +4).",
	"Gain ⅙ of a new rogue talent.",
	"When casting WHAT, determine the spell's duration by adding +⅓ to the effective caster level.",
	"Add a +1 bonus on [concentration](rule/concentration) checks made WHEN.",
	"Add +½ to the CLASS's *bardic knowledge* bonus.",
	"Increase the bloodrager's total number of *bloodrage* rounds per day by 1.",
	"This bonus doesn't stack with those gained through [Critical Focus](feat/critical_focus) and similar effects.",
	"Add DRR to the BUDDY.",
	"Add 1 foot to the BUDDY's base speed.",
	"Add +¼ to the CLASS's *banner* bonus.",
	"Add +¼ point to the monk's *ki* pool.",
	"Add +1 to the bard's total number of *bardic performance* rounds per day.",
	"Add 1 foot to the CLASS's base speed.",
	"Add +⅙ to the oracle's level for the purpose of determining the effects of one revelation.",
	"Gain ⅙ of a new slayer talent.",
	"Add RANK or HP to the BUDDY.",
	"Add +¼ to the natural armor bonus of the BUDDY.",
	"Add +¼ point to the magus's *arcane pool.*",
	"Add +10 minutes to the duration of the alchemist's mutagens.",
	"Add +½ to the alchemist's bomb damage.",
	"This bonus stacks with the CLASS's *fast movement* class feature, and applies under the same conditions as that feature.",
	"Add +½ hit point to the paladin's *lay on hands* ability (whether using it to heal or harm).",
	"Add +¼ to the CLASS's bonus to damage against targets of his *challenge.*",
	"Add a +½ bonus on Knowledge (nature) checks WHEN.",
	"Add +⅓ on critical hit confirmation rolls made with WEAPONS (maximum bonus of +5).",
	"Add +¼ point to the gunslinger's *grit.*",
	"Add +1 to the barbarian's total number of *rage* rounds per day.",
	"Add +¼ evolution point to the BUD's evolution pool.",
	"Increase the number of mesmerist tricks the mesmerist can use per day by +⅓.",
	"Add +½ to the number of bombs per day the alchemist can create.",
	"Gain [resistance](umr/resistance) 1 against RESIST.",
	"Add a +2 bonus on rolls to stabilize when dying.",
	"Add +¼ to the number of times per day the inquisitor can change her most recent teamwork feat.",
	"Increase the total number of points in the investigator's inspiration pool by ⅓.",
	"Add a +½ bonus on Bluff checks to feint and on Diplomacy checks to gain information.",
	"Gain ⅙ of a new focus power.",
	"Add +½ to the oracle's level for the purpose of determining the effects of the *oracle's curse* ability.",
	"Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the CLASS is treated as having the appropriate Martial or Exotic Weapon Proficiency feat for that weapon.",
	"Gain ⅙ of a new phrenic amplification.",
	"Increase the skald's total number of *raging song* rounds per day by 1.",
	"Add +¼ to the *studied target* bonus on Perception and SKILL checks. When the slayer gains the *stalker* class feature, he also adds this amount to the *studied target* bonus on Stealth checks.",
	"Increase the total number of points in the swashbuckler's panache pool by +¼.",
	"Increase the number of times per day the swashbuckler can use *charmed life* by +¼.",
	"Add +½ to the Disguise bonus provided by *seamless guise.*",
	"Add a +½ bonus on Knowledge (planes) checks relating to the Plane of PLANE and creatures with the ELEMENT subtype.",
	"The BUDDY gains [resistance](umr/resistance) 1 against RESIST.",
	"Each time this reward is selected, increase the BUD's resistance to one of these energy types by 1 (maximum MAX for any one type).",
	"When gaining a *taboo,* the medium can use *spirit surge* without incurring influence an additional ¼ time per day.",
	"The CLASS gains ⅙ of a new CLASS hex.",
	"Add +½ to the CLASS's effective class level for the purpose of determining HISHER BUD's natural armor adjustment, Intelligence, and special abilities.",
	"Add +½ to the number of times per day the warpriest can use blessings, but he can use these additional blessings on only those from the DOMAINS domains.",
	"Add 1 foot to the range increment of the alchemist's thrown splash weapons (including the alchemist's bombs).",
	"Gain ⅙ of a bonus discovery.",
	"Add +¼ to the alchemist's natural armor bonus when using HISHER mutagen.",
	"The spell is treated as being one level higher, unless it is also on the CLASS spell list.",
	"Add +¼ to the bloodrager's effective class level when determining the power of her bloodrager bloodline powers.",
	"Add +2 to the fighter's Constitution score for the purpose of determining death from negative hit points.",
	"Add a +½ bonus on Intimidate checks and Knowledge checks to identify creatures.",
	"Add +1 to the bonus provided to a single skill (maximum +2) by inspiration. This skill must be one the investigator can already apply inspiration to. The investigator can select a different skill each level.",
	"Gain ⅕ of an Extra Wild Talent feat that must be spent on an ELEMENT element wild talent.",
	"Increase the capacity of the kineticist's *internal buffer* by ⅙ point.",
	"Add a +¼ bonus on damage rolls that apply the kineticist's *elemental overflow* bonus.",
	"Gain ⅙ of an Extra Wild Talent feat.",
	"Add +½ point of *mental focus* per day.",
	"That spell is treated as one level higher unless it is also on the oracle spell list.",
	"The psychic treats her MOD bonus as ⅓ point higher for the purpose of determining the number of uses or rounds per day of her discipline powers.",
	"Increase the total number of points in the psychic's phrenic pool by ⅓ point.",
	"Add a +¼ dodge bonus to AC against the slayer's *studied target.*",
	"Choose a bloodline power from the EITHER bloodlines that the sorcerer can use. The sorcerer treats her class level as though it were +½ higher (to a maximum of +4) when determining the effects of that power.",
	"Add +½ point of fire damage to spells that deal fire damage cast by the CLASS.",
	"Choose a bloodline power from the EITHER bloodlines that the sorcerer can use. The sorcerer treats her class level as though it were +⅙ higher (to a maximum of +2) when determining the effects of that power.",
	"Add +⅙ to the shield bonus granted by the 3rd-level ectoplasmic *bonded manifestation* ability.",
	"Add +¼ to the number of rounds that the spiritualist's incorporeal phantom can be out of sight and line of effect before being sent back to the Ethereal Plane.",
	"Add +½ to the swashbuckler's Acrobatics, Climb, Escape Artist, Fly, Ride, and Swim checks when using the *derring-do* deed.",
	"Add a +½ bonus to the CLASS's Knowledge (nature) and Knowledge (nobility) checks relating to fey courts and fey courtiers.",
	"Add 1 foot to the CLASS's mounted base speed.",
	"Add +½ to the CLASS's effective class level for the purposes of determining the damage he deals when making an attack of opportunity against a *challenged* foe.",
	"The BUDDY gains a +½ bonus on saving throws against fear effects.",
	"Add a +½ bonus on Intimidate checks and Ride checks.",
	"Add 5 feet (up to 15 feet maximum) to the BUDDY's speed when it uses the charge or withdraw action.",
	"Add +1 to the CLASS's CMB when making bull rush or overrun combat maneuvers against a *challenged* target.",
	"Add +½ to the CLASS's channeled energy total when healing creatures of the animal, fey, and plant types.",
	"Add +⅓ point to the damage dealt or healed with the CLASS's *channel energy* ability.",
	"Add a +1 bonus on caster level checks made to overcome the spell resistance of outsiders.",
	"Add +⅓ to the druid's natural armor bonus when using *wild shape.*",
	"Add a +½ bonus to *wild empathy* checks.",
	"Add a +½ bonus on Diplomacy and Intimidate checks to change a creature's attitude.",
	"Add a +1 bonus on Acrobatics checks made to jump.",
	"Add a +⅓ bonus on all skill checks using occult skill unlocks.",
	"Add +¼ to the bonus on checks when the medium uses the *spirit surge* ability.",
	"The wizard gains ⅙ of a bonus [item creation](main/item_creation_feat), [metamagic](main/metamagic_feat), or [spell mastery](feat/spell_mastery) feat.",
	"Each additional time the ranger selects this benefit, the DR/magic increases by +½ (maximum DR 10/magic).",
	"Add +⅕ to the damage dealt when using the *shifter claws* ability.",
	"The magus gains ⅙ of a new magus arcana.",
	"Increase the number of times per day the brawler can use *martial flexibility* by ¼.",
	"Add +¼ to the brawler's effective level to determine her unarmed strike damage.",
	"Add +1 to Craft (alchemy) checks to craft poison and +¼ to the DCs of poisons the alchemist creates.",
	"Each time this reward is selected, increase fire resistance by +1 This fire resistance does not stack with fire resistance gained from other sources.",
	"Add +¼ to the number of toxic skin uses per day.",
	"Add a +½ bonus on Strength checks to break objects and on sunder combat maneuver checks when under the effects of a mutagen that increases the alchemist's Strength or Constitution score.",
	"Add +1 on Craft (alchemy) checks to craft poison and +⅓ on the DCs of poisons the alchemist creates.",
	"Reduce the mental ability score penalty of the alchemist's mutagens by ⅕ (minimum 0).",
	"The antipaladin adds +¼ to the number of cruelties he can inflict.",
	"Add +½ points of damage to the antipaladin's *touch of corruption* ability (whether using it to heal or harm).",
	"Add +¼ to the arcanist's effective class level when determining the effects of the [arcane barrier](exploit/arcane_barrier) and [arcane weapon](exploit/arcane_weapon) arcanist exploits.",
	"Increase total number of points in the arcanist's *arcane reservoir* by 1.",
	"When the arcanist casts an illusion (shadow) spell that deals a percentage of its damage or effect against nonbelievers, increase this amount by 2% (to a maximum of 100%).",
	"Add +½ to the arcanist's effective caster level when casting spells with the chaotic descriptor.",
	"Add +⅙ to the number of points the arcanist gains in her *arcane reservoir* each day.",
	"Gain ⅙ of a new arcanist exploit.",
	"Add +⅓ to the number of times per day the arcanist can use the [consume magic items](exploit/consume_magic_items) exploit.",
	"Add +¼ to the arcanist's effective class level when determining the effects of any two arcanist exploits that the arcanist has.",
	"Add +¼ to the arcanist's level for the [spell resistance](exploit/spell_resistance) exploit.",
	"Choose one *bardic performance;* treat the bard as +⅙ level higher when determining the effects of that performance.",
	"Reduce the amount of time the bard must wait before using HISHER *terrifying croak* ability by 5 minutes (minimum 5 minutes).",
	"Add +½ to Bluff and Disguise checks to appear as an elf or half-elf.",
	"Reduce arcane spell failure chance for casting bard spells when wearing medium armor by +1%. Once the total reaches 10%, the bard also receives Medium Armor Proficiency, if he does not already possess it.",
	"Add a +1 bonus on Disguise checks when using [disguise self](spell/disguise_self).",
	"Add +½ to the bard's Bluff checks to fool someone and gain a +½ bonus on the bard's Sense Motive checks to sense enchantments.",
	"Add 5 feet to the range of one *bardic performance.*",
	"Add +½ on Bluff checks to pass secret messages, Diplomacy checks to gather information, and Disguise checks to appear as an elven, half-elven, or human child.",
	"Add a +½ bonus on Bluff checks to pass secret messages, Sense Motive checks to discern secret messages, and Linguistic checks to decipher unusual handwriting.",
	"Add +⅙ to the number of people the bard can affect with the [fascinate](performance/fascinate) *bardic performance.*",
	"Add a +½ bonus on Bluff checks to lie and on Diplomacy checks to gather information.",
	"Treat the bard's level as +½ level higher for the purpose of determining the effect of the [fascinate](performance/fascinate) *bardic performance.*",
	"The bard learns ⅙ of a new bardic masterpiece; the bard selects the masterpiece once they has made this selection six times and must meet its prerequisites when it is selected.",
	"Add 5 feet to the range of one *bardic performance* (max +30 feet to any one performance).",
	"Increase the bonus provided by the bard's [inspire competence](performance/inspire_competence) performance by +⅙, and add ⅙ to the number of allies the bard can affect with HISHER [inspire greatness](performance/inspire_greatness) performance.",
	"Add a +⅓ bonus on Perform checks attempted as part of [countersong](performance/countersong) and [distraction](performance/distraction) bardic performances.",
	"Add a +1 bonus on Perform checks to use the [countersong](performance/countersong) *bardic performance* against creatures with the aquatic or water subtypes.",
	"Add a +⅓ bonus to Perform (oratory) checks, including checks using *versatile performance,* as long as the bard first spends at least 10 minutes telling a story.",
	"Add a +½ bonus to [concentration](rule/concentration) checks to cast or maintain spells when taking damage.",
	"Increase the bonus gained from blood sanctuary by ¼.",
	"Add a +¼ dodge bonus to AC while *bloodraging* against creatures at least one size category larger than the bloodrager.",
	"Increase the hit points of the fighter's tongue by 1 and add ½ on all opposed Strength checks to prevent a creature from detaching the fighter's tongue.",
	"Choose the disarm or reposition combat maneuver. Add +⅓ to the fighter's CMB when attempting this maneuver (maximum bonus of +4).",
	"The fighter gains ½ point of DR/- against nonlethal damage (maximum DR 10/-).",
	"Add a +½ circumstance bonus on critical hit confirmation rolls with a weapon of the fighter's choice (maximum bonus +4).",
	"Add +⅓ to damage rolls the fighter makes with weapon attacks against an opponent that he is flanking or that is denied its Dexterity bonus to AC.",
	"Add +½ to damage rolls the fighter makes with weapon attacks against an opponent he is flanking or an opponent that is denied its Dexterity bonus to AC.",
	"Add +¼ to the attack roll bonus from the strix's *hatred* racial trait.",
	"Add a +¼ bonus on Stealth checks and on weapon damage rolls against flat-footed opponents.",
	"Gain ⅙ of a bonus teamwork feat.",
	"Each additional time the hunter selects this benefit, the DR increases by +½ (maximum DR 10/magic).",
	"The hunter's BUDDY is specially trained for extraplanar expeditions and gains a +1 bonus on Stealth and Acrobatics checks while on a plane other than the Material Plane.",
	"Each time the hunter gains another level, this DR increases by ⅓ (maximum DR 5/cold iron).",
	"If the CLASS replaces HISHER BUD, the new BUD gains this damage reduction.",
	"Each time the hunter gains another level, the DR increases by ½ (maximum DR 10/magic).",
	"The BUDDY gains a +¼ luck bonus on saving throws.",
	"Add 1 minute to the number of minutes per day that the hunter can use *animal focus.*",
	"Add +½ on Intimidate, Knowledge, and Sense Motive checks made against outsiders.",
	"Add +½ to the inquisitor's track bonus.",
	"Add a +½ bonus on Intimidate checks to demoralize humanoids.",
	"Gain ¼ of a teamwork feat.",
	"Add +⅙ to the number of times per day the inquisitor can use the *judgment* class feature.",
	"Add +½ to the inquisitor's level for the purpose of determining the effects of one type of *judgment.*",
	"Add a +1 bonus on Knowledge (planes) checks made to identify creatures.",
	"Add a +½ bonus on Perception checks to see through magical disguises or pinpoint invisible creatures.",
	"Add a +½ bonus on Intimidate checks made against creatures with the fire subtype and on Knowledge (planes) checks relating to the Plane of Fire.",
	"Add +½ to Survival checks made to track creatures in total darkness.",
	"Add +½ to Sense Motive checks and Knowledge (dungeoneering) checks to identify creatures.",
	"Add a +½ bonus on Stealth checks while motionless and on opposed Perception checks.",
	"Add a +¼ bonus on damage rolls for critical hits made while using *studied combat.*",
	"Add a +⅓ bonus on inspiration rolls applied to Heal, Knowledge and Linguistics checks.",
	"Add a +¼ bonus on Perception checks when underground and +½ bonus to the investigator's *trap sense* ability regarding stone traps.",
	"Add a +⅓ bonus on inspiration rolls applied to Bluff and Knowledge checks.",
	"Add a +¼ bonus on all inspiration rolls.",
	"Add a +⅓ bonus on critical hit confirmation rolls made while using *studied combat* (maximum bonus of +5).",
	"Add +⅙ rounds to the duration of the investigator's *studied combat.*",
	"Add +⅓ point of damage to earth element blasts that deal damage.",
	"Increase the amount of burn cost reduction when using the kineticist's *gather power* ability by ⅙ point (the minimum burn cost of 0 still applies).",
	"Add a +½ bonus on Bluff, Diplomacy, Intimidate, and Sense Motive skill checks against creatures with the elemental subtype matching the kineticist's primary element.",
	"Add +⅓ point of fire damage to fire-element blasts that deal fire damage.",
	"Add +⅓ to the total number of points of burn that the kineticist can accept before she can't choose to accept additional points of burn.",
	"Add +¼ to the save DC of the kineticist's void infusions and wild talents.",
	"Add a +⅓ bonus on Appraise and Use Magic Device checks involving stone and metal objects.",
	"Increase the duration of the occultist's minor figment by 1 minute, and increase the total concealment miss chance from the occultist's distortion resonant power by 2%. This doesn't increase the maximum miss chance.",
	"Add a +½ bonus on Spellcraft checks to identify the properties of magic items and a +½ bonus on Use Magic Device checks to emulate a race.",
	"Deal an additional ½ point of damage with focus powers.",
	"Add a +⅓ bonus on any skill check attempted as a part of an [occult ritual](rule/occult_rituals).",
	"Add +½ point of negative energy damage to spells that deal negative energy damage.",
	"Treat the oracle's level as +⅓ higher for the purposes of determining which of its racial spell-like abilities it can use.",
	"Add +⅙ to the oracle's level for the purpose of determining the effects of the *oracle's curse* ability.",
	"Select one revelation normally usable a number of times per day equal to 3 + the oracle's Charisma modifier. Add +½ to the number of uses per day of that revelation.",
	"Add +¼ to the armor or natural armor bonus granted by oracle spells she casts on herself.",
	"An oracle with the nature or wood mystery adds one spell from the druid's spell list that isn't on the cleric spell list to the oracle's spell list; she still must select this spell as one of her spells known in order to cast it. This spell must be at least one level below the highest spell level the oracle can cast.",
	"That spell is treated as 1 level higher unless it is also on the oracle spell list.",
	"Add +¼ to the oracle's level for the purpose of determining the effects of the *oracle's curse* ability.",
	"Add +⅙ to the morale bonus on saving throws provided by the paladin's auras.",
	"Add a +½ sacred bonus to saving throws against spells of the shadow subschool or that have the darkness or shadow descriptor.",
	"Choose a creature type (and subtype, if necessary) from the ranger's [favored enemies](ability/favored_enemies) list. Add a +½ bonus on Knowledge checks to identify creatures of that type. You can choose the same creature type up to six times; if you choose the same creature type six times, add +1 point of damage when *smiting* creatures of that type.",
	"Add a +¼ bonus to the morale bonus the paladin grants on allies' saving throws against fear effects.",
	"Add 1 foot to the size of all the paladin's aura class features.",
	"Add a +⅓ bonus on critical hit confirmation rolls made while using *smite evil* (maximum bonus of +5).",
	"Add +1 to the paladin's [resistance](umr/resistance) to one kind of energy (maximum +10).",
	"Add a +¼ bonus to the deflection bonus granted by your *smite evil* ability.",
	"Add +½ minute to the duration of the paladin's *divine bond* with her weapon.",
	"Add a +¼ bonus to the bonus the paladin grants her allies with her *aura of courage* and *aura of resolve* special abilities.",
	"Add a +½ bonus to the paladin's level when determining the effect of *smite evil* against incorporeal and ethereal creatures.",
	"Add +1 to the amount of damage the paladin heals with *lay on hands,* but only when the paladin uses that ability on herself.",
	"Add +⅓ hit point to the paladin's *channel energy* and *lay on hands* abilities (whether using it to heal or harm).",
	"The paladin gains ¼ of a bonus spell per day of the highest-level spell that the paladin can cast.",
	"Add +½ to the paladin's level when determining the effect of *smite evil* against evil-aligned dragons.",
	"Gain ⅙ of a phrenic amplification (or a major amplification if the psychic is at least 11th level).",
	"When casting psychic abjuration spells, add ½ level to the effective caster level of the spell, but only to determine the spell's duration.",
	"Add a +¼ bonus to AC when flat-footed, to a maximum of what the psychic's AC would be if not flat-footed.",
	"When casting psychic divination spells, the psychic adds ½ to the effective caster level of the spell, but only to determine the spell's range and its d% chance to provide correct or meaningful information (such as with augury or divination).",
	"Reduce the arcane spell failure chance for casting skald spells when wearing heavy armor by 1%. Once the total reduction reaches 10%, the skald also receives Heavy Armor Proficiency (if the skald does not already possess it).",
	"Increase the bonus granted by the *well-versed* class feature by ¼ (maximum +8).",
	"Add a +½ bonus to Acrobatics checks to avoid attacks of opportunity and to Perform checks while performing a *raging song.*",
	"Add +⅓ to the result of any sneak attack damage that the slayer deals after all sneak attack damage dice have been totaled.",
	"Add a +⅓ bonus on Knowledge (dungeoneering) checks and on Survival checks when underground.",
	"If the slayer has a +1 bonus on Knowledge (dungeoneering) checks from this ability, he is also considered trained in that skill.",
	"Add +⅓ to the damage the slayer deals with bone weapons (maximum +4).",
	"Add a +⅓ bonus on critical hit confirmation rolls made while using sneak attack (maximum bonus of +5).",
	"Add a +¼ bonus on Disguise, Knowledge (local), and Perception checks.",
	"Add +½ to acid and earth spell or spell-like ability damage.",
	"Choose a terrain type from the ranger's [favored terrain](ability/favored_terrain) list.",
	"Add +½ to either cold or electricity [resistance](umr/resistance) (maximum resistance 10 for either type).",
	"Add +¼ to the DC of enchantment spells.",
	"Choose acid, cold, electricity, or fire damage. Add +½ point of the chosen energy damage to spells that deal the chosen energy damage cast by the sorcerer.",
	"Add +½ to the sorcerer's caster level when determining the range of any spells with the water descriptor.",
	"Add +½ to the sorcerer's caster level when determining the duration of transmutation spells she casts that target the sorcerer or spells she casts with the poison descriptor.",
	"Add +½ to the number of times per day a sorcerer can use the corrupting touch [infernal](sorcbloodline/infernal) bloodline power, or +1 to the total number of rounds per day the sorcerer can use the claws abyssal bloodline power. The sorcerer must possess the applicable power to select these bonuses.",
	"Add a +1 bonus on caster level checks to cast spells underwater.",
	"Add +½ point of damage to any illusion spells of the shadow subschool cast by the sorcerer.",
	"Add a +½ bonus to the damage of spells or spell-like abilities that deal damage of the same energy type as the sorcerer's [draconic](sorcbloodline/draconic) bloodline breath weapon.",
	"Add a +¼ bonus on weapon damage rolls with the slam attacks from ectoplasmic *bonded manifestation.*",
	"Add +⅙ to the shield bonus granted to the spiritualist while under the effects of either *spiritual interference* or *greater spiritual interference.*",
	"Add +½ hit point and +½ skill rank to the BUDDY.",
	"Add 1 foot to the limit of *etheric tether.* This includes how far the BUDDY can be before needing to concentrate and before the *tether* is broken.",
	"The BUDDY gains ⅙ of a bonus feat.",
	"The phantom must meet all prerequisites of the selected feat.",
	"Add +¼ to the swashbuckler's effective class level to determine the extra damage she deals because of the *precise strike* deed when wielding a light pick or a heavy pick. If the swashbuckler has the Slashing Grace feat or another similar effect, she can treat the battleaxe or handaxe as a one-handed piercing melee weapon, and she gains this benefit when wielding the appropriate weapon for the feat as well.",
	"Add a +⅓ bonus on all critical hit confirmation rolls made while using the *precise strike* deed (maximum bonus of +5).",
	"Add +¼ to the AC bonus provided by cover or improved cover.",
	"Add +¼ to the penalty inflicted by *startling appearance,* and a +½ bonus on the Intimidate check for *frightening appearance.*",
	"Increase the bonus from *social grace* on Craft skills by +½.",
	"Gain +⅓ on all Acrobatics, Climb, and Stealth checks in forested areas.",
	"Gain +½ on Bluff checks when attempting to tell a lie that would be true from the point of view of the vigilante's current identity.",
	"Gain ⅙ of a new social talent.",
	"Add +½ to the DC increase from *unshakable.*",
	"Add +½ to the cavalier's level when determining the duration of the *tactician* ability.",
	"Add +½ to damage when using positive energy against undead or using [Alignment Channel](feat/alignment_channel) to damage evil outsiders.",
	"Add a +½ bonus on Knowledge (planes) checks relating to [Axis](rule/axis) and creatures with the lawful subtype.",
	"Add +1 to the caster level of any channeling feat used to affect undead.",
	"Add a +½ bonus on checks made to craft magic items.",
	"Add +½ point of damage when using positive energy against undead.",
	"Add +½ point to negative energy damage dealt by channeling energy and *inflict wounds* spells.",
	"Add a +¼ bonus on caster level checks to remove afflictions (curses, diseases, poisons, etc.).",
	"Add +½ to negative energy spell damage, including inflict spells.",
	"Add +1 to *channel energy* damage dealt to creatures denied their Dexterity bonus to AC (whether or not the creature has a Dexterity bonus to AC).",
	"Add a +½ bonus on Diplomacy checks to gather information and on Knowledge (local and religion) checks to know local religious practices and superstitions.",
	"Add a +1 bonus on caster level checks to overcome the spell resistance of creatures with the aquatic or water subtype.",
	"Add a +½ bonus to damage rolls the cleric makes when using *channel energy* and casting spells that deal negative energy damage or positive energy damage, including *cure* and *inflict* spells. This bonus does not apply to healing via negative energy effects or positive energy effects.",
	"The druid gains a +1 bonus on Knowledge (nature) or Knowledge (planes) checks related to extraplanar flora and fauna.",
	"Each time this reward is selected, increase HISHER resistance to one of these energy types by +1 (maximum 10 for any one type).",
	"The BUDDY gains ¼ point of DR/cold iron (maximum DR 5/cold iron).",
	"Add a +½ bonus on [concentration](rule/concentration) checks. This bonus doubles in a forest or swamp terrain.",
	"Add a +¼ luck bonus on the saving throws of the BUDDY.",
	"Add +½ to the damage dealt by the BUDDY's natural attacks.",
	"Add a +½ bonus on *wild empathy* checks and a +½ bonus on Handle Animal skill checks.",
	"Add a +½ bonus to the druid's *wild empathy* or *plant empathy* checks.",
	"In addition, a druid that selects this bonus at 1st level can choose the Darkness domain with her natural bond ability.",
	"Add +½ to the monk's damage rolls with claw attacks and claw blades.",
	"A monk who selects this bonus at 1st level also treats claw blades as a monk weapon.",
	"If he is an unchained monk, he can use his style strikes with unarmed strike or claw blade attacks.",
	"Reduce the Hardness of any object made of clay, stone, or metal by 1 whenever the object is struck by the monk's unarmed strike (minimum of 0).",
	"Add a +½ bonus on Escape Artist and Stealth checks attempted while in [dim light](rule/dim_light) or darkness.",
	"Add 1 foot to the CLASS's swim speed.",
	"Add +1 to the monk's Acrobatics check bonus gained by spending a point from his *ki* pool. A monk must be at least 5th level to select this benefit.",
	"Add +½ on Escape Artist checks and on Acrobatics checks to cross narrow surfaces.",
	"Add a +¼ bonus to CMD against trip and on damage rolls against prone targets that add the monk's Strength modifier.",
	"Add a +¼ bonus on combat maneuver checks made to grapple or trip.",
	"Add +⅓ to the monk's AC bonus class ability.",
	"Add a +¼ bonus on combat maneuver checks to grapple or trip.",
	"Add 1 foot to the speed the monk can move while making a Stealth check without taking a penalty.",
	"This does not allow the monk to use Stealth while running or charging.",
	"Add a +½ bonus on the monk's saving throws to resist death attacks.",
	"Add +½ point of damage to *elemental assault.*",
	"Add +⅙ to the monk's AC bonus.",
	"Add +⅓ to the result of any *spirit surge* die that the medium rolls.",
	"Add a +½ bonus on saving throws against possession and a +½ bonus on saving throws to end *haunt channeler, location channel,* and *spacious soul.*",
	"Increase the medium's *spirit* bonus by +⅙.",
	"Add a +½ bonus on Bluff, Diplomacy, Intimidate, and Sense Motive skill checks against spirits, undead, phantoms, and creatures native to the Astral Plane.",
	"Increase the bonus the medium gains from its *seance boon* by ⅓ point. This doesn't increase the bonus allies gain from *shared seance.*",
	"Add +⅕ to the bonus allies gain from *shared seance.* This doesn't increase the medium's *seance boon.*",
	"Add +⅙ to the shaman's class level for the purpose of determining the effects of one hex.",
	"Add 5 feet to the range of a chosen shaman hex.",
	"Multiple bonuses from this ability can apply to the same hex, to a maximum of an additional 30 feet for any single hex.",
	"Shamans with the nature or wood spirit add one spell from the druid's spell list that isn't on the shaman spell list to the shaman's spell list; she still must select this spell as one of her spells known in order to cast it.",
	"This spell must be at least one level below the highest spell level the CLASS can cast.",
	"Add one spell from the sorcerer/wizard spell list that isn't on the shaman spell list to the list of spells the shaman knows. This spell must be at least one level below the highest spell level the shaman can cast and be of the illusion (shadow) subschool or have the darkness descriptor.",
	"Add +½ point to the amount of damage dealt or healed by the warpriest's fervor ability.",
	"Add +⅓ to the number of times per day the warpriest can use blessings, but he can only use these additional uses on blessings that affect weapons or armor.",
	"Add +¼ to the warpriest's effective level when determining the damage of his sacred weapon.",
	"Gain ⅙ of a new bonus combat feat.",
	"Add a +½ bonus on Spellcraft checks to identify cursed items and on Sense Motive checks to notice enchantment or possession.",
	"If the CLASS is ever replaces HISHER BUD, the new BUD knows these bonus spells.",
	"Add +⅓ to the saving throw DC to resist the poison of the BUDDY.",
	"Add +5 feet to the distance at which the BUDDY grants the [Alertness](feat/alertness) feat (maximum +20 feet).",
	"Add +1 to the witch's caster level for one of her patron spells (to a maximum of +3 caster level to any one spell).",
	"Add +5 feet to the range of one hex with a range other than \"touch\".",
	"Add a +½ bonus on Stealth checks and Perception checks made by the BUDDY.",
	"Add one spell from the sorcerer/wizard spell list that isn't on the witch spell list to the BUDDY. This spell must be at least one level below the highest spell level the witch can cast and be of the illusion (shadow) subschool or have the darkness descriptor.",
	"Add +⅓ to the wizard's caster level when casting spells with the lawful descriptor or spells that create magical glyphs, runes, or symbols.",
	"Add +1 to the wizard's caster level check when attempting to cast a spell with the fire descriptor underwater.",
	"Select one item creation feat known by the wizard.",
	"Whenever he crafts an item using that feat, the amount of progress he makes in an 8-hour period increases by 200 gp (50 gp if crafting while adventuring).",
	"This does not reduce the cost of the item; it just increases the rate at which the item is crafted.",
	"Add +⅓ to the wizard's effective caster level when casting a spell with the chaotic descriptor.",
	"Add +½ to the BUDDY's Will saves against enchantment effects, or increase the hit points of your bonded item by 1.",
	"Select one arcane school power from the air or wood elemental schools that the wizard can currently use.",
	"The wizard treats her class level as though it were +⅙ higher (to a maximum of +2) when determining the effects of that power.",
	"This spell is treated as one level higher unless it also appears on the wizard spell list.",
	"Add one spell from the wizard spell list to the wizard's spellbook.",
	"The spell must be an illusion spell of the shadow subschool or have the darkness descriptor.",
	"Add 1 foot to the range of the ranger's *hunter's bond* ability when granting a bonus to allies.",
	"Choose a weapon from the following list: longbow, shortbow, or any weapon with \"elven\" in its name. Reduce the penalty on ranged attack rolls underwater made with this weapon by 1.",
	"Add +¼ to a single existing favored terrain bonus (maximum +2 per favored terrain).",
	"Add +⅓ to initiative checks in one of the ranger's favored terrains.",
	"Add +⅕ to the ranger's favored enemy bonus against undead. The ranger must have favored enemy (undead) to select this option.",
	"Add a +½ bonus on Perception and Survival checks made on the Plane of Shadow.",
	"Add +¼ to the damage dealt by the BUDDY's natural attacks.",
	"Add a +¼ bonus on initiative checks and Survival checks when the ranger is in a favored terrain.",
	"Add a +½ bonus on damage dealt to dogs (and dog-like creatures) and horses (and horse-like creatures).",
	"Add a +1 racial bonus on Swim skill checks. When this bonus reaches +8, the ranger gains a swim speed of 15 feet (this does not grant the ranger another +8 racial bonus on Swim checks).",
	"The duration of the ranger's *companion bond* increases by 1 round.",
	"Add a +¼ dodge bonus to Armor Class against the ranger's favored enemies.",
	"Add +¼ to a single existing favored enemy bonus (maximum bonus +1 per favored enemy).",
	"Add +¼ to the number of opponents the ranger may select when using *hunter's bond* to grant a bonus to allies. All selected creatures must be of the same type.",
	"Add +1 to the BUDDY's CMD when adjacent to the ranger.",
	"Add +¼ to a single existing favored terrain bonus (maximum bonus +1 per favored terrain).",
	"Add +½ round to the duration of the bonus granted to the companions of the ranger using his *hunter's bond* ability.",
	"Add +1 to acid, cold, electricity, or fire [resistance](umr/resistance).",
	"Add +¼ dodge bonus to Armor Class against the ranger's favored enemies.",
	"Gain ⅙ of an additional favored terrain. Gaining a favored terrain in this manner does not increase the bonuses provided by his other favored terrains.",
	"Add a +½ bonus on Climb checks.",
	"Add 1 foot to the shifter's base speed.",
	"This bonus applies only when the shifter is wearing no armor.",
	"Add a +1 bonus on Knowledge (nature) checks relating to plants and flying animals.",
	"Add +⅕ to the shifter's natural armor bonus when using *wild shape* to assume a major form.",
	"Each time this reward is selected, increase that resistance by 1, to a maximum of resistance 10. Once the gnome reaches energy resistance 10, she can select a new type of energy to build her resistance to the next time she selects this favored class option.",
	"Add a +1 bonus on Survival checks to follow tracks through swamps.",
	"Add a +½ bonus on Survival checks to get along in the wild, to avoid getting lost, and to avoid all natural hazards.",
	"Increase the AC bonus from *defensive instinct* by +¼ against creatures of size Large or larger.",
	"Add a +⅓ bonus on critical hit confirmation rolls when using shifter claws (maximum bonus of +5).",
	"Add +⅓ to the number of minutes the shifter can assume her minor form each day.",
	"Add +¼ to the number of minutes the shifter can assume her minor form each day.",
	"Add a +¼ bonus on Stealth checks while in the shifter's minor or major form.",
	"Add a +½ bonus on Acrobatics checks to jump and a +½ bonus on *wild empathy* checks.",
	"Add a +1 bonus on Knowledge (nature) checks relating to plants.",
	"This spell is treated as 1 level higher unless it also appears on the magus spell list.",
	"Select one known magus arcana usable only once per day. The magus adds +⅙ to the number of times it can be used per day. Once that magus arcana is usable twice per day, the magus must select a different magus arcana.",
	"Add one of the following weapon special abilities to the list of weapon special abilities the magus may add to his weapon using his *arcane pool:* [allying](magic-enh/allying), [conductive](magic-enh/conductive), [corrosive](magic-enh/corrosive), [corrosive burst](magic-enh/corrosive_burst), [defending](magic-enh/defending), [ghost touch](magic-enh/ghost_touch), [menacing](magic-enh/menacing), [merciful](magic-enh/merciful), [mighty cleaving](magic-enh/mighty_cleaving), [vicious](magic-enh/vicious).",
	"Once an ability has been selected with this reward, it cannot be changed.",
	"Add ½ of an illusion spell from the sorcerer/wizard spell list that isn't on the magus spell list to the magus's spellbook. The magus treats this spell as if it were on the magus spell list at the same level as on the sorcerer/wizard list. This spell must be at least one level below the highest spell level the CLASS can cast.",
	"Add a +½ bonus on [concentration](rule/concentration) checks made to cast defensively.",
	"Add 2 rounds to the duration of the magus's *arcane pool* enhancements.",
	"Reduce the misfire chance for one type of firearm by ¼. You cannot reduce the misfire chance of a firearm below 1.",
	"The gunslinger reduces the amount of time needed to restore a broken firearm using the Gunsmithing feat by 5 minutes (maximum reduction of 50 minutes).",
	"Add a +¼ bonus on attack rolls when making a [utility shot](deed/utility_shot) or a [dead shot](deed/dead_shot).",
	"Add +¼ to the dodge bonus to AC granted by the *nimble* class feature (maximum +2) or +¼ to the AC bonus gained when using the gunslinger's *dodge* deed.",
	"Add a +⅓ bonus on attack rolls when using the [pistol whip](deed/pistol_whip) deed.",
	"Add +½ to the bonus on initiative checks the gunslinger makes while using her [gunslinger initiative](deed/gunslinger_initiative) deed.",
	"Add +¼ to the dodge bonus to AC granted by the *nimble* class feature (maximum +4).",
	"Add a +½ bonus on initiative checks when the gunslinger has at least 1 grit point.",
	"Add +1 to either cold or electricity [resistance](umr/resistance) while *raging* (maximum resistance 15 for either type).",
	"Add +¼ to the barbarian's damage reduction. If the barbarian would not otherwise have damage reduction, this damage reduction can be bypassed by cold iron.",
	"Add a +½ bonus to the barbarian's *trap sense.*",
	"Add +½ on critical hit confirmation rolls for attacks made with unarmed strikes or natural weapons (maximum bonus of +4).",
	"Add +⅕ to the armor bonus granted by hide armor or bone armor the barbarian wears (maximum +3).",
	"Add +¼ to the bonus on Reflex saves and dodge bonus to AC against attacks made by traps granted by *trap sense.*",
	"Add a +½ bonus to *trap sense* or +⅓ to the bonus from the [surprise accuracy](ragepower/surprise_accuracy) rage power.",
	"Add 1 foot to the range increment of thrown weapons the barbarian wields.",
	"Add a +½ bonus to *trap sense* or +⅓ to the bonus from the [superstitious](ragepower/superstitious) rage power.",
	"While you are *raging,* your racial natural attacks deal +¼ point of damage.",
	"When *raging,* add +¼ to the barbarian's *swarming* trait's flanking bonus on attack rolls.",
	"Add +⅓ to the bonus from the [superstitious](ragepower/superstitious) rage power.",
	"Add a +¼ bonus to weapon damage rolls that the barbarian makes against opponents that are within [dim light](rule/dim_light) or darkness.",
	"Reduce the hardness of any object made from clay, stone, or metal by 1 whenever the object is struck by the brawler's unarmed strike (minimum 0).",
	"Add a +1 bonus to the brawler's CMD when resisting a grapple or overrun combat maneuver.",
	"Add a +1 bonus to the brawler's CMD when resisting two combat maneuvers of the brawler's choice.",
	"Add a +½ insight bonus on attack rolls made with the beak as a secondary natural attack (to a maximum of +3); the brawler must have a beak natural attack to select this option.",
	"Gain ⅕ of a new [Fleet](feat/fleet) feat.",
	"Each additional time the summoner selects this benefit, the DR/evil increases by +½ (maximum DR 10/evil).",
	"As long as the BUDDY has a swim speed, add 5 feet to its swim speed (max +20 feet).",
	"The amount of time the summoner must spend to summon his BUD is reduced by 1 round, to a minimum of 1 round.",
	"These bonus evolution points must be spent on evolutions that grant spell-like abilities or protect the eidolon from spells.",
	"These bonus evolution points must be spent on evolutions that deal fire damage or protect the eidolon from fire (for example, resistance, energy attacks, immunity, breath weapon, and so on).",
	"Add +¼ to the summoner's *shield ally* bonus (maximum +2).",
	"Add a +1 bonus on saving throws against poison made by the BUDDY.",
	"If the BUDDY has an aquatic base form, add +5 feet to the range of the summoner's *life link* ability.",
	"Increase the mesmerist's bonus damage from *painful stare* by +¼ point.",
	"Add a +½ bonus on Acrobatics checks to move through a threatened area and a +½ bonus on Bluff checks to feint.",
	"Add a +¼ bonus on grapple and trip combat maneuver checks.",
	"Choose one mind-affecting mesmerist trick that the mesmerist knows. The mesmerist can affect intelligent plant creatures with that trick or spell as if they weren't immune to mind-affecting effects.",
	"When casting mesmerist enchantment spells, add ½ to the effective caster level of the spell, but only to determine the spell's duration.",
	"Increase the mesmerist's bonus damage from *painful stare* by +½ point.",
	"Increase the mesmerist's *towering ego* bonus by +⅓ point (to a maximum increase of +2).",
	"The mesmerist learns ¼ of a new trick.",
	"Add +⅕ to the Hit-Die limit and the total number of Hit Die affected with each enchantment or illusion spell the mesmerist casts. This bonus stacks with the mesmerist's *mental potency* class feature and is applicable under the same conditions as that ability.",
	"Add a +1 bonus on [concentration](rule/concentration) checks to maintain the mesmerist's *hypnotic stare.*",
	"Add +¼ to the AC bonus provided by the [meek facade](trick/meek_facade) mesmerist trick.",
	"Add +¼ to the mesmerist's level for the purpose of determining the effect of mesmerist tricks.",
	"Add a +1 bonus on Disable Device and Use Magic Device checks related to glyphs, scrolls, symbols, and other magical writings.",
	"Add a +½ bonus on Bluff checks to feint and Sleight of Hands checks to pickpocket.",
	"Add a +½ bonus on Stealth checks and Perception checks made in [dim light](rule/dim_light) or darkness.",
	"Add a +½ bonus on Bluff checks to feint and pass secret messages.",
	"Add a +½ bonus on Disable Device checks regarding stone traps and a +½ bonus to *trap sense* regarding stone traps.",
	"Add +1 to the number of times per day the rogue can cast a cantrip or 1st-level spell gained from the [minor magic](talent/minor_magic) or [major magic](talent/major_magic) talent. The number of times this bonus is selected for the *major magic* talent cannot exceed the number of times it is selected for the *minor magic* talent. The rogue must possess the associated rogue talent to select these options.",
	"Add a +½ bonus on Stealth and Sleight of Hand checks made while in [dim light](rule/dim_light) or darkness.",
	"Add a +½ bonus on Stealth checks while on a plane other than the Material Plane.",
	"Add a +½ bonus to Bluff checks to pass secret messages or create a distraction to hide and on Sleight of Hands checks to pickpocket.",
	"Choose one type of ranger [favored enemy](ability/favored_enemy) (or one subtype in case of either humanoid or outsider).",
	"The rogue adds ½ to her sneak attack damage when using sneak attack against creatures of the chosen type (maximum +3).",
	"The rogue gains a +½ bonus on Disable Device and Use Magic Device checks related to glyphs, symbols, scrolls, and other magical writings.",
	"Add +¼ to the Perception and Disable Device DCs of traps the rogue creates.",
	"Add a +1 bonus on the rogue's sneak attack damage rolls during the surprise round or before the target has acted in combat.",
	"Add a +½ bonus on Perception checks while in a forest or swamp.",
	"Add a +½ bonus on Acrobatics checks to jump and a +½ bonus on Intimidate checks to demoralize enemies.",
	"Add +½ to the rogue's *trap sense* bonus to AC.",
	"Add a +½ bonus on Escape Artist checks.",
	"Add a +½ bonus on Acrobatics checks to jump and a +½ bonus on Sense Motive checks.",
	"Add +½ to sneak attack damage dealt to creatures with the outsider type.",
	"Add a +½ bonus to Climb checks and on Stealth checks in forests.",
	"Add a +½ bonus to Stealth and Sleight of Hand checks to steal or hide objects."
];


type Log = [number, number, number][];
type Logger = { [key: string]: Source };

const sources: string[] = [
	"Advanced Race Guide", // 0
	"Blood of the Beast",
	"Advanced Player's Guide",
	"Plane-Hopper's Handbook",
	"Blood of Shadows",
	"Ultimate Wilderness", // 5
	"Advanced Class Guide",
	"Blood of the Sea",
	"Horror Adventures",
	"Occult Adventures",
	"Goblins of Golarion", // 10
	"Heroes of Golarion",
	"Legacy of the First World",
	"Pathfinder #101: The Kintargo Contract",
	"Legacy of Dragons",
	"Monster Codex", // 15
	"Kobolds of Golarion",
	"Darklands Revisited",
	"Ultimate Intrigue",
	"Wilderness Origins",
	"Pathfinder Unchained", // 20
	"Inner Sea Races",
	"Blood of Angels",
	"Agents of Evil",
	"Cheliax, the Infernal Empire",
	"Blood of the Coven", // 25
	"Blood of the Night",
	"Heroes from the Fringe",
	"Heroes of the Wild",
	"Rival Guide",
	"Heroes of the Streets", // 30
	"Heroes of the High Court",
	"Pathfinder #124: City in the Deep",
	"Bastards of Golarion",
	"Halflings of Golarion",
	"Blood of the Elements", // 35
	"Blood of Fiends"
];
const links = sources.map(source => source.toLowerCase().replace(/[-_ /]/g, "_").replace(/[^a-z0-9_]/g, ""));

type MDpProps = ClassAttributes<HTMLParagraphElement> & AnchorHTMLAttributes<HTMLParagraphElement> & ExtraProps;

const p = (props: MDpProps) => {
	const { children } = props;
	return <>{children}</>;
};
const components = {...comp, p};


const getByClass = (input: string): FoundObject => {
	const index = classes.findIndex(bit => bit.class === input);
	if(index < 0) {
		console.log("ERROR looking for class " + input);
		return { data: {}, found: [] };
	}
	return {
		data: classes[index],
		found: all
			.filter(bit => bit[0] === index)
			.map(arr => [...arr.slice(2), races[arr[1]]] as Found)
	};
};
const getByRace = (input: string): FoundObject => {
	const index = races.findIndex(bit => bit.race === input);
	if(index < 0) {
		console.log("ERROR looking for race " + input);
		return { data: {}, found: [] };
	}
	return {
		data: races[index],
		found: all
			.filter(bit => bit[1] === index)
			.map(arr => [...arr.slice(2), classes[arr[0]]] as Found)
	};
};

const doSubs = (input: string, data: Data) => {
	return substitutions.reduce((previous, current) => {
		const [ pattern, prop ] = current;
		const possible = data[prop];
		const thing = previous.replaceAll(pattern, possible === undefined ? `[MISSING ${prop}]` : possible);
		possible === undefined && thing !== previous && console.log("missing", prop);
		return thing;
	}, input);
};

const RacialOptions: FC<Props> = (props) => {
	const {prefix, cls, race, subraces, alternates} = props;
	const { data, found } = useMemo(() => cls !== undefined ? getByClass(cls) : getByRace(race), [cls, race]);
	const header = cls ? data.title : data.properName;
	const temp: {[key: string]: boolean} = {};
	const $log = useMemo(() => {
		const log: Log = [];
		const subs: Logger = {};
		const alts: Logger = {};
		const opts: Logger = {};
		if(subraces) {
			subraces.forEach((sub, i) => {
				sub[1].forEach((source, j) => {
					const [s, pg] = source;
					const found = log.findIndex(x => x[0] === s && x[1] === pg);
					let n = found + 1, m = 1;
					if(found < 0) {
						log.push([s, pg, 1]);
						n = log.length;
					} else {
						m = ++log[found][2];
					}
					subs[`${i}-${j}`] = [n, m];
				});
			});
		}
		if(alternates) {
			alternates.forEach((alt, i) => {
				const [,...all] = alt;
				all.forEach((a, j) => {
					const {sources: s, copies} = $alternates[a];
					const sources = s !== undefined ? s : $alternates[copies].sources;
					(sources || []).forEach((source, k) => {
						const [s, pg] = source;
						const found = log.findIndex(x => x[0] === s && x[1] === pg);
						let n = found + 1, m = 1;
						if(found < 0) {
							log.push([s, pg, 1]);
							n = log.length;
						} else {
							m = ++log[found][2];
						}
						alts[`${i}-${j}-${k}`] = [n, m];
					})
				});
			});
		}
		if(found) {
			found.forEach((fco, i) => {
				const [, sources, data2, data1] = fco;
				sources.forEach((source, j) => {
					const [s, pg] = source;
					const found = log.findIndex(x => x[0] === s && x[1] === pg);
					let n = found + 1, m = 1;
					if(found < 0) {
						log.push([s, pg, 1]);
						n = log.length;
					} else {
						m = ++log[found][2];
					}
					opts[`${i}-${j}`] = [n, m];
				})
			});
		}
		return { log, subs, alts, opts };
	}, [subraces, alternates, found]);
	return (<>
		{subraces ? (<>
			<h3 id={prefix+"subraces"} data-hash-target>Subraces</h3>
			{
				subraces!.map((sub, ind) => {
					const [title, sources, jsx] = sub;
					return (
						<F key={`${prefix}-${ind}`}><h4>{title}{
							sources.map((source, i) => {
								const [n, m] = $log.subs[`${ind}-${i}`];
								const blid = `backlink-${prefix}ref-${n}-${m}`;
								const ilid = `${prefix}ref-${n}-${m}`;
								const to = `${prefix}fn-${n}`;
								const key = `${ilid}--${i}`;
								return (
									<F key={key}> <sup><InnerLink showBacklink={blid} id={ilid} data-hash-target to={to}>{n}</InnerLink></sup></F>
								);
							})
						}</h4>{jsx}</F>
					);
				})
			}
		</>) : ""}
		{alternates ? (<>
			<h3 id={`${prefix}alternate-racial-traits`} data-hash-target>{header} Alternate Racial Traits</h3>
			{
				alternates.map((alt, i) => {
					const [title, ...alts] = alt;
					return (
						<Block titled key={`${prefix}-alternate-racial-trait-replacement-block-${i}`}>
							<Row><Cell>Replaces <span className="bigHl">{title}</span></Cell></Row>
							{
								alts.map((a, j) => {
									const {title: t, sources: s, content: c, copies, add} = $alternates[a];
									const title = copies === undefined ? t : $alternates[copies].title;
									const sources = copies === undefined ? s : $alternates[copies].sources!;
									const content = copies === undefined ? c : <>{$alternates[copies!].content!}{add}</>;
									return (
										<Row key={`${prefix}-alternate-racial-trait-${a}`}>
											<Cell>{title}{
												sources.map((source, k) => {
													const [n, m] = $log.alts[`${i}-${j}-${k}`];
													const blid = `backlink-${prefix}ref-${n}-${m}`;
													const ilid = `${prefix}ref-${n}-${m}`;
													const to = `${prefix}fn-${n}`;
													const key = `${ilid}--${k}`;
													return (
														<F key={key}> <sup><InnerLink showBacklink={blid} id={ilid} data-hash-target to={to}>{n}</InnerLink></sup></F>
													);
												})
											}</Cell>
											<Cell>{content}</Cell>
										</Row>
									);
								})
							}
						</Block>
					);
				})
			}
		</>) : ""}
		{ race && found.length ? (
			<h3 id={`${prefix}favored-class-options`} data-hash-target>{header} Favored Class Options</h3>
		) : ""}
		<div className="hanging striped">
			{found.map((fco, i) => {
				const [bonuses, sources, data2, data1 = {}] = fco;
				const alldata = {...basics, ...data, ...data2, ...data1};
				const text = bonuses.map(n => $bonuses[n] || `[INVALID ${n}]`).join(" ");
				const option = race ? alldata.title : alldata.properName;
				return (
					<Duo key={`${prefix}-favored-class-option-${i}`} title={option}>
						<Markdown components={components}>{doSubs(text, alldata)}</Markdown>
						{
							sources.map((source, j) => {
								const [n, m] = $log.opts[`${i}-${j}`];
								const blid = `backlink-${prefix}ref-${n}-${m}`;
								const ilid = `${prefix}ref-${n}-${m}`;
								const to = `${prefix}fn-${n}`;
								const key = `${ilid}--${j}`;
								return (
									<F key={key}> <sup><InnerLink showBacklink={blid} id={ilid} data-hash-target to={to}>{n}</InnerLink></sup></F>
								);
							})
						}
					</Duo>
				);
			})}
		</div>
		<section data-footnotes>
			<h3 id={`${prefix}label`}>Footnotes</h3>
			<ol>
				{$log.log.map((arr, index) => {
					const [s, page, multiples] = arr;
					const source = sources[s];
					const link = !temp[source];
					link && (temp[source] = true);
					const num = index + 1;

					const key = `${prefix}fn-${num}`;
					const backlinks: ReactNode[] = [
						<InnerLink key={`to-backlink-${key}-1`} id={`backlink-${prefix}ref-${num}-1`} to={`${prefix}ref-${num}-1`}>↩</InnerLink>
					];
					let m = 2;
					while(multiples >= m) {
						backlinks.push(
							<F key={`to-backlink-${key}-${m}`}> <InnerLink
								to={`${prefix}ref-${num}-${m}`}
								id={`backlink-${prefix}ref-${num}-${m}`}
							>↩<sup>{m}</sup></InnerLink></F>
						);
						m++;
					}
					return <li key={key} id={key}>
						<p>{link ? (
							<Link to={`/source/${links[s]}`}>{source}</Link>
						) : source} pg. {page} {backlinks}</p>
					</li>;
				})}
			</ol>
		</section>
	</>);
};

export default RacialOptions;
