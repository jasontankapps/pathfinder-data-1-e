import { Fragment, ReactNode } from 'react';

const maybeBreakText = (input: string, splitter = "&wbr&", breaker: ReactNode = <wbr />) => {
	if(input.indexOf(splitter) === -1) {
		return input;
	}
	return <>{input.split(splitter).map((bit, i) => {
		if(i === 0) {
			return bit;
		}
		return <Fragment key={`${input} part ${i}`}>{breaker}{bit}</Fragment>;
	})}</>;
};

export default maybeBreakText;