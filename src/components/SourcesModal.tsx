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
import sourceInfo from '../json/sources.json';
import { SourceProps } from '../types';
import '../pages/Page.css';

type Data = typeof sourceInfo;

export type SourceProp = keyof Data;

interface ModalProps {
	sources: SourceProp[]
	isOpen: boolean
	setIsOpen: (open: boolean) => void
}

export interface CopyOf<T> extends Partial<SourceProps> {
	copyof: T
}

function getItem<T extends { unknown: SourceProps }> (id: keyof T | undefined, json: T): SourceProps {
	let data = (json[id || "unknown"] || json.unknown) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[id || "unknown"] || json.unknown) as CopyOf<keyof T>), ...etc};
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
				<IonList className="sourceList">
					{
						sources.length > 0 ? (
							sources.map((source, i) => {
								const key = `modal/source/${i}`;
								const sourceObject = getItem<Data>(source, sourceInfo);
								return (
									sourceInfo[source]
										? <IonItem key={key} href={sourceObject.url}><IonLabel>{sourceObject.title}</IonLabel></IonItem>
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
