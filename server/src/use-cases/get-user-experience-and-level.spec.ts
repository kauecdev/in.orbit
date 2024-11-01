import { describe, expect, it } from 'vitest'
import { makeUser } from '../../test/factories/make-user'
import { getUserExperienceAndLevel } from './get-user-experience-and-level'
import {
  calculateLevelFromExperience,
  calculateExperienceForNextLevel,
} from '../modules/gamification'

describe('get user experience and level', () => {
  it('should be able to get a user experience and level', async () => {
    const user = await makeUser({
      experience: 200,
    })

    const sut = await getUserExperienceAndLevel({ userId: user.id })

    const level = calculateLevelFromExperience(200)

    expect(sut).toEqual({
      experience: 200,
      level,
      experienceToNextLevel: calculateExperienceForNextLevel(level),
    })
  })
})
