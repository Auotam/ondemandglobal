import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import QRCode from "qrcode.react"; // Import QRCode component
import QRCodeWithLogoComponent from "@/components/qrcodelogo";

const DashQR = () => {
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
  const userid = formData.userId
  const qrCodeValue = `http://localhost:3000/user/${emailParts[0]}-${userid}`;
  console.log("qrmana",qrCodeValue)

  return (
    <>

{/* 
     <div className="user-card">
              <div className="user-card-img">
                <QRCode value={qrCodeValue} /> 
                <QRCodeWithLogoComponent value={qrCodeValue} />
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
            </div> */}


<section >
    <div className="container  h-100">
      <div className="row d-flex justify-content-start align-items-start h-100 w-100">
        <div className="col col-lg-8 mb-4 mb-lg-0">
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center text-white" >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  className="img-fluid my-5"
                
                />
                <h5>Marie Horwitz</h5>
                <p>Web Designer</p>
                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">info@example.com</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">123 456 789</p>
                    </div>
                  </div>
                  <h6>Projects</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Recent</h6>
                      <p className="text-muted">Lorem ipsum</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p className="text-muted">Dolor sit amet</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 mb-4 mb-lg-0"> <QRCodeWithLogoComponent value={qrCodeValue} /></div>

      </div>
    </div>
  </section>
            
            {/* <section className="w-100 px-4 py-5" >
  <div className="row d-flex justify-content-center">
    <div className="col col-md-9 col-lg-7 col-xl-6">
      <div className="card">
        <div className="card-body p-4">
          <div className="d-flex">
            <div className="flex-shrink-0">
            <QRCodeWithLogoComponent value={qrCodeValue} />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">   <h2>{formData.firstName || "N/A"} {formData.lastName || "N/A"}</h2></h5>
              <p className="mb-2 pb-1">{formData.email || "N/A"}</p>
              <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                <div>
                  <p className="small text-muted mb-1"><h2>hkhj</h2></p>
                  <p className="mb-0">41</p>
                </div>
                <div className="px-3">
                  <p className="small text-muted mb-1">Emg Number</p>
                  <p className="mb-0">{formData.emergencyPhone || "N/A"}</p>
                </div>
                <div>
                  <p className="small text-muted mb-1">Rating</p>
                  <p className="mb-0">8.5</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
            </>
  );
};

export default DashQR;
