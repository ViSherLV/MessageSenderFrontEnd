import { FETCH_USERS, CHOOSEN_USERS } from "./types";
interface UserReduceAction {
  type: string;
  payload: object;
}
const initialState = {
  users: [],
};
export const usersReducer = (
  state = initialState,
  action: UserReduceAction
) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: payload };

    case CHOOSEN_USERS:
      return { ...state, choosenUsers: payload };
    default:
      return state;
  }
};
