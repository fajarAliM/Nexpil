import * as actions from '../actionNames';
import { users } from '../../service/users';

export const HomeReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.GET_USER:
            return action.payLoad;
        default:
            return state;
    }
    return state;
}
