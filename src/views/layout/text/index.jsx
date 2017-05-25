import React from 'react'
const Text = () => (
  <div className="clearfix dhms-css-box">
    <h2 id="text" className="color-blue">文本相关</h2>
    <hr />
    <div className="blank20" />
    <table className="border table font14">
      <colgroup>
        <col width="33.3%" />
        <col width="33.3%" />
        <col width="33.4%" />
      </colgroup>
      <tbody>
        <tr>
          <td className="text-left">dhms css <span className="color-super-gray">(.text-left 左)</span></td>
          <td className="text-right">dhms css <span className="color-super-gray">(.text-right 右)</span></td>
          <td className="text-center">dhms css <span className="color-super-gray">(.text-center 居中)</span></td>
        </tr>
        <tr>
          <td className="text-justify">dhms css <span className="color-super-gray">(.text-justify 两端对齐)</span>
          </td>
          <td className="text-nowrap">dhms css <span className="color-super-gray">(.text-nowrap 不换行)</span>
          </td>
          <td className="text-left">dhms css <span className="color-super-gray">(.text-left 左)</span></td>
        </tr>
        <tr>
          <td className="text-lowercase">dhms css <span className="color-super-gray">(.text-lowercase 转换为小写)</span></td>
          <td className="text-uppercase">dhms css <span className="color-super-gray">(.text-uppercase 转换为大写)</span></td>
          <td className="text-capitalize">dhms css <span className="color-super-gray">(.text-capitalize 首字母大写)</span></td>
        </tr>
        <tr>
          <td colSpan={3} className=""><p className="text-ellipsis" style={{width: 200}}>
            我没什么作用就是为了凑字数，我没什么作用就是为了凑字数，我没什么作用就是为了凑字数</p></td>
        </tr>
      </tbody>
    </table>
  </div>
)
export default Text
