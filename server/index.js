

var express = require('express');
var bodyParser = require('body-parser');
//var request = require('request')
let axios = require('axios')
// let config = require('../config.js').TOKEN;
let getFromLastFM = require('../server/lastFM.js')
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/items', function (req, res) {
  let artist = req.body.artist
  console.log('Post request heard, The artist searched for was', artist)
  getFromLastFM.getNewArtistsByArtist(artist, function(data) {
    res.send(data.similarartists.artist)
  })
  //make a request to LASTFM using the request(options, built out callback ) .then() => res.send()
});

app.post('/tracks', function(req, res) {
  let subArtist = req.body.subArtist
  console.log('post heard this is the subartists posted',req.body.subArtist)
    getFromLastFM.getTracksbySubArtist(subArtist, function(data) {
      console.log('Post heard from getTracksbySubArtist')
      res.send(data.toptracks.track)
    })
})


app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});
