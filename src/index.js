import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/Gevorg/Add/Add';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
