import configService from './config'
import axios from 'axios'

const fetchTrackByName = async (searchQuery) => {
  try {
    const res = await axios
      .get(`${configService.apiUrl}/search?q=${searchQuery}&type=track`)
      .then((res) => res.data)
    return res
  } catch (error) {
    console.log(error)
  }
}

export default fetchTrackByName
