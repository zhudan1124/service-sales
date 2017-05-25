import React from 'react'
const Table = () => (
  <div className="clearfix dhms-css-box">
    <h2 id="table" className="color-blue">TABLE</h2>
    <hr />
    <div className="blank20" />
    <table className="table table-striped table-hover">
      <colgroup>
        <col width="20%" />
        <col width="30%" />
        <col width="20%" />
        <col width="30%" />
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
    <div className="blank10" />
    <h4>.table-hover
      <small className="color-super-gray"> table每行添加hover</small>
    </h4>
    <h4>.table-striped
      <small className="color-super-gray"> table每隔一行就会添加颜色</small>
    </h4>
    <h4>colgroup
      <small className="color-super-gray"> 利用colgroup调整table的宽度</small>
    </h4>
  </div>
)
export default Table
