export const SET_USER = "SET_USER";
export const SET_USERS_ARRAY = "SET_USERS_ARRAY";

// AZIONI PER LE ESPERIENZE
export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const SET_EXPERIENCES_LOADING = "SET_EXPERIENCES_LOADING";
export const SET_EXPERIENCES_ERROR = "SET_EXPERIENCES_ERROR";

// AZIONI PER L'UPLOAD DELLE IMMAGINI
export const SET_PROFILE_IMAGE_LOADING = "SET_PROFILE_IMAGE_LOADING";
export const SET_PROFILE_IMAGE_SUCCESS = "SET_PROFILE_IMAGE_SUCCESS";
export const SET_PROFILE_IMAGE_ERROR = "SET_PROFILE_IMAGE_ERROR";

// Costanti per l'upload dell'immagine di copertina
export const SET_COVER_IMAGE_LOADING = "SET_COVER_IMAGE_LOADING";
export const SET_COVER_IMAGE_SUCCESS = "SET_COVER_IMAGE_SUCCESS";
export const SET_COVER_IMAGE_ERROR = "SET_COVER_IMAGE_ERROR";

//PER IL PROPRIO PROFILO
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

//PER LA RICERCA DELLA SEARCHBAR :)
export const setUsersArray = (users) => ({
  type: SET_USERS_ARRAY,
  payload: users,
});

// AZIONI PER LE ESPERIENZE
export const setExperiences = (experiences) => ({
  type: SET_EXPERIENCES,
  payload: experiences,
});

export const addExperience = (experience) => ({
  type: ADD_EXPERIENCE,
  payload: experience,
});

export const updateExperience = (experience) => ({
  type: UPDATE_EXPERIENCE,
  payload: experience,
});

export const deleteExperience = (experienceId) => ({
  type: DELETE_EXPERIENCE,
  payload: experienceId,
});

export const setExperiencesLoading = (loading) => ({
  type: SET_EXPERIENCES_LOADING,
  payload: loading,
});

export const setExperiencesError = (error) => ({
  type: SET_EXPERIENCES_ERROR,
  payload: error,
});

// AZIONI PER L'UPLOAD DELLE IMMAGINI
export const setProfileImageLoading = (loading) => ({
  type: SET_PROFILE_IMAGE_LOADING,
  payload: loading,
});

export const setProfileImageSuccess = (imageUrl) => ({
  type: SET_PROFILE_IMAGE_SUCCESS,
  payload: imageUrl,
});

export const setProfileImageError = (error) => ({
  type: SET_PROFILE_IMAGE_ERROR,
  payload: error,
});

// Action creators per l'upload dell'immagine di copertina
export const setCoverImageLoading = (loading) => ({
  type: SET_COVER_IMAGE_LOADING,
  payload: loading,
});

export const setCoverImageSuccess = (imageUrl) => ({
  type: SET_COVER_IMAGE_SUCCESS,
  payload: imageUrl,
});

export const setCoverImageError = (error) => ({
  type: SET_COVER_IMAGE_ERROR,
  payload: error,
});

// THUNK ACTION PER L'UPLOAD DELL'IMMAGINE DEL PROFILO
export const uploadProfileImage = (userId, imageFile) => {
  return async (dispatch) => {
    dispatch(setProfileImageLoading(true));
    try {
      // Importo il servizio di upload
      const { uploadProfileImage: uploadService } = await import('../../services/imageUploadService');
      
      // Eseguo l'upload
      const result = await uploadService(userId, imageFile);
      
      // Aggiorno lo stato dell'utente con la nuova immagine
      dispatch(setProfileImageSuccess(result.image || result));
      
      // Ricarico i dati dell'utente per avere l'immagine aggiornata
      const response = await fetch(`${API_BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser(userData));
      }
      
      dispatch(setProfileImageLoading(false));
      return result;
    } catch (error) {
      dispatch(setProfileImageError(error.message));
      dispatch(setProfileImageLoading(false));
      throw error;
    }
  };
};

// THUNK ACTION PER L'UPLOAD DELL'IMMAGINE DI COPERTINA
export const uploadCoverImage = (userId, imageFile) => {
  return async (dispatch) => {
    dispatch(setCoverImageLoading(true));
    try {
      // Importo il servizio di upload per l'immagine di copertina
      const { uploadCoverImage: uploadCoverService } = await import('../../services/imageUploadService');
      
      // Eseguo l'upload dell'immagine di copertina
      const result = await uploadCoverService(userId, imageFile);
      
      // Aggiorno lo stato con la nuova immagine di copertina
      dispatch(setCoverImageSuccess(result.coverImage || result));
      
      // Ricarico i dati dell'utente per avere l'immagine di copertina aggiornata
      const response = await fetch(`${API_BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser(userData));
      }
      
      dispatch(setCoverImageLoading(false));
      return result;
    } catch (error) {
      dispatch(setCoverImageError(error.message));
      dispatch(setCoverImageLoading(false));
      throw error;
    }
  };
};

// THUNK ACTIONS PER LE CHIAMATE API
const API_BASE_URL = "https://striveschool-api.herokuapp.com/api/profile";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NzcxNDE2MjdjNjAwMTVmOGM1NjQiLCJpYXQiOjE3NTY3MjI5NjQsImV4cCI6MTc1NzkzMjU2NH0.N8tIO-J30NgFtgpwTRBWoX-nLnWcJqYp9V738bTZVv8";

// Fetch delle esperienze
export const fetchExperiences = (userId) => {
  return async (dispatch) => {
    dispatch(setExperiencesLoading(true));
    dispatch(setExperiencesError(null));
    
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Errore nel caricamento delle esperienze");
      }
      
      const experiences = await response.json();
      dispatch(setExperiences(experiences));
    } catch (error) {
      dispatch(setExperiencesError(error.message));
    } finally {
      dispatch(setExperiencesLoading(false));
    }
  };
};

// Creazione di una nuova esperienza
export const createExperience = (userId, experienceData) => {
  return async (dispatch) => {
    dispatch(setExperiencesLoading(true));
    dispatch(setExperiencesError(null));
    
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/experiences`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(experienceData),
      });
      
      if (!response.ok) {
        throw new Error("Errore nella creazione dell'esperienza");
      }
      
      const newExperience = await response.json();
      dispatch(addExperience(newExperience));
    } catch (error) {
      dispatch(setExperiencesError(error.message));
    } finally {
      dispatch(setExperiencesLoading(false));
    }
  };
};

// Aggiornamento di un'esperienza
export const editExperience = (userId, experienceId, experienceData) => {
  return async (dispatch) => {
    dispatch(setExperiencesLoading(true));
    dispatch(setExperiencesError(null));
    
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/experiences/${experienceId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(experienceData),
      });
      
      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento dell'esperienza");
      }
      
      const updatedExperience = await response.json();
      dispatch(updateExperience(updatedExperience));
    } catch (error) {
      dispatch(setExperiencesError(error.message));
    } finally {
      dispatch(setExperiencesLoading(false));
    }
  };
};

// Eliminazione di un'esperienza
export const removeExperience = (userId, experienceId) => {
  return async (dispatch) => {
    dispatch(setExperiencesLoading(true));
    dispatch(setExperiencesError(null));
    
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/experiences/${experienceId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Errore nell'eliminazione dell'esperienza");
      }
      
      dispatch(deleteExperience(experienceId));
    } catch (error) {
      dispatch(setExperiencesError(error.message));
    } finally {
      dispatch(setExperiencesLoading(false));
    }
  };
};
