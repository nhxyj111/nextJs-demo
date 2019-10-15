import React from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const Blog: NextPage<{}> = () => {
  const router = useRouter()
  const { slug } = router.query
  return <h4>My Blog: {slug}</h4>
}

export default Blog
