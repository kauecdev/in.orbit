import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/let-start-illustration.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <img src={logo} alt="" />
      <img src={letsStart} alt="" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center ">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
