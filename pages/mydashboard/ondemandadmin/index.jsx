import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';
import DashboardMain from '@/components/dashboard';
import AccountPage from '@/components/dashboard/account/accountPage';
import UsersTable from '@/components/admin/usertable';


const Dashboard = () => {


  return (

    <Wrapper>
    <SEO pageTitle={'About'} />
    <Layout>
      <UsersTable />
    
  </Layout>
  </Wrapper>
    
  );
};

export default Dashboard;
