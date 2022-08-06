 import './home.css' ;
 import img2 from '../images/movies.jpeg';
  
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';
import Footer from '../components/footer/Footer';
const Home = () => {
    return (
        <div className="home">
              <Navbar />
              <Featured type="movie"/>
              <List/>
              <List/>
              <List/>
              <Footer />
               
        </div> )
}

export default Home;
