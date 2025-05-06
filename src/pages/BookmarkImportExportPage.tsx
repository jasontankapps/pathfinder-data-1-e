import { Clipboard } from "@capacitor/clipboard";
import { useRef, useState, FC, RefObject, Dispatch } from 'react';
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
import { BookmarkGroup, importBookmarkGroups } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
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

	const [toImport, setToImport] = useState<number[]>(
		importing.map((input, i) => { const [id] = input; return db[id] ? null : i; }).filter(x => x !== null)
	);
	const danger = (
		importing.map((input, i) => { const [id] = input; return db[id] ? i : null; }).filter(x => x !== null)
	);

	const maybeImport = () => {
		const [toast, closeToast] = toaster;
		const doImport = () => {
			dispatch(importBookmarkGroups(toImport.map(i => importing[i])));
			closeToast().then(() => toast({
				message: `Imported ${toImport.length} bookmark group${toImport.length === 1 ? "" : "s"}.`,
				color: "success",
				duration: 3000,
				position: "middle"
			})).then(() => close());
		};
		const dangerous = toImport.filter(i => danger.indexOf(i) > -1).sort();
		if(dangerous.length) {
			const s = dangerous.length === 1 ? "" : "s";
			const is = dangerous.length === 1 ? "is a" : "are";
			const other = dangerous.length === 1 ? "an existing" : "existing";
			const that = dangerous.length === 1 ? "that" : "those";
			let incoming = "", inDanger = "";
			switch(String(dangerous.length)) {
				case "1":
					incoming = `"${importing[dangerous[0]][1].title}"`;
					inDanger = `"${db[importing[dangerous[0]][0]].title}"`;
					break;
				case "2":
					incoming = `"${importing[dangerous[0]][1].title}" and "${importing[dangerous[1]][1].title}"`;
					inDanger = `"${db[importing[dangerous[0]][0]].title}" and "${db[importing[dangerous[1]][0]].title}" respectively`;
					break;
				default:
					const pop = dangerous.pop()!;
					incoming = `"${dangerous.map(i => importing[i][1].title).join(`", "`)}", and "${importing[pop][1].title}"`;
					inDanger = `"${dangerous.map(i => db[importing[i][0]].title).join(`", "`)}", and "${db[importing[pop][0]].title}" respectively`;
			}
			const message = `${incoming} ${is} duplicate${s} of ${other} group${s} ${inDanger}, and will overwrite your current bookmarks in ${that} group${s}.`;
			alert[0]({
				header: `Duplicate Group${s}`,
				subHeader: `This will overwrite current bookmarks`,
				message,
				buttons: [
					{
						text: "Cancel",
						role: "cancel",
						cssClass: "cancel"
					},
					{
						text: "Yes, Overwrite and Import",
						cssClass: "delete",
						role: "confirm",
						handler: doImport
					}
				]
			});
		} else {
			// No issues.
			doImport();
		}
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
					<IonItemDivider>Choose What to Import</IonItemDivider>
					{importing.map((input, i) => {
						const [id, bit] = input;
						const { color, title, contents } = bit;
						const checked = toImport.indexOf(i) > -1;
						const coloring = danger.indexOf(i) > -1 ? "danger" : "primary";
						const onClick = checked ? (
							// Uncheck
							() => setToImport(toImport.filter(x => x !== i))
						) : (
							// Check
							() => setToImport([...toImport, i])
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
						<IonButton slot="end" fill="solid" color="primary" onClick={maybeImport}>
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
