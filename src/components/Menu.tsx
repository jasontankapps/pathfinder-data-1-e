import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonRippleEffect
} from '@ionic/react';
import { alertCircle, shieldCheckmark } from 'ionicons/icons';
import { useLocation } from 'wouter';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';
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
		prefix: "class prestigeclass npcclass sidekick archetype ability"
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
		prefix: "equipment tech"
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
		url: "/about",
		icon: alertCircle,
		equals: "/"
	}
];

const Menu: React.FC = () => {
	const [loc] = useLocation();
	const dispatch = useAppDispatch();
	const [path, navigate] = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="menu-list">
					<IonListHeader>Pf Data 1e</IonListHeader>
					{appPages.map((appPage, index) => {
						if (appPage.hr) {
							return <hr key={index} />;
						}
						const { url, icon, title, prefix, equals } = appPage;
						let cn = "";
						if(loc === url) {
							cn = "selected";
						} else if (prefix) {
							const m = loc.match(/^(?:\/(?!main)|\/main\/)([^-_/]+?)(?:\/|s?_|s?-)/);
							if(m) {
								const rx = new RegExp(`\\b${m[1]}\\b`);
								if(prefix.match(rx)) {
									cn = "selected";
								}
							}
						} else if (equals && (loc === equals)) {
							cn = "selected";
						}
						cn = cn ? (cn + " linked") : "linked";
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem onClick={() => { dispatch(goTo(url)); navigate(url); } } className={cn} lines="none" detail={false}>
									<IonIcon aria-hidden="true" slot="start" src={icon} />
									<IonLabel>{title}</IonLabel>
									<IonRippleEffect />
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
