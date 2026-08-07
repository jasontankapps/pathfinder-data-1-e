import {IonList,IonItem,IonLabel,IonItemDivider} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import MainLink from '../../components/MainLink';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _traits_campaign = {title: "Campaign Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><MainLink to="/main/traits_campaign_generic" endem="(3 traits)" info="Generic Campaign" /><MainLink to="/main/traits_campaign_carrion_crown" endem="(6 traits)" info="Carrion Crown" /><MainLink to="/main/traits_campaign_council_of_thieves" endem="(7 traits)" info="Council of Thieves" /><MainLink to="/main/traits_campaign_curse_of_the_crimson_throne" endem="(8 traits)" info="Curse of the Crimson Throne" /><MainLink to="/main/traits_campaign_giantslayer" endem="(10 traits)" info="Giantslayer" /><MainLink to="/main/traits_campaign_hells_rebels" endem="(10 traits)" info="Hell's Rebels" /><MainLink to="/main/traits_campaign_hells_vengeance" endem="(12 traits)" info="Hell's Vengeance" /><MainLink to="/main/traits_campaign_iron_gods" endem="(6 traits)" info="Iron Gods" /><MainLink to="/main/traits_campaign_ironfang_invasion" endem="(9 traits)" info="Ironfang Invasion" /><MainLink to="/main/traits_campaign_jade_regent" endem="(11 traits)" info="Jade Regent" /><MainLink to="/main/traits_campaign_kingmaker" endem="(7 traits)" info="Kingmaker" /><MainLink to="/main/traits_campaign_legacy_of_fire" endem="(6 traits)" info="Legacy of Fire" /><MainLink to="/main/traits_campaign_mummys_mask" endem="(10 traits)" info="Mummy's Mask" /><MainLink to="/main/traits_campaign_reign_of_winter" endem="(7 traits)" info="Reign of Winter" /><MainLink to="/main/traits_campaign_return_of_the_runelords" endem="(7 traits)" info="Return of the Runelords" /><MainLink to="/main/traits_campaign_rise_of_the_runelords" endem="(12 traits)" info="Rise of the Runelords" /><MainLink to="/main/traits_campaign_ruins_of_azlant" endem="(12 traits)" info="Ruins of Azlant" /><MainLink to="/main/traits_campaign_second_darkness" endem="(9 traits)" info="Second Darkness" /><MainLink to="/main/traits_campaign_serpents_skull" endem="(10 traits)" info="Serpent's Skull" /><MainLink to="/main/traits_campaign_shattered_star" endem="(7 traits)" info="Shattered Star" /><MainLink to="/main/traits_campaign_skull_and_shackles" endem="(10 traits)" info="Skull and Shackles" /><MainLink to="/main/traits_campaign_strange_aeons" endem="(10 traits)" info="Strange Aeons" /><MainLink to="/main/traits_campaign_tyrants_grasp" endem="(8 traits)" info="Tyrant's Grasp" /><MainLink to="/main/traits_campaign_war_for_the_crown" endem="(7 traits)" info="War for the Crown" /><MainLink to="/main/traits_campaign_wrath_of_the_righteous" endem="(6 traits)" info="Wrath of the Righteous" /></IonList>};
const _traits_race = {title: "Race Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItem className="mainItem basic"><IonLabel><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link><br/>Race traits are tied to specific races. Your character must be of the specified race to select a race trait.</p>
</IonLabel></IonItem><IonItemDivider className="mainItem"><IonLabel>Core Races</IonLabel></IonItemDivider><MainLink to="/main/traits_race_generic" endem="(4 traits)" info="Generic Race Traits" /><MainLink to="/main/traits_race_dwarf" endem="(19 traits)" info="Dwarf Traits" /><MainLink to="/main/traits_race_elf" endem="(15 traits)" info="Elf Traits" /><MainLink to="/main/traits_race_gnome" endem="(11 traits)" info="Gnome Traits" /><MainLink to="/main/traits_race_half_elf" endem="(10 traits)" info="Half-elf Traits" /><MainLink to="/main/traits_race_half_orc" endem="(15 traits)" info="Half-orc Traits" /><MainLink to="/main/traits_race_halfling" endem="(14 traits)" info="Halfling Traits" /><MainLink to="/main/traits_race_human" endem="(90 traits)" info="Human Traits" /><IonItemDivider className="mainItem"><IonLabel>Other Races</IonLabel></IonItemDivider><MainLink to="/main/traits_race_aasimar" endem="(24 traits)" info="Aasimar Traits" /><MainLink to="/main/traits_race_android" endem="(4 traits)" info="Android Traits" /><MainLink to="/main/traits_race_catfolk" endem="(3 traits)" info="Catfolk Traits" /><MainLink to="/main/traits_race_changeling" endem="(6 traits)" info="Changeling Traits" /><MainLink to="/main/traits_race_dhampir" endem="(12 traits)" info="Dhampir Traits" /><MainLink to="/main/traits_race_drow" endem="(4 traits)" info="Drow Traits" /><MainLink to="/main/traits_race_fetchling" endem="(4 traits)" info="Fetchling Traits" /><MainLink to="/main/traits_race_geniekin" endem="(27 traits)" info="Geniekin Traits" /><MainLink to="/main/traits_race_goblin" endem="(13 traits)" info="Goblin Traits" /><MainLink to="/main/traits_race_kasatha" endem="(3 traits)" info="Kasatha Traits" /><MainLink to="/main/traits_race_kitsune" endem="(3 traits)" info="Kitsune Traits" /><MainLink to="/main/traits_race_kobold" endem="(24 traits)" info="Kobold Traits" /><MainLink to="/main/traits_race_lashunta" endem="(3 traits)" info="Lashunta Traits" /><MainLink to="/main/traits_race_orc" endem="(14 traits)" info="Orc Traits" /><MainLink to="/main/traits_race_ratfolk" endem="(4 traits)" info="Ratfolk Traits" /><MainLink to="/main/traits_race_skinwalker" endem="(20 traits)" info="Skinwalker Traits" /><MainLink to="/main/traits_race_tiefling" endem="(43 traits)" info="Tiefling Traits" /><MainLink to="/main/traits_race_triaxian" endem="(3 traits)" info="Triaxian Traits" /><MainLink to="/main/traits_race_vampire" endem="(8 traits)" info="Vampire Traits" /><MainLink to="/main/traits_race_other_races" endem="(22 traits)" info="Other Race Traits" /></IonList>};
const _traits_drawback_all = {title: "Drawback Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><Ability id="traitanxious-anxious-fn1" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitanxious-anxious-fn1"><Link to="/trait/anxious">⮞</Link> Anxious <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1" id="main-traits_drawback_all-fake-fn-1" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitanxious-anxious-fn1-benefit">After suffering terribly for not being tightlipped enough as a child, such as when you accidentally exposed your family to enemy inquisitors, you developed a habit of being overly cautious with your words. You take a -2 penalty on Diplomacy checks and must speak slowly due to the concentration required. Unless stated otherwise, you are assumed to not be speaking at a volume above a whisper.</Pair>
</Ability>
<Ability id="traitarcanemalignancies-arcane-malignancies-fn2" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitarcanemalignancies-arcane-malignancies-fn2"><Link to="/trait/arcane_malignancies">⮞</Link> Arcane Malignancies <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-2" id="main-traits_drawback_all-fake-fn-2" data-hash-target to="main-traits_drawback_all-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair title="Requirements" hl><Link to="/race/changeling">Changeling</Link></Pair>
<Pair single="flavor" id="traitarcanemalignancies-arcane-malignancies-fn2-flavor">As changelings sense the awakening of the eerie powers they inherited from their hag progenitors, they are often mortified to discover terrifying and debilitating alterations to their physique. While the call seizes the changelings' minds around the time their bodies begin maturing, the arcane malignancies that mar their features and extremities have nothing to do with puberty.~~~~~~Not every changeling develops a malignancy, and when a changeling does develop a malignancy, it is often unrelated to whatever traits her hag mother has. These transformations are more akin to a magical allergy, manifesting in response to the well of arcane energy bubbling away in the changeling's core.</Pair>
<Pair single="benefit" id="traitarcanemalignancies-arcane-malignancies-fn2-benefit"><p>A changeling character can take an arcane malignancy as a drawback in order to select an additional trait at character creation. Randomly determine the arcane malignancy by rolling a d% and consulting the table below.</p>
<ScrollContainer id="main-traits_drawback_all--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Arcane Malignancy</th>
</tr>
</thead>
<tbody><tr>
<td>01-02</td>
<td>The smallest three toes on each of your feet have fused together. You take a -2 penalty on Acrobatics, Climb, and Perform (dance) checks.</td>
</tr>
<tr>
<td>03-04</td>
<td>Your incisors grow so long and sharp that you have difficulty eating. Eating takes twice as long. Consuming a potion or other magical foodstuff requires a full-round action.</td>
</tr>
<tr>
<td>05-07</td>
<td>You have an extra digit on each hand, which hampers your fine motor skills. You take a -2 penalty on Craft, Disable Device, and Sleight of Hand checks.</td>
</tr>
<tr>
<td>08-10</td>
<td>Your limbs and torso are covered with piscine scales that you must constantly moisten. If more than 1 day passes without you applying at least a gallon of water to them, you take 1d3 points of damage each hour until you do so.</td>
</tr>
<tr>
<td>11-13</td>
<td>Your skin bears a sizable scarlet mark that flushes and lightens with your moods. You take a -2 penalty on Bluff and Disguise checks.</td>
</tr>
<tr>
<td>14-16</td>
<td>One of your eyes has grown enlarged and developed a pale, milky film. Daylight seems uncomfortably bright to you. You take a -2 penalty on saving throws against light-based spells and effects, and you are automatically dazzled for 1d6 rounds when exposed to bright light or sunlight.</td>
</tr>
<tr>
<td>17-19</td>
<td>The soles of your feet are flat, and you tire quickly. You can hustle for only a half hour before becoming fatigued, and every 4 hours spent traveling by foot in a day deals 1 point of Constitution damage.</td>
</tr>
<tr>
<td>20-22</td>
<td>Your already pallid complexion grows unusually sensitive to the rays of the sun. Exposure to direct sunlight for more than 1 hour at a time makes you sickened for 24 hours.</td>
</tr>
<tr>
<td>23-25</td>
<td>The tip of your tongue is forked and stiff. You have difficulty making yourself understood. You take a -2 penalty on Bluff, Diplomacy, and Disguise checks to fool or persuade others.</td>
</tr>
<tr>
<td>26-28</td>
<td>The painful and stiff swelling of your joints puts you at a disadvantage in combat. You take a -2 penalty on combat maneuver checks and Escape Artist checks to free yourself when grappled or pinned.</td>
</tr>
<tr>
<td>29-31</td>
<td>Your ears have stretched to an abnormal size, making you overly sensitive to loud noises. Whenever you are dealt sonic damage, you take 1 additional point of damage, and you are deafened for 1 minute whenever you take damage from any sonic effect.</td>
</tr>
<tr>
<td>32-33</td>
<td>The pupils of your eyes resemble a cat's, and beasts cannot abide your presence. You take a -2 penalty on Handle Animal and Ride checks.</td>
</tr>
<tr>
<td>34-35</td>
<td>You grow velvety-soft fur along your back, arms, and legs that chafes and catches under clothing and armor, increasing the armor check penalty of any armor by 1 and applying a -1 armor check penalty to ordinary clothing. Clothing and armor can be specially fitted for you, eliminating the increased penalty but increasing their price by 50 gp.</td>
</tr>
<tr>
<td>36-37</td>
<td>You grow an extra row of sharp, crooked teeth. The uneven set of your jaws gives you constant headaches. You take a -2 penalty on <Link to="/rule/concentration">concentration</Link> checks and saving throws against pain effects.</td>
</tr>
<tr>
<td>38-40</td>
<td>It is nearly impossible to find armor that fits your concave chest and unusually narrow, sloping shoulders. The armor check penalty of any armor you wear increases by 1, and you take a -1 penalty to AC when wearing medium or heavy armor.</td>
</tr>
<tr>
<td>41-42</td>
<td>Your throat balloons out like a frog's, and your voice comes out as an odd croak. You take a -2 penalty on Diplomacy checks and on Perform (act, oratory, and sing) checks.</td>
</tr>
<tr>
<td>43-45</td>
<td>An oozing sore has developed on your face that refuses to heal and makes you more susceptible to illness. You take a -2 penalty on saving throws against disease.</td>
</tr>
<tr>
<td>46-48</td>
<td>Your flesh grows bark, and your major joints have become gnarled and knotted like tree limbs, causing you to move slowly and stiffly. You take a -2 penalty on Reflex saves.</td>
</tr>
<tr>
<td>49-51</td>
<td>Your thin, almost translucent skin is delicate and tears easily. You take 1 point of bleed damage from slashing attacks that deal at least 1 point of damage to you.</td>
</tr>
<tr>
<td>52-54</td>
<td>A massive patch of multicolored warts covers much of your face. People cannot help but stare, and they always remember you once they've seen you. You take a -4 penalty on Disguise checks.</td>
</tr>
<tr>
<td>55-57</td>
<td>Your unruly hair grows with alarming speed. If you do not spend 1 hour trimming and grooming your hair every 48 hours, it snarls in nearby foliage whenever you are outdoors, imposing a -2 penalty to your Armor Class and on attack rolls and Stealth checks.</td>
</tr>
<tr>
<td>58-60</td>
<td>Your limbs are thin and frail. You take a -2 penalty to CMD against disarm, grapple, and trip attempts.</td>
</tr>
<tr>
<td>61-63</td>
<td>Your bones shatter as easily as glass. You take 2 additional points of damage each time you are hit by an attack made with a bludgeoning weapon.</td>
</tr>
<tr>
<td>64-65</td>
<td>One arm is turning to stone, though you retain limited mobility. You take a -4 penalty on all skill checks requiring the use of two hands and on attack rolls when wielding a two-handed weapon or fighting with two weapons.</td>
</tr>
<tr>
<td>66-67</td>
<td>You develop an allergy to one spell per spell level from the witch spell list (determined by your GM). Casting or being the target of a spell you're allergic to causes you to break out in a painful rash. This rash deals 1d4 points of damage per spell level, and imposes a penalty on your Charisma equal to the level of the spell. The rash fades after a number of hours equal to the level of the spell.</td>
</tr>
<tr>
<td>68-69</td>
<td>The joints in your unnaturally long thumbs have fused, and you often fumble objects. When you retrieve a stored item, you have a 10% chance of dropping it.</td>
</tr>
<tr>
<td>70-72</td>
<td>Your knees bend backward like a bird's, which makes many athletic movements difficult to master. You take a -2 penalty on Climb and Swim checks, and your running speed is only three times your regular walking speed.</td>
</tr>
<tr>
<td>73-75</td>
<td>A tenacious patch of fungus has sprouted on your back, weakening your system against toxins. You take a -2 penalty on saves against poison effects.</td>
</tr>
<tr>
<td>76-77</td>
<td>Your misaligned eyes affect your ability to judge distances. You take a -2 penalty on ranged attack and damage rolls.</td>
</tr>
<tr>
<td>78-80</td>
<td>When you get flustered, heat builds up in your face until it glows with inner fire. You take a -4 penalty on Diplomacy and Perform checks when in the presence of 5 or more creatures.</td>
</tr>
<tr>
<td>81-83</td>
<td>Your ears curl up like dried leaves, and you experience difficulty picking up sounds. You take a -2 penalty on hearing-based Perception checks.</td>
</tr>
<tr>
<td>84-86</td>
<td>Your curving, claw-like fingernails grow so long so quickly that they impede you in dangerous situations. You take a -2 penalty on Escape Artist and Sleight of Hand checks.</td>
</tr>
<tr>
<td>87-89</td>
<td>One of your legs measures noticeably longer than the other, and you lose your balance easily. You take a -2 penalty to CMD against bull rush and trip attempts.</td>
</tr>
<tr>
<td>90-92</td>
<td>Your eyes have swollen to mere slits. You take a -2 penalty on sight-based Perception checks.</td>
</tr>
<tr>
<td>93-96</td>
<td>You develop a shaggy pelt about your neck and shoulders that makes you overheat quickly. You take a -4 penalty on checks and saves to resist environmental heat effects.</td>
</tr>
<tr>
<td>97-98</td>
<td>You grow a tail that you can't easily conceal and that thrashes violently at inconvenient moments. You take a -2 penalty on Disguise and Stealth checks.</td>
</tr>
<tr>
<td>99-100</td>
<td>You grow vestigial gills. While they grant you no ability to breathe in water, they make it harder for you to catch your breath. When you are fatigued, it takes 12 hours of complete rest to recover. When you are exhausted, it takes 2 hours of complete rest to become fatigued.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="traitattached-attached-fn3" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitattached-attached-fn3"><Link to="/trait/attached">⮞</Link> Attached <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3" id="main-traits_drawback_all-fake-fn-3" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="flavor" id="traitattached-attached-fn3-flavor">You have a strong emotional attachment to a person or object that you're terrified of losing.</Pair>
<Pair single="benefit" id="traitattached-attached-fn3-benefit">The GM chooses the object of your attachment. Whenever the object of your attachment is either threatened, in danger, or in someone else's possession, you take a -1 penalty on Will saves and a -2 penalty on saves against fear effects. If the person or object to which you're attached is ever lost, killed, or destroyed, exchange this drawback for the Doubt drawback.</Pair>
</Ability>
<Ability id="traitavarice-avarice-fn3-2" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitavarice-avarice-fn3-2"><Link to="/trait/avarice">⮞</Link> Avarice <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.2" id="main-traits_drawback_all-fake-fn-3.2" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitavarice-avarice-fn3-2-benefit">Deep, compulsive greed gnaws at you. Whenever monetary treasure is divided, you must end up with a greater share of that treasure than your companions or you're wracked with feelings of jealousy and ill will. When treasure is divided, if you do not end up with at least 10% more treasure than any other individual companion does, you have a hard time being helpful to your allies. You become irritable, and can't take the aid another action for the next week.</Pair>
</Ability>
<Ability id="traitbetrayeddrawback-betrayed-drawback-fn4" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitbetrayeddrawback-betrayed-drawback-fn4"><Link to="/trait/betrayed_drawback">⮞</Link> Betrayed (Drawback) <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4" id="main-traits_drawback_all-fake-fn-4" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitbetrayeddrawback-betrayed-drawback-fn4-benefit">You were reported to a dangerous authority such as the Gray Gardeners of Galt, the high inquisitors of Cheliax, or the Council of Mwanyisa of Mzali, and narrowly escaped death. You second-guess your instincts constantly, leaving you never sure whether or not to trust someone and endangered if you encounter that group's agents again. You can roll twice and take the lower result on Sense Motive checks to get hunches. You cannot reroll this result, even if you have another ability that would normally allow you to do so.</Pair>
</Ability>
<Ability id="traitbitter-bitter-fn5" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitbitter-bitter-fn5"><Link to="/trait/bitter">⮞</Link> Bitter <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5" id="main-traits_drawback_all-fake-fn-5" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitbitter-bitter-fn5-benefit">You have been hurt repeatedly by those you trusted, and it has become difficult for you to accept help. When you receive healing from an ally's class feature, spell, or spell-like ability, reduce the amount of that healing by 1 hit point.</Pair>
</Ability>
<Ability id="traitburned-burned-fn1-2" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitburned-burned-fn1-2"><Link to="/trait/burned">⮞</Link> Burned <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.2" id="main-traits_drawback_all-fake-fn-1.2" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitburned-burned-fn1-2-benefit">You were badly burned once by volcanic ash, torch-wielding mobs, or some fiery accident, and the scars pain you terribly you whenever you are too near to fire. You take a -1 penalty on saving throws against fire effects. In addition, whenever you are adjacent to open flames or are on fire, you take a -1 penalty on all attack rolls, saving throws, and skill checks until you spend an entire round away from fire. These penalties are not cumulative. (An instantaneous fire effect adjacent to you or affecting you causes this penalty to apply until 1 round after it is gone.)</Pair>
</Ability>
<Ability id="traitcondescending-condescending-fn1-3" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitcondescending-condescending-fn1-3"><Link to="/trait/condescending">⮞</Link> Condescending <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.3" id="main-traits_drawback_all-fake-fn-1.3" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitcondescending-condescending-fn1-3-benefit">Raised with the assurance that only those like you are truly worthy of respect, you have an offputting way of demonstrating that you look down on those not of your race and ethnicity or nationality. You take a -5 penalty on Diplomacy and Intimidate checks to improve other creatures' attitudes toward you.</Pair>
</Ability>
<Ability id="traitcowardly-cowardly-fn5-2" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitcowardly-cowardly-fn5-2"><Link to="/trait/cowardly">⮞</Link> Cowardly <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.2" id="main-traits_drawback_all-fake-fn-5.2" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitcowardly-cowardly-fn5-2-benefit">You might face dangerous situations with bravado, but you are constantly afraid. Your base speed when frightened and fleeing increases by 5 feet, and the penalties you take from having the cowering, frightened, panicked, or shaken conditions increase by 1. If you would normally be immune to fear, you do not take these penalties but instead lose your immunity to fear (regardless of its source).</Pair>
</Ability>
<Ability id="traitcruelty-cruelty-fn1-4" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitcruelty-cruelty-fn1-4"><Link to="/trait/cruelty">⮞</Link> Cruelty <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.4" id="main-traits_drawback_all-fake-fn-1.4" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitcruelty-cruelty-fn1-4-benefit">You were rewarded as a child for flaunting your victory over others as completely as possible, and you discovered you enjoyed the feeling of rubbing your foes' faces in the dirt. Whenever you are engaged in combat and there are dying or helpless foes within 30 feet, you take a -2 penalty on attack rolls against foes who are neither dying nor helpless.</Pair>
</Ability>
<Ability id="traitdependent-dependent-fn3-3" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitdependent-dependent-fn3-3"><Link to="/trait/dependent">⮞</Link> Dependent <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.3" id="main-traits_drawback_all-fake-fn-3.3" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitdependent-dependent-fn3-3-benefit">You are dependent upon the acceptance of others. Whenever you fail a Diplomacy check, you become shaken for 1 hour.</Pair>
</Ability>
<Ability id="traitdoubt-doubt-fn3-4" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitdoubt-doubt-fn3-4"><Link to="/trait/doubt">⮞</Link> Doubt <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.4" id="main-traits_drawback_all-fake-fn-3.4" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitdoubt-doubt-fn3-4-benefit">You lack confidence in your abilities or confidence in the universe at large. Whenever you fail a skill or ability check, you take a -4 penalty on that type of skill or ability check for the next hour.</Pair>
</Ability>
<Ability id="traitemptymask-empty-mask-fn4-2" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitemptymask-empty-mask-fn4-2"><Link to="/trait/empty_mask">⮞</Link> Empty Mask <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.2" id="main-traits_drawback_all-fake-fn-4.2" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitemptymask-empty-mask-fn4-2-benefit">You have spent so long hiding your true identity to escape political enemies that you have lost much of your sense of self. You take a -1 penalty on Will saving throws against compulsions. This penalty increases to -2 against foes who know your true identity.</Pair>
</Ability>
<Ability id="traitentomophobe-entomophobe-fn5-3" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitentomophobe-entomophobe-fn5-3"><Link to="/trait/entomophobe">⮞</Link> Entomophobe <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.3" id="main-traits_drawback_all-fake-fn-5.3" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitentomophobe-entomophobe-fn5-3-benefit">A harrowing experience with insects when you were young instilled in you a deep-seated fear of vermin of all description, especially when they swarm together. You take a -2 penalty on attacks against vermin, and you take a -2 penalty on saving throws against the nauseated condition of a swarm's distraction ability.</Pair>
</Ability>
<Ability id="traitenvy-envy-fn1-5" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitenvy-envy-fn1-5"><Link to="/trait/envy">⮞</Link> Envy <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.5" id="main-traits_drawback_all-fake-fn-1.5" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitenvy-envy-fn1-5-benefit">You grew up in or near an opulent, decadent culture that valued nothing more than showing up the material wealth or accomplishments of others, causing the seed of envy to be planted in your heart. For each day you spend without stealing at least 10 gp worth of valuables or other wealth, attempt a DC 20 Will save. If you fail, you take a cumulative -1 penalty on Will and Reflex saving throws and <Link to="/rule/concentration">concentration</Link> checks (up to a -5 penalty). If you succeed, the penalty is reset to 0.</Pair>
</Ability>
<Ability id="traitfamilytiesdrawback-family-ties-drawback-fn3-5" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitfamilytiesdrawback-family-ties-drawback-fn3-5"><Link to="/trait/family_ties_drawback">⮞</Link> Family Ties (Drawback) <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.5" id="main-traits_drawback_all-fake-fn-3.5" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitfamilytiesdrawback-family-ties-drawback-fn3-5-benefit">Your family is extremely important to you, and you feel disheartened when you can't do what they ask. When a family member makes a request of you, you must fulfill that request or take a -2 penalty on all Wisdom- and Charisma-based ability checks and skill checks until you either do what was requested or succeed at a DC 20 Will saving throw, which you can attempt once per day at the start of each day. You can't take this drawback if you have no family. If you ever lose your family or lose contact with your family, exchange this drawback for the Doubt drawback.</Pair>
</Ability>
<Ability id="traitfeytaken-fey-taken-fn1-6" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitfeytaken-fey-taken-fn1-6"><Link to="/trait/fey_taken">⮞</Link> Fey-Taken <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.6" id="main-traits_drawback_all-fake-fn-1.6" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitfeytaken-fey-taken-fn1-6-benefit">As a child, you were whisked away to the First World by mischievous fey for a time. When you returned, you were ever after considered odd and distant. You long to return there, and find the mortal world dull and at times revolting, so you do not eat as you should and do not question strange visions. You take a -2 penalty on saving throws against disease, illusions, and poison of all kinds, as well as against the spells, spell-like abilities, and supernatural abilities of fey.</Pair>
</Ability>
<Ability id="traitforgetful-forgetful-fn1-7" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitforgetful-forgetful-fn1-7"><Link to="/trait/forgetful">⮞</Link> Forgetful <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.7" id="main-traits_drawback_all-fake-fn-1.7" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitforgetful-forgetful-fn1-7-benefit">You are easily distracted and prone to forgetting important things. Whenever you leave a location you have been at for longer than 1 hour, you must attempt a DC 10 Wisdom check. If you fail, you leave behind one random mundane item (a purse of money counts as an item).</Pair>
</Ability>
<Ability id="traitfoulbrand-foul-brand-fn6" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitfoulbrand-foul-brand-fn6"><Link to="/trait/foul_brand">⮞</Link> Foul Brand <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-6" id="main-traits_drawback_all-fake-fn-6" data-hash-target to="main-traits_drawback_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitfoulbrand-foul-brand-fn6-benefit">You have the symbol of an evil deity burned into your flesh. If the symbol is on your hand, you take a -1 penalty on Disable Device, Disguise, and Sleight of Hand checks. If the symbol is on your face, you take a -2 penalty on Bluff, Diplomacy, and Disguise checks. This does not count as a holy symbol for the purposes of a divine focus for spellcasting.</Pair>
</Ability>
<Ability id="traitguiltyfraud-guilty-fraud-fn4-3" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitguiltyfraud-guilty-fraud-fn4-3"><Link to="/trait/guilty_fraud">⮞</Link> Guilty Fraud <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.3" id="main-traits_drawback_all-fake-fn-4.3" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitguiltyfraud-guilty-fraud-fn4-3-benefit">You received something through trickery that you did not deserve, and your guilt for the misdeed distracts you from dangers around you. You take a -4 penalty on Bluff checks against creatures with an attitude toward you of indifferent or better.</Pair>
</Ability>
<Ability id="traithaunted-haunted-fn5-4" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traithaunted-haunted-fn5-4"><Link to="/trait/haunted">⮞</Link> Haunted <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.4" id="main-traits_drawback_all-fake-fn-5.4" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traithaunted-haunted-fn5-4-benefit">Something from your past - or a dark secret you presently hold - makes it difficult for you to ever be at peace, and your chronic worry that you might fall to evil influence has become a self-fulfilling prophecy. You take a -2 penalty on saves against spells with the evil descriptor.</Pair>
</Ability>
<Ability id="traithauntingregret-haunting-regret-fn1-8" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traithauntingregret-haunting-regret-fn1-8"><Link to="/trait/haunting_regret">⮞</Link> Haunting Regret <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.8" id="main-traits_drawback_all-fake-fn-1.8" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traithauntingregret-haunting-regret-fn1-8-benefit">When you were young, a relative with whom you had frequently quarreled passed away where his or her soul could not rest. Now, the unquiet spirit appears around you at inconvenient times, distracting you with regret for being unable to help. You take a -2 penalty on saving throws against the distraction ability of swarms and mind-affecting effects and on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
<Ability id="traitheadstrong-headstrong-fn3-6" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitheadstrong-headstrong-fn3-6"><Link to="/trait/headstrong">⮞</Link> Headstrong <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.6" id="main-traits_drawback_all-fake-fn-3.6" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitheadstrong-headstrong-fn3-6-benefit">You feel compelled to correct every action and argument that contradicts your worldview. Whenever you witness an action or hear an argument that contradicts your alignment, you must attempt to stop or correct that action or argument. If you either don't try to stop it or fail in your attempt to stop it (as adjudicated by the GM), you are shaken for 1 hour.</Pair>
</Ability>
<Ability id="traithedonistic-hedonistic-fn3-7" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traithedonistic-hedonistic-fn3-7"><Link to="/trait/hedonistic">⮞</Link> Hedonistic <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.7" id="main-traits_drawback_all-fake-fn-3.7" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traithedonistic-hedonistic-fn3-7-benefit">You are a creature of pleasure and comfort. Whenever you spend a day without gaining reward or treasure (at least 10 or more gold pieces) or spending an hour on entertainment or pleasure, attempt a DC 20 Fortitude save at the end of that day. If you fail, you begin the next day fatigued. This fatigue lasts 4 hours, or until you receive a reward or sufficient entertainment or pleasure.</Pair>
</Ability>
<Ability id="traithelpless-helpless-fn5-5" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traithelpless-helpless-fn5-5"><Link to="/trait/helpless">⮞</Link> Helpless <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.5" id="main-traits_drawback_all-fake-fn-5.5" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traithelpless-helpless-fn5-5-benefit">You once stood helpless as great harm befell a loved one, and that paralysis sometimes returns when an ally is in a dire position. The first time per combat encounter that an ally within 30 feet falls unconscious or dies as the result of an attack, you are dazed until the end of your next turn.</Pair>
</Ability>
<Ability id="traitimpatient-impatient-fn5-6" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitimpatient-impatient-fn5-6"><Link to="/trait/impatient">⮞</Link> Impatient <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.6" id="main-traits_drawback_all-fake-fn-5.6" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitimpatient-impatient-fn5-6-benefit">You love leaping into battle at the earliest opportunity, and it frustrates you to wait for others to act. You can't delay or ready actions, and if you are the last of your allies to act in a round of combat, you take a -1 penalty on ability checks, attack rolls, saving throws, and skill checks.</Pair>
</Ability>
<Ability id="traitinfamous-infamous-fn4-4" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitinfamous-infamous-fn4-4"><Link to="/trait/infamous">⮞</Link> Infamous <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.4" id="main-traits_drawback_all-fake-fn-4.4" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitinfamous-infamous-fn4-4-benefit">You were publicly linked, truthfully or not, to a crime of significant infamy. You draw attention wherever you go and risk imprisonment or worse in the jurisdiction where the crime was committed. You and your apparent allies take a -4 penalty on Diplomacy checks to interact with law-abiding citizens (except enemies of the authority that accused you).</Pair>
</Ability>
<Ability id="traitinformationoverload-information-overload-fn4-5" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitinformationoverload-information-overload-fn4-5"><Link to="/trait/information_overload">⮞</Link> Information Overload <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.5" id="main-traits_drawback_all-fake-fn-4.5" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitinformationoverload-information-overload-fn4-5-benefit">You have had access to thousands of spy reports, many of which turned out to be based on faulty deductions or even intentionally false stories spread by opposed spy groups. At this point, you have been exposed to false knowledge as much as accurate information, and you can't always remember which is which. You take a -2 penalty on all Knowledge checks, and if you fail a Knowledge check by 5 or more, you can recall information that is diametrically opposed to the truth.</Pair>
</Ability>
<Ability id="traitinsatiable-insatiable-fn5-7" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitinsatiable-insatiable-fn5-7"><Link to="/trait/insatiable">⮞</Link> Insatiable <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.7" id="main-traits_drawback_all-fake-fn-5.7" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitinsatiable-insatiable-fn5-7-benefit">You have become so accustomed to binging on the finer things in life that you find going without such excess particularly strenuous. Goods and services cost you 10% more (and can't be paid for by allies), and you need twice as much food and liquid as normal for the purposes of preventing starvation and thirst.</Pair>
</Ability>
<Ability id="traitlonely-lonely-fn4-6" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitlonely-lonely-fn4-6"><Link to="/trait/lonely">⮞</Link> Lonely <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.6" id="main-traits_drawback_all-fake-fn-4.6" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitlonely-lonely-fn4-6-benefit">You are far too easily convinced of the friendly intentions of others. You take a -2 penalty on Sense Motive checks and on Perception checks to see through disguises, and on saving throws against charm spells and spell-like abilities.</Pair>
</Ability>
<Ability id="traitloner-loner-fn1-9" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitloner-loner-fn1-9"><Link to="/trait/loner">⮞</Link> Loner <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.9" id="main-traits_drawback_all-fake-fn-1.9" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitloner-loner-fn1-9-benefit">Raised by pirates, bandits, or other troublemakers unwilling to stick out their necks for you, you are accustomed to operating on your own. The presence of allies can easily become a distraction to you, and you do your best to keep them out of your space. You take a -1 penalty to AC and on attack rolls while adjacent to allies or when taking the aid another action.</Pair>
</Ability>
<Ability id="traitlovesick-lovesick-fn3-8" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitlovesick-lovesick-fn3-8"><Link to="/trait/lovesick">⮞</Link> Lovesick <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.8" id="main-traits_drawback_all-fake-fn-3.8" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitlovesick-lovesick-fn3-8-benefit">Your love for another occupies your every thought, and you become despondent when you are away from that person. The person is chosen by your GM (with consideration to your roll on the Romantic Relationships table if you used the background generator). At the start of each day, if you are away from this person you take a -2 penalty on initiative checks and Perception checks. If you ever lose or fall out of love with this person, exchange this drawback for the Doubt drawback.</Pair>
</Ability>
<Ability id="traitmagicalklutz-magical-klutz-fn4-7" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitmagicalklutz-magical-klutz-fn4-7"><Link to="/trait/magical_klutz">⮞</Link> Magical Klutz <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.7" id="main-traits_drawback_all-fake-fn-4.7" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitmagicalklutz-magical-klutz-fn4-7-benefit">You were born in a place with a plethora of strangely interacting magic, such as Geb, the Mana Wastes, or Nex, and magic is dangerously eager to surge into action around you. You roll twice and take the lower result on Use Magic Device checks to activate items blindly and on Reflex saving throws against effects produced by magic items.</Pair>
</Ability>
<Ability id="traitmarkofslavery-mark-of-slavery-fn1-10" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitmarkofslavery-mark-of-slavery-fn1-10"><Link to="/trait/mark_of_slavery">⮞</Link> Mark of Slavery <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.10" id="main-traits_drawback_all-fake-fn-1.10" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitmarkofslavery-mark-of-slavery-fn1-10-benefit">You were enslaved for part or all of your youth, and marked as such with a brand or tattoo that still reminds you of how you were punished whenever you failed to do what you should. Whenever you fail a skill check, you take a -2 penalty on any skill check or attack roll you attempt before the end of your next turn unless it is a part of retrying the failed skill check.</Pair>
</Ability>
<Ability id="traitmeticulous-meticulous-fn3-9" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitmeticulous-meticulous-fn3-9"><Link to="/trait/meticulous">⮞</Link> Meticulous <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.9" id="main-traits_drawback_all-fake-fn-3.9" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitmeticulous-meticulous-fn3-9-benefit">You plan and prepare everything in detail, and aren't good at improvising when things don't go as planned. You take a -2 penalty on skill checks for skills with which you're untrained.</Pair>
</Ability>
<Ability id="traitmisbegotten-misbegotten-fn1-11" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitmisbegotten-misbegotten-fn1-11"><Link to="/trait/misbegotten">⮞</Link> Misbegotten <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.11" id="main-traits_drawback_all-fake-fn-1.11" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitmisbegotten-misbegotten-fn1-11-benefit">Whether due to the influence of malign magic, disease, or the scorn of the gods, you were born with a troublesome deformity that interferes with your movement. You take a -2 penalty on all Dexterity-based skill checks.</Pair>
</Ability>
<Ability id="traitnaive-naive-fn1-12" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitnaive-naive-fn1-12"><Link to="/trait/naive">⮞</Link> Naive <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.12" id="main-traits_drawback_all-fake-fn-1.12" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitnaive-naive-fn1-12-benefit">Your perception that everyone is innately good does not bode well in the heat of battle, when less scrupulous foes might take advantage of your misguided optimism. You take a -2 penalty to AC against attacks with improvised weapons and a -2 penalty to CMD against dirty trick combat maneuvers.</Pair>
</Ability>
<Ability id="traitnervous-nervous-fn1-13" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitnervous-nervous-fn1-13"><Link to="/trait/nervous">⮞</Link> Nervous <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.13" id="main-traits_drawback_all-fake-fn-1.13" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitnervous-nervous-fn1-13-benefit">Living under constant threat of death or worse from your oppressive government, your nerves have frayed terribly. Whenever you take 10 on an ability check or skill check that imparts any penalty for failure (aside from wasted time), you treat your check as if you had rolled an 8 instead of a 10, even if you are able to take your time.</Pair>
</Ability>
<Ability id="traitoblivious-oblivious-fn1-14" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitoblivious-oblivious-fn1-14"><Link to="/trait/oblivious">⮞</Link> Oblivious <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.14" id="main-traits_drawback_all-fake-fn-1.14" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitoblivious-oblivious-fn1-14-benefit">Whether because you are an avid daydreamer or you are accustomed to everything being handed to you and spelled out for your benefit, you pay little attention to your surroundings and other people. You take a -2 penalty on Sense Motive and sight-based Perception checks.</Pair>
</Ability>
<Ability id="traitoccultbargain-occult-bargain-fn4-8" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitoccultbargain-occult-bargain-fn4-8"><Link to="/trait/occult_bargain">⮞</Link> Occult Bargain <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.8" id="main-traits_drawback_all-fake-fn-4.8" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitoccultbargain-occult-bargain-fn4-8-benefit">You draw magical power from a source, such as a mysterious eidolon, shame-filled phantom, or First World patron, who insists that its identity remains secret. You take a -1 penalty on <Link to="/rule/concentration">concentration</Link> checks, and you must invoke the entity's name by word or text each day or be unable to regain spell slots that day. You must be able to cast 0-level and 1st-level spells as a class feature to select this drawback.</Pair>
</Ability>
<Ability id="traitoppressiveexpectations-oppressive-expectations-fn1-15" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitoppressiveexpectations-oppressive-expectations-fn1-15"><Link to="/trait/oppressive_expectations">⮞</Link> Oppressive Expectations <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.15" id="main-traits_drawback_all-fake-fn-1.15" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitoppressiveexpectations-oppressive-expectations-fn1-15-benefit">You were raised with the belief that your family was special, and that those of your status always succeed at whatever they do. Due to your concern about upholding the family name and your memories of the consequences for disappointing them (such as violence or unsettling disapproval), you are easily frustrated. When you fail at a skill check, you take a -2 penalty on checks with that skill until you succeed or until you fail at a different skill check, whichever comes first.</Pair>
</Ability>
<Ability id="traitoverprotective-overprotective-fn1-16" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitoverprotective-overprotective-fn1-16"><Link to="/trait/overprotective">⮞</Link> Overprotective <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.16" id="main-traits_drawback_all-fake-fn-1.16" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitoverprotective-overprotective-fn1-16-benefit">In your youth, you saw a younger friend or loved one suffer a grievous injury or die, and you blamed yourself for not having been there to help, even if there was nothing you could have done. If one of your allies should fall unconscious from hit point damage, you take a -2 penalty on attack rolls and skill checks as long as you are farther than 10 feet away from your fallen ally.</Pair>
</Ability>
<Ability id="traitparanoid-paranoid-fn3-10" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitparanoid-paranoid-fn3-10"><Link to="/trait/paranoid">⮞</Link> Paranoid <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.10" id="main-traits_drawback_all-fake-fn-3.10" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitparanoid-paranoid-fn3-10-benefit">You believe that someone or something is always out to get you, so you have a hard time truly trusting anyone. Anyone who attempts an aid another action of any type to assist you must succeed at a DC 15 check instead of the normal DC 10 check.</Pair>
</Ability>
<Ability id="traitpowerhungry-power-hungry-fn3-11" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitpowerhungry-power-hungry-fn3-11"><Link to="/trait/power_hungry">⮞</Link> Power-Hungry <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.11" id="main-traits_drawback_all-fake-fn-3.11" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitpowerhungry-power-hungry-fn3-11-benefit">You're addicted to power. You take a -2 penalty on Will saving throws against charm and compulsion effects if the creature creating the effect promises wealth or power.</Pair>
</Ability>
<Ability id="traitpride-pride-fn3-12" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitpride-pride-fn3-12"><Link to="/trait/pride">⮞</Link> Pride <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.12" id="main-traits_drawback_all-fake-fn-3.12" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitpride-pride-fn3-12-benefit">You can't abide challenges to your dignity, authority, or honor. When someone threatens, accuses, or challenges you, you take a -2 penalty on Diplomacy checks and Sense Motive checks involving that creature until the creature apologizes to you.</Pair>
</Ability>
<Ability id="traitprovincial-provincial-fn3-13" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitprovincial-provincial-fn3-13"><Link to="/trait/provincial">⮞</Link> Provincial <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.13" id="main-traits_drawback_all-fake-fn-3.13" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitprovincial-provincial-fn3-13-benefit">You have only one way of looking at things: the right way. You take a -2 penalty on Diplomacy checks and Sense Motive checks made against all creatures whose religion or alignment differs from your own.</Pair>
</Ability>
<Ability id="traitrighteousindignation-righteous-indignation-fn4-9" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitrighteousindignation-righteous-indignation-fn4-9"><Link to="/trait/righteous_indignation">⮞</Link> Righteous Indignation <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.9" id="main-traits_drawback_all-fake-fn-4.9" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitrighteousindignation-righteous-indignation-fn4-9-benefit">You have difficulty controlling your temper after living in inhuman conditions in Cheliax, Geb, Irrisen, Katapesh, or Qadira. Whenever a foe provokes an attack of opportunity from you, you must take it unless you succeed at a Will save against a DC equal to 10 + your level. You take a -1 penalty on Will saving throws against spells with the emotion descriptor that do not also have the fear descriptor.</Pair>
</Ability>
<Ability id="traitscarred-scarred-fn5-8" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitscarred-scarred-fn5-8"><Link to="/trait/scarred">⮞</Link> Scarred <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.8" id="main-traits_drawback_all-fake-fn-5.8" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitscarred-scarred-fn5-8-benefit">An injury left you horribly, visibly scarred, making it more difficult for you to hide your true face, and also making most people distrustful of you merely due to your appearance. You take a -5 penalty on Disguise checks and a -2 penalty on Bluff checks.</Pair>
</Ability>
<Ability id="traitsecretshame-secret-shame-fn4-10" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitsecretshame-secret-shame-fn4-10"><Link to="/trait/secret_shame">⮞</Link> Secret Shame <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.10" id="main-traits_drawback_all-fake-fn-4.10" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitsecretshame-secret-shame-fn4-10-benefit">You have a terrible fear of the public at large, a group, or an important person (such as your order of knights, your liege lord, your family, or your lover) learning a shameful truth about you. You take a -1 penalty on saving throws against fear effects, and the DC of any Intimidate check to demoralize you is reduced by 1. If you would normally be immune to fear, you do not take these penalties, but instead lose your immunity to fear (regardless of its source).</Pair>
</Ability>
<Ability id="traitselfdoubting-self-doubting-fn5-9" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitselfdoubting-self-doubting-fn5-9"><Link to="/trait/self_doubting">⮞</Link> Self-Doubting <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.9" id="main-traits_drawback_all-fake-fn-5.9" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitselfdoubting-self-doubting-fn5-9-benefit">Your ever-present fear of failure causes a downward spiral. The first time each day that you fail a Will saving throw or skill check, you take a -2 penalty on the next Will saving throw or skill check of that kind.</Pair>
</Ability>
<Ability id="traitsentimental-sentimental-fn3-14" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitsentimental-sentimental-fn3-14"><Link to="/trait/sentimental">⮞</Link> Sentimental <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.14" id="main-traits_drawback_all-fake-fn-3.14" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitsentimental-sentimental-fn3-14-benefit">You are sentimental, and your thoughts often stray to the past at inappropriate times. You take a -2 penalty on Perception checks to avoid being surprised and on Reflex saving throws to avoid traps or hazards.</Pair>
</Ability>
<Ability id="traitshadowscarred-shadow-scarred-fn1-17" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitshadowscarred-shadow-scarred-fn1-17"><Link to="/trait/shadow_scarred">⮞</Link> Shadow-Scarred <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.17" id="main-traits_drawback_all-fake-fn-1.17" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitshadowscarred-shadow-scarred-fn1-17-benefit">You were touched by terrible horrors that live in the darkness just outside the human sphere, such as shadow-beasts or aberrations linked to the Dark Tapestry, and feel your life-force ebb away ever so slightly whenever you return to the shadows. Whenever you are in an area of dim light or darkness, you take a -1 penalty on saving throws.</Pair>
</Ability>
<Ability id="traitsheltered-sheltered-fn1-18" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitsheltered-sheltered-fn1-18"><Link to="/trait/sheltered">⮞</Link> Sheltered <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.18" id="main-traits_drawback_all-fake-fn-1.18" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitsheltered-sheltered-fn1-18-benefit">Brought up in courtly environments and knowing little of violence, you have trouble getting accustomed to it. Whenever you have less than half your maximum hit points, you are shaken.</Pair>
</Ability>
<Ability id="traitsleepy-sleepy-fn1-19" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitsleepy-sleepy-fn1-19"><Link to="/trait/sleepy">⮞</Link> Sleepy <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.19" id="main-traits_drawback_all-fake-fn-1.19" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitsleepy-sleepy-fn1-19-benefit">You must sleep or rest for at least 12 hours each night to get the benefits of a full night's rest. You take a -2 penalty on saving throws against sleep effects.</Pair>
</Ability>
<Ability id="traitspooked-spooked-fn1-20" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitspooked-spooked-fn1-20"><Link to="/trait/spooked">⮞</Link> Spooked <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.20" id="main-traits_drawback_all-fake-fn-1.20" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitspooked-spooked-fn1-20-benefit">You had a traumatic experience with a spirit at a young age that colors your reactions to such creatures even to this day. Whenever you perceive a fey, outsider, or undead from within 60 feet, you become shaken for 1d4 rounds unless you succeed at a Will save with a DC equal to 15 + the creature's Charisma modifier. Immunity to fear effects does not allow you to forgo this saving throw; even if you are immune to fear, you must roll the Will saving throw for this drawback when applicable, albeit with a +4 bonus.</Pair>
</Ability>
<Ability id="traitstigmatized-stigmatized-fn5-10" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitstigmatized-stigmatized-fn5-10"><Link to="/trait/stigmatized">⮞</Link> Stigmatized <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-5.10" id="main-traits_drawback_all-fake-fn-5.10" data-hash-target to="main-traits_drawback_all-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitstigmatized-stigmatized-fn5-10-benefit">You were kept at the periphery of society for a long period of time, so that even when you are among strangers in a new place, you feel the weight of your missing socialization. You take a -3 penalty on Diplomacy checks to gather information or improve a creature's attitude.</Pair>
</Ability>
<Ability id="traitsuperstitiousdrawback-superstitious-drawback-fn1-21" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitsuperstitiousdrawback-superstitious-drawback-fn1-21"><Link to="/trait/superstitious_drawback">⮞</Link> Superstitious (Drawback) <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.21" id="main-traits_drawback_all-fake-fn-1.21" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitsuperstitiousdrawback-superstitious-drawback-fn1-21-benefit">Raised around those who regarded most magic as innately dangerous, no matter the source, you cannot bring yourself to submit to magic willingly even for your own good. Whenever you are affected with a harmless spell, there is a 50% chance that you must roll a saving throw to prevent that effect, even if it would benefit you. This does not apply to harmless spells cast by you upon yourself.</Pair>
</Ability>
<Ability id="traittaintedspirit-tainted-spirit-fn1-22" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traittaintedspirit-tainted-spirit-fn1-22"><Link to="/trait/tainted_spirit">⮞</Link> Tainted Spirit <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.22" id="main-traits_drawback_all-fake-fn-1.22" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traittaintedspirit-tainted-spirit-fn1-22-benefit">When you were a child, a parent or other person with authority over you made a minor pact with a fiend on your behalf, stealing some of your vitality in exchange for a minor boon. At the end of any combat, you must attempt a Fortitude saving throw. The DC is 10 + the number of rounds you acted in combat. If you fail this save, you become fatigued for 10 minutes per round you acted during that encounter.</Pair>
</Ability>
<Ability id="traittoomanysecrets-too-many-secrets-fn4-11" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traittoomanysecrets-too-many-secrets-fn4-11"><Link to="/trait/too_many_secrets">⮞</Link> Too Many Secrets <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.11" id="main-traits_drawback_all-fake-fn-4.11" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traittoomanysecrets-too-many-secrets-fn4-11-benefit">You've told too many lies, and made up too many cover stories, and now even you can't keep it all straight. The lies have become reality to you, which makes it difficult to think of a new convincing lie. You hesitate at crucial moments when trying to fool those around you, and likely shouldn't be in the field at all anymore. You take a -2 penalty on Bluff checks and saving throws against illusions.</Pair>
</Ability>
<Ability id="traitumbralunmasking-umbral-unmasking-fn6-2" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitumbralunmasking-umbral-unmasking-fn6-2"><Link to="/trait/umbral_unmasking">⮞</Link> Umbral Unmasking <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-6.2" id="main-traits_drawback_all-fake-fn-6.2" data-hash-target to="main-traits_drawback_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitumbralunmasking-umbral-unmasking-fn6-2-benefit">You cast no shadow whatsoever, or the shadow you do have is monstrous. Under normal lighted conditions, this is not hard to observe - but uncommon to notice. Creatures that succeed at a DC 15 Wisdom check notice it plainly (an additional Perception check may be required based on environmental conditions). This telltale sign of wickedness cannot be concealed by <Link to="/spell/misdirection">misdirection</Link>, <Link to="/spell/nondetection">nondetection</Link>, or illusions, except those that also affect shadows (such as <Link to="/spell/invisibility">invisibility</Link>).</Pair>
</Ability>
<Ability id="traitunlearned-unlearned-fn1-23" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitunlearned-unlearned-fn1-23"><Link to="/trait/unlearned">⮞</Link> Unlearned <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-1.23" id="main-traits_drawback_all-fake-fn-1.23" data-hash-target to="main-traits_drawback_all-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitunlearned-unlearned-fn1-23-benefit">You have always had difficulty learning and retaining information, and know very little about the world beyond the obvious and what pertains to your profession. Choose one Knowledge skill. You cannot attempt untrained Knowledge checks with any other Knowledge skills, even if the check's DC is 10 or lower. If you have access to a library that covers a specific Knowledge skill, you may attempt an untrained Knowledge check with a -2 penalty.</Pair>
</Ability>
<Ability id="traitvain-vain-fn3-15" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitvain-vain-fn3-15"><Link to="/trait/vain">⮞</Link> Vain <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.15" id="main-traits_drawback_all-fake-fn-3.15" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitvain-vain-fn3-15-benefit">You are sensitive about the way others perceive you. Whenever you fail an opposed Charisma-based check, you take a -2 penalty on all Charisma-based checks for the next 24 hours.</Pair>
</Ability>
<Ability id="traitvainglory-vainglory-fn4-12" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitvainglory-vainglory-fn4-12"><Link to="/trait/vainglory">⮞</Link> Vainglory <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-4.12" id="main-traits_drawback_all-fake-fn-4.12" data-hash-target to="main-traits_drawback_all-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitvainglory-vainglory-fn4-12-benefit">You compulsively seek recognition for your deeds, making it hard to act with subtlety. You take a -1 penalty on Bluff, Disguise, and Stealth checks, and the save DC of any illusion you create is 1 lower than normal.</Pair>
</Ability>
<Ability id="traitwardedagainstnature-warded-against-nature-fn6-3" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitwardedagainstnature-warded-against-nature-fn6-3"><Link to="/trait/warded_against_nature">⮞</Link> Warded Against Nature <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-6.3" id="main-traits_drawback_all-fake-fn-6.3" data-hash-target to="main-traits_drawback_all-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitwardedagainstnature-warded-against-nature-fn6-3-benefit">Animals do not willingly approach within 30 feet of you, unless you or the animal's master succeeds at a DC 20 Handle Animal, Ride, or <Link to="/ability/wild_empathy">wild empathy</Link> check. Animal companions, familiars, and mounts granted by your class abilities are immune to this effect.</Pair>
</Ability>
<Ability id="traitxenophobic-xenophobic-fn3-16" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitxenophobic-xenophobic-fn3-16"><Link to="/trait/xenophobic">⮞</Link> Xenophobic <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.16" id="main-traits_drawback_all-fake-fn-3.16" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitxenophobic-xenophobic-fn3-16-benefit">You have a hard time understanding and trusting those with unfamiliar ways and appearances. You take a -2 penalty on Diplomacy and Sense Motive checks made against creatures of a different race or from a different culture.</Pair>
</Ability>
<Ability id="traitzealousdrawback-zealous-drawback-fn3-17" extraClasses="trait" icon={["broken-shield"]}>
<Pair single id="traitzealousdrawback-zealous-drawback-fn3-17"><Link to="/trait/zealous_drawback">⮞</Link> Zealous (Drawback) <sup><InnerLink showBacklink="backlink-main-traits_drawback_all-fake-fn-3.17" id="main-traits_drawback_all-fake-fn-3.17" data-hash-target to="main-traits_drawback_all-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Drawback</Pair>
<Pair single="benefit" id="traitzealousdrawback-zealous-drawback-fn3-17-benefit">You are fanatical in your beliefs, ruled by emotion over reason. When you attack a creature that you know worships a different religion than you do, you take a -5 penalty on the attack roll and a +2 trait bonus on the damage roll with your first attack.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_drawback_all-label">Footnotes</h3><ol>
<li id="main-traits_drawback_all-fake-fn-1-target"><p><Link to="/source/quests_and_campaigns">Quests and Campaigns</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1" data-hash-target to="main-traits_drawback_all-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.2" data-hash-target to="main-traits_drawback_all-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.3" data-hash-target to="main-traits_drawback_all-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.4" data-hash-target to="main-traits_drawback_all-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.5" data-hash-target to="main-traits_drawback_all-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.6" data-hash-target to="main-traits_drawback_all-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.7" data-hash-target to="main-traits_drawback_all-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.8" data-hash-target to="main-traits_drawback_all-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.9" data-hash-target to="main-traits_drawback_all-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.10" data-hash-target to="main-traits_drawback_all-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.11" data-hash-target to="main-traits_drawback_all-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.12" data-hash-target to="main-traits_drawback_all-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.13" data-hash-target to="main-traits_drawback_all-fake-fn-1.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.14" data-hash-target to="main-traits_drawback_all-fake-fn-1.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.15" data-hash-target to="main-traits_drawback_all-fake-fn-1.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.16" data-hash-target to="main-traits_drawback_all-fake-fn-1.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.17" data-hash-target to="main-traits_drawback_all-fake-fn-1.17">↩<sup>17</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.18" data-hash-target to="main-traits_drawback_all-fake-fn-1.18">↩<sup>18</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.19" data-hash-target to="main-traits_drawback_all-fake-fn-1.19">↩<sup>19</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.20" data-hash-target to="main-traits_drawback_all-fake-fn-1.20">↩<sup>20</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.21" data-hash-target to="main-traits_drawback_all-fake-fn-1.21">↩<sup>21</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.22" data-hash-target to="main-traits_drawback_all-fake-fn-1.22">↩<sup>22</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_drawback_all-fake-fn-1.23" data-hash-target to="main-traits_drawback_all-fake-fn-1.23">↩<sup>23</sup></InnerLink></p></li>
<li id="main-traits_drawback_all-fake-fn-2-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_drawback_all-fake-fn-2" data-hash-target to="main-traits_drawback_all-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_drawback_all-fake-fn-3-target"><p><Link to="/source/ultimate_campaign">Ultimate Campaign</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3" data-hash-target to="main-traits_drawback_all-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.2" data-hash-target to="main-traits_drawback_all-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.3" data-hash-target to="main-traits_drawback_all-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.4" data-hash-target to="main-traits_drawback_all-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.5" data-hash-target to="main-traits_drawback_all-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.6" data-hash-target to="main-traits_drawback_all-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.7" data-hash-target to="main-traits_drawback_all-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.8" data-hash-target to="main-traits_drawback_all-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.9" data-hash-target to="main-traits_drawback_all-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.10" data-hash-target to="main-traits_drawback_all-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.11" data-hash-target to="main-traits_drawback_all-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.12" data-hash-target to="main-traits_drawback_all-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.13" data-hash-target to="main-traits_drawback_all-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.14" data-hash-target to="main-traits_drawback_all-fake-fn-3.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.15" data-hash-target to="main-traits_drawback_all-fake-fn-3.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.16" data-hash-target to="main-traits_drawback_all-fake-fn-3.16">↩<sup>16</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_drawback_all-fake-fn-3.17" data-hash-target to="main-traits_drawback_all-fake-fn-3.17">↩<sup>17</sup></InnerLink></p></li>
<li id="main-traits_drawback_all-fake-fn-4-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4" data-hash-target to="main-traits_drawback_all-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.2" data-hash-target to="main-traits_drawback_all-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.3" data-hash-target to="main-traits_drawback_all-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.4" data-hash-target to="main-traits_drawback_all-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.5" data-hash-target to="main-traits_drawback_all-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.6" data-hash-target to="main-traits_drawback_all-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.7" data-hash-target to="main-traits_drawback_all-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.8" data-hash-target to="main-traits_drawback_all-fake-fn-4.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.9" data-hash-target to="main-traits_drawback_all-fake-fn-4.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.10" data-hash-target to="main-traits_drawback_all-fake-fn-4.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.11" data-hash-target to="main-traits_drawback_all-fake-fn-4.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_drawback_all-fake-fn-4.12" data-hash-target to="main-traits_drawback_all-fake-fn-4.12">↩<sup>12</sup></InnerLink></p></li>
<li id="main-traits_drawback_all-fake-fn-5-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5" data-hash-target to="main-traits_drawback_all-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.2" data-hash-target to="main-traits_drawback_all-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.3" data-hash-target to="main-traits_drawback_all-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.4" data-hash-target to="main-traits_drawback_all-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.5" data-hash-target to="main-traits_drawback_all-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.6" data-hash-target to="main-traits_drawback_all-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.7" data-hash-target to="main-traits_drawback_all-fake-fn-5.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.8" data-hash-target to="main-traits_drawback_all-fake-fn-5.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.9" data-hash-target to="main-traits_drawback_all-fake-fn-5.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_drawback_all-fake-fn-5.10" data-hash-target to="main-traits_drawback_all-fake-fn-5.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_drawback_all-fake-fn-6-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_drawback_all-fake-fn-6" data-hash-target to="main-traits_drawback_all-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_drawback_all-fake-fn-6.2" data-hash-target to="main-traits_drawback_all-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-main-traits_drawback_all-fake-fn-6.3" data-hash-target to="main-traits_drawback_all-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_drawback = {title: "Drawback Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItem className="mainItem basic"><IonLabel><p>Drawbacks are like traits in reverse. Instead of granting you a boon, they grant you a negative effect, typically in particular circumstances. If you choose to take a drawback, you get to offset this penalty by selecting an additional trait (following the same <Link to="/rule/restrictions_on_trait_selection">restrictions</Link> on trait selections). For example, you can take a campaign trait and a magic trait, then take a drawback and a combat trait, for a total of three traits and one drawback.</p>
<p>Not all GMs allow drawbacks, so consult yours before taking one.</p>
</IonLabel></IonItem><MainLink to="/main/traits_drawback_all" className="reversed" info="View all Drawbacks on One Page" /><IonItem className="mainItem basic"><IonLabel><DisplayTable table={{"id":"drawbacks only table","columns":[{"header":"Trait","size":8.5,"align":"start","link":"trait"},{"header":"Benefit","size":10,"align":"start","unsortable":true},{"header":"Prerequisite","size":8.5,"align":"start"}],"initialColumn":0,"nullValue":"","data":[[["Anxious","anxious"],"-2 Diplomacy; speak slowly and quietly",null],[["Arcane Malignancies","arcane_malignancies"],"Gain a random penalty","Changeling"],[["Attached","attached"],"In certain circumstances: -1 Will, -2 vs fear",null],[["Avarice","avarice"],"In certain circumstances: Can't aid another for a week",null],[["Betrayed (Drawback)","betrayed_drawback"],"Roll twice and take lower on Sense Motive hunches",null],[["Bitter","bitter"],"Magical healing heals -1hp less",null],[["Burned","burned"],"-1 saves vs fire; In certain circumstances: -1 on attacks, saves, skills",null],[["Condescending","condescending"],"-5 Diplomacy and Intimidation to improve creatures' attitudes",null],[["Cowardly","cowardly"],"Fearful movement is -5ft; fear penalties are +1",null],[["Cruelty","cruelty"],"-2 to attack those not dying or helpless",null],[["Dependent","dependent"],"Become shaken for 1 hour after failing Diplomacy check",null],[["Doubt","doubt"],"Fail a skill/*wbr*ability check: take -4 on that check for an hour",null],[["Empty Mask","empty_mask"],"-1/-2 Will vs compulsions",null],[["Entomophobe","entomophobe"],"-2 to attack vermin; -2 saves vs nauseating swarm",null],[["Envy","envy"],"Steal 10gp/day or possibly take Will/*wbr*Reflex penalties",null],[["Family Ties (Drawback)","family_ties_drawback"],"-2 Wis/*wbr*Cha-based checks if you don't help your family",null],[["Fey-Taken","fey_taken"],"-2 vs magical abilities of fey, disease, illusions, and poison",null],[["Forgetful","forgetful"],"Possibly lose items when you linger for 1 hour",null],[["Foul Brand","foul_brand"],"-1 Disable Device, Disguise, Sleight of Hand OR -2 Bluff, Diplomacy, Disguise",null],[["Guilty Fraud","guilty_fraud"],"-4 Bluff vs indifferent or friendly creatures",null],[["Haunted","haunted"],"-2 saves vs evil descriptor.",null],[["Haunting Regret","haunting_regret"],"-2 vs distracting swarms, mind-affecting effects, and concentration checks",null],[["Headstrong","headstrong"],"Counter alignment arguments or be shaken for 1 hour",null],[["Hedonistic","hedonistic"],"Get reward/*wbr*relaxation or possibly be fatigued",null],[["Helpless","helpless"],"1/combat be dazed when ally falls to violence",null],[["Impatient","impatient"],"Cannot delay or ready; -1 to all checks, saves, and attacks if last in combat",null],[["Infamous","infamous"],"You and allies: -4 Diplomacy vs law-abiding people",null],[["Information Overload","information_overload"],"-2 all Knowledge skills; fail by 5 and receive untrue info",null],[["Insatiable","insatiable"],"Goods cost 10% more; you need twice as much food and water",null],[["Lonely","lonely"],"-2 to Sense Motive, Perception vs Disguise, saves vs charm",null],[["Loner","loner"],"-1 to AC and attack rolls while next to ally or aiding another",null],[["Lovesick","lovesick"],"-2 Initiative and Perception if away from your love",null],[["Magical Klutz","magical_klutz"],"Roll twice and take lower on Use Magic Device to activate blindly, and on Reflex saves vs magic items",null],[["Mark of Slavery","mark_of_slavery"],"Fail a skill check: -2 to skill or attacks except retrying the skill",null],[["Meticulous","meticulous"],"-2 on untrained skills",null],[["Misbegotten","misbegotten"],"-2 on Dex-based skills",null],[["Naive","naive"],"-2 AC vs improvised weapons; -2 CMD vs dirty trick",null],[["Nervous","nervous"],"Taking 10 counts as 8 for some skills/*wbr*abilities",null],[["Oblivious","oblivious"],"-2 to Sense Motive and sight-based Perception",null],[["Occult Bargain","occult_bargain"],"-1 concentration checks; must invoke patron's name daily","Class feature grants 0-level and 1st-level spells"],[["Oppressive Expectations","oppressive_expectations"],"Fail skill check: -2 to skill until you succeed at it (or fail different skill)",null],[["Overprotective","overprotective"],"-2 to attack and skills if +10ft from fallen ally",null],[["Paranoid","paranoid"],"Aid another is DC 15 to help you",null],[["Power-Hungry","power_hungry"],"-2 saves vs charm and compulsion if caster promises wealth or power",null],[["Pride","pride"],"-2 Diplomacy and Sense Motive vs those who challenge you",null],[["Provincial","provincial"],"-2 Diplomacy and Sense Motive vs. those of differing religions",null],[["Righteous Indignation","righteous_indignation"],"-1 Will vs emotion (not fear); Will save or always take attacks of opportunity",null],[["Scarred","scarred"],"-5 Disguise; -2 Bluff",null],[["Secret Shame","secret_shame"],"-1 saves vs fear; -1 DC to Intimidate you",null],[["Self-Doubting","self_doubting"],"1/day: fail skill check or Will save: -2 to same check or save",null],[["Sentimental","sentimental"],"-2 Perception to avoid surprise; -2 Reflex vs traps and hazards",null],[["Shadow-Scarred","shadow_scarred"],"-1 to saves in dim light or darkness",null],[["Sheltered","sheltered"],"Shaken when under half hp",null],[["Sleepy","sleepy"],"Rest requires 12 hours sleep; -2 saves vs sleep effects",null],[["Spooked","spooked"],"See a fey, outsider, or undead and become shaken for 1d4 rounds",null],[["Stigmatized","stigmatized"],"-3 Diplomacy (gather info, improve attitude)",null],[["Superstitious (Drawback)","superstitious_drawback"],"50% chance to try to save vs harmless effect",null],[["Tainted Spirit","tainted_spirit"],"Become fatigued after combat if you fail a Fortitude save",null],[["Too Many Secrets","too_many_secrets"],"-2 on Bluff and on saves vs illusions",null],[["Umbral Unmasking","umbral_unmasking"],"You cast no shadow whatsoever",null],[["Unlearned","unlearned"],"Choose one Knowledge skill: you can't try untrained checks with other Knowledge skills",null],[["Vain","vain"],"Fail opposed Cha-based check: -2 on all Cha-based checks for 24 hours",null],[["Vainglory","vainglory"],"-1 Bluff, Disguise, Stealth; -1 DC of your illusions",null],[["Warded Against Nature","warded_against_nature"],"Animals do not willingly approach within 30 feet of you",null],[["Xenophobic","xenophobic"],"-2 on Diplomacy and Sense Motive vs different races, cultures",null],[["Zealous (Drawback)","zealous_drawback"],"-5 to attack, +2 damage on 1st attack vs target of different religion",null]]}} />
</IonLabel></IonItem></IonList>};
const _traits_equipment = {hasJL:true,title: "Equipment Traits", jsx: <IonList lines="full"><div className="jumpList" id="main-traits_equipment-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="main-traits_equipment-arcane-adept-package">Arcane Adept Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-blessed-warden-package">Blessed Warden Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-corporeal-warrior-package">Corporeal Warrior Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-daring-bravo-package">Daring Bravo Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-holy-warrior-package">Holy Warrior Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-lore-seeker-package">Lore Seeker Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-mystic-guide-package">Mystic Guide Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-planar-traveler-package">Planar Traveler Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-questing-knight-package">Questing Knight Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-shadowy-stalker-package">Shadowy Stalker Package</InnerLink></li><li><InnerLink toTop to="main-traits_equipment-wilderness-wanderer-package">Wilderness Wanderer Package</InnerLink></li></ul></div><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><div style={{clear:"both"}}></div><Ability id="traitaugmenteddisguise-augmented-disguise-fn1" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitaugmenteddisguise-augmented-disguise-fn1"><Link to="/trait/augmented_disguise">⮞</Link> Augmented Disguise <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1" id="main-traits_equipment-fake-fn-1" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitaugmenteddisguise-augmented-disguise-fn1-benefit">You are especially good at disguising yourself when you have props available. You gain a +2 trait bonus on Disguise checks when wearing a wig, false beard, or similar large prop, or if you are wearing a special costume or eye-catching bauble that reinforces your disguise.</Pair>
</Ability>
<Ability id="traitdealmaker-dealmaker-fn1-2" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitdealmaker-dealmaker-fn1-2"><Link to="/trait/dealmaker">⮞</Link> Dealmaker <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.2" id="main-traits_equipment-fake-fn-1.2" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="traitdealmaker-dealmaker-fn1-2-flavor">You have the air of a person with money, allowing you to buy and sell valuables that otherwise are too rich for the local community.</Pair>
<Pair single="benefit" id="traitdealmaker-dealmaker-fn1-2-benefit"><p>Once per week, when looking for an item with a price greater than <Link to="/rule/purchasing_magic_items">the local community's base value</Link>, make a DC 10 Diplomacy check; add 10 to the DC for each community size category between the current community and the community size with a base value sufficient for that item. Success means (with GM approval) you're able to sell or purchase that item as if the local community were of sufficient size. Each additional attempt (successful or otherwise) in that community increases the DC by an additional +10.</p>
<p><strong>Example:</strong> If you're trying to find a +1 cloak of resistance (1,000 gp), you'd normally need to be in a small town (base value 1,000 gp) or larger to be able to find that item with little trouble. If you're currently in a hamlet, that's two community sizes away from a small town, so the Diplomacy DC is 30. If you went to a village and asked there, the DC would only be 20 because it's only one community size away from a small town.</p>
</Pair>
</Ability>
<Ability id="traitextremelyfashionable-extremely-fashionable-fn1-3" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitextremelyfashionable-extremely-fashionable-fn1-3"><Link to="/trait/extremely_fashionable">⮞</Link> Extremely Fashionable <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.3" id="main-traits_equipment-fake-fn-1.3" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitextremelyfashionable-extremely-fashionable-fn1-3-benefit">You really know how to make a good impression when you're dressed well. Whenever you are wearing clothing and/or jewelry worth at least 150 gp (and not otherwise covered in gore, sewage, or other things that mar your overall look), you gain a +1 trait bonus on Bluff, Diplomacy, and Intimidate checks. One of these skills (your choice) is a class skill for you.</Pair>
</Ability>
<Ability id="traitheirloomweapon-heirloom-weapon-fn1-4" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitheirloomweapon-heirloom-weapon-fn1-4"><Link to="/trait/heirloom_weapon">⮞</Link> Heirloom Weapon <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.4" id="main-traits_equipment-fake-fn-1.4" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitheirloomweapon-heirloom-weapon-fn1-4-benefit">You carry a non-masterwork simple or martial weapon that has been passed down from generation to generation in your family (pay the standard gp cost for the weapon). When you select this trait, choose one of the following benefits: proficiency with that specific weapon, a +1 trait bonus on attacks of opportunity with that specific weapon, or a +2 trait bonus on one kind of combat maneuver when using that specific weapon.</Pair>
</Ability>
<Ability id="traitimprovisationalequipment-improvisational-equipment-fn1-5" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitimprovisationalequipment-improvisational-equipment-fn1-5"><Link to="/trait/improvisational_equipment">⮞</Link> Improvisational Equipment <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.5" id="main-traits_equipment-fake-fn-1.5" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitimprovisationalequipment-improvisational-equipment-fn1-5-benefit">You have an uncanny knack for turning equipment to new and unexpected uses. When using an item for anything other than its intended purpose - such as using a crowbar as a grappling hook or an old shirt to bandage a deadly wound - reduce the improvisation penalty by 2. This does not apply to improvised weapon penalties. Your GM may rule that some things are just not suitable for use in certain ways; for example, gluing a dead orc's face to your own face won't help you disguise yourself as an orc.</Pair>
</Ability>
<Ability id="traitironliver-iron-liver-fn1-6" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitironliver-iron-liver-fn1-6"><Link to="/trait/iron_liver">⮞</Link> Iron Liver <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.6" id="main-traits_equipment-fake-fn-1.6" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitironliver-iron-liver-fn1-6-benefit">Due to a lucky constitution or frequent exposure, your body is resistant to poison, including alcohol and drugs. You gain a +2 trait bonus on Fortitude saves against poison and drugs, and a +4 trait bonus on Fortitude saves to avoid the effects of alcohol.</Pair>
</Ability>
<Ability id="traitpowerofsuggestion-power-of-suggestion-fn1-7" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitpowerofsuggestion-power-of-suggestion-fn1-7"><Link to="/trait/power_of_suggestion">⮞</Link> Power of Suggestion <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.7" id="main-traits_equipment-fake-fn-1.7" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitpowerofsuggestion-power-of-suggestion-fn1-7-benefit">People trust your words over their own eyes. You may make a Bluff check to make observers believe that an object in your possession is actually a different object entirely. The DC for the check is 20 for items of a similar size, shape, and color (such as a glaive and a quarterstaff). Items of a different shape, size, or color raise the DC by 5 for each dissimilar aspect, or more if the dissimilarity is extreme. This deception lasts 1 minute; if the item is still in view, the observers may recognize their error unless you make another bluff check.</Pair>
</Ability>
<Ability id="traitprehensilewhip-prehensile-whip-fn1-8" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitprehensilewhip-prehensile-whip-fn1-8"><Link to="/trait/prehensile_whip">⮞</Link> Prehensile Whip <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.8" id="main-traits_equipment-fake-fn-1.8" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitprehensilewhip-prehensile-whip-fn1-8-benefit">In your hand a whip has a life of its own, wrapping around pillars and beams with ease. You can use a whip as if it were a rope with a grappling hook at the end. Attaching your whip is a standard action, but detaching it is a full-round action.</Pair>
</Ability>
<Ability id="traitquicklearner-quick-learner-fn1-9" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitquicklearner-quick-learner-fn1-9"><Link to="/trait/quick_learner">⮞</Link> Quick Learner <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.9" id="main-traits_equipment-fake-fn-1.9" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitquicklearner-quick-learner-fn1-9-benefit">You're skilled at learning the feel of a particular weapon after a few swings in combat. After your first attack with a weapon in which you are not proficient, the non-proficiency penalty decreases by 2 (to a -2 penalty). This effect lasts only while you have the weapon in hand; you must "relearn" the weapon each time you pick it up.</Pair>
</Ability>
<Ability id="traitroughandready-rough-and-ready-fn1-10" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitroughandready-rough-and-ready-fn1-10"><Link to="/trait/rough_and_ready">⮞</Link> Rough and Ready <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.10" id="main-traits_equipment-fake-fn-1.10" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitroughandready-rough-and-ready-fn1-10-benefit">Your intense familiarity with the tools of your trade allows you to use them in combat as if they were actual weapons and makes them more effective for that purpose than they would normally be. When you use a tool of your trade (requiring at least 1 rank in the appropriate Craft or Profession skill) as a weapon, you do not take the improvised weapon penalty and instead receive a +1 trait bonus on your attack. This trait is commonly used with shovels, picks, blacksmith hammers, and other sturdy tools - lutes and brooms make terribly fragile weapons.</Pair>
</Ability>
<Ability id="traitstagemagic-stage-magic-fn1-11" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitstagemagic-stage-magic-fn1-11"><Link to="/trait/stage_magic">⮞</Link> Stage Magic <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.11" id="main-traits_equipment-fake-fn-1.11" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitstagemagic-stage-magic-fn1-11-benefit">You have put in many hours practicing with flashy alchemical items that enhance your Perform skill. When you use an attention-getting alchemical item such as a flask of alchemist's fire, smokestick, thunderstone, or another appropriate alchemical item (GM's discretion) as part of a performance, you gain a +2 trait bonus on your Perform check for the duration of that performance. The item is expended without its normal effects and only serves to make your performance more impressive; for example, you could pretend to ignite yourself with alchemist's fire as part of a Perform (comedy) check or make a dramatic appearance with a smokestick as part of a Perform (act) check, but you would not actually take fire damage or gain concealment from smoke.</Pair>
</Ability>
<Ability id="traitstealthyescape-stealthy-escape-fn1-12" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitstealthyescape-stealthy-escape-fn1-12"><Link to="/trait/stealthy_escape">⮞</Link> Stealthy Escape <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.12" id="main-traits_equipment-fake-fn-1.12" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitstealthyescape-stealthy-escape-fn1-12-benefit">You are adept at escaping from confinement in an unobtrusive manner. When trying to escape manacles, rope, or other similar restraints (but not grapples or similar attacks), you may make a Sleight of Hand check instead of your Escape Artist modifier. If you free yourself, you gain a +2 trait bonus on Bluff checks to pretend that you are still bound.</Pair>
</Ability>
<Ability id="traitthrowntogetherfashion-thrown-together-fashion-fn1-13" extraClasses="trait" icon={["battle-gear"]}>
<Pair single id="traitthrowntogetherfashion-thrown-together-fashion-fn1-13"><Link to="/trait/thrown_together_fashion">⮞</Link> Thrown-Together Fashion <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-1.13" id="main-traits_equipment-fake-fn-1.13" data-hash-target to="main-traits_equipment-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="benefit" id="traitthrowntogetherfashion-thrown-together-fashion-fn1-13-benefit">You can modify old clothing to make it effective in new circumstances. With a basic sewing kit or disguise kit, you can make a Disguise check to change one outfit into another outfit. The DC of this check is equal to 10 + the gp difference between costs of the outfits, as found in the <Link to="/main/equipment_misc">outfits' entries</Link>. The alteration takes 10 minutes per 1-gp difference in the cost of the outfits.</Pair>
</Ability>
<div style={{clear:"both"}}></div><Ability id="traitwellprovisionedadventurer-well-provisioned-adventurer-fn2-fn3" extraClasses="trait hasSubs" icon={["battle-gear"]}>
<Pair single id="traitwellprovisionedadventurer-well-provisioned-adventurer-fn2-fn3"><Link to="/trait/well_provisioned_adventurer">⮞</Link> Well-Provisioned Adventurer <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-2" id="main-traits_equipment-fake-fn-2" data-hash-target to="main-traits_equipment-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_equipment-fake-fn-3" id="main-traits_equipment-fake-fn-3" data-hash-target to="main-traits_equipment-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Equipment</Pair>
<Pair single="flavor" id="traitwellprovisionedadventurer-well-provisioned-adventurer-fn2-fn3-flavor">You always knew that one day you would leave your humble beginnings behind and become an adventurer, so you scrimped and saved, buying the necessary equipment one piece at a time until you had everything you needed. Select one of the equipment packages below.</Pair>
<Pair single="benefit" id="traitwellprovisionedadventurer-well-provisioned-adventurer-fn2-fn3-benefit">If you select this trait during character creation, you do not receive any starting gold.</Pair>
</Ability>
<Ability id="arcane-adept-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="arcane-adept-package">Arcane Adept Package</Pair>
<Pair single="flavor" id="arcane-adept-package-flavor">The arcane adept has collected useful magical gear to ensure her success on her adventures, and she prides herself on having just the right tool for the job. This equipment package is appropriate for an arcanist, sorcerer, witch, or wizard. Some bards and summoners might also find it attractive. This equipment package can also work for a magus if the 1st-level scrolls and wand are replaced with a masterwork melee weapon.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/light_crossbow">Light crossbow</Link> with 10 bolts, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/acid">Acid</Link> (2), <Link to="/spell/comprehend_languages">scrolls of comprehend languages</Link> (2), <Link to="/spell/detect_secret_doors">scroll of detect secret doors</Link>, <Link to="/spell/glitterdust">scroll of glitterdust</Link>, <Link to="/spell/identify">scrolls of identify</Link> (2), <Link to="/spell/mount">scroll of mount</Link>, <Link to="/spell/rope_trick">scroll of rope trick</Link>, <Link to="/eq-weapon/thunderstone">thunderstone</Link>, <Link to="/spell/mage_armor">wand of mage armor</Link> (16 charges).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/ink">ink</Link>, <Link to="/eq-misc/inkpen">inkpen</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/journal">journal</Link>, <Link to="/eq-misc/magnifying_glass">magnifying glass</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/scroll_box">scroll box</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, 3 gp.</Pair>
<Pair title="Total Weight">45 lbs. (28-3/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="blessed-warden-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="blessed-warden-package">Blessed Warden Package</Pair>
<Pair single="flavor" id="blessed-warden-package-flavor">A blessed warden is prepared to protect herself against the horrors of evil-aligned planes. This equipment package is suitable for clerics, druids, inquisitors, oracles, and paladins. The specific gear is appropriate for those visiting the chaotic evil Abyss but can be adjusted to suit other evil-aligned planes, such as swapping the scrolls of protection from chaos for scrolls of <Link to="/spell/protection_from_law">protection from law</Link> for a package designed for travel to Hell.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/chain_shirt">chain shirt</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-material/cold_iron">Cold iron</Link> <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/light_crossbow">light crossbow</Link> with 20 crossbow bolts.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/holy_water">Holy water</Link> (3), <Link to="/spell/cure_light_wounds">scrolls of cure light wounds</Link> (2), <Link to="/spell/protection_from_chaos">scrolls of protection from chaos</Link> (2), <Link to="/spell/protection_from_evil">scrolls of protection from evil</Link> (2), <Link to="/spell/remove_curse">scroll of remove curse</Link>.</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/common_shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, <Link to="/eq-misc/wooden_holy_symbol">wooden holy symbol</Link>, 13 gp.</Pair>
<Pair title="Total Weight">74 lbs. (44-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="corporeal-warrior-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="corporeal-warrior-package">Corporeal Warrior Package</Pair>
<Pair single="flavor" id="corporeal-warrior-package-flavor">Normal equipment is ill suited to fighting intangible foes, and a warrior bound for the Ethereal Plane must be prepared for incorporeal threats lurking in the ever-present mists. This equipment package is suitable for fighters and paladins. If the PC can cast spells, add a spell component pouch.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/breastplate">breastplate</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/heavy_crossbow">Heavy crossbow</Link> with 10 bolts, heavy mace, masterwork <Link to="/eq-weapon/longsword">longsword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link>, <Link to="/spell/mage_armor">potion of mage armor</Link>, <Link to="/spell/shield">potion of shield</Link>, <Link to="/spell/magic_weapon">oil of magic weapon</Link>.</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/common_shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, 10 gp.</Pair>
<Pair title="Total Weight">87 lbs. (48-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="daring-bravo-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="daring-bravo-package">Daring Bravo Package</Pair>
<Pair single="flavor" id="daring-bravo-package-flavor">The daring bravo is equally adept in social situations and combat, with the right equipment to move fluidly from one to the other. Such adventurers are known as much for their flair and panache as their martial prowess, and the daring bravo's equipment is often ornately ornamented or personalized. This equipment package is good for a bard, fighter, rogue, swashbuckler, or vigilante. Certain cavaliers, investigators, skalds, or even paladins may also find it appealing. If the PC can cast spells, add a spell component pouch.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/chain_shirt">chain shirt</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/light_crossbow">Light crossbow</Link> with 10 bolts, masterwork <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-material/alchemical_silver">alchemical silver</Link> <Link to="/eq-weapon/dagger">dagger</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/acid">Acid</Link> (2), <Link to="/eq-misc/alchemists_kindness">alchemist's kindness</Link>, <Link to="/spell/cure_light_wounds">potions of cure light wounds</Link> (2), <Link to="/eq-misc/sunrod">sunrods</Link> (3).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/wine_fine_bottle">bottle of fine wine</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/courtiers_outfit">courtier's outfit with 50 gp in jewelry</Link>, <Link to="/eq-misc/flask">flask</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/grooming_kit">grooming kit</Link>, <Link to="/eq-misc/masterwork_musical_instrument">masterwork musical instrument</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/mirror">mirror</Link>, <Link to="/eq-misc/perfume">perfume or cologne</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/signet_ring">signet ring</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, <Link to="/eq-misc/whetstone">whetstone</Link>, 5 gp.</Pair>
<Pair title="Total Weight">76-1/2 lbs. (40-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="holy-warrior-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="holy-warrior-package">Holy Warrior Package</Pair>
<Pair single="flavor" id="holy-warrior-package-flavor">The holy warrior is prepared to use her might and zeal to take the fight to the enemy, but she understands the importance of having the right equipment to overcome the resistances of her monstrous foes. This equipment package is well-suited to a cleric, inquisitor, paladin, warpriest, or even a fighter with a religious background. It's especially suited to characters who focus on supporting their party members and making them more effective in a fight. Even more than with other equipment packages, the GM should consider substituting the masterwork longsword in this package with a masterwork melee weapon appropriate to the PC's faith. If the PC can cast spells, add a spell component pouch.</Pair>
<Pair title="Armor"><Link to="/eq-armor/heavy_steel_shield">Heavy steel shield</Link>, masterwork <Link to="/eq-armor/breastplate">breastplate</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-material/cold_iron">Cold iron</Link> <Link to="/eq-weapon/morningstar">morningstar</Link>, <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link> with 10 bolts, masterwork <Link to="/eq-weapon/longsword">longsword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (3), <Link to="/eq-weapon/holy_water">holy water</Link> (4), <Link to="/spell/bless_weapon">oil of bless weapon</Link>, <Link to="/spell/cure_light_wounds">potions of cure light wounds</Link> (2), <Link to="/spell/protection_from_evil">potion of protection from evil</Link>, <Link to="/eq-misc/sunrod">sunrods</Link> (3).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/holy_symbol">holy symbol (silver)</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, 7 gp.</Pair>
<Pair title="Total Weight">102 lbs. (57-1/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="lore-seeker-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="lore-seeker-package">Lore Seeker Package</Pair>
<Pair single="flavor" id="lore-seeker-package-flavor">The lore seeker has the equipment necessary to delve into ancient ruins searching for lost knowledge. As this equipment package contains little by way of armor or weapons, it is most appropriate for alchemists, bards, monks, sorcerers, and wizards. If the PC can cast spells, add a spell component pouch and a holy symbol (if required).</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/light_crossbow">Light crossbow</Link> with 10 bolts, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-material/alchemical_silver">silver</Link> <Link to="/eq-weapon/dagger">dagger</Link>.</Pair>
<Pair title="Combat Gear">Alchemist's fire (3), <Link to="/eq-misc/antitoxin">antitoxin</Link>, <Link to="/spell/erase">oil of erase</Link>, <em>potions of cure light wounds</em> (2), <em>potion of protection from evil,</em> <Link to="/eq-weapon/tanglefoot_bag">tanglefoot bag</Link>, <Link to="/eq-weapon/thunderstone">thunderstone</Link>.</Pair>
<Pair title="Other Gear">Backpack, bedroll, belt pouch, candles (5), chalk (5 pieces), <Link to="/eq-misc/compass">compass</Link>, crowbar, <Link to="/eq-misc/everburning_torch">everburning torch</Link>, flint and steel, <Link to="/eq-weapon/grappling_hook">grappling hook</Link>, <Link to="/eq-misc/ink">ink</Link>, <Link to="/eq-misc/inkpen">inkpens (2)</Link>, <Link to="/eq-misc/journal">journals (2)</Link>, <Link to="/eq-misc/magnifying_glass">magnifying glass</Link>, <Link to="/eq-misc/mapmakers_kit">mapmaker's kit</Link>, mess kit, sack, <Link to="/eq-misc/signal_whistle">signal whistle</Link>, silk rope (50 ft.), trail rations (5 days), <Link to="/magic-wondrous/travelers_any_tool">traveler's any-tool</Link>, waterskin, 8 gp.</Pair>
<Pair title="Total Weight">44 lbs. (27-3/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="mystic-guide-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="mystic-guide-package">Mystic Guide Package</Pair>
<Pair single="flavor" id="mystic-guide-package-flavor">This equipment package is designed to provide the most aid to divine casters, such as clerics, druids, oracles, and inquisitors, who prefer to help their companions from behind the front lines of a fight.</Pair>
<Pair title="Armor"><Link to="/eq-armor/leather">Leather armor</Link>, <Link to="/eq-armor/light_wooden_shield">light wooden shield</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/shortspear">Shortspear</Link>, <Link to="/eq-weapon/sling">sling</Link> with 10 <Link to="/eq-weapon/sling_bullets">bullets</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-misc/antitoxin">Antitoxin</Link>, bead of blessing (as a <Link to="/magic-wondrous/lesser_strand_of_prayer_beads">lesser strand of prayer beads</Link> without the bead of healing), <Link to="/eq-weapon/holy_water">holy water</Link> (2), <Link to="/spell/cure_light_wounds">scrolls of cure light wounds</Link> (2), <Link to="/spell/endure_elements">scroll of endure elements</Link>.</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/healers_kit">healer's kit</Link>, <Link to="/eq-misc/holy_symbol">holy symbol (silver)</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/mirror">mirror</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/common_shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/smelling_salts">smelling salts</Link>, <Link to="/eq-misc/soap">soap</Link>, <Link to="/eq-misc/spell_component_pouch">spell component pouch</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, 4 sp.</Pair>
<Pair title="Total Weight">67 lbs. (39-1/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="planar-traveler-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="planar-traveler-package">Planar Traveler Package</Pair>
<Pair single="flavor" id="planar-traveler-package-flavor">This package equipment prepares planar travelers for the challenges of a variety of planar destinations. This package works particularly well for lightly armored combatants, such as bards and rogues. If the PC purchasing it can cast spells, add a spell component pouch as well.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/studded_leather">studded leather</Link>, <Link to="/eq-armor/light_wooden_shield">light wooden shield</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/composite_longbow">Composite longbow</Link> with 20 <Link to="/eq-weapon/arrow">arrows</Link>, masterwork <Link to="/eq-weapon/morningstar">morningstar</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (3), <Link to="/spell/air_bubble">potion of air bubble</Link>, <Link to="/spell/cure_light_wounds">potions of cure light wounds</Link> (2), <Link to="/spell/endure_elements">potions of endure elements</Link> (2).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/crowbar">crowbar</Link>, <Link to="/magic-wondrous/ioun_torch">ioun torch</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/common_shovel">shovel</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, 11 gp.</Pair>
<Pair title="Total Weight">75 lbs. (42-1/2 lbs. for a Small character).</Pair>
</Ability>
<Ability id="questing-knight-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="questing-knight-package">Questing Knight Package</Pair>
<Pair single="flavor" id="questing-knight-package-flavor">If not descended from nobility, the questing knight certainly looks like he fits the part. This equipment package is useful for cavaliers, fighters, and paladins. If the PC can cast spells, add a spell component pouch and a holy symbol (if required). If the PC gains a mount from a class feature, remove the horse from the list below and replace the lance with a masterwork lance.</Pair>
<Pair title="Armor"><Link to="/eq-armor/half_plate">Half-plate</Link>, <Link to="/eq-armor/heavy_wooden_shield">heavy wooden shield</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/javelin">Javelins</Link> (4), <Link to="/eq-weapon/lance">lance</Link>, <Link to="/eq-weapon/longsword">longsword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-misc/sunrod">Sunrods</Link> (2).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/banner">banner</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/flask">flask</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/pole">pole (10 ft.)</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/common_shovel">shovel</Link>, <Link to="/eq-misc/signet_ring">signet ring</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, <Link to="/eq-misc/whetstone">whetstone</Link>, 8 gp.</Pair>
<Pair title="Mount"><Link to="/eq-misc/heavy_horse_combat_trained">Heavy horse (combat trained)</Link> with <Link to="/eq-misc/bit_and_bridle">bit and bridle</Link>, <Link to="/eq-misc/military_saddle">military saddle</Link>, and <Link to="/eq-misc/saddlebags">saddlebags</Link>.</Pair>
<Pair title="Total Weight:">127-1/2 lbs. (73-3/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="shadowy-stalker-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="shadowy-stalker-package">Shadowy Stalker Package</Pair>
<Pair single="flavor" id="shadowy-stalker-package-flavor">Skulking through a city or a dungeon, the shadowy stalker is equipped to strike quickly and fade away. This equipment package is appropriate for stealthy characters such as rangers, rogues, and slayers, and for some bards and investigators. If the PC can cast spells, add a spell component pouch.</Pair>
<Pair title="Armor">Masterwork <Link to="/eq-armor/leather">leather armor</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-weapon/dagger">Daggers</Link> (3), masterwork <Link to="/eq-weapon/sickle">sickle</Link>, <Link to="/eq-weapon/sap">sap</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (3), smokesticks (2), <Link to="/eq-misc/sunrod">sunrods</Link> (2).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/bedroll">Bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/caltrops">caltrops</Link>, <Link to="/eq-misc/candle">candles (5)</Link>, <Link to="/eq-misc/chalk">chalk (5 pieces)</Link>, <Link to="/eq-misc/disguise_kit">disguise kit</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/glass_cutter">glass cutter</Link>, masterwork <Link to="/eq-misc/backpack">backpack</Link>, masterwork <Link to="/eq-misc/thieves_tools">thieves' tools</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/sack">sack</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/magic-wondrous/sleeves_of_many_garments">sleeves of many garments</Link>, <Link to="/eq-misc/trail_rations">trail rations (5 days)</Link>, <Link to="/eq-misc/waterskin">waterskin</Link>, 1 gp.</Pair>
<Pair title="Total Weight">63 lbs. (33-1/4 lbs. for a Small character).</Pair>
</Ability>
<Ability id="wilderness-wanderer-package" extraClasses="trait subTrait" icon={[]}>
<Pair single id="wilderness-wanderer-package">Wilderness Wanderer Package</Pair>
<Pair single="flavor" id="wilderness-wanderer-package-flavor">This equipment package is appropriate for any lightly-armored combatant in the wild, such as a barbarian, hunter, or ranger. If the PC can cast spells, add a spell component pouch and holly and mistletoe. The GM might consider altering which weapon is masterwork, based on the PC's specialization. For example, an archery-focused ranger might prefer a masterwork composite longbow over a masterwork greataxe.</Pair>
<Pair title="Armor"><Link to="/eq-armor/light_wooden_quickdraw_shield">Light wooden quickdraw shield</Link>, masterwork <Link to="/eq-armor/studded_leather">studded leather armor</Link>.</Pair>
<Pair title="Weapons"><Link to="/eq-material/cold_iron">Cold iron</Link> <Link to="/eq-weapon/heavy_flail">flail</Link>, <Link to="/eq-weapon/composite_longbow">composite longbow</Link> with 20 <Link to="/eq-weapon/arrow">arrows</Link>, masterwork <Link to="/eq-weapon/greataxe">greataxe</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>.</Pair>
<Pair title="Combat Gear"><Link to="/eq-weapon/alchemists_fire">Alchemist's fire</Link> (2), <Link to="/eq-misc/antitoxin">antitoxin</Link>, <Link to="/spell/keen_senses">potion of keen senses</Link>, <Link to="/eq-misc/sunrod">sunrods</Link> (3).</Pair>
<Pair title="Other Gear"><Link to="/eq-misc/backpack">Backpack</Link>, <Link to="/eq-misc/bedroll">bedroll</Link>, <Link to="/eq-misc/belt_pouch">belt pouch</Link>, <Link to="/eq-misc/chalk">chalk</Link> (5 pieces), <Link to="/eq-misc/climbers_kit">climber's kit</Link>, <Link to="/eq-misc/cold_weather_outfit">cold-weather outfit</Link>, <Link to="/eq-misc/fishhook">fishhook</Link>, <Link to="/eq-misc/flint_and_steel">flint and steel</Link>, <Link to="/eq-misc/mess_kit">mess kit</Link>, <Link to="/eq-misc/pole">pole</Link> (10 ft.), <Link to="/eq-misc/common_shovel">shovel</Link>, <Link to="/eq-misc/signal_whistle">signal whistle</Link>, <Link to="/eq-misc/silk_rope_50_ft">silk rope (50 ft.)</Link>, <Link to="/eq-misc/trail_rations">trail rations</Link> (5 days), <Link to="/eq-misc/waterskin">waterskin</Link>, 2 sp.</Pair>
<Pair title="Total Weight">108-1/2 lbs. (63-1/4 lbs. for a Small character).</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_equipment-label">Footnotes</h3><ol>
<li id="main-traits_equipment-fake-fn-1-target"><p><Link to="/source/adventurers_armory">Adventurer's Armory</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1" data-hash-target to="main-traits_equipment-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.2" data-hash-target to="main-traits_equipment-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.3" data-hash-target to="main-traits_equipment-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.4" data-hash-target to="main-traits_equipment-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.5" data-hash-target to="main-traits_equipment-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.6" data-hash-target to="main-traits_equipment-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.7" data-hash-target to="main-traits_equipment-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.8" data-hash-target to="main-traits_equipment-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.9" data-hash-target to="main-traits_equipment-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.10" data-hash-target to="main-traits_equipment-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.11" data-hash-target to="main-traits_equipment-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.12" data-hash-target to="main-traits_equipment-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_equipment-fake-fn-1.13" data-hash-target to="main-traits_equipment-fake-fn-1.13">↩<sup>13</sup></InnerLink></p></li>
<li id="main-traits_equipment-fake-fn-2-target"><p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_equipment-fake-fn-2" data-hash-target to="main-traits_equipment-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_equipment-fake-fn-3-target"><p><Link to="/source/adventurers_armory_2">Adventurer's Armory 2</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_equipment-fake-fn-3" data-hash-target to="main-traits_equipment-fake-fn-3">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_family = {title: "Family Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><Ability id="traitbetrayaloftrust-betrayal-of-trust-fn1" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traitbetrayaloftrust-betrayal-of-trust-fn1"><Link to="/trait/betrayal_of_trust">⮞</Link> Betrayal of Trust <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1" id="main-traits_family-fake-fn-1" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traitbetrayaloftrust-betrayal-of-trust-fn1-benefit"><p>If you have the trait <Link to="/trait/tight_bonds">Tight Bonds</Link>, you swap it for this trait at the moment you decide to betray the relationship. (You need not wait until you have actually committed an act of betrayal.) You gain a +2 trait bonus on Bluff checks, increasing to +4 on checks specifically made to conceal or deny your infidelity.</p>
<p>It is possible to regain the Tight Bonds trait, for either the same or a different relationship, but it requires substantial in-character work. The GM decides when this trait reverts back to the original one.</p>
</Pair>
</Ability>
<Ability id="traitbloodresonance-blood-resonance-fn1-2" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traitbloodresonance-blood-resonance-fn1-2"><Link to="/trait/blood_resonance">⮞</Link> Blood Resonance <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1.2" id="main-traits_family-fake-fn-1.2" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traitbloodresonance-blood-resonance-fn1-2-benefit">Select one racial, inherited template (such as half-dragon), or bloodline ability you can currently use at least three times each day. Once per day when you are within 60 feet of another character with this family trait who shares the race, template, or bloodline, you can use the selected ability without it counting against your normal daily limit.</Pair>
</Ability>
<Ability id="traitfamilyresemblance-family-resemblance-fn1-3" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traitfamilyresemblance-family-resemblance-fn1-3"><Link to="/trait/family_resemblance">⮞</Link> Family Resemblance <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1.3" id="main-traits_family-fake-fn-1.3" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traitfamilyresemblance-family-resemblance-fn1-3-benefit">You have some of the common, recognizable features of your family. You gain a +4 trait bonus on Diplomacy checks made to improve the attitude of a creature that has a friendly or helpful attitude toward another member of your family, and a +2 bonus on Disguise checks to look like a specific member of your family. You also take a -2 penalty on Disguise checks to look like anyone who is not a member of your family.</Pair>
</Ability>
<Ability id="traitfamilytrade-family-trade-fn1-4" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traitfamilytrade-family-trade-fn1-4"><Link to="/trait/family_trade">⮞</Link> Family Trade <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1.4" id="main-traits_family-fake-fn-1.4" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traitfamilytrade-family-trade-fn1-4-benefit">Choose one skill. All family members with this trait must choose the same skill and it is always a class skill for you. When you are within 60 feet of a family member with this trait, you gain a +2 trait bonus on checks with this skill.</Pair>
</Ability>
<Ability id="traithonorbound-honor-bound-fn1-5" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traithonorbound-honor-bound-fn1-5"><Link to="/trait/honor_bound">⮞</Link> Honor-Bound <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1.5" id="main-traits_family-fake-fn-1.5" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traithonorbound-honor-bound-fn1-5-benefit">The family's honor is tied to a shared goal binding you all together. With the aid of the GM, choose a task that your family is bound to accomplish. Once per day, when you are within 60 feet of another character with this trait, you can gain a +1 trait bonus on a single saving throw or skill check when progress toward the goal is directly at stake (at the GM's discretion).</Pair>
</Ability>
<Ability id="traitrivalry-rivalry-fn1-6" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traitrivalry-rivalry-fn1-6"><Link to="/trait/rivalry">⮞</Link> Rivalry <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1.6" id="main-traits_family-fake-fn-1.6" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traitrivalry-rivalry-fn1-6-benefit">If you see a family member with this trait within 60 feet of you fail a combat maneuver check or a skill check, you gain a +1 trait bonus on checks to perform the same combat maneuver or use the same skill for 1 round.</Pair>
</Ability>
<Ability id="traittightbonds-tight-bonds-fn1-7" extraClasses="trait" icon={["relationship-bounds"]}>
<Pair single id="traittightbonds-tight-bonds-fn1-7"><Link to="/trait/tight_bonds">⮞</Link> Tight Bonds <sup><InnerLink showBacklink="backlink-main-traits_family-fake-fn-1.7" id="main-traits_family-fake-fn-1.7" data-hash-target to="main-traits_family-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Family</Pair>
<Pair single="benefit" id="traittightbonds-tight-bonds-fn1-7-benefit">Whether siblings, spouses, or dedicated members of the same clan, characters who take this trait are an inseparable pair committed to each other. Your partner or partners must also have this trait. You gain a +1 trait bonus on Will saves against charm and compulsion effects if a partner is within 60 feet, increasing to +3 against a command to compromise your relationship or harm a partner.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_family-label">Footnotes</h3><ol>
<li id="main-traits_family-fake-fn-1-target"><p><Link to="/source/cohorts_and_companions">Cohorts and Companions</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1" data-hash-target to="main-traits_family-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1.2" data-hash-target to="main-traits_family-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1.3" data-hash-target to="main-traits_family-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1.4" data-hash-target to="main-traits_family-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1.5" data-hash-target to="main-traits_family-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1.6" data-hash-target to="main-traits_family-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_family-fake-fn-1.7" data-hash-target to="main-traits_family-fake-fn-1.7">↩<sup>7</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_mount = {title: "Mount Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><Ability id="traitblackasnight-black-as-night-fn1" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitblackasnight-black-as-night-fn1"><Link to="/trait/black_as_night">⮞</Link> Black as Night <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1" id="main-traits_mount-fake-fn-1" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a fell pony as a mount</Pair>
<Pair single="benefit" id="traitblackasnight-black-as-night-fn1-benefit">While astride a fell pony, you gain a +1 trait bonus on attack rolls against enemies you are flanking.</Pair>
</Ability>
<Ability id="traitburstofspeed-burst-of-speed-fn1-2" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitburstofspeed-burst-of-speed-fn1-2"><Link to="/trait/burst_of_speed">⮞</Link> Burst of Speed <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.2" id="main-traits_mount-fake-fn-1.2" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Dort charger as a mount</Pair>
<Pair single="benefit" id="traitburstofspeed-burst-of-speed-fn1-2-benefit">Three times per day, while riding a Dort charger and making a charge attack, you can increase your mount's speed by 15 feet as a free action.</Pair>
</Ability>
<Ability id="traitclevermount-clever-mount-fn2" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitclevermount-clever-mount-fn2"><Link to="/trait/clever_mount">⮞</Link> Clever Mount <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-2" id="main-traits_mount-fake-fn-2" data-hash-target to="main-traits_mount-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a mount</Pair>
<Pair single="benefit" id="traitclevermount-clever-mount-fn2-benefit">This mount can learn four tricks per point of Intelligence, instead of the typical three. Commanding the mount with the Handle an Animal use of the Handle Animal skill requires a successful DC 15 skill check instead of the usual DC 10, however, as it is willful and easily bored.</Pair>
</Ability>
<Ability id="traitcunningbreed-cunning-breed-fn1-3" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitcunningbreed-cunning-breed-fn1-3"><Link to="/trait/cunning_breed">⮞</Link> Cunning Breed <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.3" id="main-traits_mount-fake-fn-1.3" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Taldor jennet as a mount</Pair>
<Pair single="benefit" id="traitcunningbreed-cunning-breed-fn1-3-benefit">A Taldor jennet can learn a total of eight tricks when trained using the Handle Animal skill (as opposed to the standard six for having an Intelligence score of 2).</Pair>
</Ability>
<Ability id="traitfleetoffoot-fleet-of-foot-fn1-4" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitfleetoffoot-fleet-of-foot-fn1-4"><Link to="/trait/fleet_of_foot">⮞</Link> Fleet of Foot <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.4" id="main-traits_mount-fake-fn-1.4" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a chiardmar as a mount</Pair>
<Pair single="benefit" id="traitfleetoffoot-fleet-of-foot-fn1-4-benefit">While riding a chiardmar, you treat your mount's base speed as +10 feet faster for the purpose of using the run or withdraw actions.</Pair>
</Ability>
<Ability id="traitkeleshitetradecamel-keleshite-trade-camel-fn2-2" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitkeleshitetradecamel-keleshite-trade-camel-fn2-2"><Link to="/trait/keleshite_trade_camel">⮞</Link> Keleshite Trade Camel <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-2.2" id="main-traits_mount-fake-fn-2.2" data-hash-target to="main-traits_mount-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a camel as a mount</Pair>
<Pair single="benefit" id="traitkeleshitetradecamel-keleshite-trade-camel-fn2-2-benefit">Once per hour, a Keleshite trade camel can regurgitate the contents of its stomach, spitting the foul material at a single target within 10 feet as a ranged touch attack. The target must succeed at a Fortitude save (DC = 10 + half the camel's Hit Dice + the camel's Constitution modifier) or be nauseated for 1 round.</Pair>
</Ability>
<Ability id="traitluckyhound-lucky-hound-fn2-3" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitluckyhound-lucky-hound-fn2-3"><Link to="/trait/lucky_hound">⮞</Link> Lucky Hound <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-2.3" id="main-traits_mount-fake-fn-2.3" data-hash-target to="main-traits_mount-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a riding dog as a mount</Pair>
<Pair single="benefit" id="traitluckyhound-lucky-hound-fn2-3-benefit">Lucky hounds gain a +1 luck bonus on saves against spells or effects with the evil descriptor or which originate from evil outsiders or undead.</Pair>
</Ability>
<Ability id="traitmindspinmountaingoat-mindspin-mountain-goat-fn2-4" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitmindspinmountaingoat-mindspin-mountain-goat-fn2-4"><Link to="/trait/mindspin_mountain_goat">⮞</Link> Mindspin Mountain Goat <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-2.4" id="main-traits_mount-fake-fn-2.4" data-hash-target to="main-traits_mount-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a ram as a mount</Pair>
<Pair single="benefit" id="traitmindspinmountaingoat-mindspin-mountain-goat-fn2-4-benefit">Mindspin mountain goats gain a +2 trait bonus on Climb checks, and Climb is a class skill for them.</Pair>
</Ability>
<Ability id="traitrelentlessfortitude-relentless-fortitude-fn1-5" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitrelentlessfortitude-relentless-fortitude-fn1-5"><Link to="/trait/relentless_fortitude">⮞</Link> Relentless Fortitude <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.5" id="main-traits_mount-fake-fn-1.5" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Qadiran dromedary as a mount</Pair>
<Pair single="benefit" id="traitrelentlessfortitude-relentless-fortitude-fn1-5-benefit">Qadiran dromedaries heal nonlethal damage at a rate of 2 hit points per hour per Hit Die. This trait does not stack with other effects that increase a creature's rate of healing nonlethal damage.</Pair>
</Ability>
<Ability id="traitstalwartelk-stalwart-elk-fn1-6" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitstalwartelk-stalwart-elk-fn1-6"><Link to="/trait/stalwart_elk">⮞</Link> Stalwart Elk <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.6" id="main-traits_mount-fake-fn-1.6" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Chernasardo riding elk as a mount</Pair>
<Pair single="benefit" id="traitstalwartelk-stalwart-elk-fn1-6-benefit">While riding a Chernasardo riding elk, you gain a +4 trait bonus on Handle Animal, Ride, and <Link to="/ability/wild_empathy">wild empathy</Link> checks to resist another creature's unnatural aura.</Pair>
</Ability>
<Ability id="traitwarthog-warthog-fn2-5" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitwarthog-warthog-fn2-5"><Link to="/trait/warthog">⮞</Link> Warthog <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-2.5" id="main-traits_mount-fake-fn-2.5" data-hash-target to="main-traits_mount-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a boar as a mount</Pair>
<Pair single="benefit" id="traitwarthog-warthog-fn2-5-benefit">Warthogs are quicker than they look, with a base speed of 45 feet instead of the boar's 40 feet.</Pair>
</Ability>
<Ability id="traitwatertrained-water-trained-fn1-7" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitwatertrained-water-trained-fn1-7"><Link to="/trait/water_trained">⮞</Link> Water-Trained <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.7" id="main-traits_mount-fake-fn-1.7" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have a Lastwall jasper as a mount</Pair>
<Pair single="benefit" id="traitwatertrained-water-trained-fn1-7-benefit">Lastwall jaspers gain a +2 trait bonus on Swim checks, and Swim is a class skill for them.</Pair>
</Ability>
<Ability id="traitweatherbeaten-weather-beaten-fn1-8" extraClasses="trait" icon={["cavalry"]}>
<Pair single id="traitweatherbeaten-weather-beaten-fn1-8"><Link to="/trait/weather_beaten">⮞</Link> Weather-Beaten <sup><InnerLink showBacklink="backlink-main-traits_mount-fake-fn-1.8" id="main-traits_mount-fake-fn-1.8" data-hash-target to="main-traits_mount-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Mount</Pair>
<Pair title="Requirements" hl>Have an Erutaki husky as a mount</Pair>
<Pair single="benefit" id="traitweatherbeaten-weather-beaten-fn1-8-benefit">Erutaki huskies gain a +4 trait bonus on Fortitude saves to avoid nonlethal damage from cold environments, and only take a -2 penalty on Perception checks made in inclement weather such as rain or snow (instead of the usual -4 penalty).</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_mount-label">Footnotes</h3><ol>
<li id="main-traits_mount-fake-fn-1-target"><p><Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1" data-hash-target to="main-traits_mount-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.2" data-hash-target to="main-traits_mount-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.3" data-hash-target to="main-traits_mount-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.4" data-hash-target to="main-traits_mount-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.5" data-hash-target to="main-traits_mount-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.6" data-hash-target to="main-traits_mount-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.7" data-hash-target to="main-traits_mount-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_mount-fake-fn-1.8" data-hash-target to="main-traits_mount-fake-fn-1.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_mount-fake-fn-2-target"><p><Link to="/source/wilderness_origins">Wilderness Origins</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_mount-fake-fn-2" data-hash-target to="main-traits_mount-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_mount-fake-fn-2.2" data-hash-target to="main-traits_mount-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_mount-fake-fn-2.3" data-hash-target to="main-traits_mount-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_mount-fake-fn-2.4" data-hash-target to="main-traits_mount-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_mount-fake-fn-2.5" data-hash-target to="main-traits_mount-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_cosmic = {title: "Cosmic Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><Ability id="traitthethrush-the-thrush-fn1" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthethrush-the-thrush-fn1"><Link to="/trait/the_thrush">⮞</Link> The Thrush <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1" id="main-traits_cosmic-fake-fn-1" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 18 Kuthona and 20 Abadius</Pair>
<Pair single="benefit" id="traitthethrush-the-thrush-fn1-benefit">Like the curious songbirds that welcome weary travelers, your voice rings with sweet clarity. You gain a +1 bonus on Perform (sing) checks, and Perform (sing) becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitthelanternbearer-the-lantern-bearer-fn1-2" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthelanternbearer-the-lantern-bearer-fn1-2"><Link to="/trait/the_lantern_bearer">⮞</Link> The Lantern Bearer <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.2" id="main-traits_cosmic-fake-fn-1.2" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Abadius and 16 Calistril</Pair>
<Pair single="benefit" id="traitthelanternbearer-the-lantern-bearer-fn1-2-benefit">You are bathed in the light of the Lantern Bearer, who guides the Caravan through the darkest nights. You can cast <Link to="/spell/light">light</Link> three times per day as a spell-like ability, treating your character level as your caster level.</Pair>
</Ability>
<Ability id="traitthenewlyweds-the-newlyweds-fn1-3" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthenewlyweds-the-newlyweds-fn1-3"><Link to="/trait/the_newlyweds">⮞</Link> The Newlyweds <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.3" id="main-traits_cosmic-fake-fn-1.3" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 17 Calistril and 11 Pharast</Pair>
<Pair single="benefit" id="traitthenewlyweds-the-newlyweds-fn1-3-benefit">Your sign is of two lovers, intertwined as one. You gain a +2 bonus on Diplomacy checks to influence those who might be romantically attracted to you, and Diplomacy becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitthebridge-the-bridge-fn1-4" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthebridge-the-bridge-fn1-4"><Link to="/trait/the_bridge">⮞</Link> The Bridge <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.4" id="main-traits_cosmic-fake-fn-1.4" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 12 Pharast and 18 Gozran</Pair>
<Pair single="benefit" id="traitthebridge-the-bridge-fn1-4-benefit">The Bridge spans the rushing waters that separate the darkness of winter from the warmth of spring. You gain a +1 trait bonus on saving throws against spells and effects with the cold or darkness descriptors.</Pair>
</Ability>
<Ability id="traitthedaughter-the-daughter-fn1-5" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthedaughter-the-daughter-fn1-5"><Link to="/trait/the_daughter">⮞</Link> The Daughter <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.5" id="main-traits_cosmic-fake-fn-1.5" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 19 Gozran and 13 Desnus</Pair>
<Pair single="benefit" id="traitthedaughter-the-daughter-fn1-5-benefit">You are filled with the light-hearted joy of the Daughter, who dances her way into springtime. Every creature within 10 feet of you adds +2 moral bonuses to the DCs of checks to demoralize them.</Pair>
</Ability>
<Ability id="traittherider-the-rider-fn1-6" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traittherider-the-rider-fn1-6"><Link to="/trait/the_rider">⮞</Link> The Rider <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.6" id="main-traits_cosmic-fake-fn-1.6" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 14 Desnus and 20 Sarenith</Pair>
<Pair single="benefit" id="traittherider-the-rider-fn1-6-benefit">You are born under the auspice of the mounted caravan guard, whose very presence deters danger. Once per day, when you succeed at a Ride check, you can attempt an immediate Intimidate check against the nearest foe. If you fail this check, the DC of your next Intimidate check against that opponent does not increase (as it normally would).</Pair>
</Ability>
<Ability id="traitthepatriarch-the-patriarch-fn1-7" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthepatriarch-the-patriarch-fn1-7"><Link to="/trait/the_patriarch">⮞</Link> The Patriarch <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.7" id="main-traits_cosmic-fake-fn-1.7" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Sarenith and 20 Erastus</Pair>
<Pair single="benefit" id="traitthepatriarch-the-patriarch-fn1-7-benefit">Like the father of the Cosmic Caravan, you have an innate sense of direction. Three times per day, you can use <Link to="/spell/know_direction">know direction</Link> as a spell-like ability, treating your character level as your caster level.</Pair>
</Ability>
<Ability id="traitthewagon-the-wagon-fn1-8" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthewagon-the-wagon-fn1-8"><Link to="/trait/the_wagon">⮞</Link> The Wagon <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.8" id="main-traits_cosmic-fake-fn-1.8" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Erastus and 10 Arodus</Pair>
<Pair single="benefit" id="traitthewagon-the-wagon-fn1-8-benefit">Like the vehicle that conveys travelers across the heavens, you are blessed with extraordinary movement capabilities. Once per day as a swift action, you can increase you move speed by 10 feet for 1 round.</Pair>
</Ability>
<Ability id="traitthepack-the-pack-fn1-9" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthepack-the-pack-fn1-9"><Link to="/trait/the_pack">⮞</Link> The Pack <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.9" id="main-traits_cosmic-fake-fn-1.9" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 11 Arodus and 16 Rova</Pair>
<Pair single="benefit" id="traitthepack-the-pack-fn1-9-benefit">You are blessed by the beasts that trail the caravan, which represent protection in numbers. You gain a +2 trait bonus on Handle Animal checks to teach animals tricks, and Handle Animal becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitthemother-the-mother-fn1-10" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthemother-the-mother-fn1-10"><Link to="/trait/the_mother">⮞</Link> The Mother <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.10" id="main-traits_cosmic-fake-fn-1.10" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 17 Rova and 30 Lamashan</Pair>
<Pair single="benefit" id="traitthemother-the-mother-fn1-10-benefit">Granting warmth and comfort against the forbidding cold of the wilderness, the Mother is the heart of the Caravan. Allies within 10 feet of you gain a +1 morale bonus on saving throws to resist fear effects. This trait functions only while you are conscious.</Pair>
</Ability>
<Ability id="traitthestargazer-the-star-gazer-fn1-11" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthestargazer-the-star-gazer-fn1-11"><Link to="/trait/the_star_gazer">⮞</Link> The Star Gazer <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.11" id="main-traits_cosmic-fake-fn-1.11" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 31 Lamashan and 20 Neth</Pair>
<Pair single="benefit" id="traitthestargazer-the-star-gazer-fn1-11-benefit">With his head in the clouds, the Stargazer sees far-off events, but misses the pitfalls directly before him. When rolling initiative as part of a surprise round, you take a -2 penalty on initiative checks, but you gain a +2 luck bonus to AC during all surprise rounds.</Pair>
</Ability>
<Ability id="traitthestranger-the-stranger-fn1-12" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthestranger-the-stranger-fn1-12"><Link to="/trait/the_stranger">⮞</Link> The Stranger <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.12" id="main-traits_cosmic-fake-fn-1.12" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 21 Neth and 29 Neth</Pair>
<Pair single="benefit" id="traitthestranger-the-stranger-fn1-12-benefit">Like the lone traveler that walks alongside the caravan for but a brief while, you have a way with strangers. You gain a +1 trait bonus on Diplomacy and Knowledge (local) checks to gather information. Additionally, either Diplomacy or Knowledge (local) becomes a class skill for you.</Pair>
</Ability>
<Ability id="traitthefollower-the-follower-fn1-13" extraClasses="trait" icon={["night-sky"]}>
<Pair single id="traitthefollower-the-follower-fn1-13"><Link to="/trait/the_follower">⮞</Link> The Follower <sup><InnerLink showBacklink="backlink-main-traits_cosmic-fake-fn-1.13" id="main-traits_cosmic-fake-fn-1.13" data-hash-target to="main-traits_cosmic-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Cosmic</Pair>
<Pair title="Requirements" hl>Born between 30 Neth and 17 Kuthona</Pair>
<Pair single="benefit" id="traitthefollower-the-follower-fn1-13-benefit">You are born under the sign of the dark figure that trails the Caravan - the specter of death itself. You receive a +2 bonus on saving throws against death effects. All allies within 10 feet of you take a -1 penalty on saving throws against death effects.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_cosmic-label">Footnotes</h3><ol>
<li id="main-traits_cosmic-fake-fn-1-target"><p><Link to="/source/occult_mysteries">Occult Mysteries</Link> pg. 37 <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1" data-hash-target to="main-traits_cosmic-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.2" data-hash-target to="main-traits_cosmic-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.3" data-hash-target to="main-traits_cosmic-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.4" data-hash-target to="main-traits_cosmic-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.5" data-hash-target to="main-traits_cosmic-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.6" data-hash-target to="main-traits_cosmic-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.7" data-hash-target to="main-traits_cosmic-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.8" data-hash-target to="main-traits_cosmic-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.9" data-hash-target to="main-traits_cosmic-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.10" data-hash-target to="main-traits_cosmic-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.11" data-hash-target to="main-traits_cosmic-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.12" data-hash-target to="main-traits_cosmic-fake-fn-1.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_cosmic-fake-fn-1.13" data-hash-target to="main-traits_cosmic-fake-fn-1.13">↩<sup>13</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion = {title: "Religion Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItem className="mainItem basic"><IonLabel><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>Religion traits indicate that your character has an established faith in a specific deity; you need not be a member of a class that can wield divine magic to pick a religion trait, but you do have to have a patron deity and have some amount of religion in your background to justify this trait. Unlike the other categories of traits, religion traits can go away if you abandon your religion, as detailed under <Link to="/rule/restrictions_on_trait_selection">Restrictions on Trait Selection</Link>.</p>
</IonLabel></IonItem><IonItemDivider className="mainItem"><IonLabel>Major Religions by Alignment</IonLabel></IonItemDivider><MainLink to="/main/traits_religion_lg" bottom="Apsu, Erastil, Iomedae, Shizuru, Torag; 19 traits" info="Lawful Good Faiths" /><MainLink to="/main/traits_religion_ln" bottom="Abadar, Alseta, Irori, The Eternal Emperor; 13 traits" info="Lawful Neutral Faiths" /><MainLink to="/main/traits_religion_le" bottom="Achaekek, Asmodeus, Zon-Kuthon; 10 traits" info="Lawful Evil Faiths" /><MainLink to="/main/traits_religion_ng" bottom="Kurgess, Sarenrae, Shelyn; 18 traits" info="Neutral Good Faiths" /><MainLink to="/main/traits_religion_nn" bottom="Brigh, Gozrehx, Naderi, Nethys, Nivi Rhombodazzle, Pharasma, Sivanah, Green Faith, Mwangi shamanism; 21 traits" info="True Neutral Faiths" /><MainLink to="/main/traits_religion_ne" bottom="Norgorber, Urgathoa, Zyphus; 11 traits" info="Neutral Evil Faiths" /><MainLink to="/main/traits_religion_cg" bottom="Cayden Cailean, Desna, Milani; 12 traits" info="Chaotic Good Faiths" /><MainLink to="/main/traits_religion_cn" bottom="Bastet, Besmara, Calistria, Gorum, Groetus, Hanspur; 19 traits" info="Chaotic Neutral Faiths" /><MainLink to="/main/traits_religion_ce" bottom="Dahak, Ghlaunder, Gyronna, Lamashtu, Rovagug, Ydersius; 19 traits" info="Chaotic Evil Faiths" /><IonItemDivider className="mainItem"><IonLabel>Other Pantheons</IonLabel></IonItemDivider><MainLink to="/main/traits_religion_dwarven" bottom="Angradd, Folgrit, Droskar, etc; 24 traits" info="Dwarven Deities" /><MainLink to="/main/traits_religion_elven" bottom="Ketephys, Findeladlara, Yuelral; 7 traits" info="Elven Deities" /><MainLink to="/main/traits_religion_halfling" bottom="Thamir Gixx, Chaldira Zuzaristan; 7 traits" info="Halfling Deities" /><MainLink to="/main/traits_religion_empyreal_lords" bottom="Ragathiel, Vildeis, etc; 11 traits" info="Empyreal Lords" /><MainLink to="/main/traits_religion_goblin" bottom="Hadregash, Venkelvore, etc; 4 traits" info="Goblin Deities" /><MainLink to="/main/traits_religion_azlanti" bottom="Aroden, Lissala, Onos, etc; 8 traits" info="Old Azlanti Deities" /><MainLink to="/main/traits_religion_pantheons" bottom="Demon Lords, Elemental Lords, Great Old Ones, etc; 11 traits" info="Other Groupings" /></IonList>};
const _traits_regional = {title: "Regional Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItem className="mainItem basic"><IonLabel><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign</Link><br/>Regional traits are tied to particular regions, often specific nations, territories, or cities in a campaign. All regional traits are also collected into one table <Link to="/main/traits_regional_tabular">on this page</Link>.</p>
</IonLabel></IonItem><MainLink to="/main/traits_generic" bottom="desert, plains, urban, etc; 38 traits" info="Generic Regional Traits" /><MainLink to="/main/traits_north_central_avistan" bottom="Ustalav, Nirmathas, Belkzen, etc; 31 traits" info="North Central Avistan" /><MainLink to="/main/traits_north_west_avistan" bottom="Varisia, Irrisen, Linnorm Kings, etc; 52 traits" info="Northwestern Avistan" /><MainLink to="/main/traits_south_west_avistan" bottom="Cheliax, Nidal, etc; 30 traits" info="Southwestern Avistan" /><MainLink to="/main/traits_south_east_avistan" bottom="Andoran, Absalom, Taldor, etc; 47 traits" info="Southeastern Avistan" /><MainLink to="/main/traits_north_east_avistan" bottom="The Worldwound, Numeria, etc; 18 traits" info="Northeastern Avistan" /><MainLink to="/main/traits_river_kingdoms" bottom="Razmiran, Daggermark, etc; 29 traits" info="River Kingdoms" /><MainLink to="/main/traits_northwest_garund" bottom="Rahadoum, Thuvia, etc; 18 traits" info="Northwestern Garund" /><MainLink to="/main/traits_northeast_garund" bottom="Osirion, Katapesh, etc; 31 traits" info="Northeastern Garund" /><MainLink to="/main/traits_eye_of_abendego" bottom="The Shackles, Sodden Lands, Mediogalti, etc; 28 traits" info="Eye of Abendego" /><MainLink to="/main/traits_mwangi_expanse" bottom="(10 traits)" info="Mwangi Expanse" /><MainLink to="/main/traits_mana_wastes" bottom="Geb, Nex, etc; 14 traits" info="Mana Wastes" /><MainLink to="/main/traits_casmaron" bottom="Kelesh, Qadira, Jalmeray, etc; 21 traits" info="Casmaron" /><MainLink to="/main/traits_lung_wa" bottom="Chu Ye, Bachuan, Kaoling, etc; 25 traits" info="Former Lung Wa Empire" /><MainLink to="/main/traits_tian_xia" bottom="Hwanggot, Valashmai, Wall of Heaven, etc; 34 traits" info="Tian Xia" /><MainLink to="/main/traits_other" bottom="Anuli, Arcadia, Crown of the World; 5 traits" info="Other Places on Golarion" /><MainLink to="/main/traits_planet" bottom="Castrovel, Triaxus, etc; 7 traits" info="Other Planets" /><MainLink to="/main/traits_extraplanar" bottom="The Abyss, Elemental Planes, etc; 13 traits" info="Other Planes" /></IonList>};
const _traits_regional_tabular = {title: "All Regional Traits", jsx: <IonList lines="full"><MainLink to="/main/traits_regional" className="reversed" info="Back to Regional Traits" /><IonItem className="mainItem basic"><IonLabel><p>The <strong className="hl">Benefit</strong> column will give a brief description of the trait's benefits. It may use the following abbreviations:</p>
<div className="lastColumnStart">
<ScrollContainer id="main-traits_regional_tabular--table-0"><table>
<thead>
<tr>
<th>Abbrev.</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td>Acrb</td>
<td>Acrobatics</td>
</tr>
<tr>
<td>AoO</td>
<td>Attack of Opportunity</td>
</tr>
<tr>
<td>Appr</td>
<td>Appraise</td>
</tr>
<tr>
<td>att</td>
<td>attack rolls</td>
</tr>
<tr>
<td>att/dmg</td>
<td>attack rolls and damage rolls</td>
</tr>
<tr>
<td>Cft(any)</td>
<td>Craft (any)</td>
</tr>
<tr>
<td>chrm</td>
<td><Link to="/spelldef/charm">charm</Link> subschool</td>
</tr>
<tr>
<td>chrm/comp</td>
<td>charm and/or compulsion</td>
</tr>
<tr>
<td>Circ: <em>benefit</em></td>
<td><em>Benefit</em> only applies in specific circumstances</td>
</tr>
<tr>
<td>CL</td>
<td>Caster Level</td>
</tr>
<tr>
<td>comp</td>
<td><Link to="/spelldef/compulsion">compulsion</Link> subschool</td>
</tr>
<tr>
<td>Conc</td>
<td>Concentration</td>
</tr>
<tr>
<td>crit/crits</td>
<td>critical hit/hits</td>
</tr>
<tr>
<td>CS: <em>skill</em></td>
<td>Gain <em>skill</em> as a class skill</td>
</tr>
<tr>
<td>DiffT</td>
<td>Difficult terrain</td>
</tr>
<tr>
<td>Diplo</td>
<td>Diplomacy</td>
</tr>
<tr>
<td>Disg</td>
<td>Disguise</td>
</tr>
<tr>
<td>dmg</td>
<td>damage rolls</td>
</tr>
<tr>
<td>DsDv</td>
<td>Disable Device</td>
</tr>
<tr>
<td>elcty</td>
<td><Link to="/spelldef/electricity">electricity</Link> descriptor</td>
</tr>
<tr>
<td>ench</td>
<td><Link to="/spelldef/enchantment">enchantment</Link> school</td>
</tr>
<tr>
<td>EscAr</td>
<td>Escape Artist</td>
</tr>
<tr>
<td>HnAn</td>
<td>Handle Animal</td>
</tr>
<tr>
<td>Init</td>
<td>Initiative check</td>
</tr>
<tr>
<td>Intmd</td>
<td>Intimidate</td>
</tr>
<tr>
<td>K(a)</td>
<td>Knowledge (arcana)</td>
</tr>
<tr>
<td>K(d)</td>
<td>Knowledge (dungeoneering)</td>
</tr>
<tr>
<td>K(e)</td>
<td>Knowledge (engineering)</td>
</tr>
<tr>
<td>K(g)</td>
<td>Knowledge (geography)</td>
</tr>
<tr>
<td>K(h)</td>
<td>Knowledge (history)</td>
</tr>
<tr>
<td>K(l)</td>
<td>Knowledge (local)</td>
</tr>
<tr>
<td>K(nt)</td>
<td>Knowledge (nature)</td>
</tr>
<tr>
<td>K(nb)</td>
<td>Knowledge (nobility)</td>
</tr>
<tr>
<td>K(p)</td>
<td>Knowledge (planes)</td>
</tr>
<tr>
<td>K(r)</td>
<td>Knowledge (religion)</td>
</tr>
<tr>
<td>Know</td>
<td>Knowledge</td>
</tr>
<tr>
<td>Ling</td>
<td>Linguistics</td>
</tr>
<tr>
<td>m-a</td>
<td><Link to="/spelldef/mind_affecting">mind-affecting</Link> descriptor</td>
</tr>
<tr>
<td>Pcpn</td>
<td>Perception</td>
</tr>
<tr>
<td>Perf(any)</td>
<td>Perform (any)</td>
</tr>
<tr>
<td>Prfn(any)</td>
<td>Profession (any)</td>
</tr>
<tr>
<td>Prof(weapon)</td>
<td>Grants proficiency in the specified weapon</td>
</tr>
<tr>
<td>SLA</td>
<td>Spell-like Ability</td>
</tr>
<tr>
<td>SnMtv</td>
<td>Sense Motive</td>
</tr>
<tr>
<td>SoH</td>
<td>Sleight of Hand</td>
</tr>
<tr>
<td>SpCft</td>
<td>Spellcraft</td>
</tr>
<tr>
<td>Stlth</td>
<td>Stealth</td>
</tr>
<tr>
<td>Surv</td>
<td>Survival</td>
</tr>
<tr>
<td>su-ab</td>
<td>supernatural ability</td>
</tr>
<tr>
<td>telep</td>
<td><Link to="/spelldef/teleportation">teleportation</Link> subschool</td>
</tr>
<tr>
<td>UMD</td>
<td>Use Magic Device</td>
</tr>
<tr>
<td>Unt: <em>skill</em></td>
<td>Can attempt <em>skill</em> checks untrained</td>
</tr>
<tr>
<td>VCirc: <em>benefit</em></td>
<td><em>Benefit</em> only applies in <strong>very specific</strong> circumstances</td>
</tr>
</tbody></table></ScrollContainer>
</div>
</IonLabel></IonItem><IonItem className="mainItem basic"><IonLabel><DisplayTable table={{"id":"all regional traits table","columns":[{"header":"Trait","size":8.5,"align":"start","link":"trait"},{"header":"Benefit","size":10,"align":"start","unsortable":true},{"header":"Region","size":7,"align":"start"},{"header":"Other Requirements","size":8.5,"align":"start"}],"initialColumn":0,"nullValue":"","filter":[{"col":1,"has":["\\bAcrb\\b","\\bAoOs?\\b","\\bAppr\\b","\\batt\\b","\\batt/dmg\\b","\\bBluff\\b","\\bCft\\b","\\bCha\\b","\\bClimb\\b","\\bCMB\\b","\\bCMD\\b","\\bCon\\b","\\bConc\\b","\\bcrits?\\b","\\bCS:","\\bDex\\b","\\bDiplo\\b","\\bDisg\\b","\\bdmg\\b","\\bDsDv\\b","\\bEscAr\\b","\\bFortitude\\b","\\bHeal\\b","\\bHnAn\\b","\\bInit\\b","\\bInt\\b","\\bIntmd\\b","\\bK\\(a\\)","\\bK\\(d\\)","\\bK\\(e\\)","\\bK\\(g\\)","\\bK\\(h\\)","\\bK\\(l\\)","\\bK\\(nt\\)","\\bK\\(nb\\)","\\bK\\(p\\)","\\bK\\(r\\)","\\bKnow\\b","\\bLing\\b","\\bPcpn\\b","\\bPerf\\b","\\bPrfn\\b","\\bReflex\\b","\\bRide\\b","\\bSLAs?\\b","\\bSnMtv\\b","\\bSoH\\b","\\bspells?\\b","\\bSpCft\\b","\\bStlth\\b","\\bStr\\b","\\bSurv\\b","\\bSwim\\b","\\bUMD\\b","\\bWill\\b","\\bWis\\b"],"regex":true,"labels":["Acrb","AoO","Appr","att","att/dmg","Bluff","Cft","Cha","Climb","CMB","CMD","Con","Conc","crit/crits","CS:","Dex","Diplo","Disg","dmg","DsDv","EscAr","Fortitude","Heal","HnAn","Init","Int","Intmd","K(a)","K(d)","K(e)","K(g)","K(h)","K(l)","K(nt)","K(nb)","K(p)","K(r)","Know","Ling","Pcpn","Perf","Prfn","Reflex","Ride","SLA","SnMtv","SoH","spell","SpCft","Stlth","Str","Surv","Swim","UMD","Will","Wis"]}],"data":[[["Aballonian Resilience","aballonian_resilience"],"+4 saves vs cold environs; free cold-weather outfit","Aballon",null],[["Abendego Pilot","abendego_pilot"],"+2 Prfn(sailor); treat wind as 1 step lower","Eye of Abendego","Slyph"],[["Abendego Spellpiercer","abendego_spellpiercer"],"+2 Conc when spellcasting","The Sodden Lands",null],[["Aberration Hunter","aberration_hunter"],"+1 AoO vs aberrations","Shenmen",null],[["Abolitionist Hunter","abolitionist_hunter"],"+1 att vs abolitionists","Okeno",null],[["Absalom Hotspur","absalom_hotspur"],"+1 Init, K(l)","Absalom",null],[["Abyssal Eavesdropper","abyssal_eavesdropper"],"Speak Abyssal; -2 on skills using it; +2 instead if you learn it again","Sarkoris or The Worldwound",null],[["Accustomed to Trickery","accustomed_to_trickery"],"1/day reroll save vs fey's SLA or su-ab","Darkmoon Wood",null],[["Acolyte of Razmir","acolyte_of_razmir"],"+1/+2 K(l), K(r); CS: K(l) or K(r)","Razmiran",null],[["Acupuncturist","acupuncturist"],"+2 Fortitude vs poison","Chu Ye",null],[["Agent of the Sultana","agent_of_the_sultana"],"+2 DsDv vs fire traps, confirm crits vs fire creatures","Plane of Earth",null],[["Airship Captain","airship_captain"],"+2 driving checks, Wis checks in subjective gravity","Plane of Air",null],[["Akitonian Ferocity","akitonian_ferocity"],"1/day keep fighting below 0hp","Akiton",null],[["Alabaster Odalisque","alabaster_odalisque"],"+1 on two Cha-based skills; 1/day ignore Pcpn penalties through wall/*wbr*door","Jalmeray","Oread"],[["Alchemical Fence","alchemical_fence"],"+3 Diplo (gather info: alchemy, poison); greater chance of finding potions","Katapesh",null],[["Alchemical Prodigy","alchemical_prodigy"],"+1 level for durations of extracts","Thuvia",null],[["Alien Origins","alien_origins"],"+2 opposed Bluff; start with an odd compass","Silver Mount",null],[["Alkenstar Defender","alkenstar_defender"],"+1 confirm crits with ranged weapons","Mana Wastes",null],[["Alkenstar Engineer","alkenstar_engineer"],"With broken early firearm, misfire value increase is at -1","Mana Wastes",null],[["Altruistic Diplomat","altruistic_diplomat"],"+2 Diplo","Hwanggot","Good-aligned"],[["Analytical","analytical"],"+1 when you take 10 on a Know check","Ustalav",null],[["Ancestral Weapon","ancestral_weapon"],"Free mwk ‹eq-material/cold iron› or ‹eq-material/alchemical_>silver› melee weapon; +1 att w/that material","Numeria",null],[["Andoren Freedom Fighter","andoren_freedom_fighter"],"+1 att/dmg vs slavers","Andoran",null],[["Animal-Spirit Vitality","animal_spirit_vitality"],"Circ: +1 hp/die when casting healing spells","Kyonin",null],[["Antiquities Smuggler","antiquities_smuggler"],"+1 and CS: Appr, Bluff, or SoH","Osirion",null],[["Anuli Engineer","anuli_engineer"],"CS: K(e); +2 Pcpn (unusual stonework, traps, and hidden stone doors)","Anuli",null],[["Aquatic Survivalist","aquatic_survivalist"],"+2 Stlth underwater; 1/day hide in plain sight vs non-visual, non-scent sense","Plane of Water",null],[["Armun Kelisk Scholar","armun_kelisk_scholar"],"CS: K(p); +1/+3 K(p) and one more Know; more","Plane of Air",null],[["Artifact Hunter (ISP)","artifact_hunter_isp"],"+1 K(g), K(h); CS: K(g) or K(h)","Mwangi Expanse",null],[["Ash Bane","ash_bane"],"+2 Fortitude vs ash giant and vermin disease; +1 melee att vs vermin","wasteland",null],[["Aspiring Hellknight","aspiring_hellknight"],"+1 and CS: Intmd","Cheliax",null],[["Awakened from Stasis","awakened_from_stasis"],"Sleep for 2 hours to gain 8 hours of sleep","Apostae",null],[["Azlanti Scholar (HFtF)","azlanti_scholar_hftf"],"Speak Azlanti; +2 Appr, UMD vs Azlanti artifacts","Ironbound Archipelago","Cannot be an elf"],[["Balanced Education","balanced_education"],"1/day swap ability mod to one skill between Str/*wbr*Int, Dex/*wbr*Wis, Con/*wbr*Cha","Anuli",null],[["Bandit","bandit"],"+1 and CS: EscAr, Intmd or Stlth","River Kingdoms",null],[["Beachcomber","beachcomber"],"1/week use Surv and 8 hours to find valuables on the shore","coastal or river",null],[["Belem Pirate","belem_pirate"],"+1 Prfn(sailor), K(g); CS: Prfn(sailor) or K(g)","Minata",null],[["Bellflower Tiller","bellflower_tiller"],"+5 Surv in specific scenarios","Cheliax",null],[["Bellis Axe Master","bellis_axe_master"],"+2 confirm crit w/axe","Bellis",null],[["Bellis Honey Harvester","bellis_honey_harvester"],"DR 3/- vs swarms; +1 vs distraction and poison of swarms","Bellis",null],[["Bellis Log Roller","bellis_log_roller"],"+1 Acrb, CMD vs trip","Bellis",null],[["Betrayed Ex-Noble","betrayed_ex_noble"],"DC to Intmd you may be higher","City of Brass",null],[["Big Game Hunter","big_game_hunter"],"+1 dmg vs Large and bigger animals","Realm of the Mammoth Lords",null],[["Black Eagle Recruit","black_eagle_recruit"],"+1 vs fear; +3 vs evil outsider fear","Lambreth",null],[["Blackthorn Rancher","blackthorn_rancher"],"+1 and CS: HnAn; companion or mount gains +3hp","Lambreth",null],[["Blessed of the Norns","blessed_of_the_norns"],"+2 Pcpn (traps, ambushes); +1 AC vs traps and unaware surprise","Lands of the Linnorm Kings",null],[["Blighted Physiology","blighted_physiology"],"+1 natural armor; sickened 1 round from magical healing","Numeria",null],[["Blood Potion Brewer","blood_potion_brewer"],"2/day brew potion at +1 CL for duration","Belkzen",null],[["Blooded","blooded"],"+1 dmg vs giants, goblins, orcs","Mindspin Mountains",null],[["Border Guard","border_guard"],"+2 confirm crit vs aquatic","Kwanlai",null],[["Born under the Green Star","born_under_the_green_star"],"+1 CL for m-a spells, SLA","Castrovel",null],[["Bounty Hunter","bounty_hunter"],"+1 Surv (find, follow tracks), Pcpn (avoid surprise)","Isger",null],[["Brave Words","brave_words"],"1/when frightened: drop to shaken for 1 round w/swift action","Ninshaburian",null],[["Brevoy Bandit","brevoy_bandit"],"Choose non-Wis skill: add that ability mod to Prfn(choose one)","Mivon",null],[["Briar Bandit","briar_bandit"],"Overgrown areas: +2 Stlth, +1 dmg w/sneak attack","forest",null],[["Call of the Longships","call_of_the_longships"],"+1 Prfn(sailor), att onboard ships","Lands of the Linnorm Kings",null],[["Candidate for Perfection","candidate_for_perfection"],"+1 unarmed AoO","Jalmeray",null],[["Caravan Nomad","caravan_nomad"],"+1 Bluff, Perf; CS: Bluff or Perf","Varisia","Kitsune"],[["Carpenden Lobber","carpenden_lobber"],"+2 att w/thrown non-lethal-damage items","Carpenden",null],[["Carpenden Roof Runner","carpenden_roof_runner"],"+2 Acrb when 20ft+ above the ground","Carpenden",null],[["Cavern Survivor","cavern_survivor"],"CS: Surv; +2 Surv (subterranean wilderness)","Nar-Voth",null],[["Centaur Vengeance","centaur_vengeance"],"+2 vs dragons' frightful presence","Iobaria",null],[["Chainbreaker","chainbreaker"],"+1 various situations to rescue slaves","Andoran",null],[["Channel the Earth","channel_the_earth"],"Channel energy: +2 CMD vs bull rush, trip, reposition OR -2 CMD to same","Plane of Earth",null],[["Charau-Ka Slayer","charau_ka_slayer"],"+1 AC vs thrown weapons","Mwangi Expanse",null],[["Charmed Innocent","charmed_innocent"],"1/day roll Cha or Cha-based check twice","urban",null],[["Cheap to Feed","cheap_to_feed"],"+3 Bluff to gain food, water, or shelter","Osirion or Varisia","Halfling"],[["Chelish Guerrilla","chelish_guerrilla"],"+2 Know vs devils; +1 dmg vs devils","Cheliax",null],[["Child of Mumia","child_of_mumia"],"+1 saves vs curses, diseases","Osirion",null],[["Child of Wati","child_of_wati"],"+1 level to channel energy to hurt undead; cannot be higher than your character level","Osirion",null],[["Child of the Crusades (ISP)","child_of_the_crusades_isp"],"+2 saves vs fear","Mendev",null],[["Chillblight Emissary","chillblight_emissary"],"DR 1/cold iron; sickened 1 round if damaged by cold iron","Irrisen",null],[["Chilled by Brutality","chilled_by_brutality"],"+2 saves vs fear; +2 confirm crits vs giants","tundra",null],[["Chivalrous","chivalrous"],"+1 Diplo, K(h)","Taldor",null],[["Chosen Child","chosen_child"],"Your starting wealth is 900 gp","Po Li",null],[["Citizen of Eleder","citizen_of_eleder"],"+1 K(l), K(nb) regarding Eleder","Eleder",null],[["Citizen of Kalabuto","citizen_of_kalabuto"],"+1 K(l), K(h) regarding Kalabuto","Kalabuto",null],[["Clan Artisan","clan_artisan"],"+2 and CS: Cft(choose one)","Xa Hoi",null],[["Cliff Jumper","cliff_jumper"],"+1 Acrb, Climb; +1 Reflex to avoid falling","Cliffs of Fury",null],[["Cliff Strider","cliff_strider"],"Climb 5ft without provoking AoO","Arcadia",null],[["Cliff-Master","cliff_master"],"+1 Climb, Surv","Varisia","Goblin"],[["Cloistered Upbringing","cloistered_upbringing"],"+1 vs channeled energy, ki powers; +1 hp when healed by su-ab","urban",null],[["Clumsy Slave","clumsy_slave"],"Chance to deal nonlethal as a fake accident","Cheliax or Katapesh","Halfling"],[["Coin Hoarder","coin_hoarder"],"Starting wealth is 500 gp","Mindspin Mountains",null],[["Coincunning","coincunning"],"+2 Pcpn to notice valuables; auto-check when near any","Janderhoff",null],[["Cold Heart","cold_heart"],"+2 saves vs emotion","Cheliax","Hellknight"],[["Commercial Savvy","commercial_savvy"],"Able to buy and sell slightly higher","Katapesh",null],[["Community-Minded","community_minded"],"Morale you grant lasts 2 rounds extra","Rahadoum",null],[["Confidante to the Oppressed","confidante_to_the_oppressed"],"+2 Diplo vs slaves, imprisoned, etc","Andoran","Eagle Knight"],[["Conscientious Miner","conscientious_miner"],"+1 Appr, Prfn(miner); CS: Prfn(miner)","Jinin",null],[["Corpse Dodger","corpse_dodger"],"1/day modified ‹spell/hide from undead› as swift SLA","Ustalav",null],[["Cosmopolitan","cosmopolitan"],"+1 and CS: Ling","Goka",null],[["Cruel Master","cruel_master"],"+1 and CS: Intmd","Okeno",null],[["Crusader Road Acolyte","crusader_road_acolyte"],"Choose chaotic or evil: +1 vs those spells; +1 vs SLAs from those outsiders","Thornkeep or Echo Wood",null],[["Crusader Tactician","crusader_tactician"],"+1 K(e), K(nb); CS: K(e) or K(nb)","Lastwall",null],[["Cultist Lineage","cultist_lineage"],"+1 Intmd; draw light weapon(s) for free in surprise","Mediogalti Island",null],[["Cultivated","cultivated"],"Speak 1 additional language; Diplo (gather info) is faster in this language","urban",null],[["Cunning Liar","cunning_liar"],"Use Wis or Int for Bluff instead of Cha","urban",null],[["Curse Queller","curse_queller"],"+2 CL to remove afflictions; +1 vs curses","Osirion",null],[["Cynic","cynic"],"+1 and CS: SnMtv","Mendev",null],[["Cypher Resistance","cypher_resistance"],"+2 vs ‹main/glyph and »symbol spells›","Riddleport",null],[["Cyphermage Backer","cyphermage_backer"],"VCirc: 1/day +15 K(a) or K(h)","Riddleport",null],[["Darkblight Survivor","darkblight_survivor"],"+2 Fortitude vs diseases and poisons from fey, plants, forest hazards","Nirmathas",null],[["Darklands Delver","darklands_delver"],"+1 K(d); +1 Surv in Darklands; CS: K(d) or Surv","Darklands beneath Tian Xia",null],[["Debt to a Witch","debt_to_a_witch"],"+2 vs cold spells and cold weather","Irrisen",null],[["Demon Eradicator","demon_eradicator"],"+1 Will save DC on spells vs demons","Mendev",null],[["Demon-Proof Mind","demon_proof_mind"],"+2 saves vs m-a of evil outsiders","Sarkoris or The Worldwound",null],[["Demonbane Summoner","demonbane_summoner"],"Summoned creatures overcome DR as cold iron","The Worldwound",null],[["Desert Child","desert_child"],"+1 saves vs fire; +4 saves vs hot weather","Thuvia, desert",null],[["Destined for Greatness","destined_for_greatness"],"Free refillable kit of 300 gp or less","Absalom",null],[["Devilfish Diver","devilfish_diver"],"+2 vs poison","Mediogalti",null],[["Devotee of Kalistrade","devotee_of_kalistrade"],"+1 Appr; +1 Bluff vs Kalistrade nonbelievers","Druma",null],[["Diligence","diligence"],"Choose one specific Cft or Prfn skill: Take 20 in half the time","urban",null],[["Dinosaur Whisperer","dinosaur_whisperer"],"+1 K(nt), Surv, wild empathy vs dinosaurs","Mediogalti",null],[["Discerning Beliefs","discerning_beliefs"],"+2 to disbelieve illusions","Zi Ha",null],[["Div Hunter","div_hunter"],"+2 Know to identify divs; +1 dmg vs divs","Thuvia",null],[["Divine Deceiver","divine_deceiver"],"1/day change arcane spell to \"cure\" with temporary hit points","Razmiran",null],[["Dominator","dominator"],"+2 Intmd (demoralize)","Belkzen",null],[["Draconic Vigil","draconic_vigil"],"+1 Init vs dragons, orcs","Lastwall",null],[["Dreadful Forethought","dreadful_forethought"],"+1 K(nb), K(p)","Ustalav",null],[["Dtang Ma Bloodline","dtang_ma_bloodline"],"+1 level to specific sorcerer bloodline power","Dtang Ma",null],[["Dump Salvager","dump_salvager"],"+3 Pcpn to find concealed items","Westcrown",null],[["Dungeon Dweller","dungeon_dweller"],"Gain bonus darklands language; roll twice on Surv vs becoming lost","underground",null],[["Dusk Dancer","dusk_dancer"],"+2 Reflex in dim light, darkness","Nidal","Halfling"],[["Duskwalker Agent","duskwalker_agent"],"Double starting wealth; sell for 10% more, buy for 10% less","Katapesh",null],[["Eager Combatant","eager_combatant"],"+1 att on enemy ships","Riddleport",null],[["Educated Druggist","educated_druggist"],"+1 hp and +1 to bonus of alchemical remedies","Osibu, Thuvia, Tian Xia, or Ustalav",null],[["Egorian School Apprentice","egorian_school_apprentice"],"+2 K(e); VCirc: +2 Pcpn (traps, secret doors)","Egorian",null],[["Elemental Endowment","elemental_endowment"],"1/day gain temporary hp when you cast an elemental spell","Osirion",null],[["Elemental Pupil","elemental_pupil"],"Choose: acid, cold, elcty, fire; non-cantrip spells of that type deal +1 dmg","Qadira",null],[["Elemental Ties","elemental_ties"],"Speak elemental language; +1 Diplo vs elementals","Osirion",null],[["Elven Bitterness","elven_bitterness"],"+2 DC of enchantments you cast on chaotic evil outsiders","Kyonin",null],[["Emberkin Imposter","emberkin_imposter"],"+5 Disg to pretend to be aasimar; +2 Diplo vs those you fool","Qadira",null],[["Emissary","emissary"],"+2 Diplo vs aberrations, monstrous humanoids, undead, giants","Kaer Maga",null],[["Empathic Diplomat","empathic_diplomat"],"Diplo uses Wis mod, not Cha","Qadira or Osirion",null],[["Empyreal Cultist","empyreal_cultist"],"Speak Celestial; +1 Diplo vs good humanoids","Magnimar",null],[["Enchanted by Giants","enchanted_by_giants"],"+1 Surv, SpCft; can take 1o SpCft to identify SLAs","forest, jungle, or taiga",null],[["Enemy of the Undead","enemy_of_the_undead"],"+2 vs spells and SLAs of undead","Geb",null],[["Eoxian Experiment","eoxian_experiment"],"+1 vs pain effects; +1 vs SLAs of undead","Eox",null],[["Equality for All","equality_for_all"],"+2 CMB, CMD vs those 2+ sizes larger than you","Andoran","Halfling"],[["Erutaki Sky Reader","erutaki_sky_reader"],"1/day +2 to any save","Crown of the World",null],[["Evident Supporter","evident_supporter"],"VCirc: harder to use SnMtv against you","Galt",null],[["Exhibition Fighter","exhibition_fighter"],"+1 att/dmg in tournaments while following the rules","Lung Wa",null],[["Exiled Scholar","exiled_scholar"],"+1 K(a), K(r); Unt: choose one Know (DC 15 or lower)","Nex",null],[["Expert Smuggler","expert_smuggler"],"Frisking Pcpn vs your SoH doesn't get bonuses","Erages",null],[["Expert Swimmer","expert_swimmer"],"+1 and CS: Swim","River Kingdoms",null],[["Eye of the Falcon","eye_of_the_falcon"],"+1 vs illusion (phantasm); Circ: +1 SnMtv vs lies","Andoran","Eagle Knight"],[["Fangwood Diplomat","fangwood_diplomat"],"+1 and CS: Diplo","Nirmathas",null],[["Fangwood Insurgent","fangwood_insurgent"],"In forests: +1 Init, 1/day roll twice for Init","Nirmathas",null],[["Fey Hex","fey_hex"],"1/day re-attempt failed hex","Irrisen",null],[["Fey Mediator","fey_mediator"],"Speak Sylvan; CS: Bluff, Diplo, or K(nt)","Grungir Forest",null],[["Fey-Wise","fey_wise"],"+1 SLA/*wbr*supernatural of fey; +1 SnMtv vs fey","Sevenarches",null],[["Fiery Dominance","fiery_dominance"],"+1 Intmd vs humanoids not your subtype; +2 DC of Intmd vs them, too","Plane of Fire",null],[["Fight for Liberty","fight_for_liberty"],"1/day use Perf(oratory) to grant +2 att with unarmed and improvised","Andoran",null],[["Flotsam","flotsam"],"+2 Reflex vs fire","The Shackles",null],[["Footsteps of Aganhei","footsteps_of_aganhei"],"+1 Fortitude vs cold weather; CS: Surv; Speak Hallit, Hon-La, Minkaian, Skald, or Tien","Crown of the World",null],[["Forbidden Knowledge","forbidden_knowledge"],"Use K(h) or K(r) instead of K(p)","Geb",null],[["Fortune Found","fortune_found"],"+1 Appr, Diplo; CS: Appr or Diplo","Katapesh","Vanara"],[["Free Agent","free_agent"],"+2 Will vs chrm/comp","River Kingdoms",null],[["Free People","free_people"],"+1 SnMtv and Will saves vs m-a","Realm of the Mammoth Lords","Kellid"],[["Freed Slave (Andoran)","freed_slave_andoran"],"+1 Will saves","Andoran",null],[["Freed Slave (Katapesh)","freed_slave_katapesh"],"+1 Fortitude","Katapesh",null],[["Freedom Fighter (Andoran)","freedom_fighter_andoran"],"+2 and CS: Diplo; but -2 Diplo vs slavers","Andoran",null],[["Freedom Fighter (Shokuro)","freedom_fighter_shokuro"],"+1 att w/improvised weapons","Shokuro",null],[["Friend of the Dead","friend_of_the_dead"],"+2 Diplo vs undead","Geb",null],[["Friend of the Fey","friend_of_the_fey"],"+2 Diplo vs fey","Lands of the Linnorm Kings",null],[["Frontier-Forged","frontier_forged"],"+1 Pcpn, Surv (get along in the wild)","frontier",null],[["Frostborn","frostborn"],"+1 saves vs cold; +4 vs cold weather","Lands of the Linnorm Kings",null],[["Fruit Merchant","fruit_merchant"],"Buy/*wbr*sell mundane items w/10% bonus","jungle",null],[["Gallant Imposter","gallant_imposter"],"+1 K(nb), K(r); +2 Disg and Bluff to impersonate a knight","Mendev",null],[["Genie-Caller","genie_caller"],"1/day +2 CL to one conjuration (summoning) spell","Qadira",null],[["Ghost Survivor","ghost_survivor"],"+2 K(r) to identify incorporeal undead; +2 Fortitude vs negative levels","Ustalav",null],[["Ghoulish Affinity","ghoulish_affinity"],"+2 Pcpn to notice disguised undead; +2 vs disease, poison of undead","Darklands",null],[["Giant Ambivalence","giant_ambivalence"],"+1 Init, SnMtv; +2 Pcpn vs surprise","temperate highlands",null],[["Giant Dodger","giant_dodger"],"+3 Acrb to avoid AoO by moving","desert",null],[["Giant Investigator","giant_investigator"],"Retry K(l) or K(r) after 24 hours with +2 bonus; Unt: Know vs giants","coastal",null],[["Giant-Harried","giant_harried"],"+1 CMB, CMD vs giants","wasteland",null],[["Glory of Old","glory_of_old"],"+1 saves vs spells, SLAs, poison","Five Kings Mountains",null],[["Goblin Pirate","goblin_pirate"],"+1 Prfn(sailor), Swim; CS: Swim","The Shackles","Goblin"],[["Godless Resolve","godless_resolve"],"CS: Heal; +2 Heal to stabilize, stop bleeding","Bachuan, Rahadoum or Touvette","Bard"],[["Gold Goblin Regular","gold_goblin_regular"],"+1 Prfn(gambling); Circ: +2 Diplo (gather info)","Riddleport",null],[["Good Folk","good_folk"],"Circ: +2 Cha checks, Cha-based checks","urban",null],[["Gravelwalker","gravelwalker"],"Ignore DiffT (rubble, debris); can run/*wbr*charge through w/Acrb","Darklands",null],[["Greenskin Stalker","greenskin_stalker"],"+1 Bluff, Know, Pcpn, SnMtv, Surv vs/*wbr*about goblinoids; Unt: Know vs same","Isger, River Kingdoms, or Varisia",null],[["Grit Goggles","grit_goggles"],"Circ: +2 vs being blinded; halve environmental visual limits","Darklands",null],[["Guerilla","guerilla"],"+1 K(nt), Surv (rainforest); CS: K(nt) or Surv","Dtang Ma",null],[["Guerrilla Mender","guerrilla_mender"],"CS: Heal; grant +1 vs disease, posion w/Heal","Nirmathas",null],[["Heart of Clay","heart_of_clay"],"+1 Fortitude","Lingshen",null],[["Heavenly Touch","heavenly_touch"],"Stabilize the dying with a touch","Tianjing",null],[["Heir of Chu Ye","heir_of_chu_ye"],"Treat deadly wounds w/Heal easier","Tian Xia",null],[["Hermean Paragon","hermean_paragon"],"+2 Init","The Steaming Sea",null],[["Highlander","highlander"],"+1 and CS: Stlth; +2 Stlth in hilly, rocky areas","hills or mountains",null],[["Holy Tattoo","holy_tattoo"],"Holy symbol tattoo; +3 DC to ward off vampires","Varisia",null],[["Home Port","home_port"],"+2 Diplo (gather info) in chosen port","The Shackles",null],[["Honeyed Tongue","honeyed_tongue"],"+1 and CS: Diplo","Amanandar",null],[["Hongal Bloodrider","hongal_bloodrider"],"+1 HnAn, Ride","Hongal",null],[["Huldra's Luck","huldras_luck"],"1/day +1 on save, att, or skill check","Lands of the Linnorm Kings",null],[["Humble Beginnings","humble_beginnings"],"Gain ‹feat/Catch Off-Guard› with a specific item","Varisia",null],[["Hurricane Savvy","hurricane_savvy"],"Treat winds as one category less severe","The Shackles",null],[["Hwan Artist","hwan_artist"],"+1 and CS: Perf(choose one)","Hwanggot",null],[["Iadaran Illusionist","iadaran_illusionist"],"+1 Will vs illusions; +1 CL to illusions","Kyonin",null],[["Imperial Soldier","imperial_soldier"],"+1 and CS: Heal, Intmd, or Ride","Molthune",null],[["Indentured Blacksmith","indentured_blacksmith"],"+1 and CS: Cft(armor) or Cft(weapons)","Kaoling",null],[["Inspiring Speaker","inspiring_speaker"],"+1 Bluff, Diplo vs crowds of 10+ people","Galt",null],[["Instigator of Rebellion","instigator_of_rebellion"],"+1 Diplo, Intmd","Minkai",null],[["Intrepid Delver","intrepid_delver"],"+2 saves vs fear","Jinin",null],[["Iobarian Survivor","iobarian_survivor"],"Circ: +4 Fortitude vs disease","Iobaria",null],[["Iron Lungs","iron_lungs"],"‹misc/hold your breath› twice as long, +2 vs inhaled poison","Darklands",null],[["Iron Mind","iron_mind"],"+2 saves vs Int damage/*wbr*drain, memory loss","Cheliax","Hellknight"],[["Isger Fixer","isger_fixer"],"1/day remove broken condition for 24 hours","Isger","Halfling"],[["Isgeri Orphan","isgeri_orphan"],"+1 fortitude","Isger",null],[["Issian Noble","issian_noble"],"+1 K(nb), SnMtv","Brevoy",null],[["Jadwiga Medicine","jadwiga_medicine"],"VCirc: 1/day free Intmd (demoralize) at +2","Irrisen",null],[["Jungle Diplomat","jungle_diplomat"],"+1 Diplo, SnMtv","Valashmai Jungle",null],[["Jungle Guide","jungle_guide"],"+1 HnAn, Surv (jungle); CS: HnAn or Surv","Sargava",null],[["Jungle Native","jungle_native"],"+1 saves vs disease, poison; +1 Init (jungles); CS: Surv","Mwangi Expanse","Grippli"],[["Jungle Resilience","jungle_resilience"],"+2 Fortitude vs poison","Nagajor",null],[["Jungle Walker","jungle_walker"],"+2 Surv (jungle terrain)","Mwangi Expanse",null],[["Justiciar","justiciar"],"+1 Diplo, K(l) vs disputes, local law; more","Rahadoum",null],[["Kami Talker","kami_talker"],"+2 Diplo, Intmd vs outsider (native)","Forest of Spirits",null],[["Keeper of the Veil","keeper_of_the_veil"],"+1 Bluff, Disg; CS: Bluff or Disg","Qadira",null],[["Keleshite Trader","keleshite_trader"],"Speak two additional languages; +2 K(l)","Kelesh or Qadira",null],[["Kobold's Neighbor","kobolds_neighbor"],"+1 DsDv; +2 Pcpn (traps)","Andoran",null],[["Kwanlai Believer","kwanlai_believer"],"+2 Conc w/divine spells","Kwanlai",null],[["Kyonin Gatekeeper","kyonin_gatekeeper"],"+1 SpCft (identify telep); +1 CL casting telep; more","Kyonin","Elf"],[["Lair Snake","lair_snake"],"+1 Appr; +200 gp starting wealth","dragon's lair","Grew up with a dragon"],[["Lamasaran Performer","lamasaran_performer"],"1/day +1 DC of bardic performance","Thuvia",null],[["Lastwall Cavalry Rider","lastwall_cavalry_rider"],"+1 and CS: Ride","Lastwall",null],[["Left Behind","left_behind"],"+1 Diplo vs Forlorn elves, non-elf races.","Mwangi Expanse or Varisia","Elf"],[["Legalistic Liberation","legalistic_liberation"],"+1 Know to find legitimate ways to avoid, negate, or escape obligations","Molthune or Osirion","Halfling"],[["Lepidstadt Scar","lepidstadt_scar"],"+1 dodge AC vs crit confirmations","Ustalav",null],[["Lichblood","lichblood"],"+2 Diplo, Intmd vs Belkzen orcs","Belkzen","Orc, undead bloodrager bloodline"],[["Linebreaker","linebreaker"],"+10ft speed when charging","Belkzen",null],[["Lingshen's Finest","lingshens_finest"],"+1 to confirm crits","Lingshen",null],[["Lion's Audacity","lions_audacity"],"1/day charge to grant allies +2 att/dmg while charging","Taldor",null],[["Liquid Healing","liquid_healing"],"+2 hp from healing potions","Rahadoum",null],[["Local Know-It-All","local_know_it_all"],"+2 K(l) (community you've lived in for 5+ years)","Varisia",null],[["Log Roller","log_roller"],"+1 Acrb, vs CMD trip","forest",null],[["Lost Origins","lost_origins"],"CS: K(l); can always take 10 with K(l)","urban",null],[["Lost Role Model","lost_role_model"],"Gain free dungeon guide (max 2,750 gp, +2 bonus)","Taldor, or any town or village","Settlement near a famous dungeon"],[["Mammoth Master","mammoth_master"],"+2 HnAn vs mammoths, mastodons, woolly rhinos, megafauna","Realm of the Mammoth Lords",null],[["Mana Wastes Medic","mana_wastes_medic"],"+1 hp w/Heal (deadly wounds) and healing extracts","Mana Wastes",null],[["Mana Wastes Survivalist","mana_wastes_survivalist"],"+1 Fortitude","Mana Wastes",null],[["Master of Peaks","master_of_peaks"],"+2 Fortitude vs cold weather, altitude sickness","Wall of Heaven",null],[["Mechanical Expertise","mechanical_expertise"],"+1 and CS: Cft(any), DsDv, or K(e)","Alkenstar",null],[["Merabian Mentorship","merabian_mentorship"],"VCirc: Add potion spell to formula book","Thuvia","Suli"],[["Merchant of Katheer","merchant_of_katheer"],"+1 and CS: Appr","Qadira",null],[["Merchant's Child","merchants_child"],"+1 and CS: Appr","Katapesh",null],[["Militia","militia"],"+1 att while flanking","Amanandar",null],[["Militia Veteran","militia_veteran"],"+1 and CS: Prfn(soldier), Ride, or Surv","Taldor, or any town or village",null],[["Minkai Advocate","minkai_advocate"],"+1 and CS: Bluff","Minkai",null],[["Mivoni Duelist","mivoni_duelist"],"+1 dmg when fighting solo","Mivon",null],[["Mizu Ki Hikari Rebel","mizu_ki_hikari_rebel"],"+1 dmg w/unarmed attacks","Chu Ye",null],[["Monkey Goblin","monkey_goblin"],"+2 Acro and Climb while climbing trees","Mediogalti","Goblin"],[["Mordant Heritage","mordant_heritage"],"+1 Swim; +1 saves vs ench","The Steaming Sea",null],[["Mountain Guide","mountain_guide"],"CS: K(g); +1 K(g), Surv in mountains","Five Kings Mountains",null],[["Mutabi-qi Explorer","mutabi_qi_explorer"],"+1 K(g), Surv in desert","Shanguang",null],[["Mwangi Herbal Tradition","mwangi_herbal_tradition"],"CS: Heal; +4 Heal (long-term care)","Mwangi Expanse",null],[["Mwangi Linguist","mwangi_linguist"],"Speak Polyglot; Circ: +1 Ling","Mwangi Expanse",null],[["Naga Emissary","naga_emissary"],"Speak Vudrani; +1 and CS: Diplo","Jalmeray","Naga"],[["Narrow Escape","narrow_escape"],"+1 and CS: EscAr","The Shackles",null],[["Narrows Survivor","narrows_survivor"],"+1 and CS: SnMtv; +1 Init","Taldor",null],[["Naturalist","naturalist"],"+3 Surv (survive in wilderness)","Yamasa",null],[["Near-Death Experience","near_death_experience"],"+1 to stabilize; harder to kill","Belkzen",null],[["Necrotoxin Resistance","necrotoxin_resistance"],"+3 saves vs undead disease and poison","Geb",null],[["Nexian Corpse Hunter","nexian_corpse_hunter"],"+1 dmg w/spells vs undead","Nex",null],[["Nidalese Shadowcaster","nidalese_shadowcaster"],"+1 CL w/one spell with the shadow descriptor","Nidal",null],[["Nightstall Urchin","nightstall_urchin"],"+2 saves vs fear; when successful: +1 att, skills for 1 minute","Katapesh",null],[["Nightstalls Escapee","nightstalls_escapee"],"Sleep 4 hours to recover hp (instead of 8)","Katapesh","Ifrit"],[["Nirmathi Militia","nirmathi_militia"],"+1 and CS: Prfn(soldier), Ride, Survival","Nirmathas",null],[["Noble-in-Exile","noble_in_exile"],"+1 Diplo vs nobles; +1 Intmd vs commoners","Gralton",null],[["Numerologist","numerologist"],"1/day use Pcpn on trap to deduce DC of its DsDv, Reflex saves","Osirion",null],[["Oagan Diver","oagan_diver"],"+1 and CS: Swim","The Sodden Lands",null],[["Obsequious Morsel","obsequious_morsel"],"1/day ‹spell/sanctuary› as SLA vs undead","Geb",null],[["Observant Archer","observant_archer"],"+1 ranged att when target is +10ft above or below","aquatic",null],[["Oenopion Alchemist","oenopion_alchemist"],"+1 Cft(alchemy)","Nex",null],[["Offspring of the Ascension","offspring_of_the_ascension"],"+1 Will vs fear; reduce confusion duration by Wis modifier","Osirion",null],[["Open-Minded Explorer","open_minded_explorer"],"+1/+2 Diplo","Averaka",null],[["Orc Impaler","orc_impaler"],"+2/+3 crits while charging","Lastwall","Knight of Ozem"],[["Oregent Desperation","oregent_desperation"],"Take 4pts Int damage to trade dying for disabled","Oregent",null],[["Oregent Timing","oregent_timing"],"1/day +3 readied combat action triggered by ally","Oregent",null],[["Oregent Vandal","oregent_vandal"],"+2 dmg vs hardness","Oregent",null],[["Osirionologist","osirionologist"],"+1 K(e), K(h); CS: K(e) or K(h); Ancient Osiriani can be learned","Osirion",null],[["Outsea Native","outsea_native"],"+2 Know vs aquatic; lower penalty for Pcpn in murky water","River Kingdoms","Undine"],[["Palm Potion","palm_potion"],"+2 bonus to hide that you're drinking a potion","Razmiran",null],[["Paraheen Weaponsmith","paraheen_weaponsmith"],"+1 CL (making magic weapons); +1 Cft magic weapons, armor, shields","Qadira",null],[["Passionate Believer","passionate_believer"],"+1 saves vs divine spells","Po Li",null],[["Patron's Boon","patrons_boon"],"-4 DC of Heal checks to stop bleeding","Rahadoum",null],[["Pearl Diver (Xidao)","pearl_diver_xidao"],"+1 Appr, Swim","Xidao",null],[["Perseverance","perseverance"],"+3 extra Will saves for effects that allow multiple","Five Kings Mountains",null],[["Pesh Addict","pesh_addict"],"+1 Bluff, K(l), SnMtv; CS: one of those three; Half starting wealth","Katapesh",null],[["Pesh Dealer","pesh_dealer"],"+1 and CS: SoH","Katapesh",null],[["Pirate Duelist","pirate_duelist"],"+1 AoO w/dagger, short sword, cutlass, rapier, scimitar, hook hand","Mediogalti",null],[["Pitaxian Improvisation","pitaxian_improvisation"],"1/day use Bluff instead of Perf (after you roll Perf)","Pitax",null],[["Plainsman","plainsman"],"+1 K(g), Surv regarding the M'neri Plains","M'neri Plains",null],[["Planar Negotiator (DHH)","planar_negotiator_dhh"],"Circ: +1/+2 Diplo, SnMtv vs outsider","The Abyss",null],[["Poison Connoisseur","poison_connoisseur"],"+2 vs ingested poison; 1/day ‹spell/detect poison› as SLA","Taldor",null],[["Poisoned Blade Resistance","poisoned_blade_resistance"],"+2 Fortitude vs injury poison; immune to one such poison","River Kingdoms",null],[["Pomp and Pageantry","pomp_and_pageantry"],"Spend twice the time to gain +1 on Acrb, Diplo, HnAn, Intmd, Perf, Ride (if class skill)","Taldor","Halfling"],[["Precocious Spellcaster","precocious_spellcaster"],"+1 CL to one 0-level and one 1-level spell","Taldor",null],[["Prestigious Healer","prestigious_healer"],"VCirc: 1/day +2 Diplo","Cheliax",null],[["Pretend Pirate","pretend_pirate"],"+2 Disg (pirate or merchant sailor); more","Andoran",null],[["Prismati Player","prismati_player"],"+1 att w/fist-sized rocks; +1 Conc","Andoran",null],[["Privileged Slave","privileged_slave"],"+1 and CS: Bluff","Kaoling",null],[["Prophet of Burrows","prophet_of_burrows"],"+5% money when you roll skill check to earn money","Druma","Ratfolk"],[["Purchased Loyalty","purchased_loyalty"],"Circ: 1/day roll twice vs chrm","Druma",null],[["Pure Legion Recruit","pure_legion_recruit"],"+2 Pcpn, SnMtv regarding hidden religious targets","Rahadoum",null],[["Quain Martial Artist","quain_martial_artist"],"+1 dmg with unarmed strikes","Quain",null],[["Quantium University Graduate","quantium_university_graduate"],"+2 Conc when casting arcane spells","Nex",null],[["Rabble Rebel","rabble_rebel"],"+2 Bluff (feint) and SoH vs target threatened by 3+ allies","Galt","Halfling"],[["Rahadoumi Cultist","rahadoumi_cultist"],"Circ: +5 Bluff (receive secret message), SnMtv (intercept secret message)","Rahadoum",null],[["Rahadoumi Disbeliever","rahadoumi_disbeliever"],"+2 saves vs divine spells; must always attempt such saves","Rahadoum",null],[["Rebel Leader","rebel_leader"],"+1 Leadership score","Shokuro",null],[["Regional Influence","regional_influence"],"+1 Prfn(pick one); extra bonus from city","Varisia",null],[["Regional Recluse","regional_recluse"],"+1 Surv; extra bonus from city","Varisia",null],[["Resourceful Alchemy","resourceful_alchemy"],"+2/+3 Cft(alchemy)","Thuvia",null],[["Resourceful Scavenger","resourceful_scavenger"],"+2 Pcpn (looking for valuables); CS: Appr","Numeria",null],[["Rice Runner","rice_runner"],"+1 and CS: Acrb","Wanshou",null],[["Rider of Paresh","rider_of_paresh"],"+10ft when making mounted charge","Qadira","Mounted Combat feat"],[["River Navigator","river_navigator"],"+1 Surv or Prfn(sailor) w/lakes, rivers; CS: Surv or Prfn(sailor)","River Kingdoms",null],[["River Rat","river_rat"],"+1 dmg with dagger; +1 and CS: Swim","swamp or river",null],[["River Sniper","river_sniper"],"+1 ranged att on boats, ships, etc","River Kingdoms",null],[["Riverfolk","riverfolk"],"+2 Prfn(sailor) and rope skill checks","River Kingdoms",null],[["Roof Racer","roof_racer"],"Long jumps are easier for you to make (Arcb)","Korvosa",null],[["Runaway Slave","runaway_slave"],"+1 saves vs fear; gain low-light vision","Osirion, Thuvia, or Darklands-adjacent",null],[["Sargavan Guard","sargavan_guard"],"Reduce ACP of armor by 1","Sargava",null],[["Savage Breaker","savage_breaker"],"+2 CMB to sunder \"primitive\" armor, weapons","Korvosa",null],[["Savanna Child","savanna_child"],"+1 and CS: HnAn, K(nt), or Ride","Katapesh, plains",null],[["Scion of Goblinblood","scion_of_goblinblood"],"+1 dmg within 60ft of a hobgoblin foe","Isger","Goblin"],[["Scion of the Shory","scion_of_the_shory"],"+2 Conc for flying spells; 1/day ‹spell/message› as SLA","Mwangi Expanse",null],[["Scourge of the Seas","scourge_of_the_seas"],"+1 Intmd w/whip/*wbr*scourge; regain grit/*wbr*panache w/disarm/*wbr*trip w/whip/*wbr*scourge","The Shackles",null],[["Scrambling Servant","scrambling_servant"],"+1 Climb; retain Dex bonus to AC while climbing","mountains",null],[["Screaming Leap","screaming_leap"],"+1 dmg when charging from higher ground; 1/day Intmd (demoralize) swift","Realm of the Mammoth Lords",null],[["Sea-Souled","sea_souled"],"+1 Swim; can always take 10 on Swim","coastal or island",null],[["Seasoned Climber","seasoned_climber"],"+1 and CS: Climb","Wall of Heaven",null],[["Secret Revolutionary","secret_revolutionary"],"+1 Will vs m-a; +1 Fortitude vs drugs, poison","Cheliax",null],[["Secret of the Impossible Kingdom","secret_of_the_impossible_kingdom"],"+1 CL to one specific spell","Jalmeray",null],[["Servitor of Spirits","servitor_of_spirits"],"Gain daily bonus from a medium spirit","Tian Xia",null],[["Sevenarches Seeker","sevenarches_seeker"],"+1 and CS K(h); +1 Pcpn (notice secret doors)","Sevenarches",null],[["Shackles Seafarer","shackles_seafarer"],"+1 K(nt), K(g) while on the ocean; +1 and CS: Swim","The Shackles",null],[["Shadow Dealer","shadow_dealer"],"+1 vs fear; +1 Bluff and Diplo vs evil fey, monstrous humanoids, undead","Ustalav",null],[["Shadow Dissident","shadow_dissident"],"+2 on saves vs shadow descriptor spells","Nidal",null],[["Shadow Shaman","shadow_shaman"],"Add ‹spell/silent image› and ‹spell/blur› to your shaman spell list","Nidal",null],[["Shadowsight","shadowsight"],"1/day gain low-light vision","Nidal",null],[["Shaer","shaer"],"+2 Bluff, Diplo vs those fluent in Kelish","Qadira","Kelish"],[["Sharp Eyes","sharp_eyes"],"You are immune to the dazzled condition","tundra",null],[["Shenmen Prospector","shenmen_prospector"],"+1 Appr, K(d)","Shenmen",null],[["Ship Aptitude","ship_aptitude"],"+1 and CS: Prfn(sailor)","The Shackles",null],[["Shipboard Caster","shipboard_caster"],"+3 Conc while on ships","Riddleport",null],[["Shoanti Tribesman","shoanti_tribesman"],"+1 and CS: Climb, Surv, or Swim","Varisia",null],[["Signaler","signaler"],"+5 Bluff (receive secret message), SnMtv (intercept secret message)","Molthune",null],[["Silent Watcher","silent_watcher"],"+1 SnMtv in crowds; +1 Stlth in city streets","Galt",null],[["Silvertongued Eunuch","silvertongued_eunuch"],"+1 K(nb), Diplo","Quain",null],[["Skilled Surgeon","skilled_surgeon"],"+1 result when using Heal (long term care); more","Qadira or Ustalav",null],[["Sky Spirit Worshipper","sky_spirit_worshipper"],"+2 saves vs fear","Mutabi-qi",null],[["Skymetal Affinity","skymetal_affinity"],"+2 Fortitude vs ‹eq-material/skymetal«s›, +2 Cft (weapons, armor) w/skymetals","Numeria",null],[["Slave Taker","slave_taker"],"+1 nonlethal dmg in combat","Okeno",null],[["Slayer of the Deep","slayer_of_the_deep"],"+1 dmg vs aberrations","Darklands beneath Tian Xia",null],[["Snake Bleeder","snake_bleeder"],"CS: Cft(alchemy); +2 Cft(alchemy) to brew poison","Nagajor",null],[["Snake Handler","snake_handler"],"CS: HnAn; +2 Fortitude vs poison","Osirion","Worships Apep or Wadjet"],[["Snowstride","snowstride"],"+1 Arcb (slippery surfaces); trip/*wbr*bull rush larger creatures","Darklands",null],[["Social Slaver","social_slaver"],"+2 Intmd vs those smaller than you; +1 DC comp vs same","Cheliax",null],[["Sodden Chld","sodden_chld"],"Ignore shallow bogs DiffT","The Sodden Lands",null],[["Soldier of the Faith","soldier_of_the_faith"],"+1 and CS: Intmd","Razmiran",null],[["Solidarity","solidarity"],"Grant +3 w/aid another on Bluff, EscAr","City of Brass",null],[["Sophisticated Citizen","sophisticated_citizen"],"CS: K(g), K(l), or SnMtv; Speak one extra bonus language","Absalom",null],[["Sound of Mind","sound_of_mind"],"+2 saves vs m-a","Zi Ha",null],[["Spell Duel Prodigy","spell_duel_prodigy"],"+2 for some counterspell-related checks","Erages",null],[["Spirit Animal","spirit_animal"],"+1 to Fortitude, Reflex, or Will","Realm of the Mammoth Lords",null],[["Spiritual Forester","spiritual_forester"],"+1 K(nt), K(p); CS: K(nt) or K(p)","Forest of Spirits",null],[["Star Reader","star_reader"],"Under starlight: +1/+2 CL to divination spells","The Sodden Lands",null],[["Stargazer (Region)","stargazer_region"],"+1 K(a), K(nt); CS: K(a) or K(nt)","Lirgen",null],[["Storm Hunter","storm_hunter"],"Treat wind as lower for normal ranged attacks","Hongal",null],[["Stormrunner","stormrunner"],"+2 Arcb to keep footing on unstable surfaces","The Shackles",null],[["Stream Nomad","stream_nomad"],"+1 and CS: Swim; +4 miles/day to some water vessels","Darklands",null],[["Street Wary","street_wary"],"+2 SnMtv (gain a hunch); CS: SnMtv","urban",null],[["Suck in Your Gut","suck_in_your_gut"],"Move normally while squeezing, only -2 penalty to att and AC","Darklands",null],[["Sun Orchid Harvester","sun_orchid_harvester"],"+1 K(nt), Surv (desert environs)","Thuvia",null],[["Sun-Blasted","sun_blasted"],"+2 Surv (desert), +4 (avoid becoming lost)","desert",null],[["Superstitious (ISP)","superstitious_isp"],"Circ: +1 saves vs arcane spells","Realm of the Mammoth Lords",null],[["Superstitious Ward","superstitious_ward"],"1/day ‹spell/disrupt undead› as SLA","Ustalav",null],[["Surefooted Ascent","surefooted_ascent"],"+1 Acrb, Climb","hills or mountains",null],[["Surface Stranger","surface_stranger"],"-10% miss chance from darkness; dazzled 1 round in bright light","underground",null],[["Sustaining Performance","sustaining_performance"],"1/day use Perf(verbal) to stabilize the dying; use Perf (not Heal) for long-term care","The Shackles","Bard"],[["Swamp Rebel","swamp_rebel"],"+2 Stlth (swampy terrain); CS: Stlth","Wanshou",null],[["Swamp Recluse","swamp_recluse"],"+2 saves vs poison; can eat raw fish, game","swamp",null],[["Swamp Skulker","swamp_skulker"],"+1 Stlth (swampy terrain), ignore some DiffT in swamps","River Kingdoms",null],[["Swamp Survivor","swamp_survivor"],"+2 Surv (find water); +2 prevent liquids from being corrupted","Ustalav",null],[["Swordlord's Page","swordlords_page"],"+1 confirm crits w/proficient edged weapon","Brevoy",null],[["Szaezan Crags Miner","szaezan_crags_miner"],"+1 and CS: Appr","Bachuan",null],[["Tanglebriar Guerrilla","tanglebriar_guerrilla"],"1/day use ranger trap in a forest","Kyonin",null],[["Technic Tinkerer","technic_tinkerer"],"1/day cast chosen 0-level spell as SLA","Numeria",null],[["Technological Brewmaster","technological_brewmaster"],"Spend 10% more to brew potions in half the time","Numeria",null],[["The Vessel Between","the_vessel_between"],"+1 att that could deal sneak attack damage","Daggermark",null],[["Thoughtful Wish-Maker","thoughtful_wish_maker"],"+2 SnMtv; can use SnMtv to see pitfalls in *wishes*","Plane of Fire",null],[["Thuvian Merchant","thuvian_merchant"],"+1 Appr, Bluff, SnMtv for business deals and transactions","Thuvia",null],[["Tianjing Temple Guard","tianjing_temple_guard"],"+1 AoO with polearms","Tianjing",null],[["Tiger Brigadier","tiger_brigadier"],"CS: Intmd; +2 Intmd vs older age categories","Bachuan",null],[["Touched by the Sky","touched_by_the_sky"],"Stabilize the dying with a touch","Numeria",null],[["Town Gossip","town_gossip"],"+2 Diplo in community you've lived 5+ years in","Varisia",null],[["Trap Savvy","trap_savvy"],"+1 Cft(traps), saves vs traps, AC vs traps","Darklands",null],[["Treasure Mapper","treasure_mapper"],"+2 Surv, Prfn(sailor) with a map/*wbr*chart; CS: Surv or Prfn(sailor)","Mediogalti",null],[["Treerazer's Bane","treerazers_bane"],"+2 dmg vs demons, evil fey, plants and animals corrupted by evil","Kyonin",null],[["Trench Navigator","trench_navigator"],"+1 K(g), Prfn(sailor); CS: K(g) or Prfn(sailor)","Xidao",null],[["Triaxian Tradition","triaxian_tradition"],"+2 vs cold spells, SLA OR +2 vs disease, disease spells, SLA","Triaxus",null],[["True Name Caller","true_name_caller"],"Choose plane: halve research time and +4 K(p) to find a true name","The Abyss",null],[["Tundra Child","tundra_child"],"+4 saves vs cold weather; +1 saves vs cold effects","tundra or other cold regions",null],[["Unafraid","unafraid"],"+2 saves vs fear","Ustalav",null],[["Underbridge Dweller","underbridge_dweller"],"CS: Pcpn; +2 Pcpn in dim light","Magnimar",null],[["Undermarket Smuggler","undermarket_smuggler"],"+1 bluff, SoH","Goka",null],[["Unflinching Faith","unflinching_faith"],"1/day reroll Will save vs undead","Nidal",null],[["Unstuck","unstuck"],"+2 CL to cast telep spells","Uringen",null],[["Uskwood Hunter","uskwood_hunter"],"+1 and CS: Stlth","Nidal",null],[["Ustalavic Noble","ustalavic_noble"],"+1 Diplo, K(nb); +100 gp starting wealth","Ustalav",null],[["Uwaga Highlander","uwaga_highlander"],"+1 Stlth; +2 in rocky/*wbr*hilly areas","Katapesh",null],[["Vagabond Child","vagabond_child"],"+1 and CS: DsDv, EscAr, or SoH","urban",null],[["Valashmai Veteran","valashmai_veteran"],"+1 Pcpn; +1 Surv in jungles; CS: Pcpn or Surv","Valashmai Jungle",null],[["Valknar Alumnus","valknar_alumnus"],"+1 performance combat; +1 CMB (pick one maneuver)","Tymon",null],[["Varisian Wanderer","varisian_wanderer"],"+1 and CS: Perf(choose one), Prfn(fortune-teller), or SoH","Varisia",null],[["Venicaan Medic","venicaan_medic"],"CS: Heal; +2 Heal (treat disease, poison)","Qadira",null],[["Vialesk Historian","vialesk_historian"],"+2 K(p) to identify water outsiders; +1 CL to summon same","Plane of Water",null],[["Viking Blood","viking_blood"],"+1 and CS: Intmd","Lands of the Linnorm Kings",null],[["Voices of Solid Things","voices_of_solid_things"],"Use Cha on skill and CS: Appr, Cft, DsDv, or SpCft","Witchmarket",null],[["Void Child","void_child"],"+1/+2 saves vs fear","Diaspora",null],[["Walking Ward","walking_ward"],"+1 saves vs spells of acid, cold, elcty, or fire (choose one)","Qadira",null],[["Wardbreaker","wardbreaker"],"Gain melee touch attack to halve target's deflection bonus to AC","The Worldwound",null],[["Warrior Poet","warrior_poet"],"+1 Know checks about dwarves; +1 Fortitude when using bardic performance","Lands of the Linnorm Kings",null],[["Wary (PotR)","wary_potr"],"+1 opposed Pcpn and SnMtv checks; CS: Pcpn or SnMtv","Daggermark",null],[["Watching Taldor","watching_taldor"],"+1 Init; draw weapon for free during surprise round","Qadira","Characters from Qadira who have had family members, neighbors, or friends affected by Taldan aggression or who have fallen victim to this hatred themselves."],[["Water Brave","water_brave"],"+1 and CS: Swim","River Kingdoms",null],[["Wayang Spellhunter","wayang_spellhunter"],"Pick a 0-3 level spell: metamagic is easier to use with it","Minata",null],[["Wealthy Dabbler","wealthy_dabbler"],"Gain two non-harmful arcane cantrips as 1/day SLA","Taldor",null],[["Weed Resistance","weed_resistance"],"+3 saves vs poison, disease, plant creatures' effects","Kyonin",null],[["Well Bred","well_bred"],"+1 K(h), K(r); -1 SnMtv","Hermea",null],[["Wharf Rat","wharf_rat"],"You may never have been on a boat larger than a garbage scow, but you've been helping them dock all your life. You gain a +2 trait bonus on skill checks involving climbing and rope use, and a +4 trait bonus on Appraise checks to determine the value of large quantities of bulk goods without opening their containers.","Ostenso",null],[["Whip Specialist","whip_specialist"],"+1 dmg with whips","Okeno",null],[["Whisper Woods Hunter","whisper_woods_hunter"],"+2 Surv (track evil outsider); +2 Init vs evil outsiders","Whisper Woods",null],[["Whitethrone Gourmand","whitethrone_gourmand"],"+1 saves vs ingested poison, and nauseated, sickened conditions","Irrisen",null],[["Whole-Hearted","whole_hearted"],"+2 saves vs chrm/comp","Averaka",null],[["Wild Wanderer","wild_wanderer"],"+4 Surv vs severe weather or get along in the wild; more","Mwangi Expanse",null],[["Windspeaker","windspeaker"],"Always know 8 hours in advance before high speed winds","desert",null],[["Winner's Luck","winners_luck"],"Draw weapon quickly as part of a Reflex save","Riddleport",null],[["Winter Warrior","winter_warrior"],"+1 Stlth, Surv in ice- or snow-covered terrain","Irrisen",null],[["Winter's Soul","winters_soul"],"1/day ‹spell/ray of frost› as SLA","Irrisen",null],[["Witch-Tongued","witch_tongued"],"+1 Diplo; +1 Intmd vs non-witches","Irrisen",null],[["Xa Hoi Soldier","xa_hoi_soldier"],"+1 Reflex saves","Xa Hoi",null]]}} />
</IonLabel></IonItem></IonList>};
const _traits_exemplar = {title: "Exemplar Traits", jsx: <IonList lines="full"><MainLink to="/main/traits" className="reversed" info="Back to Traits" /><IonItem className="mainItem basic"><IonLabel><h2 id="main-traits_exemplar-artist-of-battle-in-all-forms">Artist of Battle in All Forms</h2>
<p><strong>Exemplar Type</strong> Combat Exemplar</p>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 2</Link><br/>You employ complex combat tactics with ease. Choose a type of combat maneuver. You gain a +1 trait bonus on combat maneuver checks to perform that maneuver, and you do not provoke an attack of opportunity from the target unless that creature has the appropriate Improved feat, such as <Link to="/feat/improved_grapple">Improved Grapple</Link> if you attempt a combat maneuver check to grapple. For every two other combat traits you have, choose an additional type of combat maneuver to gain these benefits.</p>
</IonLabel></IonItem><IonItem className="mainItem basic"><IonLabel><h2 id="main-traits_exemplar-charming-smile-cunning-soul">Charming Smile, Cunning Soul</h2>
<p><strong>Exemplar Type</strong> Social Exemplar</p>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 3</Link><br/>You know how to guilefully weave words, sway hearts and minds, verbally destroy rivals, and pierce cunning lies. You gain a +1 trait bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks. This bonus increases by 1 for every two other social traits you have.</p>
</IonLabel></IonItem><IonItem className="mainItem basic"><IonLabel><h2 id="main-traits_exemplar-curator-of-mystic-secrets">Curator of Mystic Secrets</h2>
<p><strong>Exemplar Type</strong> Magic Exemplar</p>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 3</Link><br/>Your broad collection of lore grants unparalleled understanding of magic's underlying principles. Twice per day when spontaneously casting a spell altered by metamagic, you can do so without increasing the spell's casting time. For each other magic trait you have, you can use this trait's benefit an additional time each day.</p>
</IonLabel></IonItem><IonItem className="mainItem basic"><IonLabel><h2 id="main-traits_exemplar-faith-unshakable-and-unassailable">Faith Unshakable and Unassailable</h2>
<p><strong>Exemplar Type</strong> Faith Exemplar</p>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 3</Link><br/>Your dedication to your ideals is stronger than steel. You gain a +2 trait bonus on Will saves against charm, compulsion, and fear effects. For every two other faith traits you have, this bonus increases by 1.</p>
</IonLabel></IonItem><IonItem className="mainItem basic"><IonLabel><h2 id="main-traits_exemplar-traveler-of-a-hundred-lands">Traveler of a Hundred Lands</h2>
<p><strong>Exemplar Type</strong> Regional Exemplar</p>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 3</Link><br/>You have learned the ways of many lands. Choose any two skills; each of those skills becomes a class skill for you. For every other regional trait you have, select an additional skill to treat as a class skill.</p>
</IonLabel></IonItem></IonList>};
const _traits_religion_empyreal_lords = {title: "Religion Traits: Empyreal Lords", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitempyrealfocus-empyreal-focus-fn1-fn2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitempyrealfocus-empyreal-focus-fn1-fn2"><Link to="/trait/empyreal_focus">⮞</Link> Empyreal Focus <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-1" id="main-traits_religion_empyreal_lords-fake-fn-1" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-2" id="main-traits_religion_empyreal_lords-fake-fn-2" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Empyreal Lords</Pair>
<Pair single="benefit" id="traitempyrealfocus-empyreal-focus-fn1-fn2-benefit">The empyreal lord you worship rewards your devotion by granting you an occasional boon. Once per day, before you attempt a skill check, you can use this boon to gain a +2 trait bonus on that skill check.</Pair>
</Ability>
<Ability id="traitandolettasconsolation-andolettas-consolation-fn3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitandolettasconsolation-andolettas-consolation-fn3"><Link to="/trait/andolettas_consolation">⮞</Link> Andoletta's Consolation <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3" id="main-traits_religion_empyreal_lords-fake-fn-3" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/andoletta">Andoletta</Link></Pair>
<Pair single="benefit" id="traitandolettasconsolation-andolettas-consolation-fn3-benefit">You had a close encounter with a servant or worshiper of Andoletta who provided you with a memorable, if unconventional, consolation after a loss. As a result, you gain a +2 trait bonus on saving throws against emotion and fear effects. If you are immune to fear, you instead gain a +4 trait bonus on saves against emotion effects.</Pair>
</Ability>
<Ability id="traitenemyofdelusion-enemy-of-delusion-fn3-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitenemyofdelusion-enemy-of-delusion-fn3-2"><Link to="/trait/enemy_of_delusion">⮞</Link> Enemy of Delusion <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.2" id="main-traits_religion_empyreal_lords-fake-fn-3.2" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/andoletta">Andoletta</Link></Pair>
<Pair single="benefit" id="traitenemyofdelusion-enemy-of-delusion-fn3-2-benefit">You were once faced with a grave injustice committed by an ignorant or delusional person, and righteous indignation moved you to correct the mistaken party. Once per day, when you confirm a critical hit against, successfully use a smite attack on, or use lay on hands on a creature that is affected by a charm or compulsion effect, you can invoke Andoletta to open the target's eyes. If the effect originally allowed a saving throw to resist it, the target can attempt a new saving throw against the charm or compulsion; if she's successful, the effect ends immediately.</Pair>
</Ability>
<Ability id="traiteyeofarqueros-eye-of-arqueros-fn3-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traiteyeofarqueros-eye-of-arqueros-fn3-3"><Link to="/trait/eye_of_arqueros">⮞</Link> Eye of Arqueros <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.3" id="main-traits_religion_empyreal_lords-fake-fn-3.3" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/arqueros">Arqueros</Link></Pair>
<Pair single="benefit" id="traiteyeofarqueros-eye-of-arqueros-fn3-3-benefit">You once fell asleep during a task that required your attention. A vision of Arqueros awakened you just in time to avoid failing at your task. You gain a +3 trait bonus on Perception checks attempted while you are alone on guard duty.</Pair>
</Ability>
<Ability id="traitlivingbulwark-living-bulwark-fn3-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitlivingbulwark-living-bulwark-fn3-4"><Link to="/trait/living_bulwark">⮞</Link> Living Bulwark <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.4" id="main-traits_religion_empyreal_lords-fake-fn-3.4" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/arqueros">Arqueros</Link></Pair>
<Pair single="benefit" id="traitlivingbulwark-living-bulwark-fn3-4-benefit">The Golden Bulwark inspires you to give your all for those you protect. Once per day, when an adjacent ally is targeted by an attack but before the attack roll is attempted, you can interpose yourself as an immediate action. You become the target of the attack instead.</Pair>
</Ability>
<Ability id="traitscarredbywar-scarred-by-war-fn4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitscarredbywar-scarred-by-war-fn4"><Link to="/trait/scarred_by_war">⮞</Link> Scarred by War <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-4" id="main-traits_religion_empyreal_lords-fake-fn-4" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/dalenydra">Dalenydra</Link></Pair>
<Pair single="benefit" id="traitscarredbywar-scarred-by-war-fn4-benefit">You have experienced firsthand the horrors of war, which have left you physically or mentally scarred. Now you have committed yourself to the teachings of the Blessed Attendant, seeking to heal those wounded in combat and to prevent battles from occurring whenever you can. You gain a +1 trait bonus on Diplomacy checks outside of combat. In addition, when you heal creatures other than yourself using class abilities, feats, spells, and spell completion or spell trigger magic items, you restore 1 additional hit point.</Pair>
</Ability>
<Ability id="traitavowedinspiration-avowed-inspiration-fn3-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitavowedinspiration-avowed-inspiration-fn3-5"><Link to="/trait/avowed_inspiration">⮞</Link> Avowed Inspiration <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.5" id="main-traits_religion_empyreal_lords-fake-fn-3.5" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ragathiel">Ragathiel</Link></Pair>
<Pair single="benefit" id="traitavowedinspiration-avowed-inspiration-fn3-5-benefit">In emulation of the empyreal lord's intensely channeled rage, you are an inspiration on the battlefield. Once per day, when you attack a foe who injured you during the same combat, you can inspire allies who can see you as a move action. Each other ally within 30 feet who can see you gains a +2 morale bonus on her next attack roll.</Pair>
</Ability>
<Ability id="traitredeemedbyragathiel-redeemed-by-ragathiel-fn3-6" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitredeemedbyragathiel-redeemed-by-ragathiel-fn3-6"><Link to="/trait/redeemed_by_ragathiel">⮞</Link> Redeemed by Ragathiel <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.6" id="main-traits_religion_empyreal_lords-fake-fn-3.6" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ragathiel">Ragathiel</Link></Pair>
<Pair single="benefit" id="traitredeemedbyragathiel-redeemed-by-ragathiel-fn3-6-benefit">You were born into a family, nation, or other group that tried to impress evil ideals upon you, but you were inspired by Ragathiel to live a moral life despite their influence. You gain a +2 trait bonus on Sense Motive checks to see through an evil creature's Bluff attempts.</Pair>
</Ability>
<Ability id="traitblindzeal-blind-zeal-fn3-7" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitblindzeal-blind-zeal-fn3-7"><Link to="/trait/blind_zeal">⮞</Link> Blind Zeal <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.7" id="main-traits_religion_empyreal_lords-fake-fn-3.7" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/vildeis">Vildeis</Link></Pair>
<Pair single="benefit" id="traitblindzeal-blind-zeal-fn3-7-benefit">You are blind but trained by followers of Vildeis to sense your surroundings by sound and touch. You need not attempt a skill check to move at full speed. You take a -4 penalty from blindness on only Acrobatics, Ride, Sleight of Hand, and Stealth checks. You gain <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat. You lose the benefits of this trait whenever you can see, but regain them if you once again become blind.</Pair>
</Ability>
<Ability id="traitbloodyvengeance-bloody-vengeance-fn4-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitbloodyvengeance-bloody-vengeance-fn4-2"><Link to="/trait/bloody_vengeance">⮞</Link> Bloody Vengeance <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-4.2" id="main-traits_religion_empyreal_lords-fake-fn-4.2" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/vildeis">Vildeis</Link></Pair>
<Pair single="benefit" id="traitbloodyvengeance-bloody-vengeance-fn4-2-benefit">You were slain by evil forces as a child, but a follower of Vildeis restored you to life. Now you live on in service to the Cardinal Martyr, battling the forces of evil so no other child will know the icy grip of death. You gain a +2 trait bonus on attack rolls to confirm critical hits against any creature that has at least a faint evil aura (see <Link to="/spell/detect_evil">detect evil</Link>).</Pair>
</Ability>
<Ability id="traitresilientmartyr-resilient-martyr-fn3-8" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitresilientmartyr-resilient-martyr-fn3-8"><Link to="/trait/resilient_martyr">⮞</Link> Resilient Martyr <sup><InnerLink showBacklink="backlink-main-traits_religion_empyreal_lords-fake-fn-3.8" id="main-traits_religion_empyreal_lords-fake-fn-3.8" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/vildeis">Vildeis</Link></Pair>
<Pair single="benefit" id="traitresilientmartyr-resilient-martyr-fn3-8-benefit">You interposed yourself between an innocent and a dangerous evil monster or force, lost a great deal of blood as a result, and barely survived. Now, your blood seems to replenish with blessed speed, a sure sign of Vildeis's favor. You <Link to="/rule/recover_hit_points">recover twice as many hit points</Link> and points of ability damage as normal when you rest, or three times as many when you take total bed rest.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_empyreal_lords-label">Footnotes</h3><ol>
<li id="main-traits_religion_empyreal_lords-fake-fn-1-target"><p><Link to="/source/inner_sea_gods">Inner Sea Gods</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_empyreal_lords-fake-fn-1" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_religion_empyreal_lords-fake-fn-2-target"><p><Link to="/source/faiths_of_purity">Faiths of Purity</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_empyreal_lords-fake-fn-2" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_religion_empyreal_lords-fake-fn-3-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.2" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.3" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.4" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.5" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.6" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.7" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_empyreal_lords-fake-fn-3.8" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-3.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_religion_empyreal_lords-fake-fn-4-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_empyreal_lords-fake-fn-4" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_empyreal_lords-fake-fn-4.2" data-hash-target to="main-traits_religion_empyreal_lords-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion_dwarven = {title: "Religion Traits: Dwarven Deities", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitpropitiation-propitiation-fn1-fn2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitpropitiation-propitiation-fn1-fn2"><Link to="/trait/propitiation">⮞</Link> Propitiation <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1" id="main-traits_religion_dwarven-fake-fn-1" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-2" id="main-traits_religion_dwarven-fake-fn-2" data-hash-target to="main-traits_religion_dwarven-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Dwarven Deities</Pair>
<Pair single="benefit" id="traitpropitiation-propitiation-fn1-fn2-benefit">Your knowledge of the dwarven pantheon tells you precisely which gods have jurisdiction over which aspects of your life, and you can call upon the appropriate deity for help even if that deity is not your patron. At the start of each day, pick one of the following skills: Appraise, Bluff, Craft (pick one craft skill), Diplomacy, Intimidate, or Knowledge (local). You gain a +2 trait bonus on that skill until the start of the next day.</Pair>
</Ability>
<Ability id="traitangraddsflame-angradds-flame-fn3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitangraddsflame-angradds-flame-fn3"><Link to="/trait/angradds_flame">⮞</Link> Angradd's Flame <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-3" id="main-traits_religion_dwarven-fake-fn-3" data-hash-target to="main-traits_religion_dwarven-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="benefit" id="traitangraddsflame-angradds-flame-fn3-benefit">Your faith in the Forge-Fire fans the passionate flames of war in your heart. Whenever you confirm a critical hit, you deal 1 additional point of damage to your target. This damage is considered precision damage.</Pair>
</Ability>
<Ability id="traitangraddsvalor-angradds-valor-fn4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitangraddsvalor-angradds-valor-fn4"><Link to="/trait/angradds_valor">⮞</Link> Angradd's Valor <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4" id="main-traits_religion_dwarven-fake-fn-4" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="benefit" id="traitangraddsvalor-angradds-valor-fn4-benefit">You hope to earn a place at Angradd's side after death and are inspired to charge with all your might into any righteous battle. You gain a +1 trait bonus on all melee attack rolls when you charge.</Pair>
</Ability>
<Ability id="traitbattlefieldcaster-battlefield-caster-fn5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitbattlefieldcaster-battlefield-caster-fn5"><Link to="/trait/battlefield_caster">⮞</Link> Battlefield Caster <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-5" id="main-traits_religion_dwarven-fake-fn-5" data-hash-target to="main-traits_religion_dwarven-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/torag">Torag</Link>, or <Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="traitbattlefieldcaster-battlefield-caster-fn5-benefit">Your faith protects you even as you unleash spells in the thick of battle. You receive a +1 trait bonus on <Link to="/rule/concentration">concentration</Link> checks to cast defensively and a +1 trait bonus to AC against attacks provoked by or readied against spellcasting.</Pair>
</Ability>
<Ability id="traitrousingcourage-rousing-courage-fn4-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitrousingcourage-rousing-courage-fn4-2"><Link to="/trait/rousing_courage">⮞</Link> Rousing Courage <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.2" id="main-traits_religion_dwarven-fake-fn-4.2" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="benefit" id="traitrousingcourage-rousing-courage-fn4-2-benefit">A dwarven warrior's simple act of courage in Angradd's name inspired you during one of your first battles. Now, you strive to be equally inspiring to others. Once per day, when you generate an effect that grants a morale bonus, increase that bonus by 1 for all creatures affected.</Pair>
</Ability>
<Ability id="traitwellprepared-well-prepared-fn1-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitwellprepared-well-prepared-fn1-2"><Link to="/trait/well_prepared">⮞</Link> Well-Prepared <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.2" id="main-traits_religion_dwarven-fake-fn-1.2" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/angradd">Angradd</Link></Pair>
<Pair single="benefit" id="traitwellprepared-well-prepared-fn1-2-benefit">Angradd teaches that a good offense can be the best defense. You gain a +1 trait bonus on attack rolls made as part of a readied action, and a +1 trait bonus on caster level checks when casting a spell as a readied action.</Pair>
</Ability>
<Ability id="traitalluring-alluring-fn5-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitalluring-alluring-fn5-2"><Link to="/trait/alluring">⮞</Link> Alluring <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-5.2" id="main-traits_religion_dwarven-fake-fn-5.2" data-hash-target to="main-traits_religion_dwarven-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/bolka">Bolka</Link></Pair>
<Pair single="benefit" id="traitalluring-alluring-fn5-2-benefit">You have the art of turning a passing glance into love. You receive a +2 trait bonus on Diplomacy checks with those who find you attractive. You can use <Link to="/spell/daze">daze</Link> once per day as a spell-like ability, with a caster level equal to your character level.</Pair>
</Ability>
<Ability id="traitweddedbliss-wedded-bliss-fn1-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitweddedbliss-wedded-bliss-fn1-3"><Link to="/trait/wedded_bliss">⮞</Link> Wedded Bliss <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.3" id="main-traits_religion_dwarven-fake-fn-1.3" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/bolka">Bolka</Link></Pair>
<Pair single="benefit" id="traitweddedbliss-wedded-bliss-fn1-3-benefit">Your commitment to your own marriage or your burning desire to be wed grants you a +2 trait bonus on saving throws against charm and compulsion effects.</Pair>
</Ability>
<Ability id="traitfuriousvengeance-furious-vengeance-fn1-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitfuriousvengeance-furious-vengeance-fn1-4"><Link to="/trait/furious_vengeance">⮞</Link> Furious Vengeance <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.4" id="main-traits_religion_dwarven-fake-fn-1.4" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/dranngvit">Dranngvit</Link></Pair>
<Pair single="benefit" id="traitfuriousvengeance-furious-vengeance-fn1-4-benefit">Once wronged, your vengeance can be swift and brutal. Once per day as an immediate action, you gain a +1 trait bonus on a single attack roll. In addition, if the target has damaged you within the last round, you deal 1 additional point of damage on a successful hit. You must choose to use this ability before making the attack roll.</Pair>
</Ability>
<Ability id="traitextendedtoil-extended-toil-fn1-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitextendedtoil-extended-toil-fn1-5"><Link to="/trait/extended_toil">⮞</Link> Extended Toil <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.5" id="main-traits_religion_dwarven-fake-fn-1.5" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/droskar">Droskar</Link></Pair>
<Pair single="benefit" id="traitextendedtoil-extended-toil-fn1-5-benefit">Your faith teaches you to push magical servants to the limit. When you cast a spell that creates a loyal servant to fulfill a specific or mindless task (such as unseen servant, mount, or spiritual weapon, but not summon monster spells), you may choose to increase its duration by 50%. This does not stack with the <Link to="/feat/extend_spell">Extend Spell</Link> feat. The effect weakens the spell, however; dispel checks against spells you cast in this manner gain a +4 bonus.</Pair>
</Ability>
<Ability id="traitresigned-resigned-fn5-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitresigned-resigned-fn5-3"><Link to="/trait/resigned">⮞</Link> Resigned <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-5.3" id="main-traits_religion_dwarven-fake-fn-5.3" data-hash-target to="main-traits_religion_dwarven-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/droskar">Droskar</Link></Pair>
<Pair single="benefit" id="traitresigned-resigned-fn5-3-benefit">Existence is little more than unending toil. By laboring unto exhaustion, greatness can be achieved. You receive a +1 trait bonus when retrying a previously failed skill check or ability check, as well as when taking 20 on skill checks and ability checks.</Pair>
</Ability>
<Ability id="traittoilcrafter-toilcrafter-fn5-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traittoilcrafter-toilcrafter-fn5-4"><Link to="/trait/toilcrafter">⮞</Link> Toilcrafter <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-5.4" id="main-traits_religion_dwarven-fake-fn-5.4" data-hash-target to="main-traits_religion_dwarven-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/droskar">Droskar</Link></Pair>
<Pair single="benefit" id="traittoilcrafter-toilcrafter-fn5-4-benefit">You can craft passable if inferior magical weapons, armors, and shields through diligence and toil. Choose one Craft or Profession skill in which you have at least 1 rank. Ranks in your chosen skill count as your caster level for the purpose of qualifying for the <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> feat. You may craft +1 armor, weapons, or shields (with no special qualities), substituting your rank in the chosen skill for your caster level. You must use the chosen skill for the check to create the item. Crafting in this fashion takes twice as long as normal. These items cannot be upgraded with new abilities.</Pair>
</Ability>
<Ability id="traitblessedorphan-blessed-orphan-fn1-6" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitblessedorphan-blessed-orphan-fn1-6"><Link to="/trait/blessed_orphan">⮞</Link> Blessed Orphan <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.6" id="main-traits_religion_dwarven-fake-fn-1.6" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/folgrit">Folgrit</Link></Pair>
<Pair single="benefit" id="traitblessedorphan-blessed-orphan-fn1-6-benefit">As an orphan, you have always looked to Folgrit for protection. Once per day, you gain a +1 trait bonus on any saving throw. You must use this ability after the roll is made but before the result is revealed.</Pair>
</Ability>
<Ability id="traitfolgritsbounty-folgrits-bounty-fn4-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitfolgritsbounty-folgrits-bounty-fn4-3"><Link to="/trait/folgrits_bounty">⮞</Link> Folgrit's Bounty <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.3" id="main-traits_religion_dwarven-fake-fn-4.3" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/folgrit">Folgrit</Link></Pair>
<Pair single="benefit" id="traitfolgritsbounty-folgrits-bounty-fn4-3-benefit">You were taught to tend the sacred hearth-fire and cook nourishing meals as a child. You gain a +1 trait bonus on Profession (cook) checks and can prepare a nourishing meal of up to eight portions with 1 hour of effort at a cost of 20 gp. Anyone who eats a portion within 1 day (which takes 10 minutes) gains a +1 morale bonus that can be applied to any one skill check or attack roll in the next 8 hours. The bonus must be applied before the roll is made and cannot be renewed by another meal for 1 day.</Pair>
</Ability>
<Ability id="traitfolgritsmercy-folgrits-mercy-fn4-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitfolgritsmercy-folgrits-mercy-fn4-4"><Link to="/trait/folgrits_mercy">⮞</Link> Folgrit's Mercy <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.4" id="main-traits_religion_dwarven-fake-fn-4.4" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/folgrit">Folgrit</Link></Pair>
<Pair single="benefit" id="traitfolgritsmercy-folgrits-mercy-fn4-4-benefit">You were called upon to defend your home or family at a vulnerable time and led with a clarity of mind you did not know you had. Once per day when you use lay on hands, you also cure the target of 1d4 points of Intelligence, Wisdom, or Charisma damage. You choose which ability score gains the healing effect.</Pair>
</Ability>
<Ability id="traithoneyedwords-honeyed-words-fn5-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traithoneyedwords-honeyed-words-fn5-5"><Link to="/trait/honeyed_words">⮞</Link> Honeyed Words <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-5.5" id="main-traits_religion_dwarven-fake-fn-5.5" data-hash-target to="main-traits_religion_dwarven-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/grundinnar">Grundinnar</Link></Pair>
<Pair single="benefit" id="traithoneyedwords-honeyed-words-fn5-5-benefit">Your tact soothes bristling tempers and cools heated blood. You receive a +1 trait bonus on Diplomacy checks. In addition, you receive a +1 trait bonus to the DC of any charm or compulsion that does not provide ongoing control and results in peaceful acts, such as calm emotions, sleep, or a suggestion to lay down arms.</Pair>
</Ability>
<Ability id="traitloyalbond-loyal-bond-fn1-7" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitloyalbond-loyal-bond-fn1-7"><Link to="/trait/loyal_bond">⮞</Link> Loyal Bond <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.7" id="main-traits_religion_dwarven-fake-fn-1.7" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/grundinnar">Grundinnar</Link></Pair>
<Pair single="benefit" id="traitloyalbond-loyal-bond-fn1-7-benefit">You are at your best when you serve others. When you cast spells that offer protection to an ally at your expense (such as <Link to="/spell/shield_other">shield other</Link>) or spells whose duration is divided when shared among many (such as water breathing or any of the communal spells), you do so at +1 caster level.</Pair>
</Ability>
<Ability id="traitoathkeepersvow-oathkeepers-vow-fn4-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitoathkeepersvow-oathkeepers-vow-fn4-5"><Link to="/trait/oathkeepers_vow">⮞</Link> Oathkeeper's Vow <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.5" id="main-traits_religion_dwarven-fake-fn-4.5" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kols">Kols</Link></Pair>
<Pair single="benefit" id="traitoathkeepersvow-oathkeepers-vow-fn4-5-benefit">The clergy of Kols trained you to make unbreakable vows. You add the following spells to the paladin spell list at the indicated levels: <Link to="/spell/command">command</Link> (1st), <Link to="/spell/forbid_action">forbid action</Link> (1st), <Link to="/spell/suggestion">suggestion</Link> (to fulfill a prior promise only; 2nd), <Link to="/spell/lesser_geas">lesser geas</Link> (3rd), <Link to="/spell/geas_quest">geas/quest</Link> (4th).</Pair>
</Ability>
<Ability id="traitrelentlessduty-relentless-duty-fn4-6" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitrelentlessduty-relentless-duty-fn4-6"><Link to="/trait/relentless_duty">⮞</Link> Relentless Duty <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.6" id="main-traits_religion_dwarven-fake-fn-4.6" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kols">Kols</Link></Pair>
<Pair single="benefit" id="traitrelentlessduty-relentless-duty-fn4-6-benefit">You were raised with the mantra that fulfilling your duty must always come first. Now living up to a promise comes as easily as breathing. Once per day, you can take 10 on a skill check attempted as part of fulfilling a prior promise even if you are distracted or in combat.</Pair>
</Ability>
<Ability id="traitstrictjudgment-strict-judgment-fn1-8" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitstrictjudgment-strict-judgment-fn1-8"><Link to="/trait/strict_judgment">⮞</Link> Strict Judgment <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.8" id="main-traits_religion_dwarven-fake-fn-1.8" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/kols">Kols</Link></Pair>
<Pair single="benefit" id="traitstrictjudgment-strict-judgment-fn1-8-benefit">Your respect for the letter of the law bleeds into your spellcasting. Any spells you cast that prescribe certain behaviors with a consequence for breaking these directives (such as mark of justice or geas) have their save DC increased by 1.</Pair>
</Ability>
<Ability id="traitgiftedmedium-gifted-medium-fn1-9" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitgiftedmedium-gifted-medium-fn1-9"><Link to="/trait/gifted_medium">⮞</Link> Gifted Medium <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.9" id="main-traits_religion_dwarven-fake-fn-1.9" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/magrim">Magrim</Link></Pair>
<Pair single="benefit" id="traitgiftedmedium-gifted-medium-fn1-9-benefit">Your understanding of Magrim's teachings makes you a perfect conduit for mystical forces. You gain a +1 trait bonus on your caster level when using divinations to reach out to other entities, such as <Link to="/spell/commune">commune</Link> or speak with dead.</Pair>
</Ability>
<Ability id="traitguardiansmite-guardian-smite-fn4-7" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitguardiansmite-guardian-smite-fn4-7"><Link to="/trait/guardian_smite">⮞</Link> Guardian Smite <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.7" id="main-traits_religion_dwarven-fake-fn-4.7" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="traitguardiansmite-guardian-smite-fn4-7-benefit">Paladins of Trudd taught you to be a blessed, living barrier against enemies who threaten those you hold dear. Once per day, when you strike a foe with smite evil, you can halve the total damage dealt to the foe to reduce that foe's speed to 5 feet for 1 round.</Pair>
</Ability>
<Ability id="traitmightyprotector-mighty-protector-fn4-8" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitmightyprotector-mighty-protector-fn4-8"><Link to="/trait/mighty_protector">⮞</Link> Mighty Protector <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-4.8" id="main-traits_religion_dwarven-fake-fn-4.8" data-hash-target to="main-traits_religion_dwarven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="traitmightyprotector-mighty-protector-fn4-8-benefit">When you were too young to fight, you witnessed a great tragedy befall an innocent and you swore to Trudd you'd become strong enough to prevent something like that from happening again. Once per day when you hit a foe with a melee attack, you can attempt an aid another action as a free action to increase an adjacent ally's AC against that foe. If you succeed, you grant the ally a +4 bonus to AC instead of a +2 bonus for that round.</Pair>
</Ability>
<Ability id="traitsteadystrength-steady-strength-fn1-10" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitsteadystrength-steady-strength-fn1-10"><Link to="/trait/steady_strength">⮞</Link> Steady Strength <sup><InnerLink showBacklink="backlink-main-traits_religion_dwarven-fake-fn-1.10" id="main-traits_religion_dwarven-fake-fn-1.10" data-hash-target to="main-traits_religion_dwarven-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/trudd">Trudd</Link></Pair>
<Pair single="benefit" id="traitsteadystrength-steady-strength-fn1-10-benefit">Your strength training conditioned you to wearing heavy armor. When you wear medium or heavy armor, your armor check penalty on Strength-based skills is reduced by 2.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_dwarven-label">Footnotes</h3><ol>
<li id="main-traits_religion_dwarven-fake-fn-1-target"><p><Link to="/source/inner_sea_gods">Inner Sea Gods</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1" data-hash-target to="main-traits_religion_dwarven-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.2" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.3" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.4" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.5" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.6" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.7" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.8" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.9" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_dwarven-fake-fn-1.10" data-hash-target to="main-traits_religion_dwarven-fake-fn-1.10">↩<sup>10</sup></InnerLink></p></li>
<li id="main-traits_religion_dwarven-fake-fn-2-target"><p><Link to="/source/faiths_of_purity">Faiths of Purity</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_dwarven-fake-fn-2" data-hash-target to="main-traits_religion_dwarven-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_religion_dwarven-fake-fn-3-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_dwarven-fake-fn-3" data-hash-target to="main-traits_religion_dwarven-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_religion_dwarven-fake-fn-4-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4" data-hash-target to="main-traits_religion_dwarven-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.2" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.3" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.4" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.5" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.6" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.7" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_dwarven-fake-fn-4.8" data-hash-target to="main-traits_religion_dwarven-fake-fn-4.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_religion_dwarven-fake-fn-5-target"><p><Link to="/source/dwarves_of_golarion">Dwarves of Golarion</Link> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_religion_dwarven-fake-fn-5" data-hash-target to="main-traits_religion_dwarven-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_religion_dwarven-fake-fn-5.2" data-hash-target to="main-traits_religion_dwarven-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_religion_dwarven-fake-fn-5.3" data-hash-target to="main-traits_religion_dwarven-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_religion_dwarven-fake-fn-5.4" data-hash-target to="main-traits_religion_dwarven-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-main-traits_religion_dwarven-fake-fn-5.5" data-hash-target to="main-traits_religion_dwarven-fake-fn-5.5">↩<sup>5</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion_elven = {title: "Religion Traits: Elven Deities", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitelvenpolytheist-elven-polytheist-fn1-fn2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitelvenpolytheist-elven-polytheist-fn1-fn2"><Link to="/trait/elven_polytheist">⮞</Link> Elven Polytheist <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-1" id="main-traits_religion_elven-fake-fn-1" data-hash-target to="main-traits_religion_elven-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-2" id="main-traits_religion_elven-fake-fn-2" data-hash-target to="main-traits_religion_elven-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elven Deities</Pair>
<Pair single="benefit" id="traitelvenpolytheist-elven-polytheist-fn1-fn2-benefit">Your knowledge of the elven gods has given you a broad perspective, thus granting you a +1 trait bonus on all Knowledge (religion) skill checks, and Knowledge (religion) is always a class skill for you.</Pair>
</Ability>
<aside><p>This trait was published as "Elven Pantheist" in <em>Faiths and Purity</em>.</p>
</aside><Ability id="traitsovyrianpantheist-sovyrian-pantheist-fn3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitsovyrianpantheist-sovyrian-pantheist-fn3"><Link to="/trait/sovyrian_pantheist">⮞</Link> Sovyrian Pantheist <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-3" id="main-traits_religion_elven-fake-fn-3" data-hash-target to="main-traits_religion_elven-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elven Deities</Pair>
<Pair title="Requirements" hl><Link to="/race/elf">Elf</Link></Pair>
<Pair single="benefit" id="traitsovyrianpantheist-sovyrian-pantheist-fn3-benefit">Strongly influenced by the elves' mysterious other realm, you embrace obscure elven deities that have little influence on Golarion. You gain a +1 trait bonus on Knowledge (history) checks to recognize or evaluate art, Knowledge (architecture and engineering) checks, Survival checks to hunt game, Constitution checks to run, and Spellcraft checks involving crystals or gems.</Pair>
</Ability>
<Ability id="traitstructuralknowledge-structural-knowledge-fn2-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitstructuralknowledge-structural-knowledge-fn2-2"><Link to="/trait/structural_knowledge">⮞</Link> Structural Knowledge <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-2.2" id="main-traits_religion_elven-fake-fn-2.2" data-hash-target to="main-traits_religion_elven-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/findeladlara">Findeladlara</Link></Pair>
<Pair single="benefit" id="traitstructuralknowledge-structural-knowledge-fn2-2-benefit">You are blessed with an insight into architecture and artifice. You gain a +1 trait bonus on Knowledge (engineering) checks, and Knowledge (engineering) is a class skill for you.</Pair>
</Ability>
<Ability id="traitfavoredprey-favored-prey-fn2-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitfavoredprey-favored-prey-fn2-3"><Link to="/trait/favored_prey">⮞</Link> Favored Prey <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-2.3" id="main-traits_religion_elven-fake-fn-2.3" data-hash-target to="main-traits_religion_elven-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/ketephys">Ketephys</Link></Pair>
<Pair single="benefit" id="traitfavoredprey-favored-prey-fn2-3-benefit">Those you track feel the sting of your arrows. You gain a +1 trait bonus on damage rolls when making bow attacks against a creature whose tracks you have successfully followed in the last hour.</Pair>
</Ability>
<Ability id="traitgemstonecollector-gemstone-collector-fn4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitgemstonecollector-gemstone-collector-fn4"><Link to="/trait/gemstone_collector">⮞</Link> Gemstone Collector <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-4" id="main-traits_religion_elven-fake-fn-4" data-hash-target to="main-traits_religion_elven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/yuelral">Yuelral</Link></Pair>
<Pair single="benefit" id="traitgemstonecollector-gemstone-collector-fn4-benefit">You have long found focus and inspiration in the natural beauty of rare gemstones. As long as you carry bejeweled objects worth a total combined value of 200 gp &times; your character level, you gain a +1 trait bonus on all Will saving throws and a +2 trait bonus on a single Charisma-based skill check of your choice.</Pair>
</Ability>
<Ability id="traitmagicsmight-magics-might-fn2-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitmagicsmight-magics-might-fn2-4"><Link to="/trait/magics_might">⮞</Link> Magic's Might <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-2.4" id="main-traits_religion_elven-fake-fn-2.4" data-hash-target to="main-traits_religion_elven-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/yuelral">Yuelral</Link></Pair>
<Pair single="benefit" id="traitmagicsmight-magics-might-fn2-4-benefit">Your natural affinity for magic allows you to affect even those who resist it. You gain a +1 trait bonus on caster level checks to overcome spell resistance.</Pair>
</Ability>
<Ability id="traitnaturalmagic-natural-magic-fn4-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitnaturalmagic-natural-magic-fn4-2"><Link to="/trait/natural_magic">⮞</Link> Natural Magic <sup><InnerLink showBacklink="backlink-main-traits_religion_elven-fake-fn-4.2" id="main-traits_religion_elven-fake-fn-4.2" data-hash-target to="main-traits_religion_elven-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/yuelral">Yuelral</Link></Pair>
<Pair single="benefit" id="traitnaturalmagic-natural-magic-fn4-2-benefit">Yuelral's teachings revealed to you that all magic can ultimately be traced back to nature. Choose two 0-level druid spells. You treat each spell as being on your class spell list and as a spell known for all spellcasting classes you have.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_elven-label">Footnotes</h3><ol>
<li id="main-traits_religion_elven-fake-fn-1-target"><p><Link to="/source/faiths_of_purity">Faiths of Purity</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_elven-fake-fn-1" data-hash-target to="main-traits_religion_elven-fake-fn-1">↩</InnerLink></p></li>
<li id="main-traits_religion_elven-fake-fn-2-target"><p><Link to="/source/inner_sea_gods">Inner Sea Gods</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_elven-fake-fn-2" data-hash-target to="main-traits_religion_elven-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_elven-fake-fn-2.2" data-hash-target to="main-traits_religion_elven-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_elven-fake-fn-2.3" data-hash-target to="main-traits_religion_elven-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_elven-fake-fn-2.4" data-hash-target to="main-traits_religion_elven-fake-fn-2.4">↩<sup>4</sup></InnerLink></p></li>
<li id="main-traits_religion_elven-fake-fn-3-target"><p><Link to="/source/elves_of_golarion">Elves of Golarion</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_elven-fake-fn-3" data-hash-target to="main-traits_religion_elven-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_religion_elven-fake-fn-4-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_elven-fake-fn-4" data-hash-target to="main-traits_religion_elven-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_elven-fake-fn-4.2" data-hash-target to="main-traits_religion_elven-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion_azlanti = {title: "Religion Traits: Azlanti Gods", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitclockworksurgeon-clockwork-surgeon-fn1" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitclockworksurgeon-clockwork-surgeon-fn1"><Link to="/trait/clockwork_surgeon">⮞</Link> Clockwork Surgeon <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-1" id="main-traits_religion_azlanti-fake-fn-1" data-hash-target to="main-traits_religion_azlanti-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/aesocar">Aesocar</Link></Pair>
<Pair single="benefit" id="traitclockworksurgeon-clockwork-surgeon-fn1-benefit">Thanks to your medical innovations, you can perform especially comprehensive or speedy surgeries. You begin play with a special healer's kit at no cost and can fully restock your kit by expending materials worth 10 gp and spending 8 hours assembling medical devices. When using this healer's kit to treat deadly wounds, you can either halve the time required to perform the action or add your Intelligence modifier to the number of hit points healed.</Pair>
</Ability>
<Ability id="traitdevoteeofadeadgod-devotee-of-a-dead-god-fn2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitdevoteeofadeadgod-devotee-of-a-dead-god-fn2"><Link to="/trait/devotee_of_a_dead_god">⮞</Link> Devotee of a Dead God <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-2" id="main-traits_religion_azlanti-fake-fn-2" data-hash-target to="main-traits_religion_azlanti-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/aroden">Aroden</Link></Pair>
<Pair single="benefit" id="traitdevoteeofadeadgod-devotee-of-a-dead-god-fn2-benefit">You simply cannot and will not accept that Aroden is dead. Your faith in his teachings and religion are stronger than ever. You gain a +1 trait bonus on Diplomacy checks and Knowledge (religion) checks. One of these skills (your choice) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitfaithfularodenite-faithful-arodenite-fn3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitfaithfularodenite-faithful-arodenite-fn3"><Link to="/trait/faithful_arodenite">⮞</Link> Faithful Arodenite <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-3" id="main-traits_religion_azlanti-fake-fn-3" data-hash-target to="main-traits_religion_azlanti-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/aroden">Aroden</Link></Pair>
<Pair single="benefit" id="traitfaithfularodenite-faithful-arodenite-fn3-benefit">You worship a dead god, and are skilled at making that sound reasonable. You gain a +1 trait bonus on Diplomacy checks; this bonus increases to +3 if you are dealing with a follower of Aroden or Iomedae.</Pair>
</Ability>
<Ability id="traitsacredorienteer-sacred-orienteer-fn1-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitsacredorienteer-sacred-orienteer-fn1-2"><Link to="/trait/sacred_orienteer">⮞</Link> Sacred Orienteer <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-1.2" id="main-traits_religion_azlanti-fake-fn-1.2" data-hash-target to="main-traits_religion_azlanti-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/elion">Elion</Link></Pair>
<Pair single="benefit" id="traitsacredorienteer-sacred-orienteer-fn1-2-benefit">You have traveled far with only your compass and faith as your guides. You begin play with a compass, and any compass or wayfinder in your possession also functions as a holy symbol of Elion. Either Knowledge (geography) or Survival becomes a class skill for you. Once per day you can consult your compass or wayfinder as a full-round action to gain a +2 trait bonus on one Knowledge (geography) or Survival check.</Pair>
</Ability>
<Ability id="traitfruitsofyourlabor-fruits-of-your-labor-fn1-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitfruitsofyourlabor-fruits-of-your-labor-fn1-3"><Link to="/trait/fruits_of_your_labor">⮞</Link> Fruits of Your Labor <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-1.3" id="main-traits_religion_azlanti-fake-fn-1.3" data-hash-target to="main-traits_religion_azlanti-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/jaidi">Jaidi</Link></Pair>
<Pair single="benefit" id="traitfruitsofyourlabor-fruits-of-your-labor-fn1-3-benefit">You take pride in providing for your community. Once per day you can serve a meal comprising food you have produced, purchased, or foraged to yourself and up to six other creatures. Serving and consuming this meal takes 10 minutes, during which the other participants can also partake in light activity such as conversation, reading, and keeping watch. Each creature regains 1d3 hit points at the end of the meal, and gains a +1 trait bonus on its next d20 roll using the aid another action to assist other creatures who consumed the meal. The +1 trait bonus lasts 24 hours, and a creature can gain that bonus on its next d20 roll to assist other creatures from this trait only once per day.</Pair>
</Ability>
<Ability id="traitloreseeker-loreseeker-fn4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitloreseeker-loreseeker-fn4"><Link to="/trait/loreseeker">⮞</Link> Loreseeker <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-4" id="main-traits_religion_azlanti-fake-fn-4" data-hash-target to="main-traits_religion_azlanti-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/lissala">Lissala</Link></Pair>
<Pair single="benefit" id="traitloreseeker-loreseeker-fn4-benefit">You gain a +2 trait bonus on Spellcraft checks made to identify magical items.</Pair>
</Ability>
<Ability id="traitsharedancestors-shared-ancestors-fn1-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitsharedancestors-shared-ancestors-fn1-4"><Link to="/trait/shared_ancestors">⮞</Link> Shared Ancestors <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-1.4" id="main-traits_religion_azlanti-fake-fn-1.4" data-hash-target to="main-traits_religion_azlanti-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/myr">Myr</Link></Pair>
<Pair single="benefit" id="traitsharedancestors-shared-ancestors-fn1-4-benefit">Through your detailed study of your own lineage, you can better understand and honor even your most distant relatives. You gain a +1 trait bonus on Diplomacy, Knowledge (history), Knowledge (local), Knowledge (nobility), and Sense Motive checks associated with any creature who shares your type and at least one of your subtypes. One of these skills becomes a class skill.</Pair>
</Ability>
<Ability id="traitplanarwayfarer-planar-wayfarer-fn1-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitplanarwayfarer-planar-wayfarer-fn1-5"><Link to="/trait/planar_wayfarer">⮞</Link> Planar Wayfarer <sup><InnerLink showBacklink="backlink-main-traits_religion_azlanti-fake-fn-1.5" id="main-traits_religion_azlanti-fake-fn-1.5" data-hash-target to="main-traits_religion_azlanti-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/onos">Onos</Link></Pair>
<Pair single="benefit" id="traitplanarwayfarer-planar-wayfarer-fn1-5-benefit">The countless natural hazards of the planes cannot deter you from witnessing their grandeur. Once per day you can meditate on the nature of the planes for 1 hour to gain energy resistance 2 against acid, cold, electricity, fire, or sonic damage. This resistance lasts 24 hours or until you perform this meditation again and choose a new resistance.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_azlanti-label">Footnotes</h3><ol>
<li id="main-traits_religion_azlanti-fake-fn-1-target"><p><Link to="/source/blood_of_the_ancients">Blood of the Ancients</Link> pg. 13 <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_azlanti-fake-fn-1" data-hash-target to="main-traits_religion_azlanti-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_azlanti-fake-fn-1.2" data-hash-target to="main-traits_religion_azlanti-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_azlanti-fake-fn-1.3" data-hash-target to="main-traits_religion_azlanti-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_azlanti-fake-fn-1.4" data-hash-target to="main-traits_religion_azlanti-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_azlanti-fake-fn-1.5" data-hash-target to="main-traits_religion_azlanti-fake-fn-1.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_religion_azlanti-fake-fn-2-target"><p><Link to="/source/taldor_echoes_of_glory">Taldor, Echoes of Glory</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_azlanti-fake-fn-2" data-hash-target to="main-traits_religion_azlanti-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_religion_azlanti-fake-fn-3-target"><p><Link to="/source/sargava_the_lost_colony">Sargava, the Lost Colony</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_azlanti-fake-fn-3" data-hash-target to="main-traits_religion_azlanti-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_religion_azlanti-fake-fn-4-target"><p><Link to="/source/faiths_of_corruption">Faiths of Corruption</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_azlanti-fake-fn-4" data-hash-target to="main-traits_religion_azlanti-fake-fn-4">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion_pantheons = {title: "Religion Traits: Other Groupings", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitflamesofhell-flames-of-hell-fn1-fn2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitflamesofhell-flames-of-hell-fn1-fn2"><Link to="/trait/flames_of_hell">⮞</Link> Flames of Hell <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1" id="main-traits_religion_pantheons-fake-fn-1" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-2" id="main-traits_religion_pantheons-fake-fn-2" data-hash-target to="main-traits_religion_pantheons-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Archdevils</Pair>
<Pair single="benefit" id="traitflamesofhell-flames-of-hell-fn1-fn2-benefit">Your bond with the archdevil you worship strengthens your ability to channel powers of the divine. Add 1 to the DC of saving throws made to resist the effects of your channel energy ability.</Pair>
</Ability>
<Ability id="traitdemonicpersuasion-demonic-persuasion-fn1-2-fn2-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitdemonicpersuasion-demonic-persuasion-fn1-2-fn2-2"><Link to="/trait/demonic_persuasion">⮞</Link> Demonic Persuasion <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.2" id="main-traits_religion_pantheons-fake-fn-1.2" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-2.2" id="main-traits_religion_pantheons-fake-fn-2.2" data-hash-target to="main-traits_religion_pantheons-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Demon Lords</Pair>
<Pair single="benefit" id="traitdemonicpersuasion-demonic-persuasion-fn1-2-fn2-2-benefit">Your lord's favor aids you in your interactions with demonic creatures. You gain a +2 trait bonus on Diplomacy and Intimidate checks when dealing with creatures of the demon subtype.</Pair>
</Ability>
<Ability id="traitblessingofthefeast-blessing-of-the-feast-fn3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitblessingofthefeast-blessing-of-the-feast-fn3"><Link to="/trait/blessing_of_the_feast">⮞</Link> Blessing of the Feast <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-3" id="main-traits_religion_pantheons-fake-fn-3" data-hash-target to="main-traits_religion_pantheons-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zura">Zura</Link></Pair>
<Pair single="benefit" id="traitblessingofthefeast-blessing-of-the-feast-fn3-benefit">You come from a cannibal tribe, and find strength in the flesh of your foes. Whenever you eat the flesh or drink the blood of another orc - a full-round action that provokes attacks of opportunity - you gain the favor of Zura and receive a +1 natural armor bonus for 1 minute/level. You can only receive this benefit once per day.</Pair>
</Ability>
<Ability id="traitshaperofreality-shaper-of-reality-fn1-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitshaperofreality-shaper-of-reality-fn1-3"><Link to="/trait/shaper_of_reality">⮞</Link> Shaper of Reality <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.3" id="main-traits_religion_pantheons-fake-fn-1.3" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/rule/eldest">Eldest</Link></Pair>
<Pair single="benefit" id="traitshaperofreality-shaper-of-reality-fn1-3-benefit">You can mimic the Eldest's ability to reshape the world. Once per day, you can cast either a conjuration spell or a transmutation spell at +1 caster level.</Pair>
</Ability>
<Ability id="traitaffinityfortheelements-affinity-for-the-elements-fn1-4-fn2-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitaffinityfortheelements-affinity-for-the-elements-fn1-4-fn2-3"><Link to="/trait/affinity_for_the_elements">⮞</Link> Affinity for the Elements <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.4" id="main-traits_religion_pantheons-fake-fn-1.4" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-2.3" id="main-traits_religion_pantheons-fake-fn-2.3" data-hash-target to="main-traits_religion_pantheons-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elemental Lords</Pair>
<Pair single="benefit" id="traitaffinityfortheelements-affinity-for-the-elements-fn1-4-fn2-3-benefit">Add 1 to the DC of saving throws made to resist the effects of spells cast by you that have either the air, earth, fire, or water descriptor, depending on which elemental lord you worship. You must choose a single elemental lord when you take this trait; once chosen, it cannot be changed.</Pair>
</Ability>
<Ability id="traitelementalresilience-elemental-resilience-fn1-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitelementalresilience-elemental-resilience-fn1-5"><Link to="/trait/elemental_resilience">⮞</Link> Elemental Resilience <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.5" id="main-traits_religion_pantheons-fake-fn-1.5" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Elemental Lords</Pair>
<Pair single="benefit" id="traitelementalresilience-elemental-resilience-fn1-5-benefit">Choose one of the following energy types: acid, cold, electricity, or fire. You gain a +1 trait bonus on saving throws against spells with that descriptor. Once the energy type is chosen, it cannot be changed.</Pair>
</Ability>
<Ability id="traittwistedtransformations-twisted-transformations-fn4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traittwistedtransformations-twisted-transformations-fn4"><Link to="/trait/twisted_transformations">⮞</Link> Twisted Transformations <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-4" id="main-traits_religion_pantheons-fake-fn-4" data-hash-target to="main-traits_religion_pantheons-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Great Old Ones</Pair>
<Pair single="benefit" id="traittwistedtransformations-twisted-transformations-fn4-benefit">Whenever you are affected by a transmutation spell of the polymorph subschool, your new form is always in some way horrific, grotesque, or otherwise marked by the corruption of the Great Old Ones. While polymorphed, you gain a +2 trait bonus on Intimidate checks and increase the DC of spells you cast with the fear descriptor by 1. However, you also take a -2 penalty on Diplomacy checks while polymorphed.</Pair>
</Ability>
<Ability id="traitunspeakablebond-unspeakable-bond-fn1-6-fn2-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitunspeakablebond-unspeakable-bond-fn1-6-fn2-4"><Link to="/trait/unspeakable_bond">⮞</Link> Unspeakable Bond <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.6" id="main-traits_religion_pantheons-fake-fn-1.6" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-2.4" id="main-traits_religion_pantheons-fake-fn-2.4" data-hash-target to="main-traits_religion_pantheons-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Great Old Ones or Outer Gods</Pair>
<Pair single="benefit" id="traitunspeakablebond-unspeakable-bond-fn1-6-fn2-4-benefit">You are an ally of the unclean creatures of the world, and gain a +2 trait bonus on Diplomacy checks when dealing with creatures of the aberration type.</Pair>
</Ability>
<Ability id="traitworthlesspawn-worthless-pawn-fn1-7" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitworthlesspawn-worthless-pawn-fn1-7"><Link to="/trait/worthless_pawn">⮞</Link> Worthless Pawn <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.7" id="main-traits_religion_pantheons-fake-fn-1.7" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Great Old Ones</Pair>
<Pair single="benefit" id="traitworthlesspawn-worthless-pawn-fn1-7-benefit">Your existence is so meaningless to your chosen patron that it cares nothing for how you wield its power. You may prepare and cast spells whose alignment is in opposition to your patron's, but doing so causes you to take 1 point of Wisdom damage per spell level when the spell is cast. This does not permit you to use <Link to="/misc/spell_trigger">spell trigger</Link> or <Link to="/misc/spell_completion">spell completion</Link> items of opposing alignments.</Pair>
</Ability>
<Ability id="traitcovenantofabaddon-covenant-of-abaddon-fn1-8-fn2-5" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitcovenantofabaddon-covenant-of-abaddon-fn1-8-fn2-5"><Link to="/trait/covenant_of_abaddon">⮞</Link> Covenant of Abaddon <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-1.8" id="main-traits_religion_pantheons-fake-fn-1.8" data-hash-target to="main-traits_religion_pantheons-fake-fn-1-target">1</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-2.5" id="main-traits_religion_pantheons-fake-fn-2.5" data-hash-target to="main-traits_religion_pantheons-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Horsemen</Pair>
<Pair single="benefit" id="traitcovenantofabaddon-covenant-of-abaddon-fn1-8-fn2-5-benefit">Because your soul is pledged to one of the Horsemen, you gain a +2 trait bonus on Fortitude saving throws against level-draining effects.</Pair>
</Ability>
<Ability id="traitstarlithexer-starlit-hexer-fn4-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitstarlithexer-starlit-hexer-fn4-2"><Link to="/trait/starlit_hexer">⮞</Link> Starlit Hexer <sup><InnerLink showBacklink="backlink-main-traits_religion_pantheons-fake-fn-4.2" id="main-traits_religion_pantheons-fake-fn-4.2" data-hash-target to="main-traits_religion_pantheons-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl>Outer Gods</Pair>
<Pair single="benefit" id="traitstarlithexer-starlit-hexer-fn4-2-benefit">Your spellcasting powers are infused with the powers of the occult Outer Gods. Whenever you cast a spell or spell-like ability with the curse descriptor, increase the DC of the spell's saving throw by 1. If you cast such a spell or spell-like ability at night, as long as the sky is clear and the stars are visible, treat your caster level as 1 higher when determining the spell's duration.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_pantheons-label">Footnotes</h3><ol>
<li id="main-traits_religion_pantheons-fake-fn-1-target"><p><Link to="/source/inner_sea_gods">Inner Sea Gods</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1" data-hash-target to="main-traits_religion_pantheons-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.2" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.3" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.4" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.5" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.6" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.7" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_pantheons-fake-fn-1.8" data-hash-target to="main-traits_religion_pantheons-fake-fn-1.8">↩<sup>8</sup></InnerLink></p></li>
<li id="main-traits_religion_pantheons-fake-fn-2-target"><p><Link to="/source/faiths_of_corruption">Faiths of Corruption</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_pantheons-fake-fn-2" data-hash-target to="main-traits_religion_pantheons-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_pantheons-fake-fn-2.2" data-hash-target to="main-traits_religion_pantheons-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_pantheons-fake-fn-2.3" data-hash-target to="main-traits_religion_pantheons-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_pantheons-fake-fn-2.4" data-hash-target to="main-traits_religion_pantheons-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_pantheons-fake-fn-2.5" data-hash-target to="main-traits_religion_pantheons-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
<li id="main-traits_religion_pantheons-fake-fn-3-target"><p><Link to="/source/orcs_of_golarion">Orcs of Golarion</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_pantheons-fake-fn-3" data-hash-target to="main-traits_religion_pantheons-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_religion_pantheons-fake-fn-4-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_pantheons-fake-fn-4" data-hash-target to="main-traits_religion_pantheons-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_pantheons-fake-fn-4.2" data-hash-target to="main-traits_religion_pantheons-fake-fn-4.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion_halfling = {title: "Religion Traits: Halfling Deities", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitcallforhelp-call-for-help-fn1" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitcallforhelp-call-for-help-fn1"><Link to="/trait/call_for_help">⮞</Link> Call for Help <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-1" id="main-traits_religion_halfling-fake-fn-1" data-hash-target to="main-traits_religion_halfling-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira_zuzaristan">Chaldira Zuzaristan</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="traitcallforhelp-call-for-help-fn1-benefit">Offering your devotion to and modeling your life on Desna's impetuous companion means you frequently find yourself in a jam but also ensures that you can always rely upon your friends to bail you out. When you take the total defense action, allies gain a +1 trait bonus on rolls made against a creature threatening you.</Pair>
</Ability>
<Ability id="traitchaldirasluck-chaldiras-luck-fn2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitchaldirasluck-chaldiras-luck-fn2"><Link to="/trait/chaldiras_luck">⮞</Link> Chaldira's Luck <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-2" id="main-traits_religion_halfling-fake-fn-2" data-hash-target to="main-traits_religion_halfling-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira">Chaldira</Link></Pair>
<Pair single="benefit" id="traitchaldirasluck-chaldiras-luck-fn2-benefit">You found yourself in deep trouble in your youth but stumbled upon an unlikely way out after praying to Chaldira Zuzaristan for luck. Once per day, you can roll twice and take the better result on a skill check.</Pair>
</Ability>
<Ability id="traitlessonsofchaldira-lessons-of-chaldira-fn3-fn4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitlessonsofchaldira-lessons-of-chaldira-fn3-fn4"><Link to="/trait/lessons_of_chaldira">⮞</Link> Lessons of Chaldira <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-3" id="main-traits_religion_halfling-fake-fn-3" data-hash-target to="main-traits_religion_halfling-fake-fn-3-target">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-4" id="main-traits_religion_halfling-fake-fn-4" data-hash-target to="main-traits_religion_halfling-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira_zuzaristan">Chaldira Zuzaristan</Link></Pair>
<Pair single="benefit" id="traitlessonsofchaldira-lessons-of-chaldira-fn3-fn4-benefit">Your studies of Chaldira Zuzaristan's exploits have given you a knack for avoiding trouble. Once per day before the result of a saving throw is known, you can reroll that saving throw. You must take the second result even if it is worse.</Pair>
</Ability>
<Ability id="traitmischievoussmile-mischievous-smile-fn2-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitmischievoussmile-mischievous-smile-fn2-2"><Link to="/trait/mischievous_smile">⮞</Link> Mischievous Smile <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-2.2" id="main-traits_religion_halfling-fake-fn-2.2" data-hash-target to="main-traits_religion_halfling-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira">Chaldira</Link></Pair>
<Pair single="benefit" id="traitmischievoussmile-mischievous-smile-fn2-2-benefit">You consider mischief a sacred rite in humbling enemies. You do not provoke attacks of opportunity when performing a dirty trick combat maneuver while your smite evil bonus applies to combat maneuver checks. If you already do not provoke such attacks of opportunity (such as by having <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>), you instead gain a +2 trait bonus on dirty trick combat maneuver checks against creatures that are the targets of your smite.</Pair>
</Ability>
<Ability id="traitrecklessluck-reckless-luck-fn3-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitrecklessluck-reckless-luck-fn3-2"><Link to="/trait/reckless_luck">⮞</Link> Reckless Luck <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-3.2" id="main-traits_religion_halfling-fake-fn-3.2" data-hash-target to="main-traits_religion_halfling-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/chaldira_zuzaristan">Chaldira Zuzaristan</Link></Pair>
<Pair single="benefit" id="traitrecklessluck-reckless-luck-fn3-2-benefit">Like your deity, you charge in when others fall back. When you make a charge attack in the surprise round or first round of combat, you gain a +2 trait bonus to your AC for 1 round.</Pair>
</Ability>
<Ability id="traitalwaysthreatening-always-threatening-fn3-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitalwaysthreatening-always-threatening-fn3-3"><Link to="/trait/always_threatening">⮞</Link> Always Threatening <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-3.3" id="main-traits_religion_halfling-fake-fn-3.3" data-hash-target to="main-traits_religion_halfling-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/thamir_gixx">Thamir Gixx</Link></Pair>
<Pair single="benefit" id="traitalwaysthreatening-always-threatening-fn3-3-benefit">You are fast on the draw. As a move action, you can draw a light, concealed weapon for which you have <Link to="/feat/weapon_focus">Weapon Focus</Link>. If you have the <Link to="/feat/quick_draw">Quick Draw</Link> feat, drawing this weapon is a free action.</Pair>
</Ability>
<Ability id="traitbackstabber-backstabber-fn1-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitbackstabber-backstabber-fn1-2"><Link to="/trait/backstabber">⮞</Link> Backstabber <sup><InnerLink showBacklink="backlink-main-traits_religion_halfling-fake-fn-1.2" id="main-traits_religion_halfling-fake-fn-1.2" data-hash-target to="main-traits_religion_halfling-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/thamir_gixx">Thamir Gixx</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/halfling">Halfling</Link></Pair>
<Pair single="benefit" id="traitbackstabber-backstabber-fn1-2-benefit">Pledging your faith to Norgorber's lethal shadow gives you the skill to make a brutal attack against an opponent who cannot fully fend you off. When you hit a foe you are flanking, you deal an additional 1 point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_halfling-label">Footnotes</h3><ol>
<li id="main-traits_religion_halfling-fake-fn-1-target"><p><Link to="/source/halflings_of_golarion">Halflings of Golarion</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_halfling-fake-fn-1" data-hash-target to="main-traits_religion_halfling-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_halfling-fake-fn-1.2" data-hash-target to="main-traits_religion_halfling-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_religion_halfling-fake-fn-2-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_halfling-fake-fn-2" data-hash-target to="main-traits_religion_halfling-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_religion_halfling-fake-fn-2.2" data-hash-target to="main-traits_religion_halfling-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_religion_halfling-fake-fn-3-target"><p><Link to="/source/inner_sea_gods">Inner Sea Gods</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_halfling-fake-fn-3" data-hash-target to="main-traits_religion_halfling-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_halfling-fake-fn-3.2" data-hash-target to="main-traits_religion_halfling-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_religion_halfling-fake-fn-3.3" data-hash-target to="main-traits_religion_halfling-fake-fn-3.3">↩<sup>3</sup></InnerLink></p></li>
<li id="main-traits_religion_halfling-fake-fn-4-target"><p><Link to="/source/faiths_of_purity">Faiths of Purity</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_religion_halfling-fake-fn-4" data-hash-target to="main-traits_religion_halfling-fake-fn-4">↩</InnerLink></p></li>
</ol></section></IonList>};
const _traits_religion_goblin = {title: "Religion Traits: Goblin Deities", jsx: <IonList lines="full"><MainLink to="/main/traits_religion" className="reversed" info="Back to Religion Traits" /><Ability id="traitstrengthofthebarghest-strength-of-the-barghest-fn1" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitstrengthofthebarghest-strength-of-the-barghest-fn1"><Link to="/trait/strength_of_the_barghest">⮞</Link> Strength of the Barghest <sup><InnerLink showBacklink="backlink-main-traits_religion_goblin-fake-fn-1" id="main-traits_religion_goblin-fake-fn-1" data-hash-target to="main-traits_religion_goblin-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/hadregash">Hadregash</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="traitstrengthofthebarghest-strength-of-the-barghest-fn1-benefit">The blood of the barghests is strong in you. Once per day as a free action, you can gain a +2 trait bonus on any Strength check or Strength-based skill check.</Pair>
</Ability>
<Ability id="traitrestlesshunger-restless-hunger-fn1-2" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitrestlesshunger-restless-hunger-fn1-2"><Link to="/trait/restless_hunger">⮞</Link> Restless Hunger <sup><InnerLink showBacklink="backlink-main-traits_religion_goblin-fake-fn-1.2" id="main-traits_religion_goblin-fake-fn-1.2" data-hash-target to="main-traits_religion_goblin-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/venkelvore">Venkelvore</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="traitrestlesshunger-restless-hunger-fn1-2-benefit">If you have a piece of food (or something a goblin might consider food), you can quickly eat it as part of a charge attack once per day. Doing so increases your speed by 10 feet for 1 round.</Pair>
</Ability>
<Ability id="traitwolfcub-wolf-cub-fn1-3" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitwolfcub-wolf-cub-fn1-3"><Link to="/trait/wolf_cub">⮞</Link> Wolf Cub <sup><InnerLink showBacklink="backlink-main-traits_religion_goblin-fake-fn-1.3" id="main-traits_religion_goblin-fake-fn-1.3" data-hash-target to="main-traits_religion_goblin-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zarongel">Zarongel</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="traitwolfcub-wolf-cub-fn1-3-benefit">Your body has clumps of ugly fur, a sure sign of wolf blood! You win! Once per day as a standard action, you can take a deep breath through your nose to gain the scent ability for 1 minute.</Pair>
</Ability>
<Ability id="traitflounderer-flounderer-fn1-4" extraClasses="trait" icon={["prayer"]}>
<Pair single id="traitflounderer-flounderer-fn1-4"><Link to="/trait/flounderer">⮞</Link> Flounderer <sup><InnerLink showBacklink="backlink-main-traits_religion_goblin-fake-fn-1.4" id="main-traits_religion_goblin-fake-fn-1.4" data-hash-target to="main-traits_religion_goblin-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Religion</Pair>
<Pair title="Religion" hl><Link to="/faith/zogmugot">Zogmugot</Link></Pair>
<Pair title="Requirements" hl><Link to="/race/goblin">Goblin</Link></Pair>
<Pair single="benefit" id="traitflounderer-flounderer-fn1-4-benefit">You are adept at swimming and holding your breath. You gain a +1 trait bonus on Swim checks, and can <Link to="/misc/hold_your_breath">hold your breath</Link> for a number of rounds equal to three times your Constitution score before you risk drowning.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_religion_goblin-label">Footnotes</h3><ol>
<li id="main-traits_religion_goblin-fake-fn-1-target"><p><Link to="/source/goblins_of_golarion">Goblins of Golarion</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_goblin-fake-fn-1" data-hash-target to="main-traits_religion_goblin-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_goblin-fake-fn-1.2" data-hash-target to="main-traits_religion_goblin-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_goblin-fake-fn-1.3" data-hash-target to="main-traits_religion_goblin-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_religion_goblin-fake-fn-1.4" data-hash-target to="main-traits_religion_goblin-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_planet = {title: "Regional Traits: Planets", jsx: <IonList lines="full"><MainLink to="/main/traits_regional" className="reversed" info="Back to Regional Traits" /><Ability id="traitaballonianresilience-aballonian-resilience-fn1" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitaballonianresilience-aballonian-resilience-fn1"><Link to="/trait/aballonian_resilience">⮞</Link> Aballonian Resilience <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1" id="main-traits_planet-fake-fn-1" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Aballon</Pair>
<Pair single="benefit" id="traitaballonianresilience-aballonian-resilience-fn1-benefit">You spent at least part of your youth in Horsethroat and are acclimated to the frigid cold of Aballon's Ice Wells. You gain a +4 trait bonus on saves to avoid nonlethal damage from cold environments. In addition, you begin play with a cold-weather outfit at no cost.</Pair>
</Ability>
<Ability id="traitakitonianferocity-akitonian-ferocity-fn1-2" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitakitonianferocity-akitonian-ferocity-fn1-2"><Link to="/trait/akitonian_ferocity">⮞</Link> Akitonian Ferocity <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1.2" id="main-traits_planet-fake-fn-1.2" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Akiton</Pair>
<Pair single="benefit" id="traitakitonianferocity-akitonian-ferocity-fn1-2-benefit">You were raised on Akiton, where you were hardened against the ravages of battle. Once per day, the first time you are brought below 0 hit points but not killed, you can fight on for 1 more round as if disabled. At the end of your next turn, unless brought to above 0 hit points, you immediately fall unconscious and begin dying.</Pair>
</Ability>
<Ability id="traitawakenedfromstasis-awakened-from-stasis-fn1-3" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitawakenedfromstasis-awakened-from-stasis-fn1-3"><Link to="/trait/awakened_from_stasis">⮞</Link> Awakened from Stasis <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1.3" id="main-traits_planet-fake-fn-1.3" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Apostae</Pair>
<Pair single="benefit" id="traitawakenedfromstasis-awakened-from-stasis-fn1-3-benefit">Although you were born and lived on Golarion, you recently awakened in a strange vault with no memory of how you got there, surrounded by sleeping creatures of every shape and size in smooth glass eggs, all watched over by uncommunicative crab-like automatons. As a side effect of your stasis, you gain all the benefits of 8 hours of sleep in only 2 hours. This allows a spellcaster who must rest to prepare spells to do so after only 2 hours, but does not allow a spellcaster to prepare spells more than once per day.</Pair>
</Ability>
<Ability id="traitbornunderthegreenstar-born-under-the-green-star-fn1-4" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitbornunderthegreenstar-born-under-the-green-star-fn1-4"><Link to="/trait/born_under_the_green_star">⮞</Link> Born under the Green Star <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1.4" id="main-traits_planet-fake-fn-1.4" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Castrovel</Pair>
<Pair single="benefit" id="traitbornunderthegreenstar-born-under-the-green-star-fn1-4-benefit">You were born on Castrovel and touched by the planet's profound psychic bounty. Treat your caster level as 1 higher when casting spells and spell-like abilities with the mind-affecting descriptor.</Pair>
</Ability>
<Ability id="traitvoidchild-void-child-fn1-5" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitvoidchild-void-child-fn1-5"><Link to="/trait/void_child">⮞</Link> Void Child <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1.5" id="main-traits_planet-fake-fn-1.5" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Diaspora</Pair>
<Pair single="benefit" id="traitvoidchild-void-child-fn1-5-benefit">You were raised in the Diaspora and are accustomed to being isolated from most other life in the vast void of space. You gain a +1 trait bonus on saves against fear; this bonus increases to +2 whenever you are 30 feet or farther from your nearest ally.</Pair>
</Ability>
<Ability id="traiteoxianexperiment-eoxian-experiment-fn1-6" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traiteoxianexperiment-eoxian-experiment-fn1-6"><Link to="/trait/eoxian_experiment">⮞</Link> Eoxian Experiment <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1.6" id="main-traits_planet-fake-fn-1.6" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Eox</Pair>
<Pair single="benefit" id="traiteoxianexperiment-eoxian-experiment-fn1-6-benefit">You were raised on Eox, where you were overseen by alien forces and subjected to horrifying experimentation. You gain a +1 trait bonus on saving throws against pain effects and the spell-like abilities of undead.</Pair>
</Ability>
<Ability id="traittriaxiantradition-triaxian-tradition-fn1-7" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traittriaxiantradition-triaxian-tradition-fn1-7"><Link to="/trait/triaxian_tradition">⮞</Link> Triaxian Tradition <sup><InnerLink showBacklink="backlink-main-traits_planet-fake-fn-1.7" id="main-traits_planet-fake-fn-1.7" data-hash-target to="main-traits_planet-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Triaxus</Pair>
<Pair single="benefit" id="traittriaxiantradition-triaxian-tradition-fn1-7-benefit">Your experience with one of the long Triaxian seasons has taught you much about the dangers of a long summer or winter. Choose disease or cold. You gain a +2 trait bonus on saves against spells and spell-like abilities with the chosen descriptor. If you choose disease, you gain the bonus on Fortitude saves against nonmagical diseases as well.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_planet-label">Footnotes</h3><ol>
<li id="main-traits_planet-fake-fn-1-target"><p><Link to="/source/people_of_the_stars">People of the Stars</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1" data-hash-target to="main-traits_planet-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1.2" data-hash-target to="main-traits_planet-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1.3" data-hash-target to="main-traits_planet-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1.4" data-hash-target to="main-traits_planet-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1.5" data-hash-target to="main-traits_planet-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1.6" data-hash-target to="main-traits_planet-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_planet-fake-fn-1.7" data-hash-target to="main-traits_planet-fake-fn-1.7">↩<sup>7</sup></InnerLink></p></li>
</ol></section></IonList>};
const _traits_other = {title: "Regional Traits: Other", jsx: <IonList lines="full"><MainLink to="/main/traits_regional" className="reversed" info="Back to Regional Traits" /><Ability id="traitanuliengineer-anuli-engineer-fn1" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitanuliengineer-anuli-engineer-fn1"><Link to="/trait/anuli_engineer">⮞</Link> Anuli Engineer <sup><InnerLink showBacklink="backlink-main-traits_other-fake-fn-1" id="main-traits_other-fake-fn-1" data-hash-target to="main-traits_other-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Anuli</Pair>
<Pair single="benefit" id="traitanuliengineer-anuli-engineer-fn1-benefit">Your family helped to rebuild the ruined city of Anuli, and that tradition runs in your blood. You gain a +2 bonus on Perception checks to notice unusual stonework, traps, and hidden doors in worked stone and artificial constructions. Knowledge (engineering) is always a class skill for you.</Pair>
</Ability>
<Ability id="traitbalancededucation-balanced-education-fn1-2" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitbalancededucation-balanced-education-fn1-2"><Link to="/trait/balanced_education">⮞</Link> Balanced Education <sup><InnerLink showBacklink="backlink-main-traits_other-fake-fn-1.2" id="main-traits_other-fake-fn-1.2" data-hash-target to="main-traits_other-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Anuli</Pair>
<Pair single="benefit" id="traitbalancededucation-balanced-education-fn1-2-benefit">Your upbringing focused on strengthening mind and body in equal measure. Once per day, you can draw on this training to apply a physical ability modifier to a skill check instead of its usual mental ability modifier, or apply a mental ability modifier to a skill check instead of its usual physical ability modifier. You can only exchange ability modifiers between the following pairings: Strength with Intelligence, Dexterity with Wisdom, and Constitution with Charisma.</Pair>
</Ability>
<Ability id="traitcliffstrider-cliff-strider-fn2" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitcliffstrider-cliff-strider-fn2"><Link to="/trait/cliff_strider">⮞</Link> Cliff Strider <sup><InnerLink showBacklink="backlink-main-traits_other-fake-fn-2" id="main-traits_other-fake-fn-2" data-hash-target to="main-traits_other-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Arcadia</Pair>
<Pair single="benefit" id="traitcliffstrider-cliff-strider-fn2-benefit">You grew up along the Grinding Coast of Arcadia, scaling perilous cliffs and dealing with the dangerous creatures that live on these rocky surfaces. As a move action while climbing, you can climb 5 feet without provoking an attack of opportunity, even if you don't have a climb speed.</Pair>
</Ability>
<Ability id="traiterutakiskyreader-erutaki-sky-reader-fn3" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traiterutakiskyreader-erutaki-sky-reader-fn3"><Link to="/trait/erutaki_sky_reader">⮞</Link> Erutaki Sky Reader <sup><InnerLink showBacklink="backlink-main-traits_other-fake-fn-3" id="main-traits_other-fake-fn-3" data-hash-target to="main-traits_other-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Crown of the World</Pair>
<Pair single="benefit" id="traiterutakiskyreader-erutaki-sky-reader-fn3-benefit">Born in the Crown of the World, you learned to read the aurora and the night sky for portents. Once per day, you gain a +2 luck bonus on a single saving throw. You can apply this bonus after the saving throw is rolled but before the results are revealed.</Pair>
</Ability>
<Ability id="traitfootstepsofaganhei-footsteps-of-aganhei-fn4" extraClasses="trait" icon={["planet-conquest"]}>
<Pair single id="traitfootstepsofaganhei-footsteps-of-aganhei-fn4"><Link to="/trait/footsteps_of_aganhei">⮞</Link> Footsteps of Aganhei <sup><InnerLink showBacklink="backlink-main-traits_other-fake-fn-4" id="main-traits_other-fake-fn-4" data-hash-target to="main-traits_other-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Type">Regional</Pair>
<Pair title="Region" hl>Crown of the World</Pair>
<Pair single="benefit" id="traitfootstepsofaganhei-footsteps-of-aganhei-fn4-benefit">You are one of the brave travelers who have traversed the Path of Aganhei, a lucrative trade route from Tian Xia to Avistan that crosses the frigid Crown of the World. These voyages have left you hardier, granting you a +1 trait bonus on Fortitude saving throws to resist the effects of cold weather. Survival is a class skill for you, and you gain Hallit, Hon-La, Minkaian, Skald, or Tien as a bonus language.</Pair>
</Ability>
<section data-footnotes><h3 id="main-traits_other-label">Footnotes</h3><ol>
<li id="main-traits_other-fake-fn-1-target"><p><Link to="/source/distant_shores">Distant Shores</Link> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_other-fake-fn-1" data-hash-target to="main-traits_other-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-main-traits_other-fake-fn-1.2" data-hash-target to="main-traits_other-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="main-traits_other-fake-fn-2-target"><p><Link to="/source/heroes_from_the_fringe">Heroes from the Fringe</Link> <InnerLink aria-label="Back to reference 2" id="backlink-main-traits_other-fake-fn-2" data-hash-target to="main-traits_other-fake-fn-2">↩</InnerLink></p></li>
<li id="main-traits_other-fake-fn-3-target"><p><Link to="/source/advanced_class_origins">Advanced Class Origins</Link> <InnerLink aria-label="Back to reference 3" id="backlink-main-traits_other-fake-fn-3" data-hash-target to="main-traits_other-fake-fn-3">↩</InnerLink></p></li>
<li id="main-traits_other-fake-fn-4-target"><p><Link to="/source/merchants_manifest">Merchant's Manifest</Link> <InnerLink aria-label="Back to reference 4" id="backlink-main-traits_other-fake-fn-4" data-hash-target to="main-traits_other-fake-fn-4">↩</InnerLink></p></li>
</ol></section></IonList>};
export default {traits_campaign:_traits_campaign,traits_race:_traits_race,traits_drawback_all:_traits_drawback_all,traits_drawback:_traits_drawback,traits_equipment:_traits_equipment,traits_family:_traits_family,traits_mount:_traits_mount,traits_cosmic:_traits_cosmic,traits_religion:_traits_religion,traits_regional:_traits_regional,traits_regional_tabular:_traits_regional_tabular,traits_exemplar:_traits_exemplar,traits_religion_empyreal_lords:_traits_religion_empyreal_lords,traits_religion_dwarven:_traits_religion_dwarven,traits_religion_elven:_traits_religion_elven,traits_religion_azlanti:_traits_religion_azlanti,traits_religion_pantheons:_traits_religion_pantheons,traits_religion_halfling:_traits_religion_halfling,traits_religion_goblin:_traits_religion_goblin,traits_planet:_traits_planet,traits_other:_traits_other}