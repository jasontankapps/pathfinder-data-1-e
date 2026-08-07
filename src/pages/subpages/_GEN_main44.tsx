import {IonList,IonItemDivider} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import MainLink from '../../components/MainLink';
import InnerLink from '../../components/InnerLink';
const _traits_social = {title: "Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItemDivider className="mainItem divider"></IonItemDivider><MainLink to="/main/traits_social_all" endem="(163 traits)" info="All Social Traits" /><MainLink to="/main/traits_social_off" className="indented" bottom="Affects attack rolls, damage, etc; 7 traits" info="Offense Traits" /><MainLink to="/main/traits_social_def" className="indented" bottom="Affects armor bonuses, saving throws, etc; 26 traits" info="Defense Traits" /><MainLink to="/main/traits_social_class" className="indented" bottom="Requires a class ability to function; 5 traits" info="Class-Specific Traits" /><MainLink to="/main/traits_social_magic" className="indented" bottom="Grants a spell or spell-like-ability, or affects caster level or spellcasting ability; 7 traits" info="Spell/Magic-Related Traits" /><MainLink to="/main/traits_social_code" className="indented" bottom="Presents a &quot&code of conduct&quot& that must be followed; 5 traits" info="Knightly Code Traits" /><MainLink to="/main/traits_social_lang" className="indented" bottom="Affects languages known; 5 traits" info="Language Traits" /><MainLink to="/main/traits_social_bluff" className="indented" bottom="Affects the Bluff skill; 18 traits" info="Bluff Traits" /><MainLink to="/main/traits_social_diplo" className="indented" bottom="Affects the Diplomacy skill; 38 traits" info="Diplomacy Traits" /><MainLink to="/main/traits_social_intm" className="indented" bottom="Affects the Intimidate skill; 24 traits" info="Intimidate Traits" /><MainLink to="/main/traits_social_k" className="indented" bottom="Affects any of the Knowledge skills; 20 traits" info="Knowledge Traits" /><MainLink to="/main/traits_social_sm" className="indented" bottom="Affects the Sense Motive skill; 13 traits" info="Sense Motive Traits" /><MainLink to="/main/traits_social_sur_per" className="indented" bottom="Affects the Survival or Perception skills; 12 traits" info="Survival and Perception Traits" /><MainLink to="/main/traits_social_phys" className="indented" bottom="Affects Acrobatics, Climb, Disable Device, Disguise, Escape Artist, Sleight of Hand, or Stealth; 10 traits" info="Physical Skill Traits" /><MainLink to="/main/traits_social_mental" className="indented" bottom="Affects Appraise, Linguistics, Spellcraft, or any Intelligence-based skill; 9 traits" info="Mental Skill Traits" /><MainLink to="/main/traits_social_cha" className="indented" bottom="Affects any Charisma-based skills; 5 traits" info="Charisma Skill Traits" /><MainLink to="/main/traits_social_prod" className="indented" bottom="Affects Craft, Perform, or Profession skills; 11 traits" info="Productive Skill Traits" /><MainLink to="/main/traits_social_other" className="indented" bottom="Affects other skills/feats/abilities; 15 traits" info="Other Social Traits" /></IonList>};
const _traits_social_all = {title: "All Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitacrobat-acrobat-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitacrobat-acrobat-fn1"><Link to="/trait/acrobat">⮞</Link> Acrobat <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1" id="main-traits_social_all-fake-fn-1" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitacrobat-acrobat-fn1-flavor">Having trained from a young age, you're capable of amazing feats of daring.</Pair>
<Pair single="benefit" id="traitacrobat-acrobat-fn1-benefit">You gain a +1 bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks, and you take only a -2 penalty instead of the normal -5 penalty when using the <Link to="/skill/climb">Climb</Link> skill to attempt an accelerated climb.</Pair>
</Ability>
<Ability id="traitadopted-adopted-fn1-2-fn2-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitadopted-adopted-fn1-2-fn2-fn3"><Link to="/trait/adopted">⮞</Link> Adopted <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.2" id="main-traits_social_all-fake-fn-1.2" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2" id="main-traits_social_all-fake-fn-2" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3" id="main-traits_social_all-fake-fn-3" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitadopted-adopted-fn1-2-fn2-fn3-benefit">You were adopted and raised by someone not of your race, and raised in a society not your own. As a result, you picked up a race trait from your adoptive parents and society, and may immediately select a <Link to="/main/traits_race">race trait</Link> from your adoptive parents' race.</Pair>
</Ability>
<Ability id="traitaffable-affable-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitaffable-affable-fn4"><Link to="/trait/affable">⮞</Link> Affable <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-4" id="main-traits_social_all-fake-fn-4" data-hash-target to="main-traits_social_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitaffable-affable-fn4-flavor">You have a genial personality and make it a point to befriend and help people wherever you go. In your travels, you stop to aid others, tell interesting stories, and often buy rounds of drinks for patrons at the local taverns. You bring good cheer to those you encounter, and for this reason, you often find yourself attending important events or fruitful gatherings, and have even become an honorary member of many families. People find you trustworthy, and they are willing to share information with you.</Pair>
<Pair single="benefit" id="traitaffable-affable-fn4-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information, and can do so in half the normal time. In addition, Diplomacy and <Link to="/skill/knowledge_local">Knowledge (local)</Link> are always class skills for you.</Pair>
</Ability>
<Ability id="traitalliesinthedeep-allies-in-the-deep-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitalliesinthedeep-allies-in-the-deep-fn5"><Link to="/trait/allies_in_the_deep">⮞</Link> Allies in the Deep <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-5" id="main-traits_social_all-fake-fn-5" data-hash-target to="main-traits_social_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitalliesinthedeep-allies-in-the-deep-fn5-flavor">You've learned to deal amicably with individuals of questionable morals when necessary.</Pair>
<Pair single="benefit" id="traitalliesinthedeep-allies-in-the-deep-fn5-benefit">You gain a +1 trait bonus on Charisma-based skill checks to influence evil creatures.</Pair>
</Ability>
<Ability id="traitambitious-ambitious-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitambitious-ambitious-fn1-3"><Link to="/trait/ambitious">⮞</Link> Ambitious <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.3" id="main-traits_social_all-fake-fn-1.3" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitambitious-ambitious-fn1-3-flavor">You exude confidence in the presence of those more powerful than you - sometimes unreasonably so.</Pair>
<Pair single="benefit" id="traitambitious-ambitious-fn1-3-benefit">You gain a +4 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to influence creatures with at least 5 Hit Dice more than you possess.</Pair>
</Ability>
<Ability id="traitamiableblunder-amiable-blunder-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitamiableblunder-amiable-blunder-fn6"><Link to="/trait/amiable_blunder">⮞</Link> Amiable Blunder <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-6" id="main-traits_social_all-fake-fn-6" data-hash-target to="main-traits_social_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitamiableblunder-amiable-blunder-fn6-flavor">Your easy-going demeanor allows you to sometimes recover from potentially awkward social situations or even condemnatory faux pas.</Pair>
<Pair single="benefit" id="traitamiableblunder-amiable-blunder-fn6-benefit">Once per day when you fail a <Link to="/skill/diplomacy">Diplomacy</Link> check by 5 or more and would cause an NPC's attitude toward you to worsen, you can immediately attempt another Diplomacy check against the same DC as a <strong className="hl">free action</strong>. If you succeed at this second Diplomacy check, the character's attitude doesn't change, as though you had failed the original check by 4 or less.</Pair>
</Ability>
<Ability id="traitamiablebriber-amiable-briber-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitamiablebriber-amiable-briber-fn7"><Link to="/trait/amiable_briber">⮞</Link> Amiable Briber <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-7" id="main-traits_social_all-fake-fn-7" data-hash-target to="main-traits_social_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Absalom</Pair>
<Pair single="flavor" id="traitamiablebriber-amiable-briber-fn7-flavor">Your attempts to bribe others usually come off as playful or as a gag.</Pair>
<Pair single="benefit" id="traitamiablebriber-amiable-briber-fn7-benefit">The first time someone refuses a bribe you offer, that person's attitude toward you doesn't worsen, even if the offer would normally offend the person (as though you had failed a <Link to="/skill/diplomacy">Diplomacy</Link> check by 5 or more).</Pair>
</Ability>
<Ability id="traitancestralarmor-ancestral-armor-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitancestralarmor-ancestral-armor-fn8"><Link to="/trait/ancestral_armor">⮞</Link> Ancestral Armor <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-8" id="main-traits_social_all-fake-fn-8" data-hash-target to="main-traits_social_all-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitancestralarmor-ancestral-armor-fn8-flavor">You inherited an ancient set of Tar Taargadth armor.</Pair>
<Pair single="benefit" id="traitancestralarmor-ancestral-armor-fn8-benefit">You begin play with a set of <Link to="/rule/masterwork_armor">masterwork armor</Link> of your choice. You must be proficient in wearing this armor, and the armor's total cost cannot exceed 300 gp.</Pair>
</Ability>
<Ability id="traitarodenitehistorian-arodenite-historian-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitarodenitehistorian-arodenite-historian-fn9"><Link to="/trait/arodenite_historian">⮞</Link> Arodenite Historian <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-9" id="main-traits_social_all-fake-fn-9" data-hash-target to="main-traits_social_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitarodenitehistorian-arodenite-historian-fn9-flavor">You believe there is much useful information to glean from the mark Aroden left on history, and learn all you can about his exploits and teachings. This has given you significant insights on how different kinds of information are interconnected.</Pair>
<Pair single="benefit" id="traitarodenitehistorian-arodenite-historian-fn9-benefit">If you fail a <Link to="/skill/knowledge">Knowledge</Link> (arcana, history, or religion) check, you can reroll the check 1 round later using your bonus for one of the other two skills.</Pair>
</Ability>
<Ability id="traitartisan-artisan-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitartisan-artisan-fn1-4"><Link to="/trait/artisan">⮞</Link> Artisan <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.4" id="main-traits_social_all-fake-fn-1.4" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitartisan-artisan-fn1-4-flavor">You spent time working under artisans, or your parents were artisans who were particularly skilled at their trade.</Pair>
<Pair single="benefit" id="traitartisan-artisan-fn1-4-benefit">You gain a +2 trait bonus on a single <Link to="/skill/craft">Craft</Link> skill (your choice).</Pair>
</Ability>
<Ability id="traitavidreader-avid-reader-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitavidreader-avid-reader-fn10"><Link to="/trait/avid_reader">⮞</Link> Avid Reader <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10" id="main-traits_social_all-fake-fn-10" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitavidreader-avid-reader-fn10-flavor">As a youth, you voraciously consumed books and scrolls provided by a member of an adventurer's guild or a learned organization like the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, and you have internalized these stories of bold adventurers.</Pair>
<Pair single="benefit" id="traitavidreader-avid-reader-fn10-benefit"><p>Choose one <Link to="/skill/knowledge">Knowledge</Link> skill. You can always choose to take 10 on checks with the chosen Knowledge skill, even when distracted or threatened.</p>
<p><strong>Suggested Characters:</strong> Osirians, Pathfinders, Taldans.</p>
</Pair>
</Ability>
<Ability id="traitbalanceddetermination-balanced-determination-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbalanceddetermination-balanced-determination-fn11"><Link to="/trait/balanced_determination">⮞</Link> Balanced Determination <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11" id="main-traits_social_all-fake-fn-11" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbalanceddetermination-balanced-determination-fn11-flavor">You've come to appreciate the balanced approach taken by sovereign dragons.</Pair>
<Pair single="benefit" id="traitbalanceddetermination-balanced-determination-fn11-benefit">Once per day, before attempting a saving throw against a spell ability originating from another creature, you can invoke the determination of <Link to="/family/sovereign_dragon">sovereign dragons</Link>. You take 10 on the saving throw (treat the d20 die result as if it were a 10).</Pair>
</Ability>
<Ability id="traitbastarduc-bastard-uc-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbastarduc-bastard-uc-fn1-5"><Link to="/trait/bastard_uc">⮞</Link> Bastard (UC) <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.5" id="main-traits_social_all-fake-fn-1.5" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbastarduc-bastard-uc-fn1-5-flavor">You were born out of wedlock. You have always been an outsider in society, and in your own family. This perspective has sharpened your insight.</Pair>
<Pair single="benefit" id="traitbastarduc-bastard-uc-fn1-5-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you.</Pair>
</Ability>
<Ability id="traitbeastbond-beast-bond-fn1-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbeastbond-beast-bond-fn1-6"><Link to="/trait/beast_bond">⮞</Link> Beast Bond <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.6" id="main-traits_social_all-fake-fn-1.6" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbeastbond-beast-bond-fn1-6-flavor">You share a close bond with animals.</Pair>
<Pair single="benefit" id="traitbeastbond-beast-bond-fn1-6-benefit">You gain a +1 bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks and <Link to="/skill/ride">Ride</Link> checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitbeastkin-beastkin-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbeastkin-beastkin-fn12"><Link to="/trait/beastkin">⮞</Link> Beastkin <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-12" id="main-traits_social_all-fake-fn-12" data-hash-target to="main-traits_social_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitbeastkin-beastkin-fn12-benefit"><p>Select one specific type of animal (such as wolves or apes). You were raised from infancy by an animal or pack of animals of that type. You learned their ways and have more in common with your beastly kin than members of any humanoid race.</p>
<p>You gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks and can use <Link to="/spell/speak_with_animals">speak with animals</Link> as a spell-like ability at will to communicate with the type of animal that raised you.</p>
</Pair>
</Ability>
<Ability id="traitbindersblood-binders-blood-fn13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbindersblood-binders-blood-fn13"><Link to="/trait/binders_blood">⮞</Link> Binder's Blood <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-13" id="main-traits_social_all-fake-fn-13" data-hash-target to="main-traits_social_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbindersblood-binders-blood-fn13-flavor">Your lineage features a large number of genie callers, granting you insight into the intricacies of genie binding.</Pair>
<Pair single="benefit" id="traitbindersblood-binders-blood-fn13-benefit">You gain a +2 trait bonus on any Charisma-based checks when directly interacting with a genie.</Pair>
</Ability>
<Ability id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn14" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn14"><Link to="/trait/brastlewark_businessman_gog">⮞</Link> Brastlewark Businessman (GoG) <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-14" id="main-traits_social_all-fake-fn-14" data-hash-target to="main-traits_social_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn14-flavor">Your time among the gnome elite of Brastlewark in Cheliax has led to an extensive knowledge of alchemy and ready connections in the business.</Pair>
<Pair single="benefit" id="traitbrastlewarkbusinessmangog-brastlewark-businessman-gog-fn14-benefit">You gain a +2 trait bonus on all <Link to="/skill/craft">Craft</Link> (alchemy) checks.</Pair>
</Ability>
<Ability id="traitbruisingintellect-bruising-intellect-fn1-7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbruisingintellect-bruising-intellect-fn1-7"><Link to="/trait/bruising_intellect">⮞</Link> Bruising Intellect <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.7" id="main-traits_social_all-fake-fn-1.7" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbruisingintellect-bruising-intellect-fn1-7-flavor">Your sharp intellect and rapier-like wit bruise egos.</Pair>
<Pair single="benefit" id="traitbruisingintellect-bruising-intellect-fn1-7-benefit"><Link to="/skill/intimidate">Intimidate</Link> is always a class skill for you, and you may use your Intelligence modifier when making Intimidate checks instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitbully-bully-fn1-8-fn2-2-fn3-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbully-bully-fn1-8-fn2-2-fn3-2"><Link to="/trait/bully">⮞</Link> Bully <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.8" id="main-traits_social_all-fake-fn-1.8" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.2" id="main-traits_social_all-fake-fn-2.2" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.2" id="main-traits_social_all-fake-fn-3.2" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbully-bully-fn1-8-fn2-2-fn3-2-flavor">You grew up in an environment where the meek were ignored and you often had to resort to threats or violence to be heard.</Pair>
<Pair single="benefit" id="traitbully-bully-fn1-8-fn2-2-fn3-2-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is always a class skill for you.</Pair>
</Ability>
<Ability id="traitbureaucratsfavored-bureaucrats-favored-fn15" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbureaucratsfavored-bureaucrats-favored-fn15"><Link to="/trait/bureaucrats_favored">⮞</Link> Bureaucrat's Favored <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-15" id="main-traits_social_all-fake-fn-15" data-hash-target to="main-traits_social_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Osirion</Pair>
<Pair title="Requirements" hl>Associated with the court of the Black Dome</Pair>
<Pair single="flavor" id="traitbureaucratsfavored-bureaucrats-favored-fn15-flavor">You have gained favor with the government of Sothis.</Pair>
<Pair single="benefit" id="traitbureaucratsfavored-bureaucrats-favored-fn15-benefit">Once per week, you can attempt a DC 20 <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> check to gain access to an exclusive site or event, such as a government building or an aristocrat's ball.</Pair>
</Ability>
<Ability id="traitcalculatedbribe-calculated-bribe-fn16" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcalculatedbribe-calculated-bribe-fn16"><Link to="/trait/calculated_bribe">⮞</Link> Calculated Bribe <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-16" id="main-traits_social_all-fake-fn-16" data-hash-target to="main-traits_social_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Perseverance" hl><p>Knights who follow the code of perseverance believe that to truly serve a purpose, an organization or group of individuals must first look to its own survival. Deeds are temporary and forgotten with time. For an organization to be influential, it must persist. These knights collect power and wealth, always looking to the future. Their vows are as follows.</p>
<ul>
<li>I will take on no challenges out of charity. Any task that I undertake for another individual will have an associated price, though it may not be monetary in nature.</li>
<li>I shall let neither compassion nor hatred rob me of wealth. I will not give wealth away to those who have done nothing for me, nor shall I engage in needless destruction of potential resources.</li>
<li>I will set aside a fraction of all my spoils to guard against any chances of future poverty.</li>
<li>If I have an opportunity to seize power, I will not hesitate to take it if it will strengthen my position.</li>
<li>I will not take unnecessary risks that place my future or the future of my organization in jeopardy.</li>
</ul>
</Pair>
<Pair single="flavor" id="traitcalculatedbribe-calculated-bribe-fn16-flavor">If you follow this code, you are keenly aware of the value of actions as well as goods.</Pair>
<Pair single="benefit" id="traitcalculatedbribe-calculated-bribe-fn16-benefit"><p>Once per day while haggling with a merchant or striking a bargain with another intelligent creature, you can spend a number of gold pieces equal to your level &times; 10 in order to reroll a <Link to="/skill/diplomacy">Diplomacy</Link> check you just made, before the results are revealed. You must take the result of the reroll, even if it's worse than the original roll.</p>
<p>In addition, you begin play with a set of extravagant noble's clothes worth 100 gp.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate this code must perform penance by placing money into a fund to guard against their order's future poverty. The amount required for a knight to set aside is 100 gold &times; the knight's current level.</Pair>
</Ability>
<Ability id="traitcallous-callous-fn17" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcallous-callous-fn17"><Link to="/trait/callous">⮞</Link> Callous <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-17" id="main-traits_social_all-fake-fn-17" data-hash-target to="main-traits_social_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcallous-callous-fn17-flavor">You have endured many hardships throughout your life, and this has hardened you to the suffering of others to the point that you are not easily swayed by a sad story.</Pair>
<Pair single="benefit" id="traitcallous-callous-fn17-benefit">You gain a +4 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks that oppose the <Link to="/skill/bluff">Bluff</Link> checks of creatures that attempt to deceive you by winning your sympathy.</Pair>
</Ability>
<Ability id="traitcanter-canter-fn1-9-fn3-3-fn2-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcanter-canter-fn1-9-fn3-3-fn2-3"><Link to="/trait/canter">⮞</Link> Canter <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.9" id="main-traits_social_all-fake-fn-1.9" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.3" id="main-traits_social_all-fake-fn-3.3" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.3" id="main-traits_social_all-fake-fn-2.3" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcanter-canter-fn1-9-fn3-3-fn2-3-flavor">You grew up among thieves and scoundrels, and their unusual speech patterns and turns of phrase don't faze you in the slightest.</Pair>
<Pair single="benefit" id="traitcanter-canter-fn1-9-fn3-3-fn2-3-benefit">Anyone who attempts to use <Link to="/skill/bluff">Bluff</Link> to deliver a secret message to you gains a +5 bonus on her Bluff check. When you attempt to intercept a secret message using <Link to="/skill/sense_motive">Sense Motive</Link>, you gain a +5 trait bonus on the attempt.</Pair>
</Ability>
<Ability id="traitcarnalattraction-carnal-attraction-fn18" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcarnalattraction-carnal-attraction-fn18"><Link to="/trait/carnal_attraction">⮞</Link> Carnal Attraction <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-18" id="main-traits_social_all-fake-fn-18" data-hash-target to="main-traits_social_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitcarnalattraction-carnal-attraction-fn18-benefit">You know how to ask the wrong questions the right way, granting you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> (gather information) and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks regarding whichever vice fascinates you: drugs, forbidden lore, gambling, illegal fighting, or a similar debauchery or indecency.</Pair>
</Ability>
<Ability id="traitcharming-charming-fn1-10-fn2-4-fn3-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcharming-charming-fn1-10-fn2-4-fn3-4"><Link to="/trait/charming">⮞</Link> Charming <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.10" id="main-traits_social_all-fake-fn-1.10" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.4" id="main-traits_social_all-fake-fn-2.4" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.4" id="main-traits_social_all-fake-fn-3.4" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcharming-charming-fn1-10-fn2-4-fn3-4-flavor">Blessed with good looks, you've come to depend on the fact that others find you attractive.</Pair>
<Pair single="benefit" id="traitcharming-charming-fn1-10-fn2-4-fn3-4-benefit">You gain a +1 trait bonus when you use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures.</Pair>
</Ability>
<Ability id="traitchelishsympathizer-chelish-sympathizer-fn19" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchelishsympathizer-chelish-sympathizer-fn19"><Link to="/trait/chelish_sympathizer">⮞</Link> Chelish Sympathizer <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-19" id="main-traits_social_all-fake-fn-19" data-hash-target to="main-traits_social_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchelishsympathizer-chelish-sympathizer-fn19-flavor">You feed intelligence to the Thrice-Damned House of Thrune for your own gain or ideological reasons and are given valuable clues gathered by other Chelish spies in exchange.</Pair>
<Pair single="benefit" id="traitchelishsympathizer-chelish-sympathizer-fn19-benefit">Once per month while in an Inner Sea region settlement of at least 2,000 people, you can call upon your connections to gain an edge in a <Link to="/rule/verbal_duels">verbal duel</Link> or gain a +2 bonus on one <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check.</Pair>
</Ability>
<Ability id="traitchildofthestreets-child-of-the-streets-fn1-11-fn3-5-fn2-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchildofthestreets-child-of-the-streets-fn1-11-fn3-5-fn2-5"><Link to="/trait/child_of_the_streets">⮞</Link> Child of the Streets <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.11" id="main-traits_social_all-fake-fn-1.11" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.5" id="main-traits_social_all-fake-fn-3.5" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.5" id="main-traits_social_all-fake-fn-2.5" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchildofthestreets-child-of-the-streets-fn1-11-fn3-5-fn2-5-flavor">You grew up on the streets of a large city, and as a result you have developed a knack for picking pockets and hiding small objects on your person.</Pair>
<Pair single="benefit" id="traitchildofthestreets-child-of-the-streets-fn1-11-fn3-5-fn2-5-benefit">You gain a +1 trait bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks, and Sleight of Hand is always a class skill for you.</Pair>
</Ability>
<Ability id="traitchipontheshoulder-chip-on-the-shoulder-fn20" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchipontheshoulder-chip-on-the-shoulder-fn20"><Link to="/trait/chip_on_the_shoulder">⮞</Link> Chip on the Shoulder <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20" id="main-traits_social_all-fake-fn-20" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchipontheshoulder-chip-on-the-shoulder-fn20-flavor">When someone pushes you, you push back.</Pair>
<Pair single="benefit" id="traitchipontheshoulder-chip-on-the-shoulder-fn20-benefit">Whenever a creature fails an <Link to="/skill/intimidate">Intimidate</Link> check against you, you gain a +2 trait bonus on your next Intimidate check against that creature. Intimidate becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitcivilized-civilized-fn1-12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcivilized-civilized-fn1-12"><Link to="/trait/civilized">⮞</Link> Civilized <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.12" id="main-traits_social_all-fake-fn-1.12" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcivilized-civilized-fn1-12-flavor">You are well versed in the local laws, customs, and politics.</Pair>
<Pair single="benefit" id="traitcivilized-civilized-fn1-12-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcleverwordplay-clever-wordplay-fn21" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcleverwordplay-clever-wordplay-fn21"><Link to="/trait/clever_wordplay">⮞</Link> Clever Wordplay <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-21" id="main-traits_social_all-fake-fn-21" data-hash-target to="main-traits_social_all-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcleverwordplay-clever-wordplay-fn21-flavor">Your cunning and logic are more than a match for another's confidence and poise.</Pair>
<Pair single="benefit" id="traitcleverwordplay-clever-wordplay-fn21-benefit">Choose one Charisma-based skill. You attempt checks with that skill using your Intelligence modifier instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitcollector-collector-fn14-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcollector-collector-fn14-2"><Link to="/trait/collector">⮞</Link> Collector <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-14.2" id="main-traits_social_all-fake-fn-14.2" data-hash-target to="main-traits_social_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitcollector-collector-fn14-2-flavor">You have a small, bizarre collection of apparently worthless items, such as rusty nails, animal droppings, clockwork cogs, or bent spoons. You find this strange menagerie useful in ways no non-gnome could understand. Seeking new items to add to this collection is endlessly fascinating to you, and while no one else may understand why a Chelish horsenail is worthy to add to your collection when a dwarven wheelbarrow nail is not, it all makes sense to you.</Pair>
<Pair single="benefit" id="traitcollector-collector-fn14-2-benefit"><p>Select one of the following skills: <Link to="/skill/craft">Craft</Link> (any one), <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/perform">Perform</Link> (any one), or <Link to="/skill/spellcraft">Spellcraft</Link>. Whenever you have your collection within 5 feet of you, you gain a +2 trait bonus on all checks made with the selected skill.</p>
<p>Once this skill has been selected, it cannot be changed, nor can you gain it for any other collection you begin amassing.</p>
</Pair>
</Ability>
<Ability id="traitcompetitive-competitive-fn10-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcompetitive-competitive-fn10-2"><Link to="/trait/competitive">⮞</Link> Competitive <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.2" id="main-traits_social_all-fake-fn-10.2" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcompetitive-competitive-fn10-2-flavor">You grew up and were raised around fabulous sporting events, and your youth was consumed with a driving need to be better than everyone else. Any hint of a contest spurs you to your greatest heights of potential.</Pair>
<Pair single="benefit" id="traitcompetitive-competitive-fn10-2-benefit"><p>Whenever another creature within 30 feet attempts a skill check and you attempt a check with the same skill before the start of that creature's next turn, you gain a +1 trait bonus on your check (this includes attempting an opposed skill check against the creature).</p>
<p><strong>Suggested Characters:</strong> Brevans, Kurgess worshipers, Sargavans.</p>
</Pair>
</Ability>
<Ability id="traitcontagiousmettle-contagious-mettle-fn16-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcontagiousmettle-contagious-mettle-fn16-2"><Link to="/trait/contagious_mettle">⮞</Link> Contagious Mettle <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-16.2" id="main-traits_social_all-fake-fn-16.2" data-hash-target to="main-traits_social_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Valor" hl><p>Knights who follow the code of valor believe that nothing is more important than courage in battle. The strength of knights is determined by their willingness to stand in the face of overwhelming odds. Without valor, knighthood is merely a title. Their vows are as follows.</p>
<ul>
<li>I will accept any challenge to combat if given honorably, regardless of my opponent.</li>
<li>If I know combat to be the best course of action, I shall not let an enemy discourage me from it with a threat of overwhelming force.</li>
<li>Once battle is a forgone conclusion, I will be among the first of my allies to charge and engage our foes.</li>
<li>I shall not willingly succumb to fear. If retreat is a necessity, I will be among the last of my allies to leave the field of battle.</li>
<li>I will not leave any of my allies on the field, nor will I abandon them while they are in immediate danger.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitcontagiousmettle-contagious-mettle-fn16-2-benefit">If you follow this code, you gain a +1 trait bonus on Will saves against fear. In addition, any allies adjacent to you receive a +1 morale bonus on Will saves against fear.</Pair>
<Pair title="Penance" hl>Knights who violate this code must perform penance by volunteering their service to a local militia, army, or fighting company for at least 1 week, whether by performing unusual missions, leading troops into battle, or assisting in the training of soldiers.</Pair>
</Ability>
<Ability id="traitcontemptuous-contemptuous-fn17-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcontemptuous-contemptuous-fn17-2"><Link to="/trait/contemptuous">⮞</Link> Contemptuous <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-17.2" id="main-traits_social_all-fake-fn-17.2" data-hash-target to="main-traits_social_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcontemptuous-contemptuous-fn17-2-flavor">Whether you are a commoner who has come to despise the haughty upper crust or a holier-than-thou noble who can't stand being around the unwashed masses, your contempt drives you to study carefully, making sure you always have the upper hand in social exchanges with them.</Pair>
<Pair single="benefit" id="traitcontemptuous-contemptuous-fn17-2-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks, and one of these skills becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitconvincingliar-convincing-liar-fn22" extraClasses="trait" icon={["village"]}>
<Pair single id="traitconvincingliar-convincing-liar-fn22"><Link to="/trait/convincing_liar">⮞</Link> Convincing Liar <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-22" id="main-traits_social_all-fake-fn-22" data-hash-target to="main-traits_social_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="flavor" id="traitconvincingliar-convincing-liar-fn22-flavor">You've spent your life perfecting the art of half-truths in order to accomplish what you need to.</Pair>
<Pair single="benefit" id="traitconvincingliar-convincing-liar-fn22-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/intimidate">Intimidate</Link> checks and one of these skills (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminal-criminal-fn1-13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminal-criminal-fn1-13"><Link to="/trait/criminal">⮞</Link> Criminal <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.13" id="main-traits_social_all-fake-fn-1.13" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminal-criminal-fn1-13-flavor">You spent your early life robbing and stealing to get by.</Pair>
<Pair single="benefit" id="traitcriminal-criminal-fn1-13-benefit">Select one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminalroots-criminal-roots-fn19-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminalroots-criminal-roots-fn19-2"><Link to="/trait/criminal_roots">⮞</Link> Criminal Roots <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-19.2" id="main-traits_social_all-fake-fn-19.2" data-hash-target to="main-traits_social_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminalroots-criminal-roots-fn19-2-flavor">Your family has long operated outside the law.</Pair>
<Pair single="benefit" id="traitcriminalroots-criminal-roots-fn19-2-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence criminals and on <Link to="/skill/intimidate">Intimidate</Link> checks to influence law-abiding citizens, but take a -2 penalty on Diplomacy checks to influence law-abiding citizens. Diplomacy or Intimidate (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminallyconnected-criminally-connected-fn17-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminallyconnected-criminally-connected-fn17-3"><Link to="/trait/criminally_connected">⮞</Link> Criminally Connected <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-17.3" id="main-traits_social_all-fake-fn-17.3" data-hash-target to="main-traits_social_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminallyconnected-criminally-connected-fn17-3-flavor">You have spent a lot of time dealing with the criminal underworld - so much that it might be hard for observers to see you as distinct from it. However, this familiarity gives you a leg up on heroes who refuse to muddy their reputation.</Pair>
<Pair single="benefit" id="traitcriminallyconnected-criminally-connected-fn17-3-benefit">While in settlements, you gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information.</Pair>
</Ability>
<Ability id="traitcuttingcondescension-cutting-condescension-fn23" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcuttingcondescension-cutting-condescension-fn23"><Link to="/trait/cutting_condescension">⮞</Link> Cutting Condescension <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-23" id="main-traits_social_all-fake-fn-23" data-hash-target to="main-traits_social_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcuttingcondescension-cutting-condescension-fn23-flavor">The Sable Company has taught you to quickly get compliance from those in your way.</Pair>
<Pair single="benefit" id="traitcuttingcondescension-cutting-condescension-fn23-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks to force a creature to act friendly towards you, and can attempt such checks in half the normal time.</Pair>
</Ability>
<Ability id="traitcynical-cynical-fn17-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcynical-cynical-fn17-4"><Link to="/trait/cynical">⮞</Link> Cynical <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-17.4" id="main-traits_social_all-fake-fn-17.4" data-hash-target to="main-traits_social_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcynical-cynical-fn17-4-flavor">You have seen many heroes in your time, but you see only their capacity for failure and the ways they fall short of being truly good. This practice in looking past facades has proven a useful skill.</Pair>
<Pair single="benefit" id="traitcynical-cynical-fn17-4-benefit">You gain a +1 trait bonus on saving throws against illusions and charm effects.</Pair>
</Ability>
<Ability id="traitcynicalear-cynical-ear-fn20-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcynicalear-cynical-ear-fn20-2"><Link to="/trait/cynical_ear">⮞</Link> Cynical Ear <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.2" id="main-traits_social_all-fake-fn-20.2" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcynicalear-cynical-ear-fn20-2-flavor">Neither honeyed tongues or righteous wrath move you much.</Pair>
<Pair single="benefit" id="traitcynicalear-cynical-ear-fn20-2-benefit">Add 2 when determining your Hit Dice for <Link to="/skill/intimidate">Intimidate</Link> checks, and increase the DC or all <Link to="/skill/diplomacy">Diplomacy</Link> checks against you by 2.</Pair>
</Ability>
<Ability id="traitdarklandsscholar-darklands-scholar-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdarklandsscholar-darklands-scholar-fn5-2"><Link to="/trait/darklands_scholar">⮞</Link> Darklands Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-5.2" id="main-traits_social_all-fake-fn-5.2" data-hash-target to="main-traits_social_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdarklandsscholar-darklands-scholar-fn5-2-flavor">Unsatisfied with mere stories, you have spent years researching journals and firsthand accounts of those who explored the Darklands before you.</Pair>
<Pair single="benefit" id="traitdarklandsscholar-darklands-scholar-fn5-2-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge">Knowledge</Link> checks to identify the weaknesses of Darklands creatures.</Pair>
</Ability>
<Ability id="traitdarklandstrader-darklands-trader-fn5-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdarklandstrader-darklands-trader-fn5-3"><Link to="/trait/darklands_trader">⮞</Link> Darklands Trader <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-5.3" id="main-traits_social_all-fake-fn-5.3" data-hash-target to="main-traits_social_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdarklandstrader-darklands-trader-fn5-3-flavor">You're familiar with Nar-Voth's trade routes and negotiation involving the denizens of the Darklands.</Pair>
<Pair single="benefit" id="traitdarklandstrader-darklands-trader-fn5-3-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks relating to subterranean trade and on <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> checks relating to subterranean creatures. Select one of these skills to be a class skill for you.</Pair>
</Ability>
<Ability id="traitdebaucherydefier-debauchery-defier-fn15-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdebaucherydefier-debauchery-defier-fn15-2"><Link to="/trait/debauchery_defier">⮞</Link> Debauchery Defier <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-15.2" id="main-traits_social_all-fake-fn-15.2" data-hash-target to="main-traits_social_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Taldor</Pair>
<Pair title="Requirements" hl>Associated with the court of the Imperial Palace of Taldor</Pair>
<Pair single="flavor" id="traitdebaucherydefier-debauchery-defier-fn15-2-flavor">You are particularly adept at resisting addiction.</Pair>
<Pair single="benefit" id="traitdebaucherydefier-debauchery-defier-fn15-2-benefit">You must fail two saving throws in a row to become addicted to a drug.</Pair>
</Ability>
<Ability id="traitdeepcover-deep-cover-fn19-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdeepcover-deep-cover-fn19-3"><Link to="/trait/deep_cover">⮞</Link> Deep Cover <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-19.3" id="main-traits_social_all-fake-fn-19.3" data-hash-target to="main-traits_social_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdeepcover-deep-cover-fn19-3-flavor">You have lived a double life since your youth, perhaps to avoid persecution for your true identity or in service to an enemy of the people or group associated with your cover identity.</Pair>
<Pair single="benefit" id="traitdeepcover-deep-cover-fn19-3-benefit">You can always take 10 on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/disguise">Disguise</Link> checks to assume and maintain your cover identity. Bluff or Disguise (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitdestineddiplomat-destined-diplomat-fn1-14" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdestineddiplomat-destined-diplomat-fn1-14"><Link to="/trait/destined_diplomat">⮞</Link> Destined Diplomat <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.14" id="main-traits_social_all-fake-fn-1.14" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdestineddiplomat-destined-diplomat-fn1-14-flavor">Your relationship with your eidolon gives you some clout with other outsiders.</Pair>
<Pair single="benefit" id="traitdestineddiplomat-destined-diplomat-fn1-14-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks toward outsiders, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traitdetectdisobedience-detect-disobedience-fn24" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdetectdisobedience-detect-disobedience-fn24"><Link to="/trait/detect_disobedience">⮞</Link> Detect Disobedience <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-24" id="main-traits_social_all-fake-fn-24" data-hash-target to="main-traits_social_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdetectdisobedience-detect-disobedience-fn24-flavor">You have an uncanny ability to spot a mutiny brewing.</Pair>
<Pair single="benefit" id="traitdetectdisobedience-detect-disobedience-fn24-benefit">You gain a +2 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to detect when an underling is trying to hide something from you, and can attempt such checks instead of Perception checks to notice and react to a subordinate's surprise attack against you.</Pair>
</Ability>
<Ability id="traitdismantleorder-dismantle-order-fn16-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdismantleorder-dismantle-order-fn16-3"><Link to="/trait/dismantle_order">⮞</Link> Dismantle Order <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-16.3" id="main-traits_social_all-fake-fn-16.3" data-hash-target to="main-traits_social_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Revolution" hl><p>Knights who follow the code of revolution believe that strict laws are an unnecessary bulwark standing in the way of social progress. According to these knights, intelligent and civilized people are inherently good-natured, and if left to their own devices, individuals would prove more wholesome and attuned to the natural order of things than when tainted by the unnatural strictures of organized society. Their vows are as follows.</p>
<ul>
<li><p>The wicked must be punished, though not by the hands of corrupted officials or easily swayed politicians.</p>
</li>
<li><p>I shall not let stand acts of unfairness performed by governments or their harbingers. Those who contribute to an organized system of cruelty shall feel my wrath.</p>
</li>
<li><p>All prisoners, regardless of whether they were convicted or not, deserve a second chance.</p>
</li>
<li><p>Tribal or lawless societies exemplify the natural order, and under my watch shall not come to harm from those who would seek to rule them.</p>
</li>
<li><p>Those creatures who live free shall see no harm fall to them by myself or my sword.</p>
</li>
<li><p>I shall not place unnecessary value on material possessions, as such things are fleeting, whereas deeds are immortal.</p>
</li>
</ul>
</Pair>
<Pair single="flavor" id="traitdismantleorder-dismantle-order-fn16-3-flavor">If you follow this code, your appreciation for unfettered social freedom allows you to locate supporters of law with supernatural ease.</Pair>
<Pair single="benefit" id="traitdismantleorder-dismantle-order-fn16-3-benefit">Once per day, you can use <Link to="/spell/detect_law">detect law</Link> as a spell-like ability (caster level 1st). If you have levels in a class that can cast <em>detect law,</em> your caster level for this spell-like ability is equal to that class level.</Pair>
<Pair title="Penance" hl>Knights who follow this code and violate one of its tenets must separate themselves from society in order to atone for their misdoing. The minimum amount of time spent wholly isolated from civilization is 1 week, though this time might be increased to up to 1 month, depending on the transgression.</Pair>
</Ability>
<Ability id="traitdoublespeak-doublespeak-fn20-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdoublespeak-doublespeak-fn20-3"><Link to="/trait/doublespeak">⮞</Link> Doublespeak <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.3" id="main-traits_social_all-fake-fn-20.3" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdoublespeak-doublespeak-fn20-3-flavor">It isn't what you say - it's how you say it.</Pair>
<Pair single="benefit" id="traitdoublespeak-doublespeak-fn20-3-benefit">You gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to pass along secret messages.</Pair>
</Ability>
<Ability id="traitdraconicdestiny-draconic-destiny-fn11-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdraconicdestiny-draconic-destiny-fn11-2"><Link to="/trait/draconic_destiny">⮞</Link> Draconic Destiny <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.2" id="main-traits_social_all-fake-fn-11.2" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdraconicdestiny-draconic-destiny-fn11-2-flavor">Whether you are aware of it or not, the moment of your birth was but one part of a far-reaching machination in a dragon's grand design, and the influence of that mysterious plan makes you a little harder to kill.</Pair>
<Pair single="benefit" id="traitdraconicdestiny-draconic-destiny-fn11-2-benefit">When <Link to="/misc/dying">dying</Link>, you gain a +2 trait bonus on Constitution checks to become stable. In addition, you die from hit point loss only once your hit points equal or exceed a negative amount equal to your Constitution score + 2.</Pair>
</Ability>
<Ability id="traitdragonhunted-dragon-hunted-fn11-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdragonhunted-dragon-hunted-fn11-3"><Link to="/trait/dragon_hunted">⮞</Link> Dragon-Hunted <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.3" id="main-traits_social_all-fake-fn-11.3" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdragonhunted-dragon-hunted-fn11-3-flavor">You've survived being hunted by the draconic nightmares on the Shackles islands of Dahak's Fang, Dahak's Horn, or Dahak's Tooth.</Pair>
<Pair single="benefit" id="traitdragonhunted-dragon-hunted-fn11-3-benefit">You gain a +1 trait bonus on Will saves against fear effects, and against any saving throw from a spell or effect created by a dragon.</Pair>
</Ability>
<Ability id="traitdragonpact-dragon-pact-fn11-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdragonpact-dragon-pact-fn11-4"><Link to="/trait/dragon_pact">⮞</Link> Dragon Pact <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.4" id="main-traits_social_all-fake-fn-11.4" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdragonpact-dragon-pact-fn11-4-flavor">At some point your family served a dragon, and acted as its emissary to others. Some members of your family have benefited from this arrangement, gaining some small fraction of that dragon's noble bearing.</Pair>
<Pair single="benefit" id="traitdragonpact-dragon-pact-fn11-4-benefit">Choose one category of <Link to="/family/true_dragon">true dragon</Link> (chromatic, metallic, primal, etc.). You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks against that category of dragon and a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against all creatures of the dragon type that are not of the same category of true dragon.</Pair>
</Ability>
<Ability id="traitdrakeanatomist-drake-anatomist-fn11-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdrakeanatomist-drake-anatomist-fn11-5"><Link to="/trait/drake_anatomist">⮞</Link> Drake Anatomist <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.5" id="main-traits_social_all-fake-fn-11.5" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitdrakeanatomist-drake-anatomist-fn11-5-benefit">You gain a +1 trait bonus on damage rolls against creatures with the dragon creature type, and a +2 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks to identify dragons and their special powers and vulnerabilities.</Pair>
</Ability>
<Ability id="traitduskmarketbribery-dusk-market-bribery-fn25" extraClasses="trait" icon={["village"]}>
<Pair single id="traitduskmarketbribery-dusk-market-bribery-fn25"><Link to="/trait/dusk_market_bribery">⮞</Link> Dusk Market Bribery <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-25" id="main-traits_social_all-fake-fn-25" data-hash-target to="main-traits_social_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitduskmarketbribery-dusk-market-bribery-fn25-flavor">You learned how to bribe by watching <Link to="/rule/dusk_market">Dusk Market</Link> merchants interact with Westcrown's dottari guards.</Pair>
<Pair single="benefit" id="traitduskmarketbribery-dusk-market-bribery-fn25-benefit">Reduce the amount of gold you must spend to bribe a guard or official or compensate a conjured creature by 5%.</Pair>
</Ability>
<Ability id="traitecumenical-ecumenical-fn26" extraClasses="trait" icon={["village"]}>
<Pair single id="traitecumenical-ecumenical-fn26"><Link to="/trait/ecumenical">⮞</Link> Ecumenical <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-26" id="main-traits_social_all-fake-fn-26" data-hash-target to="main-traits_social_all-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitecumenical-ecumenical-fn26-flavor">Your childhood in Magnimar (or in a similar cosmopolitan city) taught you to recognize signs of worship of demigods such as empyreal lords.</Pair>
<Pair single="benefit" id="traitecumenical-ecumenical-fn26-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks involving entities other than the most influential gods. You also gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence worshipers of such entities.</Pair>
</Ability>
<Ability id="traitelementalnegotiator-elemental-negotiator-fn27" extraClasses="trait" icon={["village"]}>
<Pair single id="traitelementalnegotiator-elemental-negotiator-fn27"><Link to="/trait/elemental_negotiator">⮞</Link> Elemental Negotiator <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-27" id="main-traits_social_all-fake-fn-27" data-hash-target to="main-traits_social_all-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitelementalnegotiator-elemental-negotiator-fn27-flavor">You have traveled to the Elemental Planes under the protection of a powerful group of merchants or spellcasters.</Pair>
<Pair single="benefit" id="traitelementalnegotiator-elemental-negotiator-fn27-benefit"><p>At character creation, you learn one of the following languages as a bonus language: Aquan, Auran, Ignan, or Terran. Additionally, your options for bonus languages from having a high Intelligence score include the other three elemental languages, in addition to those language options allowed by your race and class.</p>
<p>You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/bluff">Bluff</Link> checks when using one of these languages to communicate with a creature originating from the language's corresponding Elemental Plane.</p>
</Pair>
</Ability>
<Ability id="traitenemyofslavers-enemy-of-slavers-fn16-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitenemyofslavers-enemy-of-slavers-fn16-4"><Link to="/trait/enemy_of_slavers">⮞</Link> Enemy of Slavers <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-16.4" id="main-traits_social_all-fake-fn-16.4" data-hash-target to="main-traits_social_all-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Freedom" hl><p>Knights who follow the code of freedom believe that no man, woman, or child should be owned by another individual. They believe that all of the humanoid races, even those of monstrous descent, deserve to be given a chance to make their own decisions in life. Their vows are as follows.</p>
<ul>
<li>I will not tolerate slavery in any form. If I witness one individual being sold to another, I will intervene with words or actions as necessary.</li>
<li>If I encounter any escaped slaves, I will make it my duty to take them under my care until they find a safe home.</li>
<li>I shall not willingly deal with any who support or benefit from slavery.</li>
<li>I keep no slaves. Those who wait upon me do so of their own volition or because they are in my employ and are treated with the utmost respect.</li>
<li>When visiting others who keep servants, I will treat them honorably. I shall inquire as to their happiness and treatment. Those who are treated as no more than slaves will gain my strength to support them.</li>
<li>Shackles and bonds are forbidden unless used on an individual convicted of a crime. Placing another person in chains is akin to being a slaver.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitenemyofslavers-enemy-of-slavers-fn16-4-benefit"><p>If you follow this code, you are known to be single-minded with regard to slavery, and this fervent belief is easily perceived by others. Those who deal in flesh have a greater desire to appease you before matters escalate to confrontation, knowing that your wrath will be unwavering and swift.
You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks made to sway the minds of slavers and anyone who otherwise keeps innocent people against their will.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate any of this code's tenets must perform penance by placing themselves in servitude to the individual who was wronged. If the exact individual cannot be found, a person of equivalent social class is sufficient. The length of servitude is dependent on the severity of the transgression. Minor transgressions require a day. If an entire family was enslaved as a result of the knight's actions (or inaction), up to a month of servitude might be required.</Pair>
</Ability>
<Ability id="traitescapedcaptive-escaped-captive-fn5-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitescapedcaptive-escaped-captive-fn5-4"><Link to="/trait/escaped_captive">⮞</Link> Escaped Captive <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-5.4" id="main-traits_social_all-fake-fn-5.4" data-hash-target to="main-traits_social_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitescapedcaptive-escaped-captive-fn5-4-flavor">Whether you were on your way to becoming a drow slave or slated for the ghoul chattel pits, you very narrowly avoided a life of miserable captivity.</Pair>
<Pair single="benefit" id="traitescapedcaptive-escaped-captive-fn5-4-benefit">You make a habit of avoiding restraints or tight spaces, gaining a +1 trait bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks and a +2 trait bonus to CMD to avoid being pinned.</Pair>
</Ability>
<Ability id="traitetymologist-etymologist-fn14-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitetymologist-etymologist-fn14-3"><Link to="/trait/etymologist">⮞</Link> Etymologist <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-14.3" id="main-traits_social_all-fake-fn-14.3" data-hash-target to="main-traits_social_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitetymologist-etymologist-fn14-3-flavor">When you, like all other young gnomes, were taught the hodgepodge Gnome language, you became curious about the original meaning of each word and what language it was derived from. Anytime you come across a new language, you are immediately absorbed by both how it works and what words you can co-opt from it for the Gnome language.</Pair>
<Pair single="benefit" id="traitetymologist-etymologist-fn14-3-benefit">You gain a +1 trait bonus on <Link to="/skill/linguistics">Linguistics</Link> checks, know one additional bonus language, and treat Linguistics as a class skill.</Pair>
</Ability>
<Ability id="traitexcellentpenmanship-excellent-penmanship-fn28" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexcellentpenmanship-excellent-penmanship-fn28"><Link to="/trait/excellent_penmanship">⮞</Link> Excellent Penmanship <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-28" id="main-traits_social_all-fake-fn-28" data-hash-target to="main-traits_social_all-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexcellentpenmanship-excellent-penmanship-fn28-flavor">You are a master of calligraphy, an art once highly valued in Lung Wa and still held in high esteem in Lingshen.</Pair>
<Pair single="benefit" id="traitexcellentpenmanship-excellent-penmanship-fn28-benefit">The DC to detect forgeries you create increases by 2. If you attempt to persuade someone via a written message, you gain a +2 bonus on any <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check attempted for that communication. <Link to="/skill/linguistics">Linguistics</Link> is always a class skill for you.</Pair>
</Ability>
<Ability id="traitexplorer-explorer-fn14-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexplorer-explorer-fn14-4"><Link to="/trait/explorer">⮞</Link> Explorer <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-14.4" id="main-traits_social_all-fake-fn-14.4" data-hash-target to="main-traits_social_all-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitexplorer-explorer-fn14-4-flavor">Though many gnomes settle down in communities large enough and interesting enough to provide them with all the stimulation they need to ward off the Bleaching, you're never going to be one of them. You are always looking around the next bend in the road or over the next hill, past the borders of where you are to where you want to be.</Pair>
<Pair single="benefit" id="traitexplorer-explorer-fn14-4-benefit"><p>At the beginning of each character level, select one desired terrain type from the following list: cold, desert, forest, jungle, mountains (including hills), plains, planes (other than the Material Plane), swamp, underground (including caves and dungeons), urban, or water. You gain a +2 bonus on all <Link to="/skill/survival">Survival</Link> checks made in your desired terrain type.</p>
<p>At the beginning of each level, you must select a new desired terrain type to replace the old one (you cannot take the same desired terrain type two levels in a row).</p>
</Pair>
</Ability>
<Ability id="traitexpressivepantomime-expressive-pantomime-fn13-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexpressivepantomime-expressive-pantomime-fn13-2"><Link to="/trait/expressive_pantomime">⮞</Link> Expressive Pantomime <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-13.2" id="main-traits_social_all-fake-fn-13.2" data-hash-target to="main-traits_social_all-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexpressivepantomime-expressive-pantomime-fn13-2-flavor">You have learned to express yourself without having to depend on words.</Pair>
<Pair single="benefit" id="traitexpressivepantomime-expressive-pantomime-fn13-2-benefit">When attempting a <Link to="/skill/bluff">Bluff</Link> check to deliver a secret message, you can take a -5 penalty on the check to communicate a simple message even to creatures that do not share a language with you. You cannot communicate with mindless creatures.</Pair>
</Ability>
<Ability id="traitfasttalker-fast-talker-fn1-15-fn2-6-fn3-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfasttalker-fast-talker-fn1-15-fn2-6-fn3-6"><Link to="/trait/fast_talker">⮞</Link> Fast Talker <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.15" id="main-traits_social_all-fake-fn-1.15" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.6" id="main-traits_social_all-fake-fn-2.6" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.6" id="main-traits_social_all-fake-fn-3.6" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfasttalker-fast-talker-fn1-15-fn2-6-fn3-6-flavor">You had a knack for getting yourself into trouble as a child, and as a result developed a silver tongue at an early age.</Pair>
<Pair single="benefit" id="traitfasttalker-fast-talker-fn1-15-fn2-6-fn3-6-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks, and Bluff is always a class skill for you.</Pair>
</Ability>
<Ability id="traitferalspeech-feral-speech-fn12-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitferalspeech-feral-speech-fn12-2"><Link to="/trait/feral_speech">⮞</Link> Feral Speech <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-12.2" id="main-traits_social_all-fake-fn-12.2" data-hash-target to="main-traits_social_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitferalspeech-feral-speech-fn12-2-flavor">You were raised in a community that included numerous individuals who spoke with creatures of the wild.</Pair>
<Pair single="benefit" id="traitferalspeech-feral-speech-fn12-2-benefit">You gain one of the following languages of your choice as a bonus language: Aklo, Aquan, Auran, Giant, Ignan, or Sylvan. With your GM's permission, you can instead select Druidic, but druids are protective of their language - you are likely to find yourself hunted by druids wishing to eliminate you as a threat to their sole ownership of their secrets.</Pair>
</Ability>
<Ability id="traitforthemoney-for-the-money-fn18-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitforthemoney-for-the-money-fn18-2"><Link to="/trait/for_the_money">⮞</Link> For the Money <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-18.2" id="main-traits_social_all-fake-fn-18.2" data-hash-target to="main-traits_social_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitforthemoney-for-the-money-fn18-2-benefit">You gain a +2 trait bonus on skill checks to haggle prices or negotiate payment; this bonus increases to +4 if you are in a position of military or economic power over your target. You also gain a +1 trait bonus on <Link to="/skill/appraise">Appraise</Link> checks and Appraise is always a class skill for you.</Pair>
</Ability>
<Ability id="traitfoundersheritage-founders-heritage-fn9-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfoundersheritage-founders-heritage-fn9-2"><Link to="/trait/founders_heritage">⮞</Link> Founders' Heritage <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-9.2" id="main-traits_social_all-fake-fn-9.2" data-hash-target to="main-traits_social_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfoundersheritage-founders-heritage-fn9-2-flavor">You can trace your family line back to one of the founding families of Absalom that was called by Aroden to aid him in establishing the city because of their vision and potential.</Pair>
<Pair single="benefit" id="traitfoundersheritage-founders-heritage-fn9-2-benefit">You gain a +1 trait bonus on Charisma-based skill checks to influence citizens of Absalom.</Pair>
</Ability>
<Ability id="traitfreespirit-free-spirit-fn10-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfreespirit-free-spirit-fn10-3"><Link to="/trait/free_spirit">⮞</Link> Free Spirit <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.3" id="main-traits_social_all-fake-fn-10.3" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfreespirit-free-spirit-fn10-3-flavor">You respect the freedom of others to speak as they will. Your rough-and-tumble youth taught you that everyone deserves a chance to say her piece. After all, you can always simply choose to ignore the speaker.</Pair>
<Pair single="benefit" id="traitfreespirit-free-spirit-fn10-3-benefit"><p>You gain a +1 trait bonus on saving throws against language-dependent and effects with the sonic descriptor. In addition, the DC to <Link to="/skill/intimidate">Intimidate</Link> you increases by 2.</p>
<p><strong>Suggested Characters:</strong> Andorens, Desnans, Erastil worshipers.</p>
</Pair>
</Ability>
<Ability id="traitfriendineverytown-friend-in-every-town-fn1-16" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendineverytown-friend-in-every-town-fn1-16"><Link to="/trait/friend_in_every_town">⮞</Link> Friend in Every Town <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.16" id="main-traits_social_all-fake-fn-1.16" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendineverytown-friend-in-every-town-fn1-16-flavor">You have no problem making friends and learning information from them wherever you go.</Pair>
<Pair single="benefit" id="traitfriendineverytown-friend-in-every-town-fn1-16-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and <Link to="/skill/diplomacy">Diplomacy</Link> checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitfriendsinhighplaces-friends-in-high-places-fn10-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendsinhighplaces-friends-in-high-places-fn10-4"><Link to="/trait/friends_in_high_places">⮞</Link> Friends in High Places <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.4" id="main-traits_social_all-fake-fn-10.4" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendsinhighplaces-friends-in-high-places-fn10-4-flavor">You have often seen lawbreakers go free when they demonstrate they have friends in high places, and so you put special effort into befriending powerful people yourself.</Pair>
<Pair single="benefit" id="traitfriendsinhighplaces-friends-in-high-places-fn10-4-benefit"><p>Whenever you are in an area in which you have used the <Link to="/skill/diplomacy">Diplomacy</Link> skill to gather information, you gain a +1 trait bonus on Diplomacy and <Link to="/skill/intimidate">Intimidate</Link> checks. This bonus increases to +2 when dealing with government officials.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, <Link to="/rule/aspis_consortium">Aspis Consortium</Link> agents, Taldans.</p>
</Pair>
</Ability>
<Ability id="traitfriendsinlowplaces-friends-in-low-places-fn20-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendsinlowplaces-friends-in-low-places-fn20-4"><Link to="/trait/friends_in_low_places">⮞</Link> Friends in Low Places <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.4" id="main-traits_social_all-fake-fn-20.4" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendsinlowplaces-friends-in-low-places-fn20-4-flavor">Outcasts know their own, and that knowledge opens doors and loosens tongues.</Pair>
<Pair single="benefit" id="traitfriendsinlowplaces-friends-in-low-places-fn20-4-benefit"><Link to="/skill/diplomacy">Gathering information</Link> in lower quarters, such as vice dens and poorer districts, takes you 1d2 hours (instead of 1d4 hours). In addition, the attitudes of any destitute or impoverished NPCs you interact with begin one step closer to helpful.</Pair>
</Ability>
<Ability id="traitfuryofthered-fury-of-the-red-fn11-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfuryofthered-fury-of-the-red-fn11-6"><Link to="/trait/fury_of_the_red">⮞</Link> Fury of the Red <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.6" id="main-traits_social_all-fake-fn-11.6" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfuryofthered-fury-of-the-red-fn11-6-flavor">Somewhere in your family line, the mystic power of red dragons was infused into one of your relatives.</Pair>
<Pair single="benefit" id="traitfuryofthered-fury-of-the-red-fn11-6-benefit">If you ever take a class that requires you to select a draconic heritage, you must select a red dragon as your type. After successfully completing a <Link to="/rule/charge">charge</Link> attack, you gain a +2 trait bonus on Will saves for a full round.</Pair>
</Ability>
<Ability id="traitgestureexpertise-gesture-expertise-fn25-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgestureexpertise-gesture-expertise-fn25-2"><Link to="/trait/gesture_expertise">⮞</Link> Gesture Expertise <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-25.2" id="main-traits_social_all-fake-fn-25.2" data-hash-target to="main-traits_social_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgestureexpertise-gesture-expertise-fn25-2-flavor">You are adept at nonverbal communication.</Pair>
<Pair single="benefit" id="traitgestureexpertise-gesture-expertise-fn25-2-benefit">You can use a sign language or gestural system to send complex messages quickly in combat, and with a successful DC 15 <Link to="/skill/linguistics">Linguistics</Link> check, you can express yourself clearly enough to communicate basic messages to people who do not understand your gestures. You gain a +2 trait bonus to send secret messages via gestures using the <Link to="/skill/bluff">Bluff</Link> skill, and to understand gestures with the Linguistics skill.</Pair>
</Ability>
<Ability id="traitgiftedsmuggler-gifted-smuggler-fn7-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgiftedsmuggler-gifted-smuggler-fn7-2"><Link to="/trait/gifted_smuggler">⮞</Link> Gifted Smuggler <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-7.2" id="main-traits_social_all-fake-fn-7.2" data-hash-target to="main-traits_social_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Ostenso</Pair>
<Pair single="flavor" id="traitgiftedsmuggler-gifted-smuggler-fn7-2-flavor">You have a knack for hiding goods on your person.</Pair>
<Pair single="benefit" id="traitgiftedsmuggler-gifted-smuggler-fn7-2-benefit">Any small object you attempt to hide on your body is treated as an extraordinarily small object for the purpose of <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks.</Pair>
</Ability>
<Ability id="traitgregarious-gregarious-fn10-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgregarious-gregarious-fn10-5"><Link to="/trait/gregarious">⮞</Link> Gregarious <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.5" id="main-traits_social_all-fake-fn-10.5" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgregarious-gregarious-fn10-5-flavor">At least once in your childhood, your family moved for a reason you didn't understand and you were forced to leave behind your old friends and make new ones. Ever since, you have always been the first to meet strangers, make new friends, and welcome travelers. You learned that first impressions are the most important, and have a knack for making a good one.</Pair>
<Pair single="benefit" id="traitgregarious-gregarious-fn10-5-benefit"><p>Once per day, when you attempt a <Link to="/skill/diplomacy">Diplomacy</Link> check to improve a creature's attitude toward you, you may choose to reroll the check after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/rule/eagle_knights">Eagle Knights</Link>, Garundi, Pathfinders.</p>
</Pair>
</Ability>
<Ability id="traitgrieffilled-grief-filled-fn1-17" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgrieffilled-grief-filled-fn1-17"><Link to="/trait/grief_filled">⮞</Link> Grief-Filled <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.17" id="main-traits_social_all-fake-fn-1.17" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgrieffilled-grief-filled-fn1-17-flavor">You are no stranger to loss and intense emotions.</Pair>
<Pair single="benefit" id="traitgrieffilled-grief-filled-fn1-17-benefit">You gain a +2 trait bonus on all saving throws against emotion spells and effects.</Pair>
</Ability>
<Ability id="traitgrimoptimism-grim-optimism-fn10-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgrimoptimism-grim-optimism-fn10-6"><Link to="/trait/grim_optimism">⮞</Link> Grim Optimism <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.6" id="main-traits_social_all-fake-fn-10.6" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgrimoptimism-grim-optimism-fn10-6-flavor">Growing up with no one to rely on but yourself, you learned to keep a realistic view of your situation and avoid falling into the trap of cynicism with a healthy dose of wit.</Pair>
<Pair single="benefit" id="traitgrimoptimism-grim-optimism-fn10-6-benefit"><p>As a <strong className="hl">standard action</strong>, you can joke about a troublesome situation to lighten the load of dealing with it for yourself and others. You and all allies within 30 feet who can hear you gain a +2 morale bonus on saving throws against fear and pain effects for 1d4 rounds. A character cannot benefit from this effect more than once in 24 hours.</p>
<p><strong>Suggested Characters:</strong> Galtans, Rahadoumi, Ustalavs.</p>
</Pair>
</Ability>
<Ability id="traithardlyafool-hardly-a-fool-fn4-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traithardlyafool-hardly-a-fool-fn4-2"><Link to="/trait/hardly_a_fool">⮞</Link> Hardly a Fool <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-4.2" id="main-traits_social_all-fake-fn-4.2" data-hash-target to="main-traits_social_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traithardlyafool-hardly-a-fool-fn4-2-flavor">You have always been able to ferret out lies and deception. Maybe you worked as an investigator for a time, you came from a place rife with lies, or you've studied the human condition long enough to read a person's face and get to the heart of his message.</Pair>
<Pair single="benefit" id="traithardlyafool-hardly-a-fool-fn4-2-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and a +1 trait bonus on saving throws against illusion effects.</Pair>
</Ability>
<Ability id="traitharvester-harvester-fn1-18" extraClasses="trait" icon={["village"]}>
<Pair single id="traitharvester-harvester-fn1-18"><Link to="/trait/harvester">⮞</Link> Harvester <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.18" id="main-traits_social_all-fake-fn-1.18" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitharvester-harvester-fn1-18-flavor">You were trained to harvest all parts of an animal with care and precision.</Pair>
<Pair single="benefit" id="traitharvester-harvester-fn1-18-benefit">You gain a +1 trait bonus on <Link to="/skill/profession">Profession</Link> (tanner) or Profession (trapper) checks, and you may make these checks as if you were trained in the skill even if you have no ranks. Additionally, you do not risk poisoning yourself whenever you handle or apply poison taken from a venomous creature.</Pair>
</Ability>
<Ability id="traitheartoftwoworlds-heart-of-two-worlds-fn20-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitheartoftwoworlds-heart-of-two-worlds-fn20-5"><Link to="/trait/heart_of_two_worlds">⮞</Link> Heart of Two Worlds <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.5" id="main-traits_social_all-fake-fn-20.5" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitheartoftwoworlds-heart-of-two-worlds-fn20-5-flavor">Born into a world split in twain, you are particularly skilled at understanding and empathizing with those around you.</Pair>
<Pair single="benefit" id="traitheartoftwoworlds-heart-of-two-worlds-fn20-5-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks involving creatures that belong to the same race (or, if human, ethnicity) as your mother or father.</Pair>
</Ability>
<Ability id="traithellknightancestry-hellknight-ancestry-fn29" extraClasses="trait" icon={["village"]}>
<Pair single id="traithellknightancestry-hellknight-ancestry-fn29"><Link to="/trait/hellknight_ancestry">⮞</Link> Hellknight Ancestry <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-29" id="main-traits_social_all-fake-fn-29" data-hash-target to="main-traits_social_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traithellknightancestry-hellknight-ancestry-fn29-flavor">At least one of your parents was a <Link to="/rule/hellknights">Hellknight</Link>, and you see the orders as the embodiment of civic virtue.</Pair>
<Pair single="benefit" id="traithellknightancestry-hellknight-ancestry-fn29-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence Hellknights and a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks to influence enemies of the Hellknights.</Pair>
</Ability>
<Ability id="traitimposingscion-imposing-scion-fn1-19" extraClasses="trait" icon={["village"]}>
<Pair single id="traitimposingscion-imposing-scion-fn1-19"><Link to="/trait/imposing_scion">⮞</Link> Imposing Scion <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.19" id="main-traits_social_all-fake-fn-1.19" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitimposingscion-imposing-scion-fn1-19-flavor">The reputation of your bloodline grants you a degree of fearful respect.</Pair>
<Pair single="benefit" id="traitimposingscion-imposing-scion-fn1-19-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks. If your bloodline is keyed to a specific creature type, your trait bonus increases to +2 when interacting with creatures of that type.</Pair>
</Ability>
<Ability id="traitinexorableauthority-inexorable-authority-fn6-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinexorableauthority-inexorable-authority-fn6-2"><Link to="/trait/inexorable_authority">⮞</Link> Inexorable Authority <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-6.2" id="main-traits_social_all-fake-fn-6.2" data-hash-target to="main-traits_social_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitinexorableauthority-inexorable-authority-fn6-2-flavor">When you speak with the full weight of law, your conviction lends you a terrible presence.</Pair>
<Pair single="benefit" id="traitinexorableauthority-inexorable-authority-fn6-2-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks when enforcing or pronouncing a lawful judgment that you're legitimately deputed to enforce or pronounce.</Pair>
</Ability>
<Ability id="traitinfernalcolleague-infernal-colleague-fn15-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinfernalcolleague-infernal-colleague-fn15-3"><Link to="/trait/infernal_colleague">⮞</Link> Infernal Colleague <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-15.3" id="main-traits_social_all-fake-fn-15.3" data-hash-target to="main-traits_social_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Cheliax</Pair>
<Pair title="Requirements" hl>Associated with the court of the Imperial Palace in Cheliax</Pair>
<Pair single="flavor" id="traitinfernalcolleague-infernal-colleague-fn15-3-flavor">Your experience working with devils has given you nerves of steel.</Pair>
<Pair single="benefit" id="traitinfernalcolleague-infernal-colleague-fn15-3-benefit">You gain a +2 trait bonus on Will saves to resist fear effects created by outsiders.</Pair>
</Ability>
<Ability id="traitinfluence-influence-fn1-20" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinfluence-influence-fn1-20"><Link to="/trait/influence">⮞</Link> Influence <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.20" id="main-traits_social_all-fake-fn-1.20" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitinfluence-influence-fn1-20-flavor">Your position in society grants you special insight into others, and special consideration or outright awe from others.</Pair>
<Pair single="benefit" id="traitinfluence-influence-fn1-20-benefit">Choose one of the following skills: <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sense_motive">Sense Motive</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitjistkanscholar-jistkan-scholar-fn30" extraClasses="trait" icon={["village"]}>
<Pair single id="traitjistkanscholar-jistkan-scholar-fn30"><Link to="/trait/jistkan_scholar">⮞</Link> Jistkan Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-30" id="main-traits_social_all-fake-fn-30" data-hash-target to="main-traits_social_all-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitjistkanscholar-jistkan-scholar-fn30-flavor">You have specialized in studying Jistkan history and culture.</Pair>
<Pair single="benefit" id="traitjistkanscholar-jistkan-scholar-fn30-benefit">You gain Jistka as a bonus language and a +1 trait bonus on all <Link to="/skill/knowledge">Knowledge</Link> checks related to the Jistka Imperium.</Pair>
</Ability>
<Ability id="traitkeleshiteprincess-keleshite-princess-fn31" extraClasses="trait" icon={["village"]}>
<Pair single id="traitkeleshiteprincess-keleshite-princess-fn31"><Link to="/trait/keleshite_princess">⮞</Link> Keleshite Princess <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-31" id="main-traits_social_all-fake-fn-31" data-hash-target to="main-traits_social_all-fake-fn-31-target">31</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Qadira</Pair>
<Pair title="Requirements" hl>Keleshite; female</Pair>
<Pair single="flavor" id="traitkeleshiteprincess-keleshite-princess-fn31-flavor">You have been raised to expect obedience from those around you, regardless of their station, and are not shy about demanding what you want.</Pair>
<Pair single="benefit" id="traitkeleshiteprincess-keleshite-princess-fn31-benefit">You gain a +1 trait bonus to <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitkinginwaiting-king-in-waiting-fn11-7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitkinginwaiting-king-in-waiting-fn11-7"><Link to="/trait/king_in_waiting">⮞</Link> King in Waiting <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.7" id="main-traits_social_all-fake-fn-11.7" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitkinginwaiting-king-in-waiting-fn11-7-flavor">You've been raised with tales of the great linnorms, and taught that the death curses of these vile dragons cannot stop the truly mighty.</Pair>
<Pair single="benefit" id="traitkinginwaiting-king-in-waiting-fn11-7-benefit">You gain a +1 trait bonus on saves to resist curses and spells with the curse descriptor and a +3 trait bonus on saves to resist curses originating from a <Link to="/family/linnorm">linnorm</Link>.</Pair>
</Ability>
<Ability id="traitknowingtheenemy-knowing-the-enemy-fn1-21" extraClasses="trait" icon={["village"]}>
<Pair single id="traitknowingtheenemy-knowing-the-enemy-fn1-21"><Link to="/trait/knowing_the_enemy">⮞</Link> Knowing the Enemy <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.21" id="main-traits_social_all-fake-fn-1.21" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitknowingtheenemy-knowing-the-enemy-fn1-21-flavor">You know a good deal about your most dire enemies.</Pair>
<Pair single="benefit" id="traitknowingtheenemy-knowing-the-enemy-fn1-21-benefit">You gain a +1 trait bonus on checks with the <Link to="/skill/knowledge">Knowledge</Link> skill corresponding to your first <Link to="/ability/favored_enemy">favored enemy</Link> choice, and that Knowledge skill is always a class skill for you.</Pair>
</Ability>
<Ability id="traitlawenforcer-law-enforcer-fn16-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlawenforcer-law-enforcer-fn16-5"><Link to="/trait/law_enforcer">⮞</Link> Law Enforcer <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-16.5" id="main-traits_social_all-fake-fn-16.5" data-hash-target to="main-traits_social_all-fake-fn-16-target">16</InnerLink></sup></Pair>
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
<Pair single="benefit" id="traitlawenforcer-law-enforcer-fn16-5-benefit">If you follow this code, you are always alert to those who transgress against the laws of civilization. You receive a +2 bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to gain a hunch from social situations, and begin play with a pair of <Link to="/eq-misc/masterwork_manacles">masterwork manacles</Link>.</Pair>
<Pair title="Penance" hl>Knights who follow this code and violate one of its tenets must perform penance based on the violation. If they are disgraced for violating the law when it was not acceptable, they must voluntarily surrender to the appropriate authority and receive proper punishment. If they allowed a criminal to escape, they must assist in the capture and punishment of the criminal.</Pair>
</Ability>
<Ability id="traitlifeoftoil-life-of-toil-fn1-22" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlifeoftoil-life-of-toil-fn1-22"><Link to="/trait/life_of_toil">⮞</Link> Life of Toil <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.22" id="main-traits_social_all-fake-fn-1.22" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitlifeoftoil-life-of-toil-fn1-22-flavor">You have lived a physically taxing life, working long hours for a master or to support a trade. Hard physical labor has toughened your body and mind.</Pair>
<Pair single="benefit" id="traitlifeoftoil-life-of-toil-fn1-22-benefit">You gain a +1 trait bonus on Fortitude saves.</Pair>
</Ability>
<Ability id="traitlostnobility-lost-nobility-fn29-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlostnobility-lost-nobility-fn29-2"><Link to="/trait/lost_nobility">⮞</Link> Lost Nobility <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-29.2" id="main-traits_social_all-fake-fn-29.2" data-hash-target to="main-traits_social_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitlostnobility-lost-nobility-fn29-2-flavor">Your family was prominent before the rise of Thrune, but that legacy is now forgotten by all but you.</Pair>
<Pair single="benefit" id="traitlostnobility-lost-nobility-fn29-2-benefit">You hold every Chelish government official (including <Link to="/rule/hellknights">Hellknights</Link>) personally responsible for your lost glory. You gain a +1 trait bonus on attack and damage rolls against these officials.</Pair>
</Ability>
<Ability id="traitmaestroofthesociety-maestro-of-the-society-fn32-fn22-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmaestroofthesociety-maestro-of-the-society-fn32-fn22-2"><Link to="/trait/maestro_of_the_society">⮞</Link> Maestro of the Society <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-32" id="main-traits_social_all-fake-fn-32" data-hash-target to="main-traits_social_all-fake-fn-32-target">32</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-22.2" id="main-traits_social_all-fake-fn-22.2" data-hash-target to="main-traits_social_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="benefit" id="traitmaestroofthesociety-maestro-of-the-society-fn32-fn22-2-benefit">The skills of Golarion's greatest musicians are at your fingertips, thanks to the vast treasure trove of musical knowledge in the vaults beneath the Grand Lodge in Absalom. Studying this knowledge gives you the ability to use your <Link to="/ability/bardic_performance">bardic performance</Link> an additional 3 rounds per day.</Pair>
</Ability>
<Ability id="traitmalevolenttemptations-malevolent-temptations-fn33" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmalevolenttemptations-malevolent-temptations-fn33"><Link to="/trait/malevolent_temptations">⮞</Link> Malevolent Temptations <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-33" id="main-traits_social_all-fake-fn-33" data-hash-target to="main-traits_social_all-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmalevolenttemptations-malevolent-temptations-fn33-flavor">You have resisted or escaped the temptations of a disguised <Link to="/family/hag">hag</Link>, and you learned much from your encounter.</Pair>
<Pair single="benefit" id="traitmalevolenttemptations-malevolent-temptations-fn33-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and a +2 trait bonus on saving throws to disbelieve illusions.</Pair>
</Ability>
<Ability id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn20-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn20-6"><Link to="/trait/marked_by_unknown_forces">⮞</Link> Marked by Unknown Forces <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.6" id="main-traits_social_all-fake-fn-20.6" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn20-6-flavor">That which has marked you for power has also given you proof to show others.</Pair>
<Pair single="benefit" id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn20-6-benefit">You may cast <Link to="/spell/light">light</Link> three times per day as a spell-like ability, but this ability only targets the palm of your hand, and it manifests as a glowing sigil representing your ominous birth - a holy or unholy symbol, a demonic symbol, or perhaps some other distinctive marking established by you and your GM. Those who recognize this symbol have a <Link to="/skill/diplomacy">starting attitude</Link> toward you of one step closer to friendly (if they are followers of or scholars studying the sign) or one step closer to hostile (if they are opposed to the sign or its followers).</Pair>
</Ability>
<Ability id="traitmastermessenger-master-messenger-fn7-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmastermessenger-master-messenger-fn7-3"><Link to="/trait/master_messenger">⮞</Link> Master Messenger <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-7.3" id="main-traits_social_all-fake-fn-7.3" data-hash-target to="main-traits_social_all-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Riddleport</Pair>
<Pair single="flavor" id="traitmastermessenger-master-messenger-fn7-3-flavor">Your secret messages are rarely misunderstood.</Pair>
<Pair single="benefit" id="traitmastermessenger-master-messenger-fn7-3-benefit">If you fail your <Link to="/skill/bluff">Bluff</Link> check to pass a simple message by 5 or more, you deliver no message instead of delivering the wrong message.</Pair>
</Ability>
<Ability id="traitmediator-mediator-fn4-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmediator-mediator-fn4-3"><Link to="/trait/mediator">⮞</Link> Mediator <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-4.3" id="main-traits_social_all-fake-fn-4.3" data-hash-target to="main-traits_social_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmediator-mediator-fn4-3-flavor">You have a way with calming tempers, using cool logic to sooth heated disagreements, and you were always the one to settle arguments among your friends, family, and community.</Pair>
<Pair single="benefit" id="traitmediator-mediator-fn4-3-benefit">You receive a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. In addition, you receive a +1 trait bonus to the DC of any charm or compulsion effect that does not provide ongoing control and results in peaceful acts, such as <Link to="/spell/calm_emotions">calm emotions</Link>, <Link to="/spell/sleep">sleep</Link>, or a <Link to="/spell/suggestion">suggestion</Link> to lay down arms.</Pair>
</Ability>
<Ability id="traitmemorable-memorable-fn10-7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmemorable-memorable-fn10-7"><Link to="/trait/memorable">⮞</Link> Memorable <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.7" id="main-traits_social_all-fake-fn-10.7" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmemorable-memorable-fn10-7-flavor">Growing up amid a large number of children, you learned quickly how to get others' attention and keep it.</Pair>
<Pair single="benefit" id="traitmemorable-memorable-fn10-7-benefit"><p>When you modify a character's attitude with the <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> skill, the attitude change lasts 1-1/2 times longer than it otherwise would. Whenever you create a fear or mind-affecting effect that imposes a penalty or bonus with a duration of at least 2 rounds, it lasts 1 additional round after it would normally end. For example, if you demoralize a foe with an Intimidate check and beat the DC by 5, the victim is <Link to="/misc/shaken">shaken</Link> for 3 rounds instead of the usual 2 rounds.</p>
<p><strong>Suggested Characters:</strong> Free Captains, gnomes, Keleshites.</p>
</Pair>
</Ability>
<Ability id="traitmentored-mentored-fn1-23" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmentored-mentored-fn1-23"><Link to="/trait/mentored">⮞</Link> Mentored <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.23" id="main-traits_social_all-fake-fn-1.23" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmentored-mentored-fn1-23-flavor">A tutor or private instructor guided you in learning your art, profession, or trade, and through your education, you became capable of teaching and guiding others.</Pair>
<Pair single="benefit" id="traitmentored-mentored-fn1-23-benefit">Choose a single <Link to="/skill/craft">Craft</Link>, <Link to="/skill/perform">Perform</Link>, or <Link to="/skill/profession">Profession</Link> skill. You gain a +1 trait bonus on checks with that skill. You also gain a +1 trait bonus when you <Link to="/rule/aid_another">aid another's</Link> skill check with any skill.</Pair>
</Ability>
<Ability id="traitmercenary-mercenary-fn1-24" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmercenary-mercenary-fn1-24"><Link to="/trait/mercenary">⮞</Link> Mercenary <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.24" id="main-traits_social_all-fake-fn-1.24" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmercenary-mercenary-fn1-24-flavor">For everything there is a price, and you are a negotiator at heart.</Pair>
<Pair single="benefit" id="traitmercenary-mercenary-fn1-24-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks made while negotiating payment for a quest or a service that you provide.</Pair>
</Ability>
<Ability id="traitmerchant-merchant-fn1-25" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmerchant-merchant-fn1-25"><Link to="/trait/merchant">⮞</Link> Merchant <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.25" id="main-traits_social_all-fake-fn-1.25" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmerchant-merchant-fn1-25-flavor">You lived your life as a merchant, buying and selling goods.</Pair>
<Pair single="benefit" id="traitmerchant-merchant-fn1-25-benefit">You gain a +1 trait bonus on any <Link to="/skill/appraise">Appraise</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks you attempt while bargaining for the price of goods. Appraise is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmockgladiator-mock-gladiator-fn23-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmockgladiator-mock-gladiator-fn23-2"><Link to="/trait/mock_gladiator">⮞</Link> Mock Gladiator <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-23.2" id="main-traits_social_all-fake-fn-23.2" data-hash-target to="main-traits_social_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmockgladiator-mock-gladiator-fn23-2-flavor">You have learned how to work a crowd in Magnimar's mock-gladiator fights.</Pair>
<Pair single="benefit" id="traitmockgladiator-mock-gladiator-fn23-2-benefit">Choose one weapon. You take no penalty on attack rolls when dealing nonlethal damage with that weapon, and once per day if you score a critical hit with the weapon, you can immediately attempt an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize your target.</Pair>
</Ability>
<Ability id="traitmonsterscholar-monster-scholar-fn34" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmonsterscholar-monster-scholar-fn34"><Link to="/trait/monster_scholar">⮞</Link> Monster Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-34" id="main-traits_social_all-fake-fn-34" data-hash-target to="main-traits_social_all-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmonsterscholar-monster-scholar-fn34-flavor">Your study of monsters keeps you well informed.</Pair>
<Pair single="benefit" id="traitmonsterscholar-monster-scholar-fn34-benefit">Choose either <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, or <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>. Whenever you succeed at a Knowledge check to identify a creature and its special powers - or vulnerabilities - with the chosen skill, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
<Ability id="traitmonsterstalker-monster-stalker-fn34-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmonsterstalker-monster-stalker-fn34-2"><Link to="/trait/monster_stalker">⮞</Link> Monster Stalker <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-34.2" id="main-traits_social_all-fake-fn-34.2" data-hash-target to="main-traits_social_all-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmonsterstalker-monster-stalker-fn34-2-flavor">You've been raised to hunt certain beasts.</Pair>
<Pair single="benefit" id="traitmonsterstalker-monster-stalker-fn34-2-benefit">Choose either aberrations, animals, dragons, fey, magical beasts, oozes, or vermin. You gain a limited version of the <Link to="/umr/scent">scent</Link> ability (15 feet normal, 30 feet upwind, 5 feet downwind) that detects only your chosen creature type.</Pair>
</Ability>
<Ability id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-26-fn3-7-fn2-7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-26-fn3-7-fn2-7"><Link to="/trait/natural_born_leader_social">⮞</Link> Natural-Born Leader (Social) <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.26" id="main-traits_social_all-fake-fn-1.26" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.7" id="main-traits_social_all-fake-fn-3.7" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.7" id="main-traits_social_all-fake-fn-2.7" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-26-fn3-7-fn2-7-flavor">You've always found yourself in positions where others look up to you as a leader, and you can distinctly remember an event from your early childhood where you led several other children to accomplish a goal that each of you individually could not.</Pair>
<Pair single="benefit" id="traitnaturalbornleadersocial-natural-born-leader-social-fn1-26-fn3-7-fn2-7-benefit">All cohorts, followers, or summoned creatures under your leadership gain a +1 morale bonus on Will saves to avoid mind-affecting effects. If you ever take the <Link to="/feat/leadership">Leadership</Link> feat, you gain a +1 trait bonus to your Leadership score.</Pair>
</Ability>
<Ability id="traitnightstallsnavigator-nightstalls-navigator-fn25-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnightstallsnavigator-nightstalls-navigator-fn25-3"><Link to="/trait/nightstalls_navigator">⮞</Link> Nightstalls Navigator <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-25.3" id="main-traits_social_all-fake-fn-25.3" data-hash-target to="main-traits_social_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitnightstallsnavigator-nightstalls-navigator-fn25-3-benefit">Long exposure to the endless variety of the <Link to="/rule/nightstalls">Nightstalls</Link> grants you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information and on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks to recall information about criminal activities. One of these (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitnoblesavage-noble-savage-fn22-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnoblesavage-noble-savage-fn22-3"><Link to="/trait/noble_savage">⮞</Link> Noble Savage <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-22.3" id="main-traits_social_all-fake-fn-22.3" data-hash-target to="main-traits_social_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="flavor" id="traitnoblesavage-noble-savage-fn22-3-flavor">You hail from the fringes of civilization or the bottommost strata of society, but something in your character makes that seem endearing.</Pair>
<Pair single="benefit" id="traitnoblesavage-noble-savage-fn22-3-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/perform">Perform</Link> checks when dealing with people of high social standing.</Pair>
</Ability>
<Ability id="traitnonchalantthuggery-nonchalant-thuggery-fn29-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnonchalantthuggery-nonchalant-thuggery-fn29-3"><Link to="/trait/nonchalant_thuggery">⮞</Link> Nonchalant Thuggery <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-29.3" id="main-traits_social_all-fake-fn-29.3" data-hash-target to="main-traits_social_all-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitnonchalantthuggery-nonchalant-thuggery-fn29-3-flavor">You are adept at keeping witnesses from noticing that anything is wrong.</Pair>
<Pair single="benefit" id="traitnonchalantthuggery-nonchalant-thuggery-fn29-3-benefit">You gain a +4 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to keep others from noticing your aggressive actions.</Pair>
</Ability>
<Ability id="traitnumerianfluidindulger-numerian-fluid-indulger-fn15-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnumerianfluidindulger-numerian-fluid-indulger-fn15-4"><Link to="/trait/numerian_fluid_indulger">⮞</Link> Numerian Fluid Indulger <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-15.4" id="main-traits_social_all-fake-fn-15.4" data-hash-target to="main-traits_social_all-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Numeria</Pair>
<Pair title="Requirements" hl>Associated with the court of the Palace of Fallen Stars in Numeria</Pair>
<Pair single="flavor" id="traitnumerianfluidindulger-numerian-fluid-indulger-fn15-4-flavor">You have tasted <Link to="/drug/numerian_fluids">Numerian fluids</Link> many times.</Pair>
<Pair single="benefit" id="traitnumerianfluidindulger-numerian-fluid-indulger-fn15-4-benefit">Once per day after rolling to determine the side effects of consuming a Numerian fluid, you can roll on the table again, but you must take the second result.</Pair>
</Ability>
<Ability id="traitobnoxious-obnoxious-fn17-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitobnoxious-obnoxious-fn17-5"><Link to="/trait/obnoxious">⮞</Link> Obnoxious <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-17.5" id="main-traits_social_all-fake-fn-17.5" data-hash-target to="main-traits_social_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitobnoxious-obnoxious-fn17-5-flavor">You have long since forgotten to care what people think about you - though your interactions are always memorable, at the very least.</Pair>
<Pair single="benefit" id="traitobnoxious-obnoxious-fn17-5-benefit">Choose <Link to="/skill/perform">Perform</Link> (act), Perform (comedy), Perform (oratory), or Perform (sing); you gain a +1 trait bonus on checks with the chosen skill and gain it as a class skill.</Pair>
</Ability>
<Ability id="traitofficialties-official-ties-fn19-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitofficialties-official-ties-fn19-4"><Link to="/trait/official_ties">⮞</Link> Official Ties <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-19.4" id="main-traits_social_all-fake-fn-19.4" data-hash-target to="main-traits_social_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitofficialties-official-ties-fn19-4-flavor">You maintain a friendship with one or more figures of authority. You have minor sway with one of these figures if your game uses <Link to="/rule/individual_influence">individual influence</Link>.</Pair>
<Pair single="benefit" id="traitofficialties-official-ties-fn19-4-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence people in positions of authority aware of your contact and who have an attitude of no worse than indifferent toward the government the contact represents. You also take a -2 penalty on Diplomacy checks to influence criminals and agents of opposing governments, if those characters are aware of your association with authorities.</p>
<p>If you lose your contact, you lose the benefits of this trait for 1 month, after which you can make a new contact.</p>
</Pair>
</Ability>
<Ability id="traitordinary-ordinary-fn1-27" extraClasses="trait" icon={["village"]}>
<Pair single id="traitordinary-ordinary-fn1-27"><Link to="/trait/ordinary">⮞</Link> Ordinary <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.27" id="main-traits_social_all-fake-fn-1.27" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitordinary-ordinary-fn1-27-flavor">The only thing extraordinary about your appearance is its ordinariness. You carry yourself in an understated way, and many people who see your face soon forget it.</Pair>
<Pair single="benefit" id="traitordinary-ordinary-fn1-27-benefit">You gain a +4 trait bonus on <Link to="/skill/stealth">Stealth</Link> checks whenever you attempt to hide in a crowd.</Pair>
</Ability>
<Ability id="traitorphaned-orphaned-fn1-28" extraClasses="trait" icon={["village"]}>
<Pair single id="traitorphaned-orphaned-fn1-28"><Link to="/trait/orphaned">⮞</Link> Orphaned <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.28" id="main-traits_social_all-fake-fn-1.28" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitorphaned-orphaned-fn1-28-flavor">You grew up separated from your birth parents, and had to learn to watch out for yourself.</Pair>
<Pair single="benefit" id="traitorphaned-orphaned-fn1-28-benefit">You gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is always a class skill for you.</Pair>
</Ability>
<Ability id="traitoutsiderenemy-outsider-enemy-fn35" extraClasses="trait" icon={["village"]}>
<Pair single id="traitoutsiderenemy-outsider-enemy-fn35"><Link to="/trait/outsider_enemy">⮞</Link> Outsider Enemy <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-35" id="main-traits_social_all-fake-fn-35" data-hash-target to="main-traits_social_all-fake-fn-35-target">35</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitoutsiderenemy-outsider-enemy-fn35-flavor">One of your ancestors was a conjurer who specialized in binding outsiders of a particular type. You have inherited some of his skills, but also some of his enemies. Choose a single outsider subtype.</Pair>
<Pair single="benefit" id="traitoutsiderenemy-outsider-enemy-fn35-benefit">The DC of your spells increases by 1 against outsiders of the chosen subtype. Outsiders of the chosen subtype gain a +1 morale bonus on attack and damage rolls made against you, and their starting attitude toward you is reduced by one step.</Pair>
</Ability>
<Ability id="traitpacksavvy-pack-savvy-fn36" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpacksavvy-pack-savvy-fn36"><Link to="/trait/pack_savvy">⮞</Link> Pack Savvy <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-36" id="main-traits_social_all-fake-fn-36" data-hash-target to="main-traits_social_all-fake-fn-36-target">36</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitpacksavvy-pack-savvy-fn36-benefit">You have learned how to gain the respect of gnolls in your region, and you know something of their social structure.`You gain a +3 trait bonus on Charisma-based skill checks when dealing with <Link to="/monster/gnoll">gnolls</Link>.</Pair>
</Ability>
<Ability id="traitpassionateinertia-passionate-inertia-fn24-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpassionateinertia-passionate-inertia-fn24-2"><Link to="/trait/passionate_inertia">⮞</Link> Passionate Inertia <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-24.2" id="main-traits_social_all-fake-fn-24.2" data-hash-target to="main-traits_social_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpassionateinertia-passionate-inertia-fn24-2-flavor">Your passions drive your thinking so irresistibly that even magic struggles to change your mind.</Pair>
<Pair single="benefit" id="traitpassionateinertia-passionate-inertia-fn24-2-benefit">You gain a +2 trait bonus on Will saves to resist having your mind changed about something, but you take a -1 penalty on Will saves to resist temptation and compulsions you might reasonably be already inclined toward.</Pair>
</Ability>
<Ability id="traitpovertystricken-poverty-stricken-fn1-29-fn2-8-fn3-8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpovertystricken-poverty-stricken-fn1-29-fn2-8-fn3-8"><Link to="/trait/poverty_stricken">⮞</Link> Poverty-Stricken <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.29" id="main-traits_social_all-fake-fn-1.29" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.8" id="main-traits_social_all-fake-fn-2.8" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.8" id="main-traits_social_all-fake-fn-3.8" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpovertystricken-poverty-stricken-fn1-29-fn2-8-fn3-8-flavor">Your childhood was tough, and your parents always had to make every copper piece count. Hunger was your constant companion, and you often had to live off the land or sleep in the wild.</Pair>
<Pair single="benefit" id="traitpovertystricken-poverty-stricken-fn1-29-fn2-8-fn3-8-benefit">You gain a +1 bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpracticeddisruptor-practiced-disruptor-fn23-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpracticeddisruptor-practiced-disruptor-fn23-3"><Link to="/trait/practiced_disruptor">⮞</Link> Practiced Disruptor <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-23.3" id="main-traits_social_all-fake-fn-23.3" data-hash-target to="main-traits_social_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpracticeddisruptor-practiced-disruptor-fn23-3-flavor">You are experienced at facing off against spellcasters.</Pair>
<Pair single="benefit" id="traitpracticeddisruptor-practiced-disruptor-fn23-3-benefit">You can attempt <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks untrained; if you have ranks in that skill, you instead gain a +1 trait bonus on those checks. The concentration DC to <Link to="/rule/cast_defensively">cast a spell defensively</Link> in your threatened area increases by 1.</Pair>
</Ability>
<Ability id="traitpreternaturalawareness-preternatural-awareness-fn33-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpreternaturalawareness-preternatural-awareness-fn33-2"><Link to="/trait/preternatural_awareness">⮞</Link> Preternatural Awareness <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-33.2" id="main-traits_social_all-fake-fn-33.2" data-hash-target to="main-traits_social_all-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpreternaturalawareness-preternatural-awareness-fn33-2-flavor">Multiple encounters with fell magic have left you wary.</Pair>
<Pair single="benefit" id="traitpreternaturalawareness-preternatural-awareness-fn33-2-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks to notice cursed objects, haunts, and magically disguised creatures.</Pair>
</Ability>
<Ability id="traitquestinghellknight-questing-hellknight-fn37" extraClasses="trait" icon={["village"]}>
<Pair single id="traitquestinghellknight-questing-hellknight-fn37"><Link to="/trait/questing_hellknight">⮞</Link> Questing Hellknight <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-37" id="main-traits_social_all-fake-fn-37" data-hash-target to="main-traits_social_all-fake-fn-37-target">37</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitquestinghellknight-questing-hellknight-fn37-flavor">You are a quick study when it comes to local laws.</Pair>
<Pair single="benefit" id="traitquestinghellknight-questing-hellknight-fn37-benefit">Once per day, you can attempt a <Link to="/skill/knowledge_local">Knowledge (local)</Link> check untrained to recall information about local laws, rulers, and popular locations. Additionally, you gain a +1 trait bonus on Knowledge (local) checks, and Knowledge (local) is a class skill for you.</Pair>
</Ability>
<Ability id="traitreassuringadvice-reassuring-advice-fn9-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitreassuringadvice-reassuring-advice-fn9-3"><Link to="/trait/reassuring_advice">⮞</Link> Reassuring Advice <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-9.3" id="main-traits_social_all-fake-fn-9.3" data-hash-target to="main-traits_social_all-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitreassuringadvice-reassuring-advice-fn9-3-flavor">You've studied the speeches and writings of a leader or thinker who served as a reassuring voice in her community in the turbulent times after Aroden died, painfully learning which portions of Aroden's advice no longer applied and what of his writings could still be usefully applied.</Pair>
<Pair single="benefit" id="traitreassuringadvice-reassuring-advice-fn9-3-benefit">Once per day, you can speak Aroden's words of encouragement to grant any human a +1 insight bonus on any attack roll, saving throw, or skill check of his choice within the following hour. The choice to use the insight bonus must be made before the related roll is made.</Pair>
</Ability>
<Ability id="traitredsilkfrankness-red-silk-frankness-fn25-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitredsilkfrankness-red-silk-frankness-fn25-4"><Link to="/trait/red_silk_frankness">⮞</Link> Red Silk Frankness <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-25.4" id="main-traits_social_all-fake-fn-25.4" data-hash-target to="main-traits_social_all-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitredsilkfrankness-red-silk-frankness-fn25-4-flavor">You learned from the <Link to="/rule/red_silk_route">Forthright Men</Link>, the Coins' peace-keeping thieves' guild, to use candor to avoid trouble.</Pair>
<Pair single="benefit" id="traitredsilkfrankness-red-silk-frankness-fn25-4-benefit">You gain a +5 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to convince others to overlook offensive or illegal acts. Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traitrelicproof-relic-proof-fn21-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitrelicproof-relic-proof-fn21-2"><Link to="/trait/relic_proof">⮞</Link> Relic-Proof <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-21.2" id="main-traits_social_all-fake-fn-21.2" data-hash-target to="main-traits_social_all-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitrelicproof-relic-proof-fn21-2-flavor">Your experiments - both your successes and failures - have inured you to the effects of stored magic.</Pair>
<Pair single="benefit" id="traitrelicproof-relic-proof-fn21-2-benefit">You gain a +1 trait bonus on saving throws against effects produced by <Link to="/misc/spell_completion">spell completion</Link> and <Link to="/misc/spell_trigger">spell trigger</Link> items.</Pair>
</Ability>
<Ability id="traitrestforthewicked-rest-for-the-wicked-fn20-7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitrestforthewicked-rest-for-the-wicked-fn20-7"><Link to="/trait/rest_for_the_wicked">⮞</Link> Rest for the Wicked <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.7" id="main-traits_social_all-fake-fn-20.7" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitrestforthewicked-rest-for-the-wicked-fn20-7-flavor">Often forced to go without food or stimulation for days at a time, you have learned to use prolonged sleep as a means of escape and a way to heal your wounds.</Pair>
<Pair single="benefit" id="traitrestforthewicked-rest-for-the-wicked-fn20-7-benefit">You heal temporary ability damage at a rate of 3 points per day of complete <Link to="/rule/bed_rest">bed rest</Link>. A normal night of rest (8 hours) still heals you at a rate of only 1 point of temporary ability damage per night of rest.</Pair>
</Ability>
<Ability id="traitrichparents-rich-parents-fn1-30-fn3-9-fn2-9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitrichparents-rich-parents-fn1-30-fn3-9-fn2-9"><Link to="/trait/rich_parents">⮞</Link> Rich Parents <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.30" id="main-traits_social_all-fake-fn-1.30" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.9" id="main-traits_social_all-fake-fn-3.9" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.9" id="main-traits_social_all-fake-fn-2.9" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitrichparents-rich-parents-fn1-30-fn3-9-fn2-9-benefit">You were born into a rich family, perhaps even the nobility, and even though you turned to a life of adventure, you enjoy a one-time benefit to your initial finances: your starting wealth increases to 900 gp.</Pair>
</Ability>
<Ability id="traitruggeddragonhunter-rugged-dragon-hunter-fn11-8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitruggeddragonhunter-rugged-dragon-hunter-fn11-8"><Link to="/trait/rugged_dragon_hunter">⮞</Link> Rugged Dragon Hunter <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.8" id="main-traits_social_all-fake-fn-11.8" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitruggeddragonhunter-rugged-dragon-hunter-fn11-8-benefit">You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to track dragons. If you have the <Link to="/ability/favored_terrain">favored terrain</Link> class ability, add a +1 bonus to check for skills affected by this ability, as long as you're using these skills in regards to a dragon.</Pair>
</Ability>
<Ability id="traitsavage-savage-fn1-31" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsavage-savage-fn1-31"><Link to="/trait/savage">⮞</Link> Savage <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.31" id="main-traits_social_all-fake-fn-1.31" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsavage-savage-fn1-31-flavor">You were born and raised in untamed lands far from civilization. You learned to survive in the elements among brutal humanoids and beasts.</Pair>
<Pair single="benefit" id="traitsavage-savage-fn1-31-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks and a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks to get along in the wild. Knowledge (nature) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitsavant-savant-fn22-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsavant-savant-fn22-4"><Link to="/trait/savant">⮞</Link> Savant <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-22.4" id="main-traits_social_all-fake-fn-22.4" data-hash-target to="main-traits_social_all-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/rule/kitharodian_academy">Kitharodian Academy</Link></Pair>
<Pair single="flavor" id="traitsavant-savant-fn22-4-flavor">From a very young age, the ability to master performance types has come quite naturally to you.</Pair>
<Pair single="benefit" id="traitsavant-savant-fn22-4-benefit">Choose a performance type. You gain a +2 trait bonus on all <Link to="/skill/perform">Perform</Link> checks made using that performance type. Perform is always a class skill for you.</Pair>
</Ability>
<Ability id="traitseafaringreputation-seafaring-reputation-fn23-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitseafaringreputation-seafaring-reputation-fn23-4"><Link to="/trait/seafaring_reputation">⮞</Link> Seafaring Reputation <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-23.4" id="main-traits_social_all-fake-fn-23.4" data-hash-target to="main-traits_social_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitseafaringreputation-seafaring-reputation-fn23-4-flavor">The Wave Riders' fame helps you convince seafarers to cooperate.</Pair>
<Pair single="benefit" id="traitseafaringreputation-seafaring-reputation-fn23-4-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks against sailors and residents of Absalom.</Pair>
</Ability>
<Ability id="traitsecretkeeperqac-secret-keeper-qac-fn10-8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsecretkeeperqac-secret-keeper-qac-fn10-8"><Link to="/trait/secret_keeper_qac">⮞</Link> Secret-Keeper (QaC) <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.8" id="main-traits_social_all-fake-fn-10.8" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsecretkeeperqac-secret-keeper-qac-fn10-8-flavor">Growing up in a land where paranoia fills the air and any accusation of heresy or dissent can spell doom for whole families, you learned very quickly to keep a secret.</Pair>
<Pair single="benefit" id="traitsecretkeeperqac-secret-keeper-qac-fn10-8-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and a +1 trait bonus on saving throws against divinations, domination effects, and effects that would compel you to speak the truth.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Galtans, Nidalese.</p>
</Pair>
</Ability>
<Ability id="traitseeker-seeker-fn1-32" extraClasses="trait" icon={["village"]}>
<Pair single id="traitseeker-seeker-fn1-32"><Link to="/trait/seeker">⮞</Link> Seeker <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.32" id="main-traits_social_all-fake-fn-1.32" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitseeker-seeker-fn1-32-flavor">You are always on the lookout for reward and danger.</Pair>
<Pair single="benefit" id="traitseeker-seeker-fn1-32-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and Perception is always a class skill for you.</Pair>
</Ability>
<Ability id="traitselfreliant-self-reliant-fn12-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitselfreliant-self-reliant-fn12-3"><Link to="/trait/self_reliant">⮞</Link> Self-Reliant <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-12.3" id="main-traits_social_all-fake-fn-12.3" data-hash-target to="main-traits_social_all-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitselfreliant-self-reliant-fn12-3-flavor">You know how to work with your hands and aren't dependent on complex tools.</Pair>
<Pair single="benefit" id="traitselfreliant-self-reliant-fn12-3-benefit">When attempting <Link to="/skill/craft">Craft</Link> checks, you take no penalty when using improvised tools. At the GM's discretion, you can attempt certain Craft checks even when no tools are available, though you take a -2 penalty.</Pair>
</Ability>
<Ability id="traitsignaturemoves-signature-moves-fn20-8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsignaturemoves-signature-moves-fn20-8"><Link to="/trait/signature_moves">⮞</Link> Signature Moves <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-20.8" id="main-traits_social_all-fake-fn-20.8" data-hash-target to="main-traits_social_all-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsignaturemoves-signature-moves-fn20-8-flavor">You're known for some unique item that has become your trademark.</Pair>
<Pair single="benefit" id="traitsignaturemoves-signature-moves-fn20-8-benefit">Your starting equipment includes a single masterwork item worth less than 900 gp, and you gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks while wielding this item in one or both hands.</Pair>
</Ability>
<Ability id="traitsimpledisciple-simple-disciple-fn1-33" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsimpledisciple-simple-disciple-fn1-33"><Link to="/trait/simple_disciple">⮞</Link> Simple Disciple <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.33" id="main-traits_social_all-fake-fn-1.33" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsimpledisciple-simple-disciple-fn1-33-flavor">You picked up skill in a craft or a profession during your time at a monastery.</Pair>
<Pair single="benefit" id="traitsimpledisciple-simple-disciple-fn1-33-benefit">You gain a +1 trait bonus on checks with a <Link to="/skill/profession">Profession</Link> or <Link to="/skill/craft">Craft</Link> skill of your choice.</Pair>
</Ability>
<Ability id="traitslaverunner-slave-runner-fn19-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitslaverunner-slave-runner-fn19-5"><Link to="/trait/slave_runner">⮞</Link> Slave Runner <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-19.5" id="main-traits_social_all-fake-fn-19.5" data-hash-target to="main-traits_social_all-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitslaverunner-slave-runner-fn19-5-flavor">You witnessed or were party to the rescue of a halfling from Chelish slavery by the <Link to="/rule/bellflower_network">Bellflower Network</Link> or <Link to="/rule/eagle_knights">Eagle Knights</Link>.</Pair>
<Pair single="benefit" id="traitslaverunner-slave-runner-fn19-5-benefit">Once per day when attempting to directly free a slave, you gain a +2 trait bonus on your choice of an <Link to="/skill/acrobatics">Acrobatics</Link> check, an <Link to="/skill/escape_artist">Escape Artist</Link> check, a <Link to="/skill/stealth">Stealth</Link> check, or a skill check attempted as part of a <Link to="/rule/heists">heist</Link> or <Link to="/rule/pursuit">pursuit</Link></Pair>
</Ability>
<Ability id="traitsnowbound-snowbound-fn10-9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsnowbound-snowbound-fn10-9"><Link to="/trait/snowbound">⮞</Link> Snowbound <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.9" id="main-traits_social_all-fake-fn-10.9" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsnowbound-snowbound-fn10-9-flavor">You came of age in a place with harsh winters amid a culture that rewarded you for testing your limits in the cold.</Pair>
<Pair single="benefit" id="traitsnowbound-snowbound-fn10-9-benefit"><p>You gain a +1 trait bonus on saving throws against cold effects and a +2 trait bonus on Fortitude saves against the effects of cold weather.</p>
<p><strong>Suggested Characters:</strong> Irriseni, Kellids, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traitstudentofphilosophy-student-of-philosophy-fn10-10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitstudentofphilosophy-student-of-philosophy-fn10-10"><Link to="/trait/student_of_philosophy">⮞</Link> Student of Philosophy <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.10" id="main-traits_social_all-fake-fn-10.10" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitstudentofphilosophy-student-of-philosophy-fn10-10-flavor">You were trained in a now-defunct philosophical tradition - such as that of the now-destroyed Galtan universities or Lirgeni astrologers - and learned to use logic and reason to persuade others.</Pair>
<Pair single="benefit" id="traitstudentofphilosophy-student-of-philosophy-fn10-10-benefit">You can use your Intelligence modifier in place of your Charisma modifier on <Link to="/skill/diplomacy">Diplomacy</Link> checks to persuade others and on <Link to="/skill/bluff">Bluff</Link> checks to convince others that a lie is true. (This trait does not affect Diplomacy checks to gather information or Bluff checks to feint in combat.) Suggested Characters: Arodenites, Galtans, Sodden Lands natives.</Pair>
</Ability>
<Ability id="traitstylesage-style-sage-fn1-34" extraClasses="trait" icon={["village"]}>
<Pair single id="traitstylesage-style-sage-fn1-34"><Link to="/trait/style_sage">⮞</Link> Style Sage <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.34" id="main-traits_social_all-fake-fn-1.34" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitstylesage-style-sage-fn1-34-flavor">You have a passion for history and news concerning monastic disciplines.</Pair>
<Pair single="benefit" id="traitstylesage-style-sage-fn1-34-benefit"><p>You gain a +1 trait bonus on checks with your choice of either <Link to="/skill/knowledge_local">Knowledge (local)</Link> or <Link to="/skill/knowledge_history">Knowledge (history)</Link>, and the one you choose is always a class skill for you.</p>
<p>In addition, you gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to gather information about any person with levels in monk.</p>
</Pair>
</Ability>
<Ability id="traitsubjectivetruth-subjective-truth-fn24-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsubjectivetruth-subjective-truth-fn24-3"><Link to="/trait/subjective_truth">⮞</Link> Subjective Truth <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-24.3" id="main-traits_social_all-fake-fn-24.3" data-hash-target to="main-traits_social_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsubjectivetruth-subjective-truth-fn24-3-flavor">You are able to divorce your knowledge of the facts from your beliefs about the truth, and thus from your facial expressions and body language.</Pair>
<Pair single="benefit" id="traitsubjectivetruth-subjective-truth-fn24-3-benefit">You gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to lie, provided the person you're lying to has never known you to lie to him. Failing this check counts as being caught in a lie by the target, negating any future use of this bonus against that person.</Pair>
</Ability>
<Ability id="traitsupportive-supportive-fn10-11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsupportive-supportive-fn10-11"><Link to="/trait/supportive">⮞</Link> Supportive <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.11" id="main-traits_social_all-fake-fn-10.11" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsupportive-supportive-fn10-11-flavor">You were forced to get by in an isolated enclave, whether surrounded by a community that feared and suspected you or in a remote locale far from other people, and you became practiced at assisting your friends.</Pair>
<Pair single="benefit" id="traitsupportive-supportive-fn10-11-benefit"><p>You gain a +1 trait bonus on skill checks to use the <Link to="/rule/aid_another">aid another</Link> action.</p>
<p><strong>Suggested Characters:</strong> Halflings, Mwangi, Tians.</p>
</Pair>
</Ability>
<Ability id="traitsuspicious-suspicious-fn1-35-fn2-10-fn3-10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsuspicious-suspicious-fn1-35-fn2-10-fn3-10"><Link to="/trait/suspicious">⮞</Link> Suspicious <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.35" id="main-traits_social_all-fake-fn-1.35" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-2.10" id="main-traits_social_all-fake-fn-2.10" data-hash-target to="main-traits_social_all-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-3.10" id="main-traits_social_all-fake-fn-3.10" data-hash-target to="main-traits_social_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsuspicious-suspicious-fn1-35-fn2-10-fn3-10-flavor">You discovered at an early age that someone you trusted, perhaps an older sibling or a parent, had lied to you, and lied often, about something you had taken for granted, leaving you quick to question the claims of others.</Pair>
<Pair single="benefit" id="traitsuspicious-suspicious-fn1-35-fn2-10-fn3-10-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks, and Sense Motive is always a class skill for you.</Pair>
</Ability>
<Ability id="traittalented-talented-fn1-36" extraClasses="trait" icon={["village"]}>
<Pair single id="traittalented-talented-fn1-36"><Link to="/trait/talented">⮞</Link> Talented <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.36" id="main-traits_social_all-fake-fn-1.36" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittalented-talented-fn1-36-flavor">You are a virtuoso musician, actor, or storyteller.</Pair>
<Pair single="benefit" id="traittalented-talented-fn1-36-benefit">You gain a +1 trait bonus on checks with a single <Link to="/skill/perform">Perform</Link> skill (your choice), and all Perform skills are always class skills for you.</Pair>
</Ability>
<Ability id="traittirelesslogic-tireless-logic-fn1-37" extraClasses="trait" icon={["village"]}>
<Pair single id="traittirelesslogic-tireless-logic-fn1-37"><Link to="/trait/tireless_logic">⮞</Link> Tireless Logic <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.37" id="main-traits_social_all-fake-fn-1.37" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittirelesslogic-tireless-logic-fn1-37-flavor">Your curious mind figures out even the most complex problems.</Pair>
<Pair single="benefit" id="traittirelesslogic-tireless-logic-fn1-37-benefit">Once per day when you make an Intelligence-based skill check or ability check, you can roll twice and take the better result.</Pair>
</Ability>
<Ability id="traittriaxustrained-triaxus-trained-fn11-9" extraClasses="trait" icon={["village"]}>
<Pair single id="traittriaxustrained-triaxus-trained-fn11-9"><Link to="/trait/triaxus_trained">⮞</Link> Triaxus-Trained <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.9" id="main-traits_social_all-fake-fn-11.9" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittriaxustrained-triaxus-trained-fn11-9-flavor">You have been trained in intricate dragon-handling techniques that originated on Triaxus.</Pair>
<Pair single="benefit" id="traittriaxustrained-triaxus-trained-fn11-9-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and a +1 trait bonus on skill checks attempted as part of trying to influence a dragon.</Pair>
</Ability>
<Ability id="traittropicalupbringing-tropical-upbringing-fn10-12" extraClasses="trait" icon={["village"]}>
<Pair single id="traittropicalupbringing-tropical-upbringing-fn10-12"><Link to="/trait/tropical_upbringing">⮞</Link> Tropical Upbringing <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.12" id="main-traits_social_all-fake-fn-10.12" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittropicalupbringing-tropical-upbringing-fn10-12-flavor">You were raised in searing-hot deserts, plains, jungles, or other areas, and developed an impressive resistance to heat.</Pair>
<Pair single="benefit" id="traittropicalupbringing-tropical-upbringing-fn10-12-benefit"><p>You gain a +1 trait bonus on saving throws against fire effects and a +2 trait bonus on Fortitude saves against the effects of hot weather.</p>
<p><strong>Suggested Characters:</strong> Garundi, Keleshites, Mwangi.</p>
</Pair>
</Ability>
<Ability id="traittrustworthy-trustworthy-fn1-38" extraClasses="trait" icon={["village"]}>
<Pair single id="traittrustworthy-trustworthy-fn1-38"><Link to="/trait/trustworthy">⮞</Link> Trustworthy <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.38" id="main-traits_social_all-fake-fn-1.38" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittrustworthy-trustworthy-fn1-38-flavor">People find it easy to put their faith in you.</Pair>
<Pair single="benefit" id="traittrustworthy-trustworthy-fn1-38-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to fool someone. You also gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traittruthsagent-truths-agent-fn1-39" extraClasses="trait" icon={["village"]}>
<Pair single id="traittruthsagent-truths-agent-fn1-39"><Link to="/trait/truths_agent">⮞</Link> Truth's Agent <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.39" id="main-traits_social_all-fake-fn-1.39" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittruthsagent-truths-agent-fn1-39-flavor">You are skilled at weeding out information.</Pair>
<Pair single="benefit" id="traittruthsagent-truths-agent-fn1-39-benefit">You gain a +1 trait bonus on all <Link to="/skill/diplomacy">Diplomacy</Link> checks made to gather information and all <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitunabashedgall-unabashed-gall-fn6-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunabashedgall-unabashed-gall-fn6-3"><Link to="/trait/unabashed_gall">⮞</Link> Unabashed Gall <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-6.3" id="main-traits_social_all-fake-fn-6.3" data-hash-target to="main-traits_social_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunabashedgall-unabashed-gall-fn6-3-flavor">Your total indifference to the law even as you're breaking it is such that those watching you are stunned.</Pair>
<Pair single="benefit" id="traitunabashedgall-unabashed-gall-fn6-3-benefit"><p>Whenever you commit an unexpected and outrageously unlawful act (such as knowingly destroying or stealing something) that would elicit a hostile response from another creature, you may attempt a <Link to="/skill/bluff">Bluff</Link> check opposed by the opponent's <Link to="/skill/sense_motive">Sense Motive</Link> check. If you're successful, you and any allies who were willfully expecting your unlawful deed may act in a surprise round.</p>
<p>For each ally willfully expecting your unlawful deed, you take a cumulative -2 penalty on your Bluff check. If your Bluff check fails, there is no surprise round. Regardless of whether your Bluff check succeeds, you and any allies willfully taking advantage of your unlawful deed treat your initiative checks for the duration of combat as though you had each rolled a 1.</p>
</Pair>
</Ability>
<Ability id="traitunbalancedinsight-unbalanced-insight-fn18-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunbalancedinsight-unbalanced-insight-fn18-3"><Link to="/trait/unbalanced_insight">⮞</Link> Unbalanced Insight <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-18.3" id="main-traits_social_all-fake-fn-18.3" data-hash-target to="main-traits_social_all-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitunbalancedinsight-unbalanced-insight-fn18-3-benefit">You gain Aklo as a bonus language, and gain a +2 trait bonus on all saving throws to resist any effects or spells originating from aberrations that cause confusion or fear.</Pair>
</Ability>
<Ability id="traitunintentionallinguist-unintentional-linguist-fn1-40" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunintentionallinguist-unintentional-linguist-fn1-40"><Link to="/trait/unintentional_linguist">⮞</Link> Unintentional Linguist <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.40" id="main-traits_social_all-fake-fn-1.40" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunintentionallinguist-unintentional-linguist-fn1-40-flavor">You can speak with outsiders.</Pair>
<Pair single="benefit" id="traitunintentionallinguist-unintentional-linguist-fn1-40-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> checks, and you begin play knowing one of the following languages (in addition to those granted by your race and Intelligence modifier): Abyssal, Aquan, Celestial, Ignan, Infernal, Protean, or Terran.</Pair>
</Ability>
<Ability id="traitunnaturalrevenge-unnatural-revenge-fn1-41" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunnaturalrevenge-unnatural-revenge-fn1-41"><Link to="/trait/unnatural_revenge">⮞</Link> Unnatural Revenge <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.41" id="main-traits_social_all-fake-fn-1.41" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitunnaturalrevenge-unnatural-revenge-fn1-41-benefit">You gain a +2 trait bonus on all <Link to="/skill/intimidate">Intimidate</Link> checks against creatures of the animal, fey, or plant type, and Intimidate is always a class skill for you.</Pair>
</Ability>
<Ability id="traitunpredictable-unpredictable-fn1-42" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunpredictable-unpredictable-fn1-42"><Link to="/trait/unpredictable">⮞</Link> Unpredictable <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.42" id="main-traits_social_all-fake-fn-1.42" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunpredictable-unpredictable-fn1-42-flavor">Your actions often seem random and chaotic to others, but there is a method to your madness.</Pair>
<Pair single="benefit" id="traitunpredictable-unpredictable-fn1-42-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks, and Bluff is always a class skill for you.</Pair>
</Ability>
<Ability id="traituntappedpotential-untapped-potential-fn11-10" extraClasses="trait" icon={["village"]}>
<Pair single id="traituntappedpotential-untapped-potential-fn11-10"><Link to="/trait/untapped_potential">⮞</Link> Untapped Potential <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-11.10" id="main-traits_social_all-fake-fn-11.10" data-hash-target to="main-traits_social_all-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traituntappedpotential-untapped-potential-fn11-10-flavor">You've been part of one of Mengkare's minor experiments.</Pair>
<Pair single="benefit" id="traituntappedpotential-untapped-potential-fn11-10-benefit">Once per day, you can cast <Link to="/spell/detect_psychic_significance">detect psychic significance</Link> or <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link> as a spell-like ability, with a caster level equal to your character level.</Pair>
</Ability>
<Ability id="traitunwelcomebusiness-unwelcome-business-fn38" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunwelcomebusiness-unwelcome-business-fn38"><Link to="/trait/unwelcome_business">⮞</Link> Unwelcome Business <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-38" id="main-traits_social_all-fake-fn-38" data-hash-target to="main-traits_social_all-fake-fn-38-target">38</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunwelcomebusiness-unwelcome-business-fn38-flavor">You specialize in delivering or procuring shipments where those commodities are not allowed or where your identity would elicit negative bias.</Pair>
<Pair single="benefit" id="traitunwelcomebusiness-unwelcome-business-fn38-benefit">You gain a +1 trait bonus on <Link to="/skill/disguise">Disguise</Link> or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks, and that skill becomes a class skill for you. In addition, choose one humanoid species; you ignore the -2 penalty on Disguise checks to disguise yourself as a member of that species.</Pair>
</Ability>
<Ability id="traitveileddisciple-veiled-disciple-fn1-43" extraClasses="trait" icon={["village"]}>
<Pair single id="traitveileddisciple-veiled-disciple-fn1-43"><Link to="/trait/veiled_disciple">⮞</Link> Veiled Disciple <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.43" id="main-traits_social_all-fake-fn-1.43" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitveileddisciple-veiled-disciple-fn1-43-flavor">Trained in espionage, you're skilled at passing messages and staying on task.</Pair>
<Pair single="benefit" id="traitveileddisciple-veiled-disciple-fn1-43-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to pass secret messages and a +1 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitvengefulsocial-vengeful-social-fn17-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvengefulsocial-vengeful-social-fn17-6"><Link to="/trait/vengeful_social">⮞</Link> Vengeful (Social) <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-17.6" id="main-traits_social_all-fake-fn-17.6" data-hash-target to="main-traits_social_all-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvengefulsocial-vengeful-social-fn17-6-flavor">You were brutally betrayed, and you have dedicated yourself to pursuing revenge.</Pair>
<Pair single="benefit" id="traitvengefulsocial-vengeful-social-fn17-6-benefit">Choose a humanoid subtype that is not your own from the following list: dwarf, elf, gnome, halfling, or human. You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against creatures with that subtype.</Pair>
</Ability>
<Ability id="traitvigilantspycatcher-vigilant-spycatcher-fn23-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvigilantspycatcher-vigilant-spycatcher-fn23-5"><Link to="/trait/vigilant_spycatcher">⮞</Link> Vigilant Spycatcher <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-23.5" id="main-traits_social_all-fake-fn-23.5" data-hash-target to="main-traits_social_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvigilantspycatcher-vigilant-spycatcher-fn23-5-flavor">Paranoid parents or a military trainer taught you to keep vigilant for spies.</Pair>
<Pair single="benefit" id="traitvigilantspycatcher-vigilant-spycatcher-fn23-5-benefit">If you roll less than 10 on <Link to="/skill/perception">Perception</Link> checks to see through disguises, determine your result as if you had rolled 10.</Pair>
</Ability>
<Ability id="traitvoicesinyourhead-voices-in-your-head-fn5-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvoicesinyourhead-voices-in-your-head-fn5-5"><Link to="/trait/voices_in_your_head">⮞</Link> Voices in your Head <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-5.5" id="main-traits_social_all-fake-fn-5.5" data-hash-target to="main-traits_social_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvoicesinyourhead-voices-in-your-head-fn5-5-flavor">Through pacts with eldritch beings or a simple quirk of circumstance, your voice has an uncanny rapport with those swept up in madness.</Pair>
<Pair single="benefit" id="traitvoicesinyourhead-voices-in-your-head-fn5-5-benefit">Once per day as an <strong className="hl">immediate action</strong>, you can issue a command to a <Link to="/misc/confused">confused</Link> creature within 30 feet. This allows the creature to immediately reroll on the <Link to="/misc/confused">confused condition table</Link>, and you can pick which of the two actions - the action of its initial roll or that of the reroll - the creature takes. Confused creatures do not need to understand you for this trait to take effect.</Pair>
</Ability>
<Ability id="traitwanderlust-wanderlust-fn10-13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwanderlust-wanderlust-fn10-13"><Link to="/trait/wanderlust">⮞</Link> Wanderlust <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-10.13" id="main-traits_social_all-fake-fn-10.13" data-hash-target to="main-traits_social_all-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwanderlust-wanderlust-fn10-13-flavor">Your childhood was brightened by the new places you constantly saw as you traveled with your parents, who were merchants. Still excited by travel, you gain great energy when traveling overland.</Pair>
<Pair single="benefit" id="traitwanderlust-wanderlust-fn10-13-benefit"><p>Treat your base land speed as 10 feet higher when determining your overland speed.</p>
<p><strong>Suggested Characters:</strong> Desnans, halflings, Varisians.</p>
</Pair>
</Ability>
<Ability id="traitwastelandvargrant-wasteland-vargrant-fn36-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwastelandvargrant-wasteland-vargrant-fn36-2"><Link to="/trait/wasteland_vargrant">⮞</Link> Wasteland Vargrant <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-36.2" id="main-traits_social_all-fake-fn-36.2" data-hash-target to="main-traits_social_all-fake-fn-36-target">36</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwastelandvargrant-wasteland-vargrant-fn36-2-flavor">You have spent most of your life learning how to survive in wastelands, and a lack of normal survival resources apparent in the environment is not a problem for you.</Pair>
<Pair single="benefit" id="traitwastelandvargrant-wasteland-vargrant-fn36-2-benefit">When you gain this trait, pick one type of wasteland from the following list: blighted, Abyssal, desert, or waterlogged. You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks in that type of wasteland terrain. (The GM determines whether terrain falls into the chosen type of wasteland.) Once you choose a type of wasteland terrain to gain this benefit in, you cannot change it later.</Pair>
</Ability>
<Ability id="traitweatheredemissary-weathered-emissary-fn1-44" extraClasses="trait" icon={["village"]}>
<Pair single id="traitweatheredemissary-weathered-emissary-fn1-44"><Link to="/trait/weathered_emissary">⮞</Link> Weathered Emissary <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.44" id="main-traits_social_all-fake-fn-1.44" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitweatheredemissary-weathered-emissary-fn1-44-flavor">Your travels in the wildlands gave you insight into how to survive their dangers and communicate with their inhabitants.</Pair>
<Pair single="benefit" id="traitweatheredemissary-weathered-emissary-fn1-44-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> and <Link to="/skill/survival">Survival</Link> checks, and Linguistics is always a class skill for you.</Pair>
</Ability>
<Ability id="traitwickedleader-wicked-leader-fn24-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwickedleader-wicked-leader-fn24-4"><Link to="/trait/wicked_leader">⮞</Link> Wicked Leader <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-24.4" id="main-traits_social_all-fake-fn-24.4" data-hash-target to="main-traits_social_all-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitwickedleader-wicked-leader-fn24-4-benefit">You gain a +1 trait bonus on Charisma checks against evil creatures. If you select the <Link to="/feat/leadership">Leadership</Link> feat or the <Link to="/feat/vile_leadership">Vile Leadership</Link> feat at any point when you meet the prerequisites for that feat, you can recruit a cohort who is up to 1 level lower than you (instead of the normal requirement that your cohort must be 2 or more levels lower than you are) as long as your cohort is evil.</Pair>
</Ability>
<Ability id="traitwiscraniear-wiscrani-ear-fn23-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwiscraniear-wiscrani-ear-fn23-6"><Link to="/trait/wiscrani_ear">⮞</Link> Wiscrani Ear <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-23.6" id="main-traits_social_all-fake-fn-23.6" data-hash-target to="main-traits_social_all-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwiscraniear-wiscrani-ear-fn23-6-flavor">You have a keen ear for the movements of thieves and monsters.</Pair>
<Pair single="benefit" id="traitwiscraniear-wiscrani-ear-fn23-6-benefit">You can always take 10 on <Link to="/skill/perception">Perception</Link> checks, even when stress and distractions would normally prevent you from doing so.</Pair>
</Ability>
<Ability id="traitworldly-worldly-fn1-45" extraClasses="trait" icon={["village"]}>
<Pair single id="traitworldly-worldly-fn1-45"><Link to="/trait/worldly">⮞</Link> Worldly <sup><InnerLink showBacklink="backlink-main-traits_social_all-fake-fn-1.45" id="main-traits_social_all-fake-fn-1.45" data-hash-target to="main-traits_social_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitworldly-worldly-fn1-45-flavor">You have acquired an unusual breadth of life experience - more than others of your age, race, or culture.</Pair>
<Pair single="benefit" id="traitworldly-worldly-fn1-45-benefit">Once per day when attempting a skill check for a skill you're untrained in, you can roll twice and take the better result.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_all-label">Footnotes</h3><ol>
<li id="main-traits_social_all-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1" data-hash-target to="main-traits_social_all-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.2" data-hash-target to="main-traits_social_all-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.3" data-hash-target to="main-traits_social_all-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.4" data-hash-target to="main-traits_social_all-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.5" data-hash-target to="main-traits_social_all-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.6" data-hash-target to="main-traits_social_all-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.7" data-hash-target to="main-traits_social_all-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.8" data-hash-target to="main-traits_social_all-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.9" data-hash-target to="main-traits_social_all-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.10" data-hash-target to="main-traits_social_all-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.11" data-hash-target to="main-traits_social_all-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.12" data-hash-target to="main-traits_social_all-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.13" data-hash-target to="main-traits_social_all-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.14" data-hash-target to="main-traits_social_all-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.15" data-hash-target to="main-traits_social_all-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.16" data-hash-target to="main-traits_social_all-fake-fn-1.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.17" data-hash-target to="main-traits_social_all-fake-fn-1.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.18" data-hash-target to="main-traits_social_all-fake-fn-1.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.19" data-hash-target to="main-traits_social_all-fake-fn-1.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.20" data-hash-target to="main-traits_social_all-fake-fn-1.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.21" data-hash-target to="main-traits_social_all-fake-fn-1.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.22" data-hash-target to="main-traits_social_all-fake-fn-1.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.23" data-hash-target to="main-traits_social_all-fake-fn-1.23">↩<sup>23</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.24" data-hash-target to="main-traits_social_all-fake-fn-1.24">↩<sup>24</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.25" data-hash-target to="main-traits_social_all-fake-fn-1.25">↩<sup>25</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.26" data-hash-target to="main-traits_social_all-fake-fn-1.26">↩<sup>26</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.27" data-hash-target to="main-traits_social_all-fake-fn-1.27">↩<sup>27</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.28" data-hash-target to="main-traits_social_all-fake-fn-1.28">↩<sup>28</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.29" data-hash-target to="main-traits_social_all-fake-fn-1.29">↩<sup>29</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.30" data-hash-target to="main-traits_social_all-fake-fn-1.30">↩<sup>30</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.31" data-hash-target to="main-traits_social_all-fake-fn-1.31">↩<sup>31</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.32" data-hash-target to="main-traits_social_all-fake-fn-1.32">↩<sup>32</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.33" data-hash-target to="main-traits_social_all-fake-fn-1.33">↩<sup>33</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.34" data-hash-target to="main-traits_social_all-fake-fn-1.34">↩<sup>34</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.35" data-hash-target to="main-traits_social_all-fake-fn-1.35">↩<sup>35</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.36" data-hash-target to="main-traits_social_all-fake-fn-1.36">↩<sup>36</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.37" data-hash-target to="main-traits_social_all-fake-fn-1.37">↩<sup>37</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.38" data-hash-target to="main-traits_social_all-fake-fn-1.38">↩<sup>38</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.39" data-hash-target to="main-traits_social_all-fake-fn-1.39">↩<sup>39</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.40" data-hash-target to="main-traits_social_all-fake-fn-1.40">↩<sup>40</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.41" data-hash-target to="main-traits_social_all-fake-fn-1.41">↩<sup>41</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.42" data-hash-target to="main-traits_social_all-fake-fn-1.42">↩<sup>42</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.43" data-hash-target to="main-traits_social_all-fake-fn-1.43">↩<sup>43</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.44" data-hash-target to="main-traits_social_all-fake-fn-1.44">↩<sup>44</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_all-fake-fn-1.45" data-hash-target to="main-traits_social_all-fake-fn-1.45">↩<sup>45</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-2-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2" data-hash-target to="main-traits_social_all-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.2" data-hash-target to="main-traits_social_all-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.3" data-hash-target to="main-traits_social_all-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.4" data-hash-target to="main-traits_social_all-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.5" data-hash-target to="main-traits_social_all-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.6" data-hash-target to="main-traits_social_all-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.7" data-hash-target to="main-traits_social_all-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.8" data-hash-target to="main-traits_social_all-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.9" data-hash-target to="main-traits_social_all-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_all-fake-fn-2.10" data-hash-target to="main-traits_social_all-fake-fn-2.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-3-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3" data-hash-target to="main-traits_social_all-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.2" data-hash-target to="main-traits_social_all-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.3" data-hash-target to="main-traits_social_all-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.4" data-hash-target to="main-traits_social_all-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.5" data-hash-target to="main-traits_social_all-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.6" data-hash-target to="main-traits_social_all-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.7" data-hash-target to="main-traits_social_all-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.8" data-hash-target to="main-traits_social_all-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.9" data-hash-target to="main-traits_social_all-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_all-fake-fn-3.10" data-hash-target to="main-traits_social_all-fake-fn-3.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-4-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_all-fake-fn-4" data-hash-target to="main-traits_social_all-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_all-fake-fn-4.2" data-hash-target to="main-traits_social_all-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_all-fake-fn-4.3" data-hash-target to="main-traits_social_all-fake-fn-4.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-5-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_all-fake-fn-5" data-hash-target to="main-traits_social_all-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_all-fake-fn-5.2" data-hash-target to="main-traits_social_all-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_all-fake-fn-5.3" data-hash-target to="main-traits_social_all-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_all-fake-fn-5.4" data-hash-target to="main-traits_social_all-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_all-fake-fn-5.5" data-hash-target to="main-traits_social_all-fake-fn-5.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-6-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_all-fake-fn-6" data-hash-target to="main-traits_social_all-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_all-fake-fn-6.2" data-hash-target to="main-traits_social_all-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_all-fake-fn-6.3" data-hash-target to="main-traits_social_all-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-7-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_all-fake-fn-7" data-hash-target to="main-traits_social_all-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_all-fake-fn-7.2" data-hash-target to="main-traits_social_all-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_all-fake-fn-7.3" data-hash-target to="main-traits_social_all-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-8-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 31 <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_all-fake-fn-8" data-hash-target to="main-traits_social_all-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-9-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_all-fake-fn-9" data-hash-target to="main-traits_social_all-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_all-fake-fn-9.2" data-hash-target to="main-traits_social_all-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_all-fake-fn-9.3" data-hash-target to="main-traits_social_all-fake-fn-9.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-10-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10" data-hash-target to="main-traits_social_all-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.2" data-hash-target to="main-traits_social_all-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.3" data-hash-target to="main-traits_social_all-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.4" data-hash-target to="main-traits_social_all-fake-fn-10.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.5" data-hash-target to="main-traits_social_all-fake-fn-10.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.6" data-hash-target to="main-traits_social_all-fake-fn-10.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.7" data-hash-target to="main-traits_social_all-fake-fn-10.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.8" data-hash-target to="main-traits_social_all-fake-fn-10.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.9" data-hash-target to="main-traits_social_all-fake-fn-10.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.10" data-hash-target to="main-traits_social_all-fake-fn-10.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.11" data-hash-target to="main-traits_social_all-fake-fn-10.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.12" data-hash-target to="main-traits_social_all-fake-fn-10.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_all-fake-fn-10.13" data-hash-target to="main-traits_social_all-fake-fn-10.13">↩<sup>13</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-11-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11" data-hash-target to="main-traits_social_all-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.2" data-hash-target to="main-traits_social_all-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.3" data-hash-target to="main-traits_social_all-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.4" data-hash-target to="main-traits_social_all-fake-fn-11.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.5" data-hash-target to="main-traits_social_all-fake-fn-11.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.6" data-hash-target to="main-traits_social_all-fake-fn-11.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.7" data-hash-target to="main-traits_social_all-fake-fn-11.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.8" data-hash-target to="main-traits_social_all-fake-fn-11.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.9" data-hash-target to="main-traits_social_all-fake-fn-11.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_all-fake-fn-11.10" data-hash-target to="main-traits_social_all-fake-fn-11.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-12-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_all-fake-fn-12" data-hash-target to="main-traits_social_all-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_all-fake-fn-12.2" data-hash-target to="main-traits_social_all-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_all-fake-fn-12.3" data-hash-target to="main-traits_social_all-fake-fn-12.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-13-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_all-fake-fn-13" data-hash-target to="main-traits_social_all-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_all-fake-fn-13.2" data-hash-target to="main-traits_social_all-fake-fn-13.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-14-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_all-fake-fn-14" data-hash-target to="main-traits_social_all-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_all-fake-fn-14.2" data-hash-target to="main-traits_social_all-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_all-fake-fn-14.3" data-hash-target to="main-traits_social_all-fake-fn-14.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_all-fake-fn-14.4" data-hash-target to="main-traits_social_all-fake-fn-14.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-15-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_social_all-fake-fn-15" data-hash-target to="main-traits_social_all-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_social_all-fake-fn-15.2" data-hash-target to="main-traits_social_all-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_social_all-fake-fn-15.3" data-hash-target to="main-traits_social_all-fake-fn-15.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_social_all-fake-fn-15.4" data-hash-target to="main-traits_social_all-fake-fn-15.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-16-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_all-fake-fn-16" data-hash-target to="main-traits_social_all-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_all-fake-fn-16.2" data-hash-target to="main-traits_social_all-fake-fn-16.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_all-fake-fn-16.3" data-hash-target to="main-traits_social_all-fake-fn-16.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_all-fake-fn-16.4" data-hash-target to="main-traits_social_all-fake-fn-16.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_all-fake-fn-16.5" data-hash-target to="main-traits_social_all-fake-fn-16.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-17-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_all-fake-fn-17" data-hash-target to="main-traits_social_all-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_all-fake-fn-17.2" data-hash-target to="main-traits_social_all-fake-fn-17.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_all-fake-fn-17.3" data-hash-target to="main-traits_social_all-fake-fn-17.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_all-fake-fn-17.4" data-hash-target to="main-traits_social_all-fake-fn-17.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_all-fake-fn-17.5" data-hash-target to="main-traits_social_all-fake-fn-17.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_all-fake-fn-17.6" data-hash-target to="main-traits_social_all-fake-fn-17.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-18-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_all-fake-fn-18" data-hash-target to="main-traits_social_all-fake-fn-18">↩</InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_all-fake-fn-18.2" data-hash-target to="main-traits_social_all-fake-fn-18.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_all-fake-fn-18.3" data-hash-target to="main-traits_social_all-fake-fn-18.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-19-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_social_all-fake-fn-19" data-hash-target to="main-traits_social_all-fake-fn-19">↩</InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_social_all-fake-fn-19.2" data-hash-target to="main-traits_social_all-fake-fn-19.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_social_all-fake-fn-19.3" data-hash-target to="main-traits_social_all-fake-fn-19.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_social_all-fake-fn-19.4" data-hash-target to="main-traits_social_all-fake-fn-19.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_social_all-fake-fn-19.5" data-hash-target to="main-traits_social_all-fake-fn-19.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-20-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20" data-hash-target to="main-traits_social_all-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.2" data-hash-target to="main-traits_social_all-fake-fn-20.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.3" data-hash-target to="main-traits_social_all-fake-fn-20.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.4" data-hash-target to="main-traits_social_all-fake-fn-20.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.5" data-hash-target to="main-traits_social_all-fake-fn-20.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.6" data-hash-target to="main-traits_social_all-fake-fn-20.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.7" data-hash-target to="main-traits_social_all-fake-fn-20.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_all-fake-fn-20.8" data-hash-target to="main-traits_social_all-fake-fn-20.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-21-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_social_all-fake-fn-21" data-hash-target to="main-traits_social_all-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_social_all-fake-fn-21.2" data-hash-target to="main-traits_social_all-fake-fn-21.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-22-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_social_all-fake-fn-22" data-hash-target to="main-traits_social_all-fake-fn-22">↩</InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_social_all-fake-fn-22.2" data-hash-target to="main-traits_social_all-fake-fn-22.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_social_all-fake-fn-22.3" data-hash-target to="main-traits_social_all-fake-fn-22.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_social_all-fake-fn-22.4" data-hash-target to="main-traits_social_all-fake-fn-22.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-23-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_all-fake-fn-23" data-hash-target to="main-traits_social_all-fake-fn-23">↩</InnerLink> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_all-fake-fn-23.2" data-hash-target to="main-traits_social_all-fake-fn-23.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_all-fake-fn-23.3" data-hash-target to="main-traits_social_all-fake-fn-23.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_all-fake-fn-23.4" data-hash-target to="main-traits_social_all-fake-fn-23.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_all-fake-fn-23.5" data-hash-target to="main-traits_social_all-fake-fn-23.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_all-fake-fn-23.6" data-hash-target to="main-traits_social_all-fake-fn-23.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-24-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_social_all-fake-fn-24" data-hash-target to="main-traits_social_all-fake-fn-24">↩</InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_social_all-fake-fn-24.2" data-hash-target to="main-traits_social_all-fake-fn-24.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_social_all-fake-fn-24.3" data-hash-target to="main-traits_social_all-fake-fn-24.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 24" id="backlink-main-traits_social_all-fake-fn-24.4" data-hash-target to="main-traits_social_all-fake-fn-24.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-25-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_social_all-fake-fn-25" data-hash-target to="main-traits_social_all-fake-fn-25">↩</InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_social_all-fake-fn-25.2" data-hash-target to="main-traits_social_all-fake-fn-25.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_social_all-fake-fn-25.3" data-hash-target to="main-traits_social_all-fake-fn-25.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-main-traits_social_all-fake-fn-25.4" data-hash-target to="main-traits_social_all-fake-fn-25.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-26-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 26" id="backlink-main-traits_social_all-fake-fn-26" data-hash-target to="main-traits_social_all-fake-fn-26">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-27-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 27" id="backlink-main-traits_social_all-fake-fn-27" data-hash-target to="main-traits_social_all-fake-fn-27">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-28-target"><p>Blood of the Ancients pg. 23 <InnerLink aria-label="Back to reference 28" id="backlink-main-traits_social_all-fake-fn-28" data-hash-target to="main-traits_social_all-fake-fn-28">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-29-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_social_all-fake-fn-29" data-hash-target to="main-traits_social_all-fake-fn-29">↩</InnerLink> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_social_all-fake-fn-29.2" data-hash-target to="main-traits_social_all-fake-fn-29.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 29" id="backlink-main-traits_social_all-fake-fn-29.3" data-hash-target to="main-traits_social_all-fake-fn-29.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-30-target"><p>Blood of the Ancients pg. 19 <InnerLink aria-label="Back to reference 30" id="backlink-main-traits_social_all-fake-fn-30" data-hash-target to="main-traits_social_all-fake-fn-30">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-31-target"><p><Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link> <InnerLink aria-label="Back to reference 31" id="backlink-main-traits_social_all-fake-fn-31" data-hash-target to="main-traits_social_all-fake-fn-31">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-32-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 32" id="backlink-main-traits_social_all-fake-fn-32" data-hash-target to="main-traits_social_all-fake-fn-32">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-33-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 33" id="backlink-main-traits_social_all-fake-fn-33" data-hash-target to="main-traits_social_all-fake-fn-33">↩</InnerLink> <InnerLink aria-label="Back to reference 33" id="backlink-main-traits_social_all-fake-fn-33.2" data-hash-target to="main-traits_social_all-fake-fn-33.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-34-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> <InnerLink aria-label="Back to reference 34" id="backlink-main-traits_social_all-fake-fn-34" data-hash-target to="main-traits_social_all-fake-fn-34">↩</InnerLink> <InnerLink aria-label="Back to reference 34" id="backlink-main-traits_social_all-fake-fn-34.2" data-hash-target to="main-traits_social_all-fake-fn-34.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-35-target"><p>Blood of the Ancients pg. 29 <InnerLink aria-label="Back to reference 35" id="backlink-main-traits_social_all-fake-fn-35" data-hash-target to="main-traits_social_all-fake-fn-35">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-36-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 36" id="backlink-main-traits_social_all-fake-fn-36" data-hash-target to="main-traits_social_all-fake-fn-36">↩</InnerLink> <InnerLink aria-label="Back to reference 36" id="backlink-main-traits_social_all-fake-fn-36.2" data-hash-target to="main-traits_social_all-fake-fn-36.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-37-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> <InnerLink aria-label="Back to reference 37" id="backlink-main-traits_social_all-fake-fn-37" data-hash-target to="main-traits_social_all-fake-fn-37">↩</InnerLink></p></li>
<li id="main-traits_social_all-fake-fn-38-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 38" id="backlink-main-traits_social_all-fake-fn-38" data-hash-target to="main-traits_social_all-fake-fn-38">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_off = {title: "Offense Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitchelishsympathizer-chelish-sympathizer-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchelishsympathizer-chelish-sympathizer-fn1"><Link to="/trait/chelish_sympathizer">⮞</Link> Chelish Sympathizer <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-1" id="main-traits_social_off-fake-fn-1" data-hash-target to="main-traits_social_off-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchelishsympathizer-chelish-sympathizer-fn1-flavor">You feed intelligence to the Thrice-Damned House of Thrune for your own gain or ideological reasons and are given valuable clues gathered by other Chelish spies in exchange.</Pair>
<Pair single="benefit" id="traitchelishsympathizer-chelish-sympathizer-fn1-benefit">Once per month while in an Inner Sea region settlement of at least 2,000 people, you can call upon your connections to gain an edge in a <Link to="/rule/verbal_duels">verbal duel</Link> or gain a +2 bonus on one <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check.</Pair>
</Ability>
<Ability id="traitdrakeanatomist-drake-anatomist-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdrakeanatomist-drake-anatomist-fn2"><Link to="/trait/drake_anatomist">⮞</Link> Drake Anatomist <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-2" id="main-traits_social_off-fake-fn-2" data-hash-target to="main-traits_social_off-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitdrakeanatomist-drake-anatomist-fn2-benefit">You gain a +1 trait bonus on damage rolls against creatures with the dragon creature type, and a +2 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks to identify dragons and their special powers and vulnerabilities.</Pair>
</Ability>
<Ability id="traitlostnobility-lost-nobility-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlostnobility-lost-nobility-fn3"><Link to="/trait/lost_nobility">⮞</Link> Lost Nobility <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-3" id="main-traits_social_off-fake-fn-3" data-hash-target to="main-traits_social_off-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitlostnobility-lost-nobility-fn3-flavor">Your family was prominent before the rise of Thrune, but that legacy is now forgotten by all but you.</Pair>
<Pair single="benefit" id="traitlostnobility-lost-nobility-fn3-benefit">You hold every Chelish government official (including <Link to="/rule/hellknights">Hellknights</Link>) personally responsible for your lost glory. You gain a +1 trait bonus on attack and damage rolls against these officials.</Pair>
</Ability>
<Ability id="traitmockgladiator-mock-gladiator-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmockgladiator-mock-gladiator-fn4"><Link to="/trait/mock_gladiator">⮞</Link> Mock Gladiator <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-4" id="main-traits_social_off-fake-fn-4" data-hash-target to="main-traits_social_off-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmockgladiator-mock-gladiator-fn4-flavor">You have learned how to work a crowd in Magnimar's mock-gladiator fights.</Pair>
<Pair single="benefit" id="traitmockgladiator-mock-gladiator-fn4-benefit">Choose one weapon. You take no penalty on attack rolls when dealing nonlethal damage with that weapon, and once per day if you score a critical hit with the weapon, you can immediately attempt an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize your target.</Pair>
</Ability>
<Ability id="traitpracticeddisruptor-practiced-disruptor-fn4-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpracticeddisruptor-practiced-disruptor-fn4-2"><Link to="/trait/practiced_disruptor">⮞</Link> Practiced Disruptor <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-4.2" id="main-traits_social_off-fake-fn-4.2" data-hash-target to="main-traits_social_off-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpracticeddisruptor-practiced-disruptor-fn4-2-flavor">You are experienced at facing off against spellcasters.</Pair>
<Pair single="benefit" id="traitpracticeddisruptor-practiced-disruptor-fn4-2-benefit">You can attempt <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks untrained; if you have ranks in that skill, you instead gain a +1 trait bonus on those checks. The concentration DC to <Link to="/rule/cast_defensively">cast a spell defensively</Link> in your threatened area increases by 1.</Pair>
</Ability>
<Ability id="traitreassuringadvice-reassuring-advice-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitreassuringadvice-reassuring-advice-fn5"><Link to="/trait/reassuring_advice">⮞</Link> Reassuring Advice <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-5" id="main-traits_social_off-fake-fn-5" data-hash-target to="main-traits_social_off-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitreassuringadvice-reassuring-advice-fn5-flavor">You've studied the speeches and writings of a leader or thinker who served as a reassuring voice in her community in the turbulent times after Aroden died, painfully learning which portions of Aroden's advice no longer applied and what of his writings could still be usefully applied.</Pair>
<Pair single="benefit" id="traitreassuringadvice-reassuring-advice-fn5-benefit">Once per day, you can speak Aroden's words of encouragement to grant any human a +1 insight bonus on any attack roll, saving throw, or skill check of his choice within the following hour. The choice to use the insight bonus must be made before the related roll is made.</Pair>
</Ability>
<Ability id="traitunabashedgall-unabashed-gall-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunabashedgall-unabashed-gall-fn6"><Link to="/trait/unabashed_gall">⮞</Link> Unabashed Gall <sup><InnerLink showBacklink="backlink-main-traits_social_off-fake-fn-6" id="main-traits_social_off-fake-fn-6" data-hash-target to="main-traits_social_off-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunabashedgall-unabashed-gall-fn6-flavor">Your total indifference to the law even as you're breaking it is such that those watching you are stunned.</Pair>
<Pair single="benefit" id="traitunabashedgall-unabashed-gall-fn6-benefit"><p>Whenever you commit an unexpected and outrageously unlawful act (such as knowingly destroying or stealing something) that would elicit a hostile response from another creature, you may attempt a <Link to="/skill/bluff">Bluff</Link> check opposed by the opponent's <Link to="/skill/sense_motive">Sense Motive</Link> check. If you're successful, you and any allies who were willfully expecting your unlawful deed may act in a surprise round.</p>
<p>For each ally willfully expecting your unlawful deed, you take a cumulative -2 penalty on your Bluff check. If your Bluff check fails, there is no surprise round. Regardless of whether your Bluff check succeeds, you and any allies willfully taking advantage of your unlawful deed treat your initiative checks for the duration of combat as though you had each rolled a 1.</p>
</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_off-label">Footnotes</h3><ol>
<li id="main-traits_social_off-fake-fn-1-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_off-fake-fn-1" data-hash-target to="main-traits_social_off-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_off-fake-fn-2-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_off-fake-fn-2" data-hash-target to="main-traits_social_off-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_off-fake-fn-3-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_off-fake-fn-3" data-hash-target to="main-traits_social_off-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_off-fake-fn-4-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_off-fake-fn-4" data-hash-target to="main-traits_social_off-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_off-fake-fn-4.2" data-hash-target to="main-traits_social_off-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_off-fake-fn-5-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_off-fake-fn-5" data-hash-target to="main-traits_social_off-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_off-fake-fn-6-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_off-fake-fn-6" data-hash-target to="main-traits_social_off-fake-fn-6">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_def = {title: "Defense Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitbalanceddetermination-balanced-determination-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbalanceddetermination-balanced-determination-fn1"><Link to="/trait/balanced_determination">⮞</Link> Balanced Determination <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-1" id="main-traits_social_def-fake-fn-1" data-hash-target to="main-traits_social_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbalanceddetermination-balanced-determination-fn1-flavor">You've come to appreciate the balanced approach taken by sovereign dragons.</Pair>
<Pair single="benefit" id="traitbalanceddetermination-balanced-determination-fn1-benefit">Once per day, before attempting a saving throw against a spell ability originating from another creature, you can invoke the determination of <Link to="/family/sovereign_dragon">sovereign dragons</Link>. You take 10 on the saving throw (treat the d20 die result as if it were a 10).</Pair>
</Ability>
<Ability id="traitcontagiousmettle-contagious-mettle-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcontagiousmettle-contagious-mettle-fn2"><Link to="/trait/contagious_mettle">⮞</Link> Contagious Mettle <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-2" id="main-traits_social_def-fake-fn-2" data-hash-target to="main-traits_social_def-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Valor" hl><p>Knights who follow the code of valor believe that nothing is more important than courage in battle. The strength of knights is determined by their willingness to stand in the face of overwhelming odds. Without valor, knighthood is merely a title. Their vows are as follows.</p>
<ul>
<li>I will accept any challenge to combat if given honorably, regardless of my opponent.</li>
<li>If I know combat to be the best course of action, I shall not let an enemy discourage me from it with a threat of overwhelming force.</li>
<li>Once battle is a forgone conclusion, I will be among the first of my allies to charge and engage our foes.</li>
<li>I shall not willingly succumb to fear. If retreat is a necessity, I will be among the last of my allies to leave the field of battle.</li>
<li>I will not leave any of my allies on the field, nor will I abandon them while they are in immediate danger.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitcontagiousmettle-contagious-mettle-fn2-benefit">If you follow this code, you gain a +1 trait bonus on Will saves against fear. In addition, any allies adjacent to you receive a +1 morale bonus on Will saves against fear.</Pair>
<Pair title="Penance" hl>Knights who violate this code must perform penance by volunteering their service to a local militia, army, or fighting company for at least 1 week, whether by performing unusual missions, leading troops into battle, or assisting in the training of soldiers.</Pair>
</Ability>
<Ability id="traitcynical-cynical-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcynical-cynical-fn3"><Link to="/trait/cynical">⮞</Link> Cynical <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-3" id="main-traits_social_def-fake-fn-3" data-hash-target to="main-traits_social_def-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcynical-cynical-fn3-flavor">You have seen many heroes in your time, but you see only their capacity for failure and the ways they fall short of being truly good. This practice in looking past facades has proven a useful skill.</Pair>
<Pair single="benefit" id="traitcynical-cynical-fn3-benefit">You gain a +1 trait bonus on saving throws against illusions and charm effects.</Pair>
</Ability>
<Ability id="traitcynicalear-cynical-ear-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcynicalear-cynical-ear-fn4"><Link to="/trait/cynical_ear">⮞</Link> Cynical Ear <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-4" id="main-traits_social_def-fake-fn-4" data-hash-target to="main-traits_social_def-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcynicalear-cynical-ear-fn4-flavor">Neither honeyed tongues or righteous wrath move you much.</Pair>
<Pair single="benefit" id="traitcynicalear-cynical-ear-fn4-benefit">Add 2 when determining your Hit Dice for <Link to="/skill/intimidate">Intimidate</Link> checks, and increase the DC or all <Link to="/skill/diplomacy">Diplomacy</Link> checks against you by 2.</Pair>
</Ability>
<Ability id="traitdebaucherydefier-debauchery-defier-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdebaucherydefier-debauchery-defier-fn5"><Link to="/trait/debauchery_defier">⮞</Link> Debauchery Defier <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-5" id="main-traits_social_def-fake-fn-5" data-hash-target to="main-traits_social_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Taldor</Pair>
<Pair title="Requirements" hl>Associated with the court of the Imperial Palace of Taldor</Pair>
<Pair single="flavor" id="traitdebaucherydefier-debauchery-defier-fn5-flavor">You are particularly adept at resisting addiction.</Pair>
<Pair single="benefit" id="traitdebaucherydefier-debauchery-defier-fn5-benefit">You must fail two saving throws in a row to become addicted to a drug.</Pair>
</Ability>
<Ability id="traitdraconicdestiny-draconic-destiny-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdraconicdestiny-draconic-destiny-fn1-2"><Link to="/trait/draconic_destiny">⮞</Link> Draconic Destiny <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-1.2" id="main-traits_social_def-fake-fn-1.2" data-hash-target to="main-traits_social_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdraconicdestiny-draconic-destiny-fn1-2-flavor">Whether you are aware of it or not, the moment of your birth was but one part of a far-reaching machination in a dragon's grand design, and the influence of that mysterious plan makes you a little harder to kill.</Pair>
<Pair single="benefit" id="traitdraconicdestiny-draconic-destiny-fn1-2-benefit">When <Link to="/misc/dying">dying</Link>, you gain a +2 trait bonus on Constitution checks to become stable. In addition, you die from hit point loss only once your hit points equal or exceed a negative amount equal to your Constitution score + 2.</Pair>
</Ability>
<Ability id="traitdragonhunted-dragon-hunted-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdragonhunted-dragon-hunted-fn1-3"><Link to="/trait/dragon_hunted">⮞</Link> Dragon-Hunted <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-1.3" id="main-traits_social_def-fake-fn-1.3" data-hash-target to="main-traits_social_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdragonhunted-dragon-hunted-fn1-3-flavor">You've survived being hunted by the draconic nightmares on the Shackles islands of Dahak's Fang, Dahak's Horn, or Dahak's Tooth.</Pair>
<Pair single="benefit" id="traitdragonhunted-dragon-hunted-fn1-3-benefit">You gain a +1 trait bonus on Will saves against fear effects, and against any saving throw from a spell or effect created by a dragon.</Pair>
</Ability>
<Ability id="traitescapedcaptive-escaped-captive-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitescapedcaptive-escaped-captive-fn6"><Link to="/trait/escaped_captive">⮞</Link> Escaped Captive <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-6" id="main-traits_social_def-fake-fn-6" data-hash-target to="main-traits_social_def-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitescapedcaptive-escaped-captive-fn6-flavor">Whether you were on your way to becoming a drow slave or slated for the ghoul chattel pits, you very narrowly avoided a life of miserable captivity.</Pair>
<Pair single="benefit" id="traitescapedcaptive-escaped-captive-fn6-benefit">You make a habit of avoiding restraints or tight spaces, gaining a +1 trait bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks and a +2 trait bonus to CMD to avoid being pinned.</Pair>
</Ability>
<Ability id="traitfreespirit-free-spirit-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfreespirit-free-spirit-fn7"><Link to="/trait/free_spirit">⮞</Link> Free Spirit <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-7" id="main-traits_social_def-fake-fn-7" data-hash-target to="main-traits_social_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfreespirit-free-spirit-fn7-flavor">You respect the freedom of others to speak as they will. Your rough-and-tumble youth taught you that everyone deserves a chance to say her piece. After all, you can always simply choose to ignore the speaker.</Pair>
<Pair single="benefit" id="traitfreespirit-free-spirit-fn7-benefit"><p>You gain a +1 trait bonus on saving throws against language-dependent and effects with the sonic descriptor. In addition, the DC to <Link to="/skill/intimidate">Intimidate</Link> you increases by 2.</p>
<p><strong>Suggested Characters:</strong> Andorens, Desnans, Erastil worshipers.</p>
</Pair>
</Ability>
<Ability id="traitfuryofthered-fury-of-the-red-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfuryofthered-fury-of-the-red-fn1-4"><Link to="/trait/fury_of_the_red">⮞</Link> Fury of the Red <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-1.4" id="main-traits_social_def-fake-fn-1.4" data-hash-target to="main-traits_social_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfuryofthered-fury-of-the-red-fn1-4-flavor">Somewhere in your family line, the mystic power of red dragons was infused into one of your relatives.</Pair>
<Pair single="benefit" id="traitfuryofthered-fury-of-the-red-fn1-4-benefit">If you ever take a class that requires you to select a draconic heritage, you must select a red dragon as your type. After successfully completing a <Link to="/rule/charge">charge</Link> attack, you gain a +2 trait bonus on Will saves for a full round.</Pair>
</Ability>
<Ability id="traitgrieffilled-grief-filled-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgrieffilled-grief-filled-fn8"><Link to="/trait/grief_filled">⮞</Link> Grief-Filled <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-8" id="main-traits_social_def-fake-fn-8" data-hash-target to="main-traits_social_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgrieffilled-grief-filled-fn8-flavor">You are no stranger to loss and intense emotions.</Pair>
<Pair single="benefit" id="traitgrieffilled-grief-filled-fn8-benefit">You gain a +2 trait bonus on all saving throws against emotion spells and effects.</Pair>
</Ability>
<Ability id="traitgrimoptimism-grim-optimism-fn7-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgrimoptimism-grim-optimism-fn7-2"><Link to="/trait/grim_optimism">⮞</Link> Grim Optimism <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-7.2" id="main-traits_social_def-fake-fn-7.2" data-hash-target to="main-traits_social_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgrimoptimism-grim-optimism-fn7-2-flavor">Growing up with no one to rely on but yourself, you learned to keep a realistic view of your situation and avoid falling into the trap of cynicism with a healthy dose of wit.</Pair>
<Pair single="benefit" id="traitgrimoptimism-grim-optimism-fn7-2-benefit"><p>As a <strong className="hl">standard action</strong>, you can joke about a troublesome situation to lighten the load of dealing with it for yourself and others. You and all allies within 30 feet who can hear you gain a +2 morale bonus on saving throws against fear and pain effects for 1d4 rounds. A character cannot benefit from this effect more than once in 24 hours.</p>
<p><strong>Suggested Characters:</strong> Galtans, Rahadoumi, Ustalavs.</p>
</Pair>
</Ability>
<Ability id="traithardlyafool-hardly-a-fool-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traithardlyafool-hardly-a-fool-fn9"><Link to="/trait/hardly_a_fool">⮞</Link> Hardly a Fool <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-9" id="main-traits_social_def-fake-fn-9" data-hash-target to="main-traits_social_def-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traithardlyafool-hardly-a-fool-fn9-flavor">You have always been able to ferret out lies and deception. Maybe you worked as an investigator for a time, you came from a place rife with lies, or you've studied the human condition long enough to read a person's face and get to the heart of his message.</Pair>
<Pair single="benefit" id="traithardlyafool-hardly-a-fool-fn9-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and a +1 trait bonus on saving throws against illusion effects.</Pair>
</Ability>
<Ability id="traitharvester-harvester-fn8-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitharvester-harvester-fn8-2"><Link to="/trait/harvester">⮞</Link> Harvester <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-8.2" id="main-traits_social_def-fake-fn-8.2" data-hash-target to="main-traits_social_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitharvester-harvester-fn8-2-flavor">You were trained to harvest all parts of an animal with care and precision.</Pair>
<Pair single="benefit" id="traitharvester-harvester-fn8-2-benefit">You gain a +1 trait bonus on <Link to="/skill/profession">Profession</Link> (tanner) or Profession (trapper) checks, and you may make these checks as if you were trained in the skill even if you have no ranks. Additionally, you do not risk poisoning yourself whenever you handle or apply poison taken from a venomous creature.</Pair>
</Ability>
<Ability id="traitinfernalcolleague-infernal-colleague-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinfernalcolleague-infernal-colleague-fn5-2"><Link to="/trait/infernal_colleague">⮞</Link> Infernal Colleague <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-5.2" id="main-traits_social_def-fake-fn-5.2" data-hash-target to="main-traits_social_def-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Cheliax</Pair>
<Pair title="Requirements" hl>Associated with the court of the Imperial Palace in Cheliax</Pair>
<Pair single="flavor" id="traitinfernalcolleague-infernal-colleague-fn5-2-flavor">Your experience working with devils has given you nerves of steel.</Pair>
<Pair single="benefit" id="traitinfernalcolleague-infernal-colleague-fn5-2-benefit">You gain a +2 trait bonus on Will saves to resist fear effects created by outsiders.</Pair>
</Ability>
<Ability id="traitkinginwaiting-king-in-waiting-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitkinginwaiting-king-in-waiting-fn1-5"><Link to="/trait/king_in_waiting">⮞</Link> King in Waiting <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-1.5" id="main-traits_social_def-fake-fn-1.5" data-hash-target to="main-traits_social_def-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitkinginwaiting-king-in-waiting-fn1-5-flavor">You've been raised with tales of the great linnorms, and taught that the death curses of these vile dragons cannot stop the truly mighty.</Pair>
<Pair single="benefit" id="traitkinginwaiting-king-in-waiting-fn1-5-benefit">You gain a +1 trait bonus on saves to resist curses and spells with the curse descriptor and a +3 trait bonus on saves to resist curses originating from a <Link to="/family/linnorm">linnorm</Link>.</Pair>
</Ability>
<Ability id="traitlifeoftoil-life-of-toil-fn8-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlifeoftoil-life-of-toil-fn8-3"><Link to="/trait/life_of_toil">⮞</Link> Life of Toil <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-8.3" id="main-traits_social_def-fake-fn-8.3" data-hash-target to="main-traits_social_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitlifeoftoil-life-of-toil-fn8-3-flavor">You have lived a physically taxing life, working long hours for a master or to support a trade. Hard physical labor has toughened your body and mind.</Pair>
<Pair single="benefit" id="traitlifeoftoil-life-of-toil-fn8-3-benefit">You gain a +1 trait bonus on Fortitude saves.</Pair>
</Ability>
<Ability id="traitmalevolenttemptations-malevolent-temptations-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmalevolenttemptations-malevolent-temptations-fn10"><Link to="/trait/malevolent_temptations">⮞</Link> Malevolent Temptations <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-10" id="main-traits_social_def-fake-fn-10" data-hash-target to="main-traits_social_def-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmalevolenttemptations-malevolent-temptations-fn10-flavor">You have resisted or escaped the temptations of a disguised <Link to="/family/hag">hag</Link>, and you learned much from your encounter.</Pair>
<Pair single="benefit" id="traitmalevolenttemptations-malevolent-temptations-fn10-benefit">You gain a +1 trait bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks and a +2 trait bonus on saving throws to disbelieve illusions.</Pair>
</Ability>
<Ability id="traitpassionateinertia-passionate-inertia-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpassionateinertia-passionate-inertia-fn11"><Link to="/trait/passionate_inertia">⮞</Link> Passionate Inertia <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-11" id="main-traits_social_def-fake-fn-11" data-hash-target to="main-traits_social_def-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpassionateinertia-passionate-inertia-fn11-flavor">Your passions drive your thinking so irresistibly that even magic struggles to change your mind.</Pair>
<Pair single="benefit" id="traitpassionateinertia-passionate-inertia-fn11-benefit">You gain a +2 trait bonus on Will saves to resist having your mind changed about something, but you take a -1 penalty on Will saves to resist temptation and compulsions you might reasonably be already inclined toward.</Pair>
</Ability>
<Ability id="traitrelicproof-relic-proof-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitrelicproof-relic-proof-fn12"><Link to="/trait/relic_proof">⮞</Link> Relic-Proof <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-12" id="main-traits_social_def-fake-fn-12" data-hash-target to="main-traits_social_def-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitrelicproof-relic-proof-fn12-flavor">Your experiments - both your successes and failures - have inured you to the effects of stored magic.</Pair>
<Pair single="benefit" id="traitrelicproof-relic-proof-fn12-benefit">You gain a +1 trait bonus on saving throws against effects produced by <Link to="/misc/spell_completion">spell completion</Link> and <Link to="/misc/spell_trigger">spell trigger</Link> items.</Pair>
</Ability>
<Ability id="traitrestforthewicked-rest-for-the-wicked-fn4-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitrestforthewicked-rest-for-the-wicked-fn4-2"><Link to="/trait/rest_for_the_wicked">⮞</Link> Rest for the Wicked <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-4.2" id="main-traits_social_def-fake-fn-4.2" data-hash-target to="main-traits_social_def-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitrestforthewicked-rest-for-the-wicked-fn4-2-flavor">Often forced to go without food or stimulation for days at a time, you have learned to use prolonged sleep as a means of escape and a way to heal your wounds.</Pair>
<Pair single="benefit" id="traitrestforthewicked-rest-for-the-wicked-fn4-2-benefit">You heal temporary ability damage at a rate of 3 points per day of complete <Link to="/rule/bed_rest">bed rest</Link>. A normal night of rest (8 hours) still heals you at a rate of only 1 point of temporary ability damage per night of rest.</Pair>
</Ability>
<Ability id="traitsecretkeeperqac-secret-keeper-qac-fn7-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsecretkeeperqac-secret-keeper-qac-fn7-3"><Link to="/trait/secret_keeper_qac">⮞</Link> Secret-Keeper (QaC) <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-7.3" id="main-traits_social_def-fake-fn-7.3" data-hash-target to="main-traits_social_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsecretkeeperqac-secret-keeper-qac-fn7-3-flavor">Growing up in a land where paranoia fills the air and any accusation of heresy or dissent can spell doom for whole families, you learned very quickly to keep a secret.</Pair>
<Pair single="benefit" id="traitsecretkeeperqac-secret-keeper-qac-fn7-3-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and a +1 trait bonus on saving throws against divinations, domination effects, and effects that would compel you to speak the truth.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Galtans, Nidalese.</p>
</Pair>
</Ability>
<Ability id="traitsnowbound-snowbound-fn7-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsnowbound-snowbound-fn7-4"><Link to="/trait/snowbound">⮞</Link> Snowbound <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-7.4" id="main-traits_social_def-fake-fn-7.4" data-hash-target to="main-traits_social_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsnowbound-snowbound-fn7-4-flavor">You came of age in a place with harsh winters amid a culture that rewarded you for testing your limits in the cold.</Pair>
<Pair single="benefit" id="traitsnowbound-snowbound-fn7-4-benefit"><p>You gain a +1 trait bonus on saving throws against cold effects and a +2 trait bonus on Fortitude saves against the effects of cold weather.</p>
<p><strong>Suggested Characters:</strong> Irriseni, Kellids, Ulfen.</p>
</Pair>
</Ability>
<Ability id="traittropicalupbringing-tropical-upbringing-fn7-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traittropicalupbringing-tropical-upbringing-fn7-5"><Link to="/trait/tropical_upbringing">⮞</Link> Tropical Upbringing <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-7.5" id="main-traits_social_def-fake-fn-7.5" data-hash-target to="main-traits_social_def-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittropicalupbringing-tropical-upbringing-fn7-5-flavor">You were raised in searing-hot deserts, plains, jungles, or other areas, and developed an impressive resistance to heat.</Pair>
<Pair single="benefit" id="traittropicalupbringing-tropical-upbringing-fn7-5-benefit"><p>You gain a +1 trait bonus on saving throws against fire effects and a +2 trait bonus on Fortitude saves against the effects of hot weather.</p>
<p><strong>Suggested Characters:</strong> Garundi, Keleshites, Mwangi.</p>
</Pair>
</Ability>
<Ability id="traitunbalancedinsight-unbalanced-insight-fn13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunbalancedinsight-unbalanced-insight-fn13"><Link to="/trait/unbalanced_insight">⮞</Link> Unbalanced Insight <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-13" id="main-traits_social_def-fake-fn-13" data-hash-target to="main-traits_social_def-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitunbalancedinsight-unbalanced-insight-fn13-benefit">You gain Aklo as a bonus language, and gain a +2 trait bonus on all saving throws to resist any effects or spells originating from aberrations that cause confusion or fear.</Pair>
</Ability>
<Ability id="traitveileddisciple-veiled-disciple-fn8-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitveileddisciple-veiled-disciple-fn8-4"><Link to="/trait/veiled_disciple">⮞</Link> Veiled Disciple <sup><InnerLink showBacklink="backlink-main-traits_social_def-fake-fn-8.4" id="main-traits_social_def-fake-fn-8.4" data-hash-target to="main-traits_social_def-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitveileddisciple-veiled-disciple-fn8-4-flavor">Trained in espionage, you're skilled at passing messages and staying on task.</Pair>
<Pair single="benefit" id="traitveileddisciple-veiled-disciple-fn8-4-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to pass secret messages and a +1 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_def-label">Footnotes</h3><ol>
<li id="main-traits_social_def-fake-fn-1-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_def-fake-fn-1" data-hash-target to="main-traits_social_def-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_def-fake-fn-1.2" data-hash-target to="main-traits_social_def-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_def-fake-fn-1.3" data-hash-target to="main-traits_social_def-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_def-fake-fn-1.4" data-hash-target to="main-traits_social_def-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_def-fake-fn-1.5" data-hash-target to="main-traits_social_def-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-2-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_def-fake-fn-2" data-hash-target to="main-traits_social_def-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-3-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_def-fake-fn-3" data-hash-target to="main-traits_social_def-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-4-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_def-fake-fn-4" data-hash-target to="main-traits_social_def-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_def-fake-fn-4.2" data-hash-target to="main-traits_social_def-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-5-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_def-fake-fn-5" data-hash-target to="main-traits_social_def-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_def-fake-fn-5.2" data-hash-target to="main-traits_social_def-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-6-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_def-fake-fn-6" data-hash-target to="main-traits_social_def-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-7-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_def-fake-fn-7" data-hash-target to="main-traits_social_def-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_def-fake-fn-7.2" data-hash-target to="main-traits_social_def-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_def-fake-fn-7.3" data-hash-target to="main-traits_social_def-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_def-fake-fn-7.4" data-hash-target to="main-traits_social_def-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_def-fake-fn-7.5" data-hash-target to="main-traits_social_def-fake-fn-7.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-8-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_def-fake-fn-8" data-hash-target to="main-traits_social_def-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_def-fake-fn-8.2" data-hash-target to="main-traits_social_def-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_def-fake-fn-8.3" data-hash-target to="main-traits_social_def-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_def-fake-fn-8.4" data-hash-target to="main-traits_social_def-fake-fn-8.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-9-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_def-fake-fn-9" data-hash-target to="main-traits_social_def-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-10-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_def-fake-fn-10" data-hash-target to="main-traits_social_def-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-11-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_def-fake-fn-11" data-hash-target to="main-traits_social_def-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-12-target"><p><Link to="/source/pathfinder_society_primer">Pathfinder Society Primer</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_def-fake-fn-12" data-hash-target to="main-traits_social_def-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_social_def-fake-fn-13-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_def-fake-fn-13" data-hash-target to="main-traits_social_def-fake-fn-13">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_class = {title: "Class-Specific Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitdestineddiplomat-destined-diplomat-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdestineddiplomat-destined-diplomat-fn1"><Link to="/trait/destined_diplomat">⮞</Link> Destined Diplomat <sup><InnerLink showBacklink="backlink-main-traits_social_class-fake-fn-1" id="main-traits_social_class-fake-fn-1" data-hash-target to="main-traits_social_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdestineddiplomat-destined-diplomat-fn1-flavor">Your relationship with your eidolon gives you some clout with other outsiders.</Pair>
<Pair single="benefit" id="traitdestineddiplomat-destined-diplomat-fn1-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks toward outsiders, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traitimposingscion-imposing-scion-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitimposingscion-imposing-scion-fn1-2"><Link to="/trait/imposing_scion">⮞</Link> Imposing Scion <sup><InnerLink showBacklink="backlink-main-traits_social_class-fake-fn-1.2" id="main-traits_social_class-fake-fn-1.2" data-hash-target to="main-traits_social_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitimposingscion-imposing-scion-fn1-2-flavor">The reputation of your bloodline grants you a degree of fearful respect.</Pair>
<Pair single="benefit" id="traitimposingscion-imposing-scion-fn1-2-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks. If your bloodline is keyed to a specific creature type, your trait bonus increases to +2 when interacting with creatures of that type.</Pair>
</Ability>
<Ability id="traitknowingtheenemy-knowing-the-enemy-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitknowingtheenemy-knowing-the-enemy-fn1-3"><Link to="/trait/knowing_the_enemy">⮞</Link> Knowing the Enemy <sup><InnerLink showBacklink="backlink-main-traits_social_class-fake-fn-1.3" id="main-traits_social_class-fake-fn-1.3" data-hash-target to="main-traits_social_class-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitknowingtheenemy-knowing-the-enemy-fn1-3-flavor">You know a good deal about your most dire enemies.</Pair>
<Pair single="benefit" id="traitknowingtheenemy-knowing-the-enemy-fn1-3-benefit">You gain a +1 trait bonus on checks with the <Link to="/skill/knowledge">Knowledge</Link> skill corresponding to your first <Link to="/ability/favored_enemy">favored enemy</Link> choice, and that Knowledge skill is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmaestroofthesociety-maestro-of-the-society-fn2-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmaestroofthesociety-maestro-of-the-society-fn2-fn3"><Link to="/trait/maestro_of_the_society">⮞</Link> Maestro of the Society <sup><InnerLink showBacklink="backlink-main-traits_social_class-fake-fn-2" id="main-traits_social_class-fake-fn-2" data-hash-target to="main-traits_social_class-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_class-fake-fn-3" id="main-traits_social_class-fake-fn-3" data-hash-target to="main-traits_social_class-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/pathfinder_society">Pathfinder Society</Link></Pair>
<Pair single="benefit" id="traitmaestroofthesociety-maestro-of-the-society-fn2-fn3-benefit">The skills of Golarion's greatest musicians are at your fingertips, thanks to the vast treasure trove of musical knowledge in the vaults beneath the Grand Lodge in Absalom. Studying this knowledge gives you the ability to use your <Link to="/ability/bardic_performance">bardic performance</Link> an additional 3 rounds per day.</Pair>
</Ability>
<Ability id="traitruggeddragonhunter-rugged-dragon-hunter-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitruggeddragonhunter-rugged-dragon-hunter-fn4"><Link to="/trait/rugged_dragon_hunter">⮞</Link> Rugged Dragon Hunter <sup><InnerLink showBacklink="backlink-main-traits_social_class-fake-fn-4" id="main-traits_social_class-fake-fn-4" data-hash-target to="main-traits_social_class-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitruggeddragonhunter-rugged-dragon-hunter-fn4-benefit">You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to track dragons. If you have the <Link to="/ability/favored_terrain">favored terrain</Link> class ability, add a +1 bonus to check for skills affected by this ability, as long as you're using these skills in regards to a dragon.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_class-label">Footnotes</h3><ol>
<li id="main-traits_social_class-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_class-fake-fn-1" data-hash-target to="main-traits_social_class-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_class-fake-fn-1.2" data-hash-target to="main-traits_social_class-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_class-fake-fn-1.3" data-hash-target to="main-traits_social_class-fake-fn-1.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_class-fake-fn-2-target"><p><Link to="/source/shattered_star_players_guide">Shattered Star Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_class-fake-fn-2" data-hash-target to="main-traits_social_class-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_class-fake-fn-3-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_class-fake-fn-3" data-hash-target to="main-traits_social_class-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_class-fake-fn-4-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_class-fake-fn-4" data-hash-target to="main-traits_social_class-fake-fn-4">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_magic = {title: "Spell/Magic-Related Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitbeastkin-beastkin-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbeastkin-beastkin-fn1"><Link to="/trait/beastkin">⮞</Link> Beastkin <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-1" id="main-traits_social_magic-fake-fn-1" data-hash-target to="main-traits_social_magic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitbeastkin-beastkin-fn1-benefit"><p>Select one specific type of animal (such as wolves or apes). You were raised from infancy by an animal or pack of animals of that type. You learned their ways and have more in common with your beastly kin than members of any humanoid race.</p>
<p>You gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks and can use <Link to="/spell/speak_with_animals">speak with animals</Link> as a spell-like ability at will to communicate with the type of animal that raised you.</p>
</Pair>
</Ability>
<Ability id="traitcharming-charming-fn2-fn3-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcharming-charming-fn2-fn3-fn4"><Link to="/trait/charming">⮞</Link> Charming <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-2" id="main-traits_social_magic-fake-fn-2" data-hash-target to="main-traits_social_magic-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-3" id="main-traits_social_magic-fake-fn-3" data-hash-target to="main-traits_social_magic-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-4" id="main-traits_social_magic-fake-fn-4" data-hash-target to="main-traits_social_magic-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcharming-charming-fn2-fn3-fn4-flavor">Blessed with good looks, you've come to depend on the fact that others find you attractive.</Pair>
<Pair single="benefit" id="traitcharming-charming-fn2-fn3-fn4-benefit">You gain a +1 trait bonus when you use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures.</Pair>
</Ability>
<Ability id="traitdismantleorder-dismantle-order-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdismantleorder-dismantle-order-fn5"><Link to="/trait/dismantle_order">⮞</Link> Dismantle Order <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-5" id="main-traits_social_magic-fake-fn-5" data-hash-target to="main-traits_social_magic-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Revolution" hl><p>Knights who follow the code of revolution believe that strict laws are an unnecessary bulwark standing in the way of social progress. According to these knights, intelligent and civilized people are inherently good-natured, and if left to their own devices, individuals would prove more wholesome and attuned to the natural order of things than when tainted by the unnatural strictures of organized society. Their vows are as follows.</p>
<ul>
<li><p>The wicked must be punished, though not by the hands of corrupted officials or easily swayed politicians.</p>
</li>
<li><p>I shall not let stand acts of unfairness performed by governments or their harbingers. Those who contribute to an organized system of cruelty shall feel my wrath.</p>
</li>
<li><p>All prisoners, regardless of whether they were convicted or not, deserve a second chance.</p>
</li>
<li><p>Tribal or lawless societies exemplify the natural order, and under my watch shall not come to harm from those who would seek to rule them.</p>
</li>
<li><p>Those creatures who live free shall see no harm fall to them by myself or my sword.</p>
</li>
<li><p>I shall not place unnecessary value on material possessions, as such things are fleeting, whereas deeds are immortal.</p>
</li>
</ul>
</Pair>
<Pair single="flavor" id="traitdismantleorder-dismantle-order-fn5-flavor">If you follow this code, your appreciation for unfettered social freedom allows you to locate supporters of law with supernatural ease.</Pair>
<Pair single="benefit" id="traitdismantleorder-dismantle-order-fn5-benefit">Once per day, you can use <Link to="/spell/detect_law">detect law</Link> as a spell-like ability (caster level 1st). If you have levels in a class that can cast <em>detect law,</em> your caster level for this spell-like ability is equal to that class level.</Pair>
<Pair title="Penance" hl>Knights who follow this code and violate one of its tenets must separate themselves from society in order to atone for their misdoing. The minimum amount of time spent wholly isolated from civilization is 1 week, though this time might be increased to up to 1 month, depending on the transgression.</Pair>
</Ability>
<Ability id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn6"><Link to="/trait/marked_by_unknown_forces">⮞</Link> Marked by Unknown Forces <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-6" id="main-traits_social_magic-fake-fn-6" data-hash-target to="main-traits_social_magic-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn6-flavor">That which has marked you for power has also given you proof to show others.</Pair>
<Pair single="benefit" id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn6-benefit">You may cast <Link to="/spell/light">light</Link> three times per day as a spell-like ability, but this ability only targets the palm of your hand, and it manifests as a glowing sigil representing your ominous birth - a holy or unholy symbol, a demonic symbol, or perhaps some other distinctive marking established by you and your GM. Those who recognize this symbol have a <Link to="/skill/diplomacy">starting attitude</Link> toward you of one step closer to friendly (if they are followers of or scholars studying the sign) or one step closer to hostile (if they are opposed to the sign or its followers).</Pair>
</Ability>
<Ability id="traitmediator-mediator-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmediator-mediator-fn7"><Link to="/trait/mediator">⮞</Link> Mediator <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-7" id="main-traits_social_magic-fake-fn-7" data-hash-target to="main-traits_social_magic-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmediator-mediator-fn7-flavor">You have a way with calming tempers, using cool logic to sooth heated disagreements, and you were always the one to settle arguments among your friends, family, and community.</Pair>
<Pair single="benefit" id="traitmediator-mediator-fn7-benefit">You receive a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. In addition, you receive a +1 trait bonus to the DC of any charm or compulsion effect that does not provide ongoing control and results in peaceful acts, such as <Link to="/spell/calm_emotions">calm emotions</Link>, <Link to="/spell/sleep">sleep</Link>, or a <Link to="/spell/suggestion">suggestion</Link> to lay down arms.</Pair>
</Ability>
<Ability id="traitoutsiderenemy-outsider-enemy-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitoutsiderenemy-outsider-enemy-fn8"><Link to="/trait/outsider_enemy">⮞</Link> Outsider Enemy <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-8" id="main-traits_social_magic-fake-fn-8" data-hash-target to="main-traits_social_magic-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitoutsiderenemy-outsider-enemy-fn8-flavor">One of your ancestors was a conjurer who specialized in binding outsiders of a particular type. You have inherited some of his skills, but also some of his enemies. Choose a single outsider subtype.</Pair>
<Pair single="benefit" id="traitoutsiderenemy-outsider-enemy-fn8-benefit">The DC of your spells increases by 1 against outsiders of the chosen subtype. Outsiders of the chosen subtype gain a +1 morale bonus on attack and damage rolls made against you, and their starting attitude toward you is reduced by one step.</Pair>
</Ability>
<Ability id="traituntappedpotential-untapped-potential-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traituntappedpotential-untapped-potential-fn9"><Link to="/trait/untapped_potential">⮞</Link> Untapped Potential <sup><InnerLink showBacklink="backlink-main-traits_social_magic-fake-fn-9" id="main-traits_social_magic-fake-fn-9" data-hash-target to="main-traits_social_magic-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traituntappedpotential-untapped-potential-fn9-flavor">You've been part of one of Mengkare's minor experiments.</Pair>
<Pair single="benefit" id="traituntappedpotential-untapped-potential-fn9-benefit">Once per day, you can cast <Link to="/spell/detect_psychic_significance">detect psychic significance</Link> or <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link> as a spell-like ability, with a caster level equal to your character level.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_magic-label">Footnotes</h3><ol>
<li id="main-traits_social_magic-fake-fn-1-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_magic-fake-fn-1" data-hash-target to="main-traits_social_magic-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-2-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_magic-fake-fn-2" data-hash-target to="main-traits_social_magic-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-3-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_magic-fake-fn-3" data-hash-target to="main-traits_social_magic-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_magic-fake-fn-4" data-hash-target to="main-traits_social_magic-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-5-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_magic-fake-fn-5" data-hash-target to="main-traits_social_magic-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-6-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_magic-fake-fn-6" data-hash-target to="main-traits_social_magic-fake-fn-6">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-7-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_magic-fake-fn-7" data-hash-target to="main-traits_social_magic-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-8-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 29 <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_magic-fake-fn-8" data-hash-target to="main-traits_social_magic-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_magic-fake-fn-9-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_magic-fake-fn-9" data-hash-target to="main-traits_social_magic-fake-fn-9">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_code = {title: "Knightly Code Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitcalculatedbribe-calculated-bribe-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcalculatedbribe-calculated-bribe-fn1"><Link to="/trait/calculated_bribe">⮞</Link> Calculated Bribe <sup><InnerLink showBacklink="backlink-main-traits_social_code-fake-fn-1" id="main-traits_social_code-fake-fn-1" data-hash-target to="main-traits_social_code-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Perseverance" hl><p>Knights who follow the code of perseverance believe that to truly serve a purpose, an organization or group of individuals must first look to its own survival. Deeds are temporary and forgotten with time. For an organization to be influential, it must persist. These knights collect power and wealth, always looking to the future. Their vows are as follows.</p>
<ul>
<li>I will take on no challenges out of charity. Any task that I undertake for another individual will have an associated price, though it may not be monetary in nature.</li>
<li>I shall let neither compassion nor hatred rob me of wealth. I will not give wealth away to those who have done nothing for me, nor shall I engage in needless destruction of potential resources.</li>
<li>I will set aside a fraction of all my spoils to guard against any chances of future poverty.</li>
<li>If I have an opportunity to seize power, I will not hesitate to take it if it will strengthen my position.</li>
<li>I will not take unnecessary risks that place my future or the future of my organization in jeopardy.</li>
</ul>
</Pair>
<Pair single="flavor" id="traitcalculatedbribe-calculated-bribe-fn1-flavor">If you follow this code, you are keenly aware of the value of actions as well as goods.</Pair>
<Pair single="benefit" id="traitcalculatedbribe-calculated-bribe-fn1-benefit"><p>Once per day while haggling with a merchant or striking a bargain with another intelligent creature, you can spend a number of gold pieces equal to your level &times; 10 in order to reroll a <Link to="/skill/diplomacy">Diplomacy</Link> check you just made, before the results are revealed. You must take the result of the reroll, even if it's worse than the original roll.</p>
<p>In addition, you begin play with a set of extravagant noble's clothes worth 100 gp.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate this code must perform penance by placing money into a fund to guard against their order's future poverty. The amount required for a knight to set aside is 100 gold &times; the knight's current level.</Pair>
</Ability>
<Ability id="traitcontagiousmettle-contagious-mettle-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcontagiousmettle-contagious-mettle-fn1-2"><Link to="/trait/contagious_mettle">⮞</Link> Contagious Mettle <sup><InnerLink showBacklink="backlink-main-traits_social_code-fake-fn-1.2" id="main-traits_social_code-fake-fn-1.2" data-hash-target to="main-traits_social_code-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Valor" hl><p>Knights who follow the code of valor believe that nothing is more important than courage in battle. The strength of knights is determined by their willingness to stand in the face of overwhelming odds. Without valor, knighthood is merely a title. Their vows are as follows.</p>
<ul>
<li>I will accept any challenge to combat if given honorably, regardless of my opponent.</li>
<li>If I know combat to be the best course of action, I shall not let an enemy discourage me from it with a threat of overwhelming force.</li>
<li>Once battle is a forgone conclusion, I will be among the first of my allies to charge and engage our foes.</li>
<li>I shall not willingly succumb to fear. If retreat is a necessity, I will be among the last of my allies to leave the field of battle.</li>
<li>I will not leave any of my allies on the field, nor will I abandon them while they are in immediate danger.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitcontagiousmettle-contagious-mettle-fn1-2-benefit">If you follow this code, you gain a +1 trait bonus on Will saves against fear. In addition, any allies adjacent to you receive a +1 morale bonus on Will saves against fear.</Pair>
<Pair title="Penance" hl>Knights who violate this code must perform penance by volunteering their service to a local militia, army, or fighting company for at least 1 week, whether by performing unusual missions, leading troops into battle, or assisting in the training of soldiers.</Pair>
</Ability>
<Ability id="traitdismantleorder-dismantle-order-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdismantleorder-dismantle-order-fn1-3"><Link to="/trait/dismantle_order">⮞</Link> Dismantle Order <sup><InnerLink showBacklink="backlink-main-traits_social_code-fake-fn-1.3" id="main-traits_social_code-fake-fn-1.3" data-hash-target to="main-traits_social_code-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Revolution" hl><p>Knights who follow the code of revolution believe that strict laws are an unnecessary bulwark standing in the way of social progress. According to these knights, intelligent and civilized people are inherently good-natured, and if left to their own devices, individuals would prove more wholesome and attuned to the natural order of things than when tainted by the unnatural strictures of organized society. Their vows are as follows.</p>
<ul>
<li><p>The wicked must be punished, though not by the hands of corrupted officials or easily swayed politicians.</p>
</li>
<li><p>I shall not let stand acts of unfairness performed by governments or their harbingers. Those who contribute to an organized system of cruelty shall feel my wrath.</p>
</li>
<li><p>All prisoners, regardless of whether they were convicted or not, deserve a second chance.</p>
</li>
<li><p>Tribal or lawless societies exemplify the natural order, and under my watch shall not come to harm from those who would seek to rule them.</p>
</li>
<li><p>Those creatures who live free shall see no harm fall to them by myself or my sword.</p>
</li>
<li><p>I shall not place unnecessary value on material possessions, as such things are fleeting, whereas deeds are immortal.</p>
</li>
</ul>
</Pair>
<Pair single="flavor" id="traitdismantleorder-dismantle-order-fn1-3-flavor">If you follow this code, your appreciation for unfettered social freedom allows you to locate supporters of law with supernatural ease.</Pair>
<Pair single="benefit" id="traitdismantleorder-dismantle-order-fn1-3-benefit">Once per day, you can use <Link to="/spell/detect_law">detect law</Link> as a spell-like ability (caster level 1st). If you have levels in a class that can cast <em>detect law,</em> your caster level for this spell-like ability is equal to that class level.</Pair>
<Pair title="Penance" hl>Knights who follow this code and violate one of its tenets must separate themselves from society in order to atone for their misdoing. The minimum amount of time spent wholly isolated from civilization is 1 week, though this time might be increased to up to 1 month, depending on the transgression.</Pair>
</Ability>
<Ability id="traitenemyofslavers-enemy-of-slavers-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitenemyofslavers-enemy-of-slavers-fn1-4"><Link to="/trait/enemy_of_slavers">⮞</Link> Enemy of Slavers <sup><InnerLink showBacklink="backlink-main-traits_social_code-fake-fn-1.4" id="main-traits_social_code-fake-fn-1.4" data-hash-target to="main-traits_social_code-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Freedom" hl><p>Knights who follow the code of freedom believe that no man, woman, or child should be owned by another individual. They believe that all of the humanoid races, even those of monstrous descent, deserve to be given a chance to make their own decisions in life. Their vows are as follows.</p>
<ul>
<li>I will not tolerate slavery in any form. If I witness one individual being sold to another, I will intervene with words or actions as necessary.</li>
<li>If I encounter any escaped slaves, I will make it my duty to take them under my care until they find a safe home.</li>
<li>I shall not willingly deal with any who support or benefit from slavery.</li>
<li>I keep no slaves. Those who wait upon me do so of their own volition or because they are in my employ and are treated with the utmost respect.</li>
<li>When visiting others who keep servants, I will treat them honorably. I shall inquire as to their happiness and treatment. Those who are treated as no more than slaves will gain my strength to support them.</li>
<li>Shackles and bonds are forbidden unless used on an individual convicted of a crime. Placing another person in chains is akin to being a slaver.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitenemyofslavers-enemy-of-slavers-fn1-4-benefit"><p>If you follow this code, you are known to be single-minded with regard to slavery, and this fervent belief is easily perceived by others. Those who deal in flesh have a greater desire to appease you before matters escalate to confrontation, knowing that your wrath will be unwavering and swift.
You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks made to sway the minds of slavers and anyone who otherwise keeps innocent people against their will.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate any of this code's tenets must perform penance by placing themselves in servitude to the individual who was wronged. If the exact individual cannot be found, a person of equivalent social class is sufficient. The length of servitude is dependent on the severity of the transgression. Minor transgressions require a day. If an entire family was enslaved as a result of the knight's actions (or inaction), up to a month of servitude might be required.</Pair>
</Ability>
<Ability id="traitlawenforcer-law-enforcer-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitlawenforcer-law-enforcer-fn1-5"><Link to="/trait/law_enforcer">⮞</Link> Law Enforcer <sup><InnerLink showBacklink="backlink-main-traits_social_code-fake-fn-1.5" id="main-traits_social_code-fake-fn-1.5" data-hash-target to="main-traits_social_code-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Pair single="benefit" id="traitlawenforcer-law-enforcer-fn1-5-benefit">If you follow this code, you are always alert to those who transgress against the laws of civilization. You receive a +2 bonus on <Link to="/skill/sense_motive">Sense Motive</Link> checks to gain a hunch from social situations, and begin play with a pair of <Link to="/eq-misc/masterwork_manacles">masterwork manacles</Link>.</Pair>
<Pair title="Penance" hl>Knights who follow this code and violate one of its tenets must perform penance based on the violation. If they are disgraced for violating the law when it was not acceptable, they must voluntarily surrender to the appropriate authority and receive proper punishment. If they allowed a criminal to escape, they must assist in the capture and punishment of the criminal.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_code-label">Footnotes</h3><ol>
<li id="main-traits_social_code-fake-fn-1-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_code-fake-fn-1" data-hash-target to="main-traits_social_code-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_code-fake-fn-1.2" data-hash-target to="main-traits_social_code-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_code-fake-fn-1.3" data-hash-target to="main-traits_social_code-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_code-fake-fn-1.4" data-hash-target to="main-traits_social_code-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_code-fake-fn-1.5" data-hash-target to="main-traits_social_code-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_lang = {title: "Language Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitelementalnegotiator-elemental-negotiator-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitelementalnegotiator-elemental-negotiator-fn1"><Link to="/trait/elemental_negotiator">⮞</Link> Elemental Negotiator <sup><InnerLink showBacklink="backlink-main-traits_social_lang-fake-fn-1" id="main-traits_social_lang-fake-fn-1" data-hash-target to="main-traits_social_lang-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitelementalnegotiator-elemental-negotiator-fn1-flavor">You have traveled to the Elemental Planes under the protection of a powerful group of merchants or spellcasters.</Pair>
<Pair single="benefit" id="traitelementalnegotiator-elemental-negotiator-fn1-benefit"><p>At character creation, you learn one of the following languages as a bonus language: Aquan, Auran, Ignan, or Terran. Additionally, your options for bonus languages from having a high Intelligence score include the other three elemental languages, in addition to those language options allowed by your race and class.</p>
<p>You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/bluff">Bluff</Link> checks when using one of these languages to communicate with a creature originating from the language's corresponding Elemental Plane.</p>
</Pair>
</Ability>
<Ability id="traitferalspeech-feral-speech-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitferalspeech-feral-speech-fn2"><Link to="/trait/feral_speech">⮞</Link> Feral Speech <sup><InnerLink showBacklink="backlink-main-traits_social_lang-fake-fn-2" id="main-traits_social_lang-fake-fn-2" data-hash-target to="main-traits_social_lang-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitferalspeech-feral-speech-fn2-flavor">You were raised in a community that included numerous individuals who spoke with creatures of the wild.</Pair>
<Pair single="benefit" id="traitferalspeech-feral-speech-fn2-benefit">You gain one of the following languages of your choice as a bonus language: Aklo, Aquan, Auran, Giant, Ignan, or Sylvan. With your GM's permission, you can instead select Druidic, but druids are protective of their language - you are likely to find yourself hunted by druids wishing to eliminate you as a threat to their sole ownership of their secrets.</Pair>
</Ability>
<Ability id="traitjistkanscholar-jistkan-scholar-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitjistkanscholar-jistkan-scholar-fn3"><Link to="/trait/jistkan_scholar">⮞</Link> Jistkan Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_lang-fake-fn-3" id="main-traits_social_lang-fake-fn-3" data-hash-target to="main-traits_social_lang-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitjistkanscholar-jistkan-scholar-fn3-flavor">You have specialized in studying Jistkan history and culture.</Pair>
<Pair single="benefit" id="traitjistkanscholar-jistkan-scholar-fn3-benefit">You gain Jistka as a bonus language and a +1 trait bonus on all <Link to="/skill/knowledge">Knowledge</Link> checks related to the Jistka Imperium.</Pair>
</Ability>
<Ability id="traitunbalancedinsight-unbalanced-insight-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunbalancedinsight-unbalanced-insight-fn4"><Link to="/trait/unbalanced_insight">⮞</Link> Unbalanced Insight <sup><InnerLink showBacklink="backlink-main-traits_social_lang-fake-fn-4" id="main-traits_social_lang-fake-fn-4" data-hash-target to="main-traits_social_lang-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitunbalancedinsight-unbalanced-insight-fn4-benefit">You gain Aklo as a bonus language, and gain a +2 trait bonus on all saving throws to resist any effects or spells originating from aberrations that cause confusion or fear.</Pair>
</Ability>
<Ability id="traitunintentionallinguist-unintentional-linguist-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunintentionallinguist-unintentional-linguist-fn5"><Link to="/trait/unintentional_linguist">⮞</Link> Unintentional Linguist <sup><InnerLink showBacklink="backlink-main-traits_social_lang-fake-fn-5" id="main-traits_social_lang-fake-fn-5" data-hash-target to="main-traits_social_lang-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunintentionallinguist-unintentional-linguist-fn5-flavor">You can speak with outsiders.</Pair>
<Pair single="benefit" id="traitunintentionallinguist-unintentional-linguist-fn5-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> checks, and you begin play knowing one of the following languages (in addition to those granted by your race and Intelligence modifier): Abyssal, Aquan, Celestial, Ignan, Infernal, Protean, or Terran.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_lang-label">Footnotes</h3><ol>
<li id="main-traits_social_lang-fake-fn-1-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_lang-fake-fn-1" data-hash-target to="main-traits_social_lang-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_lang-fake-fn-2-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_lang-fake-fn-2" data-hash-target to="main-traits_social_lang-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_lang-fake-fn-3-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 19 <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_lang-fake-fn-3" data-hash-target to="main-traits_social_lang-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_lang-fake-fn-4-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_lang-fake-fn-4" data-hash-target to="main-traits_social_lang-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_lang-fake-fn-5-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_lang-fake-fn-5" data-hash-target to="main-traits_social_lang-fake-fn-5">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_bluff = {title: "Bluff Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitcanter-canter-fn1-fn2-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcanter-canter-fn1-fn2-fn3"><Link to="/trait/canter">⮞</Link> Canter <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-1" id="main-traits_social_bluff-fake-fn-1" data-hash-target to="main-traits_social_bluff-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-2" id="main-traits_social_bluff-fake-fn-2" data-hash-target to="main-traits_social_bluff-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-3" id="main-traits_social_bluff-fake-fn-3" data-hash-target to="main-traits_social_bluff-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcanter-canter-fn1-fn2-fn3-flavor">You grew up among thieves and scoundrels, and their unusual speech patterns and turns of phrase don't faze you in the slightest.</Pair>
<Pair single="benefit" id="traitcanter-canter-fn1-fn2-fn3-benefit">Anyone who attempts to use <Link to="/skill/bluff">Bluff</Link> to deliver a secret message to you gains a +5 bonus on her Bluff check. When you attempt to intercept a secret message using <Link to="/skill/sense_motive">Sense Motive</Link>, you gain a +5 trait bonus on the attempt.</Pair>
</Ability>
<Ability id="traitcharming-charming-fn1-2-fn3-2-fn2-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcharming-charming-fn1-2-fn3-2-fn2-2"><Link to="/trait/charming">⮞</Link> Charming <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-1.2" id="main-traits_social_bluff-fake-fn-1.2" data-hash-target to="main-traits_social_bluff-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-3.2" id="main-traits_social_bluff-fake-fn-3.2" data-hash-target to="main-traits_social_bluff-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-2.2" id="main-traits_social_bluff-fake-fn-2.2" data-hash-target to="main-traits_social_bluff-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcharming-charming-fn1-2-fn3-2-fn2-2-flavor">Blessed with good looks, you've come to depend on the fact that others find you attractive.</Pair>
<Pair single="benefit" id="traitcharming-charming-fn1-2-fn3-2-fn2-2-benefit">You gain a +1 trait bonus when you use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures.</Pair>
</Ability>
<Ability id="traitchelishsympathizer-chelish-sympathizer-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchelishsympathizer-chelish-sympathizer-fn4"><Link to="/trait/chelish_sympathizer">⮞</Link> Chelish Sympathizer <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-4" id="main-traits_social_bluff-fake-fn-4" data-hash-target to="main-traits_social_bluff-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchelishsympathizer-chelish-sympathizer-fn4-flavor">You feed intelligence to the Thrice-Damned House of Thrune for your own gain or ideological reasons and are given valuable clues gathered by other Chelish spies in exchange.</Pair>
<Pair single="benefit" id="traitchelishsympathizer-chelish-sympathizer-fn4-benefit">Once per month while in an Inner Sea region settlement of at least 2,000 people, you can call upon your connections to gain an edge in a <Link to="/rule/verbal_duels">verbal duel</Link> or gain a +2 bonus on one <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check.</Pair>
</Ability>
<Ability id="traitconvincingliar-convincing-liar-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitconvincingliar-convincing-liar-fn5"><Link to="/trait/convincing_liar">⮞</Link> Convincing Liar <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-5" id="main-traits_social_bluff-fake-fn-5" data-hash-target to="main-traits_social_bluff-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="flavor" id="traitconvincingliar-convincing-liar-fn5-flavor">You've spent your life perfecting the art of half-truths in order to accomplish what you need to.</Pair>
<Pair single="benefit" id="traitconvincingliar-convincing-liar-fn5-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/intimidate">Intimidate</Link> checks and one of these skills (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitdeepcover-deep-cover-fn4-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdeepcover-deep-cover-fn4-2"><Link to="/trait/deep_cover">⮞</Link> Deep Cover <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-4.2" id="main-traits_social_bluff-fake-fn-4.2" data-hash-target to="main-traits_social_bluff-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdeepcover-deep-cover-fn4-2-flavor">You have lived a double life since your youth, perhaps to avoid persecution for your true identity or in service to an enemy of the people or group associated with your cover identity.</Pair>
<Pair single="benefit" id="traitdeepcover-deep-cover-fn4-2-benefit">You can always take 10 on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/disguise">Disguise</Link> checks to assume and maintain your cover identity. Bluff or Disguise (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitdoublespeak-doublespeak-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdoublespeak-doublespeak-fn6"><Link to="/trait/doublespeak">⮞</Link> Doublespeak <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-6" id="main-traits_social_bluff-fake-fn-6" data-hash-target to="main-traits_social_bluff-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdoublespeak-doublespeak-fn6-flavor">It isn't what you say - it's how you say it.</Pair>
<Pair single="benefit" id="traitdoublespeak-doublespeak-fn6-benefit">You gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to pass along secret messages.</Pair>
</Ability>
<Ability id="traitelementalnegotiator-elemental-negotiator-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitelementalnegotiator-elemental-negotiator-fn7"><Link to="/trait/elemental_negotiator">⮞</Link> Elemental Negotiator <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-7" id="main-traits_social_bluff-fake-fn-7" data-hash-target to="main-traits_social_bluff-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitelementalnegotiator-elemental-negotiator-fn7-flavor">You have traveled to the Elemental Planes under the protection of a powerful group of merchants or spellcasters.</Pair>
<Pair single="benefit" id="traitelementalnegotiator-elemental-negotiator-fn7-benefit"><p>At character creation, you learn one of the following languages as a bonus language: Aquan, Auran, Ignan, or Terran. Additionally, your options for bonus languages from having a high Intelligence score include the other three elemental languages, in addition to those language options allowed by your race and class.</p>
<p>You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/bluff">Bluff</Link> checks when using one of these languages to communicate with a creature originating from the language's corresponding Elemental Plane.</p>
</Pair>
</Ability>
<Ability id="traitexcellentpenmanship-excellent-penmanship-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexcellentpenmanship-excellent-penmanship-fn8"><Link to="/trait/excellent_penmanship">⮞</Link> Excellent Penmanship <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-8" id="main-traits_social_bluff-fake-fn-8" data-hash-target to="main-traits_social_bluff-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexcellentpenmanship-excellent-penmanship-fn8-flavor">You are a master of calligraphy, an art once highly valued in Lung Wa and still held in high esteem in Lingshen.</Pair>
<Pair single="benefit" id="traitexcellentpenmanship-excellent-penmanship-fn8-benefit">The DC to detect forgeries you create increases by 2. If you attempt to persuade someone via a written message, you gain a +2 bonus on any <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check attempted for that communication. <Link to="/skill/linguistics">Linguistics</Link> is always a class skill for you.</Pair>
</Ability>
<Ability id="traitexpressivepantomime-expressive-pantomime-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexpressivepantomime-expressive-pantomime-fn9"><Link to="/trait/expressive_pantomime">⮞</Link> Expressive Pantomime <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-9" id="main-traits_social_bluff-fake-fn-9" data-hash-target to="main-traits_social_bluff-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexpressivepantomime-expressive-pantomime-fn9-flavor">You have learned to express yourself without having to depend on words.</Pair>
<Pair single="benefit" id="traitexpressivepantomime-expressive-pantomime-fn9-benefit">When attempting a <Link to="/skill/bluff">Bluff</Link> check to deliver a secret message, you can take a -5 penalty on the check to communicate a simple message even to creatures that do not share a language with you. You cannot communicate with mindless creatures.</Pair>
</Ability>
<Ability id="traitfasttalker-fast-talker-fn1-3-fn3-3-fn2-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfasttalker-fast-talker-fn1-3-fn3-3-fn2-3"><Link to="/trait/fast_talker">⮞</Link> Fast Talker <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-1.3" id="main-traits_social_bluff-fake-fn-1.3" data-hash-target to="main-traits_social_bluff-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-3.3" id="main-traits_social_bluff-fake-fn-3.3" data-hash-target to="main-traits_social_bluff-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-2.3" id="main-traits_social_bluff-fake-fn-2.3" data-hash-target to="main-traits_social_bluff-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfasttalker-fast-talker-fn1-3-fn3-3-fn2-3-flavor">You had a knack for getting yourself into trouble as a child, and as a result developed a silver tongue at an early age.</Pair>
<Pair single="benefit" id="traitfasttalker-fast-talker-fn1-3-fn3-3-fn2-3-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks, and Bluff is always a class skill for you.</Pair>
</Ability>
<Ability id="traitgestureexpertise-gesture-expertise-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgestureexpertise-gesture-expertise-fn10"><Link to="/trait/gesture_expertise">⮞</Link> Gesture Expertise <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-10" id="main-traits_social_bluff-fake-fn-10" data-hash-target to="main-traits_social_bluff-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgestureexpertise-gesture-expertise-fn10-flavor">You are adept at nonverbal communication.</Pair>
<Pair single="benefit" id="traitgestureexpertise-gesture-expertise-fn10-benefit">You can use a sign language or gestural system to send complex messages quickly in combat, and with a successful DC 15 <Link to="/skill/linguistics">Linguistics</Link> check, you can express yourself clearly enough to communicate basic messages to people who do not understand your gestures. You gain a +2 trait bonus to send secret messages via gestures using the <Link to="/skill/bluff">Bluff</Link> skill, and to understand gestures with the Linguistics skill.</Pair>
</Ability>
<Ability id="traitmastermessenger-master-messenger-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmastermessenger-master-messenger-fn11"><Link to="/trait/master_messenger">⮞</Link> Master Messenger <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-11" id="main-traits_social_bluff-fake-fn-11" data-hash-target to="main-traits_social_bluff-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Riddleport</Pair>
<Pair single="flavor" id="traitmastermessenger-master-messenger-fn11-flavor">Your secret messages are rarely misunderstood.</Pair>
<Pair single="benefit" id="traitmastermessenger-master-messenger-fn11-benefit">If you fail your <Link to="/skill/bluff">Bluff</Link> check to pass a simple message by 5 or more, you deliver no message instead of delivering the wrong message.</Pair>
</Ability>
<Ability id="traitsecretkeeperqac-secret-keeper-qac-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsecretkeeperqac-secret-keeper-qac-fn12"><Link to="/trait/secret_keeper_qac">⮞</Link> Secret-Keeper (QaC) <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-12" id="main-traits_social_bluff-fake-fn-12" data-hash-target to="main-traits_social_bluff-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsecretkeeperqac-secret-keeper-qac-fn12-flavor">Growing up in a land where paranoia fills the air and any accusation of heresy or dissent can spell doom for whole families, you learned very quickly to keep a secret.</Pair>
<Pair single="benefit" id="traitsecretkeeperqac-secret-keeper-qac-fn12-benefit"><p>You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks and a +1 trait bonus on saving throws against divinations, domination effects, and effects that would compel you to speak the truth.</p>
<p><strong>Suggested Characters:</strong> Chelaxians, Galtans, Nidalese.</p>
</Pair>
</Ability>
<Ability id="traitsignaturemoves-signature-moves-fn6-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsignaturemoves-signature-moves-fn6-2"><Link to="/trait/signature_moves">⮞</Link> Signature Moves <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-6.2" id="main-traits_social_bluff-fake-fn-6.2" data-hash-target to="main-traits_social_bluff-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsignaturemoves-signature-moves-fn6-2-flavor">You're known for some unique item that has become your trademark.</Pair>
<Pair single="benefit" id="traitsignaturemoves-signature-moves-fn6-2-benefit">Your starting equipment includes a single masterwork item worth less than 900 gp, and you gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks while wielding this item in one or both hands.</Pair>
</Ability>
<Ability id="traitstudentofphilosophy-student-of-philosophy-fn12-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitstudentofphilosophy-student-of-philosophy-fn12-2"><Link to="/trait/student_of_philosophy">⮞</Link> Student of Philosophy <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-12.2" id="main-traits_social_bluff-fake-fn-12.2" data-hash-target to="main-traits_social_bluff-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitstudentofphilosophy-student-of-philosophy-fn12-2-flavor">You were trained in a now-defunct philosophical tradition - such as that of the now-destroyed Galtan universities or Lirgeni astrologers - and learned to use logic and reason to persuade others.</Pair>
<Pair single="benefit" id="traitstudentofphilosophy-student-of-philosophy-fn12-2-benefit">You can use your Intelligence modifier in place of your Charisma modifier on <Link to="/skill/diplomacy">Diplomacy</Link> checks to persuade others and on <Link to="/skill/bluff">Bluff</Link> checks to convince others that a lie is true. (This trait does not affect Diplomacy checks to gather information or Bluff checks to feint in combat.) Suggested Characters: Arodenites, Galtans, Sodden Lands natives.</Pair>
</Ability>
<Ability id="traitsubjectivetruth-subjective-truth-fn13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsubjectivetruth-subjective-truth-fn13"><Link to="/trait/subjective_truth">⮞</Link> Subjective Truth <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-13" id="main-traits_social_bluff-fake-fn-13" data-hash-target to="main-traits_social_bluff-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsubjectivetruth-subjective-truth-fn13-flavor">You are able to divorce your knowledge of the facts from your beliefs about the truth, and thus from your facial expressions and body language.</Pair>
<Pair single="benefit" id="traitsubjectivetruth-subjective-truth-fn13-benefit">You gain a +2 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks to lie, provided the person you're lying to has never known you to lie to him. Failing this check counts as being caught in a lie by the target, negating any future use of this bonus against that person.</Pair>
</Ability>
<Ability id="traitunpredictable-unpredictable-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunpredictable-unpredictable-fn1-4"><Link to="/trait/unpredictable">⮞</Link> Unpredictable <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-1.4" id="main-traits_social_bluff-fake-fn-1.4" data-hash-target to="main-traits_social_bluff-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitunpredictable-unpredictable-fn1-4-flavor">Your actions often seem random and chaotic to others, but there is a method to your madness.</Pair>
<Pair single="benefit" id="traitunpredictable-unpredictable-fn1-4-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks, and Bluff is always a class skill for you.</Pair>
</Ability>
<Ability id="traitveileddisciple-veiled-disciple-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitveileddisciple-veiled-disciple-fn1-5"><Link to="/trait/veiled_disciple">⮞</Link> Veiled Disciple <sup><InnerLink showBacklink="backlink-main-traits_social_bluff-fake-fn-1.5" id="main-traits_social_bluff-fake-fn-1.5" data-hash-target to="main-traits_social_bluff-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitveileddisciple-veiled-disciple-fn1-5-flavor">Trained in espionage, you're skilled at passing messages and staying on task.</Pair>
<Pair single="benefit" id="traitveileddisciple-veiled-disciple-fn1-5-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to pass secret messages and a +1 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_bluff-label">Footnotes</h3><ol>
<li id="main-traits_social_bluff-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_bluff-fake-fn-1" data-hash-target to="main-traits_social_bluff-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_bluff-fake-fn-1.2" data-hash-target to="main-traits_social_bluff-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_bluff-fake-fn-1.3" data-hash-target to="main-traits_social_bluff-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_bluff-fake-fn-1.4" data-hash-target to="main-traits_social_bluff-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_bluff-fake-fn-1.5" data-hash-target to="main-traits_social_bluff-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-2-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_bluff-fake-fn-2" data-hash-target to="main-traits_social_bluff-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_bluff-fake-fn-2.2" data-hash-target to="main-traits_social_bluff-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_bluff-fake-fn-2.3" data-hash-target to="main-traits_social_bluff-fake-fn-2.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-3-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_bluff-fake-fn-3" data-hash-target to="main-traits_social_bluff-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_bluff-fake-fn-3.2" data-hash-target to="main-traits_social_bluff-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_bluff-fake-fn-3.3" data-hash-target to="main-traits_social_bluff-fake-fn-3.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-4-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_bluff-fake-fn-4" data-hash-target to="main-traits_social_bluff-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_bluff-fake-fn-4.2" data-hash-target to="main-traits_social_bluff-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-5-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_bluff-fake-fn-5" data-hash-target to="main-traits_social_bluff-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-6-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_bluff-fake-fn-6" data-hash-target to="main-traits_social_bluff-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_bluff-fake-fn-6.2" data-hash-target to="main-traits_social_bluff-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-7-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_bluff-fake-fn-7" data-hash-target to="main-traits_social_bluff-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-8-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 23 <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_bluff-fake-fn-8" data-hash-target to="main-traits_social_bluff-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-9-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_bluff-fake-fn-9" data-hash-target to="main-traits_social_bluff-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-10-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_bluff-fake-fn-10" data-hash-target to="main-traits_social_bluff-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-11-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_bluff-fake-fn-11" data-hash-target to="main-traits_social_bluff-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-12-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_bluff-fake-fn-12" data-hash-target to="main-traits_social_bluff-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_bluff-fake-fn-12.2" data-hash-target to="main-traits_social_bluff-fake-fn-12.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_bluff-fake-fn-13-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_bluff-fake-fn-13" data-hash-target to="main-traits_social_bluff-fake-fn-13">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_diplo = {title: "Diplomacy Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitaffable-affable-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitaffable-affable-fn1"><Link to="/trait/affable">⮞</Link> Affable <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-1" id="main-traits_social_diplo-fake-fn-1" data-hash-target to="main-traits_social_diplo-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitaffable-affable-fn1-flavor">You have a genial personality and make it a point to befriend and help people wherever you go. In your travels, you stop to aid others, tell interesting stories, and often buy rounds of drinks for patrons at the local taverns. You bring good cheer to those you encounter, and for this reason, you often find yourself attending important events or fruitful gatherings, and have even become an honorary member of many families. People find you trustworthy, and they are willing to share information with you.</Pair>
<Pair single="benefit" id="traitaffable-affable-fn1-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information, and can do so in half the normal time. In addition, Diplomacy and <Link to="/skill/knowledge_local">Knowledge (local)</Link> are always class skills for you.</Pair>
</Ability>
<Ability id="traitambitious-ambitious-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitambitious-ambitious-fn2"><Link to="/trait/ambitious">⮞</Link> Ambitious <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2" id="main-traits_social_diplo-fake-fn-2" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitambitious-ambitious-fn2-flavor">You exude confidence in the presence of those more powerful than you - sometimes unreasonably so.</Pair>
<Pair single="benefit" id="traitambitious-ambitious-fn2-benefit">You gain a +4 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to influence creatures with at least 5 Hit Dice more than you possess.</Pair>
</Ability>
<Ability id="traitamiableblunder-amiable-blunder-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitamiableblunder-amiable-blunder-fn3"><Link to="/trait/amiable_blunder">⮞</Link> Amiable Blunder <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-3" id="main-traits_social_diplo-fake-fn-3" data-hash-target to="main-traits_social_diplo-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitamiableblunder-amiable-blunder-fn3-flavor">Your easy-going demeanor allows you to sometimes recover from potentially awkward social situations or even condemnatory faux pas.</Pair>
<Pair single="benefit" id="traitamiableblunder-amiable-blunder-fn3-benefit">Once per day when you fail a <Link to="/skill/diplomacy">Diplomacy</Link> check by 5 or more and would cause an NPC's attitude toward you to worsen, you can immediately attempt another Diplomacy check against the same DC as a <strong className="hl">free action</strong>. If you succeed at this second Diplomacy check, the character's attitude doesn't change, as though you had failed the original check by 4 or less.</Pair>
</Ability>
<Ability id="traitamiablebriber-amiable-briber-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitamiablebriber-amiable-briber-fn4"><Link to="/trait/amiable_briber">⮞</Link> Amiable Briber <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-4" id="main-traits_social_diplo-fake-fn-4" data-hash-target to="main-traits_social_diplo-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Absalom</Pair>
<Pair single="flavor" id="traitamiablebriber-amiable-briber-fn4-flavor">Your attempts to bribe others usually come off as playful or as a gag.</Pair>
<Pair single="benefit" id="traitamiablebriber-amiable-briber-fn4-benefit">The first time someone refuses a bribe you offer, that person's attitude toward you doesn't worsen, even if the offer would normally offend the person (as though you had failed a <Link to="/skill/diplomacy">Diplomacy</Link> check by 5 or more).</Pair>
</Ability>
<Ability id="traitbureaucratsfavored-bureaucrats-favored-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbureaucratsfavored-bureaucrats-favored-fn5"><Link to="/trait/bureaucrats_favored">⮞</Link> Bureaucrat's Favored <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-5" id="main-traits_social_diplo-fake-fn-5" data-hash-target to="main-traits_social_diplo-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Osirion</Pair>
<Pair title="Requirements" hl>Associated with the court of the Black Dome</Pair>
<Pair single="flavor" id="traitbureaucratsfavored-bureaucrats-favored-fn5-flavor">You have gained favor with the government of Sothis.</Pair>
<Pair single="benefit" id="traitbureaucratsfavored-bureaucrats-favored-fn5-benefit">Once per week, you can attempt a DC 20 <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> check to gain access to an exclusive site or event, such as a government building or an aristocrat's ball.</Pair>
</Ability>
<Ability id="traitcalculatedbribe-calculated-bribe-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcalculatedbribe-calculated-bribe-fn6"><Link to="/trait/calculated_bribe">⮞</Link> Calculated Bribe <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-6" id="main-traits_social_diplo-fake-fn-6" data-hash-target to="main-traits_social_diplo-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Perseverance" hl><p>Knights who follow the code of perseverance believe that to truly serve a purpose, an organization or group of individuals must first look to its own survival. Deeds are temporary and forgotten with time. For an organization to be influential, it must persist. These knights collect power and wealth, always looking to the future. Their vows are as follows.</p>
<ul>
<li>I will take on no challenges out of charity. Any task that I undertake for another individual will have an associated price, though it may not be monetary in nature.</li>
<li>I shall let neither compassion nor hatred rob me of wealth. I will not give wealth away to those who have done nothing for me, nor shall I engage in needless destruction of potential resources.</li>
<li>I will set aside a fraction of all my spoils to guard against any chances of future poverty.</li>
<li>If I have an opportunity to seize power, I will not hesitate to take it if it will strengthen my position.</li>
<li>I will not take unnecessary risks that place my future or the future of my organization in jeopardy.</li>
</ul>
</Pair>
<Pair single="flavor" id="traitcalculatedbribe-calculated-bribe-fn6-flavor">If you follow this code, you are keenly aware of the value of actions as well as goods.</Pair>
<Pair single="benefit" id="traitcalculatedbribe-calculated-bribe-fn6-benefit"><p>Once per day while haggling with a merchant or striking a bargain with another intelligent creature, you can spend a number of gold pieces equal to your level &times; 10 in order to reroll a <Link to="/skill/diplomacy">Diplomacy</Link> check you just made, before the results are revealed. You must take the result of the reroll, even if it's worse than the original roll.</p>
<p>In addition, you begin play with a set of extravagant noble's clothes worth 100 gp.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate this code must perform penance by placing money into a fund to guard against their order's future poverty. The amount required for a knight to set aside is 100 gold &times; the knight's current level.</Pair>
</Ability>
<Ability id="traitcarnalattraction-carnal-attraction-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcarnalattraction-carnal-attraction-fn7"><Link to="/trait/carnal_attraction">⮞</Link> Carnal Attraction <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-7" id="main-traits_social_diplo-fake-fn-7" data-hash-target to="main-traits_social_diplo-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitcarnalattraction-carnal-attraction-fn7-benefit">You know how to ask the wrong questions the right way, granting you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> (gather information) and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks regarding whichever vice fascinates you: drugs, forbidden lore, gambling, illegal fighting, or a similar debauchery or indecency.</Pair>
</Ability>
<Ability id="traitcharming-charming-fn2-2-fn8-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcharming-charming-fn2-2-fn8-fn9"><Link to="/trait/charming">⮞</Link> Charming <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2.2" id="main-traits_social_diplo-fake-fn-2.2" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-8" id="main-traits_social_diplo-fake-fn-8" data-hash-target to="main-traits_social_diplo-fake-fn-8-target">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-9" id="main-traits_social_diplo-fake-fn-9" data-hash-target to="main-traits_social_diplo-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcharming-charming-fn2-2-fn8-fn9-flavor">Blessed with good looks, you've come to depend on the fact that others find you attractive.</Pair>
<Pair single="benefit" id="traitcharming-charming-fn2-2-fn8-fn9-benefit">You gain a +1 trait bonus when you use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures.</Pair>
</Ability>
<Ability id="traitchelishsympathizer-chelish-sympathizer-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchelishsympathizer-chelish-sympathizer-fn10"><Link to="/trait/chelish_sympathizer">⮞</Link> Chelish Sympathizer <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-10" id="main-traits_social_diplo-fake-fn-10" data-hash-target to="main-traits_social_diplo-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchelishsympathizer-chelish-sympathizer-fn10-flavor">You feed intelligence to the Thrice-Damned House of Thrune for your own gain or ideological reasons and are given valuable clues gathered by other Chelish spies in exchange.</Pair>
<Pair single="benefit" id="traitchelishsympathizer-chelish-sympathizer-fn10-benefit">Once per month while in an Inner Sea region settlement of at least 2,000 people, you can call upon your connections to gain an edge in a <Link to="/rule/verbal_duels">verbal duel</Link> or gain a +2 bonus on one <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check.</Pair>
</Ability>
<Ability id="traitcriminalroots-criminal-roots-fn10-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminalroots-criminal-roots-fn10-2"><Link to="/trait/criminal_roots">⮞</Link> Criminal Roots <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-10.2" id="main-traits_social_diplo-fake-fn-10.2" data-hash-target to="main-traits_social_diplo-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminalroots-criminal-roots-fn10-2-flavor">Your family has long operated outside the law.</Pair>
<Pair single="benefit" id="traitcriminalroots-criminal-roots-fn10-2-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence criminals and on <Link to="/skill/intimidate">Intimidate</Link> checks to influence law-abiding citizens, but take a -2 penalty on Diplomacy checks to influence law-abiding citizens. Diplomacy or Intimidate (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminallyconnected-criminally-connected-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminallyconnected-criminally-connected-fn11"><Link to="/trait/criminally_connected">⮞</Link> Criminally Connected <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-11" id="main-traits_social_diplo-fake-fn-11" data-hash-target to="main-traits_social_diplo-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminallyconnected-criminally-connected-fn11-flavor">You have spent a lot of time dealing with the criminal underworld - so much that it might be hard for observers to see you as distinct from it. However, this familiarity gives you a leg up on heroes who refuse to muddy their reputation.</Pair>
<Pair single="benefit" id="traitcriminallyconnected-criminally-connected-fn11-benefit">While in settlements, you gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information.</Pair>
</Ability>
<Ability id="traitcynicalear-cynical-ear-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcynicalear-cynical-ear-fn12"><Link to="/trait/cynical_ear">⮞</Link> Cynical Ear <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-12" id="main-traits_social_diplo-fake-fn-12" data-hash-target to="main-traits_social_diplo-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcynicalear-cynical-ear-fn12-flavor">Neither honeyed tongues or righteous wrath move you much.</Pair>
<Pair single="benefit" id="traitcynicalear-cynical-ear-fn12-benefit">Add 2 when determining your Hit Dice for <Link to="/skill/intimidate">Intimidate</Link> checks, and increase the DC or all <Link to="/skill/diplomacy">Diplomacy</Link> checks against you by 2.</Pair>
</Ability>
<Ability id="traitdarklandstrader-darklands-trader-fn13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdarklandstrader-darklands-trader-fn13"><Link to="/trait/darklands_trader">⮞</Link> Darklands Trader <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-13" id="main-traits_social_diplo-fake-fn-13" data-hash-target to="main-traits_social_diplo-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdarklandstrader-darklands-trader-fn13-flavor">You're familiar with Nar-Voth's trade routes and negotiation involving the denizens of the Darklands.</Pair>
<Pair single="benefit" id="traitdarklandstrader-darklands-trader-fn13-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks relating to subterranean trade and on <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> checks relating to subterranean creatures. Select one of these skills to be a class skill for you.</Pair>
</Ability>
<Ability id="traitdragonpact-dragon-pact-fn14" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdragonpact-dragon-pact-fn14"><Link to="/trait/dragon_pact">⮞</Link> Dragon Pact <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-14" id="main-traits_social_diplo-fake-fn-14" data-hash-target to="main-traits_social_diplo-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdragonpact-dragon-pact-fn14-flavor">At some point your family served a dragon, and acted as its emissary to others. Some members of your family have benefited from this arrangement, gaining some small fraction of that dragon's noble bearing.</Pair>
<Pair single="benefit" id="traitdragonpact-dragon-pact-fn14-benefit">Choose one category of <Link to="/family/true_dragon">true dragon</Link> (chromatic, metallic, primal, etc.). You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks against that category of dragon and a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against all creatures of the dragon type that are not of the same category of true dragon.</Pair>
</Ability>
<Ability id="traitecumenical-ecumenical-fn15" extraClasses="trait" icon={["village"]}>
<Pair single id="traitecumenical-ecumenical-fn15"><Link to="/trait/ecumenical">⮞</Link> Ecumenical <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-15" id="main-traits_social_diplo-fake-fn-15" data-hash-target to="main-traits_social_diplo-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitecumenical-ecumenical-fn15-flavor">Your childhood in Magnimar (or in a similar cosmopolitan city) taught you to recognize signs of worship of demigods such as empyreal lords.</Pair>
<Pair single="benefit" id="traitecumenical-ecumenical-fn15-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks involving entities other than the most influential gods. You also gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence worshipers of such entities.</Pair>
</Ability>
<Ability id="traitelementalnegotiator-elemental-negotiator-fn16" extraClasses="trait" icon={["village"]}>
<Pair single id="traitelementalnegotiator-elemental-negotiator-fn16"><Link to="/trait/elemental_negotiator">⮞</Link> Elemental Negotiator <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-16" id="main-traits_social_diplo-fake-fn-16" data-hash-target to="main-traits_social_diplo-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitelementalnegotiator-elemental-negotiator-fn16-flavor">You have traveled to the Elemental Planes under the protection of a powerful group of merchants or spellcasters.</Pair>
<Pair single="benefit" id="traitelementalnegotiator-elemental-negotiator-fn16-benefit"><p>At character creation, you learn one of the following languages as a bonus language: Aquan, Auran, Ignan, or Terran. Additionally, your options for bonus languages from having a high Intelligence score include the other three elemental languages, in addition to those language options allowed by your race and class.</p>
<p>You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/bluff">Bluff</Link> checks when using one of these languages to communicate with a creature originating from the language's corresponding Elemental Plane.</p>
</Pair>
</Ability>
<Ability id="traitenemyofslavers-enemy-of-slavers-fn6-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitenemyofslavers-enemy-of-slavers-fn6-2"><Link to="/trait/enemy_of_slavers">⮞</Link> Enemy of Slavers <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-6.2" id="main-traits_social_diplo-fake-fn-6.2" data-hash-target to="main-traits_social_diplo-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Freedom" hl><p>Knights who follow the code of freedom believe that no man, woman, or child should be owned by another individual. They believe that all of the humanoid races, even those of monstrous descent, deserve to be given a chance to make their own decisions in life. Their vows are as follows.</p>
<ul>
<li>I will not tolerate slavery in any form. If I witness one individual being sold to another, I will intervene with words or actions as necessary.</li>
<li>If I encounter any escaped slaves, I will make it my duty to take them under my care until they find a safe home.</li>
<li>I shall not willingly deal with any who support or benefit from slavery.</li>
<li>I keep no slaves. Those who wait upon me do so of their own volition or because they are in my employ and are treated with the utmost respect.</li>
<li>When visiting others who keep servants, I will treat them honorably. I shall inquire as to their happiness and treatment. Those who are treated as no more than slaves will gain my strength to support them.</li>
<li>Shackles and bonds are forbidden unless used on an individual convicted of a crime. Placing another person in chains is akin to being a slaver.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitenemyofslavers-enemy-of-slavers-fn6-2-benefit"><p>If you follow this code, you are known to be single-minded with regard to slavery, and this fervent belief is easily perceived by others. Those who deal in flesh have a greater desire to appease you before matters escalate to confrontation, knowing that your wrath will be unwavering and swift.
You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks made to sway the minds of slavers and anyone who otherwise keeps innocent people against their will.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate any of this code's tenets must perform penance by placing themselves in servitude to the individual who was wronged. If the exact individual cannot be found, a person of equivalent social class is sufficient. The length of servitude is dependent on the severity of the transgression. Minor transgressions require a day. If an entire family was enslaved as a result of the knight's actions (or inaction), up to a month of servitude might be required.</Pair>
</Ability>
<Ability id="traitexcellentpenmanship-excellent-penmanship-fn17" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexcellentpenmanship-excellent-penmanship-fn17"><Link to="/trait/excellent_penmanship">⮞</Link> Excellent Penmanship <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-17" id="main-traits_social_diplo-fake-fn-17" data-hash-target to="main-traits_social_diplo-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexcellentpenmanship-excellent-penmanship-fn17-flavor">You are a master of calligraphy, an art once highly valued in Lung Wa and still held in high esteem in Lingshen.</Pair>
<Pair single="benefit" id="traitexcellentpenmanship-excellent-penmanship-fn17-benefit">The DC to detect forgeries you create increases by 2. If you attempt to persuade someone via a written message, you gain a +2 bonus on any <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check attempted for that communication. <Link to="/skill/linguistics">Linguistics</Link> is always a class skill for you.</Pair>
</Ability>
<Ability id="traitfriendineverytown-friend-in-every-town-fn2-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendineverytown-friend-in-every-town-fn2-3"><Link to="/trait/friend_in_every_town">⮞</Link> Friend in Every Town <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2.3" id="main-traits_social_diplo-fake-fn-2.3" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendineverytown-friend-in-every-town-fn2-3-flavor">You have no problem making friends and learning information from them wherever you go.</Pair>
<Pair single="benefit" id="traitfriendineverytown-friend-in-every-town-fn2-3-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and <Link to="/skill/diplomacy">Diplomacy</Link> checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitfriendsinhighplaces-friends-in-high-places-fn18" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendsinhighplaces-friends-in-high-places-fn18"><Link to="/trait/friends_in_high_places">⮞</Link> Friends in High Places <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-18" id="main-traits_social_diplo-fake-fn-18" data-hash-target to="main-traits_social_diplo-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendsinhighplaces-friends-in-high-places-fn18-flavor">You have often seen lawbreakers go free when they demonstrate they have friends in high places, and so you put special effort into befriending powerful people yourself.</Pair>
<Pair single="benefit" id="traitfriendsinhighplaces-friends-in-high-places-fn18-benefit"><p>Whenever you are in an area in which you have used the <Link to="/skill/diplomacy">Diplomacy</Link> skill to gather information, you gain a +1 trait bonus on Diplomacy and <Link to="/skill/intimidate">Intimidate</Link> checks. This bonus increases to +2 when dealing with government officials.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, <Link to="/rule/aspis_consortium">Aspis Consortium</Link> agents, Taldans.</p>
</Pair>
</Ability>
<Ability id="traitfriendsinlowplaces-friends-in-low-places-fn12-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendsinlowplaces-friends-in-low-places-fn12-2"><Link to="/trait/friends_in_low_places">⮞</Link> Friends in Low Places <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-12.2" id="main-traits_social_diplo-fake-fn-12.2" data-hash-target to="main-traits_social_diplo-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendsinlowplaces-friends-in-low-places-fn12-2-flavor">Outcasts know their own, and that knowledge opens doors and loosens tongues.</Pair>
<Pair single="benefit" id="traitfriendsinlowplaces-friends-in-low-places-fn12-2-benefit"><Link to="/skill/diplomacy">Gathering information</Link> in lower quarters, such as vice dens and poorer districts, takes you 1d2 hours (instead of 1d4 hours). In addition, the attitudes of any destitute or impoverished NPCs you interact with begin one step closer to helpful.</Pair>
</Ability>
<Ability id="traitgregarious-gregarious-fn18-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitgregarious-gregarious-fn18-2"><Link to="/trait/gregarious">⮞</Link> Gregarious <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-18.2" id="main-traits_social_diplo-fake-fn-18.2" data-hash-target to="main-traits_social_diplo-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitgregarious-gregarious-fn18-2-flavor">At least once in your childhood, your family moved for a reason you didn't understand and you were forced to leave behind your old friends and make new ones. Ever since, you have always been the first to meet strangers, make new friends, and welcome travelers. You learned that first impressions are the most important, and have a knack for making a good one.</Pair>
<Pair single="benefit" id="traitgregarious-gregarious-fn18-2-benefit"><p>Once per day, when you attempt a <Link to="/skill/diplomacy">Diplomacy</Link> check to improve a creature's attitude toward you, you may choose to reroll the check after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.</p>
<p><strong>Suggested Characters:</strong> <Link to="/rule/eagle_knights">Eagle Knights</Link>, Garundi, Pathfinders.</p>
</Pair>
</Ability>
<Ability id="traitheartoftwoworlds-heart-of-two-worlds-fn12-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitheartoftwoworlds-heart-of-two-worlds-fn12-3"><Link to="/trait/heart_of_two_worlds">⮞</Link> Heart of Two Worlds <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-12.3" id="main-traits_social_diplo-fake-fn-12.3" data-hash-target to="main-traits_social_diplo-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitheartoftwoworlds-heart-of-two-worlds-fn12-3-flavor">Born into a world split in twain, you are particularly skilled at understanding and empathizing with those around you.</Pair>
<Pair single="benefit" id="traitheartoftwoworlds-heart-of-two-worlds-fn12-3-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks involving creatures that belong to the same race (or, if human, ethnicity) as your mother or father.</Pair>
</Ability>
<Ability id="traithellknightancestry-hellknight-ancestry-fn19" extraClasses="trait" icon={["village"]}>
<Pair single id="traithellknightancestry-hellknight-ancestry-fn19"><Link to="/trait/hellknight_ancestry">⮞</Link> Hellknight Ancestry <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-19" id="main-traits_social_diplo-fake-fn-19" data-hash-target to="main-traits_social_diplo-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traithellknightancestry-hellknight-ancestry-fn19-flavor">At least one of your parents was a <Link to="/rule/hellknights">Hellknight</Link>, and you see the orders as the embodiment of civic virtue.</Pair>
<Pair single="benefit" id="traithellknightancestry-hellknight-ancestry-fn19-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence Hellknights and a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks to influence enemies of the Hellknights.</Pair>
</Ability>
<Ability id="traitinfluence-influence-fn2-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinfluence-influence-fn2-4"><Link to="/trait/influence">⮞</Link> Influence <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2.4" id="main-traits_social_diplo-fake-fn-2.4" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitinfluence-influence-fn2-4-flavor">Your position in society grants you special insight into others, and special consideration or outright awe from others.</Pair>
<Pair single="benefit" id="traitinfluence-influence-fn2-4-benefit">Choose one of the following skills: <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sense_motive">Sense Motive</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitkeleshiteprincess-keleshite-princess-fn20" extraClasses="trait" icon={["village"]}>
<Pair single id="traitkeleshiteprincess-keleshite-princess-fn20"><Link to="/trait/keleshite_princess">⮞</Link> Keleshite Princess <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-20" id="main-traits_social_diplo-fake-fn-20" data-hash-target to="main-traits_social_diplo-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Qadira</Pair>
<Pair title="Requirements" hl>Keleshite; female</Pair>
<Pair single="flavor" id="traitkeleshiteprincess-keleshite-princess-fn20-flavor">You have been raised to expect obedience from those around you, regardless of their station, and are not shy about demanding what you want.</Pair>
<Pair single="benefit" id="traitkeleshiteprincess-keleshite-princess-fn20-benefit">You gain a +1 trait bonus to <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn12-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn12-4"><Link to="/trait/marked_by_unknown_forces">⮞</Link> Marked by Unknown Forces <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-12.4" id="main-traits_social_diplo-fake-fn-12.4" data-hash-target to="main-traits_social_diplo-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn12-4-flavor">That which has marked you for power has also given you proof to show others.</Pair>
<Pair single="benefit" id="traitmarkedbyunknownforces-marked-by-unknown-forces-fn12-4-benefit">You may cast <Link to="/spell/light">light</Link> three times per day as a spell-like ability, but this ability only targets the palm of your hand, and it manifests as a glowing sigil representing your ominous birth - a holy or unholy symbol, a demonic symbol, or perhaps some other distinctive marking established by you and your GM. Those who recognize this symbol have a <Link to="/skill/diplomacy">starting attitude</Link> toward you of one step closer to friendly (if they are followers of or scholars studying the sign) or one step closer to hostile (if they are opposed to the sign or its followers).</Pair>
</Ability>
<Ability id="traitmediator-mediator-fn1-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmediator-mediator-fn1-2"><Link to="/trait/mediator">⮞</Link> Mediator <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-1.2" id="main-traits_social_diplo-fake-fn-1.2" data-hash-target to="main-traits_social_diplo-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmediator-mediator-fn1-2-flavor">You have a way with calming tempers, using cool logic to sooth heated disagreements, and you were always the one to settle arguments among your friends, family, and community.</Pair>
<Pair single="benefit" id="traitmediator-mediator-fn1-2-benefit">You receive a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks. In addition, you receive a +1 trait bonus to the DC of any charm or compulsion effect that does not provide ongoing control and results in peaceful acts, such as <Link to="/spell/calm_emotions">calm emotions</Link>, <Link to="/spell/sleep">sleep</Link>, or a <Link to="/spell/suggestion">suggestion</Link> to lay down arms.</Pair>
</Ability>
<Ability id="traitmemorable-memorable-fn18-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmemorable-memorable-fn18-3"><Link to="/trait/memorable">⮞</Link> Memorable <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-18.3" id="main-traits_social_diplo-fake-fn-18.3" data-hash-target to="main-traits_social_diplo-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmemorable-memorable-fn18-3-flavor">Growing up amid a large number of children, you learned quickly how to get others' attention and keep it.</Pair>
<Pair single="benefit" id="traitmemorable-memorable-fn18-3-benefit"><p>When you modify a character's attitude with the <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> skill, the attitude change lasts 1-1/2 times longer than it otherwise would. Whenever you create a fear or mind-affecting effect that imposes a penalty or bonus with a duration of at least 2 rounds, it lasts 1 additional round after it would normally end. For example, if you demoralize a foe with an Intimidate check and beat the DC by 5, the victim is <Link to="/misc/shaken">shaken</Link> for 3 rounds instead of the usual 2 rounds.</p>
<p><strong>Suggested Characters:</strong> Free Captains, gnomes, Keleshites.</p>
</Pair>
</Ability>
<Ability id="traitmercenary-mercenary-fn2-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmercenary-mercenary-fn2-5"><Link to="/trait/mercenary">⮞</Link> Mercenary <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2.5" id="main-traits_social_diplo-fake-fn-2.5" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmercenary-mercenary-fn2-5-flavor">For everything there is a price, and you are a negotiator at heart.</Pair>
<Pair single="benefit" id="traitmercenary-mercenary-fn2-5-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks made while negotiating payment for a quest or a service that you provide.</Pair>
</Ability>
<Ability id="traitnightstallsnavigator-nightstalls-navigator-fn21" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnightstallsnavigator-nightstalls-navigator-fn21"><Link to="/trait/nightstalls_navigator">⮞</Link> Nightstalls Navigator <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-21" id="main-traits_social_diplo-fake-fn-21" data-hash-target to="main-traits_social_diplo-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitnightstallsnavigator-nightstalls-navigator-fn21-benefit">Long exposure to the endless variety of the <Link to="/rule/nightstalls">Nightstalls</Link> grants you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information and on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks to recall information about criminal activities. One of these (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitnoblesavage-noble-savage-fn22" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnoblesavage-noble-savage-fn22"><Link to="/trait/noble_savage">⮞</Link> Noble Savage <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-22" id="main-traits_social_diplo-fake-fn-22" data-hash-target to="main-traits_social_diplo-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Associated with the <Link to="/rule/ulfen_guard">Ulfen Guard</Link></Pair>
<Pair single="flavor" id="traitnoblesavage-noble-savage-fn22-flavor">You hail from the fringes of civilization or the bottommost strata of society, but something in your character makes that seem endearing.</Pair>
<Pair single="benefit" id="traitnoblesavage-noble-savage-fn22-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/perform">Perform</Link> checks when dealing with people of high social standing.</Pair>
</Ability>
<Ability id="traitofficialties-official-ties-fn10-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitofficialties-official-ties-fn10-3"><Link to="/trait/official_ties">⮞</Link> Official Ties <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-10.3" id="main-traits_social_diplo-fake-fn-10.3" data-hash-target to="main-traits_social_diplo-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitofficialties-official-ties-fn10-3-flavor">You maintain a friendship with one or more figures of authority. You have minor sway with one of these figures if your game uses <Link to="/rule/individual_influence">individual influence</Link>.</Pair>
<Pair single="benefit" id="traitofficialties-official-ties-fn10-3-benefit"><p>You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence people in positions of authority aware of your contact and who have an attitude of no worse than indifferent toward the government the contact represents. You also take a -2 penalty on Diplomacy checks to influence criminals and agents of opposing governments, if those characters are aware of your association with authorities.</p>
<p>If you lose your contact, you lose the benefits of this trait for 1 month, after which you can make a new contact.</p>
</Pair>
</Ability>
<Ability id="traitredsilkfrankness-red-silk-frankness-fn21-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitredsilkfrankness-red-silk-frankness-fn21-2"><Link to="/trait/red_silk_frankness">⮞</Link> Red Silk Frankness <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-21.2" id="main-traits_social_diplo-fake-fn-21.2" data-hash-target to="main-traits_social_diplo-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitredsilkfrankness-red-silk-frankness-fn21-2-flavor">You learned from the <Link to="/rule/red_silk_route">Forthright Men</Link>, the Coins' peace-keeping thieves' guild, to use candor to avoid trouble.</Pair>
<Pair single="benefit" id="traitredsilkfrankness-red-silk-frankness-fn21-2-benefit">You gain a +5 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to convince others to overlook offensive or illegal acts. Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traitseafaringreputation-seafaring-reputation-fn23" extraClasses="trait" icon={["village"]}>
<Pair single id="traitseafaringreputation-seafaring-reputation-fn23"><Link to="/trait/seafaring_reputation">⮞</Link> Seafaring Reputation <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-23" id="main-traits_social_diplo-fake-fn-23" data-hash-target to="main-traits_social_diplo-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitseafaringreputation-seafaring-reputation-fn23-flavor">The Wave Riders' fame helps you convince seafarers to cooperate.</Pair>
<Pair single="benefit" id="traitseafaringreputation-seafaring-reputation-fn23-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks against sailors and residents of Absalom.</Pair>
</Ability>
<Ability id="traitstudentofphilosophy-student-of-philosophy-fn18-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitstudentofphilosophy-student-of-philosophy-fn18-4"><Link to="/trait/student_of_philosophy">⮞</Link> Student of Philosophy <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-18.4" id="main-traits_social_diplo-fake-fn-18.4" data-hash-target to="main-traits_social_diplo-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitstudentofphilosophy-student-of-philosophy-fn18-4-flavor">You were trained in a now-defunct philosophical tradition - such as that of the now-destroyed Galtan universities or Lirgeni astrologers - and learned to use logic and reason to persuade others.</Pair>
<Pair single="benefit" id="traitstudentofphilosophy-student-of-philosophy-fn18-4-benefit">You can use your Intelligence modifier in place of your Charisma modifier on <Link to="/skill/diplomacy">Diplomacy</Link> checks to persuade others and on <Link to="/skill/bluff">Bluff</Link> checks to convince others that a lie is true. (This trait does not affect Diplomacy checks to gather information or Bluff checks to feint in combat.) Suggested Characters: Arodenites, Galtans, Sodden Lands natives.</Pair>
</Ability>
<Ability id="traittrustworthy-trustworthy-fn2-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traittrustworthy-trustworthy-fn2-6"><Link to="/trait/trustworthy">⮞</Link> Trustworthy <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2.6" id="main-traits_social_diplo-fake-fn-2.6" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittrustworthy-trustworthy-fn2-6-flavor">People find it easy to put their faith in you.</Pair>
<Pair single="benefit" id="traittrustworthy-trustworthy-fn2-6-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> checks made to fool someone. You also gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and Diplomacy is always a class skill for you.</Pair>
</Ability>
<Ability id="traittruthsagent-truths-agent-fn2-7" extraClasses="trait" icon={["village"]}>
<Pair single id="traittruthsagent-truths-agent-fn2-7"><Link to="/trait/truths_agent">⮞</Link> Truth's Agent <sup><InnerLink showBacklink="backlink-main-traits_social_diplo-fake-fn-2.7" id="main-traits_social_diplo-fake-fn-2.7" data-hash-target to="main-traits_social_diplo-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittruthsagent-truths-agent-fn2-7-flavor">You are skilled at weeding out information.</Pair>
<Pair single="benefit" id="traittruthsagent-truths-agent-fn2-7-benefit">You gain a +1 trait bonus on all <Link to="/skill/diplomacy">Diplomacy</Link> checks made to gather information and all <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_diplo-label">Footnotes</h3><ol>
<li id="main-traits_social_diplo-fake-fn-1-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_diplo-fake-fn-1" data-hash-target to="main-traits_social_diplo-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_diplo-fake-fn-1.2" data-hash-target to="main-traits_social_diplo-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-2-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2" data-hash-target to="main-traits_social_diplo-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2.2" data-hash-target to="main-traits_social_diplo-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2.3" data-hash-target to="main-traits_social_diplo-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2.4" data-hash-target to="main-traits_social_diplo-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2.5" data-hash-target to="main-traits_social_diplo-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2.6" data-hash-target to="main-traits_social_diplo-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_diplo-fake-fn-2.7" data-hash-target to="main-traits_social_diplo-fake-fn-2.7">↩<sup>7</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-3-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_diplo-fake-fn-3" data-hash-target to="main-traits_social_diplo-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-4-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_diplo-fake-fn-4" data-hash-target to="main-traits_social_diplo-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-5-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_diplo-fake-fn-5" data-hash-target to="main-traits_social_diplo-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-6-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_diplo-fake-fn-6" data-hash-target to="main-traits_social_diplo-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_diplo-fake-fn-6.2" data-hash-target to="main-traits_social_diplo-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-7-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_diplo-fake-fn-7" data-hash-target to="main-traits_social_diplo-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-8-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_diplo-fake-fn-8" data-hash-target to="main-traits_social_diplo-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-9-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_diplo-fake-fn-9" data-hash-target to="main-traits_social_diplo-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-10-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_diplo-fake-fn-10" data-hash-target to="main-traits_social_diplo-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_diplo-fake-fn-10.2" data-hash-target to="main-traits_social_diplo-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_diplo-fake-fn-10.3" data-hash-target to="main-traits_social_diplo-fake-fn-10.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-11-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_diplo-fake-fn-11" data-hash-target to="main-traits_social_diplo-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-12-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_diplo-fake-fn-12" data-hash-target to="main-traits_social_diplo-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_diplo-fake-fn-12.2" data-hash-target to="main-traits_social_diplo-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_diplo-fake-fn-12.3" data-hash-target to="main-traits_social_diplo-fake-fn-12.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_diplo-fake-fn-12.4" data-hash-target to="main-traits_social_diplo-fake-fn-12.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-13-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_diplo-fake-fn-13" data-hash-target to="main-traits_social_diplo-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-14-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_diplo-fake-fn-14" data-hash-target to="main-traits_social_diplo-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-15-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_social_diplo-fake-fn-15" data-hash-target to="main-traits_social_diplo-fake-fn-15">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-16-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_diplo-fake-fn-16" data-hash-target to="main-traits_social_diplo-fake-fn-16">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-17-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 23 <InnerLink aria-label="Back to reference 17" id="backlink-main-traits_social_diplo-fake-fn-17" data-hash-target to="main-traits_social_diplo-fake-fn-17">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-18-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_diplo-fake-fn-18" data-hash-target to="main-traits_social_diplo-fake-fn-18">↩</InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_diplo-fake-fn-18.2" data-hash-target to="main-traits_social_diplo-fake-fn-18.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_diplo-fake-fn-18.3" data-hash-target to="main-traits_social_diplo-fake-fn-18.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-main-traits_social_diplo-fake-fn-18.4" data-hash-target to="main-traits_social_diplo-fake-fn-18.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-19-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 19" id="backlink-main-traits_social_diplo-fake-fn-19" data-hash-target to="main-traits_social_diplo-fake-fn-19">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-20-target"><p><Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link> <InnerLink aria-label="Back to reference 20" id="backlink-main-traits_social_diplo-fake-fn-20" data-hash-target to="main-traits_social_diplo-fake-fn-20">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-21-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_social_diplo-fake-fn-21" data-hash-target to="main-traits_social_diplo-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-main-traits_social_diplo-fake-fn-21.2" data-hash-target to="main-traits_social_diplo-fake-fn-21.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-22-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 22" id="backlink-main-traits_social_diplo-fake-fn-22" data-hash-target to="main-traits_social_diplo-fake-fn-22">↩</InnerLink></p></li>
<li id="main-traits_social_diplo-fake-fn-23-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 23" id="backlink-main-traits_social_diplo-fake-fn-23" data-hash-target to="main-traits_social_diplo-fake-fn-23">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_intm = {title: "Intimidate Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitbruisingintellect-bruising-intellect-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbruisingintellect-bruising-intellect-fn1"><Link to="/trait/bruising_intellect">⮞</Link> Bruising Intellect <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-1" id="main-traits_social_intm-fake-fn-1" data-hash-target to="main-traits_social_intm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbruisingintellect-bruising-intellect-fn1-flavor">Your sharp intellect and rapier-like wit bruise egos.</Pair>
<Pair single="benefit" id="traitbruisingintellect-bruising-intellect-fn1-benefit"><Link to="/skill/intimidate">Intimidate</Link> is always a class skill for you, and you may use your Intelligence modifier when making Intimidate checks instead of your Charisma modifier.</Pair>
</Ability>
<Ability id="traitbully-bully-fn1-2-fn2-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbully-bully-fn1-2-fn2-fn3"><Link to="/trait/bully">⮞</Link> Bully <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-1.2" id="main-traits_social_intm-fake-fn-1.2" data-hash-target to="main-traits_social_intm-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-2" id="main-traits_social_intm-fake-fn-2" data-hash-target to="main-traits_social_intm-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-3" id="main-traits_social_intm-fake-fn-3" data-hash-target to="main-traits_social_intm-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitbully-bully-fn1-2-fn2-fn3-flavor">You grew up in an environment where the meek were ignored and you often had to resort to threats or violence to be heard.</Pair>
<Pair single="benefit" id="traitbully-bully-fn1-2-fn2-fn3-benefit">You gain a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, and Intimidate is always a class skill for you.</Pair>
</Ability>
<Ability id="traitbureaucratsfavored-bureaucrats-favored-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitbureaucratsfavored-bureaucrats-favored-fn4"><Link to="/trait/bureaucrats_favored">⮞</Link> Bureaucrat's Favored <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-4" id="main-traits_social_intm-fake-fn-4" data-hash-target to="main-traits_social_intm-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Osirion</Pair>
<Pair title="Requirements" hl>Associated with the court of the Black Dome</Pair>
<Pair single="flavor" id="traitbureaucratsfavored-bureaucrats-favored-fn4-flavor">You have gained favor with the government of Sothis.</Pair>
<Pair single="benefit" id="traitbureaucratsfavored-bureaucrats-favored-fn4-benefit">Once per week, you can attempt a DC 20 <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> check to gain access to an exclusive site or event, such as a government building or an aristocrat's ball.</Pair>
</Ability>
<Ability id="traitchelishsympathizer-chelish-sympathizer-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchelishsympathizer-chelish-sympathizer-fn5"><Link to="/trait/chelish_sympathizer">⮞</Link> Chelish Sympathizer <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-5" id="main-traits_social_intm-fake-fn-5" data-hash-target to="main-traits_social_intm-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchelishsympathizer-chelish-sympathizer-fn5-flavor">You feed intelligence to the Thrice-Damned House of Thrune for your own gain or ideological reasons and are given valuable clues gathered by other Chelish spies in exchange.</Pair>
<Pair single="benefit" id="traitchelishsympathizer-chelish-sympathizer-fn5-benefit">Once per month while in an Inner Sea region settlement of at least 2,000 people, you can call upon your connections to gain an edge in a <Link to="/rule/verbal_duels">verbal duel</Link> or gain a +2 bonus on one <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check.</Pair>
</Ability>
<Ability id="traitchipontheshoulder-chip-on-the-shoulder-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitchipontheshoulder-chip-on-the-shoulder-fn6"><Link to="/trait/chip_on_the_shoulder">⮞</Link> Chip on the Shoulder <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-6" id="main-traits_social_intm-fake-fn-6" data-hash-target to="main-traits_social_intm-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitchipontheshoulder-chip-on-the-shoulder-fn6-flavor">When someone pushes you, you push back.</Pair>
<Pair single="benefit" id="traitchipontheshoulder-chip-on-the-shoulder-fn6-benefit">Whenever a creature fails an <Link to="/skill/intimidate">Intimidate</Link> check against you, you gain a +2 trait bonus on your next Intimidate check against that creature. Intimidate becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitconvincingliar-convincing-liar-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitconvincingliar-convincing-liar-fn7"><Link to="/trait/convincing_liar">⮞</Link> Convincing Liar <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-7" id="main-traits_social_intm-fake-fn-7" data-hash-target to="main-traits_social_intm-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl>Member of The <Link to="/rule/bellflower_network">Bellflower Network</Link></Pair>
<Pair single="flavor" id="traitconvincingliar-convincing-liar-fn7-flavor">You've spent your life perfecting the art of half-truths in order to accomplish what you need to.</Pair>
<Pair single="benefit" id="traitconvincingliar-convincing-liar-fn7-benefit">You gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/intimidate">Intimidate</Link> checks and one of these skills (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminal-criminal-fn1-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminal-criminal-fn1-3"><Link to="/trait/criminal">⮞</Link> Criminal <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-1.3" id="main-traits_social_intm-fake-fn-1.3" data-hash-target to="main-traits_social_intm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminal-criminal-fn1-3-flavor">You spent your early life robbing and stealing to get by.</Pair>
<Pair single="benefit" id="traitcriminal-criminal-fn1-3-benefit">Select one of the following skills: <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminalroots-criminal-roots-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminalroots-criminal-roots-fn5-2"><Link to="/trait/criminal_roots">⮞</Link> Criminal Roots <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-5.2" id="main-traits_social_intm-fake-fn-5.2" data-hash-target to="main-traits_social_intm-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminalroots-criminal-roots-fn5-2-flavor">Your family has long operated outside the law.</Pair>
<Pair single="benefit" id="traitcriminalroots-criminal-roots-fn5-2-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence criminals and on <Link to="/skill/intimidate">Intimidate</Link> checks to influence law-abiding citizens, but take a -2 penalty on Diplomacy checks to influence law-abiding citizens. Diplomacy or Intimidate (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitcuttingcondescension-cutting-condescension-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcuttingcondescension-cutting-condescension-fn8"><Link to="/trait/cutting_condescension">⮞</Link> Cutting Condescension <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-8" id="main-traits_social_intm-fake-fn-8" data-hash-target to="main-traits_social_intm-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcuttingcondescension-cutting-condescension-fn8-flavor">The Sable Company has taught you to quickly get compliance from those in your way.</Pair>
<Pair single="benefit" id="traitcuttingcondescension-cutting-condescension-fn8-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks to force a creature to act friendly towards you, and can attempt such checks in half the normal time.</Pair>
</Ability>
<Ability id="traitcynicalear-cynical-ear-fn6-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcynicalear-cynical-ear-fn6-2"><Link to="/trait/cynical_ear">⮞</Link> Cynical Ear <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-6.2" id="main-traits_social_intm-fake-fn-6.2" data-hash-target to="main-traits_social_intm-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcynicalear-cynical-ear-fn6-2-flavor">Neither honeyed tongues or righteous wrath move you much.</Pair>
<Pair single="benefit" id="traitcynicalear-cynical-ear-fn6-2-benefit">Add 2 when determining your Hit Dice for <Link to="/skill/intimidate">Intimidate</Link> checks, and increase the DC or all <Link to="/skill/diplomacy">Diplomacy</Link> checks against you by 2.</Pair>
</Ability>
<Ability id="traitdragonpact-dragon-pact-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdragonpact-dragon-pact-fn9"><Link to="/trait/dragon_pact">⮞</Link> Dragon Pact <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-9" id="main-traits_social_intm-fake-fn-9" data-hash-target to="main-traits_social_intm-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdragonpact-dragon-pact-fn9-flavor">At some point your family served a dragon, and acted as its emissary to others. Some members of your family have benefited from this arrangement, gaining some small fraction of that dragon's noble bearing.</Pair>
<Pair single="benefit" id="traitdragonpact-dragon-pact-fn9-benefit">Choose one category of <Link to="/family/true_dragon">true dragon</Link> (chromatic, metallic, primal, etc.). You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks against that category of dragon and a +1 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against all creatures of the dragon type that are not of the same category of true dragon.</Pair>
</Ability>
<Ability id="traitenemyofslavers-enemy-of-slavers-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitenemyofslavers-enemy-of-slavers-fn10"><Link to="/trait/enemy_of_slavers">⮞</Link> Enemy of Slavers <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-10" id="main-traits_social_intm-fake-fn-10" data-hash-target to="main-traits_social_intm-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Code of Freedom" hl><p>Knights who follow the code of freedom believe that no man, woman, or child should be owned by another individual. They believe that all of the humanoid races, even those of monstrous descent, deserve to be given a chance to make their own decisions in life. Their vows are as follows.</p>
<ul>
<li>I will not tolerate slavery in any form. If I witness one individual being sold to another, I will intervene with words or actions as necessary.</li>
<li>If I encounter any escaped slaves, I will make it my duty to take them under my care until they find a safe home.</li>
<li>I shall not willingly deal with any who support or benefit from slavery.</li>
<li>I keep no slaves. Those who wait upon me do so of their own volition or because they are in my employ and are treated with the utmost respect.</li>
<li>When visiting others who keep servants, I will treat them honorably. I shall inquire as to their happiness and treatment. Those who are treated as no more than slaves will gain my strength to support them.</li>
<li>Shackles and bonds are forbidden unless used on an individual convicted of a crime. Placing another person in chains is akin to being a slaver.</li>
</ul>
</Pair>
<Pair single="benefit" id="traitenemyofslavers-enemy-of-slavers-fn10-benefit"><p>If you follow this code, you are known to be single-minded with regard to slavery, and this fervent belief is easily perceived by others. Those who deal in flesh have a greater desire to appease you before matters escalate to confrontation, knowing that your wrath will be unwavering and swift.
You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks made to sway the minds of slavers and anyone who otherwise keeps innocent people against their will.</p>
</Pair>
<Pair title="Penance" hl>Knights who violate any of this code's tenets must perform penance by placing themselves in servitude to the individual who was wronged. If the exact individual cannot be found, a person of equivalent social class is sufficient. The length of servitude is dependent on the severity of the transgression. Minor transgressions require a day. If an entire family was enslaved as a result of the knight's actions (or inaction), up to a month of servitude might be required.</Pair>
</Ability>
<Ability id="traitexcellentpenmanship-excellent-penmanship-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexcellentpenmanship-excellent-penmanship-fn11"><Link to="/trait/excellent_penmanship">⮞</Link> Excellent Penmanship <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-11" id="main-traits_social_intm-fake-fn-11" data-hash-target to="main-traits_social_intm-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitexcellentpenmanship-excellent-penmanship-fn11-flavor">You are a master of calligraphy, an art once highly valued in Lung Wa and still held in high esteem in Lingshen.</Pair>
<Pair single="benefit" id="traitexcellentpenmanship-excellent-penmanship-fn11-benefit">The DC to detect forgeries you create increases by 2. If you attempt to persuade someone via a written message, you gain a +2 bonus on any <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/intimidate">Intimidate</Link> check attempted for that communication. <Link to="/skill/linguistics">Linguistics</Link> is always a class skill for you.</Pair>
</Ability>
<Ability id="traitfriendsinhighplaces-friends-in-high-places-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendsinhighplaces-friends-in-high-places-fn12"><Link to="/trait/friends_in_high_places">⮞</Link> Friends in High Places <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-12" id="main-traits_social_intm-fake-fn-12" data-hash-target to="main-traits_social_intm-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendsinhighplaces-friends-in-high-places-fn12-flavor">You have often seen lawbreakers go free when they demonstrate they have friends in high places, and so you put special effort into befriending powerful people yourself.</Pair>
<Pair single="benefit" id="traitfriendsinhighplaces-friends-in-high-places-fn12-benefit"><p>Whenever you are in an area in which you have used the <Link to="/skill/diplomacy">Diplomacy</Link> skill to gather information, you gain a +1 trait bonus on Diplomacy and <Link to="/skill/intimidate">Intimidate</Link> checks. This bonus increases to +2 when dealing with government officials.</p>
<p><strong>Suggested Characters:</strong> Absalom natives, <Link to="/rule/aspis_consortium">Aspis Consortium</Link> agents, Taldans.</p>
</Pair>
</Ability>
<Ability id="traithellknightancestry-hellknight-ancestry-fn13" extraClasses="trait" icon={["village"]}>
<Pair single id="traithellknightancestry-hellknight-ancestry-fn13"><Link to="/trait/hellknight_ancestry">⮞</Link> Hellknight Ancestry <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-13" id="main-traits_social_intm-fake-fn-13" data-hash-target to="main-traits_social_intm-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traithellknightancestry-hellknight-ancestry-fn13-flavor">At least one of your parents was a <Link to="/rule/hellknights">Hellknight</Link>, and you see the orders as the embodiment of civic virtue.</Pair>
<Pair single="benefit" id="traithellknightancestry-hellknight-ancestry-fn13-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence Hellknights and a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks to influence enemies of the Hellknights.</Pair>
</Ability>
<Ability id="traitinexorableauthority-inexorable-authority-fn14" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinexorableauthority-inexorable-authority-fn14"><Link to="/trait/inexorable_authority">⮞</Link> Inexorable Authority <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-14" id="main-traits_social_intm-fake-fn-14" data-hash-target to="main-traits_social_intm-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitinexorableauthority-inexorable-authority-fn14-flavor">When you speak with the full weight of law, your conviction lends you a terrible presence.</Pair>
<Pair single="benefit" id="traitinexorableauthority-inexorable-authority-fn14-benefit">You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks when enforcing or pronouncing a lawful judgment that you're legitimately deputed to enforce or pronounce.</Pair>
</Ability>
<Ability id="traitinfluence-influence-fn1-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitinfluence-influence-fn1-4"><Link to="/trait/influence">⮞</Link> Influence <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-1.4" id="main-traits_social_intm-fake-fn-1.4" data-hash-target to="main-traits_social_intm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitinfluence-influence-fn1-4-flavor">Your position in society grants you special insight into others, and special consideration or outright awe from others.</Pair>
<Pair single="benefit" id="traitinfluence-influence-fn1-4-benefit">Choose one of the following skills: <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, or <Link to="/skill/sense_motive">Sense Motive</Link>. You gain a +1 trait bonus on that skill, and it is always a class skill for you.</Pair>
</Ability>
<Ability id="traitkeleshiteprincess-keleshite-princess-fn15" extraClasses="trait" icon={["village"]}>
<Pair single id="traitkeleshiteprincess-keleshite-princess-fn15"><Link to="/trait/keleshite_princess">⮞</Link> Keleshite Princess <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-15" id="main-traits_social_intm-fake-fn-15" data-hash-target to="main-traits_social_intm-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Region" hl>Qadira</Pair>
<Pair title="Requirements" hl>Keleshite; female</Pair>
<Pair single="flavor" id="traitkeleshiteprincess-keleshite-princess-fn15-flavor">You have been raised to expect obedience from those around you, regardless of their station, and are not shy about demanding what you want.</Pair>
<Pair single="benefit" id="traitkeleshiteprincess-keleshite-princess-fn15-benefit">You gain a +1 trait bonus to <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks, and one of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitmemorable-memorable-fn12-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmemorable-memorable-fn12-2"><Link to="/trait/memorable">⮞</Link> Memorable <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-12.2" id="main-traits_social_intm-fake-fn-12.2" data-hash-target to="main-traits_social_intm-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmemorable-memorable-fn12-2-flavor">Growing up amid a large number of children, you learned quickly how to get others' attention and keep it.</Pair>
<Pair single="benefit" id="traitmemorable-memorable-fn12-2-benefit"><p>When you modify a character's attitude with the <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> skill, the attitude change lasts 1-1/2 times longer than it otherwise would. Whenever you create a fear or mind-affecting effect that imposes a penalty or bonus with a duration of at least 2 rounds, it lasts 1 additional round after it would normally end. For example, if you demoralize a foe with an Intimidate check and beat the DC by 5, the victim is <Link to="/misc/shaken">shaken</Link> for 3 rounds instead of the usual 2 rounds.</p>
<p><strong>Suggested Characters:</strong> Free Captains, gnomes, Keleshites.</p>
</Pair>
</Ability>
<Ability id="traitmercenary-mercenary-fn1-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmercenary-mercenary-fn1-5"><Link to="/trait/mercenary">⮞</Link> Mercenary <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-1.5" id="main-traits_social_intm-fake-fn-1.5" data-hash-target to="main-traits_social_intm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmercenary-mercenary-fn1-5-flavor">For everything there is a price, and you are a negotiator at heart.</Pair>
<Pair single="benefit" id="traitmercenary-mercenary-fn1-5-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks made while negotiating payment for a quest or a service that you provide.</Pair>
</Ability>
<Ability id="traitseafaringreputation-seafaring-reputation-fn8-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitseafaringreputation-seafaring-reputation-fn8-2"><Link to="/trait/seafaring_reputation">⮞</Link> Seafaring Reputation <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-8.2" id="main-traits_social_intm-fake-fn-8.2" data-hash-target to="main-traits_social_intm-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitseafaringreputation-seafaring-reputation-fn8-2-flavor">The Wave Riders' fame helps you convince seafarers to cooperate.</Pair>
<Pair single="benefit" id="traitseafaringreputation-seafaring-reputation-fn8-2-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks against sailors and residents of Absalom.</Pair>
</Ability>
<Ability id="traitsignaturemoves-signature-moves-fn6-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsignaturemoves-signature-moves-fn6-3"><Link to="/trait/signature_moves">⮞</Link> Signature Moves <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-6.3" id="main-traits_social_intm-fake-fn-6.3" data-hash-target to="main-traits_social_intm-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsignaturemoves-signature-moves-fn6-3-flavor">You're known for some unique item that has become your trademark.</Pair>
<Pair single="benefit" id="traitsignaturemoves-signature-moves-fn6-3-benefit">Your starting equipment includes a single masterwork item worth less than 900 gp, and you gain a +1 trait bonus on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks while wielding this item in one or both hands.</Pair>
</Ability>
<Ability id="traitunnaturalrevenge-unnatural-revenge-fn1-6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitunnaturalrevenge-unnatural-revenge-fn1-6"><Link to="/trait/unnatural_revenge">⮞</Link> Unnatural Revenge <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-1.6" id="main-traits_social_intm-fake-fn-1.6" data-hash-target to="main-traits_social_intm-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitunnaturalrevenge-unnatural-revenge-fn1-6-benefit">You gain a +2 trait bonus on all <Link to="/skill/intimidate">Intimidate</Link> checks against creatures of the animal, fey, or plant type, and Intimidate is always a class skill for you.</Pair>
</Ability>
<Ability id="traitvengefulsocial-vengeful-social-fn16" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvengefulsocial-vengeful-social-fn16"><Link to="/trait/vengeful_social">⮞</Link> Vengeful (Social) <sup><InnerLink showBacklink="backlink-main-traits_social_intm-fake-fn-16" id="main-traits_social_intm-fake-fn-16" data-hash-target to="main-traits_social_intm-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvengefulsocial-vengeful-social-fn16-flavor">You were brutally betrayed, and you have dedicated yourself to pursuing revenge.</Pair>
<Pair single="benefit" id="traitvengefulsocial-vengeful-social-fn16-benefit">Choose a humanoid subtype that is not your own from the following list: dwarf, elf, gnome, halfling, or human. You gain a +2 trait bonus on <Link to="/skill/intimidate">Intimidate</Link> checks against creatures with that subtype.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_intm-label">Footnotes</h3><ol>
<li id="main-traits_social_intm-fake-fn-1-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_intm-fake-fn-1" data-hash-target to="main-traits_social_intm-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_intm-fake-fn-1.2" data-hash-target to="main-traits_social_intm-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_intm-fake-fn-1.3" data-hash-target to="main-traits_social_intm-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_intm-fake-fn-1.4" data-hash-target to="main-traits_social_intm-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_intm-fake-fn-1.5" data-hash-target to="main-traits_social_intm-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_intm-fake-fn-1.6" data-hash-target to="main-traits_social_intm-fake-fn-1.6">↩<sup>6</sup></InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-2-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_intm-fake-fn-2" data-hash-target to="main-traits_social_intm-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-3-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_intm-fake-fn-3" data-hash-target to="main-traits_social_intm-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-4-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_intm-fake-fn-4" data-hash-target to="main-traits_social_intm-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-5-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_intm-fake-fn-5" data-hash-target to="main-traits_social_intm-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_intm-fake-fn-5.2" data-hash-target to="main-traits_social_intm-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-6-target"><p><Link to="/source/bastards_of_golarion">Bastards of Golarion</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_intm-fake-fn-6" data-hash-target to="main-traits_social_intm-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_intm-fake-fn-6.2" data-hash-target to="main-traits_social_intm-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_intm-fake-fn-6.3" data-hash-target to="main-traits_social_intm-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-7-target"><p><Link to="/source/faction_guide">Faction Guide</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_intm-fake-fn-7" data-hash-target to="main-traits_social_intm-fake-fn-7">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-8-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_intm-fake-fn-8" data-hash-target to="main-traits_social_intm-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_intm-fake-fn-8.2" data-hash-target to="main-traits_social_intm-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-9-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_intm-fake-fn-9" data-hash-target to="main-traits_social_intm-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-10-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_intm-fake-fn-10" data-hash-target to="main-traits_social_intm-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-11-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 23 <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_intm-fake-fn-11" data-hash-target to="main-traits_social_intm-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-12-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_intm-fake-fn-12" data-hash-target to="main-traits_social_intm-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_intm-fake-fn-12.2" data-hash-target to="main-traits_social_intm-fake-fn-12.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-13-target"><p><Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_intm-fake-fn-13" data-hash-target to="main-traits_social_intm-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-14-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_intm-fake-fn-14" data-hash-target to="main-traits_social_intm-fake-fn-14">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-15-target"><p><Link to="/source/qadira_gateway_to_the_east">Qadira, Gateway to the East</Link> <InnerLink aria-label="Back to reference 15" id="backlink-main-traits_social_intm-fake-fn-15" data-hash-target to="main-traits_social_intm-fake-fn-15">↩</InnerLink></p></li>
<li id="main-traits_social_intm-fake-fn-16-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 16" id="backlink-main-traits_social_intm-fake-fn-16" data-hash-target to="main-traits_social_intm-fake-fn-16">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_k = {title: "Knowledge Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitaffable-affable-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitaffable-affable-fn1"><Link to="/trait/affable">⮞</Link> Affable <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-1" id="main-traits_social_k-fake-fn-1" data-hash-target to="main-traits_social_k-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitaffable-affable-fn1-flavor">You have a genial personality and make it a point to befriend and help people wherever you go. In your travels, you stop to aid others, tell interesting stories, and often buy rounds of drinks for patrons at the local taverns. You bring good cheer to those you encounter, and for this reason, you often find yourself attending important events or fruitful gatherings, and have even become an honorary member of many families. People find you trustworthy, and they are willing to share information with you.</Pair>
<Pair single="benefit" id="traitaffable-affable-fn1-benefit">You gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information, and can do so in half the normal time. In addition, Diplomacy and <Link to="/skill/knowledge_local">Knowledge (local)</Link> are always class skills for you.</Pair>
</Ability>
<Ability id="traitarodenitehistorian-arodenite-historian-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitarodenitehistorian-arodenite-historian-fn2"><Link to="/trait/arodenite_historian">⮞</Link> Arodenite Historian <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-2" id="main-traits_social_k-fake-fn-2" data-hash-target to="main-traits_social_k-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitarodenitehistorian-arodenite-historian-fn2-flavor">You believe there is much useful information to glean from the mark Aroden left on history, and learn all you can about his exploits and teachings. This has given you significant insights on how different kinds of information are interconnected.</Pair>
<Pair single="benefit" id="traitarodenitehistorian-arodenite-historian-fn2-benefit">If you fail a <Link to="/skill/knowledge">Knowledge</Link> (arcana, history, or religion) check, you can reroll the check 1 round later using your bonus for one of the other two skills.</Pair>
</Ability>
<Ability id="traitavidreader-avid-reader-fn3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitavidreader-avid-reader-fn3"><Link to="/trait/avid_reader">⮞</Link> Avid Reader <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-3" id="main-traits_social_k-fake-fn-3" data-hash-target to="main-traits_social_k-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitavidreader-avid-reader-fn3-flavor">As a youth, you voraciously consumed books and scrolls provided by a member of an adventurer's guild or a learned organization like the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, and you have internalized these stories of bold adventurers.</Pair>
<Pair single="benefit" id="traitavidreader-avid-reader-fn3-benefit"><p>Choose one <Link to="/skill/knowledge">Knowledge</Link> skill. You can always choose to take 10 on checks with the chosen Knowledge skill, even when distracted or threatened.</p>
<p><strong>Suggested Characters:</strong> Osirians, Pathfinders, Taldans.</p>
</Pair>
</Ability>
<Ability id="traitcarnalattraction-carnal-attraction-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcarnalattraction-carnal-attraction-fn4"><Link to="/trait/carnal_attraction">⮞</Link> Carnal Attraction <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-4" id="main-traits_social_k-fake-fn-4" data-hash-target to="main-traits_social_k-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitcarnalattraction-carnal-attraction-fn4-benefit">You know how to ask the wrong questions the right way, granting you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> (gather information) and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks regarding whichever vice fascinates you: drugs, forbidden lore, gambling, illegal fighting, or a similar debauchery or indecency.</Pair>
</Ability>
<Ability id="traitcivilized-civilized-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcivilized-civilized-fn5"><Link to="/trait/civilized">⮞</Link> Civilized <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-5" id="main-traits_social_k-fake-fn-5" data-hash-target to="main-traits_social_k-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcivilized-civilized-fn5-flavor">You are well versed in the local laws, customs, and politics.</Pair>
<Pair single="benefit" id="traitcivilized-civilized-fn5-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks and <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitcontemptuous-contemptuous-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcontemptuous-contemptuous-fn6"><Link to="/trait/contemptuous">⮞</Link> Contemptuous <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-6" id="main-traits_social_k-fake-fn-6" data-hash-target to="main-traits_social_k-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcontemptuous-contemptuous-fn6-flavor">Whether you are a commoner who has come to despise the haughty upper crust or a holier-than-thou noble who can't stand being around the unwashed masses, your contempt drives you to study carefully, making sure you always have the upper hand in social exchanges with them.</Pair>
<Pair single="benefit" id="traitcontemptuous-contemptuous-fn6-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> checks, and one of these skills becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitcriminallyconnected-criminally-connected-fn6-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitcriminallyconnected-criminally-connected-fn6-2"><Link to="/trait/criminally_connected">⮞</Link> Criminally Connected <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-6.2" id="main-traits_social_k-fake-fn-6.2" data-hash-target to="main-traits_social_k-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitcriminallyconnected-criminally-connected-fn6-2-flavor">You have spent a lot of time dealing with the criminal underworld - so much that it might be hard for observers to see you as distinct from it. However, this familiarity gives you a leg up on heroes who refuse to muddy their reputation.</Pair>
<Pair single="benefit" id="traitcriminallyconnected-criminally-connected-fn6-2-benefit">While in settlements, you gain a +1 trait bonus on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information.</Pair>
</Ability>
<Ability id="traitdarklandsscholar-darklands-scholar-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdarklandsscholar-darklands-scholar-fn7"><Link to="/trait/darklands_scholar">⮞</Link> Darklands Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-7" id="main-traits_social_k-fake-fn-7" data-hash-target to="main-traits_social_k-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdarklandsscholar-darklands-scholar-fn7-flavor">Unsatisfied with mere stories, you have spent years researching journals and firsthand accounts of those who explored the Darklands before you.</Pair>
<Pair single="benefit" id="traitdarklandsscholar-darklands-scholar-fn7-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge">Knowledge</Link> checks to identify the weaknesses of Darklands creatures.</Pair>
</Ability>
<Ability id="traitdarklandstrader-darklands-trader-fn7-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdarklandstrader-darklands-trader-fn7-2"><Link to="/trait/darklands_trader">⮞</Link> Darklands Trader <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-7.2" id="main-traits_social_k-fake-fn-7.2" data-hash-target to="main-traits_social_k-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitdarklandstrader-darklands-trader-fn7-2-flavor">You're familiar with Nar-Voth's trade routes and negotiation involving the denizens of the Darklands.</Pair>
<Pair single="benefit" id="traitdarklandstrader-darklands-trader-fn7-2-benefit">You gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks relating to subterranean trade and on <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> checks relating to subterranean creatures. Select one of these skills to be a class skill for you.</Pair>
</Ability>
<Ability id="traitdrakeanatomist-drake-anatomist-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitdrakeanatomist-drake-anatomist-fn8"><Link to="/trait/drake_anatomist">⮞</Link> Drake Anatomist <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-8" id="main-traits_social_k-fake-fn-8" data-hash-target to="main-traits_social_k-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitdrakeanatomist-drake-anatomist-fn8-benefit">You gain a +1 trait bonus on damage rolls against creatures with the dragon creature type, and a +2 trait bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks to identify dragons and their special powers and vulnerabilities.</Pair>
</Ability>
<Ability id="traitecumenical-ecumenical-fn9" extraClasses="trait" icon={["village"]}>
<Pair single id="traitecumenical-ecumenical-fn9"><Link to="/trait/ecumenical">⮞</Link> Ecumenical <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-9" id="main-traits_social_k-fake-fn-9" data-hash-target to="main-traits_social_k-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitecumenical-ecumenical-fn9-flavor">Your childhood in Magnimar (or in a similar cosmopolitan city) taught you to recognize signs of worship of demigods such as empyreal lords.</Pair>
<Pair single="benefit" id="traitecumenical-ecumenical-fn9-benefit">You gain a +2 trait bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> checks involving entities other than the most influential gods. You also gain a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence worshipers of such entities.</Pair>
</Ability>
<Ability id="traitfriendineverytown-friend-in-every-town-fn5-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitfriendineverytown-friend-in-every-town-fn5-2"><Link to="/trait/friend_in_every_town">⮞</Link> Friend in Every Town <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-5.2" id="main-traits_social_k-fake-fn-5.2" data-hash-target to="main-traits_social_k-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitfriendineverytown-friend-in-every-town-fn5-2-flavor">You have no problem making friends and learning information from them wherever you go.</Pair>
<Pair single="benefit" id="traitfriendineverytown-friend-in-every-town-fn5-2-benefit">You gain a +1 trait bonus on all <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks and <Link to="/skill/diplomacy">Diplomacy</Link> checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitjistkanscholar-jistkan-scholar-fn10" extraClasses="trait" icon={["village"]}>
<Pair single id="traitjistkanscholar-jistkan-scholar-fn10"><Link to="/trait/jistkan_scholar">⮞</Link> Jistkan Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-10" id="main-traits_social_k-fake-fn-10" data-hash-target to="main-traits_social_k-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitjistkanscholar-jistkan-scholar-fn10-flavor">You have specialized in studying Jistkan history and culture.</Pair>
<Pair single="benefit" id="traitjistkanscholar-jistkan-scholar-fn10-benefit">You gain Jistka as a bonus language and a +1 trait bonus on all <Link to="/skill/knowledge">Knowledge</Link> checks related to the Jistka Imperium.</Pair>
</Ability>
<Ability id="traitmonsterscholar-monster-scholar-fn11" extraClasses="trait" icon={["village"]}>
<Pair single id="traitmonsterscholar-monster-scholar-fn11"><Link to="/trait/monster_scholar">⮞</Link> Monster Scholar <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-11" id="main-traits_social_k-fake-fn-11" data-hash-target to="main-traits_social_k-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitmonsterscholar-monster-scholar-fn11-flavor">Your study of monsters keeps you well informed.</Pair>
<Pair single="benefit" id="traitmonsterscholar-monster-scholar-fn11-benefit">Choose either <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, or <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>. Whenever you succeed at a Knowledge check to identify a creature and its special powers - or vulnerabilities - with the chosen skill, you gain one additional piece of useful information (as if your skill check result had been 5 higher).</Pair>
</Ability>
<Ability id="traitnightstallsnavigator-nightstalls-navigator-fn12" extraClasses="trait" icon={["village"]}>
<Pair single id="traitnightstallsnavigator-nightstalls-navigator-fn12"><Link to="/trait/nightstalls_navigator">⮞</Link> Nightstalls Navigator <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-12" id="main-traits_social_k-fake-fn-12" data-hash-target to="main-traits_social_k-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitnightstallsnavigator-nightstalls-navigator-fn12-benefit">Long exposure to the endless variety of the <Link to="/rule/nightstalls">Nightstalls</Link> grants you a +2 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information and on <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks to recall information about criminal activities. One of these (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpracticeddisruptor-practiced-disruptor-fn13" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpracticeddisruptor-practiced-disruptor-fn13"><Link to="/trait/practiced_disruptor">⮞</Link> Practiced Disruptor <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-13" id="main-traits_social_k-fake-fn-13" data-hash-target to="main-traits_social_k-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpracticeddisruptor-practiced-disruptor-fn13-flavor">You are experienced at facing off against spellcasters.</Pair>
<Pair single="benefit" id="traitpracticeddisruptor-practiced-disruptor-fn13-benefit">You can attempt <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> checks untrained; if you have ranks in that skill, you instead gain a +1 trait bonus on those checks. The concentration DC to <Link to="/rule/cast_defensively">cast a spell defensively</Link> in your threatened area increases by 1.</Pair>
</Ability>
<Ability id="traitquestinghellknight-questing-hellknight-fn14" extraClasses="trait" icon={["village"]}>
<Pair single id="traitquestinghellknight-questing-hellknight-fn14"><Link to="/trait/questing_hellknight">⮞</Link> Questing Hellknight <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-14" id="main-traits_social_k-fake-fn-14" data-hash-target to="main-traits_social_k-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitquestinghellknight-questing-hellknight-fn14-flavor">You are a quick study when it comes to local laws.</Pair>
<Pair single="benefit" id="traitquestinghellknight-questing-hellknight-fn14-benefit">Once per day, you can attempt a <Link to="/skill/knowledge_local">Knowledge (local)</Link> check untrained to recall information about local laws, rulers, and popular locations. Additionally, you gain a +1 trait bonus on Knowledge (local) checks, and Knowledge (local) is a class skill for you.</Pair>
</Ability>
<Ability id="traitsavage-savage-fn5-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsavage-savage-fn5-3"><Link to="/trait/savage">⮞</Link> Savage <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-5.3" id="main-traits_social_k-fake-fn-5.3" data-hash-target to="main-traits_social_k-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsavage-savage-fn5-3-flavor">You were born and raised in untamed lands far from civilization. You learned to survive in the elements among brutal humanoids and beasts.</Pair>
<Pair single="benefit" id="traitsavage-savage-fn5-3-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks and a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks to get along in the wild. Knowledge (nature) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitstylesage-style-sage-fn5-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitstylesage-style-sage-fn5-4"><Link to="/trait/style_sage">⮞</Link> Style Sage <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-5.4" id="main-traits_social_k-fake-fn-5.4" data-hash-target to="main-traits_social_k-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitstylesage-style-sage-fn5-4-flavor">You have a passion for history and news concerning monastic disciplines.</Pair>
<Pair single="benefit" id="traitstylesage-style-sage-fn5-4-benefit"><p>You gain a +1 trait bonus on checks with your choice of either <Link to="/skill/knowledge_local">Knowledge (local)</Link> or <Link to="/skill/knowledge_history">Knowledge (history)</Link>, and the one you choose is always a class skill for you.</p>
<p>In addition, you gain a +1 trait bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks made to gather information about any person with levels in monk.</p>
</Pair>
</Ability>
<Ability id="traittruthsagent-truths-agent-fn5-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traittruthsagent-truths-agent-fn5-5"><Link to="/trait/truths_agent">⮞</Link> Truth's Agent <sup><InnerLink showBacklink="backlink-main-traits_social_k-fake-fn-5.5" id="main-traits_social_k-fake-fn-5.5" data-hash-target to="main-traits_social_k-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittruthsagent-truths-agent-fn5-5-flavor">You are skilled at weeding out information.</Pair>
<Pair single="benefit" id="traittruthsagent-truths-agent-fn5-5-benefit">You gain a +1 trait bonus on all <Link to="/skill/diplomacy">Diplomacy</Link> checks made to gather information and all <Link to="/skill/knowledge_local">Knowledge (local)</Link> checks. Knowledge (local) is always a class skill for you.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_k-label">Footnotes</h3><ol>
<li id="main-traits_social_k-fake-fn-1-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_k-fake-fn-1" data-hash-target to="main-traits_social_k-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-2-target"><p><Link to="/source/arcane_anthology">Arcane Anthology</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_k-fake-fn-2" data-hash-target to="main-traits_social_k-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-3-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_k-fake-fn-3" data-hash-target to="main-traits_social_k-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-4-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_k-fake-fn-4" data-hash-target to="main-traits_social_k-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-5-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_k-fake-fn-5" data-hash-target to="main-traits_social_k-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_k-fake-fn-5.2" data-hash-target to="main-traits_social_k-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_k-fake-fn-5.3" data-hash-target to="main-traits_social_k-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_k-fake-fn-5.4" data-hash-target to="main-traits_social_k-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_k-fake-fn-5.5" data-hash-target to="main-traits_social_k-fake-fn-5.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-6-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_k-fake-fn-6" data-hash-target to="main-traits_social_k-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_k-fake-fn-6.2" data-hash-target to="main-traits_social_k-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-7-target"><p><Link to="/source/heroes_of_the_darklands">Heroes of the Darklands</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_k-fake-fn-7" data-hash-target to="main-traits_social_k-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_k-fake-fn-7.2" data-hash-target to="main-traits_social_k-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-8-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_k-fake-fn-8" data-hash-target to="main-traits_social_k-fake-fn-8">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-9-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> <InnerLink aria-label="Back to reference 9" id="backlink-main-traits_social_k-fake-fn-9" data-hash-target to="main-traits_social_k-fake-fn-9">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-10-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 19 <InnerLink aria-label="Back to reference 10" id="backlink-main-traits_social_k-fake-fn-10" data-hash-target to="main-traits_social_k-fake-fn-10">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-11-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> <InnerLink aria-label="Back to reference 11" id="backlink-main-traits_social_k-fake-fn-11" data-hash-target to="main-traits_social_k-fake-fn-11">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-12-target"><p><Link to="/source/black_markets">Black Markets</Link> <InnerLink aria-label="Back to reference 12" id="backlink-main-traits_social_k-fake-fn-12" data-hash-target to="main-traits_social_k-fake-fn-12">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-13-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 13" id="backlink-main-traits_social_k-fake-fn-13" data-hash-target to="main-traits_social_k-fake-fn-13">↩</InnerLink></p></li>
<li id="main-traits_social_k-fake-fn-14-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> <InnerLink aria-label="Back to reference 14" id="backlink-main-traits_social_k-fake-fn-14" data-hash-target to="main-traits_social_k-fake-fn-14">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_social_sm = {title: "Sense Motive Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitbastarduc-bastard-uc-fn1" extraClasses="trait" icon={["village"]}>
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
<section data-footnotes><h3 id="main-traits_social_sm-label">Footnotes</h3><ol>
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
const _traits_social_sur_per = {title: "Survival and Perception Social Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_social" className="reversed" info="Back to Social Traits" /><Ability id="traitexplorer-explorer-fn1" extraClasses="trait" icon={["village"]}>
<Pair single id="traitexplorer-explorer-fn1"><Link to="/trait/explorer">⮞</Link> Explorer <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-1" id="main-traits_social_sur_per-fake-fn-1" data-hash-target to="main-traits_social_sur_per-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair title="Requirements" hl><Link to="/race/gnome">Gnome</Link></Pair>
<Pair single="flavor" id="traitexplorer-explorer-fn1-flavor">Though many gnomes settle down in communities large enough and interesting enough to provide them with all the stimulation they need to ward off the Bleaching, you're never going to be one of them. You are always looking around the next bend in the road or over the next hill, past the borders of where you are to where you want to be.</Pair>
<Pair single="benefit" id="traitexplorer-explorer-fn1-benefit"><p>At the beginning of each character level, select one desired terrain type from the following list: cold, desert, forest, jungle, mountains (including hills), plains, planes (other than the Material Plane), swamp, underground (including caves and dungeons), urban, or water. You gain a +2 bonus on all <Link to="/skill/survival">Survival</Link> checks made in your desired terrain type.</p>
<p>At the beginning of each level, you must select a new desired terrain type to replace the old one (you cannot take the same desired terrain type two levels in a row).</p>
</Pair>
</Ability>
<Ability id="traitorphaned-orphaned-fn2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitorphaned-orphaned-fn2"><Link to="/trait/orphaned">⮞</Link> Orphaned <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-2" id="main-traits_social_sur_per-fake-fn-2" data-hash-target to="main-traits_social_sur_per-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitorphaned-orphaned-fn2-flavor">You grew up separated from your birth parents, and had to learn to watch out for yourself.</Pair>
<Pair single="benefit" id="traitorphaned-orphaned-fn2-benefit">You gain a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpovertystricken-poverty-stricken-fn2-2-fn3-fn4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpovertystricken-poverty-stricken-fn2-2-fn3-fn4"><Link to="/trait/poverty_stricken">⮞</Link> Poverty-Stricken <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-2.2" id="main-traits_social_sur_per-fake-fn-2.2" data-hash-target to="main-traits_social_sur_per-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-3" id="main-traits_social_sur_per-fake-fn-3" data-hash-target to="main-traits_social_sur_per-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-4" id="main-traits_social_sur_per-fake-fn-4" data-hash-target to="main-traits_social_sur_per-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpovertystricken-poverty-stricken-fn2-2-fn3-fn4-flavor">Your childhood was tough, and your parents always had to make every copper piece count. Hunger was your constant companion, and you often had to live off the land or sleep in the wild.</Pair>
<Pair single="benefit" id="traitpovertystricken-poverty-stricken-fn2-2-fn3-fn4-benefit">You gain a +1 bonus on <Link to="/skill/survival">Survival</Link> checks, and Survival is always a class skill for you.</Pair>
</Ability>
<Ability id="traitpreternaturalawareness-preternatural-awareness-fn5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitpreternaturalawareness-preternatural-awareness-fn5"><Link to="/trait/preternatural_awareness">⮞</Link> Preternatural Awareness <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-5" id="main-traits_social_sur_per-fake-fn-5" data-hash-target to="main-traits_social_sur_per-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitpreternaturalawareness-preternatural-awareness-fn5-flavor">Multiple encounters with fell magic have left you wary.</Pair>
<Pair single="benefit" id="traitpreternaturalawareness-preternatural-awareness-fn5-benefit">You gain a +2 trait bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks to notice cursed objects, haunts, and magically disguised creatures.</Pair>
</Ability>
<Ability id="traitruggeddragonhunter-rugged-dragon-hunter-fn6" extraClasses="trait" icon={["village"]}>
<Pair single id="traitruggeddragonhunter-rugged-dragon-hunter-fn6"><Link to="/trait/rugged_dragon_hunter">⮞</Link> Rugged Dragon Hunter <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-6" id="main-traits_social_sur_per-fake-fn-6" data-hash-target to="main-traits_social_sur_per-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="benefit" id="traitruggeddragonhunter-rugged-dragon-hunter-fn6-benefit">You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks to track dragons. If you have the <Link to="/ability/favored_terrain">favored terrain</Link> class ability, add a +1 bonus to check for skills affected by this ability, as long as you're using these skills in regards to a dragon.</Pair>
</Ability>
<Ability id="traitsavage-savage-fn2-3" extraClasses="trait" icon={["village"]}>
<Pair single id="traitsavage-savage-fn2-3"><Link to="/trait/savage">⮞</Link> Savage <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-2.3" id="main-traits_social_sur_per-fake-fn-2.3" data-hash-target to="main-traits_social_sur_per-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitsavage-savage-fn2-3-flavor">You were born and raised in untamed lands far from civilization. You learned to survive in the elements among brutal humanoids and beasts.</Pair>
<Pair single="benefit" id="traitsavage-savage-fn2-3-benefit">You gain a +1 trait bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks and a +1 trait bonus on <Link to="/skill/survival">Survival</Link> checks to get along in the wild. Knowledge (nature) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitseeker-seeker-fn2-4" extraClasses="trait" icon={["village"]}>
<Pair single id="traitseeker-seeker-fn2-4"><Link to="/trait/seeker">⮞</Link> Seeker <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-2.4" id="main-traits_social_sur_per-fake-fn-2.4" data-hash-target to="main-traits_social_sur_per-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitseeker-seeker-fn2-4-flavor">You are always on the lookout for reward and danger.</Pair>
<Pair single="benefit" id="traitseeker-seeker-fn2-4-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and Perception is always a class skill for you.</Pair>
</Ability>
<Ability id="traittriaxustrained-triaxus-trained-fn6-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traittriaxustrained-triaxus-trained-fn6-2"><Link to="/trait/triaxus_trained">⮞</Link> Triaxus-Trained <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-6.2" id="main-traits_social_sur_per-fake-fn-6.2" data-hash-target to="main-traits_social_sur_per-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traittriaxustrained-triaxus-trained-fn6-2-flavor">You have been trained in intricate dragon-handling techniques that originated on Triaxus.</Pair>
<Pair single="benefit" id="traittriaxustrained-triaxus-trained-fn6-2-benefit">You gain a +1 trait bonus on <Link to="/skill/perception">Perception</Link> checks, and a +1 trait bonus on skill checks attempted as part of trying to influence a dragon.</Pair>
</Ability>
<Ability id="traitvigilantspycatcher-vigilant-spycatcher-fn7" extraClasses="trait" icon={["village"]}>
<Pair single id="traitvigilantspycatcher-vigilant-spycatcher-fn7"><Link to="/trait/vigilant_spycatcher">⮞</Link> Vigilant Spycatcher <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-7" id="main-traits_social_sur_per-fake-fn-7" data-hash-target to="main-traits_social_sur_per-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitvigilantspycatcher-vigilant-spycatcher-fn7-flavor">Paranoid parents or a military trainer taught you to keep vigilant for spies.</Pair>
<Pair single="benefit" id="traitvigilantspycatcher-vigilant-spycatcher-fn7-benefit">If you roll less than 10 on <Link to="/skill/perception">Perception</Link> checks to see through disguises, determine your result as if you had rolled 10.</Pair>
</Ability>
<Ability id="traitwastelandvargrant-wasteland-vargrant-fn8" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwastelandvargrant-wasteland-vargrant-fn8"><Link to="/trait/wasteland_vargrant">⮞</Link> Wasteland Vargrant <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-8" id="main-traits_social_sur_per-fake-fn-8" data-hash-target to="main-traits_social_sur_per-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwastelandvargrant-wasteland-vargrant-fn8-flavor">You have spent most of your life learning how to survive in wastelands, and a lack of normal survival resources apparent in the environment is not a problem for you.</Pair>
<Pair single="benefit" id="traitwastelandvargrant-wasteland-vargrant-fn8-benefit">When you gain this trait, pick one type of wasteland from the following list: blighted, Abyssal, desert, or waterlogged. You gain a +2 trait bonus on <Link to="/skill/survival">Survival</Link> checks in that type of wasteland terrain. (The GM determines whether terrain falls into the chosen type of wasteland.) Once you choose a type of wasteland terrain to gain this benefit in, you cannot change it later.</Pair>
</Ability>
<Ability id="traitweatheredemissary-weathered-emissary-fn2-5" extraClasses="trait" icon={["village"]}>
<Pair single id="traitweatheredemissary-weathered-emissary-fn2-5"><Link to="/trait/weathered_emissary">⮞</Link> Weathered Emissary <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-2.5" id="main-traits_social_sur_per-fake-fn-2.5" data-hash-target to="main-traits_social_sur_per-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitweatheredemissary-weathered-emissary-fn2-5-flavor">Your travels in the wildlands gave you insight into how to survive their dangers and communicate with their inhabitants.</Pair>
<Pair single="benefit" id="traitweatheredemissary-weathered-emissary-fn2-5-benefit">You gain a +1 trait bonus on all <Link to="/skill/linguistics">Linguistics</Link> and <Link to="/skill/survival">Survival</Link> checks, and Linguistics is always a class skill for you.</Pair>
</Ability>
<Ability id="traitwiscraniear-wiscrani-ear-fn7-2" extraClasses="trait" icon={["village"]}>
<Pair single id="traitwiscraniear-wiscrani-ear-fn7-2"><Link to="/trait/wiscrani_ear">⮞</Link> Wiscrani Ear <sup><InnerLink showBacklink="backlink-main-traits_social_sur_per-fake-fn-7.2" id="main-traits_social_sur_per-fake-fn-7.2" data-hash-target to="main-traits_social_sur_per-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Type">Social</Pair>
<Pair single="flavor" id="traitwiscraniear-wiscrani-ear-fn7-2-flavor">You have a keen ear for the movements of thieves and monsters.</Pair>
<Pair single="benefit" id="traitwiscraniear-wiscrani-ear-fn7-2-benefit">You can always take 10 on <Link to="/skill/perception">Perception</Link> checks, even when stress and distractions would normally prevent you from doing so.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_social_sur_per-label">Footnotes</h3><ol>
<li id="main-traits_social_sur_per-fake-fn-1-target"><p><Link to="/source/gnomes_of_golarion">Gnomes of Golarion</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_social_sur_per-fake-fn-1" data-hash-target to="main-traits_social_sur_per-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-2-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sur_per-fake-fn-2" data-hash-target to="main-traits_social_sur_per-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sur_per-fake-fn-2.2" data-hash-target to="main-traits_social_sur_per-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sur_per-fake-fn-2.3" data-hash-target to="main-traits_social_sur_per-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sur_per-fake-fn-2.4" data-hash-target to="main-traits_social_sur_per-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_social_sur_per-fake-fn-2.5" data-hash-target to="main-traits_social_sur_per-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-3-target"><p><Link to="/source/second_darkness_players_guide">Second Darkness Player's Guide</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_social_sur_per-fake-fn-3" data-hash-target to="main-traits_social_sur_per-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_social_sur_per-fake-fn-4" data-hash-target to="main-traits_social_sur_per-fake-fn-4">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-5-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_social_sur_per-fake-fn-5" data-hash-target to="main-traits_social_sur_per-fake-fn-5">↩</InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-6-target"><p><Link to="/source/legacy_of_dragons">Legacy of Dragons</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_sur_per-fake-fn-6" data-hash-target to="main-traits_social_sur_per-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_social_sur_per-fake-fn-6.2" data-hash-target to="main-traits_social_sur_per-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-7-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_sur_per-fake-fn-7" data-hash-target to="main-traits_social_sur_per-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-main-traits_social_sur_per-fake-fn-7.2" data-hash-target to="main-traits_social_sur_per-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_social_sur_per-fake-fn-8-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 8" id="backlink-main-traits_social_sur_per-fake-fn-8" data-hash-target to="main-traits_social_sur_per-fake-fn-8">↩</InnerLink></p></li>
</ol></section></IonList>};
export default {traits_social:_traits_social,traits_social_all:_traits_social_all,traits_social_off:_traits_social_off,traits_social_def:_traits_social_def,traits_social_class:_traits_social_class,traits_social_magic:_traits_social_magic,traits_social_code:_traits_social_code,traits_social_lang:_traits_social_lang,traits_social_bluff:_traits_social_bluff,traits_social_diplo:_traits_social_diplo,traits_social_intm:_traits_social_intm,traits_social_k:_traits_social_k,traits_social_sm:_traits_social_sm,traits_social_sur_per:_traits_social_sur_per}