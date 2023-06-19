import React, { useCallback, useState } from 'react'

import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'


function NewItemInput({ onItemAdd }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState(null)
  const [genre, setGenre] = useState([])
  const [raiting, setRaiting] = useState(null)
  const [developer, setDeveloper] = useState('')
  const [publisher, setPublisher] = useState([])
  const { t } = useTranslation()

  const onSubmit = useCallback(e => {
    e.preventDefault()
    const newItem = {
      title,
      year,
      genre,
      raiting,
      developer,
      publisher,
    }
    onItemAdd(newItem)
  }, [developer, genre, onItemAdd, publisher, raiting, title, year])

  const handleTitleInput = useCallback(e => { setTitle(e.target.value.trim()) }, [])
  const handleYearInput = useCallback(e => { setYear(e.target.value) }, [])
  const handleGenreInput = useCallback(e => { setGenre([e.target.value]) }, [])
  const handleRaitingInput = useCallback(e => { setRaiting(e.target.value.trim()) }, [])
  const handleDeveloperInput = useCallback(e => { setDeveloper(e.target.value.trim()) }, [])
  const handlePublisherInput = useCallback(e => { setPublisher(e.target.value.trim().split(',')) }, [])

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">
        {t('description.gameTitleInput')}
        <input
          id="title"
          type="text"
          placeholder={t('description.gameTitlePlaceholder')}
          required
          onChange={handleTitleInput}
        />
      </label>

      <label htmlFor="year">
        {t('description.yearInput')}
        <input
          id="year"
          type="number"
          placeholder="1970"
          min="1970"
          max="2099"
          step="1"
          required
          onChange={handleYearInput}
        />
      </label>

      <label htmlFor="genre">
        {t('description.genreInput')}
        <select
          name="genre"
          id="genre"
          required
          onChange={handleGenreInput}
        >

          <option value="">{t('description.genrePlaceholder')}</option>
          <option value="Arcade">Arcade</option>
          <option value="Adventure">Adventure</option>
          <option value="Fighting">Fighting</option>
          <option value="Racing">Racing</option>
          <option value="Real Time Strategy (RTS)">Real Time Strategy (RTS)</option>
          <option value="Role-playing (RPG)">Role-playing (RPG)</option>
          <option value="Shooter">Shooter</option>
          <option value="Simulator">Simulator</option>
          <option value="Strategy">Strategy</option>
          <option value="Turn-based strategy (TBS)">Turn-based strategy (TBS)</option>
        </select>
      </label>

      <label htmlFor="raiting">
        {t('description.raitingInput')}
        <input
          id="raiting"
          type="number"
          placeholder="1.0"
          min="1"
          max="10"
          step="0.1"
          required
          onChange={handleRaitingInput}
        />
      </label>

      <label htmlFor="developer">
        {t('description.developerInput')}
        <input
          id="developer"
          type="text"
          placeholder={t('description.developerPlaceholder')}
          required
          onChange={handleDeveloperInput}
        />
      </label>

      <label htmlFor="publisher">
        {t('description.publisherInput')}
        <input
          id="publisher"
          type="text"
          placeholder={t('description.publisherPlaceholder')}
          required
          onChange={handlePublisherInput}
        />
      </label>


      <Button type="submit" variant="outlined" color="success">
        {t('description.buttonAdd')}
      </Button>
    </form>
  )
}

export default NewItemInput
