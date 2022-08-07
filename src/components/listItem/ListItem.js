import React from 'react';
import img4 from '../../images/wolf.jpg';
import './listItem.css';
import {FaPlay} from 'react-icons/fa';
import {RiAddLine} from 'react-icons/ri';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';
import { useState } from 'react';
 
const ListItem = ({index}) => {
    const [isHovered,setIsHovered]=useState(false);
    const trailer="https://www.youtube.com/watch?v=_kRab62q54M.mp4";
    return (
        <div className="listItem" 
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
        style={{left:isHovered && index*225-50 +index*2.5}}>
          
            <img className='img4' src={img4} alt='' />
           {isHovered && (
            <div>
            <video src="/build/videos/arcnet.io(7-sec).mp4" type="video/mp4" autoPlay={true} />
            <div className="itemInfo">
            <div className="icons">
            <FaPlay className="icon"/>
            <RiAddLine className="icon"/>
            <AiOutlineLike className="icon"/>
            <AiOutlineDislike className="icon"/>
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
            )}
            
        </div>
    );
}

export default ListItem;
