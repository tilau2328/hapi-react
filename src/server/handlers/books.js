const controllers = require('../controllers/books');

const listBooks = function(req, res){
  const books = controllers.listBooks(function(err, books){
    if(err) return res({ error: err });
    var ret = [];
    books.map(function(book){
      ret.push(book.toDAO());
    });
    res(ret);
  });
}

const addBook = function(req, res){
  const data = req.payload;
  const title = data.title;
  const author = data.author;
  const file = data.file;

  controllers.addBook(title, author, file, function(err, book){
    if(err) return res({ error: err });
    res(book.toDAO());
  });
}

const getBookInfo = function(req, res){
  const id = req.params.id;
  controllers.getBook(id, function(err, book){
    if(err) return res({ error: err });
    res(book.toDAO());
  });
}

const getBook = function(req, res){
  const id = req.params.id;
  console.log(id);
  controllers.getBook(id, function(err, book){
    if(err) return res({ error: err });
    console.log(book.path);
    res.file(book.path);
  });
}

module.exports = {
  listBooks: listBooks,
  addBook: addBook,
  getBookInfo: getBookInfo,
  getBook: getBook
};
