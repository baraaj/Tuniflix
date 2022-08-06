import React from 'react';
import {MdOutlineArrowLeft,MdOutlineArrowRight} from 'react-icons/md';
import ListItem from '../listItem/ListItem';
import './list.css';

const List = () => {
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <MdOutlineArrowLeft className='sliderArrow left'/>
                <div className="container">
                 <ListItem />
                 <ListItem />
                 <ListItem />
                 <ListItem /> 
                 <ListItem />
                </div>
                <MdOutlineArrowRight className='sliderArrow right'/>
            </div>
        </div>
    );
}

export default List;
