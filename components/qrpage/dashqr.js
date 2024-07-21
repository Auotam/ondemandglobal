import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata";
import { Card, Button, Menu, MenuItem } from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import QRCodeWithLogoComponent from "@/components/qrcodelogo";

const DashQR = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const userData = useUserData();
  const qrCodeRef = useRef(null);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadPNG = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        canvas.toBlob((blob) => {
          saveAs(blob, "qrcode.png");
        });
      });
    }
  };

  const downloadSVG = () => {
    const svgElement = qrCodeRef.current.querySelector("svg");
    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgData = serializer.serializeToString(svgElement);
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      saveAs(blob, "qrcode.svg");
    }
  };

  const downloadPDF = () => {
    const input = qrCodeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("qrcode.pdf");
    });
  };

  if (!userData) {
    return <div className="d-flex align-items-center justify-content-center w-100">Loading user data...</div>;
  }

  if (loadingFormData) {
    return <div className="d-flex align-items-center justify-content-center">Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!formData) {
    return <div className="d-flex align-items-center justify-content-center">Loading user data...</div>;
  }

  const emailParts = formData.email.split('@');
  const userid = formData.userId;
  const qrCodeValue = `https://ondemand.global/user/${emailParts[0]}-${userid}`;

  return (
    <>
      <section>
        <div className="row d-flex justify-content-start align-items-start vh-100 w-100">
          <div className="col col-lg-12 mb-4 mb-lg-0">
            <Card className="mb-3">
              <div className="row g-0">
                <div className="col-md-12 text-center text-white p-5" ref={qrCodeRef} id="qrCodeContainer">
                  <div className="col col-lg-12 mb-4 mb-lg-0">
                    <QRCodeWithLogoComponent value={qrCodeValue} />

                    
                  </div>
                  <Button className="mt-4" variant="contained" onClick={handleClick}>
              Download QR Code
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={() => { handleClose(); downloadPDF(); }}>Download PDF</MenuItem>
              <MenuItem onClick={() => { handleClose(); downloadPNG(); }}>Download PNG</MenuItem>
              <MenuItem onClick={() => { handleClose(); downloadSVG(); }}>Download SVG</MenuItem>
            </Menu>
                </div>
              </div>
            </Card>
            {/* <Card>
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
                </div>
              </div>
            </Card> */}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default DashQR;
