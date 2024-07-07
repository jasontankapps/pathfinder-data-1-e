import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
	url: string;
	title: string;
	icon: string;
}

const appPages: AppPage[] = [
	{
		title: "Pathfinder Rules",
		url: "/main/rules",
		icon: "../icons/read.svg"
	},
	{
		title: "Races",
		url: "/main/races",
		icon: "../icons/person.svg"
	},
	{
		title: "Classes",
		url: "/main/classes",
		icon: "../icons/robe.svg"
	},
	{
		title: "Skills",
		url: "/main/skills",
		icon: "../icons/skills.svg"
	},
	{
		title: "Feats",
		url: "/main/feats",
		icon: "../icons/mighty-force.svg"
	},
	{
		title: "Traits",
		url: "/main/traits",
		icon: "../icons/spikes-half.svg"
	},
	{
		title: "Equipment",
		url: "/main/equipment",
		icon: "../icons/battle-gear.svg"
	},
	{
		title: "Magic Items",
		url: "/main/magic",
		icon: "../icons/orb-wand.svg"
	},
	{
		title: "Spells",
		url: "/main/spells",
		icon: "../icons/sparkles.svg"
	},
	{
		title: "Deities/Faiths",
		url: "/main/faiths",
		icon: "../icons/bolt-eye.svg"
	},
	{
		title: "Monsters and NPCs",
		url: "/main/monsters",
		icon: "../icons/croc-jaws.svg"
	}
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Pathfinder Data 1e</IonListHeader>
					{appPages.map((appPage, index) => {
						const { url, icon, title } = appPage;
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem className={location.pathname === url ? 'selected' : ''} routerLink={url} routerDirection="none" lines="none" detail={false}>
									<IonIcon aria-hidden="true" slot="start" src={icon} />
									<IonLabel>{title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
