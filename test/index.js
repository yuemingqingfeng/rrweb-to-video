const rr = require('../src/index')

const Transform = require('../src/transform')


const events = require('./test.js')

let trans = new Transform(events)

rr.transform(trans.events)

