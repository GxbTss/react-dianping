import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class SearchInput extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            value: ''
        }
    }

    changeHandle(e) {
      this.setState({
        value: e.target.value
      })
    }

    keyUpHandle(e) {
      if (e.keyCode !== 13) {
        return
      }
      this.props.enterHandle(e.target.value)
    }

    render() {
        return (
            <input className="search-input"
                   type="text"
                   value={this.state.value}
                   onChange={this.changeHandle.bind(this)}
                   onKeyUp={this.keyUpHandle.bind(this)}
                   placeholder="请输入关键字"/>
        )
    }
    
    componentDidMount() {
      this.setState({
        value: this.props.value || ''
      })
    }
    
}
