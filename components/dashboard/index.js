import React from 'react'
import Layout from './layout';
import Wrapper from '@/layout/wrapper';
import Dask from './DashboardLayout/dask';

const DashboardMain = () => {
  return (
    <Wrapper>
        <Dask />
    </Wrapper>
  )
}

export default DashboardMain;