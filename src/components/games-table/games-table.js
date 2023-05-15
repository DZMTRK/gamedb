import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from '../get-game-data'
import NewItemInput from '../new-item-input';
import Snackbar from '@mui/material/Snackbar';


const url = 'http://localhost:3002/game/';

const columns = [
  // { field: 'id', headerName: 'ID', type: 'int', width: 70 },
  { field: 'title', headerName: 'Title', type: 'str', flex: 3 },
  { field: 'year', headerName: 'Year', type: 'int', flex: 1 },
  { field: 'genre', headerName: 'Genre', type: 'enum', flex: 3 },
  { field: 'raiting', headerName: 'Raiting', type: 'float', flex: 1 },
  // { field: 'developer', headerName: 'Developer', type: 'str', width: 200 },
  // { field: 'publisher', headerName: 'Publisher', type: 'str', flex: 1 },
];

function GamesTable() {
  
  const [rows, setState] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
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
    setMessage('Selected item(s) was(were) removed');
    setOpen(true);
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
      />
      <button onClick={deleteElement}>DELETE ITEM</button>
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
    </div>
  );
}

export default GamesTable;