import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

export default class OrderList extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const data = this.props.data
        const submitComment = this.props.submitComment
        return (
            <div>
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item} submitComment={submitComment}/>
                    })
                }
            </div>
        )
    }
}
