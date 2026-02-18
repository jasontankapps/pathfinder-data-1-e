import { useEffect, useState, FC, PropsWithChildren } from 'react';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { useParams } from 'wouter';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import './pages/Page.css';

type Params = { icon?: string };

interface IconProps {
	incoming: string
	icon: string
}

const Icon: FC<PropsWithChildren<IconProps>> = ({incoming, icon, children}) => {
	return (
		<IonItem className={icon === incoming ? "user-focus" : ""} id={icon}>
			<IonIcon
				icon={`/icons/${icon}.svg`}
				color={icon === incoming ? "tertiary" : "secondary"}
				slot="start"
			/>
			<IonLabel className="ion-text-wrap">
				<p>{children}</p>
			</IonLabel>
		</IonItem>
	);
};

const Icons: FC = () => {

	const { icon = "" } = useParams<Params>();
	const [initializedTo, setInitializedTo] = useState<string>("");

	useEffect(() => {
		if(icon !== initializedTo) {
			const el = document.getElementById(icon);
			el && window.setTimeout(() => el.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center"
			}), 100);
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setInitializedTo(icon);
		}
	}, [icon, initializedTo, setInitializedTo]);

	return (
		<IonPage>
			<PageHeader title="Icons" notBookmarkable />
			<IonContent className="standalone">
				<IonList lines="full">
					<Icon incoming={icon} icon="info">A simple note about an ability or thing.</Icon>
					<Icon incoming={icon} icon="confirmed">A list of prerequisites for a given ability.</Icon>
					<Icon incoming={icon} icon="hazard-sign">A warning, often something that will shut off an ability.</Icon>
					<Icon incoming={icon} icon="mailed-fist">Some sort of melee attack or melee attack effect.</Icon>
					<Icon incoming={icon} icon="bowman">A ranged attack or ranged attack effect.</Icon>
					<Icon incoming={icon} icon="magic-palm">Some sort of melee touch attack.</Icon>
					<Icon incoming={icon} icon="smoking-finger">A ranged touch attack, or some sort of magical ranged attack.</Icon>
					<Icon incoming={icon} icon="magic-swirl">General magical, supernatural, or uncanny ability.</Icon>
					<Icon incoming={icon} icon="barbed-arrow">A line-effect magical attack.</Icon>
					<Icon incoming={icon} icon="tornado-discs">A cone-effect magical attack.</Icon>
					<Icon incoming={icon} icon="abstract-091">Some sort of magical aura or other radius-limited effect.</Icon>
					<Icon incoming={icon} icon="spell-book">Gain one or more spells known.</Icon>
					<Icon incoming={icon} icon="rolling-dices">A change to the outcome of a die roll.</Icon>
					<Icon incoming={icon} icon="armor-upgrade">A defensive ability.</Icon>
					<Icon incoming={icon} icon="shield-reflect">An ability that provides protection to another.</Icon>
					<Icon incoming={icon} icon="stairs-goal">Gain a new ability or companion.</Icon>
					<Icon incoming={icon} icon="skills">A change to class skills.</Icon>
					<Icon incoming={icon} icon="upgrade">Boost your own abilities, or an ally's.</Icon>
					<Icon incoming={icon} icon="heart-plus">Some sort of healing or otherwise helpful action.</Icon>
					<Icon incoming={icon} icon="armor-downgrade">An effect that lowers the defenses of others.</Icon>
					<Icon incoming={icon} icon="broken-shield">A downgrade of your own abilities, or an ally's.</Icon>
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default Icons;
