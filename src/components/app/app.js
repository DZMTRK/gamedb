import React, { Component } from 'react';

import GamesTable from '../games-table';


const App = () => {
    return (
      <div>
        <header>
          <h1>My favorite computer games list</h1>
        </header>
        <section>
          <GamesTable />
        </section>
      </div>
    );
}

export default App;