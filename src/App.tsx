import { FC, Suspense, lazy } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Menu from './components/Menu';

import ArchetypePage from './pages/ArchetypePage';
import ClassPage from './pages/ClassPage';
import ClassAbilityPage from './pages/ClassAbilityPage';
import MainPage from './pages/MainPage';
import PrestigeClassPage from './pages/PrestigeClassPage';
import RacePage from './pages/RacePage';
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

const AfflictionPage = lazy(() => import("./pages/AfflictionPage"));
const ArcanaPage = lazy(() => import("./pages/ArcanaPage"));
const AspectPage = lazy(() => import("./pages/AspectPage"));
const BlessingPage = lazy(() => import("./pages/BlessingPage"));
const BloodragerBloodlinePage = lazy(() => import("./pages/BloodragerBloodlinePage"));
const CompanionPage = lazy(() => import("./pages/CompanionPage"));
const CorruptionPage = lazy(() => import("./pages/CorruptionPage"));
const CursePage = lazy(() => import("./pages/OracleCursePage"));
const DisciplinePage = lazy(() => import("./pages/DisciplinePage"));
const DomainPage = lazy(() => import("./pages/DomainPage"));
const DrugPage = lazy(() => import("./pages/DrugPage"));
const DruidDomainPage = lazy(() => import("./pages/DruidDomainPage"));
const EquipmentAlchemicalReagentPage = lazy(() => import("./pages/EquipmentAlchemicalReagentPage"));
const EquipmentArmorEnhancementsPage = lazy(() => import("./pages/EquipmentArmorEnhancementPage"));
const EquipmentArmorPage = lazy(() => import("./pages/EquipmentArmorPage"));
const EquipmentMiscPage = lazy(() => import("./pages/EquipmentMiscPage"));
const EquipmentPoisonPage = lazy(() => import("./pages/EquipmentPoisonPage"));
const EquipmentSiegeEnginePage = lazy(() => import("./pages/EquipmentSiegeEnginesPage"));
const EquipmentSpecMaterialPage = lazy(() => import("./pages/EquipmentSpecMaterialPage"));
const EquipmentSpellbookPage = lazy(() => import("./pages/EquipmentSpellbookPage"));
const EquipmentWeaponEnhancementsPage = lazy(() => import("./pages/EquipmentWeaponEnhancementPage"));
const EquipmentWeaponPage = lazy(() => import("./pages/EquipmentWeaponPage"));
const ExploitPage = lazy(() => import("./pages/ExploitPage"));
const FaithPage = lazy(() => import("./pages/FaithPage"));
const FeatPage = lazy(() => import("./pages/FeatPage"));
const HauntPage = lazy(() => import("./pages/HauntPage"));
const HellknightOrderPage = lazy(() => import("./pages/HellknightOrderPage"));
const ImplementPage = lazy(() => import("./pages/ImplementPage"));
const InquisitionPage = lazy(() => import("./pages/InquisitionPage"));
const KineticPage = lazy(() => import("./pages/KineticPage"));
const MadnessPage = lazy(() => import("./pages/MadnessPage"));
const MagicArmorPage = lazy(() => import("./pages/MagicArmorPage"));
const MagicArtifactPage = lazy(() => import("./pages/MagicArtifactPage"));
const MagicEnhancementPage = lazy(() => import("./pages/MagicEnhancementPage"));
const MagicIounStonePage = lazy(() => import("./pages/MagicIounStonePage"));
const MagicMiscPage = lazy(() => import("./pages/MagicMiscPage"));
const MagicRingPage = lazy(() => import("./pages/MagicRingPage"));
const MagicRodPage = lazy(() => import("./pages/MagicRodPage"));
const MagicStaffPage = lazy(() => import("./pages/MagicStaffPage"));
const MagicWeaponPage = lazy(() => import("./pages/MagicWeaponPage"));
const MagicWondrousPage = lazy(() => import("./pages/MagicWondrousPage"));
const MasterpiecePage = lazy(() => import("./pages/MasterpiecePage"));
const MediumSpiritPage = lazy(() => import("./pages/MediumSpiritPage"));
const MonsterFamilyPage = lazy(() => import("./pages/MonsterFamilyPage"));
const MonsterPage = lazy(() => import("./pages/MonsterPage"));
const MonsterTemplatePage = lazy(() => import("./pages/MonsterTemplatePage"));
const MonsterTypingPage = lazy(() => import("./pages/MonsterTypingPage"));
const MysteryPage = lazy(() => import("./pages/MysteryPage"));
const NPCPage = lazy(() => import("./pages/NPCPage"));
const OathPage = lazy(() => import("./pages/OathPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const OtherClassPage = lazy(() => import("./pages/OtherClassPage"));
const RagePowerPage = lazy(() => import("./pages/RagePowerPage"));
const RulesPage = lazy(() => import("./pages/RulesPage"));
const SchoolPage = lazy(() => import("./pages/SchoolPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ShamanSpiritPage = lazy(() => import("./pages/ShamanSpiritPage"));
const SkillPage = lazy(() => import("./pages/SkillPage"));
const SorcererBloodlinePage = lazy(() => import("./pages/SorcererBloodlinePage"));
const SourcePage = lazy(() => import("./pages/SourcePage"));
const SpellDefPage = lazy(() => import("./pages/SpellDefinitionPage"));
const SpellPage = lazy(() => import("./pages/SpellPage"));
const TechArmorPage = lazy(() => import("./pages/EquipmentTechArmorPage"));
const TechArtifactPage = lazy(() => import("./pages/EquipmentTechArtifactPage"));
const TechCybertechPage = lazy(() => import("./pages/EquipmentTechCybertechPage"));
const TechMiscPage = lazy(() => import("./pages/EquipmentTechMiscPage"));
const TechPharmaceuticalsPage = lazy(() => import("./pages/EquipmentTechPharmaceuticalPage"));
const TechWeaponPage = lazy(() => import("./pages/EquipmentTechWeaponPage"));
const TraitPage = lazy(() => import("./pages/TraitPage"));
const TrapPage = lazy(() => import("./pages/TrapPage"));
const UMRPage = lazy(() => import("./pages/UMRPage"));

const App: FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true} render={() => <FrontPage />} />
						<Route path="/about" exact={true} render={() => <AboutOnlyPage />} />
						<Route path="/main/:mainpage" render={() => <MainPage />} />
						<Route path="/arcaneschool/:id" render={() => <Suspense fallback={<Loading />}><SchoolPage /></Suspense>} />
						<Route path="/ability/:id" render={() => <ClassAbilityPage />} />
						<Route path="/archetype-:parent/:id" render={() => <ArchetypePage />} />
						<Route path="/aspect/:id" render={() => <Suspense fallback={<Loading />}><AspectPage /></Suspense>} />
						<Route path="/bardicmasterpiece/:id" render={() => <Suspense fallback={<Loading />}><MasterpiecePage /></Suspense>} />
						<Route path="/blessing/:id" render={() => <Suspense fallback={<Loading />}><BlessingPage /></Suspense>} />
						<Route path="/bloodragerbloodline/:id" render={() => <Suspense fallback={<Loading />}><BloodragerBloodlinePage /></Suspense>} />
						<Route path="/class/:id" render={() => <ClassPage />} />
						<Route path="/corruption/:id" render={() => <Suspense fallback={<Loading />}><CorruptionPage /></Suspense>} />
						<Route path={[
							"/curse/:id",
							"/disease/:id",
							"/infestation/:id"
						]} render={() => <Suspense fallback={<Loading />}><AfflictionPage /></Suspense>} />
						<Route path="/discipline/:id" render={() => <Suspense fallback={<Loading />}><DisciplinePage /></Suspense>} />
						<Route path="/domain/:id" render={() => <Suspense fallback={<Loading />}><DomainPage /></Suspense>} />
						<Route path="/drug/:id" render={() => <Suspense fallback={<Loading />}><DrugPage /></Suspense>} />
						<Route path="/druidcompanion/:id" render={() => <Suspense fallback={<Loading />}><CompanionPage /></Suspense>} />
						<Route path="/druiddomain/:id" render={() => <Suspense fallback={<Loading />}><DruidDomainPage /></Suspense>} />
						<Route path="/equipment-armor/:id" render={() => <Suspense fallback={<Loading />}><EquipmentArmorPage /></Suspense>} />
						<Route path="/equipment-armorenhancement/:id" render={() => <Suspense fallback={<Loading />}><EquipmentArmorEnhancementsPage /></Suspense>} />
						<Route path="/equipment-material/:id" render={() => <Suspense fallback={<Loading />}><EquipmentSpecMaterialPage /></Suspense>} />
						<Route path="/equipment-misc/:id" render={() => <Suspense fallback={<Loading />}><EquipmentMiscPage /></Suspense>} />
						<Route path="/equipment-poison/:id" render={() => <Suspense fallback={<Loading />}><EquipmentPoisonPage /></Suspense>} />
						<Route path="/equipment-reagent/:id" render={() => <Suspense fallback={<Loading />}><EquipmentAlchemicalReagentPage /></Suspense>} />
						<Route path="/equipment-siegeengine/:id" render={() => <Suspense fallback={<Loading />}><EquipmentSiegeEnginePage /></Suspense>} />
						<Route path="/equipment-spellbook/:id" render={() => <Suspense fallback={<Loading />}><EquipmentSpellbookPage /></Suspense>} />
						<Route path="/equipment-weapon/:id" render={() => <Suspense fallback={<Loading />}><EquipmentWeaponPage /></Suspense>} />
						<Route path="/equipment-weaponenhancement/:id" render={() => <Suspense fallback={<Loading />}><EquipmentWeaponEnhancementsPage /></Suspense>} />
						<Route path={[
							"/exploit/:id",
							"/greaterexploit/:id"
						]} render={() => <Suspense fallback={<Loading />}><ExploitPage /></Suspense>} />
						<Route path="/faith/:id" render={() => <Suspense fallback={<Loading />}><FaithPage /></Suspense>} />
						<Route path="/family/:id" render={() => <Suspense fallback={<Loading />}><MonsterFamilyPage /></Suspense>} />
						<Route path="/feat/:id" render={() => <Suspense fallback={<Loading />}><FeatPage /></Suspense>} />
						<Route path="/haunt/:id" render={() => <Suspense fallback={<Loading />}><HauntPage /></Suspense>} />
						<Route path="/hellknightorder/:id" render={() => <Suspense fallback={<Loading />}><HellknightOrderPage /></Suspense>} />
						<Route path="/implement/:id" render={() => <Suspense fallback={<Loading />}><ImplementPage /></Suspense>} />
						<Route path="/inquisition/:id" render={() => <Suspense fallback={<Loading />}><InquisitionPage /></Suspense>} />
						<Route path="/kinetic/:id" render={() => <Suspense fallback={<Loading />}><KineticPage /></Suspense>} />
						<Route path="/madness/:id" render={() => <Suspense fallback={<Loading />}><MadnessPage /></Suspense>} />
						<Route path="/magic-armor/:id" render={() => <Suspense fallback={<Loading />}><MagicArmorPage /></Suspense>} />
						<Route path="/magic-artifact/:id" render={() => <Suspense fallback={<Loading />}><MagicArtifactPage /></Suspense>} />
						<Route path="/magic-enhancement/:id" render={() => <Suspense fallback={<Loading />}><MagicEnhancementPage /></Suspense>} />
						<Route path="/magic-ioun/:id" render={() => <Suspense fallback={<Loading />}><MagicIounStonePage /></Suspense>} />
						<Route path="/magic-ring/:id" render={() => <Suspense fallback={<Loading />}><MagicRingPage /></Suspense>} />
						<Route path="/magic-rod/:id" render={() => <Suspense fallback={<Loading />}><MagicRodPage /></Suspense>} />
						<Route path="/magic-staff/:id" render={() => <Suspense fallback={<Loading />}><MagicStaffPage /></Suspense>} />
						<Route path="/magic-weapon/:id" render={() => <Suspense fallback={<Loading />}><MagicWeaponPage /></Suspense>} />
						<Route path="/magic-wondrous/:id" render={() => <Suspense fallback={<Loading />}><MagicWondrousPage /></Suspense>} />
						<Route path="/magusarcana/:id" render={() => <Suspense fallback={<Loading />}><ArcanaPage /></Suspense>} />
						<Route path="/monster/:id" render={() => <Suspense fallback={<Loading />}><MonsterPage /></Suspense>} />
						<Route path="/mystery/:id" render={() => <Suspense fallback={<Loading />}><MysteryPage /></Suspense>} />
						<Route path={[
							"/constructmod/:id",
							"/magic-altar/:id",
							"/magic-augmentation/:id",
							"/magic-favor/:id",
							"/magic-fetish/:id",
							"/magic-fleshcrafting/:id",
							"/magic-graft/:id",
							"/magic-implant/:id",
							"/magic-necrograft/:id",
							"/magic-necrotoxin/:id",
							"/magic-piercing/:id",
							"/magic-plant/:id",
							"/magic-poison/:id",
							"/magic-relic/:id",
							"/magic-set/:id",
							"/magic-talisman/:id",
							"/magic-tattoo/:id",
							"/magic-throne/:id"
						]} render={() => <Suspense fallback={<Loading />}><MagicMiscPage /></Suspense>} />
						<Route path="/npc/:id" render={() => <Suspense fallback={<Loading />}><NPCPage /></Suspense>} />
						<Route path="/oath/:id" render={() => <Suspense fallback={<Loading />}><OathPage /></Suspense>} />
						<Route path="/oraclecurse/:id" render={() => <Suspense fallback={<Loading />}><CursePage /></Suspense>} />
						<Route path="/order/:id" render={() => <Suspense fallback={<Loading />}><OrderPage /></Suspense>} />
						<Route path="/prestigeclass/:id" render={() => <PrestigeClassPage />} />
						<Route path="/race/:id" render={() => <RacePage />} />
						<Route path={[
							"/ragepower/:id",
							"/stanceragepower/:id"
						]} render={() => <Suspense fallback={<Loading />}><RagePowerPage /></Suspense>} />
						<Route path="/rule/:id" render={() => <Suspense fallback={<Loading />}><RulesPage  /></Suspense>} />
						<Route path="/search" render={() => <Suspense fallback={<Loading />}><SearchPage /></Suspense>} />
						<Route path="/shamanspirit/:id" render={() => <Suspense fallback={<Loading />}><ShamanSpiritPage /></Suspense>} />
						<Route path={[
							"/npcclass/:id",
							"/sidekick/:id"
						]} render={() => <Suspense fallback={<Loading />}><OtherClassPage /></Suspense>} />
						<Route path="/skill/:id" render={() => <Suspense fallback={<Loading />}><SkillPage /></Suspense>} />
						<Route path="/sorcererbloodline/:id" render={() => <Suspense fallback={<Loading />}><SorcererBloodlinePage /></Suspense>} />
						<Route path="/source/:id" render={() => <Suspense fallback={<Loading />}><SourcePage /></Suspense>} />
						<Route path="/spell/:id" render={() => <Suspense fallback={<Loading />}><SpellPage /></Suspense>} />
						<Route path="/spelldef/:id" render={() => <Suspense fallback={<Loading />}><SpellDefPage /></Suspense>} />
						<Route path={[
							"/legendaryspirit/:id",
							"/spirit/:id",
							"/outsiderspirit/:id"
						]} render={() => <Suspense fallback={<Loading />}><MediumSpiritPage /></Suspense>} />
						<Route path={[
							"/subtype/:id",
							"/type/:id"
						]} render={() => <Suspense fallback={<Loading />}><MonsterTypingPage /></Suspense>} />
						<Route path="/tech-armor/:id" render={() => <Suspense fallback={<Loading />}><TechArmorPage /></Suspense>} />
						<Route path="/tech-artifact/:id" render={() => <Suspense fallback={<Loading />}><TechArtifactPage /></Suspense>} />
						<Route path="/tech-cybertech/:id" render={() => <Suspense fallback={<Loading />}><TechCybertechPage /></Suspense>} />
						<Route path="/tech-misc/:id" render={() => <Suspense fallback={<Loading />}><TechMiscPage /></Suspense>} />
						<Route path="/tech-pharmaceutical/:id" render={() => <Suspense fallback={<Loading />}><TechPharmaceuticalsPage /></Suspense>} />
						<Route path="/tech-weapon/:id" render={() => <Suspense fallback={<Loading />}><TechWeaponPage /></Suspense>} />
						<Route path="/template/:id" render={() => <Suspense fallback={<Loading />}><MonsterTemplatePage /></Suspense>} />
						<Route path="/trait/:id" render={() => <Suspense fallback={<Loading />}><TraitPage /></Suspense>} />
						<Route path="/trap/:id" render={() => <Suspense fallback={<Loading />}><TrapPage /></Suspense>} />
						<Route path="/umr/:id" render={() => <Suspense fallback={<Loading />}><UMRPage /></Suspense>} />
						<Route render={() => <ErrorPage />} />
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
