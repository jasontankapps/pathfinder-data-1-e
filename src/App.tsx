import { FC, Suspense, lazy, useState } from 'react';
import { IonApp, IonContent, IonSplitPane, setupIonicReact } from '@ionic/react';
import { Route, Switch } from 'wouter';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar, Style } from '@capacitor/status-bar';

import Menu from './components/Menu';

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

// Multi-Pages

const ArchetypePage = lazy(() => import("./pages/ArchetypePage"));
const ClassPage = lazy(() => import("./pages/ClassPage"));
const ClassAbilityPage = lazy(() => import("./pages/ClassAbilityPage"));
const EquipmentMiscPage = lazy(() => import("./pages/EquipmentMiscPage"));
const FaithPage = lazy(() => import("./pages/FaithPage"));
const FeatPage = lazy(() => import("./pages/FeatPage"));
const MagicArtifactPage = lazy(() => import("./pages/MagicArtifactPage"));
const MagicWeaponPage = lazy(() => import("./pages/MagicWeaponPage"));
const MagicWondrousPage = lazy(() => import("./pages/MagicWondrousPage"));
const MainPage = lazy(() => import("./pages/MainPage"));
const MonsterPage = lazy(() => import("./pages/MonsterPage"));
const MonsterTemplatePage = lazy(() => import("./pages/MonsterTemplatePage"));
const NPCPage = lazy(() => import("./pages/NPCPage"));
const PrestigeClassPage = lazy(() => import("./pages/PrestigeClassPage"));
const RacePage = lazy(() => import("./pages/RacePage"));
const RulesPage = lazy(() => import("./pages/RulesPage"));
const SpellPage = lazy(() => import("./pages/SpellPage"));
const TraitPage = lazy(() => import("./pages/TraitPage"));

// Special Pages

const FeatTreePage = lazy(() => import("./pages/FeatTreePage"));
const BookmarksPage = lazy(() => import("./pages/Bookmarks"));
const BookmarkPage = lazy(() => import("./pages/BookmarkPage"));
const BookmarkImportExportPage = lazy(() => import("./pages/BookmarkImportExportPage"));

// Single-Pages

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
const MiscPage = lazy(() => import("./pages/MiscPage"));
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
const TalentPage = lazy(() => import("./pages/TalentPage"));
const TalentPageTwo = lazy(() => import("./pages/TalentPageTwo"));
const TalentPageThree = lazy(() => import("./pages/TalentPageThree"));
const TalentPageFour = lazy(() => import("./pages/TalentPageFour"));
const TechArmorPage = lazy(() => import("./pages/EquipmentTechArmorPage"));
const TechArtifactPage = lazy(() => import("./pages/EquipmentTechArtifactPage"));
const TechCybertechPage = lazy(() => import("./pages/EquipmentTechCybertechPage"));
const TechMiscPage = lazy(() => import("./pages/EquipmentTechMiscPage"));
const TechPharmaceuticalsPage = lazy(() => import("./pages/EquipmentTechPharmaceuticalPage"));
const TechWeaponPage = lazy(() => import("./pages/EquipmentTechWeaponPage"));
const TrapPage = lazy(() => import("./pages/TrapPage"));
const UMRPage = lazy(() => import("./pages/UMRPage"));

