import {
	FC,
	PropsWithChildren
} from 'react';
import Markdown from 'react-markdown';
import { ColumnDataType, LinkFormat } from '../../types';
import components from './Components';

interface TdProps {
	datum: string | number | LinkFormat
	align?: "start" | "end"
	type?: ColumnDataType
}

const Td: FC<PropsWithChildren<TdProps>> = ({ datum, align }) => {
	const text = Array.isArray(datum) ? `[${datum[0]}](/${datum[2]}/${datum[1]})` : String(datum);
	return (
		<div className={"cell" + (align === "end" ? " ion-text-end" : (align === "start" ? " ion-text-start" : ""))}>
			<Markdown components={components}>{text}</Markdown>
		</div>
	);
};

export default Td;
