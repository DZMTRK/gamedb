import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getGameData } from './get-game-data'

const columns = [
  { field: 'id', headerName: 'ID', type: 'int', width: 70 },
  { field: 'title', headerName: 'Title', type: 'str', width: 130 },
  { field: 'year', headerName: 'Year', type: 'int', width: 130 },
  { field: 'genre', headerName: 'Genre', type: 'enum', width: 90 },
  { field: 'raiting', headerName: 'Raiting', type: 'float', width: 90 },
  { field: 'developer', headerName: 'Developer', type: 'str', width: 90 },
  { field: 'publisher', headerName: 'Publisher', type: 'str', width: 90 },
];

function GamesTable() {
  
  const [rows, setRows] = useState([]);

  getGameData().then((data) => {
    setRows(data);
  });
  
  return (
    <div className="tableDataGrid">
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