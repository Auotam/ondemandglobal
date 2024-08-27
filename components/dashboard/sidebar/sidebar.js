import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';
import useUserData from "@/utils/UseUserdata";
import { People } from '@mui/icons-material';

const Sidebar = () => {
  const [formData, setFormData] = useState(null);
  const [loadingFormData, setLoadingFormData] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const userData = useUserData();

  console.log(userData)

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

  // Define navigation items for admin and user roles
  const adminNavItems = [
    { href: '/mydashboard/', text: 'Dashboard', icon: <DashboardIcon /> },
    { href: '/mydashboard/users', text: 'Users', icon: <People /> },

  ];

  const userNavItems = [
    { href: '/mydashboard', text: 'Dashboard', icon: <DashboardIcon /> },
    { href: '/mydashboard/qr-management', text: 'QR Code Management', icon: <QrCodeIcon /> },
    { href: '/mydashboard/billing', text: 'Subscription & Billing', icon: <CardMembershipIcon /> },
    { href: '/mydashboard/account', text: 'Account Setting', icon: <AccountBalanceIcon /> },
    { href: '/mydashboard/help', text: 'Help & Support', icon: <HelpIcon /> },
  ];

  // Function to determine if a link is active
  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  if (loadingFormData) {
    return <div>Loading...</div>;
  }

  if (!formData && userData.user.role !== 'admin') { // Show Add Details link only for non-admin users
    return (
      <aside className="sidebar-nav-wrapper">
        <div className="navbar-logo">
          <a href="/mydashboard">
            <img className='logo' src="../assets/images/logo-white.png" alt="" />
          </a>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={`nav-item ${isActiveLink('/mydashboard/add-details') ? 'active' : ''}`}>
              <Link href="/mydashboard/add-details">
                <a>
                  <span className="text">Add Details</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }

  // Determine the appropriate navigation items based on the user role
  const navItems = userData.user.role === 'admin' ? adminNavItems : userNavItems;
  console.log(userData.user.role )

  return (
    <aside className="sidebar-nav-wrapper">
      <div className="navbar-logo">
        <a href="/mydashboard">
          <img className='logo' src="../assets/images/logo-white.png" alt="" />
        </a>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className={`nav-item ${isActiveLink(item.href) ? 'active' : ''}`}>
              <Link href={item.href}>
                <a>
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
          <span className="divider"><hr /></span>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
