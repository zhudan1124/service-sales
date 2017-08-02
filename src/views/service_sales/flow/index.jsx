import React from 'react'
const Flow = () => (
  <div className="service-content">
    <div className="name font20"><strong>创建工单</strong></div>
    <div className="clearfix">
      <div className="fl" style={{width: `70%`, backgroundColor: `#fff`, padding: 20}}>表单</div>
      <div className="fr flow-box">
        <div className="flow">
          <p className="flow-name font14">此订单总共耗时3天23时</p>
          <ul className="flow-list">
            <li>
              <i className="active" />
              <strong className="font14 color-gray">已完成</strong><br />
              江苏省苏州市新区竹园路200号
            </li>
            <li>
              <i />
              <strong className="font14 color-gray">处理中</strong><br />
              江苏省苏州市新区竹园路200号
            </li>
            <li>
              <i />
              <strong className="font14 color-gray">处理中</strong><br />
              江苏省苏州市新区竹园路200号
            </li>
            <li>
              <i />
              <strong className="font14 color-gray">处理中</strong><br />
              江苏省苏州市新区竹园路200号
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
export default Flow
