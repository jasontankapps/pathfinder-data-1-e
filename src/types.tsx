import { ReactElement } from "react";
import { SourceProp } from "./components/SourcesModal";

// RangeInSliceFormat<desired start, desired end + 1>
// This will fail if (END - START) >= 1000
export type RangeInSliceFormat<START extends number, END extends number, N extends number = never> =
	START extends END ? N : RangeInSliceFormat<Inc<START>, END, START | N>;

// These are equivalent:
//    type X = RangeInSliceFormat<-4, 5>;
//    type Y = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
// NOTE: The high end will cap out at (END - 1)
//
// Based on JS Slice method (using positive numbers only)
//   [0, 1, 2, 3, 4].slice(0, 2) => [0, 1]
//   [0, 1, 2, 3, 4].slice(1, 2) => [1]
//   [0, 1, 2, 3, 4].slice(2, 4) => [2, 3]

export type Datum = string | number | [ number, string ] | [ string, string ];

export type RawDatum = null | Datum;

export type ColumnDataType = "gp" | "lbs" | "gp+" | "lbs+" | "bonus" | "num" | "pct";
// gp = gold pieces
// gp+ = gold piece adjustment
// lbs = weight
// lbs = weight adjustment
// bonus = +1/-1/etc
// num = any number
//   Otherwise, assume it is plain text.

export type Hierarchy = [string, string];

interface BaseFilter {
	col: number
	header?: string
	labels?: string[]
}
interface RangeFilter extends BaseFilter {
	// range of numbers
	range: [number, number]
	equals?: never
	has?: never
	word?: never
}
interface EqualsFilter extends BaseFilter {
	// array of values
	equals: (string | number)[]
	range?: never
	has?: never
	word?: never
}
interface HasFilter extends BaseFilter {
	// array of strings that may partially match
	has: string[]
	word?: boolean
	range?: never
	equals?: never
}

export type Filter = RangeFilter | EqualsFilter | HasFilter;

export interface Column {
	header: string
	type?: ColumnDataType
	align?: "start" | "end"
	ripple?: boolean
	size?: number
	unsortable?: boolean
}

export interface Table {
	// unique identifier
	id: string
	// declares a header, data type, alignment, size (column width), ripple, and unsortability
	columns: Column[]
	// the rows that will form a table
	data: RawDatum[][]
	// the index of the column that is initially sorted
	initialColumn: number
	// what to print if a cell is `null` (defaults to &mdash;)
	nullValue?: string
	// some tables have additional filters (usually spell levels or CR)
	filter?: Filter[]
}

export interface DisplayItemProps {
	markdown: string | string[]
	tables?: Table[]
	className?: string
	prefix?: string
}

export interface SourceProps {
	title: string
	url: string
	unknown?: boolean
}

export interface JsonRulesProps<Name> {
	hasJL?: boolean
	title: string
	jsx: ReactElement
	parent_topics?: Name[]
	subtopics?: Name[]
	siblings?: Name[]
	sources: SourceProp[]
	className?: string
}

// NUMERIC RANGE
//Source: https://stackoverflow.com/questions/76658139/typescript-intrange-which-supports-negative-values

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Next = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
type Inc<T extends number> =
	T extends -1 ? 0 :
	(
		`${T}` extends `-${infer N extends number}` ?
			(`-${Dec<N>}` extends `${infer M extends number}` ? M : never)
		:
			(
				`${T}` extends `${infer F extends number}${Digit}` ?
					(
						`${T}` extends `${F}${infer D extends Digit}` ?
							(`${D extends 9 ? Inc<F> : F}${Next[D]}` extends `${infer N extends number}` ? N : never)
						:
							never
					)
				:
					(T extends 9 ? 10 : Next[T])
			)
	);

type Prev = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
type Dec<T extends number> =
	(
		`${T}` extends `-${infer N extends number}` ?
			(`-${Inc<N>}` extends `${infer M extends number}` ? M : never)
		:
			(
				`${T}` extends `${infer F extends number}${Digit}` ?
					(
						`${T}` extends `${F}${infer D extends Digit}` ?
							(
								`${D extends 0 ? Dec<F> extends 0 ? "" : Dec<F> : F}${Prev[D]}` extends `${infer N extends number}` ?
									N
								:
									never
							)
						:
							never
					)
				:
					(T extends 0 ? -1 : Prev[T])
			)
	);
