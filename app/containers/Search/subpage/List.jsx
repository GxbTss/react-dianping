import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getSearchData } from '../../../fetch/search/search'
const initialState = {
          data: [],
          hasMore: false,
          isLoadingMore: false,
          page: 0
        }
class SearchList extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = initialState
    }

    render() {
        return (
            <div>
                {
                  this.state.data
                  ? <ListCompoent data={this.state.data}/>
                  : <div>加载中...</div>
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
      // 获取首页数据
      this.loadFirstPageData()
    }
    
    // 获取首页数据
    loadFirstPageData() {
      const cityName = this.props.userinfo.cityName
      const keyword = this.props.keyword || ''
      const category = this.props.category
      const result = getSearchData(0, cityName, category, keyword)
      this.resultHandle(result)
    }

    // 加载更多
    loadMoreData() {
      // 记录加载状态
      this.setState({
        isLoadingMore: true
      })

      const cityName = this.props.userinfo.cityName
      const page = this.state.page
      const keyword = this.props.keyword || ''
      const category = this.props.category
      const result = getSearchData(page, cityName, category, keyword)
      this.resultHandle(result)

      // 记录加载状态
      this.setState({
        isLoadingMore: false
      })
    }

    // 处理数据
    resultHandle(result) {
      // 增加 page 计数
      const page = this.state.page
      this.setState({
        page: page + 1
      })
      result.then(res => {
        return res.json()
      }).then(json => {
        const hasMore = json.hasMore
        const datas = json.data
        this.setState({
          hasMore,
          data: [...this.state.data, ...datas]
        })
      }).catch(e => {
        if (__DEV__) {
          console.error(e.message)
        }
      })
    }

    // 处理重新搜索
    
    componentDidUpdate(prevProps, prevState) {
      const keyword = this.props.keyword
      const category = this.props.category
      // 搜索条件完全相等时，不刷新
      if (keyword === prevProps.keyword && category === prevProps.category) {
        return
      }

      // 重置state
      this.setState(initialState)

      // 重新加载数据
      this.loadFirstPageData()
    }
    
}
function mapStateToProps(state) {
  return {
      userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)