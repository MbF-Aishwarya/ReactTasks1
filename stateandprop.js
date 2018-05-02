import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StateandProps extends Component{
	constructor(props){
		super(props);
		this.state={
			content:'this is a sample of using state and props',
		}
	}
	render(){
		return(
			<div>
				<Sample PropContent = {this.state.content} />
			</div>
		);
	}
}
class Sample extends React.Component{
		render(){
			return(
				<div>
				 	<h1>{this.props.PropContent}</h1>
				</div>
			);
		}
	}
export default StateandProps;
