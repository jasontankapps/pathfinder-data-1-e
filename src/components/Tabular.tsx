import { FC, ReactNode, useContext } from 'react';
import ScrollContainer from './ScrollContainer';
import Link from './Link';
import translateGp from './translateGp';
import { convertTextToLink } from "./convertLinks";
import { IdContext } from './contexts';
import { Block, Cell, Row } from './Block';

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
	l?: ReactNode
	m?: ReactNode
	n?: ReactNode
	o?: ReactNode
	p?: ReactNode
	q?: ReactNode
	r?: ReactNode
	s?: ReactNode
	t?: ReactNode
	u?: ReactNode
	v?: ReactNode
	w?: ReactNode
	x?: ReactNode
	y?: ReactNode
	z?: ReactNode
}
type InfoProps = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

interface FormatProps {
	required: InfoProps[]
	possiblyRequired?: InfoProps[][]
	formatter: (x: BaseProps) => ReactNode
	postFormatter?: (x: BaseProps) => ReactNode
	className?: string
}

const translateWeight = (x: number) => {
	const y = Math.floor(x);
	if(y === x) {
		return x ? x.toLocaleString() : <>&mdash;</>;
	}
	const z = x - y;
	const fraction = (() => {
		switch(z) {
			case 0.5:
				return <>&frac12;</>;
			case 0.25:
				return <>&frac14;</>;
			case 0.33:
				return <>&#8531;</>;
			case 0.75:
				return <>&frac34;</>;
			case 0.1:
				return <>&#8530;</>
		}
		console.log(x, y, z);
		return "ERROR";
	})();
	return <>{y ? y.toLocaleString() : ""}{fraction}</>;
};

const category = (i: string) => {
	switch(i) {
		case "one":
			return "One-Handed";
		case "two":
			return "Two-Handed";
		case "light":
			return "Light";
		case "ranged":
			return "Ranged";
		case "ammo":
			return "Ammunition";
		case "alch":
			return "Alchemical Weapon";
	}
	return "";
}

