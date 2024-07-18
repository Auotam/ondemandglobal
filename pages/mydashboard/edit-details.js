  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import useUserData from '@/utils/UseUserdata'; // Update with your actual path
  import Layout from '@/components/dashboard/layout';
  import Wrapper from '@/layout/wrapper';
  import SEO from '@/components/seo';
  import * as yup from 'yup';

  const EditDetails = () => {
    const [formData, setFormData] = useState({
      userId: '', // Initial userId state
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
    const [loadingFormData, setLoadingFormData] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const userData = useUserData();
    console.log("User data:", userData);

    // Fetch form data on component mount or when user data changes
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (userData && userData.user && userData.user.email) {
            setLoadingFormData(true);
            const userEmail = userData.user.email;
            const response = await axios.post("/api/Auth/formvalue/formvalue", { email: userEmail });
            console.log("Form data response:", response.data);
            setFormData(response.data.data);
            setLoadingFormData(false);
          } else {
            throw new Error("User data not available");
          }
        } catch (error) {
          setError(error.response ? error.response.data.error : error.message);
          setLoadingFormData(false);
        }
      };

      if (userData) {
        fetchData();
      }
    }, [userData]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      const formDataToSend = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        // Remove _id from here if present
        emergencyPhone: formData.emergencyPhone,
        medicalAlert: formData.medicalAlert,
        Covid19Tested: formData.Covid19Tested,
        Covid19vaccinated: formData.Covid19vaccinated,
        InsuranceProvider: formData.InsuranceProvider,
        nonprescribedrugs: formData.nonprescribedrugs,
        allergies: formData.allergies,
        city: formData.city,
        county: formData.county,
        zipCode: formData.zipCode
      };
    
      try {
        console.log('Submitting formData:', formDataToSend);
    
        const response = await axios.post('/api/Auth/submitForm', formDataToSend);
        console.log('Form submission response:', response.data);
        toast.success('Form submitted successfully!');
    
        // Reset form after successful submission
        setFormData({
          userId: '', // Reset userId or generate a new one if needed
          firstName: '',
          lastName: '',
          email: userData.user.email, // Ensure email is set correctly
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
        toast.error('Error submitting form: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    
    
    // Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    };

    if (!userData) {
      return <div>Loading user data...</div>;
    }

    if (loadingFormData) {
      return <div>Loading form data...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

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
                      <h2>Edit Details</h2>
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
                            Edit Details
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-style settings-card-1 mb-30'>
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
                      {loading ? 'Sending...' : 'Submit Details'}
                    </button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </main>
        </Layout>
      </Wrapper>
    );
  };

  export default EditDetails;
