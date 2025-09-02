import { SET_USER } from "../actions";

const initialState = {
  name: "",
  surname: "",
  email: "",
  username: "",
  bio: "",
  title: "",
  area: "",
  image: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default userReducer;
