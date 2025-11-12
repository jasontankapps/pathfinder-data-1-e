import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import './pages/Page.css';

const Icons: React.FC = () => {

	return (
		<IonPage>
			<PageHeader title="Icons" />
			<IonContent>
				<IonList lines="none">
					<IonItem lines="none">
						<IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Boxes containing this symbol list the prerequisites for a given ability.</p>
						</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default Icons;
