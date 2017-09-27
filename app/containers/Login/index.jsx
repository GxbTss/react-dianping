import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

import * as allActions from '../../actions/userinfo'

class Login extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking: true
        }
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                    ? <div>加载中...</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    
    componentDidMount() {
        this.doCheck()
    }

    // 登录成功的callback
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.actions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转指定页面
            hashHistory.push(router)
        } else {
            // 跳转用户主页
            this.goUserPage()            
        }
    }
    
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录, 则跳转到用户主页
            this.goUserPage()
        } else {
            // 未登录, 则验证结束
            this.setState({
                checking: false
            })
        }
    }

    goUserPage() {
        hashHistory.push("/user")
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(allActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)