import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from '../get-game-data'
import NewItemInput from '../new-item-input';

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

  return (
    <div>
      <NewItemInput />
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight = {true}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default GamesTable;