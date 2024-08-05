import React from "react";
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HeaderOne from "@/layout/headers/header";
import FooterOne from "@/layout/footers/footer";



const PrivacyPolicy = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'OnDemand '} />
          
    
    <HeaderOne />

    <div className="main pt-100">
      <div className="wsmainwp clearfix">
      {/* <div class="section">
        <h1>Terms and Conditions</h1>
        <h2>1. Introduction</h2>
        <p>
          Welcome to On Demand Global. These Terms and Conditions govern your
          use of our website and services. By using our platform, you agree to
          comply with these terms.
        </p>

        <h2>2. Account Registration</h2>
        <p>
          To access our services, you must register an account. You agree to
          provide accurate and complete information during registration and keep
          your account information updated.
        </p>

        <h2>3. Services</h2>
        <p>
          On Demand Global provides a platform for generating Personal Emergency
          Profiles using QR codes. The services are intended for individuals,
          families, businesses, and various industries.
        </p>

        <h2>4. Subscription and Payment</h2>
        <ul>
          <li>Subscriptions are billed on a monthly basis.</li>
          <li>
            The monthly fee is applicable for the entire month, regardless of
            when you cancel the subscription.
          </li>
          <li>
            Refunds are available if requested within 24 hours of the initial
            purchase.
          </li>
        </ul>

        <h2>5. Cancellation</h2>
        <p>
          You can cancel your subscription at any time through your account
          settings. Upon cancellation, you will continue to have access to the
          services until the end of the current billing period. The monthly fee
          remains applicable for the whole month in which you cancel.
        </p>

        <h2>6. Refund Policy</h2>
        <p>
          Refunds are only available if requested within 24 hours of the initial
          purchase. After 24 hours, no refunds will be issued.
        </p>

        <h2>7. User Conduct</h2>
        <p>
          You agree not to use our services for any unlawful or prohibited
          activities. You are responsible for maintaining the confidentiality of
          your account information.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All content on the On Demand Global platform, including logos,
          graphics, and text, is the property of On Demand Global or its
          licensors and is protected by copyright laws.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          On Demand Global is not liable for any direct, indirect, incidental,
          or consequential damages arising from your use of our services.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be effective immediately upon posting on our website.
          Your continued use of the services constitutes acceptance of the
          modified terms.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          For any questions or concerns regarding these Terms and Conditions,
          please contact us at{" "}
          <a href="mailto:support@ondemand.global">support@ondemand.global</a>.
        </p>
      </div> */}

      <div class="section privacy">
        <h1>Privacy Policy</h1>
        <h2>1. Introduction</h2>
        <p>
          On Demand Global is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and share your personal
          information.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          <strong>Personal Information:</strong> When you register, we collect
          information such as your name, email address, and contact details.
        </p>
        <p>
          <strong>Usage Data:</strong> We collect data on how you interact with
          our services, including your IP address, browser type, and access
          times.
        </p>

        <h2>3. Use of Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Communicate with you about updates, offers, and promotions</li>
          <li>Ensure the security and integrity of our platform</li>
        </ul>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share your
          information with third parties for the following purposes:
        </p>
        <ul>
          <li>To comply with legal obligations</li>
          <li>To protect and defend our rights and property</li>
          <li>
            With service providers who assist us in operating our platform
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, use, or disclosure.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and update your personal information</li>
          <li>Request the deletion of your account and personal data</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          provide our services and comply with legal obligations.
        </p>

        <h2>8. Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on our website, and your continued use of the services
          constitutes acceptance of the updated policy.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For any questions or concerns regarding this Privacy Policy, please
          contact us at{" "}
          <a href="mailto:support@ondemand.global">support@ondemand.global</a>.
        </p>
      </div>
      </div>
    </div>
    <FooterOne />
  </Wrapper>
   
  );
};

export default PrivacyPolicy;
