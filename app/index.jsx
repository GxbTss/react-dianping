import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import stores from './store/store'

import RouterMap from './router/routeMap'

import './static/css/common.less'
import './static/css/font.css'

const store = stores()

render(
    <Provider store={store}>
        <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
