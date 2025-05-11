import { useCallback, KeyboardEvent, PropsWithChildren } from 'react';

interface ScrollOptions {
	mid?: boolean
	noHighlight?: boolean
	showBacklink?: string
}

interface LinkProps extends ScrollOptions {
	to: string
	id?: string
	"aria-label"?: string
}

const scroller = (id:string, options: ScrollOptions = {}) => {
	const el = document.getElementById(id);
	const {mid, noHighlight, showBacklink} = options;
	let w = el;
	if(!el) {
		console.log(`ERROR: unable to find element with id [${id}]`);
		return;
	} else if(!noHighlight) {
		el.classList.add("highlight");
		setTimeout(() => el.classList.remove("highlight"), 500);
	}
	if(mid) {
		// Used by the Feats Tree page only
		el.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		});
		return;
	}
	if(showBacklink) {
		// First, remove any other backlinks out there.
		const any = document.querySelectorAll(".backToPreviousLink");
		any.forEach(one => one.classList.remove("backToPreviousLink"));
		// Now, highlight the backlink
		const el = document.getElementById(showBacklink);
		el && el.classList.add("backToPreviousLink");
	}
	while(w && w.tagName.toUpperCase() !== "ION-CONTENT") {
		w = w.parentElement;
	}
	w && (w as HTMLIonContentElement).scrollByPoint(
		0, // x coordinate
		(el ? el.getBoundingClientRect().top + window.scrollY - 80 : 0), // y coordinate
		500 // ms
	);
};

const InnerLink: React.FC<PropsWithChildren<LinkProps>> = (props) => {
	const { to, mid, noHighlight, showBacklink, ...etc } = props;
	const options: ScrollOptions = { mid, noHighlight, showBacklink };
	const clickTo = useCallback(() => scroller(to, options), [to, mid, noHighlight]);
	const enterTo = useCallback((e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && scroller(to, options), [to, mid, noHighlight]);
	return (
		<span className="innerlink" tabIndex={0} role="link" onClick={clickTo} onKeyDown={enterTo} {...etc} />
	);
};

export default InnerLink;
