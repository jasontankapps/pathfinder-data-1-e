import { FC } from 'react';
import {IonItem,IonLabel} from '@ionic/react';
import { useLocation } from 'wouter';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';
import getLink from './getLink';

interface MainLinkProps {
	className?: string
	info: string
	endem?: string
	end?: string
	bottom?: string
	to?: string
}

const convertEntities = (input: string) => (
	input
		.replace(/&#([0-9]+);/g, (x, m1) => String.fromCharCode(Number(m1)))
		.replace(/&#(x[0-9a-fA-F]+);/g, (x, m1) => String.fromCharCode(Number("0" + m1)))
);

const MainLink: FC<MainLinkProps> = ({className, info, to, end, endem, bottom}) => {
	const dispatch = useAppDispatch();
	const [, navigate] = useLocation();
	const link = to && `/${getLink(to.slice(1))}`;
	return (
		<IonItem
			className={"mainItem linked" + (className ? " " + className : "")}
			onClick={link ? () => { dispatch(goTo(link)); navigate(link); } : undefined}
		>
			<IonLabel className={end || endem ? "endcap" : (bottom ? "bottomcap" : undefined)}>
				<div>{convertEntities(info)}</div>
				{
					(bottom || endem)
						? <div><em>{convertEntities((bottom || endem)!)}</em></div>
						: (end ? <div>{convertEntities(end)}</div> : <></>)
				}
			</IonLabel>
		</IonItem>
	)
};

export default MainLink;