import validator from 'validator';

function resetStates(state) {
  for (const key in state.errorMessages) {
    state.errorMessages[key] = '';
  }
  state.valid = true;
}

export default function commentFormValidator(state) {
  resetStates(state)
  if(validator.isEmpty(state.body)) {
    state.errorMessages.body = 'Body is missing';
    state.valid = false;
  }

  return {
    body: state.body,
    errorMessages: state.errorMessages,
    valid: state.valid
  };
}
