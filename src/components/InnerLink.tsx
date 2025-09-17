import { useCallback, KeyboardEvent, PropsWithChildren } from 'react';

interface ScrollOptions {
	toCenter?: boolean
	toTop?: boolean
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
	const {toCenter, toTop, noHighlight, showBacklink} = options;
	if(!el) {
		console.log(`ERROR: unable to find element with id [${id}]`);
		return;
	} else if(!noHighlight) {
		el.classList.add("highlight");
		setTimeout(() => el.classList.remove("highlight"), 500);
	}
	if(toCenter) {
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
	let block: ScrollLogicalPosition = "start";
	//toTop should only be used for hard-coded links
	if(!toTop) {
		let w = el.parentElement;
		while(w && w.tagName.toUpperCase() !== "ION-CONTENT") {
			if(w.classList.contains("tableWrap")) {
				block = "center";
				break;
			}
			w = w.parentElement;
		}
	}
	el.scrollIntoView({
		behavior: "smooth",
		block,
		inline: "nearest"
	});
};

const InnerLink: React.FC<PropsWithChildren<LinkProps>> = (props) => {
	const { to, toCenter, toTop, noHighlight, showBacklink, ...etc } = props;
	const clickTo = useCallback(
		() => scroller(to, { toCenter, toTop, noHighlight, showBacklink }),
		[to, toCenter, toTop, noHighlight, showBacklink]
	);
	const enterTo = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) =>
			e.key === "Enter" && scroller(to, { toCenter, toTop, noHighlight, showBacklink }),
		[to, toCenter, toTop, noHighlight, showBacklink]
	);
	return (
		<span className="innerlink" tabIndex={0} role="link" onClick={clickTo} onKeyDown={enterTo} {...etc} />
	);
};

export default InnerLink;
