import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../../components/Star/'

import './style.less'

export default class Item extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            commentState: 2, // 0--未评价 1--评价中 2--已评价
            stars: {}
        }
    }

    render() {
        const data = this.props.data
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0
                        ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                        :
                            this.state.commentState === 1
                            ? '' //评价中
                            : <button className="btn unseleted-btn">已评价</button>                           
                    }                   
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {
                    // 评论中显示评论框
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <Star star="0" clickCallback={this.starClickCallback.bind(this)}/>
                        </div>
                        <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ''
                }
            </div>
        )
    }

    componentDidMount() {
        // 将状态维护到 state 中
        this.setState({
            commentState: this.props.data.commentState
        })
    }
    
    // 显示评论框
    showComment() {
        this.setState({
            commentState: 1
        })
    }

    // 隐藏评论框
    hideComment() {
        this.setState({
            commentState: 0
        })
    }

    submitComment() {
        const submitComment =this.props.submitComment
        const id = this.props.data.id
        const stars = this.state.stars
        const star = stars[id] || '0'
        const commentText = this.refs.commentText
        const value = commentText.value.trim()
        if (!value) {
            return
        }
        submitComment(id, value, this.commentOk.bind(this))
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    starClickCallback(star) {
        let stars = this.state.stars
        const id = this.props.data.id
        stars[id] = star
        this.setState({
            stars
        })
    }
}
