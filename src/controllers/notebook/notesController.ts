import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Note from '../../Models/Notes'

export default {
  async show(request: Request, response: Response) {
    
    const { id } = request.body

    const noteRepository = getRepository(Note)

    const note = await noteRepository.find({where: { id }})

    response.json(note)

  },
  async list(request: Request, response: Response) {

    const { notebook } = request.body
    
    const noteRepository = getRepository(Note)

    const notes = await noteRepository.find({where: { notebook }})

    response.json(notes)

  },

  async create(request: Request, response: Response) {
    const {
      name,
      text,
      notebook
    } = request.body

    const noteRepository = getRepository(Note)

    const created_at = new Date()

    const data = {
      name,
      text,
      notebook,
      created_at,
      updated_at: created_at
    }

    const note = noteRepository.create(data)

    await noteRepository.save(note)

    return response.status(201).json(note)
  },

  async update(request: Request, response: Response) {

    const {
      id,
      name,
      text
    } = request.body;

    const noteRepository = getRepository(Note)

    const updated = new Date()

    const data = {
      id,
      name,
      text,
      updated_at: updated
    }

    await noteRepository.save(data)

    return response.status(200).json({ "status": "success"})
  },

  async delete(request: Request, response: Response) {

    const { id } = request.body

    const noteRepository = getRepository(Note)

    await noteRepository.delete({ id }).catch(err => {
      return response.json({ "status": "failed" })
    })

    return response.status(200).json({ "status": "success"})
  }
}