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
  const qrCodeValue = `https://ondemand.global/user/${emailParts[0]}-${userid}`;
  console.log("qrmana", qrCodeValue);

  

  return (
    <Wrapper>
      <SEO pageTitle={"Billing "} />
      <Layout>
        <div className="main-wrapper">
          <div className="container-fluid">

          <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4 mt-2">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#">My Dashboard</a></li>
              <li class="breadcrumb-item"><a href="#"></a></li>
              <li class="breadcrumb-item active" aria-current="page">Qr Management</li>
            </ol>
          </nav>
        </div>
      </div>
         
            <div className="card">
              <Tabs defaultActiveKey="Genrate QR" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="Genrate QR" title="Genrate QR">
                <div className="row   mt-0 py-2 px-2 mr-4">
                  <div className="col-md-12 col-xs-12 align-items-end justify-content-end d-flex">
                  {formData.userId && formData.userId.length > 0 ? (
                      <a href='mydashboard/edit-details' className='btn btnuserform ml-2'>Edit Details</a>
                    ) : (
                      <a href='mydashboard/add-details' className='btn btnuserform'>Add Details</a>
                    )}
                  </div>
                </div>
                <section className="py-4 px-4" >

                  <div className="row">
                    <div className="col-md-4  ">


                    <div class="card py-2 px-2 shadow-sm p-3 mb-5 bg-white rounded">
  <div class="card-body">
  <QRCodeWithLogoComponent value={qrCodeValue} width="200" />
  </div>
</div>
                    </div>

                    <div className="col-md-8  ">


<div class="card py-2 px-2 shadow-sm p-3 mb-5 bg-white rounded">
<div class="card-body">
<h2>{formData.firstName || "N/A"} {formData.lastName || "N/A"}</h2>
                      <p><span>Email:</span> {formData.email || "N/A"}</p>
                      <p><span>Insurance Provider:</span>{formData.InsuranceProvider || "N/A"}</p>
                      <p><span>Emergency Phone:</span>{formData.emergencyPhone || "N/A"}</p>
                      {/* <p><span>Medical Alert</span> {formData.medicalAlert || "N/A"}</p> */}
                      <p><span>Covid19 Tested</span>{formData.Covid19Tested || "N/A"}</p>
                      <p><span>Covid 19 Vaccinated</span> {formData.Covid19vaccinated || "N/A"}</p>
               
</div>
</div>
</div>

                  </div>

                  </section>
                  
                   
                      
                   
                 
                     
                </Tab>
                <Tab eventKey="Shipping QR" title="Shipping QR">
                  <div className="row p-4">
                    <div className="col-md-12">
                    <Form onSubmit={handleShippingSubmit}>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={shippingData.address}
                        onChange={handleShippingChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter city"
                        name="city"
                        value={shippingData.city}
                        onChange={handleShippingChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formState">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter state"
                        name="state"
                        value={shippingData.state}
                        onChange={handleShippingChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formZip">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter zip code"
                        name="zip"
                        value={shippingData.zip}
                        onChange={handleShippingChange}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                    </div>
                
                  </div>
                
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
