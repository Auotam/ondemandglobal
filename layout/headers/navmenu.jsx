import Link from 'next/link';
import React from 'react';
import nav_menus_list from '../../data/headernav/nav-menus';

const NavMenu = () => {
    return (
        <>

            <ul className="wsmenu-list nav-theme">
                {nav_menus_list?.map((item, index) => {
                    return (
                        <li key={index} className={`${item.hasDropdown && !item.megamenu ? 'active menu-item-has-children'
                            : item.megamenu && 'mega-menu menu-item-has-children'}`}>
                            <Link href={`${item.link}`}>{`${item.title}`}</Link>

                            {item?.hasDropdown && !item.megamenu && <ul className="sub-menu">
                                {item?.dropdownItems?.map((menu, index) => (
                                    <li key={index}><Link href={`${menu.link}`}>{menu.title}</Link></li>
                                ))}
                            </ul>}
                        </li>
                    )
                })}


							    	<li class="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
							    		<a href="/login" class="h-link">Sign in</a>
							    	</li>


								    
								    <li class="nl-simple" aria-haspopup="true">
								    	<a href="/signup" class="btn r-04 btn--theme hover--tra-white last-link">Sign up</a>
								    </li> 

            </ul>
        </>
    );
};

export default NavMenu;