import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _sagas = {title: "Sagas", topLink: ["Skald","class/skald"], jsx: <><h2 id="ability-sagas-sagas">Sagas</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 19</Link><br/>Sagas are a form of lore-keeping and tale-telling common in Irrisen and the Lands of the Linnorm Kings. Specialized applications of a skald's <Link to="/ability/raging_song">raging song</Link> ability, sagas function much like <Link to="/ability/bardic_masterpieces">bardic masterpieces</Link> but are available only to skalds. Sagas are never purely artistic constructs; they are designed to preserve lore or commemorate historical figures, and are usually based in fact. Sagas therefore require ranks in Knowledge (history) as a prerequisite, as well. <Link to="/class/bard">Bards</Link> can learn sagas, using their <Link to="/ability/bardic_performance">bardic performance</Link> ability instead of raging song.</p>
<h3 id="ability-sagas-lay-of-scholar-king">Lay of Scholar-King</h3>
<p>Your tale of a scholarly king sharpens your intellect, but makes others treat you with contempt.</p>
<p><strong>Prerequisites:</strong> Knowledge (history) 2 ranks, Perform (oratory) or Perform (sing) 4 ranks.<br/><strong>Cost:</strong> Feat or 2nd-level skald spell known.</p>
<p><strong>Effect:</strong> You tell the sad tale of studious and introspective King Jarguut, son of Ethered. King Jarguut ruled the Linnorm Kingdom of Raemerrund, but his kingdom fractured when the thanes would not respect his intellect. While you maintain the performance, you can add your Charisma modifier (minimum +1) to Intelligence-based skill checks in addition to your Intelligence modifier, but you take your Intelligence bonus as a penalty on all Charisma-based skill checks (minimum -1).</p>
<p><strong>Use:</strong> 1 raging song round per round.<br/><strong>Action:</strong> 1 minute</p>
<h3 id="ability-sagas-saga-of-the-witch-queen">Saga of the Witch Queen</h3>
<p>Your tale of Baba Yaga's inexorable return allows you to unerringly locate your target.</p>
<p><strong>Prerequisites:</strong> Knowledge (history) 7 ranks, Perform (oratory) or Perform (sing) 15 ranks.<br/><strong>Cost:</strong> Feat or 5th-level skald spell known.</p>
<p><strong>Effect:</strong> You tell the epic tale of the Baba Yaga, the Queen of Witches, who founded Irrisen after winning the Winter War. Once each century, she deposes one of her daughters as queen of Irrisen to install another daughter in her place. For 1,400 years, each reigning queen has known that her mother's return was a certainty. When you complete the performance, you name a creature you have seen or who once owned an item you have in your possession, and you immediately know the creature's location, as per <Link to="/spell/discern_location">discern location</Link>. At the same time, the creature learns your name and that you have determined its current whereabouts.</p>
<p><strong>Use:</strong> 10 raging song rounds.<br/><strong>Action:</strong> 10 minutes</p>
</>};
const _sorcerer_bloodlines = {title: "Sorcerer Bloodlines", topLink: ["Sorcerer","class/sorcerer"], jsx: <><h2 id="ability-sorcerer_bloodlines-sorcerer-bloodlines">Sorcerer Bloodlines</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>The following bloodlines represent only some of the possible sources of power that a sorcerer can draw upon. Unless otherwise noted, most sorcerers are assumed to have the <Link to="/sorcbloodline/arcane">arcane</Link> bloodline.</p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link><br/>A <strong>wildblooded</strong> sorcerer has a mutated version of a more common bloodline, with one arcana and at least one bloodline power that are different from those of an unmutated bloodline. When creating a wildblooded sorcerer, select an existing bloodline, then select one of the mutated bloodlines associated with that bloodline. Use the normal bloodline's class skill, bonus spells, and bonus feats, and the mutated bloodline's <em>bloodline arcana.</em> Use the normal bloodline's <em>bloodline powers,</em> except when the mutated bloodline replaces one of those powers.</p>
<ScrollContainer id="ability-sorcerer_bloodlines--table-0"><table>
<thead>
<tr>
<th>Bloodline</th>
<th>Description</th>
<th>Wildblooded Mutation</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/sorcbloodline/aberrant">Aberrant<IonRippleEffect /></Link></td>
<td>There is a taint in your blood, one that is alien and bizarre.</td>
<td>Warped</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/abyssal">Abyssal<IonRippleEffect /></Link></td>
<td>Generations ago, a demon spread its filth into your heritage.</td>
<td>Brutal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/accursed">Accursed<IonRippleEffect /></Link></td>
<td>Misfortune, pestilence, and nightmares follow your family like vermin drawn to carrion.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/aquatic">Aquatic<IonRippleEffect /></Link></td>
<td>Your family traces its heritage back to the ocean depths, whether scions of undersea empires left in the wake of nomadic sea-tribes, or the spawn of creeping ichthyic infiltrators into remote seaside villages.</td>
<td>Seaborn</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/arcane">Arcane<IonRippleEffect /></Link></td>
<td>Your family has always been skilled in the eldritch art of magic.</td>
<td>Sage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/astral">Astral<IonRippleEffect /></Link></td>
<td>Whether you were raised on the Astral Plane, had an ancestor with a strong connection to the Astral, or simply had a freak brush with an astral conduit in your youth, you have an unusual connection to both time and space.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/boreal">Boreal<IonRippleEffect /></Link></td>
<td>Descended from inhabitants of the lands of ice and snow, you count among your ancestors giant-kin, troll-born, and frost-rimed spirits.</td>
<td>Rime-Blooded</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/celestial">Celestial<IonRippleEffect /></Link></td>
<td>Your bloodline is blessed by a celestial power, either from a celestial ancestor or through divine intervention.</td>
<td>Empyreal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/daemon">Daemon<IonRippleEffect /></Link></td>
<td>Your powers derive from daemons, who take pleasure and gain power from manipulating mortal frailties like aging, pestilence, famine, and the horrors of war.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/deep_earth">Deep Earth<IonRippleEffect /></Link></td>
<td>The echoing cave-songs and the rumble and creak of primal spirits deep below the ground thrum in your soul and in all your family line.</td>
<td>Bedrock</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/destined">Destined<IonRippleEffect /></Link></td>
<td>Your family is destined for greatness in some way.</td>
<td>Karmic</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/div">Div<IonRippleEffect /></Link></td>
<td>You can trace your ancestry to one of the foul, corrupted genies known as divs.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/djinni">Djinni<IonRippleEffect /></Link></td>
<td>You were born with the power of air genies, and the magic of the djinn is strong in you.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/draconic">Draconic<IonRippleEffect /></Link></td>
<td>At some point in your family's history, a dragon interbred with your bloodline, and now its ancient power flows through your veins.</td>
<td>Linnorm</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/dreamspun">Dreamspun<IonRippleEffect /></Link></td>
<td>Your family is a long line of dreamers, who dream not as ordinary mortals do but rather as those who reach through and touch the supernal realm of dreams and the farthest shores of night.</td>
<td>Visionary</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/ectoplasm">Ectoplasm<IonRippleEffect /></Link></td>
<td>The power of the Ethereal Plane thrums in your mind and pulls at your flesh.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/efreeti">Efreeti<IonRippleEffect /></Link></td>
<td>You were born with the power of fire genies, and the magic of the efreet is strong in you.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/elemental">Elemental<IonRippleEffect /></Link></td>
<td>The power of the elements resides in you, and at times you can hardly control its fury.</td>
<td>Lifewater, Primal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/fey">Fey<IonRippleEffect /></Link></td>
<td>The capricious nature of the fey runs in your family due to some intermingling of fey blood or magic.</td>
<td>Dark Fey, Sylvan</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/ghoul">Ghoul<IonRippleEffect /></Link></td>
<td>Your connection to the hungering undead shapes your magic.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/harrow">Harrow<IonRippleEffect /></Link></td>
<td>Just as knowledge of the harrow has passed from generation to generation since time immemorial, so too has a deep spiritual connection to the otherworldly forces bound by the harrow passed through the ages.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/imperious">Imperious<IonRippleEffect /></Link></td>
<td>(Human Only) A scion of forgotten kings, with a lineage rich with the dust of ancient empires spanning every golden age of humanity's history, an imperious embodies the apex of human potential, as well as human temerity and uninhibited hubris.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/impossible">Impossible<IonRippleEffect /></Link></td>
<td>You can see beyond the mundane, and are capable of visualizing the improbable, and even the impossible.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/infernal">Infernal<IonRippleEffect /></Link></td>
<td>Somewhere in your family's history, a relative made a deal with a devil, and that pact has influenced your family line ever since.</td>
<td>Pit-Touched</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/kobold_sorcerer">Kobold Sorcerer<IonRippleEffect /></Link></td>
<td>(Kobold Only) While many kobold sorcerers tout their purely draconic bloodline, over generations of eldritch training, some such spellcasters have created a bloodline that, while tinged with some draconic magic, is the embodiment of the race's virtue distilled into arcane form.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/maestro">Maestro<IonRippleEffect /></Link></td>
<td>The spiritual power of art and song runs strongly through your family line.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/marid">Marid<IonRippleEffect /></Link></td>
<td>You were born with the power of water genies, and the magic of the marids is strong in you.</td>
<td>Shahzada</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/martyred">Martyred<IonRippleEffect /></Link></td>
<td>One of your ancestors paid the ultimate price for your beliefs.</td>
<td>Retribution</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/naga">Naga<IonRippleEffect /></Link></td>
<td>Naga blood flows within your veins. Perhaps a curious naga experimented upon one of your ancestors in an attempt to create the perfect servant, or maybe one of your ancestors was a shapeshifting naga. Either way, you boast powers similar to those of true nagas.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/nanite">Nanite<IonRippleEffect /></Link></td>
<td>Either you were born from one of the forgewombs scattered throughout the wastelands, or you were infected by nanites, which now course through your blood.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/oni">Oni<IonRippleEffect /></Link></td>
<td>As slaves of capricious oni lords, your ancestors were forced to yield to their masters' hedonistic desires, inevitably tainting their descendents with oni blood.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/orc">Orc<IonRippleEffect /></Link></td>
<td>The rage of your ancestors burns within you, and the taint of savage orc blood flows through your veins.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/pestilence">Pestilence<IonRippleEffect /></Link></td>
<td>You were born during the height of a great magical plague, to a mother suffering from an eldritch disease, or you suffered an eldritch pox as a child, such that your very soul now carries a blight of pestilence within it.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/phoenix">Phoenix<IonRippleEffect /></Link></td>
<td>One of your ancestors bore witness to a phoenix's resurrection and formed a bond with the magical creature. The resurrecting flames still course through your veins, surging with power.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/possessed">Possessed<IonRippleEffect /></Link></td>
<td>The mystical connection with your possessing spirit allows you to gain more control over your body and mind.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/protean">Protean<IonRippleEffect /></Link></td>
<td>You have in your veins the ever-changing wildness of primal chaos, the raw essence of unbound creation.</td>
<td>Anarchic</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/psychic">Psychic<IonRippleEffect /></Link></td>
<td>Psychic power runs thorough your blood, whether it be from a familial predisposition to psychic power or exposure to a powerful psychic phenomenon. Whatever the source of this power, your mind is a dangerous weapon.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/rakshasa">Rakshasa<IonRippleEffect /></Link></td>
<td>At some point in your family's history, one of your ancestors was tainted by the influence of a rakshasa.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/salamander">Salamander<IonRippleEffect /></Link></td>
<td>You are descended from the elemental outsiders known as salamanders. You wield flame as a weapon and a tool, and your smithing skills are unrivaled.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/scorpion">Scorpion<IonRippleEffect /></Link></td>
<td>Whether your ancestors served a scorpion goddess or simply worked closely with more mundane members of the species, the venom from these arachnids has seeped down through generations into your blood.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/serpentine">Serpentine<IonRippleEffect /></Link></td>
<td>Your bloodline carries the lingering stain of ancient serpent races that ruled when the world was young.</td>
<td>Envenomed</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/shadow">Shadow<IonRippleEffect /></Link></td>
<td>Spirits from the shadow plane dally at times in the world of light, and such as these lay with your ancestors once upon a time, imparting the mystery of shadow-stuff into your lineage.</td>
<td>Umbral</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/shaitan">Shaitan<IonRippleEffect /></Link></td>
<td>You were born with the power of earth genies, and the magic of the shaitans is strong in you.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/shapechanger">Shapechanger<IonRippleEffect /></Link></td>
<td>Channeling the power of your shapeshifting ancestors that you carry in your blood, you gain powers that allow you to change your shape and alter your appearance and physical abilities.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/solar">Solar<IonRippleEffect /></Link></td>
<td>Sorcerers who serve in the sun goddess's court display powers infused with the glory of the sun itself.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/starsoul">Starsoul<IonRippleEffect /></Link></td>
<td>You come from a line of stargazers and explorers who delved deeply into the darkness beyond the stars.</td>
<td>Void-Touched</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/stormborn">Stormborn<IonRippleEffect /></Link></td>
<td>You trace your heritage to fierce and proud spirits of storm and sky, and living lightning sings in your veins.</td>
<td>Arial</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/undead">Undead<IonRippleEffect /></Link></td>
<td>The taint of the grave runs through your family.</td>
<td>Sanguine</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/unicorn">Unicorn<IonRippleEffect /></Link></td>
<td>Deeply empathetic and fiercely protective, unicorns on occasion form close bonds with humans, often young and noble-hearted women. When the two have a particularly strong bond, the unicorn's magic can become a part of the bonded human, and sometimes is even passed on to her children. These children, blessed by their parent's connection to that force of true good, grow up to become sorcerers of the unicorn bloodline.</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/verdant">Verdant<IonRippleEffect /></Link></td>
<td>Your progenitors infused themselves with raw plant life, binding it into their own tissue and passing it down to their literal seed, giving you innate communion with nature.</td>
<td>Groveborn</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/sorcbloodline/vestige">Vestige<IonRippleEffect /></Link></td>
<td>You trace your ancestry to a bygone civilization and can call upon its forgotten people or places for power.</td>
<td></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spirits = {title: "Medium Spirits", topLink: ["Medium","class/medium"], jsx: <><h2 id="ability-spirits-medium-spirits">Medium Spirits</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 33</Link><br/>A medium's spirits are entities from the Astral Plane - the clinging echoes of heroes and villains from the distant past, sustained throughout time by myths and legends. The number of spirits is countless, and each has its own idiosyncrasies that make it distinct. Nonetheless, all spirits arise from one of the following six legends: <Link to="/spirit/archmage">archmage</Link>, <Link to="/spirit/champion">champion</Link>, <Link to="/spirit/guardian">guardian</Link>, <Link to="/spirit/hierophant">hierophant</Link>, <Link to="/spirit/marshal">marshal</Link>, or <Link to="/spirit/trickster">trickster</Link>.</p>
<h3 id="ability-spirits-legendary-spirits">Legendary Spirits</h3>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms</Link><br/>The spirits a medium can channel draw their power both from the tales told about them and from their own souls, which echo with the remarkable deeds they performed in life. All spirits have stories - and some arise from people whose deeds shook the world and whose testaments have endured throughout the ages. These beings are legendary spirits, and they possess great power they can share with mediums who gain their favor.</p>
<p>Attaining the ability to channel a legendary spirit involves traveling to a certain location or performing a certain deed, swearing an oath, performing a ritual, and succeeding at an ability check. The type of check depends on the spirit, but the DC is always equal to 10 + 1/2 the medium's level. If the medium breaks the oath, the spirit will no longer answer when he calls. If the medium attempts to call another spirit of the legendary spirit's legend, the legendary spirit similarly departs forever.</p>
<ScrollContainer id="ability-spirits--table-0"><table>
<thead>
<tr>
<th>Outsider</th>
<th>Legend</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/spirit/abrogail_thrune_i">Abrogail Thrune I<IonRippleEffect /></Link></td>
<td>Hierophant</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/ambras_imre">Ambras Imre<IonRippleEffect /></Link></td>
<td>Trickster</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/ardril_the_would_be_king">Ardril, the Would-Be King<IonRippleEffect /></Link></td>
<td>Champion</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/arnisant">Arnisant<IonRippleEffect /></Link></td>
<td>Guardian</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/azghaad_i">Azghaad I<IonRippleEffect /></Link></td>
<td>Marshal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/beldam_i">Beldam I<IonRippleEffect /></Link></td>
<td>Trickster</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/butcher">Butcher<IonRippleEffect /></Link></td>
<td>Champion</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/cyricas">Cyricas<IonRippleEffect /></Link></td>
<td>Hierophant</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/daronlyr_xii">Daronlyr XII<IonRippleEffect /></Link></td>
<td>Archmage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/deceiver">Deceiver<IonRippleEffect /></Link></td>
<td>Trickster</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/father_of_legends">Father of Legends<IonRippleEffect /></Link></td>
<td>Marshal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/gennaris_iii">Gennaris III<IonRippleEffect /></Link></td>
<td>Champion</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/heretic">Heretic<IonRippleEffect /></Link></td>
<td>Hierophant</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/kelksiomides">Kelksiomides<IonRippleEffect /></Link></td>
<td>Hierophant</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/lich">Lich<IonRippleEffect /></Link></td>
<td>Archmage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/namzaruum">Namzaruum<IonRippleEffect /></Link></td>
<td>Marshal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/nex">Nex<IonRippleEffect /></Link></td>
<td>Archmage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/psomeira">Psomeira<IonRippleEffect /></Link></td>
<td>Champion</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/savith">Savith<IonRippleEffect /></Link></td>
<td>Champion</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/stavian_i">Stavian I<IonRippleEffect /></Link></td>
<td>Guardian</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/sulesh_the_great">Sulesh the Great<IonRippleEffect /></Link></td>
<td>Archmage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/taldaris">Taldaris<IonRippleEffect /></Link></td>
<td>Marshal</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/terminator">Terminator<IonRippleEffect /></Link></td>
<td>Guardian</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/twice_damned_prince">Twice-Damned Prince<IonRippleEffect /></Link></td>
<td>Trickster</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spirit/warmonger">Warmonger<IonRippleEffect /></Link></td>
<td>Marshal</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _evasion = {title: "Evasion", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A character with evasion can avoid damage from many area-effect attacks. If they succeed at a Reflex saving throw against an attack that normally deals half damage on a successful save, they instead take no damage. Evasion can be used only if a character is wearing light armor or no armor. A <Link to="/misc/helpless">helpless</Link> character does not gain the benefit of evasion.</p>
<p>This ability is gained at 2nd level by the <Link to="/class/rogue">rogue</Link>, <Link to="/class/monk">monk</Link>, <Link to="/class/unchained_rogue">unchained rogue</Link>, <Link to="/class/unchained_monk">unchained monk</Link>, <Link to="/sidekick/eidolon">eidolon</Link>, and <Link to="/sidekick/unchained_eidolon">unchained eidolon</Link>, and at 3rd level by <Link to="/sidekick/animal_companion">animal companions</Link>. A <Link to="/class/ranger">ranger</Link> gains it at 9th level, and it applies when wearing medium armor, too.</p>
</>};
const _improved_evasion = {title: "Improved Evasion", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>This is an improved version of <Link to="/ability/evasion">evasion</Link>. The character still takes no damage on a successful Reflex saving throw against attacks while wearing light armor or no armor, but henceforth they take only half damage on a failed save. A <Link to="/misc/helpless">helpless</Link> character does not gain the benefit of improved evasion.</p>
<p>This ability is gained by <Link to="/sidekick/familiar">familiars</Link> at 1st level, and at 9th level by the <Link to="/class/monk">monk</Link> and <Link to="/class/unchained_monk">unchained monk</Link>. Rogues and unchained rogues can access it via the <Link to="/talent/improved_evasion">improved evasion</Link> advanced rogue talent. An <Link to="/sidekick/eidolon">eidolon</Link> or <Link to="/sidekick/unchained_eidolon">unchained eidolon</Link> gains this ability at 14th level, and an <Link to="/sidekick/animal_companion">animal companion</Link> gains it at 15th level. The <Link to="/class/ranger">ranger</Link> gains it at 16th level, and it applies when wearing medium armor, too.</p>
</>};
const _uncanny_dodge = {title: "Uncanny Dodge", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A character with this ability can react to danger before their senses would normally allow them to do so. They cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do they lose their Dexterity bonus to AC if the attacker is invisible. They still loses their Dexterity bonus to AC if immobilized, or if an opponent successfully uses the <Link to="/rule/feint">feint</Link> action against them.</p>
<p>This ability is gained at 2nd level by the <Link to="/class/bloodrager">bloodrager</Link>, <Link to="/class/barbarian">barbarian</Link>, and <Link to="/class/unchained_barbarian">unchained barbarian</Link>. It is gained at 4th level by the <Link to="/class/rogue">rogue</Link>, <Link to="/class/unchained_rogue">unchained rogue</Link>, <Link to="/class/ninja">ninja</Link>, and <Link to="/class/skald">skald</Link>.</p>
<p>If a member of these classes already has uncanny dodge from a different class, they automatically gain <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> instead.</p>
</>};
const _improved_uncanny_dodge = {title: "Improved Uncanny Dodge", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A character with this ability can no longer be flanked. This defense denies rogues (or other classes with the <Link to="/ability/sneak_attack">sneak attack</Link> ability) the ability to sneak attack them by flanking them, unless the attacker has at least four more rogue levels (or levels in the class granting sneak attack) than the target has levels in the class that grants improved uncanny dodge.</p>
<p>This ability is gained at 5th level by the <Link to="/class/bloodrager">bloodrager</Link>, <Link to="/class/barbarian">barbarian</Link>, and <Link to="/class/unchained_barbarian">unchained barbarian</Link>, and at 8th level by the <Link to="/class/rogue">rogue</Link>, <Link to="/class/unchained_rogue">unchained rogue</Link>, <Link to="/class/ninja">ninja</Link>, and <Link to="/class/skald">skald</Link>.</p>
<p>If a character already has uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum sneak attack level required to flank the character.</p>
</>};
const _wild_empathy = {title: "Wild Empathy", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A character with this ability can improve the initial attitude of an animal. This ability functions as a <Link to="/skill/diplomacy">Diplomacy</Link> check to improve the attitude of a person. The character rolls 1d20 and adds their class level (the level of the class that grants them wild empathy) and their Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.</p>
<p>To use wild empathy, the character and the animal must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.</p>
<p>This ability can be used to influence a magical beast with an Intelligence score of 1 or 2, but the character takes a -4 penalty on the check.</p>
<p>This is a 1st-level ability of the <Link to="/class/druid">druid</Link>, <Link to="/class/ranger">ranger</Link>, <Link to="/class/hunter">hunter</Link>, and <Link to="/class/shifter">shifter</Link>.</p>
</>};
const _favored_enemy = {title: "Favored Enemy", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>At 1st level, a <Link to="/class/ranger">ranger</Link> selects a creature type from the options below. He gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of his selected type. Likewise, he gets a +2 bonus on weapon attack and damage rolls against them. A ranger may make Knowledge skill checks untrained when attempting to identify these creatures.</p>
<div className="columnar">
<ul>
<li>Aberration</li>
<li>Animal</li>
<li>Construct</li>
<li>Dragon</li>
<li>Fey</li>
<li>Humanoid (aquatic)</li>
<li>Humanoid (dwarf)</li>
<li>Humanoid (elf)</li>
<li>Humanoid (giant)</li>
<li>Humanoid (goblinoid)</li>
<li>Humanoid (gnoll)</li>
<li>Humanoid (gnome)</li>
<li>Humanoid (halfling)</li>
<li>Humanoid (human)</li>
<li>Humanoid (orc)</li>
<li>Humanoid (reptilian)</li>
<li>Humanoid (other subtype)</li>
<li>Magical beast</li>
<li>Monstrous humanoid</li>
<li>Ooze</li>
<li>Outsider (air)</li>
<li>Outsider (chaotic)</li>
<li>Outsider (earth)</li>
<li>Outsider (evil)</li>
<li>Outsider (fire)</li>
<li>Outsider (good)</li>
<li>Outsider (lawful)</li>
<li>Outsider (native)</li>
<li>Outsider (water)</li>
<li>Plant</li>
<li>Undead</li>
<li>Vermin</li>
</ul>
</div>
<p>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.</p>
<p>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated above. (Note that there are other types of humanoid to choose from - those called out specifically are merely the most common.) If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.</p>
</>};
const _favored_terrain = {title: "Favored Terrain", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>At 3rd level, a <Link to="/class/ranger">ranger</Link> may select a type of terrain from the Favored Terrains table. The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses).</p>
<ScrollContainer id="ability-favored_terrain--table-0"><table>
<thead>
<tr>
<th>Favored Terrain</th>
</tr>
</thead>
<tbody><tr>
<td>Cold (ice, glaciers, snow, and tundra)</td>
</tr>
<tr>
<td>Desert (sand and wastelands)</td>
</tr>
<tr>
<td>Forest (coniferous and deciduous)</td>
</tr>
<tr>
<td>Jungle</td>
</tr>
<tr>
<td>Mountain (including hills)</td>
</tr>
<tr>
<td>Plains</td>
</tr>
<tr>
<td>Planes (pick one, other than Material Plane)</td>
</tr>
<tr>
<td>Swamp</td>
</tr>
<tr>
<td>Underground (caves and dungeons)</td>
</tr>
<tr>
<td>Urban (buildings, streets, and sewers)</td>
</tr>
<tr>
<td>Water (above and below the surface)</td>
</tr>
</tbody></table></ScrollContainer>
<p>At 8th level and every five levels thereafter, the ranger may select an additional favored terrain. In addition, at each such interval, the skill bonus and initiative bonus in any one favored terrain (including the one just selected, if so desired), increases by +2.</p>
<p>If a specific terrain falls into more than one category of favored terrain, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.</p>
</>};
const _woodland_stride = {title: "Woodland Stride", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>Starting at 2nd level, a <Link to="/class/druid">druid</Link> may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect her.</p>
<p><Link to="/class/shifter">Shifters</Link> gain this feature at 3rd level. A <Link to="/class/hunter">hunter</Link> and their animal companion gain it at 5th level, while <Link to="/class/ranger">rangers</Link> gain it at 7th level.</p>
</>};
const _trackless_step = {title: "Trackless Step", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>Starting at 3rd level, a <Link to="/class/druid">druid</Link> leaves no trail in natural surroundings and cannot be tracked. She may choose to leave a trail if so desired.</p>
<p>A <Link to="/class/shifter">shifter</Link> gains this feature at 5th level.</p>
</>};
const _resist_natures_lure = {title: "Resist Nature's Lure", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>Starting at 4th level, a druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of <Link to="/type/fey">fey</Link>. This bonus also applies to spells and effects that utilize or target plants, such as <Link to="/spell/blight">blight</Link>, <Link to="/spell/entangle">entangle</Link>, <Link to="/spell/spike_growth">spike growth</Link>, and <Link to="/spell/warp_wood">warp wood</Link>.</p>
</>};
const _poison_use = {title: "Poison Use", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><Link to="/class/alchemist">Alchemists</Link> are trained in the use of poison and starting at 2nd level, cannot accidentally poison themselves when applying poison to a weapon.</p>
<p><Link to="/class/ninja">Ninjas</Link> gain this ability at 1st level.</p>
</>};
const _trapfinding = {title: "Trapfinding", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A <Link to="/class/rogue">rogue</Link> or <Link to="/class/investigator">investigator</Link> adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue or investigator can use Disable Device to disarm magic traps.</p>
</>};
const _lay_on_hands = {title: "Lay on Hands", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>Beginning at 2nd level, a <Link to="/class/paladin">paladin</Link> can heal wounds (her own or those of others) by touch. Each day she can use this ability a number of times equal to 1/2 her paladin level plus her Charisma modifier. With one use of this ability, a paladin can heal 1d6 hit points of damage for every two paladin levels she possesses. Using this ability is a standard action, unless the paladin targets herself, in which case it is a swift action. Despite the name of this ability, a paladin only needs one free hand to use this ability.</p>
<p>Alternatively, a paladin can use this healing power to deal damage to undead creatures, dealing 1d6 points of damage for every two levels the paladin possesses. Using lay on hands in this way requires a successful melee touch attack and doesn't provoke an attack of opportunity. Undead do not receive a saving throw against this damage.</p>
</>};
const _trap_sense = {title: "Trap Sense", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link>, <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>This is an intuitive sense that alerts a character to danger from traps, giving her a bonus on Reflex saves made to avoid traps and a dodge bonus to AC against attacks made by traps. This bonus is equal to <Link to="/misc/one_third">one-third</Link> of her class level.</p>
<p>Trap sense bonuses gained from multiple classes stack.</p>
<p>This ability is gained by <Link to="/class/investigator">investigators</Link>, <Link to="/class/rogue">rogues</Link>, and <Link to="/class/barbarian">barbarians</Link> at 3rd level.</p>
</>};
const _sneak_attack = {title: "Sneak Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link>, <Link to="/source/ultimate_combat">Ultimate Combat</Link><br/>Sneak Attack is a signature ability of the <Link to="/class/rogue">rogue</Link> (and <Link to="/class/unchained_rogue">unchained rogue</Link>).</p>
<p>If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.</p>
<p>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.</p>
<p>With a weapon that deals nonlethal damage (like a <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/whip">whip</Link>, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.</p>
<p>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with <Link to="/rule/concealment">concealment</Link>.</p>
<p>Rogues and <Link to="/class/ninja">ninjas</Link> gain this ability at 1st level. <Link to="/class/slayer">Slayers</Link> gain it at 3rd level, starting at 1d6 damage and increasing by 1d6 every three slayer levels.</p>
</>};
const _channel_energy = {title: "Channel Energy", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>At 1st level, regardless of alignment, any <Link to="/class/cleric">cleric</Link> can release a wave of energy by channeling the power of her faith through her holy (or unholy) symbol. This energy can be used to cause or heal damage, depending on the type of energy channeled and the creatures targeted.</p>
<p>A good cleric (or one who worships a good deity) channels positive energy and can choose to deal damage to undead creatures or to heal living creatures. An evil cleric (or one who worships an evil deity) channels negative energy and can choose to deal damage to living creatures or to heal undead creatures. A neutral cleric who worships a neutral deity (or one who is not devoted to a particular deity) must choose whether she channels positive or negative energy. Once this choice is made, it cannot be reversed. This decision also determines whether the cleric casts spontaneous <Link to="/main/inflict_spells">cure or inflict spells</Link>.</p>
<p>Channeling energy causes a <Link to="/misc/burst">burst</Link> that affects all creatures of one type (either undead or living) in a 30-foot radius centered on the cleric. The amount of damage dealt or healed is equal to 1d6 points of damage plus 1d6 points of damage for every two cleric levels beyond 1st (2d6 at 3rd, 3d6 at 5th, and so on). Creatures that take damage from channeled energy receive a Will save to halve the damage. The DC of this save is equal to 10 + 1/2 the cleric's level + the cleric's Charisma modifier. Creatures healed by channeled energy cannot exceed their maximum hit point total - all excess healing is lost. A cleric may channel energy a number of times per day equal to 3 + her Charisma modifier. This is a standard action that does not provoke an attack of opportunity. A cleric can choose whether or not to include herself in this effect. A cleric must be able to present her holy symbol to use this ability.</p>
<p><Link to="/class/warpriest">Warpriests</Link>, <Link to="/class/paladin">paladins</Link>, and <Link to="/class/antipaladin">antipaladins</Link> gain this ability at 4th level. Warpriests channel positive or negative energy depending on whether they chose "cure" or "inflict" spells at 1st level. Paladins can only channel positive energy, while antipaladins can only channel negative energy. Using this ability costs two uses of the fervor (warpriest), lay on hands (paladin), or touch of corruption (antipaladin) ability.</p>
</>};
const _rage_powers = {hasJL:true,title: "Rage Powers", topLink: ["Barbarian","class/barbarian"], jsx: <div className="compilation"><div className="jumpList" id="ability-rage_powers-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-rage_powers-elemental-rage-powers">Elemental Rage Powers</InnerLink></li><li><InnerLink toTop to="ability-rage_powers-blood-rage-powers">Blood Rage Powers</InnerLink></li></ul></div><h2 id="ability-rage_powers-rage-powers">Rage Powers</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>As a <Link to="/class/barbarian">barbarian</Link> gains levels, she learns to use her rage in new ways. Starting at 2nd level, a barbarian gains a rage power. She gains another rage power for every two levels of barbarian attained after 2nd level. A barbarian gains the benefits of rage powers only while raging, and some of these powers require the barbarian to take an action first. Unless otherwise noted, a barbarian cannot select an individual power more than once.</p>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>At 3rd level and every 3 levels thereafter, a <Link to="/class/skald">skald</Link> learns a rage power that affects the skald and any allies under the influence of his inspired rage. This cannot be a rage power that requires the creature to spend a standard action or rounds of rage to activate it. For example, the skald cannot choose <Link to="/ragepower/terrifying_howl">terrifying howl</Link> (which requires a standard action to activate), but can choose <Link to="/ragepower/knockback">knockback</Link> (which is made in place of a melee attack).</p>
<hr/>
<p><strong className="hl"><Link to="/ragepower/animal_fury">Animal Fury:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-1" id="ability-rage_powers-ref-A-1" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> While raging, the barbarian gains a bite attack. If used as part of a full attack action, the bite attack is made at the barbarian's full base attack bonus -5. If the bite hits, it deals 1d4 points of damage (assuming the barbarian is Medium; 1d3 points of damage if Small) plus half the barbarian's Strength modifier. A barbarian can make a bite attack as part of the action to maintain or break free from a grapple. This attack is resolved before the grapple check is made. If the bite attack hits, any grapple checks made by the barbarian against the target this round are at a +2 bonus.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_animal_fury">Greater Animal Fury:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-B-1" id="ability-rage_powers-ref-B-1" data-hash-target to="ability-rage_powers-B">2</InnerLink></sup> This power works as animal fury, but the barbarian's bite attack deals damage as if she were <Link to="/misc/one_size_category_larger">one size category larger</Link>. A barbarian must have the <Link to="/ragepower/animal_fury">animal fury</Link> rage power to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/bloody_bite">Bloody Bite:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-C-1" id="ability-rage_powers-ref-C-1" data-hash-target to="ability-rage_powers-C">3</InnerLink></sup> This rage power is available to <Link to="/race/half_orc">half-orc</Link> barbarians. The barbarian's bite attack deals 1d6 points of bleed damage in addition to its other effects. The barbarian must have the <Link to="/ragepower/animal_fury">animal fury</Link> rage power or a natural bite attack before selecting this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/feasting_bite">Feasting Bite:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-C-2" id="ability-rage_powers-ref-C-2" data-hash-target to="ability-rage_powers-C">3</InnerLink></sup> This rage power is available to <Link to="/race/half_orc">half-orc</Link> barbarians. When the barbarian confirms a critical hit with her bite attack, she regains a number of hit points equal to half the damage dealt. The barbarian must have the <Link to="/ragepower/bloody_bite">bloody bite</Link> rage power and either the <Link to="/ragepower/animal_fury">animal fury</Link> rage power or a natural bite attack before selecting this power. Activating this ability consumes 1 round of rage.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/penetrating_bite">Penetrating Bite:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-B-2" id="ability-rage_powers-ref-B-2" data-hash-target to="ability-rage_powers-B">2</InnerLink></sup> When using the animal fury rage power while raging, the barbarian's bite is able to pierce most resistances. At 4th level, her bite is treated as a magic weapon for the purpose of overcoming damage reduction. At 7th level, her bite is also treated as cold iron and silver for the purpose of overcoming damage reduction. At 10th level, her bite is also treated as a chaotic weapon for the purpose of overcoming damage reduction. At 16th level, her bite is treated as an <Link to="/eq-material/adamantine">adamantine</Link> weapon for the purpose of overcoming damage reduction and bypassing hardness. A barbarian must have the <Link to="/ragepower/animal_fury">animal fury</Link> rage power and be at least 4th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/savage_jaw">Savage Jaw:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-B-3" id="ability-rage_powers-ref-B-3" data-hash-target to="ability-rage_powers-B">2</InnerLink></sup> While raging, the barbarian can open her jaw wide and latch her teeth firmly onto her opponent. While using the animal fury power, the barbarian can activate this power as a free action and gain the <Link to="/umr/grab">grab</Link> ability with her bite attack until the start of her next turn. This power can be used only once per rage. A barbarian must have the <Link to="/ragepower/animal_fury">animal fury</Link> rage power to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/vipers_kiss">Viper's Kiss:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-D-1" id="ability-rage_powers-ref-D-1" data-hash-target to="ability-rage_powers-D">4</InnerLink></sup> The barbarian can drink 1 dose of an ingested poison as a move action (instead of a standard action) as long as she starts the turn with the poison in her hand. She can hold this dose within her mouth for a number of rounds equal to her Constitution modifier (minimum 1 round) without suffering harmful effects. If the barbarian still holds the poison in her mouth after this time, she consumes the poison. While the dose is held within her mouth, the barbarian's next successful bite attack applies the effect of the poison with an immediate onset; this consumes the dose. A barbarian must have a bite attack (at least when raging, such as that granted by <Link to="/ragepower/animal_fury">animal fury</Link>) to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/vipers_breath">Viper's Breath:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-D-2" id="ability-rage_powers-ref-D-2" data-hash-target to="ability-rage_powers-D">4</InnerLink></sup> While holding a dose of poison in her mouth, the barbarian can exhale a 15-foot cone of inhaled poison. Anyone caught in the spray must succeed at a saving throw against the poison with a DC equal to the poison's DC - 4 or suffer the poison's effects with an immediate onset. A barbarian must have <Link to="/ragepower/vipers_kiss">viper's kiss</Link> to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/enhance_venom">Enhance Venom:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-D-3" id="ability-rage_powers-ref-D-3" data-hash-target to="ability-rage_powers-D">4</InnerLink></sup> The barbarian adds her Constitution modifier to the DC of any poison she delivers using viper's kiss or viper's breath. A barbarian must have <Link to="/ragepower/vipers_breath">viper's breath</Link> and <Link to="/ragepower/vipers_kiss">viper's kiss</Link> to select this rage power.</p>
</blockquote>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/armor_ripper">Armor Ripper:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-E-1" id="ability-rage_powers-ref-E-1" data-hash-target to="ability-rage_powers-E">5</InnerLink></sup> While raging, you gain a +2 bonus on combat maneuver checks made to <Link to="/rule/sunder">sunder</Link> with any of your natural attacks.</p>
<p><strong className="hl"><Link to="/ragepower/auspicious_mark">Auspicious Mark:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-1" id="ability-rage_powers-ref-F-1" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> The barbarian has been marked by the spirits, as indicated by an impressive tattoo, scar, or birthmark she possesses. Once per rage, as a swift action that costs 2 rounds of rage, the barbarian can call upon the spirits' favor. Using auspicious mark grants her a +1d6 bonus on one d20 roll she has just made. She can call on the auspicious mark after seeing the result of the d20 roll.</p>
<p><strong className="hl"><Link to="/ragepower/autumn_rage">Autumn Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-1" id="ability-rage_powers-ref-G-1" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> The barbarian becomes a servant of the harvest. While raging, she gains a +2 bonus on combat maneuver checks to <Link to="/rule/reposition">reposition</Link> or <Link to="/rule/trip">trip</Link>. She also gains this bonus on attack rolls to confirm critical hits. A barbarian can have only one season-themed rage power, choosing between <Link to="/ragepower/spring_rage">spring</Link>, <Link to="/ragepower/summer_rage">summer</Link>, autumn, or <Link to="/ragepower/winter_rage">winter</Link> rage.</p>
<p><strong className="hl"><Link to="/ragepower/bloody_fist">Bloody Fist:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-H-1" id="ability-rage_powers-ref-H-1" data-hash-target to="ability-rage_powers-H">8</InnerLink></sup> While raging, the barbarian may attempt to punch through an opponent's flesh and rip out one of its vital organs. In order to do so, the barbarian must confirm a critical hit against an opponent with a natural attack or unarmed strike. The barbarian deals damage as normal for a critical hit and the opponent must succeed at a Fortitude save (DC = 10 + 1/2 the barbarian's class level + the barbarian's Strength modifier) or take 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link> as one of its vital organs is ripped free from its body. This power can only be used once per rage. A barbarian must be at least 12th level to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/feast_of_blood">Feast of Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-H-2" id="ability-rage_powers-ref-H-2" data-hash-target to="ability-rage_powers-H">8</InnerLink></sup> While raging, the barbarian may feast on the organs of her foes and absorb their power. After successfully ripping out a creature's vital organ, the barbarian may eat the organ within 1 minute of extracting it as a full-round action that provokes attacks of opportunity. Once the organ is consumed, the barbarian recovers a number of hit points equal to the Hit Dice of the organ's owner. In addition, the barbarian gains any energy immunities or resistances the victim had, though the effectiveness of these resistances is halved (for instance, a barbarian who eats the heart of a creature with resist cold 10 would gain resist cold 5; energy immunities are reduced to resist energy 20). This energy resistance lasts for a number of rounds equal to half the Hit Dice of the creature whose organ was consumed. A barbarian must have the <Link to="/ragepower/bloody_fist">bloody fist</Link> rage power to select this rage power. A barbarian must be at least 14th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/boars_charge">Boar's Charge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-E-2" id="ability-rage_powers-ref-E-2" data-hash-target to="ability-rage_powers-E">5</InnerLink></sup> While raging, when you hit with a gore attack as part of a charge, you automatically score a critical threat. You must still confirm the critical hit as normal. You must be at least 12th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/boasting_taunt">Boasting Taunt:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-1" id="ability-rage_powers-ref-I-1" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian can incite a creature to attack her by making an Intimidate check to demoralize. If the check succeeds, the target is also <Link to="/misc/shaken">shaken</Link> as long as the barbarian is visible and raging or until it makes a melee attack against the barbarian. The barbarian receives a +2 circumstance bonus on this check for every alcoholic drink she has consumed during this rage. This is a language-dependent mind-affecting effect, and it relies on audible components. The barbarian must be at least 6th level to select this power.</p>
<p><strong className="hl"><Link to="/ragepower/body_bludgeon">Body Bludgeon:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-2" id="ability-rage_powers-ref-F-2" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, if the barbarian pins an opponent that is smaller than her, she can then use that opponent as a two-handed <Link to="/misc/improvised_weapon">improvised weapon</Link> that deals 1d8 points of bludgeoning damage, assuming the opponent is sized Small. Larger or smaller creatures used as a bludgeon deal damage based on their size using this base damage. A size Tiny creature deals 1d6 points of damage, a size Medium creature deals 1d10 points of damage, and so on. The barbarian can make a single attack using the pinned opponent as part of the action she uses to maintain the grapple, using her highest attack bonus. Whenever the barbarian hits using the pinned opponent as a weapon, she deals damage to her target normally, and the grappled opponent used as a bludgeon also takes the same damage she dealt to the target. If the pinned opponent is unable to resist being pinned for any reason, the barbarian can use that opponent as an improvised weapon without grappling or pinning the opponent, until the creature is reduced to 0 or fewer hit points, at which point the creature becomes useless as an improvised weapon. A barbarian must be at least 10th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/brawler">Brawler:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-2" id="ability-rage_powers-ref-I-2" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian is treated as if she has <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>. If she already has the feat, her unarmed strikes deal 1d6 points of damage (1d4 if she is Small).</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_brawler">Greater Brawler:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-3" id="ability-rage_powers-ref-I-3" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian is treated as if she has <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> when making unarmed strike attacks. A barbarian must have the <Link to="/ragepower/brawler">brawler</Link> rage power to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/breathtaker">Breathtaker:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-J-1" id="ability-rage_powers-ref-J-1" data-hash-target to="ability-rage_powers-J">10</InnerLink></sup> The barbarian's blows take the air from her foes' lungs. While raging, whenever the barbarian makes a successful melee attack against an opponent that is holding its breath, in addition to any other effects caused by that attack, the opponent loses a number of rounds of breath equal to the barbarian's Strength modifier.</p>
<p><strong className="hl"><Link to="/ragepower/clear_mind">Clear Mind:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-2" id="ability-rage_powers-ref-A-2" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> A barbarian may reroll a failed Will save. This power is used as an immediate action after the first save is attempted, but before the results are revealed by the GM. The barbarian must take the second result, even if it is worse. A barbarian must be at least 8th level before selecting this power. This power can only be used once per rage.</p>
<p><strong className="hl"><Link to="/ragepower/come_and_get_me">Come and Get Me:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-4" id="ability-rage_powers-ref-I-4" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, as a free action the barbarian may leave herself open to attack while preparing devastating counterattacks. Enemies gain a +4 bonus on attack and damage rolls against the barbarian until the beginning of her next turn, but every attack against the barbarian provokes an attack of opportunity from her, which is resolved prior to resolving each enemy attack. A barbarian must be at least 12th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/contagious_rage">Contagious Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-2" id="ability-rage_powers-ref-G-2" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> The barbarian howls during combat, agitating nearby fauna. Willing animals and magical beasts within 30 feet of the barbarian gain the benefits of the <Link to="/spell/rage">rage</Link> spell for as long as she maintains her rage. After the barbarian's rage ends, creatures affected by her rage are fatigued for the same number of rounds as the barbarian. A barbarian must be at least 6th level to choose this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/deathless_frenzy">Deathless Frenzy:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-E-3" id="ability-rage_powers-ref-E-3" data-hash-target to="ability-rage_powers-E">5</InnerLink></sup> While raging, you ignore the effects of being at 0 or fewer hit points until you have been at 0 or fewer hit points for 1 round, at which point the appropriate consequences for your current hit point total take effect. Even death can be postponed this way, potentially allowing you to survive if you receive sufficient healing before the round is up. You must be at least 12th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/disemboweling_tusks">Disemboweling Tusks:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-E-4" id="ability-rage_powers-ref-E-4" data-hash-target to="ability-rage_powers-E">5</InnerLink></sup> While raging, when you confirm a critical hit with your gore attack, you deal 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link> in addition to the normal damage for the gore attack. You must be at least 10th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/dissipating_rage">Dissipating Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-3" id="ability-rage_powers-ref-G-3" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> When the barbarian rages, her feverish frenzy and hot breath burn or blow fog, smoke and similar effects away from her. The barbarian and creatures adjacent to her do not gain <Link to="/rule/concealment">concealment</Link> from obfuscating effects like fog or precipitation. Magical effects that require more than a strong wind to dissipate are not affected by this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/eclipsing_rage">Eclipsing Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-4" id="ability-rage_powers-ref-G-4" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> While the barbarian is raging, the <Link to="/rule/light_level">light level</Link> within 10 feet of her lowers by one step. She can't decrease the light level below normal darkness with this ability. Multiple barbarians with this rage power don't further reduce the light level. A barbarian must be at least 6th level to choose this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_eclipsing_rage">Greater Eclipsing Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-5" id="ability-rage_powers-ref-G-5" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> Whenever the barbarian rages, the <Link to="/rule/light_level">light level</Link> within 20 feet of her lowers by two steps instead of one. She still can't decrease the light level below normal darkness with this ability. A barbarian must be at least 10th level and have the <Link to="/ragepower/eclipsing_rage">eclipsing rage</Link> rage power to choose this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_elemental_rage">Lesser Elemental Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-5" id="ability-rage_powers-ref-I-5" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> As a swift action, the barbarian can cause her melee attacks to deal an additional 1d6 points of energy damage (acid, cold, electricity, or fire) for 1 round. A barbarian must be at least 4th level to select this rage power. This power can only be used once per rage.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/elemental_rage">Elemental Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-6" id="ability-rage_powers-ref-I-6" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, all of the barbarian's melee attacks deal an additional 1d6 points of energy damage (acid, cold, electricity, or fire). The type is chosen when the barbarian begins her rage. A barbarian must have the <Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link> power to select this rage power. A barbarian must be at least 8th level to select this rage power. Note that the barbarian can still use her lesser elemental rage power while using this rage power, but she must select a different energy type.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_elemental_rage">Greater Elemental Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-7" id="ability-rage_powers-ref-I-7" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, all of the barbarian's critical hits made with melee weapons deal an additional 1d10 points of energy damage (2d10 if the weapon deals &times;3 damage on a critical hit, 3d10 if the weapon deals &times;4 on a critical hit). The type of this damage is the same as the type chosen for the elemental rage power. A barbarian must have the <Link to="/ragepower/elemental_rage">elemental rage</Link> power to select this rage power. A barbarian must be at least 12th level to select this rage power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/energy_resistance">Energy Resistance:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-8" id="ability-rage_powers-ref-I-8" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian gains resistance to one energy type (acid, cold, electricity, fire, or sonic) equal to 1/2 her barbarian level (minimum 1). The energy type is chosen when this rage power is selected and it cannot be changed. This rage power can be selected more than once. Its effects do not stack. Each time is applies to a different energy type.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_energy_resistance">Greater Energy Resistance:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-9" id="ability-rage_powers-ref-I-9" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> Once per rage, a barbarian can reduce damage by half from a single attack against which she has energy resistance (halve the damage, then apply resistance). A barbarian must have the <Link to="/ragepower/energy_resistance">energy resistance</Link> rage power to select this rage power. A barbarian must be at least 8th level to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/energy_absorption">Energy Absorption:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-10" id="ability-rage_powers-ref-I-10" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian can absorb energy from a single attack of her chosen energy type once per rage. She does not make a saving throw against the effect but takes no damage from it, instead gaining 1 temporary hit point per 3 points of damage the attack would have inflicted. These <Link to="/rule/temporary_hit_points">temporary hit points</Link> last until the end of the barbarian's rage. A barbarian must have the <Link to="/ragepower/greater_energy_resistance">greater energy resistance</Link> rage power to select this rage power. A barbarian must be at least 12th level to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/energy_eruption">Energy Eruption:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-11" id="ability-rage_powers-ref-I-11" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian can absorb energy from a single attack and unleash it upon her enemies once per rage. She does not make a saving throw against the effect but takes no damage from it. At any point during the remainder of her rage she can unleash the stored energy as a breath weapon in either a 60-foot line or 30-foot cone. The breath weapon inflicts damage equal to the damage from the attack absorbed by the barbarian, but creatures within the area may make a Reflex save (DC 10 + 1/2 the barbarian's level + the barbarian's Constitution modifier) for half damage even if the original effect did not allow a save. A barbarian must have the <Link to="/ragepower/energy_absorption">energy absorption</Link> rage power to select this rage power. A barbarian must be at least 16th level to select this rage power.</p>
</blockquote>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/erratic_charge">Erratic Charge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-K-1" id="ability-rage_powers-ref-K-1" data-hash-target to="ability-rage_powers-K">11</InnerLink></sup> As part of the full-round action to perform a charge attack against a creature at least 20 feet away, the barbarian can move 5 feet in any direction before making the charge. This movement is not a 5-foot step and provokes attacks of opportunity as normal, and using this option reduces the maximum distance of the charge by 10 feet.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_erratic_charge">Greater Erratic Charge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-K-2" id="ability-rage_powers-ref-K-2" data-hash-target to="ability-rage_powers-K">11</InnerLink></sup> The barbarian can move 10 feet when using erratic charge. If she does so, the creature she is charging must be at least 20 feet away and the movement reduces the maximum distance of her charge by 20 feet. A barbarian must be at least 8th level and must have the <Link to="/ragepower/erratic_charge">erratic charge</Link> rage power before selecting this power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/fearless_rage">Fearless Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-3" id="ability-rage_powers-ref-A-3" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> While raging, the barbarian is immune to the shaken and frightened conditions. A barbarian must be at least 12th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/ferocious_beast">Ferocious Beast:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-L-1" id="ability-rage_powers-ref-L-1" data-hash-target to="ability-rage_powers-L">12</InnerLink></sup> While the barbarian is raging, her animal companion also gains the benefits of rage (including greater rage, mighty rage, and tireless rage), though the barbarian must spend 1 additional round of rage per round if her companion begins or ends its turn adjacent to her, and 2 additional rounds of rage per round if not.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_ferocious_beast">Greater Ferocious Beast:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-L-2" id="ability-rage_powers-ref-L-2" data-hash-target to="ability-rage_powers-L">12</InnerLink></sup> While the barbarian is raging, her animal companion shares the benefits of the barbarian's rage powers that are constant in effect. It gains no benefit from rage powers that require actions to activate, even if they are free actions. A barbarian must have the <Link to="/ragepower/ferocious_beast">ferocious beast</Link> rage power and be at least 8th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/ferocious_mount">Ferocious Mount:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-12" id="ability-rage_powers-ref-I-12" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging and mounted, the barbarian's mount also gains the benefits of rage (including greater rage and mighty rage) as long as the barbarian is mounted or adjacent to it. While her mount is raging in this way, she must spend one additional round of rage per round. She can elect not to pay this cost, in which case her mount does not rage.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_ferocious_mount">Greater Ferocious Mount:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-13" id="ability-rage_powers-ref-I-13" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging and mounted, the barbarian's mount gains the benefits of any rage powers that are constant in effect when the barbarian is raging. It does not gain the benefit of any rage powers that require actions to activate, even if they are free actions. A barbarian must have the <Link to="/ragepower/ferocious_mount">ferocious mount</Link> rage power to select this rage power. A barbarian must be at least 8th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/ferocious_trample">Ferocious Trample:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-14" id="ability-rage_powers-ref-I-14" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging and mounted, the barbarian's mount gains the <Link to="/umr/trample">trample</Link> special attack. This attack inflicts 1d8 points of damage for a Medium mount, 2d6 for a Large mount, or 2d8 for a Huge mount, plus 1-1/2 times the mount's Strength modifier. A successful Reflex save (DC 10 + 1/2 the barbarian's level + the mount's Strength modifier) halves this damage. Creatures in the mount's path or that threaten squares it passes through may make attacks of opportunity against either the barbarian or the mount, but not both. A barbarian must have the <Link to="/ragepower/ferocious_mount">ferocious mount</Link> rage power to select this rage power. A barbarian must be at least 8th level to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_ferocious_trample">Greater Ferocious Trample:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-15" id="ability-rage_powers-ref-I-15" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> A barbarian's mount can affect creatures up to its own size with its ferocious trample. In addition, it can make an <Link to="/rule/overrun">overrun</Link> combat maneuver check as a free action against a creature that fails its Reflex save (or chooses not to save in order to take an attack of opportunity) against its trample. A barbarian must have the <Link to="/ragepower/ferocious_trample">ferocious trample</Link> rage power to select this rage power. A barbarian must be at least 12th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/spirit_steed">Spirit Steed:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-16" id="ability-rage_powers-ref-I-16" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging and mounted, the barbarian's mount gains DR/magic equal to 1/2 the barbarian's level. The mount's natural weapons count as magical for the purpose of overcoming damage reduction. A barbarian must have the <Link to="/ragepower/ferocious_mount">ferocious mount</Link> rage power to select this rage power. A barbarian must be at least 6th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/fierce_fortitude">Fierce Fortitude:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-1" id="ability-rage_powers-ref-M-1" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character gains a +4 bonus on saving throws against diseases and poison. A skald must be trained in Intimidate to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/flesh_wound">Flesh Wound:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-17" id="ability-rage_powers-ref-I-17" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> Once per rage, the barbarian can try to avoid serious harm from an attack. The barbarian must make a Fortitude save with a DC equal to the damage that would be dealt by the attack. The barbarian's armor check penalty applies on this saving throw. If the save succeeds, the barbarian takes half damage from the attack and the damage is nonlethal. The barbarian must elect to use this ability after the attack roll is made, but before the damage is rolled. A barbarian must be at least 10th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/flight_response">Flight Response:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-N-1" id="ability-rage_powers-ref-N-1" data-hash-target to="ability-rage_powers-N">14</InnerLink></sup> When a barbarian with this rage power attempts a saving throw against a fear effect, she can enter a rage as an immediate action (as long as she would normally be able to enter rage). This consumes 3 rounds of the barbarian's daily allotment of rage rounds, but the barbarian can maintain the rage each round on her turn normally. Any benefits from the barbarian's rage apply immediately, so she gains her bonus on Will saves against the effect that required the initial saving throw. Unlike most rage powers, this rage power's effects are useful only when the barbarian is not raging, so a skald can't grant this rage power to allies with raging song.</p>
<p><strong className="hl"><Link to="/ragepower/fueled_by_vengeance">Fueled by Vengeance:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-E-5" id="ability-rage_powers-ref-E-5" data-hash-target to="ability-rage_powers-E">5</InnerLink></sup> While raging, whenever you deal weapon damage to a creature that dealt damage to you since the end of your last turn, add 1 round to your remaining number of rounds of rage for the current day. You can gain no more than 1 extra round of rage each round. You must be at least 6th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/furious_draw">Furious Draw:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-K-3" id="ability-rage_powers-ref-K-3" data-hash-target to="ability-rage_powers-K">11</InnerLink></sup> The barbarian is treated as having the <Link to="/feat/quick_draw">Quick Draw</Link> feat.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/furious_barrage">Furious Barrage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-K-4" id="ability-rage_powers-ref-K-4" data-hash-target to="ability-rage_powers-K">11</InnerLink></sup> The barbarian is treated as having the <Link to="/feat/rapid_shot">Rapid Shot</Link> feat, but only for the purpose of attacking with thrown weapons. She need not meet the feat's prerequisites. A barbarian must be at least 4th level and must have the <Link to="/ragepower/furious_draw">furious draw</Link> rage power before selecting this power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/ghost_rager">Ghost Rager:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-3" id="ability-rage_powers-ref-F-3" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, the barbarian deals normal damage to incorporeal creatures even when using nonmagical weapons. She also gains a +3 morale bonus to touch AC, which increases by 1 at 8th level and every 4 levels thereafter (to a maximum of +7 at 20th level). This can't raise her touch AC above her full AC. A barbarian must be at least 6th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/good_for_what_ails_you">Good for What Ails You:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-18" id="ability-rage_powers-ref-I-18" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian who takes a drink of alcohol may attempt a new saving throw against one of the following conditions that may be affecting her: blinded, confused, dazzled, deafened, exhausted, fatigued, frightened, nauseated, panicked, shaken, or sickened. If she succeeds at the save, the effect is suppressed for the duration of the rage. She also may attempt a new saving throw if poisoned; a successful save counts against those required for a cure, but a failed save has no ill effect.</p>
<p><strong className="hl"><Link to="/ragepower/ground_breaker">Ground Breaker:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-19" id="ability-rage_powers-ref-I-19" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> Once per rage, the barbarian can attack the floor around her as a standard action. This attack automatically hits and deals damage normally. If the barbarian manages to deal more damage than the floor's hardness, the space she occupies and all of the squares adjacent to her become <Link to="/rule/difficult_terrain">difficult terrain</Link>. Creatures in these squares, except the barbarian, must make a DC 15 Reflex save or be knocked <Link to="/rule/prone">prone</Link>. A barbarian must be at least 6th level to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_ground_breaker">Greater Ground Breaker:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-4" id="ability-rage_powers-ref-F-4" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When using the ground breaker rage power, the barbarian can extend the radius of the effect by 5 feet. This rage power can be selected up to three times, and its effects stack. A barbarian must have the <Link to="/ragepower/ground_breaker">ground breaker</Link> rage power and be at least 8th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/guarded_life">Guarded Life:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-20" id="ability-rage_powers-ref-I-20" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, if the barbarian is reduced below 0 hit points, 1 hit point of lethal damage per barbarian level is converted to nonlethal damage. If the barbarian is at negative hit points due to lethal damage, she immediately <Link to="/misc/stabilize">stabilizes</Link>.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_guarded_life">Greater Guarded Life:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-5" id="ability-rage_powers-ref-F-5" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When using the guarded life rage power, 1 additional hit point of lethal damage per barbarian level is converted to nonlethal damage. A barbarian must have the <Link to="/ragepower/guarded_life">guarded life</Link> rage power and be at least 6th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/guarded_stance">Guarded Stance:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-4" id="ability-rage_powers-ref-A-4" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains a +1 dodge bonus to her Armor Class against melee attacks for a number of rounds equal to the barbarian's current Constitution modifier (minimum 1). This bonus increases by +1 for every 6 levels the barbarian has attained. Activating this ability is a move action that does not provoke an attack of opportunity.</p>
<p><strong className="hl"><Link to="/ragepower/hissing_rage">Hissing Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-6" id="ability-rage_powers-ref-G-6" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> Once per hour, the barbarian can spit venom at an adjacent enemy as a standard action. She must make a touch attack to successfully spit on a foe in this way, but she can also apply this poison as a swift action when she hits with a bite attack.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Hissing Rage Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Bite-contact or injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the barbarian's level + her Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/lesser_hurling">Lesser Hurling:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-21" id="ability-rage_powers-ref-I-21" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> As a full-round action while raging, the barbarian can lift and hurl an object up to one size category smaller than herself with both hands or two size categories smaller with one hand as an improvised weapon with a range increment of 10 feet. This inflicts damage as a <Link to="/rule/falling_objects">falling object</Link> plus the barbarian's Strength bonus. This damage is halved if the object is not made of stone, metal, or similar material. This is a ranged touch attack, and the target may attempt a Reflex save (DC 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) for half damage. The barbarian may apply <Link to="/feat/power_attack">Power Attack</Link> to this attack as a one- or two-handed weapon, as appropriate.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/hurling">Hurling:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-22" id="ability-rage_powers-ref-I-22" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> As lesser hurling, but the barbarian can increase the range increment to 20 feet or increase the size of a hurled object by one size category. A barbarian must have the <Link to="/ragepower/lesser_hurling">lesser hurling</Link> rage power to select this rage power. A barbarian must be at least 8th level to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_hurling">Greater Hurling:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-23" id="ability-rage_powers-ref-I-23" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> As hurling, but the barbarian can increase the range increment to 30 feet or increase the size of a hurled object by two size categories. A barbarian must have the <Link to="/ragepower/hurling">hurling</Link> rage power to select this rage power. A barbarian must be at least 12th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/hurling_charge">Hurling Charge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-24" id="ability-rage_powers-ref-I-24" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging and making a charge attack, the barbarian may draw and throw a hurled weapon during her charge, gaining the normal +2 attack roll bonus on the thrown weapon attack as well as on the melee attack at the end of the charge. The barbarian must move at least 10 feet before using a thrown weapon and at least 10 additional feet before making a melee attack at the end of her charge. The barbarian must have a thrown weapon in hand or have one hand free at the beginning of her charge. A barbarian must have the <Link to="/ragepower/lesser_hurling">lesser hurling</Link> rage power to select this rage power. A barbarian must be at least 6th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/impelling_disarm">Impelling Disarm:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-O-1" id="ability-rage_powers-ref-O-1" data-hash-target to="ability-rage_powers-O">15</InnerLink></sup> Once per rage, the barbarian can make a <Link to="/rule/disarm">disarm</Link> attempt against a target in place of a melee attack. This attempt does not provoke attacks of opportunity. If successful, the barbarian sends the target's weapon flying - either straight at the target, or spinning away to strike another foe up to 20 feet away. This ranged attack has a -4 penalty, as it is treated as <Link to="/rule/weapons">throwing a weapon that isn't designed to be thrown</Link>, even if the weapon disarmed is a thrown weapon. The barbarian makes a ranged attack, which doesn't provoke attacks of opportunity, at either the target of his disarm maneuver or another creature within 20 feet. If the barbarian is aiming for the disarmed creature, the foe doesn't count as being in melee for determining any penalty on the ranged attack from throwing a ranged weapon into melee. If the ranged attack hits, the disarmed weapon deals damage as if the barbarian had thrown it. The barbarian can choose to aim the disarmed weapon at a square rather than at a foe. A barbarian must be at least 4th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/increased_damage_reduction">Increased Damage Reduction:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-5" id="ability-rage_powers-ref-A-5" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian's damage reduction increases by 1/-. This increase is always active while the barbarian is raging. A barbarian can select this rage power up to three times. Its effects stack. A barbarian must be at least 8th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/internal_fortitude">Internal Fortitude:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-6" id="ability-rage_powers-ref-A-6" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> While raging, the barbarian is immune to the sickened and nauseated conditions. A barbarian must be at least 8th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/intimidating_glare">Intimidating Glare:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-7" id="ability-rage_powers-ref-A-7" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian can make an Intimidate check against one adjacent foe as a move action. If the barbarian successfully demoralizes her opponent, the foe is shaken for 1d4 rounds + 1 round for every 5 points by which the barbarian's check exceeds the DC.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/battle_roar">Battle Roar:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-2" id="ability-rage_powers-ref-M-2" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> When the character successfully demoralizes an opponent using intimidating glare, he also deals 1d6 points of sonic damage to that opponent. A character must be at least 6th level and have the <Link to="/ragepower/intimidating_glare">intimidating glare</Link> rage power to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/terrifying_howl">Terrifying Howl:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-8" id="ability-rage_powers-ref-A-8" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian unleashes a terrifying howl as a standard action. All shaken enemies within 30 feet must make a Will save (DC equal to 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) or be panicked for 1d4+1 rounds. Once an enemy has made a save versus terrifying howl (successful or not), it is immune to this power for 24 hours. A barbarian must have the <Link to="/ragepower/intimidating_glare">intimidating glare</Link> rage power to select this rage power. A barbarian must be at least 8th level before selecting this power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/inured_to_the_dead">Inured to the Dead:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-P-1" id="ability-rage_powers-ref-P-1" data-hash-target to="ability-rage_powers-P">16</InnerLink></sup> Once per rage, when the barbarian fails a saving throw against an effect created by an undead creature, she can reroll the saving throw. She must use the second result, even if it is worse. This does not require spending an action. A barbarian must be at least 4th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/knockback">Knockback:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-9" id="ability-rage_powers-ref-A-9" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> Once per round, the barbarian can make a <Link to="/rule/bull_rush">bull rush</Link> attempt against one target in place of a melee attack. If successful, the target takes damage equal to the barbarian's Strength modifier and is moved back as normal. The barbarian does not need to move with the target if successful. This does not provoke an attack of opportunity.</p>
<p><strong className="hl"><Link to="/ragepower/knockdown">Knockdown:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-25" id="ability-rage_powers-ref-I-25" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> Once per rage, the barbarian can make a trip attack against one target in place of a melee attack. If successful, the target takes damage equal to the barbarian's Strength modifier and is knocked <Link to="/rule/prone">prone</Link>. This does not provoke an attack of opportunity.</p>
<p><strong className="hl"><Link to="/ragepower/cairn_linnorm_death_curse">Cairn Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-3" id="ability-rage_powers-ref-M-3" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of a <Link to="/monster/cairn_linnorm">cairn linnorm</Link>. The character's melee attacks deal an additional 1 point of negative energy damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of decay</em> (Will negates). A character must be at least 8th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-1"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Decay</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target takes 1 point of <Link to="/rule/con_damage">Con damage</Link> per day and <Link to="/rule/age">ages</Link> at a rate of 1 year per day (eventually incurring all of the penalties of old age but none of the bonuses)</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/crag_linnorm_death_curse">Crag Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-4" id="ability-rage_powers-ref-M-4" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of a <Link to="/monster/crag_linnorm">crag linnorm</Link>. The character's melee attacks deal an additional 1 point of fire damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of fire</em> (Will negates). A character must be at least 4th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-2"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Fire</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to fire</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/fjord_linnorm_death_curse">Fjord Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-5" id="ability-rage_powers-ref-M-5" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of a <Link to="/monster/fjord_linnorm">fjord linnorm</Link>. The character's melee attacks deal an additional 1 point of cold damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of drowning</em> (Will negates). A character must be at least 4th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-3"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Drowning</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target is unable to breathe water (even with magic), can hold its breath only half as long as normal, and is <Link to="/misc/sickened">sickened</Link> whenever it holds its breath</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/ice_linnorm_death_curse">Ice Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-6" id="ability-rage_powers-ref-M-6" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of an <Link to="/monster/ice_linnorm">ice linnorm</Link>. The character's melee attacks deal an additional 1 point of cold damage. If the character is knocked unconscious or killed, the attacker suffers the <em>curse of frost.</em> A character must be at least 4th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-4"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Frost</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to cold</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/taiga_linnorm_death_curse">Taiga Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-7" id="ability-rage_powers-ref-M-7" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of a <Link to="/monster/taiga_linnorm">taiga linnorm</Link>. The character's melee attacks deal an additional 1 point of electricity damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of electricity</em> (Will negates). A character must be at least 4th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-5"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Electricity</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to electricity</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/tarn_linnorm_death_curse">Tarn Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-8" id="ability-rage_powers-ref-M-8" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of a <Link to="/monster/tarn_linnorm">tarn linnorm</Link>. The character's melee attacks deal an additional 1 point of acid damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of death</em> (Will negates). A character must be at least 4th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-6"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Death</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target is no longer affected by healing spells and can't heal damage naturally by resting</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/tor_linnorm_death_curse">Tor Linnorm Death Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-9" id="ability-rage_powers-ref-M-9" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> The character channels the power of a <Link to="/monster/tor_linnorm">tor linnorm</Link>. The character's melee attacks deal an additional 1 point of fire damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of boiling blood</em> (Will negates). A character must be at least 8th level to select this rage power.</p>
<div className="sideNoteWrap"><ScrollContainer id="ability-rage_powers--table-7"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/curses"><IonIcon aria-label="Curse" icon="/icons/death-note.svg" /></ThLink><th colSpan={4} scope="col" className="title">Curse of Boiling Blood</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Curse</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Will 10 + 1/2 the character's level + their Charisma modifier</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to fire and is permanently <Link to="/misc/staggered">staggered</Link> from the pain of its boiling blood (this is a pain effect)</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl"><Link to="/ragepower/liquid_courage">Liquid Courage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-26" id="ability-rage_powers-ref-I-26" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian increases her morale bonus on saving throws against mind-affecting effects by +1 for each alcoholic drink she consumes during her rage, to a maximum of +1 increase per four barbarian levels.</p>
<p><strong className="hl"><Link to="/ragepower/lizard_stride">Lizard Stride:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-7" id="ability-rage_powers-ref-G-7" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> When the barbarian makes a charge or run action while raging, she can move across the surface of water without sinking. She sinks immediately if she ends her turn standing on water.</p>
<p><strong className="hl"><Link to="/ragepower/low_light_vision">Low-Light Vision:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-10" id="ability-rage_powers-ref-A-10" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian's senses sharpen and she gains low-light vision while raging.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/night_vision">Night Vision:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-11" id="ability-rage_powers-ref-A-11" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian's senses grow incredibly sharp while raging and she gains darkvision 60 feet. A barbarian must have <Link to="/ragepower/low_light_vision">low-light vision</Link> as a rage power or a racial trait to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/master_of_the_deep">Master of the Deep:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-Q-1" id="ability-rage_powers-ref-Q-1" data-hash-target to="ability-rage_powers-Q">17</InnerLink></sup> As a standard action, the barbarian commands an aquatic creature to do her bidding. The barbarian selects a creature with the aquatic type within 30 feet and gives a terse command from those listed in the <Link to="/spell/command">command</Link> spell. Alternatively, if the creature has an Intelligence of 1 or 2, the barbarian may instead command the creature to attack the closest creature to it as a standard action. The creature must succeed at a Will save (DC equal to 10 + half the barbarian's level + her Strength modifier) or obey the command to the best of its ability on its next turn. Once a creature has attempted a saving throw against master of the deep (successful or not), it is immune to this power for 24 hours. This ability is a mind-affecting effect, but it is not language dependent; the creature need not understand the barbarian giving the command. A barbarian must be at least 8th level before selecting this power.</p>
<p><strong className="hl"><Link to="/ragepower/mighty_swing">Mighty Swing:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-12" id="ability-rage_powers-ref-A-12" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian automatically confirms a critical hit. This power is used as an immediate action once a critical threat has been determined. A barbarian must be at least 12th level before selecting this power. This power can only be used once per rage.</p>
<p><strong className="hl"><Link to="/ragepower/moment_of_clarity">Moment of Clarity:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-13" id="ability-rage_powers-ref-A-13" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian does not gain any benefits or take any of the penalties from rage for 1 round. Activating this power is a swift action. This includes the penalty to Armor Class and the restriction on what actions can be performed. This round still counts against her total number of rounds of rage per day. This power can only be used once per rage.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/perfect_clarity">Perfect Clarity:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-6" id="ability-rage_powers-ref-F-6" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While using her moment of clarity rage power, the barbarian can roll twice for any miss chance or Will saving throws to disbelieve illusions, taking the better result. A barbarian must have the <Link to="/ragepower/moment_of_clarity">moment of clarity</Link> rage power before selecting this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/ultimate_clarity">Ultimate Clarity:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-10" id="ability-rage_powers-ref-M-10" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> Once per rage, the character can refine her senses, seeing through normal and magical darkness (including from magical effects such as <Link to="/spell/blur">blur</Link> and <Link to="/spell/displacement">displacement</Link>), <Link to="/spell/invisibility">invisibility</Link>, and illusions; she can also discern the exact locations of creatures with <Link to="/rule/concealment">concealment</Link>. This lasts for 1 round. A character must be at least 6th level and have the <Link to="/ragepower/moment_of_clarity">moment of clarity</Link> and <Link to="/ragepower/perfect_clarity">perfect clarity</Link> rage powers to select this rage power. The character does not need to be using moment of clarity to use this rage power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/overbearing_advance">Overbearing Advance:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-27" id="ability-rage_powers-ref-I-27" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian inflicts damage equal to her Strength bonus whenever she succeeds at an <Link to="/rule/overrun">overrun</Link> combat maneuver.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/overbearing_onslaught">Overbearing Onslaught:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-28" id="ability-rage_powers-ref-I-28" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian may <Link to="/rule/overrun">overrun</Link> more than one target per round, with a -2 penalty on her CMB for each overrun check after the first. A barbarian must have the <Link to="/ragepower/overbearing_advance">overbearing advance</Link> rage power to select this rage power. A barbarian must be at least 6th level to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/no_escape">No Escape:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-14" id="ability-rage_powers-ref-A-14" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian can move up to double her normal speed as an immediate action but she can only use this ability when an adjacent foe uses a <Link to="/rule/withdraw">withdraw</Link> action to move away from her. She must end her movement adjacent to the enemy that used the withdraw action. The barbarian provokes attacks of opportunity as normal during this movement. This power can only be used once per rage.</p>
<p><strong className="hl"><Link to="/ragepower/pack_rage">Pack Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-8" id="ability-rage_powers-ref-G-8" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> When a barbarian with this rage power enters a rage, any barbarian within 30 feet who also has this rage power can enter a rage. A barbarian that enters a rage outside of her turn spends 1 round of rage immediately and then spends another round of rage to maintain her rage at the beginning of her next turn. A barbarian must be at least 6th level to choose this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/powerful_blow">Powerful Blow:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-15" id="ability-rage_powers-ref-A-15" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains a +1 bonus on a single damage roll. This bonus increases by +1 for every 4 levels the barbarian has attained. This power is used as a swift action before the roll to hit is made. This power can only be used once per rage.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/bleeding_blow">Bleeding Blow:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-7" id="ability-rage_powers-ref-F-7" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When she uses her powerful blow rage power, the barbarian also deals <Link to="/rule/bleed">bleed</Link> damage equal to her bonus damage with the powerful blow. This bleed damage bypasses damage reduction. A barbarian must have the <Link to="/ragepower/powerful_blow">powerful blow</Link> rage power and be at least 8th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/crippling_blow">Crippling Blow:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-8" id="ability-rage_powers-ref-F-8" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When using her powerful blow rage power, the barbarian can forgo the normal bonus to damage (including any bleed damage granted by the <Link to="/ragepower/bleeding_blow">bleeding blow</Link> rage power or similar boosts to the damage of the powerful blow rage power) and instead deals 1 point of ability damage to the target's Strength or Dexterity score for every four class levels the barbarian has attained. The target can attempt a Fortitude saving throw (DC 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) to halve this ability damage. A barbarian must have the <Link to="/ragepower/powerful_blow">powerful blow</Link> rage power and be at least 8th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/quick_reflexes">Quick Reflexes:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-16" id="ability-rage_powers-ref-A-16" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> While raging, the barbarian can make one additional attack of opportunity per round.</p>
<p><strong className="hl"><Link to="/ragepower/raging_climber">Raging Climber:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-17" id="ability-rage_powers-ref-A-17" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> When raging, the barbarian adds her level as an enhancement bonus on all Climb skill checks.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/bestial_climber">Bestial Climber:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-9" id="ability-rage_powers-ref-F-9" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, the barbarian gains a natural climb speed equal to her land speed. A barbarian must have the <Link to="/ragepower/raging_climber">raging climber</Link> rage power and be at least 6th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/raging_flyer">Raging Flyer:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-9" id="ability-rage_powers-ref-G-9" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> When raging, the barbarian adds her level as an enhancement bonus to Fly checks.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/bestial_flyer">Bestial Flyer:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-10" id="ability-rage_powers-ref-G-10" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> While raging, the barbarian's fly speed increases by 10 feet and her maneuverability improves by one category. A barbarian must have a fly speed before raging, have the <Link to="/ragepower/raging_flyer">raging flyer</Link> power, and be at least 6th level to choose this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/raging_leaper">Raging Leaper:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-18" id="ability-rage_powers-ref-A-18" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> When raging, the barbarian adds her level as an enhancement bonus on all <Link to="/skill/acrobatics">Acrobatics</Link> skill checks made to jump. When making a jump in this way, the barbarian is always considered to have a running start.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/bestial_leaper">Bestial Leaper:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-10" id="ability-rage_powers-ref-F-10" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, the barbarian can take a move action to move and can take her normal standard action at any point during the move. A barbarian must have the <Link to="/ragepower/raging_leaper">raging leaper</Link> rage power and be at least 6th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/raging_flier">Raging Flier:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-11" id="ability-rage_powers-ref-M-11" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> Once per rage, the character can fly up to her base speed as a move action. If she uses the charge action, she can use this flight as part of her movement during the charge. A character must be at least 6th level and have the <Link to="/ragepower/raging_leaper">raging leaper</Link> rage power to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/raging_grappler">Raging Grappler:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-J-2" id="ability-rage_powers-ref-J-2" data-hash-target to="ability-rage_powers-J">10</InnerLink></sup> While raging, the barbarian grapples her foes with the power and viciousness of a river crocodile. As long as she is raging, whenever the barbarian succeeds at a check to start a <Link to="/rule/grapple">grapple</Link>, she can choose to deal damage as if she had also succeeded at a check to maintain the grapple. In addition, while she is raging, whenever the barbarian succeeds at a combat maneuver check to maintain a grapple, she can choose to give herself, the target of her grapple, or both the <Link to="/rule/prone">prone</Link> condition as a free action while continuing to maintain the grapple.</p>
<p><strong className="hl"><Link to="/ragepower/raging_swimmer">Raging Swimmer:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-19" id="ability-rage_powers-ref-A-19" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> When raging, the barbarian adds her level as an enhancement bonus on all Swim skill checks.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/bestial_swimmer">Bestial Swimmer:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-11" id="ability-rage_powers-ref-F-11" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, the barbarian gains a natural swim speed equal to her normal land speed. A barbarian must have the <Link to="/ragepower/raging_swimmer">raging swimmer</Link> rage power and be at least 6th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/raging_whirlwind">Raging Whirlwind:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-11" id="ability-rage_powers-ref-G-11" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> The barbarian can create a whirlwind with a powerful spinning move as an immediate action after she confirms a critical hit with a melee attack. The whirlwind circles the target of her melee attack, lifting it in the air slightly until the end of the barbarian's turn. The creature can attempt a Fortitude save (DC = 10 + half the barbarian's level + the barbarian's Constitution modifier) to negate this effect. If it fails the save, the target loses its Dexterity modifier to AC for the rest of the barbarian's turn and lands prone on the ground at the end of her turn. Raging whirlwind has no effect on flying creatures. A barbarian must be at least 12th level to choose this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/reckless_abandon">Reckless Abandon:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-29" id="ability-rage_powers-ref-I-29" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian can take a -1 penalty to AC to gain a +1 bonus on attack rolls. The AC penalty increases by -1 and the attack roll bonus increases by +1 at 4th level and every four levels thereafter.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/inspire_ferocity">Inspire Ferocity:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-30" id="ability-rage_powers-ref-I-30" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian can use a move action to impart her reckless abandon modifier to all willing allies within 30 feet for a number of rounds equal to her Charisma modifier (minimum 1). A barbarian must have the <Link to="/ragepower/reckless_abandon">reckless abandon</Link> rage power to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/renewed_vigor">Renewed Vigor:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-20" id="ability-rage_powers-ref-A-20" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> As a standard action, the barbarian heals 1d8 points of damage + her Constitution modifier. For every four levels the barbarian has attained above 4th, this amount of damage healed increases by 1d8, to a maximum of 5d8 at 20th level. A barbarian must be at least 4th level before selecting this power. This power can be used only once per day and only while raging.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/regenerative_vigor">Regenerative Vigor:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-12" id="ability-rage_powers-ref-F-12" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> After using her renewed vigor rage power until her current rage ends, the barbarian gains <Link to="/umr/fast_healing">fast healing</Link> 1 for every 6 barbarian levels she has (maximum fast healing 3). She regains hit points from fast healing at the start of each of her turns. A barbarian must have the <Link to="/ragepower/renewed_vigor">renewed vigor</Link> rage power and be at least 6th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/renewed_vitality">Renewed Vitality:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-13" id="ability-rage_powers-ref-F-13" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, the barbarian ignores the effect of 1 point of ability penalty or damage per two barbarian levels she has (maximum 10). Once per day, when a barbarian with ability penalties or damage ends her rage, she can reroll a saving throw, if any, against an effect that imposed an ability penalty or dealt her ability damage. If successful, she removes an amount of ability penalty or damage equal to the amount she can ignore while raging. A barbarian must have the <Link to="/ragepower/renewed_vigor">renewed vigor</Link> rage power and be at least 4th level before selecting this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/renewed_life">Renewed Life:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-14" id="ability-rage_powers-ref-F-14" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, the barbarian ignores the effect of one temporary negative level per four barbarian levels she has (maximum 5). Once per day, when a barbarian with temporary negative levels ends her rage, she can attempt saving throws to remove a number of negative levels equal to the number of levels she could ignore while raging. A barbarian must have the <Link to="/ragepower/renewed_vitality">renewed vitality</Link> rage power and be at least 6th level before selecting this rage power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/roaring_drunk">Roaring Drunk:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-31" id="ability-rage_powers-ref-I-31" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian gains a +1 morale bonus on Intimidate checks and to the save DC of any fear effects she creates for each alcoholic drink she has consumed during her rage, to a maximum of +1 per four barbarian levels.</p>
<p><strong className="hl"><Link to="/ragepower/rolling_dodge">Rolling Dodge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-21" id="ability-rage_powers-ref-A-21" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains a +1 dodge bonus to her Armor Class against ranged attacks for a number of rounds equal to the barbarian's current Constitution modifier (minimum 1). This bonus increases by +1 for every 6 levels the barbarian has attained. Activating this ability is a move action that does not provoke an attack of opportunity.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/reflexive_dodge">Reflexive Dodge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-15" id="ability-rage_powers-ref-F-15" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While using her rolling dodge rage power, the barbarian may apply her dodge bonus to AC as a bonus on Reflex saving throws. A barbarian must have the <Link to="/ragepower/rolling_dodge">rolling dodge</Link> rage power and be at least 6th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/roused_anger">Roused Anger:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-22" id="ability-rage_powers-ref-A-22" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian may enter a rage even if fatigued. While raging after using this ability, the barbarian is immune to the <Link to="/misc/fatigued">fatigued</Link> condition. Once this rage ends, the barbarian is <Link to="/misc/exhausted">exhausted</Link> for 10 minutes per round spent raging.</p>
<p><strong className="hl"><Link to="/ragepower/savage_dirty_trick">Savage Dirty Trick:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-O-2" id="ability-rage_powers-ref-O-2" data-hash-target to="ability-rage_powers-O">15</InnerLink></sup> Once per round while raging, (6th) the barbarian can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver in place of a melee attack. This attempt does not provoke attacks of opportunity. If successful, the target takes an amount of damage equal to the barbarian's Strength modifier and must succeed at a Fortitude save (DC 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) or take an additional penalty from the dirty trick based on the type of dirty trick performed and the following table.</p>
<ScrollContainer id="ability-rage_powers--table-8"><table>
<thead>
<tr>
<th>Initial Penalty</th>
<th>Additional Penalty</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/misc/blinded">Blinded<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/misc/staggered">Staggered<IonRippleEffect /></Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/misc/dazzled">Dazzled<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/misc/dazed">Dazed<IonRippleEffect /></Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/misc/deafened">Deafened<IonRippleEffect /></Link></td>
<td>Staggered</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/rule/entangled">Entangled<IonRippleEffect /></Link></td>
<td>Anchored in place and unable to move from that square</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/misc/sickened">Sickened<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/misc/nauseated">Nauseated<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
<p>On a failed Fortitude save, the opponent takes this additional penalty on top of the dirty trick's original effect. The additional penalty lasts for 1 round (though the initial penalty lasts as long as normal), and can be removed with a move action. The initial effect cannot be removed via mundane means until the additional penalty is removed (though magical effects like <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> work). Removing the initial effect also removes the additional penalty. If the target is immune to the initial penalty, then it is unaffected by the additional penalty.</p>
<p>For example, a barbarian using this rage power attempts a dirty trick combat maneuver against her opponent to blind him. She succeeds and her opponent fails his Fortitude save, so he becomes staggered as well as blinded. Regardless of whether he had succeeded at his saving throw, the opponent still takes an amount of damage from the barbarian's combat maneuver equal to the barbarian's Strength modifier (unless he has damage reduction or would otherwise be able to prevent this damage). Likewise, if her opponent were immune to blinding effects, he would not suffer from the blindness or the staggering effect, regardless of his saving throw.</p>
<p>This power can only be used once per opponent per rage. A barbarian must be at least 6th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/savage_hurl">Savage Hurl:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-K-5" id="ability-rage_powers-ref-K-5" data-hash-target to="ability-rage_powers-K">11</InnerLink></sup> The barbarian gains a +1 bonus on ranged attack rolls with thrown weapons that add her Dexterity bonus to the attack roll. This bonus increases to +2 at 4th level if the barbarian's Strength modifier is at least +4, to +3 at 8th level if her Strength modifier is at least +6, and to +4 at 12th level if her Strength modifier is at least +8.</p>
<p><strong className="hl"><Link to="/ragepower/savage_intuition">Savage Intuition:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-E-6" id="ability-rage_powers-ref-E-6" data-hash-target to="ability-rage_powers-E">5</InnerLink></sup> Your bestial senses allow you to sense danger and become enraged before you even have time to consciously react to danger. When combat begins, if you have rounds of rage remaining, you may automatically enter a rage without using an action at the start of the first round of combat (or at the start of the surprise round, if there is one), even if you are not otherwise aware that combat has begun.</p>
<p><strong className="hl"><Link to="/ragepower/scent">Scent:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-23" id="ability-rage_powers-ref-A-23" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains the <Link to="/umr/scent">scent</Link> ability while raging and can use this ability to locate unseen foes.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/primal_scent">Primal Scent:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-16" id="ability-rage_powers-ref-F-16" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When using her scent rage power, the barbarian adds half her barbarian level on Survival checks made to track by scent and on Perception checks to pinpoint the location of creatures she cannot see. If she pinpoints the location of a creature that has total concealment, she treats it as having <Link to="/rule/concealment">concealment</Link>. A barbarian must have the <Link to="/ragepower/scent">scent</Link> rage power and be at least 8th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/smasher">Smasher:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-32" id="ability-rage_powers-ref-I-32" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> Once per rage, whenever the barbarian makes an attack against an unattended object or a <Link to="/rule/sunder">sunder</Link> combat maneuver, she can ignore the object's hardness. This ability must be used before the attack roll or sunder check is made.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/gearbreaker">Gearbreaker:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-J-3" id="ability-rage_powers-ref-J-3" data-hash-target to="ability-rage_powers-J">10</InnerLink></sup> Once per round while raging, whenever the barbarian makes an attack against a construct, she can ignore an amount of that construct's hardness equal to her barbarian level. This ability must be used before the attack roll is made. A barbarian must have the <Link to="/ragepower/smasher">smasher</Link> rage power before selecting this rage power. This power stacks with the <em>hard hitter</em> ability from the <Link to="/arc-barbarian/numerian_liberator">Numerian liberator</Link> archetype.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/spiritual_awareness">Spiritual Awareness:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-P-2" id="ability-rage_powers-ref-P-2" data-hash-target to="ability-rage_powers-P">16</InnerLink></sup> While raging, the barbarian's dodge bonus to AC from trap sense applies against attacks made by incorporeal creatures. The barbarian must have <Link to="/ability/trap_sense">trap sense</Link> to select this ability.</p>
<p><strong className="hl"><Link to="/ragepower/spring_rage">Spring Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-12" id="ability-rage_powers-ref-G-12" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> The barbarian's rage rejuvenates her physically and spiritually. While raging, she ignores penalties to her ability scores due to <Link to="/rule/aging">aging</Link>. She also ignores penalties from negative levels, though she retains any negative levels she has until they are removed normally. A barbarian can have only one season-themed rage power, choosing between spring, <Link to="/ragepower/summer_rage">summer</Link>, <Link to="/ragepower/autumn_rage">autumn</Link>, or <Link to="/ragepower/winter_rage">winter</Link> rage.</p>
<p><strong className="hl"><Link to="/ragepower/staggering_drunk">Staggering Drunk:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-33" id="ability-rage_powers-ref-I-33" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, a barbarian gains a +1 dodge bonus to AC against attacks of opportunity for each alcoholic drink she has consumed during her rage, to a maximum of +1 per four barbarian levels.</p>
<p><strong className="hl"><Link to="/ragepower/strength_surge">Strength Surge:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-24" id="ability-rage_powers-ref-A-24" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian adds her barbarian level on one Strength check or combat maneuver check, or to her Combat Maneuver Defense when an opponent attempts a maneuver against her. This power is used as an immediate action. This power can only be used once per rage.</p>
<p><strong className="hl"><Link to="/ragepower/suffocating_grip">Suffocating Grip:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-Q-2" id="ability-rage_powers-ref-Q-2" data-hash-target to="ability-rage_powers-Q">17</InnerLink></sup> While raging, when the barbarian successfully maintains a grapple, she can choke her opponent instead of dealing damage to, moving, pinning, or tying up her opponent. The grappled opponent cannot speak or breathe and must hold its breath or begin <Link to="/rule/suffocation">suffocating</Link>. The grappled opponent can take a breath during any round in which the barbarian does not maintain the grapple. Creatures that do not breathe are not affected by this ability.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_suffocating_grip">Greater Suffocating Grip:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-Q-3" id="ability-rage_powers-ref-Q-3" data-hash-target to="ability-rage_powers-Q">17</InnerLink></sup> When the barbarian is using the suffocating grip rage power, the grappled creature cannot hold its breath and immediately begins <Link to="/rule/suffocation">suffocating</Link>. A barbarian must be at least 12th level and have the <Link to="/ragepower/suffocating_grip">suffocating grip</Link> rage power to select this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/summer_rage">Summer Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-13" id="ability-rage_powers-ref-G-13" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> The barbarian channels the heat of late summer, making the air around her hot and oppressive. A creature within the barbarian's reach becomes <Link to="/misc/fatigued">fatigued</Link> as long as it remains within the barbarian's reach unless it succeeds at a Fortitude save (DC = 10 + half the barbarian's level + her Constitution modifier) to become immune for 24 hours. A barbarian can have only one season-themed rage power, choosing between <Link to="/ragepower/spring_rage">spring</Link>, summer, <Link to="/ragepower/autumn_rage">autumn</Link>, or <Link to="/ragepower/winter_rage">winter</Link> rage.</p>
<p><strong className="hl"><Link to="/ragepower/superstition">Superstition:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-25" id="ability-rage_powers-ref-A-25" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains a +2 morale bonus on saving throws made to resist spells, supernatural abilities, and spell-like abilities. This bonus increases by +1 for every 4 levels the barbarian has attained. While raging, the barbarian cannot be a willing target of any spell and must make saving throws to resist all spells, even those cast by allies.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/disruptive">Disruptive:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-34" id="ability-rage_powers-ref-I-34" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> When raging, the barbarian gains <Link to="/feat/disruptive">Disruptive</Link> as a bonus feat. The barbarian must have the <Link to="/ragepower/superstition">superstition</Link> rage power to select this rage power. A barbarian must be at least 8th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/eater_of_magic">Eater of Magic:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-17" id="ability-rage_powers-ref-F-17" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> Once per rage, when a barbarian fails a saving throw against a spell, supernatural ability, or spell-like ability, she can reroll the saving throw against the effect (this is not an action). If she succeeds at the second saving throw, she is not affected by the spell, supernatural ability, or spell-like ability and gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the effect's caster level (in the case of spell or spell-like abilities) or the CR of the effect's creator (in the case of supernatural abilities). These temporary hit points last until damage is applied to them or 1 minute, whichever occurs first. A barbarian must have the <Link to="/ragepower/superstition">superstition</Link> rage power and be at least 10th level before selecting this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/spellbreaker">Spellbreaker:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-35" id="ability-rage_powers-ref-I-35" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> When raging, the barbarian gains <Link to="/feat/spellbreaker">Spellbreaker</Link> as a bonus feat. A barbarian must have the <Link to="/ragepower/disruptive">disruptive</Link> rage power and be at least 12th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/witch_hunter">Witch Hunter:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-I-36" id="ability-rage_powers-ref-I-36" data-hash-target to="ability-rage_powers-I">9</InnerLink></sup> While raging, the barbarian gains a +1 bonus on damage rolls against creatures possessing spells or spell-like abilities. This damage bonus increases by +1 for every four levels the barbarian has obtained. A barbarian must have the <Link to="/ragepower/superstition">superstition</Link> rage power to select this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/spell_sunder">Spell Sunder:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-18" id="ability-rage_powers-ref-F-18" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> Once per rage, the barbarian can attempt to <Link to="/rule/sunder">sunder</Link> an ongoing spell effect by succeeding at a combat maneuver check. For any effect other than one on a creature, the barbarian must make her combat maneuver check against a CMD of 15 plus the effect's caster level. To sunder an effect on a creature, the barbarian must succeed at a normal sunder combat maneuver against the creature's CMD + 5, ignoring any miss chance caused by a spell or spell-like ability. If successful, the barbarian suppresses the effect for 1 round, or 2 rounds if she exceeded the CMD by 5 to 9. If she exceeds the CMD by 10 or more, the effect is dispelled. A barbarian must have the <Link to="/ragepower/witch_hunter">witch hunter</Link> rage power and be at least 6th level before selecting this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/sunder_enchantment">Sunder Enchantment:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-19" id="ability-rage_powers-ref-F-19" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> While raging, whenever the barbarian succeeds at a sunder combat maneuver on a magical item, that item's magical abilities are suppressed for 1 round, plus 1 round for every 5 points by which her combat maneuver check exceeded the target's CMD. A barbarian must have the <Link to="/ragepower/spell_sunder">spell sunder</Link> rage power and be at least 8th level before selecting this rage power.</p>
</blockquote>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/surprise_accuracy">Surprise Accuracy:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-26" id="ability-rage_powers-ref-A-26" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains a +1 morale bonus on one attack roll. This bonus increases by +1 for every 4 levels the barbarian has attained. This power is used as a swift action before the roll to hit is made. This power can only be used once per rage.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/deadly_accuracy">Deadly Accuracy:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-20" id="ability-rage_powers-ref-F-20" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> If the barbarian scores a critical threat when using her surprise accuracy rage power, she applies double the surprise accuracy bonus when rolling to confirm the critical. A barbarian must have the <Link to="/ragepower/surprise_accuracy">surprise accuracy</Link> rage power and be at least 4th level before selecting this rage power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/lethal_accuracy">Lethal Accuracy:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-21" id="ability-rage_powers-ref-F-21" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When using her surprise accuracy rage power, the barbarian's critical multiplier for damage increases by 1 (a &times;2 multiplier becomes &times;3, a 19-20/&times;2 multiplier becomes 19-20/&times;3, a &times;3 multiplier becomes &times;4, and a &times;4 multiplier becomes &times;5). A barbarian must have the <Link to="/ragepower/surprise_accuracy">surprise accuracy</Link> and <Link to="/ragepower/deadly_accuracy">deadly accuracy</Link> rage powers and be 16th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/sharpened_accuracy">Sharpened Accuracy:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-22" id="ability-rage_powers-ref-F-22" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> When using her surprise accuracy rage power, the barbarian ignores the miss chance for <Link to="/rule/concealment">concealment</Link> and treats total concealment as concealment. She also ignores cover penalties except those from total cover. A barbarian must have the <Link to="/ragepower/surprise_accuracy">surprise accuracy</Link> rage power and be at least 8th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/swift_foot">Swift Foot:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-27" id="ability-rage_powers-ref-A-27" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian gains a 5-foot enhancement bonus to her speed. This increase is always active while the barbarian is raging. A barbarian can select this rage power up to three times. Its effects stack.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/sprint">Sprint:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-F-23" id="ability-rage_powers-ref-F-23" data-hash-target to="ability-rage_powers-F">6</InnerLink></sup> Once per rage, the barbarian can use a single full-round run action to move up to 6 times her speed or a single full-round charge action to move up to 3 times her speed. A barbarian must have the <Link to="/ragepower/swift_foot">swift foot</Link> rage power and be at least 4th level before selecting this rage power.</p>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/two_fanged_pounce">Two-Fanged Pounce:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-K-6" id="ability-rage_powers-ref-K-6" data-hash-target to="ability-rage_powers-K">11</InnerLink></sup> If the barbarian is wielding a pair of <Link to="/eq-weapon/dagger">daggers</Link>, <Link to="/eq-weapon/kukri">kukris</Link>, or <Link to="/eq-weapon/punching_dagger">punching daggers</Link>, she can attack once with each of the two weapons when she charges. If she does, she loses the bonus on attack rolls for charging and takes an additional -2 penalty to her AC, and she applies <Link to="/misc/precision_damage">precision damage</Link> or effects that occur on a hit only once, even if she hits with both attacks.</p>
<p><strong className="hl"><Link to="/ragepower/unexpected_strike">Unexpected Strike:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-A-28" id="ability-rage_powers-ref-A-28" data-hash-target to="ability-rage_powers-A">1</InnerLink></sup> The barbarian can make an attack of opportunity against a foe that moves into any square threatened by the barbarian, regardless of whether or not that movement would normally provoke an attack of opportunity. This power can only be used once per rage. A barbarian must be at least 8th level before selecting this power.</p>
<p><strong className="hl"><Link to="/ragepower/unrestrained_rage">Unrestrained Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-P-3" id="ability-rage_powers-ref-P-3" data-hash-target to="ability-rage_powers-P">16</InnerLink></sup> While raging, the barbarian is immune to paralysis. If the barbarian is targeted by an effect that would cause her to become <Link to="/rule/paralyzed">paralyzed</Link>, she can enter a rage as an immediate action, as long as she still has rounds of rage remaining. A barbarian must be at least 12th level to select this rage power.</p>
<p><strong className="hl"><Link to="/ragepower/water_sense">Water Sense:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-J-4" id="ability-rage_powers-ref-J-4" data-hash-target to="ability-rage_powers-J">10</InnerLink></sup> The barbarian's senses are no longer fooled by the rippling surface and confounding reflections seen in water that is being used as <Link to="/rule/cover">cover</Link> by her foes. While the barbarian is raging and on land, opponents in the water gain only partial cover from her attacks, instead of improved cover. In addition, while on land and targeting an opponent in water, she takes only a -1 penalty on attacks with ranged weapons (including thrown weapons) for every 5 feet of water they pass through (instead of the usual -2 penalty for every 5 feet of water).</p>
<p><strong className="hl"><Link to="/ragepower/winter_rage">Winter Rage:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-G-14" id="ability-rage_powers-ref-G-14" data-hash-target to="ability-rage_powers-G">7</InnerLink></sup> As a standard action, the barbarian can bellow a 20-foot cone of frigid, snowy air. Until the beginning of the barbarian's next turn, creatures moving through the cone move at half speed. A barbarian can have only one season-themed rage power, choosing between <Link to="/ragepower/spring_rage">spring</Link>, <Link to="/ragepower/summer_rage">summer</Link>, <Link to="/ragepower/autumn_rage">autumn</Link>, or winter rage.</p>
<h2 id="ability-rage_powers-elemental-rage-powers" data-hash-target>Elemental Rage Powers</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power</Link><br/>Elemental rage powers can be selected by any barbarian or <Link to="/class/skald">skald</Link> who is at least 6th level and has the <Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link> or <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link> rage power, or the <Link to="/ragepower/elemental_stance">elemental stance</Link> stance rage power (unchained barbarian only). A barbarian or skald can use only one of these rage powers at a time, and an <Link to="/class/unchained_barbarian">unchained barbarian</Link> must adopt the elemental stance to do so.</p>
<hr/>
<p><strong className="hl"><Link to="/ragepower/aryzuls_curse">Aryzul's Curse:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-R-1" id="ability-rage_powers-ref-R-1" data-hash-target to="ability-rage_powers-R">18</InnerLink></sup> When raging, the barbarian emanates a 5-foot-radius aura of radioactivity. Each round that another creature begins its turn within this aura, it takes a cumulative -2 penalty to Strength (Fortitude negates, DC = 10 + 1/2 the barbarian's level + her Constitution modifier) for the duration of the rage. A creature's Strength penalty from this ability cannot exceed the barbarian's class level. At 12th level, the barbarian can choose to create a 10-foot-radius aura of radioactivity when she begins her rage.</p>
<p><strong className="hl"><Link to="/ragepower/hshurhas_veil">Hshurha's Veil:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-R-2" id="ability-rage_powers-ref-R-2" data-hash-target to="ability-rage_powers-R">18</InnerLink></sup> When raging, the barbarian can use Stealth, and she gains a bonus equal to 1/2 her barbarian level on Stealth checks plus the benefits of <Link to="/rule/concealment">concealment</Link> against ranged attacks and attacks of opportunity.</p>
<p><strong className="hl"><Link to="/ragepower/kelizandris_tide">Kelizandri's Tide:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-R-3" id="ability-rage_powers-ref-R-3" data-hash-target to="ability-rage_powers-R">18</InnerLink></sup> When the barbarian rages, enemies find it difficult to escape the vortex of her fury. As a full-round action while raging, the barbarian can attempt a single combat maneuver check against each creature within 10 feet of her. If her roll equals or exceeds a creature's CMD, she moves that creature 5 feet closer to her. Once per day after attempting this maneuver, she can attack each adjacent creature as a free action as if using the <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> feat. If she has the Whirlwind Attack feat, she can also use it as a free action in this way one additional time per day.</p>
<p><strong className="hl"><Link to="/ragepower/ymeris_pyre">Ymeri's Pyre:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-R-4" id="ability-rage_powers-ref-R-4" data-hash-target to="ability-rage_powers-R">18</InnerLink></sup> The barbarian visibly burns with an inner flame that consumes all impurities affecting her. Each round that the barbarian rages reduces the duration of negative spells and effects inflicted upon her as if 2 rounds had passed; this has no effect on the duration of such effects against other creatures. Once per day, the barbarian can expend 5 rounds of rage to attempt a new saving throw against each non-permanent effect currently affecting her. Each successful saving throw ends the related effect, and she can choose not to make a save against an effect.</p>
<h2 id="ability-rage_powers-blood-rage-powers" data-hash-target>Blood Rage Powers</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>Blood rage powers grant powers in a theme. A barbarian cannot select from more than one group of blood rage powers.</p>
<hr/>
<p><strong className="hl"><Link to="/ragepower/lesser_abyssal_blood">Lesser Abyssal Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-12" id="ability-rage_powers-ref-M-12" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains two claw attacks. These attacks are considered primary attacks and are made at the barbarian's full base attack bonus. They deal 1d6 points of slashing damage for Medium creatures (1d4 if Small) plus her Strength modifier.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/abyssal_blood">Abyssal Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-13" id="ability-rage_powers-ref-M-13" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> Once per day when the barbarian enters a rage, she can choose to grow one size category larger than her base size (as <Link to="/spell/enlarge_person">enlarge person</Link>, even if the barbarian isn't humanoid). You must be 6th level and have the <Link to="/ragepower/lesser_abyssal_blood">lesser abyssal blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_abyssal_blood">Greater Abyssal Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-14" id="ability-rage_powers-ref-M-14" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains resistance 5 to acid, cold, and fire. You must be 10th level and have the <Link to="/ragepower/abyssal_blood">abyssal blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_celestial_blood">Lesser Celestial Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-15" id="ability-rage_powers-ref-M-15" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian's melee attacks are considered good-aligned weapons for the purpose of bypassing damage reduction. Furthermore, the barbarian deals an additional 1d6 points of damage when she damages an evil outsider with a melee attack.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/celestial_blood">Celestial Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-16" id="ability-rage_powers-ref-M-16" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains resistance 5 to acid and cold. You must be 6th level and have the <Link to="/ragepower/lesser_celestial_blood">lesser celestial blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_celestial_blood">Greater Celestial Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-17" id="ability-rage_powers-ref-M-17" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> Once per rage, the barbarian can reroll one ability check, skill check, or saving throw she just made. She must take the second result, even if it's lower. She must decide to use this ability after the die is rolled but before results are revealed. You must be 10th level and have the <Link to="/ragepower/celestial_blood">celestial blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_draconic_blood">Lesser Draconic Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-18" id="ability-rage_powers-ref-M-18" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains two claw attacks. These attacks are considered primary attacks and are made at the barbarian's full base attack bonus. They deal 1d6 points of slashing damage for Medium creatures (1d4 if Small) plus her Strength modifier.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/draconic_blood">Draconic Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-19" id="ability-rage_powers-ref-M-19" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> Choose an energy type from the following: acid, cold, fire, or electricity. While raging, the barbarian gains resistance 5 against the chosen energy type and a +1 natural armor bonus. You must be 6th level and have the <Link to="/ragepower/lesser_draconic_blood">lesser draconic blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_draconic_blood">Greater Draconic Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-20" id="ability-rage_powers-ref-M-20" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains a breath weapon that she can use once per day. For every 2 barbarian levels, this breath weapon deals 1d6 points of damage of the energy type she choose for the draconic blood power, either in a 30-foot cone (if cold or fire) or a 60-foot line (if acid or electricity). Those caught in the area of the breath can attempt a Reflex saving throw for half damage. The DC of this save is equal to 10 + 1/2 the barbarian's level + her Constitution modifier. You must be 10th level and have the <Link to="/ragepower/draconic_blood">draconic blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_elemental_blood">Lesser Elemental Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-21" id="ability-rage_powers-ref-M-21" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> Choose an energy type: acid, cold, fire, or electricity. While raging, as a swift action up to three times a day, the barbarian can imbue her melee attacks with elemental energy, dealing an additional 1d6 points of damage of the chosen energy type for 1 round.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/elemental_blood">Elemental Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-22" id="ability-rage_powers-ref-M-22" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging the barbarian gains energy resistance 10 against the energy type chosen when she took lesser elemental blood. You must be 6th level and have the <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_elemental_blood">Greater Elemental Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-23" id="ability-rage_powers-ref-M-23" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains a special movement type or bonus based on her chosen element: acid grants a burrow speed of 30 feet, cold grants a swim speed of 60 feet, fire grants an increase of 30 feet to her base land speed, and electricity grants a fly speed of 60 feet (good maneuverability). You must be 10th level and have the <Link to="/ragepower/elemental_blood">elemental blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_fey_blood">Lesser Fey Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-24" id="ability-rage_powers-ref-M-24" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, each time the barbarian confirms a critical hit, the target must succeed at a Will saving throw (DC = 10 + 1/2 the barbarian's level + her Constitution modifier) or be <Link to="/misc/confused">confused</Link> for one round. This is a mind-affecting compulsion effect.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/fey_blood">Fey Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-25" id="ability-rage_powers-ref-M-25" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, when the barbarian charges, she ignores <Link to="/rule/difficult_terrain">difficult terrain</Link> (including magical terrain, but not other creatures). You must be 6th level and have the <Link to="/ragepower/lesser_fey_blood">lesser fey blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_fey_blood">Greater Fey Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-26" id="ability-rage_powers-ref-M-26" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, as long as the barbarian moves at least 10 feet, she gain the effects of <Link to="/spell/blur">blur</Link> for 1 round. You must be 10th level and have the <Link to="/ragepower/fey_blood">fey blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_infernal_blood">Lesser Infernal Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-27" id="ability-rage_powers-ref-M-27" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, up to three times a day as a swift action, the barbarian can infuse her attacks with hellfire for 1 round. During this time, all of her melee attacks gain the <Link to="/magic-enh/flaming">flaming</Link> magic weapon special ability.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/infernal_blood">Infernal Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-28" id="ability-rage_powers-ref-M-28" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains fire resistance 5, as well as a +2 bonus on saving throws against poison. You must be 6th level and have the <Link to="/ragepower/lesser_infernal_blood">lesser infernal blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_infernal_blood">Greater Infernal Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-29" id="ability-rage_powers-ref-M-29" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains a +4 bonus against enchantment and fear effects. You must be 10th level and have the <Link to="/ragepower/infernal_blood">infernal blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<p><strong className="hl"><Link to="/ragepower/lesser_undead_blood">Lesser Undead Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-30" id="ability-rage_powers-ref-M-30" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, when the barbarian hits a creature with a charge attack, the creature she hit becomes <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 1/2 her barbarian level (minimum 1). This effect does not stack with other fear effects to cause a stronger condition.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/undead_blood">Undead Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-31" id="ability-rage_powers-ref-M-31" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, all of the barbarian's melee attacks are treated as if they were made with a weapon with the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability. You must be 6th level and have the <Link to="/ragepower/lesser_undead_blood">lesser undead blood</Link> rage power to select this power.</p>
<blockquote>
<p><strong className="hl"><Link to="/ragepower/greater_undead_blood">Greater Undead Blood:</Link></strong> <sup><InnerLink showBacklink="backlink-ability-rage_powers-ref-M-32" id="ability-rage_powers-ref-M-32" data-hash-target to="ability-rage_powers-M">13</InnerLink></sup> While raging, the barbarian gains cold resistance 10, as well as DR 10/- against nonlethal damage. You must be 10th level and have the <Link to="/ragepower/undead_blood">undead blood</Link> rage power to select this power.</p>
</blockquote>
</blockquote>
<section data-footnotes>
<h3 id="ability-rage_powers-label">Footnotes</h3>
<ol>
<li id="ability-rage_powers-A">
<p><Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link> <InnerLink id="backlink-ability-rage_powers-ref-A-1" data-hash-target to="ability-rage_powers-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-2" data-hash-target to="ability-rage_powers-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-3" data-hash-target to="ability-rage_powers-ref-A-3" aria-label="Back to reference A-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-4" data-hash-target to="ability-rage_powers-ref-A-4" aria-label="Back to reference A-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-5" data-hash-target to="ability-rage_powers-ref-A-5" aria-label="Back to reference A-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-6" data-hash-target to="ability-rage_powers-ref-A-6" aria-label="Back to reference A-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-7" data-hash-target to="ability-rage_powers-ref-A-7" aria-label="Back to reference A-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-8" data-hash-target to="ability-rage_powers-ref-A-8" aria-label="Back to reference A-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-9" data-hash-target to="ability-rage_powers-ref-A-9" aria-label="Back to reference A-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-10" data-hash-target to="ability-rage_powers-ref-A-10" aria-label="Back to reference A-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-11" data-hash-target to="ability-rage_powers-ref-A-11" aria-label="Back to reference A-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-12" data-hash-target to="ability-rage_powers-ref-A-12" aria-label="Back to reference A-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-13" data-hash-target to="ability-rage_powers-ref-A-13" aria-label="Back to reference A-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-14" data-hash-target to="ability-rage_powers-ref-A-14" aria-label="Back to reference A-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-15" data-hash-target to="ability-rage_powers-ref-A-15" aria-label="Back to reference A-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-16" data-hash-target to="ability-rage_powers-ref-A-16" aria-label="Back to reference A-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-17" data-hash-target to="ability-rage_powers-ref-A-17" aria-label="Back to reference A-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-18" data-hash-target to="ability-rage_powers-ref-A-18" aria-label="Back to reference A-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-19" data-hash-target to="ability-rage_powers-ref-A-19" aria-label="Back to reference A-19">↩<sup>19</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-20" data-hash-target to="ability-rage_powers-ref-A-20" aria-label="Back to reference A-20">↩<sup>20</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-21" data-hash-target to="ability-rage_powers-ref-A-21" aria-label="Back to reference A-21">↩<sup>21</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-22" data-hash-target to="ability-rage_powers-ref-A-22" aria-label="Back to reference A-22">↩<sup>22</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-23" data-hash-target to="ability-rage_powers-ref-A-23" aria-label="Back to reference A-23">↩<sup>23</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-24" data-hash-target to="ability-rage_powers-ref-A-24" aria-label="Back to reference A-24">↩<sup>24</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-25" data-hash-target to="ability-rage_powers-ref-A-25" aria-label="Back to reference A-25">↩<sup>25</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-26" data-hash-target to="ability-rage_powers-ref-A-26" aria-label="Back to reference A-26">↩<sup>26</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-27" data-hash-target to="ability-rage_powers-ref-A-27" aria-label="Back to reference A-27">↩<sup>27</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-A-28" data-hash-target to="ability-rage_powers-ref-A-28" aria-label="Back to reference A-28">↩<sup>28</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-B">
<p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink id="backlink-ability-rage_powers-ref-B-1" data-hash-target to="ability-rage_powers-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-B-2" data-hash-target to="ability-rage_powers-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-B-3" data-hash-target to="ability-rage_powers-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-C">
<p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink id="backlink-ability-rage_powers-ref-C-1" data-hash-target to="ability-rage_powers-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-C-2" data-hash-target to="ability-rage_powers-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-D">
<p><Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link> <InnerLink id="backlink-ability-rage_powers-ref-D-1" data-hash-target to="ability-rage_powers-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-D-2" data-hash-target to="ability-rage_powers-ref-D-2" aria-label="Back to reference D-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-D-3" data-hash-target to="ability-rage_powers-ref-D-3" aria-label="Back to reference D-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-E">
<p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> <InnerLink id="backlink-ability-rage_powers-ref-E-1" data-hash-target to="ability-rage_powers-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-E-2" data-hash-target to="ability-rage_powers-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-E-3" data-hash-target to="ability-rage_powers-ref-E-3" aria-label="Back to reference E-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-E-4" data-hash-target to="ability-rage_powers-ref-E-4" aria-label="Back to reference E-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-E-5" data-hash-target to="ability-rage_powers-ref-E-5" aria-label="Back to reference E-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-E-6" data-hash-target to="ability-rage_powers-ref-E-6" aria-label="Back to reference E-6">↩<sup>6</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-F">
<p><Link to="/source/ultimate_combat">Ultimate Combat</Link> <InnerLink id="backlink-ability-rage_powers-ref-F-1" data-hash-target to="ability-rage_powers-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-2" data-hash-target to="ability-rage_powers-ref-F-2" aria-label="Back to reference F-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-3" data-hash-target to="ability-rage_powers-ref-F-3" aria-label="Back to reference F-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-4" data-hash-target to="ability-rage_powers-ref-F-4" aria-label="Back to reference F-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-5" data-hash-target to="ability-rage_powers-ref-F-5" aria-label="Back to reference F-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-6" data-hash-target to="ability-rage_powers-ref-F-6" aria-label="Back to reference F-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-7" data-hash-target to="ability-rage_powers-ref-F-7" aria-label="Back to reference F-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-8" data-hash-target to="ability-rage_powers-ref-F-8" aria-label="Back to reference F-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-9" data-hash-target to="ability-rage_powers-ref-F-9" aria-label="Back to reference F-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-10" data-hash-target to="ability-rage_powers-ref-F-10" aria-label="Back to reference F-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-11" data-hash-target to="ability-rage_powers-ref-F-11" aria-label="Back to reference F-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-12" data-hash-target to="ability-rage_powers-ref-F-12" aria-label="Back to reference F-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-13" data-hash-target to="ability-rage_powers-ref-F-13" aria-label="Back to reference F-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-14" data-hash-target to="ability-rage_powers-ref-F-14" aria-label="Back to reference F-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-15" data-hash-target to="ability-rage_powers-ref-F-15" aria-label="Back to reference F-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-16" data-hash-target to="ability-rage_powers-ref-F-16" aria-label="Back to reference F-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-17" data-hash-target to="ability-rage_powers-ref-F-17" aria-label="Back to reference F-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-18" data-hash-target to="ability-rage_powers-ref-F-18" aria-label="Back to reference F-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-19" data-hash-target to="ability-rage_powers-ref-F-19" aria-label="Back to reference F-19">↩<sup>19</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-20" data-hash-target to="ability-rage_powers-ref-F-20" aria-label="Back to reference F-20">↩<sup>20</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-21" data-hash-target to="ability-rage_powers-ref-F-21" aria-label="Back to reference F-21">↩<sup>21</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-22" data-hash-target to="ability-rage_powers-ref-F-22" aria-label="Back to reference F-22">↩<sup>22</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-F-23" data-hash-target to="ability-rage_powers-ref-F-23" aria-label="Back to reference F-23">↩<sup>23</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-G">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link> <InnerLink id="backlink-ability-rage_powers-ref-G-1" data-hash-target to="ability-rage_powers-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-2" data-hash-target to="ability-rage_powers-ref-G-2" aria-label="Back to reference G-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-3" data-hash-target to="ability-rage_powers-ref-G-3" aria-label="Back to reference G-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-4" data-hash-target to="ability-rage_powers-ref-G-4" aria-label="Back to reference G-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-5" data-hash-target to="ability-rage_powers-ref-G-5" aria-label="Back to reference G-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-6" data-hash-target to="ability-rage_powers-ref-G-6" aria-label="Back to reference G-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-7" data-hash-target to="ability-rage_powers-ref-G-7" aria-label="Back to reference G-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-8" data-hash-target to="ability-rage_powers-ref-G-8" aria-label="Back to reference G-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-9" data-hash-target to="ability-rage_powers-ref-G-9" aria-label="Back to reference G-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-10" data-hash-target to="ability-rage_powers-ref-G-10" aria-label="Back to reference G-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-11" data-hash-target to="ability-rage_powers-ref-G-11" aria-label="Back to reference G-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-12" data-hash-target to="ability-rage_powers-ref-G-12" aria-label="Back to reference G-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-13" data-hash-target to="ability-rage_powers-ref-G-13" aria-label="Back to reference G-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-G-14" data-hash-target to="ability-rage_powers-ref-G-14" aria-label="Back to reference G-14">↩<sup>14</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-H">
<p><Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link> <InnerLink id="backlink-ability-rage_powers-ref-H-1" data-hash-target to="ability-rage_powers-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-H-2" data-hash-target to="ability-rage_powers-ref-H-2" aria-label="Back to reference H-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-I">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink id="backlink-ability-rage_powers-ref-I-1" data-hash-target to="ability-rage_powers-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-2" data-hash-target to="ability-rage_powers-ref-I-2" aria-label="Back to reference I-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-3" data-hash-target to="ability-rage_powers-ref-I-3" aria-label="Back to reference I-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-4" data-hash-target to="ability-rage_powers-ref-I-4" aria-label="Back to reference I-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-5" data-hash-target to="ability-rage_powers-ref-I-5" aria-label="Back to reference I-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-6" data-hash-target to="ability-rage_powers-ref-I-6" aria-label="Back to reference I-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-7" data-hash-target to="ability-rage_powers-ref-I-7" aria-label="Back to reference I-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-8" data-hash-target to="ability-rage_powers-ref-I-8" aria-label="Back to reference I-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-9" data-hash-target to="ability-rage_powers-ref-I-9" aria-label="Back to reference I-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-10" data-hash-target to="ability-rage_powers-ref-I-10" aria-label="Back to reference I-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-11" data-hash-target to="ability-rage_powers-ref-I-11" aria-label="Back to reference I-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-12" data-hash-target to="ability-rage_powers-ref-I-12" aria-label="Back to reference I-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-13" data-hash-target to="ability-rage_powers-ref-I-13" aria-label="Back to reference I-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-14" data-hash-target to="ability-rage_powers-ref-I-14" aria-label="Back to reference I-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-15" data-hash-target to="ability-rage_powers-ref-I-15" aria-label="Back to reference I-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-16" data-hash-target to="ability-rage_powers-ref-I-16" aria-label="Back to reference I-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-17" data-hash-target to="ability-rage_powers-ref-I-17" aria-label="Back to reference I-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-18" data-hash-target to="ability-rage_powers-ref-I-18" aria-label="Back to reference I-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-19" data-hash-target to="ability-rage_powers-ref-I-19" aria-label="Back to reference I-19">↩<sup>19</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-20" data-hash-target to="ability-rage_powers-ref-I-20" aria-label="Back to reference I-20">↩<sup>20</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-21" data-hash-target to="ability-rage_powers-ref-I-21" aria-label="Back to reference I-21">↩<sup>21</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-22" data-hash-target to="ability-rage_powers-ref-I-22" aria-label="Back to reference I-22">↩<sup>22</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-23" data-hash-target to="ability-rage_powers-ref-I-23" aria-label="Back to reference I-23">↩<sup>23</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-24" data-hash-target to="ability-rage_powers-ref-I-24" aria-label="Back to reference I-24">↩<sup>24</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-25" data-hash-target to="ability-rage_powers-ref-I-25" aria-label="Back to reference I-25">↩<sup>25</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-26" data-hash-target to="ability-rage_powers-ref-I-26" aria-label="Back to reference I-26">↩<sup>26</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-27" data-hash-target to="ability-rage_powers-ref-I-27" aria-label="Back to reference I-27">↩<sup>27</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-28" data-hash-target to="ability-rage_powers-ref-I-28" aria-label="Back to reference I-28">↩<sup>28</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-29" data-hash-target to="ability-rage_powers-ref-I-29" aria-label="Back to reference I-29">↩<sup>29</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-30" data-hash-target to="ability-rage_powers-ref-I-30" aria-label="Back to reference I-30">↩<sup>30</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-31" data-hash-target to="ability-rage_powers-ref-I-31" aria-label="Back to reference I-31">↩<sup>31</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-32" data-hash-target to="ability-rage_powers-ref-I-32" aria-label="Back to reference I-32">↩<sup>32</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-33" data-hash-target to="ability-rage_powers-ref-I-33" aria-label="Back to reference I-33">↩<sup>33</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-34" data-hash-target to="ability-rage_powers-ref-I-34" aria-label="Back to reference I-34">↩<sup>34</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-35" data-hash-target to="ability-rage_powers-ref-I-35" aria-label="Back to reference I-35">↩<sup>35</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-I-36" data-hash-target to="ability-rage_powers-ref-I-36" aria-label="Back to reference I-36">↩<sup>36</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-J">
<p><Link to="/source/people_of_the_river">People of the River</Link> <InnerLink id="backlink-ability-rage_powers-ref-J-1" data-hash-target to="ability-rage_powers-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-J-2" data-hash-target to="ability-rage_powers-ref-J-2" aria-label="Back to reference J-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-J-3" data-hash-target to="ability-rage_powers-ref-J-3" aria-label="Back to reference J-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-J-4" data-hash-target to="ability-rage_powers-ref-J-4" aria-label="Back to reference J-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-K">
<p><Link to="/source/villain_codex">Villain Codex</Link> <InnerLink id="backlink-ability-rage_powers-ref-K-1" data-hash-target to="ability-rage_powers-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-K-2" data-hash-target to="ability-rage_powers-ref-K-2" aria-label="Back to reference K-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-K-3" data-hash-target to="ability-rage_powers-ref-K-3" aria-label="Back to reference K-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-K-4" data-hash-target to="ability-rage_powers-ref-K-4" aria-label="Back to reference K-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-K-5" data-hash-target to="ability-rage_powers-ref-K-5" aria-label="Back to reference K-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-K-6" data-hash-target to="ability-rage_powers-ref-K-6" aria-label="Back to reference K-6">↩<sup>6</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-L">
<p><Link to="/source/animal_archive">Animal Archive</Link> <InnerLink id="backlink-ability-rage_powers-ref-L-1" data-hash-target to="ability-rage_powers-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-L-2" data-hash-target to="ability-rage_powers-ref-L-2" aria-label="Back to reference L-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-M">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide</Link> <InnerLink id="backlink-ability-rage_powers-ref-M-1" data-hash-target to="ability-rage_powers-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-2" data-hash-target to="ability-rage_powers-ref-M-2" aria-label="Back to reference M-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-3" data-hash-target to="ability-rage_powers-ref-M-3" aria-label="Back to reference M-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-4" data-hash-target to="ability-rage_powers-ref-M-4" aria-label="Back to reference M-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-5" data-hash-target to="ability-rage_powers-ref-M-5" aria-label="Back to reference M-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-6" data-hash-target to="ability-rage_powers-ref-M-6" aria-label="Back to reference M-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-7" data-hash-target to="ability-rage_powers-ref-M-7" aria-label="Back to reference M-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-8" data-hash-target to="ability-rage_powers-ref-M-8" aria-label="Back to reference M-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-9" data-hash-target to="ability-rage_powers-ref-M-9" aria-label="Back to reference M-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-10" data-hash-target to="ability-rage_powers-ref-M-10" aria-label="Back to reference M-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-11" data-hash-target to="ability-rage_powers-ref-M-11" aria-label="Back to reference M-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-12" data-hash-target to="ability-rage_powers-ref-M-12" aria-label="Back to reference M-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-13" data-hash-target to="ability-rage_powers-ref-M-13" aria-label="Back to reference M-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-14" data-hash-target to="ability-rage_powers-ref-M-14" aria-label="Back to reference M-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-15" data-hash-target to="ability-rage_powers-ref-M-15" aria-label="Back to reference M-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-16" data-hash-target to="ability-rage_powers-ref-M-16" aria-label="Back to reference M-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-17" data-hash-target to="ability-rage_powers-ref-M-17" aria-label="Back to reference M-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-18" data-hash-target to="ability-rage_powers-ref-M-18" aria-label="Back to reference M-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-19" data-hash-target to="ability-rage_powers-ref-M-19" aria-label="Back to reference M-19">↩<sup>19</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-20" data-hash-target to="ability-rage_powers-ref-M-20" aria-label="Back to reference M-20">↩<sup>20</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-21" data-hash-target to="ability-rage_powers-ref-M-21" aria-label="Back to reference M-21">↩<sup>21</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-22" data-hash-target to="ability-rage_powers-ref-M-22" aria-label="Back to reference M-22">↩<sup>22</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-23" data-hash-target to="ability-rage_powers-ref-M-23" aria-label="Back to reference M-23">↩<sup>23</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-24" data-hash-target to="ability-rage_powers-ref-M-24" aria-label="Back to reference M-24">↩<sup>24</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-25" data-hash-target to="ability-rage_powers-ref-M-25" aria-label="Back to reference M-25">↩<sup>25</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-26" data-hash-target to="ability-rage_powers-ref-M-26" aria-label="Back to reference M-26">↩<sup>26</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-27" data-hash-target to="ability-rage_powers-ref-M-27" aria-label="Back to reference M-27">↩<sup>27</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-28" data-hash-target to="ability-rage_powers-ref-M-28" aria-label="Back to reference M-28">↩<sup>28</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-29" data-hash-target to="ability-rage_powers-ref-M-29" aria-label="Back to reference M-29">↩<sup>29</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-30" data-hash-target to="ability-rage_powers-ref-M-30" aria-label="Back to reference M-30">↩<sup>30</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-31" data-hash-target to="ability-rage_powers-ref-M-31" aria-label="Back to reference M-31">↩<sup>31</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-M-32" data-hash-target to="ability-rage_powers-ref-M-32" aria-label="Back to reference M-32">↩<sup>32</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-N">
<p><Link to="/source/horror_adventures">Horror Adventures</Link> <InnerLink id="backlink-ability-rage_powers-ref-N-1" data-hash-target to="ability-rage_powers-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="ability-rage_powers-O">
<p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink id="backlink-ability-rage_powers-ref-O-1" data-hash-target to="ability-rage_powers-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-O-2" data-hash-target to="ability-rage_powers-ref-O-2" aria-label="Back to reference O-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-P">
<p><Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link> <InnerLink id="backlink-ability-rage_powers-ref-P-1" data-hash-target to="ability-rage_powers-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-P-2" data-hash-target to="ability-rage_powers-ref-P-2" aria-label="Back to reference P-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-P-3" data-hash-target to="ability-rage_powers-ref-P-3" aria-label="Back to reference P-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-Q">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link> <InnerLink id="backlink-ability-rage_powers-ref-Q-1" data-hash-target to="ability-rage_powers-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-Q-2" data-hash-target to="ability-rage_powers-ref-Q-2" aria-label="Back to reference Q-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-Q-3" data-hash-target to="ability-rage_powers-ref-Q-3" aria-label="Back to reference Q-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="ability-rage_powers-R">
<p><Link to="/source/planes_of_power">Planes of Power</Link> <InnerLink id="backlink-ability-rage_powers-ref-R-1" data-hash-target to="ability-rage_powers-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-R-2" data-hash-target to="ability-rage_powers-ref-R-2" aria-label="Back to reference R-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-R-3" data-hash-target to="ability-rage_powers-ref-R-3" aria-label="Back to reference R-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-rage_powers-ref-R-4" data-hash-target to="ability-rage_powers-ref-R-4" aria-label="Back to reference R-4">↩<sup>4</sup></InnerLink></p>
</li>
</ol>
</section>
</div>};
const _animal_tricks = {hasJL:true,title: "Animal Tricks", jsx: <><div className="jumpList" id="ability-animal_tricks-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-animal_tricks-aid">Aid</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-attack">Attack</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-flank">Flank</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-maneuver">Maneuver</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-bombard">Bombard</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-break-out">Break Out</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-bury">Bury</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-come">Come</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-defend">Defend</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-deliver">Deliver</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-detect">Detect</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-down">Down</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-entertain">Entertain</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-exclusive">Exclusive</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-fetch">Fetch</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-flee">Flee</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-get-help">Get Help</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-guard">Guard</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-heel">Heel</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-hunt">Hunt</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-menace">Menace</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-perform">Perform</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-seek">Seek</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-serve">Serve</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-sneak">Sneak</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-stay">Stay</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-throw-rider">Throw Rider</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-track">Track</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-watch">Watch</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-work">Work</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-animal-training-purposes">Animal Training Purposes</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-air-support">Air Support</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-burglar">Burglar</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-combat-training">Combat Training</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-fighting">Fighting</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-guarding">Guarding</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-heavy-labor">Heavy Labor</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-hunting">Hunting</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-liberator">Liberator</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-servant">Servant</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-performance">Performance</InnerLink></li><li><InnerLink toTop to="ability-animal_tricks-riding">Riding</InnerLink></li></ul></div><h2 id="ability-animal_tricks-animal-tricks">Animal Tricks</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link>, <Link to="/source/animal_archive">Animal Archive</Link>, <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link><br/>This is a list of tricks (and their associated DCs) that can be taught to animals using the <Link to="/skill/handle_animal">Handle Animal</Link> skill.</p>
<hr/>
<h3 id="ability-animal_tricks-aid" data-hash-target>Aid (DC 20)</h3>
<p>The animal can use the aid another action to aid a specific ally in combat by attacking a specific foe the ally is fighting. You may point to a particular creature that you wish the animal to aid, and another that you want it make an attack roll against, and it will comply if able. The normal creature type restrictions governing the attack trick still apply.</p>
<h3 id="ability-animal_tricks-attack" data-hash-target>Attack (DC 20)</h3>
<p>The animal attacks apparent enemies. You may point to a particular creature that you wish the animal to attack, and it will comply if able. Normally, an animal will attack only humanoids, monstrous humanoids, giants, or other animals. Teaching an animal to attack all creatures (including such unnatural creatures as undead and aberrations) counts as two tricks.</p>
<blockquote>
<h3 id="ability-animal_tricks-flank" data-hash-target>Flank (DC 20)</h3>
<p>You can instruct an animal to attack a foe you point to and always attempt to be adjacent to (and threatening) that foe. If you or an ally is also threatening the foe, the animal attempts to flank the foe, if possible. It always takes attacks of opportunity. The animal must know the <strong>attack</strong> trick before it can learn this trick.</p>
<h3 id="ability-animal_tricks-maneuver" data-hash-target>Maneuver (DC 20)</h3>
<p>The animal is trained to use a specific <Link to="/rule/combat_maneuver">combat maneuver</Link> on command. An animal must know the <strong>attack</strong> trick before it can be taught the maneuver trick, and it only performs maneuvers against targets it would normally attack. This trick can be taught to an animal multiple times. Each time it is taught, the animal can be commanded to use a different combat maneuver.</p>
</blockquote>
<h3 id="ability-animal_tricks-bombard" data-hash-target>Bombard (DC 20)</h3>
<p>A flying animal can deliver projectiles on command, attempting to drop a specified item that it can carry (often alchemist's fire or some other incendiary) on a designated point or opponent, using its base attack bonus to determine its attack roll. The animal cannot throw the object, and must be able to fly directly over the target.</p>
<h3 id="ability-animal_tricks-break-out" data-hash-target>Break Out (DC 20)</h3>
<p>On command, the animal attempts to break or gnaw through any bars or bindings restricting itself, its handler, or a person indicated by the handler. If not effective on its own, this trick can grant the target character a +4 circumstance bonus on Escape Artist checks. The animal can also take certain basic actions like lifting a latch or bringing its master an unattended key. Weight and Strength restrictions still apply, and pickpocketing a key or picking any sort of lock is still far beyond the animal's ability.</p>
<h3 id="ability-animal_tricks-bury" data-hash-target>Bury (DC 15)</h3>
<p>An animal with this trick can be instructed to bury an object in its possession. The animal normally seeks a secluded place to bury its object. An animal with both <strong>bury</strong> and <InnerLink toTop to="ability-animal_tricks-fetch">fetch</InnerLink> can be instructed to fetch an item it has buried.</p>
<h3 id="ability-animal_tricks-come" data-hash-target>Come (DC 15)</h3>
<p>The animal comes to you, even if it normally would not do so.</p>
<h3 id="ability-animal_tricks-defend" data-hash-target>Defend (DC 20)</h3>
<p>The animal defends you (or is ready to defend you if no threat is present), even without any command being given. Alternatively, you can command the animal to defend another specific character.</p>
<h3 id="ability-animal_tricks-deliver" data-hash-target>Deliver (DC 15)</h3>
<p>The animal takes an object (one you or an ally gives it, or that it recovers with the fetch trick) to a place or person you indicate. If you indicate a place, the animal drops the item and returns to you. If you indicate a person, the animal stays adjacent to the person until the item is taken. (Retrieving an item from an animal using the deliver trick is a move action.)</p>
<h3 id="ability-animal_tricks-detect" data-hash-target>Detect (DC 25)</h3>
<p>The animal is trained to seek out the smells of explosives and poisons, unusual noises or echoes, air currents, and other common elements signifying potential dangers or secret passages. When commanded, the animal uses its Perception skill to try to pinpoint the source of anything that strikes it as unusual about a room or location. Note that because the animal is not intelligent, any number of strange mechanisms, doors, scents, or unfamiliar objects may catch the animal's attention, and it cannot attempt the same Perception check more than once in this way.</p>
<h3 id="ability-animal_tricks-down" data-hash-target>Down (DC 15)</h3>
<p>The animal breaks off from combat or otherwise backs down. An animal that doesn't know this trick continues to fight until it must flee (due to injury, a fear effect, or the like) or its opponent is defeated.</p>
<h3 id="ability-animal_tricks-entertain" data-hash-target>Entertain (DC 25)</h3>
<p>The animal can dance, sing, or perform some other impressive and enjoyable trick to entertain those around it. At the command of its owner, the animal can make a Perform check (or a Charisma check if it has no ranks in Perform) to show off its talent. Willing onlookers or those who fail an opposed Sense Motive check take a -2 penalty on Perception checks to notice anything but the animal entertaining them. Tricksters and con artists often teach their animals to perform this trick while they pickpocket viewers or sneak about unnoticed.</p>
<h3 id="ability-animal_tricks-exclusive" data-hash-target>Exclusive (DC 20)</h3>
<p>The animal takes directions only from the handler who taught it this trick. If an animal has both the exclusive and serve tricks, it takes directions only from the handler that taught it the exclusive trick and those creatures indicated by the trainer's serve command. An animal with the exclusive trick does not take trick commands from others even if it is friendly or helpful toward them (such as through the result of a <Link to="/spell/charm_animal">charm animal</Link> spell), though this does not prevent it from being controlled by other enchantment spells (such as <Link to="/spell/dominate_animal">dominate animal</Link>), and the animal still otherwise acts as a friendly or helpful creature when applicable.</p>
<h3 id="ability-animal_tricks-fetch" data-hash-target>Fetch (DC 15)</h3>
<p>The animal goes and gets something. If you do not point out a specific item, the animal fetches a random object.</p>
<h3 id="ability-animal_tricks-flee" data-hash-target>Flee (DC 20)</h3>
<p>The animal attempts to run away or hide as best it can, returning only when its handler commands it to do so. Until such a command is received, the animal does its best to track its handler and any creatures with him or her, remaining hidden but within range of its sight or hearing. This trick is particularly useful for thieves and adventurers in that it allows the animal to evade capture, then return later to help free its friends.</p>
<h3 id="ability-animal_tricks-get-help" data-hash-target>Get Help (DC 20)</h3>
<p>With this trick, a trainer can designate a number of creatures up to the animal's Intelligence score as "help." When the command is given, the animal attempts to find one of those people and bring her back to the handler, even if that means journeying a long distance to the last place it encountered the target creature.</p>
<h3 id="ability-animal_tricks-guard" data-hash-target>Guard (DC 20)</h3>
<p>The animal stays in place and prevents others from approaching.</p>
<h3 id="ability-animal_tricks-heel" data-hash-target>Heel (DC 15)</h3>
<p>The animal follows you closely, even to places where it normally wouldn't go.</p>
<h3 id="ability-animal_tricks-hunt" data-hash-target>Hunt (DC 20)</h3>
<p>This trick allows an animal to use its natural stalking or foraging instincts to find food and return it to the animal's handler. An animal with this trick may attempt Survival checks (or Wisdom checks if the animal has no ranks in Survival) to provide food for others or lead them to water and shelter (as the "get along in the wild" use of the Survival skill). An animal with this trick may use the <Link to="/rule/aid_another">aid another</Link> action to assist Survival checks made by its handler for these purposes.</p>
<h3 id="ability-animal_tricks-menace" data-hash-target>Menace (DC 20)</h3>
<p>A menacing animal attempts to keep a creature you indicate from moving. It does its best to intimidate the target, but only attacks if the target attempts to move from its present location or take any significant action (particularly a hostile-seeming one). As soon as the target stops moving, the animal ceases attacking, but continues to menace.</p>
<h3 id="ability-animal_tricks-perform" data-hash-target>Perform (DC 15)</h3>
<p>The animal performs a variety of simple tricks, such as sitting up, rolling over, roaring or barking, and so on.</p>
<h3 id="ability-animal_tricks-seek" data-hash-target>Seek (DC 15)</h3>
<p>The animal moves into an area and looks around for anything that is obviously alive or animate.</p>
<h3 id="ability-animal_tricks-serve" data-hash-target>Serve (DC 15)</h3>
<p>An animal with this trick willingly takes orders from a creature you designate. If the creature you tell the animal to serve knows what tricks the animal has, it can instruct the animal to perform these tricks using your Handle Animal bonus on the check instead of its own. The animal treats the designated ally as friendly. An animal can unlearn this trick with 1 week of training. This trick can be taught to an animal multiple times. Each time it is taught, the animal can serve an additional creature you designate.</p>
<h3 id="ability-animal_tricks-sneak" data-hash-target>Sneak (DC 15)</h3>
<p>The animal can be ordered to make Stealth checks in order to stay hidden and to continue using Stealth even when circumstances or its natural instincts would normally cause it to abandon secrecy.</p>
<h3 id="ability-animal_tricks-stay" data-hash-target>Stay (DC 15)</h3>
<p>The animal stays in place, waiting for you to return. It does not challenge other creatures that come by, though it still defends itself if it needs to.</p>
<h3 id="ability-animal_tricks-throw-rider" data-hash-target>Throw Rider (DC 15)</h3>
<p>The animal can attempt to fling a creature riding it to the ground. Treat this as a <Link to="/rule/trip">trip</Link> combat maneuver that applies to all creatures riding the animal, and that does not provoke attacks of opportunity. An animal that knows the <strong>throw rider</strong> and <InnerLink toTop to="ability-animal_tricks-exclusive">exclusive</InnerLink> tricks can be instructed to attempt to automatically throw anyone other than its trainer who attempts to ride it.</p>
<h3 id="ability-animal_tricks-track" data-hash-target>Track (DC 20)</h3>
<p>The animal tracks the scent presented to it. (This requires the animal to have the <Link to="/umr/scent">scent</Link> ability.)</p>
<h3 id="ability-animal_tricks-watch" data-hash-target>Watch (DC 15)</h3>
<p>The animal can be commanded to keep watch over a particular area, such as a campsite, and raise an alarm if it notices any sizable or dangerous creature entering the area. This trick is often included in the <InnerLink toTop to="ability-animal_tricks-guarding">Guarding</InnerLink> purpose.</p>
<h3 id="ability-animal_tricks-work" data-hash-target>Work (DC 15)</h3>
<p>The animal pulls or pushes a medium or heavy load.</p>
<hr/>
<h2 id="ability-animal_tricks-animal-training-purposes" data-hash-target>Animal Training Purposes</h2>
<p>Rather than teaching an animal individual tricks, you can simply train it for a general purpose. Essentially, an animal's purpose represents a preselected set of known tricks that fit into a common scheme, such as guarding or heavy labor. The animal must meet all the normal prerequisites for all tricks included in the training package.</p>
<h3 id="ability-animal_tricks-air-support" data-hash-target>Air Support (DC 20)</h3>
<p>An animal trained in air support knows the <InnerLink toTop to="ability-animal_tricks-attack">attack</InnerLink>, <InnerLink toTop to="ability-animal_tricks-bombard">bombard</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-deliver">deliver</InnerLink> tricks.</p>
<h3 id="ability-animal_tricks-burglar" data-hash-target>Burglar (DC 25)</h3>
<p>An animal trained as a burglar knows the <InnerLink toTop to="ability-animal_tricks-come">come</InnerLink>, <InnerLink toTop to="ability-animal_tricks-fetch">fetch</InnerLink>, <InnerLink toTop to="ability-animal_tricks-maneuver">maneuver</InnerLink> (steal), <InnerLink toTop to="ability-animal_tricks-seek">seek</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-sneak">sneak</InnerLink> tricks. You can order it to steal a specific item you point out.</p>
<h3 id="ability-animal_tricks-combat-training" data-hash-target>Combat Training (DC 20)</h3>
<p>An animal trained to bear a rider into combat knows the tricks <InnerLink toTop to="ability-animal_tricks-attack">attack</InnerLink>, <InnerLink toTop to="ability-animal_tricks-come">come</InnerLink>, <InnerLink toTop to="ability-animal_tricks-defend">defend</InnerLink>, <InnerLink toTop to="ability-animal_tricks-down">down</InnerLink>, <InnerLink toTop to="ability-animal_tricks-guard">guard</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-heel">heel</InnerLink>. Training an animal for combat riding takes 6 weeks. You may also "upgrade" an animal trained for riding to one trained for combat by spending 3 weeks and making a successful DC 20 Handle Animal check. The new general purpose and tricks completely replace the animal's previous purpose and any tricks it once knew. Many horses and riding dogs are trained in this way.</p>
<h3 id="ability-animal_tricks-fighting" data-hash-target>Fighting (DC 20)</h3>
<p>An animal trained to engage in combat knows the tricks <InnerLink toTop to="ability-animal_tricks-attack">attack</InnerLink>, <InnerLink toTop to="ability-animal_tricks-down">down</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-stay">stay</InnerLink>. Training an animal for fighting takes 3 weeks.</p>
<h3 id="ability-animal_tricks-guarding" data-hash-target>Guarding (DC 20)</h3>
<p>An animal trained to guard knows the tricks <InnerLink toTop to="ability-animal_tricks-attack">attack</InnerLink>, <InnerLink toTop to="ability-animal_tricks-defend">defend</InnerLink>, <InnerLink toTop to="ability-animal_tricks-down">down</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-guard">guard</InnerLink>. Training an animal for guarding takes 4 weeks.</p>
<h3 id="ability-animal_tricks-heavy-labor" data-hash-target>Heavy Labor (DC 15)</h3>
<p>An animal trained for heavy labor knows the tricks <InnerLink toTop to="ability-animal_tricks-come">come</InnerLink> and <InnerLink toTop to="ability-animal_tricks-work">work</InnerLink>. Training an animal for heavy labor takes 2 weeks.</p>
<h3 id="ability-animal_tricks-hunting" data-hash-target>Hunting (DC 20)</h3>
<p>An animal trained for hunting knows the tricks <InnerLink toTop to="ability-animal_tricks-attack">attack</InnerLink>, <InnerLink toTop to="ability-animal_tricks-down">down</InnerLink>, <InnerLink toTop to="ability-animal_tricks-fetch">fetch</InnerLink>, <InnerLink toTop to="ability-animal_tricks-heel">heel</InnerLink>, <InnerLink toTop to="ability-animal_tricks-seek">seek</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-track">track</InnerLink>. Training an animal for hunting takes 6 weeks.</p>
<h3 id="ability-animal_tricks-liberator" data-hash-target>Liberator (DC 25)</h3>
<p>An animal trained in liberating knows the <InnerLink toTop to="ability-animal_tricks-break-out">break out</InnerLink>, <InnerLink toTop to="ability-animal_tricks-flee">flee</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-get-help">get help</InnerLink> tricks.</p>
<h3 id="ability-animal_tricks-servant" data-hash-target>Servant (DC 20)</h3>
<p>An animal trained as a servant knows the <InnerLink toTop to="ability-animal_tricks-deliver">deliver</InnerLink>, <InnerLink toTop to="ability-animal_tricks-exclusive">exclusive</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-serve">serve</InnerLink> tricks.</p>
<h3 id="ability-animal_tricks-performance" data-hash-target>Performance (DC 15)</h3>
<p>An animal trained for performance knows the tricks <InnerLink toTop to="ability-animal_tricks-come">come</InnerLink>, <InnerLink toTop to="ability-animal_tricks-fetch">fetch</InnerLink>, <InnerLink toTop to="ability-animal_tricks-heel">heel</InnerLink>, <InnerLink toTop to="ability-animal_tricks-perform">perform</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-stay">stay</InnerLink>. Training an animal for performance takes 5 weeks.</p>
<h3 id="ability-animal_tricks-riding" data-hash-target>Riding (DC 15)</h3>
<p>An animal trained to bear a rider knows the tricks <InnerLink toTop to="ability-animal_tricks-come">come</InnerLink>, <InnerLink toTop to="ability-animal_tricks-heel">heel</InnerLink>, and <InnerLink toTop to="ability-animal_tricks-stay">stay</InnerLink>. Training an animal for riding takes 3 weeks.</p>
</>};
const _companion_tricks = {hasJL:true,title: "Animal Companion Tricks", jsx: <><div className="jumpList" id="ability-companion_tricks-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-companion_tricks-build-simple-structure">Build Simple Structure</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-demolish">Demolish</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-feint">Feint</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-guide">Guide</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-intimidate">Intimidate</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-mark-territory">Mark Territory</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-milk-venom">Milk Venom</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-receive-spell">Receive Spell</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-rescue">Rescue</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-speak">Speak</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-spin-silk">Spin Silk</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-cocoon">Cocoon</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-subdue">Subdue</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-take-root">Take Root</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-pose-as-scenery">Pose as Scenery</InnerLink></li><li><InnerLink toTop to="ability-companion_tricks-withhold-venom">Withhold Venom</InnerLink></li></ul></div><h2 id="ability-companion_tricks-animal-companion-tricks">Animal Companion Tricks</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 214</Link><br/>Certain <Link to="/ability/animal_tricks">animal tricks</Link> can only be taught to <Link to="/sidekick/animal_companion">animal companions</Link>, and often require the animal to have specific characteristics. They otherwise follow the rules for <Link to="/skill/handle_animal">teaching tricks</Link>.</p>
<hr/>
<h3 id="ability-companion_tricks-build-simple-structure" data-hash-target>Build Simple Structure (DC 25)</h3>
<p>The companion can build simple structures on command, limited by its natural abilities and inclinations. The companion is able to build only structures that creatures of its type would naturally build on their own, and this trick merely allows the handler to direct the companion on when and where to build such structures. For example, a spider could be commanded to spin a web between two trees, but it could not be made to create a hammock or a tent out of silk. Similarly, a beaver could be ordered to make a dam or lodge, an alligator a dome-shaped nest, and any burrowing creature a small tunnel or hole. In general, this process takes 10 minutes for each 5-foot square the structure occupies, but depending on the terrain and the type of structure, it might take as little as 1 minute or as much as 1 hour or more, at the GM's discretion. Only companions that naturally build structures can learn this trick.</p>
<h3 id="ability-companion_tricks-demolish" data-hash-target>Demolish (DC 15)</h3>
<p>The companion can be commanded to attack and damage objects and structures. A companion must know the <strong>attack</strong> trick before it can be taught the demolish trick, and the companion must be trained to attack creatures of all types. The companion's handler can direct it either to make natural attacks against the object in question or to make a Strength check to attempt to break it (if applicable).</p>
<h3 id="ability-companion_tricks-feint" data-hash-target>Feint (DC 20)</h3>
<p>The companion is trained to feint against opponents. A companion must know the <strong>attack</strong> trick before it can be taught the feint trick, and it performs feints only against targets it would normally attack.</p>
<h3 id="ability-companion_tricks-guide" data-hash-target>Guide (DC 15)</h3>
<p>The companion can serve as a guide to a character that is blinded or otherwise unable to see. While serving as a guide, the companion remains adjacent to the guided creature at all times, readying an action each round to move when that creature moves. This allows the guided creature to automatically succeed at Acrobatics checks to move at more than half speed while blinded. Additionally, the companion identifies obstacles in the guided creature's path and pushes them, pulls them, or otherwise signals to the creature how to avoid them, allowing the guided creature to locate and move around obstacles such as hazards, opponents, and other terrain features as though she were able to see them (though she can't distinguish between obstacles). Finally, while serving as a guide, the companion indicates to the guided creature the presence and direction of any adjacent allies, allowing the guided creature to pinpoint the locations of such creatures. The companion can serve as a guide only as long as it is able to see in some fashion, and its ability to detect and avoid creatures and obstacles is limited by what it is able to perceive normally.</p>
<h3 id="ability-companion_tricks-intimidate" data-hash-target>Intimidate (DC 15)</h3>
<p>The companion bares its teeth, barks, bristles, growls, or otherwise threatens a creature you designate, or, alternatively, it can be trained to do so when it encounters any creature besides its handler. The companion takes a -4 penalty on Intimidate checks against creatures other than those with the animal or humanoid types unless it has also been trained to attack creatures of any type. A companion that knows this trick automatically uses the <Link to="/rule/aid_another">aid another</Link> action to assist Intimidate checks attempted by its handler, provided that it is within 15 feet of its handler at the time and has not been ordered to perform another task.</p>
<h3 id="ability-companion_tricks-mark-territory" data-hash-target>Mark Territory (DC 25)</h3>
<p>Whether by spraying musk, rubbing its back against trees and rocks, or simply howling loudly, the companion lets other nearby animals know that it has claimed an area. By spending 1 hour performing this trick, the companion can mark an area of up to half a square mile in this fashion. If it does so, after 24 hours, whenever there would be a random encounter within that area that involves a wild animal or other creature of Intelligence 2 or less (including vermin but not other mindless creatures, such as oozes and mindless undead), there is a 25% chance that the encounter doesn't actually occur, as creatures might be warded off by the markings. The companion must renew any territorial markings at least once per week, or they lose their effectiveness. There is also a 10% chance per week that the markings attract the attention of a powerful predator, which actively seeks out the companion to challenge it (and its master) for the territory.</p>
<h3 id="ability-companion_tricks-milk-venom" data-hash-target>Milk Venom (DC 20)</h3>
<p>The companion can be coaxed into providing a single dose of venom on command. This process takes 10 minutes, and it requires a vial or similar container in which to store the poison. A companion that has been specifically trained to be milked of its venom never bites, stings, or otherwise poisons its handler when being milked, although the handler must still succeed at a <Link to="/skill/handle_animal">Handle Animal</Link> check to successfully harvest the venom (see <Link to="/rule/harvesting_poisons">Harvesting Poisons</Link>). A companion must have the <strong>poison</strong> ability to be taught this trick.</p>
<h3 id="ability-companion_tricks-receive-spell" data-hash-target>Receive Spell (DC 25)</h3>
<p>The companion has been trained to be the recipient of a specific spell (chosen at the time the animal is taught the trick), allowing it to fully take advantage of the spell's effects. The spell should be one that grants the companion an ability it might not normally be intelligent enough to make use of or one that it might not even realize it has (such as <Link to="/spell/air_walk">air walk</Link>). The companion is able to recognize when it has been affected by this spell and can take full advantage of the spell's effects. At the GM's discretion, a companion can also be trained to receive certain non-spell effects, such as those granted by an <Link to="/magic-wondrous/elixir_of_fire_breath">elixir of fire breathing</Link>. The companion can be taught this trick multiple times; each time it learns this trick, it becomes trained to utilize a different spell effect.</p>
<h3 id="ability-companion_tricks-rescue" data-hash-target>Rescue (DC 20)</h3>
<p>The companion has been trained to drag its handler or another creature that the handler designates out of danger and to a safe place in the event that the handler or creature is incapacitated. If a creature that the companion is defending is rendered helpless or is slain, the companion will carry, drag, or otherwise move that creature out of danger. If the companion knows the get help trick, it will attempt to bring the creature it is rescuing to one of the creatures designated as "help." Otherwise, you can designate a single location in advance as a safe place, and the companion will attempt to bring the creature it is rescuing to that place. If it is unable to do either of these, the companion simply moves the creature to the nearest location of relative safety. A companion must have the <strong>deliver</strong> and <strong>guard</strong> tricks in order to learn this trick.</p>
<h3 id="ability-companion_tricks-speak" data-hash-target>Speak (DC 25)</h3>
<p>The companion is able to communicate very simple concepts through barks, gestures, whistles, or similar actions. The companion's vocabulary is extremely limited, generally restricted to "yes," "no," and counting up to three. The companion is also able to recognize and respond to up to two specific questions per point of Intelligence. The companion does not so much understand the words as recognize the sound of them, and it responds accordingly. This trick does not actually increase the companion's capacity to understand concepts and ideas; it can be taught a way to communicate the concept of "food," for example, but it won't distinguish cooked food from raw food, and it might not even recognize as food anything that is not part of its own diet. A companion must have an Intelligence score of 2 or higher to learn this trick.</p>
<h3 id="ability-companion_tricks-spin-silk" data-hash-target>Spin Silk (DC 20)</h3>
<p>The companion can create strands of delicate yet incredibly strong silk. Harvesting the silk takes 10 minutes, and it can be done once per day. This silk functions identically to a silk rope. The companion can produce a total number of feet of silk equal to 10 times its Constitution score per day, which can be divided as the handler chooses in 10-foot increments. Silk produced in this way degrades into uselessness after 24 hours. Only companions with the web ability can learn this trick.</p>
<blockquote>
<h4 id="ability-companion_tricks-cocoon" data-hash-target>Cocoon (DC 15)</h4>
<p>The companion can cocoon an object or a helpless or willing Huge or smaller creature in webbing. The amount of time this takes depends on the size of the creature or object to be cocooned, as outlined on the following table.</p>
<blockquote>
<ScrollContainer id="ability-companion_tricks--table-0"><table>
<thead>
<tr>
<th>Target Size</th>
<th>Time to Cocoon</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>1 minute</td>
</tr>
<tr>
<td>Small or Medium</td>
<td>10 minutes</td>
</tr>
<tr>
<td>Large</td>
<td>1 hour</td>
</tr>
<tr>
<td>Huge</td>
<td>4 hours</td>
</tr>
</tbody></table></ScrollContainer>
</blockquote>
<p>The cocoon has hardness 2 and 10 hit points. A creature trapped within the cocoon is effectively pinned, and it can attempt an Escape Artist check or combat maneuver check as a full-round action to escape (DC = 20 + the companion's CMD). Alternatively, a DC 25 Strength check can break the cocoon. The companion must know the <strong>spin silk</strong> trick before it can learn this trick.</p>
</blockquote>
<h3 id="ability-companion_tricks-subdue" data-hash-target>Subdue (DC 15)</h3>
<p>The companion can attempt to subdue opponents. Once the command is given, the companion makes all its natural attacks as nonlethal attacks (taking the typical -4 penalty on attack rolls when using normally lethal attacks) until ordered to do otherwise.</p>
<h3 id="ability-companion_tricks-take-root" data-hash-target>Take Root (DC 15)</h3>
<p>The companion extends its roots into the soil beneath it, anchoring itself in place and drawing water and nutrients from the soil. Taking root is a full-round action that provokes attacks of opportunity. While rooted, the companion cannot move, but it can otherwise act normally and gains a +4 bonus to CMD to resist bull rush, drag, overrun, reposition, and trip attempts. If the companion remains rooted for at least 1 hour, it absorbs enough water and nutrients to feed itself for a day. A separate command causes the companion to uproot itself as a full-round action. The companion can take root only in areas of soft soil. Only plant companions can learn this trick.</p>
<blockquote>
<h4 id="ability-companion_tricks-pose-as-scenery" data-hash-target>Pose as Scenery (DC 20)</h4>
<p>The companion freezes in place, seeming to be a mundane plant rather than a plant creature. The companion must have taken root in order to use this trick. It attempts a Disguise check with a +8 circumstance bonus, opposed by the Perception checks of observers. If it succeeds at the opposed check, the observer mistakes it for an ordinary, harmless plant. The companion must have the take root trick in order to learn this trick. Only plant companions can learn this trick.</p>
</blockquote>
<h3 id="ability-companion_tricks-withhold-venom" data-hash-target>Withhold Venom (DC 20)</h3>
<p>The companion can be ordered to avoid injecting poison into creatures it strikes with whatever natural attack would normally deliver venom. As long as the companion has been ordered to withhold its venom, successful hits with that natural attack deal damage as normal and convey all other effects that they normally would, but they do not expose the target to the companion's poison. Only companions with the <strong>poison</strong> special ability can learn this trick.</p>
</>};
const _bardic_performances = {title: "Bardic Performances", topLink: ["Bard","class/bard"], jsx: <div className="compilation"><h2 id="ability-bardic_performances-bardic-performances">Bardic Performances</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 35</Link><br/>A bard is trained to use the Perform skill to create magical effects on those around him, including himself if desired. He can use this ability for a number of rounds per day equal to 4 + his Charisma modifier. At each level after 1st a bard can use bardic performance for 2 additional rounds per day. Each round, the bard can produce any one of the types of bardic performance that he has mastered, as indicated by his level.</p>
<p>Starting a bardic performance is a standard action, but it can be maintained each round as a free action. Changing a bardic performance from one effect to another requires the bard to stop the previous performance and start a new one as a standard action. A bardic performance cannot be disrupted, but it ends immediately if the bard is killed, <Link to="/rule/paralyzed">paralyzed</Link>, <Link to="/misc/stunned">stunned</Link>, knocked <Link to="/misc/unconscious">unconscious</Link>, or otherwise prevented from taking a free action to maintain it each round. A bard cannot have more than one bardic performance in effect at one time.</p>
<p>At 7th level, a bard can start a bardic performance as a move action instead of a standard action. At 13th level, a bard can start a bardic performance as a swift action.</p>
<p>Each bardic performance has audible components, visual components, or both.</p>
<p>If a bardic performance has audible components, the targets must be able to hear the bard for the performance to have any effect, and many such performances are language dependent (as noted in the description. A deaf bard has a 20% chance to fail when attempting to use a bardic performance with an audible component. If he fails this check, the attempt still counts against his daily limit. Deaf creatures are immune to bardic performances with audible components.</p>
<p>If a bardic performance has a visual component, the targets must have line of sight to the bard for the performance to have any effect. A blind bard has a 50% chance to fail when attempting to use a bardic performance with a visual component. If he fails this check, the attempt still counts against his daily limit. Blind creatures are immune to bardic performances with visual components.</p>
<hr/>
<p><strong className="hl"><Link to="/performance/countersong">Countersong (Su):</Link></strong> At 1st level, a bard learns to counter magic effects that depend on sound (but not spells that have verbal components). Each round of the countersong he makes a Perform (keyboard, percussion, wind, string, or sing) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a non-instantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform skill check result for the save. Countersong does not work on effects that don't allow saves. Countersong relies on audible components.</p>
<p><strong className="hl"><Link to="/performance/distraction">Distraction (Su):</Link></strong> At 1st level, a bard can use his performance to counter magic effects that depend on sight. Each round of the distraction, he makes a Perform (act, comedy, dance, or oratory) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by an illusion (pattern) or illusion (figment) magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform skill check proves to be higher. If a creature within range of the distraction is already under the effect of a non-instantaneous illusion (pattern) or illusion (figment) magical attack, it gains another saving throw against the effect each round it sees the distraction, but it must use the bard's Perform skill check result for the save. Distraction does not work on effects that don't allow saves. Distraction relies on visual components.</p>
<p><strong className="hl"><Link to="/performance/fascinate">Fascinate (Su):</Link></strong> Fascinate is an enchantment (compulsion), mind-affecting ability. Fascinate relies on audible and visual components in order to function.</p>
<p><strong className="hl"><Link to="/performance/inspire_courage">Inspire Courage (Su):</Link></strong> A 1st-level bard can use his performance to inspire courage in his allies (including himself), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to perceive the bard's performance. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 competence bonus on attack and weapon damage rolls. At 5th level, and every six bard levels thereafter, this bonus increases by +1, to a maximum of +4 at 17th level. Inspire courage is a mind-affecting ability. Inspire courage can use audible or visual components. The bard must choose which component to use when starting his performance.</p>
<p><strong className="hl"><Link to="/performance/inspire_competence">Inspire Competence (Su):</Link></strong> A bard of 3rd level or higher can use his performance to help an ally succeed at a task. That ally must be within 30 feet and be able to hear the bard. The ally gets a +2 competence bonus on skill checks with a particular skill as long as she continues to hear the bard's performance. This bonus increases by +1 for every four levels the bard has attained beyond 3rd (+3 at 7th, +4 at 11th, +5 at 15th, and +6 at 19th). Certain uses of this ability are infeasible, such as Stealth, and may be disallowed at the GM's discretion. A bard can't inspire competence in himself. Inspire competence relies on audible components.</p>
<p><strong className="hl"><Link to="/performance/suggestion">Suggestion (Sp):</Link></strong> Making a <em>suggestion</em> does not count against a bard's daily use of bardic performance. A Will saving throw (DC 10 + 1/2 the bard's level + the bard's Cha modifier) negates the effect. This ability affects only a single creature. <em>Suggestion</em> is an enchantment (compulsion), mind affecting, language-dependent ability and relies on audible components.</p>
<p><strong className="hl"><Link to="/performance/dirge_of_doom">Dirge of Doom (Su):</Link></strong> A bard of 8th level or higher can use his performance to foster a sense of growing dread in his enemies, causing them to become <Link to="/misc/shaken">shaken</Link>. To be affected, an enemy must be within 30 feet and able to see and hear the bard's performance. The effect persists for as long as the enemy is within 30 feet and the bard continues his performance. This performance cannot cause a creature to become <Link to="/misc/frightened">frightened</Link> or <Link to="/misc/panicked">panicked</Link>, even if the targets are already shaken from another effect. Dirge of doom is a mind-affecting fear effect, and it relies on audible and visual components.</p>
<p><strong className="hl"><Link to="/performance/inspire_greatness">Inspire Greatness (Su):</Link></strong> A bard of 9th level or higher can use his performance to inspire greatness in himself or a single willing ally within 30 feet, granting extra fighting capability. For every three levels the bard attains beyond 9th, he can target an additional ally while using this performance (up to a maximum of four targets at 18th level). To inspire greatness, all of the targets must be able to see and hear the bard. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependent. Inspire greatness is a mind-affecting ability and it relies on audible and visual components.</p>
<p><strong className="hl"><Link to="/performance/soothing_performance">Soothing Performance (Su):</Link></strong> A bard of 12th level or higher can use his performance to create an effect equivalent to a <Link to="/spell/mass_cure_serious_wounds">mass cure serious wounds</Link>, using the bard's level as the caster level. In addition, this performance removes the fatigued, sickened, and shaken conditions from all those affected. Using this ability requires 4 rounds of continuous performance, and the targets must be able to see and hear the bard throughout the performance. Soothing performance affects all targets that remain within 30 feet throughout the performance. Soothing performance relies on audible and visual components.</p>
<p><strong className="hl"><Link to="/performance/frightening_tune">Frightening Tune (Sp):</Link></strong> A bard of 14th level or higher can use his performance to cause fear in his enemies. To be affected, an enemy must be able to hear the bard perform and be within 30 feet. Each enemy within range receives a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) to negate the effect. If the save succeeds, the creature is immune to this ability for 24 hours. If the save fails, the target becomes <Link to="/misc/frightened">frightened</Link> and flees for as long as the target can hear the bard's performance. Frightening tune relies on audible components.</p>
<p><strong className="hl"><Link to="/performance/inspire_heroics">Inspire Heroics (Su):</Link></strong> A bard of 15th level or higher can inspire tremendous heroism in himself or a single ally within 30 feet. For every three bard levels the character attains beyond 15th, he can inspire heroics in an additional creature. To inspire heroics, all of the targets must be able to see and hear the bard. Inspired creatures gain a +4 morale bonus on saving throws and a +4 dodge bonus to AC. This effect lasts for as long as the targets are able to witness the performance. Inspire heroics is a mind-affecting ability that relies on audible and visual components.</p>
<p><strong className="hl"><Link to="/performance/mass_suggestion">Mass Suggestion (Sp):</Link></strong> This ability functions just like <Link to="/performance/suggestion">suggestion</Link>, but allows a bard of 18th level or higher to make a <em>suggestion</em> simultaneously to any number of creatures that he has already fascinated. <em>Mass suggestion</em> is an enchantment (compulsion), mind-affecting, language-dependent ability that relies on audible components.</p>
<p><strong className="hl"><Link to="/performance/deadly_performance">Deadly Performance (Su):</Link></strong> A bard of 20th level or higher can use his performance to cause one enemy to die from joy or sorrow. To be affected, the target must be able to see and hear the bard perform for 1 full round and be within 30 feet. The target receives a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) to negate the effect. If a creature's saving throw succeeds, the target is <Link to="/misc/staggered">staggered</Link> for 1d4 rounds, and the bard cannot use deadly performance on that creature again for 24 hours. If a creature's saving throw fails, it dies. Deadly performance is a mind-affecting death effect that relies on audible and visual components.</p>
</div>};
const _raging_song = {title: "Raging Song", topLink: ["Skald","class/skald"], jsx: <><h2 id="ability-raging_song-raging-song">Raging Song</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 49</Link><br/>A skald is trained to use music, oration, and similar performances to inspire his allies to feats of strength and ferocity. At 1st level, a skald can use this ability for a number of rounds per day equal to 3 + his Charisma modifier. For each level thereafter, he can use raging song for 2 additional rounds per day.</p>
<p>Starting a raging song is a standard action, but it can be maintained each round as a free action. A raging song cannot be disrupted, but it ends immediately if the skald is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action each round to maintain it. A raging song counts as the bard's <Link to="/ability/bardic_performance">bardic performance</Link> special ability for any effect that affects bardic performances.</p>
<p>A raging song has audible components, but not visual components. Affected allies must be able to hear the skald for the song to have any effect. A deaf skald has a 20% chance to fail when attempting to use a raging song. If he fails this check, the attempt still counts against his daily limit. <Link to="/misc/deaf">Deaf</Link> creatures are immune to raging songs.</p>
<p>If a raging song affects allies, when the skald begins a raging song and at the start of each ally's turn in which they can hear the raging song, the skald's allies must decide whether to accept or refuse its effects. This is not an action. <Link to="/misc/unconscious">Unconscious</Link> allies automatically accept the song. If accepted, the raging song's effects last for that ally's turn or until the song ends, whichever comes first.</p>
<p>At 7th level, a skald can start a raging song as a move action instead of a standard action. At 13th level, a skald can start a raging song as a swift action instead.</p>
<blockquote>
<p><strong>Inspired Rage (Su)</strong>: At 1st level, affected allies gain a +2 morale bonus to Strength and Constitution and a +1 morale bonus on Will saving throws, but also take a -1 penalty to AC. While under the effects of inspired rage, allies other than the skald cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. At 4th level and every 4 levels thereafter, the song's bonuses on Will saves increase by 1; the penalty to AC doesn't change. At 8th and 16th levels, the song's bonuses to Strength and Constitution increase by 2. (Unlike the barbarian's rage ability, those affected are not fatigued after the song ends.)</p>
<p>If an ally has her own rage class ability (such as barbarian's rage, bloodrager's bloodrage, or skald's inspired rage), she may use the Strength, Constitution, and Will saving throw bonuses, as well as AC penalties, based on her own ability and level instead of those from the skald (still suffering no fatigue afterward). However, inspired rage does not allow the ally to activate abilities dependent on other rage class abilities, such as rage powers, blood casting, or bloodrager bloodlines; the ally must activate her own rage class ability in order to use these features.</p>
<p><strong>Song of Marching (Su)</strong>: At 3rd level, a skald can use raging song to inspire his allies to move faster without suffering from fatigue. By expending 1 round of raging song, the skald invigorates allies within 60 feet, who may hustle for the next hour; this movement counts as a walk (not a hustle) for the purpose of accruing nonlethal damage and fatigue. The skald must continue to perform the song for the remainder of the hour, otherwise its effects end, but only 1 round of raging song is expended for that hour.</p>
<p><strong>Song of Strength (Su)</strong>: At 6th level, a skald can use raging song to inspire his allies to superhuman feats of strength. Once each round while the skald uses this performance, allies within 60 feet who can hear the skald may add 1/2 the skald's level to a Strength check or Strength-based skill check.</p>
<p><strong>Dirge of Doom (Su)</strong>: At 10th level, a skald can create a sense of growing dread in his enemies, causing them to become <Link to="/misc/shaken">shaken</Link>. This only affects enemies that are within 30 feet and able to hear the skald's performance. The effect persists for as long as the enemy is within 30 feet and the skald continues his performance. This cannot cause a creature to become frightened or panicked, even if the targets are already shaken from another effect. This is a sonic mind-affecting fear effect, and relies on audible components.</p>
<p><strong>Song of the Fallen (Su)</strong>: At 14th level, a skald can temporarily revive dead allies to continue fighting, with the same limitations as <Link to="/spell/raise_dead">raise dead</Link>. The skald selects a dead ally within 60 feet and expends 1 round of raging song to bring that ally back to life. The revived ally is alive but <Link to="/misc/staggered">staggered</Link>. Each round, the skald may expend another 1 round of raging song to keep that ally alive for another round. The ally automatically dies if the skald ends this performance or is interrupted. The skald may revive multiple allies with this ability (either at the same time or over successive rounds) but must expend 1 round of raging song per revived ally per round to maintain the effect.</p>
</blockquote>
</>};
const _familiars = {title: "Familiars", topLink: ["Wizard","class/wizard"], jsx: <><h2 id="ability-familiars-familiars">Familiars</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A familiar is an animal chosen by a spellcaster to aid him in his study of magic. It retains the appearance, Hit Dice, base attack bonus, base save bonuses, skills, and feats of the normal animal it once was, but is now a magical beast for the purpose of effects that depend on its type. Only a normal, unmodified animal may become a familiar. An animal companion cannot also function as a familiar.</p>
<p>A <Link to="/sidekick/familiar">familiar</Link> grants special abilities to its master, as given on the table below. These special abilities apply only when the master and familiar are within 1 mile of each other.</p>
<p>Levels of different classes that are entitled to familiars stack for the purpose of determining any familiar abilities that depend on the master's level.</p>
<p>If a familiar is lost or dies, it can be replaced 1 week later through a specialized ritual that costs 200 gp per wizard level. The ritual takes 8 hours to complete.</p>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio</Link>, <Link to="/source/ultimate_magic">Ultimate Magic</Link><br/>While most familiars are Tiny animals or magical beasts, spellcasters may acquire larger or more unusual creatures during their travels, which impart certain rules effects that should be considered at the table.</p>
<p>Small familiars threaten the areas around them like other Small creatures, and can be used to <Link to="/rule/flank">flank</Link> enemies, though both familiars and their masters are generally loath to employ such tactics, as the result is often a dead familiar. Small familiars are also harder to keep on a master's person than Tiny or smaller familiars; some form of magic item, like a <Link to="/magic-wondrous/bag_of_holding">bag of holding</Link>, is usually required.</p>
<p>Construct, plant, and vermin familiars gain an Intelligence score, and they lose the mindless trait if they had it. If such familiars lack a language, they communicate with their masters and other creatures of their kind (<Link to="/monster/greensting_scorpion">greensting scorpions</Link> with other scorpions, mobile plant creatures with other mobile plant creatures, and so on) by way of a strange combination of behaviors, slight changes in coloration, and sometimes even the excretion of scents or pheromones. Other types of creatures can't understand this communication without magical aid.</p>
<p>Outsiders and undead creatures are normally available only with the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat, and require no other special rules.</p>
<p>Improved familiars <Link to="/ability/improved_familiars">are listed here.</Link></p>
<ScrollContainer id="ability-familiars--table-0"><table>
<thead>
<tr>
<th>Familiar</th>
<th>Bonus to Master</th>
<th>Size</th>
<th>Special Info</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/monster/archaeopteryx">Archaeopteryx<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/fox">Arctic fox<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves</td>
<td>T</td>
<td>Uses fox statistics, with a +4 bonus to Stealth to blend into snow</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/arctic_hare">Arctic hare<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/arctic_tern">Arctic tern<IonRippleEffect /></Link></td>
<td>+3 bonus on Fly checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/armadillo">Armadillo<IonRippleEffect /></Link></td>
<td>+1 natural armor bonus to AC</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/bat">Bat<IonRippleEffect /></Link></td>
<td>+3 bonus on Fly checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/butterfly">Butterfly<IonRippleEffect /></Link></td>
<td>+3 bonus on Perform checks</td>
<td>D</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/cat">Cat<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/cat_margay">Cat, margay<IonRippleEffect /></Link></td>
<td>+3 bonus on Bluff checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/centipede_house">Centipede, house<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/chicken">Chicken<IonRippleEffect /></Link></td>
<td>+3 hit points</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/cockroach">Cockroach<IonRippleEffect /></Link></td>
<td>+3 hit points</td>
<td>D</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/compsognathus">Compsognathus dinosaur<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/crab_king">Crab, king<IonRippleEffect /></Link></td>
<td>+2 bonus on combat maneuver checks to start and maintain a grapple</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/creeper_ivy">Creeper ivy<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks</td>
<td>T</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/dodo">Dodo<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/dolphin_popoto">Dolphin, popoto<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/donkey_rat">Donkey rat<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/dwarf_caiman">Dwarf caiman<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/dweomer_cap">Dweomer cap<IonRippleEffect /></Link></td>
<td>+3 bonus on Spellcraft checks to identify magic items</td>
<td>T</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/weasel">Ermine<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves</td>
<td>T</td>
<td>Uses weasel statistics, with a +4 bonus to Stealth to blend into snow</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/fire_salamander">Fire salamander<IonRippleEffect /></Link></td>
<td>+3 bonus on Escape Artist checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/flea_giant">Flea, giant<IonRippleEffect /></Link></td>
<td>+3 bonus on Fortitude saves against disease</td>
<td>S</td>
<td>Vermin familiar; can only be selected by witches</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/flowering_lattice">Flowering lattice<IonRippleEffect /></Link></td>
<td>+3 bonus on Diplomacy checks</td>
<td>D</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/flying_fox">Flying fox<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/fox">Fox<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/goat">Goat<IonRippleEffect /></Link></td>
<td>+3 bonus on Survival checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/hawk">Hawk<IonRippleEffect /></Link></td>
<td>+3 bonus on sight-based and opposed Perception checks in bright light</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/hedgehog">Hedgehog<IonRippleEffect /></Link></td>
<td>+2 bonus on Will saves</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/horned_lizard">Horned lizard<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/ioun_wyrd">Ioun wyrd<IonRippleEffect /></Link></td>
<td>+1 natural armor bonus to AC</td>
<td>T</td>
<td>Construct familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/isopod_giant">Isopod, giant<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves (<Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link> pg. 191) <strong>or</strong> +1 natural armor bonus to AC (<Link to="/source/animal_archive">Animal Archive</Link> pg. 10)</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/jerboa">Jerboa<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/kakapo">Kakapo<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/keulia">Keulia<IonRippleEffect /></Link></td>
<td>+3 bonus to Disguise checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/koala">Koala<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/lamprey">Lamprey<IonRippleEffect /></Link></td>
<td>+3 hit points</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/lemming">Lemming<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/leopard_slug">Leopard Slug<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks</td>
<td>D</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/lich_newt">Lich newt<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves against disease and poison</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/lizard">Lizard<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/dwarf_caiman">Marine iguana<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>S</td>
<td>Use dwarf caiman stats for marine iguanas, but increase its base speed and swim speed by 10 feet each, and remove the sprint ability</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/meerkat">Meerkat<IonRippleEffect /></Link></td>
<td>+3 bonus on Escape Artist checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/mole_ff">Mole (FF)<IonRippleEffect /></Link></td>
<td>+3 bonus on smell-, taste-, and touch-based Perception checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/mole_uw">Mole (UW)<IonRippleEffect /></Link></td>
<td>+3 bonus on smell-, taste-, and touch-based Perception checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/weasel">Mongoose<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td>Uses weasel statistics, but it has a +4 bonus on saving throws against poison from snakes</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/monkey">Monkey<IonRippleEffect /></Link></td>
<td>+3 bonus on Acrobatics checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/moth">Moth<IonRippleEffect /></Link></td>
<td>+3 bonus on Survival checks</td>
<td>D</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/octopus_blue_ringed">Octopus, blue-ringed<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/hawk">Osprey<IonRippleEffect /></Link></td>
<td>+3 bonus on Survival checks</td>
<td>T</td>
<td>Uses hawk statistics</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/otter">Otter<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/owl">Owl<IonRippleEffect /></Link></td>
<td>+3 bonus on sight-based and opposed Perception checks in shadows or darkness</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/raven">Parrot<IonRippleEffect /></Link></td>
<td>+3 bonus on Linguistics checks</td>
<td>T</td>
<td>Uses raven statistics</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/peafowl">Peafowl (Peacock)<IonRippleEffect /></Link></td>
<td>+3 bonus on Intimidate checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/penguin">Penguin<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/petrifern">Petrifern<IonRippleEffect /></Link></td>
<td>+1 natural armor bonus to AC</td>
<td>D</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/petromin">Petromin<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/pig">Pig<IonRippleEffect /></Link></td>
<td>+3 bonus on Diplomacy checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/platypus">Platypus<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/ptarmigan">Ptarmigan<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/pufferfish">Pufferfish<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/puffin">Puffin<IonRippleEffect /></Link></td>
<td>+2 bonus on Stealth checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/rabbit">Rabbit<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/raccoon">Raccoon<IonRippleEffect /></Link></td>
<td>+3 bonus on Sleight of Hand checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/rat">Rat<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/raven">Raven<IonRippleEffect /></Link></td>
<td>+3 bonus on Appraise checks</td>
<td>T</td>
<td>Familiar can speak one language as a supernatural ability</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/ravenous_tumbleweed">Ravenous Tumbleweed<IonRippleEffect /></Link></td>
<td>10-foot bonus to speed when using the <Link to="/rule/charge">charge</Link>, <Link to="/rule/run">run</Link>, or <Link to="/rule/withdraw">withdraw</Link> actions</td>
<td>T</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/razor_fern">Razor Fern<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>T</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/red_panda">Red panda<IonRippleEffect /></Link></td>
<td>+3 bonus on Acrobatics checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/rhamphorhynchus">Rhamphorhynchus<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/rock_tuatara">Rock Tuatara<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks in rocky environments</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/sawleg_locust">Sawleg locust<IonRippleEffect /></Link></td>
<td>+3 bonus on Acrobatics checks</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/scorpion_greensting">Scorpion, greensting<IonRippleEffect /></Link></td>
<td>+4 bonus on initiative checks (if familiar is within 1 mile)</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/viper">Sea krait<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td>Uses viper statistics, but has a swim speed of 30 ft.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/seal">Seal<IonRippleEffect /></Link></td>
<td>+3 bonus on Swim checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/shimmerwing_dragonfly">Shimmerwing dragonfly<IonRippleEffect /></Link></td>
<td>+3 bonus on Fly checks</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/skunk">Skunk<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/sloth">Sloth<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/hawk">Snail kite<IonRippleEffect /></Link></td>
<td>+3 bonus on Fly checks</td>
<td>T</td>
<td>Uses hawk statistics</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/snapping_turtle">Snapping turtle<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/snark">Snark<IonRippleEffect /></Link></td>
<td>+3 bonus on Stealth checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/owl">Snowy owl<IonRippleEffect /></Link></td>
<td>+3 bonus on sight-based and opposed Perception checks when in shadows or darkness (use owl statistics, +4 Stealth to blend into snow)</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/spider_scarlet">Spider, scarlet<IonRippleEffect /></Link></td>
<td>+3 bonus on Climb checks (if familiar is within 1 mile)</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/spiny_starfish">Spiny starfish<IonRippleEffect /></Link></td>
<td>Treats their effective character level as 4 higher when recovering hit points by <Link to="/rule/resting">resting</Link></td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/squirrel">Squirrel<IonRippleEffect /></Link></td>
<td>+3 bonus on Escape Artist checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/flying_squirrel">Squirrel, flying<IonRippleEffect /></Link></td>
<td>+3 bonus on Fly checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/suture_vine">Suture vine<IonRippleEffect /></Link></td>
<td>+3 bonus on Heal checks</td>
<td>T</td>
<td>Plant familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/tardigrade_giant">Tardigrade, giant<IonRippleEffect /></Link></td>
<td>+2 bonus on Fortitude saves</td>
<td>D</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/tarsier">Tarsier<IonRippleEffect /></Link></td>
<td>+3 bonus on Acrobatics checks</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/tauhoti">Tauhoti<IonRippleEffect /></Link></td>
<td>+3 bonus on one Profession check of her choice, selected when gaining the familiar</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/thrush">Thrush<IonRippleEffect /></Link></td>
<td>+3 bonus on Diplomacy checks</td>
<td>D</td>
<td>Familiar can speak one language as a supernatural ability</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/toad">Toad<IonRippleEffect /></Link></td>
<td>Gains 3 hit points</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/torble">Torble<IonRippleEffect /></Link></td>
<td>+2 bonus on Craft (alchemy) checks</td>
<td>D</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/raven">Toucan<IonRippleEffect /></Link></td>
<td>+3 bonus on Diplomacy checks</td>
<td>T</td>
<td>Uses raven statistics, but cannot speak</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/trilobite">Trilobite<IonRippleEffect /></Link></td>
<td>+1 natural armor bonus to AC</td>
<td>T</td>
<td>Vermin familiar</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/tuatara">Tuatara<IonRippleEffect /></Link></td>
<td>+3 bonus on Survival checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/tullimonstrum">Tullimonstrum<IonRippleEffect /></Link></td>
<td>+3 bonus on Perception checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/turtle">Turtle<IonRippleEffect /></Link></td>
<td>+1 natural armor bonus to AC</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/vampire_squid">Vampire squid<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/viper">Viper<IonRippleEffect /></Link></td>
<td>+3 bonus on Bluff checks</td>
<td>T</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/wallaby">Wallaby<IonRippleEffect /></Link></td>
<td>+3 bonus on Acrobatics checks</td>
<td>S</td>
<td></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/weasel">Weasel<IonRippleEffect /></Link></td>
<td>+2 bonus on Reflex saves</td>
<td>T</td>
<td></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _improved_familiars = {hasJL:true,title: "Improved Familiars", topLink: ["Wizard","class/wizard"], jsx: <><div className="jumpList" id="ability-improved_familiars-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-improved_familiars-available-at-3rd-level">Available at 3rd Level</InnerLink></li><li><InnerLink toTop to="ability-improved_familiars-available-at-4th-level">Available at 4th Level</InnerLink></li><li><InnerLink toTop to="ability-improved_familiars-available-at-5th-level">Available at 5th Level</InnerLink></li><li><InnerLink toTop to="ability-improved_familiars-available-at-7th-level">Available at 7th Level</InnerLink></li></ul></div><h2 id="ability-improved_familiars-improved-familiars">Improved Familiars</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>The <Link to="/feat/improved_familiar">Improved Familiar</Link> feat allows you to acquire a powerful familiar, but only when you could normally acquire a new familiar.</p>
<p>When choosing a familiar, the creatures listed below are also available to you. You may choose a familiar with an alignment up to one step away on each alignment axis (lawful through chaotic, good through evil).</p>
<p>Improved familiars otherwise use the rules for regular <Link to="/sidekick/familiar">familiars</Link>, with two exceptions: if the creature's type is something other than animal, its type does not change; and improved familiars do not gain the ability to speak with other creatures of their kind (although many of them already have the ability to communicate).</p>
<p>The familiars below are organized according to the level the master must be, and the alignment the master must be within one step of.</p>
<h3 id="ability-improved_familiars-available-at-3rd-level" data-hash-target>Available at 3rd Level</h3>
<p><strong>Any alignment:</strong></p>
<ul>
<li><Link to="/template/fey_touched">Fey-touched</Link> <Link to="/monster/toad">toad</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-T-1" id="ability-improved_familiars-ref-T-1" data-hash-target to="ability-improved_familiars-T">1</InnerLink></sup></li>
</ul>
<p><strong>Chaotic neutral:</strong></p>
<ul>
<li><Link to="/template/entropic">Entropic</Link> <Link to="/monster/monkey">monkey</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-T-2" id="ability-improved_familiars-ref-T-2" data-hash-target to="ability-improved_familiars-T">1</InnerLink></sup></li>
<li><Link to="/monster/pyrausta">Pyrausta</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-P-1" id="ability-improved_familiars-ref-P-1" data-hash-target to="ability-improved_familiars-P">2</InnerLink></sup></li>
</ul>
<p><strong>Lawful neutral:</strong></p>
<ul>
<li><Link to="/template/resolute">Resolute</Link> <Link to="/monster/owl">owl</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-T-3" id="ability-improved_familiars-ref-T-3" data-hash-target to="ability-improved_familiars-T">1</InnerLink></sup></li>
</ul>
<p><strong>True neutral:</strong></p>
<ul>
<li><Link to="/monster/coral_capuchin">Coral capuchin</Link></li>
<li><Link to="/monster/dire_rat">Dire rat</Link></li>
<li><Link to="/monster/skvader">Skvader</Link></li>
</ul>
<p><strong>Neutral evil:</strong></p>
<ul>
<li><Link to="/monster/beheaded">Beheaded</Link></li>
<li><Link to="/template/fiendish">Fiendish</Link> <Link to="/monster/viper">viper</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-T-4" id="ability-improved_familiars-ref-T-4" data-hash-target to="ability-improved_familiars-T">1</InnerLink></sup></li>
</ul>
<p><strong>Neutral good:</strong></p>
<ul>
<li><Link to="/template/celestial">Celestial</Link> <Link to="/monster/hawk">hawk</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-T-5" id="ability-improved_familiars-ref-T-5" data-hash-target to="ability-improved_familiars-T">1</InnerLink></sup></li>
</ul>
<h3 id="ability-improved_familiars-available-at-4th-level" data-hash-target>Available at 4th Level</h3>
<p><strong>Chaotic neutral:</strong></p>
<ul>
<li><Link to="/monster/mockingfey">Mockingfey</Link></li>
</ul>
<h3 id="ability-improved_familiars-available-at-5th-level" data-hash-target>Available at 5th Level</h3>
<p><strong>Any alignment:</strong></p>
<ul>
<li><Link to="/monster/almiraj">Almiraj</Link></li>
</ul>
<p><strong>Any evil:</strong> <sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-E-1" id="ability-improved_familiars-ref-E-1" data-hash-target to="ability-improved_familiars-E">3</InnerLink></sup></p>
<ul>
<li><Link to="/monster/sootwing_bat">Sootwing bat</Link></li>
<li><Link to="/monster/isitoq">Isitoq</Link></li>
</ul>
<p><strong>Any alignment (see creature text):</strong></p>
<ul>
<li><Link to="/monster/sin_seeker">Sin seeker</Link></li>
</ul>
<p><strong>Chaotic evil:</strong></p>
<ul>
<li><Link to="/monster/zoog">Zoog</Link></li>
</ul>
<p><strong>Chaotic neutral:</strong></p>
<ul>
<li><Link to="/monster/katroome">Katroome</Link></li>
<li><Link to="/monster/sprite">Sprite</Link></li>
</ul>
<p><strong>True neutral:</strong></p>
<ul>
<li><Link to="/monster/brain_mole">Brain Mole</Link></li>
<li><Link to="/monster/brownie">Brownie</Link></li>
<li><Link to="/monster/carbuncle">Carbuncle</Link></li>
<li><Link to="/family/elemental">Small Elemental</Link> (any type)</li>
<li><Link to="/monster/stirge">Stirge</Link></li>
<li><Link to="/monster/wolpertinger">Wolpertinger</Link></li>
</ul>
<h3 id="ability-improved_familiars-available-at-7th-level" data-hash-target>Available at 7th Level</h3>
<p><strong>Any alignment:</strong></p>
<ul>
<li><Link to="/monster/clockwork_familiar">Clockwork familiar</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-C-1" id="ability-improved_familiars-ref-C-1" data-hash-target to="ability-improved_familiars-C">4</InnerLink></sup></li>
<li><Link to="/monster/homunculus">Homunculus</Link><sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-H-1" id="ability-improved_familiars-ref-H-1" data-hash-target to="ability-improved_familiars-H">5</InnerLink></sup></li>
</ul>
<p><strong>Any evil:</strong> <sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-E-2" id="ability-improved_familiars-ref-E-2" data-hash-target to="ability-improved_familiars-E">3</InnerLink></sup></p>
<ul>
<li><Link to="/monster/seru">Seru</Link></li>
<li><Link to="/monster/shadow_drake">Shadow drake</Link></li>
</ul>
<p><strong>Any non-lawful:</strong> <sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-E-3" id="ability-improved_familiars-ref-E-3" data-hash-target to="ability-improved_familiars-E">3</InnerLink></sup></p>
<ul>
<li><Link to="/monster/pooka">Pooka</Link></li>
</ul>
<p><strong>Chaotic:</strong></p>
<ul>
<li><Link to="/monster/chuspiki">Chuspiki</Link></li>
</ul>
<p><strong>Chaotic evil:</strong></p>
<ul>
<li><Link to="/monster/cythnigot">Cythnigot qlippoth</Link></li>
<li><Link to="/monster/nuglub">Nuglub gremlin</Link></li>
<li><Link to="/monster/quasit">Quasit (Demon)</Link></li>
<li><Link to="/monster/ratling">Ratling</Link></li>
</ul>
<p><strong>Chaotic good:</strong></p>
<ul>
<li><Link to="/monster/caypup">Caypup</Link></li>
<li><Link to="/monster/faerie_dragon">Faerie dragon</Link></li>
<li><Link to="/monster/house_drake">House drake</Link></li>
<li><Link to="/monster/lyrakien">Lyrakien azata</Link></li>
</ul>
<p><strong>Chaotic neutral:</strong></p>
<ul>
<li><Link to="/monster/cat_sith">Cat sith</Link></li>
<li><Link to="/monster/tidepool_dragon">Tidepool dragon</Link></li>
<li><Link to="/monster/dweomercat_cub">Dweomercat Cub</Link></li>
<li><Link to="/monster/liminal_sprite">Liminal sprite</Link></li>
<li><Link to="/monster/nycar">Nycar</Link></li>
<li><Link to="/monster/voidworm">Voidworm (protean)</Link></li>
<li><Link to="/monster/xiao">Xiao</Link></li>
</ul>
<p><strong>Good-aligned:</strong> <sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-E-4" id="ability-improved_familiars-ref-E-4" data-hash-target to="ability-improved_familiars-E">3</InnerLink></sup></p>
<ul>
<li><Link to="/monster/nehushtan">Nehushtan</Link></li>
</ul>
<p><strong>Lawful evil:</strong></p>
<ul>
<li><Link to="/monster/augur">Augur kyton</Link></li>
<li><Link to="/monster/imp">Imp (Devil)</Link></li>
<li><Link to="/monster/raktavarna">Raktavarna rakshasa</Link></li>
<li><Link to="/monster/spirit_oni">Spirit oni</Link></li>
<li><Link to="/monster/tripurasura">Tripurasura asura</Link></li>
<li><Link to="/monster/typhilipede">Typhilipede</Link></li>
</ul>
<p><strong>Lawful good:</strong></p>
<ul>
<li><Link to="/monster/harbinger_archon">Harbinger archon</Link></li>
</ul>
<p><strong>Lawful neutral:</strong></p>
<ul>
<li><Link to="/monster/arbiter">Arbiter inevitable</Link></li>
<li><Link to="/monster/shikigami">Shikigami kami</Link></li>
</ul>
<p><strong>Lawful:</strong> <sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-E-5" id="ability-improved_familiars-ref-E-5" data-hash-target to="ability-improved_familiars-E">3</InnerLink></sup></p>
<ul>
<li><Link to="/monster/familiar_automaton">Familiar automaton</Link></li>
</ul>
<p><strong>True neutral:</strong></p>
<ul>
<li><Link to="/monster/aether_wysp">Aether wysp</Link></li>
<li><Link to="/monster/air_wysp">Air wysp</Link></li>
<li><Link to="/monster/calligraphy_wyrm">Calligraphy Wyrm</Link></li>
<li><Link to="/monster/cyphergull">Cyphergull</Link></li>
<li><Link to="/monster/earth_wysp">Earth wysp</Link></li>
<li><Link to="/monster/fire_wysp">Fire wysp</Link></li>
<li><Link to="/monster/galluvix">Galluvix</Link></li>
<li><Link to="/monster/mamiwa">Mamiwa</Link></li>
<li><Link to="/monster/mephit">Mephit (any type)</Link></li>
<li><Link to="/monster/paracletus">Paracletus aeon</Link></li>
<li><Link to="/monster/pipefox">Pipefox</Link></li>
<li><Link to="/monster/pseudosphinx">Pseudosphinx</Link></li>
<li><Link to="/monster/pseudowyvern">Pseudowyvern</Link></li>
<li><Link to="/monster/psyche_serpent">Psyche serpent</Link></li>
<li><Link to="/monster/water_wysp">Water wysp</Link></li>
</ul>
<p><strong>True neutral:</strong></p>
<ul>
<li><Link to="/monster/nosoi">Nosoi (Psychopomp)</Link> <sup><InnerLink showBacklink="backlink-ability-improved_familiars-ref-N-1" id="ability-improved_familiars-ref-N-1" data-hash-target to="ability-improved_familiars-N">6</InnerLink></sup></li>
</ul>
<p><strong>Neutral evil:</strong></p>
<ul>
<li><Link to="/monster/cacodaemon">Cacodaemon daemon</Link></li>
<li><Link to="/monster/doru">Doru div</Link></li>
<li><Link to="/monster/esipil">Esipil sahkil</Link></li>
<li><Link to="/monster/hellfire_ignis">Hellfire Ignis</Link></li>
<li><Link to="/monster/impundulu">Impundulu</Link></li>
<li><Link to="/monster/smokeshade">Smokeshade</Link></li>
</ul>
<p><strong>Neutral good:</strong></p>
<ul>
<li><Link to="/monster/cassisian">Cassisian angel</Link></li>
<li><Link to="/monster/ceru">Ceru</Link></li>
<li><Link to="/monster/pseudodragon">Pseudodragon</Link></li>
<li><Link to="/monster/silvanshee">Silvanshee agathion</Link></li>
</ul>
<section data-footnotes>
<h3 id="ability-improved_familiars-label">Footnotes</h3>
<ol>
<li id="ability-improved_familiars-T">
<p>This may be replaced with any other animal from the standard <Link to="/ability/familiar">familiar</Link> list, with the appropriate template (<Link to="/template/celestial">celestial</Link>, <Link to="/template/entropic">entropic</Link>, <Link to="/template/fey_touched">fey-touched</Link>, <Link to="/template/fiendish">fiendish</Link>, or <Link to="/template/resolute">resolute</Link>) applied to it. <InnerLink id="backlink-ability-improved_familiars-ref-T-1" data-hash-target to="ability-improved_familiars-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-T-2" data-hash-target to="ability-improved_familiars-ref-T-2" aria-label="Back to reference T-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-T-3" data-hash-target to="ability-improved_familiars-ref-T-3" aria-label="Back to reference T-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-T-4" data-hash-target to="ability-improved_familiars-ref-T-4" aria-label="Back to reference T-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-T-5" data-hash-target to="ability-improved_familiars-ref-T-5" aria-label="Back to reference T-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="ability-improved_familiars-P">
<p>The pyrausta's heart spark glows slightly less brightly, but more steadily. This removes its fast healing ability and heart of flame special abilities. <InnerLink id="backlink-ability-improved_familiars-ref-P-1" data-hash-target to="ability-improved_familiars-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="ability-improved_familiars-E">
<p>The spellcaster's alignment <strong>must</strong> match this eactly, instead of being within one step of the familiar's alignment. <InnerLink id="backlink-ability-improved_familiars-ref-E-1" data-hash-target to="ability-improved_familiars-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-E-2" data-hash-target to="ability-improved_familiars-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-E-3" data-hash-target to="ability-improved_familiars-ref-E-3" aria-label="Back to reference E-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-E-4" data-hash-target to="ability-improved_familiars-ref-E-4" aria-label="Back to reference E-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-ability-improved_familiars-ref-E-5" data-hash-target to="ability-improved_familiars-ref-E-5" aria-label="Back to reference E-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="ability-improved_familiars-C">
<p>A clockwork familiar needs crafting; see monster entry <InnerLink id="backlink-ability-improved_familiars-ref-C-1" data-hash-target to="ability-improved_familiars-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="ability-improved_familiars-H">
<p>The master must first create the homunculus. <InnerLink id="backlink-ability-improved_familiars-ref-H-1" data-hash-target to="ability-improved_familiars-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="ability-improved_familiars-N">
<p>The spellcaster's alignment <strong>must</strong> be True Neutral, or the spellcaster must be a <Link to="/race/duskwalker">duskwalker</Link> with the <Link to="/feat/personal_chronicler">Personal Chronicler</Link> feat. <InnerLink id="backlink-ability-improved_familiars-ref-N-1" data-hash-target to="ability-improved_familiars-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _judgments = {hasJL:true,title: "Inquisitor Judgments", topLink: ["Inquisitor","class/inquisitor"], jsx: <><div className="jumpList" id="ability-judgments-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-judgments-destruction">Destruction</InnerLink></li><li><InnerLink toTop to="ability-judgments-healing">Healing</InnerLink></li><li><InnerLink toTop to="ability-judgments-justice">Justice</InnerLink></li><li><InnerLink toTop to="ability-judgments-piercing">Piercing</InnerLink></li><li><InnerLink toTop to="ability-judgments-protection">Protection</InnerLink></li><li><InnerLink toTop to="ability-judgments-purity">Purity</InnerLink></li><li><InnerLink toTop to="ability-judgments-resiliency">Resiliency</InnerLink></li><li><InnerLink toTop to="ability-judgments-resistance">Resistance</InnerLink></li><li><InnerLink toTop to="ability-judgments-smiting">Smiting</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 39</Link></p>
<p>When an inquisitor uses the Judgment ability (as a swift action), she must select one type of judgment to make. As a swift action, she can change this judgment to another type. If the inquisitor is evil, she receives profane bonuses instead of sacred, as appropriate. Neutral inquisitors must select profane or sacred bonuses. Once made, this choice cannot be changed.</p>
<div style={{clear:"both"}}></div><Ability id="ability-judgments-destruction" icon={["upgrade"]}>
<Pair single id="ability-judgments-destruction">Destruction</Pair>
<Pair title="Passive Ability">You gain a sacred bonus on all weapon damage rolls. This bonus is equal to 1 + <Link to="/misc/one_third">one-third</Link> of your inquisitor level.</Pair>
</Ability>
<Ability id="ability-judgments-healing" icon={["armor-upgrade"]}>
<Pair single id="ability-judgments-healing">Healing</Pair>
<Pair title="Passive Ability">You're surrounded by a healing light, gaining <Link to="/umr/fast_healing">fast healing</Link> of an amount equal to 1 + <Link to="/misc/one_third">one-third</Link> of your inquisitor level.</Pair>
</Ability>
<Ability id="ability-judgments-justice" icon={["upgrade"]}>
<Pair single id="ability-judgments-justice">Justice</Pair>
<Pair title="Passive Ability">You gain a sacred bonus on all attack rolls. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your cavalier level.</Pair>
<Pair title="At 10th Level">The bonus is now doubled on all attack rolls made to confirm critical hits.</Pair>
</Ability>
<Ability id="ability-judgments-piercing" icon={["armor-upgrade"]}>
<Pair single id="ability-judgments-piercing">Piercing</Pair>
<Pair title="Passive Ability">You gain a sacred bonus on <Link to="/rule/concentration">concentration</Link> checks and caster level checks made to overcome a target's spell resistance. This bonus is equal to 1 + <Link to="/misc/one_third">one-third</Link> of your inquisitor level.</Pair>
</Ability>
<Ability id="ability-judgments-protection" icon={["armor-upgrade"]}>
<Pair single id="ability-judgments-protection">Protection</Pair>
<Pair title="Passive Ability">You're surrounded by a protective aura, granting a sacred bonus to Armor Class. This bonus is equal to 1 + one-fifth of your cavalier level.</Pair>
<Pair title="At 10th Level">The bonus is now doubled against attack rolls made to confirm critical hits against you.</Pair>
</Ability>
<Ability id="ability-judgments-purity" icon={["armor-upgrade"]}>
<Pair single id="ability-judgments-purity">Purity</Pair>
<Pair title="Passive Ability">You gain a sacred bonus on all saving throws. This bonus is equal to 1 + one-fifth of your cavalier level.</Pair>
<Pair title="At 10th Level">The bonus is now doubled against curses, diseases, and poisons.</Pair>
</Ability>
<Ability id="ability-judgments-resiliency" icon={["armor-upgrade"]}>
<Pair single id="ability-judgments-resiliency">Resiliency</Pair>
<Pair title="Passive Ability">You gain <Link to="/rule/dr">DR</Link> 1/magic.</Pair>
<Pair title="At 5th Level">You instead gain DR 2/magic.</Pair>
<Pair title="At 10th Level">You instead gain DR 3/chaotic, evil, good, or lawful, whichever is opposite to your alignment. If you are opposite to two, choose only one of them. If you are true neutral, you gain DR 3/magic, instead.</Pair>
<Pair title="At 15th Level">The DR increases to 4.</Pair>
<Pair title="At 20th Level">The DR increases to 5.</Pair>
</Ability>
<Ability id="ability-judgments-resistance" icon={["armor-upgrade"]}>
<Pair single id="ability-judgments-resistance">Resistance</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 2 against one energy type (acid, cold, electricity, fire, or sonic) chosen when the judgment is declared.</Pair>
<Pair title="At 3rd Level">Your resistance becomes 4.</Pair>
<Pair title="At 6th Level">Your resistance increases to 6.</Pair>
<Pair title="At 9th Level">Your resistance becomes 8.</Pair>
<Pair title="At 12th Level">Your resistance increases to 10.</Pair>
<Pair title="At 15th Level">Your resistance becomes 12.</Pair>
<Pair title="At 18th Level">Your resistance increases to 14.</Pair>
</Ability>
<Ability id="ability-judgments-smiting" icon={["upgrade"]}>
<Pair single id="ability-judgments-smiting">Smiting</Pair>
<Pair title="Passive Ability">Your weapons count as magic for the purposes of bypassing <Link to="/rule/damage_reduction">damage reduction</Link>.</Pair>
<Pair title="At 6th Level">Your weapons also count as one alignment type (chaotic, evil, good, or lawful) for the purpose of bypassing damage reduction. The type selected must match one of your alignments. If you're true neutral, you do not receive this bonus.</Pair>
<Pair title="At 10th Level">Your weapons also count as <Link to="/eq-material/adamantine">adamantine</Link> for the purpose of overcoming damage reduction (but not for reducing hardness).</Pair>
</Ability>
</>};
const _capstones = {hasJL:true,title: "Alternate Capstones", topLink: ["Classes","main/classes"], jsx: <><div className="jumpList" id="ability-capstones-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-capstones-arch-familiar-su">Arch-Familiar (Su)</InnerLink></li><li><InnerLink toTop to="ability-capstones-deep-magics-su">Deep Magics (Su)</InnerLink></li><li><InnerLink toTop to="ability-capstones-great-beast-su">Great Beast (Su)</InnerLink></li><li><InnerLink toTop to="ability-capstones-ki-sage-su">Ki Sage (Su)</InnerLink></li><li><InnerLink toTop to="ability-capstones-old-dog-new-tricks-ex">Old Dog, New Tricks (Ex)</InnerLink></li><li><InnerLink toTop to="ability-capstones-perfect-body-flawless-mind-ex">Perfect Body, Flawless Mind (Ex)</InnerLink></li><li><InnerLink toTop to="ability-capstones-soul-channel-su">Soul Channel (Su)</InnerLink></li><li><InnerLink toTop to="ability-capstones-the-boss-ex">The Boss (Ex)</InnerLink></li><li><InnerLink toTop to="ability-capstones-the-right-spot-ex">The Right Spot (Ex)</InnerLink></li><li><InnerLink toTop to="ability-capstones-walking-library-ex">Walking Library (Ex)</InnerLink></li><li><InnerLink toTop to="ability-capstones-with-this-sword-ex">With This Sword (Ex)</InnerLink></li><li><InnerLink toTop to="ability-capstones-wont-stay-dead-ex">Won't Stay Dead (Ex)</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link></p>
<p>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides capstones for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class.</p>
<p>In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with.</p>
<p>The following does not contain class-specific capstones, just the ones that apply to multiple classes.</p>
<h3 id="ability-capstones-arch-familiar-su" data-hash-target>Arch-Familiar (Su)</h3>
<p>At 20th level, the character's <Link to="/sidekick/familiar">familiar</Link> is smarter and savvier than plenty of adventurers - and also more dangerous! The familiar's Intelligence increases by 5, and it gains 12 spells levels' worth of spell-like abilities (for example, three daily castings of <Link to="/spell/greater_invisibility">greater invisibility</Link>), drawn from spells its master can cast and using its master's caster levels, DCs, and so forth.</p>
<p>This capstone is available to any class with a <Link to="/ability/familiar">familiar</Link>.</p>
<h3 id="ability-capstones-deep-magics-su" data-hash-target>Deep Magics (Su)</h3>
<p>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast.</p>
<p>A character of any class with spells known can select this capstone.</p>
<h3 id="ability-capstones-great-beast-su" data-hash-target>Great Beast (Su)</h3>
<p>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4.</p>
<p>This capstone is available to any class with an <Link to="/ability/animal_companion">animal companion</Link>.</p>
<h3 id="ability-capstones-ki-sage-su" data-hash-target>Ki Sage (Su)</h3>
<p>At 20th level, the character is fully attuned to his own body and the ki that flows within. The character gains two <Link to="/ability/ki_powers">ki powers</Link> from those available to the unchained monk, treating his character level as his monk level for the purpose of any requirements. In addition, his ki pool increases by four.</p>
<p>This capstone is available to any class with a ki pool.</p>
<h3 id="ability-capstones-old-dog-new-tricks-ex" data-hash-target>Old Dog, New Tricks (Ex)</h3>
<p>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>.</p>
<p>This capstone is available to characters of any class that gains at least four bonus combat feats.</p>
<h3 id="ability-capstones-perfect-body-flawless-mind-ex" data-hash-target>Perfect Body, Flawless Mind (Ex)</h3>
<p>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on.</p>
<p>Characters of <strong>any class</strong> can select this ability.</p>
<h3 id="ability-capstones-soul-channel-su" data-hash-target>Soul Channel (Su)</h3>
<p>At 20th level, the character can channel energy six additional times per day, and her channel energy dice increase by one step.</p>
<p>This capstone is available to characters with the <Link to="/ability/channel_energy">channel energy</Link> class feature.</p>
<h3 id="ability-capstones-the-boss-ex" data-hash-target>The Boss (Ex)</h3>
<p>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics.</p>
<p>The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom.</p>
<p>Characters of <strong>any class</strong> can select this ability.</p>
<h3 id="ability-capstones-the-right-spot-ex" data-hash-target>The Right Spot (Ex)</h3>
<p>At 20th level, the character can hit an opponent's weak spot effortlessly. Once per round, the character can apply her sneak attack damage to an attack, even if the target is not flanked or denied its Dexterity bonus to AC. This does not allow the character to sneak attack targets that are immune to sneak attacks (such as oozes).</p>
<p>This capstone is available for any class with the <Link to="/ability/sneak_attack">sneak attack</Link> class feature.</p>
<h3 id="ability-capstones-walking-library-ex" data-hash-target>Walking Library (Ex)</h3>
<p>At 20th level, the character becomes a small, mobile athenaeum of occult scraps and lore. The character adds 100 spell levels' worth of spells to his spellbook or familiar and gains a +4 insight bonus on all Knowledge skills.</p>
<p>Characters of any class that prepares spells from a spellbook or familiar can select this ability.</p>
<h3 id="ability-capstones-with-this-sword-ex" data-hash-target>With This Sword (Ex)</h3>
<p>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate.</p>
<p>Characters of <strong>any class</strong> can select this ability.</p>
<h3 id="ability-capstones-wont-stay-dead-ex" data-hash-target>Won't Stay Dead (Ex)</h3>
<p>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely.</p>
<p>Characters of <strong>any class</strong> can select this ability.</p>
</>};
export default {sagas:_sagas,sorcerer_bloodlines:_sorcerer_bloodlines,spirits:_spirits,evasion:_evasion,improved_evasion:_improved_evasion,uncanny_dodge:_uncanny_dodge,improved_uncanny_dodge:_improved_uncanny_dodge,wild_empathy:_wild_empathy,favored_enemy:_favored_enemy,favored_terrain:_favored_terrain,woodland_stride:_woodland_stride,trackless_step:_trackless_step,resist_natures_lure:_resist_natures_lure,poison_use:_poison_use,trapfinding:_trapfinding,lay_on_hands:_lay_on_hands,trap_sense:_trap_sense,sneak_attack:_sneak_attack,channel_energy:_channel_energy,rage_powers:_rage_powers,animal_tricks:_animal_tricks,companion_tricks:_companion_tricks,bardic_performances:_bardic_performances,raging_song:_raging_song,familiars:_familiars,improved_familiars:_improved_familiars,judgments:_judgments,capstones:_capstones}