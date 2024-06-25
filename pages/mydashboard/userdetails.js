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
      <SEO pageTitle={"Billing "} />
      <Layout>
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

        <div className="htcard">

        <div class="card">
    <div class="img">
      <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    </div>
    <div class="infos">
      <div class="name">
        <h2>Bradley Steve</h2>
        <h4>@bradsteve</h4>
      </div>
      <p class="text">
        I'm a Front End Developer, follow me to be the first 
        who see my new work.
      </p>
      <ul class="stats">
        <li>
          <h3>15K</h3>
          <h4>Views</h4>
        </li>
        <li>
          <h3>82</h3>
          <h4>Projects</h4>
        </li>
        <li>
          <h3>1.3M</h3>
          <h4>Followers</h4>
        </li>
      </ul>
      <div class="links">
        <button class="follow">Follow</button>
        <button class="view">View profile</button>
      </div>
    </div>
  </div>
  </div>

      </Layout>
    </Wrapper>
  );
};

export default FormDataComponent;
