import apiFatec from '../services/fatecAPI.js';

let myaccount;
let access = {
  login: "",
  password: ""
}


export default {
  async login(request, response) {
    const {login, password} = request.body
    myaccount = apiFatec(login, password)
    let status;
    await myaccount.login().then(
      () => {
        status = myaccount.isLogged() ? "logged" : "notLogged"
      })
      .catch((err) => {
        status = myaccount.isDenied() ? "notLogged" : "logged"
      }) 
    return response.json({"status": status})
  },

  perfil(request, response) {
    // myaccount = apiFatec(access.login, access.password)
    console.log(myaccount)
    const profile = myaccount.getProfile();
    return response.json(profile)
  }
}