import React from 'react'
import renderHydrogen from '@shopify/hydrogen/entry-server'
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen'
import { Suspense } from 'react'

function Loading() {
  return <h1>Loading...</h1>
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ShopifyProvider>
        <Router>
          <FileRoutes />
        </Router>
      </ShopifyProvider>
    </Suspense>
  )
}

export default renderHydrogen(App)
