import axios from './defaultConfig';

class AuthApi {
  static login(type, user) {
    return axios.post(`${type}/login`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      })
  }

  static signup(type, user) {
    return axios.post(`${type}`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default AuthApi;
