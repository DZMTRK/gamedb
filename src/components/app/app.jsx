import React, { Suspense } from 'react'

import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Page404 from '../pages/page404'

const GamesTable = React.lazy(() => import('../games-table'))

function App() {
  const rootPath = '/'
  const path404 = '/404'
  const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Russian' },
  }
  const { t, i18n } = useTranslation()
  // const langSelectorStyle = lng => {
  //   const fontWeight = i18n.resolvedLanguage === lng ? 'bold' : 'normal'
  //   return fontWeight
  // }
  return (
    <Router>
      <div>
        <Routes>
          <Route path={path404} element={<Page404 />} />
          <Route
            path={rootPath}
            element={
              <div>
                <header>
                  <div>
                    <h1>{t('description.h1')}</h1>
                    <div>
                      {Object.keys(lngs).map(lng => (
                        // eslint-disable-next-line react/jsx-no-bind
                        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                          {lngs[lng].nativeName}
                        </button>
                      ))}
                    </div>
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
