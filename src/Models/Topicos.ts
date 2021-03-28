import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Student from './Student'
import TopicoFiles from './TopicoFiles'
import Comment from './Comments'

@Entity('topicos')
export default class Topico {
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

  @ManyToOne(() => Student, student => student.topicos)
  @JoinColumn({ name: 'student_ra' })
  student: Student;

  @OneToMany(() => TopicoFiles, topicoFiles => topicoFiles.topico, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'topico_id' })
  topicosFiles: TopicoFiles[]

  @OneToMany(() => Comment, comments => comments.topico, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'topico_id' })
  comments: Comment[]

}