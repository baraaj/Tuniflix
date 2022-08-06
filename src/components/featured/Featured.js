import React from 'react';
import './featured.css';
import img2 from '../../images/movi.jpg';
import img3 from '../../images/mov.jpg';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type  && (
                <div className="category">
                    <span>{type==="movie" ? "Movies":"Series"}</span> 
                    
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
             <img   src={img3} alt='' /> 
             <span className='desc'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</span>
            
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
