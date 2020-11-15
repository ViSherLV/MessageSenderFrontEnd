import { SEND_MESSAGE } from './types';
const initialState = {
    loading: false
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, sendingResult: action.payload }
        default: return state
    }
}