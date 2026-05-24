import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><h2 id="arcaneschool-not_found-error">Error</h2>
<p>Unable to find the requested arcane school.</p>
</>};
const _abjuration = {hasJL:true,title: "Abjuration", jsx: <><div className="jumpList" id="arcaneschool-abjuration-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-abjuration-banishment-school">Banishment School</InnerLink></li><li><InnerLink toTop to="arcaneschool-abjuration-counterspell-school">Counterspell School</InnerLink></li></ul></div><h2 id="arcaneschool-abjuration-abjuration">Abjuration</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 79</Link><br/>The abjurer uses magic against itself, and masters the art of defensive and warding magics.</p>
<Ability id="arcaneschool-abjuration-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-abjuration-resistance-ex">Resistance (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to an energy type of your choice, chosen when you prepare spells. This resistance can be changed each day.</Pair>
<Pair title="At 11th Level">This resistance increases to 10.</Pair>
<Pair title="At 20th Level">This resistance changes to <Link to="/umr/immunity">immunity</Link> to the chosen energy type.</Pair>
</Ability>
<Ability id="arcaneschool-abjuration-protective-ward-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arcaneschool-abjuration-protective-ward-su">Protective Ward (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">As a standard action, you can create a 10-foot-radius field of protective magic centered on you that lasts for a number of rounds equal to your Intelligence modifier. All allies in this area (including you) receive a deflection bonus to their AC. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level.</Pair>
</Ability>
<Ability id="arcaneschool-abjuration-energy-absorption-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-abjuration-energy-absorption-su">Energy Absorption (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">You gain an amount of energy absorption equal to 3 &times; your wizard level per day. Whenever you take energy damage, apply immunity, vulnerability (if any), and resistance first and apply the rest to this absorption, reducing your daily total by that amount. Any damage in excess of your absorption is applied to you normally.</Pair>
</Ability>
<h3 id="arcaneschool-abjuration-banishment-school" data-hash-target>Banishment School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 144</Link><br/><strong>Associated School:</strong> Abjuration.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>energy absorption</em> power and the <em>protective ward</em> power of the abjuration school.</p>
<Ability id="arcaneschool-abjuration-unstable-bonds-su" icon={["mailed-fist"]}>
<Pair single id="arcaneschool-abjuration-unstable-bonds-su">Unstable Bonds (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Ability">As a melee touch attack, you can cause a summoned or called creature to become <Link to="/misc/shaken">shaken</Link> and <Link to="/misc/staggered">staggered</Link> for a number of rounds equal to 1/2 your wizard level (minimum 1).</Pair>
</Ability>
<Ability id="arcaneschool-abjuration-aura-of-banishment-su" icon={["aura"]}>
<Pair single id="arcaneschool-abjuration-aura-of-banishment-su">Aura of Banishment (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can emit a 30-foot aura of banishment. Any summoned or called creature in the area must make a Will save each round. Once the creature fails a Will saving throw, it is staggered as long as it remains inside the aura. If it fails a second Will saving throw, it is immediately sent back to its home plane and the spell that summoned it immediately ends. If that spell summoned more than one creature, only the creature that failed its saving throws is affected.</Pair>
</Ability>
<h3 id="arcaneschool-abjuration-counterspell-school" data-hash-target>Counterspell School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 144</Link><br/><strong>Associated School:</strong> Abjuration.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>protective ward</em> power and the <em>energy absorption</em> power of the abjuration school.</p>
<Ability id="arcaneschool-abjuration-disruption-su" icon={["mailed-fist"]}>
<Pair single id="arcaneschool-abjuration-disruption-su">Disruption (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Ability">As a melee touch attack, you can place a field around the target that disrupts spellcasting. While the field is in place, the target must make a <Link to="/rule/concentration">concentration</Link> check to cast any spell or to use a spell-like ability in addition to any other required concentration checks. The DC of this check is equal to 15 + twice the spell's level. If the check is failed, the target's spell is wasted. This field lasts for a number of rounds equal to 1/2 your wizard level (minimum 1).</Pair>
</Ability>
<Ability id="arcaneschool-abjuration-counterspell-mastery" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arcaneschool-abjuration-counterspell-mastery">Counterspell Mastery</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/improved_counterspell">Improved Counterspell</Link> as a bonus feat.</Pair>
<Pair title="Immediate Action">You may attempt to counterspell an opponent's spell. You must use a spell at least one level higher than the spell being countered to use this ability.</Pair>
<Pair title="Usage">1 time/day + 1 per four wizard levels beyond 6th<ByLevelPop levels={[[6,1],[10,2],[14,3],[18,4]]} unit="time" postText="/day" /></Pair>
</Ability>
</>};
const _conjuration = {hasJL:true,title: "Conjuration", jsx: <><div className="jumpList" id="arcaneschool-conjuration-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-conjuration-cheliax-egorian-academy-infernal-binder-school">Cheliax: Egorian Academy Infernal Binder School</InnerLink></li><li><InnerLink toTop to="arcaneschool-conjuration-creation-school">Creation School</InnerLink></li><li><InnerLink toTop to="arcaneschool-conjuration-extradimension-school">Extradimension School</InnerLink></li><li><InnerLink toTop to="arcaneschool-conjuration-teleportation-school">Teleportation School</InnerLink></li></ul></div><h2 id="arcaneschool-conjuration-conjuration">Conjuration</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 80</Link><br/>The conjurer focuses on the study of summoning monsters and magic alike to bend to his will.</p>
<Ability id="arcaneschool-conjuration-summoners-charm-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-conjuration-summoners-charm-su">Summoner's Charm (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever you cast a conjuration (summoning) spell, increase the duration by a number of rounds equal to 1/2 your wizard level (minimum 1).</Pair>
<Pair title="At 20th Level">You can change the duration of all <em>summon monster</em> spells to permanent. You can have no more than one <Link to="/spell/summon_monster">summon monster</Link> spell made permanent in this way at one time. If you designate another <em>summon monster</em> spell as permanent, the previous spell immediately ends. This increase is not doubled by <Link to="/feat/extend_spell">Extend Spell</Link>.</Pair>
</Ability>
<Ability id="arcaneschool-conjuration-acid-dart-sp" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-conjuration-acid-dart-sp">Acid Dart (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can unleash an acid dart targeting any foe within 30 feet as a ranged touch attack. The acid dart deals 1d6 points of acid damage + 1 for every two wizard levels you possess.</Pair>
</Ability>
<Ability id="arcaneschool-conjuration-dimensional-steps-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-conjuration-dimensional-steps-sp">Dimensional Steps (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">You can travel up to 30 feet per wizard level per day. This teleportation must be used in 5-foot increments.</Pair>
<Pair title="Standard Action">You can use this ability to teleport from one place to another. You can bring other willing creatures with you, but you must expend an equal amount of distance for each additional creature brought with you.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
<h3 id="arcaneschool-conjuration-cheliax-egorian-academy-infernal-binder-school" data-hash-target>Cheliax: Egorian Academy Infernal Binder School</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_primer">Inner Sea Primer pg. 29</Link><br/>The prestigious Egorian Academy of the Magical Arts in Cheliax's capital city teaches a full spectrum of magic, both specialized and universalist, but the college is best known for its Infernal Binding program in the school of conjuration. An infernal binder learns the Names of <Link to="/rule/hell">Hell</Link>, and can use those powers to summon and bind <Link to="/family/devil">devils</Link> to do her bidding. If she makes a single mistake in the binding, she opens herself to an eternity of torment. Egorian Academy wizards are recognized across Avistan as premier practitioners of the arcane arts. Many hold high positions in magical colleges across Golarion, but most seek to return one day to teach at their alma mater in Egorian.</p>
<p><strong>Suggested Opposition Schools:</strong> Divination, illusion, or transmutation.</p>
<p><strong>Alignment:</strong> Lawful Evil, Lawful Neutral, Neutral Evil, or Neutral.</p>
<p><strong>Requirements:</strong> An infernal binder must choose a familiar as her arcane bond at 1st level.</p>
<p><strong>Associated School:</strong> Conjuration.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>acid dart</em> and <em>dimensional steps</em> powers of the conjuration school.</p>
<Ability id="arcaneschool-conjuration-planar-knowledge-ex" icon={["upgrade"]}>
<Pair single id="arcaneschool-conjuration-planar-knowledge-ex">Planar Knowledge (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">As an infernal binder, you gain a +3 bonus on Knowledge (planes) checks.</Pair>
</Ability>
<Ability id="arcaneschool-conjuration-assume-control-su" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-conjuration-assume-control-su">Assume Control (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can attempt to gain control over a summoned creature by disrupting the bond between it and the caster who summoned it. You must make a caster level check (1d20 + caster level) equal to 10 + the summoning caster's level. If you know the summoned creature's name, you receive a +2 circumstance bonus on the check. If the check is successful, you can control the summoned creature as if you had summoned it for a number of rounds equal to 1/2 your wizard level (minimum 1 round). This does not increase the duration of the original summoning. The original summoning caster can attempt to regain control of the summoned creature as a standard action by making a caster level check against your caster level + 10. When your control ends, the creature reverts to the control of its summoner.</Pair>
<Pair title="At 9th Level">You can use this ability to bargain with called creatures as if you were the caster who conjured them.</Pair>
</Ability>
<Ability id="arcaneschool-conjuration-imp-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="arcaneschool-conjuration-imp-familiar-ex">Imp Familiar (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/feat/improved_familiar">Improved Familiar</Link> as a bonus feat, and must take an <Link to="/monster/imp">imp</Link> as a familiar. The imp replaces your current familiar.</Pair>
</Ability>
<h3 id="arcaneschool-conjuration-creation-school" data-hash-target>Creation School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 144</Link><br/><strong>Associated School:</strong> Conjuration.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>acid dart</em> power and the <em>dimensional steps</em> power of the conjuration school.</p>
<Ability id="arcaneschool-conjuration-create-gear-su" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-conjuration-create-gear-su">Create Gear (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can create any object that weighs no more than 1 pound per wizard level you possess. The item remains for 1 minute before fading away, although it disappears after one round if it leaves your possession. Creating an item to an exact specification might require a <Link to="/skill/craft">Craft</Link> skill check, subject to GM discretion. The object must be made of simple materials, such as wood, stone, glass, or metal, and cannot contain any moving parts. You could use this ability to create a <Link to="/eq-weapon/dagger">dagger</Link>, but not a vial of <Link to="/eq-weapon/alchemists_fire">alchemist's fire.</Link></Pair>
</Ability>
<Ability id="arcaneschool-conjuration-creators-will-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-conjuration-creators-will-sp">Creator's Will (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day per two wizard levels<ByLevelPop levels={[[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">You can cast <Link to="/spell/minor_creation">minor creation</Link> as a spell-like ability. You can have no more than one minor creation active at a time. If you cast the spell again, the previous casting immediately ends.</Pair>
<Pair title="At 12th Level">This ability improves to <Link to="/spell/major_creation">major creation</Link>.</Pair>
</Ability>
<h3 id="arcaneschool-conjuration-extradimension-school" data-hash-target>Extradimension School</h3>
<p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets pg. 26</Link><br/><strong>Associated School:</strong> Conjuration.</p>
<p><strong>Replacement Powers:</strong> The following school power replaces the <em>summoner's charm</em> power of the conjuration school.</p>
<Ability id="arcaneschool-conjuration-reshape-space-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-conjuration-reshape-space-su">Reshape Space (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever you cast a spell that creates an extradimensional space or demiplane, increase the duration by a number of units (rounds, minutes, hours, etc.) equal to 1/2 your wizard level (minimum 1).</Pair>
<Pair title="At 20th Level">You can make one spell that creates an extradimensional space or demiplane permanent. You can have no more than one such spell made permanent in this way at a time. If you designate another spell as permanent, the previous permanent spell ends.</Pair>
</Ability>
<h3 id="arcaneschool-conjuration-teleportation-school" data-hash-target>Teleportation School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 147</Link><br/><strong>Associated School:</strong> Conjuration.</p>
<p><strong>Replacement Powers:</strong> The following school power replaces the <em>acid dart</em> power of the conjuration school.</p>
<Ability id="arcaneschool-conjuration-shift-su" icon={["stairs-goal"]}>
<Pair single id="arcaneschool-conjuration-shift-su">Shift (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Swift Action">You can teleport to a nearby space as if using <Link to="/spell/dimension_door">dimension door</Link>. You must be able to see the space that you are moving into. You cannot take other creatures with you when you use this ability (except for familiars). You can move 5 feet for every two wizard levels you possess (minimum 5 feet).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _divination = {hasJL:true,title: "Divination", jsx: <><div className="jumpList" id="arcaneschool-divination-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-divination-foresight-school">Foresight School</InnerLink></li><li><InnerLink toTop to="arcaneschool-divination-prophecy-school">Prophecy School</InnerLink></li><li><InnerLink toTop to="arcaneschool-divination-scryer-school">Scryer School</InnerLink></li></ul></div><h2 id="arcaneschool-divination-divination">Divination</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 80</Link><br/>Diviners are masters of remote viewing, prophecies, and using magic to explore the world.</p>
<Ability id="arcaneschool-divination-forewarned-su" icon={["upgrade","rolling-dices"]}>
<Pair single id="arcaneschool-divination-forewarned-su">Forewarned (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You can always act in the surprise round even if you fail to make a Perception roll to notice a foe, but you are still considered <Link to="/rule/flat_footed">flat-footed</Link> until you take an action. In addition, you receive a bonus on initiative checks equal to 1/2 your wizard level (minimum +1).</Pair>
<Pair title="At 20th Level">Anytime you roll initiative, assume the roll resulted in a natural 20.</Pair>
</Ability>
<Ability id="arcaneschool-divination-diviners-fortune-sp" icon={["upgrade"]}>
<Pair single id="arcaneschool-divination-diviners-fortune-sp">Diviner's Fortune (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">When you activate this school power, you can touch any creature to give it an insight bonus on all of its attack rolls, skill checks, ability checks, and saving throws equal to 1/2 your wizard level (minimum +1) for 1 round.</Pair>
</Ability>
<Ability id="arcaneschool-divination-scrying-adept-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-divination-scrying-adept-su">Scrying Adept (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You are always aware when you are being observed via magic, as if you had a permanent <Link to="/spell/detect_scrying">detect scrying</Link>. In addition, whenever you <Link to="/spell/scrying">scry</Link> on a subject, treat the subject as one step more familiar to you. Very familiar subjects get a -10 penalty on their save to avoid your scrying attempts.</Pair>
</Ability>
<h3 id="arcaneschool-divination-foresight-school" data-hash-target>Foresight School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 145</Link><br/><strong>Associated School:</strong> Divination.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>diviner's fortune</em> and <em>scrying adept</em> powers of the divination school.</p>
<Ability id="arcaneschool-divination-prescience-su" icon={["rolling-dices"]}>
<Pair single id="arcaneschool-divination-prescience-su">Prescience (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Free Action">At the beginning of your turn, you may roll a single d20. At any point before your next turn, you may use the result of this roll as the result of any d20 roll you are required to make. If you do not use the d20 result before your next turn, it is lost.</Pair>
</Ability>
<Ability id="arcaneschool-divination-foretell-su" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arcaneschool-divination-foretell-su">Foretell (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level</Pair>
<Pair title="Standard Action"><p>You can utter a prediction of the immediate future. While your foretelling is in effect, you emit a 30-foot aura of fortune that aids your allies or hinders your enemies, as chosen by you at the time of prediction.</p>
<p>If you choose to aid, you and your allies gain a +2 luck bonus on ability checks, attack rolls, caster level checks, saving throws, and skill checks.</p>
<p>If you choose to hinder, your enemies take a -2 penalty on those rolls instead.</p>
</Pair>
</Ability>
<h3 id="arcaneschool-divination-prophecy-school" data-hash-target>Prophecy School</h3>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 10</Link><br/>Prophets who specialize in arcane magic often claim specialty in manipulating the powers of luck to their advantage.</p>
<p><strong>Associated School:</strong> Divination.</p>
<p><strong>Replacement Powers:</strong> The following replace the <em>forewarned</em> and <em>scrying adept</em> powers of the divination school.</p>
<Ability id="arcaneschool-divination-inspiring-prediction-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-divination-inspiring-prediction-su">Inspiring Prediction (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Swift Action">You can predict an ally's success, bolstering others' resolve. You can shout an inspiring prediction, granting each ally within 50 feet who can hear you a +4 luck bonus on her next attack roll, saving throw, or skill check.</Pair>
</Ability>
<Ability id="arcaneschool-divination-in-accordance-with-the-prophecy-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-divination-in-accordance-with-the-prophecy-su">In Accordance with the Prophecy (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">Int modifier times/day</Pair>
<Pair title="Standard Action">You can publicly declare that your next spell is guided by prophecy. When you do, the next spell you cast has a 20% chance of fizzling (1-20 on a d%). If the spell does not fail, treat the spell as if it had been modified by the <Link to="/feat/empower_spell">Empower Spell</Link> feat, even if you do not have that feat.</Pair>
<Pair title="At 12th Level">The chance that the spell fizzles is reduced to 15% (1-15 on a d%).</Pair>
<Pair title="At 16th Level">The chance is reduced to 10% (1-10 on a d%).</Pair>
</Ability>
<h3 id="arcaneschool-divination-scryer-school" data-hash-target>Scryer School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 147</Link><br/><strong>Associated School:</strong> Divination.</p>
<p><strong>Replacement Powers:</strong> The following school power replaces the <em>diviner's fortune</em> power of the divination school.</p>
<Ability id="arcaneschool-divination-send-senses-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-divination-send-senses-sp">Send Senses (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You place a scrying sensor at a point within medium range (100 feet + 10 feet/wizard level) that you can see and have line of effect to. You can see or hear (not both) through this sensor for number of rounds equal to 1/2 your wizard level (minimum 1). The sensor otherwise functions as a <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> spell with a caster level equal to your wizard level.</Pair>
</Ability>
</>};
const _enchantment = {hasJL:true,title: "Enchantment", jsx: <><div className="jumpList" id="arcaneschool-enchantment-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-enchantment-controller-school">Controller School</InnerLink></li><li><InnerLink toTop to="arcaneschool-enchantment-manipulator-school">Manipulator School</InnerLink></li></ul></div><h2 id="arcaneschool-enchantment-enchantment">Enchantment</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 81</Link><br/>The enchanter uses magic to control and manipulate the minds of his victims.</p>
<Ability id="arcaneschool-enchantment-enchanting-smile-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-enchantment-enchanting-smile-su">Enchanting Smile (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus on Bluff, Diplomacy, and Intimidate skill checks. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level.</Pair>
<Pair title="At 20th Level">Whenever you succeed at a saving throw against a spell of the enchantment school, that spell is reflected back at its caster, as per <Link to="/spell/spell_turning">spell turning</Link>.</Pair>
</Ability>
<Ability id="arcaneschool-enchantment-dazing-touch-sp" icon={["magic-palm"]}>
<Pair single id="arcaneschool-enchantment-dazing-touch-sp">Dazing Touch (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can cause a living creature to become <Link to="/misc/dazed">dazed</Link> for 1 round as a melee touch attack. Creatures with more Hit Dice than your wizard level are unaffected.</Pair>
</Ability>
<Ability id="arcaneschool-enchantment-aura-of-despair-su" icon={["armor-downgrade"]}>
<Pair single id="arcaneschool-enchantment-aura-of-despair-su">Aura of Despair (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can emit a 30-foot aura of despair. Enemies within this aura take a -2 penalty on ability checks, attack rolls, damage rolls, saving throws, and skill checks.</Pair>
</Ability>
<h3 id="arcaneschool-enchantment-controller-school" data-hash-target>Controller School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 144</Link><br/><strong>Associated School:</strong> Enchantment.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>enchanting smile</em> and <em>aura of despair</em> powers of the enchantment school.</p>
<Ability id="arcaneschool-enchantment-force-of-will-su" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arcaneschool-enchantment-force-of-will-su">Force of Will (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You can send thoughts and instructions telepathically to any creature within 60 feet that you have charmed or dominated as though you shared a common language.</Pair>
<Pair title="At 11th Level">Affected creatures can communicate back to you via the telepathic link as well.</Pair>
<Pair title="At 20th Level">Any creature that succeeds at a saving throw against an enchantment spell you have just cast is still affected for 1 round if the spell has a duration greater than 1 round.</Pair>
</Ability>
<Ability id="arcaneschool-enchantment-irresistible-demand-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-enchantment-irresistible-demand-sp">Irresistible Demand (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can force others to do your bidding. As a standard action, you attempt to dominate a creature as though using the <Link to="/spell/dominate_monster">dominate monster</Link> spell, except that the creature must have a number of Hit Dice equal to or less than your wizard level. The targeted creature receives a Will saving throw each round to negate the effect. The DC is equal to 10 + 1/2 your wizard level + your Intelligence modifier. You must concentrate as a standard action to maintain control over a dominated creature.</Pair>
</Ability>
<h3 id="arcaneschool-enchantment-manipulator-school" data-hash-target>Manipulator School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 146</Link><br/><strong>Associated School:</strong> Enchantment.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>dazing touch</em> and <em>aura of despair</em> powers of the enchantment school.</p>
<Ability id="arcaneschool-enchantment-beguiling-touch-sp" icon={["magic-palm","magic-swirl"]}>
<Pair single id="arcaneschool-enchantment-beguiling-touch-sp">Beguiling Touch (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can charm a living creature by touching it. Creatures with more Hit Dice than your wizard level are unaffected, as are creatures in combat and those with an attitude of hostile toward you. Creatures receive a Will saving throw to negate the effect. The DC of this save is equal to 10 + 1/2 your wizard level + your Intelligence modifier. Creatures that fail their save are affected by <Link to="/spell/charm_monster">charm monster</Link> for a number of rounds equal to 1/2 your wizard level (minimum 1). This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="arcaneschool-enchantment-shape-emotions-su" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arcaneschool-enchantment-shape-emotions-su">Shape Emotions (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action"><p>You can emit a 30-foot aura to either ward off or welcome emotional influence.</p>
<p>If you choose to ward, you and your allies within this aura receive a +4 morale bonus on saves against mind-affecting spells and effects, and any fear effects targeting you or your allies are reduced by one step (<Link to="/misc/shaken">shaken</Link> has no effect, <Link to="/misc/frightened">frightened</Link> becomes shaken, and <Link to="/misc/panicked">panicked</Link> becomes frightened).</p>
<p>If you chose to enhance emotional influence, enemies within the aura receive a -2 penalty on saves against mind-affecting spells and effects.</p>
</Pair>
</Ability>
</>};
const _evocation = {hasJL:true,title: "Evocation", jsx: <><div className="jumpList" id="arcaneschool-evocation-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-evocation-admixture-school">Admixture School</InnerLink></li><li><InnerLink toTop to="arcaneschool-evocation-generation-school">Generation School</InnerLink></li></ul></div><h2 id="arcaneschool-evocation-evocation">Evocation</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 81</Link><br/>Evokers revel in the raw power of magic, and can use it to create and destroy with shocking ease.</p>
<Ability id="arcaneschool-evocation-intense-spells-su" icon={["magic-swirl","rolling-dices"]}>
<Pair single id="arcaneschool-evocation-intense-spells-su">Intense Spells (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever you cast an evocation spell that deals hit point damage, add 1/2 your wizard level to the damage (minimum +1). This bonus only applies once to a spell, not once per missile or ray, and cannot be split between multiple missiles or rays. This bonus damage is not increased by <Link to="/feat/empower_spell">Empower Spell</Link> or similar effects. This damage is of the same type as the spell.</Pair>
<Pair title="At 20th Level">Whenever you cast an evocation spell you can roll twice to penetrate a creature's spell resistance and take the better result.</Pair>
</Ability>
<Ability id="arcaneschool-evocation-force-missile-sp" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-evocation-force-missile-sp">Force Missile (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can unleash a force missile that automatically strikes a foe, as <Link to="/spell/magic_missile">magic missile</Link>. The force missile deals 1d4 points of damage plus the damage from your intense spells evocation power. This is a force effect.</Pair>
</Ability>
<Ability id="arcaneschool-evocation-elemental-wall-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-evocation-elemental-wall-sp">Elemental Wall (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can create a wall of energy. This wall deals acid, cold, electricity, or fire damage, determined when you create it. The elemental wall otherwise functions like <Link to="/spell/wall_of_fire">wall of fire</Link>.</Pair>
</Ability>
<h3 id="arcaneschool-evocation-admixture-school" data-hash-target>Admixture School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 143</Link><br/><strong>Associated School:</strong> Evocation.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>force missile</em> and <em>elemental wall</em> powers of the evocation school.</p>
<Ability id="arcaneschool-evocation-versatile-evocation-su" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-evocation-versatile-evocation-su">Versatile Evocation (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Ability">When you cast an evocation spell that does acid, cold, electricity, or fire damage, you may change the damage dealt to one of the other four energy types. This changes the descriptor of the spell to match the new energy type. Any non-damaging effects remain unchanged unless the new energy type invalidates them (an <Link to="/spell/ice_storm">ice storm</Link> that deals fire damage might still provide a penalty on Perception checks due to smoke, but it would not create difficult terrain). Such effects are subject to GM discretion.</Pair>
</Ability>
<Ability id="arcaneschool-evocation-elemental-manipulation-su" icon={["aura","magic-swirl"]}>
<Pair single id="arcaneschool-evocation-elemental-manipulation-su">Elemental Manipulation (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can emit a 30-foot aura that transforms magical energy. Choose an energy type from acid, cold, electricity, and fire, and a second type to transform it into. Any magical source of energy of this type with a caster level equal to or less than your wizard level is altered to the chosen energy type. This includes supernatural effects from creatures with Hit Dice no greater than your caster level. For example, you could transform a <Link to="/family/white_dragon">white dragon's</Link> frigid breath weapon (a supernatural ability), but not a <Link to="/monster/fire_elemental">fire elemental's</Link> fiery touch (an extraordinary ability). If an effect lies only partially within your aura, only the portions within the aura are transformed.</Pair>
</Ability>
<h3 id="arcaneschool-evocation-generation-school" data-hash-target>Generation School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 146</Link><br/><strong>Associated School:</strong> Evocation.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>intense spells</em> and <em>force missile</em> powers of the evocation school.</p>
<Ability id="arcaneschool-evocation-lingering-evocations-su" icon={["upgrade","rolling-dices"]}>
<Pair single id="arcaneschool-evocation-lingering-evocations-su">Lingering Evocations (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Any evocation spell you cast with a duration greater than instantaneous lasts an additional number of rounds equal to 1/2 your wizard level (minimum +1).</Pair>
<Pair title="At 20th Level">Any dispel checks made against your evocation spells must be rolled twice, and your opponent must use the less favorable result.</Pair>
</Ability>
<Ability id="arcaneschool-evocation-wind-servant-sp" icon={["barbed-arrow"]}>
<Pair single id="arcaneschool-evocation-wind-servant-sp">Wind Servant (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can generate a blast of air that hurls an unattended object (or objects) or an object in your possession up to 30 feet in a straight line. If you have a free hand, you can catch an object hurled toward yourself. You can move objects weighing up to 1 pound per wizard level. Objects are not thrown with enough force to cause damage, although fragile objects like alchemical weapons shatter on contact with a creature or hard surface. To hit a creature with an object, you must succeed at a ranged touch attack.</Pair>
</Ability>
</>};
const _illusion = {hasJL:true,title: "Illusion", jsx: <><div className="jumpList" id="arcaneschool-illusion-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-illusion-deception-school">Deception School</InnerLink></li><li><InnerLink toTop to="arcaneschool-illusion-phantasm-school">Phantasm School</InnerLink></li><li><InnerLink toTop to="arcaneschool-illusion-qadira-mage-of-the-veil-school">Qadira: Mage of the Veil School</InnerLink></li><li><InnerLink toTop to="arcaneschool-illusion-shadow-school">Shadow School</InnerLink></li></ul></div><h2 id="arcaneschool-illusion-illusion">Illusion</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 81</Link><br/>Illusionists use magic to weave confounding images, figments, and phantoms to baffle and vex their foes.</p>
<Ability id="arcaneschool-illusion-extended-illusions-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-illusion-extended-illusions-su">Extended Illusions (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Any illusion spell you cast with a duration of "concentration" lasts a number of additional rounds equal to 1/2 your wizard level after you stop maintaining concentration (minimum +1 round).</Pair>
<Pair title="At 20th Level">You can make one illusion spell with a duration of "concentration" become permanent. You can have no more than one illusion made permanent in this way at one time. If you designate another illusion as permanent, the previous permanent illusion ends.</Pair>
</Ability>
<Ability id="arcaneschool-illusion-blinding-ray-sp" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-illusion-blinding-ray-sp">Blinding Ray (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can fire a shimmering ray at any foe within 30 feet as a ranged touch attack. The ray causes creatures to be <Link to="/misc/blinded">blinded</Link> for 1 round. Creatures with more Hit Dice than your wizard level are <Link to="/misc/dazzled">dazzled</Link> for 1 round instead.</Pair>
</Ability>
<Ability id="arcaneschool-illusion-invisibility-field-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-illusion-invisibility-field-sp">Invisibility Field (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">You can make yourself invisible. This otherwise functions as <Link to="/spell/greater_invisibility">greater invisibility</Link>.</Pair>
</Ability>
<h3 id="arcaneschool-illusion-deception-school" data-hash-target>Deception School</h3>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link><br/><strong>Associated School:</strong> Illusion.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>blinding ray</em> and <em>extended illusions</em> powers of the illusion school.</p>
<Ability id="arcaneschool-illusion-deceptive-flourish-bonus-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-illusion-deceptive-flourish-bonus-su">Deceptive Flourish-Bonus (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus on Bluff and Disguise skill checks. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level.</Pair>
<Pair title="At 20th Level">You gain the benefits of <Link to="/spell/misdirection">misdirection</Link> (Will DC = 20 + your Intelligence modifier) or <Link to="/spell/nondetection">nondetection</Link> permanently. At will as a <strong className="hl">standard action</strong>, you can change which of the two spells is active, and each time you activate <em>misdirection,</em> you can choose a new creature or object as the secondary object.</Pair>
</Ability>
<Ability id="arcaneschool-illusion-subtle-misdirection-sp" icon={["shield-reflect"]}>
<Pair single id="arcaneschool-illusion-subtle-misdirection-sp">Subtle Misdirection (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can touch a creature or an object that weighs no more than 25 pounds per caster level to impart an illusory ward that lasts for 1 minute. Attacks against a warded creature suffer a 20% miss chance, and the ward ends once it negates an attack. The DC of any caster level check, skill check, or saving throw to detect or determine the properties of a warded item increases by 1, plus 1 for every 5 wizard levels you have.</Pair>
</Ability>
<h3 id="arcaneschool-illusion-phantasm-school" data-hash-target>Phantasm School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 146</Link><br/><strong>Associated School:</strong> Illusion.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>blinding ray</em> and <em>invisibility field</em> powers of the illusion school.</p>
<Ability id="arcaneschool-illusion-terror-su" icon={["magic-palm"]}>
<Pair single id="arcaneschool-illusion-terror-su">Terror (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can make a melee touch attack that causes a creature to be assailed by nightmares only it can see. The creature provokes an attack of opportunity from you or an ally of your choice. Creatures with more Hit Dice than your wizard level are unaffected. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="arcaneschool-illusion-bedeviling-aura-su" icon={["armor-downgrade"]}>
<Pair single id="arcaneschool-illusion-bedeviling-aura-su">Bedeviling Aura (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can emit a 30-foot aura that bedevils your enemies with phantasmal assailants. Enemies within this aura move at half speed, are unable to take attacks of opportunity, and are considered to be <Link to="/rule/flanked">flanked</Link>. This is a mind-affecting effect.</Pair>
</Ability>
<h3 id="arcaneschool-illusion-qadira-mage-of-the-veil-school" data-hash-target>Qadira: Mage of the Veil School</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_primer">Inner Sea Primer pg. 29</Link><br/>The city of Katheer is home to a great number of arcane colleges in the Qadiran tradition. Magic has a proud history in this land; its many schools compete with one another to find the best route to understanding the secrets of power.</p>
<p>Among these is the focused school of veil magic. Rather than controlling the elements or transforming the environment, mages of the veil focus on much more subtle magic - blending into their surroundings to watch, observe, and gather secrets, or fading from view completely for the sake of solitude. Most graduates of this college enter the service of the satrap as spies, scouts, or infiltrators.</p>
<p><strong>Requirements:</strong> A mage of the veil must select <Link to="/spell/disguise_self">disguise self</Link> as one of his spells known at 1st level.</p>
<p><strong>Class Skills:</strong> A mage of the veil gains Bluff, Disguise, and Stealth as class skills.</p>
<p><strong>Associated School:</strong> Illusion.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>blinding ray</em> and <em>invisibility field</em> powers of the illusion school.</p>
<Ability id="arcaneschool-illusion-face-in-the-crowd-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-illusion-face-in-the-crowd-sp">Face in the Crowd (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 minute/day per wizard level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>You can cause yourself to appear so normal, mundane, and unexceptional that you blend in to your surroundings. All creatures within 30 feet treat you as if you belonged there, effectively ignoring you. Creatures outside of this area may notice that you appear out of place, but as soon as they approach within 30 feet they are affected by the magic and no longer think something is amiss. If you interact with an affected creature in any way, it gains a Will save (DC 10 + 1/2 your wizard level + your Intelligence modifier) to disbelieve the illusion and notice you. This is a mind-affecting phantasm effect.</p>
<p>This ability does not turn you invisible and opponents are not considered <Link to="/rule/flat_footed">flat-footed</Link>. It does not allow you to disguise yourself as a specific individual, type of person, or member of another race, so you cannot blend into a group of uniformed guards or appear as a member of an individual's family, and a human cannot blend into a group of <Link to="/monster/gnoll">gnolls</Link>. You can blend in with any group made up of different types of people, such as a crowd of courtiers in a king's throne room, and you can disguise yourself (either through magic or more mundane means) to appear as a specific type of person or another race (such as a uniformed guard or a gnoll) before using this ability.</p>
</Pair>
</Ability>
<Ability id="arcaneschool-illusion-master-of-the-veil-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-illusion-master-of-the-veil-sp">Master of the Veil (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can create an illusion that hides the appearance of yourself and any number of allies within 30 feet. This ability otherwise functions like the spell <Link to="/spell/veil">veil</Link>.</Pair>
</Ability>
<h3 id="arcaneschool-illusion-shadow-school" data-hash-target>Shadow School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 147</Link><br/><strong>Associated School:</strong> Illusion.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>blinding ray</em> and <em>invisibility field</em> powers of the illusion school.</p>
<Ability id="arcaneschool-illusion-binding-darkness-sp" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-illusion-binding-darkness-sp">Binding Darkness (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You cast a weave of shadows at any foe within 30 feet as a ranged touch attack. The shadows <Link to="/rule/entangled">entangle</Link> your foe for a number of rounds equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. In conditions of bright light, this duration is halved (minimum 1 round). A creature entangled by your shadows has <Link to="/rule/concealment">concealment</Link> from those without darkvision or the ability to see in darkness, and other creatures likewise have concealment relative to it.</Pair>
</Ability>
<Ability id="arcaneschool-illusion-shadow-step-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-illusion-shadow-step-sp">Shadow Step (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">You have 30 feet of travel per wizard level you can use per day. This movement must be used in 5-foot increments.</Pair>
<Pair title="Standard Action">You can use this ability to walk through the <Link to="/rule/shadow_plane">Shadow Plane</Link> and reappear. You can travel either in a single round or broken up across multiple shadow steps. Travel through the Shadow Plane is imprecise; when you arrive, you re-enter 1 square off target, as per the rules for <Link to="/rule/splash_weapon">thrown splash weapons</Link>. If this would place you in an occupied square, you instead arrive in the nearest safe location. When you arrive, you are cloaked in shadow and gain concealment as the <Link to="/spell/blur">blur</Link> spell for 1 round. You may bring other willing creatures with you, but you must expend an equal amount of distance for each additional creature brought with you. They likewise re-enter off target (roll location for each creature) and are cloaked in shadow for 1 round.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _necromancy = {hasJL:true,title: "Necromancy", jsx: <><div className="jumpList" id="arcaneschool-necromancy-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-necromancy-life-school">Life School</InnerLink></li><li><InnerLink toTop to="arcaneschool-necromancy-undead-school">Undead School</InnerLink></li></ul></div><h2 id="arcaneschool-necromancy-necromancy">Necromancy</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 81</Link><br/>The dread and feared necromancer commands undead and uses the foul power of unlife against his enemies.</p>
<Ability id="arcaneschool-necromancy-power-over-undead-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="arcaneschool-necromancy-power-over-undead-su">Power over Undead (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You receive <Link to="/feat/command_undead">Command Undead</Link> or <Link to="/feat/turn_undead">Turn Undead</Link> as a bonus feat, and you can <Link to="/ability/channel_energy">channel energy</Link>, but only to use the selected feat. You can take other feats to add to this ability, such as <Link to="/feat/extra_channel">Extra Channel</Link> and <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/elemental_channel">Elemental Channel</Link> and <Link to="/feat/alignment_channel">Alignment Channel</Link>. The DC to save against these feats is equal to 10 + 1/2 your wizard level + your Charisma modifier.</Pair>
<Pair title="At 20th Level">Undead cannot add their channel resistance to the save against this ability.</Pair>
</Ability>
<Ability id="arcaneschool-necromancy-grave-touch-sp" icon={["magic-palm"]}>
<Pair single id="arcaneschool-necromancy-grave-touch-sp">Grave Touch (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can make a melee touch attack that causes a living creature to become <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 1/2 your wizard level (minimum 1). If you touch a shaken creature with this ability, it becomes <Link to="/misc/frightened">frightened</Link> for 1 round if it has fewer Hit Dice than your wizard level.</Pair>
</Ability>
<Ability id="arcaneschool-necromancy-life-sight-su" icon={["stairs-goal"]}>
<Pair single id="arcaneschool-necromancy-life-sight-su">Life Sight (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/blindsight">blindsight</Link> to a range of 10 feet for a number of rounds per day equal to your wizard level. This ability only allows you to detect living creatures and undead creatures. This sight also tells you whether a creature is living or undead. Constructs and other creatures that are neither living nor undead cannot be seen with this ability.</Pair>
<Pair title="At 12th Level">The range increases to 20 feet.</Pair>
<Pair title="At 16th Level">The range increases to 30 feet.</Pair>
<Pair title="At 20th Level">The range increases to 40 feet.</Pair>
</Ability>
<h3 id="arcaneschool-necromancy-life-school" data-hash-target>Life School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 146</Link><br/><strong>Associated School:</strong> Necromancy.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>power over undead</em> and <em>grave touch</em> powers of the necromancy school.</p>
<Ability id="arcaneschool-necromancy-healing-grace-su" icon={["remedy"]}>
<Pair single id="arcaneschool-necromancy-healing-grace-su">Healing Grace (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Whenever you cast a spell that has targets, affects creatures in an area, or requires an attack roll, you may heal creatures affected by the spell a total of 1 point of damage per level of the spell. This healing may be spread out between the targets of the spell in any way you choose. This healing occurs when the spell is cast and has no effect on creatures that enter its area after the spell is in place. If you assign any of the healing to an undead creature, it instead takes 1 point of damage for each point assigned.</Pair>
<Pair title="At 11th Level">The amount of damage cured increases to 2 points of damage per level of the spell.</Pair>
<Pair title="At 20th Level">The amount of damage cured increases to 3 points of damage per level of the spell.</Pair>
</Ability>
<Ability id="arcaneschool-necromancy-share-essence-sp" icon={["broken-shield","remedy"]}>
<Pair single id="arcaneschool-necromancy-share-essence-sp">Share Essence (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can share your vital energy with a living creature that you touch. You take 1d6 points of nonlethal damage + 1 for every two wizard levels you possess. You cannot take an amount of nonlethal damage equal to or greater than your current hit point total; any excess is prevented. The recipient gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the amount of damage you received (prevented damage is not counted). These temporary hit points disappear 1 hour later. You may not use this ability to grant yourself temporary hit points.</Pair>
</Ability>
<h3 id="arcaneschool-necromancy-undead-school" data-hash-target>Undead School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 147</Link><br/><strong>Associated School:</strong> Necromancy.</p>
<p><strong>Replacement Powers:</strong> The following school power replaces the <em>grave touch</em> power of the necromancy school.</p>
<Ability id="arcaneschool-necromancy-bolster-sp" icon={["upgrade"]}>
<Pair single id="arcaneschool-necromancy-bolster-sp">Bolster (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can touch an undead creature and infuse it with negative energy. It gains 1 temporary hit point per Hit Die and a +2 bonus to its <Link to="/umr/channel_resistance">channel resistance</Link>, as well as a profane bonus on all attack rolls and saving throws; the profane bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. These bonuses last for a number of rounds equal to 1/2 your wizard level (minimum 1 round). The bonuses and temporary hit points are immediately dispelled if the creature is within the area of a <Link to="/spell/consecrate">consecrate</Link> spell.</Pair>
</Ability>
</>};
const _transmutation = {hasJL:true,title: "Transmutation", jsx: <><div className="jumpList" id="arcaneschool-transmutation-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-transmutation-enhancement-school">Enhancement School</InnerLink></li><li><InnerLink toTop to="arcaneschool-transmutation-shapechange-school">Shapechange School</InnerLink></li></ul></div><h2 id="arcaneschool-transmutation-transmutation">Transmutation</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 82</Link><br/>Transmuters use magic to change the world around them.</p>
<Ability id="arcaneschool-transmutation-physical-enhancement-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-transmutation-physical-enhancement-su">Physical Enhancement (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus to one physical ability score (Strength, Dexterity, or Constitution). This enhancement bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. You can change this bonus to a new ability score when you prepare spells.</Pair>
<Pair title="At 20th Level">This bonus now applies to two physical ability scores of your choice.</Pair>
</Ability>
<Ability id="arcaneschool-transmutation-telekinetic-fist-sp" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-transmutation-telekinetic-fist-sp">Telekinetic Fist (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can strike with a telekinetic fist, targeting any foe within 30 feet as a ranged touch attack. The telekinetic fist deals 1d4 points of bludgeoning damage + 1 for every two wizard levels you possess.</Pair>
</Ability>
<Ability id="arcaneschool-transmutation-change-shape-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-transmutation-change-shape-sp">Change Shape (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can change your shape, functioning like <Link to="/spell/beast_shape_ii">beast shape II</Link> or <Link to="/spell/elemental_body_i">elemental body I</Link>.</Pair>
<Pair title="At 12th Level">This ability functions like <Link to="/spell/beast_shape_iii">beast shape III</Link> or <Link to="/spell/elemental_body_ii">elemental body II</Link>.</Pair>
</Ability>
<aside><p>At 5th, 10th, 15th, and 20th levels, a transmuter may learn an <Link to="/ability/annointings">annointing</Link> instead of gaining a wizard bonus feat.</p>
</aside><h3 id="arcaneschool-transmutation-enhancement-school" data-hash-target>Enhancement School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 145</Link><br/><strong>Associated School:</strong> Transmutation.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>telekinetic fist</em> and <em>change shape</em> powers of the transmutation school.</p>
<Ability id="arcaneschool-transmutation-augment-sp" icon={["upgrade"]}>
<Pair single id="arcaneschool-transmutation-augment-sp">Augment (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can touch a creature and grant it either a +2 enhancement bonus to a single ability score of your choice or a bonus to natural armor that stacks with any natural armor the creature might possess; this natural armor bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. This augmentation lasts a number of rounds equal to 1/2 your wizard level (minimum 1 round).</Pair>
<Pair title="At 10th Level">The enhancement bonus to one ability score increases to +4.</Pair>
</Ability>
<Ability id="arcaneschool-transmutation-perfection-of-self-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-transmutation-perfection-of-self-su">Perfection of Self (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level</Pair>
<Pair title="Swift Action">You can grant yourself an enhancement bonus to a single ability score equal to 1/2 your wizard level (maximum +10) for one round.</Pair>
</Ability>
<h3 id="arcaneschool-transmutation-shapechange-school" data-hash-target>Shapechange School</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 147</Link><br/><strong>Associated School:</strong> Transmutation.</p>
<p><strong>Replacement Powers:</strong> The following school power replaces the <em>telekinetic fist</em> power of the transmutation school.</p>
<Ability id="arcaneschool-transmutation-battleshaping-su" icon={["mailed-fist"]}>
<Pair single id="arcaneschool-transmutation-battleshaping-su">Battleshaping (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Swift Action">You grow a single <Link to="/umr/natural_weapon">natural weapon</Link>. The natural weapon lasts for 1 round. You can grow a claw, a bite, or a gore attack. These attacks deal the normal damage for a creature of your size. You may not grow additional limbs or a tail with this ability.</Pair>
<Pair title="At 4th Level">Your natural weapon gains an enhancement bonus on attack and damage rolls equal to <Link to="/misc/one_fourth">one-fourth</Link> of your wizard level.</Pair>
<Pair title="At 11th Level">You can shape two natural weapons.</Pair>
</Ability>
</>};
const _universalist = {hasJL:true,title: "Universalist", jsx: <><div className="jumpList" id="arcaneschool-universalist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-universalist-absalom-arcanamirium-crafter-school">Absalom: Arcanamirium Crafter School</InnerLink></li></ul></div><h2 id="arcaneschool-universalist-universalist">Universalist</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 82</Link><br/>Wizards who do not specialize (known as as universalists) have the most diversity of all arcane spellcasters.</p>
<Ability id="arcaneschool-universalist-hand-of-the-apprentice-su" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-universalist-hand-of-the-apprentice-su">Hand of the Apprentice (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You cause your melee weapon to fly from your grasp and strike a foe before instantly returning to you. You can make a single attack using a melee weapon at a range of 30 feet. This attack is treated as a ranged attack with a thrown weapon, except that you add your Intelligence modifier on the attack roll instead of your Dexterity modifier (damage still relies on Strength). This ability cannot be used to perform a combat maneuver.</Pair>
</Ability>
<Ability id="arcaneschool-universalist-metamagic-mastery-su" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-universalist-metamagic-mastery-su">Metamagic Mastery (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per two wizard levels beyond 8th<ByLevelPop levels={[[8,1],[10,2],[12,3],[14,4],[16,5],[18,6],[20,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">You can apply any one metamagic feat that you know to a spell you are about to cast. This does not alter the level of the spell or the casting time. Any time you use this ability to apply a metamagic feat that increases the spell level by more than 1, you must use an additional daily usage for each level above 1 that the feat adds to the spell. Even though this ability does not modify the spell's actual level, you cannot use this ability to cast a spell whose modified spell level would be above the level of the highest-level spell that you are capable of casting.</Pair>
</Ability>
<h3 id="arcaneschool-universalist-absalom-arcanamirium-crafter-school" data-hash-target>Absalom: Arcanamirium Crafter School</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_primer">Inner Sea Primer pg. 28</Link><br/>The most famous magical college of the Inner Sea region, the Arcanamirium of Absalom teaches a broad array of specialties, but its most intensive specialty is no specialization at all. It is one of the primary training academies of universalist magic on Golarion, and the wizards who graduate from the school become well respected, well paid, and highly sought-after in their homelands. An Arcanamirium crafter is one of the builders of the arcane world, assembling magic items with facility, skill, and power. He is intimately familiar with the craft and practice of imbuing items with arcane power, and works with precision even early in his career to help create some of the most powerful magic items of Golarion.</p>
<p><strong>Associated School:</strong> Universalist.</p>
<p><strong>Replacement Powers:</strong> The following school power replaces the <em>hand of the apprentice</em> power of the universalist school.</p>
<Ability id="arcaneschool-universalist-metacharge-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arcaneschool-universalist-metacharge-ex">Metacharge (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">As an Arcanamirium crafter, you gain a bonus feat, which must be an <Link to="/main/item_creation_feat">item creation feat</Link> or <Link to="/main/metamagic_feat">metamagic feat</Link>. You must still meet all prerequisites for a bonus feat, including caster level minimums. When using metamagic feats to create magic items, your skill and understanding of the principles involved in the item's creation give you a +2 bonus on the skill check made to create the item.</Pair>
</Ability>
</>};
const _aether = {hasJL:true,title: "Aether", jsx: <><div className="jumpList" id="arcaneschool-aether-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-aether-aether-spell-list">Aether Spell List</InnerLink></li></ul></div><h2 id="arcaneschool-aether-aether">Aether</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 20</Link><br/>Aether is a strange and complex substance that occurs where the Elemental Planes touch the <Link to="/rule/ethereal_plane">Ethereal Plane</Link>. Wizards who study aether use it to manipulate objects on the Material Plane. The aether elemental school is an elemental arcane school a wizard can specialize in instead of one of the standard schools of magic.</p>
<p>Like a normal arcane school, the aether elemental school grants a number of school powers, as well as one bonus spell slot of each level the wizard can cast, from 1st on up. This bonus spell slot must be used to prepare a spell from the aether elemental school's spell list. Unlike a normal arcane school, the aether elemental school requires the wizard to select a single element as his opposition school (air, earth, fire, or water, for example). The wizard does not need to select a second opposition school. He must expend two spell slots to prepare a spell from his opposed elemental school as normal.</p>
<Ability id="arcaneschool-aether-aether-magic" icon={["spell-book"]}>
<Pair single id="arcaneschool-aether-aether-magic">Aether Magic</Pair>
<Pair title="Info">Add these spells to your wizard spell list at the listed spell level.</Pair>
<Pair plain title="0"><Link to="/spell/telekinetic_projectile">Telekinetic projectile</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Pair>
<Pair plain title="4th"><Link to="/spell/spiritual_ally">Spiritual ally</Link></Pair>
<Pair plain title="5th"><Link to="/spell/ethereal_envelope">Ethereal envelope</Link></Pair>
<Pair plain title="6th"><Link to="/spell/animate_objects">Animate objects</Link></Pair>
<Pair plain title="7th"><Link to="/spell/ectoplasmic_eruption">Ectoplasmic eruption</Link></Pair>
<Pair plain title="9th"><Link to="/spell/telekinetic_storm">Telekinetic storm</Link></Pair>
</Ability>
<Ability id="arcaneschool-aether-aether-supremacy-su" icon={["upgrade","stairs-goal","rolling-dices"]}>
<Pair single id="arcaneschool-aether-aether-supremacy-su">Aether Supremacy (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus on Sleight of Hand checks. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. In addition, you can cast <Link to="/spell/mage_hand">mage hand</Link> at will as a spell-like ability that uses your caster level.</Pair>
<Pair title="At 5th Level">You can attempt Sleight of Hand checks against a target within 30 feet, though the skill check DC increases by 5, and any creature within line of sight of either you or the target can attempt an opposed Perception check to notice the attempt.</Pair>
<Pair title="At 10th Level">You can attempt a Sleight of Hand check as a <strong className="hl">move action</strong> with only a -10 penalty.</Pair>
<Pair title="At 20th Level">Whenever you attempt a Sleight of Hand check, assume the roll resulted in a natural 20.</Pair>
</Ability>
<Ability id="arcaneschool-aether-telekinetic-protection-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-aether-telekinetic-protection-su">Telekinetic Protection (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Swift Action">You can grant yourself protection against nonmagical attacks by forming a field to telekinetically deflect them. You gain DR 5/magic for 1 round.</Pair>
</Ability>
<Ability id="arcaneschool-aether-receptive-vibrations-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arcaneschool-aether-receptive-vibrations-su">Receptive Vibrations (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You are constantly surrounded by ephemeral and invisible strands of aether, increasing your awareness of your surroundings. You are never denied your Dexterity bonus to AC against attacks made within 30 feet of you because you are flat-footed or because your assailant is unseen. In addition, you gain a bonus on Perception checks to avoid being surprised equal to half your wizard level.</Pair>
</Ability>
<h3 id="arcaneschool-aether-aether-spell-list" data-hash-target>Aether Spell List</h3>
<ul>
<li>0-<em>telekinetic projectile</em></li>
<li>1st-<Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/unseen_servant">unseen servant</Link></li>
<li>2nd-<Link to="/spell/blur">blur</Link>, <Link to="/spell/pilfering_hand">pilfering hand</Link>, <em>spiritual weapon</em></li>
<li>3rd-<Link to="/spell/ablative_barrier">ablative barrier</Link>, <Link to="/spell/blink">blink</Link>, <Link to="/spell/ectoplasmic_snare">ectoplasmic snare</Link>, <Link to="/spell/force_punch">force punch</Link>, <Link to="/spell/tiny_hut">tiny hut</Link></li>
<li>4th-<Link to="/spell/resilient_sphere">resilient sphere</Link>, <em>spiritual ally,</em> <Link to="/spell/telekinetic_charge">telekinetic charge</Link>, <Link to="/spell/telekinetic_maneuver">telekinetic maneuver</Link></li>
<li>5th-<Link to="/spell/condensed_ether">condensed ether</Link>, <em>ethereal envelope,</em> <Link to="/spell/interposing_hand">interposing hand</Link>, <Link to="/spell/mages_faithful_hound">mage's faithful hound</Link>, <Link to="/spell/secret_chest">secret chest</Link>, <Link to="/spell/telekinesis">telekinesis</Link>, <Link to="/spell/wall_of_ectoplasm">wall of ectoplasm</Link></li>
<li>6th-<em>animate objects,</em> <Link to="/spell/enemy_hammer">enemy hammer</Link>, <Link to="/spell/forceful_hand">forceful hand</Link>, <Link to="/spell/leashed_shackles">leashed shackles</Link></li>
<li>7th-<em>ectoplasmic eruption,</em> <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link>, <Link to="/spell/grasping_hand">grasping hand</Link>, <Link to="/spell/phase_door">phase door</Link></li>
<li>8th-<Link to="/spell/clenched_fist">clenched fist</Link>, <Link to="/spell/telekinetic_sphere">telekinetic sphere</Link></li>
<li>9th-<Link to="/spell/etherealness">etherealness</Link>, <em>telekinetic storm</em></li>
</ul>
</>};
const _air = {hasJL:true,title: "Air", jsx: <><div className="jumpList" id="arcaneschool-air-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-air-ice-school">Ice School</InnerLink></li><li><InnerLink toTop to="arcaneschool-air-smoke-school">Smoke School</InnerLink></li><li><InnerLink toTop to="arcaneschool-air-air-spells">Air Spells</InnerLink></li></ul></div><h2 id="arcaneschool-air-air">Air</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 142</Link><br/>The air elementalist uses the forces of the wind, sky, clouds, and lightning to confuse and destroy his foes, all while flying through the air with ease.</p>
<Ability id="arcaneschool-air-air-supremacy-su" icon={["upgrade","stairs-goal","rolling-dices"]}>
<Pair single id="arcaneschool-air-air-supremacy-su">Air Supremacy (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus on Fly skill checks. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. In addition, you can cast <Link to="/spell/feather_fall">feather fall</Link> on yourself at will.</Pair>
<Pair title="At 5th Level">You can cast <Link to="/spell/levitate">levitate</Link> on yourself at will.</Pair>
<Pair title="At 10th Level">You can cast <Link to="/spell/fly">fly</Link> on yourself at will.</Pair>
<Pair title="At 20th Level">Whenever you make a Fly skill check, assume the roll resulted in a natural 20.</Pair>
</Ability>
<Ability id="arcaneschool-air-lightning-flash-su" icon={["aura"]}>
<Pair single id="arcaneschool-air-lightning-flash-su">Lightning Flash (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can unleash a flash of electricity. This flash deals 1d6 points of electricity damage + 1 point for every two wizard levels you possess to all creatures within 5 feet of you and <Link to="/misc/dazzle">dazzles</Link> them for 1d4 rounds. A successful Reflex save negates the dazzled effect and halves the damage. The DC of this save is equal to 10 + 1/2 your wizard level + your Intelligence modifier.</Pair>
</Ability>
<Ability id="arcaneschool-air-cyclone-su" icon={["aura"]}>
<Pair single id="arcaneschool-air-cyclone-su">Cyclone (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can create a vortex of turbulent wind around yourself. This vortex has a radius of up to 10 feet and a maximum height of 10 feet per wizard level you possess. Any ranged attack passing through this vortex automatically misses. Any flying creature moving through the vortex must make a Fly skill check or immediately fall from the sky, taking falling damage (the creature cannot make a Fly check to reduce or negate this damage). Creatures on the ground cannot pass through the vortex without first making a Strength check. The DC of this check is equal to 10 + your caster level. The vortex is faintly visible and can be spotted with a DC 15 Perception skill check.</Pair>
</Ability>
<h3 id="arcaneschool-air-ice-school" data-hash-target>Ice School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Air or Water.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>lightning flash</em> and <em>cyclone</em> powers of the air school.</p>
<Ability id="arcaneschool-air-freezing-shards-su" icon={["aura"]}>
<Pair single id="arcaneschool-air-freezing-shards-su">Freezing Shards (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can cause shards of ice to burst forth from the ground around you. The shards deal 1d4 points of piercing damage and 1d6 points of cold damage + 1 point for every 2 wizard levels you have to all creatures within 5 feet of you. A successful Reflex save (DC = 10 + half your wizard level + your Intelligence modifier) negates the piercing damage and halves the cold damage. The shards remain until the beginning of your next turn; during this time, the area is <Link to="/rule/difficult_terrain">difficult terrain</Link>. You are not affected by your own freezing shards and can move through the area normally.</Pair>
</Ability>
<Ability id="arcaneschool-air-icy-shackles-su" icon={["mailed-fist"]}>
<Pair single id="arcaneschool-air-icy-shackles-su">Icy Shackles (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">Int modifier times/day</Pair>
<Pair title="Standard Action">You can make a melee touch attack against a foe to conjure icy restraints around its ankles, reducing its base speed to 5 feet and dealing it an amount of cold damage at the beginning of its turn equal to your Intelligence modifier. The manacles have AC 10, hardness 0, and 30 hit points, and a creature can destroy them with a successful Strength check (DC = 10 + half your wizard level + your Intelligence modifier) as a standard action. The icy shackles melt away after 1 minute.</Pair>
</Ability>
<h3 id="arcaneschool-air-smoke-school" data-hash-target>Smoke School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Air or Fire.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>lightning flash</em> and <em>cyclone</em> powers of the air school.</p>
<Ability id="arcaneschool-air-smokesight-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arcaneschool-air-smokesight-su">Smokesight (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can constantly see normally through natural fog and smoke, as well as any fog and smoke that you (but not others) magically create. You can choose to touch another creature to grant it this vision for 1 hour.</Pair>
</Ability>
<Ability id="arcaneschool-air-body-of-smoke-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-air-body-of-smoke-sp">Body of Smoke (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 minute/day per wizard level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">You can assume a <Link to="/spell/gaseous_form">gaseous form</Link> (as per the spell of that name).</Pair>
</Ability>
<h3 id="arcaneschool-air-air-spells" data-hash-target>Air Spells</h3>
<ul>
<li>0-<Link to="/spell/message">message</Link></li>
<li>1st-<Link to="/spell/alter_winds">alter winds</Link>, <em>feather fall,</em> <Link to="/spell/shocking_grasp">shocking grasp</Link></li>
<li>2nd-<Link to="/spell/elemental_speech">elemental speech</Link>, <Link to="/spell/elemental_touch">elemental touch</Link>, <Link to="/spell/glide">glide</Link>, <Link to="/spell/gust_of_wind">gust of wind</Link>, <em>levitate,</em> <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/summon_monster_ii">summon monster II</Link>, <Link to="/spell/whispering_wind">whispering wind</Link></li>
<li>3rd-<Link to="/spell/cloak_of_winds">cloak of winds</Link>, <Link to="/spell/draconic_reservoir">draconic reservoir</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>, <em>fly, gaseous form,</em> <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/wind_wall">wind wall</Link></li>
<li>4th-<Link to="/spell/ball_lightning">ball lightning</Link>, <Link to="/spell/detonate">detonate</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <Link to="/spell/elemental_body_i">elemental body I</Link>, <Link to="/spell/river_of_wind">river of wind</Link>, <Link to="/spell/shout">shout</Link>, <Link to="/spell/summon_monster_iv">summon monster IV</Link></li>
<li>5th-<Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/elemental_body_ii">elemental body II</Link>, <Link to="/spell/geyser">geyser</Link>, <Link to="/spell/overland_flight">overland flight</Link>, <Link to="/spell/planar_adaptation">planar adaptation</Link>, <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>, <Link to="/spell/suffocation">suffocation</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link></li>
<li>6th-<Link to="/spell/chain_lightning">chain lightning</Link>, <Link to="/spell/elemental_body_iii">elemental body III</Link>, <Link to="/spell/planar_binding">planar binding</Link>, <Link to="/spell/sirocco">sirocco</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link></li>
<li>7th-<Link to="/spell/control_weather">control weather</Link>, <Link to="/spell/elemental_body_iv">elemental body IV</Link>, <Link to="/spell/mass_fly">mass fly</Link>, <Link to="/spell/mass_planar_adaptation">mass planar adaptation</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link></li>
<li>8th-<Link to="/spell/greater_planar_binding">greater planar binding</Link>, <Link to="/spell/greater_shout">greater shout</Link>, <Link to="/spell/stormbolts">stormbolts</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link></li>
<li>9th-<Link to="/spell/gate">gate</Link>, <Link to="/spell/mass_suffocation">mass suffocation</Link>, <Link to="/spell/winds_of_vengeance">winds of vengeance</Link></li>
</ul>
</>};
const _earth = {hasJL:true,title: "Earth", jsx: <><div className="jumpList" id="arcaneschool-earth-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-earth-magma-school">Magma School</InnerLink></li><li><InnerLink toTop to="arcaneschool-earth-mud-school">Mud School</InnerLink></li><li><InnerLink toTop to="arcaneschool-earth-earth-spells">Earth Spells</InnerLink></li></ul></div><h2 id="arcaneschool-earth-earth">Earth</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 142</Link><br/>The earth elementalist draws power from the stone around him, shaping it, shattering it, and bending it to his will. He can use it to defend himself or cause it to rise up and crush his foes.</p>
<Ability id="arcaneschool-earth-earth-supremacy-su" icon={["armor-upgrade","mailed-fist","stairs-goal"]}>
<Pair single id="arcaneschool-earth-earth-supremacy-su">Earth Supremacy (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus to your CMD to resist <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/reposition">reposition</Link>, <Link to="/rule/trip">trip</Link>, and <Link to="/rule/overrun">overrun</Link> attempts as long as you are touching the ground. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. In addition, you gain a +1 insight bonus on melee attack and damage rolls whenever both you and your foe are touching the ground.</Pair>
<Pair title="At 20th Level">Earth and stone do not block the line of effect of your spells, although they do still block your line of sight.</Pair>
</Ability>
<Ability id="arcaneschool-earth-acid-cloud-su" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-earth-acid-cloud-su">Acid Cloud (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can create a 5-foot-radius cloud of acid vapor within 30 feet that lasts for 1 round. This cloud deals 1d6 points of acid damage + 1 point for every two wizard levels you possess to all creatures in the cloud and <Link to="/misc/sicken">sickens</Link> them for 1 round. A successful Fortitude save negates the sickened effect and halves the damage. The DC of this save is equal to 10 + 1/2 your wizard level + your Intelligence modifier. Creatures that begin their turn inside the cloud can move out that turn without penalty, but those that enter the cloud are affected.</Pair>
</Ability>
<Ability id="arcaneschool-earth-earth-glide-su" icon={["stairs-goal"]}>
<Pair single id="arcaneschool-earth-earth-glide-su">Earth Glide (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Ability">You gain the ability to move through earth, dirt, and stone. You cannot move through worked earth or stone; only natural substances can be traversed. If your total duration expires before you exit the earth, you are flung back to the point where you entered the stone, take 4d6 points of damage, and are <Link to="/misc/stunned">stunned</Link> for 1 round. Your burrowing does not leave a hole, nor does it give any sign of your presence (although you can be detected by creatures with <Link to="/umr/tremorsense">tremorsense</Link>).</Pair>
</Ability>
<h3 id="arcaneschool-earth-magma-school" data-hash-target>Magma School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Earth or Fire.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>acid cloud</em> and <em>earth glide</em> powers of the earth school.</p>
<Ability id="arcaneschool-earth-magma-furrow-su" icon={["barbed-arrow"]}>
<Pair single id="arcaneschool-earth-magma-furrow-su">Magma Furrow (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can send forth a 20-foot line of magma. Any creature in this line takes 1d6 points of fire damage + 1 point for every 2 wizard levels you have. A successful Reflex save (DC = 10 + half your wizard level + your Intelligence modifier) halves this damage. In addition, the ground in this area remains molten for another 1d4 rounds. Creatures that begin their turns in the area can move out that turn without penalty, but those that enter the area each take 1d6 points of fire damage.</Pair>
</Ability>
<Ability id="arcaneschool-earth-lava-shield-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-earth-lava-shield-su">Lava Shield (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per two wizard levels<ByLevelPop levels={[[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="round" postText="/day" /></Pair>
<Pair title="Standard Action">You can create a barrier of lava to protect you for 1 round. Choose one edge of your space. That edge is treated as a solid wall for attacks targeting you only. You gain total <Link to="/rule/cover">cover</Link> from attacks that pass through this edge, and you gain the benefits of <Link to="/spell/fire_shield">fire shield</Link> (warm shield) while adjacent to the lava shield. You can dismiss the lava shield as a free action, and it disappears immediately if you leave your space.</Pair>
</Ability>
<h3 id="arcaneschool-earth-mud-school" data-hash-target>Mud School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Earth or Water.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>acid cloud</em> and <em>earth glide</em> powers of the earth school.</p>
<Ability id="arcaneschool-earth-hindering-muck-su" icon={["tornado-discs"]}>
<Pair single id="arcaneschool-earth-hindering-muck-su">Hindering Muck (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can create a 15-foot cone of sticky mud. Any creature in the cone must succeed at a Reflex save (DC = 10 + half your wizard level + your Intelligence modifier) or become <Link to="/rule/entangled">entangled</Link> for 1 round for every wizard level you have. An affected creature can take a standard action that provokes attacks of opportunity to wipe off enough of the mud to remove the entangled condition. Jumping into a large body of water or being subject to an effect that creates a substantial amount of water (such as a casting of <Link to="/spell/create_water">create water</Link>) removes all the mud on a creature.</Pair>
</Ability>
<Ability id="arcaneschool-earth-mud-missile-su" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-earth-mud-missile-su">Mud Missile (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day per two wizard levels<ByLevelPop levels={[[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">You can fling a ball of hardened mud at a foe within 30 feet. If you succeed at a ranged touch attack, the mud slams into the target's face, dealing 1d6 points of bludgeoning damage for every 2 wizard levels you have and <Link to="/misc/blind">blinding</Link> the target for 1d4 rounds. A creature can remove the blinding mud from itself or another creature with a successful Strength check (DC = 10 + half your wizard level) as a standard action.</Pair>
</Ability>
<h3 id="arcaneschool-earth-earth-spells" data-hash-target>Earth Spells</h3>
<ul>
<li>0-<Link to="/spell/acid_splash">acid splash</Link></li>
<li>1st-<Link to="/spell/expeditious_excavation">expeditious excavation</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/stone_fist">stone fist</Link></li>
<li>2nd-<Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/create_pit">create pit</Link>, <Link to="/spell/elemental_speech">elemental speech</Link>, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/elemental_touch">elemental touch</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/stone_call">stone call</Link>, <Link to="/spell/summon_monster_ii">summon monster II</Link></li>
<li>3rd-<Link to="/spell/draconic_reservoir">draconic reservoir</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/shifting_sand">shifting sand</Link>, <Link to="/spell/spiked_pit">spiked pit</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link></li>
<li>4th-<Link to="/spell/acid_pit">acid pit</Link>, <Link to="/spell/calcific_touch">calcific touch</Link>, <Link to="/spell/detonate">detonate</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <Link to="/spell/elemental_body_i">elemental body I</Link>, <Link to="/spell/stone_shape">stone shape</Link>, <Link to="/spell/stoneskin">stoneskin</Link>, <Link to="/spell/summon_monster_iv">summon monster IV</Link></li>
<li>5th-<Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/elemental_body_ii">elemental body II</Link>, <Link to="/spell/geyser">geyser</Link>, <Link to="/spell/hungry_pit">hungry pit</Link>, <Link to="/spell/passwall">passwall</Link>, <Link to="/spell/planar_adaptation">planar adaptation</Link>, <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link>, <Link to="/spell/transmute_mud_to_rock">transmute mud to rock</Link>, <Link to="/spell/transmute_rock_to_mud">transmute rock to mud</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link></li>
<li>6th-<Link to="/spell/acid_fog">acid fog</Link>, <Link to="/spell/elemental_body_iii">elemental body III</Link>, <Link to="/spell/flesh_to_stone">flesh to stone</Link>, <Link to="/spell/move_earth">move earth</Link>, <Link to="/spell/planar_binding">planar binding</Link>, <Link to="/spell/stone_to_flesh">stone to flesh</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link></li>
<li>7th-<Link to="/spell/elemental_body_iv">elemental body IV</Link>, <Link to="/spell/mass_planar_adaptation">mass planar adaptation</Link>, <Link to="/spell/rampart">rampart</Link>, <Link to="/spell/reverse_gravity">reverse gravity</Link>, <Link to="/spell/statue">statue</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link></li>
<li>8th-<Link to="/spell/iron_body">iron body</Link>, <Link to="/spell/greater_planar_binding">greater planar binding</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link>, <Link to="/spell/wall_of_lava">wall of lava</Link></li>
<li>9th-<Link to="/spell/clashing_rocks">clashing rocks</Link>, <Link to="/spell/gate">gate</Link>, <Link to="/spell/world_wave">world wave</Link></li>
</ul>
</>};
const _fire = {hasJL:true,title: "Fire", jsx: <><div className="jumpList" id="arcaneschool-fire-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-fire-magma-school">Magma School</InnerLink></li><li><InnerLink toTop to="arcaneschool-fire-smoke-school">Smoke School</InnerLink></li><li><InnerLink toTop to="arcaneschool-fire-fire-spells">Fire Spells</InnerLink></li></ul></div><h2 id="arcaneschool-fire-fire">Fire</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 142</Link><br/>The fire elementalist sees a world around him that is made to burn, and he can bring that fire to consume his foes. He has also learned that fire can purify and protect, if properly controlled.</p>
<Ability id="arcaneschool-fire-fire-supremacy-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-fire-fire-supremacy-su">Fire Supremacy (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to fire.</Pair>
<Pair title="At 10th Level">This resistance increases to 10.</Pair>
<Pair title="At 20th Level">You gain <Link to="/umr/immunity">immunity</Link> to fire damage. In addition, whenever you are within 5 feet of a source of flame at least as large as a campfire, you can draw the fire around you for 1 round as a swift action. Anyone striking you with a melee weapon or unarmed strike takes an amount of fire damage equal to 1/2 your wizard level (minimum 1). Weapons with reach avoid this damage.</Pair>
</Ability>
<Ability id="arcaneschool-fire-fire-jet-su" icon={["barbed-arrow"]}>
<Pair single id="arcaneschool-fire-fire-jet-su">Fire Jet (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can send forth a 20-foot line of fire. Anyone in this line takes 1d6 points of fire damage + 1 point for every two wizard levels you possess. A successful Reflex save halves this damage. The DC of this save is equal to 10 + 1/2 your wizard level + your Intelligence modifier. Creatures that fail their saving throw <Link to="/rule/catch_fire">catch fire</Link> and take 1d6 points of fire damage on the following round. Creatures that catch fire can avoid this damage by taking a full-round action to extinguish the flames by making a DC 15 Reflex save. Rolling on the ground gives a +2 circumstance bonus on the save. Dousing the creature with water automatically extinguishes the flame.</Pair>
</Ability>
<Ability id="arcaneschool-fire-dancing-flame-su" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-fire-dancing-flame-su">Dancing Flame (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">You can sculpt fire to suit your desires. With one use of this ability you can move any nonmagical fire up to 30 feet. Alternatively you can use this ability (as a free action) to alter any fire spell that you cast with a duration of instantaneous by removing any number of squares from its area of affect. If the fire spell has a duration, you can use this ability to reposition the spell, within its original range (treat this as if you had just cast the spell, even though the duration is unchanged). You cannot use this ability on a fire spell that you did not cast. If you move a nonmagical flame, it must have a new source of fuel. If it does not, it is extinguished in one round. You can use this ability a number of times per day equal to 1/2 your wizard level.</Pair>
</Ability>
<h3 id="arcaneschool-fire-magma-school" data-hash-target>Magma School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Earth or Fire.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>fire jet</em> and <em>dancing flame</em> powers of the fire school.</p>
<Ability id="arcaneschool-fire-magma-furrow-su" icon={["barbed-arrow"]}>
<Pair single id="arcaneschool-fire-magma-furrow-su">Magma Furrow (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can send forth a 20-foot line of magma. Any creature in this line takes 1d6 points of fire damage + 1 point for every 2 wizard levels you have. A successful Reflex save (DC = 10 + half your wizard level + your Intelligence modifier) halves this damage. In addition, the ground in this area remains molten for another 1d4 rounds. Creatures that begin their turns in the area can move out that turn without penalty, but those that enter the area each take 1d6 points of fire damage.</Pair>
</Ability>
<Ability id="arcaneschool-fire-lava-shield-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-fire-lava-shield-su">Lava Shield (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per two wizard levels<ByLevelPop levels={[[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="round" postText="/day" /></Pair>
<Pair title="Standard Action">You can create a barrier of lava to protect you for 1 round. Choose one edge of your space. That edge is treated as a solid wall for attacks targeting you only. You gain total <Link to="/rule/cover">cover</Link> from attacks that pass through this edge, and you gain the benefits of <Link to="/spell/fire_shield">fire shield</Link> (warm shield) while adjacent to the lava shield. You can dismiss the lava shield as a free action, and it disappears immediately if you leave your space.</Pair>
</Ability>
<h3 id="arcaneschool-fire-smoke-school" data-hash-target>Smoke School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Air or Fire.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>fire jet</em> and <em>dancing flame</em> powers of the fire school.</p>
<Ability id="arcaneschool-fire-smokesight-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arcaneschool-fire-smokesight-su">Smokesight (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can constantly see normally through natural fog and smoke, as well as any fog and smoke that you (but not others) magically create. You can choose to touch another creature to grant it this vision for 1 hour.</Pair>
</Ability>
<Ability id="arcaneschool-fire-body-of-smoke-sp" icon={["magic-swirl"]}>
<Pair single id="arcaneschool-fire-body-of-smoke-sp">Body of Smoke (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 minute/day per wizard level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">You can assume a <Link to="/spell/gaseous_form">gaseous form</Link> (as per the spell of that name).</Pair>
</Ability>
<h3 id="arcaneschool-fire-fire-spells" data-hash-target>Fire Spells</h3>
<ul>
<li>0-<Link to="/spell/spark">spark</Link></li>
<li>1st-<Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/dancing_lantern">dancing lantern</Link></li>
<li>2nd-<Link to="/spell/burning_gaze">burning gaze</Link>, <Link to="/spell/elemental_speech">elemental speech</Link>, <Link to="/spell/elemental_touch">elemental touch</Link>, <Link to="/spell/fire_breath">fire breath</Link>, <Link to="/spell/flaming_sphere">flaming sphere</Link>, <Link to="/spell/pyrotechnics">pyrotechnics</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/summon_monster_ii">summon monster II</Link></li>
<li>3rd-<Link to="/spell/campfire_wall">campfire wall</Link>, <Link to="/spell/draconic_reservoir">draconic reservoir</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/flame_arrow">flame arrow</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link></li>
<li>4th-<Link to="/spell/detonate">detonate</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <Link to="/spell/elemental_body_i">elemental body I</Link>, <Link to="/spell/fire_shield">fire shield</Link>, <Link to="/spell/fire_trap">fire trap</Link>, <Link to="/spell/firefall">firefall</Link>, <Link to="/spell/summon_monster_iv">summon monster IV</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></li>
<li>5th-<Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/elemental_body_ii">elemental body II</Link>, <Link to="/spell/fire_snake">fire snake</Link>, <Link to="/spell/geyser">geyser</Link>, <Link to="/spell/planar_adaptation">planar adaptation</Link>, <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link></li>
<li>6th-<Link to="/spell/contagious_flame">contagious flame</Link>, <Link to="/spell/elemental_body_iii">elemental body III</Link>, <Link to="/spell/planar_binding">planar binding</Link>, <Link to="/spell/sirocco">sirocco</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link></li>
<li>7th-<Link to="/spell/elemental_body_iv">elemental body IV</Link>, <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link>, <Link to="/spell/firebrand">firebrand</Link>, <Link to="/spell/mass_planar_adaptation">mass planar adaptation</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link></li>
<li>8th-<Link to="/spell/incendiary_cloud">incendiary cloud</Link>, <Link to="/spell/greater_planar_binding">greater planar binding</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link>, <Link to="/spell/wall_of_lava">wall of lava</Link></li>
<li>9th-<Link to="/spell/fiery_body">fiery body</Link>, <Link to="/spell/gate">gate</Link>, <Link to="/spell/meteor_swarm">meteor swarm</Link></li>
</ul>
</>};
const _metal = {hasJL:true,title: "Metal", jsx: <><div className="jumpList" id="arcaneschool-metal-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-metal-metal-spells">Metal Spells</InnerLink></li></ul></div><h2 id="arcaneschool-metal-metal">Metal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 87</Link><br/>Metal represents firmness, rigidity, persistence, strength, determination, and electricity. It is commonly represented by gold and silver as its purest forms, though lower magic relating to iron and steel is part of the metal school.</p>
<Ability id="arcaneschool-metal-metal-magic" icon={["spell-book"]}>
<Pair single id="arcaneschool-metal-metal-magic">Metal Magic</Pair>
<Pair title="Info">Add these spells to your wizard spell list at the listed spell level.</Pair>
<Pair plain title="3rd"><Link to="/spell/chill_metal">Chill metal</Link>, <Link to="/spell/heat_metal">heat metal</Link></Pair>
<Pair plain title="5th"><Link to="/spell/rusting_grasp">Rusting grasp</Link></Pair>
<Pair plain title="9th"><Link to="/spell/repel_metal_or_stone">Repel metal or stone</Link></Pair>
</Ability>
<Ability id="arcaneschool-metal-metal-rending-su" icon={["magic-swirl","rolling-dices"]}>
<Pair single id="arcaneschool-metal-metal-rending-su">Metal Rending (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever you cast a spell that deals hit point damage, you deal extra damage to creatures made of metal or wearing medium or heavy metal armor. Affected creatures take additional damage equal to 1/2 your wizard level. This bonus damage is not increased by <Link to="/feat/empower_spell">Empower Spell</Link> or similar effects. This bonus only applies once to a spell, not once per missile or ray, and cannot be split between multiple missiles or rays. The damage is of the same type as the spell.</Pair>
<Pair title="At 20th Level">Whenever you cast a spell on a creature made of metal or wearing medium or heavy armor, you can roll twice to penetrate the creature's spell resistance and take the better result.</Pair>
</Ability>
<Ability id="arcaneschool-metal-iron-skin-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-metal-iron-skin-su">Iron Skin (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You gain an armor bonus to your Armor Class for 10 minutes. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level.</Pair>
</Ability>
<Ability id="arcaneschool-metal-shrapnel-burst-su" icon={["aura"]}>
<Pair single id="arcaneschool-metal-shrapnel-burst-su">Shrapnel Burst (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels beyond 8th<ByLevelPop levels={[[8,1],[13,2],[18,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">You can cause jagged pieces of metal to explode outward from your body. These shards deal 1d6 points of piercing damage per two wizard levels (minimum 1d6) to all creatures within a 10-foot-radius <Link to="/misc/burst">burst</Link>. A Reflex save halves this damage. In addition, the twisted scraps of metal make the area <Link to="/rule/difficult_terrain">difficult terrain</Link> until your next turn (at which time they disappear).</Pair>
<Pair title="At 10th Level">The shrapnel bypasses damage reduction as if it were a magic weapon.</Pair>
</Ability>
<h3 id="arcaneschool-metal-metal-spells" data-hash-target>Metal Spells</h3>
<ul>
<li>0-<Link to="/spell/mending">mending</Link></li>
<li>1st-<Link to="/spell/gravity_bow">gravity bow</Link>, <Link to="/spell/magic_weapon">magic weapon</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link></li>
<li>2nd-<Link to="/spell/defensive_shock">defensive shock</Link>, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/make_whole">make whole</Link>, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/silk_to_steel">silk to steel</Link></li>
<li>3rd-<em>chill metal, heat metal,</em> <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/keen_edge">keen edge</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>, <Link to="/spell/versatile_weapon">versatile weapon</Link></li>
<li>4th-<Link to="/spell/malfunction">malfunction</Link>, <Link to="/spell/shout">shout</Link>, <Link to="/spell/stoneskin">stoneskin</Link></li>
<li>5th-<Link to="/spell/lightning_arc">lightning arc</Link>, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/rapid_repair">rapid repair</Link>, <em>rusting grasp,</em> <Link to="/spell/soothe_construct">soothe construct</Link>, <Link to="/spell/unbreakable_construct">unbreakable construct</Link></li>
<li>6th-<Link to="/spell/chain_lightning">chain lightning</Link>, <Link to="/spell/disintegrate">disintegrate</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link></li>
<li>7th-<Link to="/spell/control_construct">control construct</Link>, <Link to="/spell/statue">statue</Link></li>
<li>8th-<Link to="/spell/call_construct">call construct</Link>, <Link to="/spell/iron_body">iron body</Link>, <Link to="/spell/greater_shout">greater shout</Link>, <Link to="/spell/stormbolts">stormbolts</Link></li>
<li>9th-<Link to="/spell/meteor_swarm">meteor swarm</Link>, <em>repel metal or stone,</em> <Link to="/spell/ride_the_lightning">ride the lightning</Link></li>
</ul>
</>};
const _void = {hasJL:true,title: "Void", jsx: <><div className="jumpList" id="arcaneschool-void-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-void-void-spells">Void Spells</InnerLink></li></ul></div><h2 id="arcaneschool-void-void">Void</h2>
<p><strong>Sources</strong> <Link to="/source/dragon_empires_primer">Dragon Empires Primer pg. 29</Link><br/>The void is a complex idea considered by some to be a fifth element, one that comprises thought, space, spiritualism, and insight. Wizards who tap into its mysterious powers gain control over energies that bind the earth to the heavens and the planes to their mysterious and eternal alignments, as well as the powers that stitch living beings to their spirits. The void elemental school presented here is an additional arcane school for the wizard class.</p>
<p>A wizard who specializes in the void element gains a number of school powers and one bonus spell slot of each level that the wizard can cast, from 1st on up. This bonus spell slot must be used to prepare a spell from the void elemental school's spell list. Unlike a normal arcane school, the void elemental school requires the wizard to select a single element (air, earth, fire, or water) as his opposition school. A wizard must expend two spell slots to prepare a spell from his opposed elemental school as normal. He does not need to select a second opposition school.</p>
<Ability id="arcaneschool-void-void-magic" icon={["spell-book"]}>
<Pair single id="arcaneschool-void-void-magic">Void Magic</Pair>
<Pair title="Info">Add these spells to your wizard spell list at the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/keen_senses">Keen senses</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/twilight_knife">Twilight knife</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wandering_star_motes">Wandering star motes</Link></Pair>
<Pair plain title="6th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
</Ability>
<Ability id="arcaneschool-void-void-awareness-su" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="arcaneschool-void-void-awareness-su">Void Awareness (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your ability to recognize the void allows your body to react to magical manifestations before you're even aware of them. You gain an insight bonus on saving throws against spells and spell-like abilities. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level.</Pair>
<Pair title="At 20th Level">Whenever you would be affected by a spell or spell-like ability that allows a saving throw, you can roll twice to save against the effect and take the better result.</Pair>
</Ability>
<Ability id="arcaneschool-void-reveal-weakness-su" icon={["armor-downgrade"]}>
<Pair single id="arcaneschool-void-reveal-weakness-su">Reveal Weakness (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">Select a foe within 30 feet. That creature takes a penalty to its AC and on saving throws equal to 1/2 your caster level (minimum -1) for 1 round.</Pair>
</Ability>
<Ability id="arcaneschool-void-aura-of-prescience-su" icon={["upgrade"]}>
<Pair single id="arcaneschool-void-aura-of-prescience-su">Aura of Prescience (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per wizard level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can emit a 30-foot aura of void energy. Allies within this aura gain a +2 insight bonus on ability checks, attack rolls, damage rolls, saving throws, and skill checks.</Pair>
</Ability>
<h3 id="arcaneschool-void-void-spells" data-hash-target>Void Spells</h3>
<ul>
<li>0-<Link to="/spell/guidance">guidance</Link></li>
<li>1st-<Link to="/spell/gravity_bow">gravity bow</Link>, <em>keen senses,</em> <Link to="/spell/shield">shield</Link>, <Link to="/spell/true_strike">true strike</Link></li>
<li>2nd-<Link to="/spell/continual_flame">continual flame</Link>, <Link to="/spell/haunting_mists">haunting mists</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/masterwork_transformation">masterwork transformation</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/share_memory">share memory</Link></li>
<li>3rd-<Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/nondetection">nondetection</Link>, <Link to="/spell/seek_thoughts">seek thoughts</Link>, <em>twilight knife</em></li>
<li>4th-<Link to="/spell/minor_creation">minor creation</Link>, <Link to="/spell/moonstruck">moonstruck</Link>, <em>wandering star motes</em></li>
<li>5th-<Link to="/spell/fabricate">fabricate</Link>, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/mind_fog">mind fog</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link>, <Link to="/spell/teleport">teleport</Link></li>
<li>6th-<Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, <Link to="/spell/legend_lore">legend lore</Link>, <em>true seeing,</em> <Link to="/spell/mages_lucubration">mage's lucubration</Link></li>
<li>7th-<Link to="/spell/greater_teleport">greater teleport</Link>, <Link to="/spell/simulacrum">simulacrum</Link>, <Link to="/spell/vision">vision</Link></li>
<li>8th-<Link to="/spell/mind_blank">mind blank</Link>, <em>moment of prescience,</em> <Link to="/spell/orb_of_the_void">orb of the void</Link>, <Link to="/spell/whirlwind">whirlwind</Link></li>
<li>9th-<Link to="/spell/foresight">foresight</Link>, <Link to="/spell/mages_disjunction">mage's disjunction</Link>, <Link to="/spell/time_stop">time stop</Link></li>
</ul>
</>};
const _water = {hasJL:true,title: "Water", jsx: <><div className="jumpList" id="arcaneschool-water-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-water-ice-school">Ice School</InnerLink></li><li><InnerLink toTop to="arcaneschool-water-mud-school">Mud School</InnerLink></li><li><InnerLink toTop to="arcaneschool-water-water-spells">Water Spells</InnerLink></li></ul></div><h2 id="arcaneschool-water-water">Water</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 143</Link><br/>The water elementalist draws magic from the ocean depths. His power is fluid as well, crushing foes in mighty waves or wearing them down through timeless erosion.</p>
<Ability id="arcaneschool-water-water-supremacy-su" icon={["upgrade","stairs-goal","rolling-dices"]}>
<Pair single id="arcaneschool-water-water-supremacy-su">Water Supremacy (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus on Swim skill checks. This bonus is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. In addition, you can <Link to="/misc/hold_your_breath">hold your breath</Link> for a number of rounds equal to four times your Constitution score before you must start making checks to avoid <Link to="/rule/drowning">drowning</Link>.</Pair>
<Pair title="At 10th Level">You gain a swim speed equal to your base speed.</Pair>
<Pair title="At 20th Level">Whenever you make a Swim skill check, assume the roll resulted in a natural 20.</Pair>
</Ability>
<Ability id="arcaneschool-water-cold-blast-su" icon={["aura"]}>
<Pair single id="arcaneschool-water-cold-blast-su">Cold Blast (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can unleash a blast of freezing cold. This blast deals 1d6 points of cold damage + 1 point for every two wizard levels you possess to all creatures within 5 feet of you and <Link to="/misc/stagger">staggers</Link> them for 1 round. A successful Reflex save negates the staggered effect and halves the damage. The DC of this save is equal to 10 + 1/2 your wizard level + your Intelligence modifier.</Pair>
</Ability>
<Ability id="arcaneschool-water-wave-su" icon={["barbed-arrow"]}>
<Pair single id="arcaneschool-water-wave-su">Wave (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per two wizard levels<ByLevelPop levels={[[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="round" postText="/day" /></Pair>
<Pair title="Standard Action">You can create a wave of water that starts at your location and moves 30 feet per round away from you in a direction of your choosing. Creatures struck by the wave might be knocked down and pushed away. Make a caster level check against the CMD of each creature struck. If you succeed, the creature is knocked <Link to="/rule/prone">prone</Link>. If your check exceeds the CMD of the creature by 5 or more, it is carried with the wave during the wave's movement this round. You receive a +5 bonus on this check if the creature shares its space with the wave at the start of your turn (when the wave moves). Creatures carried in this way can move out of the wave on their turn if they succeed on a Strength check (DC = 10 + 1/2 your caster level + your Intelligence modifier), but they cannot breathe while sharing space with the wave. The wave is up to 20 feet high and up to 5 feet long for each wizard level you possess. Nonmagical fires hit by the wave are automatically extinguished. Magical fire effects are unaffected.</Pair>
</Ability>
<h3 id="arcaneschool-water-ice-school" data-hash-target>Ice School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Air or Water.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>cold blast</em> and <em>wave powers</em> of the water school.</p>
<Ability id="arcaneschool-water-freezing-shards-su" icon={["aura"]}>
<Pair single id="arcaneschool-water-freezing-shards-su">Freezing Shards (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can cause shards of ice to burst forth from the ground around you. The shards deal 1d4 points of piercing damage and 1d6 points of cold damage + 1 point for every 2 wizard levels you have to all creatures within 5 feet of you. A successful Reflex save (DC = 10 + half your wizard level + your Intelligence modifier) negates the piercing damage and halves the cold damage. The shards remain until the beginning of your next turn; during this time, the area is <Link to="/rule/difficult_terrain">difficult terrain</Link>. You are not affected by your own freezing shards and can move through the area normally.</Pair>
</Ability>
<Ability id="arcaneschool-water-icy-shackles-su" icon={["mailed-fist"]}>
<Pair single id="arcaneschool-water-icy-shackles-su">Icy Shackles (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">Int modifier times/day</Pair>
<Pair title="Standard Action">You can make a melee touch attack against a foe to conjure icy restraints around its ankles, reducing its base speed to 5 feet and dealing it an amount of cold damage at the beginning of its turn equal to your Intelligence modifier. The manacles have AC 10, hardness 0, and 30 hit points, and a creature can destroy them with a successful Strength check (DC = 10 + half your wizard level + your Intelligence modifier) as a standard action. The icy shackles melt away after 1 minute.</Pair>
</Ability>
<h3 id="arcaneschool-water-mud-school" data-hash-target>Mud School</h3>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 21</Link><br/><strong>Associated School:</strong> Earth or Water.</p>
<p><strong>Replacement Powers:</strong> The following school powers replace the <em>cold blast</em> and <em>wave</em> powers of the water school.</p>
<Ability id="arcaneschool-water-hindering-muck-su" icon={["tornado-discs"]}>
<Pair single id="arcaneschool-water-hindering-muck-su">Hindering Muck (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can create a 15-foot cone of sticky mud. Any creature in the cone must succeed at a Reflex save (DC = 10 + half your wizard level + your Intelligence modifier) or become <Link to="/rule/entangled">entangled</Link> for 1 round for every wizard level you have. An affected creature can take a standard action that provokes attacks of opportunity to wipe off enough of the mud to remove the entangled condition. Jumping into a large body of water or being subject to an effect that creates a substantial amount of water (such as a casting of <Link to="/spell/create_water">create water</Link>) removes all the mud on a creature.</Pair>
</Ability>
<Ability id="arcaneschool-water-mud-missile-su" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-water-mud-missile-su">Mud Missile (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day per two wizard levels<ByLevelPop levels={[[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">You can fling a ball of hardened mud at a foe within 30 feet. If you succeed at a ranged touch attack, the mud slams into the target's face, dealing 1d6 points of bludgeoning damage for every 2 wizard levels you have and <Link to="/misc/blind">blinding</Link> the target for 1d4 rounds. A creature can remove the blinding mud from itself or another creature with a successful Strength check (DC = 10 + half your wizard level) as a standard action.</Pair>
</Ability>
<h3 id="arcaneschool-water-water-spells" data-hash-target>Water Spells</h3>
<ul>
<li>0-<Link to="/spell/ray_of_frost">ray of frost</Link></li>
<li>1st-<Link to="/spell/hydraulic_push">hydraulic push</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/touch_of_the_sea">touch of the sea</Link></li>
<li>2nd-<Link to="/spell/accelerate_poison">accelerate poison</Link>, <Link to="/spell/elemental_speech">elemental speech</Link>, <Link to="/spell/elemental_touch">elemental touch</Link>, <Link to="/spell/fog_cloud">fog cloud</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/slipstream">slipstream</Link>, <Link to="/spell/summon_monster_ii">summon monster II</Link></li>
<li>3rd-<Link to="/spell/aqueous_orb">aqueous orb</Link>, <Link to="/spell/draconic_reservoir">draconic reservoir</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>, <Link to="/spell/hydraulic_torrent">hydraulic torrent</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/sleet_storm">sleet storm</Link>, <Link to="/spell/water_breathing">water breathing</Link></li>
<li>4th-<Link to="/spell/detonate">detonate</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <Link to="/spell/elemental_body_i">elemental body I</Link>, <Link to="/spell/ice_storm">ice storm</Link>, <Link to="/spell/solid_fog">solid fog</Link>, <Link to="/spell/summon_monster_iv">summon monster IV</Link>, <Link to="/spell/wall_of_ice">wall of ice</Link></li>
<li>5th-<Link to="/spell/cloudkill">cloudkill</Link>, <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/elemental_body_ii">elemental body II</Link>, <Link to="/spell/geyser">geyser</Link>, <Link to="/spell/planar_adaptation">planar adaptation</Link>, <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link></li>
<li>6th-<Link to="/spell/elemental_body_iii">elemental body III</Link>, <Link to="/spell/fluid_form">fluid form</Link>, <Link to="/spell/freezing_sphere">freezing sphere</Link>, <Link to="/spell/planar_binding">planar binding</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link></li>
<li>7th-<Link to="/spell/control_weather">control weather</Link>, <Link to="/spell/elemental_body_iv">elemental body IV</Link>, <Link to="/spell/mass_planar_adaptation">mass planar adaptation</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link>, <Link to="/spell/vortex">vortex</Link></li>
<li>8th-<Link to="/spell/horrid_wilting">horrid wilting</Link>, <Link to="/spell/greater_planar_binding">greater planar binding</Link>, <Link to="/spell/polar_ray">polar ray</Link>, <Link to="/spell/seamantle">seamantle</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link></li>
<li>9th-<Link to="/spell/gate">gate</Link>, <Link to="/spell/tsunami">tsunami</Link>, <Link to="/spell/world_wave">world wave</Link></li>
</ul>
</>};
const _wood = {hasJL:true,title: "Wood", jsx: <><div className="jumpList" id="arcaneschool-wood-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arcaneschool-wood-wood-spells">Wood Spells</InnerLink></li></ul></div><h2 id="arcaneschool-wood-wood">Wood</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 88</Link><br/>Wood represents flexibility, warmth, wind, generosity, cooperation, and idealism. Practitioners of this elemental magic often resemble druids in character and in the use of their magic.</p>
<Ability id="arcaneschool-wood-wood-magic" icon={["spell-book"]}>
<Pair single id="arcaneschool-wood-wood-magic">Wood Magic</Pair>
<Pair title="Info">Add these spells to your wizard spell list at the listed spell level.</Pair>
<Pair plain title="2nd"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/tree_shape">Tree shape</Link></Pair>
<Pair plain title="4th"><Link to="/spell/plant_growth">Plant growth</Link></Pair>
<Pair plain title="5th"><Link to="/spell/command_plants">Command plants</Link></Pair>
<Pair plain title="6th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="7th"><Link to="/spell/liveoak">Liveoak</Link></Pair>
<Pair plain title="8th"><Link to="/spell/transmute_metal_to_wood">Transmute metal to wood</Link></Pair>
<Pair plain title="9th"><Link to="/spell/control_plants">Control plants</Link></Pair>
</Ability>
<Ability id="arcaneschool-wood-flexible-enhancement-su" icon={["armor-upgrade"]}>
<Pair single id="arcaneschool-wood-flexible-enhancement-su">Flexible Enhancement (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A master of the wood element is able to bend like bamboo when stressed and snap back into place. You gain an enhancement bonus to your Dexterity, Constitution, or Wisdom ability score. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your wizard level. You can change this bonus to a new ability score when you prepare spells.</Pair>
<Pair title="At 20th Level">This bonus now applies to two of these ability scores of your choice.</Pair>
</Ability>
<Ability id="arcaneschool-wood-splintered-spear-su" icon={["smoking-finger"]}>
<Pair single id="arcaneschool-wood-splintered-spear-su">Splintered Spear (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Standard Action">You can create a wooden <Link to="/eq-weapon/shortspear">shortspear</Link> appropriate to your size, which hurls itself as a ranged attack against one target within 100 feet (range penalties apply), using your Intelligence modifier as an attack bonus instead of your Strength or Dexterity modifier. The spear deals normal damage according to its size, plus your Intelligence modifier, then breaks into countless splinters; the target takes 1 point of <Link to="/rule/bleed">bleed</Link> damage each round on its turn.</Pair>
<Pair title="At 6th Level">The spear gains a +1 enhancement bonus and the bleed damage increases to 2.</Pair>
<Pair title="At 12th Level">The spear's bonus becomes +2 and the bleed damage increases to 3.</Pair>
<Pair title="At 18th Level">The spear's bonus becomes +3 and the bleed damage increases to 4.</Pair>
</Ability>
<Ability id="arcaneschool-wood-cooperative-defense-su" icon={["shield-reflect"]}>
<Pair single id="arcaneschool-wood-cooperative-defense-su">Cooperative Defense (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four wizard levels beyond 8th<ByLevelPop levels={[[8,1],[12,2],[16,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">Whenever a spell or effect targets you and one or more allies within 30 feet, you can use this ability to allow your allies to use your saving throw against the effect in place of their own. Each ally must make this choice individually before the rolls are made.</Pair>
</Ability>
<h3 id="arcaneschool-wood-wood-spells" data-hash-target>Wood Spells</h3>
<ul>
<li>0-<Link to="/spell/light">light</Link></li>
<li>1st-<Link to="/spell/alter_winds">alter winds</Link>, <Link to="/spell/animate_rope">animate rope</Link>, <Link to="/spell/charm_person">charm person</Link></li>
<li>2nd-<Link to="/spell/cats_grace">cat's grace</Link>, <em>entangle,</em> <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/web">web</Link>, <Link to="/spell/whispering_wind">whispering wind</Link></li>
<li>3rd-<Link to="/spell/cloak_of_winds">cloak of winds</Link>, <Link to="/spell/tongues">tongues</Link>, <em>tree shape,</em> <Link to="/spell/wind_wall">wind wall</Link></li>
<li>4th-<Link to="/spell/charm_monster">charm monster</Link>, <Link to="/spell/hallucinatory_terrain">hallucinatory terrain</Link>, <Link to="/spell/minor_creation">minor creation</Link>, <em>plant growth,</em> <Link to="/spell/river_of_wind">river of wind</Link>, <Link to="/spell/secure_shelter">secure shelter</Link>, <Link to="/spell/sirocco">sirocco</Link></li>
<li>5th-<em>command plants,</em> <Link to="/spell/fabricate">fabricate</Link>, <Link to="/spell/fickle_winds">fickle winds</Link>, <Link to="/spell/mirage_arcana">mirage arcana</Link>, <Link to="/spell/sending">sending</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link></li>
<li>6th-<Link to="/spell/battlemind_link">battlemind link</Link>, <Link to="/spell/mass_cats_grace">mass cat's grace</Link>, <em>tree stride</em></li>
<li>7th-<Link to="/spell/control_weather">control weather</Link>, <em>liveoak,</em> <Link to="/spell/scouring_winds">scouring winds</Link></li>
<li>8th-<Link to="/spell/mass_charm_monster">mass charm monster</Link>, <Link to="/spell/euphoric_tranquility">euphoric tranquility</Link>, <em>transmute metal to wood</em></li>
<li>9th-<em>control plants,</em> <Link to="/spell/refuge">refuge</Link>, <Link to="/spell/winds_of_vengeance">winds of vengeance</Link>.</li>
</ul>
</>};
export default {not_found:_not_found,abjuration:_abjuration,conjuration:_conjuration,divination:_divination,enchantment:_enchantment,evocation:_evocation,illusion:_illusion,necromancy:_necromancy,transmutation:_transmutation,universalist:_universalist,aether:_aether,air:_air,earth:_earth,fire:_fire,metal:_metal,void:_void,water:_water,wood:_wood}