import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTop from './headertop';
import NavMenu from './navmenu';
import useUserData from '@/utils/UseUserdata'; 
import Cookies from 'js-cookie'
import Router from 'next/router'


const HeaderOne = () => {

	const token = Cookies.get('token')

	useEffect(() => {
	  if (!token) {
		Router.push('/')
	  }
	}, [])
  
	const logout = () => {
	  Cookies.remove('token')
	  Router.push('/')
	}
  
	const userData = useUserData();
	console.log(userData)
    const [openCart,setOpenCart] = useState(false)
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();


	window.addEventListener('load', function() {
		"use strict";
	
	
		var preloader = document.getElementById('loading'),
			loader = preloader.querySelector('#loading-center');
		loader.style.display = 'none';
		setTimeout(function() {
			preloader.style.transition = 'opacity 0.5s ease';
			preloader.style.opacity = '0';
			setTimeout(function() {
				preloader.style.display = 'none';
			}, 500);
		}, 400);
	
		/*----------------------------------------------------*/
		/* Modal Window
		/*----------------------------------------------------*/
	
		setTimeout(function() {
			var modals = document.querySelectorAll('.modal:not(.auto-off)');
			modals.forEach(function(modal) {
			modal.style.display = 'block'; // Assuming the modal is hidden by default and you want to show it
			});
		}, 3600);
	});
	
	window.addEventListener('scroll', function() {
		"use strict";
	
		/*----------------------------------------------------*/
		/* Navigtion Menu Scroll
		/*----------------------------------------------------*/
	
		var b = window.scrollY;
	
		if (b > 80) {
			var wsmainfull = document.querySelector('.wsmainfull');
			wsmainfull.classList.add('scroll');
		} else {
			var wsmainfull = document.querySelector('.wsmainfull');
			wsmainfull.classList.remove('scroll');
		}
	});
	
    // Sticky Menu Area start
	// useEffect(() => {
	// 	window.addEventListener('scroll', sticky);
	// 	return () => {
	// 	   window.removeEventListener('scroll', sticky);
	// 	};
    
	//  });
  
	 const sticky = (e) => {
		const header = document.querySelector('.header-main');
		const scrollTop = window.scrollY;
		scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
	 };
	 // Sticky Menu Area End
    return (
        <>
<header id="header" className="white-menu navbar-dark light-hero-header white-scroll">
				<div className="header-wrapper">


					
				    <div className="wsmobileheader clearfix">	  	
				    	<span className="smllogo"><img src="/assets/images/logo-white.png" alt="mobile-logo" /></span>
				    	<a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>	
				 	</div>


				 	
				  	<div className="wsmainfull menu clearfix">
	    				<div className="wsmainwp clearfix">


	    					
	    					<div className="desktoplogo">
	    						<a href="#hero-10" className="logo-black">
	    							<img className="light-theme-img" src="/assets/images/logo-white.png" alt="logo" />
	    							<img className="dark-theme-img" src="/assets/images/logo-white.png" alt="logo" />
	    						</a>
	    					</div>

	    					
	    					<div className="desktoplogo">
	    						<a href="#hero-10" className="logo-white"><img src="/assets/images/logo-white.png" alt="logo" /></a>
	    					</div>


	    					
	      					<nav className="wsmenu clearfix"><div className="overlapblackbg"></div>
	        					<ul className="wsmenu-list nav-theme">


	        						
						          	<li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow"></i></span><a href="#" className="h-link">About <span className="wsarrow"></span></a>
	            						<ul className="sub-menu">
	            							<li aria-haspopup="true"><a href="#lnk-1">Why OnDemand?</a></li>
	            							<li aria-haspopup="true"><a href="#features-2">Best Solutions</a></li>
	            							<li aria-haspopup="true"><a href="#lnk-2">Integrations</a></li>
	            							<li aria-haspopup="true"><a href="#lnk-3">How It Works</a></li>
	            							<li aria-haspopup="true"><a href="#reviews-1">Testimonials</a></li>	
						           		</ul>
								    </li>


								    
							    	<li className="nl-simple" aria-haspopup="true"><a href="#features-11" className="h-link">Features</a></li>


								    
						          	<li aria-haspopup="true" className="mg_link"><span className="wsmenu-click"><i className="wsmenu-arrow"></i></span><a href="#" className="h-link">Pages <span className="wsarrow"></span></a>
	            						<div className="wsmegamenu w-75 clearfix">
	             							<div className="container">
	               								<div className="row">

	               									
	               									<ul className="col-md-12 col-lg-3 link-list">
									                    <li className="fst-li"><a href="about.html">About Us</a></li> 
									                    <li><a href="team.html">Our Team</a></li>
									                    <li><a href="careers.html">Careers <span className="sm-info">4</span></a></li>
									                    <li><a href="career-role.html">Career Details</a></li>
									                    <li><a href="contacts.html">Contact Us</a></li>			     
									                </ul>

									                
	               									<ul className="col-md-12 col-lg-3 link-list">
	               										<li><a href="features.html">Core Features</a></li>
									                    <li className="fst-li"><a href="projects.html">Our Projects</a></li>
									                    <li><a href="project-details.html">Project Details</a></li> 
									                    <li><a href="reviews.html">Testimonials</a></li>	
									                    <li><a href="download.html">Download Page</a></li>           
									                </ul>

									                
	               									<ul className="col-md-12 col-lg-3 link-list">
									                    <li className="fst-li"><a href="pricing-1.html">Pricing Page #1</a></li> 
									                    <li><a href="pricing-1.html">Pricing Page #2</a></li>
									                    <li><a href="faqs.html">FAQs Page</a></li>
									                    <li><a href="help-center.html">Help Center</a></li>
									                    <li><a href="404.html">404 Page</a></li>		           
									                </ul>

									               
	               									<ul className="col-md-12 col-lg-3 link-list">
									                    <li className="fst-li"><a href="blog-listing.html">Blog Listing</a></li>
									                    <li><a href="single-post.html">Single Blog Post</a></li>
									                    <li><a href="login-2.html">Login Page</a></li>
									                    <li><a href="signup-2.html">Signup Page</a></li>
									                    <li><a href="reset-password.html">Reset Password</a></li>			      
									                </ul>
                
								                </div>  
								            </div>  
								        </div>  
								    </li>


								    
							    	<li className="nl-simple" aria-haspopup="true"><a href="pricing-2.html" className="h-link">Pricing</a></li>


						          	
							    	<li className="nl-simple" aria-haspopup="true"><a href="faqs.html" className="h-link">FAQs</a></li>


									{userData ? (
										<>
											
											<li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow"></i></span><a href="#" className="h-link">User <span className="wsarrow"></span></a>
											<ul className="sub-menu">
												<li aria-haspopup="true"><a href="#lnk-1"><span>Welcome, {userData.user.email}</span></a></li>
												<li aria-haspopup="true"><a href="#features-2"><span>{userData.name}</span></a></li>
												<button className='nl-simple reg-fst-link mobile-last-link' onClick={logout}>Logout </button>
											   </ul>
										</li>

					</>
                ): <>	<li className="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
				<a href="/login" className="h-link">Sign in</a>
			</li>


			
			<li className="nl-simple" aria-haspopup="true">
				<a href="/login" className="btn r-04 btn--theme hover--tra-black last-link">Sign up</a>
			</li> </> }
							    	
							    


	        					</ul>
	        				</nav>


	    				</div>
	    			</div>	


				</div>   
			</header>

            {/* sidebar start */}
                {/* <Sidebar /> */}
            {/* sidebar end */}

            {/* side cart */}
            {/* <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/> */}
            {/* side cart */}
        </>
    );
};

export default HeaderOne;