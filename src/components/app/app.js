import React, { Component } from 'react';

import AppHeader from '../app-header';
import GamesTable from '../games-table';


const App = () => {
    return (
      <div>
        <header>
          <AppHeader />
        </header>
        <section>
          <GamesTable />
        </section>
      </div>
    );
}

export default App;