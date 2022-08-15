import React from 'react';
import './navbar.css';
import {BsSearch} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';
import img1 from '../../images/user.png';
import {IoIosArrowDown} from 'react-icons/io';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    window.onscroll =()=>{
        setIsScrolled(window.pageYOffset===0 ? false : true)
       // return ()=> window.onscroll=null ;
    }

    return (
        <div className={isScrolled? "navbar scrolled":"navbar"}>
              <div className="container">
                   <div className="left">
                   
                   <span className='logo'> TuniFlix </span>  
                  <Link to='/' className='link'>
                   <span >Homepage  </span>
                   </Link>
                   <Link to='/series' className='link'>
                   <span >Series  </span>
                   </Link>
                   <Link to='/movies' className='link'>
                   <span >Movies </span>
                  </Link>
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



