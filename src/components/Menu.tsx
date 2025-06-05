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
import { Dispatch } from '@reduxjs/toolkit';
import { alertCircle, bookmark, bookmarks, shieldCheckmark } from 'ionicons/icons';
import { useLocation } from 'wouter';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { BookmarkGroup } from '../store/bookmarksSlice';
import { goTo } from '../store/historySlice';
import './Bookmarks.css';
import './Menu.css';

interface BaseInfo {
	url: string
	title: string
	icon: string
	minor?: boolean
	iconClassName?: string
	hr?: never
}
interface PrefixedPage extends BaseInfo {
	prefix?: string
	equals?: never
}
interface ExactPage extends BaseInfo {
	prefix?: never
	equals?: string
}

type Page = ExactPage | PrefixedPage;

interface Separator {
	hr: true
	minor?: never
	url?: never
	title?: never
	icon?: never
	iconClassName?: never
	prefix?: never
	equals?: never
}

type AppPage = Page | Separator

const bookmarkPage: Page = {
	title: "Bookmarks",
	url: "/bookmarks",
	icon: bookmarks
};

const basicBookmarkPage: Page = {
	title: "",
	url: "/bookmarks/",
	icon: bookmark,
	minor: true
};

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
		prefix: "rule umr corruption disease trap drug haunt madness curse infestation misc"
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
		prefix: "class pclass npcclass sidekick arc ability"
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
		prefix: "eq tech"
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

const makeItem = (
	appPage: AppPage,
	index: number | string,
	loc: string,
	dispatch: Dispatch,
	navigate: <S = any>(to: string | URL, options?: {
		replace?: boolean;
		state?: S;
	}) => void
) => {
	if (appPage.hr) {
		return <hr key={`menu-${index}`} />;
	}
	const { url, icon, title, prefix, equals, minor, iconClassName } = appPage;
	let cn = "";
	if(loc === url) {
		cn = "selected";
	} else if (prefix) {
		// Isolate the portion of the link that contains the most relevant info
		//   main/spells_wizard => 'spell'
		//   magic-staff/spark_staff =? 'magic'
		//   feat/craft_staff => 'feat'
		const m = loc.match(/^(?:[/](?!main)|[/]main[/])([^-_/]+?)(?:[/]|s?_|s?-)/);
		if(m) {
			const rx = new RegExp(`\\b${m[1]}\\b`);
			if(prefix.match(rx)) {
				cn = "selected";
			}
		}
	} else if (equals && (loc === equals)) {
		cn = "selected";
	}
	cn =
		(cn ? (cn + " linked") : "linked")
		+ (minor ? " minor" : "");
	return (
		<IonMenuToggle key={`menu-${index}`} autoHide={false}>
			<IonItem onClick={() => { dispatch(goTo(url)); navigate(url); } } className={cn} lines="none" detail={false}>
				<IonIcon aria-hidden="true" slot="start" src={icon} className={iconClassName} />
				<IonLabel>{title}</IonLabel>
				<IonRippleEffect />
			</IonItem>
		</IonMenuToggle>
	);
};

const Menu: React.FC = () => {
	const [loc] = useLocation();
	const dispatch = useAppDispatch();
	const [, navigate] = useLocation();
	const {db, order} = useAppSelector(state => state.bookmarks);
	const n = appPages.length;
	const bookmarked: [Page, string][] = order
		.map(id => [id, db[id]] as [string, BookmarkGroup])
		.filter(([, p]) => !p.hidden && (p.contents.length > 0))
		.map(([id, p]) => ([
			{
				...basicBookmarkPage,
				title: p.title,
				iconClassName: `color-${p.color}`,
				url: basicBookmarkPage.url + id
			},
			id
		]));

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="menu-list">
					<IonListHeader>Pf Data 1e</IonListHeader>
					{makeItem(bookmarkPage, n, loc, dispatch, navigate)}
					{bookmarked.map(([o, c]) => makeItem(o, c, loc, dispatch, navigate))}
					{appPages.map((appPage, index) => makeItem(appPage, index, loc, dispatch, navigate))}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
