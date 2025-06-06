import { DetailedHTMLProps, HTMLAttributes, FC } from 'react';
import { Link as WouterLink } from 'wouter';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';
import getLink from './getLink';

interface LinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
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

export default Link;
