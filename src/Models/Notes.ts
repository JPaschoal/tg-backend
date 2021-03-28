import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import Notebook from './Notebook'

@Entity('notes')
export default class Note {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  text: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @ManyToOne(() => Notebook, notebook => notebook.notes)
  @JoinColumn({ name: 'notebook_id' })
  notebook: Notebook
}