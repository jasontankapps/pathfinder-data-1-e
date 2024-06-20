import { ReactNode } from "react";

export type Datum = string | number | [ number, string ] | [ string, string ];

export type RawDatum = null | Datum;

export type TableColumnInfoTypes = "gp" | "lbs" | "gp+" | "lbs+" | "bonus" | "num" | null | 0;
// gp = gold pieces
// gp+ = gold piece adjustment
// lbs = weight
// lbs = weight adjustment
// bonus = +1/-1/etc
// num = any number
// null = text
// 0 = DO NOT SORT ON THIS COLUMN (text)

export type HierarchyArray = [string, string][];

export interface Table {
	// unique identifier
	id: string
	// headers
	headers: string[]
	// declares what type of data each column has
	types: TableColumnInfoTypes[]
	// the rows that will form a table
	data: RawDatum[][]
	// the index of the column that is initially sorted
	initialColumn: number
	// what to print if a cell is `null` (defaults to &mdash;)
	nullValue?: string
	// the CSS class to assign to the table
	className: string
}

export interface JsonDataPropsMain {
	title: string,
	description: string[],
	tables?: Table[],
	sources?: string[]
	previous?: HierarchyArray
}

export interface JsonDataProps {
	name: string,
	description: string[],
	tables?: Table[],
	sources: string[],
	subhierarchy?: [string, string][]
}

export interface CopyOf<T> extends Partial<JsonDataProps> {
	copyof: T
}

export type CodePlugin = (input: string) => false | ReactNode

export interface DisplayItemProps {
	markdown: string | string[]
	tables?: Table[]
	otherCodes?: CodePlugin[]
	className?: string
}

export interface SourceProps {
	title: string,
	url: string
}
