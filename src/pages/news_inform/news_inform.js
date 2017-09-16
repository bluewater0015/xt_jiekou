//'message_Inform.js
import './news_inform.css';
import React,{ Component } from 'react';
import informList from '../../services/app_services';
import 'whatwg-fetch';
import 'es6-promise';

export default class Inform extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[{
				id: 5,
				title:"机器警报1",
				content:'机器离线1',
				createdTime:'2017-09-01 23:00:01',
				isRead: true
			},{
				id: 2,
				title:"机器警报2",
				content:'机器离线2',
				createdTime:'2016-09-01 23:00:02',
				isRead:false
			}]
		}
	}
	
	componentDidMount(){
		/**
		 *	@informList 处理消息通知页面接口数据
		 *	@prama{} 参数uri=admin/alliance/messages
		 */
		informList('uri=admin/alliance/messages').then(res=>{
			if( res.status !== 200 ){
				console.log('您目前不能读取消息通知列表的信息');
			}else{
				return res.json()
			}
			
			console.log('res',res);
			return res.json()
		}).then(data=>{
			console.log('informList',data);
			this.setState({
				list: data.items
			})
		}).catch(e=>{
			console.log('informList数据请求失败！');
		})
	}

	/**
	 *	@itemEvent 获取消息通知页面的ID
	 *	@param {number} 参数index 传索引值
	 */
	itemEvent(index){
		let id = this.state.list[index].id;
		this.props.history.push(`/news_Detail/:${id}`);
	}

	render(){
		return (
			<div className="news_Inform">
				{
					this.state.list.map((item,index) => {
						return(
							<div className="inform marginTop" key={index}>
								<div className="triangle_up" style={{ borderBottomColor : item.isRead ? '#FEE300': '#57D5E7' }}>
									<p className="isRead justify-content">{item.isRead ? '已读' : "未读"}</p>
								</div>
								<div className="inform_list" onClick={()=>{this.itemEvent(index)}}>
									<p className="machine_alarm  border_bottom">{item.title}</p>
									<p className="marginTop">
										<span>警报时间：</span>
										<span>{ item.time }</span>
									</p>
									<p className="marginTop">
										<span>警报内容：</span>
										<span>{ item.content }</span>
									</p>
								</div>
							</div>
						) 
					})
				}
			</div>
		)
	}
}