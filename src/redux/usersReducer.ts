import {FETCH_USERS, CHOOSEN_USERS} from './types'
const initialState ={
    users:[]
}
export const usersReducer = (state = initialState, action) => {
    const {payload} = action
    switch(action.type){
        case FETCH_USERS:
            return {...state, users: payload}
        
        case CHOOSEN_USERS:
            return {...state, choosenUsers:payload}
        default: return state;
    }
}