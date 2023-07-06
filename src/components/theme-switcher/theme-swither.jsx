import React from 'react'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'


export function ThemeSwither({ colorMode, theme }) {
  return (
    <div id="theme_switcher">
      <span>
        swith to
        {' '}
        {theme.palette.mode === 'light' ? 'dark' : 'light' }
      </span>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="warning">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>

  )
}
