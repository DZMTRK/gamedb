import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', type: 'int', width: 70 },
    { field: 'title', headerName: 'Title', type: 'str', width: 130 },
    { field: 'year', headerName: 'Year', type: 'int', width: 130 },
    { field: 'genre', headerName: 'Genre', type: 'enum', width: 90 },
    { field: 'raiting', headerName: 'Raiting', type: 'float', width: 90 },
    { field: 'developer', headerName: 'Developer', type: 'str', width: 90 },
    { field: 'publisher', headerName: 'Publisher', type: 'str', width: 90 },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

function GamesTable() {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
      />
    </div>
  );
}

export default GamesTable;