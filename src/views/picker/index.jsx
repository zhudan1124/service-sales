import React from 'react'

import './bootstrap.css'
import './index.scss'

const App = () => (
  <div className="picker">
    <div className="picker-title">2017</div>
    <div className="picker-info">
      <ul className="clearfix">
        <li className="active" >
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第一周</a></li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第二周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第三周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第四周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第五周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第六周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第七周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第八周</a>
        </li>
        <li>
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第九周</a>
        </li>
        <li className="disabled">
          <span className="time-title">2017/5/5~2017/5/12</span>
          <a>第十周</a>
        </li>
      </ul>
    </div>
  </div>
)
export default App
