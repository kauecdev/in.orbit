import { Dialog } from '@radix-ui/react-dialog'
import { Loader2 } from 'lucide-react'
import { CreateGoal } from '../components/create-goal'
import { EmptyGoals } from '../components/empty-goals'
import { Summary } from '../components/summary'
import { useGetWeekSummary } from '../http/generated/api'

export function Application() {
  const { data: summaryData, isLoading } = useGetWeekSummary()

  if (isLoading || !summaryData) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  return (
    <Dialog>
      {summaryData.summary.total && summaryData.summary.total > 0 ? (
        <Summary summary={summaryData.summary} />
      ) : (
        <EmptyGoals />
      )}
      <CreateGoal />
    </Dialog>
  )
}
