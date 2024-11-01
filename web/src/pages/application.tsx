import { Dialog } from '@radix-ui/react-dialog'
import { Loader2 } from 'lucide-react'
import { CreateGoal } from '../components/create-goal'
import { Summary } from '../components/summary'
import { useGetWeekSummary } from '../http/generated/api'
import { useSearchParams } from 'react-router-dom'
import dayjs from 'dayjs'

export function Application() {
  const [searchParams] = useSearchParams()

  const weekStartsAtParam = searchParams.get('week_starts_at')

  const weekStartsAt = weekStartsAtParam
    ? new Date(weekStartsAtParam)
    : new Date()

  const { data: summaryData, isLoading } = useGetWeekSummary({
    weekStartsAt: dayjs(weekStartsAt).startOf('week').toISOString(),
  })

  if (isLoading || !summaryData) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  return (
    <Dialog>
      <Summary summary={summaryData.summary} />
      <CreateGoal />
    </Dialog>
  )
}
