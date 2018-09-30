import { takeEvery, select, call, put } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import { deviceStorage } from './storage';
// at login (fetch token)                                   {login}
// at next (sends username and password->create token)      {register1}
// at submit (send form details corresponding to each drug) {register2}
// at register (fetch token)                                {register2}
const getToken = headers => fetch('http://localhost:3000/token', {
    headers: headers
});

const makeToken = (username, password) => fetch('http://localhost:3000/sign_up', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        'email': username,
        'password': password,
    }),
});

function* fetchToken(action) {
    try {
        var username = yield select(state => state.register.username);
        var password = yield select(state => state.register.password);
        var headers = new Headers();
        headers.append("Authorization", "Basic " + Base64.encode(username + ":" + password));
        const response = yield call(getToken, headers);
        const result = yield response.json();
        if (result.error) {
            yield put({ type: 'TOKEN_ERROR', error: result.error });
        } else {
            yield put({ type: 'TOKEN_RESULT', result });

            let stringResult = JSON.stringify(result)
            deviceStorage.saveItem("id_token", stringResult);
        }
    } catch (error) {
        yield put({ type: 'TOKEN_ERROR', error: error.message });
    }
};
function* createToken(action) {
    try {
        var username = yield select(state => state.register.username);
        var password = yield select(state => state.register.password);
        const response = yield call(makeToken, username, password);

        const result = yield response.json();
        if (result.error) {
            yield put({ type: 'TOKEN_ERROR', error: result.error });
        } else {
            yield put({ type: 'TOKEN_RESULT', result });

            let stringResult = JSON.stringify(result)
            deviceStorage.saveItem("id_token", stringResult);
        }
    } catch (error) {
        yield put({ type: 'TOKEN_ERROR', error: error.message });
    }
};



function* sendDetails(action) {
    yield;
};

export default function* rootSaga() {
    yield takeEvery('LOGIN', fetchToken);
    yield takeEvery('NEXT', createToken);
    yield takeEvery('SUBMIT', sendDetails);
    yield takeEvery('REGISTER', fetchToken);
};