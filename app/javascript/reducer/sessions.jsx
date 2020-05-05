const sessionReducer = (state={siginin:false,name:""},action) => {
  switch(action.type) {
    case 'SIGNEDIN':
      console.log("Login");
      return {login:true,name:action.name};     
    case'SIGNEDOUT':
      console.log("Logout");
      return {login:false,name:""};
    default:
      return state
  }
}

export default sessionReducer;
