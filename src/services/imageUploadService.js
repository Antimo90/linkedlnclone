// Servizio per l'upload delle immagini
const API_BASE_URL = "https://striveschool-api.herokuapp.com/api";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NzcxNDE2MjdjNjAwMTVmOGM1NjQiLCJpYXQiOjE3NTY3MjI5NjQsImV4cCI6MTc1NzkzMjU2NH0.N8tIO-J30NgFtgpwTRBWoX-nLnWcJqYp9V738bTZVv8";

/**
 * Upload dell'immagine del profilo utente
 * @param {string} userId - ID dell'utente
 * @param {File} imageFile - File immagine da caricare
 * @returns {Promise} - Promise con la risposta dell'API
 */
export const uploadProfileImage = async (userId, imageFile) => {
  try {
    // Creo FormData per l'upload
    const formData = new FormData();
    formData.append("profile", imageFile);

    const response = await fetch(`${API_BASE_URL}/profile/${userId}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Errore upload: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Errore durante l'upload dell'immagine del profilo:", error);
    throw error;
  }
};

/**
 * Upload dell'immagine per un'esperienza
 * @param {string} userId - ID dell'utente
 * @param {string} expId - ID dell'esperienza
 * @param {File} imageFile - File immagine da caricare
 * @returns {Promise} - Promise con la risposta dell'API
 */
export const uploadExperienceImage = async (userId, expId, imageFile) => {
  try {
    // Creo FormData per l'upload
    const formData = new FormData();
    formData.append("experience", imageFile);

    const response = await fetch(`${API_BASE_URL}/profile/${userId}/experiences/${expId}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Errore upload: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Errore durante l'upload dell'immagine dell'esperienza:", error);
    throw error;
  }
};

/**
 * Upload dell'immagine per un post
 * @param {string} postId - ID del post
 * @param {File} imageFile - File immagine da caricare
 * @returns {Promise} - Promise con la risposta dell'API
 */
export const uploadPostImage = async (postId, imageFile) => {
  try {
    // Creo FormData per l'upload
    const formData = new FormData();
    formData.append("post", imageFile);

    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Errore upload: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Errore durante l'upload dell'immagine del post:", error);
    throw error;
  }
};