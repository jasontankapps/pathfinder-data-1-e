import { PropsWithChildren, FC, Fragment as Frag } from 'react';
import Link from './components/Link';
import InnerLink from './components/InnerLink';
import BasicPage from './pages/BasicPage';
import links from './json/_data__linked-index.json';
import names from './json/_data__fuse-index.json';
import './pages/Page.css';

interface ParentageProps {
	prop: string
	link: boolean
}
interface BasicLeafProps {
	level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
	prop: string
	primary?: boolean
}
interface LeafWithCoParents extends BasicLeafProps {
	coparents?: string[]
	coparentsNolink?: never
}
interface LeafWithUnlinkedCoParents extends BasicLeafProps {
	coparentsNolink?: string[]
	coparents?: never
}
type LeafProps = LeafWithCoParents | LeafWithUnlinkedCoParents;
interface Item {
	name: string
	subtitle?: string
	tags?: string
}
function isIndex<T>(value: unknown): asserts value is T[] {}
isIndex<Item>(names);
isIndex<string>(links);

const CoParentage: FC<ParentageProps> = ({prop, link: lnk}) => {
	const link = "feat/" + prop;
	const index = links.indexOf(link);
	if(index < 0) {
		return <div><strong>ERROR</strong> trying to find co-parent "{prop}".</div>;
	}
	const title = names[index].name;
	return lnk ? (
		<span className="coparent">{title}</span>
	) : (
		<span className="coparent">
			<InnerLink to={"featTreePageAnchor-" + prop}>{title}</InnerLink>
		</span>
	);
};

const Leaf: FC<PropsWithChildren<LeafProps>> = ({level, coparents, coparentsNolink, primary, prop}) => {
	const link = "feat/" + prop;
	const index = links.indexOf(link);
	if(index < 0) {
		return <div><strong>ERROR</strong> trying to find "{prop}".</div>;
	}
	const title = names[index].name;
	const id = !coparents || level === 1 || primary ? "featTreePageAnchor-" + prop : undefined;
	const hasCoparents = coparents ? true : (coparentsNolink ? 1 : false);
	return (
		<div className={`leaf level${level}` + (coparents ? " hasCoparents" : "")} id={id}>
			<div className="leafName">{level === 1 ? "" : String.fromCharCode(10551) + " "}<Link to={"/" + link}>{title}</Link></div>
			{hasCoparents
				? (
					<div className="coparents"><strong>Also requires:</strong> {
						(coparents || coparentsNolink)!.map((cp, i) => <Frag key={`${prop}/${cp}/${i}`}>{i ? ", " : ""}<CoParentage prop={cp} link={hasCoparents === 1} /></Frag>)
					}</div>
				)
				: (
					level === 1
						? (
							<div className="coparents"><strong>Base Feat</strong></div>
						)
						: <></>
				)
			}
		</div>
	);
};

