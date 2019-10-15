import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

// import { useRouter } from 'next/router'
// import Nav from '../components/nav'

// import '../styles/index.scss'

const About: NextPage<{}> = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>About: {name}</h1>
      <Link href="/">
        <img src="/favicon.ico" alt="" />
      </Link>

      <MyButton>test</MyButton>
    </div>
  )
}

About.getInitialProps = async ({ req }) => {
  // console.log(req)
  return {}
}

export default About

//

const MyButton = styled.button`
  background-color: purple;
  font-size: 2em;
  color: white;
  padding: 0.1em 1em;
  border-radius: 0.2em;
  border: none;
`
