import { FC, useCallback, useMemo, useState } from 'react';
import { IonButton, IonIcon, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';
import { chevronDownCircle, chevronUpCircle } from 'ionicons/icons';
import '../pages/Page.css';

type LinkPair = [ string, string ];

interface PageProps {
	hierarchy: LinkPair[]
}

const HierarchyTab: FC<PageProps> = (props) => {

	const { hierarchy } = props;
	const [open, setOpen] = useState(false);

	const hierarchyLinks = useMemo(() => {
		return hierarchy.map((pair, i) => (
			<div key={`parents/${i}`}>
				<IonLabel><Link to={"/" + pair[1]}>{pair[0]}</Link></IonLabel>
			</div>
		));
	}, [hierarchy, open]);

	const click = useCallback(() => setOpen(!open), [open]);

	return hierarchy.length === 0 ? <></> : (
		<div className="hierarchy">
			<div className="hierachyLinks">{hierarchyLinks}</div>
			<div className="hierarchyButton"><IonButton onClick={click}><IonIcon icon={open ? chevronUpCircle : chevronDownCircle} /></IonButton></div>
		</div>
	);
};

export default HierarchyTab;
