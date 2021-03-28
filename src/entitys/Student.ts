import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('students')
export default class Student {
  @PrimaryColumn()
  ra: string;

  @Column()
  profile_image: string;
}