import React, { useCallback, useState } from 'react'

import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import addElementToTable from '../../service/addElement'


function NewItemInput({ setMessage, setOpen }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState(null)
  const [genre, setGenre] = useState([])
  const [raiting, setRaiting] = useState(null)
  const [developer, setDeveloper] = useState('')
  const [publisher, setPublisher] = useState([])
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const addElement = useCallback(newItem => {
    dispatch(addElementToTable(newItem))
    setMessage(<p>{t('description.newItemMessage')}</p>)
    setOpen(true)
  }, [dispatch, setMessage, setOpen, t])


  const onSubmit = useCallback(e => {
    e.preventDefault()
    const item = {
      title,
      year,
      genre,
      raiting,
      developer,
      publisher,
    }
    addElement(item)
  }, [title, year, genre, raiting, developer, publisher, addElement])


  const handleTitleInput = useCallback(e => {
    setTitle(e.target.value.trim())
  }, [])
  const handleYearInput = useCallback(e => {
    setYear(e.target.value)
  }, [])
  const handleGenreInput = useCallback(e => {
    setGenre([e.target.value])
  }, [])
  const handleRaitingInput = useCallback(e => {
    setRaiting(e.target.value.trim())
  }, [])
  const handleDeveloperInput = useCallback(e => {
    setDeveloper(e.target.value.trim())
  }, [])
  const handlePublisherInput = useCallback(e => {
    setPublisher(e.target.value.trim().split(','))
  }, [])

  return (
    <form id="add_new_item_form" onSubmit={onSubmit}>
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
          <option value="Arcade">{t('description.genreArcade')}</option>
          <option value="Adventure">{t('description.genreAdventure')}</option>
          <option value="Fighting">{t('description.genreFighting')}</option>
          <option value="Racing">{t('description.genreRacing')}</option>
          <option value="Real Time Strategy (RTS)">{t('description.genreRTS')}</option>
          <option value="Role-playing (RPG)">{t('description.genreRPG')}</option>
          <option value="Shooter">{t('description.genreShooter')}</option>
          <option value="Simulator">{t('description.genreSimulator')}</option>
          <option value="Strategy">{t('description.genreStrategy')}</option>
          <option value="Turn-based strategy (TBS)">{t('description.genreTBS')}</option>
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
