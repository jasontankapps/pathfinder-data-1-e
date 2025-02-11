import { FC, Suspense, lazy } from 'react';
import { IonApp, IonContent, IonSplitPane, setupIonicReact } from '@ionic/react';
import { Route, Switch } from 'wouter';

import Menu from './components/Menu';

import ArchetypePage from './pages/ArchetypePage';
import ClassPage from './pages/ClassPage';
import ClassAbilityPage from './pages/ClassAbilityPage';
import EquipmentMiscPage from './pages/EquipmentMiscPage';
import FaithPage from './pages/FaithPage';
import FeatPage from './pages/FeatPage';
import MagicArtifactPage from './pages/MagicArtifactPage';
import MagicWeaponPage from './pages/MagicWeaponPage';
import MagicWondrousPage from './pages/MagicWondrousPage';
import MainPage from './pages/MainPage';
import MonsterPage from './pages/MonsterPage';
import MonsterTemplatePage from './pages/MonsterTemplatePage';
import NPCPage from './pages/NPCPage';
import PrestigeClassPage from './pages/PrestigeClassPage';
import RacePage from './pages/RacePage';
import RulesPage from './pages/RulesPage';
import SpellPage from './pages/SpellPage';
import TraitPage from './pages/TraitPage';
import ErrorPage from './pages/ErrorPage';

import Loading from './Loading';

import FrontPage from './FrontPage';
import AboutOnlyPage from './AboutOnlyPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact({
	hardwareBackButton: false
});

