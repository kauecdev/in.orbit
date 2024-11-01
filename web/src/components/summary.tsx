import { CheckCircle2, Plus } from 'lucide-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { PendingGoals } from './pending-goals'
import {
  useGetProfile,
  type GetWeekSummary200Summary,
} from '../http/generated/api'
import { UserProfile } from './user-profile'
import { UserLevel } from './user-level'

dayjs.locale('pt-br')

interface SummaryProps {
  summary: GetWeekSummary200Summary
}

export function Summary({ summary }: SummaryProps) {
  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = summary.total
    ? Math.round((summary.completed * 100) / summary.total)
    : 0

  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="bg-zinc-900 rounded-xl px-4 py-3 shadow-shape flex items-center justify-between">
        <UserProfile />
        <UserLevel />
      </div>

      <div className=" px-5 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <InOrbitIcon />
            <span className="text-lg font-semibold capitalize">
              {firstDayOfWeek} - {lastDayOfWeek}
            </span>
          </div>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="size-4" />
              Cadastrar meta
            </Button>
          </DialogTrigger>
        </div>
        <div className="flex flex-col gap-3">
          <Progress value={8} max={15}>
            <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
          </Progress>
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>
              Você completou{' '}
              <span className="text-zinc-100">{summary.completed}</span> de{' '}
              <span className="text-zinc-100">{summary.total ?? 0}</span> metas
              nessa semana.
            </span>
            <span>{completedPercentage}%</span>
          </div>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {summary.goalsPerDay &&
            Object.entries(summary.goalsPerDay).map(([date, goals]) => {
              const weekDay = dayjs(date).format('dddd')
              const formattedDate = dayjs(date).format('D[ de ]MMMM')

              return (
                <div key={date} className="flex flex-col gap-4">
                  <h3 className="font-medium">
                    <span className="capitalize">{weekDay}</span>{' '}
                    <span className="text-zinc-400 text-sm">
                      ({formattedDate})
                    </span>
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {goals.map(goal => {
                      const time = dayjs(goal.completedAt).format('HH:mm')
                      return (
                        <li key={goal.id} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-pink-500" />
                          <span className="text-sm text-zinc-400">
                            Você completou "
                            <span className="text-zinc-100">{goal.title}</span>"
                            às <span className="text-zinc-100">{time}h</span>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}
