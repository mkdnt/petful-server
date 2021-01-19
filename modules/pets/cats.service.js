const Queue = require('../queue/Queue')
const store = require('../../store')
const { cats } = require('../../store')

// Set up initial data.
// --------------------

const cats = new Queue()

store.cats.forEach(cat => pets.cats.enqueue(cat))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    cats.show()
  },

  dequeue(type) {
    // Remove a pet from the queue.
    return pets[type].dequeue();
  }
}
