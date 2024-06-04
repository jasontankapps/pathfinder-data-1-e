import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import DisplayItem from '../components/DisplayItem';
import main1 from '../json/main.json';
import main2 from '../json/main2.json';
import main3 from '../json/main3.json';
import { ItemProps } from '../types';
import './Page.css';

const main = {...main1, ...main2, ...main3};

const MainPage: React.FC = () => {

	const { mainpage = "main" } = useParams<{ mainpage?: keyof typeof main; }>();

	const info = (main[mainpage] || main.main) as ItemProps;

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
