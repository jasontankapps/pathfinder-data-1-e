import {FC, ReactNode, Fragment as F, useMemo} from 'react';
import Header from '../Header';
import Link from '../Link';
import mapNodes from '../mapNodes';

	interface SpeedPropsBase {
		id: string
		sp?: number
		spP?: ReactNode
		br?: number
		brP?: string
		cl?: number
		clP?: string
		sw?: number
		swP?: string
		jet?: number
		spOther?: string
		spExtra?: ReactNode
	}
	interface SpeedPropsFl1 extends SpeedPropsBase {
		fl: number
		flP: ReactNode
	}
	interface SpeedPropsFl2 extends SpeedPropsBase {
		fl?: never
		flP?: never
	}
type SpeedProps = SpeedPropsFl1 | SpeedPropsFl2;

	interface ChannelEnergy {
		pos?: boolean
		d6: number | "command"
		dc: number
		perDay?: number
		misc?: string
	}
interface SpecialAttackProps {
	id: string
	specAtt?: [string, ReactNode][]
	attach?: boolean // <attach>
	bleed?: string | boolean // <bleed> (bleed)
	capsize?: number | boolean // <capsize> DC ##
	bDrain?: string // <blood drain> (bDrain)
	bloodRage?: boolean // <blood rage>
	brWeap?: ReactNode // <breath weapon> (brWeap)
	burn?: string
	chEn?: ChannelEnergy
	constrict?: boolean | string // <constrict> (constrict)
	distraction?: boolean | number | string
	eDrain?: string
	engulf?: string
	entrap?: string
	fSwallow?: boolean
	favEn?: string
	ferocity?: boolean
	gaze?: boolean
	grab?: boolean | string
	heat?: boolean | string
	mMagic?: string
	mPower?: string
	paralysis?: string
	powCh?: string
	pounce?: boolean
	pull?: string
	push?: boolean | string
	rake?: string
	rend?: string
	rockTh?: string
	smother?: boolean | string
	sneak?: string
	strangle?: boolean
	swallow?: boolean | string
	trample?: string
	web?: string | boolean
	whirlwind?: string
}

	interface Space1 {
		space: ReactNode
		reach: ReactNode
		reachP?: ReactNode
	}
	interface Space2 {
		space?: never
		reach?: never
		reachP?: never
	}
type SpaceReach = Space1 | Space2;

interface Base {
	id: string
	melee?: ReactNode
	ranged?: ReactNode
}

type OffenseProps = Base & SpecialAttackProps & SpeedProps & SpaceReach;

const getSpeed = (props: SpeedProps): ReactNode => {
	const {
		sp, spP, br, brP, cl, clP, sw, swP,
		fl, flP, jet, spOther, spExtra, id
	} = props;
	const output: ReactNode[] = [];
	const speeds: [string, ReactNode][] = [];
	if(sp !== undefined) {
		output.push(<F key={`${id}-base-speed`}>{sp} ft.{spP ? <> ({spP})</> : ""}</F>);
	}
	if(br !== undefined) {
		speeds.push(["burrow", <F key={`${id}-burrow`}>burrow {br} ft.{brP ? ` (${brP})` : ""}</F>]);
	}
	if(cl !== undefined) {
		speeds.push(["climb", <F key={`${id}-climb`}>climb {cl} ft.{clP ? ` (${clP})` : ""}</F>]);
	}
	if(sw !== undefined) {
		speeds.push(["swim", <F key={`${id}-swim`}>swim {sw} ft.{swP ? ` (${swP})` : ""}</F>]);
	}
	if(fl !== undefined) {
		speeds.push(["fly", <F key={`${id}-fly`}>fly {fl} ft. ({flP})</F>]);
	}
	if(jet !== undefined) {
		speeds.push(["jet", <F key={`${id}-jet`}><Link to="/umr/jet">jet</Link> {jet} ft.</F>]);
	}
	if(spOther) {
		speeds.push([spOther, spOther]);
	}
	speeds.sort((a,b) => a[0].localeCompare(b[0])).forEach(s => output.push(s[1]));
	return output.length > 0 ? (
		<p><strong>Speed</strong> {
			mapNodes(output, `${id}-speeds`)
		}{
			spExtra ? <>; {spExtra}</> : ""
		}</p>
	) : "";
}

