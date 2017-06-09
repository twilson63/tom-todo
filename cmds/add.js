const store = require('../lib/store')
const { append, tap, prop, join, assoc, compose } = require('ramda')
const ls = require('./ls')

module.exports = compose(
  ls,
  prop('todos'),
  tap(setStore), // side-effect
  addTodo,
  createTodo,
  createTodoText
)

function setStore(state) {
  store.set(state)
}

function addTodo(todo) {
  return {
    counter: todo.id,
    todos: append(todo, store.get().todos)
  }
}

function createTodo(text) {
  return compose(
    assoc('completed', false),
    assoc('id', store.get().counter + 1),
    assoc('text', text)
  )({})
}

function createTodoText(data) {
  return join(' ', data)
}
