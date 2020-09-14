import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as initialActions from '../store/actionNames/homePageActions';
import axios from 'axios';

/* These are saga functions for patient page. */


function* getSelectedUser(action) {
   try {
      yield put({type: "GET_SELECTED_USER", payLoad: action.payLoad});
   } catch (e) {
      yield put({type: "GET_SELECTED_USER_FAILED", message: e.message});
   }
}

/* --------- API get data functions ----------- */

// Get patients list API
function result(endPointURL) {
    return axios.post('https://nexp.xyz/nexpil/' + endPointURL)
}

// Get patients informations API
function getPatientPersonalInfoAPI(patientID) {
    return axios.post('https://nexp.xyz/nexpil/patient-info.php?patient_id=' + patientID); 
}


/* ----------- Call and dispatch functions ------------- */

// Get full patients list
function* getPatientsList() {
    try {
        const patients = yield call(result, "patients.php");
        yield put({type: "PATIENTS_LIST", payLoad: patients.data.data.results})
    } catch (e) {
        yield put({type: "GET_PATIENTS_LIST_FAILED", message: e.message});
    }
}

// Get selected patient from patient list
function* setPatientSelected(action) {
    try {
        yield put({type: 'SET_SELECTED_PATIENT', payLoad: action.payLoad});
    } catch (e) {
        yield put({type: 'SET_PATIENT_SELECT_FAILED'});
    }
}

// Get selected patient informations
function* getPatientPersonalInfo(action) {
    try {
        const patientPersonalInfo = yield call(getPatientPersonalInfoAPI, action.payLoad);
        yield put({type: "GET_PATIENT_PERSONAL_INFOS", payLoad: patientPersonalInfo.data.data});
    } catch (e) {
        yield put({type: "GET_PATIENT_PERSONAL_INFO_FAILED"});
    }
}

// Export saga functions
export default function* mySaga() {
  yield takeEvery(initialActions.GET_USER, getSelectedUser);
  yield takeEvery(initialActions.GET_PATIENTS_LIST, getPatientsList);
  yield takeEvery(initialActions.SET_PATIENT_SELECTED, setPatientSelected);
  yield takeEvery(initialActions.GET_PATIENT_PERSONAL_DATA, getPatientPersonalInfo);
}
