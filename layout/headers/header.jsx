import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/common/sidebar";
import SidebarCart from "../../components/common/sidebar-cart";
import useCartInfo from "../../hooks/use-cart-info";
import useGlobalContext from "../../hooks/use-context";
import HeaderTop from "./headertop";
import NavMenu from "./navmenu";
import useUserData from "@/utils/UseUserdata";
import Cookies from "js-cookie";
import Router from "next/router";

const HeaderOne = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromCookies = Cookies.get("token");
    setToken(tokenFromCookies);
    console.log("Token from cookies:", tokenFromCookies);

    if (!tokenFromCookies) {
      console.log("No token found, redirecting to home page.");
      Router.push("/");
    }
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setToken(null); // Update the token state to null
    console.log("Token removed from cookies");
    setTimeout(() => {
      Router.push("/");
    }, 100); // Adding a small delay before redirecting
  };

  const userData = useUserData();
  console.log("User data:", userData);
  const [openCart, setOpenCart] = useState(false);
  const { quantity } = useCartInfo();
  const { setShowSidebar } = useGlobalContext();

  const sticky = (e) => {
    const header = document.querySelector(".header-main");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  return (
    <header
      id="header"
      className="tra-menu navbar-dark inner-page-header white-scroll"
    >
      <div className="header-wrapper">
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/assets/images/logo-white.png" alt="mobile-logo" />
          </span>
          <a href="/login" id="wsnavtoggle" className="wsanimated-arrow mt-0 mr-0 pr-2">
            <button className="btn btn--theme hover--theme">Signin</button>
          </a>
        </div>

        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            <div className="desktoplogo">
              <a href="/" className="logo-black">
                <img
                  className="light-theme-img"
                  src="/assets/images/logo-white.png"
                  alt="logo"
                />
                <img
                  className="dark-theme-img"
                  src="/assets/images/logo-white.png"
                  alt="logo"
                />
              </a>
            </div>

            <div className="desktoplogo">
              <a href="/" className="logo-white">
                <img src="/assets/images/logo-white.png" alt="logo" />
              </a>
            </div>

            <nav className="wsmenu clearfix">
              <div className="overlapblackbg"></div>
              <ul className="wsmenu-list nav-theme">
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#how-to-use" className="h-link">
                    How To Use
                  </a>
                </li>

                <li aria-haspopup="true">
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow"></i>
                  </span>
                  <a href="#pricing" className="h-link">
                    Pricing
                  </a>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#features" className="h-link">
                    Features
                  </a>
                </li>

                {token && userData ? (
                  <>
                    <li aria-haspopup="true">
                      <span className="wsmenu-click">
                        <i className="wsmenu-arrow"></i>
                      </span>
                      <a href="#" className="h-link">
                        User <span className="wsarrow"></span>
                      </a>
                      <ul className="sub-menu">
                        <span className="text-left">
                          Welcome, {userData.user.name}
                        </span>
                        <li aria-haspopup="true">
                          <a href="/mydashboard">
                            <span>{userData.name}</span>My Dashboard
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="#" onClick={logout}>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className="nl-simple reg-fst-link mobile-last-link"
                      aria-haspopup="true"
                    >
                      <a href="/login" className="h-link">
                        Sign In
                      </a>
                    </li>
                    <li className="nl-simple" aria-haspopup="true">
                      <a
                        href="/register"
                        className="btn r-04 btn--theme hover--tra-white"
                      >
                        Sign Up
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
