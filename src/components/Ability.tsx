import { FC, PropsWithChildren, useContext } from 'react';
import { IdContext } from './contexts';
import Icons from './Icons';

interface AbilityProps {
	id: string
	icon: string[]
	extraClasses?: string
}

const Ability: FC<PropsWithChildren<AbilityProps>> = (props) => {
	const {id, icon = [], extraClasses, children} = props;
	const className = "ability p" + (extraClasses ? " " + extraClasses : "");
	const cId = useContext(IdContext) + id;
	return (
		<div className={className}>
			{icon.length ? (
				<div className="abIcon">
					<Icons list={icon} id={cId} />
				</div>
			) : ""}
			{children}
		</div>
	);
};

export default Ability;
