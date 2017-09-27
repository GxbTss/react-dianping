import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'
export default class ListCompoent extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="list-container">
                {
                  this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                  })
                }
            </div>
        )
    }
}
