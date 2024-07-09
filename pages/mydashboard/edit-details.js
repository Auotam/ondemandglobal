import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import QRCodeWithLogoComponent from "@/components/qrcodelogo";

const FormDataComponent = () => {
  const [formData, setFormData] = useState({
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
    emergencyPhone: "",
    medicalAlert: "",
    Covid19Tested: "",
    Covid19vaccinated: "",
    InsuranceProvider: "",
    nonprescribedrugs: "",
    allergies: "",
    city: "",
    county: "",
    zipCode: "",
  });
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);

  const userData = useUserData(); // Get user data using useUserData

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData && userData.user && userData.user.email) {
          setLoadingFormData(true);
          const userEmail = userData.user.email;
          const response = await axios.post("/api/Auth/formvalue/formvalue", {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/Auth/formvalue/update", formData);
      console.log("Form data updated successfully", response.data);
    } catch (error) {
      setError(error.response ? error.response.data.error : error.message);
    }
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

  if (!formData) {
    return <div>No form data found for the user</div>;
  }

  // Construct the QR code value dynamically using only the part before '@'
  const emailParts = formData.email.split('@');
  const qrCodeValue = `https://ondemand.global/user/${emailParts[0]}-${formData.userId}`;
  console.log("qrmana", qrCodeValue);

  return (
    <Wrapper>
      <SEO pageTitle={"Edit Details"} />
      <Layout>
        <div className="main-wrapper pl-20">
          <div className="container-fluid">
            <div className="title-wrapper pt-30">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="title">
                    <h2>Edit Details</h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#0">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Edit Details
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>User Id</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.userId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Insurance Provider</label>
                    <input
                      type="text"
                      className="form-control"
                      name="InsuranceProvider"
                      value={formData.InsuranceProvider}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Non-prescribed Drugs</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nonprescribedrugs"
                      value={formData.nonprescribedrugs}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Allergies</label>
                    <input
                      type="text"
                      className="form-control"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Emergency Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Medical Alert</label>
                    <input
                      type="text"
                      className="form-control"
                      name="medicalAlert"
                      value={formData.medicalAlert}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Covid-19 Tested</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Covid19Tested"
                      value={formData.Covid19Tested}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Covid-19 Vaccinated</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Covid19vaccinated"
                      value={formData.Covid19vaccinated}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>County</label>
                    <input
                      type="text"
                      className="form-control"
                      name="county"
                      value={formData.county}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label>QR Code</label>
                    <div className="user-card-img">
                      <QRCodeWithLogoComponent value={qrCodeValue} />
                    </div>
                  </div> */}
                </div>
              </div>
              <button type="submit" className="btn btn-primary ">Update Details</button>
            </form>
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default FormDataComponent;
