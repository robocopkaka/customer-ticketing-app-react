import RequestApi from "../api/requestApi";

export function createRequestSuccess(data) {
  return { type: 'CREATE_REQUEST_SUCCESS', data }
}

export function createRequestFailure() {
  return { type: 'CREATE_REQUEST_FAILURE' }
}

export function fetchRequestsSuccess(data) {
  return { type: 'FETCH_REQUESTS_SUCCESS', data }
}

export function create(request) {
  return (dispatch) => {
    return RequestApi.create(request)
      .then((response) => {
        dispatch(createRequestSuccess(request));
      })
      .catch((error) => {
        dispatch(createRequestFailure())
      })
  }
}

export function fetchRequests(type, query) {
  return (dispatch) => {
    return RequestApi.fetchRequests(type,query)
      .then((response) => {
        dispatch(fetchRequestsSuccess(response))
      });
  };
}
