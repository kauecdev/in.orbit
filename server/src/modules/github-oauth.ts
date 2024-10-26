import { env } from '../env'

interface AccessTokenResponse {
  access_token: string
}

interface GetUserResponse {
  id: number
  name: string | null
  email: string | null
  avatar_url: string
}

export async function getAccessTokenFromCode(code: string) {
  const requestAccessTokenUrl = new URL(
    'https://github.com/login/oauth/access_token'
  )

  requestAccessTokenUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
  requestAccessTokenUrl.searchParams.set(
    'client_secret',
    env.GITHUB_CLIENT_SECRET
  )
  requestAccessTokenUrl.searchParams.set('code', code)

  const response = await fetch(requestAccessTokenUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  })

  const { access_token }: AccessTokenResponse = await response.json()

  return access_token
}

export async function getUserFromAccessToken(accessToken: string) {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const data: GetUserResponse = await response.json()

  return data
}
