const store = require('../lib/store')
const { tap, head, reject, prop, propEq, compose } = require('ramda')

const ls = require('./ls')

module.exports = compose(
  ls,
  tap(setStore),
  removeTodo,
  extractTodoId
)

function setStore(todos) {
  store.set(Object.assign({}, store.get(), { todos }))
}

function removeTodo(id) {
  return compose(reject(propEq('id', id)), prop('todos'))(store.get())
}

function extractTodoId(data) {
  return parseInt(head(data), 10)
}
