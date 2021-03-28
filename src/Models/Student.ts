import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

import Notebook from './Notebook'

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
}