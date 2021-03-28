// id nome materia createdat updatedat fk_estudante
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import Student from './Student'

@Entity('notebooks')
export default class Notebook {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  subject: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @ManyToOne(() => Student, student => student.notebooks)
  @JoinColumn({ name: 'student_ra' })
  student: Student;
}