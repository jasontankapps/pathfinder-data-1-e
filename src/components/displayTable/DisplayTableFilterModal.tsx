import {
	Dispatch,
	FC,
	useCallback,
	useMemo,
	useState
} from 'react';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonList,
	IonModal,
	IonPicker,
	IonPickerColumn,
	IonPickerColumnOption,
	IonText,
	IonTitle,
	IonToggle,
	IonToolbar,
	useIonAlert,
	useIonToast
} from '@ionic/react';
import {
	close,
	closeCircle,
	filter as filterIcon,
	repeat
} from 'ionicons/icons';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { Filter, RawDatum, Column } from '../../types';
import { checkForEncodedLink } from '../convertLinks';

type SortableCell = [RawDatum, number];
type SortableRow = [SortableCell[], number];

interface FilterObject {
	text: string
	otherText: string
	options: string[]
	toggles: number[][]
}

type SaveFunc = (
	hiddenHeaders: number[],
	hiddenRows: number[]
) => void;
interface FilterProps {
	columns: Column[]
	rows: SortableRow[]
	currentHiddenRows: number[]
	currentHiddenHeaders: number[]
	filter?: Filter[]
	open: boolean
	setOpen: Dispatch<boolean>
	saveFunc: SaveFunc
}
const getLinkText = (input: string) => {
	const m = checkForEncodedLink(input);
	return m ? m[2] : input;
};

const getValue = (x: RawDatum) => {
	return Array.isArray(x) ? x[0] : x;
};

interface RowItem {
	index: number
	style: {
		[key: string]: any
	}
	data: {
		rowStates: boolean[]
		rowTitles: string[]
	}
}

// IonPicker expects number | string | undefined, but we only use numbers...
const clamp = (input: string | number | undefined, max: number, min: number = 0): number => {
	const n = Number(input);
	if(n !== n) {
		return 0;
	} else if (n > max) {
		return max;
	} else if (n < min) {
		return min;
	}
	return n;
};

const FilterOption: FC<{
	filter: FilterObject,
	index: number,
	togglingFunc: (output: number[], value: string, to: boolean | null) => void
}> = (props) => {
	const { filter, index, togglingFunc } = props;
	const { text, options, toggles } = filter;
	const [currentValue, setCurrentValue] = useState(0);
	const [open, setOpen] = useState(false);
	return (
		<IonItem>
			<IonModal className="pickerSheet" isOpen={open} onDidDismiss={() => setOpen(false)} breakpoints={[0, 1]} initialBreakpoint={1}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Filter Table Content</IonTitle>
						<IonButtons slot="end">
							<IonButton color="primary" onClick={() => setOpen(false)}>Done</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonPicker class="myPicker">
						<IonPickerColumn
							value={currentValue}
							onIonChange={e => setCurrentValue(clamp(e.detail.value, options.length - 1))}
						>
							<div slot="prefix">Where {text}</div>
							{options.map((opt, i) =>
								<IonPickerColumnOption key={`filter${index}option${i}:${opt}`} value={i}>
									{opt}
								</IonPickerColumnOption>
							)}
						</IonPickerColumn>
					</IonPicker>
				</IonContent>
			</IonModal>
			<IonLabel className="picker" onClick={() => setOpen(true)}>Where {text}: <IonText className="pickedText">{options[currentValue]}</IonText></IonLabel>
			<IonButton slot="end" color="success" onClick={() => togglingFunc(toggles[currentValue], options[currentValue], true)}>On</IonButton>
			<IonButton slot="end" color="secondary" onClick={() => togglingFunc(toggles[currentValue], options[currentValue], null)}><IonIcon slot="icon-only" src="/icons/overlap.svg" /></IonButton>
			<IonButton slot="end" color="danger" onClick={() => togglingFunc(toggles[currentValue], options[currentValue], false)}>Off</IonButton>
		</IonItem>
	);
};

