import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import { QRCode } from 'react-qrcode-logo';

const QRCodeWithLogoComponent = forwardRef(({ value }, ref) => {
  console.log('QR Code value:', value);

  const options = {
    value: value || "https://ondemand.global",
    logoImage: '/assets/images/logo-white.png',
    logoWidth: 120,
    logoHeight: 50,
    logoBackgroundColor: "#ffffff",
    logoBackgroundTransparent: false,
    qrStyle: 'dots',
    bgColor: "#fff",
    logoPadding: 5,
    removeQrCodeBehindLogo: true,
    fgColor: "#000",
    size: 300
  };

  return <QRCode ref={ref} {...options} />;
});

QRCodeWithLogoComponent.propTypes = {
  value: PropTypes.string.isRequired
};

export default QRCodeWithLogoComponent;
