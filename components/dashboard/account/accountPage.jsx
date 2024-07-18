import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import useUserData from '@/utils/UseUserdata'; // Update with your actual path
  import Layout from '@/components/dashboard/layout';
  import Wrapper from '@/layout/wrapper';
  import SEO from '@/components/seo';
  import * as yup from 'yup';

  const AccountPage = () => {
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
    <main className="main-wrapper">
    
    <section className="section">
      <div className="container-fluid">
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title">
                <h2>Settings</h2>
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card-style settings-card-1 mb-30">
              <div className="title mb-30 d-flex justify-content-between align-items-center">
                <h6>My Profile</h6>
                <button className="border-0 bg-transparent">
                  <i className="lni lni-pencil-alt"></i>
                </button>
              </div>
              <div className="profile-info">
                <div className="d-flex align-items-center mb-30">
                  <div className="profile-image">
                  <img
                      className="widthimage mr-2 w-100"
                      src="/assets/images/man.png"
                    />
                    <div className="update-image">
                      <input type="file" />
                      <label for=""><i className="lni lni-cloud-upload"></i></label>
                    </div>
                  </div>
                  <div className="profile-meta">
                    <h5 className="text-bold text-dark mb-10">{userData.user.name}</h5>
                    <p className="text-sm text-gray">{formData.userId}</p>
                  </div>
                </div>
                <div className="input-style-1">
                  <label>Email</label>
                  <input type="email" placeholder="admin@example.com" value={formData.email} />
                </div>
                
                <div className="input-style-1">
                  <label>Phone</label>
                  <input type="text" placeholder="www.uideck.com" value={formData.emergencyPhone} />
                </div>
                <div className="input-style-1">
                  <label>Bio</label>
                  <textarea placeholder="Write your bio here" rows="4">
    Crafted for – Business, Startup, SaaS, Apps, Event, Software, Agency, Resume and Portfolio. All Landing Pages comes with clean design and responsive layout. Also packed with all essential sections, elements, and features you need to launch</textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-style settings-card-2 mb-30">
              <div className="title mb-30">
                <h6>My Profile</h6>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-12">
                    <div className="input-style-1">
                      <label>Full Name</label>
                      <input type="text" placeholder="Full Name" value={userData.user.name} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-style-1">
                      <label>Email</label>
                      <input type="email" placeholder="Email" value={userData.user.email} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-style-1">
                      <label>Insurance</label>
                      <input type="text" placeholder="Company" value={formData.InsuranceProvider} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-style-1">
                      <label>Address</label>
                      <input type="text" placeholder="Address" value={formData.InsuranceProvider} />
                    </div>
                  </div>
                  <div className="col-xxl-4">
                    <div className="input-style-1">
                      <label>City</label>
                      <input type="text" placeholder="City" value={formData.city} />
                    </div>
                  </div>
                  <div className="col-xxl-4">
                    <div className="input-style-1">
                      <label>Zip Code</label>
                      <input type="text" placeholder="Zip Code" value={formData.zipCode} />
                    </div>
                  </div>

                  <div className="col-xxl-4">
                    <div className="input-style-1">
                      <label>Country</label>
                      <input type="text" placeholder="Zip Code" value={formData.county} />
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="input-style-1">
                      <label>Medical Alert</label>
                      <textarea placeholder="Type here" rows="6" value={formData.medicalAlert}></textarea>
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <button className="main-btn primary-btn btn-hover">
                      Update Profile
                    </button>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </main>
  )
}

export default AccountPage