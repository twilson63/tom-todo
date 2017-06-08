// how to use the store module

const store = require('./lib/store')

store.set([{
  text: 'Create Add Item',
  id: 1,
  completed: false
}, {
  text: 'List Todo Items',
  id: 2,
  completed: false
}, {
  text: 'Print Help',
  id: 3,
  completed: true
}])

console.log(store.get())
