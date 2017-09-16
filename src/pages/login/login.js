//login.js
import React,{ Component } from 'react';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Title from '../../components/title/title';
import "./login.css";

export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			phoneNumber:'',
			password:''
		}
	}
	/**
	 *	@getPhoneEvent 获取电话号码
	 *	@param {number} 参数value 电话号码
	 */
	getPhoneEvent(value){
		console.log('phone',value);
		this.setState({
			phoneNumber: value
		})
	}

	/**
	 *	@getPasswordEvent 获取登录密码
	 *	@param {number} 参数value 密码
	 */
	getPasswordEvent(value){
		console.log('psw',value);
		this.setState({
			password: value
		})
	}

	/**
	 *	@loginEvent 点击登录
	 *	
	 */
	loginEvent(){
		const login = () => {
			this.props.history.push('/home')
		}
		if(this.state.phoneNumber && this.state.password){
			login();
		}else{
			console.log('请填写正确的电话号和密码')
			return;
		}
	}
	
	render(){
		return (
			<div className="login_container">
				<div className="alliance_business center">
					<Title title="加盟商管家" style={{ width: '110px',fontSize: '22px'}}/>
				</div>
				<div className="login_input">
					<div className='baseHeight flex align_items borderRadius bgColorMain border borderColorWhite'>
						<img 
							src='/src/assets/images/phone.png' 
							className='icons margin-left' 
						/>
						<Input 
							onChange={(value)=>{this.getPhoneEvent(value)}} 
							value="请输入手机"
							type="text"
							style={{marginLeft: '16px',backgroundColor:'#FAD51B',color:'#FFF'}} 
						/>
					</div>
					<div className='baseHeight flex align_items borderRadius bgColorMain border borderColorWhite'>
						<img 
							src='/src/assets/images/password.png' 
							className='icons margin-left' 
						/>
						<Input
							onChange={(value)=>{this.getPasswordEvent(value)}} 
							value="请输入密码"
							type="password"
							style={{marginLeft: '16px',backgroundColor:'#FAD51B',color:'#FFF'}} 
						/>
					</div>
				
				</div>
				<div className="login_btn center">
					<Button style={{width:'100%',height:'42px',backgroundColor: '#fff'}} title="登录" onClick={this.loginEvent.bind(this)}/>
				</div>
			</div>
		)
	}
}