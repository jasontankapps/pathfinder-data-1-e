import {
	FC, Dispatch, PropsWithChildren, useMemo,
	ReactElement, MouseEventHandler, SetStateAction
} from 'react';
import {
	IonButton, IonButtons, IonHeader, IonIcon,
	IonMenuButton, IonTitle, IonToolbar, IonPopover,
	IonContent, IonList, IonItem, IonText, IonLabel
} from '@ionic/react';
import { bookmark, bookmarkOutline, bookmarks, } from 'ionicons/icons';
import { useLocation } from 'wouter';
import { addBookmark, removeBookmark } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import getPageName from './getPageName';
import './Bookmarks.css';

const Bookmarks: FC<{location: string}> = ({location}) => {
	const dispatch = useAppDispatch();
	const { db, order, catalog } = useAppSelector((state) => state.bookmarks);
	const bookmarked = catalog[location] || [];
	const checkboxes = useMemo(() => {
		return order.filter(id => !db[id].hidden).map(id => {
			const checked = bookmarked.indexOf(id) > -1;
			const {color, title, contents} = db[id];
			const bookmarkingIcon = checked ? bookmark : bookmarkOutline;
			let onClick: MouseEventHandler<HTMLIonItemElement>;
			if(checked) {
				// Set up to remove
				let position = 0;
				contents.some(([link], i) => {
					if(link === location) {
						position = i;
						return true;
					}
					return false;
				});
				onClick = () => dispatch(removeBookmark({id, position}));
			} else {
				// Set up to add
				onClick = () => dispatch(addBookmark({link: location, title: getPageName(location), id}));
			}
			return (
				<IonItem
					key={`checkbox-bookmark-${id}`}
					onClick={onClick}
					button
					detail={false}
				>
					<IonLabel><IonText className={`color-${color}`}>{title}</IonText></IonLabel>
					<IonIcon className={`color-${color}`} slot="end" icon={bookmarkingIcon} />
				</IonItem>
			);
		});
	}, [db, order, location, bookmarked, dispatch]);
	const className = bookmarked.length ? `color-${db[bookmarked[bookmarked.length - 1]].color}` : undefined;
	const trigger = `${location}bookmarker`;
	return (
		<>
			<IonButton id={trigger}>
				<IonIcon
					slot="icon-only"
					icon={
						bookmarked.length > 1
							? bookmarks
							: bookmarked.length
								? bookmark : bookmarkOutline
					}
					className={className}
				/>
			</IonButton>
			<IonPopover trigger={trigger} side="bottom" alignment="end">
				<IonContent>
					<IonList lines="full">
						{...checkboxes}
					</IonList>
				</IonContent>
			</IonPopover>
		</>
	);
};

const PageHeader: FC<PropsWithChildren<{
	title: string,
	notBookmarkable?: boolean,
	findInPage?: Dispatch<boolean>,
	findingInPage?: boolean,
	className?: string,
	extraButton?: ReactElement
}>> = ({ title, children, notBookmarkable, findInPage, findingInPage, className, extraButton }) => {
	const [location] = useLocation();
	return (
		<IonHeader className={className}>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
				{
					!findInPage && notBookmarkable && !extraButton
						? <></>
						: <IonButtons slot="end">
							{extraButton || <></>}
							{findInPage
								? (
									<IonButton
										onClick={() => findInPage(!findingInPage)}
										color={findingInPage ? "tertiary" : undefined}
									>
										<IonIcon slot="icon-only" icon="/icons/find-in-page.svg" />
									</IonButton>
								) : <></>
							}
							{ notBookmarkable ? <></> : <Bookmarks location={location} /> }
						</IonButtons>
				}
			</IonToolbar>
			{children}
		</IonHeader>
	);
};

export default PageHeader;
