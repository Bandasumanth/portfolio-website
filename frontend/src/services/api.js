import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact Service
export const contactService = {
  submitMessage: async (data) => {
    return api.post('/contact', data);
  },
  getMessages: async () => {
    return api.get('/messages');
  },
};

export default api;
