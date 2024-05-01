import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const BrandSlider = ({brand_classA}) => {
    return (
<>

<section id="faqs-3" class="pt-100 faqs-section">				
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9">
                <div class="section-title mb-70">	
                    <h2 class="s-50 w-700">Questions & Answers</h2>	
                    <p class="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                </div>	
            </div>
        </div>
        <div class="faqs-3-questions">
            <div class="row">
                <div class="col-lg-6">
                    <div class="questions-holder">
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>1.</span> Getting started with OnDemand</h5>
                            <p class="color--grey">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet</p>
                        </div>	
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>2.</span> What's inside the package?</h5>
                            <p class="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula</p>
                        </div>
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>3.</span> How do I choose a plan?</h5>
                            <ul class="simple-list color--grey">
                                <li class="list-item">
                                    <p>Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien</p>
                                </li>
                                <li class="list-item">
                                    <p>Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien quaerat sodales pretium a purus</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="questions-holder">
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>4.</span> How does OnDemand handle my privacy?</h5>
                            <p class="color--grey">Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus dolor luctus</p>
                            <p class="color--grey">An enim nullam tempor sapien gravida donec congue metus. Vitae arcu mollis blandit integer nemo volute velna</p>
                        </div>
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>5.</span> I have an issue with my account</h5>
                            <p class="color--grey">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec neque blandit justo aliquam molestie nunc sapien justo</p>
                        </div>
                        <div class="question mb-35 wow fadeInUp">
                            <h5 class="s-22 w-700"><span>6.</span> Can I cancel at anytime?</h5>
                            <p class="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">	
                <div class="more-questions mt-40">
                    <div class="more-questions-txt bg--white-400 r-100">
                        <p class="p-lg">Have any questions? <a href="contacts.html" class="color--theme">Get in Touch</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="banner-3" class="pt-100 banner-section">
    <div class="container">
        <div class="banner-3-wrapper bg--03 bg--scroll r-16">
            <div class="banner-overlay">
                <div class="row">
                    <div class="col">
                        <div class="banner-3-txt color--white">
                            <h2 class="s-48 w-700">Starting with OnDemand is easy, fast and free</h2>
                            <p class="p-xl">It only takes a few clicks to get started</p>
                            <a href="signup-1.html" class="btn r-04 btn--theme hover--tra-white">Get srarted - it's free</a>
                            <p class="p-sm btn-txt ico-15">
                                <span class="flaticon-check"></span> Free for 14 days, no credit card required.
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