import React, { Component } from 'react';

import AppHeader from '../app-header';
import GamesTable from '../games-table';
import AddButton from '../add-button';

export default class App extends Component {

  render() {
    return (
      <div>
        <header>
          <AppHeader />
        </header>
        <section>
          <GamesTable />
          <AddButton />
        </section>
      </div>
    );
  };
}