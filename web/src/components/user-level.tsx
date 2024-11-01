import { useGetUserLevelAndExperience } from '../http/generated/api'
import { Progress, ProgressIndicator } from './ui/progress-bar'

export function UserLevel() {
  const { data } = useGetUserLevelAndExperience()

  if (!data) {
    return null
  }

  const percentage = Math.round(
    (data.experience * 100) / data.experienceToNextLevel
  )

  return (
    <div className="max-w-[220px] w-full flex flex-col gap-1">
      <div className="w-full px-2 flex items-center justify-between">
        <span className="text-xxs text-zinc-200">Lvl {data.level}</span>
        <span className="text-xxs text-zinc-400">
          {data.experience}xp de {data.experienceToNextLevel}xp
        </span>
        <span className="text-xxs text-zinc-200">{percentage}%</span>
      </div>
      <Progress
        className="bg-zinc-800"
        value={data.experience}
        max={data.experienceToNextLevel}
      >
        <ProgressIndicator style={{ width: `${percentage}%` }} />
      </Progress>
    </div>
  )
}
