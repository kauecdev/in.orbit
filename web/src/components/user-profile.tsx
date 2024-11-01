import { useGetProfile } from '../http/generated/api'

export function UserProfile() {
  const { data: profileData } = useGetProfile()

  if (!profileData) {
    return null
  }

  return (
    <div className="flex items-center gap-3">
      <img
        className="size-8 rounded-md"
        src={profileData.profile.avatarUrl}
        alt=""
      />
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold">
          {profileData.profile.name}
        </span>
        <span className="text-xxs text-zinc-400">
          {profileData.profile.email ?? 'sem e-mail'}
        </span>
      </div>
    </div>
  )
}
