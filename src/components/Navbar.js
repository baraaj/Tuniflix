import React from 'react';
import './navbar.css';
import {BsSearch} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';
import img1 from '../images/user.png';
import {IoIosArrowDown} from 'react-icons/io';
 
const Navbar = () => {
    return (
        <div className="navbar">
              <div className="container">
                   <div className="left">
                   
                   <span className='logo'> TuniFlix </span>  
                  
                   <span >Homepage  </span>
                   <span >Series  </span>
                   <span >Movies </span>
                   <span >New and Popular  </span>
                   <span >My List  </span>
                   </div>
                   <div className='right'>
                    <BsSearch className='icon'/>
                      <span className='icon'>KID</span>
                      <IoMdNotificationsOutline className='icon' />
                      <img src={img1} alt='User image' /> 
                      <div className=' profile'>  

                      <IoIosArrowDown className='icon' />
                      <div className='options'>
                      <span>Settings</span>
                      <span>Logout</span>
                      </div>
                       </div>
                   </div>
             </div>
        </div>
    );
}

export default Navbar;



