import { api } from '../lib/axios'

export async function createCompletion(goalId: string) {
  return await api.post('/completions', {
    goalId,
  })
}
