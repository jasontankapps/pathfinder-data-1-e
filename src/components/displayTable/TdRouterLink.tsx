import { FC, PropsWithChildren } from 'react';
import { IonRippleEffect } from '@ionic/react';
import { useLocation } from 'wouter';
import Markdown from 'react-markdown';
import { LinkFormat } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { goTo } from '../../store/historySlice';
import components from './Components';

interface TdRouterLinkProps {
	datum: LinkFormat
	align?: "start" | "end"
	size?: number
}

const getStyle = (size: number | undefined) => {
	if(size === undefined) {
		return undefined;
	}
	return { inlineSize: `${size}rem` };
}

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum, align, size }) => {
	const [, navigate ] = useLocation();
	const dispatch = useAppDispatch();
	const [ text, property, link ] = datum;
	const to = `/${link}/${property}`;
//	const to = getLink(`${link}/${property}`);
	return (
		<div className={
			"cell ion-activatable cell-link" + (
				align === "end" ? " ion-text-end" : (
					align === "start" ? " ion-text-start" : ""
				)
			)
		} onClick={
			() => { navigate(to); dispatch(goTo(to)); }
		} style={getStyle(size)}>
			<Markdown components={components}>{text}</Markdown>
			<IonRippleEffect />
		</div>
	);
};

export default TdRouterLink;
