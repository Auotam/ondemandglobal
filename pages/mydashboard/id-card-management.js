import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import { Card } from "@mui/material";
import QRCodeWithLogoComponent from "@/components/qrcodelogo";

const Idcardmanagement = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);

  const userData = useUserData(); // Get user data using useUserData
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

  const qrCodeValue = `https://ondemand.global/user/${emailParts[0]}-${userid}`;
  console.log("qrmana", qrCodeValue);

  return (
    <Wrapper>
      <SEO pageTitle={'OnDemand'} />
      <Layout>
      <div className="main-wrapper">
          <div className="container-fluid">

         
            <div className="card mt-4 px-4 py-4">
        <div className="id-card-tag"></div>
        <div className="id-card-tag-strip"></div>
        <div className="id-card-hook"></div>
        <div className="id-card-holder">
          <div className="id-card">
            <div className="header">
              <img src="/assets/images/logo-white.png" />
            </div>
            <h1>{formData.firstName || "N/A"} {formData.lastName || "N/A"}</h1>
            <h2>{formData.email || "N/A"} </h2>
            <div className="qr-code">
              <QRCodeWithLogoComponent value={qrCodeValue} />
            </div>
            <h3>{formData.email || "N/A"}</h3>
            <h3><span>Phone:</span>{formData.emergencyPhone || "N/A"}</h3>
            <hr />
            <h6><span>Insurance Provider:</span>{formData.InsuranceProvider || "N/A"}</h6>
          </div>
        </div>
        </div>
        </div>
        </div>
              </Layout>
    </Wrapper>
  );
};

export default Idcardmanagement;
