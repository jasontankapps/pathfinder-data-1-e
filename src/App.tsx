import { Suspense, lazy } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './pages/MainPage';
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
const ClassPage = lazy(() => import("./pages/ClassPage"));
const ClassExtraPage = lazy(() => import("./pages/ClassExtraPage"));
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
const RacePage = lazy(() => import("./pages/RacePage"));
const TraitPage = lazy(() => import("./pages/TraitPage"));
const FaithPage = lazy(() => import("./pages/FaithPage"));
const ClassAbilityPage = lazy(() => import("./pages/ClassAbilityPage"));
const SpellPage = lazy(() => import("./pages/SpellPage"));
const SpellDefPage = lazy(() => import("./pages/SpellDefinitionPage"));
const FeatPage = lazy(() => import("./pages/FeatPage"));
const MonsterPage = lazy(() => import("./pages/MonsterPage"));
const MonsterTypingPage = lazy(() => import("./pages/MonsterTypingPage"));
const MonsterFamilyPage = lazy(() => import("./pages/MonsterFamilyPage"));
const NPCPage = lazy(() => import("./pages/NPCPage"));
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
const RulesPage = lazy(() => import("./pages/RulesPage"));
const SkillPage = lazy(() => import("./pages/SkillPage"));
const SchoolPage = lazy(() => import("./pages/SchoolPage"));
const BlessingPage = lazy(() => import("./pages/BlessingPage"));
const DomainPage = lazy(() => import("./pages/DomainPage"));