const FeatTreePage = lazy(() => import("./pages/FeatTreePage"));
const AfflictionPage = lazy(() => import("./pages/AfflictionPage"));
const ArcanaPage = lazy(() => import("./pages/ArcanaPage"));
const AspectPage = lazy(() => import("./pages/AspectPage"));
const BlessingPage = lazy(() => import("./pages/BlessingPage"));
const BloodragerBloodlinePage = lazy(() => import("./pages/BloodragerBloodlinePage"));
const CompanionPage = lazy(() => import("./pages/CompanionPage"));
const ConstructModPage = lazy(() => import("./pages/ConstructModPage"));
const CorruptionPage = lazy(() => import("./pages/CorruptionPage"));
const CursePage = lazy(() => import("./pages/OracleCursePage"));
const DisciplinePage = lazy(() => import("./pages/DisciplinePage"));
const DomainPage = lazy(() => import("./pages/DomainPage"));
const DrugPage = lazy(() => import("./pages/DrugPage"));
const DruidDomainPage = lazy(() => import("./pages/DruidDomainPage"));
const EquipmentAlchemicalReagentPage = lazy(() => import("./pages/EquipmentAlchemicalReagentPage"));
const EquipmentArmorEnhancementsPage = lazy(() => import("./pages/EquipmentArmorEnhancementPage"));
const EquipmentArmorPage = lazy(() => import("./pages/EquipmentArmorPage"));
const EquipmentPoisonPage = lazy(() => import("./pages/EquipmentPoisonPage"));
const EquipmentSiegeEnginePage = lazy(() => import("./pages/EquipmentSiegeEnginesPage"));
const EquipmentSpecMaterialPage = lazy(() => import("./pages/EquipmentSpecMaterialPage"));
const EquipmentSpellbookPage = lazy(() => import("./pages/EquipmentSpellbookPage"));
const EquipmentWeaponEnhancementsPage = lazy(() => import("./pages/EquipmentWeaponEnhancementPage"));
const EquipmentWeaponPage = lazy(() => import("./pages/EquipmentWeaponPage"));
const ExploitPage = lazy(() => import("./pages/ExploitPage"));
const HauntPage = lazy(() => import("./pages/HauntPage"));
const HellknightOrderPage = lazy(() => import("./pages/HellknightOrderPage"));
const ImplementPage = lazy(() => import("./pages/ImplementPage"));
const InquisitionPage = lazy(() => import("./pages/InquisitionPage"));
const KineticPage = lazy(() => import("./pages/KineticPage"));
const MadnessPage = lazy(() => import("./pages/MadnessPage"));
const MagicArmorPage = lazy(() => import("./pages/MagicArmorPage"));
const MagicEnhancementPage = lazy(() => import("./pages/MagicEnhancementPage"));
const MagicIounStonePage = lazy(() => import("./pages/MagicIounStonePage"));
const MagicMiscPage = lazy(() => import("./pages/MagicMiscPage"));
const MagicRingPage = lazy(() => import("./pages/MagicRingPage"));
const MagicRodPage = lazy(() => import("./pages/MagicRodPage"));
const MagicStaffPage = lazy(() => import("./pages/MagicStaffPage"));
const MasterpiecePage = lazy(() => import("./pages/MasterpiecePage"));
const MediumSpiritPage = lazy(() => import("./pages/MediumSpiritPage"));
const MonsterFamilyPage = lazy(() => import("./pages/MonsterFamilyPage"));
const MonsterTypingPage = lazy(() => import("./pages/MonsterTypingPage"));
const MysteryPage = lazy(() => import("./pages/MysteryPage"));
const OathPage = lazy(() => import("./pages/OathPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const OtherClassPage = lazy(() => import("./pages/OtherClassPage"));
const RagePowerPage = lazy(() => import("./pages/RagePowerPage"));
const SchoolPage = lazy(() => import("./pages/SchoolPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ShamanSpiritPage = lazy(() => import("./pages/ShamanSpiritPage"));
const SkillPage = lazy(() => import("./pages/SkillPage"));
const SorcererBloodlinePage = lazy(() => import("./pages/SorcererBloodlinePage"));
const SourcePage = lazy(() => import("./pages/SourcePage"));
const SpellDefPage = lazy(() => import("./pages/SpellDefinitionPage"));
const TechArmorPage = lazy(() => import("./pages/EquipmentTechArmorPage"));
const TechArtifactPage = lazy(() => import("./pages/EquipmentTechArtifactPage"));
const TechCybertechPage = lazy(() => import("./pages/EquipmentTechCybertechPage"));
const TechMiscPage = lazy(() => import("./pages/EquipmentTechMiscPage"));
const TechPharmaceuticalsPage = lazy(() => import("./pages/EquipmentTechPharmaceuticalPage"));
const TechWeaponPage = lazy(() => import("./pages/EquipmentTechWeaponPage"));
const TrapPage = lazy(() => import("./pages/TrapPage"));
const UMRPage = lazy(() => import("./pages/UMRPage"));

const App: FC = () => {
	return (
		<IonApp>
			<IonSplitPane contentId="main">
				<Menu />
				<IonContent id="main">
					<Switch>
						<Route path="/about"><AboutOnlyPage /></Route>
						<Route path="/main/:mainpage"><MainPage /></Route>
						<Route path="/arcaneschool/:id"><Suspense fallback={<Loading />}><SchoolPage /></Suspense></Route>
						<Route path="/ability/:id"><ClassAbilityPage /></Route>
						<Route path={/^[/]arc-(?<parent>[a-z_]+)[/](?<id>[a-z_0-9]+)[/]?$/}><ArchetypePage /></Route>
						<Route path="/aspect/:id"><Suspense fallback={<Loading />}><AspectPage /></Suspense></Route>
						<Route path="/bardicmasterpiece/:id"><Suspense fallback={<Loading />}><MasterpiecePage /></Suspense></Route>
						<Route path="/blessing/:id"><Suspense fallback={<Loading />}><BlessingPage /></Suspense></Route>
						<Route path="/bloodragerbloodline/:id"><Suspense fallback={<Loading />}><BloodragerBloodlinePage /></Suspense></Route>
						<Route path="/class/:id"><ClassPage /></Route>
						<Route path="/corruption/:id"><Suspense fallback={<Loading />}><CorruptionPage /></Suspense></Route>
						<Route path={/^[/](curse|disease|infestation)[/](?<id>[a-z_0-9]+)[/]?$/}><Suspense fallback={<Loading />}><AfflictionPage /></Suspense></Route>
						<Route path="/constructmod/:id"><Suspense fallback={<Loading />}><ConstructModPage /></Suspense></Route>
						<Route path="/discipline/:id"><Suspense fallback={<Loading />}><DisciplinePage /></Suspense></Route>
						<Route path="/domain/:id"><Suspense fallback={<Loading />}><DomainPage /></Suspense></Route>
						<Route path="/drug/:id"><Suspense fallback={<Loading />}><DrugPage /></Suspense></Route>
						<Route path="/druidcompanion/:id"><Suspense fallback={<Loading />}><CompanionPage /></Suspense></Route>
						<Route path="/druiddomain/:id"><Suspense fallback={<Loading />}><DruidDomainPage /></Suspense></Route>
						<Route path="/eq-armor/:id"><Suspense fallback={<Loading />}><EquipmentArmorPage /></Suspense></Route>
						<Route path="/eq-armorenh/:id"><Suspense fallback={<Loading />}><EquipmentArmorEnhancementsPage /></Suspense></Route>
						<Route path="/eq-material/:id"><Suspense fallback={<Loading />}><EquipmentSpecMaterialPage /></Suspense></Route>
						<Route path="/eq-misc/:id"><EquipmentMiscPage /></Route>
						<Route path="/eq-poison/:id"><Suspense fallback={<Loading />}><EquipmentPoisonPage /></Suspense></Route>
						<Route path="/eq-reagent/:id"><Suspense fallback={<Loading />}><EquipmentAlchemicalReagentPage /></Suspense></Route>
						<Route path="/eq-siegeengine/:id"><Suspense fallback={<Loading />}><EquipmentSiegeEnginePage /></Suspense></Route>
						<Route path="/eq-spellbook/:id"><Suspense fallback={<Loading />}><EquipmentSpellbookPage /></Suspense></Route>
						<Route path="/eq-weapon/:id"><Suspense fallback={<Loading />}><EquipmentWeaponPage /></Suspense></Route>
						<Route path="/eq-weaponenh/:id"><Suspense fallback={<Loading />}><EquipmentWeaponEnhancementsPage /></Suspense></Route>
						<Route path={/^[/](greater)?exploit[/](?<id>[a-z_0-9]+)[/]?$/}><Suspense fallback={<Loading />}><ExploitPage /></Suspense></Route>
						<Route path="/faith/:id"><FaithPage /></Route>
						<Route path="/family/:id"><Suspense fallback={<Loading />}><MonsterFamilyPage /></Suspense></Route>
						<Route path="/feat/:id"><FeatPage /></Route>
						<Route path="/feattreespage"><Suspense fallback={<Loading />}><FeatTreePage /></Suspense></Route>
						<Route path="/haunt/:id"><Suspense fallback={<Loading />}><HauntPage /></Suspense></Route>
						<Route path="/hellknightorder/:id"><Suspense fallback={<Loading />}><HellknightOrderPage /></Suspense></Route>
						<Route path="/implement/:id"><Suspense fallback={<Loading />}><ImplementPage /></Suspense></Route>
						<Route path="/inquisition/:id"><Suspense fallback={<Loading />}><InquisitionPage /></Suspense></Route>
						<Route path="/kinetic/:id"><Suspense fallback={<Loading />}><KineticPage /></Suspense></Route>
						<Route path="/madness/:id"><Suspense fallback={<Loading />}><MadnessPage /></Suspense></Route>
						<Route path="/magic-armor/:id"><Suspense fallback={<Loading />}><MagicArmorPage /></Suspense></Route>
						<Route path="/magic-artifact/:id"><MagicArtifactPage /></Route>
						<Route path="/magic-enhancement/:id"><Suspense fallback={<Loading />}><MagicEnhancementPage /></Suspense></Route>
						<Route path="/magic-ioun/:id"><Suspense fallback={<Loading />}><MagicIounStonePage /></Suspense></Route>
						<Route path="/magic-ring/:id"><Suspense fallback={<Loading />}><MagicRingPage /></Suspense></Route>
						<Route path="/magic-rod/:id"><Suspense fallback={<Loading />}><MagicRodPage /></Suspense></Route>
						<Route path="/magic-staff/:id"><Suspense fallback={<Loading />}><MagicStaffPage /></Suspense></Route>
						<Route path="/magic-weapon/:id"><MagicWeaponPage /></Route>
						<Route path="/magic-wondrous/:id"><MagicWondrousPage /></Route>
						<Route path={/^[/]magic-(altar|augmentation|favor|fetish|fleshcrafting|graft|implant|necro(graft|toxin)|piercing|plant|poison|relic|set|talisman|tattoo|throne)[/](?<id>[a-z_0-9]+)[/]?$/}><Suspense fallback={<Loading />}><MagicMiscPage /></Suspense></Route>
						<Route path="/magusarcana/:id"><Suspense fallback={<Loading />}><ArcanaPage /></Suspense></Route>
						<Route path="/monster/:id"><MonsterPage /></Route>
						<Route path="/mystery/:id"><Suspense fallback={<Loading />}><MysteryPage /></Suspense></Route>
						<Route path="/npc/:id"><NPCPage /></Route>
						<Route path="/oath/:id"><Suspense fallback={<Loading />}><OathPage /></Suspense></Route>
						<Route path="/oraclecurse/:id"><Suspense fallback={<Loading />}><CursePage /></Suspense></Route>
						<Route path="/order/:id"><Suspense fallback={<Loading />}><OrderPage /></Suspense></Route>
						<Route path="/prestigeclass/:id"><PrestigeClassPage /></Route>
						<Route path="/race/:id"><RacePage /></Route>
						<Route path={/^[/](stance)?ragepower[/](?<id>[a-z_0-9]+)[/]?$/}><Suspense fallback={<Loading />}><RagePowerPage /></Suspense></Route>
						<Route path="/rule/:id"><RulesPage /></Route>
						<Route path="/search"><Suspense fallback={<Loading />}><SearchPage /></Suspense></Route>
						<Route path="/shamanspirit/:id"><Suspense fallback={<Loading />}><ShamanSpiritPage /></Suspense></Route>
						<Route path={/^[/](npcclass|sidekick)[/](?<id>[a-z_0-9]+)[/]?$/}><Suspense fallback={<Loading />}><OtherClassPage /></Suspense></Route>
						<Route path="/skill/:id"><Suspense fallback={<Loading />}><SkillPage /></Suspense></Route>
						<Route path="/sorcererbloodline/:id"><Suspense fallback={<Loading />}><SorcererBloodlinePage /></Suspense></Route>
						<Route path="/source/:id"><Suspense fallback={<Loading />}><SourcePage /></Suspense></Route>
						<Route path="/spell/:id"><SpellPage /></Route>
						<Route path="/spelldef/:id"><Suspense fallback={<Loading />}><SpellDefPage /></Suspense></Route>
						<Route path={/^[/](legendary|outsider)?spirit[/](?<id>[a-z_0-9]+)[/]?$/}><Suspense fallback={<Loading />}><MediumSpiritPage /></Suspense></Route>
						<Route path={/^[/](sub)?type[/](?<id>[a-z0-9_]+)[/]?$/}><Suspense fallback={<Loading />}><MonsterTypingPage /></Suspense></Route>
						<Route path="/tech-armor/:id"><Suspense fallback={<Loading />}><TechArmorPage /></Suspense></Route>
						<Route path="/tech-artifact/:id"><Suspense fallback={<Loading />}><TechArtifactPage /></Suspense></Route>
						<Route path="/tech-cybertech/:id"><Suspense fallback={<Loading />}><TechCybertechPage /></Suspense></Route>
						<Route path="/tech-misc/:id"><Suspense fallback={<Loading />}><TechMiscPage /></Suspense></Route>
						<Route path="/tech-pharmaceutical/:id"><Suspense fallback={<Loading />}><TechPharmaceuticalsPage /></Suspense></Route>
						<Route path="/tech-weapon/:id"><Suspense fallback={<Loading />}><TechWeaponPage /></Suspense></Route>
						<Route path="/template/:id"><MonsterTemplatePage /></Route>
						<Route path="/trait/:id"><TraitPage /></Route>
						<Route path="/trap/:id"><Suspense fallback={<Loading />}><TrapPage /></Suspense></Route>
						<Route path="/umr/:id"><Suspense fallback={<Loading />}><UMRPage /></Suspense></Route>
						<Route path={/^[/]$/}><FrontPage /></Route>
						<Route><ErrorPage /></Route>
					</Switch>
				</IonContent>
			</IonSplitPane>
		</IonApp>
	);
};

export default App;
