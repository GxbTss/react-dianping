import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class NotFound extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                404 Not found 
            </div>
        )
    }
}
