import { Dispatch, useEffect, useMemo, useState } from 'react';
import { create, eye, eyeOff, reorderTwo, closeCircle, trash } from 'ionicons/icons';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonItemDivider,
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
	ItemReorderEventDetail
} from '@ionic/react';
import { Color, ColorState, removeBookmark, rename, toggleHidden } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import getPageName from '../components/getPageName';
import BasicPage from './BasicPage';
import './Page.css';

interface ModalProps {
	editModal: null | Color
	setEditModal: Dispatch<null | Color>
	colorState: ColorState
}

const blank: string[] = [];

const BookmarkModal: React.FC<ModalProps> = (props) => {
	const [disabled, setDisabled] = useState(true);
	const dispatch = useAppDispatch();
	const {editModal: color, setEditModal, colorState} = props;
	const {color: c, title, contents} = color
		? colorState[color]
		: { color: "", title: "", contents: blank };
	const defaultTitle = c.slice(0,1).toUpperCase + c.slice(1);
	const [currentTitle, setCurrentTitle] = useState(title);

	useEffect(() => {
		setCurrentTitle(title);
	}, [title]);

	const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
		const {to, from, complete} = event.detail;
		// The `from` and `to` properties contain the index of the item
		// when the drag started and ended, respectively
		console.log('Dragged from index', from, 'to', to);

		// Finish the reorder and position the item in the DOM based on
		// where the gesture ended. This method can also be called directly
		// by the reorder group
		complete();
	};

	const maybeSaveTitle = () => {
		if(disabled) {
			setDisabled(false);
			return;
		}
		setDisabled(true);
		color && dispatch(rename({color, title: currentTitle.trim() || defaultTitle}));
	};

	const members = useMemo(() => {
		return contents.map(c => {
			const title = getPageName(c);
			return (
				<IonItemSliding key={`orderable-bookmark-${c}-in-group-${color || ""}`}>
					<IonItem detail={false}>
						<IonReorder slot="start">
							<IonIcon icon={reorderTwo} />
						</IonReorder>
						<IonLabel>{title}</IonLabel>
						<IonIcon slot="end" icon="/icons/swipe-left.svg" />
					</IonItem>
					<IonItemOptions side="end">
						<IonItemOption color="danger" onClick={() => color && dispatch(removeBookmark({id: c, color}))}>
							<IonIcon slot="top" icon={trash} />
							Delete
						</IonItemOption>
					</IonItemOptions>
				</IonItemSliding>
			);
		});
	} , [contents, color, dispatch]);
	
	return (
		<IonModal isOpen={!!color} onDidDismiss={() => setEditModal(null)}>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="capitalize">Edit Bookmarks</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => setEditModal(null)}>
							<IonIcon icon={closeCircle} slot="icon-only" />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="full">
					<IonItem>
						<IonInput
							placeholder={`Defaults to "${defaultTitle}"`}
							label=""
							value={currentTitle}
							inputmode="text"
							disabled={disabled}
							onIonInput={(e) => setCurrentTitle(e.detail.value || "")}
						/>
						<IonButton color="secondary" slot="end" onClick={maybeSaveTitle}>
							<IonLabel>{disabled ? "Edit Title" : "Save"}</IonLabel>
						</IonButton>
					</IonItem>
					<IonItemDivider>
						<IonLabel>Saved Bookmarks:</IonLabel>
					</IonItemDivider>
					<IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
						{members}
					</IonReorderGroup>
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="end">
						<IonButton onClick={() => setEditModal(null)} color="success">
							<IonLabel>Done</IonLabel>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

const BookmarksPage: React.FC = () => {
	const { db, order, ...colors } = useAppSelector(state => state.bookmarks);
	const [editModal, setEditModal] = useState<null | Color>(null);
	const dispatch = useAppDispatch();

	const allBookmarks = useMemo(() => {
		return order.map(c => {
			const {title, hidden} = colors[c];
			return (
				<IonItem
					key={`orderable-bookmark-group-${c}`}
					button
					detail={false}
				>
					<IonReorder slot="start">
						<IonIcon icon={reorderTwo} />
					</IonReorder>
					<IonLabel><IonText className={`color-${c}`}>{title}</IonText></IonLabel>
					<IonButton color="secondary" fill="clear" slot="end" onClick={() => dispatch(toggleHidden(c))}>
						<IonIcon slot="icon-only" icon={hidden ? eyeOff : eye} />
					</IonButton>
					<IonButton color="tertiary" fill="clear" slot="end" onClick={() => setEditModal(c)}>
						<IonIcon slot="icon-only" icon={create} />
					</IonButton>
				</IonItem>
			);
		});
	}, [db, order, location, colors, dispatch]);

	const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
		const {to, from, complete} = event.detail;
		// The `from` and `to` properties contain the index of the item
		// when the drag started and ended, respectively
		console.log('Dragged from index', from, 'to', to);

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
		>
			<BookmarkModal editModal={editModal} setEditModal={setEditModal} colorState={colors} />
			<IonList lines="full">
				<IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
					{...allBookmarks}
				</IonReorderGroup>
			</IonList>
		</BasicPage>
	);
};

export default BookmarksPage;
