import { FC, ReactNode } from 'react';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import ParentTopics from './ParentTopics';
import './Page.css';

type LinkPair = [ string, string ];

interface PageProps {
	title: string
	parents: LinkPair[]
	content: ReactNode
}

const Page: FC<PageProps> = (props) => {

	const { title, parents, content } = props;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonList>
					<ParentTopics parents={parents} />
					{content}
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start"><IonButton><IonIcon icon={chevronBack} /></IonButton></IonButtons>
					<IonButtons slot="end"><IonButton><IonIcon icon={chevronForward} /></IonButton></IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};

export default Page;
