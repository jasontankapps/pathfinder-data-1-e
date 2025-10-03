import { IonContent, IonItem, IonLabel, IonList, IonPage, IonToggle } from '@ionic/react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { toggleNoElephant, toggleNoMythic, toggleNoStamina } from './store/settingsSlice';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import Link from './components/Link';
import './pages/Page.css';

const SettingsPage: React.FC = () => {
	const { noStamina, noMythic, noElephant } = useAppSelector(state => state.settings);
	const dispatch = useAppDispatch();

	return (
		<IonPage>
			<PageHeader title="Settings" />
			<IonContent>
				<IonList lines="full">
					<IonItem lines="none">
						<IonLabel><em>Some feats have extra options that can only be used if you are using the optional <Link to="/rule/stamina_and_combat_tricks">Stamina and Combat Tricks</Link> rules and have the <Link to="/feat/combat_stamina">Combat Stamina</Link> feat. If you're not using those rules or that feat, you can toggle this extra information off.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic">
						<IonToggle justify="end" enableOnOffLabels checked={noStamina} onIonChange={() => dispatch(toggleNoStamina(!noStamina))} color="primary">Hide Combat Tricks</IonToggle>
					</IonItem>
					<IonItem lines="none">
						<IonLabel><em>Some feats and spells have Mythic versions that can only be used if you're using the <Link to="/rule/mythic_rules">Mythic rules</Link>. If you're not using them, you can toggle these extra spells and feats off.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic">
						<IonToggle justify="end" enableOnOffLabels checked={noMythic} onIonChange={() => dispatch(toggleNoMythic(!noMythic))} color="primary">Hide Mythic Spells/Feats</IonToggle>
					</IonItem>
					<IonItem lines="none">
						<IonLabel><em><Link to="/rule/the_elephant_in_the_room">"The Elephant in the Room"</Link> is an optional, non-Paizo ruleset that changes the way feats work. Some feats and other pages will have extra information on them from this ruleset. If you're not using those rules, you can toggle this extra information off.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic">
						<IonToggle justify="end" enableOnOffLabels checked={noElephant} onIonChange={() => dispatch(toggleNoElephant(!noElephant))} color="primary">Hide "Elephant in the Room" Rules</IonToggle>
					</IonItem>
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default SettingsPage;
