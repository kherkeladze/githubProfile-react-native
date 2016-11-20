// @flow
import axios from 'axios'

class API {
  static fetchByUserName(username?: String): Promise {
    return axios.get(`https://api.github.com/users/${username}`);
  }
}

export default API