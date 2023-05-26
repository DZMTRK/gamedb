import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from '../get-game-data'
import NewItemInput from '../new-item-input';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const url = 'http://localhost:3002/game/';

const columns = [
  // { field: 'id', headerName: 'ID', type: 'int', width: 70 },
  { field: 'title', headerName: 'Title', type: 'str', flex: 3, editable: true },
  { field: 'year', headerName: 'Year', type: 'int', flex: 1, editable: true },
  { field: 'genre', headerName: 'Genre', type: 'enum', flex: 3, editable: true },
  { field: 'raiting', headerName: 'Raiting', type: 'float', flex: 1, editable: true },
  { field: 'developer', headerName: 'Developer', type: 'str', width: 200, editable: true },
  { field: 'publisher', headerName: 'Publisher', type: 'str', flex: 1, editable: true },
];

function GamesTable() {
  
  const [rows, setState] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [dialogState, setDialogState] = useState(false);
  const [actionMessage, setMessage] = useState('');

  useEffect(() => {
    getGameData().then((data) => {
      setState(data);
    });
  }, [])

  const addElement = (item) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    };
    fetch(url, requestOptions)
    .then(fetch(url))
    .then((response)=> response.json())
    .then((data) => setState([...rows, data]));
    setMessage('New item was added');
    setOpen(true);
  }

  const deleteElement = () => {
    const arr = [...rowSelectionModel]
    arr.forEach( async (element) => {
      let response = await fetch(url+element, {method: 'DELETE'});
      if (response.ok) {
        fetch(url)
        .then(responseGET => responseGET.json())
        .then(data => setState(data));
      }
    })
    if (arr.length > 0) {
      setMessage('Selected item(s) was(were) removed');
      setOpen(true);
    }
  };

  const handleDialogOpen = () => {
    setDialogState(true);
  };

  const handleDialogClose = () => {
    setDialogState(true);
  };

  const handleDialogDisagree = () => {
    setDialogState(false);
  };

  const handleDialogAgree = () => {
    setDialogState(false);
    deleteElement();
  };
  
  return (
    <div>
      <NewItemInput onItemAdd = {addElement}/>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight = {true}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection 
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        editMode="row"
      />
      <Button variant="outlined" onClick={handleDialogOpen}>DELETE ITEMS</Button>

      <Snackbar
        open = {open}
        autoHideDuration = {2000}
        onClose = { 
          (event, reason) => {
            if (reason === 'clickaway') {return}; 
            setOpen(false);
          }
        }
        message = {actionMessage}
        anchorOrigin={{vertical:'bottom', horizontal:'right'}}
      />

      <Dialog
        open={dialogState}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete selected items?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Do you really want to remove selected items from the list?
          They will be removed immediately and won't be restored. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogDisagree}>Disagree</Button>
          <Button onClick={handleDialogAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GamesTable;