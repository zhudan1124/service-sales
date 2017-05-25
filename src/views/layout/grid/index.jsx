import React from 'react'
const Grid = () => (
  <div className="clearfix dhms-css-box">
    <h2 id="grid" className="color-blue">栅格系统
      <small className="color-super-gray"> 24格</small>
    </h2>
    <hr />
    <div className="blank20" />
    <h5>“行（row）”必须包含在 .dhms-container （固定宽度）或 .dhms-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。</h5>
    <h4>.dhms-xs-*
      <small className="color-super-gray"> 超小屏幕 手机 (&lt;768px)</small>
    </h4>
    <h4>.dhms-sm-*
      <small className="color-super-gray"> 小屏幕 平板 (≥768px)</small>
    </h4>
    <h4>.dhms-md-*
      <small className="color-super-gray"> 中等屏幕 桌面显示器 (≥992px)</small>
    </h4>
    <h4>.dhms-lg-*
      <small className="color-super-gray"> 大屏幕 大桌面显示器 (≥1200px)</small>
    </h4>
    <div className="blank10" />
    <p className="color-gray font14">注：建议写两个 .dhms-xs-* （超小屏幕） 和 .dhms-md-* （中等屏幕）</p>
    <div className="blank20" />
    <h4>显示：</h4>
    <div className="clearfix font14">
      <div className="dhms-xs-24 dhms-md-12 bg-blue color-white">.dhms-xs-24.dhms-md-12</div>
      <div className="dhms-xs-24 dhms-md-6 text-center bg-green color-white">.dhms-xs-24.dhms-md-6</div>
      <div className="dhms-xs-24 dhms-md-6 text-right bg-red color-white">.dhms-xs-24.dhms-md-6</div>
    </div>
    <div className="blank20" />
    <div className="clearfix font14">
      <div className="dhms-xs-12 dhms-md-6 bg-blue color-white">.dhms-xs-12.dhms-md-6</div>
      <div className="dhms-xs-12 dhms-md-6 bg-green color-white">.dhms-xs-12.dhms-md-6</div>
      <div className="dhms-xs-12 dhms-md-6 bg-red color-white">.dhms-xs-12.dhms-md-6</div>
      <div className="dhms-xs-12 dhms-md-6 bg-yellow color-white">.dhms-xs-12.dhms-md-6</div>
    </div>
    <div className="blank20" />
    <div className="clearfix font14">
      <div className="dhms-xs-12 dhms-xs-offset-12 dhms-md-6 dhms-md-offset-18 bg-yellow color-white">
        .dhms-xs-12.dhms-md-6
      </div>
    </div>
    <div className="blank20" />
    <h4>模拟表格：</h4>
    <div className="row clearfix">
      <div className="dhms-xs-24 text-center font18"><strong>设备状态信息报告</strong></div>
      <div className="dhms-xs-24 text-right">报告起止日期: 2017-03-01 ~ 2017-03-31</div>
      <div className="dhms-xs-24 font14">设备管理信息</div>
    </div>
    <div className="clearfix font14 div-table">
      <div className="div-table-tr">
        <div className="dhms-sm-3">名称</div>
        <div className="dhms-sm-3">盘式制动器CDEVNO 113</div>
        <div className="dhms-sm-3">编号</div>
        <div className="dhms-sm-3">CDEVNO 113</div>
        <div className="dhms-sm-3">生产日期</div>
        <div className="dhms-sm-3 has-error">
          <div className="has-error-word top">
            日期格式错误
            <i className="arrow"><i /></i>
          </div>
          <textarea rows="1" placeholder="请填写生产日期" />
        </div>
        <div className="dhms-xs-6 dhms-sm-3">投入使用日期</div>
        <div className="dhms-xs-6 dhms-sm-3 has-error">
          <div className="has-error-word bottom">
            日期格式错误
            <i className="arrow"><i /></i>
          </div>
          <textarea rows="1" placeholder="请填写投入使用日期" />
        </div>
      </div>
      <div className="div-table-tr">
        <div className="dhms-xs-3">管理单位</div>
        <div className="dhms-xs-3 has-error">
          <div className="has-error-word left">
            管理单位错误
            <i className="arrow"><i /></i>
          </div>
          <textarea rows="1" placeholder="请填写管理单位" />
        </div>
        <div className="dhms-xs-3">使用单位</div>
        <div className="dhms-xs-3 has-error">
          <div className="has-error-word right">
            使用单位错误
            <i className="arrow"><i /></i>
          </div>
          <textarea rows="1" placeholder="请填写使用单位" />
        </div>
        <div className="dhms-xs-3">出厂日期</div>
        <div className="dhms-xs-3">2017-03-22</div>
        <div className="dhms-xs-3">设备责任人</div>
        <div className="dhms-xs-3">
          <textarea rows="1" placeholder="请填写设备责任人" />
        </div>
      </div>
      <div className="div-table-tr">
        <div className="dhms-xs-24">
          <div className="has-error-word bottom">
            使用简介错误
            <i className="arrow"><i /></i>
          </div>
          <textarea rows="1" placeholder="使用简介" />
        </div>
      </div>
      <div className="div-table-tr">
        <div className="dhms-xs-6 text-center">
          <div className="td no-border-left">d</div>
          <div className="td">d</div>
          <div className="td no-border-left no-border-bottom">d</div>
        </div>
        <div className="dhms-xs-6">f</div>
        <div className="dhms-xs-6">Q</div>
        <div className="dhms-xs-6">Q</div>
      </div>
    </div>
    <div className="blank10" />
    <p className="font14">
      补充：<br />
      1、报错需在 tr "dhms-xs-*" 上添加 class "has-error"。<br />
      2、"div-table"相当于"table"，"div-table-tr"相当于"tr"，里面的"div"相当于"td"。
    </p>
  </div>
)
export default Grid
