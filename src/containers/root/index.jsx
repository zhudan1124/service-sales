import React from 'react'

class Root extends React.Component {
  render () {
    return (
      <div id="base">
        {this.props.children}
      </div>
    )
  }
}
module.exports = Root
