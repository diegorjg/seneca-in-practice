var seneca = require('seneca')()

seneca.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
  var sum = msg.left + msg.right
  respond(null, {answer: sum})
})

module.exports = seneca