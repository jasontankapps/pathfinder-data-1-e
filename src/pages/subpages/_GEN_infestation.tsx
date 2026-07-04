import Link from '../../components/Link';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="infestation-not_found-error">Error</h2>
<p>Unable to find the requested infestation.</p>
</>};
const _ear_seekers = {title: "Ear Seekers", jsx: <><h2 id="infestation-ear_seekers-ear-seekers">Ear Seekers</h2>
<p><strong>Sources</strong> <Link to="/source/gamemastery_guide">GameMastery Guide pg. 244</Link></p>
<AffInfo start type="Infestation" save="Fort 15" freq="1/hour" onset="4d6 hours" eff={<>1d6 <Link to="/rule/con_damage">Con damage</Link></>} icon="i" />
<p>Ear seekers are tiny, pale-colored worms that dwell in rotting wood or other organic detritus. They can be noticed with a DC 15 Perception check. Otherwise, a living creature poking about their lair inadvertently transfers one or more ear seekers to its body. The seekers then search out a warm location on the creature, especially favoring the ear canal. Once there, they lay 2d8 eggs before dying. The eggs hatch 4d6 hours later and the larvae devour the surrounding flesh. Upon the death of their host, the new ear seekers crawl out and seek a new host. <Link to="/spell/remove_disease">Remove disease</Link> kills any ear seekers or unhatched eggs in or on a host. Some ear seekers favor living in intact wood, often hiding in dungeon doors. The small pinholes left by this variety are particularly hard to spot (Perception DC 20).</p>
</>};
const _fractal_etch = {title: "Fractal Etch", jsx: <><h2 id="infestation-fractal_etch-fractal-etch">Fractal Etch</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 24</Link></p>
<AffInfo start type="Infestation; nanite, injury" save="Fort 15" freq="1/day" onset="1 week" eff={<>1 <Link to="/rule/negative_level">negative level</Link>. Such negative levels never become permanent, but as long as the victim remains infested, they cannot be removed. A creature that dies from this sickness cannot rise as undead.</>} cure3c icon="i" />
<p>Circuitry-like traces spread across the scalp of victims of fractal etch, as the nanites behind this affliction scrub away the folds of the brain, causing loss of experience and memory.</p>
</>};
const _rot_grubs = {title: "Rot Grubs", jsx: <><h2 id="infestation-rot_grubs-rot-grubs">Rot Grubs</h2>
<p><strong>Sources</strong> <Link to="/source/gamemastery_guide">GameMastery Guide pg. 244</Link></p>
<AffInfo start type="Infestation" save="Fort 17" freq="1/round" onset="immediate" eff={<>1d2 per grub <Link to="/rule/con_damage">Con damage</Link></>} icon="i" />
<p>Rot grubs are nauseating parasites that feed on flesh and nest in corpses. Generally, a handful of the grubs infest a single corpse at a time, and a DC 15 Perception check is enough to notice and avoid the grubs. Otherwise, 1d6 grubs swiftly burst from the carcass to burrow into the creature, which can attempt a DC 15 Reflex save to avoid the grubs (but only if the creature is aware of the grubs' presence). Any amount of damage reduction is enough to provide immunity to infestation.</p>
<p>Once rot grubs have infested a living body, they burrow toward the host's heart, brain, and other key internal organs, eventually causing death. On the first round of infestation, applying flame to the point of entry can kill the grubs and save the host, but this inflicts 1d6 points of fire damage to the victim. Cutting the grubs out also works, but the longer the grubs remain in a host, the more damage this method does. Cutting them out requires a slashing weapon and a DC 20 Heal check, and inflicts 1d6 points of damage per round that the host has been infested. If the Heal check is successful, one grub is removed. <Link to="/spell/remove_disease">Remove disease</Link> kills any rot grubs in or on a host.</p>
<p>See also: <Link to="/family/rot_grub">Monster Family: Rot Grubs</Link>.</p>
</>};
const _soldiers_peace = {title: "Soldier's Peace", jsx: <><h2 id="infestation-soldiers_peace-soldiers-peace">Soldier's Peace</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 24</Link></p>
<AffInfo start type="Infestation; nanite, injury" save="Fort 15" freq="special, maximum once per round" onset="1 day" eff={<>If the victim damages or attempts to damage another creature, even by accident, she must succeed at a saving throw or be <Link to="/misc/nauseated">nauseated</Link> with excruciating pain for 1 round, then <Link to="/misc/sickened">sickened</Link> for 1d4 additional rounds. A successful saving throw eliminates the nausea and reduces the sickened effect to 1 round. Sufficiently violent thoughts (GM's discretion) require a saving throw as well. The nanites make no allowances for harming unintelligent or nonliving creatures, but do allow the destruction of objects. If the victim doesn't notice she hurt a creature (such as stepping on an ant), no ill effects occur.</>} cure={<>Soldier's peace can be cured only by <Link to="/spell/remove_disease">remove disease</Link> or similar means that eradicate the disease from the body; it can't be cured with successful saving throws.</>} icon="i" />
<p>Administered as an injection of nanites, soldier's peace is not usually contagious. The nanites settle in the brain, where they inflict crippling pain in response to violent acts and thoughts.</p>
</>};
const _thought_crawlers = {title: "Thought Crawlers", jsx: <><h2 id="infestation-thought_crawlers-thought-crawlers">Thought Crawlers</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 25</Link></p>
<AffInfo start type="Infestation; nanite, injury" save="Fort 16" freq="1/day" onset="1 day" eff={<>1d2 <Link to="/rule/int_damage">Int damage</Link>, 1d2 Wis damage and see below</>} cure3c icon="i" />
<p>These parasitic worms live in cerebrospinal fluid. Their microscopic eggs can be carried on the wind or coated on a weapon, and enter the body though exposed nerves, such as those in injured skin. Once in the body, the worms travel along the nervous system to the brain and spine, causing an escalating progression of debilitating neurological symptoms.</p>
<p>Apply the effects below based on the cumulative Intelligence or Wisdom damage the victim has sustained from the disease (less any amount cured), using the higher total. The effects are cumulative. Save DCs equal the disease's save DC.</p>
<blockquote>
<p><strong>2-6 points:</strong> The victim is highly suggestible. Treat any request as though delivered by <Link to="/spell/suggestion">suggestion</Link> (Will DC negates).</p>
<p><strong>7-12 points:</strong> The victim becomes irritable and aggressive. If provoked or insulted, the victim attacks for 1 round (Will negates). If attacked, even in self-defense, the victim automatically responds in kind for 1 round (no save). Severe headaches leave the victim distracted when casting spells (Concentration DC 10 + the level of the spell the victim is casting).</p>
<p><strong>13+ points:</strong> Severe headaches leave the victim <Link to="/misc/sickened">sickened</Link>. Each round when under stress (such as during combat), the victim must succeed at a Fortitude saving throw or be <Link to="/misc/nauseated">nauseated</Link> until the start of its next turn.</p>
</blockquote>
</>};
export default {not_found:_not_found,ear_seekers:_ear_seekers,fractal_etch:_fractal_etch,rot_grubs:_rot_grubs,soldiers_peace:_soldiers_peace,thought_crawlers:_thought_crawlers}