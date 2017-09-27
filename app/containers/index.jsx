import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStorage from '../util/localStore'
import  { CITYNAME } from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/userinfo'


class App extends Component {
    constructor(...args) {
        super(...args)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
                
            </div>
        )
    }
    
    componentDidMount() {
        //从localstorage中获取
        let cityName = LocalStorage.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        //将城市信息存入redux中
        this.props.userinfos.update({
            cityName
        })
        //更改状态
        this.setState({
            initDone: true
        })
    }
    
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userinfos: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)