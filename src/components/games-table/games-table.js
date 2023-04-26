import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from '../get-game-data'

const columns = [
  { field: 'id', headerName: 'ID', type: 'int', width: 70 },
  { field: 'title', headerName: 'Title', type: 'str', flex: 1 },
  { field: 'year', headerName: 'Year', type: 'int', width: 70 },
  { field: 'genre', headerName: 'Genre', type: 'enum', flex: 1 },
  { field: 'raiting', headerName: 'Raiting', type: 'float', width: 70 },
  { field: 'developer', headerName: 'Developer', type: 'str', width: 200 },
  { field: 'publisher', headerName: 'Publisher', type: 'str', flex: 1 },
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