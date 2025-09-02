import { 
  SET_USER, 
  SET_PROFILE_IMAGE_LOADING, 
  SET_PROFILE_IMAGE_SUCCESS, 
  SET_PROFILE_IMAGE_ERROR,
  SET_COVER_IMAGE_LOADING,
  SET_COVER_IMAGE_SUCCESS,
  SET_COVER_IMAGE_ERROR
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
  coverImage: "", // Immagine di copertina
  // Stati per l'upload dell'immagine del profilo
  imageUploadLoading: false,
  imageUploadError: null,
  // Stati per l'upload dell'immagine di copertina
  coverImageUploadLoading: false,
  coverImageUploadError: null,
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
    
    // Casi per l'upload dell'immagine di copertina
    case SET_COVER_IMAGE_LOADING:
      return {
        ...state,
        coverImageUploadLoading: action.payload,
        coverImageUploadError: null
      };
    
    case SET_COVER_IMAGE_SUCCESS:
      return {
        ...state,
        coverImage: action.payload,
        coverImageUploadLoading: false,
        coverImageUploadError: null
      };
    
    case SET_COVER_IMAGE_ERROR:
      return {
        ...state,
        coverImageUploadLoading: false,
        coverImageUploadError: action.payload
      };
    
    default:
      return state;
  }
};
export default userReducer;
