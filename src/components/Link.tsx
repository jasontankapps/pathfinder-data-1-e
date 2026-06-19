import { DetailedHTMLProps, HTMLAttributes, FC, ComponentProps, KeyboardEvent as KE } from 'react';
import { IonRippleEffect } from '@ionic/react';
import { Link as WouterLink, useLocation } from 'wouter';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';
import getLink from './getLink';

interface LinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	to: string
}

interface ThProps extends ComponentProps<"th"> {
	to: string
}

const Link: FC<LinkProps> = (props) => {
	const { to, ...etc } = props;
	const dispatch = useAppDispatch();
	const link = `/${getLink(to.slice(1))}`;
	return (
		<WouterLink onClick={() => dispatch(goTo(link))} to={link} {...etc} />
	);
};

export const ThLink: FC<ThProps> = (props) => {
	const { to, className: cn, children, ...etc } = props;
	const [, navigate] = useLocation();
	const dispatch = useAppDispatch();
	const link = `/${getLink(to.slice(1))}`;
	const invoke = () => {
		dispatch(goTo(link));
		navigate(link);
	};
	const keydown = (e: KE<HTMLTableCellElement>) => e.key === "Enter" && invoke();
	const onclick = () => invoke();
	const className = cn ? `${cn} ion-activatable thLink` : "ion-activatable thLink";
	return (
		<th className={className} tabIndex={0} role="link" onKeyDown={keydown} onClick={onclick} {...etc}>
			{children}
			<IonRippleEffect />
		</th>
	);
};

export default Link;
