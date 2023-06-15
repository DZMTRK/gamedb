import React, { Suspense } from 'react'

const GamesTable = React.lazy(() => import('../games-table'))


function App() {
  return (
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
  )
}

export default App
