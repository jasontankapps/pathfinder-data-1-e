import {
	Dispatch, FC, FormEvent, PropsWithChildren,
	ReactElement, useCallback, useEffect, useState
} from 'react';
import {
	IonButton, IonCheckbox, IonContent, IonFab,
	IonFabButton, IonIcon, IonItem, IonList, IonPage,
	IonPopover, IonSearchbar, ScrollCustomEvent
} from '@ionic/react';
import { arrowUp, chevronBack, chevronForward, options } from 'ionicons/icons';
import { useLocation, useRoute } from 'wouter';
import { motion, AnimatePresence } from 'motion/react';
import { useMarker } from "react-mark.js";
import { setCaseSensitive, setSeparateWordSearch, setWholeWords } from '../store/searchSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPosition } from '../store/scrollSlice';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import SourcesModal, { SourceProp } from '../components/SourcesModal';
import Link from '../components/Link';
import { DisplayItemProps } from '../types';
import './Page.css';

interface PageProps extends Partial<DisplayItemProps> {
	hasJL?: boolean
	title: string
	topLink?: [string, string]
	noFinder?: boolean
	sources?: SourceProp[]
	hideSources?: boolean
	pageId: string
	error?: boolean
	notBookmarkable?: boolean
	extraButton?: ReactElement
	fab?: ReactElement
	scrollHook?: (input:HTMLIonContentElement | null) => void
}

