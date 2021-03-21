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
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
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
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
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
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
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
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getAcademicCalendar()
    .then( result => {
      calendar = result;
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(calendar);
    return response.json(calendar);
  },

  async grades(request, response) {
    let grades;
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getPartialGrades()
    .then( result => {
      grades = result;
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(grades);
    return response.json(grades);
  },

  logout(request, response) {
    myaccount = null;
    return response.json({status: "true"});
  }
}