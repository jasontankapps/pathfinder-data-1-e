import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _blighted_myrmidon = {title: "Blighted Myrmidon", jsx: <><h2 id="arc-antipaladin-blighted_myrmidon-blighted-myrmidon">Blighted Myrmidon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 91</Link><br/>Blighted myrmidons carry the seed of rot in their black hearts and sap life from the natural world.</p>
<Ability id="arc-antipaladin-blighted_myrmidon-smite-nature-su" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-blighted_myrmidon-smite-nature-su" flavor="A blighted myrmidon can drain the life from a creature tied to nature.">Smite Nature (Su)</Pair>
<Pair hl title="Alters">Smite good</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">The blighted myrmidon chooses one target within sight to smite. Regardless of its alignment, if the target is an animal, plant, or vermin, the blighted myrmidon adds her Charisma bonus (if any) on her attack rolls and adds her blighted myrmidon level on damage rolls against the target of her <em>smite.</em> If the target of <em>smite nature</em> is an elemental, a fey, or a creature with levels of druid, hunter, ranger, or shifter, the bonus on damage on the first successful attack increases to 2 points of damage per class level the blighted myrmidon has. This ability otherwise functions as smite good.</Pair>
</Ability>
<Ability id="arc-antipaladin-blighted_myrmidon-corrupted-companion-sp" icon={["magic-swirl"]}>
<Pair single id="arc-antipaladin-blighted_myrmidon-corrupted-companion-sp" flavor="A blighted myrmidon can call upon a corrupted servant of nature.">Corrupted Companion (Sp)</Pair>
<Pair hl title="Alters">Fiendish boon</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When the blighted myrmidon chooses the second <em>fiendish boon</em> option, it functions as a <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell of the appropriate level. This ability otherwise functions as the standard fiendish boon antipaladin class feature.</Pair>
</Ability>
<Ability id="arc-antipaladin-blighted_myrmidon-feed-on-decay-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-antipaladin-blighted_myrmidon-feed-on-decay-ex" flavor="A blighted myrmidon draws strength from corrupting the natural world.">Feed on Decay (Ex)</Pair>
<Pair hl title="Replaces">10th-level use of smite good</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">When the blighted myrmidon damages a creature with her <em>smite nature</em> ability, she gains a +1 morale bonus on attack rolls, damage rolls, and saving throws for 1 round.</Pair>
</Ability>
<Ability id="arc-antipaladin-blighted_myrmidon-aura-of-decay-su" icon={["abstract-091"]}>
<Pair single id="arc-antipaladin-blighted_myrmidon-aura-of-decay-su">Aura of Decay (Su)</Pair>
<Pair hl title="Replaces">Aura of vengeance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">A blighted myrmidon can expend two uses of her <em>smite nature</em> ability to generate an aura of decay with a range of 10 feet for 1 minute. Living foes of the blighted myrmidon within the aura take 3d6 points of damage unless they succeed at a Fortitude save (DC = <Link to="/misc/half">half</Link> the blighted myrmidon's level + her Charisma modifier) for half damage. If an elemental, a fey, or a creature with levels in druid, hunter, ranger, or shifter takes damage from aura of decay, the blighted myrmidon regains a number of hit points equal to half the amount of damage the creature takes; this doesn't stack if multiple such creatures are in the aura.</Pair>
</Ability>
<Ability id="arc-antipaladin-blighted_myrmidon-enervating-touch-su" icon={["magic-palm"]}>
<Pair single id="arc-antipaladin-blighted_myrmidon-enervating-touch-su">Enervating Touch (Su)</Pair>
<Pair hl title="Replaces">The cruelty gained at 15th level</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">When she damages a creature with her <em>touch of corruption,</em> a blighted myrmidon can suppress the vital force of her target for 1 round per level. While affected, when the target regains hit points, it regains only half the number of hit points it would otherwise receive, and it can't gain <Link to="/rule/temporary_hit_points">temporary hit points</Link>. The target can attempt a Fortitude save (DC = half the blighted myrmidon's level + her Charisma modifier) to negate this effect.</Pair>
</Ability>
<Ability id="arc-antipaladin-blighted_myrmidon-unnatural-champion-ex" icon={["magic-swirl"]}>
<Pair single id="arc-antipaladin-blighted_myrmidon-unnatural-champion-ex">Unnatural Champion (Ex)</Pair>
<Pair hl title="Alters">Unholy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When a blighted myrmidon uses <em>smite nature</em> and strikes an elemental or fey creature with the <Link to="/subtype/extraplanar">extraplanar</Link> subtype, the target is also subject to the effects of a <Link to="/spell/banishment">banishment</Link> spell, using her blighted myrmidon level as her caster level, and her weapon and unholy symbol automatically count as objects that the subject hates. This ability otherwise functions as <em>unholy champion.</em></Pair>
</Ability>
</>};
const _dread_vanguard = {title: "Dread Vanguard", jsx: <><h2 id="arc-antipaladin-dread_vanguard-dread-vanguard">Dread Vanguard</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 22</Link><br/>Some antipaladins serve or ally themselves with villains who are bent on earthly conquest. They care nothing for the intricacies of divine spellcasting, but malevolent energy still surrounds them. Whether alone or at the head of a marauding host, these cruel warriors bring suffering and death - but their presence also heralds the coming of a greater evil.</p>
<p>Dread vanguards have the following class features.</p>
<Ability id="arc-antipaladin-dread_vanguard-beacon-of-evil-su" icon={["upgrade","abstract-091","heart-plus","armor-upgrade"]}>
<Pair single id="arc-antipaladin-dread_vanguard-beacon-of-evil-su" flavor="A dread vanguard unleashes the powers of his vile masters to strengthen both himself and his allies.">Beacon of Evil (Su)</Pair>
<Pair hl title="Replaces">Spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A dread vanguard gains one additional use of his <em>touch of corruption</em> ability per day.</Pair>
<Pair title="Standard Action">He can spend a use of his <em>touch of corruption</em> ability to manifest the darkness in his soul as an area of flickering shadows with a 30-foot radius centered on him. These shadows don't affect visibility. The antipaladin and all allies in the area gain a +1 morale bonus to AC and on attack rolls, damage rolls, and saving throws against fear, and also ignore the first 5 points of hardness when attacking unattended inanimate objects. This lasts for 1 minute, as long as the dread vanguard is conscious.</Pair>
<Pair title="At 8th Level">The dread vanguard now gains two additional uses of his <em>touch of corruption</em> ability per day. The <em>beacon of evil</em> aura grants <Link to="/umr/fast_healing">fast healing</Link> 3 to the dread vanguard as well as to his allies while they remain within it. Additionally, while this aura is active, the antipaladin can use his <em>touch of corruption</em> ability against any targets within its radius by making a ranged touch attack.</Pair>
<Pair title="At 12th Level">The dread vanguard now gains three additional uses of his <em>touch of corruption</em> ability per day. When he activates <em>beacon of evil,</em> a dread vanguard can choose to increase the radius of one antipaladin aura he possesses to 30 feet. Also, the morale bonus granted to AC and on attack rolls, damage rolls, and saving throws against fear increases to +2.</Pair>
<Pair title="At 16th Level">The dread vanguard now gains four additional uses of his <em>touch of corruption</em> ability per day. The fast healing granted by <em>beacon of evil</em> increases to 5. Additionally, the antipaladin's weapons and those of his allies within the aura's radius are considered evil for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 20th Level">The dread vanguard now gains five additional uses of his <em>touch of corruption</em> ability per day. The <em>beacon of evil's</em> radius increases to 60 feet, and the morale bonus granted to AC and on attack rolls, damage rolls, and saving throws against fear increases to +4. Lastly, attacks made by the dread vanguard and his allies within the aura's radius are infused with pure unholy power, and deal an additional 1d6 points of damage.</Pair>
<Pair title="Special">A dread vanguard does not gain any spells or spellcasting abilities, cannot use spell trigger or spell completion magic items, and does not have a caster level from this class.</Pair>
</Ability>
<Ability id="arc-antipaladin-dread_vanguard-dark-emissary-sp" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="arc-antipaladin-dread_vanguard-dark-emissary-sp" flavor="A dread vanguard becomes a true messenger of the forces of darkness he serves.">Dark Emissary (Sp)</Pair>
<Pair hl title="Replaces">Aura of sin</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Allies or evil creatures who serve the same power or organization as the dread vanguard are immune to the <em>crushing despair</em> and symbol effects, and automatically know that the location has been marked for their masters. They can treat this location as very familiar for the purpose of <Link to="/spell/teleport">teleport</Link> and similar spells and can use <Link to="/spell/scrying">scrying</Link> and related spells as though they were familiar with any subject within 20 feet of it.</Pair>
<Pair title="Ability">Once per day, the dread vanguard can expend two uses of his <em>touch of corruption</em> ability to mark one location within 60 feet with the stain of evil. This location can be any point in space, but the ability works best if placed on an altar, shrine, or other site important to a community. The location is affected as if by a <Link to="/spell/desecrate">desecrate</Link> spell. Creatures approaching within 30 feet of the site must succeed at a Will save or suffer the effects of <Link to="/spell/crushing_despair">crushing despair</Link>. Marking a new site ends all effects on the previous site.</Pair>
<Pair title="At 17th Level">The dread vanguard can also mark the site with a <Link to="/spell/symbol_of_pain">symbol of pain</Link>, and can mark two sites simultaneously. If he marks a third, all effects on the oldest active site end.</Pair>
<Pair title="At 20th Level">The dread vanguard can also mark the site wity a <Link to="/spell/symbol_of_weakness">symbol of weakness</Link>, and can mark three sites simultaneously. If he marks a fourth, all effects on the oldest active site end.</Pair>
<Pair title="Special">If available, all three of these effects overlap. Creatures must save against each effect individually, and the effects stack. The caster level for all effects is equal to the dread vanguard's class level. The save DC is equal to 10 + <Link to="/misc/half">half</Link> the antipaladin's level + his Charisma modifier. A location remains marked in this way for up to 1 day per antipaladin level. During this time, the <em>crushing despair</em> and <em>symbols</em> are triggered when the first target enters each spell's area. They remain active for 10 minutes, then can be triggered again if targets are within range. If the effects are disabled, they become inactive for 10 minutes, but then can be triggered again as normal. <Link to="/spell/dispel_magic">Dispel magic</Link> and similar spells suppress the effects, and all effects of dark emissary can be removed by a <Link to="/spell/consecrate">consecrate</Link> spell cast on the location by a cleric of a level equal to or higher than the dread vanguard.</Pair>
</Ability>
</>};
const _fearmonger = {title: "Fearmonger", jsx: <><h2 id="arc-antipaladin-fearmonger-fearmonger">Fearmonger</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 20</Link><br/>The fearmonger wants to do more than cause pain, misery, and confusion. He wishes to spread fear among his foes and infect entire populations with it. The fearmonger archetype is available only to the antipaladin alternate class.</p>
<Ability id="arc-antipaladin-fearmonger-feed-on-fear-su" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-fearmonger-feed-on-fear-su">Feed on Fear (Su)</Pair>
<Pair hl title="Replaces">Touch of corruption</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">A number of times per day equal to <Link to="/misc/half">half</Link> his antipaladin level plus his Charisma bonus.</Pair>
<Pair title="Passive Ability">The first time in a round a creature fails a saving throw against a fear effect created by a fearmonger's spell, spell-like ability, or supernatural ability (including any ability that causes a creature to be shaken, frightened, or panicked), the fearmonger is healed of 1 point of damage per 2 antipaladin levels. If the fearmonger is at full hit points when this ability is activated, he instead gains an equal number of <Link to="/rule/temporary_hit_points">temporary hit points</Link>. These temporary hit points last for 1 minute. Temporary hit points gained through multiple successful uses of this ability do not stack; the duration increases instead.</Pair>
</Ability>
<Ability id="arc-antipaladin-fearmonger-frightening-cruelty-su" extraClasses="hasSubs" icon={["magic-palm"]}>
<Pair single id="arc-antipaladin-fearmonger-frightening-cruelty-su">Frightening Cruelty (Su)</Pair>
<Pair title="At 3rd Level">The fearmonger must select <Link to="/misc/shaken">shaken</Link> as his 3rd-level cruelty.</Pair>
<Pair title="At 6th Level">He must choose <Link to="/misc/dazed">dazed</Link> as his 6th-level cruelty.</Pair>
<Pair title="At 9th Level">He must select <Link to="/misc/frightened">frightened</Link> as his 9th-level cruelty.</Pair>
<Pair title="At 12th Level">The fearmonger gains the <em>panicked</em> cruelty.</Pair>
</Ability>
<Ability id="arc-antipaladin-fearmonger-panicked" extraClasses="subAbility" icon={["magic-palm"]}>
<Pair single id="arc-antipaladin-fearmonger-panicked">Panicked</Pair>
<Pair hl title="Alters">Cruelty</Pair>
<Pair title="Ability">The target is <Link to="/misc/panicked">panicked</Link> for 1 round per 4 class levels the antipaladin possesses. The antipaladin must have the <em>shaken</em> and <em>frightened</em> cruelties before selecting this cruelty.</Pair>
</Ability>
</>};
const _insinuator = {title: "Insinuator", jsx: <><h2 id="arc-antipaladin-insinuator-insinuator">Insinuator</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 20</Link><br/>Between the selfless nobility of paladins and the chaotic menace of antipaladins, there exists a path of dedicated self-interest. Shunning the ties that bind them to a single deity, insinuators embrace whatever forces help them achieve their own agenda and glory, borrowing power to emulate divine warriors.</p>
<Ability id="arc-antipaladin-insinuator-alignment" icon={["info"]}>
<Pair single id="arc-antipaladin-insinuator-alignment">Alignment</Pair>
<Pair title="Info">An insinuator can be lawful evil, neutral evil, or chaotic evil.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-code-of-conduct" icon={["info"]}>
<Pair single id="arc-antipaladin-insinuator-code-of-conduct">Code of Conduct</Pair>
<Pair title="Info">An insinuator must always work toward his own self-interest, enrichment, or glory, and must also abide by the moral strictures of whatever outsider they have chosen to invoke that day (see invocation below). If the insinuator breaks an invoked outsider's code, he cannot invoke outsiders of that same alignment until he seeks <Link to="/spell/atonement">atonement</Link>, although outsiders of other alignments may still heed his call.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-invocation-ex" icon={["magic-swirl"]}>
<Pair single id="arc-antipaladin-insinuator-invocation-ex">Invocation (Ex)</Pair>
<Pair hl title="Replaces">Aura of evil</Pair>
<Pair title="Ability">At the start of each day, an insinuator can meditate for 10 minutes to contact and barter with an outsider to empower him for a day. An insinuator can freely invoke an outsider of his own alignment. He can instead invoke an outsider within one step of his own alignment by succeeding at a Diplomacy or Knowledge (religion) skill check (DC = 15 + the insinuator's antipaladin level).</Pair>
<Pair title="Passive Ability">While invoking the power of an outsider, the insinuator radiates an alignment aura that matches that of the outsider's, and becomes vulnerable to alignment-based effects that target that outsider's alignment (such as <em>smite evil</em> or <Link to="/spell/chaos_hammer">chaos hammer</Link>). None of an insinuator's supernatural or spell-like class abilities function unless he has invoked the power of an outsider, and the alignment of the being invoked may affect how some abilities function.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-detect-balance-sp" icon={["magic-swirl"]}>
<Pair single id="arc-antipaladin-insinuator-detect-balance-sp">Detect Balance (Sp)</Pair>
<Pair hl title="Alters">Detect good</Pair>
<Pair title="Ability">At will, an insinuator can detect strong moral leanings. This functions as <Link to="/spell/detect_evil">detect evil</Link> or <Link to="/spell/detect_good">detect good</Link>, but does not actually reveal the target's alignment, only whether the target is neutral (rather than good or evil) and the relative strength of that aura.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-smite-impudence-su" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-smite-impudence-su" flavor="An insinuator can beseech the forces empowering him to punish their shared enemies.">Smite Impudence (Su)</Pair>
<Pair hl title="Replaces">Smite good</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Swift Action">The insinuator chooses one target within sight to smite. An insinuator cannot use smite against a target that shares an alignment with the outsider he has invoked for the day. The insinuator adds his Charisma bonus on his attack rolls and <Link to="/misc/half">half</Link> his insinuator level on all damage rolls made against the target of his smite. If the target is an outsider, dragon, or divine spellcaster with an alignment opposed to that of the outsider he has invoked for the day, the bonus damage on the first successful attack increases to 1 point of damage per antipaladin level the insinuator has. Regardless of the target, the smite attack automatically bypasses any damage reduction the creature might possess. In addition, each time the insinuator declares a smite, he gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to his antipaladin level.</Pair>
<Pair title="At 4th Level">The insinuator can smite twice a day.</Pair>
<Pair title="At 7th Level">The insinuator can smite three times a day.</Pair>
<Pair title="At 10th Level">The insinuator can smite fourt times a day.</Pair>
<Pair title="At 13th Level">The insinuator can smite five times a day.</Pair>
<Pair title="At 17th Level">The insinuator can smite six times a day.</Pair>
<Pair title="At 19th Level">The insinuator can smite seven times a day.</Pair>
<Pair title="Special">The smite effect remains until the target is defeated or the next time the insinuator rests and regains his uses of this ability.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-selfish-healing-su" icon={["heart-plus"]}>
<Pair single id="arc-antipaladin-insinuator-selfish-healing-su">Selfish Healing (Su)</Pair>
<Pair hl title="Replaces">Touch of corruption</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Swift Action">An insinuator can heal his wounds by touch. This is treated exactly like the paladin's <Link to="/ability/lay_on_hands">lay on hands</Link> class feature, except it can be used only to heal the insinuator and cannot be used on other creatures.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-aura-of-ego-su" icon={["abstract-091","armor-upgrade","armor-downgrade"]}>
<Pair single id="arc-antipaladin-insinuator-aura-of-ego-su">Aura of Ego (Su)</Pair>
<Pair hl title="Replaces">Aura of cowardice</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An insinuator radiates an aura that bolsters allies and deters enemies. Each ally within 10 feet gains a +2 morale bonus on saving throws against fear effects. Enemies within 10 feet take a -2 penalty on saving throws against fear effects. This ability functions only while the insinuator is conscious, not if he is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-stubborn-health-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-stubborn-health-ex">Stubborn Health (Ex)</Pair>
<Pair hl title="Replaces">Plague bringer</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An insinuator takes only half damage from diseases and poisons, and none of his ability scores can be reduced below 1 by these effects.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-greeds-su" icon={["heart-plus"]}>
<Pair single id="arc-antipaladin-insinuator-greeds-su">Greeds (Su)</Pair>
<Pair hl title="Replaces">Cruelty</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An insinuator can heal himself of certain conditions. This functions as the <em>mercy</em> paladin class ability, but these <em>mercies</em> can only be applied to the insinuator himself.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-channel-energy-su" icon={["abstract-091"]}>
<Pair single id="arc-antipaladin-insinuator-channel-energy-su">Channel Energy (Su)</Pair>
<Pair hl title="Alters">Channel negative energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">An insinuator can <Link to="/ability/channel_negative_energy">channel negative energy</Link>, treating his antipaladin level as his effective <Link to="/class/cleric">cleric</Link> level. If he invokes a neutral outsider for the day, he may instead chose during the invocation to channel positive energy, but treats his effective cleric level as half his antipaladin level. Using this ability consumes two uses of his selfish healing ability. This is a Charisma-based ability.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-insinuator-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Antipaladin spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An insinuator gains one bonus feat, which must be selected from the list of <Link to="/main/combat_feat">combat feats</Link> or <Link to="/feat/skill_focus">Skill Focus</Link>.</Pair>
<Pair title="At 7th Level">You gain a new combat or Skill Focus feat.</Pair>
<Pair title="At 10th Level">You gain a new combat or Skill Focus feat.</Pair>
<Pair title="At 13th Level">You gain a new combat or Skill Focus feat.</Pair>
<Pair title="At 16th Level">You gain a new combat or Skill Focus feat.</Pair>
<Pair title="At 19th Level">You gain a new combat or Skill Focus feat.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-ambitious-bond-sp" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-insinuator-ambitious-bond-sp">Ambitious Bond (Sp)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An insinuator gains a divine bond with either a bonded weapon or an outsider servant. This functions as the antipaladin's <em>fiendish boon</em> with the following modifications.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-bonded-weapon" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-bonded-weapon">Bonded Weapon</Pair>
<Pair title="Ability">This functions as the antipaladin ability, except the first special ability added to a weapon must correspond to the alignment of the outsider the insinuator has invoked for that day: <Link to="/magic-enh/anarchic">anarchic</Link> (chaos), <Link to="/magic-enh/axiomatic">axiomatic</Link> (law), or <Link to="/magic-enh/unholy">unholy</Link> (evil). Additional special abilities may be applied if any equivalent bonus remains.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-outsider-servant" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-insinuator-outsider-servant">Outsider Servant</Pair>
<Pair title="Ability">This functions as the antipaladin ability, except the insinuator gains a new outsider servant each day, whose alignment must match the alignment of the outsider invoked for the day. The outsider servant functions as much as an agent for the patron invoked by the insinuator as an ally of the insinuator himself, and may turn against him if he violates his patron's alignment or interests.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-aura-of-ambition-su" icon={["abstract-091","armor-downgrade","upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-aura-of-ambition-su">Aura of Ambition (Su)</Pair>
<Pair hl title="Replaces">Aura of despair</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">Enemies within 10 feet of an insinuator take a -1 penalty on all saving throws. All allies within 10 feet gain a +1 bonus on all saving throws. This penalty does not stack with the penalty from aura of the crusader. This ability functions only while the insinuator is conscious, not if he is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-aura-of-glory-su" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-insinuator-aura-of-glory-su">Aura of Glory (Su)</Pair>
<Pair hl title="Replaces">Aura of vengeance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">An insinuator can expend two uses of his <em>smite impudence</em> ability to grant the ability to <em>smite impudence</em> to all allies within 10 feet, using his bonuses. Allies must use this <em>smite impudence</em> ability before the start of the insinuator's next turn, and the bonuses last for 1 minute.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-aura-of-belief-su" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-aura-of-belief-su">Aura of Belief (Su)</Pair>
<Pair hl title="Replaces">Aura of sin</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">An insinuator's weapons are treated as chaos-aligned while he invokes a chaotic outsider, law-aligned when he invokes a lawful outsider, or evil-aligned while he invokes an evil outsider. If he invokes an outsider with more than one alignment aura, the insinuator must choose during the initial invocation which alignment his weapon radiates.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-aura-of-indomitability-su" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-aura-of-indomitability-su">Aura of Indomitability (Su)</Pair>
<Pair hl title="Replaces">Aura of depravity</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">An insinuator gains DR 10 that is bypassed by the alignment opposite of the outsider he has invoked for the day, or DR 5/- while invoking a neutral outsider.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-personal-champion-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-antipaladin-insinuator-personal-champion-su">Personal Champion (Su)</Pair>
<Pair hl title="Replaces">Unholy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">An insinuator becomes a living embodiment of his selfish desires. His damage resistance from aura of indomitability increases to 15 (or 10 while invoking a neutral outsider). Whenever he uses <em>smite impudence,</em> he adds twice his full Charisma bonus to the attack roll and doubles his effective bonus damage gained from the smite.</Pair>
<Pair title="Ability">In addition, he can invoke a new outsider patron by meditating for 10 minutes.</Pair>
</Ability>
<Ability id="arc-antipaladin-insinuator-ex-insinuators" icon={["hazard-sign"]}>
<Pair single id="arc-antipaladin-insinuator-ex-insinuators">Ex-Insinuators</Pair>
<Pair title="Info">An insinuator who willfully commits selfless acts or engages in violence that doesn't further his own ends loses all class features (including his outsider servant, but not bonus feats or weapon, armor, and shield proficiencies). He can't progress any further in levels as an insinuator. He regains his abilities and advancement potential if he atones for his faltering ambition (see the <Link to="/spell/atonement">atonement</Link> spell). If he violates the code of conduct of his invoked outsider patron, he must similarly seek atonement from outsiders of that alignment again.</Pair>
</Ability>
</>};
const _iron_tyrant = {title: "Iron Tyrant", jsx: <><h2 id="arc-antipaladin-iron_tyrant-iron-tyrant">Iron Tyrant</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 4</Link><br/>Covered from head to toe in blackened armor decorated with grotesque shapes and bristling with spikes, iron tyrants make an unmistakable impression on the battlefield. These antipaladins' armor is an outward symbol of their inner power, and they are rarely seen without it. Iron tyrants seek the strength to rule over domains as unfettered despots, and depend on their armor as protection against those they have not yet cowed.</p>
<p>Most iron tyrants are orcs or half-orcs who worship the orc deities <Link to="/faith/lanishra">Lanishra</Link> (god of slavery, subjugation, and tyranny) or <Link to="/faith/varg">Varg</Link> (god of iron, siege weapons, and warfare). Though rarer, some iron tyrants belong to other races and worship <Link to="/faith/urazra">Urazra</Link> (giant god of battle, brutality, and strength) or demon lords such as <Link to="/faith/aldinach">Aldinach</Link> (She of the Six Venoms), <Link to="/faith/angazhan">Angazhan</Link> (the Ravenous King), or <Link to="/faith/izyagna">Izyagna</Link> (She of the Sevenfold Swarm).</p>
<Ability id="arc-antipaladin-iron_tyrant-iron-fist-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-antipaladin-iron_tyrant-iron-fist-ex">Iron Fist (Ex)</Pair>
<Pair hl title="Replaces">Touch of corruption</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An iron tyrant gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. In addition, whenever the iron tyrant makes a successful attack with a gauntlet, spiked gauntlet, or armor spikes, the weapon damage is based on his level and not the weapon type, as per the <Link to="/class/warpriest">warpriest's</Link> <em>sacred weapon</em> ability.</Pair>
</Ability>
<Ability id="arc-antipaladin-iron_tyrant-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-iron_tyrant-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Cruelty</Pair>
<Pair title="Ability">At 3rd level and every 3 antipaladin levels thereafter (6th, 9th, 12th, and so on), an iron tyrant gains a bonus feat in addition to those gained from normal advancement. This feat must be a <Link to="/main/combat_feat">combat feat</Link> that relates to the iron tyrant's armor or shield, such as <Link to="/feat/shield_focus">Shield Focus</Link>, or one of the <Link to="/main/feats_armor_mastery">armor mastery</Link> or <Link to="/main/feats_shield_mastery">shield mastery</Link> feats.</Pair>
</Ability>
<Ability id="arc-antipaladin-iron_tyrant-unstoppable-ex" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-iron_tyrant-unstoppable-ex">Unstoppable (Ex)</Pair>
<Pair hl title="Replaces">Channel negative energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">When wearing heavy armor, an iron tyrant is not slowed by terrain that halves movement (such as dense rubble, light undergrowth, and shallow bogs). Terrain that has been magically manipulated to impede motion or terrain that reduces movement by more than half still affects him.</Pair>
</Ability>
<Ability id="arc-antipaladin-iron_tyrant-fiendish-bond-su" extraClasses="hasSubs" icon={["stairs-goal","hazard-sign"]}>
<Pair single id="arc-antipaladin-iron_tyrant-fiendish-bond-su" flavor={["Instead of forming a ",{"tag":"em","content":"fiendish bond","props":{}}," with his weapon or a servant, an iron tyrant can form a bond with his armor."]}>Fiendish Bond (Su)</Pair>
<Pair hl title="Replaces">Fiendish boon</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">An iron tyrant can enhance his armor by calling upon a fiendish spirit's aid. This bond lasts for 1 minute per antipaladin level. When called, the spirit causes the armor to shed unholy light like a <Link to="/eq-misc/torch">torch</Link>.</Pair>
<Pair title="Special">If a suit of bonded armor with a fiendish spirit is destroyed, the iron tyrant loses the use of this ability for 30 days, or until he gains a level, whichever comes first. During this 30-day period, the iron tyrant takes a -1 penalty on attack rolls and weapon damage rolls.</Pair>
</Ability>
<Ability id="arc-antipaladin-iron_tyrant-at-5th-level" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-iron_tyrant-at-5th-level">At 5th Level</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Ability"><p>The spirit grants the armor a +1 enhancement bonus. For every 3 antipaladin levels beyond 5th, the armor gains another +1 enhancement bonus, to a maximum of +6 at 20th level. These bonuses stack with existing armor enhancement bonuses to a maximum of +5, or they can be used to add any of the following armor special abilities. Adding these special abilities consumes an amount of bonus equal to the special ability's base price modifier (or +4 for <em>unrighteous</em>), as shown below. These special abilities are added to any special abilities the armor already has, but duplicate abilities do not stack. If the armor is not magical, at least a +1 enhancement bonus must be added before any other special abilities can be added.</p>
<ul>
<li>+1: <Link to="/magic-enh/dastard">dastard</Link></li>
<li>+1: <Link to="/magic-enh/fortification">fortification (light)</Link></li>
<li>+2: <Link to="/magic-enh/spell_resistance">spell resistance 13</Link></li>
<li>+3: <Link to="/magic-enh/ghost_touch_a">ghost touch</Link></li>
<li>+3: fortification (medium)</li>
<li>+3: <Link to="/magic-enh/invulnerability">invulnerability</Link></li>
<li>+3: spell resistance 15</li>
<li>+4: spell resistance 17</li>
<li>+4: <Link to="/magic-enh/unrighteous">unrighteous</Link></li>
<li>+5: fortification (heavy)</li>
<li>+5: spell resistance 19</li>
</ul>
</Pair>
<Pair title="At 9th Level">The iron tyrant can use this twice a day.</Pair>
<Pair title="At 13th Level">The iron tyrant can use this three times a day.</Pair>
<Pair title="At 17th Level">The iron tyrant can use this four times a day.</Pair>
<Pair title="Special">The bonus and special abilities granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again. The fiendish spirit imparts no bonuses if the armor is worn by anyone other than the iron tyrant, but it resumes giving bonuses if the iron tyrant dons the armor again.</Pair>
</Ability>
</>};
const _knight_of_the_sepulcher = {title: "Knight of the Sepulcher", jsx: <><h2 id="arc-antipaladin-knight_of_the_sepulcher-knight-of-the-sepulcher">Knight of the Sepulcher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 64</Link><br/>Not content with the antipaladin's mere corruption of the soul, the knight of the sepulcher sacrifices mortality along with morality.</p>
<p>The knight of the sepulcher archetype is available only to the antipaladin alternate class.</p>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-touch-of-the-crypt-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-touch-of-the-crypt-ex">Touch of the Crypt (Ex)</Pair>
<Pair hl title="Replaces">Fiendish boon</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A knight of the sepulcher gains a +2 bonus on saving throws against mind-affecting effects, death effects, and poison. He is harmed by positive energy effects and healed by negative energy effects as though he were undead, although negative energy effects that don't heal undead (such as <Link to="/spell/enervation">enervation</Link>) affect him normally. The knight of the sepulcher has a 25% chance of ignoring critical hits and the bonus damage from <Link to="/ability/sneak_attack">sneak attacks</Link> as though he were wearing armor of <Link to="/magic-enh/light_fortification">light fortification</Link>.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-fortitude-of-the-crypt-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-fortitude-of-the-crypt-ex">Fortitude of the Crypt (Ex)</Pair>
<Pair hl title="Replaces">Aura of despair</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A knight of the sepulcher gains immunity to poison. He also gains darkvision 60 feet if he does not already possess it.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-cloak-of-the-crypt-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-cloak-of-the-crypt-ex">Cloak of the Crypt (Ex)</Pair>
<Pair hl title="Replaces">The smite good use gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">The knight of the sepulcher gains immunity to energy drain and harmful negative energy effects. His chance of ignoring critical hits and sneak attacks increases to 50%, as though he were wearing armor of <Link to="/magic-enh/moderate_fortification">moderate fortification</Link>.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-will-of-the-crypt-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-will-of-the-crypt-ex">Will of the Crypt (Ex)</Pair>
<Pair hl title="Replaces">Aura of vengeance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A knight of the sepulcher's bonus on saving throws against mind-affecting effects and death effects increases to +4.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-weapons-of-sin-su" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-weapons-of-sin-su">Weapons of Sin (Su)</Pair>
<Pair hl title="Replaces">Aura of sin</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A knight of the sepulcher's weapons are treated as evil-aligned for the purposes of overcoming damage reduction.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-crypt-lord-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-crypt-lord-ex">Crypt Lord (Ex)</Pair>
<Pair hl title="Replaces">Cruelty</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A knight of the sepulcher's chance of ignoring critical hits and sneak attacks increases to 75%, as though he were wearing armor of <Link to="/magic-enh/heavy_fortification">heavy fortification</Link>. He gains immunity to death effects, paralysis, sleep effects, and stunning. He no longer sleeps. The knight of the sepulcher also gains immunity to effects that cause fatigue, and effects that would cause him to become <Link to="/misc/exhausted">exhausted</Link> instead cause him to become <Link to="/misc/fatigued">fatigued</Link>.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-soul-of-the-crypt-su" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-soul-of-the-crypt-su">Soul of the Crypt (Su)</Pair>
<Pair hl title="Replaces">Aura of depravity</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">A knight of the sepulcher gains DR 5/bludgeoning and good.</Pair>
</Ability>
<Ability id="arc-antipaladin-knight_of_the_sepulcher-undying-champion-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-antipaladin-knight_of_the_sepulcher-undying-champion-ex" flavor="A knight of the sepulcher joins the ranks of the undead.">Undying Champion (Ex)</Pair>
<Pair hl title="Replaces">Unholy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">His DR increases to 10/bludgeoning and good. His type changes to <Link to="/type/undead">undead</Link>, and he acquires all <Link to="/umr/undead_traits">undead traits</Link>. Although immune to disease, he can still carry and spread diseases with the antipaladin's <em>plague bringer</em> ability. The undying champion no longer has a Constitution score. He uses his Charisma score for calculating hit points, Fortitude saves, and any special abilities that rely on Constitution.</Pair>
</Ability>
</>};
const _rough_rampager = {title: "Rough Rampager", jsx: <><h2 id="arc-antipaladin-rough_rampager-rough-rampager">Rough Rampager</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 43</Link><br/>Rough rampagers venerate <Link to="/faith/rovagug">Rovagug</Link>, reveling in the destruction the dark god represents. Where others seek power, wealth, or revenge, the rough rampager merely focuses on slaughter and mayhem. Because of their sheer destructive nature, most rough rampagers live short, brutal lives swathed in blood and carnage before someone puts them to the blade. Legends speak of dozens of rough rampagers wreaking havoc when Rovagug's spawn escape, acting as heralds and harbingers of the greater destruction created by the Rough Beast's terrifying children.</p>
<Ability id="arc-antipaladin-rough_rampager-aura-of-blood-su" icon={["abstract-091","armor-downgrade"]}>
<Pair single id="arc-antipaladin-rough_rampager-aura-of-blood-su">Aura of Blood (Su)</Pair>
<Pair hl title="Replaces">Aura of cowardice</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A rough rampager radiates a palpably daunting aura that causes all enemies within 10 feet to take a -4 penalty on Constitution or Heal checks to stop <Link to="/rule/bleed">bleed</Link> damage and checks to stabilize while <Link to="/misc/dying">dying</Link>. This ability functions only while the antipaladin is conscious.</Pair>
</Ability>
<Ability id="arc-antipaladin-rough_rampager-aura-of-putrefaction-su" icon={["abstract-091","armor-downgrade"]}>
<Pair single id="arc-antipaladin-rough_rampager-aura-of-putrefaction-su">Aura of Putrefaction (Su)</Pair>
<Pair hl title="Replaces">Aura of despair</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A rough rampager radiates an aura that causes the wounds of enemies within 10 feet to weep blood. Injured enemies in the area take 1 point of bleed damage per round. This ability functions only while the antipaladin is conscious.</Pair>
</Ability>
<Ability id="arc-antipaladin-rough_rampager-aura-of-quietus-su" icon={["abstract-091","armor-downgrade"]}>
<Pair single id="arc-antipaladin-rough_rampager-aura-of-quietus-su">Aura of Quietus (Su)</Pair>
<Pair hl title="Replaces">Aura of sin</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A rough rampager radiates an aura that causes the failure of healing spells, spell-like abilities, and supernatural abilities used to restore enemies within 10 feet of him. This is not an antimagic field, however, and ongoing or passive effects are not affected. Casters can overcome this ability with a successful caster level check versus the rough rampager's class level + 11.</Pair>
</Ability>
</>};
const _seal_breaker = {title: "Seal-Breaker", jsx: <><h2 id="arc-antipaladin-seal_breaker-seal-breaker">Seal-Breaker</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 43</Link><br/>Seal-breakers are dedicated to <Link to="/monster/the_whispering_tyrant">the Whispering Tyrant</Link> and have tasked themselves with finding and destroying the seals that bind him within Gallowspire. Their ties to the Whispering Tyrant give them power over undead creatures and other dark forces.</p>
<Ability id="arc-antipaladin-seal_breaker-code-of-conduct" icon={["info","hazard-sign"]}>
<Pair single id="arc-antipaladin-seal_breaker-code-of-conduct">Code of Conduct</Pair>
<Pair title="Info">The seal-breaker is dedicated to releasing <Link to="/monster/the_whispering_tyrant">the Whispering Tyrant</Link> from his prison. If a sealbreaker willingly and altruistically commits a good act, he loses all class features except proficiencies. This doesn't mean that a seal-breaker can't take actions someone else might qualify as good, only that such actions must always lead toward the eventual release of the Whispering Tyrant. A seal-breaker's code requires that he place the ultimate release of Tar-Baphon above all else, as well as impose tyranny, take advantage whenever possible, and punish the good and just (provided such actions don't interfere with his ultimate goal).</Pair>
</Ability>
<Ability id="arc-antipaladin-seal_breaker-aura-of-the-grave-su" icon={["armor-upgrade"]}>
<Pair single id="arc-antipaladin-seal_breaker-aura-of-the-grave-su" flavor="A seal-breaker is constantly surrounded by the chill of death.">Aura of the Grave (Su)</Pair>
<Pair hl title="Replaces">Aura of cowardice</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Mindless undead within 10 feet of the seal-breaker will not attack him unless directly ordered to, and even then only after succeeding at a Will save (DC = 10 <Link to="/misc/half">half</Link> the seal-breaker's level his Charisma modifier).</Pair>
</Ability>
<Ability id="arc-antipaladin-seal_breaker-corpse-rider-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-seal_breaker-corpse-rider-su">Corpse Rider (Su)</Pair>
<Pair hl title="Replaces">Fiendish boon</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A sealbreaker receives a boon from beyond the grave. This boon can take one of two forms: the seal-breaker can choose to form a bond with his weapon, or he can choose to animate an undead mount to ride.</Pair>
</Ability>
<Ability id="arc-antipaladin-seal_breaker-bonded-weapon" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-antipaladin-seal_breaker-bonded-weapon">Bonded Weapon</Pair>
<Pair title="Ability">This ability works exactly like the antipaladin's <em>fiendish boon</em> ability.</Pair>
</Ability>
<Ability id="arc-antipaladin-seal_breaker-undead-mount" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-seal_breaker-undead-mount">Undead Mount</Pair>
<Pair title="Ability">The sealbreaker gains the ability to reanimate any Large corpse (or a Medium corpse for Small seal-breakers) as his corpse mount. If no such corpse is present, the seal-breaker cannot summon his mount. The corpse animates as a quadruped of the same size that the seal-breaker can ride, regardless of the corpse's living form. This corpse mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link> using the seal-breaker's level as his effective druid level. The mount has the same base statistics as a <Link to="/companion/horse">heavy horse</Link>, <Link to="/companion/pony">pony</Link>, <Link to="/companion/boar">boar</Link>, <Link to="/companion/camel">camel</Link>, or <Link to="/companion/dog">dog</Link> (based on its size) with the following changes: its type changes to <Link to="/type/undead">undead</Link>, it has a <Link to="/misc/good_saves">good Will save and bad Fortitude and Reflex saves</Link>, it uses the base creature's Constitution score as its Charisma score (and likewise applies all level-based advancements to Charisma instead of Constitution), and it has an Intelligence score of at least 6.</Pair>
</Ability>
<Ability id="arc-antipaladin-seal_breaker-aura-of-death-su" icon={["abstract-091","armor-upgrade"]}>
<Pair single id="arc-antipaladin-seal_breaker-aura-of-death-su">Aura of Death (Su)</Pair>
<Pair hl title="Replaces">Aura of despair</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A seal-breaker radiates an aura that causes undead creatures within 10 feet to gain a profane bonus on all saving throws.</Pair>
</Ability>
<Ability id="arc-antipaladin-seal_breaker-aura-of-rebirth-su" icon={["magic-swirl"]}>
<Pair single id="arc-antipaladin-seal_breaker-aura-of-rebirth-su">Aura of Rebirth (Su)</Pair>
<Pair hl title="Replaces">Aura of vengeance</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">If a living creature is slain within 10 feet of the seal-breaker, the seal-breaker can spend two uses of his <em>smite good</em> ability at the start of his next turn to summon the spirit of a dead murderer to reanimate the corpse as a <Link to="/monster/mohrg">mohrg</Link>. The mohrg immediately rises and attacks the seal breaker's foes, acting under the antipaladin's command. After 1 minute, the murderer's soul leaves the body, which collapses, again lifeless.</Pair>
<Pair title="At 15th Level">The seal-breaker can activate this ability as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 19th Level">He can activate this ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _tyrant = {title: "Tyrant", jsx: <><h2 id="arc-antipaladin-tyrant-tyrant">Tyrant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 64</Link><br/>Evil arises in every form imaginable, not just in hearts full of destruction and chaos. Tyrants are manipulative and lawful antipaladins, chess masters who arrange things behind the scenes to ensure that whatever happens, evil always wins, and the tyrant along with it. Unlike other antipaladins, tyrants are all too happy to associate with good creatures, the better to manipulate them into performing evil acts.</p>
<Ability id="arc-antipaladin-tyrant-tyrants-code" icon={["info","hazard-sign"]}>
<Pair single id="arc-antipaladin-tyrant-tyrants-code">Tyrant's Code</Pair>
<Pair hl title="Alters">Code of conduct and associated abilities, ex-antipaladins</Pair>
<Pair title="Info">A tyrant must be of lawful evil alignment and loses all class features except proficiencies if he willingly and altruistically commits good acts. This does not mean the tyrant can't take actions someone else might qualify as good, only that such actions must always be in service of his own dark ambitions. A tyrant's code requires that he place his own sinister goals above all else, respect rightful authority even as he twists its loopholes to his own ends, impose tyranny, and punish all those who dare dissent. A tyrant can accept underlings of any alignment; he cares not who serves him, only that they are truly loyal to him. He can even work alongside good-aligned individuals, as long as he is secretly manipulating them.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-antipaladin-tyrant-undefined">
<Pair id="arc-antipaladin-tyrant-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA)</Pair>
<Pair title="Removed Skills">Ride</Pair></Ability>
<Ability id="arc-antipaladin-tyrant-diabolic-boon-sp" icon={["stairs-goal"]}>
<Pair single id="arc-antipaladin-tyrant-diabolic-boon-sp">Diabolic Boon (Sp)</Pair>
<Pair hl title="Alters">Fiendish boon</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">If a tyrant chooses to gain the services of a fiendish servant with his <em>fiendish boon</em> ability, he must choose a <Link to="/template/fiendish">fiendish</Link> animal or a creature with the lawful and evil subtypes.</Pair>
</Ability>
</>};
export default {blighted_myrmidon:_blighted_myrmidon,dread_vanguard:_dread_vanguard,fearmonger:_fearmonger,insinuator:_insinuator,iron_tyrant:_iron_tyrant,knight_of_the_sepulcher:_knight_of_the_sepulcher,rough_rampager:_rough_rampager,seal_breaker:_seal_breaker,tyrant:_tyrant}