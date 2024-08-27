import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';

const EditDetails = ({ selectedEmail }) => {
  const [formData, setFormData] = useState({
    userId: '',
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

  const userData = useUserData();

  useEffect(() => {
    const fetchData = async () => {
      if (selectedEmail) {
        try {
          setLoadingFormData(true);
          const response = await axios.post("/api/Auth/formvalue/formvalue", { email: selectedEmail });
          setFormData(response.data.data);
          setLoadingFormData(false);
        } catch (error) {
          setError("User not added our details yet.");
          setLoadingFormData(false);
        }
      }
    };

    fetchData();
  }, [selectedEmail]);

  if (loadingFormData) return <div>Loading form data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className='left-40'>
      <ToastContainer />
      <div className="form-elements-wrapper">
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6 ml-20">
              <div className="title ">
                <h2>User Details</h2>
              </div>
            </div>
            <div className="col-md-6">
         
            </div>
          </div>
        </div>
        <div className='card-style settings-card-1 mb-30'>
          <table className="table">
            <tbody>
              <tr>
                <td><label htmlFor="firstName">First Name</label></td>
                <td>{formData.firstName}</td>
              </tr>
              <tr>
                <td><label htmlFor="lastName">Last Name</label></td>
                <td>{formData.lastName}</td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email</label></td>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <td><label htmlFor="emergencyPhone">Emergency Phone</label></td>
                <td>{formData.emergencyPhone}</td>
              </tr>
              <tr>
                <td><label htmlFor="medicalAlert">Medical Alert</label></td>
                <td>{formData.medicalAlert}</td>
              </tr>
              <tr>
                <td><label htmlFor="Covid19Tested">Covid Test</label></td>
                <td>{formData.Covid19Tested}</td>
              </tr>
              <tr>
                <td><label htmlFor="Covid19vaccinated">Covid 19 Vaccinated</label></td>
                <td>{formData.Covid19vaccinated}</td>
              </tr>
              <tr>
                <td><label htmlFor="InsuranceProvider">Insurance Provider</label></td>
                <td>{formData.InsuranceProvider}</td>
              </tr>
              <tr>
                <td><label htmlFor="nonprescribedrugs">Non-prescribed Drugs</label></td>
                <td>{formData.nonprescribedrugs}</td>
              </tr>
              <tr>
                <td><label htmlFor="allergies">Allergies</label></td>
                <td>{formData.allergies}</td>
              </tr>
              <tr>
                <td><label htmlFor="city">City</label></td>
                <td>{formData.city}</td>
              </tr>
              <tr>
                <td><label htmlFor="county">County</label></td>
                <td>{formData.county}</td>
              </tr>
              <tr>
                <td><label htmlFor="zipCode">Zip Code</label></td>
                <td>{formData.zipCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default EditDetails;
