import apiFatec from '../services/fatecAPI.js';

let myaccount;

export default {
  async login(request, response) {
    const {login, password} = request.body
    myaccount = apiFatec(login, password);
    await myaccount.login()
    .then(
      () => {
        const status = myaccount.isLogged() ? "logged" : "notLogged";
        return response.json({"status": status});
      })
      .catch((err) => {
        console.error(err);
      })
    },

  async perfil(request, response) {
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getProfile()
    .then( profile => {
      return response.json(profile);
    })
    .catch((err) => {
      console.error(err);
    })
  },

  async schedule(request, response) {
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getSchedules()
    .then( schedule => {
      return response.json(schedule);
    })
    .catch((err) =>{
      console.error(err);
    })
  },

  async enrolledDisciplines(request, response) {
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getEnrolledDisciplines()
    .then( enrolledDisciplines => {
      return response.json(enrolledDisciplines);
    })
    .catch((err) => {
      console.error(err);
    });
  },

  async calendar(request, response) {
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getAcademicCalendar()
    .then( calendar => {
      return response.json(calendar);
    })
    .catch((err) => {
      console.error(err);
    });
  },

  async grades(request, response) {
    if(!myaccount) {
      return response.json({status: "notLogged"});
    }
    await myaccount.getPartialGrades()
    .then( grades => {
      return response.json(grades);
    })
    .catch((err) => {
      console.error(err);
    });
  },

  logout(request, response) {
    myaccount = null;
    return response.json({status: "true"});
  }
}