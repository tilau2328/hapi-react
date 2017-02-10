import React, { Component } from 'react';
import { connect } from 'react-redux';

import VisibleTodoList from './VisibleTodoList.jsx';
import AddTodo from './AddTodo.jsx'; 
import Footer from '../components/Footer.jsx';

class TodoContainer extends Component {
  render(){
    return (
      <div>
        <VisibleTodoList />
        <Footer />
        <AddTodo />
      </div>
    );
  }
}

export default TodoContainer = connect()(TodoContainer);
