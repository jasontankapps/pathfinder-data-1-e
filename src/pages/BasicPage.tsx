import { FC, PropsWithChildren, useCallback, useRef, useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonIcon, IonPage, ScrollCustomEvent, useIonViewDidEnter } from '@ionic/react';
import { arrowUp } from 'ionicons/icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPosition } from '../store/scrollSlice';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import SourcesModal, { SourceProp } from '../components/SourcesModal';
import Link from '../components/Link';
import { DisplayItemProps, HierarchyArray } from '../types';
import './Page.css';

interface PageProps extends Partial<DisplayItemProps> {
	hasJL?: boolean
	title: string
	hierarchy?: HierarchyArray
	topLink?: [string, string]
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

const HierarchyInset: React.FC<{linkInfo: [string, string]}> = ({linkInfo}) => {
	return <div className="hierarchyInset"><Link to={"/" + linkInfo[1]}>{linkInfo[0]}</Link></div>;
};

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const {
		hasJL,
		title,
		children,
		hierarchy,
		topLink,
		sources = [],
		hideSources,
		pageId,
		className
	} = props;
	const dispatch = useAppDispatch();
	const contentObj = useRef<any>(null);
	const storedPos = useAppSelector(state => state.scroll[pageId] || 0);
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
	const [goToTopFlag, setGoToTopFlag] = useState(true);
	useIonViewDidEnter(() => {
		if(storedPos && contentObj && contentObj.current && contentObj.current.scrollToPoint) {
			// Stop this scroll event from triggering other scroll events
			debounceNamespace[pageId] = "frozen";
			debounce(() => (delete debounceNamespace[pageId]), "autoscroll" + pageId, 100);
			contentObj.current.scrollToPoint(0, storedPos);
			setGoToTopFlag(storedPos < 200);
		}
	}, [storedPos, pageId]);
	const onScroll = useCallback((event: ScrollCustomEvent) => {
		debounce(() => dispatch(setPosition({id: pageId, pos: event.detail.scrollTop})), pageId);
		if (hasJL && contentObj && contentObj.current && ((event.detail.scrollTop < 200) !== goToTopFlag)) {
			setGoToTopFlag(!goToTopFlag);
		}
	}, [pageId, dispatch, goToTopFlag, setGoToTopFlag]);
	const goToTop = useCallback(
		() => (contentObj && contentObj.current && contentObj.current.scrollToTop(500)),
		[contentObj]
	);
	const cN = "basicContent " + (className || "simple") + (topLink ? " hasInset" : "");

	return (
		<IonPage>
			<PageHeader title={title} hierarchy={hierarchy} />
			<IonContent scrollEvents={true} className={hasJL && goToTopFlag ? "atTop" : ""} onIonScroll={onScroll} ref={contentObj}>
				{hideSources ?
					<></>
				:
					<SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />
				}
				{hasJL ?
					<IonFab slot="fixed" vertical="top" horizontal="end">
						<IonFabButton size="small" color="secondary" onClick={goToTop}>
							<IonIcon icon={arrowUp} />
						</IonFabButton>
					</IonFab>
				:
					<></>
				}
				<div className={cN}>
					{topLink ? <HierarchyInset linkInfo={topLink} /> : <></>}
					{children}
				</div>
			</IonContent>
			<PageFooter setIsSourcesModalOpen={hideSources ? undefined : setIsSourcesModalOpen} />
		</IonPage>
	);
};

export default BasicPage;
