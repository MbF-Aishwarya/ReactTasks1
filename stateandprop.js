import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StateandProps extends Component{
	constructor(props){
		super(props);
		this.state={
			content:'this is a sample of using state and props',
			contentTwo:'i am a paragraph of the continuation'
		}
	}
	render(){
		return(
			<div>
				<Sample PropContent = {this.state.content} />
				<SampleTwo PropContentTwo = {this.state.contentTwo} />
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
class SampleTwo extends React.Component {
	render(){
		return(
			<div>
				<h2>{this.props.PropContentTwo}</h2>
			</div>
		);
	}
}
export default StateandProps;
