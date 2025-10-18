import { FC, PropsWithChildren } from 'react';
import { IonRippleEffect } from '@ionic/react';
import { useLocation } from 'wouter';
import { Datum } from '../../types';
import { checkForEncodedLink } from '../convertLinks';
import { useAppDispatch } from '../../store/hooks';
import { goTo } from '../../store/historySlice';
import getLink from '../getLink';

interface TdRouterLinkProps {
	datum: Datum
	align?: "start" | "end"
}

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum, align }) => {
	const [, navigate ] = useLocation();
	const dispatch = useAppDispatch();
	// datum will be either `{linkString}` or `[ sortableThing, {linkString} ]`
	const linkString = Array.isArray(datum) ? datum[1] : datum;
	const m = (typeof linkString === "string") ? checkForEncodedLink(linkString, { basic: true }) : false;
	if(!m) {
		return (
			<td className={align === "end" ? "ion-text-end" : (align === "start" ? "ion-text-start" : undefined)}>LINK EXPECTED: {linkString}</td>
		);
	}
	const [, originalLink, output] = m;
	const link = getLink(originalLink);
	return (
		<td className={"ion-activatable cell-link" + (align === "end" ? " ion-text-end" : (align === "start" ? " ion-text-start" : ""))} onClick={() => { navigate(`/${link}`); dispatch(goTo(`/${link}`)); }}>
			{output}
			<IonRippleEffect />
		</td>
	);
};

export default TdRouterLink;
