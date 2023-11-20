import React from 'react'
import { useRouter } from 'next/router'

const ProdName = () => {
  const router = useRouter()
  return (
    <div>Name: {router.query.name}</div>
  )
}

export default ProdName