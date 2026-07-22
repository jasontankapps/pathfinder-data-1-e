import {IonRippleEffect} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _domains = {title: "Domains", topLink: ["Cleric","class/cleric"], jsx: <><h2 id="ability-domains-cleric-domains">Cleric Domains</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 40</Link><br/>A cleric's deity influences her alignment, what magic she can perform, her values, and how others see her. A cleric chooses two domains from among those belonging to her deity. A cleric can select an alignment domain (Chaos, Evil, Good, or Law) only if her alignment matches that domain. If a cleric is not devoted to a particular deity, she still selects two domains to represent her spiritual inclinations and abilities (subject to GM approval). The restriction on alignment domains still applies.</p>
<p>Each domain grants a number of domain powers, dependent upon the level of the cleric, as well as a number of bonus spells. A cleric gains one domain spell slot for each level of cleric spell she can cast, from 1st on up. Each day, a cleric can prepare one of the spells from her two domains in that slot. If a domain spell is not on the cleric spell list, a cleric can prepare it only in her domain spell slot. Domain spells cannot be used to cast spells spontaneously.</p>
<p>In addition, a cleric gains the listed powers from both of her domains, if she is of a high enough level. Unless otherwise noted, using a domain power is a <strong className="hl">standard action</strong>.</p>
<h3 id="ability-domains-subdomains">Subdomains</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 86</Link><br/>Every domain has a number of subdomains associated with it. Each subdomain replaces a granted power and a number of spells in the domain's granted spell list. A cleric who chooses a subdomain must have access to both the domain and its subdomain from her deity. If a cleric selects a subdomain, she cannot select its associated domain as her other domain choice (in effect, the subdomain replaces its associated domain). Subdomains are treated as equivalent to their associated domain for any effect or prerequisite based on domains. If a subdomain has two associated domains, the cleric can only select the subdomain for one of her domains. Subdomains can be selected by Druids (except the metal subdomain) and inquisitors (if their deity allows it).</p>
<p>If a subdomain ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's cleric level + her Wisdom modifier.</p>
<h3 id="ability-domains-domains-and-subdomains">Domains and Subdomains</h3>
<ScrollContainer id="ability-domains--table-0"><table>
<thead>
<tr>
<th>Domain</th>
<th>Subdomains</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/domain/air">Air<IonRippleEffect /></Link></td>
<td>Cloud, Lightning, Wind</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/animal">Animal<IonRippleEffect /></Link></td>
<td>Feather, Fur, Insect</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/artifice">Artifice<IonRippleEffect /></Link></td>
<td>Alchemy, Construct, Industry, Toil, Trap</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/chaos">Chaos<IonRippleEffect /></Link></td>
<td>Azata, Demodand, Demon, Entropy, Protean, Revelry, Riot, Whimsy</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/charm">Charm<IonRippleEffect /></Link></td>
<td>Captivation, Love, Lust</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/community">Community<IonRippleEffect /></Link></td>
<td>Cooperation, Education, Family, Home</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/darkness">Darkness<IonRippleEffect /></Link></td>
<td>Loss, Moon, Night, Shadow</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/death">Death<IonRippleEffect /></Link></td>
<td>Murder, Plague, Psychopomp, Shadow, Undead</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/destruction">Destruction<IonRippleEffect /></Link></td>
<td>Catastrophe, Hatred, Rage, Torture</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/earth">Earth<IonRippleEffect /></Link></td>
<td>Caves, Metal, Petrification, Radiation</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/evil">Evil<IonRippleEffect /></Link></td>
<td>Cannibalism, Corruption, Daemon, Demodand, Demon, Devil, Fear, Kyton, Plague, Sahkil</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/fire">Fire<IonRippleEffect /></Link></td>
<td>Arson, Ash, Smoke</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/glory">Glory<IonRippleEffect /></Link></td>
<td>Chivalry, Heroism, Honor, Hubris, Legend</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/good">Good<IonRippleEffect /></Link></td>
<td>Agathion, Archon, Azata, Friendship, Redemption</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/healing">Healing<IonRippleEffect /></Link></td>
<td>Medicine, Restoration, Resurrection</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/knowledge">Knowledge<IonRippleEffect /></Link></td>
<td>Aeon, Education, Espionage, Memory, Thought</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/law">Law<IonRippleEffect /></Link></td>
<td>Archon, Devil, Inevitable, Judgment, Kyton, Legislation, Loyalty, Slavery, Sovereignty, Tyranny</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/liberation">Liberation<IonRippleEffect /></Link></td>
<td>Freedom, Revolution, Self-Realization</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/luck">Luck<IonRippleEffect /></Link></td>
<td>Curse, Fate, Imagination</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/madness">Madness<IonRippleEffect /></Link></td>
<td>Insanity, Nightmare, Truth</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/magic">Magic<IonRippleEffect /></Link></td>
<td>Alchemy, Arcane, Divine, Rites</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/nobility">Nobility<IonRippleEffect /></Link></td>
<td>Aristocracy, Hubris, Leadership, Martyr</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/plant">Plant<IonRippleEffect /></Link></td>
<td>Decay, Growth, Leshy, Thorns</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/protection">Protection<IonRippleEffect /></Link></td>
<td>Defense, Fortifications, Purity, Solitude</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/repose">Repose<IonRippleEffect /></Link></td>
<td>Ancestors, Psychopomp, Souls</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/rune">Rune<IonRippleEffect /></Link></td>
<td>Language, Legislation, Wards</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/scalykind">Scalykind<IonRippleEffect /></Link></td>
<td>Dragon, Saurian, Venom</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/strength">Strength<IonRippleEffect /></Link></td>
<td>Competition, Ferocity, Fist, Resolve, Self-Realization</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/sun">Sun<IonRippleEffect /></Link></td>
<td>Day, Light, Revelation, Thirst</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/travel">Travel<IonRippleEffect /></Link></td>
<td>Exploration, Portal, Trade</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/trickery">Trickery<IonRippleEffect /></Link></td>
<td>Ambush, Deception, Espionage, Greed, Innuendo, Thievery</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/void">Void<IonRippleEffect /></Link></td>
<td>Dark Tapestry, Isolation, Stars</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/war">War<IonRippleEffect /></Link></td>
<td>Blood, Duels, Tactics</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/water">Water<IonRippleEffect /></Link></td>
<td>Flotsam, Flowing, Ice, Oceans, Rivers</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/domain/weather">Weather<IonRippleEffect /></Link></td>
<td>Monsoon, Seasons, Storms</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="ability-domains-domains-by-deity">Domains by Deity</h3>
<ScrollContainer id="ability-domains--table-1"><table>
<thead>
<tr>
<th>Deity</th>
<th>Domains</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/faith/abadar">Abadar<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/abhoth">Abhoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/abraxas">Abraxas<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/acavna">Acavna<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/achaekek">Achaekek<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aegirran">Aegirran<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aerekostes">Aerekostes<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aesdurath">Aesdurath<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aesocar">Aesocar<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ah_pook">Ah Pook<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ahriman">Ahriman<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ajids">Ajids<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aksha">Aksha<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/akuma">Akuma<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/alazhra">Alazhra<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aldinach">Aldinach<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/alichino">Alichino<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/alocer">Alocer<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/alseta">Alseta<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/amaznen">Amaznen<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ananshea">Ananshea<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/andak">Andak<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/andirifkhu">Andirifkhu<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/andoletta">Andoletta<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/angazhan">Angazhan<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/angradd">Angradd<IonRippleEffect /></Link></td>
<td><Link to="/domain/fire">Fire</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/anogetz">Anogetz<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/liberation">Liberation</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/anubis">Anubis<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/apep">Apep<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/scalykind">Scalykind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/apollyon">Apollyon<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/apsu">Apsu<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/arazni">Arazni<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ardad_lili">Ardad Lili<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/areshkagal">Areshkagal<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/arlachramas">Arlachramas<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aroden">Aroden<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/aroggus">Aroggus<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/arqueros">Arqueros<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/arshea">Arshea<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ashava">Ashava<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ashukharma">Ashukharma<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/asmodeus">Asmodeus<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/atlach_nacha">Atlach-Nacha<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/atropos">Atropos<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ayrzul">Ayrzul<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/azathoth">Azathoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/baalzebul">Baalzebul<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/baphomet">Baphomet<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/barbariccia">Barbariccia<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/barbatos">Barbatos<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/barravoclair">Barravoclair<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/barzahk">Barzahk<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bastet">Bastet<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/belial">Belial<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/benorus">Benorus<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bergelmir">Bergelmir<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bes">Bes<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/besmara">Besmara<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bharnarol">Bharnarol<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bifrons">Bifrons<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/black_butterfly">Black Butterfly<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bohga">Bohga<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bokrug">Bokrug<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bolka">Bolka<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/braismois">Braismois<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/brigh">Brigh<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/bundha">Bundha<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/caera">Caera<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cagnazzo">Cagnazzo<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/calcabrina">Calcabrina<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/calistria">Calistria<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/camazotz">Camazotz<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cayden_cailean">Cayden Cailean<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cernunnos">Cernunnos<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ceyannan">Ceyannan<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chadali">Chadali<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chaldira">Chaldira<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chamiaholom">Chamiaholom<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/charg">Charg<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/charon">Charon<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chaugnar_faugn">Chaugnar Faugn<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chavazvug">Chavazvug<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chimon">Chimon<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chinostes_evil_aspect">Chinostes (Evil Aspect)<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chinostes_good_aspect">Chinostes (Good Aspect)<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chucaro">Chucaro<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chugarra">Chugarra<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/chupurvagasti">Chupurvagasti<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cihua_couatl">Cihua Couatl<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/circiatto">Circiatto<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cixyron">Cixyron<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/corosbel">Corosbel<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/count_ranalc">Count Ranalc<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/crocell">Crocell<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cthulhu">Cthulhu<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cyth_vsug">Cyth-V'sug<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dachzerul">Dachzerul<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/daclau_sar">Daclau-Sar<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dagon">Dagon<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dahak">Dahak<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/daikitsu">Daikitsu<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dalenydra">Dalenydra<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/damerrich">Damerrich<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dammar">Dammar<IonRippleEffect /></Link></td>
<td><Link to="/domain/healing">Healing</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/deskari">Deskari<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/desna">Desna<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/deumus">Deumus<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dhalavei">Dhalavei<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/diceid">Diceid<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dispater">Dispater<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/doloras">Doloras<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dradjit">Dradjit<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/draghignazzo">Draghignazzo<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dranngvit">Dranngvit<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/dretha">Dretha<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/drokalion">Drokalion<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/glory">Glory</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/droskar">Droskar<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ealdeez">Ealdeez<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/eaqueo">Eaqueo<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/easivra">Easivra<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/eiseth">Eiseth<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/eldas">Eldas<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/eligos">Eligos<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/elion">Elion<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/erastil">Erastil<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/erecura">Erecura<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/eritrice">Eritrice<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/falayna">Falayna<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/fandarra">Fandarra<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/farfarello">Farfarello<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/feronia">Feronia<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/fharaas">Fharaas<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/findeladlara">Findeladlara<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/flauros">Flauros<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/folca">Folca<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/folgrit">Folgrit<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/fumeiyoshi">Fumeiyoshi<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/furcas">Furcas<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gaap">Gaap<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gavidya">Gavidya<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/general_susumu">General Susumu<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/geon">Geon<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/geryon">Geryon<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ghatanothoa">Ghatanothoa<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ghenshau">Ghenshau<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ghlaunder">Ghlaunder<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gogunta">Gogunta<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gorum">Gorum<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gozreh">Gozreh<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/graffiacane">Graffiacane<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/luck">Luck</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/grandmother_spider">Grandmother Spider<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/green_faith">Green Faith<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/groetus">Groetus<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gruhastha">Gruhastha<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/grundinnar">Grundinnar<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/guyuku">Guyuku<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gyronna">Gyronna<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/haagenti">Haagenti<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/haborym">Haborym<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hadregash">Hadregash<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/haggakal">Haggakal<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/halcamora">Halcamora<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hanspur">Hanspur<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hastrikhal">Hastrikhal<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hastur">Hastur<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hataam">Hataam<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hathor">Hathor<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hei_feng">Hei Feng<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hembad">Hembad<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/horus">Horus<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hshurha">Hshurha<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hudima">Hudima<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/hydim">Hydim<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iaozrael">Iaozrael<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iapholi">Iapholi<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iggeret">Iggeret<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ilsurrish">Il'surrish<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/imbrex">Imbrex<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/immonhiel">Immonhiel<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/imot">Imot<IonRippleEffect /></Link></td>
<td><Link to="/domain/luck">Luck</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/inkariax">Inkariax<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/void">Void</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/inma">Inma<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iomedae">Iomedae<IonRippleEffect /></Link></td>
<td><Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ioramvol">Ioramvol<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/irez">Irez<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/irori">Irori<IonRippleEffect /></Link></td>
<td><Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/isis">Isis<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/isph_aun_vuln">Isph-Aun-Vuln<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ithaqua">Ithaqua<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/izyagna">Izyagna<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jacarkas">Jacarkas<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jaidi">Jaidi<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jaidz">Jaidz<IonRippleEffect /></Link></td>
<td><Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jalaijatali">Jalaijatali<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jerishall">Jerishall<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jezelda">Jezelda<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jiraviddain">Jiraviddain<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jubilex">Jubilex<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/jyotah">Jyotah<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kabriri">Kabriri<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kaikyton">Kaikyton<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kalma">Kalma<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kazutal">Kazutal<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kelinahat">Kelinahat<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kelizandri">Kelizandri<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kelksiomides">Kelksiomides<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/keltheald">Keltheald<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kerkamoth">Kerkamoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ketephys">Ketephys<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/khepri">Khepri<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kitumu">Kitumu<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kofusachi">Kofusachi<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kols">Kols<IonRippleEffect /></Link></td>
<td><Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/korada">Korada<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kostchtchie">Kostchtchie<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kroakoth">Kro'akoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kroina">Kroina<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kunkarna">Kunkarna<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/kurgess">Kurgess<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lady_nanbyo">Lady Nanbyo<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/laivatiniel">Laivatiniel<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lalaci">Lalaci<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lamashtu">Lamashtu<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lanishra">Lanishra<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lao_shu_po">Lao Shu Po<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/libicocco">Libicocco<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lissala">Lissala<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lissala_pre_earthfall">Lissala (pre-Earthfall)<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/llamolaek">Llamolaek<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lorcan">Lorcan<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lorris">Lorris<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lorthact">Lorthact<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/losarkur">Losarkur<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lymnieris">Lymnieris<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lythertida">Lythertida<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/maat">Maat<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/void">Void</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/maeha">Maeha<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/magdh">Magdh<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/magrim">Magrim<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mahathallah">Mahathallah<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/malacoda">Malacoda<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/malthus">Malthus<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mammon">Mammon<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/marishi">Marishi<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/matravash">Matravash<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mazludeh">Mazludeh<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mazmezz">Mazmezz<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/menxyr">Menxyr<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mephistopheles">Mephistopheles<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mestama">Mestama<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mhar">Mhar<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/milani">Milani<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/minderhal">Minderhal<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mneoc">Mneoc<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/moloch">Moloch<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/monad">Monad<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mordiggian">Mordiggian<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/morrobahn">Morrobahn<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mother_vulture">Mother Vulture<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mrtyu">Mrtyu<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/murnath">Murnath<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/muronna">Muronna<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/mursha">Mursha<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/myr">Myr<IonRippleEffect /></Link></td>
<td><Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/naderi">Naderi<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nalinivati">Nalinivati<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/scalykind">Scalykind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nalmungder">Nalmungder<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nameless">Nameless<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/narakaas">Narakaas<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/narriseminek">Narriseminek<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nataka">Nataka<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/neith">Neith<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nephthys">Nephthys<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nergal">Nergal<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/neshen">Neshen<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nethys">Nethys<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ng">Ng<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nhimbaloth">Nhimbaloth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nightripper">Nightripper<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nivi_rhombodazzle">Nivi Rhombodazzle<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nocticula">Nocticula<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nocticula_redeemed">Nocticula (Redeemed)<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/norgorber">Norgorber<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nulgreth">Nulgreth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nurgal">Nurgal<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nyarlathotep_black_pharaoh">Nyarlathotep (Black Pharaoh)<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nyarlathotep_faceless_sphinx">Nyarlathotep (Faceless Sphinx)<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nyarlathotep_haunter_of_the_dark">Nyarlathotep (Haunter of the Dark)<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/oaur_ooung">Oaur-Ooung<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/olheon">Olheon<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/omrataji">Omrataji<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/onamahli">Onamahli<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ondisso">Ondisso<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ongalte">Ongalte<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/onmyuza">Onmyuza<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/onos">Onos<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/orcus">Orcus<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/orgesh">Orgesh<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ose">Ose<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/osiris">Osiris<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/osolmyr">Osolmyr<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/otikaya">Otikaya<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/otolmens">Otolmens<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ovonovo">Ovonovo<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ozranvial">Ozranvial<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pavnuri">Pavnuri<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pazuzu">Pazuzu<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pharasma">Pharasma<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pharimia">Pharimia<IonRippleEffect /></Link></td>
<td><Link to="/domain/fire">Fire</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/phlegyas">Phlegyas<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/picoperi">Picoperi<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pirias">Pirias<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/prihasta">Prihasta<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/psomeira">Psomeira<IonRippleEffect /></Link></td>
<td><Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ptah">Ptah<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pulura">Pulura<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/qi_zhong">Qi Zhong<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/quindiovatos">Quindiovatos<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ra">Ra<IonRippleEffect /></Link></td>
<td><Link to="/domain/fire">Fire</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/raetorgash">Raetorgash<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/luck">Luck</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ragadahn">Ragadahn<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ragathiel">Ragathiel<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rahu">Rahu<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rasvocel">Rasvocel<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ravana">Ravana<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/reymenda">Reymenda<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rhan_tegoth">Rhan-Tegoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/roqorolos">Roqorolos<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rovagug">Rovagug<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rowdrosh">Rowdrosh<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ruapceras">Ruapceras<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rubicante">Rubicante<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rull">Rull<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ruzel">Ruzel<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rytara">Rytara<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sabnach">Sabnach<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/saloc">Saloc<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sarenrae">Sarenrae<IonRippleEffect /></Link></td>
<td><Link to="/domain/fire">Fire</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/scal">Scal<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/scarmiglione">Scarmiglione<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sekhmet">Sekhmet<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/selket">Selket<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/seramaydiel">Seramaydiel<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/set">Set<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sezelrian">Sezelrian<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shamira">Shamira<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shawnari">Shawnari<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shax">Shax<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shei">Shei<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/liberation">Liberation</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shelyn">Shelyn<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shelyn_pre_earthfall">Shelyn (pre-Earthfall)<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shiggarreb">Shiggarreb<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shivaska">Shivaska<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shizuru">Shizuru<IonRippleEffect /></Link></td>
<td><Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shub_niggurath">Shub-Niggurath<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shyka">Shyka<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sicva">Sicva<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sifkesh">Sifkesh<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sinashakti">Sinashakti<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sithhud">Sithhud<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sivanah">Sivanah<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/skode">Skode<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/sun">Sun</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/skrymir">Skrymir<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/slandrais">Slandrais<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/smiad">Smiad<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sobek">Sobek<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/socothbenoth">Socothbenoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/soralyon">Soralyon<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/speakers_of_the_depths">Speakers of the Depths<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ssilameshnik">Ssila'meshnik<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/stygidvod">Stygidvod<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sugroz">Sugroz<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sun_wukong">Sun Wukong<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/surpa">Surpa<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/svarozic">Svarozic<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/szuriel">Szuriel<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tamede">Tamede<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tanagaar">Tanagaar<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/taraksun">Taraksun<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/teshallas">Teshallas<IonRippleEffect /></Link></td>
<td><Link to="/domain/healing">Healing</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/scalykind">Scalykind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/thamir_gixx">Thamir Gixx<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/the_green_mother">The Green Mother<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/the_lantern_king">The Lantern King<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/the_lost_prince">The Lost Prince<IonRippleEffect /></Link></td>
<td><Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/the_pale_horse">The Pale Horse<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/thisamet">Thisamet<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/good">Good</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/thoth">Thoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/rune">Rune</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/thremyr">Thremyr<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/thuskchoon">Thuskchoon<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/titivilus">Titivilus<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tjasse">Tjasse<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tolc">Tolc<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/torag">Torag<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/treerazer">Treerazer<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/trelmarixian">Trelmarixian<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tresmalvos">Tresmalvos<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/trudd">Trudd<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tsathoggua">Tsathoggua<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/tsukiyo">Tsukiyo<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/uaransaph">Uaransaph<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ulon">Ulon<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/upion_and_warrik">Upion and Warrik<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/urazra">Urazra<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/urgathoa">Urgathoa<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/uruskreil">Uruskreil<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/urxehl">Urxehl<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ushitora">Ushitora<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/uskyeria">Uskyeria<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/uzumae">Uzumae<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/valani">Valani<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vale">Vale<IonRippleEffect /></Link></td>
<td><Link to="/domain/community">Community</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/valmallos">Valmallos<IonRippleEffect /></Link></td>
<td><Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vapula">Vapula<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/varg">Varg<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vavaalrav">Vavaalrav<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/velgaas">Velgaas<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/venkelvore">Venkelvore<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/verex">Verex<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vermilion_mother">Vermilion Mother<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vevelor">Vevelor<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vibhishah">Vibhishah<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vildeis">Vildeis<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vois">Vois<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vonymos">Vonymos<IonRippleEffect /></Link></td>
<td><Link to="/domain/fire">Fire</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/vorasha">Vorasha<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/wadjet">Wadjet<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/winlas">Winlas<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/wylgart">Wylgart<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/xhamen_dor">Xhamen-Dor<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/xhasnaphar">Xhasnaphar<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/xiquiripat">Xiquiripat<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/xoveron">Xoveron<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/xsistaid">Xsistaid<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yabu">Yabu<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/luck">Luck</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yaezhing">Yaezhing<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yamasoth">Yamasoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yamatsumi">Yamatsumi<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yan_gant_y_tan">Yan-gant-y-tan<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/weather">Weather</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ydajisk">Ydajisk<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ydersius">Ydersius<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yhidothrus">Yhidothrus<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/repose">Repose</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yig">Yig<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/scalykind">Scalykind</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ylimancha">Ylimancha<IonRippleEffect /></Link></td>
<td><Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/ymeri">Ymeri<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yog_sothoth">Yog-Sothoth<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/void">Void</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/yuelral">Yuelral<IonRippleEffect /></Link></td>
<td><Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zabha">Zabha<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zaebos">Zaebos<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zagresh">Zagresh<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zaigasnar">Zaigasnar<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/liberation">Liberation</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zarongel">Zarongel<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zelishkar">Zelishkar<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zepar">Zepar<IonRippleEffect /></Link></td>
<td><Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zevgavizeb">Zevgavizeb<IonRippleEffect /></Link></td>
<td><Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zipacna">Zipacna<IonRippleEffect /></Link></td>
<td><Link to="/domain/earth">Earth</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/strength">Strength</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zogmugot">Zogmugot<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/water">Water</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zohls">Zohls<IonRippleEffect /></Link></td>
<td><Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/travel">Travel</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zon_kuthon">Zon-Kuthon<IonRippleEffect /></Link></td>
<td><Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zura">Zura<IonRippleEffect /></Link></td>
<td><Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zurapadyn">Zurapadyn<IonRippleEffect /></Link></td>
<td><Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zursvaater">Zursvaater<IonRippleEffect /></Link></td>
<td><Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/war">War</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zyphus">Zyphus<IonRippleEffect /></Link></td>
<td><Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/war">War</Link></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _inquisitions = {title: "Inquisitions", topLink: ["Inquisitor","class/inquisitor"], jsx: <><h2 id="ability-inquisitions-inquisitions">Inquisitions</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 42</Link><br/>While inquisitors often take on the domains permitted to the clerics of the faith, they are privy to special lore not open to priests and other agents of their religion. These divine pursuits, called inquisitions, grant inquisitors the tools necessary for the fight against enemies of the faith. An inquisitor may select an inquisition in place of a domain.</p>
<p>If an inquisition's granted power calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's inquisitor level + her Wisdom modifier. Unless otherwise stated, the caster level for granted power spell-like abilities is equal to the inquisitor's class level.</p>
<p>Inquisitions are intended for inquisitors, not for other classes that give access to domains. While a <Link to="/class/cleric">cleric</Link> or other <Link to="/ability/domains">domain</Link>-using class can select an inquisition in place of a domain (if appropriate to the character's deity), inquisitions do not grant domain spell slots or domain spells, and therefore are much weaker choices for those classes. These other classes use the appropriate class level as their inquisitor level for the purpose of inquisition granted powers (clerics use their cleric level as their inquisitor level, and so on).</p>
<ScrollContainer id="ability-inquisitions--table-0"><table>
<thead>
<tr>
<th>Inquisition</th>
<th>Deities</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/inquisition/anger">Anger<IonRippleEffect /></Link></td>
<td><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/rovagug">Rovagug</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/banishment">Banishment<IonRippleEffect /></Link></td>
<td><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/black_powder">Black Powder<IonRippleEffect /></Link></td>
<td>Any (with GM approval)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/chivalry">Chivalry<IonRippleEffect /></Link></td>
<td><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/clandestine">Clandestine<IonRippleEffect /></Link></td>
<td><Link to="/faith/achaekek">Achaekek</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/milani">Milani</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/sivanah">Sivanah</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/conversion">Conversion<IonRippleEffect /></Link></td>
<td>Any deity</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/crime">Crime<IonRippleEffect /></Link></td>
<td><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/damnation">Damnation<IonRippleEffect /></Link></td>
<td><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/excommunication">Excommunication<IonRippleEffect /></Link></td>
<td>N/A</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/execution">Execution<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/achaekek">Achaekek</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/fate">Fate<IonRippleEffect /></Link></td>
<td><Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/fervor">Fervor<IonRippleEffect /></Link></td>
<td><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/final_rest">Final Rest<IonRippleEffect /></Link></td>
<td><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/heresy">Heresy<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/torag">Torag</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/illumination">Illumination<IonRippleEffect /></Link></td>
<td><Link to="/faith/desna">Desna</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/imprisonment">Imprisonment<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/justice">Justice<IonRippleEffect /></Link></td>
<td><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/oblivion">Oblivion<IonRippleEffect /></Link></td>
<td><Link to="/faith/desna">Desna</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/order">Order<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/persistence">Persistence<IonRippleEffect /></Link></td>
<td><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/politics">Politics<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/possession">Possession<IonRippleEffect /></Link></td>
<td><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/recovery">Recovery<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/nivi_rhombodazzle">Nivi Rhombodazzle</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/redemption">Redemption<IonRippleEffect /></Link></td>
<td>N/A</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/reformation">Reformation<IonRippleEffect /></Link></td>
<td>N/A</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/restoration">Restoration<IonRippleEffect /></Link></td>
<td><Link to="/faith/desna">Desna</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/revelation">Revelation<IonRippleEffect /></Link></td>
<td><Link to="/faith/desna">Desna</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/secrets">Secrets<IonRippleEffect /></Link></td>
<td><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/sedition">Sedition<IonRippleEffect /></Link></td>
<td><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/milani">Milani</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/seduction">Seduction<IonRippleEffect /></Link></td>
<td><Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/shelyn">Shelyn</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/sin">Sin<IonRippleEffect /></Link></td>
<td><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/spellkiller">Spellkiller<IonRippleEffect /></Link></td>
<td>Any (with GM approval)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/tactics">Tactics<IonRippleEffect /></Link></td>
<td><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/torag">Torag</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/torture">Torture<IonRippleEffect /></Link></td>
<td><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/true_death">True Death<IonRippleEffect /></Link></td>
<td><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/pharasma">Pharasma</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/truth">Truth<IonRippleEffect /></Link></td>
<td><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/valor">Valor<IonRippleEffect /></Link></td>
<td><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/vengeance">Vengeance<IonRippleEffect /></Link></td>
<td><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/inquisition/zeal">Zeal<IonRippleEffect /></Link></td>
<td><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/nethys">Nethys</Link></td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="ability-inquisitions-inquisitions-by-deity">Inquisitions by Deity</h3>
<ScrollContainer id="ability-inquisitions--table-1"><table>
<thead>
<tr>
<th>Deity</th>
<th>Inquisitions</th>
</tr>
</thead>
<tbody><tr>
<td>Any deity</td>
<td><Link to="/inquisition/conversion">Conversion</Link>, <Link to="/inquisition/excommunication">Excommunication</Link>, <Link to="/inquisition/redemption">Redemption</Link>, <Link to="/inquisition/reformation">Reformation</Link></td>
</tr>
<tr>
<td>Any (with GM approval)</td>
<td><Link to="/inquisition/black_powder">Black Powder</Link>, <Link to="/inquisition/spellkiller">Spellkiller</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/abadar">Abadar<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/execution">Execution</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/imprisonment">Imprisonment</Link>, <Link to="/inquisition/order">Order</Link>, <Link to="/inquisition/politics">Politics</Link>, <Link to="/inquisition/recovery">Recovery</Link>, <Link to="/inquisition/true_death">True Death</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/achaekek">Achaekek<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/execution">Execution</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/arshea">Arshea<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/seduction">Seduction</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/asmodeus">Asmodeus<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/damnation">Damnation</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/imprisonment">Imprisonment</Link>, <Link to="/inquisition/persistence">Persistence</Link>, <Link to="/inquisition/politics">Politics</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/torture">Torture</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/calistria">Calistria<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/crime">Crime</Link>, <Link to="/inquisition/execution">Execution</Link>, <Link to="/inquisition/fervor">Fervor</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/politics">Politics</Link>, <Link to="/inquisition/possession">Possession</Link>, <Link to="/inquisition/secrets">Secrets</Link>, <Link to="/inquisition/seduction">Seduction</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/torture">Torture</Link>, <Link to="/inquisition/vengeance">Vengeance</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cayden_cailean">Cayden Cailean<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/fervor">Fervor</Link>, <Link to="/inquisition/sedition">Sedition</Link>, <Link to="/inquisition/seduction">Seduction</Link>, <Link to="/inquisition/true_death">True Death</Link>, <Link to="/inquisition/valor">Valor</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/desna">Desna<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/illumination">Illumination</Link>, <Link to="/inquisition/oblivion">Oblivion</Link>, <Link to="/inquisition/restoration">Restoration</Link>, <Link to="/inquisition/revelation">Revelation</Link>, <Link to="/inquisition/sedition">Sedition</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/erastil">Erastil<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/chivalry">Chivalry</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/illumination">Illumination</Link>, <Link to="/inquisition/recovery">Recovery</Link>, <Link to="/inquisition/valor">Valor</Link>, <Link to="/inquisition/zeal">Zeal</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gorum">Gorum<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/anger">Anger</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/tactics">Tactics</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gozreh">Gozreh<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/fervor">Fervor</Link>, <Link to="/inquisition/heresy">Heresy</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iomedae">Iomedae<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/banishment">Banishment</Link>, <Link to="/inquisition/chivalry">Chivalry</Link>, <Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/final_rest">Final Rest</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/justice">Justice</Link>, <Link to="/inquisition/order">Order</Link>, <Link to="/inquisition/persistence">Persistence</Link>, <Link to="/inquisition/sedition">Sedition</Link>, <Link to="/inquisition/truth">Truth</Link>, <Link to="/inquisition/valor">Valor</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/irori">Irori<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/illumination">Illumination</Link>, <Link to="/inquisition/restoration">Restoration</Link>, <Link to="/inquisition/revelation">Revelation</Link>, <Link to="/inquisition/tactics">Tactics</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lamashtu">Lamashtu<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/oblivion">Oblivion</Link>, <Link to="/inquisition/possession">Possession</Link>, <Link to="/inquisition/vengeance">Vengeance</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/milani">Milani<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/sedition">Sedition</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nethys">Nethys<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/fate">Fate</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/possession">Possession</Link>, <Link to="/inquisition/sedition">Sedition</Link>, <Link to="/inquisition/zeal">Zeal</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nivi_rhombodazzle">Nivi Rhombodazzle<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/recovery">Recovery</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/norgorber">Norgorber<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/crime">Crime</Link>, <Link to="/inquisition/execution">Execution</Link>, <Link to="/inquisition/fate">Fate</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/politics">Politics</Link>, <Link to="/inquisition/possession">Possession</Link>, <Link to="/inquisition/secrets">Secrets</Link>, <Link to="/inquisition/sedition">Sedition</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/torture">Torture</Link>, <Link to="/inquisition/vengeance">Vengeance</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pharasma">Pharasma<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/damnation">Damnation</Link>, <Link to="/inquisition/execution">Execution</Link>, <Link to="/inquisition/fate">Fate</Link>, <Link to="/inquisition/final_rest">Final Rest</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/justice">Justice</Link>, <Link to="/inquisition/oblivion">Oblivion</Link>, <Link to="/inquisition/true_death">True Death</Link>, <Link to="/inquisition/truth">Truth</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rovagug">Rovagug<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/anger">Anger</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/vengeance">Vengeance</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sarenrae">Sarenrae<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/banishment">Banishment</Link>, <Link to="/inquisition/chivalry">Chivalry</Link>, <Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/final_rest">Final Rest</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/illumination">Illumination</Link>, <Link to="/inquisition/order">Order</Link>, <Link to="/inquisition/restoration">Restoration</Link>, <Link to="/inquisition/revelation">Revelation</Link>, <Link to="/inquisition/sedition">Sedition</Link>, <Link to="/inquisition/truth">Truth</Link>, <Link to="/inquisition/valor">Valor</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shelyn">Shelyn<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/fervor">Fervor</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/recovery">Recovery</Link>, <Link to="/inquisition/restoration">Restoration</Link>, <Link to="/inquisition/revelation">Revelation</Link>, <Link to="/inquisition/sedition">Sedition</Link>, <Link to="/inquisition/seduction">Seduction</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sivanah">Sivanah<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/clandestine">Clandestine</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/torag">Torag<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/banishment">Banishment</Link>, <Link to="/inquisition/chivalry">Chivalry</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/imprisonment">Imprisonment</Link>, <Link to="/inquisition/tactics">Tactics</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/urgathoa">Urgathoa<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/persistence">Persistence</Link>, <Link to="/inquisition/possession">Possession</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/vengeance">Vengeance</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zon_kuthon">Zon-Kuthon<IonRippleEffect /></Link></td>
<td><Link to="/inquisition/damnation">Damnation</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/oblivion">Oblivion</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/torture">Torture</Link></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _oaths = {title: "Paladin Oaths", topLink: ["Paladin","class/paladin"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 60</Link><br/>While all paladins have their own codes of conduct, either taught by an order, handed down from the gods, or inspired by personal conviction, an oathbound paladin devotes herself to a singular cause, which grants her additional powers but also gives further edicts she must follow. An oathbound paladin swears an oath to eradicate a certain kind of evil. This powerful oath gives her access to new spells and adds to or alters typical paladin abilities.</p>
<p>An oathbound paladin can take multiple oaths, but none of the other oaths can replace or alter the same class feature from the paladin class as another alternate class feature. For example, a paladin cannot take the Oath against Corruption and the Oath against the Wyrm because they both replace the aura of courage class feature.</p>
<p>Paladins who take up an oath may make a sacred promise to their god or temple to perform some specific and grand action associated with the oath. For example, an oathbound paladin who takes the Oath of Vengeance may be tasked with killing the orc warlord who razed her home city, while a paladin with the Oath against the Wyrm may be asked to secure a non-aggression pact with a family of dragons. When a paladin completes the sacred promise, the oath is fulfilled, and she may abandon the oath if she so chooses; she may then select another oath or become a standard paladin or a different paladin archetype.</p>
<p>If a paladin violates the code of her oath, she loses the class abilities associated with that oath until she atones. If she violates her paladin's code, she loses her oath abilities as well as her other paladin abilities.</p>
<p>An oathbound paladin has the following class features.</p>
<p><strong className="hl">Deity:</strong> Some oaths are especially compatible with the faiths of certain deities; these deities are listed here. Other deities may allow these oaths as well, though only rarely do deities allow oaths conflicting with their teachings.</p>
<p><strong className="hl">Code of Conduct:</strong> The oathbound paladin must abide by the listed tenets of her oath in addition to the specifics of her god's code of conduct. In some cases, a deity's or paladin order's code may conflict with the oath's tenets; in most cases, these conflicts mean the oath is unsuitable for a paladin of that deity or order (such as the Oath against the Wyrm with respect to a good dragon deity or a dragon-riding order of paladins) and cannot be selected by the paladin.</p>
<p><strong className="hl">Oath Spells:</strong> A paladin's oath influences what magic she can perform. An oathbound paladin adds one spell to the paladin spell list at each paladin spell level she can cast (including spell levels for which she would only gain spells per day if her Charisma were high enough to grant <Link to="/rule/bonus_spells">bonus spells</Link> of that level). Her oath determines what spell is added to the spell list. If the paladin has multiple oaths, the spells from each oath are added to her spell list.</p>
<p>If an oathbound paladin has more than one oath, she may prepare any one of her oath's spells in that slot (similar to a cleric choosing one of her two domain spells to prepare in a domain spell slot).</p>
<ScrollContainer id="ability-oaths--table-0"><table>
<thead>
<tr>
<th>Oath</th>
<th>Replaces</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/oath/chaos">Oath against Chaos<IonRippleEffect /></Link></td>
<td>Detect Evil, Smite Evil, Channel Positive Energy</td>
<td>These paladins dedicate themselves to the rule of law above all other things.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/corruption">Oath against Corruption<IonRippleEffect /></Link></td>
<td>Aura of Courage, Aura of Justice, Holy Champion</td>
<td>When a paladin takes this oath, she becomes a hunter of aberrations, protecting the common people from these bizarre threats.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/fiends">Oath against Fiends<IonRippleEffect /></Link></td>
<td>Aura of Resolve, 9th-level Mercy</td>
<td>A paladin who takes an oath against demons, devils, daemons, and other evil outsiders is constantly on the lookout for malicious fiendish insurgence into the world, and faces it with swift and unwavering defiance.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/grotesquery">Oath against Grotesquery<IonRippleEffect /></Link></td>
<td>Divine Health, Aura of Faith</td>
<td>For champions of Shelyn, who are aware that aesthetics is subjective, beauty is the form inviolate.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/savagery">Oath against Savagery<IonRippleEffect /></Link></td>
<td>Divine Grace, Aura of Justice</td>
<td>Some paladins are champions of order, pledging to battle the hordes of goblinoids, orcs, hostile barbarians, and similar savages that nip at the heels of civilization, as well as those who gnaw on society from within, such as thieves' and assassins' guilds.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/the_whispering_way">Oath against the Whispering Way<IonRippleEffect /></Link></td>
<td>Detect Evil, 3rd-level Mercy, 9th-level Mercy, Aura of Resolve, Aura of Justice</td>
<td>A variation of the Oath against undead geared towards fighting the <Link to="/rule/whispering_way">Whispering Way</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/the_wyrm">Oath against the Wyrm<IonRippleEffect /></Link></td>
<td>Channel Positive Energy, Divine Bond, Holy Champion</td>
<td>Some paladins swear to protect others against the predation of dragonkind.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/undeath">Oath against Undeath<IonRippleEffect /></Link></td>
<td>Detect Evil, 3rd-level Mercy, 9th-level Mercy, Aura of Resolve, Aura of Justice</td>
<td>A paladin with this oath vows to restore the natural state of death to any animate corpse she encounters, and destroy the undead energy in the process.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/charity">Oath of Charity<IonRippleEffect /></Link></td>
<td>Lay on Hands, Divine Bond</td>
<td>Those who take this oath dedicate their lives to protecting those who can't protect themselves and giving to those who are in need.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/chastity">Oath of Chastity<IonRippleEffect /></Link></td>
<td>Divine Grace, Aura of Resolve</td>
<td>A chaste paladin proves her purity by way of her action and her abstinence from romantic activities.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/loyalty">Oath of Loyalty<IonRippleEffect /></Link></td>
<td>Smite Evil</td>
<td>To most paladins, their word is everything. When they say something, it will be done. Those who take this oath put that ideal to the test every day.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/the_mendevian_crusade">Oath of the Mendevian Crusade<IonRippleEffect /></Link></td>
<td>Aura of Resolve, Divine Bond, 9th-level Mercy</td>
<td>A variation of the Oath against Fiends dedicated to closing the Worldwound</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/the_peoples_council">Oath of the People's Council<IonRippleEffect /></Link></td>
<td>Class Skills, Smite Evil, Aura of Justice, Holy Champion</td>
<td>Paladins swearing the oath of the People's Council serve the common good by finding and thwarting those who abuse their authority.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/the_skyseeker">Oath of the Skyseeker<IonRippleEffect /></Link></td>
<td>Smite Evil, Divine Bond, Aura of Justice, Aura of Faith</td>
<td>Paladins with the oath of the skyseeker swear to defend the Sky Citadels their people retain and to help reclaim those the dwarves have lost, hoping to one day rebuild them on the greatest, most honorable ideals of the dwarven gods.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oath/vengeance">Oath of Vengeance<IonRippleEffect /></Link></td>
<td>Channel Positive Energy, Aura of Justice</td>
<td>These oathbound paladins are always on the hunt for those who have perpetrated evil, and are the instrument of Heaven's most definitive and implacable judgment.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _orders = {title: "Orders", topLink: ["Cavalier","class/cavalier"], jsx: <><h2 id="ability-orders-cavaliersamurai-orders">Cavalier/Samurai Orders</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<p>At 1st level, a cavalier must pledge himself to a specific order. The order grants the cavalier a number of bonuses, class skills, and special abilities. In addition, each order includes a number of <strong className="hl">edicts</strong> that the cavalier must follow. If he violates any of these edicts, he loses the benefits from his order's challenge ability for 24 hours. The violation of an edict is subject to GM interpretation.</p>
<p>A cavalier cannot change his order without undertaking a lengthy process to dedicate himself to a new cause. When this choice is made, he immediately loses all of the benefits from his old order. He must then follow the edicts of his new order for one entire level without gaining any benefits from that order. Once accomplished, he gains all of the bonuses from his new order. Note that the names of these orders might vary depending upon the campaign setting or GM's preference.</p>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link><br/>Certain orders marked with an asterisk (*) are much more likely to be chosen by <Link to="/class/samurai">Samurai</Link> than by Cavaliers.</p>
<ScrollContainer id="ability-orders--table-0"><table>
<thead>
<tr>
<th>Order</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/order/order_of_the_asp">Order of the Asp<IonRippleEffect /></Link></td>
<td>A cutthroat group where ruthless pragmatism and underhanded dealing are the keys to moving up the chain of command.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_beast_acg">Order of the Beast (ACG)<IonRippleEffect /></Link></td>
<td>This order serves nature in all its forms, and keeps close to woodland creatures.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_beast_isc">Order of the Beast (ISC)<IonRippleEffect /></Link></td>
<td>Cavaliers of this order revel in destruction, and go out of their way to cause as much mayhem and disorder as possible.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_blossom">Order of the Blossom<IonRippleEffect /></Link></td>
<td>This order dedicates their lives to protecting fey, especially those visiting the Material Plane from the First World.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_blue_rose">Order of the Blue Rose<IonRippleEffect /></Link></td>
<td>Although they believe wholeheartedly in peace as an aim and a final goal, cavaliers of the blue rose are warriors first, and embrace their role as guardians of those who cannot or will not take up arms to defend themselves.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_cockatrice">Order of the Cockatrice<IonRippleEffect /></Link></td>
<td>A cavalier who belongs to this order serves only himself, working to further his own aims and increase his own prestige.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_dragon">Order of the Dragon<IonRippleEffect /></Link></td>
<td>This order believes in loyalty and friendship, willing to lay down their lives to protect their allies.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_eastern_star">Order of the Eastern Star<IonRippleEffect /></Link></td>
<td>This order exists to keep dangerous secrets hidden from the world and secretly protect the world against unimaginable threats from beyond the mortal realms.</td>
</tr>
<tr>
<td><Link to="/order/order_of_the_eclipse">Order of the Eclipse<IonRippleEffect /></Link>*</td>
<td>A respected samurai order devoted to darkness itself. Although the order is not officially restricted to hobgoblins, its edicts make it difficult for any samurai without darkvision to operate in its ranks.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_eel">Order of the Eel<IonRippleEffect /></Link></td>
<td>The order of the eel believes communication and negotiation are the true paths to greatness and success for all. Locathah eel riders were the founders of the order of the eel, but other aquatic races have since joined.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_ennead_star">Order of the Ennead Star<IonRippleEffect /></Link></td>
<td>Cavaliers belonging to this order have joined the Hellknight crusade against chaos, adopting a life of ironclad discipline and swearing to thwart disorder by any means.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_first_law">Order of the First Law<IonRippleEffect /></Link></td>
<td>This order is dedicated to hunting down anyone practicing, preaching, or otherwise facilitating religion in Rahadoum.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_flame">Order of the Flame<IonRippleEffect /></Link></td>
<td>A cavalier of the order of the flame devotes his life to the pursuit of personal glory.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_green">Order of the Green<IonRippleEffect /></Link></td>
<td>Cavaliers of the order of the Green are dedicated to protecting wild places and creatures, embracing the <Link to="/faith/green_faith">Green Faith</Link> in all its glory and natural wonder.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_guard">Order of the Guard<IonRippleEffect /></Link></td>
<td>Cavaliers who join the order of the guard dedicate themselves to the staunch and unyielding protection of a specific person or object - generally one they have been hired to protect.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_hammer">Order of the Hammer<IonRippleEffect /></Link></td>
<td>This order respects might, and believes that those who prove their strength have earned the right to make decisions for the weak.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_hero">Order of the Hero<IonRippleEffect /></Link></td>
<td>A cavalier belonging to this order specializes in hunting down large monsters and protecting communities from them.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_land">Order of the Land<IonRippleEffect /></Link></td>
<td>Self-reliance and the ability to make do with sparse resources are hallmarks of this order.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_lion">Order of the Lion<IonRippleEffect /></Link></td>
<td>A cavalier who belongs to this order has pledged himself to a sovereign; be it a king, queen, or even the local warlord.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_monument">Order of the Monument<IonRippleEffect /></Link></td>
<td>Cavaliers who join the order of the monument dedicate themselves to the protection and service of a particular city or settlement and often follow or respect the faiths of their home locale.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_paw">Order of the Paw<IonRippleEffect /></Link></td>
<td>Only dog- or wolf-riding halflings are eligible to join this order.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_penitent">Order of the Penitent<IonRippleEffect /></Link></td>
<td>Cavaliers who follow this order seek to make up for the crimes they've committed in the past, and do whatever they can to restore their tainted honor.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_reins">Order of the Reins<IonRippleEffect /></Link></td>
<td>These cavaliers hold themselves honor-bound to protect tamed and domesticated animals for their labor and loyalty.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_saddle">Order of the Saddle<IonRippleEffect /></Link></td>
<td>This order holds that the balance found between a rider and their mount contains the seeds of a better self, a better relationship with one's community, and a better sense of how to keep the world itself healthy.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_scales">Order of the Scales<IonRippleEffect /></Link></td>
<td>Members of this order track down and apprehend fleeing lawbreakers so that these vagrants may answer for their crimes and make good on their debts.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_seal">Order of the Seal<IonRippleEffect /></Link></td>
<td>Cavaliers of the order of the seal are a secretive order, each charged with the protection of a specific object (such as a dangerous magic item), place (a lost temple), or secret (that a certain peasant is actually the last descendant of the royal line).</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_shield">Order of the Shield<IonRippleEffect /></Link></td>
<td>Cavaliers who join the order of the shield devote their lives to protecting the common folk, from the simple farmer to the honest craftsman.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_shroud">Order of the Shroud<IonRippleEffect /></Link></td>
<td>Cavaliers of this order seek out and destroy undead and those who harbor or create them.</td>
</tr>
<tr>
<td><Link to="/order/order_of_the_songbird">Order of the Songbird<IonRippleEffect /></Link>*</td>
<td>Samurai of this order treat battle as a beautiful art form; many of these samurai seek pacifistic means of defeating their foes.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_staff">Order of the Staff<IonRippleEffect /></Link></td>
<td>Cavaliers belonging to the order of the staff dedicate their lives to guarding and assisting spellcasters, especially wizards and druids, and to overcoming those who seek to destroy items and locations of magical import.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_star">Order of the Star<IonRippleEffect /></Link></td>
<td>Cavaliers who join the order of the star dedicate themselves to the protection and service of a faith and its members.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_sword">Order of the Sword<IonRippleEffect /></Link></td>
<td>Cavaliers who join the order of the sword dedicate their lives to the code of chivalry, living a life of honor, valor, and fairness.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_tome">Order of the Tome<IonRippleEffect /></Link></td>
<td>The members of this order devote themselves to the preservation of knowledge.</td>
</tr>
<tr>
<td><Link to="/order/order_of_the_warrior">Order of the Warrior<IonRippleEffect /></Link>*</td>
<td>Most samurai swear themselves to the code of the warrior, which emphasizes duty, honor, loyalty, and obedience.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_waves">Order of the Waves<IonRippleEffect /></Link></td>
<td>Cavaliers of the order of the waves explore the secrets under the sea.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_the_whip">Order of the Whip<IonRippleEffect /></Link></td>
<td>A cavalier who belongs to this order has pledged himself to cruelty and malice, serving only those who grant him free rein to cause suffering.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/order/order_of_vengeance">Order of Vengeance<IonRippleEffect /></Link></td>
<td>Often affiliated with the church of Calistria, those ex-Galtan cavaliers who subscribe to the order of vengeance seek not only to reclaim their rightful homeland, but to punish those who betrayed them.</td>
</tr>
<tr>
<td><Link to="/order/ronin">Ronin<IonRippleEffect /></Link>*</td>
<td>While most samurai belong to the order of the warrior, some find themselves without a master. Known as ronin, these samurai wander the lands, serving their own code of ideals.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _stares = {title: "Mesmerist Stares", topLink: ["Mesmerist","class/mesmerist"], jsx: <div className="compilation"><h2 id="ability-stares-mesmerist-stares">Mesmerist Stares</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link><br/>At 3rd level and every 4 levels thereafter, a mesmerist's hypnotic stare imposes a further effect upon its target. The mesmerist chooses one option each time he gains a new bold stare improvement, and the choice can't be changed later. The mesmerist can't choose the same bold stare improvement more than once unless otherwise noted. All of the mesmerist's bold stare improvements affect the target as long as it is affected by the mesmerist's hypnotic stare.</p>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>Chelish mesmerists have refined their hypnotic stares to include a suite of gaze attacks useful for negotiating with or undermining outsiders. In the decades since, these secrets have begun to slip beyond the Hell-bound nation's borders, and now can be found throughout the Inner Sea region, especially in areas that interact frequently with outsiders.</p>
<p>Devilbane gazes (stares that start with "Devilbane" below) can be selected beginning at 3rd level as options for the mesmerist's bold stare improvements. They tend to be more limited in their scope than standard bold stare improvements, but cut to the core of an outsider's being. When a devilbane gaze is used against a creature with the outsider type, double the hypnotic stare penalty applied by the devilbane gaze improvement (but not the Will save penalty the original hypnotic stare imposes). Despite their moniker, devilbane gazes affect all outsiders equally well.</p>
<hr/>
<Ability id="allure" icon={["armor-downgrade"]}>
<Pair single id="allure">Allure</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies on initiative checks and Perception checks.</Pair>
</Ability>
<Ability id="devilbane-binding" icon={["armor-downgrade"]}>
<Pair single id="devilbane-binding">Devilbane Binding</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to all Charisma checks to escape <Link to="/spell/planar_binding">planar binding</Link> spells, and applies to the target's spell resistance against a planar binding spell.</Pair>
</Ability>
<Ability id="devilbane-dampening" icon={["armor-downgrade"]}>
<Pair single id="devilbane-dampening">Devilbane Dampening</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's resistance to a single form of energy, chosen by the mesmerist when he initiates the stare. If the mesmerist targets a form of energy to which his target has no resistance, this improvement has no effect.</Pair>
</Ability>
<Ability id="devilbane-dismissal" icon={["armor-downgrade"]}>
<Pair single id="devilbane-dismissal">Devilbane Dismissal</Pair>
<Pair title="Info">The <em>hypnotic stare</em> reduces the duration of any conjuration (summoning) spells the target casts, or that are currently affecting the target, by half.</Pair>
</Ability>
<Ability id="devilbane-impediment" icon={["armor-downgrade"]}>
<Pair single id="devilbane-impediment">Devilbane Impediment</Pair>
<Pair title="Info">The target of your <em>hypnotic stare</em> must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + the level of the spell) to activate any of its spell-like abilities (but not standard spellcasting). If the target fails the check, the spell-like ability doesn't function but is still expended.</Pair>
</Ability>
<Ability id="devilbane-mundanity" icon={["armor-downgrade"]}>
<Pair single id="devilbane-mundanity">Devilbane Mundanity</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's spell resistance. This ability doesn't stack with the <Link to="/stare/sapped_magic">sapped magic</Link> bold stare improvement.</Pair>
</Ability>
<Ability id="devilbane-withering" icon={["armor-downgrade"]}>
<Pair single id="devilbane-withering">Devilbane Withering</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to attack rolls and damage rolls, but only if the target is an outsider.</Pair>
<Pair title="Special">Unlike most devilbane gazes, this gaze has no effect on creatures not of the outsider type, and effect's penalty isn't doubled when it targets outsiders.</Pair>
</Ability>
<Ability id="disorientation" icon={["armor-downgrade"]}>
<Pair single id="disorientation">Disorientation</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies on attack rolls.</Pair>
</Ability>
<Ability id="disquiet" icon={["armor-downgrade"]}>
<Pair single id="disquiet">Disquiet</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> is <Link to="/misc/shaken">shaken</Link> while in areas of total darkness.</Pair>
</Ability>
<Ability id="distracted" icon={["armor-downgrade"]}>
<Pair single id="distracted">Distracted</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="infiltration" icon={["armor-downgrade"]}>
<Pair single id="infiltration">Infiltration</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's Perception checks and CMD.</Pair>
</Ability>
<Ability id="lethality" icon={["armor-downgrade"]}>
<Pair single id="lethality">Lethality</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's Fortitude saves versus poison and diseases.</Pair>
</Ability>
<Ability id="nightblindness" icon={["armor-downgrade"]}>
<Pair single id="nightblindness">Nightblindness</Pair>
<Pair title="Info">The darkvision range of the *hypnotic stare'*s target decreases by 10 feet.</Pair>
</Ability>
<Ability id="nightmare" icon={["armor-downgrade","rolling-dices"]}>
<Pair single id="nightmare">Nightmare</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> rolls twice on all Will saves versus fear, taking the lower result.</Pair>
</Ability>
<Ability id="oscillation" icon={["armor-downgrade"]}>
<Pair single id="oscillation">Oscillation</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> treats all enemies beyond 30 feet (except the mesmerist) as having <Link to="/rule/concealment">concealment</Link> (20% miss chance).</Pair>
</Ability>
<Ability id="psychic-inception" icon={["upgrade"]}>
<Pair single id="psychic-inception">Psychic Inception</Pair>
<Pair title="Info">The <em>hypnotic stare</em> and its penalty can affect creatures that are mindless or immune to mind-affecting effects (such as an undead or vermin). The mesmerist can also partially affect such a creature with his mind-affecting spells and abilities if it's under the effect of his <em>hypnotic stare;</em> it gains a +2 bonus on its saving throw (if any), and if affected, it still has a 50% chance each round of ignoring the effect. Ignoring the effect doesn't end the effect, but does allow the creature to act normally for that round.</Pair>
</Ability>
<Ability id="restriction" icon={["armor-downgrade"]}>
<Pair single id="restriction">Restriction</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> treats all areas of <Link to="/rule/dim_light">dim light</Link> or darker as <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="sabotage" icon={["armor-downgrade"]}>
<Pair single id="sabotage">Sabotage</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to Diplomacy and Intimidate checks.</Pair>
</Ability>
<Ability id="sapped-magic" icon={["armor-downgrade"]}>
<Pair single id="sapped-magic">Sapped Magic</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the DCs of spells and spell-like abilities used by the target, and to the target's spell resistance (if any).</Pair>
</Ability>
<Ability id="sensed" icon={["armor-downgrade"]}>
<Pair single id="sensed">Sensed</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to Stealth checks.</Pair>
</Ability>
<Ability id="sluggishness" icon={["armor-downgrade"]}>
<Pair single id="sluggishness">Sluggishness</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> has all of its speeds reduced by 5 feet (to a minimum of 5 feet), and the <em>hypnotic stare</em> penalty also applies to the target's Reflex saving throws.</Pair>
</Ability>
<Ability id="susceptibility" icon={["armor-downgrade"]}>
<Pair single id="susceptibility">Susceptibility</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's Sense Motive checks to oppose Bluff checks, and to the DCs of Diplomacy and Intimidate checks made against the target.</Pair>
</Ability>
<Ability id="timidity" icon={["armor-downgrade"]}>
<Pair single id="timidity">Timidity</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to damage rolls.</Pair>
</Ability>
<Ability id="unaided" icon={["armor-downgrade"]}>
<Pair single id="unaided">Unaided</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> is not able to grant or receive <Link to="/rule/flanking">flanking</Link> bonuses.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-stares-label">Footnotes</h3><ol>
<li id="ability-stares-fake-fn-1-target"><p><Link to="/source/occult_adventures">Occult Adventures</Link> pg. 42 <InnerLink aria-label="Back to reference 1" id="backlink-ability-stares-fake-fn-1" data-hash-target to="ability-stares-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-stares-fake-fn-1.2" data-hash-target to="ability-stares-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-stares-fake-fn-2-target"><p><Link to="/source/occult_origins">Occult Origins</Link> pg. 13 <InnerLink aria-label="Back to reference 2" id="backlink-ability-stares-fake-fn-2" data-hash-target to="ability-stares-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-stares-fake-fn-2.2" data-hash-target to="ability-stares-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-stares-fake-fn-2.3" data-hash-target to="ability-stares-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-stares-fake-fn-2.4" data-hash-target to="ability-stares-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-stares-fake-fn-2.5" data-hash-target to="ability-stares-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-stares-fake-fn-2.6" data-hash-target to="ability-stares-fake-fn-2.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-stares-fake-fn-3-target"><p><Link to="/source/occult_realms">Occult Realms</Link> pg. 16 <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3" data-hash-target to="ability-stares-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.2" data-hash-target to="ability-stares-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.3" data-hash-target to="ability-stares-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.4" data-hash-target to="ability-stares-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.5" data-hash-target to="ability-stares-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.6" data-hash-target to="ability-stares-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.7" data-hash-target to="ability-stares-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-stares-fake-fn-3.8" data-hash-target to="ability-stares-fake-fn-3.8">↩<sup>8</sup></InnerLink></p></li>
<li id="ability-stares-fake-fn-4-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 9 <InnerLink aria-label="Back to reference 4" id="backlink-ability-stares-fake-fn-4" data-hash-target to="ability-stares-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-stares-fake-fn-4.2" data-hash-target to="ability-stares-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-stares-fake-fn-4.3" data-hash-target to="ability-stares-fake-fn-4.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-stares-fake-fn-5-target"><p>Occult Adventures pg. 43 <InnerLink aria-label="Back to reference 5" id="backlink-ability-stares-fake-fn-5" data-hash-target to="ability-stares-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-stares-fake-fn-5.2" data-hash-target to="ability-stares-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-stares-fake-fn-5.3" data-hash-target to="ability-stares-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-stares-fake-fn-5.4" data-hash-target to="ability-stares-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-stares-fake-fn-5.5" data-hash-target to="ability-stares-fake-fn-5.5">↩<sup>5</sup></InnerLink></p></li>
</ol></section></div>};
const _style_strikes = {title: "Style Strikes", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <div className="compilation"><h2 id="ability-style_strikes-style-strikes-unchained">Style Strikes (Unchained)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link><br/>At 5th level, a monk can learn one type of style strike. Whenever he makes a flurry of blows, he can designate one of his unarmed strikes as a style strike. This attack is resolved as normal, but it has an additional effect depending on the type of strike chosen. At 9th level, and every 4 levels thereafter, a monk learns an additional style strike. He must choose which style strike to apply before the attack roll is made. At 15th level, he can designate up to two of his unarmed strikes each round as a style strike, and each one can be a different type. The monk can choose from any of the following strikes.</p>
<Ability id="stylestrikebreak-break-fn1" icon={["mailed-fist"]}>
<Pair single id="stylestrikebreak-break-fn1" flavor="The monk combines a writhing twist with a violent strike against a foe that is grappling him."><Link to="/stylestrike/break">⮞</Link> Break <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-1" id="ability-style_strikes-fake-fn-1" data-hash-target to="ability-style_strikes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">If the monk's attack is successful, he can attempt a <Link to="/rule/grapple">grapple</Link> combat maneuver check or <Link to="/skill/escape_artist">Escape Artist</Link> check as a <strong className="hl">free action</strong> to escape a grapple, adding the strike's damage as a bonus on his check.</Pair>
</Ability>
<Ability id="stylestrikedefensivespin-defensive-spin-fn2" icon={["armor-upgrade"]}>
<Pair single id="stylestrikedefensivespin-defensive-spin-fn2" flavor="The monk spins about, confounding his foe."><Link to="/stylestrike/defensive_spin">⮞</Link> Defensive Spin <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-2" id="ability-style_strikes-fake-fn-2" data-hash-target to="ability-style_strikes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk gains a +4 dodge bonus to AC against any attacks made by the target of the style strike until the start of his next turn. This bonus does not stack with itself.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikedirtystrikes-dirty-strikes-fn3" icon={["mailed-fist"]}>
<Pair single id="stylestrikedirtystrikes-dirty-strikes-fn3" flavor="The monk fights dirty with his style strike, attempting to strike in places where his attack will negatively impact his foes' performance in combat."><Link to="/stylestrike/dirty_strikes">⮞</Link> Dirty Strikes <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-3" id="ability-style_strikes-fake-fn-3" data-hash-target to="ability-style_strikes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk can perform a free <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver against the target of this strike (using the base attack bonus of the attack used to hit the foe) with a -5 penalty. This dirty trick combat maneuver does not provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="stylestrikeelbowsmash-elbow-smash-fn2-2" icon={["mailed-fist"]}>
<Pair single id="stylestrikeelbowsmash-elbow-smash-fn2-2" flavor="The monk follows up a punch with a strike from his elbow."><Link to="/stylestrike/elbow_smash">⮞</Link> Elbow Smash <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-2.2" id="ability-style_strikes-fake-fn-2.2" data-hash-target to="ability-style_strikes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk can make an additional attack using the same attack bonus as the punch at a -5 penalty. If this second attack hits, it deals damage as normal, but all of the damage is nonlethal.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikeflyingkick-flying-kick-fn4" icon={["mailed-fist"]}>
<Pair single id="stylestrikeflyingkick-flying-kick-fn4" flavor="The monk leaps through the air to strike a foe with a kick."><Link to="/stylestrike/flying_kick">⮞</Link> Flying Kick <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4" id="ability-style_strikes-fake-fn-4" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">Before the attack, the monk can move a distance equal to his <em>fast movement</em> bonus. This movement is made as part of the monk's <em>flurry of blows</em> attack and does not require an additional action. At the end of this movement, the monk must make an attack against an adjacent foe.</Pair>
<Pair title="Special">This movement may be between attacks. This movement provokes an attack of opportunity as normal. The attack made after the movement must be a kick.</Pair>
</Ability>
<Ability id="stylestrikefootstomp-foot-stomp-fn4-2" icon={["armor-downgrade"]}>
<Pair single id="stylestrikefootstomp-foot-stomp-fn4-2" flavor="The monk stomps on a foe's foot, preventing the opponent from escaping."><Link to="/stylestrike/foot_stomp">⮞</Link> Foot Stomp <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.2" id="ability-style_strikes-fake-fn-4.2" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits and the monk ends his turn adjacent to that foe, the foe's movement is restricted. Until the start of the monk's next turn, the target of this attack can move only in such a way that the space it occupies is adjacent to the monk. Alternatively, it can attempt a combat maneuver check (against the monk's CMD) as a <strong className="hl">standard action</strong> to break free.</Pair>
<Pair title="Special">This strike does not work against foes that cannot be tripped. The monk must attack with a kick to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikehammerblow-hammerblow-fn4-3" icon={["upgrade"]}>
<Pair single id="stylestrikehammerblow-hammerblow-fn4-3" flavor="The monk links his hands together, swinging both arms like a club and dealing tremendous damage."><Link to="/stylestrike/hammerblow">⮞</Link> Hammerblow <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.3" id="ability-style_strikes-fake-fn-4.3" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk rolls his unarmed strike damage twice, adding both rolls together before applying Strength and other modifiers to the damage. This bonus damage is not multiplied on a critical hit.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike, but must have both hands free.</Pair>
</Ability>
<Ability id="stylestrikeheadbutt-head-butt-fn4-4" icon={["mailed-fist"]}>
<Pair single id="stylestrikeheadbutt-head-butt-fn4-4" flavor="The monk slams his head into his enemy's head, leaving his foe reeling."><Link to="/stylestrike/head_butt">⮞</Link> Head-Butt <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.4" id="ability-style_strikes-fake-fn-4.4" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits and the foe is of the same size or one size smaller than the monk, the monk can make a free combat maneuver check against the target of this strike (using the base attack bonus of the attack used to hit the foe). If the foe is not of the same creature type as the monk, the monk takes a -8 penalty on this check. If the check is successful, the target is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
<Pair title="Special">Creatures without a discernible head are not affected by this style strike (subject to GM discretion). The monk must attack with a head-butt to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikeknockbackkick-knockback-kick-fn4-5" icon={["mailed-fist"]}>
<Pair single id="stylestrikeknockbackkick-knockback-kick-fn4-5" flavor="The monk attempts to knock his foe back with a powerful kick."><Link to="/stylestrike/knockback_kick">⮞</Link> Knockback Kick <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.5" id="ability-style_strikes-fake-fn-4.5" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk can attempt a free combat maneuver check against the foe (using the base attack bonus of the attack used to hit the foe). If the check is successful, the foe is knocked 10 feet directly away from the monk. This distance increases by 10 feet for every 5 by which the check exceeds the foe's CMD, to a maximum distance equal to the monk's <em>fast movement</em> bonus. This movement does not provoke an attack of opportunity. The foe stops moving if it strikes another creature, barrier, or otherwise solid object. The creature is not knocked prone by this movement.</Pair>
<Pair title="Special">The monk must attack with a kick to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikelegsweep-leg-sweep-fn4-6" icon={["mailed-fist"]}>
<Pair single id="stylestrikelegsweep-leg-sweep-fn4-6" flavor="The monk attempts to sweep his foe's leg, knocking the opponent down."><Link to="/stylestrike/leg_sweep">⮞</Link> Leg Sweep <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.6" id="ability-style_strikes-fake-fn-4.6" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk can make a free <Link to="/rule/trip">trip</Link> attempt against the target of this strike (using the base attack bonus of the attack used to hit the foe).</Pair>
<Pair title="Special">This trip attempt does not provoke an attack of opportunity. The monk must attack with a kick to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikeoverbearingassault-overbearing-assault-fn3-2" icon={["mailed-fist"]}>
<Pair single id="stylestrikeoverbearingassault-overbearing-assault-fn3-2" flavor="The monk attacks relentlessly, backing his foe into a corner."><Link to="/stylestrike/overbearing_assault">⮞</Link> Overbearing Assault <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-3.2" id="ability-style_strikes-fake-fn-3.2" data-hash-target to="ability-style_strikes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, the monk can perform a free <Link to="/rule/reposition">reposition</Link> combat maneuver against the target of the strike (using the base attack bonus of the attack used to hit the foe) with a -5 penalty.</Pair>
<Pair title="Special">This reposition attempt does not provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="stylestrikerabbitpunch-rabbit-punch-fn5" icon={["upgrade"]}>
<Pair single id="stylestrikerabbitpunch-rabbit-punch-fn5" flavor="The monk gives a sharp blow to the back of a foe's head."><Link to="/stylestrike/rabbit_punch">⮞</Link> Rabbit Punch <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-5" id="ability-style_strikes-fake-fn-5" data-hash-target to="ability-style_strikes-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The critical threat range and critical multiplier of this strike increase by 1, and the monk gains a +2 bonus on attack rolls to confirm a critical hit with this strike.</Pair>
<Pair title="Special">This increase is not doubled by <Link to="/feat/improved_critical">Improved Critical</Link> or similar effects. Creatures without a discernible head are unaffected by this style strike (subject to GM discretion). The monk must attack with a fist to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikeshatteringpunch-shattering-punch-fn4-7" icon={["upgrade"]}>
<Pair single id="stylestrikeshatteringpunch-shattering-punch-fn4-7" flavor="The monk delivers a brutal punch that can penetrate defenses."><Link to="/stylestrike/shattering_punch">⮞</Link> Shattering Punch <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.7" id="ability-style_strikes-fake-fn-4.7" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">If the attack hits, it bypasses any damage reduction or hardness possessed by the target of that attack.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikespinkick-spin-kick-fn4-8" icon={["upgrade"]}>
<Pair single id="stylestrikespinkick-spin-kick-fn4-8" flavor="The monk spins about, delivering a kick his foe did not expect."><Link to="/stylestrike/spin_kick">⮞</Link> Spin Kick <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-4.8" id="ability-style_strikes-fake-fn-4.8" data-hash-target to="ability-style_strikes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The monk makes his attack against the foe's <Link to="/rule/flat_footed">flat-footed</Link> AC. Creatures with the <Link to="/ability/uncanny_dodge">uncanny dodge</Link> class feature or a similar effect cannot be caught flat-footed by this style strike.</Pair>
<Pair title="Special">The monk must attack with a kick to use this style strike.</Pair>
</Ability>
<Ability id="stylestrikethroatcrush-throat-crush-fn1-2" icon={["mailed-fist"]}>
<Pair single id="stylestrikethroatcrush-throat-crush-fn1-2"><Link to="/stylestrike/throat_crush">⮞</Link> Throat Crush <sup><InnerLink showBacklink="backlink-ability-style_strikes-fake-fn-1.2" id="ability-style_strikes-fake-fn-1.2" data-hash-target to="ability-style_strikes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The monk gives a sharp blow to a foe's throat, hampering its ability to speak for 1 round as if it had the <Link to="/rule/minor_spellblights">caster croak spellblight</Link>.</Pair>
<Pair title="Special">Creatures without a discernible throat, or with multiple vocal organs, are unaffected (subject to GM discretion).</Pair>
</Ability>
<section data-footnotes><h3 id="ability-style_strikes-label">Footnotes</h3><ol>
<li id="ability-style_strikes-fake-fn-1-target"><p><Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link> pg. 7 <InnerLink aria-label="Back to reference 1" id="backlink-ability-style_strikes-fake-fn-1" data-hash-target to="ability-style_strikes-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-style_strikes-fake-fn-1.2" data-hash-target to="ability-style_strikes-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-style_strikes-fake-fn-2-target"><p><Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link> pg. 18 <InnerLink aria-label="Back to reference 2" id="backlink-ability-style_strikes-fake-fn-2" data-hash-target to="ability-style_strikes-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-style_strikes-fake-fn-2.2" data-hash-target to="ability-style_strikes-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-style_strikes-fake-fn-3-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 31 <InnerLink aria-label="Back to reference 3" id="backlink-ability-style_strikes-fake-fn-3" data-hash-target to="ability-style_strikes-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-style_strikes-fake-fn-3.2" data-hash-target to="ability-style_strikes-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-style_strikes-fake-fn-4-target"><p>Pathfinder Unchained pg. 19 <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4" data-hash-target to="ability-style_strikes-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.2" data-hash-target to="ability-style_strikes-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.3" data-hash-target to="ability-style_strikes-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.4" data-hash-target to="ability-style_strikes-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.5" data-hash-target to="ability-style_strikes-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.6" data-hash-target to="ability-style_strikes-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.7" data-hash-target to="ability-style_strikes-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-style_strikes-fake-fn-4.8" data-hash-target to="ability-style_strikes-fake-fn-4.8">↩<sup>8</sup></InnerLink></p></li>
<li id="ability-style_strikes-fake-fn-5-target"><p>Martial Arts Handbook pg. 6 <InnerLink aria-label="Back to reference 5" id="backlink-ability-style_strikes-fake-fn-5" data-hash-target to="ability-style_strikes-fake-fn-5">↩</InnerLink></p></li>
</ol></section></div>};
const _variant_channeling = {title: "Variant Channeling", topLink: ["Cleric","class/cleric"], jsx: <><h2 id="ability-variant_channeling-variant-channeling">Variant Channeling</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 28</Link></p>
<p>An iconic ability of clerics is their power to <Link to="/ability/channel_energy">channel positive or negative energy</Link>, whether for healing, for damage, or to turn or command the undead. However, given the great variety of deities and their divine portfolios, it naturally follows that some deities would endow their mortal servants with the power to channel energies in other ways that more closely mirror their particular focus. The following categories are examples of alternative channeling abilities based on the nature of a deity's power; for example, a fire deity's negative energy channeling may deal fire damage as part of or instead of the damage from channeling.</p>
<p>When you create a cleric character, decide whether she uses the standard form of <em>channel energy</em> or a variant presented here based on one aspect of her deity's portfolio. Once this choice is made, it cannot be altered. Variant channeling has the same area of effect, save DCs, uses per day, and other rules relating to channeling energy. Feats and abilities that modify or present alternative uses for channeled energy (such as Command Undead and Turn Undead) work normally with these variant channeling abilities.</p>
<p>A variant channeling either modifies positive channeled energy when used to heal or modifies negative energy when used to harm. When using positive energy to heal, affected creatures gain only half the normal amount of healing but also receive a specific beneficial effect. When channeling negative energy to harm, affected creatures take only half the normal damage but take an additional penalty or harmful effect; a successful saving throw negates the additional penalty or effect but does not reduce the damage any further. Creatures that would normally ignore the effect of a particular channel (such as undead with respect to a positive energy channel used to heal) ignore the variant effect of that channel.</p>
<p>Some variant channeling abilities are enhanced when used on particular creature types. Such channeling increases the normal healing or damage from channeled energy by 50% for that creature type, rather than the default half healing or damage for the alternative channeling. For example, a 7th-level cleric normally heals 4d6 points of damage with channeled positive energy; with the <em>Nature</em> alternative channeling, that cleric instead heals only half that amount (2d6) when channeling, but heals animals and fey an additional +50% over the unhalved value (4d6 + 50%).</p>
<p>Unless otherwise stated, bonuses granted by a variant channeling are sacred bonuses if you channel positive energy or profane bonuses if you channel negative energy. If an alternative channeled energy provides a "channel bonus" on rolls or statistics, the bonus is +1 + <Link to="/misc/one_fifth">one-fifth</Link> of your cleric level. Likewise, a "channel penalty" starts at -1 and increases at the same rate, based on your cleric level.</p>
<p>A character who has the channel energy ability from a class other than cleric may use these variant channeling rules if the class's abilities are tied to serving a deity. For example, <Link to="/class/paladin">paladins</Link> can select alternative channeling abilities if they serve a deity, as can <Link to="/class/oracle">oracles</Link> with the <Link to="/mystery/life">Life</Link> mystery (as they serve many deities), but <Link to="/arcaneschool/necromancy">necromancer</Link> wizards cannot.</p>
<p>The following is a list of example portfolios and the variant channeling abilities available to each.</p>
<ScrollContainer id="ability-variant_channeling--table-0"><table>
<thead>
<tr>
<th>Portfolio</th>
<th>Heal</th>
<th>Harm</th>
</tr>
</thead>
<tbody><tr>
<td>Air/Sky/Wind</td>
<td>Creatures gain a channel bonus on Acrobatics and Fly checks, saving throws against wind effects, and effects with the air descriptor until the end of your next turn.</td>
<td>Creatures are buffeted with wind until the end of your next turn; this wind gives them a channel penalty on ranged attacks, and their movement is halved if they move toward you.</td>
</tr>
<tr>
<td>Ale/Wine</td>
<td>Creatures ignore the <Link to="/misc/nauseated">nauseated</Link> and <Link to="/misc/sickened">sickened</Link> conditions, as well as <Link to="/rule/ability_damage_drain">ability damage and drain</Link> from poison, until the end of your next turn. This does not bring back to life creatures killed by Constitution damage.</td>
<td>Creatures are nauseated for 1 round.</td>
</tr>
<tr>
<td>Art/Music</td>
<td>Creatures gain a channel bonus on Perform checks and on saving throws against illusions, sonic effects, and language-dependent effects for 1 minute.</td>
<td>Creatures take a channel penalty on saving throws against illusions, sonic effects, and language-dependent effects for 1 minute.</td>
</tr>
<tr>
<td>Battle/Wrath</td>
<td>Creatures gain a channel bonus on weapon damage and critical hit confirmation rolls until the end of your next turn.</td>
<td>Creatures take a channel penalty on weapon damage and critical hit confirmation rolls until the end of your next turn.</td>
</tr>
<tr>
<td>Beauty/Love/Lust</td>
<td>Creatures gain a channel bonus on saving throws against charm effects and abilities based on fascination or physical attractiveness (such as a <Link to="/monster/nymph">nymph's</Link> blinding beauty and stunning glance abilities) for 1 minute.</td>
<td>Creatures gain a channel penalty on saving throws against charm effects and effects that fascinate for 1 minute.</td>
</tr>
<tr>
<td>Bravery/Valor</td>
<td>Creatures affected by fear may attempt another saving throw and receive a channel bonus on the roll. A creature unaffected by fear gains a channel bonus to its Armor Class until the end of your next turn and on its attack roll if it makes a charge attack before your next turn.</td>
<td>This works like a standard channel (not halved).</td>
</tr>
<tr>
<td>Cities</td>
<td>Creatures gain a channel bonus on attack rolls when <Link to="/rule/flanking">flanking</Link> and to Armor Class when flanked until the end of your next turn.</td>
<td>All creatures' squares and threatened areas are treated as <Link to="/rule/difficult_terrain">difficult terrain</Link> until the start of your next turn (these areas move with the creatures rather than being fixed in place at the time of the channeling). Until the end of your next turn, creatures gain a channel penalty on Acrobatics checks and overrun attempts to move through these squares.</td>
</tr>
<tr>
<td>Contracts/Oaths</td>
<td>Creatures gain a channel bonus on saves against compulsion effects until the end of your next turn.</td>
<td>Creatures gain a channel penalty on saving throws against compulsions until the end of your next turn.</td>
</tr>
<tr>
<td>Darkness</td>
<td>Creatures gain low-light vision until the end of your next turn. At cleric level 5, they gain darkvision 30 feet as well, increasing this range by 30 feet for every 5 cleric levels thereafter.</td>
<td>The <Link to="/rule/illumination_level">illumination level</Link> in the area drops by 1 step, as <Link to="/spell/darkness">darkness</Link>, for 1 minute. At cleric level 10, the light level drops by 2 steps. At cleric level 15, it drops by 3 steps, and areas of dim light or darkness become supernaturally dark (even creatures with darkvision cannot see within it).</td>
</tr>
<tr>
<td>Death</td>
<td>Creatures gain a channel bonus on stabilization checks when <Link to="/misc/dying">dying</Link> and on saves against death effects for 1 minute.</td>
<td>Creatures gain a channel penalty on stabilization checks when dying for 1 minute, and subtract the channel penalty from all healing magic, <Link to="/umr/fast_healing">fast healing</Link>, and <Link to="/umr/regeneration">regeneration</Link>.</td>
</tr>
<tr>
<td>Destruction</td>
<td>Creatures gain a channel bonus on attack and damage rolls against objects, CMB for <Link to="/rule/sunder">sunder</Link> attempts, and Strength checks to break objects until the end of your next turn.</td>
<td>Unattended objects take full channel damage (not half).</td>
</tr>
<tr>
<td>Disease</td>
<td>Creatures heal a number of points of ability damage to one ability score (your choice) equal to your channel bonus.</td>
<td>Creatures are sickened until the end of your next turn, plus a number of rounds equal to your channel penalty. At cleric level 10, you may select one creature as the target of a <Link to="/spell/contagion">contagion</Link> in addition to the effects of the channeled energy. At cleric level 20, all creatures in the area are subject to <em>contagion</em> in addition to the effects of the channeled energy.</td>
</tr>
<tr>
<td>Dreams</td>
<td>Creatures affected by sleep effects may attempt another saving throw and apply the channel bonus on the roll. Willingly sleeping creatures gain a channel bonus on saving throws and Perception checks for up to 8 hours (this bonus ends if the creature awakens).</td>
<td>Creatures gain a channel penalty on Perception checks and saving throws against exhaustion, fatigue, and sleep effects for 1 minute.</td>
</tr>
<tr>
<td>Duty</td>
<td>Creatures gain a channel bonus on attacks of opportunity and <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/disarm">disarm</Link> attempts until the end of your next turn.</td>
<td>Creatures take a channel penalty on attacks of opportunity and bull rush and disarm attempts until the end of your next turn.</td>
</tr>
<tr>
<td>Earth</td>
<td>Creatures gain a DR 1/adamantine until the end of your next turn. This DR improves by 1 at 5th level and every 5 levels thereafter. This does not allow recipients to overcome DR/adamantine with their own attacks.</td>
<td>All squares in the area are treated as <Link to="/rule/difficult_terrain">difficult terrain</Link> for 1 minute.</td>
</tr>
<tr>
<td>Envy</td>
<td>Creatures gain a channel bonus on disarm and <Link to="/rule/steal">steal</Link> combat maneuvers, Bluff checks, and Sleight of Hand checks for 1 minute.</td>
<td>Creatures must attempt a steal combat maneuver on their next turn against an adjacent enemy. This is a compulsion effect.</td>
</tr>
<tr>
<td>Farming</td>
<td>Creatures ignore <Link to="/misc/fatigue">fatigue</Link> (but not <Link to="/misc/exhaustion">exhaustion</Link>) for 1 minute. The healing effect is enhanced for plant creatures.</td>
<td>The damage effect is enhanced for plant creatures. Creatures are fatigued, as if experiencing <Link to="/rule/starvation">starvation</Link>.</td>
</tr>
<tr>
<td>Fate</td>
<td>Creatures gain a channel bonus on one d20 roll made during their next <Link to="/rule/readied_action">readied action</Link> as long as it is taken before the end of your next turn.</td>
<td>Creatures gain a channel penalty on ability checks and skill checks for 1 minute.</td>
</tr>
<tr>
<td>Fire</td>
<td>The healing effect is enhanced for creatures with the fire subtype.</td>
<td>The damage effect is enhanced for creatures with the cold subtype. Affected creatures who fail their saves catch on fire.</td>
</tr>
<tr>
<td>Flying Creatures</td>
<td>Creatures gain a channel bonus on Fly checks and increase their fly speed (if any) by 10 feet until the end of your next turn.</td>
<td>Creatures take a channel penalty on Fly checks and decrease their fly speed (if any) by 10 feet until the end of your next turn.</td>
</tr>
<tr>
<td>Forge</td>
<td>Creatures in metal armor gain a channel bonus to Armor Class until the end of your next turn. Alternatively, you may repair damage to metal objects and metal constructs as if they were creatures, and this healing is enhanced.</td>
<td>The damage effect is enhanced against metal constructs and unattended metal objects.</td>
</tr>
<tr>
<td>Freedom</td>
<td>Creatures gain a channel bonus on Escape Artist checks, CMB checks to escape a <Link to="/rule/grapple">grapple</Link>, and saving throws against becoming entangled, paralyzed, or <em>slowed.</em></td>
<td>Creatures are <em>slowed</em> (as <Link to="/spell/slow">slow</Link>) until the end of your next turn.</td>
</tr>
<tr>
<td>Hunting</td>
<td>Creatures gain a channel bonus on Survival checks and ranged attack rolls until the end of your next turn.</td>
<td>Creatures gain a -5 penalty on Stealth checks for 1 minute and temporarily lose effects or special abilities that reduce or negate tracks for that duration.</td>
</tr>
<tr>
<td>Journeys</td>
<td>Creatures gain a channel bonus to AC against attacks of opportunity until the end of your next turn.</td>
<td>Creatures' movement speed is halved until the end of your next turn.</td>
</tr>
<tr>
<td>Justice/Law</td>
<td>Lawful creatures gain a channel bonus on Perception and Sense Motive checks, attack rolls, and saving throws until the end of your next turn.</td>
<td>Creatures are affected by <Link to="/spell/zone_of_truth">zone of truth</Link> until the end of your next turn.</td>
</tr>
<tr>
<td>Knowledge</td>
<td>Creatures gain a channel bonus on Knowledge and Perception checks until the end of your next turn.</td>
<td>Sentient creatures (Intelligence 3+) who fail their saves take 1d2 points of <Link to="/rule/intelligence_damage">Intelligence damage</Link>. A successful save negates this Intelligence damage.</td>
</tr>
<tr>
<td>Luck</td>
<td>Creatures gain a channel bonus or a luck bonus (creature's choice) on one roll (attack roll, CMB check, saving throw, or skill check) made before the end of your next turn.</td>
<td>Creatures take a channel penalty on all d20 rolls until the end of your next turn.</td>
</tr>
<tr>
<td>Madness</td>
<td>Creatures gain a channel bonus on saving throws against <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/insanity">insanity</Link>, <Link to="/spell/rage">rage</Link>, and similar effects.</td>
<td>Creatures are <Link to="/misc/confused">confused</Link> until the end of your next turn.</td>
</tr>
<tr>
<td>Magic</td>
<td>Creatures gain a channel bonus on caster level checks and <Link to="/rule/concentration">concentration checks</Link> until the end of your next turn.</td>
<td>All creatures must make concentration checks (DC = channel energy DC plus spell level) to use spells or spell-like abilities until the end of your next turn.</td>
</tr>
<tr>
<td>Monsters</td>
<td>The healing effect is enhanced for aberrations, dragons, magical beasts, and monstrous humanoids.</td>
<td>Creatures gain a channel penalty to attack and damage rolls against summoned and called creatures.</td>
</tr>
<tr>
<td>Monuments</td>
<td>For 1 minute, creatures gain a channel bonus on saving throws against effects that would in any way reduce their speed or deal ability score damage.</td>
<td>Creatures are <Link to="/misc/staggered">staggered</Link> until the end of your next turn.</td>
</tr>
<tr>
<td>Moonlight</td>
<td>Until the end of your next turn, creatures gain low-light vision and a channel bonus on attack rolls while in <Link to="/rule/dim_light">dim or darker light</Link>.</td>
<td>Until the end of your next turn, creatures are <Link to="/misc/dazzled">dazzled</Link> and take a channel penalty on attack rolls while in dim or darker light.</td>
</tr>
<tr>
<td>Murder</td>
<td>Creatures that critically hit before the end of your next turn add a <Link to="/rule/bleed">bleed</Link> effect equal to your channel bonus.</td>
<td>Creatures gain a bleed effect equal to your channel penalty.</td>
</tr>
<tr>
<td>Nature</td>
<td>The healing effect is enhanced for animals and fey. Creatures gain a channel bonus on Handle Animal and wild empathy checks for 1 minute.</td>
<td>The harmful effect is enhanced for animals and fey.</td>
</tr>
<tr>
<td>Nightmares</td>
<td>Creatures gain a channel bonus on charm and compulsion saves for 1 minute.</td>
<td>Creatures gain a channel penalty on concentration checks and saves against fear and phantasms.</td>
</tr>
<tr>
<td>Ocean/Sea/Water</td>
<td>Creatures gain a channel bonus on Climb and Swim checks and Constitution checks to <Link to="/misc/hold_their_breath">hold their breath</Link>; this bonus lasts for 1 minute. Creatures ignore fatigue from <Link to="/rule/thirst">thirst</Link> and <Link to="/rule/pressure_damage">pressure damage</Link> from deep water for 1 minute.</td>
<td>The harming effect is enhanced for creatures with the aquatic or water subtypes.</td>
</tr>
<tr>
<td>Pain</td>
<td>Creatures gain a channel bonus on pain effect saves for 1 minute.</td>
<td>Creatures are sickened until the end of your next turn, plus a number of rounds equal to your channel penalty. At cleric level 10, you may select one creature to be nauseated in addition to the effects of the channeled energy.</td>
</tr>
<tr>
<td>Poison</td>
<td>Creatures gain a channel bonus on poison saves for 1 minute.</td>
<td>Creatures take 1 point of <Link to="/rule/constitution_damage">Strength, Dexterity, or Constitution damage</Link> (your choice) as a poison effect.</td>
</tr>
<tr>
<td>Protection</td>
<td>Creatures gain a channel bonus to Armor Class until the end of your next turn.</td>
<td>Creatures gain a channel penalty to Armor Class until the end of your next turn.</td>
</tr>
<tr>
<td>Revenge/Vengeance</td>
<td>This works like a standard channel (not halved).</td>
<td>Creatures gain a channel penalty on attack rolls until the end of your next turn.</td>
</tr>
<tr>
<td>Rulership</td>
<td>Creatures gain a channel bonus on Diplomacy checks and to the DC of their language-dependent and charm effects until the end of your next turn.</td>
<td>Creatures are <Link to="/misc/dazed">dazed</Link> for 1 round.</td>
</tr>
<tr>
<td>Secrets</td>
<td>Creatures gain a channel bonus on Sense Motive checks and caster level checks and to save DCs of their divination spells until the end of your next turn.</td>
<td>Creatures gain a channel penalty on saving throws against divinations for 1 minute. Creatures using Sense Motive against affected creatures for the next minute gain a channel bonus on Sense Motive checks.</td>
</tr>
<tr>
<td>Self-Perfection</td>
<td>Creatures may ignore one temporary condition of their choice until the end of your next turn.</td>
<td>Creatures gain a channel penalty on attempts to dispel, remove, or make additional saving throws against all ongoing conditions for 1 minute (this does not apply to any initial saving throw allowed against such an effect but does apply to effects that begin during this duration).</td>
</tr>
<tr>
<td>Sexuality</td>
<td>Creatures gain a channel bonus on Perform checks and on either Bluff or Diplomacy checks for 1 minute.</td>
<td>For 1 minute, creatures take a channel penalty on saving throws against charm effects and effects that cause the <Link to="/misc/fascinated">fascinated</Link> condition.</td>
</tr>
<tr>
<td>Slavery/Tyranny</td>
<td>Creatures ignore fatigue and exhaustion for 1 minute.</td>
<td>Creatures gain a channel penalty on saves against compulsions, pain, and stun for 1 minute.</td>
</tr>
<tr>
<td>Strategy</td>
<td>Until your next turn, creatures using <Link to="/rule/aid_another_2">aid another</Link> add your channel bonus to the aided creature's roll in addition to the normal aid another bonus.</td>
<td>Creatures may not take attacks of opportunity until the end of your next turn.</td>
</tr>
<tr>
<td>Strength</td>
<td>Creatures gain a channel bonus on all Strength-based attacks, combat maneuver checks that rely on Strength, Strength-based skills, and Strength checks until the end of your next turn.</td>
<td>Creatures gain a channel penalty on all Strength-based rolls and to Strength-based game statistics (such as CMD) until the end of your next turn.</td>
</tr>
<tr>
<td>Sun</td>
<td>The illumination level in the area increases by one step, and creatures gain a channel bonus on saves against blindness and light-based effects.</td>
<td>Creatures are dazzled for 1 minute; creatures with <Link to="/umr/light_blindness">light blindness</Link> or <Link to="/umr/light_sensitivity">light sensitivity</Link> are <Link to="/misc/blinded">blinded</Link> instead of dazzled.</td>
</tr>
<tr>
<td>Trickery</td>
<td>Creatures gain a channel bonus on Bluff, Disguise, Sleight of Hand, and Stealth checks for 1 minute.</td>
<td>Creatures gain a channel penalty on Perception and Sense Motive checks for 1 minute.</td>
</tr>
<tr>
<td>Undeath</td>
<td>This works like a standard channel (not halved).</td>
<td>The healing effect is enhanced for undead creatures and those with negative energy affinity.</td>
</tr>
<tr>
<td>Weapons</td>
<td>Creatures gain a channel bonus on attack rolls until the end of your next turn when wielding your deity's favored weapon.</td>
<td>Creatures gain a channel penalty on attack and damage rolls until the end of your next turn when wielding manufactured weapons.</td>
</tr>
<tr>
<td>Weather</td>
<td>Creatures gain a channel bonus on saving throws against electricity, sonic, and wind effects.</td>
<td>Each time you channel energy, you may change half the channeled energy damage to electricity or sonic damage.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _vigilante_talents = {hasJL:true,title: "Vigilante Talents", topLink: ["Vigilante","class/vigilante"], jsx: <div className="compilation"><div className="jumpList" id="ability-vigilante_talents-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-vigilante_talents-avenger-talents">Avenger Talents</InnerLink></li><li><InnerLink toTop to="ability-vigilante_talents-stalker-talents">Stalker Talents</InnerLink></li><li><InnerLink toTop to="ability-vigilante_talents-hidden-strike-talents">Hidden Strike Talents</InnerLink></li><li><InnerLink toTop to="ability-vigilante_talents-other-talents">Other Talents</InnerLink></li></ul></div><h2 id="ability-vigilante_talents-vigilante-talents">Vigilante Talents</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 13</Link><br/>Starting at 2nd level and every 2 levels thereafter, a vigilante gains a vigilante talent. Unless otherwise noted, a talent can be selected only once. Some talents require the vigilante to meet prerequisites before they can be chosen, such as possessing another vigilante talent, possessing a particular specialization, or attaining a minimum level. Once a talent has been selected, it can't be changed.</p>
<p>If the vigilante uses any of these talents while in his social identity, he must succeed at a Disguise check against the Perception checks of all onlookers (without the +20 circumstance bonus from seamless guise) or the onlookers will realize that he is more than his social identity appears to be and perhaps discover the social and vigilante identities are one and the same. If a talent calls for a saving throw, the DC for that save is equal to 10 + 1/2 the vigilante's level + the vigilante's Charisma modifier, unless stated otherwise.</p>
<h3 id="ability-vigilante_talents-avenger-talents" data-hash-target>Avenger Talents</h3>
<p>These talents can only be taken by avenger vigilantes.</p>
<Ability id="vigtalentcombatskill-combat-skill-ex-fn1" icon={["stairs-goal"]}>
<Pair single id="vigtalentcombatskill-combat-skill-ex-fn1"><Link to="/vigtalent/combat_skill">⮞</Link> Combat Skill (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1" id="ability-vigilante_talents-fake-fn-1" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains any one <Link to="/main/combat_feat">combat feat</Link> as a bonus feat. He must meet the prerequisites for this feat, but he is treated as though he had a number of fighter levels equal to half his vigilante level for the purpose of qualifying for this feat.</Pair>
<Pair title="Special">This talent can be selected more than once, but each time the avenger must select a different feat.</Pair>
</Ability>
<Ability id="vigtalentfistoftheavenger-fist-of-the-avenger-ex-fn1-2" icon={["stairs-goal","upgrade"]}>
<Pair single id="vigtalentfistoftheavenger-fist-of-the-avenger-ex-fn1-2"><Link to="/vigtalent/fist_of_the_avenger">⮞</Link> Fist of the Avenger (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.2" id="ability-vigilante_talents-fake-fn-1.2" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat, if he doesn't have this feat already. In addition, whenever he successfully attacks with his fist or a gauntlet, he gains a bonus on damage rolls equal to half his vigilante level (minimum +1, maximum of +5).</Pair>
</Ability>
<Ability id="vigtalentheavytraining-heavy-training-ex-fn1-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="vigtalentheavytraining-heavy-training-ex-fn1-3"><Link to="/vigtalent/heavy_training">⮞</Link> Heavy Training (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.3" id="ability-vigilante_talents-fake-fn-1.3" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/heavy_armor_proficiency">Heavy Armor Proficiency</Link> as a bonus feat, if he does not have that feat already. The <Link to="/vigtalent/armor_skin">armor skin</Link> vigilante talent also applies to heavy armor.</Pair>
<Pair title="At 16th Level">If the vigilante has the <em>armor skin</em> vigilante talent, he can move at full speed in heavy armor.</Pair>
</Ability>
<Ability id="vigtalentmadrush-mad-rush-ex-fn2" icon={["mailed-fist","broken-shield"]}>
<Pair single id="vigtalentmadrush-mad-rush-ex-fn2"><Link to="/vigtalent/mad_rush">⮞</Link> Mad Rush (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2" id="ability-vigilante_talents-fake-fn-2" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">12th-level avenger</Pair>
<Pair title="Ability">Whenever the vigilante <Link to="/rule/charge">charges</Link>, he can make a full attack. Whenever he uses this ability, he takes a -4 penalty to his AC until the start of his next turn (in addition to the AC penalty for charging).</Pair>
</Ability>
<Ability id="vigtalentnothingcanstopme-nothing-can-stop-me-ex-fn2-2" icon={["mailed-fist"]}>
<Pair single id="vigtalentnothingcanstopme-nothing-can-stop-me-ex-fn2-2"><Link to="/vigtalent/nothing_can_stop_me">⮞</Link> Nothing Can Stop Me (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.2" id="ability-vigilante_talents-fake-fn-2.2" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Once per round, while the vigilante is moving, he can make one attack as a <strong className="hl">free action</strong> against an unattended object in the way of his path, such as a door or table. If his attack deals enough damage to destroy the object, he can continue to move. If he doesn't destroy the object, his move ends. This attack is made as part of his <strong className="hl">move action</strong> and doesn't count against his attacks this round. If his attack inadvertently targets a creature (such as a <Link to="/monster/mimic">mimic</Link>), it automatically misses and his move ends (although he can still attack the creature as normal at the end of his movement).</Pair>
</Ability>
<Ability id="vigtalentsignatureweapon-signature-weapon-ex-fn3" icon={["stairs-goal"]}>
<Pair single id="vigtalentsignatureweapon-signature-weapon-ex-fn3"><Link to="/vigtalent/signature_weapon">⮞</Link> Signature Weapon (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3" id="ability-vigilante_talents-fake-fn-3" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante must select one type of weapon (such as longsword or crossbow) when he gains this talent. He gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat for his selected weapon type. If he already has the Weapon Focus feat with the selected weapon, he can immediately swap it for another feat for which he qualified at the level he chose Weapon Focus in the selected weapon.</Pair>
<Pair title="At 8th Level">He also gains <Link to="/feat/weapon_specialization">Weapon Specialization</Link> as a bonus feat for his selected weapon.</Pair>
<Pair title="Special">He doesn't have to meet any of the prerequisites for these feats.</Pair>
</Ability>
<Ability id="vigtalentsteelsoldier-steel-soldier-ex-fn4" icon={["stairs-goal","armor-upgrade","upgrade"]}>
<Pair single id="vigtalentsteelsoldier-steel-soldier-ex-fn4" flavor={<>Some vigilantes ceaselessly tinker with their armor until the two seem inseparable; <Link to="/arc-vigilante/masked_maiden">masked maidens</Link> are particularly prone to developing this obsession.</>}><Link to="/vigtalent/steel_soldier">⮞</Link> Steel Soldier (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-4" id="ability-vigilante_talents-fake-fn-4" data-hash-target to="ability-vigilante_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante can spend 1 day and 100 gp per class level modifying a set of armor with which he is proficient. The vigilante can conceal one set of unworn modified armor on his person as though it were an extraordinarily small object, as per <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, and can <Link to="/rule/don_armor">don modified armor</Link> without aid.</Pair>
<Pair title="At 8th Level">The vigilante treats modified armor's enhancement bonus (if any) as a weapon enhancement bonus when making attacks with the armor's gauntlets, if the armor has any.</Pair>
<Pair title="Special">The <Link to="/vigtalent/armor_skin">armor skin</Link> talent also applies to armor with this ability.</Pair>
</Ability>
<Ability id="vigtalentsuckerpunch-sucker-punch-ex-fn3-2" icon={["upgrade"]}>
<Pair single id="vigtalentsuckerpunch-sucker-punch-ex-fn3-2"><Link to="/vigtalent/sucker_punch">⮞</Link> Sucker Punch (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.2" id="ability-vigilante_talents-fake-fn-3.2" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the vigilante attacks a foe that is unaware of his presence (or who views him as an ally), and the attack deals nonlethal damage, the attack deals an additional 1d6 points of nonlethal damage.</Pair>
<Pair title="At 6th Level">This additional damage becomes 2d6.</Pair>
<Pair title="At 12th Level">This additional damage increases to 3d6.</Pair>
<Pair title="At 18th Level">This additional damage becomes 4d6.</Pair>
</Ability>
<Ability id="vigtalentsweepingstrike-sweeping-strike-ex-fn5" icon={["stairs-goal","upgrade"]}>
<Pair single id="vigtalentsweepingstrike-sweeping-strike-ex-fn5"><Link to="/vigtalent/sweeping_strike">⮞</Link> Sweeping Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-5" id="ability-vigilante_talents-fake-fn-5" data-hash-target to="ability-vigilante_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/cleave">Cleave</Link> as a bonus feat.</Pair>
<Pair title="At 6th Level">He gains <Link to="/feat/great_cleave">Great Cleave</Link> as a bonus feat.</Pair>
<Pair title="At 12th Level">While using Great Cleave, he no longer has to hit a target in order to make an additional attack against a foe that is adjacent to that target.</Pair>
<Pair title="Special">He does not need to meet the prerequisites for these bonus feats.</Pair>
</Ability>
<Ability id="vigtalentunkillable-unkillable-ex-fn3-3" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="vigtalentunkillable-unkillable-ex-fn3-3"><Link to="/vigtalent/unkillable">⮞</Link> Unkillable (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.3" id="ability-vigilante_talents-fake-fn-3.3" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/diehard">Diehard</Link> as a bonus feat, though he does not have to meet the prerequisites for this feat.</Pair>
<Pair title="At 6th Level">He doesn't lose hit points when he takes a standard action while <Link to="/misc/disabled">disabled</Link>.</Pair>
<Pair title="At 12th Level">When he would die from hit point damage, he remains alive for 1 round before dying (and if his hit points rise above a negative amount equal to his Constitution score before that round is over, he doesn't die).</Pair>
<Pair title="At 18th Level">He is no longer disabled at negative hit points and can take a full round's worth of actions.</Pair>
</Ability>
<Ability id="vigtalentweaponfamiliarity-weapon-familiarity-ex-fn6" icon={["stairs-goal"]}>
<Pair single id="vigtalentweaponfamiliarity-weapon-familiarity-ex-fn6"><Link to="/vigtalent/weapon_familiarity">⮞</Link> Weapon Familiarity (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-6" id="ability-vigilante_talents-fake-fn-6" data-hash-target to="ability-vigilante_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante selects either two simple or martial weapons or one exotic weapon when he gains this talent. He gains proficiency with his chosen weapon or weapons.</Pair>
<Pair title="At 8th Level">He also gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat for his selected weapon or weapons.</Pair>
</Ability>
<h3 id="ability-vigilante_talents-stalker-talents" data-hash-target>Stalker Talents</h3>
<p>These talents can only be taken by stalker vigilantes.</p>
<Ability id="vigtalentblindspot-blind-spot-ex-fn7" icon={["upgrade"]}>
<Pair single id="vigtalentblindspot-blind-spot-ex-fn7"><Link to="/vigtalent/blind_spot">⮞</Link> Blind Spot (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-7" id="ability-vigilante_talents-fake-fn-7" data-hash-target to="ability-vigilante_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level stalker</Pair>
<Pair title="Ability">The vigilante is so skilled at stealth, he can use the Stealth skill to hide from creatures with unusual senses that normally automatically detect creatures. This includes senses such as <Link to="/umr/blindsense">blindsense</Link>, <Link to="/umr/blindsight">blindsight</Link>, <Link to="/umr/lifesense">lifesense</Link>, <Link to="/umr/scent">scent</Link>, or <Link to="/umr/tremorsense">tremorsense</Link>. For each such ability that the creature possesses, if the vigilante is not bypassing the sense in another way - such as the <Link to="/spell/negate_aroma">negate aroma</Link> spell for scent or flying for tremorsense - the creature gains a stacking +20 circumstance bonus on all Perception checks to notice the vigilante, rather than automatically noticing the vigilante.</Pair>
</Ability>
<Ability id="vigtalentevasive-evasive-ex-fn1-4" icon={["armor-upgrade"]}>
<Pair single id="vigtalentevasive-evasive-ex-fn1-4"><Link to="/vigtalent/evasive">⮞</Link> Evasive (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.4" id="ability-vigilante_talents-fake-fn-1.4" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante is hard to catch with area attacks. He gains the <Link to="/ability/evasion">evasion</Link> ability.</Pair>
<Pair title="At 12th Level">He gains the <Link to="/talent/improved_evasion">improved evasion</Link> ability</Pair>
</Ability>
<Ability id="vigtalenthideinplainsight-hide-in-plain-sight-ex-fn1-5" icon={["stairs-goal"]}>
<Pair single id="vigtalenthideinplainsight-hide-in-plain-sight-ex-fn1-5"><Link to="/vigtalent/hide_in_plain_sight">⮞</Link> Hide in Plain Sight (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.5" id="ability-vigilante_talents-fake-fn-1.5" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level stalker</Pair>
<Pair title="Ability">The vigilante can use Stealth to hide even when being observed. As long as he is within 10 feet of <Link to="/rule/dim_light">dim light</Link> (his own shadow doesn't count), he can hide without anything to actually hide behind.</Pair>
</Ability>
<Ability id="vigtalentroguetalent-rogue-talent-ex-fn2-3" icon={["stairs-goal"]}>
<Pair single id="vigtalentroguetalent-rogue-talent-ex-fn2-3"><Link to="/vigtalent/rogue_talent">⮞</Link> Rogue Talent (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.3" id="ability-vigilante_talents-fake-fn-2.3" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains a single <Link to="/ability/rogue_talent">rogue talent</Link> (not an advanced talent) of his choice. If he selects a rogue talent that modifies sneak attack, that talent applies to his <em>hidden strikes</em> instead of to sneak attacks, and if it has the limitation of only-one-talent-per-attack (a Primary Sneak Attack Talent), it is treated the same as a Hidden Strike Talent (A stalker vigilante can apply only one Hidden Strike Talent to a given <em>hidden strike,</em> and only when that <em>hidden strike</em> is dealt against a foe that is unaware of the stalker vigilante's presence [or who considers him an ally], unless otherwise noted).</Pair>
</Ability>
<Ability id="vigtalentsniper-sniper-ex-fn3-4" icon={["upgrade"]}>
<Pair single id="vigtalentsniper-sniper-ex-fn3-4"><Link to="/vigtalent/sniper">⮞</Link> Sniper (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.4" id="ability-vigilante_talents-fake-fn-3.4" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level stalker</Pair>
<Pair title="Ability">The vigilante can deal <em>hidden strike</em> damage with ranged attacks at any distance, rather than within 30 feet.</Pair>
</Ability>
<Ability id="vigtalentstalkersense-stalker-sense-ex-fn3-5" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="vigtalentstalkersense-stalker-sense-ex-fn3-5"><Link to="/vigtalent/stalker_sense">⮞</Link> Stalker Sense (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.5" id="ability-vigilante_talents-fake-fn-3.5" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante has a sense for danger. He always acts on the surprise round.</Pair>
<Pair title="At 6th Level">He gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link>.</Pair>
<Pair title="At 12th Level">He gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link>.</Pair>
</Ability>
<Ability id="vigtalenttwistingfear-twisting-fear-ex-fn3-6" icon={["armor-downgrade"]}>
<Pair single id="vigtalenttwistingfear-twisting-fear-ex-fn3-6"><Link to="/vigtalent/twisting_fear">⮞</Link> Twisting Fear (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.6" id="ability-vigilante_talents-fake-fn-3.6" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the vigilante causes an opponent to gain the <Link to="/misc/shaken">shaken</Link>, <Link to="/misc/frightened">frightened</Link>, or <Link to="/misc/panicked">panicked</Link> condition, that opponent takes an amount of nonlethal damage equal to the vigilante's reduced <em>hidden strike</em> damage, as the stress wears upon its body.</Pair>
<Pair title="Special">A creature can't take damage from <em>twisting fear</em> more than once per round. Panicked creatures that take damage from <em>twisting fear</em> are too winded even to scream as they flee in terror.</Pair>
</Ability>
<Ability id="vigtalentupcloseandpersonal-up-close-and-personal-ex-fn8" icon={["mailed-fist"]}>
<Pair single id="vigtalentupcloseandpersonal-up-close-and-personal-ex-fn8"><Link to="/vigtalent/up_close_and_personal">⮞</Link> Up Close and Personal (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-8" id="ability-vigilante_talents-fake-fn-8" data-hash-target to="ability-vigilante_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites">4th-level stalker</Pair>
<Pair title="Swift Action">When the vigilante attempts an <Link to="/skill/acrobatics">Acrobatics</Link> check to move through an opponent's space during a move action, he can attempt a single melee attack against that opponent. If the Acrobatics check succeeds, this attack applies the vigilante's <em>hidden strike</em> damage as if the foe were unaware of the vigilante. Otherwise, the vigilante applies the <em>hidden strike</em> damage he would deal if the target were denied its Dexterity bonus to AC.</Pair>
</Ability>
<h4 id="ability-vigilante_talents-hidden-strike-talents" data-hash-target>Hidden Strike Talents</h4>
<p>A stalker vigilante can apply only one talent below to a given hidden strike, and only when that hidden strike is dealt against a foe that is unaware of the stalker vigilante's presence (or who considers him an ally), unless otherwise noted.</p>
<Ability id="vigtalentfoecollision-foe-collision-ex-fn1-6" icon={["mailed-fist"]}>
<Pair single id="vigtalentfoecollision-foe-collision-ex-fn1-6" flavor="The vigilante can shove one of his foes into another."><Link to="/vigtalent/foe_collision">⮞</Link> Foe Collision (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.6" id="ability-vigilante_talents-fake-fn-1.6" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">When the vigilante deals <em>hidden strike</em> damage to a corporeal foe with a melee attack, he can also deal an amount of nonlethal damage equal to his reduced <em>hidden strike</em> damage to an opponent adjacent to the first (even if the second opponent is out of his reach). The damage is bludgeoning damage, and if the colliding foe has any natural attacks, the damage is also considered magic, evil, or any other type of damage the natural attack deals.</Pair>
<Pair title="Special">Unlike normal vigilante talents that affect <em>hidden strikes,</em> this vigilante talent applies in all cases when the target is denied its Dexterity bonus to AC.</Pair>
</Ability>
<Ability id="vigtalentleaveanopening-leave-an-opening-ex-fn1-7" icon={["armor-downgrade"]}>
<Pair single id="vigtalentleaveanopening-leave-an-opening-ex-fn1-7" flavor={<>The vigilante's <em>hidden strike</em> leaves an unbalancing opening in a foe's defenses, setting up the foe to be attacked again.</>}><Link to="/vigtalent/leave_an_opening">⮞</Link> Leave an Opening (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.7" id="ability-vigilante_talents-fake-fn-1.7" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">At the beginning of the foe's next turn, if the vigilante threatens the foe, the foe provokes an attack of opportunity from the vigilante. Multiple attacks against the same foe don't create multiple attacks of opportunity in the same round (but attacks against several foes can cause each to provoke one attack of opportunity).</Pair>
</Ability>
<Ability id="vigtalentmightyambush-mighty-ambush-ex-fn2-4" icon={["armor-downgrade"]}>
<Pair single id="vigtalentmightyambush-mighty-ambush-ex-fn2-4"><Link to="/vigtalent/mighty_ambush">⮞</Link> Mighty Ambush (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.4" id="ability-vigilante_talents-fake-fn-2.4" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level stalker</Pair>
<Pair title="Ability">Once per round, when the vigilante succeeds at a <em>hidden strike,</em> he can instantly drop the damaged enemy <Link to="/misc/unconscious">unconscious</Link> for 1d4 rounds. A successful Fortitude saving throw negates this effect (DC = 10 + 1/2 the vigilante's class level + the higher of the vigilante's Strength and Dexterity modifiers).</Pair>
<Pair title="Special">Whether or not a creature's saving throw is successful, it can't be affected by that vigilante's <em>mighty ambush</em> again for 24 hours.</Pair>
</Ability>
<Ability id="vigtalentthroatjab-throat-jab-ex-fn3-7" icon={["armor-downgrade"]}>
<Pair single id="vigtalentthroatjab-throat-jab-ex-fn3-7"><Link to="/vigtalent/throat_jab">⮞</Link> Throat Jab (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.7" id="ability-vigilante_talents-fake-fn-3.7" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">4th-level stalker</Pair>
<Pair title="Ability">The vigilante's <em>hidden strike</em> jabs his opponent in the throat, preventing that opponent from speaking until the vigilante's next turn. (If the vigilante uses this ability on the surprise round, it lasts until the end of his first full turn after the surprise round.) This prevents the target from calling out for help, using spells with verbal components, or doing anything else that requires speaking.</Pair>
<Pair title="Special">The target cannot be affected by that vigilante's throat jab again for 24 hours.</Pair>
</Ability>
<h3 id="ability-vigilante_talents-other-talents" data-hash-target>Other Talents</h3>
<p>These talents can do not have an avenger/stalker requirement.</p>
<Ability id="vigtalentanimalpatron-animal-patron-ex-fn9" icon={["stairs-goal"]}>
<Pair single id="vigtalentanimalpatron-animal-patron-ex-fn9"><Link to="/vigtalent/animal_patron">⮞</Link> Animal Patron (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-9" id="ability-vigilante_talents-fake-fn-9" data-hash-target to="ability-vigilante_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante gains the benefits of one <Link to="/class/shifter">minor shifter aspect</Link> for a number of minutes per day equal to 1 + half his vigilante level. He can shift into this minor aspect as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="vigtalentanotherday-another-day-ex-su-fn7-2" icon={["armor-upgrade"]}>
<Pair single id="vigtalentanotherday-another-day-ex-su-fn7-2"><Link to="/vigtalent/another_day">⮞</Link> Another Day (Ex, Su) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-7.2" id="ability-vigilante_talents-fake-fn-7.2" data-hash-target to="ability-vigilante_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">When the vigilante is dropped unconscious due to hit point damage, he automatically <Link to="/misc/stabilize">stabilizes</Link>, but he can also appear to be dead, unless an examining creature succeeds at a Heal check (DC = 20 + the vigilante's class level) or, if using magic such as <Link to="/spell/deathwatch">deathwatch</Link>, a caster level check with the same DC (the ability to affect spells is supernatural; the rest of the ability is extraordinary).</Pair>
<Pair title="Special">The vigilante counts as having received aid and automatically succeeds at the Constitution check to become conscious after 1 hour (unless he has actually died in the meantime).</Pair>
</Ability>
<Ability id="vigtalentaquaticaction-aquatic-action-ex-fn10" icon={["stairs-goal"]}>
<Pair single id="vigtalentaquaticaction-aquatic-action-ex-fn10"><Link to="/vigtalent/aquatic_action">⮞</Link> Aquatic Action (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-10" id="ability-vigilante_talents-fake-fn-10" data-hash-target to="ability-vigilante_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level vigilante</Pair>
<Pair title="Ability">The vigilante uses weapons, natural weapons, and unarmed strikes in aquatic environments as though under the effect of <Link to="/spell/freedom_of_movement">freedom of movement</Link>, including when making melee attacks against targets in the water while the vigilante is on land. The vigilante ignores limitations and penalties on ranged attacks, including thrown weapons, imposed by being underwater for the first 15 feet. (See <Link to="/rule/underwater_combat">Underwater Combat</Link> for more information.)</Pair>
</Ability>
<Ability id="vigtalentarmorskin-armor-skin-ex-fn7-3" icon={["upgrade"]}>
<Pair single id="vigtalentarmorskin-armor-skin-ex-fn7-3"><Link to="/vigtalent/armor_skin">⮞</Link> Armor Skin (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-7.3" id="ability-vigilante_talents-fake-fn-7.3" data-hash-target to="ability-vigilante_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante's armor is like a second skin. He doesn't apply the armor check penalty for light and medium armor on Acrobatics, Escape Artist, or Stealth checks. This penalty applies on other skill checks as normal.</Pair>
<Pair title="At 8th Level">He can move at full speed in medium armor.</Pair>
</Ability>
<Ability id="vigtalentbrutalmaneuver-brutal-maneuver-fn11" icon={["mailed-fist"]}>
<Pair single id="vigtalentbrutalmaneuver-brutal-maneuver-fn11"><Link to="/vigtalent/brutal_maneuver">⮞</Link> Brutal Maneuver <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-11" id="ability-vigilante_talents-fake-fn-11" data-hash-target to="ability-vigilante_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">The first time each round that the vigilante uses a weapon, including a natural attack or unarmed strike, to perform a combat maneuver in place of making an attack (such as by performing a <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver in place of making a melee attack), he can choose to take a -5 penalty on all his attack rolls during the round. If he does so and succeeds at his combat maneuver check, the vigilante deals damage to the target of his combat maneuver as if he had hit that target with a normal hit from his weapon.</Pair>
</Ability>
<Ability id="vigtalentchasemaster-chase-master-ex-fn1-8" icon={["upgrade"]}>
<Pair single id="vigtalentchasemaster-chase-master-ex-fn1-8" flavor="Whether he is the pursuer or the pursued, few can best a vigilante at a chase."><Link to="/vigtalent/chase_master">⮞</Link> Chase Master (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.8" id="ability-vigilante_talents-fake-fn-1.8" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Passive Ability">He receives a bonus on all checks during <Link to="/rule/chases">a chase</Link> equal to <Link to="/misc/half">half</Link> his vigilante level or +4, whichever is greater.</Pair>
</Ability>
<Ability id="vigtalentclosethegap-close-the-gap-ex-fn1-9" icon={["armor-upgrade"]}>
<Pair single id="vigtalentclosethegap-close-the-gap-ex-fn1-9"><Link to="/vigtalent/close_the_gap">⮞</Link> Close the Gap (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.9" id="ability-vigilante_talents-fake-fn-1.9" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">Each round, at the start of his turn, the vigilante can designate one foe within 20 feet that isn't adjacent to him. When he moves, he doesn't provoke attacks of opportunity from that foe as long as he ends his move adjacent to that foe. If he <Link to="/rule/charge">charges</Link> that foe, he does not take the -2 penalty to his AC on any attacks made by the designated foe.</Pair>
</Ability>
<Ability id="vigtalentcombatexpertise-combat-expertise-ex-fn5-2" icon={["stairs-goal"]}>
<Pair single id="vigtalentcombatexpertise-combat-expertise-ex-fn5-2"><Link to="/vigtalent/combat_expertise">⮞</Link> Combat Expertise (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-5.2" id="ability-vigilante_talents-fake-fn-5.2" data-hash-target to="ability-vigilante_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, even if he doesn't meet the prerequisites. If he already has Combat Expertise, he instead gains another feat he qualified for at the level when he chose Combat Expertise.</Pair>
<Pair title="Passive Ability">If the vigilante's Intelligence score is less than 13, it counts as 13 for the purpose of meeting the prerequisites of combat feats.</Pair>
</Ability>
<Ability id="vigtalentconcealedstrike-concealed-strike-ex-fn12" icon={["stairs-goal"]}>
<Pair single id="vigtalentconcealedstrike-concealed-strike-ex-fn12"><Link to="/vigtalent/concealed_strike">⮞</Link> Concealed Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12" id="ability-vigilante_talents-fake-fn-12" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level vigilante</Pair>
<Pair title="Ability">Whenever the vigilante attacks an opponent with a concealed weapon that his target wasn't aware of, he can attempt a Bluff check to <Link to="/rule/feint">feint</Link> that opponent as a <strong className="hl">move action</strong>. If he has the <Link to="/feat/improved_feint">Improved Feint</Link> feat, he attempts this check as a <strong className="hl">free action</strong> instead.</Pair>
</Ability>
<Ability id="vigtalentcunningfeint-cunning-feint-ex-fn1-10" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="vigtalentcunningfeint-cunning-feint-ex-fn1-10"><Link to="/vigtalent/cunning_feint">⮞</Link> Cunning Feint (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.10" id="ability-vigilante_talents-fake-fn-1.10" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante can <Link to="/rule/feint">feint</Link> as a <strong className="hl">move action</strong> or in place of his first attack during a full attack.</Pair>
<Pair title="At 8th Level">When the vigilante successfully feints, the opponent is denied its Dexterity bonus to AC against all attacks until the vigilante's next turn.</Pair>
</Ability>
<Ability id="vigtalentdeceitfultrick-deceitful-trick-fn11-2" icon={["mailed-fist"]}>
<Pair single id="vigtalentdeceitfultrick-deceitful-trick-fn11-2"><Link to="/vigtalent/deceitful_trick">⮞</Link> Deceitful Trick <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-11.2" id="ability-vigilante_talents-fake-fn-11.2" data-hash-target to="ability-vigilante_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link></Pair>
<Pair title="Ability">The vigilante can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver in place of his first attack during a full attack. He can take a -4 penalty on his check in order to inflict two different conditions on his foe if he succeeds at his check. If the vigilante is successful, the target can remove both conditions as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="vigtalentenvironmentalweapon-environmental-weapon-ex-fn1-11" icon={["stairs-goal"]}>
<Pair single id="vigtalentenvironmentalweapon-environmental-weapon-ex-fn1-11"><Link to="/vigtalent/environmental_weapon">⮞</Link> Environmental Weapon (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.11" id="ability-vigilante_talents-fake-fn-1.11" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Choice">When the vigilante gains this talent, he must select one type of terrain from the ranger's list of <Link to="/ability/favored_terrain">favored terrains</Link>.</Pair>
<Pair title="Swift Action"><p>While in the chosen terrain, the vigilante can find an <Link to="/misc/improvised_weapons">improvised weapon</Link> if there are any loose or moveable objects around (subject to the GM's discretion). He doesn't take a penalty for using these improvised weapons.</p>
<p>For example, if the vigilante selected the urban environment, he might attack a foe with a chair, an empty bottle, or even a door.</p>
</Pair>
<Pair title="At 5th Level">The vigilante can select an additional type of terrain.</Pair>
<Pair title="At 10th Level">The vigilante can select an additional type of terrain.</Pair>
<Pair title="At 15th Level">The vigilante can select an additional type of terrain.</Pair>
<Pair title="At 20th Level">The vigilante can select an additional type of terrain.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="vigtalentonewiththewild-one-with-the-wild-ex-fn9-2" icon={["upgrade"]}>
<Pair single id="vigtalentonewiththewild-one-with-the-wild-ex-fn9-2"><Link to="/vigtalent/one_with_the_wild">⮞</Link> One with the Wild (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-9.2" id="ability-vigilante_talents-fake-fn-9.2" data-hash-target to="ability-vigilante_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/vigtalent/environmental_weapon">Environmental weapon</Link></Pair>
<Pair title="Passive Ability">In the same terrain for which he selected <em>environmental weapon,</em> he gains a +4 competence bonus on Stealth, Survival, and Perception checks.</Pair>
</Ability>
<Ability id="vigtalentswampconcoctions-swamp-concoctions-ex-fn13" icon={["stairs-goal"]}>
<Pair single id="vigtalentswampconcoctions-swamp-concoctions-ex-fn13"><Link to="/vigtalent/swamp_concoctions">⮞</Link> Swamp Concoctions (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-13" id="ability-vigilante_talents-fake-fn-13" data-hash-target to="ability-vigilante_talents-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/vigtalent/environmental_weapon">Environmental weapon</Link> (jungle, swamp, or water)</Pair>
<Pair title="Full-Round Action"><p>Twice per day, the vigilante can use the <em>environmental weapon</em> vigilante talent to improvise an alchemical weapon worth no more than 15 gp per vigilante level. This improvised weapon cannot be sold and must be used within 3 rounds before it becomes inert.</p>
<p>The vigilante gains the benefits of the <Link to="/feat/throw_anything">Throw Anything</Link> feat for the purpose of these improvised weapons. This ability cannot create improvised weapons that incorporate special materials unless those materials are also present.</p>
</Pair>
</Ability>
</div>
<Ability id="vigtalentexposeweaknesses-expose-weaknesses-ex-fn1-12" icon={["mailed-fist"]}>
<Pair single id="vigtalentexposeweaknesses-expose-weaknesses-ex-fn1-12"><Link to="/vigtalent/expose_weaknesses">⮞</Link> Expose Weaknesses (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.12" id="ability-vigilante_talents-fake-fn-1.12" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante is able to use sneaky tricks to make it easier to damage a foe, whether it is throwing a bit of fine dust of cold iron over a fey creature or melting a glob of silver onto a lycanthrope's hide. The vigilante can add the ability to reduce a creature's damage reduction or hardness by 10 to the list of options when attempting a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check. This does not stack with itself, and it does not work against creatures with DR/&mdash;.</Pair>
</Ability>
<Ability id="vigtalentfantasticstride-fantastic-stride-ex-fn12-2" icon={["stairs-goal"]}>
<Pair single id="vigtalentfantasticstride-fantastic-stride-ex-fn12-2"><Link to="/vigtalent/fantastic_stride">⮞</Link> Fantastic Stride (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12.2" id="ability-vigilante_talents-fake-fn-12.2" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level vigilante</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/spring_attack">Spring Attack</Link> as a bonus feat, ignoring its prerequisites.</Pair>
<Pair title="At 10th Level">The vigilante can designate one additional creature when he uses Spring Attack; the vigilante's movement this round does not provoke attacks of opportunity from any of the designated secondary creatures.</Pair>
<Pair title="At 14th Level">The vigilante can designate one additional creature when he uses Spring Attack; the vigilante's movement this round does not provoke attacks of opportunity from any of the designated secondary creatures.</Pair>
<Pair title="At 18th Level">The vigilante can designate one additional creature when he uses Spring Attack; the vigilante's movement this round does not provoke attacks of opportunity from any of the designated secondary creatures.</Pair>
</Ability>
<Ability id="vigtalentfavoredmaneuver-favored-maneuver-ex-fn1-13" icon={["stairs-goal"]}>
<Pair single id="vigtalentfavoredmaneuver-favored-maneuver-ex-fn1-13"><Link to="/vigtalent/favored_maneuver">⮞</Link> Favored Maneuver (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.13" id="ability-vigilante_talents-fake-fn-1.13" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante selects one type of <Link to="/rule/combat_maneuver">combat maneuver</Link> to be a <em>favored maneuver.</em> He gains the Improved feat corresponding to that combat maneuver (if one exists). He gains a +2 circumstance bonus on combat maneuver checks with that combat maneuver against a foe that is unaware of the vigilante's presence at the start of his combat maneuver.</Pair>
<Pair title="Special">A vigilante can select this talent more than once. Each time, it applies to a different combat maneuver.</Pair>
</Ability>
<Ability id="vigtalentgatorwrangle-gator-wrangle-ex-fn10-2" icon={["armor-upgrade","upgrade"]}>
<Pair single id="vigtalentgatorwrangle-gator-wrangle-ex-fn10-2"><Link to="/vigtalent/gator_wrangle">⮞</Link> Gator Wrangle (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-10.2" id="ability-vigilante_talents-fake-fn-10.2" data-hash-target to="ability-vigilante_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains a +8 bonus to his CMD against grapple combat maneuvers when using the <Link to="/umr/grab">grab</Link> ability, and he halves all damage from <Link to="/umr/constrict">constrict</Link> attacks.</Pair>
<Pair title="Passive Ability">When attacking a creature that is grappling him, an avenger vigilante deals an additional amount of damage equal to half his vigilante level.</Pair>
</Ability>
<Ability id="vigtalentinspiredvigilante-inspired-vigilante-ex-fn1-14" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="vigtalentinspiredvigilante-inspired-vigilante-ex-fn1-14" flavor="The vigilante's powers of deduction are far beyond the norm."><Link to="/vigtalent/inspired_vigilante">⮞</Link> Inspired Vigilante (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-1.14" id="ability-vigilante_talents-fake-fn-1.14" data-hash-target to="ability-vigilante_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">This ability functions similarly to the <Link to="/class/investigator">investigator's</Link> <em>inspiration</em> ability, but the vigilante's <em>inspiration pool</em> is equal to his class level (do not add his Intelligence modifier), the vigilante can never use this ability without expending a use of <em>inspiration,</em> and it doesn't count as <em>inspiration</em> for any effects that interact with or require the <em>inspiration</em> class feature.</Pair>
</Ability>
<Ability id="inspiration-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="inspiration-ex" flavor="Relevant text from the investigator class ability.">Inspiration (Ex)</Pair>
<Pair title="Ability">You have an inspiration pool equal to <Link to="/misc/half">half</Link> your level. Your inspiration pool refreshes each day, typically after you get a restful night's sleep.</Pair>
<Pair title="Free Action">You can expend one use of inspiration from your pool to add 1d6 to the result of a check, including any on which you take 10 or 20. This choice is made after the check is rolled and before the results are revealed.</Pair>
<Pair title="Usage">You can only use inspiration once per check or roll.</Pair>
<Pair title="Special">Using inspiration on attack rolls and saving throws costs two uses of inspiration each time. In the case of saving throws, using inspiration is an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="vigtalentinstantplan-instant-plan-ex-fn14" icon={["armor-upgrade","shield-reflect","upgrade"]}>
<Pair single id="vigtalentinstantplan-instant-plan-ex-fn14" flavor="The vigilante can quickly manage a situation that seems to be spiraling out of control."><Link to="/vigtalent/instant_plan">⮞</Link> Instant Plan (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-14" id="ability-vigilante_talents-fake-fn-14" data-hash-target to="ability-vigilante_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, the vigilante can state a plan of action. All allies within 30 feet that can hear him gain a +2 morale bonus on saving throws against fear effects and are immune to being demoralized. They also gain a +1 morale bonus on skill checks or combat maneuver checks of the vigilante's choice. The benefits last for 1 round per vigilante level.</Pair>
</Ability>
<Ability id="vigtalentleapandbound-leap-and-bound-ex-fn4-2" icon={["upgrade","stairs-goal"]}>
<Pair single id="vigtalentleapandbound-leap-and-bound-ex-fn4-2"><Link to="/vigtalent/leap_and_bound">⮞</Link> Leap and Bound (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-4.2" id="ability-vigilante_talents-fake-fn-4.2" data-hash-target to="ability-vigilante_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level vigilante</Pair>
<Pair title="Ability"><p>A vigilante with this talent adds his Strength bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks in addition to his Dexterity modifier. He is always treated as having a running start when jumping, and his high jumps are treated as long jumps when determining the DC.</p>
<p>When the vigilante jumps, he does not fall until the end of his turn, allowing him to attack or perform other actions in midair.</p>
<p>If the vigilante grapples a creature capable of bearing his weight, he does not fall, instead remaining adjacent to the creature as it moves.</p>
</Pair>
</Ability>
<Ability id="vigtalentlethalgrace-lethal-grace-ex-fn2-5" icon={["stairs-goal","upgrade"]}>
<Pair single id="vigtalentlethalgrace-lethal-grace-ex-fn2-5"><Link to="/vigtalent/lethal_grace">⮞</Link> Lethal Grace (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.5" id="ability-vigilante_talents-fake-fn-2.5" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante combines strength and speed into incredibly deadly attacks. He gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat, and if he already has the Weapon Finesse feat, he can immediately swap it for another feat for which he qualified at the level he chose Weapon Finesse.</Pair>
<Pair title="Passive Ability">When using Weapon Finesse to make a melee attack using his Dexterity bonus on attack rolls and his Strength bonus on damage rolls, he also adds half his vigilante level on damage rolls. This bonus damage is not reduced or increased if the vigilante is wielding a weapon two-handed or in an off-hand.</Pair>
</Ability>
<Ability id="vigtalentlivingshield-living-shield-ex-fn2-6" icon={["armor-upgrade"]}>
<Pair single id="vigtalentlivingshield-living-shield-ex-fn2-6"><Link to="/vigtalent/living_shield">⮞</Link> Living Shield (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.6" id="ability-vigilante_talents-fake-fn-2.6" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Immediate Action">Whenever the vigilante is grappling a creature and is targeted by an attack, he can attempt a combat maneuver check against the target of his <Link to="/rule/grapple">grapple</Link> (this combat maneuver check doesn't count as a grapple combat maneuver check). If he succeeds, the creature he is grappling becomes the new target of the attack. If the check fails, the creature escapes the grapple and the vigilante is the target of the attack as normal.</Pair>
<Pair title="Special">This ability must be used after the attack is declared against the vigilante, but before the attack is made and the results revealed.</Pair>
</Ability>
<Ability id="vigtalentmagicalfamiliarity-magical-familiarity-sp-fn6-2" icon={["magic-swirl"]}>
<Pair single id="vigtalentmagicalfamiliarity-magical-familiarity-sp-fn6-2" flavor="The vigilante taps into a past life's arcane secrets."><Link to="/vigtalent/magical_familiarity">⮞</Link> Magical Familiarity (Sp) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-6.2" id="ability-vigilante_talents-fake-fn-6.2" data-hash-target to="ability-vigilante_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 10+</Pair>
<Pair title="Ability">He selects a 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. The vigilante can cast the chosen spell three times per day as a spell-like ability, using his vigilante level as his caster level.</Pair>
<Pair title="At 6th Level">He chooses a second 0-level spell that he can also use three times per day as a spell-like ability.</Pair>
<Pair title="At 12th Level">In addition to these 0-level spells, he chooses a 1st-level spell that he can cast once per day as a spell-like ability.</Pair>
<Pair title="At 18th Level">He can cast his 1st-level spell three times per day and his 0-level spells at will.</Pair>
</Ability>
<Ability id="vigtalentmalleableflesh-malleable-flesh-su-fn4-3" icon={["stairs-goal","magic-swirl","broken-shield"]}>
<Pair single id="vigtalentmalleableflesh-malleable-flesh-su-fn4-3" flavor="Whether through mutation or alchemy, some vigilantes have flesh that is as moldable as clay and as fluid as ink."><Link to="/vigtalent/malleable_flesh">⮞</Link> Malleable Flesh (Su) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-4.3" id="ability-vigilante_talents-fake-fn-4.3" data-hash-target to="ability-vigilante_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A vigilante with this talent gains the <Link to="/subtype/shapechanger">shapechanger</Link> subtype and the <Link to="/umr/compression">compression</Link> universal monster rule. In addition, the vigilante can alter his appearance as <Link to="/spell/disguise_self">disguise self</Link>, except that the changes are physical rather than illusory. However, aspects of the vigilante's aesthetic persist in all forms, halving the bonus on Disguise checks gained from this effect and from <em>seamless guise.</em></Pair>
<Pair title="At 12th Level">The vigilante can pass through narrow openings, even mere cracks, along with any item he wears or carries (to a maximum of his light load).</Pair>
</Ability>
<Ability id="vigtalentminormagic-minor-magic-sp-fn12-3" icon={["magic-swirl"]}>
<Pair single id="vigtalentminormagic-minor-magic-sp-fn12-3"><Link to="/vigtalent/minor_magic">⮞</Link> Minor Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12.3" id="ability-vigilante_talents-fake-fn-12.3" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Choice">A vigilante with this talent selects one of the following spells lists: <Link to="/main/spells_bard">bard</Link>, <Link to="/main/spells_cleric">cleric</Link>, <Link to="/main/spells_druid">druid</Link>, <Link to="/main/spells_psychic">psychic</Link>, <Link to="/main/spells_shaman">shaman</Link>, <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link>, or <Link to="/main/spells_witch">witch</Link>. Once this decision is made, the selection cannot be changed.</Pair>
<Pair title="Ability">The vigilante gains the ability to cast a 0-level spell from the selected spell list. This spell can be cast two times per day as a spell-like ability. The caster level for this ability is equal to the vigilante's level. The save DC for this spell is equal to 10 + the vigilante's Intelligence modifier (for psychic, sorcerer/wizard, and witch spells), Wisdom (for cleric, druid, and shaman spells), or Charisma (for bard spells).</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="vigtalentmajormagic-major-magic-sp-fn12-4" icon={["magic-swirl"]}>
<Pair single id="vigtalentmajormagic-major-magic-sp-fn12-4"><Link to="/vigtalent/major_magic">⮞</Link> Major Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12.4" id="ability-vigilante_talents-fake-fn-12.4" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">4th-level vigilante, <Link to="/vigtalent/minor_magic">minor magic</Link>, a score of at least 11 in the appropriate ability</Pair>
<Pair title="Ability">A vigilante with this talent gains the ability to cast a 1st-level spell drawn from the same spell list as the <em>minor magic</em> talent. The vigilante can cast this spell as a spell-like ability a number of times a day equal to <Link to="/misc/one_fourth">one-fourth</Link> of his vigilante level. The caster level for this ability is equal to the vigilante's level. The save DC for this spell is equal to 10 + the vigilante's Intelligence modifier (for psychic, sorcerer/wizard, and witch spells), Wisdom (for cleric, druid, and shaman spells), or Charisma (for bard spells).</Pair>
</Ability>
</div>
<Ability id="vigtalentmockery-mockery-ex-fn12-5" icon={["upgrade"]}>
<Pair single id="vigtalentmockery-mockery-ex-fn12-5"><Link to="/vigtalent/mockery">⮞</Link> Mockery (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12.5" id="ability-vigilante_talents-fake-fn-12.5" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/antagonize">Antagonize</Link> as a bonus feat. He can target a creature with the Intimidate version of Antagonize twice each day, rather than just once.</Pair>
<Pair title="At 12th Level">The effects of the Intimidate version of Antagonize last a number of rounds equal to the vigilante's Charisma modifier (minimum 1).</Pair>
</Ability>
<Ability id="vigtalentmorphicweaponry-morphic-weaponry-ex-fn4-4" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="vigtalentmorphicweaponry-morphic-weaponry-ex-fn4-4"><Link to="/vigtalent/morphic_weaponry">⮞</Link> Morphic Weaponry (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-4.4" id="ability-vigilante_talents-fake-fn-4.4" data-hash-target to="ability-vigilante_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">The <Link to="/subtype/shapechanger">shapechanger</Link> subtype</Pair>
<Pair title="Ability">The vigilante can shape his body into weaponry. This acts as the <Link to="/arc-shifter/oozemorph">oozemorph</Link> shifter's <em>morphic weaponry</em> ability, treating the vigilante's level as his shifter level.</Pair>
</Ability>
<Ability id="morphic-weaponry-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="morphic-weaponry-ex" flavor="Text from the oozemorph ability.">Morphic Weaponry (Ex)</Pair>
<Pair title="Move-Equivalent Action">An oozemorph can form two primary natural attacks that each deal 1d6 points of bludgeoning, piercing, or slashing damage, chosen by the oozemorph when she forms them.</Pair>
<Pair title="Swift Action">An oozemorph can change the damage type of any number of her natural weapons.</Pair>
<Pair title="At 6th Level">An oozemorph gains an additional primary natural attack.</Pair>
<Pair title="At 15th Level">An oozemorph gains an additional primary natural attack.</Pair>
<Pair title="Special">The total number of natural attacks an oozemorph has at any given time includes those gained via her current form. For example, an 8th-level oozemorph who has taken the form of a wolf with <em>beast shape I</em> has a bite attack as part of that form; she can create only two additional natural attacks via <em>morphic weaponry,</em> for a total of three attacks available to her at that level. If the oozemorph later reverts to a humanoid form with no natural weapons, she can instead create three <em>morphic weapons.</em></Pair>
</Ability>
<Ability id="vigtalentperfectfall-perfect-fall-ex-fn2-7" icon={["armor-upgrade"]}>
<Pair single id="vigtalentperfectfall-perfect-fall-ex-fn2-7"><Link to="/vigtalent/perfect_fall">⮞</Link> Perfect Fall (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.7" id="ability-vigilante_talents-fake-fn-2.7" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">As long as there is a wall or another surface within arm's reach, the vigilante never takes falling damage. Even if no surface is available, he takes only half damage from falling and lands on his feet.</Pair>
</Ability>
<Ability id="vigtalentperfectvulnerability-perfect-vulnerability-ex-fn2-8" icon={["upgrade"]}>
<Pair single id="vigtalentperfectvulnerability-perfect-vulnerability-ex-fn2-8"><Link to="/vigtalent/perfect_vulnerability">⮞</Link> Perfect Vulnerability (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.8" id="ability-vigilante_talents-fake-fn-2.8" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level vigilante</Pair>
<Pair title="Standard Action">The vigilante can cleverly strike his foe where that foe is weakest. This attack targets the foe's touch AC, and the foe is denied her Dexterity bonus against the attack.</Pair>
<Pair title="Special">Once a foe has been the target of <em>perfect vulnerability,</em> she can't be the target of the same vigilante's perfect vulnerability for 24 hours.</Pair>
</Ability>
<Ability id="vigtalentpoisoner-poisoner-ex-fn5-3" icon={["stairs-goal"]}>
<Pair single id="vigtalentpoisoner-poisoner-ex-fn5-3"><Link to="/vigtalent/poisoner">⮞</Link> Poisoner (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-5.3" id="ability-vigilante_talents-fake-fn-5.3" data-hash-target to="ability-vigilante_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains the alchemist's <Link to="/ability/poison_use">poison use</Link> class feature.</Pair>
<Pair title="At 6th Level">When he has 5 doses of a single kind of poison, he can synthesize a dose of that poison once per day at no cost. This process takes 1 minute. It doesn't expend the 5 doses of poison, but the doses must be in the vigilante's possession to perform the synthesis. The poison produced requires careful storage and special skill to use. It becomes inert if it leaves the vigilante's possession and can't be sold. The vigilante can maintain only 1 dose of synthesized poison for every 5 doses of that poison in his possession.</Pair>
</Ability>
<Ability id="vigtalentpullintotheshadows-pull-into-the-shadows-ex-fn2-9" icon={["mailed-fist","upgrade","armor-upgrade"]}>
<Pair single id="vigtalentpullintotheshadows-pull-into-the-shadows-ex-fn2-9"><Link to="/vigtalent/pull_into_the_shadows">⮞</Link> Pull into the Shadows (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.9" id="ability-vigilante_talents-fake-fn-2.9" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Full-Round Action">The vigilante can move up to his speed toward an opponent who is unaware of his presence (or who considers him an ally) and make a single attack against that opponent. If the attack hits, he can attempt a <Link to="/rule/drag">drag</Link> combat maneuver against that enemy with a +4 bonus and without provoking an attack of opportunity. If the drag succeeds, the vigilante doesn't need to have enough movement remaining to move with the enemy.</Pair>
<Pair title="Special">The vigilante can't use this ability on a true ally or a willing target.</Pair>
</Ability>
<Ability id="vigtalentracialparagon-racial-paragon-fn11-3" icon={["stairs-goal"]}>
<Pair single id="vigtalentracialparagon-racial-paragon-fn11-3"><Link to="/vigtalent/racial_paragon">⮞</Link> Racial Paragon <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-11.3" id="ability-vigilante_talents-fake-fn-11.3" data-hash-target to="ability-vigilante_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Usage">3 + half his vigilante level times/day (minimum 4)<ByLevelPop levels={[[1,4],[4,5],[6,6],[8,7],[10,8],[12,9],[14,10],[16,11],[18,12],[20,13]]} unit="time" postText="/day" /></Pair>
<Pair title="Move-Equivalent Action"><p>The vigilante can gain the benefit of a feat with a racial prerequisite he meets but doesn't have. This effect lasts for 1 minute. The vigilante must meet all the feat's prerequisites. The vigilante can use this ability again before the duration expires to replace a previous racial feat with another choice.</p>
<p>If a feat temporarily gained in this way has a daily use limitation, any uses of that feat while using this ability count toward that feat's daily limit.</p>
</Pair>
<Pair title="Special"><p>This vigilante talent can be selected multiple times. Each time it is selected after the first, the vigilante can use this ability to gain the benefits of one additional racial feat at the same time, or to reduce the action required to activate this talent by one step (a move action becomes a <strong className="hl">swift action</strong>, a swift action becomes a <strong className="hl">free action</strong>, and a free action becomes an <strong className="hl">immediate action</strong>).</p>
<p>If the vigilante chooses to gain the benefits of multiple feats, the feats selected must share the same racial prerequisite. He can use one of these feats to meet a prerequisite of a second feat; doing so means he cannot replace a feat currently fulfilling another's prerequisite without also replacing those feats that require it. Each individual feat selected counts toward his daily uses of this ability.</p>
</Pair>
</Ability>
<Ability id="vigtalentreturningweapon-returning-weapon-ex-fn2-10" icon={["bowman"]}>
<Pair single id="vigtalentreturningweapon-returning-weapon-ex-fn2-10" flavor="The vigilante has a signature type of thrown weapon that returns to him."><Link to="/vigtalent/returning_weapon">⮞</Link> Returning Weapon (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.10" id="ability-vigilante_talents-fake-fn-2.10" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Choice">Choose a type of thrown weapon, such as throwing axes.</Pair>
<Pair title="Ability">Whenever the vigilante uses the chosen type of weapon, it automatically returns as if it had the <Link to="/magic-enh/returning">returning</Link> property.</Pair>
<Pair title="At 14th Level">If the vigilante chose a type of thrown weapon that is treated as ammunition, such as <Link to="/eq-weapon/shuriken">shuriken</Link>, and buys a set of 50 magic ammunition of that type, he automatically replenishes them at no cost and never runs out. If he chose a non-ammunition thrown weapon instead, he can apply the magical properties of the first weapon he throws in a round to any nonmagical thrown weapons of that type he throws that round. This allows him to make a full attack with the benefits of his magical thrown weapon, even though it only returns next round.</Pair>
</Ability>
<Ability id="vigtalentrooftopinfiltrator-rooftop-infiltrator-ex-fn2-11" icon={["stairs-goal"]}>
<Pair single id="vigtalentrooftopinfiltrator-rooftop-infiltrator-ex-fn2-11"><Link to="/vigtalent/rooftop_infiltrator">⮞</Link> Rooftop Infiltrator (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.11" id="ability-vigilante_talents-fake-fn-2.11" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains a climb speed equal to half his base speed, which increases to his full base speed when climbing a rope.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="vigtalentmonkeyspaws-monkeys-paws-ex-fn9-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="vigtalentmonkeyspaws-monkeys-paws-ex-fn9-3"><Link to="/vigtalent/monkeys_paws">⮞</Link> Monkey's Paws (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-9.3" id="ability-vigilante_talents-fake-fn-9.3" data-hash-target to="ability-vigilante_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/vigtalent/rooftop_infiltrator">rooftop infiltrator</Link></Pair>
<Pair title="Ability">The vigilante gains a climb speed equal to his base speed and a +4 competence bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks.</Pair>
</Ability>
</div>
<Ability id="vigtalentshacklesmash-shackle-smash-ex-fn14-2" icon={["upgrade"]}>
<Pair single id="vigtalentshacklesmash-shackle-smash-ex-fn14-2"><Link to="/vigtalent/shackle_smash">⮞</Link> Shackle Smash (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-14.2" id="ability-vigilante_talents-fake-fn-14.2" data-hash-target to="ability-vigilante_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Perhaps trained to remove or destroy restraints from slaves and prisoners by the Twilight Talons or <Link to="/rule/bellflower_network">Bellflower Network</Link>, a vigilante with this talent can choose to make no more noise than people talking when he attempts a <Link to="/rule/sunder">sunder</Link> combat maneuver check or attempts a Strength check to break an object. He ignores half an object's hardness when attempting sunder combat maneuver checks and when attacking nonmagical objects.</Pair>
</Ability>
<Ability id="vigtalentshadowssight-shadows-sight-ex-fn2-12" icon={["stairs-goal"]}>
<Pair single id="vigtalentshadowssight-shadows-sight-ex-fn2-12"><Link to="/vigtalent/shadows_sight">⮞</Link> Shadow's Sight (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.12" id="ability-vigilante_talents-fake-fn-2.12" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains low-light vision and darkvision 60 feet. If he already had darkvision, its range increases by 30 feet.</Pair>
</Ability>
<Ability id="vigtalentshadowsspeed-shadows-speed-ex-fn2-13" icon={["upgrade"]}>
<Pair single id="vigtalentshadowsspeed-shadows-speed-ex-fn2-13"><Link to="/vigtalent/shadows_speed">⮞</Link> Shadow's Speed (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-2.13" id="ability-vigilante_talents-fake-fn-2.13" data-hash-target to="ability-vigilante_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante's base speed increases by 10 feet.</Pair>
<Pair title="At 10th Level">It increases by an additional 10 feet.</Pair>
</Ability>
<Ability id="vigtalentshieldofblades-shield-of-blades-ex-fn3-8" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="vigtalentshieldofblades-shield-of-blades-ex-fn3-8" flavor="The vigilante's wild attacks allow him to block his foes' counterattacks."><Link to="/vigtalent/shield_of_blades">⮞</Link> Shield of Blades (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.8" id="ability-vigilante_talents-fake-fn-3.8" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>He gains <Link to="/feat/power_attack">Power Attack</Link> as a bonus feat. If he already has the Power Attack feat, he can immediately swap it for another feat for which he qualified at the level he chose Power Attack.</p>
<p>When he takes an attack or full attack action, if he uses Power Attack on every attack to make melee attacks that use his Strength bonus on attack rolls, he gains a shield bonus to his AC until his next turn equal to his penalty on attack rolls from Power Attack. This bonus applies only if he actually takes that penalty on at least one of the attack rolls.</p>
</Pair>
</Ability>
<Ability id="vigtalentshieldoffury-shield-of-fury-ex-fn3-9" icon={["stairs-goal"]}>
<Pair single id="vigtalentshieldoffury-shield-of-fury-ex-fn3-9"><Link to="/vigtalent/shield_of_fury">⮞</Link> Shield of Fury (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.9" id="ability-vigilante_talents-fake-fn-3.9" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link> as a bonus feat. If he already has the Improved Shield Bash feat, he can immediately swap it for another feat for which he qualified at the level he chose Improved Shield Bash.</Pair>
<Pair title="At 6th Level">He is treated as if he has the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat as long as one of the weapons used is a shield. This allows him to take feats that require Two-Weapon Fighting as a prerequisite without meeting the Two-Weapon Fighting or Dexterity prerequisites, but these feats only apply while he is wielding a shield as one of his weapons (unless he takes Two-Weapon Fighting as normal, in which case this restriction is lifted).</Pair>
</Ability>
<Ability id="vigtalentsignaturearrows-signature-arrows-ex-fn5-4" icon={["upgrade","magic-swirl"]}>
<Pair single id="vigtalentsignaturearrows-signature-arrows-ex-fn5-4"><Link to="/vigtalent/signature_arrows">⮞</Link> Signature Arrows (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-5.4" id="ability-vigilante_talents-fake-fn-5.4" data-hash-target to="ability-vigilante_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">14th-level vigilante</Pair>
<Pair title="Choice">The vigilante must select one type of bow or crossbow (such as <Link to="/eq-weapon/shortbow">shortbow</Link> or <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link>) when he selects this talent.</Pair>
<Pair title="Ability">After the first time the vigilante buys a set of 50 pieces of magic ammunition intended for the selected type of bow or crossbow, he can pay the construction cost instead of the purchase price for additional ammunition with identical magical effects for the same weapon, even if he could not normally craft magic ammunition.</Pair>
<Pair title="Special">This benefit applies only to the first type of magic ammunition that the vigilante buys 50 pieces of for the designated weapon. The vigilante can take this talent more than once; each time he takes it, he can purchase and gain this benefit with either a specific type of magic ammunition for a different type of bow or crossbow or a different type of magic ammunition for the original weapon.</Pair>
</Ability>
<Ability id="vigtalentsilentdispatch-silent-dispatch-ex-fn3-10" icon={["stairs-goal"]}>
<Pair single id="vigtalentsilentdispatch-silent-dispatch-ex-fn3-10"><Link to="/vigtalent/silent_dispatch">⮞</Link> Silent Dispatch (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.10" id="ability-vigilante_talents-fake-fn-3.10" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">When the vigilante ambushes an enemy or enemies unaware of his presence, he can attempt a Stealth check at a -5 penalty. The result indicates the DC of Perception checks to hear the vigilante's attacks until an opponent's first action, when the DC returns to the normal -10 for hearing battle. Other enemies present can still see the attack; this talent only prevents the sounds of battle from alerting others.</Pair>
</Ability>
<Ability id="vigtalentsteelyresolve-steely-resolve-ex-fn6-3" icon={["stairs-goal"]}>
<Pair single id="vigtalentsteelyresolve-steely-resolve-ex-fn6-3"><Link to="/vigtalent/steely_resolve">⮞</Link> Steely Resolve (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-6.3" id="ability-vigilante_talents-fake-fn-6.3" data-hash-target to="ability-vigilante_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Immediate Action">Three times per day, when the vigilante fails a Will saving throw against a mind-affecting effect, the vigilante can delay the effect's onset for a number of rounds equal to <Link to="/misc/half">half</Link> his vigilante level, after which the vigilante is affected as normal by the entire effect. Rounds spent delaying the effect do not count toward the effect's duration.</Pair>
</Ability>
<Ability id="vigtalentstriketheunseen-strike-the-unseen-ex-fn3-11" icon={["stairs-goal","upgrade"]}>
<Pair single id="vigtalentstriketheunseen-strike-the-unseen-ex-fn3-11"><Link to="/vigtalent/strike_the_unseen">⮞</Link> Strike the Unseen (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.11" id="ability-vigilante_talents-fake-fn-3.11" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat. He can also deal <em>hidden strike</em> damage against targets with total concealment.</Pair>
<Pair title="At 10th Level">He gains <Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link> as a bonus feat and can deal all types of <Link to="/misc/precision_damage">precision damage</Link> against targets with <Link to="/rule/concealment">concealment</Link> or total concealment.</Pair>
<Pair title="At 16th Level">He gains <Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link> as a bonus feat.</Pair>
<Pair title="Special">The vigilante does not have to meet the prerequisites for either Improved Blind-Fight or Greater Blind-Fight to gain these feats with this talent.</Pair>
</Ability>
<Ability id="vigtalentsurefooted-sure-footed-ex-fn3-12" icon={["stairs-goal"]}>
<Pair single id="vigtalentsurefooted-sure-footed-ex-fn3-12"><Link to="/vigtalent/sure_footed">⮞</Link> Sure-Footed (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.12" id="ability-vigilante_talents-fake-fn-3.12" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante can move at full speed while using the Stealth and Acrobatics skills without penalty.</Pair>
<Pair title="At 8th Level">He can move at full speed across <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="vigtalentsurprisestrike-surprise-strike-ex-fn3-13" icon={["upgrade"]}>
<Pair single id="vigtalentsurprisestrike-surprise-strike-ex-fn3-13" flavor="The vigilante gains a greater advantage when his foe is unable to defend herself."><Link to="/vigtalent/surprise_strike">⮞</Link> Surprise Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.13" id="ability-vigilante_talents-fake-fn-3.13" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Whenever he makes an attack against a foe that is denied her Dexterity bonus to AC, he gains a +1 bonus on his attack roll.</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 16th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="vigtalenttakeemalive-take-em-alive-ex-fn12-6" icon={["upgrade"]}>
<Pair single id="vigtalenttakeemalive-take-em-alive-ex-fn12-6"><Link to="/vigtalent/take_em_alive">⮞</Link> Take 'Em Alive (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12.6" id="ability-vigilante_talents-fake-fn-12.6" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante doesn't take the usual -4 penalty on attack rolls made to deal nonlethal damage with weapons that normally deal lethal damage. In addition, the vigilante gains a +1 bonus on all attack and damage rolls for attacks that deal only nonlethal damage and have no secondary effects (such as poison).</Pair>
<Pair title="At 5th Level">This bonus becomes +2.</Pair>
<Pair title="At 8th Level">This bonus increases to +3.</Pair>
<Pair title="At 11th Level">This bonus becomes +4.</Pair>
<Pair title="At 14th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="vigtalentteamplayer-team-player-ex-fn12-7-fn15" icon={["stairs-goal"]}>
<Pair single id="vigtalentteamplayer-team-player-ex-fn12-7-fn15"><Link to="/vigtalent/team_player">⮞</Link> Team Player (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-12.7" id="ability-vigilante_talents-fake-fn-12.7" data-hash-target to="ability-vigilante_talents-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-15" id="ability-vigilante_talents-fake-fn-15" data-hash-target to="ability-vigilante_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/swift_aid">Swift Aid</Link> as a bonus feat, ignoring its prerequisites. Additionally, the vigilante can use the feat as a <strong className="hl">standard action</strong>, in which case it applies to every ally adjacent to the vigilante.</Pair>
<Pair title="At 10th Level">The vigilante can increase the bonus provided to one ally by this feat to +2 by using the <Link to="/rule/aid_another_2">aid another</Link> action as a <strong className="hl">move action</strong> rather than as a swift action.</Pair>
</Ability>
<Ability id="vigtalenttigersclaws-tigers-claws-ex-fn9-4" icon={["mailed-fist"]}>
<Pair single id="vigtalenttigersclaws-tigers-claws-ex-fn9-4"><Link to="/vigtalent/tigers_claws">⮞</Link> Tiger's Claws (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-9.4" id="ability-vigilante_talents-fake-fn-9.4" data-hash-target to="ability-vigilante_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains the ability to grow claws similar to a <Link to="/class/shifter">shifter's</Link>. These claws are <Link to="/umr/natural_weapons">natural weapons</Link> that can be extended at will and deal 1d4 points of piercing and slashing damage (1d3 if the vigilante is Small).</Pair>
<Pair title="At 11th Level">The damage increases to 1d6 (1d4 if Small).</Pair>
</Ability>
<Ability id="vigtalentturnabout-turnabout-ex-fn14-3" icon={["mailed-fist"]}>
<Pair single id="vigtalentturnabout-turnabout-ex-fn14-3" flavor="A vigilante with this talent can capitalize on any opportunities in combat."><Link to="/vigtalent/turnabout">⮞</Link> Turnabout (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-14.3" id="ability-vigilante_talents-fake-fn-14.3" data-hash-target to="ability-vigilante_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Whenever a foe provokes an attack of opportunity from the vigilante by attacking or casting a spell, the vigilante can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check in place of the attack of opportunity. If he succeeds at the check, in addition to the usual options, the vigilante can redirect the attack or spell to a new target or area the foe could have chosen.</Pair>
</Ability>
<Ability id="vigtalentunexpectedstrike-unexpected-strike-ex-fn3-14" icon={["stairs-goal"]}>
<Pair single id="vigtalentunexpectedstrike-unexpected-strike-ex-fn3-14"><Link to="/vigtalent/unexpected_strike">⮞</Link> Unexpected Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-3.14" id="ability-vigilante_talents-fake-fn-3.14" data-hash-target to="ability-vigilante_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/quick_draw">Quick Draw</Link> as a bonus feat.</Pair>
<Pair title="At 8th Level">He can draw hidden weapons as a <strong className="hl">swift action</strong> (instead of a move action).</Pair>
</Ability>
<Ability id="vigtalentvigilantesreflexes-vigilantes-reflexes-ex-fn16" icon={["stairs-goal"]}>
<Pair single id="vigtalentvigilantesreflexes-vigilantes-reflexes-ex-fn16"><Link to="/vigtalent/vigilantes_reflexes">⮞</Link> Vigilante's Reflexes (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-16" id="ability-vigilante_talents-fake-fn-16" data-hash-target to="ability-vigilante_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/combat_reflexes">Combat Reflexes</Link> as a bonus feat. If he already has the Combat Reflexes feat, he instead gains another feat he qualified for at the level when he chose Combat Reflexes.</Pair>
<Pair title="At 8th Level">The number of additional attacks of opportunity per round the vigilante can make increases by 1, regardless of the vigilante's Dexterity bonus.</Pair>
<Pair title="At 16th Level">It increases by 1 again.</Pair>
</Ability>
<Ability id="vigtalentvitalpunishment-vital-punishment-ex-fn8-2" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="vigtalentvitalpunishment-vital-punishment-ex-fn8-2"><Link to="/vigtalent/vital_punishment">⮞</Link> Vital Punishment (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-8.2" id="ability-vigilante_talents-fake-fn-8.2" data-hash-target to="ability-vigilante_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level vigilante</Pair>
<Pair title="Ability">Once per round, before he makes an attack of opportunity, he can declare it to be a <em>vital punishment.</em> If the attack hits, the vigilante can apply the Vital Strike feat. The vigilante can apply the <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link> or <Link to="/feat/greater_vital_strike">Greater Vital Strike</Link> feat as his <em>vital punishment</em> instead if he later gains those feats.</Pair>
</Ability>
<Ability id="vigtalentvolatilearrows-volatile-arrows-ex-fn4-5" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="vigtalentvolatilearrows-volatile-arrows-ex-fn4-5"><Link to="/vigtalent/volatile_arrows">⮞</Link> Volatile Arrows (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-4.5" id="ability-vigilante_talents-fake-fn-4.5" data-hash-target to="ability-vigilante_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Usage">3 + Intelligence modifier times/day</Pair>
<Pair title="Ability">A vigilante with this talent gains the ability to attach an <Link to="/class/alchemist">alchemist</Link> bomb to a ranged attack he makes with a bow or crossbow as part of firing the attack. If the attack hits, it deals an additional amount of damage equal to that of an alchemist bomb, using the vigilante's level as his alchemist level to determine the bomb's damage.</Pair>
<Pair title="Special">The vigilante can takes this talent multiple times. Each time he does, he can use the ability one additional time per day and he gains one <Link to="/ability/discovery">alchemist discovery</Link> that can modify bombs, treating his vigilante level as his alchemist level for any prerequisites. He can apply these discoveries to his bombs as normal.</Pair>
</Ability>
<Ability id="bomb-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="bomb-su" flavor="Relevant text from the alchemist class ability.">Bomb (Su)</Pair>
<Pair title="Standard Action">On a direct hit, your bomb inflicts 1d6 points of fire damage + additional damage equal to your Intelligence modifier (this bonus damage is not multiplied on a critical hit or by using feats such as <Link to="/feat/vital_strike">Vital Strike</Link>).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 3rd Level">The base bomb damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The base bomb damage becomes 3d6.</Pair>
<Pair title="At 7th Level">The base bomb damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The base bomb damage becomes 5d6.</Pair>
<Pair title="At 11th Level">The base bomb damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The base bomb damage becomes 7d6.</Pair>
<Pair title="At 15th Level">The base bomb damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The base bomb damage becomes 9d6.</Pair>
<Pair title="At 19th Level">The base bomb damage becomes 10d6.</Pair>
</Ability>
<Ability id="vigtalentvortexsplash-vortex-splash-ex-fn13-2" icon={["mailed-fist"]}>
<Pair single id="vigtalentvortexsplash-vortex-splash-ex-fn13-2"><Link to="/vigtalent/vortex_splash">⮞</Link> Vortex Splash (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-13.2" id="ability-vigilante_talents-fake-fn-13.2" data-hash-target to="ability-vigilante_talents-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Full-Round Action">When in rain or waist deep in water, the vigilante can make a whirling splash, allowing him to attempt a single <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver or <Link to="/rule/feint">feint</Link> against each adjacent foe. The vigilante can make a separate choice for each target.</Pair>
</Ability>
<Ability id="vigtalentwhipofvengeance-whip-of-vengeance-ex-fn14-4" icon={["stairs-goal"]}>
<Pair single id="vigtalentwhipofvengeance-whip-of-vengeance-ex-fn14-4"><Link to="/vigtalent/whip_of_vengeance">⮞</Link> Whip of Vengeance (Ex) <sup><InnerLink showBacklink="backlink-ability-vigilante_talents-fake-fn-14.4" id="ability-vigilante_talents-fake-fn-14.4" data-hash-target to="ability-vigilante_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/whip_mastery">Whip Mastery</Link> as a bonus feat. If he already has the Whip Mastery feat, he can immediately swap it for another feat he qualified for at the level when he chose Whip Mastery.</Pair>
<Pair title="At 6th Level">He also gains the <Link to="/feat/improved_whip_mastery">Improved Whip Mastery</Link> feat.</Pair>
<Pair title="Special">He treats his vigilante level as his vigilante base attack bonus for the purpose of meeting prerequisites of feats and abilities that have Whip Mastery as a prerequisite.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-vigilante_talents-label">Footnotes</h3><ol>
<li id="ability-vigilante_talents-fake-fn-1-target"><p><Link to="/source/ultimate_intrigue">Ultimate Intrigue</Link> pg. 14 <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1" data-hash-target to="ability-vigilante_talents-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.2" data-hash-target to="ability-vigilante_talents-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.3" data-hash-target to="ability-vigilante_talents-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.4" data-hash-target to="ability-vigilante_talents-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.5" data-hash-target to="ability-vigilante_talents-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.6" data-hash-target to="ability-vigilante_talents-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.7" data-hash-target to="ability-vigilante_talents-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.8" data-hash-target to="ability-vigilante_talents-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.9" data-hash-target to="ability-vigilante_talents-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.10" data-hash-target to="ability-vigilante_talents-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.11" data-hash-target to="ability-vigilante_talents-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.12" data-hash-target to="ability-vigilante_talents-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.13" data-hash-target to="ability-vigilante_talents-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-vigilante_talents-fake-fn-1.14" data-hash-target to="ability-vigilante_talents-fake-fn-1.14">↩<sup>14</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-2-target"><p>Ultimate Intrigue pg. 15 <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2" data-hash-target to="ability-vigilante_talents-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.2" data-hash-target to="ability-vigilante_talents-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.3" data-hash-target to="ability-vigilante_talents-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.4" data-hash-target to="ability-vigilante_talents-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.5" data-hash-target to="ability-vigilante_talents-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.6" data-hash-target to="ability-vigilante_talents-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.7" data-hash-target to="ability-vigilante_talents-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.8" data-hash-target to="ability-vigilante_talents-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.9" data-hash-target to="ability-vigilante_talents-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.10" data-hash-target to="ability-vigilante_talents-fake-fn-2.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.11" data-hash-target to="ability-vigilante_talents-fake-fn-2.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.12" data-hash-target to="ability-vigilante_talents-fake-fn-2.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-vigilante_talents-fake-fn-2.13" data-hash-target to="ability-vigilante_talents-fake-fn-2.13">↩<sup>13</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-3-target"><p>Ultimate Intrigue pg. 16 <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3" data-hash-target to="ability-vigilante_talents-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.2" data-hash-target to="ability-vigilante_talents-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.3" data-hash-target to="ability-vigilante_talents-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.4" data-hash-target to="ability-vigilante_talents-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.5" data-hash-target to="ability-vigilante_talents-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.6" data-hash-target to="ability-vigilante_talents-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.7" data-hash-target to="ability-vigilante_talents-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.8" data-hash-target to="ability-vigilante_talents-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.9" data-hash-target to="ability-vigilante_talents-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.10" data-hash-target to="ability-vigilante_talents-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.11" data-hash-target to="ability-vigilante_talents-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.12" data-hash-target to="ability-vigilante_talents-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.13" data-hash-target to="ability-vigilante_talents-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-vigilante_talents-fake-fn-3.14" data-hash-target to="ability-vigilante_talents-fake-fn-3.14">↩<sup>14</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-4-target"><p><Link to="/source/chronicle_of_legends">Chronicle of Legends</Link> pg. 7 <InnerLink aria-label="Back to reference 4" id="backlink-ability-vigilante_talents-fake-fn-4" data-hash-target to="ability-vigilante_talents-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-vigilante_talents-fake-fn-4.2" data-hash-target to="ability-vigilante_talents-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-vigilante_talents-fake-fn-4.3" data-hash-target to="ability-vigilante_talents-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-vigilante_talents-fake-fn-4.4" data-hash-target to="ability-vigilante_talents-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-vigilante_talents-fake-fn-4.5" data-hash-target to="ability-vigilante_talents-fake-fn-4.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-5-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> pg. 16 <InnerLink aria-label="Back to reference 5" id="backlink-ability-vigilante_talents-fake-fn-5" data-hash-target to="ability-vigilante_talents-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-vigilante_talents-fake-fn-5.2" data-hash-target to="ability-vigilante_talents-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-vigilante_talents-fake-fn-5.3" data-hash-target to="ability-vigilante_talents-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-vigilante_talents-fake-fn-5.4" data-hash-target to="ability-vigilante_talents-fake-fn-5.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-6-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> pg. 23 <InnerLink aria-label="Back to reference 6" id="backlink-ability-vigilante_talents-fake-fn-6" data-hash-target to="ability-vigilante_talents-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-vigilante_talents-fake-fn-6.2" data-hash-target to="ability-vigilante_talents-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-vigilante_talents-fake-fn-6.3" data-hash-target to="ability-vigilante_talents-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-7-target"><p>Ultimate Intrigue pg. 13 <InnerLink aria-label="Back to reference 7" id="backlink-ability-vigilante_talents-fake-fn-7" data-hash-target to="ability-vigilante_talents-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-vigilante_talents-fake-fn-7.2" data-hash-target to="ability-vigilante_talents-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-vigilante_talents-fake-fn-7.3" data-hash-target to="ability-vigilante_talents-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-8-target"><p>Ultimate Intrigue pg. 17 <InnerLink aria-label="Back to reference 8" id="backlink-ability-vigilante_talents-fake-fn-8" data-hash-target to="ability-vigilante_talents-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-vigilante_talents-fake-fn-8.2" data-hash-target to="ability-vigilante_talents-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-9-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 20 <InnerLink aria-label="Back to reference 9" id="backlink-ability-vigilante_talents-fake-fn-9" data-hash-target to="ability-vigilante_talents-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-vigilante_talents-fake-fn-9.2" data-hash-target to="ability-vigilante_talents-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-vigilante_talents-fake-fn-9.3" data-hash-target to="ability-vigilante_talents-fake-fn-9.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-vigilante_talents-fake-fn-9.4" data-hash-target to="ability-vigilante_talents-fake-fn-9.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-10-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> pg. 20 <InnerLink aria-label="Back to reference 10" id="backlink-ability-vigilante_talents-fake-fn-10" data-hash-target to="ability-vigilante_talents-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-vigilante_talents-fake-fn-10.2" data-hash-target to="ability-vigilante_talents-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-11-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 15 <InnerLink aria-label="Back to reference 11" id="backlink-ability-vigilante_talents-fake-fn-11" data-hash-target to="ability-vigilante_talents-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-vigilante_talents-fake-fn-11.2" data-hash-target to="ability-vigilante_talents-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-vigilante_talents-fake-fn-11.3" data-hash-target to="ability-vigilante_talents-fake-fn-11.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-12-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> pg. 27 <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12" data-hash-target to="ability-vigilante_talents-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12.2" data-hash-target to="ability-vigilante_talents-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12.3" data-hash-target to="ability-vigilante_talents-fake-fn-12.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12.4" data-hash-target to="ability-vigilante_talents-fake-fn-12.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12.5" data-hash-target to="ability-vigilante_talents-fake-fn-12.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12.6" data-hash-target to="ability-vigilante_talents-fake-fn-12.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-vigilante_talents-fake-fn-12.7" data-hash-target to="ability-vigilante_talents-fake-fn-12.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-13-target"><p>People of the Wastes pg. 21 <InnerLink aria-label="Back to reference 13" id="backlink-ability-vigilante_talents-fake-fn-13" data-hash-target to="ability-vigilante_talents-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-ability-vigilante_talents-fake-fn-13.2" data-hash-target to="ability-vigilante_talents-fake-fn-13.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-14-target"><p><Link to="/source/inner_sea_intrigue">Inner Sea Intrigue</Link> pg. 33 <InnerLink aria-label="Back to reference 14" id="backlink-ability-vigilante_talents-fake-fn-14" data-hash-target to="ability-vigilante_talents-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-vigilante_talents-fake-fn-14.2" data-hash-target to="ability-vigilante_talents-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-vigilante_talents-fake-fn-14.3" data-hash-target to="ability-vigilante_talents-fake-fn-14.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-vigilante_talents-fake-fn-14.4" data-hash-target to="ability-vigilante_talents-fake-fn-14.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-15-target"><p><Link to="/source/adventurers_guide">Adventurer's Guide</Link> pg. 42 <InnerLink aria-label="Back to reference 15" id="backlink-ability-vigilante_talents-fake-fn-15" data-hash-target to="ability-vigilante_talents-fake-fn-15">↩</InnerLink></p></li>
<li id="ability-vigilante_talents-fake-fn-16-target"><p>Antihero's Handbook pg. 17 <InnerLink aria-label="Back to reference 16" id="backlink-ability-vigilante_talents-fake-fn-16" data-hash-target to="ability-vigilante_talents-fake-fn-16">↩</InnerLink></p></li>
</ol></section></div>};
const _vows = {hasJL:true,title: "Monk Vows", topLink: ["Monk","class/monk"], jsx: <><div className="jumpList" id="ability-vows-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-vows-celibacy">Celibacy</InnerLink></li><li><InnerLink toTop to="ability-vows-chains">Chains</InnerLink></li><li><InnerLink toTop to="ability-vows-cleanliness">Cleanliness</InnerLink></li><li><InnerLink toTop to="ability-vows-fasting">Fasting</InnerLink></li><li><InnerLink toTop to="ability-vows-peace">Peace</InnerLink></li><li><InnerLink toTop to="ability-vows-poverty">Poverty</InnerLink></li><li><InnerLink toTop to="ability-vows-silence">Silence</InnerLink></li><li><InnerLink toTop to="ability-vows-truth">Truth</InnerLink></li></ul></div><h2 id="ability-vows-monk-vows">Monk Vows</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 50</Link><br/>A monk can discipline his body to hold more ki by upholding the strict tenets of a vow. By adhering to his vow's tenets, the monk's ki pool increases by the amount listed in the vow's description. Every vow comes with a penalty or limitation to offset this increase in ki. A monk can take a vow at any level, but it does not add to his ki pool until he gains a ki pool as a class feature. <strong className="hl">A monk who takes a vow never gains the <em>still mind</em> class feature, even if he abandons all his vows.</strong></p>
<p>If a monk knowingly and willingly breaks his vow, his ki pool is reduced to 0 (as if he had spent all of his ki points) and he cannot replenish his pool or use abilities that require ki or a ki pool until he has redeemed himself. Redemption requires a recommitment to his vow accompanied by an <Link to="/spell/atonement">atonement</Link> spell. After the redemption, the monk's normal ki pool (without the bonus from the vow) returns. If he upholds the previously broken vow for a full month, his ki pool regains the additional points from taking the vow, and he can decide whether to continue with his vow or forgo his vow without penalty. Once a monk forgoes a vow in this fashion, she can never gain a ki point bonus from that vow.</p>
<p>A monk may have multiple vows. Their effects and increase to his ki pool stack. If a monk violates a vow, he suffers the loss of ki described above; redemption means the monk regains the extra ki from his unbroken vows, but the extra ki from the broken vow does not return until he finishes the month-long commitment (in effect, violating one vow does not have an effect on the other vows once the monk redeems himself).</p>
<Ability id="celibacy" icon={["broken-shield","upgrade"]}>
<Pair single id="celibacy">Celibacy</Pair>
<Pair title="Info">The monk must abstain from all sexual and intimate physical activity. A monk with this vow takes it to an extreme, refusing to even share a room with another person, or sleeping on the opposite side of a camp from other people in a group. A celibate monk is not allowed to touch others or have others touch him (including touch spells from allies). Striking enemies in battle or being struck by enemies is not prohibited, but the monk shuns all peaceful or pleasurable contact.</Pair>
<Pair title="Ki Point Increase">A number of points equal to <Link to="/misc/one_fifth">one-fifth</Link> of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="chains" icon={["broken-shield","upgrade"]}>
<Pair single id="chains">Chains</Pair>
<Pair title="Info">Either out of penitence or to bring attention to the suffering of the enslaved, the monk wears shackles on his wrists and legs. This gives the monk a -1 penalty on attack rolls and to AC, and reduces his movement by 10 feet. If temporarily unable to wear his chains, he may carry rocks or some other heavy burden (including medium or heavy armor) to simulate this suffering.</Pair>
<Pair title="Ki Point Increase">A number of points equal to one-third of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="cleanliness" icon={["broken-shield","upgrade"]}>
<Pair single id="cleanliness">Cleanliness</Pair>
<Pair title="Info">A monk undertaking this vow must wash daily. He must change into fresh clothes daily or shortly after his robes become dirty. His appearance must be kept immaculate, including either neatly braiding or shaving off his hair (and, for male monks, maintaining a clean-shaven face). His vow forbids him from willingly touching the filthy, diseased, dead, or undead (though he may attempt to cleanse or heal those suffering from disease), though using manufactured weapons to attack these creatures is allowed.</Pair>
<Pair title="Ki Point Increase">A number of points equal to one-fifth of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="fasting" icon={["broken-shield","upgrade"]}>
<Pair single id="fasting">Fasting</Pair>
<Pair title="Info">The monk eats nothing but rice (or a similar bland, staple food) and drinks nothing but water. On certain days (usually once per month or on a religious holiday), he may eat a small portion of other simple, bland food to maintain proper nutrition. The monk cannot use tobacco, drugs, potions, alchemical items requiring eating or drinking, or any other thing that could be considered a food or beverage.</Pair>
<Pair title="Ki Point Increase">A number of points equal to one-sixth of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="peace" icon={["broken-shield","upgrade"]}>
<Pair single id="peace">Peace</Pair>
<Pair title="Info">The monk must strive to attain peace and may only use violence as a last resort. He can never strike the first blow in combat. If attacked, he must use the <Link to="/misc/fight_defensively">fight defensively</Link> action or the <Link to="/misc/total_defense">total defense</Link> action for the first 2 rounds. He must always give his opponent the option to surrender, and cannot purposely slay another creature that could reasonably be influenced to flee or join a civilized society as a productive member (obviously this excludes many monsters). Many monks who have taken this vow learn how to grapple and pin opponents, tying them with specialized knots that allow them to work themselves free after sufficient effort. Many monks of peace are vegetarians.</Pair>
<Pair title="Ki Point Increase">A number of points equal to one-fifth of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="poverty" icon={["broken-shield","upgrade"]}>
<Pair single id="poverty">Poverty</Pair>
<Pair title="Info">The monk taking a vow of poverty must never own more than six possessions - a simple set of clothing, a pair of sandals or shoes, a bowl, a sack, a blanket, and any one other item. Five of these items must be of plain and simple make, though one can be of some value (often an heirloom of great personal significance to the monk). The monk can never keep more money or wealth on his person than he needs to feed, bathe, and shelter himself for 1 week in modest accommodations. He cannot borrow or carry wealth or items worth more than 50 gp that belong to others. He is allowed to accept and use curative potions (or similar magical items where the item is consumed and is valueless thereafter) from other creatures.</Pair>
<Pair title="Ki Point Increase">A number of points equal to half of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="silence" icon={["broken-shield","upgrade"]}>
<Pair single id="silence">Silence</Pair>
<Pair title="Info">The monk must speak no words and attempt to be quiet in his actions. Accidental noises and the sounds of battle (such as the sound of a fist or weapon striking an opponent) do not affect his vow, though most monks with this vow choose their weapons and opponents so as to minimize even these sounds. The monk is allowed to make a non-vocal noise to warn another of danger (such as by stomping or clapping). The monk is allowed to use gestures and motions to communicate with others (including sign language) and is allowed to write.</Pair>
<Pair title="Ki Point Increase">A number of points equal to one-sixth of his monk level (minimum +1).</Pair>
</Ability>
<Ability id="truth" icon={["broken-shield","upgrade"]}>
<Pair single id="truth">Truth</Pair>
<Pair title="Info">The monk is not allowed to deliberately speak any lies, including bluffing, stating half-truths with the intent to deceive, exaggerating, telling white lies, and so on. This applies to all forms of communication. If presented with circumstances where telling the truth would bring harm to another, the monk remains silent. Many monks of this vow also take a vow of silence to show their commitment.</Pair>
<Pair title="Ki Point Increase">A number of points equal to one-fifth of his monk level (minimum +1).</Pair>
</Ability>
</>};
const _weapon_groups = {hasJL:true,title: "Weapon Groups", topLink: ["Fighter","class/fighter"], jsx: <><div className="jumpList" id="ability-weapon_groups-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-weapon_groups-axes">Axes</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-heavy-blades">Heavy Blades</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-light-blades">Light Blades</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-bows">Bows</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-close">Close</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-crossbows">Crossbows</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-double">Double</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-firearms">Firearms</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-flails">Flails</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-hammers">Hammers</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-monk">Monk</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-natural">Natural</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-polearms">Polearms</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-siege-engines">Siege Engines</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-spears">Spears</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-thrown">Thrown</InnerLink></li><li><InnerLink toTop to="ability-weapon_groups-tribal">Tribal</InnerLink></li></ul></div><h2 id="ability-weapon_groups-fighter-weapon-groups">Fighter Weapon Groups</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 56</Link><br/>Weapon groups are defined as follows (GMs may add other weapons to these groups, or add entirely new groups):</p>
<h3 id="ability-weapon_groups-axes" data-hash-target>Axes</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/axe_gauntlet_dwarven_heavy">axe-gauntlet, dwarven heavy</Link></li>
<li><Link to="/eq-weapon/axe_gauntlet_dwarven_light">axe-gauntlet, dwarven light</Link></li>
<li><Link to="/eq-weapon/bardiche">bardiche</Link></li>
<li><Link to="/eq-weapon/battleaxe">battleaxe</Link></li>
<li><Link to="/eq-weapon/boarding_axe">boarding axe</Link></li>
<li><Link to="/eq-weapon/butchering_axe">butchering axe</Link></li>
<li><Link to="/eq-weapon/dwarven_waraxe">dwarven waraxe</Link></li>
<li><Link to="/eq-weapon/gandasa">gandasa</Link></li>
<li><Link to="/eq-weapon/greataxe">greataxe</Link></li>
<li><Link to="/eq-weapon/handaxe">handaxe</Link></li>
<li><Link to="/eq-weapon/heavy_pick">heavy pick</Link></li>
<li><Link to="/eq-weapon/hooked_axe">hooked axe</Link></li>
<li><Link to="/eq-weapon/knuckle_axe">knuckle axe</Link></li>
<li><Link to="/eq-weapon/kumade">kumade</Link></li>
<li><Link to="/eq-weapon/kumade_collapsible">kumade, collapsible</Link></li>
<li><Link to="/eq-weapon/light_pick">light pick</Link></li>
<li><Link to="/eq-weapon/mattock">mattock</Link></li>
<li><Link to="/eq-weapon/orc_double_axe">orc double axe</Link></li>
<li><Link to="/eq-weapon/pata">pata</Link></li>
<li><Link to="/eq-weapon/throwing_axe">throwing axe</Link></li>
<li><Link to="/eq-weapon/tongi">tongi</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-heavy-blades" data-hash-target>Heavy Blades</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/aldori_dueling_sword">aldori dueling sword</Link></li>
<li><Link to="/eq-weapon/ankus">ankus</Link></li>
<li><Link to="/eq-weapon/bastard_sword">bastard sword</Link></li>
<li><Link to="/eq-weapon/chakram">chakram</Link></li>
<li><Link to="/eq-weapon/cutlass">cutlass</Link></li>
<li><Link to="/eq-weapon/double_chicken_saber">double chicken saber</Link></li>
<li><Link to="/eq-weapon/elven_curve_blade">elven curve blade</Link></li>
<li><Link to="/eq-weapon/estoc">estoc</Link></li>
<li><Link to="/eq-weapon/falcata">falcata</Link></li>
<li><Link to="/eq-weapon/falchion">falchion</Link></li>
<li><Link to="/eq-weapon/flambard">flambard</Link></li>
<li><Link to="/eq-weapon/great_terbutje">great terbutje</Link></li>
<li><Link to="/eq-weapon/greatsword">greatsword</Link></li>
<li><Link to="/eq-weapon/katana">katana</Link></li>
<li><Link to="/eq-weapon/katana_double_walking_stick">katana, double walking stick</Link></li>
<li><Link to="/eq-weapon/khopesh">khopesh</Link></li>
<li><Link to="/eq-armor/klar">klar</Link></li>
<li><Link to="/eq-weapon/longsword">longsword</Link></li>
<li><Link to="/eq-weapon/nine_ring_broadsword">nine-ring broadsword</Link></li>
<li><Link to="/eq-weapon/nodachi">nodachi</Link></li>
<li><Link to="/eq-weapon/rhoka_sword">rhoka sword</Link></li>
<li><Link to="/eq-weapon/sawtooth_sabre">sawtooth sabre</Link></li>
<li><Link to="/eq-weapon/scimitar">scimitar</Link></li>
<li><Link to="/eq-weapon/scythe">scythe</Link></li>
<li><Link to="/eq-weapon/seven_branched_sword">seven-branched sword</Link></li>
<li><Link to="/eq-weapon/shotel">shotel</Link></li>
<li><Link to="/eq-weapon/sickle_sword">sickle-sword</Link></li>
<li><Link to="/eq-weapon/split_blade_sword">split-blade sword</Link></li>
<li><Link to="/eq-weapon/switchscythe">switchscythe</Link></li>
<li><Link to="/eq-weapon/temple_sword">temple sword</Link></li>
<li><Link to="/eq-weapon/terbutje">terbutje</Link></li>
<li><Link to="/eq-weapon/two_bladed_sword">two-bladed sword</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-light-blades" data-hash-target>Light Blades</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/bayonet">bayonet</Link></li>
<li><Link to="/eq-weapon/broken_back_seax">broken-back seax</Link></li>
<li><Link to="/eq-weapon/butterfly_knife">butterfly knife</Link></li>
<li><Link to="/eq-weapon/butterfly_sword">butterfly sword</Link></li>
<li><Link to="/eq-weapon/chakram">chakram</Link></li>
<li><Link to="/eq-weapon/dagger">dagger</Link></li>
<li><Link to="/eq-weapon/deer_horn_knife">deer horn knife</Link></li>
<li><Link to="/eq-weapon/dogslicer">dogslicer</Link></li>
<li><Link to="/eq-weapon/dueling_dagger">dueling dagger</Link></li>
<li><Link to="/eq-weapon/gladius">gladius</Link></li>
<li><Link to="/eq-weapon/hunga_munga">hunga munga</Link></li>
<li><Link to="/eq-weapon/kama">kama</Link></li>
<li><Link to="/eq-weapon/katar">katar</Link></li>
<li><Link to="/eq-weapon/kerambit">kerambit</Link></li>
<li><Link to="/eq-weapon/kukri">kukri</Link></li>
<li><Link to="/eq-weapon/machete">machete</Link></li>
<li>madu, <Link to="/eq-armor/madu_shield_leather">leather</Link> or <Link to="/eq-armor/madu_shield_steel">steel</Link></li>
<li><Link to="/eq-weapon/manople">manople</Link></li>
<li><Link to="/eq-weapon/pata">pata</Link></li>
<li><Link to="/eq-weapon/quadrens">quadrens</Link></li>
<li><Link to="/eq-weapon/rapier">rapier</Link></li>
<li><Link to="/eq-weapon/razor_drow">razor, drow</Link></li>
<li><Link to="/eq-weapon/sanpkhang">sanpkhang</Link></li>
<li><Link to="/eq-weapon/sawtooth_sabre">sawtooth sabre</Link></li>
<li><Link to="/eq-weapon/scizore">scizore</Link></li>
<li><Link to="/eq-weapon/short_sword">short sword</Link></li>
<li><Link to="/eq-weapon/sica">sica</Link></li>
<li><Link to="/eq-weapon/sickle">sickle</Link></li>
<li><Link to="/eq-weapon/spiral_rapier">spiral rapier</Link></li>
<li><Link to="/eq-weapon/starknife">starknife</Link></li>
<li><Link to="/eq-weapon/sword_cane">sword cane</Link></li>
<li><Link to="/eq-weapon/swordbreaker_dagger">swordbreaker dagger</Link></li>
<li><Link to="/eq-weapon/wakizashi">wakizashi</Link></li>
<li><Link to="/eq-weapon/war_razor">war razor</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-bows" data-hash-target>Bows</h3>
<ul>
<li><Link to="/eq-weapon/composite_longbow">composite longbow</Link></li>
<li><Link to="/eq-weapon/composite_shortbow">composite shortbow</Link></li>
<li><Link to="/eq-weapon/hornbow_orc">hornbow, orc</Link></li>
<li><Link to="/eq-weapon/longbow">longbow</Link></li>
<li><Link to="/eq-weapon/shortbow">shortbow</Link></li>
</ul>
<h3 id="ability-weapon_groups-close" data-hash-target>Close</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/axe_gauntlet_dwarven_heavy">axe-gauntlet, dwarven heavy</Link></li>
<li><Link to="/eq-weapon/axe_gauntlet_dwarven_light">axe-gauntlet, dwarven light</Link></li>
<li><Link to="/eq-weapon/bayonet">bayonet</Link></li>
<li><Link to="/eq-weapon/brass_knuckles">brass knuckles</Link></li>
<li><Link to="/eq-weapon/cestus">cestus</Link></li>
<li><Link to="/eq-weapon/dan_bong">dan bong</Link></li>
<li><Link to="/eq-weapon/emei_piercer">emei piercer</Link></li>
<li><Link to="/eq-weapon/fighting_fan">fighting fan</Link></li>
<li><Link to="/eq-weapon/gauntlet">gauntlet</Link></li>
<li>heavy shield, <Link to="/eq-armor/heavy_wooden_shield">wood</Link> or <Link to="/eq-armor/heavy_steel_shield">steel</Link></li>
<li><Link to="/eq-weapon/iron_brush">iron brush</Link></li>
<li><Link to="/eq-weapon/katar">katar</Link></li>
<li><Link to="/eq-armor/klar">klar</Link></li>
<li>light shield, <Link to="/eq-armor/light_wooden_shield">wood</Link> or <Link to="/eq-armor/light_steel_shield">steel</Link></li>
<li>madu, <Link to="/eq-armor/madu_shield_leather">leather</Link> or <Link to="/eq-armor/madu_shield_steel">steel</Link></li>
<li><Link to="/eq-weapon/mere_club">mere club</Link></li>
<li><Link to="/eq-weapon/punching_dagger">punching dagger</Link></li>
<li><Link to="/eq-weapon/rope_gauntlet">rope gauntlet</Link></li>
<li><Link to="/eq-weapon/sap">sap</Link></li>
<li><Link to="/eq-weapon/scizore">scizore</Link></li>
<li><Link to="/eq-armorenh/armor_spikes">spiked armor</Link></li>
<li><Link to="/eq-weapon/spiked_gauntlet">spiked gauntlet</Link></li>
<li><Link to="/eq-armorenh/shield_spikes">spiked heavy shield</Link></li>
<li><Link to="/eq-armorenh/shield_spikes">spiked light shield</Link></li>
<li><Link to="/eq-weapon/tekko_kagi">tekko-kagi</Link></li>
<li><Link to="/eq-weapon/tonfa">tonfa</Link></li>
<li><Link to="/rule/unarmed_strike">unarmed strike</Link></li>
<li><Link to="/eq-armor/war_shield_dwarven">war-shield, dwarven</Link></li>
<li><Link to="/eq-weapon/waveblade">waveblade</Link></li>
<li><Link to="/eq-weapon/wooden_stake">wooden stake</Link></li>
<li><Link to="/eq-weapon/wushu_dart">wushu dart</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-crossbows" data-hash-target>Crossbows</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/double_crossbow">double crossbow</Link></li>
<li><Link to="/eq-weapon/hand_crossbow">hand crossbow</Link></li>
<li><Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link></li>
<li><Link to="/eq-weapon/launching_crossbow">launching crossbow</Link></li>
<li><Link to="/eq-weapon/light_crossbow">light crossbow</Link></li>
<li><Link to="/eq-weapon/pelletbow_dwarven_heavy">pelletbow, dwarven heavy</Link></li>
<li><Link to="/eq-weapon/pelletbow_dwarven_light">pelletbow, dwarven light</Link></li>
<li><Link to="/eq-weapon/repeating_hand_crossbow">repeating hand crossbow</Link></li>
<li><Link to="/eq-weapon/repeating_heavy_crossbow">repeating heavy crossbow</Link></li>
<li><Link to="/eq-weapon/repeating_light_crossbow">repeating light crossbow</Link></li>
<li><Link to="/eq-weapon/tube_arrow_shooter">tube arrow shooter</Link></li>
<li><Link to="/eq-weapon/underwater_heavy_crossbow">underwater heavy crossbow</Link></li>
<li><Link to="/eq-weapon/underwater_light_crossbow">underwater light crossbow</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-double" data-hash-target>Double</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/battle_ladder_gnome">battle ladder, gnome</Link></li>
<li><Link to="/eq-weapon/bo_staff">bo staff</Link></li>
<li><Link to="/eq-weapon/boarding_gaff">boarding gaff</Link></li>
<li><Link to="/eq-weapon/chain_spear">chain spear</Link></li>
<li><Link to="/eq-weapon/chain_hammer">chain-hammer</Link></li>
<li><Link to="/eq-weapon/dire_flail">dire flail</Link></li>
<li><Link to="/eq-weapon/double_chained_kama">double-chained kama</Link></li>
<li><Link to="/eq-weapon/dwarven_urgrosh">dwarven urgrosh</Link></li>
<li><Link to="/eq-weapon/gnome_hooked_hammer">gnome hooked hammer</Link></li>
<li><Link to="/eq-weapon/katana_double_walking_stick">katana, double walking stick</Link></li>
<li><Link to="/eq-weapon/kusarigama">kusarigama</Link></li>
<li><Link to="/eq-weapon/monks_spade">monk's spade</Link></li>
<li><Link to="/eq-weapon/orc_double_axe">orc double axe</Link></li>
<li><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></li>
<li><Link to="/eq-weapon/taiaha">taiaha</Link></li>
<li><Link to="/eq-weapon/two_bladed_sword">two-bladed sword</Link></li>
<li><Link to="/eq-weapon/weighted_spear">weighted spear</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-firearms" data-hash-target>Firearms</h3>
<ul>
<li><Link to="/main/equipment_firearms">all one-handed, two-handed</Link>, and <Link to="/main/equipment_siegeengines">siege</Link> firearms</li>
</ul>
<h3 id="ability-weapon_groups-flails" data-hash-target>Flails</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/battle_poi">battle poi</Link></li>
<li><Link to="/eq-weapon/bladed_scarf">bladed scarf</Link></li>
<li><Link to="/eq-weapon/cat_o_nine_tails">cat-o'-nine-tails</Link></li>
<li><Link to="/eq-weapon/chain_spear">chain spear</Link></li>
<li><Link to="/eq-weapon/dire_flail">dire flail</Link></li>
<li><Link to="/eq-weapon/dorn_dergar_dwarven">dorn-dergar, dwarven</Link></li>
<li><Link to="/eq-weapon/double_chained_kama">double-chained kama</Link></li>
<li><Link to="/eq-weapon/flying_blade">flying blade</Link></li>
<li><Link to="/eq-weapon/flying_talon">flying talon</Link></li>
<li><Link to="/eq-weapon/gnome_pincher">gnome pincher</Link></li>
<li><Link to="/eq-weapon/halfling_rope_shot">halfling rope-shot</Link></li>
<li><Link to="/eq-weapon/heavy_flail">heavy flail</Link></li>
<li><Link to="/eq-weapon/kusarigama">kusarigama</Link></li>
<li><Link to="/eq-weapon/kyoketsu_shoge">kyoketsu shoge</Link></li>
<li><Link to="/eq-weapon/light_flail">light flail</Link></li>
<li><Link to="/eq-weapon/meteor_hammer">meteor hammer</Link></li>
<li><Link to="/eq-weapon/morningstar">morningstar</Link></li>
<li><Link to="/eq-weapon/nine_section_whip">nine-section whip</Link></li>
<li><Link to="/eq-weapon/nunchaku">nunchaku</Link></li>
<li><Link to="/eq-weapon/sansetsukon">sansetsukon</Link></li>
<li><Link to="/eq-weapon/scorpion_whip">scorpion whip</Link></li>
<li><Link to="/eq-weapon/spiked_chain">spiked chain</Link></li>
<li><Link to="/eq-weapon/urumi">urumi</Link></li>
<li><Link to="/eq-weapon/whip">whip</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-hammers" data-hash-target>Hammers</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/aklys">aklys</Link></li>
<li><Link to="/eq-weapon/battle_aspergillum">battle aspergillum</Link></li>
<li><Link to="/eq-weapon/chain_hammer">chain-hammer</Link></li>
<li><Link to="/eq-weapon/club">club</Link></li>
<li><Link to="/eq-weapon/earth_breaker">earth breaker</Link></li>
<li><Link to="/eq-weapon/greatclub">greatclub</Link></li>
<li><Link to="/eq-weapon/heavy_mace">heavy mace</Link></li>
<li><Link to="/eq-weapon/lantern_staff">lantern staff</Link></li>
<li><Link to="/eq-weapon/light_hammer">light hammer</Link></li>
<li><Link to="/eq-weapon/light_mace">light mace</Link></li>
<li><Link to="/eq-weapon/mere_club">mere club</Link></li>
<li><Link to="/eq-weapon/piston_maul_gnome">piston maul, gnome</Link></li>
<li><Link to="/eq-weapon/planson">planson</Link></li>
<li><Link to="/eq-weapon/ram_hammer_dwarven">ram hammer, dwarven</Link></li>
<li><Link to="/eq-weapon/sphinx_hammer_dwarven">sphinx hammer, dwarven</Link></li>
<li><Link to="/eq-weapon/taiaha">taiaha</Link></li>
<li><Link to="/eq-weapon/tetsubo">tetsubo</Link></li>
<li><Link to="/eq-weapon/wahaika">wahaika</Link></li>
<li><Link to="/eq-weapon/warhammer">warhammer</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-monk" data-hash-target>Monk</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/bo_staff">bo staff</Link></li>
<li><Link to="/eq-weapon/brass_knuckles">brass knuckles</Link></li>
<li><Link to="/eq-weapon/butterfly_sword">butterfly sword</Link></li>
<li><Link to="/eq-weapon/cestus">cestus</Link></li>
<li><Link to="/eq-weapon/dan_bong">dan bong</Link></li>
<li><Link to="/eq-weapon/deer_horn_knife">deer horn knife</Link></li>
<li><Link to="/eq-weapon/double_chicken_saber">double chicken saber</Link></li>
<li><Link to="/eq-weapon/double_chained_kama">double-chained kama</Link></li>
<li><Link to="/eq-weapon/emei_piercer">emei piercer</Link></li>
<li><Link to="/eq-weapon/fighting_fan">fighting fan</Link></li>
<li><Link to="/eq-weapon/hanbo">hanbo</Link></li>
<li><Link to="/eq-weapon/jutte">jutte</Link></li>
<li><Link to="/eq-weapon/kama">kama</Link></li>
<li><Link to="/eq-weapon/kusarigama">kusarigama</Link></li>
<li><Link to="/eq-weapon/kyoketsu_shoge">kyoketsu shoge</Link></li>
<li><Link to="/eq-weapon/lungchuan_tamo">lungchuan tamo</Link></li>
<li><Link to="/eq-weapon/monks_spade">monk's spade</Link></li>
<li><Link to="/eq-weapon/nine_ring_broadsword">nine-ring broadsword</Link></li>
<li><Link to="/eq-weapon/nine_section_whip">nine-section whip</Link></li>
<li><Link to="/eq-weapon/nunchaku">nunchaku</Link></li>
<li><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></li>
<li><Link to="/eq-weapon/rope_dart">rope dart</Link></li>
<li><Link to="/eq-weapon/sai">sai</Link></li>
<li><Link to="/eq-weapon/sanpkhang">sanpkhang</Link></li>
<li><Link to="/eq-weapon/sansetsukon">sansetsukon</Link></li>
<li><Link to="/eq-weapon/seven_branched_sword">seven-branched sword</Link></li>
<li><Link to="/eq-weapon/shang_gou">shang gou</Link></li>
<li><Link to="/eq-weapon/shuriken">shuriken</Link></li>
<li><Link to="/eq-weapon/siangham">siangham</Link></li>
<li><Link to="/eq-weapon/temple_sword">temple sword</Link></li>
<li><Link to="/eq-weapon/tiger_fork">tiger fork</Link></li>
<li><Link to="/eq-weapon/tonfa">tonfa</Link></li>
<li><Link to="/eq-weapon/traveling_kettle">traveling kettle</Link></li>
<li><Link to="/eq-weapon/tri_point_double_edged_sword">tri-point double-edged sword</Link></li>
<li><Link to="/rule/unarmed_strike">unarmed strike</Link></li>
<li><Link to="/eq-weapon/urumi">urumi</Link></li>
<li><Link to="/eq-weapon/wushu_dart">wushu dart</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-natural" data-hash-target>Natural</h3>
<ul>
<li><Link to="/rule/unarmed_strike">unarmed strike</Link></li>
<li>all natural attacks (claw, bite, gore, etc.)</li>
</ul>
<h3 id="ability-weapon_groups-polearms" data-hash-target>Polearms</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/bardiche">bardiche</Link></li>
<li><Link to="/eq-weapon/bec_de_corbin">bec de corbin</Link></li>
<li><Link to="/eq-weapon/bill">bill</Link></li>
<li><Link to="/eq-weapon/boarding_gaff">boarding gaff</Link></li>
<li><Link to="/eq-weapon/crook">crook</Link></li>
<li><Link to="/eq-weapon/fauchard">fauchard</Link></li>
<li><Link to="/eq-weapon/giant_sticker_dwarven">giant-sticker, dwarven</Link></li>
<li><Link to="/eq-weapon/glaive">glaive</Link></li>
<li><Link to="/eq-weapon/glaive_guisarme">glaive-guisarme</Link></li>
<li><Link to="/eq-weapon/guisarme">guisarme</Link></li>
<li><Link to="/eq-weapon/halberd">halberd</Link></li>
<li><Link to="/eq-weapon/hooked_lance">hooked lance</Link></li>
<li><Link to="/eq-weapon/horsechopper">horsechopper</Link></li>
<li><Link to="/eq-weapon/lucerne_hammer">lucerne hammer</Link></li>
<li><Link to="/eq-weapon/mancatcher">mancatcher</Link></li>
<li><Link to="/eq-weapon/monks_spade">monk's spade</Link></li>
<li><Link to="/eq-weapon/naginata">naginata</Link></li>
<li><Link to="/eq-weapon/nodachi">nodachi</Link></li>
<li><Link to="/eq-weapon/ogre_hook">ogre hook</Link></li>
<li><Link to="/eq-weapon/ranseur">ranseur</Link></li>
<li><Link to="/eq-weapon/ripsaw_glaive_gnome">ripsaw glaive, gnome</Link></li>
<li><Link to="/eq-weapon/tiger_fork">tiger fork</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-siege-engines" data-hash-target>Siege Engines</h3>
<ul>
<li>All <Link to="/main/equipment_siegeengines">siege engines</Link></li>
</ul>
<h3 id="ability-weapon_groups-spears" data-hash-target>Spears</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/amentum">amentum</Link></li>
<li><Link to="/eq-weapon/boar_spear">boar spear</Link></li>
<li><Link to="/eq-weapon/chain_spear">chain spear</Link></li>
<li><Link to="/eq-weapon/double_spear">double spear</Link></li>
<li><Link to="/eq-weapon/elven_branched_spear">elven branched spear</Link></li>
<li><Link to="/eq-weapon/harpoon">harpoon</Link></li>
<li><Link to="/eq-weapon/javelin">javelin</Link></li>
<li><Link to="/eq-weapon/lance">lance</Link></li>
<li><Link to="/eq-weapon/longspear">longspear</Link></li>
<li><Link to="/eq-weapon/orc_skull_ram">orc skull ram</Link></li>
<li><Link to="/eq-weapon/pilum">pilum</Link></li>
<li><Link to="/eq-weapon/planson">planson</Link></li>
<li><Link to="/eq-weapon/shortspear">shortspear</Link></li>
<li><Link to="/eq-weapon/sibat">sibat</Link></li>
<li><Link to="/eq-weapon/spear">spear</Link></li>
<li><Link to="/eq-weapon/stormshaft_javelin">stormshaft javelin</Link></li>
<li><Link to="/eq-weapon/tiger_fork">tiger fork</Link></li>
<li><Link to="/eq-weapon/trident">trident</Link></li>
<li><Link to="/eq-weapon/weighted_spear">weighted spear</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-thrown" data-hash-target>Thrown</h3>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/aklys">aklys</Link></li>
<li><Link to="/eq-weapon/amentum">amentum</Link></li>
<li><Link to="/eq-weapon/atlatl">atlatl</Link></li>
<li><Link to="/eq-weapon/blowgun">blowgun</Link></li>
<li><Link to="/eq-weapon/bolas">bolas</Link></li>
<li><Link to="/eq-weapon/boomerang">boomerang</Link></li>
<li><Link to="/eq-weapon/chain_hammer">chain-hammer</Link></li>
<li><Link to="/eq-weapon/chakram">chakram</Link></li>
<li><Link to="/eq-weapon/club">club</Link></li>
<li><Link to="/eq-weapon/dagger">dagger</Link></li>
<li><Link to="/eq-weapon/dart">dart</Link></li>
<li><Link to="/eq-weapon/deer_horn_knife">deer horn knife</Link></li>
<li><Link to="/eq-weapon/dueling_dagger">dueling dagger</Link></li>
<li><Link to="/eq-weapon/flask_thrower">flask thrower</Link></li>
<li><Link to="/eq-weapon/halfling_sling_staff">halfling sling staff</Link></li>
<li><Link to="/eq-weapon/harpoon">harpoon</Link></li>
<li><Link to="/eq-weapon/hunga_munga">hunga munga</Link></li>
<li><Link to="/eq-weapon/javelin">javelin</Link></li>
<li><Link to="/eq-weapon/kestros">kestros</Link></li>
<li><Link to="/eq-weapon/lasso">lasso</Link></li>
<li><Link to="/eq-weapon/light_hammer">light hammer</Link></li>
<li><Link to="/eq-weapon/net">net</Link></li>
<li><Link to="/eq-weapon/pilum">pilum</Link></li>
<li><Link to="/eq-weapon/poisoned_sand_tube">poisoned sand tube</Link></li>
<li><Link to="/eq-weapon/ram_hammer_dwarven">ram hammer, dwarven</Link></li>
<li><Link to="/eq-weapon/rope_dart">rope dart</Link></li>
<li><Link to="/eq-weapon/shoanti_bolas">shoanti bolas</Link></li>
<li><Link to="/eq-weapon/shortspear">shortspear</Link></li>
<li><Link to="/eq-weapon/shuriken">shuriken</Link></li>
<li><Link to="/eq-weapon/sibat">sibat</Link></li>
<li><Link to="/eq-weapon/sling">sling</Link></li>
<li><Link to="/eq-weapon/sling_glove">sling glove</Link></li>
<li><Link to="/eq-weapon/snag_net">snag net</Link></li>
<li><Link to="/eq-weapon/spear">spear</Link></li>
<li><Link to="/eq-weapon/sphinx_hammer_dwarven">sphinx hammer, dwarven</Link></li>
<li><Link to="/eq-weapon/starknife">starknife</Link></li>
<li><Link to="/eq-weapon/stormshaft_javelin">stormshaft javelin</Link></li>
<li><Link to="/eq-weapon/throwing_axe">throwing axe</Link></li>
<li><Link to="/eq-armorenh/throwing_shield">throwing shield</Link></li>
<li><Link to="/eq-weapon/trident">trident</Link></li>
<li><Link to="/eq-weapon/wushu_dart">wushu dart</Link></li>
</ul>
</div>
<h3 id="ability-weapon_groups-tribal" data-hash-target>Tribal</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 51</Link></p>
<div className="columnar">
<ul>
<li><Link to="/eq-weapon/club">club</Link></li>
<li><Link to="/eq-weapon/dagger">dagger</Link></li>
<li><Link to="/eq-weapon/greatclub">greatclub</Link></li>
<li><Link to="/eq-weapon/handaxe">handaxe</Link></li>
<li>heavy shield, <Link to="/eq-armor/heavy_wooden_shield">wood</Link> or <Link to="/eq-armor/heavy_steel_shield">steel</Link></li>
<li>light shield, <Link to="/eq-armor/light_wooden_shield">wood</Link> or <Link to="/eq-armor/light_steel_shield">steel</Link></li>
<li><Link to="/eq-weapon/shortspear">shortspear</Link></li>
<li><Link to="/eq-weapon/spear">spear</Link></li>
<li><Link to="/eq-weapon/throwing_axe">throwing axe</Link></li>
<li><Link to="/rule/unarmed_strike">unarmed strike</Link></li>
</ul>
</div>
</>};
const _wild_utility_talents = {title: "Wild Utility Talents", topLink: ["Kineticist","class/kineticist"], jsx: <><h2 id="ability-wild_utility_talents-utility-wild-talents">Utility Wild Talents</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 22</Link><br/>A kineticist can select one of the following wild talents at each even level, provided she meets the prerequisites.</p>
<DisplayTable table={{"id":"wild utility talents","columns":[{"header":"Infusion","size":8.5,"align":"start","link":"kinetic"},{"header":"Elements","size":5},{"header":"Level","type":"num","size":3.5},{"header":"Burn","type":"num","size":4},{"header":"Prerequisites","size":11.5,"align":"start"}],"data":[[["Absentia (Sp)","absentia"],"void",4,0,"‹kinetic/emptiness›"],[["Aerial Adaptation (Sp)","aerial_adaptation"],"air",1,0,null],[["Aerial Evasion (Su)","aerial_evasion"],"air",3,1,"‹kinetic/enveloping winds›"],[["Aether Architect (Su)","aether_architect"],"aether",9,0,null],[["Aether Puppet (Sp)","aether_puppet"],"aether",5,0,null],[["Air Cushion (Sp)","air_cushion"],"air",1,0,null],[["Air Shroud (Sp)","air_shroud"],"air",1,0,null],[["Air Shroud, Greater (Sp)","greater_air_shroud"],"air",5,0,"‹kinetic/air shroud›"],[["Air's Leap (Su)","airs_leap"],"air",1,0,null],[["Air's Reach (Su)","airs_reach"],"air",1,0,null],[["Angelic Protection (Sp)","angelic_protection"],"aether, water, wood",2,0,"‹kinetic/kinetic healer› wild talent, ‹race/aasimar› or ‹feat/Planar Infusion› (Elysium, Heaven, Nirvana)"],[["Basic Aerokinesis (Sp)","basic_aerokinesis"],"air",1,0,null],[["Basic Chaokinesis (Sp)","basic_chaokinesis"],"void",1,0,null],[["Basic Geokinesis (Sp)","basic_geokinesis"],"earth",1,0,null],[["Basic Hydrokinesis (Sp)","basic_hydrokinesis"],"water",1,0,null],[["Basic Phytokinesis (Sp)","basic_phytokinesis"],"wood",1,0,null],[["Basic Pyrokinesis (Sp)","basic_pyrokinesis"],"fire",1,0,null],[["Basic Telekinesis (Sp)","basic_telekinesis"],"aether",1,0,null],[["Body of Air (Sp)","body_of_air"],"air",4,0,null],[["Brachiation (Su)","brachiation"],"wood",3,0,null],[["Celerity (Sp)","celerity"],"air",3,0,null],[["Clockwork Heart (Su)","clockwork_heart"],"earth",3,0,"‹kinetic/metal blast›"],[["Clockwork Puppet (Su)","clockwork_puppet"],"earth",5,0,"‹kinetic/metal blast›"],[["Cold Adaptation (Sp)","cold_adaptation"],"fire, water",1,0,null],[["Cold Snap (Sp)","cold_snap"],"water",3,1,"‹kinetic/cold adaptation›, ‹kinetic/shroud of water›"],[["Corpse Puppet (Sp)","corpse_puppet"],"void",4,0,null],[["Cryokinetic Stasis (Sp)","cryokinetic_stasis"],"water",8,1,null],[["Curse Breaker (Sp)","curse_breaker"],"void",4,0,"‹kinetic/emptiness›"],[["Earth Child (Su)","earth_child"],"earth",3,0,null],[["Earth Climb (Su)","earth_climb"],"earth",2,0,null],[["Earth Glide (Su)","earth_glide"],"earth",5,0,"‹kinetic/earth climb›"],[["Earth Tongue (Sp)","earth_tongue"],"earth",8,0,"‹kinetic/greater tremorsense›, ‹kinetic/tremorsense›"],[["Earth Walk (Su)","earth_walk"],"earth",1,0,null],[["Earthmeld (Sp)","earthmeld"],"earth",4,0,"‹kinetic/earth climb›"],[["Elemental Exile (Sp)","elemental_exile"],"universal",8,1,null],[["Elemental Grip (Sp)","elemental_grip"],"universal",3,0,null],[["Elemental Transmission (Sp)","elemental_transmission"],"earth, fire, water",5,0,null],[["Elemental Whispers (Su)","elemental_whispers"],"universal",1,0,null],[["Elemental Whispers, Greater (Su)","greater_elemental_whispers"],"universal",3,0,"‹kinetic/elemental whispers›"],[["Enduring Earth (Su)","enduring_earth"],"earth",4,0,null],[["Engulfing Winds (Sp)","engulfing_winds"],"air",3,0,null],[["Expanded Defense (Su)","expanded_defense"],"universal",4,0,null],[["Eyes of the Void (Su)","eyes_of_the_void"],"void",2,0,null],[["Eyes of the Void, Greater (Su)","greater_eyes_of_the_void"],"void",5,0,"‹kinetic/eyes of the void›"],[["Fire Corridor (Sp)","fire_corridor"],"fire",5,1,null],[["Fire Sculptor (Sp)","fire_sculptor"],"fire",1,0,null],[["Fire Steed (Sp)","fire_steed"],"fire",2,0,null],[["Fire's Fury (Su)","fires_fury"],"fire",1,0,null],[["Firesight (Su)","firesight"],"fire",3,0,null],[["Flame Jet (Sp)","flame_jet"],"fire",3,0,null],[["Flame Jet, Greater (Sp)","greater_flame_jet"],"fire",5,0,"‹kinetic/flame jet›"],[["Flame Shield (Sp)","flame_shield"],"fire",5,1,"‹kinetic/searing flesh›"],[["Flame Trap (Sp)","flame_trap"],"fire",2,0,null],[["Force Barrier (Sp)","force_barrier"],"aether",5,0,"‹kinetic/force ward›"],[["Forest Siege (Sp)","forest_siege"],"wood",9,0,null],[["Foxfire (Sp)","foxfire"],"fire, wood",2,0,"‹kinetic/fire blast› or ‹kinetic/positive blast›"],[["From the Ashes (Sp)","from_the_ashes"],"fire",9,2,null],[["Gravity Control (Sp)","gravity_control"],"void",3,0,null],[["Gravity Control, Greater (Sp)","greater_gravity_control"],"void",5,0,"‹kinetic/gravity control›"],[["Gravity Master (Sp)","gravity_master"],"void",9,0,"‹kinetic/gravity control›, ‹kinetic/greater gravity control›"],[["Greater Fire Steed (Sp)","greater_fire_steed"],"fire",8,0,"‹kinetic/fire steed›, ‹kinetic/improved fire steed›"],[["Green Tongue (Su)","green_tongue"],"wood",6,0,null],[["Green Tongue, Greater (Su)","greater_green_tongue"],"wood",7,0,"‹kinetic/green tongue›"],[["Greensight (Su)","greensight"],"wood",4,0,null],[["Healing Burst (Sp)","healing_burst"],"aether, void, water, wood",4,1,"‹kinetic/kinetic healer› or ‹kinetic/void healer›"],[["Heat Adaptation (Sp)","heat_adaptation"],"fire, water",1,0,null],[["Heat Wave (Sp)","heat_wave"],"fire",3,1,"‹kinetic/heat adaptation›, ‹kinetic/searing flesh›"],[["Herbal Antivenom (Sp)","herbal_antivenom"],"wood",4,0,null],[["Hurricane Queen (Su)","hurricane_queen"],"air",9,0,null],[["Ice Path (Su)","ice_path"],"water",6,0,"‹kinetic/icewalker›"],[["Ice Sculptor (Sp)","ice_sculptor"],"water",4,0,null],[["Icewalker (Su)","icewalker"],"water",1,0,null],[["Improved Fire Steed (Sp)","improved_fire_steed"],"fire",5,0,"‹kinetic/fire steed›"],[["Infernal Bargain (Sp)","infernal_bargain"],"universal",1,0,"‹race/tiefling› or ‹feat/Planar Infusion› (Hell)"],[["Jagged Flesh (Sp)","jagged_flesh"],"earth",3,1,"‹kinetic/flesh of stone›"],[["Kinetic Awe (Su)","kinetic_awe"],"universal",1,0,null],[["Kinetic Cover (Sp)","kinetic_cover"],"aether, earth, water, wood",1,0,null],[["Kinetic Dissolution (Su)","kinetic_dissolution"],"universal",1,0,"‹race/wayang›, chosen racial trait"],[["Kinetic Form (Sp)","kinetic_form"],"universal",5,1,null],[["Kinetic Healer (Sp)","kinetic_healer"],"aether, water",1,1,null],[["Kinetic Restoration (Su)","kinetic_restoration"],"universal",3,1,null],[["Kinetic Revivification (Su)","kinetic_revivification"],"aether, water",6,0,"‹kinetic/kinetic healer›"],[["Living Capacitor (Sp)","living_capacitor"],"air",2,0,null],[["Magnetism (Sp)","magnetism"],"air, earth",3,0,"‹kinetic/magnetic infusion›"],[["Magnetism, Greater (Sp)","greater_magnetism"],"air, earth",9,0,"‹kinetic/magnetic infusion›, ‹kinetic/magnetism›"],[["Merciful Foliage (Su)","merciful_foliage"],"wood",2,0,null],[["Mesmerizing Elementalist (Su)","mesmerizing_elementalist"],"universal",1,0,"‹race/nagaji›"],[["Nine-Tailed Kineticist (Su)","nine_tailed_kineticist"],"universal",1,0,"‹race/kitsune›"],[["No Breath (Su)","no_breath"],"void",2,0,"‹kinetic/emptiness›"],[["Past Life Evoker (Su)","past_life_evoker"],"universal",2,0,"‹race/samsaran›"],[["Pillar (Sp)","pillar"],"earth, water, wood",3,0,"‹kinetic/kinetic cover›"],[["Plant Disguise (Sp)","plant_disguise"],"wood",4,0,null],[["Plant Puppet (Sp)","plant_puppet"],"wood",5,0,null],[["Primal Aether (Su)","primal_aether"],"aether",3,0,null],[["Purging Flame (Sp)","purging_flame"],"fire",6,1,null],[["Purifying Flames (Sp)","purifying_flames"],"fire",4,1,null],[["Reverse Shift (Sp)","reverse_shift"],"universal",8,0,null],[["Ride the Blast (Sp)","ride_the_blast"],"universal",6,0,null],[["Roots (Su)","roots"],"wood",1,0,null],[["Searing Flame (Su)","searing_flame"],"fire",2,0,"‹kinetic/burning infusion›"],[["Seismic Master (Sp)","seismic_master"],"earth",9,0,null],[["Self Telekinesis (Sp)","self_telekinesis"],"aether",3,0,null],[["Self Telekinesis, Greater (Sp)","greater_self_telekinesis"],"aether",5,0,"‹kinetic/self telekinesis›"],[["Shape Wood (Sp)","shape_wood"],"wood",4,0,null],[["Shift Earth (Sp)","shift_earth"],"earth",4,0,"‹kinetic/kinetic cover›"],[["Shift Earth, Greater (Sp)","greater_shift_earth"],"earth",7,0,"‹kinetic/kinetic cover›, ‹kinetic/shift earth›"],[["Shimmering Mirage (Sp)","shimmering_mirage"],"water",5,1,"‹kinetic/shroud of water›"],[["Skilled Kineticist (Su)","skilled_kineticist"],"universal",1,0,null],[["Skilled Kineticist, Greater (Su)","greater_skilled_kineticist"],"universal",2,0,"‹kinetic/skilled kineticist›"],[["Sky Walk (Su)","sky_walk"],"air",7,1,"‹kinetic/air cushion› or ‹kinetic/air's leap›, ‹kinetic/wings of air›"],[["Slick (Sp)","slick"],"water",1,0,null],[["Smoke Storm (Sp)","smoke_storm"],"fire",3,0,null],[["Spark of Innovation (Sp)","spark_of_innovation"],"earth",5,0,"‹kinetic/metal blast›"],[["Spark of Life (Sp)","spark_of_life"],"universal",5,0,null],[["Spell Deflection (Sp)","spell_deflection"],"aether",7,0,null],[["Splash of the Styx (Sp)","splash_of_the_styx"],"water",5,1,"‹race/tiefling› or ‹feat/Planar Infusion› (Abaddon, Abyss, or Hell)"],[["Spying Touchsight (Sp)","spying_touchsight"],"aether",4,0,"‹kinetic/touchsight›"],[["Stone Sculptor (Sp)","stone_sculptor"],"earth",5,0,null],[["Suffocate (Sp)","suffocate"],"aether, air, void, water",6,0,null],[["Telekinetic Deflection (Sp)","telekinetic_deflection"],"aether",8,0,null],[["Telekinetic Finesse (Sp)","telekinetic_finesse"],"aether",1,0,null],[["Telekinetic Globe (Sp)","telekinetic_globe"],"aether",8,0,"‹kinetic/force barrier›, ‹kinetic/force ward›"],[["Telekinetic Haul (Sp)","telekinetic_haul"],"aether",2,0,"‹kinetic/basic telekinesis›"],[["Telekinetic Invisibility (Sp)","telekinetic_invisibility"],"aether",3,0,null],[["Telekinetic Maneuvers (Sp)","telekinetic_maneuvers"],"aether",4,0,null],[["Tengu Blade Lore (Su)","tengu_blade_lore"],"universal",1,0,"‹race/tengu›"],[["Thorn Flesh (Sp)","thorn_flesh"],"wood",3,1,"‹kinetic/flesh of wood›"],[["Tidal Wave (Sp)","tidal_wave"],"water",9,1,null],[["Touchsight (Su)","touchsight"],"aether",3,0,null],[["Touchsight, Reactive (Su)","reactive_touchsight"],"aether",5,0,"‹kinetic/touchsight›"],[["Trail of Flames (Sp)","trail_of_flames"],"fire",5,0,null],[["Tree Step (Sp)","tree_step"],"wood",7,1,"‹kinetic/greater woodland step›, ‹kinetic/woodland step›"],[["Tremorsense (Su)","tremorsense"],"earth",3,0,null],[["Tremorsense, Greater (Su)","greater_tremorsense"],"earth",5,0,"‹kinetic/tremorsense›"],[["Undead Grip (Sp)","undead_grip"],"void",3,0,null],[["Veil of Mists (Su)","veil_of_mists"],"water",2,0,null],[["Venom Speaker (Su)","venom_speaker"],"universal",1,0,null],[["Voice of the Wind (Sp)","voice_of_the_wind"],"air",1,0,null],[["Voice of the Wind, Greater (Sp)","greater_voice_of_the_wind"],"air",2,0,"‹kinetic/voice of the wind›"],[["Void Healer (Sp)","void_healer"],"void",1,1,null],[["Warp Wood (Sp)","warp_wood"],"wood",3,0,null],[["Water Alteration (Sp)","water_alteration"],"water",1,0,null],[["Water Manipulator (Sp)","water_manipulator"],"water",3,0,"‹kinetic/kinetic cover›"],[["Waterdancer (Sp)","waterdancer"],"water",3,0,null],[["Waterdancer, Greater (Su)","greater_waterdancer"],"water",5,0,"‹kinetic/waterdancer›"],[["Watersense (Su)","watersense"],"water",4,0,null],[["Watersense, Greater (Su)","greater_watersense"],"water",5,0,"‹kinetic/watersense›"],[["Weather Master (Sp)","weather_master"],"air",8,0,null],[["Wild Growth (Sp)","wild_growth"],"wood",5,0,null],[["Wind Manipulator (Sp)","wind_manipulator"],"air",6,0,"‹kinetic/engulfing winds›"],[["Windsight (Su)","windsight"],"air",3,0,null],[["Windsight, Greater (Su)","greater_windsight"],"air",5,0,"‹kinetic/windsight›"],[["Wings of Air (Sp)","wings_of_air"],"air",3,0,"‹kinetic/air cushion› or ‹kinetic/air's leap›"],[["Wood Healer (Sp)","wood_healer"],"wood",1,1,"‹kinetic/positive blast›"],[["Wood Soldiers (Su)","wood_soldiers"],"wood",8,1,null],[["Woodland Step (Su)","woodland_step"],"wood",1,0,null],[["Woodland Step, Greater (Sp)","greater_woodland_step"],"wood",5,0,"‹kinetic/woodland step›"]],"initialColumn":0}} />
</>};
const _ward_aspects = {title: "Ward Aspects", topLink: ["Hunter","class/hunter"], jsx: <><h2 id="ability-ward_aspects-ward-aspects">Ward Aspects</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link><br/>When a character in tune with nature comes upon an area that a <Link to="/family/kami">kami</Link> could ward but that is lacking a guardian, she has the option of making that area her ward in a symbiotic relationship. Whenever a character with the animal focus class feature is within 100 feet per class level of one of the wards listed below, she can use the associated ward aspect instead of one of the normal options for her animal focus class feature. <Link to="/class/hunter">Hunters</Link> can apply the benefits of a ward aspect to themselves, but not to their animal companions.</p>
<p>If a character with the animal focus class feature spends 30 minutes meditating while within 10 feet per class level of the ward, she attunes herself to that ward. A character attuned to a ward can use the associated ward aspect while within 1 mile per class level. A character can be attuned to only one ward at a time, but depending on her surroundings, she could choose from among multiple wards. A character with the second animal focus class feature can still only use one ward aspect at a time, no matter how many aspects she has available to her.</p>
<p>The following ward aspects are available to characters who meet the conditions described above.</p>
<blockquote className="hanging">
<Ability id="road" icon={["upgrade"]}>
<Pair single id="road">Road</Pair>
<Pair title="Passive Ability">The creature gains a +10 foot enhancement bonus to its base speed while <Link to="/rule/run">running</Link>, <Link to="/rule/charging">charging</Link>, or <Link to="/rule/withdraw">withdrawing</Link>.</Pair>
<Pair title="At 8th Level">This bonus becomes +20 feet.</Pair>
<Pair title="At 15th Level">This bonus increases to +30 feet.</Pair>
</Ability>
<Ability id="shrine" icon={["upgrade"]}>
<Pair single id="shrine">Shrine</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Wisdom.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="tree" icon={["armor-upgrade"]}>
<Pair single id="tree">Tree</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on saving throws against death effects and effects that deal negative energy damage.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="waymarker" icon={["upgrade"]}>
<Pair single id="waymarker">Waymarker</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on attack rolls with <Link to="/misc/improvised_weapons">improvised weapons</Link>.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="well" icon={["armor-upgrade"]}>
<Pair single id="well">Well</Pair>
<Pair title="Passive Ability">The creature gains a +2 shield bonus to AC.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
</blockquote>
</>};
export default {domains:_domains,inquisitions:_inquisitions,oaths:_oaths,orders:_orders,stares:_stares,style_strikes:_style_strikes,variant_channeling:_variant_channeling,vigilante_talents:_vigilante_talents,vows:_vows,weapon_groups:_weapon_groups,wild_utility_talents:_wild_utility_talents,ward_aspects:_ward_aspects}