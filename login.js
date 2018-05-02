
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
   render() {
      return (
         <div>
            <h2>{this.props.FirstContent}</h2>
         </div>
      );
   }
}
Login.defaultProps = {
		FirstContent:"i am displayed only using prop"
   }
export default Login;