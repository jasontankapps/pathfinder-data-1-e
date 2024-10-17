import { SetStateAction, useState, FC, useRef } from 'react';
import { useHistory } from 'react-router';
import {
	IonButton, IonButtons, IonFooter, IonIcon,
	IonLabel, IonToolbar, IonTabButton,
	IonActionSheet, ActionSheetButton
} from '@ionic/react';
import { chevronBack, chevronForward, book } from 'ionicons/icons';
import { useLongPress } from '@uidotdev/usehooks';
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
	const history = useHistory();
	const {previous, next} = useAppSelector(state => state.history);
	const dispatch = useAppDispatch();
	const [prevOpen, setPrevOpen] = useState<boolean>(false);
	const [nextOpen, setNextOpen] = useState<boolean>(false);
	const prevSheet = useRef<any>(null);
	const nextSheet = useRef<any>(null);
	const longPressPrev = useLongPress(() => setPrevOpen(true), {});
	const longPressNext = useLongPress(() => setNextOpen(true), {});
	return (
		<IonFooter>
			<IonActionSheet
				ref={prevSheet}
				className="historySheet pagesPrev"
				isOpen={prevOpen}
				onDidDismiss={() => setPrevOpen(false)}
				buttons={
					previous.map((page, i) => ({
						text: getPageName(page),
						handler: () => { dispatch(goBackNum(i + 1)); history.push(page); }
					} as ActionSheetButton)).concat([{ text: "Cancel", role: "cancel" }])
				}
			/>
			<IonActionSheet
				ref={nextSheet}
				className="historySheet pagesNext"
				isOpen={nextOpen}
				onDidDismiss={() => setNextOpen(false)}
				buttons={
					next.map((page, i) => ({
						text: getPageName(page),
						handler: () => { dispatch(goForwardNum(i + 1)); history.push(page); }
					} as ActionSheetButton)).concat([{ text: "Cancel", role: "cancel" }])
				}
			/>
			<IonToolbar>
				<IonButtons slot="start">
					<IonButton {...longPressPrev} id="prevButton" onClick={() => { dispatch(goBack()); history.push(previous[0]); }} disabled={previous.length === 0}>
						<IonIcon slot="icon-only" icon={chevronBack} />
					</IonButton>
				</IonButtons>
				{setIsSourcesModalOpen ? <Slotless func={setIsSourcesModalOpen} /> : <></>}
				<IonButtons slot="end">
					<IonButton {...longPressNext} id="nextButton" onClick={() => { dispatch(goForward()); history.push(next[0]); }} disabled={next.length === 0}>
						<IonIcon slot="icon-only" icon={chevronForward} />
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonFooter>
	);
};

export default PageFooter;
