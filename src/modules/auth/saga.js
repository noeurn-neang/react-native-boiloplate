import { call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN } from './constant';
import { loginService } from './service';

function* doLoginSaga(action) {
    try {
        const user = yield call(loginService, action.payload);
        yield put({ type: LOGIN_SUCCESS, payload: user });
    } catch (e) {
        console.log(e)
        yield put({ type: LOGIN_ERROR, payload: e.message });
    }
}

export default function* authSaga() {
    yield takeEvery(LOGIN, doLoginSaga);
}