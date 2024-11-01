import { Plus } from 'lucide-react'
import { useQueryClient } from '@tanstack/react-query'
import { OutlineButton } from './ui/outline-button'
import {
  getGetWeekPendingGoalsQueryKey,
  getGetWeekSummaryQueryKey,
  useCreateCompletion,
  useGetWeekPendingGoals,
} from '../http/generated/api'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data: pendingGoalsData, isLoading } = useGetWeekPendingGoals()

  const { mutateAsync: createCompletion } = useCreateCompletion()

  if (isLoading || !pendingGoalsData) {
    return
  }

  async function handleCompleteGoal(goalId: string) {
    await createCompletion({ data: { goalId } })

    queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })
    queryClient.invalidateQueries({
      queryKey: getGetWeekPendingGoalsQueryKey(),
    })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {pendingGoalsData.pendingGoals.map(goal => {
        return (
          <OutlineButton
            key={goal.goalId}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.goalId)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
