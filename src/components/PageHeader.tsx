import { Dispatch, PropsWithChildren, useMemo } from 'react';
import {
	IonButton, IonButtons, IonHeader, IonIcon,
	IonMenuButton, IonTitle, IonToolbar, IonPopover,
	IonContent, IonList, IonItem, IonText, IonLabel
} from '@ionic/react';
import { bookmark, bookmarkOutline, bookmarks, search } from 'ionicons/icons';
import { useLocation } from 'wouter';
import { goTo } from '../store/historySlice';
import { addBookmark, removeBookmark } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import getPageName from './getPageName';
import './Bookmarks.css';

const Bookmarks: React.FC<{location: string}> = ({location}) => {
	const dispatch = useAppDispatch();
	const { db, order, ...colors } = useAppSelector((state) => state.bookmarks);
	const bookmarked = db[location] || [];
	const checkboxes = useMemo(() => {
		const current = db[location] || [];
		return order.filter(c => !colors[c].hidden).map(c => {
			const checked = current.indexOf(c) > -1;
			const color = colors[c];
			const addOrRemove = checked ? removeBookmark : addBookmark;
			const bookmarkingIcon = checked ? bookmark : bookmarkOutline;
			return (
				<IonItem
					key={`checkbox-bookmark-${c}`}
					onClick={() => dispatch(addOrRemove({id: location, title: getPageName(location), color: c}))}
					button
					detail={false}
				>
					<IonLabel><IonText className={`color-${c}`}>{color.title}</IonText></IonLabel>
					<IonIcon className={`color-${c}`} slot="end" icon={bookmarkingIcon} />
				</IonItem>
			);
		});
	}, [db, order, location, colors, dispatch]);
	return (
		<>
			<IonButton id={`${location}bookmarker`}>
				<IonIcon
					slot="icon-only"
					icon={
						bookmarked.length > 1
							? bookmarks
							: bookmarked.length
								? bookmark : bookmarkOutline
					}
					className={
						bookmarked.length
							? `color-${bookmarked.slice(0,2).join('-')}`
						: undefined
					}
				/>
			</IonButton>
			<IonPopover trigger={`${location}bookmarker`} side="bottom" alignment="end">
				<IonContent>
					<IonList lines="full">
						{...checkboxes}
					</IonList>
				</IonContent>
			</IonPopover>
		</>
	);
};

const PageHeader: React.FC<PropsWithChildren<{
	title: string,
	noSearch?: boolean,
	notBookmarkable?: boolean,
	findInPage?: Dispatch<boolean>,
	findingInPage?: boolean,
	className?: string
}>> = ({ title, children, noSearch, notBookmarkable, findInPage, findingInPage, className }) => {
	const [location, navigate] = useLocation();
	const dispatch = useAppDispatch();
	return (
		<IonHeader className={className}>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
				{
					noSearch && !findInPage && notBookmarkable
						? <></>
						: <IonButtons slot="end">
							{findInPage
								? (
									<IonButton onClick={() => findInPage(!findingInPage)} color={findingInPage ? "tertiary" : undefined}>
										<IonIcon slot="icon-only" icon="/icons/find-in-page.svg" />
									</IonButton>
								) : <></>
							}
							{notBookmarkable ? <></> : <Bookmarks location={location} /> }
							{noSearch
								? <></>
								: (
									<IonButton onClick={() => { dispatch(goTo("/search")); navigate("/search"); }}>
										<IonIcon slot="icon-only" icon={search} />
									</IonButton>
								)
							}
						</IonButtons>
				}
			</IonToolbar>
			{children}
		</IonHeader>
	);
};

export default PageHeader;
