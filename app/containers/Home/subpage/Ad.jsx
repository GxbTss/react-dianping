import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  HomeAd from '../../../components/HomeAd/index'
import { getAdData } from '../../../fetch/home'

export default class Ad extends Component {
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
            <div>
                {
                  this.state.data.length
                  ? <HomeAd data={this.state.data}/>
                  : <div>数据加载中...</div>
                }
            </div>
        )
    }
    
  componentDidMount() {
    // 获取广告数据
    const result = getAdData()
    result.then(res => {
        return res.json()
    }).then(json => {
        const data = json
        this.setState({
            data
        })
    }).catch(e => {
        // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', e.message)
            }
    })
  }
  
}
