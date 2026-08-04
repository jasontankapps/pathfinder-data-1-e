import { IonContent, IonList, IonPage } from '@ionic/react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import { AboutInfo } from './AboutOnlyPage';
import MainLink from './components/MainLink';

const FrontPage: React.FC = () => {

	return (
		<IonPage>
			<PageHeader title="Pf Data 1e" className="ion-hide-lg-up" />
			<PageHeader title="About Pf Data 1e" className="ion-hide-lg-down" />
			<IonContent>
				<div className="main basicContent ion-hide-lg-up">
					<IonList lines="full">
						<MainLink to="/main/rules" info="Pathfinder Rules" />
						<MainLink to="/main/races" info="Races" />
						<MainLink to="/main/classes" info="Classes" />
						<MainLink to="/main/skills" info="Skills" />
						<MainLink to="/main/feats" info="Feats" />
						<MainLink to="/main/traits" info="Traits" />
						<MainLink to="/main/equipment" info="Equipment" />
						<MainLink to="/main/magic" info="Magic Items" />
						<MainLink to="/main/spells" info="Spells" />
						<MainLink to="/main/faiths" info="Deities and Faiths" />
						<MainLink to="/main/monsters" info="Monsters and NPCs" />
						<MainLink to="/about" className="reversed" info="About Pf Data 1e" />
						<MainLink to="/main/ogc" className="reversed" info="Open Game License" />
					</IonList>
				</div>
				<AboutInfo className="ion-hide-lg-down basicContent" />
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default FrontPage;
