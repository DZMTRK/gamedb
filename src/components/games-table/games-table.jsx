import React, { useCallback, useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { tableData } from '../../reducers/selector'
import deleteElementFromTable from '../../service/deleteElement'
import getTableData from '../../service/getTableData'
import mutateElement from '../../service/mutateElement'
import NewItemInput from '../new-item-input'

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

  const [rowSelectionModel, setRowSelectionModel] = useState([])
  const [open, setOpen] = useState(false)
  // const [actionMessage, setMessage] = useState('')
  const [dialogState, setDialogState] = useState(false)

  const data = useSelector(tableData)


  useEffect(
    () => getTableData(dispatch), [dispatch],
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
    deleteElementFromTable(rowSelectionModel, dispatch)
  }, [dispatch, rowSelectionModel])

  return (
    <div>
      <NewItemInput />
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
        // message={actionMessage}
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
