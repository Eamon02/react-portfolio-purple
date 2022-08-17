import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

// Import styles
import './sass/style.scss';

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
