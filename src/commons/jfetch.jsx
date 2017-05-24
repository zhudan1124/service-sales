require('lie/polyfill')
import superagent from 'superagent'
import BSON from 'bson'
import {Buffer} from 'buffer'
import { setToken, getToken, setNoticeForLogin } from '../utils'
let bson = new BSON()

const methods = [
  'get',
  'head',
  'post',
  'put',
  'del',
  'options',
  'patch'
]

class _JFetch {
  constructor (opts) {
    this.opts = opts || {}
    if (!this.opts.baseURI) {
      throw new Error('baseURI option is required')
    }
    methods.forEach(method =>
      (this[method] = (path, { params, data, timeout=5000 } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](this.opts.baseURI + path).type('arraybuffer').responseType('arraybuffer').withCredentials()
        if (!!params) {
          request.query(params)
        }
        if (!!this.opts.headers) {
          this.opts.headers['Access-Token'] = getToken()
          request.set(this.opts.headers)
        }
        if (!!data) {
          request.send(data.buffer || (new Uint8Array(data)).buffer)
        }
        if (!!timeout) {
          request.timeout(timeout)
        }
        request.end(function(err, res){
          if (err) {
            console.log(err)
            reject(res || err)
          } else {
            let token = getToken()
            if (token) {
              setToken(token)
            }
            let data = bson.deserialize(new Buffer(res.xhr.response), {promoteValues: true})
            console.log(data)
            if (data.code === 498 || data.code === 499) {
              let type = ''
              switch (data.code) {
                case 498:
                  type = 'success'
                  break;
                case 499:
                  type = 'danger'
                  break;
              }
              setNoticeForLogin(data.message, type)
              window.location = '/login'
            }
            resolve(data || '')
          }
        })
      }))
    )
  }
}

const JFetch = _JFetch

export default JFetch
