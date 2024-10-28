import { describe, expect, it } from 'vitest'
import { makeUser } from '../../test/factories/make-user'
import { makeGoal } from '../../test/factories/make-goal'
import { createCompletion } from './create-completion'
import { makeGoalCompletion } from '../../test/factories/make-goal-completion'
import { db } from '../db'
import { users } from '../db/schema'
import { eq } from 'drizzle-orm'

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

  it('should not be increase user experience by 5 when completing a goal', async () => {
    const user = await makeUser({ experience: 0 })

    const goal = await makeGoal({ userId: user.id, desiredWeeklyFrequency: 5 })

    await createCompletion({
      userId: user.id,
      goalId: goal.id,
    })

    const [userOnDatase] = await db
      .select()
      .from(users)
      .where(eq(users.id, user.id))

    expect(userOnDatase.experience).toEqual(5)
  })

  it('should not be increase user experience by 7 when fully completing a goal', async () => {
    const user = await makeUser({ experience: 0 })

    const goal = await makeGoal({ userId: user.id, desiredWeeklyFrequency: 1 })

    await createCompletion({
      userId: user.id,
      goalId: goal.id,
    })

    const [userOnDatase] = await db
      .select()
      .from(users)
      .where(eq(users.id, user.id))

    expect(userOnDatase.experience).toEqual(7)
  })
})
