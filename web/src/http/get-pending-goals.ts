import { api } from '../lib/axios'

export type PendingGoalsResponse = {
  goalId: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const result = await api.get('/pending-goals')

  return result.data.pendingGoals
}
