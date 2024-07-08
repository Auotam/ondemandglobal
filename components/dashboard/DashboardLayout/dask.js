import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import QRCode from 'qrcode.react';
import Qrcode from '@/components/qrpage/qrcode';
import QRCodeWithLogoComponent from '@/components/qrcodelogo';
import Daskqr from "@/components/qrpage/dashqr";
import dayjs from 'dayjs';

const Dask = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState('');

  const userData = useUserData();
  console.log("id card management ", userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData && userData.user && userData.user.email) {
          setLoadingFormData(true);
          const userEmail = userData.user.email;
          const response = await axios.post("/api/Auth/formvalue/formvalue", {
            email: userEmail,
          });
          console.log(response);
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

  useEffect(() => {
    if (formData) {
      const interval = setInterval(() => {
        const createdAt = dayjs(formData.createdAt);
        const expirationDate = createdAt.add(7, 'day');
        const now = dayjs();
        const diff = expirationDate.diff(now);

        if (diff <= 0) {
          setCountdown('Expired');
          clearInterval(interval);
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / 1000 / 60) % 60);
          const seconds = Math.floor((diff / 1000) % 60);

          setCountdown(`${days}D  ${hours}H ${minutes}M ${seconds}S`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [formData]);

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  if (loadingFormData) {
    return <div>Loading form data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!formData) {
    return <div>No form data found for the user</div>;
  }

  // Construct the QR code value dynamically using only the part before '@'
  const emailParts = formData.email.split('@');
  const userid = formData.userId;
  console.log("formdata", formData);

  const qrCodeValue = `http://localhost:3000/user/${emailParts[0]}-${userid}`;
  console.log("qrmana", qrCodeValue);

  console.log("data on desk page", userData);

  return (
    <div className='main-wrapper'>
      <section className="section">
        <div className="container-fluid">
          <div className="title-wrapper pt-30 mb-10">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Dashboard</h2>
                </div>
              </div>
             
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="icon-card mb-30">
                <div className="mr-10 rounded">
                  <img className='widthimage mr-2' src='/assets/images/team-7.jpg' />
                </div>
                <div className="content">
                  <h6 className="mb-10">Welcome</h6>
                  <h3 className="text-bold mb-10">{userData.user.name}</h3>
                  <p className="text-sm text-success">
                    <i className="lni lni-arrow-up"></i>
                    <span className="text-gray">{userData.user.email}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon primary">
                  <i className="lni lni-credit-cards"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10 text-danger">Exipry In</h6>
                  <h3 className="text-bold mb-10"><span className="text-green font-md fontzie18">{countdown}</span></h3>
                  
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon primary">
                  <i className="lni lni-credit-cards"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10 text-success">Your Plan</h6>
                  <h3 className="text-bold mb-10 fontzie18">{userData.user.plan}</h3>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon orange">
                  <i className="lni lni-user"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10 text-success">Price</h6>
              
                  <p className="text-sm text-danger">
                    <i className="lni lni-arrow-down"></i> 4.99 $
                    <a href="/mydashboard/add-details" className='color--green-500,'><span className="text-gray ml-10">Pay Now</span></a>
                  </p>
                </div>
              </div>
            </div>
            <Daskqr />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dask;
