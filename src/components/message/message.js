import React,{ Component } from 'react';
import './message.css';

export default class Message extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div 
				onClick={()=> this.props.onClick && this.props.onClick()}
				className="message flex1"
				style={this.props.style} 
			>
				<p className="center marginTop"><img className='img' src={ this.props.src } /></p>
				<p className="center marginTop" >{ this.props.content }</p>
			</div>
		)
	}
}
