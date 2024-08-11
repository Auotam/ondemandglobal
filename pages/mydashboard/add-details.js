import React, { useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';

const generateUserId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < 5; i++) {
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return userId;
};

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  emergencyPhone: yup.string().required('Emergency Phone is required'),
  medicalAlert: yup.string().required('Medical Alert is required'),
  Covid19Tested: yup.string().required('Covid19 Test Status is required'),
  Covid19vaccinated: yup.string().required('Covid19 Vaccination Status is required'),
  InsuranceProvider: yup.string().required('Insurance Provider is required'),
  nonprescribedrugs: yup.string().required('Non-prescribed Drugs are required'),
  allergies: yup.string().required('Allergies are required'),
  city: yup.string().required('City is required'),
  county: yup.string().required('County is required'),
  zipCode: yup.string().required('Zip Code is required'),
});

const Form = () => {
  const userData = useUserData();

  const formik = useFormik({
    initialValues: {
      userId: generateUserId(),
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
      zipCode: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log('Data to submit:', values);
      try {
        const response = await axios.post('/api/Auth/submitForm', values);
        console.log('Response:', response.data);
        toast.success('Form submitted successfully!');
        resetForm({
          values: {
            ...values,
            userId: generateUserId(),
            email: userData.user.email,
          },
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form!');
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (userData && userData.user.email) {
      formik.setFieldValue('email', userData.user.email);
    }
    if (userData && userData.userDataAvailable) {
      formik.setValues({
        ...formik.values,
        ...userData.formData,
      });
    }
  }, [userData]);

  if (!userData) {
    return null;
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
            <div className='card card-style settings-card-1'>
              <form onSubmit={formik.handleSubmit} className="container">
                <div className="row">
                  <div className="col-md-4 input-style-1">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                      readOnly
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Emergency Phone</label>
                    <input
                      type="text"
                      name="emergencyPhone"
                      placeholder="Enter Your Emergency Phone"
                      value={formik.values.emergencyPhone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.emergencyPhone && formik.errors.emergencyPhone ? (
                      <div className="error">{formik.errors.emergencyPhone}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Covid Test Status</label>
                    <input
                      type="text"
                      name="Covid19Tested"
                      placeholder="e.g., Positive or Negative"
                      value={formik.values.Covid19Tested}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.Covid19Tested && formik.errors.Covid19Tested ? (
                      <div className="error">{formik.errors.Covid19Tested}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Covid Vaccinated</label>
                    <input
                      type="text"
                      name="Covid19vaccinated"
                      placeholder="e.g., Yes or No"
                      value={formik.values.Covid19vaccinated}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.Covid19vaccinated && formik.errors.Covid19vaccinated ? (
                      <div className="error">{formik.errors.Covid19vaccinated}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Insurance Provider</label>
                    <input
                      type="text"
                      name="InsuranceProvider"
                      placeholder="Enter Your Insurance Provider Details"
                      value={formik.values.InsuranceProvider}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.InsuranceProvider && formik.errors.InsuranceProvider ? (
                      <div className="error">{formik.errors.InsuranceProvider}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Non-prescribed Drugs</label>
                    <input
                      type="text"
                      name="nonprescribedrugs"
                      placeholder="Non-prescribed Drugs"
                      value={formik.values.nonprescribedrugs}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.nonprescribedrugs && formik.errors.nonprescribedrugs ? (
                      <div className="error">{formik.errors.nonprescribedrugs}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Allergies</label>
                    <input
                      type="text"
                      name="allergies"
                      placeholder="Enter Your Allergies"
                      value={formik.values.allergies}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.allergies && formik.errors.allergies ? (
                      <div className="error">{formik.errors.allergies}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter Your City"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <div className="error">{formik.errors.city}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>County</label>
                    <input
                      type="text"
                      name="county"
                      placeholder="Enter Your County"
                      value={formik.values.county}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.county && formik.errors.county ? (
                      <div className="error">{formik.errors.county}</div>
                    ) : null}
                  </div>
                  <div className="col-md-4 input-style-1">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Enter Your Zip Code"
                      value={formik.values.zipCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                      <div className="error">{formik.errors.zipCode}</div>
                    ) : null}
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="main-btn primary-btn btn-hover w-100"
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </Layout>
    </Wrapper>
  );
};

export default Form;
