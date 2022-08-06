import React from 'react';
import img4 from '../../images/wolf.jpg';
import './listItem.css';
import {FaPlay} from 'react-icons/fa';
import {RiAddLine} from 'react-icons/ri';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';
import { useState } from 'react';
 
const ListItem = ({index}) => {
    const [isHovered,setIsHovered]=useState(false);
    return (
        <div className="listItem" 
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(true)}
        style={{left:isHovered && index*225-50}}>
            <img className='img4' src={img4} alt='' />
            <div className='itemInfo'>
            <div className='icons'>
            <FaPlay />
            <RiAddLine />
            <AiOutlineLike />
            <AiOutlineDislike />
            </div>
            <div className='itemInfoTop'>
                <span>1hour 14min</span>
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className='desc'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
            </div>
            <div className='genre'>
                  Action
               </div>
            </div>
        </div>
    );
}

export default ListItem;
