import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "@/utils/UseUserdata";
import Daskqr from "@/components/qrpage/dashqr";
import dayjs from "dayjs";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useRouter } from "next/router";
import UsersTable from "@/components/admin/usertable";
import EditDetails from '@/components/admin/editDetails';
import Alldata from '@/components/admin/allData';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dask = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [selectedEmail, setSelectedEmail] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const router = useRouter();

  const userData = useUserData();
  console.log("userData", userData )

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData?.user?.email) {
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

  useEffect(() => {
    if (formData) {
      const interval = setInterval(() => {
        const createdAt = dayjs(formData.createdAt);
        const expirationDate = createdAt.add(7, "day");
        const now = dayjs();
        const diff = expirationDate.diff(now);

        // const duration = dayjs.duration(diff);
        // const formattedCountdown = `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;

        // setCountdown(formattedCountdown);
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
        Loading form data...
      </div>
    );
  }

  if (!formData) {
    router.push("mydashboard/add-details"); // Redirect to add-details page
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
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

  const doughnutData = {
    labels: ["Accuracy", "Remaining"],
    datasets: [
      {
        label: "Data",
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

  const emailParts = formData.email.split("@");
  const qrCodeValue = `https://ondemand.global/user/${emailParts[0]}-${formData.userId}`;

 

  const handleFetchUserDetails = (email) => {
    setSelectedEmail(email);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedEmail('');  // Clear selected email when closing the panel
  };


  return (

    <>

    {userData.user.role === 'admin'?
    
    <main className="main-wrapper">
      <section className="section">
        <div className="container-fluid">
          <div className="title-wrapper pt-30 mb-10">
            <div className="row align-items-center"></div>
            <UsersTable onFetchUserDetails={handleFetchUserDetails} />
            {isPanelOpen && (
        <div className="sliding-panel">
          <button className="close-btn" onClick={handleClosePanel}>X</button>
          <EditDetails selectedEmail={selectedEmail} />
        </div>
      )}
    </div>
    </div>
    </section>
    </main>
    
    
    
    : <main className="main-wrapper">
      <section className="section">
        <div className="container-fluid">
          <div className="title-wrapper pt-30 mb-10">
            <div className="row align-items-center">
              <ol className="breadcrumb breadcrumb flex-end justify-content-end align-items-end">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">My Dashboard</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-sm-6 col-xs-6">
                  <div className="icon-card mb-30 flex-column">
                    <div className="content">
                      <h3 className="mb-20">Welcome to OnDemand Global</h3>
                    </div>
                    <div className="d-flex">
                      <div className="mr-10 rounded-md col-md-1">
                        <img
                          className="widthimage mr-2 w-100"
                          src="/assets/images/man.png"
                          alt="Profile"
                        />
                      </div>
                      <div className="content col-md-8">
                        <h2 className="text-bold mb-10 mt-0 text-capitalize">
                          {formData.lastName} {formData.firstName}
                        </h2>
                        <p className="text-sm text-success">
                          <span className="text-gray">{userData.user.email}</span>
                        </p>
                      </div>
                      <a href={`https://ondemand.global/user/${emailParts[0]}-${formData.userId}`}>
                      Show Profile
                    </a>

                      
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-sm-6 col-xs-6">
                  <div className="icon-card mb-30">
                    <div className="icon primary">
                      <EventBusyIcon />
                    </div>
                    <div className="content">
                      <h6 className="mb-10 text-danger">Expiry In</h6>
                      <h3 className="text-bold mb-10">
                        <span className="text-green font-md font-size-18">
                          {countdown}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-sm-6 col-xs-6">
                  <div className="icon-card mb-30">
                    <div className="icon primary">
                      <WorkspacePremiumIcon />
                    </div>
                    <div className="content">
                      <h6 className="mb-10 text-success">Your Plan</h6>
                      <h3 className="text-bold mb-10 font-md font-size-18">
                        {userData.user.role}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon orange">
                      <MonetizationOnIcon />
                    </div>
                    <div className="content">
                      <h6 className="mb-10 text-success">Price</h6>
                      <h3 className="text-bold mb-10 font-md font-size-18">
                        <span className="text-green font-md font-size-18">Free</span>
                      </h3>
                    </div>
                  </div>
                </div>

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
                  <h2 className="text-center text-xl pftext mt-4 w-100">
                    Profile Accuracy
                  </h2>
                  <div className="paddingDonut w-100">
                    <Doughnut data={doughnutData} />
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>}

    </>
  );
};

export default Dask;
