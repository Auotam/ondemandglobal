import React, { useState } from 'react';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';
import DashboardMain from '@/components/dashboard';
import FormMain from './add-details';
import useUserData from '@/utils/UseUserdata';

const Dashboard = () => {
  const userData = useUserData(); // Fetch user data using your custom hook
  const [formSubmitted, setFormSubmitted] = useState(false);
  


  const handleSubmitForm = async (formData) => {
    try {
      const response = await fetch('/api/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData .email, // Assuming userData.email is accessible and correct
          formData,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to save form data: ${response.statusText}`);
      }
  
      setFormSubmitted(true); // Update state to indicate form submission
    } catch (error) {
      console.error('Error saving form data:', error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <>
     <Wrapper>
          <SEO pageTitle={'OnDemand'} />
          <Layout>
            <DashboardMain />
          </Layout>
        </Wrapper>
    </>
  );
};

export default Dashboard;
