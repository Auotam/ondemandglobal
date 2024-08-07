import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata";
import QRCode from "qrcode.react";
import Qrcode from "@/components/qrpage/qrcode";
import QRCodeWithLogoComponent from "@/components/qrcodelogo";
import Daskqr from "@/components/qrpage/dashqr";
import dayjs from "dayjs";
import Link from "next/link";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useRouter } from "next/router";
const Dask = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState("");
  const router = useRouter();

  const userData = useUserData();
  console.log("id card management ", userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData && userData.user && userData.user.email) {
          setLoadingFormData(true);
          const userEmail = userData.user.email;
          const response = await axios.post("/api/Auth/formvalue/formvalue", {
            email: userEmail,
          });
          console.log(response);
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

  useEffect(() => {
    if (formData) {
      const interval = setInterval(() => {
        const createdAt = dayjs(formData.createdAt);
        const expirationDate = createdAt.add(7, "day");
        const now = dayjs();
        const diff = expirationDate.diff(now);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [formData]);

  if (!userData) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        Loading user data...
      </div>
    );
  }

  if (loadingFormData) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        Loading user data...
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="className='d-flex align-items-center justify-content-center vh-100'">
        No form data found for the user
      </div>
    );
  }

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Profile",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [0, 0, 0, 0, 0, 0, 6],
      },
    ],
  };

  const data = {
    labels: ["Accuracy", "Remaning"],
    datasets: [
      {
        label: "data",
        hoverBorderWidth: 10,
        hoverBorderColor: "#9BD0F5",
        borderWidth: 10,
        borderColor: "#ffffff",
        data: [90, 10],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
      },
    ],
  };

  // Construct the QR code value dynamically using only the part before '@'
  const emailParts = formData.email.split("@");
  const userid = formData.userId;
  console.log("formdata", formData);

  const qrCodeValue = `https://ondemand.global/user/${emailParts[0]}-${userid}`;
  console.log("qrmana", qrCodeValue);

  console.log("data on desk page", userData);

  return (
    <main className="main-wrapper">
      <section className="section">
        <div className="container-fluid">
          <div className="title-wrapper pt-30 mb-10">
            <div className="row align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">My Dashboard</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 ">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-sm-12">
                  <div className="icon-card mb-30 flex-column">
                    <div className="content ">
                      <h3 className="mb-20">Welcome to OnDemand Global</h3>
                    </div>
                    <div className="d-flex">
                      <div className="mr-10 rounded-md col-md-1">
                        {/* { formData.gender === "male" ?  <img
                      className="widthimage mr-2 w-100"
                      src="/assets/images/man.png"
                    /> :
                    <img
                      className="widthimage mr-2 w-100"
                      src="/assets/images/woman.png"
                    />} */}
                        <img
                          className="widthimage mr-2 w-100"
                          src="/assets/images/man.png"
                        />
                      </div>
                      <div className="content col-md-8">
                        <h2 className="text-bold mb-10 mt-0 text-capitalize ">
                          {formData.lastName} {formData.firstName}
                        </h2>

                        <p className="text-sm text-success">
                          <i className="lni lni-arrow-up"></i>
                          <span className="text-gray">
                            {userData.user.email}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon primary">
                      <i className="lni lni-credit-cards">
                        <EventBusyIcon />
                      </i>
                    </div>
                    <div className="content">
                      <h6 className="mb-10 text-danger">Exipry In</h6>
                      <h3 className="text-bold mb-10">
                        <span className="text-green font-md fontzie18">
                          {countdown} 7 Days
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon primary">
                      <i className="lni lni-credit-cards">
                        <WorkspacePremiumIcon />
                      </i>
                    </div>
                    <div className="content">
                      <h6 className="mb-10 text-success">Your Plan</h6>
                      <h3 className="text-bold mb-10 font-md fontzie18">
                        {userData.user.plan}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="icon-card mb-30  ">
                    <div className="icon orange">
                      <i className="lni lni-user">
                        <MonetizationOnIcon />
                      </i>
                    </div>
                    <div className="content">
                      <h6 className="mb-10 text-success">Price</h6>

                      <p className="text-sm text-danger font-md">
                        <h3 className="text-bold mb-10 font-md fontzie18">
                          <span className="text-green font-md fontzie18">
                            Free
                          </span>
                        </h3>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon orange">
                    <i className="lni lni-user">
                      <LocalShippingIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h6 className="mb-10 text-success">Shipping Status</h6>

                    <p className="text-sm text-danger">
                     
                      <a
                        href=""
                        className="color--green-500,"
                      >
                        <span className="text-gray ml-10">You are not orderd</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div> */}

                <div className="col-xl-12 col-lg-12 col-sm-12">
                  <div className="icon-card">
                    <Line data={chartData} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 px-0 py-0">
              <Daskqr />
              <div className="col-xl-12 pr-28">
              <div className="icon-card flex-column">
                <h2 className="text-center text-xl pftext mt-4 w-100">Profile Accuracy</h2>
                  <div className="paddingDonut w-100">
                    
                    <Doughnut data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dask;
