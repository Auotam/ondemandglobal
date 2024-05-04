import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

const BrandSlider = ({ brand_classA }) => {
  return (
    <>
     <section id="features" className="bg-white pt-100 features-section division pb-60">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                    <h2 className="s-48 w-700">Feature Highlights</h2>
                    <p className="s-21 color--grey">Empowering Safety and Accessibility.</p>
                </div>
            </div>
        </div>
        <div className="fbox-wrapper">
            <div className="row row-cols-1 row-cols-md-2 rows-3">
                <div className="col">
                    <div className="fbox-11 fb-1 wow fadeInUp">
                        <div className="fbox-ico-wrap">
                            <div className="fbox-ico ico-50">
                                <div className="shape-ico color--theme">
                                    <span className="flaticon-search-engine-1"><img src="assets/images/icons/icon1.png" /></span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">QR Code Access</h6>
                            <p>Easily accessible QR code containing personal emergency details, accessible to first responders and medical personnel during emergencies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="fbox-11 fb-2 wow fadeInUp" >
                        <div className="fbox-ico-wrap">
                            <div className="fbox-ico ico-50">
                                <div className="shape-ico color--theme">
								<span className="flaticon-search-engine-1"><img src="assets/images/icons/icon2.png" /></span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">ID Cards</h6>
                            <p>Users can create personalized ID cards with their QR code, photo, and additional details for easy identification and access to emergency information.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="fbox-11 fb-3 wow fadeInUp">
                        <div className="fbox-ico-wrap">
                            <div className="fbox-ico ico-50">
                                <div className="shape-ico color--theme">
								<span className="flaticon-search-engine-1"><img src="assets/images/icons/icon3.png" /></span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Family Sharing</h6>
                            <p>Family plan option allows users to include multiple family members under one account, with individual profiles and access to their own emergency details.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="fbox-11 fb-4 wow fadeInUp" >
                        <div className="fbox-ico-wrap">
                            <div className="fbox-ico ico-50">
                                <div className="shape-ico color--theme">
								<span className="flaticon-search-engine-1"><img src="assets/images/icons/icon4.png" /></span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Business Integration</h6>
                            <p>Business plan enables companies to manage emergency profiles for employees, facilitating quick access to vital information during workplace emergencies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="fbox-11 fb-5 wow fadeInUp" >
                        <div className="fbox-ico-wrap">
                            <div className="fbox-ico ico-50">
                                <div className="shape-ico color--theme">
								<span className="flaticon-search-engine-1"><img src="assets/images/icons/icon5.png" /></span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Seamless User Experience</h6>
                            <p>Intuitive user interface and user flow make it easy for users to sign up, fill in their personal details, and access their emergency information whenever needed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="fbox-11 fb-6 wow fadeInUp" >
                        <div className="fbox-ico-wrap">
                            <div className="fbox-ico ico-50">
                                <div className="shape-ico color--theme">
								<span className="flaticon-search-engine-1"><img src="assets/images/icons/icon6.png" /></span>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="fbox-txt">
                            <h6 className="s-22 w-700">Secure Data Encryption</h6>
                            <p>Utilizes advanced encryption methods to safeguard sensitive personal emergency information from unauthorized access.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  );
};

export default BrandSlider;
