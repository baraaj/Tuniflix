import React from 'react';
import './featured.css';
import img2 from '../../images/movies.jpeg';
import img3 from '../../images/user.png';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
const Featured = () => {
    return (
        <div className='featured'>
             <img   src={img2} alt='' /> 
             <div className='info'>
             <img   src={img3} alt='' /> 
             <span className='desc'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</span>
             </div>
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
    );
}

export default Featured;