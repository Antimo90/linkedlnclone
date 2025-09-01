export const SET_USER = "SET_USER";
export const SET_USERS_ARRAY = "SET_USERS_ARRAY";

//PER IL PROPRIO PROFILOO
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

//PER LA RICERCA DELLA SEARCHBAR :)
export const setUsersArray = (users) => ({
  type: SET_USERS_ARRAY,
  payload: users,
});
