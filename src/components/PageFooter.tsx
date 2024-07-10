import { IonButton, IonButtons, IonFooter, IonIcon, IonToolbar } from '@ionic/react';
import { chevronBack, chevronForward, informationCircle } from 'ionicons/icons';

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
	return (
		<IonFooter>
			<IonToolbar>
				<IonButtons slot="start">
					<IonButton>
						<IonIcon slot="icon-only" icon={chevronBack} />
					</IonButton>
				</IonButtons>
				{setIsSourcesModalOpen ? <Slotless func={setIsSourcesModalOpen} /> : <></>}
				<IonButtons slot="end">
					<IonButton>
						<IonIcon slot="icon-only" icon={chevronForward} />
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonFooter>
	);
};

export default PageFooter;
