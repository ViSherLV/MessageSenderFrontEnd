import { SEND_MESSAGE } from "./types";

interface MessageReducer {
  type: string;
  payload: object;
}
const initialState = {
  loading: false,
};
export const messageReducer = (
  state = initialState,
  action: MessageReducer
) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, sendingResult: action.payload };
    default:
      return state;
  }
};
