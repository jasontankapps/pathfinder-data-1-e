import ModalPop from "./ModalPop";
import ordinal from "./ordinal";

type LevelPair = [number, number];

interface ModalProps {
	levels: LevelPair[]
	unit: string
	preText?: string
	postText?: string
	divider?: string
}


const ByLevelPop: React.FC<ModalProps> = (props) => {
	const {levels, unit, preText = "", postText = "", divider = " "} = props;
	const html = [ "<table><thead><tr><th>Level</th><th>Units</th></tr></thead><tbody><tr>" ];
	levels.forEach(([level, amount]) => {
		const a = Math.round(amount);
		const line = preText + String(a) + divider + unit + (a === 1 ? "" : "s") + postText;
		html.push(`<tr><td>${ordinal(level)}</td><td>${line}</td></tr>`);
	});
	const message = html.join("") + "</tbody></table>";
	return (
		<ModalPop message={message} cssClass="levelPop" buttons={["Ok"]} header="Level Breakdown" />
	);
};

export default ByLevelPop;
