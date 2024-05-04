import Invoice from '@/components/dashboard/invoice/invoice'
import React from 'react'
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';

const Billing = () => {
  return (

    <Wrapper>
    <SEO pageTitle={'Billing '} />
    <Layout>
        <Invoice />
      
    
  </Layout>
  </Wrapper>
    



  )
}

export default Billing