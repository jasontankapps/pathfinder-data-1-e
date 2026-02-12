import { IonContent, IonList, IonPage, IonItem, IonItemDivider, IonLabel, IonIcon } from '@ionic/react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import Link from './components/Link';
import './pages/Page.css';

export const AboutInfo: React.FC<{className: string}> = ({className}) => (
	<div className={className}>
		<IonList className="aboutPage" lines="full">
			<IonItemDivider><IonLabel>General Info</IonLabel></IonItemDivider>
			<IonItem><IonLabel>
				<p>This app uses trademarks and/or copyrights owned by Paizo Inc., used under <a href="https://paizo.com/communityuse">Paizo's Community Use Policy (paizo.com/communityuse)</a>. We are expressly prohibited from charging you to use or access this content. <em>Pf Data 1e</em> is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit <a href="https://paizo.com/">paizo.com</a>.</p>
				<p>The game rules herein are covered by the <Link to="/main/ogc">Open Game License</Link>.</p>
			</IonLabel></IonItem>
			<IonItemDivider><IonLabel>Bug Reports</IonLabel></IonItemDivider>
			<IonItem><IonLabel>
				<p>If you run into any issues or find any bad information, please report it to the <a href="https://github.com/jasontankapps/pathfinder-data-1-e/issues">Github</a>.</p>
			</IonLabel></IonItem>
			<IonItemDivider><IonLabel>Credits</IonLabel></IonItemDivider>
			<IonItem><IonLabel>
				<p>App Icon is based on "Gift of Knowledge" by <a href="https://lorcblog.blogspot.com/">Lorc</a>. The following icons are also by Lorc.</p>
				<p className="icons">
					<IonIcon icon="/icons/battle-gear.svg" />
					<IonIcon icon="/icons/croc-jaws.svg" />
					<IonIcon icon="/icons/bolt-eye.svg" />
					<IonIcon icon="/icons/robe.svg" />
					<IonIcon icon="/icons/death-note.svg" />
					<IonIcon icon="/icons/poison-bottle.svg" />
					<IonIcon icon="/icons/infested-mass.svg" />
					<IonIcon icon="/icons/paramecia.svg" />
					<IonIcon icon="/icons/tumor.svg" />
					<IonIcon icon="/icons/syringe.svg" />
					<IonIcon icon="/icons/ghost.svg" />
					<IonIcon icon="/icons/wolf-trap.svg" />
					<IonIcon icon="/icons/barbed-arrow.svg" />
					<IonIcon icon="/icons/bowman.svg" />
					<IonIcon icon="/icons/broken-shield.svg" />
					<IonIcon icon="/icons/embraced-energy.svg" />
					<IonIcon icon="/icons/magic-palm.svg" />
					<IonIcon icon="/icons/magic-swirl.svg" />
					<IonIcon icon="/icons/mailed-fist.svg" />
					<IonIcon icon="/icons/shield-reflect.svg" />
					<IonIcon icon="/icons/smoking-finger.svg" />
					<IonIcon icon="/icons/tornado-discs.svg" />
					<IonIcon icon="/icons/hazard-sign.svg" />
				</p>
			</IonLabel></IonItem>
			<IonItem><IonLabel>
				<p>The following icons are by <a href="https://delapouite.com/">Delapouite</a>. (CC BY 3.0)</p>
				<p className="icons">
					<IonIcon icon="/icons/skills.svg" />
					<IonIcon icon="/icons/person.svg" />
					<IonIcon icon="/icons/mighty-force.svg" />
					<IonIcon icon="/icons/sparkles.svg" />
					<IonIcon icon="/icons/ancient-sword.svg" />
					<IonIcon icon="/icons/shield-bash.svg" />
					<IonIcon icon="/icons/stairs-goal.svg" />
					<IonIcon icon="/icons/elephant.svg" />
					<IonIcon icon="/icons/confirmed.svg" />
					<IonIcon icon="/icons/armor-downgrade.svg" />
					<IonIcon icon="/icons/armor-upgrade.svg" />
					<IonIcon icon="/icons/cherish.svg" />
					<IonIcon icon="/icons/rolling-dices.svg" />
					<IonIcon icon="/icons/spell-book.svg" />
					<IonIcon icon="/icons/info.svg" />
				</p>
			</IonLabel></IonItem>
			<IonItem>
				<IonIcon icon="/icons/abstract-091.svg" slot="start" />
				<IonLabel>
					<p>Icon by <a href="https://viscious-speed.deviantart.com/">Viscious Speed</a>.</p>
				</IonLabel>
			</IonItem>
			<IonItem>
				<IonIcon icon="/icons/orb-wand.svg" slot="start" />
				<IonLabel>
					<p>Icon by <a href="https://wjbstories.blogspot.com/">Wildabeast</a>.</p>
				</IonLabel>
			</IonItem>
			<IonItem>
				<IonIcon icon="/icons/read.svg" slot="start" />
				<IonLabel>
					<p>Icon by <a href="https://game-icons.net/">Skoll</a>.</p>
				</IonLabel>
			</IonItem>
			<IonItem>
				<IonIcon icon="/icons/spikes-half.svg" slot="start" />
				<IonLabel>
					<p>Icon by <a href="https://opengameart.org/content/95-game-icons">sbed</a>.</p>
				</IonLabel>
			</IonItem>
			<IonItem>
				<IonIcon icon="/icons/overlap.svg" slot="start" />
				<IonLabel>
					<p>Icon by <a href="https://thenounproject.com/browse/icons/term/overlap/">Alec Dhuse</a>. (CC BY 3.0)</p>
				</IonLabel>
			</IonItem>
			<IonItem><IonLabel>
				<p>The following icons are by <a href="https://fonts.google.com/icons">Google</a>.</p>
				<p className="icons">
					<IonIcon icon="/icons/find-in-page.svg" />
					<IonIcon icon="/icons/input.svg" />
					<IonIcon icon="/icons/swipe-left.svg" />
				</p>
			</IonLabel></IonItem>
			<IonItem><IonLabel>
				<p><em>All original icons are distributed under the <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a> Creative Commons license.</em></p>
			</IonLabel></IonItem>
			<IonItem><IonLabel>
				<p>The font is <a href="https://fonts.google.com/specimen/Taviraj">Taviraj</a> by <a href="https://fonts.google.com/?query=Cadson%20Demak">Cadson Demak</a>, with some symbols being rendered as <a href="https://www.onlinewebfonts.com/download/bd95c919d5566390c0565bea43f95495">Symbola</a> by George Douros.</p>
			</IonLabel></IonItem>
			<IonItemDivider><IonLabel>App Info</IonLabel></IonItemDivider>
			<IonItem><IonLabel><p>v.0.9.6</p></IonLabel></IonItem>
		</IonList>
	</div>
);

const AboutOnlyPage: React.FC = () => {

	return (
		<IonPage>
			<PageHeader title="About Pf Data 1e" />
			<IonContent>
				<AboutInfo className="basicContent" />
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default AboutOnlyPage;
