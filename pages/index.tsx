import React, { useEffect } from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'
import Link from 'next/link'

import '../styles/index.scss'
import Router from 'next/router'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import ReadMore from '../components/ReadMore'
import ActiveLink from '../components/ActiveLink'

// const handleRouteChange = url => {
//   console.log('App is changing to: ', url)
// }

// Router.events.on('routeChangeStart', handleRouteChange)

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/DynamicDemo').then(m => m.Hello),
  { loading: () => <p>...</p>, ssr: false }
)

const Home: NextPage = () => {
  useEffect(() => {
    Router.prefetch('/stars')
    const handleRouteChange = url => {
      console.log('App is changing to: ', url)
    }

    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>test sass</header>
      <img src="/favicon.ico" alt="" />
      <br />
      <a href="/about">a link</a>
      <br />
      <Link href="/about">
        <a>Link</a>
      </Link>
      <br />
      <a href="/post/xxx">xxx Post a link</a>
      <br />
      <Link href="/post/[pid]" as="/post/abc">
        <a>First Post Link</a>
      </Link>
      <h3>Stars</h3>
      <a href="/stars">stars a link</a>
      <br />
      <Link href="/stars">
        <a>stars Link</a>
      </Link>
      <br />
      <i>
        Note: if passing a functional component as a child of &lt;Link&gt; you
        will need to wrap it in React.forwardRef
      </i>
      <Link href="/about">
        <MyButton />
      </Link>
      <br />
      <Link href="/blog?slug=something" as="/blog/something">
        <a>Blog</a>
      </Link>
      <div>
        Click{' '}
        <Link
          replace
          href={{ pathname: '/about', query: { name: 'Zeit' } }}
          prefetch={false}
        >
          <a>here</a>
        </Link>{' '}
        to read more
      </div>
      <h2>You can also do client-side page transitions using next/router: </h2>
      Click{' '}
      <span
        onClick={() => Router.push('/about')}
        style={{ color: 'red', cursor: 'pointer' }}
      >
        here
      </span>{' '}
      to read more
      {/* <ReadMore /> */}
      <br />
      <ActiveLink href="/">CcX</ActiveLink>
      <br />
      <a onClick={() => setTimeout(() => Router.push('/stars'), 3000)}>
        A route transition will happen after 3000ms
      </a>
      <hr />
      <DynamicComponentWithCustomLoading />
    </div>
  )
}

export default Home

const MyButton = React.forwardRef<HTMLAnchorElement, any>(
  ({ onClick, href }, ref) => (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      style={{ color: 'deeppink', fontWeight: 'bold' }}
    >
      Click Me
    </a>
  )
)
