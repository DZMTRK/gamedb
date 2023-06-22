import React, { Suspense, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import LanguageSwitcher from '../language-switcher'
import Page404 from '../pages/page404'

const GamesTable = React.lazy(() => import('../games-table'))

function App({ value, SWST }) {
  const rootPath = '/'
  const path404 = '/404'

  useEffect(() => SWST(), [SWST])

  const { t } = useTranslation()
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
                    <p>Ниже видно state - массив полученный из базы данных</p>
                    <p>{value.toString()}</p>
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


// // eslint-disable-next-line react-redux/mapStateToProps-no-store
// const mapStateToProps = state => ({ value: state })

// const mapDispatchToProps = dispatch => {
//   const { SWST } = bindActionCreators(actions, dispatch)
//   return { SWST: () => {
//     const randomValue = Math.floor(Math.random() * 10)
//     SWST(randomValue)
//   } }
// }

// eslint-disable-next-line react-redux/mapStateToProps-no-store
const mapStateToProps = state => ({ value: state })

const mapDispatchToProps = dispatch => {
  const { SWST } = bindActionCreators(actions, dispatch)
  return { SWST: () => {
    fetch('http://localhost:3002/game/')
      .then(response => response.json())
      .then(data => SWST(data))
  } }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
