import React, { useRef } from 'react';
import {MdOutlineArrowLeft,MdOutlineArrowRight} from 'react-icons/md';
import ListItem from '../listItem/ListItem';
import './list.css';
import { useState } from 'react';
const List = () => {
const [slideNumber,setSlideNumber]=useState(0);
const [ isMoved,setisMoved]=useState(false);
    const listRef=useRef();
    const handleClick=(direction)=>{
        setisMoved(true);
        let distance=listRef.current.getBoundingClientRect().x-50;
        
        if (direction==="left" && slideNumber>0){
           
            setSlideNumber(slideNumber-1);
          listRef.current.style.transform=`translateX(${230+distance}px)`;
        }
        if (direction==="right" && slideNumber<4){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform=`translateX(${-230+distance}px)`;
          }
          else{
            setSlideNumber(0);
            listRef.current.style.transform=`translateX(0px)`;
          }
  

    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <MdOutlineArrowLeft className='sliderArrow left' onClick={()=>handleClick("left")}
                style={{display:!isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                 <ListItem />
                 <ListItem />
                 <ListItem />
                 <ListItem /> 
                 <ListItem />
                 <ListItem />
                 <ListItem />
                 <ListItem />
                 <ListItem /> 
                 <ListItem />
                </div>
                <MdOutlineArrowRight className='sliderArrow right' onClick={()=>handleClick("right")}/>
            </div>
        </div>
    );
}

export default List;
