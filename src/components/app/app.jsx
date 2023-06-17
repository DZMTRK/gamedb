import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Page404 from '../pages/page404'

const GamesTable = React.lazy(() => import('../games-table'))

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route
            path="/"
            element={
              <div>
                <header>
                  <h1>My favorite computer games list</h1>
                </header>
                <section>
                  <Suspense fallback={<div>LOADING TABLE DATA...</div>}>
                    <GamesTable />
                  </Suspense>
                </section>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
