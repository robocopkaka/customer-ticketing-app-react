import axios from 'axios';

class AuthApi {
  static login(type, customer) {
    return axios.post(`http://localhost:3001/${type}/login`, customer, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
      .catch((error) => {
        throw error;
      })
  }
}

export default AuthApi;
