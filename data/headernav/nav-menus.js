const nav_menus_list = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: []
  },
  {
    link: '/about',
    title: 'About',
    hasDropdown: false,
    dropdownItems: [
      { link: '#lnk-1', title: 'Why Milpaq?' },
      { link: '#lnk-2', title: 'Integrations' },
      { link: '#lnk-3', title: 'How It Works' },
      { link: '#features-2', title: 'Best Solutions' },
      { link: '#reviews-1', title: 'Testimonials' }
    ]
  },
  {
    link: '/Features',
    title: 'Services',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: []
  },
  {
    link: '/shop',
    title: 'Price',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: 'about.html', title: 'About Us' },
      { link: 'team.html', title: 'Our Team' },
      { link: 'careers.html', title: 'Careers' },
      { link: 'career-role.html', title: 'Career Details' },
      { link: 'contacts.html', title: 'Contact Us' }
    ]
  },
  {
    link: '/blog',
    title: 'FAQs',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: []
  },
  {
    link: '/contact',
    title: 'Contact',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: []
  }
];

export default nav_menus_list;
