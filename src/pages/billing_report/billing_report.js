//billing_Report.js
import './billing_report.css';
import React,{ Component } from 'react';
import billingReportList from '../../services/app_services';
export default class Billing extends Component{
	constructor(props){
		super(props);
		this.state = {
			acountList: [{
				id:10001,
				year:2017,
				duration:'09月01-09月10',
				price:8888
			},{
				id:10002,
				year:2017,
				duration:'09月01-09月10',
				price:2222
			},{
				id:10003,
				year:2017,
				duration:'09月01-09月10',
				price:9999
			}]
		}
	}
	componentDidMount(){
		/**
		 *	@billingReportList 处理账单报告接口请求到的数据
		 *
		 */
		billingReportList('uri=admin/alliance/reports').then(res=>{
			if( res.status !== 200 ){
				console.log('您目前不能读取账单报告的信息');
			}else{
				return res.json()
			}
		}).then(data=>{
			this.setState({
				acountList: data.items
			})
		}).catch(e=>{
			console.log('数据请求失败！');
		})
	}

	gotoReportDetail(index){
		//console.log(index);
		const id = this.state.acountList[index].id;
		if(id){
			//console.log(id);
			this.props.history.push(`/report_Detail/:${id}`);
		}
	}
	render(){
		return (
			<div className="billing_container">
				<ul className="billing">
					{
						this.state.acountList.map((item,index) => {
							return (
								<li 
									key={index} 
									className="bill_item marginTop"
									onClick={() => {this.gotoReportDetail(index)}}
								>
									<div className="bill_left">
										<div className="date_year">
											<p className="date">{item.duration}</p>
											<p className="year">{item.year}</p>
										</div>
									</div>
									<div className="bill_right align_items">
										<p className="price flex_end">¥{item.price}</p>
									</div>
								</li>
							)
						})
					}
					
				</ul>
				<div className="more center marginTop">
					--没有更多内容了--
				</div>
			</div>
		)
	}
}