const magicMisc = () => <Suspense fallback={<Loading />}><MagicMiscPage /></Suspense>;
const mainPage = () => <MainPage />;
const classPage = () => <Suspense fallback={<Loading />}><ClassPage /></Suspense>;
const typeOrSubtype = () => <Suspense fallback={<Loading />}><MonsterTypingPage /></Suspense>;

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true} render={mainPage} />
						<Route path="/arcaneschool/:id" render={() => <Suspense fallback={<Loading />}><SchoolPage /></Suspense>} />
						<Route path="/ability/:id" render={() => <Suspense fallback={<Loading />}><ClassAbilityPage /></Suspense>} />
						<Route path="/archetype/:parent/:id" render={() => <></>} />
						<Route path="/aspect/:id" render={() => <></>} />
						<Route path="/bardicmasterpiece/:id" render={() => <></>} />
						<Route path="/blessing/:id" render={() => <Suspense fallback={<Loading />}><BlessingPage /></Suspense>} />
						<Route path="/bloodragerbloodline/:id" render={() => <></>} />
						<Route path="/class/:id" render={classPage} />
						<Route path="/classarchetypes/:id" render={() => <Suspense fallback={<Loading />}><ClassExtraPage subtopic="archetypes" /></Suspense>} />
						<Route path="/classcapstone/:id" render={() => <Suspense fallback={<Loading />}><ClassExtraPage subtopic="capstones" /></Suspense>} />
						<Route path="/classfavored/:id" render={() => <Suspense fallback={<Loading />}><ClassExtraPage subtopic="bonuses" /></Suspense>} />
						<Route path="/constructmod/:id" render={() => <></>} />
						<Route path="/corruption/:id" render={() => <></>} />
						<Route path="/curse/:id" render={() => <Suspense fallback={<Loading />}><AfflictionPage type="curse" /></Suspense>} />
						<Route path="/discipline/:id" render={() => <></>} />
						<Route path="/disease/:id" render={() => <Suspense fallback={<Loading />}><AfflictionPage type="disease" /></Suspense>} />
						<Route path="/domain/:id" render={() => <Suspense fallback={<Loading />}><DomainPage /></Suspense>} />
						<Route path="/drug/:id" render={() => <></>} />
						<Route path="/druidcompanion/:id" render={() => <></>} />
						<Route path="/druiddomain/:id" render={() => <></>} />
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
						<Route path="/exploit/:id" render={() => <></>} />
						<Route path="/faith/:id" render={() => <Suspense fallback={<Loading />}><FaithPage /></Suspense>} />
						<Route path="/family/:id" render={() => <Suspense fallback={<Loading />}><MonsterFamilyPage /></Suspense>} />
						<Route path="/feat/:id" render={() => <Suspense fallback={<Loading />}><FeatPage /></Suspense>} />
						<Route path="/greaterexploit/:id" render={() => <></>} />
						<Route path="/haunt/:id" render={() => <></>} />
						<Route path="/hellknightorder/:id" render={() => <></>} />
						<Route path="/implement/:id" render={() => <></>} />
						<Route path="/infestation/:id" render={() => <Suspense fallback={<Loading />}><AfflictionPage type="infestation" /></Suspense>} />
						<Route path="/inquisition/:id" render={() => <></>} />
						<Route path="/kinetic/:id" render={() => <></>} />
						<Route path="/legendaryspirit/:id" render={() => <></>} />
						<Route path="/madness/:id" render={() => <></>} />
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
						<Route path="/magusarcana/:id" render={() => <></>} />
						<Route path="/monster/:id" render={() => <Suspense fallback={<Loading />}><MonsterPage /></Suspense>} />
						<Route path="/mystery/:id" render={() => <></>} />
						<Route path="/npc/:id" render={() => <Suspense fallback={<Loading />}><NPCPage /></Suspense>} />
						<Route path="/npcclass/:id" render={classPage} />
						<Route path="/oath/:id" render={() => <></>} />
						<Route path="/oraclecurse/:id" render={() => <></>} />
						<Route path="/order/:id" render={() => <></>} />
						<Route path="/outsiderspirit/:id" render={() => <></>} />
						<Route path="/prestigeclass/:id" render={classPage} />
						<Route path="/race/:id" render={() => <Suspense fallback={<Loading />}><RacePage  /></Suspense>} />
						<Route path="/ragepower/:id" render={() => <></>} />
						<Route path="/rule/:id" render={() => <Suspense fallback={<Loading />}><RulesPage  /></Suspense>} />
						<Route path="/shamanspirit/:id" render={() => <></>} />
						<Route path="/sidekick/:id" render={() => <></>} />
						<Route path="/skill/:id" render={() => <Suspense fallback={<Loading />}><SkillPage /></Suspense>} />
						<Route path="/sorcererbloodline/:id" render={() => <></>} />
						<Route path="/source/:id" render={() => <></>} />
						<Route path="/spell/:id" render={() => <Suspense fallback={<Loading />}><SpellPage /></Suspense>} />
						<Route path="/spelldef/:id" render={() => <Suspense fallback={<Loading />}><SpellDefPage /></Suspense>} />
						<Route path="/spirit/:id" render={() => <></>} />
						<Route path="/stanceragepower/:id" render={() => <></>} />
						<Route path="/subtype/:id" render={typeOrSubtype} />
						<Route path="/tech/armor/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechArmorPage /></Suspense>} />
						<Route path="/tech/artifact/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechArtifactPage /></Suspense>} />
						<Route path="/tech/cybertech/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechCybertechPage /></Suspense>} />
						<Route path="/tech/misc/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechMiscPage /></Suspense>} />
						<Route path="/tech/pharmaceutical/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechPharmaceuticalsPage /></Suspense>} />
						<Route path="/tech/weapon/:id" render={() => <Suspense fallback={<Loading />}><EquipmentTechWeaponPage /></Suspense>} />
						<Route path="/template/:id" render={() => <></>} />
						<Route path="/trait/:id" render={() => <Suspense fallback={<Loading />}><TraitPage /></Suspense>} />
						<Route path="/trap/:id" render={() => <></>} />
						<Route path="/type/:id" render={typeOrSubtype} />
						<Route path="/umr/:id" render={() => <></>} />
						<Route path="/:mainpage" render={mainPage} />
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
