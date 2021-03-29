import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Notebook from '../../Models/Notebook'

export default {
  async show(request: Request, response: Response) {
    
    const { id } = request.body

    const notebookRepository = getRepository(Notebook)

    const notebook = await notebookRepository.find({where: { id }})

    response.json(notebook)

  },
  async list(request: Request, response: Response) {
    
    const notebookRepository = getRepository(Notebook)

    const notebooks = await notebookRepository.find()

    response.json(notebooks)

  },

  async create(request: Request, response: Response) {
    const {
      name,
      subject,
      student
    } = request.body

    const notebookRepository = getRepository(Notebook)

    const created_at = new Date()

    const data = {
      name,
      subject,
      student,
      created_at,
      updated_at: created_at
    }

    const notebook = notebookRepository.create(data)

    await notebookRepository.save(notebook)

    return response.status(201).json(notebook)
  },

  async delete(request: Request, response: Response) {

    const { id } = request.body

    const notebookRepository = getRepository(Notebook)

    await notebookRepository.delete({ id }).catch(err => {
      return response.json({ "status": "failed" })
    })

    return response.status(202).json({ "status": "success"})
  }
}