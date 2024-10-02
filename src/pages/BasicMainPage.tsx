import { FC, PropsWithChildren, useCallback, useRef, useState } from 'react';
import { IonContent, IonList, IonPage, ScrollCustomEvent, useIonViewDidEnter } from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPosition } from '../store/scrollSlice';
import DisplayMainItem, { DisplayMainItemProps } from '../components/DisplayMainItem';
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
	pageId: string
}

const debounceNamespace: { [key: string]: any } = {};

const debounce = (fn: Function, ns: string, delay: number = 500) => {
	if (debounceNamespace[ns]) {
		if(debounceNamespace[ns] === "frozen") {
			// Do not continue;
			return;
		}
		clearTimeout(debounceNamespace[ns]);
	}
	debounceNamespace[ns] = window.setTimeout(() => {
		fn();
		delete debounceNamespace[ns];
	}, delay);
};

const BasicMainPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const { title, description, tables, children, hierarchy, sources = [], hideSources, singleTable, pageId } = props;
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
	const contentObj = useRef<any>(null);
	const dispatch = useAppDispatch();
	const storedPos = useAppSelector(state => state.scroll[pageId] || 0);
	useIonViewDidEnter(() => {
		if(storedPos && contentObj && contentObj.current && contentObj.current.scrollToPoint) {
			// Stop this scroll event from triggering other scroll events
			debounceNamespace[pageId] = "frozen";
			debounce(() => (delete debounceNamespace[pageId]), "autoscroll" + pageId, 100);
			contentObj.current.scrollToPoint(0, storedPos);
		}
	}, [storedPos, pageId]);
	const onScroll = useCallback((event: ScrollCustomEvent) => {
		debounce(() => dispatch(setPosition({id: pageId, pos: event.detail.scrollTop})), pageId);
	}, [pageId, dispatch]);

	return (
		<IonPage>
			<PageHeader title={title} hierarchy={hierarchy} />
			<IonContent scrollEvents={true} onIonScroll={onScroll} ref={contentObj}>
				{hideSources ? <></> : <SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />}
				<div className="main basicContent">
					<IonList lines="full">
						{description ? <DisplayMainItem prefixId={pageId} description={description} tables={tables} singleTable={singleTable} /> : children}
					</IonList>
				</div>
			</IonContent>
			<PageFooter setIsSourcesModalOpen={setIsSourcesModalOpen} />
		</IonPage>
	);
};

export default BasicMainPage;
