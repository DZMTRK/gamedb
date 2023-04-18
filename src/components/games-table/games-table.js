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

  const getGameData = async () => {
    const urlToFetch = 'http://localhost:3002/game';
    try {
      let response = await fetch(urlToFetch);
      if (response.ok) {
        let jsonResponse = await response.json();
        return jsonResponse;
      };
    } catch (error) {
      console.log(error);
    };
  };

  const rows = 
  [
    { id: 1, title: 'demotest', year: '2023', genre: 'demotest' },
    { id: 2, title: 'demotest', year: '2023', genre: 'demotest' },
    { id: 3, title: 'demotest', year: '2023', genre: 'demotest' },
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