 import './home.css' ;
 import img2 from '../../images/movies.jpeg';
  
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Home = ({type}) => {
    const [lists,setLists]=useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(()=>{
        const getRandomLists=async()=>{
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${
                      genre ? "&genre=" + genre : ""
                    }`,
                    {
                      headers: {
                        token:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjhkYjM5N2IzMTc5MjU5ZGFjYzNhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU4NTAwOCwiZXhwIjoxNjYxMDE3MDA4fQ.sjUCMJaYN8kYD_Fc12jd5aUnheW1kdGJD4uIZWge8_E",
                      },
                    }
                  );
                  setLists(res.data);
                  console.log(res.data);
                } catch (err) {
                  console.log(err);
                }
              
        };
        getRandomLists();
    },[type,genre])
    return (
        <div className="home">
              <Navbar />
              <Featured type={type}/>
              {lists.map((list)=>(
                <List list={list}/>
              ))}
               
              <Footer />
               
        </div> )
}

export default Home;
