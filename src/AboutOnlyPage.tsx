import { IonContent, IonPage } from '@ionic/react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import Link from './components/Link';
import './pages/Page.css';

export const AboutInfo: React.FC<{className: string}> = ({className}) => (
	<div className={className}>
		<h2>General Info</h2>
		<p>This app uses trademarks and/or copyrights owned by Paizo Inc., used under <a href="https://paizo.com/communityuse">Paizo's Community Use Policy (paizo.com/communityuse)</a>. We are expressly prohibited from charging you to use or access this content. <em>Pf Data 1e</em> is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit <a href="https://paizo.com/">paizo.com</a>.</p>
		<p>The game rules herein are covered by the <Link to="/main/ogc">Open Game License</Link>.</p>
		<h2>Bug Reports</h2>
		<p>If you run into any issues or find any bad information, please report it to the <a href="https://github.com/jasontankapps/pathfinder-data-1-e/issues">Github</a>.</p>
		<h2>Credits</h2>
		<p>App Icon is based on "Gift of Knowledge" by <a href="https://lorcblog.blogspot.com/">Lorc</a>.</p>
		<p>Menu icons "Battle Gear, "Croc Jaws", "Bolt Eyes", and "Robe" also by Lorc.</p>
		<p>Menu icons "Skills", "Person", "Mighty Force", and "Sparkles" by <a href="https://delapouite.com/">Delapouite</a>.</p>
		<p>Menu icon "Orb Wand" by <a href="https://wjbstories.blogspot.com/">Wildabeast</a></p>
		<p>Menu icon "Read" by <a href="https://game-icons.net/">Skoll</a></p>
		<p>Menu icon "Spiked Half" by <a href="https://opengameart.org/content/95-game-icons">sbed</a></p>
		<p>Modal icon "Overlap" by <a href="https://thenounproject.com/browse/icons/term/overlap/">Alec Dhuse</a> (CC BY 3.0)</p>
		<p>"Find in Page", "Input", and "Swipe-Left" icons by <a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:find_in_page:FILL@0;wght@400;GRAD@0;opsz@24">Google</a></p>
		<p><em>All original icons are distributed under the <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a> Creative Commons license.</em></p>
		<p>The font is <a href="https://fonts.google.com/specimen/Taviraj">Taviraj</a> by <a href="https://fonts.google.com/?query=Cadson%20Demak">Cadson Demak</a>, with some symbols being rendered as <a href="https://www.onlinewebfonts.com/download/bd95c919d5566390c0565bea43f95495">Symbola</a> by George Douros.</p>
		<h2>App Info</h2>
		<p className="final">v.0.0.5</p>
	</div>
);

const AboutOnlyPage: React.FC = () => {

	return (
		<IonPage>
			<PageHeader title="About Pf Data 1e" />
			<IonContent>
				<AboutInfo className="basicContent simple" />
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default AboutOnlyPage;
