import { 
  Column, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from "typeorm";

import Note from './Notes';

@Entity('note_files')
export default class NoteFile {
  @PrimaryGeneratedColumn('increment')
  id: number
  
  @Column()
  name: string
  
  @Column()
  path: string

  @Column()
  created_at: Date

  @ManyToOne(() => Note, note => note.noteFiles)
  @JoinColumn({ name: 'note_id' })
  note: Note
}