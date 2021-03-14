

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './../src/COMPONENTS/Home/Home.js';
import FoodView from './../src/COMPONENTS/FoodDetails/FoodDetails.js'

function App() {
  
  return (
    <Router>
      <div className="App">
          <Switch>
             <Route exact path='/'>
               
               <Home></Home>
                
             </Route>
             <Route path='/food/:id'>
               <FoodView></FoodView>
             </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
