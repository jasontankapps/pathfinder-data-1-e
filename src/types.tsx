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
// Based on JS Slice method (except in how it handles negative numbers)
//   [0, 1, 2, 3, 4].slice(0, 2) => [0, 1]
//   [0, 1, 2, 3, 4].slice(1, 2) => [1]
//   [0, 1, 2, 3, 4].slice(2, 4) => [2, 3]

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

export type Hierarchy = [string, string];
export type HierarchyArray = Hierarchy[];

export interface Filter {
	col: number
	header?: string
	labels?: string[]
	// range of numbers
	range?: [number, number]
	// array of values
	equals?: (string | number)[]
	// array of strings that may partially match
	has?: string[]
}

export interface Table {
	// unique identifier
	id: string
	// headers
	headers: string[]
	// declares what type of data each column has
	types: TableColumnInfoTypes[]
	// marking if certain columns are aligned differently
	//   null = centered (default)
	//   true = start
	//   false = end
	alignments?: (boolean | null)[]
	// the rows that will form a table
	data: RawDatum[][]
	// the index of the column that is initially sorted
	initialColumn: number
	// what to print if a cell is `null` (defaults to &mdash;)
	nullValue?: string
	// cells that are only going to contain links
	ripples?: number[]
	// some tables do not need sorting information (defaults to true)
	sortable?: boolean
	// some tables have additional filters (usually spell levels or CR)
	filter?: Filter[]
	// specifying column widths
	sizes?: number | number[]
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

export interface BasicItem {
	name: string
	description: string[]
	tables?: Table[]
	sources: SourceProp[]
	subhierarchy?: HierarchyArray
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
