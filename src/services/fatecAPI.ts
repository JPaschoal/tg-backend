import fatecApi from 'fatec-api'

const apiFatec = (login: string, password: string) => {
  const myAccount = new fatecApi.Account(login, password)
  return myAccount

}

export default apiFatec;