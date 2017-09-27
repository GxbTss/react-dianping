import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

export default class Search extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <SearchList keyword={this.props.params.keyword} category={this.props.params.category}/>
            </div>
        )
    }
}
