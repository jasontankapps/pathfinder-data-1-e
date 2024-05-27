import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { caretDown, caretUp } from 'ionicons/icons';
import Markdown from 'react-markdown';

type Datum = string | number | [ number, string ] | [ string, string ];

type RawDatum = null | Datum;

type Types = "gp" | "lbs" | "gp+" | "lbs+" | "bonus" | "num" | null;

type TriggerSortFunc = (index: number, descending: boolean) => void;

interface ThProps {
	index: number
	sorter: TriggerSortFunc
	initialSort?: boolean
	active: boolean
	children: string
}

interface TdProps {
	datum: Datum
	type: Types
}

export interface Table {
	// unique identifier
	id: string
	// headers
	headers: string[]
	// declares what type of data each column has
	types: Types[]
	// the rows that will form a table
	data: RawDatum[][]
	// the index of the column that is initially sorted
	initialColumn: number
	// what to print if a cell is `null` (defaults to &mdash;)
	nullValue?: string
	// the CSS class to assign to the table
	className: string
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

const FIRST_CHAR = String.fromCodePoint(0x0001);
const FINAL_CHAR = String.fromCodePoint(0x10FFFF);
const getCheckableValue = (item: RawDatum, nullish: string): string => {
	if(item === null || item === "~~") {
		return nullish;
	} else if (Array.isArray(item)) {
		return getCheckableValue(item[0], nullish);
	}
	return typeof(item) === "number" ? String(item) : item;
};
const descendingSort = (a: RawDatum, b: RawDatum) => {
	return getCheckableValue(a, FINAL_CHAR).localeCompare(getCheckableValue(b, FINAL_CHAR), 'en', { numeric: true })
};
const ascendingSort = (a: RawDatum, b: RawDatum) => {
	return getCheckableValue(b, FIRST_CHAR).localeCompare(getCheckableValue(a, FIRST_CHAR), 'en', { numeric: true })
};

const DirectionIcon: FC<{down:boolean}> = ({down}) => {
	return <IonIcon className="sortArrow" icon={down ? caretDown : caretUp} />;
};

const Th: FC<ThProps> = ({index, sorter, initialSort = false, children, active}) => {
	const [ descending, setDescending ] = useState(initialSort);
	const onClick = useCallback(() => {
		sorter(index, !descending);
		setDescending(!descending);
	}, [index, sorter]);
	return <th onClick={onClick} className="sortable"><Markdown>{children}</Markdown> {active ? <DirectionIcon down={descending} /> : <></>}</th>;
};

const Td: FC<PropsWithChildren<TdProps>> = ({ datum, type }) => {
	let text = "";
	const [ test, output ] = Array.isArray(datum) ? datum : [ datum, datum ];
	switch(type) {
		case "gp":
			// RawDatum is an number
			if(typeof test !== "number") {
				text = `Invalid GP number [${test}]`;
			} else {
				text = typeof output === "number" ? translateGp(output) : output;
			}
			break;
		case "gp+":
			// RawDatum is an number
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
					? `${output.toLocaleString()} lb${output > 1 || output < -1 ? "s": ""}.`
					: output;
			}
			break;
		case "lbs+":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid LB+ number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output >= 0 ? "+" : ""}${output.toLocaleString()} lb${output > 1 || output < -1 ? "s": ""}.`
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
			text = typeof output === "string" ? output : String(output);
	}
	return <td><Markdown>{text}</Markdown></td>;
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const { id, headers, types, data, initialColumn, className, nullValue = "&mdash;" } = table;
	const [rows, setRows] = useState(data);
	const [active, setActive] = useState(initialColumn);
	const sorter: TriggerSortFunc = useCallback((index, descending) => {
		const newRows = [...rows];
		const sortfunc = descending ? descendingSort : ascendingSort;
		newRows.sort((a, b) => sortfunc(a[index], b[index]));
		setActive(index);
		setRows(newRows);
	}, [rows, setRows, setActive]);
	const headerItems = useMemo(() => headers.map((th, i) => {
		return <Th
			key={`table/${id}/header/${i}`}
			index={i}
			initialSort={i === initialColumn}
			active={i === active}
			sorter={sorter}
		>{th}</Th>;
	}), [headers, id, initialColumn, sorter, active]);
	const rowItems = useMemo(() => rows.map((row, i) => {
		const cells = row.map((cell, j) => {
			return <Td type={types[j]} datum={cell === null ? nullValue : cell} key={`table/${id}/row/${i}/cell/${j}`} />
		});
		return <tr key={`table/${id}/row/${i}`}>{cells}</tr>;
	}), [rows, types, nullValue, id]);
	return (
		<table key={`table/${id}`} className={className}>
			<tr>{headerItems}</tr>
			{rowItems}
		</table>
	);
};

export default DisplayTable;
