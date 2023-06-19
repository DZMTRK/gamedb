import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useTranslation } from 'react-i18next'

function DeleteDialog({ toggle, handleDialogClose, handleDialogDisagree, handleDialogAgree }) {
  const { t } = useTranslation()
  return (
    <Dialog
      open={toggle}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t('description.deleteDialogHeader')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t('description.deleteDialogMessage')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogDisagree}>
          {t('description.deleteDialogDisagree')}
        </Button>
        <Button onClick={handleDialogAgree} autoFocus>
          {t('description.deleteDialogAgree')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog
