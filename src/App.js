import Home from './pages/Home';
import './com/Navbar.css';
import Navbar from './com/Navbar';

import {BrowserRouter as Router, Route ,Routes} from "react-router-dom";
function App(){
 
  return(
  
    <div className ="App">

      <Router>
      
      <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}
export default App;