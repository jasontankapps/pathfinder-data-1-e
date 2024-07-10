import { FC, PropsWithChildren, useState } from 'react';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBack, chevronForward, informationCircle, search } from 'ionicons/icons';
import DisplayMainItem, { DisplayMainItemProps } from '../components/DisplayMainItem';
import HierarchyTab from '../components/HierarchyTab';
import SourcesModal, { SourceProp } from '../components/SourcesModal';
import { HierarchyArray } from '../types';
import './Page.css';

interface PageProps extends Partial<DisplayMainItemProps> {
	title: string
	hierarchy?: HierarchyArray
	sources?: SourceProp[]
	hideSources?: boolean
}

const BasicMainPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const { title, description, tables, children, hierarchy = [], sources = [], hideSources } = props;
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
				<div className="main basicContent">
					<IonList lines="full">
						{description ? <DisplayMainItem description={description} tables={tables} /> : children}
					</IonList>
					<HierarchyTab hierarchy={hierarchy} />
				</div>
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

export default BasicMainPage;
