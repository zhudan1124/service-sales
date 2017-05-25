import React from 'react'
import './index.scss'
const Show = () => (
  <div className="clearfix dhms-css-box">
    <h2 id="sfy" className="color-blue">双飞翼布局</h2>
    <hr />
    <div className="blank20" />
    <h4>简介：</h4>
    <p className="font14 color-gray text-info">实现要求：主间部分内容的宽度是要自适应的。</p>
    <div className="blank10" />
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
    <div className="blank10" />
    <h4>代码：</h4>
    <pre>
      <code data-lang="scss">
        <span className="nt">&lt;div </span>
        <span className="na">class=</span>
        <span className="s">"box-show"</span>
        <span className="nt">></span>
        <br />
        <span className="nt">  &lt;div </span>
        <span className="na">class=</span>
        <span className="s">"content"</span>
        <span className="nt">></span>
        <br />
        <span className="nt">    &lt;div </span>
        <span className="na">class=</span>
        <span className="s">"inner"</span>
        <span className="nt">></span> Main <span className="nt">&lt;div></span>
        <br />
        <span className="nt">  &lt;div></span>
        <br />
        <span className="nt">  &lt;div </span>
        <span className="na">class=</span>
        <span className="s">"sidebar-left"</span>
        <span className="nt">></span> Left <span className="nt">&lt;div></span>
        <br />
        <span className="nt">  &lt;div </span>
        <span className="na">class=</span>
        <span className="s">"sidebar-right"</span>
        <span className="nt">></span> Right <span className="nt">&lt;div></span>
        <br />
        <span className="nt">&lt;div></span>
      </code>
    </pre>
  </div>
)
export default Show
