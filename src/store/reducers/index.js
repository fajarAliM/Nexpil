import { combineReducers } from 'redux';
import { 
    usersSelect, 
    patientsList, 
    patientSelect, 
    patientPersonalInfo 
} from './usersReducers';

// Export combined reducers
export default combineReducers({
    usersSelect,
    patientsList,
    patientSelect,
    patientPersonalInfo,
})
