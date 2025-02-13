import { useMemo } from 'react';
import { eye, eyeOff, reorderTwo } from 'ionicons/icons';
import {
	IonButton,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonReorder,
	IonReorderGroup,
	IonText,
	ItemReorderEventDetail
} from '@ionic/react';
import { useLocation } from 'wouter';
import { goTo } from '../store/historySlice';
import { reorderGroups, toggleHidden } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import './Page.css';

const BookmarksPage: React.FC = () => {
	const { db, order, ...colors } = useAppSelector(state => state.bookmarks);
	const dispatch = useAppDispatch();
	const [path, navigate] = useLocation();

	const allBookmarks = useMemo(() => {
		return order.map(c => {
			const {title, hidden} = colors[c];
			return (
				<IonItem
					key={`orderable-bookmark-group-${c}`}
					detail={false}
					className={"link bmColor color-" + c + (hidden ? " dim" : "")}
				>
					<IonReorder slot="start">
						<IonIcon icon={reorderTwo} />
					</IonReorder>
					<IonLabel onClick={() => { navigate(`/bookmarks/${c}`); dispatch(goTo(`/bookmarks/${c}`)); }}>
						<IonText className={`color-${c}`}>{title}</IonText>
					</IonLabel>
					<IonButton color={hidden ? "medium" : "dark"} fill="clear" slot="end" onClick={() => dispatch(toggleHidden(c))}>
						<IonIcon slot="icon-only" icon={hidden ? eyeOff : eye} />
					</IonButton>
				</IonItem>
			);
		});
	}, [db, order, location, colors, dispatch]);

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
		>
			<IonList lines="full">
				<IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
					{...allBookmarks}
				</IonReorderGroup>
			</IonList>
		</BasicPage>
	);
};

export default BookmarksPage;
