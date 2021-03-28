import { 
  Column, 
  Entity, 
  JoinColumn, 
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

  @ManyToOne(() => Notebook, notebook => notebook.notes)
  @JoinColumn({ name: 'notebook_id' })
  notebook: Notebook

  @OneToMany(() => NoteFile, noteFile => noteFile.note, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'note_id' })
  noteFiles: NoteFile[]
}