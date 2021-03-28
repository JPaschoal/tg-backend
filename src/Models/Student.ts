import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

import Notebook from './Notebook'
import Topico from './Topicos'
import Comment from './Comments'

@Entity('students')
export default class Student {
  @PrimaryColumn()
  ra: string;

  @Column()
  profile_image: string;

  @OneToMany(() => Notebook, notebook => notebook.student, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'student_ra' })
  notebooks: Notebook[]

  @OneToMany(() => Topico, topico => topico.student, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'student_ra' })
  topicos: Topico[]


  @OneToMany(() => Comment, comment => comment.student, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'student_ra' })
  comments: Comment[]

}