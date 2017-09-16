//404.js
import React,{ Component } from 'react';

export default class NoFound extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				此页面不存在
			</div>
		)
	}
}