import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/Edgar/axios/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
