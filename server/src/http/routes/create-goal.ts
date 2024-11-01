import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { createGoal } from '../../use-cases/create-goal'
import { authenticateUserHook } from '../hooks/authenticate-user'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      onRequest: [authenticateUserHook],
      schema: {
        tags: ['goals'],
        description: 'Create a goal',
        operationId: 'createGoal',
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
        response: {
          201: z.null(),
        },
      },
    },
    async (request, reply) => {
      const userId = request.user.sub

      const { title, desiredWeeklyFrequency } = request.body

      await createGoal({
        userId,
        title,
        desiredWeeklyFrequency,
      })

      return reply.status(201).send()
    }
  )
}
