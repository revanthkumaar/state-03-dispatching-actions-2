import {all, fork} from 'redux-saga/effects'

//get all the sagas that are used in the application
import {watchIncreaseCounter} from './counterSaga';

export function* rootSaga(){
    yield all({
        fork(watchIncreaseCounter),
        fork(watchDecreaseCounter)
    })
}