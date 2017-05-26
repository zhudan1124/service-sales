import React from 'react'
const Index = () => (
  <div className="service-content">
    <div className="blank20" />
    <div className="clearfix">
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="all fl icon-box"><i className="service-all color-white" /></span>
          <div className="list-word fl font16 color-black">
            全部<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="set fl icon-box"><i className="service-set color-white" /></span>
          <div className="list-word fl font16 color-black">
            正在处理<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="untreated fl icon-box"><i className="service-untreated color-white" /></span>
          <div className="list-word fl font16 color-black">
            未处理<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="finished fl icon-box"><i className="service-finished color-white" /></span>
          <div className="list-word fl font16 color-black">
            完成<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="blank20" />
      <div className="dhms-xs-24">
        <div className="add-new text-center">
          <i className="service-list-add color-white" /><br /><span className="color-white font16">开工单</span>
        </div>
      </div>
      <div className="blank20" />
    </div>
    <div className="recent-process">
      <div className="s-h1 font20 color-black">
        <strong>最近处理</strong>
      </div>
      <div className="blank20" />
      <ul className="process-list">
        <li className="bg-white color-black font14">
          <p className="font16">工单号：0001</p>
        </li>
      </ul>
    </div>
  </div>
)
export default Index