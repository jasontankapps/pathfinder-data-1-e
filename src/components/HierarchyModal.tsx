import { useCallback } from 'react';
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
	const close = useCallback(() => setIsOpen(false), [setIsOpen]);

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={close}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Hierarchy</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={close}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
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
								routerLink={"/" + pair[1]}
								routerDirection="forward"
								className={`linked ${i ? ` indent${i}` : ""}`}
								onClick={close}
							><IonLabel>{`${i + 1}. ${pair[0]}`}</IonLabel></IonItem>;
						})
					}
				</IonList>
			</IonContent>
		</IonModal>
	);
};

export default HierarchyModal;
