import React from 'react';
import './navbar.css';
import {BsSearch} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';
const Navbar = () => {
    return (
        <div className="navbar">
              <div className="container">
                   <div className="left">
                   
            <span className='logo'> TuniFlex </span>  
                  
                   <span >Homepage  </span>
                   <span >Series  </span>
                   <span >Movies </span>
                   <span >New and Popular  </span>
                   <span >My List  </span>
                   </div>
                   <div className='right'>
                    <BsSearch />
                      <span>KID</span>
                      <IoMdNotificationsOutline />
                   </div>
             </div>
        </div>
    );
}

export default Navbar;



