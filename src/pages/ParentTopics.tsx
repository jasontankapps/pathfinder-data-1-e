import { FC, ReactNode, useMemo, useState } from 'react';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronDownCircle, chevronUpCircle } from 'ionicons/icons';
import './Page.css';
import { Link } from 'react-router-dom';

type LinkPair = [ string, string ];

interface PageProps {
	parents: LinkPair[]
}

const ParentTopics: FC<PageProps> = (props) => {

	const { parents } = props;
	const [open, setOpen] = useState(false);

	const previous = useMemo(() => {
		return parents.length < 2 ? [<></>] : parents.slice(0, -1).map((pair, i) => (
			<IonItem key={`parents/${i}`}>
				<IonLabel><Link to={pair[0]}>{pair[1]}</Link></IonLabel>
			</IonItem>
		));
	}, [parents, open]);

	return (
		<IonList id="parentLinks">
			{previous}
			{parents.length === 0 ? <></> : (
				<IonItem>
					<IonButton slot="start"><IonIcon icon={open ? chevronDownCircle : chevronUpCircle} /></IonButton>
					<IonLabel><Link to={parents.slice(-1)[0][0]}>{parents.slice(-1)[0][1]}</Link></IonLabel>
				</IonItem>
			)}
		</IonList>
	);
};

export default ParentTopics;
