import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';
import DashboardMain from '@/components/dashboard';
import AccountPage from '@/components/dashboard/account/accountPage';


const Dashboard = () => {
  
  // if (userData === null) {
  //   return <p>Loading user data...</p>;
  // }

  return (

    <Wrapper>
    <SEO pageTitle={'About'} />
    <Layout>
      
    
  </Layout>
  </Wrapper>
    
  );
};

export default Dashboard;
