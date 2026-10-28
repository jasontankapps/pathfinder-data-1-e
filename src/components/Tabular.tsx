import { FC, ReactNode, useContext } from 'react';
import ScrollContainer from './ScrollContainer';
import Link from './Link';
import translateGp from './translateGp';
import { convertTextToLink } from "./convertLinks";
import { IdContext } from './contexts';

interface BaseProps {
	id?: string
	a?: ReactNode
	b?: ReactNode
	c?: ReactNode
	d?: ReactNode
	e?: ReactNode
	f?: ReactNode
	g?: ReactNode
	h?: ReactNode
	i?: ReactNode
	j?: ReactNode
	k?: ReactNode
}
type InfoProps = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k";

interface FormatProps {
	required: InfoProps[]
	possiblyRequired?: InfoProps[]
	formatter: (x: BaseProps) => ReactNode
	postFormatter?: (x: BaseProps) => ReactNode
	className?: string
}

const FormatObject: { [x: string]: FormatProps } = {
	conmod: {
		required: ["a", "b", "c", "d"],
		formatter: (props) => {
			const {id, a, b, c, d} = props;
			return (
				<table><tbody>
					<tr>
						<th id={id + "-type"}>Type</th>
						<td headers={id + "-type"}>{a}</td>
						<th id={id + "-cost"} colSpan={2}>Cost</th>
						<td headers={id + "-cost"} className="nowrap">{b}</td>
					</tr>
					<tr><th scope="row" colSpan={3}>Requirements</th><td colSpan={2}>{c}</td></tr>
					<tr><th scope="row" colSpan={3}>CR Increase</th><td colSpan={2}>{d}</td></tr>
				</tbody></table>
			);
		}
	},
	reqcost: {
		required: ["a", "b"],
		formatter: (props) => {
			const {id, a, b} = props;
			return (
				<table><tbody>
					<tr>
						<th id={id + "-req"}>Re&shy;quire&shy;ments</th>
						<td headers={id + "-req"}>{a}</td>
						<th id={id + "-cost"}>Cost</th>
						<td headers={id + "-cost"} className="nowrap">{b}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	alchstats: {
		required: ["a", "b"],
		className: "lessRound tipOnly flatStart",
		formatter: (props) => {
			const {id, a, b, c, d, e} = props;
			const final = (c && d) ? (
				<tr>
					<th scope="row" colSpan={3}>Equipment Link</th>
					<td colSpan={2}><Link to={"/eq-" + c + "/" + convertTextToLink(d as string)}>{d}</Link></td>
				</tr>
			) : e ? (
				<tr>
					<th scope="row" colSpan={3}>Equipment Links</th>
					<td colSpan={2}>{e}</td>
				</tr>
			) : <></>;
			return (
				<table className="hl"><tbody>
					<tr>
						<th id={id + "-price"}>Price</th>
						<td headers={id + "-price"}>{a}</td>
						<th id={id + "-weight"} colSpan={((c && d) || e) ? 2 : 1}>Weight</th>
						<td headers={id + "-weight"}>{b}</td>
					</tr>
					{final}
				</tbody></table>
			);
		}
	},
	powercomp: {
		required: ["a", "b", "c"],
		formatter: (props) => {
			const {id, a, b, c} = props;
			return (
				<table><tbody>
					<tr>
						<th id={id + "-doses"}>Doses</th>
						<td headers={id + "-doses"} colSpan={2}>{a}</td>
						<th id={id + "-spells"}>Spells</th>
						<td headers={id + "-spells"}>{b}</td>
					</tr>
					<tr>
						<th scope="row" colSpan={2}>Effects</th>
						<td colSpan={3}>{c}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	armor: {
		required: ["a", "b"],
		className: "tipOnly flatStart",
		formatter: props => {
			const {id, a, b, c, d, e} = props;
			// a b c? (d|e)?
			//
			// a = cost in gp
			// b = weight in lbs
			// c = 'x' indicates the above should be rendered verbatim,
			//     'M' indicates this is a modification to a base price
			// d = armor bonus
			// e = shield bonus
			const verbatim = c === "x";
			const mod = c === "M";
			const nB = Number(b) || 0;
			return (
				<table><tbody>
					<tr>
						<th id={id + "-cost"} className="hl">Price</th>
						<td headers={id + "-cost"}>{verbatim ? a : translateGp(Number(a), mod)}</td>
						<th id={id + "-weight"} className="hl">Weight</th>
						<td headers={id + "-weight"}>{
							verbatim ? b : (
								nB === nB ? `${nB.toLocaleString()} lb${nB === 1 ? "" : "s"}.` : <>&mdash;</>
							)
						}</td>
						{(d || e) ? <>
								<th id={id + "-bonus"}>{d ? "Armor" : "Shield"} Bonus</th>
								<td headers={id + "-bonus"} className="hl"><b>+{d || e}</b></td>
						</> : <></>}
					</tr>
				</tbody></table>
			);
		},
		postFormatter: props => {
			const {d, e, f, g, h, i, j} = props;
			// ((d|e) f g h (i j)?)?
			//
			// d = armor bonus
			// e = shield bonus
			// f = max dex bonus (or x)
			// g = armor check penalty (or x)
			// h = arcane spell failure chance (without the % sign, or x)
			// i = speed (3020, 2015, or 1510)
			// j = category (1 = light, 2 = med, 3 = heavy)
			if(!(d || e)) {
				return <></>;
			}
			return (
				<ul>
					<li><b>Max Dex Bonus:</b> {f === "x" ? <>&mdash;</> : `+${f}`}</li>
					<li><b>Armor Check Penalty:</b> {g === "x" ? <>&mdash;</> : g}</li>
					<li><b>Arcane Spell Failure Chance:</b> {h === "x" ? <>&mdash;</> : h}%</li>
					{(i || j) ? (
						<>
							<li><b>Speed:</b> {
								// Non-strict equality, on purpose
								i == 3020 ? "30 ft./20 ft." : (
									i == 2015 ? "20 ft./15 ft." : "15 ft/10 ft."
								)
							}</li>
							<li><b>Category:</b> {
								// Non-strict equality, on purpose
								j == 1 ? "Light" : (j == 2 ? "Medium" : "Heavy")
							} Armor</li>
						</>
					) : (<></>)}
				</ul>
			);
		}
	},
	weap1: {
		required: ["a", "b"],
		possiblyRequired: ["d","e","f","g","i","j"],
		formatter: props => {
			const {id, a, b, c, d} = props;
			// a = cost in gp
			// b = weight in lbs
			// c = 'x' indicates the above should be rendered verbatim,
			//     'M' indicates this is a modification to a base price
			// d..k - if present, we add in weap2
			const verbatim = c === "x";
			const price = Number(a) || 0;
			const weight = Number(b) || 0;
			const mod = c === "M";
			return (
				<table><tbody>
					<tr>
						<th id={id + "-cost"} className="hl">Price</th>
						<td headers={id + "-cost"}>{
							verbatim ? a : translateGp(price, mod)
						}</td>
						<th id={id + "-weight"} className="hl">Weight</th>
						<td headers={id + "-weight"}>{
							verbatim ? b : (
								weight === weight ? (
									(mod && weight >= 0 ? "+" : "")
									+ weight.toLocaleString()
									+ " lb"
									+ (weight === 1 ? "" : "s")
									+ "."
								) : <>&mdash;</>
							)
						}</td>
					</tr>
					{ d ? FormatObject.weap2.formatter(props) : <></> }
				</tbody></table>
			);
		},
		postFormatter: props => {
			// Pass to weap2 if needed
			if(props.i !== undefined) {
				return FormatObject.weap2.postFormatter!(props);
			}
			return <></>;
		}
	},
	weap2: {
		required: ["d","e","f","g","i","j"],
		formatter: props => {
			const {id, a, d, e, f, g} = props;
			// a = if present and true, this is already in a table
			//
			// d = damage (s[dmg]m[dmg] format or plain text)
			// e = critical
			// f = range (x = none)
			// g = damage type
			let damage = d;
			const m = String(d).match(/^s(.+?)m(.+?)$/);
			if(m) {
				damage = m[1] + " (small), " + m[2] + " (medium)";
			}
			const core = (<>
				<tr>
					<th id={id + "-dmg"} className="hl">Damage</th>
					<td headers={id + "-dmg"}>{damage}</td>
					<th id={id + "-crit"} className="hl">Critical</th>
					<td headers={id + "-crit"}>{e}</td>
				</tr>
				<tr>
					<th id={id + "-range"} className={f === "x" ? undefined : "hl"}>Range</th>
					<td headers={id + "-type"}>{f === "x" ? <>&mdash;</> : f}</td>
					<th id={id + "-type"}>Dmg Type</th>
					<td headers={id + "-type"}>{g}</td>
				</tr>
			</>);
			return a ? core : (
				<table><tbody>
					{core}
				</tbody></table>
			);
		},
		postFormatter: props => {
			const {h, i, j, k} = props;
			// h = special (ignored if not present)
			// i = category (light, one, two, ammo, alch, ?)
			// j = proficiency (S, M, E, ?)
			// k = weapon groups (ignored if not present)
			return (
				<ul>
					{ h ? <li><b>Special Qualities:</b> {h}</li> : <></> }
					<li><b>Weapon Category:</b> {
						i === "one" ? "One-Handed" : (
							i === "two" ? "Two-Handed" : (
								i === "light" ? "Light" : (
									i === "ammo" ? "Ammunition" : (
										i === "alch" ? "Alchemical Weapon" : i
									)
								)
							)
						)
					}</li>
					<li><b>Proficiency Type:</b> {
						j === "E" ? "Exotic" : (
							j === "M" ? "Martial" : (
								j === "S" ? "Simple" : j
							)
						)
					}</li>
					{k ? (
						<li><b><Link to="/ability/weapon_groups">Fighter Weapon Groups</Link></b> {k}</li>
					) : (<></>)}
				</ul>
			);
		}
	}
};

type Format = keyof typeof FormatObject

interface TabularProps extends BaseProps {
	format: Format
}

const Tabular: FC<TabularProps> = (props) => {
	const {format, id, ...others} = props;
	const cId = useContext(IdContext) + "-Tabular-" + format + (id ? "-" + id : "");
	const {required, possiblyRequired, formatter, className, postFormatter} = FormatObject[format];
	if(
		!required.every(x => others[x] !== undefined)
		|| (
			possiblyRequired && !(
				possiblyRequired.every(x => others[x] !== undefined)
				|| possiblyRequired.every(x => others[x] === undefined)
			)
		)
	) {
		return <p><strong>ERROR &lt;Tabular&gt; element missing required prop(s).</strong></p>;
	}
	return (
		<div className={"sideNoteWrap startAlign noIcon" + (className ? " " + className : "")}>
			<ScrollContainer id={cId + "-scrollcontainer"}>
				{formatter({...others, id: cId})}
			</ScrollContainer>
			{postFormatter ? postFormatter({...others, id: cId}) : <></>}
		</div>
	);
};

export default Tabular
