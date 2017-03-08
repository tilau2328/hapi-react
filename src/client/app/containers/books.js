import React, { Component } from 'react';
import AddBook from '../components/books/add_book';
import BookList from '../components/books/book_list';
import * as actions from '../actions';

class Books extends Component {
  constructor(props){
    super(props);
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        <AddBook onSubmit={this.props.addBook} />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books }
}

export default connect(mapStateToProps, actions)(Books);
