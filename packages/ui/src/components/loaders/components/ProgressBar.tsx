export function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className='h-1 w-full rounded-lg bg-gray-200'>
      <div
        className='bg-primary-500 delay-50 flex h-full rounded-lg transition-[width]'
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
