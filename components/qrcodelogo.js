import React from "react";
import PropTypes from 'prop-types';
import { QRCode } from 'react-qrcode-logo';

const QRCodeWithLogoComponent = ({ value }) => {
  // Verify the value in the console
  console.log('QR Code value:', value);

  // Customize the QR code with logo options
  const options = {
    value: value || "https://ondemand.global", // Ensure the value prop is used correctly
    logoImage: '/assets/images/logo-white.png', // Adjust the path based on your folder structure
    logoWidth: 120,
    logoHeight: 50,
    logoBackgroundColor: "#ffffff",
    logoBackgroundTransparent: false,
    qrStyle: 'dots' ,
    bgColor: "#fff",
    logoPadding: 5,
    removeQrCodeBehindLogo: true,
    fgColor: "#000", // Changed to black for better contrast
    size: 300
  };

  return <QRCode {...options} />;
};

QRCodeWithLogoComponent.propTypes = {
  value: PropTypes.string.isRequired
};

export default QRCodeWithLogoComponent;
