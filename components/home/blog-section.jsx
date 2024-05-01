import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const BlogSection = () => {
    return (
        <>
       
<section id="features-2" class="py-100 features-section division">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9">
                <div class="section-title mb-80">
                    <h2 class="s-50 w-700">The Complete Solutions</h2>
                    <p class="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                </div>
            </div>
        </div>

        <div class="fbox-wrapper text-center">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col">
                    <div class="fbox-2 fb-1 wow fadeInUp">
                        <div class="fbox-img gr--whitesmoke h-175">
                            <img class="img-fluid light-theme-img" src="/assets/images/f_01.png" alt="feature-image" />
                            <img class="img-fluid dark-theme-img" src="/assets/images/f_01_dark.png" alt="feature-image" />
                        </div>
                        <div class="fbox-txt">
                            <h6 class="s-22 w-700">Intuitive Dashboard</h6>
                            <p>Luctus egestas augue undo ultrice aliquam in lacus congue dapibus</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="fbox-2 fb-2 wow fadeInUp">
                        <div class="fbox-img gr--whitesmoke h-175">
                            <img class="img-fluid light-theme-img" src="/assets/images/f_05.png" alt="feature-image" />
                            <img class="img-fluid dark-theme-img" src="/assets/images/f_05_dark.png" alt="feature-image" />
                        </div>
                        <div class="fbox-txt">
                            <h6 class="s-22 w-700">Effortless Integration</h6>
                            <p>Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="fbox-2 fb-3 wow fadeInUp">
                        <div class="fbox-img gr--whitesmoke h-175">
                            <img class="img-fluid light-theme-img" src="/assets/images/f_02.png" alt="feature-image" />
                            <img class="img-fluid dark-theme-img" src="/assets/images/f_02_dark.png" alt="feature-image" />
                        </div>
                        <div class="fbox-txt">
                            <h6 class="s-22 w-700">Engagement Analysis</h6>
                            <p>Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</section>

<hr class="divider" />

<section class="pt-100 ct-01 content-section division">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-md-6 order-last order-md-2">
                <div class="txt-block left-column wow fadeInRight">
                    <span class="section-id">Productivity Focused</span>
                    <h2 class="s-46 w-700">Achieve more with better workflows</h2>
                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                        vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                    </p>
                    <div class="cbox-1 ico-15">
                        <div class="ico-wrap color--theme">
                            <div class="cbox-1-ico"><span class="flaticon-check"></span></div>
                        </div>
                        <div class="cbox-1-txt">
                            <p>Magna dolor luctus at egestas sapien</p>
                        </div>
                    </div>
                    <div class="cbox-1 ico-15">
                        <div class="ico-wrap color--theme">
                            <div class="cbox-1-ico"><span class="flaticon-check"></span></div>
                        </div>
                        <div class="cbox-1-txt">
                            <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                                turpis ultrice auctor congue varius magnis
                            </p>
                        </div>
                    </div>
                    <div class="cbox-1 ico-15">
                        <div class="ico-wrap color--theme">
                            <div class="cbox-1-ico"><span class="flaticon-check"></span></div>
                        </div>
                        <div class="cbox-1-txt">
                            <p class="mb-0">Volute turpis dolores and sagittis congue</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 order-first order-md-2">
                <div class="img-block right-column wow fadeInLeft">
                    <img class="img-fluid" src="/assets/images/img-13.png" alt="content-image" />
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pt-100 ct-08 content-section division">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9">
                <div class="section-title mb-70">
                    <h2 class="s-50 w-700">Discover insights across all your data with OnDemand</h2>
                    <p class="s-21">Ligula risus auctor tempus magna feugiat lacinia.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="img-block wow fadeInUp">
                    <img class="img-fluid" src="/assets/images/img-19.png" alt="video-preview" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="img-block-btn text-center wow fadeInUp">
                    <a href="#integrations-2" class="btn r-04 btn--tra-black hover--theme">Monitor your activity</a>
                    <ul class="advantages ico-15 clearfix">
                        <li><p>Free 14 days trial</p></li>
                        <li class="advantages-links-divider"><p><span class="flaticon-minus"></span></p></li>
                        <li><p>Exclusive Support</p></li>
                        <li class="advantages-links-divider"><p><span class="flaticon-minus"></span></p></li>
									<li><p>No Fees</p></li>
								</ul>

							</div>
						</div>
					</div>

					
				</div>	  
			</section>	

        </>
    );
};

export default BlogSection;