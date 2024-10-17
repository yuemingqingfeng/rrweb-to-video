const rr = require('../bin/index')

const Transform = require('../bin/transform')


const events = require('./compare.js')

let trans = new Transform(events)


rr.transform(trans.events)

