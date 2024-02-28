import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
import { useState } from 'react';
import { HistoryRouter } from 'redux-first-history/rr6';
import { store, history } from './routes/store';
import { routes } from './routes/routes';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}

        <HistoryRouter history={history}>{routes}</HistoryRouter>

        {/* </Provider> */}
    </React.StrictMode>,
);
