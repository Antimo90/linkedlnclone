import { 
  SET_USER, 
  SET_PROFILE_IMAGE_LOADING, 
  SET_PROFILE_IMAGE_SUCCESS, 
  SET_PROFILE_IMAGE_ERROR 
} from "../actions";

const initialState = {
  name: "",
  surname: "",
  email: "",
  username: "",
  bio: "",
  title: "",
  area: "",
  image: "",
  // Stati per l'upload dell'immagine
  imageUploadLoading: false,
  imageUploadError: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { 
        ...state, 
        ...action.payload,
        imageUploadLoading: false,
        imageUploadError: null 
      };
    
    case SET_PROFILE_IMAGE_LOADING:
      return {
        ...state,
        imageUploadLoading: action.payload,
        imageUploadError: null
      };
    
    case SET_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.payload,
        imageUploadLoading: false,
        imageUploadError: null
      };
    
    case SET_PROFILE_IMAGE_ERROR:
      return {
        ...state,
        imageUploadLoading: false,
        imageUploadError: action.payload
      };
    
    default:
      return state;
  }
};
export default userReducer;
