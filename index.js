//opening torrent file
const fs = require('fs');

const torrent = fs.readFileSync('neuromancer.torrent');
console.log(torrent.toString('utf-8'));
