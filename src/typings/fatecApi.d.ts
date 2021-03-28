export interface IAccess {
  login: string,
  password: string
}

export interface IMyAccount {
  cookie?:   string;
  state?:    number;
  student?:  IStudent;
  username?: string;
  password?: string;
  isLogged();
  login();
  getProfile();
  getSchedules();
  getEnrolledDisciplines();
  getAcademicCalendar();
  getPartialGrades();
}

export interface IStudent {
  enrolledDisciplines: any[];
}

export interface IProfile {
  averageGrade: number;
  birthday:     string;
  code:         string;
  course:       string;
  cpf:          string;
  email:        string;
  name:         string;
  period:       string;
  picture:      string;
  progress:     number;
  unit:         string;
}

export interface ISchedule {
  weekday: number;
  periods: Period[];
}

export interface Period {
  discipline: IDiscipline;
  endAt:      string;
  startAt:    string;
}

export interface IDiscipline {
  code:          string;
  classroomCode: IClassroomCode;
}

export enum IClassroomCode {
  A = "A",
}

export interface IEnrolledDisciplines {
  absenses:      number;
  name:          string;
  code:          string;
  classroomCode: string;
  classroomId:   number;
  periodId:      number;
  presences:     number;
  courseId:      number;
  teacherName:   string;
  teacherId:     number;
}

export interface ICalendar {
  months: IMonth[];
}

export interface IMonth {
  events: IEvent[];
}

export interface IEvent {
  date:   string;
  name:   string;
  reason: string;
}

export interface IGrades {
  discipline:  IDiscipline;
  evaluations: IEvaluation[];
}

export interface IDiscipline {
  name:        string;
  code:        string;
  classroomId: number;
  frequency:   number;
  grade:       number;
  quitDate:    string;
  periodId:    number;
  courseId:    number;
  state:       string;
  teacherId:   number;
}

export interface IEvaluation {
  applyDates:  IApplyDates;
  description: string;
  grades:      IGrade[];
  code:        string;
  title:       string;
  weight:      number;
}

export interface IApplyDates {
  applied:   string;
  predicted: string;
  published: string;
}

export interface IGrade {
  date:  string;
  score: number;
}