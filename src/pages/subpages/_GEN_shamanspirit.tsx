import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
import Bonus from '../../components/Bonus';
const _not_found = {title: "Unknown", jsx: <><h2 id="shamanspirit-not_found-error">Error</h2>
<p>Unable to find the requested shaman spirit.</p>
</>};
const _ancestors = {hasJL:true,title: "Ancestors", jsx: <><div className="jumpList" id="shamanspirit-ancestors-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-ancestors-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-ancestors-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-ancestors-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-ancestors-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-ancestors-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-ancestors-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-ancestors-ancestors">Ancestors</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 19</Link><br/>A shaman that selects the ancestors spirit has wise eyes and thick white or silver hair. Fine wrinkles line the shaman's face, becoming more obvious when she smiles or glowers. When she calls upon one of this spirit's abilities, her hair glows as though lit from within, rustling of its own accord.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/unseen_servant">Unseen servant</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="4th"><Link to="/spell/spiritual_ally">Spiritual ally</Link></Pair>
<Pair plain title="5th"><Link to="/spell/telekinesis">Telekinesis</Link></Pair>
<Pair plain title="6th"><Link to="/spell/greater_heroism">Greater heroism</Link></Pair>
<Pair plain title="7th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="8th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="9th"><Link to="/spell/astral_projection">Astral projection</Link></Pair>
</Ability>
<h3 id="shamanspirit-ancestors-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Ancestors spirit can select from the following hexes.</p>
<Ability id="ancestral-blessing-su" icon={["boost"]}>
<Pair single id="ancestral-blessing-su">Ancestral Blessing (Su)</Pair>
<Pair title="Ability">The shaman can grant the blessings of her ancestors to any ally within 30 feet. The blessed creature receives a competence bonus on attack and damage rolls equal to 1 + <Link to="/misc/one_eighth">one-eighth</Link> of her shaman level. This blessing lasts until the blessed creature hits with an attack or deals damage to a target.</Pair>
<Pair title="Special">The shaman can have only one ancestral blessing active at a time. If the shaman uses this ability again, the previous blessing immediately ends.</Pair>
</Ability>
<Ability id="ghost-blade-su" icon={["boost"]}>
<Pair single id="ghost-blade-su">Ghost Blade (Su)</Pair>
<Pair title="Ability">The shaman can touch a creature to grant all of her weapons the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon property for a number of rounds equal to her Charisma bonus.</Pair>
<Pair title="Special">Once a creature has been the target of this ability, it cannot be the target of this ability again for 24 hours.</Pair>
</Ability>
<Ability id="intercessor-sp" icon={["magic"]}>
<Pair single id="intercessor-sp">Intercessor (Sp)</Pair>
<Pair title="Ability">The shaman can invoke an ancestor spirit into an intact, humanoid or monstrous humanoid corpse to learn what the body knew in life. The acts as <Link to="/spell/speak_with_dead">speak with dead</Link>, but the shaman may ask only a single question.</Pair>
<Pair title="Special">If an animated corpse or undead is targeted with this ability, the hex immediately fails. Once a corpse has answered a single question, it cannot be targeted with this ability again.</Pair>
</Ability>
<Ability id="might-of-the-fallen-su" icon={["aid"]}>
<Pair single id="might-of-the-fallen-su" flavor="The shaman can call upon the ancestral heroes of her family to bolster ailing allies.">Might of the Fallen (Su)</Pair>
<Pair title="Standard Action">The shaman can cure 1 point of temporary <Link to="/rule/ability_damage">ability damage</Link> affecting the creature touched.</Pair>
<Pair title="At 7th Level">This increases to 1d4 points of temporary ability damage.</Pair>
<Pair title="Special">Once a creature has been the target of this hex, it cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="wisdom-of-the-ages-su" icon={["boost"]}>
<Pair single id="wisdom-of-the-ages-su" flavor="The shaman can call upon her ancestors for lore and guidance.">Wisdom of the Ages (Su)</Pair>
<Pair title="Passive Ability">The shaman can use her Wisdom modifier instead of her Intelligence modifier on all Intelligence-based skill checks.</Pair>
</Ability>
<h3 id="shamanspirit-ancestors-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["power"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal has streaks of gray or silver hide, hair, or fur, and long facial hair that appears similar to a wispy mustache or bushy eyebrows.">Spirit Animal</Pair>
<Pair title="Ability">The spirit animal can speak and understand a number of bonus languages equal to the shaman's Charisma bonus.</Pair>
</Ability>
<h3 id="shamanspirit-ancestors-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Ancestors spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="ancestors-council-su" icon={["boost","def"]}>
<Pair single id="ancestors-council-su">Ancestor's Council (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can call upon her ancestors to provide advice and assistance to one ally within 30 feet. The ally gains a +2 bonus on any attack roll, saving throw, ability check, or skill check made before the beginning of the shaman's next turn.</Pair>
</Ability>
<h3 id="shamanspirit-ancestors-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Ancestors spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="ancestral-weapon-su" icon={["power"]}>
<Pair single id="ancestral-weapon-su">Ancestral Weapon (Su)</Pair>
<Pair title="Usage">1 minute/day per shaman level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">The shaman can summon an appropriately-sized simple or martial weapon with a +1 enhancement bonus from her family's history. She is always considered proficient with this weapon.</Pair>
<Pair title="At 11th Level">The weapon gains the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon property.</Pair>
<Pair title="At 15th Level">The enhancement bonus becomes +2.</Pair>
<Pair title="At 19th Level">The enhancement bonus increases to +3.</Pair>
</Ability>
<h3 id="shamanspirit-ancestors-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Ancestors spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="ancestral-guardian-sp" icon={["magic"]}>
<Pair single id="ancestral-guardian-sp" flavor="The shaman can call on the ancient allies of her ancestors to physically appear and assist her, even if they have moved on to new roles in the cosmos.">Ancestral Guardian (Sp)</Pair>
<Pair title="Standard Action">Once per day, the shaman can cast <Link to="/spell/planar_ally">planar ally</Link>. Although there is no cost to use the spell-like ability, the planar ally demands payment for services it performs as normal for the spell.</Pair>
</Ability>
<h3 id="shamanspirit-ancestors-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","power","boost","magic"]}>
<Pair single id="manifestation" flavor="The shaman becomes one with the spirits of her ancestors.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She gains a bonus on Will saving throws equal to her Charisma modifier and a +4 bonus to her caster level for all divination spells.</Pair>
<Pair title="Ability">She gains <Link to="/umr/blindsense">blindsense</Link> out to a range of 60 feet.</Pair>
<Pair title="Ability">She can cast <Link to="/spell/astral_projection">astral projection</Link> as a spell-like ability once per day without requiring material components.</Pair>
</Ability>
</>};
const _battle = {hasJL:true,title: "Battle", jsx: <><div className="jumpList" id="shamanspirit-battle-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-battle-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-battle-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-battle-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-battle-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-battle-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-battle-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-battle-battle">Battle</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link><br/>A shaman who selects the battle spirit gains scars from every wound she takes, and the grit of battle always seems to cling on her body. When she calls upon one of this spirit's abilities, she grows in stature - becoming taller and more muscular, with a grimace of rage stretching across her face.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/fog_cloud">Fog cloud</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/magic_vestment">Magic vestment</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wall_of_fire">Wall of fire</Link></Pair>
<Pair plain title="5th"><Link to="/spell/righteous_might">Righteous might</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mass_bulls_strength">Mass bull's strength</Link></Pair>
<Pair plain title="7th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="8th"><Link to="/spell/earthquake">Earthquake</Link></Pair>
<Pair plain title="9th"><Link to="/spell/storm_of_vengeance">Storm of vengeance</Link></Pair>
</Ability>
<h3 id="shamanspirit-battle-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Battle spirit can select from the following hexes.</p>
<Ability id="battle-master-ex" icon={["power"]}>
<Pair single id="battle-master-ex">Battle Master (Ex)</Pair>
<Pair title="Ability">The shaman makes an extra attack of opportunity each round. This ability stacks with the attacks of opportunity granted by the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat.</Pair>
<Pair title="At 8th Level">The shaman gains the <Link to="/feat/weapon_specialization">Weapon Specialization</Link> feat in a weapon of her choice as a bonus feat.</Pair>
<Pair title="At 16th Level">The shaman gains the <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link> feat as a bonus feat, for the same weapon chosen for Weapon Specialization.</Pair>
<Pair title="Special">The shaman doesn't need to meet the prerequisites of these feats.</Pair>
</Ability>
<Ability id="battle-ward-su" icon={["def","protect"]}>
<Pair single id="battle-ward-su">Battle Ward (Su)</Pair>
<Pair title="Ability">The shaman touches a willing creature (including herself) and grants a battle ward. The next time a foe makes an attack roll against the target, the ward activates and grants a +3 deflection bonus to the warded creature's AC. Each subsequent time she's attacked, the defection bonus reduces by 1 (to +2 for the second time she's attacked and +1 for the third). The ward fades when the bonus is reduced to +0 or after 24 hours, whichever comes first.</Pair>
<Pair title="At 8th Level">The starting bonus becomes +4.</Pair>
<Pair title="At 16th Level">The starting bonus increases to +5.</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="curse-of-suffering-su" icon={["lower"]}>
<Pair single id="curse-of-suffering-su">Curse of Suffering (Su)</Pair>
<Pair title="Ability"><p>The shaman causes a creature within 30 feet to take more damage from <Link to="/rule/bleed">bleed</Link> effects and causes its wounds to heal at a slower rate. When the cursed creature takes bleed damage, it takes 1 additional point of bleed damage (even if the bleed is <Link to="/rule/ability_damage">ability damage</Link>). Furthermore, when the target is subject to an effect that would restore its hit points, that effect restores only half the normal amount of hit points.</p>
<p>This curse lasts for a number of rounds equal to the shaman's level. A creature affected by this hex cannot be affected by it again for 24 hours.</p>
</Pair>
</Ability>
<Ability id="eyes-of-battle-su" icon={["boost"]}>
<Pair single id="eyes-of-battle-su" flavor="The shaman's senses become magically heightened in the heat of battle.">Eyes of Battle (Su)</Pair>
<Pair title="Usage">1 time/day per shaman level</Pair>
<Pair title="Swift Action"><p>She can grant herself a +10 insight bonus for 1 round on <Link to="/skill/perception">Perception</Link> checks made to notice and pinpoint invisible creatures within 30 feet.</p>
<p>She can instead use this ability to ignore the affects of <Link to="/rule/cover">cover</Link> or partial cover (but not total cover) on her next attack, as long as that attack is made before the end of her next turn.</p>
</Pair>
</Ability>
<Ability id="hampering-hex-su" icon={["lower"]}>
<Pair single id="hampering-hex-su">Hampering Hex (Su)</Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to take a -2 penalty to AC and CMD for a number of rounds equal to the shaman's level. A successful Will saving throw reduces this to just 1 round.</Pair>
<Pair title="At 8th Level">The penalty becomes -4.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature affected by a <em>hampering hex</em> cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<h3 id="shamanspirit-battle-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal looks like a fiercer version of its species, with rippling muscles and a stockier frame.">Spirit Animal</Pair>
<Pair title="Passive Ability">It gains a +2 natural armor bonus to AC. If it already has a natural armor bonus, the bonus increases by 2 instead.</Pair>
</Ability>
<h3 id="shamanspirit-battle-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Battle spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="battle-spirit-su" icon={["boost"]}>
<Pair single id="battle-spirit-su" flavor="A shaman surrounds herself with the spirit of battle. Allies within 30 feet of the shaman (including the shaman) receive a +1 morale bonus on attack rolls and weapon damage rolls.">Battle Spirit (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 16th Level">This bonus increases to +3.</Pair>
</Ability>
<h3 id="shamanspirit-battle-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Battle spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="enemies-bane-su" icon={["boost"]}>
<Pair single id="enemies-bane-su">Enemies' Bane (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Swift Action">The shaman imbues a single weapon she's wielding with the <Link to="/magic-enh/bane">bane weapon</Link> special ability, choosing the type of creature affected each time she does. The effect lasts for 1 minute. If the weapon already has the <em>bane</em> weapon special ability of the type chosen, the additional damage dealt by <em>bane</em> increases to 4d6.</Pair>
</Ability>
<h3 id="shamanspirit-battle-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Battle spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="paragon-of-battle-su" icon={["magic"]}>
<Pair single id="paragon-of-battle-su">Paragon of Battle (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman assumes a form that combines the effects of <Link to="/spell/enlarge_person">enlarge person</Link> and <Link to="/spell/deadly_juggernaut">deadly juggernaut</Link> for 1 minute or until dismissed.</Pair>
</Ability>
<h3 id="shamanspirit-battle-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["power","boost","def"]}>
<Pair single id="manifestation" flavor="The shaman becomes a spirit of battle.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Full-Round Action">She can make a full attack and move up to her speed (either before or after the attacks).</Pair>
<Pair title="Ability">Whenever she scores a critical hit, the attack ignores damage reduction.</Pair>
<Pair title="Passive Ability">She gains a +4 insight bonus to AC for the purposes of confirming critical hits against her. If she is reduced to below 0 hit points, she does not die until her negative hit point total exceeds double her Constitution score.</Pair>
</Ability>
</>};
const _bones = {hasJL:true,title: "Bones", jsx: <><div className="jumpList" id="shamanspirit-bones-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-bones-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-bones-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-bones-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-bones-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-bones-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-bones-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-bones-bones">Bones</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 38</Link><br/>A shaman who selects the bones spirit is cadaverously thin, with sunken eye sockets and dead eyes that stare off into the distance. Her body has a faint smell of the grave. When she calls upon one of this spirit's abilities, a ghostly wind whips her hair and clothes about, and the unpleasant stench becomes more prominent.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/false_life">False life</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/animate_dead">Animate dead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fear">Fear</Link></Pair>
<Pair plain title="5th"><Link to="/spell/slay_living">Slay living</Link></Pair>
<Pair plain title="6th"><Link to="/spell/circle_of_death">Circle of death</Link></Pair>
<Pair plain title="7th"><Link to="/spell/control_undead">Control undead</Link></Pair>
<Pair plain title="8th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="9th"><Link to="/spell/wail_of_the_banshee">Wail of the banshee</Link></Pair>
</Ability>
<h3 id="shamanspirit-bones-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Bones spirit can select from the following hexes.</p>
<Ability id="bone-lock-su" icon={["lower"]}>
<Pair single id="bone-lock-su">Bone Lock (Su)</Pair>
<Pair title="Ability">With a quick incantation, the shaman causes a creature within 30 feet to suffer stiffness in the joints and bones, causing the target to be <Link to="/misc/staggered">staggered</Link> 1 round. A successful Fortitude saving throw negates this effect.</Pair>
<Pair title="At 8th Level">The duration is increased to a number of rounds equal to her shaman level, though the target can attempt a save each round to end the effect if its initial saving throw fails.</Pair>
<Pair title="At 16th Level">The target can no longer attempt a saving throw each round to end the effect, although it still attempts the initial Fortitude saving throw to negate the effect entirely.</Pair>
</Ability>
<Ability id="bone-ward-su" icon={["def","protect"]}>
<Pair single id="bone-ward-su">Bone Ward (Su)</Pair>
<Pair title="Ability">A shaman touches a willing creature (including herself) and grants a <em>bone ward.</em> The warded creature becomes encircled by a group of flying bones that grant it a +2 deflection bonus to AC for a number of rounds equal to the shaman's level.</Pair>
<Pair title="At 8th Level">The <em>ward</em> increases to +3 and lasts for 1 minute.</Pair>
<Pair title="At 16th Level">The bonus increases to +4 and lasts for 1 hour.</Pair>
<Pair title="Special">Once the <em>bone ward</em> ends, the creature cannot be the target of the hex again for 24 hours.</Pair>
</Ability>
<Ability id="deathly-being-su" icon={["down","power","def"]}>
<Pair single id="deathly-being-su">Deathly Being (Su)</Pair>
<Pair title="Passive Ability">If the shaman is a living creature, she reacts to positive and negative energy as if she were undead - positive energy harms her, while negative energy heals her. If she's an undead creature or a creature with the <Link to="/umr/negative_energy_affinity">negative energy affinity</Link> ability, she gains a +1 bonus to her <Link to="/umr/channel_resistance">channel resistance</Link>.</Pair>
<Pair title="At 8th Level">If she's a living creature she gains a +4 bonus on saves against death effects and effects that <Link to="/rule/energy_drain">drain energy</Link>, or if she's an undead creature her bonus to channel resistance increases to +2.</Pair>
<Pair title="At 16th Level"><p>If the shaman is a living creature, she takes no penalties from energy drain effects, though she can still be killed if she accrues more negative levels than she has Hit Dice. Furthermore, after 24 hours any negative levels the shaman has are removed without requiring her to succeed at an additional saving throw.</p>
<p>If the shaman is an undead creature, her bonus to channel resistance increases to +4.</p>
</Pair>
</Ability>
<Ability id="fearful-gaze-su" icon={["lower"]}>
<Pair single id="fearful-gaze-su">Fearful Gaze (Su)</Pair>
<Pair title="Ability">With a single shout, the shaman causes one target creature within 30 feet to become <Link to="/misc/shaken">shaken</Link> for 1 round. A successful Will saving throw negates this effect.</Pair>
<Pair title="At 8th Level">She makes the target <Link to="/misc/frightened">frightened</Link> instead.</Pair>
<Pair title="At 16th Level">She makes it <Link to="/misc/panicked">panicked</Link> instead.</Pair>
<Pair title="Special">This is a mind-affecting fear effect. A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="grave-sight-su" icon={["power"]}>
<Pair single id="grave-sight-su">Grave Sight (Su)</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Ability">The shaman sees the states of life, death, undeath, and general health of those around her. When using this ability, she can tell whether or not creatures within 30 feet that she can see are living, wounded, dying, or dead, as well as determine if any are undead. Lastly, she can tell if those creatures are poisoned or diseased.</Pair>
</Ability>
<h3 id="shamanspirit-bones-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal gives off a ghostly glow and seems nearly transparent.">Spirit Animal</Pair>
<Pair title="Passive Ability">The animal is under the constant effects of <Link to="/spell/blur">blur</Link>, with a caster level equal to the shaman's level.</Pair>
</Ability>
<h3 id="shamanspirit-bones-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Bones spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="touch-of-the-grave-su" icon={["touch","boost"]}>
<Pair single id="touch-of-the-grave-su">Touch of the Grave (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action"><p>The shaman can make a melee touch attack infused with negative energy that deals damage equal to 1d4 + <Link to="/misc/half">half</Link> of her shaman level.</p>
<p>She can instead touch an undead creature to heal it of the same amount of damage.</p>
</Pair>
<Pair title="At 11th Level">Any weapon that the shaman wields is treated as an <Link to="/magic-enh/unholy">unholy</Link> weapon.</Pair>
</Ability>
<h3 id="shamanspirit-bones-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Bones spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="shard-soul-su" icon={["def"]}>
<Pair single id="shard-soul-su">Shard Soul (Su)</Pair>
<Pair title="Standard Action"><p>She can cause jagged pieces of bone to explode from her body in a 10-foot radius <Link to="/misc/burst">burst</Link>. This deals 1d6 points of piercing damage for every 2 shaman levels she possesses. A successful Reflex saving throw halves this damage.</p>
<p>The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.</p>
</Pair>
<Pair title="Passive Ability">The shaman gains DR 3/magic.</Pair>
<Pair title="At 12th Level">The DR becomes 4/magic.</Pair>
<Pair title="At 16th Level">The DR increases to 5/magic.</Pair>
<Pair title="At 20th Level">The DR becomes 6/magic.</Pair>
</Ability>
<h3 id="shamanspirit-bones-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Bones spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="shedding-form-su" icon={["magic","boost"]}>
<Pair single id="shedding-form-su">Shedding Form (Su)</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">The shaman sheds her body and becomes incorporeal. While in this form, all of her weapon attacks are considered to have the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability.</Pair>
</Ability>
<h3 id="shamanspirit-bones-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["magic","def"]}>
<Pair single id="manifestation" flavor="The shaman becomes a spirit of death.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Free Action">Once per round, she can cast <Link to="/spell/bleed">bleed</Link> or <Link to="/spell/stabilize">stabilize</Link>.</Pair>
<Pair title="Passive Ability">If she is reduced to below 0 hit points, she automatically stabilizes.</Pair>
<Pair title="Ability">She can cast <Link to="/spell/animate_dead">animate dead</Link> at will without paying a material component cost, although she is still subject to the usual Hit Dice control limit.</Pair>
<Pair title="Ability">Once per day, she can cast <Link to="/spell/power_word_kill">power word kill</Link>, but the spell can target a creature with 150 hit points or fewer.</Pair>
</Ability>
</>};
const _dark_tapestry = {hasJL:true,title: "Dark Tapestry", jsx: <><div className="jumpList" id="shamanspirit-dark_tapestry-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-dark_tapestry-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-dark_tapestry-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-dark_tapestry-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-dark_tapestry-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-dark_tapestry-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-dark_tapestry-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-dark_tapestry-dark-tapestry">Dark Tapestry</h2>
<p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 16</Link><br/>A shaman who selects the Dark Tapestry spirit is often a misanthropic loner. While she may well work with others, she rarely does so of her own volition. Instead, she seeks out the aid of a small group (such as a party of adventurers) as a result of an obscure vision or other influence from the Dark Tapestry that she might not fully comprehend. More often, though, a Dark Tapestry shaman is encountered not as a member of a group, but as the leader of a cult in a remote region - these shamans, of course, work best as NPC villains and not as PCs.</p>
<p>The spirits of the Dark Tapestry have often been known to whisper dangerous secrets to mortals who dwell on sane worlds. Such spirits might be found anywhere touched by the light of baleful stars, but they are most frequently found lurking around unfathomably ancient ruins of aberrant civilizations with links to the Dark Tapestry. On Golarion, these spirits can often be found near old ruins in Osirion or the Sodden Lands, although they are also quite active throughout the county of Versex in Ustalav. Many shamans who invoke the spirits of the Dark Tapestry also worship one or several of the Outer Gods or Great Old Ones of the Elder Mythos, be it out of fear or misinformed adoration. Other entities associated with the Dark Tapestry, particularly the Dominion of the Black, seem less likely to be associated with that realm's spirits, so it may well be that the spirits that shamans call upon when they turn to the Dark Tapestry for power are in fact the idle thoughts of horrors such as <Link to="/faith/nyarlathotep">Nyarlathotep</Link>, <Link to="/faith/yog_sothoth">Yog-Sothoth</Link>, or even <Link to="/faith/azathoth">Azathoth</Link>.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/entropic_shield">Entropic shield</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/contact_entity_i">Contact entity I</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/contact_entity_ii">Contact entity II</Link></Pair>
<Pair plain title="4th"><Link to="/spell/black_tentacles">Black tentacles</Link></Pair>
<Pair plain title="5th"><Link to="/spell/contact_entity_iii">Contact entity III</Link></Pair>
<Pair plain title="6th"><Link to="/spell/feeblemind">Feeblemind</Link></Pair>
<Pair plain title="7th"><Link to="/spell/contact_entity_iv">Contact entity IV</Link></Pair>
<Pair plain title="8th"><Link to="/spell/insanity">Insanity</Link></Pair>
<Pair plain title="9th"><Link to="/spell/interplanetary_teleport">Interplanetary teleport</Link></Pair>
</Ability>
<h3 id="shamanspirit-dark_tapestry-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Dark Tapestry spirit can select from the following hexes.</p>
<Ability id="alien-summons-su" icon={["boost"]}>
<Pair single id="alien-summons-su">Alien Summons (Su)</Pair>
<Pair title="Ability">Whenever the shaman calls or summons one or more creatures, one creature of her choice arrives with the <Link to="/template/advanced">advanced</Link> creature simple template. The creature presents a distorted mockery of the usual creature summoned, its body deformed and alien in nature. This chosen creature's anatomy is so confounding that it is immune to the additional damage from critical hits or <Link to="/misc/precision_damage">precision damage</Link> (such as that granted by <Link to="/ability/sneak_attack">sneak attack</Link>).</Pair>
</Ability>
<Ability id="brain-drain-su" icon={["lower","boost"]}>
<Pair single id="brain-drain-su">Brain Drain (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per five shaman levels</Pair>
<Pair title="Standard Action"><p>The shaman can violently probe the mind of a single intelligent creature within 60 feet. The target can attempt a Will save to negate the effect and immediately know the source of this harmful mental prying. Creatures that fail their saving throws are racked with pain, taking 1d6 points of damage for every 2 shaman levels the shaman has.</p>
<p>After successfully damaging a creature with this ability, the shaman can sort through the jumble of stolen thoughts and memories as a <strong className="hl">full-round action</strong> and then attempt a single Knowledge check using the victim's skill bonus rather than her own. If the victim wasn't trained in the Knowledge skill the shaman wishes to use, then this check must be attempted as if untrained as well.</p>
<p>The randomly stolen thoughts remain in the shaman's mind for a number of rounds equal to her Wisdom modifier, and the shaman can attempt one Knowledge check per round using these drained thoughts.</p>
</Pair>
<Pair title="Special">This ability does not give access to memories or other personal information known by the victim. <em>Brain drain</em> is a mind-affecting effect.</Pair>
</Ability>
<Ability id="cloak-of-darkness-su" icon={["def"]}>
<Pair single id="cloak-of-darkness-su">Cloak of Darkness (Su)</Pair>
<Pair title="Usage">1 hour/day per shaman level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">The shaman conjures a cloak of semi-solid shadowy darkness that grants her a +4 armor bonus.</Pair>
<Pair title="At 7th Level">This bonus becomes +6.</Pair>
<Pair title="At 11th Level">This bonus increases to +8.</Pair>
<Pair title="At 15th Level">This bonus becomes +10.</Pair>
<Pair title="At 19th Level">This bonus increases to +12.</Pair>
</Ability>
<Ability id="maddening-whispers-su" icon={["lower"]}>
<Pair single id="maddening-whispers-su">Maddening Whispers (Su)</Pair>
<Pair title="Standard Action">At will, the shaman can invoke whispers from spirits of the Dark Tapestry to speak directly into the mind of a single target within 30 feet. These whispers utilize no known language, yet the victim nevertheless feels convinced that, somehow, it was almost able to comprehend the message. The target must succeed at a Will saving throw or be <Link to="/misc/confused">confused</Link> for a number of rounds equal to 1 + <Link to="/misc/one_eighth">one-eighth</Link> of her shaman level.</Pair>
<Pair title="Special">Whether or not the save is successful, the shaman cannot target that creature with this hex again for 24 hours. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="pierce-the-veil-su" icon={["power","boost"]}>
<Pair single id="pierce-the-veil-su">Pierce the Veil (Su)</Pair>
<Pair title="Ability">The shaman gains darkvision to a range of up to 30 feet. If the shaman already has darkvision, its range increases by 30 feet.</Pair>
<Pair title="At 8th Level">This ability becomes enhanced, allowing the shaman to <Link to="/umr/see_in_darkness">see perfectly in darkness</Link> of any kind, even that created by <Link to="/spell/deeper_darkness">deeper darkness</Link>.</Pair>
</Ability>
<h3 id="shamanspirit-dark_tapestry-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["power","melee"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal has an alien physiology, including twitching tentacles, additional but blind eyes, or strangely deformed limbs.">Spirit Animal</Pair>
<Pair title="Ability">The spirit animal gains the shaman's choice of a swim speed or a climb speed equal to its highest speed, and one of its natural weapons increases in reach by 5 feet. If it did not have a natural weapon, it gains a tentacle attack as a secondary <Link to="/umr/natural_weapons">natural weapon</Link> with 5-foot reach. Damage for this tentacle is standard for a creature of the spirit animal's size (1d2 for a Tiny spirit animal, or 1d3 for a Small one).</Pair>
</Ability>
<h3 id="shamanspirit-dark_tapestry-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Dark Tapestry spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="touch-of-the-void-su" icon={["touch","lower"]}>
<Pair single id="touch-of-the-void-su">Touch of the Void (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman is able to perform a melee touch attack that deals an amount of cold damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level.</Pair>
<Pair title="At 10th Level">Any creature the shaman strikes with this touch or with a melee weapon must succeed at a Fortitude saving throw or be <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to half the shaman's level. This has no effect on creatures that are already fatigued.</Pair>
</Ability>
<h3 id="shamanspirit-dark_tapestry-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Dark Tapestry spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="horrific-glimpse-sp" icon={["magic"]}>
<Pair single id="horrific-glimpse-sp">Horrific Glimpse (Sp)</Pair>
<Pair title="Ability"><p>Once per day, the shaman can gain the effects of <Link to="/spell/contact_other_plane">contact other plane</Link> after 1 hour of meditation. No components are required in order to use this ability, but the shaman does not get to select which plane she contacts. Instead, this version of the spell contacts an alien mind from somewhere in the Dark Tapestry, be it a hive mind of alien monstrosities, the disembodied sentience of a dead planet, or even the slumbering and insane mind of a Great Old One or Outer God.</p>
<p>The shaman must succeed at a DC 16 Wisdom check rather than an Intelligence check to avoid a decrease in Intelligence or Charisma when using this ability. If she fails the check, her Intelligence and Charisma scores each fall to 8 for 5 weeks, as the alien minds thus contacted prove as destructive to mortal thoughts as direct contact with the most powerful of deities.</p>
<p>The types of answers provided by the horrific glimpse, be they true answers, ignorance, lies, or random answers, are considered equal to those of a greater deity if the questions being asked concern the Material Plane, but they are equal to those of a demigod if the questions posed concern any other plane.</p>
</Pair>
<Pair title="Ability">Also once per day (but only after first using this ability as per <em>contact other plane</em>), the shaman can reveal a fragment of this horrific vision to another creature, as per <Link to="/spell/phantasmal_killer">phantasmal killer</Link>, except that the target takes 1d4+1 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> regardless of the results of any of its saving throws. The body of a creature slain by this effect is always hideously mutilated and savaged, making spells like <Link to="/spell/speak_with_dead">speak with dead</Link> useless.</Pair>
</Ability>
<h3 id="shamanspirit-dark_tapestry-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Dark Tapestry spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="unbound-form-su" icon={["magic"]}>
<Pair single id="unbound-form-su">Unbound Form (Su)</Pair>
<Pair title="Usage">1 minute/day per shaman level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">The shaman can assume a variety of forms, as per <Link to="/spell/greater_polymorph">greater polymorph</Link>, for 1 minute per day per shaman level. The minutes need not be consecutive, but they must be spent in 1-minute increments.</Pair>
<Pair title="Special">When she assumes these forms, some element of the new shape always sets it apart from a typical specimen, such as strangely colored eyes, limbs that bend in unusual ways, or a slimy coating of mucus over the flesh.</Pair>
</Ability>
<h3 id="shamanspirit-dark_tapestry-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def"]}>
<Pair single id="manifestation" flavor="The shaman becomes an unnatural spirit of the Dark Tapestry. While she retains much of her original appearance, several minor cosmetic changes leave no doubt as to her now-alien nature. Her eyes might appear as solid spheres of blackness, her fingers might writhe like tentacles, or her legs might bend backward at the knees.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She gains damage reduction 5/- and immunity to acid, critical hits, and sneak attacks.</Pair>
<Pair title="Ability">Once per day, the shaman can cast <Link to="/spell/shapechange">shapechange</Link> as a spell-like ability without requiring a material component, but the form the shaman assumes via this spell-like ability is never something that looks of natural origin to the shaman's home world.</Pair>
</Ability>
</>};
const _flame = {hasJL:true,title: "Flame", jsx: <><div className="jumpList" id="shamanspirit-flame-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-flame-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-flame-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-flame-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-flame-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-flame-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-flame-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-flame-flame">Flame</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 39</Link><br/>A shaman who selects the flame spirit has a radiant light behind her eyes and the faint smell of smoke about her. When she calls upon one of this spirit's abilities, a hungry spectral flame dances around her body.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/burning_hands">Burning hands</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/fireball">Fireball</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wall_of_fire">Wall of fire</Link></Pair>
<Pair plain title="5th"><Link to="/spell/summon_monster_v">Summon monster V</Link> (fire elementals only)</Pair>
<Pair plain title="6th"><Link to="/spell/fire_seeds">Fire seeds</Link></Pair>
<Pair plain title="7th"><Link to="/spell/fire_storm">Fire storm</Link></Pair>
<Pair plain title="8th"><Link to="/spell/incendiary_cloud">Incendiary cloud</Link></Pair>
<Pair plain title="9th"><Link to="/spell/fiery_body">Fiery body</Link></Pair>
</Ability>
<h3 id="shamanspirit-flame-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Flame spirit can select from the following hexes.</p>
<Ability id="cinder-dance-ex" icon={["boost"]}>
<Pair single id="cinder-dance-ex">Cinder Dance (Ex)</Pair>
<Pair title="Ability">The shaman's base speed increases by 10 feet.</Pair>
<Pair title="At 5th Level">The shaman receives <Link to="/feat/nimble_moves">Nimble Moves</Link> as a bonus feat.</Pair>
<Pair title="At 10th Level">The shaman receives <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link> as a bonus feat.</Pair>
<Pair title="Special">The shaman doesn't need to meet the prerequisites of these feats.</Pair>
</Ability>
<Ability id="fire-nimbus-su" icon={["lower"]}>
<Pair single id="fire-nimbus-su">Fire Nimbus (Su)</Pair>
<Pair title="Ability"><p>The shaman causes a creature within 30 feet to gain a nimbus of fire. Though this doesn't harm the creature, it does cause the creature to emit light like a <Link to="/eq-misc/torch">torch</Link>, preventing it from gaining any benefit from <Link to="/rule/concealment">concealment</Link> or <Link to="/spell/invisibility">invisibility</Link>. The target also takes a -2 penalty on saving throws against spells or effects that deal fire damage.</p>
<p>The fire nimbus lasts for a number of rounds equal to the shaman's level. A successful Will saving throw negates this effect.</p>
</Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="flame-curse-su" icon={["power"]}>
<Pair single id="flame-curse-su">Flame Curse (Su)</Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to become <Link to="/umr/vulnerable">vulnerable</Link> to fire until the end of the shaman's next turn. If the creature is already vulnerable to fire, this hex has no effect. Fire immunity and resistances apply as normal, and any saving throw allowed by the effect that caused the damage reduces it as normal.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">The duration of this hex increases to 3 rounds.</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="gaze-of-flames-su" icon={["power","magic"]}>
<Pair single id="gaze-of-flames-su">Gaze of Flames (Su)</Pair>
<Pair title="Ability">The shaman sees through fire, fog, and smoke without penalty as long as there is enough light to otherwise allow her to see normally.</Pair>
<Pair title="At 7th Level">The shaman can gaze through any source of flame within 10 feet per shaman level, as <Link to="/spell/clairaudience_clairvoyance">clairaudience</Link>. The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive.</Pair>
</Ability>
<Ability id="ward-of-flames-su" icon={["protect","def"]}>
<Pair single id="ward-of-flames-su">Ward of Flames (Su)</Pair>
<Pair title="Ability">The shaman touches a willing creature (including herself) and grants a <em>ward of flames.</em> The next time the warded creature is struck with a melee attack, the creature making the attack takes an amount of fire damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level. This <em>ward</em> lasts for 1 minute, after which it fades away if not already expended.</Pair>
<Pair title="At 8th Level">This hex now persists through 2 attacks.</Pair>
<Pair title="At 16th Level">This hex now persists through 3 attacks.</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<h3 id="shamanspirit-flame-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["magic","def","down"]}>
<Pair single id="spirit-animal">Spirit Animal</Pair>
<Pair title="Passive Ability">The shaman's spirit animal is surrounded by a nimbus of flame that gives off light like a <Link to="/eq-misc/candle">candle</Link>. This nimbus is warm to the touch, but doesn't cause any damage. The animal is immune to fire damage, but is vulnerable to cold damage.</Pair>
</Ability>
<h3 id="shamanspirit-flame-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Flame spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="touch-of-flame-su" icon={["touch"]}>
<Pair single id="touch-of-flame-su">Touch of Flame (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can make a melee touch attack that deals 1an amount of fire damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level.</Pair>
<Pair title="At 11th Level">Any weapon she wields is treated as a <Link to="/magic-enh/flaming">flaming</Link> weapon.</Pair>
</Ability>
<h3 id="shamanspirit-flame-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Flame spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="fiery-soul-su" icon={["def","cone"]}>
<Pair single id="fiery-soul-su">Fiery Soul (Su)</Pair>
<Pair title="Passive Ability">The shaman gains fire <Link to="/umr/resistance">resistance</Link> 10.</Pair>
<Pair title="Standard Action"><p>In addition, she can unleash a 15-foot cone of flame from her mouth, dealing 1d4 points of fire damage per shaman level she possesses. A successful Reflex saving throw halves this damage.</p>
<p>The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.</p>
</Pair>
</Ability>
<h3 id="shamanspirit-flame-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Flame spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="elemental-form-su" icon={["magic"]}>
<Pair single id="elemental-form-su">Elemental Form (Su)</Pair>
<Pair title="Standard Action">The shaman assumes the form of a Huge (or smaller) fire elemental, as if using <Link to="/spell/elemental_body_iv">elemental body IV</Link> with a duration of 1 hour per level. The shaman can use this ability once per day.</Pair>
</Ability>
<h3 id="shamanspirit-flame-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","boost"]}>
<Pair single id="manifestation" flavor="The shaman becomes a spirit of flame.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The shaman gains fire resistance 30.</Pair>
<Pair title="Ability">She can apply any one of the following feats to any fire spell she casts without increasing the spell's level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. She doesn't need to possess these feats to use this ability.</Pair>
</Ability>
</>};
const _frost = {hasJL:true,title: "Frost", jsx: <><div className="jumpList" id="shamanspirit-frost-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-frost-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-frost-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-frost-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-frost-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-frost-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-frost-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-frost-frost">Frost</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 10</Link><br/>Far to the north, Erutaki tribes have adapted to life in the bitter cold of the Crown of the World. The frost spirit is seen by some Erutaki as a protector of their way of life, and shamans who commune with the spirit are shown great respect in their communities.</p>
<p>A shaman who selects the frost spirit has coarse white hair and always feels cold to the touch.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/frostbite">Frostbite</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/elemental_touch">Elemental touch</Link> (cold only)</Pair>
<Pair plain title="3rd"><Link to="/spell/elemental_aura">Elemental aura</Link> (cold only)</Pair>
<Pair plain title="4th"><Link to="/spell/ice_storm">Ice storm</Link></Pair>
<Pair plain title="5th"><Link to="/spell/summon_monster_v">Summon monster V</Link> (ice elementals only)</Pair>
<Pair plain title="6th"><Link to="/spell/freezing_sphere">Freezing sphere</Link></Pair>
<Pair plain title="7th"><Link to="/spell/ice_body">Ice body</Link></Pair>
<Pair plain title="8th"><Link to="/spell/polar_ray">Polar ray</Link></Pair>
<Pair plain title="9th"><Link to="/spell/mass_icy_prison">Mass icy prison</Link></Pair>
</Ability>
<h3 id="shamanspirit-frost-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Frost spirit can select from the following hexes.</p>
<Ability id="biting-frost-su" icon={["lower"]}>
<Pair single id="biting-frost-su">Biting Frost (Su)</Pair>
<Pair title="Ability">The shaman turns the air frigid around a target within 30 feet for a number of rounds equal to the shaman's Charisma modifier (minimum 1). The target must attempt a Fortitude saving throw at the beginning of each turn or be damaged by exposure to the extreme cold. On a failed save, the target takes 1d6 points of nonlethal damage. On a successful save, the effect ends immediately.</Pair>
<Pair title="Special">Whether or not the initial save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="hypothermia-su" icon={["lower"]}>
<Pair single id="hypothermia-su">Hypothermia (Su)</Pair>
<Pair title="Ability">The shaman afflicts a creature within 30 feet with hypothermia. The target must attempt a Fortitude saving throw. On a failed save, the target is <Link to="/misc/fatigued">fatigued</Link> for 2 rounds.</Pair>
<Pair title="At 8th Level">The duration becomes 3 rounds.</Pair>
<Pair title="At 16th Level">The duration increases to 4 rounds.</Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="sluggish-su" icon={["lower"]}>
<Pair single id="sluggish-su">Sluggish (Su)</Pair>
<Pair title="Ability">The shaman causes the speed of a creature within 30 feet to be halved. The target can attempt a Fortitude saving throw to negate this effect. The penalty lasts for a number of rounds equal to the shaman's character level and does not stack with other effects that reduce speed.</Pair>
<Pair title="Special">Whether or not the save is successful, the creature can't be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="tundra-dweller-su" icon={["protect"]}>
<Pair single id="tundra-dweller-su">Tundra Dweller (Su)</Pair>
<Pair title="Ability">The shaman touches a willing creature and grants it cold <Link to="/umr/resistance">resistance</Link> 10 for a number of rounds equal to her Charisma modifier (minimum 1). This resistance does not stack with any other cold resistance, such as from special abilities or magical items.</Pair>
<Pair title="At 8th Level">The duration becomes 2 rounds.</Pair>
<Pair title="At 16th Level">The duration increases to 3 rounds.</Pair>
<Pair title="Special">A creature targeted by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="wilds-attuned-ex" icon={["power","boost"]}>
<Pair single id="wilds-attuned-ex">Wilds-Attuned (Ex)</Pair>
<Pair title="Passive Ability">The shaman receives <Link to="/feat/animal_affinity">Animal Affinity</Link> as a bonus feat and gains a +4 insight bonus on Knowledge (nature) checks when in a cold climate.</Pair>
</Ability>
<h3 id="shamanspirit-frost-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal is covered in a light layer of glimmering frost, and its breath comes out as mist regardless of the temperature.">Spirit Animal</Pair>
<Pair title="Passive Ability">The animal has resistance 5 to cold and electricity.</Pair>
</Ability>
<h3 id="shamanspirit-frost-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Frost spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="ice-splinter-su" icon={["zap","boost"]}>
<Pair single id="ice-splinter-su">Ice Splinter (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can shoot razor-sharp icicles at an enemy within 30 feet as a ranged touch attack. This barrage deals an amount of piercing damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.</Pair>
<Pair title="At 11th Level">Any weapon she wields is treated as a <Link to="/magic-enh/frost">frost</Link> weapon.</Pair>
</Ability>
<h3 id="shamanspirit-frost-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Frost spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="frigid-blast-su" icon={["def","magic"]}>
<Pair single id="frigid-blast-su">Frigid Blast (Su)</Pair>
<Pair title="Passive Ability">The shaman gains cold resistance 10.</Pair>
<Pair title="Standard Action">In addition, she can summon an icy blast in a 20-foot-radius <Link to="/misc/burst">burst</Link> originating from a point she can see within 30 feet. This blast deals cold damage equal to 1d6 per shaman level she has to each creature caught in the burst. Each target can attempt a Reflex saving throw to halve this damage.</Pair>
<Pair title="Special">The shaman can use this ability three times per day, but she must wait at least 1d4 rounds between each use.</Pair>
</Ability>
<h3 id="shamanspirit-frost-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Frost spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="guardian-of-the-north-su" icon={["magic"]}>
<Pair single id="guardian-of-the-north-su">Guardian of the North (Su)</Pair>
<Pair title="Standard Action">The shaman assumes the form, as <Link to="/spell/beast_shape_iv">beast shape IV</Link>, of one of the following animals: <Link to="/monster/dire_bear">dire bear</Link>, <Link to="/monster/dire_tiger">dire tiger</Link>, <Link to="/monster/mastodon">mastodon</Link>, or <Link to="/monster/woolly_rhinoceros">woolly rhinoceros</Link>. The duration of this transformation is 1 hour per level. The shaman can use this ability once per day.</Pair>
</Ability>
<h3 id="shamanspirit-frost-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","boost"]}>
<Pair single id="manifestation" flavor="The shaman becomes a being of ice and snow.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The shaman gains immunity to cold.</Pair>
<Pair title="Ability">She can also apply any one of the following feats to any spell with the cold descriptor that she casts without increasing the spell's level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. She doesn't need to have these feats to use this ability.</Pair>
</Ability>
</>};
const _heavens = {hasJL:true,title: "Heavens", jsx: <><div className="jumpList" id="shamanspirit-heavens-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-heavens-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-heavens-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-heavens-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-heavens-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-heavens-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-heavens-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-heavens-heavens">Heavens</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 40</Link><br/>A shaman who selects the heavens spirit has eyes that sparkle like starlight, exuding an aura of otherworldliness to those she is around. When she calls upon one of this spirit's abilities, her eyes turn pitch black and the colors around her drain for a brief moment.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/color_spray">Color spray</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/hypnotic_pattern">Hypnotic pattern</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/daylight">Daylight</Link></Pair>
<Pair plain title="4th"><Link to="/spell/rainbow_pattern">Rainbow pattern</Link></Pair>
<Pair plain title="5th"><Link to="/spell/overland_flight">Overland flight</Link></Pair>
<Pair plain title="6th"><Link to="/spell/chain_lightning">Chain lightning</Link></Pair>
<Pair plain title="7th"><Link to="/spell/prismatic_spray">Prismatic spray</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sunburst">Sunburst</Link></Pair>
<Pair plain title="9th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
<h3 id="shamanspirit-heavens-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Heavens spirit can select from the following hexes.</p>
<Ability id="enveloping-void-su" icon={["lower"]}>
<Pair single id="enveloping-void-su" flavor="The shaman curses one creature with the dark void.">Enveloping Void (Su)</Pair>
<Pair title="Standard Action">The shaman can cause one enemy within 30 feet to treat the <Link to="/rule/light_level">light level</Link> as two steps lower: bright light becomes dim light, normal light becomes darkness, and areas of dim light and darkness become supernaturally dark (like darkness, but even creatures with darkvision cannot see). This effect lasts for a number of rounds equal to the shaman's level. A successful Will saving throw negates this effect.</Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="guiding-star-su" icon={["magic","boost"]}>
<Pair single id="guiding-star-su">Guiding Star (Su)</Pair>
<Pair title="Ability">Whenever the shaman can see the open sky at night, she can determine her precise location and can add her Wisdom modifier to her Charisma modifier on all Charisma-based skill checks.</Pair>
<Pair title="Ability">In addition, once per night while outdoors, she can cast one spell as if it were modified by the <Link to="/feat/empower_spell">Empower Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link> feat without increasing the spell's casting time or level. The shaman doesn't need to possess the feat to use this ability.</Pair>
</Ability>
<Ability id="heavens-leap-su" icon={["magic"]}>
<Pair single id="heavens-leap-su" flavor="The shaman is adept at creating tiny tears in the fabric of space, and temporarily stitching them together to reach other locations through a limited, one-way wormhole.">Heaven's Leap (Su)</Pair>
<Pair title="Standard Action">The shaman can designate herself or a single ally that she can see who is within 30 feet of her. She can move that creature as if it were subject to <Link to="/spell/jesters_jaunt">jester's jaunt</Link>. Once targeted by this hex, the ally cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="lure-of-the-heavens-su" icon={["def","magic"]}>
<Pair single id="lure-of-the-heavens-su" flavor="The shaman's connection to the skies above is so strong that her feet barely touch the ground.">Lure of the Heavens (Su)</Pair>
<Pair title="At 1st Level">She no longer leaves tracks.</Pair>
<Pair title="At 5th Level">She can hover up to 6 inches above the ground or liquid surfaces.</Pair>
<Pair title="At 10th Level">The shaman gains the ability to <Link to="/spell/fly">fly</Link> (as the spell) for a number of minutes per day equal to her shaman level - the duration does not need to be consecutive, but it must be used in 1-minute increments.</Pair>
</Ability>
<Ability id="starburn-su" icon={["lower"]}>
<Pair single id="starburn-su">Starburn (Su)</Pair>
<Pair title="Standard Action">The shaman causes one creature within 30 feet to burn like a star. The creature takes 1d6 points of fire damage for every 2 levels the shaman possesses and emits <Link to="/rule/bright_light">bright light</Link> for 1 round. A successful Fortitude saving throw halves the damage and negates the emission of bright light.</Pair>
<Pair title="Special">The shaman can use this hex a number of times per day equal to her Charisma modifier (minimum 1), but must wait 1d4 rounds between uses.</Pair>
</Ability>
<h3 id="shamanspirit-heavens-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["magic","power"]}>
<Pair single id="spirit-animal">Spirit Animal</Pair>
<Pair title="Passive Ability">The flesh of the shaman's spirit animal accurately reflects the stars that would be visible in the night sky, no matter where the animal is or the time of day. Due to this, it can be used as a star map.</Pair>
<Pair title="Ability">In addition, it gains a fly speed of 5 feet; if the animal already has a fly speed, instead its fly speed increases by 10 feet. While the animal is flying, a small nimbus of light surrounds it.</Pair>
</Ability>
<h3 id="shamanspirit-heavens-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Heavens spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="stardust-sp" icon={["lower"]}>
<Pair single id="stardust-sp">Stardust (Sp)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman causes stardust to materialize around one creature within 30 feet. This stardust causes the target to shed light as a <Link to="/eq-misc/candle">candle</Link>, and it cannot benefit from <Link to="/rule/concealment">concealment</Link> or any invisibility effects. The creature takes a penalty on attack rolls and sight-based Perception checks. <Bonus f c="shaman" n={4} type="penalty" />. This effect lasts for a number of rounds equal to half the shaman's level (minimum 1).</Pair>
<Pair title="Special">Sightless creatures cannot be affected by this ability.</Pair>
</Ability>
<h3 id="shamanspirit-heavens-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Heavens spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="void-adaptation-su" icon={["power","def"]}>
<Pair single id="void-adaptation-su">Void Adaptation (Su)</Pair>
<Pair title="Ability">The shaman gains darkvision 60 feet. If she already possesses darkvision, the range instead increases by 30 feet. In addition, the shaman can see in supernatural darkness, is constantly under the effects of <Link to="/spell/endure_elements">endure elements</Link>, and doesn't need to breathe.</Pair>
</Ability>
<h3 id="shamanspirit-heavens-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Heavens spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="phantasmagoric-display-sp" icon={["magic"]}>
<Pair single id="phantasmagoric-display-sp">Phantasmagoric Display (Sp)</Pair>
<Pair title="Ability">The shaman can cast <Link to="/spell/prismatic_wall">prismatic wall</Link> and <Link to="/spell/prismatic_spray">prismatic spray</Link>, each once per day with a caster level equal to her shaman level.</Pair>
</Ability>
<h3 id="shamanspirit-heavens-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","boost"]}>
<Pair single id="manifestation" flavor="The shaman becomes the spirit of heaven.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She receives a bonus on all saving throws equal to her Wisdom modifier. She automatically stabilizes if she is reduced to below 0 hit points. She's immune to fear effects, and she automatically confirms all critical hits she threatens. If she dies, she's reborn 3 days later in the form of a star child, maturing over the course of 7 days (as <Link to="/spell/reincarnate">reincarnate</Link>).</Pair>
</Ability>
<aside><p>There is no such creature or template called "Star Child"; the line was intended as <a href="https://paizo.com/threads/rzs2l366?Oracle-of-Heavens-and-Star-Child#3" data-outgoing>a flavorful way of saying "a reincarnated shaman"</a>.</p>
</aside></>};
const _life = {hasJL:true,title: "Life", jsx: <><div className="jumpList" id="shamanspirit-life-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-life-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-life-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-life-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-life-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-life-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-life-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-life-life">Life</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 41</Link><br/>A shaman who selects the life spirit appears more vibrant than most mortals. Her skin seems to glow, and her teeth are a pearly white. When she calls upon one of this spirit's abilities, her eyes and hair shimmer in the light.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/detect_undead">Detect undead</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/lesser_restoration">Lesser restoration</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/neutralize_poison">Neutralize poison</Link></Pair>
<Pair plain title="4th"><Link to="/spell/restoration">Restoration</Link></Pair>
<Pair plain title="5th"><Link to="/spell/breath_of_life">Breath of life</Link></Pair>
<Pair plain title="6th"><Link to="/spell/heal">Heal</Link></Pair>
<Pair plain title="7th"><Link to="/spell/greater_restoration">Greater restoration</Link></Pair>
<Pair plain title="8th"><Link to="/spell/mass_heal">Mass heal</Link></Pair>
<Pair plain title="9th"><Link to="/spell/true_resurrection">True resurrection</Link></Pair>
</Ability>
<h3 id="shamanspirit-life-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Life spirit can select from the following hexes.</p>
<Ability id="curse-of-suffering-su" icon={["lower"]}>
<Pair single id="curse-of-suffering-su">Curse of Suffering (Su)</Pair>
<Pair title="Ability"><p>The shaman causes a creature within 30 feet to take more damage from <Link to="/rule/bleed">bleed</Link> effects and causes its wounds to heal at a slower rate. When the cursed creature takes bleed damage, it takes 1 additional point of bleed damage (even if the bleed is <Link to="/rule/ability_damage">ability damage</Link>).</p>
<p>Furthermore, when the target is subject to an effect that would restore its hit points, that effect restores only half the normal amount of hit points.</p>
</Pair>
<Pair title="Special">This curse lasts for a number of rounds equal to the shaman's level. A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="deny-succor-su" icon={["lower"]}>
<Pair single id="deny-succor-su">Deny Succor (Su)</Pair>
<Pair title="Ability">The shaman can place this hex on a single creature within 30 feet. The target does not heal damage from <Link to="/main/cure_spells">cure spells</Link> and does not benefit from any spells or effects that remove <Link to="/rule/conditions">conditions</Link>. This effect lasts for a number of rounds equal to half the shaman's level. A successful Will saving throw negates this effect.</Pair>
<Pair title="Special">Whether or not the saving throw is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="enhanced-cures-su" icon={["boost"]}>
<Pair single id="enhanced-cures-su">Enhanced Cures (Su)</Pair>
<Pair title="Passive Ability">When the shaman casts a <em>cure spell,</em> the maximum number of hit points healed is based on her shaman level, not the limit imposed by the spell. For example an 11th-level shaman with this hex can cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> to heal 1d8+11 hit points instead of the normal 1d8+5 maximum.</Pair>
</Ability>
<Ability id="life-link-su" icon={["aid","protect"]}>
<Pair single id="life-link-su">Life Link (Su)</Pair>
<Pair title="Ability">The shaman creates a bond between herself and another creature within 30 feet. Each round at the start of the shaman's turn, if the bonded creature is wounded for 5 or more hit points below its maximum hit points, it heals 5 hit points and the shaman takes 5 points of damage.</Pair>
<Pair title="Special">The shaman can have one bond active per shaman level. The bond continues until the bonded creature dies, the shaman dies, the distance between her and the bonded creature exceeds 100 feet, or the shaman ends it as an <strong className="hl">immediate action</strong>. If the shaman has multiple bonds active, she can end as many as she wants with the same immediate action.</Pair>
</Ability>
<Ability id="life-sight-ex" icon={["power"]}>
<Pair single id="life-sight-ex" flavor="The shaman can see the states of life, death, and general health of those around her.">Life Sight (Ex)</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Ability">When she uses this ability, she can tell whether or not creatures within 30 feet of her that she can see are living, wounded, dying, or dead. She can also tell if those creatures are confused, disabled, diseased, nauseated, poisoned, sickened or staggered.</Pair>
<Pair title="At 12th Level">When using <em>life sight</em> she is able to sense all nearby living creatures; this functions similar to <Link to="/umr/blindsight">blindsight</Link>, but only for living creatures within 30 feet of her.</Pair>
</Ability>
<h3 id="shamanspirit-life-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal appears to be a beautiful and very healthy version of its species, and seems especially vibrant and full of life.">Spirit Animal</Pair>
<Pair title="Passive Ability">Her animal companion gains <Link to="/umr/fast_healing">fast healing</Link> 1; if the spirit animal already has fast healing, instead its fast healing increases by 1.</Pair>
</Ability>
<h3 id="shamanspirit-life-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Life spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="channel-su" icon={["power","aura"]}>
<Pair single id="channel-su">Channel (Su)</Pair>
<Pair title="Usage">1 + Charisma modifier times/day</Pair>
<Pair title="Ability">The shaman can <Link to="/ability/channel_positive_energy">channel positive energy</Link> like a cleric, using her shaman level as her effective cleric level when determining the amount of damage healed (or dealt to undead) and the DC.</Pair>
</Ability>
<h3 id="shamanspirit-life-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Life spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="healers-touch-su" icon={["boost","protect"]}>
<Pair single id="healers-touch-su">Healer's Touch (Su)</Pair>
<Pair title="Passive Ability">The shaman gains a +4 bonus on Heal checks.</Pair>
<Pair title="Standard Action">The shaman can move up to half her speed and touch up to six dying creatures. Each creature is automatically <Link to="/misc/stabilize">stabilized</Link> without the need of a Heal check.</Pair>
</Ability>
<h3 id="shamanspirit-life-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Life spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="quick-healing-su" icon={["boost"]}>
<Pair single id="quick-healing-su" flavor="The shaman calls upon her spirit to enhance the speed of her healing abilities.">Quick Healing (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Swift Action">She can channel positive energy or cast a <em>cure</em> spell.</Pair>
</Ability>
<h3 id="shamanspirit-life-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def"]}>
<Pair single id="manifestation" flavor="The shaman becomes a perfect channel for life energy.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She gains immunity to bleed, death attacks, and negative energy, as well as to the exhausted, fatigued, nauseated, and sickened conditions. Ability damage and drain cannot reduce her to below 1 in any ability score. She automatically succeeds at saving throws against massive damage. When she is reduced to below 0 hit points, she doesn't die until her negative hit point total exceeds double her Constitution score.</Pair>
</Ability>
</>};
const _lore = {hasJL:true,title: "Lore", jsx: <><div className="jumpList" id="shamanspirit-lore-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-lore-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-lore-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-lore-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-lore-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-lore-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-lore-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-lore-lore">Lore</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 43</Link><br/>A shaman who selects the lore spirit appears far wiser and knowing that her age would suggest. Though she can seem unassuming, her eyes give the impression she is peering deep into all she looks at, seeing the secrets of the essential merely by concentrating.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/identify">Identify</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/locate_object">Locate object</Link></Pair>
<Pair plain title="4th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
<Pair plain title="5th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mass_owls_wisdom">Mass owl's wisdom</Link></Pair>
<Pair plain title="7th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="9th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
<h3 id="shamanspirit-lore-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Lore spirit can select from the following hexes.</p>
<Ability id="arcane-enlightenment-su" icon={["learn"]}>
<Pair single id="arcane-enlightenment-su" flavor="The shaman's native intelligence grants her the ability to tap into arcane lore.">Arcane Enlightenment (Su)</Pair>
<Pair title="Ability">The shaman can add a number of spells from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list equal to her Charisma modifier (minimum 1) to the list of shaman spells she can prepare. To cast these spells she must have an Intelligence score equal to at least 10 + the spell's level, but the saving throw DCs of these spells are based on her Wisdom rather than Intelligence. When she casts these spells, they are treated as divine rather than arcane.</Pair>
<Pair title="Special">Each time the shaman gains a level after taking this hex, she can choose to replace one of these spells for a new spell on the <Link to="/main/spells_wizard">wizard</Link>/<Link to="/main/spells_sorcerer">sorcerer</Link> spell list.</Pair>
</Ability>
<Ability id="benefit-of-wisdom-ex" icon={["boost"]}>
<Pair single id="benefit-of-wisdom-ex" flavor="The shaman relies on wisdom rather than intellect to gain and retain knowledge.">Benefit of Wisdom (Ex)</Pair>
<Pair title="Ability">She can use her Wisdom modifier instead of her Intelligence modifier on all Intelligence-based skill checks.</Pair>
</Ability>
<Ability id="brain-drain-su" icon={["lower","boost"]}>
<Pair single id="brain-drain-su">Brain Drain (Su)</Pair>
<Pair title="Standard Action"><p>The shaman violently probes the mind of a single intelligent enemy within 30 feet. The target can attempt a Will saving throw to negate the effect. If it succeeds, it immediately knows the source of the mental prying; otherwise, it's wracked with pain and takes 1d4 points of damage for every 2 levels the shaman possesses.</p>
<p>On the round following her successful use of this ability, the shaman can take a <strong className="hl">full-round action</strong> to sort through the jumble of stolen thoughts and memories to attempt a single Knowledge check using the victim's bonus with that skill.</p>
<p>The random stolen thoughts remain in the shaman's mind for a number of rounds equal to her Charisma modifier (minimum 1), and she can treat the knowledge gained as if she used <Link to="/spell/detect_thoughts">detect thoughts</Link>.</p>
</Pair>
<Pair title="Special">This is a mind-affecting effect. Once she successfully affects a creature, she cannot use this hex on that creature again for 24 hours.</Pair>
</Ability>
<Ability id="confusion-curse-ex" icon={["lower"]}>
<Pair single id="confusion-curse-ex" flavor="The shaman's command of lore can cause weaker minds to become mired in confusion.">Confusion Curse (Ex)</Pair>
<Pair title="Ability">The shaman chooses a single intelligent target within 30 feet. That creature must succeed at a Will saving throw or become <Link to="/misc/confused">confused</Link> for a number of rounds equal to the shaman's Charisma modifier (minimum 1).</Pair>
<Pair title="Special">Once affected by this hex, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="share-knowledge-su" icon={["boost"]}>
<Pair single id="share-knowledge-su">Share Knowledge (Su)</Pair>
<Pair title="Ability">The shaman targets a single willing ally within 30 feet and shares her knowledge and experience with that target for a number of minutes equal to her Charisma modifier. During that time, the subject knows the languages that the shaman does and uses the shaman's skill modifier on all Knowledge checks instead of its own.</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<h3 id="shamanspirit-lore-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["boost","def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal appears to be quiet and unassuming.">Spirit Animal</Pair>
<Pair title="Passive Ability">It gains a +2 bonus on Initiative checks and a +4 bonus on Stealth checks.</Pair>
</Ability>
<h3 id="shamanspirit-lore-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Lore spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="monstrous-insight-su" icon={["boost","def"]}>
<Pair single id="monstrous-insight-su" flavor="The shaman can identify creatures and gain insight into their strengths and weaknesses.">Monstrous Insight (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can attempt a <Link to="/skill/knowledge">Knowledge</Link> skill check to identify a creature and its abilities (using the appropriate skill for the monster's type) with an insight bonus equal to her shaman level.</Pair>
<Pair title="Special">Whether or not the check is successful, she also gains a +2 insight bonus for 1 minute on attack rolls made against that creature and a +2 insight bonus to her AC against attacks made by that creature. These bonuses last for 1 minute.</Pair>
</Ability>
<h3 id="shamanspirit-lore-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Lore spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="automatic-writing-su" icon={["magic"]}>
<Pair single id="automatic-writing-su">Automatic Writing (Su)</Pair>
<Pair title="Usage">1 time/day + 1 per four shaman levels beyond 8th<ByLevelPop levels={[[8,1],[12,2],[16,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">Once per day, the shaman can spend 10 minutes in uninterrupted meditation to tap into greater understanding. During this period, her hands produce mysterious writings pertaining to the future. This writing takes the form of <Link to="/spell/divination">divination</Link> with 90% effectiveness.</Pair>
</Ability>
<h3 id="shamanspirit-lore-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Lore spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="perfect-knowledge-ex" icon={["power","boost"]}>
<Pair single id="perfect-knowledge-ex">Perfect Knowledge (Ex)</Pair>
<Pair title="Ability">The shaman gains the benefit of the <Link to="/spell/tongues">tongues</Link> spell permanently. She also gains a +10 competence bonus on all Knowledge, Linguistics, and Spellcraft checks.</Pair>
</Ability>
<h3 id="shamanspirit-lore-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["boost","magic"]}>
<Pair single id="manifestation" flavor="The shaman becomes an unending font of knowledge and lore.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">She can take 20 on all Knowledge skill checks, including those she isn't trained in.</Pair>
<Pair title="Ability">Her understanding of the fundamental underpinnings of reality has also become so advanced that she can cast <Link to="/spell/wish">wish</Link> once per day. This doesn't require a material component, but the wish cannot be used to grant ability score bonuses or replicate spells with expensive material components.</Pair>
</Ability>
</>};
const _mammoth = {hasJL:true,title: "Mammoth", jsx: <><div className="jumpList" id="shamanspirit-mammoth-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-mammoth-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-mammoth-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-mammoth-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-mammoth-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-mammoth-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-mammoth-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-mammoth-mammoth">Mammoth</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 132</Link>, <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 16</Link><br/>A shaman who selects the mammoth spirit is abnormally tall and stocky, with thick shaggy hair. When she uses a special ability of this spirit, her muscles ripple and flex, and her stature seems even greater than before. At times, particularly when she uses her most powerful abilities, a ghostly image of a mammoth may seem to rise around her as a visible aura of ghostly power.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/bulls_strength">Bull's strength</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/rage">Rage</Link></Pair>
<Pair plain title="4th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="5th"><Link to="/spell/beast_shape_iii">Beast shape III</Link></Pair>
<Pair plain title="6th"><Link to="/spell/tar_pool">Tar pool</Link></Pair>
<Pair plain title="7th"><Link to="/spell/summon_natures_ally_vii">Summon nature's ally VII</Link></Pair>
<Pair plain title="8th"><Link to="/spell/frightful_aspect">Frightful aspect</Link></Pair>
<Pair plain title="9th"><Link to="/spell/polar_midnight">Polar midnight</Link></Pair>
</Ability>
<h3 id="shamanspirit-mammoth-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Mammoth spirit can select from the following hexes.</p>
<Ability id="burden-of-the-beast-su" icon={["lower"]}>
<Pair single id="burden-of-the-beast-su">Burden of the Beast (Su)</Pair>
<Pair title="Ability">This ability works as the <em>lodestone</em> ability of the <Link to="/shamanspirit/stone">stone</Link> spirit: The shaman causes one creature within 30 feet to become heavy and lethargic. The creature is treated as if it were <Link to="/rule/carrying_capacity">carrying a medium load</Link>. If the creature is already carrying a medium load, it is instead treated as if it were carrying a heavy load. If the creature is carrying a heavy load, its maximum Dexterity bonus to AC is reduced to +0, it takes a -9 armor check penalty, and its movement is reduced to 5 feet.</Pair>
<Pair title="Special">The effect lasts for a number of rounds equal to the shaman's level. A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="mammoths-hide-su" icon={["protect"]}>
<Pair single id="mammoths-hide-su">Mammoth's Hide (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">The shaman can touch a willing ally and cause its skin to thicken and sprout thick, shaggy fur. The creature gains a +2 enhancement bonus to natural armor and cold <Link to="/umr/resistance">resistance</Link> 5 for 10 minutes.</Pair>
<Pair title="At 9th Level">The enhancement bonus increases to +3 and the cold resistance to 10.</Pair>
<Pair title="At 15th Level">This enhancement bonus increases to +4 and the cold resistance to 15.</Pair>
</Ability>
<Ability id="phantom-stampede-su" icon={["lower"]}>
<Pair single id="phantom-stampede-su">Phantom Stampede (Su)</Pair>
<Pair title="Ability">The shaman summons a host of ghostly herd beasts to trample a single creature. These phantom beasts affect only the target creature, which is buffeted and pummeled by their passing. The creature takes no damage from the ability, but takes a -4 penalty to its CMD against <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/overrun">overrun</Link>, and <Link to="/rule/trip">trip</Link> attempts. Additionally, spellcasters under the effect of this ability take a -4 penalty on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
<Pair title="Special">The target receives no saving throw to negate this effect. This effect lasts a number of rounds equal to the shaman's level. The creature can't be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="primal-speaker-ex" icon={["magic","boost"]}>
<Pair single id="primal-speaker-ex">Primal Speaker (Ex)</Pair>
<Pair title="Ability">The shaman can speak with <Link to="/monster/mammoth">mammoths</Link> and any other <Link to="/family/megafauna">megafauna</Link> or <Link to="/monster/elephant">elephant</Link> creatures as if she were under the effects of <Link to="/spell/speak_with_animals">speak with animals</Link>.</Pair>
<Pair title="At 5th Level">The shaman gains a bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks when dealing with those animals equal to <Link to="/misc/half">half</Link> her shaman level.</Pair>
<Pair title="At 10th Level">The shaman can affect one such animal within 30 feet as if she'd cast <Link to="/spell/charm_animal">charm animal</Link> (Will negates). Whether or not the target succeeds at the saving throw, it can't be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="thunder-foot-ex" icon={["boost"]}>
<Pair single id="thunder-foot-ex" flavor="The shaman's body thickens and becomes more muscular.">Thunder Foot (Ex)</Pair>
<Pair title="Passive Ability">For the purpose of the overrun combat maneuver, she treats her shaman level as her base attack bonus when calculating her CMB and CMD.</Pair>
<Pair title="At 7th Level">The shaman gains <Link to="/feat/improved_overrun">Improved Overrun</Link> as a bonus feat.</Pair>
<Pair title="At 11th Level">The shaman gains <Link to="/feat/greater_overrun">Greater Overrun</Link> as a bonus feat.</Pair>
<Pair title="Special">The shaman doesn't need to meet the prerequisites of these feats.</Pair>
</Ability>
<h3 id="shamanspirit-mammoth-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["boost"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal appears more primal and prehistoric than an ordinary animal of its kind.">Spirit Animal</Pair>
<Pair title="Ability">It gains a +2 inherent bonus to its Strength score. The spirit animal loses this bonus when it manifests as a megafauna companion from the <em>true spirit</em> ability.</Pair>
</Ability>
<h3 id="shamanspirit-mammoth-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Mammoth spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="powerful-smash-ex" icon={["melee"]}>
<Pair single id="powerful-smash-ex">Powerful Smash (Ex)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can attack an enemy with an unarmed strike as if she had the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat. If the shaman hits a creature in this way, that creature must succeed at a Fortitude save (DC = 10 + half the shaman's class level + her Charisma modifier) or be <Link to="/misc/dazed">dazed</Link> for 1 round.</Pair>
</Ability>
<h3 id="shamanspirit-mammoth-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Mammoth spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="strength-of-the-beast-ex" icon={["boost"]}>
<Pair single id="strength-of-the-beast-ex">Strength of the Beast (Ex)</Pair>
<Pair title="Passive Ability">The shaman gains a +2 enhancement bonus to her Strength score.</Pair>
<Pair title="At 14th Level">If this is her <em>spirit,</em> this improves to +4.</Pair>
<Pair title="At 18th Level">If this is her <em>wandering spirit,</em> this improves to +4.</Pair>
<Pair title="At 20th Level">If this is her <em>spirit,</em> this bonus increases to +6.</Pair>
</Ability>
<h3 id="shamanspirit-mammoth-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Mammoth spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="megafauna-companion-su" icon={["magic"]}>
<Pair single id="megafauna-companion-su">Megafauna Companion (Su)</Pair>
<Pair title="Ability">The shaman's spirit animal transforms into a megafauna <Link to="/sidekick/animal_companion">animal companion</Link>, using the shaman's shaman level as her effective druid level. The shaman must choose an <Link to="/companion/arsinoitherium">arsinoitherium</Link>, <Link to="/companion/baluchitherium">baluchitherium</Link>, <Link to="/companion/brontotherium">brontotherium</Link>, <Link to="/companion/chalicotherium">chalicotherium</Link>, <Link to="/companion/deinotherium">deinotherium</Link>, <Link to="/companion/elasmotherium">elasmotherium</Link>, <Link to="/companion/glyptodon">glyptodon</Link>, <Link to="/companion/mastodon">mastodon</Link>, <Link to="/companion/megaloceros">megaloceros</Link>, <Link to="/companion/megatherium">megatherium</Link>, <Link to="/companion/uintatherium">uintatherium</Link>, or another mammalian megafauna (including most <Link to="/family/dire">dire</Link> animals) that has <Link to="/ability/animal_companion">animal companion statistics</Link>. It retains its Intelligence score and the special abilities it gains from the <em>spirit animal</em> class feature, but it also has the statistics and abilities of an animal companion.</Pair>
<Pair title="Special">If the animal companion is dismissed, lost, or dies, it can be replaced in the same way as a normal spirit animal.</Pair>
</Ability>
<h3 id="shamanspirit-mammoth-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["magic"]}>
<Pair single id="manifestation">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The shaman can transform into any animal listed under the megafauna or elephant heading. This ability works as per <Link to="/spell/beast_shape_iv">beast shape IV</Link>, but the shaman can activate and dismiss the ability as often as she likes and the duration is permanent.</Pair>
</Ability>
</>};
const _nature = {hasJL:true,title: "Nature", jsx: <><div className="jumpList" id="shamanspirit-nature-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-nature-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-nature-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-nature-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-nature-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-nature-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-nature-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-nature-nature">Nature</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 44</Link><br/>A shaman who selects the nature spirit takes on an appearance that reflects the aspect of the natural world she has the closest connection to. A nature shaman from the forest has a green tinge to her skin and hair, with eyes of sparkling emerald and the scent of green leaves and flowers about her. A nature shaman from the tundra is typically alabaster pale, with platinum hair and crystal blue eyes, and her skin always seems strangely cold.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/charm_animal">Charm animal</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/barkskin">Barkskin</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/speak_with_plants">Speak with plants</Link></Pair>
<Pair plain title="4th"><Link to="/spell/grove_of_respite">Grove of respite</Link></Pair>
<Pair plain title="5th"><Link to="/spell/awaken">Awaken</Link></Pair>
<Pair plain title="6th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="7th"><Link to="/spell/creeping_doom">Creeping doom</Link></Pair>
<Pair plain title="8th"><Link to="/spell/animal_shapes">Animal shapes</Link></Pair>
<Pair plain title="9th"><Link to="/spell/world_wave">World wave</Link></Pair>
</Ability>
<h3 id="shamanspirit-nature-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Nature spirit can select from the following hexes.</p>
<Ability id="entangling-curse-su" icon={["lower"]}>
<Pair single id="entangling-curse-su">Entangling Curse (Su)</Pair>
<Pair title="Ability">The shaman <Link to="/spell/entangle">entangles</Link> a creature within 30 feet for a number of rounds equal to the shaman's Charisma modifier (minimum 1). A successful Reflex saving throw negates this effect.</Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="erosion-curse-su" icon={["lower"]}>
<Pair single id="erosion-curse-su">Erosion Curse (Su)</Pair>
<Pair title="Ability">The shaman summons the powers of nature to erode a construct or object within 30 feet. This erosion deals 1d6 points of damage per 2 shaman levels, ignoring hardness and damage reduction. If used against a construct or an object in another creature's possession, the construct or the creature possessing the object can attempt a Reflex saving throw to halve the damage. Once an object or a construct is damaged by this erosion, it cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="friend-to-animals-su" icon={["magic","protect"]}>
<Pair single id="friend-to-animals-su">Friend to Animals (Su)</Pair>
<Pair title="Ability">The shaman can spontaneously cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spells as a <Link to="/class/druid">druid</Link>, "losing" a prepared spell in order to cast any <em>summon nature's ally</em> spell of the same level or lower.</Pair>
<Pair title="Passive Ability">In addition, all animals within 30 feet of the shaman receive a sacred bonus on all saving throws equal to the shaman's Charisma modifier.</Pair>
</Ability>
<Ability id="speak-with-animals-ex" icon={["power"]}>
<Pair single id="speak-with-animals-ex">Speak with Animals (Ex)</Pair>
<Pair title="Ability">The shaman selects one or more specific kinds of animal (eagle, fox, dog, and so on), up to a maximum of 1 + <Link to="/misc/one_third">one-third</Link> of her shaman level. The shaman gains the ability to converse with those types of animal as if she were under the effects of <Link to="/spell/speak_with_animals">speak with animals</Link>.</Pair>
<Pair title="Special">As she increases in level, she can select more kinds of animals.</Pair>
</Ability>
<Ability id="stormwalker-su" icon={["boost"]}>
<Pair single id="stormwalker-su">Stormwalker (Su)</Pair>
<Pair title="Ability">The shaman can move through nonmagical fog, rain, mist, snow, and other <Link to="/rule/weather">environmental effects</Link> without penalty. She is never slowed by such effects, and she doesn't need to attempt Acrobatics skill checks to move across such surfaces. She can also move through magical environmental effects that she created.</Pair>
<Pair title="At 10th Level">The shaman can see twice as far as normal through environmental effects, whether or not they are magical in nature.</Pair>
</Ability>
<h3 id="shamanspirit-nature-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["boost"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal looks feral, and appears to be in peak physical form.">Spirit Animal</Pair>
<Pair title="Ability">The animal can move through any sort of undergrowth or natural <Link to="/rule/difficult_terrain">difficult terrain</Link> at its normal speed without taking damage or suffering any other impairment. If the animal has a fly speed, it can ignore the penalty on <Link to="/skill/fly">Fly</Link> skill checks for winds up to windstorm strength.</Pair>
</Ability>
<h3 id="shamanspirit-nature-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Nature spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="storm-burst-su" icon={["lower"]}>
<Pair single id="storm-burst-su">Storm Burst (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman causes a small storm of swirling wind and rain to form around one creature within 30 feet. This storm causes the target to treat all foes as if they had <Link to="/rule/concealment">concealment</Link>, suffering a 20% miss chance for a number of rounds equal to 1 + one-fourth of her shaman level.</Pair>
<Pair title="At 11th Level">Any weapon she wields is treated as a <Link to="/magic-enh/thundering">thundering</Link> weapon.</Pair>
</Ability>
<h3 id="shamanspirit-nature-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Nature spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="spirit-of-nature-su" icon={["def"]}>
<Pair single id="spirit-of-nature-su">Spirit of Nature (Su)</Pair>
<Pair title="Passive Ability">Whenever the shaman is reduced to below 0 hit points, she automatically stabilizes and gains <Link to="/umr/fast_healing">fast healing</Link> 1 for 1d4 rounds.</Pair>
<Pair title="At 15th Level">This increases to fast healing 3.</Pair>
</Ability>
<h3 id="shamanspirit-nature-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Nature spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="companion-animal-su" icon={["boost"]}>
<Pair single id="companion-animal-su">Companion Animal (Su)</Pair>
<Pair title="Ability">The shaman's spirit animal takes the form of an <Link to="/sidekick/animal_companion">animal companion</Link> of her choice, using her shaman level as her effective druid level. The animal retains all the special abilities and the Intelligence score of the spirit animal, but also has the statistics and abilities of an animal companion. If the animal is dismissed, is lost, or dies, it can be replaced in the same way as a normal spirit animal.</Pair>
</Ability>
<h3 id="shamanspirit-nature-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["magic","aid"]}>
<Pair single id="manifestation" flavor="The shaman becomes a spirit of nature.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability"><p>Once per day, she can surround herself with an organic cocoon of silk as a <strong className="hl">full-round action</strong>. While enclosed in the cocoon, she's considered <Link to="/misc/helpless">helpless</Link>. Eight hours later, she emerges, having changed her type to plant, animal, or humanoid, and having gained superficial physical characteristics of the chosen type as appropriate. She must choose a type that is different from her current type.</p>
<p>This effect change doesn't alter her Hit Dice, hit points, saving throws, skill ranks, class skills, or proficiencies. The effect is permanent, until the shaman chooses to transform again.</p>
</Pair>
<Pair title="Special">Each time the transformation is made, the shaman is cleansed of all poisons or diseases, restored to full hit points, and healed of all ability damage.</Pair>
</Ability>
</>};
const _restoration = {hasJL:true,title: "Restoration", jsx: <><div className="jumpList" id="shamanspirit-restoration-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-restoration-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-restoration-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-restoration-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-restoration-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-restoration-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-restoration-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-restoration-restoration-life">Restoration (Life)</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 41</Link>, <Link to="/source/healers_handbook">Healer's Handbook pg. 27</Link></p>
<p><strong className="hl">Associated Spirit:</strong> <Link to="/shamanspirit/life">Life</Link></p>
<p>A shaman who selects the life spirit appears more vibrant than most mortals. Her skin seems to glow, and her teeth are a pearly white. When she calls upon one of this spirit's abilities, her eyes and hair shimmer in the light.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/remove_sickness">Remove sickness</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/lesser_restoration">Lesser restoration</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/neutralize_poison">Neutralize poison</Link></Pair>
<Pair plain title="4th"><Link to="/spell/restoration">Restoration</Link></Pair>
<Pair plain title="5th"><Link to="/spell/breath_of_life">Breath of life</Link></Pair>
<Pair plain title="6th"><Link to="/spell/heal">Heal</Link></Pair>
<Pair plain title="7th"><Link to="/spell/greater_restoration">Greater restoration</Link></Pair>
<Pair plain title="8th"><Link to="/spell/mass_heal">Mass heal</Link></Pair>
<Pair plain title="9th"><Link to="/spell/true_resurrection">True resurrection</Link></Pair>
</Ability>
<h3 id="shamanspirit-restoration-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Restoration spirit specialization can select from the following hexes.</p>
<Ability id="enhanced-cures-su" icon={["boost"]}>
<Pair single id="enhanced-cures-su">Enhanced Cures (Su)</Pair>
<Pair title="Passive Ability">When the shaman casts a <Link to="/main/cure_spells">cure spell</Link>, the maximum number of hit points healed is based on her shaman level, not the limit imposed by the spell. For example an 11th-level shaman with this hex can cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> to heal 1d8+11 hit points instead of the normal 1d8+5 maximum.</Pair>
</Ability>
<Ability id="life-link-su" icon={["aid","protect"]}>
<Pair single id="life-link-su">Life Link (Su)</Pair>
<Pair title="Ability">The shaman creates a bond between herself and another creature within 30 feet. Each round at the start of the shaman's turn, if the bonded creature is wounded for 5 or more hit points below its maximum hit points, it heals 5 hit points and the shaman takes 5 points of damage.</Pair>
<Pair title="Special">The shaman can have one bond active per shaman level. The bond continues until the bonded creature dies, the shaman dies, the distance between her and the bonded creature exceeds 100 feet, or the shaman ends it as an <strong className="hl">immediate action</strong>. If the shaman has multiple bonds active, she can end as many as she wants with the same immediate action.</Pair>
</Ability>
<Ability id="life-sight-ex" icon={["power"]}>
<Pair single id="life-sight-ex" flavor="The shaman can see the states of life, death, and general health of those around her.">Life Sight (Ex)</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Ability">When she uses this ability, she can tell whether or not creatures within 30 feet of her that she can see are living, wounded, dying, or dead. She can also tell if those creatures are confused, disabled, diseased, nauseated, poisoned, sickened or staggered.</Pair>
<Pair title="At 12th Level">When using <em>life sight</em> she is able to sense all nearby living creatures; this functions similar to <Link to="/umr/blindsight">blindsight</Link>, but only for living creatures within 30 feet of her.</Pair>
</Ability>
<Ability id="shell-of-succor-su" icon={["protect"]}>
<Pair single id="shell-of-succor-su">Shell of Succor (Su)</Pair>
<Pair title="Usage">1 + Charisma modifier times/day</Pair>
<Pair title="Ability">The shaman surrounds one touched creature with a ward of succoring energy, granting the target a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her Wisdom bonus + an additional 1d6 temporary hit points per 2 shaman levels she has (maximum 10d6). These temporary hit points last a number of minutes equal to the shaman's level. The target always loses these temporary hit points first, even before other temporary hit points (including those from a <Link to="/class/kineticist">kineticist's</Link> <Link to="/kinetic/force_ward">force ward</Link> defense wild talent).</Pair>
<Pair title="Special">If an attack deals fewer points of damage than the target's temporary hit points from this <em>shell of succor</em> ability, it still reduces those temporary hit points but otherwise counts as a miss for the purpose of abilities that trigger on a hit or a miss.</Pair>
</Ability>
<Ability id="spirit-boost-su" icon={["aid"]}>
<Pair single id="spirit-boost-su">Spirit Boost (Su)</Pair>
<Pair title="Passive Ability">Whenever the shaman casts a healing spell that heals a target up to its maximum hit points, any excess hit points persist for 1 round per shaman level as temporary hit points (up to a maximum number of temporary hit points equal to the shaman's level).</Pair>
</Ability>
<h3 id="shamanspirit-restoration-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal appears to be a beautiful and very healthy version of its species, and seems especially vibrant and full of life.">Spirit Animal</Pair>
<Pair title="Ability">Her animal companion gains <Link to="/umr/fast_healing">fast healing</Link> 1; if the spirit animal already has fast healing, instead its fast healing increases by 1.</Pair>
</Ability>
<h3 id="shamanspirit-restoration-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Restoration spirit specialization as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="channel-su" icon={["power","aura"]}>
<Pair single id="channel-su">Channel (Su)</Pair>
<Pair title="Usage">1 + Charisma modifier times/day</Pair>
<Pair title="Ability">The shaman can <Link to="/ability/channel_positive_energy">channel positive energy</Link> like a cleric, using her shaman level as her effective cleric level when determining the amount of damage healed (or dealt to undead) and the DC.</Pair>
</Ability>
<h3 id="shamanspirit-restoration-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Restoration spirit specialization as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="healers-touch-su" icon={["boost","protect"]}>
<Pair single id="healers-touch-su">Healer's Touch (Su)</Pair>
<Pair title="Passive Ability">The shaman gains a +4 bonus on Heal checks.</Pair>
<Pair title="Standard Action">The shaman can move up to half her speed and touch up to six dying creatures. Each creature is automatically <Link to="/misc/stabilize">stabilized</Link> without the need of a Heal check.</Pair>
</Ability>
<h3 id="shamanspirit-restoration-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Restoration spirit specialization as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="spirit-of-life-su" icon={["magic"]}>
<Pair single id="spirit-of-life-su" flavor="The shaman's spirit animal transforms into a conduit of life energy able to store succoring magic that can keep the shaman's allies safe.">Spirit of Life (Su)</Pair>
<Pair title="Ability">The spirit animal can cast <Link to="/spell/stabilize">stabilize</Link> as a spell-like ability at will using the shaman's level as the spell's caster level.</Pair>
<Pair title="Swift Action"><p>In addition, the shaman can transfer any <Link to="/main/cure_spells">cure spell</Link> (a spell with "cure" in its name) she casts to her spirit animal, provided that the spirit animal is within 30 feet of her. This functions like <Link to="/spell/imbue_with_spell_ability">imbue with spell ability</Link>, except a spirit animal can be imbued with a <em>cure</em> spell of any spell level that its master can cast regardless of the spirit animal's Intelligence or Wisdom score. The spirit animal can hold the spell indefinitely, but the shaman cannot prepare a new spell in the imbued spell's spell slot until her spirit animal uses the spell or it is slain, or until she dismisses the <em>imbue with spell ability</em> effect (a <strong className="hl">free action</strong>).</p>
<p>A spirit animal can be imbued with only one spell at a time in this manner. If the spirit animal is slain while it is imbued with a <em>cure</em> spell, that spell is lost.</p>
</Pair>
</Ability>
<h3 id="shamanspirit-restoration-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def"]}>
<Pair single id="manifestation" flavor="The shaman becomes a perfect channel for life energy.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She gains immunity to bleed, death attacks, and negative energy, as well as to the exhausted, fatigued, nauseated, and sickened conditions. Ability damage and drain cannot reduce her to below 1 in any ability score. She automatically succeeds at saving throws against massive damage. When she is reduced to below 0 hit points, she doesn't die until her negative hit point total exceeds double her Constitution score.</Pair>
</Ability>
</>};
const _slums = {hasJL:true,title: "Slums", jsx: <><div className="jumpList" id="shamanspirit-slums-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-slums-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-slums-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-slums-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-slums-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-slums-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-slums-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-slums-slums">Slums</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 21</Link><br/>A shaman who selects the slums spirit gains the city's alleys and avenues as steadfast allies. The rats in the gutter, the torches along the walls, the coins that flow through the market are all a part of her and serve her whim.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/charm_person">Charm person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/summon_swarm">Summon swarm</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/hold_person">Hold person</Link></Pair>
<Pair plain title="4th"><Link to="/spell/confusion">Confusion</Link></Pair>
<Pair plain title="5th"><Link to="/spell/wall_of_stone">Wall of stone</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mislead">Mislead</Link></Pair>
<Pair plain title="7th"><Link to="/spell/mass_hold_person">Mass hold person</Link></Pair>
<Pair plain title="8th"><Link to="/spell/maze">Maze</Link></Pair>
<Pair plain title="9th"><Link to="/spell/imprisonment">Imprisonment</Link></Pair>
</Ability>
<h3 id="shamanspirit-slums-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Slums spirit can select from the following hexes.</p>
<Ability id="accident-su" icon={["lower"]}>
<Pair single id="accident-su">Accident (Su)</Pair>
<Pair title="Ability">The shaman causes a target within 30 feet to stumble and fall. The shaman attempts a caster level check with a DC equal to the target's CMD against <Link to="/rule/trip">trip</Link> attempts. On a successful check, the target falls <Link to="/rule/prone">prone</Link> and takes 1d6 points of damage. If the target is adjacent to a pit or similar drop-off, he must also succeed at a Reflex save (with a DC equal to the shaman's caster level check) or fall into the pit. Observers must succeed at a <Link to="/skill/perception">Perception</Link> or <Link to="/skill/sense_motive">Sense Motive</Link> check with a DC equal to the shaman's caster level check to identify her as the source of the accident.</Pair>
</Ability>
<Ability id="bad-penny-su" icon={["lower"]}>
<Pair single id="bad-penny-su">Bad Penny (Su)</Pair>
<Pair title="Standard Action">The shaman can curse a coin. The next bearer of the cursed coin takes a -2 penalty on all saving throws and skill checks as long he has the coin on his person. Once the coin leaves his person, the curse ends and the coin becomes a mundane piece of tender again.</Pair>
<Pair title="At 8th Level">The penalty becomes -4.</Pair>
<Pair title="Special">If the shaman curses a new coin, the previous curse ends. This is a curse effect.</Pair>
</Ability>
<Ability id="city-spirit-su" icon={["boost"]}>
<Pair single id="city-spirit-su">City Spirit (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">The shaman channels the city's spirit through herself, gaining a +4 bonus on all Dexterity- and Wisdom-based skill checks.</Pair>
</Ability>
<Ability id="ward-of-the-city-su" icon={["protect"]}>
<Pair single id="ward-of-the-city-su">Ward of the City (Su)</Pair>
<Pair title="Ability">The spirit of the city shrouds one creature the shaman touches from the hazards of the slums. The warded creature gains a +5 bonus on saves against disease and poison, and a +25% bonus on percentage chances to negate critical hits and sneak attacks. (This stacks with effects such as <Link to="/magic-enh/fortification">fortification</Link>, or abilities that grant a creature with no chance to negate critical hits a flat 25% chance.)</Pair>
<Pair title="At 8th Level">The bonuses increase to +7 and the percentage change increases to 35%.</Pair>
<Pair title="At 16th Level">The bonuses become +9 and the percentage chance becomes 45%.</Pair>
<Pair title="Special">Each time the <em>ward</em> is used (whether the roll is successful or not), the bonuses are reduced by 1 and 5%, respectively. The <em>ward</em> ends when the bonuses are reduced to 0, when the shaman wards a new creature, or after 24 hours, whichever comes first. A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<h3 id="shamanspirit-slums-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["boost"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal looks like a leaner version of its species, with hungry eyes and a wiry frame.">Spirit Animal</Pair>
<Pair title="Passive Ability">It gains a +4 bonus on initiative checks.</Pair>
</Ability>
<h3 id="shamanspirit-slums-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Slums spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="doors-to-everywhere-ex" icon={["magic"]}>
<Pair single id="doors-to-everywhere-ex">Doors to Everywhere (Ex)</Pair>
<Pair title="Usage">3 times/day + 1 per eight shaman levels beyond 4th<ByLevelPop levels={[[1,3],[12,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">The shaman can step through any door and instantly exit through another distant doorway, as per <Link to="/spell/jesters_jaunt">jester's jaunt</Link>.</Pair>
<Pair title="At 9th Level">The shaman can use this ability as per <Link to="/spell/dimension_door">dimension door</Link>.</Pair>
<Pair title="At 14th Level">The shaman can use this ability as per <Link to="/spell/tree_stride">tree stride</Link> (treating all doors as generic coniferous trees).</Pair>
<Pair title="Special">Regardless of what spell this functions as, it can transport only you, and both your departure and arrival spaces must be adjacent to a door or similar opening.</Pair>
</Ability>
<h3 id="shamanspirit-slums-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Slums spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="citys-shroud-su" icon={["def"]}>
<Pair single id="citys-shroud-su" flavor="When in an urban environment, the shaman blends into the streets around her, making her difficult to pin down.">City's Shroud (Su)</Pair>
<Pair title="Passive Ability">She gains the <Link to="/ability/evasion">evasion</Link> and <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> class features.</Pair>
</Ability>
<h3 id="shamanspirit-slums-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Slums spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="paragon-of-the-city-su" icon={["power"]}>
<Pair single id="paragon-of-the-city-su">Paragon of the City (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman assumes a spirit-infused paragon form that makes her a lethal stalker of the alleys and shadows. She gains the ability to make <Link to="/ability/sneak_attack">sneak attacks</Link> as a <Link to="/class/rogue">rogue</Link> of her shaman level for 1 minute or until dismissed.</Pair>
</Ability>
<h3 id="shamanspirit-slums-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def"]}>
<Pair single id="manifestation" flavor="The shaman becomes a spirit of the slums.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She is immune to all diseases and poisons. When in an urban environment, she gains a +4 insight bonus to her AC and on Reflex saves.</Pair>
</Ability>
</>};
const _stone = {hasJL:true,title: "Stone", jsx: <><div className="jumpList" id="shamanspirit-stone-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-stone-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-stone-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-stone-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-stone-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-stone-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-stone-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-stone-stone">Stone</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 45</Link><br/>The skin of a shaman who selects the stone spirit takes on a rough, stony appearance. When the shaman calls upon one of this spirit's abilities, tiny gemstones underneath her flesh pulse with a bright glow, like phosphorescent geodes glittering in a dark cave.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/magic_stone">Magic stone</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/stone_call">Stone call</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/meld_into_stone">Meld into stone</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wall_of_stone">Wall of stone</Link></Pair>
<Pair plain title="5th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="6th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="7th"><Link to="/spell/statue">Statue</Link></Pair>
<Pair plain title="8th"><Link to="/spell/repel_metal_or_stone">Repel metal or stone</Link></Pair>
<Pair plain title="9th"><Link to="/spell/clashing_rocks">Clashing rocks</Link></Pair>
</Ability>
<h3 id="shamanspirit-stone-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Stone spirit can select from the following hexes.</p>
<Ability id="crystal-sight-ex" icon={["power"]}>
<Pair single id="crystal-sight-ex">Crystal Sight (Ex)</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Ability">The shaman sees through stone, earth, or sand as easily as if it were transparent crystal. Her gaze can penetrate a number of feet equal to her shaman level (or if seeing through metal, a number of inches equal to her shaman level).</Pair>
</Ability>
<Ability id="lodestone-su" icon={["lower"]}>
<Pair single id="lodestone-su">Lodestone (Su)</Pair>
<Pair title="Ability">The shaman causes one creature within 30 feet to become heavy and lethargic. The creature is treated as if it were <Link to="/rule/carrying_capacity">carrying a medium load</Link>. If the creature is already carrying a medium load, it is instead treated as if it were carrying a heavy load. If the creature is carrying a heavy load, its maximum Dexterity bonus to AC is reduced to +0, it takes a -9 armor check penalty, and its movement is reduced to 5 feet.</Pair>
<Pair title="Special">The effect lasts for a number of rounds equal to the shaman's level. A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="metal-curse-su" icon={["lower"]}>
<Pair single id="metal-curse-su">Metal Curse (Su)</Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to become slightly magnetic until the end of the shaman's next turn. Whenever the creature is attacked with a melee or ranged weapon constructed primarily of metal, it takes a -2 penalty to AC.</Pair>
<Pair title="At 8th Level">The penalty becomes -4 and it lasts for two rounds.</Pair>
<Pair title="At 16th Level">The penalty increases to -6 and lasts for three rounds</Pair>
<Pair title="Special">Once affected, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="stone-stability-ex" icon={["def","power"]}>
<Pair single id="stone-stability-ex">Stone Stability (Ex)</Pair>
<Pair title="Passive Ability">The shaman receives a +4 bonus to her CMD when resisting bull rush or trip attempts as long as she is standing on the ground.</Pair>
<Pair title="At 5th Level">The shaman receives <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat.</Pair>
<Pair title="At 10th Level">The shaman receives <Link to="/feat/greater_trip">Greater Trip</Link> as a bonus feat.</Pair>
<Pair title="Special">The shaman does not need to meet the prerequisites of these feats.</Pair>
</Ability>
<Ability id="ward-of-stone-su" icon={["def","protect"]}>
<Pair single id="ward-of-stone-su">Ward of Stone (Su)</Pair>
<Pair title="Ability">The shaman touches a willing creature (including herself) and grants a <em>ward of stone.</em> The next time the warded creature is struck with a melee attack, it is treated as if it has DR 5/adamantine. This <em>ward</em> lasts for 1 minute, after which it fades away if not already expended.</Pair>
<Pair title="At 8th Level">The <em>ward</em> persists through two attacks.</Pair>
<Pair title="At 16th Level">The <em>ward</em> now lasts through three attacks.</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<h3 id="shamanspirit-stone-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal looks as though it's made out of earth and stone, with tiny gemstones embedded in its flesh.">Spirit Animal</Pair>
<Pair title="Passive Ability">The animal gains DR 5/adamantine.</Pair>
</Ability>
<h3 id="shamanspirit-stone-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Stone spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="touch-of-acid-su" icon={["touch"]}>
<Pair single id="touch-of-acid-su">Touch of Acid (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can make a melee touch attack that deals an amount of acid damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level.</Pair>
<Pair title="At 11th Level">Any weapon she wields is treated as a <Link to="/magic-enh/corrosive">corrosive</Link> weapon.</Pair>
</Ability>
<h3 id="shamanspirit-stone-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Stone spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="body-of-earth-su" icon={["def","aura"]}>
<Pair single id="body-of-earth-su">Body of Earth (Su)</Pair>
<Pair title="Passive Ability">The shaman gains DR/adamantine equal to <Link to="/misc/one_fourth">one-fourth</Link> of her shaman level, minimum 2.</Pair>
<Pair title="Standard Action"><p>In addition, she can cause jagged pieces of stone to explode from her body in a 10-foot-radius <Link to="/misc/burst">burst</Link>. This deals 1d6 points of piercing damage per 2 shaman levels she possesses. A successful Reflex saving throw halves this damage.</p>
<p>The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.</p>
</Pair>
</Ability>
<h3 id="shamanspirit-stone-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Stone spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="elemental-form-su" icon={["magic"]}>
<Pair single id="elemental-form-su">Elemental Form (Su)</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Standard Action">The shaman assumes the form of a Huge (or smaller) earth elemental, as <Link to="/spell/elemental_body_iv">elemental body IV</Link> with a duration of 1 hour per level.</Pair>
</Ability>
<h3 id="shamanspirit-stone-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","power"]}>
<Pair single id="manifestation" flavor="The shaman becomes a being of acid and earth.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The shaman gains acid resistance 30.</Pair>
<Pair title="Ability">She can also apply any one of the following feats to any acid or earth spell she casts without increasing the spell's level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. She doesn't need to possess these feats to use this ability.</Pair>
</Ability>
</>};
const _tribe = {hasJL:true,title: "Tribe", jsx: <><div className="jumpList" id="shamanspirit-tribe-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-tribe-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-tribe-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-tribe-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-tribe-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-tribe-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-tribe-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-tribe-tribe">Tribe</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 24</Link><br/>A shaman who selects the tribe spirit strives to protect her allies, whether they be a traditional tribal unit or a chosen group of adventuring companions.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/shield_other">Shield other</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/create_food_and_water">Create food and water</Link></Pair>
<Pair plain title="4th"><Link to="/spell/spiritual_ally">Spiritual ally</Link></Pair>
<Pair plain title="5th"><Link to="/spell/life_bubble">Life bubble</Link></Pair>
<Pair plain title="6th"><Link to="/spell/battlemind_link">Battlemind link</Link></Pair>
<Pair plain title="7th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="8th"><Link to="/spell/discern_location">Discern location</Link></Pair>
<Pair plain title="9th"><Link to="/spell/mass_heal">Mass heal</Link></Pair>
</Ability>
<h3 id="shamanspirit-tribe-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Tribe spirit can select from the following hexes.</p>
<Ability id="curse-of-faltering-su" icon={["roll","lower"]}>
<Pair single id="curse-of-faltering-su">Curse of Faltering (Su)</Pair>
<Pair title="Immediate Action">When an enemy within 30 feet threatens a critical hit, the shaman can force the creature to reroll its original attack roll with a penalty equal to the shaman's Charisma modifier. The target can attempt a Will save to negate this ability.</Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours. This is a curse effect.</Pair>
</Ability>
<Ability id="curse-of-isolation-ex" icon={["lower"]}>
<Pair single id="curse-of-isolation-ex">Curse of Isolation (Ex)</Pair>
<Pair title="Ability">The shaman makes an enemy within 30 feet keenly feel its status outside the tribe. For a number of rounds equal to the shaman's level, the target gains no benefit from <Link to="/rule/flanking">flanking</Link> or the <Link to="/rule/aid_another_2">aid another</Link> action, and it doesn't benefit from morale bonuses. The target can attempt a Will save to negate this ability.</Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours. This is a curse effect.</Pair>
</Ability>
<Ability id="steadfast-example-su" icon={["protect"]}>
<Pair single id="steadfast-example-su">Steadfast Example (Su)</Pair>
<Pair title="Ability">The shaman touches a willing creature and bolsters its mental and emotional defenses. The next time the target attempts a Will saving throw, the subject can use the shaman's Will saving throw bonus instead of his own.</Pair>
<Pair title="Special">The shaman can have only one creature under the effect of this hex at a time, and a creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="threatening-coordination-hex-su" icon={["lower"]}>
<Pair single id="threatening-coordination-hex-su">Threatening Coordination Hex (Su)</Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to view the shaman's allies as obstacles. The target treats squares adjacent to the shaman's allies as <Link to="/rule/difficult_terrain">difficult terrain</Link> for a number of rounds equal to the shaman's level, or for 1 round if the target succeeds at a Will saving throw.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature affected by this hex cannot be the target of it again for 24 hours.</Pair>
</Ability>
<Ability id="touch-of-succor-su" icon={["aid"]}>
<Pair single id="touch-of-succor-su">Touch of Succor (Su)</Pair>
<Pair title="Usage">1 time/day per shaman level</Pair>
<Pair title="Standard Action">The shaman can touch a willing creature to remove one of the following conditions: fatigued, shaken, or sickened.</Pair>
<Pair title="At 8th Level">She adds confused and frightened to the list of conditions she can remove.</Pair>
<Pair title="At 12th Level">She also adds dazed, nauseated, and panicked.</Pair>
</Ability>
<h3 id="shamanspirit-tribe-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["boost"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal has colorations or markings that resemble a totem or important symbol for the shaman's tribe.">Spirit Animal</Pair>
<Pair title="Ability">When the spirit animal successfully performs the aid another action, the bonus it provides increases by 1.</Pair>
</Ability>
<h3 id="shamanspirit-tribe-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Tribe spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="tribal-cooperation-su" icon={["power"]}>
<Pair single id="tribal-cooperation-su" flavor={<>The shaman gains a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. She must meet the feat's prerequisites.</>}>Tribal Cooperation (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can grant one of her teamwork feats to all allies within 30 feet who can see and hear her. Allies retain the use of this bonus feat for a number of rounds equal to 3 + <Link to="/misc/half">half</Link> of her shaman level. Allies do not need to meet the prerequisites of this bonus feat.</Pair>
</Ability>
<h3 id="shamanspirit-tribe-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Tribe spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="tribal-bond-sp" icon={["power","magic"]}>
<Pair single id="tribal-bond-sp" flavor="The shaman and her tribe share a transcendent bond.">Tribal Bond (Sp)</Pair>
<Pair title="Ability">Once per day when she communes with her spirit animal to regain spells, the shaman can select a number of creatures equal to half her shaman level to serve as her honorary tribe. These creatures can constantly communicate with each other, as <Link to="/spell/telepathic_bond">telepathic bond</Link>.</Pair>
</Ability>
<h3 id="shamanspirit-tribe-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Tribe spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="guardian-of-the-tribe-su" icon={["boost","power"]}>
<Pair single id="guardian-of-the-tribe-su">Guardian of the Tribe (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Ability">The shaman can cast a harmless spell with a range of touch on a member of her <em>tribal bond</em> as long as that creature is within 30 feet.</Pair>
<Pair title="Passive Ability">In addition, she is constantly aware of the condition of all members of her <em>tribal bond</em> ability, as <Link to="/spell/status">status</Link>.</Pair>
</Ability>
<h3 id="shamanspirit-tribe-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","magic","boost"]}>
<Pair single id="manifestation" flavor="The shaman embodies the strength and unity of her tribe.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She gains a bonus on all of her saving throws equal to her Charisma modifier and becomes immune to <Link to="/spelldef/compulsion">compulsion</Link> spells and spell-like abilities.</Pair>
<Pair title="Standard Action">Once per day, she can attempt to revive a creature connected to her by her <em>tribal bond</em> ability who has died within 1 round as <Link to="/spell/breath_of_life">breath of life</Link>, except that the spell can be cast at any range as long as the target is on the same plane, and the target regains a number of hit points equal to 10 &times; the shaman's level (maximum 200).</Pair>
</Ability>
</>};
const _waves = {hasJL:true,title: "Waves", jsx: <><div className="jumpList" id="shamanspirit-waves-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-waves-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-waves-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-waves-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-waves-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-waves-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-waves-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-waves-waves">Waves</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 45</Link><br/>A shaman who selects the waves spirit has a fluid grace that exhibits itself whenever she moves. When she calls upon one of this spirit's abilities, floating orbs dance about her, sublimating between icy crystals, misty vapors, and globules of water.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/hydraulic_push">Hydraulic push</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/water_breathing">Water breathing</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wall_of_ice">Wall of ice</Link></Pair>
<Pair plain title="5th"><Link to="/spell/geyser">Geyser</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fluid_form">Fluid form</Link></Pair>
<Pair plain title="7th"><Link to="/spell/vortex">Vortex</Link></Pair>
<Pair plain title="8th"><Link to="/spell/seamantle">Seamantle</Link></Pair>
<Pair plain title="9th"><Link to="/spell/tsunami">Tsunami</Link></Pair>
</Ability>
<h3 id="shamanspirit-waves-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Waves spirit can select from the following hexes.</p>
<Ability id="beckoning-chill-su" icon={["lower"]}>
<Pair single id="beckoning-chill-su">Beckoning Chill (Su)</Pair>
<Pair title="Ability">The shaman causes one creature within 30 feet to become more susceptible to the sapping powers of cold for 1 minute. When a creature takes cold damage while under this effect, it is <Link to="/rule/entangled">entangled</Link> for 1 round. If the creature takes cold damage while already entangled by <em>beckoning chill,</em> the duration of the entangled condition increases by 1 round.</Pair>
<Pair title="Special">Once affected, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="crashing-waves-su" icon={["boost"]}>
<Pair single id="crashing-waves-su" flavor="The force of a waves shaman's water spells can bring even the mightiest of foes to the ground.">Crashing Waves (Su)</Pair>
<Pair title="Ability">When the shaman casts a spell with the water descriptor, she does so at 1 caster level higher. If that spell deals damage, the target must succeed at a Fortitude saving throw or be knocked <Link to="/rule/prone">prone</Link>.</Pair>
<Pair title="At 8th Level">The shaman casts water spells at 2 caster levels higher.</Pair>
<Pair title="At 16th Level">Her ability to knock creatures prone extends to any spell that deals damage.</Pair>
</Ability>
<Ability id="fluid-magic-su" icon={["magic"]}>
<Pair single id="fluid-magic-su" flavor="The shaman's magic is not constrained by the reservoirs of magic that hold others back.">Fluid Magic (Su)</Pair>
<Pair title="Ability">She is able to prepare her spirit magic spells in her regular spell slots. If the shaman changes her <em>wandering spirit,</em> any prepared spirit magic spell belonging to that spirit becomes an open spell slot.</Pair>
</Ability>
<Ability id="mists-shroud-su" icon={["protect","def"]}>
<Pair single id="mists-shroud-su">Mist's Shroud (Su)</Pair>
<Pair title="Ability">The shaman touches a willing creature (including herself) and enshrouds that creature in mist. This grants the creature <Link to="/rule/concealment">concealment</Link> as the <Link to="/spell/blur">blur</Link> spell. The mist dissipates after it causes an attack to miss because of concealment or after 1 minute, whichever comes first.</Pair>
<Pair title="At 8th Level">The mist lasts for one additional attack.</Pair>
<Pair title="At 16th Level">The mist now fades after thwarting three attacks.</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="water-sight-su" icon={["power"]}>
<Pair single id="water-sight-su">Water Sight (Su)</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Ability">The shaman sees through fog and mist without penalty as long as there is enough light to otherwise allow her to see normally.</Pair>
<Pair title="At 7th Level">She can use can use <Link to="/spell/scrying">scrying</Link>, using any calm pool of water that's at least 1 foot in diameter as the sole focus.</Pair>
<Pair title="At 15th Level">This functions as <Link to="/spell/greater_scrying">greater scrying</Link>.</Pair>
</Ability>
<h3 id="shamanspirit-waves-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["power"]}>
<Pair single id="spirit-animal" flavor="The skin of the shaman's spirit animal constantly distorts, much as a pond's surface ripples when drops of water fall gently into it.">Spirit Animal</Pair>
<Pair title="Ability">The animal gains <Link to="/feat/mobility">Mobility</Link> as a bonus feat. The animal doesn't need to meet the prerequisites for this feat. In addition, the animal can breathe underwater.</Pair>
</Ability>
<h3 id="shamanspirit-waves-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Waves spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="wave-strike-su" icon={["touch"]}>
<Pair single id="wave-strike-su">Wave Strike (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can perform a melee touch attack that drenches a creature and pushes it away. The opponent takes an amount of nonlethal damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level and is pushed 5 feet directly away from the shaman. This movement does not provoke attacks of opportunity.</Pair>
<Pair title="At 11th Level">Any melee weapon she wields is treated as if it had the <Link to="/magic-enh/quenching">quenching</Link> weapon special ability.</Pair>
</Ability>
<h3 id="shamanspirit-waves-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Waves spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="fluid-mastery-su" icon={["power","cone"]}>
<Pair single id="fluid-mastery-su">Fluid Mastery (Su)</Pair>
<Pair title="Ability">The shaman gains a swim speed equal to her base land speed, as well as the ability to breathe underwater.</Pair>
<Pair title="Standard Action"><p>In addition, she can unleash a torrent of ice and water from her hands in a 15-foot cone. This torrent deals 1d4 points of cold damage per 2 shaman level she possesses, and pushes affected creatures back 5 feet directly away from the shaman. A successful Reflex saving throw halves the damage and negates the push.</p>
<p>The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.</p>
</Pair>
</Ability>
<h3 id="shamanspirit-waves-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Waves spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="elemental-form-su" icon={["magic"]}>
<Pair single id="elemental-form-su">Elemental Form (Su)</Pair>
<Pair title="Standard Action">The shaman assumes the form of a Huge (or smaller) water elemental, as <Link to="/spell/elemental_body_iv">elemental body IV</Link> with a duration of 1 hour per level. The shaman can use this ability once per day.</Pair>
</Ability>
<h3 id="shamanspirit-waves-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","boost"]}>
<Pair single id="manifestation" flavor="The shaman becomes a master of cold and water.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The shaman gains cold resistance 30.</Pair>
<Pair title="Ability">She can also apply any one of the following feats to any cold or water spell she casts without increasing the spell's level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. She doesn't need to possess these feats to use this ability.</Pair>
</Ability>
</>};
const _wind = {hasJL:true,title: "Wind", jsx: <><div className="jumpList" id="shamanspirit-wind-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-wind-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-wind-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-wind-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-wind-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-wind-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-wind-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-wind-wind">Wind</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 46</Link><br/>A shaman who selects the wind spirit appears windswept, and her movements seem lithe and carefree.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/alter_winds">Alter winds</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/gust_of_wind">Gust of wind</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/cloak_of_winds">Cloak of winds</Link></Pair>
<Pair plain title="4th"><Link to="/spell/river_of_wind">River of wind</Link></Pair>
<Pair plain title="5th"><Link to="/spell/control_winds">Control winds</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sirocco">Sirocco</Link></Pair>
<Pair plain title="7th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="8th"><Link to="/spell/whirlwind">Whirlwind</Link></Pair>
<Pair plain title="9th"><Link to="/spell/winds_of_vengeance">Winds of vengeance</Link></Pair>
</Ability>
<h3 id="shamanspirit-wind-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Wind spirit can select from the following hexes.</p>
<Ability id="air-barrier-su" icon={["def"]}>
<Pair single id="air-barrier-su">Air Barrier (Su)</Pair>
<Pair title="Usage">1 hour/day per shaman level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">The shaman creates an invisible shell of air that grants her a +4 armor bonus to AC.</Pair>
<Pair title="At 7th Level">The armor bonus becomes +6.</Pair>
<Pair title="At 11th Level">The armor bonus increases to +8.</Pair>
<Pair title="At 13th Level">This barrier causes incoming arrows, rays, and other ranged attacks requiring an attack roll against her to suffer a 50% miss chance.</Pair>
<Pair title="At 15th Level">The armor bonus becomes +10.</Pair>
<Pair title="At 19th Level">The armor bonus increases to +12.</Pair>
</Ability>
<Ability id="sparking-aura-su" icon={["lower"]}>
<Pair single id="sparking-aura-su">Sparking Aura (Su)</Pair>
<Pair title="Ability"><p>The shaman causes a creature within 30 feet to spark and shimmer with electrical energy. Though this does not harm the creature, it does cause the creature to emit light like a <Link to="/eq-misc/torch">torch</Link>, preventing it from gaining any benefit from <Link to="/rule/concealment">concealment</Link> or invisibility.</p>
<p>Furthermore, while the aura lasts, whenever the target is hit with a metal melee weapon, it also takes an amount of electricity damage equal to the shaman's Charisma modifier.</p>
</Pair>
<Pair title="Special">The <em>sparking aura</em> lasts a number of rounds equal to <Link to="/misc/half">half</Link> her shaman level. A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="vortex-spells-su" icon={["lower"]}>
<Pair single id="vortex-spells-su">Vortex Spells (Su)</Pair>
<Pair title="Ability">Whenever the shaman confirms a critical hit against an opponent with a spell, the target is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
<Pair title="At 11th Level">The duration increases to 1d4 rounds.</Pair>
</Ability>
<Ability id="wind-sight-su" icon={["boost","magic"]}>
<Pair single id="wind-sight-su">Wind Sight (Su)</Pair>
<Pair title="Passive Ability">The shaman ignores the penalties on <Link to="/skill/perception">Perception</Link> checks caused by wind and the first 100 feet of distance.</Pair>
<Pair title="At 7th Level"><p>She can, as a <strong className="hl">standard action</strong>, hear or see into any area - as <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, using that spell's range - provided that there's an unobstructed path for air to travel between the shaman and the target area. This doesn't require line of effect, meaning the path can turn corners and go through spaces as narrow as 1 inch in diameter.</p>
<p>The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive.</p>
</Pair>
</Ability>
<Ability id="wind-ward-su" icon={["protect","def"]}>
<Pair single id="wind-ward-su">Wind Ward (Su)</Pair>
<Pair title="Ability">The shaman can touch a willing creature (including herself) and grants a ward of wind. This <em>ward</em> lasts for a number of rounds equal to the shaman's level. When a warded creature is attacked with an arrow, ray, or other ranged attack that requires an attack roll, that attack suffers a 20% miss chance.</Pair>
<Pair title="At 8th Level">The <em>ward</em> lasts for 1 minute for every level the shaman possesses.</Pair>
<Pair title="At 16th Level">The miss chance increases to 50%.</Pair>
<Pair title="Special">Once affected, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<h3 id="shamanspirit-wind-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["def"]}>
<Pair single id="spirit-animal">Spirit Animal</Pair>
<Pair title="Passive Ability">The shaman's spirit animal crackles with electrical energy when it moves, giving off light like a <Link to="/eq-misc/candle">candle</Link>. This electricity deals no damage to the animal or any creature that touches the animal. The animal gains electricity resistance 10.</Pair>
</Ability>
<h3 id="shamanspirit-wind-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Wind spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="shocking-touch-su" icon={["touch"]}>
<Pair single id="shocking-touch-su">Shocking Touch (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">The shaman can make a melee touch attack that deals an amount of electricity damage equal to 1d6 + <Link to="/misc/half">half</Link> her shaman level.</Pair>
<Pair title="At 11th Level">Any weapon she wields is treated as a <Link to="/magic-enh/shock">shock</Link> weapon.</Pair>
</Ability>
<h3 id="shamanspirit-wind-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Wind spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="spark-soul-su" icon={["def","line"]}>
<Pair single id="spark-soul-su">Spark Soul (Su)</Pair>
<Pair title="Passive Ability">The shaman gains electricity resistance 10.</Pair>
<Pair title="Standard Action"><p>She can unleash a 20-foot line of sparks from her fingertips, dealing 1d4 points of electricity damage per shaman level she possesses. A successful Reflex saving throw halves this damage.</p>
<p>The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.</p>
</Pair>
</Ability>
<h3 id="shamanspirit-wind-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Wind spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="elemental-form-su" icon={["magic"]}>
<Pair single id="elemental-form-su">Elemental Form (Su)</Pair>
<Pair title="Standard Action">The shaman assumes the form of a Huge (or smaller) <Link to="/monster/lightning_elemental">lightning elemental</Link>, as if using <Link to="/spell/elemental_body_iv">elemental body IV</Link> with a duration of 1 hour per level. The shaman can use this ability once per day.</Pair>
</Ability>
<h3 id="shamanspirit-wind-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["def","boost"]}>
<Pair single id="manifestation" flavor="The shaman becomes a being of air and electricity.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The shaman gains electricity resistance 30.</Pair>
<Pair title="Ability">She can also apply any one of the following feats to any air or electricity spell she casts without increasing the spell's level or casting time: <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link>. She doesn't need to possess these feats to use this ability.</Pair>
</Ability>
</>};
const _wood = {hasJL:true,title: "Wood", jsx: <><div className="jumpList" id="shamanspirit-wood-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="shamanspirit-wood-hexes">Hexes</InnerLink></li><li><InnerLink toTop to="shamanspirit-wood-spirit-animal">Spirit Animal</InnerLink></li><li><InnerLink toTop to="shamanspirit-wood-spirit-ability">Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-wood-greater-spirit-ability">Greater Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-wood-true-spirit-ability">True Spirit Ability</InnerLink></li><li><InnerLink toTop to="shamanspirit-wood-manifestation">Manifestation</InnerLink></li></ul></div><h2 id="shamanspirit-wood-wood">Wood</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 93</Link>, <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 26</Link><br/>A shaman who selects the wood spirit has a skin tone similar to the coloration of trees in her home region. Her vibrant hair is fragrant and resembles leaves and blossoms.</p>
<Ability id="spirit-magic-spells" icon={["learn"]}>
<Pair single id="spirit-magic-spells">Spirit Magic Spells</Pair>
<Pair title="Info">The shaman gains these spells at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/shillelagh">Shillelagh</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/barkskin">Barkskin</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/minor_creation">Minor creation</Link> (wood items only)</Pair>
<Pair plain title="4th"><Link to="/spell/thorn_body">Thorn body</Link></Pair>
<Pair plain title="5th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="6th"><Link to="/spell/ironwood">Ironwood</Link></Pair>
<Pair plain title="7th"><Link to="/spell/transmute_metal_to_wood">Transmute metal to wood</Link></Pair>
<Pair plain title="8th"><Link to="/spell/changestaff">Changestaff</Link></Pair>
<Pair plain title="9th"><Link to="/spell/wooden_phalanx">Wooden phalanx</Link></Pair>
</Ability>
<h3 id="shamanspirit-wood-hexes" data-hash-target>Hexes</h3>
<p>A shaman who chooses the Wood spirit can select from the following hexes.</p>
<Ability id="hex-of-lignification-su" icon={["lower"]}>
<Pair single id="hex-of-lignification-su">Hex of Lignification (Su)</Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to turn into a twisted, tree-like shape for 2 rounds. The target gains <Link to="/rule/hardness">hardness</Link> 5 but is <Link to="/misc/staggered">staggered</Link>, and can negate the effect with a successful Fortitude saving throw.</Pair>
<Pair title="Special">Whether or not the target succeeds at its save, it can't be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="natures-gifts-su" icon={["magic"]}>
<Pair single id="natures-gifts-su">Nature's Gifts (Su)</Pair>
<Pair title="Ability">Once per day, the shaman can command trees and other plants to yield magical berries and fruit. This ability functions as <Link to="/spell/goodberry">goodberry</Link>, except the maximum number of hit points it can restore to a subject in a 24-hour period from this hex is equal to the shaman's Charisma modifier (minimum 1 hit point per day).</Pair>
</Ability>
<Ability id="spines-and-brambles-su" icon={["magic"]}>
<Pair single id="spines-and-brambles-su">Spines and Brambles (Su)</Pair>
<Pair title="Ability">With a beckoning gesture, the shaman conjures spiny shrubs in a number of squares equal to her Charisma modifier (minimum 1) within 30 feet. The squares become filled with <Link to="/rule/light_undergrowth">light undergrowth</Link>. The shaman can pass through the affected squares without impediment.</Pair>
<Pair title="Special">When the shaman uses this hex again, any previously conjured undergrowth withers away.</Pair>
</Ability>
<Ability id="verdant-path-sp" icon={["power","magic"]}>
<Pair single id="verdant-path-sp" flavor="Even the most tangled briars make way for the shaman, and suitable roots and branches appear to support her feet.">Verdant Path (Sp)</Pair>
<Pair title="Ability">The shaman gains <Link to="/ability/woodland_stride">woodland stride</Link>, as per the druid ability of the same name.</Pair>
<Pair title="At 8th Level">She can use <Link to="/spell/air_walk">air walk</Link> at will whenever she is within 10 feet of a tree, though the effect ends instantly when she moves farther than 10 feet from a tree.</Pair>
</Ability>
<Ability id="whispering-leaves-sp" icon={["magic"]}>
<Pair single id="whispering-leaves-sp">Whispering Leaves (Sp)</Pair>
<Pair title="Ability">Whenever the shaman is within 10 feet of a tree or undergrowth, she can cast <Link to="/spell/whispering_wind">whispering wind</Link> as a spell-like ability with a caster level equal to her shaman level. The targeted area must also contain trees or undergrowth, which relay the message in a gentle, rustling voice.</Pair>
<Pair title="At 8th Level">The shaman can also listen to the targeted area as though she were using <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> for the 1 round during which the hex is delivering the message.</Pair>
</Ability>
<h3 id="shamanspirit-wood-spirit-animal" data-hash-target>Spirit Animal</h3>
<Ability id="spirit-animal" icon={["power"]}>
<Pair single id="spirit-animal" flavor="The shaman's spirit animal looks like a wooden figurine or a vaguely animal-shaped tree branch when it is motionless.">Spirit Animal</Pair>
<Pair title="Ability">The animal gains <Link to="/umr/freeze">freeze</Link> as per the universal monster rule.</Pair>
</Ability>
<h3 id="shamanspirit-wood-spirit-ability" data-hash-target>Spirit Ability</h3>
<p>A shaman who chooses the Wood spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability.</p>
<Ability id="tree-limb-su" icon={["melee"]}>
<Pair single id="tree-limb-su">Tree Limb (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Swift Action">The shaman can turn one of her arms into a heavy, branch-like limb. She must drop anything held in that hand, and she can't use this ability if she is wearing a shield on that arm. Until the beginning of her next turn, she gains a <Link to="/umr/slam_attack">slam attack</Link> that deals 1d8 points of damage (for a Medium shaman; 1d6 if Small, 2d6 if Large).</Pair>
<Pair title="At 8th Level">The reach of this slam attack increases by 5 feet.</Pair>
<Pair title="At 16th Level">The shaman can transform both of her arms, gaining two slam attacks.</Pair>
</Ability>
<h3 id="shamanspirit-wood-greater-spirit-ability" data-hash-target>Greater Spirit Ability</h3>
<p>A shaman who chooses the Wood spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the greater version of that spirit.</p>
<Ability id="bloody-roots-sp" icon={["magic","aura"]}>
<Pair single id="bloody-roots-sp">Bloody Roots (Sp)</Pair>
<Pair title="Usage">3 + Charisma modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="Standard Action"><p>The shaman can cause a field of thick roots to burrow up from the ground. This ability functions as <Link to="/spell/black_tentacles">black tentacles</Link> with a caster level equal to the shaman's level. The area is centered on the shaman when she activates the ability but remains stationary if she then moves.</p>
<p>The shaman is unaffected by the roots. Her allies treat the area as <Link to="/rule/difficult_terrain">difficult terrain</Link>, but the roots don't attack them. The shaman can end the effect as a <strong className="hl">free action</strong>.</p>
</Pair>
</Ability>
<h3 id="shamanspirit-wood-true-spirit-ability" data-hash-target>True Spirit Ability</h3>
<p>A shaman who chooses the Wood spirit as her <em>spirit</em> or <em>wandering spirit</em> gains the following ability upon having access to the true version of that spirit.</p>
<Ability id="tree-form-sp" icon={["magic"]}>
<Pair single id="tree-form-sp">Tree Form (Sp)</Pair>
<Pair title="Standard Action">The shaman can assume the form of a plant creature as per <Link to="/spell/plant_shape_iii">plant shape III</Link> with a duration of 1 hour per level. She can use this ability once per day.</Pair>
</Ability>
<h3 id="shamanspirit-wood-manifestation" data-hash-target>Manifestation</h3>
<Ability id="manifestation" icon={["power","def"]}>
<Pair single id="manifestation" flavor="The shaman becomes a living creature of wood.">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She is forevermore treated as a <Link to="/type/plant">plant creature</Link> rather than her original creature type for the purposes of spells and magical effects. Her skin takes on the appearance of polished wood grain, and she gains a +4 natural armor bonus to her Armor Class and damage reduction 10/- against wooden weapons and the natural attacks of wooden and wood-like creatures. She gains immunity to paralysis, poison, polymorph, sleep, and stun.</Pair>
<Pair title="Ability">At will, the shaman can meld with any tree or single block of wood (as per <Link to="/spell/meld_into_stone">meld into stone</Link>, except she can meld only with wood and has no limit on how long she can remain in the wood).</Pair>
</Ability>
</>};
export default {not_found:_not_found,ancestors:_ancestors,battle:_battle,bones:_bones,dark_tapestry:_dark_tapestry,flame:_flame,frost:_frost,heavens:_heavens,life:_life,lore:_lore,mammoth:_mammoth,nature:_nature,restoration:_restoration,slums:_slums,stone:_stone,tribe:_tribe,waves:_waves,wind:_wind,wood:_wood}