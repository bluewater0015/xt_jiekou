//news_Detail.js
import React,{ Component } from 'react';
import './news_detail.css';
import newsDetailData from '../../services/app_services';
export default class News extends Component{
	constructor(props){
		super(props);
		this.state = {
			machine_code:'YT0010101',
			time:'2017.09.12 12:13',
			location:'北京市西直门',
			content: '机器离线1',
			description: '在正常营业时间内，机器连续离线1小时,请检查机器运营状态是否正常'
		}
	}
	componentDidMount(){
		/**
		 *	@newsDetailData 对请求到对应id数据进行处理
		 *	@param{} 参数uri=admin/alliance/messages/${id}
		 *
		 */
		let id = this.props.match.params.id;
		//console.log(id);
		newsDetailData(`uri=admin/alliance/messages/{id}`).then(res => {
			if(res.status !== 200){
				console.log('您目前无法获取消息详情页的数据');
			}else{
				return res.json()
			}
		}).then(data=>{
			console.log('newsDetailData',data);
			this.setState({
				machine_code: data.sn,
				time: data.createdTime,
				location: data.address,
				content: data.content,
				description: data.description
			})
		}).catch(e=>{
			console.log('数据请求失败！');
		})
	}
	
	render(){
		return (
			<div className="news_Detail">
				<div className="news_container">
					<ul className="news_list">
						<li className="alarm_date">
							<span>警报时间：</span>
							<span>{this.state.time}</span>
						</li>
						<li className="stage_code">
							<span>点位：</span>
							<span>{this.state.location}</span>
						</li>
						<li className="machine_code">
							<span>机器码：</span>
							<span>{this.state.machine_code}</span>
						</li>
						<li className="alarm_content">
							<span>
								警报内容：
							</span>
							<span>
								{this.state.content}
							</span>
							<p className="tips_content">
								{this.state.description}
							</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}