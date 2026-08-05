import {IonList} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import MainLink from '../../components/MainLink';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _traits_faith = {title: "Faith Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><Ability id="traitabjectbelief-abject-belief-fn1" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitabjectbelief-abject-belief-fn1"><Link to="/trait/abject_belief">⮞</Link> Abject Belief <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1" id="main-traits_faith-fake-fn-1" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitabjectbelief-abject-belief-fn1-flavor">You cling tenaciously to a faith that is doubted by many, perhaps based around a god who has vanished, or was never a god in the first place. You refuse to forsake your beliefs despite all evidence, perhaps due to a need to belong, respect for tradition, or a religious experience. As a result, it is nearly impossible to convince you of your deity's absence.</Pair>
<Pair single="benefit" id="traitabjectbelief-abject-belief-fn1-benefit">You gain a +2 trait bonus on Will saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitacclimatizealignment-acclimatize-alignment-fn2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitacclimatizealignment-acclimatize-alignment-fn2"><Link to="/trait/acclimatize_alignment">⮞</Link> Acclimatize Alignment <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-2" id="main-traits_faith-fake-fn-2" data-hash-target to="main-traits_faith-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitacclimatizealignment-acclimatize-alignment-fn2-flavor">Like a climber ascending a mountain, you gradually grow acclimatized to an opposing planar alignment.</Pair>
<Pair single="benefit" id="traitacclimatizealignment-acclimatize-alignment-fn2-benefit">For each consecutive day you remain on a <Link to="/rule/alignment_traits">mildly aligned plane</Link> that opposes your alignment, reduce your penalty on Charisma-based checks by 1, to a minimum of 0. This does not affect the penalty from a strongly aligned plane.</Pair>
</Ability>
<Ability id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn3" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="traitacolyteofapocrypha-acolyte-of-apocrypha-fn3"><Link to="/trait/acolyte_of_apocrypha">⮞</Link> Acolyte of Apocrypha <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3" id="main-traits_faith-fake-fn-3" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
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
<Pair single id="traitapprentice-apprentice-fn3-2"><Link to="/trait/apprentice">⮞</Link> Apprentice <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.2" id="main-traits_faith-fake-fn-3.2" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitapprentice-apprentice-fn3-2-flavor">During your studies of The Majestic Book of the Prime Ascended, you learned some minor magical tricks.</Pair>
<Pair single="benefit" id="traitapprentice-apprentice-fn3-2-benefit">Select a single 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. You can cast this spell 1 time per day as a spell-like ability.</Pair>
</Ability>
<Ability id="traitarcanescholar-arcane-scholar-fn3-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitarcanescholar-arcane-scholar-fn3-3"><Link to="/trait/arcane_scholar">⮞</Link> Arcane Scholar <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.3" id="main-traits_faith-fake-fn-3.3" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitarcanescholar-arcane-scholar-fn3-3-flavor">Study of the "Prime Archmage" chapter has broadened your magical knowledge.</Pair>
<Pair single="benefit" id="traitarcanescholar-arcane-scholar-fn3-3-benefit">Choose either <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> or <Link to="/skill/spellcraft">Spellcraft</Link>; you gain a +1 trait bonus on that skill and it is a class skill for you.</Pair>
</Ability>
<Ability id="traitaspectofthequah-aspect-of-the-quah-fn4" extraClasses="trait hasSubs" icon={["bolt-eye"]}>
<Pair single id="traitaspectofthequah-aspect-of-the-quah-fn4"><Link to="/trait/aspect_of_the_quah">⮞</Link> Aspect of the Quah <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-4" id="main-traits_faith-fake-fn-4" data-hash-target to="main-traits_faith-fake-fn-4-target">4</InnerLink></sup></Pair>
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
<Pair single id="traitauthoritarian-authoritarian-fn5"><Link to="/trait/authoritarian">⮞</Link> Authoritarian <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5" id="main-traits_faith-fake-fn-5" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitauthoritarian-authoritarian-fn5-flavor">You spent much of your youth helping the clergy of your chosen faith perform their duties, and learned from them respect for authority.</Pair>
<Pair single="benefit" id="traitauthoritarian-authoritarian-fn5-benefit"><p>As long as you are acting in the service of a liege or leader you recognize as legitimate, you gain a +2 trait bonus on saving throws against fear and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/abadar">Abadarans</Link>, <Link to="/rule/hellknights">Hellknights</Link>, Hermeans.</p>
</Pair>
</Ability>
<Ability id="traitbeaconoffaith-beacon-of-faith-fn6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbeaconoffaith-beacon-of-faith-fn6"><Link to="/trait/beacon_of_faith">⮞</Link> Beacon of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6" id="main-traits_faith-fake-fn-6" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitbeaconoffaith-beacon-of-faith-fn6-flavor">You wield the might of your faith with power and clarity.</Pair>
<Pair single="benefit" id="traitbeaconoffaith-beacon-of-faith-fn6-benefit">Once per day as a <strong className="hl">free action</strong>, you may treat your caster level as if it were 2 levels higher when using one of the granted powers of your domain or inquisition, or when casting one of your domain spells.</Pair>
</Ability>
<Ability id="traitbirthmark-birthmark-fn6-2-fn7-fn8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbirthmark-birthmark-fn6-2-fn7-fn8"><Link to="/trait/birthmark">⮞</Link> Birthmark <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.2" id="main-traits_faith-fake-fn-6.2" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7" id="main-traits_faith-fake-fn-7" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8" id="main-traits_faith-fake-fn-8" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitbirthmark-birthmark-fn6-2-fn7-fn8-benefit">You were born with a strange birthmark that looks very similar to the holy symbol of the god you chose to worship later in life. This birthmark can serve you as a divine focus for casting spells, and as a physical manifestation of your faith, and it increases your devotion to your god. You gain a +2 trait bonus on all saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitblessed-blessed-fn6-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitblessed-blessed-fn6-3"><Link to="/trait/blessed">⮞</Link> Blessed <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.3" id="main-traits_faith-fake-fn-6.3" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitblessed-blessed-fn6-3-flavor">Some divine agent watches over you and heeds your call.</Pair>
<Pair single="benefit" id="traitblessed-blessed-fn6-3-benefit">Once per day as a <strong className="hl">swift action</strong>, you gain a +1 trait bonus on all saving throws for 1 round.</Pair>
</Ability>
<Ability id="traitblessedtouch-blessed-touch-fn9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitblessedtouch-blessed-touch-fn9"><Link to="/trait/blessed_touch">⮞</Link> Blessed Touch <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-9" id="main-traits_faith-fake-fn-9" data-hash-target to="main-traits_faith-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitblessedtouch-blessed-touch-fn9-flavor">You may have been raised in a devout family, studied the divine in a formal church environment, or even learned how to combine traditional healing techniques with those of divine casters. In so doing, you have focused yourself into being the perfect vessel for your deity. Divine power flows through you like a mountain stream, making your healing touch more potent than that of others.</Pair>
<Pair single="benefit" id="traitblessedtouch-blessed-touch-fn9-benefit">You heal 1 additional point of damage when using <Link to="/ability/lay_on_hands">lay on hands</Link>, <Link to="/ability/channel_energy">channeling energy</Link>, or casting a <Link to="/main/cure_spell">cure spell</Link>.</Pair>
</Ability>
<Ability id="traitbornfree-born-free-fn1-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitbornfree-born-free-fn1-2"><Link to="/trait/born_free">⮞</Link> Born Free <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.2" id="main-traits_faith-fake-fn-1.2" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitbornfree-born-free-fn1-2-flavor">You were introduced to an individualistic belief as a youth. Thriving under the promise of control of your own destiny, you soon began to demonstrate the truth of this ideal. Though others may mock you for your unwillingness to go along with a group or accept the easy security and comfort promised by more ecclesiastical faiths, you know that the revelations and destiny you seek can only be brought about through your own actions and individual search for meaning.</Pair>
<Pair single="benefit" id="traitbornfree-born-free-fn1-2-benefit">Once per day, after you roll a saving throw against a compulsion effect, you can choose to roll again as an <strong className="hl">immediate action</strong> before the result of the saving throw is announced. You must keep the new roll, even if it is worse.</Pair>
</Ability>
<Ability id="traitboundbyhonor-bound-by-honor-fn1-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitboundbyhonor-bound-by-honor-fn1-3"><Link to="/trait/bound_by_honor">⮞</Link> Bound by Honor <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.3" id="main-traits_faith-fake-fn-1.3" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitboundbyhonor-bound-by-honor-fn1-3-flavor">Your code of honor, obligations, and taboos stem from the shame of a misspent youth. Now, a personal code reminds you how to live, and you have an impressive ability to resist temptation.</Pair>
<Pair single="benefit" id="traitboundbyhonor-bound-by-honor-fn1-3-benefit">Once per day, if a mind-affecting effect would compel you to take an action that would cause you to lose <Link to="/rule/honor_points">Honor Points</Link>, you may make a new saving throw against the original DC to end the effect.</Pair>
</Ability>
<Ability id="traitcalled-called-fn5-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcalled-called-fn5-2"><Link to="/trait/called">⮞</Link> Called <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.2" id="main-traits_faith-fake-fn-5.2" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcalled-called-fn5-2-flavor">Your deity or a powerful spirit spoke to you when you were young, dropping cryptic hints about the important destiny that lay before you and how you must win your fights if you are to achieve your predetermined greatness.</Pair>
<Pair single="benefit" id="traitcalled-called-fn5-2-benefit"><p>Once per day upon rolling a natural 1 on an attack roll, you may reroll the die and take the second result instead.</p>
<p><strong>Suggested Characters:</strong> Oracles, paladins, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitcanonofcoin-canon-of-coin-fn10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcanonofcoin-canon-of-coin-fn10"><Link to="/trait/canon_of_coin">⮞</Link> Canon of Coin <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-10" id="main-traits_faith-fake-fn-10" data-hash-target to="main-traits_faith-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcanonofcoin-canon-of-coin-fn10-flavor">You find the pursuit of earning money to be a religious experience.</Pair>
<Pair single="benefit" id="traitcanonofcoin-canon-of-coin-fn10-benefit"><Link to="/skill/appraise">Appraise</Link> is a class skill for you. So long as you are carrying coins worth an amount equal to at least 100 gp per character level you have, you gain a +1 trait bonus on Will saves. This bonus increases to +2 against effects that would force you to discard, drop, or give away coins, gems, or trade goods in your possession.</Pair>
</Ability>
<Ability id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2"><Link to="/trait/caretaker">⮞</Link> Caretaker <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.4" id="main-traits_faith-fake-fn-6.4" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.2" id="main-traits_faith-fake-fn-8.2" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.2" id="main-traits_faith-fake-fn-7.2" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2-flavor">As the child of an herbalist or an assistant in a temple infirmary, you often had to assist in tending to the sick and wounded.</Pair>
<Pair single="benefit" id="traitcaretaker-caretaker-fn6-4-fn8-2-fn7-2-benefit">You gain a +1 trait bonus on <Link to="/skill/heal">Heal</Link> checks, and Heal is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3"><Link to="/trait/child_of_the_temple">⮞</Link> Child of the Temple <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.5" id="main-traits_faith-fake-fn-6.5" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.3" id="main-traits_faith-fake-fn-7.3" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.3" id="main-traits_faith-fake-fn-8.3" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3-flavor">You have long served at a temple in a city, where you picked up on many of the nobility's customs in addition to spending much time in the temple libraries studying your faith.</Pair>
<Pair single="benefit" id="traitchildofthetemple-child-of-the-temple-fn6-5-fn7-3-fn8-3-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> and <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchosenofiomedae-chosen-of-iomedae-fn9-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitchosenofiomedae-chosen-of-iomedae-fn9-2"><Link to="/trait/chosen_of_iomedae">⮞</Link> Chosen of Iomedae <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-9.2" id="main-traits_faith-fake-fn-9.2" data-hash-target to="main-traits_faith-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitchosenofiomedae-chosen-of-iomedae-fn9-2-flavor">At your birth, your parents dedicated your soul to <Link to="/faith/iomedae">Iomedae</Link> to mold into a sword of her light. The goddess blessed you, granting you a gift of light to brighten your path through darkness and a fine sword with which to spread her will.</Pair>
<Pair single="benefit" id="traitchosenofiomedae-chosen-of-iomedae-fn9-2-benefit">You may cast <Link to="/spell/light">light</Link> once per day as a spell-like ability (caster level 1st), and you begin play with a <Link to="/rule/masterwork_w">masterwork</Link> <Link to="/eq-weapon/longsword">longsword</Link>. In addition, whenever <em>light</em> is cast upon this sword, the radius of light and its duration is doubled.</Pair>
</Ability>
<Ability id="traitcovertchanneler-covert-channeler-fn11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcovertchanneler-covert-channeler-fn11"><Link to="/trait/covert_channeler">⮞</Link> Covert Channeler <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-11" id="main-traits_faith-fake-fn-11" data-hash-target to="main-traits_faith-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcovertchanneler-covert-channeler-fn11-flavor">Your mentor in the <Link to="/rule/wagons_of_light">Wagons of Light</Link> taught you to hide holy symbols quickly.</Pair>
<Pair single="benefit" id="traitcovertchanneler-covert-channeler-fn11-benefit">You can draw or stow a holy symbol as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="traitcrisisoffaith-crisis-of-faith-fn1-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcrisisoffaith-crisis-of-faith-fn1-4"><Link to="/trait/crisis_of_faith">⮞</Link> Crisis of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.4" id="main-traits_faith-fake-fn-1.4" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcrisisoffaith-crisis-of-faith-fn1-4-flavor">You were raised to uphold a specific set of tenets, and you never had reason to doubt their veracity. Recent events, however, have undermined that certainty, and you now find yourself wondering if any of the universal truths you once believed in can actually hold up to scrutiny. Perhaps you witnessed a mentor or church official fall from grace or violate your shared tenets. Maybe you watched a friend injured terribly despite (or because of) her pure faith. Whatever the case, your confidence was shaken.</Pair>
<Pair single="benefit" id="traitcrisisoffaith-crisis-of-faith-fn1-4-benefit"><p>Your shaken confidence grants you a +1 trait bonus on saving throws against illusions.</p>
<p>You may replace any other faith trait with the Crisis of Faith trait whenever you gain a level. This replacement is permanent until you receive <Link to="/spell/atonement">atonement</Link>.</p>
</Pair>
</Ability>
<Ability id="traitcrusader-crusader-fn3-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitcrusader-crusader-fn3-4"><Link to="/trait/crusader">⮞</Link> Crusader <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.4" id="main-traits_faith-fake-fn-3.4" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitcrusader-crusader-fn3-4-flavor">From studying "Prime Commander" and reading accounts of the battles in the Worldwound, you have trained to be a crusader against demonic forces.</Pair>
<Pair single="benefit" id="traitcrusader-crusader-fn3-4-benefit">You gain a +1 trait bonus on attack rolls against outsiders with the chaotic subtype.</Pair>
</Ability>
<Ability id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5"><Link to="/trait/darkest_before_dawn">⮞</Link> Darkest Before Dawn <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.5" id="main-traits_faith-fake-fn-3.5" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5-flavor">Your devotion sustains you when others would fall to despair.</Pair>
<Pair single="benefit" id="traitdarkestbeforedawn-darkest-before-dawn-fn3-5-benefit">You gain a +2 trait bonus on saving throws against spells with the emotion, fear, or pain descriptor. Once per day, you can increase this bonus to +4 for a single save, but you must make this decision before you attempt the saving throw.</Pair>
</Ability>
<Ability id="traitdeepfaith-deep-faith-fn12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdeepfaith-deep-faith-fn12"><Link to="/trait/deep_faith">⮞</Link> Deep Faith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-12" id="main-traits_faith-fake-fn-12" data-hash-target to="main-traits_faith-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdeepfaith-deep-faith-fn12-flavor">Your deity was born of the depths, and you're a child of such realms.</Pair>
<Pair single="benefit" id="traitdeepfaith-deep-faith-fn12-benefit">Whenever you cast a spell granted by the <Link to="/domain/earth">earth</Link> domain (or associated subdomains) while in the Darklands, that spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
<Ability id="traitdefymadness-defy-madness-fn13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdefymadness-defy-madness-fn13"><Link to="/trait/defy_madness">⮞</Link> Defy Madness <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13" id="main-traits_faith-fake-fn-13" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="flavor" id="traitdefymadness-defy-madness-fn13-flavor">Your direct involvement with supernatural and alien forces has left you less vulnerable to the insanity they cause.</Pair>
<Pair single="benefit" id="traitdefymadness-defy-madness-fn13-benefit">You gain a +1 trait bonus on any saving throws against confusion, insanity, madness, and <Link to="/rule/wisdom_damage">Wisdom damage and drain</Link>.</Pair>
</Ability>
<Ability id="traitdevotedhealer-devoted-healer-fn5-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevotedhealer-devoted-healer-fn5-3"><Link to="/trait/devoted_healer">⮞</Link> Devoted Healer <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.3" id="main-traits_faith-fake-fn-5.3" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevotedhealer-devoted-healer-fn5-3-flavor">Raised in the company of skilled healers, you were always encouraged to devote your time and energy to the welfare of others.</Pair>
<Pair single="benefit" id="traitdevotedhealer-devoted-healer-fn5-3-benefit"><p>Whenever you take 20 on a <Link to="/skill/heal">Heal</Link> check to treat deadly wounds, you restore an additional 1d4 hit points to those you aid.</p>
<p><strong>Suggested Characters:</strong> Battle clerics, <Link to="/faith/iomedae">Iomedaeans</Link>, Kellids.</p>
</Pair>
</Ability>
<Ability id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4"><Link to="/trait/devotee_of_the_green">⮞</Link> Devotee of the Green <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.6" id="main-traits_faith-fake-fn-6.6" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.4" id="main-traits_faith-fake-fn-8.4" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.4" id="main-traits_faith-fake-fn-7.4" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4-flavor">Your faith in the natural world or one of the gods of nature makes it easy for you to pick up on related concepts.</Pair>
<Pair single="benefit" id="traitdevoteeofthegreen-devotee-of-the-green-fn6-6-fn8-4-fn7-4-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> and <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdevoutvisionary-devout-visionary-fn1-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdevoutvisionary-devout-visionary-fn1-5"><Link to="/trait/devout_visionary">⮞</Link> Devout Visionary <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.5" id="main-traits_faith-fake-fn-1.5" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdevoutvisionary-devout-visionary-fn1-5-flavor">As a child, you had a strange vision while suffering from a terrible illness, and only found your way back to the mundane world by following the call of a spiritual leader-perhaps a shaman's drum or a druid's lilting poetry. Since then, you have studied symbolism and dreams in the hope that you might understand your own vision, though your lessons prove just as helpful to others.</Pair>
<Pair single="benefit" id="traitdevoutvisionary-devout-visionary-fn1-5-benefit">You gain a +1 trait bonus on Will saving throws against spells and effects that grant the <Link to="/misc/confused">confused</Link> or <Link to="/misc/dazed">dazed</Link> condition. Once per day as a <strong className="hl">full-round action</strong>, you may grant an adjacent ally a new Will saving throw to end an effect that grants the confused or dazed condition.</Pair>
</Ability>
<Ability id="traitdisdainfuldefender-disdainful-defender-fn6-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdisdainfuldefender-disdainful-defender-fn6-7"><Link to="/trait/disdainful_defender">⮞</Link> Disdainful Defender <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.7" id="main-traits_faith-fake-fn-6.7" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdisdainfuldefender-disdainful-defender-fn6-7-flavor">You are resistant to the magic of other faiths.</Pair>
<Pair single="benefit" id="traitdisdainfuldefender-disdainful-defender-fn6-7-benefit">You gain a +2 trait bonus on all Will saves you attempt against divine spells. This bonus does not apply against divine spells cast by a caster who worships the same deity you do.</Pair>
</Ability>
<Ability id="traitdivineconfidante-divine-confidante-fn14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdivineconfidante-divine-confidante-fn14"><Link to="/trait/divine_confidante">⮞</Link> Divine Confidante <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-14" id="main-traits_faith-fake-fn-14" data-hash-target to="main-traits_faith-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdivineconfidante-divine-confidante-fn14-flavor">You were inspired with the reverence offered by worshipers to priests and other spiritual leaders, so you assisted them.</Pair>
<Pair single="benefit" id="traitdivineconfidante-divine-confidante-fn14-benefit">You gain a +3 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to get hunches about those who discuss matters of faith, mythology, morality, religion, or the Outer Planes with you. Sense Motive is a class skill for you.</Pair>
</Ability>
<Ability id="traitdivinedenier-divine-denier-fn1-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdivinedenier-divine-denier-fn1-6"><Link to="/trait/divine_denier">⮞</Link> Divine Denier <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.6" id="main-traits_faith-fake-fn-1.6" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdivinedenier-divine-denier-fn1-6-flavor">You can't bring yourself to accept the authority of the gods, even though friends might hound you relentlessly to change your ways. Perhaps you're a Rahadoumi objecting on ideological grounds, or perhaps you just want to be left alone. Your doubt causes you to shrug off divine magic more quickly than others.</Pair>
<Pair single="benefit" id="traitdivinedenier-divine-denier-fn1-6-benefit">Once per day when you are affected by a divine spell, you may reduce that spell's duration to half (minimum 1 round) for you alone.</Pair>
</Ability>
<Ability id="traitdogged-dogged-fn4-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitdogged-dogged-fn4-2"><Link to="/trait/dogged">⮞</Link> Dogged <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-4.2" id="main-traits_faith-fake-fn-4.2" data-hash-target to="main-traits_faith-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitdogged-dogged-fn4-2-flavor">Drawing inspiration from the Cult of the Failed, you refuse to let setbacks stop you, no matter how disastrous.</Pair>
<Pair single="benefit" id="traitdogged-dogged-fn4-2-benefit">Once per day when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.</Pair>
</Ability>
<Ability id="traitearthbound-earthbound-fn15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitearthbound-earthbound-fn15"><Link to="/trait/earthbound">⮞</Link> Earthbound <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-15" id="main-traits_faith-fake-fn-15" data-hash-target to="main-traits_faith-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="traitearthbound-earthbound-fn15-benefit">Your druid spells use a handful of earth or sand as a divine focus in addition to the normal components. While you are touching the ground, you add a +2 trait bonus to saving throw DCs and on caster level checks to overcome spell resistance for all spells you cast against creatures with the <Link to="/subtype/air">air</Link> subtype.</Pair>
</Ability>
<Ability id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5"><Link to="/trait/ease_of_faith">⮞</Link> Ease of Faith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.8" id="main-traits_faith-fake-fn-6.8" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.5" id="main-traits_faith-fake-fn-7.5" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.5" id="main-traits_faith-fake-fn-8.5" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5-flavor">Your mentor, the person who invested your faith in you from an early age, took steps to ensure you understood that what powers your divine magic is no different from that which powers the magic of other religions. This philosophy makes it easier for you to interact with others who may not share your views.</Pair>
<Pair single="benefit" id="traiteaseoffaith-ease-of-faith-fn6-8-fn7-5-fn8-5-benefit">You gain a +1 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traiteldritchsmith-eldritch-smith-fn15-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteldritchsmith-eldritch-smith-fn15-2"><Link to="/trait/eldritch_smith">⮞</Link> Eldritch Smith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-15.2" id="main-traits_faith-fake-fn-15.2" data-hash-target to="main-traits_faith-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traiteldritchsmith-eldritch-smith-fn15-2-flavor">You are learned in the secret lore of the forge, rituals handed down for generations that some say come from <Link to="/faith/torag">Torag</Link> himself.</Pair>
<Pair single="benefit" id="traiteldritchsmith-eldritch-smith-fn15-2-benefit">Whenever you use the <Link to="/skill/craft">Craft</Link> skill or a crafting feat to make a stone or metal item, you reduce the cost of making the item by 5%. This includes metal-headed weapons with nonmetal parts, such as axes and spears.</Pair>
</Ability>
<Ability id="traitempyrealpantheon-empyreal-pantheon-fn16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitempyrealpantheon-empyreal-pantheon-fn16"><Link to="/trait/empyreal_pantheon">⮞</Link> Empyreal Pantheon <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-16" id="main-traits_faith-fake-fn-16" data-hash-target to="main-traits_faith-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitempyrealpantheon-empyreal-pantheon-fn16-flavor">Your faith in the empyreal lords accommodates numerous gods, and you are gifted at adapting their wide variety of focuses and lessons to your own life.</Pair>
<Pair single="benefit" id="traitempyrealpantheon-empyreal-pantheon-fn16-benefit">Select either the law or chaos alignment descriptor. You may cast spells with that descriptor, even if your alignment or that of your god would normally not allow it. Doing so applies the good descriptor to the spell if it does not already apply.</Pair>
</Ability>
<Ability id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2"><Link to="/trait/exalted_of_the_society">⮞</Link> Exalted of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-17" id="main-traits_faith-fake-fn-17" data-hash-target to="main-traits_faith-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.2" id="main-traits_faith-fake-fn-13.2" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2-flavor">The vaults of the Grand Lodge in Absalom contain many secrets of the divine powers of the gods, and you have studied your deity extensively.</Pair>
<Pair single="benefit" id="traitexaltedofthesociety-exalted-of-the-society-fn17-fn13-2-benefit">You may <Link to="/ability/channel_energy">channel energy</Link> one additional time per day.</Pair>
</Ability>
<Ability id="traiteyeforthewondrous-eye-for-the-wondrous-fn18" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiteyeforthewondrous-eye-for-the-wondrous-fn18"><Link to="/trait/eye_for_the_wondrous">⮞</Link> Eye for the Wondrous <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-18" id="main-traits_faith-fake-fn-18" data-hash-target to="main-traits_faith-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Katapesh</Pair>
<Pair single="flavor" id="traiteyeforthewondrous-eye-for-the-wondrous-fn18-flavor">Your experience with magic items clues you in to their properties more quickly than others.</Pair>
<Pair single="benefit" id="traiteyeforthewondrous-eye-for-the-wondrous-fn18-benefit">You can identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link> in 1 round.</Pair>
</Ability>
<Ability id="traitfaithfulfeedback-faithful-feedback-fn13-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfaithfulfeedback-faithful-feedback-fn13-3"><Link to="/trait/faithful_feedback">⮞</Link> Faithful Feedback <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.3" id="main-traits_faith-fake-fn-13.3" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must have a religion</Pair>
<Pair single="flavor" id="traitfaithfulfeedback-faithful-feedback-fn13-3-flavor">A shared religious fervor makes your healing magic more effective.</Pair>
<Pair single="benefit" id="traitfaithfulfeedback-faithful-feedback-fn13-3-benefit">Whenever you cast a spell belonging to the healing subschool on someone of your religion, increase the hit points healed by +1.</Pair>
</Ability>
<Ability id="traitfatesfavored-fates-favored-fn6-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfatesfavored-fates-favored-fn6-9"><Link to="/trait/fates_favored">⮞</Link> Fate's Favored <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.9" id="main-traits_faith-fake-fn-6.9" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfatesfavored-fates-favored-fn6-9-flavor">The fates watch over you.</Pair>
<Pair single="benefit" id="traitfatesfavored-fates-favored-fn6-9-benefit">Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.</Pair>
</Ability>
<Ability id="traitfearlessdefiance-fearless-defiance-fn6-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfearlessdefiance-fearless-defiance-fn6-10"><Link to="/trait/fearless_defiance">⮞</Link> Fearless Defiance <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.10" id="main-traits_faith-fake-fn-6.10" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfearlessdefiance-fearless-defiance-fn6-10-flavor">Upon overcoming your fear, you become a scourge to your enemies.</Pair>
<Pair single="benefit" id="traitfearlessdefiance-fearless-defiance-fn6-10-benefit">You gain a +1 trait bonus on all saving throws against fear effects. In addition, if you successfully save against such an effect, you receive a +1 trait bonus on attack rolls against your <Link to="/ability/favored_enemies">favored enemies</Link> for 1 round.</Pair>
</Ability>
<Ability id="traitfirstmemories-first-memories-fn19" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfirstmemories-first-memories-fn19"><Link to="/trait/first_memories">⮞</Link> First Memories <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-19" id="main-traits_faith-fake-fn-19" data-hash-target to="main-traits_faith-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link> with the <em>gnome magic</em> racial trait</Pair>
<Pair single="flavor" id="traitfirstmemories-first-memories-fn19-flavor">For your whole life, you've felt there was a world just beyond the fabric of the material objects around you, and sometimes you can hear the north wind calling you or smell the dread taint of polluted water before you taste it.</Pair>
<Pair single="benefit" id="traitfirstmemories-first-memories-fn19-benefit">You do not gain the normal list of spell-like abilities for the <em>gnome magic</em> racial trait. Instead, if you have a Wisdom of 11 of higher, you gain the following spell-like abilities: 1/day-<Link to="/spell/detect_poison">detect poison</Link>, <Link to="/spell/know_direction">know direction</Link>, <Link to="/spell/stabilize">stabilize</Link>, and <Link to="/spell/speak_with_animals">speak with animals</Link>. The caster level for these effects is equal to your character level. The DC for these spells is equal to 10 + the spell's level + your Wisdom modifier.</Pair>
</Ability>
<Ability id="traitfocuseddisciple-focused-disciple-fn6-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitfocuseddisciple-focused-disciple-fn6-11"><Link to="/trait/focused_disciple">⮞</Link> Focused Disciple <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.11" id="main-traits_faith-fake-fn-6.11" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitfocuseddisciple-focused-disciple-fn6-11-flavor">When weaker wills falter, you keep a clear mind.</Pair>
<Pair single="benefit" id="traitfocuseddisciple-focused-disciple-fn6-11-benefit">You gain a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitgodclawdisciple-godclaw-disciple-fn20" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitgodclawdisciple-godclaw-disciple-fn20"><Link to="/trait/godclaw_disciple">⮞</Link> Godclaw Disciple <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-20" id="main-traits_faith-fake-fn-20" data-hash-target to="main-traits_faith-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitgodclawdisciple-godclaw-disciple-fn20-flavor">You worship the amalgamation of lawful deities known as <Link to="/main/the_godclaw">faiths_pantheon</Link>.</Pair>
<Pair single="benefit" id="traitgodclawdisciple-godclaw-disciple-fn20-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks related to lawful deities, their clergy, their mythology, and their tenets. Additionally, Knowledge (religion) is a class skill for you.</Pair>
</Ability>
<Ability id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4"><Link to="/trait/greater_adept_of_the_society">⮞</Link> Greater Adept of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-17.2" id="main-traits_faith-fake-fn-17.2" data-hash-target to="main-traits_faith-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.4" id="main-traits_faith-fake-fn-13.4" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4-flavor">Months of meditation and practice with the greatest spellcasters of the Society have given you an increased capacity for arcane knowledge.</Pair>
<Pair single="benefit" id="traitgreateradeptofthesociety-greater-adept-of-the-society-fn17-2-fn13-4-benefit">You gain one additional 0-level spell slot.</Pair>
</Ability>
<Ability id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5"><Link to="/trait/havoc_of_the_society">⮞</Link> Havoc of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-17.3" id="main-traits_faith-fake-fn-17.3" data-hash-target to="main-traits_faith-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.5" id="main-traits_faith-fake-fn-13.5" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5-flavor">Through countless hours studying vast libraries of arcane power, you have learned how to cause greater damage to your foes.</Pair>
<Pair single="benefit" id="traithavocofthesociety-havoc-of-the-society-fn17-3-fn13-5-benefit">Whenever you cast a spell that deals damage, you gain a +1 trait bonus to the total damage dealt. This damage is considered force damage regardless of the type of damage dealt by the spell.</Pair>
</Ability>
<Ability id="traitheedfulreadiness-heedful-readiness-fn3-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitheedfulreadiness-heedful-readiness-fn3-6"><Link to="/trait/heedful_readiness">⮞</Link> Heedful Readiness <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.6" id="main-traits_faith-fake-fn-3.6" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitheedfulreadiness-heedful-readiness-fn3-6-flavor">Your years of meditation and mindfulness allow you to act correctly on a moment's notice.</Pair>
<Pair single="benefit" id="traitheedfulreadiness-heedful-readiness-fn3-6-benefit">Once per day, you can add your Wisdom modifier to an initiative check.</Pair>
</Ability>
<Ability id="traithellknightinquisitor-hellknight-inquisitor-fn20-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithellknightinquisitor-hellknight-inquisitor-fn20-2"><Link to="/trait/hellknight_inquisitor">⮞</Link> Hellknight Inquisitor <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-20.2" id="main-traits_faith-fake-fn-20.2" data-hash-target to="main-traits_faith-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traithellknightinquisitor-hellknight-inquisitor-fn20-2-benefit">If you are an inquisitor, you can select any <Link to="/ability/inquisitions">inquisition</Link> associated with your preferred <Link to="/rule/hellknights">Hellknight</Link> order, as long as you and your patron deity are of a lawful alignment. Additionally, you gain a +1 trait bonus on saving throws against spells and effects with the chaos descriptor.</Pair>
</Ability>
<Ability id="traithereticscaution-heretics-caution-fn4-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithereticscaution-heretics-caution-fn4-3"><Link to="/trait/heretics_caution">⮞</Link> Heretic's Caution <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-4.3" id="main-traits_faith-fake-fn-4.3" data-hash-target to="main-traits_faith-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithereticscaution-heretics-caution-fn4-3-flavor">You were raised in a faith that did not center on a traditional god or that followed a heretical interpretation of a traditional deity. You learned to deflect attention, especially from ecclesiastical figures.</Pair>
<Pair single="benefit" id="traithereticscaution-heretics-caution-fn4-3-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks. This bonus increases to +3 on Bluff checks opposed by religious authorities' Sense Motive checks.</Pair>
</Ability>
<Ability id="traithiddenfaith-hidden-faith-fn14-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithiddenfaith-hidden-faith-fn14-2"><Link to="/trait/hidden_faith">⮞</Link> Hidden Faith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-14.2" id="main-traits_faith-fake-fn-14.2" data-hash-target to="main-traits_faith-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithiddenfaith-hidden-faith-fn14-2-flavor">You were raised in a religion forbidden by your government, and draw strength from your hidden faith.</Pair>
<Pair single="benefit" id="traithiddenfaith-hidden-faith-fn14-2-benefit">You gain a +1 trait bonus on saving throws against the divine spells of creatures that worship a god other than your own.</Pair>
</Ability>
<Ability id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6"><Link to="/trait/history_of_heresy">⮞</Link> History of Heresy <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.12" id="main-traits_faith-fake-fn-6.12" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.6" id="main-traits_faith-fake-fn-8.6" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.6" id="main-traits_faith-fake-fn-7.6" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6-flavor">You were raised with heretical views that have made it difficult for you to accept most religious beliefs and often caused you or those you love to be treated as pariahs. As a result, you have turned your back on religious teachings.</Pair>
<Pair single="benefit" id="traithistoryofheresy-history-of-heresy-fn6-12-fn8-6-fn7-6-benefit">As long as you do not possess any levels in a class that grants divine spellcasting power, you gain a +1 trait bonus on all saving throws against divine spells.</Pair>
</Ability>
<Ability id="traithonest-honest-fn5-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traithonest-honest-fn5-4"><Link to="/trait/honest">⮞</Link> Honest <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.4" id="main-traits_faith-fake-fn-5.4" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traithonest-honest-fn5-4-flavor">A religious mentor instilled in you a sense of uncompromising integrity. You often speak your mind in defiance of any fear or hatred it might earn you, a habit that inspires others to trust you.</Pair>
<Pair single="benefit" id="traithonest-honest-fn5-4-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. This bonus increases to +2 when the Diplomacy check is made to influence those who are already friendly or helpful toward you.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/diabolist">Diabolists</Link>, paladins, <Link to="/faith/sarenrae">Sarenrae</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitimperfectrecall-imperfect-recall-fn4-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitimperfectrecall-imperfect-recall-fn4-4"><Link to="/trait/imperfect_recall">⮞</Link> Imperfect Recall <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-4.4" id="main-traits_faith-fake-fn-4.4" data-hash-target to="main-traits_faith-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitimperfectrecall-imperfect-recall-fn4-4-flavor">Your belief in reincarnation, as taught by the Sangpotshi philosophy and in lands that were once Imperial Lung Wa, has been reinforced by personal experience. In moments of great stress, you sometimes experience flashes of deja vu in which you recall information you don't remember ever having known.</Pair>
<Pair single="benefit" id="traitimperfectrecall-imperfect-recall-fn4-4-benefit">Once per day while you are in danger or distracted, you gain a +3 bonus on a single <Link to="/skill/knowledge">Knowledge</Link> skill check.</Pair>
</Ability>
<Ability id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7"><Link to="/trait/indomitable_faith">⮞</Link> Indomitable Faith <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.13" id="main-traits_faith-fake-fn-6.13" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.7" id="main-traits_faith-fake-fn-7.7" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.7" id="main-traits_faith-fake-fn-8.7" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7-flavor">You were born in a region where your faith was not popular, but you still have never abandoned it. Your constant struggle to maintain your own faith has bolstered your drive.</Pair>
<Pair single="benefit" id="traitindomitablefaith-indomitable-faith-fn6-13-fn7-7-fn8-7-benefit">You gain a +1 trait bonus on Will saves.</Pair>
</Ability>
<Ability id="traitinhabitantofillusion-inhabitant-of-illusion-fn21" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitinhabitantofillusion-inhabitant-of-illusion-fn21"><Link to="/trait/inhabitant_of_illusion">⮞</Link> Inhabitant of Illusion <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-21" id="main-traits_faith-fake-fn-21" data-hash-target to="main-traits_faith-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Kyonin</Pair>
<Pair title="Requirements" hl>Ascoiated with the court of Kyonin</Pair>
<Pair single="flavor" id="traitinhabitantofillusion-inhabitant-of-illusion-fn21-flavor">Your experience with illusions allows you to discern them easily.</Pair>
<Pair single="benefit" id="traitinhabitantofillusion-inhabitant-of-illusion-fn21-benefit">When you first encounter an illusion, you can attempt a Will saving throw with a -2 penalty to disbelieve it, even if you don't suspect the illusion. The GM rolls this saving throw in secret.</Pair>
</Ability>
<Ability id="traitinspired-inspired-fn6-14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitinspired-inspired-fn6-14"><Link to="/trait/inspired">⮞</Link> Inspired <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.14" id="main-traits_faith-fake-fn-6.14" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitinspired-inspired-fn6-14-flavor">A positive force, philosophy, or divine presence fills you with hope, and is a guiding force of inspiration.</Pair>
<Pair single="benefit" id="traitinspired-inspired-fn6-14-benefit">Once per day as a <strong className="hl">free action</strong>, roll twice and take the better result on a skill check or ability check.</Pair>
</Ability>
<Ability id="traitirrepressible-irrepressible-fn5-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitirrepressible-irrepressible-fn5-5"><Link to="/trait/irrepressible">⮞</Link> Irrepressible <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.5" id="main-traits_faith-fake-fn-5.5" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitirrepressible-irrepressible-fn5-5-flavor">Your hope for a brighter future blessed by the gods, combined with your powerful personality, allows you to force your way free of spells that cloud the mind.</Pair>
<Pair single="benefit" id="traitirrepressible-irrepressible-fn5-5-benefit"><p>You can use your Charisma modifier in place of your Wisdom modifier when attempting Will saving throws against charm and compulsion effects.</p>
<p><strong>Suggested Characters:</strong> <Link to="/race/gnome">Gnomes</Link>, Keleshites, <Link to="/faith/shelyn">Shelyn</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitirreverent-irreverent-fn22" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitirreverent-irreverent-fn22"><Link to="/trait/irreverent">⮞</Link> Irreverent <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-22" id="main-traits_faith-fake-fn-22" data-hash-target to="main-traits_faith-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="flavor" id="traitirreverent-irreverent-fn22-flavor">You are suspicious of those who lead spiritual lives and are quick to seek out the smallest hypocrisy in even the most pious individuals. Of course, you are also keenly aware of the power the faithful can draw from their worship, and you are stubbornly resistant to it.</Pair>
<Pair single="benefit" id="traitirreverent-irreverent-fn22-benefit">You gain a +2 trait bonus on saving throws against divine spells that target only you.</Pair>
</Ability>
<Ability id="traitjinxeater-jinx-eater-fn23" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitjinxeater-jinx-eater-fn23"><Link to="/trait/jinx_eater">⮞</Link> Jinx Eater <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-23" id="main-traits_faith-fake-fn-23" data-hash-target to="main-traits_faith-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>The Shackles</Pair>
<Pair title="Requirements" hl><Link to="/race/tengu">Tengu</Link></Pair>
<Pair single="benefit" id="traitjinxeater-jinx-eater-fn23-benefit">Your presence dampens curses and other ill effects. You gain a +1 trait bonus on saves against curses, including the hex class ability of shamans and witches. Once per day, you can grant this bonus to all allies within 30 feet for 1 round as an immediate action.</Pair>
</Ability>
<Ability id="traitkalistocraticprophecy-kalistocratic-prophecy-fn14-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitkalistocraticprophecy-kalistocratic-prophecy-fn14-3"><Link to="/trait/kalistocratic_prophecy">⮞</Link> Kalistocratic Prophecy <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-14.3" id="main-traits_faith-fake-fn-14.3" data-hash-target to="main-traits_faith-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitkalistocraticprophecy-kalistocratic-prophecy-fn14-3-benefit">You were raised under the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, and were inspired to seize upon an untapped business opportunity. Up to once per week, when you work to advance this opportunity with at least 1 day of effort, you can attempt an appropriate Profession check to earn money or gain capital using the downtime rules with a +2 trait bonus. In the event of a failed check, your opportunity is discovered by rivals and you cannot employ this trait for 1 month while you look for a new opportunity.</Pair>
</Ability>
<Ability id="traitlightinthedarkness-light-in-the-darkness-fn12-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitlightinthedarkness-light-in-the-darkness-fn12-2"><Link to="/trait/light_in_the_darkness">⮞</Link> Light in the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-12.2" id="main-traits_faith-fake-fn-12.2" data-hash-target to="main-traits_faith-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitlightinthedarkness-light-in-the-darkness-fn12-2-benefit">You're destined to bring light to the darkness and expunge the faithless from the deep. Whenever you cast a spell granted by the <Link to="/domain/sun">sun</Link> domain (or associated subdomains) while in the Darklands, the spell functions at 1 caster level higher than your actual caster level.</Pair>
</Ability>
<Ability id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15"><Link to="/trait/loyalty_across_lifetimes">⮞</Link> Loyalty across Lifetimes <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.15" id="main-traits_faith-fake-fn-6.15" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitloyaltyacrosslifetimes-loyalty-across-lifetimes-fn6-15-benefit">You and your eidolon share a link that seems to span multiple lifetimes. Your eidolon treats its Constitution score as if it were 2 points higher for the purposes of determining when its negative hit point total sends it back to its home plane. In addition, your eidolon gains a +1 trait bonus on Will saves against enchantment spells and effects.</Pair>
</Ability>
<Ability id="traitluciddreamer-lucid-dreamer-fn13-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitluciddreamer-lucid-dreamer-fn13-6"><Link to="/trait/lucid_dreamer">⮞</Link> Lucid Dreamer <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.6" id="main-traits_faith-fake-fn-13.6" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Varisian wanderers or Wonderseekers</Pair>
<Pair single="benefit" id="traitluciddreamer-lucid-dreamer-fn13-6-benefit">Your dreams are a special place of power that only you get to enjoy; driving away threats to your subconscious is as easy as slamming a door. You receive a +1 trait bonus on Knowledge (planes) checks and a +2 trait bonus on Will saves against effects on your dreaming mind or subconscious, such as a night hag's dream haunting ability, the nightmare spell, and illusions of the phantasm subschool.</Pair>
</Ability>
<Ability id="traitmartialmanuscript-martial-manuscript-fn6-16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmartialmanuscript-martial-manuscript-fn6-16"><Link to="/trait/martial_manuscript">⮞</Link> Martial Manuscript <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.16" id="main-traits_faith-fake-fn-6.16" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmartialmanuscript-martial-manuscript-fn6-16-benefit">You either carry or have memorized a sacred text from your school, temple, or monastery, and its wisdom gives you insight that makes your attacks more devastating. You gain a +2 trait bonus on rolls to confirm critical hits when you're using an unarmed strike or monk weapon.</Pair>
</Ability>
<Ability id="traitmasked-masked-fn3-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmasked-masked-fn3-7"><Link to="/trait/masked">⮞</Link> Masked <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.7" id="main-traits_faith-fake-fn-3.7" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmasked-masked-fn3-7-benefit">You learned from "Prime Conspirator" that keeping secrets often means hiding your true identity. Once per day, when attempting a Disguise check, roll twice and take the better result.</Pair>
</Ability>
<Ability id="traitmeditativerest-meditative-rest-fn3-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmeditativerest-meditative-rest-fn3-8"><Link to="/trait/meditative_rest">⮞</Link> Meditative Rest <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.8" id="main-traits_faith-fake-fn-3.8" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmeditativerest-meditative-rest-fn3-8-benefit">When you rest, you ignore the first time you are interrupted during that rest for the purposes of determining how long you need to rest in full to regain the capacity to regain spells, provided the interruption lasts no more than 15 minutes. If you cast spells during this interruption, you don't count these against your daily limit of spells when you wake and prepare spells.</Pair>
</Ability>
<Ability id="traitmonastic-monastic-fn1-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmonastic-monastic-fn1-7"><Link to="/trait/monastic">⮞</Link> Monastic <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.7" id="main-traits_faith-fake-fn-1.7" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmonastic-monastic-fn1-7-benefit">Either your parents sent you to be raised in a monastery, or you traveled there yourself later in life in order to escape the conflict and distractions of the greater world. There you learned to eschew the material concerns that plague so many and cloud their minds, instead embracing an ascetic lifestyle. You readily let go and step away from trouble, free from any tie or baggage that might slow your path to enlightenment-figuratively or literally. Once per day as a swift action, you gain a +1 trait bonus to Armor Class as long as you are wearing no armor, not using a shield, carrying a light load, and have nothing in your hands. This bonus lasts for 1 minute.</Pair>
</Ability>
<Ability id="traitmysteryinitiate-mystery-initiate-fn5-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitmysteryinitiate-mystery-initiate-fn5-6"><Link to="/trait/mystery_initiate">⮞</Link> Mystery Initiate <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.6" id="main-traits_faith-fake-fn-5.6" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitmysteryinitiate-mystery-initiate-fn5-6-benefit"><p>You were initiated into a mystery cult in your youth, and learned secrets that turned your understanding of your faith and the world on its head. This experience has given you a knack for lateral thinking. Once per day, you may reroll any Knowledge skill check. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/pclass/mystery_cultist">Mystery cultists</Link>, <Link to="/faith/nethys">Nethys</Link> worshipers, <Link to="/faith/norgorber">Norgorber</Link> worshipers.</p>
</Pair>
</Ability>
<Ability id="traitnaturalritualist-natural-ritualist-fn4-5" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturalritualist-natural-ritualist-fn4-5"><Link to="/trait/natural_ritualist">⮞</Link> Natural Ritualist <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-4.5" id="main-traits_faith-fake-fn-4.5" data-hash-target to="main-traits_faith-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitnaturalritualist-natural-ritualist-fn4-5-benefit">You venerate nature, either by paying homage to your Shoanti totem spirit or by appeasing the kami around you in accordance with Tamashigo. In return, the spirits bless your path. Once per week, you can build a small shrine of natural materials and pay your respects in a ritual that takes 15 minutes. Spellcasters can do this as part of their daily spell preparation. You gain a +2 trait bonus on Knowledge (nature) and Survival checks for 24 hours.</Pair>
</Ability>
<Ability id="traitnaturallygifted-naturally-gifted-fn19-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnaturallygifted-naturally-gifted-fn19-2"><Link to="/trait/naturally_gifted">⮞</Link> Naturally Gifted <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-19.2" id="main-traits_faith-fake-fn-19.2" data-hash-target to="main-traits_faith-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="traitnaturallygifted-naturally-gifted-fn19-2-benefit">For unknown reasons, you have deeper reserves of magical energy than those around you. Perhaps you are descended from a family of powerful arcane casters, or maybe you believe this trait marks you as destined for magical greatness. Wherever the truth lies, you gain an additional use of one of your gnome magic spell-like abilities each day. This does not always have to be the same spell-like ability - one day you might use <Link to="/spell/dancing_lights">dancing lights</Link> twice, only to use the additional casting for <Link to="/spell/speak_with_animals">speak with animals</Link> the next day.</Pair>
</Ability>
<Ability id="traitnatureworshiper-nature-worshiper-fn1-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnatureworshiper-nature-worshiper-fn1-8"><Link to="/trait/nature_worshiper">⮞</Link> Nature Worshiper <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.8" id="main-traits_faith-fake-fn-1.8" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitnatureworshiper-nature-worshiper-fn1-8-benefit">When you were young, you saw a dead creature's body fertilize a field. Witnessing the connection between life and death moved you to recognize your own connection with the world, and ever since you have revered nature and feared death less. You gain a +1 trait bonus on saving throws against death effects and effects that use negative energy, such as energy drain and <Link to="/main/inflict_spells">inflict spells</Link>.</Pair>
</Ability>
<Ability id="traitnecroticaura-necrotic-aura-fn13-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitnecroticaura-necrotic-aura-fn13-7"><Link to="/trait/necrotic_aura">⮞</Link> Necrotic Aura <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.7" id="main-traits_faith-fake-fn-13.7" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="benefit" id="traitnecroticaura-necrotic-aura-fn13-7-benefit">Your exposure to the necromantic arts has strengthened your defenses against its vile rot. You gain a +1 trait bonus on saving throws against spells from the necromancy school or any effect that deals negative energy damage.</Pair>
</Ability>
<Ability id="traitoathbound-oathbound-fn6-17" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitoathbound-oathbound-fn6-17"><Link to="/trait/oathbound">⮞</Link> Oathbound <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.17" id="main-traits_faith-fake-fn-6.17" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitoathbound-oathbound-fn6-17-benefit">You have made a solemn oath, and you pursue that oath with headstrong determination. Once per day, you may reroll a saving throw against a charm or compulsion effect. You must take the second result even if it is worse.</Pair>
</Ability>
<Ability id="traitomen-omen-fn6-18" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitomen-omen-fn6-18"><Link to="/trait/omen">⮞</Link> Omen <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.18" id="main-traits_faith-fake-fn-6.18" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitomen-omen-fn6-18-benefit">You are the harbinger of some future event. Whether this event bodes good or ill, you exude an ominous presence. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you. Once per day, you may attempt to demoralize an opponent as a swift action.</Pair>
</Ability>
<Ability id="traitpactservant-pact-servant-fn16-2" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpactservant-pact-servant-fn16-2"><Link to="/trait/pact_servant">⮞</Link> Pact Servant <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-16.2" id="main-traits_faith-fake-fn-16.2" data-hash-target to="main-traits_faith-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitpactservant-pact-servant-fn16-2-benefit">The faith of Holomog focuses on finding the good in unusual places and appreciating the nuances of virtue in the world. You may treat Asmodeus as if he were a lawful neutral deity for the purposes of determining your own alignment as a cleric, inquisitor, or other divine spellcaster. You may not select the evil domain unless your own alignment also contains an evil aspect.</Pair>
</Ability>
<Ability id="traitpatientcalm-patient-calm-fn5-7" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpatientcalm-patient-calm-fn5-7"><Link to="/trait/patient_calm">⮞</Link> Patient Calm <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.7" id="main-traits_faith-fake-fn-5.7" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitpatientcalm-patient-calm-fn5-7-benefit"><p>As a child, you struggled to suppress a sharp temper, but the care and patient respect of a trusted community leader rubbed off on you. As you grew older, you developed a remarkable ability to keep calm and collected when performing a task you are familiar with. Choose one Craft or Profession skill. Whenever you take 10 with that skill, determine the result as if you had rolled a 12 instead of a 10.</p>
<p><strong>Suggested Characters:</strong> <Link to="/faith/asmodeus">Asmodeans</Link>, Drumans, <Link to="/faith/irori">Irorans</Link>.</p>
</Pair>
</Ability>
<Ability id="traitperpetualcompanion-perpetual-companion-fn6-19" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitperpetualcompanion-perpetual-companion-fn6-19"><Link to="/trait/perpetual_companion">⮞</Link> Perpetual Companion <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.19" id="main-traits_faith-fake-fn-6.19" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitperpetualcompanion-perpetual-companion-fn6-19-benefit">You are bolstered against fear when your eidolon is near. You gain a +2 trait bonus on all saving throws against fear effects whenever your eidolon is within 30 feet.</Pair>
</Ability>
<Ability id="traitpersuasiveinsight-persuasive-insight-fn14-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpersuasiveinsight-persuasive-insight-fn14-4"><Link to="/trait/persuasive_insight">⮞</Link> Persuasive Insight <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-14.4" id="main-traits_faith-fake-fn-14.4" data-hash-target to="main-traits_faith-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitpersuasiveinsight-persuasive-insight-fn14-4-benefit">You were converted to your faith or taught to bargain with spirits for magic by a figure of inspiring insight who taught you to use keen observation in all dealings. You can use your Wisdom modifier in place of your Charisma modifier on Diplomacy checks to ask favors or gain influence. During a verbal duel, you can use your Wisdom modifier in place of your Charisma modifier when using tactics you assigned to Diplomacy or Wisdom-based skills.</Pair>
</Ability>
<Ability id="traitplanarsavant-planar-savant-fn6-20" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitplanarsavant-planar-savant-fn6-20"><Link to="/trait/planar_savant">⮞</Link> Planar Savant <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.20" id="main-traits_faith-fake-fn-6.20" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitplanarsavant-planar-savant-fn6-20-benefit">You have always had an innate sense of the workings of the planes and their denizens. You may use your Charisma modifier when making Knowledge (planes) checks instead of your Intelligence modifier.</Pair>
</Ability>
<Ability id="traitpriestblessed-priest-blessed-fn1-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitpriestblessed-priest-blessed-fn1-9"><Link to="/trait/priest_blessed">⮞</Link> Priest-Blessed <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.9" id="main-traits_faith-fake-fn-1.9" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitpriestblessed-priest-blessed-fn1-9-benefit">You were guided to maturity by a trusted priest of an ecclesiastical tradition, who inspired you and made you understand that the authority exerted by a religious hierarchy is a blessing rather than a restriction, allowing the faithful to always feel confident in their direction and the righteousness of the guided actions. Now, your faith wells up whenever you are aided by divine magic, and you find it easy to open up to the magic and succor of any faith, seeing the similarities between all such traditions. Three times per day when you are the target of a harmless divine spell, you may increase its caster level by 1 for purposes of its effect on you alone.</Pair>
</Ability>
<Ability id="traitprincipled-principled-fn6-21" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitprincipled-principled-fn6-21"><Link to="/trait/principled">⮞</Link> Principled <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.21" id="main-traits_faith-fake-fn-6.21" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitprincipled-principled-fn6-21-benefit">You hold yourself to a strict code of behavior that guides all of your decisions and actions. You take a -2 penalty on Bluff checks and gain a +2 trait bonus on saving throws against charm, compulsion, and emotion effects.</Pair>
</Ability>
<Ability id="traitprophesied-prophesied-fn6-22" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitprophesied-prophesied-fn6-22"><Link to="/trait/prophesied">⮞</Link> Prophesied <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.22" id="main-traits_faith-fake-fn-6.22" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitprophesied-prophesied-fn6-22-benefit">Your coming was foretold in prophecy, and people familiar with your legend regard you with awe and fear. You gain a +1 trait bonus on Diplomacy checks and Intimidate checks when interacting with anyone familiar with you or your reputation.</Pair>
</Ability>
<Ability id="traitproxyofmany-proxy-of-many-fn1-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitproxyofmany-proxy-of-many-fn1-10"><Link to="/trait/proxy_of_many">⮞</Link> Proxy of Many <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.10" id="main-traits_faith-fake-fn-1.10" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitproxyofmany-proxy-of-many-fn1-10-benefit">As a pantheist, you are accustomed to calling on aid from a variety of sources, and have a pragmatic sense for how to best make use of any ally. You gain a +2 trait bonus on Diplomacy checks made to request a favor from a creature that has not performed a favor for you in the past week. This bonus increases to +4 if you have performed a favor for that creature since it last did a favor for you.</Pair>
</Ability>
<Ability id="traitrebukethecurse-rebuke-the-curse-fn24" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitrebukethecurse-rebuke-the-curse-fn24"><Link to="/trait/rebuke_the_curse">⮞</Link> Rebuke the Curse <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-24" id="main-traits_faith-fake-fn-24" data-hash-target to="main-traits_faith-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitrebukethecurse-rebuke-the-curse-fn24-benefit">Once per day, you can attempt to suppress the effects of a curse on a single creature with a touch. This functions as a <Link to="/spell/remove_curse">remove curse</Link> spell, treating your character level as your caster level. If you succeed at your caster level check against the curse, the curse's effects are negated for 1 minute. This trait does not allow a person burdened with a cursed item to remove or discard it. Use of this trait is a supernatural ability.</Pair>
</Ability>
<Ability id="traitredeemer-redeemer-fn9-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitredeemer-redeemer-fn9-3"><Link to="/trait/redeemer">⮞</Link> Redeemer <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-9.3" id="main-traits_faith-fake-fn-9.3" data-hash-target to="main-traits_faith-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitredeemer-redeemer-fn9-3-benefit">You've always held the strong belief that morality is everyone's choice, and that those who act in wicked ways have simply never been shown how their actions truly affect others. If they could be shown their errors, then they would accept a more positive course of action - and you have just enough patience to see this through. When acting as a sponsor for an evil creature seeking redemption, your patience and kindness grant the creature a +3 bonus on its save rather than a +1 bonus.</Pair>
</Ability>
<Ability id="traitreincarnated-reincarnated-fn6-23" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreincarnated-reincarnated-fn6-23"><Link to="/trait/reincarnated">⮞</Link> Reincarnated <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.23" id="main-traits_faith-fake-fn-6.23" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitreincarnated-reincarnated-fn6-23-benefit">You lived a previous life as someone - or something - else. For you, life and death are a cycle, and you have no fear of death. You gain a +2 trait bonus on saving throws against fear and death effects.</Pair>
</Ability>
<Ability id="traitreligiousreformer-religious-reformer-fn1-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitreligiousreformer-religious-reformer-fn1-11"><Link to="/trait/religious_reformer">⮞</Link> Religious Reformer <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.11" id="main-traits_faith-fake-fn-1.11" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitreligiousreformer-religious-reformer-fn1-11-benefit">You have spent many years studying the tenets of your faith, and now believe that the dominant factions within the church have deviated from its true meaning and purpose. Rather than breaking with your misguided church, you've decided to stand up and fight to reform the organization you love. You have fervently studied scripture and steeled your will to combat the divergent beliefs of your peers. You gain a +2 trait bonus on Knowledge (religion) checks that pertain to your own religion or spiritual practice, and you gain a +2 trait bonus on saving throws against spells cast by others who worship your god or adhere to your philosophy.</Pair>
</Ability>
<Ability id="traitriveracumen-river-acumen-fn25" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitriveracumen-river-acumen-fn25"><Link to="/trait/river_acumen">⮞</Link> River Acumen <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-25" id="main-traits_faith-fake-fn-25" data-hash-target to="main-traits_faith-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitriveracumen-river-acumen-fn25-benefit">Your connection with the river and its tributaries has blended with your reverence for the gods of the river passages so much so that you seem divinely blessed while plying river waters. You gain a +2 trait bonus on Swim checks in rivers or streams, and a +2 trait bonus on Survival checks to forage for food in or near a river or stream.</Pair>
</Ability>
<Ability id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8"><Link to="/trait/sacred_conduit">⮞</Link> Sacred Conduit <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.24" id="main-traits_faith-fake-fn-6.24" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.8" id="main-traits_faith-fake-fn-8.8" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.8" id="main-traits_faith-fake-fn-7.8" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitsacredconduit-sacred-conduit-fn6-24-fn8-8-fn7-8-benefit">Your birth was particularly painful and difficult for your mother, who needed potent divine magic to ensure that you survived (your mother may or may not have survived). In any event, that magic infused you from an early age, and you now channel divine energy with greater ease than most. Whenever you channel energy, you gain a +1 trait bonus to the save DC of your channeled energy.</Pair>
</Ability>
<Ability id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9"><Link to="/trait/sacred_touch">⮞</Link> Sacred Touch <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.25" id="main-traits_faith-fake-fn-6.25" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.9" id="main-traits_faith-fake-fn-7.9" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.9" id="main-traits_faith-fake-fn-8.9" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitsacredtouch-sacred-touch-fn6-25-fn7-9-fn8-9-benefit">You were exposed to a potent source of positive energy as a child, perhaps by being born under the right cosmic sign, or maybe because one of your parents was a gifted healer. As a standard action, you may automatically stabilize a dying creature merely by touching it.</Pair>
</Ability>
<Ability id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10"><Link to="/trait/scholar_of_the_great_beyond">⮞</Link> Scholar of the Great Beyond <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.26" id="main-traits_faith-fake-fn-6.26" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-8.10" id="main-traits_faith-fake-fn-8.10" data-hash-target to="main-traits_faith-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-7.10" id="main-traits_faith-fake-fn-7.10" data-hash-target to="main-traits_faith-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitscholarofthegreatbeyond-scholar-of-the-great-beyond-fn6-26-fn8-10-fn7-10-benefit">Your greatest interests as a child did not lie with current events or the mundane; you have always felt out of place, as if you were born in the wrong era. You take to philosophical discussions of the Great Beyond and of historical events with ease. You gain a +1 trait bonus on Knowledge (history) and Knowledge (planes) checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitschooledinquisitor-schooled-inquisitor-fn6-27" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitschooledinquisitor-schooled-inquisitor-fn6-27"><Link to="/trait/schooled_inquisitor">⮞</Link> Schooled Inquisitor <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.27" id="main-traits_faith-fake-fn-6.27" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitschooledinquisitor-schooled-inquisitor-fn6-27-benefit">Your additional training aids in identifying the wiles of your faith's enemies. You gain a +2 trait bonus on all Knowledge (planes) and Knowledge (religion) checks made to identify the abilities and weaknesses of creatures.</Pair>
</Ability>
<Ability id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3"><Link to="/trait/scourge_of_the_darkness">⮞</Link> Scourge of the Darkness <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-12.3" id="main-traits_faith-fake-fn-12.3" data-hash-target to="main-traits_faith-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitscourgeofthedarkness-scourge-of-the-darkness-fn12-3-benefit">Stories of the depredations present in the Darklands drive you to explore its shadowy depths and purge the corruption from within. You gain a +1 trait bonus on saving throws against fear while in the Darklands and a +1 trait bonus on Intimidate checks against creatures native to the Darklands.</Pair>
</Ability>
<Ability id="traitsecondtongue-second-tongue-fn13-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsecondtongue-second-tongue-fn13-8"><Link to="/trait/second_tongue">⮞</Link> Second Tongue <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.8" id="main-traits_faith-fake-fn-13.8" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="benefit" id="traitsecondtongue-second-tongue-fn13-8-benefit">Using an ancient and painful surgical technique, you've reshaped your tongue. These surgical mutilations permit you to speak ancient words unpronounceable to most mortals, enhancing your ability to work magic associated with the Great Old Ones. Any summoning or divination spell you cast to summon or contact a Great Old One or one of their minions is cast at +1 caster level.</Pair>
</Ability>
<Ability id="traitsecretkeeper-secret-keeper-fn3-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsecretkeeper-secret-keeper-fn3-9"><Link to="/trait/secret_keeper">⮞</Link> Secret Keeper <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.9" id="main-traits_faith-fake-fn-3.9" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitsecretkeeper-secret-keeper-fn3-9-benefit">Avoiding inquisitors and agents of your enemies has required you to become a practiced liar. You gain a +3 trait bonus on Bluff checks when they are opposed by another's Sense Motive check.</Pair>
</Ability>
<Ability id="traitselfactualization-self-actualization-fn1-12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitselfactualization-self-actualization-fn1-12"><Link to="/trait/self_actualization">⮞</Link> Self-Actualization <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.12" id="main-traits_faith-fake-fn-1.12" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitselfactualization-self-actualization-fn1-12-benefit">Inspired by stories of mortals ascending to godhood, you're certain that you can do the same, and do all you can to hone your talents and reach your utmost potential. Once per day, when you take 20 on a roll or check, you can complete the action in only five times the normal amount of time for that action, rather than 20 times the normal amount.</Pair>
</Ability>
<Ability id="traitselfsustaining-self-sustaining-fn4-6" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitselfsustaining-self-sustaining-fn4-6"><Link to="/trait/self_sustaining">⮞</Link> Self-Sustaining <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-4.6" id="main-traits_faith-fake-fn-4.6" data-hash-target to="main-traits_faith-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>See text</Pair>
<Pair single="benefit" id="traitselfsustaining-self-sustaining-fn4-6-benefit">As a follower of Razmir, the <Link to="/rule/prophecies_of_kalistrade">Prophecies of Kalistrade</Link>, or some other tradition that preaches self-reliance, you make a point of not seeking divine aid for minor matters. When you gain this trait, choose one of the following 0-level spells: <Link to="/spell/create_water">create water</Link>, <Link to="/spell/mending">mending</Link>, <Link to="/spell/purify_food_and_drink">purify food and drink</Link>, or <Link to="/spell/stabilize">stabilize</Link>. You can cast this spell once per day as a spell-like ability, using your character level as your caster level. Once chosen, this selection can't change.</Pair>
</Ability>
<Ability id="traitsoulsearchersstrength-soul-searchers-strength-fn26" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitsoulsearchersstrength-soul-searchers-strength-fn26"><Link to="/trait/soul_searchers_strength">⮞</Link> Soul-Searcher's Strength <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-26" id="main-traits_faith-fake-fn-26" data-hash-target to="main-traits_faith-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Must follow the traditions of the <Link to="/rule/rivethun">Rivethun</Link></Pair>
<Pair single="benefit" id="traitsoulsearchersstrength-soul-searchers-strength-fn26-benefit">Your introspections have taught you to understand your own flaws and proclivities and how to work with them. Choose one saving throw. You gain a +1 trait bonus on saving throws of the chosen kind.</Pair>
</Ability>
<Ability id="traitspellintuition-spell-intuition-fn5-8" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitspellintuition-spell-intuition-fn5-8"><Link to="/trait/spell_intuition">⮞</Link> Spell Intuition <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-5.8" id="main-traits_faith-fake-fn-5.8" data-hash-target to="main-traits_faith-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitspellintuition-spell-intuition-fn5-8-benefit"><p>Blessed by a priest of a deity of magic at birth, you demonstrated a remarkable knack for guessing the nature of spells without the schooling of your instructors. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft becomes a class skill for you.</p>
<p><strong>Suggested Characters:</strong> Gebbites, <Link to="/faith/nethys">Nethys</Link> worshipers, Nexians.</p>
</Pair>
</Ability>
<Ability id="traitspiritsense-spirit-sense-fn6-28" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitspiritsense-spirit-sense-fn6-28"><Link to="/trait/spirit_sense">⮞</Link> Spirit Sense <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.28" id="main-traits_faith-fake-fn-6.28" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitspiritsense-spirit-sense-fn6-28-benefit">You are so attuned to the spiritual world that it is hard to get the jump on you. You gain a +2 trait bonus on Perception checks to avoid being surprised and to detect invisible or incorporeal creatures.</Pair>
</Ability>
<Ability id="traitstclydwellsward-st-clydwells-ward-fn13-9" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstclydwellsward-st-clydwells-ward-fn13-9"><Link to="/trait/st_clydwells_ward">⮞</Link> St. Clydwell's Ward <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.9" id="main-traits_faith-fake-fn-13.9" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Mendev Crusaders</Pair>
<Pair single="benefit" id="traitstclydwellsward-st-clydwells-ward-fn13-9-benefit">You have learned the secrets of an ancient prayer that wards off the attacks of demons. As a standard action, you can recite a holy chant that affects demons as if you were under the effect of a sanctuary spell (caster level equal to 1/2 your Hit Dice + your Charisma modifier).</Pair>
</Ability>
<Ability id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10"><Link to="/trait/stalwart_of_the_society">⮞</Link> Stalwart of the Society <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-17.4" id="main-traits_faith-fake-fn-17.4" data-hash-target to="main-traits_faith-fake-fn-17-target">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.10" id="main-traits_faith-fake-fn-13.10" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="benefit" id="traitstalwartofthesociety-stalwart-of-the-society-fn17-4-fn13-10-benefit">The courageous powers of Golarion's ancient paladin orders are open to you thanks to the Society's records of heroic deeds. As a result, your aura of courage class ability grants an additional +1 trait bonus on saving throws against fear effects.</Pair>
</Ability>
<Ability id="traitstrengthofsubmission-strength-of-submission-fn3-10" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstrengthofsubmission-strength-of-submission-fn3-10"><Link to="/trait/strength_of_submission">⮞</Link> Strength of Submission <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.10" id="main-traits_faith-fake-fn-3.10" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitstrengthofsubmission-strength-of-submission-fn3-10-benefit">Your faith in the church of Razmir and willingness to surrender yourself to him lend you strength and clarity. Whenever you are under the effects of a compulsion effect, you gain a +1 trait bonus on attack and damage rolls.</Pair>
</Ability>
<Ability id="traitstrengthoftheland-strength-of-the-land-fn15-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstrengthoftheland-strength-of-the-land-fn15-3"><Link to="/trait/strength_of_the_land">⮞</Link> Strength of the Land <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-15.3" id="main-traits_faith-fake-fn-15.3" data-hash-target to="main-traits_faith-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="traitstrengthoftheland-strength-of-the-land-fn15-3-benefit">You are able to tap into the living energy of the world to shatter lesser magic. You gain a +1 trait bonus on caster level checks while touching the ground or unworked stone. This includes dispel checks and checks to overcome spell resistance.</Pair>
</Ability>
<Ability id="traitstudentofhistory-student-of-history-fn3-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitstudentofhistory-student-of-history-fn3-11"><Link to="/trait/student_of_history">⮞</Link> Student of History <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.11" id="main-traits_faith-fake-fn-3.11" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitstudentofhistory-student-of-history-fn3-11-benefit">One can move toward enlightenment by understanding the mistakes of past generations. You gain a +1 trait bonus on Knowledge (history) checks, and Knowledge (history) is a class skill for you.</Pair>
</Ability>
<Ability id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11"><Link to="/trait/tar_baphons_whisper">⮞</Link> Tar-Baphon's Whisper <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.11" id="main-traits_faith-fake-fn-13.11" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/whispering_way">Whispering Way</Link></Pair>
<Pair single="benefit" id="traittarbaphonswhisper-tar-baphons-whisper-fn13-11-benefit">You have learned the secrets of sotto voce, the eerie, dry whispering voice used to pass on cult secrets. You may cast <Link to="/spell/sotto_voce">sotto voce</Link> as a spell-like ability three times per day as a spell-like ability. This spell-like ability is cast at your highest caster level; if you have no caster level, it functions at CL 1st.</Pair>
</Ability>
<Ability id="traittirelessavenger-tireless-avenger-fn6-29" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittirelessavenger-tireless-avenger-fn6-29"><Link to="/trait/tireless_avenger">⮞</Link> Tireless Avenger <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.29" id="main-traits_faith-fake-fn-6.29" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traittirelessavenger-tireless-avenger-fn6-29-benefit">You restlessly pursue your enemies. When you're in pursuit of one of your <Link to="/ability/favored_enemies">favored enemies</Link>, the DC for the Constitution check to avoid taking lethal damage during a forced march is 10 + 1 per extra hour, instead of 10 + 2 per extra hour.</Pair>
</Ability>
<Ability id="traittotemist-totemist-fn1-13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittotemist-totemist-fn1-13"><Link to="/trait/totemist">⮞</Link> Totemist <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.13" id="main-traits_faith-fake-fn-1.13" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traittotemist-totemist-fn1-13-benefit">You grew up in a culture where the touch of totem spirits was felt in everyday life, their subtle urgings constantly guiding you and keeping you safe. As a result, you learned quickly to ask for their help when trouble arises. Once per day, you may call upon your totem's wisdom as a standard action. You gain the benefits of guidance, except that the granted competence bonus is equal to half your character level (minimum +1). This is a supernatural ability.</Pair>
</Ability>
<Ability id="traittraditionalist-traditionalist-fn3-12-fn1-14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittraditionalist-traditionalist-fn3-12-fn1-14"><Link to="/trait/traditionalist">⮞</Link> Traditionalist <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.12" id="main-traits_faith-fake-fn-3.12" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.14" id="main-traits_faith-fake-fn-1.14" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traittraditionalist-traditionalist-fn3-12-fn1-14-benefit">You attempt to maintain older traditions despite changing social norms, and find great value in the trappings and codes of the aristocracy. You gain a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is a class skill for you.</Pair>
</Ability>
<Ability id="traittrickstergnome-trickster-gnome-fn19-3" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittrickstergnome-trickster-gnome-fn19-3"><Link to="/trait/trickster_gnome">⮞</Link> Trickster (Gnome) <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-19.3" id="main-traits_faith-fake-fn-19.3" data-hash-target to="main-traits_faith-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="traittrickstergnome-trickster-gnome-fn19-3-benefit">You are particularly adept with your racial spell-like abilities, and as child you quickly learned how dancing lights and ghost sound could be used to amuse your friends and fool your elders. This natural talent for illusion continued as you grew older, and before long you were being offered training in more advanced figments and glamers. You gain a +1 trait bonus to your caster level when determining the duration, range, and area of all spells from the illusion school.</Pair>
</Ability>
<Ability id="traittwoworldmagic-two-world-magic-fn27" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traittwoworldmagic-two-world-magic-fn27"><Link to="/trait/two_world_magic">⮞</Link> Two-World Magic <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-27" id="main-traits_faith-fake-fn-27" data-hash-target to="main-traits_faith-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Region" hl>Sargava</Pair>
<Pair single="benefit" id="traittwoworldmagic-two-world-magic-fn27-benefit">You have bridged the gap between the natural magic of the Mwangi peoples and the refined magic of the Chelish colonists. Select one 0-level spell from a class spell list other than your own. This spell is a 0-level spell on your class spell list (or a 1st-level spell if your class doesn't have 0-level spells). For example, if you are a druid, you could select mage hand and thereafter prepare it as a 0-level druid spell; if you are a sorcerer, you could select know direction as a 0-level sorcerer spell known.</Pair>
</Ability>
<Ability id="traitundaunted-undaunted-fn3-13" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitundaunted-undaunted-fn3-13"><Link to="/trait/undaunted">⮞</Link> Undaunted <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.13" id="main-traits_faith-fake-fn-3.13" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitundaunted-undaunted-fn3-13-benefit">Following the path of freedom has resulted in you being threatened by ruffians and bullies throughout your childhood, and it now takes a lot to rattle you. You increase the DC to demoralize you with an Intimidate check by 2.</Pair>
</Ability>
<Ability id="traitunnaturalpresence-unnatural-presence-fn13-12" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitunnaturalpresence-unnatural-presence-fn13-12"><Link to="/trait/unnatural_presence">⮞</Link> Unnatural Presence <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-13.12" id="main-traits_faith-fake-fn-13.12" data-hash-target to="main-traits_faith-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/rule/old_cults">Old Cults</Link></Pair>
<Pair single="benefit" id="traitunnaturalpresence-unnatural-presence-fn13-12-benefit">Your prolonged association with alien forces leaks from your pores. You can use your Intimidate skill to demoralize animals and vermin; Intimidate is a class skill for you.</Pair>
</Ability>
<Ability id="traitunshackled-unshackled-fn3-14" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitunshackled-unshackled-fn3-14"><Link to="/trait/unshackled">⮞</Link> Unshackled <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.14" id="main-traits_faith-fake-fn-3.14" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitunshackled-unshackled-fn3-14-benefit">You have escaped slavery or other imprisonment and have vowed never to be shackled again. You gain a +1 trait bonus on Escape Artist checks, and Escape Artist is a class skill for you.</Pair>
</Ability>
<Ability id="traituntrainedscholar-untrained-scholar-fn3-15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traituntrainedscholar-untrained-scholar-fn3-15"><Link to="/trait/untrained_scholar">⮞</Link> Untrained Scholar <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-3.15" id="main-traits_faith-fake-fn-3.15" data-hash-target to="main-traits_faith-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traituntrainedscholar-untrained-scholar-fn3-15-benefit">While scholarship is not your primary focus, you have spent enough time in classrooms and libraries to learn a few things. Once per day, you can attempt a Knowledge (geography), Knowledge (history) or Knowledge (local) check untrained with a +2 trait bonus.</Pair>
</Ability>
<Ability id="traiturbanacolyte-urban-acolyte-fn28" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traiturbanacolyte-urban-acolyte-fn28"><Link to="/trait/urban_acolyte">⮞</Link> Urban Acolyte <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-28" id="main-traits_faith-fake-fn-28" data-hash-target to="main-traits_faith-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traiturbanacolyte-urban-acolyte-fn28-benefit">Growing up in a city has broadened your philosophy, and helped you interpret your patron's divine will in a novel way. You gain Knowledge (local) as a class skill. Additionally, you can select one of the following subdomains using the normal rules for subdomains so long as your deity grants access to its associated domain: <Link to="/domain/competition">Competition</Link>, <Link to="/domain/duels">Duels</Link>, <Link to="/domain/espionage">Espionage</Link>, <Link to="/domain/fortifications">Fortifications</Link>, <Link to="/domain/industry">Industry</Link>, <Link to="/domain/legislation">Legislation</Link>, <Link to="/domain/plague">Plague</Link>, or <Link to="/domain/riot">Riot</Link>.</Pair>
</Ability>
<Ability id="traitviledomain-vile-domain-fn29" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitviledomain-vile-domain-fn29"><Link to="/trait/vile_domain">⮞</Link> Vile Domain <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-29" id="main-traits_faith-fake-fn-29" data-hash-target to="main-traits_faith-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitviledomain-vile-domain-fn29-benefit">Your connection with a malignant force has granted you great power. Choose a domain granted by an evil aligned deity, such as an archdevil, demon lord, or Great Old One. You gain a +1 trait bonus to your caster level when casting spells that are granted by that domain. This doesn't grant you the ability to cast such spells-you must still have access to the spells through some other means.</Pair>
</Ability>
<Ability id="traitwanderersshroud-wanderers-shroud-fn6-30" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitwanderersshroud-wanderers-shroud-fn6-30"><Link to="/trait/wanderers_shroud">⮞</Link> Wanderer's Shroud <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.30" id="main-traits_faith-fake-fn-6.30" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitwanderersshroud-wanderers-shroud-fn6-30-benefit">Your wanderings often go unnoticed. Efforts to use the Diplomacy skill to gather information about you take a -1 penalty, and you gain a +1 trait bonus on all saving throws against scrying and mindreading effects that allow saving throws.</Pair>
</Ability>
<Ability id="traitwendifaapprentice-wendifa-apprentice-fn1-15" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitwendifaapprentice-wendifa-apprentice-fn1-15"><Link to="/trait/wendifa_apprentice">⮞</Link> Wendifa Apprentice <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.15" id="main-traits_faith-fake-fn-1.15" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitwendifaapprentice-wendifa-apprentice-fn1-15-benefit">For a time during your childhood, you were left in the care of a juju oracle or wendifa, who saw your potential and taught you simple juju magic to influence the weakminded for brief periods of time. You can use <Link to="/spell/daze">daze</Link> as a spell-like ability once per day, using your character level as your caster level (minimum 1). The save DC of this effect is Charisma-based. The dazed individual looks ashen and deathly for the duration of the effect.</Pair>
</Ability>
<Ability id="traitzealot-zealot-fn19-4" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealot-zealot-fn19-4"><Link to="/trait/zealot">⮞</Link> Zealot <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-19.4" id="main-traits_faith-fake-fn-19.4" data-hash-target to="main-traits_faith-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="traitzealot-zealot-fn19-4-benefit">You aren't just faithful to the worship of your patron deity - you are obsessively loyal to all of the faith's tenets and guidelines. Your devotion is an anchor that keeps you from drifting away into the throes of the Bleaching, and you cling to it like the life raft it is. You must match the alignment of your chosen deity exactly. You gain a +1 trait bonus on Knowledge (religion) checks, and that skill is a class skill for you. As long as you remain completely faithful to the tenets of your faith (as determined by the GM), you never suffer from the Bleaching.</Pair>
</Ability>
<Ability id="traitzealotsbearing-zealots-bearing-fn1-16" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealotsbearing-zealots-bearing-fn1-16"><Link to="/trait/zealots_bearing">⮞</Link> Zealot's Bearing <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-1.16" id="main-traits_faith-fake-fn-1.16" data-hash-target to="main-traits_faith-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitzealotsbearing-zealots-bearing-fn1-16-benefit">Your fiery passion for your faith or philosophy is obvious to everyone around you. Those who share your convictions automatically find themselves wanting to defer to your zealous authority, making you a natural leader of your faith. Unfortunately, your scorn for those who haven't yet seen the wisdom of converting is equally obvious, and makes you a poor ambassador or missionary to the "ignorant masses" (as you not-so secretly think of them). You gain a +2 bonus on Diplomacy and Intimidate checks when dealing with adherents of your faith or philosophy, but a -1 penalty on Diplomacy and Intimidate checks when dealing with anyone else.</Pair>
</Ability>
<Ability id="traitzealousstriker-zealous-striker-fn6-31" extraClasses="trait" icon={["bolt-eye"]}>
<Pair single id="traitzealousstriker-zealous-striker-fn6-31"><Link to="/trait/zealous_striker">⮞</Link> Zealous Striker <sup><InnerLink showBacklink="backlink-main-traits_faith-fake-fn-6.31" id="main-traits_faith-fake-fn-6.31" data-hash-target to="main-traits_faith-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Faith</Pair>
<Pair single="benefit" id="traitzealousstriker-zealous-striker-fn6-31-benefit">Your zeal is a danger to those of "lesser" faiths. While you have the destruction judgment active, you gain a +1 trait bonus on damage rolls when attacking a foe who can cast divine spells and worships a different deity than you.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_faith-label">Footnotes</h3><ol>
<li id="main-traits_faith-fake-fn-1-target"><p><Link to="/source/faiths_and_philosophies">Faiths and Philosophies</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1" data-hash-target to="main-traits_faith-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.2" data-hash-target to="main-traits_faith-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.3" data-hash-target to="main-traits_faith-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.4" data-hash-target to="main-traits_faith-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.5" data-hash-target to="main-traits_faith-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.6" data-hash-target to="main-traits_faith-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.7" data-hash-target to="main-traits_faith-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.8" data-hash-target to="main-traits_faith-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.9" data-hash-target to="main-traits_faith-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.10" data-hash-target to="main-traits_faith-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.11" data-hash-target to="main-traits_faith-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.12" data-hash-target to="main-traits_faith-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.13" data-hash-target to="main-traits_faith-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.14" data-hash-target to="main-traits_faith-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.15" data-hash-target to="main-traits_faith-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_faith-fake-fn-1.16" data-hash-target to="main-traits_faith-fake-fn-1.16">↩<sup>16</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-2-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_faith-fake-fn-2" data-hash-target to="main-traits_faith-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-3-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3" data-hash-target to="main-traits_faith-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.2" data-hash-target to="main-traits_faith-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.3" data-hash-target to="main-traits_faith-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.4" data-hash-target to="main-traits_faith-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.5" data-hash-target to="main-traits_faith-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.6" data-hash-target to="main-traits_faith-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.7" data-hash-target to="main-traits_faith-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.8" data-hash-target to="main-traits_faith-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.9" data-hash-target to="main-traits_faith-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.10" data-hash-target to="main-traits_faith-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.11" data-hash-target to="main-traits_faith-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.12" data-hash-target to="main-traits_faith-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.13" data-hash-target to="main-traits_faith-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.14" data-hash-target to="main-traits_faith-fake-fn-3.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_faith-fake-fn-3.15" data-hash-target to="main-traits_faith-fake-fn-3.15">↩<sup>15</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-4-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith-fake-fn-4" data-hash-target to="main-traits_faith-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith-fake-fn-4.2" data-hash-target to="main-traits_faith-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith-fake-fn-4.3" data-hash-target to="main-traits_faith-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith-fake-fn-4.4" data-hash-target to="main-traits_faith-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith-fake-fn-4.5" data-hash-target to="main-traits_faith-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_faith-fake-fn-4.6" data-hash-target to="main-traits_faith-fake-fn-4.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-5-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5" data-hash-target to="main-traits_faith-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.2" data-hash-target to="main-traits_faith-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.3" data-hash-target to="main-traits_faith-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.4" data-hash-target to="main-traits_faith-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.5" data-hash-target to="main-traits_faith-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.6" data-hash-target to="main-traits_faith-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.7" data-hash-target to="main-traits_faith-fake-fn-5.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_faith-fake-fn-5.8" data-hash-target to="main-traits_faith-fake-fn-5.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-6-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6" data-hash-target to="main-traits_faith-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.2" data-hash-target to="main-traits_faith-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.3" data-hash-target to="main-traits_faith-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.4" data-hash-target to="main-traits_faith-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.5" data-hash-target to="main-traits_faith-fake-fn-6.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.6" data-hash-target to="main-traits_faith-fake-fn-6.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.7" data-hash-target to="main-traits_faith-fake-fn-6.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.8" data-hash-target to="main-traits_faith-fake-fn-6.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.9" data-hash-target to="main-traits_faith-fake-fn-6.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.10" data-hash-target to="main-traits_faith-fake-fn-6.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.11" data-hash-target to="main-traits_faith-fake-fn-6.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.12" data-hash-target to="main-traits_faith-fake-fn-6.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.13" data-hash-target to="main-traits_faith-fake-fn-6.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.14" data-hash-target to="main-traits_faith-fake-fn-6.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.15" data-hash-target to="main-traits_faith-fake-fn-6.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.16" data-hash-target to="main-traits_faith-fake-fn-6.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.17" data-hash-target to="main-traits_faith-fake-fn-6.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.18" data-hash-target to="main-traits_faith-fake-fn-6.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.19" data-hash-target to="main-traits_faith-fake-fn-6.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.20" data-hash-target to="main-traits_faith-fake-fn-6.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.21" data-hash-target to="main-traits_faith-fake-fn-6.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.22" data-hash-target to="main-traits_faith-fake-fn-6.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.23" data-hash-target to="main-traits_faith-fake-fn-6.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.24" data-hash-target to="main-traits_faith-fake-fn-6.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.25" data-hash-target to="main-traits_faith-fake-fn-6.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.26" data-hash-target to="main-traits_faith-fake-fn-6.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.27" data-hash-target to="main-traits_faith-fake-fn-6.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.28" data-hash-target to="main-traits_faith-fake-fn-6.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.29" data-hash-target to="main-traits_faith-fake-fn-6.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.30" data-hash-target to="main-traits_faith-fake-fn-6.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_faith-fake-fn-6.31" data-hash-target to="main-traits_faith-fake-fn-6.31">↩<sup>31</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-7-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7" data-hash-target to="main-traits_faith-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.2" data-hash-target to="main-traits_faith-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.3" data-hash-target to="main-traits_faith-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.4" data-hash-target to="main-traits_faith-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.5" data-hash-target to="main-traits_faith-fake-fn-7.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.6" data-hash-target to="main-traits_faith-fake-fn-7.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.7" data-hash-target to="main-traits_faith-fake-fn-7.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.8" data-hash-target to="main-traits_faith-fake-fn-7.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.9" data-hash-target to="main-traits_faith-fake-fn-7.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_faith-fake-fn-7.10" data-hash-target to="main-traits_faith-fake-fn-7.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-8-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8" data-hash-target to="main-traits_faith-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.2" data-hash-target to="main-traits_faith-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.3" data-hash-target to="main-traits_faith-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.4" data-hash-target to="main-traits_faith-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.5" data-hash-target to="main-traits_faith-fake-fn-8.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.6" data-hash-target to="main-traits_faith-fake-fn-8.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.7" data-hash-target to="main-traits_faith-fake-fn-8.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.8" data-hash-target to="main-traits_faith-fake-fn-8.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.9" data-hash-target to="main-traits_faith-fake-fn-8.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_faith-fake-fn-8.10" data-hash-target to="main-traits_faith-fake-fn-8.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-9-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith-fake-fn-9" data-hash-target to="main-traits_faith-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith-fake-fn-9.2" data-hash-target to="main-traits_faith-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_faith-fake-fn-9.3" data-hash-target to="main-traits_faith-fake-fn-9.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-10-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_faith-fake-fn-10" data-hash-target to="main-traits_faith-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-11-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_faith-fake-fn-11" data-hash-target to="main-traits_faith-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-12-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith-fake-fn-12" data-hash-target to="main-traits_faith-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith-fake-fn-12.2" data-hash-target to="main-traits_faith-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_faith-fake-fn-12.3" data-hash-target to="main-traits_faith-fake-fn-12.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-13-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13" data-hash-target to="main-traits_faith-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.2" data-hash-target to="main-traits_faith-fake-fn-13.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.3" data-hash-target to="main-traits_faith-fake-fn-13.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.4" data-hash-target to="main-traits_faith-fake-fn-13.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.5" data-hash-target to="main-traits_faith-fake-fn-13.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.6" data-hash-target to="main-traits_faith-fake-fn-13.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.7" data-hash-target to="main-traits_faith-fake-fn-13.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.8" data-hash-target to="main-traits_faith-fake-fn-13.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.9" data-hash-target to="main-traits_faith-fake-fn-13.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.10" data-hash-target to="main-traits_faith-fake-fn-13.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.11" data-hash-target to="main-traits_faith-fake-fn-13.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_faith-fake-fn-13.12" data-hash-target to="main-traits_faith-fake-fn-13.12">↩<sup>12</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-14-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith-fake-fn-14" data-hash-target to="main-traits_faith-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith-fake-fn-14.2" data-hash-target to="main-traits_faith-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith-fake-fn-14.3" data-hash-target to="main-traits_faith-fake-fn-14.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_faith-fake-fn-14.4" data-hash-target to="main-traits_faith-fake-fn-14.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-15-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith-fake-fn-15" data-hash-target to="main-traits_faith-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith-fake-fn-15.2" data-hash-target to="main-traits_faith-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_faith-fake-fn-15.3" data-hash-target to="main-traits_faith-fake-fn-15.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-16-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith-fake-fn-16" data-hash-target to="main-traits_faith-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_faith-fake-fn-16.2" data-hash-target to="main-traits_faith-fake-fn-16.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-17-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith-fake-fn-17" data-hash-target to="main-traits_faith-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith-fake-fn-17.2" data-hash-target to="main-traits_faith-fake-fn-17.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith-fake-fn-17.3" data-hash-target to="main-traits_faith-fake-fn-17.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_faith-fake-fn-17.4" data-hash-target to="main-traits_faith-fake-fn-17.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-18-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_faith-fake-fn-18" data-hash-target to="main-traits_faith-fake-fn-18">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-19-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith-fake-fn-19" data-hash-target to="main-traits_faith-fake-fn-19">↩</InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith-fake-fn-19.2" data-hash-target to="main-traits_faith-fake-fn-19.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith-fake-fn-19.3" data-hash-target to="main-traits_faith-fake-fn-19.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_faith-fake-fn-19.4" data-hash-target to="main-traits_faith-fake-fn-19.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-20-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_faith-fake-fn-20" data-hash-target to="main-traits_faith-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_faith-fake-fn-20.2" data-hash-target to="main-traits_faith-fake-fn-20.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_faith-fake-fn-21-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_faith-fake-fn-21" data-hash-target to="main-traits_faith-fake-fn-21">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-22-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_faith-fake-fn-22" data-hash-target to="main-traits_faith-fake-fn-22">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-23-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_faith-fake-fn-23" data-hash-target to="main-traits_faith-fake-fn-23">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-24-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_faith-fake-fn-24" data-hash-target to="main-traits_faith-fake-fn-24">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-25-target"><p><Link to="/source/people_of_the_river">People of the River</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_faith-fake-fn-25" data-hash-target to="main-traits_faith-fake-fn-25">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-26-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_faith-fake-fn-26" data-hash-target to="main-traits_faith-fake-fn-26">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-27-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_faith-fake-fn-27" data-hash-target to="main-traits_faith-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-28-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_faith-fake-fn-28" data-hash-target to="main-traits_faith-fake-fn-28">↩</InnerLink></p></li>
<li id="main-traits_faith-fake-fn-29-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_faith-fake-fn-29" data-hash-target to="main-traits_faith-fake-fn-29">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic = {title: "Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><Ability id="traitacadamaeneophyte-acadamae-neophyte-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitacadamaeneophyte-acadamae-neophyte-fn1"><Link to="/trait/acadamae_neophyte">⮞</Link> Acadamae Neophyte <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-1" id="main-traits_magic-fake-fn-1" data-hash-target to="main-traits_magic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitacadamaeneophyte-acadamae-neophyte-fn1-benefit">You have shown a significant talent for the magical arts, gaining the attention of the famed Acadamae of Korvosa. Whenever you succeed at a Knowledge (planes) check to identify a creature and its special powers or vulnerabilities, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
<Ability id="traitaeromanticaffinity-aeromantic-affinity-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitaeromanticaffinity-aeromantic-affinity-fn2"><Link to="/trait/aeromantic_affinity">⮞</Link> Aeromantic Affinity <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-2" id="main-traits_magic-fake-fn-2" data-hash-target to="main-traits_magic-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitaeromanticaffinity-aeromantic-affinity-fn2-benefit">One of your distant ancestors was either a powerful aeromancer or a creature of elemental air, granting you greater skill with air magic. You treat your caster level as 1 higher when casting spells with the air or electricity descriptor.</Pair>
</Ability>
<Ability id="traitairtouched-air-touched-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitairtouched-air-touched-fn3"><Link to="/trait/air_touched">⮞</Link> Air-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3" id="main-traits_magic-fake-fn-3" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitairtouched-air-touched-fn3-benefit">You share an affinity with elemental air. You gain DR 1/- against creatures and attacks with the air type.</Pair>
</Ability>
<Ability id="traitalchemicaladept-alchemical-adept-fn3-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitalchemicaladept-alchemical-adept-fn3-2"><Link to="/trait/alchemical_adept">⮞</Link> Alchemical Adept <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.2" id="main-traits_magic-fake-fn-3.2" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitalchemicaladept-alchemical-adept-fn3-2-benefit">You are skilled in creating alchemical items. You gain a +2 trait bonus on all Craft (alchemy) checks made to craft alchemical items. Furthermore, when you fail a Craft (alchemy) check by 5 or more but don't roll a natural 1, you don't ruin any raw materials or have to pay that cost again.</Pair>
</Ability>
<Ability id="traitalchemicalintuition-alchemical-intuition-fn3-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitalchemicalintuition-alchemical-intuition-fn3-3"><Link to="/trait/alchemical_intuition">⮞</Link> Alchemical Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.3" id="main-traits_magic-fake-fn-3.3" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitalchemicalintuition-alchemical-intuition-fn3-3-benefit">You are often struck with epiphanies about alchemical processes and substances. Once per day as a free action, you may gain a trait bonus equal to your Charisma modifier (minimum 0) on a Craft (alchemy) check you make. You can apply this bonus after you roll the check, possibly turning a failure into a success.</Pair>
</Ability>
<Ability id="traitarcaneresearcher-arcane-researcher-fn2-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcaneresearcher-arcane-researcher-fn2-2"><Link to="/trait/arcane_researcher">⮞</Link> Arcane Researcher <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-2.2" id="main-traits_magic-fake-fn-2.2" data-hash-target to="main-traits_magic-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitarcaneresearcher-arcane-researcher-fn2-2-benefit">Your curiosity and ingenuity have driven you to experiment and push new boundaries, and you have a knack for tampering with magic. You gain a +4 trait bonus on Knowledge (arcana) and Spellcraft checks to research, modify, and create new spells.</Pair>
</Ability>
<Ability id="traitarcanerevitalization-arcane-revitalization-fn3-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcanerevitalization-arcane-revitalization-fn3-4"><Link to="/trait/arcane_revitalization">⮞</Link> Arcane Revitalization <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.4" id="main-traits_magic-fake-fn-3.4" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitarcanerevitalization-arcane-revitalization-fn3-4-benefit">Your martial prowess can feed your arcane power. Once per day, when you confirm a critical hit with a weapon attack, you regain 1 arcane pool point. You can't exceed your maximum number of arcane pool points.</Pair>
</Ability>
<Ability id="traitarcanetemper-arcane-temper-fn3-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcanetemper-arcane-temper-fn3-5"><Link to="/trait/arcane_temper">⮞</Link> Arcane Temper <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.5" id="main-traits_magic-fake-fn-3.5" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitarcanetemper-arcane-temper-fn3-5-benefit">You have quick reactions and fierce concentration. You gain a +1 trait bonus on concentration and initiative checks.</Pair>
</Ability>
<Ability id="traitascendantrecollection-ascendant-recollection-fn3-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitascendantrecollection-ascendant-recollection-fn3-6"><Link to="/trait/ascendant_recollection">⮞</Link> Ascendant Recollection <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.6" id="main-traits_magic-fake-fn-3.6" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitascendantrecollection-ascendant-recollection-fn3-6-benefit">Your first bloodline power is particularly strong. Your sorcerer level is considered to be 1 level higher when determining the effects of your 1st-level bloodline power.</Pair>
</Ability>
<Ability id="traitbalancersbanishing-balancers-banishing-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbalancersbanishing-balancers-banishing-fn4"><Link to="/trait/balancers_banishing">⮞</Link> Balancer's Banishing <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-4" id="main-traits_magic-fake-fn-4" data-hash-target to="main-traits_magic-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitbalancersbanishing-balancers-banishing-fn4-benefit">The interference of the Outer Planes in mortal affairs angers you to no end and invigorates the potency of your magic. As long as you remain neutral, whenever you cast a spell that would send an outsider with the chaotic, evil, good, or lawful subtype back to its home plane, the spell's saving throw DC increases by 1.</Pair>
</Ability>
<Ability id="traitblackbloodheritage-black-blood-heritage-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitblackbloodheritage-black-blood-heritage-fn5"><Link to="/trait/black_blood_heritage">⮞</Link> Black Blood Heritage <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-5" id="main-traits_magic-fake-fn-5" data-hash-target to="main-traits_magic-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitblackbloodheritage-black-blood-heritage-fn5-benefit">One of your ancestors came in contact with the mystical <Link to="/magic-artifact/black_blood">black blood</Link>, granting you an affinity for the substance. You are immune to the negative effects of black blood. Once per day as a swift action, you can channel the essence of black blood, increasing your effective caster level by 1 for any 1st- or 2nd-level necromancy spell you cast. Your blood is pitch black as a result of this trait.</Pair>
</Ability>
<Ability id="traitbladedmagic-bladed-magic-fn3-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbladedmagic-bladed-magic-fn3-7"><Link to="/trait/bladed_magic">⮞</Link> Bladed Magic <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.7" id="main-traits_magic-fake-fn-3.7" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitbladedmagic-bladed-magic-fn3-7-benefit">You have an innate talent for using magical weaponry and those weapons capable of becoming magical. You gain a +1 trait bonus on Craft checks made to craft magic or masterwork weapons. In addition, when you use your arcane pool class ability to grant a weapon an enhancement bonus, that bonus lasts for 2 minutes instead of 1.</Pair>
</Ability>
<Ability id="traitchildofthemoon-child-of-the-moon-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitchildofthemoon-child-of-the-moon-fn6"><Link to="/trait/child_of_the_moon">⮞</Link> Child of the Moon <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-6" id="main-traits_magic-fake-fn-6" data-hash-target to="main-traits_magic-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitchildofthemoon-child-of-the-moon-fn6-benefit">Your lunar gift becomes much more powerful when the moon is full. Choose either Climb, Stealth, or Swim. You gain a +1 trait bonus on checks made with the chosen skill. On dates during and after the first quarter of a lunar phase but before end of the last quarter (the half of the lunar cycle where the moon is fuller), this bonus increases to +2. During the full moon, this bonus increases to +4.</Pair>
</Ability>
<Ability id="traitclassicallyschooled-classically-schooled-fn3-8-fn7-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitclassicallyschooled-classically-schooled-fn3-8-fn7-fn8"><Link to="/trait/classically_schooled">⮞</Link> Classically Schooled <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.8" id="main-traits_magic-fake-fn-3.8" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7" id="main-traits_magic-fake-fn-7" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8" id="main-traits_magic-fake-fn-8" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitclassicallyschooled-classically-schooled-fn3-8-fn7-fn8-benefit">Your apprenticeship or early education was particularly focused on the direct application of magic. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcovencasting-coven-casting-fn9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcovencasting-coven-casting-fn9"><Link to="/trait/coven_casting">⮞</Link> Coven Casting <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-9" id="main-traits_magic-fake-fn-9" data-hash-target to="main-traits_magic-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitcovencasting-coven-casting-fn9-benefit">You have belonged to a coven or magical cabal and know how to coordinate your spellcasting with others. When within 30 feet of an allied spellcaster, you both gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitcrossdisciplined-cross-disciplined-fn3-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossdisciplined-cross-disciplined-fn3-9"><Link to="/trait/cross_disciplined">⮞</Link> Cross-Disciplined <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.9" id="main-traits_magic-fake-fn-3.9" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitcrossdisciplined-cross-disciplined-fn3-9-benefit">Your dabbling has granted you greater insight into the proper casting of certain spells. Once per day, you may cast a spell you have prepared that appears on both the magus and wizard spell lists as if your caster level were 1 level higher.</Pair>
</Ability>
<Ability id="traitcrossknowledge-cross-knowledge-fn3-10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossknowledge-cross-knowledge-fn3-10"><Link to="/trait/cross_knowledge">⮞</Link> Cross-Knowledge <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.10" id="main-traits_magic-fake-fn-3.10" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitcrossknowledge-cross-knowledge-fn3-10-benefit">Once per day, you may treat an extract you drink as if your caster level were 1 level higher as long as that extract appears on the wizard spell list and the alchemist list of formulae.</Pair>
</Ability>
<Ability id="traitfeyprotection-fey-protection-fn10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfeyprotection-fey-protection-fn10"><Link to="/trait/fey_protection">⮞</Link> Fey Protection <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10" id="main-traits_magic-fake-fn-10" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitfeyprotection-fey-protection-fn10-benefit"><p>Your birth brought an unexpected guest to your parents' home: a helpful fey who prophesied about your future and gave you a magical gift in exchange for your parents' hospitality, a cup of milk, and a drop of your blood. You gain a +1 trait bonus to AC against attacks of opportunities made by fey and a +1 trait bonus on saving throws against the effects of fey creatures.</p>
<p><strong>Suggested Characters:</strong> Drumans, <Link to="/rule/eldest">Eldest</Link> worshipers, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitflametouched-flame-touched-fn3-11" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitflametouched-flame-touched-fn3-11"><Link to="/trait/flame_touched">⮞</Link> Flame-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.11" id="main-traits_magic-fake-fn-3.11" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitflametouched-flame-touched-fn3-11-benefit">You share an affinity with elemental fire. You gain DR 1/- against creatures and attacks with the fire type.</Pair>
</Ability>
<Ability id="traitfocusedburn-focused-burn-fn3-12" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfocusedburn-focused-burn-fn3-12"><Link to="/trait/focused_burn">⮞</Link> Focused Burn <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.12" id="main-traits_magic-fake-fn-3.12" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitfocusedburn-focused-burn-fn3-12-benefit">You know the secret of making punishing fire bombs. Any bombs you have that deal fire damage deal 1 additional point of fire damage on a direct hit per 2d6 of fire damage normally dealt (minimum 1 point). This additional damage does not apply to the bomb's splash damage.</Pair>
</Ability>
<Ability id="traitfocusedmind-focused-mind-fn3-13-fn8-2-fn7-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfocusedmind-focused-mind-fn3-13-fn8-2-fn7-2"><Link to="/trait/focused_mind">⮞</Link> Focused Mind <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.13" id="main-traits_magic-fake-fn-3.13" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.2" id="main-traits_magic-fake-fn-8.2" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.2" id="main-traits_magic-fake-fn-7.2" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitfocusedmind-focused-mind-fn3-13-fn8-2-fn7-2-benefit">Your childhood was dominated either by lessons of some sort (whether musical, academic, or other) or by a horrible home life that encouraged your ability to block out distractions and focus on the immediate task at hand. You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitfortunate-fortunate-fn10-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfortunate-fortunate-fn10-2"><Link to="/trait/fortunate">⮞</Link> Fortunate <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.2" id="main-traits_magic-fake-fn-10.2" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitfortunate-fortunate-fn10-2-benefit"><p>You are blessed by fate. Once per day when you use a spell or magic item with a randomized effect (such as confusion, mirror image, prismatic spray, or a bag of tricks), before you roll to determine the result, you may choose to roll twice and pick either result.</p>
<p><strong>Suggested Characters:</strong> Calistrians, harrow deck readers, Vudrani.</p>
</Pair>
</Ability>
<Ability id="traitgiftedadept-gifted-adept-fn3-14-fn7-3-fn8-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgiftedadept-gifted-adept-fn3-14-fn7-3-fn8-3"><Link to="/trait/gifted_adept">⮞</Link> Gifted Adept <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.14" id="main-traits_magic-fake-fn-3.14" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.3" id="main-traits_magic-fake-fn-7.3" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.3" id="main-traits_magic-fake-fn-8.3" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitgiftedadept-gifted-adept-fn3-14-fn7-3-fn8-3-benefit">Your interest in magic was inspired by witnessing a spell being cast in a particularly dramatic method, perhaps even one that affected you physically or spiritually. This early exposure to magic has made it easier for you to work similar magic on your own. Pick one spell when you choose this trait - from this point on, whenever you cast that spell, its effects manifest at +1 caster level.</Pair>
</Ability>
<Ability id="traitgreaterlink-greater-link-fn3-15" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreaterlink-greater-link-fn3-15"><Link to="/trait/greater_link">⮞</Link> Greater Link <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.15" id="main-traits_magic-fake-fn-3.15" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitgreaterlink-greater-link-fn3-15-benefit">The link between you and your eidolon is stronger than most. Your eidolon's current and maximum hit point totals are not reduced by 50% until you are separated by 110 feet or more. Your eidolon's current and maximum hit point totals are not reduced by 75% until you are separated by 1,100 feet or more. All other aspects of your life link class feature are unaffected.</Pair>
</Ability>
<Ability id="traitgreaterpurpose-greater-purpose-fn3-16" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreaterpurpose-greater-purpose-fn3-16"><Link to="/trait/greater_purpose">⮞</Link> Greater Purpose <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.16" id="main-traits_magic-fake-fn-3.16" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitgreaterpurpose-greater-purpose-fn3-16-benefit">You are convinced you're alive to achieve a great purpose. You gain a +1 trait bonus on all saving throws to resist death effects and a +1 trait bonus on Constitution checks made to stabilize while dying.</Pair>
</Ability>
<Ability id="traitgreenblooded-green-blooded-fn11" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreenblooded-green-blooded-fn11"><Link to="/trait/green_blooded">⮞</Link> Green-Blooded <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-11" id="main-traits_magic-fake-fn-11" data-hash-target to="main-traits_magic-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitgreenblooded-green-blooded-fn11-benefit">You are touched by the supernatural essence of nature, marking you since birth as something other than purely mortal. Choose a single 0-level <Link to="/main/druid_spell">druid spell</Link>. You can cast this spell once per day as a spell-like ability with a caster level equal to your character level.</Pair>
</Ability>
<Ability id="traitguidingspirit-guiding-spirit-fn12" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitguidingspirit-guiding-spirit-fn12"><Link to="/trait/guiding_spirit">⮞</Link> Guiding Spirit <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-12" id="main-traits_magic-fake-fn-12" data-hash-target to="main-traits_magic-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitguidingspirit-guiding-spirit-fn12-benefit">Few understand the medium's willingness to harbor powerful spirits, but even if you aren't one of these talented few, you've always identified with their abilities. you've always felt that you were not alone in this world and that a mysterious guiding spirit watches over you with singular focus. You may have briefly glimpsed this strange spirit - or maybe you simply feel its presence in times of need. Once per day as a swift action, you can look to your guiding spirit for advice. The next time you roll a d20 in that same round, roll twice and pick the better result. If one of these two rolls is a natural 20, you can use this ability again that same day.</Pair>
</Ability>
<Ability id="traithedgemagician-hedge-magician-fn3-17-fn8-4-fn7-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithedgemagician-hedge-magician-fn3-17-fn8-4-fn7-4"><Link to="/trait/hedge_magician">⮞</Link> Hedge Magician <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.17" id="main-traits_magic-fake-fn-3.17" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.4" id="main-traits_magic-fake-fn-8.4" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.4" id="main-traits_magic-fake-fn-7.4" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithedgemagician-hedge-magician-fn3-17-fn8-4-fn7-4-benefit">You apprenticed for a time to an artisan who often built magic items, and he taught you many handy shortcuts and cost-saving techniques. Whenever you craft a magic item, you reduce the required gp cost to make the item by 5%.</Pair>
</Ability>
<Ability id="traithexproof-hex-proof-fn13" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithexproof-hex-proof-fn13"><Link to="/trait/hex_proof">⮞</Link> Hex-Proof <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-13" id="main-traits_magic-fake-fn-13" data-hash-target to="main-traits_magic-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithexproof-hex-proof-fn13-benefit">You've dealt too often with <Link to="/rule/witchmarket">cruel fey magic</Link> and so gain a +2 bonus on Will saves against hexes and fey creatures' spells and spell-like abilities.</Pair>
</Ability>
<Ability id="traithorrifyingmind-horrifying-mind-fn14" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithorrifyingmind-horrifying-mind-fn14"><Link to="/trait/horrifying_mind">⮞</Link> Horrifying Mind <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-14" id="main-traits_magic-fake-fn-14" data-hash-target to="main-traits_magic-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithorrifyingmind-horrifying-mind-fn14-benefit">When a nonevil humanoid attempts to read your mind via a magical effect, the reader must attempt a Will save opposed by your Wisdom or Charisma check (your choice). If the reader fails this save, she is shaken for 1 round. If she fails by 10 or more, she is instead frightened for 1 round, then shaken for 1 round.</Pair>
</Ability>
<Ability id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn15" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn15"><Link to="/trait/house_of_green_mothers_pupil">⮞</Link> House of Green Mothers Pupil <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-15" id="main-traits_magic-fake-fn-15" data-hash-target to="main-traits_magic-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn15-benefit">You studied at Anuli's center for druidic magic long enough to begin bonding with a familiar. You gain a +1 trait bonus on Handle Animal checks. You may substitute this trait for <Link to="/feat/iron_will">Iron Will</Link> as the prerequisite for the <Link to="/feat/familiar_bond">Familiar Bond</Link> feat.</Pair>
</Ability>
<Ability id="traitinsistentbenefactor-insistent-benefactor-fn16" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinsistentbenefactor-insistent-benefactor-fn16"><Link to="/trait/insistent_benefactor">⮞</Link> Insistent Benefactor <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-16" id="main-traits_magic-fake-fn-16" data-hash-target to="main-traits_magic-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitinsistentbenefactor-insistent-benefactor-fn16-benefit">Pathfinders of different backgrounds don't always realize what's best for them, and you have perfected the art of forcing your magical boons on your allies. Whenever you cast a harmless spell, you gain a +2 trait bonus on caster level checks to overcome spell resistance, and the saving throw DC of the spell (if any) is increased by 2.</Pair>
</Ability>
<Ability id="traitinternalcompass-internal-compass-fn17" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinternalcompass-internal-compass-fn17"><Link to="/trait/internal_compass">⮞</Link> Internal Compass <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-17" id="main-traits_magic-fake-fn-17" data-hash-target to="main-traits_magic-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitinternalcompass-internal-compass-fn17-benefit">You maintain a sense of direction, even on planes where direction is relative. If you are on a plane that has no analogue to north, you automatically know the direction toward the plane's major dominating feature (for instance, Pharasma's Spire in the Boneyard, or the sun in Nirvana). If there is no such dominating feature, you instead know the direction of the closest feature significant to one of the plane's divinities or demigods.</Pair>
</Ability>
<Ability id="traitinuredtodeath-inured-to-death-fn10-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinuredtodeath-inured-to-death-fn10-3"><Link to="/trait/inured_to_death">⮞</Link> Inured to Death <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.3" id="main-traits_magic-fake-fn-10.3" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitinuredtodeath-inured-to-death-fn10-3-benefit"><p>You have been around death or the undead all of your life; you have become accustomed to its shadowy presence, and are no longer overwhelmed by it. You gain a +2 trait bonus on saving throws against death effects.</p>
<p><strong>Suggested Characters:</strong> Gebbites, Urgathoans, Ustalavs.</p>
</Pair>
</Ability>
<Ability id="traitkeenappraiser-keen-appraiser-fn10-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitkeenappraiser-keen-appraiser-fn10-4"><Link to="/trait/keen_appraiser">⮞</Link> Keen Appraiser <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.4" id="main-traits_magic-fake-fn-10.4" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitkeenappraiser-keen-appraiser-fn10-4-benefit"><p>Your frequent handling of magic items, artifacts, and other enchanted goods has made you an expert at determining when something has magical properties. You gain a +1 trait bonus on Appraise checks. In addition, you need only exceed the DC of an Appraise check by 2 in order to determine whether the item in question has magic properties (although success still does not grant knowledge of the magic item's abilities).</p>
<p><strong>Suggested Characters:</strong> Drumans, dwarves, Torag worshipers.</p>
</Pair>
</Ability>
<Ability id="traitkinbond-kin-bond-fn3-18" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitkinbond-kin-bond-fn3-18"><Link to="/trait/kin_bond">⮞</Link> Kin Bond <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.18" id="main-traits_magic-fake-fn-3.18" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitkinbond-kin-bond-fn3-18-benefit">The bond between you and a close sibling is nearly mystical. Choose a single sibling with whom to share this bond. Once per day when you fail a saving throw while your sibling is within 30 feet, you may reroll that saving throw using your sibling's saving throw modifier. If you and the sibling are twins or otherwise part of a multiple birth, you gain a +2 trait bonus on the rerolled saving throw. Your sibling must be willing to grant you the reroll. If you fail the saving throw, you and your sibling are dazed for 1 round.</Pair>
</Ability>
<Ability id="traitknowledgeablecaster-knowledgeable-caster-fn3-19" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitknowledgeablecaster-knowledgeable-caster-fn3-19"><Link to="/trait/knowledgeable_caster">⮞</Link> Knowledgeable Caster <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.19" id="main-traits_magic-fake-fn-3.19" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitknowledgeablecaster-knowledgeable-caster-fn3-19-benefit">Once per day when you cast a divination spell, you can cast that spell as if your caster level were 1 level higher in the appropriate class. You also gain a +1 trait bonus on any Knowledge checks associated with your sorcerer bloodline, if any.</Pair>
</Ability>
<Ability id="traitlamiasbane-lamias-bane-fn18" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlamiasbane-lamias-bane-fn18"><Link to="/trait/lamias_bane">⮞</Link> Lamia's Bane <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-18" id="main-traits_magic-fake-fn-18" data-hash-target to="main-traits_magic-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlamiasbane-lamias-bane-fn18-benefit">You have been exposed to the magical energies of lamias in your past, or you have heard innumerable stories about your family's dealings with lamias, and you have built up a resistance to their charms. You gain a +1 trait bonus on saving throws against enchantment effects and a +2 trait bonus on saving throws against the spells and spell-like abilities of lamias.</Pair>
</Ability>
<Ability id="traitlesseffort-less-effort-fn19" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlesseffort-less-effort-fn19"><Link to="/trait/less_effort">⮞</Link> Less Effort <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-19" id="main-traits_magic-fake-fn-19" data-hash-target to="main-traits_magic-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlesseffort-less-effort-fn19-benefit">Select one spell belonging to the abjuration or transmutation school on your spell list. When you cast that spell or it is cast on you, treat the caster level as 2 higher for the purpose of determining the duration.</Pair>
</Ability>
<Ability id="traitlinkedsurge-linked-surge-fn3-20" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlinkedsurge-linked-surge-fn3-20"><Link to="/trait/linked_surge">⮞</Link> Linked Surge <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.20" id="main-traits_magic-fake-fn-3.20" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlinkedsurge-linked-surge-fn3-20-benefit">Once per day, you may make a Strength- or Constitution-based ability check or skill check using you eidolon's ability score in place of your own. Your eidolon must be summoned and with 30 feet for you to use this trait.</Pair>
</Ability>
<Ability id="traitlowblow-low-blow-fn19-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlowblow-low-blow-fn19-2"><Link to="/trait/low_blow">⮞</Link> Low Blow <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-19.2" id="main-traits_magic-fake-fn-19.2" data-hash-target to="main-traits_magic-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlowblow-low-blow-fn19-2-benefit">When targeting a good-aligned creature with a spell or spell-like ability with the pain descriptor or that imposes a morale penalty, increase its effective caster level by 1. If you are of an evil alignment, increase the save DC of the effect by 1 as well.</Pair>
</Ability>
<Ability id="traitlunarbirth-lunar-birth-fn20" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlunarbirth-lunar-birth-fn20"><Link to="/trait/lunar_birth">⮞</Link> Lunar Birth <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-20" id="main-traits_magic-fake-fn-20" data-hash-target to="main-traits_magic-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlunarbirth-lunar-birth-fn20-benefit">Born during a lunar eclipse, you were forever marked by the moon's mysterious and ancient magic. You gain a +1 trait bonus on saving throws against the spells and spell-like abilities cast by humans.</Pair>
</Ability>
<Ability id="traitmagiccrafter-magic-crafter-fn3-21" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagiccrafter-magic-crafter-fn3-21"><Link to="/trait/magic_crafter">⮞</Link> Magic Crafter <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.21" id="main-traits_magic-fake-fn-3.21" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmagiccrafter-magic-crafter-fn3-21-benefit">Your early magical training involved study of the properties and creation of magic items. You gain a +1 trait bonus on Appraise checks and a +1 bonus on any Craft checks attempted while making magic items.</Pair>
</Ability>
<Ability id="traitmagicalflair-magical-flair-fn10-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicalflair-magical-flair-fn10-5"><Link to="/trait/magical_flair">⮞</Link> Magical Flair <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.5" id="main-traits_magic-fake-fn-10.5" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmagicalflair-magical-flair-fn10-5-benefit"><p>At a young age, you saw a witch burned by fearful peasants, druids falsely punished for demon worship, or another sort of spellcaster persecuted for merely practicing her dubious craft. Intent on not suffering the same fate, you approach spellcasting with a powerful desire to control how your magic is perceived by others. You can cause spells you cast to manifest with strange visual, auditory, or olfactory features that make them hard to identify. Choose a school of magic. The Spellcraft DC to identify spells you cast from that school of magic increases by 2. Onlookers who fail a Spellcraft check to identify your spell by 2 or less incorrectly identify the spell as another randomly selected spell of the same school and level.</p>
<p><strong>Suggested Characters:</strong> Gnomes, Razmir worshipers, witches.</p>
</Pair>
</Ability>
<Ability id="traitmagicalknack-magical-knack-fn3-22-fn8-5-fn7-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicalknack-magical-knack-fn3-22-fn8-5-fn7-5"><Link to="/trait/magical_knack">⮞</Link> Magical Knack <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.22" id="main-traits_magic-fake-fn-3.22" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.5" id="main-traits_magic-fake-fn-8.5" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.5" id="main-traits_magic-fake-fn-7.5" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmagicalknack-magical-knack-fn3-22-fn8-5-fn7-5-benefit">You were raised, either wholly or in part, by a magical creature, either after it found you abandoned in the woods or because your parents often left you in the care of a magical minion. This constant exposure to magic has made its mysteries easy for you to understand, even when you turn your mind to other devotions and tasks. Pick a class when you gain this trait - your caster level in that class gains a +2 trait bonus as long as this bonus doesn't raise your caster level above your current Hit Dice.</Pair>
</Ability>
<Ability id="traitmagicallineage-magical-lineage-fn3-23-fn7-6-fn8-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicallineage-magical-lineage-fn3-23-fn7-6-fn8-6"><Link to="/trait/magical_lineage">⮞</Link> Magical Lineage <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.23" id="main-traits_magic-fake-fn-3.23" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.6" id="main-traits_magic-fake-fn-7.6" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.6" id="main-traits_magic-fake-fn-8.6" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmagicallineage-magical-lineage-fn3-23-fn7-6-fn8-6-benefit">One of your parents was a gifted spellcaster who not only used metamagic often, but also developed many magical items and perhaps even a new spell or two - and you have inherited a fragment of this greatness. Pick one spell when you choose this trait. When you apply metamagic feats to this spell that add at least 1 level to the spell, treat its actual level as 1 lower for determining the spell's final adjusted level.</Pair>
</Ability>
<Ability id="traitmagicaltalent-magical-talent-fn3-24-fn8-7-fn7-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicaltalent-magical-talent-fn3-24-fn8-7-fn7-7"><Link to="/trait/magical_talent">⮞</Link> Magical Talent <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.24" id="main-traits_magic-fake-fn-3.24" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.7" id="main-traits_magic-fake-fn-8.7" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.7" id="main-traits_magic-fake-fn-7.7" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmagicaltalent-magical-talent-fn3-24-fn8-7-fn7-7-benefit">Either from inborn talent, the whimsy of the gods, or obsessive study of strange tomes, you have mastered the use of a cantrip. Choose a 0-level spell. You may cast that spell once per day as a spell-like ability. This spell-like ability is cast at your highest caster level gained; if you have no caster level, it functions at CL 1st. The spell-like ability's save DC is Charisma-based.</Pair>
</Ability>
<Ability id="traitmalleablemagic-malleable-magic-fn3-25" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmalleablemagic-malleable-magic-fn3-25"><Link to="/trait/malleable_magic">⮞</Link> Malleable Magic <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.25" id="main-traits_magic-fake-fn-3.25" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmalleablemagic-malleable-magic-fn3-25-benefit">Once per day as a swift action, you can lose a single 1st-, 2nd- or 3rd-level magus spell to regain 1 arcane pool point. You can't exceed the maximum number of arcane pool points in your arcane pool by using this trait.</Pair>
</Ability>
<Ability id="traitmathematicalprodigy-mathematical-prodigy-fn3-26-fn7-8-fn8-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmathematicalprodigy-mathematical-prodigy-fn3-26-fn7-8-fn8-8"><Link to="/trait/mathematical_prodigy">⮞</Link> Mathematical Prodigy <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.26" id="main-traits_magic-fake-fn-3.26" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.8" id="main-traits_magic-fake-fn-7.8" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.8" id="main-traits_magic-fake-fn-8.8" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmathematicalprodigy-mathematical-prodigy-fn3-26-fn7-8-fn8-8-benefit">Mathematics has always come easily for you, and you have always been able to "see the math" in the physical and magical world. You gain a +1 bonus on Knowledge (arcana) and Knowledge (engineering) checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmechanicalaptitude-mechanical-aptitude-fn21" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmechanicalaptitude-mechanical-aptitude-fn21"><Link to="/trait/mechanical_aptitude">⮞</Link> Mechanical Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-21" id="main-traits_magic-fake-fn-21" data-hash-target to="main-traits_magic-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmechanicalaptitude-mechanical-aptitude-fn21-benefit">You have learned much from tinkering with ancient technology from the Jistka Imperium. Choose one of the following skills: Disable Device, Knowledge (engineering), or Use Magic Device. Once per day, you can reroll a check with that skill before the outcome of the check is revealed. You must take the second result, even if it is worse.</Pair>
</Ability>
<Ability id="traitmeticulousconcoction-meticulous-concoction-fn3-27" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmeticulousconcoction-meticulous-concoction-fn3-27"><Link to="/trait/meticulous_concoction">⮞</Link> Meticulous Concoction <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.27" id="main-traits_magic-fake-fn-3.27" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmeticulousconcoction-meticulous-concoction-fn3-27-benefit">Your meticulous carefulness makes your bombs and extracts more potent. Once per day, you can either add a +2 trait bonus to the save DC for one bomb you throw or extend the duration of one extract you imbibe by 2 rounds. Extracts with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
<Ability id="traitpragmaticactivator-pragmatic-activator-fn3-28" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpragmaticactivator-pragmatic-activator-fn3-28"><Link to="/trait/pragmatic_activator">⮞</Link> Pragmatic Activator <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.28" id="main-traits_magic-fake-fn-3.28" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitpragmaticactivator-pragmatic-activator-fn3-28-benefit">While some figure out how to use magical devices with stubborn resolve, your approach is more pragmatic. You may use your Intelligence modifier when making Use Magic Device checks instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitprecisetreatment-precise-treatment-fn3-29" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitprecisetreatment-precise-treatment-fn3-29"><Link to="/trait/precise_treatment">⮞</Link> Precise Treatment <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.29" id="main-traits_magic-fake-fn-3.29" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitprecisetreatment-precise-treatment-fn3-29-benefit">You treat others with a clear and calculating intellect. You gain a +1 trait bonus on all Heal checks, and you may use your Intelligence modifier when making Heal checks instead of your Wisdom modifier.</Pair>
</Ability>
<Ability id="traitradianthealing-radiant-healing-fn5-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitradianthealing-radiant-healing-fn5-2"><Link to="/trait/radiant_healing">⮞</Link> Radiant Healing <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-5.2" id="main-traits_magic-fake-fn-5.2" data-hash-target to="main-traits_magic-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitradianthealing-radiant-healing-fn5-2-benefit">You've learned how to infuse your healing magic with lingering traces of light. Whenever you cast a spell from the conjuration (healing) school that has a casting time of a standard action, you can extend its casting time to a full-round action to imbue the target with light, as per light, with a duration of 1 round per caster level.</Pair>
</Ability>
<Ability id="traitreluctantapprentice-reluctant-apprentice-fn3-30" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitreluctantapprentice-reluctant-apprentice-fn3-30"><Link to="/trait/reluctant_apprentice">⮞</Link> Reluctant Apprentice <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.30" id="main-traits_magic-fake-fn-3.30" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitreluctantapprentice-reluctant-apprentice-fn3-30-benefit">Your early training grants you knowledge of the arcane. You gain a +1 trait bonus on Knowledge (arcana) checks, and are considered trained in that skill even if you have no ranks in it.</Pair>
</Ability>
<Ability id="traitresilientcaster-resilient-caster-fn3-31" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitresilientcaster-resilient-caster-fn3-31"><Link to="/trait/resilient_caster">⮞</Link> Resilient Caster <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.31" id="main-traits_magic-fake-fn-3.31" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitresilientcaster-resilient-caster-fn3-31-benefit">Your great force of will makes your magic harder to dispel. Your caster level is treated as 1 level higher whenever someone attempts to dispel one of your spells.</Pair>
</Ability>
<Ability id="traitrivethunadherent-rivethun-adherent-fn12-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitrivethunadherent-rivethun-adherent-fn12-2"><Link to="/trait/rivethun_adherent">⮞</Link> Rivethun Adherent <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-12.2" id="main-traits_magic-fake-fn-12.2" data-hash-target to="main-traits_magic-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitrivethunadherent-rivethun-adherent-fn12-2-benefit"><Link to="/rule/rivethun">Rivethun</Link> is an ancient tradition of dwarven shamans who learned to listen to and affect the world around them by reflecting on the friction between body and spirit. As someone who feels a similar friction between your inner spirit and physical body, you have picked up some old rivethun meditation techniques, even if you aren't a dwarf. While you suffer a physical ailment, such as disease, poison, or ability damage to Strength, Dexterity, or Constitution (but not including hit point damage), you gain a +2 trait bonus on Will saving throws. While you suffer a mental ailment, including insanity, any charm or compulsion effect, or ability damage to Intelligence, Wisdom, or Charisma, you gain a +2 trait bonus on Fortitude saving throws.</Pair>
</Ability>
<Ability id="traitscholaroftheanalects-scholar-of-the-analects-fn22" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitscholaroftheanalects-scholar-of-the-analects-fn22"><Link to="/trait/scholar_of_the_analects">⮞</Link> Scholar of the Analects <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-22" id="main-traits_magic-fake-fn-22" data-hash-target to="main-traits_magic-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitscholaroftheanalects-scholar-of-the-analects-fn22-benefit">You studied various Analects of Aroden from a young age and became skilled at using magic written by others. You can cast <Link to="/spell/read_magic">read magic</Link> as a spell-like ability three times per day, using your character level as your caster level.</Pair>
</Ability>
<Ability id="traitscornedbymagic-scorned-by-magic-fn10-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitscornedbymagic-scorned-by-magic-fn10-6"><Link to="/trait/scorned_by_magic">⮞</Link> Scorned by Magic <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.6" id="main-traits_magic-fake-fn-10.6" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitscornedbymagic-scorned-by-magic-fn10-6-benefit"><p>As a youth, you assisted a wise woman or witch doctor who removed magical maladies from the needy and was present for the breaking of many spells - or perhaps you passed through a dead magic zone. Whatever the cause, magic seems a little more reluctant to affect you than others. Reduce the caster level of spells and spell-like abilities cast upon you by 1 for the purpose of attempting dispel checks and overcoming your spell resistance (if any).</p>
<p><strong>Suggested Characters:</strong> Kellids, Mana Wastes natives, Shoanti.</p>
</Pair>
</Ability>
<Ability id="traitsecretscrolls-secret-scrolls-fn23" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsecretscrolls-secret-scrolls-fn23"><Link to="/trait/secret_scrolls">⮞</Link> Secret Scrolls <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-23" id="main-traits_magic-fake-fn-23" data-hash-target to="main-traits_magic-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitsecretscrolls-secret-scrolls-fn23-benefit">You were inducted into a secret magical tradition such as the Esoteric Order of the Palatine Eye. You can cast <Link to="/spell/read_magic">read magic</Link> once per day as a spell-like ability, and gain a +1 trait bonus on Use Magic Device checks to activate scrolls you cannot normally use.</Pair>
</Ability>
<Ability id="traitselftaughtscholar-self-taught-scholar-fn3-32" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitselftaughtscholar-self-taught-scholar-fn3-32"><Link to="/trait/self_taught_scholar">⮞</Link> Self-Taught Scholar <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.32" id="main-traits_magic-fake-fn-3.32" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitselftaughtscholar-self-taught-scholar-fn3-32-benefit">Being self-taught has made it necessary for you to scour all documentation you can get your hands on. You gain a +1 trait bonus on Linguistics checks to decipher unfamiliar languages, and Linguistics is always a class skill for you. In addition, you gain a +1 trait bonus on Spellcraft checks made to decipher the writing on a scroll.</Pair>
</Ability>
<Ability id="traitshroudedcasting-shrouded-casting-fn3-33" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitshroudedcasting-shrouded-casting-fn3-33"><Link to="/trait/shrouded_casting">⮞</Link> Shrouded Casting <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.33" id="main-traits_magic-fake-fn-3.33" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitshroudedcasting-shrouded-casting-fn3-33-benefit">You have learned the secret to casting some spells without lesser material components. Choose one school of magic when you pick this trait. You can cast spells from that school as if you had the <Link to="/feat/eschew_materials">Eschew Materials</Link> feat.</Pair>
</Ability>
<Ability id="traitskeptic-skeptic-fn3-34-fn8-9-fn7-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitskeptic-skeptic-fn3-34-fn8-9-fn7-9"><Link to="/trait/skeptic">⮞</Link> Skeptic <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.34" id="main-traits_magic-fake-fn-3.34" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.9" id="main-traits_magic-fake-fn-8.9" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.9" id="main-traits_magic-fake-fn-7.9" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitskeptic-skeptic-fn3-34-fn8-9-fn7-9-benefit">Growing up, you were always around magical effects to the extent that you realized much of it was mere smoke and mirrors. You gain a +2 trait bonus on all saving throws against illusions.</Pair>
</Ability>
<Ability id="traitsparkofcreation-spark-of-creation-fn24" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsparkofcreation-spark-of-creation-fn24"><Link to="/trait/spark_of_creation">⮞</Link> Spark of Creation <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-24" id="main-traits_magic-fake-fn-24" data-hash-target to="main-traits_magic-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitsparkofcreation-spark-of-creation-fn24-benefit">You have always had a knack for making useful things, and your talent as an artisan was evident even at an early age. You gain a +1 trait bonus on Craft checks, and the cost of creating magic items is reduced by 5%.</Pair>
</Ability>
<Ability id="traitspiritualattachment-spiritual-attachment-fn12-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitspiritualattachment-spiritual-attachment-fn12-3"><Link to="/trait/spiritual_attachment">⮞</Link> Spiritual Attachment <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-12.3" id="main-traits_magic-fake-fn-12.3" data-hash-target to="main-traits_magic-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitspiritualattachment-spiritual-attachment-fn12-3-benefit">The union between spirits and spiritualists is one of the strongest (and strangest) bonds shared between the mortal realm and the spirit world. Spiritualists can use the knowledge of their linked phantoms to better negotiate with other spirits. Whether you're a spiritualist or not, you've always had a similar knack when it comes to interactions with the spirit world. You gain a +4 trait bonus on checks to notice haunts, and when interacting with someone who is possessed by an incorporeal undead creature, you gain a +2 trait bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks against that target.</Pair>
</Ability>
<Ability id="traitstabbingspells-stabbing-spells-fn22-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstabbingspells-stabbing-spells-fn22-2"><Link to="/trait/stabbing_spells">⮞</Link> Stabbing Spells <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-22.2" id="main-traits_magic-fake-fn-22.2" data-hash-target to="main-traits_magic-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitstabbingspells-stabbing-spells-fn22-2-benefit">Aroden wrote much about ways to use weapons to enhance magic's effectiveness, and you have taken to heart the insights gleaned from his words. Whenever you strike a foe with a weapon, you gain a +2 trait bonus on caster level checks to overcome that foe's spell resistance until the end of your next turn.</Pair>
</Ability>
<Ability id="traitstormtouched-storm-touched-fn3-35" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstormtouched-storm-touched-fn3-35"><Link to="/trait/storm_touched">⮞</Link> Storm-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.35" id="main-traits_magic-fake-fn-3.35" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitstormtouched-storm-touched-fn3-35-benefit">You share an affinity with elemental lightning. You gain DR 1/- against creatures and attacks with the electricity type.</Pair>
</Ability>
<Ability id="traitstrengthforetold-strength-foretold-fn3-36" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstrengthforetold-strength-foretold-fn3-36"><Link to="/trait/strength_foretold">⮞</Link> Strength Foretold <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.36" id="main-traits_magic-fake-fn-3.36" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitstrengthforetold-strength-foretold-fn3-36-benefit">You can channel extra power into one of your bloodline spells. Once per day as a free action, you gain a +1 trait bonus to the DC of the saving throw of one of your bonus bloodline spells.</Pair>
</Ability>
<Ability id="traitsunblessed-sun-blessed-fn20-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsunblessed-sun-blessed-fn20-2"><Link to="/trait/sun_blessed">⮞</Link> Sun-Blessed <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-20.2" id="main-traits_magic-fake-fn-20.2" data-hash-target to="main-traits_magic-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitsunblessed-sun-blessed-fn20-2-benefit">Your birth came at a time when the sun was auspiciously aligned with your birth sign. As a result, you have a natural affinity for light and life. Whenever you're affected by a healing effect that would heal more hit points than your maximum hit point total, you gain the excess healing as temporary hit points. You can gain up to a number of temporary hit points per day equal to your character level in this way. These temporary hit points last for 1 minute.</Pair>
</Ability>
<Ability id="traittenaciousshifting-tenacious-shifting-fn3-37" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittenaciousshifting-tenacious-shifting-fn3-37"><Link to="/trait/tenacious_shifting">⮞</Link> Tenacious Shifting <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.37" id="main-traits_magic-fake-fn-3.37" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traittenaciousshifting-tenacious-shifting-fn3-37-benefit">You've discovered the secret of stable transmutations. Any transmutation spell you cast upon yourself has its duration increased by 2 rounds. Transmutation spells with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
<Ability id="traittheoreticalmagician-theoretical-magician-fn25" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittheoreticalmagician-theoretical-magician-fn25"><Link to="/trait/theoretical_magician">⮞</Link> Theoretical Magician <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-25" id="main-traits_magic-fake-fn-25" data-hash-target to="main-traits_magic-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traittheoreticalmagician-theoretical-magician-fn25-benefit">You've studied more magic than what you can actually perform. You gain a +2 trait bonus on Spellcraft checks, or a +3 bonus if you aren't a spellcaster.</Pair>
</Ability>
<Ability id="traitdangerouslycurious-dangerously-curious-fn3-38-fn8-10-fn7-10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdangerouslycurious-dangerously-curious-fn3-38-fn8-10-fn7-10"><Link to="/trait/dangerously_curious">⮞</Link> Dangerously Curious <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.38" id="main-traits_magic-fake-fn-3.38" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-8.10" id="main-traits_magic-fake-fn-8.10" data-hash-target to="main-traits_magic-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-7.10" id="main-traits_magic-fake-fn-7.10" data-hash-target to="main-traits_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdangerouslycurious-dangerously-curious-fn3-38-fn8-10-fn7-10-benefit">You have always been intrigued by magic, possibly because you were the child of a magician or priest. You often snuck into your parent's laboratory or shrine to tinker with spell components and magic devices, and frequently caused quite a bit of damage and headaches for your parent as a result. You gain a +1 bonus on Use Magic Device checks, and Use Magic Device is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdemonblightreistance-demonblight-reistance-fn18-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdemonblightreistance-demonblight-reistance-fn18-2"><Link to="/trait/demonblight_reistance">⮞</Link> Demonblight Reistance <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-18.2" id="main-traits_magic-fake-fn-18.2" data-hash-target to="main-traits_magic-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdemonblightreistance-demonblight-reistance-fn18-2-benefit">Your exposure to powerful energies instilled in you a supernatural resistance to diseases, particularly those of a demonic bent. You gain a +3 trait bonus on saving throws against diseases you are exposed to while fighting one or more creatures of the demon subtype, or while such a hostile creature is within 100 feet.</Pair>
</Ability>
<Ability id="traitdesperatefocus-desperate-focus-fn25-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperatefocus-desperate-focus-fn25-2"><Link to="/trait/desperate_focus">⮞</Link> Desperate Focus <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-25.2" id="main-traits_magic-fake-fn-25.2" data-hash-target to="main-traits_magic-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdesperatefocus-desperate-focus-fn25-2-benefit">You've often found yourself in situations where a lack of focus can lead to worse than a lost spell. You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitdesperateresolve-desperate-resolve-fn3-39" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperateresolve-desperate-resolve-fn3-39"><Link to="/trait/desperate_resolve">⮞</Link> Desperate Resolve <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.39" id="main-traits_magic-fake-fn-3.39" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdesperateresolve-desperate-resolve-fn3-39-benefit">You are adept at casting spells even in the most precarious situations. You gain a +1 trait bonus on <Link to="/rule/concentration">concentration</Link> checks. This trait bonus increases to +4 when you are grappled, pinned, in violent weather, or entangled.</Pair>
</Ability>
<Ability id="traitdesperatespeed-desperate-speed-fn3-40" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperatespeed-desperate-speed-fn3-40"><Link to="/trait/desperate_speed">⮞</Link> Desperate Speed <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.40" id="main-traits_magic-fake-fn-3.40" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdesperatespeed-desperate-speed-fn3-40-benefit">Your eidolon excels at a movement type you do not possess. Your eidolon receives a +5-foot enhancement bonus to one type of speed it has that you do not, such as a climb or swim speed. If your eidolon doesn't already possess such a mode of movement, you may apply this trait bonus later if it gains an evolution that grants it such a mode. Once this bonus is applied to a mode of movement, it can't be switched to another mode.</Pair>
</Ability>
<Ability id="traitdiabolicaldabbler-diabolical-dabbler-fn25-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdiabolicaldabbler-diabolical-dabbler-fn25-3"><Link to="/trait/diabolical_dabbler">⮞</Link> Diabolical Dabbler <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-25.3" id="main-traits_magic-fake-fn-25.3" data-hash-target to="main-traits_magic-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdiabolicaldabbler-diabolical-dabbler-fn25-3-benefit">Each fiendish animal you conjure with any summon spell gains +1 hit point per hit die for the duration of the spell that summoned it.</Pair>
</Ability>
<Ability id="traitdistanceaptitude-distance-aptitude-fn10-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdistanceaptitude-distance-aptitude-fn10-7"><Link to="/trait/distance_aptitude">⮞</Link> Distance Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.7" id="main-traits_magic-fake-fn-10.7" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdistanceaptitude-distance-aptitude-fn10-7-benefit"><p>You were exposed to the magic of an elf gate, portal, or some other form of distance-spanning magic when you were young. This contact with ancient world-spanning magic has granted you insight into means to extend the range of your own spells. Treat your caster level as 1 higher for the purposes of determining the range of spells and spell-like abilities.</p>
<p><strong>Suggested Characters:</strong> Elves, Numerians, Sarkorians.</p>
</Pair>
</Ability>
<Ability id="traitdomineering-domineering-fn10-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdomineering-domineering-fn10-8"><Link to="/trait/domineering">⮞</Link> Domineering <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.8" id="main-traits_magic-fake-fn-10.8" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdomineering-domineering-fn10-8-benefit"><p>When you were young, you attracted a group of devoted companions thanks to your impressive talent, and the experience inspired in you a powerful self-assurance and air of superiority. Your confidence is so strong that others feel naturally compelled to follow your commands. Choose one 1st-level enchantment spell you are capable of casting. The DC of that spell increases by 1.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Irriseni, Mwangi.</p>
</Pair>
</Ability>
<Ability id="traitdraconicinfusion-draconic-infusion-fn26" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdraconicinfusion-draconic-infusion-fn26"><Link to="/trait/draconic_infusion">⮞</Link> Draconic Infusion <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-26" id="main-traits_magic-fake-fn-26" data-hash-target to="main-traits_magic-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdraconicinfusion-draconic-infusion-fn26-benefit">You were exposed to an artifact or other powerful magic that infused you with the power of dragons. Choose the acid, cold, electricity, or fire spell descriptor when you take this trait. Once per day for every 2 caster levels you have (minimum once per day), when you cast a spell that has your chosen elemental descriptor, you can deal an additional 1d4 points of damage of that energy type to one target of that spell.</Pair>
</Ability>
<Ability id="traitearthtouched-earth-touched-fn3-41" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitearthtouched-earth-touched-fn3-41"><Link to="/trait/earth_touched">⮞</Link> Earth-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.41" id="main-traits_magic-fake-fn-3.41" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitearthtouched-earth-touched-fn3-41-benefit">You share an affinity with elemental earth. You gain DR 1/- against creatures and attacks with the earth type.</Pair>
</Ability>
<Ability id="traiteldritchauditor-eldritch-auditor-fn27" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchauditor-eldritch-auditor-fn27"><Link to="/trait/eldritch_auditor">⮞</Link> Eldritch Auditor <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-27" id="main-traits_magic-fake-fn-27" data-hash-target to="main-traits_magic-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traiteldritchauditor-eldritch-auditor-fn27-benefit">You are a magically adept merchant who has learned tricks to protect your own goods, or you serve a city as an impartial auditor who guards against arcane trickery in the bazaars. You gain a +2 trait bonus on Spellcraft checks and Will saves to identify an item's true properties, such as against spells like magic aura.</Pair>
</Ability>
<Ability id="traiteldritchdelver-eldritch-delver-fn3-42" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchdelver-eldritch-delver-fn3-42"><Link to="/trait/eldritch_delver">⮞</Link> Eldritch Delver <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.42" id="main-traits_magic-fake-fn-3.42" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traiteldritchdelver-eldritch-delver-fn3-42-benefit">You have an unquenchable thirst for knowledge about the world and desire to obtain it firsthand. You gain a +1 trait bonus on all Knowledge (dungeoneering) and Knowledge (history) checks, and you may treat your caster level as 1 level higher for all conjuration spells of the teleportation subschool.</Pair>
</Ability>
<Ability id="traitelementalaccident-elemental-accident-fn28" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitelementalaccident-elemental-accident-fn28"><Link to="/trait/elemental_accident">⮞</Link> Elemental Accident <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-28" id="main-traits_magic-fake-fn-28" data-hash-target to="main-traits_magic-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitelementalaccident-elemental-accident-fn28-benefit">A traumatic experience in your childhood, such as surviving a violent earthquake, fleeing a shipwreck, escaping a devastating fire, or getting struck by lightning, caused you to develop a fear of the corresponding element. You can instinctively shield yourself against elemental dangers of that type. Select acid, cold, electricity, or fire at character creation (once chosen, this damage type can't be changed). Once per day when you are subjected to an attack or effect that deals energy damage of that type, you can gain resistance 10 against that damage type for 1 round as an immediate action. This resistance does not stack with any existing resistance you might have against that energy type.</Pair>
</Ability>
<Ability id="traitenduringmutagen-enduring-mutagen-fn3-43" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitenduringmutagen-enduring-mutagen-fn3-43"><Link to="/trait/enduring_mutagen">⮞</Link> Enduring Mutagen <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.43" id="main-traits_magic-fake-fn-3.43" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitenduringmutagen-enduring-mutagen-fn3-43-benefit">Because of special training, your unique body chemistry, or the uncovering of an alchemical secret, your mutagens last longer. The bonuses and penalties granted by your mutagens last for 1 additional minute per alchemist level.</Pair>
</Ability>
<Ability id="traitoutcastsintuition-outcasts-intuition-fn3-44" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoutcastsintuition-outcasts-intuition-fn3-44"><Link to="/trait/outcasts_intuition">⮞</Link> Outcast's Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.44" id="main-traits_magic-fake-fn-3.44" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitoutcastsintuition-outcasts-intuition-fn3-44-benefit">You are able to sense the motives of others and use that sense to bolster your magic against dispelling. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you. In addition, your caster level is treated as 1 level higher for the purposes of any attempts to dispel your magic.</Pair>
</Ability>
<Ability id="traitouterdragonblood-outer-dragon-blood-fn20-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitouterdragonblood-outer-dragon-blood-fn20-3"><Link to="/trait/outer_dragon_blood">⮞</Link> Outer Dragon Blood <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-20.3" id="main-traits_magic-fake-fn-20.3" data-hash-target to="main-traits_magic-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitouterdragonblood-outer-dragon-blood-fn20-3-flavor">The blood of outer dragons courses through your veins, and you've inherited a portion of their magic.</Pair>
<Pair single="benefit" id="traitouterdragonblood-outer-dragon-blood-fn20-3-benefit"><p>You gain Draconic as a bonus language. In addition, if you are a sorcerer with the <Link to="/sorcbloodline/draconic">draconic</Link> bloodline, you can select one of the <Link to="/family/outer_dragon">outer dragon</Link> types for your bloodline powers; this affects your resistances and the type of energy damage dealt by a number of your abilities.</p>
<ul>
<li><strong>Lunar:</strong> Cold energy, 60-foot line</li>
<li><strong>Solar:</strong> Fire energy, 60-foot line</li>
<li><strong>Time:</strong> Electricity energy, 30-foot cone</li>
<li><strong>Void:</strong> Cold energy, 30-foot cone</li>
<li><strong>Vortex:</strong> Fire energy, 30-foot cone</li>
</ul>
</Pair>
</Ability>
<Ability id="traitoutsiderties-outsider-ties-fn1-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoutsiderties-outsider-ties-fn1-2"><Link to="/trait/outsider_ties">⮞</Link> Outsider Ties <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-1.2" id="main-traits_magic-fake-fn-1.2" data-hash-target to="main-traits_magic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitoutsiderties-outsider-ties-fn1-2-benefit">An outsider visited you at a young age, and you have had a significant affinity with that type of outsider ever since. Choose a subtype of outsider, such as <Link to="/subtype/angel">angel</Link> or <Link to="/subtype/elemental">elemental</Link>. When you summon an outsider of that subtype via <Link to="/spell/summon_monster">summon monster</Link>, <Link to="/spell/planar_ally">planar ally</Link>, <Link to="/spell/planar_binding">planar binding</Link>, or similar spells and abilities, the summoned creature gains a number of temporary hit points equal to the level of spell used to summon it.</Pair>
</Ability>
<Ability id="traitoverwhelmingbeauty-overwhelming-beauty-fn29" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoverwhelmingbeauty-overwhelming-beauty-fn29"><Link to="/trait/overwhelming_beauty">⮞</Link> Overwhelming Beauty <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-29" id="main-traits_magic-fake-fn-29" data-hash-target to="main-traits_magic-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitoverwhelmingbeauty-overwhelming-beauty-fn29-benefit">Your wiles are particularly potent against people who share a race with you, as your beauty is often held up as a symbol of perfection. The DC of your mind-affecting effects increases by 1 against creatures that have at least one of the same subtypes as you.</Pair>
</Ability>
<Ability id="traitpartialprotege-partial-protege-fn3-45" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpartialprotege-partial-protege-fn3-45"><Link to="/trait/partial_protege">⮞</Link> Partial Protege <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.45" id="main-traits_magic-fake-fn-3.45" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitpartialprotege-partial-protege-fn3-45-benefit">You are adept at disguising your true talents. You gain a +1 trait bonus on Bluff checks and on Use Magic Device checks made to emulate a class feature.</Pair>
</Ability>
<Ability id="traitpathfindersfocus-pathfinders-focus-fn16-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpathfindersfocus-pathfinders-focus-fn16-2"><Link to="/trait/pathfinders_focus">⮞</Link> Pathfinder's Focus <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-16.2" id="main-traits_magic-fake-fn-16.2" data-hash-target to="main-traits_magic-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitpathfindersfocus-pathfinders-focus-fn16-2-benefit">You can select a magnetic compass for your arcane bond class feature; this compass is nonmagical, but you can later spend 250 gp to upgrade it into a <Link to="/magic-wondrous/wayfinder">wayfinder</Link>. Choosing this trait allows you to upgrade this wayfinder to a variant or unique wayfinder per the normal rules for <Link to="/rule/adding_new_abilities">improving magic items</Link>. A bonded wayfinder must be held in your hand to grant the benefits of being a bonded object.</Pair>
</Ability>
<Ability id="traitperfectionistsbrew-perfectionists-brew-fn3-46" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitperfectionistsbrew-perfectionists-brew-fn3-46"><Link to="/trait/perfectionists_brew">⮞</Link> Perfectionist's Brew <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.46" id="main-traits_magic-fake-fn-3.46" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitperfectionistsbrew-perfectionists-brew-fn3-46-benefit">You know that potion recipes should be followed with exact precision. You gain a +2 trait bonus on all Craft (alchemy) checks and on Spellcraft checks made to brew potions.</Pair>
</Ability>
<Ability id="traitplanarescapee-planar-escapee-fn28-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitplanarescapee-planar-escapee-fn28-2"><Link to="/trait/planar_escapee">⮞</Link> Planar Escapee <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-28.2" id="main-traits_magic-fake-fn-28.2" data-hash-target to="main-traits_magic-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitplanarescapee-planar-escapee-fn28-2-benefit">You were a prisoner or slave in a city on the Elemental Planes, such as the cruel efreet's City of Brass on the Plane of Fire or the dwarven city of Urgashaz on the Plane of Earth. When you escaped that city, you had to use your captors' weapons and magic against them in addition to your sheer wits, and you learned how to find weaknesses in their natural resistances. At character creation, select acid, cold, electricity, or fire (once chosen, this selection can't be changed). Once per day as a swift action, you can choose a single creature that is within 30 feet of you and within your line of sight; treat that creature's resistance against your chosen energy as 5 lower than its normal energy resistance for 1 round. This ability has no effect if the creature has no resistance to the chosen energy or if the creature has immunity to the chosen energy.</Pair>
</Ability>
<Ability id="traitpossessed-possessed-fn3-47" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpossessed-possessed-fn3-47"><Link to="/trait/possessed">⮞</Link> Possessed <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.47" id="main-traits_magic-fake-fn-3.47" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitpossessed-possessed-fn3-47-benefit">You were, or are, possessed in some way by another entity that grants you occasional access to its knowledge. Once per day, you can attempt a Knowledge check of your choice even if you are not trained in that skill and it is not usually possible to use that skill untrained. If you can normally use that skill untrained, you gain a +2 trait bonus on the check.</Pair>
</Ability>
<Ability id="traitmutanteye-mutant-eye-fn10-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmutanteye-mutant-eye-fn10-9"><Link to="/trait/mutant_eye">⮞</Link> Mutant Eye <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-10.9" id="main-traits_magic-fake-fn-10.9" data-hash-target to="main-traits_magic-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmutanteye-mutant-eye-fn10-9-benefit"><p>One of your parents was exposed to uncontrolled magic or arcane pollution before you were born, causing you to develop a minor mutation that has marked you as different all your life. You have a third eye on your forehead. As long as it is uncovered and open, you can get a clearer sense of the emotions of those you see, granting you a +2 trait bonus on Sense Motive checks that increases to +4 on checks to notice whether a character is under a mind-affecting effect. However, the eye is unsettling, and you take a -1 penalty on Bluff and Diplomacy checks against humanoids who can see it.</p>
<p><strong>Suggested Characters:</strong> Lamashtans, Mana Wastes natives, Nexians.</p>
</Pair>
</Ability>
<Ability id="traittransmuterofkorada-transmuter-of-korada-fn24-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittransmuterofkorada-transmuter-of-korada-fn24-2"><Link to="/trait/transmuter_of_korada">⮞</Link> Transmuter of Korada <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-24.2" id="main-traits_magic-fake-fn-24.2" data-hash-target to="main-traits_magic-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traittransmuterofkorada-transmuter-of-korada-fn24-2-benefit">You learned the secrets of transmutation from a follower of the empyreal lord Korada. Whenever you cast a spell from the transmutation school, its effects manifest at +1 caster level. Additionally, select one of the following transmutation spells: bear's endurance, bull's strength, cat's grace, eagle's splendor, fox's cunning, or owl's wisdom. Once per day when you cast that spell, its duration is doubled. A spell affected by this trait cannot be modified further by the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat or similar abilities.</Pair>
</Ability>
<Ability id="traittwinnedpresence-twinned-presence-fn3-48" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittwinnedpresence-twinned-presence-fn3-48"><Link to="/trait/twinned_presence">⮞</Link> Twinned Presence <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.48" id="main-traits_magic-fake-fn-3.48" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traittwinnedpresence-twinned-presence-fn3-48-benefit">Your eidolon - and your connection to it - makes others ill at ease. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you. In addition, if your eidolon is summoned and within 30 feet, and its size exceeds your own, use its size modifier on any Intimidate checks you make.</Pair>
</Ability>
<Ability id="traittwistedtattoo-twisted-tattoo-fn18-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittwistedtattoo-twisted-tattoo-fn18-3"><Link to="/trait/twisted_tattoo">⮞</Link> Twisted Tattoo <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-18.3" id="main-traits_magic-fake-fn-18.3" data-hash-target to="main-traits_magic-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traittwistedtattoo-twisted-tattoo-fn18-3-benefit">Your exposure to eldritch phenomena has caused your skin to develop a strange pattern. Once per day as you cast a spell whose casting time is 1 round or less, you can roll 1d4-2 (no minimum) and add the result to that spell's effective caster level. In an area of <Link to="/rule/primal_magic">primal magic</Link>, the minimum result of this roll is 0, not -1.</Pair>
</Ability>
<Ability id="traitunscathed-unscathed-fn3-49" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunscathed-unscathed-fn3-49"><Link to="/trait/unscathed">⮞</Link> Unscathed <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.49" id="main-traits_magic-fake-fn-3.49" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitunscathed-unscathed-fn3-49-benefit">You are amazingly resistant to energy attacks because of either your upbringing or magical experimentation. Each type of energy resistance you have (if any) increases by 2 points.</Pair>
</Ability>
<Ability id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50"><Link to="/trait/unseen_but_not_undone">⮞</Link> Unseen but Not Undone <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.50" id="main-traits_magic-fake-fn-3.50" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50-flavor">Without a single gesture, you can unleash a bloodline spell.</Pair>
<Pair single="benefit" id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50-benefit">Once per day, you can cast a bloodline spell as if you had the <Link to="/feat/still_spell">Still Spell</Link> feat. Using this trait does not modify the spell's level.</Pair>
</Ability>
<Ability id="traitunstablemutagen-unstable-mutagen-fn3-51" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunstablemutagen-unstable-mutagen-fn3-51"><Link to="/trait/unstable_mutagen">⮞</Link> Unstable Mutagen <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.51" id="main-traits_magic-fake-fn-3.51" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunstablemutagen-unstable-mutagen-fn3-51-flavor">You discovered or were given a secret to make your mutagens more unstable - but also more potent.</Pair>
<Pair single="benefit" id="traitunstablemutagen-unstable-mutagen-fn3-51-benefit"><p>Once per day, you can create an <em>unstable mutagen.</em> It is like a normal mutagen in most ways, but also gains a single benefit or hindrance due to its instability. Roll 1d6 to determine the result of the instability.</p>
<ScrollContainer id="main-traits_magic--table-0"><table>
<thead>
<tr>
<th>1d6</th>
<th>Instability</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>The <em>unstable mutagen</em> lasts for 5 minutes per alchemist level.</td>
</tr>
<tr>
<td>2</td>
<td>The <em>unstable mutagen</em> lasts for 20 minutes per alchemist level.</td>
</tr>
<tr>
<td>3</td>
<td>The <em>unstable mutagen</em> does not grant a natural armor bonus.</td>
</tr>
<tr>
<td>4</td>
<td>The natural armor bonus granted by the mutagen increases by 2.</td>
</tr>
<tr>
<td>5</td>
<td>The penalty that the mutagen applies to the corresponding mental ability score increases by 2.</td>
</tr>
<tr>
<td>6</td>
<td>The <em>unstable mutagen</em> does not apply a penalty to the corresponding mental ability score.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="traitvolatileconduit-volatile-conduit-fn3-52" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitvolatileconduit-volatile-conduit-fn3-52"><Link to="/trait/volatile_conduit">⮞</Link> Volatile Conduit <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.52" id="main-traits_magic-fake-fn-3.52" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitvolatileconduit-volatile-conduit-fn3-52-benefit">You discovered a secret that enhances the energy of some spells. Once per day as a free action, when you cast a spell that deals acid, cold, electricity, or fire damage, you can enhance that spell with volatile energy. When you do, it deals 1d4 points of extra damage of the same energy type.</Pair>
</Ability>
<Ability id="traitwatertouched-water-touched-fn3-53" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitwatertouched-water-touched-fn3-53"><Link to="/trait/water_touched">⮞</Link> Water-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-3.53" id="main-traits_magic-fake-fn-3.53" data-hash-target to="main-traits_magic-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitwatertouched-water-touched-fn3-53-benefit">You share an affinity with elemental water. You gain DR 1/- against creatures and attacks with the water type.</Pair>
</Ability>
<Ability id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn23-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn23-2"><Link to="/trait/winter_witchcraft_survivor">⮞</Link> Winter Witchcraft Survivor <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-23.2" id="main-traits_magic-fake-fn-23.2" data-hash-target to="main-traits_magic-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn23-2-benefit">You narrowly escaped death when a Winter Witch punished you for supporting the Heralds. You gain cold resistance 5 against the first cold damage you take each day, and gain a +2 bonus on saving throws against the fear effects of creatures with the cold subtype.</Pair>
</Ability>
<Ability id="traitbeastofthesociety-beast-of-the-society-fn30-fn31" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbeastofthesociety-beast-of-the-society-fn30-fn31"><Link to="/trait/beast_of_the_society">⮞</Link> Beast of the Society <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-30" id="main-traits_magic-fake-fn-30" data-hash-target to="main-traits_magic-fake-fn-30-target">30</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-31" id="main-traits_magic-fake-fn-31" data-hash-target to="main-traits_magic-fake-fn-31-target">31</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="benefit" id="traitbeastofthesociety-beast-of-the-society-fn30-fn31-benefit">A druid at the Grand Lodge revealed to you secrets changing your form into that of an animal. Whenever you use your wild shape class ability to turn yourself into a Small or Medium animal, the effect lasts for 2 hours per druid level instead of 1 hour per druid level.</Pair>
</Ability>
<Ability id="traitbountifulherblore-bountiful-herb-lore-fn32" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbountifulherblore-bountiful-herb-lore-fn32"><Link to="/trait/bountiful_herb_lore">⮞</Link> Bountiful Herb-Lore <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-32" id="main-traits_magic-fake-fn-32" data-hash-target to="main-traits_magic-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Region" hl>Cassomir</Pair>
<Pair single="benefit" id="traitbountifulherblore-bountiful-herb-lore-fn32-benefit">Once per day after 10 minutes of foraging, you can sprinkle nutritious herbs into a magical consumable item (such as a potion of cure light wounds). If the item is consumed within 1 minute, it provides nourishment as if it were a normal meal to the creature that partakes of it.</Pair>
</Ability>
<Ability id="traitcharlatan-charlatan-fn33" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcharlatan-charlatan-fn33"><Link to="/trait/charlatan">⮞</Link> Charlatan <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-33" id="main-traits_magic-fake-fn-33" data-hash-target to="main-traits_magic-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="benefit" id="traitcharlatan-charlatan-fn33-benefit">Your talent for illusion goes beyond a mere knack for figments and phantasms. You can actually channel spell energy into simple illusions that augment your attempts at deception. As a swift action, you may expend one prepared spell or spell slot to gain a bonus on the next Bluff check you make, provided the check takes place before the beginning of your next turn. The bonus on this check is equal to the level of the spell consumed. You may use this ability 3 times per day. Only gnomes of nonlawful alignment may take this trait.</Pair>
</Ability>
<Ability id="traitdeepguardian-deep-guardian-fn34" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdeepguardian-deep-guardian-fn34"><Link to="/trait/deep_guardian">⮞</Link> Deep Guardian <sup><InnerLink showBacklink="backlink-main-traits_magic-fake-fn-34" id="main-traits_magic-fake-fn-34" data-hash-target to="main-traits_magic-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="benefit" id="traitdeepguardian-deep-guardian-fn34-benefit">The subtle power of the deep places of the world flows within you, and grants you mastery of summoning beings of earth and stone. Any creature you conjure with a summon spell that has the earth subtype or a burrow speed gains a +1 morale bonus on attack rolls and a +1 enhancement bonus to Armor Class for the duration of the spell that summoned it.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic-label">Footnotes</h3><ol>
<li id="main-traits_magic-fake-fn-1-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic-fake-fn-1" data-hash-target to="main-traits_magic-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic-fake-fn-1.2" data-hash-target to="main-traits_magic-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-2-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic-fake-fn-2" data-hash-target to="main-traits_magic-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic-fake-fn-2.2" data-hash-target to="main-traits_magic-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3" data-hash-target to="main-traits_magic-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.2" data-hash-target to="main-traits_magic-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.3" data-hash-target to="main-traits_magic-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.4" data-hash-target to="main-traits_magic-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.5" data-hash-target to="main-traits_magic-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.6" data-hash-target to="main-traits_magic-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.7" data-hash-target to="main-traits_magic-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.8" data-hash-target to="main-traits_magic-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.9" data-hash-target to="main-traits_magic-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.10" data-hash-target to="main-traits_magic-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.11" data-hash-target to="main-traits_magic-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.12" data-hash-target to="main-traits_magic-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.13" data-hash-target to="main-traits_magic-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.14" data-hash-target to="main-traits_magic-fake-fn-3.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.15" data-hash-target to="main-traits_magic-fake-fn-3.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.16" data-hash-target to="main-traits_magic-fake-fn-3.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.17" data-hash-target to="main-traits_magic-fake-fn-3.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.18" data-hash-target to="main-traits_magic-fake-fn-3.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.19" data-hash-target to="main-traits_magic-fake-fn-3.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.20" data-hash-target to="main-traits_magic-fake-fn-3.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.21" data-hash-target to="main-traits_magic-fake-fn-3.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.22" data-hash-target to="main-traits_magic-fake-fn-3.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.23" data-hash-target to="main-traits_magic-fake-fn-3.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.24" data-hash-target to="main-traits_magic-fake-fn-3.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.25" data-hash-target to="main-traits_magic-fake-fn-3.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.26" data-hash-target to="main-traits_magic-fake-fn-3.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.27" data-hash-target to="main-traits_magic-fake-fn-3.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.28" data-hash-target to="main-traits_magic-fake-fn-3.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.29" data-hash-target to="main-traits_magic-fake-fn-3.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.30" data-hash-target to="main-traits_magic-fake-fn-3.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.31" data-hash-target to="main-traits_magic-fake-fn-3.31">↩<sup>31</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.32" data-hash-target to="main-traits_magic-fake-fn-3.32">↩<sup>32</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.33" data-hash-target to="main-traits_magic-fake-fn-3.33">↩<sup>33</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.34" data-hash-target to="main-traits_magic-fake-fn-3.34">↩<sup>34</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.35" data-hash-target to="main-traits_magic-fake-fn-3.35">↩<sup>35</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.36" data-hash-target to="main-traits_magic-fake-fn-3.36">↩<sup>36</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.37" data-hash-target to="main-traits_magic-fake-fn-3.37">↩<sup>37</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.38" data-hash-target to="main-traits_magic-fake-fn-3.38">↩<sup>38</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.39" data-hash-target to="main-traits_magic-fake-fn-3.39">↩<sup>39</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.40" data-hash-target to="main-traits_magic-fake-fn-3.40">↩<sup>40</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.41" data-hash-target to="main-traits_magic-fake-fn-3.41">↩<sup>41</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.42" data-hash-target to="main-traits_magic-fake-fn-3.42">↩<sup>42</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.43" data-hash-target to="main-traits_magic-fake-fn-3.43">↩<sup>43</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.44" data-hash-target to="main-traits_magic-fake-fn-3.44">↩<sup>44</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.45" data-hash-target to="main-traits_magic-fake-fn-3.45">↩<sup>45</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.46" data-hash-target to="main-traits_magic-fake-fn-3.46">↩<sup>46</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.47" data-hash-target to="main-traits_magic-fake-fn-3.47">↩<sup>47</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.48" data-hash-target to="main-traits_magic-fake-fn-3.48">↩<sup>48</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.49" data-hash-target to="main-traits_magic-fake-fn-3.49">↩<sup>49</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.50" data-hash-target to="main-traits_magic-fake-fn-3.50">↩<sup>50</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.51" data-hash-target to="main-traits_magic-fake-fn-3.51">↩<sup>51</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.52" data-hash-target to="main-traits_magic-fake-fn-3.52">↩<sup>52</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic-fake-fn-3.53" data-hash-target to="main-traits_magic-fake-fn-3.53">↩<sup>53</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-4-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic-fake-fn-4" data-hash-target to="main-traits_magic-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-5-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic-fake-fn-5" data-hash-target to="main-traits_magic-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic-fake-fn-5.2" data-hash-target to="main-traits_magic-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-6-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic-fake-fn-6" data-hash-target to="main-traits_magic-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-7-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7" data-hash-target to="main-traits_magic-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.2" data-hash-target to="main-traits_magic-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.3" data-hash-target to="main-traits_magic-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.4" data-hash-target to="main-traits_magic-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.5" data-hash-target to="main-traits_magic-fake-fn-7.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.6" data-hash-target to="main-traits_magic-fake-fn-7.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.7" data-hash-target to="main-traits_magic-fake-fn-7.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.8" data-hash-target to="main-traits_magic-fake-fn-7.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.9" data-hash-target to="main-traits_magic-fake-fn-7.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic-fake-fn-7.10" data-hash-target to="main-traits_magic-fake-fn-7.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-8-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8" data-hash-target to="main-traits_magic-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.2" data-hash-target to="main-traits_magic-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.3" data-hash-target to="main-traits_magic-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.4" data-hash-target to="main-traits_magic-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.5" data-hash-target to="main-traits_magic-fake-fn-8.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.6" data-hash-target to="main-traits_magic-fake-fn-8.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.7" data-hash-target to="main-traits_magic-fake-fn-8.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.8" data-hash-target to="main-traits_magic-fake-fn-8.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.9" data-hash-target to="main-traits_magic-fake-fn-8.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic-fake-fn-8.10" data-hash-target to="main-traits_magic-fake-fn-8.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-9-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_magic-fake-fn-9" data-hash-target to="main-traits_magic-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-10-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10" data-hash-target to="main-traits_magic-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.2" data-hash-target to="main-traits_magic-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.3" data-hash-target to="main-traits_magic-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.4" data-hash-target to="main-traits_magic-fake-fn-10.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.5" data-hash-target to="main-traits_magic-fake-fn-10.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.6" data-hash-target to="main-traits_magic-fake-fn-10.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.7" data-hash-target to="main-traits_magic-fake-fn-10.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.8" data-hash-target to="main-traits_magic-fake-fn-10.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic-fake-fn-10.9" data-hash-target to="main-traits_magic-fake-fn-10.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-11-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic-fake-fn-11" data-hash-target to="main-traits_magic-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-12-target"><p><Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic-fake-fn-12" data-hash-target to="main-traits_magic-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic-fake-fn-12.2" data-hash-target to="main-traits_magic-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic-fake-fn-12.3" data-hash-target to="main-traits_magic-fake-fn-12.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-13-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_magic-fake-fn-13" data-hash-target to="main-traits_magic-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-14-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_magic-fake-fn-14" data-hash-target to="main-traits_magic-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-15-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_magic-fake-fn-15" data-hash-target to="main-traits_magic-fake-fn-15">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-16-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_magic-fake-fn-16" data-hash-target to="main-traits_magic-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_magic-fake-fn-16.2" data-hash-target to="main-traits_magic-fake-fn-16.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-17-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic-fake-fn-17" data-hash-target to="main-traits_magic-fake-fn-17">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-18-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_magic-fake-fn-18" data-hash-target to="main-traits_magic-fake-fn-18">↩</InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_magic-fake-fn-18.2" data-hash-target to="main-traits_magic-fake-fn-18.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_magic-fake-fn-18.3" data-hash-target to="main-traits_magic-fake-fn-18.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-19-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_magic-fake-fn-19" data-hash-target to="main-traits_magic-fake-fn-19">↩</InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_magic-fake-fn-19.2" data-hash-target to="main-traits_magic-fake-fn-19.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-20-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_magic-fake-fn-20" data-hash-target to="main-traits_magic-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_magic-fake-fn-20.2" data-hash-target to="main-traits_magic-fake-fn-20.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_magic-fake-fn-20.3" data-hash-target to="main-traits_magic-fake-fn-20.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-21-target"><p>Blood of the Ancients pg. 19 <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_magic-fake-fn-21" data-hash-target to="main-traits_magic-fake-fn-21">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-22-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_magic-fake-fn-22" data-hash-target to="main-traits_magic-fake-fn-22">↩</InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_magic-fake-fn-22.2" data-hash-target to="main-traits_magic-fake-fn-22.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-23-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_magic-fake-fn-23" data-hash-target to="main-traits_magic-fake-fn-23">↩</InnerLink> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_magic-fake-fn-23.2" data-hash-target to="main-traits_magic-fake-fn-23.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-24-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_magic-fake-fn-24" data-hash-target to="main-traits_magic-fake-fn-24">↩</InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_magic-fake-fn-24.2" data-hash-target to="main-traits_magic-fake-fn-24.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-25-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_magic-fake-fn-25" data-hash-target to="main-traits_magic-fake-fn-25">↩</InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_magic-fake-fn-25.2" data-hash-target to="main-traits_magic-fake-fn-25.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_magic-fake-fn-25.3" data-hash-target to="main-traits_magic-fake-fn-25.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-26-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_magic-fake-fn-26" data-hash-target to="main-traits_magic-fake-fn-26">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-27-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_magic-fake-fn-27" data-hash-target to="main-traits_magic-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-28-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_magic-fake-fn-28" data-hash-target to="main-traits_magic-fake-fn-28">↩</InnerLink> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_magic-fake-fn-28.2" data-hash-target to="main-traits_magic-fake-fn-28.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic-fake-fn-29-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_magic-fake-fn-29" data-hash-target to="main-traits_magic-fake-fn-29">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-30-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 30" id="backlink-main-traits_magic-fake-fn-30" data-hash-target to="main-traits_magic-fake-fn-30">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-31-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 31" id="backlink-main-traits_magic-fake-fn-31" data-hash-target to="main-traits_magic-fake-fn-31">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-32-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 32" id="backlink-main-traits_magic-fake-fn-32" data-hash-target to="main-traits_magic-fake-fn-32">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-33-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 33" id="backlink-main-traits_magic-fake-fn-33" data-hash-target to="main-traits_magic-fake-fn-33">↩</InnerLink></p></li>
<li id="main-traits_magic-fake-fn-34-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 34" id="backlink-main-traits_magic-fake-fn-34" data-hash-target to="main-traits_magic-fake-fn-34">↩</InnerLink></p></li>
</ol></section></IonList>};
export default {traits_faith:_traits_faith,traits_magic:_traits_magic}