import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import MainPage from './pages/MainPage';

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
						<Route path="/" exact={true} render={(props) => <MainPage />} />
						<Route path="/class/prestige/:id" render={(props) => <></>} />
						<Route path="/class/npc/:id" render={(props) => <></>} />
						<Route path="/class/companion/:id" render={(props) => <></>} />
						<Route path="/class/ability/arcaneschool/:id" render={(props) => <></>} />
						<Route path="/class/ability/aspect/:id" render={(props) => <></>} />
						<Route path="/class/ability/bardicmasterpiece/:id" render={(props) => <></>} />
						<Route path="/class/ability/blessing/:id" render={(props) => <></>} />
						<Route path="/class/ability/bloodragerbloodline/:id" render={(props) => <></>} />
						<Route path="/class/ability/curse/:id" render={(props) => <></>} />
						<Route path="/class/ability/discipline/:id" render={(props) => <></>} />
						<Route path="/class/ability/druidcompanion/:id" render={(props) => <></>} />
						<Route path="/class/ability/druiddomain/:id" render={(props) => <></>} />
						<Route path="/class/ability/exploit/:id" render={(props) => <></>} />
						<Route path="/class/ability/greaterexploit/:id" render={(props) => <></>} />
						<Route path="/class/ability/hellknightorder/:id" render={(props) => <></>} />
						<Route path="/class/ability/implement/:id" render={(props) => <></>} />
						<Route path="/class/ability/inquisition/:id" render={(props) => <></>} />
						<Route path="/class/ability/kinetic/:id" render={(props) => <></>} />
						<Route path="/class/ability/legendaryspirit/:id" render={(props) => <></>} />
						<Route path="/class/ability/magusarcana/:id" render={(props) => <></>} />
						<Route path="/class/ability/mystery/:id" render={(props) => <></>} />
						<Route path="/class/ability/oath/:id" render={(props) => <></>} />
						<Route path="/class/ability/order/:id" render={(props) => <></>} />
						<Route path="/class/ability/outsiderspirit/:id" render={(props) => <></>} />
						<Route path="/class/ability/ragepower/:id" render={(props) => <></>} />
						<Route path="/class/ability/shamanspirit/:id" render={(props) => <></>} />
						<Route path="/class/ability/sorcererbloodline/:id" render={(props) => <></>} />
						<Route path="/class/ability/spirit/:id" render={(props) => <></>} />
						<Route path="/class/ability/stanceragepower/:id" render={(props) => <></>} />
						<Route path="/class/ability/:id" render={(props) => <></>} />
						<Route path="/class/:id" render={(props) => <></>} />
						<Route path="/constructmod/:id" render={(props) => <></>} />
						<Route path="/corruption/:id" render={(props) => <></>} />
						<Route path="/curse/:id" render={(props) => <></>} />
						<Route path="/disease/:id" render={(props) => <></>} />
						<Route path="/domain/:id" render={(props) => <></>} />
						<Route path="/drug/:id" render={(props) => <></>} />
						<Route path="/equipment/reagent/:id" render={(props) => <></>} />
						<Route path="/equipment/armor/:id" render={(props) => <></>} />
						<Route path="/equipment/armorenhancement/:id" render={(props) => <></>} />
						<Route path="/equipment/misc/:id" render={(props) => <></>} />
						<Route path="/equipment/poison/:id" render={(props) => <></>} />
						<Route path="/equipment/siegeengine/:id" render={(props) => <></>} />
						<Route path="/equipment/material/:id" render={(props) => <></>} />
						<Route path="/equipment/spellbook/:id" render={(props) => <></>} />
						<Route path="/equipment/weapon/:id" render={(props) => <></>} />
						<Route path="/equipment/weaponenhance/:id" render={(props) => <></>} />
						<Route path="/equipment/tech/armor/:id" render={(props) => <></>} />
						<Route path="/equipment/tech/artifact/:id" render={(props) => <></>} />
						<Route path="/equipment/tech/cybertech/:id" render={(props) => <></>} />
						<Route path="/equipment/tech/misc/:id" render={(props) => <></>} />
						<Route path="/equipment/tech/pharmaceutical/:id" render={(props) => <></>} />
						<Route path="/equipment/tech/weapon/:id" render={(props) => <></>} />
						<Route path="/faith/:id" render={(props) => <></>} />
						<Route path="/haunt/:id" render={(props) => <></>} />
						<Route path="/madness/:id" render={(props) => <></>} />
						<Route path="/magic/armor/:id" render={(props) => <></>} />
						<Route path="/magic/altar/:id" render={(props) => <></>} />
						<Route path="/magic/artifact/:id" render={(props) => <></>} />
						<Route path="/magic/implant/:id" render={(props) => <></>} />
						<Route path="/magic/talisman/:id" render={(props) => <></>} />
						<Route path="/magic/augmentation/:id" render={(props) => <></>} />
						<Route path="/magic/enhancement/:id" render={(props) => <></>} />
						<Route path="/magic/favor/:id" render={(props) => <></>} />
						<Route path="/magic/fleshcrafting/:id" render={(props) => <></>} />
						<Route path="/magic/graft/:id" render={(props) => <></>} />
						<Route path="/magic/poison/:id" render={(props) => <></>} />
						<Route path="/magic/ioun/:id" render={(props) => <></>} />
						<Route path="/magic/fetish/:id" render={(props) => <></>} />
						<Route path="/magic/necrograft/:id" render={(props) => <></>} />
						<Route path="/magic/necrotoxin/:id" render={(props) => <></>} />
						<Route path="/magic/plant/:id" render={(props) => <></>} />
						<Route path="/magic/potion/:id" render={(props) => <></>} />
						<Route path="/magic/relic/:id" render={(props) => <></>} />
						<Route path="/magic/ring/:id" render={(props) => <></>} />
						<Route path="/magic/rod/:id" render={(props) => <></>} />
						<Route path="/magic/set/:id" render={(props) => <></>} />
						<Route path="/magic/piercing/:id" render={(props) => <></>} />
						<Route path="/magic/staff/:id" render={(props) => <></>} />
						<Route path="/magic/tattoo/:id" render={(props) => <></>} />
						<Route path="/magic/throne/:id" render={(props) => <></>} />
						<Route path="/magic/weapon/:id" render={(props) => <></>} />
						<Route path="/magic/wondrous/:id" render={(props) => <></>} />
						<Route path="/monster/subtype/:id" render={(props) => <></>} />
						<Route path="/monster/type/:id" render={(props) => <></>} />
						<Route path="/monster/family/:id" render={(props) => <></>} />
						<Route path="/monster/template/:id" render={(props) => <></>} />
						<Route path="/monster/:id" render={(props) => <></>} />
						<Route path="/npc/:id" render={(props) => <></>} />
						<Route path="/occultritual/:id" render={(props) => <></>} />
						<Route path="/race/:id" render={(props) => <></>} />
						<Route path="/rule/:id" render={(props) => <></>} />
						<Route path="/skill/:id" render={(props) => <></>} />
						<Route path="/source/:id" render={(props) => <></>} />
						<Route path="/spell/definition/:id" render={(props) => <></>} />
						<Route path="/spell/:id" render={(props) => <></>} />
						<Route path="/trait/:id" render={(props) => <></>} />
						<Route path="/trap/:id" render={(props) => <></>} />
						<Route path="/umr/:id" render={(props) => <></>} />
						<Route path="/:mainpage" render={(props) => <MainPage />} />
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
