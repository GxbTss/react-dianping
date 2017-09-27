import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import './style.less'

export default class HomeHeader extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
          kwd: ''
        }
    }

    changeHandle(e) {
      this.setState({
        kwd: e.target.value
      })
    }

    keyUpHandle(e) {
      if (e.keyCode !== 13) {
        return
      }
      hashHistory.push('/search/all/' + encodeURIComponent(this.state.kwd))
    }
    
    render() {
        return (
            <div className="clear-fix" id="home-header">
                <div className="home-header-left float-left">
                  <Link to="/city">
                    <span>{this.props.cityName}</span>&nbsp;
                    <i className="icon-angle-down"></i>      
                  </Link>
                </div>
                <div className="home-header-right float-right">
                  <Link to="/login">
                    <i className="icon-user"></i>
                  </Link>
                </div>
                <div className="home-header-middle">
                  <div className="search-container">
                    <i className="icon-search"></i>
                    <input type="text" 
                           placeholder="请输入关键字"
                           onChange={this.changeHandle.bind(this)}
                           onKeyUp={this.keyUpHandle.bind(this)}
                           value={this.state.kwd}/>
                  </div>
                </div>
            </div>
        )
    }
}
