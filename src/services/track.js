import configService from './config'

const axios = require('axios')
const trackService = {}
const baseUrl = configService.apiUrl
trackService.search = function (q) {
  const type = 'track'
  return axios.get(`${baseUrl}/search`, {
    params: {
      q: q,
      type: type
    }
  })
    .then(res => {
      return res.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default trackService
