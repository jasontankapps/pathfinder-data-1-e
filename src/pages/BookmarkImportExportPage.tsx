import { Clipboard } from "@capacitor/clipboard";
import { useRef, useState, FC, RefObject, useEffect, Dispatch } from 'react';
import { closeCircle, close as closeIcon, copy } from 'ionicons/icons';
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
	IonRadio,
	IonRadioGroup,
	IonText,
	IonTextarea,
	IonTitle,
	IonToggle,
	IonToolbar,
	useIonToast,
	UseIonToastResult
} from '@ionic/react';
import { doesPageExist } from "../components/getPageName";
import { BookmarkGroup, Color, importBookmarksGroup } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import './Page.css';

const toggle = (item: Color, all: Color[]): Color[] => {
	if(all.indexOf(item) > -1) {
		return all.filter(x => x !== item);
	}
	return [...all, item];
};
const clip = (toaster: UseIonToastResult, ref: RefObject<HTMLIonTextareaElement>) => {
	const [toast, closeToast] = toaster;
	if(ref && ref.current && ref.current.value) {
		Clipboard.write({string: ref.current.value}).then(
			() => closeToast().then(
			 	() => toast({
					message: `Copied text to clipboard`,
					color: "success",
					duration: 1500,
					position: "middle"
				})
			)
		);
	} else {
		closeToast().then(
			() => toast({
			   message: `Nothing to copy`,
			   color: "danger",
			   duration: 1500,
			   position: "middle"
		   })
	   );
	}
};

function assertingAsBookmarkGroup(value: unknown): asserts value is BookmarkGroup[] {}

const maybeLaunchModal = (
	setter: Dispatch<BookmarkGroup[]>,
	ref: RefObject<HTMLIonTextareaElement>,
	order: Color[],
	toaster: UseIonToastResult
): void => {
	let msg = "No data to import.";
	if(ref && ref.current && ref.current.value) {
		let data: any;
		try {
			data = JSON.parse(ref.current.value);
		} catch(e) {
			data = null;
			msg = "ERR-0.1 Invalid JSON format"
		}
		if(data) {
			// Test data for validity
			if(!Array.isArray(data)) {
				msg = "ERR-0.2 Invalid Array";
			} else if(data.every(x => {
				if(!x || typeof x !== "object") {
					msg = "ERR-1.1 Malformed item";
					return false; // data.every fails
				}
				const { color, title, contents, hidden, ...etc } = x;
				if (
					Object.keys(etc).length > 0
					|| title === undefined
					|| !color
					|| !contents
					|| hidden === undefined
					|| typeof title !== "string"
					|| typeof color !== "string"
					|| order.indexOf(color as Color) === -1
					|| !Array.isArray(contents)
					|| !(hidden === true || hidden === false)
				) {
					msg = "ERR-1.1.2 Malformed format";
					return false; // data.every fails
				} else if (!contents.every((pair: any) => {
					if(!Array.isArray(pair)) {
						msg = "ERR-1.2 Malformed formatting";
						return false; // contents.every fails
					}
					const [link, title, ...etc] = pair;
					if(etc.length > 0 || typeof link !== "string" || typeof title !== "string" || !doesPageExist(link)) {
						msg = "ERR-1.3 Malformed contents";
						return false; // contents.every fails
					}
					return true; // contents.every SUCCEEDS
				})) {
					return false; // data.every fails
				}
				return true; // data.every SUCCEEDS
			})) {
				assertingAsBookmarkGroup(data);
				setter(data);
				return;
			}
		}
	}
	const [toast, closeToast] = toaster;
	closeToast().then(() => toast({
		message: msg,
		header: "Unable to Import",
		color: "danger",
		duration: 3500,
		position: "middle"
	}));
};

// IonPicker expects number | string | undefined, but we only use numbers...
const clamp = (input: string | number | undefined, max: number, min: number = 0): number => {
	const n = Number(input);
	if(n !== n) {
		return min;
	} else if (n > max) {
		return max;
	} else if (n < min) {
		return min;
	}
	return n;
};

interface ModalProps {
	importing: BookmarkGroup[]
	close: () => void
	toaster: UseIonToastResult
}

