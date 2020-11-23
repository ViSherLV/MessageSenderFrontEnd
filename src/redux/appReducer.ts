import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_CONFIRM_ALERT,
  HIDE_CONFIRM_ALERT,
} from "./types";
const initialState = {
  loading: false,
  alert: null,
};
interface Action {
  type: string;
}
interface ActionWithPayload<T> extends Action {
  payload: T;
}

export const appReducer = (
  state = initialState,
  action: ActionWithPayload<object>
) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case SHOW_CONFIRM_ALERT:
      return { ...state, confirmAlert: action.payload };
    case HIDE_CONFIRM_ALERT:
      return { ...state, confirmAlert: null };
    default:
      return state;
  }
};
