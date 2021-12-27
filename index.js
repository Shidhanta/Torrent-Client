//opening torrent file
const fs = require('fs');
const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('neuromancer.torrent'));
console.log(torrent.announce.toString('utf-8'));
