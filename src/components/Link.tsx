import { Link as LinkOriginal, LinkProps as LinkPropsOriginal } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';

interface LinkProps extends LinkPropsOriginal {
	to: string
}

const Link: React.FC<LinkProps> = (props) => {
	const { to, ...etc } = props;
	const dispatch = useAppDispatch();
	return (
		<LinkOriginal onClick={() => dispatch(goTo(to))} to={to} {...etc} />
	);
};

export default Link;
