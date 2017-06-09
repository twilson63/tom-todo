const store = require('../lib/store')
const { map, filter } = require('ramda')

module.exports = function () {
  const todos = store.get()

  return `
Todos
---------------------------------
${list(todos)}
---------------------------------
${remaining(todos)} Remaining ${todos.length} Total


  `
}

function remaining (todos) {
  return filter(function (todo) {
    return todo.completed === false
  }, todos).length
}

function li (todo) {
  return `[${todo.completed ? 'x' : ' '}] - ${todo.id} ${todo.text}`
}

function list (todos) {
  //return JSON.stringify(todos, null, 2)
  return map(li, todos).join('\n')
}
