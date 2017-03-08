const handlers = require('../handlers/books');

const listBooks = { method: "GET", path: "/books", handler: handlers.listBooks, config: { auth: 'jwt' } };
const addBook = { method: "POST", path: "/books", handler: handlers.addBook, config: { auth: 'jwt' } };
const getBookInfo = { method: "GET", path: "/books/{id}", handler: handlers.getBookInfo, config: { auth: 'jwt' } };
const getBook = { method: "GET", path: "/books/{id}/get", handler: handlers.getBook, config: { auth: 'jwt' } };

const routes = [ listBooks, addBook, getBookInfo, getBook ];
module.exports = routes;
