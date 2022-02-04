import Home from './Home';
import Navbar from './Navbar';
import Add from './Add';
import Details from './Details'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <div className='Content'>
         <Routes>
           <Route path ='/' exact element = {<Home/>}/>
           <Route path ='/Add' exact element = {<Add/>}/>
           <Route path ='/:id' exact element = {<Details/>}/>
           <Route path = "*" exact element = {<NotFound/>}/>
         </Routes>
      </div>
      </div>
  
   </Router>
  
  );
}

export default App;
