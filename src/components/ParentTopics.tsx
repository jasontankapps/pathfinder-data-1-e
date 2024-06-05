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

	const immediateParent = parents.pop();

	const previous = useMemo(() => {
		return parents.length === 0 ? [<></>] : parents.map((pair, i) => (
			<IonItem key={`parents/${i}`}>
				<IonLabel><Link to={pair[1]}>{pair[0]}</Link></IonLabel>
			</IonItem>
		)).reverse();
	}, [parents, open]);

	return (
		<IonList id="parentLinks">
			{immediateParent ? (
				<IonItem>
					<IonButton slot="start"><IonIcon icon={open ? chevronDownCircle : chevronUpCircle} /></IonButton>
					<IonLabel><Link to={immediateParent[0]}>{immediateParent[1]}</Link></IonLabel>
				</IonItem>
			) : <></>}
			{previous}
		</IonList>
	);
};

export default ParentTopics;
