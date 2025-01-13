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
import { useLocation } from 'wouter';
import { goTo } from '../store/historySlice';
import { useAppDispatch } from '../store/hooks';
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
	const [location, navigate] = useLocation();
	const dispatch = useAppDispatch();

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
							const goto = "/" + pair[1];
							return <IonItem
								key={key + "/empty"}
								className={`linked ${i ? ` indent${i}` : ""}`}
								onClick={() => {
									close();
									dispatch(goTo(goto));
									navigate(goto);
								}}
							><IonLabel>{`${i + 1}. ${pair[0]}`}</IonLabel></IonItem>;
						})
					}
				</IonList>
			</IonContent>
		</IonModal>
	);
};

export default HierarchyModal;
