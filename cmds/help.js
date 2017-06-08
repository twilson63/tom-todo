const pkg = require('../package')

module.exports = function help () {
  return `
Welcome to ${pkg.name} version ${pkg.version}
-------------------------------

commands:

- todo ls : list todos
- todo add [todo text] : add new todo
- todo check [todo id] : mark todo a complete
- todo rm [todo id] : remove todo
  `
}
