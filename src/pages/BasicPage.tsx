import { FC, PropsWithChildren, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import DisplayItem from '../components/DisplayItem';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import SourcesModal, { SourceProp } from '../components/SourcesModal';
import { DisplayItemProps, HierarchyArray } from '../types';
import './Page.css';

interface PageProps extends Partial<DisplayItemProps> {
	title: string
	hierarchy?: HierarchyArray
	sources?: SourceProp[]
	hideSources?: boolean
}

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const { title, markdown, tables, className, children, hierarchy, sources = [], hideSources } = props;
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

	return (
		<IonPage>
			<PageHeader title={title} hierarchy={hierarchy} />
			<IonContent>
				{hideSources ? <></> : <SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />}
				<div className="basicContent simple">
					{markdown ? <DisplayItem markdown={markdown} tables={tables} className={className} /> : children}
				</div>
			</IonContent>
			<PageFooter setIsSourcesModalOpen={hideSources ? undefined : setIsSourcesModalOpen} />
		</IonPage>
	);
};

export default BasicPage;
