import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonModal,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import '../pages/Page.css';

type LinkPair = [ string, string ];

interface PageProps {
	hierarchy: LinkPair[]
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HierarchyModal: React.FC<PageProps> = (props) => {

	const { hierarchy, isOpen, setIsOpen } = props;

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={() => setIsOpen(false)}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Hierarchy</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => setIsOpen(false)}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList className="hierarchyModal" lines="full">
					{
						hierarchy.map((pair, i) => {
							const key = `parents/${i}`;
							return <IonItem
								key={key + "/empty"}
								href={"/" + pair[1]}
								className={`linked ${i ? ` indent${i}` : ""}`}
							><IonLabel>{`${i + 1}. ${pair[0]}`}</IonLabel></IonItem>;
						})
					}
				</IonList>
			</IonContent>
		</IonModal>
	);
};

export default HierarchyModal;