const FormatObject: { [x: string]: FormatProps } = {
	conmod: {
		required: ["a", "b", "c", "d"],
		className: "startAlign",
		formatter: (props) => {
			const {id, a, b, c, d} = props;
			// a=type b=price c=requirements d=CR increase
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
		className: "startAlign",
		formatter: (props) => {
			const {id, a, b} = props;
			// a=requirements b=price
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
		className: "lessRound tipOnly flatStart startAlign",
		formatter: (props) => {
			const {id, a, b, c, d, e} = props;
			// a=price b=weight
			// c=eq- link type (misc or weapon)
			// d=equipment link text (‹link› format)
			// e=text of an equipment link
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
		className: "startAlign",
		formatter: (props) => {
			const {id, a, b, c} = props;
			// a=doses needed b=spells it affects c=effects
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
		className: "tipOnly flatStart startAlign",
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
		className: "startAlign",
		possiblyRequired: [
			["d","e","f","g","i","j"],
			["i","j"]
		],
		formatter: props => {
			const {id, a, b, c, d, k} = props;
			// a = cost in gp
			// b = weight in lbs
			// c = 'x' indicates the above should be rendered verbatim,
			//     'M' indicates this is a modification to a base price
			// d..g,i..j - if present, we add in weap2 fully
			// i..j - if present (but not d..g), we add in weap2.postFromatter only
			// k = if present (but not d..j), indicates a category
			const verbatim = c === "x";
			const price = Number(a) || 0;
			const weight = Number(b);
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
									+ translateWeight(weight)
									+ (
										(mod && weight === 0) ? "" : (
											(weight <= 1 && weight >= -1) ? " lb." : " lbs."
										)
									)
								) : <>&mdash;</>
							)
						}</td>
					</tr>
					{ d ? FormatObject.weap2.formatter(props) : <></> }
					{ !d && k ? (
						<tr>
							<th scope="row">Category</th>
							<td colSpan={3}>{category(String(k)) || k}</td>
						</tr>
					) : <></> }
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
		className: "startAlign",
		formatter: props => {
			const {id, a, d, e, f, g} = props;
			// a = if present and true, this is already in a table
			//
			// d = damage (s[dmg]m[dmg] format or plain text)
			// e = critical
			// f = range (x = none)
			// g = damage type
			let damage = d;
			const range = Number(f);
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
					<td headers={id + "-type"}>{
						(f === "x") ? <>&mdash;</> : (
							range === range ? `${range} ft.` : f
						)
					}</td>
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
			// i = category (light, one, two, ranged, ammo, alch, ?)
			// j = proficiency (S, M, E, ?)
			// k = weapon groups (ignored if not present)
			return (
				<ul>
					{ h ? <li><b>Special Qualities:</b> {h}</li> : <></> }
					<li><b>Weapon Category:</b> {category(String(i)) || i}</li>
					{ j === "X" ? <></> : 
						<li><b>Proficiency Type:</b> {
							j === "E" ? "Exotic" : (
								j === "M" ? "Martial" : (
									j === "S" ? "Simple" : j
								)
							)
						}</li>
					}
					{k ? (
						<li><b><Link to="/ability/weapon_groups">Fighter Weapon Groups</Link></b> {k}</li>
					) : (<></>)}
				</ul>
			);
		}
	},
	misc: {
		required: [],
		className: "startAlign",
		formatter: props => {
			const {id: ID, a, b, c, d, e, f, g} = props;
			// a=price b=weight c=verbatim/modifier flag d=type of object
			//   e=accuracy (pathfinder guide) or deity (channel foci) or gather DC (herbalism)
			//   f=associated skill (pathfinder guide) or price of passage (transport) or yield (herbalism)
			//   g=DC of skill (pathfinder guide) or terrain (herbalism)
			//   h=preparation (herbalism)
			//   i=use (herbalism)
			//   j=use 2nd paragraph (herbalism)
			const cat = (() => {
				switch(d) {
					case "tools":
						return "Tools";
					case "gear":
						return "Adventuring Gear";
					case "atool":
						return "Alchemical Tools";
					case "rem":
						return "Alchemical Remedies";
					case "kits":
						return "Kits";
					case "bm":
						return "Black Market";
					case "animgear":
						return "Animal Gear";
					case "lodgserv":
						return "Lodging/Services";
					case "food":
						return "Food/Drink";
					case "cloth":
						return "Clothing";
					case "ent":
						return "Entertainment";
					case "conc":
						return "Concoctions";
					case "tinc":
						return "Tinctures";
					case "dragon":
						return "Dragoncraft";
					case "torture":
						return "Torture Implements";
					case "elfherb":
						return "Elven Herbs";
					case "pet":
						return "Mounts/Pets";
					case "trans":
						return "Transportation, " + e;
					case "guide":
						return <Link to="/rule/dungeon_guides">Dungeon Guides</Link>;
					case "foci":
						return <Link to="/rule/channel_foci">Channel Foci</Link>;
					case "herb":
						return <Link to="/rule/herbalism">Herbs</Link>;
					case "pc":
						return <Link to="/rule/pathfinder_chronicles">Pathfinder Chronicles</Link>;
				}
				return "";
			})();
			const id = ID + "-" + d;
			const verbatim = c === "x";
			const mod = c === "M";
			const price = verbatim ? a : translateGp(Number(a) || 0, mod);
			const weight = Number(b);
			const otherRows = (() => {
				switch(d) {
					case "foci":
						return (
							<tr>
								<th scope="row">Deity</th>
								<td colSpan={3}>{
									e ? <Link to={"/faith/" + String(e).toLowerCase()}>{e}</Link> : "Any"
								}</td>
							</tr>
						);
					case "herb":
						if(f) {
							return (
								<tr>
									<th id={id + "-gather"}>Gather</th>
									<td headers={id + "-gather"}>DC {e}</td>
									<th id={id + "-yield"}>Yield</th>
									<td headers={id + "-yield"}>{f}</td>
								</tr>
							);
						}
						return (
							<tr>
								<th scope="row">Gather</th>
								<td colSpan={3}>DC {e}</td>
							</tr>
						)
					case "guide": {
						const skills: {[x: string]: [string, string]} = {
							ke: ["Knowledge (engineering)", "knowledge_engineering"],
							kr: ["Knowledge (religion)", "knowledge_religion"],
							po: ["Perform (oratory)", "perform"],
							kg: ["Knowledge (geography)", "knowledge_geography"]
						};
						const [title, url] = skills[String(f)] || ["knowledge", "ERROR"];
						return (
							<tr>
								<th scope="row">Associated Skill</th>
								<td colSpan={3}><Link to={"/skill/" + url}>{title}</Link> (DC {g})</td>
							</tr>
						);
					}
				}
				return <></>
			})();
			return (
				<table><tbody>
					<tr>
						<th id={id + "-cost"} className="hl">Price</th>
						<td headers={id + "-cost"}>{price}</td>
						<th id={id + "-weight"} className={d === "guide" || d === "trans" ? undefined : "hl"}>{
							d === "guide" ? "Accuracy" : (
								d === "trans" ? "Price of Passage" : "Weight"
							)
						}</th>
						<td headers={id + "-weight"}>{
							d === "guide" ? (
								Number(e) === Number(e) ? (Number(e) < 0 ? e : <>+{e}</>) : "ERROR"
							) : ( d === "trans" ? (
								<>{
									Number(f) === Number(f) ? translateGp(Number(f) || 0) : <>&mdash;</>
								} (per mile)</>
							) : (
								verbatim ? b : (
									weight === weight ? (
										<>{
											mod && weight > 0 ? "+" : ""
										}{
											translateWeight(weight)
										}{
											(mod && weight === 0) ? "" : (weight <= 1 && weight > 0) ? " lb." : " lbs."
										}</>
									) : <>&mdash;</>
								)
							))
						}</td>
					</tr>
					<tr>
						<th scope="row" className="hl">Category</th>
						<td colSpan={3}>{cat}</td>
					</tr>
					{otherRows}
				</tbody></table>
			);
		},
		postFormatter: props => {
			const {d, g, h, i, j} = props;
			switch(d) {
				case "herb": {
					return (
						<Block size="simple">
							<Row>
								<Cell>Terrain</Cell>
								<Cell>{g}</Cell>
							</Row>
							{h ? <Row>
								<Cell>Preparation</Cell>
								<Cell>{h}</Cell>
							</Row> : ""}
							{i ? <Row>
								<Cell>Use</Cell>
								<Cell>{i}{j ? <><br /><br />{j}</> : ""}</Cell>
							</Row> : ""}
						</Block>
					);
				}
			}
			return <></>;
		}
	},
	spontalch: {
		required: ["a", "b", "c", "d", "g"],
		className: "lessRound",
		formatter: props => {
			// a - recipe bits; b - /process; c - DC; d - time; e - tools text; f - tools eq-misc link; g - type
			// brim|lunary|phos|gold|salt|urea|myrrh|wine|real|mag|qs|dw|ci|bp|ge|mw|cs|silv|sp
			const {id: ID, a, b, c, d, e, f, g} = props;
			const id = ID + "-" + d + c + `${ID}-${d}-${c}-${g}`;
			const component = (d: string) => {
				switch(d) {
					case "brim":
						return "brimstone";
					case "lunary":
						return "dew of lunary";
					case "phos":
						return "phosphorus";
					case "wine":
						return "spirit of wine";
					case "real":
						return "realgar";
					case "mag":
						return "magnesium";
					case "qs":
						return "quicksilver";
					case "dw":
						return "darkwood";
					case "ci":
						return "cold iron";
					case "bp":
						return "black powder";
					case "ge":
						return "ginger extract";
					case "mw":
						return "mugwort extract";
					case "cs":
						return "cytillesh spores";
					case "silv":
						return "silver";
					case "sp":
						return "saltpeter";
				}
				return d;
			};
			const type = (() => {
				switch (g) {
					case "weapon":
					case "tool":
					case "remedy":
						return "alchemical " + g;
				}
				return g;
			})();
			const components = String(a).split("/").map((bit => {
				const [ , what, amount ] = bit.match(/(brim|lunary|phos|gold|salt|urea|myrrh|wine|real|mag|qs|dw|ci|bp|ge|mw|cs|silv|sp)([0-9]+)/) || ["ERROR", "0"];
				return `${amount} ${component(what)}`;
			})).join(" + ");
			const tools = e || f ? (
				<Link to={"/eq-misc/" + convertTextToLink(String(f))}>{f}</Link>
			) : <>&mdash;</>;
			return (
				<table><tbody>
					<tr>
						<th scope="col" className="hl" colSpan={4}><Link to="/rule/spontaneous_alchemy">Spontaneous Alchemy</Link> Recipe</th>
					</tr>
					<tr>
						<td className="ion-text-center" colSpan={4}>{components} / {b}</td>
					</tr>
					<tr>
						<th id={id + "-dc"} className="hl">Craft DC</th>
						<td headers={id + "-dc"}>{c}</td>
						<th id={id + "tools"}>Tools</th>
						<td headers={id + "-tools"}>{tools}</td>
					</tr>
					<tr>
						<th id={id + "-time"}>Time</th>
						<td headers={id + "-time"}>{d}</td>
						<th id={id + "type"} className="hl">Type</th>
						<td headers={id + "-type"}>{type}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	craft: {
		required: [ "a", "b" ],
		className: "backOnly",
		formatter: (props) => {
			const {a, b} = props;
			// a=craft DC, b=Craft subskill
			return (
				<table><tbody>
					<tr>
						<th scope="row">Construction</th>
						<td><Link to="/skills/craft">Craft ({b})</Link> DC {a}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	craftalch: {
		required: [ "a" ],
		className: "backOnly",
		formatter: (props) => {
			return FormatObject.craft.formatter({b: "Alchemy", ...props})
		}
	},
	planet: {
		required: [ "a", "b", "c", "d", "e", "f", "g" ],
		className: "tipOnly flatStart startAlign",
		formatter: (props) => {
			const {id, a, b, c, d, e, f, g} = props;
			// a=name b=flavorful title d=diameter c=mass g=gravity e=atmosphere f=orbit
			return (
				<table><tbody>
					<tr><th scope="col" className="headerLike hl" colSpan={6}>{a}</th></tr>
					<tr><td colSpan={6} className="ion-text-center"><b>{b}</b></td></tr>
					<tr>
						<th id={id + "diameter"}>Diameter</th>
						<td headers={id + "-diameter"}>&times;{d}</td>
						<th id={id + "-mass"}>Mass</th>
						<td headers={id + "-mass"}>&times;{c}</td>
						<th id={id + "grav"}>Gravity</th>
						<td headers={id + "-grav"}>&times;{g}</td>
					</tr>
					<tr>
						<th id={id + "atmosphere"} colSpan={2}>Atmosphere</th>
						<td headers={id + "-atmosphere"}>{e}</td>
						<th id={id + "-orbit"}>Orbit</th>
						<td headers={id + "-orbit"} colSpan={2}>{f}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	simple: {
		required: ["p", "w"],
		className: "startAlign",
		formatter: (props) => {
			const {id, p, w, v} = props;
			// p=price w=weight v=verbatim
			const price = v ? p : translateGp(Number(p) || 0);
			const weight = v ? w : translateWeight(Number(w));
			return (
				<table><tbody>
					<tr>
						<th id={id + "-price"}>Price</th>
						<td headers={id + "-price"}>{price}</td>
						<th id={id + "-weight"}>Weight</th>
						<td headers={id + "-weight"}>{weight}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	siege: {
		required: ["p", "w", "a", "l", "s", "c"],
		className: "startAlign",
		formatter: (props) => {
			const {id, p, v, d, e, x, r, m, t, w, a, l, s, c, z} = props;
			// p=price (weight is always --) v=price should be printed verbatim
			//   d=damage e=critical x=range (text) r=range (ft) m=minimum range (ft)
			//   t=type w=crew a=aim l=load s=speed (ft) c=category z=size
			const range = x || (r ? (
				<>{r} ft.{
					m ? <> ({m} ft. min.)</> : ""
				}</>
			) : <>&mdash;</>);
			const category = (
				c === "i" ? "Indirect-Fire" : (
					c === "d" ? "Direct-Fire" : (
						c === "c" ? "Close Assault" : c
					)
				)
			) + (
				z ? ` (${
					z === "h" ? "Huge" : (
						z === "l" ? "Large" : (
							z === "g" ? "Gargantuan" : z
						)
					)
				})` : ""
			);
			return (
				<table><tbody>
					<tr>
						<th id={id + "-price"} className="hl">Price</th>
						<td headers={id + "-price"} colSpan={3}>{v ? p : translateGp(Number(p) || 0)}</td>
						<th id={id + "-weight"} className="hl">Weight</th>
						<td headers={id + "-weight"} colSpan={3}>&mdash;</td>
					</tr>
					<tr>
						<th id={id + "-price"} className="hl">Damage</th>
						<td headers={id + "-dmg"} colSpan={3}>{d || <>&mdash;</>}</td>
						<th id={id + "-crit"} className="hl">Critical</th>
						<td headers={id + "-crit"} colSpan={3}>{e || <>&mdash;</>}</td>
					</tr>
					<tr>
						<th id={id + "-range"} className="hl">Range</th>
						<td headers={id + "-range"} colSpan={5}>{range}</td>
						<th id={id + "-type"} className="hl">Type</th>
						<td headers={id + "-type"}>{t || <>&mdash;</>}</td>
					</tr>
					<tr>
						<th id={id + "-crew"}>Crew</th>
						<td headers={id + "-crew"}>{w}</td>
						<th id={id + "-aim"}>Aim</th>
						<td headers={id + "-aim"}>{a}</td>
						<th id={id + "-load"}>Load</th>
						<td headers={id + "-load"}>{l}</td>
						<th id={id + "-speed"}>Speed</th>
						<td headers={id + "-speed"}>{s} ft.</td>
					</tr>
					<tr>
						<th scope="row" colSpan={2} className="hl">Category</th>
						<td colSpan={6}>{category}</td>
					</tr>
				</tbody></table>
			);
		}
	},
	siegeammo: {
		required: ["p", "w"],
		className: "startAlign",
		formatter: (props) => {
			const {id, p, w} = props;
			// p=price w=weight
			return (
				<table><tbody>
					<tr>
						<th id={id + "-price"} className="hl">Price</th>
						<td headers={id + "-price"} colSpan={2}>{translateGp(Number(p) || 0)}</td>
						<th id={id + "-weight"} className="hl">Weight</th>
						<td headers={id + "-weight"}>{translateWeight(Number(w))} lbs.</td>
					</tr>
					<tr>
						<th scope="row" className="hl">Category</th>
						<td colSpan={4}>Ammunition (Siege Engine)</td>
					</tr>
				</tbody></table>
			);
		}
	},
	sbook: {
		required: ["v"],
		className: "startAlign lessRound",
		formatter: (props) => {
			const {o, p, v, r} = props;
			// o=opposition schools, p=protection, v=value, r=value w/prep ritual
			return (
				<table><tbody>
					{o ? <tr>
						<th scope="row" className="hl">Opposition</th>
						<td>{o}</td>
					</tr> : ""}
					{p ? <tr>
						<th scope="row" className="hl">Protection</th>
						<td>{p}</td>
					</tr> : ""}
					<tr>
						<th scope="row" className="hl">Value</th>
						<td>{translateGp(Number(v) || 0)}{
							r ? ` (${translateGp(Number(r) || 0)} with the preparation ritual)` : ""
						}</td>
					</tr>
				</tbody></table>
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
			possiblyRequired && possiblyRequired.some(
				pr => !(
					pr.every(x => others[x] !== undefined)
					|| pr.every(x => others[x] === undefined)
				)
			)
		)
	) {
		return <p><strong>ERROR &lt;Tabular&gt; element missing required prop(s).</strong></p>;
	}
	return (
		<div className={"sideNoteWrap noIcon" + (className ? " " + className : "")}>
			<ScrollContainer id={cId + "-scrollcontainer"}>
				{formatter({...others, id: cId})}
			</ScrollContainer>
			{postFormatter ? postFormatter({...others, id: cId}) : <></>}
		</div>
	);
};

export default Tabular
