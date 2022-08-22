import React from 'react';
import './featured.css';
import img2 from '../../images/all.jpg';
import img3 from '../../images/mov.jpg';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Featured = ({type}) => {
    const[content,setContent]=useState({});
    useEffect(()=>{
        const getRandomContent=async()=>{
      try {
        
            const res=await axios.get(`/movies/random?type=${type}`,
            
            {
                headers: {
                  token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjhkYjM5N2IzMTc5MjU5ZGFjYzNhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU4NTAwOCwiZXhwIjoxNjYxMDE3MDA4fQ.sjUCMJaYN8kYD_Fc12jd5aUnheW1kdGJD4uIZWge8_E",
                },
              }
            
            );
           
           setContent(res.data[0]);
      }
      catch (err) {
         console.log(err);
     } 
    };

       getRandomContent();

    }
    ,[type]);
    return (
        <div className='featured'>
            {type  && (
                <div className="category">
                    <span>{type==="movies" ? "Movies":"Series"}</span> 
                    
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
                ) }

             <img  className='img2' src={img2} alt='' /> 
             <div className='info'>
             <img   src={content.img} alt='' /> 
             <span className='desc'>{content.desc}</span>
            
             <div className='buttons'>
                <button className='play'>
                    <FaPlay />
                    <span>Play</span>
                </button>
                <button className='more'>
                    <AiOutlineInfoCircle />
                    <span>Info</span>
                </button>

                </div>
             </div>
        </div>
    );
}

export default Featured;
