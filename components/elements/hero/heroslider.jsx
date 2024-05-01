import Link from 'next/link';
import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSlider = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner-1-1.jpg',
            sliderSubtitle: 'Provides hassle-free backyard transformations',
            sliderTitle: 'make dream gardening',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner-2-1.jpg',
            sliderSubtitle: 'Provides hassle-free backyard transformations',
            sliderTitle: 'Jik Flower Scaping',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        },
        {
            id: 3,
            sliderBg: '/assets/img/banner/banner-4-1.jpg',
            sliderSubtitle: 'Provides hassle-free backyard transformations',
            sliderTitle: 'k.i Flower plants',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        }
    ];

    return (


        <section id="hero-10" className="bg--scroll hero-section">
				<div className="container">	
					<div className="row d-flex align-items-center">


						
						<div className="col-md-6">
							<div className="hero-10-txt wow fadeInRight" >

								
								<h2 className="s-52 w-700">Unlocking vital info in seconds</h2>

								
								<h4 className="s-28 color--grey">Our quick response programs are the key to accessing employee emergencies and patient health with lightning speed!"</h4> 

								
								<div className="btns-group">
									<a href="#banner-13" className="btn r-04 btn--theme hover--black">Get started</a>
									<a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="video-popup2 btn r-04 btn--tra-black hover--violet-100">See how it works
									</a>
								</div>	

								
								

							</div>
						</div>	


						
						<div className="col-md-6">	
							<div className="hero-10-img wow fadeInLeft" >	
								<img className="img-fluid" src="/assets/images/dashboard-04.png" alt="hero-image" />					
							</div>
						</div>	
						

					</div>    
				</div>	 
			</section>
  )
};

export default HeroSlider;