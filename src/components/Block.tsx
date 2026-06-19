import { FC, PropsWithChildren } from "react";

interface BlockProps {
	titled?: boolean
	tiny?: boolean
}
interface RowProps {}
interface CellProps {
	className?: string
}

export const Block: FC<PropsWithChildren<BlockProps>> = (props) => {
	const {titled, tiny, children} = props;
	return (
		<div className={"table" + (titled ? " titled" : "") + (tiny ? " tiny" : "")}>
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
