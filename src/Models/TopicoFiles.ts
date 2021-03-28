import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Topico from './Topicos'

@Entity('file_topicos')
export default class FileTopicos {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  path: string
  
  @Column()
  sended_at: Date

  @ManyToOne(() => Topico, topico => topico.topicosFiles)
  @JoinColumn({ name: 'topico_id' })
  topico: Topico;
}