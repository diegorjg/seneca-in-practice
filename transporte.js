require('seneca')().use('./math.js').listen({
    port: process.argv[2],
    host: '127.0.0.1'
  })