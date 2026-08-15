import {IonList,IonItem,IonLabel,IonItemDivider} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import MainLink from '../../components/MainLink';
import InnerLink from '../../components/InnerLink';
const _traits_faith = {title: "Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItemDivider className="mainItem divider"></IonItemDivider><MainLink to="/main/traits_faith_all" endem="(121 traits)" info="All Faith Traits" /><MainLink to="/main/traits_faith_def" className="indented" bottom="Affects armor bonuses or saving throws; 33 traits" info="Defense Traits" /><MainLink to="/main/traits_faith_combat" className="indented" bottom="Affects attack rolls, damage, initiative, etc; 7 traits" info="Other Combat-Related Traits" /><MainLink to="/main/traits_faith_spell" className="indented" bottom="Grants a spell, spell-like-ability, or an ability that duplicates a spell; 10 traits" info="Spell Ability Traits" /><MainLink to="/main/traits_faith_magic" className="indented" bottom="Affects caster level or spellcasting ability; 6 traits" info="Magic-Related Traits" /><MainLink to="/main/traits_faith_class" className="indented" bottom="Requires a class ability to function; 24 traits" info="Class-Specific Traits" /><MainLink to="/main/traits_faith_ab" className="indented" bottom="Affects a skill, feat, or ability; 50 traits" info="Skill/Feat/Ability Traits" /></IonList>};
const _traits_faith_all = {title: "All Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitabjectbelief-abject-belief-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitabjectbelief-abject-belief-fn1"><Link to="/trait/abject_belief">⮞</Link> Abject Belief <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1" id="main-traits_faith_all-fake-fn-1" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitabjectbelief-abject-belief-fn1-flavor">You cling tenaciously to a faith that is doubted by many, perhaps based around a god who has vanished, or was never a god in the first place. You refuse to forsake your beliefs despite all evidence, perhaps due to a need to belong, respect for tradition, or a religious experience. As a result, it is nearly impossible to convince you of your deity's absence.</Pair>
<Pair single="benefit" id="traitabjectbelief-abject-belief-fn1-benefit">You gain a +2 trait bonus on Will saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitacclimatizealignment-acclimatize-alignment-fn2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitacclimatizealignment-acclimatize-alignment-fn2"><Link to="/trait/acclimatize_alignment">⮞</Link> Acclimatize Alignment <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-2" id="main-traits_faith_all-fake-fn-2" data-hash-target to="main-traits_faith_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitacclimatizealignment-acclimatize-alignment-fn2-flavor">Like a climber ascending a mountain, you gradually grow acclimatized to an opposing planar alignment.</Pair>
<Pair single="benefit" id="traitacclimatizealignment-acclimatize-alignment-fn2-benefit">For each consecutive day you remain on a <Link to="/rule/alignment_traits">mildly aligned plane</Link> that opposes your alignment, reduce your penalty on Charisma-based checks by 1, to a minimum of 0. This does not affect the penalty from a strongly aligned plane.</Pair>
</Ability>
<Ability id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn3" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn3"><Link to="/trait/acolyte_of_apocrypha">⮞</Link> Acolyte of Apocrypha <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3" id="main-traits_faith_all-fake-fn-3" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn3-flavor">Your religious studies hinged on teachings rarely recognized by your faith.</Pair>
<Pair single="benefit" id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn3-benefit"><p>You can select one of the apocryphal subdomains detailed below, provided the subdomain is associated with your patron deity. In some cases, you can select a subdomain associated with a deity despite that deity not offering the associated domain - these exceptions are noted with an asterisk (&#42;), and you gain domain powers and domain spells from the associated domain as usual, even though your deity normally doesn't grant access to that domain.</p>
<p>When selecting a subdomain associated with two domains, a priest can choose only a subdomain that modifies a domain to which he has access.</p>
</Pair>
</Ability>
<Ability id="domainalchemy-domainartificedomainmagic" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainalchemy-domainartificedomainmagic"><Link to="/domain/alchemy">Alchemy</Link> (<Link to="/domain/artifice">Artifice</Link>/<Link to="/domain/magic">Magic</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/brigh">Brigh</Link>, <Link to="/faith/haagenti">Haagenti</Link>, <Link to="/faith/norgorber">Norgorber</Link>&#42; (Artifice only), <Link to="/faith/orgesh">Orgesh</Link>&#42; (Magic only), <Link to="/faith/qi_zhong">Qi Zhong</Link>)</Pair>
</Ability>
<Ability id="domaincaptivation" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaincaptivation"><Link to="/domain/captivation">Captivation</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/kofusachi">Kofusachi</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/shelyn">Shelyn</Link></Pair>
</Ability>
<Ability id="domainhubris-domainglorydomainnobility" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainhubris-domainglorydomainnobility"><Link to="/domain/hubris">Hubris</Link> (<Link to="/domain/glory">Glory</Link>/<Link to="/domain/nobility">Nobility</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/dispater">Dispater</Link>, <Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/jaidz">Jaidz</Link>, <Link to="/faith/lissala">Lissala</Link>, <Link to="/faith/olheon">Olheon</Link>, <Link to="/faith/ydersius">Ydersius</Link></Pair>
</Ability>
<Ability id="domaininsect" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaininsect"><Link to="/domain/insect">Insect</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/achaekek">Achaekek</Link>&#42;, <Link to="/faith/aldinach">Aldinach</Link>, <Link to="/faith/deskari">Deskari</Link>&#42;, <Link to="/faith/ghlaunder">Ghlaunder</Link>, <Link to="/faith/kitumu">Kitumu</Link>, <Link to="/faith/mazmezz">Mazmezz</Link></Pair>
</Ability>
<Ability id="domainlegend" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainlegend"><Link to="/domain/legend">Legend</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/shizuru">Shizuru</Link></Pair>
</Ability>
<Ability id="domainlightning" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainlightning"><Link to="/domain/lightning">Lightning</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/rull">Rull</Link></Pair>
</Ability>
<Ability id="domainmedicine" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainmedicine"><Link to="/domain/medicine">Medicine</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/dalenydra">Dalenydra</Link>, <Link to="/faith/immonhiel">Immonhiel</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/korada">Korada</Link>, <Link to="/faith/qi_zhong">Qi Zhong</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Pair>
</Ability>
<Ability id="domainmonsoon" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainmonsoon"><Link to="/domain/monsoon">Monsoon</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/daikitsu">Daikitsu</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/rull">Rull</Link></Pair>
</Ability>
<Ability id="domainpetrification" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainpetrification"><Link to="/domain/petrification">Petrification</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/ayrzul">Ayrzul</Link>, <Link to="/faith/minderhal">Minderhal</Link>, <Link to="/faith/soralyon">Soralyon</Link>, <Link to="/faith/xoveron">Xoveron</Link></Pair>
</Ability>
<Ability id="domainportal" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainportal"><Link to="/domain/portal">Portal</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/alseta">Alseta</Link>&#42;, <Link to="/faith/barbatos">Barbatos</Link>, <Link to="/faith/yog_sothoth">Yog-Sothoth</Link></Pair>
</Ability>
<Ability id="domainrites" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainrites"><Link to="/domain/rites">Rites</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/abraxas">Abraxas</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/nyarlathotep_black_pharaoh">Nyarlathotep</Link>, <Link to="/faith/sivanah">Sivanah</Link></Pair>
</Ability>
<Ability id="domainself-realization-domainliberationdomainstrength" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainself-realization-domainliberationdomainstrength"><Link to="/domain/self_realization">Self-Realization</Link> (<Link to="/domain/liberation">Liberation</Link>/<Link to="/domain/strength">Strength</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/falayna">Falayna</Link>, <Link to="/faith/haagenti">Haagenti</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/kurgess">Kurgess</Link>, <Link to="/faith/shei">Shei</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></Pair>
</Ability>
<Ability id="domainthirst" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainthirst"><Link to="/domain/thirst">Thirst</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/aldinach">Aldinach</Link>, <Link to="/faith/lalaci">Lalaci</Link>, <Link to="/faith/nurgal">Nurgal</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Pair>
</Ability>
<Ability id="domainthorns" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainthorns"><Link to="/domain/thorns">Thorns</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/the_green_mother">The Green Mother</Link>, <Link to="/faith/shub_niggurath">Shub-Niggurath</Link>, <Link to="/faith/zyphus">Zyphus</Link></Pair>
</Ability>
<Ability id="domaintruth" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaintruth"><Link to="/domain/truth">Truth</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/sifkesh">Sifkesh</Link>, <Link to="/faith/sivanah">Sivanah</Link></Pair>
</Ability>
<Ability id="traitapprentice-apprentice-fn3-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitapprentice-apprentice-fn3-2"><Link to="/trait/apprentice">⮞</Link> Apprentice <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.2" id="main-traits_faith_all-fake-fn-3.2" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitapprentice-apprentice-fn3-2-flavor">During your studies of The Majestic Book of the Prime Ascended, you learned some minor magical tricks.</Pair>
<Pair single="benefit" id="traitapprentice-apprentice-fn3-2-benefit">Select a single 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. You can cast this spell 1 time per day as a spell-like ability.</Pair>
</Ability>
<Ability id="traitarcanescholar-arcane-scholar-fn3-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitarcanescholar-arcane-scholar-fn3-3"><Link to="/trait/arcane_scholar">⮞</Link> Arcane Scholar <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.3" id="main-traits_faith_all-fake-fn-3.3" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitarcanescholar-arcane-scholar-fn3-3-flavor">Study of the "Prime Archmage" chapter has broadened your magical knowledge.</Pair>
<Pair single="benefit" id="traitarcanescholar-arcane-scholar-fn3-3-benefit">Choose either <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> or <Link to="/skill/spellcraft">Spellcraft</Link>; you gain a +1 trait bonus on that skill and it is a class skill for you.</Pair>
</Ability>
<Ability id="traitaspectofthequah-aspect-of-the-quah-fn4" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="traitaspectofthequah-aspect-of-the-quah-fn4"><Link to="/trait/aspect_of_the_quah">⮞</Link> Aspect of the Quah <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-4" id="main-traits_faith_all-fake-fn-4" data-hash-target to="main-traits_faith_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/class/hunter">Hunter</Link> or have access to the <em>animal aspect</em> class feature; Shoanti</Pair>
<Pair single="flavor" id="traitaspectofthequah-aspect-of-the-quah-fn4-flavor">You call upon your quah's totem to grant you power. You gain a unique totem aspect that replaces one of the <em>animal aspects</em> granted to you by the <em>animal focus</em> feature.</Pair>
<Pair single="benefit" id="traitaspectofthequah-aspect-of-the-quah-fn4-benefit">You must choose the Shoanti quah to which you belong. You gain access to the totem aspect listed for that clan, and you lose access to the animal aspect listed. Once made, this choice cannot be changed.</Pair>
</Ability>
<Ability id="cliff-shadde-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="cliff-shadde-quah">Cliff (Shadde-Quah)</Pair>
<Pair title="Frog Aspect">The creature gains a +4 competence bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to avoid falling and on Constitution checks to avoid drowning. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="emberstorm-sklar-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="emberstorm-sklar-quah">Emberstorm (Sklar-Quah)</Pair>
<Pair title="Bear Aspect">The creature gains fire <Link to="/umr/resistance">resistance</Link> 5. This increases to fire resistance 10 at 8th level and fire resistance 15 at 15th level.</Pair>
</Ability>
<Ability id="horse-shriikirri-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="horse-shriikirri-quah">Horse (Shriikirri-Quah)</Pair>
<Pair title="Owl Aspect">The creature gains a +4 competence bonus on <Link to="/skill/ride">Ride</Link> checks. This bonus increases to +6 at 8th level and +8 at 15th level.</Pair>
</Ability>
<Ability id="star-lyrune-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="star-lyrune-quah">Star (Lyrune-Quah)</Pair>
<Pair title="Falcon Aspect">The creature gains low-light vision and a +2 competence bonus on <Link to="/skill/perception">Perception</Link> checks. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="storm-tamiir-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="storm-tamiir-quah">Storm (Tamiir-Quah)</Pair>
<Pair title="Snake Aspect">The creature gains a +4 bonus on saving throws against cold dangers, disease, heat dangers, starvation, and thirst. This bonus increases to +6 at 8th level and +8 at 15th level.</Pair>
</Ability>
<Ability id="storm-roc-shundar-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="storm-roc-shundar-quah">Storm Roc (Shundar-Quah)</Pair>
<Pair title="Mouse Aspect">The creature gains a +2 enhancement bonus to Charisma. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="will-o-wisp-skoan-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="will-o-wisp-skoan-quah">Will-o'-Wisp (Skoan-Quah)</Pair>
<Pair title="Wolf Aspect">The creature gains +2 bonus on saving throws against fear effects and mind-affecting effects. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="traitauthoritarian-authoritarian-fn5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitauthoritarian-authoritarian-fn5"><Link to="/trait/authoritarian">⮞</Link> Authoritarian <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5" id="main-traits_faith_all-fake-fn-5" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitauthoritarian-authoritarian-fn5-flavor">You spent much of your youth helping the clergy of your chosen faith perform their duties, and learned from them respect for authority.</Pair>
<Pair single="benefit" id="traitauthoritarian-authoritarian-fn5-benefit"><p>As long as you are acting in the service of a liege or leader you recognize as legitimate, you gain a +2 trait bonus on saving throws against fear and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/abadar">Abadarans</Link>, <Link to="/rule/hellknights">Hellknights</Link>, Hermeans.</p>
</Pair>
</Ability>
<Ability id="traitbeaconoffaith-beacon-of-faith-fn6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbeaconoffaith-beacon-of-faith-fn6"><Link to="/trait/beacon_of_faith">⮞</Link> Beacon of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6" id="main-traits_faith_all-fake-fn-6" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitbeaconoffaith-beacon-of-faith-fn6-flavor">You wield the might of your faith with power and clarity.</Pair>
<Pair single="benefit" id="traitbeaconoffaith-beacon-of-faith-fn6-benefit">Once per day as a <strong className="hl">free action</strong>, you may treat your caster level as if it were 2 levels higher when using one of the granted powers of your domain or inquisition, or when casting one of your domain spells.</Pair>
</Ability>
<Ability id="traitbirthmark-birthmark-fn6-2-fn7-fn8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbirthmark-birthmark-fn6-2-fn7-fn8"><Link to="/trait/birthmark">⮞</Link> Birthmark <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.2" id="main-traits_faith_all-fake-fn-6.2" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7" id="main-traits_faith_all-fake-fn-7" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8" id="main-traits_faith_all-fake-fn-8" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitbirthmark-birthmark-fn6-2-fn7-fn8-benefit">You were born with a strange birthmark that looks very similar to the holy symbol of the god you chose to worship later in life. This birthmark can serve you as a divine focus for casting spells, and as a physical manifestation of your faith, and it increases your devotion to your god. You gain a +2 trait bonus on all saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitblessed-blessed-fn6-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitblessed-blessed-fn6-3"><Link to="/trait/blessed">⮞</Link> Blessed <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.3" id="main-traits_faith_all-fake-fn-6.3" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitblessed-blessed-fn6-3-flavor">Some divine agent watches over you and heeds your call.</Pair>
<Pair single="benefit" id="traitblessed-blessed-fn6-3-benefit">Once per day as a <strong className="hl">swift action</strong>, you gain a +1 trait bonus on all saving throws for 1 round.</Pair>
</Ability>
<Ability id="traitblessedtouch-blessed-touch-fn9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitblessedtouch-blessed-touch-fn9"><Link to="/trait/blessed_touch">⮞</Link> Blessed Touch <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-9" id="main-traits_faith_all-fake-fn-9" data-hash-target to="main-traits_faith_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitblessedtouch-blessed-touch-fn9-flavor">You may have been raised in a devout family, studied the divine in a formal church environment, or even learned how to combine traditional healing techniques with those of divine casters. In so doing, you have focused yourself into being the perfect vessel for your deity. Divine power flows through you like a mountain stream, making your healing touch more potent than that of others.</Pair>
<Pair single="benefit" id="traitblessedtouch-blessed-touch-fn9-benefit">You heal 1 additional point of damage when using <Link to="/ability/lay_on_hands">lay on hands</Link>, <Link to="/ability/channel_energy">channeling energy</Link>, or casting a <Link to="/main/cure_spells">cure spell</Link>.</Pair>
</Ability>
<Ability id="traitbornfree-born-free-fn1-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbornfree-born-free-fn1-2"><Link to="/trait/born_free">⮞</Link> Born Free <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.2" id="main-traits_faith_all-fake-fn-1.2" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitbornfree-born-free-fn1-2-flavor">You were introduced to an individualistic belief as a youth. Thriving under the promise of control of your own destiny, you soon began to demonstrate the truth of this ideal. Though others may mock you for your unwillingness to go along with a group or accept the easy security and comfort promised by more ecclesiastical faiths, you know that the revelations and destiny you seek can only be brought about through your own actions and individual search for meaning.</Pair>
<Pair single="benefit" id="traitbornfree-born-free-fn1-2-benefit">Once per day, after you roll a saving throw against a compulsion effect, you can choose to roll again as an <strong className="hl">immediate action</strong> before the result of the saving throw is announced. You must keep the new roll, even if it is worse.</Pair>
</Ability>
<Ability id="traitboundbyhonor-bound-by-honor-fn1-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitboundbyhonor-bound-by-honor-fn1-3"><Link to="/trait/bound_by_honor">⮞</Link> Bound by Honor <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.3" id="main-traits_faith_all-fake-fn-1.3" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitboundbyhonor-bound-by-honor-fn1-3-flavor">Your code of honor, obligations, and taboos stem from the shame of a misspent youth. Now, a personal code reminds you how to live, and you have an impressive ability to resist temptation.</Pair>
<Pair single="benefit" id="traitboundbyhonor-bound-by-honor-fn1-3-benefit">Once per day, if a mind-affecting effect would compel you to take an action that would cause you to lose <Link to="/rule/honor_points">Honor Points</Link>, you may make a new saving throw against the original DC to end the effect.</Pair>
</Ability>
<Ability id="traitcalled-called-fn5-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcalled-called-fn5-2"><Link to="/trait/called">⮞</Link> Called <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.2" id="main-traits_faith_all-fake-fn-5.2" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcalled-called-fn5-2-flavor">Your deity or a powerful spirit spoke to you when you were young, dropping cryptic hints about the important destiny that lay before you and how you must win your fights if you are to achieve your predetermined greatness.</Pair>
<Pair single="benefit" id="traitcalled-called-fn5-2-benefit"><p>Once per day upon rolling a natural 1 on an attack roll, you may reroll the die and take the second result instead.</p>
<p><strong>Suggested Characters:</strong> Oracles, paladins, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitcanonofcoin-canon-of-coin-fn10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcanonofcoin-canon-of-coin-fn10"><Link to="/trait/canon_of_coin">⮞</Link> Canon of Coin <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-10" id="main-traits_faith_all-fake-fn-10" data-hash-target to="main-traits_faith_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcanonofcoin-canon-of-coin-fn10-flavor">You find the pursuit of earning money to be a religious experience.</Pair>
<Pair single="benefit" id="traitcanonofcoin-canon-of-coin-fn10-benefit"><Link to="/skill/appraise">Appraise</Link> is a class skill for you. So long as you are carrying coins worth an amount equal to at least 100 gp per character level you have, you gain a +1 trait bonus on Will saves. This bonus increases to +2 against effects that would force you to discard, drop, or give away coins, gems, or trade goods in your possession.</Pair>
</Ability>
<Ability id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2"><Link to="/trait/caretaker">⮞</Link> Caretaker <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.4" id="main-traits_faith_all-fake-fn-6.4" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.2" id="main-traits_faith_all-fake-fn-8.2" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.2" id="main-traits_faith_all-fake-fn-7.2" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2-flavor">As the child of an herbalist or an assistant in a temple infirmary, you often had to assist in tending to the sick and wounded.</Pair>
<Pair single="benefit" id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2-benefit">You gain a +1 trait bonus on <Link to="/skill/heal">Heal</Link> checks, and Heal is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3"><Link to="/trait/child_of_the_temple">⮞</Link> Child of the Temple <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.5" id="main-traits_faith_all-fake-fn-6.5" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.3" id="main-traits_faith_all-fake-fn-7.3" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.3" id="main-traits_faith_all-fake-fn-8.3" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3-flavor">You have long served at a temple in a city, where you picked up on many of the nobility's customs in addition to spending much time in the temple libraries studying your faith.</Pair>
<Pair single="benefit" id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchosenofiomedae-chosen-of-iomedae-fn9-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchosenofiomedae-chosen-of-iomedae-fn9-2"><Link to="/trait/chosen_of_iomedae">⮞</Link> Chosen of Iomedae <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-9.2" id="main-traits_faith_all-fake-fn-9.2" data-hash-target to="main-traits_faith_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchosenofiomedae-chosen-of-iomedae-fn9-2-flavor">At your birth, your parents dedicated your soul to <Link to="/faith/iomedae">Iomedae</Link> to mold into a sword of her light. The goddess blessed you, granting you a gift of light to brighten your path through darkness and a fine sword with which to spread her will.</Pair>
<Pair single="benefit" id="traitchosenofiomedae-chosen-of-iomedae-fn9-2-benefit">You may cast <Link to="/spell/light">light</Link> once per day as a spell-like ability (caster level 1st), and you begin play with a <Link to="/rule/masterwork_w">masterwork</Link> <Link to="/eq-weapon/longsword">longsword</Link>. In addition, whenever <em>light</em> is cast upon this sword, the radius of light and its duration is doubled.</Pair>
</Ability>
<Ability id="traitcovertchanneler-covert-channeler-fn11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcovertchanneler-covert-channeler-fn11"><Link to="/trait/covert_channeler">⮞</Link> Covert Channeler <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-11" id="main-traits_faith_all-fake-fn-11" data-hash-target to="main-traits_faith_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcovertchanneler-covert-channeler-fn11-flavor">Your mentor in the <Link to="/rule/wagons_of_light">Wagons of Light</Link> taught you to hide holy symbols quickly.</Pair>
<Pair single="benefit" id="traitcovertchanneler-covert-channeler-fn11-benefit">You can draw or stow a holy symbol as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="traitcrisisoffaith-crisis-of-faith-fn1-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcrisisoffaith-crisis-of-faith-fn1-4"><Link to="/trait/crisis_of_faith">⮞</Link> Crisis of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.4" id="main-traits_faith_all-fake-fn-1.4" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcrisisoffaith-crisis-of-faith-fn1-4-flavor">You were raised to uphold a specific set of tenets, and you never had reason to doubt their veracity. Recent events, however, have undermined that certainty, and you now find yourself wondering if any of the universal truths you once believed in can actually hold up to scrutiny. Perhaps you witnessed a mentor or church official fall from grace or violate your shared tenets. Maybe you watched a friend injured terribly despite (or because of) her pure faith. Whatever the case, your confidence was shaken.</Pair>
<Pair single="benefit" id="traitcrisisoffaith-crisis-of-faith-fn1-4-benefit"><p>Your shaken confidence grants you a +1 trait bonus on saving throws against illusions.</p>
<p>You may replace any other faith trait with the Crisis of Faith trait whenever you gain a level. This replacement is permanent until you receive <Link to="/spell/atonement">atonement</Link>.</p>
</Pair>
</Ability>
<Ability id="traitcrusader-crusader-fn3-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcrusader-crusader-fn3-4"><Link to="/trait/crusader">⮞</Link> Crusader <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.4" id="main-traits_faith_all-fake-fn-3.4" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcrusader-crusader-fn3-4-flavor">From studying "Prime Commander" and reading accounts of the battles in the Worldwound, you have trained to be a crusader against demonic forces.</Pair>
<Pair single="benefit" id="traitcrusader-crusader-fn3-4-benefit">You gain a +1 trait bonus on attack rolls against outsiders with the chaotic subtype.</Pair>
</Ability>
<Ability id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5"><Link to="/trait/darkest_before_dawn">⮞</Link> Darkest Before Dawn <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.5" id="main-traits_faith_all-fake-fn-3.5" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5-flavor">Your devotion sustains you when others would fall to despair.</Pair>
<Pair single="benefit" id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5-benefit">You gain a +2 trait bonus on saving throws against spells with the emotion, fear, or pain descriptor. Once per day, you can increase this bonus to +4 for a single save, but you must make this decision before you attempt the saving throw.</Pair>
</Ability>
<Ability id="traitdeepfaith-deep-faith-fn12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdeepfaith-deep-faith-fn12"><Link to="/trait/deep_faith">⮞</Link> Deep Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-12" id="main-traits_faith_all-fake-fn-12" data-hash-target to="main-traits_faith_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdeepfaith-deep-faith-fn12-flavor">Your deity was born of the depths, and you're a child of such realms.</Pair>
<Pair single="benefit" id="traitdeepfaith-deep-faith-fn12-benefit">Whenever you cast a spell granted by the <Link to="/domain/earth">earth</Link> domain (or associated subdomains) while in the Darklands, that spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
<Ability id="traitdefymadness-defy-madness-fn13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdefymadness-defy-madness-fn13"><Link to="/trait/defy_madness">⮞</Link> Defy Madness <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13" id="main-traits_faith_all-fake-fn-13" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitdefymadness-defy-madness-fn13-flavor">Your direct involvement with supernatural and alien forces has left you less vulnerable to the insanity they cause.</Pair>
<Pair single="benefit" id="traitdefymadness-defy-madness-fn13-benefit">You gain a +1 trait bonus on any saving throws against confusion, insanity, madness, and <Link to="/rule/wisdom_damage">Wisdom damage and drain</Link>.</Pair>
</Ability>
<Ability id="traitdevotedhealer-devoted-healer-fn5-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevotedhealer-devoted-healer-fn5-3"><Link to="/trait/devoted_healer">⮞</Link> Devoted Healer <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.3" id="main-traits_faith_all-fake-fn-5.3" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevotedhealer-devoted-healer-fn5-3-flavor">Raised in the company of skilled healers, you were always encouraged to devote your time and energy to the welfare of others.</Pair>
<Pair single="benefit" id="traitdevotedhealer-devoted-healer-fn5-3-benefit"><p>Whenever you take 20 on a <Link to="/skill/heal">Heal</Link> check to treat deadly wounds, you restore an additional 1d4 hit points to those you aid.</p>
<p><strong>Suggested Characters:</strong> Battle clerics, <Link to="/faith/iomedae">Iomedaeans</Link>, Kellids.</p>
</Pair>
</Ability>
<Ability id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4"><Link to="/trait/devotee_of_the_green">⮞</Link> Devotee of the Green <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.6" id="main-traits_faith_all-fake-fn-6.6" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.4" id="main-traits_faith_all-fake-fn-8.4" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.4" id="main-traits_faith_all-fake-fn-7.4" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4-flavor">Your faith in the natural world or one of the gods of nature makes it easy for you to pick up on related concepts.</Pair>
<Pair single="benefit" id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> and <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdevoutvisionary-devout-visionary-fn1-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevoutvisionary-devout-visionary-fn1-5"><Link to="/trait/devout_visionary">⮞</Link> Devout Visionary <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.5" id="main-traits_faith_all-fake-fn-1.5" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevoutvisionary-devout-visionary-fn1-5-flavor">As a child, you had a strange vision while suffering from a terrible illness, and only found your way back to the mundane world by following the call of a spiritual leader-perhaps a shaman's drum or a druid's lilting poetry. Since then, you have studied symbolism and dreams in the hope that you might understand your own vision, though your lessons prove just as helpful to others.</Pair>
<Pair single="benefit" id="traitdevoutvisionary-devout-visionary-fn1-5-benefit">You gain a +1 trait bonus on Will saving throws against spells and effects that grant the <Link to="/misc/confused">confused</Link> or <Link to="/misc/dazed">dazed</Link> condition. Once per day as a <strong className="hl">full-round action</strong>, you may grant an adjacent ally a new Will saving throw to end an effect that grants the confused or dazed condition.</Pair>
</Ability>
<Ability id="traitdisdainfuldefender-disdainful-defender-fn6-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdisdainfuldefender-disdainful-defender-fn6-7"><Link to="/trait/disdainful_defender">⮞</Link> Disdainful Defender <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.7" id="main-traits_faith_all-fake-fn-6.7" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdisdainfuldefender-disdainful-defender-fn6-7-flavor">You are resistant to the magic of other faiths.</Pair>
<Pair single="benefit" id="traitdisdainfuldefender-disdainful-defender-fn6-7-benefit">You gain a +2 trait bonus on all Will saves you attempt against divine spells. This bonus does not apply against divine spells cast by a caster who worships the same deity you do.</Pair>
</Ability>
<Ability id="traitdivineconfidante-divine-confidante-fn14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdivineconfidante-divine-confidante-fn14"><Link to="/trait/divine_confidante">⮞</Link> Divine Confidante <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-14" id="main-traits_faith_all-fake-fn-14" data-hash-target to="main-traits_faith_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdivineconfidante-divine-confidante-fn14-flavor">You were inspired with the reverence offered by worshipers to priests and other spiritual leaders, so you assisted them.</Pair>
<Pair single="benefit" id="traitdivineconfidante-divine-confidante-fn14-benefit">You gain a +3 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to get hunches about those who discuss matters of faith, mythology, morality, religion, or the Outer Planes with you. Sense Motive is a class skill for you.</Pair>
</Ability>
<Ability id="traitdivinedenier-divine-denier-fn1-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdivinedenier-divine-denier-fn1-6"><Link to="/trait/divine_denier">⮞</Link> Divine Denier <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.6" id="main-traits_faith_all-fake-fn-1.6" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdivinedenier-divine-denier-fn1-6-flavor">You can't bring yourself to accept the authority of the gods, even though friends might hound you relentlessly to change your ways. Perhaps you're a Rahadoumi objecting on ideological grounds, or perhaps you just want to be left alone. Your doubt causes you to shrug off divine magic more quickly than others.</Pair>
<Pair single="benefit" id="traitdivinedenier-divine-denier-fn1-6-benefit">Once per day when you are affected by a divine spell, you may reduce that spell's duration to half (minimum 1 round) for you alone.</Pair>
</Ability>
<Ability id="traitdogged-dogged-fn4-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdogged-dogged-fn4-2"><Link to="/trait/dogged">⮞</Link> Dogged <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-4.2" id="main-traits_faith_all-fake-fn-4.2" data-hash-target to="main-traits_faith_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdogged-dogged-fn4-2-flavor">Drawing inspiration from the Cult of the Failed, you refuse to let setbacks stop you, no matter how disastrous.</Pair>
<Pair single="benefit" id="traitdogged-dogged-fn4-2-benefit">Once per day when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.</Pair>
</Ability>
<Ability id="traitearthbound-earthbound-fn15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitearthbound-earthbound-fn15"><Link to="/trait/earthbound">⮞</Link> Earthbound <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-15" id="main-traits_faith_all-fake-fn-15" data-hash-target to="main-traits_faith_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="traitearthbound-earthbound-fn15-benefit">Your druid spells use a handful of earth or sand as a divine focus in addition to the normal components. While you are touching the ground, you add a +2 trait bonus to saving throw DCs and on caster level checks to overcome spell resistance for all spells you cast against creatures with the <Link to="/subtype/air">air</Link> subtype.</Pair>
</Ability>
<Ability id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5"><Link to="/trait/ease_of_faith">⮞</Link> Ease of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.8" id="main-traits_faith_all-fake-fn-6.8" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.5" id="main-traits_faith_all-fake-fn-7.5" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.5" id="main-traits_faith_all-fake-fn-8.5" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5-flavor">Your mentor, the person who invested your faith in you from an early age, took steps to ensure you understood that what powers your divine magic is no different from that which powers the magic of other religions. This philosophy makes it easier for you to interact with others who may not share your views.</Pair>
<Pair single="benefit" id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5-benefit">You gain a +1 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traiteldritchsmith-eldritch-smith-fn15-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteldritchsmith-eldritch-smith-fn15-2"><Link to="/trait/eldritch_smith">⮞</Link> Eldritch Smith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-15.2" id="main-traits_faith_all-fake-fn-15.2" data-hash-target to="main-traits_faith_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traiteldritchsmith-eldritch-smith-fn15-2-flavor">You are learned in the secret lore of the forge, rituals handed down for generations that some say come from <Link to="/faith/torag">Torag</Link> himself.</Pair>
<Pair single="benefit" id="traiteldritchsmith-eldritch-smith-fn15-2-benefit">Whenever you use the <Link to="/skill/craft">Craft</Link> skill or a crafting feat to make a stone or metal item, you reduce the cost of making the item by 5%. This includes metal-headed weapons with nonmetal parts, such as axes and spears.</Pair>
</Ability>
<Ability id="traitempyrealpantheon-empyreal-pantheon-fn16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitempyrealpantheon-empyreal-pantheon-fn16"><Link to="/trait/empyreal_pantheon">⮞</Link> Empyreal Pantheon <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-16" id="main-traits_faith_all-fake-fn-16" data-hash-target to="main-traits_faith_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitempyrealpantheon-empyreal-pantheon-fn16-flavor">Your faith in the empyreal lords accommodates numerous gods, and you are gifted at adapting their wide variety of focuses and lessons to your own life.</Pair>
<Pair single="benefit" id="traitempyrealpantheon-empyreal-pantheon-fn16-benefit">Select either the law or chaos alignment descriptor. You may cast spells with that descriptor, even if your alignment or that of your god would normally not allow it. Doing so applies the good descriptor to the spell if it does not already apply.</Pair>
</Ability>
<Ability id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2"><Link to="/trait/exalted_of_the_society">⮞</Link> Exalted of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-17" id="main-traits_faith_all-fake-fn-17" data-hash-target to="main-traits_faith_all-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.2" id="main-traits_faith_all-fake-fn-13.2" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2-flavor">The vaults of the Grand Lodge in Absalom contain many secrets of the divine powers of the gods, and you have studied your deity extensively.</Pair>
<Pair single="benefit" id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2-benefit">You may <Link to="/ability/channel_energy">channel energy</Link> one additional time per day.</Pair>
</Ability>
<Ability id="traiteyeforthewondrous-eye-for-the-wondrous-fn18" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteyeforthewondrous-eye-for-the-wondrous-fn18"><Link to="/trait/eye_for_the_wondrous">⮞</Link> Eye for the Wondrous <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-18" id="main-traits_faith_all-fake-fn-18" data-hash-target to="main-traits_faith_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Katapesh</Pair>
<Pair single="flavor" id="traiteyeforthewondrous-eye-for-the-wondrous-fn18-flavor">Your experience with magic items clues you in to their properties more quickly than others.</Pair>
<Pair single="benefit" id="traiteyeforthewondrous-eye-for-the-wondrous-fn18-benefit">You can identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link> in 1 round.</Pair>
</Ability>
<Ability id="traitfaithfulfeedback-faithful-feedback-fn13-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfaithfulfeedback-faithful-feedback-fn13-3"><Link to="/trait/faithful_feedback">⮞</Link> Faithful Feedback <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.3" id="main-traits_faith_all-fake-fn-13.3" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must have a religion</Pair>
<Pair single="flavor" id="traitfaithfulfeedback-faithful-feedback-fn13-3-flavor">A shared religious fervor makes your healing magic more effective.</Pair>
<Pair single="benefit" id="traitfaithfulfeedback-faithful-feedback-fn13-3-benefit">Whenever you cast a spell belonging to the healing subschool on someone of your religion, increase the hit points healed by +1.</Pair>
</Ability>
<Ability id="traitfatesfavored-fates-favored-fn6-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfatesfavored-fates-favored-fn6-9"><Link to="/trait/fates_favored">⮞</Link> Fate's Favored <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.9" id="main-traits_faith_all-fake-fn-6.9" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfatesfavored-fates-favored-fn6-9-flavor">The fates watch over you.</Pair>
<Pair single="benefit" id="traitfatesfavored-fates-favored-fn6-9-benefit">Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.</Pair>
</Ability>
<Ability id="traitfearlessdefiance-fearless-defiance-fn6-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfearlessdefiance-fearless-defiance-fn6-10"><Link to="/trait/fearless_defiance">⮞</Link> Fearless Defiance <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.10" id="main-traits_faith_all-fake-fn-6.10" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfearlessdefiance-fearless-defiance-fn6-10-flavor">Upon overcoming your fear, you become a scourge to your enemies.</Pair>
<Pair single="benefit" id="traitfearlessdefiance-fearless-defiance-fn6-10-benefit">You gain a +1 trait bonus on all saving throws against fear effects. In addition, if you successfully save against such an effect, you receive a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> for 1 round.</Pair>
</Ability>
<Ability id="traitfirstmemories-first-memories-fn19" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfirstmemories-first-memories-fn19"><Link to="/trait/first_memories">⮞</Link> First Memories <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-19" id="main-traits_faith_all-fake-fn-19" data-hash-target to="main-traits_faith_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="traitfirstmemories-first-memories-fn19-flavor">For your whole life, you've felt there was a world just beyond the fabric of the material objects around you, and sometimes you can hear the north wind calling you or smell the dread taint of polluted water before you taste it.</Pair>
<Pair single="benefit" id="traitfirstmemories-first-memories-fn19-benefit">You do not gain the normal list of spell-like abilities for the <em>gnome magic</em> racial trait. Instead, if you have a Wisdom of 11 of higher, you gain the following spell-like abilities: 1/day-<Link to="/spell/detect_poison">detect poison</Link>, <Link to="/spell/know_direction">know direction</Link>, <Link to="/spell/stabilize">stabilize</Link>, and <Link to="/spell/speak_with_animals">speak with animals</Link>. The caster level for these effects is equal to your character level. The DC for these spells is equal to 10 + the spell's level + your Wisdom modifier.</Pair>
</Ability>
<Ability id="traitfocuseddisciple-focused-disciple-fn6-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfocuseddisciple-focused-disciple-fn6-11"><Link to="/trait/focused_disciple">⮞</Link> Focused Disciple <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.11" id="main-traits_faith_all-fake-fn-6.11" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfocuseddisciple-focused-disciple-fn6-11-flavor">When weaker wills falter, you keep a clear mind.</Pair>
<Pair single="benefit" id="traitfocuseddisciple-focused-disciple-fn6-11-benefit">You gain a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitgodclawdisciple-godclaw-disciple-fn20" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitgodclawdisciple-godclaw-disciple-fn20"><Link to="/trait/godclaw_disciple">⮞</Link> Godclaw Disciple <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-20" id="main-traits_faith_all-fake-fn-20" data-hash-target to="main-traits_faith_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitgodclawdisciple-godclaw-disciple-fn20-flavor">You worship the amalgamation of lawful deities known as <Link to="/main/faiths_pantheons">the Godclaw</Link>.</Pair>
<Pair single="benefit" id="traitgodclawdisciple-godclaw-disciple-fn20-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks related to lawful deities, their clergy, their mythology, and their tenets. Additionally, Knowledge (religion) is a class skill for you.</Pair>
</Ability>
<Ability id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4"><Link to="/trait/greater_adept_of_the_society">⮞</Link> Greater Adept of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-17.2" id="main-traits_faith_all-fake-fn-17.2" data-hash-target to="main-traits_faith_all-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.4" id="main-traits_faith_all-fake-fn-13.4" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4-flavor">Months of meditation and practice with the greatest spellcasters of the Society have given you an increased capacity for arcane knowledge.</Pair>
<Pair single="benefit" id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4-benefit">You gain one additional 0-level spell slot.</Pair>
</Ability>
<Ability id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5"><Link to="/trait/havoc_of_the_society">⮞</Link> Havoc of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-17.3" id="main-traits_faith_all-fake-fn-17.3" data-hash-target to="main-traits_faith_all-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.5" id="main-traits_faith_all-fake-fn-13.5" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5-flavor">Through countless hours studying vast libraries of arcane power, you have learned how to cause greater damage to your foes.</Pair>
<Pair single="benefit" id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5-benefit">Whenever you cast a spell that deals damage, you gain a +1 trait bonus to the total damage dealt. This damage is considered force damage regardless of the type of damage dealt by the spell.</Pair>
</Ability>
<Ability id="traitheedfulreadiness-heedful-readiness-fn3-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitheedfulreadiness-heedful-readiness-fn3-6"><Link to="/trait/heedful_readiness">⮞</Link> Heedful Readiness <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.6" id="main-traits_faith_all-fake-fn-3.6" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitheedfulreadiness-heedful-readiness-fn3-6-flavor">Your years of meditation and mindfulness allow you to act correctly on a moment's notice.</Pair>
<Pair single="benefit" id="traitheedfulreadiness-heedful-readiness-fn3-6-benefit">Once per day, you can add your Wisdom modifier to an initiative check.</Pair>
</Ability>
<Ability id="traithellknightinquisitor-hellknight-inquisitor-fn20-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithellknightinquisitor-hellknight-inquisitor-fn20-2"><Link to="/trait/hellknight_inquisitor">⮞</Link> Hellknight Inquisitor <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-20.2" id="main-traits_faith_all-fake-fn-20.2" data-hash-target to="main-traits_faith_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traithellknightinquisitor-hellknight-inquisitor-fn20-2-benefit">If you are an inquisitor, you can select any <Link to="/ability/inquisitions">inquisition</Link> associated with your preferred <Link to="/rule/hellknights">Hellknight</Link> order, as long as you and your patron deity are of a lawful alignment. Additionally, you gain a +1 trait bonus on saving throws against spells and effects with the chaos descriptor.</Pair>
</Ability>
<Ability id="traithereticscaution-heretics-caution-fn4-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithereticscaution-heretics-caution-fn4-3"><Link to="/trait/heretics_caution">⮞</Link> Heretic's Caution <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-4.3" id="main-traits_faith_all-fake-fn-4.3" data-hash-target to="main-traits_faith_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithereticscaution-heretics-caution-fn4-3-flavor">You were raised in a faith that did not center on a traditional god or that followed a heretical interpretation of a traditional deity. You learned to deflect attention, especially from ecclesiastical figures.</Pair>
<Pair single="benefit" id="traithereticscaution-heretics-caution-fn4-3-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks. This bonus increases to +3 on Bluff checks opposed by religious authorities' Sense Motive checks.</Pair>
</Ability>
<Ability id="traithiddenfaith-hidden-faith-fn14-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithiddenfaith-hidden-faith-fn14-2"><Link to="/trait/hidden_faith">⮞</Link> Hidden Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-14.2" id="main-traits_faith_all-fake-fn-14.2" data-hash-target to="main-traits_faith_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithiddenfaith-hidden-faith-fn14-2-flavor">You were raised in a religion forbidden by your government, and draw strength from your hidden faith.</Pair>
<Pair single="benefit" id="traithiddenfaith-hidden-faith-fn14-2-benefit">You gain a +1 trait bonus on saving throws against the divine spells of creatures that worship a god other than your own.</Pair>
</Ability>
<Ability id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6"><Link to="/trait/history_of_heresy">⮞</Link> History of Heresy <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.12" id="main-traits_faith_all-fake-fn-6.12" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.6" id="main-traits_faith_all-fake-fn-8.6" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.6" id="main-traits_faith_all-fake-fn-7.6" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6-flavor">You were raised with heretical views that have made it difficult for you to accept most religious beliefs and often caused you or those you love to be treated as pariahs. As a result, you have turned your back on religious teachings.</Pair>
<Pair single="benefit" id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6-benefit">As long as you do not possess any levels in a class that grants divine spellcasting power, you gain a +1 trait bonus on all saving throws against divine spells.</Pair>
</Ability>
<Ability id="traithonest-honest-fn5-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithonest-honest-fn5-4"><Link to="/trait/honest">⮞</Link> Honest <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.4" id="main-traits_faith_all-fake-fn-5.4" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithonest-honest-fn5-4-flavor">A religious mentor instilled in you a sense of uncompromising integrity. You often speak your mind in defiance of any fear or hatred it might earn you, a habit that inspires others to trust you.</Pair>
<Pair single="benefit" id="traithonest-honest-fn5-4-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. This bonus increases to +2 when the Diplomacy check is made to influence those who are already friendly or helpful toward you.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/diabolist">Diabolists</Link>, paladins, <Link to="/faith/sarenrae">Sarenrae</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitimperfectrecall-imperfect-recall-fn4-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitimperfectrecall-imperfect-recall-fn4-4"><Link to="/trait/imperfect_recall">⮞</Link> Imperfect Recall <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-4.4" id="main-traits_faith_all-fake-fn-4.4" data-hash-target to="main-traits_faith_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitimperfectrecall-imperfect-recall-fn4-4-flavor">Your belief in reincarnation, as taught by the Sangpotshi philosophy and in lands that were once Imperial Lung Wa, has been reinforced by personal experience. In moments of great stress, you sometimes experience flashes of deja vu in which you recall information you don't remember ever having known.</Pair>
<Pair single="benefit" id="traitimperfectrecall-imperfect-recall-fn4-4-benefit">Once per day while you are in danger or distracted, you gain a +3 bonus on a single <Link to="/skill/knowledge">Knowledge</Link> skill check.</Pair>
</Ability>
<Ability id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7"><Link to="/trait/indomitable_faith">⮞</Link> Indomitable Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.13" id="main-traits_faith_all-fake-fn-6.13" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.7" id="main-traits_faith_all-fake-fn-7.7" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.7" id="main-traits_faith_all-fake-fn-8.7" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7-flavor">You were born in a region where your faith was not popular, but you still have never abandoned it. Your constant struggle to maintain your own faith has bolstered your drive.</Pair>
<Pair single="benefit" id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7-benefit">You gain a +1 trait bonus on Will saves.</Pair>
</Ability>
<Ability id="traitinhabitantofillusion-inhabitant-of-illusion-fn21" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitinhabitantofillusion-inhabitant-of-illusion-fn21"><Link to="/trait/inhabitant_of_illusion">⮞</Link> Inhabitant of Illusion <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-21" id="main-traits_faith_all-fake-fn-21" data-hash-target to="main-traits_faith_all-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Kyonin</Pair>
<Pair title="Requirements" hl>Ascoiated with the court of Kyonin</Pair>
<Pair single="flavor" id="traitinhabitantofillusion-inhabitant-of-illusion-fn21-flavor">Your experience with illusions allows you to discern them easily.</Pair>
<Pair single="benefit" id="traitinhabitantofillusion-inhabitant-of-illusion-fn21-benefit">When you first encounter an illusion, you can attempt a Will saving throw with a -2 penalty to disbelieve it, even if you don't suspect the illusion. The GM rolls this saving throw in secret.</Pair>
</Ability>
<Ability id="traitinspired-inspired-fn6-14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitinspired-inspired-fn6-14"><Link to="/trait/inspired">⮞</Link> Inspired <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.14" id="main-traits_faith_all-fake-fn-6.14" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitinspired-inspired-fn6-14-flavor">A positive force, philosophy, or divine presence fills you with hope, and is a guiding force of inspiration.</Pair>
<Pair single="benefit" id="traitinspired-inspired-fn6-14-benefit">Once per day as a <strong className="hl">free action</strong>, roll twice and take the better result on a skill check or ability check.</Pair>
</Ability>
<Ability id="traitirrepressible-irrepressible-fn5-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitirrepressible-irrepressible-fn5-5"><Link to="/trait/irrepressible">⮞</Link> Irrepressible <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.5" id="main-traits_faith_all-fake-fn-5.5" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitirrepressible-irrepressible-fn5-5-flavor">Your hope for a brighter future blessed by the gods, combined with your powerful personality, allows you to force your way free of spells that cloud the mind.</Pair>
<Pair single="benefit" id="traitirrepressible-irrepressible-fn5-5-benefit"><p>You can use your Charisma modifier in place of your Wisdom modifier when attempting Will saving throws against charm and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/race/gnome">Gnomes</Link>, Keleshites, <Link to="/faith/shelyn">Shelyn</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitirreverent-irreverent-fn22" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitirreverent-irreverent-fn22"><Link to="/trait/irreverent">⮞</Link> Irreverent <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-22" id="main-traits_faith_all-fake-fn-22" data-hash-target to="main-traits_faith_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitirreverent-irreverent-fn22-flavor">You are suspicious of those who lead spiritual lives and are quick to seek out the smallest hypocrisy in even the most pious individuals. Of course, you are also keenly aware of the power the faithful can draw from their worship, and you are stubbornly resistant to it.</Pair>
<Pair single="benefit" id="traitirreverent-irreverent-fn22-benefit">You gain a +2 trait bonus on saving throws against divine spells that target only you.</Pair>
</Ability>
<Ability id="traitjinxeater-jinx-eater-fn23" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitjinxeater-jinx-eater-fn23"><Link to="/trait/jinx_eater">⮞</Link> Jinx Eater <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-23" id="main-traits_faith_all-fake-fn-23" data-hash-target to="main-traits_faith_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>The Shackles</Pair>
<Pair title="Requirements" hl><Link to="/race/tengu">Tengu</Link></Pair>
<Pair single="flavor" id="traitjinxeater-jinx-eater-fn23-flavor">Your presence dampens curses and other ill effects.</Pair>
<Pair single="benefit" id="traitjinxeater-jinx-eater-fn23-benefit">You gain a +1 trait bonus on saves against curses, including the hex class ability of shamans and witches. Once per day, you can grant this bonus to all allies within 30 feet for 1 round as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="traitkalistocraticprophecy-kalistocratic-prophecy-fn14-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitkalistocraticprophecy-kalistocratic-prophecy-fn14-3"><Link to="/trait/kalistocratic_prophecy">⮞</Link> Kalistocratic Prophecy <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-14.3" id="main-traits_faith_all-fake-fn-14.3" data-hash-target to="main-traits_faith_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitkalistocraticprophecy-kalistocratic-prophecy-fn14-3-benefit">You were raised under the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, and were inspired to seize upon an untapped business opportunity. Up to once per week, when you work to advance this opportunity with at least 1 day of effort, you can attempt an appropriate <Link to="/skill/profession">Profession</Link> check to <Link to="/rule/gaining_capital">earn money or gain capital</Link> using the downtime rules with a +2 trait bonus. In the event of a failed check, your opportunity is discovered by rivals and you cannot employ this trait for 1 month while you look for a new opportunity.</Pair>
</Ability>
<Ability id="traitlightinthedarkness-light-in-the-darkness-fn12-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitlightinthedarkness-light-in-the-darkness-fn12-2"><Link to="/trait/light_in_the_darkness">⮞</Link> Light in the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-12.2" id="main-traits_faith_all-fake-fn-12.2" data-hash-target to="main-traits_faith_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitlightinthedarkness-light-in-the-darkness-fn12-2-flavor">You're destined to bring light to the darkness and expunge the faithless from the deep.</Pair>
<Pair single="benefit" id="traitlightinthedarkness-light-in-the-darkness-fn12-2-benefit">Whenever you cast a spell granted by the <Link to="/domain/sun">sun</Link> domain (or associated subdomains) while in the Darklands, the spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
<Ability id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15"><Link to="/trait/loyalty_across_lifetimes">⮞</Link> Loyalty across Lifetimes <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.15" id="main-traits_faith_all-fake-fn-6.15" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15-flavor">You and your eidolon share a link that seems to span multiple lifetimes.</Pair>
<Pair single="benefit" id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15-benefit">Your eidolon treats its Constitution score as if it were 2 points higher for the purposes of determining when its negative hit point total sends it back to its home plane. In addition, your eidolon gains a +1 trait bonus on Will saves against enchantment spells and effects.</Pair>
</Ability>
<Ability id="traitluciddreamer-lucid-dreamer-fn13-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitluciddreamer-lucid-dreamer-fn13-6"><Link to="/trait/lucid_dreamer">⮞</Link> Lucid Dreamer <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.6" id="main-traits_faith_all-fake-fn-13.6" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Varisian wanderers or Wonderseekers</Pair>
<Pair single="flavor" id="traitluciddreamer-lucid-dreamer-fn13-6-flavor">Your dreams are a special place of power that only you get to enjoy; driving away threats to your subconscious is as easy as slamming a door.</Pair>
<Pair single="benefit" id="traitluciddreamer-lucid-dreamer-fn13-6-benefit">You receive a +1 trait bonus on <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks and a +2 trait bonus on Will saves against effects on your dreaming mind or subconscious, such as a <Link to="/monster/night_hag">night hag's</Link> dream haunting ability, the <Link to="/spell/nightmare">nightmare</Link> spell, and illusions of the <Link to="/spelldef/phantasm">phantasm</Link> subschool.</Pair>
</Ability>
<Ability id="traitmartialmanuscript-martial-manuscript-fn6-16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmartialmanuscript-martial-manuscript-fn6-16"><Link to="/trait/martial_manuscript">⮞</Link> Martial Manuscript <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.16" id="main-traits_faith_all-fake-fn-6.16" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmartialmanuscript-martial-manuscript-fn6-16-flavor">You either carry or have memorized a sacred text from your school, temple, or monastery, and its wisdom gives you insight that makes your attacks more devastating.</Pair>
<Pair single="benefit" id="traitmartialmanuscript-martial-manuscript-fn6-16-benefit">You gain a +2 trait bonus on rolls to confirm critical hits when you're using an unarmed strike or monk weapon.</Pair>
</Ability>
<Ability id="traitmasked-masked-fn3-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmasked-masked-fn3-7"><Link to="/trait/masked">⮞</Link> Masked <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.7" id="main-traits_faith_all-fake-fn-3.7" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmasked-masked-fn3-7-flavor">You learned from "Prime Conspirator" that keeping secrets often means hiding your true identity.</Pair>
<Pair single="benefit" id="traitmasked-masked-fn3-7-benefit">Once per day, when attempting a <Link to="/skill/disguise">Disguise</Link> check, roll twice and take the better result.</Pair>
</Ability>
<Ability id="traitmeditativerest-meditative-rest-fn3-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmeditativerest-meditative-rest-fn3-8"><Link to="/trait/meditative_rest">⮞</Link> Meditative Rest <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.8" id="main-traits_faith_all-fake-fn-3.8" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmeditativerest-meditative-rest-fn3-8-benefit">When you rest, you ignore the first time you are interrupted during that rest for the purposes of determining how long you need to rest in full to regain the capacity to regain spells, provided the interruption lasts no more than 15 minutes. If you cast spells during this interruption, you don't count these against your daily limit of spells when you wake and prepare spells.</Pair>
</Ability>
<Ability id="traitmonastic-monastic-fn1-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmonastic-monastic-fn1-7"><Link to="/trait/monastic">⮞</Link> Monastic <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.7" id="main-traits_faith_all-fake-fn-1.7" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmonastic-monastic-fn1-7-flavor">Either your parents sent you to be raised in a monastery, or you traveled there yourself later in life in order to escape the conflict and distractions of the greater world. There you learned to eschew the material concerns that plague so many and cloud their minds, instead embracing an ascetic lifestyle. You readily let go and step away from trouble, free from any tie or baggage that might slow your path to enlightenment-figuratively or literally.</Pair>
<Pair single="benefit" id="traitmonastic-monastic-fn1-7-benefit">Once per day as a <strong className="hl">swift action</strong>, you gain a +1 trait bonus to Armor Class as long as you are wearing no armor, not using a shield, carrying a light load, and have nothing in your hands. This bonus lasts for 1 minute.</Pair>
</Ability>
<Ability id="traitmysteryinitiate-mystery-initiate-fn5-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmysteryinitiate-mystery-initiate-fn5-6"><Link to="/trait/mystery_initiate">⮞</Link> Mystery Initiate <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.6" id="main-traits_faith_all-fake-fn-5.6" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmysteryinitiate-mystery-initiate-fn5-6-flavor">You were initiated into a mystery cult in your youth, and learned secrets that turned your understanding of your faith and the world on its head. This experience has given you a knack for lateral thinking.</Pair>
<Pair single="benefit" id="traitmysteryinitiate-mystery-initiate-fn5-6-benefit"><p>Once per day, you may reroll any <Link to="/skill/knowledge">Knowledge</Link> skill check. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/mystery_cultist">Mystery cultists</Link>, <Link to="/faith/nethys">Nethys</Link> worshipers, <Link to="/faith/norgorber">Norgorber</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitnaturalritualist-natural-ritualist-fn4-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturalritualist-natural-ritualist-fn4-5"><Link to="/trait/natural_ritualist">⮞</Link> Natural Ritualist <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-4.5" id="main-traits_faith_all-fake-fn-4.5" data-hash-target to="main-traits_faith_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitnaturalritualist-natural-ritualist-fn4-5-flavor">You venerate nature, either by paying homage to your Shoanti totem spirit or by appeasing the <Link to="/family/kami">kami</Link> around you in accordance with Tamashigo. In return, the spirits bless your path.</Pair>
<Pair single="benefit" id="traitnaturalritualist-natural-ritualist-fn4-5-benefit">Once per week, you can build a small shrine of natural materials and pay your respects in a ritual that takes 15 minutes. Spellcasters can do this as part of their daily spell preparation. You gain a +2 trait bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> and <Link to="/skill/survival">Survival</Link> checks for 24 hours.</Pair>
</Ability>
<Ability id="traitnaturallygifted-naturally-gifted-fn19-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturallygifted-naturally-gifted-fn19-2"><Link to="/trait/naturally_gifted">⮞</Link> Naturally Gifted <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-19.2" id="main-traits_faith_all-fake-fn-19.2" data-hash-target to="main-traits_faith_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="traitnaturallygifted-naturally-gifted-fn19-2-flavor">For unknown reasons, you have deeper reserves of magical energy than those around you. Perhaps you are descended from a family of powerful arcane casters, or maybe you believe this trait marks you as destined for magical greatness.</Pair>
<Pair single="benefit" id="traitnaturallygifted-naturally-gifted-fn19-2-benefit">You gain an additional use of one of your <em>gnome magic</em> spell-like abilities each day. This does not always have to be the same spell-like ability - one day you might use <Link to="/spell/dancing_lights">dancing lights</Link> twice, only to use the additional casting for <Link to="/spell/speak_with_animals">speak with animals</Link> the next day.</Pair>
</Ability>
<Ability id="traitnatureworshiper-nature-worshiper-fn1-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnatureworshiper-nature-worshiper-fn1-8"><Link to="/trait/nature_worshiper">⮞</Link> Nature Worshiper <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.8" id="main-traits_faith_all-fake-fn-1.8" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitnatureworshiper-nature-worshiper-fn1-8-flavor">When you were young, you saw a dead creature's body fertilize a field. Witnessing the connection between life and death moved you to recognize your own connection with the world, and ever since you have revered nature and feared death less.</Pair>
<Pair single="benefit" id="traitnatureworshiper-nature-worshiper-fn1-8-benefit">You gain a +1 trait bonus on saving throws against death effects and effects that use negative energy, such as <Link to="/rule/energy_drain">energy drain</Link> and <Link to="/main/inflict_spells">inflict spells</Link>.</Pair>
</Ability>
<Ability id="traitnecroticaura-necrotic-aura-fn13-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnecroticaura-necrotic-aura-fn13-7"><Link to="/trait/necrotic_aura">⮞</Link> Necrotic Aura <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.7" id="main-traits_faith_all-fake-fn-13.7" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="flavor" id="traitnecroticaura-necrotic-aura-fn13-7-flavor">Your exposure to the necromantic arts has strengthened your defenses against its vile rot.</Pair>
<Pair single="benefit" id="traitnecroticaura-necrotic-aura-fn13-7-benefit">You gain a +1 trait bonus on saving throws against spells from the necromancy school or any effect that deals negative energy damage.</Pair>
</Ability>
<Ability id="traitoathbound-oathbound-fn6-17" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitoathbound-oathbound-fn6-17"><Link to="/trait/oathbound">⮞</Link> Oathbound <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.17" id="main-traits_faith_all-fake-fn-6.17" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitoathbound-oathbound-fn6-17-flavor">You have made a solemn oath, and you pursue that oath with headstrong determination.</Pair>
<Pair single="benefit" id="traitoathbound-oathbound-fn6-17-benefit">Once per day, you may reroll a saving throw against a charm or compulsion effect. You must take the second result even if it is worse.</Pair>
</Ability>
<Ability id="traitomen-omen-fn6-18" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitomen-omen-fn6-18"><Link to="/trait/omen">⮞</Link> Omen <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.18" id="main-traits_faith_all-fake-fn-6.18" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitomen-omen-fn6-18-flavor">You are the harbinger of some future event. Whether this event bodes good or ill, you exude an ominous presence.</Pair>
<Pair single="benefit" id="traitomen-omen-fn6-18-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is always a class skill for you. Once per day, you may attempt to demoralize an opponent as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="traitpactservant-pact-servant-fn16-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpactservant-pact-servant-fn16-2"><Link to="/trait/pact_servant">⮞</Link> Pact Servant <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-16.2" id="main-traits_faith_all-fake-fn-16.2" data-hash-target to="main-traits_faith_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpactservant-pact-servant-fn16-2-flavor">The faith of Holomog focuses on finding the good in unusual places and appreciating the nuances of virtue in the world.</Pair>
<Pair single="benefit" id="traitpactservant-pact-servant-fn16-2-benefit">You may treat <Link to="/faith/asmodeus">Asmodeus</Link> as if he were a lawful neutral deity for the purposes of determining your own alignment as a cleric, inquisitor, or other divine spellcaster. You may not select the evil domain unless your own alignment also contains an evil aspect.</Pair>
</Ability>
<Ability id="traitpatientcalm-patient-calm-fn5-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpatientcalm-patient-calm-fn5-7"><Link to="/trait/patient_calm">⮞</Link> Patient Calm <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.7" id="main-traits_faith_all-fake-fn-5.7" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpatientcalm-patient-calm-fn5-7-flavor">As a child, you struggled to suppress a sharp temper, but the care and patient respect of a trusted community leader rubbed off on you. As you grew older, you developed a remarkable ability to keep calm and collected when performing a task you are familiar with.</Pair>
<Pair single="benefit" id="traitpatientcalm-patient-calm-fn5-7-benefit"><p>Choose one <Link to="/skill/craft">Craft</Link> or <Link to="/skill/profession">Profession</Link> skill. Whenever you take 10 with that skill, determine the result as if you had rolled a 12 instead of a 10.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, Drumans, <Link to="/faith/irori">Irorans</Link>.</p>
</Pair>
</Ability>
<Ability id="traitperpetualcompanion-perpetual-companion-fn6-19" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitperpetualcompanion-perpetual-companion-fn6-19"><Link to="/trait/perpetual_companion">⮞</Link> Perpetual Companion <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.19" id="main-traits_faith_all-fake-fn-6.19" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitperpetualcompanion-perpetual-companion-fn6-19-flavor">You are bolstered against fear when your eidolon is near.</Pair>
<Pair single="benefit" id="traitperpetualcompanion-perpetual-companion-fn6-19-benefit">You gain a +2 trait bonus on all saving throws against fear effects whenever your eidolon is within 30 feet.</Pair>
</Ability>
<Ability id="traitpersuasiveinsight-persuasive-insight-fn14-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpersuasiveinsight-persuasive-insight-fn14-4"><Link to="/trait/persuasive_insight">⮞</Link> Persuasive Insight <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-14.4" id="main-traits_faith_all-fake-fn-14.4" data-hash-target to="main-traits_faith_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpersuasiveinsight-persuasive-insight-fn14-4-flavor">You were converted to your faith or taught to bargain with spirits for magic by a figure of inspiring insight who taught you to use keen observation in all dealings.</Pair>
<Pair single="benefit" id="traitpersuasiveinsight-persuasive-insight-fn14-4-benefit">You can use your Wisdom modifier in place of your Charisma modifier on <Link to="/skill/diplomacy">Diplomacy</Link> checks to ask favors or gain influence. During a <Link to="/rule/verbal_duels">verbal duel</Link>, you can use your Wisdom modifier in place of your Charisma modifier when using tactics you assigned to Diplomacy or Wisdom-based skills.</Pair>
</Ability>
<Ability id="traitplanarsavant-planar-savant-fn6-20" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitplanarsavant-planar-savant-fn6-20"><Link to="/trait/planar_savant">⮞</Link> Planar Savant <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.20" id="main-traits_faith_all-fake-fn-6.20" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitplanarsavant-planar-savant-fn6-20-flavor">You have always had an innate sense of the workings of the planes and their denizens.</Pair>
<Pair single="benefit" id="traitplanarsavant-planar-savant-fn6-20-benefit">You may use your Charisma modifier when making <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks instead of your Intelligence modifier.</Pair>
</Ability>
<Ability id="traitpriestblessed-priest-blessed-fn1-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpriestblessed-priest-blessed-fn1-9"><Link to="/trait/priest_blessed">⮞</Link> Priest-Blessed <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.9" id="main-traits_faith_all-fake-fn-1.9" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpriestblessed-priest-blessed-fn1-9-flavor">You were guided to maturity by a trusted priest of an ecclesiastical tradition, who inspired you and made you understand that the authority exerted by a religious hierarchy is a blessing rather than a restriction, allowing the faithful to always feel confident in their direction and the righteousness of the guided actions. Now, your faith wells up whenever you are aided by divine magic, and you find it easy to open up to the magic and succor of any faith, seeing the similarities between all such traditions.</Pair>
<Pair single="benefit" id="traitpriestblessed-priest-blessed-fn1-9-benefit">Three times per day when you are the target of a harmless divine spell, you may increase its caster level by 1 for purposes of its effect on you alone.</Pair>
</Ability>
<Ability id="traitprincipled-principled-fn6-21" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitprincipled-principled-fn6-21"><Link to="/trait/principled">⮞</Link> Principled <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.21" id="main-traits_faith_all-fake-fn-6.21" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitprincipled-principled-fn6-21-flavor">You hold yourself to a strict code of behavior that guides all of your decisions and actions.</Pair>
<Pair single="benefit" id="traitprincipled-principled-fn6-21-benefit">You take a -2 penalty on <Link to="/skill/bluff">Bluff</Link> checks and gain a +2 trait bonus on saving throws against charm, compulsion, and emotion effects.</Pair>
</Ability>
<Ability id="traitprophesied-prophesied-fn6-22" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitprophesied-prophesied-fn6-22"><Link to="/trait/prophesied">⮞</Link> Prophesied <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.22" id="main-traits_faith_all-fake-fn-6.22" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitprophesied-prophesied-fn6-22-flavor">Your coming was foretold in prophecy, and people familiar with your legend regard you with awe and fear.</Pair>
<Pair single="benefit" id="traitprophesied-prophesied-fn6-22-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks and <Link to="/skill/intimidate">Intimidate</Link> checks when interacting with anyone familiar with you or your reputation.</Pair>
</Ability>
<Ability id="traitproxyofmany-proxy-of-many-fn1-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitproxyofmany-proxy-of-many-fn1-10"><Link to="/trait/proxy_of_many">⮞</Link> Proxy of Many <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.10" id="main-traits_faith_all-fake-fn-1.10" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitproxyofmany-proxy-of-many-fn1-10-flavor">As a pantheist, you are accustomed to calling on aid from a variety of sources, and have a pragmatic sense for how to best make use of any ally.</Pair>
<Pair single="benefit" id="traitproxyofmany-proxy-of-many-fn1-10-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to request a favor from a creature that has not performed a favor for you in the past week. This bonus increases to +4 if you have performed a favor for that creature since it last did a favor for you.</Pair>
</Ability>
<Ability id="traitrebukethecurse-rebuke-the-curse-fn24" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitrebukethecurse-rebuke-the-curse-fn24"><Link to="/trait/rebuke_the_curse">⮞</Link> Rebuke the Curse <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-24" id="main-traits_faith_all-fake-fn-24" data-hash-target to="main-traits_faith_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitrebukethecurse-rebuke-the-curse-fn24-benefit"><p>Once per day, you can attempt to suppress the effects of a curse on a single creature with a touch. This functions as a <Link to="/spell/remove_curse">remove curse</Link> spell, treating your character level as your caster level. If you succeed at your caster level check against the curse, the curse's effects are negated for 1 minute.</p>
<p>This trait does not allow a person burdened with a cursed item to remove or discard it. Use of this trait is a supernatural ability.</p>
</Pair>
</Ability>
<Ability id="traitredeemer-redeemer-fn9-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitredeemer-redeemer-fn9-3"><Link to="/trait/redeemer">⮞</Link> Redeemer <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-9.3" id="main-traits_faith_all-fake-fn-9.3" data-hash-target to="main-traits_faith_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitredeemer-redeemer-fn9-3-flavor">You've always held the strong belief that morality is everyone's choice, and that those who act in wicked ways have simply never been shown how their actions truly affect others. If they could be shown their errors, then they would accept a more positive course of action - and you have just enough patience to see this through.</Pair>
<Pair single="benefit" id="traitredeemer-redeemer-fn9-3-benefit">When acting as a sponsor for an evil creature seeking redemption, your patience and kindness grant the creature a +3 bonus on its save rather than a +1 bonus.</Pair>
</Ability>
<Ability id="traitreincarnated-reincarnated-fn6-23" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreincarnated-reincarnated-fn6-23"><Link to="/trait/reincarnated">⮞</Link> Reincarnated <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.23" id="main-traits_faith_all-fake-fn-6.23" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitreincarnated-reincarnated-fn6-23-flavor">You lived a previous life as someone - or something - else. For you, life and death are a cycle, and you have no fear of death.</Pair>
<Pair single="benefit" id="traitreincarnated-reincarnated-fn6-23-benefit">You gain a +2 trait bonus on saving throws against fear and death effects.</Pair>
</Ability>
<Ability id="traitreligiousreformer-religious-reformer-fn1-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreligiousreformer-religious-reformer-fn1-11"><Link to="/trait/religious_reformer">⮞</Link> Religious Reformer <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.11" id="main-traits_faith_all-fake-fn-1.11" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitreligiousreformer-religious-reformer-fn1-11-flavor">You have spent many years studying the tenets of your faith, and now believe that the dominant factions within the church have deviated from its true meaning and purpose. Rather than breaking with your misguided church, you've decided to stand up and fight to reform the organization you love. You have fervently studied scripture and steeled your will to combat the divergent beliefs of your peers.</Pair>
<Pair single="benefit" id="traitreligiousreformer-religious-reformer-fn1-11-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks that pertain to your own religion or spiritual practice, and you gain a +2 trait bonus on saving throws against spells cast by others who worship your god or adhere to your philosophy.</Pair>
</Ability>
<Ability id="traitriveracumen-river-acumen-fn25" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitriveracumen-river-acumen-fn25"><Link to="/trait/river_acumen">⮞</Link> River Acumen <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-25" id="main-traits_faith_all-fake-fn-25" data-hash-target to="main-traits_faith_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitriveracumen-river-acumen-fn25-flavor">Your connection with the river and its tributaries has blended with your reverence for the gods of the river passages so much so that you seem divinely blessed while plying river waters.</Pair>
<Pair single="benefit" id="traitriveracumen-river-acumen-fn25-benefit">You gain a +2 trait bonus on <Link to="/skill/swim">Swim</Link> checks in rivers or streams, and a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to forage for food in or near a river or stream.</Pair>
</Ability>
<Ability id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8"><Link to="/trait/sacred_conduit">⮞</Link> Sacred Conduit <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.24" id="main-traits_faith_all-fake-fn-6.24" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.8" id="main-traits_faith_all-fake-fn-8.8" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.8" id="main-traits_faith_all-fake-fn-7.8" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8-flavor">Your birth was particularly painful and difficult for your mother, who needed potent divine magic to ensure that you survived (your mother may or may not have survived). In any event, that magic infused you from an early age, and you now channel divine energy with greater ease than most.</Pair>
<Pair single="benefit" id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8-benefit">Whenever you <Link to="/ability/channel_energy">channel energy</Link>, you gain a +1 trait bonus to the save DC of your channeled energy.</Pair>
</Ability>
<Ability id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9"><Link to="/trait/sacred_touch">⮞</Link> Sacred Touch <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.25" id="main-traits_faith_all-fake-fn-6.25" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.9" id="main-traits_faith_all-fake-fn-7.9" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.9" id="main-traits_faith_all-fake-fn-8.9" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9-flavor">You were exposed to a potent source of positive energy as a child, perhaps by being born under the right cosmic sign, or maybe because one of your parents was a gifted healer.</Pair>
<Pair single="benefit" id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9-benefit">As a <strong className="hl">standard action</strong>, you may automatically <Link to="/spell/stabilize">stabilize</Link> a <Link to="/misc/dying">dying</Link> creature merely by touching it.</Pair>
</Ability>
<Ability id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10"><Link to="/trait/scholar_of_the_great_beyond">⮞</Link> Scholar of the Great Beyond <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.26" id="main-traits_faith_all-fake-fn-6.26" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-8.10" id="main-traits_faith_all-fake-fn-8.10" data-hash-target to="main-traits_faith_all-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-7.10" id="main-traits_faith_all-fake-fn-7.10" data-hash-target to="main-traits_faith_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10-flavor">Your greatest interests as a child did not lie with current events or the mundane; you have always felt out of place, as if you were born in the wrong era. You take to philosophical discussions of the Great Beyond and of historical events with ease.</Pair>
<Pair single="benefit" id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_history">Knowledge (history)</Link> and <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitschooledinquisitor-schooled-inquisitor-fn6-27" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitschooledinquisitor-schooled-inquisitor-fn6-27"><Link to="/trait/schooled_inquisitor">⮞</Link> Schooled Inquisitor <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.27" id="main-traits_faith_all-fake-fn-6.27" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitschooledinquisitor-schooled-inquisitor-fn6-27-flavor">Your additional training aids in identifying the wiles of your faith's enemies.</Pair>
<Pair single="benefit" id="traitschooledinquisitor-schooled-inquisitor-fn6-27-benefit">You gain a +2 trait bonus on all <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks made to identify the abilities and weaknesses of creatures.</Pair>
</Ability>
<Ability id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3"><Link to="/trait/scourge_of_the_darkness">⮞</Link> Scourge of the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-12.3" id="main-traits_faith_all-fake-fn-12.3" data-hash-target to="main-traits_faith_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3-flavor">Stories of the depredations present in the Darklands drive you to explore its shadowy depths and purge the corruption from within.</Pair>
<Pair single="benefit" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3-benefit">You gain a +1 trait bonus on saving throws against fear while in the Darklands and a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against creatures native to the Darklands.</Pair>
</Ability>
<Ability id="traitsecondtongue-second-tongue-fn13-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsecondtongue-second-tongue-fn13-8"><Link to="/trait/second_tongue">⮞</Link> Second Tongue <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.8" id="main-traits_faith_all-fake-fn-13.8" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitsecondtongue-second-tongue-fn13-8-flavor">Using an ancient and painful surgical technique, you've reshaped your tongue. These surgical mutilations permit you to speak ancient words unpronounceable to most mortals, enhancing your ability to work magic associated with the Great Old Ones.</Pair>
<Pair single="benefit" id="traitsecondtongue-second-tongue-fn13-8-benefit">Any summoning or divination spell you cast to summon or contact a Great Old One or one of their minions is cast at +1 caster level.</Pair>
</Ability>
<Ability id="traitsecretkeeper-secret-keeper-fn3-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsecretkeeper-secret-keeper-fn3-9"><Link to="/trait/secret_keeper">⮞</Link> Secret Keeper <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.9" id="main-traits_faith_all-fake-fn-3.9" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitsecretkeeper-secret-keeper-fn3-9-flavor">Avoiding inquisitors and agents of your enemies has required you to become a practiced liar.</Pair>
<Pair single="benefit" id="traitsecretkeeper-secret-keeper-fn3-9-benefit">You gain a +3 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks when they are opposed by another's <Link to="/skill/sense_motive">Sense Motive</Link> check.</Pair>
</Ability>
<Ability id="traitselfactualization-self-actualization-fn1-12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitselfactualization-self-actualization-fn1-12"><Link to="/trait/self_actualization">⮞</Link> Self-Actualization <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.12" id="main-traits_faith_all-fake-fn-1.12" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitselfactualization-self-actualization-fn1-12-flavor">Inspired by stories of mortals ascending to godhood, you're certain that you can do the same, and do all you can to hone your talents and reach your utmost potential.</Pair>
<Pair single="benefit" id="traitselfactualization-self-actualization-fn1-12-benefit">Once per day, when you take 20 on a roll or check, you can complete the action in only five times the normal amount of time for that action, rather than 20 times the normal amount.</Pair>
</Ability>
<Ability id="traitselfsustaining-self-sustaining-fn4-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitselfsustaining-self-sustaining-fn4-6"><Link to="/trait/self_sustaining">⮞</Link> Self-Sustaining <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-4.6" id="main-traits_faith_all-fake-fn-4.6" data-hash-target to="main-traits_faith_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>See text</Pair>
<Pair single="flavor" id="traitselfsustaining-self-sustaining-fn4-6-flavor">As a follower of Razmir, the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, or some other tradition that preaches self-reliance, you make a point of not seeking divine aid for minor matters.</Pair>
<Pair single="benefit" id="traitselfsustaining-self-sustaining-fn4-6-benefit">When you gain this trait, choose one of the following 0-level spells: <Link to="/spell/create_water">create water</Link>, <Link to="/spell/mending">mending</Link>, <Link to="/spell/purify_food_and_drink">purify food and drink</Link>, or <Link to="/spell/stabilize">stabilize</Link>. You can cast this spell once per day as a spell-like ability, using your character level as your caster level. Once chosen, this selection can't change.</Pair>
</Ability>
<Ability id="traitsoulsearchersstrength-soul-searchers-strength-fn26" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsoulsearchersstrength-soul-searchers-strength-fn26"><Link to="/trait/soul_searchers_strength">⮞</Link> Soul-Searcher's Strength <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-26" id="main-traits_faith_all-fake-fn-26" data-hash-target to="main-traits_faith_all-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must follow the traditions of the <Link to="/rule/rivethun">Rivethun</Link></Pair>
<Pair single="flavor" id="traitsoulsearchersstrength-soul-searchers-strength-fn26-flavor">Your introspections have taught you to understand your own flaws and proclivities and how to work with them.</Pair>
<Pair single="benefit" id="traitsoulsearchersstrength-soul-searchers-strength-fn26-benefit">Choose one saving throw. You gain a +1 trait bonus on saving throws of the chosen kind.</Pair>
</Ability>
<Ability id="traitspellintuition-spell-intuition-fn5-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitspellintuition-spell-intuition-fn5-8"><Link to="/trait/spell_intuition">⮞</Link> Spell Intuition <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-5.8" id="main-traits_faith_all-fake-fn-5.8" data-hash-target to="main-traits_faith_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitspellintuition-spell-intuition-fn5-8-flavor">Blessed by a priest of a deity of magic at birth, you demonstrated a remarkable knack for guessing the nature of spells without the schooling of your instructors.</Pair>
<Pair single="benefit" id="traitspellintuition-spell-intuition-fn5-8-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, and Spellcraft becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Gebbites, <Link to="/faith/nethys">Nethys</Link> worshipers, Nexians.</p>
</Pair>
</Ability>
<Ability id="traitspiritsense-spirit-sense-fn6-28" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitspiritsense-spirit-sense-fn6-28"><Link to="/trait/spirit_sense">⮞</Link> Spirit Sense <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.28" id="main-traits_faith_all-fake-fn-6.28" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitspiritsense-spirit-sense-fn6-28-flavor">You are so attuned to the spiritual world that it is hard to get the jump on you.</Pair>
<Pair single="benefit" id="traitspiritsense-spirit-sense-fn6-28-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> checks to avoid being surprised and to detect invisible or incorporeal creatures.</Pair>
</Ability>
<Ability id="traitstclydwellsward-st-clydwells-ward-fn13-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstclydwellsward-st-clydwells-ward-fn13-9"><Link to="/trait/st_clydwells_ward">⮞</Link> St. Clydwell's Ward <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.9" id="main-traits_faith_all-fake-fn-13.9" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="flavor" id="traitstclydwellsward-st-clydwells-ward-fn13-9-flavor">You have learned the secrets of an ancient prayer that wards off the attacks of demons.</Pair>
<Pair single="benefit" id="traitstclydwellsward-st-clydwells-ward-fn13-9-benefit">As a <strong className="hl">standard action</strong>, you can recite a holy chant that affects <Link to="/family/demon">demons</Link> as if you were under the effect of a <Link to="/spell/sanctuary">sanctuary</Link> spell (caster level equal to 1/2 your Hit Dice + your Charisma modifier).</Pair>
</Ability>
<Ability id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10"><Link to="/trait/stalwart_of_the_society">⮞</Link> Stalwart of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-17.4" id="main-traits_faith_all-fake-fn-17.4" data-hash-target to="main-traits_faith_all-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.10" id="main-traits_faith_all-fake-fn-13.10" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10-flavor">The courageous powers of Golarion's ancient paladin orders are open to you thanks to the Society's records of heroic deeds.</Pair>
<Pair single="benefit" id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10-benefit">Your <em>aura of courage</em> class ability grants an additional +1 trait bonus on saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitstrengthofsubmission-strength-of-submission-fn3-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstrengthofsubmission-strength-of-submission-fn3-10"><Link to="/trait/strength_of_submission">⮞</Link> Strength of Submission <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.10" id="main-traits_faith_all-fake-fn-3.10" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitstrengthofsubmission-strength-of-submission-fn3-10-flavor">Your faith in the church of Razmir and willingness to surrender yourself to him lend you strength and clarity.</Pair>
<Pair single="benefit" id="traitstrengthofsubmission-strength-of-submission-fn3-10-benefit">Whenever you are under the effects of a compulsion effect, you gain a +1 trait bonus on attack and damage rolls.</Pair>
</Ability>
<Ability id="traitstrengthoftheland-strength-of-the-land-fn15-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstrengthoftheland-strength-of-the-land-fn15-3"><Link to="/trait/strength_of_the_land">⮞</Link> Strength of the Land <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-15.3" id="main-traits_faith_all-fake-fn-15.3" data-hash-target to="main-traits_faith_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traitstrengthoftheland-strength-of-the-land-fn15-3-flavor">You are able to tap into the living energy of the world to shatter lesser magic.</Pair>
<Pair single="benefit" id="traitstrengthoftheland-strength-of-the-land-fn15-3-benefit">You gain a +1 trait bonus on caster level checks while touching the ground or unworked stone. This includes <Link to="/spell/dispel_magic">dispel</Link> checks and checks to overcome spell resistance.</Pair>
</Ability>
<Ability id="traitstudentofhistory-student-of-history-fn3-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstudentofhistory-student-of-history-fn3-11"><Link to="/trait/student_of_history">⮞</Link> Student of History <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.11" id="main-traits_faith_all-fake-fn-3.11" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitstudentofhistory-student-of-history-fn3-11-flavor">One can move toward enlightenment by understanding the mistakes of past generations.</Pair>
<Pair single="benefit" id="traitstudentofhistory-student-of-history-fn3-11-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and Knowledge (history) is a class skill for you.</Pair>
</Ability>
<Ability id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11"><Link to="/trait/tar_baphons_whisper">⮞</Link> Tar-Baphon's Whisper <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.11" id="main-traits_faith_all-fake-fn-13.11" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="flavor" id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11-flavor">You have learned the secrets of <em>sotto voce,</em> the eerie, dry whispering voice used to pass on cult secrets.</Pair>
<Pair single="benefit" id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11-benefit">You may cast <Link to="/spell/sotto_voce">sotto voce</Link> as a spell-like ability three times per day as a spell-like ability. This spell-like ability is cast at your highest caster level; if you have no caster level, it functions at CL 1st.</Pair>
</Ability>
<Ability id="traittirelessavenger-tireless-avenger-fn6-29" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittirelessavenger-tireless-avenger-fn6-29"><Link to="/trait/tireless_avenger">⮞</Link> Tireless Avenger <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.29" id="main-traits_faith_all-fake-fn-6.29" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traittirelessavenger-tireless-avenger-fn6-29-flavor">You restlessly pursue your enemies.</Pair>
<Pair single="benefit" id="traittirelessavenger-tireless-avenger-fn6-29-benefit">When you're in pursuit of one of your <Link to="/ability/favored_enemies">favored enemies</Link>, the DC for the Constitution check to avoid taking lethal damage during a <Link to="/rule/forced_march">forced march</Link> is 10 + 1 per extra hour, instead of 10 + 2 per extra hour.</Pair>
</Ability>
<Ability id="traittotemist-totemist-fn1-13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittotemist-totemist-fn1-13"><Link to="/trait/totemist">⮞</Link> Totemist <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.13" id="main-traits_faith_all-fake-fn-1.13" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traittotemist-totemist-fn1-13-flavor">You grew up in a culture where the touch of totem spirits was felt in everyday life, their subtle urgings constantly guiding you and keeping you safe. As a result, you learned quickly to ask for their help when trouble arises.</Pair>
<Pair single="benefit" id="traittotemist-totemist-fn1-13-benefit">Once per day, you may call upon your totem's wisdom as a <strong className="hl">standard action</strong>. You gain the benefits of <Link to="/spell/guidance">guidance</Link>, except that the granted competence bonus is equal to half your character level (minimum +1). This is a supernatural ability.</Pair>
</Ability>
<Ability id="traittraditionalist-traditionalist-fn3-12-fn1-14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittraditionalist-traditionalist-fn3-12-fn1-14"><Link to="/trait/traditionalist">⮞</Link> Traditionalist <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.12" id="main-traits_faith_all-fake-fn-3.12" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.14" id="main-traits_faith_all-fake-fn-1.14" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traittraditionalist-traditionalist-fn3-12-fn1-14-flavor">You attempt to maintain older traditions despite changing social norms, and find great value in the trappings and codes of the aristocracy.</Pair>
<Pair single="benefit" id="traittraditionalist-traditionalist-fn3-12-fn1-14-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks, and Knowledge (nobility) is a class skill for you.</Pair>
</Ability>
<Ability id="traittrickstergnome-trickster-gnome-fn19-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittrickstergnome-trickster-gnome-fn19-3"><Link to="/trait/trickster_gnome">⮞</Link> Trickster (Gnome) <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-19.3" id="main-traits_faith_all-fake-fn-19.3" data-hash-target to="main-traits_faith_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traittrickstergnome-trickster-gnome-fn19-3-flavor">You are particularly adept with your racial spell-like abilities, and as child you quickly learned how <Link to="/spell/dancing_lights">dancing lights</Link> and <Link to="/spell/ghost_sound">ghost sound</Link> could be used to amuse your friends and fool your elders. This natural talent for illusion continued as you grew older, and before long you were being offered training in more advanced figments and glamers.</Pair>
<Pair single="benefit" id="traittrickstergnome-trickster-gnome-fn19-3-benefit">You gain a +1 trait bonus to your caster level when determining the duration, range, and area of all spells from the illusion school.</Pair>
</Ability>
<Ability id="traittwoworldmagic-two-world-magic-fn27" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittwoworldmagic-two-world-magic-fn27"><Link to="/trait/two_world_magic">⮞</Link> Two-World Magic <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-27" id="main-traits_faith_all-fake-fn-27" data-hash-target to="main-traits_faith_all-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="traittwoworldmagic-two-world-magic-fn27-flavor">You have bridged the gap between the natural magic of the Mwangi peoples and the refined magic of the Chelish colonists.</Pair>
<Pair single="benefit" id="traittwoworldmagic-two-world-magic-fn27-benefit">Select one 0-level spell from a class spell list other than your own. This spell is a 0-level spell on your class spell list (or a 1st-level spell if your class doesn't have 0-level spells). For example, if you are a druid, you could select <Link to="/spell/mage_hand">mage hand</Link> and thereafter prepare it as a 0-level druid spell; if you are a sorcerer, you could select <Link to="/spell/know_direction">know direction</Link> as a 0-level sorcerer spell known.</Pair>
</Ability>
<Ability id="traitundaunted-undaunted-fn3-13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitundaunted-undaunted-fn3-13"><Link to="/trait/undaunted">⮞</Link> Undaunted <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.13" id="main-traits_faith_all-fake-fn-3.13" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitundaunted-undaunted-fn3-13-flavor">Following the path of freedom has resulted in you being threatened by ruffians and bullies throughout your childhood, and it now takes a lot to rattle you.</Pair>
<Pair single="benefit" id="traitundaunted-undaunted-fn3-13-benefit">You increase the DC to demoralize you with an <Link to="/skill/intimidate">Intimidate</Link> check by 2.</Pair>
</Ability>
<Ability id="traitunnaturalpresence-unnatural-presence-fn13-12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitunnaturalpresence-unnatural-presence-fn13-12"><Link to="/trait/unnatural_presence">⮞</Link> Unnatural Presence <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-13.12" id="main-traits_faith_all-fake-fn-13.12" data-hash-target to="main-traits_faith_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitunnaturalpresence-unnatural-presence-fn13-12-flavor">Your prolonged association with alien forces leaks from your pores.</Pair>
<Pair single="benefit" id="traitunnaturalpresence-unnatural-presence-fn13-12-benefit">You can use your <Link to="/skill/intimidate">Intimidate</Link> skill to demoralize animals and vermin; Intimidate is a class skill for you.</Pair>
</Ability>
<Ability id="traitunshackled-unshackled-fn3-14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitunshackled-unshackled-fn3-14"><Link to="/trait/unshackled">⮞</Link> Unshackled <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.14" id="main-traits_faith_all-fake-fn-3.14" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitunshackled-unshackled-fn3-14-flavor">You have escaped slavery or other imprisonment and have vowed never to be shackled again.</Pair>
<Pair single="benefit" id="traitunshackled-unshackled-fn3-14-benefit">You gain a +1 trait bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks, and Escape Artist is a class skill for you.</Pair>
</Ability>
<Ability id="traituntrainedscholar-untrained-scholar-fn3-15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traituntrainedscholar-untrained-scholar-fn3-15"><Link to="/trait/untrained_scholar">⮞</Link> Untrained Scholar <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-3.15" id="main-traits_faith_all-fake-fn-3.15" data-hash-target to="main-traits_faith_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traituntrainedscholar-untrained-scholar-fn3-15-flavor">While scholarship is not your primary focus, you have spent enough time in classrooms and libraries to learn a few things.</Pair>
<Pair single="benefit" id="traituntrainedscholar-untrained-scholar-fn3-15-benefit">Once per day, you can attempt a <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link> or <Link to="/skill/knowledge_local">Knowledge (local)</Link> check untrained with a +2 trait bonus.</Pair>
</Ability>
<Ability id="traiturbanacolyte-urban-acolyte-fn28" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiturbanacolyte-urban-acolyte-fn28"><Link to="/trait/urban_acolyte">⮞</Link> Urban Acolyte <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-28" id="main-traits_faith_all-fake-fn-28" data-hash-target to="main-traits_faith_all-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traiturbanacolyte-urban-acolyte-fn28-flavor">Growing up in a city has broadened your philosophy, and helped you interpret your patron's divine will in a novel way.</Pair>
<Pair single="benefit" id="traiturbanacolyte-urban-acolyte-fn28-benefit">You gain <Link to="/skill/knowledge_local">Knowledge (local)</Link> as a class skill. Additionally, you can select one of the following subdomains using the normal rules for subdomains so long as your deity grants access to its associated domain: <Link to="/domain/competition">Competition</Link>, <Link to="/domain/duels">Duels</Link>, <Link to="/domain/espionage">Espionage</Link>, <Link to="/domain/fortifications">Fortifications</Link>, <Link to="/domain/industry">Industry</Link>, <Link to="/domain/legislation">Legislation</Link>, <Link to="/domain/plague">Plague</Link>, or <Link to="/domain/riot">Riot</Link>.</Pair>
</Ability>
<Ability id="traitviledomain-vile-domain-fn29" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitviledomain-vile-domain-fn29"><Link to="/trait/vile_domain">⮞</Link> Vile Domain <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-29" id="main-traits_faith_all-fake-fn-29" data-hash-target to="main-traits_faith_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitviledomain-vile-domain-fn29-flavor">Your connection with a malignant force has granted you great power.</Pair>
<Pair single="benefit" id="traitviledomain-vile-domain-fn29-benefit">Choose a domain granted by an evil aligned deity, such as an archdevil, demon lord, or Great Old One. You gain a +1 trait bonus to your caster level when casting spells that are granted by that domain. This doesn't grant you the ability to cast such spells-you must still have access to the spells through some other means.</Pair>
</Ability>
<Ability id="traitwanderersshroud-wanderers-shroud-fn6-30" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitwanderersshroud-wanderers-shroud-fn6-30"><Link to="/trait/wanderers_shroud">⮞</Link> Wanderer's Shroud <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.30" id="main-traits_faith_all-fake-fn-6.30" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitwanderersshroud-wanderers-shroud-fn6-30-flavor">Your wanderings often go unnoticed.</Pair>
<Pair single="benefit" id="traitwanderersshroud-wanderers-shroud-fn6-30-benefit">Efforts to use the <Link to="/skill/diplomacy">Diplomacy</Link> skill to gather information about you take a -1 penalty, and you gain a +1 trait bonus on all saving throws against scrying and mindreading effects that allow saving throws.</Pair>
</Ability>
<Ability id="traitwendifaapprentice-wendifa-apprentice-fn1-15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitwendifaapprentice-wendifa-apprentice-fn1-15"><Link to="/trait/wendifa_apprentice">⮞</Link> Wendifa Apprentice <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.15" id="main-traits_faith_all-fake-fn-1.15" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitwendifaapprentice-wendifa-apprentice-fn1-15-flavor">For a time during your childhood, you were left in the care of a juju oracle or wendifa, who saw your potential and taught you simple juju magic to influence the weakminded for brief periods of time.</Pair>
<Pair single="benefit" id="traitwendifaapprentice-wendifa-apprentice-fn1-15-benefit">You can use <Link to="/spell/daze">daze</Link> as a spell-like ability once per day, using your character level as your caster level (minimum 1). The save DC of this effect is Charisma-based. The dazed individual looks ashen and deathly for the duration of the effect.</Pair>
</Ability>
<Ability id="traitzealot-zealot-fn19-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealot-zealot-fn19-4"><Link to="/trait/zealot">⮞</Link> Zealot <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-19.4" id="main-traits_faith_all-fake-fn-19.4" data-hash-target to="main-traits_faith_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link>, you must match the alignment of your chosen deity exactly</Pair>
<Pair single="flavor" id="traitzealot-zealot-fn19-4-flavor">You aren't just faithful to the worship of your patron deity - you are obsessively loyal to all of the faith's tenets and guidelines. Your devotion is an anchor that keeps you from drifting away into the throes of the Bleaching, and you cling to it like the life raft it is.</Pair>
<Pair single="benefit" id="traitzealot-zealot-fn19-4-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and that skill is a class skill for you. As long as you remain completely faithful to the tenets of your faith (as determined by the GM), you never suffer from the Bleaching.</Pair>
</Ability>
<Ability id="traitzealotsbearing-zealots-bearing-fn1-16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealotsbearing-zealots-bearing-fn1-16"><Link to="/trait/zealots_bearing">⮞</Link> Zealot's Bearing <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-1.16" id="main-traits_faith_all-fake-fn-1.16" data-hash-target to="main-traits_faith_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitzealotsbearing-zealots-bearing-fn1-16-flavor">Your fiery passion for your faith or philosophy is obvious to everyone around you. Those who share your convictions automatically find themselves wanting to defer to your zealous authority, making you a natural leader of your faith. Unfortunately, your scorn for those who haven't yet seen the wisdom of converting is equally obvious, and makes you a poor ambassador or missionary to the "ignorant masses" (as you not-so secretly think of them).</Pair>
<Pair single="benefit" id="traitzealotsbearing-zealots-bearing-fn1-16-benefit">You gain a +2 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks when dealing with adherents of your faith or philosophy, but a -1 penalty on Diplomacy and Intimidate checks when dealing with anyone else.</Pair>
</Ability>
<Ability id="traitzealousstriker-zealous-striker-fn6-31" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealousstriker-zealous-striker-fn6-31"><Link to="/trait/zealous_striker">⮞</Link> Zealous Striker <sup><InnerLink showBacklink="backlink-main-traits_faith_all-fake-fn-6.31" id="main-traits_faith_all-fake-fn-6.31" data-hash-target to="main-traits_faith_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitzealousstriker-zealous-striker-fn6-31-flavor">Your zeal is a danger to those of "lesser" faiths.</Pair>
<Pair single="benefit" id="traitzealousstriker-zealous-striker-fn6-31-benefit">While you have the destruction <Link to="/ability/judgments">judgment</Link> active, you gain a +1 trait bonus on damage rolls when attacking a foe who can cast divine spells and worships a different deity than you.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_all-label">Footnotes</h3><ol>
<li id="main-traits_faith_all-fake-fn-1-target"><p><Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1" data-hash-target to="main-traits_faith_all-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.2" data-hash-target to="main-traits_faith_all-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.3" data-hash-target to="main-traits_faith_all-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.4" data-hash-target to="main-traits_faith_all-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.5" data-hash-target to="main-traits_faith_all-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.6" data-hash-target to="main-traits_faith_all-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.7" data-hash-target to="main-traits_faith_all-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.8" data-hash-target to="main-traits_faith_all-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.9" data-hash-target to="main-traits_faith_all-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.10" data-hash-target to="main-traits_faith_all-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.11" data-hash-target to="main-traits_faith_all-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.12" data-hash-target to="main-traits_faith_all-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.13" data-hash-target to="main-traits_faith_all-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.14" data-hash-target to="main-traits_faith_all-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.15" data-hash-target to="main-traits_faith_all-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_all-fake-fn-1.16" data-hash-target to="main-traits_faith_all-fake-fn-1.16">↩<sup>16</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-2-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_all-fake-fn-2" data-hash-target to="main-traits_faith_all-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-3-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3" data-hash-target to="main-traits_faith_all-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.2" data-hash-target to="main-traits_faith_all-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.3" data-hash-target to="main-traits_faith_all-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.4" data-hash-target to="main-traits_faith_all-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.5" data-hash-target to="main-traits_faith_all-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.6" data-hash-target to="main-traits_faith_all-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.7" data-hash-target to="main-traits_faith_all-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.8" data-hash-target to="main-traits_faith_all-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.9" data-hash-target to="main-traits_faith_all-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.10" data-hash-target to="main-traits_faith_all-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.11" data-hash-target to="main-traits_faith_all-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.12" data-hash-target to="main-traits_faith_all-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.13" data-hash-target to="main-traits_faith_all-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.14" data-hash-target to="main-traits_faith_all-fake-fn-3.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_all-fake-fn-3.15" data-hash-target to="main-traits_faith_all-fake-fn-3.15">↩<sup>15</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-4-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_all-fake-fn-4" data-hash-target to="main-traits_faith_all-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_all-fake-fn-4.2" data-hash-target to="main-traits_faith_all-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_all-fake-fn-4.3" data-hash-target to="main-traits_faith_all-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_all-fake-fn-4.4" data-hash-target to="main-traits_faith_all-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_all-fake-fn-4.5" data-hash-target to="main-traits_faith_all-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_all-fake-fn-4.6" data-hash-target to="main-traits_faith_all-fake-fn-4.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-5-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5" data-hash-target to="main-traits_faith_all-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.2" data-hash-target to="main-traits_faith_all-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.3" data-hash-target to="main-traits_faith_all-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.4" data-hash-target to="main-traits_faith_all-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.5" data-hash-target to="main-traits_faith_all-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.6" data-hash-target to="main-traits_faith_all-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.7" data-hash-target to="main-traits_faith_all-fake-fn-5.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_all-fake-fn-5.8" data-hash-target to="main-traits_faith_all-fake-fn-5.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-6-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6" data-hash-target to="main-traits_faith_all-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.2" data-hash-target to="main-traits_faith_all-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.3" data-hash-target to="main-traits_faith_all-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.4" data-hash-target to="main-traits_faith_all-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.5" data-hash-target to="main-traits_faith_all-fake-fn-6.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.6" data-hash-target to="main-traits_faith_all-fake-fn-6.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.7" data-hash-target to="main-traits_faith_all-fake-fn-6.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.8" data-hash-target to="main-traits_faith_all-fake-fn-6.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.9" data-hash-target to="main-traits_faith_all-fake-fn-6.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.10" data-hash-target to="main-traits_faith_all-fake-fn-6.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.11" data-hash-target to="main-traits_faith_all-fake-fn-6.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.12" data-hash-target to="main-traits_faith_all-fake-fn-6.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.13" data-hash-target to="main-traits_faith_all-fake-fn-6.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.14" data-hash-target to="main-traits_faith_all-fake-fn-6.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.15" data-hash-target to="main-traits_faith_all-fake-fn-6.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.16" data-hash-target to="main-traits_faith_all-fake-fn-6.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.17" data-hash-target to="main-traits_faith_all-fake-fn-6.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.18" data-hash-target to="main-traits_faith_all-fake-fn-6.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.19" data-hash-target to="main-traits_faith_all-fake-fn-6.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.20" data-hash-target to="main-traits_faith_all-fake-fn-6.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.21" data-hash-target to="main-traits_faith_all-fake-fn-6.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.22" data-hash-target to="main-traits_faith_all-fake-fn-6.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.23" data-hash-target to="main-traits_faith_all-fake-fn-6.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.24" data-hash-target to="main-traits_faith_all-fake-fn-6.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.25" data-hash-target to="main-traits_faith_all-fake-fn-6.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.26" data-hash-target to="main-traits_faith_all-fake-fn-6.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.27" data-hash-target to="main-traits_faith_all-fake-fn-6.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.28" data-hash-target to="main-traits_faith_all-fake-fn-6.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.29" data-hash-target to="main-traits_faith_all-fake-fn-6.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.30" data-hash-target to="main-traits_faith_all-fake-fn-6.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_all-fake-fn-6.31" data-hash-target to="main-traits_faith_all-fake-fn-6.31">↩<sup>31</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-7-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7" data-hash-target to="main-traits_faith_all-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.2" data-hash-target to="main-traits_faith_all-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.3" data-hash-target to="main-traits_faith_all-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.4" data-hash-target to="main-traits_faith_all-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.5" data-hash-target to="main-traits_faith_all-fake-fn-7.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.6" data-hash-target to="main-traits_faith_all-fake-fn-7.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.7" data-hash-target to="main-traits_faith_all-fake-fn-7.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.8" data-hash-target to="main-traits_faith_all-fake-fn-7.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.9" data-hash-target to="main-traits_faith_all-fake-fn-7.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_all-fake-fn-7.10" data-hash-target to="main-traits_faith_all-fake-fn-7.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-8-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8" data-hash-target to="main-traits_faith_all-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.2" data-hash-target to="main-traits_faith_all-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.3" data-hash-target to="main-traits_faith_all-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.4" data-hash-target to="main-traits_faith_all-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.5" data-hash-target to="main-traits_faith_all-fake-fn-8.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.6" data-hash-target to="main-traits_faith_all-fake-fn-8.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.7" data-hash-target to="main-traits_faith_all-fake-fn-8.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.8" data-hash-target to="main-traits_faith_all-fake-fn-8.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.9" data-hash-target to="main-traits_faith_all-fake-fn-8.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_all-fake-fn-8.10" data-hash-target to="main-traits_faith_all-fake-fn-8.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-9-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_all-fake-fn-9" data-hash-target to="main-traits_faith_all-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_all-fake-fn-9.2" data-hash-target to="main-traits_faith_all-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_all-fake-fn-9.3" data-hash-target to="main-traits_faith_all-fake-fn-9.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-10-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_all-fake-fn-10" data-hash-target to="main-traits_faith_all-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-11-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_all-fake-fn-11" data-hash-target to="main-traits_faith_all-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-12-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith_all-fake-fn-12" data-hash-target to="main-traits_faith_all-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith_all-fake-fn-12.2" data-hash-target to="main-traits_faith_all-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith_all-fake-fn-12.3" data-hash-target to="main-traits_faith_all-fake-fn-12.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-13-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13" data-hash-target to="main-traits_faith_all-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.2" data-hash-target to="main-traits_faith_all-fake-fn-13.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.3" data-hash-target to="main-traits_faith_all-fake-fn-13.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.4" data-hash-target to="main-traits_faith_all-fake-fn-13.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.5" data-hash-target to="main-traits_faith_all-fake-fn-13.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.6" data-hash-target to="main-traits_faith_all-fake-fn-13.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.7" data-hash-target to="main-traits_faith_all-fake-fn-13.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.8" data-hash-target to="main-traits_faith_all-fake-fn-13.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.9" data-hash-target to="main-traits_faith_all-fake-fn-13.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.10" data-hash-target to="main-traits_faith_all-fake-fn-13.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.11" data-hash-target to="main-traits_faith_all-fake-fn-13.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_all-fake-fn-13.12" data-hash-target to="main-traits_faith_all-fake-fn-13.12">↩<sup>12</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-14-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_all-fake-fn-14" data-hash-target to="main-traits_faith_all-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_all-fake-fn-14.2" data-hash-target to="main-traits_faith_all-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_all-fake-fn-14.3" data-hash-target to="main-traits_faith_all-fake-fn-14.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_all-fake-fn-14.4" data-hash-target to="main-traits_faith_all-fake-fn-14.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-15-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith_all-fake-fn-15" data-hash-target to="main-traits_faith_all-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith_all-fake-fn-15.2" data-hash-target to="main-traits_faith_all-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith_all-fake-fn-15.3" data-hash-target to="main-traits_faith_all-fake-fn-15.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-16-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_all-fake-fn-16" data-hash-target to="main-traits_faith_all-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_all-fake-fn-16.2" data-hash-target to="main-traits_faith_all-fake-fn-16.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-17-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith_all-fake-fn-17" data-hash-target to="main-traits_faith_all-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith_all-fake-fn-17.2" data-hash-target to="main-traits_faith_all-fake-fn-17.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith_all-fake-fn-17.3" data-hash-target to="main-traits_faith_all-fake-fn-17.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith_all-fake-fn-17.4" data-hash-target to="main-traits_faith_all-fake-fn-17.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-18-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_faith_all-fake-fn-18" data-hash-target to="main-traits_faith_all-fake-fn-18">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-19-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith_all-fake-fn-19" data-hash-target to="main-traits_faith_all-fake-fn-19">↩</InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith_all-fake-fn-19.2" data-hash-target to="main-traits_faith_all-fake-fn-19.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith_all-fake-fn-19.3" data-hash-target to="main-traits_faith_all-fake-fn-19.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith_all-fake-fn-19.4" data-hash-target to="main-traits_faith_all-fake-fn-19.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-20-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_faith_all-fake-fn-20" data-hash-target to="main-traits_faith_all-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_faith_all-fake-fn-20.2" data-hash-target to="main-traits_faith_all-fake-fn-20.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-21-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_faith_all-fake-fn-21" data-hash-target to="main-traits_faith_all-fake-fn-21">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-22-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_faith_all-fake-fn-22" data-hash-target to="main-traits_faith_all-fake-fn-22">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-23-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_faith_all-fake-fn-23" data-hash-target to="main-traits_faith_all-fake-fn-23">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-24-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_faith_all-fake-fn-24" data-hash-target to="main-traits_faith_all-fake-fn-24">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-25-target"><p><Link to="/source/people_of_the_river">People of the River</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_faith_all-fake-fn-25" data-hash-target to="main-traits_faith_all-fake-fn-25">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-26-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_faith_all-fake-fn-26" data-hash-target to="main-traits_faith_all-fake-fn-26">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-27-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_faith_all-fake-fn-27" data-hash-target to="main-traits_faith_all-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-28-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_faith_all-fake-fn-28" data-hash-target to="main-traits_faith_all-fake-fn-28">↩</InnerLink></p></li>
<li id="main-traits_faith_all-fake-fn-29-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_faith_all-fake-fn-29" data-hash-target to="main-traits_faith_all-fake-fn-29">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_faith_def = {title: "Defense Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitabjectbelief-abject-belief-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitabjectbelief-abject-belief-fn1"><Link to="/trait/abject_belief">⮞</Link> Abject Belief <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1" id="main-traits_faith_def-fake-fn-1" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitabjectbelief-abject-belief-fn1-flavor">You cling tenaciously to a faith that is doubted by many, perhaps based around a god who has vanished, or was never a god in the first place. You refuse to forsake your beliefs despite all evidence, perhaps due to a need to belong, respect for tradition, or a religious experience. As a result, it is nearly impossible to convince you of your deity's absence.</Pair>
<Pair single="benefit" id="traitabjectbelief-abject-belief-fn1-benefit">You gain a +2 trait bonus on Will saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitauthoritarian-authoritarian-fn2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitauthoritarian-authoritarian-fn2"><Link to="/trait/authoritarian">⮞</Link> Authoritarian <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-2" id="main-traits_faith_def-fake-fn-2" data-hash-target to="main-traits_faith_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitauthoritarian-authoritarian-fn2-flavor">You spent much of your youth helping the clergy of your chosen faith perform their duties, and learned from them respect for authority.</Pair>
<Pair single="benefit" id="traitauthoritarian-authoritarian-fn2-benefit"><p>As long as you are acting in the service of a liege or leader you recognize as legitimate, you gain a +2 trait bonus on saving throws against fear and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/abadar">Abadarans</Link>, <Link to="/rule/hellknights">Hellknights</Link>, Hermeans.</p>
</Pair>
</Ability>
<Ability id="traitbirthmark-birthmark-fn3-fn4-fn5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbirthmark-birthmark-fn3-fn4-fn5"><Link to="/trait/birthmark">⮞</Link> Birthmark <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3" id="main-traits_faith_def-fake-fn-3" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-4" id="main-traits_faith_def-fake-fn-4" data-hash-target to="main-traits_faith_def-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-5" id="main-traits_faith_def-fake-fn-5" data-hash-target to="main-traits_faith_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitbirthmark-birthmark-fn3-fn4-fn5-benefit">You were born with a strange birthmark that looks very similar to the holy symbol of the god you chose to worship later in life. This birthmark can serve you as a divine focus for casting spells, and as a physical manifestation of your faith, and it increases your devotion to your god. You gain a +2 trait bonus on all saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitblessed-blessed-fn3-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitblessed-blessed-fn3-2"><Link to="/trait/blessed">⮞</Link> Blessed <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.2" id="main-traits_faith_def-fake-fn-3.2" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitblessed-blessed-fn3-2-flavor">Some divine agent watches over you and heeds your call.</Pair>
<Pair single="benefit" id="traitblessed-blessed-fn3-2-benefit">Once per day as a <strong className="hl">swift action</strong>, you gain a +1 trait bonus on all saving throws for 1 round.</Pair>
</Ability>
<Ability id="traitbornfree-born-free-fn1-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbornfree-born-free-fn1-2"><Link to="/trait/born_free">⮞</Link> Born Free <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.2" id="main-traits_faith_def-fake-fn-1.2" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitbornfree-born-free-fn1-2-flavor">You were introduced to an individualistic belief as a youth. Thriving under the promise of control of your own destiny, you soon began to demonstrate the truth of this ideal. Though others may mock you for your unwillingness to go along with a group or accept the easy security and comfort promised by more ecclesiastical faiths, you know that the revelations and destiny you seek can only be brought about through your own actions and individual search for meaning.</Pair>
<Pair single="benefit" id="traitbornfree-born-free-fn1-2-benefit">Once per day, after you roll a saving throw against a compulsion effect, you can choose to roll again as an <strong className="hl">immediate action</strong> before the result of the saving throw is announced. You must keep the new roll, even if it is worse.</Pair>
</Ability>
<Ability id="traitboundbyhonor-bound-by-honor-fn1-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitboundbyhonor-bound-by-honor-fn1-3"><Link to="/trait/bound_by_honor">⮞</Link> Bound by Honor <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.3" id="main-traits_faith_def-fake-fn-1.3" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitboundbyhonor-bound-by-honor-fn1-3-flavor">Your code of honor, obligations, and taboos stem from the shame of a misspent youth. Now, a personal code reminds you how to live, and you have an impressive ability to resist temptation.</Pair>
<Pair single="benefit" id="traitboundbyhonor-bound-by-honor-fn1-3-benefit">Once per day, if a mind-affecting effect would compel you to take an action that would cause you to lose <Link to="/rule/honor_points">Honor Points</Link>, you may make a new saving throw against the original DC to end the effect.</Pair>
</Ability>
<Ability id="traitcanonofcoin-canon-of-coin-fn6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcanonofcoin-canon-of-coin-fn6"><Link to="/trait/canon_of_coin">⮞</Link> Canon of Coin <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-6" id="main-traits_faith_def-fake-fn-6" data-hash-target to="main-traits_faith_def-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcanonofcoin-canon-of-coin-fn6-flavor">You find the pursuit of earning money to be a religious experience.</Pair>
<Pair single="benefit" id="traitcanonofcoin-canon-of-coin-fn6-benefit"><Link to="/skill/appraise">Appraise</Link> is a class skill for you. So long as you are carrying coins worth an amount equal to at least 100 gp per character level you have, you gain a +1 trait bonus on Will saves. This bonus increases to +2 against effects that would force you to discard, drop, or give away coins, gems, or trade goods in your possession.</Pair>
</Ability>
<Ability id="traitcrisisoffaith-crisis-of-faith-fn1-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcrisisoffaith-crisis-of-faith-fn1-4"><Link to="/trait/crisis_of_faith">⮞</Link> Crisis of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.4" id="main-traits_faith_def-fake-fn-1.4" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcrisisoffaith-crisis-of-faith-fn1-4-flavor">You were raised to uphold a specific set of tenets, and you never had reason to doubt their veracity. Recent events, however, have undermined that certainty, and you now find yourself wondering if any of the universal truths you once believed in can actually hold up to scrutiny. Perhaps you witnessed a mentor or church official fall from grace or violate your shared tenets. Maybe you watched a friend injured terribly despite (or because of) her pure faith. Whatever the case, your confidence was shaken.</Pair>
<Pair single="benefit" id="traitcrisisoffaith-crisis-of-faith-fn1-4-benefit"><p>Your shaken confidence grants you a +1 trait bonus on saving throws against illusions.</p>
<p>You may replace any other faith trait with the Crisis of Faith trait whenever you gain a level. This replacement is permanent until you receive <Link to="/spell/atonement">atonement</Link>.</p>
</Pair>
</Ability>
<Ability id="traitdarkestbeforedawn-darkest-before-dawn-fn7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdarkestbeforedawn-darkest-before-dawn-fn7"><Link to="/trait/darkest_before_dawn">⮞</Link> Darkest Before Dawn <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-7" id="main-traits_faith_def-fake-fn-7" data-hash-target to="main-traits_faith_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdarkestbeforedawn-darkest-before-dawn-fn7-flavor">Your devotion sustains you when others would fall to despair.</Pair>
<Pair single="benefit" id="traitdarkestbeforedawn-darkest-before-dawn-fn7-benefit">You gain a +2 trait bonus on saving throws against spells with the emotion, fear, or pain descriptor. Once per day, you can increase this bonus to +4 for a single save, but you must make this decision before you attempt the saving throw.</Pair>
</Ability>
<Ability id="traitdefymadness-defy-madness-fn8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdefymadness-defy-madness-fn8"><Link to="/trait/defy_madness">⮞</Link> Defy Madness <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-8" id="main-traits_faith_def-fake-fn-8" data-hash-target to="main-traits_faith_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitdefymadness-defy-madness-fn8-flavor">Your direct involvement with supernatural and alien forces has left you less vulnerable to the insanity they cause.</Pair>
<Pair single="benefit" id="traitdefymadness-defy-madness-fn8-benefit">You gain a +1 trait bonus on any saving throws against confusion, insanity, madness, and <Link to="/rule/wisdom_damage">Wisdom damage and drain</Link>.</Pair>
</Ability>
<Ability id="traitdevoutvisionary-devout-visionary-fn1-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevoutvisionary-devout-visionary-fn1-5"><Link to="/trait/devout_visionary">⮞</Link> Devout Visionary <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.5" id="main-traits_faith_def-fake-fn-1.5" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevoutvisionary-devout-visionary-fn1-5-flavor">As a child, you had a strange vision while suffering from a terrible illness, and only found your way back to the mundane world by following the call of a spiritual leader-perhaps a shaman's drum or a druid's lilting poetry. Since then, you have studied symbolism and dreams in the hope that you might understand your own vision, though your lessons prove just as helpful to others.</Pair>
<Pair single="benefit" id="traitdevoutvisionary-devout-visionary-fn1-5-benefit">You gain a +1 trait bonus on Will saving throws against spells and effects that grant the <Link to="/misc/confused">confused</Link> or <Link to="/misc/dazed">dazed</Link> condition. Once per day as a <strong className="hl">full-round action</strong>, you may grant an adjacent ally a new Will saving throw to end an effect that grants the confused or dazed condition.</Pair>
</Ability>
<Ability id="traitdisdainfuldefender-disdainful-defender-fn3-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdisdainfuldefender-disdainful-defender-fn3-3"><Link to="/trait/disdainful_defender">⮞</Link> Disdainful Defender <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.3" id="main-traits_faith_def-fake-fn-3.3" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdisdainfuldefender-disdainful-defender-fn3-3-flavor">You are resistant to the magic of other faiths.</Pair>
<Pair single="benefit" id="traitdisdainfuldefender-disdainful-defender-fn3-3-benefit">You gain a +2 trait bonus on all Will saves you attempt against divine spells. This bonus does not apply against divine spells cast by a caster who worships the same deity you do.</Pair>
</Ability>
<Ability id="traitdivinedenier-divine-denier-fn1-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdivinedenier-divine-denier-fn1-6"><Link to="/trait/divine_denier">⮞</Link> Divine Denier <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.6" id="main-traits_faith_def-fake-fn-1.6" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdivinedenier-divine-denier-fn1-6-flavor">You can't bring yourself to accept the authority of the gods, even though friends might hound you relentlessly to change your ways. Perhaps you're a Rahadoumi objecting on ideological grounds, or perhaps you just want to be left alone. Your doubt causes you to shrug off divine magic more quickly than others.</Pair>
<Pair single="benefit" id="traitdivinedenier-divine-denier-fn1-6-benefit">Once per day when you are affected by a divine spell, you may reduce that spell's duration to half (minimum 1 round) for you alone.</Pair>
</Ability>
<Ability id="traitdogged-dogged-fn9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdogged-dogged-fn9"><Link to="/trait/dogged">⮞</Link> Dogged <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-9" id="main-traits_faith_def-fake-fn-9" data-hash-target to="main-traits_faith_def-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdogged-dogged-fn9-flavor">Drawing inspiration from the Cult of the Failed, you refuse to let setbacks stop you, no matter how disastrous.</Pair>
<Pair single="benefit" id="traitdogged-dogged-fn9-benefit">Once per day when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.</Pair>
</Ability>
<Ability id="traitfatesfavored-fates-favored-fn3-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfatesfavored-fates-favored-fn3-4"><Link to="/trait/fates_favored">⮞</Link> Fate's Favored <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.4" id="main-traits_faith_def-fake-fn-3.4" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfatesfavored-fates-favored-fn3-4-flavor">The fates watch over you.</Pair>
<Pair single="benefit" id="traitfatesfavored-fates-favored-fn3-4-benefit">Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.</Pair>
</Ability>
<Ability id="traitfocuseddisciple-focused-disciple-fn3-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfocuseddisciple-focused-disciple-fn3-5"><Link to="/trait/focused_disciple">⮞</Link> Focused Disciple <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.5" id="main-traits_faith_def-fake-fn-3.5" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfocuseddisciple-focused-disciple-fn3-5-flavor">When weaker wills falter, you keep a clear mind.</Pair>
<Pair single="benefit" id="traitfocuseddisciple-focused-disciple-fn3-5-benefit">You gain a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traithiddenfaith-hidden-faith-fn10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithiddenfaith-hidden-faith-fn10"><Link to="/trait/hidden_faith">⮞</Link> Hidden Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-10" id="main-traits_faith_def-fake-fn-10" data-hash-target to="main-traits_faith_def-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithiddenfaith-hidden-faith-fn10-flavor">You were raised in a religion forbidden by your government, and draw strength from your hidden faith.</Pair>
<Pair single="benefit" id="traithiddenfaith-hidden-faith-fn10-benefit">You gain a +1 trait bonus on saving throws against the divine spells of creatures that worship a god other than your own.</Pair>
</Ability>
<Ability id="traithistoryofheresy-history-of-heresy-fn3-6-fn5-2-fn4-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithistoryofheresy-history-of-heresy-fn3-6-fn5-2-fn4-2"><Link to="/trait/history_of_heresy">⮞</Link> History of Heresy <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.6" id="main-traits_faith_def-fake-fn-3.6" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-5.2" id="main-traits_faith_def-fake-fn-5.2" data-hash-target to="main-traits_faith_def-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-4.2" id="main-traits_faith_def-fake-fn-4.2" data-hash-target to="main-traits_faith_def-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithistoryofheresy-history-of-heresy-fn3-6-fn5-2-fn4-2-flavor">You were raised with heretical views that have made it difficult for you to accept most religious beliefs and often caused you or those you love to be treated as pariahs. As a result, you have turned your back on religious teachings.</Pair>
<Pair single="benefit" id="traithistoryofheresy-history-of-heresy-fn3-6-fn5-2-fn4-2-benefit">As long as you do not possess any levels in a class that grants divine spellcasting power, you gain a +1 trait bonus on all saving throws against divine spells.</Pair>
</Ability>
<Ability id="traitindomitablefaith-indomitable-faith-fn3-7-fn4-3-fn5-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitindomitablefaith-indomitable-faith-fn3-7-fn4-3-fn5-3"><Link to="/trait/indomitable_faith">⮞</Link> Indomitable Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.7" id="main-traits_faith_def-fake-fn-3.7" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-4.3" id="main-traits_faith_def-fake-fn-4.3" data-hash-target to="main-traits_faith_def-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-5.3" id="main-traits_faith_def-fake-fn-5.3" data-hash-target to="main-traits_faith_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitindomitablefaith-indomitable-faith-fn3-7-fn4-3-fn5-3-flavor">You were born in a region where your faith was not popular, but you still have never abandoned it. Your constant struggle to maintain your own faith has bolstered your drive.</Pair>
<Pair single="benefit" id="traitindomitablefaith-indomitable-faith-fn3-7-fn4-3-fn5-3-benefit">You gain a +1 trait bonus on Will saves.</Pair>
</Ability>
<Ability id="traitinhabitantofillusion-inhabitant-of-illusion-fn11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitinhabitantofillusion-inhabitant-of-illusion-fn11"><Link to="/trait/inhabitant_of_illusion">⮞</Link> Inhabitant of Illusion <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-11" id="main-traits_faith_def-fake-fn-11" data-hash-target to="main-traits_faith_def-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Kyonin</Pair>
<Pair title="Requirements" hl>Ascoiated with the court of Kyonin</Pair>
<Pair single="flavor" id="traitinhabitantofillusion-inhabitant-of-illusion-fn11-flavor">Your experience with illusions allows you to discern them easily.</Pair>
<Pair single="benefit" id="traitinhabitantofillusion-inhabitant-of-illusion-fn11-benefit">When you first encounter an illusion, you can attempt a Will saving throw with a -2 penalty to disbelieve it, even if you don't suspect the illusion. The GM rolls this saving throw in secret.</Pair>
</Ability>
<Ability id="traitirrepressible-irrepressible-fn2-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitirrepressible-irrepressible-fn2-2"><Link to="/trait/irrepressible">⮞</Link> Irrepressible <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-2.2" id="main-traits_faith_def-fake-fn-2.2" data-hash-target to="main-traits_faith_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitirrepressible-irrepressible-fn2-2-flavor">Your hope for a brighter future blessed by the gods, combined with your powerful personality, allows you to force your way free of spells that cloud the mind.</Pair>
<Pair single="benefit" id="traitirrepressible-irrepressible-fn2-2-benefit"><p>You can use your Charisma modifier in place of your Wisdom modifier when attempting Will saving throws against charm and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/race/gnome">Gnomes</Link>, Keleshites, <Link to="/faith/shelyn">Shelyn</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitirreverent-irreverent-fn12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitirreverent-irreverent-fn12"><Link to="/trait/irreverent">⮞</Link> Irreverent <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-12" id="main-traits_faith_def-fake-fn-12" data-hash-target to="main-traits_faith_def-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitirreverent-irreverent-fn12-flavor">You are suspicious of those who lead spiritual lives and are quick to seek out the smallest hypocrisy in even the most pious individuals. Of course, you are also keenly aware of the power the faithful can draw from their worship, and you are stubbornly resistant to it.</Pair>
<Pair single="benefit" id="traitirreverent-irreverent-fn12-benefit">You gain a +2 trait bonus on saving throws against divine spells that target only you.</Pair>
</Ability>
<Ability id="traitjinxeater-jinx-eater-fn13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitjinxeater-jinx-eater-fn13"><Link to="/trait/jinx_eater">⮞</Link> Jinx Eater <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-13" id="main-traits_faith_def-fake-fn-13" data-hash-target to="main-traits_faith_def-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>The Shackles</Pair>
<Pair title="Requirements" hl><Link to="/race/tengu">Tengu</Link></Pair>
<Pair single="flavor" id="traitjinxeater-jinx-eater-fn13-flavor">Your presence dampens curses and other ill effects.</Pair>
<Pair single="benefit" id="traitjinxeater-jinx-eater-fn13-benefit">You gain a +1 trait bonus on saves against curses, including the hex class ability of shamans and witches. Once per day, you can grant this bonus to all allies within 30 feet for 1 round as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="traitluciddreamer-lucid-dreamer-fn8-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitluciddreamer-lucid-dreamer-fn8-2"><Link to="/trait/lucid_dreamer">⮞</Link> Lucid Dreamer <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-8.2" id="main-traits_faith_def-fake-fn-8.2" data-hash-target to="main-traits_faith_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Varisian wanderers or Wonderseekers</Pair>
<Pair single="flavor" id="traitluciddreamer-lucid-dreamer-fn8-2-flavor">Your dreams are a special place of power that only you get to enjoy; driving away threats to your subconscious is as easy as slamming a door.</Pair>
<Pair single="benefit" id="traitluciddreamer-lucid-dreamer-fn8-2-benefit">You receive a +1 trait bonus on <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks and a +2 trait bonus on Will saves against effects on your dreaming mind or subconscious, such as a <Link to="/monster/night_hag">night hag's</Link> dream haunting ability, the <Link to="/spell/nightmare">nightmare</Link> spell, and illusions of the <Link to="/spelldef/phantasm">phantasm</Link> subschool.</Pair>
</Ability>
<Ability id="traitmonastic-monastic-fn1-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmonastic-monastic-fn1-7"><Link to="/trait/monastic">⮞</Link> Monastic <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.7" id="main-traits_faith_def-fake-fn-1.7" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmonastic-monastic-fn1-7-flavor">Either your parents sent you to be raised in a monastery, or you traveled there yourself later in life in order to escape the conflict and distractions of the greater world. There you learned to eschew the material concerns that plague so many and cloud their minds, instead embracing an ascetic lifestyle. You readily let go and step away from trouble, free from any tie or baggage that might slow your path to enlightenment-figuratively or literally.</Pair>
<Pair single="benefit" id="traitmonastic-monastic-fn1-7-benefit">Once per day as a <strong className="hl">swift action</strong>, you gain a +1 trait bonus to Armor Class as long as you are wearing no armor, not using a shield, carrying a light load, and have nothing in your hands. This bonus lasts for 1 minute.</Pair>
</Ability>
<Ability id="traitnatureworshiper-nature-worshiper-fn1-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnatureworshiper-nature-worshiper-fn1-8"><Link to="/trait/nature_worshiper">⮞</Link> Nature Worshiper <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.8" id="main-traits_faith_def-fake-fn-1.8" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitnatureworshiper-nature-worshiper-fn1-8-flavor">When you were young, you saw a dead creature's body fertilize a field. Witnessing the connection between life and death moved you to recognize your own connection with the world, and ever since you have revered nature and feared death less.</Pair>
<Pair single="benefit" id="traitnatureworshiper-nature-worshiper-fn1-8-benefit">You gain a +1 trait bonus on saving throws against death effects and effects that use negative energy, such as <Link to="/rule/energy_drain">energy drain</Link> and <Link to="/main/inflict_spells">inflict spells</Link>.</Pair>
</Ability>
<Ability id="traitnecroticaura-necrotic-aura-fn8-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnecroticaura-necrotic-aura-fn8-3"><Link to="/trait/necrotic_aura">⮞</Link> Necrotic Aura <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-8.3" id="main-traits_faith_def-fake-fn-8.3" data-hash-target to="main-traits_faith_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="flavor" id="traitnecroticaura-necrotic-aura-fn8-3-flavor">Your exposure to the necromantic arts has strengthened your defenses against its vile rot.</Pair>
<Pair single="benefit" id="traitnecroticaura-necrotic-aura-fn8-3-benefit">You gain a +1 trait bonus on saving throws against spells from the necromancy school or any effect that deals negative energy damage.</Pair>
</Ability>
<Ability id="traitoathbound-oathbound-fn3-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitoathbound-oathbound-fn3-8"><Link to="/trait/oathbound">⮞</Link> Oathbound <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.8" id="main-traits_faith_def-fake-fn-3.8" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitoathbound-oathbound-fn3-8-flavor">You have made a solemn oath, and you pursue that oath with headstrong determination.</Pair>
<Pair single="benefit" id="traitoathbound-oathbound-fn3-8-benefit">Once per day, you may reroll a saving throw against a charm or compulsion effect. You must take the second result even if it is worse.</Pair>
</Ability>
<Ability id="traitprincipled-principled-fn3-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitprincipled-principled-fn3-9"><Link to="/trait/principled">⮞</Link> Principled <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.9" id="main-traits_faith_def-fake-fn-3.9" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitprincipled-principled-fn3-9-flavor">You hold yourself to a strict code of behavior that guides all of your decisions and actions.</Pair>
<Pair single="benefit" id="traitprincipled-principled-fn3-9-benefit">You take a -2 penalty on <Link to="/skill/bluff">Bluff</Link> checks and gain a +2 trait bonus on saving throws against charm, compulsion, and emotion effects.</Pair>
</Ability>
<Ability id="traitreincarnated-reincarnated-fn3-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreincarnated-reincarnated-fn3-10"><Link to="/trait/reincarnated">⮞</Link> Reincarnated <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.10" id="main-traits_faith_def-fake-fn-3.10" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitreincarnated-reincarnated-fn3-10-flavor">You lived a previous life as someone - or something - else. For you, life and death are a cycle, and you have no fear of death.</Pair>
<Pair single="benefit" id="traitreincarnated-reincarnated-fn3-10-benefit">You gain a +2 trait bonus on saving throws against fear and death effects.</Pair>
</Ability>
<Ability id="traitreligiousreformer-religious-reformer-fn1-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreligiousreformer-religious-reformer-fn1-9"><Link to="/trait/religious_reformer">⮞</Link> Religious Reformer <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-1.9" id="main-traits_faith_def-fake-fn-1.9" data-hash-target to="main-traits_faith_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitreligiousreformer-religious-reformer-fn1-9-flavor">You have spent many years studying the tenets of your faith, and now believe that the dominant factions within the church have deviated from its true meaning and purpose. Rather than breaking with your misguided church, you've decided to stand up and fight to reform the organization you love. You have fervently studied scripture and steeled your will to combat the divergent beliefs of your peers.</Pair>
<Pair single="benefit" id="traitreligiousreformer-religious-reformer-fn1-9-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks that pertain to your own religion or spiritual practice, and you gain a +2 trait bonus on saving throws against spells cast by others who worship your god or adhere to your philosophy.</Pair>
</Ability>
<Ability id="traitscourgeofthedarkness-scourge-of-the-darkness-fn14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscourgeofthedarkness-scourge-of-the-darkness-fn14"><Link to="/trait/scourge_of_the_darkness">⮞</Link> Scourge of the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-14" id="main-traits_faith_def-fake-fn-14" data-hash-target to="main-traits_faith_def-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn14-flavor">Stories of the depredations present in the Darklands drive you to explore its shadowy depths and purge the corruption from within.</Pair>
<Pair single="benefit" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn14-benefit">You gain a +1 trait bonus on saving throws against fear while in the Darklands and a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against creatures native to the Darklands.</Pair>
</Ability>
<Ability id="traitsoulsearchersstrength-soul-searchers-strength-fn15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsoulsearchersstrength-soul-searchers-strength-fn15"><Link to="/trait/soul_searchers_strength">⮞</Link> Soul-Searcher's Strength <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-15" id="main-traits_faith_def-fake-fn-15" data-hash-target to="main-traits_faith_def-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must follow the traditions of the <Link to="/rule/rivethun">Rivethun</Link></Pair>
<Pair single="flavor" id="traitsoulsearchersstrength-soul-searchers-strength-fn15-flavor">Your introspections have taught you to understand your own flaws and proclivities and how to work with them.</Pair>
<Pair single="benefit" id="traitsoulsearchersstrength-soul-searchers-strength-fn15-benefit">Choose one saving throw. You gain a +1 trait bonus on saving throws of the chosen kind.</Pair>
</Ability>
<Ability id="traitundaunted-undaunted-fn7-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitundaunted-undaunted-fn7-2"><Link to="/trait/undaunted">⮞</Link> Undaunted <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-7.2" id="main-traits_faith_def-fake-fn-7.2" data-hash-target to="main-traits_faith_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitundaunted-undaunted-fn7-2-flavor">Following the path of freedom has resulted in you being threatened by ruffians and bullies throughout your childhood, and it now takes a lot to rattle you.</Pair>
<Pair single="benefit" id="traitundaunted-undaunted-fn7-2-benefit">You increase the DC to demoralize you with an <Link to="/skill/intimidate">Intimidate</Link> check by 2.</Pair>
</Ability>
<Ability id="traitwanderersshroud-wanderers-shroud-fn3-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitwanderersshroud-wanderers-shroud-fn3-11"><Link to="/trait/wanderers_shroud">⮞</Link> Wanderer's Shroud <sup><InnerLink showBacklink="backlink-main-traits_faith_def-fake-fn-3.11" id="main-traits_faith_def-fake-fn-3.11" data-hash-target to="main-traits_faith_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitwanderersshroud-wanderers-shroud-fn3-11-flavor">Your wanderings often go unnoticed.</Pair>
<Pair single="benefit" id="traitwanderersshroud-wanderers-shroud-fn3-11-benefit">Efforts to use the <Link to="/skill/diplomacy">Diplomacy</Link> skill to gather information about you take a -1 penalty, and you gain a +1 trait bonus on all saving throws against scrying and mindreading effects that allow saving throws.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_def-label">Footnotes</h3><ol>
<li id="main-traits_faith_def-fake-fn-1-target"><p><Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1" data-hash-target to="main-traits_faith_def-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.2" data-hash-target to="main-traits_faith_def-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.3" data-hash-target to="main-traits_faith_def-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.4" data-hash-target to="main-traits_faith_def-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.5" data-hash-target to="main-traits_faith_def-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.6" data-hash-target to="main-traits_faith_def-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.7" data-hash-target to="main-traits_faith_def-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.8" data-hash-target to="main-traits_faith_def-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_def-fake-fn-1.9" data-hash-target to="main-traits_faith_def-fake-fn-1.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-2-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_def-fake-fn-2" data-hash-target to="main-traits_faith_def-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_def-fake-fn-2.2" data-hash-target to="main-traits_faith_def-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3" data-hash-target to="main-traits_faith_def-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.2" data-hash-target to="main-traits_faith_def-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.3" data-hash-target to="main-traits_faith_def-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.4" data-hash-target to="main-traits_faith_def-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.5" data-hash-target to="main-traits_faith_def-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.6" data-hash-target to="main-traits_faith_def-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.7" data-hash-target to="main-traits_faith_def-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.8" data-hash-target to="main-traits_faith_def-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.9" data-hash-target to="main-traits_faith_def-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.10" data-hash-target to="main-traits_faith_def-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_def-fake-fn-3.11" data-hash-target to="main-traits_faith_def-fake-fn-3.11">↩<sup>11</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-4-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_def-fake-fn-4" data-hash-target to="main-traits_faith_def-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_def-fake-fn-4.2" data-hash-target to="main-traits_faith_def-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_def-fake-fn-4.3" data-hash-target to="main-traits_faith_def-fake-fn-4.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-5-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_def-fake-fn-5" data-hash-target to="main-traits_faith_def-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_def-fake-fn-5.2" data-hash-target to="main-traits_faith_def-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_def-fake-fn-5.3" data-hash-target to="main-traits_faith_def-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-6-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_def-fake-fn-6" data-hash-target to="main-traits_faith_def-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-7-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_def-fake-fn-7" data-hash-target to="main-traits_faith_def-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_def-fake-fn-7.2" data-hash-target to="main-traits_faith_def-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-8-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_def-fake-fn-8" data-hash-target to="main-traits_faith_def-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_def-fake-fn-8.2" data-hash-target to="main-traits_faith_def-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_def-fake-fn-8.3" data-hash-target to="main-traits_faith_def-fake-fn-8.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-9-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_def-fake-fn-9" data-hash-target to="main-traits_faith_def-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-10-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_def-fake-fn-10" data-hash-target to="main-traits_faith_def-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-11-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_def-fake-fn-11" data-hash-target to="main-traits_faith_def-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-12-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith_def-fake-fn-12" data-hash-target to="main-traits_faith_def-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-13-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_def-fake-fn-13" data-hash-target to="main-traits_faith_def-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-14-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_def-fake-fn-14" data-hash-target to="main-traits_faith_def-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_faith_def-fake-fn-15-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith_def-fake-fn-15" data-hash-target to="main-traits_faith_def-fake-fn-15">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_faith_combat = {title: "Combat-Related Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitcalled-called-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcalled-called-fn1"><Link to="/trait/called">⮞</Link> Called <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-1" id="main-traits_faith_combat-fake-fn-1" data-hash-target to="main-traits_faith_combat-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcalled-called-fn1-flavor">Your deity or a powerful spirit spoke to you when you were young, dropping cryptic hints about the important destiny that lay before you and how you must win your fights if you are to achieve your predetermined greatness.</Pair>
<Pair single="benefit" id="traitcalled-called-fn1-benefit"><p>Once per day upon rolling a natural 1 on an attack roll, you may reroll the die and take the second result instead.</p>
<p><strong>Suggested Characters:</strong> Oracles, paladins, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitcrusader-crusader-fn2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcrusader-crusader-fn2"><Link to="/trait/crusader">⮞</Link> Crusader <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-2" id="main-traits_faith_combat-fake-fn-2" data-hash-target to="main-traits_faith_combat-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcrusader-crusader-fn2-flavor">From studying "Prime Commander" and reading accounts of the battles in the Worldwound, you have trained to be a crusader against demonic forces.</Pair>
<Pair single="benefit" id="traitcrusader-crusader-fn2-benefit">You gain a +1 trait bonus on attack rolls against outsiders with the chaotic subtype.</Pair>
</Ability>
<Ability id="traitdogged-dogged-fn3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdogged-dogged-fn3"><Link to="/trait/dogged">⮞</Link> Dogged <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-3" id="main-traits_faith_combat-fake-fn-3" data-hash-target to="main-traits_faith_combat-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdogged-dogged-fn3-flavor">Drawing inspiration from the Cult of the Failed, you refuse to let setbacks stop you, no matter how disastrous.</Pair>
<Pair single="benefit" id="traitdogged-dogged-fn3-benefit">Once per day when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.</Pair>
</Ability>
<Ability id="traitfatesfavored-fates-favored-fn4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfatesfavored-fates-favored-fn4"><Link to="/trait/fates_favored">⮞</Link> Fate's Favored <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-4" id="main-traits_faith_combat-fake-fn-4" data-hash-target to="main-traits_faith_combat-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfatesfavored-fates-favored-fn4-flavor">The fates watch over you.</Pair>
<Pair single="benefit" id="traitfatesfavored-fates-favored-fn4-benefit">Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.</Pair>
</Ability>
<Ability id="traitheedfulreadiness-heedful-readiness-fn2-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitheedfulreadiness-heedful-readiness-fn2-2"><Link to="/trait/heedful_readiness">⮞</Link> Heedful Readiness <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-2.2" id="main-traits_faith_combat-fake-fn-2.2" data-hash-target to="main-traits_faith_combat-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitheedfulreadiness-heedful-readiness-fn2-2-flavor">Your years of meditation and mindfulness allow you to act correctly on a moment's notice.</Pair>
<Pair single="benefit" id="traitheedfulreadiness-heedful-readiness-fn2-2-benefit">Once per day, you can add your Wisdom modifier to an initiative check.</Pair>
</Ability>
<Ability id="traitpersuasiveinsight-persuasive-insight-fn5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpersuasiveinsight-persuasive-insight-fn5"><Link to="/trait/persuasive_insight">⮞</Link> Persuasive Insight <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-5" id="main-traits_faith_combat-fake-fn-5" data-hash-target to="main-traits_faith_combat-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpersuasiveinsight-persuasive-insight-fn5-flavor">You were converted to your faith or taught to bargain with spirits for magic by a figure of inspiring insight who taught you to use keen observation in all dealings.</Pair>
<Pair single="benefit" id="traitpersuasiveinsight-persuasive-insight-fn5-benefit">You can use your Wisdom modifier in place of your Charisma modifier on <Link to="/skill/diplomacy">Diplomacy</Link> checks to ask favors or gain influence. During a <Link to="/rule/verbal_duels">verbal duel</Link>, you can use your Wisdom modifier in place of your Charisma modifier when using tactics you assigned to Diplomacy or Wisdom-based skills.</Pair>
</Ability>
<Ability id="traitstrengthofsubmission-strength-of-submission-fn2-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstrengthofsubmission-strength-of-submission-fn2-3"><Link to="/trait/strength_of_submission">⮞</Link> Strength of Submission <sup><InnerLink showBacklink="backlink-main-traits_faith_combat-fake-fn-2.3" id="main-traits_faith_combat-fake-fn-2.3" data-hash-target to="main-traits_faith_combat-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitstrengthofsubmission-strength-of-submission-fn2-3-flavor">Your faith in the church of Razmir and willingness to surrender yourself to him lend you strength and clarity.</Pair>
<Pair single="benefit" id="traitstrengthofsubmission-strength-of-submission-fn2-3-benefit">Whenever you are under the effects of a compulsion effect, you gain a +1 trait bonus on attack and damage rolls.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_combat-label">Footnotes</h3><ol>
<li id="main-traits_faith_combat-fake-fn-1-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_combat-fake-fn-1" data-hash-target to="main-traits_faith_combat-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_faith_combat-fake-fn-2-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_combat-fake-fn-2" data-hash-target to="main-traits_faith_combat-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_combat-fake-fn-2.2" data-hash-target to="main-traits_faith_combat-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_combat-fake-fn-2.3" data-hash-target to="main-traits_faith_combat-fake-fn-2.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_combat-fake-fn-3-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_combat-fake-fn-3" data-hash-target to="main-traits_faith_combat-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_faith_combat-fake-fn-4-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_combat-fake-fn-4" data-hash-target to="main-traits_faith_combat-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_faith_combat-fake-fn-5-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_combat-fake-fn-5" data-hash-target to="main-traits_faith_combat-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_faith_spell = {title: "Spell Ability Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitapprentice-apprentice-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitapprentice-apprentice-fn1"><Link to="/trait/apprentice">⮞</Link> Apprentice <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-1" id="main-traits_faith_spell-fake-fn-1" data-hash-target to="main-traits_faith_spell-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitapprentice-apprentice-fn1-flavor">During your studies of The Majestic Book of the Prime Ascended, you learned some minor magical tricks.</Pair>
<Pair single="benefit" id="traitapprentice-apprentice-fn1-benefit">Select a single 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. You can cast this spell 1 time per day as a spell-like ability.</Pair>
</Ability>
<Ability id="traitchosenofiomedae-chosen-of-iomedae-fn2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchosenofiomedae-chosen-of-iomedae-fn2"><Link to="/trait/chosen_of_iomedae">⮞</Link> Chosen of Iomedae <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-2" id="main-traits_faith_spell-fake-fn-2" data-hash-target to="main-traits_faith_spell-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchosenofiomedae-chosen-of-iomedae-fn2-flavor">At your birth, your parents dedicated your soul to <Link to="/faith/iomedae">Iomedae</Link> to mold into a sword of her light. The goddess blessed you, granting you a gift of light to brighten your path through darkness and a fine sword with which to spread her will.</Pair>
<Pair single="benefit" id="traitchosenofiomedae-chosen-of-iomedae-fn2-benefit">You may cast <Link to="/spell/light">light</Link> once per day as a spell-like ability (caster level 1st), and you begin play with a <Link to="/rule/masterwork_w">masterwork</Link> <Link to="/eq-weapon/longsword">longsword</Link>. In addition, whenever <em>light</em> is cast upon this sword, the radius of light and its duration is doubled.</Pair>
</Ability>
<Ability id="traitfirstmemories-first-memories-fn3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfirstmemories-first-memories-fn3"><Link to="/trait/first_memories">⮞</Link> First Memories <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-3" id="main-traits_faith_spell-fake-fn-3" data-hash-target to="main-traits_faith_spell-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="traitfirstmemories-first-memories-fn3-flavor">For your whole life, you've felt there was a world just beyond the fabric of the material objects around you, and sometimes you can hear the north wind calling you or smell the dread taint of polluted water before you taste it.</Pair>
<Pair single="benefit" id="traitfirstmemories-first-memories-fn3-benefit">You do not gain the normal list of spell-like abilities for the <em>gnome magic</em> racial trait. Instead, if you have a Wisdom of 11 of higher, you gain the following spell-like abilities: 1/day-<Link to="/spell/detect_poison">detect poison</Link>, <Link to="/spell/know_direction">know direction</Link>, <Link to="/spell/stabilize">stabilize</Link>, and <Link to="/spell/speak_with_animals">speak with animals</Link>. The caster level for these effects is equal to your character level. The DC for these spells is equal to 10 + the spell's level + your Wisdom modifier.</Pair>
</Ability>
<Ability id="traitnaturallygifted-naturally-gifted-fn3-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturallygifted-naturally-gifted-fn3-2"><Link to="/trait/naturally_gifted">⮞</Link> Naturally Gifted <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-3.2" id="main-traits_faith_spell-fake-fn-3.2" data-hash-target to="main-traits_faith_spell-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="traitnaturallygifted-naturally-gifted-fn3-2-flavor">For unknown reasons, you have deeper reserves of magical energy than those around you. Perhaps you are descended from a family of powerful arcane casters, or maybe you believe this trait marks you as destined for magical greatness.</Pair>
<Pair single="benefit" id="traitnaturallygifted-naturally-gifted-fn3-2-benefit">You gain an additional use of one of your <em>gnome magic</em> spell-like abilities each day. This does not always have to be the same spell-like ability - one day you might use <Link to="/spell/dancing_lights">dancing lights</Link> twice, only to use the additional casting for <Link to="/spell/speak_with_animals">speak with animals</Link> the next day.</Pair>
</Ability>
<Ability id="traitrebukethecurse-rebuke-the-curse-fn4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitrebukethecurse-rebuke-the-curse-fn4"><Link to="/trait/rebuke_the_curse">⮞</Link> Rebuke the Curse <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-4" id="main-traits_faith_spell-fake-fn-4" data-hash-target to="main-traits_faith_spell-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitrebukethecurse-rebuke-the-curse-fn4-benefit"><p>Once per day, you can attempt to suppress the effects of a curse on a single creature with a touch. This functions as a <Link to="/spell/remove_curse">remove curse</Link> spell, treating your character level as your caster level. If you succeed at your caster level check against the curse, the curse's effects are negated for 1 minute.</p>
<p>This trait does not allow a person burdened with a cursed item to remove or discard it. Use of this trait is a supernatural ability.</p>
</Pair>
</Ability>
<Ability id="traitsacredtouch-sacred-touch-fn5-fn6-fn7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsacredtouch-sacred-touch-fn5-fn6-fn7"><Link to="/trait/sacred_touch">⮞</Link> Sacred Touch <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-5" id="main-traits_faith_spell-fake-fn-5" data-hash-target to="main-traits_faith_spell-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-6" id="main-traits_faith_spell-fake-fn-6" data-hash-target to="main-traits_faith_spell-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-7" id="main-traits_faith_spell-fake-fn-7" data-hash-target to="main-traits_faith_spell-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitsacredtouch-sacred-touch-fn5-fn6-fn7-flavor">You were exposed to a potent source of positive energy as a child, perhaps by being born under the right cosmic sign, or maybe because one of your parents was a gifted healer.</Pair>
<Pair single="benefit" id="traitsacredtouch-sacred-touch-fn5-fn6-fn7-benefit">As a <strong className="hl">standard action</strong>, you may automatically <Link to="/spell/stabilize">stabilize</Link> a <Link to="/misc/dying">dying</Link> creature merely by touching it.</Pair>
</Ability>
<Ability id="traitselfsustaining-self-sustaining-fn8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitselfsustaining-self-sustaining-fn8"><Link to="/trait/self_sustaining">⮞</Link> Self-Sustaining <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-8" id="main-traits_faith_spell-fake-fn-8" data-hash-target to="main-traits_faith_spell-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>See text</Pair>
<Pair single="flavor" id="traitselfsustaining-self-sustaining-fn8-flavor">As a follower of Razmir, the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, or some other tradition that preaches self-reliance, you make a point of not seeking divine aid for minor matters.</Pair>
<Pair single="benefit" id="traitselfsustaining-self-sustaining-fn8-benefit">When you gain this trait, choose one of the following 0-level spells: <Link to="/spell/create_water">create water</Link>, <Link to="/spell/mending">mending</Link>, <Link to="/spell/purify_food_and_drink">purify food and drink</Link>, or <Link to="/spell/stabilize">stabilize</Link>. You can cast this spell once per day as a spell-like ability, using your character level as your caster level. Once chosen, this selection can't change.</Pair>
</Ability>
<Ability id="traitstclydwellsward-st-clydwells-ward-fn9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstclydwellsward-st-clydwells-ward-fn9"><Link to="/trait/st_clydwells_ward">⮞</Link> St. Clydwell's Ward <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-9" id="main-traits_faith_spell-fake-fn-9" data-hash-target to="main-traits_faith_spell-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="flavor" id="traitstclydwellsward-st-clydwells-ward-fn9-flavor">You have learned the secrets of an ancient prayer that wards off the attacks of demons.</Pair>
<Pair single="benefit" id="traitstclydwellsward-st-clydwells-ward-fn9-benefit">As a <strong className="hl">standard action</strong>, you can recite a holy chant that affects <Link to="/family/demon">demons</Link> as if you were under the effect of a <Link to="/spell/sanctuary">sanctuary</Link> spell (caster level equal to 1/2 your Hit Dice + your Charisma modifier).</Pair>
</Ability>
<Ability id="traittarbaphonswhisper-tar-baphons-whisper-fn9-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittarbaphonswhisper-tar-baphons-whisper-fn9-2"><Link to="/trait/tar_baphons_whisper">⮞</Link> Tar-Baphon's Whisper <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-9.2" id="main-traits_faith_spell-fake-fn-9.2" data-hash-target to="main-traits_faith_spell-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="flavor" id="traittarbaphonswhisper-tar-baphons-whisper-fn9-2-flavor">You have learned the secrets of <em>sotto voce,</em> the eerie, dry whispering voice used to pass on cult secrets.</Pair>
<Pair single="benefit" id="traittarbaphonswhisper-tar-baphons-whisper-fn9-2-benefit">You may cast <Link to="/spell/sotto_voce">sotto voce</Link> as a spell-like ability three times per day as a spell-like ability. This spell-like ability is cast at your highest caster level; if you have no caster level, it functions at CL 1st.</Pair>
</Ability>
<Ability id="traittotemist-totemist-fn10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittotemist-totemist-fn10"><Link to="/trait/totemist">⮞</Link> Totemist <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-10" id="main-traits_faith_spell-fake-fn-10" data-hash-target to="main-traits_faith_spell-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traittotemist-totemist-fn10-flavor">You grew up in a culture where the touch of totem spirits was felt in everyday life, their subtle urgings constantly guiding you and keeping you safe. As a result, you learned quickly to ask for their help when trouble arises.</Pair>
<Pair single="benefit" id="traittotemist-totemist-fn10-benefit">Once per day, you may call upon your totem's wisdom as a <strong className="hl">standard action</strong>. You gain the benefits of <Link to="/spell/guidance">guidance</Link>, except that the granted competence bonus is equal to half your character level (minimum +1). This is a supernatural ability.</Pair>
</Ability>
<Ability id="traitwendifaapprentice-wendifa-apprentice-fn10-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitwendifaapprentice-wendifa-apprentice-fn10-2"><Link to="/trait/wendifa_apprentice">⮞</Link> Wendifa Apprentice <sup><InnerLink showBacklink="backlink-main-traits_faith_spell-fake-fn-10.2" id="main-traits_faith_spell-fake-fn-10.2" data-hash-target to="main-traits_faith_spell-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitwendifaapprentice-wendifa-apprentice-fn10-2-flavor">For a time during your childhood, you were left in the care of a juju oracle or wendifa, who saw your potential and taught you simple juju magic to influence the weakminded for brief periods of time.</Pair>
<Pair single="benefit" id="traitwendifaapprentice-wendifa-apprentice-fn10-2-benefit">You can use <Link to="/spell/daze">daze</Link> as a spell-like ability once per day, using your character level as your caster level (minimum 1). The save DC of this effect is Charisma-based. The dazed individual looks ashen and deathly for the duration of the effect.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_spell-label">Footnotes</h3><ol>
<li id="main-traits_faith_spell-fake-fn-1-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_spell-fake-fn-1" data-hash-target to="main-traits_faith_spell-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-2-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_spell-fake-fn-2" data-hash-target to="main-traits_faith_spell-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-3-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_spell-fake-fn-3" data-hash-target to="main-traits_faith_spell-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_spell-fake-fn-3.2" data-hash-target to="main-traits_faith_spell-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-4-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_spell-fake-fn-4" data-hash-target to="main-traits_faith_spell-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-5-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_spell-fake-fn-5" data-hash-target to="main-traits_faith_spell-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-6-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_spell-fake-fn-6" data-hash-target to="main-traits_faith_spell-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-7-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_spell-fake-fn-7" data-hash-target to="main-traits_faith_spell-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-8-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_spell-fake-fn-8" data-hash-target to="main-traits_faith_spell-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-9-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_spell-fake-fn-9" data-hash-target to="main-traits_faith_spell-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_spell-fake-fn-9.2" data-hash-target to="main-traits_faith_spell-fake-fn-9.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_spell-fake-fn-10-target"><p><Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_spell-fake-fn-10" data-hash-target to="main-traits_faith_spell-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_spell-fake-fn-10.2" data-hash-target to="main-traits_faith_spell-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_faith_magic = {title: "Magic-Related Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traiteyeforthewondrous-eye-for-the-wondrous-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteyeforthewondrous-eye-for-the-wondrous-fn1"><Link to="/trait/eye_for_the_wondrous">⮞</Link> Eye for the Wondrous <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-1" id="main-traits_faith_magic-fake-fn-1" data-hash-target to="main-traits_faith_magic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Katapesh</Pair>
<Pair single="flavor" id="traiteyeforthewondrous-eye-for-the-wondrous-fn1-flavor">Your experience with magic items clues you in to their properties more quickly than others.</Pair>
<Pair single="benefit" id="traiteyeforthewondrous-eye-for-the-wondrous-fn1-benefit">You can identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link> in 1 round.</Pair>
</Ability>
<Ability id="traithavocofthesociety-havoc-of-the-society-fn2-fn3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithavocofthesociety-havoc-of-the-society-fn2-fn3"><Link to="/trait/havoc_of_the_society">⮞</Link> Havoc of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-2" id="main-traits_faith_magic-fake-fn-2" data-hash-target to="main-traits_faith_magic-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-3" id="main-traits_faith_magic-fake-fn-3" data-hash-target to="main-traits_faith_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traithavocofthesociety-havoc-of-the-society-fn2-fn3-flavor">Through countless hours studying vast libraries of arcane power, you have learned how to cause greater damage to your foes.</Pair>
<Pair single="benefit" id="traithavocofthesociety-havoc-of-the-society-fn2-fn3-benefit">Whenever you cast a spell that deals damage, you gain a +1 trait bonus to the total damage dealt. This damage is considered force damage regardless of the type of damage dealt by the spell.</Pair>
</Ability>
<Ability id="traitsecondtongue-second-tongue-fn3-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsecondtongue-second-tongue-fn3-2"><Link to="/trait/second_tongue">⮞</Link> Second Tongue <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-3.2" id="main-traits_faith_magic-fake-fn-3.2" data-hash-target to="main-traits_faith_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitsecondtongue-second-tongue-fn3-2-flavor">Using an ancient and painful surgical technique, you've reshaped your tongue. These surgical mutilations permit you to speak ancient words unpronounceable to most mortals, enhancing your ability to work magic associated with the Great Old Ones.</Pair>
<Pair single="benefit" id="traitsecondtongue-second-tongue-fn3-2-benefit">Any summoning or divination spell you cast to summon or contact a Great Old One or one of their minions is cast at +1 caster level.</Pair>
</Ability>
<Ability id="traitstrengthoftheland-strength-of-the-land-fn4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstrengthoftheland-strength-of-the-land-fn4"><Link to="/trait/strength_of_the_land">⮞</Link> Strength of the Land <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-4" id="main-traits_faith_magic-fake-fn-4" data-hash-target to="main-traits_faith_magic-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traitstrengthoftheland-strength-of-the-land-fn4-flavor">You are able to tap into the living energy of the world to shatter lesser magic.</Pair>
<Pair single="benefit" id="traitstrengthoftheland-strength-of-the-land-fn4-benefit">You gain a +1 trait bonus on caster level checks while touching the ground or unworked stone. This includes <Link to="/spell/dispel_magic">dispel</Link> checks and checks to overcome spell resistance.</Pair>
</Ability>
<Ability id="traittrickstergnome-trickster-gnome-fn5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittrickstergnome-trickster-gnome-fn5"><Link to="/trait/trickster_gnome">⮞</Link> Trickster (Gnome) <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-5" id="main-traits_faith_magic-fake-fn-5" data-hash-target to="main-traits_faith_magic-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traittrickstergnome-trickster-gnome-fn5-flavor">You are particularly adept with your racial spell-like abilities, and as child you quickly learned how <Link to="/spell/dancing_lights">dancing lights</Link> and <Link to="/spell/ghost_sound">ghost sound</Link> could be used to amuse your friends and fool your elders. This natural talent for illusion continued as you grew older, and before long you were being offered training in more advanced figments and glamers.</Pair>
<Pair single="benefit" id="traittrickstergnome-trickster-gnome-fn5-benefit">You gain a +1 trait bonus to your caster level when determining the duration, range, and area of all spells from the illusion school.</Pair>
</Ability>
<Ability id="traitviledomain-vile-domain-fn6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitviledomain-vile-domain-fn6"><Link to="/trait/vile_domain">⮞</Link> Vile Domain <sup><InnerLink showBacklink="backlink-main-traits_faith_magic-fake-fn-6" id="main-traits_faith_magic-fake-fn-6" data-hash-target to="main-traits_faith_magic-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitviledomain-vile-domain-fn6-flavor">Your connection with a malignant force has granted you great power.</Pair>
<Pair single="benefit" id="traitviledomain-vile-domain-fn6-benefit">Choose a domain granted by an evil aligned deity, such as an archdevil, demon lord, or Great Old One. You gain a +1 trait bonus to your caster level when casting spells that are granted by that domain. This doesn't grant you the ability to cast such spells-you must still have access to the spells through some other means.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_magic-label">Footnotes</h3><ol>
<li id="main-traits_faith_magic-fake-fn-1-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_magic-fake-fn-1" data-hash-target to="main-traits_faith_magic-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_faith_magic-fake-fn-2-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_magic-fake-fn-2" data-hash-target to="main-traits_faith_magic-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_faith_magic-fake-fn-3-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_magic-fake-fn-3" data-hash-target to="main-traits_faith_magic-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_magic-fake-fn-3.2" data-hash-target to="main-traits_faith_magic-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_magic-fake-fn-4-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_magic-fake-fn-4" data-hash-target to="main-traits_faith_magic-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_faith_magic-fake-fn-5-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_magic-fake-fn-5" data-hash-target to="main-traits_faith_magic-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_faith_magic-fake-fn-6-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_magic-fake-fn-6" data-hash-target to="main-traits_faith_magic-fake-fn-6">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_faith_class = {title: "Class-Specific Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn1" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn1"><Link to="/trait/acolyte_of_apocrypha">⮞</Link> Acolyte of Apocrypha <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-1" id="main-traits_faith_class-fake-fn-1" data-hash-target to="main-traits_faith_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn1-flavor">Your religious studies hinged on teachings rarely recognized by your faith.</Pair>
<Pair single="benefit" id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn1-benefit"><p>You can select one of the apocryphal subdomains detailed below, provided the subdomain is associated with your patron deity. In some cases, you can select a subdomain associated with a deity despite that deity not offering the associated domain - these exceptions are noted with an asterisk (&#42;), and you gain domain powers and domain spells from the associated domain as usual, even though your deity normally doesn't grant access to that domain.</p>
<p>When selecting a subdomain associated with two domains, a priest can choose only a subdomain that modifies a domain to which he has access.</p>
</Pair>
</Ability>
<Ability id="domainalchemy-domainartificedomainmagic" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainalchemy-domainartificedomainmagic"><Link to="/domain/alchemy">Alchemy</Link> (<Link to="/domain/artifice">Artifice</Link>/<Link to="/domain/magic">Magic</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/brigh">Brigh</Link>, <Link to="/faith/haagenti">Haagenti</Link>, <Link to="/faith/norgorber">Norgorber</Link>&#42; (Artifice only), <Link to="/faith/orgesh">Orgesh</Link>&#42; (Magic only), <Link to="/faith/qi_zhong">Qi Zhong</Link>)</Pair>
</Ability>
<Ability id="domaincaptivation" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaincaptivation"><Link to="/domain/captivation">Captivation</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/kofusachi">Kofusachi</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/shelyn">Shelyn</Link></Pair>
</Ability>
<Ability id="domainhubris-domainglorydomainnobility" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainhubris-domainglorydomainnobility"><Link to="/domain/hubris">Hubris</Link> (<Link to="/domain/glory">Glory</Link>/<Link to="/domain/nobility">Nobility</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/dispater">Dispater</Link>, <Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/jaidz">Jaidz</Link>, <Link to="/faith/lissala">Lissala</Link>, <Link to="/faith/olheon">Olheon</Link>, <Link to="/faith/ydersius">Ydersius</Link></Pair>
</Ability>
<Ability id="domaininsect" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaininsect"><Link to="/domain/insect">Insect</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/achaekek">Achaekek</Link>&#42;, <Link to="/faith/aldinach">Aldinach</Link>, <Link to="/faith/deskari">Deskari</Link>&#42;, <Link to="/faith/ghlaunder">Ghlaunder</Link>, <Link to="/faith/kitumu">Kitumu</Link>, <Link to="/faith/mazmezz">Mazmezz</Link></Pair>
</Ability>
<Ability id="domainlegend" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainlegend"><Link to="/domain/legend">Legend</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/general_susumu">General Susumu</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/shizuru">Shizuru</Link></Pair>
</Ability>
<Ability id="domainlightning" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainlightning"><Link to="/domain/lightning">Lightning</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/rull">Rull</Link></Pair>
</Ability>
<Ability id="domainmedicine" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainmedicine"><Link to="/domain/medicine">Medicine</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/dalenydra">Dalenydra</Link>, <Link to="/faith/immonhiel">Immonhiel</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/korada">Korada</Link>, <Link to="/faith/qi_zhong">Qi Zhong</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Pair>
</Ability>
<Ability id="domainmonsoon" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainmonsoon"><Link to="/domain/monsoon">Monsoon</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/daikitsu">Daikitsu</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/rull">Rull</Link></Pair>
</Ability>
<Ability id="domainpetrification" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainpetrification"><Link to="/domain/petrification">Petrification</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/ayrzul">Ayrzul</Link>, <Link to="/faith/minderhal">Minderhal</Link>, <Link to="/faith/soralyon">Soralyon</Link>, <Link to="/faith/xoveron">Xoveron</Link></Pair>
</Ability>
<Ability id="domainportal" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainportal"><Link to="/domain/portal">Portal</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/alseta">Alseta</Link>&#42;, <Link to="/faith/barbatos">Barbatos</Link>, <Link to="/faith/yog_sothoth">Yog-Sothoth</Link></Pair>
</Ability>
<Ability id="domainrites" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainrites"><Link to="/domain/rites">Rites</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/abraxas">Abraxas</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/nalinivati">Nalinivati</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/nyarlathotep_black_pharaoh">Nyarlathotep</Link>, <Link to="/faith/sivanah">Sivanah</Link></Pair>
</Ability>
<Ability id="domainself-realization-domainliberationdomainstrength" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainself-realization-domainliberationdomainstrength"><Link to="/domain/self_realization">Self-Realization</Link> (<Link to="/domain/liberation">Liberation</Link>/<Link to="/domain/strength">Strength</Link>)</Pair>
<Pair title="Associated Gods"><Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/falayna">Falayna</Link>, <Link to="/faith/haagenti">Haagenti</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/kurgess">Kurgess</Link>, <Link to="/faith/shei">Shei</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></Pair>
</Ability>
<Ability id="domainthirst" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainthirst"><Link to="/domain/thirst">Thirst</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/aldinach">Aldinach</Link>, <Link to="/faith/lalaci">Lalaci</Link>, <Link to="/faith/nurgal">Nurgal</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Pair>
</Ability>
<Ability id="domainthorns" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domainthorns"><Link to="/domain/thorns">Thorns</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/the_green_mother">The Green Mother</Link>, <Link to="/faith/shub_niggurath">Shub-Niggurath</Link>, <Link to="/faith/zyphus">Zyphus</Link></Pair>
</Ability>
<Ability id="domaintruth" extraClasses="trait subTrait" icon={[]}>
<Pair single id="domaintruth"><Link to="/domain/truth">Truth</Link></Pair>
<Pair title="Associated Gods"><Link to="/faith/groetus">Groetus</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/sifkesh">Sifkesh</Link>, <Link to="/faith/sivanah">Sivanah</Link></Pair>
</Ability>
<Ability id="traitaspectofthequah-aspect-of-the-quah-fn2" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="traitaspectofthequah-aspect-of-the-quah-fn2"><Link to="/trait/aspect_of_the_quah">⮞</Link> Aspect of the Quah <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-2" id="main-traits_faith_class-fake-fn-2" data-hash-target to="main-traits_faith_class-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/class/hunter">Hunter</Link> or have access to the <em>animal aspect</em> class feature; Shoanti</Pair>
<Pair single="flavor" id="traitaspectofthequah-aspect-of-the-quah-fn2-flavor">You call upon your quah's totem to grant you power. You gain a unique totem aspect that replaces one of the <em>animal aspects</em> granted to you by the <em>animal focus</em> feature.</Pair>
<Pair single="benefit" id="traitaspectofthequah-aspect-of-the-quah-fn2-benefit">You must choose the Shoanti quah to which you belong. You gain access to the totem aspect listed for that clan, and you lose access to the animal aspect listed. Once made, this choice cannot be changed.</Pair>
</Ability>
<Ability id="cliff-shadde-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="cliff-shadde-quah">Cliff (Shadde-Quah)</Pair>
<Pair title="Frog Aspect">The creature gains a +4 competence bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks to avoid falling and on Constitution checks to avoid drowning. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="emberstorm-sklar-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="emberstorm-sklar-quah">Emberstorm (Sklar-Quah)</Pair>
<Pair title="Bear Aspect">The creature gains fire <Link to="/umr/resistance">resistance</Link> 5. This increases to fire resistance 10 at 8th level and fire resistance 15 at 15th level.</Pair>
</Ability>
<Ability id="horse-shriikirri-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="horse-shriikirri-quah">Horse (Shriikirri-Quah)</Pair>
<Pair title="Owl Aspect">The creature gains a +4 competence bonus on <Link to="/skill/ride">Ride</Link> checks. This bonus increases to +6 at 8th level and +8 at 15th level.</Pair>
</Ability>
<Ability id="star-lyrune-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="star-lyrune-quah">Star (Lyrune-Quah)</Pair>
<Pair title="Falcon Aspect">The creature gains low-light vision and a +2 competence bonus on <Link to="/skill/perception">Perception</Link> checks. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="storm-tamiir-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="storm-tamiir-quah">Storm (Tamiir-Quah)</Pair>
<Pair title="Snake Aspect">The creature gains a +4 bonus on saving throws against cold dangers, disease, heat dangers, starvation, and thirst. This bonus increases to +6 at 8th level and +8 at 15th level.</Pair>
</Ability>
<Ability id="storm-roc-shundar-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="storm-roc-shundar-quah">Storm Roc (Shundar-Quah)</Pair>
<Pair title="Mouse Aspect">The creature gains a +2 enhancement bonus to Charisma. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="will-o-wisp-skoan-quah" extraClasses="trait subTrait" icon={[]}>
<Pair single id="will-o-wisp-skoan-quah">Will-o'-Wisp (Skoan-Quah)</Pair>
<Pair title="Wolf Aspect">The creature gains +2 bonus on saving throws against fear effects and mind-affecting effects. This bonus increases to +4 at 8th level and +6 at 15th level.</Pair>
</Ability>
<Ability id="traitbeaconoffaith-beacon-of-faith-fn3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbeaconoffaith-beacon-of-faith-fn3"><Link to="/trait/beacon_of_faith">⮞</Link> Beacon of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3" id="main-traits_faith_class-fake-fn-3" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitbeaconoffaith-beacon-of-faith-fn3-flavor">You wield the might of your faith with power and clarity.</Pair>
<Pair single="benefit" id="traitbeaconoffaith-beacon-of-faith-fn3-benefit">Once per day as a <strong className="hl">free action</strong>, you may treat your caster level as if it were 2 levels higher when using one of the granted powers of your domain or inquisition, or when casting one of your domain spells.</Pair>
</Ability>
<Ability id="traitblessedtouch-blessed-touch-fn4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitblessedtouch-blessed-touch-fn4"><Link to="/trait/blessed_touch">⮞</Link> Blessed Touch <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-4" id="main-traits_faith_class-fake-fn-4" data-hash-target to="main-traits_faith_class-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitblessedtouch-blessed-touch-fn4-flavor">You may have been raised in a devout family, studied the divine in a formal church environment, or even learned how to combine traditional healing techniques with those of divine casters. In so doing, you have focused yourself into being the perfect vessel for your deity. Divine power flows through you like a mountain stream, making your healing touch more potent than that of others.</Pair>
<Pair single="benefit" id="traitblessedtouch-blessed-touch-fn4-benefit">You heal 1 additional point of damage when using <Link to="/ability/lay_on_hands">lay on hands</Link>, <Link to="/ability/channel_energy">channeling energy</Link>, or casting a <Link to="/main/cure_spells">cure spell</Link>.</Pair>
</Ability>
<Ability id="traitdeepfaith-deep-faith-fn5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdeepfaith-deep-faith-fn5"><Link to="/trait/deep_faith">⮞</Link> Deep Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-5" id="main-traits_faith_class-fake-fn-5" data-hash-target to="main-traits_faith_class-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdeepfaith-deep-faith-fn5-flavor">Your deity was born of the depths, and you're a child of such realms.</Pair>
<Pair single="benefit" id="traitdeepfaith-deep-faith-fn5-benefit">Whenever you cast a spell granted by the <Link to="/domain/earth">earth</Link> domain (or associated subdomains) while in the Darklands, that spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
<Ability id="traitearthbound-earthbound-fn6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitearthbound-earthbound-fn6"><Link to="/trait/earthbound">⮞</Link> Earthbound <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-6" id="main-traits_faith_class-fake-fn-6" data-hash-target to="main-traits_faith_class-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="traitearthbound-earthbound-fn6-benefit">Your druid spells use a handful of earth or sand as a divine focus in addition to the normal components. While you are touching the ground, you add a +2 trait bonus to saving throw DCs and on caster level checks to overcome spell resistance for all spells you cast against creatures with the <Link to="/subtype/air">air</Link> subtype.</Pair>
</Ability>
<Ability id="traitempyrealpantheon-empyreal-pantheon-fn7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitempyrealpantheon-empyreal-pantheon-fn7"><Link to="/trait/empyreal_pantheon">⮞</Link> Empyreal Pantheon <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-7" id="main-traits_faith_class-fake-fn-7" data-hash-target to="main-traits_faith_class-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitempyrealpantheon-empyreal-pantheon-fn7-flavor">Your faith in the empyreal lords accommodates numerous gods, and you are gifted at adapting their wide variety of focuses and lessons to your own life.</Pair>
<Pair single="benefit" id="traitempyrealpantheon-empyreal-pantheon-fn7-benefit">Select either the law or chaos alignment descriptor. You may cast spells with that descriptor, even if your alignment or that of your god would normally not allow it. Doing so applies the good descriptor to the spell if it does not already apply.</Pair>
</Ability>
<Ability id="traitexaltedofthesociety-exalted-of-the-society-fn8-fn9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitexaltedofthesociety-exalted-of-the-society-fn8-fn9"><Link to="/trait/exalted_of_the_society">⮞</Link> Exalted of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-8" id="main-traits_faith_class-fake-fn-8" data-hash-target to="main-traits_faith_class-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-9" id="main-traits_faith_class-fake-fn-9" data-hash-target to="main-traits_faith_class-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitexaltedofthesociety-exalted-of-the-society-fn8-fn9-flavor">The vaults of the Grand Lodge in Absalom contain many secrets of the divine powers of the gods, and you have studied your deity extensively.</Pair>
<Pair single="benefit" id="traitexaltedofthesociety-exalted-of-the-society-fn8-fn9-benefit">You may <Link to="/ability/channel_energy">channel energy</Link> one additional time per day.</Pair>
</Ability>
<Ability id="traitfaithfulfeedback-faithful-feedback-fn9-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfaithfulfeedback-faithful-feedback-fn9-2"><Link to="/trait/faithful_feedback">⮞</Link> Faithful Feedback <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-9.2" id="main-traits_faith_class-fake-fn-9.2" data-hash-target to="main-traits_faith_class-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must have a religion</Pair>
<Pair single="flavor" id="traitfaithfulfeedback-faithful-feedback-fn9-2-flavor">A shared religious fervor makes your healing magic more effective.</Pair>
<Pair single="benefit" id="traitfaithfulfeedback-faithful-feedback-fn9-2-benefit">Whenever you cast a spell belonging to the healing subschool on someone of your religion, increase the hit points healed by +1.</Pair>
</Ability>
<Ability id="traitfearlessdefiance-fearless-defiance-fn3-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfearlessdefiance-fearless-defiance-fn3-2"><Link to="/trait/fearless_defiance">⮞</Link> Fearless Defiance <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.2" id="main-traits_faith_class-fake-fn-3.2" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfearlessdefiance-fearless-defiance-fn3-2-flavor">Upon overcoming your fear, you become a scourge to your enemies.</Pair>
<Pair single="benefit" id="traitfearlessdefiance-fearless-defiance-fn3-2-benefit">You gain a +1 trait bonus on all saving throws against fear effects. In addition, if you successfully save against such an effect, you receive a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> for 1 round.</Pair>
</Ability>
<Ability id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn8-2-fn9-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn8-2-fn9-3"><Link to="/trait/greater_adept_of_the_society">⮞</Link> Greater Adept of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-8.2" id="main-traits_faith_class-fake-fn-8.2" data-hash-target to="main-traits_faith_class-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-9.3" id="main-traits_faith_class-fake-fn-9.3" data-hash-target to="main-traits_faith_class-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn8-2-fn9-3-flavor">Months of meditation and practice with the greatest spellcasters of the Society have given you an increased capacity for arcane knowledge.</Pair>
<Pair single="benefit" id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn8-2-fn9-3-benefit">You gain one additional 0-level spell slot.</Pair>
</Ability>
<Ability id="traithellknightinquisitor-hellknight-inquisitor-fn10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithellknightinquisitor-hellknight-inquisitor-fn10"><Link to="/trait/hellknight_inquisitor">⮞</Link> Hellknight Inquisitor <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-10" id="main-traits_faith_class-fake-fn-10" data-hash-target to="main-traits_faith_class-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traithellknightinquisitor-hellknight-inquisitor-fn10-benefit">If you are an inquisitor, you can select any <Link to="/ability/inquisitions">inquisition</Link> associated with your preferred <Link to="/rule/hellknights">Hellknight</Link> order, as long as you and your patron deity are of a lawful alignment. Additionally, you gain a +1 trait bonus on saving throws against spells and effects with the chaos descriptor.</Pair>
</Ability>
<Ability id="traitlightinthedarkness-light-in-the-darkness-fn5-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitlightinthedarkness-light-in-the-darkness-fn5-2"><Link to="/trait/light_in_the_darkness">⮞</Link> Light in the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-5.2" id="main-traits_faith_class-fake-fn-5.2" data-hash-target to="main-traits_faith_class-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitlightinthedarkness-light-in-the-darkness-fn5-2-flavor">You're destined to bring light to the darkness and expunge the faithless from the deep.</Pair>
<Pair single="benefit" id="traitlightinthedarkness-light-in-the-darkness-fn5-2-benefit">Whenever you cast a spell granted by the <Link to="/domain/sun">sun</Link> domain (or associated subdomains) while in the Darklands, the spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
<Ability id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn3-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn3-3"><Link to="/trait/loyalty_across_lifetimes">⮞</Link> Loyalty across Lifetimes <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.3" id="main-traits_faith_class-fake-fn-3.3" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn3-3-flavor">You and your eidolon share a link that seems to span multiple lifetimes.</Pair>
<Pair single="benefit" id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn3-3-benefit">Your eidolon treats its Constitution score as if it were 2 points higher for the purposes of determining when its negative hit point total sends it back to its home plane. In addition, your eidolon gains a +1 trait bonus on Will saves against enchantment spells and effects.</Pair>
</Ability>
<Ability id="traitmartialmanuscript-martial-manuscript-fn3-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmartialmanuscript-martial-manuscript-fn3-4"><Link to="/trait/martial_manuscript">⮞</Link> Martial Manuscript <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.4" id="main-traits_faith_class-fake-fn-3.4" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmartialmanuscript-martial-manuscript-fn3-4-flavor">You either carry or have memorized a sacred text from your school, temple, or monastery, and its wisdom gives you insight that makes your attacks more devastating.</Pair>
<Pair single="benefit" id="traitmartialmanuscript-martial-manuscript-fn3-4-benefit">You gain a +2 trait bonus on rolls to confirm critical hits when you're using an unarmed strike or monk weapon.</Pair>
</Ability>
<Ability id="traitmeditativerest-meditative-rest-fn1-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmeditativerest-meditative-rest-fn1-2"><Link to="/trait/meditative_rest">⮞</Link> Meditative Rest <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-1.2" id="main-traits_faith_class-fake-fn-1.2" data-hash-target to="main-traits_faith_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmeditativerest-meditative-rest-fn1-2-benefit">When you rest, you ignore the first time you are interrupted during that rest for the purposes of determining how long you need to rest in full to regain the capacity to regain spells, provided the interruption lasts no more than 15 minutes. If you cast spells during this interruption, you don't count these against your daily limit of spells when you wake and prepare spells.</Pair>
</Ability>
<Ability id="traitpactservant-pact-servant-fn7-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpactservant-pact-servant-fn7-2"><Link to="/trait/pact_servant">⮞</Link> Pact Servant <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-7.2" id="main-traits_faith_class-fake-fn-7.2" data-hash-target to="main-traits_faith_class-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpactservant-pact-servant-fn7-2-flavor">The faith of Holomog focuses on finding the good in unusual places and appreciating the nuances of virtue in the world.</Pair>
<Pair single="benefit" id="traitpactservant-pact-servant-fn7-2-benefit">You may treat <Link to="/faith/asmodeus">Asmodeus</Link> as if he were a lawful neutral deity for the purposes of determining your own alignment as a cleric, inquisitor, or other divine spellcaster. You may not select the evil domain unless your own alignment also contains an evil aspect.</Pair>
</Ability>
<Ability id="traitperpetualcompanion-perpetual-companion-fn3-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitperpetualcompanion-perpetual-companion-fn3-5"><Link to="/trait/perpetual_companion">⮞</Link> Perpetual Companion <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.5" id="main-traits_faith_class-fake-fn-3.5" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitperpetualcompanion-perpetual-companion-fn3-5-flavor">You are bolstered against fear when your eidolon is near.</Pair>
<Pair single="benefit" id="traitperpetualcompanion-perpetual-companion-fn3-5-benefit">You gain a +2 trait bonus on all saving throws against fear effects whenever your eidolon is within 30 feet.</Pair>
</Ability>
<Ability id="traitsacredconduit-sacred-conduit-fn3-6-fn11-fn12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsacredconduit-sacred-conduit-fn3-6-fn11-fn12"><Link to="/trait/sacred_conduit">⮞</Link> Sacred Conduit <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.6" id="main-traits_faith_class-fake-fn-3.6" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-11" id="main-traits_faith_class-fake-fn-11" data-hash-target to="main-traits_faith_class-fake-fn-11-target">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-12" id="main-traits_faith_class-fake-fn-12" data-hash-target to="main-traits_faith_class-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitsacredconduit-sacred-conduit-fn3-6-fn11-fn12-flavor">Your birth was particularly painful and difficult for your mother, who needed potent divine magic to ensure that you survived (your mother may or may not have survived). In any event, that magic infused you from an early age, and you now channel divine energy with greater ease than most.</Pair>
<Pair single="benefit" id="traitsacredconduit-sacred-conduit-fn3-6-fn11-fn12-benefit">Whenever you <Link to="/ability/channel_energy">channel energy</Link>, you gain a +1 trait bonus to the save DC of your channeled energy.</Pair>
</Ability>
<Ability id="traitstalwartofthesociety-stalwart-of-the-society-fn8-3-fn9-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstalwartofthesociety-stalwart-of-the-society-fn8-3-fn9-4"><Link to="/trait/stalwart_of_the_society">⮞</Link> Stalwart of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-8.3" id="main-traits_faith_class-fake-fn-8.3" data-hash-target to="main-traits_faith_class-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-9.4" id="main-traits_faith_class-fake-fn-9.4" data-hash-target to="main-traits_faith_class-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitstalwartofthesociety-stalwart-of-the-society-fn8-3-fn9-4-flavor">The courageous powers of Golarion's ancient paladin orders are open to you thanks to the Society's records of heroic deeds.</Pair>
<Pair single="benefit" id="traitstalwartofthesociety-stalwart-of-the-society-fn8-3-fn9-4-benefit">Your <em>aura of courage</em> class ability grants an additional +1 trait bonus on saving throws against fear effects.</Pair>
</Ability>
<Ability id="traittirelessavenger-tireless-avenger-fn3-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittirelessavenger-tireless-avenger-fn3-7"><Link to="/trait/tireless_avenger">⮞</Link> Tireless Avenger <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.7" id="main-traits_faith_class-fake-fn-3.7" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traittirelessavenger-tireless-avenger-fn3-7-flavor">You restlessly pursue your enemies.</Pair>
<Pair single="benefit" id="traittirelessavenger-tireless-avenger-fn3-7-benefit">When you're in pursuit of one of your <Link to="/ability/favored_enemies">favored enemies</Link>, the DC for the Constitution check to avoid taking lethal damage during a <Link to="/rule/forced_march">forced march</Link> is 10 + 1 per extra hour, instead of 10 + 2 per extra hour.</Pair>
</Ability>
<Ability id="traittwoworldmagic-two-world-magic-fn13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittwoworldmagic-two-world-magic-fn13"><Link to="/trait/two_world_magic">⮞</Link> Two-World Magic <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-13" id="main-traits_faith_class-fake-fn-13" data-hash-target to="main-traits_faith_class-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="flavor" id="traittwoworldmagic-two-world-magic-fn13-flavor">You have bridged the gap between the natural magic of the Mwangi peoples and the refined magic of the Chelish colonists.</Pair>
<Pair single="benefit" id="traittwoworldmagic-two-world-magic-fn13-benefit">Select one 0-level spell from a class spell list other than your own. This spell is a 0-level spell on your class spell list (or a 1st-level spell if your class doesn't have 0-level spells). For example, if you are a druid, you could select <Link to="/spell/mage_hand">mage hand</Link> and thereafter prepare it as a 0-level druid spell; if you are a sorcerer, you could select <Link to="/spell/know_direction">know direction</Link> as a 0-level sorcerer spell known.</Pair>
</Ability>
<Ability id="traiturbanacolyte-urban-acolyte-fn14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiturbanacolyte-urban-acolyte-fn14"><Link to="/trait/urban_acolyte">⮞</Link> Urban Acolyte <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-14" id="main-traits_faith_class-fake-fn-14" data-hash-target to="main-traits_faith_class-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traiturbanacolyte-urban-acolyte-fn14-flavor">Growing up in a city has broadened your philosophy, and helped you interpret your patron's divine will in a novel way.</Pair>
<Pair single="benefit" id="traiturbanacolyte-urban-acolyte-fn14-benefit">You gain <Link to="/skill/knowledge_local">Knowledge (local)</Link> as a class skill. Additionally, you can select one of the following subdomains using the normal rules for subdomains so long as your deity grants access to its associated domain: <Link to="/domain/competition">Competition</Link>, <Link to="/domain/duels">Duels</Link>, <Link to="/domain/espionage">Espionage</Link>, <Link to="/domain/fortifications">Fortifications</Link>, <Link to="/domain/industry">Industry</Link>, <Link to="/domain/legislation">Legislation</Link>, <Link to="/domain/plague">Plague</Link>, or <Link to="/domain/riot">Riot</Link>.</Pair>
</Ability>
<Ability id="traitzealousstriker-zealous-striker-fn3-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealousstriker-zealous-striker-fn3-8"><Link to="/trait/zealous_striker">⮞</Link> Zealous Striker <sup><InnerLink showBacklink="backlink-main-traits_faith_class-fake-fn-3.8" id="main-traits_faith_class-fake-fn-3.8" data-hash-target to="main-traits_faith_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitzealousstriker-zealous-striker-fn3-8-flavor">Your zeal is a danger to those of "lesser" faiths.</Pair>
<Pair single="benefit" id="traitzealousstriker-zealous-striker-fn3-8-benefit">While you have the destruction <Link to="/ability/judgments">judgment</Link> active, you gain a +1 trait bonus on damage rolls when attacking a foe who can cast divine spells and worships a different deity than you.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_class-label">Footnotes</h3><ol>
<li id="main-traits_faith_class-fake-fn-1-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_class-fake-fn-1" data-hash-target to="main-traits_faith_class-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_class-fake-fn-1.2" data-hash-target to="main-traits_faith_class-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-2-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_class-fake-fn-2" data-hash-target to="main-traits_faith_class-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3" data-hash-target to="main-traits_faith_class-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.2" data-hash-target to="main-traits_faith_class-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.3" data-hash-target to="main-traits_faith_class-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.4" data-hash-target to="main-traits_faith_class-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.5" data-hash-target to="main-traits_faith_class-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.6" data-hash-target to="main-traits_faith_class-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.7" data-hash-target to="main-traits_faith_class-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_class-fake-fn-3.8" data-hash-target to="main-traits_faith_class-fake-fn-3.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-4-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_class-fake-fn-4" data-hash-target to="main-traits_faith_class-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-5-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_class-fake-fn-5" data-hash-target to="main-traits_faith_class-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_class-fake-fn-5.2" data-hash-target to="main-traits_faith_class-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-6-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_class-fake-fn-6" data-hash-target to="main-traits_faith_class-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-7-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_class-fake-fn-7" data-hash-target to="main-traits_faith_class-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_class-fake-fn-7.2" data-hash-target to="main-traits_faith_class-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-8-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_class-fake-fn-8" data-hash-target to="main-traits_faith_class-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_class-fake-fn-8.2" data-hash-target to="main-traits_faith_class-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_class-fake-fn-8.3" data-hash-target to="main-traits_faith_class-fake-fn-8.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-9-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_class-fake-fn-9" data-hash-target to="main-traits_faith_class-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_class-fake-fn-9.2" data-hash-target to="main-traits_faith_class-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_class-fake-fn-9.3" data-hash-target to="main-traits_faith_class-fake-fn-9.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_class-fake-fn-9.4" data-hash-target to="main-traits_faith_class-fake-fn-9.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-10-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_class-fake-fn-10" data-hash-target to="main-traits_faith_class-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-11-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_class-fake-fn-11" data-hash-target to="main-traits_faith_class-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-12-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith_class-fake-fn-12" data-hash-target to="main-traits_faith_class-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-13-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_class-fake-fn-13" data-hash-target to="main-traits_faith_class-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_faith_class-fake-fn-14-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_class-fake-fn-14" data-hash-target to="main-traits_faith_class-fake-fn-14">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_faith_ab = {title: "Skill/Feat/Ability Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_faith" className="reversed" info="Back to Faith Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitacclimatizealignment-acclimatize-alignment-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitacclimatizealignment-acclimatize-alignment-fn1"><Link to="/trait/acclimatize_alignment">⮞</Link> Acclimatize Alignment <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-1" id="main-traits_faith_ab-fake-fn-1" data-hash-target to="main-traits_faith_ab-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitacclimatizealignment-acclimatize-alignment-fn1-flavor">Like a climber ascending a mountain, you gradually grow acclimatized to an opposing planar alignment.</Pair>
<Pair single="benefit" id="traitacclimatizealignment-acclimatize-alignment-fn1-benefit">For each consecutive day you remain on a <Link to="/rule/alignment_traits">mildly aligned plane</Link> that opposes your alignment, reduce your penalty on Charisma-based checks by 1, to a minimum of 0. This does not affect the penalty from a strongly aligned plane.</Pair>
</Ability>
<Ability id="traitarcanescholar-arcane-scholar-fn2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitarcanescholar-arcane-scholar-fn2"><Link to="/trait/arcane_scholar">⮞</Link> Arcane Scholar <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2" id="main-traits_faith_ab-fake-fn-2" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitarcanescholar-arcane-scholar-fn2-flavor">Study of the "Prime Archmage" chapter has broadened your magical knowledge.</Pair>
<Pair single="benefit" id="traitarcanescholar-arcane-scholar-fn2-benefit">Choose either <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> or <Link to="/skill/spellcraft">Spellcraft</Link>; you gain a +1 trait bonus on that skill and it is a class skill for you.</Pair>
</Ability>
<Ability id="traitcanonofcoin-canon-of-coin-fn3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcanonofcoin-canon-of-coin-fn3"><Link to="/trait/canon_of_coin">⮞</Link> Canon of Coin <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-3" id="main-traits_faith_ab-fake-fn-3" data-hash-target to="main-traits_faith_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcanonofcoin-canon-of-coin-fn3-flavor">You find the pursuit of earning money to be a religious experience.</Pair>
<Pair single="benefit" id="traitcanonofcoin-canon-of-coin-fn3-benefit"><Link to="/skill/appraise">Appraise</Link> is a class skill for you. So long as you are carrying coins worth an amount equal to at least 100 gp per character level you have, you gain a +1 trait bonus on Will saves. This bonus increases to +2 against effects that would force you to discard, drop, or give away coins, gems, or trade goods in your possession.</Pair>
</Ability>
<Ability id="traitcaretaker-caretaker-fn4-fn5-fn6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcaretaker-caretaker-fn4-fn5-fn6"><Link to="/trait/caretaker">⮞</Link> Caretaker <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4" id="main-traits_faith_ab-fake-fn-4" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-5" id="main-traits_faith_ab-fake-fn-5" data-hash-target to="main-traits_faith_ab-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-6" id="main-traits_faith_ab-fake-fn-6" data-hash-target to="main-traits_faith_ab-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcaretaker-caretaker-fn4-fn5-fn6-flavor">As the child of an herbalist or an assistant in a temple infirmary, you often had to assist in tending to the sick and wounded.</Pair>
<Pair single="benefit" id="traitcaretaker-caretaker-fn4-fn5-fn6-benefit">You gain a +1 trait bonus on <Link to="/skill/heal">Heal</Link> checks, and Heal is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchildofthetemple-child-of-the-temple-fn4-2-fn6-2-fn5-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchildofthetemple-child-of-the-temple-fn4-2-fn6-2-fn5-2"><Link to="/trait/child_of_the_temple">⮞</Link> Child of the Temple <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.2" id="main-traits_faith_ab-fake-fn-4.2" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-6.2" id="main-traits_faith_ab-fake-fn-6.2" data-hash-target to="main-traits_faith_ab-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-5.2" id="main-traits_faith_ab-fake-fn-5.2" data-hash-target to="main-traits_faith_ab-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchildofthetemple-child-of-the-temple-fn4-2-fn6-2-fn5-2-flavor">You have long served at a temple in a city, where you picked up on many of the nobility's customs in addition to spending much time in the temple libraries studying your faith.</Pair>
<Pair single="benefit" id="traitchildofthetemple-child-of-the-temple-fn4-2-fn6-2-fn5-2-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchosenofiomedae-chosen-of-iomedae-fn7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchosenofiomedae-chosen-of-iomedae-fn7"><Link to="/trait/chosen_of_iomedae">⮞</Link> Chosen of Iomedae <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-7" id="main-traits_faith_ab-fake-fn-7" data-hash-target to="main-traits_faith_ab-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchosenofiomedae-chosen-of-iomedae-fn7-flavor">At your birth, your parents dedicated your soul to <Link to="/faith/iomedae">Iomedae</Link> to mold into a sword of her light. The goddess blessed you, granting you a gift of light to brighten your path through darkness and a fine sword with which to spread her will.</Pair>
<Pair single="benefit" id="traitchosenofiomedae-chosen-of-iomedae-fn7-benefit">You may cast <Link to="/spell/light">light</Link> once per day as a spell-like ability (caster level 1st), and you begin play with a <Link to="/rule/masterwork_w">masterwork</Link> <Link to="/eq-weapon/longsword">longsword</Link>. In addition, whenever <em>light</em> is cast upon this sword, the radius of light and its duration is doubled.</Pair>
</Ability>
<Ability id="traitcovertchanneler-covert-channeler-fn8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcovertchanneler-covert-channeler-fn8"><Link to="/trait/covert_channeler">⮞</Link> Covert Channeler <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-8" id="main-traits_faith_ab-fake-fn-8" data-hash-target to="main-traits_faith_ab-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcovertchanneler-covert-channeler-fn8-flavor">Your mentor in the <Link to="/rule/wagons_of_light">Wagons of Light</Link> taught you to hide holy symbols quickly.</Pair>
<Pair single="benefit" id="traitcovertchanneler-covert-channeler-fn8-benefit">You can draw or stow a holy symbol as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="traitdevotedhealer-devoted-healer-fn9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevotedhealer-devoted-healer-fn9"><Link to="/trait/devoted_healer">⮞</Link> Devoted Healer <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-9" id="main-traits_faith_ab-fake-fn-9" data-hash-target to="main-traits_faith_ab-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevotedhealer-devoted-healer-fn9-flavor">Raised in the company of skilled healers, you were always encouraged to devote your time and energy to the welfare of others.</Pair>
<Pair single="benefit" id="traitdevotedhealer-devoted-healer-fn9-benefit"><p>Whenever you take 20 on a <Link to="/skill/heal">Heal</Link> check to treat deadly wounds, you restore an additional 1d4 hit points to those you aid.</p>
<p><strong>Suggested Characters:</strong> Battle clerics, <Link to="/faith/iomedae">Iomedaeans</Link>, Kellids.</p>
</Pair>
</Ability>
<Ability id="traitdevoteeofthegreen-devotee-of-the-green-fn4-3-fn5-3-fn6-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevoteeofthegreen-devotee-of-the-green-fn4-3-fn5-3-fn6-3"><Link to="/trait/devotee_of_the_green">⮞</Link> Devotee of the Green <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.3" id="main-traits_faith_ab-fake-fn-4.3" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-5.3" id="main-traits_faith_ab-fake-fn-5.3" data-hash-target to="main-traits_faith_ab-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-6.3" id="main-traits_faith_ab-fake-fn-6.3" data-hash-target to="main-traits_faith_ab-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevoteeofthegreen-devotee-of-the-green-fn4-3-fn5-3-fn6-3-flavor">Your faith in the natural world or one of the gods of nature makes it easy for you to pick up on related concepts.</Pair>
<Pair single="benefit" id="traitdevoteeofthegreen-devotee-of-the-green-fn4-3-fn5-3-fn6-3-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> and <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdivineconfidante-divine-confidante-fn10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdivineconfidante-divine-confidante-fn10"><Link to="/trait/divine_confidante">⮞</Link> Divine Confidante <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-10" id="main-traits_faith_ab-fake-fn-10" data-hash-target to="main-traits_faith_ab-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdivineconfidante-divine-confidante-fn10-flavor">You were inspired with the reverence offered by worshipers to priests and other spiritual leaders, so you assisted them.</Pair>
<Pair single="benefit" id="traitdivineconfidante-divine-confidante-fn10-benefit">You gain a +3 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to get hunches about those who discuss matters of faith, mythology, morality, religion, or the Outer Planes with you. Sense Motive is a class skill for you.</Pair>
</Ability>
<Ability id="traitdogged-dogged-fn11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdogged-dogged-fn11"><Link to="/trait/dogged">⮞</Link> Dogged <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-11" id="main-traits_faith_ab-fake-fn-11" data-hash-target to="main-traits_faith_ab-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdogged-dogged-fn11-flavor">Drawing inspiration from the Cult of the Failed, you refuse to let setbacks stop you, no matter how disastrous.</Pair>
<Pair single="benefit" id="traitdogged-dogged-fn11-benefit">Once per day when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.</Pair>
</Ability>
<Ability id="traiteaseoffaith-ease-of-faith-fn4-4-fn6-4-fn5-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteaseoffaith-ease-of-faith-fn4-4-fn6-4-fn5-4"><Link to="/trait/ease_of_faith">⮞</Link> Ease of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.4" id="main-traits_faith_ab-fake-fn-4.4" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-6.4" id="main-traits_faith_ab-fake-fn-6.4" data-hash-target to="main-traits_faith_ab-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-5.4" id="main-traits_faith_ab-fake-fn-5.4" data-hash-target to="main-traits_faith_ab-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traiteaseoffaith-ease-of-faith-fn4-4-fn6-4-fn5-4-flavor">Your mentor, the person who invested your faith in you from an early age, took steps to ensure you understood that what powers your divine magic is no different from that which powers the magic of other religions. This philosophy makes it easier for you to interact with others who may not share your views.</Pair>
<Pair single="benefit" id="traiteaseoffaith-ease-of-faith-fn4-4-fn6-4-fn5-4-benefit">You gain a +1 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traiteldritchsmith-eldritch-smith-fn12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteldritchsmith-eldritch-smith-fn12"><Link to="/trait/eldritch_smith">⮞</Link> Eldritch Smith <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-12" id="main-traits_faith_ab-fake-fn-12" data-hash-target to="main-traits_faith_ab-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traiteldritchsmith-eldritch-smith-fn12-flavor">You are learned in the secret lore of the forge, rituals handed down for generations that some say come from <Link to="/faith/torag">Torag</Link> himself.</Pair>
<Pair single="benefit" id="traiteldritchsmith-eldritch-smith-fn12-benefit">Whenever you use the <Link to="/skill/craft">Craft</Link> skill or a crafting feat to make a stone or metal item, you reduce the cost of making the item by 5%. This includes metal-headed weapons with nonmetal parts, such as axes and spears.</Pair>
</Ability>
<Ability id="traitfatesfavored-fates-favored-fn4-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfatesfavored-fates-favored-fn4-5"><Link to="/trait/fates_favored">⮞</Link> Fate's Favored <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.5" id="main-traits_faith_ab-fake-fn-4.5" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfatesfavored-fates-favored-fn4-5-flavor">The fates watch over you.</Pair>
<Pair single="benefit" id="traitfatesfavored-fates-favored-fn4-5-benefit">Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.</Pair>
</Ability>
<Ability id="traitgodclawdisciple-godclaw-disciple-fn13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitgodclawdisciple-godclaw-disciple-fn13"><Link to="/trait/godclaw_disciple">⮞</Link> Godclaw Disciple <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-13" id="main-traits_faith_ab-fake-fn-13" data-hash-target to="main-traits_faith_ab-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitgodclawdisciple-godclaw-disciple-fn13-flavor">You worship the amalgamation of lawful deities known as <Link to="/main/faiths_pantheons">the Godclaw</Link>.</Pair>
<Pair single="benefit" id="traitgodclawdisciple-godclaw-disciple-fn13-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks related to lawful deities, their clergy, their mythology, and their tenets. Additionally, Knowledge (religion) is a class skill for you.</Pair>
</Ability>
<Ability id="traithereticscaution-heretics-caution-fn11-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithereticscaution-heretics-caution-fn11-2"><Link to="/trait/heretics_caution">⮞</Link> Heretic's Caution <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-11.2" id="main-traits_faith_ab-fake-fn-11.2" data-hash-target to="main-traits_faith_ab-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithereticscaution-heretics-caution-fn11-2-flavor">You were raised in a faith that did not center on a traditional god or that followed a heretical interpretation of a traditional deity. You learned to deflect attention, especially from ecclesiastical figures.</Pair>
<Pair single="benefit" id="traithereticscaution-heretics-caution-fn11-2-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks. This bonus increases to +3 on Bluff checks opposed by religious authorities' Sense Motive checks.</Pair>
</Ability>
<Ability id="traithonest-honest-fn9-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithonest-honest-fn9-2"><Link to="/trait/honest">⮞</Link> Honest <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-9.2" id="main-traits_faith_ab-fake-fn-9.2" data-hash-target to="main-traits_faith_ab-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithonest-honest-fn9-2-flavor">A religious mentor instilled in you a sense of uncompromising integrity. You often speak your mind in defiance of any fear or hatred it might earn you, a habit that inspires others to trust you.</Pair>
<Pair single="benefit" id="traithonest-honest-fn9-2-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. This bonus increases to +2 when the Diplomacy check is made to influence those who are already friendly or helpful toward you.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/diabolist">Diabolists</Link>, paladins, <Link to="/faith/sarenrae">Sarenrae</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitimperfectrecall-imperfect-recall-fn11-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitimperfectrecall-imperfect-recall-fn11-3"><Link to="/trait/imperfect_recall">⮞</Link> Imperfect Recall <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-11.3" id="main-traits_faith_ab-fake-fn-11.3" data-hash-target to="main-traits_faith_ab-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitimperfectrecall-imperfect-recall-fn11-3-flavor">Your belief in reincarnation, as taught by the Sangpotshi philosophy and in lands that were once Imperial Lung Wa, has been reinforced by personal experience. In moments of great stress, you sometimes experience flashes of deja vu in which you recall information you don't remember ever having known.</Pair>
<Pair single="benefit" id="traitimperfectrecall-imperfect-recall-fn11-3-benefit">Once per day while you are in danger or distracted, you gain a +3 bonus on a single <Link to="/skill/knowledge">Knowledge</Link> skill check.</Pair>
</Ability>
<Ability id="traitinspired-inspired-fn4-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitinspired-inspired-fn4-6"><Link to="/trait/inspired">⮞</Link> Inspired <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.6" id="main-traits_faith_ab-fake-fn-4.6" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitinspired-inspired-fn4-6-flavor">A positive force, philosophy, or divine presence fills you with hope, and is a guiding force of inspiration.</Pair>
<Pair single="benefit" id="traitinspired-inspired-fn4-6-benefit">Once per day as a <strong className="hl">free action</strong>, roll twice and take the better result on a skill check or ability check.</Pair>
</Ability>
<Ability id="traitkalistocraticprophecy-kalistocratic-prophecy-fn10-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitkalistocraticprophecy-kalistocratic-prophecy-fn10-2"><Link to="/trait/kalistocratic_prophecy">⮞</Link> Kalistocratic Prophecy <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-10.2" id="main-traits_faith_ab-fake-fn-10.2" data-hash-target to="main-traits_faith_ab-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitkalistocraticprophecy-kalistocratic-prophecy-fn10-2-benefit">You were raised under the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, and were inspired to seize upon an untapped business opportunity. Up to once per week, when you work to advance this opportunity with at least 1 day of effort, you can attempt an appropriate <Link to="/skill/profession">Profession</Link> check to <Link to="/rule/gaining_capital">earn money or gain capital</Link> using the downtime rules with a +2 trait bonus. In the event of a failed check, your opportunity is discovered by rivals and you cannot employ this trait for 1 month while you look for a new opportunity.</Pair>
</Ability>
<Ability id="traitluciddreamer-lucid-dreamer-fn14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitluciddreamer-lucid-dreamer-fn14"><Link to="/trait/lucid_dreamer">⮞</Link> Lucid Dreamer <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-14" id="main-traits_faith_ab-fake-fn-14" data-hash-target to="main-traits_faith_ab-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Varisian wanderers or Wonderseekers</Pair>
<Pair single="flavor" id="traitluciddreamer-lucid-dreamer-fn14-flavor">Your dreams are a special place of power that only you get to enjoy; driving away threats to your subconscious is as easy as slamming a door.</Pair>
<Pair single="benefit" id="traitluciddreamer-lucid-dreamer-fn14-benefit">You receive a +1 trait bonus on <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks and a +2 trait bonus on Will saves against effects on your dreaming mind or subconscious, such as a <Link to="/monster/night_hag">night hag's</Link> dream haunting ability, the <Link to="/spell/nightmare">nightmare</Link> spell, and illusions of the <Link to="/spelldef/phantasm">phantasm</Link> subschool.</Pair>
</Ability>
<Ability id="traitmasked-masked-fn2-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmasked-masked-fn2-2"><Link to="/trait/masked">⮞</Link> Masked <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2.2" id="main-traits_faith_ab-fake-fn-2.2" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmasked-masked-fn2-2-flavor">You learned from "Prime Conspirator" that keeping secrets often means hiding your true identity.</Pair>
<Pair single="benefit" id="traitmasked-masked-fn2-2-benefit">Once per day, when attempting a <Link to="/skill/disguise">Disguise</Link> check, roll twice and take the better result.</Pair>
</Ability>
<Ability id="traitmysteryinitiate-mystery-initiate-fn9-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmysteryinitiate-mystery-initiate-fn9-3"><Link to="/trait/mystery_initiate">⮞</Link> Mystery Initiate <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-9.3" id="main-traits_faith_ab-fake-fn-9.3" data-hash-target to="main-traits_faith_ab-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitmysteryinitiate-mystery-initiate-fn9-3-flavor">You were initiated into a mystery cult in your youth, and learned secrets that turned your understanding of your faith and the world on its head. This experience has given you a knack for lateral thinking.</Pair>
<Pair single="benefit" id="traitmysteryinitiate-mystery-initiate-fn9-3-benefit"><p>Once per day, you may reroll any <Link to="/skill/knowledge">Knowledge</Link> skill check. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/mystery_cultist">Mystery cultists</Link>, <Link to="/faith/nethys">Nethys</Link> worshipers, <Link to="/faith/norgorber">Norgorber</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitnaturalritualist-natural-ritualist-fn11-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturalritualist-natural-ritualist-fn11-4"><Link to="/trait/natural_ritualist">⮞</Link> Natural Ritualist <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-11.4" id="main-traits_faith_ab-fake-fn-11.4" data-hash-target to="main-traits_faith_ab-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitnaturalritualist-natural-ritualist-fn11-4-flavor">You venerate nature, either by paying homage to your Shoanti totem spirit or by appeasing the <Link to="/family/kami">kami</Link> around you in accordance with Tamashigo. In return, the spirits bless your path.</Pair>
<Pair single="benefit" id="traitnaturalritualist-natural-ritualist-fn11-4-benefit">Once per week, you can build a small shrine of natural materials and pay your respects in a ritual that takes 15 minutes. Spellcasters can do this as part of their daily spell preparation. You gain a +2 trait bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> and <Link to="/skill/survival">Survival</Link> checks for 24 hours.</Pair>
</Ability>
<Ability id="traitnaturallygifted-naturally-gifted-fn15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturallygifted-naturally-gifted-fn15"><Link to="/trait/naturally_gifted">⮞</Link> Naturally Gifted <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-15" id="main-traits_faith_ab-fake-fn-15" data-hash-target to="main-traits_faith_ab-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="traitnaturallygifted-naturally-gifted-fn15-flavor">For unknown reasons, you have deeper reserves of magical energy than those around you. Perhaps you are descended from a family of powerful arcane casters, or maybe you believe this trait marks you as destined for magical greatness.</Pair>
<Pair single="benefit" id="traitnaturallygifted-naturally-gifted-fn15-benefit">You gain an additional use of one of your <em>gnome magic</em> spell-like abilities each day. This does not always have to be the same spell-like ability - one day you might use <Link to="/spell/dancing_lights">dancing lights</Link> twice, only to use the additional casting for <Link to="/spell/speak_with_animals">speak with animals</Link> the next day.</Pair>
</Ability>
<Ability id="traitomen-omen-fn4-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitomen-omen-fn4-7"><Link to="/trait/omen">⮞</Link> Omen <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.7" id="main-traits_faith_ab-fake-fn-4.7" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitomen-omen-fn4-7-flavor">You are the harbinger of some future event. Whether this event bodes good or ill, you exude an ominous presence.</Pair>
<Pair single="benefit" id="traitomen-omen-fn4-7-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is always a class skill for you. Once per day, you may attempt to demoralize an opponent as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="traitpatientcalm-patient-calm-fn9-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpatientcalm-patient-calm-fn9-4"><Link to="/trait/patient_calm">⮞</Link> Patient Calm <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-9.4" id="main-traits_faith_ab-fake-fn-9.4" data-hash-target to="main-traits_faith_ab-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpatientcalm-patient-calm-fn9-4-flavor">As a child, you struggled to suppress a sharp temper, but the care and patient respect of a trusted community leader rubbed off on you. As you grew older, you developed a remarkable ability to keep calm and collected when performing a task you are familiar with.</Pair>
<Pair single="benefit" id="traitpatientcalm-patient-calm-fn9-4-benefit"><p>Choose one <Link to="/skill/craft">Craft</Link> or <Link to="/skill/profession">Profession</Link> skill. Whenever you take 10 with that skill, determine the result as if you had rolled a 12 instead of a 10.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, Drumans, <Link to="/faith/irori">Irorans</Link>.</p>
</Pair>
</Ability>
<Ability id="traitpersuasiveinsight-persuasive-insight-fn10-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpersuasiveinsight-persuasive-insight-fn10-3"><Link to="/trait/persuasive_insight">⮞</Link> Persuasive Insight <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-10.3" id="main-traits_faith_ab-fake-fn-10.3" data-hash-target to="main-traits_faith_ab-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpersuasiveinsight-persuasive-insight-fn10-3-flavor">You were converted to your faith or taught to bargain with spirits for magic by a figure of inspiring insight who taught you to use keen observation in all dealings.</Pair>
<Pair single="benefit" id="traitpersuasiveinsight-persuasive-insight-fn10-3-benefit">You can use your Wisdom modifier in place of your Charisma modifier on <Link to="/skill/diplomacy">Diplomacy</Link> checks to ask favors or gain influence. During a <Link to="/rule/verbal_duels">verbal duel</Link>, you can use your Wisdom modifier in place of your Charisma modifier when using tactics you assigned to Diplomacy or Wisdom-based skills.</Pair>
</Ability>
<Ability id="traitplanarsavant-planar-savant-fn4-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitplanarsavant-planar-savant-fn4-8"><Link to="/trait/planar_savant">⮞</Link> Planar Savant <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.8" id="main-traits_faith_ab-fake-fn-4.8" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitplanarsavant-planar-savant-fn4-8-flavor">You have always had an innate sense of the workings of the planes and their denizens.</Pair>
<Pair single="benefit" id="traitplanarsavant-planar-savant-fn4-8-benefit">You may use your Charisma modifier when making <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks instead of your Intelligence modifier.</Pair>
</Ability>
<Ability id="traitpriestblessed-priest-blessed-fn16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpriestblessed-priest-blessed-fn16"><Link to="/trait/priest_blessed">⮞</Link> Priest-Blessed <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-16" id="main-traits_faith_ab-fake-fn-16" data-hash-target to="main-traits_faith_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitpriestblessed-priest-blessed-fn16-flavor">You were guided to maturity by a trusted priest of an ecclesiastical tradition, who inspired you and made you understand that the authority exerted by a religious hierarchy is a blessing rather than a restriction, allowing the faithful to always feel confident in their direction and the righteousness of the guided actions. Now, your faith wells up whenever you are aided by divine magic, and you find it easy to open up to the magic and succor of any faith, seeing the similarities between all such traditions.</Pair>
<Pair single="benefit" id="traitpriestblessed-priest-blessed-fn16-benefit">Three times per day when you are the target of a harmless divine spell, you may increase its caster level by 1 for purposes of its effect on you alone.</Pair>
</Ability>
<Ability id="traitprophesied-prophesied-fn4-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitprophesied-prophesied-fn4-9"><Link to="/trait/prophesied">⮞</Link> Prophesied <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.9" id="main-traits_faith_ab-fake-fn-4.9" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitprophesied-prophesied-fn4-9-flavor">Your coming was foretold in prophecy, and people familiar with your legend regard you with awe and fear.</Pair>
<Pair single="benefit" id="traitprophesied-prophesied-fn4-9-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks and <Link to="/skill/intimidate">Intimidate</Link> checks when interacting with anyone familiar with you or your reputation.</Pair>
</Ability>
<Ability id="traitproxyofmany-proxy-of-many-fn16-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitproxyofmany-proxy-of-many-fn16-2"><Link to="/trait/proxy_of_many">⮞</Link> Proxy of Many <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-16.2" id="main-traits_faith_ab-fake-fn-16.2" data-hash-target to="main-traits_faith_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitproxyofmany-proxy-of-many-fn16-2-flavor">As a pantheist, you are accustomed to calling on aid from a variety of sources, and have a pragmatic sense for how to best make use of any ally.</Pair>
<Pair single="benefit" id="traitproxyofmany-proxy-of-many-fn16-2-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to request a favor from a creature that has not performed a favor for you in the past week. This bonus increases to +4 if you have performed a favor for that creature since it last did a favor for you.</Pair>
</Ability>
<Ability id="traitredeemer-redeemer-fn7-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitredeemer-redeemer-fn7-2"><Link to="/trait/redeemer">⮞</Link> Redeemer <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-7.2" id="main-traits_faith_ab-fake-fn-7.2" data-hash-target to="main-traits_faith_ab-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitredeemer-redeemer-fn7-2-flavor">You've always held the strong belief that morality is everyone's choice, and that those who act in wicked ways have simply never been shown how their actions truly affect others. If they could be shown their errors, then they would accept a more positive course of action - and you have just enough patience to see this through.</Pair>
<Pair single="benefit" id="traitredeemer-redeemer-fn7-2-benefit">When acting as a sponsor for an evil creature seeking redemption, your patience and kindness grant the creature a +3 bonus on its save rather than a +1 bonus.</Pair>
</Ability>
<Ability id="traitreligiousreformer-religious-reformer-fn16-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreligiousreformer-religious-reformer-fn16-3"><Link to="/trait/religious_reformer">⮞</Link> Religious Reformer <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-16.3" id="main-traits_faith_ab-fake-fn-16.3" data-hash-target to="main-traits_faith_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitreligiousreformer-religious-reformer-fn16-3-flavor">You have spent many years studying the tenets of your faith, and now believe that the dominant factions within the church have deviated from its true meaning and purpose. Rather than breaking with your misguided church, you've decided to stand up and fight to reform the organization you love. You have fervently studied scripture and steeled your will to combat the divergent beliefs of your peers.</Pair>
<Pair single="benefit" id="traitreligiousreformer-religious-reformer-fn16-3-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks that pertain to your own religion or spiritual practice, and you gain a +2 trait bonus on saving throws against spells cast by others who worship your god or adhere to your philosophy.</Pair>
</Ability>
<Ability id="traitriveracumen-river-acumen-fn17" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitriveracumen-river-acumen-fn17"><Link to="/trait/river_acumen">⮞</Link> River Acumen <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-17" id="main-traits_faith_ab-fake-fn-17" data-hash-target to="main-traits_faith_ab-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitriveracumen-river-acumen-fn17-flavor">Your connection with the river and its tributaries has blended with your reverence for the gods of the river passages so much so that you seem divinely blessed while plying river waters.</Pair>
<Pair single="benefit" id="traitriveracumen-river-acumen-fn17-benefit">You gain a +2 trait bonus on <Link to="/skill/swim">Swim</Link> checks in rivers or streams, and a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to forage for food in or near a river or stream.</Pair>
</Ability>
<Ability id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn4-10-fn5-5-fn6-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn4-10-fn5-5-fn6-5"><Link to="/trait/scholar_of_the_great_beyond">⮞</Link> Scholar of the Great Beyond <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.10" id="main-traits_faith_ab-fake-fn-4.10" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-5.5" id="main-traits_faith_ab-fake-fn-5.5" data-hash-target to="main-traits_faith_ab-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-6.5" id="main-traits_faith_ab-fake-fn-6.5" data-hash-target to="main-traits_faith_ab-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn4-10-fn5-5-fn6-5-flavor">Your greatest interests as a child did not lie with current events or the mundane; you have always felt out of place, as if you were born in the wrong era. You take to philosophical discussions of the Great Beyond and of historical events with ease.</Pair>
<Pair single="benefit" id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn4-10-fn5-5-fn6-5-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_history">Knowledge (history)</Link> and <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitschooledinquisitor-schooled-inquisitor-fn4-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitschooledinquisitor-schooled-inquisitor-fn4-11"><Link to="/trait/schooled_inquisitor">⮞</Link> Schooled Inquisitor <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.11" id="main-traits_faith_ab-fake-fn-4.11" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitschooledinquisitor-schooled-inquisitor-fn4-11-flavor">Your additional training aids in identifying the wiles of your faith's enemies.</Pair>
<Pair single="benefit" id="traitschooledinquisitor-schooled-inquisitor-fn4-11-benefit">You gain a +2 trait bonus on all <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks made to identify the abilities and weaknesses of creatures.</Pair>
</Ability>
<Ability id="traitscourgeofthedarkness-scourge-of-the-darkness-fn18" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscourgeofthedarkness-scourge-of-the-darkness-fn18"><Link to="/trait/scourge_of_the_darkness">⮞</Link> Scourge of the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-18" id="main-traits_faith_ab-fake-fn-18" data-hash-target to="main-traits_faith_ab-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn18-flavor">Stories of the depredations present in the Darklands drive you to explore its shadowy depths and purge the corruption from within.</Pair>
<Pair single="benefit" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn18-benefit">You gain a +1 trait bonus on saving throws against fear while in the Darklands and a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against creatures native to the Darklands.</Pair>
</Ability>
<Ability id="traitsecretkeeper-secret-keeper-fn2-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsecretkeeper-secret-keeper-fn2-3"><Link to="/trait/secret_keeper">⮞</Link> Secret Keeper <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2.3" id="main-traits_faith_ab-fake-fn-2.3" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitsecretkeeper-secret-keeper-fn2-3-flavor">Avoiding inquisitors and agents of your enemies has required you to become a practiced liar.</Pair>
<Pair single="benefit" id="traitsecretkeeper-secret-keeper-fn2-3-benefit">You gain a +3 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks when they are opposed by another's <Link to="/skill/sense_motive">Sense Motive</Link> check.</Pair>
</Ability>
<Ability id="traitselfactualization-self-actualization-fn16-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitselfactualization-self-actualization-fn16-4"><Link to="/trait/self_actualization">⮞</Link> Self-Actualization <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-16.4" id="main-traits_faith_ab-fake-fn-16.4" data-hash-target to="main-traits_faith_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitselfactualization-self-actualization-fn16-4-flavor">Inspired by stories of mortals ascending to godhood, you're certain that you can do the same, and do all you can to hone your talents and reach your utmost potential.</Pair>
<Pair single="benefit" id="traitselfactualization-self-actualization-fn16-4-benefit">Once per day, when you take 20 on a roll or check, you can complete the action in only five times the normal amount of time for that action, rather than 20 times the normal amount.</Pair>
</Ability>
<Ability id="traitspellintuition-spell-intuition-fn9-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitspellintuition-spell-intuition-fn9-5"><Link to="/trait/spell_intuition">⮞</Link> Spell Intuition <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-9.5" id="main-traits_faith_ab-fake-fn-9.5" data-hash-target to="main-traits_faith_ab-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitspellintuition-spell-intuition-fn9-5-flavor">Blessed by a priest of a deity of magic at birth, you demonstrated a remarkable knack for guessing the nature of spells without the schooling of your instructors.</Pair>
<Pair single="benefit" id="traitspellintuition-spell-intuition-fn9-5-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, and Spellcraft becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Gebbites, <Link to="/faith/nethys">Nethys</Link> worshipers, Nexians.</p>
</Pair>
</Ability>
<Ability id="traitspiritsense-spirit-sense-fn4-12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitspiritsense-spirit-sense-fn4-12"><Link to="/trait/spirit_sense">⮞</Link> Spirit Sense <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-4.12" id="main-traits_faith_ab-fake-fn-4.12" data-hash-target to="main-traits_faith_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitspiritsense-spirit-sense-fn4-12-flavor">You are so attuned to the spiritual world that it is hard to get the jump on you.</Pair>
<Pair single="benefit" id="traitspiritsense-spirit-sense-fn4-12-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> checks to avoid being surprised and to detect invisible or incorporeal creatures.</Pair>
</Ability>
<Ability id="traitstudentofhistory-student-of-history-fn2-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstudentofhistory-student-of-history-fn2-4"><Link to="/trait/student_of_history">⮞</Link> Student of History <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2.4" id="main-traits_faith_ab-fake-fn-2.4" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitstudentofhistory-student-of-history-fn2-4-flavor">One can move toward enlightenment by understanding the mistakes of past generations.</Pair>
<Pair single="benefit" id="traitstudentofhistory-student-of-history-fn2-4-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and Knowledge (history) is a class skill for you.</Pair>
</Ability>
<Ability id="traittraditionalist-traditionalist-fn2-5-fn16-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittraditionalist-traditionalist-fn2-5-fn16-5"><Link to="/trait/traditionalist">⮞</Link> Traditionalist <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2.5" id="main-traits_faith_ab-fake-fn-2.5" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-16.5" id="main-traits_faith_ab-fake-fn-16.5" data-hash-target to="main-traits_faith_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traittraditionalist-traditionalist-fn2-5-fn16-5-flavor">You attempt to maintain older traditions despite changing social norms, and find great value in the trappings and codes of the aristocracy.</Pair>
<Pair single="benefit" id="traittraditionalist-traditionalist-fn2-5-fn16-5-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks, and Knowledge (nobility) is a class skill for you.</Pair>
</Ability>
<Ability id="traitunnaturalpresence-unnatural-presence-fn14-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitunnaturalpresence-unnatural-presence-fn14-2"><Link to="/trait/unnatural_presence">⮞</Link> Unnatural Presence <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-14.2" id="main-traits_faith_ab-fake-fn-14.2" data-hash-target to="main-traits_faith_ab-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitunnaturalpresence-unnatural-presence-fn14-2-flavor">Your prolonged association with alien forces leaks from your pores.</Pair>
<Pair single="benefit" id="traitunnaturalpresence-unnatural-presence-fn14-2-benefit">You can use your <Link to="/skill/intimidate">Intimidate</Link> skill to demoralize animals and vermin; Intimidate is a class skill for you.</Pair>
</Ability>
<Ability id="traitunshackled-unshackled-fn2-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitunshackled-unshackled-fn2-6"><Link to="/trait/unshackled">⮞</Link> Unshackled <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2.6" id="main-traits_faith_ab-fake-fn-2.6" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitunshackled-unshackled-fn2-6-flavor">You have escaped slavery or other imprisonment and have vowed never to be shackled again.</Pair>
<Pair single="benefit" id="traitunshackled-unshackled-fn2-6-benefit">You gain a +1 trait bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks, and Escape Artist is a class skill for you.</Pair>
</Ability>
<Ability id="traituntrainedscholar-untrained-scholar-fn2-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traituntrainedscholar-untrained-scholar-fn2-7"><Link to="/trait/untrained_scholar">⮞</Link> Untrained Scholar <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-2.7" id="main-traits_faith_ab-fake-fn-2.7" data-hash-target to="main-traits_faith_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traituntrainedscholar-untrained-scholar-fn2-7-flavor">While scholarship is not your primary focus, you have spent enough time in classrooms and libraries to learn a few things.</Pair>
<Pair single="benefit" id="traituntrainedscholar-untrained-scholar-fn2-7-benefit">Once per day, you can attempt a <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link> or <Link to="/skill/knowledge_local">Knowledge (local)</Link> check untrained with a +2 trait bonus.</Pair>
</Ability>
<Ability id="traitzealot-zealot-fn15-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealot-zealot-fn15-2"><Link to="/trait/zealot">⮞</Link> Zealot <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-15.2" id="main-traits_faith_ab-fake-fn-15.2" data-hash-target to="main-traits_faith_ab-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link>, you must match the alignment of your chosen deity exactly</Pair>
<Pair single="flavor" id="traitzealot-zealot-fn15-2-flavor">You aren't just faithful to the worship of your patron deity - you are obsessively loyal to all of the faith's tenets and guidelines. Your devotion is an anchor that keeps you from drifting away into the throes of the Bleaching, and you cling to it like the life raft it is.</Pair>
<Pair single="benefit" id="traitzealot-zealot-fn15-2-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and that skill is a class skill for you. As long as you remain completely faithful to the tenets of your faith (as determined by the GM), you never suffer from the Bleaching.</Pair>
</Ability>
<Ability id="traitzealotsbearing-zealots-bearing-fn16-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealotsbearing-zealots-bearing-fn16-6"><Link to="/trait/zealots_bearing">⮞</Link> Zealot's Bearing <sup><InnerLink showBacklink="backlink-main-traits_faith_ab-fake-fn-16.6" id="main-traits_faith_ab-fake-fn-16.6" data-hash-target to="main-traits_faith_ab-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitzealotsbearing-zealots-bearing-fn16-6-flavor">Your fiery passion for your faith or philosophy is obvious to everyone around you. Those who share your convictions automatically find themselves wanting to defer to your zealous authority, making you a natural leader of your faith. Unfortunately, your scorn for those who haven't yet seen the wisdom of converting is equally obvious, and makes you a poor ambassador or missionary to the "ignorant masses" (as you not-so secretly think of them).</Pair>
<Pair single="benefit" id="traitzealotsbearing-zealots-bearing-fn16-6-benefit">You gain a +2 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks when dealing with adherents of your faith or philosophy, but a -1 penalty on Diplomacy and Intimidate checks when dealing with anyone else.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_faith_ab-label">Footnotes</h3><ol>
<li id="main-traits_faith_ab-fake-fn-1-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith_ab-fake-fn-1" data-hash-target to="main-traits_faith_ab-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-2-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2" data-hash-target to="main-traits_faith_ab-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2.2" data-hash-target to="main-traits_faith_ab-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2.3" data-hash-target to="main-traits_faith_ab-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2.4" data-hash-target to="main-traits_faith_ab-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2.5" data-hash-target to="main-traits_faith_ab-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2.6" data-hash-target to="main-traits_faith_ab-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith_ab-fake-fn-2.7" data-hash-target to="main-traits_faith_ab-fake-fn-2.7">↩<sup>7</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-3-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith_ab-fake-fn-3" data-hash-target to="main-traits_faith_ab-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-4-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4" data-hash-target to="main-traits_faith_ab-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.2" data-hash-target to="main-traits_faith_ab-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.3" data-hash-target to="main-traits_faith_ab-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.4" data-hash-target to="main-traits_faith_ab-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.5" data-hash-target to="main-traits_faith_ab-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.6" data-hash-target to="main-traits_faith_ab-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.7" data-hash-target to="main-traits_faith_ab-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.8" data-hash-target to="main-traits_faith_ab-fake-fn-4.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.9" data-hash-target to="main-traits_faith_ab-fake-fn-4.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.10" data-hash-target to="main-traits_faith_ab-fake-fn-4.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.11" data-hash-target to="main-traits_faith_ab-fake-fn-4.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith_ab-fake-fn-4.12" data-hash-target to="main-traits_faith_ab-fake-fn-4.12">↩<sup>12</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-5-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_ab-fake-fn-5" data-hash-target to="main-traits_faith_ab-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_ab-fake-fn-5.2" data-hash-target to="main-traits_faith_ab-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_ab-fake-fn-5.3" data-hash-target to="main-traits_faith_ab-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_ab-fake-fn-5.4" data-hash-target to="main-traits_faith_ab-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith_ab-fake-fn-5.5" data-hash-target to="main-traits_faith_ab-fake-fn-5.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-6-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_ab-fake-fn-6" data-hash-target to="main-traits_faith_ab-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_ab-fake-fn-6.2" data-hash-target to="main-traits_faith_ab-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_ab-fake-fn-6.3" data-hash-target to="main-traits_faith_ab-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_ab-fake-fn-6.4" data-hash-target to="main-traits_faith_ab-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith_ab-fake-fn-6.5" data-hash-target to="main-traits_faith_ab-fake-fn-6.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-7-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_ab-fake-fn-7" data-hash-target to="main-traits_faith_ab-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith_ab-fake-fn-7.2" data-hash-target to="main-traits_faith_ab-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-8-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith_ab-fake-fn-8" data-hash-target to="main-traits_faith_ab-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-9-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_ab-fake-fn-9" data-hash-target to="main-traits_faith_ab-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_ab-fake-fn-9.2" data-hash-target to="main-traits_faith_ab-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_ab-fake-fn-9.3" data-hash-target to="main-traits_faith_ab-fake-fn-9.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_ab-fake-fn-9.4" data-hash-target to="main-traits_faith_ab-fake-fn-9.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith_ab-fake-fn-9.5" data-hash-target to="main-traits_faith_ab-fake-fn-9.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-10-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_ab-fake-fn-10" data-hash-target to="main-traits_faith_ab-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_ab-fake-fn-10.2" data-hash-target to="main-traits_faith_ab-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith_ab-fake-fn-10.3" data-hash-target to="main-traits_faith_ab-fake-fn-10.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-11-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_ab-fake-fn-11" data-hash-target to="main-traits_faith_ab-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_ab-fake-fn-11.2" data-hash-target to="main-traits_faith_ab-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_ab-fake-fn-11.3" data-hash-target to="main-traits_faith_ab-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith_ab-fake-fn-11.4" data-hash-target to="main-traits_faith_ab-fake-fn-11.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-12-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith_ab-fake-fn-12" data-hash-target to="main-traits_faith_ab-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-13-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith_ab-fake-fn-13" data-hash-target to="main-traits_faith_ab-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-14-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_ab-fake-fn-14" data-hash-target to="main-traits_faith_ab-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith_ab-fake-fn-14.2" data-hash-target to="main-traits_faith_ab-fake-fn-14.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-15-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith_ab-fake-fn-15" data-hash-target to="main-traits_faith_ab-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith_ab-fake-fn-15.2" data-hash-target to="main-traits_faith_ab-fake-fn-15.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-16-target"><p><Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_ab-fake-fn-16" data-hash-target to="main-traits_faith_ab-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_ab-fake-fn-16.2" data-hash-target to="main-traits_faith_ab-fake-fn-16.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_ab-fake-fn-16.3" data-hash-target to="main-traits_faith_ab-fake-fn-16.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_ab-fake-fn-16.4" data-hash-target to="main-traits_faith_ab-fake-fn-16.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_ab-fake-fn-16.5" data-hash-target to="main-traits_faith_ab-fake-fn-16.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith_ab-fake-fn-16.6" data-hash-target to="main-traits_faith_ab-fake-fn-16.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-17-target"><p><Link to="/source/people_of_the_river">People of the River</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith_ab-fake-fn-17" data-hash-target to="main-traits_faith_ab-fake-fn-17">↩</InnerLink></p></li>
<li id="main-traits_faith_ab-fake-fn-18-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_faith_ab-fake-fn-18" data-hash-target to="main-traits_faith_ab-fake-fn-18">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_sm = {title: "Sense Motive Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitbastarduc-bastard-uc-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbastarduc-bastard-uc-fn1"><Link to="/trait/bastard_uc">⮞</Link> Bastard (UC) <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-1" id="main-traits_social_sm-fake-fn-1" data-hash-target to="main-traits_social_sm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbastarduc-bastard-uc-fn1-flavor">You were born out of wedlock. You have always been an outsider in society, and in your own family. This perspective has sharpened your insight.</Pair>
<Pair single="benefit" id="traitbastarduc-bastard-uc-fn1-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcallous-callous-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcallous-callous-fn2"><Link to="/trait/callous">⮞</Link> Callous <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-2" id="main-traits_social_sm-fake-fn-2" data-hash-target to="main-traits_social_sm-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcallous-callous-fn2-flavor">You have endured many hardships throughout your life, and this has hardened you to the suffering of others to the point that you are not easily swayed by a sad story.</Pair>
<Pair single="benefit" id="traitcallous-callous-fn2-benefit">You gain a +4 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks that oppose the <Link to="/skill/bluff">Bluff</Link> checks of creatures that attempt to deceive you by winning your sympathy.</Pair>
</Ability>
<Ability id="traitcanter-canter-fn1-2-fn3-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcanter-canter-fn1-2-fn3-fn4"><Link to="/trait/canter">⮞</Link> Canter <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-1.2" id="main-traits_social_sm-fake-fn-1.2" data-hash-target to="main-traits_social_sm-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-3" id="main-traits_social_sm-fake-fn-3" data-hash-target to="main-traits_social_sm-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-4" id="main-traits_social_sm-fake-fn-4" data-hash-target to="main-traits_social_sm-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcanter-canter-fn1-2-fn3-fn4-flavor">You grew up among thieves and scoundrels, and their unusual speech patterns and turns of phrase don't faze you in the slightest.</Pair>
<Pair single="benefit" id="traitcanter-canter-fn1-2-fn3-fn4-benefit">Anyone who attempts to use <Link to="/skill/bluff">Bluff</Link> to deliver a secret message to you gains a +5 bonus on her Bluff check. When you attempt to intercept a secret message using <Link to="/skill/sense_motive">Sense Motive</Link>, you gain a +5 trait bonus on the attempt.</Pair>
</Ability>
<Ability id="traitdetectdisobedience-detect-disobedience-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdetectdisobedience-detect-disobedience-fn5"><Link to="/trait/detect_disobedience">⮞</Link> Detect Disobedience <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-5" id="main-traits_social_sm-fake-fn-5" data-hash-target to="main-traits_social_sm-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdetectdisobedience-detect-disobedience-fn5-flavor">You have an uncanny ability to spot a mutiny brewing.</Pair>
<Pair single="benefit" id="traitdetectdisobedience-detect-disobedience-fn5-benefit">You gain a +2 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to detect when an underling is trying to hide something from you, and can attempt such checks instead of Perception checks to notice and react to a subordinate's surprise attack against you.</Pair>
</Ability>
<Ability id="traithardlyafool-hardly-a-fool-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traithardlyafool-hardly-a-fool-fn6"><Link to="/trait/hardly_a_fool">⮞</Link> Hardly a Fool <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-6" id="main-traits_social_sm-fake-fn-6" data-hash-target to="main-traits_social_sm-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traithardlyafool-hardly-a-fool-fn6-flavor">You have always been able to ferret out lies and deception. Maybe you worked as an investigator for a time, you came from a place rife with lies, or you've studied the human condition long enough to read a person's face and get to the heart of his message.</Pair>
<Pair single="benefit" id="traithardlyafool-hardly-a-fool-fn6-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and a +1 trait bonus on saving throws against illusion effects.</Pair>
</Ability>
<Ability id="traitheartoftwoworlds-heart-of-two-worlds-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitheartoftwoworlds-heart-of-two-worlds-fn7"><Link to="/trait/heart_of_two_worlds">⮞</Link> Heart of Two Worlds <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-7" id="main-traits_social_sm-fake-fn-7" data-hash-target to="main-traits_social_sm-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitheartoftwoworlds-heart-of-two-worlds-fn7-flavor">Born into a world split in twain, you are particularly skilled at understanding and empathizing with those around you.</Pair>
<Pair single="benefit" id="traitheartoftwoworlds-heart-of-two-worlds-fn7-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks involving creatures that belong to the same race (or, if human, ethnicity) as your mother or father.</Pair>
</Ability>
<Ability id="traitinfluence-influence-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinfluence-influence-fn1-3"><Link to="/trait/influence">⮞</Link> Influence <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-1.3" id="main-traits_social_sm-fake-fn-1.3" data-hash-target to="main-traits_social_sm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitinfluence-influence-fn1-3-flavor">Your position in society grants you special insight into others, and special consideration or outright awe from others.</Pair>
<Pair single="benefit" id="traitinfluence-influence-fn1-3-benefit">Choose one of the following skills: <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sense_motive">Sense Motive</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitlawenforcer-law-enforcer-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlawenforcer-law-enforcer-fn8"><Link to="/trait/law_enforcer">⮞</Link> Law Enforcer <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-8" id="main-traits_social_sm-fake-fn-8" data-hash-target to="main-traits_social_sm-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Vigilance" hl><p>Knights who follow the code of vigilance believe that people are prone to chaos and society will eventually devolve into anarchy if given the opportunity. In order for society to continue, these knights must constantly remind people of the law, and take it upon themselves to enforce it in the absence of other authority figures. Their vows are as follows.</p>
<ul>
<li><p>I will be familiar with local laws and adhere to them strictly.</p>
</li>
<li><p>If I witness a crime, I will attempt to capture the criminal and report his actions to the authorities.</p>
</li>
<li><p>If any I meet are known to be escaped criminals, I will attempt to apprehend them by any means necessary.</p>
</li>
<li><p>I shall mete out appropriate punishment for those who violate the law, but only if no acceptable authority is readily available.</p>
</li>
<li><p>I shall remember that none are above the law, and that law is absolute. There shall be no mitigating circumstances for any individual, regardless of station or position.</p>
</li>
</ul>
</Pair>
<Pair single="benefit" id="traitlawenforcer-law-enforcer-fn8-benefit">If you follow this code, you are always alert to those who transgress against the laws of civilization. You receive a +2 bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to gain a hunch from social situations, and begin play with a pair of <Link to="/eq-misc/masterwork_manacles">masterwork manacles</Link>.</Pair>
<Pair title="Penance" hl>Knights who follow this code and violate one of its tenets must perform penance based on the violation. If they are disgraced for violating the law when it was not acceptable, they must voluntarily surrender to the appropriate authority and receive proper punishment. If they allowed a criminal to escape, they must assist in the capture and punishment of the criminal.</Pair>
</Ability>
<Ability id="traitmalevolenttemptations-malevolent-temptations-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmalevolenttemptations-malevolent-temptations-fn9"><Link to="/trait/malevolent_temptations">⮞</Link> Malevolent Temptations <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-9" id="main-traits_social_sm-fake-fn-9" data-hash-target to="main-traits_social_sm-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmalevolenttemptations-malevolent-temptations-fn9-flavor">You have resisted or escaped the temptations of a disguised <Link to="/family/hag">hag</Link>, and you learned much from your encounter.</Pair>
<Pair single="benefit" id="traitmalevolenttemptations-malevolent-temptations-fn9-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and a +2 trait bonus on saving throws to disbelieve illusions.</Pair>
</Ability>
<Ability id="traitmercenary-mercenary-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmercenary-mercenary-fn1-4"><Link to="/trait/mercenary">⮞</Link> Mercenary <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-1.4" id="main-traits_social_sm-fake-fn-1.4" data-hash-target to="main-traits_social_sm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmercenary-mercenary-fn1-4-flavor">For everything there is a price, and you are a negotiator at heart.</Pair>
<Pair single="benefit" id="traitmercenary-mercenary-fn1-4-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks made while negotiating payment for a quest or a service that you provide.</Pair>
</Ability>
<Ability id="traitmerchant-merchant-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmerchant-merchant-fn1-5"><Link to="/trait/merchant">⮞</Link> Merchant <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-1.5" id="main-traits_social_sm-fake-fn-1.5" data-hash-target to="main-traits_social_sm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmerchant-merchant-fn1-5-flavor">You lived your life as a merchant, buying and selling goods.</Pair>
<Pair single="benefit" id="traitmerchant-merchant-fn1-5-benefit">You gain a +1 trait bonus on any <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks you attempt while bargaining for the price of goods. Appraise is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpreternaturalawareness-preternatural-awareness-fn9-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpreternaturalawareness-preternatural-awareness-fn9-2"><Link to="/trait/preternatural_awareness">⮞</Link> Preternatural Awareness <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-9.2" id="main-traits_social_sm-fake-fn-9.2" data-hash-target to="main-traits_social_sm-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpreternaturalawareness-preternatural-awareness-fn9-2-flavor">Multiple encounters with fell magic have left you wary.</Pair>
<Pair single="benefit" id="traitpreternaturalawareness-preternatural-awareness-fn9-2-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks to notice cursed objects, haunts, and magically disguised creatures.</Pair>
</Ability>
<Ability id="traitsuspicious-suspicious-fn1-6-fn4-2-fn3-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsuspicious-suspicious-fn1-6-fn4-2-fn3-2"><Link to="/trait/suspicious">⮞</Link> Suspicious <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-1.6" id="main-traits_social_sm-fake-fn-1.6" data-hash-target to="main-traits_social_sm-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-4.2" id="main-traits_social_sm-fake-fn-4.2" data-hash-target to="main-traits_social_sm-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sm-fake-fn-3.2" id="main-traits_social_sm-fake-fn-3.2" data-hash-target to="main-traits_social_sm-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsuspicious-suspicious-fn1-6-fn4-2-fn3-2-flavor">You discovered at an early age that someone you trusted, perhaps an older sibling or a parent, had lied to you, and lied often, about something you had taken for granted, leaving you quick to question the claims of others.</Pair>
<Pair single="benefit" id="traitsuspicious-suspicious-fn1-6-fn4-2-fn3-2-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_sm-label">Footnotes</h3><ol>
<li id="main-traits_social_sm-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sm-fake-fn-1" data-hash-target to="main-traits_social_sm-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sm-fake-fn-1.2" data-hash-target to="main-traits_social_sm-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sm-fake-fn-1.3" data-hash-target to="main-traits_social_sm-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sm-fake-fn-1.4" data-hash-target to="main-traits_social_sm-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sm-fake-fn-1.5" data-hash-target to="main-traits_social_sm-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sm-fake-fn-1.6" data-hash-target to="main-traits_social_sm-fake-fn-1.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-2-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sm-fake-fn-2" data-hash-target to="main-traits_social_sm-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-3-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sm-fake-fn-3" data-hash-target to="main-traits_social_sm-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sm-fake-fn-3.2" data-hash-target to="main-traits_social_sm-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-4-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_sm-fake-fn-4" data-hash-target to="main-traits_social_sm-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_sm-fake-fn-4.2" data-hash-target to="main-traits_social_sm-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-5-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_sm-fake-fn-5" data-hash-target to="main-traits_social_sm-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-6-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_sm-fake-fn-6" data-hash-target to="main-traits_social_sm-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-7-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_sm-fake-fn-7" data-hash-target to="main-traits_social_sm-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-8-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_sm-fake-fn-8" data-hash-target to="main-traits_social_sm-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_sm-fake-fn-9-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_sm-fake-fn-9" data-hash-target to="main-traits_social_sm-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_sm-fake-fn-9.2" data-hash-target to="main-traits_social_sm-fake-fn-9.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_sur_per = {title: "Survival and Perception Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitbeastkin-beastkin-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbeastkin-beastkin-fn1"><Link to="/trait/beastkin">⮞</Link> Beastkin <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-1" id="main-traits_social_sur_per-fake-fn-1" data-hash-target to="main-traits_social_sur_per-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitbeastkin-beastkin-fn1-benefit"><p>Select one specific type of animal (such as wolves or apes). You were raised from infancy by an animal or pack of animals of that type. You learned their ways and have more in common with your beastly kin than members of any humanoid race.</p>
<p>You gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks and can use <Link to="/spell/speak_with_animals">speak with animals</Link> as a spell-like ability at will to communicate with the type of animal that raised you.</p>
</Pair>
</Ability>
<Ability id="traitexplorer-explorer-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexplorer-explorer-fn2"><Link to="/trait/explorer">⮞</Link> Explorer <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-2" id="main-traits_social_sur_per-fake-fn-2" data-hash-target to="main-traits_social_sur_per-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitexplorer-explorer-fn2-flavor">Though many gnomes settle down in communities large enough and interesting enough to provide them with all the stimulation they need to ward off the Bleaching, you're never going to be one of them. You are always looking around the next bend in the road or over the next hill, past the borders of where you are to where you want to be.</Pair>
<Pair single="benefit" id="traitexplorer-explorer-fn2-benefit"><p>At the beginning of each character level, select one desired terrain type from the following list: cold, desert, forest, jungle, mountains (including hills), plains, planes (other than the Material Plane), swamp, underground (including caves and dungeons), urban, or water. You gain a +2 bonus on all <Link to="/skill/survival">Survival</Link> checks made in your desired terrain type.</p>
<p>At the beginning of each level, you must select a new desired terrain type to replace the old one (you cannot take the same desired terrain type two levels in a row).</p>
</Pair>
</Ability>
<Ability id="traitorphaned-orphaned-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitorphaned-orphaned-fn3"><Link to="/trait/orphaned">⮞</Link> Orphaned <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-3" id="main-traits_social_sur_per-fake-fn-3" data-hash-target to="main-traits_social_sur_per-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitorphaned-orphaned-fn3-flavor">You grew up separated from your birth parents, and had to learn to watch out for yourself.</Pair>
<Pair single="benefit" id="traitorphaned-orphaned-fn3-benefit">You gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpovertystricken-poverty-stricken-fn3-2-fn4-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpovertystricken-poverty-stricken-fn3-2-fn4-fn5"><Link to="/trait/poverty_stricken">⮞</Link> Poverty-Stricken <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-3.2" id="main-traits_social_sur_per-fake-fn-3.2" data-hash-target to="main-traits_social_sur_per-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-4" id="main-traits_social_sur_per-fake-fn-4" data-hash-target to="main-traits_social_sur_per-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-5" id="main-traits_social_sur_per-fake-fn-5" data-hash-target to="main-traits_social_sur_per-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpovertystricken-poverty-stricken-fn3-2-fn4-fn5-flavor">Your childhood was tough, and your parents always had to make every copper piece count. Hunger was your constant companion, and you often had to live off the land or sleep in the wild.</Pair>
<Pair single="benefit" id="traitpovertystricken-poverty-stricken-fn3-2-fn4-fn5-benefit">You gain a +1 bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpreternaturalawareness-preternatural-awareness-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpreternaturalawareness-preternatural-awareness-fn6"><Link to="/trait/preternatural_awareness">⮞</Link> Preternatural Awareness <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-6" id="main-traits_social_sur_per-fake-fn-6" data-hash-target to="main-traits_social_sur_per-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpreternaturalawareness-preternatural-awareness-fn6-flavor">Multiple encounters with fell magic have left you wary.</Pair>
<Pair single="benefit" id="traitpreternaturalawareness-preternatural-awareness-fn6-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks to notice cursed objects, haunts, and magically disguised creatures.</Pair>
</Ability>
<Ability id="traitruggeddragonhunter-rugged-dragon-hunter-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitruggeddragonhunter-rugged-dragon-hunter-fn7"><Link to="/trait/rugged_dragon_hunter">⮞</Link> Rugged Dragon Hunter <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-7" id="main-traits_social_sur_per-fake-fn-7" data-hash-target to="main-traits_social_sur_per-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitruggeddragonhunter-rugged-dragon-hunter-fn7-benefit">You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to track dragons. If you have the <Link to="/ability/favored_terrain">favored terrain</Link> class ability, add a +1 bonus to check for skills affected by this ability, as long as you're using these skills in regards to a dragon.</Pair>
</Ability>
<Ability id="traitsavage-savage-fn3-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsavage-savage-fn3-3"><Link to="/trait/savage">⮞</Link> Savage <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-3.3" id="main-traits_social_sur_per-fake-fn-3.3" data-hash-target to="main-traits_social_sur_per-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsavage-savage-fn3-3-flavor">You were born and raised in untamed lands far from civilization. You learned to survive in the elements among brutal humanoids and beasts.</Pair>
<Pair single="benefit" id="traitsavage-savage-fn3-3-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks and a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks to get along in the wild. Knowledge (nature) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitseeker-seeker-fn3-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitseeker-seeker-fn3-4"><Link to="/trait/seeker">⮞</Link> Seeker <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-3.4" id="main-traits_social_sur_per-fake-fn-3.4" data-hash-target to="main-traits_social_sur_per-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitseeker-seeker-fn3-4-flavor">You are always on the lookout for reward and danger.</Pair>
<Pair single="benefit" id="traitseeker-seeker-fn3-4-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and Perception is always a class skill for you.</Pair>
</Ability>
<Ability id="traittriaxustrained-triaxus-trained-fn7-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traittriaxustrained-triaxus-trained-fn7-2"><Link to="/trait/triaxus_trained">⮞</Link> Triaxus-Trained <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-7.2" id="main-traits_social_sur_per-fake-fn-7.2" data-hash-target to="main-traits_social_sur_per-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittriaxustrained-triaxus-trained-fn7-2-flavor">You have been trained in intricate dragon-handling techniques that originated on Triaxus.</Pair>
<Pair single="benefit" id="traittriaxustrained-triaxus-trained-fn7-2-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and a +1 trait bonus on skill checks attempted as part of trying to influence a dragon.</Pair>
</Ability>
<Ability id="traitvigilantspycatcher-vigilant-spycatcher-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvigilantspycatcher-vigilant-spycatcher-fn8"><Link to="/trait/vigilant_spycatcher">⮞</Link> Vigilant Spycatcher <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-8" id="main-traits_social_sur_per-fake-fn-8" data-hash-target to="main-traits_social_sur_per-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvigilantspycatcher-vigilant-spycatcher-fn8-flavor">Paranoid parents or a military trainer taught you to keep vigilant for spies.</Pair>
<Pair single="benefit" id="traitvigilantspycatcher-vigilant-spycatcher-fn8-benefit">If you roll less than 10 on <Link to="/skill/perception">Perception</Link> checks to see through disguises, determine your result as if you had rolled 10.</Pair>
</Ability>
<Ability id="traitwastelandvargrant-wasteland-vargrant-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwastelandvargrant-wasteland-vargrant-fn9"><Link to="/trait/wasteland_vargrant">⮞</Link> Wasteland Vargrant <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-9" id="main-traits_social_sur_per-fake-fn-9" data-hash-target to="main-traits_social_sur_per-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwastelandvargrant-wasteland-vargrant-fn9-flavor">You have spent most of your life learning how to survive in wastelands, and a lack of normal survival resources apparent in the environment is not a problem for you.</Pair>
<Pair single="benefit" id="traitwastelandvargrant-wasteland-vargrant-fn9-benefit">When you gain this trait, pick one type of wasteland from the following list: blighted, Abyssal, desert, or waterlogged. You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks in that type of wasteland terrain. (The GM determines whether terrain falls into the chosen type of wasteland.) Once you choose a type of wasteland terrain to gain this benefit in, you cannot change it later.</Pair>
</Ability>
<Ability id="traitweatheredemissary-weathered-emissary-fn3-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitweatheredemissary-weathered-emissary-fn3-5"><Link to="/trait/weathered_emissary">⮞</Link> Weathered Emissary <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-3.5" id="main-traits_social_sur_per-fake-fn-3.5" data-hash-target to="main-traits_social_sur_per-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitweatheredemissary-weathered-emissary-fn3-5-flavor">Your travels in the wildlands gave you insight into how to survive their dangers and communicate with their inhabitants.</Pair>
<Pair single="benefit" id="traitweatheredemissary-weathered-emissary-fn3-5-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> and <Link to="/skill/survival">Survival</Link> checks, and Linguistics is always a class skill for you.</Pair>
</Ability>
<Ability id="traitwiscraniear-wiscrani-ear-fn8-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwiscraniear-wiscrani-ear-fn8-2"><Link to="/trait/wiscrani_ear">⮞</Link> Wiscrani Ear <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-8.2" id="main-traits_social_sur_per-fake-fn-8.2" data-hash-target to="main-traits_social_sur_per-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwiscraniear-wiscrani-ear-fn8-2-flavor">You have a keen ear for the movements of thieves and monsters.</Pair>
<Pair single="benefit" id="traitwiscraniear-wiscrani-ear-fn8-2-benefit">You can always take 10 on <Link to="/skill/perception">Perception</Link> checks, even when stress and distractions would normally prevent you from doing so.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_sur_per-label">Footnotes</h3><ol>
<li id="main-traits_social_sur_per-fake-fn-1-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sur_per-fake-fn-1" data-hash-target to="main-traits_social_sur_per-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-2-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sur_per-fake-fn-2" data-hash-target to="main-traits_social_sur_per-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sur_per-fake-fn-3" data-hash-target to="main-traits_social_sur_per-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sur_per-fake-fn-3.2" data-hash-target to="main-traits_social_sur_per-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sur_per-fake-fn-3.3" data-hash-target to="main-traits_social_sur_per-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sur_per-fake-fn-3.4" data-hash-target to="main-traits_social_sur_per-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sur_per-fake-fn-3.5" data-hash-target to="main-traits_social_sur_per-fake-fn-3.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-4-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_sur_per-fake-fn-4" data-hash-target to="main-traits_social_sur_per-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-5-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_sur_per-fake-fn-5" data-hash-target to="main-traits_social_sur_per-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-6-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_sur_per-fake-fn-6" data-hash-target to="main-traits_social_sur_per-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-7-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_sur_per-fake-fn-7" data-hash-target to="main-traits_social_sur_per-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_sur_per-fake-fn-7.2" data-hash-target to="main-traits_social_sur_per-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-8-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_sur_per-fake-fn-8" data-hash-target to="main-traits_social_sur_per-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_sur_per-fake-fn-8.2" data-hash-target to="main-traits_social_sur_per-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-9-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_sur_per-fake-fn-9" data-hash-target to="main-traits_social_sur_per-fake-fn-9">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_phys = {title: "Physical Skill Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitacrobat-acrobat-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitacrobat-acrobat-fn1"><Link to="/trait/acrobat">⮞</Link> Acrobat <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-1" id="main-traits_social_phys-fake-fn-1" data-hash-target to="main-traits_social_phys-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitacrobat-acrobat-fn1-flavor">Having trained from a young age, you're capable of amazing feats of daring.</Pair>
<Pair single="benefit" id="traitacrobat-acrobat-fn1-benefit">You gain a +1 bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks, and you take only a -2 penalty instead of the normal -5 penalty when using the <Link to="/skill/climb">Climb</Link> skill to attempt an accelerated climb.</Pair>
</Ability>
<Ability id="traitbeastbond-beast-bond-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbeastbond-beast-bond-fn1-2"><Link to="/trait/beast_bond">⮞</Link> Beast Bond <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-1.2" id="main-traits_social_phys-fake-fn-1.2" data-hash-target to="main-traits_social_phys-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbeastbond-beast-bond-fn1-2-flavor">You share a close bond with animals.</Pair>
<Pair single="benefit" id="traitbeastbond-beast-bond-fn1-2-benefit">You gain a +1 bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks and <Link to="/skill/ride">Ride</Link> checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchildofthestreets-child-of-the-streets-fn1-3-fn2-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchildofthestreets-child-of-the-streets-fn1-3-fn2-fn3"><Link to="/trait/child_of_the_streets">⮞</Link> Child of the Streets <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-1.3" id="main-traits_social_phys-fake-fn-1.3" data-hash-target to="main-traits_social_phys-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-2" id="main-traits_social_phys-fake-fn-2" data-hash-target to="main-traits_social_phys-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-3" id="main-traits_social_phys-fake-fn-3" data-hash-target to="main-traits_social_phys-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchildofthestreets-child-of-the-streets-fn1-3-fn2-fn3-flavor">You grew up on the streets of a large city, and as a result you have developed a knack for picking pockets and hiding small objects on your person.</Pair>
<Pair single="benefit" id="traitchildofthestreets-child-of-the-streets-fn1-3-fn2-fn3-benefit">You gain a +1 trait bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks, and Sleight of Hand is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcollector-collector-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcollector-collector-fn4"><Link to="/trait/collector">⮞</Link> Collector <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-4" id="main-traits_social_phys-fake-fn-4" data-hash-target to="main-traits_social_phys-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcollector-collector-fn4-flavor">You have a small, bizarre collection of apparently worthless items, such as rusty nails, animal droppings, clockwork cogs, or bent spoons. You find this strange menagerie useful in ways no non-gnome could understand. Seeking new items to add to this collection is endlessly fascinating to you, and while no one else may understand why a Chelish horsenail is worthy to add to your collection when a dwarven wheelbarrow nail is not, it all makes sense to you.</Pair>
<Pair single="benefit" id="traitcollector-collector-fn4-benefit"><p>Select one of the following skills: <Link to="/skill/craft">Craft</Link> (any one), <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/perform">Perform</Link> (any one), or <Link to="/skill/spellcraft">Spellcraft</Link>. Whenever you have your collection within 5 feet of you, you gain a +2 trait bonus on all checks made with the selected skill.</p>
<p>Once this skill has been selected, it cannot be changed, nor can you gain it for any other collection you begin amassing.</p>
</Pair>
</Ability>
<Ability id="traitcriminal-criminal-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminal-criminal-fn1-4"><Link to="/trait/criminal">⮞</Link> Criminal <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-1.4" id="main-traits_social_phys-fake-fn-1.4" data-hash-target to="main-traits_social_phys-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminal-criminal-fn1-4-flavor">You spent your early life robbing and stealing to get by.</Pair>
<Pair single="benefit" id="traitcriminal-criminal-fn1-4-benefit">Select one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdeepcover-deep-cover-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdeepcover-deep-cover-fn5"><Link to="/trait/deep_cover">⮞</Link> Deep Cover <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-5" id="main-traits_social_phys-fake-fn-5" data-hash-target to="main-traits_social_phys-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdeepcover-deep-cover-fn5-flavor">You have lived a double life since your youth, perhaps to avoid persecution for your true identity or in service to an enemy of the people or group associated with your cover identity.</Pair>
<Pair single="benefit" id="traitdeepcover-deep-cover-fn5-benefit">You can always take 10 on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/disguise">Disguise</Link> checks to assume and maintain your cover identity. Bluff or Disguise (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitescapedcaptive-escaped-captive-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitescapedcaptive-escaped-captive-fn6"><Link to="/trait/escaped_captive">⮞</Link> Escaped Captive <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-6" id="main-traits_social_phys-fake-fn-6" data-hash-target to="main-traits_social_phys-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitescapedcaptive-escaped-captive-fn6-flavor">Whether you were on your way to becoming a drow slave or slated for the ghoul chattel pits, you very narrowly avoided a life of miserable captivity.</Pair>
<Pair single="benefit" id="traitescapedcaptive-escaped-captive-fn6-benefit">You make a habit of avoiding restraints or tight spaces, gaining a +1 trait bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks and a +2 trait bonus to CMD to avoid being pinned.</Pair>
</Ability>
<Ability id="traitgiftedsmuggler-gifted-smuggler-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgiftedsmuggler-gifted-smuggler-fn7"><Link to="/trait/gifted_smuggler">⮞</Link> Gifted Smuggler <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-7" id="main-traits_social_phys-fake-fn-7" data-hash-target to="main-traits_social_phys-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Ostenso</Pair>
<Pair single="flavor" id="traitgiftedsmuggler-gifted-smuggler-fn7-flavor">You have a knack for hiding goods on your person.</Pair>
<Pair single="benefit" id="traitgiftedsmuggler-gifted-smuggler-fn7-benefit">Any small object you attempt to hide on your body is treated as an extraordinarily small object for the purpose of <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks.</Pair>
</Ability>
<Ability id="traitordinary-ordinary-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitordinary-ordinary-fn1-5"><Link to="/trait/ordinary">⮞</Link> Ordinary <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-1.5" id="main-traits_social_phys-fake-fn-1.5" data-hash-target to="main-traits_social_phys-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitordinary-ordinary-fn1-5-flavor">The only thing extraordinary about your appearance is its ordinariness. You carry yourself in an understated way, and many people who see your face soon forget it.</Pair>
<Pair single="benefit" id="traitordinary-ordinary-fn1-5-benefit">You gain a +4 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks whenever you attempt to hide in a crowd.</Pair>
</Ability>
<Ability id="traitslaverunner-slave-runner-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitslaverunner-slave-runner-fn5-2"><Link to="/trait/slave_runner">⮞</Link> Slave Runner <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-5.2" id="main-traits_social_phys-fake-fn-5.2" data-hash-target to="main-traits_social_phys-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitslaverunner-slave-runner-fn5-2-flavor">You witnessed or were party to the rescue of a halfling from Chelish slavery by the <Link to="/rule/bellflower_network">Bellflower Network</Link> or <Link to="/rule/eagle_knights">Eagle Knights</Link>.</Pair>
<Pair single="benefit" id="traitslaverunner-slave-runner-fn5-2-benefit">Once per day when attempting to directly free a slave, you gain a +2 trait bonus on your choice of an <Link to="/skill/acrobatics">Acrobatics</Link> check, an <Link to="/skill/escape_artist">Escape Artist</Link> check, a <Link to="/skill/stealth">Stealth</Link> check, or a skill check attempted as part of a <Link to="/rule/heists">heist</Link> or <Link to="/rule/pursuit">pursuit</Link></Pair>
</Ability>
<Ability id="traitunwelcomebusiness-unwelcome-business-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunwelcomebusiness-unwelcome-business-fn8"><Link to="/trait/unwelcome_business">⮞</Link> Unwelcome Business <sup><InnerLink showBacklink="backlink-main-traits_social_phys-fake-fn-8" id="main-traits_social_phys-fake-fn-8" data-hash-target to="main-traits_social_phys-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunwelcomebusiness-unwelcome-business-fn8-flavor">You specialize in delivering or procuring shipments where those commodities are not allowed or where your identity would elicit negative bias.</Pair>
<Pair single="benefit" id="traitunwelcomebusiness-unwelcome-business-fn8-benefit">You gain a +1 trait bonus on <Link to="/skill/disguise">Disguise</Link> or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks, and that skill becomes a class skill for you. In addition, choose one humanoid species; you ignore the -2 penalty on Disguise checks to disguise yourself as a member of that species.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_phys-label">Footnotes</h3><ol>
<li id="main-traits_social_phys-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_phys-fake-fn-1" data-hash-target to="main-traits_social_phys-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_phys-fake-fn-1.2" data-hash-target to="main-traits_social_phys-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_phys-fake-fn-1.3" data-hash-target to="main-traits_social_phys-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_phys-fake-fn-1.4" data-hash-target to="main-traits_social_phys-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_phys-fake-fn-1.5" data-hash-target to="main-traits_social_phys-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-2-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_phys-fake-fn-2" data-hash-target to="main-traits_social_phys-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-3-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_phys-fake-fn-3" data-hash-target to="main-traits_social_phys-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-4-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_phys-fake-fn-4" data-hash-target to="main-traits_social_phys-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-5-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_phys-fake-fn-5" data-hash-target to="main-traits_social_phys-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_phys-fake-fn-5.2" data-hash-target to="main-traits_social_phys-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-6-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_phys-fake-fn-6" data-hash-target to="main-traits_social_phys-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-7-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_phys-fake-fn-7" data-hash-target to="main-traits_social_phys-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_phys-fake-fn-8-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_phys-fake-fn-8" data-hash-target to="main-traits_social_phys-fake-fn-8">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_mental = {title: "Mental Skill Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitcollector-collector-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcollector-collector-fn1"><Link to="/trait/collector">⮞</Link> Collector <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-1" id="main-traits_social_mental-fake-fn-1" data-hash-target to="main-traits_social_mental-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcollector-collector-fn1-flavor">You have a small, bizarre collection of apparently worthless items, such as rusty nails, animal droppings, clockwork cogs, or bent spoons. You find this strange menagerie useful in ways no non-gnome could understand. Seeking new items to add to this collection is endlessly fascinating to you, and while no one else may understand why a Chelish horsenail is worthy to add to your collection when a dwarven wheelbarrow nail is not, it all makes sense to you.</Pair>
<Pair single="benefit" id="traitcollector-collector-fn1-benefit"><p>Select one of the following skills: <Link to="/skill/craft">Craft</Link> (any one), <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/perform">Perform</Link> (any one), or <Link to="/skill/spellcraft">Spellcraft</Link>. Whenever you have your collection within 5 feet of you, you gain a +2 trait bonus on all checks made with the selected skill.</p>
<p>Once this skill has been selected, it cannot be changed, nor can you gain it for any other collection you begin amassing.</p>
</Pair>
</Ability>
<Ability id="traitetymologist-etymologist-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitetymologist-etymologist-fn1-2"><Link to="/trait/etymologist">⮞</Link> Etymologist <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-1.2" id="main-traits_social_mental-fake-fn-1.2" data-hash-target to="main-traits_social_mental-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitetymologist-etymologist-fn1-2-flavor">When you, like all other young gnomes, were taught the hodgepodge Gnome language, you became curious about the original meaning of each word and what language it was derived from. Anytime you come across a new language, you are immediately absorbed by both how it works and what words you can co-opt from it for the Gnome language.</Pair>
<Pair single="benefit" id="traitetymologist-etymologist-fn1-2-benefit">You gain a +1 trait bonus on <Link to="/skill/linguistics">Linguistics</Link> checks, know one additional bonus language, and treat Linguistics as a class skill.</Pair>
</Ability>
<Ability id="traitexcellentpenmanship-excellent-penmanship-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexcellentpenmanship-excellent-penmanship-fn2"><Link to="/trait/excellent_penmanship">⮞</Link> Excellent Penmanship <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-2" id="main-traits_social_mental-fake-fn-2" data-hash-target to="main-traits_social_mental-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexcellentpenmanship-excellent-penmanship-fn2-flavor">You are a master of calligraphy, an art once highly valued in Lung Wa and still held in high esteem in Lingshen.</Pair>
<Pair single="benefit" id="traitexcellentpenmanship-excellent-penmanship-fn2-benefit">The DC to detect forgeries you create increases by 2. If you attempt to persuade someone via a written message, you gain a +2 bonus on any <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check attempted for that communication. <Link to="/skill/linguistics">Linguistics</Link> is always a class skill for you.</Pair>
</Ability>
<Ability id="traitforthemoney-for-the-money-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitforthemoney-for-the-money-fn3"><Link to="/trait/for_the_money">⮞</Link> For the Money <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-3" id="main-traits_social_mental-fake-fn-3" data-hash-target to="main-traits_social_mental-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitforthemoney-for-the-money-fn3-benefit">You gain a +2 trait bonus on skill checks to haggle prices or negotiate payment; this bonus increases to +4 if you are in a position of military or economic power over your target. You also gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks and Appraise is always a class skill for you.</Pair>
</Ability>
<Ability id="traitgestureexpertise-gesture-expertise-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgestureexpertise-gesture-expertise-fn4"><Link to="/trait/gesture_expertise">⮞</Link> Gesture Expertise <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-4" id="main-traits_social_mental-fake-fn-4" data-hash-target to="main-traits_social_mental-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgestureexpertise-gesture-expertise-fn4-flavor">You are adept at nonverbal communication.</Pair>
<Pair single="benefit" id="traitgestureexpertise-gesture-expertise-fn4-benefit">You can use a sign language or gestural system to send complex messages quickly in combat, and with a successful DC 15 <Link to="/skill/linguistics">Linguistics</Link> check, you can express yourself clearly enough to communicate basic messages to people who do not understand your gestures. You gain a +2 trait bonus to send secret messages via gestures using the <Link to="/skill/bluff">Bluff</Link> skill, and to understand gestures with the Linguistics skill.</Pair>
</Ability>
<Ability id="traitmerchant-merchant-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmerchant-merchant-fn5"><Link to="/trait/merchant">⮞</Link> Merchant <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-5" id="main-traits_social_mental-fake-fn-5" data-hash-target to="main-traits_social_mental-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmerchant-merchant-fn5-flavor">You lived your life as a merchant, buying and selling goods.</Pair>
<Pair single="benefit" id="traitmerchant-merchant-fn5-benefit">You gain a +1 trait bonus on any <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks you attempt while bargaining for the price of goods. Appraise is always a class skill for you.</Pair>
</Ability>
<Ability id="traittirelesslogic-tireless-logic-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traittirelesslogic-tireless-logic-fn5-2"><Link to="/trait/tireless_logic">⮞</Link> Tireless Logic <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-5.2" id="main-traits_social_mental-fake-fn-5.2" data-hash-target to="main-traits_social_mental-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittirelesslogic-tireless-logic-fn5-2-flavor">Your curious mind figures out even the most complex problems.</Pair>
<Pair single="benefit" id="traittirelesslogic-tireless-logic-fn5-2-benefit">Once per day when you make an Intelligence-based skill check or ability check, you can roll twice and take the better result.</Pair>
</Ability>
<Ability id="traitunintentionallinguist-unintentional-linguist-fn5-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunintentionallinguist-unintentional-linguist-fn5-3"><Link to="/trait/unintentional_linguist">⮞</Link> Unintentional Linguist <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-5.3" id="main-traits_social_mental-fake-fn-5.3" data-hash-target to="main-traits_social_mental-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunintentionallinguist-unintentional-linguist-fn5-3-flavor">You can speak with outsiders.</Pair>
<Pair single="benefit" id="traitunintentionallinguist-unintentional-linguist-fn5-3-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> checks, and you begin play knowing one of the following languages (in addition to those granted by your race and Intelligence modifier): Abyssal, Aquan, Celestial, Ignan, Infernal, Protean, or Terran.</Pair>
</Ability>
<Ability id="traitweatheredemissary-weathered-emissary-fn5-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitweatheredemissary-weathered-emissary-fn5-4"><Link to="/trait/weathered_emissary">⮞</Link> Weathered Emissary <sup><InnerLink showBacklink="backlink-main-traits_social_mental-fake-fn-5.4" id="main-traits_social_mental-fake-fn-5.4" data-hash-target to="main-traits_social_mental-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitweatheredemissary-weathered-emissary-fn5-4-flavor">Your travels in the wildlands gave you insight into how to survive their dangers and communicate with their inhabitants.</Pair>
<Pair single="benefit" id="traitweatheredemissary-weathered-emissary-fn5-4-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> and <Link to="/skill/survival">Survival</Link> checks, and Linguistics is always a class skill for you.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_mental-label">Footnotes</h3><ol>
<li id="main-traits_social_mental-fake-fn-1-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_mental-fake-fn-1" data-hash-target to="main-traits_social_mental-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_mental-fake-fn-1.2" data-hash-target to="main-traits_social_mental-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_mental-fake-fn-2-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 23 <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_mental-fake-fn-2" data-hash-target to="main-traits_social_mental-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_mental-fake-fn-3-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_mental-fake-fn-3" data-hash-target to="main-traits_social_mental-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_mental-fake-fn-4-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_mental-fake-fn-4" data-hash-target to="main-traits_social_mental-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_mental-fake-fn-5-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_mental-fake-fn-5" data-hash-target to="main-traits_social_mental-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_mental-fake-fn-5.2" data-hash-target to="main-traits_social_mental-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_mental-fake-fn-5.3" data-hash-target to="main-traits_social_mental-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_mental-fake-fn-5.4" data-hash-target to="main-traits_social_mental-fake-fn-5.4">↩<sup>4</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_cha = {title: "Charisma Skill Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitalliesinthedeep-allies-in-the-deep-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitalliesinthedeep-allies-in-the-deep-fn1"><Link to="/trait/allies_in_the_deep">⮞</Link> Allies in the Deep <sup><InnerLink showBacklink="backlink-main-traits_social_cha-fake-fn-1" id="main-traits_social_cha-fake-fn-1" data-hash-target to="main-traits_social_cha-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitalliesinthedeep-allies-in-the-deep-fn1-flavor">You've learned to deal amicably with individuals of questionable morals when necessary.</Pair>
<Pair single="benefit" id="traitalliesinthedeep-allies-in-the-deep-fn1-benefit">You gain a +1 trait bonus on Charisma-based skill checks to influence evil creatures.</Pair>
</Ability>
<Ability id="traitbindersblood-binders-blood-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbindersblood-binders-blood-fn2"><Link to="/trait/binders_blood">⮞</Link> Binder's Blood <sup><InnerLink showBacklink="backlink-main-traits_social_cha-fake-fn-2" id="main-traits_social_cha-fake-fn-2" data-hash-target to="main-traits_social_cha-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbindersblood-binders-blood-fn2-flavor">Your lineage features a large number of genie callers, granting you insight into the intricacies of genie binding.</Pair>
<Pair single="benefit" id="traitbindersblood-binders-blood-fn2-benefit">You gain a +2 trait bonus on any Charisma-based checks when directly interacting with a genie.</Pair>
</Ability>
<Ability id="traitcleverwordplay-clever-wordplay-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcleverwordplay-clever-wordplay-fn3"><Link to="/trait/clever_wordplay">⮞</Link> Clever Wordplay <sup><InnerLink showBacklink="backlink-main-traits_social_cha-fake-fn-3" id="main-traits_social_cha-fake-fn-3" data-hash-target to="main-traits_social_cha-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcleverwordplay-clever-wordplay-fn3-flavor">Your cunning and logic are more than a match for another's confidence and poise.</Pair>
<Pair single="benefit" id="traitcleverwordplay-clever-wordplay-fn3-benefit">Choose one Charisma-based skill. You attempt checks with that skill using your Intelligence modifier instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitfoundersheritage-founders-heritage-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfoundersheritage-founders-heritage-fn4"><Link to="/trait/founders_heritage">⮞</Link> Founders' Heritage <sup><InnerLink showBacklink="backlink-main-traits_social_cha-fake-fn-4" id="main-traits_social_cha-fake-fn-4" data-hash-target to="main-traits_social_cha-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfoundersheritage-founders-heritage-fn4-flavor">You can trace your family line back to one of the founding families of Absalom that was called by Aroden to aid him in establishing the city because of their vision and potential.</Pair>
<Pair single="benefit" id="traitfoundersheritage-founders-heritage-fn4-benefit">You gain a +1 trait bonus on Charisma-based skill checks to influence citizens of Absalom.</Pair>
</Ability>
<Ability id="traitpacksavvy-pack-savvy-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpacksavvy-pack-savvy-fn5"><Link to="/trait/pack_savvy">⮞</Link> Pack Savvy <sup><InnerLink showBacklink="backlink-main-traits_social_cha-fake-fn-5" id="main-traits_social_cha-fake-fn-5" data-hash-target to="main-traits_social_cha-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitpacksavvy-pack-savvy-fn5-benefit">You have learned how to gain the respect of gnolls in your region, and you know something of their social structure.`You gain a +3 trait bonus on Charisma-based skill checks when dealing with <Link to="/monster/gnoll">gnolls</Link>.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_cha-label">Footnotes</h3><ol>
<li id="main-traits_social_cha-fake-fn-1-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_cha-fake-fn-1" data-hash-target to="main-traits_social_cha-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_cha-fake-fn-2-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_cha-fake-fn-2" data-hash-target to="main-traits_social_cha-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_cha-fake-fn-3-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_cha-fake-fn-3" data-hash-target to="main-traits_social_cha-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_cha-fake-fn-4-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_cha-fake-fn-4" data-hash-target to="main-traits_social_cha-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_cha-fake-fn-5-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_cha-fake-fn-5" data-hash-target to="main-traits_social_cha-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_prod = {title: "Productive Skill Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitartisan-artisan-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitartisan-artisan-fn1"><Link to="/trait/artisan">⮞</Link> Artisan <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-1" id="main-traits_social_prod-fake-fn-1" data-hash-target to="main-traits_social_prod-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitartisan-artisan-fn1-flavor">You spent time working under artisans, or your parents were artisans who were particularly skilled at their trade.</Pair>
<Pair single="benefit" id="traitartisan-artisan-fn1-benefit">You gain a +2 trait bonus on a single <Link to="/skill/craft">Craft</Link> skill (your choice).</Pair>
</Ability>
<Ability id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn2"><Link to="/trait/brastlewark_businessman_gog">⮞</Link> Brastlewark Businessman (GoG) <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-2" id="main-traits_social_prod-fake-fn-2" data-hash-target to="main-traits_social_prod-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn2-flavor">Your time among the gnome elite of Brastlewark in Cheliax has led to an extensive knowledge of alchemy and ready connections in the business.</Pair>
<Pair single="benefit" id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn2-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks.</Pair>
</Ability>
<Ability id="traitcollector-collector-fn2-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcollector-collector-fn2-2"><Link to="/trait/collector">⮞</Link> Collector <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-2.2" id="main-traits_social_prod-fake-fn-2.2" data-hash-target to="main-traits_social_prod-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcollector-collector-fn2-2-flavor">You have a small, bizarre collection of apparently worthless items, such as rusty nails, animal droppings, clockwork cogs, or bent spoons. You find this strange menagerie useful in ways no non-gnome could understand. Seeking new items to add to this collection is endlessly fascinating to you, and while no one else may understand why a Chelish horsenail is worthy to add to your collection when a dwarven wheelbarrow nail is not, it all makes sense to you.</Pair>
<Pair single="benefit" id="traitcollector-collector-fn2-2-benefit"><p>Select one of the following skills: <Link to="/skill/craft">Craft</Link> (any one), <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/perform">Perform</Link> (any one), or <Link to="/skill/spellcraft">Spellcraft</Link>. Whenever you have your collection within 5 feet of you, you gain a +2 trait bonus on all checks made with the selected skill.</p>
<p>Once this skill has been selected, it cannot be changed, nor can you gain it for any other collection you begin amassing.</p>
</Pair>
</Ability>
<Ability id="traitharvester-harvester-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitharvester-harvester-fn1-2"><Link to="/trait/harvester">⮞</Link> Harvester <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-1.2" id="main-traits_social_prod-fake-fn-1.2" data-hash-target to="main-traits_social_prod-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitharvester-harvester-fn1-2-flavor">You were trained to harvest all parts of an animal with care and precision.</Pair>
<Pair single="benefit" id="traitharvester-harvester-fn1-2-benefit">You gain a +1 trait bonus on <Link to="/skill/profession">Profession</Link> (tanner) or Profession (trapper) checks, and you may make these checks as if you were trained in the skill even if you have no ranks. Additionally, you do not risk poisoning yourself whenever you handle or apply poison taken from a venomous creature.</Pair>
</Ability>
<Ability id="traitmentored-mentored-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmentored-mentored-fn1-3"><Link to="/trait/mentored">⮞</Link> Mentored <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-1.3" id="main-traits_social_prod-fake-fn-1.3" data-hash-target to="main-traits_social_prod-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmentored-mentored-fn1-3-flavor">A tutor or private instructor guided you in learning your art, profession, or trade, and through your education, you became capable of teaching and guiding others.</Pair>
<Pair single="benefit" id="traitmentored-mentored-fn1-3-benefit">Choose a single <Link to="/skill/craft">Craft</Link>, <Link to="/skill/perform">Perform</Link>, or <Link to="/skill/profession">Profession</Link> skill. You gain a +1 trait bonus on checks with that skill. You also gain a +1 trait bonus when you <Link to="/rule/aid_another">aid another's</Link> skill check with any skill.</Pair>
</Ability>
<Ability id="traitnoblesavage-noble-savage-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnoblesavage-noble-savage-fn3"><Link to="/trait/noble_savage">⮞</Link> Noble Savage <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-3" id="main-traits_social_prod-fake-fn-3" data-hash-target to="main-traits_social_prod-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="flavor" id="traitnoblesavage-noble-savage-fn3-flavor">You hail from the fringes of civilization or the bottommost strata of society, but something in your character makes that seem endearing.</Pair>
<Pair single="benefit" id="traitnoblesavage-noble-savage-fn3-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/perform">Perform</Link> checks when dealing with people of high social standing.</Pair>
</Ability>
<Ability id="traitobnoxious-obnoxious-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitobnoxious-obnoxious-fn4"><Link to="/trait/obnoxious">⮞</Link> Obnoxious <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-4" id="main-traits_social_prod-fake-fn-4" data-hash-target to="main-traits_social_prod-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitobnoxious-obnoxious-fn4-flavor">You have long since forgotten to care what people think about you - though your interactions are always memorable, at the very least.</Pair>
<Pair single="benefit" id="traitobnoxious-obnoxious-fn4-benefit">Choose <Link to="/skill/perform">Perform</Link> (act), Perform (comedy), Perform (oratory), or Perform (sing); you gain a +1 trait bonus on checks with the chosen skill and gain it as a class skill.</Pair>
</Ability>
<Ability id="traitsavant-savant-fn3-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsavant-savant-fn3-2"><Link to="/trait/savant">⮞</Link> Savant <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-3.2" id="main-traits_social_prod-fake-fn-3.2" data-hash-target to="main-traits_social_prod-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/rule/kitharodian_academy">Kitharodian Academy</Link></Pair>
<Pair single="flavor" id="traitsavant-savant-fn3-2-flavor">From a very young age, the ability to master performance types has come quite naturally to you.</Pair>
<Pair single="benefit" id="traitsavant-savant-fn3-2-benefit">Choose a performance type. You gain a +2 trait bonus on all <Link to="/skill/perform">Perform</Link> checks made using that performance type. Perform is always a class skill for you.</Pair>
</Ability>
<Ability id="traitselfreliant-self-reliant-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitselfreliant-self-reliant-fn5"><Link to="/trait/self_reliant">⮞</Link> Self-Reliant <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-5" id="main-traits_social_prod-fake-fn-5" data-hash-target to="main-traits_social_prod-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitselfreliant-self-reliant-fn5-flavor">You know how to work with your hands and aren't dependent on complex tools.</Pair>
<Pair single="benefit" id="traitselfreliant-self-reliant-fn5-benefit">When attempting <Link to="/skill/craft">Craft</Link> checks, you take no penalty when using improvised tools. At the GM's discretion, you can attempt certain Craft checks even when no tools are available, though you take a -2 penalty.</Pair>
</Ability>
<Ability id="traitsimpledisciple-simple-disciple-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsimpledisciple-simple-disciple-fn1-4"><Link to="/trait/simple_disciple">⮞</Link> Simple Disciple <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-1.4" id="main-traits_social_prod-fake-fn-1.4" data-hash-target to="main-traits_social_prod-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsimpledisciple-simple-disciple-fn1-4-flavor">You picked up skill in a craft or a profession during your time at a monastery.</Pair>
<Pair single="benefit" id="traitsimpledisciple-simple-disciple-fn1-4-benefit">You gain a +1 trait bonus on checks with a <Link to="/skill/profession">Profession</Link> or <Link to="/skill/craft">Craft</Link> skill of your choice.</Pair>
</Ability>
<Ability id="traittalented-talented-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traittalented-talented-fn1-5"><Link to="/trait/talented">⮞</Link> Talented <sup><InnerLink showBacklink="backlink-main-traits_social_prod-fake-fn-1.5" id="main-traits_social_prod-fake-fn-1.5" data-hash-target to="main-traits_social_prod-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittalented-talented-fn1-5-flavor">You are a virtuoso musician, actor, or storyteller.</Pair>
<Pair single="benefit" id="traittalented-talented-fn1-5-benefit">You gain a +1 trait bonus on checks with a single <Link to="/skill/perform">Perform</Link> skill (your choice), and all Perform skills are always class skills for you.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_prod-label">Footnotes</h3><ol>
<li id="main-traits_social_prod-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_prod-fake-fn-1" data-hash-target to="main-traits_social_prod-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_prod-fake-fn-1.2" data-hash-target to="main-traits_social_prod-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_prod-fake-fn-1.3" data-hash-target to="main-traits_social_prod-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_prod-fake-fn-1.4" data-hash-target to="main-traits_social_prod-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_prod-fake-fn-1.5" data-hash-target to="main-traits_social_prod-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_prod-fake-fn-2-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_prod-fake-fn-2" data-hash-target to="main-traits_social_prod-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_prod-fake-fn-2.2" data-hash-target to="main-traits_social_prod-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_prod-fake-fn-3-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_prod-fake-fn-3" data-hash-target to="main-traits_social_prod-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_prod-fake-fn-3.2" data-hash-target to="main-traits_social_prod-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_prod-fake-fn-4-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_prod-fake-fn-4" data-hash-target to="main-traits_social_prod-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_prod-fake-fn-5-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_prod-fake-fn-5" data-hash-target to="main-traits_social_prod-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_other = {title: "Other Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><IonItem className="mainItem basic"><IonLabel><Ability id="traitadopted-adopted-fn1-fn2-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitadopted-adopted-fn1-fn2-fn3"><Link to="/trait/adopted">⮞</Link> Adopted <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-1" id="main-traits_social_other-fake-fn-1" data-hash-target to="main-traits_social_other-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-2" id="main-traits_social_other-fake-fn-2" data-hash-target to="main-traits_social_other-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-3" id="main-traits_social_other-fake-fn-3" data-hash-target to="main-traits_social_other-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitadopted-adopted-fn1-fn2-fn3-benefit">You were adopted and raised by someone not of your race, and raised in a society not your own. As a result, you picked up a race trait from your adoptive parents and society, and may immediately select a <Link to="/main/traits_race">race trait</Link> from your adoptive parents' race.</Pair>
</Ability>
<Ability id="traitancestralarmor-ancestral-armor-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitancestralarmor-ancestral-armor-fn4"><Link to="/trait/ancestral_armor">⮞</Link> Ancestral Armor <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-4" id="main-traits_social_other-fake-fn-4" data-hash-target to="main-traits_social_other-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitancestralarmor-ancestral-armor-fn4-flavor">You inherited an ancient set of Tar Taargadth armor.</Pair>
<Pair single="benefit" id="traitancestralarmor-ancestral-armor-fn4-benefit">You begin play with a set of <Link to="/rule/masterwork_armor">masterwork armor</Link> of your choice. You must be proficient in wearing this armor, and the armor's total cost cannot exceed 300 gp.</Pair>
</Ability>
<Ability id="traitcompetitive-competitive-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcompetitive-competitive-fn5"><Link to="/trait/competitive">⮞</Link> Competitive <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-5" id="main-traits_social_other-fake-fn-5" data-hash-target to="main-traits_social_other-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcompetitive-competitive-fn5-flavor">You grew up and were raised around fabulous sporting events, and your youth was consumed with a driving need to be better than everyone else. Any hint of a contest spurs you to your greatest heights of potential.</Pair>
<Pair single="benefit" id="traitcompetitive-competitive-fn5-benefit"><p>Whenever another creature within 30 feet attempts a skill check and you attempt a check with the same skill before the start of that creature's next turn, you gain a +1 trait bonus on your check (this includes attempting an opposed skill check against the creature).</p>
<p><strong>Suggested Characters:</strong> Brevans, Kurgess worshipers, Sargavans.</p>
</Pair>
</Ability>
<Ability id="traitduskmarketbribery-dusk-market-bribery-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitduskmarketbribery-dusk-market-bribery-fn6"><Link to="/trait/dusk_market_bribery">⮞</Link> Dusk Market Bribery <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-6" id="main-traits_social_other-fake-fn-6" data-hash-target to="main-traits_social_other-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitduskmarketbribery-dusk-market-bribery-fn6-flavor">You learned how to bribe by watching <Link to="/rule/dusk_market">Dusk Market</Link> merchants interact with Westcrown's dottari guards.</Pair>
<Pair single="benefit" id="traitduskmarketbribery-dusk-market-bribery-fn6-benefit">Reduce the amount of gold you must spend to bribe a guard or official or compensate a conjured creature by 5%.</Pair>
</Ability>
<Ability id="traitmentored-mentored-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmentored-mentored-fn1-2"><Link to="/trait/mentored">⮞</Link> Mentored <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-1.2" id="main-traits_social_other-fake-fn-1.2" data-hash-target to="main-traits_social_other-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmentored-mentored-fn1-2-flavor">A tutor or private instructor guided you in learning your art, profession, or trade, and through your education, you became capable of teaching and guiding others.</Pair>
<Pair single="benefit" id="traitmentored-mentored-fn1-2-benefit">Choose a single <Link to="/skill/craft">Craft</Link>, <Link to="/skill/perform">Perform</Link>, or <Link to="/skill/profession">Profession</Link> skill. You gain a +1 trait bonus on checks with that skill. You also gain a +1 trait bonus when you <Link to="/rule/aid_another">aid another's</Link> skill check with any skill.</Pair>
</Ability>
<Ability id="traitmonsterstalker-monster-stalker-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmonsterstalker-monster-stalker-fn7"><Link to="/trait/monster_stalker">⮞</Link> Monster Stalker <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-7" id="main-traits_social_other-fake-fn-7" data-hash-target to="main-traits_social_other-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmonsterstalker-monster-stalker-fn7-flavor">You've been raised to hunt certain beasts.</Pair>
<Pair single="benefit" id="traitmonsterstalker-monster-stalker-fn7-benefit">Choose either aberrations, animals, dragons, fey, magical beasts, oozes, or vermin. You gain a limited version of the <Link to="/umr/scent">scent</Link> ability (15 feet normal, 30 feet upwind, 5 feet downwind) that detects only your chosen creature type.</Pair>
</Ability>
<Ability id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-3-fn3-2-fn2-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-3-fn3-2-fn2-2"><Link to="/trait/natural_born_leader_social">⮞</Link> Natural-Born Leader (Social) <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-1.3" id="main-traits_social_other-fake-fn-1.3" data-hash-target to="main-traits_social_other-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-3.2" id="main-traits_social_other-fake-fn-3.2" data-hash-target to="main-traits_social_other-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-2.2" id="main-traits_social_other-fake-fn-2.2" data-hash-target to="main-traits_social_other-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-3-fn3-2-fn2-2-flavor">You've always found yourself in positions where others look up to you as a leader, and you can distinctly remember an event from your early childhood where you led several other children to accomplish a goal that each of you individually could not.</Pair>
<Pair single="benefit" id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-3-fn3-2-fn2-2-benefit">All cohorts, followers, or summoned creatures under your leadership gain a +1 morale bonus on Will saves to avoid mind-affecting effects. If you ever take the <Link to="/feat/leadership">Leadership</Link> feat, you gain a +1 trait bonus to your Leadership score.</Pair>
</Ability>
<Ability id="traitnumerianfluidindulger-numerian-fluid-indulger-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnumerianfluidindulger-numerian-fluid-indulger-fn8"><Link to="/trait/numerian_fluid_indulger">⮞</Link> Numerian Fluid Indulger <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-8" id="main-traits_social_other-fake-fn-8" data-hash-target to="main-traits_social_other-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Numeria</Pair>
<Pair title="Requirements" hl>Associated with the court of the Palace of Fallen Stars in Numeria</Pair>
<Pair single="flavor" id="traitnumerianfluidindulger-numerian-fluid-indulger-fn8-flavor">You have tasted <Link to="/drug/numerian_fluids">Numerian fluids</Link> many times.</Pair>
<Pair single="benefit" id="traitnumerianfluidindulger-numerian-fluid-indulger-fn8-benefit">Once per day after rolling to determine the side effects of consuming a Numerian fluid, you can roll on the table again, but you must take the second result.</Pair>
</Ability>
<Ability id="traitreassuringadvice-reassuring-advice-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitreassuringadvice-reassuring-advice-fn9"><Link to="/trait/reassuring_advice">⮞</Link> Reassuring Advice <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-9" id="main-traits_social_other-fake-fn-9" data-hash-target to="main-traits_social_other-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitreassuringadvice-reassuring-advice-fn9-flavor">You've studied the speeches and writings of a leader or thinker who served as a reassuring voice in her community in the turbulent times after Aroden died, painfully learning which portions of Aroden's advice no longer applied and what of his writings could still be usefully applied.</Pair>
<Pair single="benefit" id="traitreassuringadvice-reassuring-advice-fn9-benefit">Once per day, you can speak Aroden's words of encouragement to grant any human a +1 insight bonus on any attack roll, saving throw, or skill check of his choice within the following hour. The choice to use the insight bonus must be made before the related roll is made.</Pair>
</Ability>
<Ability id="traitrichparents-rich-parents-fn1-4-fn3-3-fn2-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitrichparents-rich-parents-fn1-4-fn3-3-fn2-3"><Link to="/trait/rich_parents">⮞</Link> Rich Parents <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-1.4" id="main-traits_social_other-fake-fn-1.4" data-hash-target to="main-traits_social_other-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-3.3" id="main-traits_social_other-fake-fn-3.3" data-hash-target to="main-traits_social_other-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-2.3" id="main-traits_social_other-fake-fn-2.3" data-hash-target to="main-traits_social_other-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitrichparents-rich-parents-fn1-4-fn3-3-fn2-3-benefit">You were born into a rich family, perhaps even the nobility, and even though you turned to a life of adventure, you enjoy a one-time benefit to your initial finances: your starting wealth increases to 900 gp.</Pair>
</Ability>
<Ability id="traitslaverunner-slave-runner-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitslaverunner-slave-runner-fn10"><Link to="/trait/slave_runner">⮞</Link> Slave Runner <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-10" id="main-traits_social_other-fake-fn-10" data-hash-target to="main-traits_social_other-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitslaverunner-slave-runner-fn10-flavor">You witnessed or were party to the rescue of a halfling from Chelish slavery by the <Link to="/rule/bellflower_network">Bellflower Network</Link> or <Link to="/rule/eagle_knights">Eagle Knights</Link>.</Pair>
<Pair single="benefit" id="traitslaverunner-slave-runner-fn10-benefit">Once per day when attempting to directly free a slave, you gain a +2 trait bonus on your choice of an <Link to="/skill/acrobatics">Acrobatics</Link> check, an <Link to="/skill/escape_artist">Escape Artist</Link> check, a <Link to="/skill/stealth">Stealth</Link> check, or a skill check attempted as part of a <Link to="/rule/heists">heist</Link> or <Link to="/rule/pursuit">pursuit</Link></Pair>
</Ability>
<Ability id="traitsupportive-supportive-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsupportive-supportive-fn5-2"><Link to="/trait/supportive">⮞</Link> Supportive <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-5.2" id="main-traits_social_other-fake-fn-5.2" data-hash-target to="main-traits_social_other-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsupportive-supportive-fn5-2-flavor">You were forced to get by in an isolated enclave, whether surrounded by a community that feared and suspected you or in a remote locale far from other people, and you became practiced at assisting your friends.</Pair>
<Pair single="benefit" id="traitsupportive-supportive-fn5-2-benefit"><p>You gain a +1 trait bonus on skill checks to use the <Link to="/rule/aid_another">aid another</Link> action.</p>
<p><strong>Suggested Characters:</strong> Halflings, Mwangi, Tians.</p>
</Pair>
</Ability>
<Ability id="traitvoicesinyourhead-voices-in-your-head-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvoicesinyourhead-voices-in-your-head-fn11"><Link to="/trait/voices_in_your_head">⮞</Link> Voices in your Head <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-11" id="main-traits_social_other-fake-fn-11" data-hash-target to="main-traits_social_other-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvoicesinyourhead-voices-in-your-head-fn11-flavor">Through pacts with eldritch beings or a simple quirk of circumstance, your voice has an uncanny rapport with those swept up in madness.</Pair>
<Pair single="benefit" id="traitvoicesinyourhead-voices-in-your-head-fn11-benefit">Once per day as an <strong className="hl">immediate action</strong>, you can issue a command to a <Link to="/misc/confused">confused</Link> creature within 30 feet. This allows the creature to immediately reroll on the <Link to="/misc/confused">confused condition table</Link>, and you can pick which of the two actions - the action of its initial roll or that of the reroll - the creature takes. Confused creatures do not need to understand you for this trait to take effect.</Pair>
</Ability>
<Ability id="traitwanderlust-wanderlust-fn5-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwanderlust-wanderlust-fn5-3"><Link to="/trait/wanderlust">⮞</Link> Wanderlust <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-5.3" id="main-traits_social_other-fake-fn-5.3" data-hash-target to="main-traits_social_other-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwanderlust-wanderlust-fn5-3-flavor">Your childhood was brightened by the new places you constantly saw as you traveled with your parents, who were merchants. Still excited by travel, you gain great energy when traveling overland.</Pair>
<Pair single="benefit" id="traitwanderlust-wanderlust-fn5-3-benefit"><p>Treat your base land speed as 10 feet higher when determining your overland speed.</p>
<p><strong>Suggested Characters:</strong> Desnans, halflings, Varisians.</p>
</Pair>
</Ability>
<Ability id="traitwickedleader-wicked-leader-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwickedleader-wicked-leader-fn12"><Link to="/trait/wicked_leader">⮞</Link> Wicked Leader <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-12" id="main-traits_social_other-fake-fn-12" data-hash-target to="main-traits_social_other-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitwickedleader-wicked-leader-fn12-benefit">You gain a +1 trait bonus on Charisma checks against evil creatures. If you select the <Link to="/feat/leadership">Leadership</Link> feat or the <Link to="/feat/vile_leadership">Vile Leadership</Link> feat at any point when you meet the prerequisites for that feat, you can recruit a cohort who is up to 1 level lower than you (instead of the normal requirement that your cohort must be 2 or more levels lower than you are) as long as your cohort is evil.</Pair>
</Ability>
<Ability id="traitworldly-worldly-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitworldly-worldly-fn1-5"><Link to="/trait/worldly">⮞</Link> Worldly <sup><InnerLink showBacklink="backlink-main-traits_social_other-fake-fn-1.5" id="main-traits_social_other-fake-fn-1.5" data-hash-target to="main-traits_social_other-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitworldly-worldly-fn1-5-flavor">You have acquired an unusual breadth of life experience - more than others of your age, race, or culture.</Pair>
<Pair single="benefit" id="traitworldly-worldly-fn1-5-benefit">Once per day when attempting a skill check for a skill you're untrained in, you can roll twice and take the better result.</Pair>
</Ability>
</IonLabel></IonItem><section data-footnotes><h3 id="main-traits_social_other-label">Footnotes</h3><ol>
<li id="main-traits_social_other-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_other-fake-fn-1" data-hash-target to="main-traits_social_other-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_other-fake-fn-1.2" data-hash-target to="main-traits_social_other-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_other-fake-fn-1.3" data-hash-target to="main-traits_social_other-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_other-fake-fn-1.4" data-hash-target to="main-traits_social_other-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_other-fake-fn-1.5" data-hash-target to="main-traits_social_other-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-2-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_other-fake-fn-2" data-hash-target to="main-traits_social_other-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_other-fake-fn-2.2" data-hash-target to="main-traits_social_other-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_other-fake-fn-2.3" data-hash-target to="main-traits_social_other-fake-fn-2.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-3-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_other-fake-fn-3" data-hash-target to="main-traits_social_other-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_other-fake-fn-3.2" data-hash-target to="main-traits_social_other-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_other-fake-fn-3.3" data-hash-target to="main-traits_social_other-fake-fn-3.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-4-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 31 <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_other-fake-fn-4" data-hash-target to="main-traits_social_other-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-5-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_other-fake-fn-5" data-hash-target to="main-traits_social_other-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_other-fake-fn-5.2" data-hash-target to="main-traits_social_other-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_other-fake-fn-5.3" data-hash-target to="main-traits_social_other-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-6-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_other-fake-fn-6" data-hash-target to="main-traits_social_other-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-7-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_other-fake-fn-7" data-hash-target to="main-traits_social_other-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-8-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_other-fake-fn-8" data-hash-target to="main-traits_social_other-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-9-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_other-fake-fn-9" data-hash-target to="main-traits_social_other-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-10-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_other-fake-fn-10" data-hash-target to="main-traits_social_other-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-11-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_other-fake-fn-11" data-hash-target to="main-traits_social_other-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_social_other-fake-fn-12-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_other-fake-fn-12" data-hash-target to="main-traits_social_other-fake-fn-12">↩</InnerLink></p></li>
</ol></section></IonList>};
export default {traits_faith:_traits_faith,traits_faith_all:_traits_faith_all,traits_faith_def:_traits_faith_def,traits_faith_combat:_traits_faith_combat,traits_faith_spell:_traits_faith_spell,traits_faith_magic:_traits_faith_magic,traits_faith_class:_traits_faith_class,traits_faith_ab:_traits_faith_ab,traits_social_sm:_traits_social_sm,traits_social_sur_per:_traits_social_sur_per,traits_social_phys:_traits_social_phys,traits_social_mental:_traits_social_mental,traits_social_cha:_traits_social_cha,traits_social_prod:_traits_social_prod,traits_social_other:_traits_social_other}