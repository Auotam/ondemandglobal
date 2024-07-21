


import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { HelpCenterTwoTone } from '@mui/icons-material';
import Wrapper from '@/layout/wrapper';
import Layout from '@/components/dashboard/layout';
import SEO from '@/components/seo';

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup.string().required('Message is required')
});

const Dashboard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/send-email', data); // Adjust the API endpoint as needed
      toast.success('Your query has been submitted successfully.');
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle={'Help and Support'} />
      <Layout>
        <main className="main-wrapper">
          <section className="tab-components">
            <div className="container-fluid">
              <div className="pt-30 pb-20">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="title">
                      <h2 className='h4'>Help and Support</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#0">Dashboard</a>
                        </li>
                     
                        <li className="breadcrumb-item active" aria-current="page">
                          Help and Support
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="form-elements-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card-style mb-30">
                      <h1 className='h4 text-primary mb-4'><HelpCenterTwoTone /> We're Here to Help You Every Step!</h1>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-style-1">
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            {...register('name')}
                          />
                          {errors.name && <p className="error">{errors.name.message}</p>}
                        </div>
                        <div className="input-style-2">
                          <input
                            type="text"
                            placeholder="Enter Your Phone"
                            {...register('phone')}
                          />
                          {errors.phone && <p className="error">{errors.phone.message}</p>}
                        </div>
                        <div className="input-style-2">
                          <input
                            type="text"
                            placeholder="Enter Your Email"
                            {...register('email')}
                          />
                          {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                        <div className="input-style-1">
                          <label>Message</label>
                          <textarea
                            placeholder="Message"
                            rows="5"
                            {...register('message')}
                          ></textarea>
                          {errors.message && <p className="error">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-rounded btn-lg main-btn primary-btn">
                          Submit Your Query
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-style mb-30">
                      <section className="vh-100">
                        <div className="">
                          <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-12 col-xl-12">
                              <div className="card">
                                <div className="card-body text-center">
                                  <div className="mt-3 mb-4">
                                    <img className="img-fluid w-100px" src="../assets/images/logo-white.png" alt="" />
                                  </div>
                                  <h4 className="mb-2">OnDemand Global</h4>
                                  <p className="text-muted mb-4">support@ondemand.global <span className="mx-2">|</span> <a href="#!">(888)723-0786</a></p>
                                  <div className="mb-4 pb-2">
                                    Minneapolis | Minnesota | 55303
                                  </div>
                                  <button type="button" className="btn btn-primary btn-rounded btn-lg main-btn primary-btn">
                                    Message now
                                  </button>
                                </div>
                              </div>
                              <div className="card mb-4 mt-20">
                                <div className="card-body p-0">
                                  <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                      <i className="fas fa-globe fa-lg text-warning"></i>
                                      <p className="mb-0">https://ondemand.global</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                      <i className="fab fa-github fa-lg"></i>
                                      <p className="mb-0">ondemand</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                      <i className="fab fa-twitter fa-lg"></i>
                                      <p className="mb-0">@ondemand</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                      <i className="fab fa-instagram fa-lg"></i>
                                      <p className="mb-0">ondemandglobal</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                      <i className="fab fa-facebook-f fa-lg"></i>
                                      <p className="mb-0">ondemandglobal</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ToastContainer />
        </main>
      </Layout>
    </Wrapper>
  );
};

export default Dashboard;
