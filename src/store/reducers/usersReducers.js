import * as actions from '../actionNames';
import { users } from '../../service/users';

export const usersSelect = (state = {}, action) => {
    switch (action.type) {
        case actions.GET_USER:
            return action.payLoad;
        default:
            console.log('reducer user', users[0])
            return users[0];
    }
    return state;
}