const FeatsTreePage: FC = () => {
	return (
		<BasicPage
			title="Feat Trees"
			hierarchy={[["Feats", "main/feats"]]}
			hideSources
			pageId="feattreespage"
			className="featsTreePage"
		>
			<section>
				<p>Pathfinder has many "feat trees" where you must learn one feat (or more) before being able to take a beter feat later on. Below are the biggest feat trees, typically with 5 or more feats in a tree.</p>
				<p>Use the find-in-page button above to quickly find a specific feat.</p>
			</section>
			<section>
				<Leaf level={1} prop="alertness" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "weapon_finesse", "weapon_focus"]} prop="aldori_style" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="aldori_style_aegis" />
				<Leaf level={4} prop="aldori_style_conquest" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "weapon_focus"]} prop="garens_discipline" />
				<Leaf level={2} coparents={["improved_initiative", "lightning_reflexes", "quick_draw"]} prop="ready_for_anything" />
				<Leaf level={3} prop="cunning_intuition" />
			</section>
			<section>
				<Leaf level={1} prop="blind_fight" />
				<Leaf level={2} prop="blinded_blade_style" />
				<Leaf level={3} prop="blinded_competence" />
				<Leaf level={4} coparentsNolink={["greater_blind_fight"]} prop="blinded_master" />
				<Leaf level={2} coparents={["improved_precise_shot"]} prop="circuitous_shot" />
				<Leaf level={2} prop="improved_blind_fight" />
				<Leaf level={3} prop="greater_blind_fight" />
				<Leaf level={4} prop="blinded_master" />
				<Leaf level={4} prop="triangulate" />
				<Leaf level={2} coparents={["combat_expertise"]} prop="moonlight_stalker" primary />
				<Leaf level={3} coparents={["improved_feint"]} prop="moonlight_stalker_feint" />
				<Leaf level={4} prop="moonlight_stalker_master" />
			</section>
			<section>
				<Leaf level={1} prop="catch_off_guard" />
				<Leaf level={2} coparents={["improved_disarm"]} prop="arming_grab" />
				<Leaf level={2} coparents={["throw_anything"]} prop="shikigami_style" />
				<Leaf level={3} prop="shikigami_mimicry" />
				<Leaf level={4} prop="shikigami_manipulation" />
			</section>
			<section>
				<Leaf level={1} prop="combat_expertise" />
				<Leaf level={2} coparents={["combat_reflexes"]} prop="archon_style" />
				<Leaf level={3} prop="archon_diversion" />
				<Leaf level={4} prop="archon_justice" />
				<Leaf level={2} prop="improved_called_shot" />
				<Leaf level={3} coparents={["precise_shot", "weapon_focus"]} prop="signature_strike_style" />
				<Leaf level={4} prop="signature_strike_taunt" />
				<Leaf level={5} prop="signature_strike_triumph" />
				<Leaf level={2} prop="improved_dirty_trick" />
				<Leaf level={3} coparents={["vital_strike", "weapon_focus"]} prop="cloak_and_dagger_style" />
				<Leaf level={4} prop="cloak_and_dagger_subterfuge" />
				<Leaf level={5} prop="cloak_and_dagger_tactics" />
				<Leaf level={3} prop="greater_dirty_trick" />
				<Leaf level={4} prop="dirty_trick_master" />
				<Leaf level={4} prop="superior_dirty_trick" />
				<Leaf level={3} prop="kitsune_style" />
				<Leaf level={4} prop="kitsune_tricks" />
				<Leaf level={5} prop="kitsune_vengeance" />
				<Leaf level={3} prop="underhanded_teamwork" />
				<Leaf level={4} prop="improved_underhanded_teamwork" />
				<Leaf level={3} coparents={["critical_focus"]} prop="dirty_critical_hit" />
				<Leaf level={3} coparents={["improved_disarm"]} prop="dirty_disarm" />
				<Leaf level={3} coparents={["improved_grapple"]} prop="dirty_grapple" />
				<Leaf level={2} prop="improved_disarm" primary />
				<Leaf level={3} coparents={["catch_off_guard"]} prop="arming_grab" />
				<Leaf level={3} prop="greater_disarm" />
				<Leaf level={4} prop="directed_disarm" />
				<Leaf level={3} prop="dirty_disarm" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="follow_up_strike" />
				<Leaf level={3} coparents={["power_attack"]} prop="numbing_blow" />
				<Leaf level={3} coparents={["combat_reflexes", "improved_unarmed_strike"]} prop="wrist_grab" />
				<Leaf level={2} prop="improved_feint" primary />
				<Leaf level={3} prop="greater_feint" />
				<Leaf level={4} coparents={["deceitful"]} prop="incite_paranoia" />
				<Leaf level={3} coparents={["mobility"]} prop="passing_trick" />
				<Leaf level={3} prop="disengaging_feint" />
				<Leaf level={4} prop="disengaging_flourish" />
				<Leaf level={4} coparents={["mobility"]} prop="disengaging_shot" />
				<Leaf level={3} prop="diva_strike" />
				<Leaf level={4} prop="diva_advance" />
				<Leaf level={3} coparents={["gnome_weapon_focus"]} prop="illusive_gnome_style" />
				<Leaf level={4} prop="illusive_gnome_surprise" />
				<Leaf level={5} prop="illusive_gnome_bewilderment" />
				<Leaf level={3} coparents={["moonlight_stalker"]} prop="moonlight_stalker_feint" />
				<Leaf level={4} prop="moonlight_stalker_master" />
				<Leaf level={3} coparents={["swordplay_style"]} prop="swordplay_upset" />
				<Leaf level={4} prop="swordplay_deflection" />
				<Leaf level={2} prop="improved_reposition" />
				<Leaf level={3} coparents={["improved_drag", "improved_unarmed_strike"]} prop="crashing_wave_style" />
				<Leaf level={4} prop="crashing_wave_buffet" />
				<Leaf level={5} prop="crashing_wave_fist" />
				<Leaf level={3} coparents={["improved_trip"]} prop="pummeling_bully" />
				<Leaf level={3} prop="whipcrack" />
				<Leaf level={4} prop="domino_crash" />
				<Leaf level={2} prop="improved_trip" primary />
				<Leaf level={3} coparents={["cleave", "weapon_focus"]} prop="cleaving_sweep" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="cornugon_trip" />
				<Leaf level={3} coparents={["earth_child_style"]} prop="earth_child_topple" />
				<Leaf level={4} coparents={["greater_trip", "stunning_fist"]} prop="earth_child_binder" />
				<Leaf level={3} prop="furys_fall" />
				<Leaf level={4} prop="furys_snare" />
				<Leaf level={3} prop="greater_trip" />
				<Leaf level={4} coparents={["stunning_fist"]} prop="earth_child_binder" />
				<Leaf level={3} coparents={["precise_shot"]} prop="hammer_throw" />
				<Leaf level={4} prop="improved_hammer_throw" />
				<Leaf level={5} prop="master_hammer_throw" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="ki_throw" />
				<Leaf level={4} coparents={["improved_grapple"]} prop="binding_throw" />
				<Leaf level={4} prop="enhanced_ki_throw" />
				<Leaf level={4} coparents={["improved_bull_rush"]} prop="improved_ki_throw" />
				<Leaf level={4} coparents={["improved_bull_rush"]} prop="spinning_throw" />
				<Leaf level={3} prop="pummeling_bully" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="tangled_limbs" />
				<Leaf level={4} prop="titans_tangle" />
				<Leaf level={3} prop="tripping_staff" />
				<Leaf level={4} coparents={["weapon_specialization"]} prop="thunder_and_fang" />
				<Leaf level={4} prop="tripping_twirl" />
				<Leaf level={3} coparents={["improved_overrun", "vicious_stomp"]} prop="brute_style" />
				<Leaf level={4} prop="brute_stomp" />
				<Leaf level={5} prop="brute_assault" />
				<Leaf level={3} coparents={["power_attack"]} prop="felling_smash" />
				<Leaf level={3} coparents={["octopus_focus"]} prop="octopus_thrash" />
				<Leaf level={3} coparents={["improved_drag"]} prop="riptide_attack" />
				<Leaf level={2} prop="kobold_style" />
				<Leaf level={3} prop="kobold_groundling" />
				<Leaf level={4} prop="kobold_flood" />
				<Leaf level={2} coparents={["deceitful"]} prop="misdirection_tactics" />
				<Leaf level={3} prop="misdirection_redirection" />
				<Leaf level={4} prop="misdirection_attack" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="outslug_style" />
				<Leaf level={3} prop="outslug_weave" />
				<Leaf level={4} prop="outslug_sprint" />
				<Leaf level={2} coparents={["combat_reflexes", "improved_grapple"]} prop="snoutgrip" />
				<Leaf level={2} coparents={["perfect_style"]} prop="unblinking_flame_feint" />
				<Leaf level={3} coparents={["stunning_fist"]} prop="unblinking_flame_fist" />
				<Leaf level={2} coparents={["blind_fight"]} prop="moonlight_stalker" />
				<Leaf level={3} prop="moonlight_stalker_feint" />
				<Leaf level={4} prop="moonlight_stalker_master" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="swordplay_style" />
				<Leaf level={3} prop="swordplay_upset" />
				<Leaf level={4} prop="swordplay_deflection" />
				<Leaf level={2} coparents={["spring_attack"]} prop="whirlwind_attack" />
			</section>
			<section>
				<Leaf level={1} prop="combat_reflexes" />
				<Leaf level={2} coparents={["aldori_style"]} prop="aldori_style_aegis" />
				<Leaf level={3} prop="aldori_style_conquest" />
				<Leaf level={2} coparents={["combat_expertise"]} prop="archon_style" />
				<Leaf level={3} prop="archon_diversion" />
				<Leaf level={4} prop="archon_justice" />
				<Leaf level={2} coparents={["mobility"]} prop="combat_patrol" />
				<Leaf level={3} coparents={["vanguard_ward"]} prop="vanguard_hustle" />
				<Leaf level={2} coparents={["improved_unarmed_strike"]} prop="panther_style" />
				<Leaf level={3} prop="panther_claw" />
				<Leaf level={4} prop="panther_parry" />
				<Leaf level={2} coparents={["snake_sidewind"]} prop="snake_fang" />
				<Leaf level={2} coparents={["combat_expertise", "improved_grapple"]} prop="snoutgrip" />
				<Leaf level={2} coparents={["spellbreaker"]} prop="teleport_tactician" />
				<Leaf level={2} coparents={["improved_shield_bash"]} prop="upsetting_strike" />
				<Leaf level={3} prop="upsetting_vengeance" />
				<Leaf level={2} coparents={["improved_unarmed_strike"]} prop="vicious_stomp" primary />
				<Leaf level={3} coparents={["improved_overrun", "improved_trip"]} prop="brute_style" />
				<Leaf level={4} prop="brute_stomp" />
				<Leaf level={5} prop="brute_assault" />
				<Leaf level={2} prop="bodyguard" />
				<Leaf level={3} prop="vanguard_style" />
				<Leaf level={4} prop="vanguard_ward" />
				<Leaf level={5} prop="vanguard_hustle" />
				<Leaf level={2} coparents={["improved_unarmed_strike", "weapon_focus"]} prop="diabolic_style" />
				<Leaf level={3} coparents={["vital_strike"]} prop="diabolic_humiliation" />
				<Leaf level={4} prop="diabolic_judgement" />
				<Leaf level={2} coparents={["banishing_critical"]} prop="dimensional_awareness" />
				<Leaf level={3} prop="dimensional_disruption" />
				<Leaf level={2} coparents={["improved_unarmed_strike"]} prop="indomitable_mountain_style" />
				<Leaf level={3} prop="indomitable_mountain_peak" />
				<Leaf level={4} prop="indomitable_mountain_avalanche" />
				<Leaf level={2} coparents={["improved_disarm", "improved_unarmed_strike"]} prop="wrist_grab" />
			</section>
			<section>
				<Leaf level={1} prop="deceitful" />
				<Leaf level={2} coparents={["combat_expertise"]} prop="misdirection_tactics" />
				<Leaf level={3} prop="misdirection_redirection" />
				<Leaf level={4} prop="misdirection_attack" />
				<Leaf level={2} coparents={["greater_feint"]} prop="incite_paranoia" />
			</section>
			<section>
				<Leaf level={1} prop="dimensional_agility" />
				<Leaf level={2} prop="dimensional_assault" />
				<Leaf level={3} prop="dimensional_dervish" />
				<Leaf level={4} prop="dimensional_maneuvers" />
				<Leaf level={4} prop="dimensional_savant" />
			</section>
			<section>
				<Leaf level={1} prop="disruptive" />
				<Leaf level={2} coparents={["arcane_strike"]} prop="banishing_critical" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="dimensional_awareness" />
				<Leaf level={4} prop="dimensional_disruption" />
				<Leaf level={2} prop="spellbreaker" />
				<Leaf level={3} coparents={["missile_shield"]} prop="ray_shield" />
				<Leaf level={4} prop="greater_ray_shield" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="teleport_tactician" />
			</section>
			<section>
				<Leaf level={1} prop="dodge" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="close_quarters_thrower" />
				<Leaf level={3} coparents={["point_blank_master"]} prop="false_opening" />
				<Leaf level={2} coparents={["improved_unarmed_strike"]} prop="crane_style" />
				<Leaf level={3} prop="crane_wing" />
				<Leaf level={4} prop="crane_riposte" />
				<Leaf level={2} prop="mobility" primary />
				<Leaf level={3} prop="anticipate_dodge" />
				<Leaf level={4} prop="counter_reflexes" />
				<Leaf level={3} prop="azata_style" />
				<Leaf level={4} prop="azata_mischief" />
				<Leaf level={5} prop="azata_sprint" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="charging_stag_style" />
				<Leaf level={4} prop="stag_horns" />
				<Leaf level={5} prop="stag_submission" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="combat_patrol" />
				<Leaf level={4} coparents={["vanguard_ward"]} prop="vanguard_hustle" />
				<Leaf level={3} coparents={["nimble_moves"]} prop="gliding_steps" />
				<Leaf level={3} coparents={["jabbing_style"]} prop="jabbing_dancer" />
				<Leaf level={4} coparents={["power_attack"]} prop="jabbing_master" />
				<Leaf level={3} coparents={["improved_feint"]} prop="passing_trick" />
				<Leaf level={3} prop="shot_on_the_run" />
				<Leaf level={4} prop="parting_shot" />
				<Leaf level={4} coparents={["spring_attack"]} prop="spring_heeled_style" />
				<Leaf level={4} prop="bulls_eye" />
				<Leaf level={3} prop="sidestep" />
				<Leaf level={4} prop="improved_sidestep" />
				<Leaf level={4} prop="juke" />
				<Leaf level={3} prop="spring_attack" primary />
				<Leaf level={4} prop="circling_mongoose" />
				<Leaf level={4} coparents={["nimble_moves"]} prop="improved_spring_attack" />
				<Leaf level={5} prop="greater_spring_attack" />
				<Leaf level={4} prop="slaying_sprint" />
				<Leaf level={4} prop="spring_heeled_style" />
				<Leaf level={4} coparents={["combat_expertise"]} prop="whirlwind_attack" />
				<Leaf level={3} prop="underfoot" />
				<Leaf level={4} prop="tangle_feet" />
				<Leaf level={3} coparents={["unfolding_wind_strike"]} prop="unfolding_wind_rush" />
				<Leaf level={3} prop="canny_tumble" />
				<Leaf level={4} prop="confounding_tumble_deed" />
				<Leaf level={3} coparents={["disengaging_feint"]} prop="disengaging_shot" />
				<Leaf level={3} coparents={["improved_initiative"]} prop="heroic_interposition" />
				<Leaf level={2} coparents={["improved_unarmed_strike"]} prop="octopus_style" />
				<Leaf level={3} prop="octopus_focus" primary />
				<Leaf level={4} coparents={["improved_trip"]} prop="octopus_thrash" />
			</section>
			<section>
				<Leaf level={1} prop="endurance" />
				<Leaf level={2} prop="diehard" />
				<Leaf level={3} prop="deathless_initiate" />
				<Leaf level={4} prop="deathless_master" />
				<Leaf level={5} prop="deathless_zealot" />
				<Leaf level={3} prop="stalwart" />
				<Leaf level={4} prop="improved_stalwart" />
			</section>
			<section>
				<Leaf level={1} prop="exotic_weapon_proficiency" />
				<Leaf level={2} coparents={["weapon_finesse", "weapon_focus"]} prop="aldori_dueling_disciple" />
				<Leaf level={3} prop="duelist_of_the_roaring_falls" />
				<Leaf level={3} prop="duelist_of_the_shrouded_lake" />
				<Leaf level={4} coparentsNolink={["duelist_of_the_roaring_falls"]} prop="falling_water_gambit" />
				<Leaf level={2} coparents={["quick_draw", "weapon_finesse", "weapon_focus"]} prop="aldori_dueling_mastery" />
				<Leaf level={2} coparents={["alertness", "weapon_finesse", "weapon_focus"]} prop="aldori_style" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="aldori_style_aegis" />
				<Leaf level={4} prop="aldori_style_conquest" />
				<Leaf level={2} coparents={["alertness", "weapon_focus"]} prop="garens_discipline" />
				<Leaf level={2} prop="kyton_style" />
				<Leaf level={3} prop="kyton_shield" />
				<Leaf level={4} prop="kyton_cut" />
				<Leaf level={2} coparents={["shield_proficiency", "weapon_focus"]} prop="taldan_duelist" />
				<Leaf level={2} prop="net_adept" />
				<Leaf level={3} coparents={["two_weapon_fighting"]} prop="net_and_trident" />
				<Leaf level={3} prop="net_maneuvering" />
				<Leaf level={4} prop="net_trickery" />
				<Leaf level={2} prop="wyvern_fury_style" />
				<Leaf level={3} prop="wyvern_sting" />
				<Leaf level={4} prop="wyvern_wing" />
			</section>
			<section>
				<Leaf level={1} prop="improved_unarmed_strike" />
				<Leaf level={2} prop="asura_style" />
				<Leaf level={3} prop="asura_sight" />
				<Leaf level={4} prop="asura_spellrend" />
				<Leaf level={2} prop="barracuda_style" />
				<Leaf level={3} prop="barracuda_slam" />
				<Leaf level={4} prop="barracuda_dash" />
				<Leaf level={2} prop="blood_frenzy_style" />
				<Leaf level={3} coparents={["power_attack"]} prop="blood_frenzy_strike" />
				<Leaf level={4} prop="blood_frenzy_assault" />
				<Leaf level={2} coparents={["mobility"]} prop="charging_stag_style" />
				<Leaf level={3} prop="stag_horns" />
				<Leaf level={4} prop="stag_submission" />
				<Leaf level={2} coparents={["dodge"]} prop="crane_style" />
				<Leaf level={3} prop="crane_wing" />
				<Leaf level={4} prop="crane_riposte" />
				<Leaf level={2} coparents={["improved_drag", "improved_reposition"]} prop="crashing_wave_style" />
				<Leaf level={3} prop="crashing_wave_buffet" />
				<Leaf level={4} prop="crashing_wave_fist" />
				<Leaf level={2} coparents={["improved_bull_rush"]} prop="crushing_impact" />
				<Leaf level={3} prop="smashing_impact" />
				<Leaf level={2} prop="deadhand_style" />
				<Leaf level={3} prop="deadhand_initiate" />
				<Leaf level={4} prop="deadhand_master" />
				<Leaf level={2} prop="deflect_arrows" />
				<Leaf level={3} prop="snatch_arrows" />
				<Leaf level={4} prop="throw_back_arrows" />
				<Leaf level={2} prop="dragon_style" />
				<Leaf level={3} coparents={["stunning_fist"]} prop="dragon_roar" />
				<Leaf level={3} coparents={["stunning_fist"]} prop="dragon_ferocity" />
				<Leaf level={2} prop="dragonfly_style" />
				<Leaf level={3} prop="dragonfly_wings" />
				<Leaf level={4} prop="dragonflight_flight" />
				<Leaf level={2} prop="earth_child_style" primary />
				<Leaf level={3} coparents={["improved_trip"]} prop="earth_child_topple" />
				<Leaf level={4} coparents={["greater_trip", "stunning_fist"]} prop="earth_child_binder" />
				<Leaf level={2} prop="elemental_fist" />
				<Leaf level={3} prop="efreeti_style" />
				<Leaf level={4} prop="efreeti_stance" />
				<Leaf level={5} prop="efreeti_touch" />
				<Leaf level={3} prop="electric_eel_style" />
				<Leaf level={4} prop="electric_eel_shock" />
				<Leaf level={5} prop="electric_eel_conduit" />
				<Leaf level={3} prop="marid_style" />
				<Leaf level={4} prop="marid_spirit" />
				<Leaf level={5} prop="marid_coldsnap" />
				<Leaf level={3} prop="shaitan_style" />
				<Leaf level={4} prop="shaitan_skin" />
				<Leaf level={5} prop="shaitan_earthblast" />
				<Leaf level={3} prop="djinni_style" />
				<Leaf level={4} prop="djinni_spirit" />
				<Leaf level={5} prop="djinni_spin" />
				<Leaf level={2} prop="improved_grapple" primary />
				<Leaf level={3} coparents={["ki_throw"]} prop="binding_throw" />
				<Leaf level={3} prop="grabbing_style" />
				<Leaf level={4} prop="grabbing_drag" />
				<Leaf level={5} prop="grabbing_master" />
				<Leaf level={3} prop="greater_grapple" />
				<Leaf level={4} prop="kudzu_grappler" />
				<Leaf level={5} prop="kudzu_invasion" />
				<Leaf level={6} prop="kudzu_takeover" />
				<Leaf level={4} prop="pinning_knockout" />
				<Leaf level={4} prop="pinning_rend" />
				<Leaf level={4} prop="rapid_grappler" />
				<Leaf level={4} prop="sleeper_hold" />
				<Leaf level={4} coparents={["bonebreaker"]} prop="neckbreaker" />
				<Leaf level={3} prop="hamatula_strike" />
				<Leaf level={4} prop="hamatula_grasp" />
				<Leaf level={3} prop="kraken_style" />
				<Leaf level={4} prop="kraken_throttle" />
				<Leaf level={4} prop="kraken_wrack" />
				<Leaf level={3} coparents={["quick_draw"]} prop="piercing_grapple" />
				<Leaf level={3} coparents={["snapping_turtle_style"]} prop="snapping_turtle_clutch" />
				<Leaf level={4} prop="snapping_turtle_shell" />
				<Leaf level={3} coparents={["combat_expertise", "combat_reflexes"]} prop="snoutgrip" />
				<Leaf level={3} prop="tatzlwyrm_claw_style" />
				<Leaf level={4} prop="tatzlwyrm_grappler" />
				<Leaf level={5} prop="tatzlwyrm_rake" />
				<Leaf level={3} coparents={["power_attack"]} prop="unfair_grip" />
				<Leaf level={3} coparents={["jawbreaker"]} prop="bonebreaker" />
				<Leaf level={4} prop="neckbreaker" />
				<Leaf level={3} prop="bull_catcher_style" />
				<Leaf level={4} prop="bull_catcher_toss" />
				<Leaf level={5} prop="bull_catcher_wrangler" />
				<Leaf level={3} coparents={["improved_dirty_trick"]} prop="dirty_grapple" />
				<Leaf level={3} prop="savage_slam" />
				<Leaf level={4} coparents={["dazzling_display"]} prop="dramatic_slam" />
				<Leaf level={4} prop="overhead_flip" />
				<Leaf level={4} prop="savage_leap" />
				<Leaf level={3} coparents={["stunning_fist"]} prop="stunning_pin" />
				<Leaf level={2} prop="jabbing_style" />
				<Leaf level={3} coparents={["mobility"]} prop="jabbing_dancer" />
				<Leaf level={4} coparents={["power_attack"]} prop="jabbing_master" />
				<Leaf level={2} prop="janni_style" />
				<Leaf level={3} prop="janni_tempest" />
				<Leaf level={4} prop="janni_rush" />
				<Leaf level={2} coparents={["improved_trip"]} prop="ki_throw" />
				<Leaf level={3} prop="binding_throw" />
				<Leaf level={3} prop="enhanced_ki_throw" />
				<Leaf level={3} coparents={["improved_bull_rush"]} prop="improved_ki_throw" />
				<Leaf level={3} coparents={["improved_bull_rush"]} prop="spinning_throw" />
				<Leaf level={2} prop="kirin_style" />
				<Leaf level={3} prop="kirin_strike" />
				<Leaf level={4} prop="kirin_path" />
				<Leaf level={2} prop="linnorm_style" />
				<Leaf level={3} prop="linnorm_vengeance" />
				<Leaf level={4} prop="linnorm_wrath" />
				<Leaf level={2} coparents={["combat_reflexes"]} prop="panther_style" />
				<Leaf level={3} prop="panther_claw" />
				<Leaf level={4} prop="panther_parry" />
				<Leaf level={2} prop="psychovore_style" />
				<Leaf level={3} prop="psychovore_strike" />
				<Leaf level={4} prop="psychovore_master" />
				<Leaf level={2} prop="shark_style" />
				<Leaf level={3} prop="shark_tear" />
				<Leaf level={4} prop="shark_leap" />
				<Leaf level={2} prop="snake_style" />
				<Leaf level={3} prop="snake_sidewind" />
				<Leaf level={4} coparents={["combat_reflexes"]} prop="snake_fang" />
				<Leaf level={2} prop="snapping_turtle_style" />
				<Leaf level={3} prop="snapping_turtle_clutch" />
				<Leaf level={4} prop="snapping_turtle_shell" />
				<Leaf level={2} prop="tiger_style" />
				<Leaf level={3} prop="tiger_claws" />
				<Leaf level={4} coparents={["power_attack"]} prop="tiger_pounce" />
				<Leaf level={2} coparents={["combat_reflexes"]} prop="vicious_stomp" />
				<Leaf level={3} coparents={["improved_overrun", "improved_trip"]} prop="brute_style" />
				<Leaf level={4} prop="brute_stomp" />
				<Leaf level={5} prop="brute_assault" />
				<Leaf level={2} prop="boar_style" />
				<Leaf level={3} prop="boar_ferocity" />
				<Leaf level={4} prop="boar_shred" />
				<Leaf level={2} coparents={["cleave"]} prop="cerberus_style" />
				<Leaf level={3} prop="cerberus_snare" />
				<Leaf level={4} coparents={["vital_strike"]} prop="cerberus_crush" />
				<Leaf level={2} coparents={["combat_reflexes", "weapon_focus"]} prop="diabolic_style" />
				<Leaf level={3} coparents={["vital_strike"]} prop="diabolic_humiliation" />
				<Leaf level={4} prop="diabolic_judgement" />
				<Leaf level={2} prop="dolphin_style" />
				<Leaf level={3} prop="dolphin_dart" />
				<Leaf level={4} prop="dolphin_circle" />
				<Leaf level={2} coparents={["improved_disarm"]} prop="follow_up_strike" />
				<Leaf level={2} coparents={["combat_reflexes"]} prop="indomitable_mountain_style" />
				<Leaf level={3} prop="indomitable_mountain_peak" />
				<Leaf level={4} prop="indomitable_mountain_avalanche" />
				<Leaf level={2} coparents={["improved_bull_rush"]} prop="hurricane_punch" />
				<Leaf level={2} prop="monkey_style" />
				<Leaf level={3} prop="monkey_moves" />
				<Leaf level={4} coparents={["stunning_fist"]} prop="monkey_shine" />
				<Leaf level={2} prop="nightmare_fist" />
				<Leaf level={3} prop="nightmare_weaver" />
				<Leaf level={4} coparents={["stunning_fist"]} prop="nightmare_striker" />
				<Leaf level={2} coparents={["dodge"]} prop="octopus_style" />
				<Leaf level={3} prop="octopus_focus" />
				<Leaf level={4} coparents={["improved_trip"]} prop="octopus_thrash" />
				<Leaf level={2} prop="scorpion_style" />
				<Leaf level={3} prop="gorgons_fist" />
				<Leaf level={4} prop="medusas_wrath" />
				<Leaf level={5} prop="cockatrice_strike" />
				<Leaf level={2} coparents={["improved_bull_rush"]} prop="street_style" />
				<Leaf level={3} prop="street_sweep" />
				<Leaf level={4} prop="street_carnage" />
				<Leaf level={2} prop="stunning_fist" primary />
				<Leaf level={3} prop="dragon_roar" />
				<Leaf level={3} coparents={["greater_trip"]} prop="earth_child_binder" />
				<Leaf level={3} prop="jawbreaker" />
				<Leaf level={4} prop="bonebreaker" />
				<Leaf level={5} prop="neckbreaker" />
				<Leaf level={3} prop="maddening_style" />
				<Leaf level={4} prop="maddening_strike" />
				<Leaf level={5} prop="maddening_obliteration" />
				<Leaf level={3} prop="mantis_style" />
				<Leaf level={4} prop="mantis_wisdom" />
				<Leaf level={5} prop="mantis_torment" />
				<Leaf level={3} coparents={["unblinking_flame_feint"]} prop="unblinking_flame_fist" />
				<Leaf level={3} prop="dragon_ferocity" />
				<Leaf level={3} prop="monkey_shine" />
				<Leaf level={3} prop="nightmare_striker" />
				<Leaf level={3} prop="stunning_pin" />
				<Leaf level={2} prop="wolf_style" />
				<Leaf level={3} prop="wolf_trip" />
				<Leaf level={4} prop="wolf_savage" />
				<Leaf level={2} coparents={["combat_reflexes", "improved_disarm"]} prop="wrist_grab" />
			</section>
			<section>
				<Leaf level={1} prop="perfect_style" />
				<Leaf level={2} coparents={["combat_expertise"]} prop="unblinking_flame_feint" />
				<Leaf level={3} coparents={["stunning_fist"]} prop="unblinking_flame_fist" />
				<Leaf level={2} coparents={["quick_draw"]} prop="unfolding_wind_strike" />
				<Leaf level={3} coparents={["mobility"]} prop="unfolding_wind_rush" />
			</section>
			<section>
				<Leaf level={1} prop="point_blank_shot" />
				<Leaf level={2} prop="far_shot" />
				<Leaf level={3} coparents={["precise_shot"]} prop="acute_shot" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="ranged_disable" />
				<Leaf level={3} coparents={["precise_shot"]} prop="suppressive_fire" />
				<Leaf level={2} prop="lantern_style" />
				<Leaf level={3} coparents={["precise_shot"]} prop="lantern_light" />
				<Leaf level={4} prop="lantern_glare" />
				<Leaf level={2} prop="precise_shot" primary />
				<Leaf level={3} prop="acute_shot" />
				<Leaf level={3} coparents={["throw_anything"]} prop="arcing_lob" />
				<Leaf level={3} coparents={["throw_anything"]} prop="concentrated_splash" />
				<Leaf level={3} coparents={["improved_trip"]} prop="hammer_throw" />
				<Leaf level={4} prop="improved_hammer_throw" />
				<Leaf level={5} prop="master_hammer_throw" />
				<Leaf level={3} prop="improved_precise_shot" primary />
				<Leaf level={4} coparents={["blind_fight"]} prop="circuitous_shot" />
				<Leaf level={4} prop="pinpoint_targeting" />
				<Leaf level={3} prop="lantern_light" />
				<Leaf level={4} prop="lantern_glare" />
				<Leaf level={3} coparents={["rapid_shot", "weapon_focus"]} prop="overwatch_style" />
				<Leaf level={4} prop="overwatch_tactician" />
				<Leaf level={5} prop="overwatch_vortex" />
				<Leaf level={3} coparents={["weapon_focus", "improved_called_shot"]} prop="signature_strike_style" />
				<Leaf level={4} prop="signature_strike_taunt" />
				<Leaf level={5} prop="signature_strike_triumph" />
				<Leaf level={3} coparents={["throw_anything"]} prop="thuvian_grenadier" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="warning_shot" />
				<Leaf level={3} prop="suppressive_fire" />
				<Leaf level={2} prop="rapid_shot" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="overwatch_style" />
				<Leaf level={4} prop="overwatch_tactician" />
				<Leaf level={5} prop="overwatch_vortex" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="snap_shot" />
				<Leaf level={4} prop="improved_snap_shot" />
				<Leaf level={5} prop="greater_snap_shot" />
				<Leaf level={4} coparents={["two_weapon_fighting"]} prop="sword_and_pistol" />
				<Leaf level={3} prop="stabbing_shot" />
				<Leaf level={4} coparents={["empty_quiver_style"]} prop="empty_quiver_flexibility" />
				<Leaf level={5} prop="empty_quiver_flurry" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="startoss_style" />
				<Leaf level={3} prop="startoss_comet" />
				<Leaf level={4} prop="startoss_shower" />
			</section>
			<section>
				<Leaf level={1} prop="power_attack" />
				<Leaf level={2} coparents={["blood_frenzy_style"]} prop="blood_frenzy_strike" />
				<Leaf level={3} prop="blood_frenzy_assault" />
				<Leaf level={2} prop="cleave" primary />
				<Leaf level={3} coparents={["vital_strike"]} prop="all_consuming_swing" />
				<Leaf level={3} prop="cleaving_finish" />
				<Leaf level={4} coparents={["great_cleave"]} prop="improved_cleaving_finish" />
				<Leaf level={3} coparents={["improved_trip", "weapon_focus"]} prop="cleaving_sweep" />
				<Leaf level={3} prop="goblin_cleaver" />
				<Leaf level={4} prop="orc_hewer" />
				<Leaf level={5} prop="giant_killer" />
				<Leaf level={3} prop="great_cleave" />
				<Leaf level={4} coparents={["demonic_momentum"]} prop="demonic_slaughter" />
				<Leaf level={4} prop="improved_cleaving_finish" />
				<Leaf level={4} coparents={["surprise_follow_through"]} prop="improved_surprise_follow_through" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="cerberus_style" />
				<Leaf level={4} prop="cerberus_snare" />
				<Leaf level={5} coparents={["vital_strike"]} prop="cerberus_crush" />
				<Leaf level={3} prop="surprise_follow_through" />
				<Leaf level={4} prop="improved_surprise_follow_through" />
				<Leaf level={2} prop="demonic_style" />
				<Leaf level={3} coparents={["improved_bull_rush"]} prop="demonic_momentum" />
				<Leaf level={4} prop="demonic_slaughter" />
				<Leaf level={2} prop="improved_bull_rush" primary />
				<Leaf level={3} prop="awesome_blow" />
				<Leaf level={4} prop="awesome_charge" />
				<Leaf level={4} prop="greater_awesome_blow" />
				<Leaf level={4} prop="improved_awesome_blow" />
				<Leaf level={3} coparents={["throw_anything"]} prop="awesome_throw" />
				<Leaf level={4} coparents={["greater_bull_rush"]} prop="improved_awesome_throw" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="crushing_impact" />
				<Leaf level={4} prop="smashing_impact" />
				<Leaf level={3} prop="demonic_momentum" />
				<Leaf level={4} prop="demonic_slaughter" />
				<Leaf level={3} prop="greater_bull_rush" />
				<Leaf level={4} prop="improved_awesome_throw" />
				<Leaf level={3} coparents={["ki_throw"]} prop="improved_ki_throw" />
				<Leaf level={3} prop="merciless_rush" />
				<Leaf level={4} prop="squash_flat" />
				<Leaf level={3} coparents={["ki_throw"]} prop="spinning_throw" />
				<Leaf level={3} prop="forceful_charge" />
				<Leaf level={4} prop="improved_forceful_charge" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="hurricane_punch" />
				<Leaf level={3} coparents={["improved_unarmed_strike"]} prop="street_style" />
				<Leaf level={4} prop="street_sweep" />
				<Leaf level={5} prop="street_carnage" />
				<Leaf level={2} prop="improved_drag" primary />
				<Leaf level={3} coparents={["improved_reposition", "improved_unarmed_strike"]} prop="crashing_wave_style" />
				<Leaf level={4} prop="crashing_wave_buffet" />
				<Leaf level={5} prop="crashing_wave_fist" />
				<Leaf level={3} coparents={["improved_trip"]} prop="riptide_attack" />
				<Leaf level={2} prop="improved_overrun" primary />
				<Leaf level={3} coparents={["improved_trip", "vicious_stomp"]} prop="brute_style" />
				<Leaf level={4} prop="brute_stomp" />
				<Leaf level={5} prop="brute_assault" />
				<Leaf level={3} prop="bulette_charge_style" />
				<Leaf level={4} prop="bulette_leap" />
				<Leaf level={5} prop="bulette_rampage" />
				<Leaf level={2} prop="improved_sunder" />
				<Leaf level={3} prop="gate_breaker" />
				<Leaf level={4} prop="relic_breaker" />
				<Leaf level={3} coparents={["weapon_focus"]} prop="smashing_style" />
				<Leaf level={4} prop="smashing_crush" />
				<Leaf level={5} prop="smashing_dent" />
				<Leaf level={3} prop="sabotaging_sunder" />
				<Leaf level={4} prop="improved_sabotaging_sunder" />
				<Leaf level={2} coparents={["jabbing_dancer"]} prop="jabbing_master" />
				<Leaf level={2} coparents={["tiger_claws"]} prop="tiger_pounce" />
				<Leaf level={2} prop="uncivilized_tactics" />
				<Leaf level={3} prop="improved_uncivilized_tactics" />
				<Leaf level={4} prop="greater_uncivilized_tactics" />
				<Leaf level={2} coparents={["improved_grapple"]} prop="unfair_grip" />
				<Leaf level={2} coparents={["improved_trip"]} prop="felling_smash" />
				<Leaf level={2} coparents={["improved_disarm"]} prop="numbing_blow" />
			</section>
			<section>
				<Leaf level={1} prop="quick_draw" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "weapon_finesse", "weapon_focus"]} prop="aldori_dueling_mastery" />
				<Leaf level={2} coparents={["improved_grapple"]} prop="piercing_grapple" />
				<Leaf level={2} coparents={["alertness", "improved_initiative", "lightning_reflexes"]} prop="ready_for_anything" />
				<Leaf level={3} prop="cunning_intuition" />
				<Leaf level={2} coparents={["slipslinger_grenadier"]} prop="slipslinger_bombardment" />
				<Leaf level={2} prop="twin_fang_style" />
				<Leaf level={3} coparents={["two_weapon_fighting"]} prop="twin_fang_strike" />
				<Leaf level={4} prop="twin_fang_lunge" />
				<Leaf level={2} coparents={["perfect_style"]} prop="unfolding_wind_strike" />
				<Leaf level={3} coparents={["mobility"]} prop="unfolding_wind_rush" />
			</section>
			<section>
				<Leaf level={1} prop="shield_proficiency" />
				<Leaf level={2} prop="improved_shield_bash" />
				<Leaf level={3} prop="shield_slam" />
				<Leaf level={4} prop="shield_master" />
				<Leaf level={5} prop="bashing_finish" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="upsetting_strike" />
				<Leaf level={4} prop="upsetting_vengeance" />
				<Leaf level={3} coparents={["shield_focus"]} prop="stumbling_bash" />
				<Leaf level={4} prop="toppling_bash" />
				<Leaf level={2} prop="shield_focus" />
				<Leaf level={3} prop="greater_shield_focus" />
				<Leaf level={4} coparents={["shield_specialization"]} prop="greater_shield_specialization" />
				<Leaf level={3} prop="missile_shield" />
				<Leaf level={4} coparents={["spellbreaker"]} prop="ray_shield" />
				<Leaf level={5} prop="greater_ray_shield" />
				<Leaf level={3} coparents={["tower_shield_proficiency"]} prop="mobile_bulwark_style" />
				<Leaf level={4} prop="mobile_fortress" />
				<Leaf level={5} prop="mobile_stronghold" />
				<Leaf level={3} prop="shield_material_expertise" />
				<Leaf level={4} prop="shield_material_mastery" />
				<Leaf level={3} prop="shield_specialization" />
				<Leaf level={4} prop="greater_shield_specialization" />
				<Leaf level={3} prop="sisterhood_style" />
				<Leaf level={4} coparents={["shield_wall"]} prop="sisterhood_rampart" />
				<Leaf level={5} prop="sisterhood_dedication" />
				<Leaf level={3} coparents={["tower_shield_proficiency"]} prop="tower_shield_specialist" />
				<Leaf level={3} prop="stumbling_bash" />
				<Leaf level={4} prop="toppling_bash" />
				<Leaf level={2} prop="shield_wall" />
				<Leaf level={3} prop="sisterhood_rampart" />
				<Leaf level={4} prop="sisterhood_dedication" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "weapon_focus"]} prop="taldan_duelist" />
				<Leaf level={2} prop="tower_shield_proficiency" />
				<Leaf level={3} prop="mobile_bulwark_style" />
				<Leaf level={4} prop="mobile_fortress" />
				<Leaf level={5} prop="mobile_stronghold" />
				<Leaf level={3} prop="tower_shield_specialist" />
			</section>
			<section>
				<Leaf level={1} prop="skill_focus" />
				<Leaf level={2} prop="eldritch_heritage" />
				<Leaf level={3} prop="improved_eldritch_heritage" />
				<Leaf level={4} prop="greater_eldritch_heritage" />
				<Leaf level={2} prop="owl_style" />
				<Leaf level={3} prop="owl_swoop" />
				<Leaf level={4} prop="owl_dive" />
				<Leaf level={2} prop="powerful_wings" />
				<Leaf level={3} prop="snatch_and_drop" />
				<Leaf level={4} coparents={["throw_anything"]} prop="fling" />
			</section>
			<section>
				<Leaf level={1} prop="step_up" />
				<Leaf level={2} prop="skyseeker_style" />
				<Leaf level={3} prop="skyseeker_thrash" />
				<Leaf level={4} prop="skyseeker_impact" />
				<Leaf level={2} prop="following_step" />
				<Leaf level={3} prop="step_up_and_strike" />
				<Leaf level={4} prop="heavens_step" />
			</section>
			<section>
				<Leaf level={1} prop="throw_anything" />
				<Leaf level={2} coparents={["precise_shot"]} prop="arcing_lob" />
				<Leaf level={2} coparents={["improved_bull_rush"]} prop="awesome_throw" />
				<Leaf level={3} coparents={["greater_bull_rush"]} prop="improved_awesome_throw" />
				<Leaf level={2} coparents={["precise_shot"]} prop="concentrated_splash" />
				<Leaf level={2} coparents={["catch_off_guard"]} prop="shikigami_style" />
				<Leaf level={3} prop="shikigami_mimicry" />
				<Leaf level={4} prop="shikigami_manipulation" />
				<Leaf level={2} coparents={["slipslinger_style"]} prop="slipslinger_grenadier" />
				<Leaf level={3} coparents={["quick_draw"]} prop="slipslinger_bombardment" />
				<Leaf level={2} coparents={["precise_shot"]} prop="thuvian_grenadier" />
				<Leaf level={2} coparents={["snatch_and_drop"]} prop="fling" />
			</section>
			<section>
				<Leaf level={1} prop="two_weapon_fighting" />
				<Leaf level={2} prop="improved_two_weapon_fighting" />
				<Leaf level={3} coparents={["shielded_staff_style"]} prop="shielded_staff_master" />
				<Leaf level={3} coparents={["twin_thunders"]} prop="twin_thunders_flurry" />
				<Leaf level={4} prop="twin_thunders_master" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="shielded_staff_style" />
				<Leaf level={3} prop="shielded_staff_ambush" />
				<Leaf level={3} prop="shielded_staff_master" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="spear_dancing_style" />
				<Leaf level={3} coparents={["weapon_finesse"]} prop="spear_dancing_spiral" />
				<Leaf level={4} prop="spear_dancing_reach" />
				<Leaf level={2} coparents={["twin_fang_style"]} prop="twin_fang_strike" />
				<Leaf level={3} prop="twin_fang_lunge" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="twin_thunders" />
				<Leaf level={3} prop="twin_thunders_flurry" />
				<Leaf level={4} prop="twin_thunders_master" />
				<Leaf level={2} coparents={["slashing_grace"]} prop="two_weapon_grace" />
				<Leaf level={2} coparents={["net_adept"]} prop="net_and_trident" />
				<Leaf level={2} coparents={["snap_shot"]} prop="sword_and_pistol" />
			</section>
			<section>
				<Leaf level={1} prop="vital_strike" />
				<Leaf level={2} coparents={["cleave"]} prop="all_consuming_swing" />
				<Leaf level={2} coparents={["improved_dirty_trick", "weapon_focus"]} prop="cloak_and_dagger_style" />
				<Leaf level={3} prop="cloak_and_dagger_subterfuge" />
				<Leaf level={4} prop="cloak_and_dagger_tactics" />
				<Leaf level={2} coparents={["cerberus_snare"]} prop="cerberus_crush" />
				<Leaf level={2} coparents={["diabolic_style"]} prop="diabolic_humiliation" />
				<Leaf level={3} prop="diabolic_judgement" />
			</section>
			<section>
				<Leaf level={1} prop="weapon_finesse" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "weapon_focus"]} prop="aldori_dueling_disciple" />
				<Leaf level={3} prop="duelist_of_the_roaring_falls" />
				<Leaf level={3} prop="duelist_of_the_shrouded_lake" />
				<Leaf level={4} coparentsNolink={["duelist_of_the_roaring_falls"]} prop="falling_water_gambit" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "quick_draw", "weapon_focus"]} prop="aldori_dueling_mastery" />
				<Leaf level={2} coparents={["alertness", "exotic_weapon_proficiency", "weapon_focus"]} prop="aldori_style" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="aldori_style_aegis" />
				<Leaf level={4} prop="aldori_style_conquest" />
				<Leaf level={2} coparents={["elven_battle_training"]} prop="elven_battle_style" />
				<Leaf level={3} prop="elven_battle_focus" />
				<Leaf level={4} prop="elven_battle_torrent" />
				<Leaf level={2} coparents={["weapon_focus"]} prop="slashing_grace" />
				<Leaf level={3} coparents={["two_weapon_fighting"]} prop="two_weapon_grace" />
				<Leaf level={2} coparents={["spear_dancing_style"]} prop="spear_dancing_spiral" />
				<Leaf level={3} prop="spear_dancing_reach" />
			</section>
			<section>
				<Leaf level={1} prop="weapon_focus" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "weapon_finesse"]} prop="aldori_dueling_disciple" />
				<Leaf level={3} prop="duelist_of_the_roaring_falls" />
				<Leaf level={3} prop="duelist_of_the_shrouded_lake" />
				<Leaf level={4} coparentsNolink={["duelist_of_the_roaring_falls"]} prop="falling_water_gambit" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "quick_draw", "weapon_finesse"]} prop="aldori_dueling_mastery" />
				<Leaf level={2} coparents={["alertness", "exotic_weapon_proficiency", "weapon_finesse"]} prop="aldori_style" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="aldori_style_aegis" />
				<Leaf level={4} prop="aldori_style_conquest" />
				<Leaf level={2} prop="ascetic_style" />
				<Leaf level={3} prop="ascetic_form" />
				<Leaf level={4} prop="ascetic_strike" />
				<Leaf level={2} coparents={["cleave", "improved_trip"]} prop="cleaving_sweep" />
				<Leaf level={2} coparents={["improved_dirty_trick", "vital_strike"]} prop="cloak_and_dagger_style" />
				<Leaf level={3} prop="cloak_and_dagger_subterfuge" />
				<Leaf level={4} prop="cloak_and_dagger_tactics" />
				<Leaf level={2} coparents={["dodge"]} prop="close_quarters_thrower" />
				<Leaf level={3} coparents={["point_blank_master"]} prop="false_opening" />
				<Leaf level={2} coparents={["improved_trip"]} prop="cornugon_trip" />
				<Leaf level={2} prop="dazzling_display" />
				<Leaf level={3} coparents={["savage_slam"]} prop="dramatic_slam" />
				<Leaf level={3} prop="performing_combatant" />
				<Leaf level={4} prop="master_combat_performer" />
				<Leaf level={3} prop="shatter_defenses" />
				<Leaf level={4} coparents={["greater_weapon_focus"]} prop="deadly_stroke" />
				<Leaf level={2} prop="empty_quiver_style" />
				<Leaf level={3} coparents={["stabbing_shot"]} prop="empty_quiver_flexibility" />
				<Leaf level={4} prop="empty_quiver_flurry" />
				<Leaf level={2} coparents={["alertness", "exotic_weapon_proficiency"]} prop="garens_discipline" />
				<Leaf level={2} prop="greater_weapon_focus" />
				<Leaf level={3} prop="deadly_stroke" />
				<Leaf level={3} coparents={["weapon_specialization"]} prop="greater_weapon_specialization" />
				<Leaf level={2} coparents={["combat_expertise"]} prop="outslug_style" />
				<Leaf level={3} prop="outslug_weave" />
				<Leaf level={4} prop="outslug_sprint" />
				<Leaf level={2} coparents={["precise_shot", "rapid_shot"]} prop="overwatch_style" />
				<Leaf level={3} prop="overwatch_tactician" />
				<Leaf level={4} prop="overwatch_vortex" />
				<Leaf level={2} coparents={["far_shot"]} prop="ranged_disable" />
				<Leaf level={2} prop="shield_gauntlet_style" />
				<Leaf level={3} prop="shielded_gauntlet_attack" />
				<Leaf level={4} prop="shielded_gauntlet_master" />
				<Leaf level={2} coparents={["two_weapon_fighting"]} prop="shielded_staff_style" />
				<Leaf level={3} prop="shielded_staff_ambush" />
				<Leaf level={3} coparents={["improved_two_weapon_fighting"]} prop="shielded_staff_master" />
				<Leaf level={2} coparents={["precise_shot", "improved_called_shot"]} prop="signature_strike_style" />
				<Leaf level={3} prop="signature_strike_taunt" />
				<Leaf level={4} prop="signature_strike_triumph" />
				<Leaf level={2} coparents={["weapon_finesse"]} prop="slashing_grace" />
				<Leaf level={3} coparents={["two_weapon_fighting"]} prop="two_weapon_grace" />
				<Leaf level={2} prop="slipslinger_style" />
				<Leaf level={3} coparents={["throw_anything"]} prop="slipslinger_grenadier" />
				<Leaf level={4} coparents={["quick_draw"]} prop="slipslinger_bombardment" />
				<Leaf level={2} coparents={["improved_sunder"]} prop="smashing_style" />
				<Leaf level={3} prop="smashing_crush" />
				<Leaf level={4} prop="smashing_dent" />
				<Leaf level={2} coparents={["rapid_shot"]} prop="snap_shot" />
				<Leaf level={3} prop="improved_snap_shot" />
				<Leaf level={4} prop="greater_snap_shot" />
				<Leaf level={3} coparents={["two_weapon_fighting"]} prop="sword_and_pistol" />
				<Leaf level={2} coparents={["two_weapon_fighting"]} prop="spear_dancing_style" />
				<Leaf level={3} coparents={["weapon_finesse"]} prop="spear_dancing_spiral" />
				<Leaf level={4} prop="spear_dancing_reach" />
				<Leaf level={2} coparents={["point_blank_shot"]} prop="startoss_style" />
				<Leaf level={3} prop="startoss_comet" />
				<Leaf level={4} prop="startoss_shower" />
				<Leaf level={2} coparents={["exotic_weapon_proficiency", "shield_proficiency"]} prop="taldan_duelist" />
				<Leaf level={2} coparents={["improved_trip"]} prop="tangled_limbs" />
				<Leaf level={3} prop="titans_tangle" />
				<Leaf level={2} coparents={["two_weapon_fighting"]} prop="twin_thunders" />
				<Leaf level={3} coparents={["improved_two_weapon_fighting"]} prop="twin_thunders_flurry" />
				<Leaf level={4} prop="twin_thunders_master" />
				<Leaf level={2} coparents={["precise_shot"]} prop="warning_shot" />
				<Leaf level={2} coparents={["combat_reflexes", "improved_unarmed_strike"]} prop="diabolic_style" />
				<Leaf level={3} coparents={["vital_strike"]} prop="diabolic_humiliation" />
				<Leaf level={4} prop="diabolic_judgement" />
				<Leaf level={2} coparents={["combat_expertise"]} prop="swordplay_style" />
				<Leaf level={3} coparents={["improved_feint"]} prop="swordplay_upset" />
				<Leaf level={4} prop="swordplay_deflection" />
				<Leaf level={2} prop="weapon_of_the_chosen" />
				<Leaf level={3} prop="improved_weapon_of_the_chosen" />
				<Leaf level={4} prop="greater_weapon_of_the_chosen" />
				<Leaf level={2} prop="weapon_specialization" primary />
				<Leaf level={3} prop="greater_weapon_specialization" primary />
				<Leaf level={3} prop="point_blank_master" />
				<Leaf level={4} prop="false_opening" />
				<Leaf level={3} coparents={["tripping_staff"]} prop="thunder_and_fang" />
				<Leaf level={3} coparents={["critical_focus"]} prop="impaling_critical" />
				<Leaf level={4} prop="improved_impaling_critical" />
				<Leaf level={2} prop="whip_mastery" />
				<Leaf level={3} prop="balor_whip" />
				<Leaf level={4} prop="improved_balor_whip" />
				<Leaf level={5} prop="greater_balor_whip" />
				<Leaf level={3} prop="improved_whip_mastery" />
				<Leaf level={4} prop="greater_whip_mastery" />
			</section>
			<section>
				<Leaf level={1} prop="great_fortitude" />
				<Leaf level={2} coparents={["iron_will", "lightning_reflexes"]} prop="marked_for_glory" />
				<Leaf level={2} coparents={["iron_will", "lightning_reflexes"]} prop="spell_drinker" />
				<Leaf level={2} coparents={["iron_will", "lightning_reflexes"]} prop="bolster_jinx" />
			</section>
			<section>
				<Leaf level={1} prop="iron_will" />
				<Leaf level={2} prop="improved_iron_will" />
				<Leaf level={3} prop="clarity_of_pain" />
				<Leaf level={4} prop="exorcising_mutilation" />
				<Leaf level={2} coparents={["great_fortitude", "lightning_reflexes"]} prop="marked_for_glory" />
				<Leaf level={2} coparents={["great_fortitude", "lightning_reflexes"]} prop="spell_drinker" />
				<Leaf level={2} coparents={["great_fortitude", "lightning_reflexes"]} prop="bolster_jinx" />
			</section>
			<section>
				<Leaf level={1} prop="lightning_reflexes" />
				<Leaf level={2} coparents={["great_fortitude", "iron_will"]} prop="marked_for_glory" />
				<Leaf level={2} coparents={["alertness", "improved_initiative", "quick_draw"]} prop="ready_for_anything" />
				<Leaf level={3} prop="cunning_intuition" />
				<Leaf level={2} coparents={["great_fortitude", "iron_will"]} prop="spell_drinker" />
				<Leaf level={2} coparents={["great_fortitude", "iron_will"]} prop="bolster_jinx" />
			</section>
			<section>
				<Leaf level={1} prop="arcane_strike" />
				<Leaf level={2} coparents={["disruptive"]} prop="banishing_critical" />
				<Leaf level={3} coparents={["combat_reflexes"]} prop="dimensional_awareness" />
				<Leaf level={4} prop="dimensional_disruption" />
			</section>
			<section>
				<Leaf level={1} prop="critical_focus" />
				<Leaf level={2} coparents={["improved_dirty_trick"]} prop="dirty_critical_hit" />
				<Leaf level={2} coparents={["weapon_specialization"]} prop="impaling_critical" />
				<Leaf level={3} prop="improved_impaling_critical" />
			</section>
			<section>
				<Leaf level={1} prop="elven_battle_training" />
				<Leaf level={2} coparents={["weapon_finesse"]} prop="elven_battle_style" />
				<Leaf level={3} prop="elven_battle_focus" />
				<Leaf level={4} prop="elven_battle_torrent" />
			</section>
			<section>
				<Leaf level={1} prop="gnome_weapon_focus" />
				<Leaf level={2} coparents={["improved_feint"]} prop="illusive_gnome_style" />
				<Leaf level={3} prop="illusive_gnome_surprise" />
				<Leaf level={4} prop="illusive_gnome_bewilderment" />
			</section>
			<section>
				<Leaf level={1} prop="improved_initiative" />
				<Leaf level={2} coparents={["alertness", "lightning_reflexes", "quick_draw"]} prop="ready_for_anything" />
				<Leaf level={3} prop="cunning_intuition" />
				<Leaf level={2} coparents={["mobility"]} prop="heroic_interposition" />
			</section>
			<section>
				<Leaf level={1} prop="nimble_moves" />
				<Leaf level={2} coparents={["mobility"]} prop="gliding_steps" />
				<Leaf level={2} coparents={["spring_attack"]} prop="improved_spring_attack" />
				<Leaf level={3} prop="greater_spring_attack" />
			</section>
		</BasicPage>
	);
};

export default FeatsTreePage;
