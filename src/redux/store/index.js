import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import otherUsersReducer from "../reducers/otherUsersReducer";

const mainReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
});

const store = configureStore({
  reducer: mainReducer,
});
export default store;
