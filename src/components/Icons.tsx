import { IonIcon } from '@ionic/react';
import { FC, useContext } from 'react';
import Link from './Link';
import { IdContext } from './contexts';

interface IconsProps {
	id: string
	list: string[]
	wrapper?: string
	color?: string
}

const getIcon = (i: string) => {
	switch(i) {
		case "melee": { // melee attack, combat maneuver
			return "mailed-fist";
		}
		case "touch": { // touch attack
			return "magic-palm";
		}
		case "magic": { // cast a spell
			return "magic-swirl";
		}
		case "zap": { // ranged touch attack
			return "smoking-finger";
		}
		case "line": { // line attack
			return "barbed-arrow";
		}
		case "cone": { // cone-shaped attack
			return "tornado-discs";
		}
		case "ranged": { // ranged physical attack
			return "bowman";
		}
		case "def": { // defensive ability
			return "armor-upgrade";
		}
		case "learn": { // gain a spell
			return "spell-book";
		}
		case "aura": { // aura
			return "aura";
		}
		case "power": { // gain a new ability or companion
			return "stairs-goal";
		}
		case "boost": { // boost your own abilities, or an ally's
			return "upgrade";
		}
		case "aid": { // aid another
			return "remedy";
		}
		case "protect": { // protect another
			return "shield-reflect";
		}
		case "lower": { // lower another's defenses
			return "armor-downgrade";
		}
		case "roll": { // change to how you roll dice
			return "rolling-dices";
		}
		case "down": { // a strict downgrade of your own abilities
			return "broken-shield";
		}
		case "skill": { // modifying class skills
			return "skills";
		}
		case "info": { // just a simple note
			return "info";
		}
		case "warning": { // a warning, usually something that shuts off an ability
			return "hazard-sign";
		}
		case "Combat": {
			return "crossed-sabres";
		}
		case "Faith": {
			return "bolt-eye";
		}
		case "Social": {
			return "village";
		}
		case "Magic": {
			return "magic-swirl";
		}
		case "Campaign": {
			return "treasure-map";
		}
		case "Equipment": {
			return "battle-gear";
		}
		case "Family": {
			return "relationship-bounds";
		}
		case "Mount": {
			return "cavalry";
		}
		case "Regional": {
			return "planet-conquest";
		}
		case "Religion": {
			return "prayer";
		}
		case "Drawback": {
			return "broken-shield";
		}
		case "Cosmic": {
			return "night-sky";
		}
		case "Race": {
			return "person";
		}
	}
	console.log(i);
	return "confirmed";
};

const Icons: FC<IconsProps> = (props) => {
	const {id, list, wrapper, color = "secondary"} = props;
	const cId = useContext(IdContext) + id;
	return <>{
		list.map((icon, i) => {
			const ico = getIcon(icon)
			return wrapper ? (
				<span className={wrapper} key={`${cId} floating icon ${ico} position ${i}`}>
					<Link to={"/icons/" + ico}>
						<IonIcon icon={`/icons/${ico}.svg`} color={color} />
					</Link>
				</span>
			) : (
				<Link to={"/icons/" + ico} key={`${cId} floating icon ${ico} position ${i}`}>
					<IonIcon icon={`/icons/${ico}.svg`} color={color} />
				</Link>
			);
		})
	}</>;
};

export default Icons;
