'use client'
import { useState, useEffect } from 'react'
import { ProgressBar } from './components/ProgressBar'

// ========= || LOADER || ========= //
export function LinearLoader() {
  const [loadingProgress, setLoadingProgress] = useState(5)

  useEffect(() => {
    let total = 10 // Initial value
    const maxTotal = 100

    // Set up the interval for incrementing progress
    const interval = setInterval(() => {
      total += (maxTotal - total) / 100

      setLoadingProgress(Math.round(total))

      if (total >= maxTotal) {
        clearInterval(interval)
      }
    }, 2) // Adjust the interval delay here

    // // Event listener for when the page finishes loading
    const pageReady = () => {
      if (document.readyState === 'complete') {
        clearInterval(interval)
        setLoadingProgress(() => {
          return 100
        })
      }
    }
    document.addEventListener('readystatechange', pageReady)
    return () => {
      clearInterval(interval)
      document.removeEventListener('readystatechange', pageReady)
    }
  }, [])

  return (
    <>
      <div className='fixed left-0 top-0 z-50 w-full'>
        <ProgressBar percentage={loadingProgress} />
      </div>
    </>
  )
}
