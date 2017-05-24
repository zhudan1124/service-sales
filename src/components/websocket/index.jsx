import React from 'react'

export default class RCWebSocket extends React.Component {
  constructor(props) {
    super(props)
    const {url, protocol} = props
    this.state = {
      ws: new WebSocket(url, protocol)
    }
  }
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    onListen: React.PropTypes.func.isRequired,
    interval: React.PropTypes.number,
    reconnect: React.PropTypes.bool,
    protocol: React.PropTypes.string
  }
  static defaultProps = {
    interval: 5000,
    reconnect: true
  }
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }
  setupWebSocket () {
    let {url, protocol, interval, reconnect, onListen, ...options} = this.props
    let {token} = options
    let {ws} = this.state
    ws = ws.readyState !== 1 ? new WebSocket(url, protocol) : ws
    ws.onopen = () => {
      this.state.ws.send(JSON.stringify({
        'type': 'verify',
        'text': token && token()
      }))
    }
    ws.onmessage = (e) => {
      onListen && onListen(e.data)
    }
    ws.onclose = () => {
      if (reconnect) {
        setTimeout(() => {
          this.setupWebSocket()
        }, interval)
      }
    }
    this.setState({ws: ws})
  }
  componentDidMount () {
    this.setupWebSocket()
  }
  componentWillUnmount () {
    this.state.ws.close()
  }
  render () {
    return null
  }
}
