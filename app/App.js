import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home';
import Login from '../login';
import StateandProps from '../stateandprop';
// for redux actions
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import AddTodo from '../components/AddTodo.js'
import TodoList from '../components/TodoList.js'

class App extends Component {
   render() {
          var myStyle = {
            fontSize: 50,
            color: '#FF0000'
         }
          const { dispatch, visibleTodos } = this.props
      return (
         <div>
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
            <hr/>
            <h2>Display action using redux</h2>
            <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos}/>
         </div>
      );
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(App);