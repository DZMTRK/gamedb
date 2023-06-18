import React, { useCallback, useState } from 'react'

import Button from '@mui/material/Button'


function NewItemInput({ onItemAdd }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState(null)
  const [genre, setGenre] = useState([])
  const [raiting, setRaiting] = useState(null)
  const [developer, setDeveloper] = useState('')
  const [publisher, setPublisher] = useState([])

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
        Game Title
        <input
          id="title"
          type="text"
          placeholder="Game Name"
          required
          onChange={handleTitleInput}
        />
      </label>

      <label htmlFor="year">
        Year
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
        Genre
        <select
          name="genre"
          id="genre"
          required
          onChange={handleGenreInput}
        >

          <option value="">--Please choose an option--</option>
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
        Raiting
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
        Developer
        <input
          id="developer"
          type="text"
          required
          onChange={handleDeveloperInput}
        />
      </label>

      <label htmlFor="publisher">
        Publisher
        <input
          id="publisher"
          type="text"
          placeholder="split inputs with commas"
          required
          onChange={handlePublisherInput}
        />
      </label>


      <Button type="submit" variant="outlined" color="success">
        +ADD
      </Button>
    </form>
  )
}

export default NewItemInput
