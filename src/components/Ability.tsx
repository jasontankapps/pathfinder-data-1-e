import { IonIcon } from '@ionic/react';
import { FC, PropsWithChildren, useContext } from 'react';
import Link from './Link';
import { IdContext } from './contexts';

interface AbilityProps {
	id: string
	icon: string[]
	extraClasses?: string
}

interface IconProps {
	id: string
	icon: string[]
}

const Icon: FC<IconProps> = ({icon, id}) => {
	return icon.map(
		(ic, i) => (
			<Link to={"/icons/" + ic} key={`${id} icon ${ic} ${i}`}>
				<IonIcon icon={`/icons/${ic}.svg`} color="secondary" />
			</Link>
		)
	);
};

const Ability: FC<PropsWithChildren<AbilityProps>> = (props) => {
	const {id, icon = [], extraClasses, children} = props;
	const className = "ability p" + (extraClasses ? " " + extraClasses : "");
	const cId = useContext(IdContext) + id;
	return (
		<div className={className}>
			<div className="abIcon">
				<Icon icon={icon} id={cId} />
			</div>
			{children}
		</div>
	);
};

export default Ability;