const ImportModal: FC<ModalProps> = (props) => {
	const { db, order, ...colors } = useAppSelector(state => state.bookmarks);
	const { importing, close, toaster } = props;
	const [colorToImportAs, setColorToImportAs] = useState<number>(0);
	const [importOption, setImportOption] = useState<number>(0);
	const [open, setOpen] = useState(false);
	const dispatch = useAppDispatch();
	const data = importing.map((bit, i) => {
		const { color, title, contents, hidden } = bit;
		return (
			<IonItem className={importOption === i ? "importOption" : "importOption unselected"} key={`import-option-${i}-${title}-${color}/${contents.length}`}>
				<IonRadio justify="space-between" labelPlacement="start" value={i}>
					<div className="importBit">
						<div><strong>Title:</strong> {title}</div>
						<div><strong>Original Color:</strong> {color}</div>
						<div><strong>Number of Bookmarks:</strong> {contents.length}</div>
					</div>
				</IonRadio>
			</IonItem>
		);
	});
	const doImport = () => {
		const [toast, closeToast] = toaster;
		dispatch(importBookmarksGroup({
			color: order[colorToImportAs],
			title: importing[importOption].title,
			contents: importing[importOption].contents
		}));
		closeToast().then(() => toast({
			message: `Imported "${importing[importOption].title}" as ${order[colorToImportAs]} bookmark group.`,
			color: "success",
			duration: 3000,
			position: "middle"
		}));
	};
	return (
		<IonModal isOpen={importing.length > 0} onIonModalDidDismiss={close} className="importExportBookmarkModal">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Import</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={close}>
							<IonIcon icon={closeCircle} slot="icon-only" />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="full">
					<IonItem>
						<IonModal
							className="pickerSheet"
							isOpen={open}
							onDidDismiss={() => setOpen(false)}
							breakpoints={[0, 1]}
							initialBreakpoint={1}
						>
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
										value={colorToImportAs}
										onIonChange={e => setColorToImportAs(clamp(e.detail.value, order.length - 1))}
									>
										<div slot="prefix">Import as</div>
										{order.map((opt, i) =>
											<IonPickerColumnOption key={`color${opt}import${i}:${colors[order[i]].title}`} value={i}>
												{colors[order[i]].title} ({opt})
											</IonPickerColumnOption>
										)}
									</IonPickerColumn>
								</IonPicker>
							</IonContent>
						</IonModal>
						<IonLabel className="picker" onClick={() => setOpen(true)}>Import as: <IonText className="pickedText">{colors[order[colorToImportAs]].title} ({order[colorToImportAs]})</IonText></IonLabel>
						<IonButton slot="end" color="tertiary" onClick={doImport}>
							<IonLabel>Import</IonLabel>
							<IonIcon icon="/icons/input.svg" slot="end" />
						</IonButton>
					</IonItem>
					<IonItemDivider>Select from below before importing.</IonItemDivider>
					<IonRadioGroup value={importOption} onIonChange={e => setImportOption(e.detail.value)}>
						{data}
					</IonRadioGroup>
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="end">
						<IonButton onClick={close} fill="solid" shape="round" color="success">
							<IonIcon icon={closeIcon} slot="start" />
							<IonLabel>Done</IonLabel>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

const BookmarksImportExportPage: FC = () => {
	const { db, order, ...colors } = useAppSelector(state => state.bookmarks);
	const [selected, setSelected] = useState<Color[]>([]);
	const [output, setOutput] = useState<string>("");
	const [importing, setImporting] = useState<BookmarkGroup[]>([]);
	const exportRef = useRef<HTMLIonTextareaElement>(null);
	const importRef = useRef<HTMLIonTextareaElement>(null);
	const toaster = useIonToast();
	const exportable = order.filter(c => colors[c].title.toLowerCase() !== c || colors[c].contents.length > 0);

	useEffect(() => {
		setOutput(selected.length ? JSON.stringify(selected.map(c => colors[c])) : "");
	}, [selected, setOutput]);

	const doClose = () => {
		setImporting([]);
		importRef && importRef.current && importRef.current.value && (importRef.current.value = "");
	};

	return (
		<BasicPage
			title="Import/Export Bookmarks"
			hideSources
			pageId="importexport"
			notBookmarkable
			noFinder
			className="bookmarks importExport"
		>
			<ImportModal importing={importing} toaster={toaster} close={doClose} />
			<div className="export block">
				<h2>Export Bookmarks</h2>
				<p>Choose which group(s) you wish to export.</p>
				{exportable.length ? <IonList lines="none">
					{exportable.map(c => (
						<IonItem key={`export-bookmark-option-${c}`} className={`color-${c}`}>
							<IonToggle
								checked={selected.indexOf(c) > -1}
								onClick={() => setSelected(toggle(c, selected))}
								labelPlacement="start"
								justify="space-between"
							>
								<IonText className={`color-${c}`}>{colors[c].title}</IonText>
							</IonToggle>
						</IonItem>
					))}
				</IonList> : <p><IonText color="danger"><em>(Nothing to export: no bookmarks found)</em></IonText></p>}
				<IonTextarea
					fill="outline"
					label="Copy this and save it for later use."
					autoGrow
					labelPlacement="stacked"
					ref={exportRef}
					value={output}
					readonly
				/>
				<IonButton size="small" color="tertiary" onClick={() => clip(toaster, exportRef)}>
					<IonIcon icon={copy} slot="start" />
					<IonLabel>Copy to Clipboard</IonLabel>
				</IonButton>
			</div>
			<div className="import block">
				<h2>Import Bookmarks</h2>
				<IonTextarea
					fill="outline"
					label="Paste info to import here."
					autoGrow
					labelPlacement="stacked"
					ref={importRef}
				/>
				<IonButton size="small" color="tertiary" onClick={() => maybeLaunchModal(setImporting, importRef, order, toaster)}>
					<IonIcon icon="/icons/input.svg" slot="start" />
					<IonLabel>Import</IonLabel>
				</IonButton>
			</div>
		</BasicPage>
	);
};

export default BookmarksImportExportPage;
