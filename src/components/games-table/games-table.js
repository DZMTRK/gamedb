import React, { useEffect, useState, useCallback} from 'react';
import DeleteDialog from '../delete-dialog';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from '../get-game-data'
import NewItemInput from '../new-item-input';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';


const GamesTable = () => {
  
  const [rows, setState] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [actionMessage, setMessage] = useState('');
  const [dialogState, setDialogState] = useState(false);

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

  const mutateElement = useCallback(
    async (newRow) => {
      await fetch(url+newRow.id, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newRow)
      })
      setMessage('The Item was modified');
      setOpen(true);
      return newRow;
    },
    []
  )

  const handleDialogOpen = () => {
    if (rowSelectionModel.length > 0) {
      setDialogState(true);
    }  
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
        processRowUpdate={mutateElement}
        onProcessRowUpdateError={(error) => console.log(error)}
      />
      <Button variant="outlined" color="error" onClick={handleDialogOpen}>
        DELETE ITEMS
      </Button>
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
      <DeleteDialog 
        toggle={dialogState} 
        handleDialogClose={handleDialogClose}
        handleDialogDisagree={handleDialogDisagree}
        handleDialogAgree={handleDialogAgree}
      />     
    </div>
  );
}

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

export default GamesTable;