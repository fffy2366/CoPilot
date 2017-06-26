import axios from 'axios'
import config from '../config'
import Lockr from 'lockr'

// import Qs from 'qs'
export default {
  request (method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    var url = config.serverURI + uri
    console.log('method:' + method)
    // data = Qs.stringify(data)
    // console.log('data:' + data)
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.baseURL = config.serverURI
    axios.defaults.timeout = 1000 * 15
    axios.defaults.headers.token = Lockr.get('token')
    axios.defaults.headers.sessionId = Lockr.get('sessionId')
    // axios.defaults.headers['Content-Type'] = 'application/json'

    return axios({ method, url, data })
  }
}
