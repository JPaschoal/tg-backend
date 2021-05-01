import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Comment from '../../Models/Comments'

export default {
  async list(response: Response, request: Request) {

    const { topic } = request.params

    const commentsRepository = getRepository(Comment)

    const comments = await commentsRepository.find({where: { topic }})

    response.json(comments)

  },

  async create(response: Response, request: Request) {

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