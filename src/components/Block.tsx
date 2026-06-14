import { FC, PropsWithChildren } from "react";

interface BlockProps {
	titled?: boolean
}
interface RowProps {}
interface CellProps {}

export const Block: FC<PropsWithChildren<BlockProps>> = (props) => {
	const {titled, children} = props;
	return (
		<div className={"table" + (titled ? " titled" : "")}>
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
	const {children} = props;
	return (
		<div className="td">
			{children}
		</div>
	);
};
