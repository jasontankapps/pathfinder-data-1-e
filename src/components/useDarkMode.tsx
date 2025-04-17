// From: https://github.com/daveschumaker/react-dark-mode-hook
//  (With minor mods)
import { useState, useEffect } from 'react';

const useDarkMode = () => {
	const isClient = typeof window === 'object';

	const getDarkMode = () => {
		if (
			isClient &&
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return true;
		} else {
			return false;
		}
	};

	const [darkMode, setDarkMode] = useState(getDarkMode);
	const handleChange = () => {
		setDarkMode(getDarkMode());
	};

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
	}, []);

	return darkMode;
};

export default useDarkMode;
