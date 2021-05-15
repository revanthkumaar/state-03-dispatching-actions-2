import {combineReducers} from 'redux-redux';


import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
})
 
export default rootReducer;