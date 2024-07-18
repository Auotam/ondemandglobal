// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from Next.js router
import DashboardIcon from '@mui/icons-material/Dashboard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AssistantIcon from '@mui/icons-material/Assistant';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HelpIcon from '@mui/icons-material/Help';

const Sidebar = () => {
  const router = useRouter();

  // Define navigation items with href, text, and icon
  const navItems = [
    { href: '/mydashboard', text: 'Dashboard', icon: <DashboardIcon /> },
    { href: '/mydashboard/qr-management', text: 'Qr Management', icon: <QrCodeIcon /> },
    { href: '/mydashboard/id-card-management', text: 'Id Card Management', icon: <AssignmentIndIcon /> },
    { href: '/mydashboard/billing', text: 'Subscription & Billing', icon: <CardMembershipIcon /> },
    { href: '/mydashboard/feedback', text: 'Feedback & Suggestions', icon: <AssistantIcon /> },
    { href: '/mydashboard/account', text: 'Account Setting', icon: <AccountBalanceIcon /> },
    { href: '/mydashboard/help', text: 'Help & Support', icon: <HelpIcon /> },
  ];

  // Function to determine if a link is active
  const isActiveLink = (href) => {
    return router.pathname === href; // Check if current route matches href
  };

  return (
    <aside className="sidebar-nav-wrapper">
      <div className="navbar-logo">
        <a href="index.html">
          <img className='logo' src="../assets/images/logo-white.png" alt="" />
        </a>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className={`nav-item ${isActiveLink(item.href) ? 'active' : ''}`}>
              <Link href={item.href}>
                <a>
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
          <span className="divider"><hr /></span>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
