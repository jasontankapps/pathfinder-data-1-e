import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type DispatchType = ReturnType<typeof useAppDispatch>;

type ElementRef<T extends Element> = (node: T | null) => void;

type Setter<T extends Element> = (x: keyof T, y: any) => void;

// Must define T as an Element when using the hook
// Takes optional argument extraFunc (T | null) => void
//   The extraFunc function will be called whenever the reference is set or changes 
// Returns [Element, ElementRef, ElementSetter]
//   Element is an HTML element or `null`
//   ElementRef is a function that can be used as the argument for a ref attribute
//   ElementSetter is a function that can be used to modify the referenced Element
export const useElement = <T extends Element>(extraFunc?: (node: T | null) => void): [T | null, ElementRef<T>, Setter<T>] => {
	const [el, setEl] = useState<T | null>(null);
	const func = useCallback<Setter<T>>((prop, value) => {
		if(el !== null) {
			try {
				el[prop] = value;
			}
			catch(e) {
				console.log("cannot set [", prop, "] to [", value, "]");
				console.log(el);
			}
		}
	}, [el]);
	const ref: ElementRef<T> = useCallback((node: T | null) => {
		if(node && node !== el) {
			setEl(node);
			extraFunc && extraFunc(node);
		}
	}, [el, extraFunc]);
	return [el, ref, func];
};
