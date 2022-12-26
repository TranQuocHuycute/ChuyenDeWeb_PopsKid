import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/Layout'
import { publicRoutes } from './routes'
import React, { Fragment, useEffect } from 'react'
import './index.css'
import jwtDecode from 'jwt-decode'
// import { ParentsComments } from './components/Layout/ParentsComments'

// import { CourseSelection } from './components/Layout/CourseSelection'

function App() {
  const jwt =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcm5vbGQiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYXV0aC9sb2dpbiIsImV4cCI6MTY3MTY5NDQwN30.FjnKZ0GUiRVSNA2FlU5i2QuzzeiXSFbSmAN6GHSZPDU'
  useEffect(() => {
    const json = jwtDecode(jwt)
    const tokenExpired = Date.now() / 1000 > json.exp
    console.log({ json, tokenExpired })
  }, [])

  return (
    // <CourseSelection />
    // <ParentsComments />
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
