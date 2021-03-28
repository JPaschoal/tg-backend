import apiFatec from '../services/fatecAPI';
import { IMyAccount, IProfile, ISchedule, IEnrolledDisciplines, ICalendar, IGrades,  IAccess } from '../typings/fatecApi'
import {  Request, Response } from 'express'

let myaccount: IMyAccount | null;

export default {
  async login(request: Request, response: Response) {
    const {login, password}: IAccess = request.body
    myaccount = apiFatec(login, password);
    
    try {
      await myaccount.login()
      const status: boolean = myaccount.isLogged()
      return response.json({ "status": status })
    }
    catch (err) {
      console.error("invalido");
      console.error(err)
      return response.json({ "status": "notLogged" })
    }
    },

  async perfil(request: Request, response: Response) {
    try {
      const profile: IProfile = await myaccount.getProfile()
      return response.json(profile);
    }
    catch (err) {
      console.log(err);
      return response.json({ "profile": false })
    }
  },

  async schedule(request: Request, response: Response) {
    try {
      const schedules: ISchedule[] = await myaccount.getSchedules()
      return response.json(schedules);
    } 
    catch (err) {
      console.error(err)
      return response.json({ "schedules": false })
    }
  },

  async enrolledDisciplines(request: Request, response: Response) {
    try {
      const enrolledDisciplines: IEnrolledDisciplines = await myaccount.getEnrolledDisciplines()
      return response.json(enrolledDisciplines);
    } 
    catch (err) {
      console.error(err)
      return response.json({ "enrolledDisciplines": false })
    }
  },

  async calendar(request: Request, response: Response) {
    try {
      const calendar: ICalendar = await myaccount.getAcademicCalendar()
      return response.json(calendar);
    } 
    catch (err) {
      console.error(err)  
      return response.json({ "calendar": false })
    }
  },

  async grades(request: Request, response: Response) {
    try {
      const partialGrades: IGrades[] = await myaccount.getPartialGrades()
      return response.json(partialGrades)
    } catch (err) {
      console.error(err)
      return response.json({ "partialGrades": false })
    }
  },

  logout(request: Request, response: Response) {
    myaccount = null;
    return response.json({status: "true"});
  }
}