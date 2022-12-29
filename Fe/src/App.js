import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/Layout'
import { publicRoutes } from './routes'
import React, { Fragment, useEffect } from 'react'
import './index.css'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'

function App() {
 
  useEffect(() => {
    if (Cookies.get('authToken') !== undefined) {
      const json = jwtDecode(Cookies.get('authToken'))
      const tokenExpired = Date.now() / 1000 > json.exp
      console.log({ json, tokenExpired })
    }
  }, [])

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.components
          let Layout = DefaultLayout
          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  {/* children truyen vao Default Layout */}
                  <Page />
                </Layout>
              }
            ></Route>
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
