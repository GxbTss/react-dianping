import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'
export default class Item extends Component {
    constructor(...args) {
        super(...args)
        //性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const data = this.props.data
        return (
            <div className="list-item clear-fix">
                <Link to={'/detail/' + data.id}>
                    <div className="item-img-container float-left">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">{data.subTitle}</p>
                        <div className="item-price-container clear-fix">
                            <span className="price float-left">￥{data.price}</span>
                            <span className="mumber float-right">￥{data.mumber}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
