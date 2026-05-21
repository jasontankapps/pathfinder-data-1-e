import { useState, FC, useCallback } from 'react';
import {
	IonButton, IonButtons, IonFooter, IonIcon,
	IonLabel, IonToolbar, IonTabButton,
	IonActionSheet, ActionSheetButton
} from '@ionic/react';
import { chevronBack, chevronForward, search } from 'ionicons/icons';
import { useLongPress } from '@uidotdev/usehooks';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { useLocation } from 'wouter';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { goBack, goForward, goBackNum, goForwardNum, goTo } from '../store/historySlice';
import usePageName from './usePageName';
import './PageFooter.css';

const Slotless: FC<{
	searchButton?: () => void
}> = ({ searchButton }) => {
	return (
		<IonButtons className="slotless">
			{searchButton ? <div onClick={searchButton}>
				<IonTabButton>
					<IonIcon icon={search} />
					<IonLabel>Search</IonLabel>
				</IonTabButton>
			</div> : <></>}
		</IonButtons>
	);
};

const PageFooter: FC<{
	noSearchButton?: boolean
	closeFinder?: (close: boolean) => void
}> = ({ noSearchButton, closeFinder }) => {
	const [ , navigate ] = useLocation();
	const {previous, next} = useAppSelector(state => state.history);
	const dispatch = useAppDispatch();
	const getPageName = usePageName();
	const [prevOpen, setPrevOpen] = useState<boolean>(false);
	const [nextOpen, setNextOpen] = useState<boolean>(false);
	const longPressPrev = useLongPress(() => {
		Haptics.impact({ style: ImpactStyle.Medium });
		setPrevOpen(true);
	}, {});
	const longPressNext = useLongPress(() => {
		Haptics.impact({ style: ImpactStyle.Medium });
		setNextOpen(true);
	}, {});
	const goToSearch = useCallback(() => {
		dispatch(goTo("/search"));
		navigate("/search");
		closeFinder && closeFinder(true);
	}, [navigate, closeFinder, dispatch]);
	return (
		<IonFooter>
			<IonActionSheet
				className="historySheet pagesPrev"
				isOpen={prevOpen}
				onDidDismiss={() => setPrevOpen(false)}
				buttons={
					previous.map((page, i) => ({
						text: getPageName(page),
						handler: () => {
							Haptics.impact({ style: ImpactStyle.Light });
							dispatch(goBackNum(i + 1));
							navigate(page);
						}
					} as ActionSheetButton)).concat([{ text: "Cancel", role: "cancel" }])
				}
			/>
			<IonActionSheet
				className="historySheet pagesNext"
				isOpen={nextOpen}
				onDidDismiss={() => setNextOpen(false)}
				buttons={
					next.map((page, i) => ({
						text: getPageName(page),
						handler: () => {
							Haptics.impact({ style: ImpactStyle.Light });
							dispatch(goForwardNum(i + 1));
							navigate(page);
						}
					} as ActionSheetButton)).concat([{ text: "Cancel", role: "cancel" }])
				}
			/>
			<IonToolbar>
				<IonButtons slot="start">
					<IonButton {...longPressPrev} id="prevButton" onClick={() => {
						// Back Button
						Haptics.impact({ style: ImpactStyle.Light });
						closeFinder && closeFinder(true);
						dispatch(goBack());
						navigate(previous[0]);
					}} disabled={previous.length === 0}>
						<IonIcon slot="icon-only" icon={chevronBack} />
					</IonButton>
				</IonButtons>
				<Slotless
					searchButton={noSearchButton ? undefined : goToSearch}
				/>
				<IonButtons slot="end">
					<IonButton {...longPressNext} id="nextButton" onClick={() => {
						// Forward Button
						Haptics.impact({ style: ImpactStyle.Light });
						closeFinder && closeFinder(true);
						dispatch(goForward());
						navigate(next[0]);
					}} disabled={next.length === 0}>
						<IonIcon slot="icon-only" icon={chevronForward} />
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonFooter>
	);
};

export default PageFooter;
