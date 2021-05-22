import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Comment from '../../Models/Comments'

export default {
  async list(request: Request, response: Response) {

    const { topic } = request.params

    console.log(topic)

    const commentsRepository = getRepository(Comment)

    const comments = await commentsRepository.find({where: { topic }})

    response.json(comments)

  },

  async create(request: Request, response: Response) {

    const {
      name,
      text,
      student,
      topic
    } = request.body

    const sender_at = new Date()

    const data = {
      name,
      text,
      sender_at,
      student,
      topic
    }

    const commentsRepository = getRepository(Comment)

    const comment = commentsRepository.create(data)

    await commentsRepository.save(comment)

    return response.status(201).json(comment)

  }
}