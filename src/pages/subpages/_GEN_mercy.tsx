import Link from '../../components/Link';
import {Block,Row,Cell} from '../../components/Block';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested paladin mercy.</p>
</>};
const _deceived = {title: "Deceived", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Deceived</Cell><Cell>The target can immediately attempt a new saving throw to disbelieve any ongoing illusions that it failed to disbelieve within the last minute.</Cell></Row></Block>
</>};
const _fatigued = {title: "Fatigued", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link></p>
<Block>
<Row><Cell>Fatigued</Cell><Cell>The target is no longer fatigued.</Cell></Row></Block>
</>};
const _riled = {title: "Riled", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Riled</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/calm_emotions">calm emotions</Link>, but only for the purpose of suppressing morale bonuses (such as from the <Link to="/spell/rage">rage</Link> spell) and emotion effects that aren't fear effects. Use the paladin's level as the caster level.</Cell></Row></Block>
</>};
const _shaken = {title: "Shaken", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link></p>
<Block>
<Row><Cell>Shaken</Cell><Cell>The target is no longer shaken.</Cell></Row></Block>
</>};
const _sickened = {title: "Sickened", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link></p>
<Block>
<Row><Cell>Sickened</Cell><Cell>The target is no longer sickened.</Cell></Row></Block>
</>};
const _dazed = {title: "Dazed", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link></p>
<Block>
<Row><Cell>Dazed</Cell><Cell>The target is no longer dazed.</Cell></Row></Block>
</>};
const _diseased = {title: "Diseased", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link></p>
<Block>
<Row><Cell>Diseased</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/remove_disease">remove disease</Link>, using the paladin's level as the caster level.</Cell></Row></Block>
</>};
const _enfeebled = {title: "Enfeebled", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Enfeebled</Cell><Cell>The paladin <Link to="/spell/dispel">dispels</Link> any magical effects that are reducing one of the target's ability scores (paladin's choice).</Cell></Row></Block>
</>};
const _haunted = {title: "Haunted", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Haunted</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/protection_from_evil">protection from evil</Link>, but only for the purpose of allowing a new saving throw against enchantment (charm) and enchantment (compulsion) effects, making the target immune to any attempts to possess or exercise mental control over the target, or preventing a life force from controlling the target (all as described in the second effect of protection from evil). Use the paladin's level as the caster level.</Cell></Row></Block>
</>};
const _staggered = {title: "Staggered", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link></p>
<Block>
<Row><Cell>Staggered</Cell><Cell>The target is no longer staggered, unless the target is at exactly 0 hit points.</Cell></Row></Block>
</>};
const _targeted = {title: "Targeted", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Targeted</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/sanctuary">sanctuary</Link>, using the paladin's level as the caster level. The saving throw DC to negate this effect is equal to 10 + 1/2 the paladin's level + the paladin's Charisma modifier.</Cell></Row></Block>
</>};
const _confused = {title: "Confused", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Confused</Cell><Cell>The target is no longer confused.</Cell></Row></Block>
</>};
const _cursed = {title: "Cursed", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Cursed</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/remove_curse">remove curse</Link>, using the paladin's level as the caster level.</Cell></Row></Block>
</>};
const _exhausted = {title: "Exhausted", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Exhausted</Cell><Cell>The target is no longer exhausted. The paladin must have the <Link to="/mercy/fatigued">fatigued</Link> mercy before selecting this mercy.</Cell></Row></Block>
</>};
const _frightened = {title: "Frightened", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Frightened</Cell><Cell>The target is no longer frightened. The paladin must have the <Link to="/mercy/shaken">shaken</Link> mercy before selecting this mercy.</Cell></Row></Block>
</>};
const _injured = {title: "Injured", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Injured</Cell><Cell>The target gains <Link to="/umr/fast_healing">fast healing</Link> 3 for a number of rounds equal to 1/2 the paladin's level.</Cell></Row></Block>
</>};
const _nauseated = {title: "Nauseated", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Nauseated</Cell><Cell>The target is no longer nauseated. The paladin must have the <Link to="/mercy/sickened">sickened</Link> mercy before selecting this mercy.</Cell></Row></Block>
</>};
const _poisoned = {title: "Poisoned", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Poisoned</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/neutralize_poison">neutralize poison</Link>, using the paladin's level as the caster level.</Cell></Row></Block>
</>};
const _amputated = {title: "Amputated", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Amputated</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/regenerate">regenerate</Link>, but only for the purposes of regrowing severed body members, broken bones, and ruined organs. The paladin must have the <Link to="/mercy/injured">injured</Link> mercy before she can select this mercy.</Cell></Row></Block>
</>};
const _blinded = {title: "Blinded", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Blinded</Cell><Cell>The target is no longer blinded.</Cell></Row></Block>
</>};
const _deafened = {title: "Deafened", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Deafened</Cell><Cell>The target is no longer deafened.</Cell></Row></Block>
</>};
const _ensorcelled = {title: "Ensorcelled", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Ensorcelled</Cell><Cell>The paladin's lay on hands also acts as <Link to="/spell/dispel_magic">dispel magic</Link>, using the paladin's level as her caster level (maximum 20).</Cell></Row></Block>
</>};
const _paralyzed = {title: "Paralyzed", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Paralyzed</Cell><Cell>The target is no longer paralyzed.</Cell></Row></Block>
</>};
const _petrified = {title: "Petrified", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link></p>
<Block>
<Row><Cell>Petrified</Cell><Cell>The paladin's lay on hands ability also acts as <Link to="/spell/stone_to_flesh">stone to flesh</Link>, but only for the purpose of removing the <Link to="/rule/petrified">petrified</Link> condition from a creature.</Cell></Row></Block>
</>};
const _stunned = {title: "Stunned", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link></p>
<Block>
<Row><Cell>Stunned</Cell><Cell>The target is no longer stunned.</Cell></Row></Block>
</>};
export default {not_found:_not_found,deceived:_deceived,fatigued:_fatigued,riled:_riled,shaken:_shaken,sickened:_sickened,dazed:_dazed,diseased:_diseased,enfeebled:_enfeebled,haunted:_haunted,staggered:_staggered,targeted:_targeted,confused:_confused,cursed:_cursed,exhausted:_exhausted,frightened:_frightened,injured:_injured,nauseated:_nauseated,poisoned:_poisoned,amputated:_amputated,blinded:_blinded,deafened:_deafened,ensorcelled:_ensorcelled,paralyzed:_paralyzed,petrified:_petrified,stunned:_stunned}