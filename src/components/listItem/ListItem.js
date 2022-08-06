import React from 'react';
import img4 from '../../images/movie.jpg';
import './listItem.css';
import {FaPlay} from 'react-icons/fa';
import {RiAddLine} from 'react-icons/ri';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';
 
const ListItem = () => {
    return (
        <div className='listItem'>
            <img src={img4} alt='' />
            <div className='itemInfo'>
            <div className='icons'>
            <FaPlay />
            <RiAddLine />
            <AiOutlineLike />
            <AiOutlineDislike />
            </div>
            </div>
        </div>
    );
}

export default ListItem;
