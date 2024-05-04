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
    await axios.post(`${BASE_URL}/formData`, { email, formData });
  } catch (error) {
    console.error('Error saving form data:', error);
    throw error;
  }
};
