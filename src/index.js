import React from 'react';
import {render} from 'react-dom';
import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import App from './app';

const createStoreWithMiddleware = applyMiddleware()(createStore)

const Root = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    )
}

render(<Root />, document.querySelector('#root'));