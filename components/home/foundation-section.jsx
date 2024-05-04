import React, { useState } from 'react';

const FoundationSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    const PricingCard = ({ title, monthlyPrice, yearlyPrice, features }) => {
        // Calculate savings percentage based on the billing frequency
        const savingsPercentage = isYearly ? 25 : 0;
        const price = isYearly ? yearlyPrice : monthlyPrice;
        const billingPeriod = isYearly ? 'year' : 'month';
        const validity = isYearly ? 'yr' : 'mo';

		const additionalFeatures = {
            Basic: '4 User',
            "Business+" : '5 Users' // Example advanced feature
        };


        return (
            <div className="col">
                <div className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                    <div className="pricing-table-header">
                        {isYearly && (
                            <div className="pricing-discount bg--yellow-400 color--black r-36">
                                <h6 className="s-17">Save 25 %</h6>
                            </div>
                        )}
                        <h5 className="s-24 w-700">{title}</h5>
						
                        
                        <div className="price mt-25">
                            <sup className="color--black">$</sup>
                            <span className="color--black">{price}</span>
                            <sup className="coins color--black">.99</sup>
                            <sup className="validity color--grey">&nbsp;/&nbsp;{validity} {additionalFeatures[title] && (<font>&nbsp;/&nbsp;{additionalFeatures[title]}</font>
                            )}</sup>
                        </div>
                    </div>
                    <a href="#" className="pt-btn btn btn--theme hover--theme">
                        {isYearly ? 'Start 14-day trial' : 'Start 7-day free trial'}
                    </a>
                    
                </div>
            </div>
        );
    };

    const ToggleButton = () => (
        <div className="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
            <span className="toggler-txt">Billed monthly</span>
            <label htmlFor="checkbox" className="switch-wrap">
                <input type="checkbox" id="checkbox" onChange={handleToggle} checked={isYearly} />
                <span className="switcher bg--grey switcher--theme">
                    <span className="show-annual"></span>
                    <span className="show-monthly"></span>
                </span>
            </label>
            <span className="toggler-txt">Billed yearly</span>
            <p className="color--theme">Save up to 25% with yearly billing</p>
        </div>
    );

    return (
        <>
            <section id="pricing-1" className="gr--whitesmoke pb-40 inner-page-hero pricing-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title mb-70">
                                <h2 className="s-52 w-700">Simple, Flexible Pricing</h2>
                                <ToggleButton />
                            </div>
                        </div>
                    </div>
                    <div className="pricing-1-wrapper">
                        <div className="row row-cols-1 row-cols-md-3">
                            <PricingCard
                                title="Starter"
                                monthlyPrice="4"
                                yearlyPrice="58"
                                features={[
                                   
                                ]}
                            />
                            <PricingCard
                                title="Basic"
                                monthlyPrice="14"
                                yearlyPrice="125"
                                features={ '/ 4 Users'
                                   
                                }
                            />
                            <PricingCard
                                title="Business+"
                                monthlyPrice="16"
                                yearlyPrice="144"
                                features={
									'5 Users'
                                   
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

			<section id="comp-table" className="pt-0 pb-60 pricing-section division">
    <div className="container">
        <table className="table text-center">
            <thead>
                <tr>
                    <th style={{ width: '34%', textAlign: "center" }}>Features</th>
					
                    <th style={{ width: '22%' }}>Starter</th>
                    <th style={{ width: '22%' }}>Family</th>
                    <th style={{ width: '22%' }}>Business+</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" className="text-center">QR Code Access</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Customizable ID Cards</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Family Sharing</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Business Integration</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Emergency Notifications</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Secure Data Encryption</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Offline Access</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Medical Records Integration</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Multi-language Support</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Real-time Location Sharing</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Emergency Contact Notifications</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Secure Document Storage</th>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Advanced User Management</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Remote Device Wipe</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Priority Customer Support</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">On-Demand Training Resources</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Data Usage Analytics</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Scheduled Backups</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Multi-device Sync</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                <tr>
                    <th scope="row" className="text-center">Multi-level Access Controls</th>
                    <td className="color--black">❌</td>
                    <td className="color--black">❌</td>
                    <td className="color--black">✔️</td>
                </tr>
                {/* Add more rows as needed */}
            </tbody>
        </table>
    </div>
</section>


            {/* Additional sections and content here */}
        </>
    );
};

export default FoundationSection;
