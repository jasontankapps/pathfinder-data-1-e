import { ReactNode, Fragment } from "react";

const mapNodes = (input: ReactNode[], id: string, needId: boolean = false): ReactNode[] => {
	return input.map((node, i) => {
		return i ?
			<Fragment key={`${id}-${i}`}>, {node}</Fragment>
		: (
			needId ? <Fragment key={`${id}-${i}`}>{node}</Fragment> : node
		);
	})
};

export default mapNodes;
