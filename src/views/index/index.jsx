import React from 'react'
import Base from '../../containers/base'
import './index.less'

class testIndex extends Base {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <h1 className="testIndex">你好</h1>
        )
    }
}
module.exports = testIndex
