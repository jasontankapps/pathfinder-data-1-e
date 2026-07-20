// From: https://github.com/daveschumaker/react-dark-mode-hook
//  (With minor mods)
import { useState, useEffect, useCallback } from 'react';

const useDarkMode = () => {

	const isClient = typeof window === 'object';

	const getDarkMode = useCallback(() => {
		if (
			isClient &&
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return true;
		} else {
			return false;
		}
	}, [isClient]);

	const [darkMode, setDarkMode] = useState(getDarkMode);

	const handleChange = useCallback(() => {
		setDarkMode(getDarkMode());
	}, [setDarkMode, getDarkMode]);

	useEffect(() => {
		if (!isClient) {
			return;
		}

		const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

		try {
			// Handle Chrome & Firefox
			darkModeQuery.addEventListener('change', handleChange);
		} catch (addEventListenerError) {
			console.error(addEventListenerError);
		}
		return () =>
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', handleChange);
	}, [isClient, getDarkMode, handleChange]);

	return darkMode;
};

export default useDarkMode;
