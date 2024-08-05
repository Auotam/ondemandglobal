import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
    return (
        <footer id="footer-3" className="pt-100 footer ft-3-ntr">
        <div className="container">


        
            <div className="row">


              
                <div className="col-xl-12 text-center">
                    <div className="footer-info">
                        <img className="footer-logo" src="/assets/images/logo-white.png" alt="footer-logo" />
                        <img className="footer-logo-dark" src="/assets/images/logo-white.png" alt="footer-logo" />
                        <p className='font-sm text-center'>On Demand is a platform for creating Personal Emergency Profiles with QR codes. It enables the instant sharing of critical information during emergencies, ensuring quick and effective response. Perfect for individuals, families, businesses, and various industries, On Demand simplifies preparedness. Join us today for effortless safety and peace of mind.</p>
                    </div>	
                </div>	


                
                {/* <div className="col-sm-4 col-lg-3 col-xl-2">
                    <div className="footer-links fl-1">
                    
                       
                        <h6 className="s-17 w-700">Company</h6>

                      
                        <ul className="foo-links clearfix">
                            <li><p><a href="/">About Us</a></p></li>
                            <li><p><a href="/">Our Blog</a></p></li>						
                            <li><p><a href="/">Customers</a></p></li>	
                            <li><p><a href="/">Community</a></p></li>			
                        </ul>

                    </div>
                </div>	


           
                <div className="col-sm-4 col-lg-2">
                    <div className="footer-links fl-2">
                                        
                       
                        <h6 className="s-17 w-700">Product</h6>

                       
                        <ul className="foo-links clearfix">
                            <li><p><a href="/">Integration</a></p></li>
                            <li><p><a href="/">What's New</a></p></li>	
                            <li><p><a href="/">Pricing</a></p></li>	
                            <li><p><a href="/">Help Center</a></p></li>			
                        </ul>

                    </div>	
                </div>	


               
                <div className="col-sm-4 col-lg-3 col-xl-2">
                    <div className="footer-links fl-3">
                                        
                       
                        <h6 className="s-17 w-700">Legal</h6>

                   
                        <ul className="foo-links clearfix">
                            <li><p><a href="/">Terms of Use</a></p></li>										
                            <li><p><a href="/">Privacy Policy</a></p></li>
                            <li><p><a href="/">Cookie Policy</a></p></li>
                            <li><p><a href="/">Site Map</a></p></li>
                        </ul>

                    </div>	
                </div> */}


{/*               
                <div className="col-sm-10 col-md-8 col-lg-4 col-xl-3">
                    <div className="footer-form">

                       
                        <h6 className="s-17 w-700">Follow the Best</h6>

                     
                        <form className="newsletter-form">
                                    
                            <div className="input-group r-06">
                                <input type="email" className="form-control" placeholder="Email Address" required id="s-email" /> 								
                                <span className="input-group-btn ico-15">
                                    <button type="submit" className="btn color--theme">
                                        <span className=""></span>
                                    </button>
                                </span>
                            </div>

                            	
                            <label for="s-email" className="form-notification"></label>
                                        
                        </form>
                                                
                    </div>	
                </div> */}


            </div>


            <hr />	


         
            <div className="bottom-footer">
                <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">


                    
                    <div className="col">
                        <div className="footer-copyright">
                            <p className="p-sm">&copy; 2024 On Demand Global.<span>All Rights Reserved</span></p>
                        </div>
                    </div>


                   
                    <div className="col">
                        <ul className="bottom-footer-socials ico-20 text-end">
                            <li><Link  href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                          
                        </ul>
                    </div>


                </div>  
            </div>	


        </div>    
    </footer>   
    );
};

export default FooterOne;