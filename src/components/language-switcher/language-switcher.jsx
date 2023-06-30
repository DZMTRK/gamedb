import React, { useCallback } from 'react'

import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
}

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const handleLanguageSwitch = useCallback(event => i18n.changeLanguage(event.target.name), [i18n])

  return (
    <div>
      {Object.keys(lngs).map(lng => (
        <Button
          key={lng}
          name={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? '900' : 'normal', color: 'white' }}
          type="submit"
          onClick={handleLanguageSwitch}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
