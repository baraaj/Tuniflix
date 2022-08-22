import React from 'react';
import img4 from '../../images/wolf.jpg';
import './listItem.css';
import {FaPlay} from 'react-icons/fa';
import {RiAddLine} from 'react-icons/ri';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
const ListItem = ({index,item}) => {
    const [isHovered,setIsHovered]=useState(false);
    const [movie,setMovie]=useState({});

    useEffect(() => {
        const getMovie = async () => {
          try {
            const res = await axios.get("/movies/find/" + item, {
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjhkYjM5N2IzMTc5MjU5ZGFjYzNhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU4NTAwOCwiZXhwIjoxNjYxMDE3MDA4fQ.sjUCMJaYN8kYD_Fc12jd5aUnheW1kdGJD4uIZWge8_E",
              },
            });
            
            setMovie(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMovie();
      }, [item]);
      console.log(movie);
    return (
      

        <Link to="/watch" state={{ movies:movie}}>
             
        <div className="listItem" 
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
        style={{left:isHovered && index*225-50 +index*2.5}}>
          
            <img className='img4'src={movie.img} alt='' />
           {isHovered && (
            <div>
            <video src={movie.trailer} type="video/mp4" autoPlay={true} />
            <div className="itemInfo">
            <div className="icons">
            <FaPlay className="icon"/>
            <RiAddLine className="icon"/>
            <AiOutlineLike className="icon"/>
            <AiOutlineDislike className="icon"/>
            </div>
            <div className='itemInfoTop'>
                <span>{movie.duration}</span>
                <span className='limit'>+{movie.limit}</span>
                <span>{movie.year}</span>
            </div>
            <div className='desc'>
            {movie.desc}
            </div>
            <div className='genre'>
                 {movie.genre}
               </div>
            </div> 
            </div>
            )}
            
        </div>
        </Link>
    );
}

export default ListItem;
