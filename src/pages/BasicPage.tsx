import { FC, PropsWithChildren } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DisplayItem from '../components/DisplayItem';
import { DisplayItemProps, HierarchyArray } from '../types';
import './Page.css';

interface PageProps {
	title: string
	displayItem?: DisplayItemProps
	previous?: HierarchyArray
}

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const { title, displayItem, children } = props;

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
				{displayItem ? <DisplayItem {...displayItem} /> : children}
			</IonContent>
		</IonPage>
	);
};

export default BasicPage;
