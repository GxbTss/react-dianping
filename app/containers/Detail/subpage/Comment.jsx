import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail'

import CommentList from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

import './style.less'

export default class Comment extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data
                    ? <CommentList data={this.state.data}/>
                    : <div>加载中</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
   
    componentDidMount() {
        // 加载首页数据
        this.loadingFirstData()
    }
    
    // 加载首页数据
    loadingFirstData() {
        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
        this.resultHandle(result)
    }

    // 加载更多数据
    loadMoreData() {
        // 切换加载状态
        this.setState({
            isLoadingMore: true
        })

        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
        this.resultHandle(result)

        // 切换加载状态
        this.setState({
            isLoadingMore: false
        })
    }

    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            // 增加 page 
            const page = this.state.page + 1
            const hasMore = json.hasMore
            const data = json.data
            this.setState({
                data: [...this.state.data, ...data],
                hasMore,
                page
            })
        }).catch(e => {
            if (__DEV__) {
                console.error(e.message)
            }
        })
    }
}
