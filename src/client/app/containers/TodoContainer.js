import React from 'react';
import { connect } from 'react-redux';

import { VisibleTodoList, AddTodo, Footer } from '.';

let Todos = () => {
  return (
    <div>
      <VisibleTodoList />
      <AddTodo />
      <Footer />
    </div>
  );
};

export const TodosContainer = connect()(Todos);
 