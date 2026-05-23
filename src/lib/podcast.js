import api from "./api";

/**
 * @typedef {Object} Podcast
 * @property {string} tema
 * @property {string} titulo
 * @property {string} descripcion
 * @property {string} contenido
 * @property {string} user_id
 */

/**
 * @returns {Promise<Podcast[]>}
 */
export async function getPodcast() {
  const response = await api.get("/podcast");
  return response.data;
}

/**
 * @param {string} id
 * @returns {Promise<Podcast>}
 */
export async function getPodcastById(id) {
  const response = await api.get(`/podcast/${id}`);
  return response.data;
}

/**
 * @param {Partial<Podcast>} data
 * @returns {Promise<Podcast>}
 */
export async function createPodcast(data) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  const response = await api.post("/podcast", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}

/**
 * @param {string} id
 * @param {Partial<Podcast>} data
 * @returns {Promise<Podcast>}
 */
export async function updatePodcast(id, data) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  const response = await api.put(`/podcast/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}

/**
 * @param {string} id
 * @returns {Promise<void>}
 */
export async function deletePodcast(id) {
  await api.delete(`/podcast/${id}`);
}