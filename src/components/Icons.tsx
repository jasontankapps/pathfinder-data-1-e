import { IonIcon } from '@ionic/react';
import { FC, useContext } from 'react';
import Link from './Link';
import { IdContext } from './contexts';
import getIcon, { IconType } from './getIcon';

interface IconsProps {
	id: string
	list: IconType[]
	wrapper?: string
	color?: string
}

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
