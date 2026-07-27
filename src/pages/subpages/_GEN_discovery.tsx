import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested alchemist discovery.</p>
</>};
const _acid_bomb = {title: "Acid Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="acid-bomb" icon={["stairs-goal"]}>
<Pair single id="acid-bomb">Acid Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it inflict acid damage. Creatures that take a direct hit from an <em>acid bomb</em> take an additional 1d6 points of acid damage 1 round later.</Pair>
</Ability>
</>};
const _anarchic_bombs = {title: "Anarchic Bombs", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="anarchic-bombs" icon={["stairs-goal"]}>
<Pair single id="anarchic-bombs">Anarchic Bombs</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal chaotic divine damage. Lawful creatures that take a direct hit from an <em>anarchic bomb</em> must succeed at a Fortitude save or be <Link to="/misc/staggered">staggered</Link> on their next turn. Against neutral creatures, <em>anarchic bombs</em> deal half damage, and such targets are not affected by their staggering effect. <em>Anarchic bombs</em> have no effect on chaotic-aligned creatures.</Pair>
</Ability>
</>};
const _anguish_bomb = {title: "Anguish Bomb", addenda: ["primarybomb"], tree: ["Dread Bomb","Melancholy Bomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms</Link></p>
<Ability id="anguish-bomb" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="anguish-bomb">Anguish Bomb</Pair>
<Pair title="Ability">You can throw bombs infused with psychic trauma.</Pair>
<Pair title="Special">This discovery allows other alchemists to duplicate the <em>anguish bombs</em> used by <Link to="/arc-alchemist/mnemostiller">mnemostillers</Link>.</Pair>
</Ability>
<Ability id="anguish-bomb-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="anguish-bomb-su" flavor="Text from the mnemostiller archetype ability.">Anguish Bomb (Su)</Pair>
<Pair title="Ability">An <em>anguish bomb</em> is identical to a bomb except that it deals nonlethal damage, it deals no damage to inanimate objects and creatures immune to mental effects, and creatures caught in the <em>anguish bomb's</em> splash can attempt a Will save for half damage. A mnemostiller uses his Charisma score in place of his Intelligence score to determine the bonus damage of his <em>anguish bomb</em> and the save DC of the <em>anguish bomb's</em> splash damage. He still uses his Intelligence score to determine his number of bombs per day.</Pair>
<Pair title="Special">If the mnemostiller has taken any hit point damage in the past 24 hours, his <em>anguish bombs</em> inflict 1 additional point of nonlethal damage for every 2 alchemist levels he has.</Pair>
</Ability>
</>};
const _dread_bomb = {title: "Dread Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms</Link></p>
<Ability id="dread-bomb" icon={["armor-downgrade"]}>
<Pair single id="dread-bomb" flavor={<>Your <em>anguish bombs</em> are tainted with fear and dread.</>}>Dread Bomb</Pair>
<Pair title="Prerequisites">6th-level alchemist, <Link to="/discovery/anguish_bomb">anguish bomb</Link></Pair>
<Pair title="Ability">Creatures who take damage from your <em>anguish bombs</em> become <Link to="/misc/frightened">frightened</Link> for 1d6 rounds. A target that succeeds at a Will saving throw is instead <Link to="/misc/shaken">shaken</Link> for a single round.</Pair>
</Ability>
</>};
const _melancholy_bomb = {title: "Melancholy Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms</Link></p>
<Ability id="melancholy-bomb" icon={["armor-downgrade"]}>
<Pair single id="melancholy-bomb" flavor={<>Your <em>anguish bombs</em> are filled with memories of sadness and regret.</>}>Melancholy Bomb</Pair>
<Pair title="Prerequisites">10th-level alchemist, <Link to="/discovery/anguish_bomb">anguish bomb</Link></Pair>
<Pair title="Ability">Creatures who take damage from your <em>anguish bombs</em> are also affected as per <Link to="/spell/crushing_despair">crushing despair</Link> for 1 round per alchemist level, or a single round if the target succeeds at a Will saving throw.</Pair>
</Ability>
</>};
const _axiomatic_bombs = {title: "Axiomatic Bombs", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="axiomatic-bombs" icon={["stairs-goal"]}>
<Pair single id="axiomatic-bombs">Axiomatic Bombs</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal lawful divine damage. Chaotic creatures that take a direct hit from an <em>axiomatic bomb</em> must succeed at a Fortitude save or be <Link to="/misc/staggered">staggered</Link> on their next turn. Against neutral creatures, <em>axiomatic bombs</em> deal half damage, and such targets are not affected by their staggering effect. <em>Axiomatic bombs</em> have no effect on lawful creatures.</Pair>
</Ability>
</>};
const _blinding_bomb = {title: "Blinding Bomb", addenda: ["primarybomb"], tree: ["Sunlight bomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="blinding-bomb" icon={["armor-downgrade"]}>
<Pair single id="blinding-bomb">Blinding Bomb</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose for it to detonate very brightly. Creatures that take a direct hit from a <em>blinding bomb</em> are <Link to="/misc/blinded">blinded</Link> for 1 minute unless they succeed at a Fortitude save. Creatures in the splash area that fail their saves against the bomb are <Link to="/misc/dazzled">dazzled</Link> for 1 minute.</Pair>
<Pair title="Special">This is a light effect.</Pair>
</Ability>
</>};
const _sunlight_bomb = {title: "Sunlight Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="sunlight-bomb" icon={["upgrade"]}>
<Pair single id="sunlight-bomb">Sunlight Bomb</Pair>
<Pair title="Prerequisites">10th-level alchemist, <Link to="/discovery/blinding_bomb">blinding bomb</Link></Pair>
<Pair title="Ability">The alchemist can throw bombs that explode with a searing radiance equivalent to that of sunlight and that act as <em>blinding bombs.</em> Undead, fungi, molds, oozes, slimes, and creatures to which sunlight is harmful or unnatural take +2 damage per die from the bomb. Undead that are harmed by sunlight and that fail their saves against the bomb are <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
</Ability>
</>};
const _boneshard_bomb = {title: "Boneshard Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook</Link></p>
<Ability id="boneshard-bomb" icon={["upgrade","magic-swirl"]}>
<Pair single id="boneshard-bomb" flavor="This discovery is popular among necromancers and necrologists alike; aside from its offensive potential, necrologists sometimes use it to turn uncooperative live creatures they wish to question into pliable undead.">Boneshard Bomb</Pair>
<Pair title="Prerequisites"><Link to="/discovery/alchemical_zombie">Alchemical zombie</Link></Pair>
<Pair title="Ability">The alchemist's bomb deals piercing damage instead of fire damage, and creatures that take a direct hit from a <em>boneshard bomb</em> must succeed at a Fortitude save or take 1d4 points of <Link to="/rule/bleed">bleed</Link> damage in addition to normal damage.</Pair>
<Pair title="Special">If a creature is killed by a <em>boneshard bomb</em> or the resulting bleed effect, its corpse immediately reanimates as an undead creature with the <Link to="/template/skeleton">skeleton template</Link>. Skeletons that are created in this manner count as undead created by <Link to="/spell/animate_dead">animate dead</Link> for the purposes of determining how many undead the alchemist can control.</Pair>
</Ability>
</>};
const _breath_weapon_bomb = {title: "Breath Weapon Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="breath-weapon-bomb" icon={["tornado-discs"]}>
<Pair single id="breath-weapon-bomb">Breath Weapon Bomb</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">Instead of drawing the components of, creating, and throwing a bomb, the alchemist can draw the components, drink them, mix them within his body, and then expel them as a breath weapon as a <strong className="hl">standard action</strong>. This breath weapon is a 15-foot cone and has the same DC as the bomb. Each creature within the cone takes damage as if it had suffered a direct hit from the alchemist's bomb, but succeeding at a Reflex save (DC = 10 + 1/2 the alchemist's level + the alchemist's Intelligent modifier) halves the damage.</Pair>
<Pair title="Special">Unlike throwing normal bombs, drawing, drinking, and expelling <em>breath weapon bombs</em> does not provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _concussive_bomb = {title: "Concussive Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="concussive-bomb" icon={["broken-shield","armor-downgrade"]}>
<Pair single id="concussive-bomb">Concussive Bomb</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it inflict sonic damage. <em>Concussive bombs</em> deal 1d4 points of sonic damage, plus 1d4 points of sonic damage for every odd-numbered level, instead of 1d6. Creatures that take a direct hit from a <em>concussive bomb</em> are <Link to="/misc/deafened">deafened</Link> for 1 minute unless they succeed at a Fortitude save.</Pair>
</Ability>
</>};
const _confusion_bomb = {title: "Confusion Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="confusion-bomb" icon={["armor-downgrade","broken-shield"]}>
<Pair single id="confusion-bomb" flavor="The alchemist's bombs twist the target's perception of friend and foe.">Confusion Bomb</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">A creature that takes a direct hit from a <em>confusion bomb</em> takes damage from the bomb and is under the effect of a <Link to="/spell/confusion">confusion</Link> spell for 1 round per caster level of the alchemist.</Pair>
<Pair title="Special">Reduce the amount of normal damage dealt by the bomb by 2d6 (so a bomb that would normally deal 6d6+4 points of damage deals 4d6+4 points of damage instead).</Pair>
</Ability>
</>};
const _cursed_bomb = {title: "Cursed Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="cursed-bomb" icon={["magic-swirl"]}>
<Pair single id="cursed-bomb">Cursed Bomb</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Ability">When an alchemist creates a bomb, he can choose to have it deliver a debilitating curse. A creature that takes a direct hit from a <em>cursed bomb</em> must succeed at a Will save or be affected by <Link to="/spell/bestow_curse">bestow curse</Link>.</Pair>
</Ability>
</>};
const _cytillesh_bomb = {title: "Cytillesh Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="cytillesh-bomb" icon={["broken-shield","armor-downgrade"]}>
<Pair single id="cytillesh-bomb">Cytillesh Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can infuse it with <Link to="/eq-poison/cytillesh_extract">cytillesh extract</Link>. <em>Cytillesh bombs</em> deal 1d4 points of damage, plus 1d4 points of damage for every odd-numbered level, instead of 1d6. Creatures that take a direct hit from a <em>cytillesh bomb</em> are <Link to="/misc/sickened">sickened</Link> for 1 round per alchemist level unless they succeed at Fortitude saves.</Pair>
<Pair title="Special">If a creature is rendered unconscious from this bomb or any other attack before it is able to remove the sickened condition, the victim loses all memory from the last hour and cannot form new memories for 8 hours. The lost and prevented memories might return later as dreams, and can be restored with a <Link to="/spell/restoration">restoration</Link> spell.</Pair>
</Ability>
</>};
const _darkness_bomb = {title: "Darkness Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="darkness-bomb" icon={["upgrade","magic-swirl"]}>
<Pair single id="darkness-bomb">Darkness Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it suppress light sources on the target. This extinguishes nonmagical light sources carried by the target and dispels magical light sources for 1 round/level as <Link to="/spell/deeper_darkness">deeper darkness</Link>.</Pair>
</Ability>
</>};
const _defoliant_bomb = {title: "Defoliant Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="defoliant-bomb" icon={["upgrade"]}>
<Pair single id="defoliant-bomb" flavor="These poisonous bombs clear away foliage, dealing extra damage to plant creatures.">Defoliant Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal extra damage against plant creatures but less damage against other creatures. Against creatures with the plant type, a <em>defoliant bomb</em> deals 1d8 points of damage, plus 1d8 points of damage for every odd-numbered level the alchemist possesses, instead of 1d6. Against all other creatures, the <em>defoliant bomb</em> only deals 1d4 points of damage, plus 1d4 points of damage for every odd-numbered level, instead of 1d6.</Pair>
<Pair title="Special">This is a poison effect. A <em>defoliant bomb</em> kills all normal vegetation in the target's square and its splash area; any plant-based <Link to="/rule/difficult_terrain">difficult terrain</Link> in the affected area becomes normal terrain.</Pair>
</Ability>
</>};
const _demolition_charge = {title: "Demolition Charge", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook</Link></p>
<Ability id="demolition-charge" icon={["stairs-goal"]}>
<Pair single id="demolition-charge">Demolition Charge</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal damage to an object as if by a <Link to="/rule/sunder">sunder</Link> combat maneuver. If the item is worn or held by an opponent, the item is considered the direct target, and the wearer/holder takes splash damage from the blast. If the object is unattended, a <em>demolition charge</em> deals an additional 2d6 points of damage on a direct hit. This bonus doesn't affect the bomb's splash damage.</Pair>
</Ability>
</>};
const _ectoplasmic_bomb = {title: "Ectoplasmic Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook</Link></p>
<Ability id="ectoplasmic-bomb" icon={["upgrade","magic-swirl"]}>
<Pair single id="ectoplasmic-bomb">Ectoplasmic Bomb</Pair>
<Pair title="Ability"><p>The alchemist can infuse her bombs with a special unction that damages incorporeal creatures and reveals the presence of undead creatures hiding in the area. Incorporeal creatures struck by an <em>ectoplasmic bomb</em> take full damage from the bomb.</p>
<p>In addition, squares in the affected area of the bomb begin to faintly glow in the spaces where undead creatures have traveled in the last minute, including undead benefiting from <Link to="/spell/invisibility">invisibility</Link> or other forms of obscurity (such as <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link>), effectively creating a glowing trail. Any undead creatures in the affected area at the time of the explosion likewise glow faintly. This glowing effect lasts for 1 minute, and is otherwise identical to <Link to="/spell/faerie_fire">faerie fire</Link>.</p>
</Pair>
</Ability>
</>};
const _explosive_bomb = {title: "Explosive Bomb", addenda: ["primarybomb"], tree: ["Hellfire Bomb","Siege Bomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="explosive-bomb" icon={["upgrade"]}>
<Pair single id="explosive-bomb">Explosive Bomb</Pair>
<Pair title="Ability">The alchemist's bombs now have a splash radius of 10 feet rather than 5 feet. Creatures that take a direct hit from an <em>explosive bomb</em> catch fire, taking 1d6 points of fire damage each round until the fire is extinguished.</Pair>
<Pair title="Special">Extinguishing the flames is a <strong className="hl">full-round action</strong> that requires a Reflex save. Rolling on the ground provides the target with a +2 to the save. Dousing the target with at least 2 gallons of water automatically extinguishes the flames.</Pair>
</Ability>
</>};
const _hellfire_bomb = {title: "Hellfire Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="hellfire-bomb" icon={["stairs-goal"]}>
<Pair single id="hellfire-bomb">Hellfire Bomb</Pair>
<Pair title="Prerequisites"><Link to="/race/tiefling">Tiefling</Link>, 9th-level alchemist, <Link to="/discovery/explosive_bomb">explosive bomb</Link></Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can have it act as an <em>explosive bomb,</em> but deal half of its damage as fire damage and half as unholy damage that is not subject to fire resistance or immunity.</Pair>
</Ability>
</>};
const _siege_bomb = {title: "Siege Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="siege-bomb" icon={["stairs-goal"]}>
<Pair single id="siege-bomb">Siege Bomb</Pair>
<Pair title="Prerequisites">12th-level alchemist, <Link to="/discovery/explosive_bomb">explosive bomb</Link></Pair>
<Pair title="Standard Action"><p>The alchemist infuses a single piece of ammunition on a loaded siege weapon with the power of his bomb. As long as the siege engine with this ammunition is fired before the start of the alchemist's next turn, the ammunition does damage normally, and also deals the damage of the alchemist's bomb. The splash radius of the bomb effect is 20 feet rather than 5 feet.</p>
<p>Creatures that take the bomb's damage (either direct damage or splash damage), take 1d6 points of fire damage each round until the fire is extinguished. Extinguishing the flames is a <strong className="hl">full-round action</strong> that requires a Reflex save. Rolling on the ground provides the target with a +2 bonus on the save. Dousing the target with at least 2 gallons of water automatically extinguishes the flames.</p>
</Pair>
</Ability>
</>};
const _flesh_eating_bomb = {title: "Flesh-Eating Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="flesh-eating-bomb" icon={["upgrade","broken-shield"]}>
<Pair single id="flesh-eating-bomb">Flesh-Eating Bomb</Pair>
<Pair title="Ability"><p>The alchemist can create bombs that devour living matter. The alchemist's bomb deals damage <Link to="/misc/one_die_step">one die step</Link> higher than normal (regular bombs deal d8s, <Link to="/discovery/concussive_bomb">concussive bombs</Link> deal 1d6, and so on), but they have no effect on inorganic matter.</p>
<p>In addition, a creature with at least a +1 armor bonus to AC is less likely to be harmed; such creatures in the bomb's splash radius take no damage on a successful Reflex save, and the target of a direct hit can attempt a Reflex save against the bomb's save DC to take only half damage.</p>
</Pair>
</Ability>
<aside><p><strong>Note:</strong> Despite what the text seems to indicate, <em>concussive bombs</em> and <em>flesh-eating bombs</em> cannot be combined under the published rules. Consult your GM if you wish to use these two together.</p>
</aside></>};
const _force_bomb = {title: "Force Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="force-bomb" icon={["broken-shield","armor-downgrade"]}>
<Pair single id="force-bomb">Force Bomb</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it inflict force damage. <em>Force bombs</em> deal 1d4 points of force damage, plus 1d4 points of force damage for every odd-numbered level, instead of 1d6. Creatures that take a direct hit from a <em>force bomb</em> are knocked <Link to="/rule/prone">prone</Link> unless they succeed on a Reflex save.</Pair>
</Ability>
</>};
const _frost_bomb = {title: "Frost Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="frost-bomb" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="frost-bomb">Frost Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it inflict cold damage. Creatures that take a direct hit from a <em>frost bomb</em> are <Link to="/misc/staggered">staggered</Link> on their next turn unless they succeed on a Fortitude save.</Pair>
</Ability>
</>};
const _glassfoot_bomb = {title: "Glassfoot Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="glassfoot-bomb" icon={["stairs-goal"]}>
<Pair single id="glassfoot-bomb">Glassfoot Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it cover the ground in volatile jagged crystals in addition to its normal effects. These crystals act like <Link to="/eq-misc/caltrops">caltrops</Link>, evaporating into a smelly but harmless gas in 2d6 rounds.</Pair>
</Ability>
</>};
const _grease_bomb = {title: "Grease Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook</Link></p>
<Ability id="grease-bomb" icon={["armor-downgrade"]}>
<Pair single id="grease-bomb">Grease Bomb</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it create a grease slick upon detonation. When a <em>grease bomb</em> detonates, it coats an area equal to the bomb's splash radius in grease (as the <Link to="/spell/grease">grease</Link> spell) for 1 round per level. The DC of the Reflex save to avoid falling after a failed Acrobatics check is equal to 10 + 1/2 the alchemist's level + the alchemist's Intelligence modifier. A <em>grease bomb</em> can't affect items or armor.</Pair>
</Ability>
</>};
const _grounding_goo = {title: "Grounding Goo", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="grounding-goo" icon={["armor-downgrade"]}>
<Pair single id="grounding-goo">Grounding Goo</Pair>
<Pair title="Ability">The alchemist's bomb applies a sticky residue after any damage from the bomb is resolved. If a creature damaged by the bomb has a nonmagical fly speed, its flight is severely impaired, and it takes a penalty equal to the alchemist's level on Fly checks for 1 minute.</Pair>
</Ability>
</>};
const _healing_bomb = {title: "Healing Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace</Link></p>
<Ability id="healing-bomb" icon={["remedy"]}>
<Pair single id="healing-bomb" flavor="When the alchemist creates a bomb, he can choose to have it heal damage instead of dealing it.">Healing Bomb</Pair>
<Pair title="Ability">Creating a <em>healing bomb</em> requires the alchemist to expend an infused extract or potion containing a <Link to="/main/cure_spells">cure spell</Link>. A creature that takes a direct hit from a <em>healing bomb</em> is healed as if she had imbibed the infusion or potion used to create the bomb. Creatures in the splash radius are healed for the minimum amount of damage the <em>cure</em> spell is capable of healing. A <em>healing bomb</em> damages undead instead of healing them.</Pair>
</Ability>
</>};
const _holy_bombs = {title: "Holy Bombs", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="holy-bombs" icon={["stairs-goal"]}>
<Pair single id="holy-bombs">Holy Bombs</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal good divine damage. Evil creatures that take a direct hit from a <em>holy bomb</em> must succeed at a Fortitude save or be <Link to="/misc/staggered">staggered</Link> on their next turn. Against neutral creatures, <em>holy bombs</em> deal half damage, and such targets are not affected by their staggering effect. <em>Holy bombs</em> have no effect on good-aligned creatures.</Pair>
</Ability>
</>};
const _immolation_bomb = {title: "Immolation Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="immolation-bomb" icon={["stairs-goal"]}>
<Pair single id="immolation-bomb">Immolation Bomb</Pair>
<Pair title="Prerequisites">3rd-level alchemist</Pair>
<Pair title="Ability"><p>When the alchemist creates a bomb, he can choose to have its substance coat the direct target's body, causing the bomb to deal its damage over time instead of all at once. The bomb's effect lasts for a number of rounds equal to the number of damage dice the bomb would normally deal (for instance, a 5d6 bomb lasts for 5 rounds).</p>
<p>When the bomb hits the direct target, the bomb deals 1d6 + the alchemist's Intelligence modifier in damage, and those within the splash zone take damage equal to 1 + the alchemist's Intelligence modifier. It repeats this damage against the direct target of the bomb each round the <em>immolation bomb</em> lasts, dealing the damage at the start of the alchemist's turn. Splash damage is dealt again to any creature that is adjacent to the direct target when it takes damage from the <em>immolation bomb.</em></p>
</Pair>
<Pair title="Special">A creature taking damage from an <em>immolation bomb's</em> direct hit can attempt to extinguish the flames as a full-round action that requires a Reflex save (DC = 10 + 1/2 the alchemist's level + the alchemist's Intelligent modifier). Because of the alchemical nature of this bomb, rolling on the ground does not grant a bonus on the saving throw, and dousing a creature with water does not stop it from burning. These bombs can be used underwater.</Pair>
</Ability>
</>};
const _incendiary_charge = {title: "Incendiary Charge", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="incendiary-charge" icon={["armor-downgrade"]}>
<Pair single id="incendiary-charge" flavor={<>An <em>incendiary charge</em> is a bomb specifically designed to overcome the effects of any nonmagical object's hardness.</>}>Incendiary Charge</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Full-Round Action">The alchemist can place an <em>incendiary charge</em> that burns and eats away at an object, dealing normal bomb damage to it. (The damage is not halved against an object with hardness, unlike most energy damage.) Furthermore, the <em>incendiary charge</em> ignores the first 5 points of hardness of the material being damaged.</Pair>
</Ability>
</>};
const _jury_rigged_bomb = {title: "Jury-Rigged Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="jury-rigged-bomb" icon={["stairs-goal","broken-shield"]}>
<Pair single id="jury-rigged-bomb">Jury-Rigged Bomb</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Info">Unlike normal bombs, <em>jury-rigged bombs</em> can be created from whatever materials the alchemist has on hand; this makes them particularly handy in situations where the alchemist might find himself imprisoned or stripped of his equipment.</Pair>
<Pair title="Swift Action"><em>Jury-rigged bombs</em> can be crafted and thrown as a <strong className="hl">swift action</strong> (this counts against the alchemist's daily use of bombs), and they deal only 1d4 points of damage + additional damage equal to half the alchemist's Intelligence modifier on a direct hit. This damage increases by 1d4 at 3rd level and every 2 levels thereafter.</Pair>
<Pair title="Special">Despite being useful in a pinch, <em>jury-rigged bombs</em> are nonetheless crudely crafted and highly unstable; if the alchemist's attack roll results in a natural 1, the bomb explodes as he is creating it, and he takes damage as if he had taken a direct hit.</Pair>
</Ability>
</>};
const _neutralizing_bomb = {title: "Neutralizing Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="neutralizing-bomb" icon={["shield-reflect"]}>
<Pair single id="neutralizing-bomb">Neutralizing Bomb</Pair>
<Pair title="Ability"><p>When the alchemist creates a bomb, he can choose to give it the potential to end certain ongoing effects instead of dealing damage.</p>
<p>Each creature in the splash radius can attempt a new saving throw against any poison afflicting it and any ongoing conditions or ongoing acid, cold, electricity, fire, or sonic damage. (If an effect did not allow a saving throw, this bomb doesn't allow affected creatures to attempt one.) Success counts as one successful save toward ending poison and immediately ends other conditions. Exposed poison in the splash radius is also rendered harmless.</p>
</Pair>
<Pair title="Special">A creature with poison abilities that is directly struck by the bomb finds those abilities useless for 1d4 rounds unless it succeeds at a Fortitude saving throw.</Pair>
</Ability>
</>};
const _ooze_blight = {title: "Ooze Blight", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="ooze-blight" icon={["armor-downgrade"]}>
<Pair single id="ooze-blight">Ooze Blight</Pair>
<Pair title="Ability">A target hit by the alchemist's bomb loses the <Link to="/umr/split">split</Link> special quality for 1d4 rounds. In addition, against creatures with the ooze type, this bomb deals untyped damage that bypasses all resistances.</Pair>
</Ability>
</>};
const _penetrating_charge = {title: "Penetrating Charge", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="penetrating-charge" icon={["stairs-goal"]}>
<Pair single id="penetrating-charge">Penetrating Charge</Pair>
<Pair title="Info">A <em>penetrating charge</em> is a bomb specifically designed to disable locks and similar mechanisms, though not other means of sealing a door, a container, or other sorts of devices.</Pair>
<Pair title="Full-Round Action">The alchemist can place a <em>penetrating charge</em> on a lock. Instead of dealing damage, the <em>penetrating charge</em> seeps into the mechanism and eats away at it, granting a +5 circumstance bonus on any subsequent Disable Device checks against the mechanism.</Pair>
<Pair title="Special">A creature can spend 10 minutes and attempt an appropriate Craft check (DC 15) to fix the lock and remove this bonus.</Pair>
</Ability>
</>};
const _poisoned_explosive = {title: "Poisoned Explosive", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link></p>
<Ability id="poisoned-explosive" icon={["stairs-goal"]}>
<Pair single id="poisoned-explosive">Poisoned Explosive</Pair>
<Pair title="Prerequisites">4th-level alchemist, <Link to="/ability/poison_use">Poison use</Link> class feature</Pair>
<Pair title="Ability">When an alchemist creates a bomb, he can apply a dose of contact or injury poison to it, as if applying poison to a weapon. If the poisoned bomb hits its target, the bomb deals damage as normal, but the target must also succeed at a saving throw against the poison or be affected by that poison. No other creatures are affected by the poison.</Pair>
</Ability>
</>};
const _profane_bomb = {title: "Profane Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="profane-bomb" icon={["stairs-goal"]}>
<Pair single id="profane-bomb">Profane Bomb</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal evil divine damage. Good creatures that take a direct hit from a <em>profane bomb</em> must succeed at a Fortitude save or be <Link to="/misc/staggered">staggered</Link> on their next turn. Against a neutral creature, a <em>profane bomb</em> deals half damage, and the target is not affected by the bomb's staggering effect. A <em>profane bomb</em> has no effect against evil-aligned creatures.</Pair>
</Ability>
</>};
const _psychoactive_bomb = {title: "Psychoactive Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="psychoactive-bomb" icon={["armor-downgrade","broken-shield"]}>
<Pair single id="psychoactive-bomb">Psychoactive Bomb</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability"><em>Psychoactive bombs</em> are mixed with neurotoxic extracts that heighten certain sensations. A creature struck by a <em>psychoactive bomb</em> takes a -1 penalty on saving throws against charm, emotion, fear, and pain effects, and the DC for Intimidate checks against the victim decreases by 2. This effect lasts for 1 hour per alchemist level.</Pair>
<Pair title="Special">These penalties do not stack, and a creature can only be affected by a single <em>psychoactive bomb</em> at a time. A <em>psychoactive bomb</em> deals 1d6 fewer hit points of damage than normal.</Pair>
</Ability>
</>};
const _rocket_bomb = {title: "Rocket Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="rocket-bomb" icon={["stairs-goal","bowman"]}>
<Pair single id="rocket-bomb">Rocket Bomb</Pair>
<Pair title="Prerequisites"><Link to="/race/goblin">Goblin</Link>, 6th-level alchemist</Pair>
<Pair title="Ability">Alchemists with this discovery can prepare special rockets to deliver their bombs. <em>Rocket bombs</em> travel farther and explode bigger than normal bombs, but cannot target individual creatures. <em>Rocket bombs</em> explode in a 20-foot radius, and all creatures in that area take the alchemist's normal splash damage. The range increment on a <em>rocket bomb</em> is 50 feet.</Pair>
<Pair title="Special"><em>Rocket bombs</em> cannot be used with the <Link to="/discovery/precise_bombs">precise bombs</Link> or <Link to="/discovery/fast_bombs">fast bombs</Link> discoveries.</Pair>
</Ability>
</>};
const _sand_bomb = {title: "Sand Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="sand-bomb" icon={["armor-downgrade"]}>
<Pair single id="sand-bomb">Sand Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can pack the casing full of sand that explodes in an abrasive cloud on impact. A creature that takes a direct hit from a <em>sand bomb</em> is <Link to="/misc/blinded">blinded</Link> for 1 round, as are any creatures in the splash radius that fail a Reflex save (DC = 10 + half the alchemist's level + his Intelligence modifier).</Pair>
</Ability>
</>};
const _scrap_bomb = {title: "Scrap Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="scrap-bomb" icon={["upgrade"]}>
<Pair single id="scrap-bomb">Scrap Bomb</Pair>
<Pair title="Prerequisites"><Link to="/race/goblin">Goblin</Link></Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it explode into shards of shrapnel that deal piercing damage. A creature that takes a direct hit from a <em>scrap bomb</em> takes 1 point of <Link to="/rule/bleed">bleed</Link> damage per die of bomb damage unless it succeeds at a Reflex save.</Pair>
</Ability>
</>};
const _shock_bomb = {title: "Shock Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="shock-bomb" icon={["stairs-goal"]}>
<Pair single id="shock-bomb">Shock Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it inflict electricity damage. Creatures that take a direct hit from a <em>shock bomb</em> are <Link to="/misc/dazzled">dazzled</Link> for 1d4 rounds.</Pair>
</Ability>
</>};
const _smoke_bomb = {title: "Smoke Bomb", addenda: ["primarybomb"], tree: ["Poison Bomb","Inferno Bomb","Plague Bomb","Greater Plague Bomb","Plague Vector","Stink Bomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="smoke-bomb" icon={["stairs-goal"]}>
<Pair single id="smoke-bomb">Smoke Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it create a cloud of thick smoke when it detonates. The cloud functions as <Link to="/spell/fog_cloud">fog cloud</Link>, filling an area equal to twice the bomb's splash radius for 1 round per level.</Pair>
</Ability>
</>};
const _inferno_bomb = {title: "Inferno Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="inferno-bomb" icon={["upgrade"]}>
<Pair single id="inferno-bomb">Inferno Bomb</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/smoke_bomb">smoke bomb</Link></Pair>
<Pair title="Ability">The effects of the smoke created by an alchemist's bomb duplicate the effects of <Link to="/spell/incendiary_cloud">incendiary cloud</Link> instead of <Link to="/spell/fog_cloud">fog cloud</Link>, filling an area equal to twice the bomb's splash radius for 1 round per level.</Pair>
</Ability>
</>};
const _plague_bomb = {title: "Plague Bomb", addenda: ["primarybomb"], tree: ["Greater Plague Bomb","Plague Vector"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="plague-bomb" icon={["armor-downgrade"]}>
<Pair single id="plague-bomb">Plague Bomb</Pair>
<Pair title="Prerequisites">8th-level alchemist, <Link to="/discovery/smoke_bomb">smoke bomb</Link></Pair>
<Pair title="Ability">The effects of the smoke created by an alchemist's bomb duplicates the effects of <Link to="/spell/contagion">contagion</Link> instead of <Link to="/spell/fog_cloud">fog cloud</Link>, filling an area equal to twice the bomb's splash area for 1 round per level.</Pair>
</Ability>
</>};
const _greater_plague_bomb = {title: "Greater Plague Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="greater-plague-bomb" icon={["armor-downgrade"]}>
<Pair single id="greater-plague-bomb">Greater Plague Bomb</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/smoke_bomb">smoke bomb</Link>, <Link to="/discovery/plague_bomb">plague bomb</Link></Pair>
<Pair title="Ability">The effects of the smoke created by an alchemist's bomb duplicates the effects of <Link to="/spell/greater_contagion">greater contagion</Link> instead of <Link to="/spell/fog_cloud">fog cloud</Link>, filling an area equal to twice the bomb's splash radius for 1 round per level.</Pair>
</Ability>
</>};
const _plague_vector = {title: "Plague Vector", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="plague-vector" icon={["armor-downgrade"]}>
<Pair single id="plague-vector">Plague Vector</Pair>
<Pair title="Prerequisites">14th-level alchemist, <Link to="/discovery/smoke_bomb">smoke bomb</Link>, <Link to="/discovery/plague_bomb">plague bomb</Link></Pair>
<Pair title="Ability">The effects of the alchemist's <em>plague bomb</em> operate as normal except for the following changes. The chosen disease's save DC is equal to 10 + 1/2 the alchemist's level + his Intelligence modifier. Any creatures affected by the chosen disease become vectors for it, spreading the disease to any creatures they come in physical contact with for a number of days equal to the alchemist's Intelligence modifier (minimum 1). The save DC to avoid contracting the disease from the vector is the same as the DC used for this discovery.</Pair>
</Ability>
</>};
const _poison_bomb = {title: "Poison Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="poison-bomb" icon={["armor-downgrade"]}>
<Pair single id="poison-bomb">Poison Bomb</Pair>
<Pair title="Prerequisites">12th-level alchemist, <Link to="/discovery/smoke_bomb">smoke bomb</Link></Pair>
<Pair title="Ability">The effects of the smoke created by an alchemist's bomb duplicates the effects of <Link to="/spell/cloudkill">cloudkill</Link> instead of <Link to="/spell/fog_cloud">fog cloud</Link>, filling an area equal to twice the bomb's splash radius for 1 round per level.</Pair>
</Ability>
</>};
const _stink_bomb = {title: "Stink Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="stink-bomb" icon={["armor-downgrade"]}>
<Pair single id="stink-bomb">Stink Bomb</Pair>
<Pair title="Prerequisites"><Link to="/discovery/smoke_bomb">Smoke bomb</Link></Pair>
<Pair title="Ability">The effects of the smoke created by an alchemist's bomb can duplicate the effects of <Link to="/spell/stinking_cloud">stinking cloud</Link> instead of <Link to="/spell/fog_cloud">fog cloud</Link>, filling an area equal to twice the bomb's splash radius for 1 round.</Pair>
</Ability>
</>};
const _solid_ground = {title: "Solid Ground", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="solid-ground" icon={["stairs-goal"]}>
<Pair single id="solid-ground">Solid Ground</Pair>
<Pair title="Ability">The alchemist launches an explosive paste bomb that bonds with any earthen surface. Each application of this paste deals no damage and affects a 5-foot-cube of dirt, loose soil, or stone, transmuting the earth for a number of minutes equal to the alchemist's level. Creatures cannot use burrow, <Link to="/kinetic/earthmeld">earthmeld</Link>, or similar abilities (such as the <Link to="/spell/meld_into_stone">meld into stone</Link> spell) while the ground remains transmuted in this way.</Pair>
</Ability>
</>};
const _substantiating_bomb = {title: "Substantiating Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms</Link></p>
<Ability id="substantiating-bomb" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="substantiating-bomb" flavor="Your bombs are infused with ectoplasm and a longing for life, lending ethereal creatures a measure of substance.">Substantiating Bomb</Pair>
<Pair title="Prerequisites">10th-level alchemist</Pair>
<Pair title="Ability"><p>You can throw a bomb that inflicts no damage but instead creates a 10-foot-radius cloud of fog that functions as <Link to="/spell/fog_cloud">fog cloud</Link> and lasts for 1 round per alchemist level. Incorporeal creatures that pass through this cloud become partially solid, taking half damage from nonmagic attacks and full damage from magic weapons, spells, and spell-like abilities. This effect lasts for the duration of the smoke cloud, even if the incorporeal creature moves outside the cloud's area.</p>
<p>A creature affected by the cloud can attempt a Will saving throw to negate the substantiating effects of this bomb.</p>
</Pair>
</Ability>
</>};
const _tanglefoot_bomb = {title: "Tanglefoot Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="tanglefoot-bomb" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="tanglefoot-bomb">Tanglefoot Bomb</Pair>
<Pair title="Ability">A creature that takes a direct hit from a <em>tanglefoot bomb</em> must save against the bomb's DC or be <Link to="/rule/entangled">entangled</Link> and glued to the floor as if it had failed its save against a <Link to="/eq-weapon/tanglefoot_bag">tanglefoot bag</Link>. Creatures in the splash area that fail their saves are entangled but not glued to the floor; those who make this save are not entangled at all.</Pair>
</Ability>
</>};
const _thorny_bomb = {title: "Thorny Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="thorny-bomb" icon={["stairs-goal"]}>
<Pair single id="thorny-bomb">Thorny Bomb</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it deal piercing damage. <em>Thorny bombs</em> count as magic weapons for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _void_bomb = {title: "Void Bomb", addenda: ["primarybomb"], tree: ["Blackstar Bomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex</Link></p>
<Ability id="void-bomb" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="void-bomb" flavor="By combining the spores from strange fungi with slivers from extradimensional voids, some drow alchemists create bombs that cause bursts of gravity capable of crushing those inside.">Void Bomb</Pair>
<Pair title="Prerequisites"><Link to="/race/drow">Drow</Link>, 6th-level alchemist</Pair>
<Pair title="Ability"><p><em>Void bombs</em> deals 1d4 points of bludgeoning damage, plus 1d4 points of bludgeoning damage for every 2 alchemist levels beyond 1st, instead of 1d6.</p>
<p>A creature hit by the bomb must succeed at a Reflex save against the bomb's DC. If it fails, it is knocked <Link to="/rule/prone">prone</Link> and can't get up for 1 round. If it succeeds, all of its movement speeds are reduced to 5 feet for 1 round.</p>
<p>Other creatures within 5 feet of the bomb's target take no damage, but must succeed at a Reflex save against the bomb's DC or have all their movement speeds reduced to 5 feet for 1 round.</p>
</Pair>
</Ability>
</>};
const _blackstar_bomb = {title: "Blackstar Bomb", addenda: ["primarybomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex</Link></p>
<Ability id="blackstar-bomb-su" icon={["upgrade"]}>
<Pair single id="blackstar-bomb-su">Blackstar Bomb (Su)</Pair>
<Pair title="Prerequisites"><Link to="/discovery/void_bomb">Void bomb</Link></Pair>
<Pair title="Ability">This bomb crushes the target like a <em>void bomb,</em> then repels nearby creatures with a burst of gravity. The target takes damage as if hit by a <em>void bomb.</em> All other creatures within 5 feet of the target are subject to a <Link to="/rule/bull_rush">bull rush</Link>. The alchemist uses his alchemist class level in place of his Combat Maneuver Bonus, and adds his Intelligence modifier in place of his Strength or Dexterity modifier to resolve the bull rush attempts. Creatures moved by a blackstar bomb are pushed directly away from the target's square.</Pair>
</Ability>
</>};
const _delayed_bomb = {title: "Delayed Bomb", tree: ["Tainted Infusion"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="delayed-bomb" icon={["upgrade"]}>
<Pair single id="delayed-bomb">Delayed Bomb</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability"><p>The alchemist can place a bomb so that it explodes a number of rounds after the alchemist ceases contact with the bomb. This delay can be any number of rounds as chosen by the alchemist, up to a number of rounds equal to his level. If at any point the alchemist reclaims possession of the <em>delayed bomb,</em> he can end the timer and prevent the bomb's detonation. A <em>delayed bomb</em> detonates immediately if any other creature attempts to touch or move it, or if the bomb's contents are removed from the vial (such as if the vial breaks).</p>
<p>The bomb deals damage as if it scored a direct hit to any creature in the square with the bomb when it detonates, and splash damage to all adjacent creatures as normal.</p>
</Pair>
<Pair title="Special">An alchemist cannot have more than one <em>delayed bomb</em> at one time. If he creates another <em>delayed bomb,</em> the previous bomb becomes inert. <Link to="/spell/dispel_magic">Dispel magic</Link> can neutralize a <em>delayed bomb,</em> as can a successful <Link to="/skill/disable_device">Disable Device</Link> check (DC equals 10 + the alchemist's level + the alchemist's Intelligence modifier).</Pair>
</Ability>
</>};
const _directed_bomb = {title: "Directed Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace</Link></p>
<Ability id="directed-bomb" icon={["tornado-discs"]}>
<Pair single id="directed-bomb">Directed Bomb</Pair>
<Pair title="Ability">The alchemist can cause his bombs to splash in a 15-foot cone instead of a 5-foot-radius <Link to="/misc/burst">burst</Link>. The alchemist chooses the direction of the cone. If the attack misses, roll an additional 1d8 to determine the direction of the blast from where the bomb lands.</Pair>
<Pair title="Special">This discovery can't be combined with the <Link to="/discovery/explosive_bomb">explosive bomb</Link> discovery.</Pair>
</Ability>
</>};
const _divine_inks = {title: "Divine Inks", tree: ["Improved Divine Inks","Greater Divine Inks","Constructive Dyes","Greater Constructive Dyes","Living Pigment"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="divine-inks" icon={["magic-swirl"]}>
<Pair single id="divine-inks">Divine Inks</Pair>
<Pair title="Ability">The alchemist can develop special pigments and combine them with his alchemical reagents to create unique dyes that cling to the empty space around him, allowing him to paint images in the air to fool his enemies. By expending two daily uses of his bombs, he can use the dyes to create an image in a space adjacent to him, as <Link to="/spell/silent_image">silent image</Link>, using his alchemist level as the spell's caster level. The image he creates remains for a number of minutes equal to his alchemist level. He can dismiss this image as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _improved_divine_inks = {title: "Improved Divine Inks", tree: ["Greater Divine Inks"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="improved-divine-inks" icon={["magic-swirl"]}>
<Pair single id="improved-divine-inks">Improved Divine Inks</Pair>
<Pair title="Prerequisites">4th-level alchemist, <Link to="/discovery/divine_inks">divine inks</Link></Pair>
<Pair title="Ability">The alchemist's unique dyes allow him to create images accompanied by sound. If he expends an additional daily use of his bombs, the image he creates with the divine inks discovery also produces minor sounds, as <Link to="/spell/minor_image">minor image</Link>.</Pair>
</Ability>
</>};
const _greater_divine_inks = {title: "Greater Divine Inks", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="greater-divine-inks" icon={["magic-swirl"]}>
<Pair single id="greater-divine-inks">Greater Divine Inks</Pair>
<Pair title="Prerequisites">6th-level alchemist, <Link to="/discovery/divine_inks">divine inks</Link>, <Link to="/discovery/improved_divine_inks">improved divine inks</Link></Pair>
<Pair title="Ability">The alchemist's unique dyes allow him to create lifelike images. If he expends an additional daily use of his bombs, the image he creates with the divine inks discovery also produces sound, smell, and heat, as <Link to="/spell/major_image">major image</Link>.</Pair>
</Ability>
</>};
const _constructive_dyes = {title: "Constructive Dyes", tree: ["Greater Constructive Dyes"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="constructive-dyes" icon={["magic-swirl"]}>
<Pair single id="constructive-dyes">Constructive Dyes</Pair>
<Pair title="Prerequisites">8th-level alchemist, <Link to="/discovery/divine_inks">divine inks</Link></Pair>
<Pair title="Ability">The alchemist's dyes congeal and solidify, allowing him to make physical objects from them. The alchemist can expend two uses of his daily bombs to create a nonmagical object, as <Link to="/spell/minor_creation">minor creation</Link>, using his alchemist level as the spell's caster level.</Pair>
</Ability>
</>};
const _greater_constructive_dyes = {title: "Greater Constructive Dyes", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="greater-constructive-dyes" icon={["magic-swirl"]}>
<Pair single id="greater-constructive-dyes">Greater Constructive Dyes</Pair>
<Pair title="Prerequisites">10th-level alchemist, <Link to="/discovery/divine_inks">divine inks</Link>, <Link to="/discovery/constructive_dyes">constructive dyes</Link></Pair>
<Pair title="Ability">The alchemist expands the set of objects he can create with his constructive dyes. The alchemist can expend one additional use of his daily bombs when using his constructive dyes discovery to create objects, as <Link to="/spell/major_creation">major creation</Link>.</Pair>
</Ability>
</>};
const _living_pigment = {title: "Living Pigment", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="living-pigment" icon={["magic-swirl"]}>
<Pair single id="living-pigment" flavor="The alchemist infuses his inks and dyes with a spark of animating force.">Living Pigment</Pair>
<Pair title="Prerequisites"><Link to="/discovery/divine_inks">Divine inks</Link></Pair>
<Pair title="Standard Action">He can expend one daily use of his bombs and a 1st-level extract he has prepared to create a creature, as <Link to="/spell/summon_monster_i">summon monster I</Link>, using his level as the spell's caster level. The extract is expended as if the alchemist had consumed it.</Pair>
<Pair title="Special"><p>The alchemist can expend a higher-level extract when using this ability to create a creature using a <Link to="/spell/summon_monster">summon monster</Link> spell of a level equal to the level of extract expended. For example, if the alchemist expends a 4th-level extract, he can create a creature as if using <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</p>
<p>Additionally, the alchemist can expend an additional use of his daily bombs when creating a creature in this way to grant the creature the <Link to="/template/celestial">celestial</Link> or <Link to="/template/fiendish">fiendish</Link> template.</p>
</Pair>
</Ability>
</>};
const _dispelling_bomb = {title: "Dispelling Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="dispelling-bomb" icon={["magic-swirl"]}>
<Pair single id="dispelling-bomb">Dispelling Bomb</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates a bomb, he can choose to have it dispel magic effects instead of deal damage. Creatures that take a direct hit from a <em>dispelling bomb</em> are subject to a targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell, using the alchemist's level as the caster level. This cannot be used to target a specific spell effect.</Pair>
</Ability>
</>};
const _explosive_calligraphy = {title: "Explosive Calligraphy", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="explosive-calligraphy" icon={["magic-swirl"]}>
<Pair single id="explosive-calligraphy">Explosive Calligraphy</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The alchemist can create especially volatile pigments that detonate when agitated. This requires expending one daily use of his bombs, but otherwise functions as <Link to="/spell/explosive_runes">explosive runes</Link> except that it deals damage as one of the alchemist's bombs.</Pair>
<Pair title="Special">The alchemist can expend an additional daily use of his bombs to apply one discovery that applies to his bombs, such as <Link to="/discovery/acid_bomb">acid bomb</Link> or <Link to="/discovery/dispelling_bomb">dispelling bomb</Link>, to the runes created with this discovery.</Pair>
</Ability>
</>};
const _explosive_missile = {title: "Explosive Missile", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="explosive-missile" icon={["bowman"]}>
<Pair single id="explosive-missile">Explosive Missile</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Standard Action"><p>The alchemist can infuse a single arrow, crossbow bolt, or one-handed firearm bullet with the power of his bomb, load the ammunition, and shoot the ranged weapon. He must be proficient with the weapon in order to accomplish this.</p>
<p>When the infused ammunition hits its target, it deals damage normally and detonates as if the alchemist had thrown the bomb at the target. If the <em>explosive missile</em> misses, it does not detonate.</p>
</Pair>
</Ability>
</>};
const _fast_bombs = {title: "Fast Bombs", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="fast-bombs" icon={["bowman"]}>
<Pair single id="fast-bombs" flavor="An alchemist with this discovery can quickly create enough bombs to throw more than one in a single round.">Fast Bombs</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Full-Round Action">The alchemist can prepare and throw additional bombs if his base attack bonus is high enough to grant him additional attacks. This functions just like a full-attack with a ranged weapon.</Pair>
</Ability>
</>};
const _fire_brand = {title: "Fire Brand", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="fire-brand" icon={["mailed-fist"]}>
<Pair single id="fire-brand">Fire Brand</Pair>
<Pair title="Prerequisites"><Link to="/race/goblin">Goblin</Link></Pair>
<Pair title="Swift Action">An alchemist with this discovery can expend one daily bomb use to apply the bomb reagents to his weapon. A weapon treated this way deals fire damage as if it had the <Link to="/magic-enh/flaming">flaming</Link> weapon special ability. The bomb reagents continue burning for 1 minute or until extinguished by dousing the weapon in water.</Pair>
<Pair title="At 10th Level">The weapon is treated as if it had the <Link to="/magic-enh/flaming_burst">flaming burst</Link> weapon special ability.</Pair>
<Pair title="Special">An alchemist can use this ability with natural weapons, but he takes 1d6 points of fire damage per round for each natural weapon treated.</Pair>
</Ability>
</>};
const _madness_bomb = {title: "Madness Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="madness-bomb" icon={["upgrade","broken-shield"]}>
<Pair single id="madness-bomb" flavor="The alchemist's bombs do more than sear flesh - they sear the mind.">Madness Bomb</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Ability">A creature that takes a direct hit from a <em>madness bomb</em> takes damage from the bomb plus 1d4 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link>.</Pair>
<Pair title="Special">Reduce the amount of normal damage dealt by the bomb by 2d6 (so a bomb that would normally deal 6d6+4 points of damage deals 4d6+4 points of damage instead). The amount of Wisdom damage dealt by a <em>madness bomb</em> is reduced by 1 for each <em>madness bomb</em> that hit the target in the past 24 hours, to a minimum of 1 point of Wisdom damage.</Pair>
</Ability>
</>};
const _inspired_bomb = {title: "Inspired Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="inspired-bomb" icon={["upgrade"]}>
<Pair single id="inspired-bomb">Inspired Bomb</Pair>
<Pair title="Prerequisites"><em>Inspiration</em> pool</Pair>
<Pair title="Ability">An alchemist with this discovery can expend two uses of <em>inspiration</em> to increase the bomb's damage by 1d6. The type of damage the bomb deals does not change. This cannot be applied to the same bomb more than once.</Pair>
</Ability>
</>};
const _precise_bombs = {title: "Precise Bombs", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="precise-bombs" icon={["stairs-goal"]}>
<Pair single id="precise-bombs">Precise Bombs</Pair>
<Pair title="Ability">Whenever the alchemist throws a bomb, he can select a number of squares equal to his Intelligence modifier that are not affected by the splash damage from his bombs. If the bomb misses, this discovery has no effect.</Pair>
</Ability>
</>};
const _sticky_bomb = {title: "Sticky Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="sticky-bomb" icon={["upgrade"]}>
<Pair single id="sticky-bomb">Sticky Bomb</Pair>
<Pair title="Prerequisites">10th-level alchemist</Pair>
<Pair title="Ability">The effects of the alchemist's bombs are persistent and continue to damage creatures for 1 round after the initial damage. Creatures that take a direct hit from a <em>sticky bomb</em> take the splash damage 1 round later. Bombs that have effects that would normally occur 1 round later instead have those effects occur 2 rounds later.</Pair>
</Ability>
</>};
const _strafe_bomb = {title: "Strafe Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="strafe-bomb" icon={["barbed-arrow"]}>
<Pair single id="strafe-bomb">Strafe Bomb</Pair>
<Pair title="Ability"><p>The alchemist can throw bombs that splash in a 40-foot line rather than affecting a radius. The line starts at the alchemist and extends away from him in the direction he chooses.</p>
<p>The alchemist designates one creature in the squares affected by the line to be the target of the bomb and makes his attack roll against that creature; all other squares in the line take splash damage.</p>
</Pair>
<Pair title="Special">If the alchemist has the <Link to="/discovery/explosive_bomb">explosive bomb</Link> discovery and throws an <em>explosive strafe bomb,</em> the line of splash damage is 80 feet long instead of 40 feet.</Pair>
</Ability>
</>};
const _syringe_stirge = {title: "Syringe Stirge", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="syringe-stirge" icon={["stairs-goal"]}>
<Pair single id="syringe-stirge">Syringe Stirge</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Full-Round Action">You can expend two daily uses of bombs to create a <em>syringe stirge,</em> a tiny construct primed with a bomb (if you have multiple types of bombs, you must select which type the <em>syringe stirge</em> carries when created). Undirected, they take no actions except to flock around you in your square and follow you as best they can. They can be attacked normally, but gain <Link to="/rule/cover">cover</Link> while occupying your square.</Pair>
<Pair title="Swift Action">You can order one of your <em>syringe stirges</em> to attack an enemy it can see. Once ordered to attack that enemy, the <em>syringe stirge</em> will continue to attack every round, attempting to attach and deliver its payload.</Pair>
<Pair title="Info">A <em>syringe stirge</em> has all of the statistics of a <Link to="/monster/stirge">stirge</Link> but lacks the blood drain ability. If it ends its turn attached to an opponent, it injects your bomb into the opponent's bloodstream, dealing damage as a direct hit plus the alchemist's Intelligence modifier (as the <Link to="/feat/throw_anything">Throw Anything</Link> feat - this injection is a direct attack and doesn't deal splash damage).</Pair>
<Pair title="Special">A <em>syringe stirge</em> dies immediately after injecting its bomb. A <em>syringe stirge</em> lasts for 1 minute per alchemist level or until destroyed; if it has not attached to an enemy before the end of its life span it and its bomb payload fall inert.</Pair>
</Ability>
</>};
const _underwater_demolition = {title: "Underwater Demolition", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="underwater-demolition" icon={["stairs-goal"]}>
<Pair single id="underwater-demolition">Underwater Demolition</Pair>
<Pair title="Ability">The alchemist gains the ability to throw bombs underwater (normally, thrown weapons cannot be used underwater), including throwing from the air into the water. If the bomb travels through water, the range increment is reduced to 5 feet.</Pair>
</Ability>
</>};
const _bottled_ooze = {title: "Bottled Ooze", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="bottled-ooze" icon={["stairs-goal"]}>
<Pair single id="bottled-ooze">Bottled Ooze</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The alchemist has learned how to preserve a sample of oozes in a sealed bottle, which he can prepare for use as an extract. When the alchemist activates the extract, he actually throws the bottle at a square within 30 feet, releasing the ooze, which reconstitutes and attacks the closest creature. The ooze is not under the alchemist's control, but is otherwise treated as a summoned creature. The ooze remains for 1 round per caster level, and decays into powder when the duration expires.</Pair>
<Pair title="Special"><p>If the alchemist has the <Link to="/discovery/infusion">infusion</Link> discovery, another character can use the <em>infused</em> specimen.</p>
<p>Creating a <em>bottled ooze</em> requires an extract with a level equal to the ooze's CR (so a CR 4 <Link to="/monster/gray_ooze">gray ooze</Link> requires a 4th-level extract).</p>
</Pair>
</Ability>
</>};
const _combine_extracts = {title: "Combine Extracts", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="combine-extracts" icon={["magic-swirl"]}>
<Pair single id="combine-extracts">Combine Extracts</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates an extract, he can place two formulae into one extract. When the extract is consumed, both formulae take effect. This extract has a level two levels higher than the highest-level formulae placed in the extract.</Pair>
</Ability>
</>};
const _infusion = {title: "Infusion", tree: ["Aromatic Extract","Change Alignment","Glimmering Infusion","Nostrum","Tainted Infusion","Greater Change Alignment"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="infusion" icon={["stairs-goal"]}>
<Pair single id="infusion">Infusion</Pair>
<Pair title="Ability">When the alchemist creates an extract, he can infuse it with an extra bit of his own magical power. The extract created now persists even after the alchemist sets it down. As long as the extract exists, it continues to occupy one of the alchemist's daily extract slots. An infused extract can be imbibed by a non-alchemist to gain its effects.</Pair>
</Ability>
</>};
const _aromatic_extract = {title: "Aromatic Extract", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="aromatic-extract" icon={["magic-swirl"]}>
<Pair single id="aromatic-extract">Aromatic Extract</Pair>
<Pair title="Prerequisites">10th-level alchemist, <Link to="/discovery/infusion">infusion</Link></Pair>
<Pair title="Ability">The alchemist creates an inhaled version of an extract that is shared among multiple creatures. He must decide that an extract is an <em>aromatic extract</em> when he makes it. When used, the extract grants its benefit to all creatures within a 10-foot <Link to="/misc/spread">spread</Link> of the extract. The <em>aromatic extract</em> is treated as having the minimum caster level required for the original extract.</Pair>
<Pair title="Special">An <em>aromatic extract</em> expends one of the alchemist's daily extracts as if it were an extract 2 levels higher. This discovery can be applied only to extracts with a range of touch.</Pair>
</Ability>
</>};
const _change_alignment = {title: "Change Alignment", tree: ["Greater Change Alignment"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="change-alignment" icon={["magic-swirl"]}>
<Pair single id="change-alignment">Change Alignment</Pair>
<Pair title="Prerequisites">12th-level alchemist, <Link to="/discovery/infusion">infusion</Link></Pair>
<Pair title="Ability">Once per day as part of his preparation of infusions, the alchemist can brew an infusion that shifts the imbiber's alignment to good. This change in alignment lasts for 10 minutes per alchemist level. An unwilling creature receives a Will save to resist this change.</Pair>
<Pair title="Special">The alchemist may have only one such infusion at any one time. The effects of this infusion may have serious repercussions for a creature suddenly struggling with a new outlook. Many see it as little more than forced insanity, and some good faiths outlaw its use.</Pair>
</Ability>
</>};
const _glimmering_infusion = {title: "Glimmering Infusion", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook</Link></p>
<Ability id="glimmering-infusion" icon={["magic-swirl"]}>
<Pair single id="glimmering-infusion">Glimmering Infusion</Pair>
<Pair title="Prerequisites"><Link to="/discovery/infusion">Infusion</Link></Pair>
<Pair title="Ability">The alchemist can expend any prepared extract to produce a cube of glowing motes that act as per <Link to="/spell/glitterdust">glitterdust</Link>. The area must be adjacent to the alchemist and covers one 5-foot square per level of extract sacrificed, and the effect's save DC is calculated using the level of the sacrificed extract.</Pair>
</Ability>
</>};
const _nostrum = {title: "Nostrum", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link></p>
<Ability id="nostrum" icon={["stairs-goal"]}>
<Pair single id="nostrum">Nostrum</Pair>
<Pair title="Prerequisites"><Link to="/discovery/infusion">Infusion</Link></Pair>
<Pair title="Ability">When the alchemist creates an infusion, he can mask a delayed poison within the mixture. A <em>nostrum</em> can contain only an ingested poison, and the save DC of the poison is reduced by 2. The poison takes effect a number of hours after being imbibed equal to the alchemist's Intelligence bonus (minimum 0) decided by the alchemist at the creation of the <em>nostrum.</em> The poison within a <em>nostrum</em> can be detected as normal by spells such as <Link to="/spell/detect_poison">detect poison</Link> and similar abilities.</Pair>
<Pair title="Special">Until the <em>nostrum</em> is consumed or destroyed, it continues to occupy one of the alchemist's daily extract slots.</Pair>
</Ability>
</>};
const _tainted_infusion = {title: "Tainted Infusion", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="tainted-infusion" icon={["stairs-goal","upgrade"]}>
<Pair single id="tainted-infusion" flavor="The alchemist can mask murder behind beneficence.">Tainted Infusion</Pair>
<Pair title="Prerequisites"><Link to="/discovery/delayed_bomb">Delayed bomb</Link>, <Link to="/discovery/infusion">infusion</Link></Pair>
<Pair title="Ability">When preparing an extract with the <em>infusion</em> discovery, he can lace the extract with one of his bombs as long as the extract has a duration greater than instantaneous. If he chooses, the alchemist can reduce the duration of the extract to 1 round. As soon as the extract's duration expires, it detonates, dealing 150% of the alchemist's bomb damage to the drinker. This effect does not produce a splash radius.</Pair>
<Pair title="Special">Producing a tainted extract consumes both an infusion slot and a daily bomb use.</Pair>
</Ability>
</>};
const _intuitive_understanding = {title: "Intuitive Understanding", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="intuitive-understanding" icon={["upgrade","magic-swirl"]}>
<Pair single id="intuitive-understanding">Intuitive Understanding</Pair>
<Pair title="Prerequisites">4th-level alchemist, <Link to="/discovery/cognatogen">cognatogen</Link></Pair>
<Pair title="Passive Ability">If the alchemist drinks an extract of the divination school while under the effects of a <em>cognatogen,</em> his effective caster level temporarily increases by 2. In addition, while under the effects of a <em>cognatogen,</em> the alchemist may use <Link to="/spell/augury">augury</Link> once as a spell-like ability (caster level equal to his alchemist level).</Pair>
<Pair title="At 10th Level">He can use <Link to="/spell/divination">divination</Link> instead.</Pair>
</Ability>
</>};
const _lingering_plague = {title: "Lingering Plague", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="lingering-plague" icon={["armor-downgrade","upgrade"]}>
<Pair single id="lingering-plague">Lingering Plague</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Passive Ability">Any creature that must make a save against a disease caused by the alchemist's extract or other class ability must make a second save 1 round later to avoid doubling the duration of the disease effect. If the disease doesn't have a duration, this discovery reduces its onset time and frequencies by half.</Pair>
</Ability>
</>};
const _pickled_quasit = {title: "Pickled Quasit", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="pickled-quasit" icon={["stairs-goal"]}>
<Pair single id="pickled-quasit">Pickled Quasit</Pair>
<Pair title="Prerequisites">10th-level alchemist</Pair>
<Pair title="Ability">The alchemist has learned how to seal a <Link to="/monster/quasit">quasit</Link> in a bottle, which he can prepare for use as an extract. When the alchemist activates the extract, he throws the bottle at a square within 30 feet, releasing the quasit. The quasit is not under the alchemist's control, but is otherwise treated as a summoned creature. The quasit remains for 1 round per caster level, then collapses into its associated elements.</Pair>
<Pair title="Special">If the alchemist has the <Link to="/discovery/infusion">infusion</Link> discovery, another character can use the infused specimen. Creating a <em>pickled quasit</em> requires a 4th-level extract.</Pair>
</Ability>
</>};
const _remedy_extract = {title: "Remedy Extract", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="remedy-extract" icon={["stairs-goal"]}>
<Pair single id="remedy-extract">Remedy Extract</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Ability">When the alchemist creates an extract, he can add one nonmagical <Link to="/main/equipment_alchemical">alchemical remedy</Link> (such as an <Link to="/eq-misc/antitoxin">antitoxin</Link>) to it. When the extract is consumed, both the formula and the alchemical remedy take effect.</Pair>
<Pair title="Special">The extract has a level 1 higher than normal. This discovery cannot be combined with other methods of combining multiple consumed items or extracts into one.</Pair>
</Ability>
</>};
const _sandstone_solution = {title: "Sandstone Solution", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_sands">People of the Sands</Link></p>
<Ability id="sandstone-solution" icon={["magic-swirl"]}>
<Pair single id="sandstone-solution">Sandstone Solution</Pair>
<Pair title="Full-Round Action">The alchemist can convert any potion or extract into a solution that, when thrown or applied, solidifies sand or dirt to the hardness of stone for 1 hour, affecting an area with a radius of 10 feet &times; the level of the potion or extract. If this solution is thrown at or applied to stone, it instead causes a 5-foot cube of stone to become crumbly and soft for 1 minute, reducing its hardness by double the level of the potion or extract.</Pair>
</Ability>
</>};
const _volumizer = {title: "Volumizer", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="volumizer" icon={["magic-swirl"]}>
<Pair single id="volumizer">Volumizer</Pair>
<Pair title="Ability"><p>The alchemist can use an extract slot of any level to create a reactive tablet that purifies water and doubles its volume. This works like <Link to="/spell/purify_food_and_drink">purify food and drink</Link> for a maximum volume of water equal to 1 gallon for each level the alchemist has &times; the level of the extract slot the alchemist used to create the tablet.</p>
<p>Additionally, if the alchemist has a receptacle of sufficient volume to gather the water, the tablet doubles the volume of pure water. The water volume increases over the course of 1 minute, but the effect stops before it can create significant water pressure on a container that's not large enough to hold the entire volume.</p>
</Pair>
<Pair title="Special">An unused tablet remains usable until the next time the alchemist recovers extract slots.</Pair>
</Ability>
</>};
const _bone_spike_mutagen = {title: "Bone-Spike Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook</Link></p>
<Ability id="bone-spike-mutagen" icon={["armor-upgrade"]}>
<Pair single id="bone-spike-mutagen">Bone-Spike Mutagen</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Passive Ability">When the alchemist imbibes a <em>mutagen,</em> he mutates his skeletal structure, causing the bones on his elbows, knuckles, spine, and shoulder blades to grow massive and pierce his skin, exposing themselves as large spikes. While the <em>mutagen</em> is in effect, the alchemist's natural armor bonus granted by the <em>mutagen</em> increases by 2.</Pair>
<Pair title="Special">The spikes count as masterwork <Link to="/eq-armorenh/armor_spikes">armor spikes</Link> with which the alchemist is proficient.</Pair>
</Ability>
</>};
const _cognatogen = {title: "Cognatogen", tree: ["Intuitive Understanding","Collective Memory","Greater Cognatogen","Grand Cognatogen"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="cognatogen" icon={["stairs-goal","broken-shield"]}>
<Pair single id="cognatogen">Cognatogen</Pair>
<Pair title="Ability"><p>The alchemist gains the ability to create a <em>cognatogen,</em> a <em>mutagen</em>-like mixture that heightens one mental ability score at the expense of a physical ability score. If the <em>cognatogen</em> enhances his Intelligence, it applies a penalty to his Strength. If it enhances his Wisdom, it applies a penalty to his Dexterity. If it enhances his Charisma, it applies a penalty to his Constitution. Otherwise, this ability works just like the <em>mutagen</em> ability (including the natural armor bonus).</p>
<p>Anytime the alchemist would prepare a <em>mutagen,</em> he may instead prepare a <em>cognatogen.</em> All limitations of <em>mutagens</em> apply to <em>cognatogens</em> as if they were the same substance - an alchemist can only maintain one <em>mutagen</em> or <em>cognatogen</em> at a time, a <em>cognatogen</em> that is not in an alchemist's possession becomes inert, drinking a <em>cognatogen</em> makes a non-alchemist sick, and so on.</p>
</Pair>
<Pair title="Special">When the effect of the <em>cognatogen</em> ends, the alchemist takes 2 points of <Link to="/rule/ability_damage">ability damage</Link> to the ability score penalized by the <em>cognatogen.</em> The <Link to="/discovery/infuse_mutagen">infuse mutagen</Link> discovery and the <em>persistent mutagen</em> class ability apply to <em>cognatogens.</em></Pair>
</Ability>
</>};
const _collective_memory = {title: "Collective Memory", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="collective-memory" icon={["upgrade"]}>
<Pair single id="collective-memory">Collective Memory</Pair>
<Pair title="Prerequisites"><Link to="/discovery/cognatogen">Cognatogen</Link></Pair>
<Pair title="Ability">While under the effects of a <em>cognatogen,</em> the alchemist adds half his class level on all Knowledge skill checks and may attempt all Knowledge skill checks untrained.</Pair>
<Pair title="Special">This bonus does not stack with the second Intelligence bonus granted by the <Link to="/arc-alchemist/mindchemist">mindchemist</Link> archetype's <em>perfect recall</em> class feature.</Pair>
</Ability>
</>};
const _greater_cognatogen = {title: "Greater Cognatogen", tree: ["Grand Cognatogen"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="greater-cognatogen" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="greater-cognatogen">Greater Cognatogen</Pair>
<Pair title="Prerequisites">12th-level alchemist, <Link to="/discovery/cognatogen">cognatogen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>mutagen</em> now grants a +4 natural armor bonus, a +6 alchemical bonus to one mental ability score (Intelligence, Wisdom, or Charisma), and a +4 alchemical bonus to a second mental ability score. The alchemist takes a -2 penalty on both associated physical ability scores as long as the <em>mutagen</em> persists, and takes 2 points of <Link to="/rule/ability_damage">ability damage</Link> to both associated physical ability scores when the <em>cognatogen</em> ends.</Pair>
</Ability>
</>};
const _grand_cognatogen = {title: "Grand Cognatogen", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="grand-cognatogen" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="grand-cognatogen">Grand Cognatogen</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/cognatogen">cognatogen</Link>, <Link to="/discovery/greater_cognatogen">greater cognatogen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>cognatogen</em> now grants a +6 natural armor bonus, a +8 alchemical bonus to one mental ability score (Intelligence, Wisdom, or Charisma), a +6 alchemical bonus to a second mental ability score, and a +4 alchemical bonus to a third mental ability score. The alchemist takes a -2 penalty to his Strength, Dexterity, and Constitution as long as the <em>cognatogen</em> persists, and takes 2 points of <Link to="/rule/ability_damage">ability damage</Link> to each physical ability score when the <em>cognatogen</em> ends.</Pair>
</Ability>
</>};
const _elemental_mutagen = {title: "Elemental Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace</Link></p>
<Ability id="elemental-mutagen" icon={["armor-upgrade","upgrade"]}>
<Pair single id="elemental-mutagen">Elemental Mutagen</Pair>
<Pair title="Choice">The alchemist chooses an element (air, earth, fire, or water).</Pair>
<Pair title="Passive Ability">Whenever the alchemist imbibes a <em>mutagen,</em> he gains <Link to="/umr/resistance">resistance</Link> 5 to the associated energy type and a +2 competence bonus on an associated skill check. This resistance increases by 5 and the competence bonus by 2 for each of the following discoveries the alchemist possesses: <Link to="/discovery/grand_mutagen">grand mutagen</Link>, <Link to="/discovery/greater_mutagen">greater mutagen</Link>, and <Link to="/discovery/true_mutagen">true mutagen</Link>.</Pair>
<Pair title="Special"><p>The elements and their associated energies and skills are air (electricity, Fly), earth (acid, Climb), fire (fire, Acrobatics), and water (cold, Swim).</p>
<p>An alchemist can select this discovery up to four times, but must choose a different element each time. An alchemist can gain the benefits of only one <em>elemental mutagen</em> at a time, selected when he imbibes the <em>mutagen</em>.</p>
</Pair>
</Ability>
</>};
const _feral_mutagen = {title: "Feral Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="feral-mutagen" icon={["mailed-fist","upgrade"]}>
<Pair single id="feral-mutagen">Feral Mutagen</Pair>
<Pair title="Ability">Whenever the alchemist imbibes a <em>mutagen,</em> he gains two claw attacks and a bite attack. These are <Link to="/rule/natural_attacks">primary attacks</Link> and are made using the alchemist's full base attack bonus. The claw attacks deal 1d6 points of damage (1d4 if the alchemist is Small) and the bite attack deals 1d8 points of damage (1d6 if the alchemist is Small).</Pair>
<Pair title="Special">While the <em>mutagen</em> is in effect, the alchemist gains a +2 competence bonus on Intimidate skill checks.</Pair>
</Ability>
</>};
const _fey_mutagen = {title: "Fey Mutagen", tree: ["Greater Fey Mutagen","Grand Fey Mutagen"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="fey-mutagen" icon={["stairs-goal","upgrade","broken-shield","armor-upgrade"]}>
<Pair single id="fey-mutagen">Fey Mutagen</Pair>
<Pair title="Ability">The alchemist gains the ability to create a <em>fey mutagen,</em> a mixture that lends him some of the grace and power of <Link to="/rule/the_first_world">the First World</Link>. When imbibed, a <em>fey mutagen</em> grants a +2 alchemical bonus to the alchemist's Dexterity and Charisma, a -2 penalty to his Strength, and DR 2/cold iron. This otherwise works like the standard <em>mutagen</em> class feature and interacts with other effects as though it were a <em>mutagen</em>.</Pair>
</Ability>
</>};
const _greater_fey_mutagen = {title: "Greater Fey Mutagen", tree: ["Grand Fey Mutagen"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="greater-fey-mutagen" icon={["upgrade","broken-shield","armor-upgrade","stairs-goal"]}>
<Pair single id="greater-fey-mutagen">Greater Fey Mutagen</Pair>
<Pair title="Prerequisites">12th-level alchemist, <Link to="/discovery/fey_mutagen">fey mutagen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>fey mutagen</em> now grants a +4 alchemical bonus to Dexterity and Charisma, a -2 penalty to his Strength, DR 5/cold iron, and the druid's <Link to="/ability/woodland_stride">woodland stride</Link> class feature.</Pair>
</Ability>
</>};
const _grand_fey_mutagen = {title: "Grand Fey Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="grand-fey-mutagen" icon={["upgrade","broken-shield","armor-upgrade","stairs-goal"]}>
<Pair single id="grand-fey-mutagen">Grand Fey Mutagen</Pair>
<Pair title="Prerequisites">6th-level alchemist, <Link to="/discovery/fey_mutagen">fey mutagen</Link>, <Link to="/discovery/greater_fey_mutagen">greater fey mutagen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>fey mutagen</em> now grants a +6 alchemical bonus to Dexterity and Charisma, a -2 penalty to his Strength, DR 10/cold iron, and the druid's <Link to="/ability/woodland_stride">woodland stride</Link> class feature.</Pair>
<Pair title="Special">In addition, he can choose not to allow spells and effects to affect him if they would not be capable of affecting both his original creature type and the fey creature type.</Pair>
</Ability>
</>};
const _greater_mutagen = {title: "Greater Mutagen", tree: ["Grand Mutagen"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-mutagen" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="greater-mutagen">Greater Mutagen</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Passive Ability">The alchemist's <em>mutagen</em> now grants a +4 natural armor bonus, a +6 alchemical bonus to one physical ability score (Strength, Dexterity, or Constitution), and a +4 alchemical bonus to a second physical ability score. The alchemist takes a -2 penalty on both associated mental ability scores as long as the <em>mutagen</em> persists.</Pair>
</Ability>
</>};
const _grand_mutagen = {title: "Grand Mutagen", tree: ["True Mutagen"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="grand-mutagen" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="grand-mutagen">Grand Mutagen</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/greater_mutagen">greater mutagen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>mutagen</em> now grants a +6 natural armor bonus, a +8 alchemical bonus to one ability score (Strength, Dexterity, or Constitution), a +6 alchemical bonus to a second physical ability score, and a +4 alchemical bonus to a third physical ability score. The alchemist takes a -2 penalty to his Intelligence, Wisdom, and Charisma as long as the <em>mutagen</em> persists.</Pair>
</Ability>
</>};
const _greater_rasugen = {title: "Greater Rasugen", tree: ["Grand Rasugen"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms</Link></p>
<Ability id="greater-rasugen" icon={["armor-upgrade","remedy","broken-shield"]}>
<Pair single id="greater-rasugen">Greater Rasugen</Pair>
<Pair title="Prerequisites">12th-level alchemist, must be able to <Link to="/arc-alchemist/mnemostiller">brew a rasugen</Link></Pair>
<Pair title="Passive Ability">The alchemist's rasugen now grants a +4 alchemical bonus on all saving throws, 3 <Link to="/rule/temporary_hit_points">temporary hit points</Link> per alchemist level, and immunity to mind-affecting effects. The alchemist takes a -4 penalty to Intelligence as long as the <em>greater rasugen</em> persists.</Pair>
</Ability>
</>};
const _grand_rasugen = {title: "Grand Rasugen", jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms</Link></p>
<Ability id="grand-rasugen" icon={["armor-upgrade","remedy","broken-shield"]}>
<Pair single id="grand-rasugen">Grand Rasugen</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/greater_rasugen">greater rasugen</Link></Pair>
<Pair title="Passive Ability">The alchemist's rasugen now grants a +6 alchemical bonus on all saving throws, 4 <Link to="/rule/temporary_hit_points">temporary hit points</Link> per alchemist level, and immunity to disease, mind-affecting effects, and poison. The alchemist takes a -6 penalty to Intelligence and a -2 penalty to Charisma and Wisdom as long as the <em>grand rasugen</em> persists.</Pair>
</Ability>
</>};
const _infuse_mutagen = {title: "Infuse Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="infuse-mutagen" icon={["broken-shield","stairs-goal"]}>
<Pair single id="infuse-mutagen">Infuse Mutagen</Pair>
<Pair title="Ability">When the alchemist creates a <em>mutagen,</em> he can infuse it with an extra bit of his own magical power. This inflicts 2 points of <Link to="/rule/intelligence_damage">Intelligence damage</Link> to the alchemist and costs 1,000 gp in rare reagents, but the <em>mutagen</em> created persists on its own and is not rendered inert if the alchemist creates another <em>mutagen.</em> This allows an alchemist to create different types of <em>mutagens</em> and keep them handy for emergencies. This does not allow an alchemist to gain the effects of multiple <em>mutagens</em> - only the most recently imbibed <em>mutagen</em> has any effect.</Pair>
<Pair title="Special">This can also be used on <Link to="/discovery/cognatogen">cognatogens</Link></Pair>
</Ability>
</>};
const _inspiring_cognatogen = {title: "Inspiring Cognatogen", tree: ["Greater Inspiring Cognatogen","Grand Inspiring Cognatogen"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="inspiring-cognatogen" icon={["stairs-goal","armor-upgrade","broken-shield"]}>
<Pair single id="inspiring-cognatogen">Inspiring Cognatogen</Pair>
<Pair title="Ability"><p>An alchemist with this discovery leans how to make an <em>inspiring cognatogen,</em> a <em>mutagen</em>-like mixture that grants him *inspiration *(as the <Link to="/class/investigator">investigator's</Link> class feature) at the expense of Strength and Constitution. Upon drinking the inspiring <em>cognatogen,</em> the alchemist gains a pool of <em>inspiration</em> equal to 1/2 his alchemist level + his Intelligence modifier (minimum 1). He also gains a +2 dodge bonus to AC and takes a -2 penalty to both Strength and Constitution.</p>
<p>As a <strong className="hl">free action</strong>, the alchemist can add 1d6 to the result of an ability or skill check (including any he takes 10 or 20 on) by expending one use of <em>inspiration.</em> This ability works exactly like the investigator's <em>inspiration</em> ability, except that the alchemist gains the pool of <em>inspiration</em> upon drinking the <em>inspiring cognatogen,</em> and any unspent <em>inspiration</em> is lost at the end of the <em>cognatogen's</em> duration. If the alchemist already has access to <em>inspiration,</em> the *inspiration *added by the <em>inspiring cognatogen</em> is added to his <em>inspiration</em> pool, but each time he expends at least one use of <em>inspiration</em> while this ability is active, he must succeed at a DC 20 Will saving throw or become <Link to="/misc/dazed">dazed</Link> for 1 round. He cannot use <em>inspiration</em> to augment this saving throw.</p>
</Pair>
<Pair title="Special">All limitations of <em>mutagens</em> apply to an <em>inspiring cognatogen</em> as if they were the same substance - an alchemist can only maintain one <em>mutagen</em> or <em>cognatogen</em> (either the standard <Link to="/discovery/cognatogen">cognatogen</Link> or the <em>inspired cognatogen</em>) at a time, a <em>cognatogen</em> not in an alchemist's possession becomes inert, drinking a <em>cognatogen</em> makes non-alchemists sick, and so on. When the effect of an <em>inspiring cognatogen</em> ends, the alchemist takes 2 points of ability damage to Strength and Dexterity. The <Link to="/discovery/infuse_mutagen">infuse mutagen</Link> discovery and the <em>persistent mutagen</em> class ability apply to an <em>inspiring cognatogen.</em></Pair>
</Ability>
</>};
const _greater_inspiring_cognatogen = {title: "Greater Inspiring Cognatogen", tree: ["Grand Inspiring Cognatogen"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-inspiring-cognatogen" icon={["armor-upgrade","broken-shield","stairs-goal"]}>
<Pair single id="greater-inspiring-cognatogen">Greater Inspiring Cognatogen</Pair>
<Pair title="Prerequisites">12th-level alchemist, <Link to="/discovery/inspiring_cognatogen">inspiring cognatogen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>inspiring cognatogen</em> now grants a +2 dodge bonus to AC and a +2 bonus to Reflex saving throws; a -4 penalty to Strength and Constitution; and the effects of having the <Link to="/invtalent/amazing_inspiration">amazing inspiration</Link>, <Link to="/invtalent/eidetic_recollection">eidetic recollection</Link>, and <Link to="/invtalent/expanded_inspiration">expanded inspiration</Link> investigator talents.</Pair>
</Ability>
</>};
const _grand_inspiring_cognatogen = {title: "Grand Inspiring Cognatogen", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="grand-inspiring-cognatogen" icon={["armor-upgrade","broken-shield","stairs-goal"]}>
<Pair single id="grand-inspiring-cognatogen">Grand Inspiring Cognatogen</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/greater_inspiring_cognatogen">greater inspiring cognatogen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>inspiring cognatogen</em> now grants a +4 dodge bonus to AC and a +4 bonus to Reflex saving throws; a -6 penalty to Strength and Constitution; and the effects of having the <Link to="/invtalent/item_lore">item lore</Link>, <Link to="/invtalent/tenacious_inspiration">tenacious inspiration</Link>, and <Link to="/invtalent/underworld_inspiration">underworld inspiration</Link> investigator talents.</Pair>
</Ability>
</>};
const _mutagen = {title: "Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="mutagen" icon={["stairs-goal"]}>
<Pair single id="mutagen">Mutagen</Pair>
<Pair title="Ability">This discovery gives the alchemist the <em>mutagen</em> class ability.</Pair>
<Pair title="Special">This discovery exists so alchemist archetypes who have variant <em>mutagens,</em> such as the <Link to="/arc-alchemist/mindchemist">mindchemist</Link>, can learn how to make standard <em>mutagens.</em></Pair>
</Ability>
</>};
const _purging_mutagen = {title: "Purging Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link></p>
<Ability id="purging-mutagen" icon={["shield-reflect"]}>
<Pair single id="purging-mutagen">Purging Mutagen</Pair>
<Pair title="Ability">The alchemist's <em>mutagen</em> combines ipecac and other purgative components. A non-alchemist who consumes the <em>mutagen</em> is <Link to="/misc/nauseated">nauseated</Link> for only 1 round, during which time her body rapidly metabolizes or expels all extant toxins, granting her an immediate second saving throw against each ongoing disease and poison currently affecting her. Each successful save counts as two consecutive successful saving throws for the purpose of curing the affliction. Any failed saving throws do not result in additional damage or other effects.</Pair>
<Pair title="Special">A non-alchemist who consumes a second <em>purging mutagen</em> in a 24-hour period is instead nauseated for 1 hour. When an alchemist drinks the <em>mutagen,</em> he can choose whether or not to also be affected by this discovery in addition to the <em>mutagen's</em> other effects.</Pair>
</Ability>
</>};
const _rag_doll_mutagen = {title: "Rag Doll Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="rag-doll-mutagen" icon={["upgrade","armor-upgrade"]}>
<Pair single id="rag-doll-mutagen">Rag Doll Mutagen</Pair>
<Pair title="Prerequisites"><Link to="/race/goblin">Goblin</Link></Pair>
<Pair title="Passive Ability">When the alchemist imbibes a <em>mutagen,</em> his body and bones become rubbery and easy to contort. The alchemist gains a bonus equal to his class level on Escape Artist checks, can <Link to="/misc/squeeze">squeeze</Link> through places as if he were one size category smaller, and can make a Reflex save (DC equal to 15 + 1 for every 10 feet fallen) to take half damage from falling.</Pair>
<Pair title="At 10th Level">All falling damage is considered nonlethal damage, and the alchemist can squeeze through places as if he were two size categories smaller than his size while under the effects of this <em>mutagen.</em></Pair>
</Ability>
</>};
const _splitting_mutagen = {title: "Splitting Mutagen", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link></p>
<Ability id="splitting-mutagen" icon={["magic-swirl"]}>
<Pair single id="splitting-mutagen">Splitting Mutagen</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Ability"><p>Once per day while under the effects of his <em>mutagen,</em> the alchemist can split into two identical copies of himself as an <strong className="hl">immediate action</strong> after being damaged by a piercing or slashing weapon. Each copy has an ooze-like complexion, most often manifesting as a slimy sheen to his skin.</p>
<p>The alchemist splits his current hit points evenly between the copies. The copies use the same statistics, share the same resources, and have identical equipment (except artifacts, which only one copy has). Similarly, if one of the copies expends a charge or daily use from a magic item that a copy has, the charge or daily use is expended from both copies. If one copy drops or gives away an item, the duplicate item disappears from the other copy as well.</p>
<p>The two copies act independently and each one has a full set of actions. At the end of the alchemist's next turn, he selects one of the copies, which loses its ooze-like complexion as it becomes the alchemist; the other copy dissolves into a fine mist and dissipates. If one of the copies is destroyed before this happens, the remaining copy immediately becomes the alchemist, and he gains 1 permanent <Link to="/rule/negative_level">negative level</Link>. If both copies are destroyed simultaneously (such as from a <Link to="/spell/fireball">fireball</Link>), both copies collapse into formless goo; the alchemist can only be restored to life via <Link to="/spell/resurrection">resurrection</Link> or similarly powerful magic.</p>
</Pair>
</Ability>
</>};
const _celestial_poisons = {title: "Celestial Poisons", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="celestial-poisons" icon={["armor-downgrade"]}>
<Pair single id="celestial-poisons" flavor="The alchemist is able to infuse poisons with celestial power so they can affect evil creatures that are normally immune to poison.">Celestial Poisons</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Passive Ability">Any poison the alchemist administers to a weapon can affect undead and evil outsiders, bypassing their inherent immunities. Magical effects that negate poisons still apply. If a creature fails its save, the poison acts as normal, but may have no effect on the creature, depending on the effect of the poison (such as dealing <Link to="/rule/constitution_damage">Constitution damage</Link> to undead).</Pair>
</Ability>
</>};
const _concentrate_poison = {title: "Concentrate Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="concentrate-poison" icon={["upgrade"]}>
<Pair single id="concentrate-poison">Concentrate Poison</Pair>
<Pair title="Ability">The alchemist can combine two doses of the same poison to increase their effects. This requires two doses of the poison and 1 minute of concentration. When completed, the alchemist has one dose of poison. The poison's frequency is extended by 50% and the save DC increases by +2. This poison must be used within 1 hour of its creation or it is ruined.</Pair>
</Ability>
</>};
const _deadly_excretions = {title: "Deadly Excretions", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="deadly-excretions" icon={["stairs-goal"]}>
<Pair single id="deadly-excretions">Deadly Excretions</Pair>
<Pair title="Prerequisites">8th-level alchemist, <Link to="/race/grippli">grippli</Link> with <em>toxic skin</em> racial trait</Pair>
<Pair title="Ability">When using his <em>toxic skin</em> ability, the alchemist can choose to excrete a Constitution poison instead of a Dexterity poison. This poison works the same as the normal grippli <em>toxic skin</em> poison except that a failed save deals 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link>.</Pair>
</Ability>
</>};
const _designer_poison = {title: "Designer Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons</Link></p>
<Ability id="designer-poison" icon={["upgrade","broken-shield"]}>
<Pair single id="designer-poison" flavor="The alchemist can create special poisons that are more effective against certain creatures.">Designer Poison</Pair>
<Pair title="Ability">When crafting a poison, the alchemist can choose a single creature type (and subtype, if appropriate) from the ranger's <Link to="/ability/favored_enemy">favored enemy</Link> list. Against creatures of the chosen type, the poison's saving throw DC is increased by 4. Against all other creatures, it is reduced by 2.</Pair>
<Pair title="Special">The alchemist must choose the creature type and subtype (if appropriate) while crafting the poison and afterward cannot change this choice.</Pair>
</Ability>
</>};
const _elemental_destabilizers = {title: "Elemental Destabilizers", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></p>
<Ability id="elemental-destabilizers" icon={["stairs-goal"]}>
<Pair single id="elemental-destabilizers" flavor="The alchemist is able to concoct reactive chemical compounds that affect elementals like poisons.">Elemental Destabilizers</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">The alchemist can craft poisons that affect only outsiders with the elemental subtype, bypassing their inherent immunity. Magical effects that negate poisons still apply. If a creature fails its saving throw, the poison acts as normal, but it may have no effect on the creature depending on the effect of the poison (such as dealing fire damage to a <Link to="/monster/fire_elemental">fire elemental</Link>).</Pair>
</Ability>
</>};
const _enduring_toxin = {title: "Enduring Toxin", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons</Link></p>
<Ability id="enduring-toxin" icon={["upgrade"]}>
<Pair single id="enduring-toxin">Enduring Toxin</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">The alchemist can alter the properties of a poison, causing it to persist longer in the victim's body. Altering a dose of poison in the way takes 1 hour, requires the expenditure of raw materials worth half the poison's market price, and exposes the alchemist to the poison, thereby affecting him if he is not immune. This doubles the poison's maximum duration.</Pair>
</Ability>
</>};
const _malignant_poison = {title: "Malignant Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook</Link></p>
<Ability id="malignant-poison" icon={["upgrade"]}>
<Pair single id="malignant-poison">Malignant Poison</Pair>
<Pair title="Prerequisites">10th-level alchemist</Pair>
<Pair title="Full-Round Action">The alchemist can increase the save DC of any poison by 4 and increase its duration by 2 frequency increments (for example, <Link to="/eq-poison/large_scorpion_venom">large scorpion venom</Link> lasts 8 rounds instead of 6 and <Link to="/eq-poison/drow_poison">drow poison</Link> lasts 4 minutes instead of 2). Additionally, <em>malignant poisons</em> take effect immediately and do not have an onset time.</Pair>
<Pair title="Special">This alchemical change lasts until the poison's extended duration ends or for a number of minutes equal to the alchemist's level, whichever comes first. After that, the poison reverts back to its original state.</Pair>
</Ability>
</>};
const _nauseating_flesh = {title: "Nauseating Flesh", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="nauseating-flesh" icon={["armor-upgrade"]}>
<Pair single id="nauseating-flesh">Nauseating Flesh</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Passive Ability">The alchemist's body is suffused with poison. Any creature that bites, engulfs, or swallows the alchemist must make a Fortitude saving throw or be <Link to="/misc/nauseated">nauseated</Link> for 1d4 rounds. The alchemist with this discovery does not suffer the effect of the poison of his own <em>nauseating flesh.</em></Pair>
</Ability>
</>};
const _poison_conversion = {title: "Poison Conversion", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="poison-conversion" icon={["stairs-goal"]}>
<Pair single id="poison-conversion">Poison Conversion</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">By spending 1 minute, the alchemist can convert 1 dose of poison from its current type (contact, ingested, inhaled, or injury) to another type. For example, the alchemist can convert a dose of <Link to="/eq-poison/small_centipede_poison">Small centipede poison</Link> (an injury poison) to an inhaled poison. This process requires an <Link to="/misc/alchemy_lab">alchemy lab</Link>.</Pair>
</Ability>
</>};
const _precise_poison = {title: "Precise Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="precise-poison" icon={["upgrade"]}>
<Pair single id="precise-poison" flavor="The alchemist is adept at delivering poison to the most vulnerable areas of his targets.">Precise Poison</Pair>
<Pair title="Passive Ability">When the alchemist confirms a critical hit with a poisoned weapon, he increases the save DC of the poison by an amount equal to the weapon's critical multiplier.</Pair>
</Ability>
</>};
const _sticky_poison = {title: "Sticky Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="sticky-poison" icon={["upgrade"]}>
<Pair single id="sticky-poison">Sticky Poison</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">Any poison the alchemist creates is sticky - when the alchemist applies it to a weapon, the weapon remains poisoned for a number of strikes equal to the alchemist's Intelligence modifier.</Pair>
</Ability>
</>};
const _dilution = {title: "Dilution", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="dilution" icon={["upgrade"]}>
<Pair single id="dilution">Dilution</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Ability">Once per day, the alchemist can dilute any one potion or elixir, creating two doses of the same potion from one. Diluting a potion costs a number of gp equal to one-quarter of the potion's market value. A potion that has been diluted cannot be diluted again.</Pair>
<Pair title="Special">This discovery cannot be used to dilute extracts or <em>mutagens</em>.</Pair>
</Ability>
</>};
const _elixir_of_life = {title: "Elixir of Life", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="elixir-of-life" icon={["stairs-goal","remedy"]}>
<Pair single id="elixir-of-life">Elixir of Life</Pair>
<Pair title="Prerequisites">16th-level alchemist</Pair>
<Pair title="Ability"><p>Once per day, the alchemist can brew an <em>elixir of life.</em> This special concoction costs 25,000 gp to create and takes 1 hour of work. An <em>elixir of life,</em> when administered by the alchemist who brewed it, restores life to a dead creature as per the spell <Link to="/spell/true_resurrection">true resurrection</Link>.</p>
<p>Alternatively, the alchemist himself may drink the <em>elixir of life,</em> after which point he is immediately targeted with a <Link to="/spell/resurrection">resurrection</Link> spell the next time he is killed. Used in this manner, the effects of an <em>elixir of life</em> persist only for a number of days equal to the alchemist's Intelligence modifier; if he does not die before that time expires, the effects of the <em>elixir of life</em> end.</p>
</Pair>
</Ability>
</>};
const _enhance_potion = {title: "Enhance Potion", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="enhance-potion" icon={["upgrade"]}>
<Pair single id="enhance-potion">Enhance Potion</Pair>
<Pair title="Ability">A number of times per day equal to his Intelligence modifier, the alchemist can cause any potion he drinks to function at a caster level equal to his class level.</Pair>
</Ability>
</>};
const _extend_potion = {title: "Extend Potion", tree: ["Eternal Potion"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="extend-potion" icon={["upgrade"]}>
<Pair single id="extend-potion">Extend Potion</Pair>
<Pair title="Ability">A number of times per day equal to his Intelligence modifier, the alchemist can cause any potion he drinks that does not have an instantaneous duration to function at twice its normal duration. This does not apply to extracts.</Pair>
</Ability>
</>};
const _eternal_potion = {title: "Eternal Potion", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="eternal-potion" icon={["upgrade"]}>
<Pair single id="eternal-potion">Eternal Potion</Pair>
<Pair title="Prerequisites">16th-level alchemist, <Link to="/discovery/extend_potion">extend potion</Link></Pair>
<Pair title="Ability">If an alchemist drinks a potion that he extends, the effects of that potion become permanent until he chooses to make another potion effect permanent.</Pair>
</Ability>
</>};
const _lasting_tinctures = {title: "Lasting Tinctures", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons</Link></p>
<Ability id="lasting-tinctures" icon={["upgrade"]}>
<Pair single id="lasting-tinctures">Lasting Tinctures</Pair>
<Pair title="Ability"><p>The alchemist knows how to make <Link to="/main/equipment_alchemical_that_last_much_longer_than_normal_the_durations_of_the_effects_of_any_tinctures_the_alchemist_brews_using_the_skill_craft">tinctures</Link> skill are doubled.</p>
<p>When the alchemist uses this discovery to brew a longer-lasting tincture, the tincture imposes its normal penalties on the alchemist even if the alchemist has an ability that reduces tinctures' penalties (such as the <em>substance tolerance</em> ability of the <Link to="/arc-alchemist/fermenter">fermenter alchemist archetype</Link>).</p>
</Pair>
<Pair title="Special">An alchemist with this discovery can brew tinctures with normal durations.</Pair>
</Ability>
</>};
const _air_lung = {title: "Air Lung", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral</Link></p>
<Ability id="air-lung" icon={["stairs-goal"]}>
<Pair single id="air-lung">Air Lung</Pair>
<Pair title="Prerequisites"><Link to="/subtype/aquatic">Aquatic</Link> subtype</Pair>
<Pair title="Ability">An alchemist with this discovery has conditioned his body to adapt to life above water. He gains the <Link to="/umr/amphibious">amphibious</Link> special quality.</Pair>
</Ability>
</>};
const _alchemical_simulacrum = {title: "Alchemical Simulacrum", tree: ["Doppelganger Simulacrum","Greater Alchemical Simulacrum"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="alchemical-simulacrum" icon={["stairs-goal"]}>
<Pair single id="alchemical-simulacrum">Alchemical Simulacrum</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">The alchemist gains the ability to create a <Link to="/spell/lesser_simulacrum">lesser simulacrum</Link>. This works like the <em>lesser simulacrum</em> spell, except it costs 100 gp in alchemical materials per Hit Die of the simulacrum, requires 24 hours to grow, and decays into inert flesh rather than ice or snow if killed. The created simulacrum is a creature, not a supernatural effect.</Pair>
</Ability>
</>};
const _doppelganger_simulacrum = {title: "Doppelganger Simulacrum", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="doppelganger-simulacrum" icon={["stairs-goal"]}>
<Pair single id="doppelganger-simulacrum">Doppelganger Simulacrum</Pair>
<Pair title="Prerequisites">10th-level alchemist, <Link to="/discovery/alchemical_simulacrum">alchemical simulacrum</Link></Pair>
<Pair title="Ability">The alchemist learns how to create a <Link to="/spell/simulacrum">simulacrum</Link>, a soulless duplicate, into which he can project his consciousness.</Pair>
<Pair title="Full-Round Action">He may shift his consciousness from his current body to any one of his available doppelganger simulacra, which must be on the same plane as the alchemist.</Pair>
<Pair title="Special"><p>If killed in a simulacrum, he transfers to his own body automatically; if killed in his own body, he is dead. Unused simulacra (including his abandoned original body) appear to be lifeless corpses, though they do not decay.</p>
<p>Creating a duplicate costs 1,000 gp in alchemical materials and requires 1 week to grow. The created simulacrum is a creature, not a supernatural effect.</p>
</Pair>
</Ability>
</>};
const _greater_alchemical_simulacrum = {title: "Greater Alchemical Simulacrum", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="greater-alchemical-simulacrum" icon={["stairs-goal"]}>
<Pair single id="greater-alchemical-simulacrum">Greater Alchemical Simulacrum</Pair>
<Pair title="Prerequisites">14th-level alchemist, <Link to="/discovery/alchemical_simulacrum">alchemical simulacrum</Link></Pair>
<Pair title="Ability">The alchemist gains the ability to create a simulacrum. This works like the <Link to="/spell/simulacrum">simulacrum</Link> spell, except it costs 100 gp in alchemical materials per Hit Die of the simulacrum, requires 24 hours to grow, and decays into inert flesh rather than ice or snow if killed. The created simulacrum is a creature, not a supernatural effect.</Pair>
</Ability>
</>};
const _alchemical_strike = {title: "Alchemical Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 12</Link></p>
<Ability id="alchemical-strike" icon={["stairs-goal"]}>
<Pair single id="alchemical-strike">Alchemical Strike</Pair>
<Pair title="Ability">Gain <Link to="/feat/alchemical_strike">Alchemical Strike</Link> as a bonus feat. You do not need to meet its prerequisites.</Pair>
</Ability>
</>};
const _alchemical_zombie = {title: "Alchemical Zombie", tree: ["Boneshard Bomb"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="alchemical-zombie" icon={["stairs-goal"]}>
<Pair single id="alchemical-zombie">Alchemical Zombie</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability"><p>The alchemist gains the ability to animate a relatively complete corpse as an alchemy-powered zombie. This process takes 1 hour and costs 100 gp in alchemical reagents per HD of the corpse being animated; the dead creature gains the <Link to="/template/zombie">zombie template</Link>.</p>
<p>Zombies that are created in this manner count as undead created by <Link to="/spell/animate_dead">animate dead</Link> for the purposes of determining how many undead the alchemist can control. The created zombie is a creature, not a supernatural effect.</p>
</Pair>
</Ability>
</>};
const _bitter_pill = {title: "Bitter Pill", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="bitter-pill" icon={["armor-upgrade"]}>
<Pair single id="bitter-pill">Bitter Pill</Pair>
<Pair title="Passive Ability">The alchemist becomes bitter in flavor. Any creature that hits the bitter alchemist with a bite attack gains the <Link to="/misc/sickened">sickened</Link> condition for 1 round unless it succeeds at a Fortitude save (DC = 10 + half the alchemist's level + the alchemist's Constitution modifier). Any creature that swallows the alchemist whole gains the <Link to="/misc/nauseated">nauseated</Link> condition for 1 round unless it succeeds at a Fortitude save (same DC as above).</Pair>
<Pair title="Special">If the alchemist is trapped in the creature's gullet and it becomes nauseated, the creature vomits him back out immediately as a free action at the start of the creature's turn; the alchemist lands <Link to="/rule/prone">prone</Link> adjacent to the creature.</Pair>
</Ability>
</>};
const _chameleon = {title: "Chameleon", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide</Link></p>
<Ability id="chameleon" icon={["armor-upgrade"]}>
<Pair single id="chameleon">Chameleon</Pair>
<Pair title="Ability">An alchemist with this discovery can shift the colors of his skin and equipment to blend in with the surrounding terrain. He gains a +4 enhancement bonus on Stealth checks.</Pair>
<Pair title="At 10th Level">The bonus on Stealth checks increases to +8.</Pair>
</Ability>
</>};
const _gills = {title: "Gills", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral</Link></p>
<Ability id="gills" icon={["stairs-goal"]}>
<Pair single id="gills">Gills</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Ability">An alchemist with this discovery grows a set of <em>gills</em> that allow him to breathe water in addition to breathing air. When on land, the alchemist risks his <em>gills</em> drying out and must bathe his <em>gills</em> with 1/2 gallon of water every 24 hours he is out of the water or take 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> every hour thereafter.</Pair>
</Ability>
</>};
const _lingering_spirit = {title: "Lingering Spirit", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="lingering-spirit" icon={["armor-upgrade"]}>
<Pair single id="lingering-spirit" flavor="The alchemist is familiar enough with the ties between his body and spirit that he lingers at death's door far longer than a normal person.">Lingering Spirit</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Passive Ability">The alchemist treats his Constitution as 10 points higher than normal for the purpose of determining when hit point damage kills him (so an alchemist with a Constitution of 10 and this discovery dies at -20 hit points instead of -10). Reducing him to 0 Constitution or its equivalent (from ability damage, ability drain, Constitution penalties, and so on) makes him unconscious and comatose, but he is only killed after taking an additional 5 points of Constitution damage, drain, or penalty (in effect, the alchemist must be brought to -5 Constitution in order to be killed by these attacks).</Pair>
</Ability>
</>};
const _material_mastery = {title: "Material Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="material-mastery" icon={["upgrade"]}>
<Pair single id="material-mastery">Material Mastery</Pair>
<Pair title="Ability">Your superior knowledge of the nature of matter enables you to ignore spell requirements more easily when crafting magic items. By expending an extract of the same school and level as a spell prerequisite when crafting a magic item, you take only a -2 penalty for ignoring that requirement, instead of -5.</Pair>
</Ability>
</>};
const _method_to_the_madness = {title: "Method to the Madness", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="method-to-the-madness" icon={["upgrade"]}>
<Pair single id="method-to-the-madness">Method to the Madness</Pair>
<Pair title="Prerequisites">The <Link to="/monster/derro">madness</Link> extraordinary ability</Pair>
<Pair title="Ability">The alchemist has learned to channel his madness into one of his alchemist class abilities. When the alchemist takes this discovery, he chooses one of either bombs or extracts. If he selects bombs, he uses his Charisma bonus in place of his Intelligence bonus when determining the bonus to damage and the saving throw DCs of his bombs. If the alchemist selects extracts, he uses his Charisma bonus in place of his Intelligence bonus to calculate bonus extracts per day. This discovery can be taken twice, allowing the alchemist to select both bombs and extracts.</Pair>
</Ability>
</>};
const _monstrous_graft = {title: "Monstrous Graft", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="monstrous-graft" icon={["stairs-goal","mailed-fist","upgrade","broken-shield"]}>
<Pair single id="monstrous-graft">Monstrous Graft</Pair>
<Pair title="Ability"><p>The alchemist can replace up to four of his own amputated limbs with those of a monstrous beast of the same size category.</p>
<p>If the grafted limb is an arm, the alchemist gains either a climb speed of 15 feet or a claw or slam <Link to="/umr/natural_attack">natural attack</Link> that deals 1d6 points of damage (1d4 for a Small alchemist).</p>
<p>If the grafted limb is a leg, the alchemist gains one of the following benefits: a +5 bonus to land speed, a swim speed of 15 feet, or a +5 bonus on Acrobatics checks when jumping.</p>
</Pair>
<Pair title="Special">For each limb the alchemist replaces in this manner, he takes a -2 penalty to Wisdom as he loses his sense of self. <Link to="/monster/derro">Derros</Link> are immune to this penalty.</Pair>
</Ability>
</>};
const _phantom_limb = {title: "Phantom Limb", jsx: <><p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook</Link></p>
<Ability id="phantom-limb" icon={["stairs-goal","magic-palm"]}>
<Pair single id="phantom-limb">Phantom Limb</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">The alchemist can manifest a ghostly, incorporeal arm that juts out from his torso. This <em>phantom limb</em> does not grant the alchemist any extra attacks or actions per round, and it cannot hold or grab anything (including incorporeal objects).</Pair>
<Pair title="Standard Action">The alchemist may use his <em>phantom limb</em> to make a touch attack against a foe, scraping away at the very fibers of the victim's soul. This attack deals 1d4 points of damage per alchemist level (Fortitude half). Creatures that are immune to incorporeal attacks are immune to this damage, but otherwise the damage bypasses all forms of damage reduction except DR/epic.</Pair>
<Pair title="Special">The alchemist may suppress or activate this ability as a <strong className="hl">free action</strong>, and can use his <em>phantom limb</em> for a number of rounds per day equal to 3 + his Intelligence modifier (these rounds need not be consecutive).</Pair>
</Ability>
</>};
const _pheromones = {title: "Pheromones", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="pheromones" icon={["upgrade"]}>
<Pair single id="pheromones">Pheromones</Pair>
<Pair title="Passive Ability">The alchemist exudes an imperceptible musk that grants him a permanent +3 competence bonus on Bluff, Diplomacy, and Intimidate checks.</Pair>
</Ability>
</>};
const _preserve_organs = {title: "Preserve Organs", tree: ["Mummification"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="preserve-organs" icon={["armor-upgrade"]}>
<Pair single id="preserve-organs" flavor="The alchemist learns how to preserve and protect his vital organs, reducing the chance of a mortal wound.">Preserve Organs</Pair>
<Pair title="Passive Ability">When a critical hit or sneak attack is scored on the alchemist, there is a 25% chance that the critical hit or sneak attack is negated and damage is instead rolled normally. This does not stack with similar abilities that negate critical hits and sneak attacks (such as <Link to="/magic-enh/fortification">fortification</Link> armor).</Pair>
<Pair title="Special">An alchemist can take this discovery up to three times; the effects stack, increasing this chance to 50% and then 75%.</Pair>
</Ability>
</>};
const _mummification = {title: "Mummification", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="mummification" icon={["armor-upgrade"]}>
<Pair single id="mummification" flavor="The alchemist has mastered preserving flesh and applied this knowledge to his own body, turning himself into an undead-like creature.">Mummification</Pair>
<Pair title="Prerequisites">10th-level alchemist, <Link to="/discovery/preserve_organs">preserve organs</Link></Pair>
<Pair title="Ability">After learning this discovery, the alchemist must perform a 30-day regimen of a special diet, rigorous exercise, and drinking a mildly poisonous alchemical tea. At the end of this regimen, he falls unconscious for 24 hours, then awakens as a "living mummy." The alchemist's type does not change, but he becomes immune to cold, nonlethal damage, paralysis, and sleep.</Pair>
</Ability>
</>};
const _promethean_disciple = {title: "Promethean Disciple", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures</Link></p>
<Ability id="promethean-disciple" icon={["stairs-goal"]}>
<Pair single id="promethean-disciple" flavor="An alchemist with this discovery learns how to craft constructs by way of alchemical research rather than arcane magic.">Promethean Disciple</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The alchemist gains <Link to="/feat/craft_construct">Craft Construct</Link> as a bonus feat without needing to meet its requirements. The alchemist substitutes his number of ranks in <Link to="/skill/craft">Craft</Link> (alchemy) for his total caster level and must use Craft (alchemy) to create the construct.</Pair>
<Pair title="Special">The DC to create the construct still increases for any necessary spells that the alchemist does not have access to. However, the alchemist can use extracts in place of spells as spell prerequisites.</Pair>
</Ability>
</>};
const _psychokinetic_tincture = {title: "Psychokinetic Tincture", jsx: <><p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook</Link></p>
<Ability id="psychokinetic-tincture" icon={["armor-upgrade","smoking-finger","armor-downgrade"]}>
<Pair single id="psychokinetic-tincture" flavor="The alchemist can concoct a foul-tasting tincture that harnesses the power of the spirit.">Psychokinetic Tincture</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Standard Action">By drinking this tincture, the alchemist can invite the latent spirits in the area to surround him. The alchemist can channel one spirit for every 4 alchemist levels he possesses. Each spirit channeled this way grants the alchemist a +1 deflection bonus to AC as the spirits whirl around his body.</Pair>
<Pair title="Standard Action">The alchemist can launch one of these spirits toward a target as a ranged touch attack. Launching a spirit this way reduces this discovery's deflection bonus to AC by 1. As a launched spirit passes through its target's body, it emits a terrible wail heard only in the target's mind, causing the target to become <Link to="/misc/frightened">frightened</Link> for 1 round per alchemist level (Will negates). This is a mind-affecting fear effect. A creature that successfully saves against the wail cannot be affected by this discovery again for 24 hours.</Pair>
<Pair title="Special">The spirits whirl around the alchemist's body for 10 minutes per alchemist level, or until the alchemist has launched all of the spirits.</Pair>
</Ability>
</>};
const _ranged_baptism = {title: "Ranged Baptism", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="ranged-baptism" icon={["upgrade"]}>
<Pair single id="ranged-baptism">Ranged Baptism</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Ability">When the alchemist uses <Link to="/eq-weapon/holy_water">holy water</Link> as a splash weapon, any squares subject to its effects (including creatures affected by splash damage) or that contain creatures subject to its effects are also affected as if by <Link to="/spell/consecrate">consecrate</Link>, for a number of rounds equal to the alchemist's Intelligence modifier. Undead struck by holy water remain affected by the <em>consecrate</em> effect even if they leave the affected area.</Pair>
</Ability>
</>};
const _sleeper_agent = {title: "Sleeper Agent", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="sleeper-agent" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="sleeper-agent" flavor={<>The alchemist learns how to create a <em>sleeper agent,</em> whom he releases back into its original society none the wiser.</>}>Sleeper Agent</Pair>
<Pair title="Prerequisites">12th-level alchemist</Pair>
<Pair title="Ability"><p>The alchemist can create a <em>sleeper agent</em> in a ritual that takes 1 minute; the target must be unconscious for the ritual's duration.</p>
<p>At any time during the next year, as long as he is within 1 mile of the <em>sleeper agent,</em> the alchemist can activate the agent's programming. When the <em>sleeper agent</em> is activated, treat her as if she were the target of a <Link to="/spell/dominate_person">dominate person</Link> spell with a caster level equal to the alchemist's level at the time the <em>sleeper agent</em> was created.</p>
</Pair>
<Pair title="Special">If the <em>sleeper agent</em> is killed or the <em>dominate person</em> effect's duration expires, the <em>sleeper agent</em> is permanently released from the alchemist's control. The alchemist can also release any <em>sleeper agent</em> as a <strong className="hl">free action</strong>. The alchemist can have one active <em>sleeper agent</em> for every 6 alchemist levels he possesses.</Pair>
</Ability>
</>};
const _spell_knowledge = {title: "Spell Knowledge", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link></p>
<Ability id="spell-knowledge" icon={["spell-book"]}>
<Pair single id="spell-knowledge" flavor="Your studies into how all things are interconnected have taught you to cast a very limited number of spells.">Spell Knowledge</Pair>
<Pair title="Ability"><p>Select a single spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/wizard_spell">wizard spell list</Link> that is at least 2 levels lower than your highest-level extract known. You can prepare and cast this spell as an arcane spell.</p>
<p>Preparing the spell uses up an extract slot 1 level higher than the spell's level. Your caster level is equal to your alchemist level, and your save DCs and <Link to="/rule/concentration">concentration</Link> checks are Intelligence-based. You're considered to have this spell on your spell list for purposes of prerequisites, <Link to="/misc/spell_completion">spell completion</Link> items, and <Link to="/misc/spell_trigger">spell trigger</Link> items.</p>
</Pair>
<Pair title="Special">You may select this discovery more than once. Each time, it grants you access to another spell from the sorcerer/wizard spell list.</Pair>
</Ability>
</>};
const _spontaneous_healing = {title: "Spontaneous Healing", tree: ["Healing Touch"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="spontaneous-healing" icon={["armor-upgrade"]}>
<Pair single id="spontaneous-healing" flavor="The alchemist gains the ability to heal from wounds rapidly.">Spontaneous Healing</Pair>
<Pair title="Free Action">Once per round, the alchemist can heal 5 hit points as if he had the <Link to="/umr/fast_healing">fast healing</Link> ability. He can heal 5 hit points per day in this manner for every 2 alchemist levels he possesses.</Pair>
<Pair title="Special">If the alchemist falls unconscious because of hit point damage and he still has healing available from this ability, the ability activates automatically each round until he is conscious again or the ability is depleted for the day.</Pair>
</Ability>
</>};
const _healing_touch = {title: "Healing Touch", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="healing-touch" icon={["remedy","armor-upgrade"]}>
<Pair single id="healing-touch" flavor="The alchemist gains the ability to heal other creatures.">Healing Touch</Pair>
<Pair title="Prerequisites">6th-level alchemist, <Link to="/discovery/spontaneous_healing">spontaneous healing</Link></Pair>
<Pair title="Standard Action">The alchemist may touch a creature and apply 1 round's effect of his <em>spontaneous healing</em> discovery to that creature; this counts toward his <em>spontaneous healing</em> limit for the day.</Pair>
<Pair title="Special">The alchemist's daily limit for hit points healed by <em>spontaneous healing</em> increases to 5 &times; his alchemist level. This ability only functions if the target is the same type of creature (humanoid, undead, and so on) as the alchemist</Pair>
</Ability>
</>};
const _sunlight_acclimation = {title: "Sunlight Acclimation", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="sunlight-acclimation" icon={["armor-upgrade"]}>
<Pair single id="sunlight-acclimation" flavor="Time spent in the bright light of day has partially inured the alchemist to its effects.">Sunlight Acclimation</Pair>
<Pair title="Passive Ability">When the alchemist would normally take Constitution damage as a result of vulnerability to sunlight, he can attempt a DC 11 Fortitude saving throw to negate the effects. The DC of this saving throw increases by 1 for each hour after the first spent in sunlight within the last 24 hours.</Pair>
</Ability>
</>};
const _tentacle = {title: "Tentacle", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="tentacle" icon={["stairs-goal"]}>
<Pair single id="tentacle">Tentacle</Pair>
<Pair title="Ability"><p>The alchemist gains a prehensile, arm-length <em>tentacle</em> on his body. The <em>tentacle</em> is fully under his control and cannot be concealed except with magic or bulky clothing.</p>
<p>The <em>tentacle</em> does not give the alchemist any extra attacks or actions per round, though he can use it to make a <Link to="/umr/tentacle_attack">tentacle attack</Link> (1d4 damage for a Medium alchemist, 1d3 damage for a Small one) with the <Link to="/umr/grab">grab</Link> ability.</p>
<p>The <em>tentacle</em> can manipulate or hold items as well as the alchemist's original arms can (for example, allowing the alchemist to use one hand to wield a weapon, the <em>tentacle</em> to hold a potion, and the third hand to throw a bomb). Unlike an arm, the <em>tentacle</em> has no magic item slots.</p>
</Pair>
</Ability>
</>};
const _tumor_familiar = {title: "Tumor Familiar", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="tumor-familiar" icon={["stairs-goal"]}>
<Pair single id="tumor-familiar">Tumor Familiar</Pair>
<Pair title="Ability"><p>The alchemist creates a Diminutive or Tiny tumor on his body, usually on his back or stomach.</p>
<p>As a <strong className="hl">standard action</strong>, the alchemist can have the tumor detach itself from his body as a separate creature vaguely resembling a kind of animal suitable for a <Link to="/ability/familiar">familiar</Link> (bat, cat, and so on) and move about as if it were an independent creature. The tumor can reattach itself to the alchemist as a <strong className="hl">standard action</strong>.</p>
<p>The tumor has all the abilities of the animal it resembles (for example, a bat-like tumor can fly) and <Link to="/sidekick/familiar">familiar abilities</Link> based on the alchemist's caster level (though some familiar abilities may be useless to an alchemist). The tumor acts as the alchemist's familiar whether attached or separated (providing a skill bonus, the <Link to="/feat/alertness">Alertness</Link> feat, and so on).</p>
<p>When attached to the alchemist, the tumor has <Link to="/umr/fast_healing">fast healing</Link> 5.</p>
</Pair>
<Pair title="Special">An alchemist's extracts and <em>mutagens</em> are considered spells for the purposes of familiar abilities like <em>share spells</em> and <em>deliver touch spells.</em> If a <em>tumor familiar</em> is lost or dies, it can be replaced 1 week later through a specialized procedure that costs 200 gp per alchemist level. The ritual takes 8 hours to complete.</Pair>
</Ability>
</>};
const _vestigial_arm = {title: "Vestigial Arm", tree: ["Parasitic Twin","Subsumed Spirit"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="vestigial-arm" icon={["stairs-goal"]}>
<Pair single id="vestigial-arm">Vestigial Arm</Pair>
<Pair title="Ability"><p>The alchemist gains a new arm (left or right) on his torso. The arm is fully under his control and cannot be concealed except with magic or bulky clothing.</p>
<p>The arm does not give the alchemist any extra attacks or actions per round, though the arm can wield a weapon and make attacks as part of the alchemist's attack routine (using <Link to="/rule/two_weapon_fighting">two-weapon fighting</Link>).</p>
<p>The arm can manipulate or hold items as well as the alchemist's original arms (for example, allowing the alchemist to use one hand to wield a weapon, another hand to hold a potion, and the third hand to throw a bomb).</p>
<p>The arm has its own "hand" and "ring" magic item slots (though the alchemist can still only wear two rings and two hand magic items at a time).</p>
</Pair>
<Pair title="Special">An alchemist may take this discovery up to two times.</Pair>
</Ability>
</>};
const _parasitic_twin = {title: "Parasitic Twin", tree: ["Subsumed Spirit"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="parasitic-twin" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="parasitic-twin">Parasitic Twin</Pair>
<Pair title="Prerequisites">Taken the <Link to="/discovery/vestigial_arm">vestigial arm</Link> discovery twice</Pair>
<Pair title="Ability"><p>The alchemist's vestigial limbs are part of a <em>parasitic twin</em> on his torso, consisting of a head, a torso, and two arms (from the <em>vestigial arm</em> discovery).</p>
<p>Normally, the twin is mostly recessed within the alchemist's body, with the visible arms acting like the <em>vestigial arm</em> discovery, though the alchemist can manifest or hide the twin as a <strong className="hl">standard action</strong>. The twin is helpless, fully subservient to the alchemist, and cannot be targeted or harmed.</p>
</Pair>
<Pair title="Passive Ability">Once per day, if the alchemist succumbs to a mental effect that would make him unconscious, helpless, or not in control of his own actions (such as <Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/feeblemind">feeblemind</Link>, or <Link to="/spell/hold_person">hold person</Link>), he can reroll his saving throw; success means the twin absorbs the effect and the alchemist can ignore it. Using this ability <Link to="/misc/sicken">sickens</Link> the alchemist for the duration of the absorbed effect (removing the effect from the twin ends the sickened condition), and he cannot use the twin's limbs during that time, though passive effects (such as from rings worn on the vestigial limbs) continue normally.</Pair>
</Ability>
</>};
const _subsumed_spirit = {title: "Subsumed Spirit", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="subsumed-spirit" icon={["upgrade","armor-downgrade"]}>
<Pair single id="subsumed-spirit" flavor="As the alchemist grows in power, his parasitic twin laps up a portion of his soul, like a dog feeding on its master's scraps.">Subsumed Spirit</Pair>
<Pair title="Prerequisites"><Link to="/discovery/parasitic_twin">Parasitic twin</Link></Pair>
<Pair title="Ability">The alchemist's parasitic twin can now manifest or hide within the alchemist's torso as a <strong className="hl">move action</strong>.</Pair>
<Pair title="Standard Action">The alchemist can cause his manifested twin to babble, driving listeners insane. All creatures without the <em>insanity</em> special ability (although see below) that are within 60 feet of the alchemist must succeed at a Will save or be affected by <Link to="/spell/confusion">confusion</Link> for 1 round per alchemist level. The alchemist can urge his parasitic twin to babble a number of times per day equal to 3 + the alchemist's Intelligence modifier.</Pair>
<Pair title="Note" hl>This discovery was presented in a section on the <Link to="/monster/derro">Derro</Link> who have a special ability called <strong>Madness</strong>, which is referenced by a separate discovery (<Link to="/discovery/method_to_the_madness">method to the madness</Link>) in that same section. It is unclear if this discovery is supposed to be referring to that ability, rather than "insanity", which is possessed by the unrelated <Link to="/subtype/great_old_one">Great Old Ones</Link> and <Link to="/monster/warped_one">warped ones</Link>. Consult your GM if needed.</Pair>
<Pair title="Special">Creatures that successfully save can't be affected by this effect for 24 hours. The alchemist is immune to its sibling's babbling. This is a sonic, mind-affecting compulsion effect.</Pair>
</Ability>
</>};
const _webbed_extremities = {title: "Webbed Extremities", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral</Link></p>
<Ability id="webbed-extremities" icon={["upgrade"]}>
<Pair single id="webbed-extremities" flavor="An alchemist with this discovery grows membranes between his fingers and toes, greatly improving his movement underwater.">Webbed Extremities</Pair>
<Pair title="Passive Ability">The alchemist gains a +4 alchemical bonus on Swim checks and can take 10 on a Swim check even if distracted or endangered while swimming.</Pair>
</Ability>
</>};
const _wet_coat = {title: "Wet Coat", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral</Link></p>
<Ability id="wet-coat" icon={["armor-upgrade"]}>
<Pair single id="wet-coat">Wet Coat</Pair>
<Pair title="Prerequisites">4th-level alchemist, <Link to="/subtype/aquatic">Aquatic</Link> subtype, <Link to="/umr/water_dependency">water dependency</Link> special quality</Pair>
<Pair title="Passive Ability">An alchemist with this discovery has conditioned his body so that it never completely dries out when on land. He effectively becomes immune to any detrimental effects of his water dependency.</Pair>
</Ability>
</>};
const _wings = {title: "Wings", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link></p>
<Ability id="wings" icon={["stairs-goal"]}>
<Pair single id="wings">Wings</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The alchemist gains bat-like, bird-like, or insect-like functional wings, allowing him to fly as the <Link to="/spell/fly">fly</Link> spell for a number of minutes per day equal to his caster level. These minutes do not need to be consecutive, but they must be spent in 1-minute increments.</Pair>
<Pair title="Special">An alchemist can select this discovery multiple times; each time he does so, he adds his caster level to the number of minutes per day that he can fly with the <em>wings.</em> This flight is an extraordinary ability.</Pair>
</Ability>
</>};
const _awakened_intellect = {title: "Awakened Intellect", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="awakened-intellect" icon={["upgrade"]}>
<Pair single id="awakened-intellect">Awakened Intellect</Pair>
<Pair title="Passive Ability">The alchemist's constant exposure to strange chemicals has expanded his mind. His Intelligence score permanently increases by 2 points.</Pair>
</Ability>
</>};
const _greater_change_alignment = {title: "Greater Change Alignment", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="greater-change-alignment-su" icon={["upgrade"]}>
<Pair single id="greater-change-alignment-su">Greater Change Alignment (Su)</Pair>
<Pair title="Prerequisites"><Link to="/discovery/change_alignment">Change alignment</Link>, <Link to="/discovery/infusion">infusion</Link></Pair>
<Pair title="Ability">The effects of the alchemist's <em>change alignment</em> infusion become permanent and can only be reversed by a <Link to="/spell/wish">wish</Link> or <Link to="/spell/miracle">miracle</Link>.</Pair>
<Pair title="Special">A permanent, forced change of alignment may be devastating, and some believe it is little better than zealous slavery or mind control. Others consider a good alignment brought about by any means but purity of heart an affront to freedom. This discovery remains controversial at best.</Pair>
</Ability>
</>};
const _eternal_youth = {title: "Eternal Youth", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="eternal-youth" icon={["upgrade"]}>
<Pair single id="eternal-youth">Eternal Youth</Pair>
<Pair title="Passive Ability">The alchemist has discovered a cure for aging, and from this point forward he takes no penalty to his physical ability scores from <Link to="/rule/age">advanced age</Link>. If the alchemist is already taking such penalties, they are removed at this time.</Pair>
</Ability>
</>};
const _fast_healing = {title: "Fast Healing", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="fast-healing" icon={["armor-upgrade"]}>
<Pair single id="fast-healing">Fast Healing</Pair>
<Pair title="Passive Ability">The alchemist's flesh responds to damage with shocking speed - he gains <Link to="/umr/fast_healing">fast healing</Link> 5.</Pair>
</Ability>
</>};
const _philosophers_stone = {title: "Philosopher's Stone", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="philosophers-stone" icon={["stairs-goal"]}>
<Pair single id="philosophers-stone">Philosopher's Stone</Pair>
<Pair title="Ability">The alchemist learns how to create a <Link to="/magic-artifact/philosophers_stone">philosopher's stone</Link>, and can do so once per month at no cost. Creating a <em>philosopher's stone</em> takes 1 day of work.</Pair>
</Ability>
</>};
const _poison_touch = {title: "Poison Touch", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="poison-touch" icon={["magic-palm"]}>
<Pair single id="poison-touch">Poison Touch</Pair>
<Pair title="Ability">The alchemist gains a poisonous touch, as if under the effects of a <Link to="/spell/poison">poison</Link> spell. He can suppress or activate this ability as a <strong className="hl">free action</strong>. The physical appearance of how the alchemist generates and delivers his poisonous touch varies from alchemist to alchemist.</Pair>
</Ability>
</>};
const _true_mutagen = {title: "True Mutagen", topLink: ["Grand Discoveries","ability/grand_discoveries"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="true-mutagen" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="true-mutagen">True Mutagen</Pair>
<Pair title="Prerequisites"><Link to="/discovery/grand_mutagen">Grand mutagen</Link></Pair>
<Pair title="Passive Ability">The alchemist's <em>mutagen</em> now grants a +8 natural armor bonus and a +8 alchemical bonus to Strength, Dexterity, and Constitution. The alchemist takes a -2 penalty to his Intelligence, Wisdom, and Charisma as long as the <em>mutagen</em> persists.</Pair>
</Ability>
</>};
export default {not_found:_not_found,acid_bomb:_acid_bomb,anarchic_bombs:_anarchic_bombs,anguish_bomb:_anguish_bomb,dread_bomb:_dread_bomb,melancholy_bomb:_melancholy_bomb,axiomatic_bombs:_axiomatic_bombs,blinding_bomb:_blinding_bomb,sunlight_bomb:_sunlight_bomb,boneshard_bomb:_boneshard_bomb,breath_weapon_bomb:_breath_weapon_bomb,concussive_bomb:_concussive_bomb,confusion_bomb:_confusion_bomb,cursed_bomb:_cursed_bomb,cytillesh_bomb:_cytillesh_bomb,darkness_bomb:_darkness_bomb,defoliant_bomb:_defoliant_bomb,demolition_charge:_demolition_charge,ectoplasmic_bomb:_ectoplasmic_bomb,explosive_bomb:_explosive_bomb,hellfire_bomb:_hellfire_bomb,siege_bomb:_siege_bomb,flesh_eating_bomb:_flesh_eating_bomb,force_bomb:_force_bomb,frost_bomb:_frost_bomb,glassfoot_bomb:_glassfoot_bomb,grease_bomb:_grease_bomb,grounding_goo:_grounding_goo,healing_bomb:_healing_bomb,holy_bombs:_holy_bombs,immolation_bomb:_immolation_bomb,incendiary_charge:_incendiary_charge,jury_rigged_bomb:_jury_rigged_bomb,neutralizing_bomb:_neutralizing_bomb,ooze_blight:_ooze_blight,penetrating_charge:_penetrating_charge,poisoned_explosive:_poisoned_explosive,profane_bomb:_profane_bomb,psychoactive_bomb:_psychoactive_bomb,rocket_bomb:_rocket_bomb,sand_bomb:_sand_bomb,scrap_bomb:_scrap_bomb,shock_bomb:_shock_bomb,smoke_bomb:_smoke_bomb,inferno_bomb:_inferno_bomb,plague_bomb:_plague_bomb,greater_plague_bomb:_greater_plague_bomb,plague_vector:_plague_vector,poison_bomb:_poison_bomb,stink_bomb:_stink_bomb,solid_ground:_solid_ground,substantiating_bomb:_substantiating_bomb,tanglefoot_bomb:_tanglefoot_bomb,thorny_bomb:_thorny_bomb,void_bomb:_void_bomb,blackstar_bomb:_blackstar_bomb,delayed_bomb:_delayed_bomb,directed_bomb:_directed_bomb,divine_inks:_divine_inks,improved_divine_inks:_improved_divine_inks,greater_divine_inks:_greater_divine_inks,constructive_dyes:_constructive_dyes,greater_constructive_dyes:_greater_constructive_dyes,living_pigment:_living_pigment,dispelling_bomb:_dispelling_bomb,explosive_calligraphy:_explosive_calligraphy,explosive_missile:_explosive_missile,fast_bombs:_fast_bombs,fire_brand:_fire_brand,madness_bomb:_madness_bomb,inspired_bomb:_inspired_bomb,precise_bombs:_precise_bombs,sticky_bomb:_sticky_bomb,strafe_bomb:_strafe_bomb,syringe_stirge:_syringe_stirge,underwater_demolition:_underwater_demolition,bottled_ooze:_bottled_ooze,combine_extracts:_combine_extracts,infusion:_infusion,aromatic_extract:_aromatic_extract,change_alignment:_change_alignment,glimmering_infusion:_glimmering_infusion,nostrum:_nostrum,tainted_infusion:_tainted_infusion,intuitive_understanding:_intuitive_understanding,lingering_plague:_lingering_plague,pickled_quasit:_pickled_quasit,remedy_extract:_remedy_extract,sandstone_solution:_sandstone_solution,volumizer:_volumizer,bone_spike_mutagen:_bone_spike_mutagen,cognatogen:_cognatogen,collective_memory:_collective_memory,greater_cognatogen:_greater_cognatogen,grand_cognatogen:_grand_cognatogen,elemental_mutagen:_elemental_mutagen,feral_mutagen:_feral_mutagen,fey_mutagen:_fey_mutagen,greater_fey_mutagen:_greater_fey_mutagen,grand_fey_mutagen:_grand_fey_mutagen,greater_mutagen:_greater_mutagen,grand_mutagen:_grand_mutagen,greater_rasugen:_greater_rasugen,grand_rasugen:_grand_rasugen,infuse_mutagen:_infuse_mutagen,inspiring_cognatogen:_inspiring_cognatogen,greater_inspiring_cognatogen:_greater_inspiring_cognatogen,grand_inspiring_cognatogen:_grand_inspiring_cognatogen,mutagen:_mutagen,purging_mutagen:_purging_mutagen,rag_doll_mutagen:_rag_doll_mutagen,splitting_mutagen:_splitting_mutagen,celestial_poisons:_celestial_poisons,concentrate_poison:_concentrate_poison,deadly_excretions:_deadly_excretions,designer_poison:_designer_poison,elemental_destabilizers:_elemental_destabilizers,enduring_toxin:_enduring_toxin,malignant_poison:_malignant_poison,nauseating_flesh:_nauseating_flesh,poison_conversion:_poison_conversion,precise_poison:_precise_poison,sticky_poison:_sticky_poison,dilution:_dilution,elixir_of_life:_elixir_of_life,enhance_potion:_enhance_potion,extend_potion:_extend_potion,eternal_potion:_eternal_potion,lasting_tinctures:_lasting_tinctures,air_lung:_air_lung,alchemical_simulacrum:_alchemical_simulacrum,doppelganger_simulacrum:_doppelganger_simulacrum,greater_alchemical_simulacrum:_greater_alchemical_simulacrum,alchemical_strike:_alchemical_strike,alchemical_zombie:_alchemical_zombie,bitter_pill:_bitter_pill,chameleon:_chameleon,gills:_gills,lingering_spirit:_lingering_spirit,material_mastery:_material_mastery,method_to_the_madness:_method_to_the_madness,monstrous_graft:_monstrous_graft,phantom_limb:_phantom_limb,pheromones:_pheromones,preserve_organs:_preserve_organs,mummification:_mummification,promethean_disciple:_promethean_disciple,psychokinetic_tincture:_psychokinetic_tincture,ranged_baptism:_ranged_baptism,sleeper_agent:_sleeper_agent,spell_knowledge:_spell_knowledge,spontaneous_healing:_spontaneous_healing,healing_touch:_healing_touch,sunlight_acclimation:_sunlight_acclimation,tentacle:_tentacle,tumor_familiar:_tumor_familiar,vestigial_arm:_vestigial_arm,parasitic_twin:_parasitic_twin,subsumed_spirit:_subsumed_spirit,webbed_extremities:_webbed_extremities,wet_coat:_wet_coat,wings:_wings,awakened_intellect:_awakened_intellect,greater_change_alignment:_greater_change_alignment,eternal_youth:_eternal_youth,fast_healing:_fast_healing,philosophers_stone:_philosophers_stone,poison_touch:_poison_touch,true_mutagen:_true_mutagen}