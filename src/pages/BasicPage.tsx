import { FC, PropsWithChildren, useCallback, useRef, useState } from 'react';
import { IonContent, IonPage, ScrollCustomEvent, useIonViewDidEnter } from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPosition } from '../store/scrollSlice';
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

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const { 
		title,
		markdown,
		tables,
		className,
		children,
		hierarchy,
		sources = [],
		hideSources,
		pageId,
	} = props;
	const dispatch = useAppDispatch();
	const contentObj = useRef<any>(null);
	const storedPos = useAppSelector(state => state.scroll[pageId] || 0);
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
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
				{hideSources ?
					<></>
				:
					<SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />
				}
				<div className="basicContent simple">
					{markdown ? <DisplayItem markdown={markdown} tables={tables} className={className} prefix={pageId} /> : children}
				</div>
			</IonContent>
			<PageFooter setIsSourcesModalOpen={hideSources ? undefined : setIsSourcesModalOpen} />
		</IonPage>
	);
};

export default BasicPage;
