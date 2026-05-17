import {IonRippleEffect,IonIcon} from '@ionic/react';
import Header from '../../components/Header';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _runeslave = {title: "Runeslave", jsx: <><div style={{clear:"both"}}></div><Header full><span>Runeslave</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/rise_of_the_runelords_anniversary_edition">Rise of the Runelords Anniversary Edition pg. 412</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The ageless monuments and awesome cities of Thassilon rose upon the backs of countless slaves, but none bore the sin-poisoned civilization's burden more than the giants. Able to perform the work of dozens of human slaves, Thassilon's titanic servants - <Link to="/monster/hill_giant">hill giants</Link>, <Link to="/monster/stone_giant">stone giants</Link>, <Link to="/monster/taiga_giant">taiga giants</Link>, and others - crafted marvels nigh unparalleled in any era before or since, and shaped the face of what is now modern Varisia. Yet as viciously as the runelords worked their slaves and for all they demanded, the giant-crafted marvels were not enough. And thus, working the corrupt rune magic that was theirs alone, the runelords manufactured a damning curse and laid it over their most tireless and effective workers, and in so doing created a new breed of servant: the runeslave.</p>
<p>Numerous severe-looking runes spark and flicker upon a runeslave's body, seemingly seared into the creature's flesh. One of the runes is larger and more prominent than the others - this is always one of the runes of Thassilonian magic. Although a runeslave's mind is dulled, its muscles bulge grotesquely, as if barely contained beneath a thin layer of skin, and such behemoths move with unnatural agility for creatures of their ponderous size.</p>
<p>Note that while the runeslave template does make a giant more powerful (and thus increases its CR), few, if any giants would seek to gain a runeslave's powers. Despite the advantages the runeslave gains, what it loses in free will and longevity typically vastly outweigh the benefits. In combat, a runeslave is deadly and terrifying, but in life, the condition is rightly feared among giants as a devastating and debilitating curse.</p>
<p>"Runeslave" is an acquired template that can be added to any giant (referred to hereafter as the base creature). A runeslave uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Defensive Abilities:</strong> A runeslave becomes <Link to="/umr/immune">immune</Link> to fear effects, exhaustion, and fatigue. In addition, all runeslaves gain the following additional defensive ability.</p>
<blockquote>
<p><strong>Resist Pain (Ex):</strong> Runeslaves can continue to function even after taking great punishment. They are immune to nonlethal damage. Against effects that inflict pain (such as a <Link to="/spell/symbol_of_pain">symbol of pain</Link> spell), a runeslave gains a +4 bonus on all saving throws.</p>
</blockquote>
<p><strong className="hl">Weaknesses:</strong> Runeslaves gain the following weakness.</p>
<blockquote>
<p><strong>Arcane Decay (Su):</strong> The symbols etched upon a runeslave's body put great stress on its physical form, choking its mind and ultimately killing the giant in time. Each runeslave has a predominant Thassilonian rune associated with one school of magic inscribed on its body. Traditionally, this rune is of a school of magic directly opposed to the runelord the runeslave serves. The slow decay of a runeslave's mental faculties manifests as a gradual loss of life and sanity, represented by the accumulation of rune-shaped scars all over the body. The disease has no additional physical or mental effect until these magical runescars completely overwhelm their host, at which point the accumulated pain the giant has endured since becoming a runeslave is released in a fatal surge of unleashed suffering. All runeslaves are "infected" with this disease. Only <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> can prevent or cure arcane decay, but in so doing removes the entire template, reverting the runeslave back to the base creature. Multiple successful Fortitude saves only delay the decay and do not cure the creature of the disease.</p>
<div className="sideNoteWrap"><ScrollContainer id="template-runeslave--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={10} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th colSpan={4} scope="col" className="title">Arcane Decay</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Disease; Inherited-non-contagious</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 15</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/week</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Gain one runescar</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>none (but see above)</td></tr><tr><td colSpan={4} className="extra">When a runeslave's number of runescars equals its Hit Dice, it dies.</td></tr></tbody></table></ScrollContainer></div></blockquote>
<p><strong className="hl">Speed:</strong> A runeslave's base land speed is 20 feet faster than the base creature's. Other forms of movement, such as flying or swim speeds, are unaffected.</p>
<p><strong className="hl">Special Attacks:</strong> A runeslave gains the following special attack.</p>
<blockquote>
<p><strong>Arcane Surge (Su):</strong> Once per day as a swift action, a runeslave can gain the benefits of the spell <Link to="/spell/haste">haste</Link> for 6 rounds. Using this ability forces the giant to make an additional Fortitude save against <em>arcane decay,</em> even if it has already made its weekly save to resist the disease.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Change from the base creature as follows: Str +4, Dex +2, Int -2, Wis -2, Cha -2.</p>
<p><strong className="hl">Feats:</strong> Runeslaves gain <Link to="/feat/diehard">Diehard</Link> and <Link to="/feat/toughness">Toughness</Link> as bonus feats.</p>
<h3 id="template-runeslave-the-runeslave-curse">The Runeslave Curse</h3>
<p>As the act of turning their giant servants into runeslaves swept across Thassilon, each of the seven runelords came to employ the corruptive magic in various ways. While in most of the runelords' holdings the giants merely continued to serve as expendable labor, in Bakrakhan, Runelord Alaznist incorporated runeslaves into her vast armies, using them as living siege engines. In Cyrusian, the domain of Pride, Runelord Xanderghul used the magic as a punishment upon any slave who garnered his fickle ire.</p>
<p>While the magic used to create runeslaves resided almost exclusively in the hands of the runelords, the number of giant slaves they deemed would benefit from this ultimately fatal "improvement" far exceeded the rulers' ability to transform. Thus, a number of different methods of creating runeslaves were created, each originating in a separate domain but eventually spreading throughout the empire.</p>
<p><strong>Ancient Rite:</strong> In the Grand Sybaritum of Xin-Haruka, Runelord Krune grew weary of cursing filthy giant after filthy giant, and so devised a method to transform hundreds of his slaves at a time. Summoning whole legions of his giants before him, Krune called down the might of the rune goddess <Link to="/faith/lissala">Lissala</Link> and cursed his slaves en masse, sending countless faithful slaves to their doom.</p>
<p><strong>Minderhal's Curse:</strong> Minderhal's worship was never more prevalent than during the height of the Thassilonian empire, and as such, fear of his displeasure was a motivating force among the giants of that era. Legend held that <Link to="/faith/minderhal">Minderhal</Link> himself was involved in the creation of the first runeslaves, and that in a fit of anger at his giant worshipers, he granted humans the secrets of creating runeslaves. Regardless of this legend's veracity, there have been several cases of particularly blasphemous giants spontaneously transforming into runeslaves, supposedly as punishment from their god.</p>
<p><strong>Poisoning:</strong> In Edasseril, the domain of envy, the alchemists of Runelord Belimarius's vile and sprawling laboratories discovered a way to turn <em>arcane decay</em> into a toxin, allowing the disease to be delivered via poison. The poisoners never did find a way to cure the crippling madness caused by the poison - the toxin's high cost and the frustrating requirement of having to cure the giant's Wisdom drain before it could be put to work kept this poison from seeing greater use. Each dose of this poison costs 10,000 gp.</p>
<div className="sideNoteWrap"><ScrollContainer id="template-runeslave--table-1"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Runeslave Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Ingested</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 20</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}><Link to="/misc/confusion">confusion</Link> for 1 round and 1d4 <Link to="/rule/wisdom_drain">Wisdom drain</Link> (if this results in the giant's Wisdom being drained to 0, the giant immediately transforms into a runeslave)</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>3 consecutive saves</td></tr></tbody></table></ScrollContainer></div><p><strong>Runeslave Cauldron:</strong> Brought forth from Gastash, the domain of gluttony, these <Link to="/magic-artifact/runeslave_cauldron">massive cauldrons</Link> were large enough to fit an adult stone giant and infused with necromantic energies. Any giant placed in a cauldron and then slain is immediately resurrected as a runeslave.</p>
</>};
const _runewarped_creature = {title: "Runewarped Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Runewarped Creature</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_133_secrets_of_roderics_cove">Pathfinder #133: Secrets of Roderic's Cove pg. 87</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Before Alaznist created the first <Link to="/monster/sinspawn">sinspawn</Link> through the use of her runewell, she experimented with several techniques to create sin-twisted servants. One foundation of the complex magical technique used to create sinspawn was known as runewarping. Through the use of runewarping, Alaznist and other powerful mages created horribly twisted creatures from their slaves and prisoners. These creators valued ability over aesthetics, so runewarped creatures were transformed by powerful magic into horrid mockeries of their previous forms. Runewarped creatures seek out sources of magic to consume, trying in vain to complete their transformation. Although a runewarped creature is recognizable as the creature it once was, the creature bears altered or additional limb joints, elongated fingers, and a massive jaw capable of delivering a powerful bite.</p>
<p>"Runewarped creature" is an acquired template that can be added to any <Link to="/type/animal">animal</Link>, <Link to="/type/humanoid">humanoid</Link>, or <Link to="/type/monstrous_humanoid">monstrous humanoid</Link> (referred to hereafter as the base creature). A runewarped creature uses the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 1.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/aberration">aberration</Link>. Do not recalculate its base attack bonus, saves, or skill ranks.</p>
<p><strong className="hl">Senses:</strong> The creature gains darkvision with a range of 60 feet, low-light vision, and magic-scent.</p>
<blockquote>
<p><strong>Magic-Scent (Su):</strong> Runewarped creatures have <Link to="/umr/scent">scent</Link> that detects only creatures with the ability to cast spells. This scent allows the runewarped creature to know the location and power of all magic auras within range of its scent. Magic-scent always detects magic auras in a range of 60 feet and is not affected by wind.</p>
</blockquote>
<p><strong className="hl">AC:</strong> Natural armor bonus increases by 2.</p>
<p><strong className="hl">Hit Dice:</strong> Change all the creature's racial Hit Dice to d8s. Hit Dice derived from class levels remain unchanged.</p>
<p><strong className="hl">Defensive Abilities:</strong> A runewarped creature with 5 Hit Dice or more gains DR 5/magic (or DR 10/magic if it has 11 Hit Dice or more) and SR equal to its new CR + 6 (or SR equal to its new CR + 11 if it has 11 Hit Dice or more).</p>
<p><strong className="hl">Melee:</strong> A runewarped creature gains a <Link to="/umr/bite_attack">bite attack</Link> that deals damage based on the runewarped creature's size but as if it were one size category larger than its actual size. If the runewarped creature already has a bite attack, the bite's damage increases by one step, as if it had increased one size category.</p>
<p><strong className="hl">Special Attacks:</strong> A runewarped creature loses any spells or spell-like abilities, but it retains all other special attacks and abilities of the base creature. A runewarped creature gains the following special attack.</p>
<blockquote>
<p><strong>Consume Magic (Su):</strong> A runewarped creature's bite drains magical ability from creatures capable of casting spells or using spell-like abilities. The struck creature loses its highest-level prepared spell, spell slot, or spell-like ability unless it succeeds at a Will save to negate the effect. A creature can be affected by this ability only once per round, even if attacked multiple times or by multiple runewarped creatures. The save DC is Constitution-based.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +4, Con +2, Int -4 (minimum 1), Cha -2.</p>
<h3 id="template-runewarped_creature-sinwarped-creatures">Sinwarped Creatures</h3>
<p>Runewarped creatures subjected to prolonged direct exposure to a runewell or sin magic gain additional powers related to a specific sin, seeking out magic and spellcasters associated with that sin.</p>
<p>Sinwarped creatures are runewarped creatures with the <Link to="/template/advanced">advanced</Link> creature simple template, <em>magic-scent</em> with a range of 120 feet, and spell-like abilities determined by the creature's affinity to a particular school of sin magic: envy (<Link to="/spell/resist_energy">resist energy</Link> and <Link to="/spell/shield">shield</Link>), gluttony (<Link to="/spell/chill_touch">chill touch</Link> and <Link to="/spell/false_life">false life</Link>), greed (<Link to="/spell/barkskin">barkskin</Link> and <Link to="/spell/expeditious_retreat">expeditious retreat</Link>), lust (<Link to="/spell/hold_person">hold person</Link> and <Link to="/spell/hypnotism">hypnotism</Link>), pride (<Link to="/spell/blur">blur</Link> and <Link to="/spell/color_spray">color spray</Link>), sloth (<Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link> and <Link to="/spell/grease">grease</Link>), or wrath (<Link to="/spell/burning_hands">burning hands</Link> and <Link to="/spell/darkness">darkness</Link>). Each spell-like ability is usable once per day. When a target loses a prepared spell, spell slot, or spell-like ability that is at least 3rd level to a sinwarped creature's consume magic ability, the sinwarped creature regains all of these spell-like abilities it has used.</p>
</>};
const _sea_sworn = {title: "Sea-Sworn", jsx: <><div style={{clear:"both"}}></div><Header full><span>Sea-Sworn</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/treasure_of_chimera_cove">Treasure of Chimera Cove pg. 31</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>This creature stares with cold, black eyes, its bluish-green skin slick with moisture and stinking of brine and the muck of the tidal flats. Its hands and feet are webbed, and its facial features are blunted by the smooth, frog-like skin that covers them. It makes no sound as it marches out of the shallows, water and seaweed streaming from its unkempt hair and barnacle-encrusted armor. It merely approaches with cold menace, sword raised and sharp beneath a crusting of salt.</p>
<p>During the troubled times following Andoran's break with Cheliax, Chelish necromancers created the sea-sworn to fill the need for ruthless and overpowering marines who would serve the navy tirelessly. "Volunteered" by their captains, these sailors and warriors were forced to undergo hideous rites culminating in their dying and being reborn as undead monstrosities uniquely suited to making war at sea. Powerful swimmers without the need to breathe or eat, and nearly impossible to destroy in their natural element, these crack teams were the bane of Andoren ships, with just a handful of the fast-healing horrors capable of overrunning the mightiest frigates. Concerned that such effective troops might reach too far, the Chelish government ordered them anchored to their role with the "curse of the sea-sworn," rendering them incapable of abandoning their ships or the sea. As further protection, the Chelish leaders frequently placed <Link to="/spell/geas">geas</Link> spells on the sea-sworn leaders, tasking them with policing their own and making sure that the undead sailors never strove to become more than what they were intended as: cold, heartless tools of Chelish ambition.</p>
<h3 id="template-sea_sworn-creating-a-sea-sworn">Creating a Sea-Sworn</h3>
<p>"Sea-sworn" is an acquired template that can be added to any corporeal creature that does not possess the aquatic subtype. A sea-sworn uses all of the base creature's statistics except as noted here.</p>
<p><strong className="hl">Size and Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link> and it gains the <Link to="/subtype/augmented">augmented</Link> and <Link to="/subtype/aquatic">aquatic</Link> subtypes. It retains any other subtypes except alignment subtypes. Do not recalculate base attack bonus, saves, or skill points. Size is unchanged.</p>
<p><strong className="hl">Hit Dice:</strong> Increase all current and future Hit Dice to d12s.</p>
<p><strong className="hl">AC:</strong> The base creature's natural armor bonus improves by +3. Sea-sworn often wear the armor they wore in life.</p>
<p><strong className="hl">Defensive Abilities:</strong> A sea-sworn retains the base creature's defensive abilities and gains damage reduction.</p>
<blockquote>
<p><strong>Damage Reduction (Ex):</strong> A sea-sworn has damage reduction 5/piercing. Their skin is incredibly tough, but deep stabs allow their salt water essence to seep out.</p>
</blockquote>
<p><strong className="hl">Weaknesses:</strong> A sea-sworn retains the base creature's weaknesses and gains the curse of the sea-sworn.</p>
<blockquote>
<p><strong>Curse of the Sea-Sworn (Ex):</strong> Sea-sworn function normally whenever in contact with salt water or aboard a vessel floating (or sunken) in salt water. A sea-sworn taken outside these conditions by any means quickly withers away, taking 2d6 points of damage per round.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> The creature gains a swim speed equal to its land speed, or retains its original swim speed if it is faster than its land speed.</p>
<p><strong className="hl">Attacks:</strong> A sea-sworn retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. A sea-sworn also gains a slam attack that also inflicts its drowning touch.</p>
<p><strong className="hl">Damage:</strong> Natural and manufactured weapons deal damage normally. A <Link to="/umr/slam_attack">slam attack</Link> deals damage depending on the sea-sworn's size. (Use the base creature's slam damage if it's better.)</p>
<p><strong className="hl">Special Attacks:</strong> A sea-sworn retains the base creature's special attacks and also gains the following.</p>
<blockquote>
<p><strong>Drowning Touch (Ex):</strong> The touch of a sea-sworn causes the lungs of a living creature to fill with salt water dealing 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link>. Creatures with the aquatic or water sub-types, creatures that do not need to breathe, and creatures which can breathe water are all immune to this special attack.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A sea-sworn loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. A sea-sworn gains the following special quality.</p>
<blockquote>
<p><strong>Fast Healing (Ex):</strong> A sea-sworn gains <Link to="/umr/fast_healing">fast healing</Link> 2 whenever it is immersed in salt water to a depth of at least one-quarter of the creature's height.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> A sea-sworn's Strength score increases by +4, it has no Constitution score, and its Charisma score decreases by 2.</p>
<p><strong className="hl">Feats:</strong> Same as the base creature.</p>
<p><strong className="hl">Skills:</strong> A sea-sworn has a +8 racial bonus on any <Link to="/skill/swim">Swim</Link> check to perform some special action or avoid a hazard. It can always choose to take 10 on a Swim check, even if distracted or endangered. It can use the <Link to="/rule/run">run</Link> action while swimming, provided it swims in a straight line. Otherwise same as the base creature.</p>
<p><strong className="hl">Environment:</strong> In contact with salt water or aboard a vessel in salt water.</p>
<p><strong className="hl">CR:</strong> As base creature +1.</p>
<p><strong className="hl">Treasure:</strong> None.</p>
<p><strong className="hl">Alignment:</strong> Usually neutral evil.</p>
<p><strong>Level Adjustment:</strong> 0</p>
<ScrollContainer id="template-sea_sworn--table-0"><table>
<thead>
<tr>
<th>Sea-Sworn Size</th>
<th>Slam Damage</th>
</tr>
</thead>
<tbody><tr>
<td>Fine</td>
<td>1</td>
</tr>
<tr>
<td>Diminutive</td>
<td>1d2</td>
</tr>
<tr>
<td>Tiny</td>
<td>1d3</td>
</tr>
<tr>
<td>Small</td>
<td>1d4</td>
</tr>
<tr>
<td>Medium</td>
<td>1d6</td>
</tr>
<tr>
<td>Large</td>
<td>1d8</td>
</tr>
<tr>
<td>Huge</td>
<td>2d6</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>2d8</td>
</tr>
<tr>
<td>Colossal</td>
<td>4d6</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _seeded = {title: "Seeded", jsx: <><div style={{clear:"both"}}></div><Header full><span>Seeded</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_113_what_grows_within">Pathfinder #113: What Grows Within pg. 90</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Though the Great Old One <Link to="/monster/xhamen_dor">Xhamen-Dor</Link> lies half-dormant where its bloated body crashed millennia ago, virtually nothing can prevent it from seeking new hosts to infect. The most common means by which one might contract this infestation is through nightmares that brush against Xhamen-Dor's influence in the Dimension of Dreams, after which the Inmost Blot can track victims and infest their thoughts, slowly and painfully driving them mad. Less common is direct exposure to one of the Great Old One's vine-choked thralls: the seeded.</p>
<p>Xhamen-Dor feeds upon a victim's force of personality, and as a result, only a select few who meet its inscrutable criteria are even able to contract the seedborne consumption disease that turns one into a seeded. Those infected first become sickly and withdrawn. Weeks later, the germinating evil within begins sending fibrous feelers throughout the victim's body. When the host finally slips into a catatonic coma, these fibers quickly digest the organs and portions of the flesh before animating the corpse from within like a puppet. Most victims maintain painful recollections of their former lives, yet they are driven to hear and obey the commands of Xhamen-Dor and find new victims to spread their plague.</p>
<p>"Seeded creature" is an inherited template that can be added to any corporeal, living creature with a Charisma score of 12 or higher. A seeded creature uses the base creature's stats and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 1.</p>
<p><strong className="hl">Alignment:</strong> Always neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link> (<Link to="/subtype/augmented">augmented</Link>). Do not recalculate class Hit Dice, Base Attack Bonus, or saves.</p>
<p><strong className="hl">Senses:</strong> A seeded creature gains darkvision with a range of 60 feet.</p>
<p><strong className="hl">AC:</strong> The fungal growths that appear on a seeded creature's body increase the base creature's natural armor bonus by 2.</p>
<p><strong className="hl">Hit Dice:</strong> Change all racial Hit Dice to d8s. Class Hit Dice are unaffected. As undead, seeded creatures use their Charisma modifiers to determine bonus hit points (instead of their Constitution modifiers).</p>
<p><strong className="hl">Defensive Abilities:</strong> A seeded creature gains <Link to="/umr/channel_resistance">channel resistance</Link> +4, damage reduction 5/bludgeoning or slashing, a +4 bonus on saving throws against mind-affecting effects, cold <Link to="/umr/resistance">resistance</Link> 10, and electricity resistance 10, in addition to the defensive abilities granted by the undead type. A seeded creature also gains <Link to="/umr/fast_healing">fast healing</Link> 5.</p>
<p><strong className="hl">Weaknesses:</strong> A seeded creature has the following weakness.</p>
<blockquote>
<p><strong>Transformed:</strong> Although seeded creatures are undead, their bodies pulse with alien plant life. For the purposes of effects targeting creatures by type (such as a ranger's <Link to="/ability/favored_enemy">favored enemy</Link> and <Link to="/magic-enh/bane">bane</Link> weapons), seeded creatures count as both undead and <Link to="/type/plant">plants</Link>.</p>
<p>Seeded creatures are not immune to charms, compulsions, and mind-affecting effects from psychic sources, such as psychic spells or a creature's psychic magic ability. However, such effects have a chance to harm the source due to seeded creatures' <em>insidious mind</em> special attack (see below).</p>
</blockquote>
<p><strong className="hl">Speed:</strong> A seeded creature retains all movement types and gains a climb speed equal to its base speed.</p>
<p><strong className="hl">Melee:</strong> A seeded creature gains two tendril attacks that each deal damage as per a <Link to="/umr/tentacle_attack">tentacle</Link> of a creature one size category larger than the base creature's size. These tendrils are secondary attacks and also have the <Link to="/umr/grab">grab</Link> universal monster ability, and the seeded creature's reach with these attacks increases by 5 feet. Its natural weapons are treated as magic and evil weapons for the purpose of overcoming damage reduction.</p>
<p><strong className="hl">Special Attacks:</strong> A seeded creature gains several special attacks. The save DCs are equal to 10 + 1/2 the seeded creature's HD + the seeded creature's Charisma modifier unless otherwise noted.</p>
<blockquote>
<p><strong>Death Burst (Ex):</strong> When a seeded creature dies, it releases psychic spores. All creatures adjacent to the seeded creature are exposed to its seedborne consumption infestation (see below). Due to the spores' psychic nature, any effect that would completely deflect gases and similar airborne hazards grants protected creatures only a +5 bonus on saving throws against exposure.</p>
<p><strong>Entrapping Tendrils (Ex):</strong> When a seeded creature succeeds at a combat maneuver check to <Link to="/rule/pin">pin</Link> a foe, it can attempt a second combat maneuver check to tie up the foe with a tendril as a swift action. Doing so causes it to lose one of its tendril attacks as long as it is keeping a creature tied up in this way, and a seeded creature can tie up only two creatures in this way before it runs out of spare vines. Each round that a creature remains tied up in this way, it is exposed to the seeded one's seedborne consumption until it is affected. In addition, every full day a victim remains tied up in this way is instead treated as though a month had passed for the purpose of the seedborne consumption disease. The tendrils each have hardness 5 and 10 hit points. If a creature tears free or destroys a tendril, the seeded creature regrows enough of the vines that make up its tendrils to regain its lost tendril attack after 1 minute.</p>
<p><strong>Insidious Mind (Su):</strong> When a seeded one succeeds at a saving throw against a psychic charm, a compulsion, or another mind-affecting spell or spell-like ability that would otherwise affect it, its dreams infect the spellcaster's mind, exposing him to seedborne consumption.</p>
<div className="sideNoteWrap"><ScrollContainer id="template-seeded--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th colSpan={4} scope="col" className="title">Seedborne Consumption (Su)</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Natural or touch attack</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the the seeded one's HD + their Cha modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1 month</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/month</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/cha_damage">Cha damage</Link> and this damage cannot be healed while the creature is infected</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>3 consecutive saves</td></tr></tbody></table></ScrollContainer></div><blockquote>
<p>When a creature's Charisma is reduced to 0, instead of becoming unconscious it falls into a feverish mental state where its mind is scattered and inattentive. The creature can still move and perform actions, but it can concentrate on only a single action, and for only a few moments. It takes a -4 penalty on saving throws; Intelligence-, Wisdom-, and Charisma-based checks; and skill checks. Within 24 hours of a creature's Charisma score reaching 0, it dies and rises as a seeded creature.</p>
</blockquote>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +4, Wis +2, Cha +4. As an undead creature, a seeded creature has no Constitution score.</p>
<p><strong className="hl">Language:</strong> A seeded creature gains <Link to="/umr/telepathy">telepathy</Link> with a range of 100 feet, but only with other seeded creatures. Seeded creatures benefit from the morale bonuses granted by other seeded creatures within range of their telepathy.</p>
</>};
const _shadow = {title: "Shadow", jsx: <><div style={{clear:"both"}}></div><Header full><span>Shadow</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 238</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 110</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>"Shadow creature" is an inherited template that can be added to any living creature, referred to hereafter as the base creature. A shadow creature retains all the base creature's statistics and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Alignment:</strong> Any (usually nongood).</p>
<p><strong className="hl">Type:</strong> The base creature's type changes to <Link to="/type/outsider">outsider</Link>, and it gains the <Link to="/subtype/augmented">augmented</Link> subtype. Do not recalculate BAB, saves, or skill ranks.</p>
<p><strong className="hl">Senses:</strong> As the base creature plus darkvision 60 feet and low-light vision.</p>
<p><strong className="hl">Defensive Abilities:</strong> A shadow creature gains DR and <Link to="/umr/resistance">resistance</Link> to cold and electricity based on its Hit Dice, as noted on the following table.</p>
<ScrollContainer id="template-shadow--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Resist Cold and Electricity</th>
<th>DR</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>5-10</td>
<td>10</td>
<td>5/magic</td>
</tr>
<tr>
<td>11+</td>
<td>15</td>
<td>10/magic</td>
</tr>
</tbody></table></ScrollContainer>
<blockquote>
<p><strong>Shadow Blend (Su):</strong> In any illumination other than bright light, a shadow creature blends into the shadows, giving it <Link to="/rule/concealment">concealment</Link> (20% miss chance). A shadow creature can suspend or resume this ability as a free action.</p>
<p><strong>Spell Resistance (Ex):</strong> A shadow creature gains spell resistance equal to the base creature's CR + 6.</p>
</blockquote>
</>};
const _shadow_animal = {title: "Shadow Animal", jsx: <><div style={{clear:"both"}}></div><Header full><span>Shadow Animal</span><span>CR +1 or +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/nidal_land_of_shadows">Nidal, Land of Shadows pg. 60</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Dread energies from the <Link to="/rule/plane_of_shadow">Plane of Shadow</Link> have leaked into the countryside of Nidal for thousands of years, pooling in shadowed groves and along darkened hillsides. Although normal animals shun these shadow-haunted regions, hunger or adversity sometimes compels a creature to enter them. Some animals who do so are wholly transformed by these energies, becoming shadow animals.</p>
<p>Shadow animals are more than mere animals, becoming hunters bleached of bright colors and commanding unusual predatory powers. Even herbivores that undergo this transformation become short tempered and dangerous.</p>
<p>Shadow animals have the brute cunning to understand spoken language, but they generally cannot speak.</p>
<p>The shadow animal template is inherited or acquired and can be added to any living, corporeal animal (referred to hereafter as the base creature). A shadow animal uses all the base creature's statistics and special abilities except as noted.</p>
<p><strong className="hl">CR:</strong> If 9 HD or fewer, base creature's CR + 1; if 10 HD or more, base creature's CR + 2.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/native">native</Link>). Do not recalculate HD, BAB, or saves.</p>
<p><strong className="hl">Alignment:</strong> Any (usually nongood).</p>
<p><strong className="hl">AC:</strong> Reduce the creature's natural armor, if any, by 1 (to a minimum of 0).</p>
<p><strong className="hl">Senses:</strong> A shadow animal gains darkvision with a range up to 60 feet and low-light vision if it didn't already have it.</p>
<p><strong className="hl">Defensive Abilities:</strong> A shadow animal gains the following defensive ability.</p>
<blockquote>
<p><strong>Shadow Blend (Su):</strong> In any illumination other than bright light, a shadow animal blends into the shadows, giving it <Link to="/rule/concealment">concealment</Link> (20% miss chance). A shadow animal can suspend or resume this ability as a free action.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> All of the shadow animal's movement speeds increase by 10 feet.</p>
<p><strong className="hl">Special Abilities:</strong> A shadow animal gains one of the following abilities for every 3 HD it has (round up).</p>
<blockquote>
<p><strong>Blinding Savagery (Ex):</strong> Choose the <Link to="/umr/rake">rake</Link>, <Link to="/umr/rend">rend</Link>, or <Link to="/umr/trample">trample</Link> ability. Whenever the shadow animal creature uses the selected ability to deal damage to a creature, the damaged creature must succeed at a Fortitude saving throw or become <Link to="/misc/blinded">blinded</Link> for 1 round. The save DC is equal to 10 + half the shadow animal's Hit Dice + the shadow animal's Wisdom modifier. This ability can be selected up to three times, applying it to a different ability each time.</p>
<p><strong>Energy Resistance (Ex):</strong> The shadow animal gains cold <Link to="/umr/resistance">resistance</Link> 10 or increases its existing cold resistance of 10 or greater to immunity to cold. This ability can be selected up to two times.</p>
<p><strong>Evasion (Ex):</strong> The shadow animal gains <Link to="/ability/evasion">evasion</Link>, as per the rogue ability of the same name.</p>
<p><strong>Fear Aura (Su):</strong> Any creature within a 60-foot radius of the shadow animal that can see or hear it must succeed at a Will saving throw (DC = 10 + half the shadow animal's HD + the shadow animal's Charisma modifier) or be <Link to="/misc/shaken">shaken</Link> for as long as it remains within the aura. Whether or not it succeeds at its save, that creature cannot be affected again by the same shadow animal's fear aura for 24 hours. This is a mind-affecting fear effect.</p>
<p><strong>Frightful Presence (Su):</strong> The shadow animal gains the <Link to="/umr/frightful_presence">frightful presence</Link> universal monster ability, which activates as a free action when the shadow animal charges, attacks during a surprise round, or succeeds at a DC 15 <Link to="/skill/intimidate">Intimidate</Link> check. Its frightful presence has a range of 30 feet and a duration of 5d6 rounds.</p>
<p><strong>Hide in Plain Sight (Su):</strong> The shadow animal can use <Link to="/skill/stealth">Stealth</Link> even while being observed. As long as it is within 10 feet of a shadow other than its own, a shadow animal can attempt to use Stealth to hide itself from view even if it does not have cover or concealment.</p>
<p><strong>See in Darkness (Su):</strong> The shadow animal can see perfectly in darkness of any kind, including that created by <Link to="/spell/deeper_darkness">deeper darkness</Link>.</p>
<p><strong>Shadow Bite (Su):</strong> The shadow animal can make one of its natural attacks through its shadow. Its reach with the selected natural attack increases by 5 feet, and a creature damaged by this natural attack must succeed at a Fortitude save (DC = 10 + half the shadow animal's HD + the shadow animal's Charisma modifier) or take 1 point of <Link to="/rule/strength_damage">Strength damage</Link> in addition to the normal damage dealt.</p>
<p><strong>Shadow Form (Su):</strong> Once per day as a standard action, the shadow animal can turn into an animate pool of darkness for up to 10 minutes. This duration need not be used at all once, but it must be used in 1-minute increments. This ability functions as per <Link to="/spell/gaseous_form">gaseous form</Link>.</p>
<p><strong>Shadow Spirit (Su):</strong> The shadow animal gains a +4 racial bonus on saving throws against <Link to="/rule/energy_drain">energy drain</Link> and death effects. This ability can be selected up to two times; if this ability is selected a second time, the shadow animal instead gains immunity to energy drain and death effects.</p>
<p><strong>Shadow Step (Su):</strong> The shadow animal can teleport up to 10 feet per Hit Die as a move action, so long as the creature starts and ends this travel in dim light or darkness. It can use this ability once every 1d4 rounds.</p>
<p><strong>Spectral Attacks (Su):</strong> The shadow animal's natural attacks affect incorporeal creatures as if they had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability.</p>
<p><strong>Spell Resistance (Ex):</strong> The shadow animal gains SR equal to 11 + its CR. This does not stack with any SR the base creature has.</p>
<p><strong>Umbral Fast Healing (Ex):</strong> The shadow animal gains <Link to="/umr/fast_healing">fast healing</Link> 1 when in areas of dim light or darkness. A shadow animal must have at least 10 HD to select this ability.</p>
<p><strong>Vanish (Su):</strong> As a swift action, the shadow animal can vanish for 1 round as if affected by <Link to="/spell/invisibility">invisibility</Link>. Each day, it can use this ability for 1 round per Hit Die. This ability's duration need not be used all at once, but it must be used in 1-round increments.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> A shadow animal gains a +4 bonus to Dexterity and Charisma and a +2 bonus to Intelligence and Wisdom.</p>
<p><strong className="hl">Skills:</strong> A shadow animal gains a +4 racial bonus on Intimidate and Stealth checks, which does not stack with any racial bonuses the base creature has. A shadow animal has a number of skill points per racial Hit Dice equal to 6 + its Intelligence modifier. Its racial class skills are <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, Intimidate, <Link to="/skill/perception">Perception</Link>, Stealth, and <Link to="/skill/swim">Swim</Link>.</p>
<p><strong className="hl">Languages:</strong> Shadow animals gain Common and Infernal, but if the base creature is unable to speak, it can only understand these languages.</p>
</>};
const _shadow_lord = {title: "Shadow Lord", jsx: <><div style={{clear:"both"}}></div><Header full><span>Shadow Lord</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 238</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>"Shadow lord" is an acquired template that can be added to any <Link to="/template/shadow">shadow</Link> creature with 5 or more Hit Dice (referred to hereafter as the base creature). Most shadow lords were originally humanoids. A shadow lord retains all the base creature's statistics and abilities (including those granted by the shadow creature template) except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +2.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Senses:</strong> A shadow lord gains the <Link to="/umr/see_in_darkness">see in darkness</Link> ability.</p>
<p><strong className="hl">AC:</strong> Same as the base creature (see also the <em>incorporeal step</em> ability).</p>
<p><strong className="hl">Defensive Abilities:</strong> A shadow lord gains the following defensive abilities.</p>
<blockquote>
<p><strong>Energy Resistance and Damage Reduction (Su):</strong> A shadow lord gains damage reduction and <Link to="/umr/resistance">resistance</Link> to cold and electricity based on its Hit Dice, as noted on the table below. This replaces the energy resistance and damage reduction granted by the shadow creature template.</p>
<ScrollContainer id="template-shadow_lord--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Resist Cold and Electricity</th>
<th>DR</th>
</tr>
</thead>
<tbody><tr>
<td>5-10</td>
<td>15</td>
<td>10/magic</td>
</tr>
<tr>
<td>11-15</td>
<td>20</td>
<td>15/magic</td>
</tr>
<tr>
<td>16+</td>
<td>30</td>
<td>20/magic</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Incorporeal Step (Su):</strong> When a shadow lord moves, it gains the <Link to="/subtype/incorporeal">incorporeal</Link> subtype and <Link to="/umr/incorporeal">incorporeal</Link> quality, including a deflection bonus to AC equal to its Charisma bonus. It loses the incorporeal subtype and special ability when it stops moving.</p>
</blockquote>
<p><strong className="hl">Attacks:</strong> A shadow lord gains a melee touch attack that deals 1d6 points of damage (Fortitude negates). The save DC is equal to 10 + 1/2 the shadow lord's Hit Dice + the shadow lord's Charisma modifier. On a critical hit, the shadow lord's touch attack also deals 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> (also negated by the saving throw).</p>
<p><strong className="hl">Special Attacks:</strong> A shadow lord gains the following special attacks. Their saving throw DCs for these attacks are equal to 10 + 1/2 the shadow lord's Hit Dice + the shadow lord's Charisma modifier, unless otherwise noted.</p>
<blockquote>
<p><strong>Cloying Gloom Blast (Su):</strong> Three times per day, the shadow lord can unleash a 30-foot cone of cloying gloom. On a failed Fortitude saving throw, creatures in the cone are affected by a <Link to="/spell/slow">slow</Link> spell (caster level equal to the shadow lord's Hit Dice) and are blinded for the duration of the <em>slow</em> effect.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> A shadow lord gains the following spell-like abilities, with a caster level equal to its Hit Dice: at will-<Link to="/spell/ray_of_sickening">ray of sickening</Link>; 3/day-<Link to="/spell/shadow_conjuration">shadow conjuration</Link>, <Link to="/spell/shadow_step">shadow step</Link>; 1/day-<Link to="/spell/greater_shadow_conjuration">greater shadow conjuration</Link> (if the shadow lord has 11 or more Hit Dice), <Link to="/spell/shadow_walk">shadow walk</Link>.</p>
<p>A creature created with <em>shadow conjuration</em> or <em>greater shadow conjuration</em> that would normally have a celestial or fiendish template (such as a bear) instead gains the <Link to="/template/shadow">shadow</Link> creature template.</p>
<p><strong className="hl">Special Qualities:</strong> A shadow lord gains the following special quality.</p>
<blockquote>
<p><strong>Planar Thinning (Su):</strong> Once per day as a full-round action, a shadow lord can thin the barriers between the Material Plane and Shadow Plane, making it considerably easier for creatures to cross between the two. This functions like the planar travel aspect of the <Link to="/spell/gate">gate</Link> spell (caster level equal to the shadow lord's Hit Dice). This planar thinning is immediately dispelled if in an area of normal or bright light.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Dex +4, Cha +4.</p>
<p><strong className="hl">Skills:</strong> A shadow lord gains a +8 racial bonus on all <Link to="/skill/stealth">Stealth</Link> checks.</p>
</>};
const _shadowbound_creature = {title: "Shadowbound Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Shadowbound Creature</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 250</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>A shadowbound creature has lost its color and capacity for joy and pleasure.</p>
<p><strong className="hl">Quick Rules:</strong> darkvision 120 ft.; +1 to AC; +2 on rolls based on Con; +2 hp/HD; <Link to="/umr/light_blindness">light blindness</Link>; can't gain morale bonuses; regretful gaze (<Link to="/misc/shaken">shaken</Link> 1 round, 30 ft., Will save negates, DC = 10 + 1/2 HD + Cha modifier); after taking 3 points of damage per HD in a single attack, gain a +2 profane bonus on attack rolls, damage rolls, saving throws, and skill checks for 1 round.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> darkvision 120 ft.; <strong>AC</strong> gain a deflection bonus to AC equal to 1/4 CR (minimum 1); <strong>Weaknesses</strong> light blindness, can't gain morale bonuses; <strong>Special Attacks</strong> regretful <Link to="/umr/gaze">gaze</Link> (shaken 1 round, 30 ft., Will negates, DC = 10 + 1/2 HD + Cha modifier); after taking 3 points of damage per HD in a single attack, gain a +2 profane bonus on attack rolls, damage rolls, saving throws, and skill checks for 1 round; <strong>Ability Scores</strong> +4 Con.</p>
</>};
const _shadowfire_creature = {title: "Shadowfire Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Shadowfire Creature</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/the_emerald_spire_superdungeon">The Emerald Spire Superdungeon pg. 157</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Created through rituals that suffused elemental fire with the dark corruption of shadow, shadowfire creatures were spawned from an evil cult. Cruelly transformed from their true forms by their ancient creators, they flicker between existence and nothingness, reality and oblivion, feeding on pain and flame and the screams of those who dare stand against them.</p>
<p>"Shadowfire creature" is an inherited template that can be applied to any creature that has the <Link to="/template/shadow">shadow</Link> creature template and 5 or more Hit Dice, referred to hereafter as the base creature. It retains all the special abilities of the base creature, except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature + 1.</p>
<p><strong className="hl">Type:</strong> The shadowfire creature gains the <Link to="/subtype/elemental">elemental</Link> and <Link to="/subtype/fire">fire</Link> subtypes if it does not already have them. Do not recalculate the creature's base attack bonus, saves, or skill ranks.</p>
<p><strong className="hl">Defensive Abilities:</strong> A shadowfire creature gains <Link to="/umr/immunity">immunity</Link> to fire and cold, and loses any <Link to="/umr/vulnerability">vulnerability</Link> it has to fire or cold. In addition, a shadowfire creature gains the following defensive abilities.</p>
<blockquote>
<p><strong>Fire Absorption (Su):</strong> A shadowfire creature regains 1 hit point for each point of fire damage it would take from normal fire, a flaming weapon, or magical fire were it not immune. Any hit points gained above the shadowfire creature's full normal hit point total are <Link to="/rule/temporary_hit_points">temporary hit points</Link> that disappear after 5 minutes.</p>
<p><strong>Incorporeal Step (Su):</strong> When a shadowfire creature moves, it gains the <Link to="/subtype/incorporeal">incorporeal</Link> subtype and <Link to="/umr/incorporeal">incorporeal</Link> special ability, including a deflection bonus to AC equal to its Charisma bonus. It loses the incorporeal subtype and special ability when it stops moving.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> A shadowfire creature gains the following special attack.</p>
<blockquote>
<p><strong>Shadow Touch (Su):</strong> A shadowfire creature's touch chills the target and saps away its life energy. All of a shadowfire creature's slam attacks and attacks with natural weapons deal an additional 1d6 points of negative energy damage to living creatures.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> A shadowfire creature can use the <Link to="/spell/shadow_step">shadow step</Link> spell as a spell-like ability once per day, with a caster level equal to its Hit Dice. If it has 11 or more Hit Dice, it can instead use this ability three times per day.</p>
<p><strong className="hl">Ability Scores:</strong> Str +2, Dex +2, Cha +4.</p>
</>};
const _shaggra_ogre = {title: "Shaggra Ogre", jsx: <><div style={{clear:"both"}}></div><Header full><span>Shaggra Ogre</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 152</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p><Link to="/monster/ogre">Ogres</Link> with the shaggra template are covered in long, matted fur, and have stunted legs and massive oversized arms, similar to apes. They move on all fours and smash enemies with their giant fists.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all attack rolls, damage rolls, and Strength checks; gains two <Link to="/umr/slam_attack">slam attacks</Link> (1d6); gains the <Link to="/umr/grab">grab</Link> and <Link to="/umr/constrict">constrict</Link> monster special abilities.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Ability Scores</strong> +4 Strength; <strong>Attacks</strong> gains 2 slam attacks (1d6, grab, constrict); <strong>Special</strong> Abilities grab, constrict.</p>
</>};
const _siabrae = {title: "Siabrae", jsx: <><div style={{clear:"both"}}></div><Header full><span>Siabrae</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 251</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>When <Link to="/class/druid">druids</Link> are faced with threats to the natural world, they are steadfast and, at times, relentless in their defense of the land. Even in the face of overwhelming odds - an incursion of demons from <Link to="/rule/the_abyss">the Abyss</Link>, a creeping plague of necromantic corruption, an unstoppable blight of magical radiation, or a similar supernatural threat to the natural world - some sects of druids refuse to give up or abandon their duties. In these tragic cases, the desperate druids adopt the blasphemous tactic of accepting the corruption into themselves and becoming powerful undead guardians. They fight on not only against the original source of the corruption, but against all living creatures, for these druids become siabraes, and are filled with bitterness and hatred for all others - particularly other druids, whom they regard as cowards. Siabraes do not form spontaneously; they arise only as the result of the horrific <Link to="/spell/welcome_the_blighted_soul">Welcome the Blighted Soul</Link> ritual.</p>
<p>"Siabrae" is an acquired template that can be added to any druid who successfully performs the <em>welcome the blighted soul</em> ritual (hereafter referred to as the base creature). A siabrae can't have the <Link to="/arc-druid/blight_druid">blight druid</Link> archetype. A siabrae retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link> with the <Link to="/subtype/earth">earth</Link> subtype. Do not recalculate BAB, saves, or skill ranks.</p>
<p><strong className="hl">Senses:</strong> A siabrae gains darkvision and <Link to="/umr/tremorsense">tremorsense</Link>, both with a range of 60 feet.</p>
<p><strong className="hl">AC:</strong> A siabrae has a +10 natural armor bonus or the creature's normal bonus, whichever is better.</p>
<p><strong className="hl">Hit Dice:</strong> Change the creature's racial Hit Dice to d8s. All Hit Dice derived from class levels are unchanged. As an undead, a siabrae uses its Charisma modifier to determine its bonus hit points (rather than using its Constitution modifier).</p>
<p><strong className="hl">Defensive Abilities:</strong> In addition to all the abilities granted by its <Link to="/umr/undead_traits">undead traits</Link>, a siabrae gains <Link to="/umr/channel_resistance">channel resistance</Link> +4, DR 10/adamantine and bludgeoning, and <Link to="/umr/immunity">immunity</Link> to fire. A siabrae also gains the following defensive ability.</p>
<blockquote>
<p><strong>Blighted Rebirth (Su):</strong> When a siabrae is destroyed, it can attempt a DC 20 Fortitude save in order to avoid this end. The siabrae automatically succeeds at this saving throw if it is in contact with blighted or diseased terrain. On a successful save, the siabrae's body crumbles to dust as the blighted earth absorbs its essence. Its enduring essence begins forming a new body in a random location within 1d10 miles (this new location must contain a mass of unworked stone large enough for the siabrae's body to form within). This process takes 1d10 days, after which the siabrae emerges from the stone with a peal of thunder, though without any of its gear.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> A siabrae gains a burrow speed equal to its land speed, as well as the <Link to="/umr/earth_glide">earth glide</Link> ability.</p>
<p><strong className="hl">Attacks:</strong> A siabrae grows a pair of stony antlers from its skull, granting it a <Link to="/umr/gore_attack">gore attack</Link> that deals damage based on the siabrae's size, but as if it were one size category larger than its actual size. This gore attack is always a primary attack, even when the siabrae also uses weapons. If the siabrae wishes, it can retain these antlers in any form it assumes via wild shape. Shards of the stony antlers break off in wounds - a siabrae's antlers constantly replenish themselves as these shards break off. A creature damaged by a siabrae's gore attack must succeed at a Fortitude save (DC = 10 + 1/2 the siabrae's HD + the siabrae's Charisma modifier) or turn to stone permanently.</p>
<p><strong className="hl">Special Attacks and Abilities:</strong> A siabrae retains all the special attacks and abilities of the base creature. If it had the ability to use wild shape, it retains this ability, but it can assume only the form of creatures that cannot fly. Any form it assumes (via wild shape or <Link to="/spelldef/polymorph">polymorph</Link> effects) and any creature it summons appears diseased, malnourished, or even in an advanced state of decay, although these are cosmetic effects; they do not impact actual game statistics. In addition, a siabrae gains the following special attacks.</p>
<blockquote>
<p><strong>Blight Mastery (Su):</strong> Any of a siabrae's spells or effects that would normally be restricted to affecting animals can also affect undead animals.</p>
<p><strong>Blightbond (Ex):</strong> A siabrae has an unholy bond with the blighted earth. It loses any animal companion or access to domains it had from its druidic nature bond ability. In place of nature bond, the siabrae's close ties to the blighted landscape grant it one of the following cleric domains: <Link to="/domain/animal">Animal</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/madness">Madness</Link>, or <Link to="/domain/repose">Repose</Link>. The blightbond ability otherwise functions the same as nature bond.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +2, Wis +2, Cha +2. Being undead, a siabrae has no Constitution score.</p>
<p><strong className="hl">Skills:</strong> A siabrae gains a +8 racial bonus on <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link> checks. A siabrae always treats <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, Sense Motive, and Stealth as class skills. Otherwise, a siabrae's skills are the same as those of the base creature.</p>
<p><strong className="hl">Feats:</strong> A siabrae gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
</>};
const _silverblood_lycanthrope = {title: "Silverblood Lycanthrope", jsx: <><div style={{clear:"both"}}></div><Header full><span>Silverblood Lycanthrope</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/andoran_birthplace_of_freedom">Andoran, Birthplace of Freedom pg. 61</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Silverblood werewolves are a rare type of lycanthrope found almost exclusively in the Arthfell Forest. They are the survivors of an experimental process conceived by jeweler-turned-werewolf Garrick Argentum, and developed by his allies in the Shadow Pack, a group of werewolf druids in the forest. The Shadow Pack conducted an eldritch ritual involving successive exposures to pure silver under the light of the full moon in an attempt to desensitize the werewolves to the deadly touch of silver (in theory, this process could also produce other types of silverblood lycanthropes). The experiment was a success, and the werewolves lost their vulnerability. Swollen with pride at their new ability, the Shadow Pack joined forces with the <Link to="/monster/hobgoblin">hobgoblins</Link> of the wood and attacked the town of Olfden. Turned back after a savage battle known as the Night of Silver Blood, the werewolves sought to regroup and prepare a new assault, but on the night of the next new moon they discovered a fatal flaw in their blasphemous rite. Tied now more than ever to the lunar cycle, most of the silverblood werewolves wasted away and died when the moon darkened. Even those few that survived are greatly weakened when each new moon comes, though the surge of power when the moon waxes full still earns them great respect, and many have found positions of leadership among the werewolves of the wood.</p>
<p>Though the Night of Silver Blood was a failure, many hobgoblins and werewolves within the Arthfell Forest believe it is proof that major towns and even small cities could be totally ravaged by a somewhat larger, better-prepared force spearheaded by silverblood werewolves. Some groups of silverblood werewolves continue to maintain close connections to the local hobgoblins, forming war parties with them that raid farther and farther from the woods during the nights of the full moon. If one such band were to have a noteworthy success, its leaders might be able to gather a much larger force that could once again threaten Olfden or similarly sized settlements.</p>
<p>"Silverblood lycanthrope" is an acquired lycanthrope template that can be added to any humanoid or <Link to="/template/lycanthrope">lycanthrope</Link>. If added to a creature that already has the lycanthrope template, it replaces that template.</p>
<p><strong className="hl">CR:</strong> Same as base creature +2 (this includes the +1 increase for being a natural lycanthrope).</p>
<p><strong className="hl">Size and Type:</strong> The creature (referred to hereafter as the base creature) gains the <Link to="/subtype/shapechanger">shapechanger</Link> subtype. The silverblood lycanthrope takes on the characteristics of the base animal. Its hybrid form is the same size as the base animal or the base creature, whichever is larger.</p>
<p><strong className="hl">AC:</strong> In animal or hybrid form the silverblood lycanthrope gains a +4 natural armor bonus to AC.</p>
<p><strong className="hl">Defensive Abilities:</strong> A silverblood lycanthrope gains DR 1/- in animal or hybrid form. When the moon is at least half full, this increases to DR 3/-, and during the nights of the full moon the silverblood lycanthrope gains DR 10/-.</p>
<p><strong className="hl">Speed:</strong> Same as the base creature or base animal, depending on which form the lycanthrope is using. Hybrids use the base creature's speed.</p>
<p><strong className="hl">Melee:</strong> A lycanthrope gains a <Link to="/umr/bite_attack">bite attack</Link> in animal and hybrid forms according to the base animal.</p>
<p><strong className="hl">Special Attacks:</strong> A silverblood lycanthrope retains all the special attacks, qualities, and abilities of the base creature. In animal or hybrid form it gains any special attacks associated with its natural weapons. A silverblood lycanthrope also gains low-light vision, <Link to="/umr/scent">scent</Link>, and the following abilities.</p>
<blockquote>
<p><strong>Change Shape (Su):</strong> All silverblood lycanthropes have three forms: a humanoid form, an animal form, and a hybrid form. Equipment does not meld with the new form when changing between humanoid and hybrid form, but does when changing between those forms and animal form. A silverblood lycanthrope can shift to any of its three forms as a move action. A slain silverblood lycanthrope reverts to its humanoid form, although it remains dead.</p>
<p><strong>Curse of Lycanthropy (Su):</strong> A silverblood lycanthrope's bite attack in animal or hybrid form infects a humanoid target with <Link to="/corruption/lycanthropy">lycanthropy</Link> (Fortitude DC 15 negates). If the victim's size is not within one size category of the silverblood lycanthrope, this ability has no effect. Creatures that become lycanthropes as a result of this curse become standard afflicted <Link to="/template/lycanthrope">lycanthropes</Link> rather than silverblood lycanthropes.</p>
<p><strong>Lunar Sympathy (Su):</strong> A silverblood lycanthrope is filled with enthusiastic vigor when the light of the moon is strongest. When the moon is at least half full, a silverblood lycanthrope gains the benefit of <Link to="/spell/bless">bless</Link> whenever it is outdoors at night. On nights of the full moon, a silverblood lycanthrope gains the effect of <Link to="/spell/heroism">heroism</Link> rather than bless, and retains the benefit indoors.</p>
<p>When the moon is less than half full, a silverblood lycanthrope becomes <Link to="/misc/fatigued">fatigued</Link> during the night. On nights of the new moon, a silverblood lycanthrope becomes fatigued during the day and each night becomes <Link to="/misc/exhausted">exhausted</Link> and takes 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link>. A successful DC 20 Fortitude save reduces the Constitution damage by half.</p>
<p><strong>Lycanthropic Empathy (Ex):</strong> In any form, silverblood lycanthropes can communicate and empathize with animals of the same species as the base animal. They can use <Link to="/skill/diplomacy">Diplomacy</Link> to alter such an animal's attitude, and when so doing gain a +4 racial bonus on the check. Due to their near-legendary reputation, silverblood lycanthropes gain a +8 racial bonus on Diplomacy and <Link to="/skill/intimidate">Intimidate</Link> checks against standard lycanthropes of the same base creature.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> +2 Wis, -2 Cha in all forms; +2 Str, +2 Con in hybrid and animal forms. Silverblood lycanthropes have enhanced senses but are not fully in control of their emotions and animalistic urges. In addition to these adjustments to the base creature's statistics, a silverblood lycanthrope's ability scores change when she assumes animal or hybrid form. In human form, the silverblood lycanthrope's ability scores are unchanged from the base creature's form. In animal and hybrid forms, the silverblood lycanthrope's ability scores are the same as the base creature's or the base animal's, whichever ability score is higher.</p>
</>};
const _skeletal_champion = {hasJL:true,title: "Skeletal Champion", jsx: <><div className="jumpList" id="template-skeletal_champion-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-skeletal_champion-faces-of-death">Faces of Death</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Skeletal Champion</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 252</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Some <Link to="/template/skeleton">skeletons</Link> retain their intelligence and cunning, making them formidable warriors. These undead are far more powerful than their mindless kin, and many gain class levels.</p>
<p>"Skeletal Champion" is an acquired template that can be added to any corporeal creature (other than an undead) that has a skeletal system (referred to hereafter as the base creature) and a minimum Intelligence of 3.</p>
<p><strong className="hl">CR:</strong> Depends on Hit Dice, as follows:</p>
<ScrollContainer id="template-skeletal_champion--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>CR</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>1/4</td>
</tr>
<tr>
<td>1</td>
<td>1/2</td>
</tr>
<tr>
<td>2-3</td>
<td>2</td>
</tr>
<tr>
<td>4-5</td>
<td>3</td>
</tr>
<tr>
<td>6-7</td>
<td>4</td>
</tr>
<tr>
<td>8-9</td>
<td>5</td>
</tr>
<tr>
<td>10-11</td>
<td>6</td>
</tr>
<tr>
<td>12-14</td>
<td>7</td>
</tr>
<tr>
<td>15-17</td>
<td>8</td>
</tr>
<tr>
<td>18-20</td>
<td>9</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Type:</strong> The creature's type becomes <Link to="/type/undead">undead</Link>. It keeps subtypes save for alignment subtypes and subtypes that indicate kind.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">AC:</strong> Natural armor bonus changes as follows:</p>
<ScrollContainer id="template-skeletal_champion--table-1"><table>
<thead>
<tr>
<th>Skeleton Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium or Large</td>
<td>+2</td>
</tr>
<tr>
<td>Huge</td>
<td>+3</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6</td>
</tr>
<tr>
<td>Colossal</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Change all of the creature's racial HD to d8s, then add 2 racial Hit Dice to this total (creatures without racial HD gain 2). HD from class levels are unchanged.</p>
<p><strong className="hl">Defensive Abilities:</strong> A skeletal champion gains DR 5/bludgeoning, <Link to="/umr/channel_resistance">channel resistance</Link> +4, and <Link to="/umr/immunity">immunity</Link> to cold. It also gains all of the standard undead traits.</p>
<p><strong className="hl">Speed:</strong> A winged skeleton can't use its wings to fly. If the base creature flew magically, so can the skeleton. All other movement types are retained.</p>
<p><strong className="hl">Attacks:</strong> A skeleton retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature, except for attacks that can't work without flesh. A creature with hands gains one claw attack per hand; the skeleton can strike with each of its claw attacks at its full attack bonus. A claw attack deals damage depending on the skeleton's size (see <Link to="/umr/natural_attacks">Natural Attacks</Link>). If the base creature already had claw attacks with its hands, use the skeleton claw damage only if it's better.</p>
<p><strong className="hl">Abilities:</strong> Str +2, Dex +2. As undead, it has no Constitution score.</p>
<p><strong className="hl">BAB:</strong> Its BAB for racial HD equals 3/4 of its HD.</p>
<p><strong className="hl">Skills:</strong> Gains skill ranks per racial Hit Die equal to 4 + its Int modifier. Class skills for racial HD are <Link to="/skill/climb">Climb</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/spellcraft">Spellcraft</Link>, and <Link to="/skill/stealth">Stealth</Link>. Skills gained from class levels remain unchanged.</p>
<p><strong className="hl">Feats:</strong> A skeletal champion gains <Link to="/feat/improved_initiative">Improved Initiative</Link> as a bonus feat.</p>
<p><strong className="hl">Saves:</strong> Base save bonuses for racial Hit Dice are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2.</p>
<h3 id="template-skeletal_champion-faces-of-death" data-hash-target>Faces of Death</h3>
<p><strong>Sources</strong> <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 54</Link><br/>The simple, tottering skeleton and mindless, shambling <Link to="/template/zombie">zombie</Link> are the stereotypical image of the walking dead, but these undead horrors come in highly variable forms. Bloody skeletons, burning skeletons, fast zombies, plague zombies, and deadly intelligent skeletal champions are the best-known variants, but the walking dead are a diverse lot, and many more varieties might stalk moonlit graveyards and haunted crypts, each possessing its own strange and unique abilities. Although some common forms are listed below, in many cases these variant abilities may be applied to either skeletons or zombies, unless common sense dictates otherwise (such as a gasburst skeleton). Likewise, except as noted, the following variations can be stacked with one another - it's possible to have an exploding acid skeleton, for example.</p>
<p><strong>Magus:</strong> These variant skeletal champions and <Link to="/template/zombie_lord">zombie lords</Link> are minor spellcasters (typically 5th-level or less) that have retained both their intelligence and their spellcasting abilities. Magus skeletons and zombies gain <Link to="/feat/silent_spell">Silent Spell</Link> as a bonus feat. (CR +1 plus caster level)</p>
</>};
const _skeleton = {hasJL:true,title: "Skeleton", jsx: <><div className="jumpList" id="template-skeleton-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-skeleton-variant-skeletons">Variant Skeletons</InnerLink></li><li><InnerLink toTop to="template-skeleton-bloody-skeleton">Bloody Skeleton</InnerLink></li><li><InnerLink toTop to="template-skeleton-burning-skeleton">Burning Skeleton</InnerLink></li><li><InnerLink toTop to="template-skeleton-faces-of-death">Faces of Death</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Skeleton</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 250</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Skeletons are the animated bones of the dead, brought to unlife through foul magic. While most skeletons are mindless automatons, they still possess an evil cunning imparted to them by their animating force - a cunning that allows them to wield weapons and wear armor.</p>
<p>"Skeleton" is an acquired template that can be added to any corporeal creature (other than an undead) that has a skeletal system (referred to hereafter as the base creature).</p>
<p><strong className="hl">CR:</strong> Depends on Hit Dice, as follows:</p>
<ScrollContainer id="template-skeleton--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>CR</th>
<th>XP</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>1/6</td>
<td>65</td>
</tr>
<tr>
<td>1</td>
<td>1/3</td>
<td>135</td>
</tr>
<tr>
<td>2-3</td>
<td>1</td>
<td>400</td>
</tr>
<tr>
<td>4-5</td>
<td>2</td>
<td>600</td>
</tr>
<tr>
<td>6-7</td>
<td>3</td>
<td>800</td>
</tr>
<tr>
<td>8-9</td>
<td>4</td>
<td>1,200</td>
</tr>
<tr>
<td>10-11</td>
<td>5</td>
<td>1,600</td>
</tr>
<tr>
<td>12-14</td>
<td>6</td>
<td>2,400</td>
</tr>
<tr>
<td>15-17</td>
<td>7</td>
<td>3,200</td>
</tr>
<tr>
<td>18-20</td>
<td>8</td>
<td>4,800</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. It retains any subtype except for alignment subtypes (such as good) and subtypes that indicate kind (such as giant). It does not gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">AC:</strong> Natural armor bonus changes as follows:</p>
<ScrollContainer id="template-skeleton--table-1"><table>
<thead>
<tr>
<th>Skeleton Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium or Large</td>
<td>+2</td>
</tr>
<tr>
<td>Huge</td>
<td>+3</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6</td>
</tr>
<tr>
<td>Colossal</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> A skeleton drops any HD gained from class levels and changes racial HD to d8s. Creatures without racial HD are treated as if they have 1 racial HD. If the creature has more than 20 Hit Dice, it can't be made into a skeleton by the <Link to="/spell/animate_dead">animate dead</Link> spell. A skeleton uses its Cha modifier (instead of its Con modifier) to determine bonus hit points.</p>
<p><strong className="hl">Saves:</strong> Base save bonuses are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> A skeleton loses the base creature's defensive abilities and gains DR 5/bludgeoning and <Link to="/umr/immunity">immunity</Link> to cold. It also gains all of the standard immunities and traits possessed by undead creatures.</p>
<p><strong className="hl">Speed:</strong> A winged skeleton can't use its wings to fly. If the base creature flew magically, so can the skeleton. All other movement types are retained.</p>
<p><strong className="hl">Attacks:</strong> A skeleton retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature, except for attacks that can't work without flesh. A creature with hands gains one <Link to="/umr/claw_attack">claw attack</Link> per hand; the skeleton can strike with each of its claw attacks at its full attack bonus. A claw attack deals damage depending on the skeleton's size. If the base creature already had claw attacks with its hands, use the skeleton claw damage only if it's better.</p>
<p><strong className="hl">Special Attacks:</strong> A skeleton retains none of the base creature's special attacks.</p>
<p><strong className="hl">Abilities:</strong> A skeleton's Dexterity increases by +2. It has no Constitution or Intelligence score, and its Wisdom and Charisma scores change to 10.</p>
<p><strong className="hl">BAB:</strong> A skeleton's base attack bonus is equal to 3/4 of its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> A skeleton loses all skill ranks possessed by the base creature and gains none of its own.</p>
<p><strong className="hl">Feats:</strong> A skeleton loses all feats possessed by the base creature and gains <Link to="/feat/improved_initiative">Improved Initiative</Link> as a bonus feat.</p>
<p><strong className="hl">Special Qualities:</strong> A skeleton loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks.</p>
<p><strong className="hl">Environment:</strong> Any, usually the same as base creature.</p>
<p><strong className="hl">Organization:</strong> Any.</p>
<p><strong className="hl">Treasure:</strong> Generally none, although sometimes a skeleton's creator arms it with magical armor or weapons.</p>
<h3 id="template-skeleton-variant-skeletons" data-hash-target>Variant Skeletons</h3>
<p>Numerous variant skeletons exist, such as those whose bones burn with an unending fire and those who drip with gore and reassemble themselves over time. Both of these variant skeletons can be created using <em>animate dead,</em> but they count as twice their normal number of Hit Dice per casting. Once controlled, they count normally against the controller's limit.</p>
<p>Perhaps the most dangerous variant skeleton, though, is the skeletal champion. This skeleton retains its intellect, and often any class levels it possessed in life. A skeletal champion cannot be created with <em>animate dead</em> - these potent undead only arise under rare conditions similar to those that cause the manifestation of ghosts or via rare and highly evil rituals.</p>
<p>Each of the following skeleton types modifies the base skeleton in a few key ways. Except as noted, these variations can be stacked with one another - it's possible to have a bloody burning skeletal champion.</p>
<h3 id="template-skeleton-bloody-skeleton" data-hash-target>Bloody Skeleton</h3>
<p>A bloody skeleton is coated in a slick layer of blood and gore infused with negative energy. This gore allows the skeleton to reform and heal itself. In addition to the changes for the skeleton template, make the following adjustments to the base creature.</p>
<p><strong className="hl">CR:</strong> As a normal skeleton + 1.</p>
<p><strong>Fast Healing:</strong> A bloody skeleton has <Link to="/umr/fast_healing">fast healing</Link> equal to 1 per 2 Hit Dice it possesses (minimum 1).</p>
<p><strong className="hl">Saves:</strong> A bloody skeleton gains <Link to="/umr/channel_resistance">channel resistance</Link> +4.</p>
<p><strong className="hl">Abilities:</strong> A bloody skeleton's Charisma is 14.</p>
<p><strong className="hl">Special Qualities:</strong> A bloody skeleton gains the deathless special quality.</p>
<blockquote>
<p><strong>Deathless (Su):</strong> A bloody skeleton is destroyed when reduced to 0 hit points, but it returns to unlife 1 hour later at 1 hit point, allowing its fast healing thereafter to resume healing it. A bloody skeleton can be permanently destroyed if it is destroyed by positive energy, if it is reduced to 0 hit points in the area of a <Link to="/spell/bless">bless</Link> or <Link to="/spell/hallow">hallow</Link> spell, or if its remains are sprinkled with a vial of <Link to="/eq-weapon/holy_water">holy water</Link>.</p>
</blockquote>
<h3 id="template-skeleton-burning-skeleton" data-hash-target>Burning Skeleton</h3>
<p>A burning skeleton is surrounded by an aura of flames that deals fire damage to those it strikes. In addition to the changes for the skeleton template, make the following adjustments to the base creature.</p>
<p><strong className="hl">CR:</strong> As a normal skeleton + 1.</p>
<p><strong className="hl">Aura:</strong> Burning skeletons possess a fiery aura.</p>
<blockquote>
<p><strong>Fiery Aura (Ex):</strong> Creatures adjacent to a burning skeleton take 1d6 points of fire damage at the start of their turn. Anyone striking a burning skeleton with an unarmed strike or natural attack takes 1d6 points of fire damage.</p>
</blockquote>
<p><strong className="hl">Defensive Abilities:</strong> Burning skeletons lose their immunity to cold but gain immunity to fire. A burning skeleton gains <Link to="/umr/vulnerability">vulnerability</Link> to cold damage.</p>
<p><strong className="hl">Melee Attacks:</strong> A burning skeleton's melee attacks (including both those made with a natural weapon and those made with a manufactured weapon) deal an additional 1d6 points of fire damage.</p>
<p><strong className="hl">Abilities:</strong> A burning skeleton's Charisma is 12.</p>
<p><strong className="hl">Special Qualities:</strong> A burning skeleton gains fiery death.</p>
<blockquote>
<p><strong>Fiery Death (Su):</strong> A burning skeleton explodes into a burst of flame when it dies. Anyone adjacent to the skeleton when it is destroyed takes 1d6 points of fire damage per 2 Hit Dice the skeleton possessed (minimum 1d6). A Reflex save (DC = 10 + 1/2 the skeleton's Hit Dice + the skeleton's Cha bonus) halves this damage.</p>
</blockquote>
<h3 id="template-skeleton-faces-of-death" data-hash-target>Faces of Death</h3>
<p><strong>Sources</strong> <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 54</Link><br/>The simple, tottering skeleton and mindless, shambling <Link to="/template/zombie">zombie</Link> are the stereotypical image of the walking dead, but these undead horrors come in highly variable forms. Bloody skeletons, burning skeletons, fast zombies, plague zombies, and deadly intelligent <Link to="/template/skeletal_champion">skeletal champions</Link> are the best-known variants, but the walking dead are a diverse lot, and many more varieties might stalk moonlit graveyards and haunted crypts, each possessing its own strange and unique abilities. Although some common forms are listed below, in many cases these variant abilities may be applied to either skeletons or <Link to="/template/zombie">zombies</Link>, unless common sense dictates otherwise (such as a gasburst skeleton). Likewise, except as noted, the following variations can be stacked with one another - it's possible to have an exploding acid skeleton, for example.</p>
<p><strong>Acid Skeleton:</strong> The bones of an acid skeleton constantly ooze caustic acid. An acid skeleton's melee attacks deal an additional 1d6 points of acid damage, and anyone striking an acid skeleton with an unarmed strike or natural attack takes 1d6 points of acid damage. Acid skeletons lose their immunity to cold but gain immunity to acid. An acid skeleton's Charisma is 12. Other energy types, such as electric skeletons or frost skeletons, can be applied in a similar fashion. (CR +1)</p>
<p><strong>Exploding Skeleton:</strong> Also called "bone bombs," an exploding skeleton detonates in a burst of razor-sharp bone fragments when it dies. Anyone within 10 feet of the skeleton when it is destroyed takes 1d6 points of damage per hit die of the skeleton (minimum 1d6). A Reflex save (DC 10 + 1/2 the skeleton's Hit Dice + the skeleton's Cha modifier) halves this damage. Bloody, burning, and multiplying skeletons cannot be exploding skeletons. (CR +0)</p>
<p><strong>Host Corpse:</strong> This skeleton or zombie has been infested with a swarm of vermin or Tiny undead creatures that it releases from its body. Skeletal hosts often hold <Link to="/monster/carrionstorm">carrionstorms</Link> or <Link to="/monster/bat_swarm">bat swarms</Link> in their rib cages, while zombie hosts frequently carry <Link to="/monster/locust_swarm">locusts</Link> or <Link to="/monster/cockroach_swarm">flesh-eating cockroach swarms</Link> inside their rotting husks. Acid, bloody, and burning skeletons cannot be host corpses. (CR +0, with the swarm's CR counting as a separate creature)</p>
<p><strong>Mudra Skeleton:</strong> Sometimes known as "whirlwind skeletons," mudra skeletons are created with four or more arms, each capable of wielding a weapon. A mudra skeleton's Dexterity increases by +4 (instead of +2), and it gains <Link to="/feat/multiweapon_fighting">Multiweapon Fighting</Link> and <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as bonus feats. (CR +1)</p>
<p><strong>Multiplying Skeleton:</strong> This fearsome skeleton variant grows into more skeletons if destroyed. When a multiplying skeleton is destroyed, its bones reform 1d4 rounds later into two smaller multiplying skeletons with half the Hit Dice of the original. Each resulting multiplying skeleton continues to reform into smaller and smaller sizes. A Colossal multiplying skeleton splits into two Huge skeletons, a Gargantuan skeleton becomes two Large skeletons, a Huge skeleton reforms as two Medium skeletons, and so on, until the skeleton's Hit Dice can no longer be halved or the resulting skeletons would be Diminutive or smaller, at which point the skeletons are finally destroyed. Bloody, burning, and exploding skeletons cannot be multiplying skeletons. (CR +1)</p>
<p><strong>Skeletal Archer:</strong> While not as intelligent or skilled as skeletal champions, skeletal archers are nevertheless a welcome addition to any undead army. Skeletal archers gain <Link to="/feat/point_blank_shot">Point-Blank Shot</Link> and <Link to="/feat/precise_shot">Precise Shot</Link> as bonus feats. (CR +0)</p>
</>};
const _sorcerer = {title: "Sorcerer", jsx: <><div style={{clear:"both"}}></div><Header full><span>Sorcerer</span><span>CR +1, +2 or +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 248</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p><Link to="/class/sorcerer">Sorcerer</Link> creatures can use a variety of powerful spells and abilities to devastate their foes. Select a sorcerer creature's <Link to="/ability/sorcerer_bloodlines">bloodline</Link> when the template is added. A sorcerer creature's CR increases by 2 if the creature has 8 or more HD, and it increases by 3 if the creature has 14 or more HD.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls based on Cha; gains the bloodline arcana and bloodline powers of its chosen bloodline (using its HD - 2 as its sorcerer level to determine the effect and DC [minimum 1]); can cast a small number of sorcerer spells (see the Sorcerer Spells Known table below) using its HD as its CL and gaining two spell slots for every level of spells known.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Special Attacks</strong> bloodline arcana, bloodline powers (using its HD - 2 as its sorcerer level to determine the effect and DC [minimum 1]); <strong>Sorcerer Spells</strong> can cast a small number of sorcerer spells (see the Sorcerer Spells Known table below) using its HD as its CL and gaining two spell slots for every spell level known; <strong>Ability Scores</strong> +4 Charisma.</p>
<h3 id="template-sorcerer-sorcerer-spells-known">Sorcerer Spells Known</h3>
<ScrollContainer id="template-sorcerer--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5-7</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8-10</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11-13</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14-16</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>17-19</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>20-22</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>23-25</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>26+</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _soulbound_construct = {title: "Soulbound Construct", jsx: <><div style={{clear:"both"}}></div><Header full><span>Soulbound Construct</span><span>CR +1 or +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 60</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>A soulbound construct is a once-living creature that has had its soul bound to a construct host that serves as its new body.</p>
<p>"Soulbound construct" is an acquired template that can be applied to a <Link to="/type/construct">construct</Link> (referred to hereafter as the host construct); this construct draws several of its statistics from a living corporeal creature with an Intelligence score of 4 or more (referred to hereafter as the base creature) whose soul is contained within a soul focus. A soulbound construct uses all the host construct's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> If the base creature has 10 or fewer Hit Dice, host construct's CR + 1; if the base creature has 11 or more Hit Dice, host construct's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> As per base creature.</p>
<p><strong className="hl">Type:</strong> A soulbound construct gains any alignment subtypes that the base creature had.</p>
<p><strong className="hl">AC:</strong> A host construct gains a deflection bonus to AC equal to the base creature's Charisma modifier.</p>
<p><strong className="hl">Weakness:</strong> A soulbound construct retains all the weaknesses of the host construct and gains the following additional weakness.</p>
<blockquote>
<p><strong>Susceptible to Mind-Affecting Effects (Ex):</strong> A soulbound construct is not immune to mind-affecting effects.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> A soulbound construct gains the following special attack.</p>
<blockquote>
<p><strong>Spell-Like Abilities (Ex):</strong> A soulbound construct has one or more alignment-based spell-like abilities, based upon the base creature's HD. If the base creature has 1-4 HD, the soulbound construct can cast the first spell-like ability listed in the table below for its alignment once per day. If the base creature has 5-10 HD, it can cast the first listed spell-like ability three times per day and the second ability once per day. If the base creature has 11-16 HD, it can cast the first listed spell-like ability at will, the second ability three times per day, and the third ability once per day. If the base creature has 17-20 HD, it can cast the first and second listed spell-like abilities at will and the third ability three times per day. The caster level for these abilities is equal to the base creature's Hit Dice. The save DC for these abilities is based on the base creature's Intelligence, Wisdom, or Charisma, whichever is highest.</p>
<ScrollContainer id="template-soulbound_construct--table-0"><table>
<thead>
<tr>
<th>Alignment</th>
<th>First Ability</th>
<th>Second Ability</th>
<th>Third Ability</th>
</tr>
</thead>
<tbody><tr>
<td>Lawful good</td>
<td className="ion-activatable"><Link to="/spell/hold_person">Hold person<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/dimensional_anchor">Dimensional anchor<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/repulsion">Repulsion<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Neutral good</td>
<td className="ion-activatable"><Link to="/spell/heroism">Heroism<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/greater_invisibility">Greater invisibility<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/heal">Heal<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Chaotic good</td>
<td className="ion-activatable"><Link to="/spell/blink">Blink<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/shout">Shout<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/prismatic_spray">Prismatic spray<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Lawful neutral</td>
<td className="ion-activatable"><Link to="/spell/suggestion">Suggestion<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/lesser_globe_of_invulnerability">Lesser globe of invulnerability<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/blade_barrier">Blade barrier<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Neutral</td>
<td className="ion-activatable"><Link to="/spell/deep_slumber">Deep slumber<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/hold_monster">Hold monster<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/greater_dispel_magic">Greater dispel magic<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Chaotic neutral</td>
<td className="ion-activatable"><Link to="/spell/rage">Rage<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/confusion">Confusion<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/disintegrate">Disintegrate<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Lawful evil</td>
<td className="ion-activatable"><Link to="/spell/minor_image">Minor image<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/crushing_despair">Crushing despair<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/antilife_shell">Antilife shell<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Neutral evil</td>
<td className="ion-activatable"><Link to="/spell/inflict_moderate_wounds">Inflict moderate wounds<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/enervation">Enervation<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/harm">Harm<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Chaotic evil</td>
<td className="ion-activatable"><Link to="/spell/stinking_cloud">Stinking cloud<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/contagion">Contagion<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/eyebite">Eyebite<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> The host construct replaces its Intelligence, Wisdom, and Charisma scores with those of the base creature.</p>
<p><strong className="hl">Skills:</strong> A soulbound construct gains the Intelligence-, Wisdom-, and Charisma-based skills of the soul held in the soul focus. If the host construct already has any of these skills, select the higher total bonus between that of the base creature and that of the host construct.</p>
<p><strong className="hl">Feats:</strong> A soulbound construct gains the base creature's feats as bonus feats. Feats that can't be used by the host construct are not added in this way.</p>
<p><strong className="hl">Special Qualities:</strong> A soulbound construct gains the following special qualities.</p>
<blockquote>
<p><strong>Bind Soul (Su):</strong> The process to bind the soul focus to the construct body takes 1d10 days of continual concentration, and the target construct can attempt a Will save (DC = 10 + half the base creature's Hit Dice + the base creature's Intelligence, Wisdom, or Charisma modifier, whichever is highest) to negate the effect. Mindless constructs receive no save against this effect.</p>
<p><strong>Soul Focus (Su):</strong> The base creature's soul lives within a gem called a soul focus. As long as the soul focus remains intact, a soulbound construct gains the abilities granted by this template, and it retains the base creature's personality, memories, and thoughts, as well as its alignment, mental ability scores, feats, and skills that are based on mental ability scores. It does not retain racial modifiers to those skills (if any). A soul focus has hardness 8, 12 hit points, and a break DC of 20.</p>
</blockquote>
<h3 id="template-soulbound_construct-construction">Construction</h3>
<p>A soulbound construct's soul focus is made from a gem worth 1,000 gp per Hit Die of the base creature. Creating the soul-bound construct requires first binding the base creature's soul to the gem in a 10-hour ritual using rare spell components worth 10,000 gp. The base creature dies at some point during the process of creating the soul focus (this prevents the body from later being revived, so long as the soul focus still remains intact). An unwilling soul can resist the procedure with a successful DC 20 Will save.</p>
<h3 id="template-soulbound_construct-soul-focus">Soul Focus</h3>
<p><strong>CL</strong> 7th; <strong>Price</strong> 10,000 gp + 1,000 gp per Hit Die of the base creature</p>
<h4 id="template-soulbound_construct-construction-1">Construction</h4>
<p><strong>Requirements</strong> <Link to="/feat/craft_construct">Craft Construct</Link>, <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/geas_quest">geas/quest</Link>, <Link to="/spell/magic_jar">magic jar</Link>, soul of a living creature who dies or is slain during the creation process; <strong>Skill</strong> <Link to="/skill/craft">Craft (gemcutting)</Link>; <strong>Cost</strong> 5,000 gp + 1,000 gp per Hit Die of the base creature</p>
</>};
const _spore_zombie = {title: "Spore Zombie", jsx: <><div style={{clear:"both"}}></div><Header full><span>Spore Zombie</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 287</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>There are certain evil fungal creatures (such as <Link to="/monster/fungus_queen">fungus queens</Link>, but also rare fungal growths or extraplanar blights upon the wild) that can infest vermin with spores that have been infused with sinister power and negative energy. These foul spores grow quickly in the body of a dead vermin, eventually bursting from its head to form disturbing, antler-like growths. At the same time, the spores animate the vermin as an intelligent undead creature.</p>
<p>These are then known as spore zombies.</p>
<p>"Spore zombie" is an acquired template that can be added to any <Link to="/type/vermin">vermin</Link>, which is referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> The base creature's CR + 1.</p>
<p><strong className="hl">Alignment:</strong> Always chaotic evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. It retains any subtypes and gains the <Link to="/subtype/augmented">augmented</Link> subtype.</p>
<p><strong className="hl">AC:</strong> A spore zombie gains a +2 bonus to the base creature's natural armor.</p>
<p><strong className="hl">Hit Dice:</strong> The base creature's Hit Dice + 2.</p>
<p><strong className="hl">Saves:</strong> The creature's base save bonuses are Fort +1/3 Hit Dice, Ref +1/3 Hit Dice, and Will +1/2 Hit Dice + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> Spore zombies gain all of the qualities and immunities granted by the undead type, and retain all defensive abilities that the base creature had.</p>
<p><strong className="hl">Attacks:</strong> A spore zombie retains all of the base creature's natural attacks.</p>
<p><strong className="hl">Special Attacks:</strong> A spore zombie retains all of the base creature's special attacks, plus the following (any special attack save DCs that are Constitution-based are now Charisma-based).</p>
<blockquote>
<p><strong>Spore Burst (Ex):</strong> Once per day as a swift action, a spore zombie can spray a cloud of spores through the area. This deals 2d6 points of damage to the spore zombie and creates a cloud of spores that fills an area equal to the spore zombie's reach. Any creature in this area must succeed at a Fortitude save or be <Link to="/misc/nauseated">nauseated</Link> by the spores for 1d6 rounds. Vermin that fail this save become infested for 24 hours. If an infested vermin dies during this time, it rises as a spore zombie 1d6 rounds after its death.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Strength +4. A spore zombie gains an Intelligence score of 10 and a Charisma score equal to the base creature's Constitution score. They do not have a Con score.</p>
<p><strong className="hl">Feats:</strong> A spore zombie gains feats as appropriate for its Hit Dice, and gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Skills:</strong> A spore zombie gains skill points equal to 4 + Int modifier per Hit Die (4 points per HD for most). <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/perception">Perception</Link>, and <Link to="/skill/stealth">Stealth</Link> are class skills.</p>
<p><strong className="hl">Languages:</strong> A spore zombie can understand Abyssal but can't speak.</p>
</>};
const _steam_powered_construct = {title: "Steam-Powered Construct", jsx: <><div style={{clear:"both"}}></div><Header full><span>Steam-Powered Construct</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 62</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Though some scholars may argue about who exactly created the first steam-powered clockwork, the secret of their manufacture is now out. Savvy engineers have started to create faster and more powerful clockwork contraptions in the form of marvels blending arcane heat sources with large boilers to create pressured steam that powers the complex constructs.</p>
<p>"Steam-powered clockwork" is an inherited template that can be added to any <Link to="/type/construct">construct</Link> (referred to hereafter as the base creature). A steam-powered clockwork retains all the base creature's statistics and special abilities except as noted here. Creating a steam-powered clockwork increases the skill check DC to craft the construct by 5.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Type:</strong> The base creature gains the <Link to="/subtype/augmented">augmented</Link> and <Link to="/subtype/clockwork">clockwork</Link> subtypes. If the base creature did not have the clockwork subtype, add the <em>vulnerable to electricity, swift reactions,</em> and <em>difficult to create</em> special qualities from that subtype.</p>
<p><strong className="hl">Hit Points:</strong> Double the bonus hit points based on size granted by the construct creature type (if any).</p>
<p><strong className="hl">Defensive Abilities:</strong> Engineers design steam-powered clockworks' mechanisms to withstand the heat and pressure of the steam that powers it. As such, steam-powered clockworks gain <Link to="/magic-enh/fortification">fortification</Link> and fire <Link to="/umr/resistance">resistance</Link> based on their Hit Dice.</p>
<ScrollContainer id="template-steam_powered_construct--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Fortification</th>
<th>Fire Resistance</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>25%</td>
<td>5</td>
</tr>
<tr>
<td>5-8</td>
<td>25%</td>
<td>10</td>
</tr>
<tr>
<td>9-12</td>
<td>50%</td>
<td>10</td>
</tr>
<tr>
<td>13-16</td>
<td>50%</td>
<td>20</td>
</tr>
<tr>
<td>17-20</td>
<td>75%</td>
<td>20</td>
</tr>
<tr>
<td>20+</td>
<td>75%</td>
<td>30</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Attacks:</strong> A steam-powered construct diverts excess heat to its melee weapon systems, dealing 1d6 points of additional fire damage with natural attacks and with any metal weapons it wields.</p>
<p><strong className="hl">Special Attacks:</strong> Engineers utilize a steam-powered clockwork's pressurized steam to further enhance its capabilities. A steam-powered clockwork gains steam blast plus one additional special attack from the list below. The save DC against a steam-powered construct's special attack is equal to 10 + half the steam-powered construct's Hit Dice.</p>
<blockquote>
<p><strong>Self-Destruction (Ex):</strong> When a steam-powered clockwork's hit points are reduced to 10% of its total or fewer but are still above 0, the creature self-destructs on its next turn. It bursts into an explosion of metal scraps and steam that deals 1d6 points of fire and slashing damage per Hit Die the steam-powered clockwork has to creatures within the steam-powered clockwork's natural reach (minimum 5 feet). A target can attempt a Reflex save for half damage.</p>
<p><strong>Steam Blast (Ex):</strong> As a standard action, the steam-powered construct can release a jet of steam at a target within 30 feet. If the construct succeeds at a ranged touch attack, the jet deals 1d6 points of fire damage for every 2 Hit Dice the steam-powered construct has (minimum 1d6).</p>
<p><strong>Steam Horn (Ex):</strong> As a standard action, the steam-powered construct can unleash a loud blast of sound and a cone of steam that <Link to="/misc/deafen">deafens</Link> targets and deals 1d6 points of fire damage for every 2 Hit Dice the steam-powered construct has (minimum 1d6). A target can attempt a Fortitude save to take half damage and negate the deafened condition. Medium and smaller constructs release a 15-foot cone, Large and Huge constructs release a 30-foot cone, and Gargantuan and Colossal constructs release a 60-foot cone. This ability is usable once every 1d4 rounds.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A steam-powered clockwork loses the winding and efficient winding special qualities and gains a steam engine with a boiler instead of a clockwork winding mechanism that requires a special key. To power and move the construct, valves collect and release pressurized steam from the boiling water.</p>
<blockquote>
<p><strong>Heat Management (Ex):</strong> When a steam-powered clockwork ignores any amount of fire damage due to its fire resistance, the steam-powered clockwork gains the benefits of <Link to="/spell/haste">haste</Link>, increases the additional fire damage applied to melee attacks to 2d6, and loses its fortification ability for 1 round. Whenever a steam-powered clockwork takes cold damage, it gains the effects of <Link to="/spell/slow">slow</Link> and loses the extra fire damage applied to melee attacks for 1 round. A steam-powered construct can negate either effect with a successful Fortitude save (DC = 10 + the amount of energy damage taken). Steam-powered clockwork golems are affected by magical fire and cold spells, which bypass their <em>immunity to magic</em> special ability.</p>
<p><strong>Increased Locomotion (Ex):</strong> Steam-powered clockworks increase all movement speeds by 10 feet and gain <Link to="/feat/run">Run</Link> as a bonus feat.</p>
<p><strong>Steam Engine (Ex):</strong> An alchemically treated boiler contains the superheated water that supplies power to a steam engine. A steam-powered clockwork can remain active for 1 week per Hit Die with a full boiler. Anytime the steam-powered clockwork uses a special attack granted by this template, reduce the remaining duration of activity by 1 day (to a minimum of 1 day).</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +4, Dex +4.</p>
</>};
const _sunbaked_zombie = {title: "Sunbaked Zombie", jsx: <><div style={{clear:"both"}}></div><Header full><span>Sunbaked Zombie</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_80_empty_graves">Pathfinder #80: Empty Graves pg. 88</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Sun-baked zombies most often rise near pyramids and other burial sites in hot deserts, where latent necromantic energy lingers from countless arcane rituals and restless spirits. As such, sunbaked zombies are primarily found among the dunes of Osirion and the other nations that make up northern Garund. Typically animated in isolation, sunbaked zombies rarely form hordes like normal zombies, but when entire caravans fall to thirst and the desert sun, all of its members might rise as these terrible undead.</p>
<p>When one intentionally raises a sunbaked zombie using <Link to="/spell/animate_dead">animate dead</Link>, the body to be raised must be left out in the sun's rays for a full 12 hours and must be salted every hour during this time to hasten its desiccation. Spell effects that produce light work for this purpose only if they count as actual sunlight, and even then they must be combined with <Link to="/spell/desecrate">desecrate</Link>. Casting the animating spell at night always fails; the sun must be out and directly beating down on the corpse. Without the intense magical focus of a spell, it takes many days for the corpse to absorb enough sun and necromantic energy to rise spontaneously.</p>
<p>"Sunbaked zombie" is an acquired template that can be added to any corporeal creature (other than undead), referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> This depends on the creature's new total number of Hit Dice, as follows.</p>
<ScrollContainer id="template-sunbaked_zombie--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>CR</th>
<th>XP</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1/2</td>
<td>200</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>400</td>
</tr>
<tr>
<td>3-4</td>
<td>2</td>
<td>600</td>
</tr>
<tr>
<td>5-6</td>
<td>3</td>
<td>800</td>
</tr>
<tr>
<td>7-8</td>
<td>4</td>
<td>1,200</td>
</tr>
<tr>
<td>9-10</td>
<td>5</td>
<td>1,600</td>
</tr>
<tr>
<td>11-12</td>
<td>6</td>
<td>2,400</td>
</tr>
<tr>
<td>13-16</td>
<td>7</td>
<td>3,200</td>
</tr>
<tr>
<td>17-20</td>
<td>8</td>
<td>4,800</td>
</tr>
<tr>
<td>21-24</td>
<td>9</td>
<td>6,400</td>
</tr>
<tr>
<td>25-28</td>
<td>10</td>
<td>9,600</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. It retains any subtypes except for alignment subtypes (such as good) and subtypes that indicate kind (such as giant). It does not gain the augmented subtype.</p>
<p><strong className="hl">AC:</strong> The natural armor bonus is based on the creature's size.</p>
<ScrollContainer id="template-sunbaked_zombie--table-1"><table>
<thead>
<tr>
<th>Sunbaked Zombie Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+2</td>
</tr>
<tr>
<td>Large</td>
<td>+3</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+7</td>
</tr>
<tr>
<td>Colossal</td>
<td>+11</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Drop Hit Dice gained from class levels (to a minimum of 1) and change racial HD to d8s. Sunbaked zombies gain additional HD as noted on the following table. Sunbaked zombies use their Charisma modifiers to determine bonus hit points (instead of Constitution).</p>
<ScrollContainer id="template-sunbaked_zombie--table-2"><table>
<thead>
<tr>
<th>Sunbaked Zombie Size</th>
<th>Bonus Hit Dice</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>-</td>
</tr>
<tr>
<td>Small or Medium</td>
<td>+1 HD</td>
</tr>
<tr>
<td>Large</td>
<td>+2 HD</td>
</tr>
<tr>
<td>Huge</td>
<td>+4 HD</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6 HD</td>
</tr>
<tr>
<td>Colossal</td>
<td>+10 HD</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Saves:</strong> A sunbaked zombie's base save bonuses are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> A sunbaked zombie loses the base creature's defensive abilities and gains DR 5/slashing and resist fire 10 (or immunity to fire if it has 11 HD or more), as well as all of the standard immunities and traits granted by the undead type.</p>
<p><strong className="hl">Speed:</strong> Winged sunbaked zombies can still fly, but their maneuverability drops to clumsy. If the base creature flew magically, so can the sunbaked zombie. Retain all other movement types.</p>
<p><strong className="hl">Attacks:</strong> A sunbaked zombie retains all natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the sunbaked zombie's size, but as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Special Attacks:</strong> A sunbaked zombie retains none of the base creature's special attacks, but gains the following.</p>
<blockquote>
<p><strong>Death Throes (Su):</strong> When a sunbaked zombie is destroyed, its body explodes in a burst of stale dust. Adjacent creatures must succeed at a Fortitude save or be <Link to="/misc/staggered">staggered</Link> for 1d4+1 rounds. The DC is equal to 10 + 1/2 the sunbaked zombie's Hit Dice + the sunbaked zombie's Cha modifier. Creatures that don't breathe are immune to this effect.</p>
<p><strong>Fiery Gaze (Su):</strong> A sunbaked zombie's eye sockets flicker with a small flame that gives light equivalent to that of a <Link to="/eq-misc/candle">candle</Link>. As a standard action, a sunbaked zombie can direct its gaze against a single creature within 30 feet of it. A creature targeted must succeed at a Fortitude save or take 1d6 points of fire damage. If the sunbaked zombie has 5 or more Hit Dice, its fiery gaze deals 2d6 points of fire damage, and this damage increases by an additional 1d6 points of fire damage for every 4 additional Hit Dice the sunbaked zombie possesses. A creature damaged by this effect must succeed at a Reflex save or catch fire. Each round, a burning creature can attempt a Reflex save to quench the flames; failure results in another 1d6 points of fire damage. Flammable items worn by a creature must also save or take the same damage as the creature. If a creature is already on fire, it suffers no additional effects from a fiery gaze. The save DC is Charisma-based.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Str +2. A sunbaked zombie has no Con or Int score, and its Wis and Cha become 10.</p>
<p><strong className="hl">BAB:</strong> A sunbaked zombie's base attack bonus is equal to 3/4 of its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> A sunbaked zombie has no skill ranks.</p>
<p><strong className="hl">Feats:</strong> A sunbaked zombie loses all feats possessed by the base creature and gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Special Qualities:</strong> A sunbaked zombie loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks.</p>
</>};
const _taxidermic_creature = {title: "Taxidermic Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Taxidermic Creature</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 240</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Taxidermic creatures are the work of obsessed individuals seeking to use their alchemical or occult talents to preserve and reanimate lifeless beings. The abilities of taxidermic creatures often pale in comparison to those of their living counterparts, as they are bereft of intelligence or an animate life force to guide them. Instead, taxidermic creatures possess a rudimentary form of instinct, though they are still able to follow basic instructions from their creators.</p>
<p>Less refined than the magic used to animate undead, golems, and other constructs, the creation of a taxidermic creature is at best an inaccurate science. There is no one method of crafting a taxidermic creature, so each result is different. Every creature crafted in such a manner is prone to inherent defects based on the materials used or shortcuts taken during the process, and may or may not be able to obey its creators commands in a satisfactory manner. Because of taxidermic creatures' limited mental faculties, their creators must be extremely careful and literal when commanding them.</p>
<p>Left unattended, taxidermic creatures stand in place, having no need to drink, eat, or sleep. Unless given specific commands, the actions of these creatures are unpredictable. Each taxidermic creature behaves differently, depending on the quirks of its individual construction. Some taxidermic creatures move and act like prowling animals, while others move with the rigidity and unerring purpose of <Link to="/monster/animated_object">animated objects</Link>. Some twisted taxidermists have gone so far as to create taxidermic humanoids, aberrations, and even fey.</p>
<p>"Taxidermic creature" is an acquired template that can be added to any corporeal creature (other than constructs or undead), referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> This depends on the creature's original number of Hit Dice, as noted on the following table, and is further adjusted based on its size, as noted in the Hit Dice entry below.</p>
<ScrollContainer id="template-taxidermic_creature--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>CR</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1/4</td>
</tr>
<tr>
<td>2</td>
<td>1/2</td>
</tr>
<tr>
<td>3-4</td>
<td>1</td>
</tr>
<tr>
<td>5-6</td>
<td>2</td>
</tr>
<tr>
<td>7-8</td>
<td>3</td>
</tr>
<tr>
<td>9-10</td>
<td>4</td>
</tr>
<tr>
<td>11-12</td>
<td>5</td>
</tr>
<tr>
<td>13-16</td>
<td>6</td>
</tr>
<tr>
<td>17-20</td>
<td>7</td>
</tr>
<tr>
<td>21-24</td>
<td>8</td>
</tr>
<tr>
<td>25-28</td>
<td>9</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/construct">construct</Link>. It retains all subtypes except for alignment subtypes (such as good) and subtypes that indicate kind. It does not gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">Senses:</strong> The creature gains darkvision 60 feet and low-light vision if it does not already possess them.</p>
<p><strong className="hl">AC:</strong> The taxidermic creature's natural armor bonus is based on its size.</p>
<ScrollContainer id="template-taxidermic_creature--table-1"><table>
<thead>
<tr>
<th>Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+2</td>
</tr>
<tr>
<td>Large</td>
<td>+3</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+7</td>
</tr>
<tr>
<td>Colossal</td>
<td>+11</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Remove Hit Dice gained from class levels (minimum of 1) and change all racial Hit Dice to d10s. As constructs, taxidermic creatures gain a number of bonus hit points based on their size. This information is repeated in the table below. Taxidermic creatures also gain bonus Hit Dice based on their size, as noted on the following table.</p>
<ScrollContainer id="template-taxidermic_creature--table-2"><table>
<thead>
<tr>
<th>Size</th>
<th>Bonus Hit Dice</th>
<th>Bonus Construct hp</th>
<th>CR Increase</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Small</td>
<td>-</td>
<td>+10</td>
<td>-</td>
</tr>
<tr>
<td>Medium</td>
<td>-</td>
<td>+20</td>
<td>-</td>
</tr>
<tr>
<td>Large</td>
<td>+1 HD</td>
<td>+30</td>
<td>+1</td>
</tr>
<tr>
<td>Huge</td>
<td>+2 HD</td>
<td>+40</td>
<td>+1</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+3 HD</td>
<td>+60</td>
<td>+1</td>
</tr>
<tr>
<td>Colossal</td>
<td>+4 HD</td>
<td>+80</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Saves:</strong> The creature's base save bonuses are Fortitude +1/3 Hit Dice, Reflex +1/3 Hit Dice, and Will +1/3 Hit Dice.</p>
<p><strong className="hl">Defensive Abilities:</strong> Taxidermic creatures lose their defensive abilities and gain all the qualities and immunities granted by the construct type.</p>
<p><strong className="hl">Weaknesses:</strong> A taxidermic creature gains the following weakness.</p>
<blockquote>
<p><strong>Defect (Ex):</strong> Every taxidermic creature has one major defect. This manifests as a unique weakness, based on the reconstruction method used on the subject. Select one of the following.</p>
<ul>
<li><em>Crude Stitching:</em> Massive open stitches mar the surface of the taxidermic creature. It gains <Link to="/umr/vulnerability">vulnerability</Link> to slashing weapons.</li>
<li><em>Defective Eyes:</em> Whether from cracks in a glass eye or cloudiness from preservatives applied too late, the eyes on the taxidermic creature are damaged. Every attack, melee or ranged, made by the taxidermic creature suffers a 10% miss chance.</li>
<li><em>Understuffed:</em> Reduce the number of bonus hit points the taxidermic creature receives from being a construct by half. Only taxidermic creatures of Medium size or smaller can have this defect.</li>
<li><em>Wire Frame:</em> Thick metal wiring supports the taxidermic creature. It is vulnerable to electricity and counts as metal for the purposes of abilities and spells that affect metal (such as <Link to="/spell/chill_metal">chill metal</Link> or <Link to="/spell/shocking_grasp">shocking grasp</Link>).</li>
<li><em>Wooden Struts:</em> Planks of wood hold up the taxidermic creature's frame. It is vulnerable to fire and counts as wood for the purposes of abilities and spells that affect wood (such as <Link to="/spell/warp_wood">warp wood</Link>).</li>
</ul>
</blockquote>
<p><strong className="hl">Speed:</strong> Reduce the base speed of a taxidermic creature by 10 feet, to a minimum of 20 feet. Winged taxidermic creatures can fly, but their maneuverability drops to clumsy. If the base creature flew magically, the taxidermic creature loses this ability. Retain all other movement types.</p>
<p><strong className="hl">Attacks:</strong> A taxidermic creature retains all natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the taxidermic creature's size.</p>
<p><strong className="hl">Special Attacks:</strong> A taxidermic creature retains none of the base creature's special attacks.</p>
<p><strong className="hl">Ability Scores:</strong> Strength -2, Dexterity -2. A taxidermic creature has no Constitution or Intelligence score. Its Wisdom becomes 10 and Charisma becomes 3.</p>
<p><strong className="hl">BAB:</strong> A taxidermic creature's base attack bonus is equal to 3/4 of its Hit Dice, even though most constructs have base attack bonuses equal to their Hit Dice.</p>
<p><strong className="hl">Skills:</strong> A taxidermic creature has no skill ranks. It loses all racial bonuses on skill checks that are not directly related to its physical form.</p>
<p><strong className="hl">Feats:</strong> A taxidermic creature loses all feats possessed by the base creature, and does not gain feats as its Hit Dice increase.</p>
<p><strong className="hl">Special Qualities:</strong> A taxidermic creature loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks.</p>
</>};
const _terror_creature = {title: "Terror Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Terror Creature</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/city_of_golden_death">City of Golden Death pg. 29</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Creatures with the terror template are warped by prolonged contact with the <Link to="/rule/negative_energy_plane">Negative Energy Plane</Link>. They are terrifying to behold and have developed special resistances and attacks. A terror creature's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Alignment</strong> changes to NE; <strong>Senses</strong> gains darkvision 60 ft.; <strong>Aura</strong> fear (as <Link to="/spell/fear">fear</Link> spell, 20 ft., Will save DC 10 + 1/2 terror creature's racial HD + creature's Charisma modifier); <strong>Defensive Abilities</strong> negative energy absorption (Su; heals 1 hit point for every 3 points of damage that negative energy attacks would otherwise deal; a terror creature gets no saving throw against negative energy effects); <strong>Immune</strong> fear effects</p>
</>};
const _thicken_ogre = {title: "Thicken Ogre", jsx: <><div style={{clear:"both"}}></div><Header full><span>Thicken Ogre</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 152</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p><Link to="/monster/ogre">Ogres</Link> with the thicken template have huge, oversized heads and razor-sharp teeth.</p>
<p><strong className="hl">Quick Rules:</strong> -1 to AC, ranged attack rolls, initiative, and Dexterity-based skills; gains a <Link to="/umr/bite_attack">bite attack</Link> (1d8).</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Ability Scores</strong> -2 Dexterity; <strong>Attacks</strong> gains a bite attack (1d8).</p>
</>};
const _trompe_loeil = {title: "Trompe l'Oeil", jsx: <><div style={{clear:"both"}}></div><Header full><span>Trompe l'Oeil</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 242</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Trompe l'oeil creatures are life-sized portraits animated by powerful magic or occult phenomena. Able to move and talk, these constructs can also step out of their frames to become three-dimensional beings. Born from artistic masterpieces, trompe l'oeils can easily pass for their original models, though close examination reveals that they are not flesh and blood, but only layers of paint. Trompe l'oeils can be created to act as guardians and spies, or on occasion, a painting will animate spontaneously. Rarely, a portrait is so lifelike, a nascent spirit is able to inhabit it. Believing itself to be as good as or better than the original, such a trompe l'oeil seeks to eliminate and replace the painting's subject.</p>
<p>"Trompe l'oeil" is an inherited template that can be added to any corporeal creature that has an Intelligence score (referred to hereafter as the base creature).</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 1.</p>
<p><strong className="hl">Alignment:</strong> A trompe l'oeil usually has the same alignment as its creator or the base creature. A trompe l'oeil that seeks to destroy its original model, however, has an evil alignment (but the same alignment on the chaotic/lawful axis).</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/construct">construct</Link>. Do not recalculate BAB, saves, or skill ranks.</p>
<p><strong className="hl">AC:</strong> A trompe l'oeil gains a bonus to AC based on its HD, as noted in the following table. If it is depicted wearing armor or a shield, these items are <Link to="/rule/masterwork_a">masterwork</Link> and gain an enhancement bonus (or equivalent armor special abilities) when worn by the trompe l'oeil, as indicated in the table. If the trompe l'oeil is depicted without armor, add the armor enhancement bonus to its natural armor bonus instead. Armor and shields equipped by a trompe l'oeil melt into puddles of nonmagical paint when the creature is destroyed.</p>
<ScrollContainer id="template-trompe_loeil--table-0"><table>
<thead>
<tr>
<th>Trompe l'oeil HD</th>
<th>Armor Enhancement Bonus</th>
<th>Shield Enhancement Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>&mdash;</td>
<td>&mdash;</td>
</tr>
<tr>
<td>5-8</td>
<td>+1</td>
<td>&mdash;</td>
</tr>
<tr>
<td>9-12</td>
<td>+2</td>
<td>+1</td>
</tr>
<tr>
<td>13-16</td>
<td>+3</td>
<td>+1</td>
</tr>
<tr>
<td>17+</td>
<td>+4</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Change all of the creature's racial Hit Dice to d10s. All Hit Dice derived from class levels remain unchanged. As constructs, trompe l'oeils gain a number of additional hit points as noted in the following table.</p>
<ScrollContainer id="template-trompe_loeil--table-1"><table>
<thead>
<tr>
<th>Trompe l'oeil Size</th>
<th>Bonus Hit Points</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny of Smaller</td>
<td>&mdash;</td>
</tr>
<tr>
<td>Small</td>
<td>+10</td>
</tr>
<tr>
<td>Medium</td>
<td>+20</td>
</tr>
<tr>
<td>Large</td>
<td>+30</td>
</tr>
<tr>
<td>Huge</td>
<td>+40</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+60</td>
</tr>
<tr>
<td>Colossal</td>
<td>+80</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Defensive Abilities:</strong> A trompe l'oeil gains the standard immunities and traits of construct creatures. In addition, it gains rejuvenation.</p>
<blockquote>
<p><strong>Rejuvenation (Su):</strong> When a trompe l'oeil is destroyed, it reforms 2d4 days later on its original canvas. The only way to permanently destroy a trompe l'oeil is to destroy the original canvas before the creature reforms.</p>
</blockquote>
<p><strong className="hl">Attacks:</strong> A trompe l'oeil retains all weapon proficiencies and natural weapons. If it's depicted wielding any manufactured weapons, the weapons are <Link to="/rule/masterwork_w">masterwork</Link> and gain an enhancement bonus (or equivalent weapon special abilities) when wielded by it. The bonus is based on its HD, as noted in the following table. A trompe l'oeil's weapons melt into puddles of nonmagical paint when the creature is destroyed.</p>
<p><strong className="hl">Abilities:</strong> A trompe l'oeil has no Constitution score.</p>
<p><strong className="hl">Skills:</strong> A trompe l'oeil gains a +10 racial bonus on <Link to="/skill/disguise">Disguise</Link> checks to appear as the base creature. It also receives a +5 bonus on <Link to="/skill/bluff">Bluff</Link> checks to pretend to be the base creature and a +5 bonus on <Link to="/skill/stealth">Stealth</Link> checks to appear as part of a painting.</p>
<p><strong className="hl">Special Qualities:</strong> A trompe l'oeil gains the following special qualities.</p>
<blockquote>
<p><strong>Autotelic (Ex):</strong> A trompe l'oeil uses its Charisma score in place of its Constitution score when calculating hit points, Fortitude saves, and any special ability that relies on Constitution (such as when calculating a breath weapon's DC).</p>
<p><strong>Enter Painting (Su):</strong> As a standard action, a trompe l'oeil can enter a painting it touches. When it does so, its physical body disappears, and its image appears in the painting. The trompe l'oeil can use its normal senses and attempt <Link to="/skill/perception">Perception</Link> checks to notice anything occurring near the painting. While within a painting, the trompe l'oeil can talk and move anywhere within the picture or even temporarily alter it (such as by picking a flower in the painting). It cannot use any spells or other abilities while within an image. In addition, the trompe l'oeil gains the <Link to="/umr/freeze">freeze</Link> universal monster ability to appear as part of the painting. The trompe l'oeil can leave the painting as a move action. Once it leaves the painting, the image immediately reverts to the appearance it had before the trompe l'oeil entered. If someone destroys or damages the painting, the trompe l'oeil is unharmed, but exits the image.</p>
</blockquote>
<h3 id="template-trompe_loeil-construction">Construction</h3>
<p>A trompe l'oeil is created from a masterwork painting of the base creature, with a cost varying on the size of the subject.</p>
<blockquote>
<p><em>Trompe l'Oeil</em> <strong>CL</strong> varies (equal to the trompe l'oeil's HD); <strong>Price</strong> varies (100 gp per HD plus cost of painting)</p>
</blockquote>
<p><strong>Requirements</strong> <Link to="/feat/craft_construct">Craft Construct</Link>, <Link to="/spell/animate_objects">animate objects</Link>, <Link to="/spell/enter_image">enter image</Link>; <strong>Skill</strong> <Link to="/skill/craft">Craft</Link> (painting); <strong>Cost</strong> 500 gp per HD plus cost of painting</p>
</>};
const _tsukumogami = {title: "Tsukumogami", jsx: <><div style={{clear:"both"}}></div><Header full><span>Tsukumogami</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 253</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>When an object reaches the 100-year anniversary of its crafting, sometimes it forms an amalgam with a <Link to="/subtype/kami">kami</Link>, creating a creature known as a tsukumogami. Tsukumogami run the gamut in personality, outlook, and function. Objects that are well kept and cared for often form curious and helpful tsukumogami. Most commonly, tsukumogami are mischievous and frightening but not actually malign. Tsukumogami formed from objects that have been abandoned, neglected, or misused are dangerous both to the humans around and to themselves, as their uncontrolled rage might eventually transform them into <Link to="/subtype/oni">oni</Link>.</p>
<p>Tsukumogami is an acquired template that can be added to any <Link to="/monster/animated_object">animated object</Link> (referred to hereafter as the base creature). A tsukumogami retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Any.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/kami">kami</Link>, <Link to="/subtype/native">native</Link>). Tsukumogami have <Link to="/misc/good_saves">good Reflex and Will saves</Link>, so increase the base creature's Reflex and Will saves to 2 + 1/2 its Hit Dice + the relevant ability modifier.</p>
<p><strong className="hl">AC:</strong> A tsukumogami's natural armor bonus increases by 2.</p>
<p><strong className="hl">Hit Dice:</strong> Retain the base creature's construct bonus hit points from size (if any). As outsiders, tsukumogami gain bonus hit points from high Constitution scores.</p>
<p><strong className="hl">Spell-Like Abilities:</strong> Tsukumogami gain spell-like abilities based on their size, usable at will. The caster level is equal to the tsukumogami's Hit Dice.</p>
<ScrollContainer id="template-tsukumogami--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny+</td>
<td><Link to="/spell/decrepit_disguise">Decrepit disguise</Link> (self only), <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/mending">mending</Link>, <Link to="/spell/quintessence">quintessence</Link> (self only)</td>
</tr>
<tr>
<td>Small+</td>
<td><Link to="/spell/invisibility">Invisibility</Link> (self only), <Link to="/spell/ventriloquism">ventriloquism</Link></td>
</tr>
<tr>
<td>Medium+</td>
<td><Link to="/spell/levitate">Levitate</Link>, <Link to="/spell/silent_image">silent image</Link></td>
</tr>
<tr>
<td>Large+</td>
<td><Link to="/spell/fly">Fly</Link>, <Link to="/spell/make_whole">make whole</Link></td>
</tr>
<tr>
<td>Huge+</td>
<td><Link to="/spell/obscure_object">Obscure object</Link> (self only), <Link to="/spell/shrink_item">shrink item</Link> (self only, no volume limit)</td>
</tr>
<tr>
<td>Gargantuan+</td>
<td><Link to="/spell/animate_objects">Animate objects</Link> (each casting ends any previous castings)</td>
</tr>
<tr>
<td>Colossal</td>
<td><Link to="/spell/sympathy">Sympathy</Link> (self only)</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Special Qualities and Defensive Abilities:</strong> Because it grows additional features such as a tongue, arms, or legs, a tsukumogami gains the additional attack animated object quality without spending Construction Points, and all its attacks increase their damage dice by one step. A tsukumogami can gain 10 bonus hit points as an additional option costing 1 CP. It gains the <Link to="/umr/freeze">freeze</Link> special quality. As <Link to="/family/kami">kami</Link>, tsukumogami gain <Link to="/umr/immunity">immunity</Link> to petrification and polymorph effects; <Link to="/umr/resist">resist</Link> acid 10, electricity 10, and fire 10; <Link to="/umr/telepathy">telepathy</Link> 100 feet; <Link to="/umr/fast_healing">fast healing</Link> 5; merge with ward; and ward. Though a tsukumogami loses its construct type, it keeps its hardness, low-light vision, and all its construct immunities. It can still be affected by spells that affect objects or constructs. A tsukumogami is always merged with its ward, and unlike most kami, it forms an amalgam with its ward, so it can move and communicate while merged.</p>
<p><strong className="hl">Ability Scores:</strong> A tsukumogami has a 15 Intelligence, 17 Wisdom, and 14 Charisma. A Medium tsukumogami receives a +4 bonus to Strength, a +4 bonus to Dexterity, and a Constitution score of 19. These ability scores are adjusted for size.</p>
<p><strong className="hl">Skills:</strong> A tsukumogami has a number of skill points per racial Hit Die equal to 6 + its Intelligence modifier. Its racial class skills are the base outsider class skills plus <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/perform">Perform</Link> (any one), and <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>.</p>
</>};
const _tulpa = {title: "Tulpa", jsx: <><div style={{clear:"both"}}></div><Header full><span>Tulpa</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 254</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Tulpas are constructed of ideas and imagination. Beings of pure thought (some theorize that they are made of the same mysterious substance as the Astral Plane), tulpas are made physical by a powerful mind that is either psychically attuned or has some amount of latent psychic power.</p>
<p>The exact process that creates a tulpa is not well understood. Sometimes such beings come about after years of practice and meditation followed by an occult ritual. Other times they seem to appear spontaneously, often after their creators suffer traumatic experiences. More often than not, in these latter cases, the creators are children. Such a child witnesses something horrific or far too strange for her nascent imagination to comprehend, and ends up creating an imaginary friend to help her sort through the event and protect her from other potential dangers. While most of these imaginary friends are nothing more than figments of her mind, every so often they manifest as tulpas. Some such tulpas are noble creatures that protect the child who created them, but just as many are malicious entities that subtly torment the child or lead her astray.</p>
<p>While a tulpa is a creature of thought created by the imagination of another being, it has a will and a mind of its own. This often leads to conflict between a tulpa and its creator. In order to protect itself from banishment or worse, a tulpa often attempts to compel others to think and concentrate on its existence. This allows the tulpa to create havens of other "creators" in case its original creator forgets about the tulpa or becomes incapacitated. Nonetheless, even a sadistic tulpa or a tulpa with an actively belligerent creator must protect its creator's life in order to preserve its own existence.</p>
<p>"Tulpa" is an inherited template that can be added to any corporeal creature, referred to hereafter as the base creature. Most tulpas take the form of humanoids, and most of those take the form of their creator, but these creatures can be nearly anything their creator imagines. Tulpas have a strangely parallel existence with <Link to="/monster/unfettered_eidolon">unfettered eidolons</Link>, and tulpas with a particularly bizarre form not based on an original creature can be represented as unfettered eidolons instead. A tulpa uses the base creature's stats and abilities except as noted here. A tulpa can be created either intentionally or unintentionally, and this distinction affects the way the template applies to the base creature.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Tulpas can have any alignment, and their alignments vary wildly. An intentionally created tulpa's creator can choose the tulpa's alignment. Unintentionally created tulpas can be of any alignment, though in general an unintentionally created tulpa's alignment is in opposition to that of the creature who created it. Tulpas often have alignments that are different from the base creature they resemble - they may manifest as a friendly red dragon, a nightmarishly evil unicorn, or a fun-loving prankster inevitable.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/outsider">outsider</Link> with the <Link to="/subtype/augmented">augmented</Link> subtype. Do not recalculate the creature's Hit Dice, BAB, or saves.</p>
<p><strong className="hl">Defensive Abilities:</strong> As a being of mental energy, tulpas naturally resist mental attacks. It gains a +4 racial bonus on saving throws to resist mind-affecting effects.</p>
<p><strong className="hl">Psychic Magic:</strong> A tulpa is able to use a limited amount of psychic magic, though only to affect itself or its creator. The tulpa can store a maximum amount of psychic energy equal to 3 + its Hit Dice. The tulpa can use <Link to="/spell/burst_of_adrenaline">burst of adrenaline</Link> (1 PE), <Link to="/spell/burst_of_insight">burst of insight</Link> (1 PE), <Link to="/spell/ego_whip_i">ego whip I</Link> (3 PE), <Link to="/spell/levitate">levitate</Link> (2 PE), and <Link to="/spell/paranoia">paranoia</Link> (2 PE) as psychic magic spells. If the tulpa has at least 9 Hit Dice, it can also use <Link to="/spell/create_mindscape">create mindscape</Link> (5 PE), <Link to="/spell/foster_hatred">foster hatred</Link> (5 PE), <Link to="/spell/mind_probe">mind probe</Link> (4 PE), and <Link to="/spell/possession">possession</Link> (5 PE). A tulpa's caster level equals its Hit Dice.</p>
<p><strong className="hl">Special Qualities:</strong> A tulpa gains the following special qualities.</p>
<blockquote>
<p><strong>Creator Link (Su):</strong> A tulpa has a special link with its creator or a creature that it treats as its creator. By concentrating for 1 minute, the tulpa can sense the direction and relative distance of its creator, as long as they are both on the same plane.</p>
<p><strong>Mental Form (Su):</strong> A tulpa is capable of existing in an entirely mental state, ceasing to exist as a physical creature and taking refuge within its creator's mind. The tulpa can attempt to enter this mental form as a full-round action that does not provoke attacks of opportunity as long as it is within 60 feet of its creator. The tulpa's creator may attempt a Will save (DC = 10 + 1/2 the tulpa's Hit Dice + the tulpa's Intelligence modifier) to prevent it from entering the creator's mind with this ability. If the creator succeeds at the saving throw, she cannot be affected by this ability for 24 hours. While in its mental form, the tulpa's physical body ceases to exist, and it cannot be affected by attacks, spells, or other abilities. It perceives everything that its creator perceives (and is limited to the senses that its creator possesses, rather than using its own senses). While the tulpa is in its mental form, it is treated as though under the effects of a <Link to="/spell/riding_possession">riding possession</Link> spell, although the effect lasts indefinitely, and the creator does not gain another saving throw if the tulpa casts a mind-affecting spell on the creator. The tulpa is also able to read its creator's surface thoughts, as the <Link to="/spell/detect_thoughts">detect thoughts</Link> spell, but the creator does not get a saving throw against this effect. The creator can attempt to force the tulpa out once per day with a new Will save. A tulpa that leaves its mental state appears in an unoccupied space of its choice within 60 feet of its creator.</p>
<p><strong>Sustained by Thought (Su):</strong> Tulpas sustain themselves on and gain their power from the mental energy of living creatures concentrating on the tulpa itself. Tulpas do not heal or regain psychic energy naturally. Instead, whenever a living creature spends at least 10 minutes mentally picturing the tulpa, or interacting with it in some way, the tulpa heals 5 hit points and gains 1 point of psychic energy. A creature other than its creator can't provide more than 5 hit points and 1 PE to the tulpa per day with this activity, but its creator can feed its tulpa indefinitely, granting 5 hit points and 1 PE for every 10 minutes she spends in this way, up to the tulpa's maximum hit points and PE.</p>
<p>A creature that regularly spends time mentally picturing or interacting with the tulpa may eventually forge a powerful link with the tulpa, and effectively be treated as though she is the tulpa's creator (though this does not supplant the original creator or other creatures treated as the creator by use of this ability). A creature other than the creator that focuses on the tulpa enough to provide it with psychic energy each day for 7 consecutive days must succeed at a DC 20 Will saving throw or forge such a link. Even when killed, a tulpa is not truly banished as long as its original creator still lives. Most tulpas come back to their creator within a month of the tulpa's physical death.</p>
<p>If a tulpa's original creator dies, so does the tulpa. The original creator can also get rid of a tulpa either by completing an occult quest, the details of which are specific to the creator and its tulpa, or by means of a <Link to="/spell/wish">wish</Link> or a <Link to="/spell/miracle">miracle</Link>.</p>
</blockquote>
<p><strong className="hl">Skills:</strong> Tulpas know their creators' minds extremely well and are adept at manipulating them. They gain a +8 racial bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks against their creators.</p>
<p><strong className="hl">Ability Scores:</strong> When a tulpa comes into being intentionally, its creator chooses two of the tulpa's ability scores to increase by 4, and two of its ability scores to increase by 2. Otherwise, the ability scores increase randomly. Either way, the tulpa's Intelligence score cannot exceed the Intelligence score of its creator, so if its Intelligence score would be higher than its creator's, reduce its Intelligence to be the same as its creator's instead (an unintentionally created tulpa already at maximum Intelligence never randomly gains an ability score increase to its Intelligence score).</p>
</>};
const _unknown = {title: "Unknown", jsx: <><div style={{clear:"both"}}></div><Header full><span>Unknown</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 244</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The unknown are terrifying fey creatures that feed off the mental energies of other creatures. Scholars studying the behavior and organization of the unknown speculate they may have originally been fey creatures that somehow reached the <Link to="/rule/dimension_of_dreams">Dimension of Dreams</Link> and became trapped there, remade by other minds likewise lost in ephemeral dreamscapes. The unknown propagate more of their own kind by eroding humanoids' psyches until the victims transform into new unknown. Unknown typically choose to victimize those who are already relatively helpless, especially children, but when they transform an accomplished adventurer into one of their own, the result can be truly terrifying.</p>
<p>"Unknown" is an acquired template for any <Link to="/type/humanoid">humanoid</Link>. Unknown use the base creature abilities, except as noted.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/fey">fey</Link> (<Link to="/subtype/augmented">augmented</Link> humanoid). Do not recalculate HD, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> An unknown gains low-light vision.</p>
<p><strong className="hl">AC:</strong> Natural armor bonus improves by 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> An unknown gains DR 10/cold iron.</p>
<p><strong className="hl">Melee:</strong> An unknown gains two <Link to="/umr/claw_attack">claw attacks</Link> (assuming the base creature has two hands). These claws deal 1d6 points of damage if the unknown is Medium (1d4 if Small).</p>
<p><strong className="hl">Special Attacks:</strong> An unknown gains the following special attacks.</p>
<blockquote>
<p><strong>Psyche Erosion (Su):</strong> Once per day, a target affected by an unknown's victimize ability that sees the unknown's true appearance must succeed at a Will save (DC = 10 + 1/2 the unknown's total Hit Dice + the unknown's Charisma modifier) or take 1d6 points of <Link to="/rule/charisma_damage">Charisma damage</Link>. A successful save negates the Charisma damage and also ends the unknown's victimize effect on that target. As long as a creature is the target of an unknown's victimize ability, it can't recover the ability damage from psyche erosion, even through magic. If the Charisma damage from psyche erosion is equal to the target's Charisma score, that creature doesn't recover ability score damage naturally even if it ceases being the target of victimize. Only magic can fully heal this ability damage.</p>
<p>When its Charisma damage is equal to its Charisma score, the target falls into a nightmare-filled catatonia where it continues to be followed by an unknown. This dream state lasts for 1d4 days, and at the end, the character awakes if its Charisma damage has been reduced to less than its Charisma score. If not, the creature immediately loses all sense of self, becoming an unknown thrall. It replaces its Charisma score with the unknown's Charisma score, and no longer takes Charisma damage from exposure to the unknown. Over time, typically 1 to 2 weeks, the thrall becomes a new unknown, gaining this template.</p>
<p>The unknown can share its senses with any of its thralls (even if it changes the target of its victimize ability), and as a full-round action, it can assume control of a thrall's body, as per <Link to="/spell/possession">possession</Link>. Typically, an unknown uses this ability to keep the thrall close by until it becomes an unknown. Unknowns often use thralls to lure new victims to its lair.</p>
<p>Psyche erosion is a mind-affecting effect. If your game uses the <Link to="/rule/sanity">sanity system</Link>, the erosion deals 2d6 points of sanity damage instead of Charisma damage, and triggers the catatonia and the transformation into a thrall if the victim's sanity damage is equal to or exceeds the target's sanity.</p>
<p><strong>Victimize (Su):</strong> As a swift action, an unknown can target a single creature within line of sight with this ability. After designating a target, the unknown can't change the target of this ability for 24 hours, or until the target dies or succeeds at its save against the unknown's psyche erosion ability. An unknown always knows the exact location of a victimized creature and the shortest route to reach it, even if it is on another plane (similar to a combined <Link to="/spell/discern_location">discern location</Link> and <Link to="/spell/find_the_path">find the path</Link>); this is a divination effect and can only be prevented by <Link to="/spell/mind_blank">mind blank</Link> and similar effects. A creature can be the target of only one unknown's victimize ability at a time, and an unknown can victimize only one creature at a time.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> An unknown can use <Link to="/spell/blur">blur</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/ventriloquism">ventriloquism</Link>, and <Link to="/spell/vocal_alteration">vocal alteration</Link> (self only) as spell-like abilities at will, with a caster level equal to its Hit Dice.</p>
<p><strong className="hl">Languages:</strong> An unknown gains Aklo as a bonus language. It can't speak except by using its <em>ventriloquism</em> spell-like ability.</p>
<p><strong className="hl">Special Qualities:</strong> An unknown gains the following.</p>
<blockquote>
<p><strong>Assume Likeness (Su):</strong> As a standard action while using hallucinatory camouflage, an unknown is able to disguise itself as a specific creature known to the target of its victimize ability. If the victimized creature succeeds at a Will save (at the same DC as in psyche erosion) it negates this effect, and the unknown can't use this ability again for 24 hours or until it changes victims, whichever comes first. Otherwise, the unknown's features and mannerisms change to match the creature known to its victim, granting it a +20 circumstance bonus on <Link to="/skill/disguise">Disguise</Link> checks to impersonate this creature. Unlike hallucinatory camouflage, this ability works against the target of victimize. This is a mind-affecting illusion (glamer) effect.</p>
<p><strong>Dream Movements (Su):</strong> To the unknown, all worlds are tinted with the shades of nightmares from the Dimension of Dreams, allowing them to defy the laws of physics as they move as if in a dream. An unknown gains an insight bonus to AC equal to its Charisma bonus. It can travel as if by <Link to="/spell/dimension_door">dimension door</Link> as a move action at will, but only to enter or leave an area within line of sight of the target of its victimize ability. The victimized creature and the intended destination must both be within long range of the unknown.</p>
<p><strong>Hallucinatory Camouflage (Su):</strong> As long as an unknown is targeting a creature with its victimize ability, it hides its appearance behind a veil of illusions, appearing to be an unremarkable member of the victimized creature's race to everyone except the target of victimize. A successful Will save (at the same DC as psyche erosion) allows a creature that interacts with the illusion to disbelieve the effect. This is a mind-affecting illusion (glamer) effect.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> +2 Dexterity, +2 Constitution, +2 Intelligence, +4 Charisma.</p>
</>};
const _vahana = {title: "Vahana", jsx: <><div style={{clear:"both"}}></div><Header full><span>Vahana</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 262</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Vahanas are steeds of legend, created by the gods. Deities gift vahanas to faithful servants to help them accomplish great deeds or as rewards for the same. Makaras, elephants with crocodile features, are one of the common types of vahana.</p>
<p>Vahana is an acquired template that can be added to any living creature of the <Link to="/type/animal">animal</Link> type. A vahana retains the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Within one step of the vahana's creator deity.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/magical_beast">magical beast</Link>, and it gains darkvision 60 feet. Don't recalculate HD, BAB, or saves.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by 3.</p>
<p><strong className="hl">Defensive Abilities:</strong> A vahana gains acid, cold, electricity, and fire <Link to="/umr/resistance">resistance</Link> 10; DR 10/magic, and spell resistance equal to CR + 11 (maximum 35).</p>
<p><strong className="hl">Speed:</strong> +30 feet for all movement types (up to double the creature's base movement speed).</p>
<p><strong className="hl">Special Abilities:</strong> A vahana gains the following.</p>
<blockquote>
<p><strong>Blended Beast (Su):</strong> A vahana's creator blends animal features to strengthen the vahana. Each vahana gains one additional natural attack, with damage typical for its size (usually a <Link to="/umr/bite_attack">bite attack</Link>). A vahana gains one additional form of movement speed at its new base speed, usually a swim speed or a fly speed. If it gains a swim speed, it gains the <Link to="/subtype/aquatic">aquatic</Link> subtype, the <Link to="/umr/amphibious">amphibious</Link> special quality, and the ability to grant its rider constant <Link to="/umr/water_breathing">water breathing</Link>. If it gains a fly speed, both the vahana and its rider benefit from constant <Link to="/spell/feather_fall">feather fall</Link> (in the rider's case, this includes when she falls off the vahana). Additionally, all vahana gain the devotion special ability of an <Link to="/sidekick/animal_companion">animal companion</Link>.</p>
<p><strong>Rider Bond (Su):</strong> A vahana's bond with its rider allows them to communicate telepathically as long as they're on the same plane. As a free action that the rider can take even when it is not her turn, a vahana's rider can choose to redirect damage dealt to the vahana to instead affect the rider.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Increase from the base creature as follows: Str +4, Dex +4, Con +4, Int +10, Wis +2, Cha +2.</p>
</>};
const _vampire = {hasJL:true,title: "Vampire", jsx: <><div className="jumpList" id="template-vampire-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-vampire-vampire-spawn">Vampire Spawn</InnerLink></li><li><InnerLink toTop to="template-vampire-variant-vampiric-abilities">Variant Vampiric Abilities</InnerLink></li><li><InnerLink toTop to="template-vampire-other-vampire-templates">Other Vampire Templates</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Vampire</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 270</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<h3 id="template-vampire-creating-a-vampire">Creating a Vampire</h3>
<p>"Vampire" is an acquired template that can be added to any living creature with 5 or more Hit Dice (referred to hereafter as the base creature). Most vampires were once <Link to="/type/humanoid">humanoids</Link>, <Link to="/type/fey">fey</Link>, or <Link to="/type/monstrous_humanoid">monstrous humanoids</Link>. A vampire uses the base creature's stats and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature + 2.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link> (<Link to="/subtype/augmented">augmented</Link>). Do not recalculate class Hit Dice, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> A vampire gains darkvision 60 ft.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by +6.</p>
<p><strong className="hl">Hit Dice:</strong> Change all racial Hit Dice to d8s. Class Hit Dice are unaffected. As undead, vampires use their Charisma modifier to determine bonus hit points (instead of Constitution).</p>
<p><strong className="hl">Defensive Abilities:</strong> A vampire gains <Link to="/umr/channel_resistance">channel resistance</Link> +4, DR 10/magic and silver, and <Link to="/umr/resistance">resistance</Link> to cold 10 and electricity 10, in addition to all of the defensive abilities granted by the undead type. A vampire also gains <Link to="/umr/fast_healing">fast healing</Link> 5. If reduced to 0 hit points in combat, a vampire assumes <em>gaseous form</em> (see below) and attempts to escape. It must reach its coffin home within 2 hours or be utterly destroyed. (It can normally travel up to 9 miles in 2 hours.) Additional damage dealt to a vampire forced into <em>gaseous form</em> has no effect. Once at rest, the vampire is <Link to="/misc/helpless">helpless</Link>. It regains 1 hit point after 1 hour, then is no longer helpless and resumes healing at the rate of 5 hit points per round.</p>
<p><strong className="hl">Weaknesses:</strong> Vampires cannot tolerate the strong odor of garlic and will not enter an area laced with it. Similarly, they recoil from mirrors or strongly presented holy symbols. These things don't harm the vampire - they merely keep it at bay. A recoiling vampire must stay at least 5 feet away from the mirror or holy symbol and cannot touch or make melee attacks against that creature. Holding a vampire at bay takes a standard action. After 1 round, a vampire can overcome its revulsion of the object and function normally each round it makes a DC 25 Will save.</p>
<p>Vampires cannot enter a private home or dwelling unless invited in by someone with the authority to do so.</p>
<p>Reducing a vampire's hit points to 0 or lower incapacitates it but doesn't always destroy it (see fast healing). However, certain attacks can slay vampires. Exposing any vampire to direct sunlight <Link to="/misc/stagger">staggers</Link> it on the first round of exposure and destroys it utterly on the second consecutive round of exposure if it does not escape. Each round of immersion in running water inflicts damage on a vampire equal to one-third of its maximum hit points - a vampire reduced to 0 hit points in this manner is destroyed. Driving a wooden stake through a helpless vampire's heart instantly slays it (this is a full-round action). However, it returns to life if the stake is removed, unless the head is also severed and anointed with holy water.</p>
<p><strong className="hl">Speed:</strong> Same as the base creature. If the base creature has a swim speed, the vampire is not unduly harmed by running water.</p>
<p><strong className="hl">Melee:</strong> A vampire gains a <Link to="/umr/slam_attack">slam attack</Link> if the base creature didn't have one. Damage for the slam depends on the vampire's size. Its slam also causes energy drain (see below). Its natural weapons are treated as magic weapons for the purpose of overcoming damage reduction.</p>
<p><strong className="hl">Special Attacks:</strong> A vampire gains several special attacks. Save DCs are equal to 10 + 1/2 vampire's HD + vampire's Cha modifier unless otherwise noted.</p>
<blockquote>
<p><strong>Blood Drain (Su):</strong> A vampire can suck blood from a grappled opponent; if the vampire establishes or maintains a pin, it drains blood, dealing 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link>. The vampire heals 5 hit points or gains 5 <Link to="/rule/temporary_hit_points">temporary hit points</Link> for 1 hour (up to a maximum number of temporary hit points equal to its full normal hit points) each round it drains blood.</p>
<p><strong>Children of the Night (Su):</strong> Once per day, a vampire can call forth 1d6+1 <Link to="/monster/rat_swarm">rat swarms</Link>, 1d4+1 <Link to="/monster/bat_swarm">bat swarms</Link>, or 2d6 <Link to="/monster/wolves">wolves</Link> as a standard action. (If the base creature is not terrestrial, this power might summon other creatures of similar power.) These creatures arrive in 2d6 rounds and serve the vampire for up to 1 hour.</p>
<p><strong>Create Spawn (Su):</strong> A vampire can create spawn out of those it slays with blood drain or energy drain, provided that the slain creature is of the same creature type as the vampire's base creature type. The victim rises from death as a vampire in 1d4 days. This vampire is under the command of the vampire that created it, and remains enslaved until its master's destruction. A vampire may have enslaved spawn totaling no more than twice its own Hit Dice; any spawn it creates that would exceed this limit become free-willed undead. A vampire may free an enslaved spawn in order to enslave a new spawn, but once freed, a vampire or vampire spawn cannot be enslaved again.</p>
<p><strong>Dominate (Su):</strong> A vampire can crush a humanoid opponent's will as a standard action. Anyone the vampire targets must succeed on a Will save or fall instantly under the vampire's influence, as though by a <Link to="/spell/dominate_person">dominate person</Link> spell (caster level 12th). The ability has a range of 30 feet. At the GM's discretion, some vampires might be able to affect different creature types with this power.</p>
<p><strong>Energy Drain (Su):</strong> A creature hit by a vampire's slam (or other natural weapon) gains two <Link to="/rule/negative_levels">negative levels</Link>. This ability only triggers once per round, regardless of the number of attacks a vampire makes.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A vampire gains the following.</p>
<blockquote>
<p><strong>Change Shape (Su):</strong> A vampire can use <Link to="/umr/change_shape">change shape</Link> to assume the form of a <Link to="/monster/dire_bat">dire bat</Link> or wolf, as <Link to="/spell/beast_shape_ii">beast shape II</Link>.</p>
<p><strong>Gaseous Form (Su):</strong> As a standard action, a vampire can assume <Link to="/spell/gaseous_form">gaseous form</Link> at will (caster level 5th), but it can remain gaseous indefinitely and has a fly speed of 20 feet with perfect maneuverability.</p>
<p><strong>Shadowless (Ex):</strong> A vampire casts no shadows and shows no reflection in a mirror.</p>
<p><strong>Spider Climb (Ex):</strong> A vampire can climb sheer surfaces as though under the effects of a <Link to="/spell/spider_climb">spider climb</Link> spell.</p>
</blockquote>
<p><strong className="hl">Ability Scores</strong> Str +6, Dex +4, Int +2, Wis +2, Cha +4. As an undead creature, a vampire has no Constitution score.</p>
<p><strong className="hl">Skills</strong> Vampires gain a +8 racial bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link> checks.</p>
<p><strong className="hl">Feats</strong> Vampires gain <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, and <Link to="/feat/toughness">Toughness</Link> as bonus feats.</p>
<h3 id="template-vampire-vampire-spawn" data-hash-target>Vampire Spawn</h3>
<p>A vampire can elect to create a vampire spawn instead of a full-fledged vampire when she uses her create spawn ability on a humanoid creature only. This decision must be made as a free action whenever a vampire slays an appropriate creature by using blood drain or energy drain. A vampire spawn's statistics are identical to those of a <Link to="/monster/wight">wight</Link>, save for the following changes.</p>
<ul>
<li>It gains the blood drain and dominate vampire special attacks.</li>
<li>It gains channel resistance +2, DR 5/silver, resist cold and electricity 10, fast healing 2, and the vampire qualities listed above (gaseous form, shadowless, and spider climb).</li>
<li>It does not gain the Create Spawn ability.</li>
<li>A vampire spawn gains all of the standard vampire weaknesses.</li>
<li>A vampire spawn is CR 4.</li>
</ul>
<p>Alternately, one can use the <Link to="/template/vampire_spawn">Vampire Spawn</Link> template.</p>
<h3 id="template-vampire-variant-vampiric-abilities" data-hash-target>Variant Vampiric Abilities</h3>
<p><strong>Sources</strong> <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 50</Link><br/>Just as various breeds of vampires exist, so too does diversity exist within regional or otherwise related groups of such undead.</p>
<p><strong>Ancient Youth (Su):</strong> A vampire with this ability transformed into one of the undead at a very young age, and has been trapped within an adolescent body for an existence possibly measuring in centuries. Vampires with this ability are size Small and gain a +4 bonus on all Bluff checks. (+0 CR)</p>
<p><strong>Mastermind (Su):</strong> Vampires with this ability can have a number of enslaved spawn totaling four times its total Hit Dice. In addition, the vampire chooses one of the following three abilities: clairaudience, clairvoyance, or telepathy. Depending on the ability chosen, the vampire can hear what its spawn hears, see what it sees, or communicate telepathically with it. The vampire may exercise or end its use of this ability as a standard action and maintain its connection to its spawn for as long as it wishes. A vampire may only use this ability with one spawn at a time. The vampire and vampire spawn must be on the same plane for this ability to function. While using this ability, the vampire enters a catatonic state similar to its daily rest and is treated as helpless, though it is alerted to any jarring noises, the presence of any visible creature within 5 feet, or any damage that befalls its body. (CR +0)</p>
<p><strong>Noble Dead (Su):</strong> A vampire with this ability possesses an ancient and legendary bloodline. He gains a +2 bonus on all <Link to="/skill/diplomacy">Diplomacy</Link> checks, which increases to +4 if being utilized against another undead creature. In addition, he gains channel resistance +6, and the DC of his dominate ability increases by +2. (CR +0)</p>
<p><strong>Sunlight Resistance (Su):</strong> This ability provides a vampire a measure of resistance against sunlight. On the second and all later rounds of exposure to direct sunlight, the vampire takes damage equal to one-third of its maximum hit points and is destroyed if this brings it to 0 hit points. The vampire is staggered on any round it is exposed to direct sunlight. (CR +0)</p>
<p><strong>Swarm Form (Su):</strong> As a standard action, a vampire with this ability can change into a bat swarm, <Link to="/monster/centipede_swarm">centipede swarm</Link>, rat swarm, or <Link to="/monster/spider_swarm">spider swarm</Link>. The swarm has a number of hit points equal to the vampire, and any damage done to the swarm affects the vampire's hit point total. While in swarm form, a vampire cannot use any of its natural or special attacks, although it gains the movement, natural weapons, and extraordinary special abilities of the swarm into which it has transformed. The vampire also retains all of its usual special qualities. While in swarm form the vampire is still considered to be an undead creature with its total number of Hit Dice. A vampire can remain in swarm form until it assumes another form or retakes it original form (a standard action), or until the next sunrise. (CR +0)</p>
<h3 id="template-vampire-other-vampire-templates" data-hash-target>Other Vampire Templates</h3>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 236</Link><br/>Game statistics for vampires are created by using vampire templates. Each template creates a different kind of vampire. Other types of vampire exist, some of them arising from rare or even unique circumstances, but the following are the most notable types.</p>
<p><strong>Jiang-Shi:</strong> Created when a restless spirit does not leave its corpse at the time of death, a <Link to="/template/jiang_shi">jiang-shi</Link> more closely resembles a rotting corpse than other vampires do. Instead of feeding on blood, jiang-shi siphon chi from their victims' breath. Marked with a rune-inscribed parchment affixed to its head, a jiang-shi has different drawbacks than moroi and nosferatu.</p>
<p><strong>Moroi:</strong> The standard vampire template creates what most people would consider a "common" vampire. They sometimes call themselves "moroi" to distinguish them from other kinds of vampires, which are inferior in their estimation.</p>
<p><strong>Nosferatu:</strong> Said by some to be the progenitors of all vampires, <Link to="/template/nosferatu">nosferatu</Link> are immortal but lack the eternal youthful beauty of the moroi. Resentful of their more attractive offshoot race, nosferatu tend to be hermits, keeping their hideous, withered visages out of mortal sight to avoid suspicion. Nosferatu cannot create others of their kind, thus their numbers are dwindling.</p>
</>};
const _vampire_minion_addle_minded = {title: "Vampire Minion, Addle-Minded", jsx: <><div style={{clear:"both"}}></div><Header full><span>Addle Minded</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 236</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p><Link to="/template/vampire">Vampires</Link> can change mortals that they frequently come into contact with. This and <Link to="/template/repeatedly_drained">Repeatedly Drained</Link> are indicative of such phenomena, and are available to creatures associated with or victims of vampires.</p>
<p>A creature that remains dominated by vampires for long stretches begins to lose touch with his sense of identity. The creature no longer knows exactly what his own desires are anymore and he becomes easily confused. Should that mortal ever be the target of a mind-affecting spell, that mortal is just as likely to babble madly to himself as he is to lash out and strike anyone nearby. An addle-minded creature's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Saves</strong> -2 penalty on all Will saves. <strong>Special Qualities</strong> Gains the <em>addled</em> defensive ability.</p>
<blockquote>
<p><strong>Addled (Su):</strong> Whenever the addle-minded creature fails a saving throw against a mind-affecting effect (other than <Link to="/spell/dominate_person">dominate person</Link>, <Link to="/spell/dominate_monster">dominate monster</Link>, or any other spell or spell-like ability with "dominate" in its name), it becomes confused as the <Link to="/spell/confusion">confusion</Link> spell, and it must roll on that spell's table to determine its behavior. Instead of acting normally on a roll of 01-25, the creature is instead normally affected by the spell or effect that round.</p>
</blockquote>
</>};
const _vampire_minion_repeatedly_drained = {title: "Vampire Minion, Repeatedly Drained", jsx: <><div style={{clear:"both"}}></div><Header full><span>Repeatedly Drained</span><span>CR -1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 236</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p><Link to="/template/vampire">Vampires</Link> can change mortals that they frequently come into contact with. This and <Link to="/template/addle_minded">Addle-Minded</Link> are indicative of such phenomena, and are available to creatures associated with or victims of vampires.</p>
<p>A creature from which a vampire routinely drinks blood usually adapts to the rapid and repeated blood loss, but a thirsty vampire can push too far, physically weakening her prey. The victim's skin turns pale and her eyes become listless; others describe the victim as "wasting away" or "a walking corpse." Few mortals realize that these descriptions are accurate, and the victim is, in fact, courting death.</p>
<p><strong className="hl">Quick Rules:</strong> -2 on all rolls based on Con or Cha and to the DCs of all special abilities based on Con or Cha, -2 hp/HD, +2 on saving throws vs. energy drain.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Defensive Abilities</strong> resist drain special ability; <strong>Ability Scores</strong> -4 Con, -4 Cha.</p>
<blockquote>
<p><strong>Resist Drain (Ex):</strong> After having its blood sucked out over and over again by a vampire, the repeatedly drained creature becomes used to the effects and builds a natural tolerance for energy drain. The repeatedly drained creature gains a +4 bonus on saving throws against energy drain attacks and the saving throw to overcome <Link to="/rule/negative_level">negative levels</Link>. It suffers no penalties from negative levels, though it still dies if its negative levels equal or exceed its Hit Dice.</p>
</blockquote>
</>};
const _vampire_spawn = {title: "Vampire Spawn", jsx: <><div style={{clear:"both"}}></div><Header full><span>Vampire Spawn</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 244</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The following template can be used to create unique vampire spawn with class levels.</p>
<p>"Vampire spawn" is an acquired template that can be added to any living creature with 4 or more Hit Dice (referred to hereafter as the base creature). A vampire spawn uses the base creature's stats and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature + 1.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. Do not recalculate class Hit Dice, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> A vampire spawn gains darkvision to 60 feet.</p>
<p><strong className="hl">AC:</strong> Natural armor increases to +4, unless the base creature's natural armor is already +4 or higher.</p>
<p><strong className="hl">Hit Dice:</strong> Change all racial Hit Dice to d8s. Class Hit Dice are unaffected. As undead, vampire spawn use their Cha modifier to determine bonus hit points (instead of Con).</p>
<p><strong className="hl">Defensive Abilities:</strong> A vampire spawn gains <Link to="/umr/channel_resistance">channel resistance</Link> +2, DR 5/silver, <Link to="/umr/resistance">resistance</Link> 10 against cold and electricity, and <Link to="/umr/fast_healing">fast healing</Link> 2.</p>
<p><strong className="hl">Weaknesses:</strong> A vampire spawn has the same weaknesses of the vampire that created it.</p>
<blockquote>
<p><strong>Resurrection Vulnerability (Su):</strong> A <Link to="/spell/raise_dead">raise dead</Link> or similar spell cast on a vampire spawn destroys it (Will negates). Using the spell in this way does not require a material component.</p>
</blockquote>
<p><strong className="hl">Melee:</strong> A vampire spawn gains a <Link to="/umr/slam_attack">slam attack</Link> if the base creature didn't have one. Damage for the slam depends on the vampire spawn's size.</p>
<p><strong className="hl">Special Attacks:</strong> A vampire spawn gains a vampire's blood drain and dominate special attacks. The vampire who created the spawn can influence a spawn's dominated creature as if she had dominated it herself.</p>
<p><strong>Energy Drain (Su):</strong> A creature hit by a vampire spawn's slam (or other natural weapon) gains 1 <Link to="/rule/negative_level">negative level</Link>. This ability only triggers only once per round.</p>
<p><strong className="hl">Special Qualities:</strong> A vampire spawn gains the gaseous form, shadowless, and spider climb abilities of a vampire.</p>
<p><strong className="hl">Ability Scores:</strong> Cha +2.</p>
<p><strong className="hl">Skills:</strong> Spawn gain a +8 racial bonus on <Link to="/skill/acrobatics">Acrobatics</Link> and <Link to="/skill/stealth">Stealth</Link> checks.</p>
<p><strong className="hl">Feats:</strong> Spawn gain <Link to="/feat/skill_focus">Skill Focus</Link> (<Link to="/skill/perception">Perception</Link>) as a bonus feat.</p>
</>};
const _vampiric_creature = {title: "Vampiric Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Vampiric Creature</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 250</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Vampiric creatures have been transformed into vampires, and they don't have to be humanoids. At your discretion, a vampiric creature might have the create spawn ability and could create spawn of its own creature type in addition to humanoid spawn. Non-humanoid vampiric creatures likely have unusual "coffins" that befit their nature.</p>
<p><strong className="hl">Quick Rules:</strong> Counts as <Link to="/type/undead">undead</Link>; darkvision 60 ft.; +1 to AC; +1 on rolls based on Str, Dex, and Cha; undead immunities; <Link to="/umr/fast_healing">fast healing</Link> 1 (this includes the ability to escape to its coffin in <Link to="/spell/gaseous_form">gaseous form</Link> at 0 hp); vampire weaknesses; <Link to="/umr/slam_attack">slam attack</Link> that deals 1d6 points of damage (for Medium creatures) plus energy drain; blood drain; energy drain (1 level, DC = 10 + 1/2 HD + Charisma modifier); gaseous form, shadowless, spider climb.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Type</strong> change to undead; <strong>Senses</strong> darkvision 60 ft.; <strong>AC</strong> natural armor bonus increases by 1; <strong>Defensive Abilities</strong> fast healing 1 (this includes the ability to escape to its coffin in gaseous form at 0 hp); <strong>Weaknesses</strong> vampire weaknesses; <strong>Melee</strong> slam attack that deals 1d6 points of damage (for Medium creatures) plus energy drain; <strong>Special Attacks</strong> blood drain, <Link to="/umr/energy_drain">energy drain</Link> (1 level, DC = 10 + 1/2 HD + Charisma modifier); <strong>Special Qualities</strong> gaseous form, shadowless, spider climb; <strong>Ability Scores</strong> +2 Str, +2 Dex, +2 Cha.</p>
</>};
const _vetala = {title: "Vetala", jsx: <><div style={{clear:"both"}}></div><Header full><span>Vetala</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/inner_sea_bestiary">Inner Sea Bestiary pg. 54</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>While most of the Inner Sea's <Link to="/template/vampire">vampires</Link> lust for living blood, the mysterious vetalas hunger for a more intangible force: the energy that infuses mortal minds. Referred to as consciousness or psyche by some, the academics of Vudra - from where most vetalas hail - call this fundamental vital force prana. Regardless of their desire's name, vetalas prey upon those who show creative promise, possess potent force of will, or seem destined for greatness, draining the most brilliant sources of mortal light to fuel their own unnatural embers. Their dark mastery of life force allows vetalas to possess corpses or even overwhelm the minds of living creatures. With these stolen masks and the resources of abducted lives, they work their foul wills.</p>
<p>Vetalas are said to be the spirits of children "born evil," who never received burial rites upon their deaths. Sometimes one of these evil spirits takes hold of a corpse - not necessarily its own - which becomes its anchor to the mortal world. Such young souls seek out experiences and life energy, becoming as wicked as any other vampire as they endlessly indulge their profane, deathless desires.</p>
<p>"Vetala" is an acquired template that can be added to any living creature with 5 or more Hit Dice (referred to hereafter as the base creature). Most vetalas were once <Link to="/type/humanoid">humanoids</Link>, <Link to="/type/fey">fey</Link>, or <Link to="/type/monstrous_humanoid">monstrous humanoids</Link>. A vetala uses the base creature's stats and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature + 2.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link> (<Link to="/subtype/augmented">augmented</Link>). Do not recalculate class Hit Dice, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> A vetala gains darkvision 60 ft.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by +4.</p>
<p><strong className="hl">Hit Dice:</strong> Change all racial Hit Dice to d8s. Class Hit Dice are unaffected. As undead, vetalas use their Charisma modifiers to determine bonus hit points (instead of Constitution).</p>
<p><strong className="hl">Defensive Abilities:</strong> A vetala gains <Link to="/umr/channel_resistance">channel resistance</Link> +4, DR 10/magic and good, and <Link to="/umr/resistance">resistance</Link> to fire 10 and electricity 10, in addition to all of the defensive abilities granted by the undead type. A vetala also gains <Link to="/umr/fast_healing">fast healing</Link> 5. If reduced to 0 hit points in combat, a vetala is <Link to="/misc/helpless">helpless</Link> and its fast healing ceases to function for 1 hour. Additional damage dealt to the vetala has no effect. Its body might be subjected to any method of dismemberment or desecration, but after 1 hour - regardless of the state of its remains - it regains 1 hit point, is no longer helpless, and resumes healing at the rate of 5 hit points per round.</p>
<p><strong className="hl">Weaknesses:</strong> Vetalas cannot tolerate the sound of prayers or religious mantras recited by those truly faithful to a good deity. Any character with a good-aligned deity can force a vetala to recoil by dramatically praying as a standard action. Praying doesn't harm a vetala; it merely keeps the creature at bay. A recoiling vetala must stay at least 5 feet away from a praying character and cannot touch or make melee attacks against it. After 1 round, a vetala can fight past its revulsion and function normally each round it succeeds at a DC 25 Will save. The prayers of those who worship non-good deities or worship no deity have no effect on a vetala.</p>
<p>Reducing a vetala's hit points to 0 or lower incapacitates it but doesn't always destroy it (see fast healing). However, consecrating the vetala's remains and burying the body destroys it forever. A vetala's body is considered consecrated if it is doused with a vial of <Link to="/eq-weapon/holy_water">holy water</Link> and buried, if it is buried in earth affected by the spell <Link to="/spell/consecrate">consecrate</Link>, or if <Link to="/spell/bless">bless</Link>, <Link to="/spell/prayer">prayer</Link>, or a similar divine spell is cast upon it as it is being buried. Digging up a vetala's corpse or profaning the area where it's buried does not restore a buried vetala.</p>
<p><strong className="hl">Speed:</strong> Same as the base creature. A vetala also gains a climb speed equal to its base land speed.</p>
<p><strong className="hl">Melee:</strong> A vetala gains two <Link to="/umr/claw_attack">claw attacks</Link> if the base creature didn't have them. A vetala's claw attacks do damage as a creature once size category larger (for example, a Medium vetala's claw attack deals 1d6 points of damage). A vetala's natural weapons are treated as magic weapons for the purpose of overcoming damage reduction.</p>
<p><strong className="hl">Special Attacks:</strong> A vetala gains several special attacks. Save DCs are equal to 10 + 1/2 the vetala's Hit Dice + the vetala's Cha modifier unless otherwise noted.</p>
<blockquote>
<p><strong>Drain Prana (Su):</strong> A vetala can drain the mental vitality of a <Link to="/rule/grapple">grappled</Link> opponent. If the vetala establishes or maintains a pin, it drains this energy, dealing 1d4 points of <Link to="/rule/charisma_damage">Charisma damage</Link>. Additionally, the victim is affected by the spell <Link to="/spell/modify_memory">modify memory</Link>, as if the vetala had spent 5 minutes concentrating. The vetala gains perfect knowledge of any memory it chooses to eliminate using this ability. Vetalas often use this ability to prevent victims from remembering they've been attacked.</p>
<p><strong>Malevolence (Su):</strong> As a full-round action, a vetala can attempt to take control of a helpless living creature's body, as the spell <Link to="/spell/magic_jar">magic jar</Link> (caster level 10th or the vetala's Hit Dice, whichever is higher), except that it does not require a receptacle. The target can resist the attack with a successful Will save. A creature that successfully saves is immune to that same vetala's possession for 24 hours. If a creature fails its save, its consciousness and control of its body are subsumed as the vetala takes command of its body. The vetala can remain in control for a number of hours equal to its Charisma modifier or until it decides to end the possession. Whenever the possession ends or the host body is killed, the vetala's consciousness instantly returns to its body, regardless of distance, so long as it remains on the same plane. If the vetala's body has been destroyed or moved to another plane, the vetala's consciousness is destroyed when the possession ends. While possessing another creature, the vetala's body is empty and vulnerable, though it is instantly aware if its body is disturbed or takes damage.</p>
<p><strong>Paralysis (Ex):</strong> Any creature struck by a vetala's claws must make a successful Will save or be <Link to="/rule/paralyzed">paralyzed</Link> for 1d4+1 rounds. <Link to="/race/elves">Elves</Link> are immune to this effect.</p>
<p><strong>Possess Corpse (Su):</strong> As a full-round action, a vetala can possess a Large or smaller corpse just as it can a living body. The vetala's consciousness leaves its body and takes control of the corpse, animating it as either a <Link to="/template/skeleton">skeleton</Link> or <Link to="/template/zombie">zombie</Link> (depending on its state of decay). The vetala can remain in control of a corpse indefinitely, and can communicate through the body, but cannot use any of its other special abilities. This ability otherwise functions just as malevolence.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +4, Dex +2, Int +4, Wis +2, Cha +6. As an undead creature, a vetala has no Constitution score.</p>
<p><strong className="hl">Feats:</strong> Vetalas gain <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, and <Link to="/feat/skill_focus">Skill Focus</Link> (Disguise) as bonus feats.</p>
<p><strong className="hl">Skills:</strong> Vetalas gain a +8 racial bonus on <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link> checks.</p>
</>};
const _waxwork = {hasJL:true,title: "Waxwork", jsx: <><div className="jumpList" id="template-waxwork-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-waxwork-variant-waxworks">Variant Waxworks</InnerLink></li><li><InnerLink toTop to="template-waxwork-construction">Construction</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Waxwork</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 246</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The practice of making sculptures from wax dates back to the earliest humanoid civilizations. Only the medium of wax can so closely duplicate the transparency of skin. Often, creators use powerful magic to house an animating spirit within the wax model. A created waxwork creature obeys the commands of its creator. Rarely, a wax sculpture animates of it own accord - the result of nearby magic suffusing the wax or a lost spirit in search of a corporeal form. Such waxwork creatures are uncontrolled.</p>
<p>A waxwork creature is the same size as the creature it duplicates, but weighs only half as much.</p>
<p>"Waxwork" is an inherited template that can be added to any Tiny or larger corporeal creature (other than a construct or ooze), referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> Depends on Hit Dice, as follows.</p>
<ScrollContainer id="template-waxwork--table-0"><table>
<thead>
<tr>
<th>Waxwork HD</th>
<th>CR</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>2-3</td>
<td>3</td>
</tr>
<tr>
<td>4-5</td>
<td>4</td>
</tr>
<tr>
<td>6-7</td>
<td>5</td>
</tr>
<tr>
<td>8-10</td>
<td>6</td>
</tr>
<tr>
<td>11-13</td>
<td>7</td>
</tr>
<tr>
<td>14-16</td>
<td>8</td>
</tr>
<tr>
<td>17-19</td>
<td>9</td>
</tr>
<tr>
<td>20</td>
<td>10</td>
</tr>
</tbody></table></ScrollContainer>
<p>If the creature is larger or smaller than Medium, adjust the CR according to the table below.</p>
<ScrollContainer id="template-waxwork--table-1"><table>
<thead>
<tr>
<th>Waxwork Size</th>
<th>CR</th>
<th>Natural Armor Bonus</th>
<th>Bonus Hit points</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>-2</td>
<td>+0</td>
<td>-</td>
</tr>
<tr>
<td>Small</td>
<td>-1</td>
<td>+1</td>
<td>+10</td>
</tr>
<tr>
<td>Medium</td>
<td>+0</td>
<td>+2</td>
<td>+20</td>
</tr>
<tr>
<td>Large</td>
<td>+1</td>
<td>+3</td>
<td>+30</td>
</tr>
<tr>
<td>Huge</td>
<td>+2</td>
<td>+4</td>
<td>+40</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+3</td>
<td>+7</td>
<td>+60</td>
</tr>
<tr>
<td>Colossal</td>
<td>+4</td>
<td>+11</td>
<td>+80</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/construct">construct</Link>. It doesn't retain any subtypes, nor does it gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">AC:</strong> The waxwork creature's natural armor bonus is based on its size.</p>
<p><strong className="hl">Hit Dice:</strong> Remove HD gained from class levels and change racial HD to d10s. Creatures without racial HD are treated as if they have 1 racial HD. As constructs, waxwork creatures gain additional hit points as noted in the following table.</p>
<p><strong className="hl">Saves:</strong> The creature's base save bonuses are Fortitude +1/3 HD, Reflex +1/3 HD, and Will +1/3 HD.</p>
<p><strong className="hl">Defensive Abilities:</strong> A waxwork creature loses the base creature's defensive abilities. It gains waxen regeneration 5 (fire) and <Link to="/umr/immunity">immunity</Link> to cold. If it has 11 or more HD, the waxen regeneration increases to 10 (fire). It also gains all of the standard immunities and traits possessed by constructs.</p>
<blockquote>
<p><strong>Waxen Regeneration (Su):</strong> This ability functions like <Link to="/umr/regeneration">regeneration</Link>, except the waxwork creature has it without a Constitution score. A waxwork creature reduced to 0 hit points is <Link to="/misc/staggered">staggered</Link> instead of destroyed while its waxen regeneration is active; it ignores all damage dealt to it that would reduce its hit points below 0. Fire damage causes the waxwork creature's regeneration to stop functioning on the round following the attack.</p>
</blockquote>
<p><strong className="hl">Weaknesses:</strong> A waxwork creature is <Link to="/umr/vulnerable">vulnerable</Link> to fire.</p>
<p><strong className="hl">Speed:</strong> A waxwork creature retains movement types, except as follows: It loses burrow and magical flight speeds. Winged waxwork creatures can fly, but maneuverability drops to clumsy. A waxwork creature floats and must succeed at a DC 20 <Link to="/skill/swim">Swim</Link> check each round to stay underwater.</p>
<p><strong className="hl">Attacks:</strong> A waxwork creature retains all the natural weapons and weapon proficiencies of the base creature. It also gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the waxwork creature's size, but as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Special Attacks:</strong> A waxwork creature retains none of the base creature's special attacks.</p>
<p><strong className="hl">Abilities:</strong> A waxwork creature has no Constitution or Intelligence score, and its Wisdom and Charisma scores change to 10.</p>
<p><strong className="hl">BAB:</strong> A waxwork creature's base attack bonus is equal to its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> A waxwork creature loses all of the base creature's skills and gains none of its own.</p>
<p><strong className="hl">Feats:</strong> A waxwork creature loses all of the base creature's feats and gains <Link to="/feat/improved_initiative">Improved Initiative</Link> as a bonus feat.</p>
<p><strong className="hl">Special Qualities:</strong> A waxwork creature loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. A waxwork creature gains the <Link to="/umr/freeze">freeze</Link> universal monster ability to appear as a wax sculpture.</p>
<h3 id="template-waxwork-variant-waxworks" data-hash-target>Variant Waxworks</h3>
<p>The following variants alter the waxwork creature template.</p>
<h4 id="template-waxwork-sentient-waxwork">Sentient Waxwork</h4>
<p>Rarely, waxworks shaped like intelligent creatures develop minds of their own and can gain levels in character classes.</p>
<p><strong className="hl">CR:</strong> Same as a normal waxwork creature's CR.</p>
<p><strong className="hl">Abilities:</strong> A sentient waxwork creature has an Intelligence score of 3d6.</p>
<p><strong className="hl">Skills:</strong> A sentient waxwork creature gains skill points based on its Hit Dice and Intelligence. <Link to="/skill/disguise">Disguise</Link> and <Link to="/skill/stealth">Stealth</Link> are class skills for it, but it has no other class skills. If it was crafted to resemble a specific individual, it also gains a +10 racial bonus on Disguise checks to impersonate that individual.</p>
<p><strong className="hl">Feats:</strong> A sentient waxwork gains retroactive <Link to="/rule/step_6_skills_and_feats">feats</Link> based on its Hit Dice.</p>
<p><strong className="hl">Languages:</strong> A sentient waxwork creature speaks Common (or the language of the sculptor or animating spirit).</p>
<h4 id="template-waxwork-waxwork-candle">Waxwork Candle</h4>
<p>One or more small flames burn on wicks emerging from the waxwork creature's body, often its head or hands. Though real, these flames don't consume the waxwork creature's body.</p>
<p><strong className="hl">CR:</strong> Normal waxwork creature's CR + 1.</p>
<p><strong className="hl">Melee Attacks:</strong> The waxwork creature's slam attack, or one natural attack it has, gains the <Link to="/umr/burn">burn</Link> universal monster ability. The additional fire damage is equal to the waxwork creature's slam damage die. The waxwork creature gains a +2 racial bonus to the save DC.</p>
<p><strong className="hl">Special Qualities:</strong> A waxwork candle creature gains illumination.</p>
<blockquote>
<p><strong>Illumination (Su):</strong> A waxwork candle creature's flames create normal light within the creature's reach and increases the light level by one step within twice that distance (minimum 5 feet). A waxwork candle creature is immune to its own fire, but not other flames (including those ignited by its own fire). The waxwork candle creature's flames can be extinguished as normal flames. It loses the burn ability when the wicks are unlit, but can magically reignite the flames as a move action.</p>
</blockquote>
<p><strong className="hl">Construction:</strong> Add <Link to="/spell/produce_flame">produce flame</Link> as a spell requirement. Add 1,000 gp to the price (and 500 gp to the cost).</p>
<h3 id="template-waxwork-construction" data-hash-target>Construction</h3>
<p><em>Waxwork Creature;</em> <strong>CL</strong> varies (equal to the waxwork creature's HD); <strong>Price</strong> 1,000 gp per HD plus cost of wax</p>
<p><strong>Requirements</strong> <Link to="/feat/craft_construct">Craft Construct</Link>, <Link to="/spell/animate_objects">animate objects</Link>, <Link to="/spell/make_whole">make whole</Link>; <strong>Skill</strong> <Link to="/skill/craft">Craft</Link> (sculpture); <strong>Cost</strong> 500 gp per HD plus cost of wax</p>
</>};
const _winter_fey = {title: "Winter Fey", jsx: <><div style={{clear:"both"}}></div><Header full><span>Winter Fey</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_68_the_shackled_hut">Pathfinder #68: The Shackled Hut pg. 91</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>"Winter fey" is an inherited template that can be added to any <Link to="/type/fey">fey</Link> creature without the fire subtype, referred to hereafter as the base creature. A winter fey uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> As base creature +1.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The base creature's type remains fey, but it gains the <Link to="/subtype/cold">cold</Link> subtype.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by +2.</p>
<p><strong className="hl">Defensive Abilities:</strong> A winter fey retains the base creature's defensive abilities, and gains the following ability.</p>
<blockquote>
<p><strong>Fast Healing (Su):</strong> A winter fey gains <Link to="/umr/fast_healing">fast healing</Link> 3 when in contact with ice or snow.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> A winter fey retains the base creature's normal movement and gains the following.</p>
<blockquote>
<p><strong>Ice Walking (Ex):</strong> A winter fey takes no penalty to speed or on <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/climb">Climb</Link>, or <Link to="/skill/stealth">Stealth</Link> checks in snowy or icy terrain or weather conditions and can walk across snow crusts or thin ice without breaking through.</p>
</blockquote>
<p><strong className="hl">Attacks:</strong> A winter fey retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. A creature with hands gains one <Link to="/umr/claw_attack">claw attack</Link> per hand; the winter fey can strike with each of its claw attacks at its full attack bonus. A claw attack deals damage as if the winter fey were one size category larger than its actual size. If the base creature already had claw attacks with its hands, use the winter fey claw damage only if it's better.</p>
<p><strong className="hl">Special Attacks:</strong> A winter fey retains the base creature's special attacks and gains the ones listed below.</p>
<blockquote>
<p><strong>Frigid Touch (Su):</strong> Once per day, a winter fey may attempt a touch attack against a foe; if successful, it deals 1d6 points of <Link to="/rule/dexterity_damage">Dexterity damage</Link> by freezing the blood in its victim's veins and numbing its victim to the bone.</p>
<p><strong>Frosty Grasp (Su):</strong> A winter fey's natural attacks, as well as any weapons it wields, deal an additional 1d6 points of cold damage.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> A winter fey's Strength and Constitution increase by +2.</p>
<p><strong className="hl">Skills:</strong> A winter fey gains a +4 racial bonus on <Link to="/skill/survival">Survival</Link> checks when in cold environments.</p>
</>};
const _winter_touched_fey = {title: "Winter-Touched Fey", jsx: <><div style={{clear:"both"}}></div><Header full><span>Winter-Touched Fey</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_67_the_snows_of_summer">Pathfinder #67: The Snows of Summer pg. 72</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Chief among the allies of <Link to="/monster/baba_yaga">Baba Yaga</Link> and the White Witches of Irrisen are the winter-touched, a special breed of fey immune to the harsh weather and low temperatures of the frozen north. Willingly pledging themselves to a wholly evil life, these creatures undergo a complex ritual called the Winter Rite, in which they accept a sliver of ice into their hearts that infuses their bodies with the same supernatural winter perpetuated by the White Witches of Irrisen. The resulting transformation gives the fey's skin a sickly bluish cast marked with spidery white veins like hoarfrost on glass. These evil fey can channel the power of winter into their attacks, slowing their victims with numbing cold. The winter-touched universally delight in spreading the influence of the White Witches, carrying out the wills of the witches who performed their Winter Rites. The winter-touched display a chilling loyalty that borders on fanaticism - a devotion all but guaranteed given the White Witches' ability to fatally pierce the hearts of those who fail them with the same slivers of ice the fey so willingly accepted.</p>
<h3 id="template-winter_touched_fey-winter-touched-fey">Winter-Touched Fey</h3>
<p>The winter-touched fey simple template can be applied to any creature of the <Link to="/type/fey">fey</Link> type. This template cannot be applied to a creature with the <Link to="/subtype/fire">fire</Link> subtype. A winter-touched fey's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> The creature's alignment changes to evil and it gains the <Link to="/subtype/cold">cold</Link> subtype; <strong>Special Attacks: Numbing Cold (Su)</strong> Any creature hit by a winter-touched creature's attacks (natural or weapon) must succeed at a Fortitude save or be <Link to="/misc/staggered">staggered</Link> for 1 round. The save DC is Constitution-based.</p>
</>};
const _wizard = {title: "Wizard", jsx: <><div style={{clear:"both"}}></div><Header full><span>Wizard</span><span>CR +1 +2 or +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 249</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>A wizard creature is skilled in the ways of arcane magic, and its spellcasting ability is unmatched. Beyond casting damaging spells, a wizard creature can call upon mighty forces to serve the will of the creature and its allies. Select a <Link to="/class/wizard">wizard</Link> creature's <Link to="/ability/arcane_schools">arcane school</Link> when the template is added. A wizard creature's CR increases by 2 if the creature has 7 or more HD, and it increases by 3 if the creature has 13 or more HD.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls based on Int; gains the arcane school abilities of its chosen school (using its HD - 2 as its wizard level to determine the effect and DC [minimum 1]); can cast a small number of wizard spells (see below) using its HD as its CL; can designate one item as its arcane bond and use that item to cast any one spell it knows once per day.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Special Attacks</strong> arcane bond, arcane school abilities (using its HD - 2 as its wizard level to determine the effect and DC [minimum 1]); <strong>Wizard Spells</strong> can cast a small number of wizard spells (see below) using its HD as its CL; <strong>Ability Scores</strong> +4 Intelligence.</p>
<h3 id="template-wizard-cleric-druid-and-wizard-spells-slots">Cleric, Druid, and Wizard Spells Slots</h3>
<ScrollContainer id="template-wizard--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4-6</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7-9</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10-12</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13-15</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16-18</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>19-21</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>22-24</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>25+</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _worm_that_walks = {hasJL:true,title: "Worm that Walks", jsx: <><div className="jumpList" id="template-worm_that_walks-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-worm_that_walks-variant-worms-that-walk">Variant Worms That Walk</InnerLink></li><li><InnerLink toTop to="template-worm_that_walks-army-ants">Army Ants</InnerLink></li><li><InnerLink toTop to="template-worm_that_walks-cockroaches">Cockroaches</InnerLink></li><li><InnerLink toTop to="template-worm_that_walks-locusts">Locusts</InnerLink></li><li><InnerLink toTop to="template-worm_that_walks-wasps">Wasps</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Worm that Walks</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 286</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>When a powerful spellcaster with a strong personality, a lust for life, and a remorselessly evil soul dies and is buried in a graveyard infused with eldritch magic, a strange phenomenon sometimes occurs. The flesh of the decaying body fats and instructs the very worms that gnaw, and these graveworms quicken not only on corruption but upon the spellcaster's memories and magical power. The spellcaster's very soul is consumed in this vile process, only to be split apart to inhabit each of the individual chewing worms in so many fragments. The result is a hideous hive mind of slithering life known as a worm that walks - a mass of worms that clings to the vague shape of the body that granted it this new existence, and can wield the powers and magic the spellcaster had in life. A worm that walks retains memories of its life as a spellcaster before its death, but is not undead - it is a hideous new form of undulant life.</p>
<p>"Worm that walks" is a template that can be added to any evil spellcasting creature. A worm that walks retains all the base creature's statistics and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +2.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The base creature's type changes to <Link to="/type/vermin">vermin</Link>. It gains the <Link to="/subtype/augmented">augmented</Link> subtype. Do not recalculate BAB, saves, or skill ranks. Worms that walk are intelligent and do not possess the standard mindless trait of most vermin. Note that while a worm that walks has the ability to discorperate into a swarm, and while its body is made up of countless wriggling worms, it does not itself gain the swarm subtype.</p>
<p><strong className="hl">Size:</strong> Although the worms that make up the worm that walks's body are Fine creatures, the worm that walks is treated as a creature the same size as the base creature.</p>
<p><strong className="hl">Senses:</strong> As the base creature, plus darkvision 60 feet and <Link to="/umr/blindsight">blindsight</Link> 30 feet.</p>
<p><strong className="hl">AC:</strong> The worm that walks loses any natural armor bonus the base creature may have had, but gains an insight bonus to its AC equal to its Wisdom bonus (minimum of +2).</p>
<p><strong className="hl">Hit Dice:</strong> Change the base creature's racial HD to d8s. All HD derived from class levels remain unchanged.</p>
<p><strong className="hl">Defensive Abilities:</strong> A worm that walks retains all of the base creature's defensive abilities and special qualities. It also gains the following additional defensive abilities.</p>
<blockquote>
<p><strong>Worm that Walks Traits:</strong> A worm that walks has no discernible anatomy, and is not subject to critical hits or flanking. Reducing a worm that walks to 0 hit points causes it to discorporate (see below) - a worm that walks at 0 hit points is <Link to="/misc/staggered">staggered</Link>, and one at negative hit points is <Link to="/misc/dying">dying</Link>. Worms that walk are immune to any physical spell or effect that targets a specific number of creatures (including single-target spells such as <Link to="/spell/disintegrate">disintegrate</Link>), with the exception of such spells and effects generated by the worm that walks itself, which treat the worm that walks as one single creature if it so chooses. Mind-affecting effects that target single creatures function normally against a worm that walks, since the creature's individual components share a hive mind. A worm that walks takes half again as much damage (+50%) from damaging area effects, such as <Link to="/spell/fireball">fireball</Link> and splash weapons. Worms that walk are susceptible to high winds - treat a worm that walks as a Fine creature for the purposes of determining wind effects.</p>
<p><strong>Damage Reduction:</strong> A worm that walks loses any damage reduction possessed by the base creature and gains damage reduction 15/-.</p>
<p><strong>Fast Healing:</strong> A worm that walks gains <Link to="/umr/fast_healing">fast healing</Link> equal to its CR.</p>
</blockquote>
<p><strong className="hl">Immunities:</strong> Worms that walk are <Link to="/umr/immune">immune</Link> to disease, paralysis, poison, and sleep effects.</p>
<p><strong className="hl">Melee Attacks:</strong> A worm that walks loses any natural attacks the base creature had, but gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on its size. This slam has the <Link to="/umr/grab">grab</Link> ability and affects creatures up to one size larger than the worm that walks. A worm that walks retains any weapon proficiencies the base creature had.</p>
<p><strong className="hl">Special Attacks:</strong> A worm that walks retains all of the base creature's special attacks. It also gains the following additional special attacks.</p>
<blockquote>
<p><strong>Discorporate (Su)</strong> A worm that walks can collapse into a shapeless swarm of worms as a free action. All held, worn, and carried items fall and its Strength score drops to 1. The worm that walks functions as a true swarm while discorporated, with a reach of 0 feet (its space remains unchanged). While discorporated, the worm that walks loses all of its defensive abilities and gains all of the standard <Link to="/subtype/swarm">swarm</Link> traits. It loses its slam attacks and all special abilities and special attacks, but can make a swarm attack that deals damage equal to its engulf attack. A worm that walks can reform into its true form (including equipping all gear in reach) as a full-round action as long as it has at least 1 hit point.</p>
<p><strong>Squirming Embrace (Ex)</strong> If a worm that walks <Link to="/rule/grapple">grapples</Link> a foe, as a swift action, it can cause a swarm of worms to squirm over the grappled creature. These worms deal automatic swarm damage with no attack roll needed (see the table below). If a creature takes damage from the swarm, it is also subject to the swarm's distraction ability, and must make a Fortitude save or be <Link to="/misc/nauseated">nauseated</Link> for 1 round. The save DC equals 10 + 1/2 the worm that walks's HD + its Con modifier).</p>
<p>A worm that walks can only have one embraced target at a time, but it does not have to continue grappling in order to maintain the embrace. If the worm that walks moves more than 5 feet from the swarm or dismisses the swarm (a free action), the swarm dies. Any area attack that damages the swarm or any severe or stronger wind effect that affects the swarm's target kills it.</p>
<ScrollContainer id="template-worm_that_walks--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>Engulf Damage</th>
</tr>
</thead>
<tbody><tr>
<td>1-5</td>
<td>1d6 + 1.5 Str bonus</td>
</tr>
<tr>
<td>6-10</td>
<td>2d6 + 1.5 Str bonus</td>
</tr>
<tr>
<td>11-15</td>
<td>3d6 + 1.5 Str bonus</td>
</tr>
<tr>
<td>16-20</td>
<td>4d6 + 1.5 Str bonus</td>
</tr>
<tr>
<td>21 or more</td>
<td>5d6 + 1.5 Str bonus</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Tenacious (Ex)</strong> A worm that walks gains a +8 racial bonus on CMB checks made to grapple and a +4 racial bonus to its CMD.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Dex +4, Con +4.</p>
<p><strong className="hl">Skills:</strong> Worms that walk gain a +8 racial bonus on <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link> checks.</p>
<p><strong className="hl">Feats:</strong> Worms that walk gain <Link to="/feat/diehard">Diehard</Link> as a bonus feat.</p>
<h3 id="template-worm_that_walks-variant-worms-that-walk" data-hash-target>Variant Worms That Walk</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_75_demons_heresy">Pathfinder #75: Demon's Heresy pg. 74</Link><br/>Because of the odd and usually accidental circumstances through which worms that walk are born, the process of such birth is far from standardized. Thus, the worms themselves can take more shapes than simply the most common one. For purposes of clarity, all of the variants presented below are referred to as worms that walk, even if their main components are not actually worms. These variants are created using the same statistics presented above, and usually the only changes are cosmetic in nature (though see the <em>locust</em> variant, below).</p>
<p><strong className="hl" id="template-worm_that_walks-army-ants" data-hash-target>Army Ants:</strong> Common in Garund's deserts and lush, tropical jungles, army ants swarm over the land like a living carpet, devouring everything they come across. A worm that walks composed of army ants likewise consumes everything in its path - including the body of the spellcaster it once was. Disturbingly, these worms that walk spend little of their time in humanoid-shaped form, preferring to crawl as a biting swarm of legs and pincers. This form of worms that walk is mostly likely to be encountered in underground-dwelling; these horrific creatures are said to include one who calls the dangerous sands of Thuvia home.</p>
<p><strong className="hl" id="template-worm_that_walks-cockroaches" data-hash-target>Cockroaches:</strong> Cockroaches can be found in great numbers anywhere civilization stains the landscape with its refuse. Worms that walk composed of cockroaches are more likely to be found in urban areas, especially in large cities where they can go unnoticed by most, usually arising when both corpses and magical effluent are deposited in sewers and garbage dumps. A worm that walks composed of cockroaches is a creature of stealth and guile. Frequently keeping to the shadows and sewers of the city, these worms that walk broker information and engage in blackmail, augmenting their unnatural talents with strong illusion and enchantment magic. Some say that a powerful enchantress worm that walks made of cockroaches runs a guild of thieves in Absalom, but no reliable sources can say they've met her.</p>
<p><strong className="hl" id="template-worm_that_walks-locusts" data-hash-target>Locusts:</strong> Found in any area that sports - or once sported - verdant plant life, this worm that walks variant has plague-like nuances and can be particularly hard to kill. Made up of ravenous locusts, these worms that walk make meals of any creatures weaker than they, and are particularly attuned to their animalistic instincts. One of these particularly appalling worms that walk is said to threaten the agriculture-rich lands of Geb, and due to the influence of Deskari in the Worldwound, a few of these creatures have been spotted in the ruins of Sarkoris.</p>
<p><strong className="hl" id="template-worm_that_walks-wasps" data-hash-target>Wasps:</strong> Typically found in warm, moist regions, these worms that walk are made from hundreds of thousands of buzzing, swarming wasps. Aggressive and cruel, these worms that walk favor poison and other debilitating substances, and commonly focus their arcane knowledge on creating potent toxins. Rumor has it that one of these horrific creatures rules over a tribe of hunters along one of the winding tributaries threading throughout the Mwangi Expanse.</p>
</>};
const _young = {title: "Young", jsx: <><div style={{clear:"both"}}></div><Header full><span>Young</span><span>CR -1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 295</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Creatures with the young template are immature specimens of the base creature. You can also use this simple template to easily create a smaller variant of a monster. This template cannot be applied to creatures that increase in power through aging or feeding (such as <Link to="/family/dragon">dragons</Link> or <Link to="/monster/barghest">barghests</Link>) or creatures that are Fine-sized.</p>
<p><strong className="hl">Quick Rules:</strong> +2 to all Dex-based rolls, -2 to all other rolls, -2 hp/HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Size</strong> decrease by one category; <strong>AC</strong> reduce natural armor by -2 (minimum +0); <strong>Attacks</strong> decrease damage dice <Link to="/misc/by_one_step">by one step</Link>; <strong>Ability Scores</strong> -4 Strength, -4 Con, +4 size bonus to Dex.</p>
</>};
const _zombie = {hasJL:true,title: "Zombie", jsx: <><div className="jumpList" id="template-zombie-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-zombie-fast-zombie">Fast Zombie</InnerLink></li><li><InnerLink toTop to="template-zombie-plague-zombie">Plague Zombie</InnerLink></li><li><InnerLink toTop to="template-zombie-yellow-musk-zombie">Yellow Musk Zombie</InnerLink></li><li><InnerLink toTop to="template-zombie-zombies-of-the-yellow-mire">Zombies of the Yellow Mire</InnerLink></li><li><InnerLink toTop to="template-zombie-faces-of-death">Faces of Death</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Zombie</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 288</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Zombies are the animated corpses of dead creatures, forced into foul unlife via necromantic magic like <Link to="/spell/animate_dead">animate dead</Link>. While the most commonly encountered zombies are slow and tough, others possess a variety of traits, allowing them to spread disease or move with increased speed.</p>
<p>Zombies are unthinking automatons, and can do little more than follow orders. When left unattended, zombies tend to mill about in search of living creatures to slaughter and devour. Zombies attack until destroyed, having no regard for their own safety.</p>
<p>Although capable of following orders, zombies are more often unleashed into an area with no command other than to kill living creatures. As a result, zombies are often encountered in packs, wandering around places the living frequent, looking for victims. Most zombies are created using <em>animate dead.</em> Such zombies are always of the standard type, unless the creator also casts <Link to="/spell/haste">haste</Link> or <Link to="/spell/remove_paralysis">remove paralysis</Link> to create fast zombies, or <Link to="/spell/contagion">contagion</Link> to create plague zombies.</p>
<p>"Zombie" is an acquired template that can be added to any corporeal creature (other than an undead), referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> This depends on the creature's new total number of Hit Dice, as follows:</p>
<ScrollContainer id="template-zombie--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>CR</th>
<th>XP</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>1/8</td>
<td>50</td>
</tr>
<tr>
<td>1</td>
<td>1/4</td>
<td>100</td>
</tr>
<tr>
<td>2</td>
<td>1/2</td>
<td>200</td>
</tr>
<tr>
<td>3-4</td>
<td>1</td>
<td>400</td>
</tr>
<tr>
<td>5-6</td>
<td>2</td>
<td>600</td>
</tr>
<tr>
<td>7-8</td>
<td>3</td>
<td>800</td>
</tr>
<tr>
<td>9-10</td>
<td>4</td>
<td>1,200</td>
</tr>
<tr>
<td>11-12</td>
<td>5</td>
<td>1,600</td>
</tr>
<tr>
<td>13-16</td>
<td>6</td>
<td>2,400</td>
</tr>
<tr>
<td>17-20</td>
<td>7</td>
<td>3,200</td>
</tr>
<tr>
<td>21-24</td>
<td>8</td>
<td>4,800</td>
</tr>
<tr>
<td>25-28</td>
<td>9</td>
<td>6,400</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. It retains any subtype except for alignment subtypes (such as good) and subtypes that indicate kind. It does not gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">AC:</strong> Natural armor is based on the zombie's size:</p>
<ScrollContainer id="template-zombie--table-1"><table>
<thead>
<tr>
<th>Zombie Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+2</td>
</tr>
<tr>
<td>Large</td>
<td>+3</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+7</td>
</tr>
<tr>
<td>Colossal</td>
<td>+11</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Drop HD gained from class levels (minimum of 1) and change racial HD to d8s. Zombies gain a number of additional HD as noted on the following table.</p>
<ScrollContainer id="template-zombie--table-2"><table>
<thead>
<tr>
<th>Zombie Size</th>
<th>Bonus Hit Dice</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>-</td>
</tr>
<tr>
<td>Small or Medium</td>
<td>+1 HD</td>
</tr>
<tr>
<td>Large</td>
<td>+2 HD</td>
</tr>
<tr>
<td>Huge</td>
<td>+4 HD</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6 HD</td>
</tr>
<tr>
<td>Colossal</td>
<td>+10 HD</td>
</tr>
</tbody></table></ScrollContainer>
<p>Zombies use their Charisma modifiers to determine bonus hit points (instead of Constitution).</p>
<p><strong className="hl">Saves:</strong> Base save bonuses are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> Zombies lose their defensive abilities and gain all of the qualities and immunities granted by the undead type. Zombies gain DR 5/slashing.</p>
<p><strong className="hl">Speed:</strong> Winged zombies can still fly, but maneuverability drops to clumsy. If the base creature flew magically, so can the zombie. Retain all other movement types.</p>
<p><strong className="hl">Attacks:</strong> A zombie retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the zombie's size, but as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Special Attacks:</strong> A zombie retains none of the base creature's special attacks.</p>
<p><strong className="hl">Abilities:</strong> Str +2, Dex -2. A zombie has no Con or Int score, and its Wis and Cha become 10.</p>
<p><strong className="hl">BAB:</strong> A zombie's base attack is equal to 3/4 its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> A zombie has no skill ranks.</p>
<p><strong className="hl">Feats:</strong> A zombie loses all feats possessed by the base creature, and does not gain feats as its Hit Dice increase, but it does gain <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Special Qualities:</strong> A zombie loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. A zombie gains the following special quality.</p>
<blockquote>
<p><strong className="hl"><Link to="/misc/staggered">Staggered (Ex):</Link></strong> Zombies have poor reflexes and can only perform a single move action or standard action each round. A zombie can move up to its speed and attack in the same round as a <Link to="/rule/charge">charge</Link> action.</p>
</blockquote>
<h3 id="template-zombie-variant-zombies">Variant Zombies</h3>
<p>The typical zombie is a slow-moving abomination that is tough to destroy. Yet this tough zombie is not the only type of zombie to plague crypts or stalk graveyards. Each of the following two variant zombies modifies the base zombie in a few simple ways.</p>
<h4 id="template-zombie-fast-zombie" data-hash-target>Fast Zombie</h4>
<p>Unlike the standard, plodding zombie, a fast zombie moves with a supernatural quickness.</p>
<p><strong className="hl">Speed:</strong> Increase the base creature's land speed by 10 feet.</p>
<p><strong className="hl">Defensive Abilities:</strong> A fast zombie does not gain DR 5/slashing.</p>
<p><strong className="hl">Special Attacks:</strong> A fast zombie gains the following special attack.</p>
<blockquote>
<p><strong>Quick Strikes (Ex):</strong> Whenever a fast zombie takes a full-attack action, it can make one additional slam attack at its highest base attack bonus.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> As a standard zombie, except its Dexterity is increased by 2 instead of reduced by 2.</p>
<p><strong className="hl">Special Qualities:</strong> A fast zombie does not gain the <em>staggered</em> special quality.</p>
<h4 id="template-zombie-plague-zombie" data-hash-target>Plague Zombie</h4>
<p>These zombies carry a terrible disease that perpetuates their undead lineage - those infected by a plague zombie's contagion rise as zombies themselves when they perish.</p>
<p><strong className="hl">Defensive Abilities:</strong> A plague zombie does not gain DR 5/slashing.</p>
<p><strong className="hl">Special Attacks:</strong> A plague zombie gains the following special attacks.</p>
<blockquote>
<p><strong>Death Burst (Ex):</strong> When a plague zombie dies, it explodes in a burst of decay. All creatures adjacent to the plague zombie are exposed to its plague as if struck by a slam attack and must make a Fortitude save or contract zombie rot.</p>
<p><strong>Disease (Su):</strong> The slam attack - as well as any other natural attacks - of a plague zombie carries the zombie rot disease.</p>
<div className="sideNoteWrap"><ScrollContainer id="template-zombie--table-3"><table><tbody><tr><ThLink scope="row" rowSpan={10} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th colSpan={4} scope="col" className="title">Zombie Rot</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Injury-slam</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the zombie's HD + its Cha modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1d4 days</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/day</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/con_damage">Con damage</Link> and this damage cannot be healed while the creature is infected</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr><tr><td colSpan={4} className="extra">Anyone who dies while infected rises as a plague zombie in 2d6 hours.</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h4 id="template-zombie-yellow-musk-zombie" data-hash-target>Yellow Musk Zombie</h4>
<p>A yellow musk zombie is a rotting creature from which wet green vines have sprouted. Treat a yellow musk zombie as a standard zombie, but with this special quality.</p>
<blockquote>
<p><strong>Plant Traits (Ex):</strong> This zombie's animation is provided not by necromancy but by the plant that grows throughout its body. Yellow musk zombies lack undead traits, but gain <Link to="/type/plant">plant</Link> traits. They are treated as plants, not undead, for the resolution of magical effects and attacks. <Link to="/ability/channel_energy">Channel energy</Link> cannot harm a yellow musk zombie, for example, nor does negative energy heal a yellow musk zombie.</p>
</blockquote>
<h4 id="template-zombie-zombies-of-the-yellow-mire" data-hash-target>Zombies of the Yellow Mire</h4>
<p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 33</Link></p>
<p>The yellow musk zombies born in Yellow Mire may be familiar to adventurers who have encountered <Link to="/monster/yellow_musk_creeper">yellow musk creepers</Link> in the past, but the abominable flora of Golden Garden are an altogether separate horror. Below are three of the most common varieties of yellow musk zombies that arise from Golden Garden, which otherwise share statistics with typical yellow musk zombies.</p>
<blockquote>
<h5 id="template-zombie-deathspore-zombie-cr-1">Deathspore Zombie (CR +1)</h5>
<p>With stark black rashes streaked across their rotting faces and skeletal bodies, these yellow musk zombies are more imposing than their typical counterparts; they gain a +4 bonus to their Strength score and have a Charisma of 14. A creature struck by a deathspore zombie's natural attack has a chance of being afflicted with the following poison.</p>
<div className="sideNoteWrap"><ScrollContainer id="template-zombie--table-4"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Deathspore Toxin</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 14</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 saves</td></tr></tbody></table></ScrollContainer></div><h5 id="template-zombie-gold-musk-zombie-cr-2">Gold Musk Zombie (CR +2)</h5>
<p>These <Link to="/template/advanced">advanced</Link> yellow musk zombies have DR 5/cold iron as well as acid, cold, and electricity resistance 5, and they can be healed by negative energy as if they were undead. In addition, any creature slain by gold musk zombies becomes a gold musk zombie in 1d4 rounds. These new gold musk zombies are weakened for the first 24 hours of their existence, and take a -2 penalty on all d20 rolls and checks, receive -2 hit points per Hit Die, and do not create additional gold musk zombies from the creatures they kill. After 24 hours, these penalties are lifted.</p>
<h5 id="template-zombie-pale-puff-musk-zombie-cr-0">Pale-Puff Musk Zombie (CR +0)</h5>
<p>Weaker than their yellow musk counterparts but far more numerous, pale-puff musk zombies do not gain a bonus to Strength from becoming a zombie and have a Charisma score of 6. A large puffball of stinky yellow pollen grows out of the zombie's head from a sturdy brown stem. The first time a pale-puff musk zombie takes any amount of damage but isn't destroyed by the attack, the puffball breaks apart and spreads over a 5-foot-radius area, affecting any creatures in the area as a yellow musk creeper's pollen spray ability.</p>
</blockquote>
<h3 id="template-zombie-faces-of-death" data-hash-target>Faces of Death</h3>
<p><strong>Sources</strong> <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 25</Link><br/>The simple, tottering skeleton and mindless, shambling zombie are the stereotypical image of the walking dead, but these undead horrors come in highly variable forms. Bloody skeletons, burning skeletons, fast zombies, plague zombies, and deadly intelligent skeletal champions are the best-known variants, but the walking dead are a diverse lot, and many more varieties might stalk moonlit graveyards and haunted crypts, each possessing its own strange and unique abilities. Although some common forms are listed below, in many cases these variant abilities may be applied to either <Link to="/template/skeleton">skeletons</Link> or zombies, unless common sense dictates otherwise (such as a gasburst skeleton). Likewise, except as noted, the following variations can be stacked with one another - it's possible to have an exploding acid skeleton, for example.</p>
<p><strong>Alchemical Zombie:</strong> This zombie has been created through alchemical processes rather than necromantic magic. As such, positive energy has less effect on it, giving it <Link to="/umr/channel_resistance">channel resistance</Link> +2. Its alchemically treated flesh is also more resistant to damage, granting it an additional +2 bonus to its natural Armor Class above that which it gains based on its size. (CR +1)</p>
<p><strong>Brain-eating Zombie:</strong> These terrifying zombie variants feed on humanoid brains. They gain a <Link to="/umr/bite_attack">bite attack</Link> that deals damage based on the zombie's size, and the <Link to="/umr/grab">grab</Link> special attack, usable against opponents of the zombie's own size or smaller. When an opponent dies, the zombie uses its next turn to feast upon its victim's brain, making spells that require a complete corpse (such as <Link to="/spell/raise_dead">raise dead</Link>) useless. Anyone killed after being bitten by a brain-eating zombie rises as a brain-eating zombie in 2d6 hours unless the corpse is blessed or similar preventative measures are taken. (CR +0)</p>
<p><strong>Cursed Zombie:</strong> Created as the result of a powerful curse rather than through necromantic spells, cursed zombies can bestow a curse upon their victims. A cursed zombie gains the curse special attack, delivered with its slam attack. (CR +1)</p>
<div className="sideNoteWrap"><ScrollContainer id="template-zombie--table-5"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Zombie Curse (Su)</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Slam</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the zombie's HD + its Cha modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>-</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>as <Link to="/spell/bestow_curse">bestow curse</Link></td></tr></tbody></table></ScrollContainer></div><p><strong>Gasburst Zombie:</strong> These bloated zombies are filled with toxic gas. When a gasburst zombie dies, it explodes in a cloud of noxious vapors which fill a 10-foot cube surrounding the zombie. Gasburst zombies are commonly filled with <Link to="/eq-poison/burnt_othur_fumes">burnt othur fumes</Link> or <Link to="/eq-poison/ungol_dust">ungol dust</Link>, but any poisonous gas may be used. Gas burst zombies have DR 5/piercing instead of DR 5/slashing. (CR depends on poison used, usually +1)</p>
<p><strong>Host Corpse:</strong> This skeleton or zombie has been infested with a swarm of vermin or Tiny undead creatures that it releases from its body. Skeletal hosts often hold <Link to="/monster/carrionstorm">carrionstorms</Link> or <Link to="/monster/bat_swarm">bat swarms</Link> in their rib cages, while zombie hosts frequently carry <Link to="/monster/locust_swarm">locusts</Link> or <Link to="/monster/cockroach_swarm">flesh-eating cockroach swarms</Link> inside their rotting husks. Acid, bloody, and burning skeletons cannot be host corpses. (CR +0, with the swarm's CR counting as a separate creature)</p>
<p><strong>Relentless Zombie:</strong> These have all the powers of fast zombies, and also gain a climb speed equal to half the base creature's land speed, the <Link to="/umr/scent">scent</Link> special ability, a +4 racial bonus to <Link to="/skill/survival">Survival</Link> checks to track by smell, and two additional Hit Dice. (CR +1)</p>
<p><strong>Zombie Lord:</strong> <Link to="/template/zombie_lord">Zombie lords</Link> are the fleshy counterparts to skeletal champions, rare zombies who have somehow managed to retain their intelligence. Use the normal zombie template for the zombie lord's Armor Class, base save bonuses, speed, melee attacks, base attack bonus, and damage reduction. Use the <Link to="/template/skeletal_champion">skeletal champion</Link> template for the zombie lord's Hit Dice, skills, and ability scores. Zombie lords gain <Link to="/umr/channel_resistance">channel resistance</Link> +4 and <Link to="/feat/toughness">Toughness</Link> as a bonus feat. A zombie lord does not gain the staggered special quality. (CR as a zombie of the same Hit Dice +1.)</p>
</>};
const _zombie_lord = {title: "Zombie Lord", jsx: <><div style={{clear:"both"}}></div><Header full><span>Zombie Lord</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 286</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Zombie lords are the fleshy counterparts of skeletal champions: intelligent, cunning, and envious of creatures whose bodies aren't rotting away. Despite their decaying flesh, they are not slow like common zombies, and can easily pursue fleeing prey. Zombie lords are more powerful than common zombies and retain their class levels.</p>
<p>"Zombie lord" is an acquired template that can be added to any corporeal creature (other than undead) that has a minimum Intelligence of 3. This corporeal creature is referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> A zombie lord's CR is 1 higher than that of a normal zombie with the same Hit Dice, plus the normal CR increase for class levels (if any).</p>
<p><strong className="hl">Type:</strong> The creature's type becomes <Link to="/type/undead">undead</Link>. It keeps subtypes except for alignment subtypes and subtypes that indicate kind.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">AC:</strong> Natural armor is based on the zombie lord's size:</p>
<ScrollContainer id="template-zombie_lord--table-0"><table>
<thead>
<tr>
<th>Zombie Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+2</td>
</tr>
<tr>
<td>Large</td>
<td>+3</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+7</td>
</tr>
<tr>
<td>Colossal</td>
<td>+11</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Change all of the creature's racial Hit Dice to d8s, then add 2 racial Hit Dice to this total (creatures without racial HD gain 2 undead HD). Hit Dice from class levels are unchanged.</p>
<p><strong>Saving Throws:</strong> Base save bonuses for racial Hit Dice are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> A zombie lord gains DR 5/slashing and <Link to="/umr/channel_resistance">channel resistance</Link> +4, in addition to undead traits.</p>
<p><strong className="hl">Speed:</strong> Winged zombie lords can still fly, but maneuverability drops to clumsy. If the base creature flew magically, so can the zombie lord. Retain all other movement types.</p>
<p><strong className="hl">Attacks:</strong> A zombie lord retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the zombie lord's size, but as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Abilities:</strong> Str +2, Dex +2. As an undead, it has no Constitution score.</p>
<p><strong className="hl">BAB:</strong> A zombie lord's BAB for its racial HD is equal to 3/4 its HD.</p>
<p><strong className="hl">Skills:</strong> A zombie lord gains skill ranks per racial Hit Die equal to 4 + its Int modifier (class skills as the undead type). Skills gained from class levels remain unchanged.</p>
<p><strong className="hl">Feats:</strong> A zombie lord gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Special Qualities:</strong> Unlike a common zombie, a zombie lord does not gain the staggered special quality.</p>
</>};
export default {runeslave:_runeslave,runewarped_creature:_runewarped_creature,sea_sworn:_sea_sworn,seeded:_seeded,shadow:_shadow,shadow_animal:_shadow_animal,shadow_lord:_shadow_lord,shadowbound_creature:_shadowbound_creature,shadowfire_creature:_shadowfire_creature,shaggra_ogre:_shaggra_ogre,siabrae:_siabrae,silverblood_lycanthrope:_silverblood_lycanthrope,skeletal_champion:_skeletal_champion,skeleton:_skeleton,sorcerer:_sorcerer,soulbound_construct:_soulbound_construct,spore_zombie:_spore_zombie,steam_powered_construct:_steam_powered_construct,sunbaked_zombie:_sunbaked_zombie,taxidermic_creature:_taxidermic_creature,terror_creature:_terror_creature,thicken_ogre:_thicken_ogre,trompe_loeil:_trompe_loeil,tsukumogami:_tsukumogami,tulpa:_tulpa,unknown:_unknown,vahana:_vahana,vampire:_vampire,vampire_minion_addle_minded:_vampire_minion_addle_minded,vampire_minion_repeatedly_drained:_vampire_minion_repeatedly_drained,vampire_spawn:_vampire_spawn,vampiric_creature:_vampiric_creature,vetala:_vetala,waxwork:_waxwork,winter_fey:_winter_fey,winter_touched_fey:_winter_touched_fey,wizard:_wizard,worm_that_walks:_worm_that_walks,young:_young,zombie:_zombie,zombie_lord:_zombie_lord}