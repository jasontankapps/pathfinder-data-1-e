import { useCallback } from 'react';
import { Link as LinkOriginal, LinkProps as LinkPropsOriginal } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';

interface LinkProps extends LinkPropsOriginal {
	to: string
}

const Link: React.FC<LinkProps> = (props) => {
	const { to, ...etc } = props;
	const dispatch = useAppDispatch();
	const onClick = useCallback(() => dispatch(goTo(to)), [to]);
	return (
		<LinkOriginal onClick={onClick} to={to} {...etc} />
	);
};

export default Link;
