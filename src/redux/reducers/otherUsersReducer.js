import { SET_USERS_ARRAY } from "../actions";

const initialState = {
  users: [],
};
const otherUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_ARRAY:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default otherUsersReducer;
