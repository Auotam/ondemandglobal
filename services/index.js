export const register_user = async (formData) => {
    try {
      const res = await fetch('/api/Auth/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error in register_user (service) => ', error);
      throw new Error('Registration failed. Please try again.');
    }
  };
  
  export const login_user = async (formData) => {
    try {
      const res = await fetch('/api/Auth/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error in login_user (service) => ', error);
      throw new Error('Login failed. Please try again.');
    }
  };
  
  export const check_auth = async () => {
    try {
      const res = await fetch('/api/Auth/check', {
        headers: {
          'Content-Type': 'application/json',
          // Include authentication token if required by your API
          // Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error in check_auth (service) => ', error);
      return { isAuthenticated: false };
    }
  };
  
  export const submit_form_data = async (formData) => {
    try {
      const res = await fetch('/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error submitting form data:', error);
      throw new Error('Failed to submit form data. Please try again.');
    }
  };
  