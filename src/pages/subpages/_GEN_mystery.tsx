import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><h2 id="mystery-not_found-error">Error</h2>
<p>Unable to find the requested mystery.</p>
</>};
const _ancestor = {hasJL:true,title: "Ancestor", jsx: <><div className="jumpList" id="mystery-ancestor-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-ancestor-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-ancestor-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-ancestor-ancestor">Ancestor</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 53</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/pharasma">Pharasma</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/unseen_servant">Unseen servant</Link></Pair>
<Pair plain title="4th"><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Pair>
<Pair plain title="6th"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="8th"><Link to="/spell/spiritual_ally">Spiritual ally</Link></Pair>
<Pair plain title="10th"><Link to="/spell/telekinesis">Telekinesis</Link></Pair>
<Pair plain title="12th"><Link to="/spell/greater_heroism">Greater heroism</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="18th"><Link to="/spell/astral_projection">Astral projection</Link></Pair>
</Ability>
<h3 id="mystery-ancestor-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Ancestor mystery can choose from any of the following revelations.</p>
<Ability id="ancestral-weapon-su" icon={["power"]}>
<Pair single id="ancestral-weapon-su">Ancestral Weapon (Su)</Pair>
<Pair title="Usage">1 minute/day per oracle level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">You can summon a simple or martial weapon from your family's history that is appropriate for your current size. You are considered proficient with this weapon.</Pair>
<Pair title="At 3rd Level">The weapon is considered <Link to="/rule/masterwork_w">masterwork</Link>.</Pair>
<Pair title="At 7th Level">The weapon gains a +1 enhancement bonus.</Pair>
<Pair title="At 11th Level">The weapon gains the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon property.</Pair>
<Pair title="At 15th Level">The enhancement bonus becomes +2.</Pair>
<Pair title="At 19th Level">The enhancement bonus increases to +3.</Pair>
<Pair title="Special">The weapon disappears after 1 round if it leaves your grasp.</Pair>
</Ability>
<Ability id="blood-of-heroes-su" icon={["boost","def"]}>
<Pair single id="blood-of-heroes-su" flavor="You can call upon your ancestors to grant you extra bravery in battle.">Blood of Heroes (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Move-Equivalent Action">You gain a +1 morale bonus on attack rolls, damage rolls, and Will saves against fear for a number of rounds equal to your Charisma bonus.</Pair>
<Pair title="At 7th Level">This bonus becomes +2.</Pair>
<Pair title="At 14th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="phantom-touch-su" icon={["touch"]}>
<Pair single id="phantom-touch-su">Phantom Touch (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">You can perform a melee touch attack that causes a living creature to become <Link to="/misc/shaken">shaken</Link>. This ability lasts for a number of rounds equal to <Link to="/misc/half">half</Link> of your oracle level (minimum 1 round).</Pair>
</Ability>
<Ability id="sacred-council-su" icon={["boost"]}>
<Pair single id="sacred-council-su">Sacred Council (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Move-Equivalent Action">You can call upon your ancestors to provide council. This advice grants you a +2 bonus on any one d20 roll. This effect lasts for 1 round.</Pair>
</Ability>
<Ability id="spirit-of-the-warrior-su" icon={["boost","def"]}>
<Pair single id="spirit-of-the-warrior-su" flavor="You can summon the spirit of a great warrior ancestor and allow it to possess you, becoming a mighty warrior yourself.">Spirit of the Warrior (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Usage">1 round/day per two oracle levels; these rounds need not be consecutive, but they must be spent in 1-round increments</Pair>
<Pair title="Ability">You gain a +4 enhancement bonus to Strength, Dexterity, and Constitution, and a +4 natural armor bonus to AC. Your base attack bonus while possessed equals your oracle level (which may give you additional attacks), and you gain the <Link to="/feat/improved_critical">Improved Critical</Link> feat with a weapon of your choice.</Pair>
</Ability>
<Ability id="spirit-shield-su" icon={["def"]}>
<Pair single id="spirit-shield-su">Spirit Shield (Su)</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">You can call upon the spirits of your ancestors to form a shield around you that blocks incoming attacks and grants you a +4 armor bonus.</Pair>
<Pair title="At 7th Level">This bonus becomes +6.</Pair>
<Pair title="At 11th Level">This bonus increases to +8.</Pair>
<Pair title="At 13th Level">This shield causes arrows, rays, and other ranged attacks requiring an attack roll against you to have a 50% miss chance.</Pair>
<Pair title="At 15th Level">This bonus becomes +10.</Pair>
<Pair title="At 19th Level">This bonus increases to +12.</Pair>
</Ability>
<Ability id="spirit-walk-su" icon={["power","def"]}>
<Pair single id="spirit-walk-su">Spirit Walk (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Ability">Once per day, you can become incorporeal and invisible. While in this form, you can move in any direction and pass through solid objects. You can take no action other than to move while in this form. You remain in this form for a number of rounds equal to your oracle level, but you can end this effect prematurely as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 15th Level">You can use this ability twice a day.</Pair>
</Ability>
<Ability id="storm-of-souls-su" icon={["magic"]}>
<Pair single id="storm-of-souls-su">Storm of Souls (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">1 time/day + 1 per four oracle levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">You can summon the spirits of your ancestors to attack in a ghostly barrage - their fury creates physical wounds on creatures in the area. The <em>storm</em> has a range of 100 feet and is a 20-foot-radius <Link to="/misc/burst">burst</Link>. Objects and creatures in the area take 3d8 hit points of damage. Undead creatures in the area take 1d8 points of damage for every oracle level you possess. A successful Fortitude save reduces the damage to half.</Pair>
<Pair title="At 8th Level">Objects and non-undead creatures now take 4d6 damage.</Pair>
<Pair title="At 10th Level">Objects and non-undead creatures now take 5d6 damage.</Pair>
<Pair title="At 12th Level">Objects and non-undead creatures now take 6d6 damage.</Pair>
<Pair title="At 14th Level">Objects and non-undead creatures now take 7d6 damage.</Pair>
<Pair title="At 16th Level">Objects and non-undead creatures now take 8d6 damage.</Pair>
<Pair title="At 18th Level">Objects and non-undead creatures now take 9d6 damage.</Pair>
<Pair title="At 20th Level">Objects and non-undead creatures now take 10d6 damage.</Pair>
</Ability>
<Ability id="voice-of-the-grave-su" icon={["magic"]}>
<Pair single id="voice-of-the-grave-su">Voice of the Grave (Su)</Pair>
<Pair title="Usage">1 round/day per oracle level; these rounds need not be consecutive</Pair>
<Pair title="Ability">You can <Link to="/spell/speak_with_dead">speak with dead</Link>, as per the spell.</Pair>
<Pair title="At 5th Level">The dead creature you question takes -2 penalty on its Will save to resist this effect.</Pair>
<Pair title="At 10th Level">The penalty becomes -4.</Pair>
<Pair title="At 15th Level">The penalty increases to -6.</Pair>
<Pair title="At 20th Level">The penalty becomes -8.</Pair>
</Ability>
<Ability id="wisdom-of-the-ancestors-su" icon={["magic"]}>
<Pair single id="wisdom-of-the-ancestors-su">Wisdom of the Ancestors (Su)</Pair>
<Pair title="Ability">Once per day, you can enter a trance in which you commune with the spirits of your ancestors. This trance lasts for 10 minutes, which must be uninterrupted and during which you can take no other actions. When you come out of this trance, you have gained mystical insight into the future.</Pair>
<Pair title="At 1st Level">This insight acts as an <Link to="/spell/augury">augury</Link> spell with 80% effectiveness.</Pair>
<Pair title="At 5th Level">The insight takes the form of a <Link to="/spell/divination">divination</Link> with 90% effectiveness.</Pair>
<Pair title="At 8th Level">The knowledge you gain is equivalent to a <Link to="/spell/commune">commune</Link> spell.</Pair>
<Pair title="Special">None of these spell effects require material components.</Pair>
</Ability>
<h3 id="mystery-ancestor-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["def","power","boost","magic"]}>
<Pair single id="final-revelation" flavor="You become one with the spirits of your ancestors.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain a bonus on Will saving throws equal to your Charisma modifier, <Link to="/umr/blindsense">blindsense</Link> out to a range of 60 feet, and a +4 bonus on your caster level for all divination spells.</Pair>
<Pair title="Ability">You can cast <em>astral projection</em> as a spell-like ability once per day without requiring material components.</Pair>
</Ability>
</>};
const _apocalypse = {hasJL:true,title: "Apocalypse", jsx: <><div className="jumpList" id="mystery-apocalypse-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-apocalypse-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-apocalypse-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-apocalypse-apocalypse">Apocalypse</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 56</Link></p>
<p>Among <Link to="/monster/fire_giant_doombringer">fire giants</Link>, the rare but blessed oracles of the apocalypse are favored emissaries of the divine.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/rovagug">Rovagug</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/deathwatch">Deathwatch</Link></Pair>
<Pair plain title="4th"><Link to="/spell/summon_swarm">Summon swarm</Link></Pair>
<Pair plain title="6th"><Link to="/spell/explosive_runes">Explosive runes</Link></Pair>
<Pair plain title="8th"><Link to="/spell/ice_storm">Ice storm</Link></Pair>
<Pair plain title="10th"><Link to="/spell/insect_plague">Insect plague</Link></Pair>
<Pair plain title="12th"><Link to="/spell/circle_of_death">Circle of death</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="16th"><Link to="/spell/incendiary_cloud">Incendiary cloud</Link></Pair>
<Pair plain title="18th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
<h3 id="mystery-apocalypse-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Apocalypse mystery can choose from any of the following revelations.</p>
<Ability id="defy-elements-ex" icon={["def"]}>
<Pair single id="defy-elements-ex">Defy Elements (Ex)</Pair>
<Pair title="Ability">Choose one energy type (acid, cold, fire, electricity, or sonic). You gain <Link to="/umr/resistance">resistance</Link> 5 to the selected energy type.</Pair>
<Pair title="At 5th Level">You can choose an additional energy type for which to gain resistance 5, or you can choose a previously chosen energy type and increase that resistance by 5.</Pair>
<Pair title="At 10th Level">You can choose an additional energy type for which to gain resistance 5, or you can choose a previously chosen energy type and increase that resistance by 5.</Pair>
<Pair title="At 15th Level">You can choose an additional energy type for which to gain resistance 5, or you can choose a previously chosen energy type and increase that resistance by 5.</Pair>
<Pair title="At 20th Level">You can choose an additional energy type for which to gain resistance 5, or you can choose a previously chosen energy type and increase that resistance by 5.</Pair>
<Pair title="Special">You can only have a maximum resistance of 20 for any one energy type.</Pair>
</Ability>
<Ability id="destructive-roots-su" icon={["magic"]}>
<Pair single id="destructive-roots-su" flavor="You can root yourself to your current spot and cause the world around you to fall apart.">Destructive Roots (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Standard Action">You can cause the ground in a 5-foot radius <Link to="/misc/burst">burst</Link> centered on you to crumble and rupture, becoming <Link to="/rule/difficult_terrain">difficult terrain</Link>. As a <strong className="hl">move action</strong> on subsequent rounds, you can continue to concentrate on this area as though concentrating on a spell; doing so increases the radius of difficult terrain by 5 feet (maximum 30-foot-radius).</Pair>
<Pair title="Special">You immediately cease concentrating if you move from the square you started in when you activated this ability. Difficult terrain created by this ability remains for 24 hours before returning to its original state.</Pair>
</Ability>
<Ability id="doomsayer-su" icon={["lower"]}>
<Pair single id="doomsayer-su">Doomsayer (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Standard Action">You can utter a dire prophecy that strikes fear in your enemies and causes them to become <Link to="/misc/shaken">shaken</Link>. To be affected, an enemy must be within 30 feet and able to hear you. This effect persists as long as the enemy is within 30 feet and you use a <strong className="hl">move action</strong> each round to continue your <em>doomsaying.</em></Pair>
<Pair title="At 15th Level">Continuing your <em>doomsaying</em> each round is a <strong className="hl">swift action</strong> instead.</Pair>
<Pair title="Special">This ability cannot cause a creature to become frightened or panicked, even if the target was already shaken from another effect. This is a mind-affecting fear effect that relies on audible components.</Pair>
</Ability>
<Ability id="dust-to-dust-su" icon={["magic"]}>
<Pair single id="dust-to-dust-su">Dust to Dust (Su)</Pair>
<Pair title="Standard Action">Once per day, you can cause the weapons around you to shatter in their wielders' hands. When you use this ability, attempt a single <Link to="/rule/sunder">sunder</Link> combat maneuver, using your caster level in place of your base attack bonus and your Charisma modifier in place of Strength. Every creature except you in a 10-foot radius that is wielding a manufactured weapon is targeted by the same attempt. You deal an amount of damage to each weapon affected equal to 1d4 &times; your Charisma modifier (minimum 1d4).</Pair>
<Pair title="At 10th Level">You can use this ability twice per day.</Pair>
<Pair title="At 11th Level">This damage increases to 1d6 &times; your Charisma modifier (minimum 1d6).</Pair>
</Ability>
<Ability id="erosion-touch-su" icon={["touch"]}>
<Pair single id="erosion-touch-su">Erosion Touch (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per three oracle levels<ByLevelPop levels={[[1,1],[3,2],[6,3],[9,4],[12,5],[15,6],[18,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">As a melee touch attack, you can deal 1d6 points of damage per level to objects or constructs. If used against an object in another creature's possession, treat this attack as a sunder combat maneuver.</Pair>
</Ability>
<Ability id="near-death-su" icon={["def"]}>
<Pair single id="near-death-su">Near Death (Su)</Pair>
<Pair title="Passive Ability">You gain a +2 insight bonus on saves against diseases, mind-affecting effects, and poisons.</Pair>
<Pair title="At 7th Level">This bonus also applies on saves against death effects, sleep effects, and stunning.</Pair>
<Pair title="At 11th Level">The bonus increases to +4.</Pair>
</Ability>
<Ability id="pass-the-torch-su" icon={["down","magic"]}>
<Pair single id="pass-the-torch-su">Pass the Torch (Su)</Pair>
<Pair title="Usage">1 round/day per two oracle levels<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="round" postText="/day" /></Pair>
<Pair title="Swift Action">Once per day, you can channel the energy of the apocalypse into your body, causing you to ignite. You take 1d4 points of fire damage when you activate this ability and again at the beginning of your turn until you end the effect. Any creature that begins its turn adjacent to you takes 1d6 points of fire damage as the fire spreads, plus 1 additional point of fire damage for each previous round you have had this ability active. For example, adjacent creatures take 1d6+5 points of damage if you have had this ability active for 5 rounds. You can end this ability as a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 5th Level">You can use this ability 2 times a day.</Pair>
<Pair title="At 10th Level">You can use this ability 3 times a day.</Pair>
<Pair title="At 15th Level">You can use this ability 4 times a day.</Pair>
<Pair title="At 20th Level">You can use this ability 5 times a day.</Pair>
</Ability>
<Ability id="power-of-the-fallen-sp" icon={["magic"]}>
<Pair single id="power-of-the-fallen-sp">Power of the Fallen (Sp)</Pair>
<Pair title="Prerequisites">5th-level oracle</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Ability">You can touch a dying creature and channel its life energy into another living creature. This ability acts as <Link to="/spell/death_knell">death knell</Link>, except you can choose any ally (including yourself) within 30 feet to gain the benefit of this effect, and you can apply the +2 enhancement bonus to either Strength, Dexterity, or Constitution.</Pair>
</Ability>
<Ability id="spell-blast-su" icon={["power"]}>
<Pair single id="spell-blast-su">Spell Blast (Su)</Pair>
<Pair title="Swift Action">Whenever you confirm a critical hit against an opponent with a spell that requires an attack roll, you can immediately attempt to <Link to="/rule/bull_rush">bull rush</Link> your opponent in any direction. You don't provoke an attack of opportunity for this bull rush attempt.</Pair>
</Ability>
<Ability id="unstoppable-overrun-ex" icon={["boost","power"]}>
<Pair single id="unstoppable-overrun-ex">Unstoppable Overrun (Ex)</Pair>
<Pair title="Ability">You can attempt <Link to="/rule/overrun">overrun</Link> combat maneuvers against opponents that are up to two size categories larger than you.</Pair>
<Pair title="At 5th Level">You gain <Link to="/feat/improved_overrun">Improved Overrun</Link> as a bonus feat.</Pair>
<Pair title="At 10th Level">You gain <Link to="/feat/greater_overrun">Greater Overrun</Link> as a bonus feat.</Pair>
<Pair title="Special">You don't need to meet the prerequisites to gain these feats.</Pair>
</Ability>
<h3 id="mystery-apocalypse-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["boost","lower"]}>
<Pair single id="final-revelation" flavor="You become a herald of the apocalypse and wield the awesome power to fulfill such prophecy.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">Anytime you successfully cast a spell or use an ability that bestows 1 or more <Link to="/rule/negative_levels">negative levels</Link>, the effect bestows 1d4 additional negative levels.</Pair>
<Pair title="Swift Action">Whenever you confirm a critical hit against a creature (including with a melee, ranged, or spell attack), you can curse the target of your attack, as the <Link to="/spell/bestow_curse">bestow curse</Link> spell, except the target doesn't receive a Will saving throw to negate the effects and spell resistance does not apply against this ability.</Pair>
</Ability>
</>};
const _ascetic = {hasJL:true,title: "Ascetic", jsx: <><div className="jumpList" id="mystery-ascetic-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-ascetic-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-ascetic-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-ascetic-ascetic">Ascetic</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 104</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/irori">Irori</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/stone_fist">Stone fist</Link></Pair>
<Pair plain title="4th"><Link to="/spell/glide">Glide</Link></Pair>
<Pair plain title="6th"><Link to="/spell/force_punch">Force punch</Link></Pair>
<Pair plain title="8th"><Link to="/spell/ethereal_fists">Ethereal fists</Link></Pair>
<Pair plain title="10th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="12th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="16th"><Link to="/spell/frightful_aspect">Frightful aspect</Link></Pair>
<Pair plain title="18th"><Link to="/spell/iron_body">Iron body</Link></Pair>
</Ability>
<h3 id="mystery-ascetic-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Ascetic mystery can choose from any of the following revelations.</p>
<Ability id="absence-of-body-su" icon={["def"]}>
<Pair single id="absence-of-body-su">Absence of Body (Su)</Pair>
<Pair title="Ability">You require half as much food and water to survive as a normal member of your race. Additionally, each time you <Link to="/misc/hold_your_breath">hold your breath</Link>, you can do so for an additional number of rounds equal to your oracle level.</Pair>
<Pair title="At 15th Level">You no longer need to eat or drink and can hold your breath for 10 times as long (2 minutes per point of Constitution, plus 1 additional minute per oracle level).</Pair>
</Ability>
<Ability id="absence-of-form-sp" icon={["magic","def"]}>
<Pair single id="absence-of-form-sp">Absence of Form (Sp)</Pair>
<Pair title="Usage">1 round/day per oracle level; these rounds need not be consecutive</Pair>
<Pair title="Ability">You gain <Link to="/spell/feather_fall">feather fall</Link> as a spell-like ability.</Pair>
<Pair title="At 10th Level">You can also apply your daily rounds of this ability to use <Link to="/spell/air_walk">air walk</Link>.</Pair>
<Pair title="Special">If you are in mid fall when this ability's duration expires, you take falling damage as if you fell from the altitude you were at when the spell ended.</Pair>
</Ability>
<Ability id="ascetic-armor-su" icon={["def"]}>
<Pair single id="ascetic-armor-su">Ascetic Armor (Su)</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Passive Ability">You can use meditative techniques that temporarily cause attacks to bounce off your skin, as long as you aren't wearing armor or carrying a medium or heavy load. These techniques grant you a +4 armor bonus to AC.</Pair>
<Pair title="At 7th Level">This bonus becomes +6.</Pair>
<Pair title="At 11th Level">This bonus increases to +8.</Pair>
<Pair title="At 13th Level">The techniques also grant DR 5/unarmed strikes or natural attacks.</Pair>
<Pair title="At 15th Level">This bonus becomes +10.</Pair>
<Pair title="At 19th Level">This bonus increases to +12.</Pair>
</Ability>
<Ability id="fleet-ex" icon={["boost"]}>
<Pair single id="fleet-ex">Fleet (Ex)</Pair>
<Pair title="Prerequisites">Cannot have the <Link to="/oraclecurse/lame">lame</Link> oracle curse</Pair>
<Pair title="Ability">You gain a +10-foot enhancement bonus to your base land speed. You lose this extra speed if you wear any armor or carry a medium or heavy load.</Pair>
<Pair title="At 7th Level">This bonus becomes +20 feet.</Pair>
<Pair title="At 13th Level">This bonus increases to +30 feet.</Pair>
<Pair title="At 19th Level">This bonus becomes +40 feet.</Pair>
</Ability>
<Ability id="martial-disciple-su" icon={["melee"]}>
<Pair single id="martial-disciple-su" flavor="Through meditation and study of monastic forms of combat, you have learned a lethal form of unarmed combat.">Martial Disciple (Su)</Pair>
<Pair title="Ability">You gain <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat, even if you do not meet the prerequisites. You gain the unarmed strike damage of a <Link to="/class/monk">monk</Link> of your oracle level. If you also have monk levels, those levels stack for the purpose of determining your unarmed strike damage.</Pair>
</Ability>
<Ability id="oracular-spellstrike-su" extraClasses="hasSubs" icon={["melee"]}>
<Pair single id="oracular-spellstrike-su">Oracular Spellstrike (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Ability">By harnessing a synergy of unarmed combat and spellcasting, you have uncovered a means of channeling spell energy quickly through your unarmed strikes. This resembles the <Link to="/class/magus">magus</Link> <em>spellstrike</em> ability, except it works with unarmed strikes only, no matter what other abilities you have. Additionally, it uses spells from the cleric spell list, not the magus spell list.</Pair>
</Ability>
<Ability id="spellstrike-su" extraClasses="subAbility" icon={["melee"]}>
<Pair single id="spellstrike-su" flavor="Text from the magus class ability.">Spellstrike (Su)</Pair>
<Pair title="Ability">Whenever you cast a spell with a range of "touch" from the magus spell list, you can deliver the spell through any weapon you are wielding as part of a melee attack. Instead of the free melee touch attack normally allowed to deliver the spell, you can make one free melee attack with your weapon (at your highest base attack bonus) as part of casting this spell. If successful, this melee attack deals its normal damage as well as the effects of the spell. If you make this attack in concert with <em>spell combat,</em> this melee attack takes all the penalties accrued by spell combat melee attacks.</Pair>
<Pair title="Special">This attack uses the weapon's critical range (20, 19-20, or 18-20 and modified by the <em>keen</em> weapon property or similar effects), but the spell effect only deals &times;2 damage on a successful critical hit, while the weapon damage uses its own critical modifier.</Pair>
</Ability>
<Ability id="rapid-convalescence-su" icon={["def"]}>
<Pair single id="rapid-convalescence-su">Rapid Convalescence (Su)</Pair>
<Pair title="Ability">You reduce the number of consecutive successful saves needed to recover from a disease or poison by 1 (to a minimum of 1). Additionally, you can sacrifice one of your unused spell slots for the day to gain an enhancement bonus equal to that spell slot's level on your next save to resist the effects of poison or disease, provided the save is attempted within 1 minute per level of spell expended.</Pair>
</Ability>
<Ability id="spell-deflection-su" icon={["def","protect"]}>
<Pair single id="spell-deflection-su">Spell Deflection (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Ability">You can use a readied action to <Link to="/rule/counterspells">counterspell</Link> any spell being cast on you or an adjacent ally that requires a ranged touch attack (such as a ray). In order to successfully counter the spell, you must make an unarmed attack roll. If the result of this attack roll is higher than 20 + the spell's caster level, the spell is negated with no effect.</Pair>
<Pair title="At 17th Level">Any spell you successfully negate is reflected back at the caster with the same ranged touch attack result.</Pair>
</Ability>
<h3 id="mystery-ascetic-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["power","def"]}>
<Pair single id="final-revelation" flavor="You become a magical creature.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You are forevermore treated as an outsider rather than as a humanoid (or whatever your creature type was) for the purpose of spells and magical effects. Additionally, you gain damage reduction 10/chaotic, which allows you to ignore the first 10 points of damage from any attack made by a nonchaotic weapon or by any natural attack made by a creature that doesn't have similar damage reduction. Unlike other outsiders, you can still be brought back from the dead as if you were a member of your previous creature type.</Pair>
</Ability>
</>};
const _battle = {hasJL:true,title: "Battle", jsx: <><div className="jumpList" id="mystery-battle-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-battle-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-battle-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-battle-battle">Battle</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 45</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/rovagug">Rovagug</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/ride">Ride</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fog_cloud">Fog cloud</Link></Pair>
<Pair plain title="6th"><Link to="/spell/magic_vestment">Magic vestment</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wall_of_fire">Wall of fire</Link></Pair>
<Pair plain title="10th"><Link to="/spell/righteous_might">Righteous might</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_bulls_strength">Mass bull's strength</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="16th"><Link to="/spell/earthquake">Earthquake</Link></Pair>
<Pair plain title="18th"><Link to="/spell/storm_of_vengeance">Storm of vengeance</Link></Pair>
</Ability>
<h3 id="mystery-battle-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Battle mystery can choose from any of the following revelations.</p>
<Ability id="battlecry-ex" icon={["boost","def"]}>
<Pair single id="battlecry-ex">Battlecry (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">You can unleash an inspiring battlecry. All allies within 100 feet who hear your cry gain a +1 morale bonus on attack rolls, skill checks, and saving throws for a number of rounds equal to your Charisma modifier.</Pair>
<Pair title="At 10th Level">This bonus increases to +2.</Pair>
</Ability>
<Ability id="battlefield-clarity-ex" icon={["def"]}>
<Pair single id="battlefield-clarity-ex">Battlefield Clarity (Ex)</Pair>
<Pair title="Immediate Action">Once per day, whenever you fail a saving throw that causes you to become blind, deaf, frightened, panicked, paralyzed, shaken, or stunned, you may attempt that saving throw again, with a +4 insight bonus on the roll. You must take the second result, even if it is worse.</Pair>
<Pair title="At 7th Level">You can use this ability twice a day.</Pair>
<Pair title="At 15th Level">You can use this three times a day.</Pair>
</Ability>
<Ability id="combat-healer-su" icon={["boost"]}>
<Pair single id="combat-healer-su">Combat Healer (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">1 time/day + 1 per four oracle levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">Whenever you cast <Link to="/main/cure_spells">a cure spell</Link> (a spell with "cure" in its name), you can cast it as a <strong className="hl">swift action</strong>, as if using the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat, by expending two spell slots. This does not increase the level of the spell.</Pair>
</Ability>
<Ability id="iron-skin-su" icon={["def"]}>
<Pair single id="iron-skin-su">Iron Skin (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Ability">Once per day, your skin hardens and takes on the appearance of iron, granting you DR 10/adamantine. This functions as <Link to="/spell/stoneskin">stoneskin</Link>, using your oracle level as the caster level.</Pair>
<Pair title="At 15th Level">You can use this ability twice per day.</Pair>
</Ability>
<Ability id="maneuver-mastery-ex" icon={["boost"]}>
<Pair single id="maneuver-mastery-ex">Maneuver Mastery (Ex)</Pair>
<Pair title="Ability">Select one type of combat maneuver. When performing the selected maneuver, you treat your oracle level as your base attack bonus (plus the BAB from other classes) when determining your CMB.</Pair>
<Pair title="At 7th Level">You gain the Improved feat (such as <Link to="/feat/improved_trip">Improved Trip</Link>) that grants you a bonus when performing that maneuver.</Pair>
<Pair title="At 11th Level">You gain the Greater feat (such as <Link to="/feat/greater_trip">Greater Trip</Link>) that grants you a bonus when performing that maneuver.</Pair>
<Pair title="Special">You do not need to meet the prerequisites to receive these feats.</Pair>
</Ability>
<Ability id="resiliency-ex" icon={["def"]}>
<Pair single id="resiliency-ex">Resiliency (Ex)</Pair>
<Pair title="Passive Ability">You are not <Link to="/misc/disabled">disabled</Link> and you do not gain the <Link to="/misc/staggered">staggered</Link> condition if you are reduced to exactly 0 hit points.</Pair>
<Pair title="At 7th Level">You gain <Link to="/feat/diehard">Diehard</Link> as a bonus feat. You do not need to meet its prerequisites.</Pair>
<Pair title="At 11th Level">You do not lose a hit point when you take a standard action while disabled.</Pair>
</Ability>
<Ability id="skill-at-arms-ex" icon={["power"]}>
<Pair single id="skill-at-arms-ex">Skill at Arms (Ex)</Pair>
<Pair title="Ability">You gain proficiency in all martial weapons and heavy armor.</Pair>
</Ability>
<Ability id="surprising-charge-ex" icon={["power"]}>
<Pair single id="surprising-charge-ex">Surprising Charge (Ex)</Pair>
<Pair title="Immediate Action">Once per day, you can move up to your speed.</Pair>
<Pair title="At 7th Level">You can do this twice a day.</Pair>
<Pair title="At 15th Level">You can use this ability three times a day.</Pair>
</Ability>
<Ability id="war-sight-su" icon={["roll","power"]}>
<Pair single id="war-sight-su">War Sight (Su)</Pair>
<Pair title="Ability">Whenever you roll for initiative, you can roll twice and take either result.</Pair>
<Pair title="At 7th Level">You can always act in the surprise round, but if you fail to notice the ambush, you act last, regardless of your initiative result (you act in the normal order in following rounds).</Pair>
<Pair title="At 11th Level">You can roll for initiative three times and take any one of the results.</Pair>
</Ability>
<Ability id="weapon-mastery-ex" icon={["power"]}>
<Pair single id="weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair title="Ability">Select one weapon with which you are proficient. You gain <Link to="/feat/weapon_focus">Weapon Focus</Link> with that weapon.</Pair>
<Pair title="At 8th Level">You gain <Link to="/feat/improved_critical">Improved Critical</Link> with that weapon.</Pair>
<Pair title="At 12th Level">You gain <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link> with that weapon.</Pair>
<Pair title="Special">You do not need to meet the prerequisites to receive these feats.</Pair>
</Ability>
<h3 id="mystery-battle-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["power","boost","def"]}>
<Pair single id="final-revelation" flavor="You become an avatar of battle.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Full-Round Action">You can take a full-attack action and move up to your speed (you can move before or after the attacks).</Pair>
<Pair title="Passive Ability"><p>Whenever you score a critical hit, you can ignore any DR the target might possess. You gain a +4 insight bonus to your AC for the purpose of confirming critical hits against you.</p>
<p>When you are below 0 hit points, you do not die until your negative total is in excess of twice your Constitution score.</p>
</Pair>
</Ability>
</>};
const _bones = {hasJL:true,title: "Bones", jsx: <><div className="jumpList" id="mystery-bones-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-bones-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-bones-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-bones-bones">Bones</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 46</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/false_life">False life</Link></Pair>
<Pair plain title="6th"><Link to="/spell/animate_dead">Animate dead</Link></Pair>
<Pair plain title="8th"><Link to="/spell/fear">Fear</Link></Pair>
<Pair plain title="10th"><Link to="/spell/slay_living">Slay living</Link></Pair>
<Pair plain title="12th"><Link to="/spell/circle_of_death">Circle of death</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_undead">Control undead</Link></Pair>
<Pair plain title="16th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wail_of_the_banshee">Wail of the banshee</Link></Pair>
</Ability>
<h3 id="mystery-bones-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Bones mystery can choose from any of the following revelations.</p>
<Ability id="armor-of-bones-su" icon={["def"]}>
<Pair single id="armor-of-bones-su">Armor of Bones (Su)</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">You can conjure armor made of bones that grants you a +4 armor bonus.</Pair>
<Pair title="At 7th Level">The armor's bonus becomes +6.</Pair>
<Pair title="At 11th Level">The armor's bonus increases to +8.</Pair>
<Pair title="At 13th Level">This armor grants you DR 5/bludgeoning.</Pair>
<Pair title="At 15th Level">The armor's bonus becomes +10.</Pair>
<Pair title="At 19th Level">The armor's bonus increases to +12.</Pair>
</Ability>
<Ability id="bleeding-wounds-su" icon={["lower"]}>
<Pair single id="bleeding-wounds-su">Bleeding Wounds (Su)</Pair>
<Pair title="Ability">Whenever a creature takes damage from one of your spells or effects that causes negative energy damage (such as <Link to="/spell/inflict_light_wounds">inflict light wounds</Link> or the <em>death's touch</em> revelation), it begins to <Link to="/rule/bleed">bleed</Link>, taking an amount of damage each round equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your oracle level.</Pair>
<Pair title="Special">The bleeding can be stopped by a DC 15 Heal check or any effect that heals damage.</Pair>
</Ability>
<Ability id="deaths-touch-su" icon={["touch","aid","protect"]}>
<Pair single id="deaths-touch-su">Death's Touch (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability"><p>You can cause terrible wounds to appear on a creature with a melee touch attack. This attack deals 1d6 points of negative energy damage plus a number of points equal to <Link to="/misc/half">half</Link> of your oracle level.</p>
<p>If used against an undead creature, it heals damage and grants a +2 channel resistance for 1 minute.</p>
</Pair>
</Ability>
<Ability id="near-death-su" icon={["def"]}>
<Pair single id="near-death-su">Near Death (Su)</Pair>
<Pair title="Passive Ability">You gain a +2 insight bonus on saves against diseases, mind-affecting effects, and poisons.</Pair>
<Pair title="At 7th Level">This bonus also applies on saves against death effects, sleep effects, and stunning.</Pair>
<Pair title="At 11th Level">The bonus increases to +4.</Pair>
</Ability>
<Ability id="raise-the-dead-su" icon={["magic"]}>
<Pair single id="raise-the-dead-su">Raise the Dead (Su)</Pair>
<Pair title="Standard Action">Once per day, you can summon a single <Link to="/template/skeleton">skeleton</Link> or <Link to="/template/zombie">zombie</Link> to serve you. The undead creature has a number of Hit Dice equal to your oracle level. It remains for a number of rounds equal to your Charisma modifier.</Pair>
<Pair title="At 7th Level">You can summon a <em>bloody skeleton</em> or <em>fast zombie.</em></Pair>
<Pair title="At 10th Level">You can use this ability twice a day.</Pair>
<Pair title="At 15th Level">You can summon an <Link to="/template/advanced">advanced</Link> skeleton or zombie.</Pair>
</Ability>
<Ability id="resist-life-su" icon={["power","down","def"]}>
<Pair single id="resist-life-su">Resist Life (Su)</Pair>
<Pair title="Passive Ability">You are treated as an undead creature when you are targeted by positive or negative energy. You are not subject to <Link to="/feat/turn_undead">Turn Undead</Link> or <Link to="/feat/command_undead">Command Undead</Link> (or any other effect that specifically targets undead), unless you are actually an undead creature.</Pair>
<Pair title="At 7th Level">You receive channel resistance +2.</Pair>
<Pair title="At 11th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="soul-siphon-su" icon={["zap","aid"]}>
<Pair single id="soul-siphon-su">Soul Siphon (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">1 time/day + 1 per four oracle levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability"><p>As a ranged touch attack, you can unleash a ray that causes a target to gain one <Link to="/rule/negative_level">negative level</Link>. The ray has a range of 30 feet. This negative level lasts for a number of minutes equal to your Charisma modifier.</p>
<p>Whenever this ability gives a target a negative level, you heal a number of hit points equal to your oracle level.</p>
</Pair>
</Ability>
<Ability id="spirit-walk-su" icon={["power","def"]}>
<Pair single id="spirit-walk-su">Spirit Walk (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Standard Action">Once per day, you can become incorporeal and invisible. While in this form, you can move in any direction and through any object (except for those made of force). You can take no action other than to move while in this form. You remain in this form for a number of rounds equal to your oracle level, but you can end this effect prematurely with a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 15th Level">You can do this twice a day.</Pair>
</Ability>
<Ability id="undead-servitude-su" icon={["power"]}>
<Pair single id="undead-servitude-su">Undead Servitude (Su)</Pair>
<Pair title="Ability">You gain Command Undead as a bonus feat. You can <Link to="/ability/channel_negative_energy">channel negative energy</Link> (as an evil cleric) a number of times per day equal to 3 + your Charisma modifier, but only to use Command Undead.</Pair>
<Pair title="Special">You can take other feats to add to this ability, such as <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/alignment_channel">Alignment Channel</Link>.</Pair>
</Ability>
<Ability id="voice-of-the-grave-su" icon={["magic"]}>
<Pair single id="voice-of-the-grave-su">Voice of the Grave (Su)</Pair>
<Pair title="Usage">1 round/day per oracle level; these rounds need not be consecutive</Pair>
<Pair title="Ability">You can <Link to="/spell/speak_with_dead">speak with dead</Link>, as per the spell.</Pair>
<Pair title="At 5th Level">The dead creature you question takes -2 penalty on its Will save to resist this effect.</Pair>
<Pair title="At 10th Level">The penalty becomes -4.</Pair>
<Pair title="At 15th Level">The penalty increases to -6.</Pair>
<Pair title="At 20th Level">The penalty becomes -8.</Pair>
</Ability>
<h3 id="mystery-bones-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["magic","def"]}>
<Pair single id="final-revelation" flavor="You become a master of death.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Free Action">Once per round, you can cast <Link to="/spell/bleed">bleed</Link> or <Link to="/spell/stabilize">stabilize</Link>.</Pair>
<Pair title="Passive Ability">If you are brought to below 0 hit points, you automatically stabilize.</Pair>
<Pair title="Ability">You can cast <em>animate dead</em> at will without paying a material component cost (although you are still subject to the usual Hit Die control limit).</Pair>
<Pair title="Ability">Once per day, you can cast <Link to="/spell/power_word_kill">power word kill</Link>, but the spell can target a creature with 150 hit points or less.</Pair>
</Ability>
</>};
const _dark_tapestry = {hasJL:true,title: "Dark Tapestry", jsx: <><div className="jumpList" id="mystery-dark_tapestry-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-dark_tapestry-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-dark_tapestry-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-dark_tapestry-dark-tapestry">Dark Tapestry</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 54</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/entropic_shield">Entropic shield</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dust_of_twilight">Dust of twilight</Link></Pair>
<Pair plain title="6th"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="8th"><Link to="/spell/black_tentacles">Black tentacles</Link></Pair>
<Pair plain title="10th"><Link to="/spell/feeblemind">Feeblemind</Link></Pair>
<Pair plain title="12th"><Link to="/spell/planar_binding">Planar binding</Link></Pair>
<Pair plain title="14th"><Link to="/spell/insanity">Insanity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/reverse_gravity">Reverse gravity</Link></Pair>
<Pair plain title="18th"><Link to="/spell/interplanetary_teleport">Interplanetary teleport</Link></Pair>
</Ability>
<h3 id="mystery-dark_tapestry-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Dark Tapestry mystery can choose from any of the following revelations.</p>
<Ability id="brain-drain-su" icon={["magic"]}>
<Pair single id="brain-drain-su">Brain Drain (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action"><p>You can violently probe the mind of a single intelligent enemy within 100 feet. The target receives a Will save to negate the effect and immediately knows the source of this harmful mental prying. Those who fail this save are wracked with pain, taking 1d4 points of damage for every oracle level you possess.</p>
<p>After successfully attacking with this ability, you may use a <strong className="hl">full-round action</strong> to sort through the jumble of stolen thoughts and memories to make a single <Link to="/skill/knowledge">Knowledge</Link> check using the victim's skill bonus.</p>
</Pair>
<Pair title="Special">The randomly stolen thoughts remain in your mind for a number of rounds equal to your Charisma modifier. Treat the knowledge gained as if you had used <Link to="/spell/detect_thoughts">detect thoughts</Link>. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="cloak-of-darkness-su" icon={["def"]}>
<Pair single id="cloak-of-darkness-su">Cloak of Darkness (Su)</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">You conjure a cloak of shadowy darkness that grants you a +4 armor bonus and a +2 circumstance bonus on <Link to="/skill/stealth">Stealth</Link> checks.</Pair>
<Pair title="At 7th Level">These bonuses become +6 and +4, respectively.</Pair>
<Pair title="At 11th Level">These bonuses become +8 and +6, respectively.</Pair>
<Pair title="At 15th Level">These bonuses become +10 and +8, respectively.</Pair>
<Pair title="At 19th Level">These bonuses become +12 and +10, respectively.</Pair>
</Ability>
<Ability id="dweller-in-darkness-sp" icon={["magic"]}>
<Pair single id="dweller-in-darkness-sp">Dweller in Darkness (Sp)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Ability">Once per day, you cast your psyche into the void of space to attract the attention of a terrible otherworldly being. The <em>dweller in darkness</em> behaves in all ways as if you had cast <Link to="/spell/phantasmal_killer">phantasmal killer</Link>.</Pair>
<Pair title="At 17th Level">The <em>dweller in darkness</em> can be perceived by more than one creature, as if you had cast <Link to="/spell/weird">weird</Link>.</Pair>
</Ability>
<Ability id="gift-of-madness-su" icon={["lower"]}>
<Pair single id="gift-of-madness-su">Gift of Madness (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">You tap into the unthinkable void between the stars and cause a single living creature within 30 feet to become <Link to="/misc/confused">confused</Link> for 1 round. A successful Will save negates the effect.</Pair>
<Pair title="At 7th Level">The confusion lasts for a number of rounds equal to your oracle level.</Pair>
<Pair title="Special">This is a mind-affecting compulsion effect.</Pair>
</Ability>
<Ability id="interstellar-void-su" icon={["magic","lower"]}>
<Pair single id="interstellar-void-su" flavor="You call upon the frigid depths of outer space to bring a terrible chill to your enemies.">Interstellar Void (Su)</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Standard Action">One target within 30 feet is cloaked in the void and takes 1d6 points of cold damage for every oracle level you possess. A successful Fortitude save halves this damage.</Pair>
<Pair title="At 10th Level">You can use this ability twice a day.</Pair>
<Pair title="At 15th Level">A creature that fail its save is <Link to="/misc/exhausted">exhausted</Link> and <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
</Ability>
<Ability id="many-forms-su" icon={["magic"]}>
<Pair single id="many-forms-su">Many Forms (Su)</Pair>
<Pair title="Prerequisites">3rd-level oracle</Pair>
<Pair title="Usage">1 minute/day per oracle level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">You can assume the form of a Small or Medium humanoid, as the <Link to="/spell/alter_self">alter self</Link> spell.</Pair>
<Pair title="At 7th Level">You can assume the form of a Small or Medium animal, as <Link to="/spell/beast_shape_i">beast shape I</Link>.</Pair>
<Pair title="At 11th Level">You can assume the form of a Small or Medium magical beast, as <Link to="/spell/beast_shape_iii">beast shape III</Link>.</Pair>
<Pair title="At 15th Level">You can assume a variety of forms, as <Link to="/spell/greater_polymorph">greater polymorph</Link>.</Pair>
</Ability>
<Ability id="pierce-the-veil-su" icon={["power"]}>
<Pair single id="pierce-the-veil-su" flavor="Your bond with the alien denizens of the Dark Tapestry allows you to see in even the deepest darkness.">Pierce the Veil (Su)</Pair>
<Pair title="Ability">You gain darkvision 60 feet.</Pair>
<Pair title="At 11th Level">You can see perfectly in darkness of any kind, even in absolute darkness or the darkness created by a <Link to="/spell/deeper_darkness">deeper darkness</Link> spell.</Pair>
</Ability>
<Ability id="read-the-tapestry-sp" icon={["magic"]}>
<Pair single id="read-the-tapestry-sp">Read the Tapestry (Sp)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Ability">Once per day, you can spend 10 minutes meditating on the mysteries of the Dark Tapestry to send your mind to another plane and communicate with the strange or alien beings there. This functions as the <Link to="/spell/contact_other_plane">contact other plane</Link> spell.</Pair>
</Ability>
<Ability id="touch-of-the-void-su" icon={["touch"]}>
<Pair single id="touch-of-the-void-su">Touch of the Void (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">You can perform a melee touch attack that deals 1d6 points of cold damage + 1 point for every two oracle levels you possess.</Pair>
<Pair title="At 7th Level">The touched creature must also make a Fortitude saving throw or be <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to <Link to="/misc/half">half</Link> your oracle level. This has no effect on a creature that is already fatigued.</Pair>
</Ability>
<Ability id="wings-of-darkness-su" icon={["power"]}>
<Pair single id="wings-of-darkness-su">Wings of Darkness (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">1 minute/day per oracle level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">You can manifest a set of translucent, inky wings that grant you a fly speed of 60 feet with good maneuverability.</Pair>
<Pair title="At 11th Level">You can use these wings to fly as if with <Link to="/spell/overland_flight">overland flight</Link> once per day. Used in this way, the ability lasts for up to 1 hour per level, and counts as your total use of this ability for the day.</Pair>
</Ability>
<h3 id="mystery-dark_tapestry-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["def","magic"]}>
<Pair single id="final-revelation" flavor="You become a truly alien and unnatural creature.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain damage reduction 5/- and immunity to acid, critical hits, and sneak attacks.</Pair>
<Pair title="Ability">Once per day, you can cast <Link to="/spell/shapechange">shapechange</Link> as a spell-like ability without requiring a material component.</Pair>
</Ability>
</>};
const _dragon = {hasJL:true,title: "Dragon", jsx: <><div className="jumpList" id="mystery-dragon-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-dragon-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-dragon-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-dragon-dragon">Dragon</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 8</Link></p>
<p>Oracles who draw their power from the mysterious and primal might of dragons are usually solitary folk. They are deep thinkers and often quick of wit, but prideful and equally quick-tempered.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/dahak">Dahak</Link>, <Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/ragadahn">Ragadahn</Link>, <Link to="/faith/shizuru">Shizuru</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT)</Pair>
<Pair title="Special">The oracle can take ranks in Fly even if she does not have a method of flying under her own power.</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fly">Fly</Link></Pair>
<Pair plain title="8th"><Link to="/spell/fear">Fear</Link></Pair>
<Pair plain title="10th"><Link to="/spell/spell_resistance">Spell resistance</Link></Pair>
<Pair plain title="12th"><Link to="/spell/antimagic_field">Antimagic field</Link></Pair>
<Pair plain title="14th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="16th"><Link to="/spell/form_of_the_dragon_iii">Form of the dragon III</Link></Pair>
<Pair plain title="18th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
</Ability>
<Ability id="energy-type" icon={["warning"]}>
<Pair single id="energy-type">Energy Type</Pair>
<Pair title="Choice">Upon selecting this mystery, the oracle must select an energy type (acid, cold, electricity, or fire) to be her associated element, which impacts several revelations.</Pair>
</Ability>
<h3 id="mystery-dragon-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Dragon mystery can choose from any of the following revelations.</p>
<Ability id="breath-weapon-su" icon={["cone","line"]}>
<Pair single id="breath-weapon-su" flavor="The primal power of dragonkind seethes within you.">Breath Weapon (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">You gain a <Link to="/umr/breath_weapon">breath weapon</Link>. This breath weapon deals 1d6 points of damage of your energy type per 2 oracle levels you have (minimum 1d6; Reflex half). The shape of the breath weapon is either a 30-foot cone or a 60-foot line, selected when choosing this revelation.</Pair>
</Ability>
<Ability id="draconic-resistance-ex" icon={["def"]}>
<Pair single id="draconic-resistance-ex" flavor="Like the great dragons, you are not easily harmed by common means of attack.">Draconic Resistance (Ex)</Pair>
<Pair title="Passive Ability">You gain resistance 5 against your chosen energy type and a +1 natural armor bonus.</Pair>
<Pair title="At 9th Level">Your energy resistance increases to 10 and your natural armor bonus increases to +2.</Pair>
<Pair title="At 15th Level">Your energy resistance increases to 20 and your natural armor bonus increases to +4</Pair>
</Ability>
<Ability id="dragon-magic-sp" icon={["learn"]}>
<Pair single id="dragon-magic-sp" flavor="Your draconic power grants you a limited form of access to arcane magic.">Dragon Magic (Sp)</Pair>
<Pair title="Ability">Select one spell from the <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link> that is 2 levels lower than the highest-level spell you can cast, or two spells that are both at least 3 levels lower. You can cast each of the selected spells once per day as a spell-like ability.</Pair>
<Pair title="At 11th Level">You can cast each selected spell twice per day.</Pair>
</Ability>
<Ability id="dragon-senses-ex" icon={["power"]}>
<Pair single id="dragon-senses-ex" flavor="Your senses take on a keen draconic edge.">Dragon Senses (Ex)</Pair>
<Pair title="Ability">You gain either darkvision with a range of 60 feet or low-light vision.</Pair>
<Pair title="At 5th Level">You can select darkvision with a range of 60 feet or low-light vision if you do not yet have both, or you can add 60 feet to the range of your darkvision.</Pair>
<Pair title="At 11th Level">You gain <Link to="/umr/blindsense">blindsense</Link> with a range of 30 feet. If you already have blindsense, you instead increase its range by 30 feet.</Pair>
<Pair title="At 15th Level">You gain either the <Link to="/umr/scent">scent</Link> ability or a +4 bonus on <Link to="/skill/perception">Perception</Link> checks.</Pair>
</Ability>
<Ability id="form-of-the-dragon-su" icon={["magic"]}>
<Pair single id="form-of-the-dragon-su" flavor="Your kinship with dragonkind allows you to take on the form of a dragon.">Form of the Dragon (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Standard Action">You can assume the form of a Medium dragon, as per <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>. You can use this ability once per day, but the duration is 10 minutes per oracle level.</Pair>
<Pair title="At 15th Level">You can assume the form of a Large dragon, as per <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>. If you choose to have this ability function as per <em>form of the dragon I,</em> the duration is instead 1 hour per oracle level.</Pair>
<Pair title="At 19th Level">You can assume the form of a Huge dragon, as per <em>form of the dragon III.</em></Pair>
<Pair title="Special">Rather than <em>form of the dragon</em> spells, you can choose for this revelation to act as <Link to="/spell/form_of_the_alien_dragon_1">form of the alien dragon</Link> or <Link to="/spell/form_of_the_exotic_dragon_1">form of the exotic dragon</Link>. This choice must be made when you first gain this revelation, and cannot be changed.</Pair>
</Ability>
<Ability id="presence-of-dragons-su" icon={["aura"]}>
<Pair single id="presence-of-dragons-su" flavor="Those who would oppose you must overcome their fear of dragons or be struck with terror at your draconic majesty.">Presence of Dragons (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">You can manifest an aura of draconic might around yourself. Enemies within 30 feet who can see you when you activate this ability must attempt a Will save. Success means that the creature is immune to this ability for the following 24 hours. On a failed save, the opponent is <Link to="/misc/shaken">shaken</Link> for 2d6 rounds.</Pair>
<Pair title="Special">This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="scaled-toughness-su" icon={["def"]}>
<Pair single id="scaled-toughness-su" flavor="You can manifest the scaly toughness of dragonkind.">Scaled Toughness (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Swift Action">Once per day, you can harden your skin, giving it a scaly appearance and granting you DR 10/magic. During this time, you are also immune to paralysis and sleep effects. This effect lasts for a number of rounds equal to your oracle level.</Pair>
<Pair title="At 13th Level">You can use this ability twice per day.</Pair>
</Ability>
<Ability id="tail-swipe-ex" icon={["power","melee"]}>
<Pair single id="tail-swipe-ex" flavor="You express your wrath through sweeps of a wicked tail.">Tail Swipe (Ex)</Pair>
<Pair title="Ability">You can grow a scaly tail. This tail can be used only to make attacks of opportunity, but it allows you to make one additional attack of opportunity each round. This tail attack deals an amount of bludgeoning damage equal to 1d8 (1d6 if you are Small) + your Strength modifier.</Pair>
<Pair title="At 10th Level">You can attempt a free <Link to="/rule/trip">trip</Link> combat maneuver check against any creature damaged by your tail attack. This does not provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="talons-of-the-dragon-su" icon={["melee"]}>
<Pair single id="talons-of-the-dragon-su" flavor="You fight with the fearsome talons of dragonkind.">Talons of the Dragon (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="Free Action">You can grow claws. These claws are treated as <Link to="/rule/natural_weapons">natural weapons</Link>, allowing you to perform two claw attacks as a full attack action using your full base attack bonus. Each of these attacks deals an amount of slashing damage equal to 1d4 (1d3 if you are Small) + your Strength modifier.</Pair>
<Pair title="At 5th Level">These claws are considered magic weapons for the purpose of overcoming DR.</Pair>
<Pair title="At 7th Level">The damage die increases <Link to="/misc/by_one_step">by one step</Link>, to deal an amount of slashing damage equal to 1d6 (1d4 if you are Small) + your Strength modifier.</Pair>
<Pair title="At 11th Level">These claws deal an additional 1d6 points of damage of your chosen energy type on a successful hit.</Pair>
</Ability>
<Ability id="wings-of-the-dragon-su" icon={["power"]}>
<Pair single id="wings-of-the-dragon-su" flavor="Like the great dragons, you can take to the skies and terrorize opponents from above.">Wings of the Dragon (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Swift Action">You can manifest leathery dragon wings that grant you a fly speed of 60 feet (clumsy maneuverability). You can use these wings for 1 minute per day for each oracle level you have. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</Pair>
<Pair title="At 10th Level">Your maneuverability increases to poor.</Pair>
<Pair title="At 11th Level">You can use these wings for 10 minutes per day for each oracle level you have.</Pair>
<Pair title="At 15th Level">You can use the wings indefinitely.</Pair>
</Ability>
<h3 id="mystery-dragon-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["def","power","boost"]}>
<Pair single id="final-revelation" flavor="Your draconic destiny unfolds.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain immunity to paralysis, sleep, and damage of your energy type. You count as a dragon for the purposes of spells and magical effects.</Pair>
<Pair title="Special">If you have the <em>breath weapon</em> revelation, you can use your breath weapon an unlimited number of times per day, though no more often than once every 1d4+1 rounds.</Pair>
</Ability>
</>};
const _elemental = {hasJL:true,title: "Elemental", jsx: <><div className="jumpList" id="mystery-elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-elemental-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-elemental-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-elemental-elemental">Elemental</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 28</Link></p>
<p>Elemental oracles gain their powers from forces that balance or blend elements together.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/main/faiths_pantheons">Elemental Lords</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/yamatsumi">Yamatsumi</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="4th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="6th"><Link to="/spell/elemental_aura">Elemental aura</Link></Pair>
<Pair plain title="8th"><Link to="/spell/elemental_body_i">Elemental body I</Link></Pair>
<Pair plain title="10th"><Link to="/spell/elemental_body_ii">Elemental body II</Link></Pair>
<Pair plain title="12th"><Link to="/spell/elemental_body_iii">Elemental body III</Link></Pair>
<Pair plain title="14th"><Link to="/spell/elemental_body_iv">Elemental body IV</Link></Pair>
<Pair plain title="16th"><Link to="/spell/create_demiplane">Create demiplane</Link></Pair>
<Pair plain title="18th"><Link to="/spell/elemental_swarm">Elemental swarm</Link></Pair>
</Ability>
<h3 id="mystery-elemental-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Elemental mystery can choose from any of the following revelations.</p>
<Ability id="dance-of-whirling-water-ex" icon={["boost","power"]}>
<Pair single id="dance-of-whirling-water-ex" flavor="You dance through the battlefield with all the grace and power of the waves, sweeping up enemies and tossing them away with the powers of air and water entwined.">Dance of Whirling Water (Ex)</Pair>
<Pair title="Ability">Whenever you succeed at an <Link to="/skill/acrobatics">Acrobatics</Link> check to move through an enemy's square, you gain a competence bonus equal to half your oracle level (minimum +1) on <Link to="/rule/trip">trip</Link> combat maneuvers against that creature until the start of your next turn.</Pair>
<Pair title="At 11th Level">You gain <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> as a bonus feat, and you can make <Link to="/rule/bull_rush">bull rush</Link> combat maneuvers in place of any of the attacks granted by Whirlwind Attack; you cannot move with enemies bull rushed this way.</Pair>
</Ability>
<Ability id="desert-mirage-su" icon={["def","boost"]}>
<Pair single id="desert-mirage-su" flavor="Air and fire shroud you from your enemies' vision and superheat your strikes in combat.">Desert Mirage (Su)</Pair>
<Pair title="Prerequisites">3rd-level oracle</Pair>
<Pair title="Usage">1 minute/day per oracle level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">You can surround yourself with heated air, gaining <Link to="/rule/concealment">concealment</Link> (as per the <Link to="/spell/blur">blur</Link> spell).</Pair>
<Pair title="At 7th Level">While you are using this ability, your melee attacks each deal an additional 2 points of fire damage.</Pair>
</Ability>
<Ability id="elemental-aegis-su" icon={["def"]}>
<Pair single id="elemental-aegis-su">Elemental Aegis (Su)</Pair>
<Pair title="Choice">When you take this revelation, choose one element: air, earth, fire, or water.</Pair>
<Pair title="Ability">You can conjure an enveloping, protective force made of this element that grants you a +4 armor bonus to AC (this manifests as a solid rush of air over your body, rocky plates covering your skin, and the like).</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="At 7th Level">The AC bonus becomes +6.</Pair>
<Pair title="At 11th Level">The AC bonus increases to +8.</Pair>
<Pair title="At 13th Level">At 13th level, you receive an additional boon depending on the element you chose. If you chose air, you gain a +2 bonus on Reflex saving throws. If you chose earth, you gain a +2 bonus to CMD. If you chose fire, you gain fire <Link to="/umr/resistance">resistance</Link> 2 (this stacks with any other fire resistance you have). If you chose water, you gain a +4 bonus on <Link to="/skill/swim">Swim</Link> checks.</Pair>
<Pair title="At 15th Level">The AC bonus becomes +10.</Pair>
<Pair title="At 19th Level">The AC bonus increases to +12.</Pair>
</Ability>
<Ability id="elemental-allies-su" icon={["boost"]}>
<Pair single id="elemental-allies-su" flavor="The beings tied to the fundamental elements can hear your calls plainly when you seek aid from them.">Elemental Allies (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">1 time/day per oracle level</Pair>
<Pair title="Ability">When casting <Link to="/spell/summon_monster">summon monster</Link> spells to summon elementals with the air, earth, fire, or water subtype, you can cast the spell as a <strong className="hl">standard action</strong> instead of a casting time of 1 round.</Pair>
</Ability>
<Ability id="elemental-channeling-su" icon={["power"]}>
<Pair single id="elemental-channeling-su" flavor="You can heal and harm elemental beings.">Elemental Channeling (Su)</Pair>
<Pair title="Ability">You gain <Link to="/feat/elemental_channel">Elemental Channel</Link> (your choice of air, earth, fire, or water) as a bonus feat. You gain the cleric's <Link to="/ability/channel_energy">channel energy</Link> ability, as a cleric of your oracle level, but only to use Elemental Channel. The DC for this effect is 10 + half your oracle level + your Charisma modifier.</Pair>
<Pair title="At 5th Level">You gain Elemental Channel with one of the remaining elemental subtypes as a bonus feat.</Pair>
<Pair title="At 10th Level">You gain Elemental Channel with one of the remaining elemental subtypes as a bonus feat.</Pair>
<Pair title="At 15th Level">You gain Elemental Channel with the last remaining elemental subtype as a bonus feat.</Pair>
<Pair title="Special">You can take other feats to add to this ability, such as <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/alignment_channel">Alignment Channel</Link>. This revelation's effects do not stack with levels in other classes that grant the <em>channel energy</em> ability.</Pair>
</Ability>
<Ability id="elemental-resistance-ex" icon={["def"]}>
<Pair single id="elemental-resistance-ex" flavor="The forces of the Elemental Planes envelop and inure your flesh against hostile energy.">Elemental Resistance (Ex)</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 2 to acid, cold, electricity, and fire (this stacks with any other resistance you have of that type).</Pair>
<Pair title="At 7th Level">This resistance increases to 5.</Pair>
<Pair title="At 11th Level">The resistance becomes 10.</Pair>
<Pair title="At 17th Level">The resistance increases to 20.</Pair>
</Ability>
<Ability id="flowing-step-ex-or-su" icon={["boost"]}>
<Pair single id="flowing-step-ex-or-su" flavor="Fire's hunger and water's flow grant you swiftness and elegance, and you move with breathtaking purpose and grace.">Flowing Step (Ex or Su)</Pair>
<Pair title="Prerequisites">Cannot have the <Link to="/oraclecurse/lame">lame</Link> oracle curse.</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">You can increase your base speed by 10 feet.</Pair>
<Pair title="At 7th Level">While using this ability, you can use <Link to="/skill/acrobatics">Acrobatics</Link> to move at full speed through threatened squares or other creatures' squares without increasing the DC by 10.</Pair>
<Pair title="At 11th Level">While using this ability, you can walk on liquid as if using <Link to="/spell/water_walk">water walk</Link>, and you are immune to damage caused by proximity to (but not immersion in) lava, magma, and similarly heated stone.</Pair>
</Ability>
<Ability id="reforged-arms-su" icon={["boost"]}>
<Pair single id="reforged-arms-su" flavor="The forge's fire turns earthen ore into useful metal, and you can hone weapons in the same way.">Reforged Arms (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">You can touch a metal or stone weapon and transform it into a <Link to="/rule/masterwork_w">masterwork</Link> equivalent if it is not already a masterwork or magical weapon.</Pair>
<Pair title="At 3rd Level">You can also have the weapon act as if it were made of alchemical silver or cold iron (your choice when you activate this ability) for the purpose of bypassing damage reduction.</Pair>
<Pair title="At 7th Level">The weapon gains a +1 enhancement bonus, though this bonus does not stack with any enhancement bonus the weapon already has.</Pair>
<Pair title="At 11th Level">You can have the weapon act as if it were made of <Link to="/eq-material/adamantine">adamantine</Link> rather than of alchemical silver or cold iron.</Pair>
<Pair title="At 15th Level">The enhancement bonus becomes +2.</Pair>
<Pair title="At 19th Level">The enhancement bonus increases to +3.</Pair>
<Pair title="Special">This effect lasts for 1 minute per oracle level.</Pair>
</Ability>
<Ability id="roiling-soil-su" icon={["aura","lower"]}>
<Pair single id="roiling-soil-su" flavor="Combining your mastery of earth and water, you shape the battlefield in your favor, bending the terrain to benefit you and your allies and hinder any who might oppose you.">Roiling Soil (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability"><p>The ground within 5 feet per 2 oracle levels you have shifts and rolls unpredictably; if you use this ability underwater, the surrounding waters churn. This area moves with you, and you and your allies are unaffected by the roiling terrain.</p>
<p>Other creatures can move within the area at half speed with a successful DC 10 <Link to="/skill/acrobatics">Acrobatics</Link> check. Failure means they stop moving for the round, while failure by 5 or more causes them to fall <Link to="/rule/prone">prone</Link>; if underwater, creatures gain the effects of being <Link to="/rule/off_balance">off-balance</Link> instead of falling prone.</p>
<p>This effect lasts a number of rounds equal to your oracle level.</p>
</Pair>
</Ability>
<Ability id="sweeping-impact-ex" icon={["melee","boost"]}>
<Pair single id="sweeping-impact-ex" flavor="You can shake the earth and buffet foes with the roaring force of wind you draw from the Elemental Plane of Air.">Sweeping Impact (Ex)</Pair>
<Pair title="Ability">When performing a <Link to="/rule/bull_rush">bull rush</Link> as part of a <Link to="/rule/charge">charge</Link>, if you push the target at least 5 feet, you can attempt a <Link to="/rule/trip">trip</Link> combat maneuver against that creature as a <strong className="hl">free action</strong>. You are not tripped if you fail this check by 10 or more.</Pair>
<Pair title="At 7th Level">You can bull rush or trip creatures two size categories larger than you.</Pair>
<Pair title="At 11th Level">You can bull rush or trip creatures three size categories larger than you.</Pair>
<Pair title="At 15th Level">You can bull rush or trip creatures four size categories larger than you.</Pair>
<Pair title="At 19th Level">You can bull rush or trip creatures five size categories larger than you.</Pair>
</Ability>
<h3 id="mystery-elemental-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["power","def"]}>
<Pair single id="final-revelation" flavor="Your body undergoes an internal elemental shift, and you become a living conduit of the Elemental Planes.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Your external appearance remains the same, although you may take on certain cosmetic elemental traits (such as smoldering hair or pebble-like skin). You become immune to critical hits and <Link to="/misc/precision_damage">precision damage</Link> such as from sneak attacks. You no longer need to breathe, eat, or sleep.</Pair>
</Ability>
</>};
const _flame = {hasJL:true,title: "Flame", jsx: <><div className="jumpList" id="mystery-flame-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-flame-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-flame-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-flame-flame">Flame</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 47</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/perform">Perform</Link> (CHA)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/burning_hands">Burning hands</Link></Pair>
<Pair plain title="4th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fireball">Fireball</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wall_of_fire">Wall of fire</Link></Pair>
<Pair plain title="10th"><Link to="/spell/summon_monster_v">Summon monster V</Link> (fire elementals only)</Pair>
<Pair plain title="12th"><Link to="/spell/fire_seeds">Fire seeds</Link></Pair>
<Pair plain title="14th"><Link to="/spell/fire_storm">Fire storm</Link></Pair>
<Pair plain title="16th"><Link to="/spell/incendiary_cloud">Incendiary cloud</Link></Pair>
<Pair plain title="18th"><Link to="/spell/fiery_body">Fiery body</Link></Pair>
</Ability>
<h3 id="mystery-flame-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Flame mystery can choose from any of the following revelations.</p>
<Ability id="burning-magic-su" icon={["boost"]}>
<Pair single id="burning-magic-su">Burning Magic (Su)</Pair>
<Pair title="Ability"><p>Whenever a creature fails a saving throw and takes fire damage from one of your spells, it <Link to="/rule/catches_on_fire">catches on fire</Link>. This fire deals 1 point of fire damage per spell level at the beginning of the burning creature's turn.</p>
<p>The fire lasts for 1d4 rounds, but it can be extinguished as a <strong className="hl">move action</strong> if the creature succeeds at a Reflex save (using the spell's DC). Dousing the creature with water as a <strong className="hl">standard action</strong> grants a +2 bonus on this save, while immersing the creature in water automatically extinguishes the fire.</p>
</Pair>
<Pair title="Special">Spells that do not grant a save do not cause a creature to catch on fire.</Pair>
</Ability>
<Ability id="cinder-dance-ex" icon={["boost","power"]}>
<Pair single id="cinder-dance-ex">Cinder Dance (Ex)</Pair>
<Pair title="Prerequisites">Cannot have the <Link to="/oraclecurse/lame">lame</Link> oracle curse.</Pair>
<Pair title="Passive Ability">Your base speed increases by 10 feet.</Pair>
<Pair title="At 5th Level">You receive <Link to="/feat/nimble_moves">Nimble Moves</Link> as a bonus feat.</Pair>
<Pair title="At 10th Level">You receive <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link> as a bonus feat.</Pair>
<Pair title="Special">You do not need to meet the prerequisites to receive these feats.</Pair>
</Ability>
<Ability id="fire-breath-su" icon={["cone"]}>
<Pair single id="fire-breath-su">Fire Breath (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">You can unleash a 15-foot cone of flame from your mouth. This flame deals 1d4 points of fire damage per level. A Reflex save halves this damage.</Pair>
<Pair title="Special">The save DC is Charisma-based.</Pair>
</Ability>
<Ability id="firestorm-su" icon={["magic"]}>
<Pair single id="firestorm-su" flavor="You can cause fire to erupt around you.">Firestorm (Su)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Standard Action">You can create one 10-foot cube of fire per oracle level. These cubes can be arranged in any pattern you desire, but each cube must be adjacent to another and one must be adjacent to you. Any creature caught in these flames takes 1d6 points of fire damage per oracle level, with a Reflex save resulting in half damage. This fire lasts for a number of rounds equal to your Charisma modifier.</Pair>
</Ability>
<Ability id="form-of-flame-su" icon={["magic"]}>
<Pair single id="form-of-flame-su">Form of Flame (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Standard Action">You can assume the form of a Small fire elemental, as <Link to="/spell/elemental_body_i">elemental body I</Link>.</Pair>
<Pair title="At 9th Level">You can assume the form of a Medium fire elemental, as <Link to="/spell/elemental_body_ii">elemental body II</Link>.</Pair>
<Pair title="At 11th Level">You can assume the form of a Large fire elemental, as <Link to="/spell/elemental_body_iii">elemental body III</Link>.</Pair>
<Pair title="At 13th Level">You can assume the form of a Huge fire elemental, as <Link to="/spell/elemental_body_iv">elemental body IV</Link>.</Pair>
<Pair title="Special">This lasts an hour per oracle level.</Pair>
</Ability>
<Ability id="gaze-of-flames-su" icon={["power","magic"]}>
<Pair single id="gaze-of-flames-su">Gaze of Flames (Su)</Pair>
<Pair title="Ability">You can see through fire, fog, and smoke without penalty as long as the light is sufficient to allow you to see normally.</Pair>
<Pair title="At 7th Level">You can gaze through any source of flame within 10 feet per oracle level, as if using <Link to="/spell/clairvoyance">clairvoyance</Link>. You can use this ability for a number of rounds per day equal to your oracle level, but these rounds do not need to be consecutive.</Pair>
</Ability>
<Ability id="heat-aura-su" icon={["aura","def"]}>
<Pair single id="heat-aura-su">Heat Aura (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">You can cause waves of heat to radiate from your body. This heat deals 1d4 points of fire damage per two oracle levels (minimum 1d4) to all creatures within 10 feet. A Reflex save halves the damage. In addition, your form wavers and blurs, granting you 20% <Link to="/rule/concealment">concealment</Link> until your next turn. You can use this ability once per day, plus one additional time per day at 5th level and every five levels thereafter.</Pair>
</Ability>
<Ability id="molten-skin-ex" icon={["def"]}>
<Pair single id="molten-skin-ex">Molten Skin (Ex)</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resist">resist</Link> fire 5.</Pair>
<Pair title="At 5th Level">This resistance increases to 10.</Pair>
<Pair title="At 11th Level">The resistance becomes 20.</Pair>
<Pair title="At 17th Level">You gain immunity to fire.</Pair>
</Ability>
<Ability id="touch-of-flame-su" icon={["touch","boost"]}>
<Pair single id="touch-of-flame-su">Touch of Flame (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">You can perform a melee touch attack that deals 1d6 points of fire damage plus an additional amount of points equal to <Link to="/misc/half">half</Link> of your oracle level.</Pair>
<Pair title="At 11th Level">Any weapon that you wield is treated as a <Link to="/magic-enh/flaming">flaming</Link> weapon.</Pair>
</Ability>
<Ability id="wings-of-fire-su" icon={["power"]}>
<Pair single id="wings-of-fire-su">Wings of Fire (Su)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Usage">1 minute/day per oracle level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">You can manifest a pair of fiery wings that grant you a fly speed of 60 feet with average maneuverability.</Pair>
</Ability>
<h3 id="mystery-flame-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["boost"]}>
<Pair single id="final-revelation" flavor="You become a master of fire.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You can apply any one of the following feats to any fire spell you cast without increasing the level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. You do not need to possess these feats to use this ability.</Pair>
</Ability>
</>};
const _godclaw = {hasJL:true,title: "Godclaw", jsx: <><div className="jumpList" id="mystery-godclaw-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-godclaw-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-godclaw-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-godclaw-godclaw">Godclaw</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 26</Link></p>
<p>Many Godclaw signifers are oracles who embrace the unique Godclaw mystery. Oracles with the Godclaw mystery often take the <Link to="/oraclecurse/clouded_vision">clouded vision</Link> or <Link to="/oraclecurse/legalistic">legalistic</Link> curses.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/torag">Torag</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/daze_monster">Daze monster</Link></Pair>
<Pair plain title="6th"><Link to="/spell/hold_person">Hold person</Link></Pair>
<Pair plain title="8th"><Link to="/spell/orders_wrath">Order's wrath</Link></Pair>
<Pair plain title="10th"><Link to="/spell/break_enchantment">Break enchantment</Link></Pair>
<Pair plain title="12th"><Link to="/spell/forceful_hand">Forceful hand</Link></Pair>
<Pair plain title="14th"><Link to="/spell/dictum">Dictum</Link></Pair>
<Pair plain title="16th"><Link to="/spell/shield_of_law">Shield of law</Link></Pair>
<Pair plain title="18th"><Link to="/spell/imprisonment">Imprisonment</Link></Pair>
</Ability>
<h3 id="mystery-godclaw-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Godclaw mystery can choose from any of the following revelations.</p>
<Ability id="abadars-boon-sp" icon={["magic"]}>
<Pair single id="abadars-boon-sp">Abadar's Boon (Sp)</Pair>
<Pair title="Usage">1 minute/day per oracle level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">You can spend 1 minute meditating on and communing with a masterwork object of any type. At the end of this time, you can speak with that item. This functions as per <Link to="/spell/stone_tell">stone tell</Link>, except that it works with masterwork goods, and the item cannot tell you what it covers or conceals if that question is not applicable to it.</Pair>
</Ability>
<Ability id="asmodeuss-boon-sp" icon={["lower"]}>
<Pair single id="asmodeuss-boon-sp">Asmodeus's Boon (Sp)</Pair>
<Pair title="Ability">Whenever a creature fails a saving throw and takes damage from one of your spells, it is <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to the spell's level. Spells that do not allow saves do not cause creatures to become shaken. This does not stack with other fear effects.</Pair>
</Ability>
<Ability id="armored-mind-su" icon={["def","roll"]}>
<Pair single id="armored-mind-su">Armored Mind (Su)</Pair>
<Pair title="Passive Ability">While you are wearing <Link to="/eq-armor/hellknight_plate">Hellknight plate</Link> or a <Link to="/eq-misc/signifer_mask">signifer mask</Link>, you gain a +2 bonus on Will saving throws to resist mind-affecting effects.</Pair>
<Pair title="At 7th Level">Once per day, you can reroll a Will saving throw against a mind-affecting effect and choose the more favorable result.</Pair>
<Pair title="At 11th Level">The bonus on Will saving throws increases to +4.</Pair>
</Ability>
<Ability id="might-of-the-godclaw-su" icon={["power"]}>
<Pair single id="might-of-the-godclaw-su">Might of the Godclaw (Su)</Pair>
<Pair title="Prerequisites">3rd-level oracle</Pair>
<Pair title="Ability"><p>You gain <Link to="/feat/deific_obedience">Deific Obedience</Link> as a bonus feat, even if you don't meet its prerequisites. When you gain the feat, choose one Godclaw deity (one of the five deities listed above); you can perform that deity's daily obedience to gain its benefits.</p>
<p>Whenever you would gain one of your deity's boons, you can instead gain the benefits of another Godclaw deity's obedience. You can choose to gain the benefits of a maximum of four Godclaw deities' obediences if you choose to forgo all three of your god's boons. You never need to spend more than 1 hour per day to perform your obedience.</p>
</Pair>
</Ability>
<Ability id="instant-armor-su" icon={["power"]}>
<Pair single id="instant-armor-su">Instant Armor (Su)</Pair>
<Pair title="Ability">Choose one type of heavy armor. You gain proficiency in that armor.</Pair>
<Pair title="At 3rd Level">Twice per day as an <strong className="hl">immediate action</strong>, you can instantly don or remove a suit of your chosen armor that you touch, causing it to teleport onto or off of your body.</Pair>
<Pair title="At 11th Level">You can spend 1 minute placing a suit of your chosen armor into an extradimensional space. You can use this ability to immediately don or remove that armor, calling it from or removing it to that extradimensional space. While in the extradimensional space, the armor regains 1 hit point per hour when damaged.</Pair>
</Ability>
<Ability id="iomedaes-boon-su" icon={["boost","def"]}>
<Pair single id="iomedaes-boon-su" flavor="You can call upon your deities to grant you courage.">Iomedae's Boon (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Move-Equivalent Action">You gain a +1 morale bonus on attack rolls, damage rolls, and Will saving throws against fear effects for a number of rounds equal to your Charisma bonus.</Pair>
<Pair title="At 7th Level">This bonus increases to +2.</Pair>
<Pair title="At 14th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="iron-order-sp" icon={["magic"]}>
<Pair single id="iron-order-sp">Iron Order (Sp)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Ability">Once per day, you can issue an order as per <Link to="/spell/suggestion">suggestion</Link>. Any creature of chaotic alignment has difficulty defying your command, taking a -4 penalty on its saving throw to resist it.</Pair>
<Pair title="At 15th Level">Your command function as per <Link to="/spell/mass_suggestion">mass suggestion</Link>. If you are wearing Hellknight plate or a signifer mask, your command's target takes an additional -2 penalty on its saving throw to resist the order (regardless of the target's alignment; this stacks with the penalty chaotic creatures take).</Pair>
</Ability>
<Ability id="iroris-boon-su" icon={["def"]}>
<Pair single id="iroris-boon-su">Irori's Boon (Su)</Pair>
<Pair title="Immediate Action">Once per day, whenever you fail a saving throw that causes you to become blinded, deafened, frightened, panicked, paralyzed, shaken, or stunned, you can attempt that saving throw again with a +4 insight bonus on the roll. You must take the second result, even if it is worse.</Pair>
<Pair title="At 7th Level">You can use this ability twice a day.</Pair>
<Pair title="At 15th Level">You can do this three times a day.</Pair>
</Ability>
<Ability id="resiliency-ex" icon={["def","power"]}>
<Pair single id="resiliency-ex">Resiliency (Ex)</Pair>
<Pair title="Ability">Once per day, when you are brought below 0 hit points but not killed, you can act as if you are <Link to="/misc/disabled">disabled</Link> for 1 round. At the end of your next turn, unless you are brought to above 0 hit points, you immediately fall unconscious and begin <Link to="/misc/dying">dying</Link>.</Pair>
<Pair title="At 7th Level">You gain <Link to="/feat/diehard">Diehard</Link> as a bonus feat, even if you do not meet the prerequisites.</Pair>
<Pair title="At 15th Level">Three times per day, if you are disabled and take a standard action (or any otherwise strenuous action), you avoid taking 1 point of damage if you succeed at a DC 15 Fortitude saving throw.</Pair>
</Ability>
<Ability id="torags-boon-su" icon={["def"]}>
<Pair single id="torags-boon-su">Torag's Boon (Su)</Pair>
<Pair title="Usage">1 minute/day per two oracle levels (minimum 1); these minutes need not be consecutive, but they must be spent in 1-minute increments<ByLevelPop levels={[[1,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="minute" postText="/day" /></Pair>
<Pair title="Standard Action">You can call upon Torag's protection to form a shield around you that blocks incoming attacks. The shield grants a +4 deflection bonus to your Armor Class.</Pair>
<Pair title="At 7th Level">This bonus becomes +5.</Pair>
<Pair title="At 11th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus becomes +7.</Pair>
<Pair title="At 19th Level">The shield also grants you DR 2/chaos.</Pair>
</Ability>
<h3 id="mystery-godclaw-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["magic","boost"]}>
<Pair single id="final-revelation">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You can cast <Link to="/spell/detect_chaos">detect chaos</Link>, <Link to="/spell/detect_law">detect law</Link>, and <Link to="/spell/discern_lies">discern lies</Link> at will as spell-like abilities, using your oracle level as your caster level.</Pair>
<Pair title="Passive Ability">You no longer take armor check penalties for wearing armor, and your armor's maximum Dexterity bonus increases by 5.</Pair>
<Pair title="Ability">Once per day, you can cast <Link to="/spell/crushing_hand">crushing hand</Link> as a spell-like ability without requiring a focus component, treating your oracle level as your caster level. This hand manifests as a massive, spiked gauntlet.</Pair>
</Ability>
</>};
const _heavens = {hasJL:true,title: "Heavens", jsx: <><div className="jumpList" id="mystery-heavens-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="mystery-heavens-revelations">Revelations</InnerLink></li><li><InnerLink toTop to="mystery-heavens-final-revelation">Final Revelation</InnerLink></li></ul></div><h2 id="mystery-heavens-heavens">Heavens</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 47</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/desna">Desna</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/color_spray">Color spray</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hypnotic_pattern">Hypnotic pattern</Link></Pair>
<Pair plain title="6th"><Link to="/spell/daylight">Daylight</Link></Pair>
<Pair plain title="8th"><Link to="/spell/rainbow_pattern">Rainbow pattern</Link></Pair>
<Pair plain title="10th"><Link to="/spell/overland_flight">Overland flight</Link></Pair>
<Pair plain title="12th"><Link to="/spell/chain_lightning">Chain lightning</Link></Pair>
<Pair plain title="14th"><Link to="/spell/prismatic_spray">Prismatic spray</Link></Pair>
<Pair plain title="16th"><Link to="/spell/sunburst">Sunburst</Link></Pair>
<Pair plain title="18th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
<h3 id="mystery-heavens-revelations" data-hash-target>Revelations</h3>
<p>An oracle with the Heavens mystery can choose from any of the following revelations.</p>
<Ability id="awesome-display-su" icon={["lower"]}>
<Pair single id="awesome-display-su" flavor="Your phantasmagoric displays accurately model the mysteries of the night sky, dumbfounding all who behold them.">Awesome Display (Su)</Pair>
<Pair title="Passive Ability">Each creature affected by your illusion (pattern) spells is treated as if its total number of Hit Dice were equal to its number of Hit Dice minus your Charisma modifier (if positive).</Pair>
</Ability>
<Ability id="coat-of-many-stars-su" icon={["def"]}>
<Pair single id="coat-of-many-stars-su">Coat of Many Stars (Su)</Pair>
<Pair title="Usage">1 hour/day per oracle level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">You conjure a coat of starry radiance that grants you a +4 armor bonus.</Pair>
<Pair title="At 7th Level">This bonus becomes +6.</Pair>
<Pair title="At 11th Level">This bonus increases to +8.</Pair>
<Pair title="At 13th Level">This armor grants you DR 5/slashing.</Pair>
<Pair title="At 15th Level">This bonus becomes +10.</Pair>
<Pair title="At 19th Level">This bonus increases to +12.</Pair>
</Ability>
<Ability id="dweller-in-darkness-sp" icon={["magic"]}>
<Pair single id="dweller-in-darkness-sp">Dweller in Darkness (Sp)</Pair>
<Pair title="Prerequisites">11th-level oracle</Pair>
<Pair title="Ability">Once per day, you cast your psyche into the void of space to attract the attention of a terrible otherworldly being. The <em>dweller in darkness</em> behaves in all ways as if you had cast <Link to="/spell/phantasmal_killer">phantasmal killer</Link>.</Pair>
<Pair title="At 17th Level">The <em>dweller in darkness</em> can be perceived by more than one creature, as if you had cast <Link to="/spell/weird">weird</Link>.</Pair>
</Ability>
<Ability id="guiding-star-su" icon={["power","boost"]}>
<Pair single id="guiding-star-su">Guiding Star (Su)</Pair>
<Pair title="Ability">Whenever you can see the open sky at night, you can determine your precise location.</Pair>
<Pair title="Passive Ability">When the night sky is visible to you, you may also add your Charisma modifier to your Wisdom modifier on all Wisdom-based checks.</Pair>
<Pair title="Ability">Once per night while outdoors, you can cast one spell as if it were modified by the <Link to="/feat/empower_spell">Empower Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link> feat without increasing the spell's casting time or level.</Pair>
</Ability>
<Ability id="interstellar-void-su" icon={["magic","lower"]}>
<Pair single id="interstellar-void-su" flavor="You call upon the frigid depths of outer space to bring a terrible chill to your enemies.">Interstellar Void (Su)</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Standard Action">One target within 30 feet is cloaked in the void and takes 1d6 points of cold damage for every oracle level you possess. A successful Fortitude save halves this damage.</Pair>
<Pair title="At 10th Level">You can use this ability twice a day.</Pair>
<Pair title="At 15th Level">A creature that fail its save is <Link to="/misc/exhausted">exhausted</Link> and <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
</Ability>
<Ability id="lure-of-the-heavens-su" icon={["def","power"]}>
<Pair single id="lure-of-the-heavens-su" flavor="Your connection to the skies above is so strong that your feet barely touch the ground.">Lure of the Heavens (Su)</Pair>
<Pair title="At 1st Level">You no longer leave tracks.</Pair>
<Pair title="At 5th Level">You can hover up to 6 inches above the ground or even above liquid surfaces, as if <Link to="/spell/levitate">levitating</Link>.</Pair>
<Pair title="At 10th Level">You gain the ability to <Link to="/spell/fly">fly</Link>, as per the spell, for a number of minutes per day equal to your oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</Pair>
</Ability>
<Ability id="mantle-of-moonlight-su" icon={["def","touch"]}>
<Pair single id="mantle-of-moonlight-su">Mantle of Moonlight (Su)</Pair>
<Pair title="Passive Ability">Your innate understanding of the moon renders you immune to <Link to="/corruption/lycanthropy">lycanthropy</Link>.</Pair>
<Pair title="Ability">As a melee touch attack, you may disrupt a <Link to="/template/lycanthrope">lycanthrope's</Link> connection to the moon. This action automatically forces the lycanthrope into its humanoid form, which it must remain in for a number of rounds equal to your oracle level.</Pair>
<Pair title="At 5th Level">You can use this ability to force others into a <Link to="/spell/rage">rage</Link>, as per the spell, but only a number of times per day equal to <Link to="/misc/one_fifth">one-fifth</Link> of your oracle level. It's still a melee touch attack.</Pair>
</Ability>
<Ability id="moonlight-bridge-su" icon={["magic"]}>
<Pair single id="moonlight-bridge-su">Moonlight Bridge (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Ability">You summon a bridge of shimmering moonlight. The 10-foot-wide span touches the ground at a point adjacent to your position. From this point it can extend in any direction for 10 feet per oracle level. The path persists until you have crossed over the bridge or for 24 hours, whichever is shorter.</Pair>
<Pair title="Special">Should the bridge be attacked, treat it as a <Link to="/spell/wall_of_force">wall of force</Link>.</Pair>
</Ability>
<Ability id="spray-of-shooting-stars-su" icon={["ranged"]}>
<Pair single id="spray-of-shooting-stars-su">Spray of Shooting Stars (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five oracle levels</Pair>
<Pair title="Standard Action">You can unleash a ball of energy that explodes in a 5-foot-radius <Link to="/misc/burst">burst</Link> dealing 1d4 points of fire damage per level. A successful Reflex save halves this damage. This attack has a range of 60 feet.</Pair>
<Pair title="Special">You can fire more than one ball at a time, but creatures caught inside more than one simultaneous explosions only take damage once.</Pair>
</Ability>
<Ability id="star-chart-ex" icon={["magic"]}>
<Pair single id="star-chart-ex" flavor="Your copious notes contain a working model of the night sky expressed in artistic scribbles and arcane mathematical formulae.">Star Chart (Ex)</Pair>
<Pair title="Prerequisites">7th-level oracle</Pair>
<Pair title="Ability">Once per day, you may spend 10 minutes contemplating your star chart to gain the benefit of the spell <Link to="/spell/commune">commune</Link>.</Pair>
</Ability>
<h3 id="mystery-heavens-final-revelation" data-hash-target>Final Revelation</h3>
<Ability id="final-revelation" icon={["def","boost"]}>
<Pair single id="final-revelation" flavor="Your rapport with the heavens grants you perfect harmony with the universe.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You receive a bonus on all saving throws equal to your Charisma modifier. You automatically stabilize if you are below 0 hit points, are immune to fear effects, and automatically confirm all critical hits.</Pair>
<Pair title="Special">Should you die, you are reborn 3 days later in the form of a star child, who matures over the course of 7 days (treat as the <Link to="/spell/reincarnate">reincarnate</Link> spell).</Pair>
</Ability>
<aside><p>There is no such creature or template called "Star Child"; the line was intended as <a href="https://paizo.com/threads/rzs2l366?Oracle-of-Heavens-and-Star-Child#3" data-outgoing>a flavorful way of saying "a reincarnated oracle"</a>.</p>
</aside></>};
const _intrigue = {title: "Intrigue", jsx: <><h2 id="mystery-intrigue-intrigue">Intrigue</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 69</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/charm_person">Charm person</Link></Pair>
<Pair plain title="4th"><Link to="/spell/false_belief">False belief</Link></Pair>
<Pair plain title="6th"><Link to="/spell/suggestion">Suggestion</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sending">Sending</Link></Pair>
<Pair plain title="10th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="12th"><Link to="/spell/symbol_of_persuasion">Symbol of persuasion</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_scrying">Greater scrying</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mind_blank">Mind blank</Link></Pair>
<Pair plain title="18th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
</Ability>
<h3 id="mystery-intrigue-revelations">Revelations</h3>
<p>An oracle with the Intrigue mystery can choose from any of the following revelations.</p>
<p><strong>Assumed Form (Sp):</strong> You can change your appearance at will, as <Link to="/spell/disguise_self">disguise self</Link> with a caster level equal to your oracle level. At 7th level, you can choose to actually transform, which works the same way but counts as a polymorph effect instead of an illusion and doesn't allow a Will save to disbelieve. At 11th level, the ability lasts until you dismiss it or use it again, allowing you to even keep it active while you sleep. At 15th level, when you use this ability as a polymorph effect, you can gain the size bonus to your ability scores and additional racial abilities as if using <Link to="/spell/alter_self">alter self</Link>.</p>
<p><strong>Desire Sight (Sp):</strong> As a standard action, you can learn the desires of any creature you can see within 100 feet, as if you had concentrated until the third round of <Link to="/spell/detect_desires">detect desires</Link>. As usual for detect desires, the target can attempt a Will save to negate the effect. You can use this ability once per day at 1st level, plus one additional time per day at 5th level and for every 5 levels beyond 5th.</p>
<p><strong>Forgotten Presence (Sp):</strong> Once per day as an immediate action, you can cause a creature to forget that you were present for the last minute per oracle level, including forgetting all actions you took during that time, unless it succeeds at a Will save (DC 10 + 1/2 your oracle level + your Charisma modifier). Effects such as <Link to="/spell/modify_memory">modify memory</Link> can restore the lost memories. At 15th level, you can use this ability twice per day. You must be at least 7th level to select this revelation.</p>
<p><strong>Gossip Guru (Sp):</strong> You sit in a web of intrigue like a spider, subtly tracing the course of rumors and gossip in order to understand the ties that bind those around you. You can use the <Link to="/spell/rumormonger">rumormonger</Link> spell once per day as a spell-like ability, using your oracle level as your caster level. Each time you do so, it ends the duration of any previous activation. At 11th level, you can use this ability three times per day, and at 15th level, you can use it at will, but regardless, each use still ends the duration of any previous activation. You must be at least 7th level to select this revelation.</p>
<p><strong>Hidden Magic (Su):</strong> You gain the <Link to="/feat/conceal_spell">Conceal Spell</Link> feat as a bonus feat without needing to meet the prerequisites. At 7th level, you can also hide your use of <Link to="/misc/spell_trigger">spell trigger</Link> items using the Conceal Spell feat, though onlookers receive a +2 bonus on their skill checks to pierce your subterfuge. At 11th level, you can even hide the use of <Link to="/misc/spell_completion">spell completion</Link> items using the Conceal Spell feat, though in this case, onlookers receive a +5 bonus on their skill checks to pierce your subterfuge.</p>
<p><strong>Mirrored Retreat (Su):</strong> Once per day as a full-round action, your form ripples and releases seven illusory duplicates, as <Link to="/spell/mirror_image">mirror image</Link>, and then you can move up to your speed in any direction, while the duplicates move in seven other directions. The duplicates continue to retreat in their chosen direction, avoiding walls and other barriers but unable to open doors or interact with objects. The duplicates last for 1 minute per oracle level or until they take damage (they have the same AC as your touch AC and the same Reflex save as you, and they are immune to effects that allow a Fortitude or Will save). You can use this ability an additional time per day at 11th level and every 4 levels thereafter. This is a figment effect. You must be at least 7th level to select this revelation.</p>
<p><strong>Poetic Vengeance (Su):</strong> You constantly plot and scheme to take your revenge against those who wrong you. Once per day as an immediate action, after an enemy successfully affects you with an attack (whether with a spell, a physical attack, or any other sort of attack), you can force the enemy to take half the effects of its own attack unless it succeeds on a Will save (DC 10 + 1/2 your oracle level + your Charisma modifier). Any damage from the attack is halved, and non-damaging effects have a 50% chance to apply. If the non-damaging effect has a DC, the enemy receives a saving throw against it, at either the DC of the original effect or the DC of this ability, whichever is lower. At 10th level, you can use this ability twice per day, and at 20th level you can use it three times per day.</p>
<p><strong>Tracer Touch (Sp):</strong> Once per day, you can touch a creature or object and plant a scrying sensor on it, as if you had cast <Link to="/spell/vicarious_view">vicarious view</Link>. At 15th level, you can use this ability twice per day. You must be at least 11th level to select this revelation.</p>
<p><strong>Veiled Venom (Sp):</strong> The powers of intrigue veil your poisons and magic items from magical scrutiny. As a standard action, you can touch an object, granting it the benefits of the spells <Link to="/spell/magic_aura">magic aura</Link> and <Link to="/spell/obscure_poison">obscure poison</Link>. You can use this ability at will, but each time you do, the effects of any previous use end.</p>
<p><strong>Whispered Glimpses (Su):</strong> The whispers of intrigue sing to you with glimpses of insight into others' presence and motives, granting you greater awareness than your own senses could manage. You can add your Charisma modifier instead of your Wisdom bonus on Perception and Sense Motive checks.</p>
<h3 id="mystery-intrigue-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a master of intrigue. You can apply <Link to="/feat/silent_spell">Silent Spell</Link> or <Link to="/feat/still_spell">Still Spell</Link> to any spell you cast without increasing the level or casting time. You do not need to possess these feats to use this ability.</p>
</>};
const _juju = {title: "Juju", jsx: <><h2 id="mystery-juju-juju">Juju</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 14</Link>, <Link to="/source/pathfinder_39_the_city_of_seven_spears">Pathfinder #39: The City of Seven Spears pg. 68</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/wendo">Wendo</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/perform">Perform</Link> (oratory) (CHA), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/speak_with_animals">Speak with animals</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fear">Fear</Link></Pair>
<Pair plain title="8th"><Link to="/spell/charm_monster">Charm monster</Link></Pair>
<Pair plain title="10th"><Link to="/spell/mass_suggestion">Mass suggestion</Link></Pair>
<Pair plain title="12th"><Link to="/spell/contact_other_plane">Contact other plane</Link> (as a 6th-level spell)</Pair>
<Pair plain title="14th"><Link to="/spell/summon_natures_ally_vii">Summon nature's ally VII</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mass_charm_monster">Mass charm monster</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shapechange">Shapechange</Link></Pair>
</Ability>
<h3 id="mystery-juju-revelations">Revelations</h3>
<p>An oracle with the Juju mystery can choose from any of the following revelations.</p>
<p><strong>Beast Tongue (Ex):</strong> You can communicate with a single type of animal (birds, cats, snakes, fish, and so on) as if you were constantly using <em>speak with animals.</em> Although this ability grants you the ability to converse with such creatures, it grants you no special influence over them.</p>
<p><strong>Connaissance (Su):</strong> You can spend a full-round action to attune yourself to the spirit world, gaining the benefit of a <Link to="/spell/moment_of_prescience">moment of prescience</Link> spell with the insight bonus equal to one half your oracle level (minimum 1). You may use this ability a number of times per day equal to your Charisma modifier (minimum 1), but you may only have one connaissance effect active at a time.</p>
<p><strong>Ensnare the Soul (Su):</strong> Your magic turns others into zombie-like servants. Add <Link to="/spell/charm_person">charm person</Link> and <Link to="/spell/dominate_person">dominate person</Link> to your spell list. Creatures affected by either spell become listless and pale, appearing dead to observers (DC 20 Heal or Perception check to determine the creature is not undead). Affected creatures are slow to take any action unless you specifically direct them to do so. They are not mindless or helpless, however, and defend themselves if attacked.</p>
<p><strong>Juju Senses (Ex):</strong> When casting <Link to="/spell/detect_magic">detect magic</Link> and <Link to="/spell/identify">identify</Link>, you gain a +2 bonus on Knowledge (arcana) and Spellcraft checks to recognize auras and identify their properties. You also gain a +2 bonus on Perception and Sense Motive checks made against spirit creatures, such as outsiders, fey, and incorporeal undead. At 10th level, this bonus increases to +4.</p>
<p><strong>Night Terror (Su):</strong> You send your spirit to torment another being's dreams. Once per day, you may target a creature with the effects of a <Link to="/spell/nightmare">nightmare</Link> spell. Instead of the spell's normal damage, you make a full attack, using your Charisma modifier in place of your Strength modifier, against the victim's touch AC. You deal 1d10 damage for each successful hit. You must be at least 11th level before selecting this revelation.</p>
<p><strong>Path of the Snake (Su):</strong> Once per day, as a standard action, you can become incorporeal. While in this form, you gain a +10 bonus on Stealth checks and can move in any direction and through any object (except for those made of force). You can take no action other than to move while in this form. You remain in this form for a number of rounds equal to your oracle level, but you can end this effect prematurely with a standard action. At 15th level, you can use this ability twice per day. You must be at least 11th level to select this revelation.</p>
<p><strong>Spiritual Defense (Sp):</strong> Your chanting grants protection against your enemies. As a move action, you can begin chanting to gain the benefit of a protection spell (such as <Link to="/spell/protection_from_evil">protection from evil</Link>) using your oracle level as your caster level. This protection lasts until you stop chanting or for the spell's normal duration, whichever comes first. Chanting after the initial round of the effect is a free action, and you can incorporate verbal components and communication into the chant; magical silence ends a chant and its protection effect. At 6th level, you can chant aloud to create a magic circle effect (such as <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link>). You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Summon Nature's Spirits (Sp):</strong> Once per day, as a standard action, you may cast a <Link to="/spell/summon_monster">summon monster</Link> spell of a level up to the highest level you can cast. You may only summon elementals in this manner, but are treated as having the <Link to="/feat/augment_summoning">Augment Summoning</Link> feat when you do so. You must be at least 5th level to select this revelation.</p>
<p><strong>Unwilling Host (Su):</strong> You command spirits to invade the bodies of your enemies. Once per day as a standard action you may target a number of creatures equal to your Charisma modifier within 100 feet, no two of which can be more than 30 feet apart. Targeted creatures must make a Will save or suffer the effects of a <Link to="/spell/confusion">confusion</Link> spell as the spirits possess them and cause them to behave erratically for a number of rounds equal to your oracle level. You must be at least 7th level to select this revelation.</p>
<h3 id="mystery-juju-final-revelation">Final Revelation</h3>
<p>At 20th level, you become a master of the connections between the mortal world and the spirit world. Your knowledge enables you to gain incredible insight and control over others by manipulating spiritual energy. You gain an insight bonus equal to your Charisma modifier to your AC and on all saving throws and Knowledge checks. Additionally, once per day, you may cast <Link to="/feat/extended">extended</Link> <Link to="/spell/dominate_monster">dominate monster</Link> as a spell-like ability. With this ability, you may dominate a number of creatures equal to double your Charisma modifier.</p>
</>};
const _life = {title: "Life", jsx: <><h2 id="mystery-life-life">Life</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 48</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/detect_undead">Detect undead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/lesser_restoration">Lesser restoration</Link></Pair>
<Pair plain title="6th"><Link to="/spell/neutralize_poison">Neutralize poison</Link></Pair>
<Pair plain title="8th"><Link to="/spell/restoration">Restoration</Link></Pair>
<Pair plain title="10th"><Link to="/spell/breath_of_life">Breath of life</Link></Pair>
<Pair plain title="12th"><Link to="/spell/heal">Heal</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_restoration">Greater restoration</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mass_heal">Mass heal</Link></Pair>
<Pair plain title="18th"><Link to="/spell/true_resurrection">True resurrection</Link></Pair>
</Ability>
<h3 id="mystery-life-revelations">Revelations</h3>
<p>An oracle with the Life mystery can choose from any of the following revelations.</p>
<p><strong>Channel (Su):</strong> You can <Link to="/ability/channel_positive_energy">channel positive energy</Link> like a cleric, using your oracle level as your effective cleric level when determining the amount of damage healed (or caused to undead) and the DC. You can use this ability a number of times per day equal to 1 + your Charisma modifier.</p>
<p><strong>Combat Healer (Su):</strong> As the <Link to="/mystery/battle">battle</Link> mystery revelation: Whenever you cast a <Link to="/main/cure_spells">cure spell</Link> (a spell with "cure" in its name), you can cast it as a swift action, as if using the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat, by expending two spell slots. This does not increase the level of the spell. You can use this ability once per day at 7th level and one additional time per day for every four levels beyond 7th. You must be at least 7th level to select this revelation.</p>
<p><strong>Delay Affliction (Su):</strong> Once per day as an immediate action, whenever you fail a saving throw against a disease or poison, you may ignore its effects for 1 hour per level. At 7th and 15th level, you can use this ability one additional time per day.</p>
<p><strong>Energy Body (Su):</strong> As a standard action, you can transform your body into pure life energy, resembling a golden-white <Link to="/monster/fire_elemental">fire elemental</Link>. In this form, you gain the elemental subtype and give off a warm, welcoming light that increases the light level within 10 feet by one step, up to normal light. Any undead creature striking you with its body or a handheld weapon deals normal damage, but at the same time the attacker takes 1d6 points of positive energy damage + 1 point per oracle level. Creatures wielding melee weapons with reach are not subject to this damage if they attack you. If you grapple or attack an undead creature using unarmed strikes or natural weapons, you may deal this damage in place of the normal damage for the attack. Once per round, if you pass through a living allied creature's square or the ally passes through your square, it heals 1d6 hit points + 1 per oracle level. You may use this ability to heal yourself as a move action. You choose whether or not to heal a creature when it passes through your space. You may return to your normal form as a free action. You may remain in energy body form for a number of rounds per day equal to your oracle level.</p>
<p><strong>Enhanced Cures (Su):</strong> Whenever you cast a cure spell, the maximum number of hit points healed is based on your oracle level, not the limit based on the spell. For example, an 11th-level oracle of life with this revelation may cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> to heal 1d8+11 hit points instead of the normal 1d8+5 maximum.</p>
<p><strong>Healing Hands (Ex):</strong> You gain a +4 bonus on Heal checks. You may provide first aid to two people or treat two people for poison as a standard action (make a separate Heal check for each creature). When using the Heal skill to treat wounds from <Link to="/eq-misc/caltrops">caltrops</Link> (and so on), treat deadly wounds, treat poison, treat disease, or treat long-term care, you may treat double the normal number of people you may treat at the same time. You may provide long-term care for yourself.</p>
<p><strong>Life Link (Su):</strong> As a standard action, you may create a bond between yourself and another creature. Each round at the start of your turn, if the bonded creature is wounded for 5 or more hit points below its maximum hit points, it heals 5 hit points and you take 5 hit points of damage. You may have one bond active per oracle level. This bond continues until the bonded creature dies, you die, the distance between you and the other creature exceeds <Link to="/rule/range">medium range</Link>, or you end it as an immediate action (if you have multiple bonds active, you may end as many as you want as part of the same immediate action).</p>
<p><strong>Lifesense (Su):</strong> You notice and locate living creatures within 30 feet, just as if you possessed the <Link to="/umr/blindsight">blindsight</Link> ability. You must be at least 11th level to select this revelation.</p>
<p><strong>Safe Curing (Su):</strong> Whenever you cast a spell that cures the target of hit point damage, you do not provoke attacks of opportunity for spellcasting.</p>
<p><strong>Spirit Boost (Su):</strong> Whenever your healing spells heal a target up to its maximum hit points, any excess points persist for 1 round per level as <Link to="/rule/temporary_hit_points">temporary hit points</Link> (up to a maximum number of temporary hit points equal to your oracle level).</p>
<h3 id="mystery-life-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a perfect channel for life energy. You become immune to bleed, death attacks, exhaustion, fatigue, nausea effects, negative levels, and sickened effects. Ability damage and drain cannot reduce you below 1 in any ability score. You automatically make saving throws against massive damage. When you are below 0 hit points, you do not die until your negative total is in excess of twice your Constitution score.</p>
</>};
const _lore = {title: "Lore", jsx: <><h2 id="mystery-lore-lore">Lore</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 49</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/nethys">Nethys</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/identify">Identify</Link></Pair>
<Pair plain title="4th"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="6th"><Link to="/spell/locate_object">Locate object</Link></Pair>
<Pair plain title="8th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
<Pair plain title="10th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_owls_wisdom">Mass owl's wisdom</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
<h3 id="mystery-lore-revelations">Revelations</h3>
<p>An oracle with the Lore mystery can choose from any of the following revelations.</p>
<p><strong>Arcane Archivist (Su):</strong> Your experience with lore-filled tomes has granted you the ability to cast arcane spells as if they were on your spell list. Once per day, you can cast a spell from the <Link to="/main/spells_sorcerer">sorcerer/wizard spell list</Link> as if it were on your list of spells known. The spell consumes a spell slot one level higher than the level of the spell. You must have a spellbook containing the spell to cast it in this way, and the spell is erased when you complete the casting. You must be at least 11th level to select this revelation.</p>
<p><strong>Automatic Writing (Su):</strong> Once per day, you can spend a full hour in uninterrupted meditation. During this period, your hands produce mysterious writing that pertains to the future. At 1st level, the prophetic writing manifests as an <Link to="/spell/augury">augury</Link> spell with 90% effectiveness. At 5th level, the writing takes the form of a <Link to="/spell/divination">divination</Link> with 90% effectiveness. At 8th level, the writing manifests as a casting of <Link to="/spell/commune">commune</Link> with no material component required.</p>
<p><strong>Brain Drain (Su):</strong> You can take a standard action to violently probe the mind of a single intelligent enemy within 100 feet. The target receives a Will save to negate the effect and immediately knows the source of this harmful mental prying. Those who fail this save are wracked with pain, taking 1d4 points of damage per oracle level. After successfully attacking with this ability, you may use a full-round action to sort through the jumble of stolen thoughts and memories to make a single Knowledge check using the victim's skill bonus. The randomly stolen thoughts remain in your mind for a number of rounds equal to your Charisma modifier. Treat the knowledge gained as if you used <Link to="/spell/detect_thoughts">detect thoughts</Link>. This is a mind-affecting effect. You can use this ability once per day at 1st level, plus one additional time per day at 5th level and for every 5 levels beyond 5th.</p>
<p><strong>Focused Trance (Ex):</strong> You can enter a deep meditation, blocking out visual and auditory stimuli and allowing you to concentrate on a single problem, philosophical issue, or memory. This trance lasts 1d6 rounds, during which time you can only take move actions. During this period, you gain a bonus equal to your level on all saves against sonic effects and gaze attacks. When you come out of your trance, you may make a single Intelligence-based skill check with a +20 circumstance bonus. You may enter your focused trance a number of times per day equal to your Charisma modifier.</p>
<p><strong>Lore Keeper (Ex):</strong> Instead of encyclopedic knowledge, you learn most of your information through tales, songs, and poems. You may use your Charisma modifier instead of your Intelligence modifier on all Knowledge checks.</p>
<p><strong>Mental Acuity (Ex):</strong> Your explorations into the secret mysteries of the world have granted you a preternatural understanding of all things - and you just keep getting smarter. You gain a +1 inherent bonus to Intelligence upon taking this revelation and another at every third oracle level gained thereafter. You must be at least 7th level to select this revelation.</p>
<p><strong>Sidestep Secret (Su):</strong> Your innate understanding of the universe has granted you preternatural reflexes and the uncanny ability to step out of danger at the very last second. Add your Charisma modifier (instead of your Dexterity modifier) to your Armor Class and all Reflex saving throws. Your armor's maximum Dexterity bonus applies to your Charisma instead of your Dexterity.</p>
<p><strong>Spontaneous Symbology:</strong> Your knowledge of the secret history of the world has unveiled the mysterious symbols that govern reality. You can cast any "symbol" spell using a spell slot of the appropriate level, even if the spell is not on your list of spells known. A <Link to="/main/symbol_spells">symbol spell</Link> is any spell with the word "symbol" in its name. You must be at least 11th level to select this revelation.</p>
<p><strong>Think On It (Ex):</strong> Once per day, the oracle of lore can re-attempt any previously failed Knowledge check. On this attempt, add a +10 competence bonus on the check.</p>
<p><strong>Whirlwind Lesson (Ex):</strong> You can quickly browse through a magical tome or manual, gaining its benefits with only a single 8-hour study session (rather than the usual 48 hours over a period of 6 days). At 7th level, you may allow another character to join in your study; both of you gain the full benefit of having read the book. At 15th level, you may share your whirlwind lesson with a number of characters equal to your oracle level. The benefits to you are permanent, whereas your students gain the tome or manual's benefits for a number of days equal to your Charisma modifier but then forget what they have learned.</p>
<h3 id="mystery-lore-final-revelation">Final Revelation</h3>
<p>You gain the ability to take 20 on all Knowledge skill checks. Your understanding of the fundamental underpinnings of reality has also become so advanced that once per day, you can cast <Link to="/spell/wish">wish</Link>. This ability does not require a material component, but the wish cannot be used to grant ability score bonuses, nor can it be used to replicate spells with expensive material components.</p>
</>};
const _lunar = {title: "Lunar", jsx: <><h2 id="mystery-lunar-lunar">Lunar</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 28</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/ashava">Ashava</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/jezelda">Jezelda</Link>, <Link to="/faith/tsukiyo">Tsukiyo</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/fumbletongue">Fumbletongue</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dust_of_twilight">Dust of twilight</Link></Pair>
<Pair plain title="6th"><Link to="/spell/rage">Rage</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moonstruck">Moonstruck</Link></Pair>
<Pair plain title="10th"><Link to="/spell/aspect_of_the_wolf">Aspect of the wolf</Link></Pair>
<Pair plain title="12th"><Link to="/spell/litany_of_madness">Litany of madness</Link></Pair>
<Pair plain title="14th"><Link to="/spell/lunar_veil">Lunar veil</Link></Pair>
<Pair plain title="16th"><Link to="/spell/blood_mist">Blood mist</Link></Pair>
<Pair plain title="18th"><Link to="/spell/polar_midnight">Polar midnight</Link></Pair>
</Ability>
<h3 id="mystery-lunar-revelations">Revelations</h3>
<p>An oracle with the Lunar mystery can choose from any of the following revelations.</p>
<p><strong>Form of the Beast (Su):</strong> As a standard action, you can assume the form of a Small or Medium animal, as <Link to="/spell/beast_shape_i">beast shape I</Link>. At 9th level, you can assume the form of a Tiny or Large animal, as <Link to="/spell/beast_shape_ii">beast shape II</Link>. At 11th level, you can assume the form of a Diminutive or Huge animal or a Small or Medium magical beast, as <Link to="/spell/beast_shape_iii">beast shape III</Link>. At 13th level, you can assume the form of a Tiny or Large magical beast, as <Link to="/spell/beast_shape_iv">beast shape IV</Link>. You can use this ability once per day, but the duration is 1 hour/level. You must be at least 7th level to select this revelation.</p>
<p><strong>Eye of the Moon (Su):</strong> Your connection to the moon makes you supernaturally perceptive. You gain darkvision to a range of 60 feet. At 11th level, as a standard action, you can focus on a specific object or area (the size of which can be no greater than a 10-foot-by-10-foot square) and see it as though with <Link to="/spell/true_seeing">true seeing</Link> as long as the moon is shining on it. Moonless nights, cloudy skies, and shadows interfere with this ability.</p>
<p><strong>Gift of Claw and Horn (Su):</strong> As a swift action, you gain a <Link to="/umr/natural_weapons">natural weapon</Link>. The natural weapon lasts for a number of rounds equal to half your oracle level (minimum 1). You must choose a bite, claw, or gore attack. These attacks deal the normal damage for a creature of your size. At 5th level, your natural weapon gains a +1 enhancement bonus. This bonus increases by +1 at 10th, 15th, and 20th level. At 11th level, you gain two natural weapons at a time. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Mantle of Moonlight (Su):</strong> Your innate understanding of the moon renders you immune to the curse of lycanthropy. Additionally, you may disrupt a <Link to="/template/lycanthrope">lycanthrope's</Link> connection to the moon with a successful touch attack. This action automatically forces the lycanthrope into its humanoid form, in which it must remain for a number of rounds equal to your oracle level. Upon reaching 5th level, you can use this ability to force others into a <em>rage,</em> as the spell. Using this ability is a melee touch attack. You can use this ability once per day at 5th level plus one additional time per day for every 5 levels above 5th.</p>
<p><strong>Moonbeam (Su):</strong> You can fire a ray of moonlight as a ranged touch attack at any creature within 30 feet. This ray deals 1d6 points of damage + 1 for every 2 oracle levels you possess. In addition, the target must succeed at a Fortitude save or become <Link to="/misc/blinded">blinded</Link> for 1 round. You can use this ability a number of times per day equal to your Charisma modifier (minimum 1).</p>
<p><strong>Moonlight Bridge (Su):</strong> You summon a bridge of moonlight. The 10-foot-wide span touches the ground at a point adjacent to you. It can extend from this point in any direction for 10 feet per oracle level. The path persists until you have crossed over the bridge or for 24 hours, whichever is shorter. You may summon a moonlight bridge a number of times per day equal to your Charisma bonus. Should the bridge be attacked, treat it as a wall of force.</p>
<p><strong>Moonlit Script (Su):</strong> Once per night while you sleep, your hands produce mysterious writing that pertains to the future. At 1st level, the prophetic writing manifests as an <Link to="/spell/augury">augury</Link> spell with 90% effectiveness. At 5th level, the writing takes the form of a <Link to="/spell/divination">divination</Link> with 90% effectiveness. At 8th level, the writing manifests as a casting of <Link to="/spell/commune">commune</Link> with no material component required.</p>
<p><strong>Primal Companion (Ex):</strong> You gain the service of a faithful animal of the night. You can select from a <Link to="/companion/bear">bear</Link>, <Link to="/companion/boar">boar</Link>, <Link to="/companion/crocodile">crocodile</Link>, <Link to="/companion/shark">shark</Link>, <Link to="/companion/tiger">tiger</Link>, or <Link to="/companion/wolf">wolf</Link>. This animal functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using your oracle level as your effective druid level.</p>
<p><strong>Prophetic Armor (Ex):</strong> You are so in tune with your primal nature that your instincts often act to save you from danger that your civilized mind isn't even aware of. You may use your Charisma modifier (instead of your Dexterity modifier) as part of your Armor Class and all Reflex saving throws. Your armor's maximum Dexterity bonus applies to your Charisma, instead.</p>
<p><strong>Touch of the Moon (Su):</strong> The exact effects of this revelation depend on whether you cast <Link to="/main/cure_spells">inflict or cure spells</Link>. If you cast inflict spells, these spells carry with them the taint of madness. Subjects who take damage from your inflict spells are also subject to <Link to="/spell/confusion">confusion</Link>, as the spell, except the duration of this effect is a number of rounds equal to the level of the inflict spell. The save DC against this effect is 10 + 1/2 your oracle level + your Charisma modifier. Alternatively, if you cast cure spells, these spells are potentially more effective but entirely in the target's mind. Whenever you cast a cure spell, you can cast it as though it were enhanced with the <Link to="/feat/empower_spell">Empower Spell</Link> metamagic feat by expending two spell slots, except these hit points are temporary. This does not increase the level of the spell. Hit points healed this way expire after a number of minutes equal to half your oracle level. You must be at least 7th level to select this revelation.</p>
<h3 id="mystery-lunar-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become an avatar of the primal world - part humanoid, part beast. Once per day, you can transform into a lycanthrope of your choice for a number of hours equal to your Charisma modifier, gaining all the powers of a natural lycanthrope of that type, including the ability to change shape between human, animal, and hybrid form. In addition, you become immune to mind-affecting and language-dependent effects, as well as effects that specifically target only humanoids.</p>
</>};
const _metal = {title: "Metal", jsx: <><h2 id="mystery-metal-metal">Metal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 55</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/torag">Torag</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/lead_blades">Lead blades</Link></Pair>
<Pair plain title="4th"><Link to="/spell/heat_metal">Heat metal</Link></Pair>
<Pair plain title="6th"><Link to="/spell/keen_edge">Keen edge</Link></Pair>
<Pair plain title="8th"><Link to="/spell/versatile_weapon">Versatile weapon</Link></Pair>
<Pair plain title="10th"><Link to="/spell/major_creation">Major creation</Link> (metal items only)</Pair>
<Pair plain title="12th"><Link to="/spell/wall_of_iron">Wall of iron</Link></Pair>
<Pair plain title="14th"><Link to="/spell/statue">Statue</Link> (metal statue instead of iron)</Pair>
<Pair plain title="16th"><Link to="/spell/repel_metal_or_stone">Repel metal or stone</Link></Pair>
<Pair plain title="18th"><Link to="/spell/iron_body">Iron body</Link></Pair>
</Ability>
<h3 id="mystery-metal-revelations">Revelations</h3>
<p>An oracle with the Metal mystery can choose from any of the following revelations.</p>
<p><strong>Armor Mastery (Ex):</strong> You become more maneuverable while wearing armor. You can move at your normal speed in medium armor that is made of metal. This does not grant proficiency in armor. At 5th level, whenever you are wearing metal armor, you reduce the armor check penalty by 1 (to a minimum of 0) and increase the maximum Dexterity bonus allowed by your armor by 1. At 10th level, and again at 15th level, these bonuses increase by 1.</p>
<p><strong>Dance of the Blades (Ex):</strong> Your base speed increases by 10 feet. At 7th level, you gain a +1 bonus on attack rolls with a metal weapon in any round in which you move at least 10 feet. This bonus increases by +1 at 11th level, and every four levels thereafter. At 11th level, as a move action, you can maneuver your weapon to create a shield of whirling steel around yourself until the start of your next turn; non-incorporeal melee and ranged attacks against you have a 20% miss chance while the shield is active. You must be wielding a metal weapon to use this ability.</p>
<p><strong>Iron Constitution (Su):</strong> You gain a +1 bonus on Fortitude saves. At 7th level, and again at 14th level, this bonus increases by +1.</p>
<p><strong>Iron Skin (Sp):</strong> Once per day, your skin hardens and takes on the appearance of iron, granting you DR 10/adamantine. This ability functions as <Link to="/spell/stoneskin">stoneskin</Link>, using your oracle level as the caster level, except it only affects you. At 15th level, you can use this ability twice per day. You must be at least 11th level to select this revelation.</p>
<p><strong>Iron Weapon (Su):</strong> You can create a melee simple or martial weapon that lasts for 1 minute for every oracle level you possess. This weapon is appropriate for your size and entirely made of metal (even if it would normally include non-metal parts, such as a spear's shaft) but functions as if it were a normal weapon of its type. You are considered proficient with this weapon. The weapon disappears after 1 round if it leaves your grasp. At 3rd level, the blade is made of cold iron. At 7th level, 15th level, and 19th level, the blade gains a +1 enhancement bonus. At 11th level, the blade is made of adamantine. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Riddle of Steel (Su):</strong> Your sacred bond with metal gives you insight into its form and function. Once per day, you may spend 10 minutes meditating on the structure of a piece of unworked metal or ore to gain a +5 insight bonus on your next Craft check to make something using that metal.</p>
<p><strong>Rusting Grasp (Sp):</strong> Once per day as a standard action, you can perform a melee touch attack that rusts iron, as the <Link to="/spell/rusting_grasp">rusting grasp</Link> spell. At 11th level, and every four levels thereafter, you can use this ability an additional time per day. You must be at least 7th level to select this revelation.</p>
<p><strong>Skill at Arms (Ex):</strong> You gain proficiency in all martial weapons and heavy armor.</p>
<p><strong>Steel Scarf (Su):</strong> As a swift action, you can harden a scarf, sleeve, cloak, or other piece of your clothing into something as hard as steel that stretches out to be up to 30 feet long. You can then strike outward with it as if it were a weapon making a melee attack. For the purpose of this ability, you are proficient with this weapon. You can use the weapon to perform combat maneuvers. Make a melee attack roll against a creature within 30 feet; you may use <Link to="/feat/weapon_finesse">Weapon Finesse</Link> with this attack. If you hit, the weapon deals 1d8 points of slashing damage + 1 point for every two oracle levels you possess. After this attack, the clothing returns to its normal length and hardness. You do not threaten an area with this weapon and cannot use it to make attacks of opportunity. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Vision in Iron (Sp):</strong> You can use any piece of polished metal at least the size of a dagger as a scrying device, as if using the spell <Link to="/spell/scrying">scrying</Link>. At 15th level, this functions like <Link to="/spell/greater_scrying">greater scrying</Link>. You can scry for a number of rounds per day equal to your oracle level; these rounds do not need to be consecutive. You must be at least 7th level to select this revelation.</p>
<h3 id="mystery-metal-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a master of iron and steel. You gain the benefits of <Link to="/feat/weapon_focus">Weapon Focus</Link>, <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>, and <Link to="/feat/improved_critical">Improved Critical</Link> with any one metal weapon that you are proficient with. Your armor is like a second skin to you - while wearing metal armor you are proficient with, the armor's maximum Dexterity bonus increases by +5 and you take no armor check penalty. In addition, any metal you create with your magic (such as <em>wall of iron</em>) has its hardness increased by +10.</p>
</>};
const _nature = {title: "Nature", jsx: <><h2 id="mystery-nature-nature">Nature</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 50</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gozreh">Gozreh</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/ride">Ride</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/charm_animal">Charm animal</Link></Pair>
<Pair plain title="4th"><Link to="/spell/barkskin">Barkskin</Link></Pair>
<Pair plain title="6th"><Link to="/spell/speak_with_plants">Speak with plants</Link></Pair>
<Pair plain title="8th"><Link to="/spell/grove_of_respite">Grove of respite</Link></Pair>
<Pair plain title="10th"><Link to="/spell/awaken">Awaken</Link></Pair>
<Pair plain title="12th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="14th"><Link to="/spell/creeping_doom">Creeping doom</Link></Pair>
<Pair plain title="16th"><Link to="/spell/animal_shapes">Animal shapes</Link></Pair>
<Pair plain title="18th"><Link to="/spell/world_wave">World wave</Link></Pair>
</Ability>
<h3 id="mystery-nature-revelations">Revelations</h3>
<p>An oracle with the Nature mystery can choose from any of the following revelations.</p>
<p><strong>Bonded Mount (Su):</strong> You gain the service of an unusually intelligent, strong, and loyal mount. The creature must be one that you are capable of riding and is suitable as a mount. A Medium oracle can select a <Link to="/companion/camel">camel</Link> or a <Link to="/companion/horse">horse</Link>. A Small oracle can select a <Link to="/companion/pony">pony</Link> or <Link to="/companion/wolf">wolf</Link>, but can also select a <Link to="/companion/boar">boar</Link> or a <Link to="/companion/dog">dog</Link> if she is at least 4th level. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using your oracle level as your effective druid level. Bonded mounts have an Intelligence score of at least 6.</p>
<p><strong>Erosion Touch (Su):</strong> As a melee touch attack, you can deal 1d6 points of damage per level to objects or constructs. If used against an object in another creature's possession, treat this attack as a <Link to="/rule/sunder">sunder</Link> combat maneuver. You can use this ability once per day, plus one time per day for every three levels you possess.</p>
<p><strong>Friend to the Animals (Ex):</strong> Add all <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spells to your spell list. You must still select these spells using your allotment of spells known. Animals within 30 feet of you receive a bonus on all saving throws equal to your Charisma modifier.</p>
<p><strong>Life Leach (Su):</strong> You can draw life force from the bodies of enemies and channel it into yourself. As a standard action, you can drain the life essence from one living target within 30 feet. The target takes 1d6 points of damage per two levels you possess (maximum 10d6). You gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the damage you deal. You can't gain more than the target's current hit points + the target's Constitution score (which is enough to kill the subject). The temporary hit points last a number of hours equal to your Charisma modifier. The target receives a Fortitude save to halve the damage (and the temporary hit points you gain). You may use this ability once per day at 7th level, plus one additional time per day for every 4 levels you possess beyond 7th. You must be at least 7th level before selecting this revelation.</p>
<p><strong>Natural Divination (Ex):</strong> You can read the entrails of a freshly killed animal or humanoid to gain an insight bonus equal to your Charisma modifier on one saving throw. Alternatively, by observing and interpreting the flights of birds, you may apply a +10 competence bonus on any one skill check. Finally, by charting marks in dirt or stone, or observing the behavior of sand when thrown into the wind, you gain a +4 insight bonus on one initiative check. These bonuses must be used during the next 24 hours and you must declare you are using the bonus before the check or save is made. Making a natural divination takes 10 minutes. You may use natural divination (in any combination) once per day plus one additional time per day for every four oracle levels you have attained.</p>
<p><strong>Nature's Whispers (Ex):</strong> You have become so attuned to the whispers of the natural world, from the croaking of frogs to the groaning of great boulders, that your surroundings constantly keep you preternaturally aware of danger. You may add your Charisma modifier, instead of your Dexterity modifier, to your Armor Class and CMD. Any condition that would cause you to lose your Dexterity modifier to your Armor Class instead causes you to lose your Charisma modifier to your Armor Class.</p>
<p><strong>Speak with Animals (Ex):</strong> Choose a specific kind of animal (eagle, fox, dog, and so on). You gain the ability to converse with that type of animal as if you were under the effects of speak with animal. You gain the ability to communicate with an additional kind of animal for every 3 oracle levels you have attained.</p>
<p><strong>Spirit of Nature (Su):</strong> When in a natural setting, whenever you are reduced to negative hit points, you automatically stabilize. At 5th level, you gain <Link to="/umr/fast_healing">fast healing</Link> 1 for 1d4 rounds whenever you are reduced to negative hit points. At 10th level, the ability works everywhere, even in civilized or wholly artificial realms. At 15th level, you gain fast healing 3 for 1d4 rounds when reduced to negative hit points.</p>
<p><strong>Transcendental Bond (Su):</strong> You become so attuned to the common spirit shared by all living things that you can use it to communicate with allies. You may communicate with your allies for a number of rounds per day equal to your oracle level as if using <Link to="/spell/telepathic_bond">telepathic bond</Link>. You may designate a number of creatures as your ally equal to your Charisma modifier. Designating a creature is a standard action that requires a touch. At 10th level, you may use this bond to cast a touch spell on a designated ally once per day.</p>
<p><strong>Undo Artifice (Sp):</strong> At 11th-level, you gain the ability to reduce a nonliving item to its component parts, essentially erasing the hand of artifice and rendering the item into a pile of raw natural materials. This effect acts as the spell <Link to="/spell/polymorph_any_object">polymorph any object</Link>, working on both magical and nonmagical nonliving objects. The duration is always permanent. Unlike polymorph any object, it cannot be used to mimic the effects of other spells. Items subject to this effect receive a Fortitude saving throw to negate the effect. Magic items receive a circumstance bonus on this save equal to +1 for every 5,000 gp in the item's value. You may use undo artifice a number of times per day equal to your Charisma modifier.</p>
<h3 id="mystery-nature-final-revelation">Final Revelation</h3>
<p>At 20th level, you have discovered the intrinsic secrets of life itself, granting you incredible control over your own body. Once per day, you can surround yourself with an organic cocoon as a full-round action. While enclosed in the cocoon, you are considered <Link to="/misc/helpless">helpless</Link>. Eight hours later, you emerge having changed your type to plant, animal, or humanoid, gaining superficial physical characteristics as appropriate. This change does not alter your Hit Dice, hit points, saving throws, skill points, class skills, or proficiencies. Each time the transformation is made, you are cleansed of all poisons or diseases, are restored to full hit points, and heal all ability damage. You must select a new type every time the transformation is made.</p>
</>};
const _occult = {title: "Occult", jsx: <><h2 id="mystery-occult-occult">Occult</h2>
<p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries pg. 53</Link>, <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 68</Link></p>
<p>You have an innate connection to the spirits of the dead.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/magdh">Magdh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/tsukiyo">Tsukiyo</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/unseen_servant">Unseen servant</Link></Pair>
<Pair plain title="4th"><Link to="/spell/spectral_hand">Spectral hand</Link></Pair>
<Pair plain title="6th"><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link></Pair>
<Pair plain title="8th"><Link to="/spell/scrying">Scrying</Link></Pair>
<Pair plain title="10th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="12th"><Link to="/spell/project_image">Project image</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/astral_projection">Astral projection</Link></Pair>
</Ability>
<h3 id="mystery-occult-revelations">Revelations</h3>
<p>An oracle with the Occult mystery can choose from any of the following revelations.</p>
<p><strong>Automatic Writing (Su):</strong> Once per day, you can spend a full hour in uninterrupted meditation. During this period, your hands produce mysterious writing that pertains to the future. At 1st level, the prophetic writing manifests as an <Link to="/spell/augury">augury</Link> spell with 90% effectiveness. At 5th level, the writing takes the form of a <Link to="/spell/divination">divination</Link> spell with 90% effectiveness. At 8th level, the writing manifests as a casting of <Link to="/spell/commune">commune</Link> with no material component required.</p>
<p><strong>Brain Drain (Su):</strong> You can take a standard action to violently probe the mind of a single intelligent enemy within 100 feet. The target receives a Will save to negate the effect and immediately knows the source of this harmful mental prying. Those who fail this save are wracked with pain, and take 1d4 points of damage per oracle level you possess. After successfully attacking with this ability, you can use a full-round action to sort through the jumble of stolen thoughts and memories and then attempt a single Knowledge check using the victim's skill bonus. The randomly stolen thoughts remain in your mind for a number of rounds equal to your Charisma modifier. Treat the knowledge gained as if you had used <Link to="/spell/detect_thoughts">detect thoughts</Link>. This is a mind-affecting effect. You can use this ability once per day at 1st level, plus 1 use per day at 5th level, and 1 use for every 5 levels beyond 5th.</p>
<p><strong>Ectoplasmic Armor (Su):</strong> You can conjure armor made of ectoplasm that grants you a +4 armor bonus to AC. In addition, this armor functions as if it had the <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> special ability. At 7th level and every 4 levels thereafter, the armor bonus increases by 2. You can use this armor for 1 hour per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-hour increments.</p>
<p><strong>Phantom Touch (Su):</strong> As a standard action, you can perform a melee touch attack that causes a living creature to become <Link to="/misc/shaken">shaken</Link>. This ability lasts for a number of rounds equal to 1/2 your oracle level (minimum 1 round). You can use this ability a number of times per day equal to 3 + your Charisma modifier. At 5th level, the target instead becomes <Link to="/misc/frightened">frightened</Link>, and at 7th level, the target becomes <Link to="/misc/panicked">panicked</Link>.</p>
<p><strong>Project Psyche (Su):</strong> You can project your psyche into another vessel. Once per day, you can possess another creature as if using the <Link to="/spell/magic_jar">magic jar</Link> spell, though this does not require a receptacle. You must be adjacent to the target creature, which receives a Will save against the effect. You must be at least 11th level to choose this revelation.</p>
<p><strong>Shroud of Retribution (Su):</strong> As an immediate action, you can summon a shroud of spirits that reflects your attackers' damage back onto them. Any creature that strikes you deals normal damage to you, but at the same time the attacker takes 1d8 points of force damage + 1 point per 2 caster levels you possess (maximum +10). This effect lasts until the end of your next turn. You can use this ability once per day, plus one additional time per day at 11th level and every 4 levels thereafter. You must be at least 7th level to select this revelation.</p>
<p><strong>Spectral Spells (Su):</strong> You gain <Link to="/feat/ectoplasmic_spell">Ectoplasmic Spell</Link> as a bonus feat. In addition, once per day, you can cast a spell with the Ectoplasmic Spell metamagic feat as a standard action that does not increase the level of the spell. You can use this ability one additional time per day at 7th level and every 4 levels thereafter.</p>
<p><strong>Spirit Walk (Su):</strong> You can become incorporeal and invisible. While in this form, you can move in any direction and pass through solid objects. You can take no actions other than to move while in this form. You can remain in this form for a number of rounds equal to your oracle level, but you can end this effect prematurely as a standard action. You can use this ability once per day at 11th level and twice per day at 15th level. You must be at least 11th level to select this revelation.</p>
<p><strong>Sure Soul (Su):</strong> Because of your experience with possessing spirits, you gain a +2 insight bonus on saving throws against possession effects such as <em>magic jar,</em> a <Link to="/template/ghost">ghost's</Link> malevolence ability, or domination effects. At 7th level, this bonus also applies against death effects and mind-affecting effects. At 11th level, the bonus increases to +4.</p>
<p><strong>Voice of the Grave (Su):</strong> You can use <Link to="/spell/speak_with_dead">speak with dead</Link>, as the spell, for a number of rounds per day equal to your oracle level. These rounds do not need to be consecutive. At 5th level and every 5 levels thereafter, the dead creature takes a cumulative -2 penalty on its Will save to resist this effect.</p>
<h3 id="mystery-occult-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become one with the spirits. You become immune to death effects, exhaustion, fatigue, nausea, negative levels, and the sickened condition. You can cast <em>astral projection</em> and <Link to="/spell/true_seeing">true seeing</Link> once per day as spell-like abilities without requiring material components. Should you die, you rise again 2d4 days later as a ghost.</p>
</>};
const _outer_rifts = {title: "Outer Rifts", jsx: <><h2 id="mystery-outer_rifts-outer-rifts">Outer Rifts</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 31</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/main/faiths_pantheons">demon lords</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="4th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="6th"><Link to="/spell/vermin_shape_i">Vermin shape I</Link></Pair>
<Pair plain title="8th"><Link to="/spell/confusion">Confusion</Link></Pair>
<Pair plain title="10th"><Link to="/spell/lesser_planar_binding">Lesser planar binding</Link></Pair>
<Pair plain title="12th"><Link to="/spell/planar_binding">Planar binding</Link></Pair>
<Pair plain title="14th"><Link to="/spell/insanity">Insanity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_planar_binding">Greater planar binding</Link></Pair>
<Pair plain title="18th"><Link to="/spell/imprisonment">Imprisonment</Link></Pair>
</Ability>
<h3 id="mystery-outer_rifts-revelations">Revelations</h3>
<p>An oracle with the Outer Rifts mystery can choose from any of the following revelations.</p>
<p><strong>Balefire (Su):</strong> You call upon the cleansing or searing fires of the Outer Rifts to burn your foes. As a standard action, one target within 30 feet is wreathed in screaming flames and takes 1d6 points of fire damage per level. A successful Reflex save halves this damage. At 10th level, the fire's howls cause any creatures damaged by it to be <Link to="/misc/staggered">staggered</Link> for 1 round. At 15th level, creatures who fail their saves against the balefire are staggered for 1d4 rounds and <Link to="/misc/stunned">stunned</Link> for 1 round. You can use this ability once per day plus one additional time per day at 10th level.</p>
<p><strong>Demonhide (Su):</strong> You alter your flesh to be as tough as a demon's hide, granting you a +4 armor bonus. At 7th level, and every four levels thereafter, this bonus increases by +2. At 13th level, this armor also grants you DR 5/cold iron. You can use this revelation for 1 hour per day per oracle level. The duration does not need to be consecutive, but it must be spent in 1-hour increments.</p>
<p><strong>Dread Resilience (Ex):</strong> You have been hardened by exposure to the otherworldly energies of the Outer Rifts, and you just keep getting tougher. You gain a +1 inherent bonus to Constitution upon taking this revelation and another for every four oracle levels gained thereafter. You must be at least 9th level to select this revelation.</p>
<p><strong>Planar Haze (Su):</strong> You can fill an area with the smoky miasma of the Outer Rifts. Once per day when you cast a spell that has an area, as a swift action you may also fill that area with a thick haze that acts as <Link to="/spell/obscuring_mist">obscuring mist</Link>, except it originates at the center of your spell effect and cannot expand beyond the spell's area. At 10th level, the haze functions as <Link to="/spell/fog_cloud">fog cloud</Link>. You may use this ability one additional time per day at 7th level, and one additional time per day at 14th level.</p>
<p><strong>Planar Infusion (Su):</strong> As a standard action once per day, you can cause a 20-foot-<Link to="/misc/spread">spread</Link> to gain either the mildly chaotic-aligned or mildly evil-aligned <Link to="/rule/planar_traits">planar trait</Link> for a number of rounds equal to your oracle level. Lawful creatures in a chaotic-aligned area take a -2 circumstance penalty on all Charisma-based checks, as do good creatures in an evil-aligned area. At 11th level, the infusion makes the area strongly aligned, which causes the -2 circumstance penalty to apply on all Intelligence-, Wisdom-, and Charisma-based checks made by any creature that lacks the matching alignment component (these penalties stack with those from the lower-level effect). You must be chaotic or evil to select this revelation, and you can only infuse an area with an alignment that matches a component of your own alignment.</p>
<p><strong>Rift Magic (Su):</strong> Your spells gain a +4 bonus on caster level checks made to overcome the spell resistance of chaotic outsiders and evil outsiders.</p>
<p><strong>Rift Weapon (Su):</strong> Your understanding of the powers that move through the Outer Rifts allows you to imbue weapons with the ability to penetrate the defenses of creatures native to other planes. Once per day as a standard action, you can touch one weapon (or a group of up to 20 similar pieces of ammunition) and give it the ability to penetrate DR/cold iron for 1 minute per caster level. At 9th level, you can also grant the additional ability to bypass either DR/good and DR/law. You can use this ability an additional time per day for every 5 oracle levels you possess.</p>
<p><strong>Telepathy (Su):</strong> You can mentally communicate with any other creature within 100 feet that has a language, as per the telepathy power of <Link to="/family/demon">demons</Link> and <Link to="/family/angel">angels</Link>. You must be at least 11th level before selecting this revelation.</p>
<p><strong>Unearthly Terrain (Su):</strong> You can twist the material world into the harsh, jagged edges and uneven angles of the outer planes. As a standard action, you can turn one 20-foot square into <Link to="/rule/difficult_terrain">difficult terrain</Link> for 1 round per level. You may use this ability a number of times per day equal to 3 + your Charisma bonus.</p>
<p><strong>Wings of Terror (Su):</strong> You can manifest a pair of enormous, bat-like demon wings that grant you a fly speed of 60 feet with average maneuverability and a +4 bonus on Intimidate checks. At 10th level, your speed increases to 90 feet, your maneuverability increases to good, and the bonus increases to +8 on Intimidate checks. You can use these wings for 1 minute per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. You must be at least 7th level to select this revelation.</p>
<h3 id="mystery-outer_rifts-final-revelation">Final Revelation</h3>
<p>At 20th level, you gain the ability to open rifts between planes. This allows you to use <Link to="/spell/gate">gate</Link> as a spell-like ability once per day. If you use this ability to call creatures, you still need to provide 10,000 gp in offerings to secure the creature's aid.</p>
</>};
const _reaper = {title: "Reaper", jsx: <><h2 id="mystery-reaper-reaper">Reaper</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road pg. 66</Link></p>
<p>Oracles with the reaper mystery strive to quiet restless souls, end lives, and send souls to their final reward.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/achaekek">Achaekek</Link>, <Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/pharasma">Pharasma</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/chill_touch">Chill touch</Link></Pair>
<Pair plain title="4th"><Link to="/spell/calm_spirit">Calm spirit</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sands_of_time">Sands of time</Link></Pair>
<Pair plain title="8th"><Link to="/spell/purge_spirit">Purge spirit</Link></Pair>
<Pair plain title="10th"><Link to="/spell/slay_living">Slay living</Link></Pair>
<Pair plain title="12th"><Link to="/spell/undeath_to_death">Undeath to death</Link></Pair>
<Pair plain title="14th"><Link to="/spell/destruction">Destruction</Link></Pair>
<Pair plain title="16th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wail_of_the_banshee">Wail of the banshee</Link></Pair>
</Ability>
<h3 id="mystery-reaper-revelations">Revelations</h3>
<p>An oracle with the Reaper mystery can choose from any of the following revelations.</p>
<p><strong>Death's Embrace (Su):</strong> You gain <Link to="/feat/improved_grapple">Improved Grapple</Link> as a bonus feat, even if you do not meet its prerequisites. Once per round when you succeed at a grapple combat maneuver check, you can deal 1d6 points of negative energy damage to the target of your grapple. This damage increases by 1d6 at 5th level and every 5 levels thereafter, to a maximum of 5d6 at 20th level.</p>
<p><strong>Haunt Channeler (Su):</strong> You gain the <Link to="/class/medium">medium's</Link> haunt channeler class feature with an effective medium level equal to your oracle level - 2. You must be at least 5th level to select this revelation.</p>
<p><strong>Moral Crisis (Su):</strong> As a standard action, you can target a living creature within 30 feet of you, reminding it of its moral failings. The target must succeed at a Will save or be <Link to="/misc/staggered">staggered</Link> for a number of rounds equal to your oracle level. The target can attempt a new saving throw at the end of each of its turns to end this effect. This is a mind-affecting emotion effect.</p>
<p><strong>Obliterate Memory (Sp):</strong> As a standard action, you can target a creature within 30 feet and eliminate all memory of an event the target experienced, as <Link to="/spell/modify_memory">modify memory</Link>. A target can attempt a Will save to negate this effect. In addition, you can cause an account of the memory erased by this ability to appear on a blank page of any book you are carrying. You can use this ability once per day, plus one additional time per day at 15th level. You must be at least 11th level to select this revelation.</p>
<p><strong>Pale Horse (Sp):</strong> You can summon a <Link to="/spell/phantom_steed">phantom steed</Link>, as the spell, to serve you for a number of hours per day equal to your oracle level. This duration does not need to be consecutive, but it must be spent in 1-hour increments. You must be at least 5th level to select this revelation.</p>
<p><strong>Return to Dust (Su):</strong> You call upon the inexorable ravages of time and entropy to damage an object or undead creature within 30 feet, dealing 1d6 points of damage per 2 oracle levels you have, ignoring hardness and damage reduction. If used against an undead creature or an object in another creature's possession, the undead creature or the creature possessing the object can attempt a Reflex saving throw to halve the damage. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Spectral Spells (Su):</strong> You gain <Link to="/feat/ectoplasmic_spell">Ectoplasmic Spell</Link> as a bonus feat. In addition, once per day, you can cast a spell with the Ectoplasmic Spell metamagic feat as a standard action that does not increase the level of the spell. You can use this ability one additional time per day at 7th level and every 4 levels thereafter.</p>
<p><strong>Spirit Touch (Su):</strong> As a standard action, you can touch one weapon to grant it the <Link to="/magic-enh/ghost_touch">ghost touch</Link> special ability for a number of rounds equal to your Charisma modifier. At 11th level, you can spend two uses of this ability to grant it the ghost touch and <Link to="/magic-enh/bane">undead bane</Link> special abilities. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Terminal Aura (Su):</strong> You gain an aura with a 10-foot radius; any creature within that has fewer than 0 hit points but is stable must succeed at a Will save or be affected by the spell <Link to="/spell/bleed">bleed</Link>. A dying creature within range of this aura does not receive a Constitution check to stabilize unless it succeeds at a Will save, but it can still be healed as normal. A creature with <Link to="/umr/fast_healing">fast healing</Link> or <Link to="/umr/regeneration">regeneration</Link> must also succeed at a Will save every round or that ability does not function for 1 round. You can suppress and resume this aura as a free action. You must be at least 11th level to select this revelation.</p>
<p><strong>True Death (Su):</strong> Those slain by your spells or by one of your attacks that deals negative energy becomes more difficult to bring back from the dead. Spellcasters attempting to bring such a creature back from the dead using <Link to="/spell/raise_dead">raise dead</Link> or similar magic must succeed at a caster level check with a DC equal to 15 + your oracle level or the spell fails and the material component is wasted. A successful casting of <Link to="/spell/remove_curse">remove curse</Link> (DC = 10 + your oracle level) before attempting to bring the creature back from the dead suppresses this effect for 1 minute.</p>
<h3 id="mystery-reaper-final-revelation">Final Revelation</h3>
<p>Upon 20th level, you are a true reaper of death and no soul can escape your sight. You automatically confirm critical hits and creatures automatically fail Fortitude saves against your <em>coup de grace</em> attempts. In addition, you can notice, locate, and distinguish between living and undead creatures within 60 feet, just as if you had the <Link to="/umr/blindsense">blindsense</Link> ability. This sense does not allow you to detect objects, but it does allow you to notice living things that are not creatures.</p>
</>};
const _shadow = {title: "Shadow", jsx: <><h2 id="mystery-shadow-shadow">Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 12</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lao_shu_po">Lao Shu Po</Link>, <Link to="/faith/tsukiyo">Tsukiyo</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/blurred_movement">Blurred movement</Link></Pair>
<Pair plain title="4th"><Link to="/spell/invisibility">Invisibility</Link></Pair>
<Pair plain title="6th"><Link to="/spell/deeper_darkness">Deeper darkness</Link></Pair>
<Pair plain title="8th"><Link to="/spell/shadow_step">Shadow step</Link></Pair>
<Pair plain title="10th"><Link to="/spell/vampiric_shadow_shield">Vampiric shadow shield</Link></Pair>
<Pair plain title="12th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="14th"><Link to="/spell/mass_invisibility">Mass invisibility</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shades">Shades</Link></Pair>
</Ability>
<h3 id="mystery-shadow-revelations">Revelations</h3>
<p>An oracle with the Shadow mystery can choose from any of the following revelations.</p>
<p><strong>Army of Darkness (Su):</strong> Whenever you cast a <Link to="/spell/summon_monster">summon monster</Link> spell and summon a creature that normally has the <Link to="/template/celestial">celestial</Link> or <Link to="/template/fiendish">fiendish</Link> template, you can instead summon it with the <Link to="/template/shadow_creature">shadow creature</Link> template. This revelation counts as having the <Link to="/feat/spell_focus">Spell Focus</Link> (conjuration) feat for the purpose of meeting the prerequisites of the <Link to="/feat/augment_summoning">Augment Summoning</Link> feat, as well as any feat that lists Augment Summoning as a prerequisite.</p>
<p><strong>Cloak of Darkness (Su):</strong> This ability functions as the <Link to="/mystery/dark_tapestry">dark tapestry</Link> mystery revelation of the same name: You conjure a cloak of shadowy darkness that grants you a +4 armor bonus and a +2 circumstance bonus on Stealth checks. At 7th level, and every four levels thereafter, these bonuses increase by +2. You can use this cloak for 1 hour per day per oracle level. The duration does not need to be consecutive, but it must be spent in 1-hour increments.</p>
<p><strong>Dark Secrets (Su):</strong> You learn the hidden secrets surrounding the casting of shadow spells. You can add a number of spells from the <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link> equal to your Charisma modifier (minimum 1, maximum equal to half your oracle level) to your spell list and your list of spells known as divine spells. These have a spell level equal to their sorcerer/wizard spell level. You can add only illusion spells from the shadow subschool or spells with the darkness descriptor to your list of spells known in this manner. Each time you gain an oracle level after taking this revelation, you can choose to replace one of these spells for a new appropriate spell on the sorcerer/wizard spell list.</p>
<p><strong>Living Shadow (Sp):</strong> Your body dissolves, and you become a living shadow. This ability functions as <Link to="/spell/gaseous_form">gaseous form</Link>. At 14th level, this ability functions as <Link to="/spell/shadow_body">shadow body</Link> instead, except you also gain DR 10/magic and become immune to poison, sneak attacks, and critical hits as if also using <em>gaseous form.</em> You can use this ability a number of minutes per day equal to your oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. You must be at least 7th level to choose this revelation.</p>
<p><strong>Pierce the Shadows (Su):</strong> The shadows step aside from your baleful gaze, affording you sight in even the deepest darkness. You gain darkvision 60 feet. If you already have darkvision, increase your existing darkvision by 60 feet instead. At 11th level, you can see perfectly in darkness of any kind, even in absolute darkness or the darkness created by a <em>deeper darkness</em> spell.</p>
<p><strong>Shadow Armament (Su):</strong> You can create a quasi-real simple or martial masterwork weapon appropriate for your current size. You are considered proficient with this weapon. The first time you hit a creature with this weapon, that creature can attempt a Will save to disbelieve; failure means the weapon deals damage normally, while success means the creature takes only 1 point of damage from the weapon's attacks. The weapon deals only 1 point of damage to objects. At 3rd level, and again at 11th level and 19th level, the weapon gains a cumulative +1 enhancement bonus. At 7th level, the weapon gains either the <Link to="/magic-enh/frost">frost</Link> or <Link to="/magic-enh/keen">keen</Link> weapon special ability, chosen when the weapon is created. These abilities don't function against a target that succeeds at its Will save. At 15th level, the weapon deals minimum damage (as if it had rolled a 1 on each of its damage dice) against targets that succeed at their saves instead of 1 point of damage. You can use this ability for a number of minutes per day equal to your oracle level. This duration does not need to be consecutive, but it must be used in 1-minute increments. The weapon disappears after 1 round if it leaves your grasp.</p>
<p><strong>Shadow Mastery (Su):</strong> Whenever you cast an illusion spell from the shadow subschool, increase the strength of such spells by 1% per oracle level you have. You must be at least 7th level to choose this revelation.</p>
<p><strong>Shadow Projection (Su):</strong> You infuse your life force and psyche into your shadow, causing it to separate from your body and act as an independent creature. This ability functions as <Link to="/spell/shadow_projection">shadow projection</Link> except as follows. Your shadow has the outsider type and the phantom subtype instead of the undead type. As a result, this ability does not have the evil descriptor and your shadow cannot be <Link to="/feat/turn_undead">turned</Link> or affected as undead (though it can be affected as an outsider). You can use this ability for a number of hours per day equal to half your oracle level. These hours don't need to be consecutive, but they must be spent in 1-hour increments. Your shadow's hit points are not replenished between uses, although your shadow can be healed in the same manner as any other outsider. When this ability isn't in use, any healing done to you also heals your shadow for an equal amount. You must be at least 7th level to choose this revelation.</p>
<p><strong>Stealth Mastery (Ex):</strong> You gain <Link to="/feat/skill_focus">Skill Focus</Link> with the Stealth skill. At 8th level, you gain <Link to="/feat/signature_skill">Signature Skill</Link> with the Stealth skill, even if you don't meet the feat's prerequisites. At 16th level, you gain the hide in plain sight <Link to="/pclass/shadowdancer">shadowdancer</Link> class feature.</p>
<p><strong>Wings of Darkness (Su):</strong> This ability functions as the <Link to="/mystery/dark_tapestry">dark tapestry</Link> mystery revelation of the same name. As a swift action, you can manifest a set of translucent, inky wings that grant you a fly speed of 60 feet with good maneuverability. You can use these wings for 1 minute per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. At 11th level, you can use these wings to fly as if with <Link to="/spell/overland_flight">overland flight</Link> once per day. Used in this way, the ability lasts for up to 1 hour per level, and counts as your total use of this ability for the day. You must be at least 7th level to select this revelation.</p>
<h3 id="mystery-shadow-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, your body becomes permanently suffused with the essence of the Shadow Plane. You gain <Link to="/umr/regeneration">regeneration</Link> 5 while in <Link to="/rule/dim_light">dim light</Link> or darkness and immunity to cold, critical hits, and sneak attacks. Your regeneration is suppressed while in any level of illumination brighter than dim light. In addition, any spells you cast of the shadow subschool or with the darkness descriptor are automatically <Link to="/feat/enlarged">enlarged</Link> without affecting their spell level.</p>
</>};
const _solar = {title: "Solar", jsx: <><h2 id="mystery-solar-solar">Solar</h2>
<p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 26</Link></p>
<p>Aimless wanderers and restless nomads, oracles of the solar mystery uncover meaning in the ever-changing positions of the sun and the stars in the sky.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/desna">Desna</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/keltheald">Keltheald</Link>, <Link to="/faith/lalaci">Lalaci</Link>, <Link to="/faith/nurgal">Nurgal</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/ymeri">Ymeri</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/faerie_fire">Faerie fire</Link></Pair>
<Pair plain title="4th"><Link to="/spell/flaming_sphere">Flaming sphere</Link></Pair>
<Pair plain title="6th"><Link to="/spell/daylight">Daylight</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dimension_door">Dimension door</Link></Pair>
<Pair plain title="10th"><Link to="/spell/planar_adaptation">Planar adaptation</Link></Pair>
<Pair plain title="12th"><Link to="/spell/sirocco">Sirocco</Link></Pair>
<Pair plain title="14th"><Link to="/spell/sunbeam">Sunbeam</Link></Pair>
<Pair plain title="16th"><Link to="/spell/sunburst">Sunburst</Link></Pair>
<Pair plain title="18th"><Link to="/spell/prismatic_sphere">Prismatic sphere</Link></Pair>
</Ability>
<h3 id="mystery-solar-revelations">Revelations</h3>
<p>An oracle with the Solar mystery can choose from any of the following revelations.</p>
<p><strong>Astral Caravan (Su):</strong> As a full-round action, you can step into the planar border where the Astral Plane abuts the Material Plane, pulling up to one additional person per class level with you. You can't travel fully into the Astral Plane or any of the other planes it borders, but while using this ability you can cover incredible distances, traversing 50 miles per hour, as per the <Link to="/spell/shadow_walk">shadow walk</Link> spell. You can travel for up to 1 hour per day per oracle level. This duration need not be continuous, but it must be spent in 1-hour increments.</p>
<p><strong>Blistered Caress (Su):</strong> You can channel the hostile, unforgiving heat of the sun into your touch. This is a melee touch attack that deals 1d8 points of fire damage per 2 oracle levels (Fortitude half). Against a plant creature, this touch heals or damages the creature (your choice) for 1d6 points of fire damage per oracle level. At 7th level, a creature that fails its save against this revelation becomes <Link to="/misc/sickened">sickened</Link> for 1d4 hours in addition to taking fire damage. At 15th level, your touch is so intense that a creature that fails its save is also <Link to="/misc/staggered">staggered</Link> for 1d6 rounds. You can use this ability once per day plus one additional time per day at 10th level.</p>
<p><strong>Luminous Form (Su):</strong> You can transform your body into churning light, granting you the effects of <Link to="/spell/blur">blur</Link> and causing your body to shed light as a <Link to="/eq-misc/sunrod">sunrod</Link>. At 7th level, creatures that end their turn adjacent to your luminous form become <Link to="/misc/blinded">blinded</Link> for 1 round (Fortitude negates). At 13th level, creatures that end their turn adjacent to your luminous form are blinded for 1d4 rounds (Fortitude reduces to 1 round). At 18th level, your luminescence is as bright as natural sunlight, and creatures affected by natural sunlight are so affected if they end their turn adjacent to your luminous form. You can maintain your luminous form for up to 1 minute per day per oracle level; this duration need not be continuous, but it must be used in 1-minute increments. You can forgo the blur and blinding aspects of this ability to instead simply shed light as a torch, though this still counts against the ability's duration for the day.</p>
<p><strong>Many Roads (Su):</strong> You gain an insight bonus on Fly and Survival checks equal to 1/2 your oracle level. Further, you learn to speak and read three <Link to="/misc/languages">languages</Link> in addition to those you already know.</p>
<p><strong>Serpent in the Sun (Su):</strong> So long as you are exposed to at least 4 hours of sunlight per day, you no longer need to eat to survive and you gain +2 bonus on saves against diseases. At 5th level, you become immune to nonmagical diseases and no longer need to drink water to survive. At 10th level, you become immune to magical diseases, gain a +2 bonus on saving throws against poisons, and only need to sleep half as long to rest or recover from fatigue or exhaustion. At 15th level, you become immune to poison and fatigue. You lose these benefits if you fail to spend at least 4 hours in sunlight in a 24-hour period.</p>
<p><strong>Solar Wind (Su):</strong> You can unleash a blast of searing wind at a single target within 30 feet as a ranged touch attack with no range increment. Your solar wind deals 1d6 points of fire damage + 1 for every 2 oracle levels you possess. At 7th level, you can also knock an opponent back, treating the blast as a <Link to="/rule/bull_rush">bull rush</Link> combat maneuver that uses your caster level + your Charisma modifier in place of your CMB. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Starlight Agility:</strong> You gain <Link to="/feat/dodge">Dodge</Link> as a bonus feat. At 8th level, you gain <Link to="/feat/wind_stance">Wind Stance</Link> as a bonus feat. At 15th level, you gain <Link to="/feat/lightning_stance">Lightning Stance</Link> as a bonus feat. You do not need to meet the prerequisites to receive these feats.</p>
<p><strong>Sun Stride:</strong> You can travel between areas of natural sunlight as if by means of a <em>dimension door</em> spell. This ability does not function in areas of less than bright light, though it does work within the area of a <em>daylight</em> spell. At 5th level, you can sun stride up to 40 feet per day; this can be a single stride of 40 feet or four strides of 10 feet each. At 9th level and every 4 levels thereafter, the distance you can sun stride doubles (80 feet at 9th level, 160 feet at 13th level, and 32 feet at 17th level). This amount can be split among many strides, but each one, no matter how small, counts as a 10-foot increment. You must be at least 5th level to select this revelation.</p>
<p><strong>Sungazer (Sp):</strong> You can study the sun and gaze upon any place its light touches. You can use <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> as a spell-like ability, but only for visual observation and you can only place your sensor in places currently being touched by sunlight. At 10th level, you can instead use <Link to="/spell/scrying">scrying</Link> to observe any area touched by sunlight. At 15th level, you can use <Link to="/spell/greater_scrying">greater scrying</Link> instead. You must be at least 5th level to select this revelation. You can sungaze for 1 minute per day per oracle level; the duration need not be continuous, but it must be used in 1-minute increments.</p>
<p><strong>Torch Touch (Su):</strong> As a move action, you can alter the amount of light shed by any nonmagical light source within 60 feet so that its light radius is either halved or doubled. At 1st level, you can affect light sources up to the size of a torch. At 7th level, you can affect any Medium or smaller nonmagical light source (such as a campfire). At 14th level, you can affect Large or smaller nonmagical light sources (such as bonfires) and magical light sources up to the size of an <Link to="/eq-misc/everburning_torch">everburning torch</Link>. If a creature is holding the light source you are trying to affect, the creature can attempt a Reflex save to avoid the effect.</p>
<h3 id="mystery-solar-final-revelation">Final Revelation</h3>
<p>At 20th level, yours becomes a journey without end. You cease aging, no longer suffer <Link to="/rule/age">age-related penalties</Link> to ability scores, and cannot be magically aged. Any spells you cast of the conjuration (teleport) subschool or with the fire or light descriptor are automatically <Link to="/feat/enlarged">enlarged</Link> without affecting their spell level.</p>
</>};
const _spellscar = {title: "Spellscar", jsx: <><h2 id="mystery-spellscar-spellscar">Spellscar</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 30</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/zyphus">Zyphus</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Pair>
<Pair plain title="4th"><Link to="/spell/obscure_object">Obscure object</Link></Pair>
<Pair plain title="6th"><Link to="/spell/dispel_magic">Dispel magic</Link></Pair>
<Pair plain title="8th"><Link to="/spell/lesser_globe_of_invulnerability">Lesser globe of invulnerability</Link></Pair>
<Pair plain title="10th"><Link to="/spell/break_enchantment">Break enchantment</Link></Pair>
<Pair plain title="12th"><Link to="/spell/antimagic_field">Antimagic field</Link></Pair>
<Pair plain title="14th"><Link to="/spell/spell_turning">Spell turning</Link></Pair>
<Pair plain title="16th"><Link to="/spell/spellscar">Spellscar</Link></Pair>
<Pair plain title="18th"><Link to="/spell/mages_disjunction">Mage's disjunction</Link></Pair>
</Ability>
<h3 id="mystery-spellscar-revelations">Revelations</h3>
<p>An oracle with the Spellscar mystery can choose from any of the following revelations.</p>
<p><strong>Animate Primal Forces (Su):</strong> As a standard action, you can summon a single Small air, earth, fire, or water <Link to="/family/elemental">elemental</Link> to serve you. It remains for a number of rounds equal to your Charisma modifier. At 7th level, you can summon a Medium elemental. At 9th level, you can summon a Large elemental. You can use this ability once per day plus one additional time per day at 10th level. You must be at least 3rd level to select this revelation.</p>
<p><strong>Eldritch Bolt (Su):</strong> You can damage foes with a bolt of raw magical energy. Make a ranged touch attack against any foe within 30 feet. On a hit, you deal 1d8 points of force damage, +1 point of damage per two oracle levels. At 10th level, the bolt's range increases to 60 feet. You may use this revelation a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Eldritch Resistance (Su):</strong> You gain resistance 2 to acid, cold, electricity, fire, and sonic. This resistance increases to 5 at 5th level, 10 at 11th level, and 20 at 17th level.</p>
<p><strong>Eldritch Scar (Su):</strong> Once per day when you damage a creature with a spell you cast, you may, as a swift action, cause your magic to leave an eldritch scar upon that creature. An eldritch scar appears as a normal scar, save that it flickers with faint radiance of a color of your choice. The next time that creature casts a spell, uses a spell-like ability, or activates a magic item, it triggers a <Link to="/rule/primal_magic">primal magic event</Link> of a CR equal to your caster level. This causes the eldritch scar to vanish. A creature can be marked by only one eldritch scar at a time (a more powerful one replaces a weaker one). An eldritch scar fades automatically after 24 hours. It can be removed before that point via any effect capable of removing a <Link to="/rule/curses">curse</Link> (the curse's level equals your caster level), but if an attempt to remove an eldritch scar fails, that attempt triggers a primal magic event - an event triggered this way does not cause the eldritch scar to fade. You must be at least 7th level to select this revelation.</p>
<p><strong>Magic Penetration (Ex):</strong> You gain a +2 bonus on any caster level check made to dispel or remove a magic effect (such as when using the <em>dispel magic</em> or <Link to="/spell/remove_curse">remove curse</Link> spell). If you are 9th level or higher, the bonus increases to +4.</p>
<p><strong>Mystic Null (Ex):</strong> You gain a +2 insight bonus on saves against spells and spell-like abilities. At 7th level, this bonus also applies on saves against supernatural abilities. At 11th level, the bonus increases to +4.</p>
<p><strong>Primal Manipulation (Su):</strong> Whenever you cast a spell that deals acid, cold, electricity, or fire damage, you may change it to deal one of the other listed damage types. You may use this ability once per day, plus one additional time for every 5 levels. At 15th level, you can change a spell to deal sonic damage, though the damage is halved. At 20th level, you can change a spell to deal force damage, though the damage is halved. You must be at least 7th level to select this revelation.</p>
<p><strong>Primal Mastery (Su):</strong> Whenever a spell you cast triggers a primal magic event, or whenever you use a rod of wonder, roll d% twice when generating the result. You may pick which of the two results actually occurs. You gain a +2 bonus on all saving throws made to resist primal magic events or magical effects caused by a rod of wonder.</p>
<p><strong>Trigger Primal Magic Event (Su):</strong> Once per day as an immediate action, you can cause a spellcaster (including yourself) within 30 feet to trigger a primal magic event as the spell is being cast. At 13th level, you can cause any creature in the act of activating a magic item to trigger a primal magic event. At 17th level, you can use this ability twice per day. A spellcaster can make a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + twice the spell's level) to focus the magic and avoid triggering a primal magic effect, but non-spellcasters activating magic items have no such option. You must be at least 9th level before selecting this revelation.</p>
<p><strong>Spell Resistance (Ex):</strong> You gain SR equal to your oracle level + 5. You must be at least 11th level before selecting this revelation.</p>
<h3 id="mystery-spellscar-final-revelation">Final Revelation</h3>
<p>At 20th level, you become a master of primal magic. Whenever you cast a spell, you can choose to trigger a primal magic event in addition to casting the spell itself - you can use this ability once per minute. If your spellcasting causes a primal magic event to occur, your spell effect is not replaced by the primal magic event - it takes place normally, along with the event itself.</p>
</>};
const _stone = {title: "Stone", jsx: <><h2 id="mystery-stone-stone">Stone</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 51</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/torag">Torag</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/magic_stone">Magic stone</Link></Pair>
<Pair plain title="4th"><Link to="/spell/stone_call">Stone call</Link></Pair>
<Pair plain title="6th"><Link to="/spell/meld_into_stone">Meld into stone</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wall_of_stone">Wall of stone</Link></Pair>
<Pair plain title="10th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="12th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="14th"><Link to="/spell/statue">Statue</Link></Pair>
<Pair plain title="16th"><Link to="/spell/repel_metal_or_stone">Repel metal or stone</Link></Pair>
<Pair plain title="18th"><Link to="/spell/clashing_rocks">Clashing rocks</Link></Pair>
</Ability>
<h3 id="mystery-stone-revelations">Revelations</h3>
<p>An oracle with the Stone mystery can choose from any of the following revelations.</p>
<p><strong>Acid Skin (Ex):</strong> You gain resist acid 5. This resistance increases to 10 at 5th level and 20 at 11th level. At 17th level, you gain immunity to acid.</p>
<p><strong>Clobbering Strike (Ex):</strong> Whenever you score a critical hit against an opponent with a spell that requires an attack roll, you may immediately attempt to trip your opponent as a swift action. You do not provoke an attack of opportunity as normal for this trip attempt. You cannot be tripped in return when using this ability.</p>
<p><strong>Crystal Sight (Ex):</strong> You can see through stone, earth, or sand as easily as if it were transparent crystal. Your gaze can penetrate a number of feet equal to your oracle level, or 1/12th this thickness of metal. You can use this ability a number of rounds per day equal to your oracle level, but these rounds do not need to be consecutive.</p>
<p><strong>Earth Glide (Su):</strong> You can pass through stone, dirt, or almost any other sort of earth except worked stone and metal as easily as a fish swims through water. If protected against fire damage, you can even glide through lava. You glide at your base land speed. While gliding, you breathe stone as if it were air (you do not need to hold your breath). Your burrowing leaves behind no tunnel or hole, nor does it create any ripple or sign of your presence. A <Link to="/spell/move_earth">move earth</Link> spell cast on an area where you are flings you back 30 feet, stunning you for 1 round unless you succeed on a DC 15 Fortitude save. Activating this ability is a free action. You can glide for 1 minute per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. You must be at least 7th level to select this revelation. You can bring other creatures with you when you glide, but each passenger costs an additional minute per minute of travel.</p>
<p><strong>Mighty Pebble (Su):</strong> As a standard action, you can charge and throw a pebble (or other stone of similar size) that detonates when it strikes a target as a ranged attack. The pebble has a range increment of 20 feet and has a +1 enhancement bonus to attack and damage for every four oracle levels you possess. Any creature struck by the pebble takes 1d6 points of bludgeoning damage per two oracle levels you possess (minimum 1d6). Creatures in squares adjacent to the target take half damage, or no damage if they make a Reflex saving throw. If the attack roll misses, treat the pebble as a <Link to="/rule/throw_splash_weapon">thrown splash weapon</Link> to determine where it lands. You can use this ability once per day, plus one additional time per day at 5th level and every five levels thereafter.</p>
<p><strong>Rock Throwing (Ex):</strong> You are an accomplished rock thrower and have a +1 racial bonus on attack rolls with thrown rocks. You can hurl rocks up to two categories smaller than your own size. The range increment for a rock is 20 feet, and you can hurl it up to 5 range increments. Damage for a hurled rock is 2d4 for a Medium creature or 2d3 for a Small creature, plus 1-1/2 your Strength bonus.</p>
<p><strong>Shard Explosion (Su):</strong> As a swift action, you can cause jagged pieces of stone to explode outward from your body. These shards deal 1d6 points of piercing damage per two oracle levels (minimum 1d6) to all creatures within a 10-foot <Link to="/misc/burst">burst</Link>. A Reflex save halves this damage. In addition, the broken shards make the area <Link to="/rule/difficult_terrain">difficult terrain</Link> until your next turn. You can use this ability once per day, plus one additional time per day at 5th level and every five levels thereafter.</p>
<p><strong>Steelbreaker Skin (Su):</strong> As a standard action, you can harden your flesh so that weapons that strike you are damaged or destroyed. Anytime a melee or ranged weapon strikes you, the weapon takes an amount of damage equal to your oracle level. This ability does not prevent the weapon from harming you unless the damage destroys the weapon attacking you. You can use this ability once per day, but the duration is 1 minute/level. You must be at least 7th level to select this revelation. At 15th level, the damage from this ability ignores up to 10 points of hardness.</p>
<p><strong>Stone Stability (Ex):</strong> You receive a +4 bonus to your Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground. At 5th level, you gain <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat. At 10th level, you gain <Link to="/feat/greater_trip">Greater Trip</Link> as a bonus feat. You do not need to meet the prerequisites to gain these feats.</p>
<p><strong>Touch of Acid (Su):</strong> As a standard action, you can perform a melee touch attack that deals 1d6 points of acid damage +1 point for every two oracle levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier. At 11th level, any weapon that you wield deals +1d6 points of acid damage, similar to how a flaming weapon operates.</p>
<h3 id="mystery-stone-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a master of acid and earth. You can apply any one of the following feats to any acid or earth spell without increasing the level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>.</p>
</>};
const _streets = {title: "Streets", jsx: <><h2 id="mystery-streets-streets">Streets</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 20</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/milani">Milani</Link>, <Link to="/faith/norgorber">Norgorber</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/disguise_self">Disguise self</Link></Pair>
<Pair plain title="4th"><Link to="/spell/detect_thoughts">Detect thoughts</Link></Pair>
<Pair plain title="6th"><Link to="/spell/glyph_of_warding">Glyph of warding</Link></Pair>
<Pair plain title="8th"><Link to="/spell/illusory_wall">Illusory wall</Link></Pair>
<Pair plain title="10th"><Link to="/spell/false_vision">False vision</Link></Pair>
<Pair plain title="12th"><Link to="/spell/getaway">Getaway</Link></Pair>
<Pair plain title="14th"><Link to="/spell/screen">Screen</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mages_magnificent_mansion">Mage's magnificent mansion</Link></Pair>
<Pair plain title="18th"><Link to="/spell/clone">Clone</Link></Pair>
</Ability>
<h3 id="mystery-streets-revelations">Revelations</h3>
<p>An oracle with the Streets mystery can choose from any of the following revelations.</p>
<p><strong>The City Provides (Ex):</strong> Once per day as a full-round action when in an urban environment, you can scrounge up any nonmagical item of your choosing with a value of up to 10 gp per oracle level. You cannot obtain coins or trade goods, and the item is too tattered to resell (though fully functional). If you scrounge a new item, any item previously obtained in this way becomes useless.</p>
<p><strong>Eyes of the Streets (Su):</strong> Once per day as a full-round action, you can summon a spirit rat, pigeon, or similar tiny creature to serve as your eyes on, above, and beneath the streets - this spirit serves as an <Link to="/spell/arcane_eye">arcane eye</Link>. At 10th level, you can summon multiple such spirits; this ability functions as <Link to="/spell/prying_eyes">prying eyes</Link>. At 15th level, this ability functions as <Link to="/spell/greater_prying_eyes">greater prying eyes</Link>.</p>
<p><strong>Face in the Crowd (Ex):</strong> You gain a +4 bonus on Stealth checks, and can attempt a Stealth check in a crowd even while being observed.</p>
<p><strong>Keep to the Corners (Su):</strong> Once per day when you fail a Reflex saving throw, you can reroll the saving throw with a +4 insight bonus. You must take the second result, even if it is worse. At 7th level and 15th level, you can use this ability one additional time per day.</p>
<p><strong>Knife in the Dark (Ex):</strong> As a standard action, you can make a <Link to="/ability/sneak_attack">sneak attack</Link> as if you were a rogue of your oracle level. You can use this ability once per day, plus one additional time per day at 5th level and for every 5 levels thereafter.</p>
<p><strong>Nooks and Crannies (Ex):</strong> You can move through any sort of <Link to="/rule/difficult_terrain">obstacle or difficult terrain</Link> in an urban environment (including <Link to="/rule/crowds">crowds</Link>) at your normal speed and without taking damage or suffering any other impairment. Areas that are enchanted or magically manipulated to impede motion still affect you.</p>
<p><strong>Secrets of City (Su):</strong> Once per day when you cast a divination spell affecting creatures or areas in urban environments, you can double the spell's range. At 7th level and 15th level, you can use this ability one additional time per day.</p>
<p><strong>Shroud of the City (Sp):</strong> You can melt into the streets and alleys. You can cast <Link to="/spell/veil">veil</Link> once per day, but can affect only yourself and one willing ally per oracle level within 30 feet. You can make the targets appear only as typical members of a settlement with which you are familiar, and can't match the appearance of specific creatures. At 7th level and 15th level, you can use this ability one additional time per day.</p>
<p><strong>The Streets Are Your Friend (Ex):</strong> As long as you are in an urban environment, you can call upon the city to help an ally within 30 feet succeed at a task. The ally gets a +2 competence bonus on skill checks with a particular skill as long as you concentrate. This bonus increases to +3 at 9th level, and to +4 at 15th level.</p>
<h3 id="mystery-streets-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become an avatar of the city. When you speak the name of a creature and a city out loud, you know whether that creature is in that city. You can also learn about any settlement you are in at will; this functions as <Link to="/spell/commune_with_nature">commune with nature</Link>, operating only in towns and settlements rather than natural terrain.</p>
</>};
const _succor = {title: "Succor", jsx: <><h2 id="mystery-succor-succor">Succor</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 20</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/milani">Milani</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/qi_zhong">Qi Zhong</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Pair>
<Pair plain title="4th"><Link to="/spell/shield_of_fortification">Shield of fortification</Link></Pair>
<Pair plain title="6th"><Link to="/spell/coordinated_effort">Coordinated effort</Link></Pair>
<Pair plain title="8th"><Link to="/spell/greater_shield_of_fortification">Greater shield of fortification</Link></Pair>
<Pair plain title="10th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="12th"><Link to="/spell/greater_heroism">Greater heroism</Link></Pair>
<Pair plain title="14th"><Link to="/spell/expend">Expend</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_spellcrash">Greater spellcrash</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wall_of_suppression">Wall of suppression</Link></Pair>
</Ability>
<h3 id="mystery-succor-revelations">Revelations</h3>
<p>An oracle with the Succor mystery can choose from any of the following revelations.</p>
<p><strong>Combat Healer (Su):</strong> As per the <Link to="/mystery/battle">battle</Link> mystery revelation of the same name: Whenever you cast <Link to="/main/cure_spells">a cure spell</Link> (a spell with "cure" in its name), you can cast it as a swift action, as if using the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat, by expending two spell slots. This does not increase the level of the spell. You can use this ability once per day at 7th level and one additional time per day for every four levels beyond 7th. You must be at least 7th level to select this revelation.</p>
<p><strong>Curse of Dampening (Su):</strong> You diminish one target within 30 feet as a standard action, making its attacks weaker. Whenever the target would roll to deal damage with an attack or spell, it deals the minimum amount of damage. This curse lasts for 1 round per 2 oracle levels you have (minimum 1). A successful Will saving throw negates this effect. This is a mind-affecting curse effect. You can use this revelation once per day, plus one additional time at 11th level and 15th level. You must be at least 7th level before selecting this revelation.</p>
<p><strong>Enhanced Cures (Su):</strong> As per the <Link to="/mystery/life">life</Link> oracle mystery revelation of the same name: Whenever you cast a cure spell, the maximum number of hit points healed is based on your oracle level, not the limit based on the spell. For example, an 11th-level oracle of succor with this revelation may cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> to heal 1d8+11 hit points instead of the normal 1d8+5 maximum.</p>
<p><strong>Enhanced Inflictions (Su):</strong> You recognize that harming your enemies is sometimes the only way to help your allies, and so your wrath is particularly fierce. Whenever you cast an inflict spell (a spell with the word "inflict" in the name), the maximum amount of damage dealt by the spell is based on your oracle level, not the limit based on the spell. For example, an 11th-level oracle of succor with this revelation can cast <Link to="/spell/inflict_light_wounds">inflict light wounds</Link> to deal 1d8+11 points of damage instead of the normal 1d8+5 maximum.</p>
<p><strong>Perfect Aid (Ex):</strong> You can effortlessly give aid to your allies, whether that means providing them with help attacking or defending them in the heat of combat. You gain <Link to="/feat/bodyguard">Bodyguard</Link> as a bonus feat, and whenever you use the <Link to="/rule/aid_another_2">aid another</Link> action to provide a bonus on attack rolls or to AC to one of your allies, the bonus you provide increases by 1. This bonus increases by 1 at 4th level and every 5 oracle levels thereafter (to a maximum of +5 at 19th level). It doesn't stack with other feats or class features that improve the bonus you provide when using the aid another action. This revelation also counts as the <Link to="/feat/combat_expertise">Combat Expertise</Link> feat, but only for the purpose of meeting the prerequisites of the <Link to="/feat/swift_aid">Swift Aid</Link> feat and any feat that lists Swift Aid as a prerequisite.</p>
<p><strong>Pitiful Foe (Su):</strong> You can temporarily curse one target within 30 feet as a standard action, making it pitiful and ineffective in battle. While this ability is in effect, the target is never considered to be threatening you or your allies, even if it is armed and you or your allies are standing in a square into which it can make a melee attack. If the target rolls a natural 20 on an attack roll or saving throw, the attack or saving throw is not an automatic success (as would be normal) and whether it is successful is instead determined normally. Additionally, the target automatically fails all rolls to confirm critical hits. This curse lasts for 1 round per 2 oracle levels you have (minimum 1). A successful Will saving throw negates this effect. This is a mind-affecting curse effect. You can use this revelation once per day, plus one additional time at 7th and 15th levels.</p>
<p><strong>Shell of Succor (Su):</strong> You can surround an ally with bolstering energies that supplement its health and grant it extra vigor. With a touch from you (a standard action), one creature gains a ward of restorative energy, granting it a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to your Charisma bonus + 1d6 per 2 oracle levels you have (maximum 10d6). These temporary hit points last 1 minute per oracle level you have.</p>
<p>The target always loses these temporary hit points first, even before other temporary hit points (including those from, for example, the <Link to="/spell/purify_body">purify body</Link> spell or a kineticist's <Link to="/kinetic/force_ward">force ward</Link> defense wild talent). If an attack deals fewer points of damage than the target has as temporary hit points from shell of succor, it still reduces those temporary hit points but otherwise counts as a miss for the purpose of abilities that trigger on a hit or a miss.</p>
<p>You can use this revelation once per day, plus one additional time at 11th and 19th levels. You must be at least 3rd level before selecting this revelation.</p>
<p><strong>Soul Siphon (Su):</strong> As per the <Link to="/mystery/bones">bones</Link> oracle mystery revelation of the same name: As a ranged touch attack, you can unleash a ray that causes a target to gain one negative level. The ray has a range of 30 feet. This negative level lasts for a number of minutes equal to your Charisma modifier. Whenever this ability gives a target a negative level, you heal a number of hit points equal to your oracle level. You can use this ability once per day, plus one additional time at 11th level and every four levels thereafter. You must be at least 7th level to select this revelation.</p>
<p><strong>Spirit Boost (Su):</strong> As per the <em>life</em> oracle mystery revelation of the same name: Whenever your healing spells heal a target up to its maximum hit points, any excess points persist for 1 round per level as temporary hit points (up to a maximum number of temporary hit points equal to your oracle level).</p>
<p><strong>Teamwork Mastery (Ex, Sp):</strong> You are an immaculate team player and can distribute your team-based insights to your allies with a touch. This revelation grants you a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>. You must meet the teamwork feat's prerequisites, if any. Additionally, you can touch an ally as a standard action to confer upon it the benefits of any one teamwork feat that you have. This effect persists for a number of rounds equal to 1/2 your oracle level (minimum 1). You can confer the benefits of a teamwork feat you have a number of times per day equal to 3 + your Charisma modifier.</p>
<h3 id="mystery-succor-final-revelation">Final Revelation</h3>
<p>You become a beacon of aid and assistance to your allies and those you deem worthy of receiving your succoring magical benefits. You can apply any one of the following metamagic feats to any spell you cast that targets one or more of your allies without increasing the level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. You do not need to have these feats to use this ability, and you can use this ability any number of times per day on any spell that can be affected by the listed metamagic feats.</p>
</>};
const _time = {title: "Time", jsx: <><h2 id="mystery-time-time">Time</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 56</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/pharasma">Pharasma</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/memory_lapse">Memory lapse</Link></Pair>
<Pair plain title="4th"><Link to="/spell/gentle_repose">Gentle repose</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sands_of_time">Sands of time</Link></Pair>
<Pair plain title="8th"><Link to="/spell/threefold_aspect">Threefold aspect</Link></Pair>
<Pair plain title="10th"><Link to="/spell/permanency">Permanency</Link></Pair>
<Pair plain title="12th"><Link to="/spell/contingency">Contingency</Link></Pair>
<Pair plain title="14th"><Link to="/spell/disintegrate">Disintegrate</Link></Pair>
<Pair plain title="16th"><Link to="/spell/temporal_stasis">Temporal stasis</Link></Pair>
<Pair plain title="18th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
<h3 id="mystery-time-revelations">Revelations</h3>
<p>An oracle with the Time mystery can choose from any of the following revelations.</p>
<p><strong>Aging Touch (Su):</strong> Your touch ages living creatures and objects. As a melee touch attack, you can deal 1 point of <Link to="/rule/strength_damage">Strength damage</Link> for every two oracle levels you possess to living creatures. Against objects or constructs, you can deal 1d6 points of damage per oracle level. If used against an object in another creature's possession, treat this attack as a <Link to="/rule/sunder">sunder</Link> combat maneuver. You can use this ability once per day, plus one additional time per day for every five oracle levels you possess.</p>
<p><strong>Erase from Time (Su):</strong> As a melee touch attack, you can temporarily remove a creature from time altogether. The target creature must make a Fortitude save or vanish completely for a number of rounds equal to 1/2 your oracle level (minimum 1 round). No magic or divinations can detect the creature during this time, as it exists outside of time and space - in effect, the creature ceases to exist for the duration of this ability. At the end of the duration, the creature reappears unharmed in the space it last occupied (or the nearest possible space, if the original space is now occupied). You can use this ability once per day, plus one additional time per day at 11th level.</p>
<p><strong>Knowledge of the Ages (Su):</strong> You can search through time to recall some bit of forgotten lore or information. You can retry any Knowledge skill check you have made within the past minute, gaining an insight bonus on the check equal to your Charisma modifier. You can use this ability a number times per day equal to your Charisma modifier.</p>
<p><strong>Momentary Glimpse (Su):</strong> Once per day, you can gain a glimpse into your immediate future. On the round after you use this ability, you gain a +2 insight bonus on a single attack roll, saving throw, or skill check or to your Armor Class until the start of your next turn. At 5th level, and every four levels thereafter, you can use this ability one additional time per day.</p>
<p><strong>Rewind Time (Su):</strong> Once per day as an immediate action, you can reroll any one d20 roll that you have just made before the results of the roll are revealed. You must take the result of the reroll, even if it's worse than the original roll. At 11th level, and every four levels thereafter, you can use this ability an additional time per day. You must be at least 7th level to select this revelation.</p>
<p><strong>Speed or Slow Time (Sp):</strong> As a standard action, you can speed up or slow down time, as either the <Link to="/spell/haste">haste</Link> or <Link to="/spell/slow">slow</Link> spell. You can use this ability once per day, plus one additional time per day at 12th level and 17th level. You must be at least 7th level before selecting this revelation.</p>
<p><strong>Temporal Celerity (Su):</strong> Whenever you roll for initiative, you can roll twice and take either result. At 7th level, you can always act in the surprise round, but if you fail to notice the ambush, you act last, regardless of your initiative result (you act in the normal order in following rounds). At 11th level, you can roll for initiative three times and take any one of the results.</p>
<p><strong>Time Flicker (Su):</strong> As a standard action, you can flicker in and out of time, gaining <Link to="/rule/concealment">concealment</Link> (as the <Link to="/spell/blur">blur</Link> spell). You can use this ability for 1 minute per oracle level that you possess per day. This duration does not need to be consecutive, but it must be spent in 1-minute increments. At 7th level, each time you activate this ability, you can treat it as the <Link to="/spell/blink">blink</Link> spell, though each round spent this way counts as 1 minute of your normal time flicker duration. You must be at least 3rd level to select this revelation.</p>
<p><strong>Time Hop (Su):</strong> As a move action, you can teleport up to 10 feet per oracle level that you possess per day. This teleportation must be used in 5-foot increments. This movement does not provoke attacks of opportunity. You must have line of sight to your destination to use this ability. You can bring other willing creatures with you, but you must expend an equal amount of distance for each creature brought. You must be at least 7th level to select this revelation.</p>
<p><strong>Time Sight (Su):</strong> You can peer through the mists of time to see things as they truly are, as if using the <Link to="/spell/true_seeing">true seeing</Link> spell. At 15th level, this functions like <Link to="/spell/moment_of_prescience">moment of prescience</Link>. At 18th level, this functions like <Link to="/spell/foresight">foresight</Link>. You can use this ability for a number of minutes per day equal to your oracle level, but these minutes do not need to be consecutive. You must be at least 11th level to select this revelation.</p>
<h3 id="mystery-time-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a true master of time and stop aging. You cannot be magically aged and no longer take penalties to your ability scores for aging. <Link to="/rule/age">Age bonuses</Link> still accrue, and any aging penalties that you have already accrued remain in place. You cannot die of old age, but you can be killed or die through accident, disease, poison, or other external effects. In addition, you can cast <em>time stop</em> once per day as a spell-like ability.</p>
</>};
const _volcano = {title: "Volcano", jsx: <><h2 id="mystery-volcano-volcano">Volcano</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_95_anvil_of_fire">Pathfinder #95: Anvil of Fire pg. 72</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/flauros">Flauros</Link>, <Link to="/faith/mhar">Mhar</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/valani">Valani</Link>, <Link to="/faith/yamatsumi">Yamatsumi</Link>, <Link to="/faith/ymeri">Ymeri</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/burning_hands">Burning hands</Link></Pair>
<Pair plain title="4th"><Link to="/spell/heat_metal">Heat metal</Link></Pair>
<Pair plain title="6th"><Link to="/spell/protection_from_energy">Protection from energy</Link></Pair>
<Pair plain title="8th"><Link to="/spell/volcanic_storm">Volcanic storm</Link></Pair>
<Pair plain title="10th"><Link to="/spell/geyser">Geyser</Link></Pair>
<Pair plain title="12th"><Link to="/spell/contagious_flame">Contagious flame</Link></Pair>
<Pair plain title="14th"><Link to="/spell/fire_storm">Fire storm</Link></Pair>
<Pair plain title="16th"><Link to="/spell/wall_of_lava">Wall of lava</Link></Pair>
<Pair plain title="18th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
<h3 id="mystery-volcano-revelations">Revelations</h3>
<p>An oracle with the Volcano mystery can choose from any of the following revelations.</p>
<p><strong>Ash Cloud (Su):</strong> As a standard action, you can surround yourself with a 10-foot-radius cloud of ash, which functions as an <Link to="/spell/obscuring_mist">obscuring mist</Link> spell, except you can see through it clearly. The cloud is stationary, and remains for 1 round per oracle level. Using this ability again causes your previous cloud to fall to the ground. At 7th level, your ash cloud fills with embers. All creatures in the cloud except you take 1d6 points of fire damage per round and must succeed at Fortitude saves to avoid choking, as though they were breathing in <Link to="/rule/smoke_effects">heavy smoke</Link>.</p>
<p><strong>Breath of Creation (Ex):</strong> Volcanic vapors elevate your mind even as they ravage your body. When you take <Link to="/rule/constitution_damage">Constitution damage</Link> from <Link to="/rule/volcanoes">volcanic gases</Link>, you gain a bonus to your Charisma equal to the damage taken. This bonus lasts for 1 hour or until the ability damage is healed. The maximum bonus to your Charisma is +2, increasing to +4 at 10th level, and to +6 at 15th level.</p>
<p><strong>Burning Magic (Su):</strong> Whenever a creature fails a saving throw against one of your spells that deals fire damage, that creature catches on fire, taking 1 point of fire damage per spell level at the beginning of its turn. The fire lasts for 1d4 rounds, but it can be extinguished as a move action if the creature succeeds at a Reflex save (using the original spell's DC). Dousing the creature with water as a standard action grants a +2 bonus on this save, while immersing the creature in water extinguishes the fire. Spells that don't grant a saving throw don't cause a creature to catch on fire.</p>
<p><strong>Cleansing Flames (Su):</strong> As a swift action, you can take 1d4 points of damage per oracle level to gain a new saving throw against a single ongoing effect. The effect must be one for which you already failed a saving throw. If you succeed, the effect is removed. At 7th and 15th levels, you can use this ability one additional time per day.</p>
<p><strong>Erupt (Su):</strong> As a swift action, you cause flaming shards of rock to erupt from your body. These shards deal 1d6 points of damage per 2 oracle levels (minimum 1d6) to all creatures in a 10-foot-radius <Link to="/misc/burst">burst</Link> (Reflex half). Half of this damage is fire damage and the other half is piercing damage. The shards create <Link to="/rule/difficult_terrain">difficult terrain</Link> for 1 round. You can use this ability once per day, plus one additional time per day at 5th level and every 5 levels thereafter.</p>
<p><strong>Fiery Conduit (Su):</strong> You can deliver touch spells to burning creatures within 30 feet without actually touching them. For the purposes of this ability, burning creatures include creatures that have caught on fire, creatures taking ongoing fire damage, and creatures with the fire subtype or that are polymorphed into such creatures. You must succeed at a ranged touch attack to affect an unwilling target.</p>
<p><strong>Lava Walk (Su):</strong> You can walk across lava, magma, and similarly heated stone at your normal movement speed. You are immune to any fire damage caused by the surface while you walk above it, even if it radiates damage at a distance. While using lava walk, you never slip or fall from poor or slippery footing. You can use lava walk for 1 minute per day per oracle level. This duration doesn't need to be consecutive, but it must be spent in 1-minute increments. You must be at least 3rd level to select this revelation.</p>
<p><strong>Magma Form (Su):</strong> As a standard action, you can assume the form of a <Link to="/monster/small_magma_elemental">Small magma elemental</Link>, as <Link to="/spell/elemental_body_i">elemental body I</Link>. You gain the same abilities as if you had chosen an earth elemental's form, except your earth glide functions as the earth glide ability of a magma elemental. At 9th level, you can assume the form of a Medium magma elemental, as <Link to="/spell/elemental_body_ii">elemental body II</Link>. At 11th level, you can assume the form a Large magma elemental, as <Link to="/spell/elemental_body_iii">elemental body III</Link>. At 13th level, you can assume the form of a Huge magma elemental, as <Link to="/spell/elemental_body_iv">elemental body IV</Link>. You can use this ability once per day, but the duration is 1 hour per oracle level. You must be at least 7th level to choose this revelation.</p>
<p><strong>Pyroclastic Shove (Su):</strong> As a standard action, you conjure a cascade of volcanic ash to <Link to="/rule/bull_rush">bull rush</Link> a creature within 30 feet of you. The CMB of this cascade is equal to your base attack bonus + your Charisma modifier + 4 from the cascade's Gargantuan size. If the bull rush succeeds, the creature takes 1d6 points of fire damage per oracle level. At 12th and at 17th level, you can use this ability one additional time per day. You must be 7th level to select this revelation.</p>
<p><strong>Touch of Flame (Su):</strong> As a standard action, you can perform a melee touch attack that deals 1d6 points of fire damage + 1 point for every 2 oracle levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier. At 11th level, when you wield a weapon, it is treated as a <Link to="/magic-enh/flaming">flaming</Link> weapon.</p>
<h3 id="mystery-volcano-final-revelation">Final Revelation</h3>
<p>At 20th level, the oracle's body takes on the consistency of rock, and her touch carries the heat of a volcano. She gains the fire and earth subtypes and becomes vulnerable to cold. Any fire damage she deals ignores the first 10 points of fire resistance, but not fire immunity. The oracle gains a +4 bonus to natural armor. Her attacks with natural weapons, unarmed strikes, and metal-hafted weapons deal an additional 1d6 points of fire damage. Any creature that strikes the oracle with a natural weapon or unarmed strike, or that succeeds at a grapple combat maneuver check against her, takes 1d6 points of fire damage. This damage stacks with other sources of fire damage. You can suppress or reestablish this heat as a standard action.</p>
</>};
const _waves = {title: "Waves", jsx: <><h2 id="mystery-waves-waves">Waves</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 52</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/pharasma">Pharasma</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/touch_of_the_sea">Touch of the sea</Link></Pair>
<Pair plain title="4th"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="6th"><Link to="/spell/water_breathing">Water breathing</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wall_of_ice">Wall of ice</Link></Pair>
<Pair plain title="10th"><Link to="/spell/geyser">Geyser</Link></Pair>
<Pair plain title="12th"><Link to="/spell/fluid_form">Fluid form</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vortex">Vortex</Link></Pair>
<Pair plain title="16th"><Link to="/spell/seamantle">Seamantle</Link></Pair>
<Pair plain title="18th"><Link to="/spell/tsunami">Tsunami</Link></Pair>
</Ability>
<h3 id="mystery-waves-revelations">Revelations</h3>
<p>An oracle with the Waves mystery can choose from any of the following revelations.</p>
<p><strong>Blizzard (Su):</strong> As a standard action, you can create a blizzard of snow and ice. You can create one 10-foot-cube of storm per oracle level. These cubes can be arranged in any pattern you desire, but each cube must be adjacent to another and one must be adjacent to you. Any creature caught in the blizzard takes 1d4 points of cold damage per oracle level, with a Reflex save resulting in half damage. The storm lasts for a number of rounds equal to your Charisma modifier; the ground remains icy (+5 to Acrobatics DCs) as long as local conditions permit. The blizzard obscures sight beyond 5 feet, providing total concealment. A creature within 5 feet has <Link to="/rule/concealment">concealment</Link>. You can use this ability once per day. You must be 11th level to select this revelation.</p>
<p><strong>Fluid Nature (Ex):</strong> You receive a +4 bonus to your Combat Maneuver Defense against bull rush, drag, grapple, reposition, and trip attempts. A creature trying to confirm a critical hit against you has a -4 penalty on its confirmation roll. At 5th level, you gain <Link to="/feat/dodge">Dodge</Link> as a bonus feat. You do not need to meet the prerequisite to gain this feat.</p>
<p><strong>Fluid Travel (Su):</strong> You can walk on liquid as if it were a solid surface. Walking on the liquid does not harm you; you can walk on acid or even lava (as if walking on a solid temporary crust), though you would still take fire damage from being near the lava. You can move across this surface at your normal land speed. At 7th level, while this ability is in effect, you can instead go underwater, gaining a swim speed of 60 feet and the ability to breathe water. You can use this ability for 1 hour per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-hour increments.</p>
<p><strong>Freezing Spells (Su):</strong> Whenever a creature fails a saving throw and takes cold damage from one of your spells, it is slowed (as the <Link to="/spell/slow">slow</Link> spell) for 1 round. Spells that do not allow a save do not slow creatures. At 11th level, the duration increases to 1d4 rounds.</p>
<p><strong>Ice Armor (Su):</strong> You can conjure armor of ice that grants you a +4 armor bonus. At 7th level, and every four levels thereafter, this bonus increases by +2. At 13th level, this armor grants you DR 5/piercing. In cold conditions, the armor bonus (and DR bonus) increases by 2; in very hot conditions it decreases by 2. You can use this armor for 1 hour per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-hour increments.</p>
<p><strong>Icy Skin (Ex):</strong> You gain resist cold 5. This resistance increases to 10 at 5th level and 20 at 11th level. At 17th level, you gain immunity to cold.</p>
<p><strong>Punitive Transformation (Su):</strong> You can transform an opponent into a harmless animal as if using <Link to="/spell/baleful_polymorph">baleful polymorph</Link>. This transformation lasts 1 round per oracle level. Transforming another creature causes the first to immediately revert to normal. You may use this ability a number of times per day equal to your Charisma modifier. You must be at least 7th level before selecting this revelation.</p>
<p><strong>Water Form (Su):</strong> As a standard action, you can assume the form of a <Link to="/monster/small_water_elemental">Small water elemental</Link>, as <Link to="/spell/elemental_body_i">elemental body I</Link>. At 9th level, you can assume the form of a Medium water elemental, as <Link to="/spell/elemental_body_ii">elemental body II</Link>. At 11th level, you can assume the form of a Large water elemental, as <Link to="/spell/elemental_body_iii">elemental body III</Link>. At 13th level, you can assume the form of a Huge water elemental, as <Link to="/spell/elemental_body_iv">elemental body IV</Link>. You can use this ability once per day, but the duration is 1 hour/level. You must be at least 7th level to select this revelation.</p>
<p><strong>Water Sight (Su):</strong> You can see through fog and mist without penalty as long as there is enough light to allow you to see normal. At 7th level, you can use any calm pool of water at least 1 foot in diameter as a scrying device, as if using the <Link to="/spell/scrying">scrying</Link> spell. At 15th level, this functions like <Link to="/spell/greater_scrying">greater scrying</Link>. You can use the scrying abilities for a number of rounds per day equal to your oracle level, but these rounds do not need to be consecutive.</p>
<p><strong>Wintry Touch (Su):</strong> As a standard action, you can perform a melee touch attack that deals 1d6 points of cold damage + 1 point for every two oracle levels you possess. You can use the wintry touch ability a number of times per day equal to 3 + your Charisma modifier. At 11th level, any weapon that you wield is treated as a <Link to="/magic-enh/frost">frost</Link> weapon.</p>
<h3 id="mystery-waves-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a master of cold and water. You can apply any one of the following feats to any cold or water spell without increasing the level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>.</p>
</>};
const _whimsy = {title: "Whimsy", jsx: <><h2 id="mystery-whimsy-whimsy">Whimsy</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 10</Link></p>
<p>Whimsy oracles gain powers from capricious fey tricksters.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/the_green_mother">The Green Mother</Link>, <Link to="/faith/the_lantern_king">The Lantern King</Link>, <Link to="/faith/ng">Ng</Link>, <Link to="/faith/shyka">Shyka</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/perform">Perform</Link> (CHA), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/faerie_fire">Faerie fire</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="6th"><Link to="/spell/shamefully_overdressed">Shamefully overdressed</Link></Pair>
<Pair plain title="8th"><Link to="/spell/major_image">Major image</Link></Pair>
<Pair plain title="10th"><Link to="/spell/lesser_entice_fey">Lesser entice fey</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mislead">Mislead</Link></Pair>
<Pair plain title="14th"><Link to="/spell/entice_fey">Entice fey</Link></Pair>
<Pair plain title="16th"><Link to="/spell/irresistible_dance">Irresistible dance</Link></Pair>
<Pair plain title="18th"><Link to="/spell/greater_entice_fey">Greater entice fey</Link></Pair>
</Ability>
<h3 id="mystery-whimsy-revelations">Revelations</h3>
<p>An oracle with the Whimsy mystery can choose from any of the following revelations.</p>
<p><strong>Assumed Form (Sp):</strong> You can change your appearance at will, as <Link to="/spell/disguise_self">disguise self</Link> with a caster level equal to your oracle level. At 7th level, you can instead physically transform, as <Link to="/spell/alter_self">alter self</Link>. At 11th level, this ability lasts until you dismiss it or use it again, allowing you to keep it active while you sleep.</p>
<p><strong>Capricious Misdirection (Sp):</strong> Your ever-changing nature allows you to misdirect aura-reading divinations with ease. You are constantly under the effects of a <Link to="/spell/misdirection">misdirection</Link> spell, except that you can take a standard action to select a creature or object within 60 feet to serve as the target of detection spells used against you until you select a different creature or object. You must be at least 7th level to select this revelation.</p>
<p><strong>Feywise (Ex):</strong> Your whimsy grants you protection from fey mischief. You gain the <Link to="/ability/resist_natures_lure">resist nature's lure</Link> druid class feature. In addition, you gain a +2 bonus on Perception, Sense Motive, and Survival checks against fey. You must be at least 3rd level to select this revelation.</p>
<p><strong>Flicker (Sp):</strong> You can flicker from sight for a short time, allowing you to escape or set up a prank. As a swift action, you can disappear for 1 round per oracle level. This ability functions as <Link to="/spell/invisibility">invisibility</Link>. You can use this revelation a number of times per day equal to half your oracle level (minimum 1).</p>
<p><strong>Misdirection Mastery (Su):</strong> You gleefully evade attacks and confound foes with your capricious misdirection. You receive <Link to="/feat/misdirection_tactics">Misdirection Tactics</Link> as a bonus feat. At 10th level, you receive <Link to="/feat/misdirection_redirection">Misdirection Redirection</Link> as a bonus feat, and at 15th level you receive <Link to="/feat/misdirection_attack">Misdirection Attack</Link> as a bonus feat. You do not need to meet the prerequisites to receive these feats. You must be at least 3rd level to select this revelation.</p>
<p><strong>Pure Whimsy (Su):</strong> Once per day, you can release a stream of errant chaos from the First World as a standard action. When you do so, identify a target within 90 feet and generate a random effect as from a <Link to="/magic-rod/rod_of_wonder">rod of wonder</Link> (or, at the GM's discretion, another random or unusual effect of similar power). The DC of any required saving throw is 10 + half your oracle level + your Charisma modifier, and no effect from this ability persists for more than 1 day. You can use this ability once per day at 7th level and one additional time per day for every 4 levels beyond 7th. You must be at least 7th level to select this revelation.</p>
<p><strong>Versatile Comedy (Ex):</strong> The powers of whimsy infuse your comedy with the ability to awe and befuddle. You can use your total Perform (comedy) bonus in place of your Bluff and Intimidate bonuses.</p>
<p><strong>Whimsical Prank (Su):</strong> As a standard action, you can call upon fey to play a prank on a creature within 30 feet as a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver. Resolve this attempt as normal, except that it doesn't provoke attacks of opportunity, you use your oracle level in place of your Combat Maneuver Bonus, and you add your Charisma modifier in place of your Strength or Dexterity modifier. No save is allowed against this attempt, but a creature affected by this revelation cannot be the target of this revelation again for 1 day.</p>
<p><strong>Whimsical Step (Su):</strong> Once per day as a move action, you can teleport up to 10 feet per oracle level. You can use this ability once per day at 7th level and one additional time per day for every 4 levels beyond 7th. You must be at least 7th level to select this revelation.</p>
<p><strong>Woodland Caprice (Su):</strong> Your fey powers allow you to move easily through woodland environments. You gain <Link to="/ability/woodland_stride">woodland stride</Link>, as per the druid ability. At 7th level, you also gain the <Link to="/ability/trackless_step">trackless step</Link> druid class feature and can similarly conceal the tracks of any allies within 30 feet that you choose.</p>
<h3 id="mystery-whimsy-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a fey trickster in the flesh. Your type changes to <Link to="/type/fey">fey</Link> and you gain low-light vision, immunity to poison, and DR 10/cold iron.</p>
</>};
const _wind = {title: "Wind", jsx: <><h2 id="mystery-wind-wind">Wind</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 53</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/shelyn">Shelyn</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/alter_winds">Alter winds</Link></Pair>
<Pair plain title="4th"><Link to="/spell/gust_of_wind">Gust of wind</Link></Pair>
<Pair plain title="6th"><Link to="/spell/cloak_of_winds">Cloak of winds</Link></Pair>
<Pair plain title="8th"><Link to="/spell/river_of_wind">River of wind</Link></Pair>
<Pair plain title="10th"><Link to="/spell/control_winds">Control winds</Link></Pair>
<Pair plain title="12th"><Link to="/spell/sirocco">Sirocco</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="16th"><Link to="/spell/whirlwind">Whirlwind</Link></Pair>
<Pair plain title="18th"><Link to="/spell/winds_of_vengeance">Winds of vengeance</Link></Pair>
</Ability>
<h3 id="mystery-wind-revelations">Revelations</h3>
<p>An oracle with the Wind mystery can choose from any of the following revelations.</p>
<p><strong>Air Barrier (Ex):</strong> You can create an invisible shell of air that grants you a +4 armor bonus. At 7th level, and every four levels thereafter, this bonus increases by +2. At 13th level, this barrier causes incoming arrows, rays, and other ranged attacks requiring an attack roll against you to have a 50% miss chance. You can use this barrier for 1 hour per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-hour increments.</p>
<p><strong>Gaseous Form (Su):</strong> As a standard action, you can assume <Link to="/spell/gaseous_form">gaseous form</Link> (as the spell). You can remain gaseous for 1 minute per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. You must be at least 7th level to select this revelation. You can bring other creatures with you in gaseous form, but each passenger costs an additional minute per minute of travel.</p>
<p><strong>Invisibility (Su):</strong> As a standard action, you can become invisible (as per the <Link to="/spell/invisibility">invisibility</Link> spell). You can remain invisible for 1 minute per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. Starting at 9th level, each time you activate this ability you can treat it as <Link to="/spell/greater_invisibility">greater invisibility</Link>, though each round spent this way counts as 1 minute of your normal invisibility duration. You must be at least 3rd level to select this revelation.</p>
<p><strong>Lightning Breath (Su):</strong> As a standard action, you can breathe a 30-foot line of electricity. This line deals 1d4 points of electricity damage per oracle level. A Reflex save halves this damage. You can use this ability once per day, plus one additional time per day at 5th level and every five levels thereafter.</p>
<p><strong>Spark Skin (Ex):</strong> You gain resist electricity 5. This resistance increases to 10 at 5th level and 20 at 11th level. At 17th level, you gain immunity to electricity.</p>
<p><strong>Thunderburst (Ex):</strong> As a standard action, you can create a blast of air accompanied by a loud peal of thunder. The blast has a range of 100 feet and has a 20-foot radius, increasing by 5 feet for every 4 oracle levels after 7th. Creatures in the area take 1d6 points of bludgeoning damage per oracle level and are <Link to="/misc/deafened">deafened</Link> for 1 hour, with a Fortitude save resulting in half damage and no deafness. You must be at least 7th level to select this revelation. You can use this ability once per day, plus one additional time per day at 11th level and every four levels thereafter.</p>
<p><strong>Touch of Electricity (Su):</strong> As a standard action, you can perform a melee touch attack that deals 1d6 points of electricity damage +1 point for every two oracle levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier. At 11th level, any weapon that you wield is treated as a <Link to="/magic-enh/shock">shock</Link> weapon.</p>
<p><strong>Vortex Spells (Ex):</strong> Whenever you score a critical hit against an opponent with an attack spell, the target is <Link to="/misc/staggered">staggered</Link> for 1 round. At 11th level, the duration increases to 1d4 rounds.</p>
<p><strong>Wind Sight (Ex):</strong> You ignore penalties on Perception checks based on wind and the first 100 feet of distance. At 7th level, as a standard action, you can see and hear into any area (as if using <Link to="/spell/clairaudience_clairvoyance">clairaudience and clairvoyance</Link>) within range as long as there is an unobstructed path for air to travel between you and the target area (this does not require line of effect, meaning the path can turn corners and go through spaces no smaller than 1 inch in diameter). You can use this ability a number of rounds per day equal to your oracle level, but these rounds do not need to be consecutive.</p>
<p><strong>Wings of Air (Su):</strong> As a swift action, you can manifest a pair of translucent, cloud-like wings that grant you a fly speed of 60 feet with good maneuverability. At 10th level, your speed increases to 90 feet and your maneuverability increases to perfect. You can use these wings for 1 minute per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. You must be at least 7th level to select this revelation.</p>
<h3 id="mystery-wind-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a master of air and electricity. You can apply any one of the following feats to any air or electricity spell without increasing the level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>.</p>
</>};
const _winter = {title: "Winter", jsx: <><h2 id="mystery-winter-winter">Winter</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_north">People of the North pg. 26</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/kostchtchie">Kostchtchie</Link>, <Link to="/faith/ng">Ng</Link>, <Link to="/faith/rovagug">Rovagug</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="4th"><Link to="/spell/frost_fall">Frost fall</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sleet_storm">Sleet storm</Link></Pair>
<Pair plain title="8th"><Link to="/spell/ice_storm">Ice storm</Link></Pair>
<Pair plain title="10th"><Link to="/spell/icy_prison">Icy prison</Link></Pair>
<Pair plain title="12th"><Link to="/spell/cone_of_cold">Cone of cold</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ice_body">Ice body</Link></Pair>
<Pair plain title="16th"><Link to="/spell/polar_ray">Polar ray</Link></Pair>
<Pair plain title="18th"><Link to="/spell/mass_icy_prison">Mass icy prison</Link></Pair>
</Ability>
<h3 id="mystery-winter-revelations">Revelations</h3>
<p>An oracle with the Winter mystery can choose from any of the following revelations.</p>
<p><strong>Blizzard (Su):</strong> As a standard action, you can create a blizzard of snow and ice. You can create one 10-foot-cube of this storm per oracle level. These cubes can be arranged in any pattern you desire, but each cube must be adjacent to another, and at least one must be adjacent to you. Any creature caught in the blizzard takes 1d4 points of cold damage per oracle level, with a successful Reflex save resulting in half damage. The storm lasts for a number of rounds equal to your Charisma modifier; the ground remains icy (+5 to Acrobatics DCs) as long as local conditions permit. The blizzard obscures sight beyond 5 feet, providing total concealment. A creature within 5 feet has <Link to="/rule/concealment">concealment</Link>. You can use this ability once per day. You must be 11th level to select this revelation.</p>
<p><strong>Child of Winter (Ex):</strong> You gain the constant benefit of <em>endure elements,</em> but only against cold temperatures. You can move across regular snow without penalty, and heavy snow costs you only 2 squares of movement instead of 4. You can move across icy surfaces without penalty, and never need to make Acrobatics checks to run or charge on ice. You leave no trail in ice or snow, and cannot be tracked (you may choose to leave a trail if you so desire). During winter months, you gain a +2 insight bonus on Initiative checks and Reflex saving throws.</p>
<p><strong>Cold Aura (Su):</strong> As a swift action, you can cause waves of cold to radiate from your body. This cold deals 1d6 points of cold damage per 2 oracle levels to all creatures within 10 feet. A successful Fortitude save halves the damage. In addition, a flurry of snow momentarily surrounds you, granting you concealment until your next turn. You can use this ability once per day, plus one additional time per day at 5th level and every 5 levels thereafter.</p>
<p><strong>Freezing Spells (Su):</strong> Whenever a creature fails a saving throw and takes cold damage from one of your spells, it is slowed (as the <Link to="/spell/slow">slow</Link> spell) for 1 round. Spells that do not allow saves do not slow creatures. At 11th level, the slow duration increases to 1d4 rounds.</p>
<p><strong>Ice Armor (Su):</strong> You can conjure armor of ice that grants you a +4 armor bonus to AC. At 7th level and every 4 levels thereafter, this bonus increases by 2. At 13th level, this icy armor grants you DR 5/piercing. In cold conditions, the armor bonus and DR bonus increase by 2; in very hot conditions, however, they decrease by 2. You can use this armor for 1 hour per day per oracle level. This duration does not need to be consecutive, but must be spent in 1-hour increments.</p>
<p><strong>Ice Shape (Su):</strong> You are able to sculpt ice and snow into almost any shape. This ability functions like stone shape, but targeting only ice and snow, not stone. You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Icy Skin (Ex):</strong> You gain resist cold 5. This resistance increases to 10 at 5th level and 20 at 11th level. At 17th level, you gain immunity to cold.</p>
<p><strong>Servant of Winter (Sp):</strong> As a full-round action, you can summon a single <Link to="/monster/ice_elemental">ice elemental</Link> to serve you. At 7th level, you can summon a Medium ice elemental, as <Link to="/spell/summon_monster_iv">summon monster IV</Link>. At 11th level, you can summon a Huge ice elemental, as <Link to="/spell/summon_monster_vi">summon monster VI</Link>. At 15th level, you can summon an elder ice elemental, as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>. You can use this ability once per day, plus one additional time per day at 15th level. You must be at least 7th level before selecting this revelation.</p>
<p><strong>Snow Sight (Su):</strong> You can see through falling snow and sleet without taking any penalties on Perception checks as long as there is enough light to allow you to see normally. At 11th level, in cold conditions or in icy or snowy terrain, you can learn about your surroundings as if using the <Link to="/spell/commune_with_nature">commune with nature</Link> spell. You can use the commune with nature ability once per day at 11th level, and twice per day at 15th level.</p>
<p><strong>Wintry Touch (Su):</strong> As a standard action, you can perform a melee touch attack that deals 1d6 points of cold damage + 1 point for every 2 oracle levels you possess. You can use the wintry touch ability a number of times per day equal to 3 + your Charisma modifier. At 11th level, any weapon that you wield is treated as a <Link to="/magic-enh/frost">frost</Link> weapon.</p>
<h3 id="mystery-winter-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become an avatar of winter and the North. Your body permanently transforms into living ice, as the <em>ice body</em> spell. In addition, your mastery of winter magic is such that any of your attacks that deal cold damage bypass cold immunity or cold resistance.</p>
</>};
const _wood = {title: "Wood", jsx: <><h2 id="mystery-wood-wood">Wood</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 57</Link></p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gozreh">Gozreh</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="bonus-spells" icon={["learn"]}>
<Pair single id="bonus-spells">Bonus Spells</Pair>
<Pair plain title="2nd"><Link to="/spell/shillelagh">Shillelagh</Link></Pair>
<Pair plain title="4th"><Link to="/spell/barkskin">Barkskin</Link></Pair>
<Pair plain title="6th"><Link to="/spell/minor_creation">Minor creation</Link> (wood items only)</Pair>
<Pair plain title="8th"><Link to="/spell/thorn_body">Thorn body</Link></Pair>
<Pair plain title="10th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="12th"><Link to="/spell/ironwood">Ironwood</Link></Pair>
<Pair plain title="14th"><Link to="/spell/transmute_metal_to_wood">Transmute metal to wood</Link></Pair>
<Pair plain title="16th"><Link to="/spell/changestaff">Changestaff</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wooden_phalanx">Wooden phalanx</Link></Pair>
</Ability>
<h3 id="mystery-wood-revelations">Revelations</h3>
<p>An oracle with the Wood mystery can choose from any of the following revelations.</p>
<p><strong>Bend the Grain (Sp):</strong> Once per day as a standard action, you can shape or warp wooden objects. This functions as either <Link to="/spell/wood_shape">wood shape</Link> or <Link to="/spell/warp_wood">warp wood</Link>. At 11th level, you can use this ability to push wood away from you, as <Link to="/spell/repel_wood">repel wood</Link>. At 7th level, and again at 14th level, you can use this ability an additional time per day.</p>
<p><strong>Lignification (Su):</strong> Once per day, you can turn a creature into wood. As a standard action, you may direct your gaze against a single creature within 30 feet. The targeted creature (along with all its carried gear) must make a Fortitude save or turn into a mindless, inert statue made out of wood for a number of rounds equal to 1/2 your oracle level. This ability otherwise functions as a <Link to="/spell/flesh_to_stone">flesh to stone</Link> spell, except the target turns to wood instead of stone. This can be reversed by any effect that can reverse <em>flesh to stone.</em> At 15th level, you can use this ability twice per day. You must be at least 11th level to select this revelation.</p>
<p><strong>Speak with Wood (Sp):</strong> You can talk to wood and learn what it knows. You must spend 1 minute meditating on and communing with the wood. At the end of this time, you can speak with the wood. This functions as the <Link to="/spell/stone_tell">stone tell</Link> spell, except with wood instead of stones. You can use this ability for 1 minute per oracle level. This duration does not need to be consecutive, but it must be used in 1-minute increments. You can speak with natural or worked wood. You must be at least 11th level to select this revelation.</p>
<p><strong>Thorn Burst (Su):</strong> As a swift action, you can cause sharp splinters of wood to explode outward from your body. These splinters deal 1d6 points of piercing damage per two oracle levels (minimum 1d6) to all creatures within a 10-foot <Link to="/misc/burst">burst</Link>. A Reflex save halves this damage. In addition, the sharp splinters count as <Link to="/eq-misc/caltrops">caltrops</Link> in the area until your next turn. You can use this ability once per day, plus one additional time per day at 5th level and every five levels thereafter.</p>
<p><strong>Tree Form (Sp):</strong> As a standard action, you can assume the form of a Large living or dead tree or shrub, as <Link to="/spell/tree_shape">tree shape</Link>. At 9th level, you can assume the form of a Small or Medium plant creature, as <Link to="/spell/plant_shape_i">plant shape I</Link>. At 11th level, you can assume the form of a Large plant creature, as <Link to="/spell/plant_shape_ii">plant shape II</Link>. At 13th level, you can assume the form of a Huge plant creature, as <Link to="/spell/plant_shape_iii">plant shape III</Link>. You can use this ability once per day, but the duration is 1 hour/level. You must be at least 3rd level to select this revelation.</p>
<p><strong>Wood Armor (Su):</strong> You can conjure wooden armor around yourself, which grants you a +4 armor bonus. At 7th level, and every four levels thereafter, this bonus increases by +2. At 13th level, this armor grants you DR 5/slashing. You can use this armor for 1 hour per day per oracle level. This duration does not need to be consecutive, but it must be spent in 1-hour increments. The armor vanishes if you remove it.</p>
<p><strong>Wood Bond (Ex):</strong> Your mystical bond with wood is such that your weapons become an extension of your body. You gain a +1 competence bonus on attack rolls when wielding a weapon made of or mostly consisting of wood (such as a bow, club, quarterstaff, or spear). This bonus increases by +1 at 5th level and every five levels thereafter.</p>
<p><strong>Wood Sight (Su):</strong> As a move action, you can alter your vision to see through underbrush and plant growth that would normally grant <Link to="/rule/concealment">concealment</Link>, up to a range of 60 feet (though darkness and other obstacles still may block your sight). At 7th level, you can use this ability to see through wood or other plant material as easily as if it were transparent glass, penetrating a number of feet of wood equal to your oracle level. You can use this ability a number of rounds per day equal to your oracle level, but these rounds do not need to be consecutive.</p>
<p><strong>Wooden Weapon (Su):</strong> You can create a wooden <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/longspear">longspear</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, or <Link to="/eq-weapon/spear">spear</Link> that lasts for 1 minute for every oracle level you possess. This weapon is appropriate for your size. You are considered proficient with the weapon. The weapon disappears after 1 round if it leaves your grasp. At 3rd level, the weapon is considered masterwork. At 7th level, 15th level, and 19th level, the weapon gains a +1 enhancement bonus. At 11th level, the weapon gains the <Link to="/magic-enh/keen">keen</Link> weapon property (or the equivalent increase to its critical threat range, if it is a bludgeoning weapon). You can use this ability a number of times per day equal to 3 + your Charisma modifier.</p>
<p><strong>Woodland Stride (Ex):</strong> You can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect you.</p>
<h3 id="mystery-wood-final-revelation">Final Revelation</h3>
<p>Upon reaching 20th level, you become a living creature of wood. You are forevermore treated as the plant type rather than your original type for the purpose of spells and magical effects. Your skin takes on the appearance of polished wood grain, and you gain a +4 natural armor bonus to your Armor Class and damage reduction 10/- against wooden weapons or any natural attacks made by a wooden or wood-like creature. You gain immunity to paralysis, poison, polymorph, sleep, and stunning. At will, you can meld with any tree or single block of wood (as <Link to="/spell/meld_into_stone">meld into stone</Link>, except wood only, and with no limit to how long you can remain in the wood).</p>
</>};
export default {not_found:_not_found,ancestor:_ancestor,apocalypse:_apocalypse,ascetic:_ascetic,battle:_battle,bones:_bones,dark_tapestry:_dark_tapestry,dragon:_dragon,elemental:_elemental,flame:_flame,godclaw:_godclaw,heavens:_heavens,intrigue:_intrigue,juju:_juju,life:_life,lore:_lore,lunar:_lunar,metal:_metal,nature:_nature,occult:_occult,outer_rifts:_outer_rifts,reaper:_reaper,shadow:_shadow,solar:_solar,spellscar:_spellscar,stone:_stone,streets:_streets,succor:_succor,time:_time,volcano:_volcano,waves:_waves,whimsy:_whimsy,wind:_wind,winter:_winter,wood:_wood}