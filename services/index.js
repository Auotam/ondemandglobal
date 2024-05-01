

export const register_user = async (formData) => {
    try {
        const res = await fetch('http://localhost:3000/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in register_user (service) => ', error);
        return error.message
    }
};


export const login_user = async (formData) => {
    try {
        const res = await fetch('http://localhost:3000/api/Auth/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return error.message
    }
};

export const check_auth = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/Auth/check', {
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