import { FC, PropsWithChildren, useState } from 'react';
import { IonContent, IonList, IonPage } from '@ionic/react';
import DisplayMainItem, { DisplayMainItemProps } from '../components/DisplayMainItem';
import HierarchyTab from '../components/HierarchyTab';
import SourcesModal, { SourceProp } from '../components/SourcesModal';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
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
			<PageHeader title={title} />
			<IonContent fullscreen>
				{hideSources ? <></> : <SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />}
				<div className="main basicContent">
					<IonList lines="full">
						{description ? <DisplayMainItem description={description} tables={tables} /> : children}
					</IonList>
					<HierarchyTab hierarchy={hierarchy} />
				</div>
			</IonContent>
			<PageFooter setIsSourcesModalOpen={setIsSourcesModalOpen} />
		</IonPage>
	);
};

export default BasicMainPage;
