import { FC, useContext, ReactNode, Fragment as F } from 'react';
import { IdContext } from './contexts';
import ScrollContainer from './ScrollContainer';
import { convertTextToLink } from './convertLinks';
import Link from './Link';

interface KineticProps {
	id: string
	source: [string, number][]
	el: string
	type: string
	l: number // 0 means "-"
	burn: 0 | 1 | 2 | 3 | 4
	prereq?: ReactNode
	assoc?: ReactNode
	btype?: string
	dmg?: string
	save?: string
	sr?: string
}

export const Kinetic: FC<KineticProps> = (props) => {
	const {
		id, source,
		el, type, l, burn,
		prereq, assoc,
		btype, dmg,
		save, sr
	} = props;
	const cId = useContext(IdContext) + id;

	const sourcetext = source.map((pair, i) => {
		const [s, pg] = pair;
		const url = convertTextToLink(s);
		return <F key={cId + "-kinetic-" + url}>{i ? ", " : ""}<Link to={"/source/" + url}>{s}</Link> pg. ${pg}</F>;
	});

	return (
		<div className="sideNoteWrap"><ScrollContainer id={cId + "-kinetic-scrollwrap"}>
			<table><tbody>
				<tr><th scope="row">Source</th><td colSpan={3}>{sourcetext}</td></tr>
				<tr>
					<th id={cId + "-el"}>Element</th><td headers={cId + "-el"}>{el}</td>
					<th id={cId + "-type"}>Type</th><td headers={cId + "-type"}>{type}</td>
				</tr>
				<tr>
					<th id={cId + "-lev"}>Level</th><td headers={cId + "-lev"}>{l || "-"}</td>
					<th id={cId + "-burn"}>Burn</th><td headers={cId + "-burn"}>{burn}</td>
				</tr>
				{prereq ? <tr><th scope="row">Prerequisites</th><td colSpan={3}>{prereq}</td></tr> : ""}
				{assoc ? <tr><th scope="row">Associated Blasts</th><td colSpan={3}>{assoc}</td></tr> : ""}
				<tr>
					<th id={cId + "-bt"}>Blast Type</th><td headers={cId + "-btype"}>{btype}</td>
					<th id={cId + "-dmg"}>Damage</th><td headers={cId + "-dmg"}>{dmg}</td>
				</tr>
				{save
					? (sr
						? <tr>
							<th id={cId + "-save"}>Save</th><td headers={cId + "-save"}>{save}</td>
							<th id={cId + "-sr"}>SR</th><td headers={cId + "-sr"}>{sr}</td>
						</tr>
						: <tr><th scope="row">Save</th><td colSpan={3}>{save}</td></tr>
					) : ""
				}
			</tbody></table>
		</ScrollContainer></div>
	);
};

export default Kinetic