const getSpecialAttacks = (props: SpecialAttackProps) => {
	const {
		specAtt, bDrain, bleed, brWeap, burn, capsize,
		chEn, constrict, distraction,
		eDrain, engulf, entrap, favEn, grab, heat,
		mMagic, mPower, paralysis, powCh, pull, push,
		rake, rend, rockTh, sneak, swallow, trample,
		web, whirlwind,
		attach, bloodRage, fSwallow, ferocity, gaze,
		pounce, smother, strangle, id
	} = props;
	const key = `${id}-special-attack-`
	const spAtt: [string, ReactNode][] = [];
	if(specAtt) {
		specAtt.forEach(bit => {
			const [sorter, output] = bit;
			spAtt.push([sorter, <F key={key+sorter.replace(/ /g, "-")}>{output}</F>])
		});
	}
	if(attach) {
		spAtt.push(["attach", <Link key={key+"attach"} to="/umr/attach">attach</Link>]);
	}
	if(bleed === true) {
		spAtt.push(["bleed", <Link key={key+"bleed"} to="/umr/bleed">bleed</Link>]);
	} else if (bleed) {
		spAtt.push(["bleed", <F key={key+"bleed"}><Link to="/umr/bleed">bleed</Link> ({bleed})</F>]);
	}
	if(bDrain) {
		spAtt.push(["blood drain", <F key={key+"blood-drain"}><Link to="/umr/blood_drain">blood drain</Link> ({bDrain})</F>]);
	}
	if(bloodRage) {
		spAtt.push(["blood rage", <Link key={key+"blood-rage"} to="/umr/blood_rage">blood rage</Link>]);
	}
	if(brWeap) {
		spAtt.push(["breath weapon", <F key={key+"breath-weapon"}><Link to="/umr/breath_weapon">breath weapon</Link> ({brWeap})</F>]);
	}
	if(burn) {
		spAtt.push(["burn", <F key={key+"burn"}><Link to="/umr/burn">burn</Link> ({burn})</F>]);
	}
	if(capsize === true) {
		spAtt.push(["capsize", <Link key={key+"capsize"} to="/umr/capsize">capsize</Link>]);
	} else if (capsize) {
		spAtt.push(["capsize", <F key={key+"capsize"}><Link to="/umr/capsize">capsize</Link> ({capsize})</F>]);
	}
	if(chEn) {
		const { pos, d6, dc, perDay, misc } = chEn;
		const title = pos ? "channel positive energy" : ( pos === false ? "channel negative energy" : "channel energy");
		const k = key + title.replace(/ /g, "-");
		spAtt.push([
			"channel energy",
			<F key={k}><Link to="/ability/channel_energy">{title}</Link> (DC {dc}{
				perDay ? `, ${perDay}/day` : ""
			}{
				d6 === "command" ? `, command undead only` : (d6 ? `, ${d6}d6` : "")
			}{
				misc ? `, ${misc}` : ""
			})</F>
		]);
	}
	if(constrict === true) {
		spAtt.push(["constrict", <Link key={key+"constrict"} to="/umr/constrict">constrict</Link>]);
	} else if (constrict) {
		spAtt.push(["constrict", <F key={key+"constrict"}><Link to="/umr/constrict">constrict</Link> ({constrict})</F>]);
	}
	if(distraction === true) {
		spAtt.push(["distraction", <Link key={key+"distraction"} to="/umr/distraction">distraction</Link>]);
	} else if (distraction) {
		spAtt.push(["distraction", <F key={key+"distraction"}><Link to="/umr/distraction">distraction</Link> ({distraction})</F>]);
	}
	if(eDrain) {
		spAtt.push(["energy drain", <F key={key+"energy-drain"}><Link to="/umr/energy_drain">energy drain</Link> ({eDrain})</F>]);
	}
	if(engulf) {
		spAtt.push(["engulf", <F key={key+"engulf"}><Link to="/umr/engulf">engulf</Link> ({engulf})</F>]);
	}
	if(entrap) {
		spAtt.push(["entrap", <F key={key+"entrap"}><Link to="/umr/entrap">entrap</Link> ({entrap})</F>]);
	}
	if(fSwallow) {
		spAtt.push(["fast swallow", <Link key={key+"fast-swallow"} to="/umr/fast_swallow">fast swallow</Link>]);
	}
	if(favEn) {
		spAtt.push(["favored enemy", <F key={key+"favored-enemy"}><Link to="/ability/favored_enemy">favored enemy</Link> ({favEn})</F>]);
	}
	if(ferocity) {
		spAtt.push(["ferocity", <Link key={key+"ferocity"} to="/umr/ferocity">ferocity</Link>]);
	}
	if(gaze) {
		spAtt.push(["gaze", <Link key={key+"gaze"} to="/umr/gaze">gaze</Link>]);
	}
	if(grab === true) {
		spAtt.push(["grab", <Link key={key+"grab"} to="/umr/grab">grab</Link>]);
	} else if (grab) {
		spAtt.push(["grab", <F key={key+"grab"}><Link to="/umr/grab">grab</Link> ({grab})</F>]);
	}
	if(heat === true) {
		spAtt.push(["heat", <Link key={key+"heat"} to="/umr/heat">heat</Link>]);
	} else if (heat) {
		spAtt.push(["heat", <F key={key+"heat"}><Link to="/umr/heat">heat</Link> ({heat})</F>]);
	}
	if(mMagic) {
		spAtt.push(["mythic magic", <F key={key+"mythic-magic"}><Link to="/umr/mythic_magic">mythic magic</Link> ({mMagic})</F>]);
	}
	if(mPower) {
		spAtt.push(["mythic power", <F key={key+"mythic-power"}><Link to="/umr/mythic_power">mythic power</Link> ({mPower})</F>]);
	}
	if(paralysis) {
		spAtt.push(["paralysis", <F key={key+"paralysis"}><Link to="/umr/paralysis">paralysis</Link> ({paralysis})</F>]);
	}
	if(powCh) {
		spAtt.push(["powerful charge", <F key={key+"powerful-charge"}><Link to="/umr/powerful_charge">powerful charge</Link> ({powCh})</F>]);
	}
	if(pounce) {
		spAtt.push(["pounce", <Link key={key+"pounce"} to="/umr/pounce">pounce</Link>]);
	}
	if(pull) {
		spAtt.push(["pull", <F key={key+"pull"}><Link to="/umr/pull">pull</Link> ({pull})</F>]);
	}
	if(push === true) {
		spAtt.push(["push", <Link key={key+"push"} to="/umr/push">push</Link>]);
	} else if (push) {
		spAtt.push(["push", <F key={key+"push"}><Link to="/umr/push">push</Link> ({push})</F>]);
	}
	if(rake) {
		spAtt.push(["rake", <F key={key+"rake"}><Link to="/umr/rake">rake</Link> ({rake})</F>]);
	}
	if(rend) {
		spAtt.push(["rend", <F key={key+"rend"}><Link to="/umr/rend">rend</Link> ({rend})</F>]);
	}
	if(rockTh) {
		spAtt.push(["rock throwing", <F key={key+"rock-throwing"}><Link to="/umr/rock_throwing">rock throwing</Link> ({rockTh})</F>]);
	}
	if(smother) {
		spAtt.push(["smother", <Link key={key+"smother"} to="/umr/smother">smother</Link>]);
	}
	if(sneak) {
		spAtt.push(["sneak attack", <F key={key+"sneak-attack"}><Link to="/ability/sneak_attack">sneak attack</Link> ({sneak})</F>]);
	}
	if(strangle) {
		spAtt.push(["strangle", <Link key={key+"strangle"} to="/umr/strangle">strangle</Link>]);
	}
	if(swallow === true) {
		spAtt.push(["swallow whole", <Link key={key+"swallow-whole"} to="/umr/swallow_whole">swallow whole</Link>]);
	} else if (swallow) {
		spAtt.push(["swallow whole", <F key={key+"swallow-whole"}><Link to="/umr/swallow_whole">swallow whole</Link> ({swallow})</F>]);
	}
	if(trample) {
		spAtt.push(["trample", <F key={key+"trample"}><Link to="/umr/trample">trample</Link> ({trample})</F>]);
	}
	if(web === true) {
		spAtt.push(["web", <Link key={key+"web"} to="/umr/web">web</Link>]);
	} else if (web) {
		spAtt.push(["web", <F key={key+"web"}><Link to="/umr/web">web</Link> ({web})</F>]);
	}
	if(whirlwind) {
		spAtt.push(["whirlwind", <F key={key+"whirlwind"}><Link to="/umr/whirlwind">whirlwind</Link> ({whirlwind})</F>]);
	}
	if(spAtt.length > 0) {
		spAtt.sort((a,b) => a[0].localeCompare(b[0]));
	//	output.push(doParse(`**Special Attacks** ${spAtt.map(sa => sa[1]).join(", ")}`));
	}
	return spAtt.map(m => m[1]);
};

