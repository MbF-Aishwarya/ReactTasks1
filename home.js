
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component {
	constructor(props){
		super(props);
			this.state = {
				StateContent:'i am displayed using only state'
			}
	}
   render() {
      return (
         <div>
            <h2>{this.state.StateContent}</h2>           
         </div>
      );
   }
}
export default Home;