import React, { useCallback, useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../../actions'
import { getGameData } from '../get-game-data'
import NewItemInput from '../new-item-input'

const Snackbar = React.lazy(() => import('@mui/material/Snackbar'))
const DeleteDialog = React.lazy(() => import('../delete-dialog'))

const url = 'http://localhost:3002/game/'

const columns = [
  { field: 'title', headerName: 'Title', type: 'str', flex: 3, editable: true },
  { field: 'year', headerName: 'Year', type: 'int', flex: 1, editable: true },
  { field: 'genre', headerName: 'Genre', type: 'enum', flex: 3, editable: true },
  { field: 'raiting', headerName: 'Raiting', type: 'float', flex: 1, editable: true },
  { field: 'developer', headerName: 'Developer', type: 'str', width: 200, editable: true },
  { field: 'publisher', headerName: 'Publisher', type: 'str', flex: 1, editable: true },
]

function GamesTable() {
  const [rowSelectionModel, setRowSelectionModel] = useState([])
  const [open, setOpen] = useState(false)
  const [actionMessage, setMessage] = useState('')
  const [dialogState, setDialogState] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const snackbarHideDuration = 2000
  const snackbarPosition = { vertical: 'bottom', horizontal: 'right' }
  const getData = useCallback(() => getGameData().then(data => dispatch(actions.getData(data))), [dispatch])


  const selector = state => state.gametable.gametable
  const data = useSelector(selector)


  useEffect(
    getData, [getData],
  )

  const addElement = useCallback(item => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    }
    fetch(url, requestOptions)
      .then(() => getData())
      .then(setMessage(<p>{t('description.newItemMessage')}</p>), setOpen(true))
  }, [getData, t])

  const deleteElement = useCallback(() => {
    const arr = [...rowSelectionModel]
    arr.forEach(async element => {
      const response = await fetch(url + element, { method: 'DELETE' })
      if (response.ok) {
        getData()
      }
    })
    if (arr.length > 0) {
      setMessage(<p>{t('description.deleteItemMessage')}</p>)
      setOpen(true)
    }
  }, [getData, rowSelectionModel, t])

  const mutateElement = useCallback(
    async newRow => {
      await fetch(url + newRow.id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newRow),
      })
      setMessage(<p>{t('description.mutateItemMessage')}</p>)
      setOpen(true)
      return newRow
    },
    [t],
  )

  const onProcessRowUpdateError = useCallback(error => console.error('Something went wrong', error), [])

  const onRowSelectionModelChange = useCallback(newRowSelectionModel => {
    setRowSelectionModel(newRowSelectionModel)
    return rowSelectionModel
  }, [rowSelectionModel])

  const handleSnackbarClose = useCallback((event, reason) => {
    if (reason === 'clickaway') { return }
    setOpen(false)
  }, [])

  const handleDialogOpen = useCallback(() => {
    if (rowSelectionModel.length > 0) {
      setDialogState(true)
    }
  }, [rowSelectionModel.length])

  const handleDialogClose = useCallback(() => {
    setDialogState(true)
  }, [])

  const handleDialogDisagree = useCallback(() => {
    setDialogState(false)
  }, [])

  const handleDialogAgree = useCallback(() => {
    setDialogState(false)
    deleteElement()
  }, [deleteElement])

  return (
    <div>
      <NewItemInput onItemAdd={addElement} />
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={onRowSelectionModelChange}
        rowSelectionModel={rowSelectionModel}
        editMode="row"
        processRowUpdate={mutateElement}
        onProcessRowUpdateError={onProcessRowUpdateError}
      />
      <Button variant="outlined" color="error" onClick={handleDialogOpen}>
        {t('description.buttonDelete')}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={snackbarHideDuration}
        onClose={handleSnackbarClose}
        message={actionMessage}
        anchorOrigin={snackbarPosition}
      />
      <DeleteDialog
        toggle={dialogState}
        handleDialogClose={handleDialogClose}
        handleDialogDisagree={handleDialogDisagree}
        handleDialogAgree={handleDialogAgree}
      />
    </div>
  )
}

export default GamesTable
