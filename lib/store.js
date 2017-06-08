const fs = require('fs')

module.exports = { get, set }

function get () {
  return JSON.parse(
    fs.readFileSync('./todos.json', 'utf-8')
  )
}

function set (data) {
  return fs.writeFileSync('./todos.json',
    JSON.stringify(data, null, 2)
  )
}
