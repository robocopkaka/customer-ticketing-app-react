import axios from 'axios';

class CustomerAuthApi {
  static login(type, customer) {
    console.log(customer)
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

export default CustomerAuthApi;
