import React, { useEffect } from 'react'
import Router from 'next/router'

function ReadMore() {
  useEffect(() => {
    Router.beforePopState(({ url, as, options }) => {
      console.log('xxxx')
      // I only want to allow these two routes!
      if (as === '/') {
        // Have SSR render bad routes as a 404.
        window.location.href = '/post'
        return false
      }

      return true
    })
  }, [])

  return (
    <div style={{ backgroundColor: 'greenyellow' }}>
      Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>
  )
}

export default ReadMore
