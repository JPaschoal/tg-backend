import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Student from './Student'
import Topico from './Topicos'

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

  @ManyToOne(() => Student, student => student.comments)
  @JoinColumn({ name: 'student_ra' })
  student: Student;


  @ManyToOne(() => Topico, topico => topico.comments)
  @JoinColumn({ name: 'topico_id' })
  topico: Topico;
}