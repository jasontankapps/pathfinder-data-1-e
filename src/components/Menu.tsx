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
import { alertCircle, shieldCheckmark } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
	url?: string
	title?: string
	icon?: string
	className?: string
	prefix?: string
	equals?: string
	newSection?: boolean
	hr?: boolean
}

const appPages: AppPage[] = [
	{
		title: "Cheatsheet",
		url: "/main/cheatsheet",
		icon: shieldCheckmark
	},
	{
		hr: true
	},
	{
		title: "Pathfinder Rules",
		url: "/main/rules",
		icon: "/icons/read.svg",
		prefix: "rule umr corruption disease trap drug haunt madness curse infestation"
	},
	{
		title: "Races",
		url: "/main/races",
		icon: "/icons/person.svg",
		prefix: "race"
	},
	{
		title: "Classes",
		url: "/main/classes",
		icon: "/icons/robe.svg",
		prefix: "class prestigeclass npcclass sidekick arechetype ability"
	},
	{
		title: "Skills",
		url: "/main/skills",
		icon: "/icons/skills.svg",
		prefix: "skill"
	},
	{
		title: "Feats",
		url: "/main/feats",
		icon: "/icons/mighty-force.svg",
		prefix: "feat"
	},
	{
		title: "Traits",
		url: "/main/traits",
		icon: "/icons/spikes-half.svg",
		prefix: "trait"
	},
	{
		title: "Equipment",
		url: "/main/equipment",
		icon: "/icons/battle-gear.svg",
		prefix: "equipment"
	},
	{
		title: "Magic Items",
		url: "/main/magic",
		icon: "/icons/orb-wand.svg",
		prefix: "magic"
	},
	{
		title: "Spells",
		url: "/main/spells",
		icon: "/icons/sparkles.svg",
		prefix: "spell spelldef"
	},
	{
		title: "Deities/Faiths",
		url: "/main/faiths",
		icon: "/icons/bolt-eye.svg",
		prefix: "faith"
	},
	{
		title: "Monsters and NPCs",
		url: "/main/monsters",
		icon: "/icons/croc-jaws.svg",
		prefix: "monster template family npc type subtype"
	},
	{
		hr: true
	},
	{
		title: "About",
		url: "/",
		icon: alertCircle,
		equals: "/"
	}
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="menu-list">
					<IonListHeader>PF Data 1e</IonListHeader>
					{appPages.map((appPage, index) => {
						if (appPage.hr) {
							return <hr key={index} />;
						}
						const { url, icon, title, prefix = "", equals } = appPage;
						const loc = location.pathname;
						let cn = "";
						if(loc === url) {
							cn = "selected";
						} else if (prefix) {
							const m = loc.match(/^\/(?:main\/)?([^_/]+?)(?:\/|s?_)/);
							if(m) {
								const rx = new RegExp(`\\b${m[1]}\\b`);
								if(prefix.match(rx)) {
									cn = "selected";
								}
							}
						} else if (equals && (loc === equals)) {
							cn = "selected";
						}
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem className={cn} routerLink={url} routerDirection="none" lines="none" detail={false}>
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
