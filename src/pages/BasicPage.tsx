import { FC, PropsWithChildren, useState } from 'react';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBack, chevronForward, informationCircle, search } from 'ionicons/icons';
import DisplayItem from '../components/DisplayItem';
import HierarchyTab from '../components/HierarchyTab';
import SourcesModal, { SourceProp } from '../components/SourcesModal';
import { DisplayItemProps, HierarchyArray } from '../types';
import './Page.css';

interface PageProps {
	title: string
	displayItem?: DisplayItemProps
	hierarchy?: HierarchyArray
	sources?: SourceProp[]
	hideSources?: boolean
}

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const { title, displayItem, children, hierarchy = [], sources = [], hideSources } = props;
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{title}</IonTitle>
					<IonButtons slot="end">
						<IonButton href="/search">
							<IonIcon slot="icon-only" icon={search} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{hideSources ? <></> : <SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />}
				<HierarchyTab hierarchy={hierarchy} />
				{displayItem ? <DisplayItem {...displayItem} /> : children}
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton>
							<IonIcon slot="icon-only" icon={chevronBack} />
						</IonButton>
					</IonButtons>
					<IonButtons className="slotless">
						<IonButton onClick={() => setIsSourcesModalOpen(true)}>
							<IonIcon slot="icon-only" icon={informationCircle} />
						</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton>
							<IonIcon slot="icon-only" icon={chevronForward} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};

export default BasicPage;
