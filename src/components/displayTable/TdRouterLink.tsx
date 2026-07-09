import { FC, PropsWithChildren } from 'react';
import { IonRippleEffect } from '@ionic/react';
import { useLocation } from 'wouter';
import { LinkFormat } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { goTo } from '../../store/historySlice';
import maybeBreakText from '../maybeBreakText';

interface TdRouterLinkProps {
	datum: LinkFormat
	align?: "start" | "end"
}

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum, align }) => {
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
		}>
			{maybeBreakText(text)}
			<IonRippleEffect />
		</div>
	);
};

export default TdRouterLink;
