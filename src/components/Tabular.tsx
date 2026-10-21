import { FC, ReactNode, useContext } from 'react';
import ScrollContainer from './ScrollContainer';
import { IdContext } from './contexts';

interface BaseProps {
	id?: string
	a?: ReactNode
	b?: ReactNode
	c?: ReactNode
	d?: ReactNode
	e?: ReactNode
}
type InfoProps = "a" | "b" | "c" | "d" | "e";

interface FormatProps {
	required: InfoProps[]
	formatter: (x: BaseProps) => ReactNode
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
	}
};

type Format = keyof typeof FormatObject

interface TabularProps extends BaseProps {
	format: Format
}

const Tabular: FC<TabularProps> = (props) => {
	const {format, id, ...others} = props;
	const cId = useContext(IdContext) + "-Tabular" + (id ? "-" + id : "");
	const {required, formatter} = FormatObject[format];
	if(!required.every(x => others[x])) {
		return <p><strong>ERROR &lt;Tabular&gt; element missing required prop(s).</strong></p>;
	}
	return (
		<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id={cId + "-scrollcontainer"}>
			{formatter({...others, id: cId})}
		</ScrollContainer></div>
	);
};

export default Tabular
