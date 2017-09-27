import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import SearchInput from '../SearchInput'

import './style.less'

export default class SearchHeader extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    backHandle() {
      window.history.back()
    }

    enterHandle(val) {
      hashHistory.push('/search/all/' + encodeURIComponent(val))
    }

    render() {
        return (
            <div className="clear-fix" id="search-header">
                <span className="back-icon float-left" onClick={this.backHandle.bind(this)}>
                  <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                  <i className="icon-search"></i>
                  <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}
