import { FC } from 'react';
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
import { Link } from 'react-router-dom';
import { closeCircle } from 'ionicons/icons';
import sourceJson from '../json/sources.json';
import './Page.css';
import { SourceProps } from '../types';

interface ModalProps {
	sources: string[]
	isOpen: boolean
	setIsOpen: (open: boolean) => void
}

const sourceInfo = {...sourceJson} as { [key: string]: SourceProps };

const SourcesModal: FC<ModalProps> = (props) => {

	const { sources, isOpen, setIsOpen } = props;

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={() => setIsOpen(false)}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Sources</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => setIsOpen(false)}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList className="sourceList">
					{
						sources.length > 0 ? (
							sources.map((source, i) => {
								const key = `modal/source/${i}`;
								return (
									sourceInfo[source]
										? <IonItem key={key} href={sourceInfo[source].url}><IonLabel>{sourceInfo[source].title}</IonLabel></IonItem>
										: <IonItem key={key}><IonLabel>{source}</IonLabel></IonItem>
										//: <IonItem key={key + "/empty"}><IonLabel>{source}</IonLabel></IonItem>
								);
							})
						) : (
							<IonItem><IonLabel><i>No sources provided.</i></IonLabel></IonItem>
						)
					}
				</IonList>
			</IonContent>
		</IonModal>
	);

};

export default SourcesModal;
