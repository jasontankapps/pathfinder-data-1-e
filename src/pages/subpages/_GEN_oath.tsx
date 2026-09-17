import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><h2 id="oath-not_found-error">Error</h2>
<p>Unable to find the requested oath.</p>
</>};
const _chaos = {title: "Oath against Chaos", jsx: <><h2 id="oath-chaos-oath-against-chaos">Oath against Chaos</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 15</Link><br/>Despite the seemingly inherent contradiction, the militant <Link to="/rule/hellknights">Hellknights</Link> of Cheliax count a number of paladins among their ranks, especially the <Link to="/hkorder/order_of_the_godclaw">Order of the Godclaw</Link>. Typically these paladins reconcile their allegiance to the Hellknights by dedication to the rule of law above all other things.</p>
<Ability id="detect-chaos-su" icon={["power"]}>
<Pair single id="detect-chaos-su">Detect Chaos (Su)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">This ability works like the standard paladin ability to <em>detect evil,</em> except as <Link to="/spell/detect_chaos">detect chaos</Link> instead of <em>detect evil.</em></Pair>
</Ability>
<Ability id="smite-chaos-su" icon={["power"]}>
<Pair single id="smite-chaos-su">Smite Chaos (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Ability">This ability works like the standard paladin ability to <em>smite evil,</em> except the paladin gains bonuses against targets with chaotic alignments instead of evil. The paladin deals additional damage against outsiders with the chaotic subtype, chaotic-aligned dragons, and aberrations, instead of against evil outsiders, evil dragons, and undead.</Pair>
</Ability>
<Ability id="order-of-good-su" icon={["power"]}>
<Pair single id="order-of-good-su">Order of Good (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="At 4th Level">She gains the ability to spend one use of her <em>lay on hands</em> ability when using her <em>smite chaos</em> ability to instead <em>smite evil,</em> as the paladin ability of the same name.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Spread the order of law wherever you go, so long as the law is just; do not serve as a tool of tyranny. Fight vigilantly the servants of chaos.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/command">Command</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/calm_emotions">Calm emotions</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/suggestion">Suggestion</Link></Pair>
<Pair plain title="4th"><Link to="/spell/orders_wrath">Order's wrath</Link></Pair>
</Ability>
</>};
const _corruption = {title: "Oath against Corruption", jsx: <><h2 id="oath-corruption-oath-against-corruption">Oath against Corruption</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 60</Link><br/>More insidious than meddling devils and more destructive than rampaging hordes are the strange alien entities that bubble up from the deep earth and the strange places beyond the sky. When a paladin takes this oath, she becomes a hunter of aberrations, protecting the common people from these bizarre threats. Often the paladin works in secret, not wanting to spread panic about her mission. Within cities they sometimes have underground bases that give access through the sewers and passages to strange vaults where the aberrant creatures live.</p>
<Ability id="aura-of-purity-su" icon={["aura","def","protect"]}>
<Pair single id="aura-of-purity-su">Aura of Purity (Su)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain a +4 sacred bonus on saves against spells and effects from creatures of the aberration type. Allies within 10 feet gain a +1 sacred bonus on these saves.</Pair>
<Pair title="Special">This ability functions only while the paladin is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="cleansing-flame-sp" icon={["lower","protect"]}>
<Pair single id="cleansing-flame-sp">Cleansing Flame (Sp)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">You may expend two uses of your <em>smite evil</em> ability to ignite your weapon with a cleansing blue flame for 1 minute. This flame sheds light as a <Link to="/eq-misc/torch">torch</Link>. Aberrations within 20 feet of the flame take a -4 penalty on attack rolls against you and your allies, and your allies within 20 feet of the flame gain a +2 sacred bonus on saving throws against spells and effects from aberrations.</Pair>
</Ability>
<Ability id="cast-into-the-void-su" icon={["def","magic"]}>
<Pair single id="cast-into-the-void-su" flavor="A paladin becomes a conduit for the power of her god.">Cast into the Void (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Her DR increases to 10/evil.</Pair>
<Pair title="Ability">Whenever she uses <em>smite evil</em> and successfully strikes an aberration, the creature must make a Will save (DC 10 + 1/2 the paladin's level + the paladin's Charisma modifier) or be banished to oblivion. This ability does not kill the creature, but it is sent to a remote place, such as deep underground or far into space (if it is a creature native to space), and cannot return under its own power for at least 100 years.</Pair>
<Pair title="Ability">Whenever the paladin <Link to="/ability/channel_positive_energy">channels positive energy</Link> or uses <em>lay on hands</em> to heal a creature, she heals the maximum possible amount.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Hunt aberrations and do not allow them to roam freely or harm others. Destroy them if you can, or banish them if you cannot.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/true_strike">True strike</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/acute_senses">Acute senses</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/touch_of_idiocy">Touch of idiocy</Link></Pair>
<Pair plain title="4th"><Link to="/spell/spell_immunity">Spell immunity</Link></Pair>
</Ability>
</>};
const _fiends = {title: "Oath against Fiends", jsx: <><h2 id="oath-fiends-oath-against-fiends">Oath against Fiends</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 61</Link><br/>A paladin who takes an oath against <Link to="/family/demon">demons</Link>, <Link to="/family/devil">devils</Link>, <Link to="/family/daemon">daemons</Link>, and other evil outsiders is constantly on the lookout for malicious fiendish insurgence into the world, and faces it with swift and unwavering defiance. Often she works closely with <Link to="/class/inquisitor">inquisitors</Link>, searching for signs of outsider manipulation and possession.</p>
<Ability id="anchoring-aura-su" icon={["aura","magic"]}>
<Pair single id="anchoring-aura-su">Anchoring Aura (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability"><p>A paladin's aura hampers extradimensional travel by evil outsiders. The aura extends 20 feet from the paladin. Evil outsiders attempting to use abilities such as <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/plane_shift">plane shift</Link>, or <Link to="/spell/teleport">teleport</Link> to leave or enter the aura must succeed at a Will save (DC 10 + 1/2 the paladin's level + the paladin's Charisma modifier); failure means the ability does not function, as if the outsider were affected by <Link to="/spell/dimensional_anchor">dimensional anchor</Link>.</p>
<p>The aura functions only while the paladin is conscious, not if she is unconscious or dead.</p>
</Pair>
<Pair title="Immediate Action">Alternatively, the paladin can expend one use of her <em>smite evil</em> ability to target an evil outsider within 30 feet with <em>dimensional anchor.</em> A targeted <em>dimensional anchor</em> persists even if the paladin is unconscious or dead.</Pair>
</Ability>
<Ability id="holy-vessel-su" icon={["def"]}>
<Pair single id="holy-vessel-su">Holy Vessel (Su)</Pair>
<Pair hl title="Replaces">9th-level mercy</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A paladin whose <em>divine bond</em> is with a weapon can also use her <em>divine bond</em> to augment her armor or shield with enhancement bonuses, or add any of the following armor or shield properties: <Link to="/magic-enh/bashing">bashing</Link>, <Link to="/magic-enh/fortification">fortification</Link>, and <Link to="/magic-enh/spell_resistance">spell resistance</Link>. Adding these properties consumes an amount of bonus equal to the property's cost (see the <Link to="/rule/magic_armor">armor special abilities and shield special abilities tables</Link>).</Pair>
<Pair title="Special">She can divide her bonuses from the <em>divine bond</em> ability among her weapon, armor, and shield as she sees fit. This ability has no effect for a paladin whose <em>divine bond</em> is with a mount.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Never suffer an evil outsider to live if it is in your power to destroy it. Banish fiends you cannot kill. Purge the evil from those possessed by fiends.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/detect_thoughts">Detect thoughts</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/invisibility_purge">Invisibility purge</Link></Pair>
<Pair plain title="4th"><Link to="/spell/plane_shift">Plane shift</Link></Pair>
</Ability>
</>};
const _grotesquery = {title: "Oath against Grotesquery", jsx: <><h2 id="oath-grotesquery-oath-against-grotesquery">Oath against Grotesquery</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 15</Link><br/>For paladins of the Eternal Rose, beauty is synonymous with virtue, and it is the lens through which all goodness is filtered. For champions of <Link to="/faith/shelyn">Shelyn</Link>, who are aware that aesthetics is subjective, beauty is the form inviolate.</p>
<Ability id="beauty-unyielding-su" icon={["def"]}>
<Pair single id="beauty-unyielding-su">Beauty Unyielding (Su)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability"><p>A paladin gains spell resistance equal to 11 + her paladin level, but only against non-harmless transmutation effects. This spell resistance can be lowered as a <strong className="hl">standard action</strong>.</p>
<p>Additionally, whenever the paladin would take Charisma damage or suffer Charisma drain, she reduces the amount of damage or drain by 1 (minimum 0).</p>
</Pair>
</Ability>
<Ability id="restore-true-beauty-su" icon={["aid"]}>
<Pair single id="restore-true-beauty-su">Restore True Beauty (Su)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A paladin can expend two uses of her <em>lay on hands</em> ability to attempt to dispel any non-harmless transmutation effect on a target, as <Link to="/spell/break_enchantment">break enchantment</Link>.</Pair>
<Pair title="Ability">Additionally, the paladin can expend two uses of her <em>lay on hands</em> ability to remove all of the target's temporary <Link to="/rule/charisma_damage">Charisma damage</Link> and restore all points drained from its Charisma score, as <Link to="/spell/restoration">restoration</Link>.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Respect the innate beauty in all things, and strive to preserve it from corruption and perversion. Never willfully cause damage to crafted objects or works of art, nor cause a creature or object to be deformed in any way.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/sanctuary">Sanctuary</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/make_whole">Make whole</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/banish_seeming">Banish seeming</Link></Pair>
<Pair plain title="4th"><Link to="/spell/true_form">True form</Link></Pair>
</Ability>
</>};
const _savagery = {title: "Oath against Savagery", jsx: <><h2 id="oath-savagery-oath-against-savagery">Oath against Savagery</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 61</Link><br/>Some paladins are champions of order, pledging to battle the hordes of goblinoids, orcs, hostile barbarians, and similar savages that nip at the heels of civilization, as well as those who gnaw on society from within, such as thieves' and assassins' guilds. More so than other paladins, those who take this oath expect to fight many creatures at once, and develop special abilities to deal with these numbers.</p>
<Ability id="holy-reach-su" icon={["boost"]}>
<Pair single id="holy-reach-su">Holy Reach (Su)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An oathbound paladin can expend one use of her <em>smite evil</em> ability to extend her natural reach by 5 feet for 1 minute. This does not stack with the <Link to="/feat/lunge">Lunge</Link> feat.</Pair>
</Ability>
<Ability id="hordebreaker-su" icon={["boost","melee"]}>
<Pair single id="hordebreaker-su">Hordebreaker (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When the paladin hits an evil humanoid with an attack of opportunity, she deals an additional 1d6 points of damage. When using <em>holy reach,</em> the paladin may make a number of additional attacks of opportunity per round equal to her Charisma bonus. This increase stacks with similar increases from other sources such as <Link to="/feat/combat_reflexes">Combat Reflexes</Link>.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Always heed the call of a community in danger from savages. Be the first in line to defend a settlement and the last to retreat.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/deathwatch">Deathwatch</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/protection_from_arrows">Protection from arrows</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/haste">Haste</Link></Pair>
<Pair plain title="4th"><Link to="/spell/divine_power">Divine power</Link></Pair>
</Ability>
</>};
const _the_whispering_way = {title: "Oath against the Whispering Way", jsx: <><h2 id="oath-the_whispering_way-oath-against-the-whispering-way">Oath against the Whispering Way</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 20</Link><br/>The <Link to="/rule/whispering_way">Whispering Way</Link> is an enemy to all life in the world, and as a result many paladins feel called to contain its evil. (This oath is identical to the <Link to="/oath/undeath">oath against undeath</Link> except for the <em>aura against necromancy</em> below.)</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/angradd">Angradd</Link>, <Link to="/faith/arqueros">Arqueros</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/torag">Torag</Link>, <Link to="/faith/vildeis">Vildeis</Link>.</Cell></Row></Block>
<Ability id="detect-undead-su" icon={["power"]}>
<Pair single id="detect-undead-su">Detect Undead (Su)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">This ability works like the standard paladin ability to <em>detect evil,</em> except as <Link to="/spell/detect_undead">detect undead</Link> instead of <em>detect evil.</em></Pair>
<Pair title="Special">You can regain <em>detect evil</em> through the <Link to="/feat/sin_seer">Sin Seer</Link> feat.</Pair>
</Ability>
<Ability id="ghost-touch-aura-su" icon={["def"]}>
<Pair single id="ghost-touch-aura-su">Ghost Touch Aura (Su)</Pair>
<Pair hl title="Replaces">3rd-level and 9th-level mercies</Pair>
<Pair title="At 3rd Level">The paladin's armor is treated as if it had the <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> armor property. This does not affect the cost or effect of any other abilities of the armor.</Pair>
<Pair title="At 9th Level">This ability also applies to the paladin's shield.</Pair>
</Ability>
<Ability id="aura-against-necromancy-su" icon={["aura","def","protect"]}>
<Pair single id="aura-against-necromancy-su">Aura against Necromancy (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">The paladin gains a +4 morale bonus on saves against necromancy spells and spell-like abilities. Each ally within 10 feet of her gains a +2 morale bonus on these saves.</Pair>
<Pair title="Special">This ability functions only while the paladin is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="superior-channeler-su" icon={["boost"]}>
<Pair single id="superior-channeler-su">Superior Channeler (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A paladin can channel positive energy to harm undead by expending a single usage of her <em>lay on hands</em> ability instead of two.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Destroy agents of the Whispering Way and stop the spread of their philosophy.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/sanctify_corpse">Sanctify corpse</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/darkvision">Darkvision</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/searing_light">Searing light</Link></Pair>
<Pair plain title="4th"><Link to="/spell/halt_undead">Halt undead</Link></Pair>
</Ability>
</>};
const _the_wyrm = {title: "Oath against the Wyrm", jsx: <><h2 id="oath-the_wyrm-oath-against-the-wyrm">Oath against the Wyrm</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 62</Link><br/>Few dragons see the smaller races of the world as their equals - to most, humanoids are either food or an annoyance. Some paladins swear to protect others against the predation of dragonkind. Some include dragon-blooded creatures (such as half-dragons or even sorcerers with the draconic bloodline) in their oath and team up with <Link to="/class/inquisitor">inquisitors</Link> to root out those whose ancestry carries the taint of dragon magic. Many paladins with this oath are thrill-seekers for the cause of good, channeling their divine power in ways that allow them to take on their powerful foes head on.</p>
<Ability id="breath-evasion-su" icon={["def"]}>
<Pair single id="breath-evasion-su">Breath Evasion (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A paladin with this oath gains <Link to="/ability/evasion">evasion</Link>, but only against the breath weapons of creatures with the dragon type.</Pair>
</Ability>
<Ability id="divine-bond-sp" icon={["power"]}>
<Pair single id="divine-bond-sp">Divine Bond (Sp)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Ability"><p>This works like the paladin's normal <em>divine bond</em> ability, except as follows.</p>
<p>If the paladin's bond is with a weapon, she cannot use that ability to add the <em>brilliant energy, disruption,</em> or <em>merciful</em> weapon properties, but she can add the <Link to="/magic-enh/bane">bane</Link> weapon property (but only against dragons).</p>
<p>If the paladin's bond is with her steed, the steed gains the paladin's <em>aura</em>-based immunities and her <em>aura</em> does not affect allies.</p>
</Pair>
</Ability>
<Ability id="dragon-slaying-strike-su" icon={["def","magic","aid"]}>
<Pair single id="dragon-slaying-strike-su" flavor="An oathbound paladin becomes a conduit of holy power.">Dragon-Slaying Strike (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Her DR increases to 10/evil.</Pair>
<Pair title="Ability">Whenever she uses <em>smite evil</em> and successfully strikes a dragon, the dragon is also subject to a single-target <Link to="/spell/holy_word">holy word</Link>, using her paladin level +10 as the caster level. After the banishment effect and the damage from the attack are resolved, the <em>smite</em> immediately ends.</Pair>
<Pair title="Ability">In addition, whenever she channels positive energy or uses <em>lay on hands</em> to heal a creature, she heals the maximum possible amount.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Slay evil dragons, as well as other dangerous dragons whether or not they are evil. Prevent the bloodlines of other creatures from being corrupted with draconic power. Protect the innocent against the predation of dragons.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/bears_endurance">Bear's endurance</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/fly">Fly</Link></Pair>
<Pair plain title="4th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
</Ability>
</>};
const _undeath = {title: "Oath against Undeath", jsx: <><h2 id="oath-undeath-oath-against-undeath">Oath against Undeath</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 61</Link><br/>A paladin with this oath vows to restore the natural state of death to any animate corpse she encounters, and destroy the undead energy in the process. While a few paladins who take this oath recognize that not all undead are evil, others are quite willing to purge neutral and good undead along with all the evil ones.</p>
<Ability id="detect-undead-su" icon={["power"]}>
<Pair single id="detect-undead-su">Detect Undead (Su)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">This ability works like the standard paladin ability to <em>detect evil,</em> except as <Link to="/spell/detect_undead">detect undead</Link> instead of <em>detect evil.</em></Pair>
<Pair title="Special">You can regain <em>detect evil</em> through the <Link to="/feat/sin_seer">Sin Seer</Link> feat.</Pair>
</Ability>
<Ability id="ghost-touch-aura-su" icon={["def"]}>
<Pair single id="ghost-touch-aura-su">Ghost Touch Aura (Su)</Pair>
<Pair hl title="Replaces">3rd-level and 9th-level mercies</Pair>
<Pair title="At 3rd Level">The paladin's armor is treated as if it had the <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> armor property. This does not affect the cost or effect of any other abilities of the armor.</Pair>
<Pair title="At 9th Level">This ability also applies to the paladin's shield.</Pair>
</Ability>
<Ability id="aura-of-life-su" icon={["aura","def","protect"]}>
<Pair single id="aura-of-life-su">Aura of Life (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability"><p>The paladin gains a +4 morale bonus on saves against attacks that grant <Link to="/rule/negative_levels">negative levels</Link> and saves to overcome negative levels. Each ally within 10 feet of her gains a +2 morale bonus on these saves.</p>
<p>This ability functions only while the paladin is conscious, not if she is unconscious or dead.</p>
</Pair>
</Ability>
<Ability id="superior-channeler-su" icon={["boost"]}>
<Pair single id="superior-channeler-su">Superior Channeler (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A paladin can channel positive energy to harm undead by expending a single usage of her <em>lay on hands</em> ability instead of two.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Destroy all undead. Put to rest the poor souls turned against their will. Prevent the taint of undeath from spreading to the newly dead, blessing or burning the corpses as necessary.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/sanctify_corpse">Sanctify corpse</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/darkvision">Darkvision</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/searing_light">Searing light</Link></Pair>
<Pair plain title="4th"><Link to="/spell/halt_undead">Halt undead</Link></Pair>
</Ability>
</>};
const _charity = {title: "Oath of Charity", jsx: <><h2 id="oath-charity-oath-of-charity">Oath of Charity</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 62</Link><br/>Charity is more than just giving money to a temple or a cause - it is about the necessity of sacrifice to help others. Those who take this oath dedicate their lives to protecting those who can't protect themselves and giving to those who are in need. They are generous to a fault, the most steadfast of friends, and give without anyone needing to ask. Paladins who take the oath of charity often turn over a fifth or more of their acquired wealth gained through adventuring to their temples or community.</p>
<Ability id="charitable-hands-su" icon={["down","boost"]}>
<Pair single id="charitable-hands-su">Charitable Hands (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A paladin with this oath heals 50% less when she uses <em>lay on hands</em> on herself, but 50% more than the normal amount when she uses it to heal others. Using <em>lay on hands</em> to harm undead deals the normal amount of damage. This ability otherwise works like and replaces <em>lay on hands.</em></Pair>
</Ability>
<Ability id="charitable-mercy-su" icon={["power"]}>
<Pair single id="charitable-mercy-su" flavor="A paladin with this oath is more flexible with her mercies than other paladins.">Charitable Mercy (Su)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">At the start of each day, a paladin with this oath can select her mercies anew from the list of available <Link to="/ability/mercies">mercies</Link>.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Always offer help to good creatures who need it. Always offer help to the poor and destitute. (In settlements, this help is often handled by donating to charitable religious organizations, rather than the paladin being required to dole out coppers to every beggar in the street.)</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/magic_stone">Magic stone</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/make_whole">Make whole</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/magic_vestment">Magic vestment</Link></Pair>
<Pair plain title="4th"><Link to="/spell/imbue_with_spell_ability">Imbue with spell ability</Link></Pair>
</Ability>
</>};
const _chastity = {title: "Oath of Chastity", jsx: <><h2 id="oath-chastity-oath-of-chastity">Oath of Chastity</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 62</Link><br/>A chaste paladin proves her purity by way of her action and her abstinence from romantic activities. Many believe that this oath is only about sex, but it is really an oath about the romantic notion that a single person could be more important than all the evils facing the world - it is this perceived selfishness that the bearer of the Oath of Chastity strives to reject. In doing so, she gains purifying power.</p>
<Ability id="pure-of-mind-su" icon={["def"]}>
<Pair single id="pure-of-mind-su">Pure of Mind (Su)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The paladin gains a +4 sacred bonus on saves against charm effects and figments, and gains a bonus equal to her Charisma modifier on Will saving throws.</Pair>
</Ability>
<Ability id="pure-of-body-su" icon={["def"]}>
<Pair single id="pure-of-body-su">Pure of Body (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="At 8th Level">The paladin has a 50% chance to turn any critical hit or sneak attack against her into a normal hit, as if she were wearing <Link to="/magic-enh/fortification">fortification</Link> armor.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Never engage in a romantic relationship or a sexual act.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/remove_fear">Remove fear</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/confess">Confess</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="4th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
</Ability>
</>};
const _loyalty = {title: "Oath of Loyalty", jsx: <><h2 id="oath-loyalty-oath-of-loyalty">Oath of Loyalty</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 63</Link><br/>To most paladins, their word is everything. When they say something, it will be done. Those who take this oath put that ideal to the test every day. The oathbound paladin's word is a promise, a sacred bond, and also greater power in the cause of law and good. She is careful with her words, lest she agree to something she cannot fully support.</p>
<Ability id="loyal-oath-su" icon={["protect"]}>
<Pair single id="loyal-oath-su">Loyal Oath (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per three oracle levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">An oathbound paladin can choose a willing creature within line of sight as the target of her <em>loyal oath.</em> When the paladin is adjacent to the target of her <em>loyal oath,</em> she grants the target a sacred bonus on saving throws and to Armor Class equal to the paladin's Charisma bonus. The <em>loyal oath</em> lasts 1 minute, or until the paladin dismisses it (a <strong className="hl">free action</strong>) or discharges it (see below), whichever comes first.</Pair>
<Pair title="Immediate Action">While a <em>loyal oath</em> is active and the target is struck by an enemy and the paladin is adjacent to that enemy, she may make a single melee attack against that enemy; making this attack ends the <em>loyal oath.</em></Pair>
</Ability>
<Ability id="loyal-guardian-su" icon={["protect"]}>
<Pair single id="loyal-guardian-su">Loyal Guardian (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Immediate Action">Whenever the target of the paladin's <em>loyal oath</em> is hit with a melee or ranged attack, if the paladin is adjacent to the target, she can have the attack automatically hit her instead of the intended target. This ends the <em>loyal oath.</em></Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Keep all promises. Never make an oath or promise lightly. Never go back on an oath.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/wrath">Wrath</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/aid">Aid</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/helping_hand">Helping hand</Link></Pair>
<Pair plain title="4th"><Link to="/spell/sending">Sending</Link></Pair>
</Ability>
</>};
const _the_mendevian_crusade = {title: "Oath of the Mendevian Crusade", jsx: <><h2 id="oath-the_mendevian_crusade-oath-of-the-mendevian-crusade">Oath of the Mendevian Crusade</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 20</Link><br/>The Worldwound threatens all of Golarion with the uttermost depths of depravity, and so paladins across the world stand firm against it. This oath is identical to the <Link to="/oath/fiends">oath against fiends</Link> except as noted here.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/angradd">Angradd</Link>, <Link to="/faith/arqueros">Arqueros</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/kols">Kols</Link>, <Link to="/faith/ragathiel">Ragathiel</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/torag">Torag</Link>, <Link to="/faith/vildeis">Vildeis</Link>.</Cell></Row></Block>
<Ability id="divine-bond-su" icon={["boost","down"]}>
<Pair single id="divine-bond-su">Divine Bond (Su)</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The paladin adds evil outsider <Link to="/magic-enh/bane">bane</Link> to the list of weapon special abilities that can be added to her weapon and removes <em>flaming</em> from the list.</Pair>
</Ability>
<Ability id="anchoring-aura-su" icon={["aura","magic"]}>
<Pair single id="anchoring-aura-su">Anchoring Aura (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability"><p>A paladin's aura hampers extradimensional travel by evil outsiders. The aura extends 20 feet from the paladin. Evil outsiders attempting to use abilities such as <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/plane_shift">plane shift</Link>, or <Link to="/spell/teleport">teleport</Link> to leave or enter the aura must succeed at a Will save (DC 10 + 1/2 the paladin's level + the paladin's Charisma modifier); failure means the ability does not function, as if the outsider were affected by <Link to="/spell/dimensional_anchor">dimensional anchor</Link>.</p>
<p>The aura functions only while the paladin is conscious, not if she is unconscious or dead.</p>
</Pair>
<Pair title="Immediate Action">Alternatively, the paladin can expend one use of her <em>smite evil</em> ability to target an evil outsider within 30 feet with <em>dimensional anchor.</em> A targeted <em>dimensional anchor</em> persists even if the paladin is unconscious or dead.</Pair>
</Ability>
<Ability id="holy-vessel-su" icon={["def"]}>
<Pair single id="holy-vessel-su">Holy Vessel (Su)</Pair>
<Pair hl title="Replaces">9th-level mercy</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A paladin whose <em>divine bond</em> is with a weapon can also use her <em>divine bond</em> to augment her armor or shield with enhancement bonuses, or add any of the following armor or shield properties: <Link to="/magic-enh/bashing">bashing</Link>, <Link to="/magic-enh/fortification">fortification</Link>, and <Link to="/magic-enh/spell_resistance">spell resistance</Link>. Adding these properties consumes an amount of bonus equal to the property's cost (see the <Link to="/rule/magic_armor">armor special abilities and shield special abilities tables</Link>).</Pair>
<Pair title="Special">She can divide her bonuses from the <em>divine bond</em> ability among her weapon, armor, and shield as she sees fit. This ability has no effect for a paladin whose <em>divine bond</em> is with a mount.</Pair>
</Ability>
<Ability id="mercy-su" extraClasses="hasSubs" icon={["power"]}>
<Pair single id="mercy-su">Mercy (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The paladin can choose the following mercy.</Pair>
</Ability>
<Ability id="possessed" extraClasses="subAbility" icon={["aid"]}>
<Pair single id="possessed">Possessed</Pair>
<Pair title="Ability">If the subject is affected by <Link to="/spell/dominate_person">dominate person</Link>, possessed, or otherwise magically controlled by an evil outsider, this mercy grants the victim a new saving throw against the effect to end the effect at once.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Never suffer an evil outsider to live if it is in your power to destroy it. Banish fiends you cannot kill. Purge the evil from those possessed by fiends.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/detect_thoughts">Detect thoughts</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/invisibility_purge">Invisibility purge</Link></Pair>
<Pair plain title="4th"><Link to="/spell/plane_shift">Plane shift</Link></Pair>
</Ability>
</>};
const _the_peoples_council = {title: "Oath of the People's Council", jsx: <><h2 id="oath-the_peoples_council-oath-of-the-peoples-council">Oath of the People's Council</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 20</Link><br/>The <Link to="/rule/eagle_knights">Eagle Knights</Link> and the people of Andoran hold their elected officials to extremely high standards of conduct. Paladins swearing the oath of the People's Council serve the common good by finding and thwarting those who abuse their authority. Many seek specifically to emulate Talmandor, the agathion patron of Andoran.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/ragathiel">Ragathiel</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/vildeis">Vildeis</Link>.</Cell></Row></Block>
<Ability icon={["skill"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/perform">Perform</Link> (CHA)</Pair>
<Pair title="Removed Skills">Handle Animal, Ride, Spellcraft</Pair></Ability>
<Ability id="stirring-monologue-su" icon={["power"]}>
<Pair single id="stirring-monologue-su">Stirring Monologue (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>The paladin can deliver a <em>stirring monologue</em> on the ideals of justice and fairness, motivating allies and persuading others. This functions as <Link to="/ability/bardic_performance">bardic performance</Link> as per a bard of her paladin level using Perform (oratory). All the effects are language-dependent even if they would not normally be.</p>
<p>The paladin gains the following performances at the indicated levels.</p>
</Pair>
<Pair title="At 1st Level"><Link to="/performance/inspire_courage">Inspire courage</Link></Pair>
<Pair title="At 4th Level"><Link to="/performance/fascinate">Fascinate</Link></Pair>
<Pair title="At 5th Level"><Link to="/performance/inspire_competence">Inspire competence</Link></Pair>
<Pair title="At 7th Level"><Link to="/performance/suggestion">Suggestion</Link></Pair>
<Pair title="At 10th Level"><Link to="/performance/dirge_of_doom">Dirge of doom</Link></Pair>
<Pair title="At 13th Level"><Link to="/performance/inspire_greatness">Inspire greatness</Link></Pair>
<Pair title="At 16th Level"><Link to="/performance/frightening_tune">Frightening tune</Link></Pair>
<Pair title="At 19th Level"><Link to="/performance/mass_suggestion">Mass suggestion</Link></Pair>
</Ability>
<Ability id="aura-of-truth-su" icon={["aura","def","protect"]}>
<Pair single id="aura-of-truth-su">Aura of Truth (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">The paladin automatically succeeds at saving throws to disbelieve illusions of the phantasm subschool and automatically gains a saving throw to disbelieve figment illusions when she observes them. Allies within 30 feet gain a +4 bonus on saving throws to disbelieve illusions of the phantasm subschool.</Pair>
</Ability>
<Ability id="champion-of-andoran-su" icon={["def","protect","boost","aid"]}>
<Pair single id="champion-of-andoran-su" flavor="An oathbound paladin becomes a champion of the people of Andoran.">Champion of Andoran (Su)</Pair>
<Pair hl title="Alters">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Her DR increases to 10/evil.</Pair>
<Pair title="Ability">Whenever she uses her <em>stirring monologue,</em> up to four creatures (including the paladin herself) affected by the <em>monologue</em> gain SR 30 against spells with the evil descriptor or spell-like abilities cast by evil outsiders or undead. Weapons wielded by those affected by her <em>stirring monologue</em> are treated as good, silver, and cold iron for the purpose of overcoming damage reduction.</Pair>
<Pair title="Ability">In addition, whenever the oathbound paladin channels positive energy or uses <em>lay on hands</em> to heal a creature, she heals it the maximum possible amount.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Know the laws of Andoran and do not exempt authorities from the application of the law.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/comprehend_languages">Comprehend languages</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/locate_object">Locate object</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="4th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
</Ability>
</>};
const _the_skyseeker = {title: "Oath of the Skyseeker", jsx: <><h2 id="oath-the_skyseeker-oath-of-the-skyseeker">Oath of the Skyseeker</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 21</Link><br/>The dwarven people look to the legendary Sky Citadels as beacons of dwarven culture. Paladins with the oath of the skyseeker swear to defend those citadels their people retain and to help reclaim those the dwarves have lost, hoping to one day rebuild them on the greatest, most honorable ideals of the dwarven gods.</p>
<Block size="minimal">
<Row><Cell>Deities</Cell><Cell><Link to="/faith/angradd">Angradd</Link>, <Link to="/faith/folgrit">Folgrit</Link>, <Link to="/faith/kols">Kols</Link>, <Link to="/faith/torag">Torag</Link>, <Link to="/faith/trudd">Trudd</Link>.</Cell></Row></Block>
<Ability id="smite-evil-hordes-su" icon={["power","down"]}>
<Pair single id="smite-evil-hordes-su">Smite Evil Hordes (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Ability">When the paladin or an ally defeats the target of the paladin's <em>smite evil</em> ability, the paladin can change the target of her <em>smite</em> to a different target within 30 feet of the previously defeated target without using an action. The new target must be of the same creature type and subtype as the previous target. If no applicable target is within 30 feet, then the <em>smite evil</em> effect ends.</Pair>
<Pair title="Special">The paladin's <em>smite</em> does not deal more damage to evil outsiders, dragons, or undead than to other evil creatures.</Pair>
</Ability>
<Ability id="divine-bond-su" icon={["boost","down"]}>
<Pair single id="divine-bond-su">Divine Bond (Su)</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The paladin adds <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link> to the list of weapon special abilities that can be added to her weapon and removes <em>flaming</em> from the list.</Pair>
</Ability>
<Ability id="mercy-for-the-lost-sp" icon={["magic"]}>
<Pair single id="mercy-for-the-lost-sp" flavor="The paladin can use the Sky Citadels as a beacon leading her on the path to her deity.">Mercy for the Lost (Sp)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">If she is on the Material Plane, the paladin can use <Link to="/spell/find_the_path">find the path</Link> once per day at her paladin level, but only to find her way to a known Sky Citadel. If she is not on the Material Plane, she can instead use this ability to use <Link to="/spell/plane_shift">plane shift</Link> as per the spell to travel to a known Sky Citadel.</Pair>
<Pair title="Special">If she is in a Sky Citadel, she can expend her daily use of this ability to use <em>plane shift</em> to travel to the realm of her deity.</Pair>
</Ability>
<Ability id="stalwart-ex" icon={["def"]}>
<Pair single id="stalwart-ex" flavor="The paladin's quest has strengthened her body and mind.">Stalwart (Ex)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">If she succeeds at a Fortitude or Will saving throw against an effect that has a reduced effect on a successful save, she instead avoids the effect entirely.</Pair>
<Pair title="Special">A <Link to="/misc/helpless">helpless</Link> paladin does not gain the benefit of the <em>stalwart</em> ability.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Reclaim a Sky Citadel in the name of honorable dwarven ideals. Defend Sky Citadels already held by dwarves.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/find_traps">Find traps</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/spiritual_ally">Spiritual ally</Link></Pair>
<Pair plain title="4th"><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link></Pair>
</Ability>
</>};
const _vengeance = {title: "Oath of Vengeance", jsx: <><h2 id="oath-vengeance-oath-of-vengeance">Oath of Vengeance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 63</Link><br/>While all paladins uphold the principals of law and good, sometimes these ideas must have a ruthless and dangerous side. It often falls upon a paladin to bring justice in the form of vengeance upon heinous transgressors against law and good. These oathbound paladins are always on the hunt for those who have perpetrated evil, and are the instrument of Heaven's most definitive and implacable judgment.</p>
<Ability id="channel-wrath-su" icon={["power"]}>
<Pair single id="channel-wrath-su">Channel Wrath (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="At 4th Level">She can spend two uses of her <em>lay on hands</em> ability to gain an extra use of <em>smite evil</em> that day.</Pair>
<Pair title="Special">This ability has no effect for a paladin who does not have the <em>smite evil</em> ability.</Pair>
</Ability>
<Ability id="powerful-justice-su" icon={["boost"]}>
<Pair single id="powerful-justice-su">Powerful Justice (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">An oathbound paladin may spends one use of her <em>smite evil</em> ability to grant her allies within 10 feet the ability to <em>smite evil,</em> except they only gain the paladin's bonus to damage, not her <em>smite's</em> attack bonus or ability to bypass DR.</Pair>
</Ability>
<Block size="simple" hl>
<Row><Cell>Code of Conduct</Cell><Cell>Never let lesser eveils distract you from your pursuit of just vengeance.</Cell></Row></Block>
<Ability id="oath-spells" icon={["learn"]}>
<Pair single id="oath-spells">Oath Spells</Pair>
<Pair plain title="1st"><Link to="/spell/wrath">Wrath</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/confess">Confess</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link></Pair>
<Pair plain title="4th"><Link to="/spell/orders_wrath">Order's wrath</Link></Pair>
</Ability>
</>};
export default {not_found:_not_found,chaos:_chaos,corruption:_corruption,fiends:_fiends,grotesquery:_grotesquery,savagery:_savagery,the_whispering_way:_the_whispering_way,the_wyrm:_the_wyrm,undeath:_undeath,charity:_charity,chastity:_chastity,loyalty:_loyalty,the_mendevian_crusade:_the_mendevian_crusade,the_peoples_council:_the_peoples_council,the_skyseeker:_the_skyseeker,vengeance:_vengeance}