const App: FC = () => {
	const [hasSet, setHasSet] = useState(false);

	if (!hasSet) {
		EdgeToEdge.setBackgroundColor({ color: '#000000' });
		StatusBar.setStyle({ style: Style.Dark });
		setHasSet(true);
	}

	return (
		<IonApp>
			<IonSplitPane contentId="main">
				<Menu />
				<IonContent id="main">
					<Switch>
						<Route path="/about"><AboutOnlyPage /></Route>
						<Route path="/main/:mainpage">
							<Suspense fallback={<Loading />}>
								<MainPage />
							</Suspense>
						</Route>
						<Route path="/bookmarks">
							<Suspense fallback={<Loading />}>
								<BookmarksPage />
							</Suspense>
						</Route>
						<Route path="/bookmarks/:id">
							<Suspense fallback={<Loading />}>
								<BookmarkPage />
							</Suspense>
						</Route>
						<Route path="/importexport">
							<Suspense fallback={<Loading />}>
								<BookmarkImportExportPage />
							</Suspense>
						</Route>
						<Route path="/arcaneschool/:id">
							<Suspense fallback={<Loading text="Checking schools..." />}>
								<SchoolPage />
							</Suspense>
						</Route>
						<Route path="/ability/:id">
							<Suspense fallback={<Loading text="Organizing abilities..." />}>
								<ClassAbilityPage />
							</Suspense>
						</Route>
						<Route path={/^[/]arc-(?<parent>[a-z_]+)[/](?<id>[a-z_0-9]+)[/]?$/}>
							<Suspense fallback={<Loading text="Researching archetypes..." />}>
								<ArchetypePage />
							</Suspense>
						</Route>
						<Route path="/aspect/:id">
							<Suspense fallback={<Loading text="Checking aspects..." />}>
								<AspectPage />
							</Suspense>
						</Route>
						<Route path="/masterpiece/:id">
							<Suspense fallback={<Loading text="Recording masterpieces..." />}>
								<MasterpiecePage />
							</Suspense>
						</Route>
						<Route path="/blessing/:id">
							<Suspense fallback={<Loading text="Acquiring blessings..." />}>
								<BlessingPage />
							</Suspense>
						</Route>
						<Route path="/blrgbloodline/:id">
							<Suspense fallback={<Loading text="Grabbing bloodlines..." />}>
								<BloodragerBloodlinePage />
							</Suspense>
						</Route>
						<Route path="/class/:id">
							<Suspense fallback={<Loading text="Searching classes..." />}>
								<ClassPage />
							</Suspense>
						</Route>
						<Route path="/corruption/:id">
							<Suspense fallback={<Loading text="Discovering corruptions..." />}>
								<CorruptionPage />
							</Suspense>
						</Route>
						<Route path={/^[/](curse|disease|infestation)[/](?<id>[a-z_0-9]+)[/]?$/}>
							<Suspense fallback={<Loading text="Loading afflictions..." />}>
								<AfflictionPage />
							</Suspense>
						</Route>
						<Route path="/constructmod/:id">
							<Suspense fallback={<Loading text="Researching modifications..." />}>
								<ConstructModPage />
							</Suspense>
						</Route>
						<Route path="/discipline/:id">
							<Suspense fallback={<Loading text="Finding disciplines..." />}>
								<DisciplinePage />
							</Suspense>
						</Route>
						<Route path="/domain/:id">
							<Suspense fallback={<Loading text="Gathering domains..." />}>
								<DomainPage />
							</Suspense>
						</Route>
						<Route path="/drug/:id">
							<Suspense fallback={<Loading text="Trying not to get sued..." />}>
								<DrugPage />
							</Suspense>
						</Route>
						<Route path="/druidcompanion/:id">
							<Suspense fallback={<Loading text="Finding companions..." />}>
								<CompanionPage />
							</Suspense>
						</Route>
						<Route path="/druiddomain/:id">
							<Suspense fallback={<Loading text="Gathering domains..." />}>
								<DruidDomainPage />
							</Suspense>
						</Route>
						<Route path="/eq-armor/:id">
							<Suspense fallback={<Loading text="Indexing armor..." />}>
								<EquipmentArmorPage />
							</Suspense>
						</Route>
						<Route path="/eq-armorenh/:id">
							<Suspense fallback={<Loading text="Loading enhancements..." />}>
								<EquipmentArmorEnhancementsPage />
							</Suspense>
						</Route>
						<Route path="/eq-material/:id">
							<Suspense fallback={<Loading text="Cataloging materials..." />}>
								<EquipmentSpecMaterialPage />
							</Suspense>
						</Route>
						<Route path="/eq-misc/:id">
							<Suspense fallback={<Loading text="Searching the miscellany..." />}>
								<EquipmentMiscPage />
							</Suspense>
						</Route>
						<Route path="/eq-poison/:id">
							<Suspense fallback={<Loading text="Carefully searching..." />}>
								<EquipmentPoisonPage />
							</Suspense>
						</Route>
						<Route path="/eq-reagent/:id">
							<Suspense fallback={<Loading text="Carefully searching..." />}>
								<EquipmentAlchemicalReagentPage />
							</Suspense>
						</Route>
						<Route path="/eq-siegeengine/:id">
							<Suspense fallback={<Loading text="Gathering siege engines..." />}>
								<EquipmentSiegeEnginePage />
							</Suspense>
						</Route>
						<Route path="/eq-spellbook/:id">
							<Suspense fallback={<Loading text="Dusting off books..." />}>
								<EquipmentSpellbookPage />
							</Suspense>
						</Route>
						<Route path="/eq-weapon/:id">
							<Suspense fallback={<Loading text="Perusing weaponry..." />}>
								<EquipmentWeaponPage />
							</Suspense>
						</Route>
						<Route path="/eq-weaponenh/:id">
							<Suspense fallback={<Loading text="Loading enhancements..." />}>
								<EquipmentWeaponEnhancementsPage />
							</Suspense>
						</Route>
						<Route path="/exploit/:id">
							<Suspense fallback={<Loading text="Seeking exploits..." />}>
								<ExploitPage />
							</Suspense>
						</Route>
						<Route path="/faith/:id">
							<Suspense fallback={<Loading text="Finding faiths and deities..." />}>
								<FaithPage />
							</Suspense>
						</Route>
						<Route path="/family/:id">
							<Suspense fallback={<Loading text="Gathering families..." />}>
								<MonsterFamilyPage />
							</Suspense>
						</Route>
						<Route path="/feat/:id">
							<Suspense fallback={<Loading text="Cataloging feats..." />}>
								<FeatPage />
							</Suspense>
						</Route>
						<Route path="/feattreespage">
							<Suspense fallback={<Loading text="Growing a tree..." />}>
								<FeatTreePage />
							</Suspense>
						</Route>
						<Route path="/haunt/:id">
							<Suspense fallback={<Loading text="Apprehending haunts..." />}>
								<HauntPage />
							</Suspense>
						</Route>
						<Route path="/hkorder/:id">
							<Suspense fallback={<Loading text="Loading orders..." />}>
								<HellknightOrderPage />
							</Suspense>
						</Route>
						<Route path="/implement/:id">
							<Suspense fallback={<Loading text="Searching implements..." />}>
								<ImplementPage />
							</Suspense>
						</Route>
						<Route path="/inquisition/:id">
							<Suspense fallback={<Loading text="Expecting inquisitions..." />}>
								<InquisitionPage />
							</Suspense>
						</Route>
						<Route path="/kinetic/:id">
							<Suspense fallback={<Loading text="Finding talents..." />}>
								<KineticPage />
							</Suspense>
						</Route>
						<Route path="/madness/:id">
							<Suspense fallback={<Loading text="Categorizing madness..." />}>
								<MadnessPage />
							</Suspense>
						</Route>
						<Route path="/magic-armor/:id">
							<Suspense fallback={<Loading text="Discovering armor..." />}>
								<MagicArmorPage />
							</Suspense>
						</Route>
						<Route path="/magic-artifact/:id">
							<Suspense fallback={<Loading text="Uncovering artifacts..." />}>
								<MagicArtifactPage />
							</Suspense>
						</Route>
						<Route path="/magic-enh/:id">
							<Suspense fallback={<Loading text="Loading enhancements..." />}>
								<MagicEnhancementPage />
							</Suspense>
						</Route>
						<Route path="/magic-ioun/:id">
							<Suspense fallback={<Loading text="Catching ioun stones..." />}>
								<MagicIounStonePage />
							</Suspense>
						</Route>
						<Route path="/magic-ring/:id">
							<Suspense fallback={<Loading text="Gathering rings..." />}>
								<MagicRingPage />
							</Suspense>
						</Route>
						<Route path="/magic-rod/:id">
							<Suspense fallback={<Loading text="Checking rods..." />}>
								<MagicRodPage />
							</Suspense>
						</Route>
						<Route path="/magic-staff/:id">
							<Suspense fallback={<Loading text="Ordering staves..." />}>
								<MagicStaffPage />
							</Suspense>
						</Route>
						<Route path="/magic-weapon/:id">
							<Suspense fallback={<Loading text="Acquiring weaponry..." />}>
								<MagicWeaponPage />
							</Suspense>
						</Route>
						<Route path="/magic-wondrous/:id">
							<Suspense fallback={<Loading text="Finding wonders..." />}>
								<MagicWondrousPage />
							</Suspense>
						</Route>
						<Route path={/^[/]magic-(altar|aug|favor|fetish|fleshcraft|graft|implant|necro(graft|toxin)|piercing|plant|poison|relic|set|talisman|tattoo|throne)[/](?<id>[a-z_0-9]+)[/]?$/}>
							<Suspense fallback={<Loading text="Loading magic..." />}>
								<MagicMiscPage />
							</Suspense>
						</Route>
						<Route path="/arcana/:id">
							<Suspense fallback={<Loading text="Studying arcana..." />}>
								<ArcanaPage />
							</Suspense>
						</Route>
						<Route path="/monster/:id">
							<Suspense fallback={<Loading text="Compiling a bestiary..." />}>
								<MonsterPage />
							</Suspense>
						</Route>
						<Route path="/mystery/:id">
							<Suspense fallback={<Loading text="Building mysteries..." />}>
								<MysteryPage />
							</Suspense>
						</Route>
						<Route path="/npc/:id">
							<Suspense fallback={<Loading text="Loading NPCs..." />}>
								<NPCPage />
							</Suspense>
						</Route>
						<Route path="/oath/:id">
							<Suspense fallback={<Loading text="Finding oaths..." />}>
								<OathPage />
							</Suspense>
						</Route>
						<Route path="/oraclecurse/:id">
							<Suspense fallback={<Loading text="Recovering curses..." />}>
								<CursePage />
							</Suspense>
						</Route>
						<Route path="/order/:id">
							<Suspense fallback={<Loading text="Loading orders..." />}>
								<OrderPage />
							</Suspense>
						</Route>
						<Route path="/pclass/:id">
							<Suspense fallback={<Loading text="Indexing prestige classes..." />}>
								<PrestigeClassPage />
							</Suspense>
						</Route>
						<Route path="/race/:id">
							<Suspense fallback={<Loading text="Finding heritages..." />}>
								<RacePage />
							</Suspense>
						</Route>
						<Route path="/ragepower/:id">
							<Suspense fallback={<Loading text="Getting powers..." />}>
								<RagePowerPage />
							</Suspense>
						</Route>
						<Route path="/rule/:id">
							<Suspense fallback={<Loading text="Checking the rulebooks..." />}>
								<RulesPage />
							</Suspense>
						</Route>
						<Route path="/search">
							<Suspense fallback={<Loading />}>
								<SearchPage />
							</Suspense>
						</Route>
						<Route path="/shamanspirit/:id">
							<Suspense fallback={<Loading text="Summoning spirits..." />}>
								<ShamanSpiritPage />
							</Suspense>
						</Route>
						<Route path={/^[/](npcclass|sidekick)[/](?<id>[a-z_0-9]+)[/]?$/}>
							<Suspense fallback={<Loading text="Organizing classes..." />}>
								<OtherClassPage />
							</Suspense>
						</Route>
						<Route path="/skill/:id">
							<Suspense fallback={<Loading text="Honing skills..." />}>
								<SkillPage />
							</Suspense>
						</Route>
						<Route path="/sorcbloodline/:id">
							<Suspense fallback={<Loading text="Awakening bloodlines..." />}>
								<SorcererBloodlinePage />
							</Suspense>
						</Route>
						<Route path="/source/:id">
							<Suspense fallback={<Loading text="Finding sources..." />}>
								<SourcePage />
							</Suspense>
						</Route>
						<Route path="/spell/:id">
							<Suspense fallback={<Loading text="Transcribing spells..." />}>
								<SpellPage />
							</Suspense>
						</Route>
						<Route path="/spelldef/:id">
							<Suspense fallback={<Loading text="Checking spellbooks..." />}>
								<SpellDefPage />
							</Suspense>
						</Route>
						<Route path="/spirit/:id">
							<Suspense fallback={<Loading text="Summoning spirits..." />}>
								<MediumSpiritPage />
							</Suspense>
						</Route>
						<Route path={/^[/](sub)?type[/](?<id>[a-z0-9_]+)[/]?$/}>
							<Suspense fallback={<Loading text="Loading information..." />}>
								<MonsterTypingPage />
							</Suspense>
						</Route>
						<Route path="/tech-armor/:id">
							<Suspense fallback={<Loading text="Downloading tech..." />}>
								<TechArmorPage />
							</Suspense>
						</Route>
						<Route path="/tech-artifact/:id">
							<Suspense fallback={<Loading text="Downloading tech..." />}>
								<TechArtifactPage />
							</Suspense>
						</Route>
						<Route path="/tech-cyber/:id">
							<Suspense fallback={<Loading text="Downloading tech..." />}>
								<TechCybertechPage />
							</Suspense>
						</Route>
						<Route path="/tech-misc/:id">
							<Suspense fallback={<Loading text="Downloading tech..." />}>
								<TechMiscPage />
							</Suspense>
						</Route>
						<Route path="/tech-pharma/:id">
							<Suspense fallback={<Loading text="Downloading tech..." />}>
								<TechPharmaceuticalsPage />
							</Suspense>
						</Route>
						<Route path="/tech-weapon/:id">
							<Suspense fallback={<Loading text="Downloading tech..." />}>
								<TechWeaponPage />
							</Suspense>
						</Route>
						<Route path="/template/:id">
							<Suspense fallback={<Loading text="Applying templates..." />}>
								<MonsterTemplatePage />
							</Suspense>
						</Route>
						<Route path="/trait/:id">
							<Suspense fallback={<Loading text="Noting traits..." />}>
								<TraitPage />
							</Suspense>
						</Route>
						<Route path="/trap/:id">
							<Suspense fallback={<Loading text="Discovering traps..." />}>
								<TrapPage />
							</Suspense>
						</Route>
						<Route path="/umr/:id">
							<Suspense fallback={<Loading text="Checking the rulebooks..." />}>
								<UMRPage />
							</Suspense>
						</Route>
						<Route path="/phrenicamp/:id">
							<Suspense fallback={<Loading text="Amplifying phrenes..." />}>
								<TalentPage prefix="phrenicamp" />
							</Suspense>
						</Route>
						<Route path="/deed/:id">
							<Suspense fallback={<Loading text="Doing deeds..." />}>
								<TalentPage prefix="deed" />
							</Suspense>
						</Route>
						<Route path="/swashdeed/:id">
							<Suspense fallback={<Loading text="Doing deeds..." />}>
								<TalentPage prefix="swashdeed" />
							</Suspense>
						</Route>
						<Route path="/hkdiscipline/:id">
							<Suspense fallback={<Loading text="Disciplining Hell..." />}>
								<TalentPage prefix="hkdiscipline" />
							</Suspense>
						</Route>
						<Route path="/rangertrap/:id">
							<Suspense fallback={<Loading text="Setting traps..." />}>
								<TalentPage prefix="rangertrap" />
							</Suspense>
						</Route>
						<Route path="/talent/:id">
							<Suspense fallback={<Loading text="Finding talents..." />}>
								<TalentPage prefix="talent" />
							</Suspense>
						</Route>
						<Route path="/slayertalent/:id">
							<Suspense fallback={<Loading text="Finding talents..." />}>
								<TalentPage prefix="slayertalent" />
							</Suspense>
						</Route>
						<Route path="/invtalent/:id">
							<Suspense fallback={<Loading text="Finding talents..." />}>
								<TalentPageTwo prefix="invtalent" />
							</Suspense>
						</Route>
						<Route path="/soctalent/:id">
							<Suspense fallback={<Loading text="Finding talents..." />}>
								<TalentPageTwo prefix="soctalent" />
							</Suspense>
						</Route>
						<Route path="/vigtalent/:id">
							<Suspense fallback={<Loading text="Finding talents..." />}>
								<TalentPageTwo prefix="vigtalent" />
							</Suspense>
						</Route>
						<Route path="/kipower/:id">
							<Suspense fallback={<Loading text="Finding powers..." />}>
								<TalentPageTwo prefix="kipower" />
							</Suspense>
						</Route>
						<Route path="/stylestrike/:id">
							<Suspense fallback={<Loading text="Training in style..." />}>
								<TalentPageTwo prefix="stylestrike" />
							</Suspense>
						</Route>
						<Route path="/ninjatrick/:id">
							<Suspense fallback={<Loading text="Tricking ninjas..." />}>
								<TalentPageTwo prefix="ninjatrick" />
							</Suspense>
						</Route>
						<Route path="/evolution/:id">
							<Suspense fallback={<Loading text="Evolving..." />}>
								<TalentPageThree prefix="evolution" />
							</Suspense>
						</Route>
						<Route path="/unchevolution/:id">
							<Suspense fallback={<Loading text="Evolving..." />}>
								<TalentPageThree prefix="unchevolution" />
							</Suspense>
						</Route>
						<Route path="/eidolon/:id">
							<Suspense fallback={<Loading text="Checking subtypes..." />}>
								<TalentPageThree prefix="eidolon" />
							</Suspense>
						</Route>
						<Route path="/hex/:id">
							<Suspense fallback={<Loading text="Conjuring hexes..." />}>
								<TalentPageThree prefix="hex" />
							</Suspense>
						</Route>
						<Route path="/patron/:id">
							<Suspense fallback={<Loading text="Seeking patrons..." />}>
								<TalentPageThree prefix="patron" />
							</Suspense>
						</Route>
						<Route path="/shamanhex/:id">
							<Suspense fallback={<Loading text="Conjuring hexes..." />}>
								<TalentPageThree prefix="shamanhex" />
							</Suspense>
						</Route>
						<Route path="/discovery/:id">
							<Suspense fallback={<Loading text="Making discoveries..." />}>
								<TalentPageFour prefix="discovery" />
							</Suspense>
						</Route>
						<Route path="/arcanedisc/:id">
							<Suspense fallback={<Loading text="Making discoveries..." />}>
								<TalentPageFour prefix="arcanedisc" />
							</Suspense>
						</Route>
						<Route path="/trick/:id">
							<Suspense fallback={<Loading text="Planning tricks..." />}>
								<TalentPageFour prefix="trick" />
							</Suspense>
						</Route>
						<Route path="/stare/:id">
							<Suspense fallback={<Loading text="Not blinking..." />}>
								<TalentPageFour prefix="stare" />
							</Suspense>
						</Route>
						<Route path="/mercy/:id">
							<Suspense fallback={<Loading text="Asking for mercy..." />}>
								<TalentPageFour prefix="mercy" />
							</Suspense>
						</Route>
						<Route path="/misc/:id">
							<Suspense fallback={<Loading text="Sweeping out the cobwebs..." />}>
								<MiscPage />
							</Suspense>
						</Route>

						<Route path={/^[/]$/}><FrontPage /></Route>
						<Route><ErrorPage /></Route>
					</Switch>
				</IonContent>
			</IonSplitPane>
		</IonApp>
	);
};

export default App;
