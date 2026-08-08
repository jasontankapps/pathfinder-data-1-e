import {IonList,IonItemDivider} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import MainLink from '../../components/MainLink';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _traits_magic = {title: "Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItemDivider className="mainItem divider"></IonItemDivider><MainLink to="/main/traits_magic_all" endem="(108 traits)" info="All Magic Traits" /><MainLink to="/main/traits_magic_def" className="indented" bottom="Affects armor bonuses, saving throws, DR, etc; 22 traits" info="Defense Traits" /><MainLink to="/main/traits_magic_spell" className="indented" bottom="Grants a spell, spell-like-ability, or an ability that duplicates a spell; 5 traits" info="Spell Ability Traits" /><MainLink to="/main/traits_magic_class" className="indented" bottom="Requires a class ability to function; 21 traits" info="Class-Specific Traits" /><MainLink to="/main/traits_magic_cl" className="indented" bottom="Affects caster level; 14 traits" info="Caster Level Traits" /><MainLink to="/main/traits_magic_boost" className="indented" bottom="Affects spell variables; 11 traits" info="Spell-Boosting Traits" /><MainLink to="/main/traits_magic_conconj" className="indented" bottom="Affects concentration or summoning; 8traits" info="Other Spellcasting Traits" /><MainLink to="/main/traits_magic_general" className="indented" bottom="General magic-related effects; 6traits" info="Other Magic-Related Traits" /><MainLink to="/main/traits_magic_int" className="indented" bottom="Affects Appraise, Craft, Knowledge, Linguistics, or Spellcraft; 17 traits" info="Intelligence-Based Skill Traits" /><MainLink to="/main/traits_magic_cha" className="indented" bottom="Affects Bluff, Diplomacy, Handle Animal, Intimidate, or Use Magic Device; 8 traits" info="Charisma-Based Skill Traits" /><MainLink to="/main/traits_magic_ab" className="indented" bottom="Affects Climb, Disable Device, Heal, Sense Motive, or Swim; 6 traits" info="Other Skill Traits" /><MainLink to="/main/traits_magic_other" className="indented" bottom="Affects skills, feats, languages known, or other abilities; 5 traits" info="Other Skill/Feat/Ability Traits" /></IonList>};
const _traits_magic_all = {title: "All Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitacadamaeneophyte-acadamae-neophyte-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitacadamaeneophyte-acadamae-neophyte-fn1"><Link to="/trait/acadamae_neophyte">⮞</Link> Acadamae Neophyte <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-1" id="main-traits_magic_all-fake-fn-1" data-hash-target to="main-traits_magic_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitacadamaeneophyte-acadamae-neophyte-fn1-flavor">You have shown a significant talent for the magical arts, gaining the attention of the famed Acadamae of Korvosa.</Pair>
<Pair single="benefit" id="traitacadamaeneophyte-acadamae-neophyte-fn1-benefit">Whenever you succeed at a <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> check to identify a creature and its special powers or vulnerabilities, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
<Ability id="traitaeromanticaffinity-aeromantic-affinity-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitaeromanticaffinity-aeromantic-affinity-fn2"><Link to="/trait/aeromantic_affinity">⮞</Link> Aeromantic Affinity <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-2" id="main-traits_magic_all-fake-fn-2" data-hash-target to="main-traits_magic_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitaeromanticaffinity-aeromantic-affinity-fn2-flavor">One of your distant ancestors was either a powerful aeromancer or a creature of elemental air, granting you greater skill with air magic.</Pair>
<Pair single="benefit" id="traitaeromanticaffinity-aeromantic-affinity-fn2-benefit">You treat your caster level as 1 higher when casting spells with the air or electricity descriptor.</Pair>
</Ability>
<Ability id="traitairtouched-air-touched-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitairtouched-air-touched-fn3"><Link to="/trait/air_touched">⮞</Link> Air-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3" id="main-traits_magic_all-fake-fn-3" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitairtouched-air-touched-fn3-flavor">You share an affinity with elemental air.</Pair>
<Pair single="benefit" id="traitairtouched-air-touched-fn3-benefit">You gain DR 1/- against creatures and attacks with the air type.</Pair>
</Ability>
<Ability id="traitalchemicaladept-alchemical-adept-fn3-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitalchemicaladept-alchemical-adept-fn3-2"><Link to="/trait/alchemical_adept">⮞</Link> Alchemical Adept <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.2" id="main-traits_magic_all-fake-fn-3.2" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitalchemicaladept-alchemical-adept-fn3-2-flavor">You are skilled in creating alchemical items.</Pair>
<Pair single="benefit" id="traitalchemicaladept-alchemical-adept-fn3-2-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks made to craft alchemical items. Furthermore, when you fail a Craft (alchemy) check by 5 or more but don't roll a natural 1, you don't ruin any raw materials or have to pay that cost again.</Pair>
</Ability>
<Ability id="traitalchemicalintuition-alchemical-intuition-fn3-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitalchemicalintuition-alchemical-intuition-fn3-3"><Link to="/trait/alchemical_intuition">⮞</Link> Alchemical Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.3" id="main-traits_magic_all-fake-fn-3.3" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitalchemicalintuition-alchemical-intuition-fn3-3-flavor">You are often struck with epiphanies about alchemical processes and substances.</Pair>
<Pair single="benefit" id="traitalchemicalintuition-alchemical-intuition-fn3-3-benefit">Once per day as a <strong className="hl">free action</strong>, you may gain a trait bonus equal to your Charisma modifier (minimum 0) on a <Link to="/skill/craft">Craft</Link> (alchemy) check you make. You can apply this bonus after you roll the check, possibly turning a failure into a success.</Pair>
</Ability>
<Ability id="traitarcaneresearcher-arcane-researcher-fn2-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcaneresearcher-arcane-researcher-fn2-2"><Link to="/trait/arcane_researcher">⮞</Link> Arcane Researcher <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-2.2" id="main-traits_magic_all-fake-fn-2.2" data-hash-target to="main-traits_magic_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitarcaneresearcher-arcane-researcher-fn2-2-flavor">Your curiosity and ingenuity have driven you to experiment and push new boundaries, and you have a knack for tampering with magic.</Pair>
<Pair single="benefit" id="traitarcaneresearcher-arcane-researcher-fn2-2-benefit">You gain a +4 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/spellcraft">Spellcraft</Link> checks to research, modify, and create new spells.</Pair>
</Ability>
<Ability id="traitarcanerevitalization-arcane-revitalization-fn3-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcanerevitalization-arcane-revitalization-fn3-4"><Link to="/trait/arcane_revitalization">⮞</Link> Arcane Revitalization <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.4" id="main-traits_magic_all-fake-fn-3.4" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitarcanerevitalization-arcane-revitalization-fn3-4-flavor">Your martial prowess can feed your arcane power.</Pair>
<Pair single="benefit" id="traitarcanerevitalization-arcane-revitalization-fn3-4-benefit">Once per day, when you confirm a critical hit with a weapon attack, you regain 1 <em>arcane pool</em> point. You can't exceed your maximum number of <em>arcane pool</em> points.</Pair>
</Ability>
<Ability id="traitarcanetemper-arcane-temper-fn3-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcanetemper-arcane-temper-fn3-5"><Link to="/trait/arcane_temper">⮞</Link> Arcane Temper <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.5" id="main-traits_magic_all-fake-fn-3.5" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitarcanetemper-arcane-temper-fn3-5-flavor">You have quick reactions and fierce concentration.</Pair>
<Pair single="benefit" id="traitarcanetemper-arcane-temper-fn3-5-benefit">You gain a +1 trait bonus on concentration and initiative checks.</Pair>
</Ability>
<Ability id="traitascendantrecollection-ascendant-recollection-fn3-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitascendantrecollection-ascendant-recollection-fn3-6"><Link to="/trait/ascendant_recollection">⮞</Link> Ascendant Recollection <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.6" id="main-traits_magic_all-fake-fn-3.6" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitascendantrecollection-ascendant-recollection-fn3-6-flavor">Your first bloodline power is particularly strong.</Pair>
<Pair single="benefit" id="traitascendantrecollection-ascendant-recollection-fn3-6-benefit">Your sorcerer level is considered to be 1 level higher when determining the effects of your 1st-level bloodline power.</Pair>
</Ability>
<Ability id="traitbalancersbanishing-balancers-banishing-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbalancersbanishing-balancers-banishing-fn4"><Link to="/trait/balancers_banishing">⮞</Link> Balancer's Banishing <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-4" id="main-traits_magic_all-fake-fn-4" data-hash-target to="main-traits_magic_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitbalancersbanishing-balancers-banishing-fn4-flavor">The interference of the Outer Planes in mortal affairs angers you to no end and invigorates the potency of your magic.</Pair>
<Pair single="benefit" id="traitbalancersbanishing-balancers-banishing-fn4-benefit">As long as you remain neutral, whenever you cast a spell that would send an outsider with the chaotic, evil, good, or lawful subtype back to its home plane, the spell's saving throw DC increases by 1.</Pair>
</Ability>
<Ability id="traitbeastofthesociety-beast-of-the-society-fn5-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbeastofthesociety-beast-of-the-society-fn5-fn6"><Link to="/trait/beast_of_the_society">⮞</Link> Beast of the Society <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-5" id="main-traits_magic_all-fake-fn-5" data-hash-target to="main-traits_magic_all-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-6" id="main-traits_magic_all-fake-fn-6" data-hash-target to="main-traits_magic_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitbeastofthesociety-beast-of-the-society-fn5-fn6-flavor">A druid at the Grand Lodge revealed to you secrets changing your form into that of an animal.</Pair>
<Pair single="benefit" id="traitbeastofthesociety-beast-of-the-society-fn5-fn6-benefit">Whenever you use your <em>wild shape</em> class ability to turn yourself into a Small or Medium animal, the effect lasts for 2 hours per druid level instead of 1 hour per druid level.</Pair>
</Ability>
<Ability id="traitblackbloodheritage-black-blood-heritage-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitblackbloodheritage-black-blood-heritage-fn7"><Link to="/trait/black_blood_heritage">⮞</Link> Black Blood Heritage <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-7" id="main-traits_magic_all-fake-fn-7" data-hash-target to="main-traits_magic_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitblackbloodheritage-black-blood-heritage-fn7-flavor">One of your ancestors came in contact with the mystical black blood, granting you an affinity for the substance.</Pair>
<Pair single="benefit" id="traitblackbloodheritage-black-blood-heritage-fn7-benefit"><p>You are immune to the negative effects of <Link to="/magic-artifact/black_blood">black blood</Link>. Once per day as a <strong className="hl">swift action</strong>, you can channel the essence of <em>black blood,</em> increasing your effective caster level by 1 for any 1st- or 2nd-level necromancy spell you cast.</p>
<p>Your blood is pitch black as a result of this trait.</p>
</Pair>
</Ability>
<Ability id="traitbladedmagic-bladed-magic-fn3-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbladedmagic-bladed-magic-fn3-7"><Link to="/trait/bladed_magic">⮞</Link> Bladed Magic <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.7" id="main-traits_magic_all-fake-fn-3.7" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitbladedmagic-bladed-magic-fn3-7-flavor">You have an innate talent for using magical weaponry and those weapons capable of becoming magical.</Pair>
<Pair single="benefit" id="traitbladedmagic-bladed-magic-fn3-7-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> checks made to craft magic or <Link to="/rule/masterwork_w">masterwork weapons</Link>. In addition, when you use your <em>arcane pool</em> class ability to grant a weapon an enhancement bonus, that bonus lasts for 2 minutes instead of 1.</Pair>
</Ability>
<Ability id="traitbountifulherblore-bountiful-herb-lore-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbountifulherblore-bountiful-herb-lore-fn8"><Link to="/trait/bountiful_herb_lore">⮞</Link> Bountiful Herb-Lore <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-8" id="main-traits_magic_all-fake-fn-8" data-hash-target to="main-traits_magic_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Region" hl>Cassomir</Pair>
<Pair single="benefit" id="traitbountifulherblore-bountiful-herb-lore-fn8-benefit">Once per day after 10 minutes of foraging, you can sprinkle nutritious herbs into a magical consumable item (such as a potion of <Link to="/spell/cure_light_wounds">cure light wounds</Link>). If the item is consumed within 1 minute, it provides nourishment as if it were a normal meal to the creature that partakes of it.</Pair>
</Ability>
<Ability id="traitcharlatan-charlatan-fn9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcharlatan-charlatan-fn9"><Link to="/trait/charlatan">⮞</Link> Charlatan <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-9" id="main-traits_magic_all-fake-fn-9" data-hash-target to="main-traits_magic_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcharlatan-charlatan-fn9-flavor">Your talent for illusion goes beyond a mere knack for figments and phantasms. You can actually channel spell energy into simple illusions that augment your attempts at deception.</Pair>
<Pair single="benefit" id="traitcharlatan-charlatan-fn9-benefit"><p>As a <strong className="hl">swift action</strong>, you may expend one prepared spell or spell slot to gain a bonus on the next <Link to="/skill/bluff">Bluff</Link> check you make, provided the check takes place before the beginning of your next turn. The bonus on this check is equal to the level of the spell consumed.</p>
<p>You may use this ability 3 times per day. Only gnomes of nonlawful alignment may take this trait.</p>
</Pair>
</Ability>
<Ability id="traitchildofthemoon-child-of-the-moon-fn10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitchildofthemoon-child-of-the-moon-fn10"><Link to="/trait/child_of_the_moon">⮞</Link> Child of the Moon <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-10" id="main-traits_magic_all-fake-fn-10" data-hash-target to="main-traits_magic_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitchildofthemoon-child-of-the-moon-fn10-flavor">Your lunar gift becomes much more powerful when the moon is full.</Pair>
<Pair single="benefit" id="traitchildofthemoon-child-of-the-moon-fn10-benefit">Choose either <Link to="/skill/climb">Climb</Link>, <Link to="/skill/stealth">Stealth</Link>, or <Link to="/skill/swim">Swim</Link>. You gain a +1 trait bonus on checks made with the chosen skill. On dates during and after the first quarter of a lunar phase but before end of the last quarter (the half of the lunar cycle where the moon is fuller), this bonus increases to +2. During the full moon, this bonus increases to +4.</Pair>
</Ability>
<Ability id="traitclassicallyschooled-classically-schooled-fn3-8-fn11-fn12" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitclassicallyschooled-classically-schooled-fn3-8-fn11-fn12"><Link to="/trait/classically_schooled">⮞</Link> Classically Schooled <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.8" id="main-traits_magic_all-fake-fn-3.8" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11" id="main-traits_magic_all-fake-fn-11" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12" id="main-traits_magic_all-fake-fn-12" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitclassicallyschooled-classically-schooled-fn3-8-fn11-fn12-flavor">Your apprenticeship or early education was particularly focused on the direct application of magic.</Pair>
<Pair single="benefit" id="traitclassicallyschooled-classically-schooled-fn3-8-fn11-fn12-benefit">You gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, and Spellcraft is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcovencasting-coven-casting-fn13" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcovencasting-coven-casting-fn13"><Link to="/trait/coven_casting">⮞</Link> Coven Casting <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-13" id="main-traits_magic_all-fake-fn-13" data-hash-target to="main-traits_magic_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl>Belong to a coven or magical cabal</Pair>
<Pair single="flavor" id="traitcovencasting-coven-casting-fn13-flavor">You have belonged to a coven or magical cabal and know how to coordinate your spellcasting with others.</Pair>
<Pair single="benefit" id="traitcovencasting-coven-casting-fn13-benefit">When within 30 feet of an allied spellcaster, you both gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitcrossdisciplined-cross-disciplined-fn3-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossdisciplined-cross-disciplined-fn3-9"><Link to="/trait/cross_disciplined">⮞</Link> Cross-Disciplined <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.9" id="main-traits_magic_all-fake-fn-3.9" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitcrossdisciplined-cross-disciplined-fn3-9-flavor">Your dabbling has granted you greater insight into the proper casting of certain spells.</Pair>
<Pair single="benefit" id="traitcrossdisciplined-cross-disciplined-fn3-9-benefit">Once per day, you may cast a spell you have prepared that appears on both the magus and wizard spell lists as if your caster level were 1 level higher.</Pair>
</Ability>
<Ability id="traitcrossknowledge-cross-knowledge-fn3-10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossknowledge-cross-knowledge-fn3-10"><Link to="/trait/cross_knowledge">⮞</Link> Cross-Knowledge <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.10" id="main-traits_magic_all-fake-fn-3.10" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitcrossknowledge-cross-knowledge-fn3-10-benefit">Once per day, you may treat an extract you drink as if your caster level were 1 level higher as long as that extract appears on the wizard spell list and the alchemist list of formulae.</Pair>
</Ability>
<Ability id="traitdangerouslycurious-dangerously-curious-fn3-11-fn12-2-fn11-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdangerouslycurious-dangerously-curious-fn3-11-fn12-2-fn11-2"><Link to="/trait/dangerously_curious">⮞</Link> Dangerously Curious <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.11" id="main-traits_magic_all-fake-fn-3.11" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.2" id="main-traits_magic_all-fake-fn-12.2" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.2" id="main-traits_magic_all-fake-fn-11.2" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdangerouslycurious-dangerously-curious-fn3-11-fn12-2-fn11-2-flavor">You have always been intrigued by magic, possibly because you were the child of a magician or priest. You often snuck into your parent's laboratory or shrine to tinker with spell components and magic devices, and frequently caused quite a bit of damage and headaches for your parent as a result.</Pair>
<Pair single="benefit" id="traitdangerouslycurious-dangerously-curious-fn3-11-fn12-2-fn11-2-benefit">You gain a +1 bonus on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks, and Use Magic Device is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdeepguardian-deep-guardian-fn14" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdeepguardian-deep-guardian-fn14"><Link to="/trait/deep_guardian">⮞</Link> Deep Guardian <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-14" id="main-traits_magic_all-fake-fn-14" data-hash-target to="main-traits_magic_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traitdeepguardian-deep-guardian-fn14-flavor">The subtle power of the deep places of the world flows within you, and grants you mastery of summoning beings of earth and stone.</Pair>
<Pair single="benefit" id="traitdeepguardian-deep-guardian-fn14-benefit">Any creature you conjure with a summon spell that has the earth subtype or a burrow speed gains a +1 morale bonus on attack rolls and a +1 enhancement bonus to Armor Class for the duration of the spell that summoned it.</Pair>
</Ability>
<Ability id="traitdemonblightreistance-demonblight-reistance-fn15" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdemonblightreistance-demonblight-reistance-fn15"><Link to="/trait/demonblight_reistance">⮞</Link> Demonblight Reistance <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-15" id="main-traits_magic_all-fake-fn-15" data-hash-target to="main-traits_magic_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdemonblightreistance-demonblight-reistance-fn15-flavor">Your exposure to powerful energies instilled in you a supernatural resistance to diseases, particularly those of a demonic bent.</Pair>
<Pair single="benefit" id="traitdemonblightreistance-demonblight-reistance-fn15-benefit">You gain a +3 trait bonus on saving throws against diseases you are exposed to while fighting one or more creatures of the <Link to="/subtype/demon">demon</Link> subtype, or while such a hostile creature is within 100 feet.</Pair>
</Ability>
<Ability id="traitdesperatefocus-desperate-focus-fn16" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperatefocus-desperate-focus-fn16"><Link to="/trait/desperate_focus">⮞</Link> Desperate Focus <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-16" id="main-traits_magic_all-fake-fn-16" data-hash-target to="main-traits_magic_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdesperatefocus-desperate-focus-fn16-flavor">You've often found yourself in situations where a lack of focus can lead to worse than a lost spell.</Pair>
<Pair single="benefit" id="traitdesperatefocus-desperate-focus-fn16-benefit">You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitdesperateresolve-desperate-resolve-fn3-12" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperateresolve-desperate-resolve-fn3-12"><Link to="/trait/desperate_resolve">⮞</Link> Desperate Resolve <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.12" id="main-traits_magic_all-fake-fn-3.12" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdesperateresolve-desperate-resolve-fn3-12-flavor">You are adept at casting spells even in the most precarious situations.</Pair>
<Pair single="benefit" id="traitdesperateresolve-desperate-resolve-fn3-12-benefit">You gain a +1 trait bonus on <Link to="/rule/concentration">concentration</Link> checks. This trait bonus increases to +4 when you are <Link to="/rule/grappled">grappled</Link>, pinned, in violent weather, or <Link to="/rule/entangled">entangled</Link>.</Pair>
</Ability>
<Ability id="traitdesperatespeed-desperate-speed-fn3-13" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperatespeed-desperate-speed-fn3-13"><Link to="/trait/desperate_speed">⮞</Link> Desperate Speed <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.13" id="main-traits_magic_all-fake-fn-3.13" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdesperatespeed-desperate-speed-fn3-13-flavor">Your eidolon excels at a movement type you do not possess.</Pair>
<Pair single="benefit" id="traitdesperatespeed-desperate-speed-fn3-13-benefit">Your eidolon receives a +5-foot enhancement bonus to one type of speed it has that you do not, such as a climb or swim speed. If your eidolon doesn't already possess such a mode of movement, you may apply this trait bonus later if it gains an evolution that grants it such a mode. Once this bonus is applied to a mode of movement, it can't be switched to another mode.</Pair>
</Ability>
<Ability id="traitdiabolicaldabbler-diabolical-dabbler-fn16-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdiabolicaldabbler-diabolical-dabbler-fn16-2"><Link to="/trait/diabolical_dabbler">⮞</Link> Diabolical Dabbler <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-16.2" id="main-traits_magic_all-fake-fn-16.2" data-hash-target to="main-traits_magic_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdiabolicaldabbler-diabolical-dabbler-fn16-2-benefit">Each <Link to="/template/fiendish">fiendish</Link> animal you conjure with any summon spell gains +1 hit point per hit die for the duration of the spell that summoned it.</Pair>
</Ability>
<Ability id="traitdistanceaptitude-distance-aptitude-fn17" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdistanceaptitude-distance-aptitude-fn17"><Link to="/trait/distance_aptitude">⮞</Link> Distance Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17" id="main-traits_magic_all-fake-fn-17" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdistanceaptitude-distance-aptitude-fn17-flavor">You were exposed to the magic of an <Link to="/magic-artifact/elf_gate">elf gate</Link>, portal, or some other form of distance-spanning magic when you were young. This contact with ancient world-spanning magic has granted you insight into means to extend the range of your own spells.</Pair>
<Pair single="benefit" id="traitdistanceaptitude-distance-aptitude-fn17-benefit"><p>Treat your caster level as 1 higher for the purposes of determining the range of spells and spell-like abilities.</p>
<p><strong>Suggested Characters:</strong> Elves, Numerians, Sarkorians.</p>
</Pair>
</Ability>
<Ability id="traitdomineering-domineering-fn17-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdomineering-domineering-fn17-2"><Link to="/trait/domineering">⮞</Link> Domineering <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.2" id="main-traits_magic_all-fake-fn-17.2" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdomineering-domineering-fn17-2-flavor">When you were young, you attracted a group of devoted companions thanks to your impressive talent, and the experience inspired in you a powerful self-assurance and air of superiority. Your confidence is so strong that others feel naturally compelled to follow your commands.</Pair>
<Pair single="benefit" id="traitdomineering-domineering-fn17-2-benefit"><p>Choose one 1st-level enchantment spell you are capable of casting. The DC of that spell increases by 1.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Irriseni, Mwangi.</p>
</Pair>
</Ability>
<Ability id="traitdraconicinfusion-draconic-infusion-fn18" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdraconicinfusion-draconic-infusion-fn18"><Link to="/trait/draconic_infusion">⮞</Link> Draconic Infusion <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-18" id="main-traits_magic_all-fake-fn-18" data-hash-target to="main-traits_magic_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdraconicinfusion-draconic-infusion-fn18-flavor">You were exposed to an artifact or other powerful magic that infused you with the power of dragons.</Pair>
<Pair single="benefit" id="traitdraconicinfusion-draconic-infusion-fn18-benefit">Choose the acid, cold, electricity, or fire spell descriptor when you take this trait. Once per day for every 2 caster levels you have (minimum once per day), when you cast a spell that has your chosen elemental descriptor, you can deal an additional 1d4 points of damage of that energy type to one target of that spell.</Pair>
</Ability>
<Ability id="traitearthtouched-earth-touched-fn3-14" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitearthtouched-earth-touched-fn3-14"><Link to="/trait/earth_touched">⮞</Link> Earth-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.14" id="main-traits_magic_all-fake-fn-3.14" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitearthtouched-earth-touched-fn3-14-flavor">You share an affinity with elemental earth.</Pair>
<Pair single="benefit" id="traitearthtouched-earth-touched-fn3-14-benefit">You gain DR 1/- against creatures and attacks with the earth type.</Pair>
</Ability>
<Ability id="traiteldritchauditor-eldritch-auditor-fn19" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchauditor-eldritch-auditor-fn19"><Link to="/trait/eldritch_auditor">⮞</Link> Eldritch Auditor <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-19" id="main-traits_magic_all-fake-fn-19" data-hash-target to="main-traits_magic_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traiteldritchauditor-eldritch-auditor-fn19-flavor">You are a magically adept merchant who has learned tricks to protect your own goods, or you serve a city as an impartial auditor who guards against arcane trickery in the bazaars.</Pair>
<Pair single="benefit" id="traiteldritchauditor-eldritch-auditor-fn19-benefit">You gain a +2 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks and Will saves to identify an item's true properties, such as against spells like <Link to="/spell/magic_aura">magic aura</Link>.</Pair>
</Ability>
<Ability id="traiteldritchdelver-eldritch-delver-fn3-15" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchdelver-eldritch-delver-fn3-15"><Link to="/trait/eldritch_delver">⮞</Link> Eldritch Delver <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.15" id="main-traits_magic_all-fake-fn-3.15" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traiteldritchdelver-eldritch-delver-fn3-15-flavor">You have an unquenchable thirst for knowledge about the world and desire to obtain it firsthand.</Pair>
<Pair single="benefit" id="traiteldritchdelver-eldritch-delver-fn3-15-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> and <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and you may treat your caster level as 1 level higher for all conjuration spells of the teleportation subschool.</Pair>
</Ability>
<Ability id="traitelementalaccident-elemental-accident-fn20" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitelementalaccident-elemental-accident-fn20"><Link to="/trait/elemental_accident">⮞</Link> Elemental Accident <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-20" id="main-traits_magic_all-fake-fn-20" data-hash-target to="main-traits_magic_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitelementalaccident-elemental-accident-fn20-flavor">A traumatic experience in your childhood, such as surviving a violent earthquake, fleeing a shipwreck, escaping a devastating fire, or getting struck by lightning, caused you to develop a fear of the corresponding element. You can instinctively shield yourself against elemental dangers of that type.</Pair>
<Pair single="benefit" id="traitelementalaccident-elemental-accident-fn20-benefit">Select acid, cold, electricity, or fire at character creation (once chosen, this damage type can't be changed). Once per day when you are subjected to an attack or effect that deals energy damage of that type, you can gain <Link to="/umr/resistance">resistance</Link> 10 against that damage type for 1 round as an <strong className="hl">immediate action</strong>. This resistance does not stack with any existing resistance you might have against that energy type.</Pair>
</Ability>
<Ability id="traitenduringmutagen-enduring-mutagen-fn3-16" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitenduringmutagen-enduring-mutagen-fn3-16"><Link to="/trait/enduring_mutagen">⮞</Link> Enduring Mutagen <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.16" id="main-traits_magic_all-fake-fn-3.16" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitenduringmutagen-enduring-mutagen-fn3-16-flavor">Because of special training, your unique body chemistry, or the uncovering of an alchemical secret, your mutagens last longer.</Pair>
<Pair single="benefit" id="traitenduringmutagen-enduring-mutagen-fn3-16-benefit">The bonuses and penalties granted by your mutagens last for 1 additional minute per alchemist level.</Pair>
</Ability>
<Ability id="traitfeyprotection-fey-protection-fn17-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfeyprotection-fey-protection-fn17-3"><Link to="/trait/fey_protection">⮞</Link> Fey Protection <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.3" id="main-traits_magic_all-fake-fn-17.3" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfeyprotection-fey-protection-fn17-3-flavor">Your birth brought an unexpected guest to your parents' home: a helpful fey who prophesied about your future and gave you a magical gift in exchange for your parents' hospitality, a cup of milk, and a drop of your blood.</Pair>
<Pair single="benefit" id="traitfeyprotection-fey-protection-fn17-3-benefit"><p>You gain a +1 trait bonus to AC against attacks of opportunities made by fey and a +1 trait bonus on saving throws against the effects of fey creatures.</p>
<p><strong>Suggested Characters:</strong> Drumans, <Link to="/rule/eldest">Eldest</Link> worshipers, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitflametouched-flame-touched-fn3-17" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitflametouched-flame-touched-fn3-17"><Link to="/trait/flame_touched">⮞</Link> Flame-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.17" id="main-traits_magic_all-fake-fn-3.17" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitflametouched-flame-touched-fn3-17-benefit">You share an affinity with elemental fire. You gain DR 1/- against creatures and attacks with the fire type.</Pair>
</Ability>
<Ability id="traitfocusedburn-focused-burn-fn3-18" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfocusedburn-focused-burn-fn3-18"><Link to="/trait/focused_burn">⮞</Link> Focused Burn <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.18" id="main-traits_magic_all-fake-fn-3.18" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfocusedburn-focused-burn-fn3-18-flavor">You know the secret of making punishing fire bombs.</Pair>
<Pair single="benefit" id="traitfocusedburn-focused-burn-fn3-18-benefit">Any bombs you have that deal fire damage deal 1 additional point of fire damage on a direct hit per 2d6 of fire damage normally dealt (minimum 1 point). This additional damage does not apply to the bomb's splash damage.</Pair>
</Ability>
<Ability id="traitfocusedmind-focused-mind-fn3-19-fn12-3-fn11-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfocusedmind-focused-mind-fn3-19-fn12-3-fn11-3"><Link to="/trait/focused_mind">⮞</Link> Focused Mind <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.19" id="main-traits_magic_all-fake-fn-3.19" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.3" id="main-traits_magic_all-fake-fn-12.3" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.3" id="main-traits_magic_all-fake-fn-11.3" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfocusedmind-focused-mind-fn3-19-fn12-3-fn11-3-flavor">Your childhood was dominated either by lessons of some sort (whether musical, academic, or other) or by a horrible home life that encouraged your ability to block out distractions and focus on the immediate task at hand.</Pair>
<Pair single="benefit" id="traitfocusedmind-focused-mind-fn3-19-fn12-3-fn11-3-benefit">You gain a +2 trait bonus on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitfortunate-fortunate-fn17-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfortunate-fortunate-fn17-4"><Link to="/trait/fortunate">⮞</Link> Fortunate <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.4" id="main-traits_magic_all-fake-fn-17.4" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfortunate-fortunate-fn17-4-flavor">You are blessed by fate.</Pair>
<Pair single="benefit" id="traitfortunate-fortunate-fn17-4-benefit"><p>Once per day when you use a spell or magic item with a randomized effect (such as <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/prismatic_spray">prismatic spray</Link>, or a <Link to="/magic-wondrous/bag_of_tricks_tan">bag of tricks</Link>), before you roll to determine the result, you may choose to roll twice and pick either result.</p>
<p><strong>Suggested Characters:</strong> Calistrians, harrow deck readers, Vudrani.</p>
</Pair>
</Ability>
<Ability id="traitgiftedadept-gifted-adept-fn3-20-fn11-4-fn12-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgiftedadept-gifted-adept-fn3-20-fn11-4-fn12-4"><Link to="/trait/gifted_adept">⮞</Link> Gifted Adept <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.20" id="main-traits_magic_all-fake-fn-3.20" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.4" id="main-traits_magic_all-fake-fn-11.4" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.4" id="main-traits_magic_all-fake-fn-12.4" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgiftedadept-gifted-adept-fn3-20-fn11-4-fn12-4-flavor">Your interest in magic was inspired by witnessing a spell being cast in a particularly dramatic method, perhaps even one that affected you physically or spiritually. This early exposure to magic has made it easier for you to work similar magic on your own.</Pair>
<Pair single="benefit" id="traitgiftedadept-gifted-adept-fn3-20-fn11-4-fn12-4-benefit">Pick one spell when you choose this trait - from this point on, whenever you cast that spell, its effects manifest at +1 caster level.</Pair>
</Ability>
<Ability id="traitgreaterlink-greater-link-fn3-21" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreaterlink-greater-link-fn3-21"><Link to="/trait/greater_link">⮞</Link> Greater Link <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.21" id="main-traits_magic_all-fake-fn-3.21" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgreaterlink-greater-link-fn3-21-flavor">The link between you and your eidolon is stronger than most.</Pair>
<Pair single="benefit" id="traitgreaterlink-greater-link-fn3-21-benefit">Your eidolon's current and maximum hit point totals are not reduced by 50% until you are separated by 110 feet or more. Your eidolon's current and maximum hit point totals are not reduced by 75% until you are separated by 1,100 feet or more. All other aspects of your life link class feature are unaffected.</Pair>
</Ability>
<Ability id="traitgreaterpurpose-greater-purpose-fn3-22" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreaterpurpose-greater-purpose-fn3-22"><Link to="/trait/greater_purpose">⮞</Link> Greater Purpose <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.22" id="main-traits_magic_all-fake-fn-3.22" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgreaterpurpose-greater-purpose-fn3-22-flavor">You are convinced you're alive to achieve a great purpose.</Pair>
<Pair single="benefit" id="traitgreaterpurpose-greater-purpose-fn3-22-benefit">You gain a +1 trait bonus on all saving throws to resist death effects and a +1 trait bonus on Constitution checks made to stabilize while <Link to="/misc/dying">dying</Link>.</Pair>
</Ability>
<Ability id="traitgreenblooded-green-blooded-fn21" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreenblooded-green-blooded-fn21"><Link to="/trait/green_blooded">⮞</Link> Green-Blooded <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-21" id="main-traits_magic_all-fake-fn-21" data-hash-target to="main-traits_magic_all-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgreenblooded-green-blooded-fn21-flavor">You are touched by the supernatural essence of nature, marking you since birth as something other than purely mortal.</Pair>
<Pair single="benefit" id="traitgreenblooded-green-blooded-fn21-benefit">Choose a single 0-level <Link to="/main/druid_spell">druid spell</Link>. You can cast this spell once per day as a spell-like ability with a caster level equal to your character level.</Pair>
</Ability>
<Ability id="traitguidingspirit-guiding-spirit-fn22" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitguidingspirit-guiding-spirit-fn22"><Link to="/trait/guiding_spirit">⮞</Link> Guiding Spirit <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-22" id="main-traits_magic_all-fake-fn-22" data-hash-target to="main-traits_magic_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitguidingspirit-guiding-spirit-fn22-flavor">Few understand the medium's willingness to harbor powerful spirits, but even if you aren't one of these talented few, you've always identified with their abilities. you've always felt that you were not alone in this world and that a mysterious guiding spirit watches over you with singular focus. You may have briefly glimpsed this strange spirit - or maybe you simply feel its presence in times of need.</Pair>
<Pair single="benefit" id="traitguidingspirit-guiding-spirit-fn22-benefit">Once per day as a <strong className="hl">swift action</strong>, you can look to your guiding spirit for advice. The next time you roll a d20 in that same round, roll twice and pick the better result. If one of these two rolls is a natural 20, you can use this ability again that same day.</Pair>
</Ability>
<Ability id="traithedgemagician-hedge-magician-fn3-23-fn12-5-fn11-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithedgemagician-hedge-magician-fn3-23-fn12-5-fn11-5"><Link to="/trait/hedge_magician">⮞</Link> Hedge Magician <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.23" id="main-traits_magic_all-fake-fn-3.23" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.5" id="main-traits_magic_all-fake-fn-12.5" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.5" id="main-traits_magic_all-fake-fn-11.5" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traithedgemagician-hedge-magician-fn3-23-fn12-5-fn11-5-flavor">You apprenticed for a time to an artisan who often built magic items, and he taught you many handy shortcuts and cost-saving techniques.</Pair>
<Pair single="benefit" id="traithedgemagician-hedge-magician-fn3-23-fn12-5-fn11-5-benefit">Whenever you craft a magic item, you reduce the required gp cost to make the item by 5%.</Pair>
</Ability>
<Ability id="traithexproof-hex-proof-fn23" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithexproof-hex-proof-fn23"><Link to="/trait/hex_proof">⮞</Link> Hex-Proof <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-23" id="main-traits_magic_all-fake-fn-23" data-hash-target to="main-traits_magic_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithexproof-hex-proof-fn23-benefit">You've dealt too often with <Link to="/rule/witchmarket">cruel fey magic</Link> and so gain a +2 bonus on Will saves against hexes and fey creatures' spells and spell-like abilities.</Pair>
</Ability>
<Ability id="traithorrifyingmind-horrifying-mind-fn24" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithorrifyingmind-horrifying-mind-fn24"><Link to="/trait/horrifying_mind">⮞</Link> Horrifying Mind <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-24" id="main-traits_magic_all-fake-fn-24" data-hash-target to="main-traits_magic_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithorrifyingmind-horrifying-mind-fn24-benefit">When a nonevil humanoid attempts to read your mind via a magical effect, the reader must attempt a Will save opposed by your Wisdom or Charisma check (your choice). If the reader fails this save, she is <Link to="/misc/shaken">shaken</Link> for 1 round. If she fails by 10 or more, she is instead frightened for 1 round, then shaken for 1 round.</Pair>
</Ability>
<Ability id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn25" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn25"><Link to="/trait/house_of_green_mothers_pupil">⮞</Link> House of Green Mothers Pupil <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-25" id="main-traits_magic_all-fake-fn-25" data-hash-target to="main-traits_magic_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn25-flavor">You studied at Anuli's center for druidic magic long enough to begin bonding with a familiar.</Pair>
<Pair single="benefit" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn25-benefit">You gain a +1 trait bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks. You may substitute this trait for <Link to="/feat/iron_will">Iron Will</Link> as the prerequisite for the <Link to="/feat/familiar_bond">Familiar Bond</Link> feat.</Pair>
</Ability>
<Ability id="traitinsistentbenefactor-insistent-benefactor-fn26" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinsistentbenefactor-insistent-benefactor-fn26"><Link to="/trait/insistent_benefactor">⮞</Link> Insistent Benefactor <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-26" id="main-traits_magic_all-fake-fn-26" data-hash-target to="main-traits_magic_all-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitinsistentbenefactor-insistent-benefactor-fn26-flavor">Pathfinders of different backgrounds don't always realize what's best for them, and you have perfected the art of forcing your magical boons on your allies.</Pair>
<Pair single="benefit" id="traitinsistentbenefactor-insistent-benefactor-fn26-benefit">Whenever you cast a harmless spell, you gain a +2 trait bonus on caster level checks to overcome spell resistance, and the saving throw DC of the spell (if any) is increased by 2.</Pair>
</Ability>
<Ability id="traitinternalcompass-internal-compass-fn27" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinternalcompass-internal-compass-fn27"><Link to="/trait/internal_compass">⮞</Link> Internal Compass <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-27" id="main-traits_magic_all-fake-fn-27" data-hash-target to="main-traits_magic_all-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitinternalcompass-internal-compass-fn27-benefit">You maintain a sense of direction, even on planes where direction is relative. If you are on a plane that has no analogue to north, you automatically know the direction toward the plane's major dominating feature (for instance, Pharasma's Spire in the Boneyard, or the sun in Nirvana). If there is no such dominating feature, you instead know the direction of the closest feature significant to one of the plane's divinities or demigods.</Pair>
</Ability>
<Ability id="traitinuredtodeath-inured-to-death-fn17-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinuredtodeath-inured-to-death-fn17-5"><Link to="/trait/inured_to_death">⮞</Link> Inured to Death <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.5" id="main-traits_magic_all-fake-fn-17.5" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitinuredtodeath-inured-to-death-fn17-5-flavor">You have been around death or the undead all of your life; you have become accustomed to its shadowy presence, and are no longer overwhelmed by it.</Pair>
<Pair single="benefit" id="traitinuredtodeath-inured-to-death-fn17-5-benefit"><p>You gain a +2 trait bonus on saving throws against death effects.</p>
<p><strong>Suggested Characters:</strong> Gebbites, Urgathoans, Ustalavs.</p>
</Pair>
</Ability>
<Ability id="traitkeenappraiser-keen-appraiser-fn17-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitkeenappraiser-keen-appraiser-fn17-6"><Link to="/trait/keen_appraiser">⮞</Link> Keen Appraiser <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.6" id="main-traits_magic_all-fake-fn-17.6" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitkeenappraiser-keen-appraiser-fn17-6-flavor">Your frequent handling of magic items, artifacts, and other enchanted goods has made you an expert at determining when something has magical properties.</Pair>
<Pair single="benefit" id="traitkeenappraiser-keen-appraiser-fn17-6-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks. In addition, you need only exceed the DC of an Appraise check by 2 in order to determine whether the item in question has magic properties (although success still does not grant knowledge of the magic item's abilities).</p>
<p><strong>Suggested Characters:</strong> Drumans, dwarves, Torag worshipers.</p>
</Pair>
</Ability>
<Ability id="traitkinbond-kin-bond-fn3-24" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitkinbond-kin-bond-fn3-24"><Link to="/trait/kin_bond">⮞</Link> Kin Bond <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.24" id="main-traits_magic_all-fake-fn-3.24" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitkinbond-kin-bond-fn3-24-flavor">The bond between you and a close sibling is nearly mystical.</Pair>
<Pair single="benefit" id="traitkinbond-kin-bond-fn3-24-benefit">Choose a single sibling with whom to share this bond. Once per day when you fail a saving throw while your sibling is within 30 feet, you may reroll that saving throw using your sibling's saving throw modifier. If you and the sibling are twins or otherwise part of a multiple birth, you gain a +2 trait bonus on the rerolled saving throw. Your sibling must be willing to grant you the reroll. If you fail the saving throw, you and your sibling are <Link to="/misc/dazed">dazed</Link> for 1 round.</Pair>
</Ability>
<Ability id="traitknowledgeablecaster-knowledgeable-caster-fn3-25" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitknowledgeablecaster-knowledgeable-caster-fn3-25"><Link to="/trait/knowledgeable_caster">⮞</Link> Knowledgeable Caster <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.25" id="main-traits_magic_all-fake-fn-3.25" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitknowledgeablecaster-knowledgeable-caster-fn3-25-benefit">Once per day when you cast a divination spell, you can cast that spell as if your caster level were 1 level higher in the appropriate class. You also gain a +1 trait bonus on any <Link to="/skill/knowledge">Knowledge</Link> checks associated with your sorcerer bloodline, if any.</Pair>
</Ability>
<Ability id="traitlamiasbane-lamias-bane-fn15-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlamiasbane-lamias-bane-fn15-2"><Link to="/trait/lamias_bane">⮞</Link> Lamia's Bane <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-15.2" id="main-traits_magic_all-fake-fn-15.2" data-hash-target to="main-traits_magic_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitlamiasbane-lamias-bane-fn15-2-flavor">You have been exposed to the magical energies of lamias in your past, or you have heard innumerable stories about your family's dealings with lamias, and you have built up a resistance to their charms.</Pair>
<Pair single="benefit" id="traitlamiasbane-lamias-bane-fn15-2-benefit">You gain a +1 trait bonus on saving throws against enchantment effects and a +2 trait bonus on saving throws against the spells and spell-like abilities of <Link to="/monster/lamia">lamias</Link>.</Pair>
</Ability>
<Ability id="traitlesseffort-less-effort-fn28" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlesseffort-less-effort-fn28"><Link to="/trait/less_effort">⮞</Link> Less Effort <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-28" id="main-traits_magic_all-fake-fn-28" data-hash-target to="main-traits_magic_all-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlesseffort-less-effort-fn28-benefit">Select one spell belonging to the abjuration or transmutation school on your spell list. When you cast that spell or it is cast on you, treat the caster level as 2 higher for the purpose of determining the duration.</Pair>
</Ability>
<Ability id="traitlinkedsurge-linked-surge-fn3-26" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlinkedsurge-linked-surge-fn3-26"><Link to="/trait/linked_surge">⮞</Link> Linked Surge <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.26" id="main-traits_magic_all-fake-fn-3.26" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlinkedsurge-linked-surge-fn3-26-benefit">Once per day, you may make a Strength- or Constitution-based ability check or skill check using you eidolon's ability score in place of your own. Your eidolon must be summoned and with 30 feet for you to use this trait.</Pair>
</Ability>
<Ability id="traitlowblow-low-blow-fn28-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlowblow-low-blow-fn28-2"><Link to="/trait/low_blow">⮞</Link> Low Blow <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-28.2" id="main-traits_magic_all-fake-fn-28.2" data-hash-target to="main-traits_magic_all-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlowblow-low-blow-fn28-2-benefit">When targeting a good-aligned creature with a spell or spell-like ability with the pain descriptor or that imposes a morale penalty, increase its effective caster level by 1. If you are of an evil alignment, increase the save DC of the effect by 1 as well.</Pair>
</Ability>
<Ability id="traitlunarbirth-lunar-birth-fn29" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlunarbirth-lunar-birth-fn29"><Link to="/trait/lunar_birth">⮞</Link> Lunar Birth <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-29" id="main-traits_magic_all-fake-fn-29" data-hash-target to="main-traits_magic_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitlunarbirth-lunar-birth-fn29-flavor">Born during a lunar eclipse, you were forever marked by the moon's mysterious and ancient magic.</Pair>
<Pair single="benefit" id="traitlunarbirth-lunar-birth-fn29-benefit">You gain a +1 trait bonus on saving throws against the spells and spell-like abilities cast by humans.</Pair>
</Ability>
<Ability id="traitmagiccrafter-magic-crafter-fn3-27" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagiccrafter-magic-crafter-fn3-27"><Link to="/trait/magic_crafter">⮞</Link> Magic Crafter <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.27" id="main-traits_magic_all-fake-fn-3.27" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagiccrafter-magic-crafter-fn3-27-flavor">Your early magical training involved study of the properties and creation of magic items.</Pair>
<Pair single="benefit" id="traitmagiccrafter-magic-crafter-fn3-27-benefit">You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks and a +1 bonus on any <Link to="/skill/craft">Craft</Link> checks attempted while making magic items.</Pair>
</Ability>
<Ability id="traitmagicalflair-magical-flair-fn17-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicalflair-magical-flair-fn17-7"><Link to="/trait/magical_flair">⮞</Link> Magical Flair <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.7" id="main-traits_magic_all-fake-fn-17.7" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicalflair-magical-flair-fn17-7-flavor">At a young age, you saw a witch burned by fearful peasants, druids falsely punished for demon worship, or another sort of spellcaster persecuted for merely practicing her dubious craft. Intent on not suffering the same fate, you approach spellcasting with a powerful desire to control how your magic is perceived by others.</Pair>
<Pair single="benefit" id="traitmagicalflair-magical-flair-fn17-7-benefit"><p>You can cause spells you cast to manifest with strange visual, auditory, or olfactory features that make them hard to identify. Choose a school of magic. The <Link to="/skill/spellcraft">Spellcraft</Link> DC to identify spells you cast from that school of magic increases by 2. Onlookers who fail a Spellcraft check to identify your spell by 2 or less incorrectly identify the spell as another randomly selected spell of the same school and level.</p>
<p><strong>Suggested Characters:</strong> Gnomes, Razmir worshipers, witches.</p>
</Pair>
</Ability>
<Ability id="traitmagicalknack-magical-knack-fn3-28-fn12-6-fn11-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicalknack-magical-knack-fn3-28-fn12-6-fn11-6"><Link to="/trait/magical_knack">⮞</Link> Magical Knack <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.28" id="main-traits_magic_all-fake-fn-3.28" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.6" id="main-traits_magic_all-fake-fn-12.6" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.6" id="main-traits_magic_all-fake-fn-11.6" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicalknack-magical-knack-fn3-28-fn12-6-fn11-6-flavor">You were raised, either wholly or in part, by a magical creature, either after it found you abandoned in the woods or because your parents often left you in the care of a magical minion. This constant exposure to magic has made its mysteries easy for you to understand, even when you turn your mind to other devotions and tasks.</Pair>
<Pair single="benefit" id="traitmagicalknack-magical-knack-fn3-28-fn12-6-fn11-6-benefit">Pick a class when you gain this trait - your caster level in that class gains a +2 trait bonus as long as this bonus doesn't raise your caster level above your current Hit Dice.</Pair>
</Ability>
<Ability id="traitmagicallineage-magical-lineage-fn3-29-fn11-7-fn12-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicallineage-magical-lineage-fn3-29-fn11-7-fn12-7"><Link to="/trait/magical_lineage">⮞</Link> Magical Lineage <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.29" id="main-traits_magic_all-fake-fn-3.29" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.7" id="main-traits_magic_all-fake-fn-11.7" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.7" id="main-traits_magic_all-fake-fn-12.7" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicallineage-magical-lineage-fn3-29-fn11-7-fn12-7-flavor">One of your parents was a gifted spellcaster who not only used metamagic often, but also developed many magical items and perhaps even a new spell or two - and you have inherited a fragment of this greatness.</Pair>
<Pair single="benefit" id="traitmagicallineage-magical-lineage-fn3-29-fn11-7-fn12-7-benefit">Pick one spell when you choose this trait. When you apply <Link to="/rule/metamagic_feats">metamagic feats</Link> to this spell that add at least 1 level to the spell, treat its actual level as 1 lower for determining the spell's final adjusted level.</Pair>
</Ability>
<Ability id="traitmagicaltalent-magical-talent-fn3-30-fn12-8-fn11-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicaltalent-magical-talent-fn3-30-fn12-8-fn11-8"><Link to="/trait/magical_talent">⮞</Link> Magical Talent <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.30" id="main-traits_magic_all-fake-fn-3.30" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.8" id="main-traits_magic_all-fake-fn-12.8" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.8" id="main-traits_magic_all-fake-fn-11.8" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicaltalent-magical-talent-fn3-30-fn12-8-fn11-8-flavor">Either from inborn talent, the whimsy of the gods, or obsessive study of strange tomes, you have mastered the use of a cantrip.</Pair>
<Pair single="benefit" id="traitmagicaltalent-magical-talent-fn3-30-fn12-8-fn11-8-benefit">Choose a 0-level spell. You may cast that spell once per day as a spell-like ability. This spell-like ability is cast at your highest caster level gained; if you have no caster level, it functions at CL 1st. The spell-like ability's save DC is Charisma-based.</Pair>
</Ability>
<Ability id="traitmalleablemagic-malleable-magic-fn3-31" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmalleablemagic-malleable-magic-fn3-31"><Link to="/trait/malleable_magic">⮞</Link> Malleable Magic <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.31" id="main-traits_magic_all-fake-fn-3.31" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmalleablemagic-malleable-magic-fn3-31-benefit">Once per day as a <strong className="hl">swift action</strong>, you can lose a single 1st-, 2nd- or 3rd-level magus spell to regain 1 <em>arcane pool</em> point. You can't exceed the maximum number of <em>arcane pool</em> points in your <em>arcane pool</em> by using this trait.</Pair>
</Ability>
<Ability id="traitmathematicalprodigy-mathematical-prodigy-fn3-32-fn11-9-fn12-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmathematicalprodigy-mathematical-prodigy-fn3-32-fn11-9-fn12-9"><Link to="/trait/mathematical_prodigy">⮞</Link> Mathematical Prodigy <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.32" id="main-traits_magic_all-fake-fn-3.32" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.9" id="main-traits_magic_all-fake-fn-11.9" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.9" id="main-traits_magic_all-fake-fn-12.9" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmathematicalprodigy-mathematical-prodigy-fn3-32-fn11-9-fn12-9-flavor">Mathematics has always come easily for you, and you have always been able to "see the math" in the physical and magical world.</Pair>
<Pair single="benefit" id="traitmathematicalprodigy-mathematical-prodigy-fn3-32-fn11-9-fn12-9-benefit">You gain a +1 bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmechanicalaptitude-mechanical-aptitude-fn30" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmechanicalaptitude-mechanical-aptitude-fn30"><Link to="/trait/mechanical_aptitude">⮞</Link> Mechanical Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-30" id="main-traits_magic_all-fake-fn-30" data-hash-target to="main-traits_magic_all-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmechanicalaptitude-mechanical-aptitude-fn30-flavor">You have learned much from tinkering with ancient technology from the Jistka Imperium.</Pair>
<Pair single="benefit" id="traitmechanicalaptitude-mechanical-aptitude-fn30-benefit">Choose one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, or <Link to="/skill/use_magic_device">Use Magic Device</Link>. Once per day, you can reroll a check with that skill before the outcome of the check is revealed. You must take the second result, even if it is worse.</Pair>
</Ability>
<Ability id="traitmeticulousconcoction-meticulous-concoction-fn3-33" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmeticulousconcoction-meticulous-concoction-fn3-33"><Link to="/trait/meticulous_concoction">⮞</Link> Meticulous Concoction <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.33" id="main-traits_magic_all-fake-fn-3.33" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmeticulousconcoction-meticulous-concoction-fn3-33-flavor">Your meticulous carefulness makes your bombs and extracts more potent.</Pair>
<Pair single="benefit" id="traitmeticulousconcoction-meticulous-concoction-fn3-33-benefit">Once per day, you can either add a +2 trait bonus to the save DC for one bomb you throw or extend the duration of one extract you imbibe by 2 rounds. Extracts with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
<Ability id="traitmutanteye-mutant-eye-fn17-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmutanteye-mutant-eye-fn17-8"><Link to="/trait/mutant_eye">⮞</Link> Mutant Eye <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.8" id="main-traits_magic_all-fake-fn-17.8" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmutanteye-mutant-eye-fn17-8-flavor">One of your parents was exposed to uncontrolled magic or arcane pollution before you were born, causing you to develop a minor mutation that has marked you as different all your life.</Pair>
<Pair single="benefit" id="traitmutanteye-mutant-eye-fn17-8-benefit"><p>You have a third eye on your forehead. As long as it is uncovered and open, you can get a clearer sense of the emotions of those you see, granting you a +2 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks that increases to +4 on checks to notice whether a character is under a mind-affecting effect. However, the eye is unsettling, and you take a -1 penalty on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/diplomacy">Diplomacy</Link> checks against humanoids who can see it.</p>
<p><strong>Suggested Characters:</strong> Lamashtans, Mana Wastes natives, Nexians.</p>
</Pair>
</Ability>
<Ability id="traitoutcastsintuition-outcasts-intuition-fn3-34" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoutcastsintuition-outcasts-intuition-fn3-34"><Link to="/trait/outcasts_intuition">⮞</Link> Outcast's Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.34" id="main-traits_magic_all-fake-fn-3.34" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoutcastsintuition-outcasts-intuition-fn3-34-flavor">You are able to sense the motives of others and use that sense to bolster your magic against dispelling.</Pair>
<Pair single="benefit" id="traitoutcastsintuition-outcasts-intuition-fn3-34-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you. In addition, your caster level is treated as 1 level higher for the purposes of any attempts to dispel your magic.</Pair>
</Ability>
<Ability id="traitouterdragonblood-outer-dragon-blood-fn29-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitouterdragonblood-outer-dragon-blood-fn29-2"><Link to="/trait/outer_dragon_blood">⮞</Link> Outer Dragon Blood <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-29.2" id="main-traits_magic_all-fake-fn-29.2" data-hash-target to="main-traits_magic_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitouterdragonblood-outer-dragon-blood-fn29-2-flavor">The blood of outer dragons courses through your veins, and you've inherited a portion of their magic.</Pair>
<Pair single="benefit" id="traitouterdragonblood-outer-dragon-blood-fn29-2-benefit"><p>You gain Draconic as a bonus language. In addition, if you are a sorcerer with the <Link to="/sorcbloodline/draconic">draconic</Link> bloodline, you can select one of the <Link to="/family/outer_dragon">outer dragon</Link> types for your bloodline powers; this affects your resistances and the type of energy damage dealt by a number of your abilities.</p>
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
<Pair single id="traitoutsiderties-outsider-ties-fn1-2"><Link to="/trait/outsider_ties">⮞</Link> Outsider Ties <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-1.2" id="main-traits_magic_all-fake-fn-1.2" data-hash-target to="main-traits_magic_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoutsiderties-outsider-ties-fn1-2-flavor">An outsider visited you at a young age, and you have had a significant affinity with that type of outsider ever since.</Pair>
<Pair single="benefit" id="traitoutsiderties-outsider-ties-fn1-2-benefit">Choose a subtype of outsider, such as <Link to="/subtype/angel">angel</Link> or <Link to="/subtype/elemental">elemental</Link>. When you summon an outsider of that subtype via <Link to="/spell/summon_monster">summon monster</Link>, <Link to="/spell/planar_ally">planar ally</Link>, <Link to="/spell/planar_binding">planar binding</Link>, or similar spells and abilities, the summoned creature gains a number of temporary hit points equal to the level of spell used to summon it.</Pair>
</Ability>
<Ability id="traitoverwhelmingbeauty-overwhelming-beauty-fn31" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoverwhelmingbeauty-overwhelming-beauty-fn31"><Link to="/trait/overwhelming_beauty">⮞</Link> Overwhelming Beauty <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-31" id="main-traits_magic_all-fake-fn-31" data-hash-target to="main-traits_magic_all-fake-fn-31-target">31</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoverwhelmingbeauty-overwhelming-beauty-fn31-flavor">Your wiles are particularly potent against people who share a race with you, as your beauty is often held up as a symbol of perfection.</Pair>
<Pair single="benefit" id="traitoverwhelmingbeauty-overwhelming-beauty-fn31-benefit">The DC of your mind-affecting effects increases by 1 against creatures that have at least one of the same subtypes as you.</Pair>
</Ability>
<Ability id="traitpartialprotege-partial-protege-fn3-35" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpartialprotege-partial-protege-fn3-35"><Link to="/trait/partial_protege">⮞</Link> Partial Protege <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.35" id="main-traits_magic_all-fake-fn-3.35" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitpartialprotege-partial-protege-fn3-35-flavor">You are adept at disguising your true talents.</Pair>
<Pair single="benefit" id="traitpartialprotege-partial-protege-fn3-35-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks made to emulate a class feature.</Pair>
</Ability>
<Ability id="traitpathfindersfocus-pathfinders-focus-fn26-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpathfindersfocus-pathfinders-focus-fn26-2"><Link to="/trait/pathfinders_focus">⮞</Link> Pathfinder's Focus <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-26.2" id="main-traits_magic_all-fake-fn-26.2" data-hash-target to="main-traits_magic_all-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitpathfindersfocus-pathfinders-focus-fn26-2-benefit">You can select a magnetic compass for your <em>arcane bond</em> class feature; this compass is nonmagical, but you can later spend 250 gp to upgrade it into a <Link to="/magic-wondrous/wayfinder">wayfinder</Link>. Choosing this trait allows you to upgrade this wayfinder to a variant or unique wayfinder per the normal rules for <Link to="/rule/adding_new_abilities">improving magic items</Link>. A bonded wayfinder must be held in your hand to grant the benefits of being a <em>bonded object.</em></Pair>
</Ability>
<Ability id="traitperfectionistsbrew-perfectionists-brew-fn3-36" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitperfectionistsbrew-perfectionists-brew-fn3-36"><Link to="/trait/perfectionists_brew">⮞</Link> Perfectionist's Brew <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.36" id="main-traits_magic_all-fake-fn-3.36" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitperfectionistsbrew-perfectionists-brew-fn3-36-flavor">You know that potion recipes should be followed with exact precision.</Pair>
<Pair single="benefit" id="traitperfectionistsbrew-perfectionists-brew-fn3-36-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks and on <Link to="/skill/spellcraft">Spellcraft</Link> checks made to brew potions.</Pair>
</Ability>
<Ability id="traitplanarescapee-planar-escapee-fn20-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitplanarescapee-planar-escapee-fn20-2"><Link to="/trait/planar_escapee">⮞</Link> Planar Escapee <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-20.2" id="main-traits_magic_all-fake-fn-20.2" data-hash-target to="main-traits_magic_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitplanarescapee-planar-escapee-fn20-2-flavor">You were a prisoner or slave in a city on the Elemental Planes, such as the cruel efreet's City of Brass on the Plane of Fire or the dwarven city of Urgashaz on the Plane of Earth. When you escaped that city, you had to use your captors' weapons and magic against them in addition to your sheer wits, and you learned how to find weaknesses in their natural resistances.</Pair>
<Pair single="benefit" id="traitplanarescapee-planar-escapee-fn20-2-benefit">At character creation, select acid, cold, electricity, or fire (once chosen, this selection can't be changed). Once per day as a <strong className="hl">swift action</strong>, you can choose a single creature that is within 30 feet of you and within your line of sight; treat that creature's <Link to="/umr/resistance">resistance</Link> against your chosen energy as 5 lower than its normal energy resistance for 1 round. This ability has no effect if the creature has no resistance to the chosen energy or if the creature has <Link to="/umr/immunity">immunity</Link> to the chosen energy.</Pair>
</Ability>
<Ability id="traitpossessed-possessed-fn3-37" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpossessed-possessed-fn3-37"><Link to="/trait/possessed">⮞</Link> Possessed <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.37" id="main-traits_magic_all-fake-fn-3.37" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitpossessed-possessed-fn3-37-flavor">You were, or are, possessed in some way by another entity that grants you occasional access to its knowledge.</Pair>
<Pair single="benefit" id="traitpossessed-possessed-fn3-37-benefit">Once per day, you can attempt a <Link to="/skill/knowledge">Knowledge</Link> check of your choice even if you are not trained in that skill and it is not usually possible to use that skill untrained. If you can normally use that skill untrained, you gain a +2 trait bonus on the check.</Pair>
</Ability>
<Ability id="traitpragmaticactivator-pragmatic-activator-fn3-38" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpragmaticactivator-pragmatic-activator-fn3-38"><Link to="/trait/pragmatic_activator">⮞</Link> Pragmatic Activator <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.38" id="main-traits_magic_all-fake-fn-3.38" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitpragmaticactivator-pragmatic-activator-fn3-38-flavor">While some figure out how to use magical devices with stubborn resolve, your approach is more pragmatic.</Pair>
<Pair single="benefit" id="traitpragmaticactivator-pragmatic-activator-fn3-38-benefit">You may use your Intelligence modifier when making <Link to="/skill/use_magic_device">Use Magic Device</Link> checks instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitprecisetreatment-precise-treatment-fn3-39" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitprecisetreatment-precise-treatment-fn3-39"><Link to="/trait/precise_treatment">⮞</Link> Precise Treatment <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.39" id="main-traits_magic_all-fake-fn-3.39" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitprecisetreatment-precise-treatment-fn3-39-flavor">You treat others with a clear and calculating intellect.</Pair>
<Pair single="benefit" id="traitprecisetreatment-precise-treatment-fn3-39-benefit">You gain a +1 trait bonus on all <Link to="/skill/heal">Heal</Link> checks, and you may use your Intelligence modifier when making Heal checks instead of your Wisdom modifier.</Pair>
</Ability>
<Ability id="traitradianthealing-radiant-healing-fn7-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitradianthealing-radiant-healing-fn7-2"><Link to="/trait/radiant_healing">⮞</Link> Radiant Healing <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-7.2" id="main-traits_magic_all-fake-fn-7.2" data-hash-target to="main-traits_magic_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitradianthealing-radiant-healing-fn7-2-flavor">You've learned how to infuse your healing magic with lingering traces of light.</Pair>
<Pair single="benefit" id="traitradianthealing-radiant-healing-fn7-2-benefit">Whenever you cast a spell from the conjuration (healing) school that has a casting time of a standard action, you can extend its casting time to a <strong className="hl">full-round action</strong> to imbue the target with light, as per <Link to="/spell/light">light</Link>, with a duration of 1 round per caster level.</Pair>
</Ability>
<Ability id="traitreluctantapprentice-reluctant-apprentice-fn3-40" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitreluctantapprentice-reluctant-apprentice-fn3-40"><Link to="/trait/reluctant_apprentice">⮞</Link> Reluctant Apprentice <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.40" id="main-traits_magic_all-fake-fn-3.40" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitreluctantapprentice-reluctant-apprentice-fn3-40-flavor">Your early training grants you knowledge of the arcane.</Pair>
<Pair single="benefit" id="traitreluctantapprentice-reluctant-apprentice-fn3-40-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks, and are considered trained in that skill even if you have no ranks in it.</Pair>
</Ability>
<Ability id="traitresilientcaster-resilient-caster-fn3-41" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitresilientcaster-resilient-caster-fn3-41"><Link to="/trait/resilient_caster">⮞</Link> Resilient Caster <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.41" id="main-traits_magic_all-fake-fn-3.41" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitresilientcaster-resilient-caster-fn3-41-flavor">Your great force of will makes your magic harder to dispel.</Pair>
<Pair single="benefit" id="traitresilientcaster-resilient-caster-fn3-41-benefit">Your caster level is treated as 1 level higher whenever someone attempts to dispel one of your spells.</Pair>
</Ability>
<Ability id="traitrivethunadherent-rivethun-adherent-fn22-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitrivethunadherent-rivethun-adherent-fn22-2"><Link to="/trait/rivethun_adherent">⮞</Link> Rivethun Adherent <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-22.2" id="main-traits_magic_all-fake-fn-22.2" data-hash-target to="main-traits_magic_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitrivethunadherent-rivethun-adherent-fn22-2-flavor"><Link to="/rule/rivethun">Rivethun</Link> is an ancient tradition of dwarven shamans who learned to listen to and affect the world around them by reflecting on the friction between body and spirit. As someone who feels a similar friction between your inner spirit and physical body, you have picked up some old rivethun meditation techniques, even if you aren't a dwarf.</Pair>
<Pair single="benefit" id="traitrivethunadherent-rivethun-adherent-fn22-2-benefit">While you suffer a physical ailment, such as disease, poison, or ability damage to Strength, Dexterity, or Constitution (but not including hit point damage), you gain a +2 trait bonus on Will saving throws. While you suffer a mental ailment, including insanity, any charm or compulsion effect, or ability damage to Intelligence, Wisdom, or Charisma, you gain a +2 trait bonus on Fortitude saving throws.</Pair>
</Ability>
<Ability id="traitscholaroftheanalects-scholar-of-the-analects-fn32" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitscholaroftheanalects-scholar-of-the-analects-fn32"><Link to="/trait/scholar_of_the_analects">⮞</Link> Scholar of the Analects <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-32" id="main-traits_magic_all-fake-fn-32" data-hash-target to="main-traits_magic_all-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitscholaroftheanalects-scholar-of-the-analects-fn32-flavor">You studied various Analects of Aroden from a young age and became skilled at using magic written by others.</Pair>
<Pair single="benefit" id="traitscholaroftheanalects-scholar-of-the-analects-fn32-benefit">You can cast <Link to="/spell/read_magic">read magic</Link> as a spell-like ability three times per day, using your character level as your caster level.</Pair>
</Ability>
<Ability id="traitscornedbymagic-scorned-by-magic-fn17-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitscornedbymagic-scorned-by-magic-fn17-9"><Link to="/trait/scorned_by_magic">⮞</Link> Scorned by Magic <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-17.9" id="main-traits_magic_all-fake-fn-17.9" data-hash-target to="main-traits_magic_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitscornedbymagic-scorned-by-magic-fn17-9-flavor">As a youth, you assisted a wise woman or witch doctor who removed magical maladies from the needy and was present for the breaking of many spells - or perhaps you passed through a dead magic zone. Whatever the cause, magic seems a little more reluctant to affect you than others.</Pair>
<Pair single="benefit" id="traitscornedbymagic-scorned-by-magic-fn17-9-benefit"><p>Reduce the caster level of spells and spell-like abilities cast upon you by 1 for the purpose of attempting dispel checks and overcoming your spell resistance (if any).</p>
<p><strong>Suggested Characters:</strong> Kellids, Mana Wastes natives, Shoanti.</p>
</Pair>
</Ability>
<Ability id="traitsecretscrolls-secret-scrolls-fn33" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsecretscrolls-secret-scrolls-fn33"><Link to="/trait/secret_scrolls">⮞</Link> Secret Scrolls <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-33" id="main-traits_magic_all-fake-fn-33" data-hash-target to="main-traits_magic_all-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsecretscrolls-secret-scrolls-fn33-flavor">You were inducted into a secret magical tradition such as the Esoteric Order of the Palatine Eye.</Pair>
<Pair single="benefit" id="traitsecretscrolls-secret-scrolls-fn33-benefit">You can cast <Link to="/spell/read_magic">read magic</Link> once per day as a spell-like ability, and gain a +1 trait bonus on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks to activate scrolls you cannot normally use.</Pair>
</Ability>
<Ability id="traitselftaughtscholar-self-taught-scholar-fn3-42" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitselftaughtscholar-self-taught-scholar-fn3-42"><Link to="/trait/self_taught_scholar">⮞</Link> Self-Taught Scholar <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.42" id="main-traits_magic_all-fake-fn-3.42" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitselftaughtscholar-self-taught-scholar-fn3-42-flavor">Being self-taught has made it necessary for you to scour all documentation you can get your hands on.</Pair>
<Pair single="benefit" id="traitselftaughtscholar-self-taught-scholar-fn3-42-benefit">You gain a +1 trait bonus on <Link to="/skill/linguistics">Linguistics</Link> checks to decipher unfamiliar languages, and Linguistics is always a class skill for you. In addition, you gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks made to decipher the writing on a scroll.</Pair>
</Ability>
<Ability id="traitshroudedcasting-shrouded-casting-fn3-43" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitshroudedcasting-shrouded-casting-fn3-43"><Link to="/trait/shrouded_casting">⮞</Link> Shrouded Casting <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.43" id="main-traits_magic_all-fake-fn-3.43" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitshroudedcasting-shrouded-casting-fn3-43-flavor">You have learned the secret to casting some spells without lesser material components.</Pair>
<Pair single="benefit" id="traitshroudedcasting-shrouded-casting-fn3-43-benefit">Choose one school of magic when you pick this trait. You can cast spells from that school as if you had the <Link to="/feat/eschew_materials">Eschew Materials</Link> feat.</Pair>
</Ability>
<Ability id="traitskeptic-skeptic-fn3-44-fn12-10-fn11-10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitskeptic-skeptic-fn3-44-fn12-10-fn11-10"><Link to="/trait/skeptic">⮞</Link> Skeptic <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.44" id="main-traits_magic_all-fake-fn-3.44" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-12.10" id="main-traits_magic_all-fake-fn-12.10" data-hash-target to="main-traits_magic_all-fake-fn-12-target">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-11.10" id="main-traits_magic_all-fake-fn-11.10" data-hash-target to="main-traits_magic_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitskeptic-skeptic-fn3-44-fn12-10-fn11-10-flavor">Growing up, you were always around magical effects to the extent that you realized much of it was mere smoke and mirrors.</Pair>
<Pair single="benefit" id="traitskeptic-skeptic-fn3-44-fn12-10-fn11-10-benefit">You gain a +2 trait bonus on all saving throws against illusions.</Pair>
</Ability>
<Ability id="traitsparkofcreation-spark-of-creation-fn34" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsparkofcreation-spark-of-creation-fn34"><Link to="/trait/spark_of_creation">⮞</Link> Spark of Creation <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-34" id="main-traits_magic_all-fake-fn-34" data-hash-target to="main-traits_magic_all-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsparkofcreation-spark-of-creation-fn34-flavor">You have always had a knack for making useful things, and your talent as an artisan was evident even at an early age.</Pair>
<Pair single="benefit" id="traitsparkofcreation-spark-of-creation-fn34-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> checks, and the cost of creating magic items is reduced by 5%.</Pair>
</Ability>
<Ability id="traitspiritualattachment-spiritual-attachment-fn22-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitspiritualattachment-spiritual-attachment-fn22-3"><Link to="/trait/spiritual_attachment">⮞</Link> Spiritual Attachment <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-22.3" id="main-traits_magic_all-fake-fn-22.3" data-hash-target to="main-traits_magic_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitspiritualattachment-spiritual-attachment-fn22-3-flavor">The union between spirits and spiritualists is one of the strongest (and strangest) bonds shared between the mortal realm and the spirit world. Spiritualists can use the knowledge of their linked phantoms to better negotiate with other spirits. Whether you're a spiritualist or not, you've always had a similar knack when it comes to interactions with the spirit world.</Pair>
<Pair single="benefit" id="traitspiritualattachment-spiritual-attachment-fn22-3-benefit">You gain a +4 trait bonus on checks to notice <Link to="/rule/haunts">haunts</Link>, and when interacting with someone who is possessed by an incorporeal undead creature, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks against that target.</Pair>
</Ability>
<Ability id="traitstabbingspells-stabbing-spells-fn32-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstabbingspells-stabbing-spells-fn32-2"><Link to="/trait/stabbing_spells">⮞</Link> Stabbing Spells <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-32.2" id="main-traits_magic_all-fake-fn-32.2" data-hash-target to="main-traits_magic_all-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitstabbingspells-stabbing-spells-fn32-2-flavor">Aroden wrote much about ways to use weapons to enhance magic's effectiveness, and you have taken to heart the insights gleaned from his words.</Pair>
<Pair single="benefit" id="traitstabbingspells-stabbing-spells-fn32-2-benefit">Whenever you strike a foe with a weapon, you gain a +2 trait bonus on caster level checks to overcome that foe's spell resistance until the end of your next turn.</Pair>
</Ability>
<Ability id="traitstormtouched-storm-touched-fn3-45" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstormtouched-storm-touched-fn3-45"><Link to="/trait/storm_touched">⮞</Link> Storm-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.45" id="main-traits_magic_all-fake-fn-3.45" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitstormtouched-storm-touched-fn3-45-flavor">You share an affinity with elemental lightning.</Pair>
<Pair single="benefit" id="traitstormtouched-storm-touched-fn3-45-benefit">You gain DR 1/- against creatures and attacks with the electricity type.</Pair>
</Ability>
<Ability id="traitstrengthforetold-strength-foretold-fn3-46" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstrengthforetold-strength-foretold-fn3-46"><Link to="/trait/strength_foretold">⮞</Link> Strength Foretold <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.46" id="main-traits_magic_all-fake-fn-3.46" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitstrengthforetold-strength-foretold-fn3-46-flavor">You can channel extra power into one of your bloodline spells.</Pair>
<Pair single="benefit" id="traitstrengthforetold-strength-foretold-fn3-46-benefit">Once per day as a <strong className="hl">free action</strong>, you gain a +1 trait bonus to the DC of the saving throw of one of your bonus bloodline spells.</Pair>
</Ability>
<Ability id="traitsunblessed-sun-blessed-fn29-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsunblessed-sun-blessed-fn29-3"><Link to="/trait/sun_blessed">⮞</Link> Sun-Blessed <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-29.3" id="main-traits_magic_all-fake-fn-29.3" data-hash-target to="main-traits_magic_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsunblessed-sun-blessed-fn29-3-flavor">Your birth came at a time when the sun was auspiciously aligned with your birth sign. As a result, you have a natural affinity for light and life.</Pair>
<Pair single="benefit" id="traitsunblessed-sun-blessed-fn29-3-benefit">Whenever you're affected by a healing effect that would heal more hit points than your maximum hit point total, you gain the excess healing as <Link to="/rule/temporary_hit_points">temporary hit points</Link>. You can gain up to a number of temporary hit points per day equal to your character level in this way. These temporary hit points last for 1 minute.</Pair>
</Ability>
<Ability id="traittenaciousshifting-tenacious-shifting-fn3-47" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittenaciousshifting-tenacious-shifting-fn3-47"><Link to="/trait/tenacious_shifting">⮞</Link> Tenacious Shifting <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.47" id="main-traits_magic_all-fake-fn-3.47" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittenaciousshifting-tenacious-shifting-fn3-47-flavor">You've discovered the secret of stable transmutations.</Pair>
<Pair single="benefit" id="traittenaciousshifting-tenacious-shifting-fn3-47-benefit">Any transmutation spell you cast upon yourself has its duration increased by 2 rounds. Transmutation spells with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
<Ability id="traittheoreticalmagician-theoretical-magician-fn16-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittheoreticalmagician-theoretical-magician-fn16-3"><Link to="/trait/theoretical_magician">⮞</Link> Theoretical Magician <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-16.3" id="main-traits_magic_all-fake-fn-16.3" data-hash-target to="main-traits_magic_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittheoreticalmagician-theoretical-magician-fn16-3-flavor">You've studied more magic than what you can actually perform.</Pair>
<Pair single="benefit" id="traittheoreticalmagician-theoretical-magician-fn16-3-benefit">You gain a +2 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, or a +3 bonus if you aren't a spellcaster.</Pair>
</Ability>
<Ability id="traittransmuterofkorada-transmuter-of-korada-fn34-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittransmuterofkorada-transmuter-of-korada-fn34-2"><Link to="/trait/transmuter_of_korada">⮞</Link> Transmuter of Korada <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-34.2" id="main-traits_magic_all-fake-fn-34.2" data-hash-target to="main-traits_magic_all-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittransmuterofkorada-transmuter-of-korada-fn34-2-flavor">You learned the secrets of transmutation from a follower of the empyreal lord <Link to="/faith/korada">Korada</Link>.</Pair>
<Pair single="benefit" id="traittransmuterofkorada-transmuter-of-korada-fn34-2-benefit"><p>Whenever you cast a spell from the transmutation school, its effects manifest at +1 caster level.</p>
<p>Additionally, select one of the following transmutation spells: <Link to="/spell/bears_endurance">bear's endurance</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/foxs_cunning">fox's cunning</Link>, or <Link to="/spell/owls_wisdom">owl's wisdom</Link>. Once per day when you cast that spell, its duration is doubled. A spell affected by this trait cannot be modified further by the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat or similar abilities.</p>
</Pair>
</Ability>
<Ability id="traittwinnedpresence-twinned-presence-fn3-48" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittwinnedpresence-twinned-presence-fn3-48"><Link to="/trait/twinned_presence">⮞</Link> Twinned Presence <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.48" id="main-traits_magic_all-fake-fn-3.48" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittwinnedpresence-twinned-presence-fn3-48-flavor">Your eidolon - and your connection to it - makes others ill at ease.</Pair>
<Pair single="benefit" id="traittwinnedpresence-twinned-presence-fn3-48-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is always a class skill for you. In addition, if your eidolon is summoned and within 30 feet, and its size exceeds your own, use its size modifier on any Intimidate checks you make.</Pair>
</Ability>
<Ability id="traittwistedtattoo-twisted-tattoo-fn15-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittwistedtattoo-twisted-tattoo-fn15-3"><Link to="/trait/twisted_tattoo">⮞</Link> Twisted Tattoo <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-15.3" id="main-traits_magic_all-fake-fn-15.3" data-hash-target to="main-traits_magic_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittwistedtattoo-twisted-tattoo-fn15-3-flavor">Your exposure to eldritch phenomena has caused your skin to develop a strange pattern.</Pair>
<Pair single="benefit" id="traittwistedtattoo-twisted-tattoo-fn15-3-benefit">Once per day as you cast a spell whose casting time is 1 round or less, you can roll 1d4-2 (no minimum) and add the result to that spell's effective caster level. In an area of <Link to="/rule/primal_magic">primal magic</Link>, the minimum result of this roll is 0, not -1.</Pair>
</Ability>
<Ability id="traitunscathed-unscathed-fn3-49" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunscathed-unscathed-fn3-49"><Link to="/trait/unscathed">⮞</Link> Unscathed <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.49" id="main-traits_magic_all-fake-fn-3.49" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunscathed-unscathed-fn3-49-flavor">You are amazingly resistant to energy attacks because of either your upbringing or magical experimentation.</Pair>
<Pair single="benefit" id="traitunscathed-unscathed-fn3-49-benefit">Each type of energy <Link to="/umr/resistance">resistance</Link> you have (if any) increases by 2 points.</Pair>
</Ability>
<Ability id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50"><Link to="/trait/unseen_but_not_undone">⮞</Link> Unseen but Not Undone <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.50" id="main-traits_magic_all-fake-fn-3.50" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50-flavor">Without a single gesture, you can unleash a bloodline spell.</Pair>
<Pair single="benefit" id="traitunseenbutnotundone-unseen-but-not-undone-fn3-50-benefit">Once per day, you can cast a bloodline spell as if you had the <Link to="/feat/still_spell">Still Spell</Link> feat. Using this trait does not modify the spell's level.</Pair>
</Ability>
<Ability id="traitunstablemutagen-unstable-mutagen-fn3-51" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunstablemutagen-unstable-mutagen-fn3-51"><Link to="/trait/unstable_mutagen">⮞</Link> Unstable Mutagen <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.51" id="main-traits_magic_all-fake-fn-3.51" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunstablemutagen-unstable-mutagen-fn3-51-flavor">You discovered or were given a secret to make your mutagens more unstable - but also more potent.</Pair>
<Pair single="benefit" id="traitunstablemutagen-unstable-mutagen-fn3-51-benefit"><p>Once per day, you can create an <em>unstable mutagen.</em> It is like a normal mutagen in most ways, but also gains a single benefit or hindrance due to its instability. Roll 1d6 to determine the result of the instability.</p>
<ScrollContainer id="main-traits_magic_all--table-0"><table>
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
<Pair single id="traitvolatileconduit-volatile-conduit-fn3-52"><Link to="/trait/volatile_conduit">⮞</Link> Volatile Conduit <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.52" id="main-traits_magic_all-fake-fn-3.52" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitvolatileconduit-volatile-conduit-fn3-52-flavor">You discovered a secret that enhances the energy of some spells.</Pair>
<Pair single="benefit" id="traitvolatileconduit-volatile-conduit-fn3-52-benefit">Once per day as a <strong className="hl">free action</strong>, when you cast a spell that deals acid, cold, electricity, or fire damage, you can enhance that spell with volatile energy. When you do, it deals 1d4 points of extra damage of the same energy type.</Pair>
</Ability>
<Ability id="traitwatertouched-water-touched-fn3-53" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitwatertouched-water-touched-fn3-53"><Link to="/trait/water_touched">⮞</Link> Water-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-3.53" id="main-traits_magic_all-fake-fn-3.53" data-hash-target to="main-traits_magic_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitwatertouched-water-touched-fn3-53-flavor">You share an affinity with elemental water.</Pair>
<Pair single="benefit" id="traitwatertouched-water-touched-fn3-53-benefit">You gain DR 1/- against creatures and attacks with the water type.</Pair>
</Ability>
<Ability id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn33-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn33-2"><Link to="/trait/winter_witchcraft_survivor">⮞</Link> Winter Witchcraft Survivor <sup><InnerLink showBacklink="backlink-main-traits_magic_all-fake-fn-33.2" id="main-traits_magic_all-fake-fn-33.2" data-hash-target to="main-traits_magic_all-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn33-2-flavor">You narrowly escaped death when a Winter Witch punished you for supporting the Heralds.</Pair>
<Pair single="benefit" id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn33-2-benefit">You gain cold <Link to="/umr/resistance">resistance</Link> 5 against the first cold damage you take each day, and gain a +2 bonus on saving throws against the fear effects of creatures with the cold subtype.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_all-label">Footnotes</h3><ol>
<li id="main-traits_magic_all-fake-fn-1-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_all-fake-fn-1" data-hash-target to="main-traits_magic_all-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_all-fake-fn-1.2" data-hash-target to="main-traits_magic_all-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-2-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_all-fake-fn-2" data-hash-target to="main-traits_magic_all-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_all-fake-fn-2.2" data-hash-target to="main-traits_magic_all-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3" data-hash-target to="main-traits_magic_all-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.2" data-hash-target to="main-traits_magic_all-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.3" data-hash-target to="main-traits_magic_all-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.4" data-hash-target to="main-traits_magic_all-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.5" data-hash-target to="main-traits_magic_all-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.6" data-hash-target to="main-traits_magic_all-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.7" data-hash-target to="main-traits_magic_all-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.8" data-hash-target to="main-traits_magic_all-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.9" data-hash-target to="main-traits_magic_all-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.10" data-hash-target to="main-traits_magic_all-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.11" data-hash-target to="main-traits_magic_all-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.12" data-hash-target to="main-traits_magic_all-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.13" data-hash-target to="main-traits_magic_all-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.14" data-hash-target to="main-traits_magic_all-fake-fn-3.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.15" data-hash-target to="main-traits_magic_all-fake-fn-3.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.16" data-hash-target to="main-traits_magic_all-fake-fn-3.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.17" data-hash-target to="main-traits_magic_all-fake-fn-3.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.18" data-hash-target to="main-traits_magic_all-fake-fn-3.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.19" data-hash-target to="main-traits_magic_all-fake-fn-3.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.20" data-hash-target to="main-traits_magic_all-fake-fn-3.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.21" data-hash-target to="main-traits_magic_all-fake-fn-3.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.22" data-hash-target to="main-traits_magic_all-fake-fn-3.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.23" data-hash-target to="main-traits_magic_all-fake-fn-3.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.24" data-hash-target to="main-traits_magic_all-fake-fn-3.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.25" data-hash-target to="main-traits_magic_all-fake-fn-3.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.26" data-hash-target to="main-traits_magic_all-fake-fn-3.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.27" data-hash-target to="main-traits_magic_all-fake-fn-3.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.28" data-hash-target to="main-traits_magic_all-fake-fn-3.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.29" data-hash-target to="main-traits_magic_all-fake-fn-3.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.30" data-hash-target to="main-traits_magic_all-fake-fn-3.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.31" data-hash-target to="main-traits_magic_all-fake-fn-3.31">↩<sup>31</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.32" data-hash-target to="main-traits_magic_all-fake-fn-3.32">↩<sup>32</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.33" data-hash-target to="main-traits_magic_all-fake-fn-3.33">↩<sup>33</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.34" data-hash-target to="main-traits_magic_all-fake-fn-3.34">↩<sup>34</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.35" data-hash-target to="main-traits_magic_all-fake-fn-3.35">↩<sup>35</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.36" data-hash-target to="main-traits_magic_all-fake-fn-3.36">↩<sup>36</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.37" data-hash-target to="main-traits_magic_all-fake-fn-3.37">↩<sup>37</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.38" data-hash-target to="main-traits_magic_all-fake-fn-3.38">↩<sup>38</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.39" data-hash-target to="main-traits_magic_all-fake-fn-3.39">↩<sup>39</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.40" data-hash-target to="main-traits_magic_all-fake-fn-3.40">↩<sup>40</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.41" data-hash-target to="main-traits_magic_all-fake-fn-3.41">↩<sup>41</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.42" data-hash-target to="main-traits_magic_all-fake-fn-3.42">↩<sup>42</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.43" data-hash-target to="main-traits_magic_all-fake-fn-3.43">↩<sup>43</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.44" data-hash-target to="main-traits_magic_all-fake-fn-3.44">↩<sup>44</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.45" data-hash-target to="main-traits_magic_all-fake-fn-3.45">↩<sup>45</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.46" data-hash-target to="main-traits_magic_all-fake-fn-3.46">↩<sup>46</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.47" data-hash-target to="main-traits_magic_all-fake-fn-3.47">↩<sup>47</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.48" data-hash-target to="main-traits_magic_all-fake-fn-3.48">↩<sup>48</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.49" data-hash-target to="main-traits_magic_all-fake-fn-3.49">↩<sup>49</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.50" data-hash-target to="main-traits_magic_all-fake-fn-3.50">↩<sup>50</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.51" data-hash-target to="main-traits_magic_all-fake-fn-3.51">↩<sup>51</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.52" data-hash-target to="main-traits_magic_all-fake-fn-3.52">↩<sup>52</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_all-fake-fn-3.53" data-hash-target to="main-traits_magic_all-fake-fn-3.53">↩<sup>53</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-4-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_all-fake-fn-4" data-hash-target to="main-traits_magic_all-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-5-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_all-fake-fn-5" data-hash-target to="main-traits_magic_all-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-6-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_all-fake-fn-6" data-hash-target to="main-traits_magic_all-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-7-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_all-fake-fn-7" data-hash-target to="main-traits_magic_all-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_all-fake-fn-7.2" data-hash-target to="main-traits_magic_all-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-8-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_all-fake-fn-8" data-hash-target to="main-traits_magic_all-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-9-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_magic_all-fake-fn-9" data-hash-target to="main-traits_magic_all-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-10-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic_all-fake-fn-10" data-hash-target to="main-traits_magic_all-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-11-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11" data-hash-target to="main-traits_magic_all-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.2" data-hash-target to="main-traits_magic_all-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.3" data-hash-target to="main-traits_magic_all-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.4" data-hash-target to="main-traits_magic_all-fake-fn-11.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.5" data-hash-target to="main-traits_magic_all-fake-fn-11.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.6" data-hash-target to="main-traits_magic_all-fake-fn-11.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.7" data-hash-target to="main-traits_magic_all-fake-fn-11.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.8" data-hash-target to="main-traits_magic_all-fake-fn-11.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.9" data-hash-target to="main-traits_magic_all-fake-fn-11.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_all-fake-fn-11.10" data-hash-target to="main-traits_magic_all-fake-fn-11.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-12-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12" data-hash-target to="main-traits_magic_all-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.2" data-hash-target to="main-traits_magic_all-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.3" data-hash-target to="main-traits_magic_all-fake-fn-12.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.4" data-hash-target to="main-traits_magic_all-fake-fn-12.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.5" data-hash-target to="main-traits_magic_all-fake-fn-12.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.6" data-hash-target to="main-traits_magic_all-fake-fn-12.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.7" data-hash-target to="main-traits_magic_all-fake-fn-12.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.8" data-hash-target to="main-traits_magic_all-fake-fn-12.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.9" data-hash-target to="main-traits_magic_all-fake-fn-12.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_all-fake-fn-12.10" data-hash-target to="main-traits_magic_all-fake-fn-12.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-13-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_magic_all-fake-fn-13" data-hash-target to="main-traits_magic_all-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-14-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_magic_all-fake-fn-14" data-hash-target to="main-traits_magic_all-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-15-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_magic_all-fake-fn-15" data-hash-target to="main-traits_magic_all-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_magic_all-fake-fn-15.2" data-hash-target to="main-traits_magic_all-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_magic_all-fake-fn-15.3" data-hash-target to="main-traits_magic_all-fake-fn-15.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-16-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_magic_all-fake-fn-16" data-hash-target to="main-traits_magic_all-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_magic_all-fake-fn-16.2" data-hash-target to="main-traits_magic_all-fake-fn-16.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_magic_all-fake-fn-16.3" data-hash-target to="main-traits_magic_all-fake-fn-16.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-17-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17" data-hash-target to="main-traits_magic_all-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.2" data-hash-target to="main-traits_magic_all-fake-fn-17.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.3" data-hash-target to="main-traits_magic_all-fake-fn-17.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.4" data-hash-target to="main-traits_magic_all-fake-fn-17.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.5" data-hash-target to="main-traits_magic_all-fake-fn-17.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.6" data-hash-target to="main-traits_magic_all-fake-fn-17.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.7" data-hash-target to="main-traits_magic_all-fake-fn-17.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.8" data-hash-target to="main-traits_magic_all-fake-fn-17.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_magic_all-fake-fn-17.9" data-hash-target to="main-traits_magic_all-fake-fn-17.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-18-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_magic_all-fake-fn-18" data-hash-target to="main-traits_magic_all-fake-fn-18">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-19-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_magic_all-fake-fn-19" data-hash-target to="main-traits_magic_all-fake-fn-19">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-20-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_magic_all-fake-fn-20" data-hash-target to="main-traits_magic_all-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_magic_all-fake-fn-20.2" data-hash-target to="main-traits_magic_all-fake-fn-20.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-21-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_magic_all-fake-fn-21" data-hash-target to="main-traits_magic_all-fake-fn-21">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-22-target"><p><Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_magic_all-fake-fn-22" data-hash-target to="main-traits_magic_all-fake-fn-22">↩</InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_magic_all-fake-fn-22.2" data-hash-target to="main-traits_magic_all-fake-fn-22.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_magic_all-fake-fn-22.3" data-hash-target to="main-traits_magic_all-fake-fn-22.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-23-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_magic_all-fake-fn-23" data-hash-target to="main-traits_magic_all-fake-fn-23">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-24-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_magic_all-fake-fn-24" data-hash-target to="main-traits_magic_all-fake-fn-24">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-25-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_magic_all-fake-fn-25" data-hash-target to="main-traits_magic_all-fake-fn-25">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-26-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_magic_all-fake-fn-26" data-hash-target to="main-traits_magic_all-fake-fn-26">↩</InnerLink> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_magic_all-fake-fn-26.2" data-hash-target to="main-traits_magic_all-fake-fn-26.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-27-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_magic_all-fake-fn-27" data-hash-target to="main-traits_magic_all-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-28-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_magic_all-fake-fn-28" data-hash-target to="main-traits_magic_all-fake-fn-28">↩</InnerLink> <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_magic_all-fake-fn-28.2" data-hash-target to="main-traits_magic_all-fake-fn-28.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-29-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_magic_all-fake-fn-29" data-hash-target to="main-traits_magic_all-fake-fn-29">↩</InnerLink> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_magic_all-fake-fn-29.2" data-hash-target to="main-traits_magic_all-fake-fn-29.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_magic_all-fake-fn-29.3" data-hash-target to="main-traits_magic_all-fake-fn-29.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-30-target"><p>Blood of the Ancients pg. 19 <InnerLink aria-label="Back to reference 30" id="backlink-main-traits_magic_all-fake-fn-30" data-hash-target to="main-traits_magic_all-fake-fn-30">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-31-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 31" id="backlink-main-traits_magic_all-fake-fn-31" data-hash-target to="main-traits_magic_all-fake-fn-31">↩</InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-32-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 32" id="backlink-main-traits_magic_all-fake-fn-32" data-hash-target to="main-traits_magic_all-fake-fn-32">↩</InnerLink> <InnerLink aria-label="Back to reference 32" id="backlink-main-traits_magic_all-fake-fn-32.2" data-hash-target to="main-traits_magic_all-fake-fn-32.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-33-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 33" id="backlink-main-traits_magic_all-fake-fn-33" data-hash-target to="main-traits_magic_all-fake-fn-33">↩</InnerLink> <InnerLink aria-label="Back to reference 33" id="backlink-main-traits_magic_all-fake-fn-33.2" data-hash-target to="main-traits_magic_all-fake-fn-33.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_all-fake-fn-34-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 34" id="backlink-main-traits_magic_all-fake-fn-34" data-hash-target to="main-traits_magic_all-fake-fn-34">↩</InnerLink> <InnerLink aria-label="Back to reference 34" id="backlink-main-traits_magic_all-fake-fn-34.2" data-hash-target to="main-traits_magic_all-fake-fn-34.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_def = {title: "Defensive Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitairtouched-air-touched-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitairtouched-air-touched-fn1"><Link to="/trait/air_touched">⮞</Link> Air-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1" id="main-traits_magic_def-fake-fn-1" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitairtouched-air-touched-fn1-flavor">You share an affinity with elemental air.</Pair>
<Pair single="benefit" id="traitairtouched-air-touched-fn1-benefit">You gain DR 1/- against creatures and attacks with the air type.</Pair>
</Ability>
<Ability id="traitblackbloodheritage-black-blood-heritage-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitblackbloodheritage-black-blood-heritage-fn2"><Link to="/trait/black_blood_heritage">⮞</Link> Black Blood Heritage <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-2" id="main-traits_magic_def-fake-fn-2" data-hash-target to="main-traits_magic_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitblackbloodheritage-black-blood-heritage-fn2-flavor">One of your ancestors came in contact with the mystical black blood, granting you an affinity for the substance.</Pair>
<Pair single="benefit" id="traitblackbloodheritage-black-blood-heritage-fn2-benefit"><p>You are immune to the negative effects of <Link to="/magic-artifact/black_blood">black blood</Link>. Once per day as a <strong className="hl">swift action</strong>, you can channel the essence of <em>black blood,</em> increasing your effective caster level by 1 for any 1st- or 2nd-level necromancy spell you cast.</p>
<p>Your blood is pitch black as a result of this trait.</p>
</Pair>
</Ability>
<Ability id="traitdemonblightreistance-demonblight-reistance-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdemonblightreistance-demonblight-reistance-fn3"><Link to="/trait/demonblight_reistance">⮞</Link> Demonblight Reistance <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-3" id="main-traits_magic_def-fake-fn-3" data-hash-target to="main-traits_magic_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdemonblightreistance-demonblight-reistance-fn3-flavor">Your exposure to powerful energies instilled in you a supernatural resistance to diseases, particularly those of a demonic bent.</Pair>
<Pair single="benefit" id="traitdemonblightreistance-demonblight-reistance-fn3-benefit">You gain a +3 trait bonus on saving throws against diseases you are exposed to while fighting one or more creatures of the <Link to="/subtype/demon">demon</Link> subtype, or while such a hostile creature is within 100 feet.</Pair>
</Ability>
<Ability id="traitearthtouched-earth-touched-fn1-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitearthtouched-earth-touched-fn1-2"><Link to="/trait/earth_touched">⮞</Link> Earth-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.2" id="main-traits_magic_def-fake-fn-1.2" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitearthtouched-earth-touched-fn1-2-flavor">You share an affinity with elemental earth.</Pair>
<Pair single="benefit" id="traitearthtouched-earth-touched-fn1-2-benefit">You gain DR 1/- against creatures and attacks with the earth type.</Pair>
</Ability>
<Ability id="traitelementalaccident-elemental-accident-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitelementalaccident-elemental-accident-fn4"><Link to="/trait/elemental_accident">⮞</Link> Elemental Accident <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-4" id="main-traits_magic_def-fake-fn-4" data-hash-target to="main-traits_magic_def-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitelementalaccident-elemental-accident-fn4-flavor">A traumatic experience in your childhood, such as surviving a violent earthquake, fleeing a shipwreck, escaping a devastating fire, or getting struck by lightning, caused you to develop a fear of the corresponding element. You can instinctively shield yourself against elemental dangers of that type.</Pair>
<Pair single="benefit" id="traitelementalaccident-elemental-accident-fn4-benefit">Select acid, cold, electricity, or fire at character creation (once chosen, this damage type can't be changed). Once per day when you are subjected to an attack or effect that deals energy damage of that type, you can gain <Link to="/umr/resistance">resistance</Link> 10 against that damage type for 1 round as an <strong className="hl">immediate action</strong>. This resistance does not stack with any existing resistance you might have against that energy type.</Pair>
</Ability>
<Ability id="traitfeyprotection-fey-protection-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfeyprotection-fey-protection-fn5"><Link to="/trait/fey_protection">⮞</Link> Fey Protection <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-5" id="main-traits_magic_def-fake-fn-5" data-hash-target to="main-traits_magic_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfeyprotection-fey-protection-fn5-flavor">Your birth brought an unexpected guest to your parents' home: a helpful fey who prophesied about your future and gave you a magical gift in exchange for your parents' hospitality, a cup of milk, and a drop of your blood.</Pair>
<Pair single="benefit" id="traitfeyprotection-fey-protection-fn5-benefit"><p>You gain a +1 trait bonus to AC against attacks of opportunities made by fey and a +1 trait bonus on saving throws against the effects of fey creatures.</p>
<p><strong>Suggested Characters:</strong> Drumans, <Link to="/rule/eldest">Eldest</Link> worshipers, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitflametouched-flame-touched-fn1-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitflametouched-flame-touched-fn1-3"><Link to="/trait/flame_touched">⮞</Link> Flame-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.3" id="main-traits_magic_def-fake-fn-1.3" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitflametouched-flame-touched-fn1-3-benefit">You share an affinity with elemental fire. You gain DR 1/- against creatures and attacks with the fire type.</Pair>
</Ability>
<Ability id="traitgreaterpurpose-greater-purpose-fn1-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreaterpurpose-greater-purpose-fn1-4"><Link to="/trait/greater_purpose">⮞</Link> Greater Purpose <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.4" id="main-traits_magic_def-fake-fn-1.4" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgreaterpurpose-greater-purpose-fn1-4-flavor">You are convinced you're alive to achieve a great purpose.</Pair>
<Pair single="benefit" id="traitgreaterpurpose-greater-purpose-fn1-4-benefit">You gain a +1 trait bonus on all saving throws to resist death effects and a +1 trait bonus on Constitution checks made to stabilize while <Link to="/misc/dying">dying</Link>.</Pair>
</Ability>
<Ability id="traithexproof-hex-proof-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithexproof-hex-proof-fn6"><Link to="/trait/hex_proof">⮞</Link> Hex-Proof <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-6" id="main-traits_magic_def-fake-fn-6" data-hash-target to="main-traits_magic_def-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithexproof-hex-proof-fn6-benefit">You've dealt too often with <Link to="/rule/witchmarket">cruel fey magic</Link> and so gain a +2 bonus on Will saves against hexes and fey creatures' spells and spell-like abilities.</Pair>
</Ability>
<Ability id="traithorrifyingmind-horrifying-mind-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithorrifyingmind-horrifying-mind-fn7"><Link to="/trait/horrifying_mind">⮞</Link> Horrifying Mind <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-7" id="main-traits_magic_def-fake-fn-7" data-hash-target to="main-traits_magic_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traithorrifyingmind-horrifying-mind-fn7-benefit">When a nonevil humanoid attempts to read your mind via a magical effect, the reader must attempt a Will save opposed by your Wisdom or Charisma check (your choice). If the reader fails this save, she is <Link to="/misc/shaken">shaken</Link> for 1 round. If she fails by 10 or more, she is instead frightened for 1 round, then shaken for 1 round.</Pair>
</Ability>
<Ability id="traitinuredtodeath-inured-to-death-fn5-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinuredtodeath-inured-to-death-fn5-2"><Link to="/trait/inured_to_death">⮞</Link> Inured to Death <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-5.2" id="main-traits_magic_def-fake-fn-5.2" data-hash-target to="main-traits_magic_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitinuredtodeath-inured-to-death-fn5-2-flavor">You have been around death or the undead all of your life; you have become accustomed to its shadowy presence, and are no longer overwhelmed by it.</Pair>
<Pair single="benefit" id="traitinuredtodeath-inured-to-death-fn5-2-benefit"><p>You gain a +2 trait bonus on saving throws against death effects.</p>
<p><strong>Suggested Characters:</strong> Gebbites, Urgathoans, Ustalavs.</p>
</Pair>
</Ability>
<Ability id="traitkinbond-kin-bond-fn1-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitkinbond-kin-bond-fn1-5"><Link to="/trait/kin_bond">⮞</Link> Kin Bond <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.5" id="main-traits_magic_def-fake-fn-1.5" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitkinbond-kin-bond-fn1-5-flavor">The bond between you and a close sibling is nearly mystical.</Pair>
<Pair single="benefit" id="traitkinbond-kin-bond-fn1-5-benefit">Choose a single sibling with whom to share this bond. Once per day when you fail a saving throw while your sibling is within 30 feet, you may reroll that saving throw using your sibling's saving throw modifier. If you and the sibling are twins or otherwise part of a multiple birth, you gain a +2 trait bonus on the rerolled saving throw. Your sibling must be willing to grant you the reroll. If you fail the saving throw, you and your sibling are <Link to="/misc/dazed">dazed</Link> for 1 round.</Pair>
</Ability>
<Ability id="traitlamiasbane-lamias-bane-fn3-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlamiasbane-lamias-bane-fn3-2"><Link to="/trait/lamias_bane">⮞</Link> Lamia's Bane <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-3.2" id="main-traits_magic_def-fake-fn-3.2" data-hash-target to="main-traits_magic_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitlamiasbane-lamias-bane-fn3-2-flavor">You have been exposed to the magical energies of lamias in your past, or you have heard innumerable stories about your family's dealings with lamias, and you have built up a resistance to their charms.</Pair>
<Pair single="benefit" id="traitlamiasbane-lamias-bane-fn3-2-benefit">You gain a +1 trait bonus on saving throws against enchantment effects and a +2 trait bonus on saving throws against the spells and spell-like abilities of <Link to="/monster/lamia">lamias</Link>.</Pair>
</Ability>
<Ability id="traitlunarbirth-lunar-birth-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlunarbirth-lunar-birth-fn8"><Link to="/trait/lunar_birth">⮞</Link> Lunar Birth <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-8" id="main-traits_magic_def-fake-fn-8" data-hash-target to="main-traits_magic_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitlunarbirth-lunar-birth-fn8-flavor">Born during a lunar eclipse, you were forever marked by the moon's mysterious and ancient magic.</Pair>
<Pair single="benefit" id="traitlunarbirth-lunar-birth-fn8-benefit">You gain a +1 trait bonus on saving throws against the spells and spell-like abilities cast by humans.</Pair>
</Ability>
<Ability id="traitrivethunadherent-rivethun-adherent-fn9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitrivethunadherent-rivethun-adherent-fn9"><Link to="/trait/rivethun_adherent">⮞</Link> Rivethun Adherent <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-9" id="main-traits_magic_def-fake-fn-9" data-hash-target to="main-traits_magic_def-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitrivethunadherent-rivethun-adherent-fn9-flavor"><Link to="/rule/rivethun">Rivethun</Link> is an ancient tradition of dwarven shamans who learned to listen to and affect the world around them by reflecting on the friction between body and spirit. As someone who feels a similar friction between your inner spirit and physical body, you have picked up some old rivethun meditation techniques, even if you aren't a dwarf.</Pair>
<Pair single="benefit" id="traitrivethunadherent-rivethun-adherent-fn9-benefit">While you suffer a physical ailment, such as disease, poison, or ability damage to Strength, Dexterity, or Constitution (but not including hit point damage), you gain a +2 trait bonus on Will saving throws. While you suffer a mental ailment, including insanity, any charm or compulsion effect, or ability damage to Intelligence, Wisdom, or Charisma, you gain a +2 trait bonus on Fortitude saving throws.</Pair>
</Ability>
<Ability id="traitscornedbymagic-scorned-by-magic-fn5-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitscornedbymagic-scorned-by-magic-fn5-3"><Link to="/trait/scorned_by_magic">⮞</Link> Scorned by Magic <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-5.3" id="main-traits_magic_def-fake-fn-5.3" data-hash-target to="main-traits_magic_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitscornedbymagic-scorned-by-magic-fn5-3-flavor">As a youth, you assisted a wise woman or witch doctor who removed magical maladies from the needy and was present for the breaking of many spells - or perhaps you passed through a dead magic zone. Whatever the cause, magic seems a little more reluctant to affect you than others.</Pair>
<Pair single="benefit" id="traitscornedbymagic-scorned-by-magic-fn5-3-benefit"><p>Reduce the caster level of spells and spell-like abilities cast upon you by 1 for the purpose of attempting dispel checks and overcoming your spell resistance (if any).</p>
<p><strong>Suggested Characters:</strong> Kellids, Mana Wastes natives, Shoanti.</p>
</Pair>
</Ability>
<Ability id="traitskeptic-skeptic-fn1-6-fn10-fn11" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitskeptic-skeptic-fn1-6-fn10-fn11"><Link to="/trait/skeptic">⮞</Link> Skeptic <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.6" id="main-traits_magic_def-fake-fn-1.6" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-10" id="main-traits_magic_def-fake-fn-10" data-hash-target to="main-traits_magic_def-fake-fn-10-target">10</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-11" id="main-traits_magic_def-fake-fn-11" data-hash-target to="main-traits_magic_def-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitskeptic-skeptic-fn1-6-fn10-fn11-flavor">Growing up, you were always around magical effects to the extent that you realized much of it was mere smoke and mirrors.</Pair>
<Pair single="benefit" id="traitskeptic-skeptic-fn1-6-fn10-fn11-benefit">You gain a +2 trait bonus on all saving throws against illusions.</Pair>
</Ability>
<Ability id="traitstormtouched-storm-touched-fn1-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstormtouched-storm-touched-fn1-7"><Link to="/trait/storm_touched">⮞</Link> Storm-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.7" id="main-traits_magic_def-fake-fn-1.7" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitstormtouched-storm-touched-fn1-7-flavor">You share an affinity with elemental lightning.</Pair>
<Pair single="benefit" id="traitstormtouched-storm-touched-fn1-7-benefit">You gain DR 1/- against creatures and attacks with the electricity type.</Pair>
</Ability>
<Ability id="traitsunblessed-sun-blessed-fn8-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsunblessed-sun-blessed-fn8-2"><Link to="/trait/sun_blessed">⮞</Link> Sun-Blessed <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-8.2" id="main-traits_magic_def-fake-fn-8.2" data-hash-target to="main-traits_magic_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsunblessed-sun-blessed-fn8-2-flavor">Your birth came at a time when the sun was auspiciously aligned with your birth sign. As a result, you have a natural affinity for light and life.</Pair>
<Pair single="benefit" id="traitsunblessed-sun-blessed-fn8-2-benefit">Whenever you're affected by a healing effect that would heal more hit points than your maximum hit point total, you gain the excess healing as <Link to="/rule/temporary_hit_points">temporary hit points</Link>. You can gain up to a number of temporary hit points per day equal to your character level in this way. These temporary hit points last for 1 minute.</Pair>
</Ability>
<Ability id="traitunscathed-unscathed-fn1-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunscathed-unscathed-fn1-8"><Link to="/trait/unscathed">⮞</Link> Unscathed <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.8" id="main-traits_magic_def-fake-fn-1.8" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunscathed-unscathed-fn1-8-flavor">You are amazingly resistant to energy attacks because of either your upbringing or magical experimentation.</Pair>
<Pair single="benefit" id="traitunscathed-unscathed-fn1-8-benefit">Each type of energy <Link to="/umr/resistance">resistance</Link> you have (if any) increases by 2 points.</Pair>
</Ability>
<Ability id="traitwatertouched-water-touched-fn1-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitwatertouched-water-touched-fn1-9"><Link to="/trait/water_touched">⮞</Link> Water-Touched <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-1.9" id="main-traits_magic_def-fake-fn-1.9" data-hash-target to="main-traits_magic_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitwatertouched-water-touched-fn1-9-flavor">You share an affinity with elemental water.</Pair>
<Pair single="benefit" id="traitwatertouched-water-touched-fn1-9-benefit">You gain DR 1/- against creatures and attacks with the water type.</Pair>
</Ability>
<Ability id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn12" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn12"><Link to="/trait/winter_witchcraft_survivor">⮞</Link> Winter Witchcraft Survivor <sup><InnerLink showBacklink="backlink-main-traits_magic_def-fake-fn-12" id="main-traits_magic_def-fake-fn-12" data-hash-target to="main-traits_magic_def-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn12-flavor">You narrowly escaped death when a Winter Witch punished you for supporting the Heralds.</Pair>
<Pair single="benefit" id="traitwinterwitchcraftsurvivor-winter-witchcraft-survivor-fn12-benefit">You gain cold <Link to="/umr/resistance">resistance</Link> 5 against the first cold damage you take each day, and gain a +2 bonus on saving throws against the fear effects of creatures with the cold subtype.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_def-label">Footnotes</h3><ol>
<li id="main-traits_magic_def-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1" data-hash-target to="main-traits_magic_def-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.2" data-hash-target to="main-traits_magic_def-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.3" data-hash-target to="main-traits_magic_def-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.4" data-hash-target to="main-traits_magic_def-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.5" data-hash-target to="main-traits_magic_def-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.6" data-hash-target to="main-traits_magic_def-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.7" data-hash-target to="main-traits_magic_def-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.8" data-hash-target to="main-traits_magic_def-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_def-fake-fn-1.9" data-hash-target to="main-traits_magic_def-fake-fn-1.9">↩<sup>9</sup></InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-2-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_def-fake-fn-2" data-hash-target to="main-traits_magic_def-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-3-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_def-fake-fn-3" data-hash-target to="main-traits_magic_def-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_def-fake-fn-3.2" data-hash-target to="main-traits_magic_def-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-4-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_def-fake-fn-4" data-hash-target to="main-traits_magic_def-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-5-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_def-fake-fn-5" data-hash-target to="main-traits_magic_def-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_def-fake-fn-5.2" data-hash-target to="main-traits_magic_def-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_def-fake-fn-5.3" data-hash-target to="main-traits_magic_def-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-6-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_def-fake-fn-6" data-hash-target to="main-traits_magic_def-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-7-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_def-fake-fn-7" data-hash-target to="main-traits_magic_def-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-8-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_def-fake-fn-8" data-hash-target to="main-traits_magic_def-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_def-fake-fn-8.2" data-hash-target to="main-traits_magic_def-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-9-target"><p><Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_magic_def-fake-fn-9" data-hash-target to="main-traits_magic_def-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-10-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic_def-fake-fn-10" data-hash-target to="main-traits_magic_def-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-11-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_magic_def-fake-fn-11" data-hash-target to="main-traits_magic_def-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_magic_def-fake-fn-12-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_magic_def-fake-fn-12" data-hash-target to="main-traits_magic_def-fake-fn-12">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_spell = {title: "Spell Ability Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitgreenblooded-green-blooded-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreenblooded-green-blooded-fn1"><Link to="/trait/green_blooded">⮞</Link> Green-Blooded <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-1" id="main-traits_magic_spell-fake-fn-1" data-hash-target to="main-traits_magic_spell-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgreenblooded-green-blooded-fn1-flavor">You are touched by the supernatural essence of nature, marking you since birth as something other than purely mortal.</Pair>
<Pair single="benefit" id="traitgreenblooded-green-blooded-fn1-benefit">Choose a single 0-level <Link to="/main/druid_spell">druid spell</Link>. You can cast this spell once per day as a spell-like ability with a caster level equal to your character level.</Pair>
</Ability>
<Ability id="traitmagicaltalent-magical-talent-fn2-fn3-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicaltalent-magical-talent-fn2-fn3-fn4"><Link to="/trait/magical_talent">⮞</Link> Magical Talent <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-2" id="main-traits_magic_spell-fake-fn-2" data-hash-target to="main-traits_magic_spell-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-3" id="main-traits_magic_spell-fake-fn-3" data-hash-target to="main-traits_magic_spell-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-4" id="main-traits_magic_spell-fake-fn-4" data-hash-target to="main-traits_magic_spell-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicaltalent-magical-talent-fn2-fn3-fn4-flavor">Either from inborn talent, the whimsy of the gods, or obsessive study of strange tomes, you have mastered the use of a cantrip.</Pair>
<Pair single="benefit" id="traitmagicaltalent-magical-talent-fn2-fn3-fn4-benefit">Choose a 0-level spell. You may cast that spell once per day as a spell-like ability. This spell-like ability is cast at your highest caster level gained; if you have no caster level, it functions at CL 1st. The spell-like ability's save DC is Charisma-based.</Pair>
</Ability>
<Ability id="traitradianthealing-radiant-healing-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitradianthealing-radiant-healing-fn5"><Link to="/trait/radiant_healing">⮞</Link> Radiant Healing <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-5" id="main-traits_magic_spell-fake-fn-5" data-hash-target to="main-traits_magic_spell-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitradianthealing-radiant-healing-fn5-flavor">You've learned how to infuse your healing magic with lingering traces of light.</Pair>
<Pair single="benefit" id="traitradianthealing-radiant-healing-fn5-benefit">Whenever you cast a spell from the conjuration (healing) school that has a casting time of a standard action, you can extend its casting time to a <strong className="hl">full-round action</strong> to imbue the target with light, as per <Link to="/spell/light">light</Link>, with a duration of 1 round per caster level.</Pair>
</Ability>
<Ability id="traitscholaroftheanalects-scholar-of-the-analects-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitscholaroftheanalects-scholar-of-the-analects-fn6"><Link to="/trait/scholar_of_the_analects">⮞</Link> Scholar of the Analects <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-6" id="main-traits_magic_spell-fake-fn-6" data-hash-target to="main-traits_magic_spell-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitscholaroftheanalects-scholar-of-the-analects-fn6-flavor">You studied various Analects of Aroden from a young age and became skilled at using magic written by others.</Pair>
<Pair single="benefit" id="traitscholaroftheanalects-scholar-of-the-analects-fn6-benefit">You can cast <Link to="/spell/read_magic">read magic</Link> as a spell-like ability three times per day, using your character level as your caster level.</Pair>
</Ability>
<Ability id="traitsecretscrolls-secret-scrolls-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsecretscrolls-secret-scrolls-fn7"><Link to="/trait/secret_scrolls">⮞</Link> Secret Scrolls <sup><InnerLink showBacklink="backlink-main-traits_magic_spell-fake-fn-7" id="main-traits_magic_spell-fake-fn-7" data-hash-target to="main-traits_magic_spell-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsecretscrolls-secret-scrolls-fn7-flavor">You were inducted into a secret magical tradition such as the Esoteric Order of the Palatine Eye.</Pair>
<Pair single="benefit" id="traitsecretscrolls-secret-scrolls-fn7-benefit">You can cast <Link to="/spell/read_magic">read magic</Link> once per day as a spell-like ability, and gain a +1 trait bonus on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks to activate scrolls you cannot normally use.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_spell-label">Footnotes</h3><ol>
<li id="main-traits_magic_spell-fake-fn-1-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_spell-fake-fn-1" data-hash-target to="main-traits_magic_spell-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_spell-fake-fn-2-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_spell-fake-fn-2" data-hash-target to="main-traits_magic_spell-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_spell-fake-fn-3-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_spell-fake-fn-3" data-hash-target to="main-traits_magic_spell-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_spell-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_spell-fake-fn-4" data-hash-target to="main-traits_magic_spell-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_spell-fake-fn-5-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_spell-fake-fn-5" data-hash-target to="main-traits_magic_spell-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_magic_spell-fake-fn-6-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_spell-fake-fn-6" data-hash-target to="main-traits_magic_spell-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_spell-fake-fn-7-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_spell-fake-fn-7" data-hash-target to="main-traits_magic_spell-fake-fn-7">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_class = {title: "Class-Specific Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitarcanerevitalization-arcane-revitalization-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcanerevitalization-arcane-revitalization-fn1"><Link to="/trait/arcane_revitalization">⮞</Link> Arcane Revitalization <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1" id="main-traits_magic_class-fake-fn-1" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitarcanerevitalization-arcane-revitalization-fn1-flavor">Your martial prowess can feed your arcane power.</Pair>
<Pair single="benefit" id="traitarcanerevitalization-arcane-revitalization-fn1-benefit">Once per day, when you confirm a critical hit with a weapon attack, you regain 1 <em>arcane pool</em> point. You can't exceed your maximum number of <em>arcane pool</em> points.</Pair>
</Ability>
<Ability id="traitascendantrecollection-ascendant-recollection-fn1-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitascendantrecollection-ascendant-recollection-fn1-2"><Link to="/trait/ascendant_recollection">⮞</Link> Ascendant Recollection <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.2" id="main-traits_magic_class-fake-fn-1.2" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitascendantrecollection-ascendant-recollection-fn1-2-flavor">Your first bloodline power is particularly strong.</Pair>
<Pair single="benefit" id="traitascendantrecollection-ascendant-recollection-fn1-2-benefit">Your sorcerer level is considered to be 1 level higher when determining the effects of your 1st-level bloodline power.</Pair>
</Ability>
<Ability id="traitbeastofthesociety-beast-of-the-society-fn2-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbeastofthesociety-beast-of-the-society-fn2-fn3"><Link to="/trait/beast_of_the_society">⮞</Link> Beast of the Society <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-2" id="main-traits_magic_class-fake-fn-2" data-hash-target to="main-traits_magic_class-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-3" id="main-traits_magic_class-fake-fn-3" data-hash-target to="main-traits_magic_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="flavor" id="traitbeastofthesociety-beast-of-the-society-fn2-fn3-flavor">A druid at the Grand Lodge revealed to you secrets changing your form into that of an animal.</Pair>
<Pair single="benefit" id="traitbeastofthesociety-beast-of-the-society-fn2-fn3-benefit">Whenever you use your <em>wild shape</em> class ability to turn yourself into a Small or Medium animal, the effect lasts for 2 hours per druid level instead of 1 hour per druid level.</Pair>
</Ability>
<Ability id="traitbladedmagic-bladed-magic-fn1-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbladedmagic-bladed-magic-fn1-3"><Link to="/trait/bladed_magic">⮞</Link> Bladed Magic <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.3" id="main-traits_magic_class-fake-fn-1.3" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitbladedmagic-bladed-magic-fn1-3-flavor">You have an innate talent for using magical weaponry and those weapons capable of becoming magical.</Pair>
<Pair single="benefit" id="traitbladedmagic-bladed-magic-fn1-3-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> checks made to craft magic or <Link to="/rule/masterwork_w">masterwork weapons</Link>. In addition, when you use your <em>arcane pool</em> class ability to grant a weapon an enhancement bonus, that bonus lasts for 2 minutes instead of 1.</Pair>
</Ability>
<Ability id="traitcharlatan-charlatan-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcharlatan-charlatan-fn4"><Link to="/trait/charlatan">⮞</Link> Charlatan <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-4" id="main-traits_magic_class-fake-fn-4" data-hash-target to="main-traits_magic_class-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcharlatan-charlatan-fn4-flavor">Your talent for illusion goes beyond a mere knack for figments and phantasms. You can actually channel spell energy into simple illusions that augment your attempts at deception.</Pair>
<Pair single="benefit" id="traitcharlatan-charlatan-fn4-benefit"><p>As a <strong className="hl">swift action</strong>, you may expend one prepared spell or spell slot to gain a bonus on the next <Link to="/skill/bluff">Bluff</Link> check you make, provided the check takes place before the beginning of your next turn. The bonus on this check is equal to the level of the spell consumed.</p>
<p>You may use this ability 3 times per day. Only gnomes of nonlawful alignment may take this trait.</p>
</Pair>
</Ability>
<Ability id="traitcrossdisciplined-cross-disciplined-fn1-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossdisciplined-cross-disciplined-fn1-4"><Link to="/trait/cross_disciplined">⮞</Link> Cross-Disciplined <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.4" id="main-traits_magic_class-fake-fn-1.4" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitcrossdisciplined-cross-disciplined-fn1-4-flavor">Your dabbling has granted you greater insight into the proper casting of certain spells.</Pair>
<Pair single="benefit" id="traitcrossdisciplined-cross-disciplined-fn1-4-benefit">Once per day, you may cast a spell you have prepared that appears on both the magus and wizard spell lists as if your caster level were 1 level higher.</Pair>
</Ability>
<Ability id="traitcrossknowledge-cross-knowledge-fn1-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossknowledge-cross-knowledge-fn1-5"><Link to="/trait/cross_knowledge">⮞</Link> Cross-Knowledge <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.5" id="main-traits_magic_class-fake-fn-1.5" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitcrossknowledge-cross-knowledge-fn1-5-benefit">Once per day, you may treat an extract you drink as if your caster level were 1 level higher as long as that extract appears on the wizard spell list and the alchemist list of formulae.</Pair>
</Ability>
<Ability id="traitdesperatespeed-desperate-speed-fn1-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdesperatespeed-desperate-speed-fn1-6"><Link to="/trait/desperate_speed">⮞</Link> Desperate Speed <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.6" id="main-traits_magic_class-fake-fn-1.6" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdesperatespeed-desperate-speed-fn1-6-flavor">Your eidolon excels at a movement type you do not possess.</Pair>
<Pair single="benefit" id="traitdesperatespeed-desperate-speed-fn1-6-benefit">Your eidolon receives a +5-foot enhancement bonus to one type of speed it has that you do not, such as a climb or swim speed. If your eidolon doesn't already possess such a mode of movement, you may apply this trait bonus later if it gains an evolution that grants it such a mode. Once this bonus is applied to a mode of movement, it can't be switched to another mode.</Pair>
</Ability>
<Ability id="traitenduringmutagen-enduring-mutagen-fn1-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitenduringmutagen-enduring-mutagen-fn1-7"><Link to="/trait/enduring_mutagen">⮞</Link> Enduring Mutagen <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.7" id="main-traits_magic_class-fake-fn-1.7" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitenduringmutagen-enduring-mutagen-fn1-7-flavor">Because of special training, your unique body chemistry, or the uncovering of an alchemical secret, your mutagens last longer.</Pair>
<Pair single="benefit" id="traitenduringmutagen-enduring-mutagen-fn1-7-benefit">The bonuses and penalties granted by your mutagens last for 1 additional minute per alchemist level.</Pair>
</Ability>
<Ability id="traitfocusedburn-focused-burn-fn1-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfocusedburn-focused-burn-fn1-8"><Link to="/trait/focused_burn">⮞</Link> Focused Burn <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.8" id="main-traits_magic_class-fake-fn-1.8" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfocusedburn-focused-burn-fn1-8-flavor">You know the secret of making punishing fire bombs.</Pair>
<Pair single="benefit" id="traitfocusedburn-focused-burn-fn1-8-benefit">Any bombs you have that deal fire damage deal 1 additional point of fire damage on a direct hit per 2d6 of fire damage normally dealt (minimum 1 point). This additional damage does not apply to the bomb's splash damage.</Pair>
</Ability>
<Ability id="traitgreaterlink-greater-link-fn1-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgreaterlink-greater-link-fn1-9"><Link to="/trait/greater_link">⮞</Link> Greater Link <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.9" id="main-traits_magic_class-fake-fn-1.9" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgreaterlink-greater-link-fn1-9-flavor">The link between you and your eidolon is stronger than most.</Pair>
<Pair single="benefit" id="traitgreaterlink-greater-link-fn1-9-benefit">Your eidolon's current and maximum hit point totals are not reduced by 50% until you are separated by 110 feet or more. Your eidolon's current and maximum hit point totals are not reduced by 75% until you are separated by 1,100 feet or more. All other aspects of your life link class feature are unaffected.</Pair>
</Ability>
<Ability id="traitknowledgeablecaster-knowledgeable-caster-fn1-10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitknowledgeablecaster-knowledgeable-caster-fn1-10"><Link to="/trait/knowledgeable_caster">⮞</Link> Knowledgeable Caster <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.10" id="main-traits_magic_class-fake-fn-1.10" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitknowledgeablecaster-knowledgeable-caster-fn1-10-benefit">Once per day when you cast a divination spell, you can cast that spell as if your caster level were 1 level higher in the appropriate class. You also gain a +1 trait bonus on any <Link to="/skill/knowledge">Knowledge</Link> checks associated with your sorcerer bloodline, if any.</Pair>
</Ability>
<Ability id="traitlinkedsurge-linked-surge-fn1-11" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlinkedsurge-linked-surge-fn1-11"><Link to="/trait/linked_surge">⮞</Link> Linked Surge <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.11" id="main-traits_magic_class-fake-fn-1.11" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlinkedsurge-linked-surge-fn1-11-benefit">Once per day, you may make a Strength- or Constitution-based ability check or skill check using you eidolon's ability score in place of your own. Your eidolon must be summoned and with 30 feet for you to use this trait.</Pair>
</Ability>
<Ability id="traitmalleablemagic-malleable-magic-fn1-12" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmalleablemagic-malleable-magic-fn1-12"><Link to="/trait/malleable_magic">⮞</Link> Malleable Magic <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.12" id="main-traits_magic_class-fake-fn-1.12" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitmalleablemagic-malleable-magic-fn1-12-benefit">Once per day as a <strong className="hl">swift action</strong>, you can lose a single 1st-, 2nd- or 3rd-level magus spell to regain 1 <em>arcane pool</em> point. You can't exceed the maximum number of <em>arcane pool</em> points in your <em>arcane pool</em> by using this trait.</Pair>
</Ability>
<Ability id="traitmeticulousconcoction-meticulous-concoction-fn1-13" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmeticulousconcoction-meticulous-concoction-fn1-13"><Link to="/trait/meticulous_concoction">⮞</Link> Meticulous Concoction <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.13" id="main-traits_magic_class-fake-fn-1.13" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmeticulousconcoction-meticulous-concoction-fn1-13-flavor">Your meticulous carefulness makes your bombs and extracts more potent.</Pair>
<Pair single="benefit" id="traitmeticulousconcoction-meticulous-concoction-fn1-13-benefit">Once per day, you can either add a +2 trait bonus to the save DC for one bomb you throw or extend the duration of one extract you imbibe by 2 rounds. Extracts with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
<Ability id="traitouterdragonblood-outer-dragon-blood-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitouterdragonblood-outer-dragon-blood-fn5"><Link to="/trait/outer_dragon_blood">⮞</Link> Outer Dragon Blood <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-5" id="main-traits_magic_class-fake-fn-5" data-hash-target to="main-traits_magic_class-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitouterdragonblood-outer-dragon-blood-fn5-flavor">The blood of outer dragons courses through your veins, and you've inherited a portion of their magic.</Pair>
<Pair single="benefit" id="traitouterdragonblood-outer-dragon-blood-fn5-benefit"><p>You gain Draconic as a bonus language. In addition, if you are a sorcerer with the <Link to="/sorcbloodline/draconic">draconic</Link> bloodline, you can select one of the <Link to="/family/outer_dragon">outer dragon</Link> types for your bloodline powers; this affects your resistances and the type of energy damage dealt by a number of your abilities.</p>
<ul>
<li><strong>Lunar:</strong> Cold energy, 60-foot line</li>
<li><strong>Solar:</strong> Fire energy, 60-foot line</li>
<li><strong>Time:</strong> Electricity energy, 30-foot cone</li>
<li><strong>Void:</strong> Cold energy, 30-foot cone</li>
<li><strong>Vortex:</strong> Fire energy, 30-foot cone</li>
</ul>
</Pair>
</Ability>
<Ability id="traitpathfindersfocus-pathfinders-focus-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpathfindersfocus-pathfinders-focus-fn6"><Link to="/trait/pathfinders_focus">⮞</Link> Pathfinder's Focus <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-6" id="main-traits_magic_class-fake-fn-6" data-hash-target to="main-traits_magic_class-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitpathfindersfocus-pathfinders-focus-fn6-benefit">You can select a magnetic compass for your <em>arcane bond</em> class feature; this compass is nonmagical, but you can later spend 250 gp to upgrade it into a <Link to="/magic-wondrous/wayfinder">wayfinder</Link>. Choosing this trait allows you to upgrade this wayfinder to a variant or unique wayfinder per the normal rules for <Link to="/rule/adding_new_abilities">improving magic items</Link>. A bonded wayfinder must be held in your hand to grant the benefits of being a <em>bonded object.</em></Pair>
</Ability>
<Ability id="traitstrengthforetold-strength-foretold-fn1-14" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstrengthforetold-strength-foretold-fn1-14"><Link to="/trait/strength_foretold">⮞</Link> Strength Foretold <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.14" id="main-traits_magic_class-fake-fn-1.14" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitstrengthforetold-strength-foretold-fn1-14-flavor">You can channel extra power into one of your bloodline spells.</Pair>
<Pair single="benefit" id="traitstrengthforetold-strength-foretold-fn1-14-benefit">Once per day as a <strong className="hl">free action</strong>, you gain a +1 trait bonus to the DC of the saving throw of one of your bonus bloodline spells.</Pair>
</Ability>
<Ability id="traittwinnedpresence-twinned-presence-fn1-15" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittwinnedpresence-twinned-presence-fn1-15"><Link to="/trait/twinned_presence">⮞</Link> Twinned Presence <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.15" id="main-traits_magic_class-fake-fn-1.15" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittwinnedpresence-twinned-presence-fn1-15-flavor">Your eidolon - and your connection to it - makes others ill at ease.</Pair>
<Pair single="benefit" id="traittwinnedpresence-twinned-presence-fn1-15-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is always a class skill for you. In addition, if your eidolon is summoned and within 30 feet, and its size exceeds your own, use its size modifier on any Intimidate checks you make.</Pair>
</Ability>
<Ability id="traitunseenbutnotundone-unseen-but-not-undone-fn1-16" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunseenbutnotundone-unseen-but-not-undone-fn1-16"><Link to="/trait/unseen_but_not_undone">⮞</Link> Unseen but Not Undone <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.16" id="main-traits_magic_class-fake-fn-1.16" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunseenbutnotundone-unseen-but-not-undone-fn1-16-flavor">Without a single gesture, you can unleash a bloodline spell.</Pair>
<Pair single="benefit" id="traitunseenbutnotundone-unseen-but-not-undone-fn1-16-benefit">Once per day, you can cast a bloodline spell as if you had the <Link to="/feat/still_spell">Still Spell</Link> feat. Using this trait does not modify the spell's level.</Pair>
</Ability>
<Ability id="traitunstablemutagen-unstable-mutagen-fn1-17" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitunstablemutagen-unstable-mutagen-fn1-17"><Link to="/trait/unstable_mutagen">⮞</Link> Unstable Mutagen <sup><InnerLink showBacklink="backlink-main-traits_magic_class-fake-fn-1.17" id="main-traits_magic_class-fake-fn-1.17" data-hash-target to="main-traits_magic_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitunstablemutagen-unstable-mutagen-fn1-17-flavor">You discovered or were given a secret to make your mutagens more unstable - but also more potent.</Pair>
<Pair single="benefit" id="traitunstablemutagen-unstable-mutagen-fn1-17-benefit"><p>Once per day, you can create an <em>unstable mutagen.</em> It is like a normal mutagen in most ways, but also gains a single benefit or hindrance due to its instability. Roll 1d6 to determine the result of the instability.</p>
<ScrollContainer id="main-traits_magic_class--table-0"><table>
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
<section data-footnotes><h3 id="main-traits_magic_class-label">Footnotes</h3><ol>
<li id="main-traits_magic_class-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1" data-hash-target to="main-traits_magic_class-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.2" data-hash-target to="main-traits_magic_class-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.3" data-hash-target to="main-traits_magic_class-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.4" data-hash-target to="main-traits_magic_class-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.5" data-hash-target to="main-traits_magic_class-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.6" data-hash-target to="main-traits_magic_class-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.7" data-hash-target to="main-traits_magic_class-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.8" data-hash-target to="main-traits_magic_class-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.9" data-hash-target to="main-traits_magic_class-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.10" data-hash-target to="main-traits_magic_class-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.11" data-hash-target to="main-traits_magic_class-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.12" data-hash-target to="main-traits_magic_class-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.13" data-hash-target to="main-traits_magic_class-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.14" data-hash-target to="main-traits_magic_class-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.15" data-hash-target to="main-traits_magic_class-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.16" data-hash-target to="main-traits_magic_class-fake-fn-1.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_class-fake-fn-1.17" data-hash-target to="main-traits_magic_class-fake-fn-1.17">↩<sup>17</sup></InnerLink></p></li>
<li id="main-traits_magic_class-fake-fn-2-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_class-fake-fn-2" data-hash-target to="main-traits_magic_class-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_class-fake-fn-3-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_class-fake-fn-3" data-hash-target to="main-traits_magic_class-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_class-fake-fn-4-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_class-fake-fn-4" data-hash-target to="main-traits_magic_class-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_class-fake-fn-5-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_class-fake-fn-5" data-hash-target to="main-traits_magic_class-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_magic_class-fake-fn-6-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_class-fake-fn-6" data-hash-target to="main-traits_magic_class-fake-fn-6">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_cl = {title: "Caster Level Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitaeromanticaffinity-aeromantic-affinity-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitaeromanticaffinity-aeromantic-affinity-fn1"><Link to="/trait/aeromantic_affinity">⮞</Link> Aeromantic Affinity <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-1" id="main-traits_magic_cl-fake-fn-1" data-hash-target to="main-traits_magic_cl-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitaeromanticaffinity-aeromantic-affinity-fn1-flavor">One of your distant ancestors was either a powerful aeromancer or a creature of elemental air, granting you greater skill with air magic.</Pair>
<Pair single="benefit" id="traitaeromanticaffinity-aeromantic-affinity-fn1-benefit">You treat your caster level as 1 higher when casting spells with the air or electricity descriptor.</Pair>
</Ability>
<Ability id="traitblackbloodheritage-black-blood-heritage-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitblackbloodheritage-black-blood-heritage-fn2"><Link to="/trait/black_blood_heritage">⮞</Link> Black Blood Heritage <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-2" id="main-traits_magic_cl-fake-fn-2" data-hash-target to="main-traits_magic_cl-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitblackbloodheritage-black-blood-heritage-fn2-flavor">One of your ancestors came in contact with the mystical black blood, granting you an affinity for the substance.</Pair>
<Pair single="benefit" id="traitblackbloodheritage-black-blood-heritage-fn2-benefit"><p>You are immune to the negative effects of <Link to="/magic-artifact/black_blood">black blood</Link>. Once per day as a <strong className="hl">swift action</strong>, you can channel the essence of <em>black blood,</em> increasing your effective caster level by 1 for any 1st- or 2nd-level necromancy spell you cast.</p>
<p>Your blood is pitch black as a result of this trait.</p>
</Pair>
</Ability>
<Ability id="traitcrossdisciplined-cross-disciplined-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcrossdisciplined-cross-disciplined-fn3"><Link to="/trait/cross_disciplined">⮞</Link> Cross-Disciplined <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3" id="main-traits_magic_cl-fake-fn-3" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitcrossdisciplined-cross-disciplined-fn3-flavor">Your dabbling has granted you greater insight into the proper casting of certain spells.</Pair>
<Pair single="benefit" id="traitcrossdisciplined-cross-disciplined-fn3-benefit">Once per day, you may cast a spell you have prepared that appears on both the magus and wizard spell lists as if your caster level were 1 level higher.</Pair>
</Ability>
<Ability id="traitdistanceaptitude-distance-aptitude-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdistanceaptitude-distance-aptitude-fn4"><Link to="/trait/distance_aptitude">⮞</Link> Distance Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-4" id="main-traits_magic_cl-fake-fn-4" data-hash-target to="main-traits_magic_cl-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdistanceaptitude-distance-aptitude-fn4-flavor">You were exposed to the magic of an <Link to="/magic-artifact/elf_gate">elf gate</Link>, portal, or some other form of distance-spanning magic when you were young. This contact with ancient world-spanning magic has granted you insight into means to extend the range of your own spells.</Pair>
<Pair single="benefit" id="traitdistanceaptitude-distance-aptitude-fn4-benefit"><p>Treat your caster level as 1 higher for the purposes of determining the range of spells and spell-like abilities.</p>
<p><strong>Suggested Characters:</strong> Elves, Numerians, Sarkorians.</p>
</Pair>
</Ability>
<Ability id="traiteldritchdelver-eldritch-delver-fn3-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchdelver-eldritch-delver-fn3-2"><Link to="/trait/eldritch_delver">⮞</Link> Eldritch Delver <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3.2" id="main-traits_magic_cl-fake-fn-3.2" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traiteldritchdelver-eldritch-delver-fn3-2-flavor">You have an unquenchable thirst for knowledge about the world and desire to obtain it firsthand.</Pair>
<Pair single="benefit" id="traiteldritchdelver-eldritch-delver-fn3-2-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> and <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and you may treat your caster level as 1 level higher for all conjuration spells of the teleportation subschool.</Pair>
</Ability>
<Ability id="traitgiftedadept-gifted-adept-fn3-3-fn5-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitgiftedadept-gifted-adept-fn3-3-fn5-fn6"><Link to="/trait/gifted_adept">⮞</Link> Gifted Adept <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3.3" id="main-traits_magic_cl-fake-fn-3.3" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-5" id="main-traits_magic_cl-fake-fn-5" data-hash-target to="main-traits_magic_cl-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-6" id="main-traits_magic_cl-fake-fn-6" data-hash-target to="main-traits_magic_cl-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitgiftedadept-gifted-adept-fn3-3-fn5-fn6-flavor">Your interest in magic was inspired by witnessing a spell being cast in a particularly dramatic method, perhaps even one that affected you physically or spiritually. This early exposure to magic has made it easier for you to work similar magic on your own.</Pair>
<Pair single="benefit" id="traitgiftedadept-gifted-adept-fn3-3-fn5-fn6-benefit">Pick one spell when you choose this trait - from this point on, whenever you cast that spell, its effects manifest at +1 caster level.</Pair>
</Ability>
<Ability id="traitknowledgeablecaster-knowledgeable-caster-fn3-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitknowledgeablecaster-knowledgeable-caster-fn3-4"><Link to="/trait/knowledgeable_caster">⮞</Link> Knowledgeable Caster <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3.4" id="main-traits_magic_cl-fake-fn-3.4" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitknowledgeablecaster-knowledgeable-caster-fn3-4-benefit">Once per day when you cast a divination spell, you can cast that spell as if your caster level were 1 level higher in the appropriate class. You also gain a +1 trait bonus on any <Link to="/skill/knowledge">Knowledge</Link> checks associated with your sorcerer bloodline, if any.</Pair>
</Ability>
<Ability id="traitlesseffort-less-effort-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlesseffort-less-effort-fn7"><Link to="/trait/less_effort">⮞</Link> Less Effort <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-7" id="main-traits_magic_cl-fake-fn-7" data-hash-target to="main-traits_magic_cl-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlesseffort-less-effort-fn7-benefit">Select one spell belonging to the abjuration or transmutation school on your spell list. When you cast that spell or it is cast on you, treat the caster level as 2 higher for the purpose of determining the duration.</Pair>
</Ability>
<Ability id="traitlowblow-low-blow-fn7-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlowblow-low-blow-fn7-2"><Link to="/trait/low_blow">⮞</Link> Low Blow <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-7.2" id="main-traits_magic_cl-fake-fn-7.2" data-hash-target to="main-traits_magic_cl-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlowblow-low-blow-fn7-2-benefit">When targeting a good-aligned creature with a spell or spell-like ability with the pain descriptor or that imposes a morale penalty, increase its effective caster level by 1. If you are of an evil alignment, increase the save DC of the effect by 1 as well.</Pair>
</Ability>
<Ability id="traitmagicalknack-magical-knack-fn3-5-fn6-2-fn5-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicalknack-magical-knack-fn3-5-fn6-2-fn5-2"><Link to="/trait/magical_knack">⮞</Link> Magical Knack <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3.5" id="main-traits_magic_cl-fake-fn-3.5" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-6.2" id="main-traits_magic_cl-fake-fn-6.2" data-hash-target to="main-traits_magic_cl-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-5.2" id="main-traits_magic_cl-fake-fn-5.2" data-hash-target to="main-traits_magic_cl-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicalknack-magical-knack-fn3-5-fn6-2-fn5-2-flavor">You were raised, either wholly or in part, by a magical creature, either after it found you abandoned in the woods or because your parents often left you in the care of a magical minion. This constant exposure to magic has made its mysteries easy for you to understand, even when you turn your mind to other devotions and tasks.</Pair>
<Pair single="benefit" id="traitmagicalknack-magical-knack-fn3-5-fn6-2-fn5-2-benefit">Pick a class when you gain this trait - your caster level in that class gains a +2 trait bonus as long as this bonus doesn't raise your caster level above your current Hit Dice.</Pair>
</Ability>
<Ability id="traitoutcastsintuition-outcasts-intuition-fn3-6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoutcastsintuition-outcasts-intuition-fn3-6"><Link to="/trait/outcasts_intuition">⮞</Link> Outcast's Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3.6" id="main-traits_magic_cl-fake-fn-3.6" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoutcastsintuition-outcasts-intuition-fn3-6-flavor">You are able to sense the motives of others and use that sense to bolster your magic against dispelling.</Pair>
<Pair single="benefit" id="traitoutcastsintuition-outcasts-intuition-fn3-6-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you. In addition, your caster level is treated as 1 level higher for the purposes of any attempts to dispel your magic.</Pair>
</Ability>
<Ability id="traitresilientcaster-resilient-caster-fn3-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitresilientcaster-resilient-caster-fn3-7"><Link to="/trait/resilient_caster">⮞</Link> Resilient Caster <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-3.7" id="main-traits_magic_cl-fake-fn-3.7" data-hash-target to="main-traits_magic_cl-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitresilientcaster-resilient-caster-fn3-7-flavor">Your great force of will makes your magic harder to dispel.</Pair>
<Pair single="benefit" id="traitresilientcaster-resilient-caster-fn3-7-benefit">Your caster level is treated as 1 level higher whenever someone attempts to dispel one of your spells.</Pair>
</Ability>
<Ability id="traittransmuterofkorada-transmuter-of-korada-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittransmuterofkorada-transmuter-of-korada-fn8"><Link to="/trait/transmuter_of_korada">⮞</Link> Transmuter of Korada <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-8" id="main-traits_magic_cl-fake-fn-8" data-hash-target to="main-traits_magic_cl-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittransmuterofkorada-transmuter-of-korada-fn8-flavor">You learned the secrets of transmutation from a follower of the empyreal lord <Link to="/faith/korada">Korada</Link>.</Pair>
<Pair single="benefit" id="traittransmuterofkorada-transmuter-of-korada-fn8-benefit"><p>Whenever you cast a spell from the transmutation school, its effects manifest at +1 caster level.</p>
<p>Additionally, select one of the following transmutation spells: <Link to="/spell/bears_endurance">bear's endurance</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/foxs_cunning">fox's cunning</Link>, or <Link to="/spell/owls_wisdom">owl's wisdom</Link>. Once per day when you cast that spell, its duration is doubled. A spell affected by this trait cannot be modified further by the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat or similar abilities.</p>
</Pair>
</Ability>
<Ability id="traittwistedtattoo-twisted-tattoo-fn9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittwistedtattoo-twisted-tattoo-fn9"><Link to="/trait/twisted_tattoo">⮞</Link> Twisted Tattoo <sup><InnerLink showBacklink="backlink-main-traits_magic_cl-fake-fn-9" id="main-traits_magic_cl-fake-fn-9" data-hash-target to="main-traits_magic_cl-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittwistedtattoo-twisted-tattoo-fn9-flavor">Your exposure to eldritch phenomena has caused your skin to develop a strange pattern.</Pair>
<Pair single="benefit" id="traittwistedtattoo-twisted-tattoo-fn9-benefit">Once per day as you cast a spell whose casting time is 1 round or less, you can roll 1d4-2 (no minimum) and add the result to that spell's effective caster level. In an area of <Link to="/rule/primal_magic">primal magic</Link>, the minimum result of this roll is 0, not -1.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_cl-label">Footnotes</h3><ol>
<li id="main-traits_magic_cl-fake-fn-1-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_cl-fake-fn-1" data-hash-target to="main-traits_magic_cl-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-2-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_cl-fake-fn-2" data-hash-target to="main-traits_magic_cl-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3" data-hash-target to="main-traits_magic_cl-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3.2" data-hash-target to="main-traits_magic_cl-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3.3" data-hash-target to="main-traits_magic_cl-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3.4" data-hash-target to="main-traits_magic_cl-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3.5" data-hash-target to="main-traits_magic_cl-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3.6" data-hash-target to="main-traits_magic_cl-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cl-fake-fn-3.7" data-hash-target to="main-traits_magic_cl-fake-fn-3.7">↩<sup>7</sup></InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-4-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_cl-fake-fn-4" data-hash-target to="main-traits_magic_cl-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-5-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_cl-fake-fn-5" data-hash-target to="main-traits_magic_cl-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_cl-fake-fn-5.2" data-hash-target to="main-traits_magic_cl-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-6-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_cl-fake-fn-6" data-hash-target to="main-traits_magic_cl-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_cl-fake-fn-6.2" data-hash-target to="main-traits_magic_cl-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-7-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_cl-fake-fn-7" data-hash-target to="main-traits_magic_cl-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_cl-fake-fn-7.2" data-hash-target to="main-traits_magic_cl-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-8-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_cl-fake-fn-8" data-hash-target to="main-traits_magic_cl-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_magic_cl-fake-fn-9-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_magic_cl-fake-fn-9" data-hash-target to="main-traits_magic_cl-fake-fn-9">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_boost = {title: "Spell-Boosting Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitbalancersbanishing-balancers-banishing-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbalancersbanishing-balancers-banishing-fn1"><Link to="/trait/balancers_banishing">⮞</Link> Balancer's Banishing <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-1" id="main-traits_magic_boost-fake-fn-1" data-hash-target to="main-traits_magic_boost-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitbalancersbanishing-balancers-banishing-fn1-flavor">The interference of the Outer Planes in mortal affairs angers you to no end and invigorates the potency of your magic.</Pair>
<Pair single="benefit" id="traitbalancersbanishing-balancers-banishing-fn1-benefit">As long as you remain neutral, whenever you cast a spell that would send an outsider with the chaotic, evil, good, or lawful subtype back to its home plane, the spell's saving throw DC increases by 1.</Pair>
</Ability>
<Ability id="traitdomineering-domineering-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdomineering-domineering-fn2"><Link to="/trait/domineering">⮞</Link> Domineering <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-2" id="main-traits_magic_boost-fake-fn-2" data-hash-target to="main-traits_magic_boost-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdomineering-domineering-fn2-flavor">When you were young, you attracted a group of devoted companions thanks to your impressive talent, and the experience inspired in you a powerful self-assurance and air of superiority. Your confidence is so strong that others feel naturally compelled to follow your commands.</Pair>
<Pair single="benefit" id="traitdomineering-domineering-fn2-benefit"><p>Choose one 1st-level enchantment spell you are capable of casting. The DC of that spell increases by 1.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Irriseni, Mwangi.</p>
</Pair>
</Ability>
<Ability id="traitdraconicinfusion-draconic-infusion-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdraconicinfusion-draconic-infusion-fn3"><Link to="/trait/draconic_infusion">⮞</Link> Draconic Infusion <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-3" id="main-traits_magic_boost-fake-fn-3" data-hash-target to="main-traits_magic_boost-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdraconicinfusion-draconic-infusion-fn3-flavor">You were exposed to an artifact or other powerful magic that infused you with the power of dragons.</Pair>
<Pair single="benefit" id="traitdraconicinfusion-draconic-infusion-fn3-benefit">Choose the acid, cold, electricity, or fire spell descriptor when you take this trait. Once per day for every 2 caster levels you have (minimum once per day), when you cast a spell that has your chosen elemental descriptor, you can deal an additional 1d4 points of damage of that energy type to one target of that spell.</Pair>
</Ability>
<Ability id="traitinsistentbenefactor-insistent-benefactor-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinsistentbenefactor-insistent-benefactor-fn4"><Link to="/trait/insistent_benefactor">⮞</Link> Insistent Benefactor <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-4" id="main-traits_magic_boost-fake-fn-4" data-hash-target to="main-traits_magic_boost-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitinsistentbenefactor-insistent-benefactor-fn4-flavor">Pathfinders of different backgrounds don't always realize what's best for them, and you have perfected the art of forcing your magical boons on your allies.</Pair>
<Pair single="benefit" id="traitinsistentbenefactor-insistent-benefactor-fn4-benefit">Whenever you cast a harmless spell, you gain a +2 trait bonus on caster level checks to overcome spell resistance, and the saving throw DC of the spell (if any) is increased by 2.</Pair>
</Ability>
<Ability id="traitlowblow-low-blow-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitlowblow-low-blow-fn5"><Link to="/trait/low_blow">⮞</Link> Low Blow <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-5" id="main-traits_magic_boost-fake-fn-5" data-hash-target to="main-traits_magic_boost-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitlowblow-low-blow-fn5-benefit">When targeting a good-aligned creature with a spell or spell-like ability with the pain descriptor or that imposes a morale penalty, increase its effective caster level by 1. If you are of an evil alignment, increase the save DC of the effect by 1 as well.</Pair>
</Ability>
<Ability id="traitmagicalflair-magical-flair-fn2-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicalflair-magical-flair-fn2-2"><Link to="/trait/magical_flair">⮞</Link> Magical Flair <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-2.2" id="main-traits_magic_boost-fake-fn-2.2" data-hash-target to="main-traits_magic_boost-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicalflair-magical-flair-fn2-2-flavor">At a young age, you saw a witch burned by fearful peasants, druids falsely punished for demon worship, or another sort of spellcaster persecuted for merely practicing her dubious craft. Intent on not suffering the same fate, you approach spellcasting with a powerful desire to control how your magic is perceived by others.</Pair>
<Pair single="benefit" id="traitmagicalflair-magical-flair-fn2-2-benefit"><p>You can cause spells you cast to manifest with strange visual, auditory, or olfactory features that make them hard to identify. Choose a school of magic. The <Link to="/skill/spellcraft">Spellcraft</Link> DC to identify spells you cast from that school of magic increases by 2. Onlookers who fail a Spellcraft check to identify your spell by 2 or less incorrectly identify the spell as another randomly selected spell of the same school and level.</p>
<p><strong>Suggested Characters:</strong> Gnomes, Razmir worshipers, witches.</p>
</Pair>
</Ability>
<Ability id="traitoverwhelmingbeauty-overwhelming-beauty-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoverwhelmingbeauty-overwhelming-beauty-fn6"><Link to="/trait/overwhelming_beauty">⮞</Link> Overwhelming Beauty <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-6" id="main-traits_magic_boost-fake-fn-6" data-hash-target to="main-traits_magic_boost-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoverwhelmingbeauty-overwhelming-beauty-fn6-flavor">Your wiles are particularly potent against people who share a race with you, as your beauty is often held up as a symbol of perfection.</Pair>
<Pair single="benefit" id="traitoverwhelmingbeauty-overwhelming-beauty-fn6-benefit">The DC of your mind-affecting effects increases by 1 against creatures that have at least one of the same subtypes as you.</Pair>
</Ability>
<Ability id="traitstabbingspells-stabbing-spells-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitstabbingspells-stabbing-spells-fn7"><Link to="/trait/stabbing_spells">⮞</Link> Stabbing Spells <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-7" id="main-traits_magic_boost-fake-fn-7" data-hash-target to="main-traits_magic_boost-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitstabbingspells-stabbing-spells-fn7-flavor">Aroden wrote much about ways to use weapons to enhance magic's effectiveness, and you have taken to heart the insights gleaned from his words.</Pair>
<Pair single="benefit" id="traitstabbingspells-stabbing-spells-fn7-benefit">Whenever you strike a foe with a weapon, you gain a +2 trait bonus on caster level checks to overcome that foe's spell resistance until the end of your next turn.</Pair>
</Ability>
<Ability id="traittenaciousshifting-tenacious-shifting-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittenaciousshifting-tenacious-shifting-fn8"><Link to="/trait/tenacious_shifting">⮞</Link> Tenacious Shifting <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-8" id="main-traits_magic_boost-fake-fn-8" data-hash-target to="main-traits_magic_boost-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittenaciousshifting-tenacious-shifting-fn8-flavor">You've discovered the secret of stable transmutations.</Pair>
<Pair single="benefit" id="traittenaciousshifting-tenacious-shifting-fn8-benefit">Any transmutation spell you cast upon yourself has its duration increased by 2 rounds. Transmutation spells with an instantaneous duration are not affected by this trait.</Pair>
</Ability>
<Ability id="traittransmuterofkorada-transmuter-of-korada-fn9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittransmuterofkorada-transmuter-of-korada-fn9"><Link to="/trait/transmuter_of_korada">⮞</Link> Transmuter of Korada <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-9" id="main-traits_magic_boost-fake-fn-9" data-hash-target to="main-traits_magic_boost-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittransmuterofkorada-transmuter-of-korada-fn9-flavor">You learned the secrets of transmutation from a follower of the empyreal lord <Link to="/faith/korada">Korada</Link>.</Pair>
<Pair single="benefit" id="traittransmuterofkorada-transmuter-of-korada-fn9-benefit"><p>Whenever you cast a spell from the transmutation school, its effects manifest at +1 caster level.</p>
<p>Additionally, select one of the following transmutation spells: <Link to="/spell/bears_endurance">bear's endurance</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/foxs_cunning">fox's cunning</Link>, or <Link to="/spell/owls_wisdom">owl's wisdom</Link>. Once per day when you cast that spell, its duration is doubled. A spell affected by this trait cannot be modified further by the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat or similar abilities.</p>
</Pair>
</Ability>
<Ability id="traitvolatileconduit-volatile-conduit-fn8-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitvolatileconduit-volatile-conduit-fn8-2"><Link to="/trait/volatile_conduit">⮞</Link> Volatile Conduit <sup><InnerLink showBacklink="backlink-main-traits_magic_boost-fake-fn-8.2" id="main-traits_magic_boost-fake-fn-8.2" data-hash-target to="main-traits_magic_boost-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitvolatileconduit-volatile-conduit-fn8-2-flavor">You discovered a secret that enhances the energy of some spells.</Pair>
<Pair single="benefit" id="traitvolatileconduit-volatile-conduit-fn8-2-benefit">Once per day as a <strong className="hl">free action</strong>, when you cast a spell that deals acid, cold, electricity, or fire damage, you can enhance that spell with volatile energy. When you do, it deals 1d4 points of extra damage of the same energy type.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_boost-label">Footnotes</h3><ol>
<li id="main-traits_magic_boost-fake-fn-1-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_boost-fake-fn-1" data-hash-target to="main-traits_magic_boost-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-2-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_boost-fake-fn-2" data-hash-target to="main-traits_magic_boost-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_boost-fake-fn-2.2" data-hash-target to="main-traits_magic_boost-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-3-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_boost-fake-fn-3" data-hash-target to="main-traits_magic_boost-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-4-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_boost-fake-fn-4" data-hash-target to="main-traits_magic_boost-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-5-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_boost-fake-fn-5" data-hash-target to="main-traits_magic_boost-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-6-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_boost-fake-fn-6" data-hash-target to="main-traits_magic_boost-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-7-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_boost-fake-fn-7" data-hash-target to="main-traits_magic_boost-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-8-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_boost-fake-fn-8" data-hash-target to="main-traits_magic_boost-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_boost-fake-fn-8.2" data-hash-target to="main-traits_magic_boost-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_boost-fake-fn-9-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_magic_boost-fake-fn-9" data-hash-target to="main-traits_magic_boost-fake-fn-9">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_conconj = {title: "Other Spellcasting Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitdeepguardian-deep-guardian-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdeepguardian-deep-guardian-fn1"><Link to="/trait/deep_guardian">⮞</Link> Deep Guardian <sup><InnerLink showBacklink="backlink-main-traits_magic_conconj-fake-fn-1" id="main-traits_magic_conconj-fake-fn-1" data-hash-target to="main-traits_magic_conconj-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/dwarf">Dwarf</Link></Pair>
<Pair single="flavor" id="traitdeepguardian-deep-guardian-fn1-flavor">The subtle power of the deep places of the world flows within you, and grants you mastery of summoning beings of earth and stone.</Pair>
<Pair single="benefit" id="traitdeepguardian-deep-guardian-fn1-benefit">Any creature you conjure with a summon spell that has the earth subtype or a burrow speed gains a +1 morale bonus on attack rolls and a +1 enhancement bonus to Armor Class for the duration of the spell that summoned it.</Pair>
</Ability>
<Ability id="traitdiabolicaldabbler-diabolical-dabbler-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdiabolicaldabbler-diabolical-dabbler-fn2"><Link to="/trait/diabolical_dabbler">⮞</Link> Diabolical Dabbler <sup><InnerLink showBacklink="backlink-main-traits_magic_conconj-fake-fn-2" id="main-traits_magic_conconj-fake-fn-2" data-hash-target to="main-traits_magic_conconj-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitdiabolicaldabbler-diabolical-dabbler-fn2-benefit">Each <Link to="/template/fiendish">fiendish</Link> animal you conjure with any summon spell gains +1 hit point per hit die for the duration of the spell that summoned it.</Pair>
</Ability>
<Ability id="traitoutsiderties-outsider-ties-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoutsiderties-outsider-ties-fn3"><Link to="/trait/outsider_ties">⮞</Link> Outsider Ties <sup><InnerLink showBacklink="backlink-main-traits_magic_conconj-fake-fn-3" id="main-traits_magic_conconj-fake-fn-3" data-hash-target to="main-traits_magic_conconj-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoutsiderties-outsider-ties-fn3-flavor">An outsider visited you at a young age, and you have had a significant affinity with that type of outsider ever since.</Pair>
<Pair single="benefit" id="traitoutsiderties-outsider-ties-fn3-benefit">Choose a subtype of outsider, such as <Link to="/subtype/angel">angel</Link> or <Link to="/subtype/elemental">elemental</Link>. When you summon an outsider of that subtype via <Link to="/spell/summon_monster">summon monster</Link>, <Link to="/spell/planar_ally">planar ally</Link>, <Link to="/spell/planar_binding">planar binding</Link>, or similar spells and abilities, the summoned creature gains a number of temporary hit points equal to the level of spell used to summon it.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_conconj-label">Footnotes</h3><ol>
<li id="main-traits_magic_conconj-fake-fn-1-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_conconj-fake-fn-1" data-hash-target to="main-traits_magic_conconj-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_conconj-fake-fn-2-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_conconj-fake-fn-2" data-hash-target to="main-traits_magic_conconj-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_conconj-fake-fn-3-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_conconj-fake-fn-3" data-hash-target to="main-traits_magic_conconj-fake-fn-3">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_general = {title: "Magic-Related Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitarcaneresearcher-arcane-researcher-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcaneresearcher-arcane-researcher-fn1"><Link to="/trait/arcane_researcher">⮞</Link> Arcane Researcher <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-1" id="main-traits_magic_general-fake-fn-1" data-hash-target to="main-traits_magic_general-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitarcaneresearcher-arcane-researcher-fn1-flavor">Your curiosity and ingenuity have driven you to experiment and push new boundaries, and you have a knack for tampering with magic.</Pair>
<Pair single="benefit" id="traitarcaneresearcher-arcane-researcher-fn1-benefit">You gain a +4 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/spellcraft">Spellcraft</Link> checks to research, modify, and create new spells.</Pair>
</Ability>
<Ability id="traitfortunate-fortunate-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitfortunate-fortunate-fn2"><Link to="/trait/fortunate">⮞</Link> Fortunate <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-2" id="main-traits_magic_general-fake-fn-2" data-hash-target to="main-traits_magic_general-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitfortunate-fortunate-fn2-flavor">You are blessed by fate.</Pair>
<Pair single="benefit" id="traitfortunate-fortunate-fn2-benefit"><p>Once per day when you use a spell or magic item with a randomized effect (such as <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/prismatic_spray">prismatic spray</Link>, or a <Link to="/magic-wondrous/bag_of_tricks_tan">bag of tricks</Link>), before you roll to determine the result, you may choose to roll twice and pick either result.</p>
<p><strong>Suggested Characters:</strong> Calistrians, harrow deck readers, Vudrani.</p>
</Pair>
</Ability>
<Ability id="traithedgemagician-hedge-magician-fn3-fn4-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithedgemagician-hedge-magician-fn3-fn4-fn5"><Link to="/trait/hedge_magician">⮞</Link> Hedge Magician <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-3" id="main-traits_magic_general-fake-fn-3" data-hash-target to="main-traits_magic_general-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-4" id="main-traits_magic_general-fake-fn-4" data-hash-target to="main-traits_magic_general-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-5" id="main-traits_magic_general-fake-fn-5" data-hash-target to="main-traits_magic_general-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traithedgemagician-hedge-magician-fn3-fn4-fn5-flavor">You apprenticed for a time to an artisan who often built magic items, and he taught you many handy shortcuts and cost-saving techniques.</Pair>
<Pair single="benefit" id="traithedgemagician-hedge-magician-fn3-fn4-fn5-benefit">Whenever you craft a magic item, you reduce the required gp cost to make the item by 5%.</Pair>
</Ability>
<Ability id="traitmagicallineage-magical-lineage-fn3-2-fn5-2-fn4-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagicallineage-magical-lineage-fn3-2-fn5-2-fn4-2"><Link to="/trait/magical_lineage">⮞</Link> Magical Lineage <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-3.2" id="main-traits_magic_general-fake-fn-3.2" data-hash-target to="main-traits_magic_general-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-5.2" id="main-traits_magic_general-fake-fn-5.2" data-hash-target to="main-traits_magic_general-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-4.2" id="main-traits_magic_general-fake-fn-4.2" data-hash-target to="main-traits_magic_general-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagicallineage-magical-lineage-fn3-2-fn5-2-fn4-2-flavor">One of your parents was a gifted spellcaster who not only used metamagic often, but also developed many magical items and perhaps even a new spell or two - and you have inherited a fragment of this greatness.</Pair>
<Pair single="benefit" id="traitmagicallineage-magical-lineage-fn3-2-fn5-2-fn4-2-benefit">Pick one spell when you choose this trait. When you apply <Link to="/rule/metamagic_feats">metamagic feats</Link> to this spell that add at least 1 level to the spell, treat its actual level as 1 lower for determining the spell's final adjusted level.</Pair>
</Ability>
<Ability id="traitradianthealing-radiant-healing-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitradianthealing-radiant-healing-fn6"><Link to="/trait/radiant_healing">⮞</Link> Radiant Healing <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-6" id="main-traits_magic_general-fake-fn-6" data-hash-target to="main-traits_magic_general-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitradianthealing-radiant-healing-fn6-flavor">You've learned how to infuse your healing magic with lingering traces of light.</Pair>
<Pair single="benefit" id="traitradianthealing-radiant-healing-fn6-benefit">Whenever you cast a spell from the conjuration (healing) school that has a casting time of a standard action, you can extend its casting time to a <strong className="hl">full-round action</strong> to imbue the target with light, as per <Link to="/spell/light">light</Link>, with a duration of 1 round per caster level.</Pair>
</Ability>
<Ability id="traitshroudedcasting-shrouded-casting-fn3-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitshroudedcasting-shrouded-casting-fn3-3"><Link to="/trait/shrouded_casting">⮞</Link> Shrouded Casting <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-3.3" id="main-traits_magic_general-fake-fn-3.3" data-hash-target to="main-traits_magic_general-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitshroudedcasting-shrouded-casting-fn3-3-flavor">You have learned the secret to casting some spells without lesser material components.</Pair>
<Pair single="benefit" id="traitshroudedcasting-shrouded-casting-fn3-3-benefit">Choose one school of magic when you pick this trait. You can cast spells from that school as if you had the <Link to="/feat/eschew_materials">Eschew Materials</Link> feat.</Pair>
</Ability>
<Ability id="traitsparkofcreation-spark-of-creation-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsparkofcreation-spark-of-creation-fn7"><Link to="/trait/spark_of_creation">⮞</Link> Spark of Creation <sup><InnerLink showBacklink="backlink-main-traits_magic_general-fake-fn-7" id="main-traits_magic_general-fake-fn-7" data-hash-target to="main-traits_magic_general-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsparkofcreation-spark-of-creation-fn7-flavor">You have always had a knack for making useful things, and your talent as an artisan was evident even at an early age.</Pair>
<Pair single="benefit" id="traitsparkofcreation-spark-of-creation-fn7-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> checks, and the cost of creating magic items is reduced by 5%.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_general-label">Footnotes</h3><ol>
<li id="main-traits_magic_general-fake-fn-1-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_general-fake-fn-1" data-hash-target to="main-traits_magic_general-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_general-fake-fn-2-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_general-fake-fn-2" data-hash-target to="main-traits_magic_general-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_general-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_general-fake-fn-3" data-hash-target to="main-traits_magic_general-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_general-fake-fn-3.2" data-hash-target to="main-traits_magic_general-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_general-fake-fn-3.3" data-hash-target to="main-traits_magic_general-fake-fn-3.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_general-fake-fn-4-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_general-fake-fn-4" data-hash-target to="main-traits_magic_general-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_general-fake-fn-4.2" data-hash-target to="main-traits_magic_general-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_general-fake-fn-5-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_general-fake-fn-5" data-hash-target to="main-traits_magic_general-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_general-fake-fn-5.2" data-hash-target to="main-traits_magic_general-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_general-fake-fn-6-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_general-fake-fn-6" data-hash-target to="main-traits_magic_general-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_general-fake-fn-7-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_general-fake-fn-7" data-hash-target to="main-traits_magic_general-fake-fn-7">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_int = {title: "Intelligence-Based-Skill Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitacadamaeneophyte-acadamae-neophyte-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitacadamaeneophyte-acadamae-neophyte-fn1"><Link to="/trait/acadamae_neophyte">⮞</Link> Acadamae Neophyte <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-1" id="main-traits_magic_int-fake-fn-1" data-hash-target to="main-traits_magic_int-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitacadamaeneophyte-acadamae-neophyte-fn1-flavor">You have shown a significant talent for the magical arts, gaining the attention of the famed Acadamae of Korvosa.</Pair>
<Pair single="benefit" id="traitacadamaeneophyte-acadamae-neophyte-fn1-benefit">Whenever you succeed at a <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> check to identify a creature and its special powers or vulnerabilities, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
<Ability id="traitalchemicaladept-alchemical-adept-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitalchemicaladept-alchemical-adept-fn2"><Link to="/trait/alchemical_adept">⮞</Link> Alchemical Adept <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2" id="main-traits_magic_int-fake-fn-2" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitalchemicaladept-alchemical-adept-fn2-flavor">You are skilled in creating alchemical items.</Pair>
<Pair single="benefit" id="traitalchemicaladept-alchemical-adept-fn2-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks made to craft alchemical items. Furthermore, when you fail a Craft (alchemy) check by 5 or more but don't roll a natural 1, you don't ruin any raw materials or have to pay that cost again.</Pair>
</Ability>
<Ability id="traitalchemicalintuition-alchemical-intuition-fn2-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitalchemicalintuition-alchemical-intuition-fn2-2"><Link to="/trait/alchemical_intuition">⮞</Link> Alchemical Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.2" id="main-traits_magic_int-fake-fn-2.2" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitalchemicalintuition-alchemical-intuition-fn2-2-flavor">You are often struck with epiphanies about alchemical processes and substances.</Pair>
<Pair single="benefit" id="traitalchemicalintuition-alchemical-intuition-fn2-2-benefit">Once per day as a <strong className="hl">free action</strong>, you may gain a trait bonus equal to your Charisma modifier (minimum 0) on a <Link to="/skill/craft">Craft</Link> (alchemy) check you make. You can apply this bonus after you roll the check, possibly turning a failure into a success.</Pair>
</Ability>
<Ability id="traitarcaneresearcher-arcane-researcher-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitarcaneresearcher-arcane-researcher-fn3"><Link to="/trait/arcane_researcher">⮞</Link> Arcane Researcher <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-3" id="main-traits_magic_int-fake-fn-3" data-hash-target to="main-traits_magic_int-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitarcaneresearcher-arcane-researcher-fn3-flavor">Your curiosity and ingenuity have driven you to experiment and push new boundaries, and you have a knack for tampering with magic.</Pair>
<Pair single="benefit" id="traitarcaneresearcher-arcane-researcher-fn3-benefit">You gain a +4 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/spellcraft">Spellcraft</Link> checks to research, modify, and create new spells.</Pair>
</Ability>
<Ability id="traitclassicallyschooled-classically-schooled-fn2-3-fn4-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitclassicallyschooled-classically-schooled-fn2-3-fn4-fn5"><Link to="/trait/classically_schooled">⮞</Link> Classically Schooled <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.3" id="main-traits_magic_int-fake-fn-2.3" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-4" id="main-traits_magic_int-fake-fn-4" data-hash-target to="main-traits_magic_int-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-5" id="main-traits_magic_int-fake-fn-5" data-hash-target to="main-traits_magic_int-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitclassicallyschooled-classically-schooled-fn2-3-fn4-fn5-flavor">Your apprenticeship or early education was particularly focused on the direct application of magic.</Pair>
<Pair single="benefit" id="traitclassicallyschooled-classically-schooled-fn2-3-fn4-fn5-benefit">You gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, and Spellcraft is always a class skill for you.</Pair>
</Ability>
<Ability id="traiteldritchauditor-eldritch-auditor-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchauditor-eldritch-auditor-fn6"><Link to="/trait/eldritch_auditor">⮞</Link> Eldritch Auditor <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-6" id="main-traits_magic_int-fake-fn-6" data-hash-target to="main-traits_magic_int-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traiteldritchauditor-eldritch-auditor-fn6-flavor">You are a magically adept merchant who has learned tricks to protect your own goods, or you serve a city as an impartial auditor who guards against arcane trickery in the bazaars.</Pair>
<Pair single="benefit" id="traiteldritchauditor-eldritch-auditor-fn6-benefit">You gain a +2 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks and Will saves to identify an item's true properties, such as against spells like <Link to="/spell/magic_aura">magic aura</Link>.</Pair>
</Ability>
<Ability id="traiteldritchdelver-eldritch-delver-fn2-4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traiteldritchdelver-eldritch-delver-fn2-4"><Link to="/trait/eldritch_delver">⮞</Link> Eldritch Delver <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.4" id="main-traits_magic_int-fake-fn-2.4" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traiteldritchdelver-eldritch-delver-fn2-4-flavor">You have an unquenchable thirst for knowledge about the world and desire to obtain it firsthand.</Pair>
<Pair single="benefit" id="traiteldritchdelver-eldritch-delver-fn2-4-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> and <Link to="/skill/knowledge_history">Knowledge (history)</Link> checks, and you may treat your caster level as 1 level higher for all conjuration spells of the teleportation subschool.</Pair>
</Ability>
<Ability id="traitkeenappraiser-keen-appraiser-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitkeenappraiser-keen-appraiser-fn7"><Link to="/trait/keen_appraiser">⮞</Link> Keen Appraiser <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-7" id="main-traits_magic_int-fake-fn-7" data-hash-target to="main-traits_magic_int-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitkeenappraiser-keen-appraiser-fn7-flavor">Your frequent handling of magic items, artifacts, and other enchanted goods has made you an expert at determining when something has magical properties.</Pair>
<Pair single="benefit" id="traitkeenappraiser-keen-appraiser-fn7-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks. In addition, you need only exceed the DC of an Appraise check by 2 in order to determine whether the item in question has magic properties (although success still does not grant knowledge of the magic item's abilities).</p>
<p><strong>Suggested Characters:</strong> Drumans, dwarves, Torag worshipers.</p>
</Pair>
</Ability>
<Ability id="traitmagiccrafter-magic-crafter-fn2-5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmagiccrafter-magic-crafter-fn2-5"><Link to="/trait/magic_crafter">⮞</Link> Magic Crafter <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.5" id="main-traits_magic_int-fake-fn-2.5" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmagiccrafter-magic-crafter-fn2-5-flavor">Your early magical training involved study of the properties and creation of magic items.</Pair>
<Pair single="benefit" id="traitmagiccrafter-magic-crafter-fn2-5-benefit">You gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks and a +1 bonus on any <Link to="/skill/craft">Craft</Link> checks attempted while making magic items.</Pair>
</Ability>
<Ability id="traitmathematicalprodigy-mathematical-prodigy-fn2-6-fn4-2-fn5-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmathematicalprodigy-mathematical-prodigy-fn2-6-fn4-2-fn5-2"><Link to="/trait/mathematical_prodigy">⮞</Link> Mathematical Prodigy <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.6" id="main-traits_magic_int-fake-fn-2.6" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-4.2" id="main-traits_magic_int-fake-fn-4.2" data-hash-target to="main-traits_magic_int-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-5.2" id="main-traits_magic_int-fake-fn-5.2" data-hash-target to="main-traits_magic_int-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmathematicalprodigy-mathematical-prodigy-fn2-6-fn4-2-fn5-2-flavor">Mathematics has always come easily for you, and you have always been able to "see the math" in the physical and magical world.</Pair>
<Pair single="benefit" id="traitmathematicalprodigy-mathematical-prodigy-fn2-6-fn4-2-fn5-2-benefit">You gain a +1 bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmechanicalaptitude-mechanical-aptitude-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmechanicalaptitude-mechanical-aptitude-fn8"><Link to="/trait/mechanical_aptitude">⮞</Link> Mechanical Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-8" id="main-traits_magic_int-fake-fn-8" data-hash-target to="main-traits_magic_int-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmechanicalaptitude-mechanical-aptitude-fn8-flavor">You have learned much from tinkering with ancient technology from the Jistka Imperium.</Pair>
<Pair single="benefit" id="traitmechanicalaptitude-mechanical-aptitude-fn8-benefit">Choose one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, or <Link to="/skill/use_magic_device">Use Magic Device</Link>. Once per day, you can reroll a check with that skill before the outcome of the check is revealed. You must take the second result, even if it is worse.</Pair>
</Ability>
<Ability id="traitperfectionistsbrew-perfectionists-brew-fn2-7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitperfectionistsbrew-perfectionists-brew-fn2-7"><Link to="/trait/perfectionists_brew">⮞</Link> Perfectionist's Brew <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.7" id="main-traits_magic_int-fake-fn-2.7" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitperfectionistsbrew-perfectionists-brew-fn2-7-flavor">You know that potion recipes should be followed with exact precision.</Pair>
<Pair single="benefit" id="traitperfectionistsbrew-perfectionists-brew-fn2-7-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks and on <Link to="/skill/spellcraft">Spellcraft</Link> checks made to brew potions.</Pair>
</Ability>
<Ability id="traitpossessed-possessed-fn2-8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpossessed-possessed-fn2-8"><Link to="/trait/possessed">⮞</Link> Possessed <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.8" id="main-traits_magic_int-fake-fn-2.8" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitpossessed-possessed-fn2-8-flavor">You were, or are, possessed in some way by another entity that grants you occasional access to its knowledge.</Pair>
<Pair single="benefit" id="traitpossessed-possessed-fn2-8-benefit">Once per day, you can attempt a <Link to="/skill/knowledge">Knowledge</Link> check of your choice even if you are not trained in that skill and it is not usually possible to use that skill untrained. If you can normally use that skill untrained, you gain a +2 trait bonus on the check.</Pair>
</Ability>
<Ability id="traitreluctantapprentice-reluctant-apprentice-fn2-9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitreluctantapprentice-reluctant-apprentice-fn2-9"><Link to="/trait/reluctant_apprentice">⮞</Link> Reluctant Apprentice <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.9" id="main-traits_magic_int-fake-fn-2.9" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitreluctantapprentice-reluctant-apprentice-fn2-9-flavor">Your early training grants you knowledge of the arcane.</Pair>
<Pair single="benefit" id="traitreluctantapprentice-reluctant-apprentice-fn2-9-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks, and are considered trained in that skill even if you have no ranks in it.</Pair>
</Ability>
<Ability id="traitselftaughtscholar-self-taught-scholar-fn2-10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitselftaughtscholar-self-taught-scholar-fn2-10"><Link to="/trait/self_taught_scholar">⮞</Link> Self-Taught Scholar <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-2.10" id="main-traits_magic_int-fake-fn-2.10" data-hash-target to="main-traits_magic_int-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitselftaughtscholar-self-taught-scholar-fn2-10-flavor">Being self-taught has made it necessary for you to scour all documentation you can get your hands on.</Pair>
<Pair single="benefit" id="traitselftaughtscholar-self-taught-scholar-fn2-10-benefit">You gain a +1 trait bonus on <Link to="/skill/linguistics">Linguistics</Link> checks to decipher unfamiliar languages, and Linguistics is always a class skill for you. In addition, you gain a +1 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks made to decipher the writing on a scroll.</Pair>
</Ability>
<Ability id="traitsparkofcreation-spark-of-creation-fn9" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsparkofcreation-spark-of-creation-fn9"><Link to="/trait/spark_of_creation">⮞</Link> Spark of Creation <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-9" id="main-traits_magic_int-fake-fn-9" data-hash-target to="main-traits_magic_int-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsparkofcreation-spark-of-creation-fn9-flavor">You have always had a knack for making useful things, and your talent as an artisan was evident even at an early age.</Pair>
<Pair single="benefit" id="traitsparkofcreation-spark-of-creation-fn9-benefit">You gain a +1 trait bonus on <Link to="/skill/craft">Craft</Link> checks, and the cost of creating magic items is reduced by 5%.</Pair>
</Ability>
<Ability id="traittheoreticalmagician-theoretical-magician-fn10" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traittheoreticalmagician-theoretical-magician-fn10"><Link to="/trait/theoretical_magician">⮞</Link> Theoretical Magician <sup><InnerLink showBacklink="backlink-main-traits_magic_int-fake-fn-10" id="main-traits_magic_int-fake-fn-10" data-hash-target to="main-traits_magic_int-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traittheoreticalmagician-theoretical-magician-fn10-flavor">You've studied more magic than what you can actually perform.</Pair>
<Pair single="benefit" id="traittheoreticalmagician-theoretical-magician-fn10-benefit">You gain a +2 trait bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks, or a +3 bonus if you aren't a spellcaster.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_int-label">Footnotes</h3><ol>
<li id="main-traits_magic_int-fake-fn-1-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_int-fake-fn-1" data-hash-target to="main-traits_magic_int-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-2-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2" data-hash-target to="main-traits_magic_int-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.2" data-hash-target to="main-traits_magic_int-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.3" data-hash-target to="main-traits_magic_int-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.4" data-hash-target to="main-traits_magic_int-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.5" data-hash-target to="main-traits_magic_int-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.6" data-hash-target to="main-traits_magic_int-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.7" data-hash-target to="main-traits_magic_int-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.8" data-hash-target to="main-traits_magic_int-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.9" data-hash-target to="main-traits_magic_int-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_int-fake-fn-2.10" data-hash-target to="main-traits_magic_int-fake-fn-2.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-3-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_int-fake-fn-3" data-hash-target to="main-traits_magic_int-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_int-fake-fn-4" data-hash-target to="main-traits_magic_int-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_int-fake-fn-4.2" data-hash-target to="main-traits_magic_int-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-5-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_int-fake-fn-5" data-hash-target to="main-traits_magic_int-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_int-fake-fn-5.2" data-hash-target to="main-traits_magic_int-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-6-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_int-fake-fn-6" data-hash-target to="main-traits_magic_int-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-7-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_int-fake-fn-7" data-hash-target to="main-traits_magic_int-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-8-target"><p>Blood of the Ancients pg. 19 <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_int-fake-fn-8" data-hash-target to="main-traits_magic_int-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-9-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_magic_int-fake-fn-9" data-hash-target to="main-traits_magic_int-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_magic_int-fake-fn-10-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_magic_int-fake-fn-10" data-hash-target to="main-traits_magic_int-fake-fn-10">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_cha = {title: "Charisma-Based-Skill Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitcharlatan-charlatan-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitcharlatan-charlatan-fn1"><Link to="/trait/charlatan">⮞</Link> Charlatan <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-1" id="main-traits_magic_cha-fake-fn-1" data-hash-target to="main-traits_magic_cha-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcharlatan-charlatan-fn1-flavor">Your talent for illusion goes beyond a mere knack for figments and phantasms. You can actually channel spell energy into simple illusions that augment your attempts at deception.</Pair>
<Pair single="benefit" id="traitcharlatan-charlatan-fn1-benefit"><p>As a <strong className="hl">swift action</strong>, you may expend one prepared spell or spell slot to gain a bonus on the next <Link to="/skill/bluff">Bluff</Link> check you make, provided the check takes place before the beginning of your next turn. The bonus on this check is equal to the level of the spell consumed.</p>
<p>You may use this ability 3 times per day. Only gnomes of nonlawful alignment may take this trait.</p>
</Pair>
</Ability>
<Ability id="traitdangerouslycurious-dangerously-curious-fn2-fn3-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitdangerouslycurious-dangerously-curious-fn2-fn3-fn4"><Link to="/trait/dangerously_curious">⮞</Link> Dangerously Curious <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-2" id="main-traits_magic_cha-fake-fn-2" data-hash-target to="main-traits_magic_cha-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-3" id="main-traits_magic_cha-fake-fn-3" data-hash-target to="main-traits_magic_cha-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-4" id="main-traits_magic_cha-fake-fn-4" data-hash-target to="main-traits_magic_cha-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitdangerouslycurious-dangerously-curious-fn2-fn3-fn4-flavor">You have always been intrigued by magic, possibly because you were the child of a magician or priest. You often snuck into your parent's laboratory or shrine to tinker with spell components and magic devices, and frequently caused quite a bit of damage and headaches for your parent as a result.</Pair>
<Pair single="benefit" id="traitdangerouslycurious-dangerously-curious-fn2-fn3-fn4-benefit">You gain a +1 bonus on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks, and Use Magic Device is always a class skill for you.</Pair>
</Ability>
<Ability id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn5"><Link to="/trait/house_of_green_mothers_pupil">⮞</Link> House of Green Mothers Pupil <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-5" id="main-traits_magic_cha-fake-fn-5" data-hash-target to="main-traits_magic_cha-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn5-flavor">You studied at Anuli's center for druidic magic long enough to begin bonding with a familiar.</Pair>
<Pair single="benefit" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn5-benefit">You gain a +1 trait bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks. You may substitute this trait for <Link to="/feat/iron_will">Iron Will</Link> as the prerequisite for the <Link to="/feat/familiar_bond">Familiar Bond</Link> feat.</Pair>
</Ability>
<Ability id="traitmechanicalaptitude-mechanical-aptitude-fn6" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmechanicalaptitude-mechanical-aptitude-fn6"><Link to="/trait/mechanical_aptitude">⮞</Link> Mechanical Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-6" id="main-traits_magic_cha-fake-fn-6" data-hash-target to="main-traits_magic_cha-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmechanicalaptitude-mechanical-aptitude-fn6-flavor">You have learned much from tinkering with ancient technology from the Jistka Imperium.</Pair>
<Pair single="benefit" id="traitmechanicalaptitude-mechanical-aptitude-fn6-benefit">Choose one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, or <Link to="/skill/use_magic_device">Use Magic Device</Link>. Once per day, you can reroll a check with that skill before the outcome of the check is revealed. You must take the second result, even if it is worse.</Pair>
</Ability>
<Ability id="traitpartialprotege-partial-protege-fn2-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpartialprotege-partial-protege-fn2-2"><Link to="/trait/partial_protege">⮞</Link> Partial Protege <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-2.2" id="main-traits_magic_cha-fake-fn-2.2" data-hash-target to="main-traits_magic_cha-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitpartialprotege-partial-protege-fn2-2-flavor">You are adept at disguising your true talents.</Pair>
<Pair single="benefit" id="traitpartialprotege-partial-protege-fn2-2-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks made to emulate a class feature.</Pair>
</Ability>
<Ability id="traitpragmaticactivator-pragmatic-activator-fn2-3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitpragmaticactivator-pragmatic-activator-fn2-3"><Link to="/trait/pragmatic_activator">⮞</Link> Pragmatic Activator <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-2.3" id="main-traits_magic_cha-fake-fn-2.3" data-hash-target to="main-traits_magic_cha-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitpragmaticactivator-pragmatic-activator-fn2-3-flavor">While some figure out how to use magical devices with stubborn resolve, your approach is more pragmatic.</Pair>
<Pair single="benefit" id="traitpragmaticactivator-pragmatic-activator-fn2-3-benefit">You may use your Intelligence modifier when making <Link to="/skill/use_magic_device">Use Magic Device</Link> checks instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitsecretscrolls-secret-scrolls-fn7" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitsecretscrolls-secret-scrolls-fn7"><Link to="/trait/secret_scrolls">⮞</Link> Secret Scrolls <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-7" id="main-traits_magic_cha-fake-fn-7" data-hash-target to="main-traits_magic_cha-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitsecretscrolls-secret-scrolls-fn7-flavor">You were inducted into a secret magical tradition such as the Esoteric Order of the Palatine Eye.</Pair>
<Pair single="benefit" id="traitsecretscrolls-secret-scrolls-fn7-benefit">You can cast <Link to="/spell/read_magic">read magic</Link> once per day as a spell-like ability, and gain a +1 trait bonus on <Link to="/skill/use_magic_device">Use Magic Device</Link> checks to activate scrolls you cannot normally use.</Pair>
</Ability>
<Ability id="traitspiritualattachment-spiritual-attachment-fn8" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitspiritualattachment-spiritual-attachment-fn8"><Link to="/trait/spiritual_attachment">⮞</Link> Spiritual Attachment <sup><InnerLink showBacklink="backlink-main-traits_magic_cha-fake-fn-8" id="main-traits_magic_cha-fake-fn-8" data-hash-target to="main-traits_magic_cha-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitspiritualattachment-spiritual-attachment-fn8-flavor">The union between spirits and spiritualists is one of the strongest (and strangest) bonds shared between the mortal realm and the spirit world. Spiritualists can use the knowledge of their linked phantoms to better negotiate with other spirits. Whether you're a spiritualist or not, you've always had a similar knack when it comes to interactions with the spirit world.</Pair>
<Pair single="benefit" id="traitspiritualattachment-spiritual-attachment-fn8-benefit">You gain a +4 trait bonus on checks to notice <Link to="/rule/haunts">haunts</Link>, and when interacting with someone who is possessed by an incorporeal undead creature, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks against that target.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_cha-label">Footnotes</h3><ol>
<li id="main-traits_magic_cha-fake-fn-1-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_cha-fake-fn-1" data-hash-target to="main-traits_magic_cha-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-2-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_cha-fake-fn-2" data-hash-target to="main-traits_magic_cha-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_cha-fake-fn-2.2" data-hash-target to="main-traits_magic_cha-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_cha-fake-fn-2.3" data-hash-target to="main-traits_magic_cha-fake-fn-2.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-3-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_cha-fake-fn-3" data-hash-target to="main-traits_magic_cha-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_cha-fake-fn-4" data-hash-target to="main-traits_magic_cha-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-5-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_cha-fake-fn-5" data-hash-target to="main-traits_magic_cha-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-6-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 19 <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_magic_cha-fake-fn-6" data-hash-target to="main-traits_magic_cha-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-7-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_magic_cha-fake-fn-7" data-hash-target to="main-traits_magic_cha-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_magic_cha-fake-fn-8-target"><p><Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_magic_cha-fake-fn-8" data-hash-target to="main-traits_magic_cha-fake-fn-8">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_ab = {title: "Other Skill Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitchildofthemoon-child-of-the-moon-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitchildofthemoon-child-of-the-moon-fn1"><Link to="/trait/child_of_the_moon">⮞</Link> Child of the Moon <sup><InnerLink showBacklink="backlink-main-traits_magic_ab-fake-fn-1" id="main-traits_magic_ab-fake-fn-1" data-hash-target to="main-traits_magic_ab-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitchildofthemoon-child-of-the-moon-fn1-flavor">Your lunar gift becomes much more powerful when the moon is full.</Pair>
<Pair single="benefit" id="traitchildofthemoon-child-of-the-moon-fn1-benefit">Choose either <Link to="/skill/climb">Climb</Link>, <Link to="/skill/stealth">Stealth</Link>, or <Link to="/skill/swim">Swim</Link>. You gain a +1 trait bonus on checks made with the chosen skill. On dates during and after the first quarter of a lunar phase but before end of the last quarter (the half of the lunar cycle where the moon is fuller), this bonus increases to +2. During the full moon, this bonus increases to +4.</Pair>
</Ability>
<Ability id="traitmechanicalaptitude-mechanical-aptitude-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmechanicalaptitude-mechanical-aptitude-fn2"><Link to="/trait/mechanical_aptitude">⮞</Link> Mechanical Aptitude <sup><InnerLink showBacklink="backlink-main-traits_magic_ab-fake-fn-2" id="main-traits_magic_ab-fake-fn-2" data-hash-target to="main-traits_magic_ab-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmechanicalaptitude-mechanical-aptitude-fn2-flavor">You have learned much from tinkering with ancient technology from the Jistka Imperium.</Pair>
<Pair single="benefit" id="traitmechanicalaptitude-mechanical-aptitude-fn2-benefit">Choose one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, or <Link to="/skill/use_magic_device">Use Magic Device</Link>. Once per day, you can reroll a check with that skill before the outcome of the check is revealed. You must take the second result, even if it is worse.</Pair>
</Ability>
<Ability id="traitmutanteye-mutant-eye-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitmutanteye-mutant-eye-fn3"><Link to="/trait/mutant_eye">⮞</Link> Mutant Eye <sup><InnerLink showBacklink="backlink-main-traits_magic_ab-fake-fn-3" id="main-traits_magic_ab-fake-fn-3" data-hash-target to="main-traits_magic_ab-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitmutanteye-mutant-eye-fn3-flavor">One of your parents was exposed to uncontrolled magic or arcane pollution before you were born, causing you to develop a minor mutation that has marked you as different all your life.</Pair>
<Pair single="benefit" id="traitmutanteye-mutant-eye-fn3-benefit"><p>You have a third eye on your forehead. As long as it is uncovered and open, you can get a clearer sense of the emotions of those you see, granting you a +2 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks that increases to +4 on checks to notice whether a character is under a mind-affecting effect. However, the eye is unsettling, and you take a -1 penalty on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/diplomacy">Diplomacy</Link> checks against humanoids who can see it.</p>
<p><strong>Suggested Characters:</strong> Lamashtans, Mana Wastes natives, Nexians.</p>
</Pair>
</Ability>
<Ability id="traitoutcastsintuition-outcasts-intuition-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitoutcastsintuition-outcasts-intuition-fn4"><Link to="/trait/outcasts_intuition">⮞</Link> Outcast's Intuition <sup><InnerLink showBacklink="backlink-main-traits_magic_ab-fake-fn-4" id="main-traits_magic_ab-fake-fn-4" data-hash-target to="main-traits_magic_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitoutcastsintuition-outcasts-intuition-fn4-flavor">You are able to sense the motives of others and use that sense to bolster your magic against dispelling.</Pair>
<Pair single="benefit" id="traitoutcastsintuition-outcasts-intuition-fn4-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you. In addition, your caster level is treated as 1 level higher for the purposes of any attempts to dispel your magic.</Pair>
</Ability>
<Ability id="traitprecisetreatment-precise-treatment-fn4-2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitprecisetreatment-precise-treatment-fn4-2"><Link to="/trait/precise_treatment">⮞</Link> Precise Treatment <sup><InnerLink showBacklink="backlink-main-traits_magic_ab-fake-fn-4.2" id="main-traits_magic_ab-fake-fn-4.2" data-hash-target to="main-traits_magic_ab-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitprecisetreatment-precise-treatment-fn4-2-flavor">You treat others with a clear and calculating intellect.</Pair>
<Pair single="benefit" id="traitprecisetreatment-precise-treatment-fn4-2-benefit">You gain a +1 trait bonus on all <Link to="/skill/heal">Heal</Link> checks, and you may use your Intelligence modifier when making Heal checks instead of your Wisdom modifier.</Pair>
</Ability>
<Ability id="traitspiritualattachment-spiritual-attachment-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitspiritualattachment-spiritual-attachment-fn5"><Link to="/trait/spiritual_attachment">⮞</Link> Spiritual Attachment <sup><InnerLink showBacklink="backlink-main-traits_magic_ab-fake-fn-5" id="main-traits_magic_ab-fake-fn-5" data-hash-target to="main-traits_magic_ab-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitspiritualattachment-spiritual-attachment-fn5-flavor">The union between spirits and spiritualists is one of the strongest (and strangest) bonds shared between the mortal realm and the spirit world. Spiritualists can use the knowledge of their linked phantoms to better negotiate with other spirits. Whether you're a spiritualist or not, you've always had a similar knack when it comes to interactions with the spirit world.</Pair>
<Pair single="benefit" id="traitspiritualattachment-spiritual-attachment-fn5-benefit">You gain a +4 trait bonus on checks to notice <Link to="/rule/haunts">haunts</Link>, and when interacting with someone who is possessed by an incorporeal undead creature, you gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks against that target.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_ab-label">Footnotes</h3><ol>
<li id="main-traits_magic_ab-fake-fn-1-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_ab-fake-fn-1" data-hash-target to="main-traits_magic_ab-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_ab-fake-fn-2-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 19 <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_ab-fake-fn-2" data-hash-target to="main-traits_magic_ab-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_ab-fake-fn-3-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_ab-fake-fn-3" data-hash-target to="main-traits_magic_ab-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_ab-fake-fn-4-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_ab-fake-fn-4" data-hash-target to="main-traits_magic_ab-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_ab-fake-fn-4.2" data-hash-target to="main-traits_magic_ab-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_magic_ab-fake-fn-5-target"><p><Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_ab-fake-fn-5" data-hash-target to="main-traits_magic_ab-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_magic_other = {title: "Other Skill/Feat/Ability Magic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_magic" className="reversed" info="Back to Magic Traits" /><Ability id="traitbountifulherblore-bountiful-herb-lore-fn1" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitbountifulherblore-bountiful-herb-lore-fn1"><Link to="/trait/bountiful_herb_lore">⮞</Link> Bountiful Herb-Lore <sup><InnerLink showBacklink="backlink-main-traits_magic_other-fake-fn-1" id="main-traits_magic_other-fake-fn-1" data-hash-target to="main-traits_magic_other-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair title="Region" hl>Cassomir</Pair>
<Pair single="benefit" id="traitbountifulherblore-bountiful-herb-lore-fn1-benefit">Once per day after 10 minutes of foraging, you can sprinkle nutritious herbs into a magical consumable item (such as a potion of <Link to="/spell/cure_light_wounds">cure light wounds</Link>). If the item is consumed within 1 minute, it provides nourishment as if it were a normal meal to the creature that partakes of it.</Pair>
</Ability>
<Ability id="traitguidingspirit-guiding-spirit-fn2" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitguidingspirit-guiding-spirit-fn2"><Link to="/trait/guiding_spirit">⮞</Link> Guiding Spirit <sup><InnerLink showBacklink="backlink-main-traits_magic_other-fake-fn-2" id="main-traits_magic_other-fake-fn-2" data-hash-target to="main-traits_magic_other-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitguidingspirit-guiding-spirit-fn2-flavor">Few understand the medium's willingness to harbor powerful spirits, but even if you aren't one of these talented few, you've always identified with their abilities. you've always felt that you were not alone in this world and that a mysterious guiding spirit watches over you with singular focus. You may have briefly glimpsed this strange spirit - or maybe you simply feel its presence in times of need.</Pair>
<Pair single="benefit" id="traitguidingspirit-guiding-spirit-fn2-benefit">Once per day as a <strong className="hl">swift action</strong>, you can look to your guiding spirit for advice. The next time you roll a d20 in that same round, roll twice and pick the better result. If one of these two rolls is a natural 20, you can use this ability again that same day.</Pair>
</Ability>
<Ability id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn3" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn3"><Link to="/trait/house_of_green_mothers_pupil">⮞</Link> House of Green Mothers Pupil <sup><InnerLink showBacklink="backlink-main-traits_magic_other-fake-fn-3" id="main-traits_magic_other-fake-fn-3" data-hash-target to="main-traits_magic_other-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn3-flavor">You studied at Anuli's center for druidic magic long enough to begin bonding with a familiar.</Pair>
<Pair single="benefit" id="traithouseofgreenmotherspupil-house-of-green-mothers-pupil-fn3-benefit">You gain a +1 trait bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks. You may substitute this trait for <Link to="/feat/iron_will">Iron Will</Link> as the prerequisite for the <Link to="/feat/familiar_bond">Familiar Bond</Link> feat.</Pair>
</Ability>
<Ability id="traitinternalcompass-internal-compass-fn4" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitinternalcompass-internal-compass-fn4"><Link to="/trait/internal_compass">⮞</Link> Internal Compass <sup><InnerLink showBacklink="backlink-main-traits_magic_other-fake-fn-4" id="main-traits_magic_other-fake-fn-4" data-hash-target to="main-traits_magic_other-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="benefit" id="traitinternalcompass-internal-compass-fn4-benefit">You maintain a sense of direction, even on planes where direction is relative. If you are on a plane that has no analogue to north, you automatically know the direction toward the plane's major dominating feature (for instance, Pharasma's Spire in the Boneyard, or the sun in Nirvana). If there is no such dominating feature, you instead know the direction of the closest feature significant to one of the plane's divinities or demigods.</Pair>
</Ability>
<Ability id="traitouterdragonblood-outer-dragon-blood-fn5" extraClasses="trait" icon={["magic-swirl"]}>
<Pair single id="traitouterdragonblood-outer-dragon-blood-fn5"><Link to="/trait/outer_dragon_blood">⮞</Link> Outer Dragon Blood <sup><InnerLink showBacklink="backlink-main-traits_magic_other-fake-fn-5" id="main-traits_magic_other-fake-fn-5" data-hash-target to="main-traits_magic_other-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Magic</Pair>
<Pair single="flavor" id="traitouterdragonblood-outer-dragon-blood-fn5-flavor">The blood of outer dragons courses through your veins, and you've inherited a portion of their magic.</Pair>
<Pair single="benefit" id="traitouterdragonblood-outer-dragon-blood-fn5-benefit"><p>You gain Draconic as a bonus language. In addition, if you are a sorcerer with the <Link to="/sorcbloodline/draconic">draconic</Link> bloodline, you can select one of the <Link to="/family/outer_dragon">outer dragon</Link> types for your bloodline powers; this affects your resistances and the type of energy damage dealt by a number of your abilities.</p>
<ul>
<li><strong>Lunar:</strong> Cold energy, 60-foot line</li>
<li><strong>Solar:</strong> Fire energy, 60-foot line</li>
<li><strong>Time:</strong> Electricity energy, 30-foot cone</li>
<li><strong>Void:</strong> Cold energy, 30-foot cone</li>
<li><strong>Vortex:</strong> Fire energy, 30-foot cone</li>
</ul>
</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_magic_other-label">Footnotes</h3><ol>
<li id="main-traits_magic_other-fake-fn-1-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_magic_other-fake-fn-1" data-hash-target to="main-traits_magic_other-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_magic_other-fake-fn-2-target"><p><Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_magic_other-fake-fn-2" data-hash-target to="main-traits_magic_other-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_magic_other-fake-fn-3-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_magic_other-fake-fn-3" data-hash-target to="main-traits_magic_other-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_magic_other-fake-fn-4-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_magic_other-fake-fn-4" data-hash-target to="main-traits_magic_other-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_magic_other-fake-fn-5-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_magic_other-fake-fn-5" data-hash-target to="main-traits_magic_other-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
export default {traits_magic:_traits_magic,traits_magic_all:_traits_magic_all,traits_magic_def:_traits_magic_def,traits_magic_spell:_traits_magic_spell,traits_magic_class:_traits_magic_class,traits_magic_cl:_traits_magic_cl,traits_magic_boost:_traits_magic_boost,traits_magic_conconj:_traits_magic_conconj,traits_magic_general:_traits_magic_general,traits_magic_int:_traits_magic_int,traits_magic_cha:_traits_magic_cha,traits_magic_ab:_traits_magic_ab,traits_magic_other:_traits_magic_other}