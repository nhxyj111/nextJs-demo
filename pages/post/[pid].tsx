import React from 'react'
import { useRouter, NextRouter } from 'next/router'
import { NextPage } from 'next'

const Post: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <h4>Post: {pid}</h4>
      <p>
        However, if a query and route param name are the same, route parameters
        will override the matching query params. For example, /post/abc?pid=bcd
        will have the query object: &#123; pid: 'abc' &#125;.
      </p>

      <p>
        Note: Predefined routes take precedence over dynamic routes. For
        example, if you have pages/post/[pid].js and pages/post/create.js, the
        route /post/create will be matched by pages/post/create.js instead of
        the dynamic route ([pid]). Note: Pages that are statically optimized by
        automatic static optimization will be hydrated without their route
        parameters provided (query will be empty, i.e. &#123;&#125;. After
        hydration, Next.js will trigger an update to your application to provide
        the route parameters in the query object. If your application cannot
        tolerate this behavior, you can opt-out of static optimization by
        capturing the query parameter in getInitialProps. Note: If deploying to
        ZEIT Now dynamic routes will work out-of-the-box. You do not need to
        configure custom routes in a now.json file. If you are new to ZEIT Now,
        you can learn how to deploy a Next.js app to it in the Deploying a
        Next.js App Learn section.
      </p>
    </>
  )
}

export default Post
