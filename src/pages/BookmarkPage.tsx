import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { pencil, reorderTwo, trash, bookmark, chevronExpand } from 'ionicons/icons';
import {
	IonButton,
	IonFab,
	IonFabButton,
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
import {
	addDivider, Color, universalBookmarkDividerId, editBookmark, removeBookmark,
	removeDivider, renameGroup, reorderBookmarks
} from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import '../components/Bookmarks.css';
import './Page.css';

const BookmarkDividerSVG = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			viewBox="0 0 2638.296 261.836"
		>
			<path d="M1319.148 216.511c9.917-13.095 35.158-31.708 67.296-43.307 32.734-9.323 50.603-14.9 115.326-14.9.192 1.326 3.944 18.715 4.11 19.481 60.269-20.212 135.121-24.518 197.43-24.518 5.718 6.002 12.88 12.688 16.554 17.011 0 0 595.746-27.04 879.284-39.317l-879.284-39.418c-4.551 5.355-9.526 9.684-16.554 17.012-62.574 0-136.03-4.1-197.43-24.504-.217 1-3.757 17.038-4.11 19.48-48.878 0-98.66-3.385-141.471-26.53-21.027-10.513-39.424-29.396-41.151-31.676-.758 1.001-13.707 14.108-22.854 20.43-47.732 33.167-101.599 37.776-159.768 37.776-.19-1.312-3.844-18.259-4.11-19.48-60.484 20.1-133.846 24.504-197.429 24.504-7.119-7.419-11.948-11.591-16.555-17.012L39.148 130.961c283.544 12.278 879.284 39.317 879.284 39.317 3.638-4.281 10.874-11.051 16.555-17.011 63.161 0 137.53 4.43 197.429 24.518 4.341-20.06 3.35-14.224 4.11-19.481 110.911 0 148.222 24.516 182.173 57.614l.449.593z" />
		</svg>
	);
};

interface BookmarkDividerProps {
	title: string
	color: Color
}
interface BookmarkItemProps extends BookmarkDividerProps {
	id: string
	doEdit: (id: string, current: string) => void
}

const BookmarkItem: FC<BookmarkItemProps> = (props) => {
	const { id, title, color, doEdit } = props;
	const [path, navigate] = useLocation();
	const dispatch = useAppDispatch();
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
};
//<IonLabel className="ion-text-center"><BookmarkDividerSVG /></IonLabel>
const BookmarkDivider: FC<BookmarkDividerProps> = (props) => {
	const { title, color } = props;
	const dispatch = useAppDispatch();
	return (
		<IonItemSliding>
			<IonItem detail={false} className="divider">
				<IonReorder slot="start">
					<IonIcon icon={reorderTwo} />
				</IonReorder>
				<IonLabel className="ion-text-center">
					<IonIcon icon="/icons/page-divider.svg" className={`color-${color}`} />
				</IonLabel>
				<div slot="end" className="dummy"></div>
			</IonItem>
			<IonItemOptions side="end">
				<IonItemOption color="danger" onClick={() => color && dispatch(removeDivider({color, title}))}>
					<IonIcon slot="icon-only" icon={trash} />
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>
	);
};

const Fab: FC<{color: Color}> = ({color}) => {
	const dispatch = useAppDispatch();
	return (
		<IonFab slot="fixed" horizontal="center" vertical="bottom">
			<IonFabButton aria-label="Add Separator" size="small" color="light" onClick={() => dispatch(addDivider(color))}>
				<IonIcon className={`color-${color}`} icon={chevronExpand} />
			</IonFabButton>
		</IonFab>
	);
};

type Params = { color: Color };

const blank: [string, string][] = [];

const BookmarkPage: FC<{}> = () => {
	const { color } = useParams<Params>();
	const [doAlert] = useIonAlert();
	const data = useAppSelector(state => state.bookmarks);
	const {color: c, title, contents} = (color && data[color]) || { color: "", title: "(error)", contents: blank };

	const [disabled, setDisabled] = useState(true);
	const dispatch = useAppDispatch();
	const defaultTitle = c.slice(0,1).toUpperCase() + c.slice(1);
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
			if(id === universalBookmarkDividerId) {
				return <BookmarkDivider title={title} color={color} key={`orderable-bookmark-${title}-in-group-${color || ""}`} />;
			}
			return <BookmarkItem id={id} title={title} color={color} doEdit={doEdit} key={`orderable-bookmark-${id}-in-group-${color || ""}`} />;
		});
	} , [contents, color, doEdit, dispatch, navigate]);

	return (
		<BasicPage
			title={title + " (Bookmarks)"}
			hideSources
			pageId={"/bookmarks/" + color}
			notBookmarkable
			className="bookmarks"
			fab={<Fab color={color} />}
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
