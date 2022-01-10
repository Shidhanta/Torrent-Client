//opening torrent file
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrent = bencode.decode(fs.readFileSync('neuromancer.torrent'));

tracker.getPeers(torrent,peers=>{
    console.log(peers);
})

