import {
	createContext, FC, useCallback,
	useContext, useEffect, useMemo, useState
} from 'react';
import { useParams, useLocation } from 'wouter';
import {
	pencil, reorderTwo, trash, bookmark,
	chevronExpand, closeCircle, save
} from 'ionicons/icons';
import {
	IonAlert,
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
	IonItemDivider,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
	IonList,
	IonModal,
	IonReorder,
	IonReorderGroup,
	IonTitle,
	IonToolbar,
	ItemReorderEventDetail,
	useIonAlert
} from '@ionic/react';
import usePageName, { doesPageExist } from '../components/usePageName';
import { goTo } from '../store/historySlice';
import {
	addDivider, Color, universalBookmarkDividerId, editBookmark,
	removeBookmark, renameGroup, reorderBookmarks,
	lightColors, darkColors, colorNames,
	changeGroupColor, getColor
} from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector, useElement } from '../store/hooks';
import { FinderContext } from '../components/contexts';
import useDarkMode from '../components/useDarkMode';
import { GenStrict } from '../types';
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
	link: string,
	doEdit: (link: string, title: string, position: number) => void
}

const ListContext = createContext<HTMLIonListElement|null>(null);

const BookmarkItem: FC<BookmarkItemProps> = (props) => {
	const { index, id, link, title, doEdit } = props;
	const [, navigate] = useLocation();
	const dispatch = useAppDispatch();
	const findingInProgress = useContext(FinderContext);
	const listElement = useContext(ListContext);
	useEffect(() => {
		findingInProgress && listElement && listElement.closeSlidingItems();
	}, [findingInProgress, listElement]);
	// there is a tiny chance a link may be invalid
	const valid = doesPageExist(link);
	const labelElement = valid ? (
		<IonLabel onClick={() => { navigate(link); dispatch(goTo(link)); }}>{title}</IonLabel>
	) : (
		<IonLabel><strong>[INVALID LINK]</strong> {title}</IonLabel>
	);
	const renameElement = valid ? (
		<IonItemOption color="secondary" onClick={() => doEdit(link, title, index)}>
			<IonIcon slot="top" icon={pencil} />
			Rename
		</IonItemOption>
	) : (
		<></>
	);
	return (
		<IonItemSliding disabled={findingInProgress}>
			<IonItem detail={false} className="link">
				<IonReorder slot="start">
					<IonIcon icon={reorderTwo} />
				</IonReorder>
				{labelElement}
				<IonIcon slot="end" icon="/icons/swipe-left.svg" />
			</IonItem>
			<IonItemOptions side="end">
				{renameElement}
				<IonItemOption color="danger" onClick={() => dispatch(removeBookmark({id, position: index}))}>
					<IonIcon slot="top" icon={trash} />
					Delete
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>
	);
};

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
			<IonFabButton
				aria-label="Add Separator"
				size="small"
				color="light"
				onClick={() => { dispatch(addDivider(id)); func(); }}
			>
				<IonIcon className={`color-${color}`} icon={chevronExpand} />
			</IonFabButton>
		</IonFab>
	);
};

type Params = { id: string };

const blank: [string, string][] = [];
const defaultData = { color: "red", title: "(error)", contents: blank };
const defaultTitle = "Bookmarks";

