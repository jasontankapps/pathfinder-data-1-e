import { IonButton, IonButtons, IonFooter, IonIcon, IonLabel, IonToolbar, IonTabButton } from '@ionic/react';
import { chevronBack, chevronForward, book } from 'ionicons/icons';
import { useHistory } from 'react-router';

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
	return (
		<IonFooter>
			<IonToolbar>
				<IonButtons slot="start">
					<IonButton onClick={() => history.goBack()}>
						<IonIcon slot="icon-only" icon={chevronBack} />
					</IonButton>
				</IonButtons>
				{setIsSourcesModalOpen ? <Slotless func={setIsSourcesModalOpen} /> : <></>}
				<IonButtons slot="end">
					<IonButton onClick={() => history.goForward()}>
						<IonIcon slot="icon-only" icon={chevronForward} />
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonFooter>
	);
};

export default PageFooter;
