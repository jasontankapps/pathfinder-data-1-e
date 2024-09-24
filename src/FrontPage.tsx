import { IonContent, IonList, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import { isId, isMain } from './components/mainAssertions';
import DisplayMainItem from './components/DisplayMainItem';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import main from './json/main.json';
import './pages/Page.css';

const FrontPage: React.FC = () => {
	const id = "main";

	isId(id, main);
	const data = main[id];
	isMain(data);

	const { title, description } = data;

	return (
		<IonPage>
			<PageHeader title={title} hierarchy={[]} className="ion-hide-lg-up" />
			<PageHeader title="About Pf Data 1e" hierarchy={[]} className="ion-hide-lg-down" />
			<IonContent>
				<div className="main basicContent ion-hide-lg-up">
					<IonList lines="full">
						<DisplayMainItem description={description} />
					</IonList>
				</div>
				<div className="ion-hide-lg-down basicContent simple">
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
					<p><em>All original icons are distributed under the <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a> Creative Commons license.</em></p>
					<p>The font is <a href="https://fonts.google.com/specimen/Taviraj">Taviraj</a> by <a href="https://fonts.google.com/?query=Cadson%20Demak">Cadson Demak</a></p>
					<h2>App Info</h2>
					<p className="final">v.0.0.1</p>
				</div>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default FrontPage;
