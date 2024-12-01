import { FC, ReactNode } from 'react';
import {IonItem,IonLabel} from '@ionic/react';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';

interface MainLinkProps {
	className?: string
	info: string
}

const getElementAndUrl = (input: string): [ReactNode, string | null] => {
	// ## link/text Title of the link
	// ### link/text Title of the link // Extra text at end of line
	// ###### link/text Title of the link || Extra text underneath title
	const m = input.match(/^\/?([^ ]+) (.+$)/);
	if(!m) {
		return [<h1 className="error">{input}</h1>, null];
	}
	const url = "/" + m[1];
	const text = m[2];
	const slashbar = text.match(/(^.+?) (\/\/|\|\|) (.+$)/);
	if(slashbar) {
		return [
			<IonLabel className={slashbar[2] === "//" ? "endcap" : "bottomcap"}>
				<div>{slashbar[1]}</div>
				<div>{slashbar[3]}</div>
			</IonLabel>,
			url
		];
	}
	return [<IonLabel>{text}</IonLabel>, url];
};

const MainLink: FC<MainLinkProps> = ({className, info}) => {
	const dispatch = useAppDispatch();
	const [label, link] = getElementAndUrl(info);
	return (
		<IonItem
			className={"mainItem linked" + (className ? " " + className : "")}
			routerLink={link || undefined}
			onClick={link ? () => dispatch(goTo(link)) : undefined}
			routerDirection={link ? "forward" : undefined}
		>
			{label}
		</IonItem>
	)
};

export default MainLink;