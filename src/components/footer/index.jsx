import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <p>© 2016-<script>document.write(new Date().getFullYear())</script> 苏州德姆斯信息技术有限公司 0512-88169535</p>
      </div>
    )
  }
}
