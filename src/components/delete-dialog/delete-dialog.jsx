import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function DeleteDialog({ toggle, handleDialogClose, handleDialogDisagree, handleDialogAgree }) {
  return (
    <Dialog
      open={toggle}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Do you want to delete selected items?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really want to remove selected items from the list?
          They will be removed immediately and will not be restored.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogDisagree}>
          Disagree
        </Button>
        <Button onClick={handleDialogAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog
