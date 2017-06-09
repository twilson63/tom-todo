const store = require('../lib/store')
const ls = require('./ls')

module.exports = function (data) {
  const text = data.join(' ')
  const todos = store.get()
  const newTodo = createTodo(text, todos.length)
  const newTodoList = [...todos, newTodo]
  
  store.set(newTodoList)
  return ls()
}

function createTodo(text, length) {
  return {
    text,
    completed: false,
    id: length + 1
  }
}
