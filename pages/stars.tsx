import React, { useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
// import { useRouter } from 'next/router'
// import Nav from '../components/nav'

// import '../styles/index.scss'

const Stars: NextPage<{ stars: number }> = ({ stars }) => {
  // console.log('XXXXX2')

  useEffect(() => {
    // console.log('YYYYY')
  }, [])

  return (
    <div>
      <Head>
        <title>Stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Stars</h1>
      <p> Next stars: {stars}</p>
    </div>
  )
}

Stars.getInitialProps = async ({ pathname, query, asPath, req }) => {
  // console.log('start ----')
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  // console.log(pathname)
  // console.log(query)
  // console.log(asPath)
  // console.log(req)
  // console.log('end ----')
  return { stars: json.stargazers_count }
}

export default Stars
