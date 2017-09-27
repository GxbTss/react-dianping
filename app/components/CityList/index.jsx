import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class CityList extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const citys = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安']
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                  {citys.map((item, index) => {
                    return <li key={index} className="float-left" onClick={this.changeCity.bind(this, item)}>
                              <span>{item}</span>
                           </li>
                  })}
                </ul>
            </div>
        )
    }

    changeCity(newCity) {
      this.props.changeFn(newCity)
    }
}
