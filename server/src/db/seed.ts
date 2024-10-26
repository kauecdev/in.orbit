import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletions, goals, users } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const [user] = await db
    .insert(users)
    .values({
      name: 'John Doe',
      externalAccountId: 1234,
      avatarUrl: 'https://github.com/kauecdev.png',
    })
    .returning()

  const result = await db
    .insert(goals)
    .values([
      {
        userId: user.id,
        title: 'Acordar cedo',
        desiredWeeklyFrequency: 5,
      },
      {
        userId: user.id,
        title: 'Me exercitar',
        desiredWeeklyFrequency: 4,
      },
      {
        userId: user.id,
        title: 'Estudar',
        desiredWeeklyFrequency: 5,
      },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    {
      goalId: result[0].id,
      createdAt: startOfWeek.toDate(),
    },
    {
      goalId: result[1].id,
      createdAt: startOfWeek.add(1, 'day').toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})
