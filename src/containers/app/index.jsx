import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import Sidebar from '../../components/sidebar'
import Icon from '../../components/icon'
import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../../static/css/dhms.scss'
import './index.scss'

class App extends React.Component {
  render () {
    return (
        <div className="clearfix">
          <div className="css-name bg-blue color-white">
            <div className="dhms-container">
              <h1><span className="text-uppercase">dhms</span><small className="color-white">全局 CSS 样式</small></h1>
            </div>
          </div>
          <div className="blank40"></div>
          <div className="dhms-container">
            <div className="content">
              <div className="inner">
                <div className="dhms-css-box">
                  <h2 id="sfy" className="color-blue">双飞翼布局</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <h4>简介：</h4>
                  <p className="font14 color-gray text-info">实现要求：主间部分内容的宽度是要自适应的。</p>
                  <div className="blank10"></div>
                  <h4>显示：</h4>
                  <div className="box-show">
                    <div className="content ">
                      <div className="inner bg-blue">
                        Main
                      </div>
                    </div>
                    <div className="sidebar-left bg-green">Left</div>
                    <div className="sidebar-right bg-green">Right</div>
                  </div>
                  <div className="blank10"></div>
                  <h4>代码：</h4>
                  <pre>
                    <code data-lang="scss">
                      <span className="nt">&lt;div </span>
                      <span className="na">class=</span>
                      <span className="s">"box-show"</span>
                      <span className="nt">></span>
                      <br/>
                      <span className="nt">  &lt;div </span>
                      <span className="na">class=</span>
                      <span className="s">"content"</span>
                      <span className="nt">></span>
                      <br/>
                      <span className="nt">    &lt;div </span>
                      <span className="na">class=</span>
                      <span className="s">"inner"</span>
                      <span className="nt">></span> Main <span className="nt">&lt;div></span>
                      <br/>
                      <span className="nt">  &lt;div></span>
                      <br/>
                      <span className="nt">  &lt;div </span>
                      <span className="na">class=</span>
                      <span className="s">"sidebar-left"</span>
                      <span className="nt">></span> Left <span className="nt">&lt;div></span>
                      <br/>
                      <span className="nt">  &lt;div </span>
                      <span className="na">class=</span>
                      <span className="s">"sidebar-right"</span>
                      <span className="nt">></span> Right <span className="nt">&lt;div></span>
                      <br/>
                      <span className="nt">&lt;div></span>
                    </code>
                  </pre>
                  <div className="blank20"></div>
                  <h2 id="container" className="color-blue">布局容器</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <h4>.dhms-fluid <small className="color-super-gray"> 用于固定宽度并支持响应式布局的容器。</small></h4>
                  <h4>.dhms-container <small className="color-super-gray"> 用于 100% 宽度，占据全部视口（viewport）的容器。</small></h4>
                  <div className="blank20"></div>
                  <h2 id="grid" className="color-blue">栅格系统 <small className="color-super-gray">     24格</small></h2>
                  <hr/>
                  <div className="blank20"></div>
                  <h5>“行（row）”必须包含在 .dhms-container （固定宽度）或 .dhms-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。</h5>
                  <h4>.dhms-xs-*  <small className="color-super-gray"> 超小屏幕 手机 (&lt;768px)</small></h4>
                  <h4>.dhms-sm-*  <small className="color-super-gray"> 小屏幕 平板 (≥768px)</small></h4>
                  <h4>.dhms-md-*  <small className="color-super-gray"> 中等屏幕 桌面显示器 (≥992px)</small></h4>
                  <h4>.dhms-lg-*  <small className="color-super-gray"> 大屏幕 大桌面显示器 (≥1200px)</small></h4>
                  <div className="blank10"></div>
                  <p className="color-gray font14">注：建议写两个 .dhms-xs-* （超小屏幕） 和 .dhms-md-* （中等屏幕）</p>
                  <div className="blank20"></div>
                  <h4>显示：</h4>
                  <div className="clearfix font14">
                    <div className="dhms-xs-24 dhms-md-12 bg-blue color-white">.dhms-xs-24.dhms-md-12</div>
                    <div className="dhms-xs-24 dhms-md-6 text-center bg-green color-white">.dhms-xs-24.dhms-md-6</div>
                    <div className="dhms-xs-24 dhms-md-6 text-right bg-red color-white">.dhms-xs-24.dhms-md-6</div>
                  </div>
                  <div className="blank20"></div>
                  <div className="clearfix font14">
                    <div className="dhms-xs-12 dhms-md-6 bg-blue color-white">.dhms-xs-12.dhms-md-6</div>
                    <div className="dhms-xs-12 dhms-md-6 bg-green color-white">.dhms-xs-12.dhms-md-6</div>
                    <div className="dhms-xs-12 dhms-md-6 bg-red color-white">.dhms-xs-12.dhms-md-6</div>
                    <div className="dhms-xs-12 dhms-md-6 bg-yellow color-white">.dhms-xs-12.dhms-md-6</div>
                  </div>
                  <div className="blank20"></div>
                  <div className="clearfix font14">
                    <div className="dhms-xs-12 dhms-xs-offset-12 dhms-md-6 dhms-md-offset-18 bg-yellow color-white">.dhms-xs-12.dhms-md-6</div>
                  </div>
                  <div className="blank20"></div>
                  <h4>模拟表格：</h4>
                  <div className="row">
                    <div className="dhms-xs-24 text-center font18"><strong>设备状态信息报告</strong></div>
                    <div className="dhms-xs-24 text-right">报告起止日期:  2017-03-01 ~ 2017-03-31</div>
                    <div className="dhms-xs-24 font14">设备管理信息</div>
                  </div>
                  <div className="clearfix font14 div-table">
                    <div className="div-table-tr">
                      <div className="dhms-sm-3">名称	</div>
                      <div className="dhms-sm-3">盘式制动器CDEVNO 113</div>
                      <div className="dhms-sm-3">编号</div>
                      <div className="dhms-sm-3">CDEVNO 113</div>
                      <div className="dhms-sm-3">生产日期</div>
                      <div className="dhms-sm-3 has-error">
                        <div className="has-error-word top">
                          日期格式错误
                          <i className="arrow"><i></i></i>
                        </div>
                        <textarea rows="1" placeholder="请填写生产日期"></textarea>
                      </div>
                      <div className="dhms-xs-6 dhms-sm-3">投入使用日期	</div>
                      <div className="dhms-xs-6 dhms-sm-3 has-error">
                        <div className="has-error-word bottom">
                          日期格式错误
                          <i className="arrow"><i></i></i>
                        </div>
                        <textarea rows="1" placeholder="请填写投入使用日期"></textarea>
                      </div>
                    </div>
                    <div className="div-table-tr">
                      <div className="dhms-xs-3">管理单位	</div>
                      <div className="dhms-xs-3 has-error">
                        <div className="has-error-word left">
                          管理单位错误
                          <i className="arrow"><i></i></i>
                        </div>
                        <textarea rows="1" placeholder="请填写管理单位"></textarea>
                      </div>
                      <div className="dhms-xs-3">使用单位</div>
                      <div className="dhms-xs-3 has-error">
                        <div className="has-error-word right">
                          使用单位错误
                          <i className="arrow"><i></i></i>
                        </div>
                        <textarea rows="1" placeholder="请填写使用单位"></textarea>
                      </div>
                      <div className="dhms-xs-3">出厂日期</div>
                      <div className="dhms-xs-3">2017-03-22</div>
                      <div className="dhms-xs-3">设备责任人	</div>
                      <div className="dhms-xs-3"><textarea rows="1" placeholder="请填写设备责任人"></textarea></div>
                    </div>
                    <div className="div-table-tr">
                      <div className="dhms-xs-24 has-error">
                        <div className="has-error-word bottom">
                          使用简介错误
                          <i className="arrow"><i></i></i>
                        </div>
                        <textarea rows="1" placeholder="使用简介"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="blank10"></div>
                  <p className="font14">
                    补充：<br/>
                    1、报错需在 tr "dhms-xs-*" 上添加 class "has-error"。<br/>
                    2、"div-table"相当于"table"，"div-table-tr"相当于"tr"，里面的"div"相当于"td"。
                  </p>
                  <div className="blank20"></div>
                  <h2 id="title" className="color-blue">标题</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <h1>.h1 或者 h1 <small>font-size: 36px;</small></h1>
                  <h2>.h2 或者 h2 <small>font-size: 30px;</small></h2>
                  <h3>.h3 或者 h3 <small>font-size: 24px;</small></h3>
                  <h4>.h4 或者 h4 <small>font-size: 18px;</small></h4>
                  <h5>.h5 或者 h5 <small>font-size: 14px;</small></h5>
                  <h6>.h6 或者 h6 <small>font-size: 12px;</small></h6>
                  <div className="blank20"></div>
                  <h2 id="table" className="color-blue">TABLE</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <table className="table table-striped table-hover">
                    <colgroup>
                      <col width="20%"></col>
                      <col width="30%"></col>
                      <col width="20%"></col>
                      <col width="30%"></col>
                    </colgroup>
                    <thead>
                      <tr className="border">
                        <th>标题一</th>
                        <th>标题二</th>
                        <th>标题三</th>
                        <th>标题四</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr className="border">
                      <td>内容一</td>
                      <td>内容二</td>
                      <td>内容三</td>
                      <td>内容四</td>
                    </tr>
                    <tr className="border">
                      <td>内容一</td>
                      <td>内容二</td>
                      <td>内容三</td>
                      <td>内容四</td>
                    </tr>
                    <tr className="border">
                      <td>内容一</td>
                      <td>内容二</td>
                      <td>内容三</td>
                      <td>内容四</td>
                    </tr>
                    </tbody>
                  </table>
                  <div className="blank10"></div>
                  <h4>.table-hover  <small className="color-super-gray">  table每行添加hover</small></h4>
                  <h4>.table-striped  <small className="color-super-gray">  table每隔一行就会添加颜色</small></h4>
                  <h4>colgroup  <small className="color-super-gray">  利用colgroup调整table的宽度</small></h4>
                  <div className="blank20"></div>
                  <h2 id="button" className="color-blue">按钮</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <p className="button-box"><button className="button button-default">.button-default (默认样式)</button> <button className="button button-default disabled">.button-default.disabled （不可用）</button></p>
                  <p className="button-box"><button className="button button-primary">.button-primary (首选项)</button> <button className="button button-primary disabled">.button-primary.disabled （不可用）</button></p>
                  <p className="button-box"><button className="button button-success">.button-success (成功)</button> <button className="button button-success disabled">.button-success.disabled （不可用）</button></p>
                  <p className="button-box"><button className="button button-info">.button-info (一般信息)</button> <button className="button button-info disabled">.button-info.disabled （不可用）</button></p>
                  <p className="button-box"><button className="button button-warning">.button-warning (警告)</button> <button className="button button-warning disabled">.button-warning.disabled （不可用）</button></p>
                  <p className="button-box"><button className="button button-danger">.button-danger (危险)</button> <button className="button button-danger disabled">.button-danger.disabled （不可用）</button></p>
                  <p className="button-box"><button className="button button-link">.button-link (链接)</button> <button className="button button-link disabled">.button-link.disabled （不可用）</button></p>
                  <p className="button-box">
                    <button className="button button-primary button-lg">.button-lg（大）</button> <button className="button button-primary">正常大小</button> <button className="button button-primary button-sm">.button-sm（中）</button> <button className="button button-primary button-xs">.button-xs（小）</button>
                  </p>
                  <p><button className="button button-primary button-block">.button-block（一整行）</button></p>
                  <div className="blank20"></div>
                  <h2 id="text" className="color-blue">文本相关</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <table className="border table font14">
                    <colgroup>
                      <col width="33.3%"></col>
                      <col width="33.3%"></col>
                      <col width="33.4%"></col>
                    </colgroup>
                    <tbody>
                    <tr>
                      <td className="text-left">dhms css <span className="color-super-gray">(.text-left 左)</span></td>
                      <td className="text-right">dhms css <span className="color-super-gray">(.text-right 右)</span></td>
                      <td className="text-center">dhms css <span className="color-super-gray">(.text-center 居中)</span></td>
                    </tr>
                    <tr>
                      <td className="text-justify">dhms css <span className="color-super-gray">(.text-justify 两端对齐)</span></td>
                      <td className="text-nowrap">dhms css <span className="color-super-gray">(.text-nowrap 不换行)</span></td>
                      <td className="text-left">dhms css <span className="color-super-gray">(.text-left 左)</span></td>
                    </tr>
                    <tr>
                      <td className="text-lowercase">dhms css <span className="color-super-gray">(.text-lowercase 转换为小写)</span></td>
                      <td className="text-uppercase">dhms css <span className="color-super-gray">(.text-uppercase 转换为大写)</span></td>
                      <td className="text-capitalize">dhms css <span className="color-super-gray">(.text-capitalize 首字母大写)</span></td>
                    </tr>
                    <tr>
                      <td colSpan={3} className=""><p className="text-ellipsis" style={{width: 200}}>我没什么作用就是为了凑字数，我没什么作用就是为了凑字数，我没什么作用就是为了凑字数</p></td>
                    </tr>
                    </tbody>
                  </table>
                  <div className="blank20"></div>
                  <h2 id="font" className="color-blue">字体的大小与颜色</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <p className="font12">.font12</p>
                  <p className="font14">.font14</p>
                  <p className="font16">.font16</p>
                  <p className="font18">.font18</p>
                  <p className="font20">.font20</p>
                  <p className="font22">.font22</p>
                  <p className="font30">.font30</p>
                  <p className="font16 color-white"><span className="color-gray">(.color-white)我比较特殊，我是白色</span></p>
                  <p className="font16 color-blue">.color-blue</p>
                  <p className="font16 color-black">.color-black</p>
                  <p className="font16 color-gray">.color-gray</p>
                  <p className="font16 color-super-gray">.color-super-gray</p>
                  <p className="font16 color-red">.color-red</p>
                  <p className="font16 color-green">.color-green</p>
                  <p className="font16 color-yellow">.color-yellow</p>
                  <div className="blank20"></div>
                  <h2 id="form" className="color-blue">表单相关</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <div className="form-example">
                    <p className="name font14">例子1</p>
                    <form>
                      <div className="form-group">
                        <label className="font14">用户名</label>
                        <input className="form-control font14" type="text"/>
                      </div>
                      <div className="form-group">
                        <label className="font14">密码</label>
                        <input className="form-control font14" type="password"/>
                      </div>
                      <div className="form-group">
                        <label className="font14">File input</label>
                        <input className="font14" type="file"/>
                      </div>
                      <div className="checkbox font14">
                        <label><input type="checkbox"/>记住密码</label>
                      </div>
                      <button type="submit" className="button button-default">提交</button>
                    </form>
                  </div>
                  <div className="blank20"></div>
                  <div className="form-example">
                    <p className="name font14">例子2</p>
                    <form className="form-inline">
                      <div className="form-group">
                        <label className="font14">用户名</label>
                        <input className="form-control font14" type="mail"/>
                      </div>
                      <div className="form-group">
                        <label className="font14">密码</label>
                        <input className="form-control font14" type="password"/>
                      </div>
                      <button type="submit" className="button button-default">提交</button>
                    </form>
                  </div>
                  <div className="blank20"></div>
                  <div className="form-example">
                    <p className="name font14">例子3</p>
                    <form className="form-inline">
                      <div className="form-group">
                        <input className="form-control font14" placeholder="用户名" type="mail"/>
                      </div>
                      <div className="form-group">
                        <input className="form-control font14" placeholder="密码" type="password"/>
                      </div>
                      <button type="submit" className="button button-default">提交</button>
                    </form>
                  </div>
                  <div className="blank20"></div>
                  <div className="form-example">
                    <p className="name font14">例子4</p>
                    <form className="form-inline">
                      <div className="form-group">
                        <input className="form-control font14" placeholder="用户名" type="mail"/>
                      </div>
                      <div className="form-group">
                        <input className="form-control font14" placeholder="密码" type="password"/>
                      </div>
                      <button type="submit" className="button button-default">提交</button>
                    </form>
                  </div>
                  <div className="blank20"></div>
                  <h2 id="other" className="color-blue">其他</h2>
                  <hr/>
                  <div className="blank20"></div>
                  <p className="font16">
                    <span className="color-green">边框-字面意思：</span>
                    <br/>.border
                    <br/>.border-left
                    <br/>.border-right
                    <br/>.border-top
                    <br/>.border-bottom
                  </p>
                  <div className="blank10"></div>
                  <p className="font16">
                    <span className="color-green">背景颜色-字面意思：</span>
                    <br/>.bg-white
                    <br/>.bg-blue
                    <br/>.bg-red
                    <br/>.bg-green
                    <br/>.bg-yellow
                  </p>
                  <div className="blank10"></div>
                  <p className="font16">
                    <span className="color-green">浮动：</span>
                    <br/>.fl 向左浮动
                    <br/>.fr 向右浮动
                    <br/>.clearfix 清楚浮动
                  </p>
                </div>
              </div>
            </div>
            <div className="sidebar-left sidebar-this">
              <ul className="font18 css-list">
                <li><a href="#sfy">双飞翼布局</a></li>
                <li><a href="#container">布局容器</a></li>
                <li><a href="#grid">栅格系统</a></li>
                <li><a href="#title">标题</a></li>
                <li><a href="#table">TABLE</a></li>
                <li><a href="#button">按钮</a></li>
                <li><a href="#text">文本相关</a></li>
                <li><a href="#font">字体的大小与颜色</a></li>
                <li><a href="#form">表单相关</a></li>
                <li><a href="#other">其他</a></li>
              </ul>
            </div>
            <div className="sidebar-right"></div>

          </div>


          {/*<div className="d-main">*/}
            {/*<div className="inner">*/}
              {/*<Header />*/}
              {/*<p className="name font14 page-breadcrumb">您的当前位置：<a className="color-black">首页</a></p>*/}
              {/*<div className="dhms-fluid">*/}
                {/*<div className="row">*/}
                  {/*<div className="dhms-sm-6 bg-green">sds</div>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div className="inner-main clearfix index-box font18">*/}
                {/*<div className="clearfix">*/}
                  {/*<div className="dhms-sm-6 dhms-lg-4 dhms-xs-12">*/}
                    {/*<div className="bg-white border-r-small box txt-center">项目一</div>*/}
                  {/*</div>*/}
                  {/*<div className="dhms-sm-6 dhms-lg-4 dhms-xs-12">*/}
                    {/*<div className="bg-blue border-r-small box txt-center">项目一</div>*/}
                  {/*</div>*/}
                  {/*<div className="dhms-sm-6 dhms-lg-4 dhms-xs-12">*/}
                    {/*<div className="bg-red border-r-small box txt-center">项目一</div>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="blank20"></div>*/}
                {/*<div className="d-list bg-white font12">*/}
                  {/*<div className="dhms-xs-5">1</div>*/}
                  {/*<div className="dhms-xs-5">1</div>*/}
                  {/*<div className="dhms-xs-5">1</div>*/}
                  {/*<div className="dhms-xs-5">1</div>*/}
                  {/*<div className="dhms-xs-4 fr txt-center">我<br/>很<br/>高</div>*/}
                  {/*<div className="dhms-xs-10">2</div>*/}
                  {/*<div className="dhms-xs-10">2</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}
                  {/*<div className="dhms-xs-2">3</div>*/}

                {/*</div>*/}
              {/*</div>*/}
              {/*<div className="blank20"></div>*/}
              {/*<div className="button-box">*/}
                {/*<p className="txt-center">*/}
                  {/*<a className="button button-gray button-small">small</a>*/}
                  {/*<a className="button button-red button-small">small</a>*/}
                  {/*<a className="button button-green button-small">small</a>*/}
                  {/*<a className="button button-blue button-small">small</a>*/}
                  {/*<a className="button button-yellow button-small">small</a>*/}
                {/*</p>*/}
                {/*<div className="blank10"></div>*/}
                {/*<p className="txt-center">*/}
                  {/*<a className="button button-gray button-big">big</a>*/}
                  {/*<a className="button button-red button-big">big</a>*/}
                  {/*<a className="button button-green button-big">big</a>*/}
                  {/*<a className="button button-blue button-big">big</a>*/}
                  {/*<a className="button button-yellow button-big">big</a>*/}
                {/*</p>*/}
              {/*</div>*/}
              {/*<div className="blank20"></div>*/}
              {/*<div className="inner-main">*/}
                {/*<table className="table bg-white txt-center font14">*/}
                  {/*<colgroup>*/}
                    {/*<col width="25%" />*/}
                    {/*<col width="25%" />*/}
                    {/*<col width="25%" />*/}
                    {/*<col width="25%" />*/}
                  {/*</colgroup>*/}
                  {/*<thead>*/}
                    {/*<tr>*/}
                      {/*<td>标题一</td>*/}
                      {/*<td>标题二</td>*/}
                      {/*<td>标题三</td>*/}
                      {/*<td>标题四</td>*/}
                    {/*</tr>*/}
                  {/*</thead>*/}
                  {/*<tbody>*/}
                    {/*<tr>*/}
                      {/*<td>dfdf</td>*/}
                      {/*<td>dfdf</td>*/}
                      {/*<td>dfdf</td>*/}
                      {/*<td>dfdf</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                      {/*<td>dfdf</td>*/}
                      {/*<td>dfdf</td>*/}
                      {/*<td>dfdf</td>*/}
                      {/*<td>dfdf</td>*/}
                    {/*</tr>*/}
                  {/*</tbody>*/}
                {/*</table>*/}
              {/*</div>*/}
              {/*<div className="blank20"></div>*/}
              {/*<Icon />*/}
              {/*<div className="blank20"></div>*/}
              {/*<Footer />*/}


            {/*</div>*/}
          {/*</div>*/}
          {/*<Sidebar menus={[]}/>*/}

        </div>
        // <div className="clearfix">
        //     <p className="name">双飞翼布局和圣杯布局的对比</p>
        //     <div className="bd">
        //         <div className="main">
        //             <div className="inner">
        //                 Main
        //             </div>
        //         </div>
        //         <div className="left">Left</div>
        //         <div className="right">Right</div>
        //     </div>
        // </div>
    )
  }
}
function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps (dispatch) {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
