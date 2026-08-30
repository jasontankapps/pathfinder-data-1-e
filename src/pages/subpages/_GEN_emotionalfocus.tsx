import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
const _not_found = {title: "Unknown", jsx: <><h2 id="emotionalfocus-not_found-unknown">Unknown</h2>
<p>Unable to find the requested emotional focus.</p>
</>};
const _anger = {title: "Anger", jsx: <><h2 id="emotionalfocus-anger-anger">Anger</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 80</Link><br/>Phantoms with this emotional focus are filled with seething anger from events in their past lives. Phantoms with this focus often take the form of hulking brutes with furrowed brows or of frenzied creatures that always seem ready to strike down those who come too near. Many times, these phantoms exude a bright red aura, especially when they are engaged in combat, or they seem to breathe a red mist in shallow pants from behind clenched, phantasmal teeth.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/intimidate">Intimidate</Link> and <Link to="/skill/survival">Survival</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Fortitude and Will</Cell></Row></Block>
<Ability id="strength-focus" icon={["upgrade","broken-shield"]}>
<Pair single id="strength-focus">Strength Focus</Pair>
<Pair title="Passive Ability">The phantom gains a +2 bonus to Strength and a -2 penalty to Dexterity. Instead of the phantom gaining a bonus to Dexterity as the spiritualist gains levels, an anger-focused phantom gains a bonus to Strength instead.</Pair>
</Ability>
<Ability id="powerful-strike-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="powerful-strike-ex" flavor="A phantom with this focus deals more damage with its slam attacks.">Powerful Strike (Ex)</Pair>
<Pair title="Ability">The phantom deals slam damage as a creature <Link to="/misc/one_size_category">one size category</Link> larger than its current size. The phantom also gains <Link to="/feat/power_attack">Power Attack</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="aura-of-fury-su" icon={["aura","upgrade","broken-shield"]}>
<Pair single id="aura-of-fury-su">Aura of Fury (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 20-foot-radius aura of fury. Creatures within the aura gain a +2 bonus on melee attack rolls but take a -2 penalty to AC. Ending the aura is a <strong className="hl">free action</strong>.</Pair>
<Pair title="Special">The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
<Ability id="ferocious-mien-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="ferocious-mien-su">Ferocious Mien (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">Once per day, a phantom in ectoplasmic form can grow more ferocious and frightening. It becomes one size category larger than its current size, as affected by an <Link to="/spell/enlarge_person">enlarge person</Link> spell, and grows fiercer in combat, as if affected by a <Link to="/spell/rage">rage</Link> spell. This effect lasts for 1 round per class level of the spiritualist.</Pair>
<Pair title="At 18th Level">A phantom using <em>ferocious mien</em> also gains the <Link to="/umr/frightful_presence">frightful presence</Link> extraordinary ability (range 30 feet, duration 5d6 rounds).</Pair>
</Ability>
<Ability id="furious-wail-su" icon={["magic-swirl"]}>
<Pair single id="furious-wail-su">Furious Wail (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Standard Action">Once per day, the phantom can emit a single angry wail that acts as <Link to="/spell/wail_of_the_banshee">wail of the banshee</Link>. The phantom uses its Hit Dice as its caster level for the effect, and the DC of the effect is 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier.</Pair>
<Pair title="Special">The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
</>};
const _dedication = {title: "Dedication", jsx: <><h2 id="emotionalfocus-dedication-dedication">Dedication</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 80</Link><br/>Either through a sense of love or the desire to finish some unfinished task, a phantom with this emotional focus has an undying devotion to something or someone in the world. It's often the case that a phantom with this emotional focus has a strong familial tie with its spiritualist master. A dedication phantom most often appears as a strong and stern protector with a watchful gaze, and its service to its spiritualist is unwavering. These spirits exude auras of blue, or sometimes rose if their love for their spiritualist masters in life was great. Many times these auras manifest as a halo, giving these phantoms a divine appearance, no matter their actual alignment or opinions on matters of religion.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Reflex and Will</Cell></Row></Block>
<Ability id="iron-will" icon={["stairs-goal"]}>
<Pair single id="iron-will">Iron Will</Pair>
<Pair title="Ability">The phantom gains <Link to="/feat/iron_will">Iron Will</Link> as a bonus feat. Furthermore, when the phantom is within its master's consciousness, it grants the benefits of Iron Will to its master if its master doesn't have that feat.</Pair>
</Ability>
<Ability id="dutiful-strike-su" icon={["upgrade"]}>
<Pair single id="dutiful-strike-su">Dutiful Strike (Su)</Pair>
<Pair title="Ability">When a creature makes an attack against the phantom's master, the phantom gains a +2 bonus on attack rolls against that target, and deals damage against that target as if the phantom were <Link to="/misc/one_size_category">one size category</Link> larger. For the purposes of this ability, an attack includes any harmful spell targeting the spiritualist master of whose area or effect includes the spiritualist master.</Pair>
<Pair title="Special"><em>Dutiful strike</em> lasts for 1 minute, until another creature attacks the phantom's spiritualist master (at which point this effect transfers to the new attacker), or until the attacking creature is reduced to fewer than 0 hit points, whichever occurs first.</Pair>
</Ability>
<Ability id="defending-aura-su" icon={["aura","shield-reflect"]}>
<Pair single id="defending-aura-su">Defending Aura (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 10-foot-radius aura that grants protection to nearby allies. Allies within the aura gain a +2 deflection bonus to AC and a +2 bonus to CMD and on all saving throws. Deactivating the aura is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="devoted-servant-su" icon={["shield-reflect"]}>
<Pair single id="devoted-servant-su">Devoted Servant (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">When the spiritualist is caught unawares by an attack (such as an attack made in a surprise round or while the spiritualist is asleep or an attack by a creature using Stealth), if the phantom is not fully manifested, it automatically fully manifests from the spiritualist's consciousness to protect its master. The phantom stays manifested as long as the spiritualist is unaware and in danger. This ability requires no action from the spiritualist.</Pair>
</Ability>
<Ability id="steadfast-devotion-su" icon={["armor-upgrade"]}>
<Pair single id="steadfast-devotion-su">Steadfast Devotion (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">The phantom becomes immune to detrimental mind-affecting effects and all forms of possession, such as <Link to="/spell/magic_jar">magic jar</Link> and <Link to="/spell/possession">possession</Link>. Furthermore, the phantom is immune to <Link to="/spell/banishment">banishment</Link>, <Link to="/spell/dismissal">dismissal</Link>, and similar effects.</Pair>
</Ability>
</>};
const _despair = {title: "Despair", jsx: <><h2 id="emotionalfocus-despair-despair">Despair</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 81</Link><br/>Some creatures die in such horrific ways, or live such pointless and senseless lives, that despair grips their very beings. Phantoms with this focus use misery as a weapon, inflicting the living with the gloom of the phantoms' continued existence. Despair phantoms often appear twisted or wounded, showing the grisly circumstances of their demise. Their coloration tends to have a grayish or sickly green cast. When they speak, they do so in terrifying whispers or high-pitched screeches.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/intimidate">Intimidate</Link> and <Link to="/skill/stealth">Stealth</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Fortitude and Will</Cell></Row></Block>
<Ability id="power-from-despair" icon={["upgrade"]}>
<Pair single id="power-from-despair">Power from Despair</Pair>
<Pair title="Passive Ability">The phantom gains a +2 bonus on attack and damage rolls against creatures that are shaken, frightened, panicked, cowering, or subject to effects such as <em>aura of despair</em> or <em>crushing despair.</em></Pair>
</Ability>
<Ability id="miserable-strike-su" icon={["armor-downgrade"]}>
<Pair single id="miserable-strike-su">Miserable Strike (Su)</Pair>
<Pair title="Ability">If the phantom hits a creature with a slam attack, that creature must succeed at a Will saving throw (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) or take a -2 penalty on attack and damage rolls for 1 round.</Pair>
<Pair title="Special">This is a mind-affecting fear and emotion effect. Penalties from multiple hits don't stack with themselves.</Pair>
</Ability>
<Ability id="aura-of-despair-su" icon={["aura","armor-downgrade"]}>
<Pair single id="aura-of-despair-su">Aura of Despair (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 10-foot aura of despair. Enemies within the aura take a -2 penalty on all saving throws.</Pair>
<Pair title="Special">This is a fear effect. Deactivating the aura is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="despairing-shout-su" icon={["magic-swirl"]}>
<Pair single id="despairing-shout-su">Despairing Shout (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Standard Action">Three times per day, the phantom can emit a shout that acts as <Link to="/spell/crushing_despair">crushing despair</Link>. The phantom uses its Hit Dice as its caster level for the effect, and the DC of the effect equals 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier.</Pair>
<Pair title="Special">The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
<Ability id="inescapable-despair-su" icon={["upgrade"]}>
<Pair single id="inescapable-despair-su">Inescapable Despair (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">If the phantom hits with its slam attack, the creature hit doesn't get a save to resist the effects of <em>miserable strike.</em></Pair>
</Ability>
</>};
const _desperation = {title: "Desperation", jsx: <><h2 id="emotionalfocus-desperation-desperation">Desperation</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 13</Link><br/>A phantom with this emotional focus died desperate and panicking - a victim of drowning, suffocation, or some other inexorable and traumatic death. The phantom relives its horrific demise over and over, futilely clawing at its foes to save itself and dragging them down with it. Desperation phantoms often hold power over water, though a phantom that died in a cave-in might display powers that are reminiscent of pressing rock instead. Desperation phantoms eschew coherent forms, usually appearing as a cloud of grasping hands and screaming faces. A blue-gray aura tends to surround these phantoms when they manifest.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/acrobatics">Acrobatics</Link> and <Link to="/skill/escape_artist">Escape Artist</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Reflex and Will</Cell></Row></Block>
<Ability id="combat-reflexes" icon={["stairs-goal"]}>
<Pair single id="combat-reflexes">Combat Reflexes</Pair>
<Pair title="Ability">The phantom gains <Link to="/feat/combat_reflexes">Combat Reflexes</Link> as a bonus feat. Furthermore, when the phantom is within its master's consciousness, it grants the benefits of Combat Reflexes to its master (if its master doesn't have that feat).</Pair>
</Ability>
<Ability id="frantic-grip-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="frantic-grip-ex">Frantic Grip (Ex)</Pair>
<Pair title="Ability">The phantom can add its Dexterity modifier instead of its Strength modifier to its combat maneuver bonus when attempting to <Link to="/rule/grapple">grapple</Link>. When the phantom is below half its total hit points, it gains a +4 bonus on grapple attempts and to its CMD against grapple combat maneuvers.</Pair>
</Ability>
<Ability id="aura-of-desperation-su" icon={["aura"]}>
<Pair single id="aura-of-desperation-su">Aura of Desperation (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 10-foot-radius aura that fills its foes with the sensation of drowning, suffocation, or another terrible impending death. Enemies attempting to cast a spell with a verbal component within the aura must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 10 + half the phantom's Hit Dice + the level of the spell being cast) or lose the spell.</Pair>
<Pair title="Special">This is a mind-affecting effect. Deactivating the aura is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="clutch-of-terror-su" icon={["bowman"]}>
<Pair single id="clutch-of-terror-su">Clutch of Terror (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">Three times/day</Pair>
<Pair title="Standard Action"><p>The phantom can summon a mass of hands to grapple an enemy within 60 feet. The hands immediately attempt a grapple combat maneuver against the target using the phantom's statistics (including the phantom's CMB), except the hands are collectively considered to be the same size as the target. On following rounds, the hands attempt to maintain the grapple (the hands cannot pin the target, however).</p>
<p>Each round that the hands successfully grapple a target, the hands also deal the phantom's normal slam damage to the target. The hands immediately disappear and the effect ends if the hands fail to grapple their target, if the target escapes the grapple or dies, or if the phantom ceases to be manifested. The effect also ends if the phantom uses this ability against a different target.</p>
</Pair>
</Ability>
<Ability id="burst-of-desperation-sp" icon={["upgrade"]}>
<Pair single id="burst-of-desperation-sp">Burst of Desperation (Sp)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Standard Action">Once per day, the phantom can affect itself and the spiritualist with the effects of <Link to="/spell/haste">haste</Link>. The caster level of this effect is equal to the spiritualist's caster level. The phantom or the spiritualist can dismiss this effect as a <strong className="hl">free action</strong>.</Pair>
<Pair title="Special">The duration of this ability must be used all at once, and any of the effect's remaining rounds per day are lost after this ability is dismissed.</Pair>
</Ability>
</>};
const _fear = {title: "Fear", jsx: <><h2 id="emotionalfocus-fear-fear">Fear</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 82</Link><br/>A phantom with this emotional focus suffered from overwhelming fear in life. As a phantom, it is able to channel that fear into a terrifying weapon. Fear phantoms are often horrifying to behold. Sometimes they appear as ghostly figures in tattered funeral garb or wrapped in chains or other bindings. Their features may be distorted into gaunt and haunting forms, making them seem more like ghosts or spectres. A miasma of livid gray swirling motes often surrounds their forms as they stalk their surroundings, seeking to bestow their terror on others.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/intimidate">Intimidate</Link> and <Link to="/skill/stealth">Stealth</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Reflex and Will</Cell></Row></Block>
<Ability id="stealthy" icon={["stairs-goal"]}>
<Pair single id="stealthy">Stealthy</Pair>
<Pair title="Ability">The phantom gains <Link to="/feat/stealthy">Stealthy</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="horrifying-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="horrifying-strike-ex">Horrifying Strike (Ex)</Pair>
<Pair title="Ability">If the phantom hits a creature with a slam attack, that creature must succeed at a Will saving throw (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) or be <Link to="/misc/shaken">shaken</Link> for 1d4 rounds. Multiple attacks against the same creature do not cause the creature to become frightened. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="increase-fear-su" icon={["aura","armor-downgrade"]}>
<Pair single id="increase-fear-su">Increase Fear (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 20-foot-radius aura that amplifies the fear conditions of enemies within it if they fail their Will saving throws (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier). A shaken enemy in the aura becomes <Link to="/misc/frightened">frightened</Link>, a frightened creature becomes <Link to="/misc/panicked">panicked</Link>, and a panicked creature <Link to="/misc/cowering">cowers</Link>. This effect lasts either as long as the enemy stays within the aura and is under the condition of the initial fear effect, or for a number of rounds after it leaves the aura equal to 1/2 the phantom's Hit Dice, or until the end of the original fear effect's duration, whichever comes first. A creature that succeeds at the saving throw is immune to this effect from the same phantom for 24 hours.</Pair>
<Pair title="Special">This is a mind-affecting fear effect. The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
<Ability id="frightful-attack-su" icon={["armor-downgrade"]}>
<Pair single id="frightful-attack-su">Frightful Attack (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">If the phantom hits with a slam attack, it can frighten those it hits instead of causing them to be shaken (the phantom chooses when it makes the attack). This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="shelter-allies-su" icon={["shield-reflect"]}>
<Pair single id="shelter-allies-su">Shelter Allies (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The phantom protects its allies from terror. Allies within the phantom's <em>increase fear</em> aura are immune to fear as long as they are within the aura. This ability also grants the phantom's spiritualist master immunity to fear as long as the phantom is not banished to the Ethereal Plane.</Pair>
</Ability>
</>};
const _greed = {title: "Greed", jsx: <><h2 id="emotionalfocus-greed-greed">Greed</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 14</Link><br/>A phantom with this focus voraciously coveted gold, gems, and hedonistic possessions in life. Such phantoms are still obsessed with hoarding wealth and project that avarice onto the spiritualists to whom they are bonded. Their coloration tends toward yellow, and the sound of jangling coins sometime manifests when they attack.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Fortitude and Reflex</Cell></Row></Block>
<Ability id="eye-of-avarice" icon={["upgrade"]}>
<Pair single id="eye-of-avarice">Eye of Avarice</Pair>
<Pair title="Passive Ability">The phantom adds half its number of Hit Dice (minimum 1) as a bonus on its Appraise checks. While it is confined to the spiritualist's consciousness, when the spiritualist attempts to identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link>, the phantom grants the spiritualist this bonus on <Link to="/skill/spellcraft">Spellcraft</Link> check.</Pair>
</Ability>
<Ability id="ruthless-combatant-su" icon={["upgrade"]}>
<Pair single id="ruthless-combatant-su">Ruthless Combatant (Su)</Pair>
<Pair title="Ability">A phantom with this focus threatens a critical hit with its slam attacks on a result of 19-20.</Pair>
<Pair title="At 11th Level">Its critical multiplier with slam attacks increases to &times;3.</Pair>
</Ability>
<Ability id="assume-effect-su" icon={["upgrade"]}>
<Pair single id="assume-effect-su">Assume Effect (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When the spiritualist casts a spell on herself with a range other than personal, the spell can also affect her phantom. The phantom can benefit from this ability once per day.</Pair>
<Pair title="At 12th Level">The phantom can benefit from this twice a day.</Pair>
<Pair title="At 19th Level">The phantom can benefit from this three times a day.</Pair>
</Ability>
<Ability id="covetous-aura-su" icon={["aura"]}>
<Pair single id="covetous-aura-su">Covetous Aura (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action"><p>The phantom can emit a 20-foot-radius aura that exemplifies its covetous nature. The aura lasts for a number of rounds per day equal to the phantom's Hit Dice. These rounds need not be used consecutively, and the phantom can dismiss its covetous aura as a <strong className="hl">free action</strong>.</p>
<p>Whenever a harmless (so noted by a spell's saving throw description) spell of 2nd level or lower is cast by a creature within the covetous aura, the phantom can immediately gain the benefit of that spell as if the spell had also targeted it. The intended target still gains the effect of the spell.</p>
</Pair>
</Ability>
<Ability id="take-it-with-you-su" icon={["magic-swirl"]}>
<Pair single id="take-it-with-you-su">Take It with You (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">Whenever the phantom is reduced to 0 hit points, a number of harmless spells affecting the phantom equal to the phantom's Charisma modifier are immediately transferred to the spiritualist for the remainder of their duration. If desired, the spiritualist can transfer only some (or none) of the spells affecting the phantom.</Pair>
</Ability>
</>};
const _hatred = {title: "Hatred", jsx: <><h2 id="emotionalfocus-hatred-hatred">Hatred</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 82</Link><br/>Few things draw a spirit toward the Negative Material Plane like the emotion of hatred. Phantoms with this focus often are blinded by - and blind others with - this powerful emotion. These phantoms are frequently darker and more foreboding than all but those phantoms with the fear emotional focus. Many of them manifest as dark and dreadful knights, their armor bristling with spikes and their hands seeming to grasp barbed and terrible weapons. Other times they appear as tall, gaunt figures staring down arrogantly at those who approach. These phantoms typically spew a string of curses at their foes, often profane, sometimes poetic. Their auras are pulsating and pitch black, and thrum violently when these horrible phantoms attack.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/acrobatics">Acrobatics</Link> and <Link to="/skill/perception">Perception</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Fortitude and Reflex</Cell></Row></Block>
<Ability id="weapon-finesse" icon={["stairs-goal"]}>
<Pair single id="weapon-finesse">Weapon Finesse</Pair>
<Pair title="Ability">The phantom gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="hated-target-su" icon={["upgrade","broken-shield"]}>
<Pair single id="hated-target-su">Hated Target (Su)</Pair>
<Pair title="Move-Equivalent Action">The phantom can designate one creature within its line of sight as a <em>hated target.</em> The phantom gains a +2 bonus on attack rolls against its <em>hated target,</em> and a bonus on damage rolls equal to 1/2 the phantom's Hit Dice (minimum 1). The phantom is so focused on this <em>hated target</em> that it takes a -2 penalty on attack rolls against all other creatures. The phantom can maintain these bonuses against only one target at a time, and these bonuses remain in effect until either the <em>hated</em> opponent is dead or it has been out of the phantom's line of sight for at least 1 minute.</Pair>
<Pair title="At 7th Level">The phantom can use this ability as a <strong className="hl">swift action</strong>, and takes no penalty when attacking creatures that are not designated as its <em>hated</em> enemy.</Pair>
<Pair title="Special">The phantom must be manifested in ectoplasmic form to use this ability (unless the spiritualist is 17th level or higher; see <em>Shared Hatred</em> below).</Pair>
</Ability>
<Ability id="hateful-aura-su" icon={["aura"]}>
<Pair single id="hateful-aura-su">Hateful Aura (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 10-foot-radius aura that inflicts pain upon the minds of those who dare damage it or its master. Enemies within the aura that deal damage to the spiritualist or the phantom take an amount of damage equal to the phantom's Charisma bonus.</Pair>
<Pair title="Special">This is a mind-affecting pain effect. The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
<Ability id="sneak-attack-su" icon={["stairs-goal"]}>
<Pair single id="sneak-attack-su">Sneak Attack (Su)</Pair>
<Pair title="At 12th Level">The phantom gains <Link to="/ability/sneak_attack">sneak attack</Link> +3d6, but only against its <em>hated target.</em></Pair>
<Pair title="At 18th Level">The sneak attack damage increases to +5d6.</Pair>
</Ability>
<Ability id="shared-hatred-su" icon={["upgrade"]}>
<Pair single id="shared-hatred-su" flavor="The phantom can grant its hatred to others.">Shared Hatred (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability"><p>When the phantom designates a <em>hated target,</em> its allies also gain a +2 bonus on attack rolls and a +4 bonus on damage rolls against that enemy.</p>
<p>Furthermore, the phantom can use its <em>hated target</em> ability even when in incorporeal form; when it does, it can make slam attacks against a corporeal creature, but only if that corporeal creature is its <em>hated target.</em></p>
</Pair>
</Ability>
</>};
const _jealousy = {title: "Jealousy", jsx: <><h2 id="emotionalfocus-jealousy-jealousy">Jealousy</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 83</Link><br/>A phantom with this emotional focus is covetous of everything - its master, those who wish to do it harm, and any who do not pay attention to it. It demands to be the center of attention at all times. The forms these phantoms take are as diverse as the forms of jealousy in life. Often they take pleasing forms, wishing to draw others in. Other times they take the form of crawling and lurching things, grasping at all they covet when they come within reach. The auras of these needy phantoms quickly change in color, going from an oily green to orange, to brownish red as they swirl through emotions in their efforts to gain the objects of their dark desires.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/bluff">Bluff</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Reflex and Will</Cell></Row></Block>
<Ability id="deceitful" icon={["stairs-goal"]}>
<Pair single id="deceitful">Deceitful</Pair>
<Pair title="Ability">The phantom gains <Link to="/feat/deceitful">Deceitful</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="jealous-combatant-su" icon={["armor-downgrade"]}>
<Pair single id="jealous-combatant-su">Jealous Combatant (Su)</Pair>
<Pair title="Ability">Each time the phantom hits a creature with a melee attack, for 1 round that creature takes a -2 penalty on all attack rolls made against anyone other than the phantom. This effect does not stack with itself.</Pair>
</Ability>
<Ability id="resentful-aura-su" icon={["aura"]}>
<Pair single id="resentful-aura-su">Resentful Aura (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can emit a 20-foot-radius aura that forces enemies within the aura who make an attack or cast a spell that does not include the phantom in its effect to succeed at a Will saving throw (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) or become <Link to="/misc/staggered">staggered</Link> until the end of the enemy's next turn.</Pair>
<Pair title="Special">Ending the aura is a <strong className="hl">free action</strong>. The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
<Ability id="retribution-su" icon={["upgrade"]}>
<Pair single id="retribution-su">Retribution (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">Each time a creature attacks the phantom's master, whether that attack hits or misses, it enrages the phantom. Until the end of the phantom's next turn, any attack the phantom makes that hits the creature that has attacked her deals 2d8 extra points of damage. This extra damage is <Link to="/misc/precision_damage">precision damage</Link>.</Pair>
</Ability>
<Ability id="mine-to-take-su" icon={["shield-reflect"]}>
<Pair single id="mine-to-take-su">Mine to Take (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Immediate Action">Once per day, just before the phantom's master is about to attempt a saving throw or be targeted by an attack roll, the phantom and the spiritualist can swap places as long as both are on the same plane and the phantom is aware of the attack or effect. After the swap occurs, the phantom is targeted by the attack or effect that triggered this ability, though the phantom may be immune or resistant to the effect.</Pair>
<Pair title="Special">This is a teleportation effect. The phantom can use this ability in either ectoplasmic or incorporeal form.</Pair>
</Ability>
</>};
const _kindness = {title: "Kindness", jsx: <><h2 id="emotionalfocus-kindness-kindness">Kindness</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 4</Link><br/>A phantom with this emotional focus was a being with a generous heart in life and continues to remain that way well after death. The phantom's intense generosity compels it to remain a phantom and continue assisting the living, especially relatives or those who had been its good friends during its living years. Kindness phantoms have pleasant and gentle demeanors and speak with a melodic cadence, putting most who see them at ease. Their auras are bright emerald green with occasional fluctuating scarlet or golden hues.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/heal">Heal</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Fortitude and Will</Cell></Row></Block>
<Ability id="benevolent" icon={["upgrade"]}>
<Pair single id="benevolent">Benevolent</Pair>
<Pair title="Ability">When the phantom uses the <Link to="/rule/aid_another">aid another</Link> action, the bonus granted by a successful check increases by 1. If the phantom aids the spiritualist this way, the bonus instead increases by 2.</Pair>
</Ability>
<Ability id="opening-strike-su" icon={["mailed-fist"]}>
<Pair single id="opening-strike-su">Opening Strike (Su)</Pair>
<Pair title="Standard Action">The phantom can make a melee attack against a foe. If this attack hits, the spiritualist designates one ally threatening that enemy. This ally can make a single attack at his full base attack bonus against that enemy as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="etheric-healing-su" icon={["stairs-goal"]}>
<Pair single id="etheric-healing-su">Etheric Healing (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The phantom gains the <Link to="/ability/lay_on_hands">lay on hands</Link> ability with an effective paladin level equal to its Hit Dice. The phantom can use this ability on the spiritualist as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="expanded-aid-su" icon={["upgrade","remedy"]}>
<Pair single id="expanded-aid-su">Expanded Aid (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The phantom can use the aid another action as a <strong className="hl">move action</strong>. Additionally, the phantom selects four <Link to="/ability/mercies">mercies</Link> available to a 12th-level paladin that it adds to its <em>lay on hands</em> ability.</Pair>
</Ability>
<Ability id="exceptional-aid-su" icon={["upgrade"]}>
<Pair single id="exceptional-aid-su">Exceptional Aid (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The phantom can use the aid another action as a <strong className="hl">swift action</strong>. Additionally, when designating an ally for an <em>opening strike,</em> that ally gains a bonus equal to the phantom's Charisma modifier on damage rolls for the attack granted to him.</Pair>
</Ability>
</>};
const _lust = {title: "Lust", jsx: <><h2 id="emotionalfocus-lust-lust">Lust</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 14</Link><br/>A phantom with this focus aches for the intoxicating pleasures it experienced during life. These phantoms often writhe sensuously and whisper promises of unadulterated bliss to those they fight. Lust phantoms are typically deep rose in color, and they sometimes emit musky, exotic scents when they move.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/diplomacy">Diplomacy</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Fortitude and Will</Cell></Row></Block>
<Ability id="constitution-focus" icon={["upgrade"]}>
<Pair single id="constitution-focus">Constitution Focus</Pair>
<Pair title="Passive Ability">A phantom with this focus gains a +2 bonus to Constitution and a -2 penalty to Dexterity.</Pair>
<Pair title="Special">Instead of gaining a bonus to Dexterity as the spiritualist gains levels, a lust-focused phantom gains a bonus to Constitution instead.</Pair>
</Ability>
<Ability id="alluring-presence-su" icon={["shield-reflect"]}>
<Pair single id="alluring-presence-su" flavor="A phantom with this focus can coerce enemies to attack it.">Alluring Presence (Su)</Pair>
<Pair title="Immediate Action">The phantom attempts a Diplomacy check against a creature targeting the spiritualist with an attack or harmful spell, provided the phantom is within the target creature's reach (or range, if the creature is attacking with a ranged weapon or spell). The DC for this check equals 10 + 1/2 the attacking creature's HD + the attacking creature's Wisdom modifier. If successful, the phantom becomes the target of all the creature's attacks for 1 round. This is a mind-affecting compulsion emotion effect.</Pair>
</Ability>
<Ability id="mine-alone-su" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="mine-alone-su">Mine Alone (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">Whenever the spiritualist or the phantom is subject to a charm or compulsion effect, the target of the effect can roll twice for its save - once using the spiritualist's Will save modifier and once using the phantom's - and take the better result.</Pair>
</Ability>
<Ability id="aura-of-ecstasy-su" icon={["aura","armor-downgrade"]}>
<Pair single id="aura-of-ecstasy-su">Aura of Ecstasy (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The lust phantom emanates an aura of ecstasy. All creatures adjacent to the phantom must succeed at a Will save (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) or be <Link to="/misc/shaken">shaken</Link> and <Link to="/misc/staggered">staggered</Link> each round that they remain within the <em>aura of ecstasy.</em> Creatures that succeed at this save are immune to this phantom's <em>aura of ecstasy</em> for 24 hours.</Pair>
</Ability>
<Ability id="sinful-command-su" icon={["magic-swirl"]}>
<Pair single id="sinful-command-su">Sinful Command (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Standard Action">Once per day, the phantom can attempt to assume control of another creature's mind as per the <Link to="/spell/dominate_monster">dominate monster</Link> spell. The DC of the effect is equal to 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier.</Pair>
</Ability>
</>};
const _pride = {title: "Pride", jsx: <><h2 id="emotionalfocus-pride-pride">Pride</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 15</Link><br/>No phantom is as arrogant as a pride phantom, which in life was an insufferable braggart and egotist. These phantoms often puff and posture while fighting, shouting brash taunts and paeans to their own supposed skill in all things. Pride phantoms are often a roiling green in color.</p>
<Block size="simple">
<Row><Cell>Skills</Cell><Cell>The phantom gains a number of ranks in <Link to="/skill/intimidate">Intimidate</Link> and <Link to="/skill/perception">Perception</Link> equal to its Hit Dice. While confined in its spiritualist's consciensness, it grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of those skills.</Cell></Row>
<Row><Cell>Good Saves</Cell><Cell>Reflex and Will</Cell></Row></Block>
<Ability id="resolve" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="resolve">Resolve</Pair>
<Pair title="Passive Ability">A phantom that has this emotional focus is immune to fear effects. However, when the phantom fails an ability check, skill check, or attack roll, it loses this immunity for 1 hour. Multiple failed checks or rolls are not cumulative. Instead, they simply reset the hour of lost immunity.</Pair>
</Ability>
<Ability id="flagrant-disregard-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="flagrant-disregard-ex">Flagrant Disregard (Ex)</Pair>
<Pair title="Swift Action">The phantom can gain a bonus on all attack rolls while taking a penalty to AC for 1 round. The bonus is equal to 2 + <Link to="/misc/one_fourth">one-fourth</Link> of the phantom's base attack bonus. The penalty is equal to 1 + one-fourth of the phantom's base attack bonus.</Pair>
</Ability>
<Ability id="vainglorious-oration-su" icon={["armor-downgrade"]}>
<Pair single id="vainglorious-oration-su">Vainglorious Oration (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The phantom can espouse bold lies about its own prowess to cause enemies to become <Link to="/misc/shaken">shaken</Link>. To be affected, an enemy must be within 30 feet of the phantom and able to hear it. This effect persists as long as the enemy is within 30 feet (the phantom can end the <em>oration</em> as a <strong className="hl">free action</strong>).</Pair>
<Pair title="Special">This ability cannot cause a creature to become frightened or panicked, even if the target was already shaken from another effect. This is a mind-affecting fear effect that relies on audible components.</Pair>
</Ability>
<Ability id="overwhelming-confidence-su" icon={["upgrade","broken-shield"]}>
<Pair single id="overwhelming-confidence-su">Overwhelming Confidence (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">As long as the phantom is immune to fear effects from its <em>resolve</em> ability, any morale bonuses affecting the phantom are doubled. If the phantom loses its immunity to fear, all doubled morale bonuses that are affecting the phantom are instead applied as penalties for the remainder of their duration or until the phantom regains its immunity to fear (whichever comes first).</Pair>
</Ability>
<Ability id="illusion-of-perfection-su" icon={["upgrade"]}>
<Pair single id="illusion-of-perfection-su">Illusion of Perfection (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Usage">1 minute/day per phantom HD; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">The greed phantom can shroud itself in an illusion, appearing as a model of absolute physical perfection - its idealized image of itself. The phantom gains a bonus on melee damage rolls equal to its Charisma modifier. However, whenever the phantom deals damage to a creature, the creature can attempt a Will save (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) to disbelieve the effect, reducing the bonus on damage rolls by half if successful.</Pair>
<Pair title="Special">This ability is a mind-affecting illusion effect.</Pair>
</Ability>
</>};
const _remorse = {title: "Remorse", jsx: <><h2 id="emotionalfocus-remorse-remorse">Remorse</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 19</Link><br/>Spirits of creatures that died with heavy weights upon their consciences manifest with the remorse emotional focus. These phantoms, whose forms are often darkened by shadows, force foes to experience their regret and self-loathing. A spiritualist with the <Link to="/arc-spiritualist/fated_guide">fated guide</Link> archetype must choose remorse as her phantom's emotional focus, but other spiritualists can also select this emotional focus for their phantoms.</p>
<p><strong>Skills:</strong> The phantom gains a number of ranks in Perception and Sense Motive equal to its Hit Dice. While confined in the spiritualist's consciousness, the phantom grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of these skills.</p>
<p><strong>Good Saves:</strong> Fortitude and Will.</p>
<p><strong>Antagonistic:</strong> The phantom gains <Link to="/feat/antagonize">Antagonize</Link> as a bonus feat.</p>
<p><strong>Long-Suffering Strike (Su):</strong> When a phantom with this focus hits a creature with its slam attack, that creature must succeed at a Will saving throw (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) or any attacks targeting the creature gain a +1 bonus on their attack rolls and damage rolls until the beginning of the phantom's next turn. Penalties from multiple hits don't stack with themselves.</p>
<p><strong>Aura of Regret (Su):</strong> When the spiritualist reaches 7th level, her phantom can emit a 10-foot-radius aura of regret as a swift action. Enemies within the aura take a -2 penalty on skill checks, on caster level checks, on combat maneuver checks, and to CMD. Ending the aura is a free action. The phantom can use this ability in either ectoplasmic or incorporeal form.</p>
<p><strong>Keening (Su):</strong> When the spiritualist reaches 12th level, her phantom can wail about its misdeeds once per day as a standard action, affecting all creatures within a 30-foot cone with the <Link to="/spell/terrible_remorse">terrible remorse</Link> spell. The phantom uses its Hit Dice as its caster level for the effect, and the DC equals 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier. The phantom can use this ability in either ectoplasmic or incorporeal form.</p>
<p><strong>Utter Misery (Su):</strong> When the spiritualist reaches 17th level, her phantom's long-suffering strike also causes a creature that fails its save to become <Link to="/misc/stunned">stunned</Link> until the beginning of the phantom's next turn.</p>
</>};
const _suffering = {title: "Suffering", jsx: <><h2 id="emotionalfocus-suffering-suffering">Suffering</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 18</Link><br/>Phantoms with this focus stand on trembling legs, with hands quivering and tears constantly streaming from their eyes. Their auras are typically a blue or purple, but the phantoms have vividly glowing scars and bruises that pulse and throb with their motion. When addressed, they tend to respond with only slight nods and other subtle gestures, rarely speaking beyond soft-spoken apologies and self-recriminations.</p>
<p>While clearly in a state of constant pain, they show no concern for their own well-being, focusing entirely on protecting their masters and their masters' allies. Each time one of these phantoms uses its abilities to protect its allies from harm, new injuries manifest visibly upon it, which these phantoms wear like badges of honor.</p>
<p><strong>Skills:</strong> The phantom gains a number of ranks in Climb and Heal equal to its number of Hit Dice. When confined in the spiritualist's consciousness, the phantom grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of these skills.</p>
<p><strong>Good Saves:</strong> Fortitude and Will.</p>
<p><strong>Endurance:</strong> The phantom gains <Link to="/feat/endurance">Endurance</Link> as a bonus feat. Furthermore, when the phantom is confined in its master's consciousness, it grants the benefits of Endurance to its master if its master doesn't have that feat.</p>
<p><strong>Repelling Strike (Ex):</strong> When the phantom deals damage with a melee attack, it can attempt to <Link to="/rule/bull_rush">bull rush</Link> the target as a swift action without provoking attacks of opportunity, using the result of its attack roll for the combat maneuver check. The phantom can push a creature back only 5 feet with this ability, regardless of the result of its combat maneuver check.</p>
<p><strong>Numbing Aura (Su):</strong> When the spiritualist reaches 7th level, as a swift action, the phantom can emit a 20-foot aura of protection. Allies within this aura gain a +4 bonus on saving throws against curse, disease, evil, fear, pain, and poison effects. Deactivating the aura is a free action. The phantom can use this ability in either ectoplasmic or incorporeal form.</p>
<p><strong>Suffer in Stead (Su):</strong> When the spiritualist reaches 12th level, as an immediate action when her phantom is fully manifested and within 30 feet of her, she can transfer any of the following conditions to the phantom that would afflict her: blinded, deafened, exhausted, fatigued, nauseated, paralyzed, sickened, staggered, or stunned. The spiritualist must choose to do this before the condition's duration begins. The spiritualist can't use this ability if any of the listed conditions are already affecting the phantom. Using this ability does not affect the duration of the transferred condition; it simply makes the condition affect the phantom instead of the spiritualist.</p>
<p>When the spiritualist reaches 18th level, as an immediate action when fully manifested, the phantom can use this ability to transfer any of the listed conditions to itself when the condition would afflict any ally within 30 feet. Using the ability in this way requires no additional action from the spiritualist.</p>
<p><strong>Willing Martyr (Su):</strong> When the spiritualist reaches 17th level, the phantom begins to anticipate when the spiritualist or her allies would fall into grave bodily danger and can take those wounds itself. Whenever the phantom is fully manifested and the spiritualist or an ally is reduced to one-quarter or fewer hit points, as long as the phantom is within 30 feet, it must take any hit point damage or ability score damage in place of the injured spiritualist or ally. This hit point damage or ability score damage bypasses the phantom's defensive abilities (although it is still subject to the defensive abilities of the originally targeted spiritualist or ally) and afflicts the phantom as it would the spiritualist or ally. After the phantom becomes the target of one attack or effect in place of the injured spiritualist or ally, the spiritualist can command the phantom to suppress this ability as a free action. Reactivating this ability is a swift action.</p>
</>};
const _whimsey = {title: "Whimsey", jsx: <><h2 id="emotionalfocus-whimsey-whimsey">Whimsey</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 17</Link><br/>Phantoms with this emotional focus carry a simplistic, childlike wonder and are fond of games and playing tricks. Whimsical phantoms are often the ghosts of <Link to="/race/gnome">gnomes</Link>; in the case of bleachling spiritualists, the phantom may even be a psychic vestige of the bleachling's own lost childlike nature. Among other races, most phantoms with the whimsy focus are the spirits of those who died as children and carried their childlike nature into the afterlife.</p>
<p><strong>Skills:</strong> The phantom gains a number of ranks in Acrobatics and Perception equal to its number of Hit Dice. While confined in the spiritualist's consciousness, the phantom grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of these skills.</p>
<p><strong>Good Saves:</strong> Reflex and Will</p>
<p><strong>Tricky Combatant:</strong> A phantom with the whimsy focus gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat, even if it does not meet the prerequisites.</p>
<p><strong>Colorful Burst (Sp):</strong> Once per day, a phantom with this focus can produce an explosion of bright colors in a 15-foot cone. This functions as the spell <Link to="/spell/color_spray">color spray</Link>, except that creatures with fewer HD than the phantom are treated as if they had 2 HD or less, creatures with HD equal to that of the phantom are treated as if they had 3 or 4 HD, and creatures with more HD than the phantom are treated as if they had 5 or more HD. A creature can negate this effect with a successful Will saving throw (DC = 10 + half the phantom's Hit Dice + the phantom's Charisma modifier).</p>
<p><strong>Aura of Laughter (Sp):</strong> When the spiritualist reaches 7th level, the phantom can emit a 10-foot aura of childish laughter as a swift action. Enemies within the aura are distracted by the laughter, taking a -2 penalty on attack and damage rolls and a -5 penalty on Perception checks. This ability has no effect on creatures that cannot hear.</p>
<p><strong>Telekinetic Prankster (Sp):</strong> When the spiritualist reaches 12th level, the phantom gains the ability to use limited telekinesis to trip up its foes. It can perform combat maneuvers against creatures up to 15 feet away. When doing so, it can use its Charisma modifier in place of its Strength modifier on its combat maneuver checks.</p>
<p><strong>Invoke Laughter (Sp):</strong> When the spiritualist reaches 17th level, once per day as a standard action, the phantom can cause nearby creatures to fall into fits of uncontrollable laughter. Each creature in a 30-foot-radius <Link to="/misc/burst">burst</Link> centered on the phantom must succeed at a Will save (DC = 10 + half the phantom's Hit Dice + the phantom's Charisma modifier) or begin laughing uncontrollably, as the spell <Link to="/spell/hideous_laughter">hideous laughter</Link>. The phantom can use this ability in either ectoplasmic or incorporeal form.</p>
</>};
const _zeal = {title: "Zeal", jsx: <><h2 id="emotionalfocus-zeal-zeal">Zeal</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 83</Link><br/>A phantom with this emotional focus fixates on every task given as if it were the phantom's last. The most basic commands are treated as life-and-death situations, and the truly dangerous ones are faced with a resolve and tenacity that sometimes defies common sense. Zeal phantoms take the form of steadfast protectors or daring and manic creatures looking for the next challenge or opportunity to prove itself to either its master or itself. Often very prideful creatures, these phantoms display an orange aura upon completing their tasks. They are prone to boast about their accomplishments and chastise those around them for not accomplishing more.</p>
<p><strong>Skills:</strong> The phantom gains a number of ranks in Acrobatics and Survival equal to its number of Hit Dice. While confined in the spiritualist's consciousness, the phantom grants the spiritualist <Link to="/feat/skill_focus">Skill Focus</Link> in each of these skills.</p>
<p><strong>Good Saves:</strong> Fortitude and Reflex.</p>
<p><strong>Tracking:</strong> The phantom adds half its number of Hit Dice (minimum 1) to Survival skill checks to follow tracks.</p>
<p><strong>Ruthless Combatant (Su):</strong> The phantom threatens a critical hit with its slam attacks on a roll of 19-20. When the spiritualist reaches 11th level, the phantom's critical modifier with slam attacks increases to &times;3. This doesn't stack with <Link to="/feat/improved_critical">Improved Critical</Link> or similar effects.</p>
<p><strong>Determination Aura (Su):</strong> When the spiritualist reaches 7th level, as a swift action, the phantom can emit a 20-foot-radius aura that grants its zeal to nearby allies. Allies within the aura gain a +2 competence bonus on attack rolls and saving throws. The phantom can use this ability in either ectoplasmic or incorporeal form.</p>
<p><strong>Steadfast Servant (Su):</strong> When the spiritualist reaches 12th level, the phantom can stay manifested even when its spiritualist master is unconscious or asleep.</p>
<p><strong>Zeal's Resolve (Su):</strong> When the spiritualist reaches 17th level, three times per day as a free action, when the phantom misses with an attack roll or fails a saving throw, it can reroll the failed attack or saving throw. It must take the new result, even if that result is worse.</p>
</>};
export default {not_found:_not_found,anger:_anger,dedication:_dedication,despair:_despair,desperation:_desperation,fear:_fear,greed:_greed,hatred:_hatred,jealousy:_jealousy,kindness:_kindness,lust:_lust,pride:_pride,remorse:_remorse,suffering:_suffering,whimsey:_whimsey,zeal:_zeal}