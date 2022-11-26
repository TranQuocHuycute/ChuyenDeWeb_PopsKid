import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import { publicRoutes } from "./routes";
import React, { Fragment } from "react";
import './index.css'
// import { ParentsComments } from './components/Layout/ParentsComments'

// import { CourseSelection } from './components/Layout/CourseSelection'

function App() {
  return (
    // <CourseSelection />
    // <ParentsComments />
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.components;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
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
          );
        })}
      </Routes>
    </Router>
  )
}

export default App
