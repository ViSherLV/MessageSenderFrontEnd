import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { usersReducer } from './usersReducer';
import { messageReducer } from './messageReduces';
export const rootReducer = combineReducers({
    fetchUsersData: usersReducer,
    app: appReducer,
    sendingMessages: messageReducer,

})