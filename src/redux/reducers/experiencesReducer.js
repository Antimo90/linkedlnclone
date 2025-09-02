import {
  SET_EXPERIENCES,
  ADD_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  SET_EXPERIENCES_LOADING,
  SET_EXPERIENCES_ERROR,
} from "../actions";

/**
 * Stato iniziale per le esperienze
 */
const initialState = {
  experiences: [], // Array delle esperienze
  loading: false, // Stato di caricamento
  error: null, // Messaggio di errore
};

/**
 * Reducer per gestire lo stato delle esperienze
 * @param {Object} state - Stato corrente
 * @param {Object} action - Azione da eseguire
 * @returns {Object} Nuovo stato
 */
const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
        error: null,
      };

    case ADD_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
        error: null,
      };

    case UPDATE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
        error: null,
      };

    case DELETE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter(
          (exp) => exp._id !== action.payload
        ),
        error: null,
      };

    case SET_EXPERIENCES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_EXPERIENCES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default experiencesReducer;