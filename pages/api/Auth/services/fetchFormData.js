// services/formDataService.js

import axios from 'axios';

const BASE_URL = '/api';

export const fetchFormData = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/Auth/formData/${email}`);
    return response.data.formData;
  } catch (error) {
    console.error('Error fetching form data:', error);
    throw error;
  }
};

export const saveFormData = async (email, formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/saveFormData`, { email, formData });
    return response.data; // Optionally return response data if needed
  } catch (error) {
    console.error('Error saving form data:', error);
    throw error;
  }
};
