import {
	FC,
	useCallback,
	useMemo,
	useState
} from 'react';
import {
	IonIcon,
	IonRippleEffect
} from '@ionic/react';
import {
	caretDown,
	caretUp,
	ellipse
} from 'ionicons/icons';
import Markdown from 'react-markdown';
import convertLinks from '../convertLinks';
import components from './Components';

type TriggerSortFunc = (index: number, useNormalSort: boolean, activeRows?: number[] | null, save?: boolean) => void;

interface ThProps {
	index: number
	sorter: TriggerSortFunc
	sortState?: boolean
	active: boolean
	children: string
	sortable: boolean
	size?: number
}

const DirectionIcon: FC<{down:boolean}> = ({down}) => {
	return <IonIcon className="sortArrow" icon={down ? caretDown : caretUp} />;
};

const getStyle = (size: number | undefined) => {
	if(size === undefined) {
		return undefined;
	}
	return { width: `${size + 1}rem` };
}

const Th: FC<ThProps> = ({index, sorter, sortState = true, children, active, sortable, size}) => {
	const [ useNormalSort, setUseNormalSort ] = useState(sortState);
	const onClick = useCallback(() => {
		const newDescending = active ? !useNormalSort : true;
		sorter(index, newDescending);
		setUseNormalSort(newDescending);
	}, [index, sorter, useNormalSort, active]);
	const markdown = useMemo(() => convertLinks([children]), [children]);
	if(sortable) {
		return (
			<div className="cell cell-header ion-activatable sortable" onClick={onClick} style={getStyle(size)}>
				<IonRippleEffect />
				<Markdown components={components}>{markdown}</Markdown>
				{active ? <DirectionIcon down={useNormalSort} /> : <IonIcon className="sortNil" icon={ellipse} />}
			</div>
		);
	}
	return (
		<div className="cell cell-header" style={getStyle(size)}>
			<Markdown components={components}>{markdown}</Markdown>
		</div>
	);
};

export default Th;
