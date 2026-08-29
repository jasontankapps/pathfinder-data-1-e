import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import SpellList from '../../components/SpellList';
const _not_found = {title: "Unknown", jsx: <><h2 id="druiddomain-not_found-error">Error</h2>
<p>Unable to find the requested druidic domain.</p>
</>};
const _aquatic = {title: "Aquatic", jsx: <><h2 id="druiddomain-aquatic-aquatic-domain">Aquatic Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 33</Link></p>
<p><strong className="hl">Granted Powers:</strong> You master the deeps of the sea, raging rivers, flowing falls, and relentless tides.</p>
<Ability id="sealord-su" icon={["aura","stairs-goal"]}>
<Pair single id="sealord-su">Sealord (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">You can <Link to="/ability/channel_energy">channel energy</Link> (as a cleric of your druid level), but only to heal creatures with the aquatic or water subtype or to command them (similar to using the <Link to="/feat/command_undead">Command Undead</Link> feat against undead). You can take other feats to add to this ability, such as <Link to="/feat/extra_channel">Extra Channel</Link> and <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/elemental_channel">Elemental Channel</Link> and <Link to="/feat/alignment_channel">Alignment Channel</Link>. The DC to save against this ability is equal to 10 + 1/2 your druid level + your Charisma modifier.</Pair>
</Ability>
<Ability id="seastrike-su" icon={["stairs-goal","upgrade","bowman"]}>
<Pair single id="seastrike-su">Seastrike (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Free Action">You may use natural and manufactured weapons in water as if you had continuous <em>freedom of movement.</em></Pair>
<Pair title="Standard Action">You can throw a weapon underwater without the normal penalties for throwing weapons; if your target is in or under the water, the weapon also acts as a <Link to="/magic-enh/returning">returning</Link> weapon for that attack.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"hydraulic push","hydraulic_push"],[2,"slipstream","slipstream"],[3,"water breathing","water_breathing"],[4,"freedom of movement","freedom_of_movement"],[5,"black tentacles","black_tentacles"],[6,"freezing sphere","freezing_sphere"],[7,"animal shapes","animal_shapes",<>aquatic creatures only</>],[8,"seamantle","seamantle"],[9,"tsunami","tsunami"]]}>Domain Spells</SpellList>
</>};
const _arctic = {title: "Arctic", jsx: <><h2 id="druiddomain-arctic-arctic-domain">Arctic Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 33</Link></p>
<p><strong className="hl">Granted Powers:</strong> You master the might of the endless, snow-covered wastes beneath the midnight sun, where icy polar winds blow.</p>
<Ability id="call-cold-su" icon={["aura","stairs-goal"]}>
<Pair single id="call-cold-su">Call Cold (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">You can <Link to="/ability/channel_energy">channel energy</Link> (as a cleric of your druid level), but only to heal creatures with the cold subtype or to command them (similar to using the <Link to="/feat/command_undead">Command Undead</Link> feat against undead). You can take other feats that add to this ability, such as <Link to="/feat/extra_channel">Extra Channel</Link> and <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/elemental_channel">Elemental Channel</Link> and <Link to="/feat/alignment_channel">Alignment Channel</Link>. The DC to save against this ability is equal to 10 + 1/2 your druid level + your Charisma modifier.</Pair>
</Ability>
<Ability id="banish-flame-su" icon={["aura"]}>
<Pair single id="banish-flame-su">Banish Flame (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You may use your <em>call cold</em> ability to damage creatures with the fire subtype (as a cleric channeling negative energy) or to cause them to flee from you (as the <Link to="/feat/turn_undead">Turn Undead</Link> feat). Alternatively, you may use this ability to negate magical fire effects as if using a targeted <Link to="/spell/dispel_magic">dispel magic</Link>.</Pair>
<Pair title="At 12th Level">This functions as targeted or area <Link to="/spell/greater_dispel_magic">greater dispel magic</Link> instead of <em>dispel magic.</em></Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"frostbite","frostbite"],[2,"aspect of the bear","aspect_of_the_bear"],[3,"sleet storm","sleet_storm"],[4,"wall of ice","wall_of_ice"],[5,"aspect of the wolf","aspect_of_the_wolf"],[6,"freezing sphere","freezing_sphere"],[7,"wind walk","wind_walk"],[8,"polar ray","polar_ray"],[9,"polar midnight","polar_midnight"]]}>Domain Spells</SpellList>
</>};
const _badlands = {title: "Badlands", jsx: <><h2 id="druiddomain-badlands-badlands-domain">Badlands Domain</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 24</Link></p>
<p><strong className="hl">Granted Powers:</strong> Your spirit knows both the harshness of the drying wind and the raw beauty of painted canyons.</p>
<Ability id="subsistence-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="subsistence-ex" flavor="You can survive on very little food or water while helping others survive in harsh climates.">Subsistence (Ex)</Pair>
<Pair title="Passive Ability">When determining how long you can withstand starvation and thirst, including checks to avoid nonlethal damage, treat your Constitution score as though it were 10 points higher. Additionally, you gain a bonus equal to one half your druid level (minimum 1) on <Link to="/skill/survival">Survival</Link> checks in dry hills or desert terrain.</Pair>
</Ability>
<Ability id="wasteland-stride-ex" icon={["stairs-goal"]}>
<Pair single id="wasteland-stride-ex">Wasteland Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You may move through light or dense rubble, as well as up or down steep slopes, at your normal speed without suffering any impairment. Areas that have been magically manipulated to impede motion still affect you, however.</Pair>
</Ability>
<Ability id="badlands-spirit-su" icon={["magic-swirl"]}>
<Pair single id="badlands-spirit-su">Badlands Spirit (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Whenever you use <em>wild shape</em> to take on the form of an earth elemental, you also gain <Link to="/spell/geyser">geyser</Link> as a spell-like ability.</Pair>
<Pair title="At 12th Level">You also gain <Link to="/spell/sirocco">sirocco</Link>.</Pair>
<Pair title="At 15th Level">You also gain <Link to="/spell/scouring_winds">scouring winds</Link>.</Pair>
<Pair title="Special">Each spell-like ability is usable once per day.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"cloak of shade","cloak_of_shade"],[2,"feast of ashes","feast_of_ashes"],[3,"cloak of winds","cloak_of_winds"],[4,"spike stones","spike_stones"],[5,"wind blades","wind_blades"],[6,"find the path","find_the_path"],[7,"fire storm","fire_storm"],[8,"earthquake","earthquake"],[9,"storm of vengeance","storm_of_vengeance"]]}>Domain Spells</SpellList>
</>};
const _cave = {title: "Cave", jsx: <><h2 id="druiddomain-cave-cave-domain">Cave Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 33</Link></p>
<p><strong className="hl">Granted Powers:</strong> The wonders and dark secrets of the deepest caves give you strength.</p>
<Ability id="cavesight-sp" icon={["stairs-goal"]}>
<Pair single id="cavesight-sp">Cavesight (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You can grant darkvision 60 feet to a willing creature you touch. This effect lasts 1 minute, or 1 hour if used on yourself.</Pair>
</Ability>
<Ability id="tremorsense-ex" icon={["stairs-goal"]}>
<Pair single id="tremorsense-ex">Tremorsense (Ex)</Pair>
<Pair title="At 6th Level">You gain <Link to="/umr/tremorsense">tremorsense</Link> 30 feet.</Pair>
<Pair title="At 12th Level">You gain tremorsense 60 feet.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"detect aberration","detect_aberration"],[2,"stone call","stone_call"],[3,"deeper darkness","deeper_darkness"],[4,"echolocation","echolocation"],[5,"wall of stone","wall_of_stone"],[6,"conjure black pudding","conjure_black_pudding"],[7,"statue","statue",<>looking like a stalagmite or stalactite</>],[8,"earthquake","earthquake"],[9,"imprisonment","imprisonment"]]}>Domain Spells</SpellList>
</>};
const _crocodile = {title: "Crocodile", jsx: <><h2 id="druiddomain-crocodile-crocodile-domain">Crocodile Domain</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 24</Link></p>
<p><strong className="hl">Granted Powers:</strong> You are connected with the primal forces of creation and destruction and with the crocodile spirit's ancient wisdom.</p>
<Ability id="familiar" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You gain a <Link to="/monster/dwarf_caiman">dwarf caiman</Link> <Link to="/sidekick/familiar">familiar</Link>. Your effective wizard level for this ability is equal to your druid level. Your druid level stacks with levels from other classes that grant familiars when determining the powers of your familiar.</Pair>
</Ability>
<Ability id="death-roll-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="death-roll-ex">Death Roll (Ex)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">While grappling an enemy up to one size category larger than you, you may make a grapple check to roll wildly, knocking your enemy <Link to="/rule/prone">prone</Link> and dealing 1d8 points of damage. When using this ability, you gain a bonus to your CMB equal to one half your druid level (minimum 1).</Pair>
</Ability>
<Ability id="ambush-ex" icon={["stairs-goal"]}>
<Pair single id="ambush-ex">Ambush (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You gain <Link to="/ability/sneak_attack">sneak attack</Link> +1d6. This increase to sneak attack damage stacks with sneak attack damage you may have from other sources.</Pair>
<Pair title="At 11th Level">This sneak attack damage becomes +2d6.</Pair>
<Pair title="At 17th Level">This sneak attack damage increases to +3d6.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"touch of the sea","touch_of_the_sea"],[2,"savage maw","savage_maw"],[3,"water walk","water_walk"],[4,"strong jaw","strong_jaw"],[5,"legend lore","legend_lore"],[6,"mass owl's wisdom","mass_owls_wisdom"],[7,"true seeing","true_seeing"],[8,"mass heal","mass_heal"],[9,"regenerate","regenerate"]]}>Domain Spells</SpellList>
</>};
const _desert = {title: "Desert", jsx: <><h2 id="druiddomain-desert-desert-domain">Desert Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 34</Link></p>
<p><strong className="hl">Granted Powers:</strong> The spirits and secrets of the endless wastes are yours to command.</p>
<Ability id="heat-shimmer-su" icon={["armor-upgrade"]}>
<Pair single id="heat-shimmer-su">Heat Shimmer (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="Free Action">You can surround yourself with heat distortion that acts as the <Link to="/spell/blur">blur</Link> spell. Creatures that strike you in melee while you're using this ability are <Link to="/misc/dazzled">dazzled</Link> for 1 round (Fortitude negates).</Pair>
</Ability>
<Ability id="servant-of-the-sands-sp" icon={["magic-swirl"]}>
<Pair single id="servant-of-the-sands-sp">Servant of the Sands (Sp)</Pair>
<Pair title="At 8th Level">Once per day, you may call upon the aid of a <Link to="/monster/janni">janni</Link> as if using <Link to="/spell/lesser_planar_ally">lesser planar ally</Link>.</Pair>
<Pair title="At 12th Level">You may call upon the aid of any type of common (non-noble) <Link to="/family/genie">genie</Link> as if using <Link to="/spell/planar_ally">planar ally</Link>.</Pair>
<Pair title="At 16th Level">You may call upon the aid of a noble genie as if using <Link to="/spell/greater_planar_ally">greater planar ally</Link>.</Pair>
<Pair title="Special">If you use this power while in desert terrain, you need not make an offering to call the creature(s), and the cost of any service is halved.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"cloak of shade","cloak_of_shade"],[2,"shifting sand","shifting_sand"],[3,"cup of dust","cup_of_dust"],[4,"hallucinatory terrain","hallucinatory_terrain"],[5,"transmute rock to mud","transmute_rock_to_mud",<>creates loose sand instead of mud</>],[6,"sirocco","sirocco"],[7,"sunbeam","sunbeam"],[8,"sunburst","sunburst"],[9,"horrid wilting","horrid_wilting"]]}>Domain Spells</SpellList>
</>};
const _eagle = {title: "Eagle", jsx: <><h2 id="druiddomain-eagle-eagle-domain">Eagle Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 34</Link></p>
<p><strong className="hl">Granted Powers:</strong> Your spirit soars with the mightiest and noblest of all winged creatures.</p>
<Ability id="familiar" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You gain a <Link to="/monster/hawk">hawk</Link> <Link to="/sidekick/familiar">familiar</Link>. Your effective wizard level for this ability is equal to your druid level. Your druid level stacks with levels from other classes that grant familiars when determining the powers of your familiar.</Pair>
</Ability>
<Ability id="hawkeye-su" icon={["upgrade"]}>
<Pair single id="hawkeye-su">Hawkeye (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Swift Action">You may add a bonus equal to <Link to="/misc/half">half</Link> your druid level (minimum +1) on one ranged attack or on one <Link to="/skill/perception">Perception</Link> check.</Pair>
</Ability>
<Ability id="aerial-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="aerial-evasion-ex">Aerial evasion (Ex)</Pair>
<Pair title="At 6th Level">You gain the <Link to="/ability/evasion">evasion</Link> ability (as a rogue) when you are flying.</Pair>
<Pair title="At 12th Level">You gain <Link to="/talent/improved_evasion">improved evasion</Link> while flying.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"aspect of the falcon","aspect_of_the_falcon"],[2,"eagle's splendor","eagles_splendor"],[3,"fly","fly"],[4,"river of wind","river_of_wind"],[5,"overland flight","overland_flight"],[6,"eagle aerie","eagle_aerie"],[7,"animal shapes","animal_shapes",<>birds only</>],[8,"sunburst","sunburst"],[9,"winds of vengeance","winds_of_vengeance"]]}>Domain Spells</SpellList>
</>};
const _erosion = {title: "Erosion", jsx: <><h2 id="druiddomain-erosion-erosion-domain">Erosion Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 46</Link></p>
<p><strong className="hl">Granted Powers:</strong> You command the crumbling of stone and revel in rust; the decay and destruction of metal and stone over time appeals to and delights you.</p>
<Ability id="rusting-touch-su" icon={["magic-palm"]}>
<Pair single id="rusting-touch-su" flavor="You can cause an opponent's metal armor or weapon to become dry and brittle as it magically corrodes and rusts.">Rusting Touch (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You make a melee touch attack against a creature wearing metal armor or wielding a metal weapon. If you hit, choose a metal weapon, suit of metal armor, or metal shield carried or worn by that creature. The object takes an amount of hit point damage equal to 1d6 + <Link to="/misc/half">half</Link> your druid level. If the item is not magical, or if your caster level is greater than the item's caster level, this damage bypasses the item's hardness.</Pair>
</Ability>
<Ability id="erosion-aura-su" icon={["aura"]}>
<Pair single id="erosion-aura-su">Erosion Aura (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can project an aura of magically enhanced erosion. Objects made primarily of metal or stone within this aura lose 10 points of hardness. Magic items retain a minimum hardness equal to twice their enhancement bonus and can attempt a Fortitude saving throw (DC = 10 + half your druid level + your Wisdom modifier) to negate this effect. A construct made primarily of metal or stone must succeed at a Fortitude save or lose all damage reduction and hardness for 1 round.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"expeditious excavation","expeditious_excavation"],[2,"soften earth and stone","soften_earth_and_stone"],[3,"disable construct","disable_construct"],[4,"rusting grasp","rusting_grasp"],[5,"transmute rock to mud","transmute_rock_to_mud"],[6,"sympathetic vibration","sympathetic_vibration"],[7,"disintegrate","disintegrate"],[8,"earthquake","earthquake"],[9,"implosion","implosion"]]}>Domain Spells</SpellList>
</>};
const _frog = {title: "Frog", jsx: <><h2 id="druiddomain-frog-frog-domain">Frog Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 34</Link></p>
<p><strong className="hl">Granted Powers:</strong> You venerate the elder amphibians that first brought life to land.</p>
<Ability id="familiar" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You may gain a <Link to="/monster/toad">toad</Link> <Link to="/sidekick/familiar">familiar</Link>. Your effective wizard level for this ability is equal to your druid level. Your druid level stacks with levels from other classes that grant <Link to="/ability/familiar">familiars</Link> when determining the powers of your familiar.</Pair>
</Ability>
<Ability id="sticky-strike-su" icon={["smoking-finger"]}>
<Pair single id="sticky-strike-su">Sticky Strike (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action"><p>You can attempt a ranged touch attack with a sticky tendril against a target up to 15 feet away, then use the <Link to="/umr/pull">pull</Link> universal monster ability to pull the target 5 feet toward you. You gain a bonus on the pull's combat maneuver check equal to 1/2 your druid level. If the target is larger than you, you may pull yourself 5 feet toward the target without making a check.</p>
<p>The target can remove the tendril by making an opposed Strength check as a standard action, or by dealing enough slashing damage to the tendril (hit points equal to your druid level, Armor Class equal to your touch Armor Class). You can dissolve the tendril as a <strong className="hl">free action</strong>.</p>
</Pair>
</Ability>
<Ability id="webfoot-ex" icon={["stairs-goal"]}>
<Pair single id="webfoot-ex">Webfoot (Ex)</Pair>
<Pair title="At 6th Level">You gain the <Link to="/umr/amphibious">amphibious</Link> special quality and a swim speed equal to your land speed.</Pair>
<Pair title="At 12th Level">You gain a climb speed equal to your land speed.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"jump","jump"],[2,"delay poison","delay_poison"],[3,"lily pad stride","lily_pad_stride"],[4,"shout","shout"],[5,"blessing of the salamander","blessing_of_the_salamander"],[6,"confusion","confusion"],[7,"animal shapes","animal_shapes",<>amphibians only</>],[8,"greater shout","greater_shout"],[9,"summon froghemoth","summon_froghemoth"]]}>Domain Spells</SpellList>
</>};
const _jungle = {title: "Jungle", jsx: <><h2 id="druiddomain-jungle-jungle-domain">Jungle Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 34</Link></p>
<p><strong className="hl">Granted Powers:</strong> The spirits of the jungle, both of natural guardians and lost civilizations, whisper in your heart.</p>
<Ability id="brachiation-ex" icon={["stairs-goal"]}>
<Pair single id="brachiation-ex">Brachiation (Ex)</Pair>
<Pair title="Usage">1 round/day per druid level; these rounds need not be consecutive</Pair>
<Pair title="Free Action">You may climb with a climb speed equal to your land speed, and gain a bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks equal to your druid level.</Pair>
</Ability>
<Ability id="trap-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="trap-sense-ex">Trap Sense (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain the <Link to="/ability/trap_sense">trap sense</Link> ability. This is identical to the rogue class ability. Your effective rogue level is equal to your druid level for the purpose of determining your trap sense bonus. Trap sense bonuses gained from multiple classes stack.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"glide","glide"],[2,"tar ball","tar_ball"],[3,"venomous bolt","venomous_bolt"],[4,"arboreal hammer","arboreal_hammer"],[5,"blessing of the salamander","blessing_of_the_salamander"],[6,"swarm skin","swarm_skin"],[7,"creeping doom","creeping_doom"],[8,"wall of lava","wall_of_lava"],[9,"shambler","shambler"]]}>Domain Spells</SpellList>
</>};
const _monkey = {title: "Monkey", jsx: <><h2 id="druiddomain-monkey-monkey-domain">Monkey Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 34</Link></p>
<p><strong className="hl">Granted Powers:</strong> The balanced wisdom, skill, agility, and playfulness of the monkey are the model for your spiritual discipline.</p>
<Ability id="familiar" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You gain a <Link to="/monster/monkey">monkey</Link> <Link to="/sidekick/familiar">familiar</Link>. Your effective wizard level for this ability is equal to your druid level. Your druid level stacks with levels from other classes that grant <Link to="/ability/familiar">familiars</Link> when determining the powers of your familiar.</Pair>
</Ability>
<Ability id="monkey-athletics-su" icon={["upgrade"]}>
<Pair single id="monkey-athletics-su">Monkey Athletics (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Free Action">You may add a competence bonus equal to half your druid level (minimum of +1) on one <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/disable_device">Disable Device</Link>, or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check.</Pair>
</Ability>
<Ability id="ranged-legerdemain-su" icon={["bowman"]}>
<Pair single id="ranged-legerdemain-su">Ranged Legerdemain (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You can use the Disable Device and Sleight of Hand skills at a range of 30 feet. Working at a distance increases the normal skill check DC by 5, and you cannot take 10 on this check. Any object to be manipulated must weigh 5 pounds or less. You can only use this ability if you have at least 1 rank in the skill being used.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"beguiling gift","beguiling_gift"],[2,"spider climb","spider_climb"],[3,"cacophonous call","cacophonous_call"],[4,"freedom of movement","freedom_of_movement"],[5,"summon nature's ally V","summon_natures_ally_v",<>dire ape or girallon only</>],[6,"confusion","confusion"],[7,"animal shapes","animal_shapes",<>apes and monkeys only</>],[8,"clenched fist","clenched_fist"],[9,"foresight","foresight"]]}>Domain Spells</SpellList>
</>};
const _mountain = {title: "Mountain", jsx: <><h2 id="druiddomain-mountain-mountain-domain">Mountain Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 35</Link></p>
<p><strong className="hl">Granted Powers:</strong> You have mastered the mighty powers of the great mountains that pierce the sky and stand aloof above the lowlands.</p>
<Ability id="foothold-su" icon={["upgrade"]}>
<Pair single id="foothold-su">Foothold (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can cause an adjacent stone surface up to 10 feet square to mold itself into ridges and creases. A foothold that is created on a horizontal surface is treated as <Link to="/rule/difficult_terrain">difficult terrain</Link>, and a Medium or smaller creature standing in the area or moving through it takes a -2 penalty on <Link to="/skill/acrobatics">Acrobatics</Link> checks and to CMD due to poor footing. A foothold that is created on a vertical surface grants a +10 bonus on <Link to="/skill/climb">Climb</Link> checks to climb it. The stone remains altered for 1 hour.</Pair>
</Ability>
<Ability id="thin-air-su" icon={["armor-downgrade","aura"]}>
<Pair single id="thin-air-su">Thin Air (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per druid level; these rounds need not be consecutive</Pair>
<Pair title="Free Action">You can surround yourself with a 5-foot aura of supernaturally thin air that draws the breath from creatures adjacent to you. Creatures beginning their turn in the aura are <Link to="/misc/fatigued">fatigued</Link> (Fortitude negates). A fatigued creature that begins its turn in the aura must save or suffer from <Link to="/rule/altitude_sickness">altitude sickness</Link>, taking 1 point of ability damage to all ability scores.</Pair>
<Pair title="At 16th Level">The aura increases to 10 feet.</Pair>
<Pair title="Special">Creatures that do not breathe are immune to this aura.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"stone fist","stone_fist"],[2,"stone call","stone_call"],[3,"cloak of winds","cloak_of_winds"],[4,"stoneskin","stoneskin"],[5,"geyser","geyser"],[6,"suffocation","suffocation"],[7,"flesh to stone","flesh_to_stone"],[8,"reverse gravity","reverse_gravity"],[9,"clashing rocks","clashing_rocks"]]}>Domain Spells</SpellList>
</>};
const _panther = {title: "Panther", jsx: <><h2 id="druiddomain-panther-panther-domain">Panther Domain</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 25</Link></p>
<p><strong className="hl">Granted Powers:</strong> You share the power of the Hunter in Darkness. The potent magic of an ancient predator spirit flows through you.</p>
<Ability id="hunters-senses-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="hunters-senses-ex" flavor="You gain the ability to augment your senses on command.">Hunter's Senses (Ex)</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">You grant yourself the <Link to="/umr/scent">scent</Link> special ability and improved vision. If you have normal vision, you gain low-light vision. If you have low-light vision, you gain darkvision out to a range of 30 feet. If you have darkvision, the range of your darkvision increases by 30 feet. Dismissing these augmented senses is a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="move-in-darkness-ex" icon={["upgrade"]}>
<Pair single id="move-in-darkness-ex">Move in Darkness (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">In areas of normal or magical darkness, you gain a +4 bonus on Stealth skill checks and initiative checks.</Pair>
<Pair title="At 12th Level">This bonus becomes +4.</Pair>
<Pair title="At 16th Level">This bonus increases to +6.</Pair>
<Pair title="At 20th Level">This bonus becomes +8.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"true strike","true_strike"],[2,"darkness","darkness"],[3,"deeper darkness","deeper_darkness"],[4,"moonstruck","moonstruck"],[5,"commune with nature","commune_with_nature"],[6,"mislead","mislead"],[7,"true seeing","true_seeing"],[8,"nine lives","nine_lives"],[9,"greater spell immunity","greater_spell_immunity"]]}>Domain Spells</SpellList>
</>};
const _plains = {title: "Plains", jsx: <><h2 id="druiddomain-plains-plains-domain">Plains Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 35</Link></p>
<p><strong className="hl">Granted Powers:</strong> The wide open spaces of the prairie, savanna, and steppe are yours to master.</p>
<Ability id="migrating-herd-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="migrating-herd-su">Migrating Herd (Su)</Pair>
<Pair title="Ability">When you summon an <Link to="/monster/aurochs">aurochs, bison</Link>, <Link to="/monster/elephant">elephant, mastodon</Link>, <Link to="/monster/horse">horse</Link>, <Link to="/monster/pony">pony</Link>, or similar quadruped herbivore with a summoning spell, the duration of the spell is increased by 100% (this does not stack with <Link to="/feat/extend_spell">Extend Spell</Link>). The creature's land speed is increased by 10 feet.</Pair>
</Ability>
<Ability id="pounce-ex" icon={["stairs-goal"]}>
<Pair single id="pounce-ex">Pounce (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You may use the <Link to="/umr/pounce">pounce</Link> special attack once per day.</Pair>
<Pair title="At 9th Level">You can use this ability 2 times a day.</Pair>
<Pair title="At 12th Level">You can use this ability 3 times a day.</Pair>
<Pair title="At 15th Level">You can use this ability 4 times a day.</Pair>
<Pair title="At 18th Level">You can use this ability 5 times a day.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"mount","mount"],[2,"chameleon stride","chameleon_stride"],[3,"haste","haste"],[4,"aspect of the stag","aspect_of_the_stag"],[5,"control winds","control_winds"],[6,"find the path","find_the_path"],[7,"whirlwind","whirlwind"],[8,"animal shapes","animal_shapes"],[9,"world wave","world_wave"]]}>Domain Spells</SpellList>
</>};
const _plane_of_air = {title: "Plane of Air", jsx: <><h2 id="druiddomain-plane_of_air-plane-of-air-domain">Plane of Air Domain</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 6</Link></p>
<p><strong className="hl">Granted Powers:</strong> You draw your power from the <Link to="/rule/plane_of_air">boundless expanse of air and clouds</Link>.</p>
<Ability id="fly" icon={["skills"]}>
<Pair single id="fly">Fly</Pair>
<Pair title="Info"><Link to="/skill/fly">Fly</Link> is a class skill for you, and you can take ranks in the skill even without first having a reliable means to fly or glide.</Pair>
</Ability>
<Ability id="wild-empathy" icon={["upgrade"]}>
<Pair single id="wild-empathy">Wild Empathy</Pair>
<Pair title="Info">You can use <Link to="/ability/wild_empathy">wild empathy</Link> to influence a creature with the air subtype if its Intelligence score is 1 or 2.</Pair>
</Ability>
<Ability id="aerial-agility-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="aerial-agility-ex" flavor="You can navigate the air unhindered.">Aerial Agility (Ex)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Free Action"><p>You automatically succeed at your Wisdom check to change your direction in an area of subjective gravity, and you can increase or decrease your falling speed by 10 feet per druid level during the first round after you change the direction of gravity.</p>
<p>When you are in areas of light, normal, or heavy gravity, activating this ability instead grants you a bonus equal to your druid level on Fly checks and <Link to="/skill/acrobatics">Acrobatics</Link> checks to jump for a number of rounds equal to your Wisdom modifier.</p>
</Pair>
</Ability>
<Ability id="wind-savant-su" extraClasses="hasSubs" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="wind-savant-su">Wind Savant (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Choice">You can choose between one of two options.</Pair>
</Ability>
<Ability id="wind-benefits" extraClasses="subAbility numbered" icon={["upgrade","armor-upgrade"]}>
<Pair single id="wind-benefits">Wind Benefits</Pair>
<Pair title="Passive Ability">You treat the penalties from natural or magical <Link to="/rule/wind">wind</Link> effects as two steps less severe. In addition, you are surrounded by a cushion of air that grants you a bonus equal to 1/2 your druid level on saving throws against gases, gaseous breath weapons, inhaled poisons, and similar effects.</Pair>
</Ability>
<Ability id="familiar" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You can choose to gain a <Link to="/monster/small_air_elemental">Small air elemental</Link> as a <Link to="/sidekick/familiar">familiar</Link> as if you possessed the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat. Your effective wizard level for this ability is equal to your druid level and stacks with other classes that grant a <Link to="/ability/familiar">familiar</Link>.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"feather fall","feather_fall"],[2,"elemental speech","elemental_speech"],[3,"fly","fly"],[4,"planar adaptation","planar_adaptation"],[5,"overland flight","overland_flight"],[6,"mass planar adaptation","mass_planar_adaptation"],[7,"mass fly","mass_fly"],[8,"mass invisibility","mass_invisibility"],[9,"winds of vengeance","winds_of_vengeance"]]}>Domain Spells</SpellList>
</>};
const _plane_of_earth = {title: "Plane of Earth", jsx: <><h2 id="druiddomain-plane_of_earth-plane-of-earth-domain">Plane of Earth Domain</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 6</Link></p>
<p><strong className="hl">Granted Powers:</strong> You can navigate the untold wonders of the <Link to="/rule/plane_of_earth">Plane of Earth</Link> with ease.</p>
<Ability id="wild-empathy" icon={["upgrade"]}>
<Pair single id="wild-empathy">Wild Empathy</Pair>
<Pair title="Info">You can use <Link to="/ability/wild_empathy">wild empathy</Link> to influence a creature with the earth subtype if its Intelligence score is 1 or 2.</Pair>
</Ability>
<Ability id="spelunker-su" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="spelunker-su" flavor="You ably clamber through underground areas.">Spelunker (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Free Action">You can ignore <Link to="/rule/difficult_terrain">difficult terrain</Link> from stony surfaces, you take no penalties for squeezing through rocky areas, and you gain damage reduction 5/- against rocky hazards such as <Link to="/spell/spike_growth">spike growth</Link>. This effect lasts for 1 round.</Pair>
</Ability>
<Ability id="one-with-the-stone-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="one-with-the-stone-su">One with the Stone (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Choice">You can choose between one of two options.</Pair>
</Ability>
<Ability id="earth-glide" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="earth-glide">Earth Glide</Pair>
<Pair title="Usage">1 round/day per druid level; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">You gain the <Link to="/umr/earth_glide">earth glide</Link> universal monster ability with a speed equal to your base speed. You can breathe normally while using this ability.</Pair>
</Ability>
<Ability id="familiar" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You can choose to gain a <Link to="/monster/small_earth_elemental">Small earth elemental</Link> as a <Link to="/sidekick/familiar">familiar</Link> as if you possessed the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat. Your effective wizard level for this ability is equal to your druid level and stacks with other classes that grant a <Link to="/ability/familiar">familiar</Link>.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"stone fist","stone_fist"],[2,"elemental speech","elemental_speech"],[3,"burrow","burrow"],[4,"planar adaptation","planar_adaptation"],[5,"passwall","passwall"],[6,"mass planar adaptation","mass_planar_adaptation"],[7,"stone to flesh","stone_to_flesh"],[8,"repel metal or stone","repel_metal_or_stone"],[9,"clashing rocks","clashing_rocks"]]}>Domain Spells</SpellList>
</>};
const _plane_of_fire = {title: "Plane of Fire", jsx: <><h2 id="druiddomain-plane_of_fire-plane-of-fire-domain">Plane of Fire Domain</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 7</Link></p>
<p><strong className="hl">Granted Powers:</strong> You embrace the destructive flames and ever-roaring volcanoes of the <Link to="/rule/plane_of_fire">Plane of Fire</Link>, having proven yourself impervious to its heat.</p>
<Ability id="wild-empathy" icon={["upgrade"]}>
<Pair single id="wild-empathy">Wild Empathy</Pair>
<Pair title="Info">You can use <Link to="/ability/wild_empathy">wild empathy</Link> to influence a creature with the fire subtype if its Intelligence score is 1 or 2.</Pair>
</Ability>
<Ability id="fire-hardened-ex" icon={["armor-upgrade"]}>
<Pair single id="fire-hardened-ex">Fire Hardened (Ex)</Pair>
<Pair title="Passive Ability">You ignore fire damage from the fire-dominant planar trait, and you gain fire resistance 5. If you have natural fire resistance, it increases by 5 instead, and if you are naturally immune to fire, you heal hit points and <Link to="/rule/ability_damage">ability damage</Link> at twice the normal rate when resting on a fire-dominant plane.</Pair>
<Pair title="Ability">You can touch a willing creature to grant these benefits for 1 hour.</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
</Ability>
<Ability id="all-consuming-flames-su" extraClasses="hasSubs" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="all-consuming-flames-su">All-Consuming Flames (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Choice">You can choose between one of two options.</Pair>
</Ability>
<Ability id="flaming-benefits" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="flaming-benefits">Flaming Benefits</Pair>
<Pair title="Usage">1 time/day + 1 per four druid levels beyond 8th</Pair>
<Pair title="Standard Action">You can channel the extraplanar heat into your allies' weapons within 30 feet. For 1 minute, the affected weapons gain the cold-outsider-<Link to="/magic-enh/bane">bane</Link>, fire-outsider-bane, or <Link to="/magic-enh/flaming">flaming</Link> weapon special abilities. You must grant each weapon the same ability, and this ability affects no more than two of any ally's weapons.</Pair>
</Ability>
<Ability id="familiar" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You can choose to gain a <Link to="/monster/small_fire_elemental">Small fire elemental</Link> as a <Link to="/sidekick/familiar">familiar</Link>. as if you possessed the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat. Your effective wizard level for this ability is equal to your druid level and stacks with other classes that grant a <Link to="/ability/familiar">familiar</Link>.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"obscuring mist","obscuring_mist",<>creates smoke</>],[2,"elemental speech","elemental_speech"],[3,"ash storm","ash_storm"],[4,"planar adaptation","planar_adaptation"],[5,"scorching ash form","scorching_ash_form"],[6,"mass planar adaptation","mass_planar_adaptation"],[7,"delayed blast fireball","delayed_blast_fireball"],[8,"destruction","destruction"],[9,"fiery body","fiery_body"]]}>Domain Spells</SpellList>
</>};
const _plane_of_water = {title: "Plane of Water", jsx: <><h2 id="druiddomain-plane_of_water-plane-of-water-domain">Plane of Water Domain</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 7</Link></p>
<p><strong className="hl">Granted Powers:</strong> You are at one with the Plane of Water, able to navigate it and weaponize it at will.</p>
<Ability id="wild-empathy" icon={["upgrade"]}>
<Pair single id="wild-empathy">Wild Empathy</Pair>
<Pair title="Info">You can use <Link to="/ability/wild_empathy">wild empathy</Link> to influence a creature with the water subtype if its Intelligence score is 1 or 2.</Pair>
</Ability>
<Ability id="aquatic-veil-su" icon={["upgrade"]}>
<Pair single id="aquatic-veil-su">Aquatic Veil (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can sheathe your body in a thin layer of water for a number of rounds equal to your Wisdom modifier. This grants you a bonus on <Link to="/skill/swim">Swim</Link> checks equal to 1/2 your druid level and allows you to breathe normally underwater. You can end the effect when delivering a touch spell to create a pseudopod of water that extends your effective reach by 5 feet for that attack. When used underwater, the pseudopod instead increases your reach by 10 feet.</Pair>
</Ability>
<Ability id="hydraulic-crush-su" extraClasses="hasSubs" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="hydraulic-crush-su">Hydraulic Crush (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Choice">You can choose between one of two options.</Pair>
</Ability>
<Ability id="crushing-strike" extraClasses="subAbility numbered" icon={["bowman","armor-downgrade"]}>
<Pair single id="crushing-strike">Crushing Strike</Pair>
<Pair title="Usage">1 time/day + 1 per six druid levels beyond 8th</Pair>
<Pair title="Passive Ability"><p>You can strike an area with a pressurized blast of water in a 5-foot-radius column 30 feet tall with a range of 60 feet. Creatures in the area take 1d6 bludgeoning damage per druid level and are knocked <Link to="/rule/prone">prone</Link>.</p>
<p>When used underwater, the radius and height double, and the effect instead creates a powerful eddy that causes affected creatures to lose their Dexterity bonus to Armor Class for 1 round instead of knocking them prone.</p>
<p>A successful Reflex save halves the damage and prevents the secondary effect.</p>
</Pair>
</Ability>
<Ability id="familiar" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="familiar">Familiar</Pair>
<Pair title="Ability">You can choose to gain a <Link to="/monster/small_water_elemental">Small water elemental</Link> as a <Link to="/sidekick/familiar">familiar</Link>. as if you possessed the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat. Your effective wizard level for this ability is equal to your druid level and stacks with other classes that grant a <Link to="/ability/familiar">familiar</Link>.</Pair>
</Ability>
<SpellList id="domain-spells" links={[[1,"touch of the sea","touch_of_the_sea"],[2,"elemental speech","elemental_speech"],[3,"water breathing","water_breathing"],[4,"planar adaptation","planar_adaptation"],[5,"solid fog","solid_fog",<>functions underwater</>],[6,"mass planar adaptation","mass_planar_adaptation"],[7,"fluid form","fluid_form"],[8,"seamantle","seamantle"],[9,"tsunami","tsunami"]]}>Domain Spells</SpellList>
</>};
const _ruins = {title: "Ruins", jsx: <><h2 id="druiddomain-ruins-ruins-domain">Ruins Domain</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex pg. 35</Link></p>
<p><strong>Granted Powers:</strong> You sense nature's creeping reclamation of what once belonged to the civilized world and understand how to ensure ruins that hold power or significance will persist.</p>
<p><strong>Ruin Touch (Su):</strong> You can strengthen or weaken objects with your touch. With a melee touch attack, you can increase or decrease the hardness of an object (up to a 10-foot cube) or construct by an amount equal to half your druid level (minimum 1) for 1 minute. You cannot reduce an object's hardness below 0, and the same target cannot be affected by this ability more than once. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>
<p><strong>Remembrance (Sp):</strong> At 4th level, when within a ruin or other structure that is no longer claimed by civilization, you can call upon the wisdom of the land and its long-dead residents. Once per day for every 4 druid levels you possess, you can cast <Link to="/spell/divination">divination</Link> as a spell-like ability. Additionally, if you are within ruins when you cast <Link to="/spell/commune_with_nature">commune with nature</Link>, you gain information about the crumbling structures around you as though they were part of nature.</p>
<p><strong>Surefooted (Ex):</strong> At 8th level, your speed is not reduced by <Link to="/rule/difficult_terrain">difficult terrain</Link> unless the terrain has been magically manipulated to impede motion.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/magic_stone">magic stone</Link>, 2nd-<Link to="/spell/stone_call">stone call</Link>, 3rd-<Link to="/spell/meld_into_stone">meld into stone</Link>, 4th-<Link to="/spell/rusting_grasp">rusting grasp</Link>, 5th-<em>commune with nature,</em> 6th-<Link to="/spell/stone_tell">stone tell</Link>, 7th-<Link to="/spell/statue">statue</Link>, 8th-<Link to="/spell/earthquake">earthquake</Link>, 9th-<Link to="/spell/clashing_rocks">clashing rocks</Link>.</p>
</>};
const _serpent = {title: "Serpent", jsx: <><h2 id="druiddomain-serpent-serpent-domain">Serpent Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 35</Link></p>
<p><strong>Granted Powers:</strong> You serve ancient serpentine mysteries whose coils still encircle the world.</p>
<p><strong>Familiar:</strong> You gain a <Link to="/monster/viper">viper</Link> <Link to="/sidekick/familiar">familiar</Link>. Your effective wizard level for this ability is equal to your druid level. Your druid level stacks with levels from other classes that grant familiars when determining the powers of your familiar.</p>
<p><strong>Slither (Ex):</strong> As a free action, you can distend and stretch your body to fit easily through narrow spaces for 1 round. You can move freely through a tight space that would normally require a creature of your size to <Link to="/misc/squeeze">squeeze</Link> through. While slithering, you gain a +2 dodge bonus to Armor Class against attacks of opportunity provoked by your movement and a +2 bonus on CMB and on Escape Artist checks made to escape from a grapple. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>
<p><strong>Venom Immunity (Ex):</strong> At 6th level, you gain immunity to poisons from snakes, reptiles, and creatures with the reptilian subtype. At 12th level, you gain immunity to all poisons.</p>
<p>This replaces <strong className="hl">venom immunity</strong>.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/charm_animal">charm animal</Link>, 2nd-<Link to="/spell/animal_trance">animal trance</Link>, 3rd-<Link to="/spell/poison">poison</Link>, 4th-<Link to="/spell/strong_jaw">strong jaw</Link>, 5th-<Link to="/spell/snake_staff">snake staff</Link>, 6th-<Link to="/spell/charm_monster">charm monster</Link>, 7th-<Link to="/spell/animal_shapes">animal shapes</Link> (reptiles and snakes only), 8th-<Link to="/spell/scintillating_pattern">scintillating pattern</Link>, 9th-<Link to="/spell/crushing_hand">crushing hand</Link>.</p>
</>};
const _swamp = {title: "Swamp", jsx: <><h2 id="druiddomain-swamp-swamp-domain">Swamp Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 35</Link></p>
<p><strong>Granted Powers:</strong> The sour-sweet depths of bogs, marshes, and swamps are your places of power.</p>
<p><strong>Natural Healing (Su):</strong> You can <Link to="/ability/channel_energy">channel energy</Link> (as a cleric of your druid level) a number of times per day equal to 3 + your Charisma modifier, but only to heal animals, plants, and vermin. You may reduce the number of dice healed to cure ability damage (your choice) to all affected creatures, curing 1 point of ability damage for each d6 that the channel energy is reduced. You can take other feats to add to this ability, such as <Link to="/feat/extra_channel">Extra Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/elemental_channel">Elemental Channel</Link> and <Link to="/feat/alignment_channel">Alignment Channel</Link>.</p>
<p><strong>Reed Hunter (Ex):</strong> At 6th level, you gain <Link to="/umr/blindsense">blindsense</Link> 30 feet with respect to <Link to="/rule/concealment">concealment</Link> and <Link to="/rule/cover">cover</Link> from fog, vegetation, or water. At 12th level, this improves to <Link to="/umr/blindsight">blindsight</Link> 30 feet with respect to these conditions.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/hydraulic_push">hydraulic push</Link>, 2nd-<Link to="/spell/burst_of_nettles">burst of nettles</Link>, 3rd-<Link to="/spell/lily_pad_stride">lily pad stride</Link>, 4th-<Link to="/spell/cape_of_wasps">cape of wasps</Link>, 5th-<Link to="/spell/insect_plague">insect plague</Link>, 6th-<Link to="/spell/mass_fester">mass fester</Link>, 7th-<Link to="/spell/animate_plants">animate plants</Link>, 8th-<Link to="/spell/blood_mist">blood mist</Link>, 9th-<Link to="/spell/shambler">shambler</Link>.</p>
</>};
const _the_uskbond = {title: "The Uskbond", jsx: <><h2 id="druiddomain-the_uskbond-the-uskbond-domain">The Uskbond Domain</h2>
<p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 45</Link></p>
<p><strong>Granted Powers:</strong> The Uskbond functions as a unique domain with the granted powers and domain spells below. A druid who takes the Uskbond must be neutral evil and worship <Link to="/faith/zon_kuthon">Zon-Kuthon</Link>. A druid who has taken an archetype that alters or replaces nature bond cannot take the Uskbond.</p>
<p><strong>Absorb Pain (Su):</strong> Whenever you take lethal damage, you can choose as an immediate action to convert a number of points of this damage equal to 1d6 + your Wisdom modifier into nonlethal damage. When you use this ability, you gain a +4 profane bonus on all saving throws versus pain effects during the following round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>
<p><strong>Gruesome Display (Ex):</strong> At 8th level, as a standard action you can alter your appearance in such intense, horrific ways that onlookers become <Link to="/misc/nauseated">nauseated</Link>. One creature you select within 30 feet who can see you must succeed at a Will save (DC = 10 + 1/2 your druid level + your Wisdom modifier) or be nauseated for a number of rounds equal to 1/2 your druid level. Every 2 levels beyond 8th, you can affect one additional creature, to a maximum of seven targets within 30 feet at 20th level. Each time you activate your gruesome display, you must affect at least one target, but you can choose to affect fewer targets than your maximum. Once you've targeted the maximum number of creatures granted by level (regardless of whether they successfully save to resist the effect or not), you cannot use gruesome display again for the remainder of the day. This is a mind-affecting fear effect.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/delay_pain">delay pain</Link>, 2nd-<Link to="/spell/lesser_curse_terrain">lesser curse terrain</Link>, 3rd-<Link to="/spell/excruciating_deformation">excruciating deformation</Link>, 4th-<Link to="/spell/curse_terrain">curse terrain</Link>, 5th-<Link to="/spell/symbol_of_pain">symbol of pain</Link>, 6th-<Link to="/spell/greater_curse_terrain">greater curse terrain</Link>, 7th-<Link to="/spell/verminous_transformation">verminous transformation</Link>, 8th-<Link to="/spell/supreme_curse_terrain">supreme curse terrain</Link>, 9th-<Link to="/spell/maze_of_madness_and_suffering">maze of madness and suffering</Link> (haunted forest only).</p>
</>};
const _vermin = {title: "Vermin", jsx: <><h2 id="druiddomain-vermin-vermin-domain">Vermin Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 46</Link>, <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex pg. 35</Link></p>
<p><strong>Granted Powers:</strong> You see the perfection of nature in the spindly limbs and strange forms of all vermin, great and small alike.</p>
<p><strong>Vermin Whisperer (Su):</strong> You can use your <Link to="/ability/wild_empathy">wild empathy</Link> ability on vermin. When you do so, you impart a modicum of implanted intelligence on the vermin, allowing you to interact with vermin as if they were animals. Vermin whisperer functions only on vermin that are mindless or have an Intelligence score of 2 or lower.</p>
<p><strong>Sudden Sting (Su):</strong> At 8th level, you can inflict a lingering, painful sting as a swift action that requires a successful melee touch attack. This sting deals 1d4 points of piercing damage plus 1 point for every 2 druid levels you have, and the target must succeed at a Fortitude save (DC = 10 + half your druid level + your Constitution modifier) or become staggered for 1 round. This is a pain effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/ant_haul">ant haul</Link>, 2nd-<Link to="/spell/summon_swarm">summon swarm</Link>, 3rd-<Link to="/spell/vermin_shape_i">vermin shape I</Link>, 4th-<Link to="/spell/vermin_shape_ii">vermin shape II</Link>, 5th-<Link to="/spell/insect_plague">insect plague</Link>, 6th-<Link to="/spell/swarm_skin">swarm skin</Link>, 7th-<Link to="/spell/creeping_doom">creeping doom</Link>, 8th-<Link to="/spell/verminous_transformation">verminous transformation</Link>, 9th-<Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link> (1d3 purple worms only).</p>
</>};
const _vulture = {title: "Vulture", jsx: <><h2 id="druiddomain-vulture-vulture-domain">Vulture Domain</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 25</Link></p>
<p><strong>Granted Powers:</strong> Yours is the power of death and rebirth. Your spirit soars above all and moves with the flow of unseen currents.</p>
<p><strong>Death's Companion (Ex):</strong> Your totem grants you protection from the harbingers of death. As an immediate action, you gain a +2 bonus on saving throws against disease, death spells, and death effects that lasts a number of rounds equal to your druid level. This bonus increases by 2 at 6th level and every 5 levels thereafter, to a maximum of +8 at 16th level. You may use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>
<p><strong>Agent of Rebirth (Sp):</strong> At 8th level, you may expend a quantity of special oils worth 1,000 gp to cast <Link to="/spell/reincarnate">reincarnate</Link> as a spell-like ability usable once per day. Additionally, when using this ability or casting reincarnate as a prepared spell, you have some influence over the physical form that the reincarnated spirit will take. When rolling against the spell's incarnation table, you may roll twice and choose between the two results.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/deathwatch">deathwatch</Link>, 2nd-<Link to="/spell/glide">glide</Link>, 3rd-<Link to="/spell/death_knell">death knell</Link>, 4th-<Link to="/spell/death_ward">death ward</Link>, 5th-<Link to="/spell/breath_of_life">breath of life</Link>, 6th-<Link to="/spell/circle_of_death">circle of death</Link>, 7th-<Link to="/spell/resurrection">resurrection</Link>, 8th-<Link to="/spell/finger_of_death">finger of death</Link>, 9th-<Link to="/spell/winds_of_vengeance">winds of vengeance</Link>.</p>
</>};
const _wolf = {title: "Wolf", jsx: <><h2 id="druiddomain-wolf-wolf-domain">Wolf Domain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link></p>
<p><strong>Granted Powers:</strong> You run with the pack and are the master of the cold hunt of your spirit totem.</p>
<p><strong>Improved Trip:</strong> You gain <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat.</p>
<p><strong>Pack Tactics (Ex):</strong> At 8th level, as a free action on your turn, you can designate an adjacent square; your attacks are treated as coming from that square for the purposes of determining whether or not you are flanking (this applies even if that square is occupied by an object or creature). This ends at the start of your next turn or if you move. If you are flanking a creature without using this ability, you may add your Wisdom bonus to your attack roll rather than the normal +2 flanking bonus. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>
<p><strong>Domain Spells:</strong> 1st-<Link to="/spell/hunters_howl">hunter's howl</Link>, 2nd-<Link to="/spell/bloodhound">bloodhound</Link>, 3rd-<Link to="/spell/aspect_of_the_wolf">aspect of the wolf</Link>, 4th-<Link to="/spell/strong_jaw">strong jaw</Link>, 5th-<Link to="/spell/tireless_pursuers">tireless pursuers</Link>, 6th-<Link to="/spell/find_the_path">find the path</Link>, 7th-<Link to="/spell/animal_shapes">animal shapes</Link> (canines only), 8th-<Link to="/spell/phantasmal_revenge">phantasmal revenge</Link>, 9th-<Link to="/spell/freedom">freedom</Link>.</p>
</>};
export default {not_found:_not_found,aquatic:_aquatic,arctic:_arctic,badlands:_badlands,cave:_cave,crocodile:_crocodile,desert:_desert,eagle:_eagle,erosion:_erosion,frog:_frog,jungle:_jungle,monkey:_monkey,mountain:_mountain,panther:_panther,plains:_plains,plane_of_air:_plane_of_air,plane_of_earth:_plane_of_earth,plane_of_fire:_plane_of_fire,plane_of_water:_plane_of_water,ruins:_ruins,serpent:_serpent,swamp:_swamp,the_uskbond:_the_uskbond,vermin:_vermin,vulture:_vulture,wolf:_wolf}