import React from 'react'
import './index.scss'

const Btn = () => (
  <div className="clearfix dhms-css-box">
    <h2 id="button" className="color-blue">按钮</h2>
    <hr />
    <div className="blank20" />
    <p className="button-box">
      <button className="button button-default">.button-default (默认样式)</button>
      <button className="button button-default disabled">.button-default.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-primary">.button-primary (首选项)</button>
      <button className="button button-primary disabled">.button-primary.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-success">.button-success (成功)</button>
      <button className="button button-success disabled">.button-success.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-info">.button-info (一般信息)</button>
      <button className="button button-info disabled">.button-info.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-warning">.button-warning (警告)</button>
      <button className="button button-warning disabled">.button-warning.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-danger">.button-danger (危险)</button>
      <button className="button button-danger disabled">.button-danger.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-link">.button-link (链接)</button>
      <button className="button button-link disabled">.button-link.disabled （不可用）</button>
    </p>
    <p className="button-box">
      <button className="button button-primary button-lg">.button-lg（大）</button>
      <button className="button button-primary">正常大小</button>
      <button className="button button-primary button-sm">.button-sm（中）</button>
      <button className="button button-primary button-xs">.button-xs（小）</button>
    </p>
    <p>
      <button className="button button-primary button-block">.button-block（一整行）</button>
    </p>
  </div>
)
export default Btn