const Offense : FC<OffenseProps> = (props) => {
	const {
		id,
		sp, spP, br, brP, cl, clP, sw, swP,
		fl, flP,
		jet, spOther, spExtra,
		melee,
		ranged,
		space, reach, reachP,
		specAtt, bDrain, bleed, brWeap, burn, capsize,
		chEn, constrict, distraction,
		eDrain, engulf, entrap, favEn, grab, heat,
		mMagic, mPower, paralysis, powCh, pull, push,
		rake, rend, rockTh, sneak, swallow, trample,
		web, whirlwind,
		attach, bloodRage, fSwallow, ferocity, gaze,
		pounce, smother, strangle
	} = props;
	const speedObject = useMemo(() => {
		if(fl !== undefined) {
			return {sp, spP, br, brP, cl, clP, sw, swP, jet, spOther, spExtra, id, fl, flP};
		}
		return {sp, spP, br, brP, cl, clP, sw, swP, jet, spOther, spExtra, id};
	}, [sp, spP, br, brP, cl, clP, sw, swP, jet, spOther, spExtra, id, fl, flP]);
	const specialAttacks = useMemo(() => {
		const sa = getSpecialAttacks({
			id, specAtt, bDrain, bleed, brWeap, burn, capsize,
			chEn, constrict, distraction,
			eDrain, engulf, entrap, favEn, grab, heat,
			mMagic, mPower, paralysis, powCh, pull, push,
			rake, rend, rockTh, sneak, swallow, trample,
			web, whirlwind,
			attach, bloodRage, fSwallow, ferocity, gaze,
			pounce, smother, strangle
		});
		if(sa.length > 0) {
			return sa;
		}
		return false;
	}, []);
	return (
		<>
			<Header sub>Offense</Header>
			{getSpeed(speedObject)}
			{melee ? <p><strong>Melee</strong> {melee}</p> : ""}
			{ranged ? <p><strong>Ranged</strong> {ranged}</p> : ""}
			{space ? (
				<p><strong>Space</strong> {space}, <strong>Reach</strong> {reach}{
					reachP ? <> ({reachP})</> : ""
				}</p>
			) : ""}
			{specialAttacks ? (
				<p><strong>Special Attacks</strong> {
					mapNodes(specialAttacks, `${id}-special-attacks`)
				}</p>
			) : ""}
		</>
	);
};

export default Offense;

