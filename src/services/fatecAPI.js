// Connection with fatec api

// const fatecApi = require('fatec-api')
import fatecApi from 'fatec-api'

const apiFatec = (login, password) => {
  const myAccount = new fatecApi.Account(login, password)
  return myAccount

}

export default apiFatec;