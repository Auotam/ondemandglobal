// components/FoundationSection.js
import { useState } from 'react';

const FoundationSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };
	

	const PricingCard = ({ title, price, validity, features }) => {
		const showDiscount = (title === "Family" || title === "Business+") && isYearly;
	
		return (
			<div className="col">
				<div className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
					<div className="pricing-table-header">
						{showDiscount && (
							<div className="pricing-discount bg--yellow-400 color--black r-36">
								<h6 className="s-17">Save {isYearly ? '25%' : '0%'}</h6>
							</div>
						)}
						<h5 className="s-24 w-700">{title}</h5>
						<div className="price mt-25">
							<sup className="color--black">$</sup>
							<span className="color--black">{price}</span>
							<sup className="coins color--black">.99</sup>
							<sup className="validity color--grey">{validity}</sup>
						</div>
					</div>
					<a href="#" className="pt-btn btn btn--theme hover--theme">
						{isYearly ? 'Start 14-day trial' : 'Start 7-day free trial'}
					</a>
					<ul className="pricing-features color--black ico-10 ico--green mt-25">
						{features.map((feature, index) => (
							<li key={index}>
								<p>
									<span>
										<img src="/assets/images/check.png" alt="Check Icon" />
									</span>
									{feature}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	};
	
    const ToggleButton = () => (
        <div className="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
            <span className="toggler-txt">Billed monthly</span>
            <label className="switch-wrap">
                <input type="checkbox" id="checbox" onChange={handleToggle} checked={isYearly} />
                <span className="switcher bg--grey switcher--theme">
                    <span className="show-annual"></span>
                    <span className="show-monthly"></span>
                </span>
            </label>
            <span className="toggler-txt">Billed yearly</span>
            <p className="color--theme">Save up to {isYearly ? '25%' : '0%'} with yearly billing</p>
        </div>
    );

    return (
        <section id="pricing-3" className="gr--whitesmoke inner-page-hero pb-60 pricing-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-title text-center mb-60">
                            <h2 className="s-52 w-700">Simple, Flexible Pricing</h2>
                            <ToggleButton />
                        </div>
                    </div>
                </div>
                <div className="pricing-1-wrapper ">
                    <div className="row row-cols-1 row-cols-md-3">
                        <PricingCard
                            title="Individual"
                            price={isYearly ? '49' : '4'}
                            validity={isYearly ? 'Year' : 'Month'}
                            features={[
                                'Secure storage for emergency information',
                                'Access to personal QR code'
                            ]}
                        />
                        <PricingCard
                            title="Family"
                            price={isYearly ? '112' : '99'}
                            validity={isYearly ? 'Year/5 Users' : 'Month'}
                            features={[
                                'Secure storage for emergency information',
                                'Access to personal QR code'
                            ]}
                        />
                        <PricingCard
                            title="Business+"
                            price={isYearly ? '153' : '99'}
                            validity={isYearly ? 'Year' : 'Month'}
                            features={[
                                
                                'Secure storage and sharing for business information',
                                'Access to company and individual employee’s QR code'
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;
