import {
	FC,
	PropsWithChildren
} from 'react';
import Markdown from 'react-markdown';
import { Datum, ColumnDataType } from '../../types';
import convertLinks from '../convertLinks';
import components from './Components';

interface TdRouterLinkProps {
	datum: Datum
	align?: "start" | "end"
}

interface TdProps extends TdRouterLinkProps {
	type?: ColumnDataType
}

const translateGp = (gp: number, adjustment: boolean = false): string => {
	if(gp !== gp) {
		// NaN;
		return `[NaN]`;
	}
	const sign = adjustment && gp >= 0 ? "+" : "";
	if(Math.floor(gp) === gp) {
		return `${sign}${gp.toLocaleString()} gp`;
	}
	const sp = gp * 10;
	if(Math.floor(sp) === sp) {
		return `${sign}${sp} sp`;
	}
	return `${sign}${sp * 10} cp`;
};

const Td: FC<PropsWithChildren<TdProps>> = ({ datum, type, align }) => {
	let text = "";
	const [ test, output ] = Array.isArray(datum) ? datum : [ datum, datum ];
	switch(type) {
		case "gp":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid GP number [${test}]`;
			} else {
				text = typeof output === "number" ? translateGp(output) : output;
			}
			break;
		case "gp+":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid GP+ number [${test}]`;
			} else {
				text = typeof output === "number" ? translateGp(output, true) : output;
			}
			break;
		case "lbs":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid LB number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output.toLocaleString()} lb${output > 1 || output < -1 || !output ? "s": ""}.`
					: output;
			}
			break;
		case "lbs+":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid LB+ number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output >= 0 ? "+" : ""}${output.toLocaleString()} lb${output > 1 || output < -1 || !output ? "s": ""}.`
					: output;
			}
			break;
		case "bonus":
			// RawDatum is an interger
			if(typeof test !== "number") {
				text = `Invalid BONUS number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output >= 0 ? "+" : ""}${output.toLocaleString()}`
					: output;
			}
			break;
		case "pct":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid PCT number [${test}]`;
			} else {
				text = typeof output === "number"
					? output.toLocaleString() + "%"
					: output;
			}
			break;
		case "num":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid NUM number [${test}]`;
			} else {
				text = typeof output === "number"
					? output.toLocaleString()
					: output;
			}
			break;
		default:
			text = convertLinks([typeof output === "string" ? output : String(output)]);
	}
	return (
		<td className={align === "end" ? "ion-text-end" : (align === "start" ? "ion-text-start" : undefined)}>
			<Markdown components={components}>{text}</Markdown>
		</td>
	);
};

export default Td;
