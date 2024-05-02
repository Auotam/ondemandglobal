// components/Layout.js
import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import { main } from '@popperjs/core';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main className='left-40'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
