import RequestApi from "../api/requestApi";

export function createRequestSuccess(data) {
  return { type: 'CREATE_REQUEST_SUCCESS', data }
}

export function createRequestFailure() {
  return { type: 'CREATE_REQUEST_FAILURE' }
}

export function create(request) {
  return (dispatch) => {
    return RequestApi.create(request)
      .then((response) => {
        console.log(response)
        dispatch(createRequestSuccess(request));
      })
      .catch((error) => {
        console.log(error)
        dispatch(createRequestFailure())
      })
  }
}
