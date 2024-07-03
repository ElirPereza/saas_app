'use client'
 
import { Button } from '@/Components/ui/button'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image src="/placeholder.svg" width="200" height="200" alt="Broken Pottery Wheel" className="mx-auto" />
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We&apos;re sorry, but an unexpected error has occurred on our server.
        </p>
        <p className="mt-2 text-muted-foreground">Please try refreshing the page or come back later.</p>
        <div className="mt-6">
          <Button
            onClick={() => reset()}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  )
}