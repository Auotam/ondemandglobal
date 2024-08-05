import React, { useState } from 'react';
import { useRouter } from 'next/router';

const FoundationSection = ({ onPlanSelect = () => {} }) => {
    const router = useRouter();
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    const handleButtonClick = (title, price) => {
        const planDetails = {
            title,
            price,
            isYearly
        };

        // Call the callback function passed from the parent component
        onPlanSelect(planDetails);

        // Navigate to '/register' with planDetails as query parameters
        router.push({
            pathname: '/register',
            query: planDetails
        });
    };

    const PricingCard = ({ title, monthlyPrice, yearlyPrice, features, isDisabled }) => {
        const price = isYearly ? yearlyPrice : monthlyPrice;
        const validity = isYearly ? 'yr' : 'mo';

        return (
            <div className="col">
                <div className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                    <div className="pricing-table-header">
                        {isYearly && (
                            <div className="pricing-discount bg--yellow-400 color--black r-36">
                                <h6 className="s-17">Save 25%</h6>
                            </div>
                        )}
                        <h5 className="s-24 w-700">{title}</h5>
                        <div className="price mt-25">
                            <sup className="color--black">$</sup>
                            <span className="color--black">{price}</span>
                            <sup className="coins color--black"></sup>
                            <sup className="validity color--grey">&nbsp;/&nbsp;{validity}</sup>
                        </div>
                    </div>
                    <button
                        className="pt-btn btn btn--theme hover--theme"
                        onClick={() => !isDisabled && handleButtonClick(title, price)}
                        disabled={isDisabled}
                    >
                        {isDisabled ? 'Coming Soon...' : (isYearly ? 'Start 14-day trial' : 'Start 7-day free trial')}
                    </button>
                    <ul className="pricing-features color--black ico-10 ico--green mt-25">
                        {features.map((feature, index) => (
                            <li key={index}><p>{feature}</p></li>
                        ))}
                    </ul>
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
            <section id="pricing" className="gr--whitesmoke pb-40 inner-page-hero pricing-section">
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
                                title="Individual"
                                monthlyPrice="0"
                                yearlyPrice="0"
                                features={[
                                    '✔️ QR Code Access',
                                    '✔️ ID Cards (Non-Customizable) ',
                                    '✔️ Secure Data Encryption',
                                    '✔️ Emergency Notifications',
                                    '❌ Family Sharing',
                                    '❌ Business Integration'
                                ]}
                                isDisabled={false}
                            />
                            <PricingCard
                                title="Family"
                                monthlyPrice="4.99"
                                yearlyPrice="44.91"
                                features={[
                                    '✔️ QR Code Access',
                                    '✔️ ID Cards (Customizable)',
                                    '✔️ Secure Data Encryption',
                                    '✔️ Emergency Notifications',
                                    '✔️ (4 members, $2.99/additional)',
                                    '❌ Business Integration'
                                ]}
                                isDisabled={true}
                            />
                            <PricingCard
                                title="Business"
                                monthlyPrice="14.99"
                                yearlyPrice="134.91"
                                features={[
                                    '✔️ QR Code Access',
                                    '✔️ ID Cards (Customizable)',
                                    '✔️ Secure Data Encryption',
                                    '✔️ Emergency Notifications',
                                    '✔️ (5 users, $2.99/additional)',
                                    '✔️ Business Integration'
                                ]}
                                isDisabled={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundationSection;
