import {delay} from 'redux-saga/effects'

function* increaseCounterAsync(){
try {    yield delay(4000);
    yield put({
        type:'INCREASE_COUNTER_ASYNC',
        value:4
    })

}
catch(err){
    console.log(err)
}
}


function* watchIncreaseCounter(){
    takeLatest('INCREASE_COUNTER', increaseCounterAsync)
}


web workers