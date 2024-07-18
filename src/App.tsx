import { Suspense, lazy } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import FrontPage from './FrontPage';
import ArchetypePage from './pages/ArchetypePage';
import ClassPage from './pages/ClassPage';
import ClassAbilityPage from './pages/ClassAbilityPage';
import MainPage from './pages/MainPage';
import PrestigeClassPage from './pages/PrestigeClassPage';
import RacePage from './pages/RacePage';
import ErrorPage from './pages/ErrorPage';
import Loading from './Loading';

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

setupIonicReact();

const AfflictionPage = lazy(() => import("./pages/AfflictionPage"));
const OtherClassPage = lazy(() => import("./pages/OtherClassPage"));
const EquipmentArmorPage = lazy(() => import("./pages/EquipmentArmorPage"));
const EquipmentArmorEnhancementsPage = lazy(() => import("./pages/EquipmentArmorEnhancementPage"));
const EquipmentSpecMaterialPage = lazy(() => import("./pages/EquipmentSpecMaterialPage"));
const EquipmentMiscPage = lazy(() => import("./pages/EquipmentMiscPage"));
const EquipmentPoisonPage = lazy(() => import("./pages/EquipmentPoisonPage"));
const EquipmentAlchemicalReagentPage = lazy(() => import("./pages/EquipmentAlchemicalReagentPage"));
const EquipmentSiegeEnginePage = lazy(() => import("./pages/EquipmentSiegeEnginesPage"));
const EquipmentSpellbookPage = lazy(() => import("./pages/EquipmentSpellbookPage"));
const EquipmentTechArmorPage = lazy(() => import("./pages/EquipmentTechArmorPage"));
const EquipmentTechArtifactPage = lazy(() => import("./pages/EquipmentTechArtifactPage"));
const EquipmentTechCybertechPage = lazy(() => import("./pages/EquipmentTechCybertechPage"));
const EquipmentTechMiscPage = lazy(() => import("./pages/EquipmentTechMiscPage"));
const EquipmentTechPharmaceuticalsPage = lazy(() => import("./pages/EquipmentTechPharmaceuticalPage"));
const EquipmentTechWeaponPage = lazy(() => import("./pages/EquipmentTechWeaponPage"));
const EquipmentWeaponPage = lazy(() => import("./pages/EquipmentWeaponPage"));
const EquipmentWeaponEnhancementsPage = lazy(() => import("./pages/EquipmentWeaponEnhancementPage"));
const TraitPage = lazy(() => import("./pages/TraitPage"));
const FaithPage = lazy(() => import("./pages/FaithPage"));
const SpellPage = lazy(() => import("./pages/SpellPage"));
const SpellDefPage = lazy(() => import("./pages/SpellDefinitionPage"));
const FeatPage = lazy(() => import("./pages/FeatPage"));
const RulesPage = lazy(() => import("./pages/RulesPage"));
const UMRPage = lazy(() => import("./pages/UMRPage"));
const SkillPage = lazy(() => import("./pages/SkillPage"));
const MonsterPage = lazy(() => import("./pages/MonsterPage"));
const MonsterTypingPage = lazy(() => import("./pages/MonsterTypingPage"));
const MonsterFamilyPage = lazy(() => import("./pages/MonsterFamilyPage"));
const MonsterTemplatePage = lazy(() => import("./pages/MonsterTemplatePage"));
const NPCPage = lazy(() => import("./pages/NPCPage"));
const CorruptionPage = lazy(() => import("./pages/CorruptionPage"));
const HauntPage = lazy(() => import("./pages/HauntPage"));
const DrugPage = lazy(() => import("./pages/DrugPage"));
const MadnessPage = lazy(() => import("./pages/MadnessPage"));
const TrapPage = lazy(() => import("./pages/TrapPage"));
const MagicMiscPage = lazy(() => import("./pages/MagicMiscPage"));
const MagicArmorPage = lazy(() => import("./pages/MagicArmorPage"));
const MagicArtifactPage = lazy(() => import("./pages/MagicArtifactPage"));
const MagicEnhancementPage = lazy(() => import("./pages/MagicEnhancementPage"));
const MagicIounStonePage = lazy(() => import("./pages/MagicIounStonePage"));
const MagicRingPage = lazy(() => import("./pages/MagicRingPage"));
const MagicRodPage = lazy(() => import("./pages/MagicRodPage"));
const MagicStaffPage = lazy(() => import("./pages/MagicStaffPage"));
const MagicWeaponPage = lazy(() => import("./pages/MagicWeaponPage"));
const MagicWondrousPage = lazy(() => import("./pages/MagicWondrousPage"));
const SchoolPage = lazy(() => import("./pages/SchoolPage"));
const AspectPage = lazy(() => import("./pages/AspectPage"));
const ArcanaPage = lazy(() => import("./pages/ArcanaPage"));
const BlessingPage = lazy(() => import("./pages/BlessingPage"));
const CompanionPage = lazy(() => import("./pages/CompanionPage"));
const DisciplinePage = lazy(() => import("./pages/DisciplinePage"));
const DruidDomainPage = lazy(() => import("./pages/DruidDomainPage"));
const DomainPage = lazy(() => import("./pages/DomainPage"));
const ExploitPage = lazy(() => import("./pages/ExploitPage"));
const HellknightOrderPage = lazy(() => import("./pages/HellknightOrderPage"));
const ImplementPage = lazy(() => import("./pages/ImplementPage"));
const InquisitionPage = lazy(() => import("./pages/InquisitionPage"));
const KineticPage = lazy(() => import("./pages/KineticPage"));
const MasterpiecePage = lazy(() => import("./pages/MasterpiecePage"));
const MediumSpiritPage = lazy(() => import("./pages/MediumSpiritPage"));
const MysteryPage = lazy(() => import("./pages/MysteryPage"));
const OathPage = lazy(() => import("./pages/OathPage"));
const CursePage = lazy(() => import("./pages/OracleCursePage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const RagePowerPage = lazy(() => import("./pages/RagePowerPage"));
const SorcererBloodlinePage = lazy(() => import("./pages/SorcererBloodlinePage"));
const BloodragerBloodlinePage = lazy(() => import("./pages/BloodragerBloodlinePage"));
const ShamanSpiritPage = lazy(() => import("./pages/ShamanSpiritPage"));
const SourcePage = lazy(() => import("./pages/SourcePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

const magicMisc = () => <Suspense fallback={<Loading />}><MagicMiscPage /></Suspense>;
const otherClassPage = () => <Suspense fallback={<Loading />}><OtherClassPage /></Suspense>;
const typeOrSubtype = () => <Suspense fallback={<Loading />}><MonsterTypingPage /></Suspense>;
const mediumSpiritPage = () => <Suspense fallback={<Loading />}><MediumSpiritPage /></Suspense>;

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true} render={() => <FrontPage />} />
						<Route path="/main/:mainpage" render={() => <MainPage />} />
						<Route path="/arcaneschool/:id" render={() => <Suspense fallback={<Loading />}><SchoolPage /></Suspense>} />
						<Route path="/ability/:id" render={() => <ClassAbilityPage />} />
						<Route path="/archetype/:parent/:id" render={() => <ArchetypePage />} />
						<Route path="/aspect/:id" render={() => <Suspense fallback={<Loading />}><AspectPage /></Suspense>} />
						<Route path="/bardicmasterpiece/:id" render={() => <Suspense fallback={<Loading />}><MasterpiecePage /></Suspense>} />
						<Route path="/blessing/:id" render={() => <Suspense fallback={<Loading />}><BlessingPage /></Suspense>} />
						<Route path="/bloodragerbloodline/:id" render={() => <Suspense fallback={<Loading />}><BloodragerBloodlinePage /></Suspense>} />
						<Route path="/class/:id" render={() => <ClassPage />} />
						<Route path="/constructmod/:id" render={magicMisc} />
						<Route path="/corruption/:id" render={() => <Suspense fallback={<Loading />}><CorruptionPage /></Suspense>} />
						<Route path="/curse/:id" render={() => <Suspense fallback={<Loading />}><AfflictionPage type="curse" /></Suspense>} />
						<Route path="/discipline/:id" render={() => <Suspense fallback={<Loading />}><DisciplinePage /></Suspense>} />
						<Route path="/disease/:id" render={() => <Suspense fallback={<Loading />}><AfflictionPage type="disease" /></Suspense>} />
						<Route path="/domain/:id" render={() => <Suspense fallback={<Loading />}><DomainPage /></Suspense>} />
						<Route path="/drug/:id" render={() => <Suspense fallback={<Loading />}><DrugPage /></Suspense>} />
						<Route path="/druidcompanion/:id" render={() => <Suspense fallback={<Loading />}><CompanionPage /></Suspense>} />
						<Route path="/druiddomain/:id" render={() => <Suspense fallback={<Loading />}><DruidDomainPage /></Suspense>} />
						<Route path="/equipment/armor/:id" render={() => <Suspense fallback={<Loading />}><EquipmentArmorPage /></Suspense>} />
						<Route path="/equipment/armorenhancement/:id" render={() => <Suspense fallback={<Loading />}><EquipmentArmorEnhancementsPage /></Suspense>} />
						<Route path="/equipment/material/:id" render={() => <Suspense fallback={<Loading />}><EquipmentSpecMaterialPage /></Suspense>} />
						<Route path="/equipment/misc/:id" render={() => <Suspense fallback={<Loading />}><EquipmentMiscPage /></Suspense>} />
						<Route path="/equipment/poison/:id" render={() => <Suspense fallback={<Loading />}><EquipmentPoisonPage /></Suspense>} />
						<Route path="/equipment/reagent/:id" render={() => <Suspense fallback={<Loading />}><EquipmentAlchemicalReagentPage /></Suspense>} />
						<Route path="/equipment/siegeengine/:id" render={() => <Suspense fallback={<Loading />}><EquipmentSiegeEnginePage /></Suspense>} />
						<Route path="/equipment/spellbook/:id" render={() => <Suspense fallback={<Loading />}><EquipmentSpellbookPage /></Suspense>} />
						<Route path="/equipment/weapon/:id" render={() => <Suspense fallback={<Loading />}><EquipmentWeaponPage /></Suspense>} />
						<Route path="/equipment/weaponenhance/:id" render={() => <Suspense fallback={<Loading />}><EquipmentWeaponEnhancementsPage /></Suspense>} />
						<Route path="/exploit/:id" render={() => <Suspense fallback={<Loading />}><ExploitPage /></Suspense>} />
						<Route path="/faith/:id" render={() => <Suspense fallback={<Loading />}><FaithPage /></Suspense>} />
						<Route path="/family/:id" render={() => <Suspense fallback={<Loading />}><MonsterFamilyPage /></Suspense>} />
						<Route path="/feat/:id" render={() => <Suspense fallback={<Loading />}><FeatPage /></Suspense>} />
						<Route path="/greaterexploit/:id" render={() => <Suspense fallback={<Loading />}><ExploitPage greater /></Suspense>} />
						<Route path="/haunt/:id" render={() => <Suspense fallback={<Loading />}><HauntPage /></Suspense>} />
						<Route path="/hellknightorder/:id" render={() => <Suspense fallback={<Loading />}><HellknightOrderPage /></Suspense>} />
						<Route path="/implement/:id" render={() => <Suspense fallback={<Loading />}><ImplementPage /></Suspense>} />
						<Route path="/infestation/:id" render={() => <Suspense fallback={<Loading />}><AfflictionPage type="infestation" /></Suspense>} />
						<Route path="/inquisition/:id" render={() => <Suspense fallback={<Loading />}><InquisitionPage /></Suspense>} />
						<Route path="/kinetic/:id" render={() => <Suspense fallback={<Loading />}><KineticPage /></Suspense>} />
						<Route path="/legendaryspirit/:id" render={mediumSpiritPage} />
						<Route path="/madness/:id" render={() => <Suspense fallback={<Loading />}><MadnessPage /></Suspense>} />
						<Route path="/magic/altar/:id" render={magicMisc} />
						<Route path="/magic/armor/:id" render={() => <Suspense fallback={<Loading />}><MagicArmorPage /></Suspense>} />
						<Route path="/magic/artifact/:id" render={() => <Suspense fallback={<Loading />}><MagicArtifactPage /></Suspense>} />
						<Route path="/magic/augmentation/:id" render={magicMisc} />
						<Route path="/magic/enhancement/:id" render={() => <Suspense fallback={<Loading />}><MagicEnhancementPage /></Suspense>} />
						<Route path="/magic/favor/:id" render={magicMisc} />
						<Route path="/magic/fetish/:id" render={magicMisc} />
						<Route path="/magic/fleshcrafting/:id" render={magicMisc} />
						<Route path="/magic/graft/:id" render={magicMisc} />
						<Route path="/magic/implant/:id" render={magicMisc} />
						<Route path="/magic/ioun/:id" render={() => <Suspense fallback={<Loading />}><MagicIounStonePage /></Suspense>} />
						<Route path="/magic/necrograft/:id" render={magicMisc} />
						<Route path="/magic/necrotoxin/:id" render={magicMisc} />
						<Route path="/magic/piercing/:id" render={magicMisc} />
						<Route path="/magic/plant/:id" render={magicMisc} />
						<Route path="/magic/poison/:id" render={magicMisc} />
						<Route path="/magic/relic/:id" render={magicMisc} />
						<Route path="/magic/ring/:id" render={() => <Suspense fallback={<Loading />}><MagicRingPage /></Suspense>} />
						<Route path="/magic/rod/:id" render={() => <Suspense fallback={<Loading />}><MagicRodPage /></Suspense>} />
						<Route path="/magic/set/:id" render={magicMisc} />
						<Route path="/magic/staff/:id" render={() => <Suspense fallback={<Loading />}><MagicStaffPage /></Suspense>} />
						<Route path="/magic/talisman/:id" render={magicMisc} />
						<Route path="/magic/tattoo/:id" render={magicMisc} />
						<Route path="/magic/throne/:id" render={magicMisc} />
						<Route path="/magic/weapon/:id" render={() => <Suspense fallback={<Loading />}><MagicWeaponPage /></Suspense>} />
						<Route path="/magic/wondrous/:id" render={() => <Suspense fallback={<Loading />}><MagicWondrousPage /></Suspense>} />
						<Route path="/magusarcana/:id" render={() => <Suspense fallback={<Loading />}><ArcanaPage /></Suspense>} />
						<Route path="/monster/:id" render={() => <Suspense fallback={<Loading />}><MonsterPage /></Suspense>} />
						<Route path="/mystery/:id" render={() => <Suspense fallback={<Loading />}><MysteryPage /></Suspense>} />
						<Route path="/npc/:id" render={() => <Suspense fallback={<Loading />}><NPCPage /></Suspense>} />
						<Route path="/npcclass/:id" render={otherClassPage} />
						<Route path="/oath/:id" render={() => <Suspense fallback={<Loading />}><OathPage /></Suspense>} />
						<Route path="/oraclecurse/:id" render={() => <Suspense fallback={<Loading />}><CursePage /></Suspense>} />
						<Route path="/order/:id" render={() => <Suspense fallback={<Loading />}><OrderPage /></Suspense>} />
						<Route path="/outsiderspirit/:id" render={() => <Suspense fallback={<Loading />}><MediumSpiritPage type="outsider" /></Suspense>} />
						<Route path="/prestigeclass/:id" render={() => <PrestigeClassPage />} />
						<Route path="/race/:id" render={() => <RacePage />} />
						<Route path="/ragepower/:id" render={() => <Suspense fallback={<Loading />}><RagePowerPage /></Suspense>} />
						<Route path="/rule/:id" render={() => <Suspense fallback={<Loading />}><RulesPage  /></Suspense>} />
						<Route path="/search" render={() => <Suspense fallback={<Loading />}><SearchPage /></Suspense>} />
						<Route path="/shamanspirit/:id" render={() => <Suspense fallback={<Loading />}><ShamanSpiritPage /></Suspense>} />
						<Route path="/sidekick/:id" render={otherClassPage} />
						<Route path="/skill/:id" render={() => <Suspense fallback={<Loading />}><SkillPage /></Suspense>} />
						<Route path="/sorcererbloodline/:id" render={() => <Suspense fallback={<Loading />}><SorcererBloodlinePage /></Suspense>} />
						<Route path="/source/:id" render={() => <Suspense fallback={<Loading />}><SourcePage /></Suspense>} />
						<Route path="/spell/:id" render={() => <Suspense fallback={<Loading />}><SpellPage /></Suspense>} />
						<Route path="/spelldef/:id" render={() => <Suspense fallback={<Loading />}><SpellDefPage /></Suspense>} />
						<Route path="/spirit/:id" render={mediumSpiritPage} />
						<Route path="/stanceragepower/:id" render={() => <Suspense fallback={<Loading />}><RagePowerPage unchained /></Suspense>} />
						<Route path="/subtype/:id" render={typeOrSubtype} />
						<Route path="/tech/armor/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechArmorPage /></Suspense>} />
						<Route path="/tech/artifact/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechArtifactPage /></Suspense>} />
						<Route path="/tech/cybertech/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechCybertechPage /></Suspense>} />
						<Route path="/tech/misc/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechMiscPage /></Suspense>} />
						<Route path="/tech/pharmaceutical/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechPharmaceuticalsPage /></Suspense>} />
						<Route path="/tech/weapon/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechWeaponPage /></Suspense>} />
						<Route path="/template/:id" render={() => <Suspense fallback={<Loading />}><MonsterTemplatePage /></Suspense>} />
						<Route path="/trait/:id" render={() => <Suspense fallback={<Loading />}><TraitPage /></Suspense>} />
						<Route path="/trap/:id" render={() => <Suspense fallback={<Loading />}><TrapPage /></Suspense>} />
						<Route path="/type/:id" render={typeOrSubtype} />
						<Route path="/umr/:id" render={() => <Suspense fallback={<Loading />}><UMRPage /></Suspense>} />
						<Route render={() => <ErrorPage />} />
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
