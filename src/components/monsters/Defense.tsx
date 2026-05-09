import {FC, ReactNode, Fragment as F} from 'react';
import Header from '../Header';
import Link from '../Link';
import parseHtmlArrayKludge, { StringOrHtmlKludge } from '../parseHtmlArrayKludge';
import { convertTextToLink } from '../convertLinks';

interface Id {
	id?: string
}
interface AcProps extends Id {
	ac: [number, number, number]
	mod?: string
}
	interface HpRaw extends Id {
		hpRaw: string
		hp?: never
		fh?: never
		regen?: never
	}
	interface HpPlain extends Id {
		hp: string[]
		fh?: string
		regen?: string
		hpRaw?: never
	}
type HpProps = HpRaw | HpPlain;
interface SaveProps extends Id {
	fort: string
	ref: string
	will: StringOrHtmlKludge
}
type SortablePair = [string, StringOrHtmlKludge];
interface DefenseProps extends Id {
	chanRes?: string
	fortif?: number
	split?: string
	ink?: number
	pBlood?: string
	trapS?: string
	unstop?: boolean
	blockAt?: boolean
	rockCt?: boolean
	secSave?: boolean
	ferocity?: boolean
	amorph?: boolean
	aav?: boolean
	incorp?: boolean
	noB?: boolean
	eva?: boolean
	impEva?: boolean
	unc?: boolean
	impUnc?: boolean
	def?: SortablePair[]
	dr?: StringOrHtmlKludge
	immune?: StringOrHtmlKludge
	resist?: StringOrHtmlKludge
	sr?: StringOrHtmlKludge
}
interface WeaknessProps extends Id {
	weak?: StringOrHtmlKludge[]
}

const Ac: FC<AcProps> = ({ac, mod}) => {
	const [all, touch, ff] = ac;
	return <p><strong>AC</strong> {all}, touch {touch}, flat-footed {ff}{mod ? ` (${mod})` : ""}</p>;
};

const Hp: FC<HpProps> = ({hpRaw, hp, fh, regen}) => {
	if(hpRaw !== undefined) {
		return <><strong>hp</strong> {hpRaw}</>;
	}
	const [h, formula, hd, forcefield] = hp;
	let paren = formula;
	if(hd) {
		paren = `${hd} HD; ${paren}`;
	}
	if(forcefield) {
		paren = paren + ` plus ${forcefield} hp force field`;
	}
	const fast = fh ? (
		<>; <Link to="/umr/fast_healing">fast healing</Link> {fh}</>
	) : <></>;
	const reg = regen ? (
		<>; <Link to="/umr/regeneration">regeneration</Link> {regen}</>
	) : <></>;
	return <p><strong>hp</strong> {h} ({paren}){fast}{reg}</p>;
};

const Save: FC<SaveProps> = ({fort, ref, will}) => {
	return <p><strong>Fort</strong> {fort}, <strong>Reflex</strong> {ref}, <strong>Will</strong> {parseHtmlArrayKludge(will)}</p>;
};

