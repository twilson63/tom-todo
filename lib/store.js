const fs = require('fs')

module.exports = { get, set }

function get () {
  let todos
  try {
    todos = fs.readFileSync('./todos.json', 'utf-8')
  } catch (err) {
    todos = []
  }
  return JSON.parse(todos)
}

function set (data) {
  return fs.writeFileSync('./todos.json',
    JSON.stringify(data, null, 2)
  )
}
