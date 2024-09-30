import { AnchorHTMLAttributes, ClassAttributes, FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { IonIcon, IonRippleEffect } from '@ionic/react';
import { caretDown, caretUp, ellipse } from 'ionicons/icons';
import Markdown, { ExtraProps } from 'react-markdown';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Datum, RawDatum, Table, TableColumnInfoTypes } from '../types';
import Link from './Link';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';

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
}

interface TdRouterLinkProps {
	datum: Datum
}

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;

const a = (props: MDaProps) => {
	const { href = "", children, id, "aria-label": ariaLabel } = props;
	if(href.match(/^\//)) {
		// Initial slash indicates this needs a ripple.
		return <Link to={href} id={id} aria-label={ariaLabel}>{children}<IonRippleEffect /></Link>
	} else if (href.match(/^#/)) {
		// Hash indicates internal link
		//const m = href.match(/user-content-fn-(.+)/);
		// Trying to make create the ID property that the footnote link will be pointing at,
		//   since the plugin apparently doesn't do that automatically...
		const scrollWithOffset = (el: HTMLElement) => {
			const w = document.getElementsByTagName("ion-content");
			const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
			const yOffset = id ? 0 : -80;
			//window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
			const element = [...w].pop();
			element && element.scrollByPoint(0, yCoordinate + yOffset, 500);
		}
		return <HashLink aria-label={ariaLabel} id={id} scroll={scrollWithOffset} to={href}>{children}</HashLink>
	}
	return <Link to={"/" + href} id={id} aria-label={ariaLabel}>{children}</Link>
};
const components = { a };

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
	}, [index, sorter, descending]);
	if(sortable) {
		return (
			<th className="ion-activatable sortable" onClick={onClick}>
				<div>
					<IonRippleEffect />
					<Markdown components={components}>{children}</Markdown>
					{active ? <DirectionIcon down={descending} /> : <IonIcon className="sortNil" icon={ellipse} />}
				</div>
			</th>
		);
	}
	return (
		<th>
			<Markdown components={components}>{children}</Markdown>
		</th>
	);
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
	return (
		<td>
			<Markdown components={components}>{text}</Markdown>
		</td>
	);
};

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum }) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	// datum will be either [ linkString, text ] or [ sortString, linkString, text ]
	const [ one, two, three ] = Array.isArray(datum) ? datum : [ "", `MISSING LINK: ${datum}` ];
	const link = three ? two : one;
	const output = three || two;
	const click = useCallback(() => { history.push(`/${link}`); dispatch(goTo(`/${link}`)); }, [link, dispatch, history]);
	return (
		<td className="ion-activatable cell-link" onClick={click}>
			{output}
			<IonRippleEffect />
		</td>
	);
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const { id, headers, types, data, initialColumn, className, nullValue = "&mdash;", ripples = [], sortable = true } = table;
	const [rows, setRows] = useState(data);
	const [active, setActive] = useState(initialColumn);
	const sorter: TriggerSortFunc = useCallback((index, descending) => {
		// sorter(index: number, descending: boolean)
		//   Returns the boolean opposite of descending
		// This function reorganizes the rows and sets the 'active' column
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
			sortable={sortable && (types[i] !== 0)}
		>{th}</Th>;
	}), [headers, id, initialColumn, sorter, active]);
	const rowItems = useMemo(() => rows.map((row, i) => {
		const cells = row.map((cell, j) => {
			return (ripples.indexOf(j) > -1) ?
				<TdRouterLink
					datum={cell === null ? nullValue : cell}
					key={`table/${id}/row/${i}/cell/${j}`}
				/>
			:
				<Td
					type={types[j]}
					datum={cell === null ? nullValue : cell}
					key={`table/${id}/row/${i}/cell/${j}`}
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
