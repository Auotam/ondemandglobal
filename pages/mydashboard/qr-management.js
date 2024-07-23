import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata"; // Import useUserData
import Layout from "@/components/dashboard/layout";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import QRCode from "qrcode.react"; // Import QRCode component
import QRCodeWithLogoComponent from "@/components/qrcodelogo";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form, Button } from 'react-bootstrap';
import { Card } from "@mui/material";
import DashQR from "@/components/qrpage/dashqr";

const FormDataComponent = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);
  const [shippingData, setShippingData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

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

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Shipping Data: ", shippingData);
  };

  if (!userData) {
    return <div className='d-flex align-items-center justify-content-center vh-100'>Loading QR Code...</div>;
  }

  if (loadingFormData) {
    return <div className='d-flex align-items-center justify-content-center vh-100'>Loading form data...</div>;
  }

  if (error) {
    return <div className='d-flex align-items-center justify-content-center vh-100'>Error: {error}</div>;
  }



  if (!formData) {
    return <div className="className='d-flex align-items-center justify-content-center vh-100'">No form data found for the user</div>;
  }


  
  const emailParts = formData.email.split('@');
  const userid = formData.userId;
  const qrCodeValue = formData ? `https://ondemand.global/user/${formData.email.split('@')[0]}-${formData.userId}` : "";

  

  return (
    <Wrapper>
      <SEO pageTitle={"Billing "} />
      <Layout>
        <div className="main-wrapper">
          <div className="container-fluid">

          {/* <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4 mt-2">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#">My Dashboard</a></li>
              <li class="breadcrumb-item"><a href="#"></a></li>
              <li class="breadcrumb-item active" aria-current="page">Qr Management</li>
            </ol>
          </nav>
        </div>
      </div> */}
         
            <div className="card mt-4">
              <Tabs defaultActiveKey="Genrate QR" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="Genrate QR" title="Genrate QR">
                <div className="row   mt-0 py-2 px-2 mr-4">
                 
                </div>
                <section className="py-4 px-4" >

                  <div className="row">
                    <div className="col-md-5  ">


                    <div class="card py-2 px-2 shadow-sm p-5 mb-5 bg-white rounded">
  <div class="card-body d-flex align-items-center justify-content-center">

  <DashQR />
      
        </div>
  

</div>


                    </div>

                    <div className="col-md-7  ">

   <Card>
              <div className="col-md-12">
                <div className="card-body p-4">
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>First Name</h6>
                      <p className="text-muted">{formData.firstName}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Last Name</h6>
                      <p className="text-muted"> {formData.lastName}</p>
                    </div>
                  </div>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{formData.email}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">{formData.emergencyPhone}</p>
                    </div>
                  </div>
                  <h6>Medical Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Medical Alerts</h6>
                      <p className="text-muted">{formData.medicalAlert}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Insurance</h6>
                      <p className="text-muted">{formData.InsuranceProvider}</p>
                    </div>
                  </div>

                  <h6>Address</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-4 mb-3">
                      <h6>City</h6>
                      <p className="text-muted">{formData.city}</p>
                    </div>
                    <div className="col-4 mb-3">
                      <h6>Country</h6>
                      <p className="text-muted">{formData.county}</p>
                    </div>
                    <div className="col-4 mb-3">
                      <h6>Zip Code</h6>
                      <p className="text-muted">{formData.zipCode}</p>
                    </div>
                  </div>
                  {formData.userId && formData.userId.length > 0 ? (
                      <a href='/mydashboard/edit-details' className='btn btnuserform ml-2'>Edit Details</a>
                    ) : (
                      <a href='/mydashboard/add-details' className='btn btnuserform'>Add Details</a>
                    )}
                </div>
              </div>
            </Card>
</div>

                  </div>

                  </section>
                  
                   
                      
                   
                 
                     
                </Tab>
                
                
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default FormDataComponent;
