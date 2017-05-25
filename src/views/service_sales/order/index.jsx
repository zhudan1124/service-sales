import React from 'react'
const Order = () => (
  <div className="service-content">
    <div className="name font20"><strong>创建工单</strong></div>
    <div className=" clearfix bg-white">
      <div className="div-table no-div-table">
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right"><span className="font16 color-black">工单号</span></div>
          <div className="dhms-sm-6 has-error">
            <div className="has-error-word right">错误提示<i className="arrow"><i /></i></div>
            <input className="font16 color-black" type="text" placeholder="请填写工单号" />
          </div>
        </div>
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right"><span className="font16 color-black">客户</span></div>
          <div className="dhms-sm-6 ">
            <div className="has-error-word right">错误提示<i className="arrow"><i /></i></div>
            <select>
              <option>客户一</option>
              <option>客户二</option>
              <option>客户三</option>
            </select>
          </div>
        </div>
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right"><span className="font16 color-black">产品</span></div>
          <div className="dhms-sm-6">
            <div className="has-error-word right">错误提示<i className="arrow"><i /></i></div>
            <input className="font16 color-black" type="text" placeholder="请填写产品" />
          </div>
        </div>
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right"><span className="font16 color-black">联系人</span></div>
          <div className="dhms-sm-6">
            <div className="has-error-word right">错误提示<i className="arrow"><i /></i></div>
            <input className="font16 color-black" type="text" placeholder="请填写联系人" />
          </div>
        </div>
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right"><span className="font16 color-black">电话</span></div>
          <div className="dhms-sm-6">
            <div className="has-error-word right">错误提示<i className="arrow"><i /></i></div>
            <input className="font16 color-black" type="text" placeholder="请填写电话" />
          </div>
        </div>
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right"><span className="font16 color-black">文件描述</span></div>
          <div className="dhms-sm-8">
            <div className="has-error-word right">错误提示<i className="arrow"><i /></i></div>
            <textarea rows={2} placeholder="文件描述" />
          </div>
        </div>
        <div className="div-table-tr">
          <div className="dhms-sm-3 text-right" />
          <div className="dhms-sm-8">
            <button className="button button-success">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Order
