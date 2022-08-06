import React from 'react';
import {MdOutlineArrowLeft,MdOutlineArrowRight} from 'react-icons/md';

const List = () => {
    return (
        <div className='list'>
            <span className='listTitle'>Continue to watch</span>
            <div className='wrapper'>
                <MdOutlineArrowLeft />
                <div className='container'>

                </div>
                <MdOutlineArrowRight />
            </div>
        </div>
    );
}

export default List;
