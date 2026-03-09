import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="companion-not_found-error">Error</h2>
<p>Unable to find the requested animal companion.</p>
</>};
const _amargasaurus = {title: "Amargasaurus", jsx: <><h2 id="companion-amargasaurus-amargasaurus">Amargasaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/amargasaurus">Amargasaurus</Link></p>
<p>This sauropod has an elongated neck and a long, tapering tail.</p>
<h3 id="companion-amargasaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> slam (1d6), tail slap (1d6)<br/><strong>Ability Scores</strong> Str 11, Dex 18, Con 9, Int 2, Wis 13, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-amargasaurus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> slam (1d8), tail slap (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _anglerfish = {title: "Anglerfish", jsx: <><h2 id="companion-anglerfish-anglerfish">Anglerfish</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link><br/><strong>Companion Type</strong> Animal</p>
<p>The anglerfish is a fish that uses a bioluminescent lure at the tip of a stalk protruding from its head to attract prey.</p>
<h3 id="companion-anglerfish-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> swim 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d8 plus grab)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 12, Int 1, Wis 12, Cha 2<br/><strong>Special Qualities</strong> aquatic, <Link to="/umr/grab">grab</Link> (Medium), low-light vision, lure (sheds light as per a <Link to="/eq-misc/candle">candle</Link>), <Link to="/umr/scent">scent</Link></p>
</blockquote>
<p><em>There are no rules for the lure ability specifically tied to the anglerfish, but a "Lure" ability exists for <Link to="/monster/ceratioidi">ceratioidi</Link> and <Link to="/monster/sea_linnorm">sea linnorms</Link> that is very anglerfish-themed.</em></p>
<h3 id="companion-anglerfish-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6 plus grab)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +4<br/><strong>Special Qualities</strong> grab (Large), <Link to="/umr/swallow_whole">swallow whole</Link> (Medium)</p>
</blockquote>
</>};
const _ant_giant = {title: "Giant Ant", jsx: <><h2 id="companion-ant_giant-giant-ant">Giant Ant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_ant">Giant Ant</Link></p>
<p>A thin, six-legged ant the size of a pony stands at the ready, its mandibles chittering and its stinger dripping with venom.</p>
<h3 id="companion-ant_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4 plus grab)<br/><strong>Ability Scores</strong> Str 10, Dex 12, Con 15, Int -, Wis 12, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link><br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<h3 id="companion-ant_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6 plus grab), sting (1d4 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link></p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-ant_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></>};
const _antelope = {title: "Antelope", jsx: <><h2 id="companion-antelope-antelope">Antelope</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/antelope">Antelope</Link></p>
<p>This graceful animal has long slender legs and a pair of sharp, sturdy horns arching back from its head.</p>
<h3 id="companion-antelope-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 14, Int 2, Wis 13, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-antelope-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (gore, 2d4)</p>
</blockquote>
</>};
const _ape = {title: "Ape", jsx: <><h2 id="companion-ape-ape">Ape</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/gorilla">Ape</Link></p>
<p>Large, deep-set eyes peer from beneath this great ape's thick brow as it lumbers forward on its legs and knuckles.</p>
<h3 id="companion-ape-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 10, Int 2, Wis 12, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-ape-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _archaeopteryx = {title: "Archaeopteryx", jsx: <><h2 id="companion-archaeopteryx-archaeopteryx">Archaeopteryx</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/archaeopteryx">Archaeopteryx</Link></p>
<p>This primeval toothed bird has bright plumage, but it is a relatively poor flyer.</p>
<h3 id="companion-archaeopteryx-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., fly 40 ft. (poor)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 8, Dex 15, Con 12, Int 2, Wis 13, Cha 7<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-archaeopteryx-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Dex +2, Con +2</p>
</blockquote>
</>};
const _armorfish = {title: "Armorfish", jsx: <><h2 id="companion-armorfish-armorfish">Armorfish</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link><br/><strong>Companion Type</strong> Animal</p>
<p>The armorfish is a primeval aquatic creature that has exceptionally thick armored scales along its head and back.</p>
<h3 id="companion-armorfish-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> swim 30 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 13, Con 15, Int 1, Wis 8, Cha 2<br/><strong>Special Qualities</strong> aquatic, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-armorfish-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +4</p>
</blockquote>
</>};
const _assassin_bug_giant = {title: "Giant Assassin Bug", jsx: <><h2 id="companion-assassin_bug_giant-giant-assassin-bug">Giant Assassin Bug</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_assassin_bug">Giant Assassin Bug</Link></p>
<p>This long-legged, beetle-like insect can spew a stream of poison at its foes from a distance.</p>
<h3 id="companion-assassin_bug_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., fly 30 ft. (clumsy)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4 plus poison), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 13, Int -, Wis 10, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below), poison stream (exposes all creatures in a 15-ft. line to poison, Reflex save negates; Dex-based DC; usable every 1d4 rounds as a standard action)<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +8 vs. trip</p>
<div className="sideNoteWrap"><ScrollContainer id="companion-assassin_bug_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-assassin_bug_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6 plus poison), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> poison (same as above, but cure becomes 2 saves)</p>
</blockquote>
</>};
const _aurochs = {title: "Aurochs", jsx: <><h2 id="companion-aurochs-aurochs">Aurochs</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 174</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/aurochs">Aurochs</Link></p>
<p>This large, horned bull has a dirty black hide and an aggressive temper. Its horns are wide and sharp.</p>
<h3 id="companion-aurochs-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-aurochs-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">stampede, trample</Link></p>
</blockquote>
<p>Bison companions are identical to aurochs animal companions.</p>
</>};
const _axe_beak = {title: "Axe Beak", jsx: <><h2 id="companion-axe_beak-axe-beak">Axe Beak</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/axe_beak">Axe Beak</Link></p>
<p>This stout bird stands upon two long, muscular legs, each ending in a large, curved talon. A pair of undersized wings sprouts from amid its broad body feathers, as does a powerful neck ending in an avian head armed with a grisly serrated beak.</p>
<h3 id="companion-axe_beak-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>Attack</strong> bite (1d6 + 1-1/2 Str)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 12, Int 2, Wis 11, Cha 10<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-axe_beak-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 + 1-1/2 Str)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> sudden charge</p>
</blockquote>
</>};
const _baboon = {title: "Baboon", jsx: <><h2 id="companion-baboon-baboon">Baboon</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 212</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/baboon">Baboon</Link></p>
<p>A hairy, stout animal with opposable thumbs, this creature has a pronounced muzzle and bright red buttocks.</p>
<h3 id="companion-baboon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 12, Int 2, Wis 12, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-baboon-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _bacallia = {title: "Bacallia", jsx: <><h2 id="companion-bacallia-bacallia">Bacallia</h2>
<p><strong>Sources</strong> <Link to="/source/druma_profit_and_prophecy">Druma, Profit and Prophecy pg. 62</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/bacallia">Bacallia</Link></p>
<p>This animal resembles an alpaca with voluminous, shiny wool.</p>
<h3 id="companion-bacallia-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 13, Con 13, Int 2, Wis 12, Cha 13<br/><strong>Special Attacks</strong> spit<br/><strong>Special Qualities</strong> low-light vision, pristine wool</p>
</blockquote>
<h3 id="companion-bacallia-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> Aura: dazzling (10 ft.)<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/nimble_moves">Nimble Moves</Link></p>
</blockquote>
</>};
const _badger = {title: "Badger (Wolverine)", jsx: <><h2 id="companion-badger-badger-wolverine">Badger (Wolverine)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> [<Link to="/monster/wolverine">Wolverine</Link>]</p>
<p>This stocky, muscular mammal is the size of a badger, its snarling lips revealing a mouth full of yellow teeth.</p>
<h3 id="companion-badger-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., burrow 10 ft., climb 10 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 15, Int 2, Wis 12, Cha 10<br/><strong>Special Attacks</strong> rage (as a <Link to="/class/barbarian">barbarian</Link> for 6 rounds per day)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-badger-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _bear = {title: "Bear", jsx: <><h2 id="companion-bear-bear">Bear</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/grizzly_bear">Grizzly Bear</Link></p>
<p>Broad, powerful muscles move beneath this massive bear's brown fur, promising both speed and lethal force.</p>
<h3 id="companion-bear-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-bear-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _beetle_giant = {title: "Giant Beetle", jsx: <><h2 id="companion-beetle_giant-giant-beetle">Giant Beetle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_stag_beetle">Giant Stag Beetle</Link></p>
<p>With a sleek body and huge mandibles raised in a threatening pose, this large beetle stands firm in defense of its territory.</p>
<h3 id="companion-beetle_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., fly 20 ft. (poor)<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 12, Con 13, Int -, Wis 11, Cha 4<br/><strong>Special Qualities</strong> darkvision<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<h3 id="companion-beetle_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link> (1d4)</p>
</blockquote>
</>};
const _bird = {title: "Bird (Eagle, Hawk, Owl)", jsx: <><h2 id="companion-bird-bird-eagle-hawk-owl">Bird (Eagle, Hawk, Owl)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/eagle">Eagle</Link>, <Link to="/monster/hawk">Hawk</Link>, <Link to="/monster/owl">Owl</Link></p>
<p>This magnificent bird of prey has dark feathers save for those on its head, which are pure white.</p>
<h3 id="companion-bird-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., fly 80 ft. (average)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 talons (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 12, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-bird-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _blackwisp_egret = {title: "Blackwisp Egret", jsx: <><h2 id="companion-blackwisp_egret-blackwisp-egret">Blackwisp Egret</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/blackwisp_egret">Blackwisp Egret</Link></p>
<p>This jet-black bird has a long, hooked beak. Its piercing orange eyes reflect any light that hits them, making them appear to glow ominously.</p>
<h3 id="companion-blackwisp_egret-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., fly 30 ft. (poor)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 8, Dex 17, Con 8, Int 2, Wis 13, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-blackwisp_egret-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> deceptive target</p>
</blockquote>
</>};
const _blue_whale = {title: "Blue Whale", jsx: <><h2 id="companion-blue_whale-blue-whale">Blue Whale</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/blue_whale">Blue Whale</Link></p>
<p>This massive aquatic mammal has bluish-gray coloration, a wide fluke tail, and a wide mouth filled with layers of baleen.</p>
<h3 id="companion-blue_whale-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 80 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> tail slap (1d8)<br/><strong>Ability Scores</strong> Str 11, Dex 19, Con 10, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link></p>
</blockquote>
<h3 id="companion-blue_whale-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail slap (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _boar = {title: "Boar", jsx: <><h2 id="companion-boar-boar">Boar</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/boar">Boar</Link></p>
<p>This ill-tempered beast's tiny, bloodshot eyes glare angrily above a mouth filled with sharp tusks.</p>
<h3 id="companion-boar-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 12, Con 15, Int 2, Wis 13, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-boar-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/ferocity">ferocity</Link></p>
</blockquote>
</>};
const _bristle_boar = {title: "Bristle Boar", jsx: <><h2 id="companion-bristle_boar-bristle-boar">Bristle Boar</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/bristle_boar">Bristle Boar</Link></p>
<p>The vicious spines surrounding this boar's head are almost as unnerving as the wild look in its eyes.</p>
<h3 id="companion-bristle_boar-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 10, Con 15, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-bristle_boar-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> spines (Those hit by a bristle boar's gore attack must succeed at a Reflex saving throw to avoid being speared by the dangerously sharp spines around its head and neck. Failure results in 1d4 points of piercing damage.)</p>
</blockquote>
</>};
const _brontotherium = {title: "Brontotherium", jsx: <><h2 id="companion-brontotherium-brontotherium">Brontotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/brontotherium">Brontotherium (Megafauna)</Link></p>
<p>This stocky quadruped's lowered head puts its intimidating Y-shaped horn on full display.</p>
<h3 id="companion-brontotherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +8 natural armor<br/><strong>Attack</strong> slam (1d10)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 12, Int 2, Wis 17, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-brontotherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> slam (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (slam), <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _bull_of_zagresh = {title: "Bull of Zagresh", jsx: <><h2 id="companion-bull_of_zagresh-bull-of-zagresh">Bull of Zagresh</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/bull_of_zagresh">Bull of Zagresh</Link></p>
<p>This immense bovine has horns reminiscent of a stag, with dagger-like points spreading more than fifteen feet across.</p>
<h3 id="companion-bull_of_zagresh-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 15, Dex 14, Con 13, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-bull_of_zagresh-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _bustard = {title: "Bustard", jsx: <><h2 id="companion-bustard-bustard">Bustard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link><br/><strong>Companion Type</strong> Animal</p>
<p>The bustard is a sizable bird with long legs. Bustards can fly, but they do so relatively poorly and prefer to walk or run.</p>
<h3 id="companion-bustard-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., fly 50 ft. (poor)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), 2 talons (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 13, Int 2, Wis 13, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-bustard-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _camel = {title: "Camel", jsx: <><h2 id="companion-camel-camel">Camel</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/camel">Camel</Link></p>
<p>This somewhat irritated-looking, one-humped camel has been outfitted with a bridle and saddle.</p>
<h3 id="companion-camel-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4) or spit (ranged touch attack, target is <Link to="/misc/sickened">sickened</Link> for 1d4 rounds, range 10 feet)<br/><strong>Ability Scores</strong> Str 18, Dex 16, Con 14, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-camel-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _cameroceras = {title: "Cameroceras", jsx: <><h2 id="companion-cameroceras-cameroceras">Cameroceras</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/cameroceras">Cameroceras</Link></p>
<p>Emerging from the open end of a long, conical shell, this huge creature's unblinking eyes peer from above a mass of tentacles.</p>
<h3 id="companion-cameroceras-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 5 ft., swim 20 ft., jet 90 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> tentalces (1d4 plus grab), bite (1d3)<br/><strong>Ability Scores</strong> Str 14, Dex 15, Con 11, Int 2, Wis 12, Cha 2<br/><strong>Special Qualities</strong> low-light vision, pressure adaptation</p>
</blockquote>
<h3 id="companion-cameroceras-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tentacles (1d6 plus grab), bite (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> (1d6)</p>
</blockquote>
</>};
const _capybara = {title: "Capybara", jsx: <><h2 id="companion-capybara-capybara">Capybara</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/donkey_rat">Donkey Rat</Link></p>
<p>This large, brown-furred rodent is equally at home on land or in the water, and is often found near lakes and rivers.</p>
<h3 id="companion-capybara-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., swim 20 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 12, Int 2, Wis 13, Cha 5<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-capybara-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _cat_big = {title: "Cat, Big (Lion, Tiger)", jsx: <><h2 id="companion-cat_big-cat-big-lion-tiger">Cat, Big (Lion, Tiger)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/lion">Lion</Link>, <Link to="/monster/tiger">Tiger</Link></p>
<p>This great cat's muscles flex visibly under its skin as it bares its fangs and shakes its thick mane of hair.</p>
<h3 id="companion-cat_big-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 13, Int 2, Wis 15, Cha 10<br/><strong>Special Attacks</strong> <Link to="/umr/rake">rake</Link> (1d4)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-cat_big-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link>, rake (1d6)</p>
</blockquote>
</>};
const _cat_small_cheetah_leopard = {title: "Cat, Small (Cheetah, Leopard)", jsx: <><h2 id="companion-cat_small_cheetah_leopard-cat-small-cheetah-leopard">Cat, Small (Cheetah, Leopard)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/cheetah">Cheetah</Link>, <Link to="/monster/leopard">Leopard</Link></p>
<p>This large, sleek feline has a golden coat spotted with black. Its long and powerful legs are obviously capable of great speed.</p>
<h3 id="companion-cat_small_cheetah_leopard-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4 plus <Link to="/umr/trip">trip</Link>), 2 claws (1d2)<br/><strong>Ability Scores</strong> Str 12, Dex 21, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-cat_small_cheetah_leopard-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6 plus trip), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> sprint</p>
</blockquote>
</>};
const _caterpillar_giant = {title: "Giant Caterpillar", jsx: <><h2 id="companion-caterpillar_giant-giant-caterpillar">Giant Caterpillar</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/blood_caterpillar">Blood Caterpillar</Link></p>
<p>This many-legged worm-like creature is a larval form of a moth or butterfly, but as long as it remains a vermin companion, it will not go through this metamorphosis.</p>
<h3 id="companion-caterpillar_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft. climb 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), bristles (secondary natural attack, 1d4 piercing plus poison)<br/><strong>Ability Scores</strong> Str 14, Dex 13, Con 13, Int -, Wis 11, Cha 2<br/><strong>Special Attacks</strong> bristles (a creature attacking the giant caterpillar with a natural attack or non-reach melee weapon must succeed at a Reflex save or take damage as if the caterpillar had struck the creature with its bristles attack; Dex-based DC with a +2 racial bonus), <Link to="/umr/poison">poison</Link> (see below)<br/><strong>Special Qualities</strong> <Link to="/umr/compression">compression</Link>, darkvision 60 ft.<br/><strong>CMD</strong> can't be tripped</p>
<div className="sideNoteWrap"><ScrollContainer id="companion-caterpillar_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-caterpillar_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d8), bristles (secondary natural attack, 1d6 piercing plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _cattle = {title: "Cattle", jsx: <><h2 id="companion-cattle-cattle">Cattle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/aurochs">Cattle</Link></p>
<p>Commonly seen as a docile farm animal, an ill-tempered bull or cow can be an effective animal companion as well.</p>
<h3 id="companion-cattle-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-cattle-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (gore, 1d8), <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _cave_salamander = {title: "Cave Salamander", jsx: <><h2 id="companion-cave_salamander-cave-salamander">Cave Salamander</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 128</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/monitor_lizard">Monitor Lizard</Link></p>
<p>This immense lizard moves with a slow but relentless gait. Its feet end in large talons, and ropes of drool hang from its toothy maw.</p>
<h3 id="companion-cave_salamander-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 12, Con 13, Int 1, Wis 12, Cha 4<br/><strong>Special Qualities</strong> darkvision 60 ft.</p>
</blockquote>
<h3 id="companion-cave_salamander-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> combat training (see <Link to="/skill/handle_animal">Handle Animal</Link>)</p>
</blockquote>
</>};
const _centipede_giant = {title: "Giant Centipede", jsx: <><h2 id="companion-centipede_giant-giant-centipede">Giant Centipede</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_centipede">Giant Centipede</Link></p>
<p>This lengthy, segmented horror writhes and twists, pulsing its venomous mandibles in search of prey.</p>
<h3 id="companion-centipede_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., climb 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 8, Dex 17, Con 11, Int -, Wis 10, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> darkvision 60 ft<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-centipede_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-centipede_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _ceratosaurus = {title: "Ceratosaurus", jsx: <><h2 id="companion-ceratosaurus-ceratosaurus">Ceratosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/ceratosaurus">Ceratosaurus</Link></p>
<p>Blade-like horns jut from the snout and eye ridges of this toothy, bipedal dinosaur.</p>
<h3 id="companion-ceratosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 17, Con 11, Int 2, Wis 11, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link>, <Link to="/umr/trip">trip</Link></p>
</blockquote>
<h3 id="companion-ceratosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/blood_rage">blood rage</Link>, <Link to="/umr/ferocity">ferocity</Link></p>
</blockquote>
</>};
const _chalicotherium = {title: "Chalicotherium", jsx: <><h2 id="companion-chalicotherium-chalicotherium">Chalicotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link>, <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 86</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/chalicotherium">Chalicotherium (Megafauna)</Link></p>
<p>This huge, rather slow-moving and sloth-like creature has long, clawed forelimbs and short rear legs.</p>
<h3 id="companion-chalicotherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 14, Con 13, Int 2, Wis 13, Cha 3<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-chalicotherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/rend">rend</Link> (2 claws, 1d6)</p>
</blockquote>
</>};
const _chimpanzee = {title: "Chimpanzee", jsx: <><h2 id="companion-chimpanzee-chimpanzee">Chimpanzee</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/gorilla">Gorilla</Link> with the <Link to="/template/young">young</Link> template</p>
<p>This small primate is more dangerous than its size suggests.</p>
<h3 id="companion-chimpanzee-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), slam (1d4 plus grab)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-chimpanzee-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6), slam (1d4 plus grab)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _cockroach_giant = {title: "Giant Cockroach", jsx: <><h2 id="companion-cockroach_giant-giant-cockroach">Giant Cockroach</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_cockroach">Giant Cockroach</Link></p>
<p>Swift and unsettling, the giant cockroach is notoriously difficult to slay. These creatures prefer dark places and seem to have no opposition to crawling through filth.</p>
<h3 id="companion-cockroach_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 30 ft., fly 20 ft. (poor)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 9, Dex 10, Con 17, Int -, Wis 11, Cha 2<br/><strong>Special Qualities</strong> darkvision 60 ft., <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/light_sensitivity">light sensitivity</Link>, <Link to="/umr/tremorsense">tremorsense</Link> 60 ft.<br/><strong>CMD</strong> +8 vs. trip<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/endurance">Endurance</Link></p>
</blockquote>
<h3 id="companion-cockroach_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Speed</strong> 30 ft. climb 30 ft., fly 30 ft. (poor)<br/><strong>AC</strong> +2 natural armor<br/><strong>Ability Scores</strong> Str +2, Dex +2, Con +2<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/diehard">Diehard</Link></p>
</blockquote>
</>};
const _corpse_eater_fungus = {title: "Corpse-Eater Fungus", jsx: <><h2 id="companion-corpse_eater_fungus-corpse-eater-fungus">Corpse-Eater Fungus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This pale mass of fungal matter looks something like a spider with a thorny, acidic mouth in place of a body.</p>
<h3 id="companion-corpse_eater_fungus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6 plus 1d2 acid)<br/><strong>Ability Scores</strong> Str 14, Dex 13, Con 12, Int 1, Wis 11, Cha 4<br/><strong>Special Attacks</strong> spit acid (ranged touch attack, 30-foot range, 1d6 acid damage)<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<h3 id="companion-corpse_eater_fungus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 plus 1d4 acid)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> spit acid (ranged touch attack, 30-foot range, 1d8 acid damage)<br/><strong>Special Qualities</strong> darkvision 60 ft.</p>
</blockquote>
</>};
const _crab_giant = {title: "Giant Crab", jsx: <><h2 id="companion-crab_giant-giant-crab">Giant Crab</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_crab">Giant Crab</Link></p>
<p>This lumbering hard-shelled crab stands as tall as a dwarf, its massive pincers waving menacingly.</p>
<h3 id="companion-crab_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., swim 20 ft.<br/><strong>AC</strong> +5 natural armor<br/><strong>Attack</strong> 2 claws (1d3 plus grab)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 13, Int -, Wis 11, Cha 4<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> (1d3)<br/><strong>Special Qualities</strong> aquatic, darkvision, <Link to="/umr/water_dependency">water dependency</Link> (survive out of water for 1 hour per point of Con, after which it begins to suffocate as if it were drowning)<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<h3 id="companion-crab_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> 2 claws (1d4 plus grab)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2<br/><strong>Special Attacks</strong> constrict (1d4)</p>
</blockquote>
</>};
const _creeping_puffball = {title: "Creeping Puffball", jsx: <><h2 id="companion-creeping_puffball-creeping-puffball">Creeping Puffball</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This surprisingly mobile, multicolored ball of fungus crawls around on a nest of dozens of little filament-like "legs." Its poisonous spores cause those affected to endure bright, dazzling spots of color.</p>
<h3 id="companion-creeping_puffball-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> slam (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 14, Int 1, Wis 12, Cha 9<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below)<br/><strong>Special Qualities</strong> darkvision 60 ft., defensive puff (1/minute as an immediate action when hit, the fungus can expose one adjacent creature to its poison)<br/><strong>CMD</strong> can't be tripped</p>
<div className="sideNoteWrap"><ScrollContainer id="companion-creeping_puffball--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/wis_damage">Wis damage</Link> and <Link to="/misc/dazzled">dazzled</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-creeping_puffball-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> slam (1d6 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _crocodile = {title: "Crocodile (Alligator)", jsx: <><h2 id="companion-crocodile-crocodile-alligator">Crocodile (Alligator)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/crocodile">Crocodile</Link></p>
<p>This reptile lunges out of the placid water with shocking speed. Its jaw gapes open in a roar, its powerful tail lashing behind.</p>
<h3 id="companion-crocodile-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., swim 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 14, Con 15, Int 1, Wis 12, Cha 2<br/><strong>Special Qualities</strong> <Link to="/umr/hold_breath">hold breath</Link>, low-light vision</p>
</blockquote>
<h3 id="companion-crocodile-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d8) or tail slap (1d12)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> death roll, <Link to="/umr/grab">grab</Link>, sprint</p>
</blockquote>
</>};
const _dallo = {title: "Dallo", jsx: <><h2 id="companion-dallo-dallo">Dallo</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_118_siege_of_stone">Pathfinder #118: Siege of Stone pg. 82</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dallo">Dallo</Link></p>
<p>This squat, grunting creature stinks of musk and earth. Leathery plates and black horns protect its woolly underside.</p>
<h3 id="companion-dallo-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., burrow 10 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d3), gore (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 12, Con 13, Int 2, Wis 13, Cha 8<br/><strong>Special Qualities</strong> darkvision 30 ft., low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-dallo-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _deinotherium = {title: "Deinotherium", jsx: <><h2 id="companion-deinotherium-deinotherium">Deinotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link>, <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 87</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/deinotherium">Deinotherium (Megafauna)</Link></p>
<p>This creature resembles an elephant, though it has a shorter, thicker trunk and sharp, downward-curving tusks.</p>
<h3 id="companion-deinotherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8), slam (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 10, Con 15, Int 2, Wis 13, Cha 3<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-deinotherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (2d6), slam (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> sweep, <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _devil_monkey = {title: "Devil Monkey", jsx: <><h2 id="companion-devil_monkey-devil-monkey">Devil Monkey</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/devil_monkey">Devil Monkey</Link></p>
<p>This towering baboon has fiery orange fur, with two tufts of hair curling up like horns on its head.</p>
<h3 id="companion-devil_monkey-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 15, Dex 19, Con 8, Int 2, Wis 15, Cha 10<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-devil_monkey-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d10)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> puncture armor, <Link to="/umr/rock_throwing">rock throwing</Link></p>
</blockquote>
</>};
const _digmaul = {title: "Digmaul", jsx: <><h2 id="companion-digmaul-digmaul">Digmaul</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/digmaul">Digmaul</Link></p>
<p>This muscular, cougar-like cat has fearsome teeth and a thick tail ending in a spiked ball.</p>
<h3 id="companion-digmaul-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d2), tail (1d2)<br/><strong>Ability Scores</strong> Str 10, Dex 21, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> ball tail, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-digmaul-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6), 2 claws (1d3), tail (1d3)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _allosaurus = {title: "Allosaurus", jsx: <><h2 id="companion-allosaurus-dinosaur-allosaurus">Dinosaur (Allosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 90</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/allosaurus">Allosaurus</Link></p>
<p>This bipedal dinosaur has a mouth filled with sharp teeth and short, powerful arms that end in sharp claws.</p>
<h3 id="companion-allosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-allosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link></p>
</blockquote>
</>};
const _ankylosaurus = {title: "Ankylosaurus", jsx: <><h2 id="companion-ankylosaurus-dinosaur-ankylosaurus">Dinosaur (Ankylosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/ankylosaurus">Ankylosaurus</Link></p>
<p>Thick bony plates armor the dome-like back of this quadrupedal dinosaur, its powerfully muscled tail ending in a bony club.</p>
<h3 id="companion-ankylosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +9 natural armor<br/><strong>Attack</strong> tail (1d6)<br/><strong>Ability Scores</strong> Str 10, Dex 14, Con 9, Int 2, Wis 12, Cha 8<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-ankylosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> stun</p>
</blockquote>
</>};
const _brachiosaurus = {title: "Brachiosaurus", jsx: <><h2 id="companion-brachiosaurus-dinosaur-brachiosaurus">Dinosaur (Brachiosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/brachiosaurus">Brachiosaurus</Link></p>
<p>A long tail counterbalances this reptile's equally long neck, at the end of which a relatively small head pulls food from the treetop.</p>
<h3 id="companion-brachiosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> tail (2d4)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 11, Int 2, Wis 13, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-brachiosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link> (1d8)</p>
</blockquote>
</>};
const _deinonychus = {title: "Deinonychus", jsx: <><h2 id="companion-deinonychus-dinosaur-deinonychus">Dinosaur (Deinonychus)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/deinonychus">Deinonychus</Link></p>
<p>This brightly colored dinosaur exudes a dangerous ferocity. Each foot is armed with a large, sickle-shaped claw.</p>
<h3 id="companion-deinonychus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 talons (1d6), bite (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 17, Con 17, Int 2, Wis 12, Cha 14<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-deinonychus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 talons (1d8), bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/pounce">pounce</Link></p>
</blockquote>
</>};
const _dimetrodon = {title: "Dimetrodon", jsx: <><h2 id="companion-dimetrodon-dinosaur-dimetrodon">Dinosaur (Dimetrodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dimetrodon">Dimetrodon</Link></p>
<p>The massive sail on the back of this squat reptilian creature flexes and twitches as the beast stalks forward.</p>
<h3 id="companion-dimetrodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 12, Dex 16, Con 14, Int 1, Wis 12, Cha 3<br/><strong>Special Attacks</strong> tearing bite</p>
</blockquote>
<h3 id="companion-dimetrodon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (2d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _dimorphodon = {title: "Dimorphodon", jsx: <><h2 id="companion-dimorphodon-dinosaur-dimorphodon">Dinosaur (Dimorphodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link>, <Link to="/source/pathfinder_37_souls_for_smugglers_shiv">Pathfinder #37: Souls for Smuggler's Shiv pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dimorphodon">Dimorphodon</Link></p>
<p>The head of this colorful red and purple flying reptile is overly large, and its jaws are lined with tiny sharp teeth.</p>
<h3 id="companion-dimorphodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., fly 80 ft. (clumsy)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 8, Dex 15, Con 12, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-dimorphodon-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link></p>
<div className="sideNoteWrap"><ScrollContainer id="companion-dimorphodon--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
</>};
const _diplodocus = {title: "Diplodocus", jsx: <><h2 id="companion-diplodocus-dinosaur-diplodocus">Dinosaur (Diplodocus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/diplodocus">Diplodocus</Link></p>
<p>This enormous, long-necked quadruped moves with an uncanny grace, holding its lengthy, whip-like tail out level behind it.</p>
<h3 id="companion-diplodocus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> tail (1d8)<br/><strong>Ability Scores</strong> Str 10, Dex 14, Con 10, Int 2, Wis 12, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-diplodocus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> tail (2d6)<br/><strong>Ability Scores</strong> Str +6, Con +4<br/><strong>Special Attacks</strong> tail lash</p>
</blockquote>
</>};
const _elasmosaurus = {title: "Elasmosaurus", jsx: <><h2 id="companion-elasmosaurus-dinosaur-elasmosaurus">Dinosaur (Elasmosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 84</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/elasmosaurus">Elasmosaurus</Link></p>
<p>Long-necked and long-tailed, this large, predatory reptile glides through the water on four powerful flippers.</p>
<h3 id="companion-elasmosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., swim 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 10, Dex 18, Con 12, Int 2, Wis 13, Cha 9<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-elasmosaurus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _iguanodon = {title: "Iguanodon", jsx: <><h2 id="companion-iguanodon-dinosaur-iguanodon">Dinosaur (Iguanodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/iguanodon">Iguanodon</Link></p>
<p>This dinosaur seems comfortable on two legs or four. Its front limbs are each adorned with a cruel-looking, thumb-like spike.</p>
<h3 id="companion-iguanodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> claw (1d6)<br/><strong>Ability Scores</strong> Str 17, Dex 15, Con 15, Int 2, Wis 12, Cha 7</p>
</blockquote>
<h3 id="companion-iguanodon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> claw (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> thumb spikes</p>
</blockquote>
</>};
const _pachycephalosaurus = {title: "Pachycephalosaurus", jsx: <><h2 id="companion-pachycephalosaurus-dinosaur-pachycephalosaurus">Dinosaur (Pachycephalosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/pachycephalosaurus">Pachycephalosaurus</Link></p>
<p>This bipedal reptile has a rounded, dome-like head adorned with bony frills and ridges.</p>
<h3 id="companion-pachycephalosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 15, Dex 16, Con 13, Int 2, Wis 12, Cha 5</p>
</blockquote>
<h3 id="companion-pachycephalosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d10)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> clobbering charge</p>
</blockquote>
</>};
const _parasaurolophus = {title: "Parasaurolophus", jsx: <><h2 id="companion-parasaurolophus-dinosaur-parasaurolophus">Dinosaur (Parasaurolophus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 91</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/parasaurolophus">Parasaurolophus</Link></p>
<p>This thick-bodied dinosaur has a whip-like tail and a long neck, its head topped by the crest of a backward-curving horn.</p>
<h3 id="companion-parasaurolophus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail (1d6)<br/><strong>Ability Scores</strong> Str 11, Dex 18, Con 9, Int 2, Wis 13, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-parasaurolophus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link> (1d8)</p>
</blockquote>
</>};
const _pteranodon = {title: "Pteranodon", jsx: <><h2 id="companion-pteranodon-dinosaur-pteranodon">Dinosaur (Pteranodon)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 85</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/pteranodon">Pteranodon</Link></p>
<p>This flying reptile has two huge wings and a distinctive backward-sweeping crest decorating its head.</p>
<h3 id="companion-pteranodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft., fly 50 ft. (clumsy)<br/><strong>AC</strong> +0 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 8, Dex 21, Con 10, Int 2, Wis 14, Cha 12<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-pteranodon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _spinosaurus = {title: "Spinosaurus", jsx: <><h2 id="companion-spinosaurus-dinosaur-spinosaurus">Dinosaur (Spinosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/spinosaurus">Spinosaurus</Link></p>
<p>This titanic saurian has a crocodilian snout, powerful front claws, and a colorful sail-like ridge that runs down its back.</p>
<h3 id="companion-spinosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., swim 20 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 18, Dex 15, Con 15, Int 2, Wis 13, Cha 3</p>
</blockquote>
<h3 id="companion-spinosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _stegosaurus = {title: "Stegosaurus", jsx: <><h2 id="companion-stegosaurus-dinosaur-stegosaurus">Dinosaur (Stegosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 85</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/stegosaurus">Stegosaurus</Link></p>
<p>This huge dinosaur has a small head, twin rows of sharp dorsal plates, and a muscular tail terminating in a set of bony spikes.</p>
<h3 id="companion-stegosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> tail (2d6)<br/><strong>Ability Scores</strong> Str 10, Dex 18, Con 10, Int 2, Wis 12, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-stegosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> tail (2d8 plus trip)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _styracosaurus = {title: "Styracosaurus", jsx: <><h2 id="companion-styracosaurus-dinosaur-styracosaurus">Dinosaur (Styracosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/styracosaurus">Styracosaurus</Link></p>
<p>This bulky, four-legged dinosaur has a long nasal horn and a crest studded with additional horns sweeping back from its skull.</p>
<h3 id="companion-styracosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 10, Dex 13, Con 11, Int 2, Wis 12, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-styracosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/ferocity">ferocity</Link>, reflexive strike</p>
</blockquote>
</>};
const _triceratops = {title: "Triceratops", jsx: <><h2 id="companion-triceratops-dinosaur-triceratops">Dinosaur (Triceratops)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 86</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/triceratops">Triceratops</Link></p>
<p>This beast's armored head has three sharp horns decorating its face and a large round crest angling back over its neck from its skull.</p>
<h3 id="companion-triceratops-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 10, Dex 13, Con 11, Int 2, Wis 12, Cha 7</p>
</blockquote>
<h3 id="companion-triceratops-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link></p>
</blockquote>
</>};
const _tylosaurus = {title: "Tylosaurus", jsx: <><h2 id="companion-tylosaurus-dinosaur-tylosaurus">Dinosaur (Tylosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 91</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/tylosaurus">Tylosaurus</Link></p>
<p>Surging out of the water, this massive lizard is shaped like a giant fish with a powerful, toothed maw.</p>
<h3 id="companion-tylosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., swim 50 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 10, Int 2, Wis 13, Cha 9<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-tylosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link></p>
</blockquote>
</>};
const _tyrannosaurus = {title: "Tyrannosaurus", jsx: <><h2 id="companion-tyrannosaurus-dinosaur-tyrannosaurus">Dinosaur (Tyrannosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 86</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/tyrannosaurus">Tyrannosaurus</Link></p>
<p>This bipedal dinosaur's front arms seem small compared to the rest of its bulk, but its enormous head is all teeth.</p>
<h3 id="companion-tyrannosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-tyrannosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link>, powerful bite</p>
</blockquote>
</>};
const _velociraptor = {title: "Velociraptor", jsx: <><h2 id="companion-velociraptor-dinosaur-velociraptor">Dinosaur (Velociraptor)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/velociraptor">Velociraptor</Link></p>
<p>This small, sleek dinosaur has vicious, snapping jaws and feet that end in large talons for gutting prey.</p>
<h3 id="companion-velociraptor-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 talons (1d6), bite (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 17, Con 17, Int 2, Wis 12, Cha 14<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-velociraptor-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 talons (1d8), bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/pounce">pounce</Link></p>
</blockquote>
</>};
const _dire_bat = {title: "Dire Bat", jsx: <><h2 id="companion-dire_bat-dire-bat">Dire Bat</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 30</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dire_bat">Dire Bat</Link></p>
<p>This giant, furry bat is nearly the size of an ox, with dark leathery wings that open wider than two men with arms outstretched.</p>
<h3 id="companion-dire_bat-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., fly 40 ft. (good)<br/><strong>AC</strong> +0 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 9, Dex 17, Con 9, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link> 40 ft.</p>
</blockquote>
<h3 id="companion-dire_bat-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _dire_polar_bear = {title: "Dire Polar Bear", jsx: <><h2 id="companion-dire_polar_bear-dire-polar-bear">Dire Polar Bear</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dire_polar_bear">Dire Polar Bear</Link></p>
<p>Fearsome bony growths protrude from several spots in this massive animal's snowy fur.</p>
<h3 id="companion-dire_polar_bear-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-dire_polar_bear-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _dire_rat = {title: "Dire Rat", jsx: <><h2 id="companion-dire_rat-dire-rat">Dire Rat</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 232</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dire_rat">Dire Rat</Link></p>
<p>This filthy rat is the size of a small dog. It has a coat of coarse fur, a long and scabby tail, and two glittering eyes.</p>
<h3 id="companion-dire_rat-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft., climb 20 ft., swim 20 ft.<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 12, Int 2, Wis 12, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-dire_rat-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Attack</strong> bite (1d4 plus disease)<br/><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _dog = {title: "Dog", jsx: <><h2 id="companion-dog-dog">Dog</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dog">Dog</Link></p>
<p>This small dog has a rough coat and a hungry look in its dark brown eyes.</p>
<h3 id="companion-dog-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 15, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-dog-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _dolphin = {title: "Dolphin", jsx: <><h2 id="companion-dolphin-dolphin">Dolphin</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 88</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dolphin">Dolphin</Link></p>
<p>This streamlined, fish-like mammal has sparkling eyes over a smiling mouth filled with hundreds of teeth.</p>
<h3 id="companion-dolphin-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 80 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> slam (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link></p>
</blockquote>
<h3 id="companion-dolphin-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2, Con +2<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 120 ft.</p>
</blockquote>
</>};
const _dragonfly_giant = {title: "Giant Dragonfly", jsx: <><h2 id="companion-dragonfly_giant-giant-dragonfly">Giant Dragonfly</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_dragonfly">Giant Dragonfly</Link></p>
<p>These long-winged insects have dazzlingly colorful bodies.</p>
<h3 id="companion-dragonfly_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., fly 40 ft. (perfect)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 12, Int -, Wis 12, Cha 9<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<h3 id="companion-dragonfly_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/flyby_attack">Flyby Attack</Link></p>
</blockquote>
</>};
const _dunkleosteus = {title: "Dunkleosteus", jsx: <><h2 id="companion-dunkleosteus-dunkleosteus">Dunkleosteus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dunkleosteus">Dunkleosteus</Link></p>
<p>A gigantic, prehistoric fish cuts through the water, its head like a snapping turtle, complete with sharp, tooth-like plates.</p>
<h3 id="companion-dunkleosteus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 60 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 18, Con 10, Int 1, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-dunkleosteus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/grab">grab</Link> (bite), gulp</p>
</blockquote>
</>};
const _elasmotherium = {title: "Elasmotherium", jsx: <><h2 id="companion-elasmotherium-elasmotherium">Elasmotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/elasmotherium">Elasmotherium (Megafauna)</Link></p>
<p>This lumbering, four-legged, rhino-like beast has thick hide and a single immense horn protruding from the top of its head.</p>
<h3 id="companion-elasmotherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 15, Int 2, Wis 17, Cha 3<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-elasmotherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> impaling horn, <Link to="/umr/powerful_charge">powerful charge</Link> (gore)</p>
</blockquote>
</>};
const _electric_eel = {title: "Electric Eel", jsx: <><h2 id="companion-electric_eel-electric-eel">Electric Eel</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 119</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/electric_eel">Electric Eel</Link></p>
<p>This six-foot-long, snake-like fish moves slowly. A strange popping and snapping sound occasionally emits from the creature's body.</p>
<h3 id="companion-electric_eel-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 5 ft., swim 30 ft.<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 14, Con 18, Int 1, Wis 10, Cha 6<br/><strong>Special Qualities</strong> amphibious, low-light vision, electricity resistance 5</p>
</blockquote>
<h3 id="companion-electric_eel-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +2 natural armor<br/><strong>Ability Scores</strong> Dex +2, Con +2<br/><strong>Special Attacks</strong> electricity (1d6)<br/><strong>Special Qualities</strong> electricity resistance 10</p>
</blockquote>
</>};
const _elephant_mastodon = {title: "Elephant/Mastodon", jsx: <><h2 id="companion-elephant_mastodon-elephantmastodon">Elephant/Mastodon</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 128</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/elephant">Elephant</Link></p>
<p>These thick-skinned animals bear large ivory tusks flanking a long, prehensile snout.</p>
<h3 id="companion-elephant_mastodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8), slam (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 14, Con 13, Int 2, Wis 13, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-elephant_mastodon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6), slam (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link> (2d6)</p>
</blockquote>
</>};
const _elk = {title: "Elk", jsx: <><h2 id="companion-elk-elk">Elk</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/elk">Elk</Link></p>
<p>This majestic beast stands the height of a man at its shoulders, a many-tipped rack of proud antlers crowning its head.</p>
<h3 id="companion-elk-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d6) or 2 hooves (1d3)<br/><strong>Ability Scores</strong> Str 12, Dex 17, Con 14, Int 2, Wis 15, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-elk-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d8) or 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _enchanter_heron = {title: "Enchanter Heron", jsx: <><h2 id="companion-enchanter_heron-enchanter-heron">Enchanter Heron</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_121_the_lost_outpost">Pathfinder #121: The Lost Outpost pg. 82</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/enchanter_heron">Enchanter Heron</Link></p>
<p>This large bird has gray-and-white feathers, a long beak, and a bulbous sac on its throat that glows with a pale, sapphire light.</p>
<h3 id="companion-enchanter_heron-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., fly 20 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 12, Int 2, Wis 11, Cha 7<br/><strong>Special Qualities</strong> low-light vision, throat sack</p>
</blockquote>
<h3 id="companion-enchanter_heron-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/swallow_whole">swallow whole</Link></p>
</blockquote>
</>};
const _eohippus = {title: "Eohippus", jsx: <><h2 id="companion-eohippus-eohippus">Eohippus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal</p>
<p>The eohippus is a small, primeval ancestor of the modern horse. It has three-toed feet rather than hooves.</p>
<h3 id="companion-eohippus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 15, Con 12, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-eohippus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Dex +2, Con +2</p>
</blockquote>
</>};
const _eurypterid = {title: "Eurypterid", jsx: <><h2 id="companion-eurypterid-eurypterid">Eurypterid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/common_eurypterid">Common Eurypterid</Link></p>
<p>Also known as sea scorpions, these aquatic insects have pincers and a long stinger.</p>
<h3 id="companion-eurypterid-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., swim 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d3), sting (1d3 plus poison)<br/><strong>Ability Scores</strong> Str 10, Dex 11, Con 12, Int -, Wis 13, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below)<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +8 vs. trip</p>
<div className="sideNoteWrap"><ScrollContainer id="companion-eurypterid--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-eurypterid-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 claws (1d4), sting (1d4 plus poison)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> poison (same as above, but frequency increases to 1/round for 6 rounds and damage increases to 1d2 Con)</p>
</blockquote>
</>};
const _faerie_mount = {title: "Faerie Mount", jsx: <><h2 id="companion-faerie_mount-faerie-mount">Faerie Mount</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 82</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/faerie_mount">Faerie Mount</Link></p>
<p>Short legs and overlarge ears make this broad-chested canine seem almost comical.</p>
<h3 id="companion-faerie_mount-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 9, Dex 12, Con 15, Int 2, Wis 13, Cha 12<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link>, stability</p>
</blockquote>
<h3 id="companion-faerie_mount-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> sure-footed</p>
</blockquote>
</>};
const _falcon = {title: "Falcon", jsx: <><h2 id="companion-falcon-falcon">Falcon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/hawk">Hawk</Link></p>
<p>This swift raptor has amazing eyesight and sharp talons.</p>
<h3 id="companion-falcon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., fly 90 ft. (good)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 talons (1d3)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 11, Int 2, Wis 15, Cha 6<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-falcon-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Dex +2, Con +2</p>
</blockquote>
</>};
const _frilled_lizard_giant = {title: "Giant Frilled Lizard", jsx: <><h2 id="companion-frilled_lizard_giant-giant-frilled-lizard">Giant Frilled Lizard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_frilled_lizard">Giant Frilled Lizard</Link></p>
<p>This large lizard can display a frightening frill on its neck when it charges.</p>
<h3 id="companion-frilled_lizard_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6), tail (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 13, Int 2, Wis 14, Cha 10<br/><strong>Special Attacks</strong> intimidating charge<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-frilled_lizard_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), tail (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _frog_father = {title: "Frog Father", jsx: <><h2 id="companion-frog_father-frog-father">Frog Father</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/frog_father">Frog Father</Link></p>
<p>This elephantine amphibian has a grotesquely long tongue and beady eyes.</p>
<h3 id="companion-frog_father-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., swim 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 13, Con 16, Int 1, Wis 9, Cha 6<br/><strong>Special Attacks</strong> tongue, <Link to="/umr/pull">pull</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-frog_father-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2<br/><strong>Special Attacks</strong> <Link to="/umr/swallow_whole">swallow whole</Link></p>
</blockquote>
</>};
const _frog = {title: "Frog", jsx: <><h2 id="companion-frog-frog">Frog</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 135</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_frog">Giant Frog</Link></p>
<p>This creature looks like a normal frog, with moist, mottled, blackish-green skin, but grown to truly monstrous size.</p>
<h3 id="companion-frog-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., swim 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 13, Con 16, Int 1, Wis 9, Cha 6<br/><strong>Special Attacks</strong> tongue, pull<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-frog-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2<br/><strong>Special Attacks</strong> <Link to="/umr/swallow_whole">swallow whole</Link></p>
</blockquote>
</>};
const _gallerok = {title: "Gallerok", jsx: <><h2 id="companion-gallerok-gallerok">Gallerok</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_118_siege_of_stone">Pathfinder #118: Siege of Stone pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/gallerok">Gallerok</Link></p>
<p>This stout, serpentine creature's body ripples with muscle. Jagged fangs line its broad, powerful jaws.</p>
<h3 id="companion-gallerok-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 16, Con 13, Int 1, Wis 10, Cha 5<br/><strong>Special Qualities</strong> darkvision 60 ft., low-light vision</p>
</blockquote>
<h3 id="companion-gallerok-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> (1d6), <Link to="/umr/grab">grab</Link></p>
</blockquote>
</>};
const _gar = {title: "Gar", jsx: <><h2 id="companion-gar-gar">Gar</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 128</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/gar">Gar</Link></p>
<p>This long, lean fish has a muscular body and a head with long jaws filled with sharp teeth.</p>
<h3 id="companion-gar-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 14, Con 15, Int 1, Wis 13, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link><br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-gar-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _giganotosaurus = {title: "Giganotosaurus", jsx: <><h2 id="companion-giganotosaurus-giganotosaurus">Giganotosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This bipedal dinosaur has a large head and cavernous jaws full of large, sharp teeth.</p>
<h3 id="companion-giganotosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6),2 claws (1d3)<br/><strong>Ability Scores</strong> Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-giganotosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/grab">grab</Link> (bite)</p>
</blockquote>
</>};
const _giraffe = {title: "Giraffe", jsx: <><h2 id="companion-giraffe-giraffe">Giraffe</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giraffe">Giraffe</Link></p>
<p>This animal, covered in a spotted pattern, has a disproportionately long neck that allows it to tower over other animals.</p>
<h3 id="companion-giraffe-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 hooves (1d6)<br/><strong>Ability Scores</strong> Str 16, Dex 17, Con 12, Int 2, Wis 13, Cha 7<br/><strong>Special Qualities</strong> low-light vision, natural weapons</p>
</blockquote>
<h3 id="companion-giraffe-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 hooves (1d8), slam (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
</>};
const _gliding_turtle = {title: "Gliding Turtle", jsx: <><h2 id="companion-gliding_turtle-gliding-turtle">Gliding Turtle</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_121_the_lost_outpost">Pathfinder #121: The Lost Outpost pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/gliding_turtle">Gliding Turtle</Link></p>
<p>This giant turtle has a large, thin membrane of scaly skin extending from its shell to its legs.</p>
<h3 id="companion-gliding_turtle-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft., swim 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 12, Con 12, Int 2, Wis 11, Cha 5<br/><strong>Special Qualities</strong> low-light vision, shell</p>
</blockquote>
<h3 id="companion-gliding_turtle-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> fly 30 ft. (clumsy)<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2<br/><strong>Special Attacks</strong> gliding charge<br/><strong>Special Qualities</strong> glide</p>
</blockquote>
</>};
const _goblin_dog = {title: "Goblin Dog", jsx: <><h2 id="companion-goblin_dog-goblin-dog">Goblin Dog</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 157</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/goblin_dog">Goblin Dog</Link></p>
<p>This mangy dog's face has the flat nose, beady eyes, and protruding teeth of a rat grown grotesquely large.</p>
<h3 id="companion-goblin_dog-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 50 ft.<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 16, Con 11, Int 2, Wis 12, Cha 8<br/><strong>Special Attacks</strong> allergic reaction<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-goblin_dog-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
</>};
const _goliath_frog = {title: "Goliath Frog", jsx: <><h2 id="companion-goliath_frog-goliath-frog">Goliath Frog</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/goliath_frog">Goliath Frog</Link></p>
<p>This massive, mottled amphibian glistens with slime, and its tongue drips with saliva.</p>
<h3 id="companion-goliath_frog-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., swim 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 13, Con 16, Int 1, Wis 9, Cha 6<br/><strong>Special Attacks</strong> tongue, <Link to="/umr/pull">pull</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-goliath_frog-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2<br/><strong>Special Attacks</strong> <Link to="/umr/swallow_whole">swallow whole</Link></p>
</blockquote>
</>};
const _gorthek = {title: "Gorthek", jsx: <><h2 id="companion-gorthek-gorthek">Gorthek</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 172</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/gorthek">Gorthek</Link></p>
<p>This massive quadruped has a thick, wrinkled hide, curving horns, and shaggy hair that frames its leonine face.</p>
<h3 id="companion-gorthek-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 16, Dex 11, Con 13, Int 2, Wis 10, Cha 5<br/><strong>Special Qualities</strong> darkvision 60 ft., low-light vision</p>
</blockquote>
<h3 id="companion-gorthek-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (gore, 4d6+twice Strength modifier)</p>
</blockquote>
</>};
const _griffon = {title: "Griffon", jsx: <><h2 id="companion-griffon-griffon">Griffon</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link><br/><strong>Companion Type</strong> Monstrous<br/><strong>Monster Entry:</strong> <Link to="/monster/griffon">Griffon</Link></p>
<p>This majestic beast has the body of a lion, the head and forelegs of a great eagle, and a massive pair of feathered wings.</p>
<p><strong>Prerequisites</strong> Diplomacy, Intimidate, or Handle Animal 5 ranks; Ride 5 ranks</p>
<h3 id="companion-griffon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 30 ft., fly 40 ft. (average)<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 16, Dex 15, Con 16, Int 5, Wis 13, Cha 8<br/><strong>Special Qualities</strong> unable to carry a rider while flying, darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link><br/><strong>Languages</strong> Common (cannot speak)</p>
</blockquote>
<h3 id="companion-griffon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Speed</strong> 40 ft., fly 80 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), 2 talons (1d6)<br/><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/pounce">pounce</Link>, <Link to="/umr/rake">rake</Link> (1d6)<br/><strong>Special Qualities</strong> unable to carry a rider while flying</p>
</blockquote>
<h3 id="companion-griffon-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>The griffon can carry a rider while flying, but reduces its fly speed by half while doing so.</p>
</>};
const _grizzly_bear = {title: "Grizzly Bear", jsx: <><h2 id="companion-grizzly_bear-grizzly-bear">Grizzly Bear</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/grizzly_bear">Grizzly Bear</Link></p>
<p>The infamous grizzly bear is a lumbering and quite impressive companion, particularly when it rises up on its hind feet to loom large. Grizzly bears strike fear into the hearts of most who encounter them.</p>
<h3 id="companion-grizzly_bear-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 17, Dex 13, Con 13, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-grizzly_bear-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6 plus grab)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
</>};
const _gulper_plant = {title: "Gulper Plant", jsx: <><h2 id="companion-gulper_plant-gulper-plant">Gulper Plant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This bulbous green plant can climb or crawl via a network of vines. Its central reservoir can gulp down foes to digest them in an internal well of acid, holding them tight while they struggle.</p>
<h3 id="companion-gulper_plant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., climb 10 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 vines (primary natural attack, 1d4 bludgeoning plus grab)<br/><strong>Ability Scores</strong> Str 12, Dex 11, Con 13, Int 1, Wis 10, Cha 3<br/><strong>Special Attacks</strong> <Link to="/umr/swallow_whole">swallow whole</Link> (1d6 acid)<br/><strong>Special Qualities</strong> freeze, low-light vision<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<h3 id="companion-gulper_plant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 vines (primary natural attack, 1d6 bludgeoning plus grab)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +2<br/><strong>Special Attacks</strong> swallow whole (1d8 acid)</p>
</blockquote>
</>};
const _hammerhead_shark = {title: "Hammerhead Shark", jsx: <><h2 id="companion-hammerhead_shark-hammerhead-shark">Hammerhead Shark</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/hammerhead_shark">Hammerhead Shark</Link></p>
<p>This unusual shark is named for its blocky, rectangular head. The creature's eyes are on each side of its head.</p>
<h3 id="companion-hammerhead_shark-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 60 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 12, Int 1, Wis 15, Cha 6<br/><strong>Special Qualities</strong> aquatic, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-hammerhead_shark-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link> 30 ft.</p>
</blockquote>
</>};
const _hippocampus = {title: "Hippocampus", jsx: <><h2 id="companion-hippocampus-hippocampus">Hippocampus</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link><br/><strong>Companion Type</strong> Monstrous<br/><strong>Monster Entry:</strong> <Link to="/monster/hippocampus">Hippocampus</Link></p>
<p>This creature has the foreparts of a horse and the hindquarters of a fish. Its forelegs end in splayed fins rather than hooves.</p>
<h3 id="companion-hippocampus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 5 ft., swim 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 16, Dex 9, Con 15, Int 2, Wis 12, Cha 11<br/><strong>Special Qualities</strong> darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link>, <Link to="/umr/water_dependency">water dependency</Link></p>
</blockquote>
<h3 id="companion-hippocampus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Speed</strong> Swim 60 ft.<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +2, Dex +4</p>
</blockquote>
<h3 id="companion-hippocampus-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>The hippocampus's swim speed increases by 20 feet, and it gains a tail slap secondary attack that deals id4 points of damage plus half its Strength bonus.</p>
</>};
const _hippogriff = {title: "Hippogriff", jsx: <><h2 id="companion-hippogriff-hippogriff">Hippogriff</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link><br/><strong>Companion Type</strong> Monstrous<br/><strong>Monster Entry:</strong> <Link to="/monster/hippogriff">Hippogriff</Link></p>
<p>This large, brown, horse-like creature has a hawk's wings, talons, and hooked beak.</p>
<h3 id="companion-hippogriff-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 40 ft., fly 60 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 14, Int 2, Wis 12, Cha 9<br/><strong>Special Qualities</strong> unable to carry a rider while flying, darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-hippogriff-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Speed</strong> 40 ft., fly 100 ft. (average)<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Qualities</strong> unable to carry a rider while flying</p>
</blockquote>
<h3 id="companion-hippogriff-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>The hippogriff can carry a rider while flying, but reduces its fly speed by half while doing so.</p>
</>};
const _hippopotamus = {title: "Hippopotamus", jsx: <><h2 id="companion-hippopotamus-hippopotamus">Hippopotamus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 157</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/hippopotamus">Hippopotamus</Link></p>
<p>This fleshy behemoth wallows forward on four stumpy legs. Its jaws spread wide in a roar of challenge, exposing massive, tusk-like teeth.</p>
<h3 id="companion-hippopotamus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 11, Dex 12, Con 12, Int 2, Wis 13, Cha 5<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link>, sweat</p>
</blockquote>
<h3 id="companion-hippopotamus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link> (1d8)</p>
</blockquote>
</>};
const _hobbe_hound = {title: "Hobbe Hound", jsx: <><h2 id="companion-hobbe_hound-hobbe-hound">Hobbe Hound</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 89</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/hobbe_hound">Hobbe Hound</Link></p>
<p><Link to="/race/hobgoblin">Hobgoblin</Link> druids, hunters, and rangers who can take an animal companion can choose a hobbe hound.</p>
<h3 id="companion-hobbe_hound-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4 plus allergic reaction)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 15, Int 2, Wis 10, Cha 7<br/><strong>Special Qualities</strong> allergic reaction, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-hobbe_hound-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6 plus allergic reaction)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +2<br/><strong>Special Qualities</strong> fire resistance 3</p>
</blockquote>
</>};
const _horse = {title: "Horse", jsx: <><h2 id="companion-horse-horse">Horse</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/horse">Horse</Link></p>
<p>This proud horse thunders across the grassy plain with fluid grace, wind tugging at its loose-fitting barding.</p>
<h3 id="companion-horse-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d4), 2 hooves (secondary natural attack, 1d6)<br/><strong>Ability Scores</strong> Str 16, Dex 13, Con 15, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-horse-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Qualities</strong> combat trained</p>
</blockquote>
</>};
const _hunting_cactus = {title: "Hunting Cactus", jsx: <><h2 id="companion-hunting_cactus-hunting-cactus">Hunting Cactus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link><br/><strong>Companion Type</strong> Plant</p>
<p>Able to crawl swiftly on five root-like legs, the hunting cactus has long arms it can slam foes with - arms covered with hundreds of thin, sharp needles.</p>
<h3 id="companion-hunting_cactus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 slams (1d6 bludgeoning and piercing)<br/><strong>Ability Scores</strong> Str 14, Dex 13, Con 17, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> needles (a creature grappling a hunting cactus or attacking it with a natural attack or unarmed strike takes 1d4 points of piercing damage)<br/><strong>CMD</strong> +6 vs. trip</p>
</blockquote>
<h3 id="companion-hunting_cactus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 slams (1d8 bludgeoning and piercing)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +2<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
</>};
const _hyena = {title: "Hyena", jsx: <><h2 id="companion-hyena-hyena">Hyena</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 179</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/hyena">Hyena</Link></p>
<p>This hyena is covered in shaggy, tan-colored fur with black and brown stripes.</p>
<h3 id="companion-hyena-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4 plus <Link to="/umr/trip">trip</Link>)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 13, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-hyena-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6 plus trip)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _impaler_shrike = {title: "Impaler Shrike", jsx: <><h2 id="companion-impaler_shrike-impaler-shrike">Impaler Shrike</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_97_in_hells_bright_shadow">Pathfinder #97: In Hell's Bright Shadow pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/impaler_shrike">Impaler Shrike</Link></p>
<p>This large bird has brown and gray feathers and a vicious hooked beak.</p>
<h3 id="companion-impaler_shrike-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., fly 60 ft. (average)<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 13, Con 13, Int 2, Wis 14, Cha 7<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-impaler_shrike-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> impale</p>
</blockquote>
</>};
const _kangaroo = {title: "Kangaroo", jsx: <><h2 id="companion-kangaroo-kangaroo">Kangaroo</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/kangaroo">Kangaroo</Link></p>
<p>As tall as a grown human, this mouse-faced creature stands on powerful hind legs and has a stout tail trailing behind.</p>
<h3 id="companion-kangaroo-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>Attack</strong> kick (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 14, Con 13, Int 2, Wis 11, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-kangaroo-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> kick (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex +2, Con +2<br/><strong>Special Qualities</strong> speed increase (50 ft.)</p>
</blockquote>
</>};
const _kaprosuchus = {title: "Kaprosuchus", jsx: <><h2 id="companion-kaprosuchus-kaprosuchus">Kaprosuchus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/kaprosuchus">Kaprosuchus (Megafauna)</Link></p>
<p>This massive, squat crocodilian has forward facing eyes, jutting teeth, and a pronounced snout.</p>
<h3 id="companion-kaprosuchus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6), tail slap (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 14, Con 15, Int 1, Wis 14, Cha 2<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-kaprosuchus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), tail slap (1d8)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +4<br/><strong>Special Attacks</strong> ramming snout</p>
</blockquote>
</>};
const _kentrosaurus = {title: "Kentrosaurus", jsx: <><h2 id="companion-kentrosaurus-kentrosaurus">Kentrosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/kentrosaurus">Kentrosaurus</Link></p>
<p>This quadrupedal dinosaur has two rows of dorsal spikes, a spiked tail, and two more spikes projecting from its shoulders.</p>
<h3 id="companion-kentrosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail (1d8)<br/><strong>Ability Scores</strong> Str 10, Dex 16, Con 10, Int 2, Wis 13, Cha 10<br/><strong>Special Qualities</strong> impaling strike, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-kentrosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> tail (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> defensive spikes</p>
</blockquote>
</>};
const _leech_giant = {title: "Giant Leech", jsx: <><h2 id="companion-leech_giant-giant-leech">Giant Leech</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_leech">Giant Leech</Link></p>
<p>A parasite ballooned to monstrous proportions undulates in the muck, its circular maw a spiral of teeth.</p>
<h3 id="companion-leech_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 5 ft., swim 20 ft.<br/><strong>AC</strong> +0 natural armor<br/><strong>Attack</strong> bite (1d4 plus attach)<br/><strong>Ability Scores</strong> Str 9, Dex 14, Con 12, Int -, Wis 10, Cha 1<br/><strong>Special Attacks</strong> <Link to="/umr/attach">attach</Link>, <Link to="/umr/blood_drain">blood drain</Link> (1 Str)<br/><strong>Special Qualities</strong> amphibious, <Link to="/umr/blindsense">blindsense</Link> 30 ft., <Link to="/umr/scent">scent</Link>, susceptible to salt<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<h3 id="companion-leech_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6 plus attach)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2<br/><strong>Special Attacks</strong> blood drain (1 Str and 1 <Link to="/rule/con_damage">Con damage</Link>)<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 30 ft.</p>
</blockquote>
</>};
const _lizard_giant_chameleon = {title: "Lizard (Giant Chameleon)", jsx: <><h2 id="companion-lizard_giant_chameleon-lizard-giant-chameleon">Lizard (Giant Chameleon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/lizard_giant_chameleon">Lizard (Giant Chameleon)</Link></p>
<p>Nearly invisible in its surroundings, this scaly lizard's eyes dart about independently of each other.</p>
<h3 id="companion-lizard_giant_chameleon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 14, Con 14, Int 2, Wis 11, Cha 7<br/><strong>Special Qualities</strong> +10 Stealth when still, low-light vision</p>
</blockquote>
<h3 id="companion-lizard_giant_chameleon-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/pull">pull</Link> (tongue, 5 ft.), tongue<br/><strong>Special Qualities</strong> speed increase (40 ft., climb 40 ft.)</p>
</blockquote>
</>};
const _lizard_giant_gecko = {title: "Lizard (Giant Gecko)", jsx: <><h2 id="companion-lizard_giant_gecko-lizard-giant-gecko">Lizard (Giant Gecko)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/lizard_giant_gecko">Lizard (Giant Gecko)</Link></p>
<p>An oversized lizard the size of a horse scans the area, its bulging eyes darting this way and that, completely independent of one another. Every few moments a long pink tongue snaps from its wide mouth, either to snatch up some unseen insect or moisten an eye.</p>
<h3 id="companion-lizard_giant_gecko-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 11, Dex 15, Con 12, Int 2, Wis 14, Cha 7<br/><strong>Special Qualities</strong> expert climber, low-light vision</p>
</blockquote>
<h3 id="companion-lizard_giant_gecko-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> speed increase (40 ft.)</p>
</blockquote>
</>};
const _lizard_monitor_lizard = {title: "Lizard (Monitor Lizard)", jsx: <><h2 id="companion-lizard_monitor_lizard-lizard-monitor-lizard">Lizard (Monitor Lizard)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 194</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/lizard_monitor_lizard">Lizard (Monitor Lizard)</Link></p>
<p>This immense lizard moves with a slow but relentless gait. Its feet end in large talons, and ropes of drool hang from its toothy maw.</p>
<h3 id="companion-lizard_monitor_lizard-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., swim 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6 plus grab)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-lizard_monitor_lizard-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 plus grab and <Link to="/umr/poison">poison</Link>)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-lizard_monitor_lizard--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Poison (based on monster entry)</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 14</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1 minute</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/hour for 6 hours</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></>};
const _llama = {title: "Llama", jsx: <><h2 id="companion-llama-llama">Llama</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/llama">Llama</Link></p>
<p>While some value it for its hair, the llama makes a fine animal companion as well, and it has traditionally been used as a beast of burden in mountainous regions.</p>
<h3 id="companion-llama-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 16, Con 12, Int 2, Wis 13, Cha 9<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-llama-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
</>};
const _locust_giant = {title: "Giant Locust", jsx: <><h2 id="companion-locust_giant-giant-locust">Giant Locust</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_locust">Giant Locust</Link></p>
<p>The giant locust has long limber legs and the ability to spit a caustic glob of noxious goo.</p>
<h3 id="companion-locust_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., climb 20 ft., fly 20 ft. (poor)<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 17, Con 11, Int -, Wis 10, Cha 7<br/><strong>Special Attacks</strong> spit goo (ranged touch attack, 30-foot range, sickened for 1 round)<br/><strong>Special Qualities</strong> +18 Acrobatics when jumping, darkvision 60 ft., leap (can take 10 on Acrobatics checks to jump, even when distracted or threatened)<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<h3 id="companion-locust_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., climb 20 ft., fly 60 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> voracious (bite attack deals double damage to creatures with the plant subtype and to objects made of paper, wood, or other plant materials)</p>
</blockquote>
</>};
const _manta_ray = {title: "Manta Ray", jsx: <><h2 id="companion-manta_ray-manta-ray">Manta Ray</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 232</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/manta_ray">Manta Ray</Link></p>
<p>Gliding gracefully through the water on wing-like fins, this large ray scoops up tiny morsels in its wide mouth.</p>
<h3 id="companion-manta_ray-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> tail slap (1d4)<br/><strong>Ability Scores</strong> Str 8, Dex 15, Con 11, Int 1, Wis 13, Cha 2<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-manta_ray-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail slap (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link> 30 ft.</p>
</blockquote>
</>};
const _mantis_shrimp_giant = {title: "Giant Mantis Shrimp", jsx: <><h2 id="companion-mantis_shrimp_giant-giant-mantis-shrimp">Giant Mantis Shrimp</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_mantis_shrimp">Giant Mantis Shrimp</Link></p>
<p>This colorful aquatic vermin has powerful claws capable of striking with blinding speed.</p>
<h3 id="companion-mantis_shrimp_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft., swim 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 pincers (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 17, Con 14, Int -, Wis 13, Cha 6<br/><strong>Special Qualities</strong> aquatic <Link to="/umr/blindsense">blindsense</Link> 10 ft., darkvision 60 ft., sonic resistance 5<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<h3 id="companion-mantis_shrimp_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 pincers (1d8)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +2<br/><strong>Special Attacks</strong> speedy pincers (can make iterative attacks with one of its pincer attacks)<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 10 ft., sonic resistance 10</p>
</blockquote>
</>};
const _mantis_giant = {title: "Giant Mantis", jsx: <><h2 id="companion-mantis_giant-giant-mantis">Giant Mantis</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_mantis">Giant Mantis</Link></p>
<p>This towering insect walks on its back four legs. Its head is triangular and its front legs sport razor-sharp edges and claws.</p>
<h3 id="companion-mantis_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft., fly 40 ft. (average)<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 claws (1d4 plus grab)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 10, Int -, Wis 12, Cha 7<br/><strong>Special Attacks</strong> lunge<br/><strong>Special Qualities</strong> darkvision<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<h3 id="companion-mantis_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> mandibles (1d6 secondary attack against a grabbed target), sudden strike (may take a full attack in the surprise round)</p>
</blockquote>
</>};
const _marax = {title: "Marax", jsx: <><h2 id="companion-marax-marax">Marax</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_90_the_divinity_drive">Pathfinder #90: The Divinity Drive pg. 87</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/marax">Marax</Link></p>
<p>Dense, bony growths line the back of this bipedal predator. Between its gnashing, toothy underbite, scythe-like claws, and spiked tail, no part of this beast offers mercy.</p>
<h3 id="companion-marax-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6), tail barbs (secondary natural attack, 1d4 plus poison)<br/><strong>Ability Scores</strong> Str 16, Dex 15, Con 12, Int 2, Wis 12, Cha 6<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-marax--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-marax-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/pounce">pounce</Link></p>
</blockquote>
</>};
const _marsupial_devil = {title: "Marsupial Devil", jsx: <><h2 id="companion-marsupial_devil-marsupial-devil">Marsupial Devil</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This toothy marsupial has a perhaps undeserved reputation for ferocity.</p>
<h3 id="companion-marsupial_devil-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 13, Con 12, Int 2, Wis 10, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-marsupial_devil-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +4, Con +2</p>
</blockquote>
</>};
const _marsupial_lion = {title: "Marsupial Lion", jsx: <><h2 id="companion-marsupial_lion-marsupial-lion">Marsupial Lion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link><br/><strong>Companion Type</strong> Animal</p>
<p>Somewhat slimmer than the standard lion, the marsupial lion is no less dangerous in battle.</p>
<h3 id="companion-marsupial_lion-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 20 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 16, Con 13, Int 2, Wis 13, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-marsupial_lion-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> climb 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6 plus <Link to="/umr/grab">grab</Link>)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _archelon = {title: "Archelon", jsx: <><h2 id="companion-archelon-megafauna-archelon">Megafauna (Archelon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/archelon">Archelon (Megafauna)</Link></p>
<p>The shell of this immense sea turtle easily spans 12 feet in length. Its narrow head ends in a hooked beak.</p>
<h3 id="companion-archelon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 15 ft., swim 50 ft.<br/><strong>AC</strong> +10 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 8, Dex 10, Con 9, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-archelon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _arsinoitherium = {title: "Arsinoitherium", jsx: <><h2 id="companion-arsinoitherium-megafauna-arsinoitherium">Megafauna (Arsinoitherium)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 186</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/arsinoitherium">Arsinoitherium (Megafauna)</Link></p>
<p>This creature is much like a rhino, some six feet tall and ten feet long, with a pair of massive, knife-like horns curving up from its nose.</p>
<h3 id="companion-arsinoitherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 15, Int 2, Wis 13, Cha 3<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-arsinoitherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (2d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (2d8), <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _baluchitherium = {title: "Baluchitherium", jsx: <><h2 id="companion-baluchitherium-megafauna-baluchitherium">Megafauna (Baluchitherium)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/baluchitherium">Baluchitherium (Megafauna)</Link></p>
<p>This towering armored herbivore resembles a hornless rhinoceros, but with longer legs and a longer neck.</p>
<h3 id="companion-baluchitherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str 14, Dex 14, Con 15, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-baluchitherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 hooves (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _basilosaurus = {title: "Basilosaurus", jsx: <><h2 id="companion-basilosaurus-megafauna-basilosaurus">Megafauna (Basilosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/basilosaurus">Basilosaurus (Megafauna)</Link></p>
<p>This immense primeval whale has a sleek body that looks more serpentine than mammal, and jaws filled with sharp teeth.</p>
<h3 id="companion-basilosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), tail slap (1d4)<br/><strong>Ability Scores</strong> Str 11, Dex 14, Con 12, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link></p>
</blockquote>
<h3 id="companion-basilosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), tail slap (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link> 60 ft.</p>
</blockquote>
</>};
const _embolotherium = {title: "Embolotherium", jsx: <><h2 id="companion-embolotherium-megafauna-embolotherium">Megafauna (Embolotherium)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 87</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/embolotherium">Embolotherium (Megafauna)</Link></p>
<p>This creature is reminiscent of a rhinoceros, but instead of pointed horns on its nose, this creature possesses a blunt, bony protrusion.</p>
<h3 id="companion-embolotherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 10, Con 13, Int 2, Wis 13, Cha 3<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-embolotherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _glyptodon = {title: "Glyptodon", jsx: <><h2 id="companion-glyptodon-megafauna-glyptodon">Megafauna (Glyptodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 186</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This armored creature has a bony, turtle-like shell from which protrude short limbs, a blunt head, and a short spiky tail.</p>
<h3 id="companion-glyptodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft.<br/><strong>AC</strong> +5 natural armor<br/><strong>Attack</strong> 2 claws (1d8)<br/><strong>Ability Scores</strong> Str 13, Dex 12, Con 13, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-glyptodon-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d10)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _megalania = {title: "Megalania", jsx: <><h2 id="companion-megalania-megafauna-megalania">Megafauna (Megalania)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/megalania">Megalania (Megafauna)</Link></p>
<p>This gigantic lizard has short but powerful limbs, a muscular tail, and a spiny crest that runs the length of its body.</p>
<h3 id="companion-megalania-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6 plus <Link to="/umr/grab">grab</Link>)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-megalania-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d8 plus grab and <Link to="/umr/poison">poison</Link>)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
</>};
const _megaloceros = {title: "Megaloceros", jsx: <><h2 id="companion-megaloceros-megafauna-megaloceros">Megafauna (Megaloceros)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 187</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/megaloceros">Megaloceros (Megafauna)</Link></p>
<p>The massive and majestic elk stands fully the height of a human at its shoulder, and its antlers stretch over ten feet across.</p>
<h3 id="companion-megaloceros-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 12, Dex 17, Con 14, Int 2, Wis 15, Cha 5<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-megaloceros-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (2d6), 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (2d6)</p>
</blockquote>
</>};
const _megatherium = {title: "Megatherium", jsx: <><h2 id="companion-megatherium-megafauna-megatherium">Megafauna (Megatherium)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 187</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/megatherium">Megatherium (Megafauna)</Link></p>
<p>The great sloth, standing on its hind legs, can reach the treetops with its agile tongue to grab at foliage.</p>
<h3 id="companion-megatherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft., climb 10 ft.<br/><strong>AC</strong> +5 natural armor<br/><strong>Attack</strong> 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 9, Dex 14, Con 11, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-megatherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/rend">rend</Link> (2 claws, 1d8)</p>
</blockquote>
</>};
const _megaprimatus = {title: "Megaprimatus", jsx: <><h2 id="companion-megaprimatus-megaprimatus">Megaprimatus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/megaprimatus">Megaprimatus (Megafauna)</Link></p>
<p>This titanic ape has great patches of coarse gray and brown fur, and its skin is thick and leathery.</p>
<h3 id="companion-megaprimatus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 10, Int 2, Wis 12, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-megaprimatus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _mindspin_ram = {title: "Mindspin Ram", jsx: <><h2 id="companion-mindspin_ram-mindspin-ram">Mindspin Ram</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 82</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/mindspin_ram">Mindspin Ram</Link></p>
<p>This stark white ram's curved horns appear to have sharp thorns studding every inch of their surface.</p>
<h3 id="companion-mindspin_ram-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 11, Int 2, Wis 14, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-mindspin_ram-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/bleed">bleed</Link> (gore, 1), <Link to="/umr/powerful_charge">powerful charge</Link> (gore, 1d8)</p>
</blockquote>
</>};
const _moa = {title: "Moa", jsx: <><h2 id="companion-moa-moa">Moa</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/moa">Moa (Megafauna)</Link></p>
<p>Standing on muscular legs that end in enormous talons, this flightless bird is almost twice the height of a man.</p>
<h3 id="companion-moa-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 talons (1d3)<br/><strong>Ability Scores</strong> Str 13, Dex 16, Con 12, Int 2, Wis 11, Cha 9<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-moa-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 talons (1d4)<br/><strong>Ability Scores</strong> Str +4, Con +2</p>
</blockquote>
</>};
const _mokele_mbembe = {title: "Mokele-Mbembe", jsx: <><h2 id="companion-mokele_mbembe-mokele-mbembe">Mokele-Mbembe</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/mokele_mbembe">Mokele-Mbembe</Link></p>
<p>A triangular reptilian head with a mouth full of curved teeth, attached to a long snaking neck, rises from the surface of the water. Long spines run down its neck, back, and whip-like tail, which uncurls to snap the air with a loud report.</p>
<h3 id="companion-mokele_mbembe-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., swim 30 ft.<br/><strong>AC</strong> +5 natural armor<br/><strong>Attack</strong> bite (1d8), tail slap (1d8, reach 10 ft.)<br/><strong>Ability Scores</strong> Str 16, Dex 17, Con 10, Int 2, Wis 15, Cha 11<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-mokele_mbembe-9th-level-advancement">9th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (2d6), tail slap (2d6, reach 15 ft.)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/trample">trample</Link>, whip tail</p>
</blockquote>
</>};
const _mole_giant = {title: "Giant Mole", jsx: <><h2 id="companion-mole_giant-giant-mole">Giant Mole</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This large-clawed burrowing mammal is slow but can burrow through loose earth and soil with ease to surprise its foes.</p>
<h3 id="companion-mole_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., burrow 10 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 13, Int 2, Wis 10, Cha 5<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft.</p>
</blockquote>
<h3 id="companion-mole_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> burrow 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/rend">rend</Link> (2 claws, 1d6)</p>
</blockquote>
</>};
const _mome_rath = {title: "Mome Rath", jsx: <><h2 id="companion-mome_rath-mome-rath">Mome Rath</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/mome_rath">Mome Rath</Link></p>
<p>Moss and lichen grow from the shaggy back of this boar-like animal. Its curving claws and prehensile tail hold it in the trees.</p>
<h3 id="companion-mome_rath-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 10 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 claws (1d3 plus poison)<br/><strong>Ability Scores</strong> Str 12, Dex 14, Con 15, Int 2, Wis 14, Cha 17<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-mome_rath--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 3 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}><Link to="/misc/sickened">sickened</Link> for 1d3 rounds</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-mome_rath-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> 2 claws (1d4 plus poison)<br/><strong>Special Attacks</strong> poison (as above, but the sickened condition lasts for 1d6 rounds)</p>
</blockquote>
</>};
const _moose = {title: "Moose", jsx: <><h2 id="companion-moose-moose">Moose</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/moose">Moose</Link></p>
<p>Powerful and often ill tempered, the moose is an intimidating choice for an animal companion.</p>
<h3 id="companion-moose-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d6), 2 hooves (1d3)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 14, Int 2, Wis 13, Cha 7<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-moose-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (1d8), 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (gore, 1d8)</p>
</blockquote>
</>};
const _moray_eel = {title: "Moray Eel", jsx: <><h2 id="companion-moray_eel-moray-eel">Moray Eel</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 119</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_moray_eel">Giant Moray Eel</Link></p>
<p>This sixteen-foot-long eel slithers through the water with uncanny grace, mouth open to display large teeth and a second set of jaws.</p>
<h3 id="companion-moray_eel-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 30 ft.<br/><strong>AC</strong> +5 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 16, Con 12, Int 1, Wis 12, Cha 8<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/grab">grab</Link></p>
</blockquote>
<h3 id="companion-moray_eel-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> gnaw</p>
</blockquote>
</>};
const _mosquito_giant = {title: "Giant Mosquito", jsx: <><h2 id="companion-mosquito_giant-giant-mosquito">Giant Mosquito</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_mosquito">Giant Mosquito</Link></p>
<p>Between its bloodthirsty nature and the annoying drone of its wings, the giant mosquito is a much-loathed creature. Unlike its smaller cousins, a giant mosquito can easily kill larger creatures by draining them of their blood.</p>
<h3 id="companion-mosquito_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., fly 60 ft. (good)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6 plus bleed and grab)<br/><strong>Ability Scores</strong> Str 14, Dex 21, Con 15, Int -, Wis 13, Cha 6<br/><strong>Special Attacks</strong> <Link to="/umr/bleed">bleed</Link> (1d4), <Link to="/umr/grab">grab</Link><br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<h3 id="companion-mosquito_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d8 plus bleed and grab)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> bleed (2d4), <Link to="/umr/blood_drain">blood drain</Link> (1d2 Constitution)</p>
</blockquote>
</>};
const _narwhal = {title: "Narwhal", jsx: <><h2 id="companion-narwhal-narwhal">Narwhal</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/narwhal">Narwhal</Link></p>
<p>This small whale lacks a dorsal fin and has pale, mottled skin, but its most notable feature is the single tusk protruding from its nose, easily as long as a human.</p>
<h3 id="companion-narwhal-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 80 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 11, Dex 19, Con 10, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link></p>
</blockquote>
<h3 id="companion-narwhal-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 120 ft., tusk</p>
</blockquote>
</>};
const _octopus = {title: "Octopus", jsx: <><h2 id="companion-octopus-octopus">Octopus</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 219</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/octopus">Octopus</Link></p>
<p>Eight tentacles, each adorned with rows of countless suckers, unfurl from the barrel-shaped body of this large-eyed creature.</p>
<h3 id="companion-octopus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., swim 30 ft., jet 200 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d3), tentacles (grab)<br/><strong>Ability Scores</strong> Str 12, Dex 17, Con 14, Int 2, Wis 12, Cha 3<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/ink_cloud">ink cloud</Link> (10-ft. radius)</p>
</blockquote>
<h3 id="companion-octopus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Attack</strong> bite (1d3 plus <Link to="/umr/poison">poison</Link>)<br/><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _orca = {title: "Orca", jsx: <><h2 id="companion-orca-orca">Orca</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 88</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This sleek black whale has a distinctive white patch near each eye and a mouth filled with sharp teeth.</p>
<h3 id="companion-orca-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 80 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 11, Dex 19, Con 10, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link></p>
</blockquote>
<h3 id="companion-orca-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 120 ft.</p>
</blockquote>
</>};
const _ornithomimosaur = {title: "Ornithomimosaur", jsx: <><h2 id="companion-ornithomimosaur-ornithomimosaur">Ornithomimosaur</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This bipedal dinosaur has long legs built for speed and a long neck that gives it an ostrich-like profile.</p>
<h3 id="companion-ornithomimosaur-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 claws (1d8)<br/><strong>Ability Scores</strong> Str 11, Dex 15, Con 12, Int 2, Wis 13, Cha 8<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-ornithomimosaur-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Speed</strong> 60 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d8 plus 1d4 <Link to="/umr/bleed">bleed</Link>)<br/><strong>Ability Scores</strong> Str +2, Dex +2, Con +2<br/><strong>Special Qualities</strong> sprint</p>
</blockquote>
</>};
const _ostrich = {title: "Ostrich", jsx: <><h2 id="companion-ostrich-ostrich">Ostrich</h2>
<p><strong>Sources</strong> <Link to="/source/osirion_legacy_of_the_pharaohs">Osirion, Legacy of the Pharaohs pg. 55</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/ostrich">Ostrich</Link></p>
<p>This human-sized bird has a long neck and legs sprouting from a round body covered in fluffy gray feathers.</p>
<h3 id="companion-ostrich-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> claw (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 16, Con 12, Int 2, Wis 13, Cha 11<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-ostrich-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 60 ft.<br/><strong>Attack</strong> claw (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> crouch</p>
</blockquote>
</>};
const _owl_giant = {title: "Giant Owl", jsx: <><h2 id="companion-owl_giant-giant-owl">Giant Owl</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_owl">Giant Owl</Link></p>
<p>Unlike the magical beast of the same name, this owl is a mundane but unusually large specimen of its kind, with powerful wings and deadly talons.</p>
<h3 id="companion-owl_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft., fly 60 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 talons (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 13, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-owl_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 talons (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Racial Skill Modifiers</strong> +4 Stealth<br/><strong>Special Attacks</strong> <Link to="/umr/rend">rend</Link> (2 talons, 1d6)</p>
</blockquote>
</>};
const _panda = {title: "Panda", jsx: <><h2 id="companion-panda-panda">Panda</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/panda">Panda</Link></p>
<p>Normally slow moving and docile, pandas are capable of surprising bursts of activity when needed.</p>
<h3 id="companion-panda-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 13, Dex 12, Con 14, Int 2, Wis 13, Cha 9<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-panda-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4<br/><strong>Special Attacks</strong> powerful bite</p>
</blockquote>
</>};
const _pilo = {title: "Pilo", jsx: <><h2 id="companion-pilo-pilo">Pilo</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_85_fires_of_creation">Pathfinder #85: Fires of Creation pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/pilo">Pilo</Link></p>
<p>Sharp quills cover this bright yellow, six-legged animal, and its long, twitching snout probes the air around it.</p>
<h3 id="companion-pilo-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 13, Con 14, Int 2, Wis 14, Cha 7<br/><strong>Special Attacks</strong> roll up<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-pilo-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail slap (1d4)<br/><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link>, quills</p>
</blockquote>
</>};
const _plesiosaurus = {title: "Plesiosaurus", jsx: <><h2 id="companion-plesiosaurus-plesiosaurus">Plesiosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/plesiosaurus">Plesiosaurus</Link></p>
<p>This streamlined reptile has a long, serpentine neck, at the end of which glares a many-fanged head.</p>
<h3 id="companion-plesiosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 5 ft., swim 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 12, Int 2, Wis 15, Cha 9<br/><strong>Special Qualities</strong> <Link to="/umr/keen_scent">keen scent</Link>, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-plesiosaurus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> ambush attack +1d6, <Link to="/umr/bleed">bleed</Link> (1)</p>
</blockquote>
</>};
const _polar_bear = {title: "Polar Bear", jsx: <><h2 id="companion-polar_bear-polar-bear">Polar Bear</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/polar_bear">Polar Bear</Link></p>
<p>Red gore stains this bear's muzzle, creating a striking contrast against its white fur.</p>
<h3 id="companion-polar_bear-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-polar_bear-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _pony = {title: "Pony", jsx: <><h2 id="companion-pony-pony">Pony</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/pony">Pony</Link></p>
<p>This squat equine plods forward with large, curious eyes. As it nears, it extends its muzzle, clearly expecting a treat.</p>
<h3 id="companion-pony-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 hooves (1d3)<br/><strong>Ability Scores</strong> Str 13, Dex 13, Con 12, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-pony-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Qualities</strong> combat trained</p>
</blockquote>
</>};
const _porcupine_giant = {title: "Giant Porcupine", jsx: <><h2 id="companion-porcupine_giant-giant-porcupine">Giant Porcupine</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_porcupine">Giant Porcupine</Link></p>
<p>This lumbering forest creature is adorned with an array of long, sharp quills that protrude from its coarse pelt.</p>
<h3 id="companion-porcupine_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> tail slap (1d4)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 15, Int 2, Wis 13, Cha 5<br/><strong>Special Attacks</strong> quills (as <Link to="/monster/porcupine">porcupine</Link> quills)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-porcupine_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tail slap (1d6)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +4<br/><strong>Special Attacks</strong> quills (as <Link to="/monster/giant_porcupine">giant porcupine</Link> quills)</p>
</blockquote>
</>};
const _prionosuchus = {title: "Prionosuchus", jsx: <><h2 id="companion-prionosuchus-prionosuchus">Prionosuchus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This primeval crocodile is equally effective in the water and on land. Its jaws are capable of crushing things with great force.</p>
<h3 id="companion-prionosuchus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., swim 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 plus <Link to="/umr/grab">grab</Link>)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 15, Int 1, Wis 12, Cha 4<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> (1d8)<br/><strong>Special Qualities</strong> <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-prionosuchus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6 plus grab)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4<br/><strong>Special Attacks</strong> constrict (2d6)</p>
</blockquote>
</>};
const _pygmy_hippopotamus = {title: "Pygmy Hippopotamus", jsx: <><h2 id="companion-pygmy_hippopotamus-pygmy-hippopotamus">Pygmy Hippopotamus</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 60</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/hippopotamus">Hippopotamus</Link></p>
<p>This fleshy behemoth wallows forward on four stumpy legs. Its jaws spread wide in a roar of challenge, exposing massive, tusk-like teeth.</p>
<h3 id="companion-pygmy_hippopotamus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 10, Con 13, Int 2, Wis 10, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-pygmy_hippopotamus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">trample</Link> (1d8)</p>
</blockquote>
</>};
const _quetzalcoatlus = {title: "Quetzalcoatlus", jsx: <><h2 id="companion-quetzalcoatlus-pterosaur-quetzalcoatlus">Pterosaur (Quetzalcoatlus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link>, <Link to="/source/pathfinder_37_souls_for_smugglers_shiv">Pathfinder #37: Souls for Smuggler's Shiv pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/quetzalcoatlus">Quetzalcoatlus</Link></p>
<p>This immense flying reptile has a staggering wingspan and a brightly colored head with a razor-sharp beak.</p>
<h3 id="companion-quetzalcoatlus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., fly 50 ft. (clumsy)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 9, Dex 21, Con 10, Int 2, Wis 14, Cha 12<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-quetzalcoatlus-9th-level-advancement">9th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6/&times;3), 2 wings (1d4)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> razor-sharp beak</p>
</blockquote>
</>};
const _ram = {title: "Ram", jsx: <><h2 id="companion-ram-ram">Ram</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 154</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/ram">Ram</Link></p>
<p>A formidable pair of heavy horns curls from the forehead of this sturdy, brown-and-white-furred ram.</p>
<h3 id="companion-ram-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d3)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 11, Int 2, Wis 14, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-ram-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> gore (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link> (1d8)<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link></p>
</blockquote>
</>};
const _rash_creeper = {title: "Rash Creeper", jsx: <><h2 id="companion-rash_creeper-rash-creeper">Rash Creeper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This mass of creeping vines and leaves slithers almost like a snake. Contact with this predatory plant causes a sickening and sometimes debilitating rash.</p>
<h3 id="companion-rash_creeper-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., climb 20 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> slam (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 13, Int 1, Wis 11, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below)<br/><strong>Special Qualities</strong> low-light vision<br/><strong>CMD</strong> can't be tripped</p>
<div className="sideNoteWrap"><ScrollContainer id="companion-rash_creeper--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/dex_damage">Dex damage</Link> and <Link to="/misc/sickened">sickened</Link> for 1 round</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-rash_creeper-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> slam (1d6 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> poison (same as above, but cure now requires 2 saves)</p>
</blockquote>
</>};
const _raven_giant = {title: "Giant Raven", jsx: <><h2 id="companion-raven_giant-giant-raven">Giant Raven</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_97_in_hells_bright_shadow">Pathfinder #97: In Hell's Bright Shadow pg. 82</Link>, <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_raven">Giant Raven</Link></p>
<p>This glossy, jet-black bird stands as tall as a dwarf. Its eerily intelligent black eyes are quick to take in everything around it.</p>
<h3 id="companion-raven_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., fly 50 ft. (average)<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 8, Dex 13, Con 10, Int 2, Wis 15, Cha 7<br/><strong>Special Qualities</strong> low-light vision, scavenger</p>
</blockquote>
<h3 id="companion-raven_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex +2, Con +2</p>
</blockquote>
</>};
const _reef_snake = {title: "Reef Snake", jsx: <><h2 id="companion-reef_snake-reef-snake">Reef Snake</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal</p>
<p>Highly venomous and an excellent swimmer, the brightly colored reef snake is at home in tidal waters but can slither about on land if needed.</p>
<h3 id="companion-reef_snake-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft., swim 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 12, Int 1, Wis 13, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/scent">scent</Link></p>
<div className="sideNoteWrap"><ScrollContainer id="companion-reef_snake--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-reef_snake-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2<br/><strong>Special Attacks</strong> poison (same as above, but damage becomes 1d2 Str and cure is now 2 saves)</p>
</blockquote>
</>};
const _reindeer = {title: "Reindeer", jsx: <><h2 id="companion-reindeer-reindeer">Reindeer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal</p>
<p>A denizen of the frozen tundra, the reindeer is a sure-footed companion in icy terrain, and it can used for transportation as well as defense.</p>
<h3 id="companion-reindeer-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 13, Int 2, Wis 12, Cha 5<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link>, snow adaptation (ignore <Link to="/rule/difficult_terrain">difficult terrain</Link> from ice and snow)</p>
</blockquote>
<h3 id="companion-reindeer-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Dex +2, Con +2</p>
</blockquote>
</>};
const _rhinoceros = {title: "Rhinoceros", jsx: <><h2 id="companion-rhinoceros-rhinoceros">Rhinoceros</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 235</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/rhinoceros">Rhinoceros</Link></p>
<p>This rhinoceros has a low-slung head with twisted ears that lie back along its neck.</p>
<h3 id="companion-rhinoceros-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 14, Con 15, Int 2, Wis 13, Cha 5<br/><strong>Special Qualities</strong> <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-rhinoceros-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/powerful_charge">powerful charge</Link></p>
</blockquote>
</>};
const _riding_python = {title: "Riding Python", jsx: <><h2 id="companion-riding_python-riding-python">Riding Python</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 128</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/venomous_snake">Venomous Snake</Link></p>
<p>This brightly colored snake assumes an aggressive posture, its hissing mouth open to display its fangs.</p>
<h3 id="companion-riding_python-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 11, Dex 14, Con 13, Int 1, Wis 10, Cha 4<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 60 ft.<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<h3 id="companion-riding_python-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> combat training (see <Link to="/skill/handle_animal">Handle Animal</Link>)</p>
</blockquote>
</>};
const _riding_rat = {title: "Riding Rat", jsx: <><h2 id="companion-riding_rat-riding-rat">Riding Rat</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 177</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/dire_rat">Dire Rat</Link></p>
<p>This filthy rat is the size of a small dog. It has a coat of coarse fur, a long and scabby tail, and two glittering eyes.</p>
<h3 id="companion-riding_rat-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft., climb 20 ft., swim 20 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 15, Con 17, Int 2, Wis 13, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-riding_rat-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +2 natural armor<br/><strong>Ability Scores</strong> Str +2, Dex +2<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/endurance">Endurance</Link></p>
</blockquote>
</>};
const _ringhorn = {title: "Ringhorn", jsx: <><h2 id="companion-ringhorn-ringhorn">Ringhorn</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_115_trail_of_the_hunted">Pathfinder #115: Trail of the Hunted pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/ringhorn">Ringhorn</Link></p>
<p>The horns of this goat-like deer grow up and curve around into a pair of massive, spiraling rings atop its head.</p>
<h3 id="companion-ringhorn-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 hooves (1d3)<br/><strong>Ability Scores</strong> Str 11, Dex 18, Con 11, Int 2, Wis 12, Cha 13<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-ringhorn-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/nimble_moves">Nimble Moves</Link></p>
</blockquote>
</>};
const _roc = {title: "Roc", jsx: <><h2 id="companion-roc-roc">Roc</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 236</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/roc">Roc</Link></p>
<p>This immense raptor unleashes a shrill cry as it bares its talons, each large enough to carry off a horse.</p>
<h3 id="companion-roc-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., fly 80 ft.<br/><strong>AC</strong> +5 natural armor<br/><strong>Attack</strong> 2 talons (1d4), bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 19, Con 9, Int 2, Wis 13, Cha 11<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-roc-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 talons (1d6 plus grab), bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _saber_toothed_cat = {title: "Saber-Toothed Cat", jsx: <><h2 id="companion-saber_toothed_cat-saber-toothed-cat">Saber-Toothed Cat</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal</p>
<p>Somewhat smaller than the more ferocious saber-toothed tiger, the saber-toothed cat is nonetheless an impressive predatory creature.</p>
<h3 id="companion-saber_toothed_cat-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 claws (1d4 plus <Link to="/umr/grab">grab</Link>)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 13, Int 2, Wis 13, Cha 8<br/><strong>Special Attacks</strong> saber-toothed bite (1d10 bite attack, only on a grapple check to deal damage)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-saber_toothed_cat-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 claws (1d6 plus grab)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/pounce">pounce</Link>, saber-toothed bite (2d8 bite attack, only on a grapple check to deal damage)</p>
</blockquote>
</>};
const _salamander_giant = {title: "Giant Salamander", jsx: <><h2 id="companion-salamander_giant-giant-salamander">Giant Salamander</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This oversized amphibian has a mouth full of tiny but rather sharp teeth.</p>
<h3 id="companion-salamander_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., swim 30 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 15, Int 1, Wis 12, Cha 4<br/><strong>Special Qualities</strong> amphibious, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft. (underwater only), <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-salamander_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +2 natural armor<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +4<br/><strong>Racial Skill Modifiers</strong> +4 Stealth</p>
</blockquote>
</>};
const _scorpion_giant = {title: "Giant Scorpion", jsx: <><h2 id="companion-scorpion_giant-giant-scorpion">Giant Scorpion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_scorpion">Giant Scorpion</Link></p>
<p>The sixteen-foot-long scorpion scrabbles forward, ferocious claws raised in challenge, stingered tail arched over its back.</p>
<h3 id="companion-scorpion_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 claws (1d4 plus grab) and sting (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 11, Dex 12, Con 12, Int -, Wis 10, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> darkvision, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft.<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-scorpion_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-scorpion_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 claws (1d6 plus grab) and sting (1d6 plus poison)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> poison (as above, but Str damage becomes 1d2<br/><strong>Special Qualities</strong> tremorsense 60 ft.</p>
</blockquote>
</>};
const _sea_crawler = {title: "Sea Crawler", jsx: <><h2 id="companion-sea_crawler-sea-crawler">Sea Crawler</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_121_the_lost_outpost">Pathfinder #121: The Lost Outpost pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/sea_crawler">Sea Crawler</Link></p>
<p>This furred creature has long tentacles that are covered in ridges and suction discs in place of arms, legs, and a tail.</p>
<h3 id="companion-sea_crawler-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., climb 30 ft., swim 10 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 tentacles (1d3)<br/><strong>Ability Scores</strong> Str 9, Dex 17, Con 10, Int 2, Wis 12, Cha 6<br/><strong>Special Attacks</strong> remarkable grip<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-sea_crawler-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link><br/><strong>Special Qualities</strong> regrowth</p>
</blockquote>
</>};
const _seahorse_giant = {title: "Giant Seahorse", jsx: <><h2 id="companion-seahorse_giant-giant-seahorse">Giant Seahorse</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_seahorse">Giant Seahorse</Link></p>
<p>This sea creature resembles a cross between fish and horse; it has small fins on its flanks and a gracefully curled tail.</p>
<h3 id="companion-seahorse_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> swim 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 16, Dex 13, Con 15, Int 1, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-seahorse_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +2, Con +2<br/><strong>Special Attacks</strong> anchor</p>
</blockquote>
</>};
const _shark = {title: "Shark", jsx: <><h2 id="companion-shark-shark">Shark</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/shark">Shark</Link></p>
<p>This blue shark's fins slice through the water, its black eyes rolling and its gaping jaws showing countless teeth.</p>
<h3 id="companion-shark-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> swim 60 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 15, Int 1, Wis 12, Cha 2<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-shark-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link></p>
</blockquote>
</>};
const _shissah = {title: "Shissah", jsx: <><h2 id="companion-shissah-shissah">Shissah</h2>
<p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East pg. 63</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/shissah">Shissah</Link></p>
<p>This sleek equine is slightly smaller than an average horse, but its eyes contain a gleam of higher intelligence.</p>
<h3 id="companion-shissah-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 60 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 hooves (1d4, secondary attack)<br/><strong>Ability Scores</strong> Str 16, Dex 15, Con 13, Int 2, Wis 14, Cha 10<br/><strong>Special Qualities</strong> desert dweller, easily trained</p>
</blockquote>
<h3 id="companion-shissah-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8), 2 hooves (1d4, secondary attack)<br/><strong>Ability Scores</strong> Str +2, Dex +4, Con +2<br/><strong>Special Qualities</strong> desert senses</p>
</blockquote>
</>};
const _skittergoat = {title: "Skittergoat", jsx: <><h2 id="companion-skittergoat-skittergoat">Skittergoat</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/skittergoat">Skittergoat</Link></p>
<p>This small goat has sharp horns that wrap around its head to point forward, making it resemble a tiny bull.</p>
<h3 id="companion-skittergoat-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 14, Con 11, Int 2, Wis 10, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-skittergoat-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> egg cracker</p>
</blockquote>
</>};
const _skunk_giant = {title: "Giant Skunk", jsx: <><h2 id="companion-skunk_giant-giant-skunk">Giant Skunk</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_skunk">Giant Skunk</Link></p>
<p>Its unmistakable black-and-white-striped coloration gives a clear warning sign to any who've experienced this foul-smelling creature's ire.</p>
<h3 id="companion-skunk_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 9, Dex 14, Con 13, Int 2, Wis 12, Cha 9<br/><strong>Special Attacks</strong> spray (ranged touch attack, 30-ft. range, musk, usable 1/day)<br/><strong>Special Qualities</strong> low-light vision, musk (Fort save or <Link to="/misc/sickened">sickened</Link> for 1d6 rounds, Con-based DC), <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-skunk_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> spray (usable 2/day)<br/><strong>Special Qualities</strong> musk (Fort save or <Link to="/misc/nauseated">nauseated</Link> for 1d3 rounds)</p>
</blockquote>
</>};
const _slithering_sundew = {title: "Slithering Sundew", jsx: <><h2 id="companion-slithering_sundew-slithering-sundew">Slithering Sundew</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link><br/><strong>Companion Type</strong> Plant</p>
<p>Looking something like a two-headed serpent, this slithering plant strikes with two sticky, constricting slams.</p>
<h3 id="companion-slithering_sundew-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 slams (1d4 plus 1d2 acid plus grab)<br/><strong>Ability Scores</strong> Str 14, Dex 17, Con 13, Int 1, Wis 12, Cha 6<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> (1d8 acid)<br/><strong>Special Qualities</strong> low-light vision<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<h3 id="companion-slithering_sundew-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 slams (1d6 plus 1d3 acid plus grab)<br/><strong>Ability Scores</strong> Str +6, Dex -2, Con +4<br/><strong>Special Attacks</strong> constrict (2d6 acid)</p>
</blockquote>
</>};
const _slug_giant = {title: "Giant Slug", jsx: <><h2 id="companion-slug_giant-giant-slug">Giant Slug</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_slug">Giant Slug</Link></p>
<p>This massive, gray-brown slug leaves a viscous trail of slime in its wake as a long rasping tongue tastes the air for prey.</p>
<h3 id="companion-slug_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> tongue (1d4 plus 1 acid)<br/><strong>Ability Scores</strong> Str 13, Dex 8, Con 13, Int -, Wis 10, Cha 1<br/><strong>Special Attacks</strong> spit acid (ranged touch attack, 30 foot range, 1d6 acid damage)<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link> 30 ft., DR 5/slashing or piercing, susceptible to salt<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<h3 id="companion-slug_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> tongue (1d6 plus 1d2 acid)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2<br/><strong>Special Attacks</strong> spit acid (ranged touch attack, 30-foot range, 1d8 acid damage)<br/><strong>Special Qualities</strong> <Link to="/umr/blindsight">blindsight</Link> 30 ft.</p>
</blockquote>
</>};
const _snake_constrictor = {title: "Snake (Constrictor)", jsx: <><h2 id="companion-snake_constrictor-snake-constrictor">Snake (Constrictor)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/constrictor_snake">Constrictor Snake</Link></p>
<p>This large snake has a thick, muscular body and dull green scales decorated with dirty brown stripes.</p>
<h3 id="companion-snake_constrictor-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., climb 20 ft., swim 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d3)<br/><strong>Ability Scores</strong> Str 15, Dex 17, Con 13, Int 1, Wis 12, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-snake_constrictor-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> 1d4</p>
</blockquote>
</>};
const _snake_viper = {title: "Snake (Viper)", jsx: <><h2 id="companion-snake_viper-snake-viper">Snake (Viper)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/venomous_snake">Viper</Link></p>
<p>This brightly colored snake assumes an aggressive posture, its hissing mouth open to display its fangs.</p>
<h3 id="companion-snake_viper-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., climb 20 ft., swim 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d3 plus poison)<br/><strong>Ability Scores</strong> Str 8, Dex 17, Con 11, Int 1, Wis 12, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-snake_viper--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-snake_viper-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d4 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _snapping_flytrap = {title: "Snapping Flytrap", jsx: <><h2 id="companion-snapping_flytrap-snapping-flytrap">Snapping Flytrap</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This mobile flytrap features two spiky jaws and scuttles about on a tangle of roots.</p>
<h3 id="companion-snapping_flytrap-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 bites (1d4 plus grab)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 14, Int 1, Wis 12, Cha 5<br/><strong>Special Qualities</strong> low-light vision<br/><strong>CMD</strong> can't be tripped</p>
</blockquote>
<h3 id="companion-snapping_flytrap-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 3 bites (1d6 plus grab)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _sniper_cactus = {title: "Sniper Cactus", jsx: <><h2 id="companion-sniper_cactus-sniper-cactus">Sniper Cactus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This single-stalked cactus sports dozens of long, thin needles. Capable of crawling on three stalk-like roots, the sniper cactus can fire its thorns with deadly accuracy.</p>
<h3 id="companion-sniper_cactus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d4) or thorn (ranged attack, 60-foot range, 1d8 piercing damage, no Strength bonus on damage)<br/><strong>Ability Scores</strong> Str 10, Dex 13, Con 14, Int 1, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision<br/><strong>CMD</strong> +2 vs. trip</p>
</blockquote>
<h3 id="companion-sniper_cactus-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> gore (1d6) or 2 thorns (ranged attack, 60-foot range, 2d6 piercing damage, no Strength bonus on damage)<br/><strong>Ability Scores</strong> Dex +2, Con +2</p>
</blockquote>
</>};
const _solifugid_giant = {title: "Giant Solifugid", jsx: <><h2 id="companion-solifugid_giant-giant-solifugid">Giant Solifugid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_solifugid">Giant Solifugid</Link></p>
<p>This vermin's double set of vertical mandibles make this giant solifugid a particularly ferocious-looking companion. Its speed allows it to strike at its enemies from cover without them knowing what happened.</p>
<h3 id="companion-solifugid_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 50 ft., climb 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 15, Int -, Wis 11, Cha 2<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<h3 id="companion-solifugid_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> <Link to="/umr/pounce">pounce</Link>, <Link to="/umr/rend">rend</Link> (2 claws; 1d4)</p>
</blockquote>
</>};
const _sorico = {title: "Sorico", jsx: <><h2 id="companion-sorico-sorico">Sorico</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_85_fires_of_creation">Pathfinder #85: Fires of Creation pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/sorico">Sorico</Link></p>
<p>This large, tawny rodent has powerful forelimbs ending in spade-like claws. Sand and mud cakes the creature's fur.</p>
<h3 id="companion-sorico-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., burrow 10 ft.<br/><strong>Attack</strong> bite (1d4), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 13, Con 15, Int 2, Wis 14, Cha 7<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-sorico-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex +2, Con +2<br/><strong>Special Attacks</strong> dust cloud</p>
</blockquote>
</>};
const _spider_giant = {title: "Giant Spider", jsx: <><h2 id="companion-spider_giant-giant-spider">Giant Spider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_spider">Giant Spider</Link></p>
<p>A spider the size of a man crawls silently from the depths of its funnel-shaped web.</p>
<h3 id="companion-spider_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +0 natural armor<br/><strong>Attack</strong> bite (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 6, Dex 17, Con 10, Int -, Wis 10, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> darkvision, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft.<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-spider_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-spider_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _spider_web_tyrant = {title: "Spider (Web Tyrant)", jsx: <><h2 id="companion-spider_web_tyrant-spider-web-tyrant">Spider (Web Tyrant)</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin</p>
<p>The web tyrant spider's bright coloration and long legs make for a stunning but unnerving companion.</p>
<h3 id="companion-spider_web_tyrant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 10, Int -, Wis 10, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/web">web</Link><br/><strong>Special Qualities</strong> darkvision 60 ft<br/><strong>CMD</strong> +12 vs. trip</p>
</blockquote>
<h3 id="companion-spider_web_tyrant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _spitting_cobra = {title: "Spitting Cobra", jsx: <><h2 id="companion-spitting_cobra-spitting-cobra">Spitting Cobra</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/emperor_cobra">Emperor Cobra</Link></p>
<p>This brightly colored snake can spit its venom, giving it a dangerous ranged attack.</p>
<h3 id="companion-spitting_cobra-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., climb 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d3)<br/><strong>Ability Scores</strong> Str 8, Dex 15, Con 11, Int 1, Wis 12, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below), spit (ranged touch attack, 10-foot range, poison, usable every 2d4 rounds)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
<div className="sideNoteWrap"><ScrollContainer id="companion-spitting_cobra--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>blurred vision (20% miss chance) 1 round</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-spitting_cobra-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Dex +2, Con +2<br/><strong>Special Attacks</strong> poision (effect becomes <Link to="/misc/blindness">blindness</Link> 1 round)</p>
</blockquote>
</>};
const _squid = {title: "Squid", jsx: <><h2 id="companion-squid-squid">Squid</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 259</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/squid">Squid</Link></p>
<p>This slender red squid darts through the water with alacrity. Two large eyes stare from above the creature's tentacles.</p>
<h3 id="companion-squid-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 60 ft., jet 240 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> tentacles (1d4 plus <Link to="/umr/grab">grab</Link>), bite (1d3)<br/><strong>Ability Scores</strong> Str 14, Dex 15, Con 11, Int 2, Wis 12, Cha 2<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/ink_cloud">ink cloud</Link> (5-ft. radius)</p>
</blockquote>
<h3 id="companion-squid-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _squid_giant = {title: "Giant Squid", jsx: <><h2 id="companion-squid_giant-giant-squid">Giant Squid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_squid">Giant Squid</Link></p>
<p>Although this creature isn't nearly the size of a true giant squid, it remains large enough to do serious damage to foes with its many tentacles.</p>
<h3 id="companion-squid_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> swim 40 ft., jet 90 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), tentacles (1d4 plus <Link to="/umr/grab">grab</Link>)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 13, Int 2, Wis 12, Cha 3<br/><strong>Special Qualities</strong> aquatic, low-light vision</p>
</blockquote>
<h3 id="companion-squid_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), tentacles (1d6 plus grab)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> (1d6)<br/><strong>Special Qualities</strong> <Link to="/umr/ink_cloud">ink cloud</Link> (20-ft. radius)</p>
</blockquote>
</>};
const _stag = {title: "Stag", jsx: <><h2 id="companion-stag-stag">Stag</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/stag">Stag</Link></p>
<p>Majestic and graceful, this powerful animal has branching antlers atop it head.</p>
<h3 id="companion-stag-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 50 ft.<br/><strong>Attack</strong> gore (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 19, Con 14, Int 2, Wis 15, Cha 8<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-stag-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> gore (1d6), 2 hooves (1d4)<br/><strong>Ability Scores</strong> Str +2, Dex -2, Con +2</p>
</blockquote>
</>};
const _stingray = {title: "Stingray", jsx: <><h2 id="companion-stingray-stingray">Stingray</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 232</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/stingray">Stingray</Link></p>
<p>A long tail fitted with a barbed stinger trails from this flat, triangular fish's body.</p>
<h3 id="companion-stingray-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> swim 40 ft.<br/><strong>Attack</strong> sting (1d3 plus <Link to="/umr/poison">poison</Link>)<br/><strong>Ability Scores</strong> Str 6, Dex 15, Con 13, Int 1, Wis 13, Cha 2<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-stingray-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> sting (1d4 plus poison)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> <Link to="/umr/blindsense">blindsense</Link> 30 ft.</p>
</blockquote>
</>};
const _swan_trumpeter = {title: "Trumpeter Swan", jsx: <><h2 id="companion-swan_trumpeter-trumpeter-swan">Trumpeter Swan</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/trumpeter_swan">Trumpeter Swan</Link></p>
<p>This large waterfowl has a wide wingspan, all-white feathers, a black bill, and a long, curving neck.</p>
<h3 id="companion-swan_trumpeter-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., fly 80 ft. (average)<br/><strong>Attack</strong> bite (1d4), 2 wings (1d3)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 12, Int 2, Wis 12, Cha 5<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-swan_trumpeter-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _switchback_jackal = {title: "Switchback Jackal", jsx: <><h2 id="companion-switchback_jackal-switchback-jackal">Switchback Jackal</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_115_trail_of_the_hunted">Pathfinder #115: Trail of the Hunted pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/switchback_jackal">Switchback Jackal</Link></p>
<p>Resembling a small, half-starved wolf, this canine stares with deep intensity and undeniable hunger.</p>
<h3 id="companion-switchback_jackal-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 11, Dex 13, Con 14, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, problem solver, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-switchback_jackal-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Dex +4, Con +2, Wis +2<br/><strong>Bonus Feat(s)</strong> <Link to="/feat/overwhelm">Overwhelm</Link></p>
</blockquote>
</>};
const _termite_giant = {title: "Giant Termite", jsx: <><h2 id="companion-termite_giant-giant-termite">Giant Termite</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_termite">Giant Termite</Link></p>
<p>The giant termite has a set of large powerful mandibles, and it is particularly effective when fighting alongside other termite companions.</p>
<h3 id="companion-termite_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 11, Con 12, Int -, Wis 12, Cha 7<br/><strong>Special Attacks</strong> swarming (two giant termites can share the same space, and if they both attack the same target, they are considered to be flanking that foe)<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<h3 id="companion-termite_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d8 plus 1d6 acid)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> gnaw (bite attack ignores hardness of 5 or less)</p>
</blockquote>
</>};
const _therizinosaurus = {title: "Therizinosaurus", jsx: <><h2 id="companion-therizinosaurus-therizinosaurus">Therizinosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/therizinosaurus">Therizinosaurus</Link></p>
<p>This feathered bipedal saurian looks somewhat comical - save for its outlandish sword-sized claws.</p>
<h3 id="companion-therizinosaurus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> 2 claws (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 18, Con 10, Int 2, Wis 15, Cha 11<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link>, sprint</p>
</blockquote>
<h3 id="companion-therizinosaurus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> 2 claws (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/bleed">bleed</Link> (1d6), sweeping strike</p>
</blockquote>
</>};
const _thylacine = {title: "Thylacine", jsx: <><h2 id="companion-thylacine-thylacine">Thylacine</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/thylacine">Thylacine</Link></p>
<p>This odd creature is about the size of a dog, but it has the slender build of a cat, heavy whiskers, and dark stripes down its back. Its long tail flips about, smacking the ground as it scans the woods. It yips and bays in a complex pattern, offering warning to anything that may cross its path.</p>
<h3 id="companion-thylacine-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft.<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 16, Int 2, Wis 13, Cha 7<br/><strong>Special Attacks</strong> powerful jaws<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-thylacine-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4</p>
</blockquote>
</>};
const _titanoboa = {title: "Titanoboa", jsx: <><h2 id="companion-titanoboa-titanoboa">Titanoboa</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/titanoboa">Titanoboa (Megafauna)</Link></p>
<p>This immense serpent moves in deliberate, slithering undulations, its forked tongue tasting the air eagerly for the scent of prey.</p>
<h3 id="companion-titanoboa-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft., swim 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 11, Int 2, Wis 17, Cha 8<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-titanoboa-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Qualities</strong> <Link to="/umr/constrict">constrict</Link> (1d6), <Link to="/umr/grab">grab</Link></p>
</blockquote>
</>};
const _tortoise_giant = {title: "Giant Tortoise", jsx: <><h2 id="companion-tortoise_giant-giant-tortoise">Giant Tortoise</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_tortoise">Giant Tortoise</Link></p>
<p>This tortoise is half the height of a human, and has a domed shell, leathery skin, and a long neck.</p>
<h3 id="companion-tortoise_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft.<br/><strong>AC</strong> +6 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 14, Dex 8, Con 16, Int 2, Wis 13, Cha 9<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-tortoise_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +8 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Qualities</strong> <Link to="/feat/great_fortitude">Great Fortitude</Link> (Bonus Feat)</p>
</blockquote>
</>};
const _troodon = {title: "Troodon", jsx: <><h2 id="companion-troodon-troodon">Troodon</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/troodon">Troodon</Link></p>
<p>This small, slender-necked dinosaur's bright, inquisitive eyes seem to miss nothing.</p>
<h3 id="companion-troodon-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 40 ft.<br/><strong>Attack</strong> bite (1d4), 2 claws (1d3)<br/><strong>Ability Scores</strong> Str 7, Dex 17, Con 10, Int 2, Wis 14, Cha 13<br/><strong>Special Qualities</strong> easily trained, low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-troodon-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str +4, Dex +4, Con +4</p>
</blockquote>
</>};
const _turtle_giant_snapping = {title: "Giant Snapping Turtle", jsx: <><h2 id="companion-turtle_giant_snapping-giant-snapping-turtle">Giant Snapping Turtle</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 273</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_snapping_turtle">Giant Snapping Turtle</Link></p>
<p>This lumbering turtle is the size of a house; its head features powerful, razor-sharp beak.</p>
<h3 id="companion-turtle_giant_snapping-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., swim 20 ft.<br/><strong>AC</strong> +10 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 8, Dex 10, Con 9, Int 1, Wis 13, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-turtle_giant_snapping-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link></p>
</blockquote>
</>};
const _uintatherium = {title: "Uintatherium", jsx: <><h2 id="companion-uintatherium-uintatherium">Uintatherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This large creature is built like a rhinoceros, but with fangs like a saber-toothed tiger and smaller horn-like ridges.</p>
<h3 id="companion-uintatherium-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 17, Int 1, Wis 13, Cha 3<br/><strong>Special Qualities</strong> <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-uintatherium-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _vulture_giant = {title: "Giant Vulture", jsx: <><h2 id="companion-vulture_giant-giant-vulture">Giant Vulture</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_vulture">Giant Vulture</Link></p>
<p>A wickedly hooked beak and an immense bald head draw attention from this enormous scavenger's vast wingspan.</p>
<h3 id="companion-vulture_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft., fly 50 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 14, Int 2, Wis 15, Cha 7<br/><strong>Special Qualities</strong> low-light vision, +4 on saves vs. disease</p>
</blockquote>
<h3 id="companion-vulture_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _walrus = {title: "Walrus", jsx: <><h2 id="companion-walrus-walrus">Walrus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/walrus_b4">Walrus</Link></p>
<p>This bulky, thick-skinned, flippered creature has on its face two enormous tusks and what looks like a coarse mustache.</p>
<h3 id="companion-walrus-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 10 ft., swim 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 13, Con 14, Int 2, Wis 13, Cha 6<br/><strong>Special Qualities</strong> <Link to="/umr/hold_breath">hold breath</Link>, low-light vision</p>
</blockquote>
<h3 id="companion-walrus-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _warcat_of_rull = {title: "Warcat of Rull", jsx: <><h2 id="companion-warcat_of_rull-warcat-of-rull">Warcat of Rull</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/warcat_of_rull">Warcat of Rull</Link></p>
<p>This massive cat-like creature has the lithe grace of a feline despite a shell-like armor of segmented plates.</p>
<h3 id="companion-warcat_of_rull-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6), 2 claws (1d4)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 14, Int 2, Wis 11, Cha 5<br/><strong>Special Attacks</strong> <Link to="/umr/rake">rake</Link> (1d4)<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-warcat_of_rull-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8), 2 claws (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link>, rake (1d6)</p>
</blockquote>
</>};
const _wasp_giant = {title: "Giant Wasp", jsx: <><h2 id="companion-wasp_giant-giant-wasp">Giant Wasp</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_wasp">Giant Wasp</Link></p>
<p>This horse-sized wasp is covered in yellow and black vertical stripes - its stinger is the size of a sword and drips with venom.</p>
<h3 id="companion-wasp_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., fly 60 ft. (good)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> sting (1d6 plus poison)<br/><strong>Ability Scores</strong> Str 10, Dex 14, Con 11, Int -, Wis 13, Cha 4<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> darkvision<br/><strong>CMD</strong> +8 vs. trip</p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-wasp_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-wasp_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> sting (1d8 plus poison)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _weasel_giant = {title: "Giant Weasel", jsx: <><h2 id="companion-weasel_giant-giant-weasel">Giant Weasel</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_weasel">Giant Weasel</Link></p>
<p>This massive weasel moves smoothly across the ground, almost slithering like a snake, before pouncing with teeth bared.</p>
<h3 id="companion-weasel_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 10 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d4)<br/><strong>Ability Scores</strong> Str 10, Dex 19, Con 13, Int 2, Wis 12, Cha 10<br/><strong>Special Attacks</strong> <Link to="/umr/blood_drain">blood drain</Link> (1 Con), <Link to="/umr/grab">grab</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-weasel_giant-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2</p>
</blockquote>
</>};
const _whiptail_centipede_giant = {title: "Giant Whiptail Centipede", jsx: <><h2 id="companion-whiptail_centipede_giant-giant-whiptail-centipede">Giant Whiptail Centipede</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link><br/><strong>Companion Type</strong> Vermin<br/><strong>Monster Entry:</strong> <Link to="/monster/giant_whiptail_centipede">Giant Whiptail Centipede</Link></p>
<p>The long thin tendrils that lash out from this centipede's tail can trip foes with surprising ease.</p>
<h3 id="companion-whiptail_centipede_giant-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft., climb 40 ft.<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> bite (1d6 plus poison)<br/><strong>Ability Scores</strong> Str 9, Dex 13, Con 13, Int -, Wis 10, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link> (see below)<br/><strong>Special Qualities</strong> darkvision 60 ft.<br/><strong>CMD</strong> can't be tripped</p>
<div className="sideNoteWrap"><ScrollContainer id="companion-whiptail_centipede_giant--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h3 id="companion-whiptail_centipede_giant-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 plus poison), tail slap (1d2 nonlethal plus <Link to="/umr/trip">trip</Link>, no Strength bonus on damage)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _whisperfall_vulture = {title: "Whisperfall Vulture", jsx: <><h2 id="companion-whisperfall_vulture-whisperfall-vulture">Whisperfall Vulture</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/whisperfall_vulture">Whisperfall Vulture</Link></p>
<p>This dark-winged vulture has a wickedly hooked beak stained with bright red blood.</p>
<h3 id="companion-whisperfall_vulture-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 10 ft., fly 60 ft. (average)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 12, Dex 15, Con 12, Int 2, Wis 13, Cha 7<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-whisperfall_vulture-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _wolf = {title: "Wolf", jsx: <><h2 id="companion-wolf-wolf">Wolf</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/wolf">Wolf</Link></p>
<p>This powerful canine watches its prey with piercing yellow eyes, darting its tongue across sharp white teeth.</p>
<h3 id="companion-wolf-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6 plus <Link to="/umr/trip">trip</Link>)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 15, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-wolf-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 plus trip)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
const _wolfdog = {title: "Wolfdog", jsx: <><h2 id="companion-wolfdog-wolfdog">Wolfdog</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Animal</p>
<p>This creature is a dependable hybrid of wolf and dog.</p>
<h3 id="companion-wolfdog-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-wolfdog-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Attack</strong> bite (1d6 plus 1d4 <Link to="/umr/bleed">bleed</Link>)<br/><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _wolliped = {title: "Wolliped", jsx: <><h2 id="companion-wolliped-wolliped">Wolliped</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/wolliped">Wolliped</Link></p>
<p>This shaggy, multi-legged creature has a flattened face with wide nostrils and four eyes. Ivory tusks jut downward, flanking its mouth.</p>
<h3 id="companion-wolliped-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 16, Con 12, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-wolliped-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +4<br/><strong>Special Attacks</strong> spit, <Link to="/umr/trample">trample</Link></p>
</blockquote>
</>};
const _worg = {title: "Worg", jsx: <><h2 id="companion-worg-worg">Worg</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link><br/><strong>Companion Type</strong> Monstrous<br/><strong>Monster Entry:</strong> <Link to="/monster/worg">Worg</Link></p>
<p>This unusually large wolf has an evil, almost intelligent light shining in its deep red eyes.</p>
<p><strong>Prerequisites</strong> Alignment within one step of neutral evil.</p>
<h3 id="companion-worg-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 17, Dex 15, Con 13, Int 6, Wis 14, Cha 10<br/><strong>Special Qualities</strong> darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link><br/><strong>Languages</strong> Common, Goblin</p>
</blockquote>
<h3 id="companion-worg-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8 plus <Link to="/umr/trip">trip</Link>)<br/><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
<h3 id="companion-worg-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>Once per day as a standard action, the worg can make a fearful howl. This functions as the <em>fear cone (30 ft.)</em> version of the <Link to="/umr/fear">fear</Link> universal monster rule.</p>
</>};
const _yak = {title: "Yak", jsx: <><h2 id="companion-yak-yak">Yak</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/yak">Yak</Link></p>
<p>Stout and stubborn, the yak is sure footed and dependable in rough terrain.</p>
<h3 id="companion-yak-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 30 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str 14, Dex 10, Con 12, Int 2, Wis 10, Cha 5<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-yak-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>AC</strong> +2 natural armor<br/><strong>Ability Scores</strong> Str +4, Con +4<br/><strong>Special Qualities</strong> pack animal (speed is never modified by encumbrance)</p>
</blockquote>
</>};
const _yolubilis_heron = {title: "Yolubilis Heron", jsx: <><h2 id="companion-yolubilis_heron-yolubilis-heron">Yolubilis Heron</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_97_in_hells_bright_shadow">Pathfinder #97: In Hell's Bright Shadow pg. 83</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/yolubilis_heron">Yolubilis Heron</Link></p>
<p>As tall as a tree, this dark gray bird stands on long legs. Its curved neck supports a sleek head with a slim but wicked beak.</p>
<h3 id="companion-yolubilis_heron-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., fly 60 ft. (average)<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d8)<br/><strong>Ability Scores</strong> Str 13, Dex 15, Con 14, Int 2, Wis 12, Cha 9<br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<h3 id="companion-yolubilis_heron-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +2<br/><strong>Special Attacks</strong> still predator</p>
</blockquote>
</>};
const _yzobu = {title: "Yzobu", jsx: <><h2 id="companion-yzobu-yzobu">Yzobu</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 124</Link><br/><strong>Companion Type</strong> Animal<br/><strong>Monster Entry:</strong> <Link to="/monster/yzobu">Yzobu</Link></p>
<p>This four-legged animal with a long-horned, bovine head looks like a cross between a horse and a long-haired yak.</p>
<h3 id="companion-yzobu-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 40 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> gore (1d6)<br/><strong>Ability Scores</strong> Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-yzobu-7th-level-advancement">7th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +3 natural armor<br/><strong>Attack</strong> gore (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/trample">stampede, trample</Link><br/><strong>Special Qualities</strong> stench</p>
</blockquote>
</>};
const _zebra = {title: "Zebra", jsx: <><h2 id="companion-zebra-zebra">Zebra</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link><br/><strong>Companion Type</strong> Animal</p>
<p>The iconic black and white stripes of the zebra make it instantly recognizable.</p>
<h3 id="companion-zebra-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 50 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d4), 2 hooves (primary attack, 1d4)<br/><strong>Ability Scores</strong> Str 14, Dex 15, Con 13, Int 2, Wis 14, Cha 6<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-zebra-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Dex +2, Con +2</p>
</blockquote>
</>};
const _carnivorous_flower = {title: "Carnivorous Flower", jsx: <><h2 id="companion-carnivorous_flower-carnivorous-flower">Carnivorous Flower</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<h3 id="companion-carnivorous_flower-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 30 ft., climb 10 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> bite (1d6)<br/><strong>Ability Scores</strong> Str 10, Dex 17, Con 15, Int 2, Wis 12, Cha 10<br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-carnivorous_flower-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Attack</strong> bite (2d6)<br/><strong>Ability Scores</strong> Str +4, Dex -2, Con +2<br/><strong>Special Attacks</strong> rage (1/day, as the <Link to="/class/barbarian">barbarian</Link> class feature for 6 rounds)</p>
</blockquote>
</>};
const _crawling_vine = {title: "Crawling Vine", jsx: <><h2 id="companion-crawling_vine-crawling-vine">Crawling Vine</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<h3 id="companion-crawling_vine-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 20 ft., climb 20 ft.<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> slam (1d4)<br/><strong>Ability Scores</strong> Str 13, Dex 17, Con 13, Int 1, Wis 12, Cha 2<br/><strong>Special Attacks</strong> <Link to="/umr/grab">grab</Link><br/><strong>Special Qualities</strong> low-light vision, <Link to="/umr/scent">scent</Link></p>
</blockquote>
<h3 id="companion-crawling_vine-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> slam (1d6)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4<br/><strong>Special Attacks</strong> <Link to="/umr/constrict">constrict</Link> 1d6</p>
</blockquote>
</>};
const _puffball = {title: "Puffball (Floating Fungus)", jsx: <><h2 id="companion-puffball-puffball-floating-fungus">Puffball (Floating Fungus)</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link><br/><strong>Companion Type</strong> Plant</p>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<h3 id="companion-puffball-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Small<br/><strong>Speed</strong> 20 ft., fly 60 ft. (average)<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> thorn (1d4 plus poison)<br/><strong>Ability Scores</strong> Str 10, Dex 15, Con 12, Int 2, Wis 14, Cha 6<br/><strong>Special Attacks</strong> <Link to="/umr/poison">poison</Link><br/><strong>Special Qualities</strong> low-light vision</p>
</blockquote>
<div className="sideNoteWrap"><ScrollContainer id="companion-puffball--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the companion's HD + its Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><h3 id="companion-puffball-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Ability Scores</strong> Str +2, Con +2</p>
</blockquote>
</>};
const _treant_sapling = {title: "Treant, Sapling", jsx: <><h2 id="companion-treant_sapling-sapling-treant">Sapling Treant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link><br/><strong>Companion Type</strong> Plant<br/><strong>Monster Entry:</strong> <Link to="/monster/treant">Treant</Link></p>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<h3 id="companion-treant_sapling-starting-statistics">Starting Statistics</h3>
<blockquote>
<p><strong>Size</strong> Medium<br/><strong>Speed</strong> 30 ft., climb 30 ft.<br/><strong>AC</strong> +1 natural armor<br/><strong>Attack</strong> 2 slams (1d6)<br/><strong>Ability Scores</strong> Str 15, Dex 10, Con 12, Int 2, Wis 12, Cha 7<br/><strong>Special Qualities</strong> double damage against objects, low-light vision</p>
</blockquote>
<h3 id="companion-treant_sapling-4th-level-advancement">4th-Level Advancement</h3>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>AC</strong> +2 natural armor<br/><strong>Attack</strong> 2 slams (1d8)<br/><strong>Ability Scores</strong> Str +8, Dex -2, Con +4</p>
</blockquote>
</>};
export default {not_found:_not_found,amargasaurus:_amargasaurus,anglerfish:_anglerfish,ant_giant:_ant_giant,antelope:_antelope,ape:_ape,archaeopteryx:_archaeopteryx,armorfish:_armorfish,assassin_bug_giant:_assassin_bug_giant,aurochs:_aurochs,axe_beak:_axe_beak,baboon:_baboon,bacallia:_bacallia,badger:_badger,bear:_bear,beetle_giant:_beetle_giant,bird:_bird,blackwisp_egret:_blackwisp_egret,blue_whale:_blue_whale,boar:_boar,bristle_boar:_bristle_boar,brontotherium:_brontotherium,bull_of_zagresh:_bull_of_zagresh,bustard:_bustard,camel:_camel,cameroceras:_cameroceras,capybara:_capybara,cat_big:_cat_big,cat_small_cheetah_leopard:_cat_small_cheetah_leopard,caterpillar_giant:_caterpillar_giant,cattle:_cattle,cave_salamander:_cave_salamander,centipede_giant:_centipede_giant,ceratosaurus:_ceratosaurus,chalicotherium:_chalicotherium,chimpanzee:_chimpanzee,cockroach_giant:_cockroach_giant,corpse_eater_fungus:_corpse_eater_fungus,crab_giant:_crab_giant,creeping_puffball:_creeping_puffball,crocodile:_crocodile,dallo:_dallo,deinotherium:_deinotherium,devil_monkey:_devil_monkey,digmaul:_digmaul,allosaurus:_allosaurus,ankylosaurus:_ankylosaurus,brachiosaurus:_brachiosaurus,deinonychus:_deinonychus,dimetrodon:_dimetrodon,dimorphodon:_dimorphodon,diplodocus:_diplodocus,elasmosaurus:_elasmosaurus,iguanodon:_iguanodon,pachycephalosaurus:_pachycephalosaurus,parasaurolophus:_parasaurolophus,pteranodon:_pteranodon,spinosaurus:_spinosaurus,stegosaurus:_stegosaurus,styracosaurus:_styracosaurus,triceratops:_triceratops,tylosaurus:_tylosaurus,tyrannosaurus:_tyrannosaurus,velociraptor:_velociraptor,dire_bat:_dire_bat,dire_polar_bear:_dire_polar_bear,dire_rat:_dire_rat,dog:_dog,dolphin:_dolphin,dragonfly_giant:_dragonfly_giant,dunkleosteus:_dunkleosteus,elasmotherium:_elasmotherium,electric_eel:_electric_eel,elephant_mastodon:_elephant_mastodon,elk:_elk,enchanter_heron:_enchanter_heron,eohippus:_eohippus,eurypterid:_eurypterid,faerie_mount:_faerie_mount,falcon:_falcon,frilled_lizard_giant:_frilled_lizard_giant,frog_father:_frog_father,frog:_frog,gallerok:_gallerok,gar:_gar,giganotosaurus:_giganotosaurus,giraffe:_giraffe,gliding_turtle:_gliding_turtle,goblin_dog:_goblin_dog,goliath_frog:_goliath_frog,gorthek:_gorthek,griffon:_griffon,grizzly_bear:_grizzly_bear,gulper_plant:_gulper_plant,hammerhead_shark:_hammerhead_shark,hippocampus:_hippocampus,hippogriff:_hippogriff,hippopotamus:_hippopotamus,hobbe_hound:_hobbe_hound,horse:_horse,hunting_cactus:_hunting_cactus,hyena:_hyena,impaler_shrike:_impaler_shrike,kangaroo:_kangaroo,kaprosuchus:_kaprosuchus,kentrosaurus:_kentrosaurus,leech_giant:_leech_giant,lizard_giant_chameleon:_lizard_giant_chameleon,lizard_giant_gecko:_lizard_giant_gecko,lizard_monitor_lizard:_lizard_monitor_lizard,llama:_llama,locust_giant:_locust_giant,manta_ray:_manta_ray,mantis_shrimp_giant:_mantis_shrimp_giant,mantis_giant:_mantis_giant,marax:_marax,marsupial_devil:_marsupial_devil,marsupial_lion:_marsupial_lion,archelon:_archelon,arsinoitherium:_arsinoitherium,baluchitherium:_baluchitherium,basilosaurus:_basilosaurus,embolotherium:_embolotherium,glyptodon:_glyptodon,megalania:_megalania,megaloceros:_megaloceros,megatherium:_megatherium,megaprimatus:_megaprimatus,mindspin_ram:_mindspin_ram,moa:_moa,mokele_mbembe:_mokele_mbembe,mole_giant:_mole_giant,mome_rath:_mome_rath,moose:_moose,moray_eel:_moray_eel,mosquito_giant:_mosquito_giant,narwhal:_narwhal,octopus:_octopus,orca:_orca,ornithomimosaur:_ornithomimosaur,ostrich:_ostrich,owl_giant:_owl_giant,panda:_panda,pilo:_pilo,plesiosaurus:_plesiosaurus,polar_bear:_polar_bear,pony:_pony,porcupine_giant:_porcupine_giant,prionosuchus:_prionosuchus,pygmy_hippopotamus:_pygmy_hippopotamus,quetzalcoatlus:_quetzalcoatlus,ram:_ram,rash_creeper:_rash_creeper,raven_giant:_raven_giant,reef_snake:_reef_snake,reindeer:_reindeer,rhinoceros:_rhinoceros,riding_python:_riding_python,riding_rat:_riding_rat,ringhorn:_ringhorn,roc:_roc,saber_toothed_cat:_saber_toothed_cat,salamander_giant:_salamander_giant,scorpion_giant:_scorpion_giant,sea_crawler:_sea_crawler,seahorse_giant:_seahorse_giant,shark:_shark,shissah:_shissah,skittergoat:_skittergoat,skunk_giant:_skunk_giant,slithering_sundew:_slithering_sundew,slug_giant:_slug_giant,snake_constrictor:_snake_constrictor,snake_viper:_snake_viper,snapping_flytrap:_snapping_flytrap,sniper_cactus:_sniper_cactus,solifugid_giant:_solifugid_giant,sorico:_sorico,spider_giant:_spider_giant,spider_web_tyrant:_spider_web_tyrant,spitting_cobra:_spitting_cobra,squid:_squid,squid_giant:_squid_giant,stag:_stag,stingray:_stingray,swan_trumpeter:_swan_trumpeter,switchback_jackal:_switchback_jackal,termite_giant:_termite_giant,therizinosaurus:_therizinosaurus,thylacine:_thylacine,titanoboa:_titanoboa,tortoise_giant:_tortoise_giant,troodon:_troodon,turtle_giant_snapping:_turtle_giant_snapping,uintatherium:_uintatherium,vulture_giant:_vulture_giant,walrus:_walrus,warcat_of_rull:_warcat_of_rull,wasp_giant:_wasp_giant,weasel_giant:_weasel_giant,whiptail_centipede_giant:_whiptail_centipede_giant,whisperfall_vulture:_whisperfall_vulture,wolf:_wolf,wolfdog:_wolfdog,wolliped:_wolliped,worg:_worg,yak:_yak,yolubilis_heron:_yolubilis_heron,yzobu:_yzobu,zebra:_zebra,carnivorous_flower:_carnivorous_flower,crawling_vine:_crawling_vine,puffball:_puffball,treant_sapling:_treant_sapling}