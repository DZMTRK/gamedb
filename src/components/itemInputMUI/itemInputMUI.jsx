import React, { useCallback, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import addElementToTable from '../../service/addElement'


const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(item, genre, theme) {
  return {
    fontWeight:
      genre.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const labelProps = {
  shrink: true,
  required: false,
}

export default function NewItemInput({ setMessage, setOpen }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState(null)
  const [genre, setGenre] = useState([])
  const [raiting, setRaiting] = useState(null)
  const [developer, setDeveloper] = useState('')
  const [publisher, setPublisher] = useState([])
  const theme = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const genres = [
    'Arcade',
    'Adventure',
    'Fighting',
    'Racing',
    'Real Time Strategy (RTS)',
    'Role-playing (RPG)',
    'Shooter',
    'Simulator',
    'Strategy',
    'Turn-based strategy (TBS)',
  ]

  const addElement = useCallback(newItem => {
    dispatch(addElementToTable(newItem))
    setMessage(<p>{t('description.newItemMessage')}</p>)
    setOpen(true)
  }, [dispatch, setMessage, setOpen, t])

  const clearForm = useCallback(() => {
    setTitle('')
    setYear(1970)
    setGenre([])
    setRaiting(1)
    setDeveloper('')
    setPublisher([])
  }, [])

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
    clearForm()
  }, [title, year, genre, raiting, developer, publisher, addElement, clearForm])


  const handleTitleInput = useCallback(e => {
    setTitle(e.target.value.trim())
  }, [])
  const handleYearInput = useCallback(e => {
    setYear(e.target.value)
  }, [])
  const handleGenreInput = useCallback(e => {
    const {
      target: { value },
    } = e
    setGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
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
    <Box
      id="add_new_item_form"
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1 } }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <div>
        <TextField
          required
          id="title"
          label={t('description.gameTitleInput')}
          value={title}
          placeholder="e.g. Quake 3 Arena"
          InputLabelProps={labelProps}
          onChange={handleTitleInput}
        />
        <TextField
          required
          id="year"
          label={t('description.yearInput')}
          value={year}
          placeholder="1999"
          type="number"
          InputLabelProps={labelProps}
          InputProps={{ inputProps: { min: 1970, max: 2099 } }}
          onChange={handleYearInput}
        />
        <FormControl
          sx={{ m: 1, width: '25ch' }}
          required
        >
          <InputLabel
            id="genre"
            required={false}
          >
            {t('description.genreInput')}
          </InputLabel>
          <Select
            labelId="genre"
            id="demo-multiple-name"
            multiple
            value={genre}
            onChange={handleGenreInput}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {genres.map(item => (
              <MenuItem
                key={item}
                value={item}
                style={getStyles(item, genre, theme)}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          id="raiting"
          label={t('description.raitingInput')}
          type="number"
          value={raiting}
          placeholder="1"
          InputLabelProps={labelProps}
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          onChange={handleRaitingInput}
        />
        <TextField
          required
          id="developer"
          label={t('description.developerInput')}
          value={developer}
          placeholder="id Software"
          InputLabelProps={labelProps}
          onChange={handleDeveloperInput}
        />
        <TextField
          required
          id="publisher"
          label={t('description.publisherInput')}
          value={publisher}
          placeholder="EA,SEGA,Activision,Loki Software"
          InputLabelProps={labelProps}
          onChange={handlePublisherInput}
        />
        <Button sx={{ width: 150, height: 56, margin: 1 }} type="submit" variant="outlined" color="success">
          {t('description.buttonAdd')}
        </Button>
      </div>
    </Box>
  )
}
