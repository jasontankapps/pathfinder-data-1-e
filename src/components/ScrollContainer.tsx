import { FC, PropsWithChildren, UIEventHandler, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPosition } from "../store/scrollSlice";

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

interface ScrollContainerProps {
	id: string
}

const $wrappers: { [key: string]: HTMLDivElement } = {};

const ScrollContainer: FC<PropsWithChildren<ScrollContainerProps>> = (props) => {
	const { id, children } = props;
	const xPos = useAppSelector(state => state.scroll[`${id}-X`] || 0);
	const yPos = useAppSelector(state => state.scroll[`${id}-Y`] || 0);
	const dispatch = useAppDispatch();
	const onScroll: UIEventHandler<HTMLDivElement> = useCallback((event) => {
		event.stopPropagation();
		debounce(() => {
			dispatch(setPosition({id: `${id}-X`, pos: (event.currentTarget || event.target).scrollLeft}));
			dispatch(setPosition({id: `${id}-Y`, pos: (event.currentTarget || event.target).scrollTop}));
		}, id);
	}, [id, dispatch]);
	const refWrapper = useCallback((node:HTMLDivElement|null) => {
		if(node && id && $wrappers[id] !== node) {
			$wrappers[id] = node;
			if(xPos || yPos) {
				debounce(() => {
					// Stop this scroll event from triggering other scroll events
					freezeDebounce(id);
					// Do the scrolling
					node && node.scrollTo({top: yPos, left: xPos, behavior: "instant"});
				}, "loadingscroll" + id, 100);
			}
		}
	}, []);
	return (
		<div className="tableWrap" onScroll={onScroll} ref={refWrapper}>{children}</div>
	);
};

export default ScrollContainer;
