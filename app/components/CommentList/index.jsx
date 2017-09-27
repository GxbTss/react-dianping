import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import './style.less'

export default class CommentList extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        // 获取数据
        const data = this.props.data
        return (
            <div className="comment-list">
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}
