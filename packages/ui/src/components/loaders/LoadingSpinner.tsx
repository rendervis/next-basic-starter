// package imports
import { cn } from '../../lib/utils'
import Spinner from './components/SpinnerIcon'

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
      <div className={cn('flex h-auto w-auto self-center', className)}>
        <Spinner />
      </div>
    </div>
  )
}
