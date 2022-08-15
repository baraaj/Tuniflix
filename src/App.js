import './App.css';
import Home from '../src/pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes,Link  } from "react-router-dom";
import { Domain } from '@material-ui/icons';
function App() {
  const user=true;
  return (
    <BrowserRouter>
    <div className="App">
    
    
    
      
      < Routes>
         <Route exact path="/" element={user ?<Home /> : <Link to="/register"><Register /></Link>} />
         <Route exact path="/register" element={!user ?<Register /> : <Link to="/"><Home /></Link>} />
         <Route exact path="/login" element={!user ?<Login /> : <Link to="/"><Home /></Link>} />
         { user &&
         <>
         <Route exact path="/movies" element={< Home type="movies" />}  />
         <Route exact path="/series" element={< Home type="series" />}  />
         <Route exact path="/watch" element={< Watch />}  />
         </>
         }

      </Routes>


      
    
  
      
    </div>
    </BrowserRouter>
  );
}

export default App;
