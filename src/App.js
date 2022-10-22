import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import { publicRoutes } from "./routes";
import { Fragment } from 'react';
import "./index.css";

function App() {
  return (
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
  );
}

export default App;
