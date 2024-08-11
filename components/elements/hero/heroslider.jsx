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
        <div className="hero-slider-container">
            <div className="hero-background-image"></div>
            <div className="hero-video-container hero-video">
                <video autoPlay loop muted className='hero-video' >
                    <source src="/assets/images/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            
            </div>

            <section id="hero-10" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center mx-auto justify-content-center">
                        <div className="col-md-6 order-md-2 mt-4 text-center">
                            <div className="hero-10-txt wow fadeInRight">
                                <h2 className="s-52 w-700">Your Information, One Scan Away</h2>
                                <h4 className="s-28 color--">Keep Your Personal Information Handy with a Quick Scan.</h4>
                                <div className="btns-group">
                                    <a href="/register" className="btn r-04 btn--white hover--black mb-4">Get started</a>
                                    <a href="javascript:" className="video-popup2 btn r-04 btn-white color-white border-white mb-4 ">See how it works</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSlider;
