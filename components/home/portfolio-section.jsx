import Link from 'next/link';
import React from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import portfolioList from '../../data/portfolio-data';

const PortfolioSection = () => {
    return (
        <>
        <section id="lnk-2" className="pt-100 ct-02 content-section division">
        <div className="container">
    
            <div className="row d-flex align-items-center">
    
                <div className="col-md-6">
                    <div className="img-block left-column wow fadeInRight">
                        <img className="img-fluid" src="/assets/images/img-03.png" alt="content-image" /> 
                    </div>
                </div>
    
                <div className="col-md-6">
                    <div className="txt-block right-column wow fadeInLeft">
    
                        <div className="txt-box">
    
                            <h5 className="s-24 w-700">The smarter way to work</h5>
    
                            <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                            </p>
    
                        </div>
    
                        <div className="txt-box mb-0">
    
                            <h5 className="s-24 w-700">Full access to all features</h5>
    
                            <ul className="simple-list">
    
                                <li className="list-item">
                                    <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis
                                        sodales magna undo aoreet primis
                                    </p>
                                </li>
    
                                <li className="list-item">
                                    <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                                        ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien
                                        a blandit
                                    </p>
                                </li>
    
                            </ul>
    
                            <a href="#features-2" className="btn btn-sm r-04 btn--tra-black hover--theme">
                                What's possible?
                            </a>
    
                        </div>
    
                    </div>
                </div>
    
            </div>
    
        </div>
    </section>

<section id="features-12" className="shape--bg shape--white-500 pt-100 features-section division">
    <div className="container">
        <div className="row d-flex align-items-center">

            <div className="col-md-5">
                <div className="txt-block left-column wow fadeInRight">

                    <span className="section-id">One-Stop Solution</span>

                    <h2 className="s-46 w-700">Smart solutions, real-time results</h2>

                    <p>Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis neque auctor turpis
                        vitae dolor luctus placerat magna ligula and cursus vitae
                    </p>

                    <div className="cbox-1 ico-15">
                        <div className="ico-wrap color--theme">
                            <div className="cbox-1-ico"><span className="flaticon-check"></span></div>
                        </div>
                        <div className="cbox-1-txt">
                            <p>Magna dolor luctus at egestas sapien</p>
                        </div>
                    </div>

                    <div className="cbox-1 ico-15">
                        <div className="ico-wrap color--theme">
                            <div className="cbox-1-ico"><span className="flaticon-check"></span></div>
                        </div>
                        <div className="cbox-1-txt">
                            <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                               turpis and ultrice magnis
                            </p>
                        </div>
                    </div>

                    <div className="cbox-1 ico-15">
                        <div className="ico-wrap color--theme">
                            <div className="cbox-1-ico"><span className="flaticon-check"></span></div>
                        </div>
                        <div className="cbox-1-txt">
                            <p className="mb-0">Volute turpis dolores and sagittis congue</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-md-7">
                <div className="fbox-12-wrapper wow fadeInLeft">
                    <div className="row">

                        <div className="col-md-6">
                            <div id="fb-12-1" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                <div className="fbox-ico ico-50">
                                    <div className="shape-ico color--theme">
                                        <span className="flaticon-layers-1"></span>
                                    </div>
                                </div>
                                <div className="fbox-txt">
                                    <h5 className="s-19 w-700">Content Marketing</h5>
                                    <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                </div>
                            </div>
                            <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                                <div className="fbox-ico ico-50">
                                    <div className="shape-ico color--theme">
                                        <span className="flaticon-tutorial"></span>
                                    </div>
                                </div>
                                <div className="fbox-txt">
                                    <h5 className="s-19 w-700">Video Marketing</h5>
                                    <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="fb-12-3" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                <div className="fbox-ico ico-50">
                                    <div className="shape-ico color--theme">
                                        <span className="flaticon-pay-per-click"></span>
                                    </div>
                                </div>
                                <div className="fbox-txt">
                                    <h5 className="s-19 w-700">Pay Per Click (PPC)</h5>
                                    <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                </div>
                            </div>
                            <div id="fb-12-4" className="fbox-12 bg--white-100 block-shadow r-12">
                                <div className="fbox-ico ico-50">
                                    <div className="shape-ico color--theme">
                                        <span className="flaticon-taxes"></span>
                                    </div>
                                </div>
                                <div className="fbox-txt">
                                    <h5 className="s-19 w-700">Business Analytics</h5>
                                    <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section id="lnk-1" class="pt-100 ct-02 content-section division">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-md-6">
                <div class="img-block left-column wow fadeInRight">
                    <img class="img-fluid" src="/assets/images/img-10.png" alt="content-image" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="txt-block right-column wow fadeInLeft">
                    <span class="section-id">Enhance Engagement</span>
                    <h2 class="s-46 w-700">Engage your most valuable visitors</h2>
                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>
                    <h5 class="s-24 w-700">Digits that define growth</h5>
                    <ul class="simple-list">
                        <li class="list-item">
                            <p>Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue cursus dolor</p>
                        </li>
                        <li class="list-item">
                            <p class="mb-0">Purus suscipit cursus vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>




    </>
    
    );
};

export default PortfolioSection;