import { CHOOSEN_USERS, FETCH_USERS, HIDE_LOADER, SHOW_LOADER } from './types';
import axios from "axios";

type MyThunk = AsyncGeneratorFunction;

export function showPreloader() {
    return {
        type: SHOW_LOADER
    }
}

export function hidePreloader() {
    return {
        type: HIDE_LOADER
    }
}
export function fetchUser() {
    return async (dispatch: MyThunk) => {
        dispatch(showPreloader())
        const response = await fetch('http://localhost:3001/users');
        const json = await response.json();
        setTimeout(() => {
            dispatch({ type: FETCH_USERS, payload: json })
            dispatch(hidePreloader())
        }, 2000)

    }
}
export function saveChoosenUsers(payload: Array<string>) {
    return {
        type: CHOOSEN_USERS,
        payload
    }
}

export function sendMessages(sendingData: object) {
    return async (dispatch: MyThunk) => {
        dispatch(showPreloader())
        await axios.post(`http://localhost:3001/sendMessage`, sendingData);
        dispatch(hidePreloader())
    }
}

