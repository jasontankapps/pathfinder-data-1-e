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
import { closeCircle } from 'ionicons/icons';
import { convertTextToLink } from './convertLinks';
import sourceInfo from '../json/sources.json';
import { SourceProps } from '../types';
import '../pages/Page.css';
import './SourcesModal.css';

type Data = typeof sourceInfo;

export type SourceProp = keyof Data;

interface ModalProps {
	sources: SourceProp[]
	isOpen: boolean
	setIsOpen: (open: boolean) => void
}

export interface CopyOf<T> extends Partial<SourceProps> {
	copyof?: T
}

function getItem<T extends { not_found: SourceProps }> (id: keyof T | undefined, json: T): SourceProps {
	let data = (json[id || "not_found"] || json.not_found) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[copyof || "not_found"] || json.not_found) as CopyOf<keyof T>), ...etc};
	}
	return data as SourceProps;
};

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
				<IonList className="sourceList" lines="full">
					{
						sources.length > 0 ? (
							<>
								<IonItem><IonLabel>
									<h1>Note</h1>
									<h2>Links below lead to external sites.</h2>
								</IonLabel></IonItem>
								{sources.map((source, i) => {
									const key = `modal/source/${i}`;
									const linkified = convertTextToLink(source) as keyof Data;
									const sourceObject = getItem<Data>(linkified, sourceInfo);
									return (
										sourceObject
											? <IonItem key={key} href={sourceObject.url} className="sourceLink"><IonLabel>{sourceObject.title}</IonLabel></IonItem>
											: <IonItem key={key}><IonLabel>{source}</IonLabel></IonItem>
											//: <IonItem key={key + "/empty"}><IonLabel>{source}</IonLabel></IonItem>
									);
								})}
							</>
						) : (
							<IonItem><IonLabel><em>No sources provided for this page.</em></IonLabel></IonItem>
						)
					}
				</IonList>
			</IonContent>
		</IonModal>
	);

};

export default SourcesModal;
