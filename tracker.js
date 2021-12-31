'use strict';

const dgram = require('dgram');
const buffer = require('buffer');
const url_Parser = require('url').parse;

module.exports.getPeers = (torrent,callback) =>
{
    const socket= dgram.createSocket('udp4') //socket to send udp requests
    const url = torrent.announce.toString('utf-8');

    Udp_Send(socket,Build_Conne_Req(),url);

    socket.on('message',response=>{
        if(Resp_Type(response)==='connect')
        {
            const conn_Resp=Parse_Conn_Resp(response);
            const announce_Req=Build_Announce_Req(conn_resp.connection_Id);
        }
        else if(Resp_Type(response)==='announce')
        {
            const announce_Resp = Parse_Announce_Resp(response);
            callback(announce_Resp.peers);

        }
    });
};

function Udp_Send(socket,raw_url, message, callback)
{
    const url = new URL(raw_url);
    console.log(url);
    socket.send(message,0,message.length,url.port,url.host,callback);

}

function Resp_Type(resp) {
    
  }
  function Build_Conn_Req() {
    
  }

  function Parse_Conn_Resp(resp) {
    
  }

  function Build_Announce_Req(connId) {
    
  } 

  function Parse_Announce_Resp(resp) {
    
  }