import {IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", jsx: <><h2 id="class-not_found-error">Error</h2>
<p>Unable to find the requested class.</p>
</>};
const _alchemist = {hasJL:true,title: "Alchemist", jsx: <><div className="jumpList" id="class-alchemist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-alchemist-alchemy-su">Alchemy</InnerLink></li><li><InnerLink toTop to="class-alchemist-extracts">Extracts and Potions</InnerLink></li><li><InnerLink toTop to="class-alchemist-bomb-su">Bombs and Throwing</InnerLink></li><li><InnerLink toTop to="class-alchemist-mutagen-su">Mutagen</InnerLink></li><li><InnerLink toTop to="class-alchemist-discovery-su">Discovery</InnerLink></li><li><InnerLink toTop to="class-alchemist-poison-resistance-ex">Poison</InnerLink></li><li><InnerLink toTop to="class-alchemist-swift-alchemy-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-alchemist-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-alchemist-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-alchemist-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-alchemist-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-alchemist-alchemist">Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 26</Link></p>
<p>Whether secreted away in a smoky basement laboratory or gleefully experimenting in a well-respected school of magic, the alchemist is often regarded as being just as unstable, unpredictable, and dangerous as the concoctions he brews. While some creators of alchemical items content themselves with sedentary lives as merchants, providing tindertwigs and smokesticks, the true alchemist answers a deeper calling. Rather than cast magic like a spellcaster, the alchemist captures his own magic potential within liquids and extracts he creates, infusing his chemicals with virulent power to grant him impressive skill with poisons, explosives, and all manner of self-transformative magic.</p>
<p><strong>Role:</strong> The alchemist's reputation is not softened by his exuberance (some would say dangerous recklessness) in perfecting his magical extracts and potion-like creations, infusing these substances with magic siphoned from his aura and using his own body as experimental stock. Nor is it mollified by the alchemist's almost gleeful passion for building explosive bombs and discovering strange new poisons and methods for their use. These traits, while making him a liability and risk for most civilized organizations and institutions of higher learning, seem to fit quite well with most adventuring groups.  </p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-alchemist-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-alchemist--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>Alchemy, bomb 1d6, Brew Potion, mutagen, Throw Anything</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Discovery, poison resistance +2, poison use</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Bomb 2d6, swift alchemy</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Discovery</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Bomb 3d6, poison resistance +4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Discovery, swift poisoning</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Bomb 4d6</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Discovery, poison resistance +6</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Bomb 5d6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Discovery, poison immunity</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Bomb 6d6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Discovery</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Bomb 7d6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Discovery, persistent mutagen</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>Bomb 8d6</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Discovery</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Bomb 9d6</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Discovery, instant alchemy</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Bomb 10d6</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>Grand discovery</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>Bombs</td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-alchemy-su" data-hash-target><div className="box">Alchemy (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When using Craft (alchemy) to create an alchemical item, you gain a competence bonus equal to your class level on the Craft (alchemy) check. In addition, you can use Craft (alchemy) to identify potions as if using <Link to="/spell/detect_magic">detect magic</Link>. You must hold the potion for 1 round to make such a check.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">Alchemists are not only masters of creating mundane alchemical substances such as alchemist's fire and smokesticks, but also can create three special types of magical items - extracts, bombs, and mutagens. <strong className="hl">Extracts</strong> are magical potion-like concoctions, <strong className="hl">bombs</strong> are explosive splash weapons, and <strong className="hl">mutagens</strong> are transformative elixirs that you drink to enhance your physical abilities - each of these are detailed in their own sections below.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-extracts" data-hash-target><div className="box">Extracts</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">You can create only a certain number of extracts of each level per day. In addition, you receive <Link to="/rule/determine_bonuses">bonus extracts per day</Link> if you have a high Intelligence score, in the same way a wizard receives bonus spells per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can prepare an extract of any formula you know. To learn or use an extract, you must have an Intelligence score equal to at least 10 + the extract's level. The DC for a saving throw against your extract is 10 + the extract level + the your Intelligence modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>In effect, you prepare your spells by mixing ingredients into a number of extracts, and then "cast" your spells by drinking the extract. When you create an extract or bomb, you infuse the concoction with a tiny fraction of your own magical power - this enables the creation of powerful effects, but also binds the effects to the creator</p>
<p>In many ways, extracts behave like spells in potion form, and as such their effects can be dispelled by effects like <Link to="/spell/dispel_magic">dispel magic</Link> using your level as the caster level. Unlike potions, though, extracts can have powerful effects and duplicate spells that a potion normally could not.</p>
<p>When you mix an extract, you infuse the chemicals and reagents in the extract with magic siphoned from your own magical aura. An extract immediately becomes inert if it leaves your possession, reactivating as soon as it returns to your keeping - you cannot normally pass out your extracts for allies to use (but see the <Link to="/discovery/infusion">"infusion"</Link> discovery). An extract, once created, remains potent for 1 day before losing its magic, so you must re-prepare your extracts every day. Mixing an extract takes 1 minute of work - most alchemists prepare many extracts at the start of the day or just before going on an adventure, but it's not uncommon for an alchemist to keep some (or even all) of his daily extract slots open so that he can prepare extracts in the field as needed.</p>
<p>Although you don't actually cast spells, you do have a <Link to="/main/spells_alchemist">formulae list</Link> that determines what extracts you can create. You can utilize <Link to="/misc/spell_trigger">spell-trigger</Link> items if the spell appears on your formuale list, but not <Link to="/misc/spell_completion">spell-completion</Link> items (unless you uses Use Magic Device to do so). An extract is "cast" by drinking it, as if imbibing a potion - the effects of an extract exactly duplicate the spell upon which its formula is based, save that the spell always affects only the drinking alchemist. You can draw and drink an extract as a <strong className="hl">standard action</strong>. You use your level as the caster level to determine any effect based on caster level.</p>
<p>Creating extracts consumes raw materials, but the cost of these materials is insignificant - comparable to the valueless material components of most spells. If a spell normally has a costly material component, that component is expended during the consumption of that particular extract. Extracts cannot be made from spells that have focus requirements (alchemist extracts that duplicate divine spells never have a divine focus requirement).</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You may know any number of formulae. You store your formulae in a special tome called a formula book. You must refer to this book whenever you prepare an extract but not when you consume it. You begin play with two 1st-level formulae of your choice, plus a number of additional forumlae equal to your Intelligence modifier. At each new alchemist level, you gain one new formula of any level that you can create. You can also add formulae to your book just like a wizard <Link to="/rule/adding_spells_to_a_wizards_spellbook">adds spells to his spellbook</Link>, using the same costs, pages, and time requirements. You can study a wizard's spellbook to learn any formula that is equivalent to a spell the spellbook contains. A wizard, however, cannot learn spells from a formula book. You do not need to decipher arcane writings before copying them.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-brew-potion-ex" data-hash-target><div className="box">Brew Potion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You receive <Link to="/feat/brew_potion">Brew Potion</Link> as a bonus feat. You can brew potions of any formulae you know (up to 3rd level), using your alchemist level as your caster level. The spell must be one that can be made into a potion. You do not need to meet the prerequisites for this feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-bomb-su" data-hash-target><div className="box">Bomb (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">You can use a number of bombs each day equal to your class level + your Intelligence modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can make and throw bombs. Drawing the components of, creating, and throwing a bomb is a single action. Thrown bombs have a range of 20 feet and use the <Link to="/rule/throw_splash_weapon">Throw Splash Weapon special attack</Link>. On a direct hit, your bomb inflicts 1d6 points of fire damage + additional damage equal to your Intelligence modifier (this bonus damage is not multiplied on a critical hit or by using feats such as <Link to="/feat/vital_strike">Vital Strike</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>In addition to magical extracts, alchemists are adept at swiftly mixing various volatile chemicals and infusing them with their magical reserves to create powerful bombs that they can hurl at their enemies. Bombs are unstable, and if not used in the round they are created, they degrade and become inert - their method of creation prevents large volumes of explosive material from being created and stored. In order to create a bomb, you must use a small vial containing an ounce of liquid catalyst - you can create this liquid catalyst from small amounts of chemicals from an alchemy lab, and these supplies can be readily refilled in the same manner as a spellcaster's component pouch. Most alchemists create a number of catalyst vials at the start of the day equal to the total number of bombs they can create in that day - once created, a catalyst vial remains usable by you for years.</p>
<p>Bombs are considered weapons and can be selected using feats such as <Link to="/feat/point_blank_shot">Point-Blank Shot</Link> and <Link to="/feat/weapon_focus">Weapon Focus</Link>. Alchemists can learn new types of bombs as <strong className="hl">discoveries</strong> as they level up. Your bombs, like your extracts, become inert if used or carried by anyone else.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">Yes</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 4d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 5d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 6d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 7d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 8d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 9d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">The base bomb damage becomes 10d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Splash damage from your bomb is always equal to the bomb's minimum damage (so if the bomb would deal 1d6+4 points of fire damage on a direct hit, its splash damage would be 5 points of fire damage). Those caught in the splash damage can attempt a Reflex save for half damage, with a DC equal to 10 + <Link to="/misc/half">half</Link> your alchemist level + your Intelligence modifier.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-throw-anything-ex" data-hash-target><div className="box">Throw Anything (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain the <Link to="/feat/throw_anything">Throw Anything</Link> feat as a bonus feat. You add your Intelligence modifier to damage done with splash weapons, including the splash damage if any. (This bonus damage is already included in the bomb class feature.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-mutagen-su" data-hash-target><div className="box">Mutagen (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can drink a mutagen to heighten your physical prowess at the cost of your personality. You gain a +2 natural armor bonus, a +4 alchemical bonus to a physical stat, and a -2 penalty to a mental stat. See below for details.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">A mutagen lasts for 10 minutes per alchemist level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Note</div></div><div className="abEnd"><div className="box"><p>You learn how to create a mutagen that you can imbibe in order to heighten your physical prowess at the cost of your personality. It takes 1 hour to brew a dose of mutagen, and once brewed, it remains potent until used. You can only maintain one dose of mutagen at a time - if you brew a second dose, any existing mutagen becomes inert.</p>
<p>When you brew a mutagen, you select one physical ability score for it to boost - either Strength, Dexterity, or Constitution. If the mutagen enhances your Strength, it applies a penalty to your Intelligence. If it enhances your Dexterity, it applies a penalty to your Wisdom. If it enhances your Constitution, it applies a penalty to your Charisma.</p>
<p>A non-alchemist who drinks a mutagen must make a Fortitude save (DC 10 + 1/2 your alchemist level + your Intelligence modifier) or become <Link to="/misc/nauseated">nauseated</Link> for 1 hour - a non-alchemist can never gain the benefit of a mutagen, but you can gain the effects of another alchemist's mutagen if you drink it. (Although if the other alchemist creates a different mutagen, the effects of the "stolen" mutagen immediately cease.) The effects of a mutagen do not stack. Whenever you drink a mutagen, the effects of any previous mutagen immediately end.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">As with an extract or bomb, a mutagen that is not in your possession becomes inert until you pick it up again.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-discovery-su" data-hash-target><div className="box">Discovery (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn an incredible <Link to="/ability/discovery">alchemical discovery</Link>, choosing one from the list provided. Unless otherwise noted, you cannot select an individual discovery more than once. Some discoveries can only be made if you have met certain prerequisites first, such as uncovering other discoveries.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You make another discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Some discoveries that modify bombs (Primary Bomb Discoveries) do not stack; only one such discovery can be applied to an individual bomb. The DC of any saving throw called for by a discovery is equal to 10 + 1/2 your alchemist level + the your Intelligence modifier.</div></div></div></div>
<aside><p>In addition, an alchemist can choose to learn an <Link to="/ability/annointings">annointing</Link> instead of a discovery.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-poison-resistance-ex" data-hash-target><div className="box">Poison Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +2 bonus on all saving throws against poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You become completely immune to poison.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-poison-use-ex" data-hash-target><div className="box">Poison Use (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are trained in the use of poison and cannot accidentally poison yourself when applying poison to a weapon.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-swift-alchemy-ex" data-hash-target><div className="box">Swift Alchemy (ex)</div><div className="flavor">You can create alchemical items with astounding speed.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">It takes you half the normal amount of time to create alchemical items.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You can apply poison to a weapon. (This is normally a standard action.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-swift-poisoning-ex" data-hash-target><div className="box">Swift Poisoning (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can now apply a dose of poison to a weapon as a <strong className="hl">swift action</strong>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-persistent-mutagen-su" data-hash-target><div className="box">Persistent Mutagen (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The effects of a mutagen now last for 1 hour per level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-instant-alchemy-ex" data-hash-target><div className="box">Instant Alchemy (Ex)</div><div className="flavor">You can create alchemical items with almost supernatural speed.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 18th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">You can create any alchemical item if you succeed at the Craft (alchemy) check and have the appropriate resources at hand to fund the creation.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">You can apply poison to a weapon. (This is normally a standard action.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-alchemist-grand-discovery-su" data-hash-target><div className="box">Grand Discovery (Su)</div><div className="flavor">For many alchemists, the promise of one of these grand discoveries is the primary goal of their experiments and hard work.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You make a <Link to="/ability/grand_discovery">grand discovery</Link>. You also immediately learn two normal discoveries, but also a third discovery chosen from the given list, representing a truly astounding alchemical breakthrough of significant import.</div></div></div></div>
<h3 id="class-alchemist-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-alchemist--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Vast Explosions</td><td><em>Rather than gaining a capstone, an alchemist can select the following grand discovery:</em> The alchemist has been practicing his demolitions for years, and it's paid off with ever larger explosions. The alchemist's bomb damage increases by 3d6.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-alchemist-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Aphorite:</strong> Add 1 foot to the range increment of the alchemist's thrown splash weapons (including the alchemist's bombs). This option has no effect unless the alchemist has selected it 5 times (or another increment of 5).<sup><InnerLink showBacklink="backlink-class-alchemist-ref-A-1" id="class-alchemist-ref-A-1" data-hash-target to="class-alchemist-A">1</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Gain 1/6 of a bonus discovery.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-B-1" id="class-alchemist-ref-B-1" data-hash-target to="class-alchemist-B">2</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add +10 minutes to the duration of the alchemist's mutagens.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-C-1" id="class-alchemist-ref-C-1" data-hash-target to="class-alchemist-C">3</InnerLink></sup></p>
<p><strong>Drow:</strong> Add +10 minutes to the duration of the alchemist's mutagens.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-D-1" id="class-alchemist-ref-D-1" data-hash-target to="class-alchemist-D">4</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add +1/4 to the alchemist's natural armor bonus when using his mutagen.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-E-1" id="class-alchemist-ref-E-1" data-hash-target to="class-alchemist-E">5</InnerLink></sup></p>
<p><strong>Elf:</strong> Add one extract formula from the alchemist's list to his formula book. This formula must be at least one level lower than the highest-level formula the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-F-1" id="class-alchemist-ref-F-1" data-hash-target to="class-alchemist-F">6</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add +1 to Craft (alchemy) checks to craft poison and +1/4 to the DCs of poisons the alchemist creates.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-G-1" id="class-alchemist-ref-G-1" data-hash-target to="class-alchemist-G">7</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add 10 minutes to the duration of the alchemist's mutagens.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-H-1" id="class-alchemist-ref-H-1" data-hash-target to="class-alchemist-H">8</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1/2 to the number of bombs per day the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-I-1" id="class-alchemist-ref-I-1" data-hash-target to="class-alchemist-I">9</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-alchemist-ref-J-1" id="class-alchemist-ref-J-1" data-hash-target to="class-alchemist-J">10</InnerLink></sup></p>
<p><strong>Goblin:</strong> The alchemist gains fire resistance 1. Each time this reward is selected, increase fire resistance by +1. This fire resistance does not stack with fire resistance gained from other sources.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-K-1" id="class-alchemist-ref-K-1" data-hash-target to="class-alchemist-K">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-alchemist-ref-L-1" id="class-alchemist-ref-L-1" data-hash-target to="class-alchemist-L">12</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add +1/4 to the number of toxic skin uses per day.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-M-1" id="class-alchemist-ref-M-1" data-hash-target to="class-alchemist-M">13</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1 foot to the range increment of the alchemist's thrown splash weapons (including the alchemist's bombs). This option has no effect unless the alchemist has selected it 5 times (or another increment of 5); a range increment of 24 feet is effectively the same as a range increment of 20 feet, for example.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-N-1" id="class-alchemist-ref-N-1" data-hash-target to="class-alchemist-N">14</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add one extract formula from the alchemist's list to the alchemist's formula book. This formula must be at least one level below the highest formula level the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-O-1" id="class-alchemist-ref-O-1" data-hash-target to="class-alchemist-O">15</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1/2 to the alchemist's bomb damage.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-P-1" id="class-alchemist-ref-P-1" data-hash-target to="class-alchemist-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-alchemist-ref-Q-1" id="class-alchemist-ref-Q-1" data-hash-target to="class-alchemist-Q">17</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1/2 bonus on Strength checks to break objects and on sunder combat maneuver checks when under the effects of a mutagen that increases the alchemist's Strength or Constitution score.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-R-1" id="class-alchemist-ref-R-1" data-hash-target to="class-alchemist-R">18</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add +1/2 to the number of bombs per day the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-S-1" id="class-alchemist-ref-S-1" data-hash-target to="class-alchemist-S">19</InnerLink></sup></p>
<p><strong>Human:</strong> Add one extract formula from the alchemist formula list to the character's formula book. This formula must be at least one level below the highest formula level the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-T-1" id="class-alchemist-ref-T-1" data-hash-target to="class-alchemist-T">20</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-alchemist-ref-U-1" id="class-alchemist-ref-U-1" data-hash-target to="class-alchemist-U">21</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add +1/2 to the alchemist's bomb damage.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-V-1" id="class-alchemist-ref-V-1" data-hash-target to="class-alchemist-V">22</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-W-1" id="class-alchemist-ref-W-1" data-hash-target to="class-alchemist-W">23</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/2 to the number of bombs per day the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-X-1" id="class-alchemist-ref-X-1" data-hash-target to="class-alchemist-X">24</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add +1 on Craft (alchemy) checks to craft poison and +1/3 on the DCs of poisons the alchemist creates.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-Y-1" id="class-alchemist-ref-Y-1" data-hash-target to="class-alchemist-Y">25</InnerLink></sup></p>
<p><strong>Orc:</strong> Add +10 minutes to the duration of the alchemist's mutagens.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-Z-1" id="class-alchemist-ref-Z-1" data-hash-target to="class-alchemist-Z">26</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> The alchemist gains +1/6 of a new discovery.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-1-1" id="class-alchemist-ref-1-1" data-hash-target to="class-alchemist-1">27</InnerLink></sup></p>
<p><strong>Svirfneblin:</strong> Add one extract formula from the alchemist's list to the alchemist's formula book. This formula must be at least one level below the highest formula level the alchemist can create.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-2-1" id="class-alchemist-ref-2-1" data-hash-target to="class-alchemist-2">28</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add +1/2 to the alchemist's bomb damage.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-3-1" id="class-alchemist-ref-3-1" data-hash-target to="class-alchemist-3">29</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add +1/2 to the alchemist's bomb damage.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-4-1" id="class-alchemist-ref-4-1" data-hash-target to="class-alchemist-4">30</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Add 1/4 to the alchemist's natural armor bonus when using his mutagen.<sup><InnerLink showBacklink="backlink-class-alchemist-ref-5-1" id="class-alchemist-ref-5-1" data-hash-target to="class-alchemist-5">31</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> Reduce the mental ability score penalty of the alchemist's mutagens by 1/5 (minimum 0).<sup><InnerLink showBacklink="backlink-class-alchemist-ref-6-1" id="class-alchemist-ref-6-1" data-hash-target to="class-alchemist-6">32</InnerLink></sup></p>
</div>
<h3 id="class-alchemist-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-alchemist/aerochemist">Aerochemist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; Swift Poisoning; Persistent Mutagen; Poison Use; Swift Alchemy; Poison Resistance</p><p>Aerochemists use scraps of Shory's magic in their concoctions to gain personal powers of flight.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/alchemical_sapper">Alchemical Sapper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bomb; Extracts; Mutagen; Poison Resistance; Swift Alchemy; 6th-level Discovery; Poison Immunity</p><p>Alchemical sappers are trained to create explosives.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/alchemical_trapper">Alchemical Trapper</Link></p><p><strong>Modifies or Replaces:</strong> 2nd and 4th-level Discoveries</p><p>(Kobold Only) Because kobolds rely on traps to soften up enemies, kobold alchemists learn to turn bombs into traps.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/aquachymist">Aquachymist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bombs; 2nd-level Discovery</p><p>Aquachymists are those rare few alchemists of land-dwelling and aquatic races alike who strive to unlock new and fantastic secrets of alchemy that can be discovered only in the water's depths.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/beastmorph">Beastmorph</Link></p><p><strong>Modifies or Replaces:</strong> Swift Alchemy; Swift Poisoning; Poison Immunity; Persistent Mutagen</p><p>Beastmorphs study the anatomy of monsters, learning how they achieve their strange powers.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/blazing_torchbearer">Blazing Torchbearer</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion; Poison Use; 4th-level Discovery</p><p>The blazing torchbearer is especially adept at manipulating flames of all kinds.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/blightseeker">Blightseeker</Link></p><p><strong>Modifies or Replaces:</strong> Bombs; 6th, 12th, 18th-level Discovery; Persistent Mutagen</p><p>Blightseekers are alchemists devoted to the study of fungi native to the Darklands.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/blood_alchemist">Blood Alchemist</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Mutagen; Bombs</p><p>Most alchemists can transform matter and energy into other forms, but some wicked specialists realize that life itself is an energy that can greatly fuel their alchemy.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/bogborn_alchemist">Bogborn Alchemist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Throw Anything</p><p>(Grippli Only) Some grippli alchemists are particularly attuned to the swamps and the dangerous creatures that inhabit them; these serve as their laboratories and research subjects, respectively.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/bramble_brewer">Bramble Brewer</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Discovery; Mutagen; Greater Mutagen; Grand Mutagen</p><p>(Half-Elf Only) Some half-elven alchemists merge human curiosity with their elven link to nature.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/chirurgeon">Chirurgeon</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Poison Resistance +4; Poison Immunity</p><p>An alchemist who studies anatomy and uses this knowledge to heal is a chirurgeon.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/clone_master">Clone Master</Link></p><p><strong>Modifies or Replaces:</strong> Bomb; Poison Resistance +6; Poison Immunity</p><p>Clone masters practice duplicating existing creatures in order to better understand how to create new life.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/concocter">Concocter</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 4th, 6th-level Discovery; Swift Poisoning</p><p>Concocters are experts at combining sets of chemicals to create unique effects.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/construct_rider">Construct Rider</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Brew Potion; Mutagen; 4th-level Discovery; Extracts</p><p>A construct rider creates arcane devices to emulate and surpass weak flesh.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/crimson_chymist">Crimson Chymist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen</p><p>Crimson chymists turn to the alchemical arts, infusing their bodies with the mutagenic essence of the Mantis God.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/cruorchymist">Cruorchymist</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Poison Resistance; Poison Immunity; Swift Poisoning; Mutagen; Brew Potion</p><p>Cruorchymists see their blood as just another tool for their experiments</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/crypt_breaker">Crypt Breaker</Link></p><p><strong>Modifies or Replaces:</strong> Alchemist Bomb, Mutagen, Brew Potion, Persistent Mutagen</p><p>Crypt breakers use their powers of perception and alchemical adaptation to safely investigate the mysteries of the past.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/deep_bomber">Deep Bomber</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Swift Alchemy; Instant Alchemy; Swift Poisoning</p><p>(Svirfneblin Only) Consumed with keeping hidden from the horrors below the surface, svirfneblin use their racial proclivity for alchemy and their inherent talent for obfuscation to strike their enemies from the darkness and retreat unseen.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/dimensional_excavator">Dimensional Excavator</Link></p><p><strong>Modifies or Replaces:</strong> 4th-level Discovery</p><p>Dimensional excavators have discovered and recorded ways to cause their bombs to create minor tears in the fabric of reality, forming extradimensional pits to vex their foes.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/dragonblood_chymist">Dragonblood Chymist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; 2nd, 12th, 16th-level discovery; Throw Anything; Poison Resistance; Poison Use; Swift Poisoning</p><p>The dragonblood chymist specializes in the reckless distillation of extracts and elixirs that allow them to experience the might of a dragon, however dangerous it might be.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/ectochymist">Ectochymist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bombs; Poison Resistance; Poison Use; Swift Poisoning; 8th-level Discovery; Poison Immunity</p><p>Ectochymists study the effects of alchemy on soul and spirit, focusing on fighting ghosts and other incorporeal creatures.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/ectoplasm_master">Ectoplasm Master</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion</p><p>Alchemists capable of distilling spectral horrors into alchemical reagents.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/eldritch_poisoner">Eldritch Poisoner</Link></p><p><strong>Modifies or Replaces:</strong> Bomb; Throw Anything; Mutagen; Persistent Mutagen; 4th-level Discovery</p><p>Eldritch poisoners are masters of the toxic arts, synthesizing lethal and incapacitating poisons with uncanny speed and expertise.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/energist">Energist</Link></p><p><strong>Modifies or Replaces:</strong> Extracts; Bombs; Poison Immunity; Throw Anything; 2nd-level Discovery; Swift Poisoning; Poison Resistance</p><p>While most alchemists experiment mainly with chemicals and physical materials to create disparate effects, energists tap into the energy of life or death: positive energy or negative energy.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/energy_scientist">Energy Scientist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Alchemy; Poison Resistance; Poison Immunity; Poison Use; Swift Poisoning</p><p>Energy scientists fervently prepare themselves to overcome exposure to specific elemental hazards so that they can traverse the Elemental Planes in search of novel discoveries and reagents.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/fermenter">Fermenter</Link></p><p><strong>Modifies or Replaces:</strong> Poison Resistance; 10th-level Discovery; Poison Use; Swift Poisoning</p><p>Little more than moonshiners to some, fermenters focus their efforts on imbibing substances, learning from the resulting effects on their bodies, and infusing this knowledge into their skill sets.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/fire_bomber">Fire Bomber</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Bomb; Throw Anything; 4th-level Discovery; Poison Resistance +6; Poison Immunity; Persistent Mutagen</p><p>(Goblin Only) Fire bombers are exceptionally good at using bombs to burn creatures and blow things up, but are not quite as good at creating other types of bombs or extracts.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/first_world_innovator">First World Innovator</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion; Poison Use; Swift Poisoning; Poison Immunity; Bombs; Poison Resistance</p><p>Those who can harness primal reagents - mundane reagents infused with the power of the First World - walk a fine line between genius and catastrophe.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/gloom_chymist">Gloom Chymist</Link></p><p><strong>Modifies or Replaces:</strong> Bomb; Poison Resistance; Poison Use; Swift Poisoning</p><p>A breakthrough in Nidalese alchemy led to the creation of glooms, magical fields of darkness from the Shadow Plane that can be momentarily animated with the use of strange compounds.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/grenadier">Grenadier</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion, Poison Resistance, Poison Use, Swift Poisoning, Poison Immunity</p><p>Grenadiers sacrifice their skill with poisons in order to become more adept at using alchemical bombs.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/grenadier_mc">Grenadier (MC)</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion; Poison Resistance; Poison Use; Swift Poisoning; Poison Immunity</p><p>Grenadiers train to exercise their talents in the thick of battle, even when not under the influence of their mutagens. They learn methods of combining weapon attacks with their alchemical magic, and sacrifice skill with poisons in order to become more adept at using alchemical bombs or using alchemical items in conjunction with their martial skills.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/gun_chemist">Gun Chemist</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Bombs; Brew Potion; Throw Anything; Poison Resistance; Swift Poisoning</p><p>Simple alchemists may dabble in explosives, but for the rare gun chemist, a firearm's barrel is his crucible</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/herbalist">Herbalist</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Key Ability Score; Throw Anything; Bombs; Poison Use; Poison Resistance; Poison Immunity</p><p>(Vine Leshy only) Vine leshys who study the physical and spiritual composition of their own bodies have discovered a strange herbal alchemy all their own.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/homunculist">Homunculist</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Poison Resistance; Poison Immunity; Swift Poisoning; Mutagen</p><p>One of the grand goals of alchemy is the ability to create new life. A homunculist has made this dream a reality, growing and modifying a familiar in his own laboratory.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/horticulturist">Horticulturist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; 2nd and 4th-level Discoveries; Bomb; Poison Resistance; Poison Use; Poison Immunity; Persistent Mutagen</p><p>A horticulturist spends his time cultivating plants and plant creatures, allowing him to experiment with strange and wondrous herbal concoctions.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/ice_chemist">Ice Chemist</Link></p><p><strong>Modifies or Replaces:</strong> Bomb; Poison Resistance; Poison Immunity; 2nd-level Discovery</p><p>Reclusive alchemists who dwell in the highest mountains or on the frozen tundra devote their skills to mastering the cold.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/inspired_chemist">Inspired Chemist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen</p><p>Akin to a mindchemist, inspired chemists use a type of cognatogen that instead of increasing their mental ability scores grants them inspiration like an investigator.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/internal_alchemist">Internal Alchemist</Link></p><p><strong>Modifies or Replaces:</strong> Throw Anything; Swift Alchemy; Swift Poisoning</p><p>An internal alchemist studies medicine, diet, and the living body to purify the self in the hope of gaining immortality.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/interrogator">Interrogator</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bomb; Mutagen; Persistent Mutagen</p><p>An interrogator extracts vital information from reluctant individuals using alchemical and traditional methods.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/mad_scientist">Mad Scientist</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy, 2nd, 4th-level Discovery; Mutagen</p><p>The mad scientist's colleagues laughed at her insights, mocked her theories, and hounded her from the halls of academia, simply because they were too weak and frightened to understand her work.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/metamorph">Metamorph</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bomb; Extracts; Throw Anything; Swift Alchemy; Swift Poisoning; Instant Alchemy</p><p>Metamorphs eschew traditional alchemy, focusing on internal chemistry and the transfiguration of living forms.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/mindchemist">Mindchemist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; Poison Use</p><p>A mindchemist can reach incredible levels of mental acuity, but suffers lingering debilitating effects to his physique.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/mixologist">Mixologist</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Brew Potion; Mutagen; 2nd-level Discovery; Poison Resistance; Persistent Mutagen</p><p>Mixologists focus on mastering the chemical reactions between alcohol and the physical body.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/mnemostiller">Mnemostiller</Link></p><p><strong>Modifies or Replaces:</strong> Key Ability Score; Alchemy; Throw Anything; Mutagen; Bombs; Poison Resistance; Poison Use</p><p>Mnemostillers extract memories; hey can return memories as easily as administering a potion, and experienced mnemostillers create a variety of effects through the careful administration of past traumas or victories</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/oenopion_researcher">Oenopion Researcher</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use, Swift Alchemy</p><p>The alchemist of Oenopion is incredibly skilled at making potions, elixirs, and other materials crucial to the country's economy and its monster-creating fleshforges.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/oozemaster">Oozemaster</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bomb; Brew Potion; Poison Resistance; Poison Immunity</p><p>The oozemaster is a specialized alchemist who fights and ensnares oozes.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/perfumer">Perfumer</Link></p><p><strong>Modifies or Replaces:</strong> Extracts; Brew Potion; Bomb; Mutagen; Persistent Mutagen</p><p>A perfumer alchemist refines extracts to their most pure and rarefied forms to spread on the wind</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/plague_bringer">Plague Bringer</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; Poison Resistance; Poison Immunity</p><p>(Ratfolk Only) The plague bringer sees disease as the ultimate weapon, and has worked tirelessly to master new diseases and disease-delivery systems.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/preservationist">Preservationist</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Poison Resistance +4; Poison Resistance +6; Poison Immunity; Persistent Mutagen; 18th-level Discovery</p><p>Some alchemists are obsessed with collecting and preserving exotic creatures.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/promethean_alchemist">Promethean Alchemist</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion; Throw Anything; Bombs; Mutagen</p><p>Obsessed with discovering the origins of life, promethean alchemists build constructs they gradually endow with life.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/psychonaut">Psychonaut</Link></p><p><strong>Modifies or Replaces:</strong> Bomb; Poison Resistance +4; Poison Resistance +6; Poison Immunity; 15th-level Bomb Damage Increase; 17th-level Bomb Damage Increase</p><p>A psychonaut uses his knowledge to explore altered states of consciousness and even other planes of existence.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/ragechemist">Ragechemist</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Swift Poisoning; Poison Immunity</p><p>Some alchemists create mutagens that tap into a primal anger that fuels their physical transformation.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/reanimator">Reanimator</Link></p><p><strong>Modifies or Replaces:</strong> Bomb; 7th-level Bomb Damage Increase; 13th-level Bomb Damage Increase; 15th-level Bomb Damage Increase</p><p>A reanimator is an alchemist who has discovered how to infuse a corpse with a semblance of life.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/royal_alchemist">Royal Alchemist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Poison Use; Swift Poisoning</p><p>Many rulers often hire specialized alchemists capable of concocting protections from both poisons and diseases for the nobles and their guests.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/saboteur">Saboteur</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen</p><p>(Gnome Only) The saboteur is an alchemist who specializes in destroying the plans, materials, and allies of his enemies.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/sacrament_alchemist">Sacrament Alchemist</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; Swift Alchemy</p><p>(Must worship a deity) Sacrament alchemists serve in a great variety of priestly roles for their deities.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/tinkerer">Tinkerer</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; Poison Resistance; Poison Use; Swift Poisoning; Poison Immunity; Persistent Mutagen</p><p>Tinkerers constantly dabble in clockworking, creating special familiars that they regularly upgrade and with which they form bizarre bonds.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/toxicant">Toxicant</Link></p><p><strong>Modifies or Replaces:</strong> Mutagen; Persistent Mutagen</p><p>In lands such as Daggermark and Katapesh where poisons are legal and may be openly studied and sold, some alchemists obsess over the myriad ways that poisons and venoms can be applied and delivered.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/trap_breaker">Trap Breaker</Link></p><p><strong>Modifies or Replaces:</strong> Poison Use; Poison Resistance +2, +4, +6; Swift Poisoning; Poison Immunity</p><p>Trap breakers forgo the study of poison to instead master the construction and deployment of traps, using their nimble fingers to disable dangerous devices and their alchemical knowledge to create devastating land mines.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/vaultbreaker">Vaultbreaker</Link></p><p><strong>Modifies or Replaces:</strong> Brew Potion; Bombs; Throw Anything; Poison Use</p><p>The vaultbreaker combines stealth with his bomb-making talents to construct special focused charges that can disable or destroy hinges, locks, and similar mechanisms.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/vivisectionist">Vivisectionist</Link></p><p><strong>Modifies or Replaces:</strong> Bombs</p><p>A vivisectionist studies bodies to better understand their function.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/wasteland_blightbreaker">Wasteland Blightbreaker</Link></p><p><strong>Modifies or Replaces:</strong> Poison Resistance +2, +6; Swift Poisoning; 8th-level Discovery</p><p>The deleterious effects of the weird hazards of the Mana Wastes require special skill to remedy.</p></div>
<div className="archetype"><p><Link to="/arc-alchemist/winged_marauder">Winged Marauder</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Mutagen; Persistent Mutagen</p><p>(Goblin Only) Goblin alchemists have created a mixture of pheromones that they use to manipulate and entice giant vultures or dire bats to do their bidding.</p></div>
<h3 id="class-alchemist-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"alchemist archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alchemy"},{"header":"Swift Alchemy"},{"header":"Instant Alchemy"},{"header":"Alignment"},{"header":"Bombs"},{"header":"7th-level Bomb Damage Increase"},{"header":"13th-level Bomb Damage Increase"},{"header":"15th-level Bomb Damage Increase"},{"header":"17th-level Bomb Damage Increase"},{"header":"Brew Potion"},{"header":"Class Skills"},{"header":"2nd-level Discovery"},{"header":"4th-level Discovery"},{"header":"6th-level Discovery"},{"header":"8th-level Discovery"},{"header":"10th-level Discovery"},{"header":"12th-level Discovery"},{"header":"16th-level Discovery"},{"header":"18th-level Discovery"},{"header":"Extracts"},{"header":"Key Ability Score"},{"header":"Mutagen"},{"header":"Persistent Mutagen"},{"header":"Poison Use"},{"header":"Swift Poisoning"},{"header":"Poison Resistance"},{"header":"Poison Resistance +2"},{"header":"Poison Resistance +4"},{"header":"Poison Resistance +6"},{"header":"Poison Immunity"},{"header":"Throw Anything"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-alchemist/Aerochemist›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X","X",null,null,null,null,null,null],["‹arc-alchemist/Alchemical Sapper›",null,"X",null,null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,"X",null,null],["‹arc-alchemist/Alchemical Trapper›",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Aquachymist›",null,null,null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Beastmorph›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,"X",null,null],["‹arc-alchemist/Blazing Torchbearer›",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-alchemist/Blightseeker›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Blood Alchemist›",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Bogborn Alchemist›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-alchemist/Bramble Brewer›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Chirurgeon›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null],["‹arc-alchemist/Clone Master›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-alchemist/Concocter›",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-alchemist/Construct Rider›",null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Crimson Chymist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Cruorchymist›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Crypt Breaker›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Deep Bomber›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-alchemist/Dimensional Excavator›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Dragonblood Chymist›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,"X",null,"X","X","X",null,null,null,null,"X",null],["‹arc-alchemist/Ectochymist›",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Ectoplasm Master›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Eldritch Poisoner›",null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,"X",null],["‹arc-alchemist/Energist›",null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,"X","X",null],["‹arc-alchemist/Energy Scientist›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Fermenter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null],["‹arc-alchemist/Fire Bomber›",null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X","X","X"],["‹arc-alchemist/First World Innovator›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Gloom Chymist›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null],["‹arc-alchemist/Grenadier›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Grenadier (MC)›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Gun Chemist›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X","X"],["‹arc-alchemist/Herbalist›","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,"X","X",null],["‹arc-alchemist/Homunculist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Horticulturist›",null,null,null,null,"X",null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,"X",null,null],["‹arc-alchemist/Ice Chemist›",null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null],["‹arc-alchemist/Inspired Chemist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Internal Alchemist›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null],["‹arc-alchemist/Interrogator›",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Mad Scientist›","X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Metamorph›",null,"X","X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X",null],["‹arc-alchemist/Mindchemist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null],["‹arc-alchemist/Mixologist›","X",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null],["‹arc-alchemist/Mnemostiller›","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,"X",null,null,null,null,"X",null],["‹arc-alchemist/Oenopion Researcher›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-alchemist/Oozemaster›",null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null],["‹arc-alchemist/Perfumer›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Plague Bringer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,"X",null,null],["‹arc-alchemist/Preservationist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X",null,null,null,"X","X","X",null,null],["‹arc-alchemist/Promethean Alchemist›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null],["‹arc-alchemist/Psychonaut›",null,null,null,null,"X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-alchemist/Ragechemist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null],["‹arc-alchemist/Reanimator›",null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Royal Alchemist›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-alchemist/Saboteur›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Sacrament Alchemist›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Tinkerer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X","X",null,null,null,"X",null,null],["‹arc-alchemist/Toxicant›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Trap Breaker›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X","X","X","X",null,null],["‹arc-alchemist/Vaultbreaker›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null],["‹arc-alchemist/Vivisectionist›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-alchemist/Wasteland Blightbreaker›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null],["‹arc-alchemist/Winged Marauder›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-alchemist-label">Footnotes</h3>
<ol>
<li id="class-alchemist-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-alchemist-ref-A-1" data-hash-target to="class-alchemist-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-B">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-alchemist-ref-B-1" data-hash-target to="class-alchemist-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-C">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 98</Link> <InnerLink id="backlink-class-alchemist-ref-C-1" data-hash-target to="class-alchemist-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-D">
<p>Advanced Race Guide pg. 103 <InnerLink id="backlink-class-alchemist-ref-D-1" data-hash-target to="class-alchemist-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-E">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-alchemist-ref-E-1" data-hash-target to="class-alchemist-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-F">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-alchemist-ref-F-1" data-hash-target to="class-alchemist-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-G">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-alchemist-ref-G-1" data-hash-target to="class-alchemist-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-H">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 8</Link> <InnerLink id="backlink-class-alchemist-ref-H-1" data-hash-target to="class-alchemist-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-I">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-alchemist-ref-I-1" data-hash-target to="class-alchemist-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-J">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 15</Link> <InnerLink id="backlink-class-alchemist-ref-J-1" data-hash-target to="class-alchemist-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-K">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-alchemist-ref-K-1" data-hash-target to="class-alchemist-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-L">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-alchemist-ref-L-1" data-hash-target to="class-alchemist-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-M">
<p>Advanced Race Guide pg. 190 <InnerLink id="backlink-class-alchemist-ref-M-1" data-hash-target to="class-alchemist-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-N">
<p>Advanced Race Guide pg. 42 <InnerLink id="backlink-class-alchemist-ref-N-1" data-hash-target to="class-alchemist-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-O">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-alchemist-ref-O-1" data-hash-target to="class-alchemist-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-P">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-alchemist-ref-P-1" data-hash-target to="class-alchemist-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-Q">
<p>Advanced Player's Guide pg. 19 <InnerLink id="backlink-class-alchemist-ref-Q-1" data-hash-target to="class-alchemist-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-R">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 40</Link> <InnerLink id="backlink-class-alchemist-ref-R-1" data-hash-target to="class-alchemist-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-S">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-alchemist-ref-S-1" data-hash-target to="class-alchemist-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-T">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-alchemist-ref-T-1" data-hash-target to="class-alchemist-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-U">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-alchemist-ref-U-1" data-hash-target to="class-alchemist-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-V">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-alchemist-ref-V-1" data-hash-target to="class-alchemist-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-W">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-alchemist-ref-W-1" data-hash-target to="class-alchemist-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-X">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-alchemist-ref-X-1" data-hash-target to="class-alchemist-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-Y">
<p>Advanced Race Guide pg. 196 <InnerLink id="backlink-class-alchemist-ref-Y-1" data-hash-target to="class-alchemist-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-Z">
<p>Advanced Race Guide pg. 139 <InnerLink id="backlink-class-alchemist-ref-Z-1" data-hash-target to="class-alchemist-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-1">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-alchemist-ref-1-1" data-hash-target to="class-alchemist-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-2">
<p>Advanced Race Guide pg. 204 <InnerLink id="backlink-class-alchemist-ref-2-1" data-hash-target to="class-alchemist-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-3">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-alchemist-ref-3-1" data-hash-target to="class-alchemist-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-4">
<p>Advanced Race Guide pg. 206 <InnerLink id="backlink-class-alchemist-ref-4-1" data-hash-target to="class-alchemist-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-5">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 21</Link> <InnerLink id="backlink-class-alchemist-ref-5-1" data-hash-target to="class-alchemist-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-alchemist-6">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-alchemist-ref-6-1" data-hash-target to="class-alchemist-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _antipaladin = {hasJL:true,title: "Antipaladin", jsx: <><div className="jumpList" id="class-antipaladin-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-antipaladin-code-of-conduct">Code of Conduct</InnerLink></li><li><InnerLink toTop to="class-antipaladin-aura-of-evil-ex">Evil and Good</InnerLink></li><li><InnerLink toTop to="class-antipaladin-unholy-resilience-su">Unholy Resilience</InnerLink></li><li><InnerLink toTop to="class-antipaladin-touch-of-corruption-su">Touch of Corruption</InnerLink></li><li><InnerLink toTop to="class-antipaladin-aura-of-cowardice-su">Aura of Cowardice</InnerLink></li><li><InnerLink toTop to="class-antipaladin-plague-bringer-ex">Plague Bringer</InnerLink></li><li><InnerLink toTop to="class-antipaladin-cruelty-su">Cruelty</InnerLink></li><li><InnerLink toTop to="class-antipaladin-channel-negative-energy-su">Channel Negative Energy</InnerLink></li><li><InnerLink toTop to="class-antipaladin-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-antipaladin-fiendish-boon-sp">Fiendish Boon</InnerLink></li><li><InnerLink toTop to="class-antipaladin-aura-of-despair-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-antipaladin-ex-antipaladins">Ex-Antipaladins</InnerLink></li><li><InnerLink toTop to="class-antipaladin-fall-from-grace">Fall from Grace</InnerLink></li><li><InnerLink toTop to="class-antipaladin-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-antipaladin-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-antipaladin-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-antipaladin-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-antipaladin-antipaladin">Antipaladin</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 118</Link></p>
<p>Although it is a rare occurrence, <Link to="/class/paladin">paladins</Link> do sometimes stray from the path of righteousness. Most of these wayward holy warriors seek out redemption and forgiveness for their misdeeds, regaining their powers through piety, charity, and powerful magic. Yet there are others, the dark and disturbed few, who turn actively to evil, courting the dark powers they once railed against in order to take vengeance on their former brothers. It's said that those who climb the farthest have the farthest to fall, and antipaladins are living proof of this fact, their pride and hatred blinding them to the glory of their forsaken patrons.</p>
<p>Antipaladins become the antithesis of their former selves. They make pacts with fiends, take the lives of the innocent, and put nothing ahead of their personal power and wealth. Champions of evil, they often lead armies of evil creatures and work with other villains to bring ruin to the holy and tyranny to the weak. Not surprisingly, paladins stop at nothing to put an end to such nefarious antiheroes.</p>
<p>The antipaladin is an alternate class. Making use of and altering numerous facets of the paladin core class, this villainous warrior can't truly be considered a new character class by its own right. By the changes made here, though, the details and tones of the paladin class are shifted in a completely opposite direction and captures an entirely different fantasy theme, without needlessly designing an entire new class. While a redesign of sorts, this alternate class can be used just as any of the other base classes.</p>
<p><strong>Role:</strong> Antipaladins are villains at their most dangerous. They care nothing for the lives of others and actively seek to bring death and destruction to ordered society. They rarely travel with those that they do not subjugate, unless as part of a ruse to bring ruin from within.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Chaotic evil</span><table className="basic alignment"><tbody><tr><td>LG</td><td>LN</td><td>LE</td></tr><tr><td>NG</td><td>N</td><td>NE</td></tr><tr><td>CG</td><td>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}>Paladin</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-antipaladin-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-antipaladin--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>+2</td>
<td>Aura of evil, detect good, smite good 1/day</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+3</td>
<td>Touch of corruption, unholy resilience</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>Aura of cowardice, cruelty, plague bringer</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Channel negative energy, smite good 2/day</td>
<td>0</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Fiendish boon</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Cruelty</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Smite good 3/day</td>
<td>1</td>
<td>0</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+6</td>
<td>Aura of despair</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+6</td>
<td>Cruelty</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Smite good 4/day</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Aura of vengeance</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Cruelty</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Smite good 5/day</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+9</td>
<td>Aura of sin</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+9</td>
<td>Cruelty</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Smite good 6/day</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Aura of depravity</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Cruelty</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Smite good 7/day</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+12</td>
<td>Unholy champion</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>Yes</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<p><strong className="hl" id="class-antipaladin-code-of-conduct" data-hash-target>Code of Conduct:</strong> An antipaladin must be of chaotic evil alignment and loses all class features except proficiencies if he willingly and altruistically commits good acts. This does not mean that an antipaladin cannot take actions someone else might qualify as good, only that such actions must always be in service of his own dark ends. An antipaladin's code requires that he place his own interests and desires above all else, as well as impose tyranny, take advantage whenever possible, and punish the good and just, provided such actions don't interfere with his goals.</p>
<p><strong className="hl">Associates:</strong> While he may adventure with evil or neutral allies, an antipaladin avoids working with good characters or with anyone who consistently attempts to do good deeds. Under exceptional circumstances, an antipaladin can ally with good associates, but only to defeat them from within and bring ruin to their ranks. An antipaladin does not need an <Link to="/spell/atonement">atonement</Link> spell during such an unusual alliance as long as his nefarious goals are met in the end - evil cares only about results. An antipaladin may accept only <Link to="/feat/leadership">henchmen, followers, or cohorts</Link> who are chaotic evil.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-aura-of-evil-ex" data-hash-target><div className="box">Aura of Evil (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The power of your aura of evil (see <Link to="/spell/detect_evil">detect evil</Link>) is equal to your antipaladin level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-detect-good-sp" data-hash-target><div className="box">Detect Good (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">At will, you can use <Link to="/spell/detect_good">detect good</Link>, as the spell.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You can concentrate on a single item or individual within 60 feet and determine if it is good, learning the strength of its aura as if having studied it for 3 rounds. While focusing on one individual or object, you do not <em>detect good</em> in any other object or individual within range.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-smite-good-su" data-hash-target><div className="box">Smite Good (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box"><p>You can call out to the dark powers to crush the forces of good, choosing one target within sight to smite. If you target a creature that is not good, the smite is wasted with no effect.</p>
<p>If your target is good, you add your Charisma bonus (if any) on your attack rolls and add your antipaladin level on all damage rolls made against the target of your smite. If the target of <em>smite good</em> is an <Link to="/type/outsider">outsider</Link> with the <Link to="/subtype/good">good</Link> subtype, a good-aligned <Link to="/type/dragon">dragon</Link>, or a good creature with levels of <Link to="/class/cleric">cleric</Link> or <Link to="/class/paladin">paladin</Link>, the bonus to damage on the first successful attack increases to 2 points of damage per antipaladin level. Regardless of the target, <em>smite good</em> attacks automatically bypass any DR the creature might possess.</p>
<p>In addition, while <em>smite good</em> is in effect, you gain a deflection bonus equal to your Charisma modifier (if any) to your AC against attacks made by the target of the smite.</p>
<p>The <em>smite good</em> effect remains until the target of the smite is dead or the next time you rest and regain your uses of this ability.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You can smite twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You can smite three times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can smite four times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can smite five times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can smite six times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You can smite seven times a day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-unholy-resilience-su" data-hash-target><div className="box">Unholy Resilience (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a bonus equal to your Charisma bonus (if any) on all saving throws.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-palm"><IonIcon icon="/icons/magic-palm.svg" color="secondary" /></Link><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-touch-of-corruption-su" data-hash-target><div className="box">Touch of Corruption (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Half your antipaladin level, plus your Cha modifier, times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box"><p>You surround your hand with a fiendish flame, causing terrible wounds to open on those you touch. As a touch attack, you can cause 1d6 points of damage for every two antipaladin levels you possess.</p>
<p>Alternatively, you can use this power to heal undead creatures, restoring 1d6 hit points for every two levels the you possess.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">No</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability is modified by any feat, spell, or effect that specifically works with the <Link to="/ability/lay_on_hands">lay on hands</Link> paladin class feature. For example, the <Link to="/feat/extra_lay_on_hands">Extra Lay On Hands</Link> feat grants an antipaladin 2 additional uses of the <em>touch of corruption</em> class feature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-aura-of-cowardice-su" data-hash-target><div className="box">Aura of Cowardice (Su)</div><div className="flavor">You radiate a palpably daunting aura.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">All enemies within 10 feet take a -4 penalty on saving throws against fear effects. Creatures that are normally immune to fear lose that immunity while within 10 feet of you. This ability functions only while you remain conscious, not if you are unconscious or dead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-plague-bringer-ex" data-hash-target><div className="box">Plague Bringer (Ex)</div><div className="flavor">The powers of darkness make an antipaladin a beacon of corruption and disease.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You do not take any damage or take any penalty from diseases. You can still contract diseases and spread them to others, but you're otherwise immune to their effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-cruelty-su" data-hash-target><div className="box">Cruelty (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>Select one cruelty from the list below. Once a cruelty is chosen, it can't be changed. Each cruelty adds an effect to your <em>touch of corruption</em> ability. Whenever you use <em>touch of corruption</em> to deal damage to one target, the target also receives the additional effect from one of the cruelties you possess. This choice is made when the touch is used. The target receives a Fortitude save to avoid this cruelty. If the save is successful, the target takes the damage as normal, but not the effects of the cruelty. The DC of this save is equal to 10 + <Link to="/misc/half">half</Link> your level + your Charisma modifier.</p>
<p>At 3rd level, you start with these cruelties.</p>
<ul>
<li><strong>Fatigued:</strong> The target is <Link to="/misc/fatigued">fatigued</Link>.</li>
<li><strong>Shaken:</strong> The target is <Link to="/misc/shaken">shaken</Link> for 1 round per level of the antipaladin.</li>
<li><strong>Sickened:</strong> The target is <Link to="/misc/sickened">sickened</Link> for 1 round per level of the antipaladin.</li>
</ul>
<p>At 6th level, you add the following cruelties to the list of those that can be selected.</p>
<ul>
<li><strong>Dazed:</strong> The target is <Link to="/misc/dazed">dazed</Link> for 1 round.</li>
<li><strong>Diseased:</strong> The target contracts a disease, as if the antipaladin had cast <Link to="/spell/contagion">contagion</Link>, using his antipaladin level as his caster level.</li>
<li><strong>Staggered:</strong> The target is <Link to="/misc/staggered">staggered</Link> for 1 round per two levels of the antipaladin.</li>
</ul>
<p>At 9th level, you add the following cruelties to the list of those that can be selected.</p>
<ul>
<li><strong>Cursed:</strong> The target is cursed, as if the antipaladin had cast <Link to="/spell/bestow_curse">bestow curse</Link>, using his antipaladin level as his caster level.</li>
<li><strong>Exhausted:</strong> The target is <Link to="/misc/exhausted">exhausted</Link>. The antipaladin must have the fatigue cruelty before selecting this cruelty.</li>
<li><strong>Frightened:</strong> The target is <Link to="/misc/frightened">frightened</Link> for 1 round per two levels of the antipaladin. The antipaladin must have the shaken cruelty before selecting this cruelty.</li>
<li><strong>Nauseated:</strong> The target is <Link to="/misc/nauseated">nauseated</Link> for 1 round per three levels of the antipaladin. The antipaladin must have the sickened cruelty before selecting this cruelty.</li>
<li><strong>Poisoned:</strong> The target is poisoned, as if the antipaladin had cast <Link to="/spell/poison">poison</Link>, using the antipaladin's level as the caster level.</li>
</ul>
<p>At 12th level, you add the following cruelties to the list of those that can be selected.</p>
<ul>
<li><strong>Blinded:</strong> The target is <Link to="/misc/blinded">blinded</Link> for 1 round per level of the antipaladin.</li>
<li><strong>Deafened:</strong> The target is <Link to="/misc/deafened">deafened</Link> for 1 round per level of the antipaladin.</li>
<li><strong>Paralyzed:</strong> The target is <Link to="/rule/paralyzed">paralyzed</Link> for 1 round.</li>
<li><strong>Stunned:</strong> The target is <Link to="/misc/stunned">stunned</Link> for 1 round per four levels of the antipaladin.</li>
</ul>
<p>These abilities are not cumulative. For example, a 12th-level antipaladin's touch of corruption ability deals 6d6 points of damage and might also cause the target to become fatigued, dazed, poisoned, <strong>or</strong> diseased.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You gain a second cruelty.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You gain a third cruelty.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain a fourth cruelty.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You gain a fifth cruelty.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You gain a sixth cruelty.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-channel-negative-energy-su" data-hash-target><div className="box">Channel Negative Energy (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You gain the supernatural ability to <Link to="/ability/channel_negative_energy">channel negative energy</Link> like a cleric. Using this ability consumes two uses of your <em>touch of corruption</em> ability. You use your level as your effective cleric level when channeling negative energy. This is a Charisma-based ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast a small number of divine spells which are drawn from the <Link to="/main/antipaladin_spell">antipaladin spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You must choose and prepare your spells in advance. Like other spellcasters, you can cast only a certain number of spells of each spell level per day. Your base daily spell allotment is the same as that of a paladin. In addition, you receive <Link to="/rule/bonus_spells">bonus spells per day</Link> if you have a high Charisma score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To prepare or cast a spell, you must have a Charisma score equal to at least 10 + the spell level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>You must spend 1 hour each day in quiet prayer and meditation to regain your daily allotment of spells. You may prepare and cast any spell on the antipaladin spell list, provided that you can cast spells of that level, but you must choose which spells to prepare during your daily meditation.</p>
<p>Through 3rd level, you have no caster level. At 4th level and higher, your caster level is equal to your antipaladin level - 3.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">When it is indicated that you get 0 spells per day of a given spell level, you gain only the bonus spells you would be entitled to based on your Charisma score for that spell level.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-fiendish-boon-sp" data-hash-target><div className="box">Fiendish Boon (Sp)</div><div className="flavor">You receive a boon from your dark patrons.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">This boon can take one of two forms. Once the form is chosen, it cannot be changed.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-weapon-bond" data-hash-target><div className="box">Weapon Bond</div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Choice</div></div><div className="abEnd"><div className="box"><p>The first type of bond allows you to enhance your weapon as a standard action by calling upon the aid of a fiendish spirit for 1 minute per antipaladin level. When called, the spirit causes the weapon to shed unholy light as a <Link to="/eq-misc/torch">torch</Link> and grants the weapon a +1 enhancement bonus.</p>
<p>For every three levels beyond 5th, the weapon gains another +1 enhancement bonus, to a maximum of +6 at 20th level. These bonuses can be added to the weapon, stacking with existing weapon bonuses to a maximum of +5, or they can be used to add any of the following weapon properties: <Link to="/magic-enh/anarchic">anarchic</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/speed">speed</Link>, <Link to="/magic-enh/unholy">unholy</Link>, <Link to="/magic-enh/vicious">vicious</Link>, <Link to="/magic-enh/vorpal">vorpal</Link>, and <Link to="/magic-enh/wounding">wounding</Link>. Adding these properties consumes an amount of bonus equal to the property's cost. These bonuses are added to any properties the weapon already has, but duplicate abilities do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. The bonus and properties granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again.</p>
<p>The fiendish spirit imparts no bonuses if the weapon is held by anyone other than you, but resumes giving bonuses if returned to you. These bonuses apply to only one end of a double weapon.</p>
<p>If a weapon bonded with a fiendish spirit is destroyed, you lose the use of this ability for 30 days, or until you gain a level, whichever comes first. During this 30-day period, you take a -1 penalty on attack and weapon damage rolls.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You can use this ability twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can use this ability three times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You can use this ability four times a day.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-fiendish-servant" data-hash-target><div className="box">Fiendish Servant</div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Choice</div></div><div className="abEnd"><div className="box"><p>The second type of bond allows you to gain the service of a fiendish servant. This functions as <Link to="/spell/summon_monster_iii">summon monster III</Link>, except the duration is permanent and you can only gain the service of a single creature and that creature must either have the <Link to="/subtype/chaotic">chaotic</Link> and <Link to="/subtype/evil">evil</Link> subtypes or it must be a <Link to="/template/fiendish">fiendish</Link> animal. Once selected, the choice is set, but it may be changed whenever you gain a level.</p>
<p>As a full-round action, you may magically call your servant to your side. This ability is the equivalent of a spell of a level equal to one-third your antipaladin level. The servant immediately appears adjacent to you.</p>
<p>Should your fiendish servant die or be banished, you may not summon another servant for 30 days or until you gain an antipaladin level, whichever comes first. During this 30-day period, you take a -1 penalty on attack and weapon damage rolls.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">This functions as <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You can use this ability twice a day, and it functions as <Link to="/spell/summon_monster_v">summon monster V</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">This functions as <Link to="/spell/summon_monster_vi">summon monster VI</Link>, and the servant gains the <Link to="/template/advanced">advanced</Link> template.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can use this ability three times a day, and it functions as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">This functions as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>, and the servant gains spell resistance equal to your level + 11.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You can use this ability four times a day, and it functions as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-aura-of-despair-su" data-hash-target><div className="box">Aura of Despair (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Enemies within 10 feet of you take a -2 penalty on all saving throws. This penalty does not stack with the penalty from <em>aura of cowardice.</em> This ability functions only while you are conscious, not if you're unconscious or dead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-aura-of-vengeance-su" data-hash-target><div className="box">Aura of Vengeance (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can expend two uses of your <em>smite good</em> ability to grant the ability to <em>smite good</em> to all allies within 10 feet, using your bonuses. Allies must use this <em>smite good</em> ability by the start of your next turn and the bonuses last for 1 minute. Good creatures gain no benefit from this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-aura-of-sin-su" data-hash-target><div className="box">Aura of Sin (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your weapons are treated as evil-aligned for the purposes of overcoming <Link to="/rule/damage_reduction">damage reduction</Link>. Any attack made against an enemy within 10 feet of you is treated as evil-aligned for the purposes of overcoming damage reduction. This ability functions only while you are conscious, not if you're unconscious or dead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-aura-of-depravity-su" data-hash-target><div className="box">Aura of Depravity (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain DR 5/good. Each enemy within 10 feet takes a -4 penalty on saving throws against compulsion effects. This ability functions only while you are conscious, not if you're unconscious or dead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-antipaladin-unholy-champion-su" data-hash-target><div className="box">Unholy Champion (Su)</div><div className="flavor">You become a conduit for the might of the dark powers.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your DR increases to 10/good. Whenever you use <em>smite good</em> and successfully strike a good outsider, the outsider is also subject to a <Link to="/spell/banishment">banishment</Link>, using your antipaladin level as the caster level (your weapon and unholy symbol automatically count as objects that the subject hates). After the <em>banishment</em> effect and the damage from the attack is resolved, the <em>smite</em> immediately ends. In addition, whenever you channel negative energy or use <em>touch of corruption</em> to damage a creature, you deal the maximum possible amount.</div></div></div></div>
<h3 id="class-antipaladin-ex-antipaladins" data-hash-target>Ex-Antipaladins</h3>
<p>A antipaladin who ceases to be chaotic evil, who willfully commits an good act, or who violates the code of conduct loses all antipaladin spells and class features (including the fiendish boon, but not weapon, armor, and shield proficiencies). He may not progress any further in levels as an antipaladin. He regains his abilities and advancement potential if he atones for his violations (see <Link to="/spell/atonement">atonement</Link>), as appropriate.</p>
<h3 id="class-antipaladin-fall-from-grace" data-hash-target>Fall from Grace</h3>
<p>Not all paladins that fall become antipaladins. In fact, the transformation is quite rare. Most paladins spend months or even years regaining their paladinhood, but they never stray so far from the path as to become irredeemable. Rarely, a paladin turns from the light and seeks instead to make a pact with the dark powers. Often this is through temptation or some sort of ruse, but once the deal is struck, the paladin finds himself on the path to damnation.</p>
<p>When such a fall occurs, the transformation can be swift. The paladin trades in all of his paladin levels for antipaladin levels on a 1-for-1 basis. This is usually a traumatic experience, involving a complex ritual that involves a living sacrifice and dark oaths made to foul powers (who sometimes send minions to bear witness). Once complete, the antipaladin emerges, ready to bring ruin to the world.</p>
<p>It should be noted that not all antipaladins are fallen heroes. Some warriors are trained from a young age to assume the mantle of antipaladin, forged through pain and trauma into exemplars of evil. These cruel warriors know nothing of compassion or loyalty, but they can teach a great deal about pain and suffering.</p>
<h3 id="class-antipaladin-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-antipaladin--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Tip of the Spear (Su)</td><td>At 20th level, the antipaladin tears through heroes and rival villains alike. The antipaladin gains three additional uses of smite good per day and can smite foes regardless of their alignment.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-antipaladin-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Drow:</strong> The antipaladin adds +1/4 to the number of cruelties he can inflict.<sup><InnerLink showBacklink="backlink-class-antipaladin-ref-A-1" id="class-antipaladin-ref-A-1" data-hash-target to="class-antipaladin-A">1</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/2 points of damage to the antipaladin's touch of corruption ability (whether using it to heal or harm).<sup><InnerLink showBacklink="backlink-class-antipaladin-ref-B-1" id="class-antipaladin-ref-B-1" data-hash-target to="class-antipaladin-B">2</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-antipaladin-ref-C-1" id="class-antipaladin-ref-C-1" data-hash-target to="class-antipaladin-C">3</InnerLink></sup></p>
</div>
<h3 id="class-antipaladin-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-antipaladin/blighted_myrmidon">Blighted Myrmidon</Link></p><p><strong>Modifies or Replaces:</strong> Smite Good; Fiendish Boon; 10th-level Smite Good use; Aura of Vengeance; 15th-level Cruelty; Unholy Champion</p><p>Blighted myrmidons carry the seed of rot in their black hearts and sap life from the natural world.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/dread_vanguard">Dread Vanguard</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Aura of Sin</p><p>Some antipaladins serve or ally themselves with villains who are bent on earthly conquest.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/fearmonger">Fearmonger</Link></p><p><strong>Modifies or Replaces:</strong> Touch of Corruption; Cruelty</p><p>The fearmonger wants to do more than cause pain, misery, and confusion. He wishes to spread fear among his foes and infect entire populations with it.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/insinuator">Insinuator</Link></p><p><strong>Modifies or Replaces:</strong> Code of Conduct; Aura of Evil; Detect Good; Smite Good; Touch of Corruption; Aura of Cowardice; Plague Bringer; Cruelty; Channel Negative Energy; Spells; Fiendish Boon; Aura of Despair; Aura of Vengeance; Aura of Sin; Aura of Depravity; Unholy Champion</p><p>Between the selfless nobility of paladins and the chaotic menace of antipaladins, there exists a path of dedicated self-interest.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/iron_tyrant">Iron Tyrant</Link></p><p><strong>Modifies or Replaces:</strong> Touch of Corruption; Cruelty; Channel Negative Energy; Fiendish Boon</p><p>Iron tyrants seek the strength to rule over domains as unfettered despots, and depend on their armor as protection against those they have not yet cowed.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/knight_of_the_sepulcher">Knight of the Sepulcher</Link></p><p><strong>Modifies or Replaces:</strong> Fiendish Boon; Aura of Despair; 10th-level Smite Good use; Aura of Vengeance; Aura of Sin; Cruelty; Aura of Depravity; Unholy Champion</p><p>Not content with the antipaladin's mere corruption of the soul, the knight of the sepulcher sacrifices mortality along with morality.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/rough_rampager">Rough Rampager</Link></p><p><strong>Modifies or Replaces:</strong> Aura of Cowardice; Aura of Despair; Aura of Sin</p><p>Rough rampagers venerate Rovagug, reveling in the destruction the dark god represents.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/seal_breaker">Seal-Breaker</Link></p><p><strong>Modifies or Replaces:</strong> Aura of Cowardice; Fiendish Boon; Aura of Despair; Aura of Vengeance</p><p>Seal-breakers are dedicated to the Whispering Tyrant and have tasked themselves with finding and destroying the seals that bind him within Gallowspire.</p></div>
<div className="archetype"><p><Link to="/arc-antipaladin/tyrant">Tyrant</Link></p><p><strong>Modifies or Replaces:</strong> Code of Conduct; Class Skills; Fiendish Boon</p><p>Tyrants are manipulative and lawful antipaladins, chess masters who arrange things behind the scenes to ensure that whatever happens, evil always wins, and the tyrant along with it.</p></div>
<h3 id="class-antipaladin-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"antipaladin archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Aura of Cowardice"},{"header":"Aura of Depravity"},{"header":"Aura of Despair"},{"header":"Aura of Evil"},{"header":"Aura of Sin"},{"header":"Aura of Vengeance"},{"header":"Channel Negative Energy"},{"header":"Class Skills"},{"header":"Code of Conduct"},{"header":"Cruelty"},{"header":"15th-level Cruelty"},{"header":"Detect Good"},{"header":"Fiendish Boon"},{"header":"Plague Bringer"},{"header":"Smite Good"},{"header":"10th-level Smite Good use"},{"header":"Spellcasting"},{"header":"Touch of Corruption"},{"header":"Unholy Champion"}],"data":[["‹arc-antipaladin/Blighted Myrmidon›",null,null,null,null,null,"X",null,null,null,null,"X",null,"X",null,"X","X",null,null,"X"],["‹arc-antipaladin/Dread Vanguard›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-antipaladin/Fearmonger›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-antipaladin/Insinuator›","X","X","X","X","X","X","X",null,"X","X",null,"X","X","X","X",null,"X","X","X"],["‹arc-antipaladin/Iron Tyrant›",null,null,null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-antipaladin/Knight of the Sepulcher›",null,"X","X",null,"X","X",null,null,null,"X",null,null,"X",null,null,"X",null,null,"X"],["‹arc-antipaladin/Rough Rampager›","X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-antipaladin/Seal-Breaker›","X",null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-antipaladin/Tyrant›",null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-antipaladin-label">Footnotes</h3>
<ol>
<li id="class-antipaladin-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 103</Link> <InnerLink id="backlink-class-antipaladin-ref-A-1" data-hash-target to="class-antipaladin-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-antipaladin-B">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-antipaladin-ref-B-1" data-hash-target to="class-antipaladin-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-antipaladin-C">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-antipaladin-ref-C-1" data-hash-target to="class-antipaladin-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _arcanist = {hasJL:true,title: "Arcanist", jsx: <><div className="jumpList" id="class-arcanist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-arcanist-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-arcanist-arcane-reservoir-su">Arcane Reservoir</InnerLink></li><li><InnerLink toTop to="class-arcanist-arcanist-exploits">Arcanist Exploits</InnerLink></li><li><InnerLink toTop to="class-arcanist-consume-spells-su">Consume Spells</InnerLink></li><li><InnerLink toTop to="class-arcanist-greater-exploits">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-arcanist-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-arcanist-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-arcanist-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-arcanist-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-arcanist-arcanist">Arcanist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 8</Link></p>
<p>Some spellcasters seek the secrets of magic, pursuing the power to make the impossible possible. Others are born with magic in their blood, commanding unbelievable forces as effortlessly as they breathe. Yet still others seek to meld the science of arcane scholars with the natural might of innate casters. These arcanists seek to discover the mysterious laws of magic and through will and expertise bend those forces to their whims. Arcanists are the shapers and tinkers of the arcane world, and no magic can resist their control.</p>
<p><strong>Role:</strong> Arcanists are scholars of all things magical. They constantly seek out new forms of magic to discover how they work, and in many cases, to collect the energy of such magic for their own uses. Many arcanists are seen as reckless, more concerned with the potency of magic than the ramifications of unleashing such power.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d6</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/sorcerer">Sorcerer</Link> and <Link to="/class/wizard">wizard</Link></td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-arcanist-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-arcanist--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Arcane reservoir, arcanist exploit, cantrips, consume spells</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>-</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+1</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+4</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Arcanist exploit, greater exploits</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+7/+2</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Arcanist exploit</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>20th</td>
<td>+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Magical supremacy</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-arcanist-spells-prepared">Spells Prepared</h3>
<ScrollContainer id="class-arcanist--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>7</td>
<td>4</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>7</td>
<td>5</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>8</td>
<td>5</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>8</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>9</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>19th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>No</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">Armor interferes with your gestures, which can cause your spells with somatic components to fail (see <Link to="/rule/arcane_spells_and_armor">Arcane Spells and Armor</Link>).</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You cast arcane spells drawn from the <Link to="/main/spells_arcanist">sorcerer/wizard</Link> spell list. You must prepare your spells ahead of time, but unlike a wizard, your spells are not expended when they're cast. Instead, you can cast any spell that you have prepared consuming a spell slot of the appropriate level, assuming you haven't yet used up your spell slots per day for that level. In addition, you receive <Link to="/rule/bonus_spells">bonus spells per day</Link> if you have a high Intelligence score. The DC for a saving throw against spells you cast is 10 + the spell level + your Intelligence modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To learn, prepare, or cast a spell, you must have an Intelligence score equal to at least 10 + the spell level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>You may know any number of spells, but the number you can prepare each day is limited. At 1st level, you can prepare four 0-level spells and two 1st-level spells each day. At each new arcanist level, the number of spells you can prepare each day increases. Unlike the number of spells you can cast per day, the number of spells you can prepare each day is not affected by your Intelligence score. Feats and other effects that modify the number of spells known by a spellcaster instead affect the number of spells you can prepare.</p>
<p>You must choose and prepare your spells ahead of time by getting 8 hours of sleep and spending 1 hour studying your spellbook. While studying, you decide what spells to prepare and refresh your available spell slots for the day.</p>
<p>Like a sorcerer, you can choose to apply any <Link to="/main/metamagic_feat">metamagic feats</Link> you know to a prepared spell as you cast it, with the same increase in casting time. However, you may also prepare a spell with any metamagic feats you know and cast it without increasing casting time like a wizard. You cannot combine these options - a spell prepared with metamagic feats cannot be further modified with another metamagic feat at the time of casting (unless you have the <Link to="/exploit/metamixing">metamixing</Link> arcanist exploit).</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-cantrips" data-hash-target><div className="box">Cantrips</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can prepare a number of cantrips, or 0-level arcane spells, each day. These spells are cast like any other spell, but they do not consume spell slots. As with your other spells, these spells are not expended when cast.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-spellbooks" data-hash-target><div className="box">Spellbooks</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You must study your spellbook each day to prepare your spells. You can't prepare any spell not recorded in your spellbook, except for <Link to="/spell/read_magic">read magic</Link> (which all arcanists can prepare from memory).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You begin play with a spellbook containing all 0-level arcanist spells plus three 1st-level spells of your choice. You also select a number of additional 1st-level spells equal to your Intelligence modifier to add to the spellbook. At each new arcanist level, you gain two new spells of any spell level or levels that you can cast (based on your new arcanist level) for your spellbook. At any time, you can also add spells found in wizards' or other arcanists' spellbooks to your own (see <Link to="/rule/arcane_magical_writing">Arcane Magical Writing</Link>).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-arcane-reservoir-su" data-hash-target><div className="box">Arcane Reservoir (Su)</div><div className="flavor">You have an innate pool of magical energy that you can draw upon to fuel many of your powers.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You have an arcane reservoir that can hold a maximum amount of magical energy equal to 3 + your arcanist level. Each day, when preparing spells, your arcane reservoir fills with raw magical energy, gaining a number of points equal to 3 + <Link to="/misc/half">half</Link> your arcanist level. Any points you had from the previous day are lost. You can also regain these points through the <em>consume spells</em> class feature and some arcanist exploits. The arcane reservoir can never hold more points than the maximum amount noted above; points gained in excess of this total are lost.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can expend 1 point from your arcane reservoir whenever you cast an arcanist spell. If you do, you can choose to increase the caster level by 1 or increase the spell's DC by 1. You can expend no more than 1 point from your reservoir on a given spell in this way.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-arcanist-exploits" data-hash-target><div className="box">Arcanist Exploits</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn one arcanist exploit. By bending and sometimes even breaking the rules of magic, you learn to exploit gaps and exceptions in the laws of magic. Some of these <Link to="/ability/exploits">exploits</Link> allow you to break down various forms of magic, adding their essence to your arcane reservoir.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit (or <em>greater exploit,</em> explained below).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit. (or <em>greater exploit</em>)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit. (or <em>greater exploit</em>)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit. (or <em>greater exploit</em>)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You learn a new arcane exploit. (or <em>greater exploit</em>)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">An arcanist exploit cannot be selected more than once. Once an arcanist exploit has been selected, it cannot be changed. Most arcanist exploits require you to expend points from your arcane reservoir to function. Unless otherwise noted, the saving throw DC for an arcanist exploit is equal to 10 + 1/2 your level + your Charisma modifier.</div></div></div></div>
<aside><p>There are also more dangerous <Link to="/ability/outer_rifts_exploits">Outer Rifts exploits</Link> to choose from.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-consume-spells-su" data-hash-target><div className="box">Consume Spells (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You can expend an available arcanist spell slot, making it unavailable for the rest of the day, just as if you had used it to cast a spell. Doing this adds a number of points to your arcane reservoir equal to the level of the spell slot consumed. You cannot consume cantrips (0 level spells) in this way. Points gained in excess of the reservoir's maximum are lost.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-greater-exploits" data-hash-target><div className="box">Greater Exploits</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can now choose a <Link to="/ability/greater_exploits">greater exploit</Link> when you gain a a new arcanist exploit (described above).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-arcanist-magical-supremacy-su" data-hash-target><div className="box">Magical Supremacy (Su)</div><div className="flavor">You learn how to convert your arcane reservoir into spells and back again.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can cast any spell you have prepared by expending a number of points from your arcane reservoir equal to 1 + the level of the spell to be cast instead of expending a spell slot. When you cast a spell in this fashion, you treat your caster level as 2 higher than normal, and the DCs of any saving throws associated with the spell increase by 2. You cannot further expend points from your arcane reservoir to enhance a spell cast in this way.</div></div></div></div>
<h3 id="class-arcanist-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-arcanist--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Deep Reservoir (Su)</td><td>At 20th level, the arcanist has enough power to blast things all day long. Her arcane reservoir increases by 10, and she gains 5 additional points each day when preparing her spells.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Walking Library (Ex)</td><td>At 20th level, the character becomes a small, mobile athenaeum of occult scraps and lore. The character adds 100 spell levels' worth of spells to his spellbook or familiar and gains a +4 insight bonus on all Knowledge skills. Characters of any class that prepares spells from a spellbook or familiar can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-arcanist-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Aquatic elf:</strong> Add 1/4 to the arcanist's caster level when casting spells with the water descriptor.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-A-1" id="class-arcanist-ref-A-1" data-hash-target to="class-arcanist-A">1</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/4 to the arcanist's caster level when casting spells of the necromancy school.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-B-1" id="class-arcanist-ref-B-1" data-hash-target to="class-arcanist-B">2</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add 1/4 to the arcanist's effective class level when determining the effects of the arcane barrier and arcane weapon arcanist exploits.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-C-1" id="class-arcanist-ref-C-1" data-hash-target to="class-arcanist-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase total number of points in the arcanist's arcane reservoir by 1.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-C-2" id="class-arcanist-ref-C-2" data-hash-target to="class-arcanist-C">3</InnerLink></sup></p>
<p><strong>Fetchling:</strong> When the arcanist casts an illusion (shadow) spell that deals a percentage of its damage or effect against nonbelievers, increase this amount by 2% (to a maximum of 100%).<sup><InnerLink showBacklink="backlink-class-arcanist-ref-D-1" id="class-arcanist-ref-D-1" data-hash-target to="class-arcanist-D">4</InnerLink></sup></p>
<p><strong>Ganzi:</strong> Add 1/2 to the arcanist's effective caster level when casting spells with the chaotic descriptor.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-E-1" id="class-arcanist-ref-E-1" data-hash-target to="class-arcanist-E">5</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add 1/6 to the number of points the arcanist gains in her arcane reservoir each day.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-F-1" id="class-arcanist-ref-F-1" data-hash-target to="class-arcanist-F">6</InnerLink></sup></p>
<p><strong>Half-elf:</strong> When casting arcanist enchantment spells, add 1/3 to the effective caster level, but only for the purpose of determining duration.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-F-2" id="class-arcanist-ref-F-2" data-hash-target to="class-arcanist-F">6</InnerLink></sup></p>
<p><strong>Halfling:</strong> Gain 1/6 of a new arcanist exploit.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-F-3" id="class-arcanist-ref-F-3" data-hash-target to="class-arcanist-F">6</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1 bonus on <Link to="/rule/concentration">concentration</Link> checks made due to taking damage while casting arcanist spells.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-G-1" id="class-arcanist-ref-G-1" data-hash-target to="class-arcanist-G">7</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell from the arcanist spell list to the arcanist's spellbook. The spell must be at least 1 spell level below the highest level the arcanist can cast.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-G-2" id="class-arcanist-ref-G-2" data-hash-target to="class-arcanist-G">7</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-H-1" id="class-arcanist-ref-H-1" data-hash-target to="class-arcanist-H">8</InnerLink></sup></p>
<p><strong>Kitsune:</strong> When casting arcanist enchantment spells, add 1/3 to the effective caster level, but only for the purpose of determining duration.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-H-2" id="class-arcanist-ref-H-2" data-hash-target to="class-arcanist-H">8</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add 1/3 to the number of times per day the arcanist can use the consume magic items exploit.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-I-1" id="class-arcanist-ref-I-1" data-hash-target to="class-arcanist-I">9</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add 1/4 to the arcanist's effective class level when determining the effects of any two arcanist exploits that the arcanist has.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-J-1" id="class-arcanist-ref-J-1" data-hash-target to="class-arcanist-J">10</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> Add 1/4 to the arcanist's level for the spell resistance exploit.<sup><InnerLink showBacklink="backlink-class-arcanist-ref-K-1" id="class-arcanist-ref-K-1" data-hash-target to="class-arcanist-K">11</InnerLink></sup></p>
</div>
<h3 id="class-arcanist-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-arcanist/aeromancer">Aeromancer</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 5th, 11th-level Arcanist Exploit</p><p>While the practice of aeromancy is rare, some arcanists today are able to rival the aerial mastery of the ancient Shory aeromancers.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/arcane_tinkerer">Arcane Tinkerer</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 5th, 11th-level Arcanist Exploit</p><p>Arcane tinkerers use their knowledge and understanding of magic to disrupt or even destroy constructs</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/blade_adept">Blade Adept</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 3rd, and 9th-level Arcanist Exploits</p><p>A small number of arcanists learn to use blades as part of their spellcasting and in combat.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/blood_arcanist">Blood Arcanist</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 3rd, 9th, and 15th-level Arcanist Exploits; Magical Supremacy</p><p>Though most arcanists possess only a rudimentary innate arcane gift, the blood arcanist has the full power of a bloodline to draw upon.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/brown_fur_transmuter">Brown-Fur Transmuter</Link></p><p><strong>Modifies or Replaces:</strong> 3rd and 9th-level Arcanist Exploits; Magical Supremacy</p><p>Frequently called "brown-furs," these transmutation-focused arcanists are known for transforming themselves into animals.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/eldritch_font">Eldritch Font</Link></p><p><strong>Modifies or Replaces:</strong> 3rd, 7th, and 13th-level Arcanist Exploits; Magical Supremacy</p><p>For some arcanists, the power bubbling up from within is nearly too much to contain.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/elemental_master">Elemental Master</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 3rd, 9th, 11th, and 15th-level Arcanist Exploits</p><p>Arcanists with an affinity for elemental forces sometimes focus on one and display its power in everything they do.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/harrowed_society_student">Harrowed Society Student</Link></p><p><strong>Modifies or Replaces:</strong> 1st and 9th-level Arcanist Exploits; Consume Spells</p><p>Based out of Varisia's Twilight Academy, the secretive Harrowed Society focuses its efforts on the intellectual study of the region's supernatural quirks and hidden history, and embraces the use of the harrow deck to examine the world's occult mysteries.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/magaambyan_initiate">Magaambyan Initiate</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; 1st, 5th, 9th, 17th-level Arcanist Exploit</p><p>Aspiring students of the Magaambya often spend decades researching arcane magic while learning to follow in the footsteps of the academy's founder, Old-Mage Jatembe.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/occultist">Occultist</Link></p><p><strong>Modifies or Replaces:</strong> 1st and 7th-level Arcanist Exploits; Magical Supremacy</p><p>Not all arcanists peer inward to discern the deepest secrets of magic. Some look outward, connecting with extraplanar creatures and bartering for secrets, power, and favor.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/school_savant">School Savant</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 3rd, and 7th-level Arcanist Exploits</p><p>Some arcanists specialize in a school of magic and trade flexibility for focus.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/spell_specialist">Spell Specialist</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 7th, 13th, and 19th-level Arcanist Exploits</p><p>Where most arcanists are broad in their study of magic, a spell specialist has her power focused in a few spells.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/twilight_sage">Twilight Sage</Link></p><p><strong>Modifies or Replaces:</strong> Consume Spells; Spells; 1st and 11th-level Arcanist Exploits; Magical Supremacy</p><p>The twilight sages of Geb carry out experiments to solve the ultimate puzzle and unlock the secrets of life and death. While the twilight sages generally aren't actively malicious, most are willing to perform human experimentation in pursuit of knowledge with little regard for the casualties.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/unlettered_arcanist">Unlettered Arcanist</Link></p><p><strong>Modifies or Replaces:</strong> Spellbooks; Spells</p><p>Some arcanists store their spells as whispered secrets within familiars instead of on paper.</p></div>
<div className="archetype"><p><Link to="/arc-arcanist/white_mage">White Mage</Link></p><p><strong>Modifies or Replaces:</strong> 1st and 9th-level Arcanist Exploits</p><p>A white mage is an arcanist touched by a divine power and gifted with the ability to heal others.</p></div>
<h3 id="class-arcanist-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"arcanist archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"1st-level Arcanist Exploit"},{"header":"3rd-level Arcanist Exploit"},{"header":"5th-level Arcanist Exploit"},{"header":"7th-level Arcanist Exploit"},{"header":"9th-level Arcanist Exploit"},{"header":"11th-level Arcanist Exploit"},{"header":"13th-level Arcanist Exploit"},{"header":"15th-level Arcanist Exploit"},{"header":"17th-level Arcanist Exploit"},{"header":"19th-level Arcanist Exploit"},{"header":"Consume Spells"},{"header":"Magical Supremacy"},{"header":"Spellbooks"},{"header":"Spellcasting"}],"data":[["‹arc-arcanist/Aeromancer›",null,"X",null,"X",null,null,"X",null,null,null,null,null,null,null,null],["‹arc-arcanist/Arcane Tinkerer›",null,"X",null,"X",null,null,"X",null,null,null,null,null,null,null,null],["‹arc-arcanist/Blade Adept›",null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-arcanist/Blood Arcanist›",null,"X","X",null,null,"X",null,null,"X",null,null,null,"X",null,null],["‹arc-arcanist/Brown-Fur Transmuter›",null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null],["‹arc-arcanist/Eldritch Font›",null,null,"X",null,"X",null,null,"X",null,null,null,null,"X",null,null],["‹arc-arcanist/Elemental Master›",null,"X","X",null,null,"X","X",null,"X",null,null,null,null,null,null],["‹arc-arcanist/Harrowed Society Student›",null,"X",null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-arcanist/Magaambyan Initiate›","X","X",null,"X",null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-arcanist/Occultist›",null,"X",null,null,"X",null,null,null,null,null,null,null,"X",null,null],["‹arc-arcanist/School Savant›",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-arcanist/Spell Specialist›",null,"X",null,null,"X",null,null,"X",null,null,"X",null,null,null,null],["‹arc-arcanist/Twilight Sage›",null,"X",null,null,null,null,"X",null,null,null,null,"X","X",null,"X"],["‹arc-arcanist/Unlettered Arcanist›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X"],["‹arc-arcanist/White Mage›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-arcanist-label">Footnotes</h3>
<ol>
<li id="class-arcanist-A">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-arcanist-ref-A-1" data-hash-target to="class-arcanist-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-arcanist-B">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-arcanist-ref-B-1" data-hash-target to="class-arcanist-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-arcanist-C">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-arcanist-ref-C-1" data-hash-target to="class-arcanist-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-arcanist-ref-C-2" data-hash-target to="class-arcanist-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-arcanist-D">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-arcanist-ref-D-1" data-hash-target to="class-arcanist-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-arcanist-E">
<p>Plane-Hopper's Handbook pg. 19 <InnerLink id="backlink-class-arcanist-ref-E-1" data-hash-target to="class-arcanist-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-arcanist-F">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-arcanist-ref-F-1" data-hash-target to="class-arcanist-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink> <InnerLink id="backlink-class-arcanist-ref-F-2" data-hash-target to="class-arcanist-ref-F-2" aria-label="Back to reference F-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-arcanist-ref-F-3" data-hash-target to="class-arcanist-ref-F-3" aria-label="Back to reference F-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="class-arcanist-G">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-arcanist-ref-G-1" data-hash-target to="class-arcanist-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink> <InnerLink id="backlink-class-arcanist-ref-G-2" data-hash-target to="class-arcanist-ref-G-2" aria-label="Back to reference G-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-arcanist-H">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-arcanist-ref-H-1" data-hash-target to="class-arcanist-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink> <InnerLink id="backlink-class-arcanist-ref-H-2" data-hash-target to="class-arcanist-ref-H-2" aria-label="Back to reference H-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-arcanist-I">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-arcanist-ref-I-1" data-hash-target to="class-arcanist-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-arcanist-J">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-arcanist-ref-J-1" data-hash-target to="class-arcanist-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-arcanist-K">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-arcanist-ref-K-1" data-hash-target to="class-arcanist-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _bard = {hasJL:true,title: "Bard", jsx: <><div className="jumpList" id="class-bard-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-bard-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-bard-bardic-knowledge-ex">Bardic Knowledge</InnerLink></li><li><InnerLink toTop to="class-bard-bardic-performance">Bardic Performance</InnerLink></li><li><InnerLink toTop to="class-bard-bardic-masterpieces">Bardic Masterpieces</InnerLink></li><li><InnerLink toTop to="class-bard-versatile-performance-ex">Versatile Performance</InnerLink></li><li><InnerLink toTop to="class-bard-well-versed-ex">Well-Versed</InnerLink></li><li><InnerLink toTop to="class-bard-lore-master-ex">Lore Master</InnerLink></li><li><InnerLink toTop to="class-bard-jack-of-all-trades-ex">Jack-of-All-Trades</InnerLink></li><li><InnerLink toTop to="class-bard-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-bard-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-bard-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-bard-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-bard-bard">Bard</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 34</Link></p>
<p>Untold wonders and secrets exist for those skillful enough to discover them. Through cleverness, talent, and magic, these cunning few unravel the wiles of the world, becoming adept in the arts of persuasion, manipulation, and inspiration. Typically masters of one or many forms of artistry, bards possess an uncanny ability to know more than they should and use what they learn to keep themselves and their allies ever one step ahead of danger. Bards are quick-witted and captivating, and their skills might lead them down many paths, be they gamblers or jacks-of-all-trades, scholars or performers, leaders or scoundrels, or even all of the above. For bards, every day brings its own opportunities, adventures, and challenges, and only by bucking the odds, knowing the most, and being the best might they claim the treasures of each.</p>
<p><strong>Role:</strong> Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-bard-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-bard--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>+2</td>
<td>Bardic knowledge, bardic performance, cantrips, countersong, distraction, fascinate, inspire courage +1</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+3</td>
<td>+3</td>
<td>Versatile performance, well-versed</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>Inspire competence +2</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+4</td>
<td>-</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+4</td>
<td>Inspire courage +2, lore master 1/day</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+2</td>
<td>+5</td>
<td>+5</td>
<td>Suggestion, Versatile performance</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>+5</td>
<td>Inspire competence +3</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+6</td>
<td>+6</td>
<td>Dirge of doom</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+6</td>
<td>+6</td>
<td>Inspire greatness</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+7</td>
<td>+7</td>
<td>Jack-of-all-trades, Versatile performance</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+7</td>
<td>+7</td>
<td>Inspire competence +4, inspire courage +3, lore master 2/day</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+8</td>
<td>Soothing performance</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+8</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+4</td>
<td>+9</td>
<td>+9</td>
<td>Frightening tune, Versatile performance</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+9</td>
<td>+9</td>
<td>Inspire competence +5, inspire heroics</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+10</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+10</td>
<td>Inspire courage +4, lore master 3/day</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+6</td>
<td>+11</td>
<td>+11</td>
<td>Mass suggestion, Versatile performance</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+11</td>
<td>+11</td>
<td>Inspire competence +6</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+12</td>
<td>+12</td>
<td>Deadly performance</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-bard-spells-known">Spells Known</h3>
<ScrollContainer id="class-bard--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={4}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/longsword">longsword</Link></td><td><Link to="/eq-weapon/rapier">rapier</Link></td></tr><tr><td><Link to="/eq-weapon/sap">sap</Link></td><td><Link to="/eq-weapon/short_sword">short sword</Link></td></tr><tr><td><Link to="/eq-weapon/shortbow">shortbow</Link></td><td><Link to="/eq-weapon/whip">whip</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><td colSpan={3} className="sw se">You can cast bard spells while wearing light armor and use a shield without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, wearing medium or heavy armor incurs a chance of arcane spell failure if the spell in question has a somatic component. A multiclass bard still incurs the normal arcane spell failure chance for arcane spells received from other classes.</td></tr></tbody></table>
<div className="ability"><div className="abIcon"><Link to="/icons"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To learn or cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_bard">bard spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</div></div></div><div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>A bard's selection of spells is extremely limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new bard level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level bard spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></div></div></div><div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Every bard spell has a verbal component (song, recitation, or music).</div></div></div></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-cantrips" data-hash-target><div className="box">Cantrips</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of cantrips, or 0-level arcane spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Cantrips cast using other spell slots, such as those due to metamagic feats, consume slots normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-bardic-knowledge-ex" data-hash-target><div className="box">Bardic Knowledge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add <Link to="/misc/half">half</Link> your class level (minimum 1) to all Knowledge skill checks and may make all Knowledge skill checks untrained.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-bardic-performance" data-hash-target><div className="box">Bardic Performance</div><div className="flavor">You are trained to use the Perform skill to create magical effects on those around you, including yourself if desired.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">2 + twice your bard level + your Cha modifier rounds/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box"><p>Each round, you can produce any one of the types of bardic performance that you have mastered, as indicated by your level.</p>
<p>Starting a bardic performance is a <strong className="hl">standard action</strong>, but it can be maintained each round as a <strong className="hl">free action</strong>. Changing a bardic performance from one effect to another requires you to stop the previous performance and start a new one as a standard action. A bardic performance cannot be disrupted, but it ends immediately if you are killed, <Link to="/rule/paralyzed">paralyzed</Link>, <Link to="/misc/stunned">stunned</Link>, knocked <Link to="/misc/unconscious">unconscious</Link>, or otherwise prevented from taking a free action to maintain it each round. You cannot have more than one bardic performance in effect at one time.</p>
<p>Each bardic performance has audible components, visual components, or both.</p>
<p>If a bardic performance has audible components, the targets must be able to hear the bard for the performance to have any effect, and many such performances are language dependent (as noted in the description. A deaf bard has a 20% chance to fail when attempting to use a bardic performance with an audible component. If he fails this check, the attempt still counts against his daily limit. Deaf creatures are immune to bardic performances with audible components.</p>
<p>If a bardic performance has a visual component, the targets must have line of sight to the bard for the performance to have any effect. A blind bard has a 50% chance to fail when attempting to use a bardic performance with a visual component. If he fails this check, the attempt still counts against his daily limit. Blind creatures are immune to bardic performances with visual components.</p>
<p>Bardic performances are <Link to="/ability/bardic_performances">collected here</Link>.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You can begin a performance as a move-equivalent action.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can begin a performance as a swift action.</div></div></div></div>
<aside><p><strong className="hl" id="class-bard-bardic-masterpieces" data-hash-target>Bardic Masterpieces:</strong> Talented bards can learn or create <Link to="/ability/bardic_masterpieces">masterpieces</Link>, unusual applications of the bardic performance ability requiring special training. Each masterpiece has an associated cost to learn it. Typically, a bard must spend one of his bard spells known of a specific spell level or select it in place of a feat.</p>
<p>Also, a bard may learn <Link to="/ability/sagas">saga</Link>, which are useable with his bardic performance ability.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-versatile-performance-ex" data-hash-target><div className="box">Versatile Performance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Choice</div></div><div className="abEnd"><div className="box"><p>You can choose one type of Perform skill, using your bonus in that skill in place of your bonus in associated skills. When substituting in this way, you use your total Perform skill bonus, including class skill bonus, in place of its associated skill's bonus, whether or not you have ranks in that skill or if it is a class skill.</p>
<p>The types of Perform and their associated skills are:</p>
<ul>
<li><strong className="hl">Act:</strong> Bluff, Disguise</li>
<li><strong className="hl">Comedy:</strong> Bluff, Intimidate</li>
<li><strong className="hl">Dance:</strong> Acrobatics, Fly</li>
<li><strong className="hl">Keyboard Instruments:</strong> Diplomacy, Intimidate</li>
<li><strong className="hl">Oratory:</strong> Diplomacy, Sense Motive</li>
<li><strong className="hl">Percussion:</strong> Handle Animal, Intimidate</li>
<li><strong className="hl">Sing:</strong> Bluff, Sense Motive</li>
<li><strong className="hl">String:</strong> Bluff, Diplomacy</li>
<li><strong className="hl">Wind:</strong> Diplomacy, Handle Animal</li>
</ul>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You can select an additional type of Perform to substitute.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can select an additional type of Perform to substitute.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You can select an additional type of Perform to substitute.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You can select an additional type of Perform to substitute.</div></div></div></div>
<aside><p>Beginning at 6th level, instead of selecting an additional skill with versatile performance, a bard can choose an <Link to="/ability/advanced_versatile_performances">advanced versatile performance</Link> for one Perform skill he previously selected with versatile performance. Some advanced versatile performance options can be selected only if the bard meets the option's prerequisites. A bard with an archetype that replaces versatile performance cannot select advanced versatile performance options.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-well-versed-ex" data-hash-target><div className="box">Well-Versed (Ex)</div><div className="flavor">You become resistant to the bardic performance of others, and to sonic effects in general.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +4 bonus on saving throws made against bardic performance, sonic, and language-dependent effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-lore-master-ex" data-hash-target><div className="box">Lore Master (Ex)</div><div className="flavor">You become a master of lore.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can take 10 on any Knowledge skill check that you have ranks in even when threatened or distracted. You can also choose not to take 10 and can instead roll normally.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can take 20 on any Knowledge skill check.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You can Take 20 twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You can Take 20 three times a day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/skills"><IonIcon icon="/icons/skills.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bard-jack-of-all-trades-ex" data-hash-target><div className="box">Jack-of-All-Trades (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can use any skill, even if the skill normally requires you to be trained.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You consider all skills to be class skills.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You can take 10 on any skill check, even if it is not normally allowed.</div></div></div></div>
<h3 id="class-bard-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-bard--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Adoring Fan (Su)</td><td>At 20th level, the bard can use his performance to convert even the toughest audience. To be affected, a target must be able to see and hear the bard perform for 1 full round and be within 30 feet. The target can attempt a Will save (DC = 10 + half the bard's level + the bard's Charisma modifier) to negate the effect. If a creature succeeds at the saving throw, the bard cannot use this ability on that creature again for 24 hours. On a failure, the creature is dominated (as <Link to="/spell/dominate_monster">dominate monster</Link>) for as long as the bard keeps playing and is charmed (as <Link to="/spell/charm_monster">charm monster</Link>) for 1d4 hours thereafter. Adoring fan is a mind-affecting, compulsion effect that relies on audible and visual components.</td></tr>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-bard-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Choose one bardic performance; treat the bard as +1/6 level higher when determining the effects of that performance.<sup><InnerLink showBacklink="backlink-class-bard-ref-A-1" id="class-bard-ref-A-1" data-hash-target to="class-bard-A">1</InnerLink></sup></p>
<p><strong>Boggard:</strong> Reduce the amount of time the bard must wait before using his terrifying croak ability by 5 minutes (minimum 5 minutes).<sup><InnerLink showBacklink="backlink-class-bard-ref-B-1" id="class-bard-ref-B-1" data-hash-target to="class-bard-B">2</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add +1/2 to the bard's bardic knowledge bonus.<sup><InnerLink showBacklink="backlink-class-bard-ref-C-1" id="class-bard-ref-C-1" data-hash-target to="class-bard-C">3</InnerLink></sup></p>
<p><strong>Drow:</strong> Add +1/2 to Bluff and Disguise checks to appear as an elf or half-elf.<sup><InnerLink showBacklink="backlink-class-bard-ref-D-1" id="class-bard-ref-D-1" data-hash-target to="class-bard-D">4</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/2 to the bard's bardic Knowledge bonus.<sup><InnerLink showBacklink="backlink-class-bard-ref-E-1" id="class-bard-ref-E-1" data-hash-target to="class-bard-E">5</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Reduce arcane spell failure chance for casting bard spells when wearing medium armor by +1%. Once the total reaches 10%, the bard also receives Medium Armor Proficiency, if he does not already possess it.<sup><InnerLink showBacklink="backlink-class-bard-ref-F-1" id="class-bard-ref-F-1" data-hash-target to="class-bard-F">6</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1 to the bard's CMD when resisting a disarm or sunder attempt.<sup><InnerLink showBacklink="backlink-class-bard-ref-G-1" id="class-bard-ref-G-1" data-hash-target to="class-bard-G">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-H-1" id="class-bard-ref-H-1" data-hash-target to="class-bard-H">8</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add a +1 bonus on Disguise checks when using <Link to="/spell/disguise_self">disguise self</Link>.<sup><InnerLink showBacklink="backlink-class-bard-ref-I-1" id="class-bard-ref-I-1" data-hash-target to="class-bard-I">9</InnerLink></sup></p>
<p><strong>Ganzi:</strong> Add 1/2 to the bard's bardic knowledge bonus.<sup><InnerLink showBacklink="backlink-class-bard-ref-J-1" id="class-bard-ref-J-1" data-hash-target to="class-bard-J">10</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add one spell from the druid spell list to the bard's spell list and known spells. This spell must be at least 1 level lower than the highest-level spell the bard can cast.<sup><InnerLink showBacklink="backlink-class-bard-ref-K-1" id="class-bard-ref-K-1" data-hash-target to="class-bard-K">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-L-1" id="class-bard-ref-L-1" data-hash-target to="class-bard-L">12</InnerLink></sup></p>
<p><strong>Gillman:</strong> Add 1/2 to the bard's Bluff checks to fool someone and gain a +1/2 bonus on the bard's Sense Motive checks to sense enchantments.<sup><InnerLink showBacklink="backlink-class-bard-ref-M-1" id="class-bard-ref-M-1" data-hash-target to="class-bard-M">13</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1 to the bard's total number of bardic performance rounds per day.<sup><InnerLink showBacklink="backlink-class-bard-ref-N-1" id="class-bard-ref-N-1" data-hash-target to="class-bard-N">14</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-O-1" id="class-bard-ref-O-1" data-hash-target to="class-bard-O">15</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1 to the bard's total number of bardic performance rounds per day.<sup><InnerLink showBacklink="backlink-class-bard-ref-P-1" id="class-bard-ref-P-1" data-hash-target to="class-bard-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-Q-1" id="class-bard-ref-Q-1" data-hash-target to="class-bard-Q">17</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add 5 feet to the range of one bardic performance.<sup><InnerLink showBacklink="backlink-class-bard-ref-R-1" id="class-bard-ref-R-1" data-hash-target to="class-bard-R">18</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1 to the bard's total number of bardic performance rounds per day.<sup><InnerLink showBacklink="backlink-class-bard-ref-S-1" id="class-bard-ref-S-1" data-hash-target to="class-bard-S">19</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-T-1" id="class-bard-ref-T-1" data-hash-target to="class-bard-T">20</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1/2 on Bluff checks to pass secret messages, +1/2 on Diplomacy checks to gather information, and +1/2 on Disguise checks to appear as an elven, half-elven, or human child.<sup><InnerLink showBacklink="backlink-class-bard-ref-U-1" id="class-bard-ref-U-1" data-hash-target to="class-bard-U">21</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-V-1" id="class-bard-ref-V-1" data-hash-target to="class-bard-V">22</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1 to the bard's total number of bardic performance rounds per day.<sup><InnerLink showBacklink="backlink-class-bard-ref-W-1" id="class-bard-ref-W-1" data-hash-target to="class-bard-W">23</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1/2 bonus on Bluff checks to pass secret messages, Sense Motive checks to discern secret messages, and Linguistic checks to decipher unusual handwriting.<sup><InnerLink showBacklink="backlink-class-bard-ref-X-1" id="class-bard-ref-X-1" data-hash-target to="class-bard-X">24</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell known from the bard spell list. This spell must be at least one level below the highest spell level the bard can cast.<sup><InnerLink showBacklink="backlink-class-bard-ref-Y-1" id="class-bard-ref-Y-1" data-hash-target to="class-bard-Y">25</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-bard-ref-Z-1" id="class-bard-ref-Z-1" data-hash-target to="class-bard-Z">26</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add +1/6 to the number of people the bard can affect with the fascinate bardic performance.<sup><InnerLink showBacklink="backlink-class-bard-ref-1-1" id="class-bard-ref-1-1" data-hash-target to="class-bard-1">27</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-bard-ref-2-1" id="class-bard-ref-2-1" data-hash-target to="class-bard-2">28</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add a +1/2 bonus on Bluff checks to lie and a +1/2 bonus on Diplomacy checks to gather information.<sup><InnerLink showBacklink="backlink-class-bard-ref-3-1" id="class-bard-ref-3-1" data-hash-target to="class-bard-3">29</InnerLink></sup></p>
<p><strong>Kobold:</strong> Treat the bard's level as +1/2 level higher for the purpose of determining the effect of the fascinate bardic performance.<sup><InnerLink showBacklink="backlink-class-bard-ref-4-1" id="class-bard-ref-4-1" data-hash-target to="class-bard-4">30</InnerLink></sup></p>
<p><strong>Merfolk:</strong> The bard learns 1/6 of a new bardic masterpiece. (The bard selects the masterpiece once he has made this selection six times and must meet its prerequisites when it is selected.)<sup><InnerLink showBacklink="backlink-class-bard-ref-5-1" id="class-bard-ref-5-1" data-hash-target to="class-bard-5">31</InnerLink></sup></p>
<p><strong>Oread:</strong> Add +5 feet to the range of one of the bard's bardic performances (max +30 feet to any one performance).<sup><InnerLink showBacklink="backlink-class-bard-ref-6-1" id="class-bard-ref-6-1" data-hash-target to="class-bard-6">32</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Increase the bonus provided by the bard's inspire competence performance by 1/6, and add 1/6 to the number of allies the bard can affect with his inspire greatness performance.<sup><InnerLink showBacklink="backlink-class-bard-ref-7-1" id="class-bard-ref-7-1" data-hash-target to="class-bard-7">33</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1/2 to the bard's bardic knowledge bonus.<sup><InnerLink showBacklink="backlink-class-bard-ref-8-1" id="class-bard-ref-8-1" data-hash-target to="class-bard-8">34</InnerLink></sup></p>
<p><strong>Tengu:</strong> Gain a +1/3 bonus on Perform checks attempted as part of countersong and distraction bardic performances.<sup><InnerLink showBacklink="backlink-class-bard-ref-9-1" id="class-bard-ref-9-1" data-hash-target to="class-bard-9">35</InnerLink></sup></p>
<p><strong>Undine:</strong> Add a +1 bonus on Perform checks to use the countersong bardic performance against creatures with the aquatic or water subtypes.<sup><InnerLink showBacklink="backlink-class-bard-ref-0-1" id="class-bard-ref-0-1" data-hash-target to="class-bard-0">36</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add 1/2 to the bard's bardic Knowledge bonus.<sup><InnerLink showBacklink="backlink-class-bard-ref-!-1" id="class-bard-ref-!-1" data-hash-target to="class-bard-!">37</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Add a +1/3 bonus to Perform (oratory) checks, including checks using versatile performance, as long as the bard first spends at least 10 minutes telling a story.<sup><InnerLink showBacklink="backlink-class-bard-ref-%40-1" id="class-bard-ref-%40-1" data-hash-target to="class-bard-%40">38</InnerLink></sup></p>
<p><strong>Vishkanya:</strong> Add +1 to the bard's total number of bardic performance rounds per day.<sup><InnerLink showBacklink="backlink-class-bard-ref-%26-1" id="class-bard-ref-%26-1" data-hash-target to="class-bard-%26">39</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add one spell known from the wizard's illusion school spell list. This spell must be at least one level below the highest spell level the bard can cast. The spell is treated as being one level higher, unless it is also on the bard spell list.<sup><InnerLink showBacklink="backlink-class-bard-ref-%25-1" id="class-bard-ref-%25-1" data-hash-target to="class-bard-%25">40</InnerLink></sup></p>
</div>
<h3 id="class-bard-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-bard/animal_speaker">Animal Speaker</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Well-Versed; Inspire Competence; Suggestion; Mass Suggestion</p><p>An animal speaker focuses not on the ears and minds of humans, but on the creatures of the wild and those in the underbellies of cities.</p></div>
<div className="archetype"><p><Link to="/arc-bard/arcane_duelist">Arcane Duelist</Link></p><p><strong>Modifies or Replaces:</strong> Countersong; Suggestion; Mass Suggestion; Versatile Performance; Well-Versed; Lore Master; Jack-of-All-Trades</p><p>A master of the martial applications of steel and spell, the arcane duelist blends both into a lethal combination.</p></div>
<div className="archetype"><p><Link to="/arc-bard/arcane_healer">Arcane Healer</Link></p><p><strong>Modifies or Replaces:</strong> Versatile Performance; Lore Master</p><p>Though bards may have different reasons for wanting to heal the sick and injured, both out of pure altruism and in order to keep adventuring companions safe, the ability to heal also makes it much easier for a bard to pose as a cleric or other divine healer, opening the door for a wide array of swindles and scams.</p></div>
<div className="archetype"><p><Link to="/arc-bard/archaeologist">Archaeologist</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Performance; Versatile Performance; Well-Versed</p><p>No stodgy researcher, this archaeologist meets his research head-on in the field.</p></div>
<div className="archetype"><p><Link to="/arc-bard/archivist">Archivist</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Suggestion; Mass Suggestion; Versatile Performance; Well-Versed; Lore Master; Jack-of-All-Trades</p><p>Some bards greatly prefer academic pursuits to the drama (and sometimes melodrama) of their artistic brethren.</p></div>
<div className="archetype"><p><Link to="/arc-bard/argent_voice">Argent Voice</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Dirge of Doom; Frightening Tune; Versatile Performance</p><p>Argent voices are agents of the Silver Ravens that dedicate themselves to the study of the magical performance are known as the "Song of Silver".</p></div>
<div className="archetype"><p><Link to="/arc-bard/arrowsong_minstrel">Arrowsong Minstrel</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiency; Spellcasting; Bardic Knowledge; Dirge of Doom; Distraction; Fascinate; Inspire Competence; Lore Master; Soothing Performance</p><p>Arrowsong minstrels combine the elven traditions of archery, song, and spellcasting into a seamless harmony of dazzling magical effects.</p></div>
<div className="archetype"><p><Link to="/arc-bard/averaka_arbiter">Averaka Arbiter</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Competence; Dirge of Doom; Versatile Performance; Well-Versed</p><p>Some Averakan bards make it their mission to unify their fellow half-orcs, and are equally skilled at helping allies defeat common enemies and at building a new civilization that reflects their unique identity.</p></div>
<div className="archetype"><p><Link to="/arc-bard/brazen_deceiver">Brazen Deceiver</Link></p><p><strong>Modifies or Replaces:</strong> Countersong; Distraction; Bardic Knowledge; Well-Versed; Versatile Performance; Lore Master</p><p>Where other thieves use stealth or intimidation to achieve their goals, the brazen deceiver depends on lies backed by powerful shadow magic.</p></div>
<div className="archetype"><p><Link to="/arc-bard/buccaneer">Buccaneer</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Suggestion; Lore Master; Mass Suggestion</p><p>A buccaneer is a pirate who specializes in raiding ships and port towns, but who leaves his victims alive whenever possible.</p></div>
<div className="archetype"><p><Link to="/arc-bard/busker">Busker</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Performance</p><p>A busker uses his dazzling physical stunts to get by on his own in the city streets.</p></div>
<div className="archetype"><p><Link to="/arc-bard/celebrity">Celebrity</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Lore Master; Dirge of Doom</p><p>Known for being known, a celebrity bard is a master of performance who captures the imagination and attention of his audience.</p></div>
<div className="archetype"><p><Link to="/arc-bard/chelish_diva">Chelish Diva</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge, Well-Versed, Lore Master, Inspire Competence, Dirge of Doom</p><p>In their pursuit of glory, a Chelish diva seeks to prove themselves better than any upstart actor, dancer, or chorus member through magic and discipline.</p></div>
<div className="archetype"><p><Link to="/arc-bard/chronicler_of_worlds">Chronicler of Worlds</Link></p><p><strong>Modifies or Replaces:</strong> Key Ability Score; Alignment; Bardic Knowledge; Inspire Greatness; Inspire Heroics; Well-Versed; Versatile Performance</p><p>A chronicler of worlds forsakes morality in service of understanding; she is both warrior and mystic, scholar and soldier.</p></div>
<div className="archetype"><p><Link to="/arc-bard/court_bard">Court Bard</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Inspire Competence; Dirge of Doom; Frightening Tune; Bardic Knowledge; Lore Master; Jack-of-All-Trades</p><p>The court bard takes up the role of resplendent proclaimer and artist-in-residence at the hand of nobility, royalty, and the well-moneyed elite who aspire to join their ranks.</p></div>
<div className="archetype"><p><Link to="/arc-bard/court_fool">Court Fool</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Countersong; Inspire Competence; Lore Master</p><p>The court fool holds up an unflattering mirror to those in charge or speaks truths, however veiled, that no one else can safely utter.</p></div>
<div className="archetype"><p><Link to="/arc-bard/cultivator">Cultivator</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spells; Bardic Knowledge; Countersong; Well-Versed; Lore Master</p><p>Cultivators use music to promote plant growth and influence the behavior of plants both naturally and supernaturally.</p></div>
<div className="archetype"><p><Link to="/arc-bard/daredevil">Daredevil</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Inspire Courage; Versatile Performance; Well-Versed; Lore Master</p><p>As quick at wordplay as at swordplay, daredevils are dashing heroes, inspiring their allies to match their clever repartee and acrobatic feats.</p></div>
<div className="archetype"><p><Link to="/arc-bard/dawnflower_dervish">Dawnflower Dervish</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Performance, Bardic Knowledge, Lore Master, Dirge of Doom</p><p>Many bards of Sarenrae's faith hone their skills with dance and scimitar to become dervish dancers.</p></div>
<div className="archetype"><p><Link to="/arc-bard/demagogue">Demagogue</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage +1; Lore Master; Suggestion; Mass Suggestion</p><p>Not content with providing amusing and occasionally instructive performances, the demagogue seeks to inflame and ignite his audience.</p></div>
<div className="archetype"><p><Link to="/arc-bard/dervish_dancer">Dervish Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Suggestion; Mass Suggestion; Dirge of Doom; Frightening Tune; Bardic Knowledge; Lore Master; Versatile Performance; Soothing Performance; Deadly Performance</p><p>Not all bards inspire others with their performances. Dervish dancers enter a near-mystical trance that allows them to push their bodies beyond normal limits.</p></div>
<div className="archetype"><p><Link to="/arc-bard/detective">Detective</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Inspire Greatness; Inspire Heroics; Bardic Knowledge; Well-Versed; Versatile Performance</p><p>Piecing together clues and catching the guilty with sheer cleverness, the detective is skilled at divining the truth.</p></div>
<div className="archetype"><p><Link to="/arc-bard/dirge_bard">Dirge Bard</Link></p><p><strong>Modifies or Replaces:</strong> Jack-of-All-Trades; Well-Versed; Versatile Performance; Lore Master</p><p>A composer of sonorous laments for the dead and elaborate requiems for those lost yet long remembered, dirge bards master musical tools and tropes that must appeal to the ears and hearts of both the living and the dead.</p></div>
<div className="archetype"><p><Link to="/arc-bard/disciple_of_the_forked_tongue">Disciple of the Forked Tongue</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Inspire Greatness; Versatile Performance</p><p>(Vishkanya) Studied in venomous words as well as venomous blood, a disciple of the forked tongue knows just the right phrase to slowly poison the soul.</p></div>
<div className="archetype"><p><Link to="/arc-bard/dragon_herald">Dragon Herald</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Bardic Knowledge; Countersong; Fascinate; Inspire Competence; Soothing Performance; Inspire Heroics; Lore Master; Jack-of-All-Trades</p><p>(Kobold Only) Dragon heralds are messengers and evangelists of true dragonkind. They carry the word of their dragon patrons far and wide, whether that's a message of peace or a declaration of war.</p></div>
<div className="archetype"><p><Link to="/arc-bard/dragon_yapper">Dragon Yapper</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Dirge of Doom; Versatile Performance</p><p>(Kobold Only) Kobolds' yammering songs distract opponents in combat, hindering their ability to attack.</p></div>
<div className="archetype"><p><Link to="/arc-bard/duettist">Duettist</Link></p><p><strong>Modifies or Replaces:</strong> Well-Versed; Jack-of-All-Trades; Bardic Knowledge; Versatile Performance; Lore Master; Dirge of Doom; Frightening Tune</p><p>Whether singing a delicate duo with a nightingale or slipping coins from purses while a trained monkey distracts the crowd, the duettist blends his bond to his familiar with his natural talent for performance to create amazing effects.</p></div>
<div className="archetype"><p><Link to="/arc-bard/dwarven_scholar">Dwarven Scholar</Link></p><p><strong>Modifies or Replaces:</strong> Key Ability Score; Weapon and Armor Proficiencies; Versatile Performance; Inspire Courage; Suggestion</p><p>A dwarven scholar researches the lineage of the kings of the old dwarven empires and learns their ancient tactics.</p></div>
<div className="archetype"><p><Link to="/arc-bard/faith_singer">Faith Singer</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Versatile Performance</p><p>Faith singers show their faith in their deity with songs or other appropriate performances.</p></div>
<div className="archetype"><p><Link to="/arc-bard/fey_courtier">Fey Courtier</Link></p><p><strong>Modifies or Replaces:</strong> Dirge of Doom; Frightening Tune; Inspire Heroics; Versatile Performance; Inspire Competence</p><p>(Gathlain) Fey who associate with courts often become bards skilled at navigating the inhuman societies of the trackless wilds.</p></div>
<div className="archetype"><p><Link to="/arc-bard/fey_prankster">Fey Prankster</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Countersong; Inspire Courage; Dirge of Doom; Well-Versed; Lore Master</p><p>Sly and mischievous like the Lantern King himself, fey pranksters learn supernatural tricks that can cause their victims to suffer mishaps and accidents.</p></div>
<div className="archetype"><p><Link to="/arc-bard/filidh">Filidh</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Spellcasting; Inspire Courage; Suggestion; Dirge of Doom; Inspire Heroics; Deadly Performance</p><p>By tapping into the world's natural music, specialized bards known as filidhs are able to see not only the tapestry of life but divine portents of the future from the rhythm of all life's song.</p></div>
<div className="archetype"><p><Link to="/arc-bard/first_world_minstrel">First World Minstrel</Link></p><p><strong>Modifies or Replaces:</strong> Spell List; Bardic Knowledge; Inspire Courage; Dirge of Doom; Well-Versed</p><p>The First World minstrel's performances channel the mysterious powers of the First World.</p></div>
<div className="archetype"><p><Link to="/arc-bard/flame_dancer">Flame Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Countersong; Inspire Competence; Suggestion; Dirge of Doom</p><p>A flame dancer studies the movements of fire, adding its grace to his repertoire.</p></div>
<div className="archetype"><p><Link to="/arc-bard/flamesinger">Flamesinger</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Lore Master; Inspire Courage; Versatile Performance</p><p>The flamesinger finds inspiration in the mesmerizing beauty of fire.</p></div>
<div className="archetype"><p><Link to="/arc-bard/fortune_teller">Fortune-Teller</Link></p><p><strong>Modifies or Replaces:</strong> Spell List; Bardic Performance; Countersong; Distraction; Well-Versed; Dirge of Doom</p><p>Instead of using song and dance, a fortune-teller influences people by divining their fate.</p></div>
<div className="archetype"><p><Link to="/arc-bard/geisha">Geisha</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Bardic Knowledge</p><p>Specially trained entertainers called geisha are praised for their appearance and skill at conversation, music, dancing, singing, poetry, and calligraphy.</p></div>
<div className="archetype"><p><Link to="/arc-bard/hatharat_agent">Hatharat Agent</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Well-Versed; Dirge of Doom</p><p>Although the Hatharat employs all manner of specialists, bards who take up the role of agent are among its most infamous and widespread.</p></div>
<div className="archetype"><p><Link to="/arc-bard/hoaxer">Hoaxer</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Inspire Courage; Inspire Competence; Inspire Greatness; Countersong; Distraction; Inspire Greatness; Versatile Performance; Well-Versed; Lore Master</p><p>Hoaxers specialize in creating valuable-looking counterfeits and infusing these false treasures with dangerous magic to make their marks more vulnerable to future swindles.</p></div>
<div className="archetype"><p><Link to="/arc-bard/impervious_messenger">Impervious Messenger</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Suggestion; Mass Suggestion; Dirge of Doom; Frightening Tune; Bardic Knowledge; Well-Versed</p><p>The impervious messenger is capable of harnessing the unique qualities of bardic magic to keep, transport, and communicate the most precious of secrets and messages.</p></div>
<div className="archetype"><p><Link to="/arc-bard/juggler">Juggler</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Bardic Knowledge; Lore Master; Versatile Performance; Well-Versed; Soothing Performance</p><p>Jugglers are masters of manipulating objects, most famously by keeping multiple objects in the air simultaneously.</p></div>
<div className="archetype"><p><Link to="/arc-bard/lotus_geisha">Lotus Geisha</Link></p><p><strong>Modifies or Replaces:</strong> Different Weapon Proficiencies; Well-Versed; Bardic Knowledge; Lore Master</p><p>The lotus geisha of Minkai are renowned for their powers of seduction.</p></div>
<div className="archetype"><p><Link to="/arc-bard/luring_piper">Luring Piper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bardic Knowledge; Dirge of Doom; Soothing Performance; Well-Versed</p><p>Some bards have an exceptional ability to use their musical performances to entrance the world's wilder creatures.</p></div>
<div className="archetype"><p><Link to="/arc-bard/magician">Magician</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Dirge of Doom; Frightening Tune; Bardic Knowledge; Countersong; Well-Versed; Versatile Performance; Lore Master; Jack-of-All-Trades</p><p>A magician dabbles in performance, but sees it as a means to tap into universal energies and channel them.</p></div>
<div className="archetype"><p><Link to="/arc-bard/masked_performer">Masked Performer</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Countersong; Inspire Competence; Suggestion; Mass Suggestion; Versatile Performance; Lore Master</p><p>The masked performer takes on the persona represented by the likeness she wears.</p></div>
<div className="archetype"><p><Link to="/arc-bard/mute_musician">Mute Musician</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Inspire Competence; Frightening Tune; Inspire Heroics; Mass Suggestion; Versatile Performance; Well-Versed; Jack-of-All-Trades</p><p>A mute musician forswears speech for the unnatural songs and thunderous silences of the depths of space.</p></div>
<div className="archetype"><p><Link to="/arc-bard/negotiator">Negotiator</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Bardic Performance; Versatile Performance; Lore Master</p><p>Negotiators are those bards who take the skills of a performer and apply them to the realms of business and law.</p></div>
<div className="archetype"><p><Link to="/arc-bard/phrenologist">Phrenologist</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Well-Versed; Jack-of-All-Trades; Inspire Courage; Inspire Competence; Fascinate</p><p>The phrenologist is an expert at reading creatures' skulls, and he learns to use this knowledge to his benefit.</p></div>
<div className="archetype"><p><Link to="/arc-bard/pitax_academy_of_grand_arts">Pitax: Academy of Grand Arts</Link></p><p><strong>Modifies or Replaces:</strong> Versatile Performance</p><p>Those who have successfully mastered the strict curriculum of the Academy of Grand Arts.</p></div>
<div className="archetype"><p><Link to="/arc-bard/plant_speaker">Plant Speaker</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Greatness; Bardic Knowledge; Well-Versed; Lore Master</p><p>(Vine Leshy only) Plant speakers build upon their racial plantspeech ability and their storytelling tendencies to create an art form full of deep metaphors and allegory rather than specific details and facts.</p></div>
<div className="archetype"><p><Link to="/arc-bard/prankster">Prankster</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Suggestion; Mass Suggestion; Lore Master</p><p>(Gnome Only) The prankster sees humor as the highest form or art, and pranks as the highest form of humor.</p></div>
<div className="archetype"><p><Link to="/arc-bard/provocateur">Provocateur</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; 2nd-level Versatile Performance; Suggestion, Mass Suggestion</p><p>Provocateurs are bards who use their art to make controversial political statements, undermine enemies' reputations, and upset the status quo on a large scale.</p></div>
<div className="archetype"><p><Link to="/arc-bard/ringleader_ag">Ringleader (AG)</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Performance; Well-Versed; Versatile Performance; Suggestion; Mass Suggestion; Soothing Performance</p><p>Ringleaders are specialists who oversee large operations in which trouble could strike at any moment and any place.</p></div>
<div className="archetype"><p><Link to="/arc-bard/ringleader_ui">Ringleader (UI)</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Competence; Dirge of Doom; Frightening Tune; Versatile Performance; Well-Versed; Lore Master</p><p>Ringleaders are adept in getting the most out of their allies, and they excel at planning for unexpected complications in advance.</p></div>
<div className="archetype"><p><Link to="/arc-bard/sandman">Sandman</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Suggestion; Inspire Greatness; Inspire Heroics; Mass Suggestion; Deadly Performance; Bardic Knowledge; Versatile Performance; Inspire Competence; Lore Master</p><p>Combining performance with stealth, trickery, and guile, the sandman uses cleverness to keep others off-balance.</p></div>
<div className="archetype"><p><Link to="/arc-bard/savage_skald">Savage Skald</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Suggestion; Jack-of-All-Trades; Soothing Performance; Mass Suggestion</p><p>Far from civilization, furious tribes have their own war-singers, work-chanters, and lore-keepers, savaging enemies with song and sword alike.</p></div>
<div className="archetype"><p><Link to="/arc-bard/sea_singer">Sea Singer</Link></p><p><strong>Modifies or Replaces:</strong> Countersong; Inspire Competence; Suggestion; Mass Suggestion; Bardic Knowledge; Versatile Performance; Well-Versed</p><p>The sea singer calls the blue waters his home, and is much in demand among sea captains wishing good fortune for their crew and hull as they ply the tradewinds far and wide.</p></div>
<div className="archetype"><p><Link to="/arc-bard/shadow_puppeteer">Shadow Puppeteer</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Inspire Competence</p><p>(Wayang Only) A shadow puppeteer invokes amazing and terrifying shadow puppet shows, producing supernatural effects by creating and manipulating shadow.</p></div>
<div className="archetype"><p><Link to="/arc-bard/silver_balladeer">Silver Balladeer</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Suggestion; Inspire Greatness; Mass Suggestion; Well-Versed; 2nd-level Versatile Performance</p><p>The bright purity of silver makes beautiful music, and its vibrations are also anathema to unnatural creatures. Some bards use a mixture of silver-stringed instruments and esoteric knowledge to battle the dark forces of the world.</p></div>
<div className="archetype"><p><Link to="/arc-bard/solacer">Solacer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bardic Knowledge; Lore Master; Countersong; Versatile Performance; Jack-of-All-Trades</p><p>Solacers are experts in the healing arts as well as creators of performances that console the distraught, rally the stricken, raise spirits, and vanquish sorrow.</p></div>
<div className="archetype"><p><Link to="/arc-bard/songhealer">Songhealer</Link></p><p><strong>Modifies or Replaces:</strong> Versatile Performance; Frightening Tune; Deadly Performance</p><p>The songhealer brings peace and surcease of pain, calming wild emotions and providing a balm for the wounded body.</p></div>
<div className="archetype"><p><Link to="/arc-bard/sorrowsoul">Sorrowsoul</Link></p><p><strong>Modifies or Replaces:</strong> Soothing Performance; Versatile Performance; Well-Versed; Lore Master</p><p>While most bards, on occasion, sing mournful tunes or craft elegies that depict the deepest sadness or the most profound suffering, the sorrowsoul has known tragedy and loss on a level so intimate, he has bound it to his soul.</p></div>
<div className="archetype"><p><Link to="/arc-bard/sound_striker">Sound Striker</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Competence; Suggestion</p><p>They say that words can cut deeper than any blade, and the sound striker proves this true.</p></div>
<div className="archetype"><p><Link to="/arc-bard/speaker_of_the_palatine_eye">Speaker of the Palatine Eye</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spells; Countersong; Jack-of-All-Trades</p><p>A speaker of the Palatine Eye influences others using his occult knowledge rather than the boisterous enthusiasm of most bards.</p></div>
<div className="archetype"><p><Link to="/arc-bard/stonesinger">Stonesinger</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Bardic Performance; Countersong; Dirge of Doom</p><p>Stonesingers are rare bards capable of vocalizing their bardic performances through subsonic harmonies, allowing their performances to carry as subtle vibrations through stone, rather than through the air.</p></div>
<div className="archetype"><p><Link to="/arc-bard/street_performer">Street Performer</Link></p><p><strong>Modifies or Replaces:</strong> Inspire Courage; Inspire Competence; Inspire Greatness; Inspire Heroics; Countersong; Bardic Knowledge; Lore Master</p><p>Whether acrobat, troubadour, or thespian, the street performer mixes with the masses, singing for his supper.</p></div>
<div className="archetype"><p><Link to="/arc-bard/studious_librarian">Studious Librarian</Link></p><p><strong>Modifies or Replaces:</strong> Distraction; Suggestion; Jack-of-All-Trades; Dirge of Doom; Mass Suggestion; Deadly Performance</p><p>Studious librarians are bards that have studied long in great libraries of the Inner Sea region.</p></div>
<div className="archetype"><p><Link to="/arc-bard/thundercaller">Thundercaller</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Inspire Competence; Suggestion; Mass Suggestion; Dirge of Doom; Frightening Tune</p><p>Thundercallers bear the knowledge of the ancients, wielding it like a weapon to protect the land for which they care so deeply.</p></div>
<div className="archetype"><p><Link to="/arc-bard/voice_of_brigh">Voice of Brigh</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate; Dirge of Doom; Soothing Performance; Frightening Tune</p><p>The Whisper in Bronze sometimes sends inspiration to her favorite followers in the form of music</p></div>
<div className="archetype"><p><Link to="/arc-bard/voice_of_the_wild">Voice of the Wild</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Countersong; Versatile Performance; Jack-of-All-Trades; Inspire Competence; Dirge of Doom; Inspire Heroics</p><p>Most bards are inspired by the art of civilization, yet the voice of the wild's muse is the grandeur and beauty of nature.</p></div>
<div className="archetype"><p><Link to="/arc-bard/wasteland_chronicler">Wasteland Chronicler</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Inspire Competence</p><p>Wasteland chroniclers explore the farthest reaches of desolate wastelands, seeking to unlock the mysteries found there and meet the inhabitants of such regions</p></div>
<div className="archetype"><p><Link to="/arc-bard/watersinger">Watersinger</Link></p><p><strong>Modifies or Replaces:</strong> Fascinate, Suggestion, Mass Suggestion, Inspire Competence, 5th-level Lore Master</p><p>(Undine Only) The watersinger's song reaches from the depths of his soul into the elemental waters from which life first sprang.</p></div>
<div className="archetype"><p><Link to="/arc-bard/wit">Wit</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Inspire Competence; Dirge of Doom; Frightening Tune; Versatile Performance; Lore Master; Jack-of-All-Trades</p><p>The wit is a master of clever repartee and verbal dueling, moving through noble courts like a fish through water.</p></div>
<h3 id="class-bard-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"bard archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Bardic Knowledge"},{"header":"Bardic Performance"},{"header":"Class Skills"},{"header":"Countersong"},{"header":"Deadly Performance"},{"header":"Dirge of Doom"},{"header":"Distraction"},{"header":"Fascinate"},{"header":"Frightening Tune"},{"header":"Inspire Competence"},{"header":"Inspire Courage"},{"header":"Inspire Courage +1"},{"header":"Inspire Greatness"},{"header":"Inspire Heroics"},{"header":"Jack-of-All-Trades"},{"header":"Key Ability Score"},{"header":"Lore Master"},{"header":"5th-level Lore Master"},{"header":"Soothing Performance"},{"header":"Spellcasting"},{"header":"Suggestion"},{"header":"Mass Suggestion"},{"header":"Versatile Performance"},{"header":"2nd-level Versatile Performance"},{"header":"Weapon/Armor Proficiency"},{"header":"Well-Versed"}],"data":[["‹arc-bard/Animal Speaker›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X"],["‹arc-bard/Arcane Duelist›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,"X","X","X",null,null,"X"],["‹arc-bard/Arcane Healer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-bard/Archaeologist›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Archivist›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,"X","X","X",null,null,"X"],["‹arc-bard/Argent Voice›",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Arrowsong Minstrel›",null,"X",null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,"X",null],["‹arc-bard/Averaka Arbiter›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Brazen Deceiver›",null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Buccaneer›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X",null,null,null,null],["‹arc-bard/Busker›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bard/Celebrity›",null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-bard/Chelish Diva›",null,"X",null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-bard/Chronicler of Worlds›","X","X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Court Bard›",null,"X",null,null,null,null,"X",null,null,"X","X","X",null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null],["‹arc-bard/Court Fool›",null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-bard/Cultivator›",null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X"],["‹arc-bard/Daredevil›",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Dawnflower Dervish›",null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-bard/Demagogue›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,"X","X",null,null,null,null],["‹arc-bard/Dervish Dancer›",null,"X",null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,"X","X","X",null,null,null],["‹arc-bard/Detective›",null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Dirge Bard›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Disciple of the Forked Tongue›",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Dragon Herald›",null,"X",null,null,"X",null,null,null,"X",null,"X",null,null,null,"X","X",null,"X",null,"X",null,null,null,null,null,"X",null],["‹arc-bard/Dragon Yapper›",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Duettist›",null,"X",null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Dwarven Scholar›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X",null,"X",null,"X",null],["‹arc-bard/Faith Singer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Fey Courtier›",null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Fey Prankster›",null,"X",null,null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-bard/Filidh›",null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X","X",null,null,null,"X",null],["‹arc-bard/First World Minstrel›",null,"X",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-bard/Flame Dancer›",null,null,null,null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-bard/Flamesinger›",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-bard/Fortune-Teller›",null,null,"X",null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-bard/Geisha›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-bard/Hatharat Agent›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-bard/Hoaxer›",null,"X",null,null,"X",null,null,"X",null,null,"X","X",null,"X",null,null,null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Impervious Messenger›",null,"X",null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X"],["‹arc-bard/Juggler›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,"X",null,"X","X"],["‹arc-bard/Lotus Geisha›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X"],["‹arc-bard/Luring Piper›",null,"X",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X"],["‹arc-bard/Magician›",null,"X",null,null,"X",null,"X",null,null,"X",null,"X",null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Masked Performer›",null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,"X","X","X",null,null,null],["‹arc-bard/Mute Musician›",null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,"X","X",null,null,null,null,null,null,"X","X",null,null,"X"],["‹arc-bard/Negotiator›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-bard/Phrenologist›",null,"X",null,null,null,null,null,null,"X",null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-bard/Pitax: Academy of Grand Arts›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Plant Speaker›",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-bard/Prankster›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,"X","X",null,null,null,null],["‹arc-bard/Provocateur›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null],["‹arc-bard/Ringleader (AG)›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X","X",null,null,"X"],["‹arc-bard/Ringleader (UI)›",null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-bard/Sandman›",null,"X",null,null,null,"X",null,null,null,null,"X","X",null,"X","X",null,null,"X",null,null,null,"X","X","X",null,null,null],["‹arc-bard/Savage Skald›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,"X",null,"X","X",null,null,null,null],["‹arc-bard/Sea Singer›",null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,"X"],["‹arc-bard/Shadow Puppeteer›",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bard/Silver Balladeer›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,"X",null,"X"],["‹arc-bard/Solacer›",null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-bard/Songhealer›",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Sorrowsoul›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,"X",null,null,"X"],["‹arc-bard/Sound Striker›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-bard/Speaker of the Palatine Eye›",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null],["‹arc-bard/Stonesinger›",null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-bard/Street Performer›",null,"X",null,null,"X",null,null,null,null,null,"X","X",null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-bard/Studious Librarian›",null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null,null,null],["‹arc-bard/Thundercaller›",null,"X",null,null,null,null,"X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null],["‹arc-bard/Voice of Brigh›",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-bard/Voice of the Wild›",null,"X",null,null,"X",null,"X",null,null,null,"X",null,null,null,"X","X",null,null,null,null,null,null,null,"X",null,null,null],["‹arc-bard/Wasteland Chronicler›",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bard/Watersinger›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,null],["‹arc-bard/Wit›",null,"X",null,null,null,null,"X",null,null,"X","X",null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-bard-label">Footnotes</h3>
<ol>
<li id="class-bard-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-bard-ref-A-1" data-hash-target to="class-bard-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-bard-B">
<p><Link to="/source/monster_codex">Monster Codex pg. 8</Link> <InnerLink id="backlink-class-bard-ref-B-1" data-hash-target to="class-bard-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-bard-C">
<p>Advanced Race Guide pg. 92 <InnerLink id="backlink-class-bard-ref-C-1" data-hash-target to="class-bard-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-bard-D">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-bard-ref-D-1" data-hash-target to="class-bard-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-bard-E">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-bard-ref-E-1" data-hash-target to="class-bard-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-bard-F">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-bard-ref-F-1" data-hash-target to="class-bard-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-bard-G">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-bard-ref-G-1" data-hash-target to="class-bard-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-bard-H">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 13</Link> <InnerLink id="backlink-class-bard-ref-H-1" data-hash-target to="class-bard-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-bard-I">
<p>Blood of Shadows pg. 7 <InnerLink id="backlink-class-bard-ref-I-1" data-hash-target to="class-bard-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-bard-J">
<p>Plane-Hopper's Handbook pg. 19 <InnerLink id="backlink-class-bard-ref-J-1" data-hash-target to="class-bard-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-bard-K">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-bard-ref-K-1" data-hash-target to="class-bard-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-bard-L">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 8</Link> <InnerLink id="backlink-class-bard-ref-L-1" data-hash-target to="class-bard-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-bard-M">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 9</Link> <InnerLink id="backlink-class-bard-ref-M-1" data-hash-target to="class-bard-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-bard-N">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-bard-ref-N-1" data-hash-target to="class-bard-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-bard-O">
<p>Advanced Player's Guide pg. 15 <InnerLink id="backlink-class-bard-ref-O-1" data-hash-target to="class-bard-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-bard-P">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-bard-ref-P-1" data-hash-target to="class-bard-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-bard-Q">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-bard-ref-Q-1" data-hash-target to="class-bard-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-bard-R">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 8</Link> <InnerLink id="backlink-class-bard-ref-R-1" data-hash-target to="class-bard-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-bard-S">
<p>Advanced Race Guide pg. 42 <InnerLink id="backlink-class-bard-ref-S-1" data-hash-target to="class-bard-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-bard-T">
<p>Advanced Player's Guide pg. 17 <InnerLink id="backlink-class-bard-ref-T-1" data-hash-target to="class-bard-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-bard-U">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-bard-ref-U-1" data-hash-target to="class-bard-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-bard-V">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-bard-ref-V-1" data-hash-target to="class-bard-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-bard-W">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-bard-ref-W-1" data-hash-target to="class-bard-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-bard-X">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 40</Link> <InnerLink id="backlink-class-bard-ref-X-1" data-hash-target to="class-bard-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-bard-Y">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-bard-ref-Y-1" data-hash-target to="class-bard-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-bard-Z">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-bard-ref-Z-1" data-hash-target to="class-bard-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-bard-1">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-bard-ref-1-1" data-hash-target to="class-bard-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-bard-2">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-bard-ref-2-1" data-hash-target to="class-bard-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-bard-3">
<p>Advanced Race Guide pg. 192 <InnerLink id="backlink-class-bard-ref-3-1" data-hash-target to="class-bard-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-bard-4">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-bard-ref-4-1" data-hash-target to="class-bard-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-bard-5">
<p>Blood of the Sea pg. 13 <InnerLink id="backlink-class-bard-ref-5-1" data-hash-target to="class-bard-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-bard-6">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-bard-ref-6-1" data-hash-target to="class-bard-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-bard-7">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-bard-ref-7-1" data-hash-target to="class-bard-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-bard-8">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-bard-ref-8-1" data-hash-target to="class-bard-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
<li id="class-bard-9">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-bard-ref-9-1" data-hash-target to="class-bard-ref-9-1" aria-label="Back to reference 9-1">↩</InnerLink></p>
</li>
<li id="class-bard-0">
<p>Advanced Race Guide pg. 176 <InnerLink id="backlink-class-bard-ref-0-1" data-hash-target to="class-bard-ref-0-1" aria-label="Back to reference 0-1">↩</InnerLink></p>
</li>
<li id="class-bard-!">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-bard-ref-!-1" data-hash-target to="class-bard-ref-!-1" aria-label="Back to reference !-1">↩</InnerLink></p>
</li>
<li id="class-bard-%40">
<p>Ultimate Wilderness pg. 21 <InnerLink id="backlink-class-bard-ref-%40-1" data-hash-target to="class-bard-ref-%40-1" aria-label="Back to reference @-1">↩</InnerLink></p>
</li>
<li id="class-bard-%26">
<p>Advanced Race Guide pg. 208 <InnerLink id="backlink-class-bard-ref-%26-1" data-hash-target to="class-bard-ref-%26-1" aria-label="Back to reference &-1">↩</InnerLink></p>
</li>
<li id="class-bard-%25">
<p>Advanced Race Guide pg. 210 <InnerLink id="backlink-class-bard-ref-%25-1" data-hash-target to="class-bard-ref-%25-1" aria-label="Back to reference %-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _bloodrager = {hasJL:true,title: "Bloodrager", jsx: <><div className="jumpList" id="class-bloodrager-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-bloodrager-bloodline">Bloodline</InnerLink></li><li><InnerLink toTop to="class-bloodrager-bloodrage-su">Bloodrage</InnerLink></li><li><InnerLink toTop to="class-bloodrager-fast-movement-ex">Fast Movement</InnerLink></li><li><InnerLink toTop to="class-bloodrager-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-bloodrager-blood-sanctuary-su">Blood Sanctuary</InnerLink></li><li><InnerLink toTop to="class-bloodrager-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-bloodrager-improved-uncanny-dodge-ex">Improved Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-bloodrager-damage-reduction-ex">Damage Reduction</InnerLink></li><li><InnerLink toTop to="class-bloodrager-greater-bloodrage-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-bloodrager-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-bloodrager-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-bloodrager-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-bloodrager-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-bloodrager-bloodrager">Bloodrager</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 15</Link></p>
<p>While many ferocious combatants can tap into a deep reservoir of buried rage, bloodragers have an intrinsic power that seethes within. Like <Link to="/class/sorcerer">sorcerers</Link>, bloodragers' veins surge with arcane power. While sorcerers use this power for spellcasting, bloodragers enter an altered state in which their bloodline becomes manifest, where the echoes of their strange ancestry lash out with devastating power. In these states, bloodragers can cast some arcane spells instinctively. The bloodrager's magic is as fast, violent, and seemingly unstoppable as their physical prowess.</p>
<p><strong>Role:</strong> Masters of the battlefield, bloodragers unleash fearful carnage on their enemies using their bloodlines and combat prowess. The bloodrager's place is on the front lines, right in his enemies' faces, supplying tremendous martial force bolstered by a trace of arcane magic.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/barbarian">Barbarian</Link> and sorcerer</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-bloodrager-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-bloodrager--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
<td>Bloodline, bloodline power, bloodrage, fast movement</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+0</td>
<td>Uncanny dodge</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>Blood sanctuary</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Blood casting, bloodline power, eschew materials</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Improved uncanny dodge</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Bloodline feat</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Bloodline spell, damage reduction 1/-</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+2</td>
<td>Bloodline power</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+3</td>
<td>Bloodline feat</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Bloodline spell, damage reduction 2/-</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Greater bloodrage</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Bloodline feat, bloodline power</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Bloodline spell, damage reduction 3/-</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+4</td>
<td>Indomitable will</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+5</td>
<td>Bloodline feat</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Bloodline spell, bloodline power, damage reduction 4/-</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Tireless bloodrage</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Bloodline feat</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Damage reduction 5/-</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+6</td>
<td>Bloodline power, mighty bloodrage</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-bloodrager-spells-known">Spells Known</h3>
<ScrollContainer id="class-bloodrager--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>5</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><td colSpan={3} className="sw se">You can cast bloodrager spells while wearing light armor or medium armor without incurring the normal arcane spell failure chance. This does not affect the arcane spell failure chance for arcane spells received from other classes. Like other arcane spellcasters, heavy armor or wielding a shield incurs a chance of arcane spell failure if the spell in question has somatic components.</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-bloodline" data-hash-target><div className="box">Bloodline</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Choice</div></div><div className="abEnd"><div className="box">You must pick one <Link to="/ability/bloodrager_bloodlines">bloodline</Link> upon taking your first level of bloodrager. Once made, this choice cannot be changed. You immediately gain its 1st-level power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>Each bloodrager has a source of magic somewhere in his heritage that empowers his bloodrages, bonus feats, and bonus spells. Sometimes this source reflects a distant blood relationship to a powerful being, or is due to an extreme event involving such a creature somewhere in his family's past. Regardless of the source, this influence manifests in a number of ways.</p>
<p>When choosing a bloodline, your alignment doesn't restrict your choices. A good bloodrager could come from an <Link to="/blrgbloodline/abyssal">abyssal</Link> bloodline, a <Link to="/blrgbloodline/celestial">celestial</Link> bloodline could beget an evil bloodrager generations later, a bloodrager from an <Link to="/blrgbloodline/infernal">infernal</Link> bloodline could be chaotic, and so on. Though your bloodline empowers you, it doesn't dictate or limit your thoughts and behavior.</p>
<p><strong className="hl">NOTE:</strong> If you take levels in another class that grants a bloodline, the bloodlines must be the same type, even if that means that the bloodline of one of the classes must change. Subject to GM discretion, you can change your former bloodline to make them conform.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You gain the 4th-level bloodline power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You gain a bonus feat chosen from a list of feats presented in your bloodline.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You learn an additional spell from your bloodline.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain the 8th-level bloodline power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You gain a second feat from your bloodline.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You learn an additional spell from your bloodline.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain the 12th-level bloodline power and a third bloodline feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You learn an additional spell from your bloodline.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You gain a fourth bloodline feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You gain the 16th-level bloodline power, and learn an additional spell from your bloodline.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You gain a fifth bloodline feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You gain the 20th-level bloodline power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">For all spell-like bloodline powers, treat your bloodrager level as the caster level. Spells you gain from your bloodline are in addition to the number of spells given per level. These spells cannot be exchanged for different spells at higher levels.</div></div></div></div>
<aside><p>Optionally, whenever a bloodrager gains a new bloodline power or bonus feat, he can swap it for a <Link to="/ability/bloodline_mutations">bloodline mutation</Link> whose prerequisites he meets.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-bloodrage-su" data-hash-target><div className="box">Bloodrage (Su)</div><div className="flavor">Your source of internal power grants you the ability to bloodrage.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">You can bloodrage for 2 + twice your level + your Con modifier rounds/day; these rounds need not be consecutive. Temporary increases to Con (such as those gained from bloodraging or spells like <Link to="/spell/bears_endurance">bear's endurance</Link>) don't increase this number.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can enter or leave a bloodrage as a free action. While in a bloodrage, you gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. In addition, you take a -2 penalty to Armor Class. The increase to Constitution grants you 2 hit points per Hit Die, but these disappear when the bloodrage ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>. While bloodraging, you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">When the bloodrage ends, you are <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to twice the number of rounds spent in the bloodrage. You can't enter a new bloodrage while fatigued or <Link to="/misc/exhausted">exhausted</Link>, but can otherwise enter bloodrage multiple times during a single encounter or combat. If you fall <Link to="/misc/unconscious">unconscious</Link>, your bloodrage immediately ends, placing you in peril of death.</div></div></div></div>
<p><strong className="hl">NOTE:</strong> Bloodrage counts as the <Link to="/class/barbarian">barbarian's</Link> <em>rage</em> class feature for the purpose of feat prerequisites, feat abilities, magic item abilities, and spell effects.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-fast-movement-ex" data-hash-target><div className="box">Fast Movement (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your land speed is faster than is normal for your race by 10 feet. This benefit applies only when you are wearing no armor, light armor, or medium armor, and not carrying a heavy load.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Apply this bonus before modifying your speed due to any armor worn or load carried. This bonus stacks with any other bonuses to your land speed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-uncanny-dodge-ex" data-hash-target><div className="box">Uncanny Dodge (Ex)</div><div className="flavor">You can react to danger before your senses would normally allow you to do so.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dexterity bonus to AC if the attacker is invisible. If you already possesses uncanny dodge from a different class, you automatically gain <em>improved uncanny dodge</em> (see below) instead.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You still lose your Dexterity bonus to AC if immobilized, or if an opponent successfully uses the <Link to="/rule/feint">feint</Link> action against you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-blood-sanctuary-su" data-hash-target><div className="box">Blood Sanctuary (Su)</div><div className="flavor">Due to the power of your blood, you can stand confidently amid the effects of spells cast by yourself or your allies.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +2 bonus on saving throws against spells that you or an ally casts.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast a small number of arcane spells drawn from the <Link to="/main/bloodrager_spell">bloodrager spell list</Link>. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level. The DC for a saving throw against spells you cast is 10 + the spell level + your Constitution modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To learn, prepare, or cast a spell, you must have a Charisma score equal to at least 10 + the spell level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">Your selection of spells is limited. At 4th level, you know two 1st-level spells of your choice. You gain more spells as you increase in level. Unlike spells per day, the number of spells you know is not affected by your Charisma score, but it is affected by any bonus spells you gain from your bloodline. At 8th level and every 3 levels thereafter, you can choose to learn a new spell in place of one you already know. This swap follows all the same rules as for a sorcerer.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-blood-casting-su" data-hash-target><div className="box">Blood Casting (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast spells even while bloodraging. You can also cast these spells <Link to="/rule/cast_defensively">defensively</Link> and can make <Link to="/rule/concentration">concentration</Link> checks for these spells while bloodraging.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">While bloodraging, you can cast and concentrate on only your bloodrager spells; spells from other classes cannot be cast during this state.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-eschew-materials" data-hash-target><div className="box">Eschew Materials</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/feat/eschew_materials">Eschew Materials</Link> as a bonus feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-improved-uncanny-dodge-ex" data-hash-target><div className="box">Improved Uncanny Dodge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can no longer be <Link to="/rule/flanked">flanked</Link>. This defense denies rogues (or other classes) the ability to <Link to="/ability/sneak_attack">sneak attack</Link> you by flanking, unless the attacker has at least four more rogue levels (or levels in the class granting sneak attack) than your bloodrager levels.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you already have uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack when determining the minimum rogue level required to flank you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-damage-reduction-ex" data-hash-target><div className="box">Damage Reduction (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/rule/damage_reduction">damage reduction</Link> DR 1/-. Subtract 1 from the damage you take each time you're dealt damage from a weapon or a natural attack. Damage reduction can reduce damage to 0, but not below 0.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">Your DR becomes 2/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">Your DR becomes 3/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your DR becomes 4/-.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">Your DR becomes 5/-.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-greater-bloodrage-su" data-hash-target><div className="box">Greater Bloodrage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When you enter a bloodrage, the morale bonus to Strength and Constitution increases to +6 and the morale bonus on Will saves increases to +3. In addition, upon entering a bloodrage, you can apply the effects a bloodrager spell you know of 2nd level or lower to yourself. The spell must have a range of touch or personal. If the spell's duration is greater than 1 round, it instead lasts for the duration of the bloodrage. This use consumes a bloodrager spell slot, as if you had cast the spell; you must have the spell slot available to take advantage of this effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box"><em>Greater bloodrage</em> counts as the barbarian's <em>greater rage</em> ability for the purposes of feat prerequisites, feat abilities, magic item abilities, and spell effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-indomitable-will-ex" data-hash-target><div className="box">Indomitable Will (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +4 bonus on Will saves to resist enchantment spells while bloodraging. This bonus stacks with all other modifiers, including the morale bonus on Will saves you also receives during your bloodrage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-tireless-bloodrage-su" data-hash-target><div className="box">Tireless Bloodrage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You no longer become fatigued at the end of your bloodrage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-bloodrager-mighty-bloodrage-su" data-hash-target><div className="box">Mighty Bloodrage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When you enter a bloodrage, the morale bonus to Strength and Constitution increases to +8, and the morale bonus on Will saves increases to +4. Furthermore, the spell you can apply to yourself at the beginning of a bloodrage due to the <em>greater bloodrage</em> class feature is not limited to only spells of 2nd level or lower.</div></div></div></div>
<h3 id="class-bloodrager-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-bloodrager--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Empowered Bloodrage (Su)</td><td>At 20th level, the bloodrager is as much spell as mortal flesh. When the bloodrager enters a bloodrage, he can apply two spells to himself rather than one.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-bloodrager-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Catfolk:</strong> Add 1 foot to the bloodrager's base speed. In combat, this has an effect only for every five increases in base speed. This bonus stacks with the bloodrager's fast movement class feature, and applies under the same conditions as that feature.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-A-1" id="class-bloodrager-ref-A-1" data-hash-target to="class-bloodrager-A">1</InnerLink></sup></p>
<p><strong>Drow:</strong> Add a +1/2 bonus to <Link to="/rule/concentration">concentration</Link> checks to cast or maintain spells when taking damage.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-B-1" id="class-bloodrager-ref-B-1" data-hash-target to="class-bloodrager-B">2</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Increase the bloodrager's total number of bloodrage rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-C-1" id="class-bloodrager-ref-C-1" data-hash-target to="class-bloodrager-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> Add 1 foot to the bloodrager's base speed. In combat, this only has an effect for every five increases in base speed. This bonus stacks with the bloodrager's fast movement class feature, and applies under the same conditions and that feature.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-C-2" id="class-bloodrager-ref-C-2" data-hash-target to="class-bloodrager-C">3</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add 1 additional round of bloodrage per day.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-D-1" id="class-bloodrager-ref-D-1" data-hash-target to="class-bloodrager-D">4</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add 1/4 to the bloodrager's effective class level when determining the power of her bloodrager bloodline powers.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-E-1" id="class-bloodrager-ref-E-1" data-hash-target to="class-bloodrager-E">5</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Increase the bonus gained from blood sanctuary by 1/4.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-E-2" id="class-bloodrager-ref-E-2" data-hash-target to="class-bloodrager-E">5</InnerLink></sup></p>
<p><strong>Halfling:</strong> Gain a +1/4 dodge bonus to AC while bloodraging against creatures at least one size category larger than the bloodrager.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-E-3" id="class-bloodrager-ref-E-3" data-hash-target to="class-bloodrager-E">5</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Increase the bloodrager's total number of bloodrage rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-F-1" id="class-bloodrager-ref-F-1" data-hash-target to="class-bloodrager-F">6</InnerLink></sup></p>
<p><strong>Human:</strong> Increase the bloodrager's total number of bloodrage rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-F-2" id="class-bloodrager-ref-F-2" data-hash-target to="class-bloodrager-F">6</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-G-1" id="class-bloodrager-ref-G-1" data-hash-target to="class-bloodrager-G">7</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1/4 to the bloodrager's effective class level when determining the power of her bloodrager bloodline powers.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-H-1" id="class-bloodrager-ref-H-1" data-hash-target to="class-bloodrager-H">8</InnerLink></sup></p>
<p><strong>Strix:</strong> Increase the bloodrager's total number of bloodrage rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-I-1" id="class-bloodrager-ref-I-1" data-hash-target to="class-bloodrager-I">9</InnerLink></sup></p>
<p><strong>Wyvaran:</strong> Add 1 to the bloodrager's total rounds of bloodrage each day.<sup><InnerLink showBacklink="backlink-class-bloodrager-ref-J-1" id="class-bloodrager-ref-J-1" data-hash-target to="class-bloodrager-J">10</InnerLink></sup></p>
</div>
<h3 id="class-bloodrager-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-bloodrager/ancestral_harbinger">Ancestral Harbinger</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge; 6th, 12th, and 18th-level Bloodline Feats</p><p>While all bloodragers tap into their bloodlines to fuel the arcane energies they use in battle, some have the ability to call directly to the spirits of their ancestors to aid them, summoning spirits to fight for them or inspire their allies.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/blood_conduit">Blood Conduit</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Bloodline Feats; Uncanny Dodge; Improved Uncanny Dodge; Indomitable Will</p><p>Blood conduits learn to channel their arcane might directly through their flesh, without the need for mystical words or gestures.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/bloodline_familiars">Bloodline Familiars</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline; Bloodline Spells; 1st-Level Bloodline Power</p><p>Those with an inherent connection to magic often attract creatures who feel a similar instinctive pull toward magical forces.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/bloodrider">Bloodrider</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; 9th-level Bloodline Feat</p><p>In the world's wild lands, a mount is an advantage in both everyday life and the dealing of death</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/bloody_knuckled_rowdy">Bloody-Knuckled Rowdy</Link></p><p><strong>Modifies or Replaces:</strong> Damage Reduction; Spellcasting; Fast Movement; Uncanny Dodge; Improved Uncanny Dodge</p><p>The bloody-knuckled rowdy focuses on tricks and maneuvers that are quick and effective, duplicating combat styles from professional brawlers, street thugs, and even trapped animals.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/crossblooded_rager">Crossblooded Rager</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Bonus Spells; Bloodline Powers; Saving Throws</p><p>While most bloodragers manifest only one bloodline, there are some that, through some quirk of heredity or the conjunction of other powers, manifest two.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/enlightened_bloodrager">Enlightened Bloodrager</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; 1st, 4th-level Bloodline Power; Bloodrage; Bonus Spells; 7th, 13th, 19th-level Damage Reduction</p><p>Troubled by overwhelming rage and mystic forces beyond their comprehension, bloodragers have been traveling to the Magaambya for generations, seeking the peace and enlightenment promised by students of Old-Mage Jatembe.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/greenrager">Greenrager</Link></p><p><strong>Modifies or Replaces:</strong> Blood Sanctuary; 6th and 9th-level Bloodline Feats</p><p>Typically, nature finds its greatest harmony with divine magic, but sometimes a connection with the natural world manifest itself through the arcane current in the veins of the bloodragers called greenragers.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/hag_riven">Hag-Riven</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction</p><p>All changelings have the potential to transform into hags, but the process is a slow one, requiring several nights to complete. When left incomplete - by virtue of a wily changeling's escape or her mother's death - the creature is scarred and saturated in arcane power.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/id_rager">Id Rager</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline; Bloodline Spells; Bloodline Powers; Spellcasting; Eschew Materials; Bloodline Feats</p><p>An id rager lacks a supernatural taint to his blood, instead drawing power from pure emotion.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/metamagic_rager">Metamagic Rager</Link></p><p><strong>Modifies or Replaces:</strong> Improved Uncanny Dodge</p><p>While metamagic is difficult for many bloodragers to utilize, a talented few are able to channel their bloodrage in ways that push their spells to impressive ends.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/primalist">Primalist</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline</p><p>While bloodrage powers come from the very essence of a bloodrager's being and are often strict and immutable, some bloodragers tap into ancient traditions and primitive wisdom to enhance their rages with something more primal.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/prowler_at_worlds_end">Prowler at World's End</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline Powers; 9th, 12th, 15th-level Bloodline Feats; Greater Bloodrage; Mighty Bloodrage</p><p>Many catfolk bloodragers capable of communing with the ancient spirits of creation take on the burden of protecting the world from the sinister forces that exist at the world's fringes.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/rageshaper">Rageshaper</Link></p><p><strong>Modifies or Replaces:</strong> Blood Sanctuary; Improved Uncanny Dodge</p><p>All bloodragers blend the unpredictable surge of arcane power with the savage fury of battle lust. For most, their rage is a conduit for the eldritch power locked in their heritage, but for a rageshaper, the latent magical energies in his blood bring about physical transformations and facilitate the blending of arcana and aggression into a deadly synthesis that few other barbarians (or even other bloodragers) can match.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/spelleater">Spelleater</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction</p><p>Where other bloodragers learn to avoid or shrug off minor damage of all sorts, spelleaters tap into the power of their bloodline in order to heal damage as it comes, and can even cannibalize their own magical energy to heal more damage and continue taking the fight to the enemy.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/steelblood">Steelblood</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction</p><p>Most bloodragers prefer light armor, but some learn the secret of using heavy armors.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/symbol_striker">Symbol Striker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Fast Movement; 6th, 9th, 12th, 18th-level Bloodline Feats</p><p>Symbol strikers are unique form of rune-wielding berserker spellcasters whose tradition originates from Dongun Hold, a Sky Citadel in Alkenstar</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/untouchable_rager">Untouchable Rager</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Blood Casting; Eschew Materials; Bloodline Spells</p><p>While most bloodragers are known for their inexplicable ability to focus their bloodline into a horrifying mix of martial terror and spellcasting fury, from time to time a bloodrager's bloodline acts differently.</p></div>
<div className="archetype"><p><Link to="/arc-bloodrager/urban_bloodrager">Urban Bloodrager</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiencies; Bloodrage; Blood Sanctuary; Damage Reduction</p><p>Like the urban barbarian, the urban bloodrager has learned to control her rage in so-called polite society.</p></div>
<h3 id="class-bloodrager-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"bloodrager archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Armor Proficiency"},{"header":"Blood Casting"},{"header":"Blood Sanctuary"},{"header":"Bloodline"},{"header":"Bloodline Feats"},{"header":"6th-level Bloodline Feat"},{"header":"9th-level Bloodline Feat"},{"header":"12th-level Bloodline Feat"},{"header":"15th-level Bloodline Feat"},{"header":"18th-level Bloodline Feat"},{"header":"Bloodline Powers"},{"header":"1st-level Bloodline Power"},{"header":"4th-level Bloodline Power"},{"header":"Bloodline Spells"},{"header":"Bloodrage"},{"header":"Greater Bloodrage"},{"header":"Mighty Bloodrage"},{"header":"Bonus Feats"},{"header":"Class Skills"},{"header":"Damage Reduction"},{"header":"7th-level Damage Reduction"},{"header":"13th-level Damage Reduction"},{"header":"19th-level Damage Reduction"},{"header":"Eschew Materials"},{"header":"Fast Movement"},{"header":"Indomitable Will"},{"header":"Saving Throws"},{"header":"Spellcasting"},{"header":"Uncanny Dodge"},{"header":"Improved Uncanny Dodge"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-bloodrager/Ancestral Harbinger›",null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-bloodrager/Blood Conduit›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X","X",null],["‹arc-bloodrager/Bloodline Familiars›",null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bloodrager/Bloodrider›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X",null],["‹arc-bloodrager/Bloody-Knuckled Rowdy›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,"X","X","X",null],["‹arc-bloodrager/Crossblooded Rager›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-bloodrager/Enlightened Bloodrager›",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null,"X","X","X",null,null,null,null,"X",null,null,null],["‹arc-bloodrager/Greenrager›",null,null,"X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bloodrager/Hag-Riven›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,"X","X","X"],["‹arc-bloodrager/Id Rager›",null,null,null,"X","X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null],["‹arc-bloodrager/Metamagic Rager›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-bloodrager/Primalist›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bloodrager/Prowler at World's End›",null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-bloodrager/Rageshaper›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-bloodrager/Spelleater›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null],["‹arc-bloodrager/Steelblood›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,"X","X",null],["‹arc-bloodrager/Symbol Striker›",null,null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-bloodrager/Untouchable Rager›",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null],["‹arc-bloodrager/Urban Bloodrager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-bloodrager-label">Footnotes</h3>
<ol>
<li id="class-bloodrager-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-bloodrager-ref-A-1" data-hash-target to="class-bloodrager-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-bloodrager-B">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-bloodrager-ref-B-1" data-hash-target to="class-bloodrager-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-bloodrager-C">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-bloodrager-ref-C-1" data-hash-target to="class-bloodrager-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-bloodrager-ref-C-2" data-hash-target to="class-bloodrager-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-bloodrager-D">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-bloodrager-ref-D-1" data-hash-target to="class-bloodrager-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-bloodrager-E">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-bloodrager-ref-E-1" data-hash-target to="class-bloodrager-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-class-bloodrager-ref-E-2" data-hash-target to="class-bloodrager-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-bloodrager-ref-E-3" data-hash-target to="class-bloodrager-ref-E-3" aria-label="Back to reference E-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="class-bloodrager-F">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-bloodrager-ref-F-1" data-hash-target to="class-bloodrager-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink> <InnerLink id="backlink-class-bloodrager-ref-F-2" data-hash-target to="class-bloodrager-ref-F-2" aria-label="Back to reference F-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-bloodrager-G">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-bloodrager-ref-G-1" data-hash-target to="class-bloodrager-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-bloodrager-H">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 23</Link> <InnerLink id="backlink-class-bloodrager-ref-H-1" data-hash-target to="class-bloodrager-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-bloodrager-I">
<p><Link to="/source/pathfinder_101_the_kintargo_contract">Pathfinder #101: The Kintargo Contract pg. 73</Link> <InnerLink id="backlink-class-bloodrager-ref-I-1" data-hash-target to="class-bloodrager-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-bloodrager-J">
<p><Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 18</Link> <InnerLink id="backlink-class-bloodrager-ref-J-1" data-hash-target to="class-bloodrager-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {not_found:_not_found,alchemist:_alchemist,antipaladin:_antipaladin,arcanist:_arcanist,bard:_bard,bloodrager:_bloodrager}