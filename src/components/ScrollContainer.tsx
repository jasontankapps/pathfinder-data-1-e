import { FC, PropsWithChildren, UIEventHandler, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector, useElement } from "../store/hooks";
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

const doScrollNow = (id: string, xPos: number, yPos: number) => {
	return (node: HTMLDivElement | null) => {
		debounce(() => {
			// Stop this scroll event from triggering other scroll events
			freezeDebounce(id);
			// Do the scrolling
			node && node.scrollTo({top: yPos, left: xPos, behavior: "instant"});
		}, "loadingscroll" + id, 100);
	};
};

interface ScrollContainerProps {
	id: string
}

const ScrollContainer: FC<PropsWithChildren<ScrollContainerProps>> = (props) => {
	const { id, children } = props;
	const xPos = useAppSelector(state => state.scroll[`${id}-X`] || 0);
	const yPos = useAppSelector(state => state.scroll[`${id}-Y`] || 0);
	const [, ref] = useElement<HTMLDivElement>(doScrollNow(id, xPos, yPos));
	const dispatch = useAppDispatch();
	const onScroll: UIEventHandler<HTMLDivElement> = useCallback((event) => {
		event.stopPropagation();
		debounce(() => {
			dispatch(setPosition({id: `${id}-X`, pos: (event.currentTarget || event.target).scrollLeft}));
			dispatch(setPosition({id: `${id}-Y`, pos: (event.currentTarget || event.target).scrollTop}));
		}, id);
	}, [id, dispatch]);
	return (
		<div className="tableWrap" onScroll={onScroll} ref={ref}>{children}</div>
	);
};

export default ScrollContainer;
