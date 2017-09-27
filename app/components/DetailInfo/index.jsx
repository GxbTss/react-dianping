import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../Star'
import './style.less'

export default class DetailInfo extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
      const data = this.props.data
        return (
            <div id="detail-info-container">
              <div className="info-container clear-fix">
                <div className="info-img-container float-left">
                  <img src={data.img} alt="detail"/>
                </div>
                <div className="info-content">
                  <h1>{data.title}</h1>
                  <div className="start-container">
                    <Star star={data.star}/>
                    <span className="price">￥{data.price}</span>
                  </div>
                  <p>{data.subTitle}</p>
                </div>
              </div>
              {/* 设置 innerHTML */}
              <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
            </div>
        )
    }
}
