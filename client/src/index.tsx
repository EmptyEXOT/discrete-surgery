import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'App';

const rootElem: HTMLElement = document.getElementById('root');

const root = createRoot(rootElem);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);