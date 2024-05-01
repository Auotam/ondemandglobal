import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';


const Dashboard = () => {
  const userData = useUserData(); // Using the custom hook to fetch user data
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if the user is authenticated
        const response = await axios.get('/api/Auth/check'); // Example API route to check authentication status
        if (!response.data.isAuthenticated) {
          // Redirect the user to the login page if they are not authenticated
          router.push('/mydashboard');
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    checkAuthentication();
  }, []);

  if (userData === null) {
    return <p>Loading user data...</p>;
  }

  return (

    <Wrapper>
    <SEO pageTitle={'About'} />
    <Layout>
    
  </Layout>
  </Wrapper>
    
  );
};

export default Dashboard;
