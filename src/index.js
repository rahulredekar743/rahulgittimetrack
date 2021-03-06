import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';

const composeEnhancers = compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);