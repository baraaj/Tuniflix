 import './home.css' ;
 import img2 from '../images/movies.jpeg';
  
import Navbar from './../components/Navbar';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';
const Home = () => {
    return (
        <div className="home">
              <Navbar />
              <Featured type="movie"/>
              <List/>
        </div> )
}

export default Home;
