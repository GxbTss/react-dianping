import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getInfoData } from '../../../fetch/detail'
import DetailInfo from '../../../components/DetailInfo'
export default class Info extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
          // !!false === false  但是，!!{} === true
          info: false
        }
    }

    render() {
        return (
            <div>
                {
                  this.state.info
                  ? <DetailInfo data={this.state.info}/>
                  : <div>加载中...</div>
                }
            </div>
        )
    }
    
    componentDidMount() {
      // 获取商户信息
      this.getInfo()
    }
    
    getInfo() {
      const id = this.props.id
      const result = getInfoData(id)
      result.then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          info: json
        })
      }).catch(e => {
        if (__DEV__) {
          console.error(e.message)
        }
      })
    }
}
