import React, { Component } from 'react';

import AppHeader from '../app-header';
import GamesTable from '../games-table';


import './app.css';


export default class App extends Component {

  render() {
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
  };
}