//home.js
import './home.css';
import React,{ Component } from 'react';
import Button from '../../components/button/button';
import Title from '../../components/title/title';
import Price from '../../components/price/price';
import DayPrice from '../../components/day_price/day_price';
import Message from '../../components/message/message';
import homeData from '../../services/app_services';
export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			todayPrice: '128.00',
			yesDayPrice: '200',
			averagePrice: '190',
			messageNumber: '10'
		}
	}

	componentDidMount(){
		/**
		 *	@homeData 处理首页接口数据
		 */
		homeData('uri=/admin/alliance/index').then(res=>{
			return res.json()
		}).then(data=>{
			console.log('homedata',data);
			this.setState({
				todayPrice: data.todayInCome,
				yesterdayPrice: data.yesterdayInCome,
				averagePrice: data.averageIncome,
				messageNumber: data.messageCount
			})
		}).catch(e=>{
			console.log('homedata数据请求失败！')
		})
	}
	
	render(){
		return (
			<div className="home">
				<div className="home_running">
					<div className="trade_price">
						<Title title="今日交易流水（元)" style={{ width:'1.35rem',height: '0.22rem',color: '#fff'}}/>
						<Price price={this.state.todayPrice} style={{fontSize: '0.45rem'}}/>
					</div>
					<div className="trade_account center" onClick={this.treadEvent.bind(this)}>
						<Button style={{width: '1.31rem',height: '0.36rem',border: '1px solid #fff',color: '#fff'}} title="交易流水明细" />
					</div>
					<div className="date_price flex">
						<DayPrice type="昨日" price={ this.state.yesterdayPrice} style={{borderRight: '1px solid #fff'}}/>
						<DayPrice type="平均" price={ this.state.averagePrice} />
					</div>
				</div>
				<div className="accout_message flex" style={{paddingTop:'20px'}}>
					<Message 
						onClick={() => this.props.history.push('/billing_Report')} 
						src='./src/assets/images/account_report.png' content="账单报告"
						style={{ borderRight: '1px solid #ccc'}}
					/>
					<Message 
						onClick={() => this.props.history.push('/news_Inform')} 
						src='./src/assets/images/news.png' content="消息通知"
					/>
				</div>
			</div>
		)
	}
	
	/**
	 *	@treadEvent 点击交易流水明细按钮跳转到交易流水页
	 */
	treadEvent(index){
		this.props.history.push('./billitemized');
	}
}
