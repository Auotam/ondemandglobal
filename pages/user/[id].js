import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Wrapper from "@/layout/wrapper";
import QRCodeWithLogoComponent from "@/components/qrcodelogo";
import logo from '../../public/assets/images/logo-white.png'

const FormDataComponent = () => {
  const router = useRouter();
  const { id } = router.query; // Assuming id is the emailprefix-userid format

  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingFormData(true);
        const response = await axios.get(`/api/Auth/formvalue/${id}`);
        setFormData(response.data.data);
        setLoadingFormData(false);
      } catch (error) {
        setError(error.response ? error.response.data.error : error.message);
        setLoadingFormData(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Generate QR code value based on formData
  const qrCodeValue = formData ? `http://localhost:3000/user/${formData.email.split('@')[0]}-${formData.userId}` : "";

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
    // <Wrapper>
    //   <main className="left-40">
    //     <div className="main-wrapper form-elements-wrapper pl-20">
    //       <div>
    //         <h2>Form Data</h2>
    //         <ul>
    //           <li>
    //             <span><strong>First Name:</strong></span>
    //             <span>{formData.firstName || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Last Name:</strong></span>
    //             <span>{formData.lastName || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Email:</strong></span>
    //             <span>{formData.email || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Emergency Phone:</strong></span>
    //             <span>{formData.emergencyPhone || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Medical Alert:</strong></span>
    //             <span>{formData.medicalAlert || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Covid19 Tested:</strong></span>
    //             <span>{formData.Covid19Tested || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Covid19 Vaccinated:</strong></span>
    //             <span>{formData.Covid19vaccinated || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Insurance Provider:</strong></span>
    //             <span>{formData.InsuranceProvider || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Non-prescribed Drugs:</strong></span>
    //             <span>{formData.nonprescribedrugs || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Allergies:</strong></span>
    //             <span>{formData.allergies || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>City:</strong></span>
    //             <span>{formData.city || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>County:</strong></span>
    //             <span>{formData.county || "N/A"}</span>
    //           </li>
    //           <li>
    //             <span><strong>Zip Code:</strong></span>
    //             <span>{formData.zipCode || "N/A"}</span>
    //           </li>
    //         </ul>
    //         <div>
    //           <h3>QR Code</h3>
    //           <QRCodeWithLogoComponent value={qrCodeValue} />
    //         </div>
    //       </div>
    //     </div>
    //   </main>

    // </Wrapper>
    <>
    <div className="d-flex align-items-center justify-content-center mt-20 mb-0">
        <img className="width200" src="../../assets/images/logo-white.png" />
        </div>
    <section className="h-100 gradient-custom-2">
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-9 col-xl-7">
          <div className="card">
            <div className="rounded-top  d-flex flex-row ">
              <div className="ms-4 mt-5 d-flex flex-column imgcontainer" >
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" />
                
              </div>
              
              <div className="ms-3 w-100 margin-130 text-capitalize d-flex justify-content-start flex-column align-items-start" >
                <div className="text-white">
                <h5>{formData.firstName || "N/A"} {''} {formData.lastName || "N/A"} </h5>
                <p>{formData.email || "N/A"}</p>
                </div>

                <span className="mt-2">
                <a href={`tel:${formData.emergencyPhone || ''}`}  className="btn btn-outline-light callnumber text-dark">
  Call Emergency Number
</a>
                </span>
              </div>
             
            </div>
            <div className="p-4 text-black bgf8f9fa" >
              <div className="d-flex justify-content-between text-center py-1">
                <div>
                  <p className="mb-1 h5">Covid19 Tested</p>
                  <p className="small text-muted mb-0">{formData.Covid19Tested || "N/A"}</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 h5">Covid19vaccinated </p>
                  <p className="small text-muted mb-0">{formData.Covid19vaccinated || "N/A"}</p>
                </div>
                <div>
                  <p className="mb-1 h5">Insurance Company</p>
                  <p className="small text-muted mb-0">{formData.InsuranceProvider || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
             
             
             
              <div className="row">

              <div className="col-md-12">
                <div className="card-body p-0">
                  <h6 className="mb-2 mt-4">Medical Query</h6>
                  <hr className="mt-0 mb-2" />
                  <div className="row pt-1">
                    
                    <div className="col-12 mb-3">
                     
                      <p className="text-muted">{formData.medicalAlert || "N/A"}</p>
                    </div>
                  </div>
                  <h6 className="mb-2 mt-2">Allergies</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    
                    <div className="col-6 mb-3">
                     
                      <p className="text-muted">{formData.allergies || "N/A"}</p>
                    </div>
                  </div>

                  <h6 className="mb-2 mt-2">Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                  <div className="col-6 mb-3">
                     <h5>City</h5>
                     <p className="text-muted">{formData.city || "N/A"}</p>
                   </div>

                   <div className="col-6 mb-3">
                     <h5>Country</h5>
                     <p className="text-muted">{formData.county || "N/A"} {formData.zipCode || "N/A"}</p>
                   </div>

                   
                    
                  </div>
               
                  <hr className="mt-5 mb-4" />
                  <div className="d-flex justify-content-between text-center w-100 align-items-center mt-4">
                    <span>Powered by: Ondemand Global </span>
                    <div className="d-flex justify-content-start mb-5">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                
                  </div>
                  
                </div>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>
  );
};

export default FormDataComponent;
