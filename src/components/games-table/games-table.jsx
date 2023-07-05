import React, { useCallback, useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectTableData } from '../../reducers/selector'
import deleteElementFromDB from '../../service/deleteElement'
import getTableData from '../../service/getTableData'
import mutateElement from '../../service/mutateElement'
import NewItemInput from '../itemInputMUI/itemInputMUI'
import * as pagelist from '../pages/pagelist'


const Snackbar = React.lazy(() => import('@mui/material/Snackbar'))
const DeleteDialog = React.lazy(() => import('../delete-dialog'))

const columns = [
  { field: 'title', headerName: 'Title', type: 'str', flex: 3, editable: true },
  { field: 'year', headerName: 'Year', type: 'int', flex: 1, editable: true },
  { field: 'genre', headerName: 'Genre', type: 'enum', flex: 3, editable: true },
  { field: 'raiting', headerName: 'Raiting', type: 'float', flex: 1, editable: true },
  { field: 'developer', headerName: 'Developer', type: 'str', width: 200, editable: true },
  { field: 'publisher', headerName: 'Publisher', type: 'str', flex: 1, editable: true },
]
const snackbarHideDuration = 2000
const snackbarPosition = { vertical: 'bottom', horizontal: 'right' }

function GamesTable() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [rowSelectionModel, setRowSelectionModel] = useState([])
  const [open, setOpen] = useState(false)
  const [actionMessage, setMessage] = useState('')
  const [dialogState, setDialogState] = useState(false)

  const addDataToTable = useCallback(() => dispatch(getTableData())
    .catch(() => navigate(pagelist.path404)), [dispatch, navigate])

  const data = useSelector(selectTableData)

  useEffect(
    () => { addDataToTable() }, [addDataToTable],
  )

  const deleteElement = useCallback(selectedElements => {
    deleteElementFromDB(selectedElements).then(() => addDataToTable())
    setMessage(<p>{t('description.deleteItemMessage')}</p>)
    setOpen(true)
  }, [addDataToTable, t])

  const handleEditElement = useCallback((newItem, oldItem) => mutateElement(newItem, oldItem)
    .then(newItem => {
      setMessage(<p>{t('description.mutateItemMessage')}</p>)
      setOpen(true)
      return newItem
    }).catch(() => {
      setMessage(<p>{t('description.mutateItemMessageFail')}</p>)
      setOpen(true)
      return oldItem
    }), [t])

  const onProcessRowUpdateError = useCallback(error => console.error('Something went wrong', error), [])

  const onRowSelectionModelChange = useCallback(newRowSelectionModel => {
    setRowSelectionModel(newRowSelectionModel)
    return rowSelectionModel
  }, [rowSelectionModel])

  const handleSnackbarClose = useCallback(() => setOpen(false), [])

  const handleDialogOpen = useCallback(() => {
    if (rowSelectionModel.length > 0) {
      setDialogState(true)
    }
  }, [rowSelectionModel.length])

  const handleDialogClose = useCallback(() => setDialogState(true), [])

  const handleDialogDisagree = useCallback(() => setDialogState(false), [])

  const handleDialogAgree = useCallback(() => {
    setDialogState(false)
    deleteElement(rowSelectionModel)
  }, [deleteElement, rowSelectionModel])


  return (
    <div>
      <NewItemInput setMessage={setMessage} setOpen={setOpen} />
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={onRowSelectionModelChange}
        rowSelectionModel={rowSelectionModel}
        editMode="row"
        processRowUpdate={handleEditElement}
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
