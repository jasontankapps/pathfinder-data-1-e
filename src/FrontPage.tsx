import { IonContent, IonList, IonPage } from '@ionic/react';
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
			<PageHeader title="About PFD1e" hierarchy={[]} className="ion-hide-lg-down" />
			<IonContent>
				<div className="main basicContent ion-hide-lg-up">
					<IonList lines="full">
						<DisplayMainItem description={description} />
					</IonList>
				</div>
				<div className="ion-hide-lg-down basicContent simple">
					<h2>General Info</h2>
					<p>This app uses trademarks and/or copyrights owned by Paizo Inc., used under <a href="https://paizo.com/communityuse">Paizo's Community Use Policy</a> (paizo.com/communityuse). We are expressly prohibited from charging you to use or access this content. <em>PF Data 1e</em> is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit <a href="https://paizo.com/">paizo.com</a>.</p>
					<p>The game rules herein are covered by the <a href="/main/ogc">Open Game License</a>.</p>
					<p className="final">v.0.0.1</p>
				</div>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default FrontPage;
