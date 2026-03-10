import Link from '../../components/Link';
const _not_found = {title: "Unknown", jsx: <><h2 id="mercy-not_found-unknown">Unknown</h2>
<p>Unable to find the requested paladin mercy.</p>
</>};
const _deceived = {title: "Deceived", jsx: <><h2 id="mercy-deceived-deceived">Deceived</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The target can immediately attempt a new saving throw to disbelieve any ongoing illusions that it failed to disbelieve within the last minute.</p>
</>};
const _fatigued = {title: "Fatigued", jsx: <><h2 id="mercy-fatigued-fatigued">Fatigued</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link><br/>The target is no longer fatigued.</p>
</>};
const _riled = {title: "Riled", jsx: <><h2 id="mercy-riled-riled">Riled</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin's lay on hands also acts as <Link to="/spell/calm_emotions">calm emotions</Link>, but only for the purpose of suppressing morale bonuses (such as from the <Link to="/spell/rage">rage</Link> spell) and emotion effects that aren't fear effects. Use the paladin's level as the caster level.</p>
</>};
const _shaken = {title: "Shaken", jsx: <><h2 id="mercy-shaken-shaken">Shaken</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link><br/>The target is no longer shaken.</p>
</>};
const _sickened = {title: "Sickened", jsx: <><h2 id="mercy-sickened-sickened">Sickened</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link><br/>The target is no longer sickened.</p>
</>};
const _dazed = {title: "Dazed", jsx: <><h2 id="mercy-dazed-dazed">Dazed</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link><br/>The target is no longer dazed.</p>
</>};
const _diseased = {title: "Diseased", jsx: <><h2 id="mercy-diseased-diseased">Diseased</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link><br/>The paladin's lay on hands ability also acts as <Link to="/spell/remove_disease">remove disease</Link>, using the paladin's level as the caster level.</p>
</>};
const _enfeebled = {title: "Enfeebled", jsx: <><h2 id="mercy-enfeebled-enfeebled">Enfeebled</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin <Link to="/spell/dispel">dispels</Link> any magical effects that are reducing one of the target's ability scores (paladin's choice).</p>
</>};
const _haunted = {title: "Haunted", jsx: <><h2 id="mercy-haunted-haunted">Haunted</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin's lay on hands also acts as <Link to="/spell/protection_from_evil">protection from evil</Link>, but only for the purpose of allowing a new saving throw against enchantment (charm) and enchantment (compulsion) effects, making the target immune to any attempts to possess or exercise mental control over the target, or preventing a life force from controlling the target (all as described in the second effect of protection from evil). Use the paladin's level as the caster level.</p>
</>};
const _staggered = {title: "Staggered", jsx: <><h2 id="mercy-staggered-staggered">Staggered</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 61</Link><br/>The target is no longer staggered, unless the target is at exactly 0 hit points.</p>
</>};
const _targeted = {title: "Targeted", jsx: <><h2 id="mercy-targeted-targeted">Targeted</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin's lay on hands also acts as <Link to="/spell/sanctuary">sanctuary</Link>, using the paladin's level as the caster level. The saving throw DC to negate this effect is equal to 10 + 1/2 the paladin's level + the paladin's Charisma modifier.</p>
</>};
const _confused = {title: "Confused", jsx: <><h2 id="mercy-confused-confused">Confused</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The target is no longer confused.</p>
</>};
const _cursed = {title: "Cursed", jsx: <><h2 id="mercy-cursed-cursed">Cursed</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The paladin's lay on hands ability also acts as <Link to="/spell/remove_curse">remove curse</Link>, using the paladin's level as the caster level.</p>
</>};
const _exhausted = {title: "Exhausted", jsx: <><h2 id="mercy-exhausted-exhausted">Exhausted</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer exhausted. The paladin must have the <Link to="/mercy/fatigued">fatigued</Link> mercy before selecting this mercy.</p>
</>};
const _frightened = {title: "Frightened", jsx: <><h2 id="mercy-frightened-frightened">Frightened</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer frightened. The paladin must have the <Link to="/mercy/shaken">shaken</Link> mercy before selecting this mercy.</p>
</>};
const _injured = {title: "Injured", jsx: <><h2 id="mercy-injured-injured">Injured</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The target gains <Link to="/umr/fast_healing">fast healing</Link> 3 for a number of rounds equal to 1/2 the paladin's level.</p>
</>};
const _nauseated = {title: "Nauseated", jsx: <><h2 id="mercy-nauseated-nauseated">Nauseated</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer nauseated. The paladin must have the <Link to="/mercy/sickened">sickened</Link> mercy before selecting this mercy.</p>
</>};
const _poisoned = {title: "Poisoned", jsx: <><h2 id="mercy-poisoned-poisoned">Poisoned</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The paladin's lay on hands ability also acts as <Link to="/spell/neutralize_poison">neutralize poison</Link>, using the paladin's level as the caster level.</p>
</>};
const _amputated = {title: "Amputated", jsx: <><h2 id="mercy-amputated-amputated">Amputated</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin's lay on hands also acts as <Link to="/spell/regenerate">regenerate</Link>, but only for the purposes of regrowing severed body members, broken bones, and ruined organs. The paladin must have the <Link to="/mercy/injured">injured</Link> mercy before she can select this mercy.</p>
</>};
const _blinded = {title: "Blinded", jsx: <><h2 id="mercy-blinded-blinded">Blinded</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer blinded.</p>
</>};
const _deafened = {title: "Deafened", jsx: <><h2 id="mercy-deafened-deafened">Deafened</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer deafened.</p>
</>};
const _ensorcelled = {title: "Ensorcelled", jsx: <><h2 id="mercy-ensorcelled-ensorcelled">Ensorcelled</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin's lay on hands also acts as <Link to="/spell/dispel_magic">dispel magic</Link>, using the paladin's level as her caster level (maximum 20).</p>
</>};
const _paralyzed = {title: "Paralyzed", jsx: <><h2 id="mercy-paralyzed-paralyzed">Paralyzed</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer paralyzed.</p>
</>};
const _petrified = {title: "Petrified", jsx: <><h2 id="mercy-petrified-petrified">Petrified</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>The paladin's lay on hands ability also acts as <Link to="/spell/stone_to_flesh">stone to flesh</Link>, but only for the purpose of removing the <Link to="/rule/petrified">petrified</Link> condition from a creature.</p>
</>};
const _stunned = {title: "Stunned", jsx: <><h2 id="mercy-stunned-stunned">Stunned</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 62</Link><br/>The target is no longer stunned.</p>
</>};
export default {not_found:_not_found,deceived:_deceived,fatigued:_fatigued,riled:_riled,shaken:_shaken,sickened:_sickened,dazed:_dazed,diseased:_diseased,enfeebled:_enfeebled,haunted:_haunted,staggered:_staggered,targeted:_targeted,confused:_confused,cursed:_cursed,exhausted:_exhausted,frightened:_frightened,injured:_injured,nauseated:_nauseated,poisoned:_poisoned,amputated:_amputated,blinded:_blinded,deafened:_deafened,ensorcelled:_ensorcelled,paralyzed:_paralyzed,petrified:_petrified,stunned:_stunned}