import React from 'react';
import './watch.css';
import {AiOutlineRollback} from 'react-icons/ai';
const Watch = () => {
    return (
        <div className='watch'>
            <div className='back'>
                <AiOutlineRollback/>
                Home
            </div>
            <video 
            className='video'
            autoPlay
            progress
            controls
            src=''
            />
        </div>
    );
}

export default Watch;
