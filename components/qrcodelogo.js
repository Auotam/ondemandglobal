import React from "react";
import { QRCode } from 'react-qrcode-logo';

const QRCodeWithLogoComponent = ({ value }) => {
  // Customize the QR code with logo options
  const options = {
    text: value,
    logo: '/assets/images/logo-white.png', // Adjust the path based on your folder structure
    logoWidth: 100,
    logoHeight: 100,
    logoBackgroundColor: "transparent",
    logoBackgroundTransparent: true,
    backgroundColor: "transparent",
    foregroundColor: "#fff",
    size: 300
  };

  return <QRCode {...options} />;
};

export default QRCodeWithLogoComponent;
