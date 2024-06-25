import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import QRCode from "qrcode.react"; // Import QRCode component

const FormDataComponent = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);

  const userData = useUserData(); // Get user data using useUserData

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData && userData.user && userData.user.email) {
          setLoadingFormData(true);
          const userEmail = userData.user.email;
          const response = await axios.post("/api/Auth/formvalue", {
            email: userEmail,
          });
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

  return (
  
        <div className="main-wrapper  pl-20">
          <div className="container-fluid">
            <div className="title-wrapper pt-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <h2>QR Management</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#0">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Qr Management
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-card">
              <div className="user-card-img">
                <QRCode value={JSON.stringify(formData)} /> {/* Generate QR code */}
              </div>
              <div className="user-card-info">
                <h2>{formData.firstName || "N/A"} {formData.lastName || "N/A"}</h2>
                <p><span>Email:</span> {formData.email || "N/A"}</p>
                <p><span>Insurance Provider:</span>{formData.InsuranceProvider || "N/A"}</p>
                <p><span>Emergency Phone:</span>{formData.emergencyPhone || "N/A"}</p>
                <p><span>Medical Alert</span> {formData.medicalAlert || "N/A"}</p>
                <p><span>Covid19 Tested</span>{formData.Covid19Tested || "N/A"}</p>
                <p><span>Covid 19 Vaccinated</span> {formData.Covid19vaccinated || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
   
  );
};

export default FormDataComponent;
