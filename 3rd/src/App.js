// import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
// import './App.css';
// import RestaurantList from './RestaurantList';
// import { Route, Router } from "react-router-dom";
// import Restaurants from './Restaurants';
// import City from './City'
// function App() {
//   return (
//     <div className="App">
//       <Route exact path="/" component={City} />
//      <Route path='/restaurant/city/:id' render={props => (<Restaurants  {...props} />)} />
//      <City />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Route, Link } from "react-router-dom";


import SignUp from './components/signup/SignUp';
import LogIn from './components/login/LogIn';
import Cities from './components/cities/Cities';
import PrivateRoute from './components/PrivateRoute';

import "./App.css"


function App() {
  return (
    <div className = 'app'>
        <Route path='/signup' render = {props => (<SignUp {...props}/>)} />
        <Link to = '/signup'>SIGN UP</Link>
        <PrivateRoute exact path="/protected" component={Cities} />
        <Route path='/login' render = {props => (<LogIn {...props}/>)} />
        <Link to = '/login'>LOGIN</Link>
        {/* <PrivateRoute exact path="/protected" component={Cities} /> */}
   </div>
  );
}

export default App;
