import { useCallback, KeyboardEvent, PropsWithChildren } from 'react';

interface LinkProps {
	to: string
	mid?: boolean
	id?: string
	"aria-label"?: string
}

const scroller = (id:string, mid:boolean = false) => {
	const el = document.getElementById(id);
	if(el && mid) {
		// Used by the Feats Tree page only
		el.classList.add("highlight");
		el.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		});
		setTimeout(() => el.classList.remove("highlight"), 500);
		return;
	}
	let w = el;
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
	const { to, mid, ...etc } = props;
	const clickTo = useCallback(() => scroller(to, mid), [to, mid]);
	const enterTo = useCallback((e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && scroller(to, mid), [to, mid]);
	return (
		<span className="innerlink" tabIndex={0} role="link" onClick={clickTo} onKeyDown={enterTo} {...etc} />
	);
};

export default InnerLink;
