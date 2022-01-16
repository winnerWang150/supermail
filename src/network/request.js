import axios from 'axios'

const request = function (config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  },
  error => {
    console.log(error)
  }
  )

  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  },
  error => {
    console.log(error)
  }
  )

  return instance(config)
}

export default request
