import { Dispatch, FC, FormEvent, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonSearchbar, ScrollCustomEvent } from '@ionic/react';
import { arrowUp, chevronBack, chevronForward } from 'ionicons/icons';
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
	noFinder?: boolean
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
const checkElementsForText = (nodes: HTMLElement[], search: string) => {
	let count = 0;
	let hold: null | string = null;
	let original: HTMLElement[] = [];
	const text = search.replace(/[:;.,(){}\[\]!'?*"]/g, "").toLowerCase();
	const contents: (HTMLElement | HTMLElement[])[] = [];
	while(nodes.length > 0) {
		const el = nodes.shift()!;
		const test = (el.textContent || "").replace(/[:;.,(){}\[\]!'?*"]/g, "").toLowerCase();
		if(hold !== null) {
			hold = hold + test;
			if (hold === text || (hold.indexOf(text) > -1)) {
				count++;
				hold = "";
				contents.push([...original, el]);
				original = [];
			} else {
				hold = test;
				original.push(el);
			}
		} else if (test === text) {
			count++;
			contents.push(el);
		} else {
			hold = test;
			original.push(el);
		}
	}
	if(original.length > 0) {
		count++;
		contents.push(original);
	}
	return {
		count,
		contents
	};
};
const doFocus = (
	inputmarks: (HTMLElement | HTMLElement[])[],
	current: number,
	mod: 1 | -1,
	setCurrent: Dispatch<number>
) => {
	const marks = inputmarks.map(m => Array.isArray(m) ? m : [m]);
	if(current >= 0) {
		marks[current].forEach(m => m.classList.remove("current"));
	}
	let next = current + mod;
	if(next < 0) {
		next = marks.length - 1;
	} else if (next === marks.length) {
		next = 0;
	}
	setCurrent(next);
	const target = marks[next][0];
	marks[next].forEach(target => target.classList.add("current"));
	target.scrollIntoView({
		behavior: "smooth",
		block: "center",
		inline: "center"
	});
};

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const {
		hasJL,
		title,
		children,
		hierarchy,
		topLink,
		noFinder,
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
	const [markers, setMarkers] = useState<(HTMLElement| HTMLElement[])[]>([]);
	const [highlightedText, setHighlightedText] = useState<number>(-1);

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

	const onInput = useCallback((input: FormEvent<HTMLIonSearchbarElement> | null) => {
		const text = String((input && input.currentTarget && input.currentTarget.value) || "");
		if(marker) {
			debounce(() => {
				marker.unmark({
					done: () => {
						if(text) {
							marker.mark(text, {
								...markerConfig,
								done: (n) => {
									const found = Number(n);
									const markers = (
										markerRef
										&& markerRef.current
										&& [...markerRef.current.querySelectorAll("mark")]
										|| []
									);
									setHighlightedText(-1);
									const { count, contents } = checkElementsForText(
										markers,
										text
									);
									setNumberOfTextsFound(count);
									setMarkers(contents);
								}
							});
						} else {
							setNumberOfTextsFound(0);
							setMarkers([]);
							setHighlightedText(-1);
						}
					}
				});
			}, "marking search terms");
		}
		input || (findInPageSearchbarObj && findInPageSearchbarObj.current && (findInPageSearchbarObj.current.value = ""));
	}, [marker, markerRef, setNumberOfTextsFound, setHighlightedText, setMarkers, markers, findInPageSearchbarObj]);

	const show = useCallback((mod: 1 | -1) => doFocus(
		markers,
		highlightedText,
		mod,
		setHighlightedText
	), [markers, highlightedText, setHighlightedText]);
	
	return (
		<AnimatePresence>
		{isMatch && <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		><IonPage>
			<PageHeader
				title={title}
				hierarchy={hierarchy}
				findInPage={
					(!noFinder && marker) ?
						() => {
							setSearchBoxOpen(!searchBoxOpen);
							searchBoxOpen
								? onInput(null)
								: (
									findInPageSearchbarObj
									&& findInPageSearchbarObj.current
									&& findInPageSearchbarObj.current.setFocus
									&& findInPageSearchbarObj.current.setFocus()
								);
						}
						: undefined
				}
				findingInPage={searchBoxOpen}
			/>
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
				{(!noFinder && marker) ? <div className={"finder" + (searchBoxOpen ? "" : " hidden")}>
					<IonSearchbar
						ref={findInPageSearchbarObj}
						searchIcon="/icons/find-in-page.svg"
						placeholder="Find in page"
						type="text"
						inputmode="text"
						onInput={onInput}
						onIonClear={() => marker.unmark({done: () => {setNumberOfTextsFound(0); setHighlightedText(-1);}})}
					/>
					<IonButton shape="round" onClick={() => show(-1)} color="tertiary" size="small"><IonIcon slot="icon-only" icon={chevronBack} /></IonButton>
					<span style={{ padding: '0px 12px' }}>{highlightedText + 1}/{numberOfTextsFound}</span>
					<IonButton shape="round" onClick={() => show(1)} color="tertiary" size="small"><IonIcon slot="icon-only" icon={chevronForward} /></IonButton>
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
