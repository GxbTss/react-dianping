import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
export default class LoadMore extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
               {
                 this.props.isLoadingMore
                 ? <span>加载中....</span>
                 : <span onClick={() => {this.props.loadMoreFn()}}>加载更多</span>
               }
            </div>
        )
    }
 
    componentDidMount() {
        //使用滚动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            // console.log(windowHeight)
            // console.log(top)
            // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
            if (top && top  < windowHeight) {
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }, false)
    }
    
}
