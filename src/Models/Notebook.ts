import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import Student from './Student'
import Note from './Notes'

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

  @ManyToOne(type => Student, notebooks => Notebook, { eager: true })
  student: Student

  @OneToMany(type => Note, notebook => Notebook)
  notes: Note[];

}