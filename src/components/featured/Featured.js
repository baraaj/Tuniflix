import React from 'react';
import './featured.css';
import img2 from '../../images/movies.jpeg';
const Featured = () => {
    return (
        <div>
             <img style={{"width":"100% ","height":"700px " }} src={img2} alt='' /> 
             <div className='info'>
             <img style={{"width":"100% ","height":"700px " }} src={img2} alt='' /> 
             <span className='desc'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</span>
             </div>
             <div className='buttons'>
                <button className='play'></button>
                <button className='more'></button>


             </div>
        </div>
    );
}

export default Featured;
