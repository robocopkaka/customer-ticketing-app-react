import validator from 'validator';

function resetStates(state) {
  for (const key in state.errorMessages) {
    state.errorMessages[key] = '';
  }
  state.valid = true;
}

export default function loginFormValidator(state) {
  resetStates(state)
  if(validator.isEmpty(state.email)) {
    state.errorMessages.email = 'Email is missing';
    state.valid = false;
  }
  if(validator.isEmpty(state.password)) {
    state.errorMessages.password = 'Password is missing';
    state.valid = false;
  }

  return {
    email: state.email,
    password: state.password,
    errorMessages: state.errorMessages,
    valid: state.valid
  };
}
