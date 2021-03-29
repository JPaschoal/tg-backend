import { 
  Column, 
  Entity, 
  ManyToOne, 
  OneToMany, 
  PrimaryGeneratedColumn 
} from "typeorm";

import Notebook from './Notebook'
import NoteFile from './NoteFiles'

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

  @ManyToOne(type => Notebook, notes => Note, { eager: true })
  notebook: Notebook;

  @OneToMany(type => NoteFile, note => Note)
  noteFiles: NoteFile[]
}