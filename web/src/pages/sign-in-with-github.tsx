import logo from '../assets/logo-in-orbit.svg'
import { GithubIcon } from '../components/github-icon'
import { Button } from '../components/ui/button'

export function SignInWithGithub() {
  const githubUrl = new URL('https://github.com/login/oauth/authorize')

  githubUrl.searchParams.set('client_id', 'Ov23liIsSp4KYDcXj45s')

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-8">
      <img src={logo} alt="" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center ">
        Conclua suas metas semanais, ganhe experiência e suba de nível!
      </p>

      <Button
        className="bg-white text-black hover:bg-white hover:opacity-60"
        asChild
      >
        <a href={githubUrl.toString()}>
          <GithubIcon />
          Entrar com Github
        </a>
      </Button>
    </main>
  )
}
