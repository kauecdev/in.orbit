import { describe, expect, it } from 'vitest'
import { makeUser } from '../../test/factories/make-user'
import { makeGoal } from '../../test/factories/make-goal'
import { createCompletion } from './create-completion'
import { makeGoalCompletion } from '../../test/factories/make-goal-completion'

describe('create completion', () => {
  it('should be able to create a new completion', async () => {
    const user = await makeUser()
    const goal = await makeGoal({ userId: user.id })

    const result = await createCompletion({
      userId: user.id,
      goalId: goal.id,
    })

    expect(result).toEqual({
      goalCompletion: expect.objectContaining({
        id: expect.any(String),
        goalId: goal.id,
      }),
    })
  })

  it('should not be able to complete a goal more times than it expects', async () => {
    const user = await makeUser()
    const goal = await makeGoal({ userId: user.id, desiredWeeklyFrequency: 1 })

    await makeGoalCompletion({ goalId: goal.id })

    await expect(
      createCompletion({
        userId: user.id,
        goalId: goal.id,
      })
    ).rejects.toThrow()
  })
})
