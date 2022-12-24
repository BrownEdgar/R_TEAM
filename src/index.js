import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/Edgar/HOOKS/Task/Post';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
