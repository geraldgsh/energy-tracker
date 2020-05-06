const sessionReducer = (state = { siginin: false, name: '' }, action) => {
  switch (action.type) {
    case 'SIGNEDIN':
      return { login: true, name: action.name };
    case 'SIGNEDOUT':
      return { login: false, name: '' };
    default:
      return state;
  }
};

export default sessionReducer;
