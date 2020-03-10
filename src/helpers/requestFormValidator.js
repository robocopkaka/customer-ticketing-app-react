import validator from 'validator';

function resetStates(state) {
  for (const key in state.errorMessages) {
    state.errorMessages[key] = '';
  }
  state.valid = true;
}

export default function requestFormValidator(state) {
  resetStates(state)
  if(validator.isEmpty(state.subject)) {
    state.errorMessages.subject = 'Subject is missing';
    state.valid = false;
  }
  if(validator.isEmpty(state.description)) {
    state.errorMessages.description = 'Description is missing';
    state.valid = false;
  }

  return {
    subject: state.subject,
    description: state.description,
    errorMessages: state.errorMessages,
    valid: state.valid
  };
}
