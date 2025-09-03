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
 * Upload dell'immagine di copertina del profilo (salvataggio locale)
 * @param {string} userId - ID dell'utente
 * @param {File} imageFile - File immagine da caricare
 * @returns {Promise} - Promise con l'URL dell'immagine
 */
export const uploadCoverImage = async (userId, imageFile) => {
  try {
    // Converto il file in base64 per il salvataggio locale
    const base64Image = await convertFileToBase64(imageFile);
    
    // Salvo l'immagine nel localStorage con chiave specifica per l'utente
    const storageKey = `coverImage_${userId}`;
    localStorage.setItem(storageKey, base64Image);
    
    console.log("Immagine di copertina salvata localmente per l'utente:", userId);
    
    // Ritorno un oggetto simile a quello che ritornerebbe l'API
    return {
      coverImage: base64Image,
      message: "Immagine di copertina salvata con successo"
    };
  } catch (error) {
    console.error("Errore durante il salvataggio dell'immagine di copertina:", error);
    throw error;
  }
};

/**
 * Funzione helper per convertire un file in base64
 * @param {File} file - File da convertire
 * @returns {Promise<string>} - Promise con la stringa base64
 */
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

/**
 * Recupera l'immagine di copertina salvata localmente
 * @param {string} userId - ID dell'utente
 * @returns {string|null} - URL base64 dell'immagine o null se non trovata
 */
export const getCoverImage = (userId) => {
  const storageKey = `coverImage_${userId}`;
  return localStorage.getItem(storageKey);
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