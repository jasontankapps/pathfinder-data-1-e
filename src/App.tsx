import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './pages/MainPage';
import RacePage from './pages/RacePage';

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

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true} render={() => <MainPage />} />
						<Route path="/arcaneschool/:id" render={() => <></>} />
						<Route path="/aspect/:id" render={() => <></>} />
						<Route path="/bardicmasterpiece/:id" render={() => <></>} />
						<Route path="/blessing/:id" render={() => <></>} />
						<Route path="/bloodragerbloodline/:id" render={() => <></>} />
						<Route path="/class/:id" render={() => <></>} />
						<Route path="/class/ability/:id" render={() => <></>} />
						<Route path="/class/companion/:id" render={() => <></>} />
						<Route path="/class/npc/:id" render={() => <></>} />
						<Route path="/class/prestige/:id" render={() => <></>} />
						<Route path="/constructmod/:id" render={() => <></>} />
						<Route path="/corruption/:id" render={() => <></>} />
						<Route path="/curse/:id" render={() => <></>} />
						<Route path="/discipline/:id" render={() => <></>} />
						<Route path="/disease/:id" render={() => <></>} />
						<Route path="/domain/:id" render={() => <></>} />
						<Route path="/drug/:id" render={() => <></>} />
						<Route path="/druidcompanion/:id" render={() => <></>} />
						<Route path="/druiddomain/:id" render={() => <></>} />
						<Route path="/equipment/armor/:id" render={() => <></>} />
						<Route path="/equipment/armorenhancement/:id" render={() => <></>} />
						<Route path="/equipment/material/:id" render={() => <></>} />
						<Route path="/equipment/misc/:id" render={() => <></>} />
						<Route path="/equipment/poison/:id" render={() => <></>} />
						<Route path="/equipment/reagent/:id" render={() => <></>} />
						<Route path="/equipment/siegeengine/:id" render={() => <></>} />
						<Route path="/equipment/spellbook/:id" render={() => <></>} />
						<Route path="/equipment/tech/armor/:id" render={() => <></>} />
						<Route path="/equipment/tech/artifact/:id" render={() => <></>} />
						<Route path="/equipment/tech/cybertech/:id" render={() => <></>} />
						<Route path="/equipment/tech/misc/:id" render={() => <></>} />
						<Route path="/equipment/tech/pharmaceutical/:id" render={() => <></>} />
						<Route path="/equipment/tech/weapon/:id" render={() => <></>} />
						<Route path="/equipment/weapon/:id" render={() => <></>} />
						<Route path="/equipment/weaponenhance/:id" render={() => <></>} />
						<Route path="/exploit/:id" render={() => <></>} />
						<Route path="/faith/:id" render={() => <></>} />
						<Route path="/greaterexploit/:id" render={() => <></>} />
						<Route path="/haunt/:id" render={() => <></>} />
						<Route path="/hellknightorder/:id" render={() => <></>} />
						<Route path="/implement/:id" render={() => <></>} />
						<Route path="/inquisition/:id" render={() => <></>} />
						<Route path="/kinetic/:id" render={() => <></>} />
						<Route path="/legendaryspirit/:id" render={() => <></>} />
						<Route path="/madness/:id" render={() => <></>} />
						<Route path="/magic/altar/:id" render={() => <></>} />
						<Route path="/magic/armor/:id" render={() => <></>} />
						<Route path="/magic/artifact/:id" render={() => <></>} />
						<Route path="/magic/augmentation/:id" render={() => <></>} />
						<Route path="/magic/enhancement/:id" render={() => <></>} />
						<Route path="/magic/favor/:id" render={() => <></>} />
						<Route path="/magic/fetish/:id" render={() => <></>} />
						<Route path="/magic/fleshcrafting/:id" render={() => <></>} />
						<Route path="/magic/graft/:id" render={() => <></>} />
						<Route path="/magic/implant/:id" render={() => <></>} />
						<Route path="/magic/ioun/:id" render={() => <></>} />
						<Route path="/magic/necrograft/:id" render={() => <></>} />
						<Route path="/magic/necrotoxin/:id" render={() => <></>} />
						<Route path="/magic/piercing/:id" render={() => <></>} />
						<Route path="/magic/plant/:id" render={() => <></>} />
						<Route path="/magic/poison/:id" render={() => <></>} />
						<Route path="/magic/relic/:id" render={() => <></>} />
						<Route path="/magic/ring/:id" render={() => <></>} />
						<Route path="/magic/rod/:id" render={() => <></>} />
						<Route path="/magic/set/:id" render={() => <></>} />
						<Route path="/magic/staff/:id" render={() => <></>} />
						<Route path="/magic/talisman/:id" render={() => <></>} />
						<Route path="/magic/tattoo/:id" render={() => <></>} />
						<Route path="/magic/throne/:id" render={() => <></>} />
						<Route path="/magic/weapon/:id" render={() => <></>} />
						<Route path="/magic/wondrous/:id" render={() => <></>} />
						<Route path="/magusarcana/:id" render={() => <></>} />
						<Route path="/monster/:id" render={() => <></>} />
						<Route path="/monster/family/:id" render={() => <></>} />
						<Route path="/monster/subtype/:id" render={() => <></>} />
						<Route path="/monster/template/:id" render={() => <></>} />
						<Route path="/monster/type/:id" render={() => <></>} />
						<Route path="/mystery/:id" render={() => <></>} />
						<Route path="/npc/:id" render={() => <></>} />
						<Route path="/oath/:id" render={() => <></>} />
						<Route path="/occultritual/:id" render={() => <></>} />
						<Route path="/oraclecurse/:id" render={() => <></>} />
						<Route path="/order/:id" render={() => <></>} />
						<Route path="/outsiderspirit/:id" render={() => <></>} />
						<Route path="/race/:id" render={() => <RacePage  />} />
						<Route path="/ragepower/:id" render={() => <></>} />
						<Route path="/rule/:id" render={() => <></>} />
						<Route path="/shamanspirit/:id" render={() => <></>} />
						<Route path="/skill/:id" render={() => <></>} />
						<Route path="/sorcererbloodline/:id" render={() => <></>} />
						<Route path="/source/:id" render={() => <></>} />
						<Route path="/spell/:id" render={() => <></>} />
						<Route path="/spell/definition/:id" render={() => <></>} />
						<Route path="/spirit/:id" render={() => <></>} />
						<Route path="/stanceragepower/:id" render={() => <></>} />
						<Route path="/trait/:id" render={() => <></>} />
						<Route path="/trap/:id" render={() => <></>} />
						<Route path="/umr/:id" render={() => <></>} />
						<Route path="/:mainpage" render={() => <MainPage />} />
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
