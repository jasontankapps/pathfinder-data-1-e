import { IonContent, IonList, IonPage } from '@ionic/react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import { AboutInfo } from './AboutOnlyPage';
import main from './pages/subpages/__main1';
import './pages/Page.css';

const FrontPage: React.FC = () => {
	const { title, jsx } = main.main;

	return (
		<IonPage>
			<PageHeader title={title} className="ion-hide-lg-up" />
			<PageHeader title="About Pf Data 1e" className="ion-hide-lg-down" />
			<IonContent>
				<div className="main basicContent ion-hide-lg-up">
					<IonList lines="full">
						{jsx}
					</IonList>
				</div>
				<AboutInfo className="ion-hide-lg-down basicContent simple" />
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default FrontPage;
