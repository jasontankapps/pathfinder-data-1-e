import { useMemo, FC, useCallback, useState, useRef } from 'react';
import { add, bookmark, closeCircle, eye, eyeOff, reorderTwo, save, trash } from 'ionicons/icons';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonFooter,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
	IonList,
	IonModal,
	IonReorder,
	IonReorderGroup,
	IonText,
	IonTitle,
	IonToolbar,
	ItemReorderEventDetail,
	useIonAlert,
	useIonToast
} from '@ionic/react';
import Circle from '@uiw/react-color-circle';
import { useLocation } from 'wouter';
import { goTo } from '../store/historySlice';
import { Color, deleteBookmarkGroup, reorderGroups, toggleHidden, colors, makeNewBookmarkGroup } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import './Page.css';


const colorNames = Object.keys(colors) as Color[];

const hexToColor: {[key: string]: Color} = {};
colorNames.forEach(color => (hexToColor[colors[color]] = color));

const getColor = (input: unknown): Color => {
	return hexToColor[input as string] || "red";
}

const BookmarksPage: FC = () => {
	const { db, order } = useAppSelector(state => state.bookmarks);
	const [doAlert] = useIonAlert();
	const [toast, closeToast] = useIonToast();
	const dispatch = useAppDispatch();
	const [, navigate] = useLocation();
	const [openModal, setOpenModal] = useState(false);
	const [newTitle, setNewTitle] = useState("New Group");
	const [newColor, setNewColor] = useState<Color>("red");
	const listRef = useRef<HTMLIonListElement>(null);

	const ImportExport = useMemo(() => (
		<IonButton onClick={() => { navigate(`/importexport`); dispatch(goTo(`/importexport`)); }}>
			<IonIcon slot="icon-only" icon={save} />
		</IonButton>
	), [navigate, dispatch]);

	const closeEm = useCallback(() => {
		listRef && listRef.current && listRef.current.closeSlidingItems();
		return true;
	}, [listRef, listRef.current]);

	const maybeDelete = useCallback((title: string, id: string, number: number) => {
		closeEm();
		doAlert({
			header: `Delete "${title}"`,
			message: `This group currently has ${number} bookmarks. Deleting it cannot be undone.`,
			buttons: [
				{
					text: "Cancel",
					role: "cancel"
				},
				{
					text: "Delete",
					role: "confirm",
					handler: () => dispatch(deleteBookmarkGroup(id))
				}
			]
		});
	}, [doAlert, dispatch, closeEm]);

	const onLoad = useCallback(() => setNewTitle("New Group"), [setNewTitle]);
	const maybeSave = useCallback((title: string, color: Color) => {
		if(!title) {
			closeToast().then(() => toast({
				message: "You must give the group a title.",
				color: "warning",
				duration: 2500,
				position: "middle"
			}));
		} else {
			dispatch(makeNewBookmarkGroup([title, color]));
			setOpenModal(false);
		}
	}, [closeToast, toast, dispatch, setOpenModal]);

	const allBookmarks = useMemo(() => {
		return order.map(id => {
			const {title, color, contents, hidden} = db[id];
			return (
				<IonItemSliding key={`orderable-bookmark-group-${id}`}>
					<IonItem
						detail={false}
						className={"link bmColor color-" + color + (hidden ? " dim" : "")}
					>
						<IonReorder slot="start">
							<IonIcon icon={reorderTwo} color={hidden ? "medium" : "dark"} />
						</IonReorder>
						<IonLabel onClick={() => { navigate(`/bookmarks/${id}`); dispatch(goTo(`/bookmarks/${id}`)); }}>
							<IonText className={`color-${color}`}>{title}</IonText>
						</IonLabel>
						<IonIcon slot="end" icon="/icons/swipe-left.svg" />
					</IonItem>
					<IonItemOptions side="end">
						<IonItemOption disabled={order.length < 2} color="danger" onClick={() => maybeDelete(title, id, contents.length)}>
							<IonIcon slot="top" icon={trash} />
							Delete
						</IonItemOption>
						<IonItemOption color="primary" onClick={() => closeEm() && dispatch(toggleHidden(id))}>
							<IonIcon slot="top" icon={hidden ? eyeOff : eye} />
							{hidden ? "Show" : "Hide"}
						</IonItemOption>
					</IonItemOptions>
				</IonItemSliding>
			);
		});
	}, [db, order, location, dispatch, maybeDelete]);

	const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
		const {to, from, complete} = event.detail;
		// The `from` and `to` properties contain the index of the item
		// when the drag started and ended, respectively
		dispatch(reorderGroups({from, to}));

		// Finish the reorder and position the item in the DOM based on
		// where the gesture ended. This method can also be called directly
		// by the reorder group
		complete();
	};

	return (
		<BasicPage
			title="Bookmarks"
			hideSources
			pageId="bookmarks"
			notBookmarkable
			noFinder
			className="bookmarks"
			extraButton={ImportExport}
		>
			<IonList lines="full" ref={listRef}>
				<IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
					{allBookmarks}
				</IonReorderGroup>
			</IonList>
			<IonModal isOpen={openModal} onIonModalDidDismiss={() => setOpenModal(false)} onIonModalWillPresent={onLoad}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Add New Group</IonTitle>
						<IonButtons slot="end">
							<IonButton onClick={() => setOpenModal(false)}>
								<IonIcon icon={closeCircle} slot="icon-only" />
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList lines="full">
						<IonItem>
						<IonIcon className={`color-${newColor}`} slot="start" icon={bookmark} />
							<IonInput
								inputMode="text"
								label="Title:"
								value={newTitle}
								onIonInput={(e) => setNewTitle(e.detail.value || "")}
							/>
						</IonItem>
						<IonItem>
							<Circle colors={colorNames.map(c => colors[c])} color={colors[newColor]} onChange={hex => setNewColor(getColor(hex.hex))} />
						</IonItem>
					</IonList>
				</IonContent>
				<IonFooter>
					<IonToolbar>
						<IonButtons slot="end">
							<IonButton color="success" onClick={() => maybeSave(newTitle, newColor)}>
								<IonIcon icon={save} slot="start" />
								Add Group
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonFooter>
			</IonModal>
			<IonFab slot="fixed" horizontal="center" vertical="bottom">
				<IonFabButton aria-label="Add Separator" size="small" color="primary" onClick={() => setOpenModal(true)}>
					<IonIcon icon={add} />
				</IonFabButton>
			</IonFab>
		</BasicPage>
	);
};

export default BookmarksPage;
