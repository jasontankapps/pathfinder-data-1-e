
export type Datum = string | number | [ number, string ] | [ string, string ];

export type RawDatum = null | Datum;

export type Types = "gp" | "lbs" | "gp+" | "lbs+" | "bonus" | "num" | null;

export interface Table {
	// unique identifier
	id: string
	// headers
	headers: string[]
	// declares what type of data each column has
	types: Types[]
	// the rows that will form a table
	data: RawDatum[][]
	// the index of the column that is initially sorted
	initialColumn: number
	// what to print if a cell is `null` (defaults to &mdash;)
	nullValue?: string
	// the CSS class to assign to the table
	className: string
}

export interface ItemProps {
	title: string,
	description: string[],
	tables?: Table[]
}
