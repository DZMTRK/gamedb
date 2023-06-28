import React, { Suspense } from 'react'

import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LanguageSwitcher from '../language-switcher'
import Page404 from '../pages/page404'
import * as pagelist from '../pages/pagelist'

const GamesTable = React.lazy(() => import('../games-table'))

function App() {
  const { t } = useTranslation()
  return (
    <Router>
      <div>
        <Routes>
          <Route path={pagelist.path404} element={<Page404 />} />
          <Route
            path={pagelist.rootPath}
            element={
              <div>
                <header>
                  <div>
                    <h1>{t('description.h1')}</h1>
                    <LanguageSwitcher />
                  </div>
                </header>
                <section>
                  <Suspense fallback={<div>{t('description.loading')}</div>}>
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
