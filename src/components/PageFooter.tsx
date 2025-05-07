import { SetStateAction, useState, FC } from 'react';
import {
	IonButton, IonButtons, IonFooter, IonIcon,
	IonLabel, IonToolbar, IonTabButton,
	IonActionSheet, ActionSheetButton
} from '@ionic/react';
import { chevronBack, chevronForward, book } from 'ionicons/icons';
import { useLocation } from 'wouter';
import { useLongPress } from '@uidotdev/usehooks';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { goBack, goForward, goBackNum, goForwardNum } from '../store/historySlice';
import getPageName from './getPageName';

type Action = React.Dispatch<SetStateAction<boolean>>;

const Slotless: FC<{func: Action}> = ({ func }) => {
	return (
		<IonButtons className="slotless">
			<div onClick={() => func(true)}>
				<IonTabButton>
					<IonIcon icon={book} />
					<IonLabel>Sources</IonLabel>
				</IonTabButton>
			</div>
		</IonButtons>
	);
};

const PageFooter: FC<{setIsSourcesModalOpen?: Action}> = ({ setIsSourcesModalOpen }) => {
	const [ location, navigate ] = useLocation();
	const {previous, next} = useAppSelector(state => state.history);
	const dispatch = useAppDispatch();
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
						Haptics.impact({ style: ImpactStyle.Light });
						dispatch(goBack());
						navigate(previous[0]);
					}} disabled={previous.length === 0}>
						<IonIcon slot="icon-only" icon={chevronBack} />
					</IonButton>
				</IonButtons>
				{setIsSourcesModalOpen ? <Slotless func={setIsSourcesModalOpen} /> : <></>}
				<IonButtons slot="end">
					<IonButton {...longPressNext} id="nextButton" onClick={() => {
						Haptics.impact({ style: ImpactStyle.Light });
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
