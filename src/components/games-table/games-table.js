import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from '../get-game-data'
import NewItemInput from '../new-item-input';

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
    .then((data) => setState([...rows, data]))
  }

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
      />
    </div>
  );
}

export default GamesTable;