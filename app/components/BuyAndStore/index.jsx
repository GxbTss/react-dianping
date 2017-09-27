import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class BuyAndStore extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore
                        ? <button className="selected" onClick={this.storeClick.bind(this)}>已收藏</button>
                        : <button onClick={this.storeClick.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClick.bind(this)}>购买</button>
                </div>
            </div>
        )
    }

    storeClick() {
        this.props.storeHandle()
    }

    buyClick() {
        this.props.buyHandle()
    }
}
