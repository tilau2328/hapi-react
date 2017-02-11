import React from 'react';
import { connect } from 'react-redux';

import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from '../components/Footer';

let TodoContainer = () => (
  <div>
    <VisibleTodoList />
    <Footer />
    <AddTodo />
  </div>
);


export default TodoContainer = connect()(TodoContainer);
