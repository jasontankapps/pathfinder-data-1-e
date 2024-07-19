import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { IonIcon, IonRippleEffect } from '@ionic/react';
import { caretDown, caretUp, ellipse } from 'ionicons/icons';
import Markdown from 'react-markdown';
import { Datum, RawDatum, Table, TableColumnInfoTypes } from '../types';

type TriggerSortFunc = (index: number, descending: boolean) => boolean;

interface ThProps {
	index: number
	sorter: TriggerSortFunc
	initialSort?: boolean
	active: boolean
	children: string
	sortable: boolean
}

interface TdProps {
	datum: Datum
	type: TableColumnInfoTypes
	hasRipple: boolean
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
	return getCheckableValue(a, FINAL_CHAR).localeCompare(getCheckableValue(b, FINAL_CHAR), 'en', { numeric: true });
};
const ascendingSort = (a: RawDatum, b: RawDatum) => {
	return getCheckableValue(b, FINAL_CHAR).localeCompare(getCheckableValue(a, FINAL_CHAR), 'en', { numeric: true });
};

const DirectionIcon: FC<{down:boolean}> = ({down}) => {
	return <IonIcon className="sortArrow" icon={down ? caretDown : caretUp} />;
};

const Th: FC<ThProps> = ({index, sorter, initialSort = false, children, active, sortable}) => {
	const [ descending, setDescending ] = useState(initialSort);
	const onClick = useCallback(() => {
		const isDescending = sorter(index, !descending);
		setDescending(isDescending);
	}, [index, sorter]);
	if(sortable) {
		return (
			<th>
				<div className="sortable" onClick={onClick}>
					<Markdown>{children}</Markdown>
					{active ? <DirectionIcon down={descending} /> : <IonIcon className="sortNil" icon={ellipse} />}
				</div>
			</th>
		);
	}
	return (
		<th>
			<Markdown>{children}</Markdown>
		</th>
	);
};

const Td: FC<PropsWithChildren<TdProps>> = ({ datum, type, hasRipple }) => {
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
	return <td className={hasRipple ? "ion-activatable" : ""}><Markdown>{text}</Markdown>{hasRipple? <IonRippleEffect /> : <></>}</td>;
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const { id, headers, types, data, initialColumn, className, nullValue = "&mdash;", ripples = [] } = table;
	const [rows, setRows] = useState(data);
	const [active, setActive] = useState(initialColumn);
	const sorter: TriggerSortFunc = useCallback((index, descending) => {
		const newRows = [...rows];
		const normal = (active !== index) || descending;
		const sortfunc = normal ? descendingSort : ascendingSort;
		newRows.sort((a, b) => sortfunc(a[index], b[index]));
		setActive(index);
		setRows(newRows);
		return normal;
	}, [rows, setRows, active, setActive]);
	const headerItems = useMemo(() => headers.map((th, i) => {
		return <Th
			key={`table/${id}/header/${i}`}
			index={i}
			initialSort={i === initialColumn}
			active={i === active}
			sorter={sorter}
			sortable={types[i] !== 0}
		>{th}</Th>;
	}), [headers, id, initialColumn, sorter, active]);
	const rowItems = useMemo(() => rows.map((row, i) => {
		const cells = row.map((cell, j) => {
			return <Td
				type={types[j]}
				datum={cell === null ? nullValue : cell}
				key={`table/${id}/row/${i}/cell/${j}`}
				hasRipple={ripples.indexOf(j) > -1}
			/>;
		});
		return <tr key={`table/${id}/row/${i}`}>{cells}</tr>;
	}), [rows, types, nullValue, id, ripples]);
	return (
		<div className="tableWrap">
			<table key={`table/${id}`} className={className}>
				<thead>
					<tr>{headerItems}</tr>
				</thead>
				<tbody>
					{rowItems}
				</tbody>
			</table>
		</div>
	);
};

export default DisplayTable;
