#!/usr/bin/env node

const Sonos = require('sonos').Sonos
const Regions = require('sonos').SpotifyRegion
const sonos = new Sonos(process.env.SONOS_HOST || '192.168.7.131')

sonos.setSpotifyRegion(Regions.US)

var spotifyUri = 'spotify:user:consolefm:playlist:3duXTcWqSpfdGzecsYMaBb'

sonos.play(spotifyUri).then(success => {
  console.log('Yeay')
}).catch(err => { console.log('Error occurred %j', err) })

var playmode = 'SHUFFLE_NOREPEAT'
sonos.setPlayMode(playmode).then(success => {
	console.log('Rando')
}).catch(err => { console.log('Error occurred %j', err) })

sonos.setVolume(25).then(success => {
	console.log('Set volume')
}).catch(err => { console.log('Error occurred %j', err) })
