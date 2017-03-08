const Book = require('../models/book');
var path = require('path');

const listBooks = function(callback){
  Book.find({}, function(err, books){
    if(err) return callback(err);
    callback(null, books);
  });
}

const addBook = function(title, author, file, callback){
  // TODO: Save file
  var bookPath = path.resolve(__dirname, '..', 'data', 'books');
  if(author) bookPath = path.resolve(bookPath, author);
  bookPath += path.resolve(bookPath, title);
  const new_book = new Book({ title: title, author: author, path: bookPath });
  new_book.save(callback);
}

const getBook = function(id, callback){
  Book.findById(id, function(err, book){
    if(err) return callback(err);
    callback(null, book);
  });
}

module.exports = {
  listBooks: listBooks,
  addBook: addBook,
  getBook: getBook
};
