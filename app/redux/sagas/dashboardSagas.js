import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/dashboardActions';

const base_url = 'http://52.66.151.116/app_machine/v1/home?app_package_name=tech.applabs.healthyrecipes';

export async function request(url, opts) {

    const response = await fetch(url, opts)
    if (response.status < 200 || response.status >= 300) {
        throw "Bad request."
    } 
    const body = await response.json()

    if (body.status !== "success") {
        throw "Bad request."
    } 

    return body

}

export function* fetchFood(action) {
    const requestURL = base_url;
    const options = {
        method: 'GET',
        'Content-Type': 'application/json'
    };
    try {
        const res = yield call(request, requestURL, options);
        if (res) {
            yield put(actions.fetchFoodSuccess(res));
        }
    }
    catch (err) {
        yield put(actions.fetchFoodFailed(err));
    }
}

export default function* fetchFoodSaga() {
    yield takeLatest('FETCH_FOOD', fetchFood);
}