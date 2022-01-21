import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import crudService from '../../ApiService/crud.service';
import { CrudTypes } from './actionTypes';
import { ApiResponse, successApiResponse } from'./action';

function* getData() {

    try {
        const response: Promise<any> = yield call(crudService.getData);
        // console.log('response f', response)
       
        yield put(ApiResponse(response));

    } catch (error) {
        console.log('error f', error)

    }
}

function* postData({payload} : any) {

    try {
        const response: Promise<any> = yield call(crudService.postData,  payload);
        console.log('response f', response)
        yield put(successApiResponse(response));

    } catch (error) {
        console.log('error f', error)

    }
}

function* editData({payload} : any) {

    try {
        const response: Promise<any> = yield call(crudService.editData,  payload);

        console.log('response f', response)
        yield put(successApiResponse(response));

    } catch (error) {
        console.log('error f', error)

    }
}
function* updateData({payload} : any) {

    try {
        const response: Promise<any> = yield call(crudService.updateData,  payload);
        console.log('response f', response)
        const responses = {
            status: 'success',
            type: 'updated',
            message: 'Updated Successfully'
        }
        yield put(successApiResponse(responses));

    } catch (error) {
        console.log('error f', error)

    }
}

function* deleteData({payload} : any) {

    try {
        const response: Promise<any> = yield call(crudService.deleteData,  payload);
        console.log('response f', response)
        const responses = {
            status: 'success',
            type: 'deleted',
            message: 'Deleted Successfully'
        }
        yield put(successApiResponse(responses));

    } catch (error) {
        console.log('error f', error)

    }
}


export default function* crudSaga() {

    yield takeEvery(CrudTypes.Crud_GET, getData)
    yield takeEvery(CrudTypes.Crud_POST, postData)
    yield takeEvery(CrudTypes.Crud_EDIT, editData)
    yield takeEvery(CrudTypes.Crud_UPDATE, updateData)
    yield takeEvery(CrudTypes.Crud_DELETE, deleteData)

}