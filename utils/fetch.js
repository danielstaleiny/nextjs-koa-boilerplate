import axios from 'axios'

// not used but cool to have as default
// change to your api
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'

const DOMAIN = process.env.DOMAIN || axios.defaults.baseURL

// GET, POST, PUT, PATCH
// automatically pass appkey to your requests
// takes env.DOMAIN and env.APIKEY

// Object :: String
// Example: {id: 1,name: 'Anon'}
// Returns: &id=1&name=Anon
const addQuery = obj => {
    let result = ''
    for (const prop in obj) {
        result = result + genQuery(prop, obj[prop])
    }
    return result
}

const genQuery = (key, value) => `&${key}=${value}`

// GET
const get = (path, options) => {
    let qs = '?appkey=' + process.env.APPKEY
    if (options !== undefined) qs = qs + addQuery(options)
    return axios.get(DOMAIN + path + qs)
}

// helper method with body
const withBody = method => (path, body, token) => {
    let qs = '?appkey=' + process.env.APPKEY
    if (token) {
        qs = qs + '&token=' + token
    }
    return axios({
        url: DOMAIN + path + qs,
        method: method,
        data: body
    })
}

// POST
const post = withBody('POST')
// PUT
const put = withBody('PUT')
// PATCH
const patch = withBody('PATCH')

export { get, post, put, patch }
