import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<Provider store={store.store}>
			<PersistGate persistor={store.persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
