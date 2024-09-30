import { IonButton, IonButtons, IonFooter, IonIcon, IonLabel, IonToolbar, IonTabButton } from '@ionic/react';
import { chevronBack, chevronForward, book } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { goBack, goForward } from '../store/historySlice';

type Action = React.Dispatch<React.SetStateAction<boolean>>;

const Slotless: React.FC<{func: Action}> = ({ func }) => {
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

const PageFooter: React.FC<{setIsSourcesModalOpen?: Action}> = ({ setIsSourcesModalOpen }) => {
	const history = useHistory();
	const {previous, next} = useAppSelector(state => state.history);
	const dispatch = useAppDispatch();
	return (
		<IonFooter>
			<IonToolbar>
				<IonButtons slot="start">
					<IonButton onClick={() => { dispatch(goBack()); history.push(previous[0]); }} disabled={previous.length === 0}>
						<IonIcon slot="icon-only" icon={chevronBack} />
					</IonButton>
				</IonButtons>
				{setIsSourcesModalOpen ? <Slotless func={setIsSourcesModalOpen} /> : <></>}
				<IonButtons slot="end">
					<IonButton onClick={() => { dispatch(goForward()); history.push(next[0]); }} disabled={next.length === 0}>
						<IonIcon slot="icon-only" icon={chevronForward} />
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonFooter>
	);
};

export default PageFooter;
