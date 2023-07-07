import React, { Suspense, useCallback, useMemo, useState } from 'react'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import logo from '../../img/logo.png'
import GameChart from '../game-chart'
import LanguageSwitcher from '../language-switcher'
import Page404 from '../pages/page404'
import * as pagelist from '../pages/pagelist'
import ThemeSwither from '../theme-switcher'

import './app.css'

const GamesTable = React.lazy(() => import('../games-table'))


function App() {
  const { t } = useTranslation()
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode,
      },
    }),
    [mode],
  )

  const [checked, setChecked] = useState(false)

  const handleChange = useCallback(event => {
    setChecked(event.target.checked)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Routes>
            <Route path={pagelist.path404} element={<Page404 />} />
            <Route
              path={pagelist.rootPath}
              element={
                <div>
                  <header>
                    <div id="logoAndHeader">
                      <div id="logoContainer">
                        <img id="logo" src={logo} alt="" />
                      </div>
                      <h1>{t('description.h1')}</h1>
                      <div id="navigation">
                        <ThemeSwither colorMode={colorMode} theme={theme} />
                        <LanguageSwitcher />
                      </div>
                    </div>
                  </header>
                  <section>
                    <Container>
                      <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                        {checked ? <p>{t('description.viewSwitcherdescriptionON')}</p> : <p>{t('description.viewSwitcherdescriptionOFF')}</p>}
                        <Switch
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      </Stack>
                    </Container>
                    <Suspense fallback={<div>{t('description.loading')}</div>}>
                      {checked ? <GameChart /> : <GamesTable />}
                    </Suspense>
                  </section>
                </div>
            }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
