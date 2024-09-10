'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ServiceDetailPage = () => {
  const [service, setService] = useState(null)

  if (!service) {
    return <div>Loading...</div>
  }

  return <div></div>
}

export default ServiceDetailPage
