import { users } from '../../service/users';

export const usersSelect = (state = {}, action) => {
    switch (action.type) {
        case "GET_SELECTED_USER":
            return action.payLoad;
        default:
            return users[0];
    }
    return state;
}

export const patientsList =  (state = [], action) => {
    switch (action.type) {
        case "PATIENTS_LIST":
            return action.payLoad;
        default:
            return state;
    }
}

export const patientSelect = (state = {}, action) => {
    switch (action.type) {
        case "SET_SELECTED_PATIENT":
            return action.payLoad;
        default:
            return state;
    }
}

export const patientPersonalInfo = (state = {}, action) => {
    switch (action.type) {
        case "GET_PATIENT_PERSONAL_INFOS":
            console.log("patient personal info====>", action.payLoad);
            return action.payLoad;
        default: 
            return state;
    }
}
