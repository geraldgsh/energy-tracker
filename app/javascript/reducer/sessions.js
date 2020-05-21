const sessionReducer = (state = { siginin: false, id: '', name: '' }, action) => {
  switch (action.type) {
    case 'SIGNEDIN':
      return { login: true, id: action.id, name: action.name };
    case 'SIGNEDOUT':
      return { login: false, id: '', name: '' };
    default:
      return state;
  }
};

export default sessionReducer;
