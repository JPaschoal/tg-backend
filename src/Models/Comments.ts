import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Student from './Student'
import Topic from "./Topics";

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  text: string

  @Column()
  sender_at: Date

  @ManyToOne(type => Student, comments => Comment , { eager: true })
  student: Student

  @ManyToOne(type => Topic, comments => Comment, { eager: true })
  topic: Topic

}