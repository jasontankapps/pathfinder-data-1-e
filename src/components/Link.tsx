import { DetailedHTMLProps, HTMLAttributes, FC } from 'react';
import { Link as WouterLink } from 'wouter';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';

interface LinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	to: string
}

const Link: FC<LinkProps> = (props) => {
	const { to, ...etc } = props;
	const dispatch = useAppDispatch();
	return (
		<WouterLink onClick={() => dispatch(goTo(to))} to={to} {...etc} />
	);
};

export default Link;
