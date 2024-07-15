import { IonButton, IonButtons, IonFooter, IonIcon, IonToolbar } from '@ionic/react';
import { chevronBack, chevronForward, informationCircle } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Slotless: React.FC<{func: React.Dispatch<React.SetStateAction<boolean>>}> = ({ func }) => {
	return (
		<IonButtons className="slotless">
			<IonButton onClick={() => func(true)}>
				<IonIcon slot="icon-only" icon={informationCircle} />
			</IonButton>
		</IonButtons>
	);
};

const PageFooter: React.FC<{setIsSourcesModalOpen?: React.Dispatch<React.SetStateAction<boolean>>}> = (
	{ setIsSourcesModalOpen }
) => {
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
