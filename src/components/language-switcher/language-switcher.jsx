import React, { useCallback } from 'react'

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
        <button
          key={lng}
          name={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          type="submit"
          onClick={handleLanguageSwitch}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
