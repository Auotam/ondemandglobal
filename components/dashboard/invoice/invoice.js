import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import Link from "next/link";
import EventBusyIcon from '@mui/icons-material/EventBusy';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Invoice = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);

  const userData = useUserData();
  const invoiceRef = useRef();

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

  const handleDownloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("invoice.pdf");
    });
  };

  const handleSendInvoice = async () => {
    const input = invoiceRef.current;
    html2canvas(input).then(async (canvas) => {
      const imgData = canvas.toDataURL('image/png');
      // Send the image data to your server to handle email sending
      await axios.post('/api/send-invoice', {
        image: imgData,
        email: formData.email
      });
      alert("Invoice sent!");
    });
  };

  
  if (!userData) {
    return <div className='d-flex align-items-center justify-content-center vh-100'>Loading user data...</div>;
  }

  if (loadingFormData) {
    return <div className='d-flex align-items-center justify-content-center vh-100'>Loading form data...</div>;
  }

  if (error) {
    return <div className='d-flex align-items-center justify-content-center vh-100'>Error: {error}</div>;
  }


 
  if (!formData) {
    return <div className="d-flex align-items-center justify-content-center vh-100">No form data found for the user</div>;
  }

  return (
    <div className='main-wrapper'>
      <section>
        <div className="container-fluid">
          <div className="invoice-wrapper mt-50" ref={invoiceRef}>
            <div className="row">
              <div className="col-12">
                <div className="invoice-card card-style mb-20">
                  <div className="invoice-address">
                    <div className="address-item">
                      <h5 className="text-bold">From</h5>
                      <h1>Ondemand Global</h1>
                      <p className="text-sm">
                        Minneapolis | Minnesota | 55303
                      </p>
                      <p className="text-sm">
                        <span className="text-medium  mlr">Email: </span>
                        <span className="ml-2">{" "}support@ondemand.global</span>
                      </p>
                    </div>
                    <div className="address-item">
                      <h5 className="text-bold">To</h5>
                      <h1 className="text-capitalize">{userData.user.name}</h1>
                      <p className="text-sm">
                        {formData.address}
                      </p>
                      <p className="text-sm">
                        <span className="text-medium mr-2 mlr">Email: {"   "}   </span>
                        <span>{formData.email}</span>
                      </p>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="invoice-table table">
                      <thead>
                        <tr>
                          <th className="service">
                            <h6 className="text-sm text-medium">Plan</h6>
                          </th>
                          <th className="desc">
                            <h6 className="text-sm text-medium">Descriptions</h6>
                          </th>
                          <th className="qty">
                            <h6 className="text-sm text-medium">Qty</h6>
                          </th>
                          <th className="amount">
                            <h6 className="text-sm text-medium">Amounts</h6>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className="text-sm">   {userData.user.plan}</p>
                          </td>
                          <td>
                            <p className="text-sm">
                              -
                            </p>
                          </td>
                          <td>
                            <p className="text-sm">1</p>
                          </td>
                          <td>
                            <p className="text-sm">4.99</p>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h6 className="text-sm text-medium">Subtotal</h6>
                          </td>
                          <td>
                            <h6 className="text-sm text-bold">$4.99</h6>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h6 className="text-sm text-medium">Discount</h6>
                          </td>
                          <td>
                            <h6 className="text-sm text-bold">$4.99</h6>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h6 className="text-sm text-medium">Shipping Charge</h6>
                          </td>
                          <td>
                            <h6 className="text-sm text-bold">$0.00</h6>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h4>Total</h4>
                          </td>
                          <td>
                            <h4>$0.00</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="note-wrapper warning-alert py-4 px-sm-3 px-lg-5">
                    <div className="alert">
                      <h5 className="text-bold mb-15">Notes:</h5>
                      <p className="text-sm text-gray">
                        All accounts are to be paid within 7 days from receipt
                        of invoice. To be paid by cheque or credit card or
                        direct payment online. If account is not paid within 7
                        days the credits details supplied as confirmation of
                        work undertaken will be charged the agreed quoted fee
                        noted above.
                      </p>
                    </div>
                  </div> */}
                  <div className="invoice-action">
                    <ul className="d-flex flex-wrap align-items-center justify-content-center">
                      <li className="m-2">
                        <button className="main-btn primary-btn-outline btn-hover" onClick={handleDownloadPDF}>
                          Download Invoice
                        </button>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invoice;
