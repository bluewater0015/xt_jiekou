//price.js
import React,{ Component } from 'react';
import './price.less';

export default class Price extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="price center">
				<div className="price_container font_white center" style={this.props.style}>
					{this.props.price || '默认价格'}
				</div>
			</div>
		)
	}
}