const Defenses: FC<DefenseProps> = (props) => {
	const {
		chanRes, fortif, split, ink, pBlood, trapS,
		unstop, blockAt, rockCt, secSave,
		ferocity, amorph, aav, incorp, noB,
		eva, impEva, unc, impUnc,
		def, dr, immune, resist, sr, id
	} = props;
	const deff: [string, ReactNode][] = [];
	if(def) {
		//line = `**Defensive Abilities** ${def}`;
		def.forEach((bit: SortablePair, i) => {
			const [sorter, value] = bit;
			deff.push([sorter, <F key={`${id}-def-ab-${i}`}>{parseHtmlArrayKludge(value)}</F>]);
		});
	}
	if(chanRes) {
		deff.push([`channel resistance ${chanRes}`, <F key={`${id}-chres`}><Link to="/umr/channel_resistance">channel resistance</Link> {chanRes}</F>]);
	}
	if(fortif) {
		deff.push([`fortification (${fortif}%)`, <F key={`${id}-fortif`}><Link to="/umr/fortification">fortification</Link> ({fortif}%)</F>]);
	}
	if(split) {
		deff.push([`split (${split})`, <F key={`${id}-split`}><Link to="/umr/split">split</Link> ({split})</F>]);
	}
	if(ink) {
		deff.push([`ink cloud (${ink}-ft. radius})`, <F key={`${id}-ink`}><Link to="/umr/ink_cloud">ink cloud</Link> ({ink}-ft. radius)</F>]);
	}
	if(pBlood) {
		deff.push([`poisonous blood (${pBlood})`, <F key={`${id}-pBlood`}><Link to="/umr/poisonous_blood">poisonous blood</Link> (<Link to={"/eq-poison/" + convertTextToLink(pBlood)}>{pBlood}</Link>)</F>]);
	}
	if(trapS) {
		deff.push([`trap sense ${trapS}`, <F key={`${id}-trapS`}><Link to="/ability/trap_sense">trap sense</Link> ${trapS}</F>]);
	}
	if(unstop) {
		deff.push([`unstoppable`, <Link key={`${id}-unstop`} to="/umr/unstoppable">unstoppable</Link>]);
	}
	if(blockAt) {
		deff.push([`block attacks`, <Link key={`${id}-blockat`} to="/umr/block_attacks">block attacks</Link>]);
	}
	if(rockCt) {
		deff.push([`rock catching`, <Link key={`${id}-rockct`} to="/umr/rock_catching">rock catching</Link>]);
	}
	if(secSave) {
		deff.push([`second save`, <Link key={`${id}-secsave`} to="/umr/second_save">second save</Link>]);
	}
	if(ferocity) {
		deff.push([`ferocity`, <Link key={`${id}-ferocity`} to="/umr/ferocity">ferocity</Link>]);
	}
	if(amorph) {
		deff.push([`amorphous`, <Link key={`${id}-amorph`} to="/umr/amorphous">amorphous</Link>]);
	}
	if(aav) {
		deff.push([`all-around vision`, <Link key={`${id}-aav`} to="/umr/all_around_vision">all-around vision</Link>]);
	}
	if(incorp) {
		deff.push([`incorporeal`, <Link key={`${id}-incorp`} to="/umr/incorporeal">incorporeal</Link>]);
	}
	if(noB) {
		deff.push([`no breath`, <Link key={`${id}-nob`} to="/umr/no_breath">no breath</Link>]);
	}
	if(eva) {
		deff.push([`evasion`, <Link key={`${id}-eva`} to="/ability/evasion">evasion</Link>]);
	}
	if(unc) {
		deff.push([`uncanny dodge`, <Link key={`${id}-unc`} to="/ability/uncanny_dodge">uncanny dodge</Link>]);
	}
	if(impEva) {
		deff.push([`improved evasion`, <Link key={`${id}-impeva`} to="/ability/improved_evasion">improved evasion</Link>]);
	}
	if(impUnc) {
		deff.push([`improved uncanny dodge`, <Link key={`${id}-impunc`} to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link>]);
	}
	let final = <></>;
	let flag = false;
	if(dr || immune || resist || sr) {
		const bool = dr ? [true, true, true] : [false, ...(immune ? [true, true] : [false, !!resist])];
		flag = true;
		final = <F key={id+"-dr-imm-res-sr"}>{
			dr ? <><strong>DR</strong> {parseHtmlArrayKludge(dr)}</> : <></>
		}{
			immune ? (
				<>{bool[0] ? <>; </> : <></>}<strong>Immune</strong> {parseHtmlArrayKludge(immune)}</>
			) : <></>
		}{
			resist ? (
				<>{bool[1] ? <>; </> : <></>}<strong>Resist</strong> {parseHtmlArrayKludge(resist)}</>
			) : <></>
		}{
			sr ? (
				<>{bool[2] ? <>; </> : <></>}<strong>SR</strong> {parseHtmlArrayKludge(sr)}</>
			) : <></>
		}</F>;
	}
	if(deff.length === 0) {
		return flag ? <p>{final}</p> : <></>;
	}
	deff.sort((a, b) => a[0].localeCompare(b[0]));
	return <p><strong>Defensive Abilities</strong> {
		deff.map((pair, i) => {
			return i ? <F key={`${id}-def-ab-${i}`}>, {pair[1]}</F> : <F key={`${id}-def-ab-${i}`}>{pair[1]}</F>;
		})
	}; {final}</p>;
};

const Weakness: FC<WeaknessProps> = ({weak, id}) => {
	if(!weak || !weak.length) {
		return <></>;
	}
	return <p><strong>Weaknesses</strong> {
		weak.map((w, i) => {
			return i ? <F key={`${id}-weak-${i}`}>, {parseHtmlArrayKludge(w)}</F> : <F key={`${id}-weak-${i}`}>{parseHtmlArrayKludge(w)}</F>;
		})
	}</p>;
};

type DefProps = AcProps & HpProps & SaveProps & DefenseProps & WeaknessProps;

const makeMonsterDefenseBlock: FC<DefProps> = (attrs) => {
	const {
		id,
		ac, mod,
		hp, hpRaw, fh, regen,
		fort, ref, will,
		chanRes, fortif, split, ink, pBlood, trapS,
		unstop, blockAt, rockCt, secSave,
		ferocity, amorph, aav, incorp, noB,
		eva, impEva, unc, impUnc,
		def, dr, immune, resist, sr,
		weak
	} = attrs;
	return (
		<div className="reduce">
			<Header sub>Defense</Header>
			<Ac ac={ac} mod={mod} />
			{hpRaw !== undefined ? <Hp hpRaw={hpRaw} /> : <Hp hp={hp} fh={fh} regen={regen} />}
			<Save fort={fort} ref={ref} will={will} />
			<Defenses
				id={id}
				chanRes={chanRes}
				fortif={fortif}
				split={split}
				ink={ink}
				pBlood={pBlood}
				trapS={trapS}
				unstop={unstop}
				blockAt={blockAt}
				rockCt={rockCt}
				secSave={secSave}
				ferocity={ferocity}
				amorph={amorph}
				aav={aav}
				incorp={incorp}
				noB={noB}
				eva={eva}
				impEva={impEva}
				unc={unc}
				impUnc={impUnc}
				def={def}
				dr={dr}
				immune={immune}
				resist={resist}
				sr={sr}
			/>
			<Weakness weak={weak} id={id} />
		</div>
	);
};

export default makeMonsterDefenseBlock;
