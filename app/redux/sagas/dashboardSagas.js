import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/dashboardActions';
import {request} from '../../utils'

const base_url = 'http://52.66.151.116/app_machine/v1/home?app_package_name=tech.applabs.healthyrecipes';

// saga function to fetch data from the api
export function* fetchFood() {
    const requestURL = base_url;
    const options = {
        method: 'GET',
        'Content-Type': 'application/json'
    };
    try {
        const res = yield call(request, requestURL, options);
        //call success action if you get successful api response 
        if (res) {
            yield put(actions.fetchFoodSuccess(res));
        }
    }
    catch (err) {
        //call failure action if the api fails to give correct response 
        yield put(actions.fetchFoodFailed(err));
    }
}

export default function* fetchFoodSaga() {
    yield takeLatest('FETCH_FOOD', fetchFood);
}