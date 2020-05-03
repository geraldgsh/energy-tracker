const SIGNEDIN = (name) => {
  return {
    type: "SIGNEDIN",
    name
  }
}
const SIGNEDOUT = () => {
  return { type: "SIGNEDOUT" }
}

export { SIGNEDIN, SIGNEDOUT };