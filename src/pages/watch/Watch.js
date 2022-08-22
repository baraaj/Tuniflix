import React from 'react';
import './watch.css';
import {AiOutlineRollback} from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
const Watch = ( ) => {
    const location=useLocation();
        const movie=location.movies;
         
       //console.log(location);
         
    return (
       
        <div className='watch'>
            <Link to="/">
            <div className='back'>
                <AiOutlineRollback/>
                Home
            </div>
            </Link>
            <video 
            className='video'
            autoPlay
            progress
            controls
            src={movie.video}
            />
        </div>
    );
}

export default Watch;
