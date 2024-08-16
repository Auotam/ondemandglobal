import React, { useState } from 'react';
import useUserData from '@/utils/UseUserdata';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { Menu, Close } from '@mui/icons-material';
import { toast } from 'react-toastify';

const Header = () => {
  const userData = useUserData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!userData) {
    return null;
  }

  const token = Cookies.get('token');

  const logout = () => {
    Cookies.remove('token');
    Router.push('/login');
    toast.success('Logged out successfully');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header headermarleft">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-6">
              <div className="header-left d-flex align-items-center">
                <div className="menu-toggle-btn mr-15 w-100 d-flex ml-4">
                  <button onClick={toggleSidebar} className="menu-button mobile-head mr-4">
                    {isSidebarOpen ? <Close /> : <Menu />}
                  </button>
                  <img className='logo ml-4 mobile-head' src="../assets/images/logo-white.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-6">
              <div className="header-right">
                <div className="profile-box ml-15">
                  <button
                    className="dropdown-toggle bg-transparent border-0"
                    type="button"
                    id="profile"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="profile-info">
                      <div className="info">
                        <div className="image">
                          <img
                            className="widthimage w-100"
                            src="/assets/images/man.png"
                            alt="Profile"
                          />
                        </div>
                        <div>
                          <h6 className="fw-500 text-capitalize">
                            {userData.user.name}
                          </h6>
                          <div className="d-flex">
                            <div className="badge badge-primary verified">
                              Verified
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="profile"
                  >
                    <li>
                      <div className="author-info flex items-center !p-1">
                        <div className="content">
                          <h4 className="text-sm">{userData.user.name}</h4>
                          <a
                            title={userData.user.email}
                            className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xs"
                            href="#"
                          >
                            {userData.user.email}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="/mydashboard/qr-management">
                        <i className="lni lni-user"></i> View Profile
                      </a>
                    </li>
                    <li>
                      <a href="mydashboard/account">
                        <i className="lni lni-cog"></i> Settings
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li onClick={logout}>
                      <a>
                        <i className="lni lni-exit"></i> Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div className="mobile-sidebar">
          <nav>
            <ul>
              <li><a href="/mydashboard">Dashboard</a></li>
              <li><a href="/mydashboard/qr-management">QR Management</a></li>
              <li><a href='/mydashboard/billing'>Subscription & Billing </a></li>
              <li><a href="/mydashboard/account">Account Settings</a></li>
              <li><a href="/mydashboard/help">Help </a></li>
             
            </ul>
          </nav>
        </div>
      )}
      <style jsx>{`
        .menu-button {
          background: none;
          border: none;
          cursor: pointer;
           margin-right:10px
        }

        .mobile-sidebar {
              position: fixed;
    /* top: 0; */
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: -ms-flexbox;
    /* display: flex; */
    /* -webkit-align-items: center; */
    /* -webkit-box-align: center; */
    -ms-flex-align: center;
    /* align-items: center; */
    -webkit-box-pack: center;
    /* -webkit-justify-content: center; */
    -ms-flex-pack: center;
    /* justify-content: center; */
    z-index: 20;
    padding: 8px 44px;
}
        }

        .mobile-sidebar nav ul {
          list-style: none;
          padding: 0;
        }

        .mobile-sidebar nav ul li {
          margin-bottom: 12px;
        }

        .mobile-sidebar nav ul li a {
          color: #000;
          text-decoration: none;
          font-size: 18px;
        }

        @media (min-width: 768px) {
          .mobile-sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