const opaque = { opacity: 1 };
const unopaque = { opacity: 0 };

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
	debug: true
};
const checkElementsForText = (nodes: HTMLElement[], search: string, separateWordSearch: boolean) => {
	let count = 0;
	let hold: null | string = null;
	let original: HTMLElement[] = [];
	const text = search.replace(/[:;.,(){}\[\]!'?*"]/g, "").toLowerCase();
	//
	// Need to create separate checkers for when separateWordSearch is true
	//
	const contents: (HTMLElement | HTMLElement[])[] = [];
	if(separateWordSearch) {
		const possibles = search.toLowerCase().split(/ +/).map(p => p.replace(/[:;.,(){}\[\]!'?*"]/g, ""));
		while(nodes.length > 0 ) {
			const el = nodes.shift()!;
			const test = (el.textContent || "").replace(/[:;.,(){}\[\]!'?*"]/g, "").toLowerCase();
			if(hold !== null) {
				hold = hold + test;
				if(possibles.some(p => (hold === p || (hold!.indexOf(p) > -1)))) {
					count++;
					hold = null;
					contents.push([...original, el]);
					original = [];
				} else {
					hold = test;
					original.push(el);
				}
			} else if (possibles.some(p => test === p)) {
				count++;
				contents.push(el);
			} else {
				hold = test;
				original.push(el);
			}
		}
	} else {
		while(nodes.length > 0) {
			const el = nodes.shift()!;
			const test = (el.textContent || "").replace(/[:;.,(){}\[\]!'?*"]/g, "").toLowerCase();
			if(hold !== null) {
				hold = hold + test;
				if (hold === text || (hold.indexOf(text) > -1)) {
					count++;
					hold = null;
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

type ElementRef<T extends Element> = (node: T | null) => void;

const useElement = <T extends Element>(): [T | null, ElementRef<T>] => {
	const [el, setEl] = useState<T | null>(null);
	const ref: ElementRef<T> = useCallback((node: T | null) => {
		if(node && node !== el) {
			setEl(node);
		}
	}, []);
	return [el, ref];
};

const BasicPage: FC<PropsWithChildren<PageProps>> = (props) => {
	const {
		hasJL,
		title,
		children,
		topLink,
		noFinder,
		sources = [],
		hideSources,
		pageId,
		notBookmarkable,
		className,
		extraButton,
		fab,
		error,
		scrollHook
	} = props;
	const dispatch = useAppDispatch();
	const { separateWordSearch, caseSensitive, wholeWords } = useAppSelector(state => state.search)
	const { markerRef, marker } = useMarker<HTMLDivElement>();
	const storedPos = useAppSelector(state => state.scroll[pageId] || 0);
	// Create state for sources modal
	const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
	const [goToTopFlag, setGoToTopFlag] = useState(true);
	// Create state for find-in-page system
	const [searchBoxOpen, setSearchBoxOpen] = useState(false);
	const [numberOfTextsFound, setNumberOfTextsFound] = useState<number>(0);
	const [markers, setMarkers] = useState<(HTMLElement| HTMLElement[])[]>([]);
	const [highlightedText, setHighlightedText] = useState<number>(-1);
	const [contentObject, refContentObject] = useElement<HTMLIonContentElement>();
	const [findInPageSearchbarObj, findInPageSearchRef] = useElement<HTMLIonSearchbarElement>();
	const [path] = useLocation();

	useEffect(() => {
		debounce(() => {
			if(contentObject) {
				// Stop this scroll event from triggering other scroll events
				freezeDebounce(pageId);
				// Do the scrolling
				contentObject.scrollToPoint(0, storedPos);
				setGoToTopFlag(storedPos < 200);
			}
		}, pageId + "/enter", 10);
	}, [path, pageId, contentObject]);
	useEffect(() => {
		scrollHook && scrollHook(contentObject);
	}, [scrollHook, pageId, contentObject]);
	const onScroll = useCallback((event: ScrollCustomEvent) => {
		debounce(() => dispatch(setPosition({id: pageId, pos: event.detail.scrollTop})), pageId);
		if (hasJL && contentObject && ((event.detail.scrollTop < 200) !== goToTopFlag)) {
			setGoToTopFlag(!goToTopFlag);
		}
	}, [pageId, dispatch, goToTopFlag, setGoToTopFlag, contentObject, hasJL]);
	const goToTop = useCallback(
		() => (contentObject && contentObject.scrollToTop(500)),
		[pageId, contentObject]
	);
	const [isMatch] = error ? [true] : useRoute(pageId);
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
								separateWordSearch,
								caseSensitive,
								//
								// This bit below is broken, won't work on ends or beginnings of lines
								//
								//accuracy: wholeWords ? "exactly" : "partially",
								done: (n) => {
									//const found = Number(n);
									const markers = (
										markerRef
										&& markerRef.current
										&& [...markerRef.current.querySelectorAll("mark")]
										|| []
									);
									setHighlightedText(-1);
									const { count, contents } = checkElementsForText(
										markers,
										text,
										separateWordSearch
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
		input || (findInPageSearchbarObj && (findInPageSearchbarObj.value = ""));
	}, [
		marker, markerRef, markers, findInPageSearchbarObj,
		setNumberOfTextsFound, setHighlightedText, setMarkers,
		caseSensitive, wholeWords, separateWordSearch
	]);

	const show = useCallback((mod: 1 | -1) => doFocus(
		markers,
		highlightedText,
		mod,
		setHighlightedText
	), [markers, highlightedText, setHighlightedText]);

	const findInPageFunc = useCallback(() => {
		setSearchBoxOpen(!searchBoxOpen);
		searchBoxOpen
			? onInput(null)
			: (
				findInPageSearchbarObj
				&& debounce(
					() => findInPageSearchbarObj
						&& findInPageSearchbarObj.setFocus(),
					"setting Focus",
					505
				)
			);
	}, [searchBoxOpen, setSearchBoxOpen, onInput, findInPageSearchbarObj]);

	return (
		<AnimatePresence>
		{isMatch && <motion.div
			initial={unopaque}
			animate={opaque}
			exit={unopaque}
		><IonPage>
			<PageHeader
				title={title}
				findInPage={ (!noFinder && marker) ? findInPageFunc : undefined }
				findingInPage={searchBoxOpen}
				notBookmarkable={notBookmarkable}
				extraButton={extraButton}
			/>
			<IonContent scrollEvents={true} className={hasJL && goToTopFlag ? "atTop" : ""} onIonScroll={onScroll} ref={refContentObject}>
				{hideSources ?
					<></>
				:
					<SourcesModal sources={sources} isOpen={isSourcesModalOpen} setIsOpen={setIsSourcesModalOpen} />
				}
				{hasJL ?
					<IonFab slot="fixed" vertical="top" horizontal="end" className="goToTop">
						<IonFabButton size="small" color="secondary" onClick={goToTop}>
							<IonIcon icon={arrowUp} />
						</IonFabButton>
					</IonFab>
				:
					<></>
				}
				{fab || <></>}
				{(!noFinder && marker) ? <div className={"finder" + (searchBoxOpen ? "" : " hidden")}>
					<IonButton
						id={`${pageId}finderSettings`}
						fill="clear"
						color={separateWordSearch || caseSensitive || wholeWords ? "tertiary" : "dark"}
						size="small"
					><IonIcon slot="icon-only" icon={options} /></IonButton>
					<IonPopover trigger={`${pageId}finderSettings`} side="bottom" alignment="start">
						<IonContent>
							<IonList lines="full">
								<IonItem>
									<IonCheckbox
										justify="space-between"
										labelPlacement="start"
										checked={separateWordSearch}
										onClick={() => dispatch(setSeparateWordSearch(!separateWordSearch))}
									><div className="label">Match Words Separately</div></IonCheckbox>
								</IonItem>
								<IonItem>
									<IonCheckbox
										justify="space-between"
										labelPlacement="start"
										checked={caseSensitive}
										onClick={() => dispatch(setCaseSensitive(!caseSensitive))}
									><div className="label">Case Sensitive</div></IonCheckbox>
								</IonItem>
								{/*<IonItem>
									<IonCheckbox
										justify="space-between"
										labelPlacement="start"
										checked={wholeWords}
										onClick={() => dispatch(setWholeWords(!wholeWords))}
									>Match Whole Word(s)</IonCheckbox>
								</IonItem>*/}
							</IonList>
						</IonContent>
					</IonPopover>
					<IonSearchbar
						ref={findInPageSearchRef}
						searchIcon="/icons/find-in-page.svg"
						placeholder="Find in page"
						type="text"
						inputmode="text"
						onInput={onInput}
						onIonClear={() => marker.unmark({done: () => {setNumberOfTextsFound(0); setHighlightedText(-1);}})}
					/>
					<IonButton shape="round" onClick={() => show(-1)} disabled={numberOfTextsFound === 0} color="tertiary" size="small"><IonIcon slot="icon-only" icon={chevronBack} /></IonButton>
					<span className="count">{highlightedText + 1}/{numberOfTextsFound}</span>
					<IonButton shape="round" onClick={() => show(1)} disabled={numberOfTextsFound === 0} color="tertiary" size="small"><IonIcon slot="icon-only" icon={chevronForward} /></IonButton>
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
