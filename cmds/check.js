const store = require('../lib/store')
const { map } = require('ramda')
const ls = require('./ls')

module.exports = function (data) {
  // convert from array to an id
  const id = parseInt(head(data), 10)
  const todos = store.get()
  store.set(
    map(toggleComplete(id), todos)
  )
  return ls()
}

function toggleComplete (id) {
  return function (todo) {
    if (todo.id === id) {
      //return {...todo, completed: not(todo.completed) }
      return Object.assign({}, todo, { completed: not(todo.completed) })
    } else {
      return todo
    }
  }

}

function not (v) {
  return !v
}

function head (a) {
  return a[0]
}
