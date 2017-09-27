import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist'

import OrderListComponent from '../../../components/OrderList'

import './style.less'

export default class OrderList extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
          data: []
        }
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                  this.state.data
                  ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                  : <div>加载中...</div>
                }
                
            </div>
        )
    }
    
    componentDidMount() {
      const username = this.props.username
      if (username) {
        this.loadOrderList(username)
      }
    }
    
    // 提交评论
    submitComment(id, value, callback) {
      const result = postComment(id, value)
      result.then(res => {
            return res.json()
        }).then(json => {
          console.log(json)
            if (json.errno === 0) {
                // 已经评价，修改状态
                callback()
            }
        })
    }

    // 加载数据
    loadOrderList(username) {
      const result = getOrderListData(username)
      result.then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          data: json
        })
      }).catch(e => {
        console.error(e.message)
      })
    }
}
