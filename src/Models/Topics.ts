import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Student from './Student'
import FileTopic from './TopicsFiles'
import Comment from './Comments'

@Entity('topics')
export default class Topic {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  text: string

  @Column()
  course: string

  @Column()
  subject: string

  @ManyToOne(type => Student, topics => Topic, { eager: true })
  student: Student

  @OneToMany(type => FileTopic, topic => Topic)
  topic_files: FileTopic[]

  @OneToMany(type => Comment, topic => Topic)
  comments: Comment[]
}