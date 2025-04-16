import { FC, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
	addDivider, Color, universalBookmarkDividerId, editBookmark,
	removeBookmark, renameGroup, reorderBookmarks
} from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import '../components/Bookmarks.css';
import './Page.css';


interface BaseProps {
	id: string
	title: string
	index: number
}
interface BookmarkDividerProps extends BaseProps {
	color: Color
}
interface BookmarkItemProps extends BaseProps {
	doEdit: (id: string, position: number) => void
}

const BookmarkItem: FC<BookmarkItemProps> = (props) => {
	const { index, id, title, doEdit } = props;
	const [, navigate] = useLocation();
	const dispatch = useAppDispatch();
	return (
		<IonItemSliding>
			<IonItem detail={false} className="link">
				<IonReorder slot="start">
					<IonIcon icon={reorderTwo} />
				</IonReorder>
				<IonLabel onClick={() => { navigate(id); dispatch(goTo(id)); }}>{title}</IonLabel>
				<IonIcon slot="end" icon="/icons/swipe-left.svg" />
			</IonItem>
			<IonItemOptions side="end">
				<IonItemOption color="secondary" onClick={() => doEdit(id, index)}>
					<IonIcon slot="top" icon={pencil} />
					Rename
				</IonItemOption>
				<IonItemOption color="danger" onClick={() => dispatch(removeBookmark({id, position: index}))}>
					<IonIcon slot="top" icon={trash} />
					Delete
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>
	);
};
//<IonLabel className="ion-text-center"><BookmarkDividerSVG /></IonLabel>
const BookmarkDivider: FC<BookmarkDividerProps> = (props) => {
	const { index, id, color } = props;
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
				<IonItemOption color="danger" onClick={() => dispatch(removeBookmark({id, position: index}))}>
					<IonIcon slot="icon-only" icon={trash} />
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>
	);
};

const Fab: FC<{color: Color, id: string, func: () => void}> = ({color, id, func}) => {
	const dispatch = useAppDispatch();
	return (
		<IonFab slot="fixed" horizontal="center" vertical="bottom">
			<IonFabButton aria-label="Add Separator" size="small" color="light" onClick={() => { dispatch(addDivider(id)); func(); }}>
				<IonIcon className={`color-${color}`} icon={chevronExpand} />
			</IonFabButton>
		</IonFab>
	);
};

type Params = { id: string };

const blank: [string, string][] = [];

const BookmarkPage: FC<{}> = () => {
	const { id } = useParams<Params>();
	const [doAlert] = useIonAlert();
	const [scrollObj, setScrollObj] = useState<RefObject<HTMLIonContentElement> | null>(null);
	const data = useAppSelector(state => state.bookmarks.db[id]);
	const {color, title, contents} = data || { color: "red", title: "(error)", contents: blank };

	const [disabled, setDisabled] = useState(true);
	const dispatch = useAppDispatch();
	const defaultTitle = "Bookmarks";
	const [currentTitle, setCurrentTitle] = useState(title);
	const [, navigate] = useLocation();
	const titleInput = useRef<HTMLIonInputElement>(null);

	const scrollHook = useCallback((input: RefObject<HTMLIonContentElement>) => {
		setScrollObj(input);
	}, []);
	const scrollToBottom = useCallback(() => {
		setTimeout(
			() => scrollObj && scrollObj.current && scrollObj.current.scrollToBottom(250),
			10
		);
	}, [scrollObj]);

	useEffect(() => {
		setCurrentTitle(title);
	}, [title]);

	const doEdit = useCallback((current: string, position: number) => {
		const list = document.getElementById(id + "BookmarkList") as null | HTMLIonListElement;
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
							dispatch(editBookmark({id, title, position}));
						}
					}
				}
			]
		});
	}, [doAlert, dispatch, id]);

	const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
		const {to, from, complete} = event.detail;
		// The `from` and `to` properties contain the index of the item
		// when the drag started and ended, respectively
		dispatch(reorderBookmarks({id, from, to}));

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
		id && dispatch(renameGroup({id, title: currentTitle.trim() || defaultTitle}));
	};

	const members = useMemo(() => {
		return contents.map((info, position) => {
			const [link, title] = info;
			if(link === universalBookmarkDividerId) {
				return <BookmarkDivider color={color} index={position} title={title} id={link} key={`orderable-bookmark-${link}-in-group-${id || ""}`} />;
			}
			return <BookmarkItem id={link} index={position} title={title} doEdit={doEdit} key={`orderable-bookmark-${link}-in-group-${id || ""}`} />;
		});
	} , [contents, id, color, doEdit, dispatch, navigate]);

	return (
		<BasicPage
			title={title + " (Bookmarks)"}
			hideSources
			pageId={"/bookmarks/" + id}
			notBookmarkable
			className="bookmarks"
			fab={<Fab color={color} id={id} func={scrollToBottom} />}
			scrollHook={scrollHook}
		>
			<IonList lines="full" id={id + "BookmarkList"}>
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
