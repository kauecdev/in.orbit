import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../use-cases/get-week-pending-goals'
import z from 'zod'
import { authenticateUserHook } from '../hooks/authenticate-user'

export const getWeekPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/pending-goals',
    {
      onRequest: [authenticateUserHook],
      schema: {
        tags: ['goals'],
        description: 'Get week pending goals',
        operationId: 'getWeekPendingGoals',
        response: {
          200: z.object({
            pendingGoals: z.array(
              z.object({
                goalId: z.string(),
                title: z.string(),
                desiredWeeklyFrequency: z.number(),
                completionCount: z.number(),
              })
            ),
          }),
        },
      },
    },
    async (request, reply) => {
      const userId = request.user.sub

      const { pendingGoals } = await getWeekPendingGoals({
        userId,
      })

      await reply.status(200).send({ pendingGoals })
    }
  )
}
