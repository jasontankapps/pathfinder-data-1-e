import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import DisplayItem from '../components/DisplayItem';
import main from '../json/main.json';
import { ItemProps } from '../types';
import './Page.css';

const appPages: any[] = [
	"/rules",
	"/races",
	"/classes",//
	"/skills",//
	"/feats",
	"/traits",
	"/equipment",
	"/magic",
	"/spells",
	"/faiths",
	"/monstersnpcs",
];

const MainPage: React.FC = () => {

	const { mainpage = "main" } = useParams<{ mainpage?: keyof typeof main; }>();

	const info = main[mainpage] as ItemProps;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{info.title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<DisplayItem markdown={info.description} tables={info.tables} />
			</IonContent>
		</IonPage>
	);
};

export default MainPage;
