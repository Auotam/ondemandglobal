import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (

        <div id="page" className="page font--jakarta">




        <div id="login" className="bg--scroll login-section division">
            <div className="container">
                <div className="row justify-content-center">


                
                    <div className="col-lg-11">
                        <div className="register-page-wrapper r-16 bg--fixed">	
                            <div className="row">


                                
                                <div className="col-md-6">
                                    <div className="register-page-txt color--white">

                                    
                                        <img className="img-fluid" src="/assets/images/logo-white.png" alt="logo-image" />		

                                        
                                        <h2 className="s-42 w-700">Welcome</h2>
                                        <h2 className="s-42 w-700">back to OnDemand</h2>

                                        
                                        <p className="p-md mt-25">Integer congue sagittis and velna augue egestas magna 
                                           suscipit purus aliquam
                                        </p>

                                        
                                        <div className="register-page-copyright">
                                            <p className="p-sm">&copy; 2023 OnDemand. <span>All Rights Reserved</span></p>
                                        </div>

                                    </div>
                                </div>	


                                
                                <div className="col-md-6">
                                    <div className="register-page-form">
                                        <form name="signinform" className="row sign-in-form">

                                            
                                            <div className="col-md-12">
                                                <a  href="#" className="btn btn-google ico-left">
                                                    <img src="/assets/images/png_icons/google.png" alt="google-icon" /> Sign in with Google
                                                </a>
                                            </div>  

                                            
                                            <div className="col-md-12 text-center">	
                                                <div className="separator-line">Or, sign in with your email</div>
                                            </div>

                                            
                                            <div className="col-md-12">
                                                <p className="p-sm input-header">Email address</p>
                                                <input className="form-control email" type="email" name="email" placeholder="example@example.com" /> 
                                            </div>

                                            
                                            <div className="col-md-12">
                                                <p className="p-sm input-header">Password</p>
                                                <div className="wrap-input">
                                                    <span className="btn-show-pass ico-20"><span className="flaticon-visibility eye-pass"></span></span>
                                                    <input className="form-control password" type="password" name="password" placeholder="* * * * * * * * *" /> 
                                                </div>
                                            </div>

                                            
                                            <div className="col-md-12">
                                                <div className="reset-password-link">
                                                    <p className="p-sm"><a href="reset-password.html" className="color--theme">Forgot your password?</a></p>
                                                </div>
                                            </div>

                                            
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn--theme hover--theme submit">Log In</button>
                                            </div> 

                                            
                                            <div className="col-md-12">
                                                <p className="create-account text-center">
                                                    Don't have an account?<Link href="/signup" ><a className="color--theme">Sign up</a></Link>
                                                </p>
                                            </div>  

                                        </form> 
                                    </div>
                                </div>	


                            </div>  
                        </div>
                    </div>


                 </div>	 
             </div>	  	
        </div>	




    </div>


    );
};

export default LoginPage;