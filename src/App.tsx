import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

import routes from '@/router'

const App = memo(() => {
  return (
    <BrowserRouter>
      <AppHeader/>
      {
        renderRoutes(routes)
      }
      <AppFooter/>
    </BrowserRouter>
  )
})

export default App
