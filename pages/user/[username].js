import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";

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
    <Wrapper>
    <main className="left-40">
          <div className="main-wrapper form-elements-wrapper pl-20">
            <div>
              <h2>Form Data</h2>
              <ul>
                <li>
                  <span><strong>First Name:</strong></span>
                  <span>{formData.firstName || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Last Name:</strong></span>
                  <span>{formData.lastName || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Email:</strong></span>
                  <span>{formData.email || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Emergency Phone:</strong></span>
                  <span>{formData.emergencyPhone || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Medical Alert:</strong></span>
                  <span>{formData.medicalAlert || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Covid19 Tested:</strong></span>
                  <span>{formData.Covid19Tested || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Covid19 Vaccinated:</strong></span>
                  <span>{formData.Covid19vaccinated || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Insurance Provider:</strong></span>
                  <span>{formData.InsuranceProvider || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Non-prescribed Drugs:</strong></span>
                  <span>{formData.nonprescribedrugs || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Allergies:</strong></span>
                  <span>{formData.allergies || "N/A"}</span>
                </li>
                <li>
                  <span><strong>City:</strong></span>
                  <span>{formData.city || "N/A"}</span>
                </li>
                <li>
                  <span><strong>County:</strong></span>
                  <span>{formData.county || "N/A"}</span>
                </li>
                <li>
                  <span><strong>Zip Code:</strong></span>
                  <span>{formData.zipCode || "N/A"}</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
    </Wrapper>
  );
};

export default FormDataComponent;
