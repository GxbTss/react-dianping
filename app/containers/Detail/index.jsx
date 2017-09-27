import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/buy'
import Comment from './subpage/Comment'

export default class Detail extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={this.props.params.id}/>
                <Buy id={this.props.params.id}/>
                <Comment id={this.props.params.id}/>
            </div>
        )
    }
}
