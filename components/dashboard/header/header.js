import React, {useEffect} from 'react'
import useUserData from '@/utils/UseUserdata';
import Cookies from 'js-cookie'
import Router from 'next/router'
import { Upgrade } from '@mui/icons-material';
import { toast } from 'react-toastify';

const Header = () => {
  const userData = useUserData()
  console.log("data", userData)
 if (!userData) {
    return null; 
  }

  const token = Cookies.get('token')


  const logout = () => {
    console.log("logout work")
    Cookies.remove('token')
    Router.push('/')
    toast.success("Logout User")
  }
  
  return (


    <>
    
    <header className="header  headermarleft">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-6">
              <div className="header-left d-flex align-items-center">
                <div className="menu-toggle-btn mr-15">
                {/* <img className='logo' src="../assets/images/logo-white.png" alt="" /> */}
                  
                </div>
                
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-6">
              
              <div className="header-right">
              {/* <div className="notification-box ml-15 d-none d-md-flex">
              <button    id="upgrade" data-bs-toggle="dropdown"
                    aria-expanded="false" className="btn dropdown-toggle btn-primary btn-lg main-btn primary-btn w-auto rounded border border-primary">
                     <Upgrade />     Upgrade Your Plan
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end rounded" aria-labelledby="upgrade">
                        <li>
                      <div className="author-info flex items-center !p-1">
                      
                        <div className="content">
                          <h2>Plans</h2>
                        </div>
                      </div>
                    </li>
                    
                    <li>
                      <a href="#0">
                        <i className="lni lni-user"></i> Indivisual  <div type="button" class="btn btn-primary btn-rounded btn-lg main-btn primary-btn rounded">
  Profile

</div>
                      </a>
                    </li>
                    
                   
                    <li>
                      <a href="mydashboard/account"> <i className="lni lni-cog"></i> Family </a>  <div type="button" class="btn btn-primary btn-rounded btn-lg main-btn primary-btn rounded">
  Profile

</div>
                    </li>
                    <li className="divider"></li>
                    <li >
                      <a > <i className="lni lni-exit"></i> Business </a>
                      <div type="button" class="btn btn-primary btn-rounded btn-lg main-btn primary-btn rounded w-auto">
  Profile

</div>
                    </li>
    
                 </ul>
                
                </div> */}
                <div className="notification-box ml-15 d-none d-md-flex">
                  <button className="dropdown-toggle" type="button" id="notification" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11 20.1667C9.88317 20.1667 8.88718 19.63 8.23901 18.7917H13.761C13.113 19.63 12.1169 20.1667 11 20.1667Z"
                        fill="" />
                      <path
                        d="M10.1157 2.74999C10.1157 2.24374 10.5117 1.83333 11 1.83333C11.4883 1.83333 11.8842 2.24374 11.8842 2.74999V2.82604C14.3932 3.26245 16.3051 5.52474 16.3051 8.24999V14.287C16.3051 14.5301 16.3982 14.7633 16.564 14.9352L18.2029 16.6342C18.4814 16.9229 18.2842 17.4167 17.8903 17.4167H4.10961C3.71574 17.4167 3.5185 16.9229 3.797 16.6342L5.43589 14.9352C5.6017 14.7633 5.69485 14.5301 5.69485 14.287V8.24999C5.69485 5.52474 7.60672 3.26245 10.1157 2.82604V2.74999Z"
                        fill="" />
                    </svg>
                    <span></span>
                  </button>
                  
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notification">
                   
                    <li>
                      <a href="#0">
                        <div className="image">
                          <img src="assets/images/lead/lead-1.png" alt="" />
                        </div>
                        {/* <div className="content">
                          <h6>
                            Ondemand 
                            <span className="text-regular">

                            </span>
                          </h6>
                          <p>
                         Welcome to ondemand global and complete your profile to go for Add details create your Qr code for free. 
                          </p>
                         
                        </div> */}
                      </a>
                    </li>
                  </ul>
                </div>
              
                
                <div className="profile-box ml-15">

                  
                  <button className="dropdown-toggle bg-transparent border-0" type="button" id="profile"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="profile-info">
                      <div className="info">
                        <div className="image">
                        <img
                      className="widthimage w-100"
                      src="/assets/images/man.png"
                    />
                        </div>
                        <div>
                          <h6 className="fw-500 text-capitalize">{userData.user.name}</h6>
                          <p className='text-capitalize'>{userData.user.role}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile">
                    <li>
                      <div className="author-info flex items-center !p-1">
                      
                        <div className="content">
                          <h4 className="text-sm">{userData.user.name}</h4>
                          <a className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xs" href="#">{userData.user.email}</a>
                        </div>
                      </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#0">
                        <i className="lni lni-user"></i> View Profile
                      </a>
                    </li>
                    
                   
                    <li>
                      <a href="mydashboard/account"> <i className="lni lni-cog"></i> Settings </a>
                    </li>
                    <li className="divider"></li>
                    <li onClick={logout}>
                      <a > <i className="lni lni-exit"></i> Sign Out </a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </header>

      </>
    
  )
}

export default Header;