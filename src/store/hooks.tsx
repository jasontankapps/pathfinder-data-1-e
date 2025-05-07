import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type DispatchType = ReturnType<typeof useAppDispatch>;

type ElementRef<T extends Element> = (node: T | null) => void;

export const useElement = <T extends Element>(extraFunc?: (node: T | null) => void): [T | null, ElementRef<T>] => {
	const [el, setEl] = useState<T | null>(null);
	const ref: ElementRef<T> = useCallback((node: T | null) => {
		if(node && node !== el) {
			setEl(node);
			extraFunc && extraFunc(node);
		}
	}, []);
	return [el, ref];
};
