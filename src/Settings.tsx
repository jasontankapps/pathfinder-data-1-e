import { IonContent, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonText, IonToggle } from '@ionic/react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setConstraint, toggleNoElephant, toggleNoMythic, toggleNoStamina } from './store/settingsSlice';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import Link from './components/Link';
import './pages/css/Page.css';

const SettingsPage: React.FC = () => {
	const { noStamina, noMythic, noElephant, constraint = 0 } = useAppSelector(state => state.settings);
	const dispatch = useAppDispatch();

	return (
		<IonPage className="settingsPage">
			<PageHeader title="Settings" notBookmarkable />
			<IonContent>
				<IonList lines="full">
					<IonItem lines="none" className="cnone">
						<IonLabel><em>You can constrain the width of paragraphs if they are getting too wide to read on your screen.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic selectTertiary cxl">
						<IonSelect label="Paragraph size:" value={constraint} onIonChange={(e) => dispatch(setConstraint(e.detail.value))} justify="end">
							<IonSelectOption value={0}>No constraints</IonSelectOption>
							<IonSelectOption value={1}>Extra Large</IonSelectOption>
							<IonSelectOption value={2}>Large</IonSelectOption>
							<IonSelectOption value={3}>Medium</IonSelectOption>
							<IonSelectOption value={4}>Small</IonSelectOption>
							<IonSelectOption value={5}>Extra Small</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem className="mainItem basic selectTertiary cl">
						<IonSelect label="Paragraph size:" value={constraint} onIonChange={(e) => dispatch(setConstraint(e.detail.value))} justify="end">
							<IonSelectOption value={0}>No constraints</IonSelectOption>
							<IonSelectOption value={1} disabled>Extra Large</IonSelectOption>
							<IonSelectOption value={2} className="cl">Large</IonSelectOption>
							<IonSelectOption value={3} className="cm">Medium</IonSelectOption>
							<IonSelectOption value={4} className="cs">Small</IonSelectOption>
							<IonSelectOption value={5} className="cxs">Extra Small</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem className="mainItem basic selectTertiary cm">
						<IonSelect label="Paragraph size:" value={constraint} onIonChange={(e) => dispatch(setConstraint(e.detail.value))} justify="end">
							<IonSelectOption value={0}>No constraints</IonSelectOption>
							<IonSelectOption value={1} disabled>Extra Large</IonSelectOption>
							<IonSelectOption value={2} disabled>Large</IonSelectOption>
							<IonSelectOption value={3} className="cm">Medium</IonSelectOption>
							<IonSelectOption value={4} className="cs">Small</IonSelectOption>
							<IonSelectOption value={5} className="cxs">Extra Small</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem className="mainItem basic selectTertiary cs">
						<IonSelect label="Paragraph size:" value={constraint} onIonChange={(e) => dispatch(setConstraint(e.detail.value))} justify="end">
							<IonSelectOption value={0}>No constraints</IonSelectOption>
							<IonSelectOption value={1} disabled>Extra Large</IonSelectOption>
							<IonSelectOption value={2} disabled>Large</IonSelectOption>
							<IonSelectOption value={3} disabled>Medium</IonSelectOption>
							<IonSelectOption value={4} className="cs">Small</IonSelectOption>
							<IonSelectOption value={5} className="cxs">Extra Small</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem className="mainItem basic selectTertiary cxs">
						<IonSelect label="Paragraph size:" value={constraint} onIonChange={(e) => dispatch(setConstraint(e.detail.value))} justify="end">
							<IonSelectOption value={0}>No constraints</IonSelectOption>
							<IonSelectOption value={1} disabled>Extra Large</IonSelectOption>
							<IonSelectOption value={2} disabled>Large</IonSelectOption>
							<IonSelectOption value={3} disabled>Medium</IonSelectOption>
							<IonSelectOption value={4} disabled>Small</IonSelectOption>
							<IonSelectOption value={5} className="cxs">Extra Small</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem lines="none">
						<IonLabel><em>Some feats have extra options that can only be used if you are using the optional <Link to="/rule/stamina_and_combat_tricks">Stamina and Combat Tricks</Link> rules and have the <Link to="/feat/combat_stamina">Combat Stamina</Link> feat. If you're not using those rules or that feat, you can toggle this extra information off.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic">
						<IonToggle justify="end" enableOnOffLabels checked={noStamina} onIonChange={() => dispatch(toggleNoStamina(!noStamina))}><IonText color="tertiary">Hide Combat Tricks</IonText></IonToggle>
					</IonItem>
					<IonItem lines="none">
						<IonLabel><em>Some feats and spells have Mythic versions that can only be used if you're using the <Link to="/rule/mythic_rules">Mythic rules</Link>. If you're not using them, you can toggle these extra spells and feats off.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic">
						<IonToggle justify="end" enableOnOffLabels checked={noMythic} onIonChange={() => dispatch(toggleNoMythic(!noMythic))}><IonText color="tertiary">Hide Mythic Spells/Feats</IonText></IonToggle>
					</IonItem>
					<IonItem lines="none">
						<IonLabel><em><Link to="/rule/the_elephant_in_the_room">"The Elephant in the Room"</Link> is an optional, non-Paizo ruleset that changes the way feats work. Some feats and other pages will have extra information on them from this ruleset. If you're not using those rules, you can toggle this extra information off.</em></IonLabel>
					</IonItem>
					<IonItem className="mainItem basic">
						<IonToggle justify="end" enableOnOffLabels checked={noElephant} onIonChange={() => dispatch(toggleNoElephant(!noElephant))}><IonText color="tertiary">Hide "Elephant in the Room" Rules</IonText></IonToggle>
					</IonItem>
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default SettingsPage;
