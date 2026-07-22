import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested arcane discovery.</p>
</>};
const _alchemical_affinity = {title: "Alchemical Affinity", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 18</Link></p>
<Ability id="alchemical-affinity" icon={["upgrade","spell-book"]}>
<Pair single id="alchemical-affinity" flavor={<>Having studied alongside <Link to="/class/alchemist">alchemists</Link>, you've learned to use their methodologies to enhance your spellcraft.</>}>Alchemical Affinity</Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">Whenever you cast a spell that appears on both the wizard and alchemist spell lists, you treat your caster level as 1 higher than normal and the save DC of such spells increases by 1.</Pair>
<Pair title="Special">Additionally, you may copy spells from an alchemist's formula book into your spellbook just as you could with another wizard's spellbook.</Pair>
</Ability>
</>};
const _arcane_builder = {title: "Arcane Builder", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="arcane-builder" icon={["upgrade"]}>
<Pair single id="arcane-builder" flavor="You have an exceptional understanding of the theory behind creating magical items.">Arcane Builder</Pair>
<Pair title="Ability">Select one type of magic item (potions, wondrous items, and so on). You create items of this type 25% faster than normal, and gain a +4 bonus on Spellcraft checks (or other checks, as appropriate) to craft items of this type.</Pair>
<Pair title="Special">You may select this discovery multiple times; its effects do not stack. Each time you select this discovery, it applies to a different type of magic item.</Pair>
</Ability>
</>};
const _balanced_summoning = {title: "Balanced Summoning", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 20</Link></p>
<Ability id="balanced-summoning" icon={["upgrade"]}>
<Pair single id="balanced-summoning" flavor="You maintain balance by calling on opposing forces when summoning.">Balanced Summoning</Pair>
<Pair title="Ability">Whenever you cast a <em>summon monster</em> spell, you can summon two creatures from a single list 1 or more levels lower than the level of the spell. The two creatures must have alignments that are opposite along at least one axis (chaotic and lawful or evil and good). For example, if you cast <Link to="/spell/summon_monster_iii">summon monster III</Link>, you could summon a <Link to="/template/celestial">celestial</Link> wolf and a <Link to="/template/fiendish">fiendish</Link> hyena from the 2nd-level list.</Pair>
</Ability>
</>};
const _beyond_morality = {title: "Beyond Morality", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 21</Link></p>
<Ability id="beyond-morality-su" icon={["armor-upgrade"]}>
<Pair single id="beyond-morality-su">Beyond Morality (Su)</Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Ability">As long as you are neutral, you may choose to be treated as the most favorable alignment when affected by spells whose effects vary based on alignment (such as <Link to="/spell/holy_word">holy word</Link>). If you are neutral in relation to evil and good, you may choose to be treated as good or evil. If you are neutral in relation to chaos and law, you may choose to be treated as lawful or chaotic.</Pair>
<Pair title="Special">You may only choose to be treated as one alignment type along a single axis at a time (for instance, if you were within the area of both a <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link> spell and an <Link to="/spell/unholy_blight">unholy blight</Link> spell, you would have to choose to be either evil, good, or neutral for the purpose of determining the spells' effects).</Pair>
</Ability>
</>};
const _bonded_mask = {title: "Bonded Mask", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_80_empty_graves">Pathfinder #80: Empty Graves pg. 26</Link></p>
<Ability id="bonded-mask" icon={["armor-upgrade"]}>
<Pair single id="bonded-mask">Bonded Mask</Pair>
<Pair title="Ability">Your devotion to the Forgotten Pharaoh enables you to select a mask - typically an Osirian funerary mask - as your bonded item. The mask must be worn to have effect, and occupies the <Link to="/rule/head_slot">head slot</Link>.</Pair>
<Pair title="Passive Ability">In addition, the mask shields you from notice. While wearing your bonded mask, efforts to use the Diplomacy skill to gather information about you take a -1 penalty, and you gain a +1 competence bonus on all saving throws against scrying and mind-reading effects that allow saving throws.</Pair>
</Ability>
</>};
const _creative_destruction = {title: "Creative Destruction", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 21</Link></p>
<Ability id="creative-destruction-su" icon={["remedy"]}>
<Pair single id="creative-destruction-su" flavor="You have learned how to use destructive energy to empower yourself.">Creative Destruction (Su)</Pair>
<Pair title="Passive Ability">When you cast an evocation spell that deals damage, you gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the total number of dice used to determine the damage caused by the spell. Temporary hit points gained from this discovery do not stack and disappear after 1 hour.</Pair>
</Ability>
</>};
const _defensive_feedback = {title: "Defensive Feedback", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 21</Link></p>
<Ability id="defensive-feedback-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="defensive-feedback-su" flavor="Rather than dissipate damaging energy, you can redirect some of it back to its source.">Defensive Feedback (Su)</Pair>
<Pair title="Passive Ability">When an abjuration spell you cast prevents damage (with damage reduction or energy resistance), if the attacking creature is within 30 feet of the protected creature, the foe takes 1d6 points of damage for every 10 points of damage prevented.</Pair>
</Ability>
</>};
const _faith_magic = {title: "Faith Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 3</Link></p>
<Ability id="faith-magic" icon={["spell-book"]}>
<Pair single id="faith-magic">Faith Magic</Pair>
<Pair title="Prerequisites">Worship a deity</Pair>
<Pair title="Ability">Select one spell granted by a domain belonging to the god you worship. This spell must be at least 2 levels lower than the highest-level wizard spell you can cast. When you first prepare your spells for the day, you can prepare this spell once, using a spell slot 1 level higher than the spell's actual level. This is cast as a divine spell.</Pair>
</Ability>
</>};
const _fast_study = {title: "Fast Study", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="fast-study" icon={["upgrade"]}>
<Pair single id="fast-study">Fast Study</Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">Normally, a wizard spends 1 hour preparing all of his spells for the day, or proportionately less if he only prepares some spells, with a minimum of 15 minutes of preparation. Thanks to mental discipline and clever mnemonics, you can prepare all of your spells in only 15 minutes, and your minimum preparation time is only 1 minute.</Pair>
</Ability>
</>};
const _feral_speech = {title: "Feral Speech", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="feral-speech-su" icon={["stairs-goal"]}>
<Pair single id="feral-speech-su">Feral Speech (Su)</Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">You gain the ability to speak with and understand the response of any animal as if using <Link to="/spell/speak_with_animals">speak with animals</Link>, though each time you speak to animals, you must decide to communicate with either amphibians, birds, fish, mammals, or reptiles, and can only speak to and understand animals of that type. You can make yourself understood as far as your voice carries. This discovery does not predispose any animal addressed toward you in any way.</Pair>
<Pair title="At 12th Level">You can also use this ability to communicate with vermin.</Pair>
</Ability>
</>};
const _golem_constructor = {title: "Golem Constructor", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="golem-constructor" icon={["stairs-goal"]}>
<Pair single id="golem-constructor">Golem Constructor</Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Ability">You have learned the art and craft of creating a single type of <Link to="/family/golem">golem</Link> (such as <Link to="/monster/stone_golem">stone golems</Link> or <Link to="/monster/iron_golem">iron golems</Link>). When creating a golem of this type, you count as having the <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/feat/craft_magic_arms_and_armor">Craft_Magic_Arms_and_Armor</Link>, and <Link to="/feat/craft_construct">Craft Construct</Link> feats. You must meet all other construction requirements for the golem as normal.</Pair>
<Pair title="Special">You may select this discovery multiple times. Each time you select this discovery, it applies to a different kind of golem.</Pair>
</Ability>
</>};
const _idealize = {title: "Idealize", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 21</Link></p>
<Ability id="idealize-su" icon={["upgrade"]}>
<Pair single id="idealize-su" flavor="In your quest for self-perfection, you have discovered a way to further enhance yourself and others.">Idealize (Su)</Pair>
<Pair title="Prerequisites">10th-level wizard</Pair>
<Pair title="Passive Ability">When a transmutation spell you cast grants an enhancement bonus to an ability score, that bonus increases by 2.</Pair>
<Pair title="At 20th Level">The bonus increases by 4.</Pair>
</Ability>
</>};
const _immortality = {title: "Immortality", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="immortality-ex" icon={["armor-upgrade"]}>
<Pair single id="immortality-ex">Immortality (Ex)</Pair>
<Pair title="Prerequisites">20th-level wizard</Pair>
<Pair title="Passive Ability">You discover a cure for aging, and from this point forward you take no penalty to your physical ability scores from <Link to="/rule/age">advanced age</Link>. If you are already taking such penalties, they are removed at this time.</Pair>
</Ability>
</>};
const _infectious_charms = {title: "Infectious Charms", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 18</Link></p>
<Ability id="infectious-charms" icon={["magic-swirl","upgrade"]}>
<Pair single id="infectious-charms" flavor="Your charms are so smooth that they're contagious.">Infectious Charms</Pair>
<Pair title="Prerequisites">11th-level wizard</Pair>
<Pair title="Ability">Anytime you target and successfully affect a single creature with a charm or compulsion spell and that creature is within 30 feet of another opponent, your spell has a chance of affecting the second creature as well. As a <strong className="hl">swift action</strong> immediately after affecting a creature with a charm or compulsion spell, you can cause the spell to carry over to the nearest creature within 30 feet. The spell behaves in all ways as though its new target were the original target of the spell.</Pair>
</Ability>
</>};
const _ioun_bond = {title: "Ioun Bond", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River pg. 9</Link></p>
<Ability id="ioun-bond" icon={["magic-swirl"]}>
<Pair single id="ioun-bond">Ioun Bond</Pair>
<Pair title="Prerequisites">Has a bonded object from the <em>arcane bond</em> class ability</Pair>
<Pair title="Ability">You can form an arcane bond with an <Link to="/magic-wondrous/ioun_stone">ioun stone</Link>. If you choose this arcane discovery at 1st level, you gain a <Link to="/magic-ioun/dull_gray">dull gray</Link> ioun stone as a bonded object at no cost. A bonded ioun stone must be orbiting your head to have effect.</Pair>
<Pair title="At 12th Level">You can turn a bonded dull gray ioun stone into another kind of ioun stone as if you possessed the <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link> feat; if you die or replace a bonded ioun stone that has been transformed in this way, the stone reverts to a dull gray ioun stone.</Pair>
</Ability>
</>};
const _knowledge_is_power = {title: "Knowledge Is Power", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River pg. 9</Link></p>
<Ability id="knowledge-is-power-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="knowledge-is-power-ex" flavor="Your understanding of physical forces gives you power over them.">Knowledge Is Power (Ex)</Pair>
<Pair title="Passive Ability">You add your Intelligence modifier on combat maneuver checks and to your CMD. You also add your Intelligence modifier on Strength checks to break or lift objects.</Pair>
</Ability>
</>};
const _multimorph = {title: "Multimorph", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="multimorph-su" icon={["stairs-goal"]}>
<Pair single id="multimorph-su" flavor="Your studies in transmogrification have increased your control over shapechanging spells.">Multimorph (Su)</Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Standard Action">When you cast a spell of the polymorph subschool on yourself, you may expend 1 minute of the spell's duration to assume another form allowed by the spell. You can do this as often as you like, subject to the duration of the spell.</Pair>
</Ability>
</>};
const _observant_illusion = {title: "Observant Illusion", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 23</Link></p>
<Ability id="observant-illusion-su" icon={["stairs-goal"]}>
<Pair single id="observant-illusion-su">Observant Illusion (Su)</Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Ability">You can project your senses into any ongoing figment or shadow illusion you create with a spell of at least 3rd level. You can see through its eyes and hear through its ears as if you were standing where it is, and during your turn you can switch from using its senses to using your own, or back again, as a <strong className="hl">swift</strong> or <strong className="hl">move action</strong>.</Pair>
<Pair title="Special">While you are using its senses, your body is considered <Link to="/misc/blinded">blinded</Link> and <Link to="/misc/deafened">deafened</Link>.</Pair>
</Ability>
</>};
const _opposition_research = {title: "Opposition Research", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="opposition-research" icon={["magic-swirl","upgrade"]}>
<Pair single id="opposition-research">Opposition Research</Pair>
<Pair title="Prerequisites">9th-level wizard, have at least one opposition school</Pair>
<Pair title="Ability">By completing strenuous studies, you have broken through the mental barriers that made it hard for you to prepare spells from one of your opposition schools. Select one wizard opposition school; preparing spells of this school now only requires one spell slot of the appropriate level instead of two, and you no longer have the -4 Spellcraft penalty for crafting items from that school.</Pair>
</Ability>
</>};
const _psychic_preparation = {title: "Psychic Preparation", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 3</Link></p>
<Ability id="psychic-preparation" icon={["magic-swirl"]}>
<Pair single id="psychic-preparation">Psychic Preparation</Pair>
<Pair title="Ability">You have learned a limited way to access <Link to="/rule/psychic_magic">psychic magic</Link>. When you first prepare your spells for the day, you can prepare one spell as a psychic spell. This spell must be at least 2 levels lower than the highest-level wizard spell you can cast, and takes a slot 1 level higher than the spell's actual level. When you cast this spell, it operates as a psychic spell, including using emotional and thought components in place of somatic and verbal components, and only having expensive material components.</Pair>
</Ability>
</>};
const _resilient_illusions = {title: "Resilient Illusions", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 18</Link></p>
<Ability id="resilient-illusions" icon={["upgrade"]}>
<Pair single id="resilient-illusions">Resilient Illusions</Pair>
<Pair title="Prerequisites">8th-level wizard</Pair>
<Pair title="Passive Ability">You are able to conjure illusions so lifelike that they defy disbelief. Anytime a creature tries to disbelieve one of your illusion effects, make a caster level check. Treat the illusion's save DC as its normal DC or the result of the caster level check, whichever is higher.</Pair>
</Ability>
</>};
const _split_slot = {title: "Split Slot", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 86</Link></p>
<Ability id="split-slot" icon={["magic-swirl"]}>
<Pair single id="split-slot">Split Slot</Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">Once per day when you prepare spells, you may treat any one of your open spell slots as if it were two spell slots that were two spell levels lower. For example, a 9th-level wizard can split a 5th-level slot into two 3rd-level slots, preparing <Link to="/spell/fireball">fireball</Link> and <Link to="/spell/lightning_bolt">lightning bolt</Link> in those 3rd-level slots. For all purposes, the two lower-level slots are treated as that lower level (so the split 5th-level slot used for a fireball has a DC as if it were in a normal 3rd-level slot). Splitting a 2nd-level slot lets you prepare two additional cantrips (which you can cast over and over, just like normally prepared cantrips).</Pair>
<Pair title="Special">This discovery has no effect on cantrips or 1st-level spells. You may select this discovery multiple times; each time you select it, you may split another spell slot when you prepare spells. You cannot split a slot that you created by splitting a higher-level slot.</Pair>
</Ability>
</>};
const _staff_like_wand = {title: "Staff-Like Wand", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 87</Link></p>
<Ability id="staff-like-wand" icon={["upgrade"]}>
<Pair single id="staff-like-wand">Staff-Like Wand</Pair>
<Pair title="Prerequisites">11th-level wizard, <Link to="/feat/craft_staff">Craft Staff</Link></Pair>
<Pair title="Ability">Your research has unlocked a new power in conjunction with using a wand. Similar to using a magic staff, you use your own Intelligence score and relevant feats to set the DC for saves against spells you cast from a wand, and you can use your caster level when activating the power of a wand if it's higher than the caster level of the wand.</Pair>
</Ability>
</>};
const _steward_of_the_great_beyond = {title: "Steward of the Great Beyond", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="steward-of-the-great-beyond" icon={["magic-swirl"]}>
<Pair single id="steward-of-the-great-beyond">Steward of the Great Beyond</Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels beyond 10th<ByLevelPop levels={[[10,1],[15,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">Whenever a creature attempts to use a teleportation effect or summon a creature within 30 feet of you, you may attempt to block the effect. Make an opposed caster level check (1d20 + caster level). If the check succeeds, the spell or effect fails and is wasted; otherwise, it is unaffected.</Pair>
</Ability>
</>};
const _time_stutter = {title: "Time Stutter", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River pg. 9</Link></p>
<Ability id="time-stutter-sp" icon={["magic-swirl"]}>
<Pair single id="time-stutter-sp">Time Stutter (Sp)</Pair>
<Pair title="Prerequisites">10th-level wizard</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels beyond 10th<ByLevelPop levels={[[10,1],[15,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">You can briefly step out of time, pausing the world around you. This ability acts as the <Link to="/spell/time_stop">time stop</Link> spell, except that you gain only 1 round of apparent time.</Pair>
</Ability>
</>};
const _true_name = {title: "True Name", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 87</Link></p>
<Ability id="true-name-sp" icon={["magic-swirl"]}>
<Pair single id="true-name-sp">True Name (Sp)</Pair>
<Pair title="Prerequisites">11th-level wizard</Pair>
<Pair title="Ability"><p>Your researches into ancient tomes and your inquisitions of bound spirits have led you to one of the best-hidden secrets of the multiverse: the true name of an outsider - the name that defines the very essence of the creature and that gives the speaker control over the being. This outsider can have no more than 12 Hit Dice. Once per day, you can speak the common name by which the outsider is known, and the outsider travels to you as if you had cast <Link to="/spell/planar_binding">planar binding</Link> upon it. It must obey you to the best of its ability, without pay or bargaining for its services, for its fear that you might release its true name to the wider world is enough to bring even the most recalcitrant of outsiders to bear.</p>
<p>If the creature is within 100 feet, as a <strong className="hl">move action</strong>, you may punish it by deliberately mispronouncing its name, wracking its very essence and giving it the <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/staggered">staggered</Link> conditions for 1 round (even if the creature is normally immune to these conditions). You cannot use <em>true name</em> in an area of <Link to="/spell/silence">silence</Link>, but the creature does not have to be able to hear you for it to be harmed by the ability.</p>
<p>It is in your best interest to call this creature only sparingly, and occasionally reward it in some fashion to mollify its wrath. If you repeatedly fail to offer it a reward appropriate to its type and ethos, the creature may begin plotting ways to destroy the bond between you, whether by creating an accident that will destroy your memory of the name, by plaguing you with nuisances or dangers until you vow never to call on it again, or by actively seeking to destroy you through its own devices or those of an underling. If this creature is of a lawful type and you are violating its ethos, its superiors may even destroy it or you rather than allow you to contaminate their servant further. Worse, they may establish situations where it is necessary for you to summon this outsider, opening gateways to infernal or angelic interference, in order to gain a foothold on the Material Plane.</p>
</Pair>
<Pair title="Special">You may select this discovery multiple times. Each time you select this discovery, it applies to a different, specific outsider. If you select this discovery at 15th level or higher, the creature may have up to 18 Hit Dice and the call acts as <Link to="/spell/greater_planar_binding">greater planar binding</Link> instead of <em>planar binding.</em></Pair>
</Ability>
</>};
const _werewolf_shape = {title: "Werewolf Shape", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 25</Link></p>
<Ability id="werewolf-shape" icon={["upgrade"]}>
<Pair single id="werewolf-shape">Werewolf Shape</Pair>
<Pair title="Prerequisites">15th-level wizard</Pair>
<Pair title="Ability">When you cast <Link to="/spell/beast_shape_iv">beast shape IV</Link> or <Link to="/spell/shapechange">shapechange</Link>, you can choose to take the shape of a werewolf in addition to the other shapes available. While in werewolf shape, you gain all the effects of the <Link to="/template/lycanthrope">lycanthrope</Link> template instead of the spell's normal benefits. You act in all respects as a natural lycanthrope for the duration of the spell, including the ability to inflict the <Link to="/umr/curse_of_lycanthropy">curse of lycanthropy</Link> using the spell's save DC.</Pair>
</Ability>
</>};
const _yuelrals_blessing = {title: "Yuelral's Blessing", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="yuelrals-blessing" icon={["upgrade"]}>
<Pair single id="yuelrals-blessing">Yuelral's Blessing</Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Passive Ability">You cast any spells that appear on both the wizard and druid spell lists at +1 caster level and with +1 to the save DC. In addition, you may replace the material component of any arcane spell with gems of the same value.</Pair>
</Ability>
</>};
export default {not_found:_not_found,alchemical_affinity:_alchemical_affinity,arcane_builder:_arcane_builder,balanced_summoning:_balanced_summoning,beyond_morality:_beyond_morality,bonded_mask:_bonded_mask,creative_destruction:_creative_destruction,defensive_feedback:_defensive_feedback,faith_magic:_faith_magic,fast_study:_fast_study,feral_speech:_feral_speech,golem_constructor:_golem_constructor,idealize:_idealize,immortality:_immortality,infectious_charms:_infectious_charms,ioun_bond:_ioun_bond,knowledge_is_power:_knowledge_is_power,multimorph:_multimorph,observant_illusion:_observant_illusion,opposition_research:_opposition_research,psychic_preparation:_psychic_preparation,resilient_illusions:_resilient_illusions,split_slot:_split_slot,staff_like_wand:_staff_like_wand,steward_of_the_great_beyond:_steward_of_the_great_beyond,time_stutter:_time_stutter,true_name:_true_name,werewolf_shape:_werewolf_shape,yuelrals_blessing:_yuelrals_blessing}