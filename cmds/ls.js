const store = require('../lib/store')
const { join, map, compose, isNil, length, filter, propEq } = require('ramda')

module.exports = function(todos) {
  todos = isNil(todos) ? store.get().todos : todos
  return template(todos)
}

function template(todos) {
  return `
Todos
----------------------------------
${print(todos)}
----------------------------------
${remaining(todos)} remaining
`
}

function remaining(todos) {
  return length(filter(propEq('completed', true), todos))
}

function print(todos) {
  return compose(join('\n'), map(li))(todos)
}

function li(todo) {
  return `[${todo.completed ? 'x' : ' '}] - ${todo.id} ${todo.text}`
}
