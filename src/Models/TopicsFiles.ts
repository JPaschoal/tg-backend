import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Topic from './Topics'

@Entity('files_topic')
export default class FileTopic {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  path: string
  
  @Column()
  sended_at: Date

  @ManyToOne(type => Topic, topic_files => FileTopic, { eager: true })
  topic: Topic
}