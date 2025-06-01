import { Clipboard } from "@capacitor/clipboard";
import { useRef, useState, FC, RefObject, Dispatch } from 'react';
import { v7 as uuidv7 } from 'uuid';
import { bookmark, closeCircle, close as closeIcon, copy } from 'ionicons/icons';
import {
	IonButton,
	IonButtons,
	IonCheckbox,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonList,
	IonModal,
	IonText,
	IonTextarea,
	IonTitle,
	IonToggle,
	IonToolbar,
	useIonAlert,
	UseIonAlertResult,
	useIonToast,
	UseIonToastResult
} from '@ionic/react';
import { BookmarkDB, BookmarkGroup, importBookmarkGroups } from '../store/bookmarksSlice';
import { DispatchType, useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import './Page.css';
import parseImport from "./parseImport";

const toggle = (item: string, all: string[]): string[] => {
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

type BG = Omit<BookmarkGroup, "hidden">;
type Pair = [string, BG];

const maybeLaunchImportModal = (
	setter: Dispatch<Pair[]>,
	ref: RefObject<HTMLIonTextareaElement>,
	toaster: UseIonToastResult
): void => {
	let message = "No data to import.";
	if(ref && ref.current && ref.current.value) {
		let data: any;
		try {
			data = JSON.parse(ref.current.value);
		} catch(e) {
			data = null;
			message = "ERR-0.1 Invalid JSON format"
		}
		if(data) {
			const {ok, msg, found} = parseImport(data);
			if(ok) {
				setter(found!);
				return;
			}
			message = msg!;
		}
	}
	const [toast, closeToast] = toaster;
	closeToast().then(() => toast({
		message,
		header: "Unable to Import",
		color: "danger",
		duration: 3500,
		position: "middle"
	}));
};

const maybeImport = (
	db: BookmarkDB,
	importing: Pair[],
	okToImport: number[],
	danger: number[],
	dispatch: DispatchType,
	toaster: UseIonToastResult,
	alert: UseIonAlertResult,
	close: () => void
) => {
	const [toast, closeToast] = toaster;
	const [doAlert, closeAlert] = alert;
	const importable: Pair[] = [];
	const overwriters: [string, BG][] = [];
	okToImport.forEach(i => {
		if(danger.indexOf(i) > -1) {
			overwriters.push(importing[i]);
		} else {
			importable.push(importing[i]);
		}
	});
	const doImport = () => {
		dispatch(importBookmarkGroups(importable));
		closeToast().then(() => toast({
			message: `Imported ${importable.length} bookmark group${importable.length === 1 ? "" : "s"}.`,
			color: "success",
			duration: 3000,
			position: "middle"
		})).then(close);
	};
	let counter = 0;
	const max = overwriters.length;
	const handleNextOverwriter = () => {
		if(overwriters.length === 0) {
			return importable.length > 0 ? doImport() : closeToast().then(() => toast({
				message: "Nothing to import.",
				color: "danger",
				duration: 3000,
				position: "middle"
			})).then(close);
		}
		const [id, group] = overwriters.shift()!;
		const incoming = group.title;
		const { contents, title: inDanger } = db[id];
		const header = `Duplicate Group`;
		const subHeader = max > 1 ? `[${++counter} of ${max}]` : undefined;
		const message = `"${incoming}" is a duplicate of existing group "${inDanger}", and will overwrite your current bookmarks (${contents.length}) in that group.`;
		closeAlert().then(() => doAlert({
			header,
			subHeader,
			message,
			cssClass: "horizontalButtons",
			buttons: [
				{
					text: "Do Not Import",
					role: "cancel",
					cssClass: "cancel",
					handler: handleNextOverwriter
				},
				{
					text: "Overwrite and Import",
					cssClass: "overwrite",
					role: "confirm",
					handler: () => {
						importable.push([id, group]);
						handleNextOverwriter();
					}
				},
				{
					text: "Import as New Group",
					cssClass: "save",
					role: "confirm",
					handler: () => {
						importable.push([uuidv7(), group]);
						handleNextOverwriter();
					}
				}
			]
		}));
	};
	if(!overwriters.length) {
		return doImport();
	}
	handleNextOverwriter();
};

interface ModalProps {
	importing: Pair[]
	close: () => void
	toaster: UseIonToastResult
	alert: UseIonAlertResult
}

const ImportModal: FC<ModalProps> = (props) => {
	const { db } = useAppSelector(state => state.bookmarks);
	const { importing, close, toaster, alert } = props;
	const dispatch = useAppDispatch();

	const [okToImport, setToImport] = useState<number[]>(
		importing.map((input, i) => { const [id] = input; return db[id] ? null : i; }).filter(x => x !== null)
	);
	const danger = (
		importing.map((input, i) => { const [id] = input; return db[id] ? i : null; }).filter(x => x !== null)
	);

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
					<IonItemDivider>Choose What to Import</IonItemDivider>
					{importing.map((input, i) => {
						const [id, bit] = input;
						const { color, title, contents } = bit;
						const checked = okToImport.indexOf(i) > -1;
						const coloring = danger.indexOf(i) > -1 ? "danger" : "primary";
						const onClick = checked ? (
							// Uncheck
							() => setToImport(okToImport.filter(x => x !== i))
						) : (
							// Check
							() => setToImport([...okToImport, i])
						);
						return (
							<IonItem key={`import-option-${id}-${title}-${color}/${contents.length}`} className={checked ? "importOption" : "importOption unselected"}>
								<IonCheckbox justify="space-between" checked={checked} onClick={onClick} color={coloring} labelPlacement="start">
									<div className="importBit">
										<div className="icon">
											<IonIcon icon={bookmark} className={`color-${color}`} />
										</div>
										<div className="text">
											<div><strong>Title:</strong> {title}</div>
											<div><strong>Bookmarks:</strong> {contents.length}</div>
										</div>
									</div>
								</IonCheckbox>
							</IonItem>
						);
					})}
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={close} shape="round" color="success">
							<IonIcon icon={closeIcon} slot="start" />
							<IonLabel>Done</IonLabel>
						</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton slot="end" fill="solid" color="primary" onClick={() => maybeImport(db, importing, okToImport, danger, dispatch, toaster, alert, close)}>
							<IonLabel>Import Selected</IonLabel>
							<IonIcon icon="/icons/input.svg" slot="end" />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

const BookmarksImportExportPage: FC = () => {
	const { db, order } = useAppSelector(state => state.bookmarks);
	const [selected, setSelected] = useState<string[]>([]);
	const [importing, setImporting] = useState<Pair[]>([]);
	const exportRef = useRef<HTMLIonTextareaElement>(null);
	const importRef = useRef<HTMLIonTextareaElement>(null);
	const toaster = useIonToast();
	const alert = useIonAlert();
	const exportable = order
		.filter(c => db[c].title.toLowerCase() !== c || db[c].contents.length > 0);

	const toggleSelected = (toggling: string) => {
		if(exportRef && exportRef.current) {
			const newSelected = toggle(toggling, selected);
			if(newSelected.length) {
				const temp: {[key: string]: BG} = {};
				toggle(toggling, selected).forEach(id => {
					const {hidden, ...obj} = db[id]
					temp[id] = obj;
				});
				exportRef.current.value = JSON.stringify(temp);
			} else {
				exportRef.current.value = "";
			}
			setSelected(newSelected);
		}
	};

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
			<ImportModal importing={importing} toaster={toaster} alert={alert} close={doClose} />
			<div className="export block">
				<h2>Export Bookmarks</h2>
				<p>Choose which group(s) you wish to export.</p>
				{exportable.length ? <IonList lines="none">
					{exportable.map(id => {
						const {title, color} = db[id];
						return (
							<IonItem key={`export-bookmark-option-${id}`} className={`color-${color}`}>
								<IonToggle
									checked={selected.indexOf(id) > -1}
									onClick={() => toggleSelected(id)}
									labelPlacement="start"
									justify="space-between"
								>
									<IonText className={`color-${color}`}>{title}</IonText>
								</IonToggle>
							</IonItem>
						)
					})}
				</IonList> : <p><IonText color="danger"><em>(Nothing to export: no bookmarks found)</em></IonText></p>}
				<IonTextarea
					fill="outline"
					label="Copy this and save it for later use."
					autoGrow
					labelPlacement="stacked"
					ref={exportRef}
					defaultValue=""
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
				<IonButton size="small" color="tertiary" onClick={() => maybeLaunchImportModal(setImporting, importRef, toaster)}>
					<IonIcon icon="/icons/input.svg" slot="start" />
					<IonLabel>Import</IonLabel>
				</IonButton>
			</div>
		</BasicPage>
	);
};

export default BookmarksImportExportPage;
