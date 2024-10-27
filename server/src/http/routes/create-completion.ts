import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { createCompletion } from '../../use-cases/create-completion'
import { authenticateUserHook } from '../hooks/authenticate-user'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      onRequest: [authenticateUserHook],
      schema: {
        tags: ['goals'],
        description: 'Complete a goal',
        body: z.object({
          goalId: z.string(),
        }),
        response: {
          201: z.null(),
        },
      },
    },
    async (request, reply) => {
      const userId = request.user.sub

      const { goalId } = request.body

      await createCompletion({
        userId,
        goalId,
      })

      return reply.status(201).send()
    }
  )
}
