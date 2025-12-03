import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import './pages/Page.css';

const Icons: React.FC = () => {

	return (
		<IonPage>
			<PageHeader title="Icons" />
			<IonContent className="standalone">
				<IonList lines="full">
					<IonItem>
						<IonIcon icon="/icons/confirmed.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A list of prerequisites for a given ability.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/mailed-fist.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Some sort of melee attack or melee attack effect.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/bowman.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A ranged attack or ranged attack effect.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/magic-palm.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Some sort of melee touch attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/smoking-finger.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Some sort of magical ranged attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/magic-swirl.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>General magical, supernatural, or uncanny ability.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/rolling-dices.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A change to the outcome of a die roll.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/barbed-arrow.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A line-effect magical attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/tornado-discs.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A cone-effect magical attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/spell-book.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Gain one or more spells known.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/abstract-091.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Some sort of magical aura or other radius-limited effect.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/armor-upgrade.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A defensive ability.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/shield-reflect.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>An ability that provides protection to another.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/muscle-up.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Gain a new ability or companion.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/broken-shield.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A change to class skills.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/embraced-energy.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Boost your own abilities, or an ally's.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/cherish.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>Some sort of healing or otherwise helpful action.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/armor-downgrade.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>An effect that lowers the defenses of others.</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon="/icons/broken-shield.svg" color="secondary" slot="start" />
						<IonLabel className="ion-text-wrap">
							<p>A downgrade of your own abilities, or an ally's.</p>
						</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default Icons;
