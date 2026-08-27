import Link from '../../components/Link';
import {Block,Row,Cell} from '../../components/Block';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="companion-not_found-error">Error</h2>
<p>Unable to find the requested animal companion.</p>
</>};
const _amargasaurus = {title: "Amargasaurus", jsx: <><h2 id="companion-amargasaurus-amargasaurus">Amargasaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/amargasaurus">Amargasaurus</Link></Cell></Row></Block>
<p>This sauropod has an elongated neck and a long, tapering tail.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d6), tail slap (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 18, Con 9, Int 2, Wis 13, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d8), tail slap (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _anglerfish = {title: "Anglerfish", jsx: <><h2 id="companion-anglerfish-anglerfish">Anglerfish</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>The anglerfish is a fish that uses a bioluminescent lure at the tip of a stalk protruding from its head to attract prey.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 12, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>aquatic, <Link to="/umr/grab">grab</Link> (Medium), low-light vision, lure (sheds light as per a <Link to="/eq-misc/candle">candle</Link>), <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<blockquote>
<p><em>There are no rules for the lure ability specifically tied to the anglerfish, but a "Lure" ability exists for <Link to="/monster/ceratioidi">ceratioidi</Link> and <Link to="/monster/sea_linnorm">sea linnorms</Link> that is very anglerfish-themed.</em></p>
</blockquote>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>grab (Large), <Link to="/umr/swallow_whole">swallow whole</Link> (Medium)</Cell></Row></Block>
</>};
const _ant_giant = {title: "Giant Ant", jsx: <><h2 id="companion-ant_giant-giant-ant">Giant Ant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_ant">Giant Ant</Link></Cell></Row></Block>
<p>A thin, six-legged ant the size of a pony stands at the ready, its mandibles chittering and its stinger dripping with venom.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 12, Con 15, Int -, Wis 12, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus grab), sting (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
</>};
const _antelope = {title: "Antelope", jsx: <><h2 id="companion-antelope-antelope">Antelope</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/antelope">Antelope</Link></Cell></Row></Block>
<p>This graceful animal has long slender legs and a pair of sharp, sturdy horns arching back from its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 14, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (gore, 2d4)</Cell></Row></Block>
</>};
const _ape = {title: "Ape", jsx: <><h2 id="companion-ape-ape">Ape</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/gorilla">Ape</Link></Cell></Row></Block>
<p>Large, deep-set eyes peer from beneath this great ape's thick brow as it lumbers forward on its legs and knuckles.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 10, Int 2, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _archaeopteryx = {title: "Archaeopteryx", jsx: <><h2 id="companion-archaeopteryx-archaeopteryx">Archaeopteryx</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/archaeopteryx">Archaeopteryx</Link></Cell></Row></Block>
<p>This primeval toothed bird has bright plumage, but it is a relatively poor flyer.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 40 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 15, Con 12, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row></Block>
</>};
const _armorfish = {title: "Armorfish", jsx: <><h2 id="companion-armorfish-armorfish">Armorfish</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>The armorfish is a primeval aquatic creature that has exceptionally thick armored scales along its head and back.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 13, Con 15, Int 1, Wis 8, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>aquatic, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +4</Cell></Row></Block>
</>};
const _assassin_bug_giant = {title: "Giant Assassin Bug", jsx: <><h2 id="companion-assassin_bug_giant-giant-assassin-bug">Giant Assassin Bug</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_assassin_bug">Giant Assassin Bug</Link></Cell></Row></Block>
<p>This long-legged, beetle-like insect can spew a stream of poison at its foes from a distance.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 30 ft. (clumsy)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus poison), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 13, Int -, Wis 10, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below), poison stream (exposes all creatures in a 15-ft. line to poison, Reflex save negates; Dex-based DC; usable every 1d4 rounds as a standard action)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus poison), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poison (same as above, but cure becomes 2 saves)</Cell></Row></Block>
</>};
const _aurochs = {title: "Aurochs", jsx: <><h2 id="companion-aurochs-aurochs">Aurochs</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 174</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/aurochs">Aurochs</Link></Cell></Row></Block>
<p>This large, horned bull has a dirty black hide and an aggressive temper. Its horns are wide and sharp.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">stampede, trample</Link></Cell></Row></Block>
<p>Bison companions are identical to aurochs animal companions.</p>
</>};
const _axe_beak = {title: "Axe Beak", jsx: <><h2 id="companion-axe_beak-axe-beak">Axe Beak</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/axe_beak">Axe Beak</Link></Cell></Row></Block>
<p>This stout bird stands upon two long, muscular legs, each ending in a large, curved talon. A pair of undersized wings sprouts from amid its broad body feathers, as does a powerful neck ending in an avian head armed with a grisly serrated beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 + 1-1/2 Str)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 12, Int 2, Wis 11, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 + 1-1/2 Str)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>sudden charge</Cell></Row></Block>
</>};
const _baboon = {title: "Baboon", jsx: <><h2 id="companion-baboon-baboon">Baboon</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 212</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/baboon">Baboon</Link></Cell></Row></Block>
<p>A hairy, stout animal with opposable thumbs, this creature has a pronounced muzzle and bright red buttocks.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 12, Int 2, Wis 12, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _bacallia = {title: "Bacallia", jsx: <><h2 id="companion-bacallia-bacallia">Bacallia</h2>
<p><strong>Sources</strong> <Link to="/source/druma_profit_and_prophecy">Druma, Profit and Prophecy pg. 62</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/bacallia">Bacallia</Link></Cell></Row></Block>
<p>This animal resembles an alpaca with voluminous, shiny wool.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 13, Con 13, Int 2, Wis 12, Cha 13</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, pristine wool</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>Aura: dazzling (10 ft.)</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/nimble_moves">Nimble Moves</Link></Cell></Row></Block>
</>};
const _badger = {title: "Badger (Wolverine)", jsx: <><h2 id="companion-badger-badger-wolverine">Badger (Wolverine)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/wolverine">Wolverine</Link></Cell></Row></Block>
<p>This stocky, muscular mammal is the size of a badger, its snarling lips revealing a mouth full of yellow teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., burrow 10 ft., climb 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 15, Int 2, Wis 12, Cha 10</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>rage (as a <Link to="/class/barbarian">barbarian</Link> for 6 rounds per day)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _bear = {title: "Bear", jsx: <><h2 id="companion-bear-bear">Bear</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/grizzly_bear">Grizzly Bear</Link></Cell></Row></Block>
<p>Broad, powerful muscles move beneath this massive bear's brown fur, promising both speed and lethal force.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _beetle_giant = {title: "Giant Beetle", jsx: <><h2 id="companion-beetle_giant-giant-beetle">Giant Beetle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_stag_beetle">Giant Stag Beetle</Link></Cell></Row></Block>
<p>With a sleek body and huge mandibles raised in a threatening pose, this large beetle stands firm in defense of its territory.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 20 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 12, Con 13, Int -, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link> (1d4)</Cell></Row></Block>
</>};
const _bird = {title: "Bird (Eagle, Hawk, Owl)", jsx: <><h2 id="companion-bird-bird-eagle-hawk-owl">Bird (Eagle, Hawk, Owl)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/eagle">Eagle</Link>, <Link to="/monster/hawk">Hawk</Link>, <Link to="/monster/owl">Owl</Link></Cell></Row></Block>
<p>This magnificent bird of prey has dark feathers save for those on its head, which are pure white.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 80 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 talons (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 12, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _blackwisp_egret = {title: "Blackwisp Egret", jsx: <><h2 id="companion-blackwisp_egret-blackwisp-egret">Blackwisp Egret</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/blackwisp_egret">Blackwisp Egret</Link></Cell></Row></Block>
<p>This jet-black bird has a long, hooked beak. Its piercing orange eyes reflect any light that hits them, making them appear to glow ominously.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 30 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 17, Con 8, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>deceptive target</Cell></Row></Block>
</>};
const _blue_whale = {title: "Blue Whale", jsx: <><h2 id="companion-blue_whale-blue-whale">Blue Whale</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/blue_whale">Blue Whale</Link></Cell></Row></Block>
<p>This massive aquatic mammal has bluish-gray coloration, a wide fluke tail, and a wide mouth filled with layers of baleen.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 80 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 19, Con 10, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _boar = {title: "Boar", jsx: <><h2 id="companion-boar-boar">Boar</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 53</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/boar">Boar</Link></Cell></Row></Block>
<p>This ill-tempered beast's tiny, bloodshot eyes glare angrily above a mouth filled with sharp tusks.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 12, Con 15, Int 2, Wis 13, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/ferocity">ferocity</Link></Cell></Row></Block>
</>};
const _bristle_boar = {title: "Bristle Boar", jsx: <><h2 id="companion-bristle_boar-bristle-boar">Bristle Boar</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/bristle_boar">Bristle Boar</Link></Cell></Row></Block>
<p>The vicious spines surrounding this boar's head are almost as unnerving as the wild look in its eyes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 10, Con 15, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spines (Those hit by a bristle boar's gore attack must succeed at a Reflex saving throw to avoid being speared by the dangerously sharp spines around its head and neck. Failure results in 1d4 points of piercing damage.)</Cell></Row></Block>
</>};
const _brontotherium = {title: "Brontotherium", jsx: <><h2 id="companion-brontotherium-brontotherium">Brontotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/brontotherium">Brontotherium (Megafauna)</Link></Cell></Row></Block>
<p>This stocky quadruped's lowered head puts its intimidating Y-shaped horn on full display.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+8 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d10)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 12, Int 2, Wis 17, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (slam), <Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _bull_of_zagresh = {title: "Bull of Zagresh", jsx: <><h2 id="companion-bull_of_zagresh-bull-of-zagresh">Bull of Zagresh</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/bull_of_zagresh">Bull of Zagresh</Link></Cell></Row></Block>
<p>This immense bovine has horns reminiscent of a stag, with dagger-like points spreading more than fifteen feet across.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 14, Con 13, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _bustard = {title: "Bustard", jsx: <><h2 id="companion-bustard-bustard">Bustard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 178</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>The bustard is a sizable bird with long legs. Bustards can fly, but they do so relatively poorly and prefer to walk or run.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 50 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 talons (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 13, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _camel = {title: "Camel", jsx: <><h2 id="companion-camel-camel">Camel</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/camel">Camel</Link></Cell></Row></Block>
<p>This somewhat irritated-looking, one-humped camel has been outfitted with a bridle and saddle.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4) or spit (ranged touch attack, target is <Link to="/misc/sickened">sickened</Link> for 1d4 rounds, range 10 feet)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 18, Dex 16, Con 14, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _cameroceras = {title: "Cameroceras", jsx: <><h2 id="companion-cameroceras-cameroceras">Cameroceras</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/cameroceras">Cameroceras</Link></Cell></Row></Block>
<p>Emerging from the open end of a long, conical shell, this huge creature's unblinking eyes peer from above a mass of tentacles.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>5 ft., swim 20 ft., jet 90 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tentalces (1d4 plus grab), bite (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 15, Con 11, Int 2, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, pressure adaptation</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tentacles (1d6 plus grab), bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d6)</Cell></Row></Block>
</>};
const _capybara = {title: "Capybara", jsx: <><h2 id="companion-capybara-capybara">Capybara</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/donkey_rat">Donkey Rat</Link></Cell></Row></Block>
<p>This large, brown-furred rodent is equally at home on land or in the water, and is often found near lakes and rivers.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 12, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _cat_big = {title: "Cat, Big (Lion, Tiger)", jsx: <><h2 id="companion-cat_big-cat-big-lion-tiger">Cat, Big (Lion, Tiger)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/lion">Lion</Link>, <Link to="/monster/tiger">Tiger</Link></Cell></Row></Block>
<p>This great cat's muscles flex visibly under its skin as it bares its fangs and shakes its thick mane of hair.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 13, Int 2, Wis 15, Cha 10</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/rake">rake</Link> (1d4)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link>, rake (1d6)</Cell></Row></Block>
</>};
const _cat_small_cheetah_leopard = {title: "Cat, Small (Cheetah, Leopard)", jsx: <><h2 id="companion-cat_small_cheetah_leopard-cat-small-cheetah-leopard">Cat, Small (Cheetah, Leopard)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/cheetah">Cheetah</Link>, <Link to="/monster/leopard">Leopard</Link></Cell></Row></Block>
<p>This large, sleek feline has a golden coat spotted with black. Its long and powerful legs are obviously capable of great speed.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus <Link to="/umr/trip">trip</Link>), 2 claws (1d2)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 21, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus trip), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>sprint</Cell></Row></Block>
</>};
const _caterpillar_giant = {title: "Giant Caterpillar", jsx: <><h2 id="companion-caterpillar_giant-giant-caterpillar">Giant Caterpillar</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/blood_caterpillar">Blood Caterpillar</Link></Cell></Row></Block>
<p>This many-legged worm-like creature is a larval form of a moth or butterfly, but as long as it remains a vermin companion, it will not go through this metamorphosis.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft. climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), bristles (secondary natural attack, 1d4 piercing plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 13, Con 13, Int -, Wis 11, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>bristles (a creature attacking the giant caterpillar with a natural attack or non-reach melee weapon must succeed at a Reflex save or take damage as if the caterpillar had struck the creature with its bristles attack; Dex-based DC with a +2 racial bonus), <Link to="/umr/poison">poison</Link> (see below)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/compression">compression</Link>, darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d2 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), bristles (secondary natural attack, 1d6 piercing plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _cattle = {title: "Cattle", jsx: <><h2 id="companion-cattle-cattle">Cattle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/aurochs">Cattle</Link></Cell></Row></Block>
<p>Commonly seen as a docile farm animal, an ill-tempered bull or cow can be an effective animal companion as well.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (gore, 1d8), <Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _cave_salamander = {title: "Cave Salamander", jsx: <><h2 id="companion-cave_salamander-cave-salamander">Cave Salamander</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 128</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/monitor_lizard">Monitor Lizard</Link></Cell></Row></Block>
<p>This immense lizard moves with a slow but relentless gait. Its feet end in large talons, and ropes of drool hang from its toothy maw.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 12, Con 13, Int 1, Wis 12, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>combat training (see <Link to="/skill/handle_animal">Handle Animal</Link>)</Cell></Row></Block>
</>};
const _centipede_giant = {title: "Giant Centipede", jsx: <><h2 id="companion-centipede_giant-giant-centipede">Giant Centipede</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_centipede">Giant Centipede</Link></Cell></Row></Block>
<p>This lengthy, segmented horror writhes and twists, pulsing its venomous mandibles in search of prey.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 17, Con 11, Int -, Wis 10, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _ceratosaurus = {title: "Ceratosaurus", jsx: <><h2 id="companion-ceratosaurus-ceratosaurus">Ceratosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/ceratosaurus">Ceratosaurus</Link></Cell></Row></Block>
<p>Blade-like horns jut from the snout and eye ridges of this toothy, bipedal dinosaur.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 17, Con 11, Int 2, Wis 11, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link>, <Link to="/umr/trip">trip</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blood_rage">blood rage</Link>, <Link to="/umr/ferocity">ferocity</Link></Cell></Row></Block>
</>};
const _chalicotherium = {title: "Chalicotherium", jsx: <><h2 id="companion-chalicotherium-chalicotherium">Chalicotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link>, <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 86</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/chalicotherium">Chalicotherium (Megafauna)</Link></Cell></Row></Block>
<p>This huge, rather slow-moving and sloth-like creature has long, clawed forelimbs and short rear legs.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 14, Con 13, Int 2, Wis 13, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/rend">rend</Link> (2 claws, 1d6)</Cell></Row></Block>
</>};
const _chimpanzee = {title: "Chimpanzee", jsx: <><h2 id="companion-chimpanzee-chimpanzee">Chimpanzee</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/gorilla">Gorilla</Link> with the <Link to="/template/young">young</Link> template</Cell></Row></Block>
<p>This small primate is more dangerous than its size suggests.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), slam (1d4 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), slam (1d4 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _cockroach_giant = {title: "Giant Cockroach", jsx: <><h2 id="companion-cockroach_giant-giant-cockroach">Giant Cockroach</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_cockroach">Giant Cockroach</Link></Cell></Row></Block>
<p>Swift and unsettling, the giant cockroach is notoriously difficult to slay. These creatures prefer dark places and seem to have no opposition to crawling through filth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft., fly 20 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 10, Con 17, Int -, Wis 11, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft., <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/light_sensitivity">light sensitivity</Link>, <Link to="/umr/tremorsense">tremorsense</Link> 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/endurance">Endurance</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft. climb 30 ft., fly 30 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2, Con +2</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/diehard">Diehard</Link></Cell></Row></Block>
</>};
const _corpse_eater_fungus = {title: "Corpse-Eater Fungus", jsx: <><h2 id="companion-corpse_eater_fungus-corpse-eater-fungus">Corpse-Eater Fungus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This pale mass of fungal matter looks something like a spider with a thorny, acidic mouth in place of a body.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus 1d2 acid)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 13, Con 12, Int 1, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit acid (ranged touch attack, 30-foot range, 1d6 acid damage)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus 1d4 acid)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit acid (ranged touch attack, 30-foot range, 1d8 acid damage)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row></Block>
</>};
const _crab_giant = {title: "Giant Crab", jsx: <><h2 id="companion-crab_giant-giant-crab">Giant Crab</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_crab">Giant Crab</Link></Cell></Row></Block>
<p>This lumbering hard-shelled crab stands as tall as a dwarf, its massive pincers waving menacingly.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+5 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d3 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 13, Int -, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d3)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>aquatic, darkvision, <Link to="/umr/water_dependency">water dependency</Link> (survive out of water for 1 hour per point of Con, after which it begins to suffocate as if it were drowning)</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>constrict (1d4)</Cell></Row></Block>
</>};
const _creeping_puffball = {title: "Creeping Puffball", jsx: <><h2 id="companion-creeping_puffball-creeping-puffball">Creeping Puffball</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This surprisingly mobile, multicolored ball of fungus crawls around on a nest of dozens of little filament-like "legs." Its poisonous spores cause those affected to endure bright, dazzling spots of color.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 14, Int 1, Wis 12, Cha 9</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft., defensive puff (1/minute as an immediate action when hit, the fungus can expose one adjacent creature to its poison)</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d2 <Link to="/rule/wis_damage">Wis damage</Link> and <Link to="/misc/dazzled">dazzled</Link></>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _crocodile = {title: "Crocodile (Alligator)", jsx: <><h2 id="companion-crocodile-crocodile-alligator">Crocodile (Alligator)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/crocodile">Crocodile</Link></Cell></Row></Block>
<p>This reptile lunges out of the placid water with shocking speed. Its jaw gapes open in a roar, its powerful tail lashing behind.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 14, Con 15, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/hold_breath">hold breath</Link>, low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8) or tail slap (1d12)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>death roll, <Link to="/umr/grab">grab</Link>, sprint</Cell></Row></Block>
</>};
const _dallo = {title: "Dallo", jsx: <><h2 id="companion-dallo-dallo">Dallo</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_118_siege_of_stone">Pathfinder #118: Siege of Stone pg. 82</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dallo">Dallo</Link></Cell></Row></Block>
<p>This squat, grunting creature stinks of musk and earth. Leathery plates and black horns protect its woolly underside.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., burrow 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d3), gore (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 12, Con 13, Int 2, Wis 13, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 30 ft., low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _deinotherium = {title: "Deinotherium", jsx: <><h2 id="companion-deinotherium-deinotherium">Deinotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link>, <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 87</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/deinotherium">Deinotherium (Megafauna)</Link></Cell></Row></Block>
<p>This creature resembles an elephant, though it has a shorter, thicker trunk and sharp, downward-curving tusks.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8), slam (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 10, Con 15, Int 2, Wis 13, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6), slam (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>sweep, <Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _devil_monkey = {title: "Devil Monkey", jsx: <><h2 id="companion-devil_monkey-devil-monkey">Devil Monkey</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/devil_monkey">Devil Monkey</Link></Cell></Row></Block>
<p>This towering baboon has fiery orange fur, with two tufts of hair curling up like horns on its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 19, Con 8, Int 2, Wis 15, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d10)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>puncture armor, <Link to="/umr/rock_throwing">rock throwing</Link></Cell></Row></Block>
</>};
const _digmaul = {title: "Digmaul", jsx: <><h2 id="companion-digmaul-digmaul">Digmaul</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/digmaul">Digmaul</Link></Cell></Row></Block>
<p>This muscular, cougar-like cat has fearsome teeth and a thick tail ending in a spiked ball.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d2), tail (1d2)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 21, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>ball tail, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d3), tail (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _allosaurus = {title: "Allosaurus", jsx: <><h2 id="companion-allosaurus-dinosaur-allosaurus">Dinosaur (Allosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 90</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/allosaurus">Allosaurus</Link></Cell></Row></Block>
<p>This bipedal dinosaur has a mouth filled with sharp teeth and short, powerful arms that end in sharp claws.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link></Cell></Row></Block>
</>};
const _ankylosaurus = {title: "Ankylosaurus", jsx: <><h2 id="companion-ankylosaurus-dinosaur-ankylosaurus">Dinosaur (Ankylosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/ankylosaurus">Ankylosaurus</Link></Cell></Row></Block>
<p>Thick bony plates armor the dome-like back of this quadrupedal dinosaur, its powerfully muscled tail ending in a bony club.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+9 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 14, Con 9, Int 2, Wis 12, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>stun</Cell></Row></Block>
</>};
const _brachiosaurus = {title: "Brachiosaurus", jsx: <><h2 id="companion-brachiosaurus-dinosaur-brachiosaurus">Dinosaur (Brachiosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/brachiosaurus">Brachiosaurus</Link></Cell></Row></Block>
<p>A long tail counterbalances this reptile's equally long neck, at the end of which a relatively small head pulls food from the treetop.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 11, Int 2, Wis 13, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link> (1d8)</Cell></Row></Block>
</>};
const _deinonychus = {title: "Deinonychus", jsx: <><h2 id="companion-deinonychus-dinosaur-deinonychus">Dinosaur (Deinonychus)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/deinonychus">Deinonychus</Link></Cell></Row></Block>
<p>This brightly colored dinosaur exudes a dangerous ferocity. Each foot is armed with a large, sickle-shaped claw.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d6), bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 17, Con 17, Int 2, Wis 12, Cha 14</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d8), bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pounce">pounce</Link></Cell></Row></Block>
</>};
const _dimetrodon = {title: "Dimetrodon", jsx: <><h2 id="companion-dimetrodon-dinosaur-dimetrodon">Dinosaur (Dimetrodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dimetrodon">Dimetrodon</Link></Cell></Row></Block>
<p>The massive sail on the back of this squat reptilian creature flexes and twitches as the beast stalks forward.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 16, Con 14, Int 1, Wis 12, Cha 3</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>tearing bite</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _dimorphodon = {title: "Dimorphodon", jsx: <><h2 id="companion-dimorphodon-dinosaur-dimorphodon">Dinosaur (Dimorphodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link>, <Link to="/source/pathfinder_37_souls_for_smugglers_shiv">Pathfinder #37: Souls for Smuggler's Shiv pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dimorphodon">Dimorphodon</Link></Cell></Row></Block>
<p>The head of this colorful red and purple flying reptile is overly large, and its jaws are lined with tiny sharp teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 80 ft. (clumsy)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 15, Con 12, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
</blockquote>
</>};
const _diplodocus = {title: "Diplodocus", jsx: <><h2 id="companion-diplodocus-dinosaur-diplodocus">Dinosaur (Diplodocus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/diplodocus">Diplodocus</Link></Cell></Row></Block>
<p>This enormous, long-necked quadruped moves with an uncanny grace, holding its lengthy, whip-like tail out level behind it.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 14, Con 10, Int 2, Wis 12, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>tail lash</Cell></Row></Block>
</>};
const _elasmosaurus = {title: "Elasmosaurus", jsx: <><h2 id="companion-elasmosaurus-dinosaur-elasmosaurus">Dinosaur (Elasmosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 84</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/elasmosaurus">Elasmosaurus</Link></Cell></Row></Block>
<p>Long-necked and long-tailed, this large, predatory reptile glides through the water on four powerful flippers.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 18, Con 12, Int 2, Wis 13, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _iguanodon = {title: "Iguanodon", jsx: <><h2 id="companion-iguanodon-dinosaur-iguanodon">Dinosaur (Iguanodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/iguanodon">Iguanodon</Link></Cell></Row></Block>
<p>This dinosaur seems comfortable on two legs or four. Its front limbs are each adorned with a cruel-looking, thumb-like spike.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>claw (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 17, Dex 15, Con 15, Int 2, Wis 12, Cha 7</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>claw (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>thumb spikes</Cell></Row></Block>
</>};
const _pachycephalosaurus = {title: "Pachycephalosaurus", jsx: <><h2 id="companion-pachycephalosaurus-dinosaur-pachycephalosaurus">Dinosaur (Pachycephalosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/pachycephalosaurus">Pachycephalosaurus</Link></Cell></Row></Block>
<p>This bipedal reptile has a rounded, dome-like head adorned with bony frills and ridges.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 16, Con 13, Int 2, Wis 12, Cha 5</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d10)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>clobbering charge</Cell></Row></Block>
</>};
const _parasaurolophus = {title: "Parasaurolophus", jsx: <><h2 id="companion-parasaurolophus-dinosaur-parasaurolophus">Dinosaur (Parasaurolophus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 91</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/parasaurolophus">Parasaurolophus</Link></Cell></Row></Block>
<p>This thick-bodied dinosaur has a whip-like tail and a long neck, its head topped by the crest of a backward-curving horn.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 18, Con 9, Int 2, Wis 13, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link> (1d8)</Cell></Row></Block>
</>};
const _pteranodon = {title: "Pteranodon", jsx: <><h2 id="companion-pteranodon-dinosaur-pteranodon">Dinosaur (Pteranodon)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 85</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/pteranodon">Pteranodon</Link></Cell></Row></Block>
<p>This flying reptile has two huge wings and a distinctive backward-sweeping crest decorating its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 50 ft. (clumsy)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+0 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 21, Con 10, Int 2, Wis 14, Cha 12</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _spinosaurus = {title: "Spinosaurus", jsx: <><h2 id="companion-spinosaurus-dinosaur-spinosaurus">Dinosaur (Spinosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/spinosaurus">Spinosaurus</Link></Cell></Row></Block>
<p>This titanic saurian has a crocodilian snout, powerful front claws, and a colorful sail-like ridge that runs down its back.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 18, Dex 15, Con 15, Int 2, Wis 13, Cha 3</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _stegosaurus = {title: "Stegosaurus", jsx: <><h2 id="companion-stegosaurus-dinosaur-stegosaurus">Dinosaur (Stegosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 85</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/stegosaurus">Stegosaurus</Link></Cell></Row></Block>
<p>This huge dinosaur has a small head, twin rows of sharp dorsal plates, and a muscular tail terminating in a set of bony spikes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 18, Con 10, Int 2, Wis 12, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d8 plus trip)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _styracosaurus = {title: "Styracosaurus", jsx: <><h2 id="companion-styracosaurus-dinosaur-styracosaurus">Dinosaur (Styracosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/styracosaurus">Styracosaurus</Link></Cell></Row></Block>
<p>This bulky, four-legged dinosaur has a long nasal horn and a crest studded with additional horns sweeping back from its skull.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 13, Con 11, Int 2, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/ferocity">ferocity</Link>, reflexive strike</Cell></Row></Block>
</>};
const _triceratops = {title: "Triceratops", jsx: <><h2 id="companion-triceratops-dinosaur-triceratops">Dinosaur (Triceratops)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 86</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/triceratops">Triceratops</Link></Cell></Row></Block>
<p>This beast's armored head has three sharp horns decorating its face and a large round crest angling back over its neck from its skull.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 13, Con 11, Int 2, Wis 12, Cha 7</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link></Cell></Row></Block>
</>};
const _tylosaurus = {title: "Tylosaurus", jsx: <><h2 id="companion-tylosaurus-dinosaur-tylosaurus">Dinosaur (Tylosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 91</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/tylosaurus">Tylosaurus</Link></Cell></Row></Block>
<p>Surging out of the water, this massive lizard is shaped like a giant fish with a powerful, toothed maw.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 10, Int 2, Wis 13, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link></Cell></Row></Block>
</>};
const _tyrannosaurus = {title: "Tyrannosaurus", jsx: <><h2 id="companion-tyrannosaurus-dinosaur-tyrannosaurus">Dinosaur (Tyrannosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 86</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/tyrannosaurus">Tyrannosaurus</Link></Cell></Row></Block>
<p>This bipedal dinosaur's front arms seem small compared to the rest of its bulk, but its enormous head is all teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link>, powerful bite</Cell></Row></Block>
</>};
const _velociraptor = {title: "Velociraptor", jsx: <><h2 id="companion-velociraptor-dinosaur-velociraptor">Dinosaur (Velociraptor)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/velociraptor">Velociraptor</Link></Cell></Row></Block>
<p>This small, sleek dinosaur has vicious, snapping jaws and feet that end in large talons for gutting prey.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d6), bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 17, Con 17, Int 2, Wis 12, Cha 14</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d8), bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pounce">pounce</Link></Cell></Row></Block>
</>};
const _dire_bat = {title: "Dire Bat", jsx: <><h2 id="companion-dire_bat-dire-bat">Dire Bat</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 30</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dire_bat">Dire Bat</Link></Cell></Row></Block>
<p>This giant, furry bat is nearly the size of an ox, with dark leathery wings that open wider than two men with arms outstretched.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 40 ft. (good)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+0 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 17, Con 9, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link> 40 ft.</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _dire_polar_bear = {title: "Dire Polar Bear", jsx: <><h2 id="companion-dire_polar_bear-dire-polar-bear">Dire Polar Bear</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dire_polar_bear">Dire Polar Bear</Link></Cell></Row></Block>
<p>Fearsome bony growths protrude from several spots in this massive animal's snowy fur.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _dire_rat = {title: "Dire Rat", jsx: <><h2 id="companion-dire_rat-dire-rat">Dire Rat</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 232</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dire_rat">Dire Rat</Link></Cell></Row></Block>
<p>This filthy rat is the size of a small dog. It has a coat of coarse fur, a long and scabby tail, and two glittering eyes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., climb 20 ft., swim 20 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 12, Int 2, Wis 12, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus disease)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _dog = {title: "Dog", jsx: <><h2 id="companion-dog-dog">Dog</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dog">Dog</Link></Cell></Row></Block>
<p>This small dog has a rough coat and a hungry look in its dark brown eyes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 15, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _dolphin = {title: "Dolphin", jsx: <><h2 id="companion-dolphin-dolphin">Dolphin</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 88</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dolphin">Dolphin</Link></Cell></Row></Block>
<p>This streamlined, fish-like mammal has sparkling eyes over a smiling mouth filled with hundreds of teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 80 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 120 ft.</Cell></Row></Block>
</>};
const _dragonfly_giant = {title: "Giant Dragonfly", jsx: <><h2 id="companion-dragonfly_giant-giant-dragonfly">Giant Dragonfly</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_dragonfly">Giant Dragonfly</Link></Cell></Row></Block>
<p>These long-winged insects have dazzlingly colorful bodies.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 40 ft. (perfect)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 12, Int -, Wis 12, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/flyby_attack">Flyby Attack</Link></Cell></Row></Block>
</>};
const _dunkleosteus = {title: "Dunkleosteus", jsx: <><h2 id="companion-dunkleosteus-dunkleosteus">Dunkleosteus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dunkleosteus">Dunkleosteus</Link></Cell></Row></Block>
<p>A gigantic, prehistoric fish cuts through the water, its head like a snapping turtle, complete with sharp, tooth-like plates.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 18, Con 10, Int 1, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/grab">grab</Link> (bite), gulp</Cell></Row></Block>
</>};
const _elasmotherium = {title: "Elasmotherium", jsx: <><h2 id="companion-elasmotherium-elasmotherium">Elasmotherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/elasmotherium">Elasmotherium (Megafauna)</Link></Cell></Row></Block>
<p>This lumbering, four-legged, rhino-like beast has thick hide and a single immense horn protruding from the top of its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 15, Int 2, Wis 17, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>impaling horn, <Link to="/umr/powerful_charge">powerful charge</Link> (gore)</Cell></Row></Block>
</>};
const _electric_eel = {title: "Electric Eel", jsx: <><h2 id="companion-electric_eel-electric-eel">Electric Eel</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 119</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/electric_eel">Electric Eel</Link></Cell></Row></Block>
<p>This six-foot-long, snake-like fish moves slowly. A strange popping and snapping sound occasionally emits from the creature's body.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>5 ft., swim 30 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 14, Con 18, Int 1, Wis 10, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>amphibious, low-light vision, electricity resistance 5</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>electricity (1d6)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>electricity resistance 10</Cell></Row></Block>
</>};
const _elephant_mastodon = {title: "Elephant/Mastodon", jsx: <><h2 id="companion-elephant_mastodon-elephantmastodon">Elephant/Mastodon</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 128</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/elephant">Elephant</Link></Cell></Row></Block>
<p>These thick-skinned animals bear large ivory tusks flanking a long, prehensile snout.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8), slam (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 14, Con 13, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6), slam (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link> (2d6)</Cell></Row></Block>
</>};
const _elk = {title: "Elk", jsx: <><h2 id="companion-elk-elk">Elk</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/elk">Elk</Link></Cell></Row></Block>
<p>This majestic beast stands the height of a man at its shoulders, a many-tipped rack of proud antlers crowning its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6) or 2 hooves (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 17, Con 14, Int 2, Wis 15, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8) or 2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _enchanter_heron = {title: "Enchanter Heron", jsx: <><h2 id="companion-enchanter_heron-enchanter-heron">Enchanter Heron</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_121_the_lost_outpost">Pathfinder #121: The Lost Outpost pg. 82</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/enchanter_heron">Enchanter Heron</Link></Cell></Row></Block>
<p>This large bird has gray-and-white feathers, a long beak, and a bulbous sac on its throat that glows with a pale, sapphire light.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 20 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 12, Int 2, Wis 11, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, throat sack</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/swallow_whole">swallow whole</Link></Cell></Row></Block>
</>};
const _eohippus = {title: "Eohippus", jsx: <><h2 id="companion-eohippus-eohippus">Eohippus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>The eohippus is a small, primeval ancestor of the modern horse. It has three-toed feet rather than hooves.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 15, Con 12, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row></Block>
</>};
const _eurypterid = {title: "Eurypterid", jsx: <><h2 id="companion-eurypterid-eurypterid">Eurypterid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/common_eurypterid">Common Eurypterid</Link></Cell></Row></Block>
<p>Also known as sea scorpions, these aquatic insects have pincers and a long stinger.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d3), sting (1d3 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 11, Con 12, Int -, Wis 13, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1 <Link to="/rule/con_damage">Con damage</Link></>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4), sting (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poison (same as above, but frequency increases to 1/round for 6 rounds and damage increases to 1d2 Con)</Cell></Row></Block>
</>};
const _faerie_mount = {title: "Faerie Mount", jsx: <><h2 id="companion-faerie_mount-faerie-mount">Faerie Mount</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 82</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/faerie_mount">Faerie Mount</Link></Cell></Row></Block>
<p>Short legs and overlarge ears make this broad-chested canine seem almost comical.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 12, Con 15, Int 2, Wis 13, Cha 12</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link>, stability</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>sure-footed</Cell></Row></Block>
</>};
const _falcon = {title: "Falcon", jsx: <><h2 id="companion-falcon-falcon">Falcon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hawk">Hawk</Link></Cell></Row></Block>
<p>This swift raptor has amazing eyesight and sharp talons.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 90 ft. (good)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 talons (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 11, Int 2, Wis 15, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row></Block>
</>};
const _frilled_lizard_giant = {title: "Giant Frilled Lizard", jsx: <><h2 id="companion-frilled_lizard_giant-giant-frilled-lizard">Giant Frilled Lizard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_frilled_lizard">Giant Frilled Lizard</Link></Cell></Row></Block>
<p>This large lizard can display a frightening frill on its neck when it charges.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), tail (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 13, Int 2, Wis 14, Cha 10</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>intimidating charge</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), tail (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _frog_father = {title: "Frog Father", jsx: <><h2 id="companion-frog_father-frog-father">Frog Father</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/frog_father">Frog Father</Link></Cell></Row></Block>
<p>This elephantine amphibian has a grotesquely long tongue and beady eyes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 13, Con 16, Int 1, Wis 9, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>tongue, <Link to="/umr/pull">pull</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/swallow_whole">swallow whole</Link></Cell></Row></Block>
</>};
const _frog = {title: "Frog", jsx: <><h2 id="companion-frog-frog">Frog</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 135</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_frog">Giant Frog</Link></Cell></Row></Block>
<p>This creature looks like a normal frog, with moist, mottled, blackish-green skin, but grown to truly monstrous size.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 13, Con 16, Int 1, Wis 9, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>tongue, pull</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/swallow_whole">swallow whole</Link></Cell></Row></Block>
</>};
const _gallerok = {title: "Gallerok", jsx: <><h2 id="companion-gallerok-gallerok">Gallerok</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_118_siege_of_stone">Pathfinder #118: Siege of Stone pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/gallerok">Gallerok</Link></Cell></Row></Block>
<p>This stout, serpentine creature's body ripples with muscle. Jagged fangs line its broad, powerful jaws.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 16, Con 13, Int 1, Wis 10, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft., low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d6), <Link to="/umr/grab">grab</Link></Cell></Row></Block>
</>};
const _gar = {title: "Gar", jsx: <><h2 id="companion-gar-gar">Gar</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 128</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/gar">Gar</Link></Cell></Row></Block>
<p>This long, lean fish has a muscular body and a head with long jaws filled with sharp teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 14, Con 15, Int 1, Wis 13, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _giganotosaurus = {title: "Giganotosaurus", jsx: <><h2 id="companion-giganotosaurus-giganotosaurus">Giganotosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This bipedal dinosaur has a large head and cavernous jaws full of large, sharp teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6),2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/grab">grab</Link> (bite)</Cell></Row></Block>
</>};
const _giraffe = {title: "Giraffe", jsx: <><h2 id="companion-giraffe-giraffe">Giraffe</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giraffe">Giraffe</Link></Cell></Row></Block>
<p>This animal, covered in a spotted pattern, has a disproportionately long neck that allows it to tower over other animals.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 17, Con 12, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, natural weapons</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d8), slam (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
</>};
const _gliding_turtle = {title: "Gliding Turtle", jsx: <><h2 id="companion-gliding_turtle-gliding-turtle">Gliding Turtle</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_121_the_lost_outpost">Pathfinder #121: The Lost Outpost pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/gliding_turtle">Gliding Turtle</Link></Cell></Row></Block>
<p>This giant turtle has a large, thin membrane of scaly skin extending from its shell to its legs.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 12, Con 12, Int 2, Wis 11, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, shell</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>fly 30 ft. (clumsy)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>gliding charge</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>glide</Cell></Row></Block>
</>};
const _goblin_dog = {title: "Goblin Dog", jsx: <><h2 id="companion-goblin_dog-goblin-dog">Goblin Dog</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 157</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/goblin_dog">Goblin Dog</Link></Cell></Row></Block>
<p>This mangy dog's face has the flat nose, beady eyes, and protruding teeth of a rat grown grotesquely large.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 16, Con 11, Int 2, Wis 12, Cha 8</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>allergic reaction</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
</>};
const _goliath_frog = {title: "Goliath Frog", jsx: <><h2 id="companion-goliath_frog-goliath-frog">Goliath Frog</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/goliath_frog">Goliath Frog</Link></Cell></Row></Block>
<p>This massive, mottled amphibian glistens with slime, and its tongue drips with saliva.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 13, Con 16, Int 1, Wis 9, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>tongue, <Link to="/umr/pull">pull</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/swallow_whole">swallow whole</Link></Cell></Row></Block>
</>};
const _gorthek = {title: "Gorthek", jsx: <><h2 id="companion-gorthek-gorthek">Gorthek</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 172</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/gorthek">Gorthek</Link></Cell></Row></Block>
<p>This massive quadruped has a thick, wrinkled hide, curving horns, and shaggy hair that frames its leonine face.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 11, Con 13, Int 2, Wis 10, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft., low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (gore, 4d6+twice Strength modifier)</Cell></Row></Block>
</>};
const _griffon = {title: "Griffon", jsx: <><h2 id="companion-griffon-griffon">Griffon</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Monstrous</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/griffon">Griffon</Link></Cell></Row></Block>
<p>This majestic beast has the body of a lion, the head and forelegs of a great eagle, and a massive pair of feathered wings.</p>
<p><strong>Prerequisites</strong> Diplomacy, Intimidate, or Handle Animal 5 ranks; Ride 5 ranks</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 40 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 15, Con 16, Int 5, Wis 13, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>unable to carry a rider while flying, darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row>
<Row><Cell>Languages</Cell><Cell>Common (cannot speak)</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., fly 80 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 talons (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pounce">pounce</Link>, <Link to="/umr/rake">rake</Link> (1d6)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>unable to carry a rider while flying</Cell></Row></Block>
<h3 id="companion-griffon-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>The griffon can carry a rider while flying, but reduces its fly speed by half while doing so.</p>
</>};
const _grizzly_bear = {title: "Grizzly Bear", jsx: <><h2 id="companion-grizzly_bear-grizzly-bear">Grizzly Bear</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/grizzly_bear">Grizzly Bear</Link></Cell></Row></Block>
<p>The infamous grizzly bear is a lumbering and quite impressive companion, particularly when it rises up on its hind feet to loom large. Grizzly bears strike fear into the hearts of most who encounter them.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 17, Dex 13, Con 13, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
</>};
const _gulper_plant = {title: "Gulper Plant", jsx: <><h2 id="companion-gulper_plant-gulper-plant">Gulper Plant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This bulbous green plant can climb or crawl via a network of vines. Its central reservoir can gulp down foes to digest them in an internal well of acid, holding them tight while they struggle.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 vines (primary natural attack, 1d4 bludgeoning plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 11, Con 13, Int 1, Wis 10, Cha 3</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/swallow_whole">swallow whole</Link> (1d6 acid)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>freeze, low-light vision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 vines (primary natural attack, 1d6 bludgeoning plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>swallow whole (1d8 acid)</Cell></Row></Block>
</>};
const _hammerhead_shark = {title: "Hammerhead Shark", jsx: <><h2 id="companion-hammerhead_shark-hammerhead-shark">Hammerhead Shark</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hammerhead_shark">Hammerhead Shark</Link></Cell></Row></Block>
<p>This unusual shark is named for its blocky, rectangular head. The creature's eyes are on each side of its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 12, Int 1, Wis 15, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>aquatic, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link> 30 ft.</Cell></Row></Block>
</>};
const _hippocampus = {title: "Hippocampus", jsx: <><h2 id="companion-hippocampus-hippocampus">Hippocampus</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Monstrous</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hippocampus">Hippocampus</Link></Cell></Row></Block>
<p>This creature has the foreparts of a horse and the hindquarters of a fish. Its forelegs end in splayed fins rather than hooves.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>5 ft., swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 9, Con 15, Int 2, Wis 12, Cha 11</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link>, <Link to="/umr/water_dependency">water dependency</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Speed</Cell><Cell>Swim 60 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +4</Cell></Row></Block>
<h3 id="companion-hippocampus-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>The hippocampus's swim speed increases by 20 feet, and it gains a tail slap secondary attack that deals id4 points of damage plus half its Strength bonus.</p>
</>};
const _hippogriff = {title: "Hippogriff", jsx: <><h2 id="companion-hippogriff-hippogriff">Hippogriff</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Monstrous</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hippogriff">Hippogriff</Link></Cell></Row></Block>
<p>This large, brown, horse-like creature has a hawk's wings, talons, and hooked beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 14, Int 2, Wis 12, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>unable to carry a rider while flying, darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., fly 100 ft. (average)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>unable to carry a rider while flying</Cell></Row></Block>
<h3 id="companion-hippogriff-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>The hippogriff can carry a rider while flying, but reduces its fly speed by half while doing so.</p>
</>};
const _hippopotamus = {title: "Hippopotamus", jsx: <><h2 id="companion-hippopotamus-hippopotamus">Hippopotamus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 157</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hippopotamus">Hippopotamus</Link></Cell></Row></Block>
<p>This fleshy behemoth wallows forward on four stumpy legs. Its jaws spread wide in a roar of challenge, exposing massive, tusk-like teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 12, Con 12, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link>, sweat</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link> (1d8)</Cell></Row></Block>
</>};
const _hobbe_hound = {title: "Hobbe Hound", jsx: <><h2 id="companion-hobbe_hound-hobbe-hound">Hobbe Hound</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 89</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hobbe_hound">Hobbe Hound</Link></Cell></Row></Block>
<p><Link to="/race/hobgoblin">Hobgoblin</Link> druids, hunters, and rangers who can take an animal companion can choose a hobbe hound.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus allergic reaction)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 15, Int 2, Wis 10, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>allergic reaction, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus allergic reaction)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>fire resistance 3</Cell></Row></Block>
</>};
const _horse = {title: "Horse", jsx: <><h2 id="companion-horse-horse">Horse</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/horse">Horse</Link></Cell></Row></Block>
<p>This proud horse thunders across the grassy plain with fluid grace, wind tugging at its loose-fitting barding.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 hooves (secondary natural attack, 1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 13, Con 15, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>combat trained</Cell></Row></Block>
</>};
const _hunting_cactus = {title: "Hunting Cactus", jsx: <><h2 id="companion-hunting_cactus-hunting-cactus">Hunting Cactus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>Able to crawl swiftly on five root-like legs, the hunting cactus has long arms it can slam foes with - arms covered with hundreds of thin, sharp needles.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 slams (1d6 bludgeoning and piercing)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 13, Con 17, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>needles (a creature grappling a hunting cactus or attacking it with a natural attack or unarmed strike takes 1d4 points of piercing damage)</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+6 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 slams (1d8 bludgeoning and piercing)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
</>};
const _hyena = {title: "Hyena", jsx: <><h2 id="companion-hyena-hyena">Hyena</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 179</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hyena">Hyena</Link></Cell></Row></Block>
<p>This hyena is covered in shaggy, tan-colored fur with black and brown stripes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus <Link to="/umr/trip">trip</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 13, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus trip)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _impaler_shrike = {title: "Impaler Shrike", jsx: <><h2 id="companion-impaler_shrike-impaler-shrike">Impaler Shrike</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_97_in_hells_bright_shadow">Pathfinder #97: In Hell's Bright Shadow pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/impaler_shrike">Impaler Shrike</Link></Cell></Row></Block>
<p>This large bird has brown and gray feathers and a vicious hooked beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 13, Con 13, Int 2, Wis 14, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>impale</Cell></Row></Block>
</>};
const _kangaroo = {title: "Kangaroo", jsx: <><h2 id="companion-kangaroo-kangaroo">Kangaroo</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/kangaroo">Kangaroo</Link></Cell></Row></Block>
<p>As tall as a grown human, this mouse-faced creature stands on powerful hind legs and has a stout tail trailing behind.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>kick (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 14, Con 13, Int 2, Wis 11, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>kick (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>speed increase (50 ft.)</Cell></Row></Block>
</>};
const _kaprosuchus = {title: "Kaprosuchus", jsx: <><h2 id="companion-kaprosuchus-kaprosuchus">Kaprosuchus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/kaprosuchus">Kaprosuchus (Megafauna)</Link></Cell></Row></Block>
<p>This massive, squat crocodilian has forward facing eyes, jutting teeth, and a pronounced snout.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), tail slap (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 14, Con 15, Int 1, Wis 14, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), tail slap (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>ramming snout</Cell></Row></Block>
</>};
const _kentrosaurus = {title: "Kentrosaurus", jsx: <><h2 id="companion-kentrosaurus-kentrosaurus">Kentrosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/kentrosaurus">Kentrosaurus</Link></Cell></Row></Block>
<p>This quadrupedal dinosaur has two rows of dorsal spikes, a spiked tail, and two more spikes projecting from its shoulders.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 16, Con 10, Int 2, Wis 13, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>impaling strike, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>defensive spikes</Cell></Row></Block>
</>};
const _leech_giant = {title: "Giant Leech", jsx: <><h2 id="companion-leech_giant-giant-leech">Giant Leech</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 36</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_leech">Giant Leech</Link></Cell></Row></Block>
<p>A parasite ballooned to monstrous proportions undulates in the muck, its circular maw a spiral of teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>5 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+0 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus attach)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 14, Con 12, Int -, Wis 10, Cha 1</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/attach">attach</Link>, <Link to="/umr/blood_drain">blood drain</Link> (1 Str)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>amphibious, <Link to="/umr/blindsense">blindsense</Link> 30 ft., <Link to="/umr/scent">scent</Link>, susceptible to salt</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus attach)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>blood drain (1 Str and 1 <Link to="/rule/con_damage">Con damage</Link>)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 30 ft.</Cell></Row></Block>
</>};
const _lizard_giant_chameleon = {title: "Lizard (Giant Chameleon)", jsx: <><h2 id="companion-lizard_giant_chameleon-lizard-giant-chameleon">Lizard (Giant Chameleon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/lizard_giant_chameleon">Lizard (Giant Chameleon)</Link></Cell></Row></Block>
<p>Nearly invisible in its surroundings, this scaly lizard's eyes dart about independently of each other.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 14, Con 14, Int 2, Wis 11, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>+10 Stealth when still, low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pull">pull</Link> (tongue, 5 ft.), tongue</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>speed increase (40 ft., climb 40 ft.)</Cell></Row></Block>
</>};
const _lizard_giant_gecko = {title: "Lizard (Giant Gecko)", jsx: <><h2 id="companion-lizard_giant_gecko-lizard-giant-gecko">Lizard (Giant Gecko)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/lizard_giant_gecko">Lizard (Giant Gecko)</Link></Cell></Row></Block>
<p>An oversized lizard the size of a horse scans the area, its bulging eyes darting this way and that, completely independent of one another. Every few moments a long pink tongue snaps from its wide mouth, either to snatch up some unseen insect or moisten an eye.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 15, Con 12, Int 2, Wis 14, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>expert climber, low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>speed increase (40 ft.)</Cell></Row></Block>
</>};
const _lizard_monitor_lizard = {title: "Lizard (Monitor Lizard)", jsx: <><h2 id="companion-lizard_monitor_lizard-lizard-monitor-lizard">Lizard (Monitor Lizard)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 194</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/lizard_monitor_lizard">Lizard (Monitor Lizard)</Link></Cell></Row></Block>
<p>This immense lizard moves with a slow but relentless gait. Its feet end in large talons, and ropes of drool hang from its toothy maw.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus grab and <Link to="/umr/poison">poison</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
<AffInfo type="Bite-injury" save="Fort 14" freq="1/hour for 6 hours" onset="1 minute" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p">Poison (based on monster entry)</AffInfo>
</>};
const _llama = {title: "Llama", jsx: <><h2 id="companion-llama-llama">Llama</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/llama">Llama</Link></Cell></Row></Block>
<p>While some value it for its hair, the llama makes a fine animal companion as well, and it has traditionally been used as a beast of burden in mountainous regions.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 16, Con 12, Int 2, Wis 13, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
</>};
const _locust_giant = {title: "Giant Locust", jsx: <><h2 id="companion-locust_giant-giant-locust">Giant Locust</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_locust">Giant Locust</Link></Cell></Row></Block>
<p>The giant locust has long limber legs and the ability to spit a caustic glob of noxious goo.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft., fly 20 ft. (poor)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 17, Con 11, Int -, Wis 10, Cha 7</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit goo (ranged touch attack, 30-foot range, sickened for 1 round)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>+18 Acrobatics when jumping, darkvision 60 ft., leap (can take 10 on Acrobatics checks to jump, even when distracted or threatened)</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>voracious (bite attack deals double damage to creatures with the plant subtype and to objects made of paper, wood, or other plant materials)</Cell></Row></Block>
</>};
const _manta_ray = {title: "Manta Ray", jsx: <><h2 id="companion-manta_ray-manta-ray">Manta Ray</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 232</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/manta_ray">Manta Ray</Link></Cell></Row></Block>
<p>Gliding gracefully through the water on wing-like fins, this large ray scoops up tiny morsels in its wide mouth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 15, Con 11, Int 1, Wis 13, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link> 30 ft.</Cell></Row></Block>
</>};
const _mantis_shrimp_giant = {title: "Giant Mantis Shrimp", jsx: <><h2 id="companion-mantis_shrimp_giant-giant-mantis-shrimp">Giant Mantis Shrimp</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_mantis_shrimp">Giant Mantis Shrimp</Link></Cell></Row></Block>
<p>This colorful aquatic vermin has powerful claws capable of striking with blinding speed.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 pincers (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 17, Con 14, Int -, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>aquatic <Link to="/umr/blindsense">blindsense</Link> 10 ft., darkvision 60 ft., sonic resistance 5</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 pincers (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>speedy pincers (can make iterative attacks with one of its pincer attacks)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 10 ft., sonic resistance 10</Cell></Row></Block>
</>};
const _mantis_giant = {title: "Giant Mantis", jsx: <><h2 id="companion-mantis_giant-giant-mantis">Giant Mantis</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_mantis">Giant Mantis</Link></Cell></Row></Block>
<p>This towering insect walks on its back four legs. Its head is triangular and its front legs sport razor-sharp edges and claws.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft., fly 40 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 10, Int -, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>lunge</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>mandibles (1d6 secondary attack against a grabbed target), sudden strike (may take a full attack in the surprise round)</Cell></Row></Block>
</>};
const _marax = {title: "Marax", jsx: <><h2 id="companion-marax-marax">Marax</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_90_the_divinity_drive">Pathfinder #90: The Divinity Drive pg. 87</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/marax">Marax</Link></Cell></Row></Block>
<p>Dense, bony growths line the back of this bipedal predator. Between its gnashing, toothy underbite, scythe-like claws, and spiked tail, no part of this beast offers mercy.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), tail barbs (secondary natural attack, 1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 15, Con 12, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pounce">pounce</Link></Cell></Row></Block>
</>};
const _marsupial_devil = {title: "Marsupial Devil", jsx: <><h2 id="companion-marsupial_devil-marsupial-devil">Marsupial Devil</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This toothy marsupial has a perhaps undeserved reputation for ferocity.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 13, Con 12, Int 2, Wis 10, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Con +2</Cell></Row></Block>
</>};
const _marsupial_lion = {title: "Marsupial Lion", jsx: <><h2 id="companion-marsupial_lion-marsupial-lion">Marsupial Lion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>Somewhat slimmer than the standard lion, the marsupial lion is no less dangerous in battle.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 16, Con 13, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6 plus <Link to="/umr/grab">grab</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _archelon = {title: "Archelon", jsx: <><h2 id="companion-archelon-megafauna-archelon">Megafauna (Archelon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/archelon">Archelon (Megafauna)</Link></Cell></Row></Block>
<p>The shell of this immense sea turtle easily spans 12 feet in length. Its narrow head ends in a hooked beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>15 ft., swim 50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+10 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 10, Con 9, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _arsinoitherium = {title: "Arsinoitherium", jsx: <><h2 id="companion-arsinoitherium-megafauna-arsinoitherium">Megafauna (Arsinoitherium)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 186</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/arsinoitherium">Arsinoitherium (Megafauna)</Link></Cell></Row></Block>
<p>This creature is much like a rhino, some six feet tall and ten feet long, with a pair of massive, knife-like horns curving up from its nose.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 15, Int 2, Wis 13, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (2d8), <Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _baluchitherium = {title: "Baluchitherium", jsx: <><h2 id="companion-baluchitherium-megafauna-baluchitherium">Megafauna (Baluchitherium)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/baluchitherium">Baluchitherium (Megafauna)</Link></Cell></Row></Block>
<p>This towering armored herbivore resembles a hornless rhinoceros, but with longer legs and a longer neck.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 14, Con 15, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _basilosaurus = {title: "Basilosaurus", jsx: <><h2 id="companion-basilosaurus-megafauna-basilosaurus">Megafauna (Basilosaurus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/basilosaurus">Basilosaurus (Megafauna)</Link></Cell></Row></Block>
<p>This immense primeval whale has a sleek body that looks more serpentine than mammal, and jaws filled with sharp teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), tail slap (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 14, Con 12, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), tail slap (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link> 60 ft.</Cell></Row></Block>
</>};
const _embolotherium = {title: "Embolotherium", jsx: <><h2 id="companion-embolotherium-megafauna-embolotherium">Megafauna (Embolotherium)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 87</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/embolotherium">Embolotherium (Megafauna)</Link></Cell></Row></Block>
<p>This creature is reminiscent of a rhinoceros, but instead of pointed horns on its nose, this creature possesses a blunt, bony protrusion.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 10, Con 13, Int 2, Wis 13, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _glyptodon = {title: "Glyptodon", jsx: <><h2 id="companion-glyptodon-megafauna-glyptodon">Megafauna (Glyptodon)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 186</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This armored creature has a bony, turtle-like shell from which protrude short limbs, a blunt head, and a short spiky tail.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+5 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 12, Con 13, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d10)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _megalania = {title: "Megalania", jsx: <><h2 id="companion-megalania-megafauna-megalania">Megafauna (Megalania)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/megalania">Megalania (Megafauna)</Link></Cell></Row></Block>
<p>This gigantic lizard has short but powerful limbs, a muscular tail, and a spiny crest that runs the length of its body.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus <Link to="/umr/grab">grab</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus grab and <Link to="/umr/poison">poison</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
</>};
const _megaloceros = {title: "Megaloceros", jsx: <><h2 id="companion-megaloceros-megafauna-megaloceros">Megafauna (Megaloceros)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 187</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/megaloceros">Megaloceros (Megafauna)</Link></Cell></Row></Block>
<p>The massive and majestic elk stands fully the height of a human at its shoulder, and its antlers stretch over ten feet across.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 17, Con 14, Int 2, Wis 15, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6), 2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (2d6)</Cell></Row></Block>
</>};
const _megatherium = {title: "Megatherium", jsx: <><h2 id="companion-megatherium-megafauna-megatherium">Megafauna (Megatherium)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 187</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/megatherium">Megatherium (Megafauna)</Link></Cell></Row></Block>
<p>The great sloth, standing on its hind legs, can reach the treetops with its agile tongue to grab at foliage.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., climb 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+5 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 14, Con 11, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/rend">rend</Link> (2 claws, 1d8)</Cell></Row></Block>
</>};
const _megaprimatus = {title: "Megaprimatus", jsx: <><h2 id="companion-megaprimatus-megaprimatus">Megaprimatus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/megaprimatus">Megaprimatus (Megafauna)</Link></Cell></Row></Block>
<p>This titanic ape has great patches of coarse gray and brown fur, and its skin is thick and leathery.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 10, Int 2, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _mindspin_ram = {title: "Mindspin Ram", jsx: <><h2 id="companion-mindspin_ram-mindspin-ram">Mindspin Ram</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 82</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/mindspin_ram">Mindspin Ram</Link></Cell></Row></Block>
<p>This stark white ram's curved horns appear to have sharp thorns studding every inch of their surface.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 11, Int 2, Wis 14, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/bleed">bleed</Link> (gore, 1), <Link to="/umr/powerful_charge">powerful charge</Link> (gore, 1d8)</Cell></Row></Block>
</>};
const _moa = {title: "Moa", jsx: <><h2 id="companion-moa-moa">Moa</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/moa">Moa (Megafauna)</Link></Cell></Row></Block>
<p>Standing on muscular legs that end in enormous talons, this flightless bird is almost twice the height of a man.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 16, Con 12, Int 2, Wis 11, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Con +2</Cell></Row></Block>
</>};
const _mokele_mbembe = {title: "Mokele-Mbembe", jsx: <><h2 id="companion-mokele_mbembe-mokele-mbembe">Mokele-Mbembe</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/mokele_mbembe">Mokele-Mbembe</Link></Cell></Row></Block>
<p>A triangular reptilian head with a mouth full of curved teeth, attached to a long snaking neck, rises from the surface of the water. Long spines run down its neck, back, and whip-like tail, which uncurls to snap the air with a loud report.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+5 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), tail slap (1d8, reach 10 ft.)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 17, Con 10, Int 2, Wis 15, Cha 11</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>9th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6), tail slap (2d6, reach 15 ft.)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/trample">trample</Link>, whip tail</Cell></Row></Block>
</>};
const _mole_giant = {title: "Giant Mole", jsx: <><h2 id="companion-mole_giant-giant-mole">Giant Mole</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This large-clawed burrowing mammal is slow but can burrow through loose earth and soil with ease to surprise its foes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., burrow 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 13, Int 2, Wis 10, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft.</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>burrow 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/rend">rend</Link> (2 claws, 1d6)</Cell></Row></Block>
</>};
const _mome_rath = {title: "Mome Rath", jsx: <><h2 id="companion-mome_rath-mome-rath">Mome Rath</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/mome_rath">Mome Rath</Link></Cell></Row></Block>
<p>Moss and lichen grow from the shaggy back of this boar-like animal. Its curving claws and prehensile tail hold it in the trees.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d3 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 14, Con 15, Int 2, Wis 14, Cha 17</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 3 rounds" eff={<><Link to="/misc/sickened">sickened</Link> for 1d3 rounds</>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4 plus poison)</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poison (as above, but the sickened condition lasts for 1d6 rounds)</Cell></Row></Block>
</>};
const _moose = {title: "Moose", jsx: <><h2 id="companion-moose-moose">Moose</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/moose">Moose</Link></Cell></Row></Block>
<p>Powerful and often ill tempered, the moose is an intimidating choice for an animal companion.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6), 2 hooves (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 14, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8), 2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (gore, 1d8)</Cell></Row></Block>
</>};
const _moray_eel = {title: "Moray Eel", jsx: <><h2 id="companion-moray_eel-moray-eel">Moray Eel</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 119</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_moray_eel">Giant Moray Eel</Link></Cell></Row></Block>
<p>This sixteen-foot-long eel slithers through the water with uncanny grace, mouth open to display large teeth and a second set of jaws.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+5 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 16, Con 12, Int 1, Wis 12, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/grab">grab</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>gnaw</Cell></Row></Block>
</>};
const _mosquito_giant = {title: "Giant Mosquito", jsx: <><h2 id="companion-mosquito_giant-giant-mosquito">Giant Mosquito</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_mosquito">Giant Mosquito</Link></Cell></Row></Block>
<p>Between its bloodthirsty nature and the annoying drone of its wings, the giant mosquito is a much-loathed creature. Unlike its smaller cousins, a giant mosquito can easily kill larger creatures by draining them of their blood.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 60 ft. (good)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus bleed and grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 21, Con 15, Int -, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/bleed">bleed</Link> (1d4), <Link to="/umr/grab">grab</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus bleed and grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>bleed (2d4), <Link to="/umr/blood_drain">blood drain</Link> (1d2 Constitution)</Cell></Row></Block>
</>};
const _narwhal = {title: "Narwhal", jsx: <><h2 id="companion-narwhal-narwhal">Narwhal</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/narwhal">Narwhal</Link></Cell></Row></Block>
<p>This small whale lacks a dorsal fin and has pale, mottled skin, but its most notable feature is the single tusk protruding from its nose, easily as long as a human.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 80 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 19, Con 10, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 120 ft., tusk</Cell></Row></Block>
</>};
const _octopus = {title: "Octopus", jsx: <><h2 id="companion-octopus-octopus">Octopus</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 219</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/octopus">Octopus</Link></Cell></Row></Block>
<p>Eight tentacles, each adorned with rows of countless suckers, unfurl from the barrel-shaped body of this large-eyed creature.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 30 ft., jet 200 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d3), tentacles (grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 17, Con 14, Int 2, Wis 12, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/ink_cloud">ink cloud</Link> (10-ft. radius)</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d3 plus <Link to="/umr/poison">poison</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _orca = {title: "Orca", jsx: <><h2 id="companion-orca-orca">Orca</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 88</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This sleek black whale has a distinctive white patch near each eye and a mouth filled with sharp teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 80 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 19, Con 10, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 120 ft.</Cell></Row></Block>
</>};
const _ornithomimosaur = {title: "Ornithomimosaur", jsx: <><h2 id="companion-ornithomimosaur-ornithomimosaur">Ornithomimosaur</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 180</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This bipedal dinosaur has long legs built for speed and a long neck that gives it an ostrich-like profile.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 15, Con 12, Int 2, Wis 13, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Speed</Cell><Cell>60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d8 plus 1d4 <Link to="/umr/bleed">bleed</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>sprint</Cell></Row></Block>
</>};
const _ostrich = {title: "Ostrich", jsx: <><h2 id="companion-ostrich-ostrich">Ostrich</h2>
<p><strong>Sources</strong> <Link to="/source/osirion_legacy_of_the_pharaohs">Osirion, Legacy of the Pharaohs pg. 55</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/ostrich">Ostrich</Link></Cell></Row></Block>
<p>This human-sized bird has a long neck and legs sprouting from a round body covered in fluffy gray feathers.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>claw (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 16, Con 12, Int 2, Wis 13, Cha 11</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>60 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>claw (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>crouch</Cell></Row></Block>
</>};
const _owl_giant = {title: "Giant Owl", jsx: <><h2 id="companion-owl_giant-giant-owl">Giant Owl</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_owl">Giant Owl</Link></Cell></Row></Block>
<p>Unlike the magical beast of the same name, this owl is a mundane but unusually large specimen of its kind, with powerful wings and deadly talons.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 13, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Racial Skill Modifiers</Cell><Cell>+4 Stealth</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/rend">rend</Link> (2 talons, 1d6)</Cell></Row></Block>
</>};
const _panda = {title: "Panda", jsx: <><h2 id="companion-panda-panda">Panda</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/panda">Panda</Link></Cell></Row></Block>
<p>Normally slow moving and docile, pandas are capable of surprising bursts of activity when needed.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 12, Con 14, Int 2, Wis 13, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>powerful bite</Cell></Row></Block>
</>};
const _pilo = {title: "Pilo", jsx: <><h2 id="companion-pilo-pilo">Pilo</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_85_fires_of_creation">Pathfinder #85: Fires of Creation pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/pilo">Pilo</Link></Cell></Row></Block>
<p>Sharp quills cover this bright yellow, six-legged animal, and its long, twitching snout probes the air around it.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 13, Con 14, Int 2, Wis 14, Cha 7</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>roll up</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link>, quills</Cell></Row></Block>
</>};
const _plesiosaurus = {title: "Plesiosaurus", jsx: <><h2 id="companion-plesiosaurus-plesiosaurus">Plesiosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/plesiosaurus">Plesiosaurus</Link></Cell></Row></Block>
<p>This streamlined reptile has a long, serpentine neck, at the end of which glares a many-fanged head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>5 ft., swim 60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 12, Int 2, Wis 15, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/keen_scent">keen scent</Link>, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>ambush attack +1d6, <Link to="/umr/bleed">bleed</Link> (1)</Cell></Row></Block>
</>};
const _polar_bear = {title: "Polar Bear", jsx: <><h2 id="companion-polar_bear-polar-bear">Polar Bear</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/polar_bear">Polar Bear</Link></Cell></Row></Block>
<p>Red gore stains this bear's muzzle, creating a striking contrast against its white fur.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _pony = {title: "Pony", jsx: <><h2 id="companion-pony-pony">Pony</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/pony">Pony</Link></Cell></Row></Block>
<p>This squat equine plods forward with large, curious eyes. As it nears, it extends its muzzle, clearly expecting a treat.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 13, Con 12, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>combat trained</Cell></Row></Block>
</>};
const _porcupine_giant = {title: "Giant Porcupine", jsx: <><h2 id="companion-porcupine_giant-giant-porcupine">Giant Porcupine</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_porcupine">Giant Porcupine</Link></Cell></Row></Block>
<p>This lumbering forest creature is adorned with an array of long, sharp quills that protrude from its coarse pelt.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 15, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>quills (as <Link to="/monster/porcupine">porcupine</Link> quills)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tail slap (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>quills (as <Link to="/monster/giant_porcupine">giant porcupine</Link> quills)</Cell></Row></Block>
</>};
const _prionosuchus = {title: "Prionosuchus", jsx: <><h2 id="companion-prionosuchus-prionosuchus">Prionosuchus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This primeval crocodile is equally effective in the water and on land. Its jaws are capable of crushing things with great force.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus <Link to="/umr/grab">grab</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 15, Int 1, Wis 12, Cha 4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d8)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>constrict (2d6)</Cell></Row></Block>
</>};
const _pygmy_hippopotamus = {title: "Pygmy Hippopotamus", jsx: <><h2 id="companion-pygmy_hippopotamus-pygmy-hippopotamus">Pygmy Hippopotamus</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 60</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/hippopotamus">Hippopotamus</Link></Cell></Row></Block>
<p>This fleshy behemoth wallows forward on four stumpy legs. Its jaws spread wide in a roar of challenge, exposing massive, tusk-like teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 10, Con 13, Int 2, Wis 10, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">trample</Link> (1d8)</Cell></Row></Block>
</>};
const _quetzalcoatlus = {title: "Quetzalcoatlus", jsx: <><h2 id="companion-quetzalcoatlus-pterosaur-quetzalcoatlus">Pterosaur (Quetzalcoatlus)</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link>, <Link to="/source/pathfinder_37_souls_for_smugglers_shiv">Pathfinder #37: Souls for Smuggler's Shiv pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/quetzalcoatlus">Quetzalcoatlus</Link></Cell></Row></Block>
<p>This immense flying reptile has a staggering wingspan and a brightly colored head with a razor-sharp beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 50 ft. (clumsy)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 21, Con 10, Int 2, Wis 14, Cha 12</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>9th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6/&times;3), 2 wings (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>razor-sharp beak</Cell></Row></Block>
</>};
const _ram = {title: "Ram", jsx: <><h2 id="companion-ram-ram">Ram</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 154</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/ram">Ram</Link></Cell></Row></Block>
<p>A formidable pair of heavy horns curls from the forehead of this sturdy, brown-and-white-furred ram.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 11, Int 2, Wis 14, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link> (1d8)</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/improved_bull_rush">Improved Bull Rush</Link></Cell></Row></Block>
</>};
const _rash_creeper = {title: "Rash Creeper", jsx: <><h2 id="companion-rash_creeper-rash-creeper">Rash Creeper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This mass of creeping vines and leaves slithers almost like a snake. Contact with this predatory plant causes a sickening and sometimes debilitating rash.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 13, Int 1, Wis 11, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1 <Link to="/rule/dex_damage">Dex damage</Link> and <Link to="/misc/sickened">sickened</Link> for 1 round</>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poison (same as above, but cure now requires 2 saves)</Cell></Row></Block>
</>};
const _raven_giant = {title: "Giant Raven", jsx: <><h2 id="companion-raven_giant-giant-raven">Giant Raven</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_97_in_hells_bright_shadow">Pathfinder #97: In Hell's Bright Shadow pg. 82</Link>, <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_raven">Giant Raven</Link></Cell></Row></Block>
<p>This glossy, jet-black bird stands as tall as a dwarf. Its eerily intelligent black eyes are quick to take in everything around it.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 50 ft. (average)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 13, Con 10, Int 2, Wis 15, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, scavenger</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex +2, Con +2</Cell></Row></Block>
</>};
const _reef_snake = {title: "Reef Snake", jsx: <><h2 id="companion-reef_snake-reef-snake">Reef Snake</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>Highly venomous and an excellent swimmer, the brightly colored reef snake is at home in tidal waters but can slither about on land if needed.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 12, Int 1, Wis 13, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poison (same as above, but damage becomes 1d2 Str and cure is now 2 saves)</Cell></Row></Block>
</>};
const _reindeer = {title: "Reindeer", jsx: <><h2 id="companion-reindeer-reindeer">Reindeer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>A denizen of the frozen tundra, the reindeer is a sure-footed companion in icy terrain, and it can used for transportation as well as defense.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 13, Int 2, Wis 12, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link>, snow adaptation (ignore <Link to="/rule/difficult_terrain">difficult terrain</Link> from ice and snow)</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2, Con +2</Cell></Row></Block>
</>};
const _rhinoceros = {title: "Rhinoceros", jsx: <><h2 id="companion-rhinoceros-rhinoceros">Rhinoceros</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 235</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/rhinoceros">Rhinoceros</Link></Cell></Row></Block>
<p>This rhinoceros has a low-slung head with twisted ears that lie back along its neck.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 14, Con 15, Int 2, Wis 13, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/powerful_charge">powerful charge</Link></Cell></Row></Block>
</>};
const _riding_python = {title: "Riding Python", jsx: <><h2 id="companion-riding_python-riding-python">Riding Python</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 128</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/venomous_snake">Venomous Snake</Link></Cell></Row></Block>
<p>This brightly colored snake assumes an aggressive posture, its hissing mouth open to display its fangs.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 14, Con 13, Int 1, Wis 10, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>combat training (see <Link to="/skill/handle_animal">Handle Animal</Link>)</Cell></Row></Block>
</>};
const _riding_rat = {title: "Riding Rat", jsx: <><h2 id="companion-riding_rat-riding-rat">Riding Rat</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 177</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/dire_rat">Dire Rat</Link></Cell></Row></Block>
<p>This filthy rat is the size of a small dog. It has a coat of coarse fur, a long and scabby tail, and two glittering eyes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., climb 20 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 15, Con 17, Int 2, Wis 13, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +2</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/endurance">Endurance</Link></Cell></Row></Block>
</>};
const _ringhorn = {title: "Ringhorn", jsx: <><h2 id="companion-ringhorn-ringhorn">Ringhorn</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_115_trail_of_the_hunted">Pathfinder #115: Trail of the Hunted pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/ringhorn">Ringhorn</Link></Cell></Row></Block>
<p>The horns of this goat-like deer grow up and curve around into a pair of massive, spiraling rings atop its head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 18, Con 11, Int 2, Wis 12, Cha 13</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/nimble_moves">Nimble Moves</Link></Cell></Row></Block>
</>};
const _roc = {title: "Roc", jsx: <><h2 id="companion-roc-roc">Roc</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 236</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/roc">Roc</Link></Cell></Row></Block>
<p>This immense raptor unleashes a shrill cry as it bares its talons, each large enough to carry off a horse.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 80 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+5 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d4), bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 19, Con 9, Int 2, Wis 13, Cha 11</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 talons (1d6 plus grab), bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _saber_toothed_cat = {title: "Saber-Toothed Cat", jsx: <><h2 id="companion-saber_toothed_cat-saber-toothed-cat">Saber-Toothed Cat</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>Somewhat smaller than the more ferocious saber-toothed tiger, the saber-toothed cat is nonetheless an impressive predatory creature.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4 plus <Link to="/umr/grab">grab</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 13, Int 2, Wis 13, Cha 8</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>saber-toothed bite (1d10 bite attack, only on a grapple check to deal damage)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pounce">pounce</Link>, saber-toothed bite (2d8 bite attack, only on a grapple check to deal damage)</Cell></Row></Block>
</>};
const _salamander_giant = {title: "Giant Salamander", jsx: <><h2 id="companion-salamander_giant-giant-salamander">Giant Salamander</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This oversized amphibian has a mouth full of tiny but rather sharp teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 15, Int 1, Wis 12, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>amphibious, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft. (underwater only), <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +4</Cell></Row>
<Row><Cell>Racial Skill Modifiers</Cell><Cell>+4 Stealth</Cell></Row></Block>
</>};
const _scorpion_giant = {title: "Giant Scorpion", jsx: <><h2 id="companion-scorpion_giant-giant-scorpion">Giant Scorpion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_scorpion">Giant Scorpion</Link></Cell></Row></Block>
<p>The sixteen-foot-long scorpion scrabbles forward, ferocious claws raised in challenge, stingered tail arched over its back.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d4 plus grab) and sting (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 12, Con 12, Int -, Wis 10, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6 plus grab) and sting (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poison (as above, but Str damage becomes 1d2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>tremorsense 60 ft.</Cell></Row></Block>
</>};
const _sea_crawler = {title: "Sea Crawler", jsx: <><h2 id="companion-sea_crawler-sea-crawler">Sea Crawler</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_121_the_lost_outpost">Pathfinder #121: The Lost Outpost pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/sea_crawler">Sea Crawler</Link></Cell></Row></Block>
<p>This furred creature has long tentacles that are covered in ridges and suction discs in place of arms, legs, and a tail.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., climb 30 ft., swim 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 tentacles (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 17, Con 10, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>remarkable grip</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>regrowth</Cell></Row></Block>
</>};
const _seahorse_giant = {title: "Giant Seahorse", jsx: <><h2 id="companion-seahorse_giant-giant-seahorse">Giant Seahorse</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_seahorse">Giant Seahorse</Link></Cell></Row></Block>
<p>This sea creature resembles a cross between fish and horse; it has small fins on its flanks and a gracefully curled tail.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 13, Con 15, Int 1, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>anchor</Cell></Row></Block>
</>};
const _shark = {title: "Shark", jsx: <><h2 id="companion-shark-shark">Shark</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/shark">Shark</Link></Cell></Row></Block>
<p>This blue shark's fins slice through the water, its black eyes rolling and its gaping jaws showing countless teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 15, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link></Cell></Row></Block>
</>};
const _shissah = {title: "Shissah", jsx: <><h2 id="companion-shissah-shissah">Shissah</h2>
<p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East pg. 63</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/shissah">Shissah</Link></Cell></Row></Block>
<p>This sleek equine is slightly smaller than an average horse, but its eyes contain a gleam of higher intelligence.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>60 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 hooves (1d4, secondary attack)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 16, Dex 15, Con 13, Int 2, Wis 14, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>desert dweller, easily trained</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 hooves (1d4, secondary attack)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex +4, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>desert senses</Cell></Row></Block>
</>};
const _skittergoat = {title: "Skittergoat", jsx: <><h2 id="companion-skittergoat-skittergoat">Skittergoat</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/skittergoat">Skittergoat</Link></Cell></Row></Block>
<p>This small goat has sharp horns that wrap around its head to point forward, making it resemble a tiny bull.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 14, Con 11, Int 2, Wis 10, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>egg cracker</Cell></Row></Block>
</>};
const _skunk_giant = {title: "Giant Skunk", jsx: <><h2 id="companion-skunk_giant-giant-skunk">Giant Skunk</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 181</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_skunk">Giant Skunk</Link></Cell></Row></Block>
<p>Its unmistakable black-and-white-striped coloration gives a clear warning sign to any who've experienced this foul-smelling creature's ire.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 14, Con 13, Int 2, Wis 12, Cha 9</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spray (ranged touch attack, 30-ft. range, musk, usable 1/day)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, musk (Fort save or <Link to="/misc/sickened">sickened</Link> for 1d6 rounds, Con-based DC), <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spray (usable 2/day)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>musk (Fort save or <Link to="/misc/nauseated">nauseated</Link> for 1d3 rounds)</Cell></Row></Block>
</>};
const _slithering_sundew = {title: "Slithering Sundew", jsx: <><h2 id="companion-slithering_sundew-slithering-sundew">Slithering Sundew</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>Looking something like a two-headed serpent, this slithering plant strikes with two sticky, constricting slams.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 slams (1d4 plus 1d2 acid plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 17, Con 13, Int 1, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d8 acid)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 slams (1d6 plus 1d3 acid plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +6, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>constrict (2d6 acid)</Cell></Row></Block>
</>};
const _slug_giant = {title: "Giant Slug", jsx: <><h2 id="companion-slug_giant-giant-slug">Giant Slug</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_slug">Giant Slug</Link></Cell></Row></Block>
<p>This massive, gray-brown slug leaves a viscous trail of slime in its wake as a long rasping tongue tastes the air for prey.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tongue (1d4 plus 1 acid)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 8, Con 13, Int -, Wis 10, Cha 1</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit acid (ranged touch attack, 30 foot range, 1d6 acid damage)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link> 30 ft., DR 5/slashing or piercing, susceptible to salt</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tongue (1d6 plus 1d2 acid)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit acid (ranged touch attack, 30-foot range, 1d8 acid damage)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsight">blindsight</Link> 30 ft.</Cell></Row></Block>
</>};
const _snake_constrictor = {title: "Snake (Constrictor)", jsx: <><h2 id="companion-snake_constrictor-snake-constrictor">Snake (Constrictor)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/constrictor_snake">Constrictor Snake</Link></Cell></Row></Block>
<p>This large snake has a thick, muscular body and dull green scales decorated with dirty brown stripes.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 17, Con 13, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> 1d4</Cell></Row></Block>
</>};
const _snake_viper = {title: "Snake (Viper)", jsx: <><h2 id="companion-snake_viper-snake-viper">Snake (Viper)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/venomous_snake">Viper</Link></Cell></Row></Block>
<p>This brightly colored snake assumes an aggressive posture, its hissing mouth open to display its fangs.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d3 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 17, Con 11, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/con_damage">Con damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _snapping_flytrap = {title: "Snapping Flytrap", jsx: <><h2 id="companion-snapping_flytrap-snapping-flytrap">Snapping Flytrap</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 183</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This mobile flytrap features two spiky jaws and scuttles about on a tangle of roots.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 bites (1d4 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 14, Int 1, Wis 12, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>3 bites (1d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _sniper_cactus = {title: "Sniper Cactus", jsx: <><h2 id="companion-sniper_cactus-sniper-cactus">Sniper Cactus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 184</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This single-stalked cactus sports dozens of long, thin needles. Capable of crawling on three stalk-like roots, the sniper cactus can fire its thorns with deadly accuracy.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d4) or thorn (ranged attack, 60-foot range, 1d8 piercing damage, no Strength bonus on damage)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 13, Con 14, Int 1, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+2 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6) or 2 thorns (ranged attack, 60-foot range, 2d6 piercing damage, no Strength bonus on damage)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row></Block>
</>};
const _solifugid_giant = {title: "Giant Solifugid", jsx: <><h2 id="companion-solifugid_giant-giant-solifugid">Giant Solifugid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_solifugid">Giant Solifugid</Link></Cell></Row></Block>
<p>This vermin's double set of vertical mandibles make this giant solifugid a particularly ferocious-looking companion. Its speed allows it to strike at its enemies from cover without them knowing what happened.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 15, Int -, Wis 11, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/pounce">pounce</Link>, <Link to="/umr/rend">rend</Link> (2 claws; 1d4)</Cell></Row></Block>
</>};
const _sorico = {title: "Sorico", jsx: <><h2 id="companion-sorico-sorico">Sorico</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_85_fires_of_creation">Pathfinder #85: Fires of Creation pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/sorico">Sorico</Link></Cell></Row></Block>
<p>This large, tawny rodent has powerful forelimbs ending in spade-like claws. Sand and mud cakes the creature's fur.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., burrow 10 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 13, Con 15, Int 2, Wis 14, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>dust cloud</Cell></Row></Block>
</>};
const _spider_giant = {title: "Giant Spider", jsx: <><h2 id="companion-spider_giant-giant-spider">Giant Spider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_spider">Giant Spider</Link></Cell></Row></Block>
<p>A spider the size of a man crawls silently from the depths of its funnel-shaped web.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+0 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 6, Dex 17, Con 10, Int -, Wis 10, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision, <Link to="/umr/tremorsense">tremorsense</Link> 30 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _spider_web_tyrant = {title: "Spider (Web Tyrant)", jsx: <><h2 id="companion-spider_web_tyrant-spider-web-tyrant">Spider (Web Tyrant)</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row></Block>
<p>The web tyrant spider's bright coloration and long legs make for a stunning but unnerving companion.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 10, Int -, Wis 10, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/web">web</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+12 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _spitting_cobra = {title: "Spitting Cobra", jsx: <><h2 id="companion-spitting_cobra-spitting-cobra">Spitting Cobra</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/emperor_cobra">Emperor Cobra</Link></Cell></Row></Block>
<p>This brightly colored snake can spit its venom, giving it a dangerous ranged attack.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 15, Con 11, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below), spit (ranged touch attack, 10-foot range, poison, usable every 2d4 rounds)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff="blurred vision (20% miss chance) 1 round" cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>poision (effect becomes <Link to="/misc/blindness">blindness</Link> 1 round)</Cell></Row></Block>
</>};
const _squid = {title: "Squid", jsx: <><h2 id="companion-squid-squid">Squid</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 259</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/squid">Squid</Link></Cell></Row></Block>
<p>This slender red squid darts through the water with alacrity. Two large eyes stare from above the creature's tentacles.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 60 ft., jet 240 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>tentacles (1d4 plus <Link to="/umr/grab">grab</Link>), bite (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 15, Con 11, Int 2, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/ink_cloud">ink cloud</Link> (5-ft. radius)</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _squid_giant = {title: "Giant Squid", jsx: <><h2 id="companion-squid_giant-giant-squid">Giant Squid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_squid">Giant Squid</Link></Cell></Row></Block>
<p>Although this creature isn't nearly the size of a true giant squid, it remains large enough to do serious damage to foes with its many tentacles.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 40 ft., jet 90 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), tentacles (1d4 plus <Link to="/umr/grab">grab</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 13, Int 2, Wis 12, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>aquatic, low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), tentacles (1d6 plus grab)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d6)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/ink_cloud">ink cloud</Link> (20-ft. radius)</Cell></Row></Block>
</>};
const _stag = {title: "Stag", jsx: <><h2 id="companion-stag-stag">Stag</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/stag">Stag</Link></Cell></Row></Block>
<p>Majestic and graceful, this powerful animal has branching antlers atop it head.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 19, Con 14, Int 2, Wis 15, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6), 2 hooves (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Dex -2, Con +2</Cell></Row></Block>
</>};
const _stingray = {title: "Stingray", jsx: <><h2 id="companion-stingray-stingray">Stingray</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 232</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/stingray">Stingray</Link></Cell></Row></Block>
<p>A long tail fitted with a barbed stinger trails from this flat, triangular fish's body.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>swim 40 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>sting (1d3 plus <Link to="/umr/poison">poison</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 6, Dex 15, Con 13, Int 1, Wis 13, Cha 2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>sting (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/blindsense">blindsense</Link> 30 ft.</Cell></Row></Block>
</>};
const _swan_trumpeter = {title: "Trumpeter Swan", jsx: <><h2 id="companion-swan_trumpeter-trumpeter-swan">Trumpeter Swan</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/trumpeter_swan">Trumpeter Swan</Link></Cell></Row></Block>
<p>This large waterfowl has a wide wingspan, all-white feathers, a black bill, and a long, curving neck.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 80 ft. (average)</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 wings (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 12, Int 2, Wis 12, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _switchback_jackal = {title: "Switchback Jackal", jsx: <><h2 id="companion-switchback_jackal-switchback-jackal">Switchback Jackal</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_115_trail_of_the_hunted">Pathfinder #115: Trail of the Hunted pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/switchback_jackal">Switchback Jackal</Link></Cell></Row></Block>
<p>Resembling a small, half-starved wolf, this canine stares with deep intensity and undeniable hunger.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 11, Dex 13, Con 14, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, problem solver, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +4, Con +2, Wis +2</Cell></Row>
<Row><Cell>Bonus Feat(s)</Cell><Cell><Link to="/feat/overwhelm">Overwhelm</Link></Cell></Row></Block>
</>};
const _termite_giant = {title: "Giant Termite", jsx: <><h2 id="companion-termite_giant-giant-termite">Giant Termite</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_termite">Giant Termite</Link></Cell></Row></Block>
<p>The giant termite has a set of large powerful mandibles, and it is particularly effective when fighting alongside other termite companions.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 11, Con 12, Int -, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>swarming (two giant termites can share the same space, and if they both attack the same target, they are considered to be flanking that foe)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus 1d6 acid)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>gnaw (bite attack ignores hardness of 5 or less)</Cell></Row></Block>
</>};
const _therizinosaurus = {title: "Therizinosaurus", jsx: <><h2 id="companion-therizinosaurus-therizinosaurus">Therizinosaurus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/therizinosaurus">Therizinosaurus</Link></Cell></Row></Block>
<p>This feathered bipedal saurian looks somewhat comical - save for its outlandish sword-sized claws.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 18, Con 10, Int 2, Wis 15, Cha 11</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link>, sprint</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 claws (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/bleed">bleed</Link> (1d6), sweeping strike</Cell></Row></Block>
</>};
const _thylacine = {title: "Thylacine", jsx: <><h2 id="companion-thylacine-thylacine">Thylacine</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/thylacine">Thylacine</Link></Cell></Row></Block>
<p>This odd creature is about the size of a dog, but it has the slender build of a cat, heavy whiskers, and dark stripes down its back. Its long tail flips about, smacking the ground as it scans the woods. It yips and bays in a complex pattern, offering warning to anything that may cross its path.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 16, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>powerful jaws</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row></Block>
</>};
const _titanoboa = {title: "Titanoboa", jsx: <><h2 id="companion-titanoboa-titanoboa">Titanoboa</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/titanoboa">Titanoboa (Megafauna)</Link></Cell></Row></Block>
<p>This immense serpent moves in deliberate, slithering undulations, its forked tongue tasting the air eagerly for the scent of prey.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft., swim 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 11, Int 2, Wis 17, Cha 8</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/constrict">constrict</Link> (1d6), <Link to="/umr/grab">grab</Link></Cell></Row></Block>
</>};
const _tortoise_giant = {title: "Giant Tortoise", jsx: <><h2 id="companion-tortoise_giant-giant-tortoise">Giant Tortoise</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_tortoise">Giant Tortoise</Link></Cell></Row></Block>
<p>This tortoise is half the height of a human, and has a domed shell, leathery skin, and a long neck.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+6 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 8, Con 16, Int 2, Wis 13, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+8 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/feat/great_fortitude">Great Fortitude</Link> (Bonus Feat)</Cell></Row></Block>
</>};
const _troodon = {title: "Troodon", jsx: <><h2 id="companion-troodon-troodon">Troodon</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/troodon">Troodon</Link></Cell></Row></Block>
<p>This small, slender-necked dinosaur's bright, inquisitive eyes seem to miss nothing.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 claws (1d3)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 7, Dex 17, Con 10, Int 2, Wis 14, Cha 13</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>easily trained, low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex +4, Con +4</Cell></Row></Block>
</>};
const _turtle_giant_snapping = {title: "Giant Snapping Turtle", jsx: <><h2 id="companion-turtle_giant_snapping-giant-snapping-turtle">Giant Snapping Turtle</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 273</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_snapping_turtle">Giant Snapping Turtle</Link></Cell></Row></Block>
<p>This lumbering turtle is the size of a house; its head features powerful, razor-sharp beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., swim 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+10 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 8, Dex 10, Con 9, Int 1, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/hold_breath">hold breath</Link>, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link></Cell></Row></Block>
</>};
const _uintatherium = {title: "Uintatherium", jsx: <><h2 id="companion-uintatherium-uintatherium">Uintatherium</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This large creature is built like a rhinoceros, but with fangs like a saber-toothed tiger and smaller horn-like ridges.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 17, Int 1, Wis 13, Cha 3</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _vulture_giant = {title: "Giant Vulture", jsx: <><h2 id="companion-vulture_giant-giant-vulture">Giant Vulture</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 312</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_vulture">Giant Vulture</Link></Cell></Row></Block>
<p>A wickedly hooked beak and an immense bald head draw attention from this enormous scavenger's vast wingspan.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 50 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 14, Int 2, Wis 15, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, +4 on saves vs. disease</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _walrus = {title: "Walrus", jsx: <><h2 id="companion-walrus-walrus">Walrus</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/walrus_b4">Walrus</Link></Cell></Row></Block>
<p>This bulky, thick-skinned, flippered creature has on its face two enormous tusks and what looks like a coarse mustache.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., swim 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 13, Con 14, Int 2, Wis 13, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/hold_breath">hold breath</Link>, low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _warcat_of_rull = {title: "Warcat of Rull", jsx: <><h2 id="companion-warcat_of_rull-warcat-of-rull">Warcat of Rull</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/warcat_of_rull">Warcat of Rull</Link></Cell></Row></Block>
<p>This massive cat-like creature has the lithe grace of a feline despite a shell-like armor of segmented plates.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6), 2 claws (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 14, Int 2, Wis 11, Cha 5</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/rake">rake</Link> (1d4)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8), 2 claws (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link>, rake (1d6)</Cell></Row></Block>
</>};
const _wasp_giant = {title: "Giant Wasp", jsx: <><h2 id="companion-wasp_giant-giant-wasp">Giant Wasp</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_wasp">Giant Wasp</Link></Cell></Row></Block>
<p>This horse-sized wasp is covered in yellow and black vertical stripes - its stinger is the size of a sword and drips with venom.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 60 ft. (good)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>sting (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 14, Con 11, Int -, Wis 13, Cha 4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision</Cell></Row>
<Row><Cell>CMD</Cell><Cell>+8 vs. trip</Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>sting (1d8 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _weasel_giant = {title: "Giant Weasel", jsx: <><h2 id="companion-weasel_giant-giant-weasel">Giant Weasel</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 311</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_weasel">Giant Weasel</Link></Cell></Row></Block>
<p>This massive weasel moves smoothly across the ground, almost slithering like a snake, before pouncing with teeth bared.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 19, Con 13, Int 2, Wis 12, Cha 10</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/blood_drain">blood drain</Link> (1 Con), <Link to="/umr/grab">grab</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row></Block>
</>};
const _whiptail_centipede_giant = {title: "Giant Whiptail Centipede", jsx: <><h2 id="companion-whiptail_centipede_giant-giant-whiptail-centipede">Giant Whiptail Centipede</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 185</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Vermin</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/giant_whiptail_centipede">Giant Whiptail Centipede</Link></Cell></Row></Block>
<p>The long thin tendrils that lash out from this centipede's tail can trip foes with surprising ease.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft., climb 40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 9, Dex 13, Con 13, Int -, Wis 10, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link> (see below)</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft.</Cell></Row>
<Row><Cell>CMD</Cell><Cell>can't be tripped</Cell></Row></Block>
<blockquote>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p" />
</blockquote>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus poison), tail slap (1d2 nonlethal plus <Link to="/umr/trip">trip</Link>, no Strength bonus on damage)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _whisperfall_vulture = {title: "Whisperfall Vulture", jsx: <><h2 id="companion-whisperfall_vulture-whisperfall-vulture">Whisperfall Vulture</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 55</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/whisperfall_vulture">Whisperfall Vulture</Link></Cell></Row></Block>
<p>This dark-winged vulture has a wickedly hooked beak stained with bright red blood.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>10 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 12, Dex 15, Con 12, Int 2, Wis 13, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _wolf = {title: "Wolf", jsx: <><h2 id="companion-wolf-wolf">Wolf</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 54</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/wolf">Wolf</Link></Cell></Row></Block>
<p>This powerful canine watches its prey with piercing yellow eyes, darting its tongue across sharp white teeth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus <Link to="/umr/trip">trip</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 15, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell><Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus trip)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
const _wolfdog = {title: "Wolfdog", jsx: <><h2 id="companion-wolfdog-wolfdog">Wolfdog</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>This creature is a dependable hybrid of wolf and dog.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6 plus 1d4 <Link to="/umr/bleed">bleed</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _wolliped = {title: "Wolliped", jsx: <><h2 id="companion-wolliped-wolliped">Wolliped</h2>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 313</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/wolliped">Wolliped</Link></Cell></Row></Block>
<p>This shaggy, multi-legged creature has a flattened face with wide nostrils and four eyes. Ivory tusks jut downward, flanking its mouth.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 16, Con 12, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>spit, <Link to="/umr/trample">trample</Link></Cell></Row></Block>
</>};
const _worg = {title: "Worg", jsx: <><h2 id="companion-worg-worg">Worg</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 14</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Monstrous</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/worg">Worg</Link></Cell></Row></Block>
<p>This unusually large wolf has an evil, almost intelligent light shining in its deep red eyes.</p>
<p><strong>Prerequisites</strong> Alignment within one step of neutral evil.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 17, Dex 15, Con 13, Int 6, Wis 14, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row>
<Row><Cell>Languages</Cell><Cell>Common, Goblin</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8 plus <Link to="/umr/trip">trip</Link>)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
<h3 id="companion-worg-mastery-7th-level"><Link to="/feat/monstrous_mount_mastery">Mastery</Link> (7th Level)</h3>
<p>Once per day as a standard action, the worg can make a fearful howl. This functions as the <em>fear cone (30 ft.)</em> version of the <Link to="/umr/fear">fear</Link> universal monster rule.</p>
</>};
const _yak = {title: "Yak", jsx: <><h2 id="companion-yak-yak">Yak</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/yak">Yak</Link></Cell></Row></Block>
<p>Stout and stubborn, the yak is sure footed and dependable in rough terrain.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+4 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 10, Con 12, Int 2, Wis 10, Cha 5</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Con +4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>pack animal (speed is never modified by encumbrance)</Cell></Row></Block>
</>};
const _yolubilis_heron = {title: "Yolubilis Heron", jsx: <><h2 id="companion-yolubilis_heron-yolubilis-heron">Yolubilis Heron</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_97_in_hells_bright_shadow">Pathfinder #97: In Hell's Bright Shadow pg. 83</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/yolubilis_heron">Yolubilis Heron</Link></Cell></Row></Block>
<p>As tall as a tree, this dark gray bird stands on long legs. Its curved neck supports a sleek head with a slim but wicked beak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 15, Con 14, Int 2, Wis 12, Cha 9</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>still predator</Cell></Row></Block>
</>};
const _yzobu = {title: "Yzobu", jsx: <><h2 id="companion-yzobu-yzobu">Yzobu</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 124</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/yzobu">Yzobu</Link></Cell></Row></Block>
<p>This four-legged animal with a long-horned, bovine head looks like a cross between a horse and a long-haired yak.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>40 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>7th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+3 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>gore (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/trample">stampede, trample</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>stench</Cell></Row></Block>
</>};
const _zebra = {title: "Zebra", jsx: <><h2 id="companion-zebra-zebra">Zebra</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 182</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Animal</Cell></Row></Block>
<p>The iconic black and white stripes of the zebra make it instantly recognizable.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>Speed</Cell><Cell>50 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d4), 2 hooves (primary attack, 1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 14, Dex 15, Con 13, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Dex +2, Con +2</Cell></Row></Block>
</>};
const _carnivorous_flower = {title: "Carnivorous Flower", jsx: <><h2 id="companion-carnivorous_flower-carnivorous-flower">Carnivorous Flower</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 10 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 17, Con 15, Int 2, Wis 12, Cha 10</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Attack</Cell><Cell>bite (2d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +4, Dex -2, Con +2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell>rage (1/day, as the <Link to="/class/barbarian">barbarian</Link> class feature for 6 rounds)</Cell></Row></Block>
</>};
const _crawling_vine = {title: "Crawling Vine", jsx: <><h2 id="companion-crawling_vine-crawling-vine">Crawling Vine</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., climb 20 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d4)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 13, Dex 17, Con 13, Int 1, Wis 12, Cha 2</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/grab">grab</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision, <Link to="/umr/scent">scent</Link></Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>slam (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/constrict">constrict</Link> 1d6</Cell></Row></Block>
</>};
const _puffball = {title: "Puffball (Floating Fungus)", jsx: <><h2 id="companion-puffball-puffball-floating-fungus">Puffball (Floating Fungus)</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row></Block>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Small</Cell></Row>
<Row><Cell>Speed</Cell><Cell>20 ft., fly 60 ft. (average)</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>thorn (1d4 plus poison)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 10, Dex 15, Con 12, Int 2, Wis 14, Cha 6</Cell></Row>
<Row><Cell>Special Attacks</Cell><Cell><Link to="/umr/poison">poison</Link></Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>low-light vision</Cell></Row></Block>
<AffInfo type="Poison" save="Fort 10 + 1/2 the companion's HD + its Con modifier" freq="1/round for 6 rounds" eff={<>1 <Link to="/rule/con_damage">Con damage</Link></>} cure1 icon="p" />
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +2, Con +2</Cell></Row></Block>
</>};
const _treant_sapling = {title: "Treant, Sapling", jsx: <><h2 id="companion-treant_sapling-sapling-treant">Sapling Treant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 26</Link></p>
<Block size="simple" hl>
<Row><Cell>Companion Type</Cell><Cell>Plant</Cell></Row>
<Row><Cell>Monster Entry</Cell><Cell><Link to="/monster/treant">Treant</Link></Cell></Row></Block>
<p>This companion was introduced in the <Link to="/arc-druid/treesinger">Treesinger</Link> druid archetype.</p>
<Block titled size="simple"><Row><Cell><p>Starting Statistics</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Medium</Cell></Row>
<Row><Cell>Speed</Cell><Cell>30 ft., climb 30 ft.</Cell></Row>
<Row><Cell>AC</Cell><Cell>+1 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 slams (1d6)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str 15, Dex 10, Con 12, Int 2, Wis 12, Cha 7</Cell></Row>
<Row><Cell>Special Qualities</Cell><Cell>double damage against objects, low-light vision</Cell></Row></Block>
<Block titled size="simple"><Row><Cell><p>4th-Level Advancement</p>
</Cell></Row>
<Row><Cell>Size</Cell><Cell>Large</Cell></Row>
<Row><Cell>AC</Cell><Cell>+2 natural armor</Cell></Row>
<Row><Cell>Attack</Cell><Cell>2 slams (1d8)</Cell></Row>
<Row><Cell>Ability Scores</Cell><Cell>Str +8, Dex -2, Con +4</Cell></Row></Block>
</>};
export default {not_found:_not_found,amargasaurus:_amargasaurus,anglerfish:_anglerfish,ant_giant:_ant_giant,antelope:_antelope,ape:_ape,archaeopteryx:_archaeopteryx,armorfish:_armorfish,assassin_bug_giant:_assassin_bug_giant,aurochs:_aurochs,axe_beak:_axe_beak,baboon:_baboon,bacallia:_bacallia,badger:_badger,bear:_bear,beetle_giant:_beetle_giant,bird:_bird,blackwisp_egret:_blackwisp_egret,blue_whale:_blue_whale,boar:_boar,bristle_boar:_bristle_boar,brontotherium:_brontotherium,bull_of_zagresh:_bull_of_zagresh,bustard:_bustard,camel:_camel,cameroceras:_cameroceras,capybara:_capybara,cat_big:_cat_big,cat_small_cheetah_leopard:_cat_small_cheetah_leopard,caterpillar_giant:_caterpillar_giant,cattle:_cattle,cave_salamander:_cave_salamander,centipede_giant:_centipede_giant,ceratosaurus:_ceratosaurus,chalicotherium:_chalicotherium,chimpanzee:_chimpanzee,cockroach_giant:_cockroach_giant,corpse_eater_fungus:_corpse_eater_fungus,crab_giant:_crab_giant,creeping_puffball:_creeping_puffball,crocodile:_crocodile,dallo:_dallo,deinotherium:_deinotherium,devil_monkey:_devil_monkey,digmaul:_digmaul,allosaurus:_allosaurus,ankylosaurus:_ankylosaurus,brachiosaurus:_brachiosaurus,deinonychus:_deinonychus,dimetrodon:_dimetrodon,dimorphodon:_dimorphodon,diplodocus:_diplodocus,elasmosaurus:_elasmosaurus,iguanodon:_iguanodon,pachycephalosaurus:_pachycephalosaurus,parasaurolophus:_parasaurolophus,pteranodon:_pteranodon,spinosaurus:_spinosaurus,stegosaurus:_stegosaurus,styracosaurus:_styracosaurus,triceratops:_triceratops,tylosaurus:_tylosaurus,tyrannosaurus:_tyrannosaurus,velociraptor:_velociraptor,dire_bat:_dire_bat,dire_polar_bear:_dire_polar_bear,dire_rat:_dire_rat,dog:_dog,dolphin:_dolphin,dragonfly_giant:_dragonfly_giant,dunkleosteus:_dunkleosteus,elasmotherium:_elasmotherium,electric_eel:_electric_eel,elephant_mastodon:_elephant_mastodon,elk:_elk,enchanter_heron:_enchanter_heron,eohippus:_eohippus,eurypterid:_eurypterid,faerie_mount:_faerie_mount,falcon:_falcon,frilled_lizard_giant:_frilled_lizard_giant,frog_father:_frog_father,frog:_frog,gallerok:_gallerok,gar:_gar,giganotosaurus:_giganotosaurus,giraffe:_giraffe,gliding_turtle:_gliding_turtle,goblin_dog:_goblin_dog,goliath_frog:_goliath_frog,gorthek:_gorthek,griffon:_griffon,grizzly_bear:_grizzly_bear,gulper_plant:_gulper_plant,hammerhead_shark:_hammerhead_shark,hippocampus:_hippocampus,hippogriff:_hippogriff,hippopotamus:_hippopotamus,hobbe_hound:_hobbe_hound,horse:_horse,hunting_cactus:_hunting_cactus,hyena:_hyena,impaler_shrike:_impaler_shrike,kangaroo:_kangaroo,kaprosuchus:_kaprosuchus,kentrosaurus:_kentrosaurus,leech_giant:_leech_giant,lizard_giant_chameleon:_lizard_giant_chameleon,lizard_giant_gecko:_lizard_giant_gecko,lizard_monitor_lizard:_lizard_monitor_lizard,llama:_llama,locust_giant:_locust_giant,manta_ray:_manta_ray,mantis_shrimp_giant:_mantis_shrimp_giant,mantis_giant:_mantis_giant,marax:_marax,marsupial_devil:_marsupial_devil,marsupial_lion:_marsupial_lion,archelon:_archelon,arsinoitherium:_arsinoitherium,baluchitherium:_baluchitherium,basilosaurus:_basilosaurus,embolotherium:_embolotherium,glyptodon:_glyptodon,megalania:_megalania,megaloceros:_megaloceros,megatherium:_megatherium,megaprimatus:_megaprimatus,mindspin_ram:_mindspin_ram,moa:_moa,mokele_mbembe:_mokele_mbembe,mole_giant:_mole_giant,mome_rath:_mome_rath,moose:_moose,moray_eel:_moray_eel,mosquito_giant:_mosquito_giant,narwhal:_narwhal,octopus:_octopus,orca:_orca,ornithomimosaur:_ornithomimosaur,ostrich:_ostrich,owl_giant:_owl_giant,panda:_panda,pilo:_pilo,plesiosaurus:_plesiosaurus,polar_bear:_polar_bear,pony:_pony,porcupine_giant:_porcupine_giant,prionosuchus:_prionosuchus,pygmy_hippopotamus:_pygmy_hippopotamus,quetzalcoatlus:_quetzalcoatlus,ram:_ram,rash_creeper:_rash_creeper,raven_giant:_raven_giant,reef_snake:_reef_snake,reindeer:_reindeer,rhinoceros:_rhinoceros,riding_python:_riding_python,riding_rat:_riding_rat,ringhorn:_ringhorn,roc:_roc,saber_toothed_cat:_saber_toothed_cat,salamander_giant:_salamander_giant,scorpion_giant:_scorpion_giant,sea_crawler:_sea_crawler,seahorse_giant:_seahorse_giant,shark:_shark,shissah:_shissah,skittergoat:_skittergoat,skunk_giant:_skunk_giant,slithering_sundew:_slithering_sundew,slug_giant:_slug_giant,snake_constrictor:_snake_constrictor,snake_viper:_snake_viper,snapping_flytrap:_snapping_flytrap,sniper_cactus:_sniper_cactus,solifugid_giant:_solifugid_giant,sorico:_sorico,spider_giant:_spider_giant,spider_web_tyrant:_spider_web_tyrant,spitting_cobra:_spitting_cobra,squid:_squid,squid_giant:_squid_giant,stag:_stag,stingray:_stingray,swan_trumpeter:_swan_trumpeter,switchback_jackal:_switchback_jackal,termite_giant:_termite_giant,therizinosaurus:_therizinosaurus,thylacine:_thylacine,titanoboa:_titanoboa,tortoise_giant:_tortoise_giant,troodon:_troodon,turtle_giant_snapping:_turtle_giant_snapping,uintatherium:_uintatherium,vulture_giant:_vulture_giant,walrus:_walrus,warcat_of_rull:_warcat_of_rull,wasp_giant:_wasp_giant,weasel_giant:_weasel_giant,whiptail_centipede_giant:_whiptail_centipede_giant,whisperfall_vulture:_whisperfall_vulture,wolf:_wolf,wolfdog:_wolfdog,wolliped:_wolliped,worg:_worg,yak:_yak,yolubilis_heron:_yolubilis_heron,yzobu:_yzobu,zebra:_zebra,carnivorous_flower:_carnivorous_flower,crawling_vine:_crawling_vine,puffball:_puffball,treant_sapling:_treant_sapling}