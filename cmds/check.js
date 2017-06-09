const store = require('../lib/store')
const { compose, prop, head, tap, map, equals, not } = require('ramda')
const ls = require('./ls')

module.exports = compose(ls, tap(setStore), checkTodo, extractTodoId)

function setStore(todos) {
  store.set(Object.assign({}, store.get(), { todos }))
}

function checkTodo(id) {
  function toggleComplete(todo) {
    return Object.assign({}, todo, { completed: not(todo.completed) })
  }

  return map(function(todo) {
    return equals(id, todo.id) ? toggleComplete(todo) : todo
  }, store.get().todos)
}

function extractTodoId(data) {
  return parseInt(head(data), 10)
}
