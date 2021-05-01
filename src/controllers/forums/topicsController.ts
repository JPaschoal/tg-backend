import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Topics from '../../Models/Topics'

export default {
  async show(request: Request, response: Response) {
    
    const { id } = request.params

    const topicsRepository = getRepository(Topics)

    const topic = await topicsRepository.find({where: { id }})

    response.json(topic)

  },

  async list(request: Request, response: Response) {

    const { course, subject } = request.params

    const topicsRepository = getRepository(Topics)
    
    const topics = await topicsRepository.find({where: { course, subject }})

    response.json(topics)

  },

  async create(request: Request, response: Response) {

    const {
      name,
      text,
      course,
      subject,
      student
    } = request.body

    const data = {
      name,
      text,
      course,
      subject,
      student
    }

    const topicsRepository = getRepository(Topics)

    const topic = topicsRepository.create(data)

    await topicsRepository.save(topic)

    return response.status(201).json(topic)

  },

  async delete(request: Request, response: Response) {

    const { id } = request.body

    const topicsRepository = getRepository(Topics)

    await topicsRepository.delete({ id }).catch(err => {
      return response.json({ "status": "failed" })
    })

    return response.status(200).json({ "status": "success"})

  }
}