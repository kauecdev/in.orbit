import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { Home } from './home'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}
