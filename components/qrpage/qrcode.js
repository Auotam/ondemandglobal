import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import { Card } from "@mui/material";

const Qrcode = () => {
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

    <Card >
                       
    <div className="user-card">
              <div className="user-card-img">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" />
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
          </Card>
      

  );
};

export default Qrcode;
