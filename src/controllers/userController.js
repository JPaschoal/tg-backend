import apiFatec from '../services/fatecAPI.js';

let myaccount;

export default {
  async login(request, response) {
    const {login, password} = request.body
    myaccount = apiFatec(login, password);
    console.log(myaccount)
    let status;
    await myaccount.login().then(
      () => {
        status = myaccount.isLogged() ? "logged" : "notLogged";
      })
      .catch((err) => {
        status = myaccount.isDenied() ? "notLogged" : "logged";
      }) 
    return response.json({"status": status});
  },

  perfil(request, response) {
    console.log(myaccount);
    let profile;
    myaccount.student.getProfile().then( result => {
      profile = result
    })
    return response.json({"test": "test"});
  }
}