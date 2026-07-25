import { FC, PropsWithChildren, ReactNode, useContext } from "react";
import { IdContext } from './contexts';

interface BlockProps {
	titled?: boolean
	giant?: boolean
	tiny?: boolean
	big?: boolean
	size?: "giant" | "big" | "small" | "tiny" | "simple" | "minimal"
	hl?: boolean
	classes?: string
}
interface CellProps {
	className?: string
	id?: string
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


export const Row: FC<{children?: ReactNode}> = (props) => {
	const {children} = props;
	return (
		<div className="tr">
			{children}
		</div>
	);
};


export const Cell: FC<PropsWithChildren<CellProps>> = (props) => {
	const {children, className, id} = props;
	const cId = useContext(IdContext) + id;
	return (
		<div data-hash-target className={"td" + (className ? " " + className : "")} id={cId}>
			{children}
		</div>
	);
};
