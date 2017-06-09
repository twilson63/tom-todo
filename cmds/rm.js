const store = require('../lib/store')
const { filter } = require('ramda')
const ls = require('./ls')

module.exports = function (data) {
  // convert data to id
  // get todos
  // remove the todo that matches an id
  const id = parseInt(head(data), 10)
  const todos = store.get()
  store.set(filter(removeTodo(id), todos))
  return ls()
}

function removeTodo (id) {
  return function (todo) {
    if (todo.id === id) {
      return false
    } else {
      return true
    }
  }
}

function head (a) {
  return a[0]
}
