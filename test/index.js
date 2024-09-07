const rr = require('../bin/index')

const Transform = require('../bin/transform')


const events = require('./test.js')

let trans = new Transform(events)


rr.transform(trans.events)

