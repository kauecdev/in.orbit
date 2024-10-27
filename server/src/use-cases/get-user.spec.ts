import { describe, expect, it } from 'vitest'
import { db } from '../db'
import { users } from '../db/schema'
import { getUser } from './get-user'
import { makeUser } from '../../test/factories/make-user'

describe('get user', () => {
  it('should be able to get a user', async () => {
    const user = await makeUser()

    const result = await getUser({ userId: user.id })

    expect(result).toEqual({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
    })
  })
})
