import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home';
import Login from '../login';
import StateandProps from '../stateandprop';

class App extends Component {
   render() {
          var myStyle = {
            fontSize: 50,
            color: '#FF0000'
         }
      return (
         <Router>
            <div>
               <h2 style={myStyle}>Hello World</h2>
               <ul>
                  <li><Link to={'/'}>Using state</Link></li>
                  <li><Link to={'/Login'}>Using props</Link></li>
                  <li><Link to={'/StateandProps'}>Using both state and props</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/StateandProps' component={StateandProps} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;