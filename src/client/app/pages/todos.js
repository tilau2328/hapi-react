import React, { Component } from 'react';
import { TodoContainer } from '../containers';

export class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoContainer />
      </div>
    );
  }
}
