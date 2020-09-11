import { combineReducers } from 'redux';

import { usersSelect, patientsList, patientSelect, patientPersonalInfo } from './usersReducers';

export default combineReducers({
    usersSelect,
    patientsList,
    patientSelect,
    patientPersonalInfo,
})
