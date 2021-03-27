import apiFatec from '../services/fatecAPI.js';

let myaccount;

export default {
  async login(request, response) {
    const {login, password} = request.body
    myaccount = apiFatec(login, password);
    
    try {
      await myaccount.login()
      const status = myaccount.isLogged()
      return response.json({ "status": status })
    }
    catch (err) {
      console.error("invalido");
      console.error(err)
      return response.json({ "status": "notLogged" })
    }
    },

  async perfil(request, response) {
    try {
      const profile = await myaccount.getProfile()
      return response.json(profile);
    }
    catch (err) {
      console.log(err);
      return response.json({ "profile": false })
    }
  },

  async schedule(request, response) {
    try {
      const schedules = await myaccount.getSchedules()
      return response.json(schedules);
    } 
    catch (err) {
      console.error(err)
      return response.json({ "schedules": false })
    }
  },

  async enrolledDisciplines(request, response) {
    try {
      const enrolledDisciplines = await myaccount.getEnrolledDisciplines()
      return response.json(enrolledDisciplines);
    } 
    catch (err) {
      console.error(err)
      return response.json({ "enrolledDisciplines": false })
    }
  },

  async calendar(request, response) {
    try {
      const calendar = await myaccount.getAcademicCalendar()
      return response.json(calendar);
    } 
    catch (err) {
      console.error(err)  
      return response.json({ "calendar": false })
    }
  },

  async grades(request, response) {
    try {
      const partialGrades = await myaccount.getPartialGrades()
      return response.json(partialGrades)
    } catch (err) {
      console.error(err)
      return response.json({ "partialGrades": false })
    }
  },

  logout(request, response) {
    myaccount = null;
    return response.json({status: "true"});
  }
}