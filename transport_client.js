var seneca = require('seneca')()
seneca
  .client({type: 'tcp', host: '127.0.0.1'})
  .act({role: 'math', cmd: 'sum', left: process.argv[2], right: process.argv[3]}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
    this.close()
  })