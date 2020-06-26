import RequestApi from "../api/requestApi";

export function createRequestSuccess(data) {
  return { type: 'CREATE_REQUEST_SUCCESS', data }
}

export function createRequestFailure(message) {
  return { type: 'CREATE_REQUEST_FAILURE', message }
}

export function fetchRequestsSuccess(data) {
  return { type: 'FETCH_REQUESTS_SUCCESS', data }
}

export function fetchOneRequestSuccess(data) {
  return { type: 'FETCH_ONE_REQUEST_SUCCESS', data }
}

export function resolveRequestSuccess() {
  return { type: 'RESOLVE_REQUEST_SUCCESS' }
}

export function fetchOneRequestFailure() {
  return { type: 'FETCH_ONE_REQUEST_FAILURE' }
}

export function create(request) {
  return (dispatch) => {
    return RequestApi.create(request)
      .then((response) => {
        dispatch(createRequestSuccess(response));
        return response
      })
      .catch((error) => {
        const { data: { errors } } = error.response;
        console.log(errors);
        let message = '';
        Object.entries(errors[0]).forEach(([key, value]) => {
          message += `${key} ${value}\n`;
        })
        dispatch(createRequestFailure(message))
        throw error;
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

export function fetchOne(id) {
  return (dispatch) => {
    return RequestApi.fetchOne(id)
      .then((response) => {
        dispatch(fetchOneRequestSuccess(response.data))
      })
      .catch(() => {
        dispatch(fetchOneRequestFailure());
      });
  }
}

export function resolve(id) {
  return (dispatch) => {
    return RequestApi.resolve(id)
      .then((response) => {
        dispatch(resolveRequestSuccess())
      });
  }
}
