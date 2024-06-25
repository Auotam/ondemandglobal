import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';

const Form = () => {
  const userData = useUserData();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emergencyPhone: '',
    medicalAlert: '',
    Covid19Tested: '',
    Covid19vaccinated: '',
    InsuranceProvider: '',
    nonprescribedrugs: '',
    allergies: '',
    city: '',
    county: '',
    zipCode: ''
  });

  const [loading, setLoading] = useState(false);

  // Update form data with user's email once userData is available
  useEffect(() => {
    if (userData && userData.user.email) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: userData.user.email,
      }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (!userData) {
    return null; 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/Auth/submitForm', formData);
      console.log('Response:', response.data);
      toast.success('Form submitted successfully!');
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: userData.user.email,
        emergencyPhone: '',
        medicalAlert: '',
        Covid19Tested: '',
        Covid19vaccinated: '',
        InsuranceProvider: '',
        nonprescribedrugs: '',
        allergies: '',
        city: '',
        county: '',
        zipCode: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle={'Billing '} />
      <Layout>
        <main className='left-40'>
          <ToastContainer />
          <div className="main-wrapper form-elements-wrapper pl-20">
            <div className="title-wrapper pt-30 pl-20">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <h2>Add Details</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#0">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Add Details
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="container">
              <div className="row">
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="emergencyPhone"
                    placeholder="Emergency Phone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="medicalAlert"
                    placeholder="Medical Alert"
                    value={formData.medicalAlert}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="Covid19Tested"
                    placeholder="Covid19 Tested"
                    value={formData.Covid19Tested}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="Covid19vaccinated"
                    placeholder="Covid19 Vaccinated"
                    value={formData.Covid19vaccinated}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="InsuranceProvider"
                    placeholder="Insurance Provider"
                    value={formData.InsuranceProvider}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="nonprescribedrugs"
                    placeholder="Non-prescribed Drugs"
                    value={formData.nonprescribedrugs}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="allergies"
                    placeholder="Allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="county"
                    placeholder="County"
                    value={formData.county}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 input-style-1">
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="main-btn primary-btn btn-hover" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Details'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </Layout>
    </Wrapper>
  );
};

export default Form;
