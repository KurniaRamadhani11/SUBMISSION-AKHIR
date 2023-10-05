/* eslint-disable object-curly-newline */
const { addBookHandler, getAllBooksHandler, getBookByIdHandler, updateBookHandler, delBookHandler } = require('./handler');

const routes = [
  {
    method: 'post',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'get',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: delBookHandler,
  },
];
module.exports = routes;
