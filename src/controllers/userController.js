import apiFatec from '../services/fatecAPI.js';

let myaccount;

export default {
  async login(request, response) {
    const {login, password} = request.body
    myaccount = apiFatec(login, password);
    let status;
    await myaccount.login().then(
      () => {
        status = myaccount.isLogged() ? "logged" : "notLogged";
      })
      .catch((err) => {
        console.log(err);
        status = myaccount.isDenied() ? "notLogged" : "logged";
      }) 
      console.log(status)
    return response.json({"status": status});
  },

  async perfil(request, response) {
    let profile;
    await myaccount.getProfile()
    .then( result => {
      profile = result;
    })
    .catch((err) => {
      console.log(err);
    })
    console.log(profile);
    return response.json(profile);
  },

  async schedule(request, response) {
    let schedule;
    await myaccount.getSchedules()
    .then( result => {
      schedule = result;
    })
    .catch((err) =>{
      console.log(err);
    })
    console.log(schedule);
    return response.json(schedule);
  },

  async enrolledDisciplines(request, response) {
    let enrolledDisciplines;
    await myaccount.getEnrolledDisciplines()
    .then( result => {
      enrolledDisciplines = result;
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(enrolledDisciplines);
    return response.json(enrolledDisciplines);
  },

  async calendar(request, response) {
    let calendar;
    await myaccount.getAcademicCalendar()
    .then( result => {
      calendar = result;
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(calendar);
    return response.json(calendar);
  }
}