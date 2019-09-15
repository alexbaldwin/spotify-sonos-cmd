#!/usr/bin/env node

const Sonos = require('sonos').Sonos
const sonos = new Sonos(process.env.SONOS_HOST || '192.168.7.131', process.env.SONOS_PORT || 1400)

sonos.getCurrentState().then(state => {
	console.log('Got current state %j', state);

	if (state == 'playing') {
		console.log('playing');
		return process.exit(0);
	} else {
		console.log('not playing');
		return process.exit(1);
	}

}).catch(err => { console.log('Error occurred %j', err) })
