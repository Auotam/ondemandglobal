// pages/dashboard.js or any relevant parent component

import React, { useState, useEffect } from "react";
import axios from "axios";
import FormDataComponent from '../../pages/user/[id]';

const Dashboard = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = "example@email.com"; // Replace with your dynamic id or parameter
      try {
        setLoadingFormData(true);
        const response = await axios.get(`/api/Auth/formvalue/${id}`);
        setFormData(response.data.data); // Assuming response.data.data contains form data
        setLoadingFormData(false);
      } catch (error) {
        setError(error.response ? error.response.data.error : error.message);
        setLoadingFormData(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {formData && (
        <div>
          <FormDataComponent formData={formData} loadingFormData={loadingFormData} error={error} />
        </div>
      )}
      {/* You can render multiple instances of FormDataComponent here with different props */}
    </div>
  );
};

export default Dashboard;
