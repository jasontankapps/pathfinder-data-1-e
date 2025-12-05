import { useEffect, useState, FC } from 'react';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { useParams } from 'wouter';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import './pages/Page.css';

type Params = { icon?: string };

const maybeHighlightBG = (icon: string, id: string) => {
	return icon === id ? "user-focus" : "";
};
const maybeHighlightIcon = (icon: string, id: string) => {
	return icon === id ? "tertiary" : "secondary";
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
			setInitializedTo(icon);
		}
	}, [icon, initializedTo, setInitializedTo]);

	return (
		<IonPage>
			<PageHeader title="Icons" notBookmarkable />
			<IonContent className="standalone">
				<IonList lines="full">
					<IonItem className={maybeHighlightBG(icon, "info")} id="info">
						<IonIcon
							icon="/icons/info.svg"
							color={maybeHighlightIcon(icon, "info")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A simple note about an ability or thing.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "confirmed")} id="confirmed">
						<IonIcon
							icon="/icons/confirmed.svg"
							color={maybeHighlightIcon(icon, "confirmed")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A list of prerequisites for a given ability.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "mailed-fist")} id="mailed-fist">
						<IonIcon
							icon="/icons/mailed-fist.svg"
							color={maybeHighlightIcon(icon, "mailed-fist")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Some sort of melee attack or melee attack effect.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "bowman")} id="bowman">
						<IonIcon
							icon="/icons/bowman.svg"
							color={maybeHighlightIcon(icon, "bowman")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A ranged attack or ranged attack effect.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "magic-palm")} id="magic-palm">
						<IonIcon
							icon="/icons/magic-palm.svg"
							color={maybeHighlightIcon(icon, "magic-palm")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Some sort of melee touch attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "smoking-finger")} id="smoking-finger">
						<IonIcon
							icon="/icons/smoking-finger.svg"
							color={maybeHighlightIcon(icon, "smoking-finger")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Some sort of magical ranged attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "magic-swirl")} id="magic-swirl">
						<IonIcon
							icon="/icons/magic-swirl.svg"
							color={maybeHighlightIcon(icon, "magic-swirl")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>General magical, supernatural, or uncanny ability.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "barbed-arrow")} id="barbed-arrow">
						<IonIcon
							icon="/icons/barbed-arrow.svg"
							color={maybeHighlightIcon(icon, "barbed-arrow")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A line-effect magical attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "tornado-discs")} id="tornado-discs">
						<IonIcon
							icon="/icons/tornado-discs.svg"
							color={maybeHighlightIcon(icon, "tornado-discs")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A cone-effect magical attack.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "abstract-091")} id="abstract-091">
						<IonIcon
							icon="/icons/abstract-091.svg"
							color={maybeHighlightIcon(icon, "abstract-091")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Some sort of magical aura or other radius-limited effect.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "spell-book")} id="spell-book">
						<IonIcon
							icon="/icons/spell-book.svg"
							color={maybeHighlightIcon(icon, "spell-book")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Gain one or more spells known.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "rolling-dices")} id="rolling-dices">
						<IonIcon
							icon="/icons/rolling-dices.svg"
							color={maybeHighlightIcon(icon, "rolling-dices")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A change to the outcome of a die roll.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "armor-upgrade")} id="armor-upgrade">
						<IonIcon
							icon="/icons/armor-upgrade.svg"
							color={maybeHighlightIcon(icon, "armor-upgrade")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A defensive ability.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "shield-reflect")} id="shield-reflect">
						<IonIcon
							icon="/icons/shield-reflect.svg"
							color={maybeHighlightIcon(icon, "shield-reflect")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>An ability that provides protection to another.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "muscle-up")} id="muscle-up">
						<IonIcon
							icon="/icons/muscle-up.svg"
							color={maybeHighlightIcon(icon, "muscle-up")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Gain a new ability or companion.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "skills")} id="skills">
						<IonIcon
							icon="/icons/skills.svg"
							color={maybeHighlightIcon(icon, "skills")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A change to class skills.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "embraced-energy")} id="embraced-energy">
						<IonIcon
							icon="/icons/embraced-energy.svg"
							color={maybeHighlightIcon(icon, "embraced-energy")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Boost your own abilities, or an ally's.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "cherish")} id="cherish">
						<IonIcon
							icon="/icons/cherish.svg"
							color={maybeHighlightIcon(icon, "cherish")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>Some sort of healing or otherwise helpful action.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "armor-downgrade")} id="armor-downgrade">
						<IonIcon
							icon="/icons/armor-downgrade.svg"
							color={maybeHighlightIcon(icon, "armor-downgrade")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>An effect that lowers the defenses of others.</p>
						</IonLabel>
					</IonItem>
					<IonItem className={maybeHighlightBG(icon, "broken-shield")} id="broken-shield">
						<IonIcon
							icon="/icons/broken-shield.svg"
							color={maybeHighlightIcon(icon, "broken-shield")}
							slot="start"
						/>
						<IonLabel className="ion-text-wrap">
							<p>A downgrade of your own abilities, or an ally's.</p>
						</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default Icons;
