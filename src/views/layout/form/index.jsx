import React from 'react'
const Form = () => (
  <div className="clearfix dhms-css-box">
    <h2 id="form" className="color-blue">表单相关</h2>
    <hr />
    <div className="blank20" />
    <div className="form-example">
      <p className="name font14">例子1</p>
      <form>
        <div className="form-group">
          <label className="font14">用户名</label>
          <input className="form-control font14" type="text" />
        </div>
        <div className="form-group">
          <label className="font14">密码</label>
          <input className="form-control font14" type="password" />
        </div>
        <div className="form-group">
          <label className="font14">File input</label>
          <input className="font14" type="file" />
        </div>
        <div className="checkbox font14">
          <label><input type="checkbox" />记住密码</label>
        </div>
        <button type="submit" className="button button-default">提交</button>
      </form>
    </div>
    <div className="blank20" />
    <div className="form-example">
      <p className="name font14">例子2</p>
      <form className="form-inline">
        <div className="form-group">
          <label className="font14">用户名</label>
          <input className="form-control font14" type="mail" />
        </div>
        <div className="form-group">
          <label className="font14">密码</label>
          <input className="form-control font14" type="password" />
        </div>
        <button type="submit" className="button button-default">提交</button>
      </form>
    </div>
    <div className="blank20" />
    <div className="form-example">
      <p className="name font14">例子3</p>
      <form className="form-inline">
        <div className="form-group">
          <input className="form-control font14" placeholder="用户名" type="mail" />
        </div>
        <div className="form-group">
          <input className="form-control font14" placeholder="密码" type="password" />
        </div>
        <button type="submit" className="button button-default">提交</button>
      </form>
    </div>
    <div className="blank20" />
    <div className="form-example">
      <p className="name font14">例子4</p>
      <form className="form-inline">
        <div className="form-group">
          <input className="form-control font14" placeholder="用户名" type="mail" />
        </div>
        <div className="form-group">
          <input className="form-control font14" placeholder="密码" type="password" />
        </div>
        <button type="submit" className="button button-default">提交</button>
      </form>
    </div>
  </div>
)
export default Form
