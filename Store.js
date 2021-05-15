import {applyMiddleware, createStore} from 'redux';
import {createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

import createSagaMiddleWare from 'redux-saga'
import rootSaga from './rootSagas'

const sagaMiddleWare = createSagaMiddleWare();


export const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare,createLogger()));


sagaMiddleWare.run(rootSaga);

// export { store }