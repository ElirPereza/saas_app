'use client'
import React from 'react'
import Component from './landpage/page'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  router.push('/landpage')
}

export default Page
