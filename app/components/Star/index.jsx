import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class Star extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            star: 0
        }
    }

    render() {
        const stars = [1, 2, 3, 4, 5]
        let star = this.state.star || 0
        if (star > 5) {
          star = star % 5
        }
        return (
            <div className="star-container">
                {
                  stars.map((item, index) => {
                    const lightClass = star >= item ? ' light' : ''
                    return <i key={index} className={'icon-star' + lightClass} onClick={this.clickHandle.bind(this, item)}></i>
                  })
                }
            </div>
        )
    }
    
    componentDidMount() {
        this.setState({
            star: this.props.star
        })
    }
    
    clickHandle(star) {
        const clickCallback = this.props.clickCallback
        if (!clickCallback) {
            return
        }
        this.setState({
            star
        })
        clickCallback(star)
    }
}
