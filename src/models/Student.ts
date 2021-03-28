import { Entity, PrimaryColumn } from "typeorm";

@Entity('students')
export default class Student {
  @PrimaryColumn()
  ra!: string;
}