import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';
import DashboardMain from '@/components/dashboard';
import Selectframe from '@/components/dashboard/Lookup/selectframe';


const Lookup = () => {
 

  return (

    <Wrapper>
    <SEO pageTitle={'About'} />
    <Layout>
      <Selectframe />
  </Layout>
  </Wrapper>
    
  );
};

export default Lookup;
