import JFetch from './jfetch'
export const API_SITE_URL = `__SITE_URL__/backend/`
export const WS_SITE_URL = `__WS_URL__/ws`

const jFetch = new JFetch({
  baseURI: API_SITE_URL,
  headers: {
    'Content-Type': 'application/octet-stream;charset=UTF-8'
  }
})

export default jFetch
