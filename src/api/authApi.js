import axios from 'axios';

class AuthApi {
  static login(type, user) {
    return axios.post(`http://localhost:3001/${type}/login`, user, {
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
    console.log(user)
    return axios.post(`http://localhost:3001/${type}`, user, {
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
