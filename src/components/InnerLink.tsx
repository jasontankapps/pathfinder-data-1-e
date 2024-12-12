import { useCallback, KeyboardEvent, ReactNode, PropsWithChildren } from 'react';

interface LinkProps {
	to: string
	id?: string
	"aria-label"?: string
}

const scroller = (id:string) => {
	const el = document.getElementById(id);
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
	const { to, ...etc } = props;
	const clickTo = useCallback(() => scroller(to), [to]);
	const enterTo = useCallback((e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && scroller(to), [to]);
	return (
		<span className="innerlink" tabIndex={0} role="link" onClick={clickTo} onKeyDown={enterTo} {...etc} />
	);
};

export default InnerLink;
