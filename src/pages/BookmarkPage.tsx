import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { pencil, reorderTwo, trash, bookmark } from 'ionicons/icons';
import {
	IonButton,
	IonIcon,
	IonInput,
	IonItem,
	IonItemDivider,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
	IonList,
	IonReorder,
	IonReorderGroup,
	ItemReorderEventDetail,
	useIonAlert
} from '@ionic/react';
import getPageName from '../components/getPageName';
import { goTo } from '../store/historySlice';
import { Color, editBookmark, removeBookmark, renameGroup, reorderBookmarks } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import './Page.css';

type Params = { color: Color };

const blank: [string, string][] = [];

const BookmarkPage: React.FC<{}> = () => {
	const { color } = useParams<Params>();
	const [doAlert] = useIonAlert();
	const data = useAppSelector(state => state.bookmarks);
	const {color: c, title, contents} = (color && data[color]) || { color: "", title: "(error)", contents: blank };

	const [disabled, setDisabled] = useState(true);
	const dispatch = useAppDispatch();
	const defaultTitle = c.slice(0,1).toUpperCase + c.slice(1);
	const [currentTitle, setCurrentTitle] = useState(title);
	const [path, navigate] = useLocation();
	const titleInput = useRef<HTMLIonInputElement>(null);

	useEffect(() => {
		setCurrentTitle(title);
	}, [title]);

	const doEdit = useCallback((id: string, current: string) => {
		const list = document.getElementById(color + "BookmarkList") as null | HTMLIonListElement;
		if(list) {
			list.closeSlidingItems();
		}
		const base = getPageName(id);
		doAlert({
			header: "Rename Bookmark",
			inputs: [
				{
					placeholder: base,
					value: current,
				}
			],
			buttons: [
				{
					text: "Cancel",
					role: "cancel"
				},
				{
					text: "Save",
					role: "confirm",
					handler: (e: boolean | void | { [key: string]: string }) => {
						if(e && e !== true) {
							const title = e["0"] || base; // first input
							dispatch(editBookmark({id, title, color}));
						}
					}
				}
			]
		});
	}, [doAlert, dispatch, color]);

	const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
		const {to, from, complete} = event.detail;
		// The `from` and `to` properties contain the index of the item
		// when the drag started and ended, respectively
		dispatch(reorderBookmarks({color, from, to}));

		// Finish the reorder and position the item in the DOM based on
		// where the gesture ended. This method can also be called directly
		// by the reorder group
		complete();
	};

	const maybeSaveTitle = () => {
		if(disabled) {
			setDisabled(false);
			setTimeout(
				() => titleInput && titleInput.current && titleInput.current.setFocus && titleInput.current.setFocus(),
			10);
			return;
		}
		setDisabled(true);
		color && dispatch(renameGroup({color, title: currentTitle.trim() || defaultTitle}));
	};

	const members = useMemo(() => {
		return contents.map(([id, title]) => {
			return (
				<IonItemSliding key={`orderable-bookmark-${id}-in-group-${color || ""}`}>
					<IonItem detail={false} className="link">
						<IonReorder slot="start">
							<IonIcon icon={reorderTwo} />
						</IonReorder>
						<IonLabel onClick={() => { navigate(id); dispatch(goTo(id)); }}>{title}</IonLabel>
						<IonIcon slot="end" icon="/icons/swipe-left.svg" />
					</IonItem>
					<IonItemOptions side="end">
						<IonItemOption color="secondary" onClick={() => doEdit(id, title)}>
							<IonIcon slot="top" icon={pencil} />
							Rename
						</IonItemOption>
						<IonItemOption color="danger" onClick={() => color && dispatch(removeBookmark({id, color}))}>
							<IonIcon slot="top" icon={trash} />
							Delete
						</IonItemOption>
					</IonItemOptions>
				</IonItemSliding>
			);
		});
	} , [contents, color, doEdit, dispatch, navigate]);

	return (
		<BasicPage
			title={title + " (Bookmarks)"}
			hideSources
			pageId={"/bookmarks/" + color}
			notBookmarkable
			className="bookmarks"
		>
			<IonList lines="full" id={color + "BookmarkList"}>
				<IonItem>
					<IonIcon className={`color-${color}`} slot="start" icon={bookmark} />
					<IonInput
						placeholder={`Defaults to "${defaultTitle}"`}
						label=""
						value={currentTitle}
						inputmode="text"
						disabled={disabled}
						onIonInput={(e) => setCurrentTitle(e.detail.value || "")}
						ref={titleInput}
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
		</BasicPage>
	);
};

export default BookmarkPage;