const KeyedBookmarkPage: FC<{id: string}> = ({id}) => {
	const [doAlert] = useIonAlert();
	const [scrollObj, setScrollObj] = useState<HTMLIonContentElement | null>(null);
	const data = useAppSelector(state => state.bookmarks.db[id]);
	const {color, title, contents} = data || defaultData;

	const [disabled, setDisabled] = useState(true);
	const [openChangeColorModal, setOpenChangeColorModal] = useState(false);
	const [newColor, setNewColor] = useState<Color>("red");
	const getPageName = usePageName();
	const dispatch = useAppDispatch();
	const [possiblyUnsavedTitle, setPossiblyUnsavedTitle] = useState(title);

	const [inputElement, inputRef] = useElement<HTMLIonInputElement>();
	const [listElement, listRef] = useElement<HTMLIonListElement>();

	const isDark = useDarkMode();
	const colorsHexed = useMemo(() => {
		const base = isDark ? darkColors : lightColors;
		return colorNames.map(c => base[c]);
	}, [isDark]);

	const scrollHook = useCallback((input: HTMLIonContentElement | null) => {
		setScrollObj(input);
	}, [setScrollObj]);
	const scrollToBottom = useCallback(() => {
		setTimeout(
			() => scrollObj && scrollObj.scrollToBottom(250),
			10
		);
	}, [scrollObj]);

	const doEdit = useCallback((link: string, current: string, position: number) => {
		listElement && listElement.closeSlidingItems();
		const base = getPageName(link);
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
					handler: (e: boolean | void | GenStrict<string, string>) => {
						if(e && e !== true) {
							const title = e["0"] || base; // first input
							dispatch(editBookmark({id, title, position}));
						}
					}
				}
			]
		});
	}, [doAlert, dispatch, id, listElement]);

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

	const beginOrEndEditingtitle = () => {
		if(disabled) {
			setDisabled(false);
			setTimeout(
				() => inputElement && inputElement.setFocus(),
				10
			);
			return;
		}
		setDisabled(true);
		id && dispatch(renameGroup({id, title: possiblyUnsavedTitle.trim() || defaultTitle}));
	};

	const maybeSaveColor = useCallback((color: Color) => {
		dispatch(changeGroupColor({id, color}));
		setOpenChangeColorModal(false);
	}, [dispatch, setOpenChangeColorModal, id]);

	const members = useMemo(() => {
		return contents.map((info, position) => {
			const [link, title] = info;
			if(title === universalBookmarkDividerId) {
				return <BookmarkDivider color={color} index={position} title={title} id={id} key={`orderable-bookmark-divider-${link}-in-group-${id || ""}`} />;
			}
			return <BookmarkItem id={id} link={link} index={position} title={title} doEdit={doEdit} key={`orderable-bookmark-${link}-in-group-${id || ""}`} />;
		});
	} , [contents, id, color, doEdit]);

	const openColorModal = () => {
		setNewColor(color);
		setOpenChangeColorModal(true);
	}

	const maybeCloseColorModal = () => {
		if(newColor === color) {
			// Ok to close.
			return setOpenChangeColorModal(false);
		}
		doAlert({
			header: "Unsaved Work",
			message: "You haven't saved your new color choice. Are you sure you want to cancel?",
			cssClass: "cancelModal",
			buttons: [{
				text: "Yes, Cancel",
				role: "destructive",
				handler: () => {
					setOpenChangeColorModal(false);
				},
				cssClass: "dangerous"
			}, {
				text: "No, Go Back",
				role: "cancel"
			}]
		});
	};

	return (
		<BasicPage
			title={title + " (Bookmarks)"}
			pageId={"/bookmarks/" + id}
			notBookmarkable
			className="bookmarks"
			fab={<Fab color={color} id={id} func={scrollToBottom} />}
			scrollHook={scrollHook}
		>
			<IonModal
				isOpen={openChangeColorModal}
				onIonModalDidDismiss={() => setOpenChangeColorModal(false)}
				backdropDismiss={false}
			>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Change Group Color</IonTitle>
						<IonButtons slot="end">
							<IonButton onClick={maybeCloseColorModal}>
								<IonIcon icon={closeCircle} slot="icon-only" />
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<div id="colorCircles">
						{colorsHexed.map(c => {
							const color = getColor(c);
							const className = "select-circle" + (color === newColor ? " selected" : "");
							const style = { background: c, borderColor: c };
							return (
								<div className="outer" key={`circle-${c}`}>
									<div
										className={className}
										style={style}
										onClick={() => setNewColor(color)}
									></div>
								</div>
							);
						})}
					</div>
					<div id="postCircles">
						<div>Current color:</div>
						<div>{newColor.replace(/^(red(?=or)|blue(?=gr))/, "$1-").replace(/^(sky|light)/, "$1 ")}</div>
					</div>
				</IonContent>
				<IonFooter>
					<IonToolbar>
						<IonButtons slot="end">
							<IonButton fill="solid" color="success" onClick={() => maybeSaveColor(newColor)}>
								<IonIcon icon={save} slot="start" />
								Save
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonFooter>
			</IonModal>
			<ListContext value={listElement}><IonList lines="full" id={id + "BookmarkList"} ref={listRef}>
				<IonItem>
					<IonButton color="secondary" slot="start" fill="clear" onClick={openColorModal}>
						<IonIcon className={`color-${color}`} slot="icon-only" icon={bookmark} />
					</IonButton>
					<IonInput
						placeholder={`Defaults to "${defaultTitle}"`}
						label=""
						value={possiblyUnsavedTitle}
						inputmode="text"
						disabled={disabled}
						onIonInput={(e) => setPossiblyUnsavedTitle(e.detail.value || "")}
						ref={inputRef}
					/>
					<IonButton color="secondary" slot="end" onClick={beginOrEndEditingtitle}>
						<IonLabel>{disabled ? "Edit Title" : "Save"}</IonLabel>
					</IonButton>
				</IonItem>
				<IonItemDivider>
					<IonLabel>Saved Bookmarks:</IonLabel>
				</IonItemDivider>
				<IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
					{members}
				</IonReorderGroup>
			</IonList></ListContext>
		</BasicPage>
	);
};

const BookmarkPage: FC = () => {
	const { id } = useParams<Params>();
	return <KeyedBookmarkPage id={id} key={`bookmarkpage-${id}`} />;
};

export default BookmarkPage;
