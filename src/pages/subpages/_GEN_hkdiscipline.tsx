import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested Hellknight discipline.</p>
</>};
const _brand = {title: "Brand", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 278</Link></p>
<Ability id="brand-sp" icon={["magic-swirl"]}>
<Pair single id="brand-sp">Brand (Sp)</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_pyre">Order of the Pyre</Link></Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/mark_of_justice">mark of justice</Link> as a spell-like ability.</Pair>
</Ability>
</>};
const _call_armor = {title: "Call Armor", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="call-armor-su" icon={["armor-upgrade"]}>
<Pair single id="call-armor-su">Call Armor (Su)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Move-Equivalent Action"><p>The Hellknight can cause her armor to instantly appear on her body. Alternatively, she can dismiss it as a move action, causing it to vanish. (Doing either of these counts as one use of this discipline.)</p>
<p>Where the armor appears from or vanishes to can be anywhere the Hellknight designates, but it must be a place the Hellknight has seen on the same plane of existence where she is, or be in an extradimensional space she controls, such as a bag of holding.</p>
</Pair>
<Pair title="Special">This armor is a specific suit of <Link to="/eq-armor/hellknight_plate">Hellknight plate</Link> that the Hellknight designates when she selects this discipline. The Hellknight can attune this ability to a new set of armor, but doing so takes 1 week.</Pair>
</Ability>
</>};
const _censor = {title: "Censor", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 278</Link></p>
<Ability id="censor-su" icon={["armor-downgrade"]}>
<Pair single id="censor-su">Censor (Su)</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_rack">Order of the Rack</Link></Pair>
<Pair title="Ability">When the Hellknight uses <em>smite chaos</em> on a creature, he can strike the creature mute for 1d4 rounds unless it makes a successful Will save. A mute creature cannot speak, nor can it cast spells that have verbal components or use language-dependant effects.</Pair>
</Ability>
</>};
const _command = {title: "Command", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="command-sp" icon={["magic-swirl"]}>
<Pair single id="command-sp">Command (Sp)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/greater_command">greater command</Link> as a spell-like ability, using her character level as her caster level.</Pair>
</Ability>
</>};
const _dispel_chaos = {title: "Dispel Chaos", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="dispel-chaos-sp" icon={["magic-swirl"]}>
<Pair single id="dispel-chaos-sp">Dispel Chaos (Sp)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/dispel_chaos">dispel chaos</Link> as a spell-like ability, using her character level as her caster level.</Pair>
</Ability>
</>};
const _favored_quarry = {title: "Favored Quarry", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="favored-quarry-ex" icon={["upgrade"]}>
<Pair single id="favored-quarry-ex">Favored Quarry (Ex)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Choice">The Hellknight chooses a creature type from the ranger <Link to="/ability/favored_enemy">favored enemy</Link> table (usually humanoid with a specific subtype, but this is not required).</Pair>
<Pair title="Passive Ability">The Hellknight gains a +2 bonus on Bluff, Intimidate, Knowledge, Perception, Sense Motive, and Survival checks against creatures of her selected type. She can also attempt Knowledge skill checks untrained to identify those creatures.</Pair>
<Pair title="Special">Each time the Hellknight chooses an additional discipline, this bonus increases by 2 (to a potential maximum of +6 at 9th level).</Pair>
</Ability>
</>};
const _fearsomeness = {title: "Fearsomeness", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="fearsomeness-ex" icon={["armor-downgrade"]}>
<Pair single id="fearsomeness-ex">Fearsomeness (Ex)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">A Hellknight who uses the Intimidate skill to cause a creature within 10 feet to become <Link to="/misc/shaken">shaken</Link> can instead cause that creature to become <Link to="/misc/frightened">frightened</Link>.</Pair>
</Ability>
</>};
const _invoke_glyph = {title: "Invoke Glyph", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_107_scourge_of_the_godclaw">Pathfinder #107: Scourge of the Godclaw pg. 47</Link></p>
<Ability id="invoke-glyph-sp-and-ex" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="invoke-glyph-sp-and-ex">Invoke Glyph (Sp and Ex)</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_glyph">Order of the Glyph</Link></Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/glyph_of_warding">glyph of warding</Link> as a spell-like ability. While this ability does not require an expensive material component, a single Hellknight can maintain only one <em>glyph of warding</em> at a time; if he uses this spell-like ability a second time, the previously created <em>glyph of warding</em> vanishes.</Pair>
<Pair title="Passive Ability">The Hellknight gains a +4 bonus on saving throws against <em>glyph of warding</em> or <Link to="/main/symbol_spells">symbol spells</Link>.</Pair>
</Ability>
</>};
const _mental_intrusion = {title: "Mental Intrusion", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="mental-intrusion-sp" icon={["magic-swirl"]}>
<Pair single id="mental-intrusion-sp">Mental Intrusion (Sp)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/telepathy">telepathy</Link> as a spell-like ability, using her character level as her caster level.</Pair>
</Ability>
</>};
const _onslaught = {title: "Onslaught", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="onslaught-su" icon={["upgrade"]}>
<Pair single id="onslaught-su">Onslaught (Su)</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_nail">Order of the Nail</Link></Pair>
<Pair title="Free Action">Once per day, a Hellknight increases his base speed by +10 feet and gains a +4 bonus to his Strength for 1 round. If the Hellknight is mounted, these bonuses also apply to his mount.</Pair>
</Ability>
</>};
const _pentamic_faith = {title: "Pentamic Faith", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="pentamic-faith-ex" icon={["upgrade"]}>
<Pair single id="pentamic-faith-ex">Pentamic Faith (Ex)</Pair>
<Pair title="Prerequisites">Must be of the <em>Order of the Godclaw.</em></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_godclaw">Order of the Godclaw</Link></Pair>
<Pair title="Choice">This ability allows the Hellknight to select one of the following domains: <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/travel">Travel</Link>, and <Link to="/domain/war">War</Link>.</Pair>
<Pair title="Ability">The Hellknight gains all of the granted powers (but not domain spells) of that domain, treating his Hellknight levels as cleric levels to determine what domain abilities he has access to.</Pair>
</Ability>
</>};
const _seek_the_taken = {title: "Seek the Taken", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_98_turn_of_the_torrent">Pathfinder #98: Turn of the Torrent pg. 67</Link></p>
<Ability id="seek-the-taken" icon={["magic-swirl"]}>
<Pair single id="seek-the-taken">Seek the Taken</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_torrent">Order of the Torrent</Link></Pair>
<Pair title="Ability" hl>When a member of the <em>Order of the Torrent</em> becomes a 3rd-level Hellknight, he gains his first discipline: <em>seek the taken.</em> This enables the Hellknight to use an <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/locate_creature">locate creature</Link> as a spell-like ability with a caster level equal to his total character level.</Pair>
<Pair title="Special">When an <em>Order of the Torrent</em> Hellknight gains his third discipline, he cannot choose the <Link to="/hkdiscipline/summon_devil">summon devil</Link> discipline.</Pair>
</Ability>
</>};
const _shackle = {title: "Shackle", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="shackle-su" icon={["armor-downgrade"]}>
<Pair single id="shackle-su">Shackle (Su)</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_chain">Order of the Chain</Link></Pair>
<Pair title="Ability">When the Hellknight uses <em>smite chaos</em> on a creature, he can impede its mobility. The creature can negate this effect with a Will save; otherwise, it is affected as if by a <Link to="/spell/slow">slow</Link> spell for 1d4 rounds.</Pair>
</Ability>
</>};
const _shadow_step = {title: "Shadow Step", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="shadow-step-sp" icon={["magic-swirl"]}>
<Pair single id="shadow-step-sp">Shadow Step (Sp)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/shadow_step">shadow step</Link> as a spell-like ability, as if the Enlarge Spell metamagic feat were applied to the spell, using her character level as her caster level.</Pair>
</Ability>
</>};
const _summon_devil = {title: "Summon Devil", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="summon-devil-sp" icon={["magic-swirl"]}>
<Pair single id="summon-devil-sp">Summon Devil (Sp)</Pair>
<Pair title="Prerequisites">Cannot be in the <Link to="/hkorder/order_of_the_torrent">Order of the Torrent</Link></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_gate">Order of the Gate</Link></Pair>
<Pair title="Ability">The Hellknight may use <Link to="/spell/summon_monster_v">summon monster V</Link> as a spell-like ability to summon 1 <Link to="/monster/bearded_devil">bearded devil</Link>.</Pair>
<Pair title="At 6th Level">This spell-like ability is replaced by <Link to="/spell/summon_monster_vi">summon monster VI</Link>, allowing him to summon 1d3 bearded devils, or 1 <Link to="/monster/erinyes">erinyes</Link>.</Pair>
<Pair title="At 9th Level">This spell-like ability is replaced by <Link to="/spell/summon_monster_vii">summon monster VII</Link>, allowing him to summon 1d4+1 bearded devils, 1d3 erinyes, or 1 <Link to="/monster/bone_devil">bone devil</Link>.</Pair>
</Ability>
</>};
const _summon_servant_of_law = {title: "Summon Servant of Law", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="summon-servant-of-law-sp" icon={["magic-swirl"]}>
<Pair single id="summon-servant-of-law-sp">Summon Servant of Law (Sp)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can summon a creature or creatures to help her, as if using a <Link to="/spell/summon_monster">summon monster</Link> spell.</Pair>
<Pair title="At 3rd Level">She can summon 1d3 <Link to="/monster/hell_hound">hell hounds</Link>.</Pair>
<Pair title="At 6th Level">She can summon 1d3 <Link to="/template/advanced">advanced</Link> hell hounds or one <Link to="/monster/axiomite">axiomite</Link>.</Pair>
<Pair title="At 9th Level">She can summon 1d4+1 hell hounds, 1d3 axiomites, or one <Link to="/monster/zelekhut">zelekhut inevitable</Link>.</Pair>
</Ability>
</>};
const _trace = {title: "Trace", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="trace-su" icon={["magic-swirl"]}>
<Pair single id="trace-su">Trace (Su)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can study a single personal belonging of a creature for 1 minute, after which she knows the general direction of the creature's current location as long as it is within 1 mile and on the same plane. She also learns the direction the creature is currently moving, if any. This effect lasts for 10 minutes per character level.</Pair>
<Pair title="Special"><p>An object can be used as the focus for this ability only once. For the purposes of this ability, a "personal belonging" is any object a creature owned or carried with it for more than a week.</p>
<p>If the target is under the effects of <Link to="/spell/nondetection">nondetection</Link> or a similar spell or effect, or is on a different plane, this ability gives no result.</p>
</Pair>
</Ability>
</>};
const _tracker = {title: "Tracker", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="tracker-sp" icon={["magic-swirl"]}>
<Pair single id="tracker-sp">Tracker (Sp)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can summon a creature to aid him, either in battle or to track an enemy, as if using a <Link to="/spell/summon_monster">summon monster</Link> spell, save that the summoned creature lingers for 1 hour before vanishing.</Pair>
<Pair title="At 6th Level">The Hellknight can summon either an <Link to="/monster/eagle">eagle</Link>, a <Link to="/monster/riding_dog">riding dog</Link>, a <Link to="/monster/wolf">wolf</Link>, or a <Link to="/monster/leopard">leopard</Link>.</Pair>
<Pair title="At 9th Level">The Hellknight can instead opt to summon a <Link to="/monster/dire_wolf">dire wolf</Link> or a <Link to="/monster/hell_hound">hell hound</Link>.</Pair>
</Ability>
</>};
const _versatile_intimidation = {title: "Versatile Intimidation", jsx: <><p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 59</Link></p>
<Ability id="versatile-intimidation-ex" icon={["upgrade"]}>
<Pair single id="versatile-intimidation-ex">Versatile Intimidation (Ex)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use Intimidate to reproduce the effects of another Charisma-based skill. Choose one of the following: Bluff, Diplomacy, Handle Animal, or Perform (oratory). Each time the Hellknight wishes to use that skill, she can attempt an Intimidate check and treat it as if it were a check of the desired type.</Pair>
<Pair title="At 9th Level">The Hellknight can choose an additional skill from the list above and use Intimidate to reproduce its effects.</Pair>
</Ability>
</>};
const _vigilance = {title: "Vigilance", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="vigilance-su" icon={["stairs-goal"]}>
<Pair single id="vigilance-su">Vigilance (Su)</Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_scourge">Order of the Scourge</Link></Pair>
<Pair title="Ability">The Hellknight gains low-light vision (this effect is constant).</Pair>
<Pair title="Full-Round Action">The Hellknight can see through up to 5 feet of stone, wood, or similar barriers as if they didn't exist. Metal or denser barriers block this effect. Each use of this ability lasts as long as the Hellknight concentrates, up to a number of rounds equal to the Hellknight's level.</Pair>
</Ability>
</>};
const _wrack = {title: "Wrack", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 279</Link></p>
<Ability id="wrack-su" icon={["magic-palm"]}>
<Pair single id="wrack-su">Wrack (Su)</Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Standard Action">The Hellknight may make a touch attack to cause a creature to suffer incredible pain. The creature touched takes 1d6 points of damage + the Hellknight's Charisma modifier, and must make a Will save to avoid being <Link to="/misc/staggered">staggered</Link> for 1d4 rounds.</Pair>
</Ability>
</>};
export default {not_found:_not_found,brand:_brand,call_armor:_call_armor,censor:_censor,command:_command,dispel_chaos:_dispel_chaos,favored_quarry:_favored_quarry,fearsomeness:_fearsomeness,invoke_glyph:_invoke_glyph,mental_intrusion:_mental_intrusion,onslaught:_onslaught,pentamic_faith:_pentamic_faith,seek_the_taken:_seek_the_taken,shackle:_shackle,shadow_step:_shadow_step,summon_devil:_summon_devil,summon_servant_of_law:_summon_servant_of_law,trace:_trace,tracker:_tracker,versatile_intimidation:_versatile_intimidation,vigilance:_vigilance,wrack:_wrack}