const DisplayTableFilterModal: FC<FilterProps> = (props) => {
	const {
		columns,
		rows, // sortedRowsWithBothOriginalIndices
		currentHiddenRows,
		currentHiddenHeaders,
		filter,
		open,
		setOpen,
		saveFunc
	} = props;
	const [columnStates, setColumnStates] = useState<boolean[]>([]);
	const [rowStates, setRowStates] = useState<boolean[]>([]);
	const [modified, setModified] = useState<boolean>(false);
	const [filterObjects, setFilterObjects] = useState<null | FilterObject[]>(null);
	const rowTitles = rows.map(sortableRow => {
		const title = sortableRow[0][0][0];
		if(Array.isArray(title)) {
			return getLinkText(title[1]);
		} else if (typeof title !== "string") {
			return String(title);
		}
		return getLinkText(title);
	});

	const headers = columns.slice(1).map(col => col.header);

	const onLoad = useCallback(() => {
		setModified(false);
		const cols: boolean[] = [];
		for(let x = 0; x < headers.length; x++) {
			// we have to account for the fact that currentHiddenHeaders keeps the
			//   original 0 index, and this modal needs to omit that.
			cols.push(currentHiddenHeaders.every(y => y !== (x + 1)));
		}
		setColumnStates(cols);
		const rs: boolean[] = [];
		rows.forEach(pair => {
			const [, i] = pair;
			rs.push(currentHiddenRows.every(r => r !== i));
		});
		setRowStates(rs);
		// Set up filters
		if(filter) {
			const filters: FilterObject[] = [];
			filter.forEach((f, fi) => {
				const toggles: number[][] = [];
				const {col, labels, header} = f;
				const options: string[] = [];
				let how = "is";
				let other = "isn't";
				if(f.range) {
					const [ min, max ] = f.range;
					let x = min, i = 0;
					while(x <= max) {
						const found: number[] = [];
						rows.forEach((row, i) => {
							const test = getValue(row[0][col][0]) as number;
							if(test === x) {
								found.push(i);
							}
						});
						toggles.push(found);
						options.push(labels ? labels[i++] : `${x}`);
						x++;
					}
				} else if (f.has) {
					how = "includes";
					other = "doesn't include";
					const has = f.has;
					has.forEach((h, i) => {
						toggles.push([]);
						options.push(labels ? labels[i] : h)
					});
					if(f.word) {
						const hasRx = has.map(h => new RegExp(`\\b${h}\\b`));
						rows.forEach((row, i) => {
							const test = String(getValue(row[0][col][0]));
							hasRx.forEach((looking, j) => {
								if(test.match(looking)) {
									toggles[j].push(i);
								}
							});
						});
					} else {
						rows.forEach((row, i) => {
							const test = String(getValue(row[0][col][0]));
							has.forEach((looking, j) => {
								if(test.indexOf(looking) > -1) {
									toggles[j].push(i);
								}
							});
						});
					}
				} else if (f.equals) {
					const equals = f.equals;
					equals.forEach((e, i) => {
						toggles.push([]);
						options.push(labels ? labels[i] : `${e}`)
					});
					rows.forEach((row, i) => {
						const test = getValue(row[0][col][0]);
						equals.forEach((looking, j) => {
							if(test === looking) {
								toggles[j].push(i);
							}
						});
					});
				} else {
					console.log(`Invalid option in filter ${fi}.`);
					return;
				}
				// Add filter to list of filters
				const obj: FilterObject = {
					text: `${header || headers[col - 1]} ${how}`,
					otherText: `${header || headers[col - 1]} ${other}`,
					options,
					toggles
				};
				filters.push(obj);
			});
			setFilterObjects(filters);
		}
	}, [headers, rows, currentHiddenHeaders, currentHiddenRows, filter, setFilterObjects]);

	const rowVisibilityData = useMemo(() => {
		return {rowTitles, rowStates};
	}, [rowTitles, rowStates]);

	const [doAlert] = useIonAlert();
	const [toast, closeToast] = useIonToast();
	const toggleAllHeaders = (bool: boolean) => {
		setColumnStates(columnStates.map(() => bool));
		setModified(true);
	};
	const toggleAllRows = (bool: boolean) => {
		setRowStates(rowStates.map(x => bool));
		setModified(true);
		closeToast().then(() => toast({
			message: `Toggled ${bool ? "ON" : "OFF"} all rows.`,
			color: bool ? "success" : "danger",
			duration: 2500,
			position: "top"
		}));
	};
	const maybeCancel = () => {
		if(!modified) {
			setOpen(false);
		} else {
			doAlert({
				header: "Unsaved Work",
				message: "Are you sure you want to close this without saving?",
				buttons: [
					{
						text: "Cancel",
						role: "cancel"
					},
					{
						text: "Yes, Close",
						role: "confirm",
						handler: () => setOpen(false)
					}
				]
			});
		}
	};
	const toggleHeader = (i: number) => {
		// Toggle the header at index `i`
		const newHeaders = [...columnStates];
		newHeaders[i] = !newHeaders[i];
		setColumnStates(newHeaders);
		setModified(true);
	};
	const toggleRow = (i: number) => {
		// Toggle the row at index `i`
		const newRows = [...rowStates];
		newRows[i] = !newRows[i];
		setRowStates(newRows);
		setModified(true);
	};

	const doSave = () => {
		if(!modified) {
			// No changes to save.
			setOpen(false);
			return;
		}
		// Calculate data
		const hiddenHeaders: number[] = [];
		columnStates.forEach((bool, i) => {
			if(!bool) {
				// Hidden column
				// Add 1 because we omit the Title (index 0) in this modal
				hiddenHeaders.push(i + 1);
			}
		});
		const hiddenRows: number[] = [];
		rowStates.forEach((bool, i) => {
			if(!bool) {
				// format: [ [...row], originalRowIndex ]
				hiddenRows.push(rows[i][1]);
			}
		});
		// Save data
		saveFunc(hiddenHeaders, hiddenRows);
		// Close
		setOpen(false);
	};
	const toggleRows = (output: number[], text: string, value: string, bool: boolean) => {
		const newRows = [...rowStates];
		let total = 0;
		output.forEach(i => {
			if(newRows[i] !== bool) {
				newRows[i] = bool;
				total++;
			}
		});
		setRowStates(newRows);
		setModified(true);
		closeToast().then(() => toast({
			message: `Toggled ${bool ? "ON" : "OFF"} ${total} rows where ${text} ${value}.`,
			color: bool ? "success" : "danger",
			duration: 2500,
			position: "top"
		}));
	};
	const intersectRows = (output: number[], text: string, value: string) => {
		let total = 0;
		let saved = 0;
		const newRows = rowStates.map((r, i) => {
			if((output.indexOf(i) === -1) && r) {
				// If this is NOT in the target output,
				//   AND it's already on,
				// THEN toggle it off
				total++;
				return false;
			}
			r && saved++;
			return r;
		});
		setRowStates(newRows);
		setModified(true);
		closeToast().then(() => toast({
			message: `Toggled OFF ${total} rows where ${text} ${value}, leaving ${saved} rows ON.`,
			color: "secondary",
			duration: 2500,
			position: "top"
		}));
	};
	const Row = ({data, index, style}: RowItem) => (
		<IonItem style={style} lines="full" className="itemLike">
			<IonToggle
				labelPlacement="start"
				checked={rowStates[index]}
				onIonChange={() => toggleRow(index)}
			>{data.rowTitles[index]}</IonToggle>
		</IonItem>
	);
	return (
		<IonModal isOpen={open} onIonModalDidDismiss={() => setOpen(false)} onIonModalWillPresent={onLoad}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Filter Table</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={maybeCancel}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="full">
					<IonItem>
						<IonLabel>Toggle all headers</IonLabel>
						<IonButton slot="end" color="success" onClick={() => toggleAllHeaders(true)}>On</IonButton>
						<IonButton slot="end" color="danger" onClick={() => toggleAllHeaders(false)}>Off</IonButton>
					</IonItem>
					<IonItemDivider>Table Headers</IonItemDivider>
					{headers.map((oh, i) => (
						<IonItem key={`head${i}/-/${oh}`}>
							<IonToggle
								labelPlacement="start"
								checked={columnStates[i]}
								onIonChange={() => toggleHeader(i)}
							>{oh}</IonToggle>
						</IonItem>
					))}
					<IonItemDivider>Table Content</IonItemDivider>
					<IonItem>
						<IonLabel>Toggle all rows</IonLabel>
						<IonButton slot="end" color="success" onClick={() => toggleAllRows(true)}>On</IonButton>
						<IonButton slot="end" color="danger" onClick={() => toggleAllRows(false)}>Off</IonButton>
					</IonItem>
					{ !filterObjects ? <></> :
						filterObjects.map((f, i) =>
							<FilterOption key={`filter${i}:${f.text}`} filter={f} index={i} togglingFunc={
								(output: number[], value: string, to: boolean | null) =>
									to === null
										? intersectRows(output, f.otherText, value)
										: toggleRows(output, f.text, value, to)
							} />
						)
					}
					<IonItem>
						<IonLabel className="ion-text-center">
							<p>Selected rows below will be shown in the table.</p>
						</IonLabel>
					</IonItem>
				</IonList>
				<AutoSizer className="listLike">{
					({height, width}) =>
						<FixedSizeList
							height={height * 0.75}
							width={width}
							itemCount={rowTitles.length}
							itemSize={50}
							itemData={rowVisibilityData}
						>{Row}</FixedSizeList>
				}</AutoSizer>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={maybeCancel} color="warning">
							<IonLabel>Cancel</IonLabel>
							<IonIcon slot="start" icon={close} />
						</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton onClick={doSave} color="success">
							<IonLabel>Save</IonLabel>
							<IonIcon slot="start" icon={filterIcon} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

export default DisplayTableFilterModal;
