import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App.tsx'
import "./index.css"
import {persistor, store} from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
