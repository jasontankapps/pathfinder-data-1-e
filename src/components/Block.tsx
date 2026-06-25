import { FC, PropsWithChildren } from "react";

interface BlockProps {
	titled?: boolean
	giant?: boolean
	tiny?: boolean
	big?: boolean
	size?: "giant" | "big" | "small" | "tiny" | "simple"
	hl?: boolean
	classes?: string
}
interface RowProps {}
interface CellProps {
	className?: string
}

export const Block: FC<PropsWithChildren<BlockProps>> = (props) => {
	const {titled, size, hl, classes, children} = props;
	return (
		<div className={
			"table" + (
				classes ? " " + classes : ""
			) + (
				titled ? " titled" : ""
			) + (
				size ? " " + size : ""
			) + (
				hl ? " hlHeader" : ""
			)
		}>
			{children}
		</div>
	);
};


export const Row: FC<PropsWithChildren<RowProps>> = (props) => {
	const {children} = props;
	return (
		<div className="tr">
			{children}
		</div>
	);
};


export const Cell: FC<PropsWithChildren<CellProps>> = (props) => {
	const {children, className} = props;
	return (
		<div className={"td" + (className ? " " + className : "")}>
			{children}
		</div>
	);
};
