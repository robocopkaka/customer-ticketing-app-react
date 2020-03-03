import decode from 'jwt-decode';
import CustomerAuthApi from "../api/customerAuthApi";

export function customerSignupSuccess(data) {
  return { type: 'CUSTOMER_SIGNUP_SUCCESS', data }
}

export function customerLoginSuccess(data) {
  return { type: 'CUSTOMER_LOGIN_SUCCESS', data }
}

export function login(type, customer) {
  return (dispatch) => {
    return CustomerAuthApi.login(type, customer)
      .then((response) => {
        const decodedToken = decode(response.jwt);
        console.log(decodedToken)
        const { sub } = decodedToken;
        localStorage.setItem('userId', sub)
        localStorage.setItem('userType', sub.substr(0, 4))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}