#!/usr/bin/env node

const Sonos = require('sonos').Sonos
const sonos = new Sonos(process.env.SONOS_HOST || '192.168.7.131', process.env.SONOS_PORT || 1400)

sonos.stop().then(result => {
  console.log('Stopped playing %j', result)
}).catch(err => { console.log('Error occurred %j', err) })

