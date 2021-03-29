import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import Notebook from './Notebook'
import Comment from './Comments'
import Topic from "./Topics";

@Entity('students')
export default class Student {
  @PrimaryColumn()
  ra: string;

  @Column()
  profile_image: string;

  @OneToMany(type => Notebook, student => Student)
  notebooks: Notebook[]

  @OneToMany(type => Topic, student => Student)
  topics: Topic[]

  @OneToMany(type => Comment, student => Student)
  comments: Comment[]

}