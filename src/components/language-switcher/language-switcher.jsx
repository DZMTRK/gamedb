import React, { useCallback } from 'react'

import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Russian' },
  }

  const handleLanguageSwitch = useCallback(lng => i18n.changeLanguage(lng), [i18n])

  return (
    <div>
      {Object.keys(lngs).map(lng => (
        // eslint-disable-next-line react/jsx-no-bind
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={handleLanguageSwitch}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher