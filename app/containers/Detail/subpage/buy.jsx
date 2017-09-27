import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import BuyAndStore from '../../../components/BuyAndStore'

import * as storeActions from '../../../actions/store'

class Buy extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} 
                             buyHandle={this.buyHandle.bind(this)}
                             storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
    
    componentDidMount() {
        // 验证当前用户是否收藏
        this.checkStoreState()
        console.log(this.props.actions)
    }
    
    // 验证当前用户是否收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        // some来验证 (满足一个即可)
        store.some(item => {
            if (item.id === id) {
                // 修改收藏状态
                this.setState({
                    isStore: true
                })
                return true
            }
        })
    }

    // 检查登录状态
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            //跳转到登录页面的时候, 传入 router 的值, 方便登录成功后自动跳转回来
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }

    // 购买事件
    buyHandle() {
        // 验证是否登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        // 跳转用户主页
        hashHistory.push('/user')
    }

    // 收藏事件
    storeHandle() {
        // 验证是否登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        const id = this.props.id
        const actions = this.props.actions
        if (this.state.isStore) {
            // 取消收藏
            actions.rm({
                id
            })
        } else {
            // 收藏
            actions.add({
                id
            })
        }
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(storeActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)