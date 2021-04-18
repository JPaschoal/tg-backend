import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import NoteFile from '../../Models/NoteFiles'

export default {
  async show(request: Request, response: Response) {
    
    const { id } = request.params

    const noteFileRepository = getRepository(NoteFile)

    const noteFile = await noteFileRepository.find({where: { id }})

    response.json(noteFile)

  },
  async list(request: Request, response: Response) {

    const { note } = request.params
    
    const noteFileRepository = getRepository(NoteFile)

    const noteFiles = await noteFileRepository.find({where: { note }})

    response.json(noteFiles)

  },

  async create(request: Request, response: Response) {
    const {
      note
    } = request.body

    const requestFiles = request.files as Express.Multer.File[]

    console.log(requestFiles)

    const noteFileRepository = getRepository(NoteFile)

    const files = requestFiles.map(file => {
      return { path: file.filename}
    })

    files.forEach(async (file) => {
      const url = `http://localhost:3333/uploads/${file.path}`

      const created_at = new Date()

      const data = {
        name: file.path,
        path: url,
        created_at,
        note
      }

      const noteFile = noteFileRepository.create(data)

      await noteFileRepository.save(noteFile)

    })
    
    return response.status(201).json({status: "uploaded"})
  },

  async delete(request: Request, response: Response) {

    const { id } = request.body

    const noteFileRepository = getRepository(NoteFile)

    await noteFileRepository.delete({ id }).catch(err => {
      return response.json({ "status": "failed" })
    })

    return response.status(200).json({ "status": "success"})
  }
}