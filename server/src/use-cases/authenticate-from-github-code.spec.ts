import { beforeEach, describe, expect, it, vi } from 'vitest'
import { authenticateFromGithubCode } from './authenticate-from-github-code'
import { db } from '../db'
import { users } from '../db/schema'
import { and, eq, ne } from 'drizzle-orm'
import * as github from '../modules/github-oauth'
import { makeUser } from '../../test/factories/make-user'
import { faker } from '@faker-js/faker'

describe('authenticate from github code', () => {
  beforeEach(() => {
    vi.mock('../modules/github-oauth')

    vi.clearAllMocks()
  })

  it('should be able to authenticate from github code', async () => {
    vi.spyOn(github, 'getUserFromAccessToken').mockResolvedValueOnce({
      id: 123456,
      name: 'John Doe',
      email: null,
      avatar_url: 'https://github.com/johndev.png',
    })

    const sut = await authenticateFromGithubCode({
      code: 'sample-github-code',
    })

    expect(sut.token).toEqual(expect.any(String))

    const [userOnDatase] = await db
      .select()
      .from(users)
      .where(eq(users.externalAccountId, 123456))

    expect(userOnDatase.name).toEqual('John Doe')
  })

  it('should be able to authenticate when existing github user', async () => {
    const existing = await makeUser({
      name: 'Jane Doe',
    })

    await db
      .delete(users)
      .where(
        and(
          eq(users.externalAccountId, existing.externalAccountId),
          ne(users.id, existing.id)
        )
      )

    vi.spyOn(github, 'getUserFromAccessToken').mockResolvedValueOnce({
      id: existing.externalAccountId,
      name: 'John Doe',
      email: null,
      avatar_url: 'https://github.com/johndev.png',
    })

    const sut = await authenticateFromGithubCode({
      code: 'sample-github-code',
    })

    expect(sut.token).toEqual(expect.any(String))

    const [userOnDatase] = await db
      .select()
      .from(users)
      .where(eq(users.externalAccountId, existing.externalAccountId))

    expect(userOnDatase.name).toEqual('Jane Doe')
  })
})
