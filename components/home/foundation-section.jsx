import Link from 'next/link';
import React from 'react';

const FoundationSection = () => {
    return (
        <>
        <section id="pricing-3" className="gr--whitesmoke inner-page-hero pb-60 pricing-section">
				<div className="container">


					
					<div className="row justify-content-center">	
						<div className="col-md-10 col-lg-8">
							<div className="section-title text-center mb-60">	

								<h2 className="s-52 w-700">Simple, Flexible Pricing</h2>

								
								<div className="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
									<span className="toggler-txt">Billed monthly</span>
							        <label className="switch-wrap">
							          <input type="checkbox" id="checbox" onclick="check()" />
							          <span className="switcher bg--grey switcher--theme">
											<span className="show-annual"></span>
								   			<span className="show-monthly"></span>
							          </span>
							        </label>
							        <span className="toggler-txt">Billed yearly</span>

							        
							        <p className="color--theme">Save up to 25% with yearly billing</p>

							    </div>


							</div>	
						</div>
					</div>	


					
					<div className="pricing-3-wrapper text-center">
						<div className="row row-cols-1 row-cols-md-3">


							
							<div className="col">
								<div id="pt-3-1" className="p-table pricing-3-table bg--white-100 block-shadow r-12 wow fadeInUp" >


									
									<div className="pricing-table-header">

										
										<h4 className="s-32">Individual</h4>

										
										<div className="price mt-25">
											<sup className="color--black">$</sup>								
											<span className="color--black">4</span>
											<sup className="coins color--black">99</sup>
											<sup className="validity color--grey">Month</sup>
										</div>

									</div>	


									
									<a href="#" className="pt-btn btn btn--theme hover--theme">Start 14-day trial</a>
									<p className="p-sm btn-txt color--grey">Start 7-day free trial</p>
									<p className="p-sm btn-txt color--grey">Start 7-day free trial</p>
                                    <p className="p-sm btn-txt color--grey">Secure storage for emergency information</p>
                                    <p className="p-sm btn-txt color--grey">Access to personal QR code</p>


								</div>
							</div>	


							
							<div className="col">
								<div id="pt-3-2" className="p-table pricing-3-table bg--white-100 block-shadow r-12 wow fadeInUp" >


									
									<div className="pricing-table-header">

										
										<h4 className="s-32">Business</h4>

										<div className="price mt-25">								

											
											<div className="price2" >
												<sup className="color--black">$</sup>								
												<span className="color--black">14</span>
												<sup className="coins color--black">99</sup>
												<sup className="validity color--grey">Mo/5 Users</sup>
											</div>

								

										</div>

									</div>


									
									<a href="#" className="pt-btn btn btn--theme hover--theme">Start 14-day trial</a>
									<p className="p-sm btn-txt color--grey">Start 7-day free trial</p>
                                    <p className="p-sm btn-txt color--grey">Secure storage for emergency information</p>
                                    <p className="p-sm btn-txt color--grey">Access to personal QR code</p>




								</div>
							</div>	


							
							<div className="col">
								<div id="pt-3-3" className="p-table pricing-3-table bg--white-100 block-shadow r-12 wow fadeInUp">


									
									<div className="pricing-table-header">

										
										<h4 className="s-32">Business</h4>


										<div className="price mt-25">								

											
											<div className="price2">
												<sup className="color--black">$</sup>								
												<span className="color--black">14</span>
												<sup className="coins color--black">99</sup>
												<sup className="validity color--grey">per month</sup>
											</div>

											

										</div>

									</div>	


									
									<a href="#" className="pt-btn btn btn--theme hover--theme">Start 7-day free trial</a>
                                    <p className="p-sm btn-txt color--grey">Tailored for businesses and teams. </p>
									<p className="p-sm btn-txt color--grey">Secure storage and sharing for business information</p>
                                    <p className="p-sm btn-txt color--grey">Access to company and Individual employee’s QR code</p>
                                    


								</div>
							</div>	


						</div>
					</div>


				</div>	  
			</section>
</>

    );
};

export default FoundationSection;