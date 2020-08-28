import { combineReducers } from 'redux';

import { HomeReducer } from './homeReducers';
import { usersSelect } from './usersReducers';

export default combineReducers({
    HomeReducer,
    usersSelect,
})
