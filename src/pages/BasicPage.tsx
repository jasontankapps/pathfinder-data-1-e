import { FC, FormEvent, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonSearchbar, ScrollCustomEvent } from '@ionic/react';
import { arrowUp } from 'ionicons/icons';
import { useLocation, useRoute } from 'wouter';
import { motion, AnimatePresence } from 'motion/react';
import { useMarker } from "react-mark.js";
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
	error?: boolean
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
const freezeDebounce = (pageId: string) => {
	debounceNamespace[pageId] = "frozen";
	debounce(() => (delete debounceNamespace[pageId]), "autoscroll" + pageId, 100);
};

const HierarchyInset: React.FC<{linkInfo: [string, string]}> = ({linkInfo}) => {
	return <div className="hierarchyInset"><Link to={"/" + linkInfo[1]}>{linkInfo[0]}</Link></div>;
};

const markerConfig = {
	exclude: [ "div.displayTable *" ],
	acrossElements: true,
	ignorePunctuation: ":;.,(){}[]!'?*\"".split(""),
	debug: true,
	separateWordSearch: false
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
	const { markerRef, marker } = useMarker<HTMLDivElement>();
	const contentObj = useRef<any>(null);
	const findInPageSearchbarObj = useRef<any>(null);
	const storedPos = useAppSelector(state => state.scroll[pageId] || 0);
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
	const [goToTopFlag, setGoToTopFlag] = useState(true);
	// Create state for find-in-page system
	const [searchBoxOpen, setSearchBoxOpen] = useState(false);
	const [numberOfTextsFound, setNumberOfTextsFound] = useState<number>(0);
	const [highlightedText, setHighlightedText] = useState<number>(0);

	const [path] = useLocation();
	useEffect(() => {
		debounce(() => {
			if(contentObj && contentObj.current && contentObj.current.scrollToPoint) {
				// Stop this scroll event from triggering other scroll events
				freezeDebounce(pageId);
				// Do the scrolling
				contentObj.current.scrollToPoint(0, storedPos);
				setGoToTopFlag(storedPos < 200);
			}
		}, pageId + "/enter", 10);
	}, [contentObj, path]);
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
	const [isMatch] = useRoute(pageId);
	const cN = "basicContent " + (className || "simple") + (topLink ? " hasInset" : "");

	const onInput = useCallback((input: FormEvent<HTMLIonSearchbarElement>) => {
		const text = String((input && input.currentTarget && input.currentTarget.value) || "");
		if(marker) {
			debounce(() => {
				marker.unmark({
					done: () => {
						if(text) {
							marker.mark(text, {
								...markerConfig,
								done: (n) => {
									setNumberOfTextsFound(Number(n));
									setHighlightedText(0);
								}
							});
						} else {
							setNumberOfTextsFound(0);
							setHighlightedText(0);
						}
					}
				});
			}, "marking search terms");
		}
	}, [marker, markerRef, setNumberOfTextsFound, setHighlightedText]);

	return (
		<AnimatePresence>
		{isMatch && <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		><IonPage>
			<PageHeader title={title} hierarchy={hierarchy} findInPage={marker ? () => setSearchBoxOpen(!searchBoxOpen) : undefined} findingInPage={searchBoxOpen} />
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
				{marker ? <div className={"finder" + (searchBoxOpen ? "" : " hidden")}>
					<IonSearchbar
						ref={findInPageSearchbarObj}
						searchIcon="/icons/find-in-page.svg"
						placeholder="Find in page"
						type="text"
						inputmode="text"
						onInput={onInput}
						onIonClear={() => marker.unmark({done: () => {setNumberOfTextsFound(0); setHighlightedText(0);}})}
					/>
					<button title='Up'>Prev</button>
					<span style={{ padding: '0px 12px' }}>{highlightedText}/{numberOfTextsFound}</span>
					<button title='Down'>Next</button>
				</div> : <></>}
				<div className={cN} ref={markerRef}>
					{topLink ? <HierarchyInset linkInfo={topLink} /> : <></>}
					{children}
				</div>
			</IonContent>
			<PageFooter setIsSourcesModalOpen={hideSources ? undefined : setIsSourcesModalOpen} />
		</IonPage></motion.div>}
		</AnimatePresence>
	);
};

export default BasicPage;
