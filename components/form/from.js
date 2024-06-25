// components/Form.js
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emergencyPhone: '',
    healthInfo: '',
    healthInsurance: '',
    city: '',
    county: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("status")
      const response = await axios.post('/api/Auth/submitForm', formData);
      console.log('Response:', response.data);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        emergencyPhone: '',
        healthInfo: '',
        healthInsurance: '',
        city: '',
        county: '',
        zipCode: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input type="text" name="emergencyPhone" placeholder="Emergency Phone" value={formData.emergencyPhone} onChange={handleChange} />
      <input type="text" name="healthInfo" placeholder="Health Info" value={formData.healthInfo} onChange={handleChange} />
      <input type="text" name="healthInsurance" placeholder="Health Insurance" value={formData.healthInsurance} onChange={handleChange} />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input type="text" name="county" placeholder="County" value={formData.county} onChange={handleChange} />
      <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
